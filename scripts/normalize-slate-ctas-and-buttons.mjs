import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Normalize CTA backgrounds and "button-like" color utilities to slate.
 *
 * Scope:
 * - app/ and components/ only
 * - .tsx/.ts/.mdx files
 *
 * Intent:
 * - Make CTA sections uniform (slate)
 * - Avoid changing non-interactive accents (e.g. plain `bg-blue-600` dots)
 *
 * Usage:
 *   node scripts/normalize-slate-ctas-and-buttons.mjs
 *   node scripts/normalize-slate-ctas-and-buttons.mjs --dry-run
 */

const ROOTS = ['app', 'components'];
const DRY_RUN = process.argv.includes('--dry-run');

const CTA_BACKGROUND_REPLACEMENTS = [
  // CTA section gradients -> slate
  ['bg-gradient-to-r from-blue-600 to-blue-700', 'bg-slate-900'],
  ['bg-gradient-to-r from-blue-600 to-blue-800', 'bg-slate-900'],
  ['bg-gradient-to-r from-green-600 to-green-700', 'bg-slate-900'],
  ['bg-gradient-to-r from-orange-600 to-orange-700', 'bg-slate-900'],
  ['bg-gradient-to-r from-purple-600 to-purple-700', 'bg-slate-900'],
  ['bg-gradient-to-r from-indigo-600 to-indigo-700', 'bg-slate-900'],

  // Common CTA fine-print/subtext colors -> slate
  ['text-blue-200', 'text-slate-200'],
  ['text-blue-100', 'text-slate-200'],
  ['text-green-200', 'text-slate-200'],
  ['text-green-100', 'text-slate-200'],
  ['text-orange-200', 'text-slate-200'],
  ['text-orange-100', 'text-slate-200'],
  ['text-purple-200', 'text-slate-200'],
  ['text-purple-100', 'text-slate-200'],
  ['text-indigo-200', 'text-slate-200'],
  ['text-indigo-100', 'text-slate-200'],

  // CTA buttons inside banners
  ['bg-white text-blue-600 hover:bg-blue-50', 'bg-white text-slate-950 hover:bg-slate-100'],
  ['bg-white text-blue-600 hover:bg-slate-50', 'bg-white text-slate-950 hover:bg-slate-100'],
  [
    'border-2 border-white text-white hover:bg-white hover:text-blue-600',
    'border-2 border-white text-white hover:bg-white hover:text-slate-900',
  ],
];

const BUTTON_LIKE_COLORS = ['blue', 'green', 'orange', 'purple', 'indigo', 'teal', 'cyan', 'emerald', 'amber', 'yellow'];

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function applyExactReplacements(src, replacements) {
  let out = src;
  let changed = false;
  for (const [from, to] of replacements) {
    if (out.includes(from)) {
      out = out.split(from).join(to);
      changed = true;
    }
  }
  return { out, changed };
}

function normalizeButtonLikeColors(src) {
  let out = src;
  let changed = false;

  // Only touch base bg colors when a hover/active color utility exists in the file.
  // This avoids converting non-interactive accents like small dots.
  for (const c of BUTTON_LIKE_COLORS) {
    const hasInteractive =
      out.includes(`hover:bg-${c}-700`) ||
      out.includes(`hover:bg-${c}-800`) ||
      out.includes(`active:bg-${c}-800`) ||
      out.includes(`active:bg-${c}-900`);

    if (!hasInteractive) continue;

    const before = out;
    out = out
      .split(`bg-${c}-600`).join('bg-slate-900')
      .split(`bg-${c}-700`).join('bg-slate-800')
      .split(`hover:bg-${c}-700`).join('hover:bg-slate-800')
      .split(`hover:bg-${c}-800`).join('hover:bg-slate-800')
      .split(`active:bg-${c}-800`).join('active:bg-slate-950')
      .split(`active:bg-${c}-900`).join('active:bg-slate-950');
    if (out !== before) changed = true;
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

      let out = src;
      let changed = false;

      const a = applyExactReplacements(out, CTA_BACKGROUND_REPLACEMENTS);
      out = a.out;
      changed = changed || a.changed;

      const b = normalizeButtonLikeColors(out);
      out = b.out;
      changed = changed || b.changed;

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

