#!/usr/bin/env node
import fs from 'node:fs';

const mod = fs.readFileSync('lib/disposition/luxury-urls.ts', 'utf8');
const gone = [...mod.matchAll(/"(\/[^"]+)"/g)].map((m) => m[1]).filter((u) => u.startsWith('/'));
const goneSet = new Set(gone);

const csv = fs.readFileSync('docs/superpowers/specs/2026-04-15-scenario-rewrites-copy-sweep/luxury-candidates.csv', 'utf8');
const lines = csv.split('\n').slice(1).filter(Boolean);

const fileHits = {};
for (const line of lines) {
  const f = line.split(',')[0];
  fileHits[f] = (fileHits[f] || 0) + 1;
}

let deadHits = 0, liveHits = 0;
const deadFiles = [], liveFiles = [];

for (const [file, count] of Object.entries(fileHits)) {
  const norm = file.replace(/\\/g, '/');
  if (norm.startsWith('app/') && norm.endsWith('/page.tsx')) {
    const url = norm.slice(3, -('/page.tsx'.length));
    if (goneSet.has(url)) {
      deadHits += count;
      deadFiles.push({ file, url, count });
      continue;
    }
  }
  liveHits += count;
  liveFiles.push({ file, count });
}

console.log(`Already-410 dead-page hits: ${deadHits} in ${deadFiles.length} files`);
console.log(`Live-page hits:             ${liveHits} in ${liveFiles.length} files`);
console.log(`\nTop 10 dead files (deletion candidates):`);
deadFiles.sort((a, b) => b.count - a.count).slice(0, 10).forEach(({ file, count }) => console.log(`  ${count}  ${file}`));
console.log(`\nTop 10 live files (sweep candidates):`);
liveFiles.sort((a, b) => b.count - a.count).slice(0, 10).forEach(({ file, count }) => console.log(`  ${count}  ${file}`));
