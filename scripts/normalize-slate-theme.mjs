import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Lightweight classstring normalizer to reduce "random" page-to-page theming.
 * This intentionally targets only a few common hero/header patterns to keep risk low.
 *
 * Usage:
 *   node scripts/normalize-slate-theme.mjs
 *   node scripts/normalize-slate-theme.mjs --dry-run
 */

const ROOTS = ['app'];
const DRY_RUN = process.argv.includes('--dry-run');

const REPLACEMENTS = [
  // Bright-blue hero gradients -> slate hero gradient
  [
    'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800',
    'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950',
  ],
  [
    'bg-gradient-to-r from-blue-600 to-blue-800',
    'bg-slate-900',
  ],
  // Common hero subtitle tint
  ['text-blue-100', 'text-slate-200'],

  // Normalize non-slate accent colors (keep "brand blue" as the main accent).
  // This intentionally avoids reds (errors/destructive states).
  ['text-green-600', 'text-blue-600'],
  ['text-green-700', 'text-blue-700'],
  ['text-green-800', 'text-slate-900'],
  ['bg-green-50', 'bg-slate-50'],
  ['bg-green-100', 'bg-slate-100'],
  ['border-green-200', 'border-slate-200'],
  ['border-green-300', 'border-slate-300'],

  ['text-orange-600', 'text-blue-600'],
  ['text-orange-700', 'text-blue-700'],
  ['text-orange-800', 'text-slate-900'],
  ['bg-orange-50', 'bg-slate-50'],
  ['bg-orange-100', 'bg-slate-100'],
  ['border-orange-200', 'border-slate-200'],
  ['border-orange-300', 'border-slate-300'],

  ['text-purple-600', 'text-blue-600'],
  ['text-purple-700', 'text-blue-700'],
  ['bg-purple-50', 'bg-slate-50'],
  ['bg-purple-100', 'bg-slate-100'],
  ['border-purple-200', 'border-slate-200'],

  ['text-teal-600', 'text-blue-600'],
  ['text-teal-700', 'text-blue-700'],
  ['bg-teal-50', 'bg-slate-50'],
  ['bg-teal-100', 'bg-slate-100'],

  ['text-amber-600', 'text-blue-600'],
  ['text-amber-700', 'text-blue-700'],
  ['bg-amber-50', 'bg-slate-50'],
  ['bg-amber-100', 'bg-slate-100'],

  ['text-indigo-600', 'text-blue-600'],
  ['text-indigo-700', 'text-blue-700'],
  ['bg-indigo-50', 'bg-slate-50'],
  ['bg-indigo-100', 'bg-slate-100'],
];

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

function applyReplacements(src) {
  let out = src;
  let changed = false;
  for (const [from, to] of REPLACEMENTS) {
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
      if (!file.endsWith('.tsx') && !file.endsWith('.ts') && !file.endsWith('.mdx')) continue;
      const src = await fs.readFile(file, 'utf8');
      const { out, changed } = applyReplacements(src);
      if (!changed) continue;
      touched.push(path.relative(repoRoot, file));
      if (!DRY_RUN) {
        await fs.writeFile(file, out, 'utf8');
      }
    }
  }

  // eslint-disable-next-line no-console
  console.log(
    JSON.stringify(
      { dryRun: DRY_RUN, changedFiles: touched.length, files: touched.sort() },
      null,
      2
    )
  );
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exitCode = 1;
});

