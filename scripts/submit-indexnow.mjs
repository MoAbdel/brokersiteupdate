import fs from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_HOST = 'www.mothebroker.com';
const DEFAULT_KEY = '494ad9630c93410f9ad7b243178c596a';
const DEFAULT_SITEMAPS = [
  'sitemap.xml',
  'sitemap-news.xml',
  'sitemap-images.xml'
];

const workspaceRoot = process.cwd();
const publicDir = path.join(workspaceRoot, 'public');

const readIndexNowKey = async () => {
  if (process.env.INDEXNOW_KEY && process.env.INDEXNOW_KEY.trim()) {
    return process.env.INDEXNOW_KEY.trim();
  }

  const keyFiles = await fs.readdir(publicDir);
  const keyFile =
    keyFiles.find((file) => file.toLowerCase() === `${DEFAULT_KEY}.txt`) ||
    keyFiles.find((file) => /^[a-f0-9]{32}\.txt$/i.test(file));
  if (!keyFile) {
    throw new Error('IndexNow key file not found in /public and INDEXNOW_KEY not set.');
  }

  const keyPath = path.join(publicDir, keyFile);
  const key = (await fs.readFile(keyPath, 'utf8')).trim();
  if (!key) {
    throw new Error('IndexNow key file is empty.');
  }

  return key;
};

const readSitemapUrls = async (sitemapName) => {
  const sitemapPath = path.join(publicDir, sitemapName);
  const xml = await fs.readFile(sitemapPath, 'utf8');
  const urls = [];
  const regex = /<loc>([^<]+)<\/loc>/g;
  let match = regex.exec(xml);
  while (match) {
    urls.push(match[1]);
    match = regex.exec(xml);
  }
  return urls;
};

const chunk = (items, size) => {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
};

const submitIndexNow = async ({ host, key, keyLocation, urlList }) => {
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`IndexNow submission failed (${response.status}): ${errorText}`);
  }
};

const run = async () => {
  const host = (process.env.INDEXNOW_HOST || DEFAULT_HOST).replace(/^https?:\/\//, '');
  const key = await readIndexNowKey();
  const keyLocation = `https://${host}/${key}.txt`;

  const sitemapNames = process.env.INDEXNOW_SITEMAPS
    ? process.env.INDEXNOW_SITEMAPS.split(',').map((name) => name.trim()).filter(Boolean)
    : DEFAULT_SITEMAPS;

  const urls = new Set();
  for (const sitemapName of sitemapNames) {
    const sitemapUrls = await readSitemapUrls(sitemapName);
    sitemapUrls.forEach((url) => urls.add(url));
  }

  const urlList = Array.from(urls);
  if (!urlList.length) {
    throw new Error('No URLs found in sitemaps.');
  }

  const batches = chunk(urlList, 10000);
  for (const batch of batches) {
    await submitIndexNow({
      host,
      key,
      keyLocation,
      urlList: batch
    });
  }

  console.log(`IndexNow submitted ${urlList.length} URLs in ${batches.length} batch(es).`);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
