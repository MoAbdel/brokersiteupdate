#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const SITE_URL = process.env.SITE_URL || 'https://www.mothebroker.com';
const DELTA_PATH = path.join(process.cwd(), 'reports', 'indexing-delta.json');

const usage = () => {
  console.log('Usage:');
  console.log('  node scripts/record-indexing-delta.mjs --urls https://www.mothebroker.com/blog/a,https://www.mothebroker.com/blog/b');
  console.log('  node scripts/record-indexing-delta.mjs --paths /blog/a,/blog/b');
  console.log('  node scripts/record-indexing-delta.mjs --from-batch');
  console.log('  node scripts/record-indexing-delta.mjs --from-approved-batch');
  console.log('  node scripts/record-indexing-delta.mjs --from-file reports/generation-batch.json');
  console.log('  node scripts/record-indexing-delta.mjs --clear');
};

const normalize = (value) => {
  try {
    const url = new URL(value, SITE_URL);
    url.hash = '';
    url.search = '';
    return url.toString();
  } catch {
    return null;
  }
};

const parseList = (argValue) =>
  argValue
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

const loadExisting = async () => {
  try {
    return JSON.parse(await fs.readFile(DELTA_PATH, 'utf8'));
  } catch {
    return null;
  }
};

const run = async () => {
  const args = process.argv.slice(2);
  if (!args.length) {
    usage();
    process.exit(1);
  }

  if (args.includes('--clear')) {
    await fs.rm(DELTA_PATH, { force: true });
    console.log(`Cleared ${DELTA_PATH}`);
    return;
  }

  const urlsIdx = args.indexOf('--urls');
  const pathsIdx = args.indexOf('--paths');
  const fromBatch = args.includes('--from-batch');
  const fromApprovedBatch = args.includes('--from-approved-batch');
  const fromFileIdx = args.indexOf('--from-file');
  const urlValues = urlsIdx >= 0 ? parseList(args[urlsIdx + 1] || '') : [];
  const pathValues = pathsIdx >= 0 ? parseList(args[pathsIdx + 1] || '') : [];
  const fromFilePath = fromFileIdx >= 0 ? args[fromFileIdx + 1] : null;

  let batchUrls = [];
  if (fromBatch || fromApprovedBatch || fromFilePath) {
    const target = fromFilePath
      || (fromApprovedBatch ? path.join('reports', 'generation-batch-approved.json') : path.join('reports', 'generation-batch.json'));
    try {
      const raw = JSON.parse(await fs.readFile(path.join(process.cwd(), target), 'utf8'));
      batchUrls = Array.isArray(raw?.urls) ? raw.urls : [];
    } catch {
      batchUrls = [];
    }
  }

  const normalized = [
    ...urlValues.map((u) => normalize(u)),
    ...pathValues.map((p) => normalize(p)),
    ...batchUrls.map((u) => normalize(u)),
  ].filter(Boolean);

  if (!normalized.length) {
    usage();
    process.exit(1);
  }

  const existing = await loadExisting();
  const existingUrls = Array.isArray(existing?.urls) ? existing.urls : [];
  const merged = Array.from(new Set([...existingUrls, ...normalized]));

  const payload = {
    generatedAt: new Date().toISOString(),
    source: 'manual',
    urls: merged,
  };

  await fs.mkdir(path.dirname(DELTA_PATH), { recursive: true });
  await fs.writeFile(DELTA_PATH, JSON.stringify(payload, null, 2), 'utf8');

  console.log(`Recorded ${normalized.length} URL(s). Delta now has ${merged.length} URL(s).`);
  console.log(`Path: ${DELTA_PATH}`);
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
