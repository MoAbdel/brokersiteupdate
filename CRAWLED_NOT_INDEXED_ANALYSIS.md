# "Crawled - Not Indexed" Analysis & Solutions

**Date:** 2026-02-04
**Affected Pages:** 32 URLs
**Status:** Validation Failed (Started: 1/26/26, Failed: 2/3/26)

---

## Executive Summary

Google is refusing to index 32 pages due to **near-duplicate content detection**. The programmatic geo-targeting strategy created pages that are ~85-90% identical, with only city/zip names changed. Google's Helpful Content system classifies this as low-value content.

---

## Root Cause Analysis

### 1. Template-Based Content with Minimal Differentiation

**Comparing `reverse-mortgage-kirkland-wa-2026` vs `reverse-mortgage-sammamish-wa-2026`:**

| Element | Kirkland | Sammamish | Identical? |
|---------|----------|-----------|------------|
| H1 Structure | "Reverse Mortgage in [City], WA: HECM Guide for Seniors [2026]" | Same pattern | YES |
| H2 Headings | "Why [City] Seniors Are Considering...", "HECM vs Jumbo...", etc. | Identical | YES |
| Table Structure | HECM vs Jumbo comparison table | Identical | YES |
| Eligibility List | 5 bullet points | Identical | YES |
| Process Steps | Same 5 steps | Identical | YES |
| FAQ Questions | Same 4 questions with city name swapped | ~95% identical | YES |
| Neighborhood Grid | 4 neighborhoods | Different names, same structure | STRUCTURE YES |
| Disclaimer | Identical | Identical | YES |

**Estimated Unique Content: <15%** (only city name, median value, neighborhood names differ)

### 2. Mass Production Pattern Detection

Google's systems detected:
- **8 reverse mortgage WA city pages** - All same template
- **7 home equity WA city pages** - All same template
- **30+ wholesale broker zip code pages** - All same template

This triggers Google's "scaled content abuse" detection introduced in the March 2024 core update.

### 3. Skill Guidelines Existed But Were Not Enforced

The `city-topic-matrix.md` specifies:
- Each city should have a **unique topic angle**
- Each page needs **800-1,000 words of truly unique content**
- Quality gates should verify differentiation

**Reality:** These requirements were documented but not enforced during generation.

### 4. Washington Cities Missing from Topic Matrix

The cities generating "not indexed" status aren't all in the topic matrix:
- Kirkland: Listed (Family-Focused/Waterfront) - BUT content doesn't reflect this
- Sammamish: **NOT IN MATRIX** - No differentiation guidance
- Clyde Hill: **NOT IN MATRIX**
- Issaquah: **NOT IN MATRIX**

---

## Affected URL Categories

### Category 1: WA Reverse Mortgage City Pages (8 pages)
```
/blog/reverse-mortgage-kirkland-wa-2026
/blog/reverse-mortgage-sammamish-wa-2026
/blog/reverse-mortgage-clyde-hill-wa-2026
/blog/reverse-mortgage-issaquah-wa-2026
/blog/reverse-mortgage-bellevue-wa-2026
/blog/reverse-mortgage-mercer-island-wa-2026
/blog/reverse-mortgage-redmond-wa-2026
/blog/reverse-mortgage-medina-wa-2026
```

### Category 2: WA Home Equity City Pages (7 pages)
```
/blog/home-equity-kirkland-wa-2026
/blog/home-equity-sammamish-wa-2026
/blog/home-equity-clyde-hill-wa-2026
/blog/home-equity-issaquah-wa-2026
/blog/home-equity-bellevue-wa-2026
/blog/home-equity-mercer-island-wa-2026
/blog/home-equity-redmond-wa-2026
```

### Category 3: OC Wholesale Zip Code Pages (14+ pages)
```
/blog/wholesale-mortgage-broker-92612
/blog/wholesale-mortgage-broker-92692
/blog/wholesale-mortgage-broker-92887
/blog/wholesale-mortgage-broker-92602
/blog/wholesale-mortgage-broker-92614
/blog/wholesale-mortgage-broker-92656
/blog/wholesale-mortgage-broker-92867
... (and more)
```

### Category 4: Utility/Non-Content URLs (correctly not indexed)
```
/sitemap.xml (both www and non-www)
/llms.txt
/favicon.ico variants
/manifest.json
/robots.txt
```

---

## Solutions

### Immediate Actions (This Week)

#### Option A: Consolidate into Hub Pages (Recommended)
Instead of 8 separate WA reverse mortgage city pages, create:
1. **One WA Reverse Mortgage Hub:** `/blog/reverse-mortgage-washington-2026`
   - Include sections for each city as H2 subsections
   - Unique deep-dive content for the state
   - City-specific data in a comparison table

2. **One WA Home Equity Hub:** `/blog/home-equity-washington-2026`
   - Same approach

3. **Regional OC Wholesale Hubs:**
   - `/blog/wholesale-mortgage-broker-south-orange-county` (Dana Point, Laguna, San Clemente zips)
   - `/blog/wholesale-mortgage-broker-central-orange-county` (Irvine, Tustin, Costa Mesa zips)
   - `/blog/wholesale-mortgage-broker-north-orange-county` (Anaheim, Yorba Linda zips)

**Benefit:** 45+ thin pages → 6-8 substantial pages with 4,000-6,000 words each

#### Option B: Add Substantial Unique Content to Existing Pages
If keeping individual pages:
- Add 800+ words of truly unique content per page
- Different primary topic angles (not just city name swaps)
- Real local market data from Redfin/Zillow APIs
- Unique case studies/scenarios per city
- Embedded local resources (maps, calculators)

#### Option C: Noindex Low-Value Pages + Canonical to Hub
1. Add `noindex` to duplicate city pages
2. Add `canonical` pointing to regional hub
3. Focus crawl budget on high-value pages

### Medium-Term Actions (This Month)

#### 1. Update Blog Generator Skill
Add mandatory pre-generation checks:
```
CONTENT_UNIQUENESS_GATE:
□ Topic angle from matrix verified (BLOCK if missing)
□ Minimum 50% content differs from similar pages
□ At least 5 unique data points with sources
□ Different H2 structure from other geo pages in same category
□ Unique scenarios/case studies (not just name swaps)
```

#### 2. Add Automated Similarity Detection
Before generating, compare proposed content against existing pages:
```python
def check_similarity(new_content, existing_pages):
    # Use difflib or similar
    for page in existing_pages:
        similarity = calculate_similarity(new_content, page)
        if similarity > 0.6:  # 60% threshold
            return BLOCK, f"Too similar to {page}"
    return PASS
```

#### 3. Expand Topic Matrix
Add all WA cities with specific differentiation:
```
| Sammamish | Family Estates | Large lots, estate planning | Affluent families | Plateau communities, $1.8M median |
| Clyde Hill | Ultra-Luxury | Asset-based lending | High-net-worth | $3M+ median, Microsoft execs |
| Issaquah | Outdoor Lifestyle | Renovation financing | Active families | Highlands, mountain access |
```

### Long-Term Strategy Changes

#### 1. Quality Over Quantity
- Generate fewer pages with more depth
- Target 5,000+ words for geo pages
- Include original research/data

#### 2. User-First Content
- Start with "What would a Kirkland senior actually want to know?"
- Don't start with "How do we rank for 'reverse mortgage Kirkland'?"

#### 3. Real Differentiation Framework
Each geo page must answer differently:
- **Different primary question** (not same FAQ with city swap)
- **Different borrower scenario** (not same example with name change)
- **Different market insight** (actual local data, not template)
- **Different expert angle** (based on topic matrix)

---

## Skill Updates Required

### 1. Add WA Cities to Topic Matrix

```markdown
## Washington Cities (Eastside) — Topic Assignments

| City | Primary Angle | Secondary Focus | Target Borrower Profile | Unique Content Focus |
|------|---------------|-----------------|-------------------------|----------------------|
| **Sammamish** | Family Estate Planning | Large lot properties | Tech executives with families | Plateau communities, $1.8M median, estate-sized lots, generational wealth |
| **Clyde Hill** | Ultra-Luxury | Asset-based lending | High-net-worth individuals | $3M+ properties, Microsoft/tech C-suite, trust-based ownership |
| **Issaquah** | Outdoor Lifestyle | Renovation financing | Active families, remote workers | Highlands neighborhoods, mountain access, work-from-home upgrades |
| **Mercer Island** | Private Island Living | Waterfront/dock financing | Established wealth | $2.5M+ median, boat/dock considerations, privacy-focused |
| **Medina** | Ultra-High-Net-Worth | Complex asset structures | Billionaire row residents | Gates/Bezos neighbor effect, $5M+ properties, LLC ownership |
```

### 2. Add Mandatory Differentiation Check

Add to SKILL.md quality gates:
```markdown
## MANDATORY: Content Differentiation Gate (NEW)

Before outputting ANY geo page, verify against ALL existing geo pages in same track:

### Step 1: Structure Differentiation
□ H1 uses different pattern than other cities in track
□ At least 3 H2s are unique to this page (not in other city pages)
□ FAQ questions differ by >50% from nearest similar page

### Step 2: Content Differentiation
□ Opening paragraph contains unique angle (not template)
□ Market data section has city-specific stats with sources
□ Scenarios describe situations unique to this city's profile
□ At least one section does NOT exist in template (fully custom)

### Step 3: Numeric Check
□ Compare word-by-word to most similar existing page
□ Similarity score must be <60% (measured by any diff tool)
□ If >60% similar: BLOCK generation, require revision

### FAIL CONDITIONS (Do NOT Output):
- Same H2 structure as another city page
- FAQ questions identical with only city name changed
- Template sections without substantial local customization
- Missing topic angle from city-topic-matrix.md
```

### 3. Add Consolidation Guidance

Add to SKILL.md:
```markdown
## When to Consolidate vs. Create Individual Pages

### Create Individual Page When:
- City has $1B+ annual real estate volume
- City has distinct borrower profile from neighbors
- 500+ monthly search volume for "[city] + [product]" keyword
- Can generate 800+ words of truly unique local content

### Consolidate into Hub When:
- Multiple cities share similar demographics
- Cities are geographically adjacent (same county/region)
- Individual city keywords have <100 monthly searches
- Cannot generate 800+ unique words per city

### Hub Structure Example:
```
/blog/reverse-mortgage-washington-eastside-2026/
├── #bellevue-reverse-mortgage
├── #kirkland-reverse-mortgage
├── #redmond-reverse-mortgage
├── #sammamish-reverse-mortgage
└── ... (as H2 sections, not separate pages)
```
```

---

## Action Items

### Immediate (Today)
- [x] Document findings (this file)
- [ ] Decide: Consolidate vs. Enhance existing pages

### This Week
- [ ] Update `city-topic-matrix.md` with missing WA cities
- [ ] Update SKILL.md with mandatory differentiation gates
- [ ] Create hub page strategy document

### This Month
- [ ] Either consolidate thin pages OR add substantial unique content
- [ ] Re-submit updated pages to Google via URL inspection
- [ ] Monitor GSC for indexing status changes

---

## Expected Outcome

After implementing consolidation OR content enhancement:

| Metric | Before | After (4-8 weeks) |
|--------|--------|-------------------|
| Pages indexed | 0/32 affected | 20-30+ indexed |
| Crawled-not-indexed | 32 pages | <5 pages |
| Impressions for geo terms | ~50/month | 500+/month |

---

## References

- [Google Helpful Content System](https://developers.google.com/search/docs/fundamentals/helpful-content)
- [Google's Guidance on Scaled Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content#scaled-content)
- [March 2024 Core Update Details](https://developers.google.com/search/blog/2024/03/core-update-and-spam-policies)
