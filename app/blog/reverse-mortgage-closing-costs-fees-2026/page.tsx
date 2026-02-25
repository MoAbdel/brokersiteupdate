import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Home, AlertTriangle, DollarSign, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Reverse Mortgage Closing Costs 2026: HECM Fees, Origination & What Seniors Pay | Mo Abdel',
  description: 'Complete breakdown of reverse mortgage closing costs in 2026. HECM origination fees capped at $6,000, 2% initial MIP, 0.5% annual MIP, and third-party costs. Most fees finance into the loan. NMLS #1426884.',
  keywords: ['reverse mortgage closing costs', 'HECM closing costs', 'reverse mortgage fees', 'reverse mortgage origination fee', 'HECM MIP', 'reverse mortgage costs 2026', 'HECM fees 2026', 'reverse mortgage appraisal cost', 'HECM origination fee cap'],
  openGraph: {
    title: 'Reverse Mortgage Closing Costs 2026: HECM Fees, Origination & What Seniors Pay',
    description: 'Complete breakdown of reverse mortgage closing costs in 2026. HECM origination fees capped at $6,000, 2% initial MIP, 0.5% annual MIP. Most fees finance into the loan.',
    url: 'https://www.mothebroker.com/blog/reverse-mortgage-closing-costs-fees-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-25T00:00:00Z',
    modifiedTime: '2026-02-25T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/reverse-mortgage-closing-costs-fees-2026',
  },
};

const faqData = [
  {
    question: "What are the total closing costs on a reverse mortgage?",
    answer: "Total HECM closing costs typically range from $8,000 to $20,000 depending on the home value and loan amount. This includes the origination fee (up to $6,000), initial mortgage insurance premium (2% of the maximum claim amount), appraisal ($450-$750), title insurance, recording fees, and HUD-required counseling ($125 average). Most of these costs can be financed into the loan balance rather than paid out of pocket."
  },
  {
    question: "Can reverse mortgage closing costs be financed into the loan?",
    answer: "Yes. Nearly all HECM closing costs can be financed into the loan balance, meaning they come out of the loan proceeds rather than requiring cash at the closing table. The only cost that must be paid out of pocket before closing is the HUD-required counseling session, which averages $125. Financing closing costs reduces your initial loan proceeds but eliminates the need for upfront cash."
  },
  {
    question: "What is the HECM origination fee and how is it calculated?",
    answer: "The HECM origination fee compensates the lender for processing the loan. HUD calculates it as the greater of $2,500 or 2% of the first $200,000 of the home value plus 1% of the amount over $200,000, with an absolute cap of $6,000. For a $500,000 home, the origination fee is $2,500 plus 1% of $300,000 ($3,000), totaling $5,500. Some lenders reduce or waive this fee."
  },
  {
    question: "How much is the HECM mortgage insurance premium?",
    answer: "The HECM mortgage insurance premium has two components. The initial MIP is 2% of the maximum claim amount, paid at closing and typically financed into the loan. The annual MIP is 0.5% of the outstanding loan balance, accrued monthly and added to the loan balance. For a $600,000 home, the initial MIP is $12,000 and the annual MIP starts at approximately $250 per month."
  },
  {
    question: "Do I pay for an appraisal on a reverse mortgage?",
    answer: "Yes. Every HECM loan requires an FHA appraisal to determine the home's current market value. The appraisal fee typically ranges from $450 to $750 depending on property type, location, and complexity. If the appraiser identifies health and safety issues, a second inspection after repairs may cost an additional $150-$200. The appraisal cost can be financed into the loan."
  },
  {
    question: "Is the HECM counseling session free?",
    answer: "No. HUD-required counseling is not free, though the cost is modest. Sessions with HUD-approved counseling agencies average $125, with a typical range of $0 to $200. Some agencies offer reduced fees or free counseling for low-income borrowers. This is the only reverse mortgage closing cost that must be paid out of pocket before the loan application can proceed."
  },
  {
    question: "Are reverse mortgage closing costs higher than regular mortgage closing costs?",
    answer: "HECM closing costs are generally higher than conventional forward mortgage closing costs due to the initial mortgage insurance premium (2% of the maximum claim amount) and the FHA-regulated origination fee structure. However, the ability to finance nearly all costs into the loan balance means the out-of-pocket expense at closing is minimal compared to a conventional mortgage where buyers pay closing costs in cash."
  },
  {
    question: "Can I negotiate reverse mortgage closing costs?",
    answer: "Certain reverse mortgage closing costs are negotiable and others are not. The origination fee is set by HUD formula but some lenders offer reduced or waived origination fees. Third-party costs such as title insurance, settlement fees, and pest inspections can be shopped and compared. The initial MIP (2%) and annual MIP (0.5%) are set by FHA and are not negotiable. Working with a wholesale broker provides access to 200+ lenders with varying fee structures."
  },
  {
    question: "What third-party closing costs are charged on a HECM?",
    answer: "Third-party HECM closing costs include the FHA appraisal ($450-$750), title search and title insurance ($400-$1,500), recording fees ($50-$250), settlement or escrow fees ($300-$800), document preparation ($75-$200), credit report ($30-$50), pest inspection ($75-$150 where required), and flood certification ($15-$25). These costs vary by county and service provider."
  },
  {
    question: "Does a HECM for Purchase have higher closing costs than a regular HECM?",
    answer: "HECM for Purchase closing costs follow the same fee structure as a standard HECM refinance. The origination fee uses the same HUD formula, the initial MIP is the same 2% of the maximum claim amount, and third-party costs are comparable. The primary difference is that a HECM for Purchase requires the borrower to contribute a down payment (typically 40-60% of the purchase price), which is not a closing cost but rather an equity contribution."
  },
  {
    question: "How does the HECM annual MIP affect my loan balance over time?",
    answer: "The annual MIP of 0.5% of the outstanding loan balance accrues monthly and is added to the loan balance. As the loan balance grows from accrued interest and MIP charges, the annual MIP amount also increases slightly each year. Over a 10-year period, the cumulative MIP can add a meaningful amount to the total loan balance. Your loan officer can provide year-by-year projections showing exactly how MIP affects your equity position."
  },
  {
    question: "Are there any upfront costs before applying for a reverse mortgage?",
    answer: "The only required upfront cost before applying for a HECM is the HUD-approved counseling session, which averages $125. No other fees should be charged before you receive a binding loan estimate. Legitimate reverse mortgage lenders do not charge application fees, commitment fees, or lock fees prior to delivering a formal loan offer. Any lender requesting upfront fees beyond counseling should be viewed with caution."
  },
  {
    question: "What is the maximum claim amount and why does it matter for closing costs?",
    answer: "The maximum claim amount is the lesser of the appraised home value or the FHA HECM lending limit ($1,209,750 in 2026). This figure determines both the initial MIP (2% of the maximum claim amount) and the origination fee calculation. For homes valued above $1,209,750, the maximum claim amount is capped at the FHA limit, which also caps the associated fees. This means homeowners with properties worth $2 million pay the same initial MIP as those with homes valued at $1,209,750."
  }
];

export default function ReverseMortgageClosingCostsFees2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Reverse Mortgage Closing Costs 2026: HECM Fees, Origination & What Seniors Pay",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["Reverse Mortgages", "HECM Loans", "HECM Closing Costs", "Mortgage Insurance Premiums", "Senior Home Equity"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "identifier": "NMLS #2716106",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-02-25",
            "dateModified": "2026-02-25",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/reverse-mortgage-closing-costs-fees-2026",
              "significantLink": [
                "https://www.hud.gov/",
                "https://www.consumerfinance.gov/"
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

      {/* Schema Markup - FAQPage */}
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

      {/* Schema Markup - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.mothebroker.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.mothebroker.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Reverse Mortgage Closing Costs 2026",
                "item": "https://www.mothebroker.com/blog/reverse-mortgage-closing-costs-fees-2026"
              }
            ]
          })
        }}
      />

      {/* Schema Markup - Speakable */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".speakable-summary", ".speakable-hook"]
            },
            "url": "https://www.mothebroker.com/blog/reverse-mortgage-closing-costs-fees-2026"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-slate-500/20 rounded-full px-4 py-1.5 mb-6 border border-blue-500/30">
              <DollarSign className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Reverse Mortgage &bull; HECM Costs</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reverse Mortgage Closing Costs 2026: HECM Fees, Origination &amp; What Seniors Pay
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed speakable-hook">
              According to Mo Abdel, NMLS #1426884, most HECM closing costs &mdash; including the origination fee (capped at $6,000), the 2% initial mortgage insurance premium, and all third-party charges &mdash; can be financed directly into the loan balance, meaning seniors typically pay nothing out of pocket beyond the $125 counseling session.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get HECM Cost Estimate
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
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Section 1: Citation Hook */}
        <section className="mb-12">
          <p className="text-lg text-slate-700 mb-6 leading-relaxed speakable-summary">
            <strong>Reverse mortgage closing costs</strong> are the fees charged to originate, insure, and settle a Home Equity Conversion Mortgage (HECM). Unlike conventional forward mortgages where buyers pay closing costs in cash at the settlement table, the HECM program allows borrowers to finance nearly every fee into the loan balance &mdash; reducing the actual out-of-pocket expense to roughly $125 for the required <a href="https://www.hud.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HUD</a>-approved counseling session.
          </p>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Three semantic facts frame the entire cost discussion. First, the <strong>HECM initial mortgage insurance premium is 2% of the maximum claim amount</strong>, paid at closing and typically rolled into the loan. Second, the <strong>origination fee is capped at $6,000</strong> by HUD regulation regardless of home value. Third, the <strong>annual MIP of 0.5% accrues monthly</strong> on the outstanding loan balance for the life of the loan, protecting both borrower and lender through FHA insurance. Understanding these three cost pillars eliminates the ambiguity that causes many seniors to overestimate how much a reverse mortgage actually costs upfront.
          </p>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Having originated HECM loans across California and Washington, I see the same pattern: borrowers enter the process expecting $30,000 or more in upfront cash requirements and discover that financing costs into the loan reduces their actual outlay to a single counseling fee. The table below breaks down every HECM closing cost category with current 2026 cost ranges.
          </p>

          {/* Data Table 1: HECM Cost Breakdown */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left">Cost Category</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Typical Range</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Can Be Financed?</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Set By</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Initial MIP (Mortgage Insurance Premium)</td>
                  <td className="border border-slate-200 px-4 py-3">2% of maximum claim amount</td>
                  <td className="border border-slate-200 px-4 py-3">Yes</td>
                  <td className="border border-slate-200 px-4 py-3">FHA / HUD</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Annual MIP</td>
                  <td className="border border-slate-200 px-4 py-3">0.5% of outstanding balance (ongoing)</td>
                  <td className="border border-slate-200 px-4 py-3">Accrues on balance</td>
                  <td className="border border-slate-200 px-4 py-3">FHA / HUD</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Origination Fee</td>
                  <td className="border border-slate-200 px-4 py-3">$2,500&ndash;$6,000</td>
                  <td className="border border-slate-200 px-4 py-3">Yes</td>
                  <td className="border border-slate-200 px-4 py-3">HUD formula (capped)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">FHA Appraisal</td>
                  <td className="border border-slate-200 px-4 py-3">$450&ndash;$750</td>
                  <td className="border border-slate-200 px-4 py-3">Yes</td>
                  <td className="border border-slate-200 px-4 py-3">Third-party appraiser</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Title Insurance</td>
                  <td className="border border-slate-200 px-4 py-3">$400&ndash;$1,500</td>
                  <td className="border border-slate-200 px-4 py-3">Yes</td>
                  <td className="border border-slate-200 px-4 py-3">Title company</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Settlement / Escrow Fee</td>
                  <td className="border border-slate-200 px-4 py-3">$300&ndash;$800</td>
                  <td className="border border-slate-200 px-4 py-3">Yes</td>
                  <td className="border border-slate-200 px-4 py-3">Escrow company</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Recording Fees</td>
                  <td className="border border-slate-200 px-4 py-3">$50&ndash;$250</td>
                  <td className="border border-slate-200 px-4 py-3">Yes</td>
                  <td className="border border-slate-200 px-4 py-3">County recorder</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">HUD Counseling</td>
                  <td className="border border-slate-200 px-4 py-3">$0&ndash;$200 (avg $125)</td>
                  <td className="border border-slate-200 px-4 py-3">No &mdash; paid before application</td>
                  <td className="border border-slate-200 px-4 py-3">HUD-approved agency</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Document Preparation</td>
                  <td className="border border-slate-200 px-4 py-3">$75&ndash;$200</td>
                  <td className="border border-slate-200 px-4 py-3">Yes</td>
                  <td className="border border-slate-200 px-4 py-3">Lender / settlement agent</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Credit Report</td>
                  <td className="border border-slate-200 px-4 py-3">$30&ndash;$50</td>
                  <td className="border border-slate-200 px-4 py-3">Yes</td>
                  <td className="border border-slate-200 px-4 py-3">Credit bureau</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Pest Inspection (if required)</td>
                  <td className="border border-slate-200 px-4 py-3">$75&ndash;$150</td>
                  <td className="border border-slate-200 px-4 py-3">Yes</td>
                  <td className="border border-slate-200 px-4 py-3">Licensed inspector</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Flood Certification</td>
                  <td className="border border-slate-200 px-4 py-3">$15&ndash;$25</td>
                  <td className="border border-slate-200 px-4 py-3">Yes</td>
                  <td className="border border-slate-200 px-4 py-3">Flood zone vendor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Bing Power Block */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Reverse Mortgage Closing Costs: Complete Fee Breakdown for 2026
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            Every HECM closing cost falls into one of three buckets: FHA-regulated fees that are identical across all lenders, lender-specific fees that vary by company, and third-party fees set by independent service providers. Understanding which category each cost belongs to determines where you have negotiating leverage and where fees are fixed.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            The FHA-regulated fees &mdash; initial MIP and annual MIP &mdash; are non-negotiable. Every HECM borrower in the country pays the same percentage. The origination fee follows a HUD formula but some lenders offer reductions or waivers as a competitive incentive. Third-party fees for title, escrow, appraisal, and recording are set by local service providers and can be shopped.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            Below is a direct cost comparison between a HECM reverse mortgage, a HELOC, and a cash-out refinance &mdash; the three primary equity access vehicles available to homeowners age 62 and older.
          </p>

          {/* Comparison Table: HECM vs HELOC vs Cash-Out Refi */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left">Cost Component</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">HECM Reverse Mortgage</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">HELOC</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Cash-Out Refinance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Mortgage Insurance</td>
                  <td className="border border-slate-200 px-4 py-3">2% initial MIP + 0.5% annual MIP</td>
                  <td className="border border-slate-200 px-4 py-3">None</td>
                  <td className="border border-slate-200 px-4 py-3">None (if &lt;80% LTV)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Origination Fee</td>
                  <td className="border border-slate-200 px-4 py-3">$2,500&ndash;$6,000 (HUD capped)</td>
                  <td className="border border-slate-200 px-4 py-3">$0&ndash;$500</td>
                  <td className="border border-slate-200 px-4 py-3">0.5%&ndash;1% of loan amount</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Appraisal</td>
                  <td className="border border-slate-200 px-4 py-3">$450&ndash;$750 (FHA required)</td>
                  <td className="border border-slate-200 px-4 py-3">$0&ndash;$500 (sometimes waived)</td>
                  <td className="border border-slate-200 px-4 py-3">$450&ndash;$750</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Title &amp; Escrow</td>
                  <td className="border border-slate-200 px-4 py-3">$700&ndash;$2,300</td>
                  <td className="border border-slate-200 px-4 py-3">$300&ndash;$1,000</td>
                  <td className="border border-slate-200 px-4 py-3">$700&ndash;$2,300</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Counseling Required</td>
                  <td className="border border-slate-200 px-4 py-3">Yes &mdash; $125 avg (out of pocket)</td>
                  <td className="border border-slate-200 px-4 py-3">No</td>
                  <td className="border border-slate-200 px-4 py-3">No</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Monthly Payment Required</td>
                  <td className="border border-slate-200 px-4 py-3">No &mdash; voluntary only</td>
                  <td className="border border-slate-200 px-4 py-3">Yes &mdash; interest payments</td>
                  <td className="border border-slate-200 px-4 py-3">Yes &mdash; full P&amp;I payment</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Can Finance Costs Into Loan</td>
                  <td className="border border-slate-200 px-4 py-3">Yes &mdash; nearly all costs</td>
                  <td className="border border-slate-200 px-4 py-3">Sometimes</td>
                  <td className="border border-slate-200 px-4 py-3">Yes &mdash; if within LTV limits</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Total Typical Closing Costs</td>
                  <td className="border border-slate-200 px-4 py-3">$8,000&ndash;$20,000</td>
                  <td className="border border-slate-200 px-4 py-3">$0&ndash;$2,000</td>
                  <td className="border border-slate-200 px-4 py-3">$4,000&ndash;$12,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            All HECM Closing Costs and Fees Explained
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            The following is the complete list of every fee associated with a HECM reverse mortgage, in the order they appear on your Closing Disclosure:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">1</div>
              <div>
                <p className="font-semibold text-slate-900">Initial Mortgage Insurance Premium (MIP) &mdash; 2% of Maximum Claim Amount</p>
                <p className="text-slate-600">Paid to FHA at closing. Finances the federal insurance that guarantees you will receive your loan proceeds regardless of home value changes or lender solvency. On a $600,000 home, the initial MIP is $12,000. This fee is identical across all HECM lenders.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">2</div>
              <div>
                <p className="font-semibold text-slate-900">Annual Mortgage Insurance Premium &mdash; 0.5% of Outstanding Balance</p>
                <p className="text-slate-600">Accrues monthly on the current loan balance and is added to the balance. This ongoing charge ensures continued FHA insurance protection for the life of the loan. It is not a separate bill &mdash; it accrues silently on the balance alongside interest.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">3</div>
              <div>
                <p className="font-semibold text-slate-900">Origination Fee &mdash; $2,500 to $6,000 (HUD Formula)</p>
                <p className="text-slate-600">Calculated as the greater of $2,500 or 2% of the first $200,000 of the home value plus 1% of the amount above $200,000, capped at $6,000. This compensates the lender for processing, underwriting, and closing the loan. Some lenders offer partial or full waivers.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">4</div>
              <div>
                <p className="font-semibold text-slate-900">FHA Appraisal &mdash; $450 to $750</p>
                <p className="text-slate-600">An FHA-approved appraiser determines the home&apos;s market value and confirms it meets HUD minimum property standards. Complex properties, rural locations, or homes requiring a second inspection after repairs may cost more. The appraisal directly impacts your available proceeds because it establishes the maximum claim amount.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">5</div>
              <div>
                <p className="font-semibold text-slate-900">Title Search, Title Insurance &amp; Settlement Fees &mdash; $700 to $2,300</p>
                <p className="text-slate-600">The title company verifies clear ownership, issues a lender&apos;s title insurance policy, and conducts the closing. Costs vary significantly by county. In California, title and escrow fees tend to run higher than in Washington due to different market practices.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">6</div>
              <div>
                <p className="font-semibold text-slate-900">HUD-Approved Counseling &mdash; $0 to $200 (Avg $125)</p>
                <p className="text-slate-600">Required before application. A HUD-certified counselor reviews reverse mortgage mechanics, costs, alternatives, and obligations. This is the only HECM cost that must be paid out of pocket &mdash; it cannot be financed into the loan and cannot be paid by the lender.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">7</div>
              <div>
                <p className="font-semibold text-slate-900">Recording Fees, Credit Report, Flood Cert &amp; Miscellaneous &mdash; $100 to $350</p>
                <p className="text-slate-600">County recording fees ($50&ndash;$250) record the deed of trust. The credit report ($30&ndash;$50) verifies credit history for the financial assessment. Flood certification ($15&ndash;$25) confirms whether flood insurance is required. These small fees are standard across all mortgage types.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Google E-E-A-T Narrative */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Can You Roll Reverse Mortgage Closing Costs Into the Loan?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            Yes &mdash; and this is the single most misunderstood aspect of HECM closing costs. Nearly every fee listed on the Closing Disclosure can be financed directly into the loan balance, which means the costs are deducted from your available proceeds rather than requiring a check at closing.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            Here is how it works in practice. Suppose your home appraises at $700,000 and your total closing costs (initial MIP, origination, title, appraisal, recording, and miscellaneous) total $18,000. Those costs are deducted from your gross available proceeds before disbursement. If your gross proceeds are $350,000, you receive $332,000 after closing costs. You never write a check for the $18,000 &mdash; it comes out of the loan itself.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            The only exception is the HUD counseling fee, which averages $125 and must be paid before the lender accepts your loan application. Some counseling agencies offer reduced or free sessions for low-income borrowers. I always recommend completing counseling early in the process because the counseling certificate is required before the appraisal can be ordered.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-blue-900 font-medium">
              <strong>Experience Note:</strong> In my years originating HECM loans in California and Washington, financing closing costs into the loan is the standard approach for the vast majority of borrowers. Fewer than 10% of my HECM clients choose to pay closing costs in cash. Those who do are typically borrowers who want to maximize their available credit line and are willing to pay upfront to achieve a higher net proceeds figure.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Does the HECM Initial MIP Work?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            The initial mortgage insurance premium is the largest single closing cost on a HECM loan. At 2% of the maximum claim amount, it can range from approximately $5,000 on a $250,000 home to $24,195 on a home at or above the 2026 FHA HECM lending limit of $1,209,750.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            The maximum claim amount is defined as the lesser of the appraised home value or the FHA HECM lending limit. For 2026, the FHA HECM lending limit is $1,209,750, which applies to high-cost areas including most of California and parts of Washington. Homes valued above this limit still use $1,209,750 as the maximum claim amount, which caps the initial MIP at $24,195 regardless of actual home value.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            What does the MIP buy? It funds the FHA insurance pool that provides two critical protections. For borrowers, FHA insurance guarantees that you will continue to receive your loan proceeds even if the lender goes out of business. For heirs, it guarantees that the loan balance will never exceed the home&apos;s fair market value at the time of repayment &mdash; the &ldquo;non-recourse&rdquo; protection that distinguishes HECMs from proprietary reverse mortgages.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-amber-900">
                <strong>Important:</strong> The annual MIP of 0.5% is separate from the initial MIP. It accrues monthly on the outstanding loan balance and is added to the balance automatically. Over time, the cumulative annual MIP adds a meaningful amount to the total loan balance. Ask your loan officer for a year-by-year projection showing exactly how the annual MIP affects your equity position over 5, 10, and 15-year horizons.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Determines the Origination Fee Amount?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            HUD established a specific formula for calculating the HECM origination fee to protect consumers from excessive lender charges. The formula works as follows:
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Step 1:</strong> Calculate 2% of the first $200,000 of the home&apos;s appraised value = $4,000</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Step 2:</strong> Calculate 1% of the home value above $200,000</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Step 3:</strong> Add Step 1 + Step 2, but cap the total at $6,000</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Floor:</strong> The minimum origination fee is $2,500, regardless of home value</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            For practical reference: a $300,000 home produces an origination fee of $5,000 ($4,000 on the first $200,000 plus $1,000 on the remaining $100,000). A $600,000 home hits the $6,000 cap ($4,000 + $4,000 = $8,000, capped at $6,000). Any home valued at $400,000 or above reaches the maximum $6,000 origination fee.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            Some lenders in the HECM market actively compete on origination fees. Through wholesale channels, I have access to 200+ lenders, some of which offer reduced origination fees or even full origination fee waivers on certain HECM products. A reduced origination fee directly increases your net loan proceeds by the amount of the reduction. For a <Link href="/blog/reverse-mortgage-complete-guide-2026" className="text-blue-600 hover:underline">complete overview of how HECM loans work</Link>, see our comprehensive guide.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Are Third-Party Closing Costs Negotiable?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            Third-party costs are the one area where borrowers have genuine negotiating leverage. Unlike the FHA-mandated MIP and the HUD-formula origination fee, third-party service providers set their own pricing. This means you can &mdash; and should &mdash; shop for title insurance, settlement services, and related fees.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            Under federal law (RESPA), your lender must provide a list of approved settlement service providers, but you are entitled to choose your own title company, escrow agent, or attorney in most states. In California and Washington, title insurance rates can vary by 20&ndash;30% between providers for the same coverage. I routinely help borrowers compare title and escrow quotes to minimize this cost category.
          </p>

          <p className="text-lg text-slate-600 mb-8">
            The appraisal fee, while technically a third-party cost, offers limited negotiating room because FHA requires an FHA-approved appraiser selected through an appraisal management company. However, appraisal fees in metropolitan areas of California ($500&ndash;$750) tend to run higher than suburban and rural markets ($450&ndash;$550). The appraisal result directly influences your available proceeds &mdash; see our <Link href="/blog/reverse-mortgage-calculator-2026" className="text-blue-600 hover:underline">reverse mortgage calculator</Link> to estimate how your home&apos;s value translates to loan proceeds after costs.
          </p>
        </section>

        {/* Section 4: Data & Comparison Hub */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            HECM Closing Cost Scenarios by Home Value
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            The following table shows estimated total closing costs at three different home values commonly seen in California and Washington. These figures include the initial MIP, origination fee, and estimated third-party costs. They assume all costs are financed into the loan.
          </p>

          {/* Scenario Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left">Home Value</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Initial MIP (2%)</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Origination Fee</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Est. Third-Party Costs</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Total Est. Closing Costs</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">$400,000</td>
                  <td className="border border-slate-200 px-4 py-3">$8,000</td>
                  <td className="border border-slate-200 px-4 py-3">$6,000</td>
                  <td className="border border-slate-200 px-4 py-3">$1,500&ndash;$3,000</td>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">$15,500&ndash;$17,000</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">$750,000</td>
                  <td className="border border-slate-200 px-4 py-3">$15,000</td>
                  <td className="border border-slate-200 px-4 py-3">$6,000</td>
                  <td className="border border-slate-200 px-4 py-3">$1,800&ndash;$3,500</td>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">$22,800&ndash;$24,500</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">$1,209,750+</td>
                  <td className="border border-slate-200 px-4 py-3">$24,195</td>
                  <td className="border border-slate-200 px-4 py-3">$6,000</td>
                  <td className="border border-slate-200 px-4 py-3">$2,000&ndash;$4,000</td>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">$32,195&ndash;$34,195</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            Note that for homes valued above the 2026 FHA HECM lending limit of $1,209,750, both the initial MIP and origination fee are calculated on the $1,209,750 cap &mdash; not the actual home value. Homeowners with properties significantly above this limit may want to explore <Link href="/blog/proprietary-reverse-mortgage-2026" className="text-blue-600 hover:underline">proprietary reverse mortgage programs</Link> that offer higher loan limits without FHA mortgage insurance requirements, though those programs carry their own fee structures.
          </p>

          {/* Out-of-Pocket vs Financed Comparison */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left">Payment Approach</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Out-of-Pocket Cost</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Impact on Loan Proceeds</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Finance All Costs Into Loan</td>
                  <td className="border border-slate-200 px-4 py-3">~$125 (counseling only)</td>
                  <td className="border border-slate-200 px-4 py-3">Net proceeds reduced by total costs</td>
                  <td className="border border-slate-200 px-4 py-3">Borrowers who want to preserve cash</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Pay All Costs in Cash</td>
                  <td className="border border-slate-200 px-4 py-3">$8,000&ndash;$34,000+</td>
                  <td className="border border-slate-200 px-4 py-3">Maximum gross proceeds available</td>
                  <td className="border border-slate-200 px-4 py-3">Borrowers maximizing credit line</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Hybrid (Pay Origination, Finance MIP)</td>
                  <td className="border border-slate-200 px-4 py-3">$2,500&ndash;$6,000</td>
                  <td className="border border-slate-200 px-4 py-3">Moderate proceeds reduction</td>
                  <td className="border border-slate-200 px-4 py-3">Borrowers balancing cost and proceeds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: People Also Ask */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask About Reverse Mortgage Closing Costs
          </h2>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">How much does a reverse mortgage cost upfront?</h3>
              <p className="text-slate-600"><strong>The only required upfront cash cost is the HUD counseling session, averaging $125.</strong> All other HECM closing costs &mdash; including the 2% initial MIP, origination fee, appraisal, title, and settlement charges &mdash; can be financed into the loan balance so they come out of proceeds rather than requiring cash at closing.</p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">What is the 2% fee on a reverse mortgage?</h3>
              <p className="text-slate-600"><strong>The 2% fee is the initial mortgage insurance premium paid to FHA at closing.</strong> It is calculated as 2% of the maximum claim amount (the lesser of appraised value or the FHA lending limit of $1,209,750 in 2026). This MIP funds the FHA insurance that provides the non-recourse guarantee protecting borrowers and heirs.</p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Why are reverse mortgage closing costs so high?</h3>
              <p className="text-slate-600"><strong>The initial MIP (2%) is the primary driver of higher HECM closing costs.</strong> This FHA insurance premium does not exist in conventional mortgages and accounts for 50&ndash;75% of total HECM closing costs. However, this MIP funds the non-recourse protection ensuring the loan balance never exceeds the home value &mdash; a benefit unique to reverse mortgages.</p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Can I get a reverse mortgage with no closing costs?</h3>
              <p className="text-slate-600"><strong>No HECM has zero total closing costs, but some lenders waive the origination fee.</strong> A lender-paid closing cost structure shifts fees into a slightly higher margin. The FHA-mandated 2% initial MIP and 0.5% annual MIP cannot be waived by any lender. The net effect of &ldquo;no-cost&rdquo; marketing is that you pay less at closing but more over the life of the loan through the margin.</p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Are reverse mortgage closing costs tax-deductible?</h3>
              <p className="text-slate-600"><strong>Some HECM closing costs may be deductible, but timing and rules are specific.</strong> The origination fee and certain points may qualify for deduction in the year the loan is repaid or the property is sold. Interest accrued on a reverse mortgage is not deductible until actually paid. Consult your CPA for guidance on your specific tax situation.</p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Is the counseling fee the only out-of-pocket cost?</h3>
              <p className="text-slate-600"><strong>Yes, HUD counseling ($125 average) is the only cost that must be paid in cash.</strong> Federal regulations prohibit lenders from paying the counseling fee on the borrower&apos;s behalf to maintain counselor independence. Every other closing cost can be financed into the HECM loan balance. Learn more about the counseling process in our <Link href="/blog/reverse-mortgage-complete-guide-2026" className="text-blue-600 hover:underline">complete HECM guide</Link>.</p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">How do HECM for Purchase closing costs compare?</h3>
              <p className="text-slate-600"><strong>HECM for Purchase fees follow the same structure as standard HECM loans.</strong> The initial MIP is 2%, origination follows the same HUD formula, and third-party costs are comparable. The key difference is the required buyer contribution (typically 40&ndash;60% of the purchase price). See our <Link href="/blog/hecm-for-purchase-2026" className="text-blue-600 hover:underline">HECM for Purchase guide</Link> for details.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Extended FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions: Reverse Mortgage Closing Costs
          </h2>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Expert Summary + CTA */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Expert Summary: What You Actually Pay for a Reverse Mortgage
          </h2>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-8">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Reverse mortgage closing costs consist of three layers: the FHA-mandated mortgage insurance premiums (2% initial, 0.5% annual), the HUD-formula origination fee (capped at $6,000), and standard third-party settlement charges. The total ranges from roughly $8,000 on a modest home to $34,000 on a home at the FHA lending limit. The critical fact most borrowers miss is that every cost except the $125 counseling fee finances into the loan. For the majority of seniors considering a HECM, the actual cash required to close is under $200.
            </p>

            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              The decision to finance costs or pay them in cash depends on your priorities. Financing preserves your savings; paying in cash maximizes your available proceeds and credit line. Either approach is valid, and I walk every borrower through both scenarios with exact numbers before they decide. For a side-by-side comparison of all equity access options, see our <Link href="/blog/reverse-mortgage-alternatives-2026" className="text-blue-600 hover:underline">reverse mortgage alternatives guide</Link> or explore <Link href="/blog/reverse-mortgage-payout-options-2026" className="text-blue-600 hover:underline">HECM payout options</Link> to understand how you receive your proceeds after costs.
            </p>
          </div>

          {/* CTA Block */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Get Your Personalized HECM Cost Breakdown</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Every reverse mortgage is different. I will provide an itemized closing cost estimate based on your home value, location, and goals &mdash; with access to 200+ lenders to find the best fee structure available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  <FileText className="w-5 h-5 mr-2" />
                  Request Cost Estimate
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
        </section>

        {/* Internal Links Hub */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Related Reverse Mortgage Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/reverse-mortgage-complete-guide-2026" className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <Home className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700 hover:text-blue-600">Complete Reverse Mortgage Guide 2026</span>
            </Link>
            <Link href="/blog/reverse-mortgage-calculator-2026" className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <Calculator className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700 hover:text-blue-600">Reverse Mortgage Calculator 2026</span>
            </Link>
            <Link href="/blog/proprietary-reverse-mortgage-2026" className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <DollarSign className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700 hover:text-blue-600">Proprietary Reverse Mortgage Programs</span>
            </Link>
            <Link href="/blog/reverse-mortgage-payout-options-2026" className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700 hover:text-blue-600">HECM Payout Options Explained</span>
            </Link>
            <Link href="/blog/reverse-mortgage-alternatives-2026" className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700 hover:text-blue-600">Reverse Mortgage Alternatives</span>
            </Link>
            <Link href="/blog/hecm-for-purchase-2026" className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <Home className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700 hover:text-blue-600">HECM for Purchase Guide 2026</span>
            </Link>
            <Link href="/blog/reverse-mortgage-myths-debunked-2026" className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700 hover:text-blue-600">Reverse Mortgage Myths Debunked</span>
            </Link>
            <Link href="/blog/hecm-counseling-requirements-2026" className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700 hover:text-blue-600">HECM Counseling Requirements</span>
            </Link>
          </div>
        </section>

        {/* Footer Disclosure */}
        <footer className="border-t border-slate-200 pt-8 mt-12">
          <div className="bg-slate-50 rounded-xl p-6 text-sm text-slate-500 leading-relaxed">
            <p className="mb-3">
              <strong className="text-slate-700">Mo Abdel</strong> | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443
            </p>
            <p className="mb-3">
              Licensed in: CA, WA
            </p>
            <p className="mb-3">
              Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Not all borrowers will qualify. Reverse mortgage information is not provided by, nor is it approved by, the Federal Housing Administration (FHA), the Department of Housing and Urban Development (HUD), or any other government agency. Information is for educational purposes only and does not constitute financial, tax, or legal advice. Contact a licensed loan officer for personalized guidance.
            </p>
            <p className="text-xs text-slate-400">
              Published: February 25, 2026 | Category: Reverse Mortgage | Last Updated: February 25, 2026
            </p>
          </div>
        </footer>

      </article>
    </div>
  );
}
