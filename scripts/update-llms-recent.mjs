import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const WORKSPACE = process.cwd();
const LLMS_PATH = path.join(WORKSPACE, 'public', 'llms.txt');
const SITE_ORIGIN = 'https://www.mothebroker.com';
const START_MARKER = '<!-- LLMS_RECENT:START -->';
const END_MARKER = '<!-- LLMS_RECENT:END -->';
const LIMIT = 20;

export function buildRecentContentSection({ posts, triples, siteOrigin, limit }) {
  const entries = posts
    .filter((p) => triples[p.slug])
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .slice(0, limit)
    .map((p) => {
      const [t1, t2, t3] = triples[p.slug];
      return `- [${p.title}](${siteOrigin}/blog/${p.slug}): ${t1}; ${t2}; ${t3}`;
    });

  return entries.join('\n') + '\n';
}

async function loadPosts() {
  // Dynamic import of the TS source via Node 22+ type-stripping.
  // If running on an older Node, pre-build lib/all-blog-posts.ts to .mjs first.
  const mod = await import(url.pathToFileURL(path.join(WORKSPACE, 'lib/all-blog-posts.ts')).href);
  return mod.allBlogPosts ?? mod.default ?? [];
}

async function loadTriples() {
  const mod = await import(url.pathToFileURL(path.join(WORKSPACE, 'lib/blog-triples.ts')).href);
  return mod.blogTriples ?? mod.default ?? {};
}

async function run() {
  const [posts, triples, current] = await Promise.all([
    loadPosts(),
    loadTriples(),
    fs.readFile(LLMS_PATH, 'utf8'),
  ]);

  const startIdx = current.indexOf(START_MARKER);
  const endIdx = current.indexOf(END_MARKER);

  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error(
      `Sentinel markers missing or malformed in ${LLMS_PATH}. Expected ${START_MARKER} before ${END_MARKER}.`
    );
  }

  const section = buildRecentContentSection({ posts, triples, siteOrigin: SITE_ORIGIN, limit: LIMIT });
  const before = current.slice(0, startIdx + START_MARKER.length);
  const after = current.slice(endIdx);
  const next = `${before}\n${section}${after}`;

  if (next === current) {
    console.log('llms.txt Recent Content is already up to date.');
    return;
  }

  await fs.writeFile(LLMS_PATH, next, 'utf8');
  const entryCount = section.trim().split('\n').filter(Boolean).length;
  console.log(`Updated llms.txt with ${entryCount} Recent Content entries.`);
}

const isCli = import.meta.url === url.pathToFileURL(process.argv[1]).href;
if (isCli) {
  run().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
