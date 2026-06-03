# Changes Applied

Audit date: 2026-05-07

## Applied

1. Removed unsupported site-wide AggregateRating from lib/seo.ts.
   - Why safe: structured data must match visible content. No visible site-wide 4.9 rating and 127 review count support was found.
   - Rollback: restore the removed aggregateRating block only if genuine visible review data is added.

2. Made aggregateRating optional in components/seo/AdvancedSchemaMarkup.tsx.
   - Why safe: the component is not currently imported by app/components/lib search, and this prevents future default fake review schema.
   - Rollback: restore default only if visible review evidence exists on pages using it.

3. Restricted automatic postbuild indexing to Vercel production builds in scripts/submit-indexing-after-build.mjs.
   - Why safe: explicit ENABLE_* flags still work, but local NODE_ENV=production builds no longer auto-submit changed URLs.
   - Rollback: restore NODE_ENV=production behavior only if the team wants local production builds to submit URLs.

4. Aligned optional LLM files and vCard NAP to lib/site.ts.
   - Files: public/llms.txt, public/llms-full.txt, public/mo-abdel-contact.vcf.
   - Why safe: public entity files now match the runtime site constants. llms.txt remains optional and non-Google.
   - Rollback: update lib/site.ts and these public files together if the business address changes.

5. Updated live robots policy for verified AI search and user retrieval agents without changing model-training consent.
   - Files: next-sitemap.config.js, public/robots.txt.
   - Why safe: official crawler docs separate search, user retrieval, and training. This implements visibility agents while preserving current training-bot policy.
   - Rollback: restore the previous policy block or choose one of the robots templates in /audit.

6. Removed root-layout dynamic breadcrumb dependency and kept static BreadcrumbList JSON-LD on visible breadcrumb pages.
   - Files: app/layout.tsx, components/navigation/Breadcrumbs.tsx, components/seo/BreadcrumbJsonLd.tsx, lib/breadcrumbs.ts, pages that render Breadcrumbs.
   - Why safe: removes next/headers from the root layout path and preserves schema where visible breadcrumbs already exist.
   - Rollback: revert the breadcrumb files and affected page props.

7. Added RSS feed discovery for active blog and guide content.
   - Files: app/rss.xml/route.ts, app/layout.tsx.
   - Why safe: uses existing lib/all-blog-posts.ts metadata and does not change page indexability.
   - Rollback: remove the route and alternate feed link.

8. Improved sitemap lastmod extraction.
   - File: next-sitemap.config.js.
   - Why safe: uses explicit page-level dateModified or modifiedTime values already present in source files before falling back to mtime.
   - Rollback: remove getExplicitPageLastMod usage.

9. Replaced client-side admin password gates with middleware authentication.
   - Files: middleware.ts, app/admin/page.tsx, app/admin/data/page.tsx, app/admin/weekly-update/page.tsx, .env.example.
   - Why safe: admin and admin-data surfaces fail closed when ADMIN_PASSWORD is not configured and no secret value is stored in client code.
   - Rollback: restore the deleted client component only after replacing it with a server-side auth alternative.

## Not applied

- Live model-training crawler policy was preserved because permissive and restrictive training choices are mutually exclusive owner decisions.
- No broad noindex, canonical, redirect, delete, 410, or content rewrite decisions were applied.
- No llms.txt expansion was applied as a Google AI requirement.
- No Web Bot Auth implementation was applied.

## Validation results

- node scripts/build-may-2026-seo-audit.mjs: passed.
- node --check scripts/build-may-2026-seo-audit.mjs: passed.
- node --check scripts/submit-indexing-after-build.mjs: passed.
- npm run typecheck: passed.
- npm run lint: passed with the existing Next.js plugin detection warning.
- npx next build: passed after implementation pass and generated 2684 static pages, including /rss.xml.
