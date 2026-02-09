import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';

const DEFAULT_HOST = 'www.mothebroker.com';
const DEFAULT_KEY = 'f56edfca5e434ba8bda3e1cb34e4a6d9';
const DEFAULT_SITEMAPS = [
  'sitemap.xml',
  'sitemap-news.xml',
  'sitemap-images.xml'
];

const workspaceRoot = process.cwd();
const publicDir = path.join(workspaceRoot, 'public');
const STATE_PATH = path.join(workspaceRoot, 'reports', 'last-submission.json');
const RESUBMIT_WINDOW_HOURS = Number(process.env.SEO_RESUBMIT_WINDOW_HOURS || 48);
const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504]);
const MAX_RETRIES = Number(process.env.SEO_RETRY_ATTEMPTS || 3);
const BASE_DELAY_MS = Number(process.env.SEO_RETRY_BASE_DELAY_MS || 1000);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const loadState = () => {
  try {
    return JSON.parse(fsSync.readFileSync(STATE_PATH, 'utf8'));
  } catch {
    return {};
  }
};

const saveState = (state) => {
  fsSync.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
  fsSync.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
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
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
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

    if (response.ok) {
      return;
    }
    const errorText = await response.text();
    if (!RETRYABLE_STATUS.has(response.status) || attempt === MAX_RETRIES) {
      throw new Error(`IndexNow submission failed (${response.status}): ${errorText}`);
    }
    const delay = BASE_DELAY_MS * Math.pow(2, attempt);
    console.warn(`Retrying IndexNow batch in ${delay}ms (${response.status})...`);
    await sleep(delay);
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
  const state = loadState();
  const filteredUrlList = urlList.filter((url) => !wasRecentlySubmitted(state, 'indexNow', url));
  if (!filteredUrlList.length) {
    throw new Error('No eligible URLs found (all recently submitted or sitemap empty).');
  }

  const batches = chunk(filteredUrlList, 10000);
  for (const batch of batches) {
    await submitIndexNow({
      host,
      key,
      keyLocation,
      urlList: batch
    });
    markSubmitted(state, 'indexNow', batch);
    saveState(state);
  }

  console.log(`IndexNow submitted ${filteredUrlList.length} URLs in ${batches.length} batch(es).`);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
