# Lead Magnet Tools Suite Design

**Date:** 2026-03-05
**Status:** Approved for implementation
**Goal:** Convert 0% CTR blog impressions into leads by building interactive tools that give users numbers, not articles.

## Context

GSC data (Dec 2025 - Mar 2026) shows 5,000+ DSCR impressions, 1,489 bank statement impressions, and thousands more across HELOC/cash-out/reverse mortgage content — all at 0% CTR. Meanwhile, existing interactive tools (property tax estimator, DSCR rent analyzer, max HELOC calculator) achieve 4.8%-50% CTR. The data is unambiguous: build tools, not more blog posts.

## Build Order

1. DSCR Qualification Calculator (highest impression volume)
2. Bank Statement Loan Estimator (second highest demand, completes self-employed pipeline)
3. Loan Finder Quiz (now has complete tool ecosystem to route into)
4. HELOC vs Cash-Out Refi Comparison Tool
5. Mini-widgets on all calculator pages (fast follow once quiz exists)
6. Property tax estimator expansion (can run in parallel)

## Architecture Principles

### Existing Patterns to Follow
- `ToolPageLayout` for all tool pages (breadcrumbs, FAQ, schema, CTA)
- State/county/city dynamic routing via `generateStaticParams()`
- Client-side calculator components (`'use client'`) with server-rendered pages
- `lib/geo-data/` for county/city data (97 counties, 300+ cities)
- `/api/quotes` for lead storage

### New Shared Components

**`ToolLeadCaptureForm.tsx`** — Reusable email gate for all tools:
- Fields: Name, email, phone (optional), timeline dropdown
- Phone field nudge: "Add your phone for a same-day callback with your personalized rate"
- Timeline options: Ready now / 1-3 months / 3-6 months / Just researching
- `InquiryTermsConsent` checkbox (existing component)
- Props: `source` (tool identifier), `toolData` (tool-specific structured data)
- Fires GA `tool_lead_capture` event + FB Pixel `Lead` event
- "Ready now" leads stored with `priority: 'high'`

### Lead Data Schema

Common base + tool-specific data to keep `/api/quotes` clean:

```typescript
interface ToolLead {
  // Common base
  name: string;
  email: string;
  phone?: string;
  timeline: 'ready_now' | '1_3_months' | '3_6_months' | 'researching';
  source: 'dscr-qualification' | 'bank-statement-estimator' | 'loan-finder-quiz' | 'equity-comparison';
  priority: 'high' | 'normal';
  timestamp: string;
  terms_consent: boolean;
  terms_consent_at: string;

  // Tool-specific (varies by source)
  toolData: Record<string, unknown>;
}
```

DSCR toolData: purchasePrice, downPaymentPct, rate, monthlyRent, dscrRatio, qualificationTier, county, city
Bank Statement toolData: avgMonthlyDeposits, businessType, yearsInBusiness, docPeriod, qualifyingIncome, county, city
Quiz toolData: goal, incomeType, propertyType, docSituation, state, zipCode, matchedProgram
Equity Comparison toolData: homeValue, mortgageBalance, amountAccessed, repaymentPreference, recommendedOption, county, city

### Input Validation (shared patterns)
- Min/max ranges per field type, contextualized by county data
- Friendly error messages: "That purchase price seems low for Orange County -- the median is $1.2M. Double-check?"
- Graceful handling of $0, empty fields, extreme values
- No broken calculations — guard against division by zero, NaN results

### Rate Configuration
All assumed rates (HELOC rate, default mortgage rate, DSCR rate) stored in a single config file for easy updates:
```typescript
// lib/tool-rates-config.ts
export const TOOL_RATES = {
  defaultMortgageRate: 0.075,      // 7.5%
  defaultHelocRate: 0.090,         // 9.0%
  defaultDscrRate: 0.075,          // 7.5%
  defaultInsuranceRate: 0.0035,    // 0.35% of home value
  lastUpdated: '2026-03-01',       // Displayed on tools
};
```

---

## Tool #1: DSCR Qualification Calculator

### URL Structure
```
/tools/dscr-qualification-calculator
/tools/dscr-qualification-calculator/ca
/tools/dscr-qualification-calculator/wa
/tools/dscr-qualification-calculator/[state]/[county]
/tools/dscr-qualification-calculator/[state]/[county]/[city]
```

### Inputs
- Purchase price (pre-filled with county/city median)
- Down payment % (buttons: 20%, 25%, 30% + custom)
- Interest rate (default from config, adjustable)
- Loan term toggle: 30-year amortizing / 30-year interest-only
- Monthly rental income (pre-filled with county/city median rent)
- Short-term rental toggle (applies 75% income haircut)
- Annual property tax (auto-calculated from county rate x price)
- Annual insurance (default from config, adjustable)
- Monthly HOA (default $0, adjustable)
- Property management fee toggle (0% / 8% / 10% of rent)

### Calculation
```
DSCR = Monthly Rent / (Mortgage Payment + Tax/12 + Insurance/12 + HOA + Mgmt Fee)
```
Interest-only: `Payment = Loan Amount x (Rate / 12)`
Amortizing: standard amortization formula

### Free Results
- DSCR ratio (large, prominent, color-coded)
- Qualification status message (scenario-framed, not generic tiers):
  - Green (>=1.25): "Strong qualification -- best-available pricing across our lender network"
  - Blue (1.0-1.24): "Qualifies with most lenders we work with -- standard DSCR programs available"
  - Yellow (0.75-0.99): "Qualifies with select lenders -- we work with several that accept sub-1.0 DSCR"
  - Red (<0.75): "Below most lender minimums -- let's explore options to improve your ratio"
- Interest-only teaser (if amortizing selected): "Switching to interest-only would improve your DSCR to X.XX"
- That's it. No tables, no rent sensitivity, no program counts.

### Email-Gated Report
- Comparison table: 20%/25%/30% down payment rows showing DSCR ratio, monthly payment, qualification tier
- Rent sensitivity: "You need $X,XXX/mo for 1.0 DSCR, $X,XXX/mo for 1.25 DSCR"
- Amortizing vs. interest-only side-by-side comparison
- Estimated rate range for their tier
- LTV & loan limit check (conforming vs jumbo for the county)
- 5-year equity projection using county appreciation data
- Next steps checklist: "3 things to have ready for your rate quote"

### City Page "DSCR Snapshot"
Dynamic paragraph using geo-data, e.g.: "Irvine's median rent of $3,200/mo and median home price of $1.2M creates a typical DSCR of 0.85 at 25% down -- meaning most Irvine investors will want to explore interest-only programs or higher down payments to reach the 1.0+ threshold."

### SEO
- Title: `DSCR Loan Calculator -- {County}, {State} [Check If You Qualify 2026]`
- 5 location-specific FAQs per county page
- Schema: WebApplication + FAQPage + BreadcrumbList
- Internal links: DSCR rent analyzer, DSCR blog posts, cash-out calculator

### Components
- `DscrQualificationCalculator.tsx` — client component, inputs + free results
- `DscrQualificationReport.tsx` — client component, gated report
- Reuses: ToolPageLayout, ToolLeadCaptureForm, geo-data library, /api/quotes

---

## Tool #2: Bank Statement Loan Estimator

### URL Structure
```
/tools/bank-statement-loan-estimator
/tools/bank-statement-loan-estimator/[state]/[county]
/tools/bank-statement-loan-estimator/[state]/[county]/[city]
```

### Inputs

**Business Profile:**
- Business type: Service / Retail or product-based / Professional practice / Gig or freelance
- Time in business: Less than 1 year / 1-2 years / 2+ years
- Documentation period: 12 months / 24 months

**Financial:**
- Average monthly deposits
- Desired property price (pre-filled with county median)
- Down payment % (buttons: 10%, 15%, 20% + custom)
- Credit score range: 700+ / 660-699 / 620-659

### Calculation Logic

Business type maps to a single midpoint expense factor (not a range) for the free estimate:
- Service: 45%
- Retail/product: 50%
- Professional: 40%
- Gig/freelance: 50%

```
Qualifying Income = Avg Monthly Deposits x (1 - Expense Factor)
Max Loan = based on qualifying income at 43% DTI and current rates
```

The gated report shows the range (e.g., 35-45% for professional) and how it affects qualification.

### Free Results
- Qualification status (green/yellow/red) with message:
  - Green: "Based on your deposits, you likely qualify for bank statement programs"
  - Yellow: "Borderline -- program selection and documentation strategy matter"
  - Red: "May need higher deposits or larger down payment"
- Single estimated qualifying income: "Estimated qualifying monthly income: $X,XXX"
- Nothing else. No 12/24 month comparison, no ranges, no optimization insights.

### Email-Gated Report
- Qualification range: "You may qualify for $450K - $680K across programs in our network"
- 12 vs 24 month comparison (side-by-side qualifying income and max loan)
- Down payment impact table (10%/15%/20% vs max purchase price)
- Credit score tier impact on available programs
- Required documents checklist (tailored to business type)
- Next steps: "3 things to prepare before your scenario review"

### Input Validation
- Monthly deposits: min $3,000 / max $500,000
- Below min: "Most bank statement programs require minimum deposits of $3,000/mo"
- Property price: min $100K / max $10M, warning if >3x county median
- Time in business <1 year: yellow note "Some programs require 2+ years in business"
- Credit below 620: suggest alternative programs + link to quiz

### City Page "Bank Statement Snapshot"
Dynamic: "Santa Monica's median home price of $2.1M means most self-employed buyers need average monthly deposits of $XX,XXX+ to qualify at 20% down. Service-based professionals in the entertainment and creative industries -- common in the Santa Monica market -- typically see the most favorable expense factor treatment under bank statement programs."

### Components
- `BankStatementEstimator.tsx` — client component, inputs + free results
- `BankStatementReport.tsx` — client component, gated report
- Reuses: ToolPageLayout, ToolLeadCaptureForm, geo-data library

---

## Tool #3: Loan Finder Quiz

### URL Structure
```
/tools/loan-finder
```
No county/city variants. Universal entry point.

### Quiz Flow (5 questions, one per screen)

**Q1: What's your goal?**
- Buy a home to live in
- Buy an investment/rental property
- Refinance my current home
- Access my home equity (HELOC/cash-out)
- Buy a second/vacation home

**Q2: How do you earn your income?**
- W-2 employee
- Self-employed / business owner
- Retired / fixed income
- Foreign national / non-US income
- Multiple sources / it's complicated

**Q3: What type of property?**
- Single-family home
- Condo / townhome
- 2-4 unit multi-family
- 5+ unit / commercial
- Short-term rental (Airbnb/VRBO)

**Q4: How would you describe your documentation situation?**
- I can provide full tax returns and W-2s
- I'd prefer to use bank statements instead of tax returns
- I have minimal documentation available
- I'm not sure what I'll need

**Q5: Where's the property?**
- California / Washington dropdown
- Optional zip code for county-level routing

### Routing Logic

Primary program matching:

| Income | Goal | Property | -> Program |
|--------|------|----------|------------|
| W-2 + Buy primary + SFR/condo | -> Conventional/FHA/VA |
| W-2 + Buy investment + any | -> DSCR or Conventional |
| Self-employed + any + any | -> Bank Statement Estimator |
| Retired + equity access + any | -> HECM / Reverse Mortgage content |
| Foreign national + any + any | -> Foreign National content + contact |
| Any + investment + STR | -> DSCR Calculator (STR mode) |
| Any + refinance + any | -> Cash-Out or Equity Comparison |
| Any + equity access + any | -> Equity Comparison Tool |

**Special cases:**
- Condo selected in Q3: Add conditional note to any result: "Condo financing has additional requirements -- our scenario review includes a condo eligibility check"
- 5+ unit / commercial in Q3: Route to contact form (no calculator handles this). Message: "Commercial property financing requires a custom analysis. Here's what to have ready for our call:" + short checklist
- "It's complicated" or "Not sure" answers: Route to contact form with warm framing: "Your situation has a few variables that a calculator can't capture well -- that's actually common, and it's exactly why working with a broker who accesses 200+ lenders matters. Here's what would help me give you an accurate answer:"

### Free Results
- Matched program name with confidence: "Strong match" / "Likely fit" / "Worth exploring"
- 2-3 bullet points explaining why this program fits their answers
- Direct link to relevant calculator
- Secondary recommendation: "Also worth considering: [program]" with brief explanation

### Email-Gated Addition
- Personalized comparison of top 2-3 matched programs
- Required documents checklist for matched program + income type
- Timeline expectations for matched program
- "What to ask your broker" questions

### Homepage Placement
Prominent card after hero section:
"Not sure which loan program fits your situation? Answer 5 quick questions -- get matched to the right program in 60 seconds. [Find My Program ->]"

### Navigation
First item under Tools in main nav (bold/featured):
```
Tools
  Find Your Loan Program   <- quiz, featured
  DSCR Qualification Calculator
  Bank Statement Loan Estimator
  Equity Comparison Calculator
  Property Tax Estimator
  Max HELOC Calculator
  Cash-Out Limit Calculator
  DSCR Rent Analyzer
```

### Lead Data
All 5 quiz answers stored as structured fields in toolData. Source: 'loan-finder-quiz'. Richest lead data in the pipeline.

### Components
- `LoanFinderQuiz.tsx` — client component, multi-step quiz
- `QuizResults.tsx` — client component, results + gated report
- Reuses: ToolLeadCaptureForm

---

## Tool #4: HELOC vs Cash-Out Refi Comparison Tool

### URL Structure
```
/tools/equity-comparison-calculator
/tools/equity-comparison-calculator/[state]/[county]
/tools/equity-comparison-calculator/[state]/[county]/[city]
```

### Inputs

**Property Details:**
- Estimated home value (pre-filled with county/city median)
- Current mortgage balance
- Current mortgage rate
- Remaining loan term

**Scenario:**
- Amount to access (slider: $25K - available equity)
- Repayment preference: Pay it back ASAP / Low monthly payments / Flexibility to draw as needed

Note: "Usage" (home improvement, debt consolidation, etc.) is NOT a calculator input. It's captured in the email gate form as lead intelligence.

### Calculation (three parallel)

**HELOC:**
- Available line = (Home Value x 90% CLTV) - Mortgage Balance
- IO draw period payment = Amount x HELOC Rate / 12
- Rate from config, labeled "rates as of [month] 2026"

**Cash-Out Refinance:**
- New loan = Mortgage Balance + Amount
- New monthly payment (30-yr fixed at config rate)
- Break-even months = Closing Costs / monthly difference
- Total interest over remaining term

**HELOAN:**
- Fixed monthly payment on accessed amount
- Total interest over 10/15/20 year terms

### Free Results
- Best fit recommendation based on repayment preference with one-sentence explanation
- Monthly payment comparison: single row showing HELOC IO / Cash-Out new payment / HELOAN payment
- Teaser: "The total cost difference between these options over 10 years is significant -- see the full breakdown"

### Email-Gated Report
- Full comparison table: monthly payment, total interest, closing costs, tax deductibility, flexibility rating
- Break-even analysis for cash-out refi
- 10-year total cost projection
- County-specific equity context (appreciation outlook, equity position support)
- Usage field captured here (home improvement / debt consolidation / investment / education / other)

### City Page "Equity Snapshot"
Dynamic: "Irvine homeowners with a home purchased in 2020 at the then-median of $950K have approximately $480K in equity today based on current median values. At 90% CLTV, that supports a HELOC line of up to $390K or a cash-out refinance of up to $350K at 80% LTV."

### Components
- `EquityComparisonCalculator.tsx` — client component, inputs + free results
- `EquityComparisonReport.tsx` — client component, gated report
- Reuses: ToolPageLayout, ToolLeadCaptureForm, geo-data library

---

## Tool #5: Mini-Widgets

### Component: `LoanProgramRedirect.tsx`

Compact single-question widget. Different placement per context:

**On Property Tax Estimator** (placed RIGHT BELOW tax results, before FAQ — most prominent):
- "Are you buying or do you already own?"
- Buying -> "Estimate your purchasing power" links to DSCR / Bank Statement calculators
- Own -> "Access your equity" links to Equity Comparison tool

**On all other calculator pages** (placed at bottom, above FAQ — subtle):
- DSCR tools: "What's your income type?" -> Self-employed routes to Bank Statement Estimator
- HELOC/Cash-Out tools: "Is this your primary residence?" -> No routes to DSCR Calculator
- Mortgage Calculator: "How do you earn income?" -> Routes accordingly

### Design
- ~150px tall compact card, slate-50 background
- Single dropdown + conditional message + CTA link
- Not intrusive, positioned as helpful cross-linking

---

## Tool #6: Property Tax Estimator Expansion

### Work Items
- Embed compact `PropertyTaxWidget` in relevant city-specific blog posts
- Add internal links from city blog posts to corresponding tax estimator pages
- Add any missing city pages from geo-data library
- Add `FinancialProduct` schema to property tax pages
- Cross-link from tax estimator to new tools via mini-widget

---

## Differentiators vs. Generic Mortgage Calculators

1. Multi-lender tier framing (compliance-safe, still compelling)
2. Interest-only toggle showing DSCR improvement
3. County/city-specific pre-fills from real market data
4. Short-term rental mode with 75% income haircut
5. Property management fee inclusion
6. Business-type-aware bank statement calculations
7. Side-by-side equity extraction comparison (HELOC vs cash-out vs HELOAN)
8. Quiz-based program matching that routes to specific tools
9. Smart cross-linking widgets between all tools
10. City-specific snapshot paragraphs with unique local market context
