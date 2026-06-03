# 2026-06-03 Landing Page Missing Reviews

> Goal: find the git diff that dropped landing-page reviews, restore the missing review content into the live landing page with minimal changes, and verify the site builds.

## Plan

- [x] Confirm project workflow rules and check current repo state.
- [x] Compare recent landing-page/review diffs against the current live homepage component.
- [x] Restore missing reviews in the live landing page without unrelated refactors.
- [x] Run verification and record results.

## Review

- Root cause in existing git history: prior commit `74971b8` switched `app/page.tsx` from `SimpleLandingPage` to `WholesaleLendersLanding`, so the live homepage stopped using `components/home/SocialProofSection.tsx`.
- `SocialProofSection` had five reviews, while `WholesaleLendersLanding` only had three. The missing live reviews were Alice W from Experience.com and Karthikeyan Ramaswami from Zillow.
- Restored both missing reviews into `components/WholesaleLendersLanding.tsx` and updated the visible hero review initials to match the active review set.
- Verification passed: `npm run typecheck`, `npm run build`, and `.next` output contains Alice W, Experience.com review, and Karthikeyan Ramaswami.

# 2026-05-07 SEO GEO AIO AEO Audit Goal

> Goal mode active. Follow the repo workflow rules, keep audit-first findings separate from safe patches, and do not change live crawler training policy without owner approval.

## Scope

- [x] Pass 1, source-backed audit: verify official crawler/search guidance and inspect the repository without live code changes.
- [x] Pass 2, reconciliation plan: resolve SEO visibility, AI answer retrieval, training consent, privacy, security, content quality, sitemap, IndexNow, structured data, and performance tradeoffs.
- [x] Pass 3, safe patches: apply only reversible high-confidence fixes. Put risky crawler-policy, noindex, canonical, legal, training-bot, and large content decisions in `/audit` artifacts only.
- [x] Produce all requested files in `/audit`.
- [x] Run safe validation commands and record commands/results in `/audit/validation-commands.md`.

## Execution Notes

- [x] Treat Google AI Overviews and AI Mode as ordinary Google Search eligibility surfaces, not a reason for `llms.txt`, `ai.txt`, or custom AI schema.
- [x] Keep AI search/citation crawlers, user-triggered retrieval, and model-training crawlers separated in crawler policy analysis.
- [x] Do not expose secrets from `.env`, credentials, cookies, auth headers, or private data.
- [x] Prefer repo evidence and official documentation. Mark anything else as an assumption or speculative.

## Review

- Completed official-source verification and repository inventory for the May 7, 2026 audit target.
- Wrote the requested `/audit` artifacts, including route inventory, source matrix, crawler policy matrix, reconciliation plan, policy templates, validation commands, and changes-applied log.
- Applied only safe reversible patches: removed unsupported default review schema, tightened local IndexNow submission safety, and aligned optional LLM/vCard public NAP with `lib/site.ts`.
- Did not change live robots.txt crawler training policy, noindex/canonical classes, redirects, major content, legal copy, Web Bot Auth, or public llms.txt commitments without owner approval.
- Validation recorded in `/audit/validation-commands.md`: audit generator passed, syntax checks passed, typecheck passed after clearing stale generated `.next`, lint passed with existing warning, and `npx next build` passed.

# 2026-05-09 GSC Index Coverage + Top Search Optimization Goal

> Goal mode active. Fix the pasted GSC buckets with route-level evidence, not blanket rules. Preserve existing owner choices for model-training crawler policy. Do not deploy to production without explicit approval in this conversation.

## Inputs

- [x] GSC bucket pasted: Crawled - currently not indexed, 978 affected pages, last update 2026-05-03.
- [x] GSC bucket pasted: Page with redirect, 79 affected pages, last update 2026-05-03.
- [x] GSC bucket pasted: Not found (404), 199 affected pages, last update 2026-05-03.
- [x] GSC bucket pasted: Excluded by noindex tag, 709 affected pages, last update 2026-05-03.
- [x] Performance CSVs supplied:
  - `C:/Users/haithem/Downloads/mothebroker.com-Performance-on-Search-2026-05-09/Pages.csv`
  - `C:/Users/haithem/Downloads/mothebroker.com-Performance-on-Search-2026-05-09/Queries.csv`

## Working Plan

- [x] Preserve and account for the existing dirty worktree before editing.
- [x] Classify representative URLs from each GSC bucket into one of: keep indexable, redirect source, 404/410 retired, intentional noindex, accidental noindex, missing route, or sitemap/query cleanup.
- [x] Compare the current route policy, middleware redirects, sitemap excludes, robots headers, public sitemap, and generated audit reports against the pasted examples.
- [x] Patch only exact root causes found in code, route policy, sitemap generation, redirects, missing routes, or query-variant handling.
- [x] Verify each GSC error bucket with concrete samples, including expected status, redirect target, X-Robots-Tag, canonical/sitemap inclusion, and local build behavior.
- [x] Parse the top 25 pages and queries from the supplied CSV files, map them to current routes, and identify SEO/GEO/AIO/AEO optimization gaps.
- [x] Optimize the top 25 surfaces without creating duplicate thin content or unsupported schema.
- [x] Refresh llms/RSS/sitemap artifacts only when tied to changed public content or route policy.
- [x] Run validation: `npm run typecheck`, `npx next build`, sitemap generation/checks, and targeted URL/header checks.
- [x] Document a review section with exact resolved buckets, unresolved stale-GSC or deploy blockers, and production verification steps.

## Guardrails

- Do not treat a GSC row as broken just because it appears in an exclusion bucket. Redirect sources, non-content files, query variants, private admin paths, and intentionally pruned localized tool pages can be valid exclusions.
- Do not remove noindex from low-value programmatic tools or thin cloned geo pages unless search-performance data proves they should become money/support pages.
- Do not add `llms.txt`, `ai.txt`, or custom AI schema as a Google requirement.
- Do not deploy, submit sitemap, or request live GSC validation until production deployment is explicitly approved.

## Review

- Existing dirty worktree was preserved. This pass touched route policy, sitemap generation, middleware redirects, the luxury disposition source, targeted high-impression pages, a verification script, and generated audit/sitemap artifacts.
- Crawled currently not indexed: promoted selected support pages that had demand but were excluded from the sitemap or suppressed by noindex policy. Regenerated sitemap now has 382 URLs and no route-policy conflicts.
- Page with redirect: resolved redirect-vs-410 conflicts in the luxury disposition source, regenerated `lib/disposition/luxury-urls.ts`, and confirmed redirect sources are not included in the sitemap.
- Not found 404: converted valuable legacy URLs to 301 targets, kept intentionally retired programmatic URLs as explicit 410, and verified representative local statuses.
- Excluded by noindex: removed accidental page-level noindex from reverse mortgage support pages, allowlisted GSC-proven support pages, and kept non-content, query variants, and localized low-yield tool pages noindexed.
- Top 25 CSV optimization: added exact answer/citation hooks for ADU ROI and ADU loan calculator, Fannie Mae and Freddie Mac bankruptcy waits, HELOC draw and repayment terms, cash-out LTV, CA and WA mortgage broker queries, IRS Publication 936 home-equity interest, HECM upfront MIP tax handling, HECM PLF age 62, and proprietary reverse mortgage purchase LTV.
- Verification passed: `npm run sitemap`, `node scripts/verify-gsc-may-2026-fixes.mjs`, `npm run typecheck`, `npx next build`, sitemap policy checks, luxury sitemap conflict checks, and local production-server header checks.
- Not deployed. Production GSC validation still requires an explicit deploy approval, then Search Console recrawl validation after Google sees the new production responses.

# 2026-05-07 SEO GEO AIO AEO Implementation Pass

> Follow-up implementation pass requested by the owner. Apply non-conflicting audit recommendations and preserve existing model-training crawler consent unless the owner selects a different template.

## Scope

- [x] Add verified AI search and user-triggered retrieval agents to live robots policy without changing current training-bot allow/disallow choices.
- [x] Remove the root-layout `headers()` dependency from breadcrumb JSON-LD and keep static breadcrumb schema on pages that already render breadcrumbs.
- [x] Add a crawlable RSS feed from existing blog metadata and advertise it in root metadata.
- [x] Improve sitemap `lastmod` by reading explicit `dateModified` or `modifiedTime` values from page files before falling back to file mtime.
- [x] Replace client-side admin password gates with server-side middleware authentication based on environment variables.
- [x] Refresh `/audit` artifacts so they reflect the implementation pass.
- [x] Run typecheck, lint, build, RSS, robots, and sitemap validation.

## Implementation Notes

- [x] Do not expose secret-like values in code, audit files, terminal summaries, or generated reports.
- [x] Do not implement permissive or restrictive training-crawler policy automatically because those are mutually exclusive owner choices.
- [x] Keep `llms.txt` optional and non-Google.

## Review

- Implemented the non-conflicting audit recommendations and refreshed `/audit` to the post-implementation state.
- Preserved current model-training crawler choices while adding verified AI search and user retrieval agents for public content.
- Added middleware authentication for admin and admin-data surfaces. Production must have `ADMIN_PASSWORD` set or admin routes fail closed.
- Validation passed: typecheck, lint, script syntax checks, sitemap generation, Next build, RSS/admin local server checks, and sitemap route-policy check.

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

---

## Production Deploy 2026-05-09

- [x] Pull Vercel production environment for the linked project.
- [x] Build the production artifact through Vercel remote build with indexing automation disabled for this deploy-only request.
- [x] Deploy the production artifact to Vercel production.
- [x] Inspect the production deployment and verify key live URLs, redirects, 410s, sitemap, and noindex headers.
- [x] Record deployment URL and verification results.

### Production Deploy Review

- Deployment: `dpl_5ybCvDFBktP8R4KsR5pvEmuGVFAR`
- Production URL: `https://www.mothebroker.com`
- Deployment URL: `https://brokersiteupdate-6h9aij36h-moabdels-projects.vercel.app`
- Inspector: `https://vercel.com/moabdels-projects/brokersiteupdate/5ybCvDFBktP8R4KsR5pvEmuGVFAR`
- Build result: Vercel production build completed successfully and aliased `www.mothebroker.com`.
- Indexing automation: disabled for this deploy-only request with `DISABLE_AUTO_INDEXING_ON_PROD=true`.
- Live verification artifact: `audit/production-deploy-2026-05-09-results.json`
- Live checks passed:
  - `/` returns `200` with no robots exclusion.
  - `/sitemap.xml` returns `200` and includes `382` URLs.
  - Promoted pages return `200` with no `X-Robots-Tag`.
  - Consolidated URLs return permanent redirects.
  - Retired tool URL returns `410`.
  - Intentional noindex URLs still return `X-Robots-Tag`.
  - Bare and HTTP domains redirect toward `https://www.mothebroker.com`.
- Note: local `vercel build --prod` on Windows failed before compile with `spawn cmd.exe ENOENT`, so deployment used Vercel remote build with the same indexing-disable build env.

---

## Indexing Submission 2026-05-09

- [x] Build the changed-URL indexing delta.
- [x] Submit changed URLs through IndexNow and Bing where credentials allow.
- [x] Submit the production sitemap to Google Search Console where credentials allow.
- [x] Record submission counts and blockers.

### Indexing Submission Review

- Delta built: `43` changed URLs.
- GSC sitemap submit: success.
- GSC URL submit: `43` success, `0` errors.
- IndexNow: `43` URLs submitted in `1` batch.
- Bing Webmaster API: skipped because `BING_API_KEY` / `BING_WEBMASTER_API_KEY` is not available in the current local or pulled production env.
- Safety fix: patched indexing delta filtering so future Google, Bing, and IndexNow URL submissions only accept URLs present in `public/sitemap.xml`.
- Verification artifact: `audit/indexing-submission-2026-05-09.md`

---

## Home Equity Route Move 2026-06-03

- [x] Move `lander/app/home-equity` into the main app route folder.
- [x] Confirm `/home-equity` no longer returns 404 on the dev server.
- [x] Record verification results.

### Home Equity Route Move Review

- Moved route files into `app/home-equity`.
- Removed unsupported top-level `:global(html)` selector from `page.module.css` after Next compiled the moved route and returned a CSS Modules purity error.
- Local dev verification: `/home-equity` returns `200`.
- Page title verified: `Home Equity Options: Figure HELOC vs Aven Card | Lumin Lending`.
- H1 verified: `Access Home Equity Without Refinancing Your Mortgage`.
- TypeScript verification: `npm run typecheck` passed.

---

## Home Equity Duplicate Nav Removal 2026-06-03

- [x] Remove the duplicated route-level brand/navigation bar from `/home-equity`.
- [x] Remove CSS used only by that duplicated navigation bar.
- [x] Verify `/home-equity` still renders locally.
- [x] Run TypeScript verification.
- [x] Record verification results.

### Home Equity Duplicate Nav Removal Review

- Removed the route-level `<header>` and primary navigation from `app/home-equity/page.tsx`.
- Removed unused header-only CSS selectors from `app/home-equity/page.module.css`.
- Kept the in-page section anchor navigation intact.
- Local dev verification: `/home-equity` renders with H1 `Access Home Equity Without Refinancing Your Mortgage`.
- Browser check: duplicated route header count is `0`, section anchor nav count is `1`.
- TypeScript verification: `npm run typecheck` passed.

---

## Home Equity Figure Copy Tightening 2026-06-03

- [x] Update the Figure section eyebrow, headline, subhead, cards, highlights, and CTA copy.
- [x] Preserve compliance hedging and no-em-dash copy style.
- [x] Verify `/home-equity` still renders locally.
- [x] Run TypeScript verification.
- [x] Record verification results.

### Home Equity Figure Copy Tightening Review

- Updated the Figure section eyebrow to `Fast · digital · HELOC-style`.
- Updated the Figure headline, subhead, six cards, highlights list, and approval note.
- Kept compliance hedging such as `may`, `potential`, `in some scenarios`, and `subject to approval`.
- Confirmed the route contains no em dash characters.
- Local browser verification: `/home-equity#figure` renders the new Figure headline, card copy, and `$25K-$750K line amounts` highlight.
- TypeScript verification: `npm run typecheck` passed.

---

## Home Equity Duplicate Footer Removal 2026-06-03

- [x] Remove the duplicated route-level footer from `/home-equity`.
- [x] Remove CSS used only by that duplicated footer.
- [x] Verify `/home-equity` still renders locally.
- [x] Run TypeScript verification.
- [x] Record verification results.

### Home Equity Duplicate Footer Removal Review

- Removed the route-level `<footer>` from `app/home-equity/page.tsx`.
- Removed unused footer, footer grid, footer brand, avatar, and legal CSS selectors from `app/home-equity/page.module.css`.
- Kept the apply-section contact line and mobile sticky CTA.
- Local HTTP verification: `/home-equity` returns `200`, H1 is present, old route-footer brand copy is absent, and mobile sticky CTA markup remains.
- TypeScript verification: `npm run typecheck` passed.

---

## Home Equity Page Refactoring & Optimization 2026-06-03

- [x] Create the interactive Equity Estimator Widget (slider calculator) in `app/home-equity/page.tsx`
- [x] Consolidate Figure and Aven 12 detailed cards into two premium side-by-side product cards
- [x] Move and condense the Comparison Table to the top (6 key decision drivers)
- [x] Remove `page.module.css` and rewrite the page using Tailwind CSS utility classes
- [x] Run typecheck and local verification (typecheck passed; build passed)

### Home Equity Page Refactoring Review

- **Refactored page:** [page.tsx](file:///c:/Users/haithem/projects/brokersiteupdate/app/home-equity/page.tsx)
- **New component:** [EquityCalculator.tsx](file:///c:/Users/haithem/projects/brokersiteupdate/components/home-equity/EquityCalculator.tsx)
- **Removed file:** `app/home-equity/page.module.css` (deleted)
- **Result:** Successfully refactored the layout to use native Tailwind CSS classes, added the client-side calculator widget, compressed the card layouts, and condensed the comparison table. Both TypeScript checking and Next.js build compilation passed successfully.

---

## Support Bubble Modal Optimization 2026-06-03

- [x] Modify form state in `components/SupportBubble.tsx` to use `fullName` and remove `message`
- [x] Implement active form validation for the terms checkbox (removing the faded disabled button)
- [x] Combine name inputs and remove the message textarea in the modal JSX layout
- [x] Tighten layout styling in the Support Bubble modal to fit compact screen heights
- [/] Run typecheck and local verification (typecheck passed; build in progress)

---

## Dev Server Refresh & Gemini Diff Verification 2026-06-03

- [ ] Confirm Gemini widget/form changes are present in the dirty working tree.
- [ ] Find and fix the reason old widget/form bundles can still show locally.
- [ ] Clear stale Next.js dev artifacts and restart the dev server on port 3000.
- [ ] Verify `/home-equity` returns 200 and the updated widget/form strings are in the served client bundle.
- [ ] Run TypeScript verification or document any blocker.
- [ ] Record verification results.

---

## Home Equity Floating CTA Replacement 2026-06-03

- [x] Confirm the rendered global chat widget path.
- [x] Create reusable `HomeEquityFloatingCTA` component linking to `/home-equity`.
- [x] Add responsive global CTA styles with hover, active, focus-visible, and reduced-motion states.
- [x] Replace the global `SupportBubble` mount so the old `Chat with Mo` launcher no longer renders.
- [x] Verify the CTA renders, old launcher copy is absent, and clicking the pill targets `/home-equity`.
- [x] Run TypeScript and production build verification or document blockers.
- [x] Record review results.

### Home Equity Floating CTA Replacement Review

- Added `components/HomeEquityFloatingCTA.tsx` with fixed accessible label, inline home icon, text stack, and chevron.
- Replaced the global `SupportBubble` render in `components/DeferredWidgets.tsx` with `HomeEquityFloatingCTA`, so the old chat launcher no longer hydrates globally.
- Added global styles in `app/globals-simple.css` for desktop and mobile fixed positioning, high z-index, hover, active, focus-visible, and reduced-motion states.
- Desktop browser verification on `http://localhost:3001/`: one CTA link, `href="/home-equity"`, `268px` by `76px`, fixed position, `z-index: 2147483000`, and no `Chat with Mo` or `Online now` text in the hydrated body.
- Click verification: activating the pill navigated to `http://localhost:3001/home-equity`.
- Mobile browser verification at `390x844`: CTA rendered `252px` wide, stayed inside the viewport, sat `88px` above the bottom, and old chat copy was absent.
- Browser console verification: no warnings or errors reported for the checked page.
- CTA accessibility checks: one named link was found by role, title contrast on white is `17.85:1`, subtitle contrast on white is `4.66:1`, and white icon contrast on blue is `5.17:1`.
- Verification passed: `npm run typecheck` and `npx next build`.
- Note: initial `npm run typecheck` failed because stale untracked `tsconfig.tsbuildinfo` referenced missing `.next/types` files. Removed that generated cache file and reran successfully.
- Note: broad built-bundle string search across `.next` timed out in this large build. Live hydrated browser checks confirmed the old launcher copy is not rendered.

---

## Cookie Banner CTA Overlap Fix 2026-06-03

- [x] Confirm the cookie banner overlap source.
- [x] Center the banner copy and action group so buttons do not sit behind the Home Equity CTA.
- [x] Run TypeScript verification.
- [x] Browser-verify the banner buttons are visible with the Home Equity CTA present.
- [x] Record review results.

### Cookie Banner CTA Overlap Fix Review

- Updated `components/CookieBanner.tsx` so the fixed bottom banner uses a centered inner container, centered text, and a centered action group.
- Kept the cookie copy and button labels unchanged.
- Root cause: the previous full-width `justify-between` layout pushed `Accept All` to the far right, where the floating Home Equity CTA could cover it.
- Verification passed: `npm run typecheck`.
- Dev server verification: `http://localhost:3000` returns `200`.
- Browser verification at `1280x720`: cookie copy has `text-align: center`; `Decline` and `Accept All` are visible; neither button overlaps the Home Equity CTA.
- Browser verification at `1920x920`: `Decline` and `Accept All` are visible; neither button overlaps the Home Equity CTA.
- Note: the browser console retained two Next dev chunk errors from hot reload while the dev server was updating. The page rendered and the measured cookie banner layout was correct.

---

## Homepage Calculator Removal And Vercel Events 2026-06-03

- [x] Confirm where the homepage wholesale savings calculator is rendered.
- [x] Remove the calculator UI and unused hero calculation state.
- [x] Keep the hero balanced after removing the right column.
- [x] Add privacy-safe Vercel Analytics events for `/api/contact` submissions.
- [x] Add privacy-safe Vercel Analytics events for newsletter submissions.
- [x] Add a Vercel Analytics event for the floating `Tap Home Equity` CTA click.
- [x] Run TypeScript and build verification.
- [x] Browser-verify the homepage no longer shows `Wholesale Savings Calculator` and the CTA still routes to `/home-equity`.
- [x] Record review results.

### Homepage Calculator Removal And Vercel Events Review

- Removed the homepage `Wholesale Savings Calculator` card and unused calculator state from `components/home/HeroSection.tsx`.
- Re-centered the hero content after removing the right-side calculator column.
- Added privacy-safe Vercel Analytics server events for `/api/contact` outcomes: accepted submissions, blocked submissions, Formspree rejection, and API exceptions.
- Added privacy-safe Vercel Analytics server events for `/api/newsletter` outcomes: accepted submissions, blocked submissions, validation failures, duplicates, and API exceptions.
- Added client-side Vercel Analytics tracking for the global floating `Tap Home Equity` CTA click.
- Added client-side newsletter tracking for the direct Formspree newsletter forms that do not use `/api/newsletter`.
- Verification passed: `npm run typecheck`.
- Verification passed: `npx next build`.
- Dev server restarted on `http://localhost:3000` after the production build wrote `.next`.
- Local HTTP verification: `/` returns `200`, does not contain `Wholesale Savings Calculator`, contains `Tap Home Equity`, and contains `href="/home-equity"`.
- Local route verification: `/home-equity` returns `200`.
- Browser screenshot verification: `reports/homepage-after-calculator-removal.png` shows the re-centered homepage hero without the calculator and with the floating `Tap Home Equity` CTA visible.
- Note: Vercel custom event dashboards require Vercel Web Analytics custom events support on the deployed project plan.

---

## Wholesale Lenders Homepage Landing 2026-06-03

- [x] Append the approved implementation plan and keep the scope limited to the homepage landing build.
- [x] Add a real DOM landing component with scoped `ma-` classes, responsive layout, modal lead form, and reference-matched hero/trust band.
- [x] Add `/api/loan-options` JSON lead endpoint with required-field validation.
- [x] Create the requested Mo Abdel image asset filenames from the existing headshot unless a separate approved hero cutout is supplied.
- [x] Wire `/` to the new landing while preserving existing metadata and JSON-LD.
- [x] Prevent duplicate global header/footer/floating widgets from appearing over the homepage reference layout without changing interior pages.
- [x] Run TypeScript and build verification.
- [x] Browser-verify desktop, mobile, modal open/close, and API submission behavior.
- [x] Record review results.

### Wholesale Lenders Homepage Landing Review

- Added `components/WholesaleLendersLanding.tsx` and `components/WholesaleLendersLanding.css` with real DOM header, hero, trust band, modal lead form, responsive mobile layout, scoped `ma-` selectors, and no raw content images.
- Added `app/api/loan-options/route.ts` for JSON lead submissions with required-field validation.
- Updated `app/page.tsx` to render the new landing while keeping the existing metadata and JSON-LD.
- Imported the landing CSS in `app/layout.tsx` and used CSS-only homepage hiding for the root header/footer to avoid duplicate visible chrome on `/`.
- Updated `components/DeferredWidgets.tsx` so analytics remain loaded while visible widgets and popups stay off the homepage.
- Created `public/images/mo-abdel-headshot.png` and `public/images/mo-abdel-hero.png` from the existing Mo headshot assets. The hero image is a fallback, true visual parity still needs the supplied transparent hero portrait/cutout.
- Verification passed: `npm run typecheck`.
- Verification passed: `npx next build`.
- Browser desktop verification at `1672x941`: landing rendered, H1 stayed to two lines, trust band visible in first viewport, no horizontal overflow, root header/footer hidden, floating CTA absent. Screenshot: `reports/wholesale-landing-desktop-1672-final.png`.
- Browser mobile verification at `390x844`: nav/header CTA hidden, content stacked, CTAs and stats stayed inside viewport, no horizontal overflow. Screenshot: `reports/wholesale-landing-mobile-390-final.png`.
- Modal/API verification: primary CTA opened the modal, required fields submitted successfully, success state rendered, complete payload returned `200`, missing fields returned `400`.
- Final dev server is running on `http://localhost:3000`; browser checks used `http://127.0.0.1:3000` to bypass a stale in-app browser cache for `localhost`.

---

## Wholesale Lenders Homepage Exact Asset Correction 2026-06-03

- [x] Replace the fallback/raw hero image logic with `mo-abdel-hero-right-exact.png` pinned to the desktop hero right edge.
- [x] Remove the separate desktop license card because the license card is baked into the exact hero asset.
- [x] Keep the nav avatar on `mo-abdel-headshot.png` and preserve the modal lead form posting JSON to `/api/loan-options`.
- [x] Match the approved desktop geometry: 88px header, 678px hero, 1450px inner max width, trust band immediately after the hero.
- [x] Restore the missing lower sections: process stepper, wholesale advantage, guides/resources, communities, reviews, and footer.
- [x] Verify with `npm run typecheck`, `npx next build`, and browser screenshots at `1672x941` plus mobile.

### Wholesale Lenders Homepage Exact Asset Correction Review

- Rebuilt `components/WholesaleLendersLanding.tsx` around the supplied `mo-abdel-hero-right-exact.png` desktop asset and `mo-abdel-headshot.png` nav avatar.
- Removed the old separate desktop license card and old raw hero fallback usage from the rendered landing.
- Restored the lower sections after the trust band: process stepper, wholesale advantage, guides/resources, communities, reviews, and landing footer.
- Kept the lead modal and `/api/loan-options` JSON endpoint. Valid payload returned `200`; missing fields returned `400`.
- Verification passed: `npm run typecheck`.
- Verification passed: `npx next build`.
- Production browser desktop verification at `1672x941`: header `88px`, hero `678px`, hero starts at `y=88`, trust band starts at `y=766`, hero image is `724x678`, image is flush right, root header hidden, no separate license card, no raw fallback hero image, no horizontal overflow, and lower sections exist.
- Desktop screenshot: `reports/wholesale-landing-desktop-1672-production.png`.
- Mobile browser verification at `390x844`: header call button hidden, content stacked, no horizontal overflow, modal opens with all required fields.
- Mobile screenshot: `reports/wholesale-landing-mobile-390-production.png`.
- Modal screenshot: `reports/wholesale-landing-modal-mobile.png`.
- Production server is running on `http://127.0.0.1:3000`.

---

## Wholesale Landing Shared Header Correction 2026-06-03

- [ ] Remove the custom landing-only header from `WholesaleLendersLanding`.
- [ ] Stop hiding the global `Header` on `/` so the homepage uses the same navigation as `/loan-programs` and other pages.
- [ ] Keep the landing footer hidden from the global footer only where needed, preserving the landing page footer section.
- [ ] Adjust homepage spacing for the shared fixed header.
- [ ] Verify `/` and `/loan-programs` render the same shared header.

---

## Wholesale Advantage Heading Line Break 2026-06-03

- [x] Split the Wholesale Advantage heading so `Broker vs. Banks` starts on a new line.
- [x] Run TypeScript verification.

### Wholesale Advantage Heading Line Break Review

- Updated the Wholesale Advantage heading in `components/WholesaleLendersLanding.tsx` to render `Broker vs. Banks` on the next line.
- Verification passed: `npm run typecheck`.

---

## Homepage Widget Fold Polish 2026-06-03

- [x] Render the accessibility widget, Tap Home Equity CTA, and exit-intent modal on the homepage.
- [x] Add the `lumin.png` logo overlay to the baked hero license card.
- [x] Move the hero content upward and compact the trust band so it fits in the first desktop viewport.
- [x] Add an animated chevron scroll cue.
- [x] Run TypeScript and production build verification.
- [x] Browser-verify desktop and mobile homepage behavior.
- [x] Record review results.

### Homepage Widget Fold Polish Review

- Updated `components/DeferredWidgets.tsx` so the homepage mounts `ExitIntentModal`, `HomeEquityFloatingCTA`, and `AccessibilityWidget` while keeping unrelated deferred widgets off the wholesale landing.
- Updated `components/WholesaleLendersLanding.tsx` to add the animated scroll cue and a `lumin.png` overlay on the baked hero license card.
- Tightened the desktop hero in `components/WholesaleLendersLanding.css` from `678px` to `640px`, lifted the content, compacted the trust band, and added a homepage-only accessibility display override.
- Verification passed: `npm run typecheck`.
- Verification passed: `npx next build`.
- Browser verification on `http://127.0.0.1:3003` at `1920x900`: trust band bottom is `870`, so the full `Trusted by Homebuyers` section is visible on landing. Accessibility widget count `1`, Tap Home Equity count `1`, Lumin overlay count `1`, and scroll cue count `1`.
- Exit-intent modal verification: the homepage mounted modal component and the timed fallback displayed the rate quote modal after the built-in `45000ms` delay.
- Mobile browser verification at `390x844`: no horizontal overflow, Tap Home Equity count `1`, accessibility widget count `1`, and Lumin overlay count `1`.
- Screenshots: `reports/homepage-widget-fold-final-desktop-1920.png` and `reports/homepage-widget-fold-final-mobile-390.png`.


