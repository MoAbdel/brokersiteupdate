#!/usr/bin/env node
import fs from 'node:fs';

const mod = fs.readFileSync('lib/disposition/luxury-urls.ts', 'utf8');

// Extract only the GONE_410 array by slicing the text between the array brackets
const goneMatch = mod.match(/export const GONE_410[^=]+=\s*\[([\s\S]*?)\];/);
if (!goneMatch) { console.error('Could not find GONE_410 array'); process.exit(1); }
const goneSection = goneMatch[1];
const goneUrls = [...goneSection.matchAll(/"(\/[^"]+)"/g)].map(m => m[1]);

// Deduplicate before checking disk
const uniqueGoneUrls = [...new Set(goneUrls)];

const candidates = uniqueGoneUrls
  .map(url => ({ url, file: 'app' + url + '/page.tsx' }))
  .filter(c => fs.existsSync(c.file));

// Deduplicate by file path (in case same file matches multiple urls)
const seen = new Set();
const dedupedCandidates = candidates.filter(c => {
  if (seen.has(c.file)) return false;
  seen.add(c.file);
  return true;
});

console.log(`${dedupedCandidates.length} dead .tsx files found:`);
for (const c of dedupedCandidates) console.log(c.file);

// Use a project-local temp file (works on Windows)
const outPath = 'dead-luxury-files.txt';
fs.writeFileSync(outPath, dedupedCandidates.map(c => c.file).join('\n'));
console.log(`\nList written to ${outPath}`);
