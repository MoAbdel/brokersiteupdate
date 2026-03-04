# 2026-02-26 Validation Pass (Sitemap + Build)

## Plan

- [x] Run fresh sitemap generation (`npm run sitemap`) and confirm it completes cleanly.
- [x] Run production build validation (`npx next build`) and confirm success.
- [x] Produce a concise GSC validation checklist based on the current fixes.

## Review

- `npm run sitemap` completed successfully and regenerated sitemap artifacts from current route + redirect state.
- `npx next build` completed successfully (compiled, type/lint checks, static generation, and final optimization all passed).
- Re-ran GSC URL reconciliation against `reports/gsc-performance-20251124_20260222.json`; result: `313` total paths, `0` unresolved.

---

# 2026-02-26 GSC Stabilization Patch Set C

## Plan

- [x] Reconcile latest GSC page list against current route + redirect maps and isolate unresolved high-signal legacy paths.
- [x] Add explicit legacy redirects for unresolved GSC paths that now map to canonical content.
- [x] Verify with `npm run typecheck` and re-run route/redirect reconciliation script.

## Review

- Reconciled 313 unique page URLs from `reports/gsc-performance-20251124_20260222.json` against current app routes plus redirect sources in `vercel.json` and `middleware.ts`.
- Added explicit legacy redirects in `middleware.ts` for two unresolved high-signal paths:
  - `/blog/reverse-mortgage-california-washington-pillar-2026` → `/blog/reverse-mortgage-complete-guide-2026`
  - `/guides/fha-loans-orange-county-complete-guide` → `/blog/fha-loans-orange-county-2026`
- Re-ran reconciliation script; unresolved path count is now `0` (dynamic tools routes treated as valid route patterns).
- Verification passed: `npm run typecheck`.

---

# 2026-02-26 GSC Stabilization Patch Set B

## Plan

- [x] Remove redirect-source blog slugs from `/guides` listing output so Google stops discovering high-volume redirect URLs from that hub.
- [x] Fix remaining redirect-source slug reference in `/blog` index page.
- [x] Normalize remaining non-www canonical/schema URLs in app pages.
- [x] Remove legal-page `noindex` settings so privacy/terms can be indexed.
- [x] Add malformed path redirect for `/&` to reduce one recurring 404 example.
- [x] Rebuild sitemap + run type checks.

## Review

- `app/guides/page.tsx` now derives redirect-source blog routes from `vercel.json` + `middleware.ts` and filters those posts out of guide/category/pagination output.
- `app/blog/page.tsx` now links to canonical slug `wholesale-vs-retail-mortgage-complete-2026`.
- All remaining `https://mothebroker.com` references in app content were normalized to `https://www.mothebroker.com` (`app/blog/home-equity-south-sound-affluent-2026/page.tsx`).
- Removed `noindex` robots metadata from legal pages (`app/privacy-policy/page.tsx`, `app/terms-of-service/page.tsx`).
- Added explicit malformed path redirect `/& -> /` in `vercel.json`.
- Verification passed: `npm run typecheck`, `npm run sitemap`, `npx next build`, and redirect-source sitemap audit (0 redirect-source paths present).

---

# 2026-02-26 GSC Stabilization Patch Set A

## Plan

- [x] Add `noindex,follow` handling for `/guides` query variants to reduce duplicate indexing states.
- [x] Fix middleware `/articles/*` redirect ordering so specific mappings run before catch-all behavior.
- [x] Exclude redirect-source routes from sitemap generation to reduce "Page with redirect" churn.
- [x] Normalize tool schema host URLs to `https://www.mothebroker.com`.
- [x] Add missing redirect for `/blog/heloc-vs-cash-out-refinance-california-homeowners-2026`.
- [x] Regenerate sitemap and verify via `npm run typecheck`.

## Review

- `/guides` metadata now supports query-aware `noindex,follow` handling (`app/guides/page.tsx`) while retaining canonical `/guides`.
- Middleware now noindexes `/guides` query URLs at header level and applies specific `/articles/*` mappings before catch-all routing (`middleware.ts`).
- Added redirect mapping for `/blog/heloc-vs-cash-out-refinance-california-homeowners-2026` to `/blog/heloc-vs-cash-out-refinance-2026` (`middleware.ts`).
- `next-sitemap.config.js` now auto-excludes exact redirect-source routes derived from `vercel.json` + `middleware.ts` from both transform output and additional paths.
- Tool JSON-LD schema URLs now use `https://www.mothebroker.com` consistently (`components/tools/ToolPageLayout.tsx`).
- Regenerated sitemap (`npm run sitemap`) and passed TypeScript verification (`npm run typecheck`).

---

# 2026-02-23 Canonical + Redirect Hygiene Batch

## Plan

- [x] Audit canonical URL alignment for key route families (`/guides`, `/blog`, `/tools`, `/areas`) and fix mismatches.
- [x] Prune conflicting/redundant redirects in `vercel.json` where source paths now have canonical live routes.
- [x] Replace remaining redirect-source internal links in app/lib surfaces.
- [x] Verify via targeted scans and `npm run typecheck`.

## Review

- Canonical/route audit across `/guides`, `/blog`, `/tools`, `/areas` found one intentional mismatch on legacy slug page `app/blog/cash-out-refinance-how-it-works/page.tsx` that is canonicalized/redirected to the 2026 URL via middleware.
- Removed duplicate redirect source entry for `/orange-county-jumbo-loans` in `vercel.json`.
- Updated remaining redirect-source internal links in nav/content surfaces:
  - `lib/navigation-data.ts` (`/areas/costa-mesa-mortgage-rates` → `/areas/costa-mesa-mortgage-broker`, `/zip-codes/92625-corona-del-mar-mortgage-broker` → `/areas/newport-beach-mortgage-broker`, `/blog/wholesale-vs-retail-mortgage-brokers-2026` → `/blog/wholesale-vs-retail-mortgage-complete-2026`).
  - `components/seo/TopicClusterLinks.tsx` + related page links now use `/loan-programs/orange-county-va-loans` instead of redirected `/loan-programs/va-loans`.
- Middleware redirect-source scan now only reports `/articles` string checks in `components/Header.tsx` and `components/navigation/Breadcrumbs.tsx` (intentional pathname handling, not outbound links).
- `vercel.json` parses cleanly and `npm run typecheck` passed.

---

# 2026-02-23 SEO + AI Citation Batch 2

## Plan

- [x] Consolidate sitemap/robots ownership around `next-sitemap.config.js` and remove stale exclusions.
- [x] Replace internal links that point to redirect-source URLs (`/quiz`, `/tools/mortgage-calculator`) with final destinations.
- [x] Remove non-standard/hidden AI SEO artifacts from shared SEO components while preserving valid JSON-LD.
- [x] Regenerate robots/sitemap from config and run `npm run typecheck`.

## Review

- `package.json` now uses `next-sitemap` as the default sitemap generator (`npm run sitemap`) and keeps the prior crawler under `npm run sitemap:crawl-live`.
- `next-sitemap.config.js` now includes `sitemap-news.xml` in robots output and no longer excludes `/guides/summer-2025-market-guide`.
- Regenerated `public/robots.txt` + `public/sitemap.xml`; verified summer guide inclusion and news sitemap reference.
- Repointed internal links from redirect sources to canonical destinations (`/calculator`) in shared/home/blog linking surfaces.
- Removed hidden AI-content blocks and non-standard inline meta tags from shared SEO components, retaining JSON-LD schema output.
- `npm run typecheck` passed.

---

# 2026-02-23 SEO Consistency Remediation (Bing + AI Citation)

## Plan

- [x] Normalize IndexNow key sources so API + submission script publish the same key.
- [x] Remove unstable "today" freshness dates from shared AI SEO component to prevent churny structured data.
- [x] Align local schema contact/address constants with canonical site schema entities.
- [x] Fix summer guide canonical/schema/internal-link URL mismatch to the actual route path.
- [x] Remove conflicting Vercel redirect that forced `/tools` to `/calculator`.
- [x] Verify with targeted checks (`npm run typecheck`) and capture results.

## Review

- `npm run typecheck` passed.
- IndexNow key endpoint now returns env `INDEXNOW_KEY` when set, otherwise the same default key used by the submission script.
- Shared AI SEO component no longer emits hidden `display:none` content blocks or rolling "today" citation/schema dates.
- Enhanced local schema now uses centralized schema constants for broker/company identity and uses consistent Irvine business address data.
- Summer market guide now uses canonical/schema/internal-link URLs matching its actual route path (`/guides/summer-2025-market-guide`).
- Removed the `/tools -> /calculator` redirect in `vercel.json` so the actual tools hub route can be crawled/indexed directly.

---

# Phase 3: Programmatic Geo-Tooling — Implementation Plan

## Goal
Build a hyper-local calculator engine that programmatically generates 1,000+ unique pages with real mathematical utility, targeting MoFu long-tail and voice queries across every county/major city in CA and WA.

**Target URL**: `mothebroker.com/tools/cash-out-limit-calculator/ca/orange-county/`

---

## Architecture Overview

### Data Layer: `lib/geo-data/`
A static county/city database (JSON + TypeScript types) containing:
- **97 counties** (58 CA + 39 WA)
- **~200 major cities** (top cities by population per county)
- Per-record fields: conforming loan limit, jumbo threshold, median home price, 5-yr appreciation rate, avg property tax rate, avg home age, state-specific rules

Data sources (public, no API key needed):
- FHFA 2026 conforming loan limits (published per county)
- Census/ACS median home values & property tax rates
- Zillow ZHVI public data for appreciation trends

### Route Structure: Next.js Dynamic Routes
```
app/tools/
├── page.tsx                              ← Tools hub (links all calculators)
├── cash-out-limit-calculator/
│   ├── page.tsx                          ← National landing page
│   ├── [state]/
│   │   ├── page.tsx                      ← State index (list all counties)
│   │   └── [county]/
│   │       ├── page.tsx                  ← County calculator page (THE MONEY PAGE)
│   │       └── [city]/
│   │           └── page.tsx              ← City-specific calculator page
├── dscr-rent-analyzer/
│   ├── page.tsx
│   ├── [state]/
│   │   ├── page.tsx
│   │   └── [county]/
│   │       └── page.tsx                  ← County DSCR page
├── property-tax-estimator/
│   ├── page.tsx
│   ├── [state]/
│   │   ├── page.tsx
│   │   └── [county]/
│   │       └── page.tsx
└── max-heloc-calculator/
    ├── page.tsx
    ├── [state]/
    │   ├── page.tsx
    │   └── [county]/
    │       └── page.tsx
```

**Page count math:**
- 4 calculators × (1 national + 2 state + 97 county + ~200 city) = **~1,200 pages**
- All statically generated at build time via `generateStaticParams()`

### Calculator Component: Shared Interactive Engine
Each county/city page renders the same calculator component pre-filled with local data. User can override inputs. Output:
- **Cash-Out Limit**: Max cash-out at 80% LTV based on county median price + appreciation
- **DSCR Rent Analyzer**: Minimum rent needed for 1.0/1.25 DSCR by county rental market
- **Property Tax Estimator**: Annual tax by purchase price using county-specific rate
- **Max HELOC**: Available credit line based on equity position + county limits

### SEO Layer (per page)
- Unique `<title>` with county/city + calculator name + [2026]
- Unique `<meta description>` with county-specific numbers
- FAQPage schema (3 Qs per page, programmatic from data)
- FinancialProduct schema
- BreadcrumbList schema
- Canonical URLs
- Internal links to: related area pages, blog posts, loan program pages

---

## Implementation Steps

### Step 1: Data Foundation
- [ ] Create `lib/geo-data/types.ts` — TypeScript interfaces for County, City, State
- [ ] Create `lib/geo-data/california.ts` — All 58 CA counties with loan limits, tax rates, median prices
- [ ] Create `lib/geo-data/washington.ts` — All 39 WA counties
- [ ] Create `lib/geo-data/cities.ts` — ~200 major cities mapped to their counties
- [ ] Create `lib/geo-data/index.ts` — Lookup helpers: `getCounty(state, slug)`, `getCitiesByCounty()`, `getAllCounties()`, `getStateData()`
- [ ] Create `lib/geo-data/calculations.ts` — Pure functions: `calcMaxCashOut()`, `calcDSCR()`, `calcPropertyTax()`, `calcMaxHELOC()`

### Step 2: Shared Calculator Components
- [ ] Create `components/tools/CashOutCalculator.tsx` — Interactive form pre-filled with county data, computes max cash-out at 80/85/90% LTV
- [ ] Create `components/tools/DscrRentAnalyzer.tsx` — Rent vs mortgage payment DSCR calculator
- [ ] Create `components/tools/PropertyTaxEstimator.tsx` — Purchase price → annual tax
- [ ] Create `components/tools/MaxHelocCalculator.tsx` — Equity → available HELOC line
- [ ] Create `components/tools/ToolPageLayout.tsx` — Shared layout: breadcrumbs, schema injection, FAQ section, CTA, internal links

### Step 3: Route Pages (Cash-Out Calculator first)
- [ ] Create `app/tools/page.tsx` — Tools hub
- [ ] Create `app/tools/cash-out-limit-calculator/page.tsx` — National landing
- [ ] Create `app/tools/cash-out-limit-calculator/[state]/page.tsx` — State index with `generateStaticParams`
- [ ] Create `app/tools/cash-out-limit-calculator/[state]/[county]/page.tsx` — County calculator with `generateStaticParams`
- [ ] Create `app/tools/cash-out-limit-calculator/[state]/[county]/[city]/page.tsx` — City calculator with `generateStaticParams`

### Step 4: Replicate for Other 3 Calculators
- [ ] DSCR Rent Analyzer routes (copy pattern, swap component + data)
- [ ] Property Tax Estimator routes
- [ ] Max HELOC Calculator routes

### Step 5: SEO & Navigation Integration
- [ ] Add `/tools` to main navigation dropdown (under Resources)
- [ ] Update `public/sitemap.xml` (or switch to dynamic sitemap generation via `app/sitemap.ts`)
- [ ] Add internal links from existing area pages → relevant tool pages
- [ ] Add internal links from existing blog posts → relevant tool pages
- [ ] Update `public/llms.txt` with tool page descriptions

### Step 6: Build Verification
- [ ] Run `npm run build` — verify all ~1,200 pages generate without errors
- [ ] Spot-check 5 county pages for correct data
- [ ] Verify schema markup renders correctly
- [ ] Verify mobile responsiveness
- [ ] Verify internal links resolve

---

## Key Design Decisions

### Why static data (not live API)?
- **Build-time generation** = instant page loads, zero API costs, no rate limits
- Data refresh via a quarterly script that pulls FHFA + Census updates
- "Live" feel achieved by showing "Updated Q1 2026" badge + letting users override inputs
- Avoids API dependency that could break 1,200 pages

### Why `generateStaticParams` (not ISR/SSR)?
- Full static generation = best Core Web Vitals
- County data changes annually (loan limits) or quarterly (prices) — not real-time
- 1,200 static pages is well within Vercel's free tier limits

### Why 4 calculators (not just cash-out)?
- Each calculator targets different intent keywords
- Cash-out → equity extractors, DSCR → investors, Tax → buyers, HELOC → homeowners
- Same data, 4x the pages, 4x the keyword coverage
- Shared components mean minimal incremental effort

### County slug format
- `orange-county` (kebab-case, always includes "-county")
- Maps cleanly to URL: `/tools/cash-out-limit-calculator/ca/orange-county/`
- State uses 2-letter code: `ca`, `wa`

---

## Data Schema (TypeScript)

```typescript
interface GeoState {
  code: string;        // "ca" | "wa"
  name: string;        // "California"
  slug: string;        // "ca"
  counties: County[];
}

interface County {
  name: string;              // "Orange County"
  slug: string;              // "orange-county"
  stateCode: string;         // "ca"
  fipsCode: string;          // "06059"
  conformingLoanLimit: number;  // 1266300 (2026)
  medianHomePrice: number;      // 1150000
  avgPropertyTaxRate: number;   // 0.0073 (0.73%)
  avgAppreciation5yr: number;   // 0.42 (42% over 5 years)
  avgHomeAge: number;           // 35 (years)
  medianRent: number;           // 3200
  population: number;
  cities: City[];
}

interface City {
  name: string;              // "Irvine"
  slug: string;              // "irvine"
  countySlug: string;        // "orange-county"
  stateCode: string;         // "ca"
  medianHomePrice: number;
  avgPropertyTaxRate: number;
  medianRent: number;
  population: number;
}
```

---

## Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| Build time explosion (1,200 pages) | Next.js handles this fine — each page is tiny static HTML |
| Stale data | "Updated Q1 2026" badge + user-overridable inputs |
| Thin content penalty | Each page has unique county data, unique FAQ, unique calculations — not boilerplate |
| Data accuracy | Use official FHFA + Census sources, add disclaimer |

---

## Order of Execution

**Phase 3A** (this session): Steps 1-3 — Data + Components + Cash-Out Calculator routes
**Phase 3B** (next session): Steps 4-6 — Remaining 3 calculators + SEO + verification

Start with Cash-Out Limit Calculator as the template, then replicate the pattern.
