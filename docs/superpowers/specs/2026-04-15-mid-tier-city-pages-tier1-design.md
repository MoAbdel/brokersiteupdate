# Mid-Tier City Pages — Tier 1 Design Spec

**Date:** 2026-04-15
**Slice:** 3 of 6 (ICP Pivot — Website Lead Targeting Fixes), **Tier 1 subset (10 of 40 candidate cities)**
**Predecessors:**
- `docs/superpowers/specs/2026-04-14-luxury-teardown-cap-display-design.md` (slice 1, shipped — built `ProductLedCityTemplate`)
- `docs/superpowers/specs/2026-04-15-scenario-rewrites-copy-sweep-design.md` (slice 2+4, shipped — taxonomy rules for luxury language)
- `docs/superpowers/specs/2026-04-15-prequalification-widget-design.md` (slice 5, shipped — `/contact` gate)
**Source requirement:** `C:\Users\haithem\Downloads\website-lead-targeting-fixes.md` (Section 3 — Create New City Pages for Target Markets)
**Status:** Draft, pending user review

## Context

Slice 1 built the dormant `ProductLedCityTemplate` and `lib/city-page-data/` directory in anticipation of this slice. Slice 3 finally consumes them: stands up mid-tier city pages for markets where the ICP (home values $400K–$1.5M, loan amounts $50K–$3.5M) actually fits the product.

A pre-requisite that previously blocked this slice — the GSC service-account returning 403 on `sc-domain:mothebroker.com` — was resolved on 2026-04-15. Fresh 90-day GSC data (1,471 pages, 6,485 queries) now informs city selection.

Rather than build all 40 source-doc cities in one slice, this spec covers the **Tier 1 subset of 10 cities** selected via GSC-weighted hybrid ranking with geographic-balance constraints. Tier 2 (remaining 30 cities) is a subsequent slice informed by Tier 1's performance data.

## Goals

1. Ship 10 live, crawlable, SEO-optimized city pages at `/areas/<slug>` routes, each with demonstrably unique content passing a "would a Google quality rater see distinct value" bar.
2. Consume `ProductLedCityTemplate` (slice 1) for the first time; identify and close any template gaps uncovered in real use.
3. Every factual claim on every page is traceable to a public source (Redfin/Zillow, city official page, local news). Zero invented statistics.
4. Each page satisfies the slice 2+4 luxury-language taxonomy (no UHNW / ultra-luxury / waterfront-specialist / $4M+ positioning tokens).
5. Sitemap includes all 10 new URLs; GSC + IndexNow submission runs as part of deploy.

## Non-Goals

- **Tier 2 cities (remaining 30).** Separate slice, informed by Tier 1's 30-day post-deploy GSC performance.
- **Navigation menu "Areas" submenu.** Optional enhancement deferred to a follow-up commit; pages are discoverable via sitemap + internal links without a menu change.
- **Nested neighborhood pages** (e.g., `/areas/spokane/hillyard`). Out of scope; single city-level page per market.
- **OC-based Tier 1 city pages.** OC candidates scored near zero on city-name GSC queries (the site already ranks for OC brand searches). OC cities become Tier 2 candidates.
- **Dynamic pricing or rate display per city.** Pages show the standard `LOAN_CAPS` via `LoanCapSubheadline`; city-specific market data is the prose section only, not live pricing.
- **Newport Beach / Laguna Beach / Beverly Hills / Palo Alto / Atherton / Bellevue waterfront / Newport Coast** — explicitly on the "do NOT create" list per source doc.

## Tier 1 City Selection

Produced by `scripts/rank-tier1-cities.mjs` from the 90-day GSC query export. Score formula: `impressions_share × 70 + regional_diversity_bonus × 0.3`. Constraint: ≥2 WA cities and ≥2 Inland Empire cities in top 10.

| Rank | City | State/Region | 90-day GSC impressions | Score |
|---|---|---|---|---|
| 1 | Spokane | WA | 272 | 76.0 |
| 2 | Riverside | CA / IE | 150 | 44.6 |
| 3 | Long Beach | CA / LA | 132 | 37.0 |
| 4 | Fresno | CA / Central Valley | 127 | 35.7 |
| 5 | Elk Grove | CA / Sacramento | 90 | 26.2 |
| 6 | Carlsbad | CA / San Diego | 70 (1 click) | 21.0 |
| 7 | Roseville | CA / Sacramento | 59 | 18.2 |
| 8 | San Bernardino | CA / IE | 45 | 17.6 |
| 9 | Murrieta | CA / IE | 31 | 14.0 |
| 10 | Tacoma | WA | 7 | 7.8 |

Regional distribution: 2 WA · 3 IE · 2 SAC · 1 CV · 1 LA · 1 SD · 0 OC.

**Known weak pick:** Tacoma (rank 10) has only 7 impressions — kept to satisfy the ≥2 WA constraint and seed WA market presence. If Tacoma shows no impression growth 30 days post-deploy, it becomes a rewrite or deprecation candidate in Tier 2 planning.

## Architecture

### Routing

`/areas/<slug>` — slug-only, no `-mortgage-broker` suffix. Matches existing `/areas/irvine-mortgage-broker`-style convention while keeping new URLs short. H1 and metas handle the "mortgage broker" framing.

Slugs:
- `/areas/spokane`, `/areas/riverside`, `/areas/long-beach`, `/areas/fresno`, `/areas/elk-grove`
- `/areas/carlsbad`, `/areas/roseville`, `/areas/san-bernardino`, `/areas/murrieta`, `/areas/tacoma`

### File layout

```
app/areas/<slug>/page.tsx              — thin page file, imports template + data
lib/city-page-data/<slug>.ts           — typed CityPageData const + prose string
lib/city-page-data/index.ts            — barrel export (for iteration + sitemap use)
lib/city-page-data/README.md           — existing, slice 1 stub; updated with authoring guide
components/templates/ProductLedCityTemplate.tsx  — slice 1 built; slice 3 extends with prose section
scripts/validate-city-data.mjs         — content-integrity validator (new)
scripts/rank-tier1-cities.mjs          — Tier 1 selection script (already created during brainstorming)
```

### Page file pattern

```tsx
// app/areas/spokane/page.tsx
import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { spokane } from '@/lib/city-page-data/spokane';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: spokane.metaTitle,
  description: spokane.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${spokane.citySlug}` },
};

export default function SpokaneMortgageBrokerPage() {
  return <ProductLedCityTemplate city={spokane} />;
}
```

### Extended `CityPageData` interface

Augments the slice-1 definition in `components/templates/ProductLedCityTemplate.tsx`. Additions: `metaTitle`, `metaDescription`, `region`, `localMarketProse`. Breaking change to the existing interface — slice 1 had zero consumers, so safe to extend.

```ts
export interface CityPageData {
  citySlug: string;
  cityName: string;
  state: 'California' | 'Washington';
  region: string;  // e.g., "Inland Empire", "Central Valley", "WA" — used for nearby-cities linking
  metaTitle: string;          // ≤ 60 chars
  metaDescription: string;    // 140–160 chars
  midTierNeighborhoods: Array<{ name: string; blurb: string }>;  // ≥ 3 entries
  typicalHomeValueRange: { min: number; max: number };
  localMarketProse: string;   // 300–500 words; rendered as <p> paragraphs split on \n\n
  faqOverrides?: Array<{ question: string; answer: string }>;
}
```

### `ProductLedCityTemplate` changes

Current slice-1 template renders: Hero + `LoanCapSubheadline` + product grid + neighborhoods + FAQ + CTA.

Slice 3 adds one new section between neighborhoods and FAQ:

- **"Mortgage landscape in {cityName}"** — renders `localMarketProse` as paragraphs (split on double-newline) inside a styled `<section>` with the same visual treatment as existing prose sections.

Also adds a **"Nearby cities we serve"** section at the bottom (before footer CTA) showing 2–3 links to other Tier 1 cities with the same `region` value. If fewer than 2 same-region cities exist, falls back to same-state cities.

### Internal linking strategy

- Each city page links to 2–3 nearby Tier 1 cities (region-based or state-based fallback) via a "Nearby cities" block
- Each city page keeps the existing template footer links (back to `/areas`, to loan program pages)
- No new links from existing pages to Tier 1 cities in this slice — Tier 1 cities are reachable via sitemap, internal link audit, and nearby-cities cross-links. Adding outbound links from existing mainstream pages to niche Tier 1 cities dilutes existing authority without clear benefit. Evaluate after 30-day GSC read.

### Sitemap inclusion

Automatic. `next-sitemap` picks up all `app/areas/*/page.tsx` routes at build time; no config change needed. Post-deploy, `npm run gsc:sitemap` resubmits.

## Content Authoring Workflow

Sequential (not parallel). For each of the 10 cities, I:

### 1. Research
- **GSC query stream for the city** — pull queries containing the city name from `reports/gsc-query-performance-20260115_20260415.json`. Record the top 5 queries by impressions; these inform the `faqOverrides` and `metaDescription` focus.
- **WebFetch of public sources** — minimum 2 independent sources per factual claim:
  - Redfin or Zillow area page for median home value + price band
  - City Wikipedia / official city page for demographics + neighborhood names
  - One local news search result for "housing market [city] 2026" for current-market context
- Cross-check every dollar figure, every neighborhood name, every percentage. Drop any claim that can't be verified by ≥2 sources.

### 2. Draft the TS file

Populate `lib/city-page-data/<slug>.ts` per the `CityPageData` interface:

- `metaTitle` — formula `"{City} Mortgage Broker | Rates & Loan Programs"`, must be ≤60 chars
- `metaDescription` — 140–160 chars, mentions state + products + phone `(949) 579-2057`
- `midTierNeighborhoods` — 5 real neighborhood names with one-line blurbs ("Hillyard — starter homes $350K–$500K, strong first-time-buyer activity")
- `typicalHomeValueRange` — actual median ± reasonable band from Redfin/Zillow
- `localMarketProse` — 3 paragraphs, 300–500 words total:
  - Paragraph 1: local economy snapshot (major employers, population trend, general housing market character)
  - Paragraph 2: dominant property types + buyer profile (condos vs. SFR, first-time-buyer share, typical down payment profile)
  - Paragraph 3: what brings buyers to this market (job growth, lifestyle, relative affordability vs. nearby markets)
- `faqOverrides` — 2–3 FAQs seeded by top GSC queries; answers tuned to that intent

### 3. User review gate per city

After drafting, present a concise summary:

> "**Spokane** — median $XXK (source: Redfin), top GSC query: 'XXX', neighborhoods: [5], prose lede: '…'. Approve?"

User says yes / no / amend. Commit only after approval. If content is fundamentally wrong, drop the city or swap in another from the deferred list.

### 4. Carlsbad risk flag

Carlsbad's real median home value (~$1.3M) likely exceeds the `TARGET_HOME_VALUE_BAND` $500K–$900K. Two options:
- Include anyway — frame the page toward entry-level neighborhoods (Ponto, Bressi Ranch, etc.) where real transactions in the $600K–$900K range happen
- Defer Carlsbad — replace with Bakersfield (rank 11, CV region, verified mid-tier)

Decision made at research time for Carlsbad specifically; user approves the call before drafting.

## Copy Constraints

Every page must pass:

- Zero hits of: `UHNW`, `ultra-high-net-worth`, `ultra-luxury`, `waterfront specialist`, `luxury waterfront`, `luxury specialist` (slice 2+4 hard-ban)
- Zero positioning uses of: `$4M`, `$5M`, `$6M`, `$7M`, `$8M`, `$9M`, `$10M`, `$12M`, `$15M` (calculator defaults and conforming-limit references remain allowed, but these don't apply to city pages)
- Zero use of the 3 signal neighborhoods from slice 2+4 (Balboa Island, Lido Isle, Newport Coast) — none of the Tier 1 cities are adjacent to those enclaves anyway

`luxury` as a descriptive amenity adjective ("luxury finishes" in a mid-tier condo complex) remains allowed per slice 2+4 taxonomy — unlikely to appear in these pages but not banned.

## Testing

No test framework. Verification via type-check / build / grep / browser / curl / validator script.

### Gate 1 — structural (per-city during authoring + end-of-slice)
- `npm run typecheck` — zero new errors
- `npm run lint` — zero new errors
- `npm run build` — clean; `next-sitemap` post-hook succeeds

### Gate 2 — content integrity (new validator + each commit)

`scripts/validate-city-data.mjs` walks all `lib/city-page-data/*.ts` files (excluding `index.ts` and `README.md`) and asserts for each:

- `metaTitle.length <= 60`
- `metaDescription.length` between 140 and 160
- `midTierNeighborhoods.length >= 3`
- `typicalHomeValueRange.min < typicalHomeValueRange.max`
- `localMarketProse` word count ≥ 280 (allows slight slack under the 300 target)
- `localMarketProse` contains zero hard-ban tokens
- `citySlug` matches the filename stem
- Valid `state` value

Exits non-zero if any file violates any check.

### Gate 3 — template + routing (once all 10 cities landed)

- All 10 `/areas/<slug>` URLs return 200 on `npm run dev`
- Each renders the `LoanCapSubheadline` in the hero (slice-1 regression check)
- Product grid shows 4 cards with caps from `LOAN_CAPS`
- "Mortgage landscape in {cityName}" section renders prose as paragraphs
- "Nearby cities" section shows 2–3 links

### Gate 4 — browser smoke

Viewports: 1440px and 375px. Open each of the 10 URLs, visually confirm:

- Layout intact, no overflow
- Prose paragraphs readable (not one giant blob)
- Neighborhoods list renders with blurbs
- FAQ expand/collapse works
- Nearby-cities links are clickable and navigate to the right page

Regression checks:
- `/contact` still gated by pre-qual widget (slice 5)
- `/heloc-orange-county` still shows `$650,000` scenario (slice 2+4)
- `/luxury-markets/ultra-luxury-estates-mortgage-broker` still returns 410 (slice 2+4 middleware)

### Gate 5 — production post-deploy

- `curl` each of the 10 URLs → 200
- `curl` each URL and `grep` for the expected H1 city name → confirm rendered
- Each URL present in `public/sitemap.xml` (`grep -c <slug>` ≥ 1)
- Submit sitemap: `npm run gsc:sitemap` and `npm run indexnow:submit` both exit 0

### Post-ship monitoring (out-of-band, not in this spec's gates)

- GSC Coverage for the 10 URLs should move from "Discovered — not indexed" to "Submitted and indexed" within 14 days
- Weekly check of GSC query stream for each city: impression growth on `{city} mortgage broker`, `{city} HELOC`, `{city} refinance`
- 30 days post-deploy: any city with zero impression growth flagged for rewrite or deprecation in Tier 2 planning

## Rollout

1. **Land template extension + validator + index barrel** — additive, no new pages yet. Template renders new prose section only when `localMarketProse` is present; safe for existing (zero) consumers. (One commit.)
2. **Per-city landing, sequential** — for each of 10 cities: research → draft TS file → present summary to user → user approves → commit. Page file created in the same commit as the data file since the page is trivial. (10 commits, one per city.)
3. **Nearby-cities linking pass** — after all 10 cities exist, add the bottom-of-page linking block with region-aware selection. (One commit.)
4. **Full verification (Gates 1–4 locally)**.
5. **Push; Vercel auto-deploys to production**.
6. **Gate 5 verification**.
7. **Submit sitemap to GSC + IndexNow**.

## Out of Scope (confirmed)

- Tier 2 cities (remaining 30)
- Navigation menu "Areas" submenu
- Nested neighborhood pages (`/areas/spokane/hillyard`)
- Dynamic rate or pricing display per city
- OC-based Tier 1 pages (deferred to Tier 2)
- Newport Beach / Laguna Beach / Beverly Hills / Palo Alto / Atherton / Bellevue waterfront / Newport Coast (permanent do-not-create list)
- New "referral partner" or similar surfaces (slice 6)
