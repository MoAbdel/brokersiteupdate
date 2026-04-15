# Luxury Teardown + Loan Cap Display — Design Spec

**Date:** 2026-04-14
**Slice:** 1 of 5 (ICP Pivot — Website Lead Targeting Fixes)
**Status:** Draft, pending user review

## Context

The site currently signals "luxury / ultra-high-net-worth specialist" on many pages, while the actual lending capacity tops out at upper-middle market. This generates unqualified leads that cannot be closed. The source requirement doc is `C:\Users\haithem\Downloads\website-lead-targeting-fixes.md`.

This spec covers the first slice: stop the lie (teardown of luxury-coded URLs) and make loan caps visible at a glance on product pages (self-qualification filter).

The full ICP pivot has six tracks:

1. **Luxury teardown + cap display** — this spec
2. *(deferred)* Example scenario rewrites across the site
3. *(deferred)* New mid-tier city pages for CA/WA
4. *(deferred)* Site-wide luxury-language sweep beyond the pages touched here
5. *(deferred)* Pre-qualification filter widget on the contact form
6. *(deferred)* Referral-partner off-ramp UI

Tracks 2–5 each get their own spec later; this one stays focused.

## Goals

1. Every URL currently signaling UHNW/luxury intent is either repositioned, redirected to a topical mid-tier equivalent, or cleanly removed with HTTP 410.
2. Every product page surfaces its loan cap at-a-glance under the H1 so users self-qualify before submitting a lead form.
3. Loan caps live in a single source of truth — changing a cap is a one-line edit that propagates everywhere.
4. Future mid-tier city pages (slice 3) have a reusable `ProductLedCityTemplate` available to consume.

## Non-Goals

- Pre-qualification widget, referral off-ramp UI — slice 5.
- New mid-tier city page *content* for CA/WA — slice 3. (The template ships here; cities are populated later.)
- Example scenario rewrites across the site — slice 2. Exception: examples discovered during the copy sweep on a page already being modified get fixed in-place.
- Site-wide luxury-language sweep on untouched pages — slice 4.

## Canonical Loan Caps

Per user confirmation on 2026-04-14:

| Product | Maximum |
|---|---|
| Conventional | $3,500,000 |
| Jumbo | $3,500,000 |
| HELOC | $750,000 |
| DSCR (investment) | $2,000,000 |
| Cash-Out Refinance | $3,500,000 |

Note: the source requirement doc says HELOC $500,000 in the prose and $750,000 in its pre-qual filter pseudocode. User confirmed **$750,000** as canonical; the spec's prose was a typo.

## Architecture

### Unit A: `LoanCapSubheadline` component (reusable)

- Presentational, single-responsibility component
- Props: `{ productLabel: string; maxAmount: number; regions: string[] }`
- Renders directly below the page H1 in the hero area
- Example output: *"HELOCs up to $750,000 · California & Washington"*
- Styling: small subhead, not a badge/pill. Non-intrusive inline treatment per user decision (§cap display treatment, option A).
- Consumers (this slice): homepage, HELOC page, DSCR page, Cash-Out Refinance page, Conventional/Jumbo page.

### Unit B: `ProductLedCityTemplate` (new template, zero consumers this slice)

- Replaces neighborhood-led layout for any future city page in the "rewrite" disposition bucket
- Structure:
  1. Hero — H1 `{City} Mortgage Broker` + `LoanCapSubheadline` (product="Jumbo") + CTA
  2. Product grid — HELOC, Cash-Out Refi, Conventional, DSCR — each card shows the cap
  3. Mid-tier neighborhood section (data-driven per city)
  4. FAQ (product-oriented)
  5. Contact CTA
- Per-city data shape: `{ citySlug, state, midTierNeighborhoods[], typicalHomeValueRange, faqOverrides[] }`
- Default cap set pulled from `lib/loan-caps.ts` — authors do not restate caps
- Built in this slice, consumed in slice 3

### Single source of truth: `lib/loan-caps.ts`

```ts
export const LOAN_CAPS = {
  conventional: 3_500_000,
  jumbo: 3_500_000,
  heloc: 750_000,
  dscr: 2_000_000,
  cashOut: 3_500_000,
} as const;

export type LoanProduct = keyof typeof LOAN_CAPS;

export const formatCap = (product: LoanProduct): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(LOAN_CAPS[product]);
```

## Disposition Decisions

### Data Source

Fresh GSC export pulled 2026-04-14, 90-day window (2026-01-13 → 2026-04-14), supplied by the user (`C:\Users\haithem\Downloads\New folder\Pages.csv`). The GSC service-account credential for `sc-domain:mothebroker.com` is currently returning 403; that needs to be restored before future passes, but the user-supplied export is authoritative for this spec.

### Luxury-URL Match Patterns

A URL is considered "luxury-coded" if its path contains any of:

`luxury-markets`, `newport-beach`, `heloc-specialist`, `laguna-beach`, `san-francisco`, `bay-area`, `silicon-valley`, `san-jose`, `bellevue`, `seattle`, `peninsula`, `ultra-luxury`, `eastside`, `marin-county`, `waterfront-homes`, `tech-corridor`, `premium-`, `north-sound`, `south-sound`, `king-county`, `palos-verdes`, `coastal-sd-inland`, `santa-clara-county`, `san-mateo-county`, `san-francisco-county`

Result: **154 URLs matched**, representing 19 clicks and 17,502 impressions over 90 days.

### Cut Rule

| Condition (90-day → monthly) | Bucket |
|---|---|
| ≥30 clicks/90d (≥10/mo) AND top queries are ICP-compatible | Rewrite with `ProductLedCityTemplate` |
| ≥30 clicks/90d AND top queries are luxury-intent | Redirect to topical hub |
| <30 clicks/90d AND >300 impressions/90d (>100/mo) | Redirect |
| <30 clicks/90d AND <300 impressions/90d | HTTP 410 Gone |
| Not in GSC at all | HTTP 410 Gone |

### Bucket Counts

| Bucket | Count |
|---|---|
| Rewrite | 0 |
| Redirect | 13 |
| 410 Gone | 141 |

No URL in the current footprint earns a rewrite under the rule. The template is built for slice 3 consumers.

### Redirect Mapping Rule

Topical mapping by URL semantics:

- `/tools/property-tax-estimator/{state}/{out-of-ICP-county}[/{city}]` → `/tools/property-tax-estimator` (hub)
- `/tools/property-tax-estimator/ca/orange-county/newport-beach` → **keep as-is** (in-region; tool still serves valid users). This URL is *not* redirected despite matching luxury patterns.
- WA-luxury blog posts (king-county, seattle, eastside, sound, bellevue) → `/areas/washington`
- CA-luxury blog posts (silicon-valley, bay-area, san-francisco, peninsula, marin, palos-verdes, santa-clara) → `/areas/california`
- Generic home-equity / heloc luxury posts → `/heloc-orange-county`
- Reverse-mortgage luxury posts → `/reverse-mortgages`
- Wholesale-broker luxury posts → `/wholesale-mortgage-broker-california`
- `/luxury-markets/*` subpages → `/loan-programs`

Full per-URL disposition table: `docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv`.

### Escape Hatch

Before implementation, the user reviews the per-URL CSV and can flag any URL for override — e.g., preserve a specific luxury post for a referral partnership, or promote a zero-click URL from 410 to redirect because it matches a brand search. Overrides are noted inline in the CSV as a `manual_override` column.

## Implementation Surfaces

### New files

- `lib/loan-caps.ts` — constants + formatter
- `components/LoanCapSubheadline.tsx`
- `components/templates/ProductLedCityTemplate.tsx`
- `lib/city-page-data/` — directory; empty this slice
- `lib/disposition/luxury-urls.ts` — exports `REDIRECTS: Array<{ from: string; to: string }>` and `GONE_410: string[]`, generated from the approved CSV
- `middleware.ts` — if no middleware exists; otherwise extend. Returns `new NextResponse(null, { status: 410 })` for any path in `GONE_410`

### Modified files

- `app/page.tsx` / `components/home/HeroSection.tsx` — add `<LoanCapSubheadline productLabel="Jumbo Loans" maxAmount={LOAN_CAPS.jumbo} regions={['California','Washington']} />` under H1
- HELOC page hero — `productLabel="HELOCs"`, `maxAmount={LOAN_CAPS.heloc}`
- DSCR page hero — `productLabel="DSCR Investment Loans"`, `maxAmount={LOAN_CAPS.dscr}`
- Cash-Out Refi page hero — `productLabel="Cash-Out Refinance"`, `maxAmount={LOAN_CAPS.cashOut}`
- Conventional/Jumbo page hero — `productLabel="Jumbo Loans"`, `maxAmount={LOAN_CAPS.jumbo}`
- `next.config.js` — add the 13 entries from `REDIRECTS` to the `redirects()` async function, `permanent: true`
- `next-sitemap.config.js` — exclude all 154 luxury URLs from future sitemap generation so we don't resubmit killed pages

### Copy sweep (scoped to pages being modified)

Grep targets: `luxury`, `ultra-high-net-worth`, `UHNW`, `waterfront specialist`, `$4M`, `$10M`, `$15M`, `Balboa Island`, `Lido Isle`, `Newport Coast`.

Any match on a page that is *not* being 410'd or redirected (i.e., the 5 product pages + homepage being modified for caps) gets rewritten inline during this slice. Matches on pages already slated for 410/redirect are ignored (the page is going away).

Matches on pages *not* touched by this slice (e.g., About, Contact, other city pages) are deferred to slice 4.

## Testing

- **Unit** — `loan-caps.ts` values match the canonical cap table above; `formatCap` renders expected strings
- **Component** — `LoanCapSubheadline` renders each product, formats dollars with `$` and commas, renders region list correctly
- **Integration** — middleware returns 410 with no body for a representative sample of `GONE_410` URLs; returns 200 for unrelated paths
- **Redirects** — automated `curl -I` over the 13 redirect pairs verifies 301 + correct `Location` header
- **Manual visual** — 5 product pages + homepage show the cap subheadline visible in the hero on mobile (375px) and desktop (1440px) without scrolling
- **Sitemap** — generated `sitemap.xml` does not contain any of the 154 luxury URLs

## Rollout

1. Land `lib/loan-caps.ts` + `LoanCapSubheadline` + page hero updates — safe, additive, no URL changes
2. Land `ProductLedCityTemplate` — unused, dormant until slice 3
3. Land `lib/disposition/luxury-urls.ts` + middleware + `next.config` redirects + sitemap exclusions as a single atomic change — URL dispositions all take effect together
4. Submit updated sitemap to GSC + IndexNow (existing `scripts/submit-*.mjs` tools)
5. Monitor GSC Coverage for ~14 days: confirm 410'd URLs drop out of index and redirected URLs show "Page with redirect" status

## Open Items Before Spec Approval

1. User to review the per-URL disposition CSV (`docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv`) and flag any overrides
2. GSC service-account 403 on `sc-domain:mothebroker.com` needs to be resolved before the next data-driven slice — out of scope for *this* implementation but tracked as a prerequisite for slice 3 validation
