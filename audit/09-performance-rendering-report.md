# Performance And Rendering Report

Audit date: 2026-05-07

## Stack

- Next.js version: ^15.4.6
- React version: ^19.1.1
- Package manager: npm
- Vercel deployment hints: vercel.json, next.config.mjs, Vercel Analytics.

## Rendering risks

- Root layout no longer mounts BreadcrumbJsonLd and BreadcrumbJsonLd no longer imports next/headers. Breadcrumb schema is now emitted from pages that already render Breadcrumbs with static pathname props.
- Client components are present for widgets and tracking. Verify important content remains server-visible in generated HTML.
- Use npx next build for local compile-only verification because npm run build invokes postbuild and external indexing scripts.

## Core Web Vitals risks

- LCP: verify hero image size, next/image priority, font loading, and server response time.
- INP: verify hydration cost from widgets, analytics, Facebook Pixel, and deferred UI.
- CLS: verify image dimensions, dynamic banners, and embedded widgets.
- Crawl efficiency: keep redirects one hop, avoid infinite route generation, and keep sitemap canonical.

## Checks run by this audit

- Route inventory generated from App Router source files.
- Sitemap parsed from public/sitemap.xml.
- Robots and crawler policy parsed from public/robots.txt and next-sitemap.config.js.
- node --check passed for scripts/build-may-2026-seo-audit.mjs and scripts/submit-indexing-after-build.mjs.
- npm run typecheck passed after removing stale generated .next/types from an earlier build.
- npm run lint passed with the existing Next.js plugin detection warning.
- npx next build passed after this implementation pass and generated 2684 static pages including /rss.xml. Root-level routes now build as static pages instead of inheriting the prior breadcrumb header dependency.
- Build warning from the audit pass: using edge runtime on a page currently disables static generation for that page.
- Additional commands are listed in validation-commands.md.
