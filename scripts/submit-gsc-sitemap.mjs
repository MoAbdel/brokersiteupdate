/**
 * GSC Sitemap Submission Script (Search Console API)
 *
 * Requires a service account JSON at ./gsc-credentials.json and that the
 * service account email is added to your GSC property.
 *
 * Usage:
 *   node scripts/submit-gsc-sitemap.mjs
 *
 * Optional env:
 *   GSC_SITE_URL=https://www.mothebroker.com/
 *   GSC_SITEMAP_URL=https://www.mothebroker.com/sitemap.xml
 */

import fs from 'node:fs';
import { GoogleAuth } from 'google-auth-library';

const CREDENTIALS_PATH = './gsc-credentials.json';
const SITE_URL = process.env.GSC_SITE_URL || 'sc-domain:mothebroker.com';
const SITEMAP_URL = process.env.GSC_SITEMAP_URL || 'https://www.mothebroker.com/sitemap.xml';
const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504]);
const MAX_RETRIES = Number(process.env.SEO_RETRY_ATTEMPTS || 3);
const BASE_DELAY_MS = Number(process.env.SEO_RETRY_BASE_DELAY_MS || 1000);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const submitWithRetry = async (endpoint, token) => {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const response = await fetch(endpoint, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const text = await response.text();
    if (response.ok) {
      return;
    }
    if (!RETRYABLE_STATUS.has(response.status) || attempt === MAX_RETRIES) {
      throw new Error(`GSC sitemap submit failed (${response.status}): ${text}`);
    }
    const delay = BASE_DELAY_MS * Math.pow(2, attempt);
    console.warn(`Retrying GSC sitemap submit in ${delay}ms (${response.status})...`);
    await sleep(delay);
  }
};

const run = async () => {
  console.log('GSC Sitemap submission');
  console.log('=====================');
  console.log(`Site: ${SITE_URL}`);
  console.log(`Sitemap: ${SITEMAP_URL}\n`);

  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error('ERROR: gsc-credentials.json not found.');
    console.error('Create a Google service account JSON and save it as ./gsc-credentials.json');
    process.exit(1);
  }

  const auth = new GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/webmasters']
  });

  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();

  // Search Console API: sitemaps.submit
  // PUT https://www.googleapis.com/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}
  const endpoint =
    'https://www.googleapis.com/webmasters/v3/sites/' +
    encodeURIComponent(SITE_URL) +
    '/sitemaps/' +
    encodeURIComponent(SITEMAP_URL);

  await submitWithRetry(endpoint, accessToken.token);

  console.log('✓ Sitemap submitted to GSC');
};

run().catch((err) => {
  console.error(err.message || err);
  console.error('\nMake sure:');
  console.error('- The service account email is added to your GSC property (Owner or Full user).');
  console.error(`- The property matches: ${SITE_URL}`);
  process.exit(1);
});

