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
