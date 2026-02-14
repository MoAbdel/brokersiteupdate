#!/usr/bin/env node

import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { APP_DIR, toRoutePath, walk } from './lib/gsc-utils.mjs';

const SITE_URL = process.env.SITE_URL || 'https://www.mothebroker.com';
const REPORTS_DIR = path.join(process.cwd(), 'reports');
const STATE_PATH = path.join(REPORTS_DIR, 'indexing-delta-state.json');
const DELTA_PATH = path.join(REPORTS_DIR, 'indexing-delta.json');
const BOOTSTRAP_DAYS = Number(process.env.INDEXING_DELTA_BOOTSTRAP_DAYS || 3);

const EXTRA_WATCH = [
  { file: 'app/layout.tsx', urls: ['/'] },
  { file: 'lib/all-blog-posts.ts', urls: ['/guides'] },
];

const asMs = (value) => {
  const n = Date.parse(value || '');
  return Number.isFinite(n) ? n : null;
};

const loadState = async () => {
  try {
    return JSON.parse(await fs.readFile(STATE_PATH, 'utf8'));
  } catch {
    return null;
  }
};

const normalizeUrl = (routePath) => {
  const base = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL;
  if (routePath === '/') return `${base}/`;
  return `${base}${routePath.startsWith('/') ? routePath : `/${routePath}`}`;
};

const usage = () => {
  console.log('Usage:');
  console.log('  node scripts/build-indexing-delta.mjs');
  console.log('  node scripts/build-indexing-delta.mjs --reset');
};

const run = async () => {
  const args = process.argv.slice(2);
  if (args.includes('--help')) {
    usage();
    return;
  }

  await fs.mkdir(REPORTS_DIR, { recursive: true });

  if (args.includes('--reset')) {
    const payload = { lastScanAt: new Date().toISOString(), note: 'reset baseline' };
    await fs.writeFile(STATE_PATH, JSON.stringify(payload, null, 2), 'utf8');
    await fs.writeFile(
      DELTA_PATH,
      JSON.stringify({ generatedAt: new Date().toISOString(), source: 'auto-mtime', urls: [] }, null, 2),
      'utf8'
    );
    console.log('Indexing delta baseline reset.');
    return;
  }

  const state = await loadState();
  const nowIso = new Date().toISOString();
  const nowMs = Date.now();
  const fallbackSinceMs = nowMs - BOOTSTRAP_DAYS * 24 * 60 * 60 * 1000;
  const sinceMs = asMs(state?.lastScanAt) ?? fallbackSinceMs;
  const sinceIso = new Date(sinceMs).toISOString();

  const urls = new Set();

  const pageFiles = await walk(APP_DIR);
  for (const filePath of pageFiles) {
    let stat;
    try {
      stat = await fs.stat(filePath);
    } catch {
      continue;
    }
    if (stat.mtimeMs <= sinceMs) continue;
    const routePath = toRoutePath(filePath);
    if (!routePath) continue;
    urls.add(normalizeUrl(routePath));
  }

  for (const item of EXTRA_WATCH) {
    const full = path.join(process.cwd(), item.file);
    if (!fsSync.existsSync(full)) continue;
    try {
      const stat = await fs.stat(full);
      if (stat.mtimeMs > sinceMs) {
        item.urls.forEach((u) => urls.add(normalizeUrl(u)));
      }
    } catch {
      // ignore watch errors
    }
  }

  const sortedUrls = Array.from(urls).sort();
  const deltaPayload = {
    generatedAt: nowIso,
    source: 'auto-mtime',
    since: sinceIso,
    urls: sortedUrls,
  };

  await fs.writeFile(DELTA_PATH, JSON.stringify(deltaPayload, null, 2), 'utf8');
  await fs.writeFile(STATE_PATH, JSON.stringify({ lastScanAt: nowIso }, null, 2), 'utf8');

  console.log(`Built indexing delta from ${sinceIso}`);
  console.log(`Delta URLs: ${sortedUrls.length}`);
  console.log(`Output: ${DELTA_PATH}`);
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
