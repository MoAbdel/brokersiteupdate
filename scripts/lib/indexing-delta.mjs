import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';

const DEFAULT_DELTA_PATH = path.join(process.cwd(), 'reports', 'indexing-delta.json');

const asArray = (value) => (Array.isArray(value) ? value : []);

const normalizeUrl = (value, siteUrl) => {
  try {
    const url = new URL(value, siteUrl);
    url.hash = '';
    url.search = '';
    return url.toString();
  } catch {
    return null;
  }
};

const collectCandidateUrls = (payload) => {
  if (!payload || typeof payload !== 'object') return [];
  return [
    ...asArray(payload.urls),
    ...asArray(payload.urlList),
    ...asArray(payload.changedUrls),
    ...asArray(payload.newUrls),
  ];
};

export const loadIndexingDelta = async ({ siteUrl, deltaPath = DEFAULT_DELTA_PATH }) => {
  if (!fsSync.existsSync(deltaPath)) {
    return { mode: 'full', urls: [], deltaPath };
  }

  let raw;
  try {
    raw = await fs.readFile(deltaPath, 'utf8');
  } catch {
    return { mode: 'full', urls: [], deltaPath };
  }

  let json;
  try {
    json = JSON.parse(raw);
  } catch {
    return { mode: 'full', urls: [], deltaPath };
  }

  const deduped = Array.from(
    new Set(
      collectCandidateUrls(json)
        .map((entry) => {
          if (typeof entry === 'string') return entry;
          if (entry && typeof entry === 'object' && typeof entry.url === 'string') return entry.url;
          return null;
        })
        .filter(Boolean)
        .map((url) => normalizeUrl(url, siteUrl))
        .filter(Boolean)
    )
  );

  if (!deduped.length) {
    return { mode: 'full', urls: [], deltaPath };
  }

  return { mode: 'delta', urls: deduped, deltaPath };
};
