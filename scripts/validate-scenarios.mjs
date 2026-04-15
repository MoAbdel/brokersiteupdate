#!/usr/bin/env node
/**
 * Runtime assertion script. No test framework installed — this runs as part
 * of pre-commit verification to catch future scenario/cap drift.
 *
 * Node can't import .ts directly, so this script parses the scenario module
 * as text and extracts the numeric literals, then asserts the invariants.
 */
import fs from 'node:fs';

const src = fs.readFileSync('lib/example-scenarios.ts', 'utf8');
const caps = fs.readFileSync('lib/loan-caps.ts', 'utf8');

const num = (text, key) => {
  const re = new RegExp(`${key}\\s*:\\s*([\\d_]+)`, 'm');
  const m = text.match(re);
  if (!m) throw new Error(`Missing key "${key}" in source`);
  return Number(m[1].replace(/_/g, ''));
};

const helocCap = num(caps, 'heloc');
const cashOutCap = num(caps, 'cashOut');
const dscrCap = num(caps, 'dscr');

const helocAmount = num(src, 'helocAmount');
const cashOutNewLoan = num(src, 'newLoan');
const dscrLoan = num(src, 'loanAmount');
const helocHome = num(src, 'homeValue');
const cashOutHome = num(src, 'homeValue');
const dscrProp = num(src, 'propertyValue');
const bandMin = num(src, 'min');
const bandMax = num(src, 'max');
const dscrRatio = Number(src.match(/dscrRatio\s*:\s*([\d.]+)/)[1]);

const checks = [
  ['HELOC within cap', helocAmount <= helocCap, `${helocAmount} <= ${helocCap}`],
  ['Cash-Out within cap', cashOutNewLoan <= cashOutCap, `${cashOutNewLoan} <= ${cashOutCap}`],
  ['DSCR within cap', dscrLoan <= dscrCap, `${dscrLoan} <= ${dscrCap}`],
  ['DSCR ratio > 1.0', dscrRatio > 1.0, `${dscrRatio} > 1.0`],
  ['HELOC home in band', helocHome >= bandMin && helocHome <= bandMax, `${helocHome} in [${bandMin},${bandMax}]`],
  ['Cash-Out home in band', cashOutHome >= bandMin && cashOutHome <= bandMax, `${cashOutHome} in [${bandMin},${bandMax}]`],
  ['DSCR property in band', dscrProp >= bandMin && dscrProp <= bandMax, `${dscrProp} in [${bandMin},${bandMax}]`],
];

let failed = 0;
for (const [label, ok, detail] of checks) {
  if (!ok) {
    console.error(`FAIL: ${label} — ${detail}`);
    failed++;
  } else {
    console.log(`PASS: ${label} (${detail})`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} failure(s)`);
  process.exit(1);
}
console.log('\nexample-scenarios: all invariants hold');
