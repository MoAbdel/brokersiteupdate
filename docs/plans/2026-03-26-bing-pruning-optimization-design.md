# Bing-First Pruning & Optimization — Design Doc

**Date:** 2026-03-26
**Status:** Approved
**Approach:** Parallel phases (B) — template fixes + prune in parallel, then targeted rewrites
**Prerequisite:** Fresh GSC data pull before any pruning decisions

## Problem

The site is ~45-50% Bing-first compliant. 700+ pages lack geo meta tags, semantic triples, and proper paragraph density. 100+ zero-click high-impression pages waste crawl budget. 22 cannibalization clusters split authority. 1,242 sitemap URLs have zero inbound internal links.

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Noindex threshold | Tiered: 50+ impressions + 0 clicks = noindex; 1-2 clicks + position < 20 = keep for rewrite | Prune the dead, save the salvageable |
| Cannibalization handling | Merge + redirect | Full cleanup — winner gets unique content, loser 301s |
| Bing optimization scope | Template fixes for all + manual rewrite top 50 | Max coverage for least effort, targeted impact on highest-value pages |
| Top 50 selection | Fresh opportunity-queue.json weighted score | Already weighs demand, striking distance, CTR headroom, biz value, overlap risk |

---

## Phase 1A: Fresh Data Pull (parallel with 1B)

Run all SEO tooling to get current data:
```
npm run gsc:export
npm run gsc:export-queries
npm run seo:audit
npm run seo:opportunity-queue
npm run seo:internal-links
```

### Prune candidate identification

Extend or create script implementing tiered logic:

**Noindex immediately:**
- 50+ impressions AND 0 clicks AND 30+ days old

**Keep (striking distance):**
- 1-2 clicks AND position < 20 → rewrite candidate in Phase 3

**Output files:**
- `noindex_dead.json` — zero-click high-impression pages
- `striking_distance_keep.json` — salvageable low-click pages
- `cannibalization_merges.json` — loser page in each of the 22 clusters

---

## Phase 1B: Template-Level Bing Fixes (parallel with 1A)

### Global layout improvements (`app/layout.tsx`)
- Add `language: 'en'` to metadata `other`
- Verify no `NOARCHIVE`/`NOCACHE` tags exist
- Keep existing geo.region/geo.placename as fallback

### CityPageTemplate geo meta injection
- Add `lat`, `lng` to `CityData` interface
- Generate `geo.region`, `geo.placename`, `geo.position`, `ICBM` in `generateCityMetadata()` from city data
- Affects ~15 pages automatically

### RefinanceCityTemplate
- Already has geo tags from previous session. Verify.

### Blog page geo tags
- Add default geo tags to blog layout or shared blog metadata helper
- Default: `geo.region: 'US-CA'`, `geo.placename: 'Orange County, California'`
- Blog posts targeting specific cities override via their own metadata

### Default page schema (`components/seo/DefaultPageSchema.tsx`)
- New component generating baseline WebPage + LocalBusiness JSON-LD from page metadata
- Import in `app/layout.tsx` so every page gets schema
- Pages with their own JSON-LD override this naturally
- Fixes ~400 pages with zero schema

### Social meta tag completion
- Blog layout: add `openGraph.type: 'article'`, `openGraph.authors: ['Mo Abdel']`
- Add `article:author: 'Mo Abdel, NMLS #1426884'` to blog metadata `other`
- Non-blog pages: global layout defaults are sufficient

### Accordion FAQ fix (`components/FAQ.tsx`)
- Change from conditional rendering to CSS visibility (all answers in HTML, collapsed via CSS)
- Use `details/summary` or `max-height` transitions
- Copilot sees all content without requiring FAQPage schema as fallback
- Affects ~30 pages

---

## Phase 2: Execute Pruning

### Noindex dead pages
For each page in `noindex_dead.json`:
- Add `robots: { index: false, follow: true }` to metadata
- Add to `next-sitemap.config.js` exclude array
- Do NOT delete pages

For blog posts at scale: use sitemap config `transform` function with a noindex URL list rather than editing hundreds of individual files.

### Cannibalization merge + redirect (22 clusters)
For each cluster:
1. Identify winner (higher clicks + better position) from fresh audit
2. Review loser for unique content (sections, tables, FAQs)
3. Merge unique content into winner (respect Bing paragraph/structure rules)
4. 301 redirect loser to winner via `middleware.ts` or `next.config.ts`
5. Remove loser from sitemap

Estimate: ~10 clusters need content merges, ~12 are pure redirects.

### Expected crawl budget impact
- Current sitemap: ~1,538 URLs
- Removals: ~100-150 noindexed + ~22 redirected
- Target: ~1,350-1,400 URLs

---

## Phase 3: Top 50 Page Rewrites

### Page selection
Run fresh `npm run seo:opportunity-queue` after pruning.
Take top 50 by weighted score (demand 25, striking 25, bizValue 20, overlapRisk 15, ctrHeadroom 10, recency 5).

Exclude pages already Bing-compliant (16 refinance city pages, cannibalization merge winners).

### Per-page rewrite checklist

**Paragraph density:**
- Break paragraphs over 60 words into 2-3 shorter ones (30-60 words each)
- Each paragraph must contain one verifiable fact

**Semantic triples:**
- Add 3 triples in first 300 words (Subject -> Predicate -> Object format)
- Entity-attributed, fact-based, localized

**H2 optimization:**
- Rewrite as Copilot-answerable questions
- Exact-match keyword in 3+ H2s
- New H2 every 200-300 words

**First 150 characters:**
- Fact-dense, extractable opening
- "Mo Abdel, NMLS #1426884" in first sentence
- Primary keyword in first 50 words

**Per-page geo meta:**
- Add city-specific geo tags if not inherited from template

**Internal links:**
- Ensure 8+ internal links
- Add cross-topic links if missing

### What we do NOT rewrite
- Schema (handled by template fix)
- Social meta (handled globally)
- Page layout/design
- Images, CTAs, forms
- Blog posts already performing well (clicks > 5)

### Execution batches
- Batch 1-3: Top 30 blog posts by score (10 per batch)
- Batch 4: Top 10 area/loan-program pages
- Batch 5: Remaining 10 mixed pages
- One subagent per batch, read + rewrite + verify + commit

### Verification
- `npm run build` clean
- Spot-check 5 pages
- `npm run seo:audit` for improved structure scores

---

## Success Criteria

1. Template-level Bing fixes land on every page (geo tags, schema, social meta, FAQ visibility)
2. Zero-click high-impression pages noindexed with `follow: true`
3. 22 cannibalization clusters resolved (merges + 301 redirects)
4. Sitemap reduced to ~1,350-1,400 high-quality URLs
5. Top 50 pages pass Bing-first checklist (30-60 word paragraphs, 3 semantic triples, Copilot-answerable H2s, 8+ internal links)
6. Site moves from ~45% to ~85-90% Bing-first compliance
