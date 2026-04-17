// Machine-readable source-of-truth for public/llms.txt Section 8.
// When adding a new blog post, add an entry here and run `npm run llms:refresh`.
// Slug must match lib/all-blog-posts.ts exactly.

export type BlogTriples = [string, string, string];

export const blogTriples: Record<string, BlogTriples> = {
  'refinance-rental-income-qualifying-2026': [
    'Fannie Mae allows 75% of gross rental income to offset investment property PITIA in DTI calculation for California and Washington refinance applicants',
    'Self-employed landlords with 2+ years of Schedule E can add back depreciation to improve qualifying net rental income above cash-flow',
    'Wholesale broker compares rental income calculation methods across 200+ lenders to find programs that maximize qualifying income for multi-property investors',
  ],
  'cash-out-refinance-adu-construction-california-2026': [
    'California homeowners with 20%+ equity use cash-out refinance at up to 80% LTV to access $100K-$400K+ for ADU construction without selling the home',
    'ADU construction costs range from $150K for garage conversions to $400K+ for detached new builds in Orange County generating $1,800-$3,000 monthly rental income',
    'Wholesale broker compares cash-out refinance programs across 200+ lenders to match ADU project scope with optimal loan terms and maximized proceeds',
  ],
  'hecm-line-of-credit-growth-compound-2026': [
    'HECM LOC unused balance compounds at current note rate plus 1.25% MIP annually creating more available credit the longer the line sits untouched',
    'HECM LOC growth is guaranteed by FHA regardless of home value decline unlike HELOC which lenders can freeze when values drop',
    'Wholesale broker access compares principal limit factors from 50+ HECM lenders to maximize the starting LOC balance that drives compounding',
  ],
  'heloc-draw-period-strategies-2026': [
    'HELOC draw period provides 5-10 year revolving access to approved equity up to $750K for California and Washington homeowners on interest-only minimum payments',
    'Strategic staged draws for phased ADU and renovation projects reduce total interest cost 15-20% versus drawing full credit line at close',
    'Voluntary principal paydown during draw period directly reduces repayment-period payment shock and total lifetime HELOC interest cost',
  ],
  'dscr-loan-interest-only-option-2026': [
    'DSCR interest-only loans reduce monthly payment by eliminating principal improving cash flow ratios for qualifying investors in CA and WA',
    'IO periods of 5-10 years lower debt service denominator enabling properties with DSCR ratios near 1.0 to qualify for financing',
    'Wholesale broker network accesses 50+ DSCR lenders with IO programs vs retail banks that rarely offer IO on investment properties',
  ],
  'refinance-after-bankruptcy-waiting-periods-2026': [
    'Chapter 7 bankruptcy requires 2-year waiting period for FHA refinance and 4 years for conventional refinance per Fannie Mae B3-5.3-07 guidelines',
    'Chapter 13 borrowers can refinance after 12 months of on-time plan payments with court trustee approval and documented repayment compliance',
    'Wholesale broker compares post-bankruptcy refinance overlays across 200+ lenders to find approval paths unavailable at retail banks that apply stricter waiting period extensions',
  ],
  'heloc-after-refinancing-timing-qualification-2026': [
    'Most HELOC lenders require 6-12 months seasoning after rate-and-term refinance and 12 months after cash-out refinance before approving a second lien',
    'Combined loan-to-value limits for HELOC after refinance range from 80-90% depending on lender with primary residence qualifying for higher CLTV than investment property',
    'Wholesale broker identifies HELOC programs with shortest seasoning requirements from 200+ lending partners for homeowners who recently refinanced',
  ],
  'dscr-mid-term-rentals-corporate-housing-2026': [
    'Mid-term rentals (30-90 day stays) generate 1.5-2x rental income versus long-term leases improving DSCR ratios above 1.25 threshold for most lenders',
    'DSCR lenders accept Furnished Finder and corporate housing platform booking history as income documentation for mid-term rental qualification',
    'Wholesale broker accesses 50+ DSCR lenders from 200+ partners with mid-term rental experience since most retail banks decline furnished rental income documentation',
  ],
  'cash-out-refinance-ltv-limits-by-loan-type-2026': [
    'Conventional cash-out refinance caps at 80% LTV on primary residence while VA allows up to 100% LTV for eligible veterans',
    'FHA cash-out refinance maximum LTV is 80% with 12-month ownership seasoning versus 6 months for conventional programs',
    'Wholesale broker compares LTV limits and overlays across 200+ lenders to maximize cash-out proceeds for each loan type',
  ],
  'hecm-for-purchase-reverse-mortgage-home-buying-2026': [
    'HECM for Purchase allows seniors 62+ to buy a new primary residence with no monthly mortgage payments using 40-60% down payment',
    'H4P closing costs include 2% upfront MIP plus origination fee capped at $6,000 with seller contributions up to 6% allowed',
    'Wholesale broker accesses 200+ lenders to compare HECM for Purchase programs with varying principal limit factors and closing cost structures',
  ],
  'heloc-interest-tax-deduction-rules-2026': [
    'TCJA limits HELOC interest deduction to proceeds used to buy build or substantially improve the securing home under $750K combined mortgage debt cap',
    'Mixed-use HELOC proceeds require pro-rata allocation with only the home improvement portion qualifying for interest deduction per IRS Publication 936',
    'Wholesale broker structures HELOC financing across 200+ lenders to optimize tax-deductible home improvement equity access for California and Washington homeowners',
  ],
  'refinance-trust-owned-property-california-2026': [
    'Fannie Mae B2-2-05 allows refinancing property in revocable living trusts without requiring deed-out from trust',
    'Irrevocable trust refinancing requires trustee authority confirmation and lender-specific overlay review across 200+ wholesale partners',
    'California and Washington trust certification requirements differ from title company to lender creating qualification disparities resolved by wholesale broker comparison',
  ],
  'refinance-high-dti-strategies-qualification-2026': [
    'FHA allows DTI up to 50% with compensating factors while conventional DU approval can reach 49.99% with strong reserves and credit',
    'VA residual income test enables refinance approval above 50% DTI when monthly surplus exceeds regional thresholds',
    'Wholesale broker compares DTI overlay limits across 200+ lenders to find approval paths for high-DTI borrowers denied by single-lender applications',
  ],
  'va-cash-out-refinance-100-percent-ltv-2026': [
    'VA cash-out refinance allows eligible veterans to access up to 100% of home equity versus 80% maximum for conventional cash-out programs',
    'VA funding fee ranges from 2.15% to 3.3% depending on service history and prior VA loan usage affecting net cash-out proceeds',
    'Wholesale broker compares VA cash-out programs across 200+ lenders to minimize funding fee impact and maximize net proceeds for veteran borrowers',
  ],
  'heloc-second-home-vacation-property-2026': [
    'Second home HELOCs carry LTV caps of 75-80% versus 85-90% for primary residences with rate premiums reflecting higher risk classification',
    'Rental income exceeding 14 days annually triggers investment property reclassification eliminating second home HELOC eligibility at most lenders',
    'Wholesale broker identifies the limited pool of lenders offering second home HELOCs from 200+ partners since most retail banks restrict equity products to primary residences',
  ],
  'home-equity-loan-vs-securities-backed-lending-2026': [
    'Securities-Based Lines of Credit advance 50-95% of portfolio value without triggering capital gains versus home equity products requiring appraisal and real property collateral',
    'SBLOC margin call risk forces liquidation during market downturns while home equity loans carry no mark-to-market provisions on collateral value',
    'Wholesale broker structures home equity alternatives across 200+ lenders for borrowers comparing real property versus securities collateral strategies',
  ],
  'reverse-mortgage-home-equity-sharing-vs-hecm-2026': [
    'Equity sharing agreements from Hometap and Unlock require 15-30% of future home appreciation versus HECM charging only interest on drawn amounts with no appreciation sharing',
    'FHA non-recourse protection guarantees HECM borrowers never owe more than home value while equity sharing agreements create uncapped appreciation liability',
    'HECM line of credit growth compounds annually at current rate plus 1.25% MIP providing increasing equity access unavailable from equity sharing products',
  ],
  'reverse-mortgage-rental-income-qualification-2026': [
    'HECM financial assessment counts 75% of rental income from 2-4 unit owner-occupied properties toward residual income qualification',
    'Rental income documentation requires two years of Schedule E tax returns plus current lease agreements for HECM underwriting',
    'Multi-unit property owners 62+ can use net rental income to offset property charges in HECM Life Expectancy Set-Aside calculations reducing LESA requirements',
  ],
  'reverse-mortgage-home-renovation-hecm-proceeds-2026': [
    'HECM repair set-asides fund mandatory property repairs at closing with 1.5x contractor estimate held in escrow for post-closing completion',
    'Aging-in-place modifications average $5,000-$25,000 for bathroom accessibility and $15,000-$50,000 for comprehensive home modifications per AARP data',
    'HECM line of credit provides phased renovation funding allowing seniors to complete improvements over time while line of credit growth increases future available proceeds',
  ],
  'dscr-foreign-national-investor-california-2026': [
    'Foreign national DSCR loans require no SSN or US income verification qualifying solely on property rental income with DSCR ratios of 1.0-1.25 minimum',
    'Foreign investors need 25-30% down payment with US LLC entity structure for liability protection and simplified tax reporting under FIRPTA rules',
    'Wholesale broker accesses 50+ DSCR lenders from 200+ partners with foreign national programs since most retail banks do not offer non-resident investor financing',
  ],
};
