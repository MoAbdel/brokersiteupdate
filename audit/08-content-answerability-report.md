# Content Answerability Report

Audit date: 2026-05-07

This site already has answer-oriented structure across many page classes: direct answer components, FAQ blocks, loan-program comparisons, guides, city pages, and resource pages. The route inventory flags answer_block_found per source file.

## Page type classifications

| Page type | Classification | Evidence | Recommendation |
|---|---|---|---|
| Home and core service pages | Keep and update | Root metadata, service schema, crawlable links, visible service scope | Keep business facts, NMLS, phone, and location consistent. Add citations for fast-changing mortgage limits and regulatory claims. |
| Loan program pages | Keep and expand selectively | Program pages include metadata, visible content, and internal links | Add short direct answer blocks and source links where factual limits, eligibility, or pricing claims appear. |
| Blog and guide pages | Keep, consolidate, or update based on GSC data | Large blog corpus and existing search performance reports | Continue pruning low-impression or low-CTR thin pages only from data, not folklore. |
| Area, city, and zip pages | Keep approved strong pages, noindex or consolidate thin overlap | Route policy already suppresses many low-equity patterns | Use city pages only where content is specific and useful. Avoid doorway expansions. |
| Tools | Keep core tools, noindex localized variants where intentional | Route policy noindexes localized tool variants | Keep calculator logic accessible and add explanatory text above client-only widgets. |
| Legal and admin | Noindex or protect | Admin layout noindex and route policy excludes non-content | Replace client-side password gates with server auth if used for private content. |
| llms.txt | Optional documentation | Existing public files | Keep labeled as optional and non-Google. It must not replace HTML, schema, sitemap, or robots. |

## Answerability checklist

- Add citations to official sources for financial, regulatory, limit, and fast-changing claims.
- Keep updated dates visible where content is time-sensitive.
- Keep one clear H1 and logical H2/H3 structure.
- Use comparison tables only where the page genuinely compares programs or areas.
- Avoid fake FAQs and do not mark up FAQs that are not visible.
- Use descriptive anchors rather than generic important links.
- Ensure key answers are not only in images or client-only widgets.
