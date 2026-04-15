#!/usr/bin/env node
/**
 * Prunes blog entries from lib/all-blog-posts.ts whose slugs correspond to
 * GONE_410 paths in lib/disposition/luxury-urls.ts.
 *
 * Usage: node scripts/prune-deleted-blog-entries.mjs
 */
import fs from 'node:fs';

const LUXURY_URLS_PATH = 'lib/disposition/luxury-urls.ts';
const BLOG_POSTS_PATH = 'lib/all-blog-posts.ts';

// 1. Extract GONE_410 paths starting with /blog/
const luxuryText = fs.readFileSync(LUXURY_URLS_PATH, 'utf8');
const gone410Match = luxuryText.match(/export const GONE_410[^=]*=\s*\[([\s\S]*?)\];/);
if (!gone410Match) {
  console.error('Could not find GONE_410 export in', LUXURY_URLS_PATH);
  process.exit(1);
}
const gone410Block = gone410Match[1];
const blogPaths = [...gone410Block.matchAll(/"(\/blog\/[^"]+)"/g)].map((m) => m[1]);

// 2. Map /blog/<slug> -> <slug>
const deletedSlugs = blogPaths.map((p) => p.replace(/^\/blog\//, ''));
console.log(`Found ${deletedSlugs.length} deleted blog slugs in GONE_410`);

// 3. Read all-blog-posts.ts
let blogText = fs.readFileSync(BLOG_POSTS_PATH, 'utf8');
const originalLineCount = blogText.split('\n').length;

// 4. For each deleted slug, remove its { ... } object block (including trailing comma)
//    Each entry looks like:
//      {
//        slug: 'the-slug',
//        ...multiple lines...
//      },
//    We match  \s*\{[^{}]*slug:\s*'SLUG'[^{}]*\},
//    using a regex that avoids nested braces (entries have no nested {})

let pruneCount = 0;
for (const slug of deletedSlugs) {
  // Escape slug for use in regex (slugs are URL-safe so minimal escaping needed)
  const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Match a block starting with optional whitespace + '{', containing slug: 'SLUG' or "SLUG",
  // ending with '},' and optional trailing newline
  const re = new RegExp(
    `\\n?[ \\t]*\\{[^{}]*slug:\\s*['"]${escapedSlug}['"][^{}]*\\},[ \\t]*`,
    's'
  );
  const before = blogText;
  blogText = blogText.replace(re, '');
  if (blogText !== before) {
    pruneCount++;
  } else {
    // Try without leading newline (first entry or differently formatted)
    const re2 = new RegExp(
      `[ \\t]*\\{[^{}]*slug:\\s*['"]${escapedSlug}['"][^{}]*\\},[ \\t]*\\n?`,
      's'
    );
    blogText = blogText.replace(re2, '');
    if (blogText !== before) {
      pruneCount++;
    }
  }
}

// 5. Write pruned file back
fs.writeFileSync(BLOG_POSTS_PATH, blogText, 'utf8');

const newLineCount = blogText.split('\n').length;
const remainingSlugs = (blogText.match(/^\s+slug:/gm) || []).length;
console.log(`Pruned ${pruneCount} entries; ${remainingSlugs} remain`);
console.log(`Lines: ${originalLineCount} -> ${newLineCount}`);
