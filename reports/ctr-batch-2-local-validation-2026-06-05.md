# CTR Batch 2 Local Validation

Date: 2026-06-05

## Scope

Local-only CTR/AIO updates for four approved URLs:

- `/blog/heloc-interest-tax-deduction-rules-2026`
- `/blog/dscr-loan-interest-only-options-2026`
- `/blog/dscr-loan-llc-entity-structure-2026`
- `/blog/dscr-loan-seasoning-requirements-2026`

No deploy, push, indexing request, sitemap submission, Bing submission, IndexNow submission, or indexing automation edit was performed.

## Files Changed

- `app/blog/heloc-interest-tax-deduction-rules-2026/page.tsx`
- `app/blog/dscr-loan-interest-only-options-2026/page.tsx`
- `app/blog/dscr-loan-llc-entity-structure-2026/page.tsx`
- `app/blog/dscr-loan-seasoning-requirements-2026/page.tsx`
- `reports/internal-link-audit.csv`
- `reports/internal-link-audit.json`
- `tasks/todo.md`

## Page Checks

All four local routes on `http://127.0.0.1:3018` returned:

- HTTP 200
- No `x-robots-tag: noindex`
- No robots meta `noindex`
- Self canonical
- Expected title tag and meta description
- One H1
- Visible quick answer block
- Visible semantic table
- Visible source box
- Visible FAQ content
- Article schema with `dateModified` set to 2026-06-05
- FAQPage schema
- BreadcrumbList schema

## Source Link Checks

All new official source links returned HTTP 200:

- IRS Publication 936
- IRS Schedule A
- CFPB interest-only loan page
- CFPB mortgage overview
- California Secretary of State BizFile Online
- Washington Secretary of State Corporations and Charities
- IRS EIN page
- Fannie Mae cash-out refinance transactions

## Commands Run

- `npm run typecheck`
- `npm run lint`
- `git diff --check -- app/blog/heloc-interest-tax-deduction-rules-2026/page.tsx app/blog/dscr-loan-interest-only-options-2026/page.tsx app/blog/dscr-loan-llc-entity-structure-2026/page.tsx app/blog/dscr-loan-seasoning-requirements-2026/page.tsx`
- `node --test scripts/__tests__/seo-route-policy.test.mjs`
- `node --test scripts/__tests__/indexing-safety.test.mjs`
- `npm run seo:validate`
- `npm run indexing:dry-run`
- `npm run indexing:validate-allowlist`
- `node scripts/internal-link-audit.mjs`
- `npm run build`
- Rendered `SEO_VALIDATE_BASE_URL=http://127.0.0.1:3018 npm run seo:validate` using PowerShell env syntax.
- Custom rendered HTML and JSON-LD validation for the four Batch 2 routes.
- Chrome CDP viewport validation at 390px and 1366px.
- Official source URL verification.

## Results

- TypeScript: passed.
- Lint: passed with existing Next lint deprecation and plugin warnings.
- SEO route policy tests: passed, 2 tests.
- Indexing safety tests: passed, 11 tests.
- SEO priority validation: passed.
- Rendered SEO validation: passed.
- Internal-link audit: passed, 384 sitemap entries analyzed, 78 existing orphaned entries.
- Build: passed. Postbuild indexing stayed report-only.
- Indexing dry run: zero URLs submitted, `network submission performed: false`.
- Indexing allowlist validation: zero URLs submitted, `network submission performed: false`.
- Viewport validation: no page-level horizontal overflow at 390px or 1366px for all four routes.

## Remaining Risks

- These updates are local-only until a separately approved commit, push, and deploy occurs.
- Search engines can rewrite titles or snippets after deployment.
- The 78 orphaned sitemap entries are pre-existing and outside this batch.
