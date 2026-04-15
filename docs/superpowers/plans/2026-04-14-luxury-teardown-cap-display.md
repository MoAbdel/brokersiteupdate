# Luxury Teardown + Cap Display Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Kill the site's luxury/UHNW positioning (154 URLs: 13 redirected, 141 returned HTTP 410) and surface loan caps directly under the H1 on every product page, driven from a single source of truth.

**Architecture:** Add `lib/loan-caps.ts` as the single cap constant module. A new `<LoanCapSubheadline>` component renders the cap inline under the H1 on 5 product pages + homepage. URL dispositions live in `lib/disposition/luxury-urls.ts` (generated from the approved CSV at `docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv`) and are consumed by the existing `middleware.ts` — extended to redirect the 13 luxury URLs and return HTTP 410 for the 141 gone URLs. `next-sitemap.config.js` already auto-excludes middleware redirect sources; we extend it to also exclude the 410 list. `ProductLedCityTemplate` is built but unused this slice (consumed by slice 3).

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind, next-sitemap, `next/server` middleware. No test framework is installed, so verification uses `npm run lint`, `npm run typecheck`, `npm run build`, and targeted `curl`/`node` validation scripts.

**Spec:** `docs/superpowers/specs/2026-04-14-luxury-teardown-cap-display-design.md`
**Per-URL dispositions:** `docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv`

---

## Pre-flight

- [ ] **Step 1: Confirm working tree is clean**

Run: `git status`
Expected: clean working tree on `main` (or on a feature branch). If dirty, stash or commit before continuing.

- [ ] **Step 2: Confirm the spec CSV is present and readable**

Run: `node -e "console.log(require('fs').readFileSync('docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv','utf8').split('\n').length)"`
Expected: `155` (header + 154 rows)

---

## Task 1: Canonical loan caps module

**Files:**
- Create: `lib/loan-caps.ts`
- Create: `scripts/validate-loan-caps.mjs`

- [ ] **Step 1: Create `lib/loan-caps.ts`**

```ts
/**
 * Canonical loan caps. Single source of truth.
 * Update here and every consumer (component + page heroes) picks it up.
 */
export const LOAN_CAPS = {
  conventional: 3_500_000,
  jumbo: 3_500_000,
  heloc: 750_000,
  dscr: 2_000_000,
  cashOut: 3_500_000,
} as const;

export type LoanProduct = keyof typeof LOAN_CAPS;

const dollarFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function formatCap(product: LoanProduct): string {
  return dollarFormatter.format(LOAN_CAPS[product]);
}
```

- [ ] **Step 2: Create a lightweight validation script (no test framework is installed in this repo)**

Create `scripts/validate-loan-caps.mjs`:

```js
#!/usr/bin/env node
import { LOAN_CAPS, formatCap } from '../lib/loan-caps.ts';

const EXPECTED = {
  conventional: 3_500_000,
  jumbo: 3_500_000,
  heloc: 750_000,
  dscr: 2_000_000,
  cashOut: 3_500_000,
};

let failed = 0;
for (const [key, value] of Object.entries(EXPECTED)) {
  if (LOAN_CAPS[key] !== value) {
    console.error(`FAIL: LOAN_CAPS.${key} = ${LOAN_CAPS[key]}, expected ${value}`);
    failed++;
  }
}

const helocFormatted = formatCap('heloc');
if (helocFormatted !== '$750,000') {
  console.error(`FAIL: formatCap('heloc') = "${helocFormatted}", expected "$750,000"`);
  failed++;
}

if (failed > 0) {
  console.error(`\n${failed} failure(s)`);
  process.exit(1);
}
console.log('loan-caps: all checks passed');
```

Note: `node` can't import `.ts` directly. If this doesn't run, substitute with a type-check pass instead:

```bash
npx tsc --noEmit lib/loan-caps.ts
```

- [ ] **Step 3: Run typecheck to validate the module**

Run: `npm run typecheck`
Expected: passes with no errors introduced by `lib/loan-caps.ts`.

- [ ] **Step 4: Commit**

```bash
git add lib/loan-caps.ts scripts/validate-loan-caps.mjs
git commit -m "feat: canonical loan-caps module"
```

---

## Task 2: LoanCapSubheadline component

**Files:**
- Create: `components/LoanCapSubheadline.tsx`

- [ ] **Step 1: Create the component**

```tsx
import { formatCap, type LoanProduct } from '@/lib/loan-caps';

interface LoanCapSubheadlineProps {
  /** e.g., "HELOCs", "Jumbo Loans", "DSCR Investment Loans" */
  productLabel: string;
  /** Key in LOAN_CAPS to look up the maximum */
  product: LoanProduct;
  /** Regions served, e.g., ["California", "Washington"] */
  regions: string[];
  className?: string;
}

/**
 * Renders a small subheadline under the page H1 announcing the loan cap.
 * Example: "HELOCs up to $750,000 · California & Washington"
 */
export default function LoanCapSubheadline({
  productLabel,
  product,
  regions,
  className = '',
}: LoanCapSubheadlineProps) {
  const regionText =
    regions.length === 0
      ? ''
      : regions.length === 1
      ? regions[0]
      : regions.slice(0, -1).join(', ') + ' & ' + regions[regions.length - 1];

  return (
    <p
      className={`text-sm md:text-base text-slate-600 mt-2 ${className}`}
      data-testid="loan-cap-subheadline"
      aria-label={`${productLabel} up to ${formatCap(product)}`}
    >
      {productLabel} up to <span className="font-semibold">{formatCap(product)}</span>
      {regionText ? <span> · {regionText}</span> : null}
    </p>
  );
}
```

- [ ] **Step 2: Verify import path resolution and typecheck**

Run: `npm run typecheck`
Expected: no new errors.

- [ ] **Step 3: Commit**

```bash
git add components/LoanCapSubheadline.tsx
git commit -m "feat: LoanCapSubheadline component"
```

---

## Task 3: Wire cap subheadline into HELOC page hero

**Files:**
- Modify: `app/heloc-orange-county/page.tsx`

- [ ] **Step 1: Read the file to locate the H1 in the hero**

Run: `grep -n "h1\|<h1" app/heloc-orange-county/page.tsx | head -5`

Record the line number of the first `<h1>` closing tag (`</h1>`).

- [ ] **Step 2: Add the import**

At the top of `app/heloc-orange-county/page.tsx`, add (next to other component imports):

```tsx
import LoanCapSubheadline from '@/components/LoanCapSubheadline';
```

- [ ] **Step 3: Insert the subheadline immediately after the first `</h1>` in the hero**

```tsx
<LoanCapSubheadline
  productLabel="HELOCs"
  product="heloc"
  regions={['California', 'Washington']}
/>
```

- [ ] **Step 4: Build and verify visually**

Run: `npm run build && npm run dev`
Open `http://localhost:3000/heloc-orange-county` and confirm the subheadline *"HELOCs up to $750,000 · California & Washington"* appears directly under the H1 in the hero, visible without scrolling on a 1440px viewport and on a 375px mobile viewport.

- [ ] **Step 5: Commit**

```bash
git add app/heloc-orange-county/page.tsx
git commit -m "feat(heloc): surface $750K HELOC cap under H1"
```

---

## Task 4: Wire cap subheadline into Cash-Out Refinance page hero

**Files:**
- Modify: `app/cash-out-refinance/page.tsx`

- [ ] **Step 1: Locate H1 and add the import**

In `app/cash-out-refinance/page.tsx`, add at the top:

```tsx
import LoanCapSubheadline from '@/components/LoanCapSubheadline';
```

- [ ] **Step 2: Insert the subheadline immediately after the first `</h1>` in the hero**

```tsx
<LoanCapSubheadline
  productLabel="Cash-Out Refinance"
  product="cashOut"
  regions={['California', 'Washington']}
/>
```

- [ ] **Step 3: Visually verify at `/cash-out-refinance`**

Same process as Task 3, Step 4. Expected subheadline: *"Cash-Out Refinance up to $3,500,000 · California & Washington"*.

- [ ] **Step 4: Commit**

```bash
git add app/cash-out-refinance/page.tsx
git commit -m "feat(cash-out): surface $3.5M cash-out cap under H1"
```

---

## Task 5: Wire cap subheadline into Jumbo/Conventional page heroes

**Files:**
- Modify: `app/jumbo-loans-orange-county/page.tsx`
- Modify: `app/conventional-loans-orange-county/page.tsx`

- [ ] **Step 1: Jumbo page — add import + subheadline after H1**

```tsx
import LoanCapSubheadline from '@/components/LoanCapSubheadline';
// ...
<LoanCapSubheadline
  productLabel="Jumbo Loans"
  product="jumbo"
  regions={['California', 'Washington']}
/>
```

- [ ] **Step 2: Conventional page — same pattern**

```tsx
import LoanCapSubheadline from '@/components/LoanCapSubheadline';
// ...
<LoanCapSubheadline
  productLabel="Conventional Loans"
  product="conventional"
  regions={['California', 'Washington']}
/>
```

- [ ] **Step 3: Visually verify both pages**

Open `/jumbo-loans-orange-county` and `/conventional-loans-orange-county`, confirm *"Jumbo Loans up to $3,500,000 · California & Washington"* and *"Conventional Loans up to $3,500,000 · California & Washington"* render under each H1.

- [ ] **Step 4: Commit**

```bash
git add app/jumbo-loans-orange-county/page.tsx app/conventional-loans-orange-county/page.tsx
git commit -m "feat(jumbo,conventional): surface $3.5M cap under H1"
```

---

## Task 6: Wire cap subheadline into DSCR page hero

**Files:**
- Modify: `app/loan-programs/dscr-investment-loans/page.tsx`

The DSCR surface lives under `/loan-programs/dscr-investment-loans`, not a top-level route.

- [ ] **Step 1: Add import**

```tsx
import LoanCapSubheadline from '@/components/LoanCapSubheadline';
```

- [ ] **Step 2: Insert subheadline after first `</h1>` in the hero**

```tsx
<LoanCapSubheadline
  productLabel="DSCR Investment Loans"
  product="dscr"
  regions={['California', 'Washington']}
/>
```

- [ ] **Step 3: Verify at `/loan-programs/dscr-investment-loans`**

Expected subheadline: *"DSCR Investment Loans up to $2,000,000 · California & Washington"*.

- [ ] **Step 4: Commit**

```bash
git add app/loan-programs/dscr-investment-loans/page.tsx
git commit -m "feat(dscr): surface $2M DSCR cap under H1"
```

---

## Task 7: Wire cap subheadline into homepage hero

**Files:**
- Modify: `components/home/HeroSection.tsx`

Homepage uses the highest-cap product (Jumbo) as the default signal — it's the most inclusive number for generic mortgage searches.

- [ ] **Step 1: Add import**

```tsx
import LoanCapSubheadline from '@/components/LoanCapSubheadline';
```

- [ ] **Step 2: Insert subheadline after the first `</h1>`**

```tsx
<LoanCapSubheadline
  productLabel="Jumbo Loans"
  product="jumbo"
  regions={['California', 'Washington']}
/>
```

- [ ] **Step 3: Verify at `/`**

Expected: *"Jumbo Loans up to $3,500,000 · California & Washington"* directly under the homepage H1.

- [ ] **Step 4: Commit**

```bash
git add components/home/HeroSection.tsx
git commit -m "feat(home): surface $3.5M Jumbo cap under homepage H1"
```

---

## Task 8: Generate the disposition module from the approved CSV

**Files:**
- Create: `scripts/build-luxury-dispositions.mjs`
- Create: `lib/disposition/luxury-urls.ts`

Before running the generator, the user must have signed off on the CSV. If any `manual_override` column was added, the generator must respect it.

- [ ] **Step 1: Create the generator script**

```js
#!/usr/bin/env node
/**
 * Reads docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv
 * and emits lib/disposition/luxury-urls.ts as two typed exports:
 *   REDIRECTS: Array<{ from: string; to: string }>
 *   GONE_410:  string[]
 *
 * Pages with disposition="410" go into GONE_410.
 * Pages with disposition="redirect" AND a non-empty redirect_target go into REDIRECTS.
 * The single __KEEP__ row (Newport Beach property-tax estimator) is skipped entirely.
 */
import fs from 'node:fs';
import path from 'node:path';

const CSV = 'docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv';
const OUT = 'lib/disposition/luxury-urls.ts';

const lines = fs.readFileSync(CSV, 'utf8').split('\n').slice(1).filter(Boolean);
const redirects = [];
const gone = [];
const kept = [];

for (const line of lines) {
  const [url, , , disposition, target] = line.split(',');
  if (target === '__KEEP__') {
    kept.push(url);
    continue;
  }
  if (disposition === 'redirect' && target) {
    redirects.push({ from: url, to: target });
  } else if (disposition === '410') {
    gone.push(url);
  }
}

const body = `/**
 * AUTO-GENERATED by scripts/build-luxury-dispositions.mjs.
 * Do not edit by hand. Source of truth:
 *   docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv
 *
 * Generated: ${new Date().toISOString()}
 * Kept (not redirected/gone): ${kept.length} URL(s) — see CSV __KEEP__ rows
 */

export interface LuxuryRedirect { from: string; to: string; }

export const REDIRECTS: readonly LuxuryRedirect[] = ${JSON.stringify(redirects, null, 2)};

export const GONE_410: readonly string[] = ${JSON.stringify(gone, null, 2)};
`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, body);
console.log(`Wrote ${OUT}`);
console.log(`  REDIRECTS: ${redirects.length}`);
console.log(`  GONE_410:  ${gone.length}`);
console.log(`  KEPT:      ${kept.length}`);
```

- [ ] **Step 2: Run the generator**

Run: `node scripts/build-luxury-dispositions.mjs`
Expected output:
```
Wrote lib/disposition/luxury-urls.ts
  REDIRECTS: 13
  GONE_410:  141
  KEPT:      1
```

- [ ] **Step 3: Typecheck the generated file**

Run: `npm run typecheck`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add scripts/build-luxury-dispositions.mjs lib/disposition/luxury-urls.ts
git commit -m "feat: generate luxury URL disposition module from spec CSV"
```

---

## Task 9: Extend middleware to serve 410 for GONE_410 and 301 for REDIRECTS

**Files:**
- Modify: `middleware.ts`

The existing middleware already handles many redirects via `Record<string,string>` maps at `middleware.ts:16-151`. We extend it by importing the generated disposition module and checking it *after* the existing `strategicRedirectTarget` check but *before* the apply-URL redirect.

- [ ] **Step 1: Read the file and locate the insertion point**

Run: `grep -n "strategicRedirectTarget\|APPLY_URL" middleware.ts`
Expected: the check that assigns `redirectTarget` is near `middleware.ts:153-155`; the 410 check goes *before* that, the luxury-redirect map merges *into* it.

- [ ] **Step 2: Add the import at the top**

In `middleware.ts`, after the existing imports:

```ts
import { REDIRECTS as LUXURY_REDIRECTS, GONE_410 } from '@/lib/disposition/luxury-urls';
```

- [ ] **Step 3: Build a fast-lookup Set for 410s and a Map for luxury redirects (outside the handler body, at module scope)**

At the top of `middleware.ts`, below the imports:

```ts
const GONE_410_SET = new Set<string>(GONE_410);
const LUXURY_REDIRECT_MAP = new Map<string, string>(
  LUXURY_REDIRECTS.map((r) => [r.from, r.to])
);
```

- [ ] **Step 4: Add the 410 check inside the `middleware()` function, immediately before the `strategicRedirectTarget` lookup**

Insert at `middleware.ts` just before the line `const strategicRedirectTarget = getRedirectTarget(pathname);`:

```ts
if (GONE_410_SET.has(pathname)) {
  return new NextResponse(null, { status: 410 });
}

const luxuryRedirectTarget = LUXURY_REDIRECT_MAP.get(pathname);
if (luxuryRedirectTarget) {
  const redirectUrl = new URL(`https://www.mothebroker.com${luxuryRedirectTarget}${search}`);
  return NextResponse.redirect(redirectUrl, 301);
}
```

- [ ] **Step 5: Build and run dev**

Run: `npm run build && npm run dev`
Expected: build succeeds.

- [ ] **Step 6: Verify 410 behavior**

Run (with dev server running):
```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/blog/reverse-mortgage-peninsula-ultra-luxury-2026
```
Expected: `410`

- [ ] **Step 7: Verify redirect behavior**

Run:
```bash
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" http://localhost:3000/blog/home-equity-suburban-king-county-2026
```
Expected: `301 https://www.mothebroker.com/areas/washington` (or whatever the CSV mapped it to).

- [ ] **Step 8: Verify an untouched URL still works**

Run:
```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
```
Expected: `200`

- [ ] **Step 9: Commit**

```bash
git add middleware.ts
git commit -m "feat(middleware): 410 luxury URLs + 301 luxury redirects"
```

---

## Task 10: Exclude 410 URLs from the generated sitemap

**Files:**
- Modify: `next-sitemap.config.js`

The sitemap config already parses `middleware.ts` for redirect sources and excludes them. But our 410 list is in `lib/disposition/luxury-urls.ts`, not as string-keys in middleware, so it's not auto-excluded. We add an explicit import.

- [ ] **Step 1: Read current exclusion logic**

Run: `grep -n "exclude\|middlewareRedirectSources\|shouldExclude" next-sitemap.config.js`

Identify where `middlewareRedirectSources` is used to filter the sitemap output (likely in an `exclude: (path) => ...` callback or a `transform`).

- [ ] **Step 2: Import the GONE_410 list**

`next-sitemap.config.js` is CommonJS; the disposition module is TypeScript/ESM. Since the config runs at build time after Next has compiled TS to JS, require it from the build output is fragile. Instead, re-parse the same CSV directly:

At the top of `next-sitemap.config.js`, after the existing requires:

```js
const LUXURY_GONE_410 = (() => {
  try {
    const csvPath = path.join(process.cwd(), 'docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv');
    const lines = fsSync.readFileSync(csvPath, 'utf8').split('\n').slice(1).filter(Boolean);
    const gone = new Set();
    for (const line of lines) {
      const parts = line.split(',');
      const url = parts[0];
      const disposition = parts[3];
      if (disposition === '410' && url) gone.add(url);
    }
    return gone;
  } catch {
    return new Set();
  }
})();
```

- [ ] **Step 3: Add LUXURY_GONE_410 to the exclusion check**

Find the spot where `middlewareRedirectSources.has(...)` is used and add a sibling check `|| LUXURY_GONE_410.has(normalizedPath)` (use whatever variable holds the current URL being evaluated).

If the current exclude logic uses a function form, extend it:

```js
// before
if (middlewareRedirectSources.has(normalizedPath)) return false;
// after
if (middlewareRedirectSources.has(normalizedPath)) return false;
if (LUXURY_GONE_410.has(normalizedPath)) return false;
```

- [ ] **Step 4: Regenerate the sitemap**

Run: `npm run sitemap`
Expected: regenerates `public/sitemap*.xml`.

- [ ] **Step 5: Verify a 410 URL is NOT in the sitemap**

Run:
```bash
grep -c "reverse-mortgage-peninsula-ultra-luxury-2026" public/sitemap*.xml
```
Expected: `0` across all sitemap files.

- [ ] **Step 6: Verify a live URL IS still in the sitemap**

Run:
```bash
grep -c "heloc-orange-county" public/sitemap*.xml
```
Expected: `>=1`.

- [ ] **Step 7: Commit**

```bash
git add next-sitemap.config.js public/sitemap*.xml
git commit -m "chore(sitemap): exclude 141 luxury 410 URLs from generated sitemap"
```

---

## Task 11: Scaffold ProductLedCityTemplate (for slice 3)

**Files:**
- Create: `components/templates/ProductLedCityTemplate.tsx`
- Create: `lib/city-page-data/README.md`

This template is built now but has zero consumers this slice. Slice 3 populates `lib/city-page-data/` and wires pages to it.

- [ ] **Step 1: Create the template**

```tsx
import LoanCapSubheadline from '@/components/LoanCapSubheadline';
import { LOAN_CAPS, formatCap } from '@/lib/loan-caps';

export interface CityPageData {
  citySlug: string;
  cityName: string;
  state: 'California' | 'Washington';
  midTierNeighborhoods: Array<{ name: string; blurb: string }>;
  typicalHomeValueRange: { min: number; max: number };
  faqOverrides?: Array<{ question: string; answer: string }>;
}

interface Props {
  city: CityPageData;
}

/**
 * Product-led city page template.
 * Hero → product grid (HELOC, Cash-Out, Conventional, DSCR) → neighborhoods → FAQ → CTA.
 * Caps pulled from @/lib/loan-caps — authors do not restate them.
 */
export default function ProductLedCityTemplate({ city }: Props) {
  const regions = [city.state];

  return (
    <main>
      <section className="hero">
        <h1 className="text-3xl md:text-5xl font-bold">
          {city.cityName} Mortgage Broker
        </h1>
        <LoanCapSubheadline
          productLabel="Jumbo Loans"
          product="jumbo"
          regions={regions}
        />
      </section>

      <section className="products grid gap-4 md:grid-cols-2 mt-12">
        <ProductCard title="HELOC" maxDisplay={formatCap('heloc')} href="/heloc-orange-county" />
        <ProductCard title="Cash-Out Refinance" maxDisplay={formatCap('cashOut')} href="/cash-out-refinance" />
        <ProductCard title="Conventional" maxDisplay={formatCap('conventional')} href="/conventional-loans-orange-county" />
        <ProductCard title="DSCR Investment" maxDisplay={formatCap('dscr')} href="/loan-programs/dscr-investment-loans" />
      </section>

      <section className="neighborhoods mt-12">
        <h2 className="text-2xl font-semibold">{city.cityName} Neighborhoods We Serve</h2>
        <ul>
          {city.midTierNeighborhoods.map((n) => (
            <li key={n.name}>
              <strong>{n.name}</strong> — {n.blurb}
            </li>
          ))}
        </ul>
      </section>

      {city.faqOverrides && city.faqOverrides.length > 0 && (
        <section className="faq mt-12">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          {city.faqOverrides.map((f) => (
            <details key={f.question}>
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </section>
      )}
    </main>
  );
}

interface ProductCardProps { title: string; maxDisplay: string; href: string; }
function ProductCard({ title, maxDisplay, href }: ProductCardProps) {
  return (
    <a href={href} className="block border rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-slate-600">Up to {maxDisplay}</p>
    </a>
  );
}
```

- [ ] **Step 2: Create the city-data README as a placeholder**

Create `lib/city-page-data/README.md`:

```markdown
# City page data

Per-city data files consumed by `components/templates/ProductLedCityTemplate.tsx`.
Populated in slice 3 (new mid-tier city pages for CA/WA).
```

- [ ] **Step 3: Typecheck**

Run: `npm run typecheck`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/templates/ProductLedCityTemplate.tsx lib/city-page-data/README.md
git commit -m "feat: ProductLedCityTemplate scaffold (unused until slice 3)"
```

---

## Task 12: Copy sweep — the 6 modified pages only

**Files:**
- Modify (as-needed): `app/heloc-orange-county/page.tsx`, `app/cash-out-refinance/page.tsx`, `app/jumbo-loans-orange-county/page.tsx`, `app/conventional-loans-orange-county/page.tsx`, `app/loan-programs/dscr-investment-loans/page.tsx`, `components/home/HeroSection.tsx` (+ `app/page.tsx` if it inlines hero copy)

Per spec: only sweep pages being modified in this slice. Unrelated luxury-language lives elsewhere; slice 4 handles the rest.

- [ ] **Step 1: Grep the 6 pages for luxury markers**

Run:
```bash
grep -nE "luxury|ultra-high-net-worth|UHNW|waterfront specialist|\\\$4M|\\\$10M|\\\$15M|Balboa Island|Lido Isle|Newport Coast" \
  app/heloc-orange-county/page.tsx \
  app/cash-out-refinance/page.tsx \
  app/jumbo-loans-orange-county/page.tsx \
  app/conventional-loans-orange-county/page.tsx \
  app/loan-programs/dscr-investment-loans/page.tsx \
  components/home/HeroSection.tsx \
  app/page.tsx
```

Record each match with file + line.

- [ ] **Step 2: Rewrite each match in place**

For each match, replace luxury framing with mid-tier framing:
- *"luxury waterfront specialist"* → remove or rewrite to *"serving California and Washington homeowners"*
- *"$4M–$15M properties"* → remove or rewrite to *"home values $500K–$1.5M typical"*
- *"ultra-high-net-worth"* / *"UHNW"* → remove entirely
- *"Balboa Island"*, *"Lido Isle"*, *"Newport Coast"* → remove only if used as a positioning signal; keep as geographic reference if appropriate for mid-tier context

If the rewrite for a match requires judgment (it's not a straight replacement), stop and ask the user.

- [ ] **Step 3: Re-run the grep; it must return zero hits**

Run the same grep as Step 1.
Expected: zero matches.

- [ ] **Step 4: Build to confirm nothing broke**

Run: `npm run build`
Expected: passes.

- [ ] **Step 5: Commit**

```bash
git add app/heloc-orange-county/page.tsx app/cash-out-refinance/page.tsx app/jumbo-loans-orange-county/page.tsx app/conventional-loans-orange-county/page.tsx app/loan-programs/dscr-investment-loans/page.tsx components/home/HeroSection.tsx app/page.tsx
git commit -m "chore(copy): remove luxury/UHNW language from modified pages"
```

---

## Task 13: Full verification pass

- [ ] **Step 1: Type check passes**

Run: `npm run typecheck`
Expected: zero errors.

- [ ] **Step 2: Lint passes**

Run: `npm run lint`
Expected: zero errors (warnings OK if pre-existing).

- [ ] **Step 3: Full production build passes**

Run: `npm run build`
Expected: succeeds and writes `.next/`.

- [ ] **Step 4: Dev-server smoke on all 6 modified pages**

Run: `npm run dev`, then open each in a browser at both 375px and 1440px:
- `/`
- `/heloc-orange-county`
- `/cash-out-refinance`
- `/jumbo-loans-orange-county`
- `/conventional-loans-orange-county`
- `/loan-programs/dscr-investment-loans`

Each must show the cap subheadline visible in the hero without scrolling. Record any that fail.

- [ ] **Step 5: 410 spot-check (10 random URLs from the 141 list)**

Run:
```bash
node -e '
const { GONE_410 } = require("./lib/disposition/luxury-urls.ts");
const sample = [...GONE_410].sort(() => Math.random() - 0.5).slice(0, 10);
console.log(sample.join("\n"));
' > /tmp/gone-sample.txt
while read url; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000${url}")
  echo "$code $url"
done < /tmp/gone-sample.txt
```

Note: the `node -e` line won't import a `.ts` file directly — if it fails, extract 10 URLs from `docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv` where `disposition=410`, save to `/tmp/gone-sample.txt` manually, and run the while-loop.

Expected: every line prints `410 <url>`.

- [ ] **Step 6: Redirect spot-check — all 13**

Run:
```bash
node scripts/build-luxury-dispositions.mjs  # re-run to ensure fresh
# Then from the CSV:
awk -F',' '$4=="redirect" {print $1","$5}' docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv | while IFS=, read from to; do
  code=$(curl -s -o /dev/null -w "%{http_code} %{redirect_url}" "http://localhost:3000${from}")
  echo "$from -> $to :: $code"
done
```

Expected: each line prints `301` with the redirect_url ending in the expected `to` path.

- [ ] **Step 7: Sitemap exclusion check**

```bash
grep -l "peninsula-ultra-luxury\|suburban-king-county\|silicon-valley\|bay-area" public/sitemap*.xml
```

The 13 redirected URLs should NOT appear as sitemap sources (their targets do appear, which is fine). The 141 410'd URLs should NOT appear.

If any 410'd or redirected source URL appears in the sitemap, Task 10 is incomplete — fix and re-verify.

- [ ] **Step 8: Final commit if any fixes landed during verification**

```bash
git add -A
git commit -m "chore: verification fixes"
```

---

## Post-merge / deployment (handled outside this plan)

- Deploy preview, run verification steps 4–7 against the preview URL
- Promote to production
- Submit updated sitemap to GSC (`npm run gsc:sitemap`) and IndexNow (`npm run indexnow:submit`)
- Monitor GSC Coverage for ~14 days: 410'd URLs should drop from "Indexed" to "Not indexed — 410", redirected URLs should show "Page with redirect"
- Separately: restore GSC service-account access to `sc-domain:mothebroker.com` (currently 403) — prerequisite for slice 3 data validation

## Out of scope (confirmed)

- Pre-qualification widget → slice 5
- Referral-partner off-ramp → slice 5/6
- New mid-tier city pages for CA/WA → slice 3 (template ships here, cities later)
- Example scenario rewrites except on the 6 pages swept in Task 12 → slice 2
- Site-wide luxury-language sweep on pages not touched here → slice 4
