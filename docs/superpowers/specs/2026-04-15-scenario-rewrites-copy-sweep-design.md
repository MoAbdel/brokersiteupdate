# Scenario Rewrites + Site-Wide Luxury Sweep — Design Spec

**Date:** 2026-04-15
**Slice:** Combined slice 2 + slice 4 of the ICP pivot
**Predecessor:** `docs/superpowers/specs/2026-04-14-luxury-teardown-cap-display-design.md` (slice 1, shipped)
**Source requirement:** `C:\Users\haithem\Downloads\website-lead-targeting-fixes.md`
**Status:** Draft, pending user review

## Context

Slice 1 killed 141 luxury URLs, redirected 13, established `lib/loan-caps.ts` as single source of truth, and surfaced caps under H1s on 6 pages. It also swept luxury language on those 6 pages only — per-slice scope.

The rest of the site still contains:

- 579 hits of `luxury|UHNW|ultra-high-net-worth|waterfront specialist|Balboa Island|Lido Isle|Newport Coast` across 40+ files
- 294 dollar-figure hits (`$1M`, `$4M`, etc.) across 40+ files — many are example scenarios framed around $1.2M+ properties, contradicting the $500K–$900K ICP band
- `app/luxury-markets/**` (4 pages) and four Newport Beach neighborhood subpages that are already middleware-410'd or 301'd but still exist as code

This slice addresses all three: canonical example scenarios backed by a new SSOT module, a site-wide luxury-language sweep with explicit taxonomy rules, and cleanup of the dead `.tsx` files.

## Goals

1. Example scenarios across the site use a canonical, cap-aligned set of numbers pulled from one module. A single-line edit updates every consumer.
2. Every page on the site reads as a mid-tier California/Washington broker. Positioning signals for UHNW / waterfront / Newport Beach luxury enclaves are removed from body copy, titles, and meta descriptions.
3. Dead code for pages already 410'd or 301'd is removed from the repo.
4. Verification is grep-assertable — no subjective "looks cleaner" gate.

## Non-Goals

- Pre-qualification widget — slice 5.
- Referral-partner off-ramp UI — slice 6.
- New mid-tier city pages for CA/WA — slice 3 (blocked on GSC service-account 403).
- ICP copy *strengthening* on Non-QM / FHA-to-Conventional / DSCR pages (net-new audience-aligned copy) — deferred to its own slice.
- Calculator default values — left alone; users type their own inputs.
- Schema.org JSON-LD sweep — not in scope unless a luxury string leaks into a rendered `itemListElement`; flagged case-by-case.
- Rate/APR numbers in examples — untouched; only home-value framing changes.

## Canonical Example Scenarios

Per user confirmation on 2026-04-15. HELOC cap stays at $750,000 per slice 1 (source doc's prose said $500K, pseudocode said $750K — slice 1 resolved to $750K).

| Scenario | Fields |
|---|---|
| HELOC | `homeValue: 650_000`, `currentMortgage: 350_000`, `availableEquity: 300_000`, `helocAmount: 150_000` |
| Cash-Out | `homeValue: 800_000`, `currentMortgage: 400_000`, `cashOut: 100_000`, `newLoan: 500_000` |
| DSCR | `propertyValue: 650_000`, `monthlyRent: 4_200`, `loanAmount: 450_000`, `monthlyPITI: 3_400`, `dscrRatio: 1.24` |
| Target home-value band | `{ min: 500_000, max: 900_000 }` |

Invariants (asserted by a validation script):

- `HELOC_EXAMPLE.helocAmount <= LOAN_CAPS.heloc` ($150K ≤ $750K ✓)
- `CASH_OUT_EXAMPLE.newLoan <= LOAN_CAPS.cashOut` ($500K ≤ $3.5M ✓)
- `DSCR_EXAMPLE.loanAmount <= LOAN_CAPS.dscr` ($450K ≤ $2M ✓)
- `DSCR_EXAMPLE.dscrRatio > 1.0` (1.24 > 1.0 ✓)
- All scenario home/property values fall inside `TARGET_HOME_VALUE_BAND`

## Architecture

### Unit A: `lib/example-scenarios.ts` (new SSOT module)

```ts
import { LOAN_CAPS } from '@/lib/loan-caps';

export const HELOC_EXAMPLE = {
  homeValue: 650_000,
  currentMortgage: 350_000,
  availableEquity: 300_000,
  helocAmount: 150_000,
} as const;

export const CASH_OUT_EXAMPLE = {
  homeValue: 800_000,
  currentMortgage: 400_000,
  cashOut: 100_000,
  newLoan: 500_000,
} as const;

export const DSCR_EXAMPLE = {
  propertyValue: 650_000,
  monthlyRent: 4_200,
  loanAmount: 450_000,
  monthlyPITI: 3_400,
  dscrRatio: 1.24,
} as const;

export const TARGET_HOME_VALUE_BAND = {
  min: 500_000,
  max: 900_000,
} as const;

export type ScenarioKey = 'heloc' | 'cashOut' | 'dscr';
```

### Unit B: `components/ScenarioExample.tsx` (new component)

- Props: `{ scenario: ScenarioKey; heading?: string; className?: string }`
- Imports from `@/lib/example-scenarios` — authors never restate numbers
- Renders a styled labeled-row block:
  - HELOC: Home Value · Current Mortgage · Available Equity · HELOC Amount
  - Cash-Out: Home Value · Current Mortgage · Cash-Out Amount · New Loan
  - DSCR: Property Value · Monthly Rent · Loan Amount · Monthly PITI · DSCR Ratio
- Dollar formatting via `Intl.NumberFormat` (`$650,000`, no decimals)
- DSCR ratio rendered as `1.24` (2 decimals, no dollar)
- Includes a small "Illustrative example — not a rate quote" disclaimer line

### Consumers (slice 2 deliverable)

Confirmed by grep:

- `app/heloc-orange-county/page.tsx` → `<ScenarioExample scenario="heloc" />`
- `app/cash-out-refinance/page.tsx` → `<ScenarioExample scenario="cashOut" />`
- `app/home-equity-guide/page.tsx` → `<ScenarioExample scenario="heloc" />`
- `app/guides/orange-county-refinancing-guide/page.tsx` → both HELOC + Cash-Out blocks
- `app/heloan-orange-county/page.tsx` → `<ScenarioExample scenario="heloc" />`
- `app/loan-programs/dscr-investment-loans/page.tsx` → `<ScenarioExample scenario="dscr" />`

Final list finalized during the plan's candidate-review step — a page with a materially different *kind* of example (e.g., a purchase-down-payment scenario) is not forced into this component.

## Luxury Language Sweep — Taxonomy Rules

### Hard-ban tokens (grep returns zero across `app/`, `components/`, `content/`, `lib/`)

Case-insensitive:

- `UHNW`, `ultra-high-net-worth`, `ultra-luxury`
- `waterfront specialist`, `luxury waterfront`, `luxury specialist`
- Dollar figures used as positioning: `\$(4|5|6|7|8|9|10|12|15)M\b` and their long forms (`\$4,000,000`, `\$10,000,000`, etc.) — calculator input defaults and conforming-limit references are the only allowed exceptions

### Signal neighborhoods

`Balboa Island`, `Lido Isle`, `Newport Coast`:

- Removed where they frame the broker's specialty
- Kept where they're pure geographic reference (e.g., an unbulleted list of neighborhoods in Newport Beach)
- Always removed from `<title>` / `<meta description>` strings on edited pages (metas are positioning by nature)

### Allowed — descriptive uses

`luxury` as a feature adjective describing an amenity or finish ("luxury finishes", "luxury amenities" in a mid-tier condo complex) is kept. This is the only allowed use of the word `luxury` site-wide after the sweep.

### Process

1. Scripted grep produces a candidate CSV: `{ file, line, context (±1 line), category_guess }`
2. Categories: `auto-rewrite`, `context-dependent`, `already-ok`
3. `auto-rewrite` hits get a suggested substitution column in the CSV
4. User reviews the CSV; `context-dependent` and any disputed `auto-rewrite` rows are resolved inline before edits begin
5. Edits execute; Gate 2 grep assertions re-run until clean

No blind find/replace. The CSV is the artifact the user approves before any file is modified.

## Meta / Title Sweep

Scoped to pages already being edited in this slice for body copy. For each such page:

**Targets in `metadata` or `generateMetadata` exports:**
- `title`, `description`
- `openGraph.title`, `openGraph.description`
- `twitter.title`, `twitter.description`

**Rewrite rules:**
- Luxury-positioning phrasing → mid-tier framing (same taxonomy as body sweep)
- `$4M+` positioning → cap-aligned framing (`up to $3.5M`)
- Three signal-neighborhoods in metas → removed

**Length guardrails:**
- `title`: ≤60 characters
- `description`: 140–160 characters
- Each rewrite measured before commit; over-length lines flagged

**Out of scope this slice:**
- `app/layout.tsx` default metadata (audited once; if already clean, skipped)
- Metas on pages not otherwise being edited (deferred to a later sweep)

## Dead-Code Deletion

### Correction vs. slice 1 scope

Verification on 2026-04-15 found that all eight pages listed below return HTTP 200 on prod. They are *not* in slice 1's `url-dispositions.csv` — that CSV was GSC-driven, so pages with zero 90-day traffic were overlooked. These are live luxury pages, not dead code.

Per user decision on 2026-04-15, the plan treats them the same way slice 1 treated its 141 gones: append to the disposition CSV as `410`, regenerate `lib/disposition/luxury-urls.ts`, regenerate the sitemap, **then** delete the `.tsx` files. Middleware begins serving 410 for all eight before the files are removed, so there is no window where the files are gone but a request still reaches Next's router.

### URLs to add to disposition CSV as HTTP 410

All pure-luxury positioning, zero GSC traffic, no expected referral value:

- `/luxury-markets`
- `/luxury-markets/waterfront-homes-mortgage-broker`
- `/luxury-markets/ultra-luxury-estates-mortgage-broker`
- `/luxury-markets/golf-course-homes-mortgage-broker`
- `/areas/newport-beach-neighborhoods/balboa-island-mortgage-broker`
- `/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker`
- `/areas/newport-beach-neighborhoods/newport-coast-mortgage-broker`
- `/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker`

The CSV rows use the same column shape as slice 1's rows (`url,clicks,impressions,disposition,redirect_target`). All eight get `disposition=410`, empty `redirect_target`, and `0,0` for clicks/impressions (not in GSC). A `notes` column appended to the whole CSV distinguishes slice-2 additions — e.g., `notes="added-2026-04-15-slice2"` — so future audits can trace provenance.

### Files to delete (after disposition update)

One `.tsx` file per URL above — the path is `app/<url>/page.tsx` with URL segments mapping 1:1 to directories.

### Pre-deletion verification (scripted)

For each candidate path, assert the corresponding URL appears in `lib/disposition/luxury-urls.ts` as either `GONE_410` or a `REDIRECTS.from`. Deletion is halted if any candidate is missing from the disposition module — no file removed without a middleware-serving guarantee.

### Sitemap + Newport Beach parent

- `next-sitemap.config.js` already excludes everything in the CSV's `410` rows; regenerating the sitemap after the disposition regen automatically drops these eight URLs.
- `app/areas/newport-beach-neighborhoods/page.tsx` (parent index) returns 200 on prod and is not in either CSV; it stays live and is swept for luxury language under Section 3 rules.
- `app/areas/newport-beach-mortgage-broker/page.tsx` similarly stays live and is swept only.

## Implementation Surfaces

### New files

- `lib/example-scenarios.ts` — constants + types
- `components/ScenarioExample.tsx` — presentational block
- `scripts/validate-scenarios.mjs` — asserts scenario invariants against `LOAN_CAPS` and `TARGET_HOME_VALUE_BAND`
- `scripts/grep-luxury-candidates.mjs` — emits the review CSV to `docs/superpowers/specs/2026-04-15-scenario-rewrites-copy-sweep/luxury-candidates.csv`
- `scripts/verify-deletion-candidates.mjs` — asserts every deletion path is in `GONE_410` or `REDIRECTS.from` before `git rm`

### Modified files (disposition / sitemap)

- `docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv` — append 8 new 410 rows for pages overlooked by slice 1's GSC-driven scope
- `lib/disposition/luxury-urls.ts` — regenerated by existing `scripts/build-luxury-dispositions.mjs`
- `public/sitemap.xml` — regenerated by `npm run sitemap`; excludes the 8 new 410 URLs

### Modified files (confirmed by grep; final set locked in the plan)

- 6 scenario-consumer pages (see Architecture → Consumers)
- ~30–40 pages with luxury-language hits (exact set from the candidate CSV)
- Metas on whichever of the above also have luxury/dollar-positioning in `metadata` exports

### Deleted files

See Dead-Code Deletion above.

## Testing

No test framework installed — verification uses type-check, lint, build, grep assertions, and browser smoke.

### Gate 1 — structural

- `npm run typecheck` — zero new errors
- `npm run lint` — zero new errors
- `npm run build` — clean build; `next-sitemap` post-hook succeeds
- `node scripts/validate-scenarios.mjs` — all scenario invariants pass

### Gate 2 — sweep assertions

Run against edited files only (the sweep's candidate set, not untouched files):

- `grep -riE "UHNW|ultra-high-net-worth|ultra-luxury" <edited>` → 0 hits
- `grep -riE "waterfront specialist|luxury waterfront|luxury specialist" <edited>` → 0 hits
- `grep -rE "\\\$(4|5|6|7|8|9|10|12|15)M\\b" <edited>` → 0 hits in body or metadata (calculator input defaults and conforming-limit facts are excluded)
- `grep -rE "Balboa Island|Lido Isle|Newport Coast" <edited> | grep -iE "title|description|metadata"` → 0 hits

### Gate 3 — dead-code deletion

- `node scripts/verify-deletion-candidates.mjs` — every candidate is in disposition module; exits 0
- After deletion: `npm run build` passes
- `curl -sI http://localhost:3000/luxury-markets/ultra-luxury-estates-mortgage-broker` → `410`
- `curl -sI http://localhost:3000/areas/newport-beach-neighborhoods/balboa-island-mortgage-broker` → `410` or `301` (per CSV)

### Gate 4 — visual smoke

Dev server at `http://localhost:3000`, verify at 1440px and 375px:

- `/heloc-orange-county` — `<ScenarioExample>` renders beneath the cap subheadline
- `/cash-out-refinance` — same
- `/loan-programs/dscr-investment-loans` — same
- `/home-equity-guide`, `/guides/orange-county-refinancing-guide` — scenario block renders mid-article
- `/heloan-orange-county` — same

### Gate 5 — production post-deploy

- `curl -s https://www.mothebroker.com/heloc-orange-county | grep -c '\$650,000'` ≥ 1
- Random 5 deleted URLs still return `410` or `301` (per CSV)
- Spot-check 3 rendered pages for stray luxury strings (no match)

## Rollout

1. Land the SSOT module + component as a safe, additive commit — no URL changes, no copy changes
2. Land scenario-consumer page updates in one commit — swap to `<ScenarioExample>`
3. Append 8 rows to the disposition CSV; regenerate `lib/disposition/luxury-urls.ts`; regenerate sitemap; commit as a single atomic change so the middleware serves 410 for the new URLs before the files vanish
4. Delete the 8 `.tsx` files as a separate commit (pre-verified via script)
5. Run the luxury-candidate script; user approves the CSV
6. Land the body-copy sweep as a single atomic commit (all files from the approved CSV)
7. Land the meta/title sweep as a separate commit (easier to audit in `git diff`)
8. Verify all 5 gates locally
9. Push; Vercel auto-deploys to production
10. Post-deploy verification (Gate 5)
11. Submit sitemap to GSC + IndexNow (existing scripts)

## Open Items Before Spec Approval

1. User reviews this spec
2. User reviews the generated luxury-candidate CSV when produced in step 3 above — that gate lives in the plan, not in this spec
