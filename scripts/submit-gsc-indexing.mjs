/**
 * GSC Indexing API Submission Script
 * Submits URLs to Google for indexing using the Indexing API
 *
 * SETUP: Add this service account as a user in GSC:
 * gsc-content-generator@bids-ff2d6.iam.gserviceaccount.com
 */

import fs from 'node:fs';
import { GoogleAuth } from 'google-auth-library';

const SITE_URL = 'https://www.mothebroker.com';
const CREDENTIALS_PATH = './gsc-credentials.json';
const DAILY_QUOTA = Number(process.env.GSC_INDEXING_DAILY_QUOTA || 200);
const STATE_PATH = 'reports/last-submission.json';
const RESUBMIT_WINDOW_HOURS = Number(process.env.SEO_RESUBMIT_WINDOW_HOURS || 48);
const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504]);
const MAX_RETRIES = Number(process.env.SEO_RETRY_ATTEMPTS || 3);
const BASE_DELAY_MS = Number(process.env.SEO_RETRY_BASE_DELAY_MS || 1000);
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

const markSubmitted = (state, service, url) => {
  state[service] = state[service] || {};
  state[service][url] = new Date().toISOString();
};

const prioritizeUrls = (urls) => {
  const tier1 = [];
  const tier2 = [];
  const tier3 = [];

  for (const url of urls) {
    const path = url.replace(SITE_URL, '');
    if (path === '/' || path === '/about' || path === '/contact' || path.startsWith('/calculator')) {
      tier1.push(url);
    } else if (path.startsWith('/loan-programs') || path.startsWith('/areas') || path.startsWith('/resources') || path.startsWith('/guides')) {
      tier2.push(url);
    } else {
      tier3.push(url);
    }
  }

  return [...tier1, ...tier2, ...tier3];
};

// Extract URLs + lastmod from sitemap (so we can submit most recent first)
const extractUrls = () => {
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
  return items
    .sort((a, b) => (b.lastmod || 0) - (a.lastmod || 0))
    .map((x) => x.loc);
};

// Submit single URL to Indexing API
const submitUrl = async (auth, url) => {
  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: url,
          type: 'URL_UPDATED'
        })
      });

      const result = await response.json();
      if (response.ok) {
        return { url, status: response.status, result };
      }
      if (!RETRYABLE_STATUS.has(response.status) || attempt === MAX_RETRIES) {
        return { url, status: response.status, result };
      }
      const delay = BASE_DELAY_MS * Math.pow(2, attempt);
      await sleep(delay);
    } catch (error) {
      if (attempt === MAX_RETRIES) {
        return { url, status: 'error', error: error.message };
      }
      const delay = BASE_DELAY_MS * Math.pow(2, attempt);
      await sleep(delay);
    }
  }
};

// Main execution
const run = async () => {
  console.log('GSC Indexing API Submission');
  console.log('===========================\n');

  // Check for credentials
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error('ERROR: gsc-credentials.json not found');
    console.log('\nTo set up GSC access:');
    console.log('1. Copy gsc-credentials.json from another project');
    console.log('2. Add service account email to GSC as owner/user');
    process.exit(1);
  }

  // Initialize auth
  const auth = new GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing']
  });

  // Extract URLs
  const urls = prioritizeUrls(extractUrls());
  console.log(`Found ${urls.length} URLs in sitemap`);
  console.log(`Will submit up to ${DAILY_QUOTA} URLs (API daily limit)\n`);
  const state = loadState();

  // Submit URLs (limit to daily quota)
  const urlsToSubmit = urls
    .filter((url) => !wasRecentlySubmitted(state, 'gscIndexing', url))
    .slice(0, DAILY_QUOTA);
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < urlsToSubmit.length; i++) {
    const url = urlsToSubmit[i];
    const result = await submitUrl(auth, url);

    if (result.status === 200) {
      successCount++;
      console.log(`[${i + 1}/${urlsToSubmit.length}] ✓ ${url}`);
      markSubmitted(state, 'gscIndexing', url);
      saveState(state);
    } else {
      errorCount++;
      console.log(`[${i + 1}/${urlsToSubmit.length}] ✗ ${url} - ${result.status}`);
      if (result.result?.error?.message) {
        console.log(`    Error: ${result.result.error.message}`);
        if (result.status === 429 && /quota/i.test(result.result.error.message)) {
          console.log('    Quota exhausted; stopping remaining submissions for today.');
          break;
        }
      }
    }

    // Small delay to avoid rate limiting
    if (i < urlsToSubmit.length - 1) {
      await new Promise(r => setTimeout(r, 100));
    }
  }

  console.log('\n===========================');
  console.log(`Summary: ${successCount} success, ${errorCount} errors`);
  console.log(`Total submitted: ${urlsToSubmit.length}/${urls.length}`);

  if (urls.length > DAILY_QUOTA) {
    console.log(`\nNote: ${urls.length - DAILY_QUOTA} URLs remaining for tomorrow's quota`);
  }
};

run().catch(error => {
  console.error('Script error:', error.message);
  console.log('\nIf you see "Permission denied", make sure:');
  console.log('1. Service account email is added to GSC for this property');
  console.log('2. Service account has Owner or Full permissions');
  console.log('\nService account email: gsc-content-generator@bids-ff2d6.iam.gserviceaccount.com');
  process.exit(1);
});
