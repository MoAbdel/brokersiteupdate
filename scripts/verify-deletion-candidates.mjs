#!/usr/bin/env node
/**
 * Before deleting any page .tsx file, assert its URL is already in
 * lib/disposition/luxury-urls.ts as GONE_410 or a REDIRECTS.from.
 * Exits non-zero if any candidate is missing — no file is ever removed
 * without a middleware-serving guarantee.
 */
import fs from 'node:fs';

const CANDIDATES = [
  { file: 'app/luxury-markets/page.tsx', url: '/luxury-markets' },
  { file: 'app/luxury-markets/waterfront-homes-mortgage-broker/page.tsx', url: '/luxury-markets/waterfront-homes-mortgage-broker' },
  { file: 'app/luxury-markets/ultra-luxury-estates-mortgage-broker/page.tsx', url: '/luxury-markets/ultra-luxury-estates-mortgage-broker' },
  { file: 'app/luxury-markets/golf-course-homes-mortgage-broker/page.tsx', url: '/luxury-markets/golf-course-homes-mortgage-broker' },
  { file: 'app/areas/newport-beach-neighborhoods/balboa-island-mortgage-broker/page.tsx', url: '/areas/newport-beach-neighborhoods/balboa-island-mortgage-broker' },
  { file: 'app/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker/page.tsx', url: '/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker' },
  { file: 'app/areas/newport-beach-neighborhoods/newport-coast-mortgage-broker/page.tsx', url: '/areas/newport-beach-neighborhoods/newport-coast-mortgage-broker' },
  { file: 'app/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker/page.tsx', url: '/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker' },
];

const module = fs.readFileSync('lib/disposition/luxury-urls.ts', 'utf8');

let failed = 0;
for (const { file, url } of CANDIDATES) {
  const inGone = module.includes(`"${url}"`);
  const inRedirect = module.includes(`"from": "${url}"`);
  if (!inGone && !inRedirect) {
    console.error(`FAIL: ${url} is not in GONE_410 or REDIRECTS — file ${file} not safe to delete`);
    failed++;
  } else if (!fs.existsSync(file)) {
    console.error(`FAIL: ${file} does not exist on disk`);
    failed++;
  } else {
    console.log(`OK: ${url} -> ${file}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} failure(s) — aborting deletion`);
  process.exit(1);
}
console.log('\nAll 8 candidates verified. Safe to delete.');
