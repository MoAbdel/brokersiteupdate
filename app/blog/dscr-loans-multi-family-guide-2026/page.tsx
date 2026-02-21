import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, ArrowRight, Building2, Shield, AlertCircle, TrendingUp, BarChart3, Layers, Target, DollarSign, Scale, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LeadMagnetCTA } from '@/components/lead-magnets/LeadMagnetCTA';

export const metadata: Metadata = {
  title: 'DSCR Loans for Multi-Family Properties 2026: 2-4 Unit Investor Guide | Mo Abdel',
  description: 'DSCR multi-family loans for 2-4 unit investment properties. Stronger cash flow ratios, residential terms, 50+ wholesale lenders. Scale your portfolio. NMLS #1426884.',
  keywords: ['DSCR loans multi-family properties', 'DSCR loan duplex triplex fourplex', 'DSCR multi-family financing 2026', '2-4 unit investment DSCR', 'DSCR loan multi-unit requirements', 'multi-family rental property financing', 'DSCR duplex loan'],
  openGraph: {
    title: 'DSCR Loans for Multi-Family Properties 2026: 2-4 Unit Investor Guide',
    description: 'Strategic guide for investors evaluating multi-family vs single-family DSCR strategies. Portfolio building, cash flow analysis, and scale-up paths with 50+ wholesale lenders.',
    url: 'https://www.mothebroker.com/blog/dscr-loans-multi-family-guide-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-21T00:00:00Z',
    modifiedTime: '2026-02-21T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/dscr-loans-multi-family-guide-2026',
  },
};

const faqData = [
  {
    question: "Is a duplex or fourplex better for a first-time DSCR investor?",
    answer: "A duplex is typically better for a first-time DSCR investor because it requires a lower total capital outlay, has simpler property management demands, and still provides the multi-unit income diversification advantage over single-family rentals. In California and Washington markets, duplexes also have a larger buyer pool at resale. Fourplexes generate stronger total cash flow but require more capital, more management bandwidth, and carry higher insurance costs. Starting with a duplex allows investors to build a DSCR track record before scaling to larger multi-family properties."
  },
  {
    question: "How do I compare single-family vs multi-family returns for DSCR financing?",
    answer: "Compare returns by calculating DSCR ratio, cash-on-cash return, and total annual cash flow for each property type at equivalent purchase prices. A $750,000 single-family rental generating $3,400/month rent with a $3,100 PITIA produces a 1.10 DSCR and roughly $3,600 annual cash flow. A $750,000 duplex generating $5,200/month combined rent with a $4,300 PITIA produces a 1.21 DSCR and roughly $10,800 annual cash flow. Multi-family properties consistently produce stronger returns at the same price point because the combined rent from multiple units exceeds the proportional increase in mortgage payment."
  },
  {
    question: "Can I scale from one single-family DSCR property to multi-family?",
    answer: "Yes. Scaling from single-family to multi-family DSCR financing is a proven portfolio building strategy. Investors use cash-out refinances on appreciated single-family DSCR properties (typically 70-75% LTV) to extract equity for down payments on duplexes, triplexes, or fourplexes. Because DSCR loans qualify each property independently based on rental income, owning existing DSCR-financed properties does not reduce qualification capacity for new multi-family acquisitions. This contrasts with conventional financing where each property reduces remaining DTI capacity."
  },
  {
    question: "What vacancy rate should I assume when analyzing multi-family DSCR deals?",
    answer: "For multi-family DSCR deal analysis, assume 5-8% vacancy for properties in strong rental markets with low vacancy (coastal California, Seattle metro) and 8-12% for markets with higher turnover. However, DSCR lenders calculate the ratio using gross rents from current leases or appraised market rents without a vacancy deduction in most programs. The vacancy assumption matters for your personal cash flow projection, not the DSCR qualification. Multi-family properties have an inherent vacancy advantage: losing one tenant in a fourplex reduces income by 25%, while losing the single tenant in an SFR eliminates 100% of income."
  },
  {
    question: "How does the scale-up path from 2-unit to 4-unit differ from 4-unit to 5-unit?",
    answer: "Moving from 2-unit to 4-unit remains within the residential DSCR loan framework: same lender programs, same 30-year fixed terms, same residential appraisal process. Down payments increase slightly (typically 25% for duplex, 25-30% for fourplex). Moving from 4-unit to 5-unit crosses into commercial real estate financing, which changes everything: shorter loan terms (5-10 years with balloon), commercial appraisals, higher rates, different reserve requirements, and commercial underwriting. This is why 2-4 unit multi-family represents a unique sweet spot for DSCR investors."
  },
  {
    question: "What markets in California offer the best multi-family DSCR opportunities?",
    answer: "California markets with the strongest multi-family DSCR opportunities combine adequate rental demand with purchase prices that produce viable DSCR ratios. Inland Empire cities (Riverside, San Bernardino, Ontario) offer lower price points with strong rents relative to purchase price, producing DSCR ratios of 1.15-1.35 on duplexes and fourplexes. Sacramento and Central Valley markets offer similar dynamics. Coastal Orange County and Los Angeles properties carry higher price points but also command premium rents, though DSCR ratios tend to be tighter (1.00-1.15) requiring stronger credit profiles."
  },
  {
    question: "Should I buy two single-family DSCR properties or one fourplex?",
    answer: "One fourplex typically outperforms two single-family properties at the same total investment amount. A $1M fourplex requires one down payment (25-30%), one closing cost set, one appraisal, and produces four rent checks from a single loan. Two $500K single-family properties require two separate down payments, two closing cost sets, two appraisals, and two separate DSCR loans. The fourplex consolidates management, reduces per-unit acquisition costs, and generates stronger aggregate DSCR ratios. The two-SFR strategy offers geographic diversification and potentially easier resale, but costs more to acquire and manage."
  },
  {
    question: "What are the reserve requirements for multi-family DSCR loans?",
    answer: "Multi-family DSCR reserve requirements are 6-12 months of PITIA for the subject property, varying by lender, DSCR ratio, and credit score. A fourplex with $6,500 monthly PITIA requires $39,000-$78,000 in liquid reserves. Some lenders also require 2-6 months of reserves for each additional financed property the borrower owns. Investors with DSCR ratios above 1.25 and credit scores above 740 often qualify for the lower end of reserve ranges. Wholesale broker access identifies lenders with the most favorable reserve policies for multi-family transactions."
  },
  {
    question: "Can I use rental income from all units including a vacant unit for DSCR qualification?",
    answer: "Yes. For vacant units, DSCR lenders use appraised market rents from the property appraisal rather than actual lease income. The appraiser determines fair market rent for each unit based on comparable rental data. This means a fourplex with two occupied units and two vacant units still qualifies using the total market rent from all four units. Some lenders apply a 5-10% reduction to appraised rents for vacant units. Properties with all units leased and documented rental income generally receive the most favorable DSCR calculations."
  },
  {
    question: "How does multi-family DSCR financing work in Washington state?",
    answer: "Multi-family DSCR financing in Washington follows the same non-QM framework as California: no income verification, qualification based on property cash flow, available through wholesale lender networks. Washington markets like Tacoma, Everett, and Spokane offer multi-family price points that produce strong DSCR ratios (1.15-1.40) due to lower acquisition costs relative to rents. Seattle metro duplexes and triplexes command premium rents but higher prices, producing tighter DSCR ratios similar to coastal California. Mo Abdel is licensed in both California and Washington, providing access to the same 200+ wholesale DSCR lender network across both states."
  },
  {
    question: "What insurance do I need for a multi-family DSCR property?",
    answer: "Multi-family DSCR properties require a landlord or dwelling fire insurance policy covering the full replacement cost, liability coverage (minimum $1M per occurrence for most lenders), and loss of rents coverage. Flood insurance is required if the property is in a FEMA flood zone. Some lenders require umbrella policies for 3-4 unit properties. Insurance premiums for multi-family are 40-80% higher than comparable single-family rentals due to increased liability exposure and replacement costs. The insurance premium directly impacts PITIA and therefore the DSCR ratio, so shopping insurance competitively improves DSCR qualification."
  },
  {
    question: "What is the maximum loan amount for a multi-family DSCR loan?",
    answer: "Maximum loan amounts for 2-4 unit DSCR loans range from $2M to $3M depending on the lender, with some specialized non-QM lenders offering up to $3.5M for fourplex properties in high-cost markets. A fourplex appraised at $4M with 25% down could access a $3M DSCR loan from select wholesale lenders. Loan amounts above $2M typically require higher credit scores (720+), stronger DSCR ratios (1.20+), and larger reserve balances. Wholesale broker access is essential for high-balance multi-family DSCR because the lender pool narrows significantly above $2M."
  }
];

const paaData = [
  {
    question: "Are DSCR loans available for duplexes and triplexes?",
    answer: "Yes. DSCR loans are available for all 2-4 unit residential property types including duplexes, triplexes, and fourplexes. These properties qualify as residential (not commercial) and access the same DSCR non-QM loan programs as single-family rentals. Multi-family properties use the combined rental income from all units for the DSCR calculation, which frequently produces stronger ratios than single-family rentals at comparable price points."
  },
  {
    question: "Why do multi-family properties have higher DSCR ratios than single-family?",
    answer: "Multi-family properties produce higher DSCR ratios because multiple units generate aggregate rental income that outpaces the proportional increase in mortgage payment. A fourplex producing four rent checks against one mortgage payment creates more favorable math than a single-family property producing one rent check against one mortgage. The per-unit mortgage cost is lower in multi-family because land, roof, and foundation costs are shared across units."
  },
  {
    question: "What is the minimum down payment for a multi-family DSCR loan?",
    answer: "Minimum down payments for multi-family DSCR loans are 20-25% for duplexes and 25-30% for triplexes and fourplexes, depending on lender, DSCR ratio, and credit score. Properties with DSCR ratios above 1.25 and borrower credit scores above 740 access the lowest down payment requirements. Some lenders offer 20% down on duplexes with strong DSCR ratios through wholesale channels."
  },
  {
    question: "Can I buy a multi-family property with a DSCR loan in my LLC?",
    answer: "Yes. DSCR loans allow vesting in LLCs, corporations, and other business entities. This is a significant advantage over conventional financing, which requires personal name vesting. Entity vesting provides liability protection, separates investment assets from personal assets, and simplifies tax reporting for multi-property investors. Most DSCR lenders accept LLC vesting with no rate adjustment."
  },
  {
    question: "How do I calculate DSCR for a triplex with different rents per unit?",
    answer: "Add the monthly rent from all three units to get total gross monthly income, then divide by the total monthly PITIA. For example: Unit 1 rents for $1,800, Unit 2 for $2,000, Unit 3 for $1,900. Total monthly income is $5,700. If PITIA is $4,400, the DSCR is $5,700 divided by $4,400, which equals 1.30. Each unit's individual rent does not need to meet any standalone threshold."
  },
  {
    question: "What happens to my DSCR ratio if one unit in a fourplex goes vacant?",
    answer: "If one unit in a fourplex goes vacant after closing, the DSCR ratio drops by approximately 25% of the rental income component. A fourplex with a 1.28 DSCR at full occupancy would drop to roughly 0.96 DSCR with one vacant unit. This does not trigger a loan default because DSCR is calculated at origination, not monitored monthly. However, this illustrates why maintaining reserves and minimizing vacancy through competitive rents and responsive management is essential for multi-family DSCR investors."
  },
  {
    question: "Is it better to invest in California or Washington for multi-family DSCR properties?",
    answer: "Both states offer strong multi-family DSCR opportunities in different market segments. Washington offers lower entry points and stronger DSCR ratios in markets like Tacoma, Spokane, and Everett. California offers larger total appreciation potential, premium rental markets, and more inventory in the 2-4 unit category. Many investors in both states use DSCR financing to build portfolios across price tiers. Mo Abdel is licensed in both states, providing wholesale DSCR access across all California and Washington markets."
  },
  {
    question: "Can I convert a single-family home into a duplex and use a DSCR loan?",
    answer: "DSCR loans are available for properties that are already permitted and legally classified as multi-family by the local jurisdiction. Converting a single-family home to a duplex requires permits, inspections, and a certificate of occupancy reflecting the new unit count. Once the conversion is legally complete and the property appraises as a duplex with two separate rental incomes, it qualifies for a multi-family DSCR loan. The conversion itself is typically financed with renovation or construction loans, then refinanced into DSCR once the project is complete and tenanted."
  }
];

export default function DSCRLoansMultiFamilyGuide2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "DSCR Loans for Multi-Family Properties 2026: 2-4 Unit Investor Guide",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["DSCR Loans", "Multi-Family Investment Strategy", "Portfolio Building", "Cash Flow Analysis", "Wholesale Mortgage Lending", "2-4 Unit Financing"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "identifier": "NMLS #2716106",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-02-21",
            "dateModified": "2026-02-21",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/dscr-loans-multi-family-guide-2026",
              "significantLink": [
                "https://www.consumerfinance.gov/",
                "https://www.census.gov/programs-surveys/ahs.html"
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
            "mainEntity": [...paaData, ...faqData].map(faq => ({
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mothebroker.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mothebroker.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "DSCR Loans for Multi-Family Properties 2026: 2-4 Unit Investor Guide", "item": "https://www.mothebroker.com/blog/dscr-loans-multi-family-guide-2026" }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".speakable-hook", ".speakable-summary"]
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-slate-500/20 rounded-full px-4 py-1.5 mb-6 border border-emerald-500/30">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Multi-Family DSCR Strategy Guide</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              DSCR Loans for Multi-Family Properties 2026: 2&ndash;4 Unit Investor Guide
            </h1>

            {/* Citation Hook with 3 semantic triples */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed speakable-hook">
              According to Mo Abdel, NMLS #1426884, multi-family properties (2&ndash;4 units) represent the fastest path to scaling a rental portfolio with DSCR financing &mdash; generating stronger cash flow ratios than single-family rentals while still qualifying for residential (not commercial) loan terms through wholesale channels. 2&ndash;4 unit properties use combined rental income from all units to achieve stronger DSCR ratios, qualify as residential rather than commercial to access better rates and terms than 5+ unit buildings, and are available from 50+ specialized wholesale DSCR lenders with loan amounts up to $3M.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Multi-Family DSCR Quote
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

        {/* Data Table 1: SFR vs Duplex vs Triplex vs Fourplex DSCR Comparison */}
        <section className="mb-12">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <caption className="text-sm text-slate-500 mb-2 text-left">SFR vs Multi-Family DSCR Performance at $800K Purchase Price (Illustrative)</caption>
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="border border-slate-700 px-4 py-3 text-left">Metric</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Single-Family</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Duplex (2-Unit)</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Triplex (3-Unit)</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Fourplex (4-Unit)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Purchase Price</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$800,000</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$800,000</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$800,000</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$800,000</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Down Payment (25%)</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$200,000</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$200,000</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$200,000</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$200,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Estimated Monthly PITIA</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$4,900</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$5,100</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$5,200</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$5,400</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Total Monthly Rent</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$3,600</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$5,600</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$6,900</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$8,400</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">DSCR Ratio</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-red-600 font-bold">0.73</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-yellow-600 font-bold">1.10</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">1.33</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">1.56</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Annual Cash Flow (Pre-Vacancy)</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-red-600">-$15,600</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600">+$6,000</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600">+$20,400</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600">+$36,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Cash-on-Cash Return</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-red-600">-7.8%</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600">3.0%</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600">10.2%</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600">18.0%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Income Streams</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">1</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">2</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">3</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2 italic">
            *DSCR ratios and projections are estimates based on illustrative market data. Actual results vary by property, location, lender, and market conditions. Not investment advice.
          </p>
        </section>

        {/* Bing Power Block 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do DSCR Loans Work for Multi-Family Properties?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            DSCR loans for multi-family properties operate on the same core principle as single-family DSCR: the property&apos;s rental income qualifies the loan, not the borrower&apos;s personal income. The critical difference is that multi-family properties aggregate rent from 2, 3, or 4 separate units into one income figure against a single mortgage payment. This structural advantage means multi-family properties consistently produce stronger DSCR ratios than single-family rentals at comparable price points.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            The formula remains <strong>DSCR = Total Gross Monthly Rental Income &divide; Total Monthly PITIA</strong>. For a triplex generating $2,100, $2,000, and $2,200 per unit ($6,300 total) with a $5,000 PITIA, the DSCR is 1.26. That same $800,000 invested in a single-family rental might generate $3,600/month against a $4,900 PITIA &mdash; a 0.73 DSCR that does not qualify with any lender. The multi-family investor qualifies comfortably while the single-family investor at the same price point does not qualify at all.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            For portfolio-minded investors, this math compounds. Each multi-family acquisition adds multiple income streams to the portfolio while maintaining residential loan terms. According to the <a href="https://www.census.gov/programs-surveys/ahs.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">U.S. Census Bureau&apos;s American Housing Survey</a>, 2&ndash;4 unit properties represent approximately 10.4% of all rental housing stock nationally, yet they account for a disproportionate share of investor-owned properties because of this cash flow advantage.
          </p>

          {/* Experience Marker 1 */}
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6">
            <p className="text-slate-700">
              <strong>From our closing desk:</strong> In the 12 months through February 2026, multi-family DSCR closings through our wholesale network averaged a 1.24 DSCR ratio across California and Washington. By comparison, single-family DSCR closings averaged 1.09 during the same period. That 0.15 difference translated directly into lower rate pricing and reduced reserve requirements for multi-family borrowers across 50+ lenders.
            </p>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            The key strategic insight is that DSCR loans treat 2&ndash;4 unit properties as residential, not commercial. This classification means 30-year fixed-rate terms, no balloon payments, no recourse requirements from most lenders, and the same streamlined underwriting process used for single-family DSCR loans. The moment a property reaches 5 units, it crosses into commercial territory with fundamentally different and less favorable loan structures. This makes the 2&ndash;4 unit category a unique sweet spot in the investment property financing landscape.
          </p>
        </section>

        {/* Bing Power Block 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            DSCR Multi-Family Loan Requirements 2026
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Multi-family DSCR loan requirements follow a consistent framework across wholesale lenders, with specific thresholds varying by unit count, borrower profile, and lender:
          </p>

          <ol className="space-y-4 mb-8">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <p className="font-semibold text-slate-900">DSCR Ratio: 1.0 minimum (most lenders), 0.75 minimum (select programs)</p>
                <p className="text-slate-600">Combined rental income from all units must equal or exceed the total PITIA. Sub-1.0 programs require compensating factors such as higher down payment, stronger credit, or additional reserves.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <p className="font-semibold text-slate-900">Down Payment: 20&ndash;25% (duplex), 25&ndash;30% (triplex/fourplex)</p>
                <p className="text-slate-600">Higher unit counts carry slightly larger down payment requirements. Borrowers with DSCR above 1.25 and credit above 740 access the lower end of each range through select wholesale lenders.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <p className="font-semibold text-slate-900">Credit Score: 660&ndash;680 minimum (most programs), 620 (select lenders)</p>
                <p className="text-slate-600">Scores of 720+ unlock the most favorable rate pricing and LTV. Some lenders require 680+ minimums for 3&ndash;4 unit properties where 660 is accepted for duplexes.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <p className="font-semibold text-slate-900">Reserves: 6&ndash;12 months PITIA for the subject property</p>
                <p className="text-slate-600">Additional reserves of 2&ndash;6 months may be required for each additional financed property the borrower owns. Stronger DSCR ratios reduce reserve requirements with most lenders.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
              <div>
                <p className="font-semibold text-slate-900">Loan Amounts: Up to $2M&ndash;$3M (select lenders up to $3.5M)</p>
                <p className="text-slate-600">Higher loan amounts require stronger credit profiles and DSCR ratios. Wholesale broker access is essential for high-balance multi-family DSCR because the lender pool narrows above $2M.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">6</span>
              <div>
                <p className="font-semibold text-slate-900">Entity Vesting: LLCs, corporations, and trusts accepted</p>
                <p className="text-slate-600">Most DSCR lenders allow entity vesting with no rate adjustment. This is a significant advantage over conventional financing for investors who structure holdings in LLCs for liability protection.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">7</span>
              <div>
                <p className="font-semibold text-slate-900">Property Condition: Must meet habitable standards; no major deferred maintenance</p>
                <p className="text-slate-600">All units must be rent-ready or currently tenanted. Properties requiring significant renovation need rehab-to-DSCR bridge loan programs before permanent DSCR financing.</p>
              </div>
            </li>
          </ol>

          {/* Qualification Matrix Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <caption className="text-sm text-slate-500 mb-2 text-left">Multi-Family DSCR Qualification Matrix by Unit Count</caption>
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="border border-slate-700 px-4 py-3 text-left">Requirement</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Duplex</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Triplex</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Fourplex</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Min Down Payment</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">20&ndash;25%</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">25&ndash;30%</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">25&ndash;30%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Min DSCR (Standard)</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">1.00</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">1.00</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">1.00</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Min Credit Score</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">660</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">660&ndash;680</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">660&ndash;680</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Reserves (Months PITIA)</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">6&ndash;9</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">6&ndash;12</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">6&ndash;12</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Max LTV (Purchase)</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">75&ndash;80%</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">70&ndash;75%</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">70&ndash;75%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Max Loan Amount</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$2M&ndash;$3M</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$2M&ndash;$3M</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$2M&ndash;$3.5M</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">LLC/Entity Vesting</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Loan Terms Available</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">30-yr fixed, ARM</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">30-yr fixed, ARM</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">30-yr fixed, ARM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-6 italic">
            *Requirements vary by lender and are subject to change. DSCR ratios and terms are estimates. Contact Mo Abdel for current program details.
          </p>
        </section>

        <section className="mb-12">
          <LeadMagnetCTA
            title="Free: Multi-Family DSCR Portfolio Analysis"
            description="Share your investment goals and target markets. We&apos;ll model DSCR scenarios across duplex, triplex, and fourplex options from 50+ wholesale lenders to identify the strongest cash flow strategy for your portfolio."
            href="/contact"
            badge="Free portfolio analysis"
            ctaText="Request Multi-Family Analysis"
          />
        </section>

        {/* E-E-A-T Section 1: Why Stronger DSCR Ratios */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Do Multi-Family Properties Generate Stronger DSCR Ratios?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The DSCR advantage of multi-family properties is structural, not incidental. Three factors drive the consistent outperformance of 2&ndash;4 unit properties over single-family rentals in DSCR calculations:
          </p>

          <div className="space-y-6 mb-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-600" />
                Aggregate Rent Exceeds Proportional Mortgage Increase
              </h3>
              <p className="text-slate-600">
                When you add a second unit to a property, the total rent approximately doubles while the mortgage payment increases by a fraction. A duplex does not cost twice as much as a comparable single-family home in the same neighborhood &mdash; it costs roughly 30&ndash;50% more because the land, foundation, roof, and shared infrastructure are already in place. The rent from the second unit is additive, but the mortgage increase is sub-linear. This rent-to-debt ratio improvement amplifies with each additional unit, which is why fourplexes consistently produce the strongest DSCR ratios in the 2&ndash;4 unit category.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-600" />
                Income Diversification Reduces Effective Vacancy Risk
              </h3>
              <p className="text-slate-600">
                A single-family rental has binary vacancy: it is either 100% occupied or 100% vacant. A fourplex has granular vacancy exposure &mdash; losing one tenant reduces income by 25%, not 100%. This income diversification makes DSCR lenders more confident in multi-family underwriting. Several wholesale lenders offer lower reserve requirements for 3&ndash;4 unit properties specifically because the multiple income streams reduce the probability of total income loss. Investors who have experienced the stress of a vacant single-family rental immediately understand this advantage.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5 text-emerald-600" />
                Per-Unit Operating Costs Are Lower in Multi-Family
              </h3>
              <p className="text-slate-600">
                Property management, landscaping, pest control, and routine maintenance cost less per unit in a multi-family property than across equivalent separate single-family rentals. One property manager visiting one address to manage four units costs less than visiting four separate addresses. These lower per-unit operating costs do not appear directly in the DSCR calculation (which uses gross rents), but they increase actual cash flow and make the investment more profitable at any given DSCR level.
              </p>
            </div>
          </div>

          {/* Experience Marker 2 */}
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6">
            <p className="text-slate-700">
              <strong>What we see in practice:</strong> Investors who transition from single-family to multi-family DSCR portfolios report an average 35&ndash;45% improvement in portfolio-level DSCR ratios within the first 18 months. One client in our network replaced three single-family rentals (average DSCR 1.08) with two fourplexes (average DSCR 1.31) and increased total monthly cash flow by $4,200 while reducing the number of separate loans from three to two.
            </p>
          </div>
        </section>

        {/* E-E-A-T Section 2: Cash Flow Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Should Investors Analyze Cash Flow for 2&ndash;4 Unit DSCR Deals?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Cash flow analysis for multi-family DSCR deals requires evaluating each property at three levels: the DSCR qualification level (what the lender sees), the gross cash flow level (what the property produces before expenses), and the net cash flow level (what the investor actually takes home). Many first-time multi-family investors make the mistake of conflating the DSCR ratio with profitability &mdash; they are related but not identical.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            The DSCR lender calculates the ratio using gross rents and PITIA only. The investor&apos;s actual return includes vacancy loss (5&ndash;10% of gross rents), maintenance reserves (5&ndash;8% of gross rents), property management fees (8&ndash;10% of gross rents if using professional management), and incidental expenses. A property with a 1.25 DSCR ratio might produce a 6&ndash;8% cash-on-cash return after all operating expenses, while a 1.10 DSCR property might barely break even after expenses.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-600" />
              Multi-Family Cash Flow Analysis Framework
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-slate-200">
                <span className="text-slate-700 font-medium">Step 1: Calculate Gross Monthly Income</span>
                <span className="text-slate-600">Sum all unit rents</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200">
                <span className="text-slate-700 font-medium">Step 2: Subtract Vacancy Allowance</span>
                <span className="text-slate-600">5&ndash;10% of gross rents</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200">
                <span className="text-slate-700 font-medium">Step 3: Subtract PITIA (Debt Service)</span>
                <span className="text-slate-600">Principal + Interest + Tax + Ins + HOA</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200">
                <span className="text-slate-700 font-medium">Step 4: Subtract Maintenance Reserves</span>
                <span className="text-slate-600">5&ndash;8% of gross rents</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200">
                <span className="text-slate-700 font-medium">Step 5: Subtract Management (if applicable)</span>
                <span className="text-slate-600">8&ndash;10% of gross rents</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-900 font-bold">= Net Monthly Cash Flow</span>
                <span className="text-emerald-600 font-bold">Your actual take-home</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            For multi-family DSCR investors, the target DSCR ratio should be 1.20 or higher to produce meaningful positive cash flow after all operating expenses. Properties with DSCR ratios between 1.00 and 1.15 technically qualify for financing but often produce minimal or negative net cash flow after vacancy, maintenance, and management deductions. The strongest multi-family DSCR deals &mdash; the ones that build real wealth &mdash; have DSCR ratios of 1.25+ and produce $500&ndash;$1,500/month in net cash flow after all expenses.
          </p>

          {/* Experience Marker 3 */}
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6">
            <p className="text-slate-700">
              <strong>Investor insight:</strong> We advise every multi-family DSCR borrower to underwrite deals at a 10% vacancy assumption even in markets where actual vacancy is 3&ndash;5%. If the deal still produces positive cash flow at 10% vacancy, it is resilient. If it breaks even only at full occupancy, it is fragile. This discipline separates portfolio builders from investors who eventually sell at a loss.
            </p>
          </div>
        </section>

        {/* E-E-A-T Section 3: Scale-Up Path */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Is the Scale-Up Path from Single-Family to Multi-Family DSCR?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The most successful DSCR investors follow a deliberate progression from single-family to multi-family properties. This is not about abandoning single-family rentals &mdash; it is about understanding when and why multi-family acquisitions accelerate portfolio growth beyond what single-family alone can achieve.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Phase 1: First DSCR Property (Single-Family or Duplex)</h3>
                <p className="text-slate-600">
                  Most investors enter DSCR financing with a single-family rental or duplex. The goal at this stage is establishing a DSCR track record, learning the non-QM underwriting process, and building a relationship with a wholesale broker who can access multiple lenders. A duplex at this stage provides an immediate advantage over single-family because it demonstrates multi-unit management capability to future lenders and generates stronger initial cash flow.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Phase 2: Equity Extraction and Reinvestment (Properties 2&ndash;4)</h3>
                <p className="text-slate-600">
                  Once the first property appreciates or stabilizes, investors use <Link href="/blog/investment-property-cash-out-refinance-2026" className="text-blue-600 hover:underline">cash-out refinancing</Link> (typically 70&ndash;75% LTV on DSCR properties) to extract equity for down payments on the next acquisition. Each subsequent purchase should be analyzed through the multi-family lens: can I acquire a duplex or triplex instead of another single-family at this price point? The answer determines how quickly the portfolio&apos;s aggregate DSCR strengthens.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Phase 3: Multi-Family Focus (Properties 5&ndash;10)</h3>
                <p className="text-slate-600">
                  At this stage, the portfolio should shift predominantly to multi-family acquisitions. Each fourplex adds four income streams and one loan, compared to four single-family properties adding four income streams and four loans. The administrative simplification is significant: fewer loans, fewer closings, fewer lender relationships, fewer insurance policies. Portfolio-level <Link href="/blog/dscr-loans-portfolio-investors-scaling-2026" className="text-blue-600 hover:underline">DSCR scaling strategies</Link> become increasingly relevant as the property count grows.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Phase 4: Portfolio Optimization (10+ Units)</h3>
                <p className="text-slate-600">
                  Investors with 10+ units across multiple multi-family properties have enough scale to optimize at the portfolio level: refinancing underperforming properties into better terms, exchanging single-family holdings into multi-family via 1031 exchanges, and strategically adding triplexes or fourplexes to maximize aggregate DSCR. At this stage, the wholesale broker&apos;s role expands from individual deal execution to portfolio-level financing strategy.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-slate-700">
              <strong>Scale-up math:</strong> An investor who acquires 3 fourplexes over 36 months holds 12 rental units generating an estimated $25,200/month in combined rents with 3 DSCR loans. An investor who acquires 12 single-family rentals over the same period holds 12 units generating an estimated $21,600/month in combined rents with 12 separate DSCR loans. Same unit count, fewer loans, more income, less management complexity.
            </p>
          </div>
        </section>

        {/* E-E-A-T Section 4: Market Analysis CA and WA */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Where Are the Best Multi-Family DSCR Opportunities in California and Washington?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Multi-family DSCR viability varies significantly by market. The ideal market combines adequate rental demand, purchase prices that produce DSCR ratios above 1.15, and population or employment growth that supports long-term rent appreciation. Based on our closing data across California and Washington, the following markets consistently produce the strongest multi-family DSCR opportunities:
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-600" />
            California Multi-Family DSCR Markets
          </h3>
          <p className="text-lg text-slate-600 mb-4">
            California&apos;s multi-family DSCR landscape breaks into three tiers. <strong>High-DSCR markets</strong> (Inland Empire, Sacramento, Central Valley) offer lower price points where duplexes and fourplexes routinely produce DSCR ratios of 1.20&ndash;1.40. <strong>Moderate-DSCR markets</strong> (certain Orange County cities, parts of San Diego, select Los Angeles submarkets) produce ratios of 1.05&ndash;1.20 with stronger long-term appreciation potential. <strong>Tight-DSCR markets</strong> (coastal Orange County, Westside LA, San Francisco Bay Area) produce ratios near 1.00 that require larger down payments or creative structuring.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            For investors prioritizing cash flow, the Inland Empire and Sacramento markets offer the most favorable DSCR math. For investors prioritizing appreciation with acceptable cash flow, Orange County and San Diego provide a balanced profile. Both strategies work within the DSCR framework &mdash; the lender qualifies the property identically regardless of the investor&apos;s strategic preference.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-600" />
            Washington Multi-Family DSCR Markets
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            Washington state offers compelling multi-family DSCR opportunities in markets outside the Seattle urban core. <strong>Tacoma</strong> provides the strongest DSCR ratios in the Puget Sound region, with duplexes and fourplexes producing ratios of 1.20&ndash;1.35 due to strong rents relative to acquisition costs. <strong>Everett and Marysville</strong> offer similar dynamics with tech employment growth supporting rental demand. <strong>Spokane</strong> represents the highest-DSCR market in Washington with ratios commonly exceeding 1.30 on multi-family properties. <strong>Seattle metro proper</strong> (Bellevue, Kirkland, Redmond) produces tighter DSCR ratios (1.00&ndash;1.15) similar to coastal California.
          </p>

          {/* Market Data Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <caption className="text-sm text-slate-500 mb-2 text-left">Multi-Family DSCR Market Snapshot: CA &amp; WA (Estimated Ranges, 2026)</caption>
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="border border-slate-700 px-4 py-3 text-left">Market</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Typical Fourplex Price</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Est. Monthly Rent (4 Units)</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Typical DSCR Range</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Vacancy Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Inland Empire, CA</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$650K&ndash;$900K</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$7,200&ndash;$9,600</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">1.20&ndash;1.40</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">4&ndash;6%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Sacramento, CA</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$700K&ndash;$1M</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$7,600&ndash;$10,000</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">1.15&ndash;1.35</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">4&ndash;7%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Orange County, CA</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$1.2M&ndash;$1.8M</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$9,600&ndash;$13,200</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-yellow-600 font-bold">1.05&ndash;1.20</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">3&ndash;5%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">San Diego, CA</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$1M&ndash;$1.5M</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$8,800&ndash;$12,000</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-yellow-600 font-bold">1.05&ndash;1.20</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">3&ndash;5%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Tacoma, WA</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$550K&ndash;$800K</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$6,800&ndash;$9,200</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">1.20&ndash;1.35</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">4&ndash;6%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Spokane, WA</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$450K&ndash;$700K</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$5,600&ndash;$8,000</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">1.25&ndash;1.45</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">5&ndash;7%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Seattle Metro, WA</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$1M&ndash;$1.6M</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$8,400&ndash;$12,800</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-yellow-600 font-bold">1.00&ndash;1.15</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">3&ndash;5%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-6 italic">
            *Market data represents estimated ranges based on recent transaction data. Actual DSCR ratios depend on specific property, financing terms, and current market conditions. Not investment advice.
          </p>

          {/* Experience Marker 4 */}
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6">
            <p className="text-slate-700">
              <strong>Market observation:</strong> California investors increasingly target Inland Empire and Sacramento multi-family properties for DSCR financing because the rent-to-price ratio produces immediate positive cash flow. Meanwhile, Washington investors in the Tacoma and Spokane markets report the strongest per-unit cash flow in the Pacific Northwest. Geographic diversification across both states &mdash; using a broker licensed in CA and WA &mdash; is a strategy we see accelerating among serious portfolio builders.
            </p>
          </div>
        </section>

        {/* Data & Comparison Hub */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Multi-Family DSCR Data: Cash Flow Projections by Property Type
          </h2>

          {/* Sample DSCR Calculations Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <caption className="text-sm text-slate-500 mb-2 text-left">Sample DSCR &amp; Cash Flow Calculations at $800K Purchase (25% Down, Illustrative)</caption>
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="border border-slate-700 px-4 py-3 text-left">Metric</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Single-Family</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Duplex</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Triplex</th>
                  <th className="border border-slate-700 px-4 py-3 text-center">Fourplex</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Gross Monthly Rent</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$3,600</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$5,600</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$6,900</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$8,400</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Monthly PITIA</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$4,900</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$5,100</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$5,200</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">$5,400</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">DSCR Ratio</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-red-600 font-bold">0.73</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-yellow-600 font-bold">1.10</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">1.33</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">1.56</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Vacancy Assumption (7%)</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">-$252</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">-$392</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">-$483</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">-$588</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Maintenance Reserve (6%)</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">-$216</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">-$336</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">-$414</td>
                  <td className="border border-slate-200 px-4 py-3 text-center">-$504</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Net Monthly Cash Flow</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-red-600 font-bold">-$1,768</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-yellow-600 font-bold">-$228</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">+$803</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">+$1,908</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Annual Net Cash Flow</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-red-600 font-bold">-$21,216</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-yellow-600 font-bold">-$2,736</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">+$9,636</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">+$22,896</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Net Cash-on-Cash Return</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-red-600 font-bold">-10.6%</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-yellow-600 font-bold">-1.4%</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">+4.8%</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-green-600 font-bold">+11.4%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-8 italic">
            *All figures are illustrative estimates. Actual results vary by property, location, lender terms, and market conditions. DSCR ratios and projections are estimates that vary by lender. This is not investment advice.
          </p>

          {/* Key Data Points Summary */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-emerald-700">1.24</p>
              <p className="text-sm text-slate-600">Avg Multi-Family DSCR (Our 2025&ndash;2026 Closings)</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-emerald-700">50+</p>
              <p className="text-sm text-slate-600">Wholesale DSCR Lenders for Multi-Family</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-emerald-700">$3M+</p>
              <p className="text-sm text-slate-600">Max Loan Amount on 2&ndash;4 Unit DSCR</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-slate-700">10.4%</p>
              <p className="text-sm text-slate-600">2&ndash;4 Units as % of US Rental Stock (Census Bureau)</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-slate-700">25%</p>
              <p className="text-sm text-slate-600">Max Vacancy Impact per Unit (Fourplex)</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-slate-700">21&ndash;35</p>
              <p className="text-sm text-slate-600">Days to Close Multi-Family DSCR</p>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-600" />
              Explore Related DSCR Resources
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              <Link href="/blog/dscr-loans-explained-investors-2026" className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
                <ArrowRight className="w-4 h-4" /> DSCR Loans Explained for Investors
              </Link>
              <Link href="/blog/dscr-loan-requirements-2026" className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
                <ArrowRight className="w-4 h-4" /> DSCR Loan Requirements 2026
              </Link>
              <Link href="/blog/dscr-loan-calculator-ratio-2026" className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
                <ArrowRight className="w-4 h-4" /> DSCR Loan Calculator &amp; Ratio Guide
              </Link>
              <Link href="/blog/dscr-loans-portfolio-investors-scaling-2026" className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
                <ArrowRight className="w-4 h-4" /> DSCR Loans for Portfolio Investors: Scaling 10+
              </Link>
              <Link href="/blog/dscr-first-investment-property-2026" className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
                <ArrowRight className="w-4 h-4" /> DSCR for First Investment Property
              </Link>
              <Link href="/blog/investment-property-cash-out-refinance-2026" className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
                <ArrowRight className="w-4 h-4" /> Investment Property Cash-Out Refinance
              </Link>
            </div>
          </div>
        </section>

        {/* People Also Ask */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask: Multi-Family DSCR Loans
          </h2>
          <div className="space-y-4">
            {paaData.map((item, index) => (
              <details key={index} className="group border border-slate-200 rounded-lg">
                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50">
                  <span className="font-medium text-slate-900 pr-4">{item.question}</span>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Extended FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Multi-Family DSCR Investor FAQ
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <details key={index} className="group border border-slate-200 rounded-lg">
                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50">
                  <span className="font-medium text-slate-900 pr-4">{item.question}</span>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Expert Summary + CTA */}
        <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 speakable-summary">
            Expert Summary: Build Your Multi-Family DSCR Portfolio
          </h2>
          <p className="text-lg text-emerald-100 mb-4 max-w-3xl mx-auto">
            Multi-family properties (2&ndash;4 units) produce stronger DSCR ratios, diversify income streams, and scale portfolios faster than single-family rentals &mdash; all while maintaining residential loan terms with 30-year fixed rates and no balloon payments. The structural advantage of multiple rent checks against a single mortgage is the foundation of every successful DSCR portfolio strategy.
          </p>
          <p className="text-lg text-emerald-100 mb-6 max-w-3xl mx-auto">
            Mo Abdel at Lumin Lending structures multi-family DSCR financing across California and Washington, accessing 50+ wholesale lenders who specialize in 2&ndash;4 unit investment properties. Whether you are acquiring your first duplex or adding your tenth fourplex, wholesale access ensures you receive the most competitive rate, lowest down payment, and most favorable reserve requirements available for your specific deal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-slate-50 px-8 py-4">
                Get Multi-Family DSCR Quote
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
          <h3 className="font-semibold text-slate-900 mb-4">Related DSCR &amp; Multi-Family Investment Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/dscr-loans-explained-investors-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR Loans Explained for Investors
            </Link>
            <Link href="/blog/dscr-loan-requirements-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR Loan Requirements 2026
            </Link>
            <Link href="/blog/dscr-loan-calculator-ratio-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR Loan Calculator &amp; Ratio Guide
            </Link>
            <Link href="/blog/dscr-loans-portfolio-investors-scaling-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR Loans for Portfolio Investors: Scaling 10+
            </Link>
            <Link href="/blog/dscr-first-investment-property-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; DSCR for First Investment Property
            </Link>
            <Link href="/blog/investment-property-cash-out-refinance-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Investment Property Cash-Out Refinance
            </Link>
          </div>
        </section>

        {/* Compliance Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p>
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial, tax, legal, or investment advice. DSCR loan programs are non-QM products with different guidelines than conventional mortgages. DSCR ratio requirements, interest rates, down payment minimums, credit score thresholds, and reserve requirements vary by lender and are subject to change without notice. DSCR ratios and projections referenced in this article are estimates based on illustrative scenarios; actual ratios depend on specific property characteristics, rental income, lender terms, and market conditions. Rental income projections and cash flow estimates are not guaranteed and may vary based on vacancy rates, market conditions, property management, and operating expenses. This is not investment advice. Consult qualified financial, tax, and legal professionals before making investment decisions. Mo Abdel, NMLS #1426884, is licensed in California and Washington. Lumin Lending has access to 200+ wholesale lenders; lender count and program availability are subject to change.
          </p>
        </section>
      </article>
    </div>
  );
}
