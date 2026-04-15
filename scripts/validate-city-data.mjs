#!/usr/bin/env node
/**
 * Validates all lib/city-page-data/*.ts files against the CityPageData contract.
 * Node can't import .ts directly; parses each file as text and asserts:
 *   - metaTitle.length <= 60
 *   - metaDescription.length between 140 and 160
 *   - midTierNeighborhoods.length >= 3
 *   - typicalHomeValueRange.min < typicalHomeValueRange.max
 *   - localMarketProse word count >= 280
 *   - localMarketProse has zero slice-2+4 hard-ban tokens
 *   - citySlug matches the filename stem
 *   - state is 'California' or 'Washington'
 */
import fs from 'node:fs';
import path from 'node:path';

const DIR = 'lib/city-page-data';
const IGNORE = new Set(['index.ts', 'README.md']);

const HARD_BAN = [
  /UHNW/i,
  /ultra-high-net-worth/i,
  /ultra-luxury/i,
  /waterfront specialist/i,
  /luxury waterfront/i,
  /luxury specialist/i,
];

function extractString(src, key) {
  const re = new RegExp(`${key}\\s*:\\s*(['"\`])((?:\\\\.|(?!\\1)[\\s\\S])*)\\1`, 'm');
  const m = src.match(re);
  return m ? m[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"') : null;
}

function extractProse(src) {
  // localMarketProse is constructed with: [...].join('\n\n')
  // Accept single, double, or backtick quotes for both the join delimiter
  // and the individual paragraph literals.
  const arrayMatch = src.match(/localMarketProse\s*:\s*\[([\s\S]*?)\]\.join\(['"`]\\n\\n['"`]\)/);
  if (arrayMatch) {
    const body = arrayMatch[1];
    const parts = [];
    const partRe = /(['"`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
    let m;
    while ((m = partRe.exec(body)) !== null) {
      parts.push(m[2].replace(/\\'/g, "'").replace(/\\"/g, '"'));
    }
    return parts.join('\n\n');
  }
  // Fallback — localMarketProse: '...' single-string form
  return extractString(src, 'localMarketProse');
}

function countWords(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function extractNumberKey(src, key) {
  const re = new RegExp(`${key}\\s*:\\s*([\\d_]+)`, 'm');
  const m = src.match(re);
  return m ? Number(m[1].replace(/_/g, '')) : null;
}

function countNeighborhoods(src) {
  const arrayMatch = src.match(/midTierNeighborhoods\s*:\s*\[([\s\S]*?)\]/);
  if (!arrayMatch) return 0;
  const body = arrayMatch[1];
  return (body.match(/\{\s*name\s*:/g) || []).length;
}

const files = fs.readdirSync(DIR).filter((f) => !IGNORE.has(f) && f.endsWith('.ts'));
let failed = 0;

for (const file of files) {
  const full = path.join(DIR, file);
  const src = fs.readFileSync(full, 'utf8');
  const slug = file.replace(/\.ts$/, '');
  const errors = [];

  const citySlug = extractString(src, 'citySlug');
  if (citySlug !== slug) {
    errors.push(`citySlug "${citySlug}" != filename stem "${slug}"`);
  }

  const state = extractString(src, 'state');
  if (state !== 'California' && state !== 'Washington') {
    errors.push(`state must be California or Washington, got "${state}"`);
  }

  const metaTitle = extractString(src, 'metaTitle') || '';
  if (metaTitle.length === 0) errors.push('metaTitle missing');
  else if (metaTitle.length > 60) errors.push(`metaTitle length ${metaTitle.length} > 60`);

  const metaDescription = extractString(src, 'metaDescription') || '';
  if (metaDescription.length < 140 || metaDescription.length > 160) {
    errors.push(`metaDescription length ${metaDescription.length} not in [140,160]`);
  }

  const neighborhoodCount = countNeighborhoods(src);
  if (neighborhoodCount < 3) {
    errors.push(`midTierNeighborhoods has ${neighborhoodCount} entries, need >= 3`);
  }

  const min = extractNumberKey(src, 'min');
  const max = extractNumberKey(src, 'max');
  if (min == null || max == null) errors.push('typicalHomeValueRange missing min/max');
  else if (min >= max) errors.push(`typicalHomeValueRange.min ${min} >= max ${max}`);

  const prose = extractProse(src) || '';
  const wc = countWords(prose);
  if (wc < 280) errors.push(`localMarketProse word count ${wc} < 280`);

  for (const re of HARD_BAN) {
    if (re.test(prose) || re.test(metaTitle) || re.test(metaDescription)) {
      errors.push(`hard-ban token matches: ${re}`);
    }
  }

  if (errors.length > 0) {
    failed++;
    console.error(`FAIL ${file}:`);
    errors.forEach((e) => console.error(`  - ${e}`));
  } else {
    console.log(`PASS ${file} (title ${metaTitle.length}, desc ${metaDescription.length}, neighborhoods ${neighborhoodCount}, prose ${wc} words)`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} file(s) failed validation`);
  process.exit(1);
}
console.log(`\n${files.length} file(s) passed`);
