import fs from 'node:fs';

const BING_API_KEY = process.env.BING_API_KEY || process.env.BING_WEBMASTER_API_KEY;
const SITE_URL = process.env.BING_SITE_URL || 'https://www.mothebroker.com';
const STATE_PATH = 'reports/last-submission.json';
const RESUBMIT_WINDOW_HOURS = Number(process.env.SEO_RESUBMIT_WINDOW_HOURS || 48);
const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504]);
const MAX_RETRIES = Number(process.env.SEO_RETRY_ATTEMPTS || 3);
const BASE_DELAY_MS = Number(process.env.SEO_RETRY_BASE_DELAY_MS || 1000);

/**
 * 2026 note:
 * - Bing Webmaster API base is `https://ssl.bing.com/webmaster/api.svc`
 * - Do NOT hardcode API keys in the repo. Use env var `BING_API_KEY`.
 */
const BING_API_BASE = 'https://ssl.bing.com/webmaster/api.svc/json';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const loadState = () => {
  try {
    return JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
  } catch {
    return {};
  }
};

const saveState = (state) => {
  fs.mkdirSync('reports', { recursive: true });
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
};

const wasRecentlySubmitted = (state, service, url) => {
  const ts = state?.[service]?.[url];
  if (!ts) return false;
  const ageMs = Date.now() - Date.parse(ts);
  return ageMs >= 0 && ageMs < RESUBMIT_WINDOW_HOURS * 60 * 60 * 1000;
};

const markSubmitted = (state, service, urls) => {
  state[service] = state[service] || {};
  const now = new Date().toISOString();
  for (const url of urls) {
    state[service][url] = now;
  }
};

const extractUrlsWithLastmod = () => {
  const xml = fs.readFileSync('public/sitemap.xml', 'utf8');
  const items = [];
  const urlRegex = /<url>([\s\S]*?)<\/url>/g;
  let m;
  while ((m = urlRegex.exec(xml)) !== null) {
    const block = m[1];
    const loc = (block.match(/<loc>([^<]+)<\/loc>/) || [])[1];
    if (!loc) continue;
    const lastmodRaw = (block.match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1];
    const lastmod = lastmodRaw ? Date.parse(lastmodRaw) : 0;
    items.push({ loc, lastmod });
  }
  return items;
};

if (!BING_API_KEY) {
  console.error('ERROR: Missing Bing API key env variable (BING_API_KEY or BING_WEBMASTER_API_KEY).');
  console.log('Set it and re-run. Example (PowerShell):');
  console.log("$env:BING_API_KEY='YOUR_KEY'; node scripts/submit-bing-gsc.mjs");
  process.exit(1);
}

const sitemapItems = extractUrlsWithLastmod();
console.log(`Found ${sitemapItems.length} URLs in sitemap`);

// Submit to Bing in batches of 100
const submitToBing = async (urlBatch, batchNum) => {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(
        `${BING_API_BASE}/SubmitUrlbatch?apikey=${encodeURIComponent(BING_API_KEY)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            siteUrl: SITE_URL,
            urlList: urlBatch
          })
        }
      );
      const result = await response.text();
      console.log(`Bing batch ${batchNum}: ${response.status} - ${result}`);
      if (response.ok) {
        return true;
      }
      if (!RETRYABLE_STATUS.has(response.status) || attempt === MAX_RETRIES) {
        return false;
      }
      const delay = BASE_DELAY_MS * Math.pow(2, attempt);
      console.warn(`Retrying Bing batch ${batchNum} in ${delay}ms...`);
      await sleep(delay);
    } catch (error) {
      if (attempt === MAX_RETRIES) {
        console.error(`Bing batch ${batchNum} error:`, error.message);
        return false;
      }
      const delay = BASE_DELAY_MS * Math.pow(2, attempt);
      console.warn(`Network error on Bing batch ${batchNum}, retrying in ${delay}ms...`);
      await sleep(delay);
    }
  }
};

// Submit sitemap to Bing (SubmitFeed endpoint)
const submitSitemapToBing = async () => {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(
        `${BING_API_BASE}/SubmitFeed?apikey=${encodeURIComponent(BING_API_KEY)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            siteUrl: SITE_URL,
            feedUrl: `${SITE_URL}/sitemap.xml`
          })
        }
      );
      const result = await response.text();
      console.log(`Bing sitemap submission: ${response.status} - ${result}`);
      if (response.ok || !RETRYABLE_STATUS.has(response.status) || attempt === MAX_RETRIES) {
        return;
      }
      const delay = BASE_DELAY_MS * Math.pow(2, attempt);
      console.warn(`Retrying Bing sitemap submit in ${delay}ms...`);
      await sleep(delay);
    } catch (error) {
      if (attempt === MAX_RETRIES) {
        console.error('Bing sitemap error:', error.message);
        return;
      }
      const delay = BASE_DELAY_MS * Math.pow(2, attempt);
      await sleep(delay);
    }
  }
};

// Main execution
const run = async () => {
  const state = loadState();
  // Submit sitemap to Bing
  console.log('\n--- Submitting sitemap to Bing ---');
  await submitSitemapToBing();

  // Submit URLs to Bing in batches
  console.log('\n--- Submitting URLs to Bing ---');
  const DAILY_QUOTA = Number(process.env.BING_URL_DAILY_QUOTA || 100);
  const batchSize = Math.min(100, DAILY_QUOTA);

  const urlsNewestFirst = sitemapItems
    .slice()
    .sort((a, b) => (b.lastmod || 0) - (a.lastmod || 0))
    .map((x) => x.loc);

  const urlsToSubmit = urlsNewestFirst
    .filter((url) => !wasRecentlySubmitted(state, 'bingUrls', url))
    .slice(0, DAILY_QUOTA);

  let successCount = 0;
  for (let i = 0; i < urlsToSubmit.length; i += batchSize) {
    const batch = urlsToSubmit.slice(i, i + batchSize);
    const ok = await submitToBing(batch, Math.floor(i / batchSize) + 1);
    if (ok) {
      successCount += batch.length;
      markSubmitted(state, 'bingUrls', batch);
      saveState(state);
    }
    // Small delay between batches
    await new Promise(r => setTimeout(r, 500));
  }

  console.log('\n--- Summary ---');
  console.log(`Total URLs submitted to Bing: ${successCount}/${sitemapItems.length}`);
};

run().catch(console.error);
