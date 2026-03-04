# Compliance Rules — Mortgage Content Generation

## CRITICAL: Mandatory Compliance Gate

**Every blog post MUST pass ALL compliance items before output. Non-compliant content cannot be published.**

> This document was overhauled on 2026-02-17 after a full-site compliance audit uncovered 15 CRITICAL, 25+ HIGH, and 30+ MEDIUM violations. Every rule below maps to a real violation that was found and remediated. Do NOT weaken or remove any rule.

---

## 1. Entity Profile (Canonical Values)

**Use ONLY these values. Never invent, guess, or use old values.**

| Field | Value |
|-------|-------|
| Broker Name | Mo Abdel |
| Personal NMLS | #1426884 |
| Company | Lumin Lending, Inc. |
| Company NMLS | #2716106 |
| DRE License | #02291443 |
| Licensed States | **CA, WA — ONLY** |
| Phone | (949) 822-9662 |
| Lender Network | 200+ lenders |

### Hard Rules
- **NEVER list any state other than CA and WA** (TX, FL, AZ, VA, CO are all WRONG — these caused 39 file violations)
- **NEVER use NMLS #1850** (this was an incorrect number found on 14 files)
- **NEVER use "West Capital Lending"** (old name — company rebranded to Lumin Lending)
- **NEVER say "50+ lenders" or "100+ lenders"** — standardize to "200+ lenders" or "200+ lending partners"
- The footer disclosure block MUST appear on every post (see Section 3A)

---

## 2. Prohibited Content (NEVER Include)

### A. Interest Rate Restrictions (Reg Z / TILA)
**NEVER mention specific interest rate percentages in any blog post.**

Under Regulation Z, quoting a specific rate is a "trigger term" that requires disclosure of APR, loan term, and total payments. Our policy: avoid trigger terms entirely.

| Prohibited | Safe Alternative |
|------------|-----------------|
| "rates as low as 6.5%" | "competitive rates" |
| "HECM rates around 7%" | "current market rates" |
| "APR between 6-7%" | "favorable terms" |
| "0.5% lower than banks" | "wholesale pricing advantage" |
| "rates were 3% in 2021" | "historically low rate environment" |
| "rates may drop to 5.5%" | "potential rate improvements" |
| "HELOC rates 7.25%-9.50%" | "HELOC rates vary by lender and creditworthiness" |
| "DSCR loans from 7.00%" | "competitive DSCR loan pricing" |
| "Jumbo rates from 5.875%" | "competitive jumbo pricing" |

**Exception:** Government-published figures (FHA MIP rates set by HUD, VA funding fee percentages) are acceptable because they are regulatory facts, not broker pricing claims. Always attribute: "per HUD/VA guidelines."

### B. Savings & Payment Claims
**NEVER claim specific dollar amounts for savings or payments.**

| Prohibited | Safe Alternative |
|------------|-----------------|
| "save $500/month" | "potential monthly savings" |
| "save $50,000 over loan life" | "significant long-term savings" |
| "payments as low as $2,500" | "payment options to fit your budget" |
| "access $300,000 in equity" | "access a portion of your equity" |

### C. Guarantee & Superlative Language
**NEVER use unsubstantiated superlatives or guarantee language.**

| Prohibited | Safe Alternative |
|------------|-----------------|
| "guaranteed approval" | "flexible qualification options" |
| "lowest rates" | "competitive rates" |
| "best rates in town" | "competitive rates from multiple lenders" |
| "best mortgage broker" | "experienced mortgage broker" or "your mortgage broker" |
| "top-rated mortgage broker" | "experienced mortgage broker" |
| "#1 mortgage broker" | Remove entirely |
| "Best Rate Guarantee" | "Rate Comparison Service" |
| "guaranteed lower payments" | "potentially lower payments" |
| "guaranteed savings" | "potential savings" |
| "close in 15 days guaranteed" | "streamlined closing process" |
| "no credit check" | "flexible credit requirements" |
| "zero headaches" | Remove entirely |
| "hassle-free" | "streamlined process" |

### D. Misleading Terms
| Prohibited | Safe Alternative |
|------------|-----------------|
| "free appraisal" | "appraisal may be included" |
| "no closing costs" | "closing cost options available" |
| "100% Free" | "Free consultation" or "No-obligation consultation" |
| "pre-approved" (when meaning pre-qualified) | "pre-qualified" |
| Government endorsement implications | Factual program descriptions only |

### E. "Wholesale Rates" Consumer Pricing Claims
**The term "wholesale" is acceptable when describing the broker-to-lender channel. It is NOT acceptable as a consumer-facing price claim.**

| Prohibited | Safe Alternative |
|------------|-----------------|
| "Banks charge retail prices. We give you wholesale rates." | "We work with multiple lenders to find competitive pricing." |
| "wholesale rates for consumers" | "competitive rates from multiple wholesale lenders" |
| "get wholesale pricing" | "access institutional pricing through a broker" |

### F. Confirmshaming & Manipulative CTAs
| Prohibited | Safe Alternative |
|------------|-----------------|
| "No thanks, I prefer higher bank rates" | "No thanks" or "Maybe later" |
| "Structure your loan for maximum tax benefit" | "Explore your home equity options" |
| "I'll show you how to maximize your deduction" | "Discuss options with your CPA" |

---

## 3. Required Disclosures (Every Post)

### A. Footer Disclosure Block (REQUIRED — EVERY POST)
```markdown
---
**Mo Abdel** | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443
Licensed in: CA, WA

Equal Housing Lender. All loans subject to credit approval, underwriting
guidelines, and program availability. Terms and conditions apply. This is
not a commitment to lend. Not all borrowers will qualify. Information is for
educational purposes only and does not constitute financial, tax, or legal
advice. Contact a licensed loan officer for personalized guidance.
---
```

**Changes from old version:**
- Added "Not all borrowers will qualify."
- Added "tax, or legal" to the advice disclaimer
- These are MANDATORY — do not shorten or omit

### B. Equal Housing Opportunity
- Every post MUST include Equal Housing Lender statement
- When suggesting images, include Equal Housing logo where appropriate

### C. Educational Disclaimer
Include where discussing market analysis, rate trends, tax implications, or comparisons:
```
"For educational purposes only. Individual results may vary."
```

### D. State Licensing — HARD RULE
- **ONLY list CA and WA.** NEVER add TX, FL, AZ, VA, CO, or any other state.
- Include DRE #02291443 for California content
- Reference Washington Department of Financial Institutions for WA content

---

## 4. HECM / Reverse Mortgage Compliance

### A. Required Disclosures (Every HECM Post)
Every HECM post MUST include ALL of these:

1. **Age Requirement:** Explicitly state "62 years or older"
2. **HUD Counseling:** Mention required HUD-approved counseling
3. **Non-Recourse:** Explain borrowers/heirs won't owe more than home value
4. **Loan Balance Growth:** Explain balance increases over time
5. **Property Maintenance:** Mention ongoing maintenance/tax/insurance requirements

### B. HUD/FHA Disclaimer (MANDATORY — Every HECM Post)
**This was missing from the entire site and caused a CRITICAL violation.**

Every HECM/reverse mortgage post MUST include this disclaimer near the top, after the intro paragraph:

```html
<div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
  <p className="font-semibold text-amber-800">Important Notice</p>
  <p className="text-amber-700 text-sm">
    This material is not provided by, nor was it approved by, the Department
    of Housing &amp; Urban Development (HUD) or by the Federal Housing
    Administration (FHA). This is not a government agency publication.
  </p>
</div>
```

### C. "Tax-Free" Language — PROHIBITED
**This was the single most widespread violation: 50+ posts used "tax-free" to describe HECM proceeds.**

| Prohibited | Safe Alternative |
|------------|-----------------|
| "tax-free proceeds" | "proceeds that are generally not considered taxable income (consult your tax advisor)" |
| "tax-free cash" | "loan proceeds (not considered taxable income—consult a tax professional)" |
| "tax-free funds" | "loan proceeds" |
| "tax-free income" | "loan advances (generally not considered taxable income)" |
| "tax-free at the state level" | "not subject to state income tax in Washington (consult your tax advisor)" |

**Rule:** First mention in each post uses the long qualified version. Subsequent mentions use "loan proceeds" or "loan advances."

**Exception:** Washington State's no-income-tax status ("Washington has no state income tax") is a factual statement and is acceptable. Just don't apply it to HECM proceeds specifically without qualification.

### D. "Eliminate Mortgage Payments" — PROHIBITED
| Prohibited | Safe Alternative |
|------------|-----------------|
| "eliminate mortgage payments" | "replace your current mortgage payment with no required monthly principal and interest payments" |
| "no more mortgage payments" | Same as above |
| "no monthly mortgage payments" | Same as above |

**MUST always follow with:** "You must continue to pay property taxes, homeowners insurance, and maintain the home. Failure to do so may result in foreclosure."

### E. Social Security / Medicare / Benefits Disclaimer
**When any HECM post discusses Social Security, Medicare, Medicaid, SSI, SSDI, or government benefits, add:**

```html
<div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
  <p className="font-semibold text-blue-800">Benefits Disclaimer</p>
  <p className="text-blue-700 text-sm">
    This information is for educational purposes only. Consult the Social
    Security Administration or Medicare directly for benefits questions.
    Mo Abdel is a mortgage professional, not a benefits counselor.
  </p>
</div>
```

### F. HECM Safe Language Patterns
```
✅ "A reverse mortgage may allow you to access a portion of your home equity"
✅ "HECM borrowers must be 62 or older and complete HUD-approved counseling"
✅ "The loan balance increases over time as interest accrues"
✅ "HECM is FHA-insured with non-recourse protection"
✅ "Individual results vary based on age, home value, and interest rates"
✅ "Proceeds are generally not considered taxable income (consult your tax advisor)"
✅ "Replaces your current mortgage with no required monthly principal and interest payments"
```

---

## 5. Fair Housing Act Compliance (42 U.S.C. § 3604(c))

**It is illegal to make any statement in advertising that indicates preference, limitation, or discrimination based on protected classes.**

### A. Protected Classes
Race, color, religion, national origin, sex, familial status, disability, age (CA adds: marital status, sexual orientation, gender identity, source of income, genetic information)

### B. Neighborhood & City Descriptions — HARD RULES

| Prohibited | Safe Alternative |
|------------|-----------------|
| "Popular with families" | "Features family-friendly amenities and top-rated schools" |
| "Young professional neighborhood" | "Urban neighborhood with walkable dining and entertainment" |
| "Retirement community" (unless legally designated 55+) | "Community with resort-style amenities" |
| "Chinese/Vietnamese/Hispanic neighborhood" | Remove entirely or describe by amenities/architecture |
| "Popular with retirees" | "Known for character homes and established landscapes" |
| "Ideal for seniors" | "Features single-story homes and accessible layouts" |
| "bestFor: seniors" | Remove the bestFor field entirely |
| "bestFor: families" | Remove or replace with property types: "spacious lots near schools" |
| "Family-oriented community" | "Community with parks, recreational amenities, and top-rated schools" |

### C. Rules
1. **NEVER use a `bestFor` field** that targets demographics (age, family status, ethnicity)
2. **NEVER describe WHO lives in a neighborhood** by protected class
3. **ALWAYS describe neighborhoods by:** property characteristics, amenities, architecture, walkability, school ratings, proximity to landmarks
4. **"First-time buyers"** is acceptable (describes purchase history, not a protected class)
5. **HECM "62+"** is acceptable (HUD program requirement, not steering)
6. **Officially designated district names** (e.g., "Little Saigon" business district) are acceptable

---

## 6. Unauthorized Practice Disclaimers

### A. Tax Advice
**Mo Abdel is a mortgage professional, NOT a CPA or tax advisor.**

When discussing tax implications (deductions, tax treatment of proceeds, TCJA, etc.):
- **NEVER say** "I'll structure your loan for maximum tax benefit"
- **ALWAYS add:** "Consult your CPA or tax advisor for tax-specific guidance"
- **Wrap calculation examples** with: "Simplified example for illustration only — consult your CPA"
- **Qualify standard deduction figures** with: "Projected — confirm with IRS or your CPA"

### B. Legal Advice
When discussing estate planning, trusts, title, or legal matters:
- **ALWAYS add:** "Consult a qualified attorney for legal guidance"
- **NEVER say** "you should put your home in a trust" — say "discuss trust options with your estate attorney"

### C. Investment Advice
When discussing investment strategy, ROI, or financial planning:
- **ALWAYS add:** "This is not investment advice. Consult a financial advisor."
- **NEVER say** "this is a better investment than stocks" — say "some homeowners view equity as part of their overall financial picture"

### D. Benefits Counseling
When discussing Social Security, Medicare, VA benefits:
- **ALWAYS add:** "Contact [SSA/VA/Medicare] directly for benefits questions"
- **Mo Abdel is NOT a benefits counselor** — state this explicitly

---

## 7. Content Accuracy Requirements

### A. Conforming Loan Limits (2025 FHFA)

**Use ONLY these values. These are updated annually by FHFA.**

| Limit Type | Value | Notes |
|-----------|-------|-------|
| Baseline conforming | $806,500 | Single-family, standard areas |
| High-cost area (OC, LA, SF, Seattle metro, etc.) | $1,209,750 | Most CA/WA metros |
| FHA floor | $498,257 | Lowest-cost areas |
| FHA ceiling (high-cost) | $1,209,750 | Matches conforming high-cost |

**Always add qualifier:** "2025 conforming loan limits (FHFA). Limits are updated annually."

**WRONG values that were found on the site (NEVER use):**
- ~~$766,550~~ (2024 baseline — outdated)
- ~~$726,200~~ (2023 baseline — outdated)
- ~~$1,149,825~~ (2024 high-cost — outdated)
- ~~$1,266,300~~ (incorrect)
- ~~$1,249,125~~ (incorrect)
- ~~$832,750~~ (incorrect)

### B. FHA Multi-Unit Limits (2025, High-Cost Areas)

| Units | Limit |
|-------|-------|
| 1-Unit | $1,209,750 |
| 2-Unit | $1,548,975 |
| 3-Unit | $1,872,225 |
| 4-Unit | $2,326,875 |

### C. Date Freshness
- Blog post dates should reflect actual publication date
- Market data references should cite their source and date
- **NEVER reference stale year data** as current (e.g., "2024 rates" in a 2026 post)
- When using data, always attribute: "According to [source], as of [date]"

### D. Lender Count
- Standardize to **"200+ lenders"** or **"200+ lending partners"**
- Exception: "50+ jumbo lenders" is acceptable as a specific subset claim
- **NEVER use** "50+ lenders" or "100+ lenders" as a general claim

---

## 8. Regulatory Framework

### A. TILA / Regulation Z
- If ANY trigger term is mentioned (rate, APR, payment amount), ALL terms must be disclosed
- **Solution:** Follow "No Rates" rule to avoid triggering
- Trigger terms include: down payment amounts, payment amounts, finance charges, loan terms

### B. RESPA Compliance
- Do not imply required use of specific service providers
- Do not suggest compensation arrangements that could appear as kickbacks
- Avoid "preferred lender" language

### C. ECOA / Fair Lending
- See Section 5 (Fair Housing) — applies to all content
- Never use language that could be seen as discriminatory

### D. MAP Act (Mortgage Acts and Practices)
- All claims must be substantiated
- No deceptive or misleading statements
- Clear and conspicuous disclosures

### E. SAFE Act
- NMLS number must appear on all advertising
- License state disclosure required

### F. FTC Act Section 5
- No unfair or deceptive acts or practices
- No confirmshaming or manipulative CTAs
- All claims must be truthful and non-misleading

### G. HECM-Specific Regulations
- Comply with HUD HECM counseling requirements
- Follow FHA advertising guidelines
- Include "Not from HUD or FHA" disclaimer (Section 4B)

---

## 9. CTA & Conversion Language Rules

### A. Soft CTAs Only
Blog posts are educational content, not direct-response ads. CTAs should be informational, not high-pressure.

| Prohibited | Safe Alternative |
|------------|-----------------|
| "Apply now before rates go up!" | "Contact us to discuss your options" |
| "Lock in your rate today!" | "Explore your financing options" |
| "Don't miss out on savings!" | "Learn more about available programs" |
| "Call now for guaranteed lowest rate!" | "Call for a personalized consultation" |
| "Structure your loan for maximum tax benefit" | "Explore your home equity options" |

### B. Required CTA Qualifiers
Every CTA in blog content should be followed by or near:
- "Subject to credit approval"
- "Not a commitment to lend" (in footer at minimum)
- "Individual results may vary"

---

## 10. Safe Content Guidance

### A. Safe Topics to Discuss
| Topic | Notes |
|-------|-------|
| General market trends | Up/down/stable direction, no specific rate numbers |
| Wholesale vs retail process | Process differences, not rate differences |
| Loan program features | Eligibility requirements, program facts |
| Down payment requirements | Program facts (3.5% for FHA per HUD is OK) |
| Credit score guidance | Ranges for qualification |
| Closing cost categories | Types, not specific amounts |
| Timeline expectations | Ranges, not guarantees |
| Broker vs direct lender | Model differences, not rate comparisons |
| Government program eligibility | HUD/VA/FHA published requirements |

### B. Safe Language Patterns
```
✅ "Competitive wholesale pricing"
✅ "Access to 200+ lending partners"
✅ "Potential for lower costs through reduced overhead"
✅ "May qualify for better terms"
✅ "Market conditions fluctuate"
✅ "Individual circumstances vary"
✅ "Subject to credit approval"
✅ "Contact us for a personalized quote"
✅ "Based on current market conditions"
✅ "Consult with a licensed loan officer"
✅ "Proceeds are generally not considered taxable income (consult your tax advisor)"
✅ "Experienced mortgage broker" (not "best" or "top-rated")
```

---

## 11. Mandatory Compliance Checklist

**Before ANY blog post is output, verify ALL items pass:**

### Rates & Savings
- [ ] NO specific interest rate percentages mentioned
- [ ] NO APR numbers or ranges mentioned
- [ ] NO specific monthly payment amounts
- [ ] NO guaranteed savings dollar amounts
- [ ] NO rate comparison tables with numerical values

### Language & Claims
- [ ] NO "lowest rate", "best rate", "best mortgage broker" claims
- [ ] NO "guaranteed approval" or "guaranteed savings" language
- [ ] NO "Best Rate Guarantee" or similar guarantee claims
- [ ] NO misleading "free" claims (use "no-obligation consultation")
- [ ] NO "wholesale rates for consumers" pricing claims
- [ ] NO confirmshaming or high-pressure CTAs
- [ ] NO "hassle-free", "zero headaches", or unsubstantiated quality claims
- [ ] Uses inclusive, non-discriminatory language throughout
- [ ] Pre-approval vs pre-qualification used correctly

### Entity & Licensing
- [ ] INCLUDES Mo Abdel NMLS #1426884
- [ ] INCLUDES Lumin Lending NMLS #2716106
- [ ] INCLUDES DRE #02291443
- [ ] States listed as **CA, WA ONLY** (no TX, FL, AZ, VA, CO)
- [ ] Lender count is "200+ lenders" (not 50+ or 100+)
- [ ] Company name is "Lumin Lending" (not "West Capital Lending")

### Required Disclosures
- [ ] INCLUDES Equal Housing Lender statement
- [ ] INCLUDES "not a commitment to lend"
- [ ] INCLUDES "not all borrowers will qualify" or "subject to credit approval"
- [ ] INCLUDES educational/not-financial-advice disclaimer
- [ ] Footer disclosure block present and complete

### HECM-Specific (if applicable)
- [ ] Age 62+ requirement clearly stated
- [ ] HUD counseling requirement mentioned
- [ ] Non-recourse protection explained
- [ ] Loan balance growth acknowledged
- [ ] **HUD/FHA disclaimer present** ("not provided by HUD or FHA")
- [ ] No "tax-free" — uses qualified language (see Section 4C)
- [ ] No "eliminate mortgage payments" — uses compliant replacement (see Section 4D)
- [ ] Benefits disclaimer present if Social Security/Medicare discussed (see Section 4E)
- [ ] Property tax/insurance/maintenance obligation stated

### Fair Housing (all posts with neighborhood/city content)
- [ ] NO demographic descriptions of neighborhoods (who lives there)
- [ ] NO `bestFor` targeting by protected class
- [ ] Neighborhoods described by property type, amenities, architecture only
- [ ] No steering language ("ideal for families", "perfect for retirees")

### Unauthorized Practice
- [ ] Tax discussion wrapped with "consult your CPA" disclaimer
- [ ] Legal topics wrapped with "consult an attorney" disclaimer
- [ ] Investment discussion wrapped with "not investment advice" disclaimer
- [ ] Benefits discussion wrapped with "contact SSA/VA/Medicare" disclaimer

### Content Accuracy
- [ ] Conforming loan limit is $806,500 (baseline) / $1,209,750 (high-cost)
- [ ] All data attributed to source with date
- [ ] No stale year references presented as current

### Wholesale Track (if applicable)
- [ ] "200+ lenders" claim is consistent
- [ ] No specific rate comparisons between wholesale and retail
- [ ] "Wholesale" describes channel accurately, not consumer pricing

### DSCR Track (if applicable)
- [ ] No guaranteed DSCR ratio thresholds (varies by lender)
- [ ] No specific interest rate quotes
- [ ] Disclaimer that rental income projections are estimates
- [ ] Note that property types and eligibility vary by lender program

**If ANY item fails, the post MUST be revised before output.**

---

## 12. Compliance Examples

### HECM Example - COMPLIANT
```
A reverse mortgage allows homeowners 62 and older to access home equity
without required monthly principal and interest payments. Before applying,
you must complete counseling with a HUD-approved counselor. The loan
balance grows over time as interest accrues, but the FHA-insured HECM
program includes non-recourse protection—meaning you or your heirs will
never owe more than the home's value. Proceeds are generally not considered
taxable income (consult your tax advisor). You must continue to pay
property taxes, homeowners insurance, and maintain the home. Contact a
licensed loan officer for a personalized assessment of your options.

This material is not provided by, nor was it approved by, the Department
of Housing & Urban Development (HUD) or by the Federal Housing
Administration (FHA).
```

### HECM Example - NON-COMPLIANT
```
❌ Get a reverse mortgage and access up to $500,000 from your home!
❌ Tax-free proceeds mean more money in your pocket!
❌ Our rates are the lowest in Orange County at 6.99%.
❌ Guaranteed approval for all seniors over 60.
❌ No counseling needed when you work with us.
❌ Eliminate your mortgage payments forever!
```

### Equity Example - COMPLIANT
```
A HELOC provides revolving access to your home equity, typically requiring
15-20% equity and a credit score in the mid-600s or higher. As a wholesale
broker with access to 200+ lending partners, I shop multiple lenders to help
you find competitive terms for your situation. All loans are subject to
credit approval and underwriting guidelines. This is not a commitment to
lend. Contact me for a personalized consultation.
```

### Equity Example - NON-COMPLIANT
```
❌ Get a HELOC at 7.5% APR with payments as low as $300/month!
❌ Save $10,000 compared to bank rates.
❌ Guaranteed lowest HELOC rates in California.
❌ Free closing costs on all HELOCs.
❌ Banks charge retail prices — we give you wholesale rates!
```

### Neighborhood Description - COMPLIANT
```
Newport Beach features luxury waterfront properties, world-class dining,
and proximity to top-rated schools. The community is known for its coastal
architecture, harbor-adjacent homes, and walkable commercial districts.
```

### Neighborhood Description - NON-COMPLIANT
```
❌ Newport Beach is popular with wealthy retirees and young professionals.
❌ This family-friendly community is ideal for affluent Asian families.
❌ A great neighborhood for empty nesters looking to downsize.
```

---

## 13. Annual Update Requirements

Update these items annually when FHFA/HUD publishes new limits:
- Conforming loan limits (Section 7A)
- FHA multi-unit limits (Section 7B)
- FHA/HECM maximum claim amount
- State licensing changes
- Regulatory updates
- Any changes to company NMLS, DRE, or licensing

**Current values (2025 FHFA):**
- Baseline conforming: $806,500
- High-cost area: $1,209,750
- FHA floor: $498,257
- FHA ceiling: $1,209,750

**Last updated:** February 17, 2026
