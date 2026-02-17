import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Normalize "CTA banner" blocks that use bright blue gradients into slate.
 *
 * This is intentionally scoped:
 * - Only touches files that contain the marker gradient class
 * - Uses a small set of exact-string replacements
 *
 * Usage:
 *   node scripts/normalize-slate-cta-banners.mjs
 *   node scripts/normalize-slate-cta-banners.mjs --dry-run
 */

const ROOTS = ['app', 'components'];
const DRY_RUN = process.argv.includes('--dry-run');

const MARKERS = [
  'bg-gradient-to-r from-blue-600 to-blue-700',
  'bg-gradient-to-r from-blue-600 to-blue-800',
];

const CONDITIONAL_REPLACEMENTS = [
  // Banner background
  ['bg-gradient-to-r from-blue-600 to-blue-700', 'bg-slate-900'],
  ['bg-gradient-to-r from-blue-600 to-blue-800', 'bg-slate-900'],

  // Common CTA banner buttons
  ['bg-white text-blue-600 hover:bg-blue-50', 'bg-white text-slate-950 hover:bg-slate-100'],
  [
    'border-2 border-white text-white hover:bg-white hover:text-blue-600',
    'border-2 border-white text-white hover:bg-white hover:text-slate-900',
  ],

  // Common CTA banner fine-print/subtext
  ['text-blue-200', 'text-slate-200'],
];

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function applyConditionalReplacements(src) {
  if (!MARKERS.some((m) => src.includes(m))) return { out: src, changed: false };
  let out = src;
  let changed = false;
  for (const [from, to] of CONDITIONAL_REPLACEMENTS) {
    if (out.includes(from)) {
      out = out.split(from).join(to);
      changed = true;
    }
  }
  return { out, changed };
}

async function main() {
  const repoRoot = process.cwd();
  const touched = [];

  for (const root of ROOTS) {
    const base = path.join(repoRoot, root);
    for await (const file of walk(base)) {
      if (!file.endsWith('.tsx') && !file.endsWith('.ts')) continue;
      const src = await fs.readFile(file, 'utf8');
      const { out, changed } = applyConditionalReplacements(src);
      if (!changed) continue;
      touched.push(path.relative(repoRoot, file));
      if (!DRY_RUN) await fs.writeFile(file, out, 'utf8');
    }
  }

  // eslint-disable-next-line no-console
  console.log(JSON.stringify({ dryRun: DRY_RUN, changedFiles: touched.length, files: touched.sort() }, null, 2));
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exitCode = 1;
});

