import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildRecentContentSection } from '../update-llms-recent.mjs';

const SITE = 'https://www.mothebroker.com';

const posts = [
  { slug: 'post-a', title: 'Post A', date: '2026-04-10' },
  { slug: 'post-b', title: 'Post B', date: '2026-04-12' },
  { slug: 'post-c', title: 'Post C', date: '2026-04-08' },
  { slug: 'post-no-triples', title: 'Post D', date: '2026-04-15' },
];

const triples = {
  'post-a': ['TripA1', 'TripA2', 'TripA3'],
  'post-b': ['TripB1', 'TripB2', 'TripB3'],
  'post-c': ['TripC1', 'TripC2', 'TripC3'],
  // post-no-triples intentionally omitted
};

test('sorts by date descending, newest first', () => {
  const section = buildRecentContentSection({ posts, triples, siteOrigin: SITE, limit: 20 });
  const lines = section.trim().split('\n');
  assert.ok(lines[0].includes('Post B'));
  assert.ok(lines[1].includes('Post A'));
  assert.ok(lines[2].includes('Post C'));
});

test('skips posts without triples', () => {
  const section = buildRecentContentSection({ posts, triples, siteOrigin: SITE, limit: 20 });
  assert.ok(!section.includes('Post D'));
});

test('respects FIFO limit', () => {
  const many = Array.from({ length: 25 }, (_, i) => ({
    slug: `post-${i}`,
    title: `Post ${i}`,
    date: `2026-04-${String(i + 1).padStart(2, '0')}`,
  }));
  const manyTriples = Object.fromEntries(
    many.map((p) => [p.slug, ['t1', 't2', 't3']])
  );
  const section = buildRecentContentSection({
    posts: many,
    triples: manyTriples,
    siteOrigin: SITE,
    limit: 20,
  });
  const lines = section.trim().split('\n');
  assert.equal(lines.length, 20);
});

test('joins triples with semicolons and correct URL format', () => {
  const section = buildRecentContentSection({ posts, triples, siteOrigin: SITE, limit: 20 });
  assert.ok(section.includes('](https://www.mothebroker.com/blog/post-a): TripA1; TripA2; TripA3'));
});

test('is idempotent — same input → same output', () => {
  const a = buildRecentContentSection({ posts, triples, siteOrigin: SITE, limit: 20 });
  const b = buildRecentContentSection({ posts, triples, siteOrigin: SITE, limit: 20 });
  assert.equal(a, b);
});
