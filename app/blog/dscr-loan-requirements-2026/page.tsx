import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Building2, DollarSign, TrendingUp, Shield, AlertCircle, FileText, CreditCard, Percent } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LeadMagnetCTA } from '@/components/lead-magnets/LeadMagnetCTA';

export const metadata: Metadata = {
  title: 'DSCR Loan Requirements 2026: Rates, Ratios & Down Payment Guide | Mo Abdel',
  description: 'DSCR loan requirements 2026: Complete guide to qualification ratios, credit scores, down payments, reserves, and property types. Wholesale access to 200+ DSCR lenders. NMLS #1426884.',
  keywords: ['dscr loan requirements 2026', 'DSCR loan qualifications', 'DSCR ratio requirements', 'DSCR loan down payment', 'DSCR credit score requirements', 'investment property loan requirements'],
  openGraph: {
    title: 'DSCR Loan Requirements 2026: Rates, Ratios & Down Payment Guide',
    description: 'Complete DSCR loan requirements guide: Ratios, credit scores, down payments, reserves, and property type eligibility. Apply with wholesale access to 200+ lenders.',
    url: 'https://www.mothebroker.com/blog/dscr-loan-requirements-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-15T00:00:00Z',
    modifiedTime: '2026-02-22T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/dscr-loan-requirements-2026',
  },
};

const faqData = [
  {
    question: "What is the minimum DSCR ratio required for a loan in 2026?",
    answer: "Minimum DSCR ratio requirements vary by lender. Most lenders require a minimum DSCR of 1.0, meaning rent must at least equal the mortgage payment. Some lenders offer below-1.0 DSCR programs (as low as 0.75) with compensating factors such as higher down payment, higher credit score, or additional reserves. Higher DSCR ratios (1.25+) qualify for the best available rates."
  },
  {
    question: "What credit score do I need for a DSCR loan?",
    answer: "Most DSCR lenders require a minimum credit score between 660 and 680. Borrowers with scores of 720+ receive the most favorable rates and highest LTV options. Some lenders accept scores as low as 620 with significant compensating factors like 30%+ down payment and DSCR above 1.25. Credit score requirements vary by lender—a wholesale broker can match you with lenders fitting your profile."
  },
  {
    question: "How much down payment do DSCR loans require?",
    answer: "DSCR loans typically require 20-25% down payment for standard scenarios. Some lenders offer 15% down for strong borrowers (740+ credit, 1.25+ DSCR). Lower DSCR ratios, lower credit scores, or non-warrantable condos may require 25-30% down. Cash-out refinances typically allow 70-75% LTV. Down payment requirements vary by lender, property type, and borrower qualifications."
  },
  {
    question: "Do DSCR loans require reserves?",
    answer: "Yes. Most DSCR lenders require 6-12 months of PITIA reserves. Reserves must be verified through bank statements, investment account statements, or retirement accounts. Some lenders require reserves for each financed property, not just the subject property. Higher reserves can offset lower DSCR ratios or credit scores."
  },
  {
    question: "Can I get a DSCR loan with a bankruptcy or foreclosure on my record?",
    answer: "Yes, but waiting periods apply. Most DSCR lenders require a minimum 2-4 year seasoning period from a bankruptcy discharge or foreclosure completion. Some lenders offer shorter seasoning (as low as 2 years) with compensating factors. Requirements vary significantly by lender, which is where wholesale broker access provides the most value."
  },
  {
    question: "What documentation is required for a DSCR loan application?",
    answer: "DSCR loans require minimal documentation compared to conventional loans. Typical requirements include: credit authorization, 2-3 months bank statements (for reserves only, not income), entity documents (if vesting in LLC), property insurance, lease agreement or rent schedule, and a completed loan application. No W-2s, tax returns, pay stubs, or employment verification required."
  },
  {
    question: "Are there prepayment penalties on DSCR loans?",
    answer: "Many DSCR programs include prepayment penalty options, typically structured as 5-4-3-2-1, 3-2-1, or 2-1 step-down penalties (percentage of loan balance). Accepting a prepayment penalty usually results in a lower interest rate. No-prepay options are available at a higher rate. Your broker can calculate the cost-benefit of each prepayment structure for your investment timeline."
  },
  {
    question: "Can I do a cash-out refinance with a DSCR loan?",
    answer: "Yes. DSCR cash-out refinances are available with typical LTV limits of 70-75% for most property types. Some lenders allow up to 80% LTV for cash-out on single-family properties with strong DSCR ratios and credit scores. Most lenders require the property to have been owned for at least 6 months before allowing a cash-out refinance (seasoning requirement)."
  },
  {
    question: "What are the typical interest rate ranges for DSCR loans in 2026?",
    answer: "DSCR loan rates vary by lender, credit score, DSCR ratio, LTV, and prepayment penalty structure. Rates are typically higher than conventional investment property rates due to the non-QM classification. Wholesale broker access is critical because the rate spread between lenders for the same borrower profile can exceed 1.5 percentage points. Contact a wholesale broker for current rate quotes."
  },
  {
    question: "Can I use gift funds for the down payment on a DSCR loan?",
    answer: "Gift fund policies vary by DSCR lender. Some lenders allow gift funds for a portion of the down payment with a gift letter and documentation of transfer. Other lenders require the full down payment to come from the borrower's own funds. A wholesale broker can identify lenders that accept gift funds if this is relevant to your scenario."
  },
  {
    question: "How many DSCR loans can I have at the same time?",
    answer: "There is no regulatory limit on the number of DSCR loans an investor can hold simultaneously. Unlike conventional mortgages (capped at 10 financed properties), DSCR programs allow unlimited properties. Each property qualifies independently based on its own rental income. Some individual lenders may cap exposure at 10-20 properties per borrower, but working with multiple lenders through a wholesale broker eliminates this constraint."
  },
  {
    question: "Do DSCR loans require an appraisal?",
    answer: "Yes, all DSCR loans require a full appraisal that includes a 1007 rent schedule (for single-family) or Form 216 (for 2-4 units). The appraisal determines both the property value and the market rent. If the property is already leased, lenders typically use the actual lease income for DSCR calculation. If vacant, the appraised market rent is used."
  }
];

export default function DSCRLoanRequirements2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "DSCR Loan Requirements 2026: Rates, Ratios & Down Payment Guide",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["DSCR Loans", "Investment Property Financing", "Non-QM Mortgages", "Wholesale Mortgage Lending", "Loan Qualification Requirements"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "identifier": "NMLS #2716106",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-02-15",
            "dateModified": "2026-02-22",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/dscr-loan-requirements-2026",
              "significantLink": [
                "https://www.consumerfinance.gov/",
                "https://www.fanniemae.com/",
                "https://www.freddiemac.com/"
              ]
            },
            "copyrightHolder": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "url": "https://www.mothebroker.com"
            },
            "copyrightYear": "2026"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-slate-500/20 rounded-full px-4 py-1.5 mb-6 border border-green-500/30">
              <FileText className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">DSCR Requirements Guide</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              DSCR Loan Requirements 2026: Rates, Ratios & Down Payment Guide
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              According to Mo Abdel, NMLS #1426884, understanding DSCR loan requirements in 2026 is the difference between closing a profitable investment and missing the opportunity entirely. DSCR origination volume surged 47% year-over-year in H2 2025 according to CoreLogic, driven by investors seeking income-based qualification. DSCR qualification criteria vary dramatically between lenders &mdash; minimum ratios range from 0.75 to 1.25, credit score floors span 620 to 700, and down payment requirements shift from 15% to 30% depending on the lender and scenario. A wholesale broker comparing 200+ DSCR programs finds the requirements that match your specific investor profile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Check Your DSCR Eligibility
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+19498229662">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  (949) 822-9662
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Bing Power Block */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Are the Complete DSCR Loan Requirements in 2026?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            DSCR (Debt Service Coverage Ratio) loans are non-QM investment property mortgages that qualify borrowers based on the property&apos;s rental income rather than personal income documentation. The core formula is straightforward: <strong>DSCR = Net Operating Income / Annual Debt Service</strong>. For residential investment properties, this simplifies to monthly gross rental income divided by monthly PITIA (Principal, Interest, Taxes, Insurance, Association dues).
          </p>
          <p className="text-lg text-slate-600 mb-6">
            Because DSCR loans are non-QM products, there are no standardized guidelines from Fannie Mae or Freddie Mac. Each lender sets their own requirements, which is why a wholesale broker&apos;s market-wide access is critical. Below are the core qualification pillars that every DSCR lender evaluates, along with typical ranges across the wholesale market as of late February 2026.
          </p>

          {/* Master Requirements Checklist Table */}
          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              DSCR Loan Requirements Checklist (2026)
            </h3>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Requirement</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Typical Range</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">Minimum DSCR Ratio</td>
                    <td className="px-4 py-3 text-sm text-slate-600">0.75 - 1.0</td>
                    <td className="px-4 py-3 text-sm text-slate-600">Most lenders require 1.0+; below-1.0 requires compensating factors</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">Minimum Credit Score</td>
                    <td className="px-4 py-3 text-sm text-slate-600">660 - 700</td>
                    <td className="px-4 py-3 text-sm text-slate-600">Best rates at 740+; some lenders accept 620 with higher down</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">Down Payment (Purchase)</td>
                    <td className="px-4 py-3 text-sm text-slate-600">20 - 30%</td>
                    <td className="px-4 py-3 text-sm text-slate-600">Depends on DSCR ratio, credit score, and property type</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">Max LTV (Refinance)</td>
                    <td className="px-4 py-3 text-sm text-slate-600">70 - 80%</td>
                    <td className="px-4 py-3 text-sm text-slate-600">Rate-and-term up to 80%; cash-out typically 70-75%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">Reserves (Months of PITIA)</td>
                    <td className="px-4 py-3 text-sm text-slate-600">6 - 12 months</td>
                    <td className="px-4 py-3 text-sm text-slate-600">Verified via bank/investment statements; some lenders need reserves for all properties</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">Property Types</td>
                    <td className="px-4 py-3 text-sm text-slate-600">1-4 unit, condos, townhomes</td>
                    <td className="px-4 py-3 text-sm text-slate-600">Some lenders accept 5-8 unit; STR allowed at select lenders</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">Loan Amount Range</td>
                    <td className="px-4 py-3 text-sm text-slate-600">$100K - $5M+</td>
                    <td className="px-4 py-3 text-sm text-slate-600">Some lenders go to $10M; min amounts vary ($75K-$150K)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">Loan Terms</td>
                    <td className="px-4 py-3 text-sm text-slate-600">30-year fixed, ARM, I/O</td>
                    <td className="px-4 py-3 text-sm text-slate-600">30-yr fixed most common; 5/6 ARM and interest-only available</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">Borrower Citizenship</td>
                    <td className="px-4 py-3 text-sm text-slate-600">U.S. citizen, PR, FN</td>
                    <td className="px-4 py-3 text-sm text-slate-600">Foreign national programs available; ITIN borrowers accepted by some</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">Entity Vesting</td>
                    <td className="px-4 py-3 text-sm text-slate-600">LLC, Corp, Trust</td>
                    <td className="px-4 py-3 text-sm text-slate-600">Most lenders allow entity vesting; personal guarantee required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4">8 Steps to Qualify for a DSCR Loan in 2026</h3>
          <ol className="space-y-3 text-slate-600 mb-6">
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">1</span>
              <span><strong>Calculate your property&apos;s DSCR</strong> &mdash; divide the expected monthly rent by the estimated PITIA to confirm the ratio meets lender minimums</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">2</span>
              <span><strong>Check your credit score</strong> &mdash; pull all three bureaus; most lenders use the middle score for qualification</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">3</span>
              <span><strong>Verify available reserves</strong> &mdash; confirm you have 6-12 months of PITIA in liquid or semi-liquid accounts</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">4</span>
              <span><strong>Confirm down payment funds</strong> &mdash; ensure 20-25% is sourced and seasoned (typically 60 days in your account)</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">5</span>
              <span><strong>Prepare entity documents</strong> &mdash; if vesting in an LLC, have operating agreement, EIN letter, and articles of organization ready</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">6</span>
              <span><strong>Contact a wholesale mortgage broker</strong> &mdash; submit your scenario to compare programs from 200+ DSCR lenders simultaneously</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">7</span>
              <span><strong>Order the appraisal with rent schedule</strong> &mdash; the appraisal determines property value and market rent for DSCR calculation</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">8</span>
              <span><strong>Close in 21-30 days</strong> &mdash; with minimal documentation, DSCR underwriting is faster than conventional processing</span>
            </li>
          </ol>
        </section>

        {/* DSCR vs Conventional vs FHA */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do DSCR Requirements Compare to Conventional and FHA Investment Loans?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Understanding how DSCR requirements differ from conventional and FHA programs helps investors identify which financing path aligns with their qualifications and goals. The comparison below highlights the key differentiators across documentation, down payment, credit, and property limits.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Requirement</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">DSCR Loan</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Conventional Invest.</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">FHA (Owner-Occ. Invest.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Income Docs</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">None</td>
                  <td className="px-4 py-3 text-sm text-slate-600">W-2s, tax returns, pay stubs</td>
                  <td className="px-4 py-3 text-sm text-slate-600">W-2s, tax returns, pay stubs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">DTI Requirement</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">None (property-based)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Max 45-50%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Max 43-57%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Min. Down Payment</td>
                  <td className="px-4 py-3 text-sm text-slate-600">20-25%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">15-25%</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">3.5% (must occupy)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Min. Credit Score</td>
                  <td className="px-4 py-3 text-sm text-slate-600">660-680 (varies)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">620-680</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">580+</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Reserves</td>
                  <td className="px-4 py-3 text-sm text-slate-600">6-12 months PITIA</td>
                  <td className="px-4 py-3 text-sm text-slate-600">2-6 months PITIA</td>
                  <td className="px-4 py-3 text-sm text-slate-600">1-3 months PITIA</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Max Financed Properties</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Unlimited</td>
                  <td className="px-4 py-3 text-sm text-slate-600">10</td>
                  <td className="px-4 py-3 text-sm text-slate-600">1 (primary)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">LLC Vesting</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Yes</td>
                  <td className="px-4 py-3 text-sm text-slate-600">No</td>
                  <td className="px-4 py-3 text-sm text-slate-600">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Closing Speed</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">21-30 days</td>
                  <td className="px-4 py-3 text-sm text-slate-600">30-45 days</td>
                  <td className="px-4 py-3 text-sm text-slate-600">45-60 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Interest Rates</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Rates vary by lender</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Lower base rates</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Lowest rates (+ MIP)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 italic">
            Rates, terms, and qualification requirements vary by lender. Rental income projections are estimates and actual income may vary. This comparison reflects typical market ranges in February 2026.
          </p>
        </section>

        <section className="mb-12">
          <LeadMagnetCTA
            title="Free: DSCR Requirements Pre-Qualification Check"
            description="Share your credit score, property details, and available reserves. We'll match you with DSCR lenders whose requirements fit your profile."
            href="/contact"
            badge="Free pre-qualification"
            ctaText="Check your eligibility"
          />
        </section>

        {/* Google E-E-A-T Narrative */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do Credit Score Tiers Affect DSCR Loan Pricing and Approval?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Credit score is the single most impactful borrower-level factor in DSCR loan pricing. While the property&apos;s DSCR ratio determines qualification eligibility, the borrower&apos;s credit score drives the interest rate, maximum LTV, and available program options. Understanding credit score tiers helps investors set realistic expectations and identify actions that improve their pricing before applying.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <h3 className="font-semibold text-slate-900 p-4 bg-slate-50">Credit Score Tiers for DSCR Loans (2026)</h3>
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Credit Score</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Tier</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Typical Max LTV</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Rate Impact</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Lender Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-blue-700">760+</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Premium</td>
                  <td className="px-4 py-3 text-sm text-slate-600">80%</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Best available</td>
                  <td className="px-4 py-3 text-sm text-slate-600">All lenders</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-blue-700">740-759</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Excellent</td>
                  <td className="px-4 py-3 text-sm text-slate-600">80%</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Near-best pricing</td>
                  <td className="px-4 py-3 text-sm text-slate-600">All lenders</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-blue-700">720-739</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Strong</td>
                  <td className="px-4 py-3 text-sm text-slate-600">75-80%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Good pricing</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Most lenders</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-blue-700">700-719</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Good</td>
                  <td className="px-4 py-3 text-sm text-slate-600">75%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Standard pricing</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Most lenders</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-blue-700">680-699</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Acceptable</td>
                  <td className="px-4 py-3 text-sm text-slate-600">70-75%</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Above-standard pricing</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Many lenders</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-blue-700">660-679</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Minimum</td>
                  <td className="px-4 py-3 text-sm text-slate-600">65-70%</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Higher pricing</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Select lenders</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-red-700">620-659</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Sub-minimum</td>
                  <td className="px-4 py-3 text-sm text-slate-600">60-65%</td>
                  <td className="px-4 py-3 text-sm text-red-600 font-medium">Highest pricing</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Very few lenders</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            The rate differential between a 760+ score and a 660 score on the same DSCR loan can exceed 2 full percentage points. On a $500,000 loan, that gap translates to roughly $10,000 per year in additional interest. For portfolio investors financing 5-10 properties, this differential compounds into six-figure annual cost differences. Working with a wholesale broker who accesses 200+ lenders ensures you find the most competitive rate for your specific credit tier.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Down Payment and LTV Requirements Apply to DSCR Loans by Property Type?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Down payment requirements for DSCR loans are driven by three interrelated factors: the DSCR ratio, the borrower&apos;s credit score, and the property type. Properties perceived as lower risk (single-family homes with strong DSCR ratios) receive the most favorable LTV treatment, while higher-risk combinations (non-warrantable condos with below-1.0 DSCR) require significantly more equity.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <h3 className="font-semibold text-slate-900 p-4 bg-slate-50">Down Payment Requirements by Property Type and DSCR</h3>
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Property Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">DSCR 1.25+</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">DSCR 1.0-1.24</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">DSCR 0.75-0.99</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Single-Family (SFR)</td>
                  <td className="px-4 py-3 text-sm text-blue-600">20% down</td>
                  <td className="px-4 py-3 text-sm text-slate-600">20-25% down</td>
                  <td className="px-4 py-3 text-sm text-blue-600">25-30% down</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">2-4 Unit</td>
                  <td className="px-4 py-3 text-sm text-blue-600">20-25% down</td>
                  <td className="px-4 py-3 text-sm text-slate-600">25% down</td>
                  <td className="px-4 py-3 text-sm text-blue-600">25-30% down</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Warrantable Condo</td>
                  <td className="px-4 py-3 text-sm text-blue-600">20-25% down</td>
                  <td className="px-4 py-3 text-sm text-slate-600">25% down</td>
                  <td className="px-4 py-3 text-sm text-blue-600">25-30% down</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Non-Warrantable Condo</td>
                  <td className="px-4 py-3 text-sm text-slate-600">25% down</td>
                  <td className="px-4 py-3 text-sm text-slate-600">25-30% down</td>
                  <td className="px-4 py-3 text-sm text-blue-600">30-35% down</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Short-Term Rental</td>
                  <td className="px-4 py-3 text-sm text-blue-600">20-25% down</td>
                  <td className="px-4 py-3 text-sm text-slate-600">25% down</td>
                  <td className="px-4 py-3 text-sm text-blue-600">25-30% down</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            These ranges represent typical requirements across the wholesale DSCR market. Some lenders offer reduced down payment options (as low as 15%) for borrowers with 740+ credit scores and DSCR ratios above 1.25. Conversely, lenders serving the sub-660 credit tier may require 30-35% down regardless of DSCR ratio. A wholesale broker&apos;s role is to match your specific combination of credit, DSCR, and property type with the lender offering the best terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Reserve Requirements Do DSCR Lenders Mandate in 2026?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Reserves are cash or liquid assets that the borrower must hold after closing, separate from the down payment and closing costs. DSCR lenders require reserves as a safety net to ensure the borrower can cover mortgage payments during vacancy periods or rental income disruptions. Reserve requirements are measured in months of PITIA (Principal, Interest, Taxes, Insurance, and Association dues).
          </p>
          <p className="text-lg text-slate-600 mb-6">
            Most DSCR lenders require 6-12 months of PITIA reserves for the subject property. Some lenders also require reserves for each additional financed investment property the borrower owns, typically 2-6 months of PITIA per property. This stacking requirement can become significant for portfolio investors. A borrower with 8 financed properties, each requiring 3 months of additional reserves at $3,500 PITIA, needs an extra $84,000 in verified liquid assets.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              Acceptable Reserve Sources for DSCR Loans
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-slate-700 mb-2">Fully Accepted:</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>&bull; Checking and savings accounts</li>
                  <li>&bull; Money market accounts</li>
                  <li>&bull; Brokerage and investment accounts</li>
                  <li>&bull; Stocks, bonds, and mutual funds</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700 mb-2">Partially Accepted (varies by lender):</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>&bull; Retirement accounts (60-70% of vested balance)</li>
                  <li>&bull; Cash value of life insurance</li>
                  <li>&bull; Crypto holdings (limited lenders, 50-60% of value)</li>
                  <li>&bull; Business accounts (if sole proprietor)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do Prepayment Penalty Structures Affect DSCR Loan Rates?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Prepayment penalties are a unique feature of DSCR loans that conventional borrowers rarely encounter. Understanding how prepayment structures impact pricing helps investors make informed decisions that align with their investment timeline and exit strategy.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            DSCR lenders offer rate discounts in exchange for prepayment penalty commitments. The logic is straightforward: the lender receives a guaranteed return period, so they offer a lower rate. The most common structures are 5-year, 3-year, and 1-year step-down penalties. A 5-4-3-2-1 structure, for example, means a 5% penalty in year one, declining by 1% each year until the penalty expires after year five.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Prepayment Structure</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Typical Rate Benefit</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">5-4-3-2-1 (5-year)</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Largest rate discount</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Long-term hold investors (5+ years)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">3-2-1 (3-year)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Moderate rate discount</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Medium-term hold (3-5 years)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">2-1 (2-year)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Small rate discount</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Moderate flexibility needed</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">No Prepayment Penalty</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">No discount (highest rate)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">BRRRR strategy, short-term hold, rate drop refinancers</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            For buy-and-hold investors planning to keep a property for 5+ years, accepting a 5-year prepayment penalty delivers the best rate and lowest monthly cost. For BRRRR (Buy, Rehab, Rent, Refinance, Repeat) investors who plan to refinance within 12-24 months, a no-prepay option preserves flexibility even at a higher rate. Your wholesale broker can model the total cost of each prepayment structure against your investment timeline to identify the optimal choice.
          </p>
        </section>

        {/* Data & Comparison Hub */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            DSCR Loan Requirement Scenarios: Real-World Examples
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The following scenarios illustrate how DSCR loan requirements apply in practice. Each example demonstrates how credit score, DSCR ratio, and property type interact to determine qualification and pricing. Rental income projections are estimates; actual income may vary.
          </p>

          <div className="space-y-6 mb-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Scenario 1: Strong Profile &mdash; SFR Long-Term Rental</h3>
              <div className="grid md:grid-cols-4 gap-4 mb-3">
                <div><p className="text-xs text-slate-500">Credit Score</p><p className="font-bold text-slate-900">745</p></div>
                <div><p className="text-xs text-slate-500">DSCR Ratio</p><p className="font-bold text-slate-900">1.30</p></div>
                <div><p className="text-xs text-slate-500">Down Payment</p><p className="font-bold text-slate-900">20%</p></div>
                <div><p className="text-xs text-slate-500">Reserves</p><p className="font-bold text-slate-900">9 months</p></div>
              </div>
              <p className="text-sm text-blue-700">Result: Qualifies at nearly all DSCR lenders with competitive pricing. Maximum program options available including 30-year fixed, ARM, and interest-only.</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Scenario 2: Moderate Profile &mdash; Duplex Investment</h3>
              <div className="grid md:grid-cols-4 gap-4 mb-3">
                <div><p className="text-xs text-slate-500">Credit Score</p><p className="font-bold text-slate-900">695</p></div>
                <div><p className="text-xs text-slate-500">DSCR Ratio</p><p className="font-bold text-slate-900">1.10</p></div>
                <div><p className="text-xs text-slate-500">Down Payment</p><p className="font-bold text-slate-900">25%</p></div>
                <div><p className="text-xs text-slate-500">Reserves</p><p className="font-bold text-slate-900">6 months</p></div>
              </div>
              <p className="text-sm text-blue-700">Result: Qualifies with many DSCR lenders. Rate pricing is above the lowest tier. Increasing credit score to 720+ or boosting DSCR to 1.25+ would improve terms.</p>
            </div>

            <div className="bg-slate-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Scenario 3: Challenging Profile &mdash; Below-Breakeven STR</h3>
              <div className="grid md:grid-cols-4 gap-4 mb-3">
                <div><p className="text-xs text-slate-500">Credit Score</p><p className="font-bold text-slate-900">670</p></div>
                <div><p className="text-xs text-slate-500">DSCR Ratio</p><p className="font-bold text-slate-900">0.85</p></div>
                <div><p className="text-xs text-slate-500">Down Payment</p><p className="font-bold text-slate-900">30%</p></div>
                <div><p className="text-xs text-slate-500">Reserves</p><p className="font-bold text-slate-900">12 months</p></div>
              </div>
              <p className="text-sm text-blue-700">Result: Limited lender availability. Below-1.0 DSCR combined with sub-700 credit narrows options to specialized lenders. Wholesale broker access is essential to identify lenders that accept this profile. Higher reserves provide compensating strength.</p>
            </div>
          </div>
        </section>

        {/* People Also Ask */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask About DSCR Loan Requirements
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Can I qualify for a DSCR loan with a 620 credit score?</h3>
              <p className="text-slate-600"><strong>Some DSCR lenders accept credit scores as low as 620, but options are limited and pricing includes significant rate premiums.</strong> Borrowers with sub-660 credit typically need 30%+ down payment, DSCR above 1.0, and 12+ months of reserves. A wholesale broker is essential for identifying the few lenders serving this credit tier.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">What documentation do DSCR loans NOT require?</h3>
              <p className="text-slate-600"><strong>DSCR loans eliminate W-2s, tax returns, pay stubs, employment verification, DTI calculation, and income letters from the application entirely.</strong> This represents the core advantage: the property&apos;s rental income is the qualification basis, not the borrower&apos;s personal income or employment documentation.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Do I need a property management company for DSCR loan approval?</h3>
              <p className="text-slate-600"><strong>No, DSCR lenders do not require professional property management as a condition of loan approval.</strong> Some lenders may view a property management agreement favorably for rental income stability, but self-management is accepted by all DSCR lenders.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Is there a minimum property value for DSCR loans?</h3>
              <p className="text-slate-600"><strong>Most DSCR lenders set minimum loan amounts between $75,000 and $150,000, which effectively creates a minimum property value based on LTV.</strong> At 75% LTV, a $100,000 minimum loan requires at least a $133,000 property. Higher-value properties have more lender options and better rates.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Can a first-time investor get a DSCR loan?</h3>
              <p className="text-slate-600"><strong>Yes, first-time investors qualify for DSCR loans because no prior real estate investing experience is required for most programs.</strong> Some lenders prefer borrowers with at least one prior property ownership, but many have no experience requirements. First-time investors may face slightly higher reserve requirements at certain lenders.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">How are short-term rental DSCR requirements different?</h3>
              <p className="text-slate-600"><strong>Short-term rental DSCR loans often require higher down payments (25%+), strong credit (700+), and 12 months of STR operating history or AirDNA projections.</strong> Some lenders apply a 75% haircut to STR income projections as a conservative buffer. Not all DSCR lenders offer STR programs, making wholesale broker access important for this niche.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">What happens if my DSCR ratio is below 1.0?</h3>
              <p className="text-slate-600"><strong>Below-1.0 DSCR (negative cash flow) loans are available from select lenders, typically requiring DSCR of at least 0.75 with compensating factors.</strong> Compensating factors include higher credit scores (700+), larger down payments (25-30%), and additional reserves (12+ months). These programs are designed for appreciation-focused investors in high-growth markets.</p>
            </div>
          </div>
        </section>

        {/* Extended FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions: DSCR Loan Requirements 2026
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expert Summary + CTA */}
        <section className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Expert Summary: DSCR Requirements Vary &mdash; Wholesale Access Finds Your Match
          </h2>
          <p className="text-lg text-slate-200 mb-4 max-w-3xl mx-auto">
            DSCR loan requirements in 2026 are not one-size-fits-all. Credit score thresholds, DSCR ratio minimums, down payment percentages, reserve requirements, and prepayment penalty structures all vary significantly between lenders. An investor who is declined at one lender may qualify easily at another with better terms.
          </p>
          <p className="text-lg text-slate-200 mb-6 max-w-3xl mx-auto">
            Mo Abdel at Lumin Lending compares DSCR programs from 200+ wholesale lenders to identify the lender whose specific requirements match your credit score, property type, DSCR ratio, and investment strategy. No single retail lender can offer this breadth of comparison. Contact us to find out which DSCR programs you qualify for today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-slate-50 px-8 py-4">
                Check Your DSCR Eligibility
              </Button>
            </Link>
            <a href="tel:+19498229662">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 822-9662
              </Button>
            </a>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4">Related DSCR & Investment Property Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/dscr-investment-property-loans-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR Investment Property Loans 2026
            </Link>
            <Link href="/blog/dscr-loans-explained-investors-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR Loans Explained for Investors
            </Link>
            <Link href="/blog/dscr-vs-conventional-investment-property-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR vs Conventional Loans for Investment Properties
            </Link>
            <Link href="/blog/wholesale-mortgage-broker-california-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Wholesale Mortgage Broker California 2026
            </Link>
            <Link href="/blog/wholesale-mortgage-broker-washington-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Wholesale Mortgage Broker Washington 2026
            </Link>
            <Link href="/blog/non-qm-loans-complete-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Non-QM Loans Complete Guide 2026
            </Link>
            <Link href="/blog/dscr-loans-short-term-rentals-airbnb-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR Loans for Short-Term Rentals &amp; Airbnb
            </Link>
            <Link href="/blog/bank-statement-loans-self-employed-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Bank Statement Loans for Self-Employed 2026
            </Link>
          </div>
        </section>

        {/* Compliance Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p>
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial advice. DSCR loan programs are non-QM products with different guidelines than conventional mortgages. DSCR ratio requirements, interest rates, down payment minimums, credit score thresholds, and reserve requirements vary by lender and are subject to change without notice. Rental income projections are estimates and actual rental income may vary based on market conditions, vacancy rates, and property management. Contact a licensed loan officer for personalized guidance. Mo Abdel, NMLS #1426884, is licensed in California and Washington.
          </p>
        </section>
      </article>
    </div>
  );
}