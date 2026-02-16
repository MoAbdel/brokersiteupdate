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
