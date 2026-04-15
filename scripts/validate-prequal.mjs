#!/usr/bin/env node
/**
 * Truth-table validator for isPrequalified() in lib/leadQualification.ts.
 * Parses the module as text (node can't import .ts directly) and executes
 * the cases below against a JS-equivalent implementation. Asserts that the
 * thresholds in the source file match the expected values, then walks the
 * truth table.
 *
 * Fails loudly if any threshold constant or cap changes unexpectedly.
 */
import fs from 'node:fs';

const qsrc = fs.readFileSync('lib/leadQualification.ts', 'utf8');
const caps = fs.readFileSync('lib/loan-caps.ts', 'utf8');

function num(text, key) {
  const re = new RegExp(`${key}\\s*:\\s*([\\d_]+)`, 'm');
  const m = text.match(re);
  if (!m) throw new Error(`Missing key "${key}" in source`);
  return Number(m[1].replace(/_/g, ''));
}

function readConst(text, name) {
  const re = new RegExp(`${name}\\s*=\\s*([\\d_]+)`, 'm');
  const m = text.match(re);
  if (!m) throw new Error(`Missing const ${name}`);
  return Number(m[1].replace(/_/g, ''));
}

const MAX_HOME_VALUE = readConst(qsrc, 'MAX_HOME_VALUE');
const CAPS = {
  heloc: num(caps, 'heloc'),
  cashOut: num(caps, 'cashOut'),
  jumbo: num(caps, 'jumbo'),
  dscr: num(caps, 'dscr'),
};

function capForProduct(p) {
  switch (p) {
    case 'heloc': return CAPS.heloc;
    case 'cashOut': return CAPS.cashOut;
    case 'dscr': return CAPS.dscr;
    case 'rateTerm':
    case 'purchase':
    case 'other':
      return CAPS.jumbo;
  }
}

function isPrequalified({ homeValue, currentMortgage, desiredLoan, product }) {
  const reasons = [];
  if (homeValue > MAX_HOME_VALUE) {
    reasons.push({ type: 'home-value-exceeds-icp' });
  }
  const cap = capForProduct(product);
  if (desiredLoan > cap) {
    reasons.push({ type: 'product-cap-exceeded' });
  }
  if (reasons.length === 0) return { qualified: true };
  return { qualified: false, reasons };
}

const sanity = [
  ['MAX_HOME_VALUE', MAX_HOME_VALUE === 5_000_000, MAX_HOME_VALUE],
  ['HELOC cap', CAPS.heloc === 750_000, CAPS.heloc],
  ['cashOut cap', CAPS.cashOut === 3_500_000, CAPS.cashOut],
  ['jumbo cap', CAPS.jumbo === 3_500_000, CAPS.jumbo],
  ['dscr cap', CAPS.dscr === 2_000_000, CAPS.dscr],
];
let failed = 0;
for (const [label, ok, actual] of sanity) {
  if (!ok) { console.error(`FAIL (const): ${label} is ${actual}`); failed++; }
  else console.log(`PASS (const): ${label} = ${actual}`);
}

const cases = [
  [650_000, 350_000, 150_000, 'heloc', true, null],
  [800_000, 400_000, 100_000, 'cashOut', true, null],
  [650_000, 0, 450_000, 'dscr', true, null],
  [4_900_000, 2_000_000, 3_400_000, 'purchase', true, null],
  [5_100_000, 2_000_000, 1_000_000, 'heloc', false, 'home-value-exceeds-icp'],
  [1_000_000, 200_000, 800_000, 'heloc', false, 'product-cap-exceeded'],
  [1_500_000, 500_000, 4_000_000, 'cashOut', false, 'product-cap-exceeded'],
  [6_000_000, 2_000_000, 4_000_000, 'purchase', false, 'home-value-exceeds-icp'],
  [1_000_000, 0, 2_100_000, 'dscr', false, 'product-cap-exceeded'],
];

for (const [hv, cm, dl, p, expQ, expR] of cases) {
  const res = isPrequalified({ homeValue: hv, currentMortgage: cm, desiredLoan: dl, product: p });
  const okQ = res.qualified === expQ;
  const okR = expQ ? true : res.reasons[0]?.type === expR;
  const tag = okQ && okR ? 'PASS' : 'FAIL';
  if (tag === 'FAIL') failed++;
  console.log(`${tag} (case): hv=${hv} cm=${cm} dl=${dl} p=${p} → qualified=${res.qualified}${res.qualified ? '' : ` reason=${res.reasons[0]?.type}`}`);
}

if (failed > 0) {
  console.error(`\n${failed} failure(s)`);
  process.exit(1);
}
console.log('\nprequal: all checks passed');
