# Bing-First Pruning & Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Move site from ~45% to ~85-90% Bing-first compliance by fixing templates globally, pruning dead pages, merging cannibalization clusters, and rewriting the top 50 highest-value pages.

**Architecture:** Phase 1A (data pull) and 1B (template fixes) run in parallel. Phase 2 (pruning) depends on 1A data. Phase 3 (rewrites) depends on Phases 1B + 2 being complete plus a fresh opportunity queue pull.

**Tech Stack:** Next.js 14, TypeScript, Tailwind v3.4.17, GSC API via Node scripts, middleware.ts for redirects

**Design doc:** `docs/plans/2026-03-26-bing-pruning-optimization-design.md`

---

## Phase 1A: Fresh Data Pull

### Task 1: Pull fresh GSC data and generate reports

**Step 1: Export fresh GSC page-level data**

Run: `npm run gsc:export`

This generates a timestamped file in `reports/gsc-performance-YYYYMMDD_YYYYMMDD.json`.

**Step 2: Export fresh GSC query-level data**

Run: `npm run gsc:export-queries`

Generates `reports/gsc-query-performance-YYYYMMDD_YYYYMMDD.json`.

**Step 3: Run SEO audit**

Run: `npm run seo:audit`

Generates `reports/seo-audit-YYYYMMDD_HHMMSS.json` and `.md` with:
- High-impression zero-click pages
- Low-CTR pages
- Striking-distance pages
- Cannibalization clusters
- Internal link audit

**Step 4: Run opportunity queue**

Run: `npm run seo:opportunity-queue`

Generates `reports/opportunity-queue.json` with weighted scores.

**Step 5: Run internal link audit**

Run: `npm run seo:internal-links`

Generates `reports/internal-link-audit.json`.

**Step 6: Note the filenames**

Record the exact timestamped filenames for use in subsequent tasks. The latest files are what Phase 2 will use.

---

### Task 2: Build tiered prune candidate script

**Files:**
- Create: `scripts/build-ctr-prune-candidates.mjs`

**Step 1: Create the tiered prune script**

This script reads the latest GSC performance JSON and the latest SEO audit, then outputs three files:

```javascript
// scripts/build-ctr-prune-candidates.mjs
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';

const REPORTS_DIR = resolve('reports');

// Find the latest GSC performance file
const gscFiles = readdirSync(REPORTS_DIR)
  .filter(f => f.startsWith('gsc-performance-') && f.endsWith('.json') && !f.includes('prune') && !f.includes('query'))
  .sort()
  .reverse();
const latestGsc = gscFiles[0];
if (!latestGsc) { console.error('No GSC performance file found'); process.exit(1); }

console.log(`Using GSC data: ${latestGsc}`);
const gscData = JSON.parse(readFileSync(join(REPORTS_DIR, latestGsc), 'utf8'));
const rows = gscData.rows || gscData;

// Find latest SEO audit for cannibalization data
const auditFiles = readdirSync(REPORTS_DIR)
  .filter(f => f.startsWith('seo-audit-') && f.endsWith('.json'))
  .sort()
  .reverse();
const latestAudit = auditFiles[0];
let cannibalizationClusters = [];
if (latestAudit) {
  console.log(`Using audit: ${latestAudit}`);
  const auditData = JSON.parse(readFileSync(join(REPORTS_DIR, latestAudit), 'utf8'));
  cannibalizationClusters = auditData.cannibalization?.clusters || auditData.cannibalizationClusters || [];
}

// Thresholds
const ZERO_CLICK_IMPRESSIONS_MIN = 50;
const MIN_AGE_DAYS = 30;
const STRIKING_DISTANCE_MAX_POSITION = 20;
const STRIKING_DISTANCE_MAX_CLICKS = 2;

const APP_DIR = resolve('app');
const noindexDead = [];
const strikingDistanceKeep = [];

for (const row of rows) {
  const url = row.keys?.[0] || row.page || '';
  const clicks = row.clicks || 0;
  const impressions = row.impressions || 0;
  const position = row.position || 999;

  // Skip non-page URLs
  if (!url.includes('mothebroker.com')) continue;

  const path = new URL(url).pathname;

  // Check file age
  const appPath = join(APP_DIR, path, 'page.tsx');
  let ageDays = 999;
  try {
    const stat = statSync(appPath);
    ageDays = Math.floor((Date.now() - stat.mtimeMs) / (1000 * 60 * 60 * 24));
  } catch {
    // File doesn't exist at expected path, try alternate patterns
    try {
      // Blog pages: app/blog/[slug]/page.tsx
      const altPath = join(APP_DIR, path, 'page.tsx');
      const stat = statSync(altPath);
      ageDays = Math.floor((Date.now() - stat.mtimeMs) / (1000 * 60 * 60 * 24));
    } catch {
      ageDays = 999; // Can't determine age, assume old enough
    }
  }

  if (ageDays < MIN_AGE_DAYS) continue;

  // Tier 1: Zero clicks + high impressions = noindex
  if (clicks === 0 && impressions >= ZERO_CLICK_IMPRESSIONS_MIN) {
    noindexDead.push({ url, path, clicks, impressions, position, ageDays });
    continue;
  }

  // Tier 2: Low clicks + striking distance = keep for rewrite
  if (clicks >= 1 && clicks <= STRIKING_DISTANCE_MAX_CLICKS && position < STRIKING_DISTANCE_MAX_POSITION && impressions >= 20) {
    strikingDistanceKeep.push({ url, path, clicks, impressions, position, ageDays });
    continue;
  }
}

// Cannibalization: identify losers
const cannibalizationMerges = [];
for (const cluster of cannibalizationClusters) {
  const pages = cluster.pages || cluster.urls || [];
  if (pages.length < 2) continue;

  // Sort by clicks desc, then position asc (lower is better)
  const sorted = [...pages].sort((a, b) => {
    if ((b.clicks || 0) !== (a.clicks || 0)) return (b.clicks || 0) - (a.clicks || 0);
    return (a.position || 999) - (b.position || 999);
  });

  const winner = sorted[0];
  const losers = sorted.slice(1);

  cannibalizationMerges.push({
    query: cluster.query || cluster.keyword || 'unknown',
    winner: { url: winner.url || winner.page, clicks: winner.clicks, impressions: winner.impressions, position: winner.position },
    losers: losers.map(l => ({ url: l.url || l.page, clicks: l.clicks, impressions: l.impressions, position: l.position })),
  });
}

// Sort by impressions descending (highest waste first)
noindexDead.sort((a, b) => b.impressions - a.impressions);
strikingDistanceKeep.sort((a, b) => b.impressions - a.impressions);

// Write outputs
const stamp = new Date().toISOString().replace(/[:.]/g, '').slice(0, 15);
writeFileSync(join(REPORTS_DIR, `noindex-dead-${stamp}.json`), JSON.stringify(noindexDead, null, 2));
writeFileSync(join(REPORTS_DIR, `striking-distance-keep-${stamp}.json`), JSON.stringify(strikingDistanceKeep, null, 2));
writeFileSync(join(REPORTS_DIR, `cannibalization-merges-${stamp}.json`), JSON.stringify(cannibalizationMerges, null, 2));

console.log(`\nResults:`);
console.log(`  Noindex (dead): ${noindexDead.length} pages`);
console.log(`  Striking distance (keep): ${strikingDistanceKeep.length} pages`);
console.log(`  Cannibalization clusters: ${cannibalizationMerges.length}`);
console.log(`\nFiles written to reports/`);
```

**Step 2: Add npm script to package.json**

Add to the `scripts` section of `package.json`:
```json
"seo:ctr-prune": "node scripts/build-ctr-prune-candidates.mjs"
```

**Step 3: Run the script**

Run: `npm run seo:ctr-prune`

Expected output: three JSON files in reports/ with the noindex list, keep list, and cannibalization merges.

**Step 4: Commit**

```bash
git add scripts/build-ctr-prune-candidates.mjs package.json
git commit -m "feat: add tiered CTR-based prune candidate script (50+ impressions + 0 clicks = noindex)"
```

---

## Phase 1B: Template-Level Bing Fixes

### Task 3: Add `language` meta and verify no NOARCHIVE in global layout

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Add language meta tag**

In the `<head>` section (around line 90-92 where geo tags are), add:
```html
<meta name="language" content="en" />
```

**Step 2: Verify no NOARCHIVE/NOCACHE**

Search the file for `NOARCHIVE`, `NOCACHE`, `noarchive`, `nocache`. There should be none. If found, remove them — Copilot requires cached content for citations.

**Step 3: Verify build**

Run: `npm run typecheck`

**Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add language meta tag to global layout, verify no NOARCHIVE"
```

---

### Task 4: Add geo meta tags to CityPageTemplate

**Files:**
- Modify: `components/seo/CityPageTemplate.tsx` — lines 13-28 (CityData interface) and lines 34-69 (generateCityMetadata)

**Step 1: Extend CityData interface**

Add optional `lat` and `lng` fields to the interface (around line 28):
```typescript
interface CityData {
  name: string;
  slug: string;
  population: number;
  medianHomePrice: number;
  medianHouseholdIncome: number;
  averageLoanAmount: number;
  topNeighborhoods: string[];
  marketTrends: {
    priceGrowth: string;
    inventoryLevel: string;
    averageDaysOnMarket: number;
  };
  localFactors: string[];
  keywordPhrase: string;
  lat?: number;
  lng?: number;
}
```

**Step 2: Add geo tags to generateCityMetadata**

In the `generateCityMetadata` function return object (around line 39-68), add an `other` field:
```typescript
other: {
  'geo.region': 'US-CA',
  'geo.placename': `${cityData.name}, California`,
  ...(cityData.lat && cityData.lng ? {
    'geo.position': `${cityData.lat};${cityData.lng}`,
    'ICBM': `${cityData.lat}, ${cityData.lng}`,
  } : {}),
  language: 'en',
},
```

**Step 3: Update existing city data files to include lat/lng**

Read each thin city page file (the ones that pass data to CityPageTemplate) and add `lat` and `lng` to their data objects. The pages that are noindexed still benefit from this for link equity. The key ones to update:

- `app/areas/anaheim-mortgage-broker/page.tsx` — lat: 33.8366, lng: -117.9143
- `app/areas/huntington-beach-mortgage-broker/page.tsx` — lat: 33.6595, lng: -117.9988
- `app/areas/costa-mesa-mortgage-broker/page.tsx` — lat: 33.6411, lng: -117.9187
- `app/areas/santa-ana-mortgage-broker/page.tsx` — lat: 33.7455, lng: -117.8677
- `app/areas/seal-beach-mortgage-broker/page.tsx` — lat: 33.7414, lng: -118.1048
- And all other CityPageTemplate-based pages that aren't already noindexed

For noindexed pages, adding lat/lng is optional but harmless.

**Step 4: Verify build**

Run: `npm run typecheck`

**Step 5: Commit**

```bash
git add components/seo/CityPageTemplate.tsx app/areas/
git commit -m "feat: add Bing geo meta tags to CityPageTemplate (geo.region, geo.placename, geo.position, ICBM)"
```

---

### Task 5: Create DefaultPageSchema component

**Files:**
- Create: `components/seo/DefaultPageSchema.tsx`

**Step 1: Create the component**

```typescript
// components/seo/DefaultPageSchema.tsx
import { SITE_ORIGIN, PHONE_DISPLAY } from '@/lib/site';

interface DefaultPageSchemaProps {
  title: string;
  description: string;
  url: string;
}

export default function DefaultPageSchema({ title, description, url }: DefaultPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Mo Abdel | Mortgage Broker',
      url: SITE_ORIGIN,
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Mo Abdel - Wholesale Mortgage Broker',
      telephone: PHONE_DISPLAY,
      url: SITE_ORIGIN,
      areaServed: [
        { '@type': 'State', name: 'California' },
        { '@type': 'State', name: 'Washington' },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

**Step 2: Integrate into blog layout**

Modify `app/blog/layout.tsx` to import and render `DefaultPageSchema` with generic blog metadata. This gives every blog post at minimum a WebPage + LocalBusiness schema.

Add at the top of the layout's return, before children:
```tsx
import DefaultPageSchema from '@/components/seo/DefaultPageSchema';

// In the layout component:
<DefaultPageSchema
  title="Mo Abdel | Mortgage Broker Blog"
  description="Expert mortgage guidance for California and Washington homeowners from Mo Abdel, NMLS #1426884."
  url={`${SITE_ORIGIN}/blog`}
/>
```

Note: Individual blog pages that already inject their own JSON-LD will have both — this is valid JSON-LD (multiple schemas on one page is fine). The page-specific schema takes priority for Copilot.

**Step 3: Verify build**

Run: `npm run typecheck`

**Step 4: Commit**

```bash
git add components/seo/DefaultPageSchema.tsx app/blog/layout.tsx
git commit -m "feat: add DefaultPageSchema for baseline WebPage + LocalBusiness on all blog pages"
```

---

### Task 6: Add social meta tags to blog pages

**Files:**
- Modify: `app/blog/layout.tsx`

**Step 1: Add blog-specific metadata export**

If `app/blog/layout.tsx` does not already export metadata, add:
```typescript
import { Metadata } from 'next';
import { SITE_ORIGIN } from '@/lib/site';

export const metadata: Metadata = {
  openGraph: {
    type: 'article',
    authors: ['Mo Abdel'],
    siteName: 'Mo Abdel | Mortgage Broker',
  },
  other: {
    'article:author': 'Mo Abdel, NMLS #1426884',
    'article:publisher': SITE_ORIGIN,
  },
};
```

If the layout already exports metadata, merge these fields into it.

Individual blog pages that set their own `openGraph.publishedTime` will override the layout's metadata for that field (Next.js metadata merging).

**Step 2: Verify build**

Run: `npm run typecheck`

**Step 3: Commit**

```bash
git add app/blog/layout.tsx
git commit -m "feat: add article:author and OG article type to blog layout metadata"
```

---

### Task 7: Fix FAQ accordion to use CSS visibility

**Files:**
- Modify: `components/FAQ.tsx` — lines 118-131

**Step 1: Change conditional rendering to CSS-based visibility**

Find the conditional render pattern (around line 118):
```tsx
{isOpen && (
  <div id={`faq-answer-${index}`} className="px-6 pb-4" ...>
    ...
  </div>
)}
```

Replace with CSS-based show/hide (content always in DOM, visually hidden when closed):
```tsx
<div
  id={`faq-answer-${index}`}
  className={`px-6 overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
  role="region"
  aria-labelledby={`faq-question-${index}`}
  aria-hidden={!isOpen}
>
  <div className="border-t border-slate-200 pt-4">
    <p className="text-slate-700 leading-relaxed">
      {faq.answer}
    </p>
  </div>
</div>
```

This keeps all FAQ answers in the HTML (Copilot can read them) while preserving the visual accordion interaction. The `max-h-0 overflow-hidden` hides the content visually, and `max-h-96` expands it on open.

**Step 2: Verify the component still works**

Run: `npm run typecheck`

If there's an existing `StructuredFAQ.tsx` that uses the same pattern, apply the same fix there.

**Step 3: Commit**

```bash
git add components/FAQ.tsx
git commit -m "fix: render FAQ answers in DOM always (CSS visibility) for Bing Copilot extraction"
```

---

### Task 8: Phase 1B verification

**Step 1: Full build**

Run: `npm run build`

Expected: Clean build with zero errors.

**Step 2: Commit Phase 1B**

```bash
git add -A
git commit -m "feat: Phase 1B complete — template-level Bing fixes (geo tags, schema, social meta, FAQ visibility)"
```

---

## Phase 2: Execute Pruning

### Task 9: Analyze prune candidate outputs and create noindex plan

**Step 1: Read the output files from Task 2**

Read `reports/noindex-dead-*.json` to see the list of pages to noindex.
Read `reports/cannibalization-merges-*.json` to see the merge plan.

**Step 2: Categorize noindex targets**

Split the noindex list into:
- **Blog posts** (path starts with `/blog/`) — these will be handled via sitemap transform, not per-file edits
- **Area/tool/other pages** (everything else) — these get per-file `robots: { index: false, follow: true }`

**Step 3: Create a noindex URL list file**

Create `lib/noindex-urls.ts`:
```typescript
// lib/noindex-urls.ts
// Pages identified as zero-click high-impression (50+ impressions, 0 clicks, 30+ days old)
// Generated by npm run seo:ctr-prune on [date]
export const NOINDEX_URLS: string[] = [
  // Populate from noindex-dead-*.json
  // e.g., '/blog/some-underperforming-post-2026',
];
```

This file serves as the single source of truth for programmatic noindexing.

---

### Task 10: Implement noindex via sitemap transform + per-page metadata

**Files:**
- Modify: `next-sitemap.config.js` — add NOINDEX_URLS to exclude array
- Modify: Individual non-blog page files — add `robots: { index: false, follow: true }`

**Step 1: Update sitemap config**

For blog posts: add all blog URLs from the noindex list to the `exclude` array in `next-sitemap.config.js` with a comment `// CTR-pruned zero-click pages (Phase 2)`.

For non-blog pages: also add to exclude array AND add `robots: { index: false, follow: true }` to each page's metadata export.

**Step 2: Verify build**

Run: `npm run build`

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: noindex zero-click high-impression pages (tiered CTR pruning)"
```

---

### Task 11: Execute cannibalization merges

**Files:**
- Modify: `middleware.ts` — add 301 redirects for losers
- Modify: Winner page files — merge unique content from losers

**For each cannibalization cluster (from `cannibalization-merges-*.json`):**

**Step 1: Read both winner and loser pages**

Read the full content of both pages. Identify:
- Unique sections in the loser not present in the winner
- Unique FAQ questions in the loser
- Unique data tables in the loser

**Step 2: Merge unique content into winner**

If the loser has genuinely unique content:
- Add unique FAQ items to the winner's FAQ section
- Add unique data tables or sections to the winner
- Respect 30-60 word paragraph rule when merging
- Don't duplicate — only add what's truly unique

If the loser has no unique content (common case): skip this step, just redirect.

**Step 3: Add 301 redirect**

In `middleware.ts`, add the loser URL to the appropriate redirect object (blogRedirects for blog pages, pageRedirects for others):
```typescript
'/blog/loser-page-slug': '/blog/winner-page-slug',
```

**Step 4: Add loser to sitemap exclude**

Add the loser URL to `next-sitemap.config.js` exclude array.

**Step 5: Repeat for each cluster**

Work through all clusters from the merges JSON.

**Step 6: Verify build**

Run: `npm run build`

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: merge 22 cannibalization clusters (content merge + 301 redirects)"
```

---

### Task 12: Phase 2 verification

**Step 1: Full build**

Run: `npm run build`

**Step 2: Verify sitemap size**

Check `public/sitemap.xml` line count. Should be reduced by ~100-150 URLs from pre-pruning baseline.

**Step 3: Verify redirects work**

Run: `npm run dev` and manually test 2-3 redirect URLs to confirm they 301 to the winner.

**Step 4: Commit Phase 2**

```bash
git add -A
git commit -m "feat: Phase 2 complete — CTR pruning + cannibalization merges"
```

---

## Phase 3: Top 50 Page Rewrites

### Task 13: Pull fresh opportunity queue and select top 50

**Step 1: Run fresh opportunity queue**

Run: `npm run seo:opportunity-queue`

**Step 2: Read the output**

Read `reports/opportunity-queue.json`. Extract the top 50 pages by weighted score.

**Step 3: Filter exclusions**

Remove from the list:
- The 16 new refinance city pages (already Bing-compliant)
- Any pages that were cannibalization merge winners (already got fresh content)
- Backfill from position 51+ to maintain 50 pages

**Step 4: Create the rewrite target list**

Save the final list of 50 pages with their scores, current metrics, and file paths. Group into 5 batches of 10:
- Batch 1-3: Blog posts (30 total, highest score first)
- Batch 4: Area/loan-program pages (10)
- Batch 5: Remaining mixed (10)

---

### Task 14: Rewrite Batch 1 (top 10 blog posts)

**For each of the 10 pages:**

**Step 1: Read the full page**

**Step 2: Apply the Bing rewrite checklist:**

a. **Paragraph density**: Break any paragraph over 60 words into 2-3 shorter paragraphs (30-60 words each). Each must contain one verifiable fact.

b. **Semantic triples**: Add 3 triples in the first 300 words after the opening sentence:
```
- Mo Abdel → [predicate relevant to page topic] → [specific fact]
- [Subject from page topic] → [predicate] → [localized fact with number]
- Wholesale rates → [predicate] → [comparison with number]
```

c. **H2 optimization**: Rewrite H2s as Copilot-answerable questions. Ensure exact-match primary keyword in 3+ H2s. Add H2 every 200-300 words if gaps exist.

d. **First 150 characters**: Ensure opening is "Mo Abdel, NMLS #1426884, [fact-dense answer to primary query]". Primary keyword in first 50 words.

e. **Geo meta**: Add `other: { 'geo.region': 'US-CA', 'geo.placename': '[City], California', language: 'en' }` to page metadata if not inherited.

f. **Internal links**: Count existing links. If below 8, add cross-topic links (to HELOC, DSCR, refinance, or area pages as relevant).

**Step 3: Verify build**

Run: `npm run typecheck`

**Step 4: Commit the batch**

```bash
git add -A
git commit -m "feat: Bing-first rewrite batch 1 — top 10 blog posts (paragraphs, triples, H2s, geo)"
```

---

### Task 15: Rewrite Batch 2 (next 10 blog posts)

Same checklist as Task 14 for the next 10 blog posts by score.

**Commit:**
```bash
git commit -m "feat: Bing-first rewrite batch 2 — blog posts 11-20"
```

---

### Task 16: Rewrite Batch 3 (next 10 blog posts)

Same checklist for blog posts 21-30.

**Commit:**
```bash
git commit -m "feat: Bing-first rewrite batch 3 — blog posts 21-30"
```

---

### Task 17: Rewrite Batch 4 (top 10 area/loan-program pages)

Same Bing rewrite checklist, but these pages may have different structures (custom components vs blog content). Read each carefully before editing.

**Commit:**
```bash
git commit -m "feat: Bing-first rewrite batch 4 — top 10 area and loan-program pages"
```

---

### Task 18: Rewrite Batch 5 (remaining 10 pages)

Same checklist for the remaining 10 mixed pages.

**Commit:**
```bash
git commit -m "feat: Bing-first rewrite batch 5 — remaining 10 pages"
```

---

### Task 19: Final verification

**Step 1: Full build**

Run: `npm run build`

Expected: Zero errors.

**Step 2: Run fresh SEO audit**

Run: `npm run seo:audit`

Compare the new audit against the pre-Phase-1 baseline:
- Zero-click high-impression pages should be reduced (noindexed)
- Cannibalization clusters should be reduced (merged/redirected)
- The 50 rewritten pages should show improved structure

**Step 3: Spot-check 5 rewritten pages**

Verify in dev (`npm run dev`):
- Paragraphs are 30-60 words
- Semantic triples visible in first 300 words
- H2s are question-formatted
- Geo meta tags in page source
- 8+ internal links

**Step 4: Final commit**

```bash
git add -A
git commit -m "feat: Bing-first pruning & optimization complete — template fixes, CTR pruning, cannibalization merges, top 50 rewrites"
```

**Step 5: Push**

```bash
git push origin main
```
