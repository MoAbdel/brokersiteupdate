#!/usr/bin/env node
/**
 * Scans app/, components/, content/, lib/ for luxury-language hits and emits
 * a review CSV: file,line,category_guess,context,suggested_rewrite.
 *
 * Categories:
 *   auto-rewrite       — clear positioning phrase with a known substitution
 *   context-dependent  — neighborhood name or ambiguous "luxury" use
 *   already-ok         — "luxury amenities" / "luxury finishes" (kept as-is)
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOTS = ['app', 'components', 'content', 'lib'];
const EXTS = new Set(['.ts', '.tsx', '.md', '.mdx']);

// Files that are auto-generated lists of URLs being killed — not prose, skip entirely
const SKIP_FILES = new Set([
  'lib/disposition/luxury-urls.ts',
]);

// Hard-ban patterns — always auto-rewrite
const HARD_BAN = [
  { re: /UHNW/gi, rewrite: '' },
  { re: /ultra-high-net-worth/gi, rewrite: 'mid-tier' },
  { re: /ultra-luxury/gi, rewrite: '' },
  { re: /waterfront specialist/gi, rewrite: 'California and Washington mortgage broker' },
  { re: /luxury waterfront/gi, rewrite: 'California and Washington' },
  { re: /luxury specialist/gi, rewrite: 'California and Washington mortgage broker' },
];

// Positioning dollar figures — flagged for manual review
const DOLLAR_POSITIONING = /\$(4|5|6|7|8|9|10|12|15)M\b|\$(4|5|6|7|8|9|10|12|15),000,000/g;

// Signal neighborhoods — context-dependent
const SIGNAL_NEIGHBORHOODS = /\b(Balboa Island|Lido Isle|Newport Coast)\b/g;

// Descriptive-use whitelist — "luxury" near these words is allowed
const DESCRIPTIVE_NEAR = /luxury (amenities|finishes|appliances|features|flooring|kitchen|bath)/gi;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (EXTS.has(path.extname(e.name))) out.push(p);
  }
  return out;
}

const files = ROOTS.flatMap((r) => fs.existsSync(r) ? walk(r) : []);

const rows = [];
for (const file of files) {
  const norm = file.replace(/\\/g, '/');
  if (SKIP_FILES.has(norm)) continue;
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    for (const { re, rewrite } of HARD_BAN) {
      if (re.test(line)) {
        rows.push({
          file, line: i + 1,
          category: 'auto-rewrite',
          context: line.trim().replace(/,/g, ';').slice(0, 200),
          suggested: rewrite,
        });
      }
      re.lastIndex = 0;
    }

    if (DOLLAR_POSITIONING.test(line)) {
      rows.push({
        file, line: i + 1,
        category: 'context-dependent',
        context: line.trim().replace(/,/g, ';').slice(0, 200),
        suggested: 'rewrite to $500K-$900K band or remove',
      });
      DOLLAR_POSITIONING.lastIndex = 0;
    }

    if (SIGNAL_NEIGHBORHOODS.test(line)) {
      rows.push({
        file, line: i + 1,
        category: 'context-dependent',
        context: line.trim().replace(/,/g, ';').slice(0, 200),
        suggested: 'keep if geographic list; remove if positioning',
      });
      SIGNAL_NEIGHBORHOODS.lastIndex = 0;
    }

    // "luxury" not matched above — check for descriptive whitelist vs generic
    if (/\bluxury\b/i.test(line) && !HARD_BAN.some(({ re }) => { re.lastIndex = 0; return re.test(line); })) {
      const isDescriptive = DESCRIPTIVE_NEAR.test(line);
      DESCRIPTIVE_NEAR.lastIndex = 0;
      rows.push({
        file, line: i + 1,
        category: isDescriptive ? 'already-ok' : 'context-dependent',
        context: line.trim().replace(/,/g, ';').slice(0, 200),
        suggested: isDescriptive ? '(keep — descriptive amenity/feature use)' : 'judge per hit',
      });
    }
  }
}

const outDir = 'docs/superpowers/specs/2026-04-15-scenario-rewrites-copy-sweep';
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'luxury-candidates.csv');

const header = 'file,line,category,context,suggested\n';
const body = rows.map((r) =>
  `${r.file},${r.line},${r.category},"${r.context}","${r.suggested}"`
).join('\n');
fs.writeFileSync(outPath, header + body + '\n');

const counts = rows.reduce((acc, r) => { acc[r.category] = (acc[r.category] || 0) + 1; return acc; }, {});
console.log(`Wrote ${outPath} (${rows.length} rows)`);
for (const [k, v] of Object.entries(counts)) console.log(`  ${k}: ${v}`);
