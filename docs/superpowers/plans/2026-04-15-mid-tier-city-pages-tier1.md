# Mid-Tier City Pages — Tier 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) for Tasks 1, 2, 13, 14 (infrastructure + verification); Tasks 3–12 (per-city authoring) run INLINE in the controller session because each has a user approval gate. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship 10 mid-tier city pages at `/areas/<slug>`, each consuming the extended `ProductLedCityTemplate` with 300–500 words of researched prose and real neighborhood data, passing the slice-2+4 luxury taxonomy.

**Architecture:** Extend the dormant slice-1 `ProductLedCityTemplate` with a prose section and nearby-cities linking. Author one `lib/city-page-data/<slug>.ts` file per city, each a typed `CityPageData` const. Thin `app/areas/<slug>/page.tsx` files import the data and render the template. Content integrity validated by `scripts/validate-city-data.mjs` (no test framework).

**Tech Stack:** Next.js 15 App Router, TypeScript strict, Tailwind v3.4.17. Research via WebFetch of public sources (Redfin, Zillow, Wikipedia, local news). No test framework — verification is typecheck/lint/build/validator-script/curl.

**Spec:** `docs/superpowers/specs/2026-04-15-mid-tier-city-pages-tier1-design.md`

**Tier 1 cities (from `scripts/rank-tier1-cities.mjs`):** Spokane, Riverside, Long Beach, Fresno, Elk Grove, Carlsbad, Roseville, San Bernardino, Murrieta, Tacoma.

---

## Per-City Procedure (reference — used by Tasks 3–12)

Each per-city task follows this procedure. Tasks 3–12 supply the city-specific research targets; the procedure itself is identical.

### Step R1 — GSC query pull (informs FAQ + meta focus)

```bash
node -e "
const fs = require('fs');
const q = JSON.parse(fs.readFileSync('reports/gsc-query-performance-20260115_20260415.json', 'utf8'));
const rows = Array.isArray(q) ? q : (q.rows || []);
const needle = '<city-name-lowercase>';
const hits = rows
  .filter(r => {
    const qs = (r.keys?.[1] || r.query || '').toLowerCase();
    return new RegExp('\\\\b' + needle + '\\\\b').test(qs);
  })
  .map(r => ({ query: r.keys?.[1] || r.query, impressions: r.impressions, clicks: r.clicks, position: r.position }))
  .sort((a,b) => b.impressions - a.impressions)
  .slice(0, 10);
console.table(hits);
"
```

Record the top 5 queries. These inform the `faqOverrides` (answer the questions users are already asking) and the `metaDescription` emphasis.

### Step R2 — WebFetch public sources (2-source minimum per factual claim)

For each city, fetch:
- `https://www.redfin.com/city/{redfin-city-id}/<State>/<City>/housing-market` — median sale price, price band, sale pace
- `https://en.wikipedia.org/wiki/<City>,_<State>` — demographics, neighborhoods, economy
- One supplementary source for current-market context (e.g., a local news result for "housing market [city] 2026")

Record: median home value, 3–5 real neighborhood names, dominant employers/industries, population, typical buyer profile hints. If a source page is unreachable, substitute (e.g., Zillow area page instead of Redfin). Do NOT proceed to drafting until at least 2 sources are captured.

### Step R3 — Draft `lib/city-page-data/<slug>.ts`

```ts
// lib/city-page-data/<slug>.ts
import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const <slugCamel>: CityPageData = {
  citySlug: '<slug>',
  cityName: '<City Name>',
  state: '<California|Washington>',
  region: '<Region label>',
  metaTitle: '<City Name> Mortgage Broker | Rates & Loan Programs',
  metaDescription: '<140-160 char description mentioning state + products + phone (949) 579-2057>',
  midTierNeighborhoods: [
    { name: '<Neighborhood 1>', blurb: '<one-line blurb with a researched fact>' },
    { name: '<Neighborhood 2>', blurb: '<...>' },
    { name: '<Neighborhood 3>', blurb: '<...>' },
    { name: '<Neighborhood 4>', blurb: '<...>' },
    { name: '<Neighborhood 5>', blurb: '<...>' },
  ],
  typicalHomeValueRange: { min: <min>, max: <max> },
  localMarketProse: [
    '<Paragraph 1: local economy snapshot — major employers, population trend, general housing market character. ~100–150 words.>',
    '<Paragraph 2: dominant property types + buyer profile — condos vs SFR, first-time-buyer share, typical down payment profile. ~100–150 words.>',
    '<Paragraph 3: what brings buyers to this market — job growth, lifestyle, relative affordability vs nearby markets. ~100–150 words.>',
  ].join('\n\n'),
  faqOverrides: [
    { question: '<top GSC query rewritten as question>', answer: '<2–3 sentence answer>' },
    { question: '<second GSC query rewritten>', answer: '<...>' },
    { question: '<third GSC query rewritten>', answer: '<...>' },
  ],
};
```

Replace `<slugCamel>` with the camelCase version of the slug (e.g., `spokane`, `sanBernardino`, `longBeach`).

### Step R4 — Draft `app/areas/<slug>/page.tsx`

```tsx
import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { <slugCamel> } from '@/lib/city-page-data/<slug>';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: <slugCamel>.metaTitle,
  description: <slugCamel>.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${<slugCamel>.citySlug}` },
};

export default function <PascalCity>MortgageBrokerPage() {
  return <ProductLedCityTemplate city={<slugCamel>} />;
}
```

### Step R5 — Add to barrel

Append to `lib/city-page-data/index.ts`:

```ts
export { <slugCamel> } from './<slug>';
```

### Step R6 — Validate

```bash
npm run typecheck
node scripts/validate-city-data.mjs
npm run build
```

All three must pass.

### Step R7 — Present summary to user (approval gate)

Post a summary to the controller chat:

```
**<City Name>** (<region>)
- median $XXK (source: <URL>)
- top 3 GSC queries: <list>
- neighborhoods: <5 names>
- prose lede (first 15 words): "<...>"
- faqOverrides: <3 questions>

Approve? (yes / amend / swap city)
```

WAIT for user response. If "yes", proceed to R8. If "amend", apply changes and re-present. If "swap", drop this city and pick a replacement from the deferred list (update the plan's remaining tasks accordingly).

### Step R8 — Commit

```bash
git add lib/city-page-data/<slug>.ts lib/city-page-data/index.ts app/areas/<slug>/page.tsx
git commit -m "feat(areas): add /areas/<slug> page for <City Name>"
```

Husky runs ESLint + tsc on staged files. If blocked, fix and create a NEW commit (never --amend, never --no-verify).

---

## Pre-flight

- [ ] **Step 1: Confirm working tree is clean**

Run: `git status`
Expected: clean tree on `main` (or on a feature branch for this slice).

- [ ] **Step 2: Confirm prior slices live in prod (quick regression bait)**

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.mothebroker.com/contact
curl -s https://www.mothebroker.com/heloc-orange-county | grep -c '\$650,000'
curl -s -o /dev/null -w "%{http_code}\n" https://www.mothebroker.com/luxury-markets/ultra-luxury-estates-mortgage-broker
```
Expected: `200`, `>=1`, `410`.

- [ ] **Step 3: Confirm GSC data is fresh**

Run: `ls -l reports/gsc-query-performance-20260115_20260415.json`
Expected: file exists. If not, run `npm run gsc:export-queries` first.

---

## Task 1: Extend `ProductLedCityTemplate` + `CityPageData` + validator

**Files:**
- Modify: `components/templates/ProductLedCityTemplate.tsx`
- Create: `lib/city-page-data/index.ts`
- Create: `scripts/validate-city-data.mjs`
- Modify: `lib/city-page-data/README.md` (update stub with authoring guide)

- [ ] **Step 1: Extend `CityPageData` interface and template**

Replace the current contents of `components/templates/ProductLedCityTemplate.tsx` with:

```tsx
import LoanCapSubheadline from '@/components/LoanCapSubheadline';
import { formatCap } from '@/lib/loan-caps';

export interface CityPageData {
  citySlug: string;
  cityName: string;
  state: 'California' | 'Washington';
  region: string;
  metaTitle: string;
  metaDescription: string;
  midTierNeighborhoods: Array<{ name: string; blurb: string }>;
  typicalHomeValueRange: { min: number; max: number };
  localMarketProse: string;
  faqOverrides?: Array<{ question: string; answer: string }>;
}

interface Props {
  city: CityPageData;
  nearbyCities?: Array<{ citySlug: string; cityName: string; state: string }>;
}

const dollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

/**
 * Product-led city page template.
 * Hero → product grid → neighborhoods → local-market prose → FAQ → nearby cities → CTA.
 * Caps pulled from @/lib/loan-caps — authors do not restate them.
 */
export default function ProductLedCityTemplate({ city, nearbyCities = [] }: Props) {
  const regions = [city.state];
  const proseParagraphs = city.localMarketProse.split(/\n\n+/).filter(Boolean);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 md:py-12">
      <section className="hero">
        <h1 className="text-3xl md:text-5xl font-bold">
          {city.cityName} Mortgage Broker
        </h1>
        <LoanCapSubheadline
          productLabel="Jumbo Loans"
          product="jumbo"
          regions={regions}
        />
        <p className="mt-4 text-slate-700">
          Typical home values in {city.cityName}: {dollar.format(city.typicalHomeValueRange.min)}–{dollar.format(city.typicalHomeValueRange.max)}.
        </p>
      </section>

      <section className="products grid gap-4 md:grid-cols-2 mt-12">
        <ProductCard title="HELOC" maxDisplay={formatCap('heloc')} href="/heloc-orange-county" />
        <ProductCard title="Cash-Out Refinance" maxDisplay={formatCap('cashOut')} href="/cash-out-refinance" />
        <ProductCard title="Conventional" maxDisplay={formatCap('conventional')} href="/conventional-loans-orange-county" />
        <ProductCard title="DSCR Investment" maxDisplay={formatCap('dscr')} href="/loan-programs/dscr-investment-loans" />
      </section>

      <section className="neighborhoods mt-12">
        <h2 className="text-2xl font-semibold">{city.cityName} Neighborhoods We Serve</h2>
        <ul className="mt-4 space-y-2">
          {city.midTierNeighborhoods.map((n) => (
            <li key={n.name}>
              <strong>{n.name}</strong> — {n.blurb}
            </li>
          ))}
        </ul>
      </section>

      <section className="local-market mt-12">
        <h2 className="text-2xl font-semibold">Mortgage landscape in {city.cityName}</h2>
        <div className="mt-4 space-y-4 text-slate-700">
          {proseParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {city.faqOverrides && city.faqOverrides.length > 0 && (
        <section className="faq mt-12">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-3">
            {city.faqOverrides.map((f) => (
              <details key={f.question} className="border border-slate-200 rounded p-4">
                <summary className="font-medium cursor-pointer">{f.question}</summary>
                <p className="mt-2 text-slate-700">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {nearbyCities.length > 0 && (
        <section className="nearby-cities mt-12">
          <h2 className="text-2xl font-semibold">Nearby cities we serve</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {nearbyCities.map((n) => (
              <li key={n.citySlug}>
                <a href={`/areas/${n.citySlug}`} className="text-blue-700 hover:underline">
                  {n.cityName}, {n.state}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="cta mt-12 rounded-lg bg-blue-50 p-6 md:p-8 text-center">
        <h2 className="text-2xl font-semibold">Ready to start your {city.cityName} mortgage?</h2>
        <p className="mt-2 text-slate-700">
          Licensed in {city.state}. Call or text (949) 579-2057 or get started online.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-blue-700 text-white font-semibold rounded px-6 py-3 hover:bg-blue-800 transition-colors"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}

interface ProductCardProps { title: string; maxDisplay: string; href: string; }
function ProductCard({ title, maxDisplay, href }: ProductCardProps) {
  return (
    <a href={href} className="block border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-slate-600">Up to {maxDisplay}</p>
    </a>
  );
}
```

- [ ] **Step 2: Create barrel file `lib/city-page-data/index.ts`**

```ts
// Barrel export for all Tier 1 city-page-data modules.
// Per-city export appended as each city's TS file lands.
// Consumed by scripts/validate-city-data.mjs for iteration and (optionally)
// by a future sitemap customization.

// Exports appended here by Tasks 3–12:
// export { spokane } from './spokane';
// export { riverside } from './riverside';
// etc.
export {};
```

- [ ] **Step 3: Create `scripts/validate-city-data.mjs`**

```js
#!/usr/bin/env node
/**
 * Validates all lib/city-page-data/*.ts files against the CityPageData contract.
 * Node can't import .ts directly; parses each file as text and asserts:
 *   - metaTitle.length <= 60
 *   - metaDescription.length between 140 and 160
 *   - midTierNeighborhoods.length >= 3
 *   - typicalHomeValueRange.min < typicalHomeValueRange.max
 *   - localMarketProse word count >= 280
 *   - localMarketProse has zero slice-2+4 hard-ban tokens
 *   - citySlug matches the filename stem
 *   - state is 'California' or 'Washington'
 */
import fs from 'node:fs';
import path from 'node:path';

const DIR = 'lib/city-page-data';
const IGNORE = new Set(['index.ts', 'README.md']);

const HARD_BAN = [
  /UHNW/i,
  /ultra-high-net-worth/i,
  /ultra-luxury/i,
  /waterfront specialist/i,
  /luxury waterfront/i,
  /luxury specialist/i,
];

function extractString(src, key) {
  const re = new RegExp(`${key}\\s*:\\s*(['"\`])((?:\\\\.|(?!\\1)[\\s\\S])*)\\1`, 'm');
  const m = src.match(re);
  return m ? m[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"') : null;
}

function extractProse(src) {
  // localMarketProse is constructed with: [...].join('\n\n')
  // Capture the array contents, strip wrapping quotes, join with \n\n.
  const arrayMatch = src.match(/localMarketProse\s*:\s*\[([\s\S]*?)\]\.join\('\\n\\n'\)/);
  if (arrayMatch) {
    const body = arrayMatch[1];
    const parts = [];
    const partRe = /'((?:\\.|[^'\\])*)'/g;
    let m;
    while ((m = partRe.exec(body)) !== null) {
      parts.push(m[1].replace(/\\'/g, "'"));
    }
    return parts.join('\n\n');
  }
  // Fallback — localMarketProse: '...' single-string form
  return extractString(src, 'localMarketProse');
}

function countWords(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function extractNumberKey(src, key) {
  const re = new RegExp(`${key}\\s*:\\s*([\\d_]+)`, 'm');
  const m = src.match(re);
  return m ? Number(m[1].replace(/_/g, '')) : null;
}

function countNeighborhoods(src) {
  const arrayMatch = src.match(/midTierNeighborhoods\s*:\s*\[([\s\S]*?)\]/);
  if (!arrayMatch) return 0;
  const body = arrayMatch[1];
  return (body.match(/\{\s*name\s*:/g) || []).length;
}

const files = fs.readdirSync(DIR).filter((f) => !IGNORE.has(f) && f.endsWith('.ts'));
let failed = 0;

for (const file of files) {
  const full = path.join(DIR, file);
  const src = fs.readFileSync(full, 'utf8');
  const slug = file.replace(/\.ts$/, '');
  const errors = [];

  const citySlug = extractString(src, 'citySlug');
  if (citySlug !== slug) {
    errors.push(`citySlug "${citySlug}" != filename stem "${slug}"`);
  }

  const state = extractString(src, 'state');
  if (state !== 'California' && state !== 'Washington') {
    errors.push(`state must be California or Washington, got "${state}"`);
  }

  const metaTitle = extractString(src, 'metaTitle') || '';
  if (metaTitle.length === 0) errors.push('metaTitle missing');
  else if (metaTitle.length > 60) errors.push(`metaTitle length ${metaTitle.length} > 60`);

  const metaDescription = extractString(src, 'metaDescription') || '';
  if (metaDescription.length < 140 || metaDescription.length > 160) {
    errors.push(`metaDescription length ${metaDescription.length} not in [140,160]`);
  }

  const neighborhoodCount = countNeighborhoods(src);
  if (neighborhoodCount < 3) {
    errors.push(`midTierNeighborhoods has ${neighborhoodCount} entries, need >= 3`);
  }

  const min = extractNumberKey(src, 'min');
  const max = extractNumberKey(src, 'max');
  if (min == null || max == null) errors.push('typicalHomeValueRange missing min/max');
  else if (min >= max) errors.push(`typicalHomeValueRange.min ${min} >= max ${max}`);

  const prose = extractProse(src) || '';
  const wc = countWords(prose);
  if (wc < 280) errors.push(`localMarketProse word count ${wc} < 280`);

  for (const re of HARD_BAN) {
    if (re.test(prose) || re.test(metaTitle) || re.test(metaDescription)) {
      errors.push(`hard-ban token matches: ${re}`);
    }
  }

  if (errors.length > 0) {
    failed++;
    console.error(`FAIL ${file}:`);
    errors.forEach((e) => console.error(`  - ${e}`));
  } else {
    console.log(`PASS ${file} (title ${metaTitle.length}, desc ${metaDescription.length}, neighborhoods ${neighborhoodCount}, prose ${wc} words)`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} file(s) failed validation`);
  process.exit(1);
}
console.log(`\n${files.length} file(s) passed`);
```

- [ ] **Step 4: Update `lib/city-page-data/README.md`**

Replace whatever's there with:

```markdown
# City page data

Per-city data files consumed by `components/templates/ProductLedCityTemplate.tsx`.
One file per city, exporting a typed `CityPageData` const. The barrel `index.ts`
re-exports everything for iteration.

See `docs/superpowers/specs/2026-04-15-mid-tier-city-pages-tier1-design.md`
for the authoring workflow and content constraints.

## Validation

`node scripts/validate-city-data.mjs` walks every file in this directory
(excluding `index.ts` and `README.md`) and asserts the `CityPageData`
contract — meta length, prose word count, hard-ban tokens, etc.

## Adding a city

1. Research (Redfin/Zillow, Wikipedia, 1 local news) — 2 source minimum per claim
2. Create `lib/city-page-data/<slug>.ts` with a typed `CityPageData` export
3. Create `app/areas/<slug>/page.tsx` rendering `<ProductLedCityTemplate city={...} />`
4. Append to `index.ts`
5. Run `node scripts/validate-city-data.mjs` and `npm run build`
6. Present summary for user approval before commit
```

- [ ] **Step 5: Run typecheck + validator + build**

```bash
npm run typecheck
node scripts/validate-city-data.mjs
npm run build
```

Expected: typecheck clean. Validator reports `0 file(s) passed` (no city files yet; that's fine). Build clean.

- [ ] **Step 6: Commit**

```bash
git add components/templates/ProductLedCityTemplate.tsx lib/city-page-data/index.ts lib/city-page-data/README.md scripts/validate-city-data.mjs
git commit -m "feat(city-pages): extend template with prose + nearby-cities + content validator"
```

Husky may run; fix + NEW commit if blocked (never --amend, never --no-verify).

---

## Tasks 3–12: Per-city authoring

Each task runs the Per-City Procedure at the top of this plan against one city's research targets. Tasks execute sequentially — DO NOT start Task N+1 until Task N has user approval and is committed.

### Task 3: Spokane, WA

- [ ] **Step 1: Run Steps R1–R8 of Per-City Procedure**

- City: `Spokane`, state `Washington`, region `Washington`
- slug: `spokane`, camelCase: `spokane`, PascalCase: `Spokane`
- GSC needle: `spokane`
- Research targets:
  - `https://www.redfin.com/city/17154/WA/Spokane/housing-market`
  - `https://en.wikipedia.org/wiki/Spokane,_Washington`
  - One local news fetch: search "Spokane housing market 2026"
- Expected commit: `feat(areas): add /areas/spokane page for Spokane`

### Task 4: Riverside, CA

- [ ] **Step 1: Run Steps R1–R8 of Per-City Procedure**

- City: `Riverside`, state `California`, region `Inland Empire`
- slug: `riverside`, camelCase: `riverside`, PascalCase: `Riverside`
- GSC needle: `riverside`
- Research targets:
  - `https://www.redfin.com/city/17181/CA/Riverside/housing-market`
  - `https://en.wikipedia.org/wiki/Riverside,_California`
  - Local news: "Riverside CA housing market 2026"
- Expected commit: `feat(areas): add /areas/riverside page for Riverside`

### Task 5: Long Beach, CA

- [ ] **Step 1: Run Steps R1–R8 of Per-City Procedure**

- City: `Long Beach`, state `California`, region `LA`
- slug: `long-beach`, camelCase: `longBeach`, PascalCase: `LongBeach`
- GSC needle: `long beach`
- Research targets:
  - `https://www.redfin.com/city/11076/CA/Long-Beach/housing-market`
  - `https://en.wikipedia.org/wiki/Long_Beach,_California`
  - Local news: "Long Beach CA housing market 2026"
- Expected commit: `feat(areas): add /areas/long-beach page for Long Beach`

### Task 6: Fresno, CA

- [ ] **Step 1: Run Steps R1–R8 of Per-City Procedure**

- City: `Fresno`, state `California`, region `Central Valley`
- slug: `fresno`, camelCase: `fresno`, PascalCase: `Fresno`
- GSC needle: `fresno`
- Research targets:
  - `https://www.redfin.com/city/7344/CA/Fresno/housing-market`
  - `https://en.wikipedia.org/wiki/Fresno,_California`
  - Local news: "Fresno housing market 2026"
- Expected commit: `feat(areas): add /areas/fresno page for Fresno`

### Task 7: Elk Grove, CA

- [ ] **Step 1: Run Steps R1–R8 of Per-City Procedure**

- City: `Elk Grove`, state `California`, region `Sacramento`
- slug: `elk-grove`, camelCase: `elkGrove`, PascalCase: `ElkGrove`
- GSC needle: `elk grove`
- Research targets:
  - `https://www.redfin.com/city/5665/CA/Elk-Grove/housing-market`
  - `https://en.wikipedia.org/wiki/Elk_Grove,_California`
  - Local news: "Elk Grove housing market 2026"
- Expected commit: `feat(areas): add /areas/elk-grove page for Elk Grove`

### Task 8: Carlsbad, CA — **RISK FLAG**

- [ ] **Step 1: Confirm Carlsbad inclusion with user**

Carlsbad's real median (~$1.3M per recent Redfin) exceeds the $500K–$900K band. Before starting research, ask the user:

> "Carlsbad's real median is ~$1.3M, above our $500K–$900K target band. Three options:
> A) Include anyway, frame toward entry-level neighborhoods (Ponto, Bressi Ranch) where transactions in $700K–$1M happen
> B) Defer Carlsbad, replace with Bakersfield (rank 11, Central Valley, verified mid-tier)
> C) Pick a different Tier 1 city (Moreno Valley rank 12, Temecula rank 13)
> Which?"

If user picks A: continue to Step 2 with the entry-level framing. If B or C: update this task's city targets and run the procedure against the substitute city.

- [ ] **Step 2: Run Steps R1–R8 of Per-City Procedure (with final city choice)**

If Carlsbad (Option A):
- slug: `carlsbad`, camelCase: `carlsbad`, PascalCase: `Carlsbad`, state `California`, region `San Diego`
- Focus prose on entry-level neighborhoods only; adjust typicalHomeValueRange to the lower band (e.g., $700K–$1M)
- Research targets: Redfin Carlsbad, Wikipedia Carlsbad, local news

If Bakersfield (Option B):
- slug: `bakersfield`, camelCase: `bakersfield`, PascalCase: `Bakersfield`, state `California`, region `Central Valley`
- Research targets: Redfin Bakersfield, Wikipedia Bakersfield, local news

### Task 9: Roseville, CA

- [ ] **Step 1: Run Steps R1–R8 of Per-City Procedure**

- City: `Roseville`, state `California`, region `Sacramento`
- slug: `roseville`, camelCase: `roseville`, PascalCase: `Roseville`
- GSC needle: `roseville`
- Research targets:
  - `https://www.redfin.com/city/17389/CA/Roseville/housing-market`
  - `https://en.wikipedia.org/wiki/Roseville,_California`
  - Local news: "Roseville CA housing market 2026"
- Expected commit: `feat(areas): add /areas/roseville page for Roseville`

### Task 10: San Bernardino, CA

- [ ] **Step 1: Run Steps R1–R8 of Per-City Procedure**

- City: `San Bernardino`, state `California`, region `Inland Empire`
- slug: `san-bernardino`, camelCase: `sanBernardino`, PascalCase: `SanBernardino`
- GSC needle: `san bernardino`
- Research targets:
  - `https://www.redfin.com/city/17600/CA/San-Bernardino/housing-market`
  - `https://en.wikipedia.org/wiki/San_Bernardino,_California`
  - Local news: "San Bernardino housing market 2026"
- Expected commit: `feat(areas): add /areas/san-bernardino page for San Bernardino`

### Task 11: Murrieta, CA

- [ ] **Step 1: Run Steps R1–R8 of Per-City Procedure**

- City: `Murrieta`, state `California`, region `Inland Empire`
- slug: `murrieta`, camelCase: `murrieta`, PascalCase: `Murrieta`
- GSC needle: `murrieta`
- Research targets:
  - `https://www.redfin.com/city/13205/CA/Murrieta/housing-market`
  - `https://en.wikipedia.org/wiki/Murrieta,_California`
  - Local news: "Murrieta housing market 2026"
- Expected commit: `feat(areas): add /areas/murrieta page for Murrieta`

### Task 12: Tacoma, WA

- [ ] **Step 1: Run Steps R1–R8 of Per-City Procedure**

- City: `Tacoma`, state `Washington`, region `Washington`
- slug: `tacoma`, camelCase: `tacoma`, PascalCase: `Tacoma`
- GSC needle: `tacoma`
- Research targets:
  - `https://www.redfin.com/city/18168/WA/Tacoma/housing-market`
  - `https://en.wikipedia.org/wiki/Tacoma,_Washington`
  - Local news: "Tacoma housing market 2026"
- Expected commit: `feat(areas): add /areas/tacoma page for Tacoma`

Note: Tacoma has only 7 GSC impressions (weakest signal in Tier 1). Prose must still be researched, not speculative.

---

## Task 13: Nearby-cities linking pass

**Files:**
- Modify: `app/areas/<slug>/page.tsx` for each of the 10 Tier 1 slugs

Goal: populate the `nearbyCities` prop on each `<ProductLedCityTemplate />` render so users can hop between related markets. Region-aware:
- Cities with the same `region` value take precedence
- If fewer than 2 same-region siblings exist, fall back to same-state siblings
- Each page shows 2–3 nearby links (no more)

- [ ] **Step 1: Compute the nearby-cities map**

Create `scripts/compute-nearby-cities.mjs`:

```js
#!/usr/bin/env node
/**
 * Emits a JSON map citySlug -> Array<{citySlug, cityName, state}> for the
 * Tier 1 cities, based on region then state fallback.
 * Writes to /tmp/nearby-cities.json for downstream consumption.
 * On Windows, substitute a workdir-relative path if /tmp/ doesn't exist.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIR = 'lib/city-page-data';
const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.ts') && f !== 'index.ts');

const cities = files.map((f) => {
  const src = fs.readFileSync(path.join(DIR, f), 'utf8');
  const extract = (key) => {
    const re = new RegExp(`${key}\\s*:\\s*['"\`]([^'"\`]+)['"\`]`, 'm');
    const m = src.match(re);
    return m ? m[1] : null;
  };
  return {
    citySlug: extract('citySlug'),
    cityName: extract('cityName'),
    state: extract('state'),
    region: extract('region'),
  };
});

const map = {};
for (const c of cities) {
  const sameRegion = cities.filter((o) => o.citySlug !== c.citySlug && o.region === c.region);
  const sameState = cities.filter((o) => o.citySlug !== c.citySlug && o.state === c.state && o.region !== c.region);
  const picks = [...sameRegion, ...sameState].slice(0, 3);
  map[c.citySlug] = picks.map((p) => ({ citySlug: p.citySlug, cityName: p.cityName, state: p.state }));
}

const outPath = process.platform === 'win32' ? './.nearby-cities.json' : '/tmp/nearby-cities.json';
fs.writeFileSync(outPath, JSON.stringify(map, null, 2));
console.log(`Wrote ${outPath}`);
console.log(JSON.stringify(map, null, 2));
```

Run it:
```bash
node scripts/compute-nearby-cities.mjs
```

Expected: prints a map with 10 keys, each with 2–3 entries. Review the output — every city should have at least 2 siblings (since the regional spread guarantees this: IE has 3, SAC has 2, WA has 2, etc.).

- [ ] **Step 2: Update each `app/areas/<slug>/page.tsx` to pass `nearbyCities`**

For each of the 10 pages, change the render from:

```tsx
return <ProductLedCityTemplate city={<slugCamel>} />;
```

To:

```tsx
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
// ...
return <ProductLedCityTemplate city={<slugCamel>} nearbyCities={nearbyCitiesFor('<slug>')} />;
```

And create `lib/city-page-data/nearby-cities.ts` from the JSON output:

```ts
// Auto-derived from scripts/compute-nearby-cities.mjs output.
// Re-run that script and paste the updated map here when Tier 2 lands.

interface NearbyCity {
  citySlug: string;
  cityName: string;
  state: string;
}

const MAP: Record<string, NearbyCity[]> = <PASTE-THE-JSON-HERE>;

export function nearbyCitiesFor(slug: string): NearbyCity[] {
  return MAP[slug] ?? [];
}
```

Replace `<PASTE-THE-JSON-HERE>` with the JSON object from Step 1 output.

- [ ] **Step 3: Validate**

```bash
npm run typecheck
npm run build
```

- [ ] **Step 4: Spot-check in browser**

```bash
npm run dev > ./.devserver.log 2>&1 &
sleep 15
```

Open `http://localhost:3000/areas/riverside` — "Nearby cities we serve" section should show 2–3 other CA/IE cities. Open `http://localhost:3000/areas/spokane` — should show Tacoma (same state). `kill %1` to stop.

- [ ] **Step 5: Commit**

```bash
git add scripts/compute-nearby-cities.mjs lib/city-page-data/nearby-cities.ts app/areas/
git commit -m "feat(areas): nearby-cities cross-linking for Tier 1 city pages"
```

Husky may run; fix + NEW commit if blocked.

---

## Task 14: Full verification + merge + deploy

- [ ] **Step 1: Gate 1 — structural**

```bash
npm run typecheck
npm run lint
npm run build
node scripts/validate-city-data.mjs
```

Expected: all pass. Validator reports `10 file(s) passed`.

- [ ] **Step 2: Gate 2 — regression on prior slices**

```bash
grep -riE "UHNW|ultra-high-net-worth|ultra-luxury" app components content 2>/dev/null | grep -v "lib/disposition"
grep -riE "waterfront specialist|luxury waterfront|luxury specialist" app components content 2>/dev/null
node scripts/validate-scenarios.mjs
node scripts/validate-prequal.mjs
```

Expected: first two grep commands return no matches. Both validators pass (slice 2+4 and slice 5 hygiene).

- [ ] **Step 3: Gate 3 — dev server smoke**

```bash
npm run dev > ./.devserver.log 2>&1 &
sleep 15
for slug in spokane riverside long-beach fresno elk-grove carlsbad roseville san-bernardino murrieta tacoma; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000/areas/${slug}")
  echo "$code /areas/${slug}"
done
kill %1
```

(If a city was swapped in Task 8, adjust the slug list.)

Expected: all 10 return `200`.

- [ ] **Step 4: Push**

If on a feature branch:
```bash
git checkout main
git merge --no-ff <feature-branch> -m "Merge feature branch: ICP pivot slice 3 Tier 1 city pages"
```

Then:
```bash
git push origin main
```

- [ ] **Step 5: Wait for Vercel prod build + verify Ready**

```bash
vercel ls --prod | head -5
```

Expected: most recent row shows `● Ready` within ~5 minutes.

If `● Error`, run `vercel logs <url>` and diagnose before continuing.

- [ ] **Step 6: Gate 4 — production verification**

```bash
for slug in spokane riverside long-beach fresno elk-grove carlsbad roseville san-bernardino murrieta tacoma; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "https://www.mothebroker.com/areas/${slug}")
  title=$(curl -s "https://www.mothebroker.com/areas/${slug}" | grep -oE '<title[^>]*>[^<]+</title>' | head -1)
  echo "$code  $slug  $title"
done
```

(Adjust slug list if Task 8 swapped a city.)

Expected: all 10 return `200` with a title containing the city name.

```bash
curl -s https://www.mothebroker.com/sitemap.xml | grep -cE "/areas/(spokane|riverside|long-beach|fresno|elk-grove|carlsbad|roseville|san-bernardino|murrieta|tacoma)"
```

Expected: `10` (each slug appears once).

- [ ] **Step 7: Submit sitemap to GSC + IndexNow**

```bash
npm run gsc:sitemap
npm run indexnow:submit
```

Expected: both exit 0. Report the final sitemap URL count.

- [ ] **Step 8: Regression spot-checks on prior slices**

```bash
curl -s https://www.mothebroker.com/contact | grep -c "Let's see if we're the right fit"
curl -s https://www.mothebroker.com/heloc-orange-county | grep -c '\$650,000'
curl -s -o /dev/null -w "%{http_code}\n" https://www.mothebroker.com/luxury-markets/ultra-luxury-estates-mortgage-broker
```

Expected: `>=1`, `>=1`, `410`.

- [ ] **Step 9: Final commit if any verification fixes landed**

```bash
git status
```

If anything was fixed during verification:
```bash
git add -A
git commit -m "chore(tier1): verification fixes"
git push origin main
```

---

## Post-merge / out-of-band

- Monitor GSC Coverage for the 10 new URLs. Expected trajectory: "Discovered — not indexed" → "Submitted and indexed" within ~14 days.
- Weekly check of GSC query stream for each city: watch for impression growth on `{city} mortgage broker`, `{city} HELOC`, `{city} refinance`.
- 30 days post-deploy: any city with zero impression growth flagged for rewrite (more prose, better local specificity) or deprecation before Tier 2 planning.
- Prerequisites for Tier 2 (remaining 30 source-doc cities): Tier 1 performance data + template gap retrospective + decision on navigation menu "Areas" submenu.

## Out of Scope (confirmed)

- Tier 2 cities (remaining 30) — separate slice
- Navigation menu "Areas" submenu — optional follow-up
- Nested neighborhood pages (`/areas/spokane/hillyard`)
- Dynamic rate/pricing per city
- OC-based Tier 1 pages (deferred to Tier 2)
- Newport Beach / Laguna Beach / Beverly Hills / Palo Alto / Atherton / Bellevue waterfront / Newport Coast (permanent do-not-create list)
