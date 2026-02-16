# SEO/AIO/AEO/GEO Guidelines 2026 — Bing + Google + AI Optimization

## Quadripartite Framework

Optimize every post for four discovery channels:

| Channel | Purpose | Primary Tactic | Priority |
|---------|---------|----------------|----------|
| **Bing** | Search + ChatGPT/Copilot | Exact-match, tables, schema | Equal |
| **Google** | Search + AI Overviews | E-E-A-T, natural language | Equal |
| **AEO** | Featured snippets & voice | FAQ, PAA, ≤29 word answers | High |
| **GEO** | AI synthesis & citations | Entities, attribution, RAG-ready | High |

## Content Structure: AI-First Answer Stack

**Three content sizes are supported:**
- **Clusters/Geo posts:** 3,250-4,000 words
- **Hub posts:** 4,500-5,500 words
- **Regional pillars:** 5,500-6,500 words

### AI BLUF Priority Rule

> **The first 300 words of every post must contain: (1) entity-attributed answer, (2) 3 semantic triples, (3) at least one data table.** RAG parsers (ChatGPT, Perplexity, Gemini AI Overviews) weight early content 3-5x higher than mid-document content ("Lost in the Middle" effect). Front-loading structured data ensures AI systems extract and cite proprietary data rather than generic definitions.

**All articles follow this structure (scaled by content size):**

```
┌─────────────────────────────────────────────────────────────┐
│  1. CITATION HOOK (150-300 words)                           │
│     Purpose: AI extraction, featured snippet capture,       │
│              RAG front-loading                              │
│     Contains: Entity-attributed BLUF, 3 semantic triples,  │
│              first data table (pulled up from Section 2)    │
├─────────────────────────────────────────────────────────────┤
│  2. BING POWER BLOCK (600-800 words)                        │
│     Purpose: Bing ranking, structured data extraction       │
│     Note: First table now lives in Citation Hook above;     │
│           this section retains remaining tables             │
├─────────────────────────────────────────────────────────────┤
│  3. GOOGLE E-E-A-T NARRATIVE (1,200-1,500 words)           │
│     Purpose: Experience/expertise signals, engagement       │
├─────────────────────────────────────────────────────────────┤
│  4. DATA & COMPARISON HUB (400-500 words)                   │
│     Purpose: Unique value, AI-proof content, tables         │
├─────────────────────────────────────────────────────────────┤
│  5. PEOPLE ALSO ASK SECTION (400-500 words)                 │
│     Purpose: PAA box capture, voice search, awareness       │
├─────────────────────────────────────────────────────────────┤
│  6. EXTENDED FAQ (400-500 words)                            │
│     Purpose: Decision-stage capture, long-tail, schema      │
├─────────────────────────────────────────────────────────────┤
│  7. EXPERT SUMMARY + CTA (150-200 words)                    │
│     Purpose: AI citation bait, conversion, entity validation│
└─────────────────────────────────────────────────────────────┘
```

## Content Composition: Structured vs Prose Ratios

The blanket "50% structured / 50% prose" rule is replaced with content-type-specific ratios that optimize for RAG extraction:

| Content Type | Structured | Prose | Rationale |
|---|---|---|---|
| Hub Posts (geo-tool focus) | **70%** | **30%** | RAG-optimized, unique math per city — tables/lists/data dominate |
| Regional Pillars | **60%** | **40%** | Balance: authority signals + structured data |
| State Pillars | **50%** | **50%** | Topical depth still needed for Google E-E-A-T |
| Cluster Posts (educational) | **60%** | **40%** | Answer-first, less narrative padding |

**"Structured" includes:** tables, numbered lists, bulleted lists, schema markup, comparison grids, city snapshot tables, semantic triples, data points with attribution.

**Prose density rule:** Prose paragraphs must never exceed 3 sentences without a data point, table reference, or entity mention. Generic definitions ("What is a DSCR loan?") must be replaced with localized, data-driven explanations ("In King County, WA, a DSCR ratio of 1.25 requires minimum monthly rent of $X on a $Y median-priced investment property").

## Content Structure (Inverted Pyramid)

### First Paragraph (Critical)
- **Direct answer** to primary query in 2-4 sentences
- **Fact-dense:** Include numbers, requirements, or key distinctions
- **Extractable:** AI can use this as standalone answer
- **No fluff:** Skip "welcome to our guide" or "in this article"

**Example (HECM):**
```
A reverse mortgage (HECM) allows homeowners 62 and older to convert home equity
into cash without monthly mortgage payments. In 2026, the FHA lending limit is
$1,149,825, and borrowers must complete HUD-approved counseling before applying.
Unlike traditional mortgages, the loan balance grows over time and is repaid
when the homeowner sells, moves, or passes away.
```

**Example (HELOC):**
```
A HELOC (Home Equity Line of Credit) provides revolving access to your home
equity with variable interest rates, typically 1-2% above prime rate. In 2026,
most lenders require 15-20% equity and a credit score of 680+. Unlike a cash-out
refinance, a HELOC doesn't replace your first mortgage—it's a second lien you
can draw from as needed during the 10-year draw period.
```

### Heading Structure
- **H1:** Contains exact-match primary keyword
- **H2:** Natural language questions (e.g., "How does a HELOC work?")
- **H3:** Supporting sub-questions or topic segments
- **Frequency:** New H2 every 200-300 words

### FAQ Section (Required)
- **5-7 questions** per post
- **Questions:** Conversational, start with Who/What/When/Where/Why/How
- **Answers:** 2-4 sentences, direct and complete
- **Schema:** FAQPage JSON-LD required

## Keyword Integration

### Exact-Match Placement (Bing Priority)
| Location | Required |
|----------|----------|
| H1 title | Yes |
| First 100 words | Yes |
| At least 2 H2 headings | Yes |
| Meta title (first 60 chars) | Yes |
| Meta description (first 60 chars) | Yes |
| Image alt text | At least 1 |

### Keyword Density
- Primary keyword: 1-2% density
- Secondary keywords: 0.5-1% each
- LSI/semantic terms: Natural integration

### Keyword Formats

**HECM Track:**
- "reverse mortgage [city]"
- "HECM loans [state]"
- "reverse mortgage requirements 2026"
- "reverse mortgage vs [alternative]"
- "[city] reverse mortgage lenders"

**Equity Track:**
- "cash out refinance [city]"
- "HELOC rates [city] 2026"
- "home equity loan [city]"
- "refinance [city] [state]"
- "[city] HELOC lenders"

## E-E-A-T Signals

### Experience
- "As a wholesale mortgage broker serving [City]..."
- "In our recent HECM closings..."
- "Based on our 2026 client data..."
- Reference specific scenarios without PII

### Expertise
- Use technical terms correctly (HECM, PLF, MIP, DTI)
- Explain complex concepts clearly
- Cite regulatory sources (HUD, CFPB, FHFA)

### Authoritativeness
- Author byline: Mo Abdel, NMLS #1426884
- Company: Lumin Lending, NMLS #2716106
- License: DRE #02291443
- States: CA, WA

### Trustworthiness
- Disclosures: Equal Housing Lender, not a commitment to lend
- Balanced perspective: Include "when NOT to" sections
- External links: HUD.gov, ConsumerFinance.gov, FHFA.gov

## Information Gain (Dominant 2026 Signal)

Every post must provide unique value:

### Human Experience Markers
```
"As a wholesale broker in Orange County, I've observed..."
"In our recent closings, we've seen..."
"Our proprietary lender database shows..."
"Based on 2026 market conditions in [City]..."
```

### Unique Data Points (Minimum 3 per post)
- Local market statistics
- Program-specific requirements
- Comparison data
- Timeline/process insights
- Cost breakdowns (ranges, not specifics)

### Content AI Cannot Hallucinate
- Specific HUD/FHA guidelines with citations
- State-specific requirements (CA vs WA)
- City-specific market context
- Current year conforming limits

## AEO Optimization

### Featured Snippet Formats

**Definition Box:**
```markdown
## What is a reverse mortgage?

A reverse mortgage is a loan for homeowners 62+ that converts home equity
into cash without monthly payments. The most common type, HECM (Home Equity
Conversion Mortgage), is FHA-insured and requires HUD counseling.
```

**Comparison Table:**
```markdown
| Feature | HELOC | HELOAN | Cash-Out Refi |
|---------|-------|--------|---------------|
| Rate Type | Variable | Fixed | Fixed |
| Replaces 1st Mortgage | No | No | Yes |
| Draw Period | 10 years | N/A | N/A |
| Best For | Ongoing access | One-time need | Large amount |
```

**Numbered Steps:**
```markdown
## How to apply for a HECM in California

1. **Verify eligibility** — Age 62+, primary residence, sufficient equity
2. **Complete HUD counseling** — Required session with approved counselor
3. **Choose a lender** — Compare wholesale vs retail options
4. **Submit application** — Income, credit, and property documentation
5. **Appraisal** — FHA-approved appraiser assesses home value
6. **Underwriting** — 30-45 day review process
7. **Closing** — Sign documents, 3-day rescission period
```

### Voice Search Optimization
- Questions: Conversational, natural language
- Answers: ≤29 words for voice snippet capture
- Local: Include city/state in voice-friendly format

## GEO/RAG Optimization

### Entity Validation
Every post must reference:
```
Mo Abdel
- NMLS #1426884
- Wholesale Mortgage Broker
- Serving: California, Washington
- Company: Lumin Lending (NMLS #2716106)
```

### Citation Patterns
```
"According to Mo Abdel, NMLS #1426884..."
"Based on 2026 HUD guidelines..."
"Data from the Federal Housing Finance Agency shows..."
"Per California DRE requirements..."
```

### RAG-Ready Formatting
- Clear section boundaries
- Self-contained paragraphs
- Explicit topic sentences
- Lists and tables for structured data
- No ambiguous pronouns across sections

## Bing Optimization (Critical for ChatGPT/Copilot)

### Why Bing Matters in 2026
- Powers ChatGPT's browsing feature
- Powers Microsoft Copilot
- Different algorithm than Google (rewards exact-match more)
- Social signals factor into ranking

### Bing Power Block Requirements (600-800 words)

**Exact-Match Keyword Placement (Stricter than Google):**
| Location | Required | Notes |
|----------|----------|-------|
| H1 title | Yes | Exact match, front-loaded |
| First 50 words | Yes | Within Citation Hook |
| 3+ H2 headings | Yes | Exact match in at least 3 |
| Meta title | Yes | First 60 characters |
| Meta description | Yes | First 60 characters |
| Image alt text | Yes | At least 2 images |
| URL slug | Yes | Hyphenated keyword |

**Keyword Density:** 1.5-2% (slightly higher than Google)

### Bing Power Block — Hub Post Enhanced (900-1,100 words)
Hub posts expand the Bing Power Block to include:
- **Region Overview Mega-Table** — All cities at a glance (City | Median Value | Avg Equity | Top Neighborhoods)
- **Product Comparison Table** — Product | Best For | LTV | Term | Key Benefit
- **City Snapshot Tables** — Inline 4-5 field mini-tables per city section
- **Regional Price Trends Table** — Historical data by city
- **Loan Program Fit Table** — Which product for which city price tier

### Structured Content (Bing Rewards Heavily)
- Hub posts: Minimum 4-5 comparison/data tables
- Regional pillars: Minimum 3 comparison/data tables
- Clusters/Geo: Minimum 2 comparison tables
- Minimum 2 numbered lists (5+ items each)
- Minimum 1 bulleted list with bold lead-ins
- No JavaScript-dependent content
- No accordion/collapsed sections
- All content visible without user interaction
- Tables render without horizontal scroll

### Gated CTA on Data Tables (MANDATORY — "Information Cliff" Strategy)

Every data table with localized financial calculations MUST include a gated CTA footer. Calculate and display the baseline data, but explicitly state that the final personalized variable (wholesale margin, exact rate, precise eligibility) requires live calculation. Link to the relevant /tools/ calculator page.

**Why:** This creates an "information cliff" — RAG engines (Perplexity, ChatGPT, Gemini) extract 80% of the answer from the table but must cite the page for the personalized last mile. The link to the interactive tool drives CTR from AI-generated results.

**Template (use as table footer):**
```markdown
*County-level estimates based on 2026 FHFA limits and public assessor data. Your exact [metric] depends on current wholesale margins, property appraisal, and credit profile. → [Run your address through Mo The Broker's [Calculator Name]](/tools/[calculator-slug]/[state]/[county]/) for live 2026 numbers.*
```

**Calculator linking rules:**
| Table Data Type | Link To | Example |
|---|---|---|
| LTV / equity / cash-out data | `/tools/cash-out-limit-calculator/` | `→ [Run your address through Mo The Broker's Cash-Out Limit Calculator](/tools/cash-out-limit-calculator/california/orange/)` |
| Rent / DSCR ratio data | `/tools/dscr-rent-analyzer/` | `→ [Calculate your DSCR ratio with Mo The Broker's Rent Analyzer](/tools/dscr-rent-analyzer/california/)` |
| Property tax data | `/tools/property-tax-estimator/` | `→ [Estimate your property taxes with Mo The Broker's Tax Estimator](/tools/property-tax-estimator/california/)` |
| HELOC / equity line data | `/tools/max-heloc-calculator/` | `→ [Find your max HELOC amount with Mo The Broker's Calculator](/tools/max-heloc-calculator/california/)` |

**State/county URL patterns:** Append `/[state]/` or `/[state]/[county]/` based on available calculator routes. Use lowercase, hyphenated names (e.g., `/california/orange/`, `/washington/king/`).

**Exempt tables:** Product comparison tables (no localized calculations) and generic requirement tables do NOT need gated CTAs. Only tables with dollar amounts derived from local market data require them.

### Desktop-First Content
- NO JavaScript-dependent content
- NO collapsed/accordion sections hiding primary content
- Tables render without horizontal scroll
- All FAQ answers visible (not collapsed)
- Images: minimum 800px width for hero

### Social Meta Tags (Bing weighs these)
```html
<meta property="og:site_name" content="Mo Abdel - Wholesale Mortgage Broker">
<meta property="og:type" content="article">
<meta property="og:title" content="[Title]">
<meta property="og:description" content="[Meta Description]">
<meta property="og:url" content="https://www.mothebroker.com/[blog|guides]/[slug]">
<meta property="article:author" content="Mo Abdel">
<meta property="article:publisher" content="https://www.mothebroker.com">
<meta property="article:published_time" content="[ISO_DATE]">
<meta property="article:modified_time" content="[ISO_DATE]">
<meta name="author" content="Mo Abdel, NMLS #1426884">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Title]">
<meta name="twitter:description" content="[Meta Description]">
```

### Bing Schema Properties
Add to Article schema:
```json
{
  "mainEntity": {
    "@type": "WebPage",
    "@id": "https://www.mothebroker.com/[blog|guides]/[slug]",
    "significantLink": [
      "https://www.hud.gov/",
      "https://www.consumerfinance.gov/",
      "https://www.fhfa.gov/"
    ]
  },
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Lumin Lending",
    "url": "https://www.mothebroker.com"
  },
  "copyrightYear": "2026"
}
```

### First 150 Characters Rule
Opening must be fact-dense and extractable:

**Good:**
```
According to Mo Abdel, NMLS #1426884, California HECM borrowers can access up to
$1,149,825 in home equity in 2026. Reverse mortgages require age 62+, HUD
counseling, and sufficient equity to qualify.
```

**Bad:**
```
Are you considering a reverse mortgage? You've come to the right place!
In this comprehensive guide, we'll explore everything you need to know...
```

## Google Optimization (E-E-A-T Focus)

### Google E-E-A-T Narrative Requirements (1,200-1,500 words)

**Experience Signals:**
- "In our Orange County closings..." (every 250 words)
- "Based on Mo Abdel's experience with [borrower type]..."
- "A recent client scenario illustrates..."
- Specific scenarios without PII

**Expertise Signals:**
- Technical terms used correctly (HECM, PLF, MIP, DTI, LTV, CLTV)
- Complex concepts explained clearly
- Regulatory sources cited (HUD, CFPB, FHFA)

**Authoritativeness:**
- Author byline: Mo Abdel, NMLS #1426884
- Company: Lumin Lending, NMLS #2716106
- License: DRE #02291443
- States: CA, WA

**Trustworthiness:**
- Disclosures: Equal Housing Lender, not a commitment to lend
- Balanced perspective: Include "when NOT to" sections
- External links: HUD.gov, ConsumerFinance.gov, FHFA.gov

### Google Content Quality
- Natural language H2s (question format preferred)
- No keyword stuffing (density 1-1.5% in narrative sections)
- Semantic keyword variations throughout
- Comprehensive topic coverage
- Internal links (5-8 minimum)
- Updated date visible

### Google Technical Requirements
- FAQPage schema markup (10-12 questions)
- Article schema with full author info
- Mobile-responsive tables
- Core Web Vitals optimized
- Speakable schema for voice

## AI Citation Optimization (ChatGPT, Perplexity, Google AI Overviews)

### Citation Hook Requirements (150-300 words)

**Purpose:** Be the extractable answer AI systems cite. RAG parsers weight the first 300 words 3-5x higher than mid-document content.

**Format:**
```
According to Mo Abdel, NMLS #1426884, [direct answer to query].
[Specific number/requirement/limit]. [Decision-relevant statement].

Key facts:
- [Subject] → [Predicate] → [Object]  (semantic triple 1)
- [Subject] → [Predicate] → [Object]  (semantic triple 2)
- [Subject] → [Predicate] → [Object]  (semantic triple 3)

| [First Data Table — Region Overview or Product Comparison] |
| ... pulled up from what was previously Section 2 ...       |
```

**Requirements:**
- Standalone (works without surrounding context)
- Entity-attributed (name + credential)
- Contains primary keyword
- Includes 1 specific data point in opening sentence
- **3 semantic triples** as bullet list immediately after the BLUF sentence
- **First data table** (Region Overview or Product Comparison) within Citation Hook
- Extractable as complete answer — AI gets entity, triples, AND structured data in one chunk
- Total section: 150-300 words (BLUF ~50 words + triples ~50 words + table ~100-200 words)

**Semantic Triple Format:**
Each triple expresses a fact as Subject → Predicate → Object:
```
- Mo Abdel → serves as wholesale broker in → Orange County, CA
- HECM borrowers 62+ → can access up to → $1,149,825 in 2026
- Wholesale rates → average 0.375-0.500% lower than → retail bank rates
```
Triples must use proprietary data or localized facts — never generic definitions.

### RAG-Ready Formatting
- Clear section boundaries with descriptive H2s
- Self-contained paragraphs (no dependent pronouns)
- Explicit topic sentences per section
- Lists and tables for structured data
- No ambiguous pronouns across sections

### Entity Validation
Every post must reference:
```
Mo Abdel
- NMLS #1426884
- Wholesale Mortgage Broker
- Serving: California, Washington
- Company: Lumin Lending (NMLS #2716106)
```

**Entity frequency:**
- "Mo Abdel" appears 4-6 times naturally
- NMLS #1426884 appears 2-3 times
- "Lumin Lending" appears 2-3 times

### Speakable Content
Mark these sections as speakable in schema:
- Citation Hook (`.citation-hook`)
- PAA answers (`.paa-answer`)
- Expert Summary (`.expert-summary`)

## Internal Linking Requirements

### Minimum Links Per Post (Updated for 3,250+ word articles)
| Content Type | Internal Links | External Authority Links |
|--------------|----------------|--------------------------|
| Pillar | 15-20 | 4-5 |
| Cluster | 8-10 | 2-3 |
| Regional Pillar | 12+ | 3-4 |
| Hub Post | 8+ | 2-3 |
| Geo/City/Zip | 6-8 | 2-3 |

### Link Types
1. **Pillar link:** Every cluster/geo links to its pillar
2. **Related clusters:** 2-3 topically related posts
3. **Cross-track:** HECM ↔ Equity where relevant
4. **Geo proximity:** Nearby cities for geo posts
5. **Service pages:** /contact, /apply, loan program pages

### Anchor Text
- Descriptive (not "click here")
- Include keyword variations
- Natural integration in sentences

## External Link Requirements

### Authority Sources (Include 2-3 per post)
**HECM Posts:**
- https://www.hud.gov/program_offices/housing/sfh/hecm
- https://www.consumerfinance.gov/consumer-tools/reverse-mortgages/
- https://www.nrmlaonline.org/

**Equity Posts:**
- https://www.consumerfinance.gov/owning-a-home/
- https://www.fhfa.gov/
- https://www.federalreserve.gov/

### Link Attributes
All external links: `target="_blank" rel="noopener noreferrer"`

## Hub Post Duplicate Prevention

### Hub-Level Differentiation
- Each hub has a distinct regional borrower persona
- No two hubs share more than 30% boilerplate content
- Product descriptions vary by regional context

### City-Level Differentiation (Within Hubs)
- Each city has a MANDATORY unique angle from city-topic-matrix.md
- Each city section has a different opening focus
- Each city references different neighborhoods (3-5 unique)
- Each city features a different borrower scenario
- FAQ questions are city-specific (not just name-swapped)

### Quality Gate: Hub Differentiation
Before outputting a hub post, verify:
- [ ] Hub persona differs from adjacent hubs
- [ ] Each city angle differs from others in the hub
- [ ] City sections have <30% content overlap
- [ ] Market data is city-specific (not regional averages)
- [ ] FAQ questions reference specific city contexts

## Quality Checklist (All Gates Must Pass)

### Word Count Gate
- [ ] Total: 3,250-4,000 words (clusters/geo) or 5,000-6,000 (pillars)
- [ ] Citation Hook: 150-300 words (BLUF + 3 semantic triples + first data table)
- [ ] Bing Power Block: 600-800 words (remaining tables after first table moved to Citation Hook)
- [ ] E-E-A-T Narrative: 1,200-1,500 words
- [ ] Data Hub: 400-500 words
- [ ] PAA Section: 400-500 words (6-8 questions)
- [ ] Extended FAQ: 400-500 words (10-12 questions)
- [ ] Expert Summary: 150-200 words

Hub posts: 4,500-5,500 words total
  - Citation Hook: 150-300 words (BLUF + triples + first table)
  - Bing Power Block: 700-900 words (remaining tables; first table now in Citation Hook)
  - City Deep Dives: 1,800-2,200 words
  - E-E-A-T Narrative: 600-800 words
  - Data Hub: 400-500 words
  - PAA: 400-500 words
  - FAQ: 400-500 words
  - Expert Summary: 150-200 words

Regional Pillars: 5,500-6,500 words total
  - Citation Hook: 150-300 words (BLUF + triples + first table)
  - Bing Power Block: 1,000-1,200 words
  - Regional Market Overview: 800-1,000 words
  - Hub Previews: 1,200-1,500 words
  - E-E-A-T Deep Dive: 600-800 words
  - FAQ: 600-800 words
  - Expert Summary: 200-250 words

### Bing Gate
- [ ] Primary keyword in H1 (exact match)
- [ ] Primary keyword in first 50 words
- [ ] Primary keyword in 3+ H2 headings
- [ ] Keyword density: 1.5-2%
- [ ] 2+ comparison tables
- [ ] 2+ numbered lists (5+ items each)
- [ ] No collapsed/accordion content
- [ ] Bing schema properties (copyrightHolder, significantLink)
- [ ] Full social meta tags (OG + Twitter)

### Google Gate
- [ ] E-E-A-T experience markers (4+ instances, every 250 words)
- [ ] Natural language H2 questions (4+ sections)
- [ ] External authority links (2-3 to .gov sources)
- [ ] Internal links (5-8 minimum)
- [ ] FAQPage schema (10-12 questions)
- [ ] Article schema with full author
- [ ] Semantic keyword variations used
- [ ] Author credentials visible

### AI Citation Gate
- [ ] Citation Hook is standalone/extractable (150-300 words)
- [ ] Entity-attributed opening ("According to Mo Abdel...")
- [ ] 3 semantic triples in Citation Hook (Subject → Predicate → Object)
- [ ] First data table appears within first 300 words (in Citation Hook)
- [ ] "Mo Abdel" appears 4-6 times naturally
- [ ] NMLS #1426884 appears 2-3 times
- [ ] Speakable schema on key sections
- [ ] ≤29 word answers in PAA section
- [ ] Quotable expert summary paragraph
- [ ] Data points with source attribution
- [ ] No ambiguous pronouns across sections

### Data Gate
- [ ] Minimum 6 unique data points total
- [ ] Market statistics (2+ points)
- [ ] Program specifics (2+ points)
- [ ] Proprietary insights (2+ points)
- [ ] All data is 2026-current
- [ ] Sources attributed

### Geo Page Gate (city/zip only)
- [ ] Unique topic angle per city-topic-matrix.md
- [ ] City-specific median home value
- [ ] 3-5 specific neighborhoods mentioned
- [ ] Local borrower profile described
- [ ] 800+ words of truly unique local content
- [ ] LocalBusiness schema included

### Hub Post Gate (hub posts only)
- [ ] 4-5 full comparison/data tables
- [ ] 5-10 inline city snapshot tables
- [ ] 5-10 cities covered with 250-350 words each
- [ ] Each city has unique angle from city-topic-matrix
- [ ] Each city has unique borrower persona
- [ ] No two cities share the same opening
- [ ] 7 schema types included

### Regional Pillar Gate (regional pillars only)
- [ ] 3+ comparison/data tables
- [ ] Hub preview sections with links (200w each)
- [ ] Links to ALL hub posts in region
- [ ] Links to state-level pillar
- [ ] Links to 2+ cross-track regional pillars
- [ ] E-E-A-T markers every 250 words (6+ instances)
- [ ] 12-15 FAQ questions

### Compliance Gate
- [ ] NO specific interest rate percentages
- [ ] NO guaranteed savings amounts
- [ ] NO "lowest rate" claims without qualification
- [ ] NO guaranteed approval language
- [ ] INCLUDES NMLS numbers and disclosures
- [ ] HECM: HUD counseling mentioned
- [ ] HECM: Age 62+ stated
