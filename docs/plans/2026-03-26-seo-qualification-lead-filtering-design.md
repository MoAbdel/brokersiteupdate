# SEO Qualification & Lead Filtering Realignment — Design Doc

**Date:** 2026-03-26
**Status:** Approved
**Approach:** Layered Phases (B) — all three phases in one session

## Problem

The site attracts high-net-worth prospects but doesn't pre-qualify them by loan size, geography, or loan type before contact. This results in:
- $5M+ HELOC leads we can't service (need private banking)
- National DSCR traffic from states we're not licensed in (CA/WA only)
- Missing A-paper refinance traffic from affluent OC cities
- Split lead storage (Formspree vs ephemeral JSON files on Vercel)

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| HELOC ceiling | $750K | Actual lending capacity |
| HELOAN ceiling | $500K | Actual lending capacity |
| Canonical phone | (949) 579-2057 | User confirmed |
| Refinance city pages | 2 per city (16 total) | Max keyword targeting: cash-out + rate-term split |
| Lead storage | Everything to Formspree | JSON files are ephemeral on Vercel; single inbox |
| Implementation approach | 3 phases, 1 session | Phase 1 fixes lead quality, Phase 2 captures A-paper, Phase 3 prunes |

## Bing-First Compliance

All changes follow the blog generator SKILL's Bing-first optimization rules:
- 30-60 word paragraphs (Copilot extraction limit)
- One verifiable fact per paragraph
- H2s as Copilot-answerable questions
- Exact-match keywords in H1, first 50 words, 3+ H2s, meta title/description
- Bing geo meta tags (geo.region, geo.placename, geo.position, ICBM)
- Schema must mirror page content
- 3 semantic triples in first 300 words
- No collapsed/accordion content
- Varied sentence structure across city pages (no fill-in-the-blank templating)
- 8+ internal links per page, cross-topic mandatory
- 3 CTAs minimum (early + mid + closing)
- FAQPage + Speakable + LocalBusiness schema
- Full OG + Twitter social meta tags
- 2+ comparison tables per page
- Desktop-first, no horizontal scroll on tables

---

## Phase 1: Qualification Layer

### `lib/leadQualification.ts` — Single source of truth

```typescript
LICENSED_STATES = ['CA', 'WA']
HELOC_RANGE = { min: 50_000, max: 750_000 }
HELOAN_RANGE = { min: 25_000, max: 500_000 }
OVERALL_TARGET = { min: 100_000, max: 3_000_000 }
DSCR_STATES = ['CA', 'WA']

qualify(submission) -> {
  status: 'in_scope' | 'referral_candidate' | 'out_of_scope',
  reason?: 'oversize_equity' | 'unsupported_state' | 'outside_target_range'
}
```

### `components/QualificationCallout.tsx`

Three variants (equity, dscr, general). Bing-compliant:
- 2-3 short paragraphs (30-60 words each)
- Each paragraph contains a verifiable fact
- Entity-attributed on first use
- Always fully visible (no accordion)
- Includes internal link to relevant program page
- Varied copy per placement (avoids "artificially engineered language" penalty)

### Existing page updates

| Page | Change |
|------|--------|
| `WestCapitalAdvantage.tsx` | "$4M" -> "$3M" on Conventional/Jumbo card |
| HELOC OC page | "$500K+" -> "$50K-$750K" in hero + intro. Add QualificationCallout(equity). Update schema |
| HELOAN OC page | Keep "$500K". Add QualificationCallout(equity) |
| DSCR money page | Title/H1/meta: "California & Washington". Add QualificationCallout(dscr). Update geo meta |
| Loan programs hub | HELOC card -> "$750K". DSCR card -> "CA & WA" |
| Non-QM hub | DSCR section -> "CA & WA only" |

### Form unification

Route ALL forms to Formspree via `/api/contact/route.ts`. Delete `/api/quotes/route.ts` and JSON storage.

New fields on all intake forms (ContactForm, EnhancedContact, PremiumContact, QuickQuote, EnhancedQuickQuote, ToolLeadCapture):
- `property_state` (dropdown: CA, WA, Other)
- `property_city` (text)
- `loan_amount` (number, replaces range dropdown)
- `qualification_status` (computed hidden field)
- `out_of_scope_reason` (computed hidden field)

Inline referral message when out-of-scope (30-60 words, fact-containing):
> "Mo Abdel is licensed in California and Washington and specializes in loans from $100K-$3M. If your needs fall outside this range, Mo will connect you with the right resource."

---

## Phase 2: 16 Refinance City Pages

### Routes

```
/areas/[city]-cash-out-refinance    (8 pages)
/areas/[city]-rate-term-refinance   (8 pages)
```

Cities: Irvine, Mission Viejo, Laguna Niguel, Dana Point, San Clemente, Lake Forest, Aliso Viejo, Yorba Linda

### `RefinanceCityTemplate.tsx` — New template

NOT extending CityPageTemplate. Different intent, different keyword targeting, different structure.

### Page structure (SKILL Inverted Pyramid)

1. **Citation Hook (150-300 words)**: BLUF + 3 semantic triples + city snapshot table
2. **Bing Power Block (700-900 words)**: 2 Copilot-answerable H2s + comparison table (5+ rows) + numbered process list
3. **E-E-A-T Narrative (800-1,000 words)**: Wholesale vs bank H2 + neighborhood-specific H2 + local market context
4. **Data & Comparison (400-500 words)**: Loan scenario table by value tier + payment comparison table + gated CTA footers
5. **FAQ (10-12 questions)**: FAQPage schema, voice-optimized (<=29 word answers), city-specific + cross-topic
6. **Expert Summary + CTA (150-200 words)**: Phone + /contact link

### Per-page compliance

- 30-60 word paragraphs
- 1 fact per paragraph
- Exact-match in H1 + first 50 words + 3+ H2s
- Bing geo meta tags with lat/lng per city
- Full OG + Twitter meta
- FAQPage + Speakable + LocalBusiness schema
- 3+ comparison tables
- 8+ internal links (cross-topic mandatory)
- 3 CTAs (early + mid + closing)
- Varied copy across cities (no template duplication)

### City data objects

Each city gets: name, slug, lat, lng, population, medianHomeValue, medianEquity, topNeighborhoods[], marketTrends, conformingLimit, typicalLoanRange.

### Internal linking integration

Inbound from: county-level refi pages, existing city hubs, loan programs hub.
Outbound to: counterpart page (cash-out <-> rate-term), nearby city refi pages, HELOC OC, HELOAN OC, loan-programs hub, contact, 1+ relevant blog post.

---

## Phase 3: Cleanup & Pruning

### Noindex + sitemap exclude (15 pages)

All thin CityPageTemplate wrappers that compete with new refi pages or have low unique value:
- laguna-niguel-mortgage-rates, yorba-linda-mortgage-rates
- dana-point-mortgage-broker, laguna-niguel-mortgage-broker, yorba-linda-mortgage-broker
- santa-ana-refinance-rates
- laguna-beach-mortgage-broker, laguna-woods-mortgage-broker
- fountain-valley-mortgage-broker, fountain-valley-mortgage-rates
- garden-grove-mortgage-broker, garden-grove-mortgage-rates
- orange-mortgage-broker, westminster-mortgage-broker, fullerton-mortgage-broker

Implementation: `robots: { index: false, follow: true }` in metadata + add to sitemap exclude array. Do NOT delete pages.

### Keep indexed (robust pages)

Irvine (all), Mission Viejo (all), Newport Beach (all), Huntington Beach, Costa Mesa, Anaheim, Santa Ana, Seal Beach, California, Washington, Irvine mortgage rates.

### Newport Beach referral positioning

Add QualificationCallout(equity) to Newport Beach pages and luxury neighborhood pages. Turn luxury traffic into referral pipeline.

### Dead code removal

- Delete `app/api/quotes/route.ts`
- Delete `data/submissions/` and `data/newsletter/`
- Gut `/admin/data/page.tsx` — replace with Formspree link or remove
- Remove `RateQuote` from `lib/entities.ts` if only used by quotes

### Sitemap additions

16 new refinance city pages: priority 0.9, changefreq weekly.

---

## Success Criteria

1. Every HELOC page says "$750K" ceiling, every HELOAN page says "$500K" ceiling
2. DSCR pages explicitly say "California & Washington" in title/H1/meta
3. All form submissions arrive in Formspree with qualification_status and out_of_scope_reason
4. 16 refinance city pages pass Bing-first compliance checklist (paragraphs, schema, tables, links, CTAs)
5. No duplicate intent between generic city pages and new refi pages (check H1s, canonicals)
6. Thin pages noindexed but not deleted (follow: true preserves link equity)
7. Zero JSON file storage remaining
