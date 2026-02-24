import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Building2, DollarSign, TrendingUp, PieChart, AlertCircle, BookOpen, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LeadMagnetCTA } from '@/components/lead-magnets/LeadMagnetCTA';

export const metadata: Metadata = {
  title: 'DSCR Loans Explained: How Real Estate Investors Qualify Without W-2s [2026] | Mo Abdel',
  description: 'DSCR loans explained for real estate investors: Qualify based on rental income, not W-2s or tax returns. Learn the DSCR formula, property types, thresholds, and wholesale broker advantage. NMLS #1426884.',
  keywords: ['dscr loan explained', 'DSCR loans for investors', 'debt service coverage ratio loan', 'investment property no income verification', 'DSCR mortgage 2026', 'rental property financing without W-2'],
  openGraph: {
    title: 'DSCR Loans Explained: How Real Estate Investors Qualify Without W-2s [2026]',
    description: 'Complete guide to DSCR loans: Qualify for investment property financing based on rental income alone. No W-2s, no tax returns, no employment verification.',
    url: 'https://www.mothebroker.com/blog/dscr-loans-explained-investors-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-15T00:00:00Z',
    modifiedTime: '2026-02-23T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/dscr-loans-explained-investors-2026',
  },
};

const faqData = [
  {
    question: "What does DSCR stand for in real estate lending?",
    answer: "DSCR stands for Debt Service Coverage Ratio. It measures a property's ability to cover its mortgage payment using rental income. The formula is Net Operating Income divided by Annual Debt Service. A DSCR of 1.0 means rental income exactly covers the mortgage payment including taxes, insurance, and HOA dues."
  },
  {
    question: "Can I get a DSCR loan with no W-2s or tax returns?",
    answer: "Yes. DSCR loans do not require W-2s, tax returns, pay stubs, or employment verification of any kind. Qualification is based entirely on the property's rental income relative to the mortgage payment. This makes DSCR loans the preferred financing tool for self-employed investors, business owners, and anyone with complex tax situations."
  },
  {
    question: "What credit score do I need for a DSCR loan in 2026?",
    answer: "Most DSCR lenders require a minimum credit score of 660-680. However, credit score requirements vary by lender. Borrowers with scores of 720 or higher typically receive the most favorable rates and terms. A wholesale broker can match you with lenders whose credit score requirements fit your profile."
  },
  {
    question: "How much down payment is required for a DSCR loan?",
    answer: "DSCR loans typically require 20-25% down payment. Some lenders offer programs with 15% down for borrowers with strong credit scores (740+) and high DSCR ratios (1.25+). Lower DSCR ratios or credit scores below 700 may require 25-30% down. Requirements vary by lender and property type."
  },
  {
    question: "Can I use a DSCR loan for short-term rentals like Airbnb?",
    answer: "Yes, many DSCR lenders offer short-term rental programs in 2026. Income is calculated using platforms like AirDNA projections, actual STR income history from the past 12 months, or a blend of both. Some lenders require the property to have at least 12 months of short-term rental operating history."
  },
  {
    question: "What property types qualify for DSCR loans?",
    answer: "Eligible property types include single-family residences, 2-4 unit properties, condominiums (warrantable and non-warrantable), townhomes, and in some cases 5-8 unit small multifamily properties. The property must be used as an investment or rental property, not a primary residence or second home."
  },
  {
    question: "How is rental income calculated for DSCR qualification?",
    answer: "Lenders use either the actual lease income (if the property is already rented with a signed lease) or the appraised market rent from a 1007 rent schedule completed during the appraisal process. For short-term rentals, lenders may use AirDNA projections or historical booking income. Rental income projections are estimates and actual income may vary."
  },
  {
    question: "Can I hold a DSCR loan in an LLC?",
    answer: "Yes. Most DSCR lenders allow entity vesting, meaning you can hold the property and the loan in an LLC, corporation, or trust. This is a significant advantage over conventional loans, which require individual borrower vesting. LLC vesting provides liability protection and potential tax benefits for investors."
  },
  {
    question: "How many properties can I finance with DSCR loans?",
    answer: "There is no limit on the number of properties you can finance with DSCR loans. Unlike conventional financing which caps investors at 10 financed properties, DSCR programs allow unlimited property financing. Each property qualifies independently based on its own rental income and DSCR ratio."
  },
  {
    question: "What is the advantage of using a wholesale broker for DSCR loans?",
    answer: "A wholesale mortgage broker accesses DSCR programs from 200+ lenders simultaneously, comparing rates, terms, DSCR ratio requirements, and LTV limits across the entire market. Retail lenders offer only their own DSCR product. Wholesale access typically results in lower rates, better terms, and access to niche programs that match specific investor scenarios."
  },
  {
    question: "How long does it take to close a DSCR loan?",
    answer: "DSCR loans typically close in 21-30 days from application. Because no income documentation is required, underwriting is streamlined compared to conventional loans. The primary timeline drivers are the appraisal (including rent schedule), title work, and insurance. Working with an experienced wholesale broker can help avoid delays."
  },
  {
    question: "Do DSCR loans have prepayment penalties?",
    answer: "Many DSCR loans include prepayment penalty options, typically structured as 3-year, 2-year, or 1-year step-down penalties. Choosing a prepayment penalty period often results in a lower interest rate. Some lenders offer no-prepayment-penalty options at a slightly higher rate. Your broker can help you choose the structure that matches your investment timeline."
  }
];

export default function DSCRLoansExplainedInvestors2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "DSCR Loans Explained: How Real Estate Investors Qualify Without W-2s [2026]",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["DSCR Loans", "Investment Property Financing", "Non-QM Mortgages", "Wholesale Mortgage Lending", "Real Estate Investing"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "identifier": "NMLS #2716106",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-02-15",
            "dateModified": "2026-02-23",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/dscr-loans-explained-investors-2026",
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
            <div className="inline-flex items-center gap-2 bg-slate-500/20 rounded-full px-4 py-1.5 mb-6 border border-purple-500/30">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">DSCR Loans Explained</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              DSCR Loans Explained: How Real Estate Investors Qualify Without W-2s or Tax Returns in 2026
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              According to Mo Abdel, NMLS #1426884, DSCR loans represent the single most powerful financing tool available to real estate investors in 2026. Non-QM originations &mdash; with DSCR as the largest segment &mdash; surpassed <strong>$34 billion in 2025</strong>, a 27% increase over the prior year, according to CoreLogic non-agency MBS tracking data. The National Association of Realtors reports that <strong>investors purchased 16% of all homes sold in 2025</strong>, and DSCR financing fueled a significant share of those transactions. Unlike conventional mortgages that demand W-2s, tax returns, and employment verification, DSCR loans qualify borrowers based on one factor alone: whether the property&apos;s rental income covers the mortgage payment. Investors across California and Washington are using DSCR financing to scale portfolios without the documentation bottlenecks that hold back traditional lending.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get DSCR Loan Quote
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
            What Is a DSCR Loan and How Does It Work for Real Estate Investors?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            A DSCR loan (Debt Service Coverage Ratio loan) is a type of non-QM mortgage that qualifies real estate investors based solely on the rental income a property generates, rather than the borrower&apos;s personal income, employment history, or tax returns. The concept is straightforward: if the property pays for itself through rent, the investor qualifies for the loan.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            DSCR lending emerged as a mainstream product category after 2020, when private lenders recognized that millions of real estate investors were being shut out of conventional financing despite owning profitable rental properties. Self-employed borrowers who minimize taxable income through legitimate business deductions, full-time investors with 10+ properties exceeding Fannie Mae limits, and foreign nationals without U.S. tax returns all found a solution in DSCR programs. By 2026, the DSCR market has matured significantly, with over 100 wholesale lenders offering competitive programs across California and Washington.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-blue-600" />
              The DSCR Formula Explained
            </h3>
            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="text-center text-xl font-mono font-bold text-slate-900">
                DSCR = Net Operating Income / Annual Debt Service
              </p>
            </div>
            <p className="text-sm text-slate-600 mb-2">
              <strong>Simplified for residential investment properties:</strong>
            </p>
            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="text-center text-lg font-mono font-bold text-slate-900">
                DSCR = Monthly Gross Rental Income &divide; Monthly PITIA
              </p>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              <strong>PITIA</strong> = Principal + Interest + Taxes + Insurance + Association dues (HOA)
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-100 rounded-lg p-4">
                <p className="text-sm font-medium text-slate-900">Strong: DSCR 1.25+</p>
                <p className="text-sm text-blue-700">$5,000 rent &divide; $4,000 PITIA = <strong>1.25</strong></p>
                <p className="text-xs text-blue-600 mt-1">Best rates and terms available</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-4">
                <p className="text-sm font-medium text-blue-800">Standard: DSCR 1.0-1.24</p>
                <p className="text-sm text-blue-700">$4,000 rent &divide; $3,800 PITIA = <strong>1.05</strong></p>
                <p className="text-xs text-blue-600 mt-1">Qualifies with standard pricing</p>
              </div>
              <div className="bg-slate-100 rounded-lg p-4">
                <p className="text-sm font-medium text-amber-800">Below Breakeven: &lt;1.0</p>
                <p className="text-sm text-blue-700">$3,500 rent &divide; $4,000 PITIA = <strong>0.875</strong></p>
                <p className="text-xs text-blue-600 mt-1">May qualify with compensating factors</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4">What DSCR Thresholds Mean for Investors</h3>
          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">DSCR Ratio</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">What It Means</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Lender Perspective</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">1.50+</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Rent exceeds payment by 50%+</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Excellent cash flow; premium pricing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">1.25</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Rent exceeds payment by 25%</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Strong; best available rates</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">1.10</td>
                  <td className="px-4 py-3 text-sm text-slate-600">10% income cushion above payment</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Good; standard qualification</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">1.0</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Rent exactly covers payment</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Breakeven; qualifies at most lenders</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">0.75-0.99</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Rent does not fully cover payment</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Below breakeven; limited lenders, higher down payment</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4">7 Key Facts About DSCR Loans Every Investor Should Know</h3>
          <ol className="space-y-3 text-slate-600 mb-6">
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">1</span>
              <span><strong>No income verification required</strong> &mdash; no W-2s, tax returns, pay stubs, or employer verification of any kind</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">2</span>
              <span><strong>Qualification is property-based</strong> &mdash; the property&apos;s rental income is the sole determining factor for loan approval</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">3</span>
              <span><strong>Unlimited financed properties</strong> &mdash; no cap on the number of DSCR loans an investor can hold simultaneously</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">4</span>
              <span><strong>LLC and entity vesting allowed</strong> &mdash; hold properties in LLCs, corporations, or trusts for liability protection</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">5</span>
              <span><strong>Loan amounts from $100K to $5M+</strong> &mdash; covering single-family rentals through small multifamily properties</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">6</span>
              <span><strong>Available for both long-term and short-term rentals</strong> &mdash; Airbnb and VRBO properties qualify with many lenders</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-blue-700 font-bold text-sm shrink-0">7</span>
              <span><strong>Typical closing timeline of 21-30 days</strong> &mdash; faster than conventional due to reduced documentation requirements</span>
            </li>
          </ol>
        </section>

        {/* DSCR vs Conventional vs FHA Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do DSCR Loans Compare to Conventional and FHA Investment Property Loans?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Understanding how DSCR loans stack up against conventional and FHA financing helps investors choose the right tool for their strategy. Each program serves different investor profiles, and the best choice depends on your documentation capacity, portfolio size, and investment goals.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">DSCR Loan</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Conventional Investment</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">FHA (Owner-Occupied Invest.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Income Verification</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">None required</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Full (W-2s, tax returns)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Full (W-2s, tax returns)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Qualification Basis</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Property rental income</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Personal DTI ratio</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Personal DTI ratio</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Min. Down Payment</td>
                  <td className="px-4 py-3 text-sm text-slate-600">20-25%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">15-25%</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">3.5% (must occupy)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Property Limit</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Unlimited</td>
                  <td className="px-4 py-3 text-sm text-slate-600">10 financed properties</td>
                  <td className="px-4 py-3 text-sm text-slate-600">1 (primary residence)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">LLC Vesting</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Allowed</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Not allowed</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Not allowed</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Min. Credit Score</td>
                  <td className="px-4 py-3 text-sm text-slate-600">660-680 (varies)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">620-680</td>
                  <td className="px-4 py-3 text-sm text-slate-600">580-620</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Interest Rates</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Rates vary by lender</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Lower base rates</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Lowest base rates</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Closing Speed</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">21-30 days</td>
                  <td className="px-4 py-3 text-sm text-slate-600">30-45 days</td>
                  <td className="px-4 py-3 text-sm text-slate-600">45-60 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Occupancy</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Investment only</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Investment only</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Must occupy 1 unit</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Best For</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Scaling portfolios, self-employed</td>
                  <td className="px-4 py-3 text-sm text-slate-600">W-2 investors, first few properties</td>
                  <td className="px-4 py-3 text-sm text-slate-600">House-hacking 2-4 units</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 italic mb-6">
            Note: Rates, terms, and qualification requirements vary by lender. Rental income projections are estimates and actual income may vary. Contact a licensed loan officer for current program details.
          </p>
        </section>

        <section className="mb-12">
          <LeadMagnetCTA
            title="Free: DSCR Deal Analyzer"
            description="Send us your property's rent and estimated PITIA to get a fast DSCR-readiness assessment and lender-matched checklist."
            href="/contact"
            badge="Free investor tool"
            ctaText="Get your free analysis"
          />
        </section>

        {/* Google E-E-A-T Narrative */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Do Investors Choose DSCR Loans Over Traditional Mortgages?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The fundamental problem with conventional investment property financing is that it evaluates the borrower, not the investment. An investor who owns 15 cash-flowing rental properties generating $30,000 per month in net rental income will be declined for a conventional loan if their personal DTI ratio exceeds 45-50%. Their W-2 income from a day job, combined with all existing mortgage payments, creates a ceiling that has nothing to do with the quality of the next investment.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            DSCR loans solve this problem by evaluating each property independently. The question becomes: does this specific property generate enough rental income to cover its own mortgage payment? If yes, the loan is approved. The borrower&apos;s personal income, employment status, tax return deductions, and number of existing properties are irrelevant.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            This property-level underwriting approach has made DSCR the fastest-growing segment of non-QM lending. According to industry data, non-QM originations (which include DSCR) exceeded $30 billion in 2025, with DSCR products representing the largest share. The growth continues into 2026 as more investors discover these programs and more lenders enter the space, driving competition that benefits borrowers through better rates and terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Which Property Types Qualify for DSCR Financing in 2026?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            DSCR loans are available for a wide range of investment property types. The key requirement is that the property must be income-producing (or have the potential to produce income based on market rent analysis). Primary residences and second homes do not qualify for DSCR financing.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Single-Family Residences (SFRs)</h4>
                <p className="text-slate-600">The most common DSCR property type. Detached single-family homes used as long-term rentals or short-term vacation rentals. Available from virtually every DSCR lender.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">2-4 Unit Properties</h4>
                <p className="text-slate-600">Duplexes, triplexes, and fourplexes are ideal for DSCR loans because multiple units generate higher combined rental income, often producing DSCR ratios well above 1.25. The total property rent is used in the DSCR calculation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Condominiums and Townhomes</h4>
                <p className="text-slate-600">Both warrantable and non-warrantable condos qualify with many DSCR lenders. Non-warrantable condos that Fannie Mae and Freddie Mac reject are often approved through DSCR channels, opening up inventory conventional investors cannot access.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Short-Term Rentals (Airbnb / VRBO)</h4>
                <p className="text-slate-600">Many DSCR lenders now accept short-term rental income projections from AirDNA or actual booking history. STR properties in vacation markets often generate DSCR ratios of 1.5+ due to higher nightly rates. Rental income projections are estimates.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <Building2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">5-8 Unit Small Multifamily (Select Lenders)</h4>
                <p className="text-slate-600">Some DSCR lenders have expanded their programs to include 5-8 unit residential properties. These are underwritten similarly to 1-4 units but with slightly different guidelines. Availability varies by lender.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Does the DSCR Calculation Work Step-by-Step?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Understanding the DSCR calculation in detail helps investors evaluate potential deals before contacting a lender. The math is simple, but the inputs require careful consideration.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4">Step-by-Step DSCR Calculation Example</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-slate-700 mb-1">Step 1: Determine Monthly Rental Income</p>
                <p className="text-slate-600">Use either the signed lease amount or appraised market rent from the 1007 rent schedule. For this example: <strong>$4,500/month</strong> based on a signed 12-month lease.</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-slate-700 mb-1">Step 2: Calculate Monthly PITIA</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 mt-2">
                  <span>Principal & Interest:</span><span className="font-medium">$2,800</span>
                  <span>Property Taxes:</span><span className="font-medium">$625</span>
                  <span>Homeowner&apos;s Insurance:</span><span className="font-medium">$175</span>
                  <span>HOA Dues:</span><span className="font-medium">$0</span>
                  <span className="font-bold">Total PITIA:</span><span className="font-bold">$3,600</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-slate-700 mb-1">Step 3: Divide Rental Income by PITIA</p>
                <p className="text-center text-xl font-mono font-bold text-slate-900 my-2">
                  $4,500 &divide; $3,600 = 1.25 DSCR
                </p>
              </div>
              <div className="bg-slate-100 rounded-lg p-4">
                <p className="text-sm font-medium text-slate-900">Result: This property qualifies for DSCR financing with a strong 1.25 ratio, eligible for the best available rates and terms from most lenders.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              Important Notes on DSCR Calculation
            </h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>&bull; Lenders use <strong>gross rental income</strong> (not net after expenses like maintenance, vacancy, or property management)</li>
              <li>&bull; If the property has a signed lease, most lenders use the lease amount; vacant properties use appraised market rent</li>
              <li>&bull; HOA dues are included in PITIA, which can significantly impact the DSCR ratio for condo investments</li>
              <li>&bull; Some lenders use a 75% factor on short-term rental projections as a conservative buffer</li>
              <li>&bull; Rental income projections are estimates; actual income may vary based on market conditions, vacancy, and management</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Is the Wholesale Mortgage Broker Advantage for DSCR Loans?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            DSCR loan programs vary dramatically between lenders. Unlike conventional mortgages where Fannie Mae and Freddie Mac set standardized guidelines, every DSCR lender creates their own underwriting criteria. One lender requires a 1.0 minimum DSCR; another accepts 0.75. One requires 680 credit; another approves at 660. One allows short-term rental income; another does not.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            This fragmented landscape is exactly why wholesale mortgage brokers deliver superior outcomes for DSCR borrowers. A wholesale broker like Mo Abdel at Lumin Lending accesses 100+ DSCR lenders simultaneously, comparing rates, ratio requirements, credit score thresholds, LTV limits, prepayment penalty structures, and property type restrictions across the entire market. A retail lender can only offer their single DSCR product.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            The wholesale advantage is especially pronounced for DSCR loans because the rate spread between the best and worst lender for the same borrower profile can exceed 1.5 percentage points. On a $500,000 loan, that spread translates to over $7,500 per year in interest savings. Across a 5-property portfolio, the annual savings from wholesale rate shopping can exceed $30,000.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Who Benefits Most from DSCR Loans?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600"><strong>Self-employed investors</strong> with high write-offs reducing taxable income</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600"><strong>Full-time real estate investors</strong> exceeding the 10-property conventional limit</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600"><strong>W-2 employees with high DTI</strong> whose personal debt ratios exceed conventional limits</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600"><strong>Foreign nationals</strong> investing in U.S. real estate without U.S. tax returns</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600"><strong>LLC/entity investors</strong> needing liability protection through entity vesting</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600"><strong>Retirees</strong> with significant real estate assets but limited W-2 income</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data & Comparison Hub */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            DSCR Loan Data: Ratios, Down Payments, and Property Types
          </h2>

          <h3 className="text-xl font-bold text-slate-900 mb-4">DSCR Ratio Tiers and Typical Requirements</h3>
          <div className="border border-slate-200 rounded-xl overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">DSCR Ratio</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Typical Down Payment</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Min Credit Score</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Rate Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-blue-700">1.25+ (Strong)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">20%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">660-680</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Best rates available</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-blue-700">1.0-1.24 (Standard)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">20-25%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">680+</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Standard pricing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-blue-700">0.75-0.99 (Below breakeven)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">25-30%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">700+</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Higher rates; limited lenders</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Eligible Property Types and Typical Max LTV</h3>
          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Property Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Typical Max LTV (Purchase)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Typical Max LTV (Refi)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Single-Family Residence</td>
                  <td className="px-4 py-3 text-sm text-slate-600">80%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">75-80%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Most widely available</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">2-4 Unit</td>
                  <td className="px-4 py-3 text-sm text-slate-600">75-80%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">70-75%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Higher DSCR ratios typical</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Warrantable Condo</td>
                  <td className="px-4 py-3 text-sm text-slate-600">75-80%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">70-75%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">HOA impacts DSCR ratio</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Non-Warrantable Condo</td>
                  <td className="px-4 py-3 text-sm text-slate-600">70-75%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">65-70%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Select lenders only</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Short-Term Rental</td>
                  <td className="px-4 py-3 text-sm text-slate-600">75-80%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">70-75%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">AirDNA or history required</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">5-8 Unit (Select Lenders)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">70-75%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">65-70%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Limited availability</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 italic">
            LTV limits, credit score requirements, and DSCR ratio thresholds vary by lender. The figures above represent typical ranges across the wholesale market. Contact Mo Abdel at (949) 822-9662 for current program details.
          </p>
        </section>

        {/* People Also Ask */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask About DSCR Loans
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Is a DSCR loan a good idea for first-time investors?</h3>
              <p className="text-slate-600"><strong>DSCR loans work well for first-time investors who lack W-2 income documentation or prefer property-based qualification over personal income verification.</strong> However, the higher down payment requirement (20-25%) means first-time investors need more upfront capital compared to FHA or conventional options that accept 3.5-15% down.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Can I refinance a DSCR loan into a conventional mortgage later?</h3>
              <p className="text-slate-600"><strong>Yes, investors can refinance from a DSCR loan to a conventional mortgage if they meet full documentation requirements and conventional eligibility guidelines.</strong> This strategy is common for investors who initially needed DSCR flexibility but later want to capture lower conventional rates after stabilizing their income documentation.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Do DSCR loans show up on my personal credit report?</h3>
              <p className="text-slate-600"><strong>Yes, most DSCR loans are reported to credit bureaus regardless of whether the loan is in your personal name or an LLC.</strong> The loan typically appears as a mortgage tradeline on your credit report. Some lenders offer non-reporting options, but these are less common and may carry higher rates.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">What happens if my DSCR drops below 1.0 after closing?</h3>
              <p className="text-slate-600"><strong>A DSCR drop after closing does not trigger default or loan recall; the ratio is only evaluated at the time of origination.</strong> Your mortgage payment remains fixed regardless of rental income changes. However, if you need to refinance later, the new DSCR will be calculated at that time using current rental income and payment amounts.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Are DSCR loan rates higher than conventional investment property rates?</h3>
              <p className="text-slate-600"><strong>DSCR rates are typically higher than conventional investment property rates due to the non-QM classification and reduced documentation requirements.</strong> The premium varies by lender and market conditions. Wholesale broker access narrows this gap by comparing rates across 200+ lenders to find the most competitive pricing for each scenario.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Can I get a DSCR loan for a property that is currently vacant?</h3>
              <p className="text-slate-600"><strong>Yes, vacant properties qualify for DSCR loans using appraised market rent from the appraisal&apos;s 1007 rent schedule rather than actual lease income.</strong> The appraiser determines what the property would rent for based on comparable rentals in the area. This allows investors to purchase vacant properties and secure financing before placing a tenant.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Is there a maximum loan amount for DSCR loans?</h3>
              <p className="text-slate-600"><strong>DSCR loan amounts typically range from $100,000 to $3-5 million, with some lenders offering programs up to $10 million for high-value properties.</strong> Maximum amounts vary by lender, property type, and borrower profile. Wholesale broker access is especially valuable for high-balance DSCR loans because lender appetite varies significantly above $1 million.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Do I need reserves for a DSCR loan?</h3>
              <p className="text-slate-600"><strong>Yes, DSCR lenders typically require 6-12 months of PITIA reserves verified through bank statements or investment account statements.</strong> Reserves demonstrate the borrower&apos;s ability to cover payments during vacancy or rental income disruptions. Higher reserves can sometimes compensate for lower DSCR ratios or credit scores.</p>
            </div>
          </div>
        </section>

        {/* Extended FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions: DSCR Loans Explained
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
            Expert Summary: DSCR Loans Are the Investor&apos;s Best Financing Tool in 2026
          </h2>
          <p className="text-lg text-slate-200 mb-4 max-w-3xl mx-auto">
            DSCR loans eliminate the documentation barriers that prevent productive investors from scaling their portfolios. No W-2s, no tax returns, no employment verification, no property count limits, and the ability to vest in an LLC. The property pays for itself through rental income, and that is all that matters for qualification.
          </p>
          <p className="text-lg text-slate-200 mb-6 max-w-3xl mx-auto">
            As a wholesale mortgage broker, Mo Abdel at Lumin Lending compares DSCR programs from 200+ lenders to match each investor with the optimal rates, terms, and ratio requirements. Whether you are purchasing your first rental property or adding your fiftieth, the wholesale channel delivers better pricing and broader program access than any single retail lender.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-slate-50 px-8 py-4">
                Get Your DSCR Loan Quote
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
            <Link href="/blog/dscr-loan-requirements-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR Loan Requirements: Rates, Ratios & Down Payment Guide
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
            <Link href="/blog/dscr-loans-portfolio-investors-scaling-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Scaling Your Portfolio with DSCR Loans
            </Link>
            <Link href="/blog/bridge-loans-vs-dscr-investment-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Bridge Loans vs DSCR for Investment Properties
            </Link>
            <Link href="/blog/fix-and-flip-loans-wholesale-broker-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Fix-and-Flip Loans Through a Wholesale Broker
            </Link>
          </div>
        </section>

        {/* Compliance Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p>
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial advice. DSCR loan programs are non-QM products with different guidelines than conventional mortgages. DSCR ratio requirements, interest rates, down payment minimums, and credit score thresholds vary by lender and are subject to change without notice. Rental income projections are estimates and actual rental income may vary based on market conditions, vacancy rates, and property management. Contact a licensed loan officer for personalized guidance. Mo Abdel, NMLS #1426884, is licensed in California and Washington.
          </p>
        </section>
      </article>
    </div>
  );
}