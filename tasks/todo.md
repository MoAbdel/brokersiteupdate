# 2026-04-16 Bing-First Batch: IndexNow Auto-Submit, Global Breadcrumb Schema, Bing XML Auth, llms.txt Auto-Refresh

> **For executing agents:** Use `superpowers:executing-plans` (inline) or `superpowers:subagent-driven-development` (parallel). Steps use `- [ ]` checkboxes.

**Goal:** Close four small, high-leverage Bing / generative-engine gaps in a single batch: make IndexNow submission zero-config on production deploys, emit `BreadcrumbList` JSON-LD on every route, add the XML-file Bing Webmaster verification, and make the `public/llms.txt` Recent Content section regeneratable from a typed source-of-truth.

**Architecture:**
- **#1 IndexNow** — lift the existing `submit-indexing-after-build.mjs` from env-gated manual to "auto-on for production builds" by detecting `VERCEL_ENV=production`. Stay opt-out instead of opt-in so new posts surface in Bing within minutes of deploy without per-project env-var setup.
- **#4 Breadcrumbs** — split the existing `components/navigation/Breadcrumbs.tsx` (client UI + schema, mounted on only 25/597 routes) into two pieces: keep the client UI component as-is (minus its inline schema), and add a new server-side `BreadcrumbJsonLd` mounted globally in `app/layout.tsx` so every route emits valid `BreadcrumbList`.
- **#7 Bing XML auth** — add `public/BingSiteAuth.xml` alongside the existing meta-tag verification (`msvalidate.01` in `app/layout.tsx`). Dual verification strengthens Bing's trust signal and is a 2-minute fix.
- **#9 llms.txt refresh** — add `lib/blog-triples.ts` as a typed `slug → [triple1, triple2, triple3]` map and `scripts/update-llms-recent.mjs` that regenerates `## 8. Recent Content` between sentinel markers, FIFO-capped at 20 entries, sorted by the existing `date` in `lib/all-blog-posts.ts`. Idempotent, no external deps.

**Tech Stack:** Next.js 15 (App Router) · React 19 · Node.js ESM scripts · Vercel hosting · `node --test` for script unit tests (no new deps).

**Out of scope:** Updating old blog posts' citation hooks (separate CTR-refresh effort). News-sitemap `<news:news>` markup (task #5 in audit, deferred). `dateModified` tracking (task #2, deferred).

**Verification approach:** Each task ends with either a unit test (`node --test`), a build check (`npm run typecheck` + `npm run build`), or a shell assertion against the built artifact. No code ships without proof.

---

## File Structure

### New files
- `components/seo/BreadcrumbJsonLd.tsx` — server component that emits `BreadcrumbList` JSON-LD from a pathname. Pure function of the URL; no client JS.
- `lib/breadcrumbs.ts` — pure helper: `pathnameToBreadcrumbItems(pathname)` returning `{ name, url }[]`. Covers slug → title-case conversion, acronym uppercase (FHA, VA, HELOC, HELOAN, NMLS, DTI, DSCR), and exclusion rules (home, `/articles/*`).
- `lib/blog-triples.ts` — typed map `Record<slug, [triple1, triple2, triple3]>` feeding llms.txt Recent Content.
- `scripts/update-llms-recent.mjs` — regenerates `## 8. Recent Content` in `public/llms.txt` between sentinel markers.
- `scripts/__tests__/update-llms-recent.test.mjs` — `node --test` unit test covering: FIFO cap, date-sort order, sentinel boundaries, idempotency.
- `scripts/__tests__/breadcrumbs.test.mjs` — `node --test` unit test for `pathnameToBreadcrumbItems`.
- `public/BingSiteAuth.xml` — Bing Webmaster Tools XML verification file.

### Modified files
- `scripts/submit-indexing-after-build.mjs` — auto-enable delta submission when `VERCEL_ENV=production` and no explicit ENABLE_ flag is set. Remains a no-op on local and preview builds.
- `components/navigation/Breadcrumbs.tsx` — remove the `<script type="application/ld+json">` block (schema now lives globally) and internally delegate slug conversion to `lib/breadcrumbs.ts` to avoid drift.
- `app/layout.tsx` — mount `<BreadcrumbJsonLd />` once, reading the current pathname on the server.
- `package.json` — add `llms:refresh` script.
- `tasks/todo.md` — this file; append Review section on completion.

---

## Task 1: Refactor breadcrumb slug logic into a pure helper

**Files:**
- Create: `lib/breadcrumbs.ts`
- Create: `scripts/__tests__/breadcrumbs.test.mjs`
- Reference only: `components/navigation/Breadcrumbs.tsx:14-30` (current inline conversion logic)

Why first: the server-side `BreadcrumbJsonLd` (Task 2) and the existing client `Breadcrumbs` (Task 3) both need the exact same slug→title logic, or breadcrumb text will drift between the visible UI and the schema Google/Bing ingest. Extract once, use twice.

- [x] **Step 1.1: Write the failing test**

Create `scripts/__tests__/breadcrumbs.test.mjs`:

```javascript
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pathnameToBreadcrumbItems } from '../../lib/breadcrumbs.ts';

test('returns empty array for home and articles', () => {
  assert.deepEqual(pathnameToBreadcrumbItems('/'), []);
  assert.deepEqual(pathnameToBreadcrumbItems('/articles/anything'), []);
});

test('converts slugs to title case with hrefs', () => {
  const items = pathnameToBreadcrumbItems('/loan-programs/heloc');
  assert.deepEqual(items, [
    { name: 'Loan Programs', href: '/loan-programs' },
    { name: 'HELOC', href: '/loan-programs/heloc' },
  ]);
});

test('uppercases known acronyms', () => {
  const items = pathnameToBreadcrumbItems('/blog/fha-va-dscr-comparison-2026');
  assert.equal(items.at(-1).name, 'FHA VA DSCR Comparison 2026');
});

test('expands Oc to Orange County', () => {
  const items = pathnameToBreadcrumbItems('/areas/oc-refinance');
  assert.equal(items.at(-1).name, 'Orange County Refinance');
});
```

- [x] **Step 1.2: Run the test to verify it fails**

Run: `node --test scripts/__tests__/breadcrumbs.test.mjs`
Expected: FAIL with `Cannot find module '../../lib/breadcrumbs.ts'` (or TS import error)

- [x] **Step 1.3: Create the helper**

Create `lib/breadcrumbs.ts`:

```typescript
export type BreadcrumbItem = {
  name: string;
  href: string;
};

const ACRONYMS = /\b(Fha|Va|Heloc|Heloan|Nmls|Dti|Dscr)\b/gi;

export function pathnameToBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  if (!pathname || pathname === '/' || pathname.startsWith('/articles')) {
    return [];
  }

  const segments = pathname.split('/').filter(Boolean);

  return segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const name = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace(ACRONYMS, (match) => match.toUpperCase())
      .replace(/\bOc\b/g, 'Orange County');

    return { name, href };
  });
}
```

- [x] **Step 1.4: Run test to verify it passes**

Run: `node --test --experimental-strip-types scripts/__tests__/breadcrumbs.test.mjs`
Expected: PASS 4 tests

(Note: Node 22+ supports `--experimental-strip-types` for importing `.ts` from `.mjs`. If the project's Node version is older, rename the helper to `.mjs` and drop the `type` alias.)

- [x] **Step 1.5: Update the client component to use the helper**

Edit `components/navigation/Breadcrumbs.tsx`:
1. Remove the inline `segments.map(...)` block (currently lines ~15-30).
2. Replace it with `const breadcrumbItems = pathnameToBreadcrumbItems(pathname).map((item, idx, arr) => ({ ...item, isLast: idx === arr.length - 1 }));`
3. **Remove** the `<script type="application/ld+json">` block at the bottom (lines 96-100) — schema now lives in Task 2's global component. Leave only the `<nav>` UI.
4. Add `import { pathnameToBreadcrumbItems } from '@/lib/breadcrumbs';` at the top.

- [x] **Step 1.6: Typecheck and build**

Run: `npm run typecheck`
Expected: PASS (0 errors)

Run: `npm run build` (partial — can Ctrl-C after the compile step; we just need TS/lint validation here)
Expected: Compile step completes without errors relating to `Breadcrumbs.tsx` or `breadcrumbs.ts`.

- [x] **Step 1.7: Commit**

```bash
git add lib/breadcrumbs.ts components/navigation/Breadcrumbs.tsx scripts/__tests__/breadcrumbs.test.mjs
git commit -m "refactor(seo): extract breadcrumb slug logic into lib/breadcrumbs

Pulls the pathname→title-case conversion out of the client Breadcrumbs
component so it can be reused by a server-side JSON-LD emitter. Removes
the inline schema block from the client component; schema will be
emitted globally in a follow-up."
```

---

## Task 2: Emit `BreadcrumbList` JSON-LD globally

**Files:**
- Create: `components/seo/BreadcrumbJsonLd.tsx`
- Modify: `app/layout.tsx`

Why: `<Breadcrumbs />` is mounted on only 25 of 597 routes today. Mounting the schema globally (without the UI) on the server gives Bing and Google AI Overviews a consistent site-hierarchy signal on every indexable page.

- [x] **Step 2.1: Check current layout structure**

Read `app/layout.tsx` to find the `<body>` opening tag and confirm there's a `children` prop slot. (Skip if you already have it in context.)

- [x] **Step 2.2: Create the server component**

Create `components/seo/BreadcrumbJsonLd.tsx`:

```tsx
import { headers } from 'next/headers';
import { pathnameToBreadcrumbItems } from '@/lib/breadcrumbs';
import { SITE_ORIGIN } from '@/lib/site';

export default async function BreadcrumbJsonLd() {
  const hdrs = await headers();
  const pathname = hdrs.get('x-invoke-path') ?? hdrs.get('x-pathname') ?? '/';

  const items = pathnameToBreadcrumbItems(pathname);
  if (items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_ORIGIN,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `${SITE_ORIGIN}${item.href}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

**Note on pathname source:** Next.js 15 doesn't expose the current route path via `headers()` out of the box. We'll set a custom header in `middleware.ts` so this component can read it (see Step 2.3). If the project already sets `x-invoke-path` or similar via its existing middleware, prefer that.

- [x] **Step 2.3: Ensure middleware propagates the pathname header**

Check `middleware.ts` for an existing `request.nextUrl.pathname` header pass-through. If missing, add this to the response headers step:

```typescript
// Inside the existing middleware response-building logic
response.headers.set('x-pathname', request.nextUrl.pathname);
```

If middleware doesn't exist or doesn't produce a response, use the simpler alternative of reading from `draftMode()` / `cookies()` — but pathname via middleware header is the reliable App Router pattern.

- [x] **Step 2.4: Mount in root layout**

Edit `app/layout.tsx`. Find the `<body>` element and the existing schema injection pattern, then add the component at the top of the body:

```tsx
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';

// Inside the layout JSX, immediately after <body ...>:
<BreadcrumbJsonLd />
```

- [x] **Step 2.5: Typecheck and build**

Run: `npm run typecheck`
Expected: PASS

Run: `npm run build`
Expected: Build completes. No prerendering errors from the 597 routes.

- [x] **Step 2.6: Smoke-test against production build**

Run: `npm run start` (in one terminal) then in another:

```bash
curl -s http://localhost:3000/loan-programs/heloc | grep -c '"@type":"BreadcrumbList"'
curl -s http://localhost:3000/ | grep -c '"@type":"BreadcrumbList"'
curl -s http://localhost:3000/blog/dscr-loan-interest-only-option-2026 | grep -c '"@type":"BreadcrumbList"'
```

Expected:
- `/loan-programs/heloc` → `1`
- `/` → `0` (home returns empty breadcrumbs)
- blog post → `1`

- [x] **Step 2.7: Validate a sample schema via Google's Rich Results Test**

Open https://search.google.com/test/rich-results?utm_campaign=devsite&utm_medium=jsonld&utm_source=breadcrumbs and paste one of the production URLs once deployed to a preview — OR paste the rendered HTML from the curl above. Confirm no errors, warnings only (warnings about image fields are fine for BreadcrumbList).

- [x] **Step 2.8: Commit**

```bash
git add components/seo/BreadcrumbJsonLd.tsx app/layout.tsx middleware.ts
git commit -m "feat(seo): emit BreadcrumbList schema on every route

Mounts a server-rendered JSON-LD emitter in the root layout so all 597
routes surface BreadcrumbList to Bing, Google, and AI crawlers. Home
and /articles/* return null (no breadcrumbs). Pathname is read from a
middleware-set x-pathname header."
```

---

## Task 3: Add `BingSiteAuth.xml`

**Files:**
- Create: `public/BingSiteAuth.xml`

Why: Bing Webmaster Tools supports three verification methods (meta tag, XML file, DNS). The site currently uses the meta tag (`msvalidate.01` in `app/layout.tsx`). Adding the XML file provides redundant verification — if the meta tag is ever stripped (e.g., an aggressive metadata refactor), Bing continues to trust the site via the XML file.

- [x] **Step 3.1: Retrieve the Bing Webmaster XML verification code**

This is a **manual prerequisite step.** The `msvalidate.01` meta-tag token (`F9E3BEE43DFA5A2B0676F3881B448BCA`) is typically valid for both verification methods, but Bing's UI gives a dedicated XML token that may differ.

**Ask the user:** "I need the Bing Webmaster Tools XML verification code. You can find it at https://www.bing.com/webmasters → Settings → Ownership Verification → 'Place an XML file on your web server'. Paste the code that appears inside the `<user>` tag, or confirm we should try the existing `F9E3BEE43DFA5A2B0676F3881B448BCA` token."

- [x] **Step 3.2: Create the XML file**

Create `public/BingSiteAuth.xml` with this exact content (substitute `<USER_CODE>` with the value from Step 3.1):

```xml
<?xml version="1.0"?>
<users>
  <user><USER_CODE></user>
</users>
```

- [x] **Step 3.3: Verify the file is served correctly**

Run: `npm run build && npm run start` (in one terminal)

In another terminal:
```bash
curl -I http://localhost:3000/BingSiteAuth.xml
```

Expected response headers:
- `HTTP/1.1 200 OK`
- `Content-Type: text/xml` or `application/xml` (Next.js may serve as `text/xml` or `text/plain`)
- No `X-Robots-Tag: noindex` (critical — Bing must be able to fetch it)

- [x] **Step 3.4: Verify file content**

```bash
curl -s http://localhost:3000/BingSiteAuth.xml
```

Expected: The exact XML content from Step 3.2, unmodified.

- [x] **Step 3.5: Check vercel.json doesn't accidentally noindex it**

Re-read `vercel.json` headers section. The catch-all `/(.*)` rule only adds security headers (no X-Robots-Tag), so BingSiteAuth.xml is fine. If a future sitemap-style header rule is added, it must NOT match `BingSiteAuth.xml`.

- [x] **Step 3.6: Commit**

```bash
git add public/BingSiteAuth.xml
git commit -m "feat(seo): add BingSiteAuth.xml for dual Bing Webmaster verification

Supplements the existing msvalidate.01 meta-tag verification with
Bing's XML-file method. Protects against verification loss if the
meta tag is ever removed by a layout refactor."
```

- [~] **Step 3.7: Post-deploy verification (after production deploy)** — pending prod deploy

Once deployed to production, open the Bing Webmaster Tools UI → Settings → Ownership Verification → XML file method → click "Verify". Confirm a green check.

---

## Task 4: Auto-enable IndexNow submission on production deploys

**Files:**
- Modify: `scripts/submit-indexing-after-build.mjs`

Why: The postbuild hook is already wired (`package.json:9`), and `scripts/submit-indexnow.mjs` already handles delta-vs-sitemap logic correctly. The only thing keeping it off is the `ENABLE_*` env-var gate at `submit-indexing-after-build.mjs:16-18`. Flip the default so production Vercel builds auto-submit unless explicitly disabled.

- [x] **Step 4.1: Read current script state**

Re-read `scripts/submit-indexing-after-build.mjs:14-30`. Current logic:
- If `ENABLE_INDEXING_DELTA_AUTO=true` → run delta-auto, return
- If no `ENABLE_*` flags set → log "disabled" and return
- Else run per-flag

- [x] **Step 4.2: Modify to auto-enable on production**

Edit `scripts/submit-indexing-after-build.mjs`. Replace lines 14-29 (the beginning of `run` plus the disabled log) with:

```javascript
const run = async () => {
  const enableDeltaAuto = process.env.ENABLE_INDEXING_DELTA_AUTO === 'true';
  const enableIndexNow = process.env.ENABLE_INDEXNOW_SUBMIT === 'true';
  const enableBing = process.env.ENABLE_BING_SUBMIT === 'true';
  const enableGscSitemap = process.env.ENABLE_GSC_SITEMAP_SUBMIT === 'true';
  const disableAutoProd = process.env.DISABLE_AUTO_INDEXING_ON_PROD === 'true';

  const isProductionBuild =
    process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production';
  const anyExplicitFlag =
    enableDeltaAuto || enableIndexNow || enableBing || enableGscSitemap;

  // Auto-enable delta submission on production builds when no explicit flag set
  // and not explicitly disabled. Makes every `vercel --prod` deploy ping Bing.
  const autoEnableDelta =
    isProductionBuild && !anyExplicitFlag && !disableAutoProd;

  if (enableDeltaAuto || autoEnableDelta) {
    const reason = autoEnableDelta ? 'auto (production build)' : 'explicit flag';
    console.log(`\n--- Auto delta indexing: ${reason} ---`);
    await runScript('scripts/auto-submit-indexing-delta.mjs', 'Auto delta indexing submit');
    return;
  }

  if (!anyExplicitFlag) {
    console.log('Indexing automation disabled (non-production build, no ENABLE_* flag set).');
    return;
  }
```

Keep the rest of the function (per-flag blocks starting at `if (enableIndexNow)`) unchanged.

- [x] **Step 4.3: Verify locally that dev builds stay quiet**

Run: `NODE_ENV= VERCEL_ENV= node scripts/submit-indexing-after-build.mjs`
Expected: `Indexing automation disabled (non-production build, no ENABLE_* flag set).` → exit 0

Run: `NODE_ENV= VERCEL_ENV= DISABLE_AUTO_INDEXING_ON_PROD=true node scripts/submit-indexing-after-build.mjs`
Expected: Same disabled message.

- [x] **Step 4.4: Verify production flag triggers auto-delta (dry)**

Run: `VERCEL_ENV=production node scripts/submit-indexing-after-build.mjs`
Expected: Log line `Auto delta indexing: auto (production build)` then delegates to `auto-submit-indexing-delta.mjs`.

**Safety:** `auto-submit-indexing-delta.mjs` will attempt a real IndexNow POST if a delta file exists. If you don't want to actually ping Bing during this test, either (a) run from a branch with no `reports/indexing-delta.json`, (b) temporarily rename that file, or (c) kill with Ctrl-C before the POST fires.

- [x] **Step 4.5: Verify explicit-disable on production works**

Run: `VERCEL_ENV=production DISABLE_AUTO_INDEXING_ON_PROD=true node scripts/submit-indexing-after-build.mjs`
Expected: `Indexing automation disabled (non-production build, no ENABLE_* flag set).`

- [x] **Step 4.6: Commit**

```bash
git add scripts/submit-indexing-after-build.mjs
git commit -m "feat(seo): auto-enable IndexNow on Vercel production builds

Production deploys (VERCEL_ENV=production) now run delta-mode IndexNow
submission by default. Preview and dev builds stay silent. Opt-out
via DISABLE_AUTO_INDEXING_ON_PROD=true, or override with an explicit
ENABLE_* flag for finer control."
```

- [x] **Step 4.7: Document the new behavior**

Append to `tasks/todo.md` Review section (on completion): how to opt out (set `DISABLE_AUTO_INDEXING_ON_PROD=true` in Vercel → Settings → Environment Variables → Production).

---

## Task 5: llms.txt Recent Content auto-refresh

**Files:**
- Create: `lib/blog-triples.ts`
- Create: `scripts/update-llms-recent.mjs`
- Create: `scripts/__tests__/update-llms-recent.test.mjs`
- Modify: `public/llms.txt` (add sentinel markers — one-time)
- Modify: `package.json` (add `llms:refresh` script)

Why: `## 8. Recent Content` in `public/llms.txt` is currently maintained by hand per the generator skill's instructions. That means it drifts — posts can land without llms.txt getting updated, stripping RAG systems of an index into the freshest content. A regeneration script driven by a typed triples map makes updates a one-line edit per post, enforces FIFO, and prevents format bugs.

- [x] **Step 5.1: Add sentinel markers to llms.txt**

Edit `public/llms.txt`. Find `## 8. Recent Content` (line 207). Immediately after the existing header-comment block (after line 210), add:

```
<!-- LLMS_RECENT:START -->
```

And at the end of section 8 (just before `## 9. URL Canonicalization Rules` on line 232), add:

```
<!-- LLMS_RECENT:END -->
```

Do **not** remove existing entries between the markers yet; the script in Step 5.6 will regenerate them from the triples source.

- [x] **Step 5.2: Seed the triples source from the current llms.txt**

Create `lib/blog-triples.ts`:

```typescript
// Machine-readable source-of-truth for public/llms.txt Section 8.
// When adding a new blog post, add an entry here and run `npm run llms:refresh`.
// Slug must match lib/all-blog-posts.ts exactly.

export type BlogTriples = [string, string, string];

export const blogTriples: Record<string, BlogTriples> = {
  'refinance-rental-income-qualifying-2026': [
    'Fannie Mae allows 75% of gross rental income to offset investment property PITIA in DTI calculation for California and Washington refinance applicants',
    'Self-employed landlords with 2+ years of Schedule E can add back depreciation to improve qualifying net rental income above cash-flow',
    'Wholesale broker compares rental income calculation methods across 200+ lenders to find programs that maximize qualifying income for multi-property investors',
  ],
  'cash-out-refinance-adu-construction-california-2026': [
    'California homeowners with 20%+ equity use cash-out refinance at up to 80% LTV to access $100K-$400K+ for ADU construction without selling the home',
    'ADU construction costs range from $150K for garage conversions to $400K+ for detached new builds in Orange County generating $1,800-$3,000 monthly rental income',
    'Wholesale broker compares cash-out refinance programs across 200+ lenders to match ADU project scope with optimal loan terms and maximized proceeds',
  ],
  // ... backfill the remaining 18 entries from the current llms.txt Section 8 ...
};
```

**Backfill:** Parse each current entry in `public/llms.txt` lines 212-231. Each line has format `- [Title](URL): Triple1; Triple2; Triple3`. Extract the slug from the URL path, split the three triples on `;`, and add to the map. Do this mechanically — don't rewrite the content.

- [x] **Step 5.3: Write the failing test**

Create `scripts/__tests__/update-llms-recent.test.mjs`:

```javascript
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildRecentContentSection } from '../update-llms-recent.mjs';

const SITE = 'https://www.mothebroker.com';

const posts = [
  { slug: 'post-a', title: 'Post A', date: '2026-04-10' },
  { slug: 'post-b', title: 'Post B', date: '2026-04-12' },
  { slug: 'post-c', title: 'Post C', date: '2026-04-08' },
  { slug: 'post-no-triples', title: 'Post D', date: '2026-04-15' },
];

const triples = {
  'post-a': ['TripA1', 'TripA2', 'TripA3'],
  'post-b': ['TripB1', 'TripB2', 'TripB3'],
  'post-c': ['TripC1', 'TripC2', 'TripC3'],
  // post-no-triples intentionally omitted
};

test('sorts by date descending, newest first', () => {
  const section = buildRecentContentSection({ posts, triples, siteOrigin: SITE, limit: 20 });
  const lines = section.trim().split('\n');
  assert.ok(lines[0].includes('Post B'));
  assert.ok(lines[1].includes('Post A'));
  assert.ok(lines[2].includes('Post C'));
});

test('skips posts without triples', () => {
  const section = buildRecentContentSection({ posts, triples, siteOrigin: SITE, limit: 20 });
  assert.ok(!section.includes('Post D'));
});

test('respects FIFO limit', () => {
  const many = Array.from({ length: 25 }, (_, i) => ({
    slug: `post-${i}`,
    title: `Post ${i}`,
    date: `2026-04-${String(i + 1).padStart(2, '0')}`,
  }));
  const manyTriples = Object.fromEntries(
    many.map((p) => [p.slug, ['t1', 't2', 't3']])
  );
  const section = buildRecentContentSection({
    posts: many,
    triples: manyTriples,
    siteOrigin: SITE,
    limit: 20,
  });
  const lines = section.trim().split('\n');
  assert.equal(lines.length, 20);
});

test('joins triples with semicolons and correct URL format', () => {
  const section = buildRecentContentSection({ posts, triples, siteOrigin: SITE, limit: 20 });
  assert.ok(section.includes('](https://www.mothebroker.com/blog/post-a): TripA1; TripA2; TripA3'));
});

test('is idempotent — same input → same output', () => {
  const a = buildRecentContentSection({ posts, triples, siteOrigin: SITE, limit: 20 });
  const b = buildRecentContentSection({ posts, triples, siteOrigin: SITE, limit: 20 });
  assert.equal(a, b);
});
```

- [x] **Step 5.4: Run test to verify it fails**

Run: `node --test scripts/__tests__/update-llms-recent.test.mjs`
Expected: FAIL with `Cannot find module '../update-llms-recent.mjs'`

- [x] **Step 5.5: Implement the script**

Create `scripts/update-llms-recent.mjs`:

```javascript
import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const WORKSPACE = process.cwd();
const LLMS_PATH = path.join(WORKSPACE, 'public', 'llms.txt');
const SITE_ORIGIN = 'https://www.mothebroker.com';
const START_MARKER = '<!-- LLMS_RECENT:START -->';
const END_MARKER = '<!-- LLMS_RECENT:END -->';
const LIMIT = 20;

export function buildRecentContentSection({ posts, triples, siteOrigin, limit }) {
  const entries = posts
    .filter((p) => triples[p.slug])
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .slice(0, limit)
    .map((p) => {
      const [t1, t2, t3] = triples[p.slug];
      return `- [${p.title}](${siteOrigin}/blog/${p.slug}): ${t1}; ${t2}; ${t3}`;
    });

  return entries.join('\n') + '\n';
}

async function loadPosts() {
  // Dynamic import of the TS source via Node 22+ type-stripping.
  // If running on an older Node, pre-build lib/all-blog-posts.ts to .mjs first.
  const mod = await import(url.pathToFileURL(path.join(WORKSPACE, 'lib/all-blog-posts.ts')).href);
  return mod.allBlogPosts ?? mod.default ?? [];
}

async function loadTriples() {
  const mod = await import(url.pathToFileURL(path.join(WORKSPACE, 'lib/blog-triples.ts')).href);
  return mod.blogTriples ?? mod.default ?? {};
}

async function run() {
  const [posts, triples, current] = await Promise.all([
    loadPosts(),
    loadTriples(),
    fs.readFile(LLMS_PATH, 'utf8'),
  ]);

  const startIdx = current.indexOf(START_MARKER);
  const endIdx = current.indexOf(END_MARKER);

  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error(
      `Sentinel markers missing or malformed in ${LLMS_PATH}. Expected ${START_MARKER} before ${END_MARKER}.`
    );
  }

  const section = buildRecentContentSection({ posts, triples, siteOrigin: SITE_ORIGIN, limit: LIMIT });
  const before = current.slice(0, startIdx + START_MARKER.length);
  const after = current.slice(endIdx);
  const next = `${before}\n${section}${after}`;

  if (next === current) {
    console.log('llms.txt Recent Content is already up to date.');
    return;
  }

  await fs.writeFile(LLMS_PATH, next, 'utf8');
  const entryCount = section.trim().split('\n').filter(Boolean).length;
  console.log(`Updated llms.txt with ${entryCount} Recent Content entries.`);
}

const isCli = import.meta.url === url.pathToFileURL(process.argv[1]).href;
if (isCli) {
  run().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
```

- [x] **Step 5.6: Run test to verify it passes**

Run: `node --test scripts/__tests__/update-llms-recent.test.mjs`
Expected: PASS 5 tests.

- [x] **Step 5.7: Add npm script**

Edit `package.json`. Add after line 34 (`"seo:internal-links"`):

```json
    "llms:refresh": "node scripts/update-llms-recent.mjs",
```

Keep the trailing comma correct — the next line is `"prepare": "husky"`.

- [x] **Step 5.8: Run the real refresh**

Run: `npm run llms:refresh`
Expected: `Updated llms.txt with N Recent Content entries.` (or `already up to date` if backfill matched the prior content exactly).

Run again: `npm run llms:refresh`
Expected: `llms.txt Recent Content is already up to date.` (idempotency check)

- [x] **Step 5.9: Diff-verify the change is content-preserving**

```bash
git diff public/llms.txt
```

Expected: Either no changes, or changes are limited to the region between the sentinel markers. Section 9 (URL Canonicalization) and Section 10 (AI Permissions) must be **untouched**.

- [x] **Step 5.10: Commit**

```bash
git add lib/blog-triples.ts scripts/update-llms-recent.mjs scripts/__tests__/update-llms-recent.test.mjs public/llms.txt package.json
git commit -m "feat(seo): make llms.txt Recent Content regeneratable

Introduces lib/blog-triples.ts as the typed source-of-truth for each
post's three semantic triples, and scripts/update-llms-recent.mjs
which rebuilds the Recent Content block between sentinel markers.
Idempotent, FIFO-capped at 20, sorted newest-first. Run with
\`npm run llms:refresh\` after adding a new blog post."
```

---

## Task 6: Full-stack verification

**Files:** no changes; verification only.

- [x] **Step 6.1: Typecheck**

Run: `npm run typecheck`
Expected: PASS (0 errors).

- [x] **Step 6.2: Lint**

Run: `npm run lint`
Expected: PASS, or only pre-existing warnings (nothing new introduced).

- [x] **Step 6.3: Production build**

Run: `npm run build`
Expected: Build succeeds. Check build output for:
- No hydration warnings about `Breadcrumbs` or `BreadcrumbJsonLd`.
- `postbuild` step runs sitemap + indexing script; indexing script should log `Indexing automation disabled` locally (since `VERCEL_ENV` is not set on your dev machine).

- [x] **Step 6.4: Spot-check built HTML**

Run: `npm run start` then from another terminal:

```bash
curl -s http://localhost:3000/loan-programs/heloc | grep -o '"@type":"BreadcrumbList"' | wc -l
curl -sI http://localhost:3000/BingSiteAuth.xml | head -1
curl -s http://localhost:3000/llms.txt | grep -c 'LLMS_RECENT:START'
```

Expected:
- `1` (exactly one BreadcrumbList on /loan-programs/heloc)
- `HTTP/1.1 200 OK`
- `1` (sentinel markers present in served llms.txt)

- [~] **Step 6.5: Push to a preview deploy for on-Vercel validation** — pending user action

```bash
git push origin <current-branch>
```

Then either open the Vercel preview URL or run `vercel` locally and visit the preview. Verify on a real preview URL:
- A blog post's `view-source:` shows `BreadcrumbList` JSON-LD.
- `https://<preview>.vercel.app/BingSiteAuth.xml` returns 200.
- Vercel build logs show `Indexing automation disabled` on preview (not production).

- [~] **Step 6.6: Merge and watch production deploy** — pending user action

Merge to `main`. In the Vercel build log, confirm:
- `postbuild` step logs `Auto delta indexing: auto (production build)`.
- `reports/last-submission.json` updates (visible after next git pull).
- Bing Webmaster Tools → URL Inspection → submit any new URL and confirm "Submitted" within ~10 minutes.

- [~] **Step 6.7: Complete the BingSiteAuth.xml verification in Bing Webmaster** — pending prod deploy

Once production is live, open Bing Webmaster Tools → Settings → Ownership Verification → XML file method → click "Verify". Expect a green check.

- [x] **Step 6.8: Append Review section to this plan**

Edit `tasks/todo.md`. Append a `## Review` section with: what shipped, what was deferred, any surprises, next recommended batch (tasks #2, #3, #5, #8, #10 from the audit).

---

## Dependencies & risks

- **Node version for TS imports in scripts.** Tasks 1 and 5 import `.ts` from `.mjs`. This requires Node 22+ with `--experimental-strip-types`, or a pre-compile step. The project already runs Node 24+ on Vercel (per `@types/node: ^24.2.0`), so production is safe. If your local Node is older, upgrade before running tests. If upgrading is blocked, convert `lib/breadcrumbs.ts` and `lib/blog-triples.ts` to `.mjs` instead (drop the type annotations; keep the exports identical).
- **Pathname header on prerendered routes.** `headers()` inside a static route reads request-time headers, which means statically-generated pages can't get a pathname this way. If the layout is statically-generated for routes like `/about`, the `BreadcrumbJsonLd` component will fall back to `'/'` and render nothing for those routes. **Mitigation:** in Task 2, if you hit this, opt the layout into dynamic rendering with `export const dynamic = 'force-dynamic'` at the layout level — but this has perf implications. The cleaner alternative is to pass pathname through a different mechanism (e.g., render `BreadcrumbJsonLd` inside each page template rather than the root layout, using the route's known path). **Decision point:** test on a static route in Step 2.6; if it returns 0 BreadcrumbList tags, switch strategies before shipping.
- **IndexNow rate discipline.** The auto-enable in Task 4 will cause Bing to receive submissions on every production deploy. The existing `RESUBMIT_WINDOW_HOURS=48` guard in `submit-indexnow.mjs:15` prevents double-pinging the same URL; the delta-auto path submits only changed URLs. Risk is low, but watch `reports/last-submission.json` for the first few deploys to confirm counts are sensible (expect 0-20 URLs per deploy, not 300+).
- **llms.txt backfill accuracy.** Task 5.2 requires transcribing 20 existing entries. Do this carefully — a typo in a triple will surface to RAG systems. Recommend a second pass with `git diff public/llms.txt` after the refresh to catch drift.

---

## Self-review (completed before handoff)

- **Spec coverage:** All four audit items are addressed — #1 (Task 4), #4 (Tasks 1-2), #7 (Task 3), #9 (Task 5). Task 6 is full-stack verification.
- **Placeholder scan:** No TODO/TBD. One `...backfill...` comment in Task 5.2 points at a manual data-transcription step, which is necessarily human work; the surrounding steps are concrete.
- **Type consistency:** `BlogTriples` (Task 5) and `BreadcrumbItem` (Task 1) are only referenced within their own tasks. `buildRecentContentSection` signature matches between test (Step 5.3) and impl (Step 5.5).
- **Known risk:** Task 2 Step 2.3's middleware header approach may conflict with statically-generated routes. Documented as a decision point.

---

## Execution handoff

Plan saved at `tasks/todo.md`. Two options:

1. **Subagent-driven** (recommended) — dispatch a fresh subagent per task with review between; fast iteration, isolates context.
2. **Inline** — execute tasks in this session with checkpoints.

Before executing either path, this plan should either be approved as-is or revised. Deferred until the user gives the go-ahead.

---

## Review (2026-04-16)

### What shipped

Six commits on `bing-first-batch-2026-04-16`:

| SHA | Task | Summary |
|-----|------|---------|
| `1cecceb` | 1 | Extract breadcrumb slug logic into `lib/breadcrumbs` + unit test |
| `4766d4c` | 2 | Emit `BreadcrumbList` schema on every route via global `BreadcrumbJsonLd` |
| `a4a1d40` | 2 | Polish `BreadcrumbJsonLd` — prefer `x-pathname`, add doc comment |
| `9c9551c` | 3 | `public/BingSiteAuth.xml` for dual Bing Webmaster verification |
| `a8e817e` | 4 | Auto-enable IndexNow on `VERCEL_ENV=production` builds |
| `12a79af` | 5 | `llms.txt` Recent Content regeneratable from typed triples map |

### Verification passed

- `npm run typecheck` → 0 errors
- `npm run lint` → 0 warnings/errors
- `npm run build` → success (597 routes); postbuild `next-sitemap` + indexing gate run cleanly
- `node --test scripts/__tests__/update-llms-recent.test.mjs` → 5/5 pass
- `node --test scripts/__tests__/breadcrumbs.test.mjs` → 4/4 pass (Task 1)
- Curl spot-checks against `npm run start`:
  - `GET /BingSiteAuth.xml` → 200, correct content, no `X-Robots-Tag`
  - `/loan-programs/heloc` → exactly 1 `BreadcrumbList`
  - `/llms.txt` → sentinel markers present
- Task 4 dry-run: `VERCEL_ENV=production` triggers `Auto delta indexing: auto (production build)` log; `DISABLE_AUTO_INDEXING_ON_PROD=true` correctly suppresses

### Deviations from plan

- **Task 5** added `--experimental-strip-types` to the `llms:refresh` npm script (the plan's documented fallback) because the script imports `.ts` files directly at runtime. Node 22.22.1 supports this flag.
- **Task 5** regenerated Section 8 titles come from the canonical `allBlogPosts` source, so a few titles differ cosmetically from the prior hand-written copy — this is the correct behavior and enforces title consistency going forward.

### Pending / deferred (not blockers)

- **Step 3.7** — click "Verify" on the Bing Webmaster Tools XML-file method (requires prod deploy first).
- **Step 6.5-6.7** — push to preview, merge to main, watch the production postbuild log for `Auto delta indexing: auto (production build)`.
- **Step 4.7** — documented the opt-out here: set `DISABLE_AUTO_INDEXING_ON_PROD=true` in Vercel → Settings → Environment Variables → Production if you ever need to halt auto-IndexNow.

### Known side-effect in working tree (not from these tasks)

The worktree carries three uncommitted pre-existing modifications from before this batch started:

- `public/sitemap.xml` — rewritten by an earlier `npm run build` that invoked `scripts/build-sitemap.mjs` (a live-crawler). Unrelated to any of Tasks 1-6. Can be reverted with `git checkout public/sitemap.xml` before merging.
- `public/robots.txt` — LF→CRLF line-ending only, no content change.
- `tasks/todo.md` — this plan file (now with Review appended).

### Next recommended batch

From the original Bing / generative-engine audit, deferred items worth queuing next:

- **Audit #2** — `dateModified` tracking on blog posts (freshness signal).
- **Audit #3** — Rolling content refresh cadence (pair with #2).
- **Audit #5** — News-sitemap `<news:news>` markup.
- **Audit #8** — `sameAs` entity signal expansion.
- **Audit #10** — `hasPart` / `citation` linking on hub-page schemas.
