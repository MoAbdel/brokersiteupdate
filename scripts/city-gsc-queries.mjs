#!/usr/bin/env node
/**
 * One-shot helper: print top-10 GSC queries containing a given city name.
 * Usage: node scripts/city-gsc-queries.mjs spokane
 */
import fs from 'node:fs';

const needle = (process.argv[2] || '').toLowerCase();
if (!needle) {
  console.error('usage: city-gsc-queries.mjs <city-name-lowercase>');
  process.exit(1);
}

const rows = JSON.parse(fs.readFileSync('reports/gsc-query-performance-20260115_20260415.json', 'utf8'));
const re = new RegExp(`\\b${needle.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`);

const hits = rows
  .filter((r) => re.test((r.keys?.[1] || '').toLowerCase()))
  .map((r) => ({
    query: r.keys[1],
    impressions: r.impressions,
    clicks: r.clicks,
    position: Math.round(r.position * 10) / 10,
    page: r.keys[0].replace('https://www.mothebroker.com', '') || '/',
  }))
  .sort((a, b) => b.impressions - a.impressions)
  .slice(0, 15);

console.table(hits);
console.log(`Total matching rows: ${hits.length}`);
console.log(`Total impressions (top 15): ${hits.reduce((s, h) => s + h.impressions, 0)}`);
