# Claude Code Prompt: Create Mortgage Broker Blog Generator SKILL

## OBJECTIVE

Create a comprehensive blog generator SKILL for a wholesale mortgage broker serving Southern California. This SKILL must generate SEO-optimized, AIO/AEO/GEO-compliant blog content that dominates local search results and positions the client as the authoritative mortgage expert in affluent Southern California communities.

---

## BUSINESS CONTEXT

### Target Client Profile
Wholesale mortgage broker serving all homebuyers and refinancing homeowners—from first-time FHA buyers to jumbo loan clients—who want the best rates through wholesale channels plus expert guidance. Handles everything from simple conventional loans to complex non-QM solutions.

### Competitive Positioning
The client's wholesale channel access provides a critical rate advantage over:

1. **Retail Banks (Chase, Wells Fargo, BofA)**: Higher overhead = higher rates, limited to proprietary products, slower process
2. **Rocket Mortgage/Quicken Loans**: Retail pricing with heavy marketing costs baked in, one-size-fits-all approach
3. **Local Credit Unions**: Limited product selection, cannot match wholesale rate access across multiple lenders

### Core Value Proposition
- Access to wholesale rates across 50+ lenders
- Lower overhead = better rates passed to borrowers
- Expertise across all loan types (Conventional, FHA, VA, USDA, Jumbo, Non-QM, HELOC)
- Personal service vs. algorithmic/call-center experience
- Local market expertise in Southern California's affluent communities

---

## COMPLIANCE & LEGAL SAFETY (CRITICAL)

> ⚠️ **MANDATORY COMPLIANCE GATE**: Every blog post MUST pass ALL items in the compliance checklist before output. Non-compliant content cannot be published.

---

### 1. PROHIBITED CONTENT (Never Include)

#### A. Interest Rate Restrictions
**NEVER mention specific interest rate percentages (current, past, or predicted) in any blog post.**
- ❌ DO NOT include numbers followed by "%" relating to interest rates (e.g., "6.5%", "rates as low as 5.99%")
- ❌ DO NOT include hypothetical rate comparison tables with numerical rate values
- ❌ DO NOT mention specific basis points or spread numbers (e.g., "0.5% lower", "25 basis points better")
- ❌ DO NOT reference APR percentages or rate ranges (e.g., "APR between 6-7%")
- ❌ DO NOT quote historical rates (e.g., "rates were 3% in 2021")
- ❌ DO NOT predict future rate numbers (e.g., "rates may drop to 5.5%")
- ✅ DO use qualitative terms: "competitive pricing," "wholesale advantage," "market trends," "potentially lower monthly payments," "aggressive pricing models," "favorable terms"

#### B. Savings & Payment Claims
- ❌ DO NOT claim specific dollar savings (e.g., "save $500/month", "save $50,000 over the life of the loan")
- ❌ DO NOT provide specific monthly payment examples (e.g., "payments as low as $2,500/month")
- ❌ DO NOT compare payments between loan types with specific numbers
- ❌ DO NOT guarantee any specific outcome or savings amount
- ✅ DO use: "potential savings," "may reduce monthly payments," "compare your options"

#### C. Guarantee & Superlative Language
- ❌ DO NOT use "guaranteed approval" or "guaranteed rates"
- ❌ DO NOT claim "lowest rates" or "best rates" without qualification
- ❌ DO NOT promise specific timelines (e.g., "close in 15 days guaranteed")
- ❌ DO NOT use "no credit check" or imply credit requirements don't apply
- ✅ DO use: "competitive," "among the best options," "fast closing times," "streamlined process"

#### D. Misleading Terms
- ❌ DO NOT use "free" for anything that has costs (closing costs, appraisals, etc.)
- ❌ DO NOT omit material terms when discussing loan products
- ❌ DO NOT use "pre-approved" when meaning "pre-qualified" (they are legally different)
- ❌ DO NOT imply government affiliation or endorsement beyond actual program participation

---

### 2. REQUIRED DISCLOSURES (Every Post Must Include)

#### A. Footer Disclosures (Required on ALL Posts)
```
---
**Mo Abdel** | NMLS #1426884 | West Capital Lending, Inc. | NMLS #1850
Licensed in: CA, TX, FL, AZ, WA, VA, CO

Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial advice. Contact a licensed loan officer for personalized guidance.
---
```

#### B. Equal Housing Opportunity
- Every post MUST include the Equal Housing Lender statement
- When possible, reference the Equal Housing Opportunity logo in image suggestions

#### C. Educational Disclaimer
- All market analysis, rate trend discussions, and comparisons must include: "For educational purposes only. Individual results may vary."

#### D. State-Specific Compliance
- Content must not make claims that would violate any state's mortgage advertising laws
- California Finance Lender License requirements apply to all CA-targeted content

---

### 3. REGULATORY FRAMEWORK AWARENESS

#### A. TILA / Regulation Z Compliance
- If ANY rate, APR, or payment amount is mentioned (WHICH SHOULD NEVER HAPPEN), ALL terms must be disclosed including APR, loan term, and total payments
- Since we follow the "No Rates" rule, this trigger should never occur
- Any "trigger terms" (down payment amounts, payment amounts, finance charges, loan terms) require full Reg Z disclosure

#### B. RESPA Compliance
- Do not imply required use of specific service providers
- Do not suggest compensation arrangements that could appear as kickbacks

#### C. ECOA / Fair Lending
- Never use language that could be seen as discriminatory
- Do not target or exclude protected classes
- Use inclusive language throughout

#### D. MAP Act (Mortgage Acts and Practices)
- All claims must be substantiated
- No deceptive or misleading statements
- Clear and conspicuous disclosures

---

### 4. SAFE CONTENT GUIDANCE

#### ✅ Safe Topics to Discuss
- General market trend direction (up/down/stable) without specific numbers
- Wholesale vs. retail process differences
- Loan program features and eligibility requirements
- Down payment requirements (these are program facts, not advertised rates)
- Credit score guidance ranges for qualification
- Closing cost categories (not specific amounts)
- Timeline expectations (ranges, not guarantees)
- Benefits of broker vs. direct lender model

#### ✅ Safe Language Patterns
- "Competitive wholesale pricing"
- "Access to multiple lenders"
- "Potential for lower costs through reduced overhead"
- "May qualify for better terms"
- "Market conditions fluctuate"
- "Individual circumstances vary"
- "Subject to credit approval"
- "Contact us for a personalized quote"

---

### 5. MANDATORY COMPLIANCE CHECKLIST

**Before ANY blog post is output, verify ALL items pass:**

```
[ ] NO specific interest rate percentages mentioned
[ ] NO APR numbers or ranges mentioned
[ ] NO specific monthly payment amounts
[ ] NO guaranteed savings dollar amounts
[ ] NO "lowest rate" or "best rate" claims without qualification
[ ] NO "guaranteed approval" language
[ ] NO misleading "free" claims
[ ] INCLUDES NMLS information (Mo Abdel, NMLS #1426884)
[ ] INCLUDES company info (West Capital Lending, Inc., NMLS #1850)
[ ] INCLUDES Equal Housing Lender statement
[ ] INCLUDES educational disclaimer where applicable
[ ] INCLUDES "subject to credit approval" or similar
[ ] Uses inclusive, non-discriminatory language
[ ] All claims are factual and substantiated
[ ] Pre-approval vs pre-qualification used correctly
```

**If ANY item fails, the post MUST be revised before output.**

---

---

## SKILL REQUIREMENTS

### File Structure
Create the following skill structure:

```
mortgage-blog-generator/
├── SKILL.md (main instructions)
├── references/
│   ├── seo-guidelines.md (2025/2026 SEO best practices)
│   ├── content-templates.md (blog post templates by type)
│   ├── keyword-matrix.md (full keyword strategy)
│   └── city-list.md (Top 100 affluent SoCal cities)
├── assets/
│   └── schema-templates.json (structured data templates)
└── scripts/
    └── blog_generator.py (optional: batch generation helper)
```

---

## SKILL.MD REQUIREMENTS

### Frontmatter
```yaml
---
name: mortgage-blog-generator
description: Generate SEO-optimized mortgage and real estate blog posts for a wholesale mortgage broker targeting Southern California affluent communities. Use when creating blog content about mortgages, home loans, refinancing, FHA/VA/Jumbo loans, HELOCs, real estate market updates, or neighborhood guides. Supports batch generation with automatic geo-targeting rotation through 100 affluent SoCal cities. Optimized for Google, Bing, AIO (AI Overviews), AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) for 2025-2026.
---
```

### Core Workflow
The SKILL.md body must include:

1. **Blog Generation Workflow**
   - Step 1: Determine blog type (geo-targeted vs. topical)
   - Step 2: Select city from rotation list (if geo-targeted)
   - Step 3: Apply appropriate template
   - Step 4: Generate content following SEO guidelines
   - Step 5: Add schema markup
   - Step 6: Output final blog post

2. **50/50 Geo-Targeting Rule**
   - When generating batches, exactly 50% MUST be geo-targeted to cities from the city list
   - Track position in city list across invocations
   - Cycle through cities sequentially, never repeating until all 100 are used

3. **Content Types to Support**
   - Geo-Targeted Neighborhood Mortgage Guides
   - Rate Comparison/Market Update Posts
   - Loan Program Deep-Dives (FHA, VA, Jumbo, Non-QM, HELOC)
   - First-Time Homebuyer Educational Content
   - Refinancing Strategy Posts
   - Competitor Comparison Content (Wholesale vs. Retail)
   - FAQ/Answer Engine Optimized Posts

---

## REFERENCES/SEO-GUIDELINES.MD REQUIREMENTS

Include comprehensive 2025/2026 SEO best practices:

### Google Algorithm Alignment
- E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness)
- Helpful Content System compliance
- Core Web Vitals optimization signals in content structure
- Mobile-first content formatting

### AI Overview (AIO) Optimization
- Concise, direct answers in opening paragraphs
- Clear question-answer formatting
- Structured data that AI systems can parse
- Authoritative description of programs and qualification requirements

### Answer Engine Optimization (AEO)
- FAQ schema implementation
- "People Also Ask" targeting
- Voice search optimization (conversational queries)
- Featured snippet formatting (tables, lists, step-by-step)

### Generative Engine Optimization (GEO) & 2026 Tripartite Framework
- **Tripartite Framework**: Optimize for SEO (Traffic), AEO (Answers), and GEO (Synthesis).
- **Inverted Pyramid Content Structure (CRITICAL)**:
  - **Direct Answer First**: The first paragraph MUST contain a concise, complete answer to the primary query (2-4 sentences). This is for AI snippet extraction.
  - **Contextual Expansion**: Provide nuance, data, and expert commentary in subsequent sections.
  - **Structural Rigor**: Use H2/H3 headings phrased as natural language questions (e.g., "How do I qualify for a Jumbo loan in Newport Beach?" instead of "Qualification Requirements").
- **Information Gain (Dominant Ranking Signal)**:
  - **The "High Gain" Rule**: Content must provide unique value beyond existing search results.
  - **Human Experience Markers**: Use phrases like "As a wholesale broker in Orange County, I've observed...", "In our recent closings...", "Our proprietary lender database shows...".
  - **Multimodal Gain**: Suggest unique diagrams, infographics, or video transcripts.
- **Entity Validation**: Reference Mo Abdel's Knowledge Graph attributes (NMLS, `knowsAbout`, `sameAs`).
- **Citation Hygiene**: Clear attribution and sourcing patterns.

### Local SEO Signals
- NAP consistency patterns
- Local business schema implementation
- Geo-modified keyword integration
- Neighborhood-specific content depth

### Primary Keyword Targets (integrate naturally)
1. "mortgage broker near me"
2. "wholesale mortgage pricing advantage"
3. "FHA loans Orange County"
4. "refinance options Orange County"
5. "HELOC programs Orange County"

### Secondary Keyword Clusters
- [City] + mortgage broker
- [City] + home loans
- [City] + refinance options
- [City] + FHA/VA/jumbo loans
- best mortgage options + [City]
- wholesale mortgage + [County]
- first time home buyer + [City]
- HELOC + [City] + programs

---

## REFERENCES/CONTENT-TEMPLATES.MD REQUIREMENTS

Create detailed templates for each content type:

### Template 1: Geo-Targeted Neighborhood Mortgage Guide
```
Title Format: "[City Name] Mortgage Guide [Year]: Top Home Loan Options & Local Lenders"

Structure:
1. Opening Hook (address local buyer pain points)
2. [City] Real Estate Market Snapshot (median prices, trends)
3. The Wholesale Advantage in [City] (savings potential through lower overhead)
4. Best Loan Programs for [City] Homebuyers
   - Conforming Loans (for homes under limit)
   - Jumbo Loans (for luxury homes—critical for affluent areas)
   - FHA Options (if applicable)
5. [City] Down Payment Requirements & Strategies
6. Local Factors Affecting Your Rate (property taxes, HOA, insurance)
7. How to Get Started: [City] Home Loan Process
8. FAQ Section (5-7 questions with schema markup)
9. CTA: Free Rate Quote for [City] Properties

Word Count: 2,000-2,500 words
Schema: LocalBusiness, FAQPage, Article
```

### Template 2: Loan Program Deep-Dive
```
Title Format: "[Loan Type] Loans in [County/Region]: Complete [Year] Guide"

Structure:
1. What is a [Loan Type] Loan? (definition + eligibility)
2. [Loan Type] Requirements in California [Year]
3. Wholesale vs. Retail Comparison: The Pricing Advantage
4. Benefits of [Loan Type] for [Region] Homebuyers
5. [Loan Type] Loan Limits for [County]
6. Step-by-Step Application Process
7. Common [Loan Type] Mistakes to Avoid
8. FAQ Section
9. CTA

Word Count: 1,800-2,200 words
Schema: FAQPage, Article, HowTo
```

### Template 3: Rate Comparison/Market Update
```
Title Format: "[Month] [Year] Mortgage Market Update in [Region]: Wholesale Pricing Analysis"

Structure:
1. Current Market Environment Summary
2. Wholesale Pricing Advantage Breakdown
3. Comparison: Wholesale Broker vs. Major Retailers (Qualitative)
4. What's Driving Rates This Month
5. Rate Lock Strategy Recommendations
6. Best Time to Lock in [Region]
7. FAQ Section
8. CTA

Word Count: 1,200-1,500 words
Schema: FAQPage, Article, Table
```

### Template 4: First-Time Homebuyer Guide
```
Title Format: "First-Time Homebuyer Guide for [City]: [Year] Programs & Qualification"

Structure:
1. Is [City] Right for First-Time Buyers?
2. First-Time Buyer Programs Available in [City/County]
3. Down Payment Assistance Programs
4. FHA vs. Conventional: Which is Better for [City]?
5. Credit Score Requirements & Improvement Tips
6. The Homebuying Timeline in [City]
7. Hidden Costs First-Time Buyers Miss
8. FAQ Section
9. CTA

Word Count: 2,200-2,800 words
Schema: FAQPage, Article, HowTo
```

### Template 5: Competitor Comparison
```
Title Format: "Why Work with a Wholesale Mortgage Broker vs. [Competitor Type] in [Year]"

Structure:
1. The Hidden Costs of [Competitor Type]
2. Pricing Comparison: Wholesale Broker Advantage
3. Product Selection Differences
4. Speed & Service Comparison
5. Real Cost Savings Calculation
6. When [Competitor Type] Might Make Sense (balanced perspective)
7. FAQ Section
8. CTA

Word Count: 1,500-1,800 words
Schema: FAQPage, Article, ComparisonTable
```

---

## REFERENCES/KEYWORD-MATRIX.MD REQUIREMENTS

Create an exhaustive keyword matrix organized by:

### Tier 1: Primary Money Keywords
- mortgage broker near me
- wholesale mortgage pricing
- FHA loans Orange County
- refinance options Orange County
- HELOC programs Orange County
- best mortgage options Southern California
- jumbo loan options California

### Tier 2: Geo-Modified Keywords (for each of 100 cities)
- [City] mortgage broker
- [City] home loans
- [City] mortgage rates
- [City] refinance
- [City] FHA loans
- [City] jumbo loans
- [City] HELOC
- [City] first time home buyer

### Tier 3: Long-Tail/Question Keywords
- "how to get wholesale mortgage rates"
- "wholesale vs retail mortgage rates difference"
- "best mortgage broker in [City]"
- "FHA loan requirements California [Year]"
- "jumbo loan limits [County] [Year]"
- "HELOC vs cash-out refinance [Year]"
- "how much house can I afford in [City]"
- "first time home buyer programs [City]"
- "mortgage market trends today [City]"
- "refinance worth it [Year]"

### Tier 4: Intent-Based Clusters
**Transactional Intent:**
- get pre-approved [City]
- apply for mortgage [City]
- mortgage application [City]
- home loan quote [City]

**Informational Intent:**
- [City] real estate market [Year]
- [City] housing prices
- [City] property taxes
- [City] cost of living

**Commercial Investigation:**
- best mortgage lenders [City]
- [City] mortgage broker reviews
- compare mortgage rates [City]
- wholesale mortgage brokers [County]

---

## REFERENCES/CITY-LIST.MD REQUIREMENTS

Create the definitive list of Top 100 Most Affluent Cities in Southern California that heavily utilize mortgage services. Organize by county and include median home price tier.

### Structure
```markdown
# Top 100 Affluent Southern California Cities

## Tracking Instructions
- Track current position in list across invocations
- When generating batch of N posts where N/2 are geo-targeted, select next N/2 cities sequentially
- After reaching city #100, cycle back to #1
- Store position: CURRENT_CITY_INDEX = [number]

## City List by County

### Orange County (Tier 1: $1.5M+ Median)
1. Newport Beach
2. Laguna Beach
3. Dana Point
4. San Clemente
5. Irvine
6. Newport Coast
7. Corona del Mar
8. Huntington Beach
9. Laguna Niguel
10. Mission Viejo
11. Ladera Ranch
12. Rancho Santa Margarita
13. San Juan Capistrano
14. Yorba Linda
15. Villa Park
16. Tustin
17. Lake Forest
18. Aliso Viejo
19. Coto de Caza
20. Seal Beach

### Los Angeles County (Tier 1: $1.5M+ Median)
21. Beverly Hills
22. Manhattan Beach
23. Hermosa Beach
24. Redondo Beach
25. Palos Verdes Estates
26. Rancho Palos Verdes
27. Rolling Hills
28. Rolling Hills Estates
29. Calabasas
30. Hidden Hills
31. La Cañada Flintridge
32. San Marino
33. Arcadia
34. South Pasadena
35. Pasadena
36. Studio City
37. Sherman Oaks
38. Encino
39. Brentwood
40. Pacific Palisades
41. Santa Monica
42. Playa Vista
43. Marina del Rey
44. Westchester
45. El Segundo

### San Diego County (Tier 1: $1.2M+ Median)
46. La Jolla
47. Del Mar
48. Rancho Santa Fe
49. Solana Beach
50. Encinitas
51. Carlsbad
52. Coronado
53. Point Loma
54. Carmel Valley
55. Scripps Ranch
56. 4S Ranch
57. Santaluz
58. Fairbanks Ranch
59. La Costa
60. Olivenhain

### Riverside County (Tier 2: $800K+ Median)
61. Corona
62. Riverside (Canyon Crest)
63. Riverside (Alessandro Heights)
64. Riverside (Orangecrest)
65. Riverside (Woodcrest)
66. Temecula
67. Murrieta
68. Eastvale
69. Menifee
70. La Quinta
71. Indian Wells
72. Rancho Mirage
73. Palm Desert

### San Bernardino County (Tier 2: $700K+ Median)
74. Rancho Cucamonga
75. Chino Hills
76. Redlands
77. Claremont
78. Upland
79. Alta Loma
80. Big Bear Lake

### Ventura County (Tier 1: $1M+ Median)
81. Thousand Oaks
82. Westlake Village
83. Agoura Hills
84. Camarillo
85. Moorpark
86. Simi Valley
87. Newbury Park
88. Oak Park
89. Lake Sherwood
90. Santa Rosa Valley

### Los Angeles County (Tier 2: $1M+ Median)
91. Glendora
92. Monrovia
93. Claremont
94. Whittier
95. Torrance
96. Culver City
97. Burbank
98. Glendale
99. La Crescenta
100. Altadena
```

---

## ASSETS/SCHEMA-TEMPLATES.JSON REQUIREMENTS

Include pre-built JSON-LD schema templates for:

```json
{
  "localBusiness": {
    "@context": "https://schema.org",
    "@type": "MortgageBroker",
    "name": "[BUSINESS_NAME]",
    "description": "[DESCRIPTION]",
    "areaServed": "[CITY/REGION]",
    "priceRange": "$$",
    "knowsAbout": ["Mortgages", "Home Loans", "Refinancing", "FHA Loans", "VA Loans", "Jumbo Loans", "HELOC"]
  },
  "faqPage": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": []
  },
  "article": {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "[TITLE]",
    "author": {
      "@type": "Person",
      "name": "[AUTHOR_NAME]"
    },
    "publisher": {
      "@type": "Organization",
      "name": "[BUSINESS_NAME]"
    },
    "datePublished": "[DATE]",
    "dateModified": "[DATE]"
  },
  "howTo": {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "[TITLE]",
    "step": []
  }
}
```

---

## BLOG GENERATION LOGIC

When the user invokes the skill to generate blog posts, follow this exact logic:

### Single Post Generation
1. Ask user: "Geo-targeted or topical?"
2. If geo-targeted: Pull next city from city-list.md, increment counter
3. Select appropriate template based on topic
4. Generate content following SEO guidelines
5. Include schema markup
6. Output complete blog post with metadata

### Batch Generation (e.g., "Generate 10 blog posts")
1. Calculate: N_geo = N ÷ 2 (round up), N_topical = N - N_geo
2. Pull next N_geo cities from city list sequentially
3. Generate N_geo geo-targeted posts (one per city)
4. Generate N_topical topical posts (rotate through templates)
5. Update city list position counter
6. Output all posts with index

### City Rotation Example
- User says: "Generate 10 blog posts"
- System generates: 5 geo-targeted (cities 1-5), 5 topical
- User says: "Generate 10 more blog posts"
- System generates: 5 geo-targeted (cities 6-10), 5 topical
- Continues cycling through all 100 cities

---

## CONTENT QUALITY STANDARDS

Every generated blog post MUST include:

### SEO Requirements
- [ ] Primary keyword in H1/title
- [ ] Primary keyword in first 100 words
- [ ] 3-5 secondary keywords naturally integrated
- [ ] Meta description (150-160 chars) with primary keyword
- [ ] Alt text suggestions for any recommended images
- [ ] Internal linking suggestions (to other blog topics)
- [ ] External authority link suggestions (government sources, industry data)

### AIO/AEO Requirements
- [ ] Direct answer to primary query in first paragraph
- [ ] FAQ section with 5-7 questions (schema-marked)
- [ ] Table or list for comparison data
- [ ] Clear, concise definitions for key terms

### GEO Requirements
- [ ] Entity-rich content (specific lenders, programs, locations)
- [ ] Structured data (JSON-LD schema)
- [ ] Citable statistics with sources
- [ ] Clear topical authority signals

### E-E-A-T Signals
- [ ] Author expertise indicators
- [ ] Local market knowledge demonstration
- [ ] Specific, actionable advice
- [ ] Balanced, trustworthy tone
- [ ] Disclosure of wholesale broker positioning

### GEO/AIO Requirements
- [ ] **Direct Answer First**: First paragraph provides a "featured snippet-ready" answer.
- [ ] **Natural Language Headings**: H2/H3 tags are phrased as questions.
- [ ] **High Information Gain**: Includes unique perspectives or data markers AI cannot hallucinate.
- [ ] **Entity Linking**: Refers to specific local entities and Mo Abdel's verified identifiers.
- [ ] **RAG-Ready Formatting**: Uses lists, tables, and clear internal hierarchy for AI chunking.

### Readability & Structure
- [ ] 8th-grade reading level
- [ ] Short paragraphs (3 sentences max)
- [ ] Subheadings every 200 words
- [ ] Bolded key "answer-ready" phrases

---

## OUTPUT FORMAT

Each generated blog post should output in this format:

```markdown
---
title: "[Generated Title]"
meta_description: "[150-160 char description]"
primary_keyword: "[keyword]"
secondary_keywords: ["kw1", "kw2", "kw3"]
target_city: "[City if geo-targeted, null if topical]"
schema_type: "[Article/FAQPage/HowTo/LocalBusiness]"
word_count: [number]
date_generated: "[YYYY-MM-DD]"
---

# [H1 Title]

[Blog content with proper formatting]

---

## JSON-LD Schema
```json
[Complete schema markup]
```

## Internal Link Suggestions
- [Topic 1] → /blog/[slug]
- [Topic 2] → /blog/[slug]

## Image Suggestions
- Hero: [description] | Alt: "[alt text]"
- Supporting: [description] | Alt: "[alt text]"
```

---

## EXECUTION INSTRUCTIONS

1. Run `/mnt/skills/examples/skill-creator/scripts/init_skill.py mortgage-blog-generator --path /home/claude/`

2. Create all files according to specifications above

3. Populate references/ with complete content for:
   - seo-guidelines.md
   - content-templates.md
   - keyword-matrix.md
   - city-list.md (all 100 cities with tracking mechanism)

4. Create assets/schema-templates.json with all schema types

5. Write comprehensive SKILL.md that orchestrates the entire workflow

6. Test by generating:
   - 1 geo-targeted post for Newport Beach
   - 1 topical post about FHA loans
   - Verify schema output
   - Verify city rotation logic

7. Package the skill using `/mnt/skills/examples/skill-creator/scripts/package_skill.py`

---

## SUCCESS CRITERIA

The completed skill must be able to:

1. ✅ Generate a single geo-targeted blog post for any of the 100 cities
2. ✅ Generate a single topical blog post on any mortgage topic
3. ✅ Generate batch posts with exact 50/50 geo/topical split
4. ✅ Rotate through cities sequentially without repetition
5. ✅ Include complete JSON-LD schema for every post
6. ✅ Follow all 2025/2026 SEO best practices
7. ✅ Output AIO/AEO optimized content
8. ✅ Target all 5 primary keywords across generated content
9. ✅ Position wholesale advantage over competitors naturally
10. ✅ Maintain consistent quality across all templates

---

## NOTES FOR CLAUDE CODE

- This skill should be production-ready and immediately usable
- All 100 cities MUST be included in city-list.md
- Templates should be detailed enough to generate without additional prompting
- SEO guidelines should reflect actual 2025 algorithm priorities
- Schema templates should be valid JSON-LD that passes Google's testing tool
- The skill should be self-contained and require no external dependencies
