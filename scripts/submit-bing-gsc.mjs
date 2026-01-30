import fs from 'node:fs';

const BING_API_KEY = process.env.BING_API_KEY;
const SITE_URL = process.env.BING_SITE_URL || 'https://www.mothebroker.com';

/**
 * 2026 note:
 * - Bing Webmaster API base is `https://ssl.bing.com/webmaster/api.svc`
 * - Do NOT hardcode API keys in the repo. Use env var `BING_API_KEY`.
 */
const BING_API_BASE = 'https://ssl.bing.com/webmaster/api.svc/json';

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
  console.error('ERROR: Missing BING_API_KEY environment variable.');
  console.log('Set it and re-run. Example (PowerShell):');
  console.log("$env:BING_API_KEY='YOUR_KEY'; node scripts/submit-bing-gsc.mjs");
  process.exit(1);
}

const sitemapItems = extractUrlsWithLastmod();
console.log(`Found ${sitemapItems.length} URLs in sitemap`);

// Submit to Bing in batches of 100
const submitToBing = async (urlBatch, batchNum) => {
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
    return response.ok;
  } catch (error) {
    console.error(`Bing batch ${batchNum} error:`, error.message);
    return false;
  }
};

// Submit sitemap to Bing (SubmitFeed endpoint)
const submitSitemapToBing = async () => {
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
  } catch (error) {
    console.error('Bing sitemap error:', error.message);
  }
};

// Main execution
const run = async () => {
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

  const urlsToSubmit = urlsNewestFirst.slice(0, DAILY_QUOTA);

  for (let i = 0; i < urlsToSubmit.length; i += batchSize) {
    const batch = urlsToSubmit.slice(i, i + batchSize);
    await submitToBing(batch, Math.floor(i / batchSize) + 1);
    // Small delay between batches
    await new Promise(r => setTimeout(r, 500));
  }

  console.log('\n--- Summary ---');
  console.log(`Total URLs submitted to Bing: ${urlsToSubmit.length}/${sitemapItems.length}`);
};

run().catch(console.error);
