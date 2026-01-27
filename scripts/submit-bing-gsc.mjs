import fs from 'node:fs';

const BING_API_KEY = '7a83a2ff67164b11b909a5d29d537a10';
const SITE_URL = 'https://www.mothebroker.com';

// Extract URLs from sitemap
const xml = fs.readFileSync('public/sitemap.xml', 'utf8');
const urls = [];
const regex = /<loc>([^<]+)<\/loc>/g;
let match;
while ((match = regex.exec(xml)) !== null) {
  urls.push(match[1]);
}

console.log(`Found ${urls.length} URLs in sitemap`);

// Submit to Bing in batches of 100
const submitToBing = async (urlBatch, batchNum) => {
  try {
    const response = await fetch(
      `https://www.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${BING_API_KEY}`,
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

// Submit sitemap to Bing
const submitSitemapToBing = async () => {
  try {
    const response = await fetch(
      `https://www.bing.com/webmaster/api.svc/json/SubmitSitemap?apikey=${BING_API_KEY}&siteUrl=${encodeURIComponent(SITE_URL)}&feedUrl=${encodeURIComponent(SITE_URL + '/sitemap.xml')}`,
      { method: 'GET' }
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
  const batchSize = 100;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    await submitToBing(batch, Math.floor(i / batchSize) + 1);
    // Small delay between batches
    await new Promise(r => setTimeout(r, 500));
  }

  console.log('\n--- Summary ---');
  console.log(`Total URLs submitted to Bing: ${urls.length}`);
  console.log('\nNote: For GSC, use Google Search Console UI or the Indexing API with a service account.');
  console.log('GSC Sitemap URL: https://search.google.com/search-console');
};

run().catch(console.error);
