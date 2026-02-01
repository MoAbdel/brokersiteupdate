# Blog Generator Optimization Design — Bing + Google + AI

**Date:** 2026-02-01
**Status:** Implemented
**Skill:** equity-hecm-blog-generator

## Summary

Optimized the blog generator skill for 3,250-4,000 word articles with dual Bing/Google optimization and AI citation readiness.

## Changes Implemented

### 1. Word Count Expansion

| Content Type | Previous | New |
|--------------|----------|-----|
| Pillar | 4,000-5,000 | 5,000-6,000 |
| Cluster | 1,800-2,200 | 3,250-4,000 |
| County | 3,500-4,000 | 3,500-4,000 |
| City Geo | 1,500-1,800 | 3,250-4,000 |
| Zip | 1,200-1,500 | 3,250-4,000 |

### 2. AI-First Answer Stack Structure

All articles now follow a 7-section structure:

1. **Citation Hook** (50-75 words) — AI extraction, featured snippet capture
2. **Bing Power Block** (600-800 words) — Exact-match keywords, tables, lists
3. **Google E-E-A-T Narrative** (1,200-1,500 words) — Experience markers, natural language
4. **Data & Comparison Hub** (400-500 words) — Unique data points, comparison tables
5. **People Also Ask Section** (400-500 words) — 6-8 PAA-targeted questions
6. **Extended FAQ** (400-500 words) — 10-12 decision-stage questions
7. **Expert Summary + CTA** (150-200 words) — Quotable closing, entity validation

### 3. Dual Search Engine Optimization

**Bing Requirements:**
- Exact-match keywords in H1, first 50 words, 3+ H2s
- Keyword density: 1.5-2%
- 2+ comparison tables, 2+ numbered lists
- Bing schema properties (copyrightHolder, significantLink)
- Full social meta tags

**Google Requirements:**
- E-E-A-T experience markers every 300 words
- Natural language H2 questions
- 2-3 external authority links (.gov sources)
- 5-8 internal links
- FAQPage schema with 10-12 questions

### 4. AI Citation Optimization

- Citation Hook is standalone/extractable
- Entity-attributed opening ("According to Mo Abdel...")
- "Mo Abdel" appears 4-6 times naturally
- NMLS #1426884 appears 2-3 times
- Speakable schema on key sections
- ≤29 word answers in PAA section

### 5. Geo Page Differentiation

Created city-topic-matrix.md with:
- Unique topic angles per city (e.g., Newport Beach = Jumbo/Luxury)
- Target borrower profiles
- Neighborhood breakdown requirements
- 800+ words unique local content per page

### 6. Enhanced Quality Gates

7 validation checkpoints before output:
- Word Count Gate
- Bing Gate
- Google Gate
- AI Citation Gate
- Data Gate (minimum 6 unique data points)
- Geo Page Gate
- Compliance Gate

## Files Modified

| File | Changes |
|------|---------|
| `SKILL.md` | Word counts, structure, quality gates |
| `references/seo-aio-aeo-geo-guidelines.md` | Bing/Google/AI requirements |
| `references/cluster-templates.md` | 3,250-4,000 word structure |
| `references/pillar-templates.md` | 5,000-6,000 word structure |
| `references/geo-templates.md` | Topic rotation, expanded structure |
| `references/city-topic-matrix.md` | **NEW** - City differentiation strategy |
| `assets/schema-templates.json` | Enhanced speakable schema |

## Usage

Generate content using the skill as before. The new structure and requirements will be automatically applied:

```
Generate HECM cluster for HECM basics
Generate equity geo for Newport Beach
Generate wholesale city for Anaheim
```

All output will now:
- Meet 3,250-4,000 word minimum
- Follow AI-First Answer Stack structure
- Pass all quality gates
- Include validation output
