# Pre-qualification Widget Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Gate `/contact` with a pre-qualification widget that branches the user into a qualified-path form or a referral-path form before they fill the full `PremiumContactForm`.

**Architecture:** Extend `lib/leadQualification.ts` (existing SSOT used by the contact form's submit-time lead tagging) with a richer `isPrequalified()` sibling to `qualify()`. Build two small components (`PrequalWidget`, `PrequalSummaryChip`). Wrap `PremiumContactForm` in a 3-stage state machine in `ContactPageClient`. Backward-compatible throughout — existing `qualify()` callers and form submit shape are untouched except `OVERALL_TARGET.max` rising $2.5M → $3.5M.

**Tech Stack:** Next.js 15 App Router (client components), TypeScript strict, Tailwind v3.4.17, framer-motion (already used in contact page). No test framework installed — verification uses `npm run typecheck`, `npm run lint`, `npm run build`, a `node` validator script, and browser smoke.

**Spec:** `docs/superpowers/specs/2026-04-15-prequalification-widget-design.md`
**Predecessor modules:** `lib/loan-caps.ts` (slice 1), `lib/example-scenarios.ts` (slice 2+4), `lib/leadQualification.ts` (pre-existing, extended here)

---

## Pre-flight

- [ ] **Step 1: Confirm working tree is clean**

Run: `git status`
Expected: clean tree on `main` (or on a feature branch for this slice).

- [ ] **Step 2: Confirm slice 1/2/4 are live in prod**

Run:
```bash
curl -s https://www.mothebroker.com/heloc-orange-county | grep -c '\$650,000'
curl -s -o /dev/null -w "%{http_code}\n" https://www.mothebroker.com/luxury-markets/ultra-luxury-estates-mortgage-broker
```
Expected: `>=1` and `410`. Confirms SSOT + middleware pipeline are working — slice 5 builds on top.

- [ ] **Step 3: Read the existing contact surface**

Files to glance at before touching:
- `lib/leadQualification.ts` — current `qualify()` + types (this plan extends it)
- `app/contact/ContactPageClient.tsx` — current page structure (this plan wraps the form)
- `components/contact/PremiumContactForm.tsx` — current form (this plan adds 3 optional props)

---

## Task 1: Extend `lib/leadQualification.ts` + validator

**Files:**
- Modify: `lib/leadQualification.ts`
- Create: `scripts/validate-prequal.mjs`

- [ ] **Step 1: Add new exports to `lib/leadQualification.ts`**

Append to `lib/leadQualification.ts` (after the existing exports, do not remove or reorder anything):

```ts
// ---------------------------------------------------------------------------
// Slice 5 — Pre-qualification widget surface
// Richer sibling to qualify(). Used by /contact widget to gate the form.
// ---------------------------------------------------------------------------

import { LOAN_CAPS } from '@/lib/loan-caps';

export const MAX_HOME_VALUE = 5_000_000;

export type PrequalProduct =
  | 'heloc'
  | 'cashOut'
  | 'rateTerm'
  | 'purchase'
  | 'dscr'
  | 'other';

export interface PrequalInput {
  homeValue: number;
  currentMortgage: number;
  desiredLoan: number;
  product: PrequalProduct;
}

export type PrequalFailReason =
  | { type: 'home-value-exceeds-icp'; limit: number; actual: number }
  | { type: 'product-cap-exceeded'; product: PrequalProduct; cap: number; actual: number };

export type PrequalResult =
  | { qualified: true }
  | { qualified: false; reasons: PrequalFailReason[] };

export function capForProduct(product: PrequalProduct): number {
  switch (product) {
    case 'heloc': return LOAN_CAPS.heloc;
    case 'cashOut': return LOAN_CAPS.cashOut;
    case 'dscr': return LOAN_CAPS.dscr;
    case 'rateTerm':
    case 'purchase':
    case 'other':
      return LOAN_CAPS.jumbo;
  }
}

export function isPrequalified(input: PrequalInput): PrequalResult {
  const reasons: PrequalFailReason[] = [];

  if (input.homeValue > MAX_HOME_VALUE) {
    reasons.push({
      type: 'home-value-exceeds-icp',
      limit: MAX_HOME_VALUE,
      actual: input.homeValue,
    });
  }

  const cap = capForProduct(input.product);
  if (input.desiredLoan > cap) {
    reasons.push({
      type: 'product-cap-exceeded',
      product: input.product,
      cap,
      actual: input.desiredLoan,
    });
  }

  if (reasons.length === 0) return { qualified: true };
  return { qualified: false, reasons };
}
```

- [ ] **Step 2: Update `OVERALL_TARGET.max` from `2_500_000` to `3_500_000`**

Find the existing line in `lib/leadQualification.ts`:

```ts
export const OVERALL_TARGET = { min: 100_000, max: 2_500_000 } as const;
```

Change to:

```ts
export const OVERALL_TARGET = { min: 100_000, max: 3_500_000 } as const;
```

Then find the display constant:

```ts
export const OVERALL_DISPLAY = '$100K\u2013$2.5M';
```

Change to:

```ts
export const OVERALL_DISPLAY = '$100K\u2013$3.5M';
```

- [ ] **Step 3: Create `scripts/validate-prequal.mjs`**

```js
#!/usr/bin/env node
/**
 * Truth-table validator for isPrequalified() in lib/leadQualification.ts.
 * Parses the module as text (node can't import .ts directly) and executes
 * the cases below against a JS-equivalent implementation. Asserts that the
 * thresholds in the source file match the expected values, then walks the
 * truth table.
 *
 * Fails loudly if any threshold constant or cap changes unexpectedly.
 */
import fs from 'node:fs';

const qsrc = fs.readFileSync('lib/leadQualification.ts', 'utf8');
const caps = fs.readFileSync('lib/loan-caps.ts', 'utf8');

function num(text, key) {
  const re = new RegExp(`${key}\\s*:\\s*([\\d_]+)`, 'm');
  const m = text.match(re);
  if (!m) throw new Error(`Missing key "${key}" in source`);
  return Number(m[1].replace(/_/g, ''));
}

function readConst(text, name) {
  const re = new RegExp(`${name}\\s*=\\s*([\\d_]+)`, 'm');
  const m = text.match(re);
  if (!m) throw new Error(`Missing const ${name}`);
  return Number(m[1].replace(/_/g, ''));
}

const MAX_HOME_VALUE = readConst(qsrc, 'MAX_HOME_VALUE');
const CAPS = {
  heloc: num(caps, 'heloc'),
  cashOut: num(caps, 'cashOut'),
  jumbo: num(caps, 'jumbo'),
  dscr: num(caps, 'dscr'),
};

function capForProduct(p) {
  switch (p) {
    case 'heloc': return CAPS.heloc;
    case 'cashOut': return CAPS.cashOut;
    case 'dscr': return CAPS.dscr;
    case 'rateTerm':
    case 'purchase':
    case 'other':
      return CAPS.jumbo;
  }
}

function isPrequalified({ homeValue, currentMortgage, desiredLoan, product }) {
  const reasons = [];
  if (homeValue > MAX_HOME_VALUE) {
    reasons.push({ type: 'home-value-exceeds-icp' });
  }
  const cap = capForProduct(product);
  if (desiredLoan > cap) {
    reasons.push({ type: 'product-cap-exceeded' });
  }
  if (reasons.length === 0) return { qualified: true };
  return { qualified: false, reasons };
}

// Sanity asserts on constants
const sanity = [
  ['MAX_HOME_VALUE', MAX_HOME_VALUE === 5_000_000, MAX_HOME_VALUE],
  ['HELOC cap', CAPS.heloc === 750_000, CAPS.heloc],
  ['cashOut cap', CAPS.cashOut === 3_500_000, CAPS.cashOut],
  ['jumbo cap', CAPS.jumbo === 3_500_000, CAPS.jumbo],
  ['dscr cap', CAPS.dscr === 2_000_000, CAPS.dscr],
];
let failed = 0;
for (const [label, ok, actual] of sanity) {
  if (!ok) { console.error(`FAIL (const): ${label} is ${actual}`); failed++; }
  else console.log(`PASS (const): ${label} = ${actual}`);
}

// Truth table
const cases = [
  // [homeValue, currentMortgage, desiredLoan, product, expectedQualified, expectedFirstReason]
  [650_000, 350_000, 150_000, 'heloc', true, null],
  [800_000, 400_000, 100_000, 'cashOut', true, null],
  [650_000, 0, 450_000, 'dscr', true, null],
  [4_900_000, 2_000_000, 3_400_000, 'purchase', true, null],
  [5_100_000, 2_000_000, 1_000_000, 'heloc', false, 'home-value-exceeds-icp'],
  [1_000_000, 200_000, 800_000, 'heloc', false, 'product-cap-exceeded'],
  [1_500_000, 500_000, 4_000_000, 'cashOut', false, 'product-cap-exceeded'],
  [6_000_000, 2_000_000, 4_000_000, 'purchase', false, 'home-value-exceeds-icp'],
  [1_000_000, 0, 2_100_000, 'dscr', false, 'product-cap-exceeded'],
];

for (const [hv, cm, dl, p, expQ, expR] of cases) {
  const res = isPrequalified({ homeValue: hv, currentMortgage: cm, desiredLoan: dl, product: p });
  const okQ = res.qualified === expQ;
  const okR = expQ ? true : res.reasons[0]?.type === expR;
  const tag = okQ && okR ? 'PASS' : 'FAIL';
  if (tag === 'FAIL') failed++;
  console.log(`${tag} (case): hv=${hv} cm=${cm} dl=${dl} p=${p} → qualified=${res.qualified}${res.qualified ? '' : ` reason=${res.reasons[0]?.type}`}`);
}

if (failed > 0) {
  console.error(`\n${failed} failure(s)`);
  process.exit(1);
}
console.log('\nprequal: all checks passed');
```

- [ ] **Step 4: Run the validator**

Run: `node scripts/validate-prequal.mjs`
Expected: 5 `PASS (const)` + 9 `PASS (case)` lines, final `prequal: all checks passed`, exit 0.

- [ ] **Step 5: Run typecheck**

Run: `npm run typecheck`
Expected: zero new errors. The new imports and exports should type-check cleanly against `LOAN_CAPS`.

- [ ] **Step 6: Grep for other `OVERALL_TARGET.max` / `OVERALL_DISPLAY` consumers**

Run:
```bash
grep -rn "OVERALL_TARGET\|OVERALL_DISPLAY\|2\.5M\|\$2,500,000" lib components app | grep -v "lib/leadQualification.ts"
```

If any result references the old `$2.5M` or `$2,500,000` value in a way that contradicts the new `$3.5M`, rewrite it to match the new display text (e.g., copy like "loans up to $2.5M" in a page body). If it's unrelated (e.g., a different cap mentioned in unrelated copy), leave it.

- [ ] **Step 7: Build to confirm nothing broke**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 8: Commit**

```bash
git add lib/leadQualification.ts scripts/validate-prequal.mjs
git commit -m "feat(prequal): extend leadQualification with isPrequalified + raise OVERALL_TARGET.max"
```

Husky may run on commit — fix and create a NEW commit if blocked (never --amend, never --no-verify).

---

## Task 2: `PrequalWidget` component

**Files:**
- Create: `components/prequal/PrequalWidget.tsx`

- [ ] **Step 1: Create the component**

```tsx
'use client';

import React, { useState } from 'react';
import {
  isPrequalified,
  type PrequalInput,
  type PrequalProduct,
  type PrequalResult,
} from '@/lib/leadQualification';

interface PrequalWidgetProps {
  onComplete: (payload: { input: PrequalInput; result: PrequalResult }) => void;
  initialValues?: Partial<PrequalInput>;
  className?: string;
}

const PRODUCT_OPTIONS: Array<{ value: PrequalProduct; label: string }> = [
  { value: 'heloc', label: 'HELOC (home equity line of credit)' },
  { value: 'cashOut', label: 'Cash-out refinance' },
  { value: 'rateTerm', label: 'Rate-and-term refinance' },
  { value: 'purchase', label: 'Purchase (new home)' },
  { value: 'dscr', label: 'Investment property (DSCR)' },
  { value: 'other', label: 'Something else' },
];

function parseCurrency(raw: string): number {
  const digits = raw.replace(/[^0-9]/g, '');
  return digits === '' ? NaN : Number(digits);
}

function formatCurrency(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return '';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

function bucketHome(v: number): string {
  if (v < 500_000) return '<500K';
  if (v < 1_000_000) return '500K-1M';
  if (v < 2_000_000) return '1M-2M';
  if (v <= 5_000_000) return '2M-5M';
  return '>5M';
}

function bucketLoan(v: number): string {
  if (v < 250_000) return '<250K';
  if (v < 750_000) return '250-750K';
  if (v < 2_000_000) return '750K-2M';
  if (v <= 3_500_000) return '2M-3.5M';
  return '>3.5M';
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function PrequalWidget({
  onComplete,
  initialValues,
  className = '',
}: PrequalWidgetProps) {
  const [product, setProduct] = useState<PrequalProduct | ''>(initialValues?.product ?? '');
  const [homeValueRaw, setHomeValueRaw] = useState(
    initialValues?.homeValue ? formatCurrency(initialValues.homeValue) : ''
  );
  const [currentMortgageRaw, setCurrentMortgageRaw] = useState(
    initialValues?.currentMortgage != null ? formatCurrency(initialValues.currentMortgage) : ''
  );
  const [desiredLoanRaw, setDesiredLoanRaw] = useState(
    initialValues?.desiredLoan ? formatCurrency(initialValues.desiredLoan) : ''
  );
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!product) {
      setError('Please choose what you are looking for.');
      return;
    }
    const homeValue = parseCurrency(homeValueRaw);
    const currentMortgage = parseCurrency(currentMortgageRaw);
    const desiredLoan = parseCurrency(desiredLoanRaw);

    if (!Number.isFinite(homeValue) || homeValue <= 0) {
      setError('Please enter a home value.');
      return;
    }
    if (!Number.isFinite(currentMortgage) || currentMortgage < 0) {
      setError('Please enter your current mortgage balance (0 if owned outright).');
      return;
    }
    if (!Number.isFinite(desiredLoan) || desiredLoan <= 0) {
      setError('Please enter the loan amount you are considering.');
      return;
    }
    if (desiredLoan > homeValue) {
      setError('Desired loan amount cannot exceed home value.');
      return;
    }

    const input: PrequalInput = { homeValue, currentMortgage, desiredLoan, product };
    const result = isPrequalified(input);

    try {
      window.gtag?.('event', 'prequal_submitted', {
        product,
        qualified: result.qualified,
        home_value_bucket: bucketHome(homeValue),
        loan_amount_bucket: bucketLoan(desiredLoan),
        fail_reason: result.qualified ? null : result.reasons[0]?.type,
      });
    } catch {
      // analytics is best-effort; never block submission
    }

    onComplete({ input, result });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`border border-slate-200 rounded-lg p-6 bg-white space-y-4 ${className}`}
      data-testid="prequal-widget"
      aria-labelledby="prequal-heading"
    >
      <h2 id="prequal-heading" className="text-xl font-semibold">Let&apos;s see if we&apos;re the right fit</h2>
      <p className="text-sm text-slate-600">Four quick questions. No credit check.</p>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-slate-900">What are you looking for?</legend>
        {PRODUCT_OPTIONS.map((opt) => (
          <label key={opt.value} className="flex items-start gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="radio"
              name="product"
              value={opt.value}
              checked={product === opt.value}
              onChange={() => setProduct(opt.value)}
              className="mt-1"
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </fieldset>

      <label className="block">
        <span className="text-sm font-medium text-slate-900">Home value (or purchase price)</span>
        <input
          type="text"
          inputMode="numeric"
          value={homeValueRaw}
          onChange={(e) => setHomeValueRaw(e.target.value)}
          onBlur={() => {
            const n = parseCurrency(homeValueRaw);
            if (Number.isFinite(n) && n > 0) setHomeValueRaw(formatCurrency(n));
          }}
          placeholder="$650,000"
          className="mt-1 w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-900">Current mortgage balance</span>
        <span className="block text-xs text-slate-500">Enter 0 if you own outright.</span>
        <input
          type="text"
          inputMode="numeric"
          value={currentMortgageRaw}
          onChange={(e) => setCurrentMortgageRaw(e.target.value)}
          onBlur={() => {
            const n = parseCurrency(currentMortgageRaw);
            if (Number.isFinite(n) && n >= 0) setCurrentMortgageRaw(formatCurrency(n));
          }}
          placeholder="$350,000"
          className="mt-1 w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-900">Desired loan amount</span>
        <input
          type="text"
          inputMode="numeric"
          value={desiredLoanRaw}
          onChange={(e) => setDesiredLoanRaw(e.target.value)}
          onBlur={() => {
            const n = parseCurrency(desiredLoanRaw);
            if (Number.isFinite(n) && n > 0) setDesiredLoanRaw(formatCurrency(n));
          }}
          placeholder="$150,000"
          className="mt-1 w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
        />
      </label>

      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        className="w-full bg-blue-700 text-white font-semibold rounded px-4 py-2 hover:bg-blue-800 transition-colors"
      >
        Check My Options
      </button>
    </form>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npm run typecheck`
Expected: zero new errors.

- [ ] **Step 3: Commit**

```bash
git add components/prequal/PrequalWidget.tsx
git commit -m "feat(prequal): PrequalWidget component"
```

---

## Task 3: `PrequalSummaryChip` component

**Files:**
- Create: `components/prequal/PrequalSummaryChip.tsx`

- [ ] **Step 1: Create the component**

```tsx
'use client';

import React from 'react';
import type { PrequalInput, PrequalProduct } from '@/lib/leadQualification';

interface PrequalSummaryChipProps {
  input: PrequalInput;
  onEdit: () => void;
  className?: string;
}

const PRODUCT_LABEL: Record<PrequalProduct, string> = {
  heloc: 'HELOC',
  cashOut: 'Cash-out refi',
  rateTerm: 'Rate-and-term refi',
  purchase: 'Purchase',
  dscr: 'DSCR investment',
  other: 'Other',
};

const dollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

function compactDollars(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return dollar.format(n);
}

export default function PrequalSummaryChip({ input, onEdit, className = '' }: PrequalSummaryChipProps) {
  return (
    <div
      className={`flex items-center justify-between gap-3 border border-slate-200 rounded-lg px-4 py-3 bg-slate-50 ${className}`}
      data-testid="prequal-summary-chip"
    >
      <p className="text-sm text-slate-700">
        <span className="font-medium">{compactDollars(input.homeValue)} home</span>
        {' · '}
        <span>{PRODUCT_LABEL[input.product]}</span>
        {' · '}
        <span>{compactDollars(input.desiredLoan)} desired</span>
      </p>
      <button
        type="button"
        onClick={onEdit}
        className="text-sm text-blue-700 font-medium hover:underline"
      >
        Edit
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npm run typecheck`
Expected: zero new errors.

- [ ] **Step 3: Commit**

```bash
git add components/prequal/PrequalSummaryChip.tsx
git commit -m "feat(prequal): PrequalSummaryChip component"
```

---

## Task 4: Extend `PremiumContactForm` with `initialValues`, `caseType`, `referralReasons`

**Files:**
- Modify: `components/contact/PremiumContactForm.tsx`

Note: the file is ~863 lines. Make targeted edits — do not rewrite.

- [ ] **Step 1: Add imports for the new types**

Near the top, after the existing `import { qualify } from '@/lib/leadQualification';` line, replace that import with a combined one:

```ts
import { qualify, capForProduct, type PrequalFailReason, type PrequalProduct } from '@/lib/leadQualification';
```

- [ ] **Step 2: Read the current component signature**

Run: `grep -n "export default function\|export default React.memo\|interface.*Props\|type.*Props" components/contact/PremiumContactForm.tsx`

Locate the props interface (or the function signature if props are inline). Record the line range.

- [ ] **Step 3: Add the three new optional props**

Extend the props interface (or the function signature's destructuring type annotation) with:

```ts
initialValues?: {
  homeValue?: number;
  desiredLoan?: number;
  product?: PrequalProduct;
  currentMortgage?: number;
};
caseType?: 'standard' | 'referral';
referralReasons?: PrequalFailReason[];
```

If the component currently has no explicit props interface (uses `function PremiumContactForm()` with no args), introduce one:

```tsx
interface PremiumContactFormProps {
  initialValues?: {
    homeValue?: number;
    desiredLoan?: number;
    product?: PrequalProduct;
    currentMortgage?: number;
  };
  caseType?: 'standard' | 'referral';
  referralReasons?: PrequalFailReason[];
}

export default function PremiumContactForm({
  initialValues,
  caseType = 'standard',
  referralReasons,
}: PremiumContactFormProps = {}) {
  // ... existing body
}
```

The `= {}` default ensures existing callers (passing no props) continue to work.

- [ ] **Step 4: Pre-fill form state from `initialValues`**

Find the component's state initialization (likely a `useState<FormDataShape>(...)` call near the top of the function body). Modify the initial state so that:
- `homeValue` field seeds from `initialValues?.homeValue` formatted as a currency string
- `loanAmount` field seeds from `initialValues?.desiredLoan` formatted as a currency string
- `loanPurpose` (or whatever field captures product intent) seeds from `initialValues?.product` mapped to the form's existing option values — **inspect the existing `loanPurpose` option set** first; if it uses labels like "Purchase" / "Refinance" / "HELOC", map `PrequalProduct` to the nearest match:
  - `'heloc'` → `'HELOC'`
  - `'cashOut'` → `'Cash-Out Refinance'`
  - `'rateTerm'` → `'Refinance'` (or whatever the existing form uses for rate-and-term)
  - `'purchase'` → `'Purchase'`
  - `'dscr'` → `'Investment'` (or nearest match)
  - `'other'` → leave blank

Use whatever currency-format helper the file already uses (there is a `formatCurrencyInput` / similar — find it first; if none, use the same `Intl.NumberFormat` pattern from `PrequalWidget`).

If the form's state shape doesn't match the slice-5 names exactly, do the mapping in the initial-state expression — do NOT rename the form's state fields.

- [ ] **Step 5: Conditional heading + hidden referral flag**

Find the form's heading (the first `<h1>`, `<h2>`, or title text shown to the user when the form loads — typically near the top of the JSX return).

Wrap / replace it with:

```tsx
{caseType === 'referral' ? (
  <>
    <h2 className="text-xl font-semibold">
      Your loan size is outside our in-house range, but we may be able to connect you with a specialist partner. Share your details below and we&apos;ll route you.
    </h2>
    {referralReasons && referralReasons.length > 0 && (
      <p className="mt-2 text-sm text-slate-600" data-testid="referral-reason">
        {referralReasonText(referralReasons[0])}
      </p>
    )}
  </>
) : (
  <h2 className="text-xl font-semibold">Great — let&apos;s get your application started</h2>
)}
```

(Preserve whatever existing heading markup the form had — this may involve moving existing heading copy into the `caseType === 'standard'` branch.)

Add a helper near the top of the file (outside the component):

```ts
function referralReasonText(reason: PrequalFailReason): string {
  if (reason.type === 'home-value-exceeds-icp') {
    return 'Homes above $5M typically need a specialist lender.';
  }
  // product-cap-exceeded
  if (reason.product === 'heloc') {
    return 'HELOCs over $750K are routed to our referral partner.';
  }
  const cap = capForProduct(reason.product);
  return `Total loan amounts over ${new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0,
  }).format(cap)} are routed to our referral partner.`;
}
```

- [ ] **Step 6: Send `case_type` in the submit payload**

Find the `FormData` append block around `PremiumContactForm.tsx:343-365` (the `formData_submit.append(...)` calls before the `fetch('/api/contact', ...)` call).

Add these appends alongside the existing ones:

```ts
formData_submit.append('case_type', caseType);
```

(`caseType` has a default of `'standard'`, so existing callers get the same behavior as before — they'll just now have a `case_type: 'standard'` field on every submit.)

- [ ] **Step 7: Typecheck**

Run: `npm run typecheck`
Expected: zero new errors.

- [ ] **Step 8: Build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 9: Commit**

```bash
git add components/contact/PremiumContactForm.tsx
git commit -m "feat(contact): PremiumContactForm accepts initialValues + caseType + referralReasons"
```

---

## Task 5: Wire the state machine in `ContactPageClient`

**Files:**
- Modify: `app/contact/ContactPageClient.tsx`

- [ ] **Step 1: Read the file's structure**

Run: `grep -n "PremiumContactForm\|return (\|^}" app/contact/ContactPageClient.tsx | head -20`

Locate where `<PremiumContactForm />` is rendered. Slice 5 wraps that usage in a state machine.

- [ ] **Step 2: Add imports**

Near the existing imports at the top of `app/contact/ContactPageClient.tsx`:

```tsx
import { useState } from 'react';
import PrequalWidget from '@/components/prequal/PrequalWidget';
import PrequalSummaryChip from '@/components/prequal/PrequalSummaryChip';
import type { PrequalInput, PrequalResult } from '@/lib/leadQualification';
```

(If `useState` is already imported, don't duplicate it — merge into the existing import.)

- [ ] **Step 3: Add the state machine**

Inside the `ContactPageClient` component body, add near the top (before the `return`):

```tsx
type PrequalStage =
  | { stage: 'prequal'; lastInput?: PrequalInput }
  | { stage: 'form-qualified'; input: PrequalInput }
  | { stage: 'form-referral'; input: PrequalInput; result: Extract<PrequalResult, { qualified: false }> };

const [prequalState, setPrequalState] = useState<PrequalStage>({ stage: 'prequal' });

const handlePrequalComplete = ({ input, result }: { input: PrequalInput; result: PrequalResult }) => {
  if (result.qualified) {
    setPrequalState({ stage: 'form-qualified', input });
  } else {
    setPrequalState({ stage: 'form-referral', input, result });
  }
};

const handleEditPrequal = () => {
  setPrequalState((prev) => {
    if (prev.stage === 'prequal') return prev;
    return { stage: 'prequal', lastInput: prev.input };
  });
};
```

- [ ] **Step 4: Replace the `<PremiumContactForm />` render site**

Find the existing `<PremiumContactForm />` usage. Replace with:

```tsx
{prequalState.stage === 'prequal' ? (
  <PrequalWidget
    onComplete={handlePrequalComplete}
    initialValues={prequalState.lastInput}
  />
) : (
  <div className="space-y-4">
    <PrequalSummaryChip input={prequalState.input} onEdit={handleEditPrequal} />
    <PremiumContactForm
      initialValues={{
        homeValue: prequalState.input.homeValue,
        desiredLoan: prequalState.input.desiredLoan,
        product: prequalState.input.product,
        currentMortgage: prequalState.input.currentMortgage,
      }}
      caseType={prequalState.stage === 'form-referral' ? 'referral' : 'standard'}
      referralReasons={prequalState.stage === 'form-referral' ? prequalState.result.reasons : undefined}
    />
  </div>
)}
```

- [ ] **Step 5: Typecheck**

Run: `npm run typecheck`
Expected: zero new errors.

- [ ] **Step 6: Build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 7: Browser smoke (dev server)**

Start dev: `npm run dev > ./.devserver.log 2>&1 &`
Wait ~12s, then open `http://localhost:3000/contact` (adapt port if 3000 is taken — check `./.devserver.log`).

Verify manually at 1440px and 375px viewports:

1. **Initial load:** Widget renders. `PremiumContactForm` NOT in DOM (confirm via DevTools — no `data-testid="scenario-..."` or similar form markers visible).
2. **Qualifying submit:** Fill $650K home / $350K mortgage / $150K desired / HELOC. Click "Check My Options".
   - Widget collapses. `PrequalSummaryChip` appears with text like "$650K home · HELOC · $150K desired".
   - `PremiumContactForm` appears with standard heading.
   - Form has pre-filled home value and loan amount fields.
3. **Edit roundtrip:** Click "Edit" on the chip. Widget reappears with previous values pre-filled. Form disappears.
4. **Referral submit:** Fill $1M home / $200K mortgage / $800K desired / HELOC. Click "Check My Options".
   - Form appears with referral heading ("...outside our in-house range...").
   - Under the heading: "HELOCs over $750K are routed to our referral partner."
5. **Two-reason submit:** Fill $6M home / $2M mortgage / $4M desired / purchase.
   - Form appears with referral heading.
   - Reason text says "Homes above $5M typically need a specialist lender." (first reason wins).
6. **Network submit check:** On the referral path, fill the contact form and submit. In DevTools Network tab, inspect the request to `/api/contact` — the payload must contain `case_type: referral`. On the qualified path, `case_type: standard`.
7. **GA check:** In DevTools console, verify a `prequal_submitted` event fires on each widget submit, with `qualified` and bucketed `home_value_bucket` / `loan_amount_bucket`.

Stop the dev server: `kill %1` (or close the process if backgrounding doesn't work).

If any of 1-7 fail, fix the underlying issue and re-test before continuing.

- [ ] **Step 8: Commit**

```bash
git add app/contact/ContactPageClient.tsx
git commit -m "feat(contact): gate /contact with pre-qualification widget"
```

---

## Task 6: Full verification + deploy

- [ ] **Step 1: Gate 1 — structural**

```bash
npm run typecheck
npm run lint
npm run build
node scripts/validate-prequal.mjs
node scripts/validate-scenarios.mjs    # regression check — slice 2+4 SSOT should still pass
node scripts/validate-loan-caps.mjs 2>/dev/null || npx tsc --noEmit lib/loan-caps.ts   # slice 1 — fall back if the .mjs script can't import .ts
```

Expected: all four commands pass. Scenarios validator still prints 7 PASS lines (regression check on slice 2+4).

- [ ] **Step 2: Gate 2 — sweep regressions**

```bash
grep -riE "UHNW|ultra-high-net-worth|ultra-luxury" app components content 2>/dev/null | grep -v "lib/disposition"
grep -riE "waterfront specialist|luxury waterfront|luxury specialist" app components content 2>/dev/null
```

Expected: both return no matches. (Confirms slice 2+4 hygiene hasn't been undone.)

- [ ] **Step 3: Gate 3 — dead-code check**

```bash
ls app/luxury-markets 2>&1 | head -1
ls app/areas/newport-beach-mortgage-broker 2>&1 | head -1
```

Expected: both "No such file or directory". (Confirms deleted files stayed deleted.)

- [ ] **Step 4: Push**

```bash
git push origin main
```

(If working on a feature branch, merge first with `git checkout main && git merge --no-ff <branch>`, then push.)

- [ ] **Step 5: Wait for Vercel prod build and verify status**

Run: `vercel ls --prod | head -5`
Expected: most-recent row shows `● Ready` within ~5 minutes.

If `● Error`, run `vercel logs <url>` and diagnose before continuing.

- [ ] **Step 6: Gate 4 — production post-deploy verification**

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.mothebroker.com/contact
curl -s https://www.mothebroker.com/contact | grep -c "Let's see if we're the right fit"
```

Expected: `200` and `>=1`.

Spot-check that the rest of the site still works:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.mothebroker.com/
curl -s -o /dev/null -w "%{http_code}\n" https://www.mothebroker.com/heloc-orange-county
curl -s -o /dev/null -w "%{http_code}\n" https://www.mothebroker.com/luxury-markets/ultra-luxury-estates-mortgage-broker
```

Expected: `200`, `200`, `410`.

- [ ] **Step 7: Gate 5 — manual submit test**

In a real browser on prod:

1. Go to `https://www.mothebroker.com/contact`
2. Fill qualifying values, submit the widget, complete the contact form, submit.
3. Confirm the submission arrives in the lead inbox with `case_type: standard`.
4. Go back, fill unqualifying values, submit the widget, complete the contact form, submit.
5. Confirm the submission arrives with `case_type: referral` and `qualification_status: referral_candidate` (the legacy `qualify()` call also fires on submit — both flags present is expected).

- [ ] **Step 8: Final commit if any verification fixes landed**

```bash
git status
```

If anything was fixed during verification:

```bash
git add -A
git commit -m "chore(prequal): verification fixes"
git push origin main
```

---

## Post-merge / out-of-band

- Monitor Google Analytics `prequal_submitted` events for 7 days. Confirm:
  - Qualified:Referral ratio roughly matches expected ICP mix (~70:30 qualified per rough source-doc signal, but collect real data)
  - Bucketed distributions are populated (no NaN or missing buckets — validates the bucket function)
- If any bucket shows >90% of traffic, the bucket boundaries need recalibration (follow-up, not slice 5).
- Slice 6 (referral-partner off-ramp UI) consumes the `case_type: 'referral'` flag — it upgrades the referral path from "same form, different heading" to a dedicated referral surface.

## Out of scope (confirmed)

- Pre-qualification on homepage `QuickQuote`, product-page `ContactForm`, or calculator `ToolLeadCaptureForm` surfaces.
- Server-side threshold enforcement on `/api/contact`.
- Migrating the legacy `qualify()` call in `PremiumContactForm:356` to `isPrequalified()` — stays as-is for this slice; slice 6 can revisit.
- Full referral-partner UI (slice 6).
- CRM / lead-scoring integration beyond the `case_type` flag.
