# Structured Data Report

Audit date: 2026-05-07

Repository evidence: site-wide schema is defined in lib/seo.ts and injected by app/layout.tsx. Reusable schema helpers are in lib/schema-entities.ts, lib/schema/financial-product.ts, lib/schema/dataset.ts, and components/seo.

## Current types found

- Organization, Person, LocalBusiness, FinancialService, WebSite, OfferCatalog, Offer, LoanOrCredit in lib/seo.ts.
- BreadcrumbList in components/seo/BreadcrumbJsonLd.tsx.
- FinancialProduct, Dataset, FAQPage, HowTo, Article-like schemas in helper modules and page files.

## Applied safe fix

Removed default AggregateRating from lib/seo.ts and made aggregateRating optional in components/seo/AdvancedSchemaMarkup.tsx. Google structured data guidelines require marked-up content to be visible and not misleading. The repository did not show visible support for 4.9 rating and 127 reviews site-wide.

## Remaining checks

- Validate JSON-LD syntax after build with a script or Rich Results Test.
- Keep stable @id values already present in lib/seo.ts.
- Use FAQPage only where the FAQ is visible and genuine.
- Do not add fake reviews, fake ratings, fake FAQs, fake prices, fake availability, or inferred business facts.
- Consider moving BreadcrumbList generation away from headers() so static pages can stay static.
