#!/usr/bin/env node
/**
 * Walks app/ for page.tsx files whose URL path matches luxury-coding patterns
 * AND is not already in lib/disposition/luxury-urls.ts (GONE_410 or REDIRECTS).
 * Outputs candidates for adding to the disposition CSV as additional 410s.
 */
import fs from 'node:fs';
import path from 'node:path';

const LUXURY_PATTERNS = [
  /\bluxury\b/i,
  /\bpremium\b/i,
  /\baffluent\b/i,
  /newport-coast/i, /newport-peninsula/i, /\/areas\/newport-beach\b/i,
  /balboa-island/i, /lido-isle/i, /palos-verdes/i, /\bpv-[a-z]\b/i,
  /marin-county|marin\b/i, /peninsula/i, /bay-area/i, /silicon-valley/i,
  /san-jose/i, /santa-clara/i, /san-mateo/i, /san-francisco/i,
  /eastside-wa/i, /king-county/i, /bellevue/i, /seattle/i,
  /western-la/i, /la-beach-cities/i, /pacific-palisades/i, /malibu/i,
  /coastal-north-sd/i, /\bca-sd-[a-z]\b/i, /wine-country/i,
  /\bsgv-[a-z]\b/i,
  /92657\b/, /92660\b/, /92661\b/, /92662\b/, /92663\b/, /92625\b/,  // Newport Beach ZIPs
  /92629\b/,  // Dana Point ZIP
  /92651\b/,  // Laguna Beach ZIP
  /laguna-beach\b/i,
];

const mod = fs.readFileSync('lib/disposition/luxury-urls.ts', 'utf8');
const allPaths = [...mod.matchAll(/"(\/[^"]+)"/g)].map((m) => m[1]);
const known = new Set(allPaths);

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === 'page.tsx') out.push(p);
  }
  return out;
}

const files = walk('app');
const candidates = [];
for (const file of files) {
  const norm = file.replace(/\\/g, '/');
  const url = norm.replace(/^app/, '').replace(/\/page\.tsx$/, '') || '/';
  if (known.has(url)) continue;
  if (LUXURY_PATTERNS.some((re) => re.test(url))) {
    candidates.push({ url, file: norm });
  }
}

console.log(`${candidates.length} candidate URLs (luxury-pattern + live + not in disposition):\n`);
for (const c of candidates) console.log(c.url);
fs.writeFileSync('/tmp/luxury-pattern-candidates.txt', candidates.map((c) => c.url).join('\n'));
