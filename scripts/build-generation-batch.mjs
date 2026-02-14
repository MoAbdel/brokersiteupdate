#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const QUEUE_PATH = path.join(process.cwd(), 'reports', 'opportunity-queue.json');
const OUT_PATH = path.join(process.cwd(), 'reports', 'generation-batch.json');
const DEFAULT_COUNT = Number(process.env.GENERATION_BATCH_COUNT || 10);
const DEFAULT_REFRESH_RATIO = Number(process.env.GENERATION_REFRESH_RATIO || 0.3);

const usage = () => {
  console.log('Usage:');
  console.log('  node scripts/build-generation-batch.mjs --count 10');
  console.log('  node scripts/build-generation-batch.mjs --count 10 --track hecm');
};

const parseArg = (args, key) => {
  const idx = args.indexOf(key);
  return idx >= 0 ? args[idx + 1] : null;
};

const normalize = (v) => (v || '').toLowerCase().trim();

const run = async () => {
  const args = process.argv.slice(2);
  if (args.includes('--help')) {
    usage();
    return;
  }

  const count = Math.max(1, Number(parseArg(args, '--count') || DEFAULT_COUNT));
  const trackFilter = normalize(parseArg(args, '--track'));
  const refreshRatio = Math.max(0, Math.min(1, DEFAULT_REFRESH_RATIO));
  const refreshSlots = Math.floor(count * refreshRatio);

  let queue;
  try {
    queue = JSON.parse(await fs.readFile(QUEUE_PATH, 'utf8'));
  } catch {
    console.error('Missing reports/opportunity-queue.json. Run `npm run seo:opportunity-queue` first.');
    process.exit(1);
  }

  const refresh = (Array.isArray(queue.refreshCandidates) ? queue.refreshCandidates : [])
    .filter((x) => !trackFilter || normalize(x.track) === trackFilter || trackFilter === 'all')
    .slice(0, refreshSlots)
    .map((x) => ({
      type: 'refresh',
      slug: x.slug,
      url: x.url,
      reason: x.reason,
      impressions: x.impressions,
      position: x.position,
    }));

  const neededNew = Math.max(0, count - refresh.length);
  const scored = (Array.isArray(queue.scoredQueue) ? queue.scoredQueue : [])
    .filter((x) => !trackFilter || normalize(x.track) === trackFilter)
    .slice(0, neededNew)
    .map((x) => ({
      type: 'new',
      hubId: x.hubId,
      track: x.track,
      expectedSlug: x.expectedSlug,
      score: x.score,
      bucket: x.bucket,
      reasons: x.reasons,
    }));

  const items = [...refresh, ...scored];
  const urls = items
    .map((item) => {
      if (item.type === 'refresh' && item.url) return item.url;
      if (item.type === 'new' && item.expectedSlug) return `https://www.mothebroker.com/blog/${item.expectedSlug}`;
      return null;
    })
    .filter(Boolean);

  const payload = {
    generatedAt: new Date().toISOString(),
    sourceQueueGeneratedAt: queue.generated || null,
    countRequested: count,
    trackFilter: trackFilter || null,
    refreshSlotsRequested: refreshSlots,
    refreshIncluded: refresh.length,
    newIncluded: scored.length,
    items,
    urls,
  };

  await fs.mkdir(path.dirname(OUT_PATH), { recursive: true });
  await fs.writeFile(OUT_PATH, JSON.stringify(payload, null, 2), 'utf8');

  console.log(`Batch written: ${OUT_PATH}`);
  console.log(`Refresh: ${refresh.length}, New: ${scored.length}, Total: ${items.length}`);
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
