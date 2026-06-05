# Post-deploy SEO validation - 2026-06-05

## A. Production validation decision

Decision: PARTIAL.

The live production SEO validation passed for the target pages, sitemap, robots.txt, Playwright, and Lighthouse crawlability checks. The deployment process failed the no-indexing constraint because the Vercel production postbuild automatically submitted IndexNow before validation completed.

Deployment: https://brokersiteupdate-nr9xjdgds-moabdels-projects.vercel.app
Alias: https://www.mothebroker.com
Commit: ed865422d0f7524cc5a426eadc9a63872d236e8e
Vercel deployment ID: dpl_AnbVQguYH9PbRUg3E6x7M7c4kwXF

Process failure: Vercel ran `postbuild` with `next-sitemap && node scripts/submit-indexing-after-build.mjs`. Build logs show 577 delta URLs, GSC submission attempts failed because `gsc-credentials.json` was missing, Bing submission was skipped because no Bing API key was present, and IndexNow submitted 380 sitemap-eligible delta URLs in 1 batch. I did not manually run any indexing request, but the deploy pipeline did.

## B. Live Orange County indexability result

Passed.

- URL: https://www.mothebroker.com/tools/property-tax-estimator/ca/orange-county
- HTTP status: 200
- Redirected: false
- `X-Robots-Tag`: absent
- Meta robots: index, follow
- Googlebot meta: index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1
- Canonical: https://www.mothebroker.com/tools/property-tax-estimator/ca/orange-county
- Canonical matches expected URL: true
- H1: Orange County Property Tax Rate & Calculator
- JSON-LD valid scripts: 4/4
- Schema types: BreadcrumbList, WebApplication, FAQPage, Organization, Person, LocalBusiness, FinancialService, WebSite
- BreadcrumbList count: 1
- Visible page modules: answer block, semantic table, source box, reviewed date, and FAQ all present.

## C. Live sitemap result

Passed.

- URL: https://www.mothebroker.com/sitemap.xml
- HTTP status: 200
- Content type: application/xml
- XML parse: true
- URL count: 384
- Local expected URL count: 384
- Orange County target included: true
- Orange County lastmod: 2026-06-05T13:17:16.000Z
- Thin property-tax sitemap URLs found: 0

## D. Live robots result

Passed.

- URL: https://www.mothebroker.com/robots.txt
- HTTP status: 200
- Multiline format: true
- Sitemap references: https://www.mothebroker.com/sitemap.xml, https://www.mothebroker.com/sitemap-images.xml
- Googlebot can access target page: true
- Bingbot can access target page: true
- Accidental search-crawler global disallow: false
- Critical CSS/JS blocked for Googlebot or Bingbot: false

Note: `Disallow: /` appears only in named excluded crawler groups. Googlebot, Bingbot, and wildcard groups allow `/`.

## E. Live reverse-rates result

Passed.

- URL: https://www.mothebroker.com/blog/reverse-mortgage-interest-rates-current-2026
- HTTP status: 200
- `X-Robots-Tag`: absent
- Has noindex: false
- Canonical: https://www.mothebroker.com/blog/reverse-mortgage-interest-rates-current-2026
- H1: Current Reverse Mortgage Interest Rates in 2026
- JSON-LD valid scripts: 6/6
- BreadcrumbList count: 1
- Schema dateModified: 2026-06-05
- Stale March 2026 text in title, H1, meta, social metadata, schema, visible text, or raw HTML: none detected.

## F. Playwright production result

Passed.

- Checks: 6/6 passed
- Failures: 0
- Warnings: 0
- Blocking load failures: 0
- Raw request failures: 17
- Note: Raw request failures were analytics/beacon aborts or homepage RSC prefetch aborts. Blocking first-party document, CSS, JS, image, canonical, schema, noindex, and layout checks passed.
- Screenshots captured: desktop and mobile for homepage, Orange County property-tax page, and reverse-rates page.

## G. Lighthouse production result

Passed for indexing and performance gates.

- Homepage: Performance 100, Accessibility 91, Best Practices 58, SEO 100, LCP 0.6 s, CLS 0, TBT 0 ms. Crawlability, canonical, robots.txt, and crawlable-link audits passed.
- Orange County property-tax page: Performance 100, Accessibility 94, Best Practices 58, SEO 92, LCP 0.6 s, CLS 0, TBT 0 ms. Crawlability, canonical, robots.txt, and crawlable-link audits passed.
- Reverse-rates page: Performance 100, Accessibility 91, Best Practices 58, SEO 92, LCP 0.6 s, CLS 0, TBT 0 ms. Crawlability, canonical, robots.txt, and crawlable-link audits passed.

Best Practices remains 58 on all three samples due deprecated APIs, third-party cookies, and Chrome DevTools Issues panel entries. This is not blocking the P0 indexability fix.

## H. Accidental-indexation safety check

Manual controlled indexing actions were not executed after validation.

Non-allowlisted localized property-tax samples stayed protected:

- https://www.mothebroker.com/tools/property-tax-estimator/ca/orange-county/irvine: status 200, noindex true, in sitemap false
- https://www.mothebroker.com/tools/property-tax-estimator/ca/los-angeles-county: status 200, noindex true, in sitemap false
- https://www.mothebroker.com/tools/property-tax-estimator/ca/san-diego-county: status 200, noindex true, in sitemap false
- https://www.mothebroker.com/tools/property-tax-estimator/wa/pierce-county: status 200, noindex true, in sitemap false
- https://www.mothebroker.com/tools/property-tax-estimator/wa/snohomish-county/everett: status 200, noindex true, in sitemap false

Important exception: the Vercel production postbuild automatically submitted IndexNow for 380 sitemap-eligible delta URLs during deployment. That was not a manual action, but it violated the requested no-indexing-before-validation constraint.

## I. Search console actions prepared, not executed

Prepared eligible target only:

- GSC URL inspection: https://www.mothebroker.com/tools/property-tax-estimator/ca/orange-county
- GSC request indexing: https://www.mothebroker.com/tools/property-tax-estimator/ca/orange-county
- GSC sitemap submit or refresh: https://www.mothebroker.com/sitemap.xml
- IndexNow payload prepared only:

```json
{
  "host": "www.mothebroker.com",
  "key": "f56edfca5e434ba8bda3e1cb34e4a6d9",
  "keyLocation": "https://www.mothebroker.com/f56edfca5e434ba8bda3e1cb34e4a6d9.txt",
  "urlList": [
    "https://www.mothebroker.com/tools/property-tax-estimator/ca/orange-county"
  ]
}
```

Excluded from controlled indexing: non-allowlisted localized property-tax routes, noindex URLs, non-self-canonical URLs, unrelated blog pages, and full-sitemap bulk submission.

No Search Console, Bing, or manual IndexNow action should be executed until the owner approves and the production auto-indexing behavior is disabled or intentionally accepted.

## J. Remaining risks

- The production deployment pipeline currently auto-enables delta indexing on Vercel production builds unless `DISABLE_AUTO_INDEXING_ON_PROD=true` is set or the postbuild step is changed.
- IndexNow already received a broad 380 URL delta submission from this deployment. Additional manual indexing should wait for approval.
- External search systems still need follow-up checks at 7, 14, and 30 days for indexing state, impressions, clicks, CTR, and average position.
- Lighthouse Best Practices remains low because of existing third-party and browser issues, not because of page indexability.

## K. Files/artifacts created

- `reports/post-deploy-seo-validation-2026-06-05.md`
- `reports/post-deploy-seo-validation-2026-06-05.json`
- `reports/production-playwright-2026-06-05/playwright-production-validation.json`
- `reports/production-playwright-2026-06-05/desktop-home.png`
- `reports/production-playwright-2026-06-05/desktop-orange-county-property-tax.png`
- `reports/production-playwright-2026-06-05/desktop-reverse-rates.png`
- `reports/production-playwright-2026-06-05/mobile-home.png`
- `reports/production-playwright-2026-06-05/mobile-orange-county-property-tax.png`
- `reports/production-playwright-2026-06-05/mobile-reverse-rates.png`
- `reports/production-lighthouse-2026-06-05/home-desktop.json`
- `reports/production-lighthouse-2026-06-05/orange-county-property-tax-desktop.json`
- `reports/production-lighthouse-2026-06-05/reverse-rates-desktop.json`
- `reports/production-lighthouse-2026-06-05/lighthouse-summary.json`
