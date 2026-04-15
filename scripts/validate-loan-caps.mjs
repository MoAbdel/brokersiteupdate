#!/usr/bin/env node
/**
 * Lightweight smoke check for lib/loan-caps.ts.
 * Compiled TS is re-read as text and the exported constants are extracted with a
 * regex; this avoids the need for ts-node/jest in a repo that has neither.
 */
import fs from 'node:fs';

const src = fs.readFileSync('lib/loan-caps.ts', 'utf8');

const EXPECTED = {
  conventional: 3_500_000,
  jumbo: 3_500_000,
  heloc: 750_000,
  dscr: 2_000_000,
  cashOut: 3_500_000,
};

let failed = 0;
for (const [key, expected] of Object.entries(EXPECTED)) {
  const match = src.match(new RegExp(`${key}:\\s*([\\d_]+)`));
  if (!match) {
    console.error(`FAIL: could not find LOAN_CAPS.${key} in lib/loan-caps.ts`);
    failed++;
    continue;
  }
  const actual = Number(match[1].replace(/_/g, ''));
  if (actual !== expected) {
    console.error(`FAIL: LOAN_CAPS.${key} = ${actual}, expected ${expected}`);
    failed++;
  }
}

if (failed > 0) {
  console.error(`\n${failed} failure(s)`);
  process.exit(1);
}
console.log('loan-caps: all checks passed');
