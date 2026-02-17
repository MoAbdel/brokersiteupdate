import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Find emoji usage across the repo.
 *
 * Uses Unicode property escapes (Extended_Pictographic) to detect emoji-like glyphs.
 *
 * Usage:
 *   node scripts/find-emojis.mjs
 *   node scripts/find-emojis.mjs --json
 */

const ROOTS = ['app', 'components', 'lib'];
const OUTPUT_JSON = process.argv.includes('--json');

const EMOJI_RE = /\p{Extended_Pictographic}/gu;

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function summarizeEmojis(src) {
  const counts = new Map();
  let m;
  while ((m = EMOJI_RE.exec(src))) {
    const e = m[0];
    counts.set(e, (counts.get(e) || 0) + 1);
  }
  return counts;
}

async function main() {
  const repoRoot = process.cwd();
  const results = [];

  for (const root of ROOTS) {
    const base = path.join(repoRoot, root);
    try {
      // eslint-disable-next-line no-await-in-loop
      for await (const file of walk(base)) {
        if (!file.endsWith('.tsx') && !file.endsWith('.ts') && !file.endsWith('.mdx')) continue;
        // eslint-disable-next-line no-await-in-loop
        const src = await fs.readFile(file, 'utf8');
        const counts = summarizeEmojis(src);
        if (counts.size === 0) continue;

        results.push({
          file: path.relative(repoRoot, file),
          total: Array.from(counts.values()).reduce((a, b) => a + b, 0),
          emojis: Array.from(counts.entries())
            .sort((a, b) => b[1] - a[1])
            .map(([emoji, count]) => ({ emoji, count })),
        });
      }
    } catch {
      // ignore missing roots
    }
  }

  results.sort((a, b) => b.total - a.total || a.file.localeCompare(b.file));

  if (OUTPUT_JSON) {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify({ files: results.length, results }, null, 2));
    return;
  }

  // eslint-disable-next-line no-console
  console.log(
    results
      .slice(0, 200)
      .map((r) => `${r.total.toString().padStart(4)}  ${r.file}  ${r.emojis.map((e) => `${e.emoji}×${e.count}`).join(' ')}`)
      .join('\n')
  );
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exitCode = 1;
});

