import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Building2, DollarSign, TrendingUp, Shield, AlertCircle, Layers, Briefcase, Target, Scale, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LeadMagnetCTA } from '@/components/lead-magnets/LeadMagnetCTA';

export const metadata: Metadata = {
  title: 'DSCR Loans for Portfolio Investors: Scaling to 10+ Properties with Wholesale Rates [2026] | Mo Abdel',
  description: 'DSCR loans for portfolio investors scaling to 10+ properties in 2026. Blanket loans, entity structuring, 1031 exchange strategies, and wholesale rates from 100+ lenders. NMLS #1426884.',
  keywords: ['dscr loan portfolio investor', 'DSCR loans multiple properties', 'portfolio investor DSCR financing', 'blanket DSCR loan', 'scaling rental portfolio 2026', 'LLC entity structuring DSCR'],
  openGraph: {
    title: 'DSCR Loans for Portfolio Investors: Scaling to 10+ Properties with Wholesale Rates [2026]',
    description: 'How portfolio investors use DSCR loans to scale past conventional limits. Blanket loans, entity structuring, 1031 exchanges, and wholesale rate access from 100+ lenders.',
    url: 'https://www.mothebroker.com/blog/dscr-loans-portfolio-investors-scaling-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-16T00:00:00Z',
    modifiedTime: '2026-02-16T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/dscr-loans-portfolio-investors-scaling-2026',
  },
};

const faqData = [
  {
    question: "How many properties can I finance with DSCR loans?",
    answer: "DSCR loans have no regulatory limit on the number of financed properties. Unlike conventional mortgages capped at 10 financed properties, DSCR programs allow unlimited acquisitions because each property qualifies independently based on its own rental income. Some individual lenders cap borrower exposure at 10-20 properties, but working with multiple DSCR lenders through a wholesale broker eliminates this constraint entirely."
  },
  {
    question: "What is a blanket DSCR loan and how does it work?",
    answer: "A blanket DSCR loan is a single mortgage covering multiple investment properties under one loan. Instead of separate loans per property, the blanket loan uses the combined rental income from all properties against the combined debt service. This simplifies portfolio management with one payment, one lender, and one set of terms. Blanket DSCR loans are available from select non-QM lenders and typically require 5+ properties with combined DSCR ratios meeting lender minimums."
  },
  {
    question: "Should I use a separate LLC for each rental property?",
    answer: "Using a separate LLC for each property provides maximum liability isolation, meaning a lawsuit on one property cannot reach assets in another LLC. However, it increases administrative costs (annual fees, tax filings, bank accounts per entity). Series LLCs offer a middle ground in states that recognize them, allowing sub-series under one parent LLC. Your attorney and CPA should guide entity structuring based on your portfolio size and risk tolerance."
  },
  {
    question: "Can I use a 1031 exchange with DSCR financing?",
    answer: "Yes. DSCR loans work seamlessly with 1031 exchanges because the qualification is based on the replacement property's rental income, not the investor's personal income or tax situation. The exchange proceeds serve as the down payment, and the DSCR loan covers the remaining acquisition cost. Timing is critical: the 45-day identification window and 180-day closing deadline require a lender who can close within those timeframes."
  },
  {
    question: "What is the difference between individual DSCR loans and a portfolio line of credit?",
    answer: "Individual DSCR loans are separate mortgages on each property with fixed rates and 30-year terms. A portfolio line of credit is a revolving facility secured by multiple properties, offering draw-and-repay flexibility but typically with variable rates and shorter terms (5-10 years). Individual DSCR loans provide rate certainty and long-term stability, while portfolio lines offer acquisition speed and flexibility for active investors."
  },
  {
    question: "How do DSCR lenders evaluate portfolio investors differently?",
    answer: "DSCR lenders evaluating portfolio investors look at track record (number of properties owned, years of experience), portfolio-level cash flow (aggregate DSCR across all properties), liquidity and reserves relative to total portfolio debt service, and credit history. Experienced portfolio investors with strong track records often receive better pricing and higher LTV options compared to first-time DSCR borrowers."
  },
  {
    question: "Can I refinance my entire portfolio from conventional to DSCR?",
    answer: "Yes. Portfolio investors commonly refinance conventional loans into DSCR financing to free up personal DTI capacity for primary residence upgrades or other investments. Each property refinances independently based on its own DSCR ratio. Cash-out refinancing is also available (typically 70-75% LTV) to extract equity for further acquisitions. A wholesale broker can sequence refinances across multiple lenders for optimal terms."
  },
  {
    question: "What reserves do DSCR lenders require for portfolio investors with 10+ properties?",
    answer: "Reserve requirements for portfolio investors vary by lender. Most require 6-12 months of PITIA for the subject property. Some lenders also require 2-6 months of reserves for each additional financed property. An investor with 15 properties might need reserves for all 15, which can total $200,000+ in liquid assets. Wholesale brokers identify lenders with the most favorable reserve policies for high-property-count borrowers."
  },
  {
    question: "Is there an interest rate penalty for owning many DSCR-financed properties?",
    answer: "Some DSCR lenders apply rate adjustments or limit LTV for borrowers with high property counts (typically 10+, 15+, or 20+ financed properties). These adjustments vary by lender. Other lenders have no property count adjustments at all. A wholesale broker compares lender policies to find programs without property count penalties, which can save portfolio investors significant amounts over the portfolio's aggregate debt."
  },
  {
    question: "Can I use DSCR loans for the BRRRR strategy at scale?",
    answer: "Yes. DSCR loans are the dominant financing tool for scaling the BRRRR strategy beyond conventional limits. The typical sequence is: buy with hard money or cash, rehab, rent the property to establish income, refinance into a DSCR loan (using the new rental income for qualification), and repeat. Because DSCR loans have no property count limit and no personal income verification, investors can execute this cycle repeatedly without DTI constraints."
  },
  {
    question: "What credit score do I need to scale a DSCR portfolio?",
    answer: "To scale effectively with DSCR financing, maintaining a credit score of 720+ provides the best combination of rate pricing and lender availability. Scores of 740+ unlock the most favorable terms across the widest selection of lenders. While individual DSCR loans are available at 660-680 minimums, portfolio-level scaling requires consistent access to competitive rates, which requires maintaining strong credit across multiple simultaneous applications."
  },
  {
    question: "How do I manage cash flow across a large DSCR portfolio?",
    answer: "Effective portfolio cash flow management requires maintaining reserves at the portfolio level (not just per-property), staggering loan maturities to avoid refinance clustering, diversifying across property types and markets to reduce concentration risk, and using property management systems that provide real-time income and expense tracking. Wholesale brokers can help structure loan terms (fixed vs. ARM, prepayment penalties) to align with portfolio-level cash flow goals."
  }
];

export default function DSCRLoansPortfolioInvestorsScaling2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "DSCR Loans for Portfolio Investors: Scaling to 10+ Properties with Wholesale Rates [2026]",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["DSCR Loans", "Portfolio Investing", "Investment Property Financing", "Wholesale Mortgage Lending", "Entity Structuring", "1031 Exchanges"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "identifier": "NMLS #2716106",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-02-16",
            "dateModified": "2026-02-16",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/dscr-loans-portfolio-investors-scaling-2026",
              "significantLink": [
                "https://www.consumerfinance.gov/",
                "https://www.irs.gov/publications/p544",
                "https://www.fanniemae.com/"
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
            <div className="inline-flex items-center gap-2 bg-slate-500/20 rounded-full px-4 py-1.5 mb-6 border border-purple-500/30">
              <Layers className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">DSCR Portfolio Scaling</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              DSCR Loans for Portfolio Investors: Scaling to 10+ Properties with Wholesale Rates [2026]
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Portfolio investors who hit the conventional 10-property ceiling face a binary choice: stop acquiring or switch to DSCR financing. According to Mo Abdel, NMLS #1426884, investors who transition to DSCR loans remove every property-count barrier, eliminate personal income documentation, and unlock entity-based vesting for liability protection. In our California and Washington closings, portfolio investors who switch from conventional to DSCR consistently acquire 3-5 additional properties per year that conventional underwriting would have blocked.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Portfolio DSCR Quote
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

        {/* Why Portfolio Investors Hit a Wall */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Do Portfolio Investors Hit a Financing Wall After 10 Properties?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Fannie Mae and Freddie Mac cap conventional investment property financing at 10 financed properties per borrower. This includes your primary residence, second homes, and every rental property with an outstanding mortgage. Once you reach that ceiling, conventional lenders decline additional applications regardless of your income, credit score, or equity position. The cap is an agency guideline, not a reflection of borrower quality.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            Beyond the property count limit, conventional underwriting creates a second barrier: personal debt-to-income (DTI) ratio compression. Each additional financed property adds its full PITIA to the borrower&apos;s debt column. Even with strong rental income offsets (typically 75% of rent credited), portfolio investors frequently exceed the 45-50% DTI threshold before reaching property number 10. DSCR loans eliminate both barriers simultaneously &mdash; no property count limit and no personal DTI calculation.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              The Conventional Financing Ceiling
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-slate-600">Conventional Property Limit</p>
                <p className="text-2xl font-bold text-red-600">10 Max</p>
                <p className="text-xs text-slate-500 mt-1">Including primary residence</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-slate-600">DSCR Property Limit</p>
                <p className="text-2xl font-bold text-blue-600">Unlimited</p>
                <p className="text-xs text-slate-500 mt-1">Each property qualifies independently</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-slate-600">DTI Requirement</p>
                <p className="text-2xl font-bold text-blue-600">None</p>
                <p className="text-xs text-slate-500 mt-1">DSCR uses property income only</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <LeadMagnetCTA
            title="Free: Portfolio Scaling Strategy Session"
            description="Share your current portfolio details and acquisition targets. We&apos;ll map the optimal DSCR financing structure across 100+ wholesale lenders."
            href="/contact"
            badge="Free portfolio analysis"
            ctaText="Request portfolio review"
          />
        </section>

        {/* Portfolio Scaling Strategy Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Portfolio Scaling Strategy Comparison: Individual DSCR vs Blanket vs Portfolio Line of Credit
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Portfolio investors have multiple DSCR financing structures available, each with distinct advantages depending on portfolio size, acquisition pace, and cash flow objectives. The comparison below breaks down four primary strategies used by investors scaling beyond 10 properties.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Individual DSCR</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Blanket DSCR Loan</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Portfolio Line of Credit</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">DSCR + Conventional Mix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Properties Covered</td>
                  <td className="px-4 py-3 text-sm text-slate-600">One per loan</td>
                  <td className="px-4 py-3 text-sm text-slate-600">5-20+ under one loan</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Multiple (revolving)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Up to 10 conv. + unlimited DSCR</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Rate Structure</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Fixed 30-year available</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Fixed or ARM (5-10 yr terms)</td>
                  <td className="px-4 py-3 text-sm text-blue-600">Variable rate</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Mixed (lowest blended cost)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Down Payment</td>
                  <td className="px-4 py-3 text-sm text-slate-600">20-25% per property</td>
                  <td className="px-4 py-3 text-sm text-slate-600">25-30% aggregate LTV</td>
                  <td className="px-4 py-3 text-sm text-slate-600">30-40% equity required</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">15-25% (varies by type)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Qualification</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Property income only</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Portfolio-level DSCR</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Net worth + portfolio cash flow</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Personal income + property income</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">LLC Vesting</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Yes</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Yes</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Yes</td>
                  <td className="px-4 py-3 text-sm text-slate-600">DSCR only (not conventional)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Sell Individual Property</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Simple payoff</td>
                  <td className="px-4 py-3 text-sm text-blue-600">Requires release clause</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Reduces available credit</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Simple payoff</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Best For</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Most portfolio investors</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Investors with 10-50+ similar properties</td>
                  <td className="px-4 py-3 text-sm text-slate-600">High-velocity acquirers</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Investors transitioning past 10 properties</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 italic">
            Rates, terms, and qualification requirements vary by lender. Rental income projections are estimates and actual income may vary. This comparison reflects typical market ranges in February 2026.
          </p>
        </section>

        {/* Entity Structuring */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Entity Structuring Options for DSCR Portfolio Investors
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Liability protection is a primary concern for portfolio investors holding significant real estate assets. DSCR loans uniquely support entity-based vesting, which conventional loans do not permit. The entity structure you choose affects liability isolation, administrative costs, tax treatment, and financing flexibility. Below are the four most common structures used by DSCR portfolio investors in California and Washington.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Entity Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Liability Isolation</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Admin Cost</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">DSCR Lender Acceptance</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Single LLC per Property</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Maximum</td>
                  <td className="px-4 py-3 text-sm text-blue-600">High (fees per entity)</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Widely accepted</td>
                  <td className="px-4 py-3 text-sm text-slate-600">High-value properties ($500K+)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Series LLC</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Strong (per series)</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Low (one filing)</td>
                  <td className="px-4 py-3 text-sm text-blue-600">Limited (not all states)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">10+ properties in series LLC states</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Holding Company LLC</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Moderate (shared entity)</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Low (one entity)</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Widely accepted</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Smaller portfolios (3-8 properties)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Land Trust + LLC</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Strong (privacy + protection)</td>
                  <td className="px-4 py-3 text-sm text-blue-600">Moderate</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Select lenders only</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Privacy-focused investors</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Entity Structuring Best Practices for Portfolio Investors
            </h3>
            <ul className="text-slate-600 space-y-2">
              <li>&bull; <strong>Always consult a real estate attorney and CPA</strong> before establishing entity structures &mdash; tax and legal implications vary by state</li>
              <li>&bull; <strong>California does not recognize Series LLCs</strong> &mdash; individual LLCs or holding company structures are the primary options for CA investors</li>
              <li>&bull; <strong>Washington state recognizes Series LLCs</strong> under the Washington Uniform Limited Liability Company Act</li>
              <li>&bull; <strong>Personal guarantee is required</strong> on all DSCR loans regardless of entity structure &mdash; the LLC provides liability protection for the property, not the loan</li>
              <li>&bull; <strong>EIN, operating agreement, and articles of organization</strong> are required documents for every entity-vested DSCR loan</li>
            </ul>
          </div>
        </section>

        {/* Scaling Process Step by Step */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do Portfolio Investors Scale from 5 to 50+ Properties Using DSCR Loans?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Scaling a rental portfolio requires a systematic financing strategy, not just property-by-property deal analysis. In our California and Washington closings, portfolio investors who plan their DSCR financing approach across their entire acquisition timeline achieve faster scaling with lower aggregate borrowing costs. The following framework outlines the typical scaling path.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">8-Step Portfolio Scaling Framework</h3>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Audit Your Existing Portfolio</h4>
                  <p className="text-slate-600">Document each property&apos;s current loan type, rate, balance, equity position, monthly rent, and PITIA. Identify which properties are on conventional loans and which have refinance potential to free up DTI or extract equity.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Establish Your Entity Structure</h4>
                  <p className="text-slate-600">Work with a real estate attorney to set up LLCs or holding companies before acquiring additional properties. DSCR lenders require entity documentation at application, so having structures in place prevents acquisition delays.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Build Reserve Accounts</h4>
                  <p className="text-slate-600">DSCR lenders require 6-12 months of PITIA reserves per property. For a 15-property portfolio at $3,500 average PITIA, that means $52,500-$105,000 in liquid reserves before counting additional property reserves. Plan reserve accumulation alongside acquisition timelines.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Engage a Wholesale Mortgage Broker</h4>
                  <p className="text-slate-600">A wholesale broker compares DSCR programs from 100+ lenders simultaneously. For portfolio investors, this means identifying lenders with no property-count rate adjustments, favorable reserve policies, and entity-friendly underwriting.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold shrink-0">5</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Target Properties with Strong DSCR Ratios</h4>
                  <p className="text-slate-600">Focus on properties where projected rent produces DSCR ratios of 1.15+ to qualify for the best rates and terms. Properties with DSCR above 1.25 receive premium pricing at most lenders, reducing your long-term borrowing cost across the portfolio.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold shrink-0">6</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Diversify Across Lenders</h4>
                  <p className="text-slate-600">Avoid concentrating all DSCR loans with one lender. Individual lenders may cap exposure at 10-20 properties per borrower. Spreading across 3-5 lenders eliminates concentration limits and provides rate competition on each new deal.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold shrink-0">7</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Use Equity Extraction Strategically</h4>
                  <p className="text-slate-600">Cash-out refinances on appreciated properties (70-75% LTV) generate down payment capital for additional acquisitions. This recycling of equity is how active portfolio investors scale without requiring large infusions of outside capital.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold shrink-0">8</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Monitor and Optimize Portfolio Financing</h4>
                  <p className="text-slate-600">Review portfolio financing annually. Refinance high-rate loans when market conditions improve. Consolidate properties under blanket loans when portfolio size justifies it. Adjust prepayment penalty structures as investment timelines evolve.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* 1031 Exchange + DSCR */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do 1031 Exchanges Work with DSCR Financing for Portfolio Growth?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            1031 exchanges allow investors to defer capital gains taxes by reinvesting sale proceeds into like-kind replacement properties. When combined with DSCR financing, 1031 exchanges become a powerful portfolio scaling tool: sell a lower-performing property, defer the tax burden, and acquire a higher-performing replacement property using DSCR qualification based on the new property&apos;s rental income.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            DSCR loans are particularly well-suited for 1031 exchanges because the qualification is based on the replacement property&apos;s income potential, not the investor&apos;s personal tax situation (which becomes complex during exchange years). The 45-day identification period and 180-day closing deadline require a financing partner who can execute within these IRS-mandated windows. A wholesale broker pre-approves DSCR financing before the exchange begins, ensuring the replacement property closes within the required timeframe.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              1031 Exchange + DSCR Timeline
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-slate-900 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">Day 0</span>
                <span className="text-slate-600">Close sale of relinquished property; proceeds go to Qualified Intermediary</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-slate-900 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">Day 1</span>
                <span className="text-slate-600">Submit DSCR loan application for pre-identified replacement property</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-slate-500 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">Day 45</span>
                <span className="text-slate-600"><strong>IRS deadline:</strong> Identify up to 3 replacement properties in writing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-slate-900 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">Day 60</span>
                <span className="text-slate-600">Typical DSCR loan closing (21-30 day underwriting after appraisal)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-red-500 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">Day 180</span>
                <span className="text-slate-600"><strong>IRS deadline:</strong> Close on replacement property (absolute deadline)</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              Important 1031 Exchange Note
            </h3>
            <p className="text-sm text-slate-600">
              1031 exchange rules are governed by IRS Section 1031 and carry strict requirements. Consult a qualified tax advisor and 1031 exchange accommodator before initiating an exchange. DSCR loan terms and 1031 exchange eligibility are separate determinations. This information is educational and does not constitute tax advice.
            </p>
          </div>
        </section>

        {/* Refinance Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Refinance Strategies Do Portfolio Investors Use with DSCR Loans?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Refinancing is the engine of portfolio growth. Active investors use three primary DSCR refinance strategies to extract equity, reduce borrowing costs, and accelerate acquisitions without contributing additional outside capital.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Cash-Out Refinance for Acquisition Capital</h4>
                <p className="text-slate-600">Refinance appreciated properties at 70-75% LTV to extract equity. The extracted cash becomes the down payment for the next DSCR acquisition. A property purchased at $400,000 that appreciates to $550,000 can release $12,500-$62,500 in equity through a cash-out refinance (depending on existing loan balance and target LTV), fueling the next purchase.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Rate-and-Term Refinance for Cost Reduction</h4>
                <p className="text-slate-600">When DSCR rates improve or a borrower&apos;s credit score increases, rate-and-term refinancing reduces monthly payments across the portfolio. A rate reduction across 15 properties compounds into meaningful annual savings, improving portfolio-level cash flow without any equity extraction.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Conventional-to-DSCR Migration</h4>
                <p className="text-slate-600">Refinancing existing conventional loans into DSCR frees up personal DTI capacity. This allows the investor to use conventional financing for a primary residence upgrade or other personal lending needs while maintaining portfolio financing through DSCR channels. Each conventional loan converted to DSCR removes that payment from the borrower&apos;s DTI calculation.</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4">6 Steps to Execute a Portfolio-Level DSCR Refinance</h3>
          <ol className="space-y-3 text-slate-600 mb-6">
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">1</span>
              <span><strong>Rank properties by equity position</strong> &mdash; prioritize properties with the most appreciation for cash-out potential</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">2</span>
              <span><strong>Calculate individual DSCR ratios</strong> &mdash; verify each property meets minimum DSCR requirements for refinance qualification</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">3</span>
              <span><strong>Check prepayment penalties</strong> &mdash; ensure existing loans are past their penalty periods or factor penalty costs into the refinance analysis</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">4</span>
              <span><strong>Submit all scenarios to a wholesale broker</strong> &mdash; compare refinance terms from 100+ DSCR lenders for each property simultaneously</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">5</span>
              <span><strong>Sequence refinances strategically</strong> &mdash; stagger closings to manage cash flow impact and appraisal scheduling</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">6</span>
              <span><strong>Deploy extracted equity into acquisitions</strong> &mdash; use cash-out proceeds as down payments for DSCR-qualified replacement properties</span>
            </li>
          </ol>
        </section>

        {/* Portfolio-Level Cash Flow Management */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Should Portfolio Investors Manage Cash Flow Across Multiple DSCR Loans?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Managing a portfolio of DSCR-financed properties requires systems-level thinking. Individual property cash flow is important, but portfolio-level metrics determine long-term success. Investors who track aggregate DSCR, reserve ratios, and vacancy exposure across their entire portfolio make better acquisition and financing decisions than those who evaluate properties in isolation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                Portfolio Health Metrics
              </h3>
              <ul className="text-slate-600 space-y-2">
                <li><strong>Aggregate DSCR:</strong> Total portfolio rent &divide; total portfolio PITIA (target 1.20+)</li>
                <li><strong>Reserve Ratio:</strong> Liquid reserves &divide; 12 months of total PITIA (target 1.0+)</li>
                <li><strong>Vacancy Exposure:</strong> Maximum rent loss if worst-performing 20% of properties go vacant</li>
                <li><strong>Weighted Average Rate:</strong> Blended interest rate across all portfolio loans</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                Portfolio Risk Factors
              </h3>
              <ul className="text-slate-600 space-y-2">
                <li><strong>Geographic concentration:</strong> Properties clustered in one market amplify local downturn risk</li>
                <li><strong>Refinance clustering:</strong> Multiple ARM resets or balloon payments in the same year</li>
                <li><strong>Reserve depletion:</strong> Maintenance events or vacancies draining liquidity below lender requirements</li>
                <li><strong>Lender concentration:</strong> Too many loans with one lender creates renegotiation vulnerability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Wholesale Rate Advantage for Portfolio Investors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Is Wholesale Broker Access Critical for DSCR Portfolio Scaling?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The rate spread between DSCR lenders for the same borrower profile can exceed 1.5 percentage points. On a single $500,000 loan, that gap represents roughly $7,500 per year in interest cost. For a portfolio investor with 15 properties averaging $400,000 in loan balances, the aggregate annual savings from accessing the most competitive wholesale rates versus accepting the first lender&apos;s offer can reach five figures.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            Beyond rate competition, wholesale brokers provide portfolio investors with policy expertise across lenders. Some lenders cap exposure at 10 properties while others allow 50+. Some require reserves on every financed property while others only require reserves for the subject property. Some apply rate adjustments for property counts above 10, while others have no count-based pricing penalties. Only a broker who actively works with 100+ wholesale lenders knows which policies apply at which lenders for your specific scenario.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              Portfolio Investor Wholesale Advantages
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-slate-700 mb-2">Rate &amp; Pricing Benefits:</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>&bull; Compare DSCR rates from 100+ lenders per deal</li>
                  <li>&bull; Identify lenders with no property-count rate adjustments</li>
                  <li>&bull; Access volume-based relationship pricing</li>
                  <li>&bull; Negotiate prepayment penalty structures per property</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700 mb-2">Operational Benefits:</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>&bull; Single point of contact for multi-lender portfolio</li>
                  <li>&bull; Pre-qualification across lender policies before property selection</li>
                  <li>&bull; Staggered closing coordination for multiple acquisitions</li>
                  <li>&bull; Annual portfolio review and refinance optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* People Also Ask */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask About DSCR Portfolio Investing
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">What happens when I exceed 10 financed properties?</h3>
              <p className="text-slate-600"><strong>Conventional lenders decline additional applications after 10 financed properties, making DSCR loans the primary financing path for continued growth.</strong> DSCR loans have no property count limit. Each new property qualifies independently based on its rental income, allowing investors to scale to 20, 30, 50+ properties without conventional barriers.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Can I mix DSCR and conventional loans in my portfolio?</h3>
              <p className="text-slate-600"><strong>Yes, the mixed strategy uses conventional loans for lower rates on the first properties and DSCR loans for scaling beyond conventional limits.</strong> Many investors maintain conventional loans on properties 1-8 (lower rates, lower down payment) and transition to DSCR for properties 9+ where conventional qualification becomes restrictive due to DTI compression or property count limits.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Is a blanket DSCR loan better than individual property loans?</h3>
              <p className="text-slate-600"><strong>Blanket loans simplify portfolio management with one payment but sacrifice flexibility when selling individual properties from the portfolio.</strong> Individual DSCR loans allow independent sale or refinance of any property. Blanket loans require release clauses and may trigger cross-collateralization issues. Most portfolio investors prefer individual DSCR loans unless managing 20+ similar-type properties.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">How do DSCR lenders view investors with 20+ properties?</h3>
              <p className="text-slate-600"><strong>Experienced portfolio investors with 20+ properties receive favorable treatment from DSCR lenders who value track record and management capability.</strong> Lenders evaluate portfolio-level performance, vacancy history, and reserve adequacy. Some lenders offer relationship pricing for high-volume investors. The key is maintaining strong credit and adequate reserves as the portfolio grows.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">What reserves do I need for a 20-property DSCR portfolio?</h3>
              <p className="text-slate-600"><strong>Reserve requirements vary by lender: some require reserves only for the subject property while others require reserves for every financed property in the portfolio.</strong> A 20-property portfolio with average $3,500 monthly PITIA could require $42,000 (6 months on subject only) to $420,000+ (6 months on all properties) depending on the lender. Wholesale broker access identifies lenders with the most favorable reserve policies.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Can I do a 1031 exchange into a DSCR-financed property?</h3>
              <p className="text-slate-600"><strong>DSCR loans work well with 1031 exchanges because qualification is based on the replacement property&apos;s income, not the investor&apos;s complex exchange-year taxes.</strong> The exchange proceeds serve as the down payment, and the DSCR loan covers the balance. Timing coordination between the exchange deadlines and DSCR closing timeline is essential. Pre-approval with a wholesale broker before initiating the exchange prevents deadline pressure.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">How fast can I scale with DSCR financing?</h3>
              <p className="text-slate-600"><strong>Active portfolio investors using DSCR financing typically acquire 3-8 properties per year, limited by available capital and reserve requirements rather than financing constraints.</strong> DSCR loans close in 21-30 days, allowing rapid sequential acquisitions. The binding constraints are down payment capital, reserve accumulation, and deal flow quality, not loan qualification or property count limits.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Should I use interest-only DSCR loans for portfolio scaling?</h3>
              <p className="text-slate-600"><strong>Interest-only DSCR loans maximize cash flow during the initial years, freeing capital for additional acquisitions at the cost of delayed principal paydown.</strong> The I/O period typically lasts 5-10 years before converting to fully amortizing. This structure is popular with investors who prioritize acquisition velocity over equity buildup and plan to refinance or sell before the I/O period expires.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions: DSCR Loans for Portfolio Investors
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
        <section className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Expert Summary: Scale Your Portfolio with Wholesale DSCR Access
          </h2>
          <p className="text-lg text-slate-200 mb-4 max-w-3xl mx-auto">
            Portfolio investors who rely on conventional financing hit predictable walls at the 10-property limit and DTI ceiling. DSCR loans remove both barriers while adding entity vesting, unlimited property counts, and no personal income documentation. The difference between retail and wholesale DSCR access is the difference between one lender&apos;s terms and the best terms from 100+ lenders.
          </p>
          <p className="text-lg text-slate-200 mb-6 max-w-3xl mx-auto">
            Mo Abdel at Lumin Lending structures DSCR portfolio financing across California and Washington, matching each property in your portfolio with the lender offering the most competitive rate, reserves policy, and entity-friendly underwriting. Whether you own 5 properties or 50, wholesale DSCR access makes every acquisition more efficient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-slate-50 px-8 py-4">
                Get Portfolio DSCR Quote
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
          <h3 className="font-semibold text-slate-900 mb-4">Related DSCR &amp; Portfolio Investment Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/dscr-loans-explained-investors-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR Loans Explained for Investors
            </Link>
            <Link href="/blog/dscr-loan-requirements-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR Loan Requirements 2026
            </Link>
            <Link href="/blog/dscr-vs-conventional-investment-property-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR vs Conventional Investment Property Loans
            </Link>
            <Link href="/blog/dscr-loans-short-term-rentals-airbnb-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR Loans for Short-Term Rentals &amp; Airbnb
            </Link>
            <Link href="/blog/wholesale-mortgage-broker-california-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Wholesale Mortgage Broker California 2026
            </Link>
            <Link href="/blog/dscr-investment-property-loans-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR Investment Property Loans 2026
            </Link>
          </div>
        </section>

        {/* Compliance Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p>
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial, tax, or legal advice. DSCR loan programs are non-QM products with different guidelines than conventional mortgages. DSCR ratio requirements, interest rates, down payment minimums, credit score thresholds, and reserve requirements vary by lender and are subject to change without notice. Rental income projections are estimates and actual rental income may vary based on market conditions, vacancy rates, and property management. Entity structuring and 1031 exchange strategies should be reviewed with qualified legal and tax professionals. Contact a licensed loan officer for personalized guidance. Mo Abdel, NMLS #1426884, is licensed in California and Washington.
          </p>
        </section>
      </article>
    </div>
  );
}
