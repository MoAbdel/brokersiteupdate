# Scenario Rewrites + Luxury Sweep Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up canonical example scenarios (HELOC / Cash-Out / DSCR) backed by a single-source-of-truth module, delete 8 overlooked live luxury pages via the existing middleware-410 pipeline, and execute a site-wide luxury-language sweep (body copy + metas) under explicit taxonomy rules.

**Architecture:** Add `lib/example-scenarios.ts` as the canonical scenario module and `<ScenarioExample>` as its only consumer component. Wire the component into 6 product/guide pages. Append 8 URLs to the existing `docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv` as `410`, regenerate `lib/disposition/luxury-urls.ts` via the existing generator, regenerate the sitemap, and only then `git rm` the 8 `.tsx` files — so middleware serves 410 before the files disappear. Finally, a grep-driven candidate CSV drives the body/meta sweep with per-hit user approval.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind, next-sitemap, `next/server` middleware. No test framework installed — verification uses `npm run lint`, `npm run typecheck`, `npm run build`, scripted grep assertions, and `curl` / browser smoke.

**Spec:** `docs/superpowers/specs/2026-04-15-scenario-rewrites-copy-sweep-design.md`
**Slice 1 predecessor:** `docs/superpowers/specs/2026-04-14-luxury-teardown-cap-display-design.md`
**Slice 1 disposition CSV (extended here):** `docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv`

---

## Pre-flight

- [ ] **Step 1: Confirm working tree is clean**

Run: `git status`
Expected: clean working tree on `main`. If dirty, stash or commit before continuing.

- [ ] **Step 2: Confirm slice 1 is live in prod**

Run:
```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.mothebroker.com/heloc-orange-county
curl -s https://www.mothebroker.com/heloc-orange-county | grep -c '\$750,000'
```
Expected: `200` and `>=1`. This verifies the slice 1 SSOT pattern is already rendering; slice 2 builds on it.

- [ ] **Step 3: Confirm the 8 deletion candidates are still live (the reason we found this gap)**

Run:
```bash
for p in /luxury-markets /luxury-markets/waterfront-homes-mortgage-broker /luxury-markets/ultra-luxury-estates-mortgage-broker /luxury-markets/golf-course-homes-mortgage-broker /areas/newport-beach-neighborhoods/balboa-island-mortgage-broker /areas/newport-beach-neighborhoods/lido-isle-mortgage-broker /areas/newport-beach-neighborhoods/newport-coast-mortgage-broker /areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "https://www.mothebroker.com${p}")
  echo "$code $p"
done
```
Expected: 8 lines of `200 <path>`. If any returns `410` already, that URL is in the slice-1 module and can be skipped in Task 9.

---

## Task 1: Canonical scenario module

**Files:**
- Create: `lib/example-scenarios.ts`
- Create: `scripts/validate-scenarios.mjs`

- [ ] **Step 1: Create `lib/example-scenarios.ts`**

```ts
/**
 * Canonical illustrative loan scenarios. Single source of truth for every
 * example rendered on product/guide pages. Update values here and every
 * consumer picks them up.
 *
 * All values must satisfy the invariants in scripts/validate-scenarios.mjs.
 */
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

// Compile-time sanity: scenarios cannot exceed product caps.
// (Runtime assertions live in scripts/validate-scenarios.mjs.)
const _helocGuard: true = (HELOC_EXAMPLE.helocAmount <= LOAN_CAPS.heloc) as true;
const _cashOutGuard: true = (CASH_OUT_EXAMPLE.newLoan <= LOAN_CAPS.cashOut) as true;
const _dscrGuard: true = (DSCR_EXAMPLE.loanAmount <= LOAN_CAPS.dscr) as true;
void _helocGuard; void _cashOutGuard; void _dscrGuard;
```

- [ ] **Step 2: Create `scripts/validate-scenarios.mjs`**

```js
#!/usr/bin/env node
/**
 * Runtime assertion script. No test framework installed — this runs as part
 * of pre-commit verification to catch future scenario/cap drift.
 *
 * Node can't import .ts directly, so this script parses the scenario module
 * as text and extracts the numeric literals, then asserts the invariants.
 */
import fs from 'node:fs';

const src = fs.readFileSync('lib/example-scenarios.ts', 'utf8');
const caps = fs.readFileSync('lib/loan-caps.ts', 'utf8');

const num = (text, key) => {
  const re = new RegExp(`${key}\\s*:\\s*([\\d_]+)`, 'm');
  const m = text.match(re);
  if (!m) throw new Error(`Missing key "${key}" in source`);
  return Number(m[1].replace(/_/g, ''));
};

const helocCap = num(caps, 'heloc');
const cashOutCap = num(caps, 'cashOut');
const dscrCap = num(caps, 'dscr');

const helocAmount = num(src, 'helocAmount');
const cashOutNewLoan = num(src, 'newLoan');
const dscrLoan = num(src, 'loanAmount');
const helocHome = num(src, 'homeValue');
const cashOutHome = num(src, 'homeValue');
const dscrProp = num(src, 'propertyValue');
const bandMin = num(src, 'min');
const bandMax = num(src, 'max');
const dscrRatio = Number(
  src.match(/dscrRatio\s*:\s*([\d.]+)/)[1]
);

const checks = [
  ['HELOC within cap', helocAmount <= helocCap, `${helocAmount} <= ${helocCap}`],
  ['Cash-Out within cap', cashOutNewLoan <= cashOutCap, `${cashOutNewLoan} <= ${cashOutCap}`],
  ['DSCR within cap', dscrLoan <= dscrCap, `${dscrLoan} <= ${dscrCap}`],
  ['DSCR ratio > 1.0', dscrRatio > 1.0, `${dscrRatio} > 1.0`],
  ['HELOC home in band', helocHome >= bandMin && helocHome <= bandMax, `${helocHome} in [${bandMin},${bandMax}]`],
  ['Cash-Out home in band', cashOutHome >= bandMin && cashOutHome <= bandMax, `${cashOutHome} in [${bandMin},${bandMax}]`],
  ['DSCR property in band', dscrProp >= bandMin && dscrProp <= bandMax, `${dscrProp} in [${bandMin},${bandMax}]`],
];

let failed = 0;
for (const [label, ok, detail] of checks) {
  if (!ok) {
    console.error(`FAIL: ${label} — ${detail}`);
    failed++;
  } else {
    console.log(`PASS: ${label} (${detail})`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} failure(s)`);
  process.exit(1);
}
console.log('\nexample-scenarios: all invariants hold');
```

- [ ] **Step 3: Run the validator**

Run: `node scripts/validate-scenarios.mjs`
Expected: all 7 PASS lines, no FAIL, exit 0.

- [ ] **Step 4: Run typecheck**

Run: `npm run typecheck`
Expected: zero new errors.

- [ ] **Step 5: Commit**

```bash
git add lib/example-scenarios.ts scripts/validate-scenarios.mjs
git commit -m "feat: canonical example-scenarios module + validator"
```

---

## Task 2: ScenarioExample component

**Files:**
- Create: `components/ScenarioExample.tsx`

- [ ] **Step 1: Create the component**

```tsx
import {
  HELOC_EXAMPLE,
  CASH_OUT_EXAMPLE,
  DSCR_EXAMPLE,
  type ScenarioKey,
} from '@/lib/example-scenarios';

interface ScenarioExampleProps {
  scenario: ScenarioKey;
  heading?: string;
  className?: string;
}

const dollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

interface Row { label: string; value: string; }

function rowsFor(scenario: ScenarioKey): Row[] {
  switch (scenario) {
    case 'heloc':
      return [
        { label: 'Home Value', value: dollar.format(HELOC_EXAMPLE.homeValue) },
        { label: 'Current Mortgage', value: dollar.format(HELOC_EXAMPLE.currentMortgage) },
        { label: 'Available Equity', value: dollar.format(HELOC_EXAMPLE.availableEquity) },
        { label: 'HELOC Amount', value: dollar.format(HELOC_EXAMPLE.helocAmount) },
      ];
    case 'cashOut':
      return [
        { label: 'Home Value', value: dollar.format(CASH_OUT_EXAMPLE.homeValue) },
        { label: 'Current Mortgage', value: dollar.format(CASH_OUT_EXAMPLE.currentMortgage) },
        { label: 'Cash-Out Amount', value: dollar.format(CASH_OUT_EXAMPLE.cashOut) },
        { label: 'New Loan', value: dollar.format(CASH_OUT_EXAMPLE.newLoan) },
      ];
    case 'dscr':
      return [
        { label: 'Property Value', value: dollar.format(DSCR_EXAMPLE.propertyValue) },
        { label: 'Monthly Rent', value: dollar.format(DSCR_EXAMPLE.monthlyRent) },
        { label: 'Loan Amount', value: dollar.format(DSCR_EXAMPLE.loanAmount) },
        { label: 'Monthly PITI', value: dollar.format(DSCR_EXAMPLE.monthlyPITI) },
        { label: 'DSCR Ratio', value: DSCR_EXAMPLE.dscrRatio.toFixed(2) },
      ];
  }
}

const DEFAULT_HEADING: Record<ScenarioKey, string> = {
  heloc: 'HELOC Example',
  cashOut: 'Cash-Out Refinance Example',
  dscr: 'DSCR Investment Loan Example',
};

export default function ScenarioExample({
  scenario,
  heading,
  className = '',
}: ScenarioExampleProps) {
  const rows = rowsFor(scenario);
  const title = heading ?? DEFAULT_HEADING[scenario];

  return (
    <div
      className={`border border-slate-200 rounded-lg p-6 bg-white ${className}`}
      data-testid={`scenario-${scenario}`}
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <dl className="grid grid-cols-2 gap-y-2">
        {rows.map((r) => (
          <div key={r.label} className="contents">
            <dt className="text-slate-600">{r.label}</dt>
            <dd className="text-right font-medium text-slate-900">{r.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-xs text-slate-500">
        Illustrative example — not a rate quote.
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npm run typecheck`
Expected: zero new errors.

- [ ] **Step 3: Commit**

```bash
git add components/ScenarioExample.tsx
git commit -m "feat: ScenarioExample component"
```

---

## Task 3: Wire ScenarioExample into HELOC page

**Files:**
- Modify: `app/heloc-orange-county/page.tsx`

- [ ] **Step 1: Read the file and find any existing structured example block**

Run:
```bash
grep -nE "Home Value|HELOC Amount|Example|\\\$[0-9]+,[0-9]{3}" app/heloc-orange-county/page.tsx | head -20
```

Record line ranges of any existing "HELOC Example" / "Home Value" table or component. If one exists, it will be replaced in Step 3. If none exists, the new component is inserted directly below the existing `<LoanCapSubheadline>` from slice 1.

- [ ] **Step 2: Add the import**

At the top of `app/heloc-orange-county/page.tsx`, next to other component imports:

```tsx
import ScenarioExample from '@/components/ScenarioExample';
```

- [ ] **Step 3: Insert or replace the example block**

If an existing example block was found in Step 1, delete those lines. Then — either at the same location, or immediately below the `<LoanCapSubheadline productLabel="HELOCs" ... />` element installed in slice 1 — insert:

```tsx
<ScenarioExample scenario="heloc" className="mt-8 max-w-xl" />
```

- [ ] **Step 4: Build and verify visually**

Run: `npm run build && npm run dev`
Open `http://localhost:3000/heloc-orange-county` and confirm the scenario block renders with Home Value $650,000 / Current Mortgage $350,000 / Available Equity $300,000 / HELOC Amount $150,000 and the "Illustrative example — not a rate quote." disclaimer. Confirm it is visible on both 1440px and 375px viewports.

- [ ] **Step 5: Commit**

```bash
git add app/heloc-orange-county/page.tsx
git commit -m "feat(heloc): swap example block to canonical scenario"
```

---

## Task 4: Wire ScenarioExample into HELOAN page

**Files:**
- Modify: `app/heloan-orange-county/page.tsx`

- [ ] **Step 1: Find existing example block**

Run: `grep -nE "Home Value|HELOC Amount|Example|\\\$[0-9]+,[0-9]{3}" app/heloan-orange-county/page.tsx | head -20`

Record line ranges of any existing example block.

- [ ] **Step 2: Add import**

```tsx
import ScenarioExample from '@/components/ScenarioExample';
```

- [ ] **Step 3: Insert or replace the example block**

Delete any existing block located in Step 1. Insert:

```tsx
<ScenarioExample scenario="heloc" className="mt-8 max-w-xl" />
```

(HELOAN shares the HELOC scenario shape — home-equity draw against owned equity.)

- [ ] **Step 4: Visually verify at `/heloan-orange-county`**

Same viewport checks as Task 3, Step 4.

- [ ] **Step 5: Commit**

```bash
git add app/heloan-orange-county/page.tsx
git commit -m "feat(heloan): swap example block to canonical scenario"
```

---

## Task 5: Wire ScenarioExample into home-equity-guide

**Files:**
- Modify: `app/home-equity-guide/page.tsx`

- [ ] **Step 1: Find existing example block**

Run: `grep -nE "Home Value|HELOC Amount|Example|\\\$[0-9]+,[0-9]{3}" app/home-equity-guide/page.tsx | head -20`

- [ ] **Step 2: Add import**

```tsx
import ScenarioExample from '@/components/ScenarioExample';
```

- [ ] **Step 3: Insert or replace**

Delete any existing example block. Insert inline where the guide discusses HELOC math:

```tsx
<ScenarioExample scenario="heloc" className="my-8 max-w-xl" />
```

- [ ] **Step 4: Verify at `/home-equity-guide`**

Scenario block renders mid-article, values match Task 1.

- [ ] **Step 5: Commit**

```bash
git add app/home-equity-guide/page.tsx
git commit -m "feat(home-equity-guide): swap example to canonical scenario"
```

---

## Task 6: Wire ScenarioExample into Cash-Out Refinance page

**Files:**
- Modify: `app/cash-out-refinance/page.tsx`

- [ ] **Step 1: Find existing example block**

Run: `grep -nE "Home Value|Cash-Out|New Loan|Example|\\\$[0-9]+,[0-9]{3}" app/cash-out-refinance/page.tsx | head -20`

- [ ] **Step 2: Add import**

```tsx
import ScenarioExample from '@/components/ScenarioExample';
```

- [ ] **Step 3: Insert or replace**

Delete any existing example block. Insert below the slice-1 `<LoanCapSubheadline>`:

```tsx
<ScenarioExample scenario="cashOut" className="mt-8 max-w-xl" />
```

- [ ] **Step 4: Verify at `/cash-out-refinance`**

Values: Home Value $800,000 / Current Mortgage $400,000 / Cash-Out Amount $100,000 / New Loan $500,000.

- [ ] **Step 5: Commit**

```bash
git add app/cash-out-refinance/page.tsx
git commit -m "feat(cash-out): swap example block to canonical scenario"
```

---

## Task 7: Wire both examples into Refinancing Guide

**Files:**
- Modify: `app/guides/orange-county-refinancing-guide/page.tsx`

- [ ] **Step 1: Find existing example blocks (there may be two — HELOC and Cash-Out)**

Run: `grep -nE "Home Value|Cash-Out|HELOC Amount|Example|\\\$[0-9]+,[0-9]{3}" app/guides/orange-county-refinancing-guide/page.tsx | head -30`

- [ ] **Step 2: Add import**

```tsx
import ScenarioExample from '@/components/ScenarioExample';
```

- [ ] **Step 3: Insert or replace both blocks**

Delete any existing example blocks. Where the guide discusses rate-and-term vs cash-out, insert:

```tsx
<ScenarioExample scenario="heloc" className="my-8 max-w-xl" />
```

And where it discusses cash-out:

```tsx
<ScenarioExample scenario="cashOut" className="my-8 max-w-xl" />
```

- [ ] **Step 4: Verify at `/guides/orange-county-refinancing-guide`**

Both scenario blocks render in their respective article sections.

- [ ] **Step 5: Commit**

```bash
git add app/guides/orange-county-refinancing-guide/page.tsx
git commit -m "feat(refi-guide): swap example blocks to canonical scenarios"
```

---

## Task 8: Wire ScenarioExample into DSCR page

**Files:**
- Modify: `app/loan-programs/dscr-investment-loans/page.tsx`

- [ ] **Step 1: Find existing example block**

Run: `grep -nE "Property Value|Monthly Rent|DSCR|Example|\\\$[0-9]+,[0-9]{3}" app/loan-programs/dscr-investment-loans/page.tsx | head -20`

- [ ] **Step 2: Add import**

```tsx
import ScenarioExample from '@/components/ScenarioExample';
```

- [ ] **Step 3: Insert or replace**

Delete any existing example. Insert below the slice-1 `<LoanCapSubheadline>`:

```tsx
<ScenarioExample scenario="dscr" className="mt-8 max-w-xl" />
```

- [ ] **Step 4: Verify at `/loan-programs/dscr-investment-loans`**

Values: Property Value $650,000 / Monthly Rent $4,200 / Loan Amount $450,000 / Monthly PITI $3,400 / DSCR Ratio 1.24.

- [ ] **Step 5: Commit**

```bash
git add app/loan-programs/dscr-investment-loans/page.tsx
git commit -m "feat(dscr): swap example block to canonical scenario"
```

---

## Task 9: Append 8 overlooked luxury URLs to the disposition CSV

**Files:**
- Modify: `docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv`
- Modify: `lib/disposition/luxury-urls.ts` (regenerated)
- Modify: `public/sitemap.xml` (regenerated)

- [ ] **Step 1: Inspect the CSV header to match the existing column shape**

Run: `head -1 docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv`

Record the column order (expected: `url,clicks,impressions,disposition,redirect_target` based on slice 1's generator; a `notes` column may or may not exist).

- [ ] **Step 2: Append 8 new rows**

Append the following lines to the end of `docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv`. If the CSV's column count does not match the 5 fields below, adjust the row shape to match (e.g., add a trailing empty field for `notes`).

```
/luxury-markets,0,0,410,
/luxury-markets/waterfront-homes-mortgage-broker,0,0,410,
/luxury-markets/ultra-luxury-estates-mortgage-broker,0,0,410,
/luxury-markets/golf-course-homes-mortgage-broker,0,0,410,
/areas/newport-beach-neighborhoods/balboa-island-mortgage-broker,0,0,410,
/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker,0,0,410,
/areas/newport-beach-neighborhoods/newport-coast-mortgage-broker,0,0,410,
/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker,0,0,410,
```

- [ ] **Step 3: Regenerate the disposition module**

Run: `node scripts/build-luxury-dispositions.mjs`
Expected output includes `GONE_410: 149` (previously 141 + 8 new).

- [ ] **Step 4: Typecheck the regenerated module**

Run: `npm run typecheck`
Expected: zero new errors.

- [ ] **Step 5: Regenerate the sitemap**

Run: `npm run build`

(The `postbuild` hook runs `next-sitemap`, which already filters `GONE_410` URLs per slice 1's `next-sitemap.config.js` changes.)

Expected: build succeeds; sitemap regenerates.

- [ ] **Step 6: Verify the 8 URLs are absent from the sitemap**

Run:
```bash
for p in luxury-markets balboa-island lido-isle newport-coast corona-del-mar; do
  count=$(grep -c "$p" public/sitemap.xml)
  echo "$p: $count"
done
```
Expected: every count is `0`.

- [ ] **Step 7: Verify middleware serves 410 for one of them in dev**

Run (with `npm run dev` running in another shell):
```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/luxury-markets/ultra-luxury-estates-mortgage-broker
```
Expected: `410`.

- [ ] **Step 8: Commit**

```bash
git add docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv lib/disposition/luxury-urls.ts public/sitemap.xml
git commit -m "feat(middleware): 410 for 8 overlooked luxury URLs"
```

---

## Task 10: Pre-deletion verifier + delete 8 .tsx files

**Files:**
- Create: `scripts/verify-deletion-candidates.mjs`
- Delete: 8 `.tsx` files under `app/luxury-markets/` and `app/areas/newport-beach-neighborhoods/`

- [ ] **Step 1: Create the verifier**

```js
#!/usr/bin/env node
/**
 * Before deleting any page .tsx file, assert its URL is already in
 * lib/disposition/luxury-urls.ts as GONE_410 or a REDIRECTS.from.
 * Exits non-zero if any candidate is missing — no file is ever removed
 * without a middleware-serving guarantee.
 */
import fs from 'node:fs';

const CANDIDATES = [
  { file: 'app/luxury-markets/page.tsx', url: '/luxury-markets' },
  { file: 'app/luxury-markets/waterfront-homes-mortgage-broker/page.tsx', url: '/luxury-markets/waterfront-homes-mortgage-broker' },
  { file: 'app/luxury-markets/ultra-luxury-estates-mortgage-broker/page.tsx', url: '/luxury-markets/ultra-luxury-estates-mortgage-broker' },
  { file: 'app/luxury-markets/golf-course-homes-mortgage-broker/page.tsx', url: '/luxury-markets/golf-course-homes-mortgage-broker' },
  { file: 'app/areas/newport-beach-neighborhoods/balboa-island-mortgage-broker/page.tsx', url: '/areas/newport-beach-neighborhoods/balboa-island-mortgage-broker' },
  { file: 'app/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker/page.tsx', url: '/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker' },
  { file: 'app/areas/newport-beach-neighborhoods/newport-coast-mortgage-broker/page.tsx', url: '/areas/newport-beach-neighborhoods/newport-coast-mortgage-broker' },
  { file: 'app/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker/page.tsx', url: '/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker' },
];

const module = fs.readFileSync('lib/disposition/luxury-urls.ts', 'utf8');

let failed = 0;
for (const { file, url } of CANDIDATES) {
  const inGone = module.includes(`"${url}"`);
  const inRedirect = module.includes(`"from": "${url}"`);
  if (!inGone && !inRedirect) {
    console.error(`FAIL: ${url} is not in GONE_410 or REDIRECTS — file ${file} not safe to delete`);
    failed++;
  } else if (!fs.existsSync(file)) {
    console.error(`FAIL: ${file} does not exist on disk`);
    failed++;
  } else {
    console.log(`OK: ${url} -> ${file}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} failure(s) — aborting deletion`);
  process.exit(1);
}
console.log('\nAll 8 candidates verified. Safe to delete.');
```

- [ ] **Step 2: Run the verifier**

Run: `node scripts/verify-deletion-candidates.mjs`
Expected: 8 `OK:` lines, `Safe to delete.` message, exit 0. If any FAIL, stop — Task 9 is incomplete.

- [ ] **Step 3: Delete the 8 files**

```bash
git rm app/luxury-markets/page.tsx
git rm app/luxury-markets/waterfront-homes-mortgage-broker/page.tsx
git rm app/luxury-markets/ultra-luxury-estates-mortgage-broker/page.tsx
git rm app/luxury-markets/golf-course-homes-mortgage-broker/page.tsx
git rm app/areas/newport-beach-neighborhoods/balboa-island-mortgage-broker/page.tsx
git rm app/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker/page.tsx
git rm app/areas/newport-beach-neighborhoods/newport-coast-mortgage-broker/page.tsx
git rm app/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker/page.tsx
```

- [ ] **Step 4: Build to confirm no orphaned imports**

Run: `npm run build`
Expected: build succeeds. If any error references one of the deleted paths, fix the offending import by removing the link/reference (it must have been a stale link to a luxury page from another page).

- [ ] **Step 5: Confirm dev server still 410s the URLs (middleware served from Task 9)**

Run (with `npm run dev`):
```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/luxury-markets/ultra-luxury-estates-mortgage-broker
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker
```
Expected: `410` for both.

- [ ] **Step 6: Commit**

```bash
git add scripts/verify-deletion-candidates.mjs
git commit -m "chore: delete 8 luxury .tsx files (410'd in prior commit)"
```

(The `git rm` commands already staged the deletions; this commit captures both the script and the removals.)

---

## Task 11: Luxury-candidate CSV generator

**Files:**
- Create: `scripts/grep-luxury-candidates.mjs`
- Create: `docs/superpowers/specs/2026-04-15-scenario-rewrites-copy-sweep/` (directory)
- Create: `docs/superpowers/specs/2026-04-15-scenario-rewrites-copy-sweep/luxury-candidates.csv` (generated)

- [ ] **Step 1: Create the generator**

```js
#!/usr/bin/env node
/**
 * Scans app/, components/, content/, lib/ for luxury-language hits and emits
 * a review CSV: file,line,category_guess,context,suggested_rewrite.
 *
 * Categories:
 *   auto-rewrite       — clear positioning phrase with a known substitution
 *   context-dependent  — neighborhood name or ambiguous "luxury" use
 *   already-ok         — "luxury amenities" / "luxury finishes" (kept as-is)
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOTS = ['app', 'components', 'content', 'lib'];
const EXTS = new Set(['.ts', '.tsx', '.md', '.mdx']);

// Hard-ban patterns — always auto-rewrite
const HARD_BAN = [
  { re: /UHNW/gi, rewrite: '' },
  { re: /ultra-high-net-worth/gi, rewrite: 'mid-tier' },
  { re: /ultra-luxury/gi, rewrite: '' },
  { re: /waterfront specialist/gi, rewrite: 'California and Washington mortgage broker' },
  { re: /luxury waterfront/gi, rewrite: 'California and Washington' },
  { re: /luxury specialist/gi, rewrite: 'California and Washington mortgage broker' },
];

// Positioning dollar figures — flagged for manual review
const DOLLAR_POSITIONING = /\$(4|5|6|7|8|9|10|12|15)M\b|\$(4|5|6|7|8|9|10|12|15),000,000/g;

// Signal neighborhoods — context-dependent
const SIGNAL_NEIGHBORHOODS = /\b(Balboa Island|Lido Isle|Newport Coast)\b/g;

// Descriptive-use whitelist — "luxury" near these words is allowed
const DESCRIPTIVE_NEAR = /luxury (amenities|finishes|appliances|features|flooring|kitchen|bath)/gi;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (EXTS.has(path.extname(e.name))) out.push(p);
  }
  return out;
}

const files = ROOTS.flatMap((r) => fs.existsSync(r) ? walk(r) : []);

const rows = [];
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    for (const { re, rewrite } of HARD_BAN) {
      if (re.test(line)) {
        rows.push({
          file, line: i + 1,
          category: 'auto-rewrite',
          context: line.trim().replace(/,/g, ';').slice(0, 200),
          suggested: rewrite,
        });
      }
      re.lastIndex = 0;
    }

    if (DOLLAR_POSITIONING.test(line)) {
      rows.push({
        file, line: i + 1,
        category: 'context-dependent',
        context: line.trim().replace(/,/g, ';').slice(0, 200),
        suggested: 'rewrite to $500K-$900K band or remove',
      });
      DOLLAR_POSITIONING.lastIndex = 0;
    }

    if (SIGNAL_NEIGHBORHOODS.test(line)) {
      rows.push({
        file, line: i + 1,
        category: 'context-dependent',
        context: line.trim().replace(/,/g, ';').slice(0, 200),
        suggested: 'keep if geographic list; remove if positioning',
      });
      SIGNAL_NEIGHBORHOODS.lastIndex = 0;
    }

    // "luxury" not matched above — check for descriptive whitelist vs generic
    if (/\bluxury\b/i.test(line) && !HARD_BAN.some(({ re }) => { re.lastIndex = 0; return re.test(line); })) {
      const isDescriptive = DESCRIPTIVE_NEAR.test(line);
      DESCRIPTIVE_NEAR.lastIndex = 0;
      rows.push({
        file, line: i + 1,
        category: isDescriptive ? 'already-ok' : 'context-dependent',
        context: line.trim().replace(/,/g, ';').slice(0, 200),
        suggested: isDescriptive ? '(keep — descriptive amenity/feature use)' : 'judge per hit',
      });
    }
  }
}

const outDir = 'docs/superpowers/specs/2026-04-15-scenario-rewrites-copy-sweep';
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'luxury-candidates.csv');

const header = 'file,line,category,context,suggested\n';
const body = rows.map((r) =>
  `${r.file},${r.line},${r.category},"${r.context}","${r.suggested}"`
).join('\n');
fs.writeFileSync(outPath, header + body + '\n');

const counts = rows.reduce((acc, r) => { acc[r.category] = (acc[r.category] || 0) + 1; return acc; }, {});
console.log(`Wrote ${outPath} (${rows.length} rows)`);
for (const [k, v] of Object.entries(counts)) console.log(`  ${k}: ${v}`);
```

- [ ] **Step 2: Run the generator**

Run: `node scripts/grep-luxury-candidates.mjs`
Expected: outputs the CSV path and counts for each category. The CSV exists at `docs/superpowers/specs/2026-04-15-scenario-rewrites-copy-sweep/luxury-candidates.csv`.

- [ ] **Step 3: Commit**

```bash
git add scripts/grep-luxury-candidates.mjs docs/superpowers/specs/2026-04-15-scenario-rewrites-copy-sweep/luxury-candidates.csv
git commit -m "feat: luxury-candidate review CSV generator + initial output"
```

---

## Task 12: User review + body-copy sweep

**Files:**
- Modify: `docs/superpowers/specs/2026-04-15-scenario-rewrites-copy-sweep/luxury-candidates.csv` (user-annotated)
- Modify: each file in the `auto-rewrite` + approved `context-dependent` rows

- [ ] **Step 1: User review checkpoint**

**STOP**. Present the CSV to the user:

> "Candidate CSV at `docs/superpowers/specs/2026-04-15-scenario-rewrites-copy-sweep/luxury-candidates.csv`. Counts: auto-rewrite=N, context-dependent=M, already-ok=K. Please review the `context-dependent` rows and either approve the `suggested` column, edit it, or mark `SKIP` in a trailing column. When done, say 'proceed'."

Wait for explicit user go-ahead before continuing to Step 2.

- [ ] **Step 2: Apply auto-rewrite rows**

For every row with `category=auto-rewrite` in the CSV, apply the `suggested` substitution at the `file:line` location using the `Edit` tool. Each substitution is a string-level replacement of the matched term — surrounding copy may need a small punctuation/grammar cleanup after the replacement (e.g., removing a stray comma, capitalizing a sentence start).

If an `auto-rewrite` row produces an ungrammatical result after substitution, treat it as `context-dependent` and ask the user for the correct phrasing.

- [ ] **Step 3: Apply approved context-dependent rows**

For each `context-dependent` row the user approved in Step 1, apply the approved rewrite. Skip rows marked `SKIP`.

- [ ] **Step 4: Re-run the generator to confirm sweep is complete**

Run: `node scripts/grep-luxury-candidates.mjs`

Inspect the new CSV. Expected: `auto-rewrite` count is 0 (no remaining hard-ban matches). `context-dependent` count should only contain rows the user explicitly approved to skip. `already-ok` count may remain.

- [ ] **Step 5: Run grep assertions directly**

```bash
grep -riE "UHNW|ultra-high-net-worth|ultra-luxury" app components content lib
grep -riE "waterfront specialist|luxury waterfront|luxury specialist" app components content lib
```
Expected: both return no matches (exit code 1 from grep).

- [ ] **Step 6: Build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore(copy): site-wide luxury-language sweep per approved candidate CSV"
```

---

## Task 13: Meta / title sweep on edited pages

**Files:**
- Modify: any page from Tasks 3–8 and Task 12 whose `metadata` or `generateMetadata` contains luxury-positioning strings

- [ ] **Step 1: Enumerate edited pages from this slice**

Run:
```bash
git log --name-only --since="2026-04-15 00:00" --pretty=format: | grep -E "^app/.+page\.tsx$" | sort -u
```

Record the list — this is the scope for the meta sweep.

- [ ] **Step 2: Grep each for luxury-positioning in metadata**

For each file in the Step 1 list, run:
```bash
grep -nE "title|description" <file> | grep -iE "luxury|UHNW|ultra-|waterfront|\\\$[4-9]M|\\\$1[0-9]M|Balboa Island|Lido Isle|Newport Coast"
```

Record each hit with file + line. Lines that contain one of the banned tokens inside a `title:` or `description:` property need rewriting.

- [ ] **Step 3: Rewrite each matching metadata line**

For each hit from Step 2, rewrite inline under these rules:

- Luxury-positioning phrasing → mid-tier framing (same taxonomy as body sweep)
- Positioning dollar figures → cap-aligned framing using `LOAN_CAPS` values from slice 1's module (e.g., `up to $3.5M` for jumbo, `up to $750K` for HELOC)
- Three signal-neighborhoods → removed

After each rewrite, measure:

- `title`: ≤60 characters
- `description`: 140–160 characters

If a rewrite exceeds the length limit, trim; if it falls below, expand with cap-aligned framing. Over- or under-length lines are flagged and fixed before committing.

- [ ] **Step 4: Final grep — all edited files, metadata-only**

Run:
```bash
for f in <list from Step 1>; do
  grep -nE "title:|description:" "$f" | grep -iE "luxury|UHNW|ultra-|waterfront|\\\$[4-9]M|\\\$1[0-9]M|Balboa Island|Lido Isle|Newport Coast" && echo "LEAK in $f"
done
```
Expected: no `LEAK in ...` line printed.

- [ ] **Step 5: Build**

Run: `npm run build`
Expected: succeeds; `next-sitemap` post-hook runs clean.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore(meta): luxury/title/description sweep on edited pages"
```

---

## Task 14: Full verification pass + deploy

- [ ] **Step 1: Gate 1 — structural**

Run:
```bash
npm run typecheck
npm run lint
npm run build
node scripts/validate-scenarios.mjs
```
Expected: all pass. `validate-scenarios.mjs` prints 7 `PASS:` lines.

- [ ] **Step 2: Gate 2 — sweep assertions across entire tree**

Run:
```bash
grep -riE "UHNW|ultra-high-net-worth|ultra-luxury" app components content lib
grep -riE "waterfront specialist|luxury waterfront|luxury specialist" app components content lib
grep -rE "\\\$(4|5|6|7|8|9|10|12|15)M\\b" app components content lib
```
Expected: first two commands return no matches. Third command may return calculator default or conforming-limit references ONLY — each remaining hit is inspected and either justified (regulatory fact) or rewritten on the spot.

- [ ] **Step 3: Gate 3 — dead-code deletion verification**

Run:
```bash
ls app/luxury-markets 2>&1 | head -3
ls app/areas/newport-beach-neighborhoods/balboa-island-mortgage-broker 2>&1 | head -3
```
Expected: "No such file or directory" for both. (If the directory is empty, `rmdir` it.)

Run:
```bash
npm run dev &
sleep 8
for p in /luxury-markets/ultra-luxury-estates-mortgage-broker /areas/newport-beach-neighborhoods/lido-isle-mortgage-broker; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000${p}")
  echo "$code $p"
done
kill %1
```
Expected: both return `410`.

- [ ] **Step 4: Gate 4 — visual smoke**

Run: `npm run dev`
Open each in a browser at 1440px and 375px:
- `/heloc-orange-county` — ScenarioExample(heloc) renders
- `/heloan-orange-county` — ScenarioExample(heloc) renders
- `/home-equity-guide` — ScenarioExample(heloc) renders mid-article
- `/cash-out-refinance` — ScenarioExample(cashOut) renders
- `/guides/orange-county-refinancing-guide` — both scenarios render
- `/loan-programs/dscr-investment-loans` — ScenarioExample(dscr) renders with DSCR Ratio `1.24`

Each must also preserve the slice-1 `<LoanCapSubheadline>` directly under the H1.

- [ ] **Step 5: Push**

```bash
git push origin main
```

- [ ] **Step 6: Wait for Vercel production build and verify status**

Run: `vercel ls --prod | head -5`

Expected: most-recent row shows `● Ready` within ~5 minutes of the push. If `● Error`, run `vercel logs <url>` and diagnose before continuing.

- [ ] **Step 7: Gate 5 — production post-deploy verification**

```bash
curl -s https://www.mothebroker.com/heloc-orange-county | grep -c '\$650,000'
curl -s https://www.mothebroker.com/cash-out-refinance | grep -c '\$800,000'
curl -s https://www.mothebroker.com/loan-programs/dscr-investment-loans | grep -c '1\.24'

for p in /luxury-markets/ultra-luxury-estates-mortgage-broker /luxury-markets/waterfront-homes-mortgage-broker /areas/newport-beach-neighborhoods/balboa-island-mortgage-broker /areas/newport-beach-neighborhoods/lido-isle-mortgage-broker /areas/newport-beach-neighborhoods/newport-coast-mortgage-broker; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "https://www.mothebroker.com${p}")
  echo "$code $p"
done

curl -s https://www.mothebroker.com/heloc-orange-county | grep -ciE "UHNW|ultra-high-net-worth|waterfront specialist"
```
Expected:
- First three `grep -c` lines each return ≥1
- All 5 deleted-page checks return `410`
- Last luxury-string check returns `0`

- [ ] **Step 8: Submit updated sitemap to GSC + IndexNow**

Run:
```bash
npm run gsc:sitemap
npm run indexnow:submit
```
Expected: both scripts exit 0. The sitemap has 8 fewer URLs (344 − 8 = 336 URLs, or whatever the new count is — report the number).

- [ ] **Step 9: Final commit if any verification fixes landed**

```bash
git status
```

If anything is uncommitted from Steps 2 or 4, commit:
```bash
git add -A
git commit -m "chore: slice 2+4 verification fixes"
git push origin main
```

---

## Post-merge / out-of-band

- Monitor GSC Coverage for ~14 days: 8 new 410'd URLs should drop from "Indexed" to "Not indexed — 410". Track the same way slice 1 tracked its 141 gones.
- Prerequisite for slice 3 (mid-tier CA/WA city pages): restore GSC service-account access to `sc-domain:mothebroker.com` (currently 403).

## Out of scope (confirmed)

- Pre-qualification widget → slice 5
- Referral-partner off-ramp → slice 6
- New mid-tier city pages for CA/WA → slice 3
- ICP copy *strengthening* on Non-QM / FHA-to-Conventional / DSCR pages beyond the scenario swap → its own slice
- Calculator default values — left alone
- Schema.org JSON-LD sweep — not in scope unless a luxury string leaks into a rendered structured data field; flagged case-by-case
- Rate/APR numbers in examples — untouched
- Metas on pages not otherwise edited this slice — deferred
