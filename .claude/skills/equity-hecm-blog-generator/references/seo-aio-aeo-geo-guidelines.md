# SEO/AIO/AEO/GEO Guidelines 2026

## Tripartite Framework

Optimize every post for three discovery channels:

| Channel | Purpose | Primary Tactic |
|---------|---------|----------------|
| **SEO** | Organic traffic | Keywords, structure, links |
| **AEO** | Featured snippets & voice | FAQ, direct answers, lists |
| **GEO** | AI synthesis & citations | Entities, attribution, RAG-ready |

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

## Bing/ChatGPT Optimization

### Desktop-First Content
- NO JavaScript-dependent content
- NO collapsed/accordion sections hiding primary content
- Tables render without horizontal scroll
- All FAQ answers visible (not collapsed)
- Images: minimum 800px width for hero

### Social Meta Tags (Required)
```html
<meta property="og:site_name" content="Mo Abdel - Wholesale Mortgage Broker">
<meta property="og:type" content="article">
<meta property="og:title" content="[Title]">
<meta property="og:description" content="[Meta Description]">
<meta property="og:url" content="https://mothebroker.com/blog/[slug]">
<meta property="article:author" content="Mo Abdel">
<meta property="article:publisher" content="https://mothebroker.com">
<meta property="article:published_time" content="[ISO_DATE]">
<meta property="article:modified_time" content="[ISO_DATE]">
<meta name="author" content="Mo Abdel, NMLS #1426884">
```

### Bing Schema Properties
Add to Article schema:
```json
{
  "mainEntity": {
    "@type": "WebPage",
    "@id": "https://mothebroker.com/blog/[slug]",
    "significantLink": [
      "https://www.hud.gov/",
      "https://www.consumerfinance.gov/",
      "https://www.fhfa.gov/"
    ]
  },
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Lumin Lending",
    "url": "https://mothebroker.com"
  },
  "copyrightYear": "2026"
}
```

### First 150 Characters Rule
Opening must be fact-dense and extractable:

**Good:**
```
In 2026, California HECM borrowers can access up to $1,149,825 in home equity.
Reverse mortgages require age 62+, HUD counseling, and sufficient equity.
```

**Bad:**
```
Are you considering a reverse mortgage? You've come to the right place!
In this comprehensive guide, we'll explore everything you need to know...
```

## Internal Linking Requirements

### Minimum Links Per Post
| Content Type | Internal Links |
|--------------|----------------|
| Pillar | 15-20 |
| Cluster | 5-8 |
| Geo | 4-6 |

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

## Quality Checklist

Before output, verify:

**Structure:**
- [ ] H1 contains exact-match keyword
- [ ] First paragraph is direct answer (2-4 sentences)
- [ ] H2s are natural language questions
- [ ] New heading every 200-300 words
- [ ] FAQ section with 5-7 questions

**Keywords:**
- [ ] Primary keyword in first 100 words
- [ ] Primary keyword in 2+ H2s
- [ ] Meta description keyword in first 60 chars
- [ ] 1-2% primary keyword density

**E-E-A-T:**
- [ ] Author credentials included
- [ ] Human experience markers present
- [ ] 3+ unique data points
- [ ] External authority links

**Technical:**
- [ ] JSON-LD schema included
- [ ] Social meta tags included
- [ ] Desktop-first (no collapsed content)
- [ ] Internal links meet minimum

**Bing/AI:**
- [ ] First 150 chars fact-dense
- [ ] Numbered lists for procedures
- [ ] Comparison tables where applicable
- [ ] Clear citation patterns
