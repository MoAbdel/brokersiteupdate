import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Building2, DollarSign, TrendingUp, Shield, AlertCircle, Scale, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LeadMagnetCTA } from '@/components/lead-magnets/LeadMagnetCTA';

export const metadata: Metadata = {
  title: 'DSCR vs Conventional Loans for Investment Properties: Complete Comparison [2026] | Mo Abdel',
  description: 'DSCR vs conventional investment property loans 2026: Complete side-by-side comparison of rates, requirements, qualification, and when to use each. Wholesale access to 100+ lenders. NMLS #1426884.',
  keywords: ['dscr vs conventional investment property', 'DSCR vs conventional loan', 'investment property loan comparison 2026', 'DSCR or conventional mortgage', 'best loan for rental property'],
  openGraph: {
    title: 'DSCR vs Conventional Loans for Investment Properties: Complete Comparison [2026]',
    description: 'Side-by-side comparison of DSCR and conventional investment property loans. Rates, requirements, qualification criteria, and when to use each program.',
    url: 'https://www.mothebroker.com/blog/dscr-vs-conventional-investment-property-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-15T00:00:00Z',
    modifiedTime: '2026-02-15T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/dscr-vs-conventional-investment-property-2026',
  },
};

const faqData = [
  {
    question: "Which is better for investment property: DSCR or conventional?",
    answer: "Neither is universally better. Conventional loans offer lower interest rates and down payments for W-2 borrowers with strong DTI ratios and fewer than 10 financed properties. DSCR loans eliminate income documentation requirements and property count limits, making them superior for self-employed investors, portfolio builders, and anyone who cannot document income through traditional channels. The best choice depends on your specific financial profile and investment strategy."
  },
  {
    question: "Are DSCR loan rates higher than conventional investment property rates?",
    answer: "Yes, DSCR rates are typically higher than conventional investment property rates because DSCR loans are non-QM products with reduced documentation. The rate differential varies by lender and borrower profile. Wholesale broker access is essential for minimizing this gap by comparing rates across 100+ DSCR lenders to find the most competitive pricing for your scenario."
  },
  {
    question: "Can I switch from a DSCR loan to a conventional loan later?",
    answer: "Yes. Investors can refinance from a DSCR loan into a conventional mortgage if they meet full documentation requirements, have a DTI ratio within conventional guidelines (typically 45-50%), and have fewer than 10 financed properties. This strategy is common for investors who initially needed DSCR flexibility but later want to capture lower conventional rates."
  },
  {
    question: "How many investment properties can I finance with conventional vs DSCR?",
    answer: "Conventional financing caps investors at 10 financed properties total (including primary residence). DSCR loans have no limit on the number of financed properties. Investors who hit the conventional 10-property ceiling transition to DSCR for subsequent acquisitions. Each DSCR property qualifies independently based on its own rental income."
  },
  {
    question: "Do both DSCR and conventional loans require an appraisal?",
    answer: "Yes, both require full appraisals. DSCR appraisals include a 1007 rent schedule (Form 1025 for 2-4 units) that determines market rent, which is used to calculate the DSCR ratio. Conventional investment property appraisals also assess value but don't always require a formal rent schedule unless rental income is being used for DTI qualification."
  },
  {
    question: "Can I use a conventional loan for a property in an LLC?",
    answer: "No. Fannie Mae and Freddie Mac require conventional loans to be in the individual borrower's name, not an LLC or other entity. DSCR loans allow entity vesting (LLC, corporation, trust), which provides liability protection and potential tax benefits. Investors who need LLC vesting must use DSCR or other non-QM programs."
  },
  {
    question: "Which loan is faster to close: DSCR or conventional?",
    answer: "DSCR loans typically close in 21-30 days, compared to 30-45 days for conventional investment property loans. The faster DSCR timeline results from eliminated income documentation—no W-2 verification, no tax return review, and no employment confirmation. This speed advantage can be decisive in competitive purchase situations."
  },
  {
    question: "Do I need reserves for both DSCR and conventional investment property loans?",
    answer: "Yes, both require reserves. DSCR loans typically require 6-12 months of PITIA reserves. Conventional investment property loans require 2-6 months of reserves. Conventional lenders may also require reserves for each additional financed property (2 months per property for 5-10 properties). Reserve requirements vary by lender and scenario."
  },
  {
    question: "Can I get a DSCR loan and a conventional loan at the same time?",
    answer: "Yes. Many investors use a mixed financing strategy—conventional loans for their first several properties (lower rates, lower down payment) and DSCR loans when they exceed conventional limits or when personal DTI becomes restrictive. There is no rule preventing borrowers from holding both loan types simultaneously."
  },
  {
    question: "Is there a minimum credit score difference between DSCR and conventional?",
    answer: "Conventional investment property loans typically require 620-680 minimum credit scores through Fannie Mae/Freddie Mac guidelines. DSCR loan minimums range from 620 to 700 depending on the lender, with most requiring 660-680. The credit score impact on rate pricing is generally larger for DSCR loans because each lender sets their own pricing matrix."
  },
  {
    question: "What is the DSCR formula and how does it differ from DTI?",
    answer: "The DSCR formula is: Net Operating Income / Annual Debt Service. For residential properties, this simplifies to Monthly Rental Income / Monthly PITIA. DTI (Debt-to-Income) ratio is: Total Monthly Debt Payments / Gross Monthly Personal Income. The key difference is that DSCR evaluates the property's income capacity, while DTI evaluates the borrower's personal income capacity."
  },
  {
    question: "Which loan type works better for the BRRRR strategy?",
    answer: "DSCR loans are generally preferred for BRRRR (Buy, Rehab, Rent, Refinance, Repeat) because they allow unlimited properties, qualify based on rental income (which increases after rehab), and can close faster. However, conventional loans may be used for the initial purchase if the investor has capacity. Some investors use hard money for purchase/rehab, then refinance into DSCR for the long-term hold."
  }
];

export default function DSCRvsConventionalInvestmentProperty2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "DSCR vs Conventional Loans for Investment Properties: Complete Comparison [2026]",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["DSCR Loans", "Conventional Mortgages", "Investment Property Financing", "Wholesale Mortgage Lending", "Loan Comparison"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "identifier": "NMLS #2716106",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-02-15",
            "dateModified": "2026-02-15",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/dscr-vs-conventional-investment-property-2026",
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
            <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-1.5 mb-6 border border-blue-500/30">
              <Scale className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Loan Comparison Guide</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              DSCR vs Conventional Loans for Investment Properties: Complete Comparison 2026
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              According to Mo Abdel, NMLS #1426884, the choice between DSCR and conventional financing is the most consequential decision an investor makes when structuring a rental property acquisition. Conventional loans offer lower rates but demand full income documentation, DTI compliance, and a 10-property ceiling. DSCR loans eliminate all income verification but carry higher rates and larger down payments. Choosing the wrong program costs investors thousands annually &mdash; and a wholesale broker comparing 100+ lenders across both categories ensures every investor finds their optimal match.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Compare Your Options
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
            DSCR vs Conventional Investment Property Loans: What Is the Difference?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            DSCR (Debt Service Coverage Ratio) loans and conventional loans represent fundamentally different approaches to investment property financing. The core difference is the qualification method: conventional loans evaluate the <em>borrower&apos;s</em> ability to repay using personal income documentation (W-2s, tax returns, DTI ratio), while DSCR loans evaluate the <em>property&apos;s</em> ability to repay using rental income (DSCR = Net Operating Income / Annual Debt Service).
          </p>
          <p className="text-lg text-slate-600 mb-6">
            Conventional investment property loans are originated through Fannie Mae and Freddie Mac guidelines, providing standardized underwriting criteria across all lenders. DSCR loans are non-QM (Non-Qualified Mortgage) products where each lender sets their own guidelines, creating wide variability in rates, requirements, and program features. This variability is precisely why wholesale broker access delivers outsized value for DSCR borrowers.
          </p>

          {/* Master Comparison Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <h3 className="font-semibold text-slate-900 p-4 bg-slate-50 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600" />
              Complete DSCR vs Conventional Comparison (2026)
            </h3>
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">DSCR Loan</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Conventional Investment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Qualification Basis</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Property rental income (DSCR ratio)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Borrower personal income (DTI ratio)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Income Documentation</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">None required</td>
                  <td className="px-4 py-3 text-sm text-slate-600">W-2s, tax returns (2 years), pay stubs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Employment Verification</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">Not required</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Required (verbal VOE before closing)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">DTI Ratio Requirement</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">None (property-based)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Max 45-50% (varies by lender)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Min. Down Payment</td>
                  <td className="px-4 py-3 text-sm text-slate-600">20-25%</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">15-25%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Min. Credit Score</td>
                  <td className="px-4 py-3 text-sm text-slate-600">660-680 (varies by lender)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">620-680</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Max Financed Properties</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">Unlimited</td>
                  <td className="px-4 py-3 text-sm text-slate-600">10 (including primary residence)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Entity/LLC Vesting</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">Allowed (most lenders)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Not allowed</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Interest Rates</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Higher (varies by lender)</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">Lower base rates</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Mortgage Insurance</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">Not required</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Required if LTV &gt; 80% (rare for invest.)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Prepayment Penalties</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Common (optional, reduces rate)</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">Not allowed</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Closing Timeline</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">21-30 days</td>
                  <td className="px-4 py-3 text-sm text-slate-600">30-45 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Reserve Requirements</td>
                  <td className="px-4 py-3 text-sm text-slate-600">6-12 months PITIA</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">2-6 months PITIA</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Loan Terms Available</td>
                  <td className="px-4 py-3 text-sm text-slate-600">30-yr fixed, ARM, interest-only</td>
                  <td className="px-4 py-3 text-sm text-slate-600">30-yr fixed, 15-yr fixed, ARM</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Short-Term Rental (STR)</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">Many lenders allow</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Rental income must be documented</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Foreign Nationals</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">Eligible at many lenders</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Not eligible (U.S. income required)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4">5 Key Differences Every Investor Must Understand</h3>
          <ol className="space-y-3 text-slate-600 mb-6">
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-sm shrink-0">1</span>
              <span><strong>Documentation burden</strong> &mdash; Conventional requires 2 years of W-2s, tax returns, pay stubs, and employment verification; DSCR requires none of these</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-sm shrink-0">2</span>
              <span><strong>Property count ceiling</strong> &mdash; Conventional caps at 10 financed properties; DSCR has no limit, enabling unlimited portfolio growth</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-sm shrink-0">3</span>
              <span><strong>Entity ownership</strong> &mdash; Conventional prohibits LLC vesting; DSCR allows LLC, corporate, and trust vesting for liability protection</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-sm shrink-0">4</span>
              <span><strong>Rate and cost structure</strong> &mdash; Conventional offers lower rates but no interest-only options; DSCR offers interest-only and prepayment penalty flexibility</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-sm shrink-0">5</span>
              <span><strong>Qualification independence</strong> &mdash; Each DSCR property qualifies on its own merits; conventional evaluates all properties against the borrower&apos;s total DTI</span>
            </li>
          </ol>
          <p className="text-sm text-slate-500 italic">
            Rates, terms, and requirements vary by lender. Rental income projections are estimates and actual income may vary. This comparison reflects typical market ranges in February 2026.
          </p>
        </section>

        {/* Comparison with FHA */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Does FHA Fit Into the Investment Property Loan Comparison?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            FHA loans are not direct competitors to DSCR or conventional investment property loans because FHA requires owner-occupancy. However, house-hacking investors (buying 2-4 units, living in one, renting the others) use FHA as their entry point. Understanding how all three programs compare helps investors plan their full acquisition strategy from first property to fifteenth.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">DSCR</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Conventional</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">FHA (Owner-Occ.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Occupancy</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Investment only</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Investment only</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Must live in 1 unit</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Min. Down Payment</td>
                  <td className="px-4 py-3 text-sm text-slate-600">20-25%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">15-25%</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">3.5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Income Docs</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">None</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Full</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Full</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Mortgage Insurance</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">None</td>
                  <td className="px-4 py-3 text-sm text-slate-600">If LTV &gt;80%</td>
                  <td className="px-4 py-3 text-sm text-amber-600">MIP for life of loan</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Property Limit</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">Unlimited</td>
                  <td className="px-4 py-3 text-sm text-slate-600">10</td>
                  <td className="px-4 py-3 text-sm text-slate-600">1 primary</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Min. Credit Score</td>
                  <td className="px-4 py-3 text-sm text-slate-600">660-680</td>
                  <td className="px-4 py-3 text-sm text-slate-600">620-680</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">580+</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Best For</td>
                  <td className="px-4 py-3 text-sm text-purple-600 font-medium">Portfolio scaling, self-employed</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Rate-sensitive W-2 investors</td>
                  <td className="px-4 py-3 text-sm text-slate-600">First-time house hackers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <LeadMagnetCTA
            title="Free: DSCR vs Conventional Analysis for Your Scenario"
            description="Send us your property details, income situation, and portfolio size. We'll show you the cost comparison between DSCR and conventional for your specific scenario."
            href="/contact"
            badge="Free comparison"
            ctaText="Get your custom analysis"
          />
        </section>

        {/* Google E-E-A-T Narrative */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            When Should an Investor Choose DSCR Over Conventional?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The decision between DSCR and conventional is not about which program is objectively better &mdash; it is about which program matches the investor&apos;s specific financial profile. Here are the scenarios where DSCR is the clear winner:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Self-Employed with High Write-Offs</h4>
                <p className="text-slate-600">Business owners who legitimately reduce taxable income through deductions often show low AGI on tax returns. Conventional underwriting uses this low AGI, making qualification difficult or impossible despite strong actual cash flow. DSCR ignores tax returns entirely, solving this problem for millions of self-employed investors.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Portfolio Investors Beyond 10 Properties</h4>
                <p className="text-slate-600">Fannie Mae caps conventional investment property financing at 10 financed properties. Once an investor reaches this limit, DSCR becomes the primary financing vehicle for continued portfolio growth. There is no property count limit with DSCR loans, and each property qualifies independently.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">DTI Maxed Out Despite Strong Cash Flow</h4>
                <p className="text-slate-600">An investor earning $150,000 with $6,000 in existing monthly obligations (including mortgages) has a 48% DTI &mdash; near or above conventional limits. Adding another property pushes DTI past the ceiling. DSCR does not calculate DTI at all; the new property qualifies on its own rental income regardless of the investor&apos;s other obligations.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Need for LLC/Entity Vesting</h4>
                <p className="text-slate-600">Investors who require liability protection through LLC ownership must use DSCR or other non-QM programs. Conventional loans cannot be vested in entities. This is especially important for investors with significant personal assets who want to separate rental property liability from personal assets.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Speed-Dependent Acquisitions</h4>
                <p className="text-slate-600">In competitive markets, the 21-30 day DSCR closing timeline (versus 30-45 days for conventional) can make the difference between winning and losing a deal. Sellers prefer faster closings, and DSCR&apos;s reduced documentation makes the 21-day timeline achievable rather than aspirational.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            When Should an Investor Choose Conventional Over DSCR?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Conventional investment property loans remain the best option for many investors. The lower rates and down payment requirements make conventional financing more cost-effective when the borrower can meet the documentation and DTI requirements.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">W-2 Employee with Low DTI</h4>
                <p className="text-slate-600">A W-2 employee with a stable income, clean tax returns, and DTI below 45% will almost always get a better rate with conventional financing. The rate savings over a DSCR loan can be significant &mdash; reducing annual interest costs by thousands of dollars per property. If you can document income and your DTI allows it, conventional is the lower-cost path.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <Building2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">First 1-4 Investment Properties</h4>
                <p className="text-slate-600">Investors in the early stages of portfolio building (1-4 properties) have plenty of capacity under the 10-property conventional limit. Starting with conventional financing preserves lower rates and smaller down payments during the phase when capital efficiency matters most.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <Shield className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Rate Sensitivity Over Flexibility</h4>
                <p className="text-slate-600">Investors prioritizing the lowest possible monthly payment over documentation flexibility benefit from conventional&apos;s lower rates. The monthly savings compound meaningfully over a 30-year hold. Conventional also offers 15-year fixed options for investors wanting to build equity faster at even lower rates.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Lower Down Payment Available</h4>
                <p className="text-slate-600">Conventional investment property loans allow as low as 15% down for single-family investment properties, compared to DSCR&apos;s typical 20-25%. For capital-constrained investors, the 5-10% down payment difference translates to tens of thousands of dollars preserved for additional investments or reserves.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Does the DSCR Formula Compare to Conventional DTI Calculation?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The fundamental difference between DSCR and conventional qualification comes down to what gets measured. DSCR measures the property; DTI measures the person. Understanding both calculations helps investors evaluate which program fits their profile.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">DSCR Calculation</h3>
              <div className="bg-white rounded-lg p-3 mb-3">
                <p className="text-center font-mono font-bold text-slate-900">
                  DSCR = Rental Income &divide; PITIA
                </p>
              </div>
              <p className="text-sm text-slate-600 mb-3"><strong>Example:</strong></p>
              <div className="text-sm text-slate-600 space-y-1">
                <p>Monthly Rent: $4,500</p>
                <p>Monthly PITIA: $3,600</p>
                <p className="font-bold text-purple-700">DSCR = $4,500 &divide; $3,600 = 1.25</p>
              </div>
              <p className="text-xs text-slate-500 mt-3">Only the subject property matters. Borrower income, employment, and other debts are irrelevant.</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">Conventional DTI Calculation</h3>
              <div className="bg-white rounded-lg p-3 mb-3">
                <p className="text-center font-mono font-bold text-slate-900">
                  DTI = Total Monthly Debts &divide; Gross Income
                </p>
              </div>
              <p className="text-sm text-slate-600 mb-3"><strong>Example:</strong></p>
              <div className="text-sm text-slate-600 space-y-1">
                <p>Total Monthly Debts: $5,800</p>
                <p>Gross Monthly Income: $12,500</p>
                <p className="font-bold text-green-700">DTI = $5,800 &divide; $12,500 = 46.4%</p>
              </div>
              <p className="text-xs text-slate-500 mt-3">All borrower debts and income are evaluated. Adding properties increases total debts and may push DTI above limits.</p>
            </div>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            The DTI limitation creates a natural ceiling for conventional investors. Each new property adds its full PITIA to the debt side of the equation, while only 75% of projected rental income is added to the income side (per Fannie Mae guidelines). This asymmetric treatment means DTI climbs with every property, eventually hitting the 45-50% ceiling. DSCR has no such ceiling because each property is evaluated in isolation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Does a Mixed DSCR and Conventional Portfolio Strategy Look Like?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The most sophisticated investors do not choose exclusively between DSCR and conventional. They use both programs strategically at different stages of portfolio growth. Here is a common portfolio progression:
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Properties 1-4: Conventional</h4>
                  <p className="text-slate-600">Use conventional financing for the first 4 investment properties. Benefit from the lowest available rates, 15-20% down payments, and straightforward underwriting. DTI remains manageable with W-2 income supporting 4 investment property mortgages.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Properties 5-10: Mixed Conventional + DSCR</h4>
                  <p className="text-slate-600">As DTI tightens with properties 5-10, use conventional where DTI allows and switch to DSCR when DTI exceeds conventional limits. This hybrid approach captures conventional rates when possible and uses DSCR flexibility when needed.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Properties 11+: DSCR Exclusively</h4>
                  <p className="text-slate-600">After reaching the 10-property conventional limit, all new acquisitions use DSCR financing. Each property qualifies independently, and there is no ceiling on portfolio growth. LLC vesting becomes the standard for liability protection at this scale.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Portfolio Optimization: Refinance Review</h4>
                  <p className="text-slate-600">Periodically review the entire portfolio with your wholesale broker to identify refinance opportunities. Earlier DSCR loans with higher rates may benefit from rate-and-term refinances as market conditions change or as the borrower&apos;s profile strengthens.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Data & Comparison Hub */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Cost Comparison: DSCR vs Conventional Over 5 and 10 Years
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The true cost difference between DSCR and conventional financing extends beyond the interest rate. Down payment size, reserves, prepayment penalties, closing costs, and opportunity cost of capital all factor into the total cost comparison. The following scenarios illustrate how the numbers play out. Rates vary by lender; these examples use illustrative figures for comparison purposes only.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <h3 className="font-semibold text-slate-900 p-4 bg-slate-50">Illustrative Cost Comparison: $600,000 Single-Family Rental</h3>
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Cost Factor</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">DSCR Loan</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Conventional</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Difference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Down Payment</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$150,000 (25%)</td>
                  <td className="px-4 py-3 text-sm text-green-600">$120,000 (20%)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$30,000 more for DSCR</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Loan Amount</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$450,000</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$480,000</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$30,000 less with DSCR</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Reserve Requirement</td>
                  <td className="px-4 py-3 text-sm text-slate-600">~$28,800 (8 mo.)</td>
                  <td className="px-4 py-3 text-sm text-green-600">~$10,800 (3 mo.)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$18,000 more for DSCR</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Total Capital Required</td>
                  <td className="px-4 py-3 text-sm text-slate-600">~$190,000</td>
                  <td className="px-4 py-3 text-sm text-green-600">~$142,000</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$48,000 more for DSCR</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Documentation Time</td>
                  <td className="px-4 py-3 text-sm text-green-600">Minimal (1-2 hours)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Extensive (5-10 hours)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">DSCR saves significant time</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">LLC Vesting</td>
                  <td className="px-4 py-3 text-sm text-green-600">Available</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Not available</td>
                  <td className="px-4 py-3 text-sm text-slate-600">DSCR provides liability protection</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Important Cost Consideration
            </h3>
            <p className="text-sm text-slate-600">
              The rate differential between DSCR and conventional represents an ongoing annual cost. However, for investors who <em>cannot qualify</em> for conventional financing (self-employed, high DTI, 10+ properties), the comparison is irrelevant &mdash; DSCR is the only viable option. The real cost analysis for these investors is DSCR versus not investing at all, and the return on investment from a well-chosen rental property typically far exceeds the incremental financing cost.
            </p>
          </div>
        </section>

        {/* Scenario Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Real-World Investor Scenarios: Which Loan Wins?
          </h2>

          <div className="space-y-6 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-600" />
                Scenario 1: W-2 Tech Worker, First Investment Property
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-3 text-sm">
                <div><span className="text-slate-500">Income:</span> <span className="font-medium">$185,000 W-2</span></div>
                <div><span className="text-slate-500">Credit Score:</span> <span className="font-medium">750</span></div>
                <div><span className="text-slate-500">Current Properties:</span> <span className="font-medium">1 (primary)</span></div>
              </div>
              <p className="text-sm text-green-700 font-medium mb-2">Winner: Conventional</p>
              <p className="text-sm text-slate-600">Strong W-2 income, clean documentation, high credit score, and well below the 10-property limit. Conventional financing delivers the lowest rate and smallest down payment. DSCR would work but costs more without providing meaningful benefit.</p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600" />
                Scenario 2: Self-Employed Contractor, 3rd Rental Property
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-3 text-sm">
                <div><span className="text-slate-500">Income:</span> <span className="font-medium">$280K gross, $65K on returns</span></div>
                <div><span className="text-slate-500">Credit Score:</span> <span className="font-medium">720</span></div>
                <div><span className="text-slate-500">Current Properties:</span> <span className="font-medium">3 financed</span></div>
              </div>
              <p className="text-sm text-purple-700 font-medium mb-2">Winner: DSCR</p>
              <p className="text-sm text-slate-600">Despite $280K in actual gross income, tax returns show only $65K after business deductions. Conventional DTI calculation uses the $65K, making approval extremely difficult with 3 existing mortgages. DSCR ignores the tax returns entirely and qualifies based on the new property&apos;s rental income.</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Scenario 3: Portfolio Investor, 12th Property Acquisition
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-3 text-sm">
                <div><span className="text-slate-500">Income:</span> <span className="font-medium">$220K W-2 + rental</span></div>
                <div><span className="text-slate-500">Credit Score:</span> <span className="font-medium">735</span></div>
                <div><span className="text-slate-500">Current Properties:</span> <span className="font-medium">11 financed</span></div>
              </div>
              <p className="text-sm text-blue-700 font-medium mb-2">Winner: DSCR (only option)</p>
              <p className="text-sm text-slate-600">With 11 financed properties, this investor has exceeded the 10-property conventional limit. DSCR is the only mainstream option for property #12. The investor can qualify based on the new property&apos;s rental income without impacting their existing conventional loans.</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-600" />
                Scenario 4: Foreign National, First U.S. Investment
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-3 text-sm">
                <div><span className="text-slate-500">Income:</span> <span className="font-medium">Foreign (no U.S. docs)</span></div>
                <div><span className="text-slate-500">Credit Score:</span> <span className="font-medium">No U.S. credit</span></div>
                <div><span className="text-slate-500">Down Payment:</span> <span className="font-medium">40% available</span></div>
              </div>
              <p className="text-sm text-amber-700 font-medium mb-2">Winner: DSCR (only option)</p>
              <p className="text-sm text-slate-600">Foreign nationals without U.S. tax returns, employment, or credit history cannot qualify for conventional financing. DSCR loans with foreign national programs accept international credit references and require no U.S. income documentation. Higher down payments (30-40%) offset the lack of U.S. credit history.</p>
            </div>
          </div>
        </section>

        {/* People Also Ask */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask: DSCR vs Conventional Investment Property Loans
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Can I use both DSCR and conventional loans in my portfolio?</h3>
              <p className="text-slate-600"><strong>Yes, combining DSCR and conventional loans is the most common strategy for portfolio investors scaling beyond 4-5 properties.</strong> Use conventional where DTI permits for the lowest rates, and switch to DSCR when DTI becomes restrictive or after reaching 10 financed properties.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Does a DSCR loan affect my ability to get a conventional loan later?</h3>
              <p className="text-slate-600"><strong>DSCR loans report to credit bureaus and count toward your financed property total for conventional underwriting purposes.</strong> However, the DSCR loan&apos;s payment can be offset by the property&apos;s rental income when calculating DTI for future conventional applications, so the net impact on DTI is often minimal.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Which loan has a lower down payment for investment properties?</h3>
              <p className="text-slate-600"><strong>Conventional investment property loans offer lower minimum down payments (15-20%) compared to DSCR loans (20-25% typical).</strong> However, some DSCR lenders offer 15% down programs for borrowers with strong credit (740+) and DSCR ratios above 1.25, narrowing the gap for qualified investors.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Are DSCR loans considered riskier than conventional?</h3>
              <p className="text-slate-600"><strong>DSCR loans carry different risk characteristics, not necessarily higher risk, because the property&apos;s rental income directly supports the payment.</strong> The reduced documentation means less borrower verification, but the property&apos;s cash flow provides a tangible repayment source that conventional DTI-based qualification does not inherently guarantee.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Can I refinance from conventional to DSCR?</h3>
              <p className="text-slate-600"><strong>Yes, refinancing from conventional to DSCR is common for investors who want to free up DTI capacity for additional conventional loans on new properties.</strong> Moving existing properties to DSCR removes their payment from your personal DTI calculation, creating room for additional conventional financing.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Which program is better for multifamily 2-4 unit properties?</h3>
              <p className="text-slate-600"><strong>Both programs finance 2-4 unit properties, but DSCR is often advantageous because multi-unit properties generate higher combined rental income, producing stronger DSCR ratios.</strong> Conventional 2-4 unit investment properties require larger down payments (25%) and face stricter DTI scrutiny. DSCR evaluates all unit rents collectively against the single PITIA payment.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Why does a wholesale broker matter more for DSCR than conventional?</h3>
              <p className="text-slate-600"><strong>Conventional loan rates and guidelines are standardized through Fannie Mae and Freddie Mac, creating relatively narrow rate variability between lenders.</strong> DSCR programs are set by each individual lender, creating massive rate and requirement variability. The spread between the best and worst DSCR lender for the same scenario can exceed 1.5 percentage points, making wholesale comparison essential.</p>
            </div>
          </div>
        </section>

        {/* Extended FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions: DSCR vs Conventional Investment Property Loans
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
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Expert Summary: The Right Loan Depends on Your Investor Profile
          </h2>
          <p className="text-lg text-blue-100 mb-4 max-w-3xl mx-auto">
            There is no universal answer to the DSCR versus conventional question. W-2 borrowers with low DTI ratios and fewer than 10 properties benefit from conventional&apos;s lower rates. Self-employed investors, portfolio builders past the 10-property ceiling, and anyone requiring LLC vesting need DSCR&apos;s documentation flexibility. Many investors use both programs strategically at different portfolio stages.
          </p>
          <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
            As a wholesale mortgage broker, Mo Abdel at Lumin Lending compares both conventional and DSCR programs across 100+ lenders to identify the lowest-cost option for each investor&apos;s specific profile. Whether you qualify for conventional, need DSCR, or benefit from a mixed strategy, the wholesale channel delivers the broadest comparison and the best available terms in the market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4">
                Get Your Custom Comparison
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
            <Link href="/blog/dscr-investment-property-loans-2026" className="text-green-600 hover:text-green-700 hover:underline">
              &rarr; DSCR Investment Property Loans 2026
            </Link>
            <Link href="/blog/dscr-loans-explained-investors-2026" className="text-green-600 hover:text-green-700 hover:underline">
              &rarr; DSCR Loans Explained for Investors
            </Link>
            <Link href="/blog/dscr-loan-requirements-2026" className="text-green-600 hover:text-green-700 hover:underline">
              &rarr; DSCR Loan Requirements: Rates, Ratios & Down Payment
            </Link>
            <Link href="/blog/wholesale-mortgage-broker-california-2026" className="text-green-600 hover:text-green-700 hover:underline">
              &rarr; Wholesale Mortgage Broker California 2026
            </Link>
            <Link href="/blog/wholesale-mortgage-broker-washington-2026" className="text-green-600 hover:text-green-700 hover:underline">
              &rarr; Wholesale Mortgage Broker Washington 2026
            </Link>
            <Link href="/blog/conventional-loans-complete-guide-2026" className="text-green-600 hover:text-green-700 hover:underline">
              &rarr; Conventional Loans Complete Guide 2026
            </Link>
          </div>
        </section>

        {/* Compliance Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p>
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial advice. DSCR loan programs are non-QM products with different guidelines than conventional mortgages. Conventional investment property loans follow Fannie Mae/Freddie Mac guidelines which are subject to change. DSCR ratio requirements, interest rates, down payment minimums, and credit score thresholds vary by lender and are subject to change without notice. Rental income projections are estimates and actual rental income may vary based on market conditions, vacancy rates, and property management. Rate comparisons are illustrative only; contact a licensed loan officer for current rates. Mo Abdel, NMLS #1426884, is licensed in California and Washington.
          </p>
        </section>
      </article>
    </div>
  );
}