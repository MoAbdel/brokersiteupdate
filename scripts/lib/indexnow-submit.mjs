import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';

const DEFAULT_KEY = 'f56edfca5e434ba8bda3e1cb34e4a6d9';
const STATE_PATH = path.join(process.cwd(), 'reports', 'last-submission.json');
const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504]);
const MAX_RETRIES = Number(process.env.SEO_RETRY_ATTEMPTS || 3);
const BASE_DELAY_MS = Number(process.env.SEO_RETRY_BASE_DELAY_MS || 1000);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const readIndexNowKey = async () => {
  if (process.env.INDEXNOW_KEY && process.env.INDEXNOW_KEY.trim()) {
    return process.env.INDEXNOW_KEY.trim();
  }

  const publicDir = path.join(process.cwd(), 'public');
  const keyFiles = await fs.readdir(publicDir);
  const keyFile =
    keyFiles.find((file) => file.toLowerCase() === `${DEFAULT_KEY}.txt`) ||
    keyFiles.find((file) => /^[a-f0-9]{32}\.txt$/i.test(file));

  if (!keyFile) {
    throw new Error('IndexNow key file not found in /public and INDEXNOW_KEY not set.');
  }

  const key = (await fs.readFile(path.join(publicDir, keyFile), 'utf8')).trim();
  if (!key) {
    throw new Error('IndexNow key file is empty.');
  }
  return key;
};

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

const markSubmitted = (state, service, urls) => {
  state[service] = state[service] || {};
  const now = new Date().toISOString();
  for (const url of urls) {
    state[service][url] = now;
  }
};

export const submitIndexNowAllowlist = async ({ urls, fetchImpl = globalThis.fetch }) => {
  if (!Array.isArray(urls) || urls.length === 0) {
    throw new Error('No approved URLs supplied for IndexNow submission.');
  }

  const host = 'www.mothebroker.com';
  const key = await readIndexNowKey();
  const keyLocation = `https://${host}/${key}.txt`;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const response = await fetchImpl('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList: urls,
      }),
    });

    const responseText = await response.text();
    if (response.ok) {
      const state = loadState();
      markSubmitted(state, 'indexNow', urls);
      saveState(state);

      return {
        service: 'IndexNow',
        status: response.status,
        submittedUrlCount: urls.length,
        responseText,
        keyLocation,
      };
    }

    if (!RETRYABLE_STATUS.has(response.status) || attempt === MAX_RETRIES) {
      throw new Error(`IndexNow submission failed (${response.status}): ${responseText}`);
    }

    const delay = BASE_DELAY_MS * Math.pow(2, attempt);
    console.warn(`Retrying IndexNow allowlist batch in ${delay}ms (${response.status})...`);
    await sleep(delay);
  }

  throw new Error('IndexNow submission ended without a response.');
};
