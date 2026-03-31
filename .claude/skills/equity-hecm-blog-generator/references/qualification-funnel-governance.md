# Qualification & Funnel Governance — March 2026

## Purpose

This reference overrides older assumptions about equal topic balance, blanket city-page generation, and hardcoded qualification copy. Use it whenever the task touches refinance, HELOC, HELOAN, DSCR, money pages, city pages, or pruning decisions.

## Runtime Source of Truth

Read these files before drafting:

| File | Why it matters |
|------|----------------|
| `lib/leadQualification.ts` | Current HELOC / HELOAN / overall ranges, licensed states, qualification statuses |
| `components/QualificationCallout.tsx` | Approved early-page qualification copy and referral framing |
| `components/seo/RefinanceCityTemplate.tsx` | Approved architecture for the 16 refinance-city conversion pages |
| `lib/site.ts` | Canonical phone, NMLS/site constants, contact URLs |
| `next-sitemap.config.js` | Thin/suppressed route patterns and exclusions |
| `reports/opportunity-queue.json` | Opportunity score + cannibalization alerts |
| `reports/*ctr-prune*` | Low-yield pages that may need refresh / noindex / redirect |

## Current Runtime Policy

Unless the runtime files above change, use this live truth:

- HELOC range: `$50K-$750K`
- HELOAN range: `$25K-$500K`
- Overall specialization range: `$100K-$3M`
- Licensed states: `CA`, `WA`
- Qualification statuses: `in_scope`, `referral_candidate`
- Canonical phone: `(949) 579-2057`

Never restate these from memory when the source files are available.

## Page Families

### Conversion

Use for pages that should directly own intent and collect leads:

- 16 refinance-city pages
- HELOC / HELOAN money pages
- DSCR money page
- major loan-program and refinance hubs

### Support

Use for pages that reinforce a stronger destination:

- county guides
- strong city hubs
- comparison posts
- high-intent articles that should link upward to a conversion page

### Suppressed

Use for pages that should not win organic intent:

- thin city wrappers
- overlapping rates pages
- low-yield blog clones
- pages already better handled by noindex, redirect, or consolidation

## Approved Standalone City Exception

Generic standalone city pages are not the default. The approved exception is the 16 refinance-city pages:

- Irvine
- Mission Viejo
- Laguna Niguel
- Dana Point
- San Clemente
- Lake Forest
- Aliso Viejo
- Yorba Linda

Each city is allowed two conversion pages:

- `[city]-cash-out-refinance`
- `[city]-rate-term-refinance`

These pages should follow the refinance-city architecture, not the legacy city-page templates.

## Action Selection

Before writing, choose exactly one action:

- `generate` — uncovered intent that should become a new page
- `refresh` — existing page already owns intent but needs stronger copy / structure / metadata
- `keep` — page already fits the funnel and needs no content change
- `noindex` — page is live but should stop competing
- `redirect` — page should consolidate into a stronger destination

Default rule: if a live conversion or support page already serves the intent and shows impressions or low CTR, refresh it before creating a new long-tail page.

## Funnel Ownership Rules

- DSCR support pages must point toward `/loan-programs/dscr-investment-loans` and keep California / Washington-only framing.
- Equity support pages must preserve HELOC / HELOAN caps and referral positioning.
- Refinance support pages should point toward the city-refi cluster or the strongest current refinance hub, not toward generic city wrappers.
- Suppressed pages should not be treated as seeds for new standalone content unless the strategy has explicitly changed.

## Qualification Messaging Rules

Use `QualificationCallout` or equivalent visible qualification copy early on:

- HELOC pages
- HELOAN pages
- DSCR money pages
- refinance hubs / loan-program hubs serving as funnel entry points
- high-intent support pages that behave like funnel pages

Required behavior:

- HELOC copy reflects the HELOC cap and private-banking/referral framing above the cap
- HELOAN copy reflects the HELOAN cap and referral framing above the cap
- DSCR copy states California / Washington only and offers referral help for out-of-footprint investors
- refinance and general funnel pages reflect the `$100K-$3M` specialization range when relevant

## Refresh-First Priorities

Use this weighting as a planning guide across the queue, not as a rigid per-batch quota:

- Refinance: 40%
- DSCR: 25%
- Equity: 20%
- HECM: 15%

This weighting governs backlog planning and refresh sequencing. It does not require every small batch to contain all four topics.
