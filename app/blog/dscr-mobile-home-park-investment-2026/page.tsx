import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DSCR Loans for Mobile Home Park Investments: Financing Guide [2026] | Mo Abdel',
  description: 'DSCR loans for mobile home park investments: lot rent DSCR calculations, pad count requirements, NOI optimization, cap rate analysis for CA and WA markets. No income verification. NMLS #1426884.',
  keywords: ['DSCR loan mobile home park', 'mobile home park financing', 'MHP DSCR loan', 'mobile home park investment loan', 'manufactured housing community financing', 'DSCR mobile home park 2026', 'mobile home park cap rate'],
  openGraph: {
    title: 'DSCR Loans for Mobile Home Park Investments: Financing Guide [2026]',
    description: 'Finance mobile home park acquisitions with DSCR loans. Lot rent income qualification, no W-2s required, 200+ lenders. CA and WA markets.',
    url: 'https://www.mothebroker.com/blog/dscr-mobile-home-park-investment-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-03-11T00:00:00Z',
    modifiedTime: '2026-03-11T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/dscr-mobile-home-park-investment-2026',
  },
};

const faqData = [
  {
    question: "Can I use a DSCR loan to buy a mobile home park?",
    answer: "Yes. DSCR loans finance mobile home park acquisitions based on the property's net operating income from lot rents, not the borrower's personal income or tax returns. Specialized MHP DSCR programs are available through wholesale broker channels with access to 200+ lenders. Minimum pad counts, park infrastructure, and occupancy requirements vary by lender."
  },
  {
    question: "How is DSCR calculated for a mobile home park?",
    answer: "DSCR for a mobile home park equals Net Operating Income divided by Annual Debt Service. NOI includes total lot rent income plus any ancillary revenue (laundry, storage, RV pads) minus operating expenses (management, maintenance, insurance, taxes, utilities). A DSCR of 1.25 means the park generates 25% more income than the annual mortgage payment. Ratios and projections are estimates and vary by lender."
  },
  {
    question: "What is the minimum pad count for a DSCR mobile home park loan?",
    answer: "Most DSCR lenders require a minimum of 10-20 occupied pads for mobile home park financing, though requirements vary significantly by lender. Parks with 30+ pads generally receive more favorable terms and broader lender options. Some niche lenders finance parks with as few as 5 pads through specialized programs accessible via wholesale broker channels."
  },
  {
    question: "Do DSCR lenders treat tenant-owned homes differently from park-owned homes?",
    answer: "Yes. DSCR lenders strongly prefer tenant-owned home (TOH) communities because the park owner collects lot rent without the maintenance liability of owning the structures. Park-owned homes (POH) increase operating expenses and vacancy risk, which reduces NOI and lowers the DSCR ratio. Many lenders cap POH at 20-30% of total units for favorable terms."
  },
  {
    question: "What DSCR ratio do I need for a mobile home park loan?",
    answer: "Most DSCR lenders require a minimum DSCR of 1.20-1.25 for mobile home parks. Parks with a DSCR of 1.25 or higher receive the best rates and terms. Some lenders accept DSCR ratios as low as 1.0 for strong borrower profiles or parks in high-demand markets. DSCR thresholds vary by lender, property condition, and market location."
  },
  {
    question: "Can I finance a mobile home park in an LLC with a DSCR loan?",
    answer: "Yes. Most DSCR lenders allow entity vesting, meaning you can hold the mobile home park and the loan in an LLC, LP, or corporation. LLC vesting is standard practice for MHP investors because it provides liability protection and separates personal assets from business risk. This is a significant advantage over conventional commercial financing."
  },
  {
    question: "What operating expenses are deducted when calculating mobile home park NOI?",
    answer: "Operating expenses deducted from gross income to calculate NOI include property management fees (typically 5-10%), maintenance and repairs, property taxes, insurance, utility costs (water, sewer, electric, trash), legal and accounting fees, marketing and vacancy costs, and capital reserve allocations. Accurate expense reporting directly impacts the DSCR calculation."
  },
  {
    question: "How does utility infrastructure affect DSCR loan approval for mobile home parks?",
    answer: "Utility infrastructure significantly impacts DSCR loan approval. Parks with city water and sewer connections receive favorable treatment. Parks with private well and septic systems face additional scrutiny, higher reserves requirements, and potentially fewer lending options. Utility conversion from master-metered to individually metered systems is a common value-add strategy that increases NOI."
  },
  {
    question: "What cap rates are mobile home parks trading at in California and Washington in 2026?",
    answer: "Mobile home park cap rates in California range from approximately 4.5% to 6.5% depending on location, occupancy, and infrastructure quality as of early 2026. Washington parks typically trade between 5.0% and 7.0%. Coastal and metro-adjacent parks command the lowest cap rates due to high land values and limited new supply. These are estimates and actual cap rates vary by market conditions."
  },
  {
    question: "Can I use a DSCR loan for mobile home park value-add improvements?",
    answer: "Yes. Some DSCR lenders offer bridge-to-permanent or renovation programs for mobile home parks that include funds for value-add improvements such as utility conversions, infill lot development, infrastructure upgrades, and cosmetic improvements. The loan is underwritten to the projected stabilized NOI after improvements. A wholesale broker can identify lenders with specific MHP renovation programs."
  },
  {
    question: "What down payment is required for a DSCR mobile home park loan?",
    answer: "DSCR mobile home park loans typically require 25-35% down payment, depending on park size, condition, occupancy, DSCR ratio, and borrower credit profile. Parks with strong occupancy (90%+), tenant-owned homes, and city utilities generally qualify for lower down payments. Requirements vary by lender and are not guaranteed."
  },
  {
    question: "Why use a wholesale mortgage broker for mobile home park DSCR financing?",
    answer: "A wholesale mortgage broker accesses DSCR programs from 200+ lenders simultaneously, including specialized MHP lenders that retail banks and direct lenders do not offer. This access means comparing rates, terms, DSCR requirements, pad count minimums, and LTV limits across the entire market. Mobile home park financing is a niche product, and wholesale access identifies lenders with specific MHP expertise."
  }
];

export default function DSCRMobileHomeParkInvestment2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "DSCR Loans for Mobile Home Park Investments: Financing Guide [2026]",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["DSCR Loans", "Mobile Home Park Financing", "Investment Property Lending", "Wholesale Mortgage Lending", "Real Estate Investing"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "identifier": "NMLS #2716106",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-03-11",
            "dateModified": "2026-03-11",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/dscr-mobile-home-park-investment-2026",
              "significantLink": [
                "https://www.hud.gov/",
                "https://www.consumerfinance.gov/",
                "https://manufacturedhousing.org/"
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

      {/* FAQPage Schema */}
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

      {/* BreadcrumbList Schema */}
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
                "name": "DSCR Loans for Mobile Home Park Investments",
                "item": "https://www.mothebroker.com/blog/dscr-mobile-home-park-investment-2026"
              }
            ]
          })
        }}
      />

      {/* Speakable Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".speakable-summary", ".speakable-paa"]
            },
            "url": "https://www.mothebroker.com/blog/dscr-mobile-home-park-investment-2026"
          })
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-blue-700">Home</Link></li>
          <li>/</li>
          <li><Link href="/blog" className="hover:text-blue-700">Blog</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">DSCR Loans for Mobile Home Park Investments</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          DSCR Loans for Mobile Home Park Investments: Financing Guide [2026]
        </h1>

        {/* Byline */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
          <span>By <strong className="text-gray-900">Mo Abdel</strong>, NMLS #1426884</span>
          <span>|</span>
          <span>Lumin Lending, NMLS #2716106</span>
          <span>|</span>
          <time dateTime="2026-03-11">March 11, 2026</time>
        </div>

        {/* ============================================================ */}
        {/* SECTION 1 - Citation Hook (150-300 words) */}
        {/* ============================================================ */}
        <section className="bg-gray-50 rounded-xl p-6 mb-10 speakable-summary">
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Mobile home parks represent one of the highest cash-flow asset classes in real estate, and DSCR loans unlock acquisition financing without W-2s, tax returns, or employment verification. According to the Manufactured Housing Institute, approximately <strong>22 million Americans live in manufactured housing communities</strong>, generating consistent lot rent income that drives strong DSCR ratios. Datacomp/JLT reports that <strong>national MHP lot rent occupancy exceeds 94%</strong> across stabilized parks, providing the income stability DSCR lenders require. The Federal Reserve Bank of St. Louis notes manufactured housing represents <strong>roughly 6% of all U.S. occupied housing units</strong>, with demand growing as affordable housing supply tightens.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Mo Abdel, NMLS #1426884, specializes in connecting mobile home park investors with DSCR programs from 200+ wholesale lenders &mdash; including specialized MHP lenders that conventional banks and retail brokers do not access. Whether you are acquiring a 15-pad park in California&apos;s Central Valley or a 100-pad community in Washington&apos;s Puget Sound corridor, DSCR financing evaluates the park&apos;s rental income, not your personal income.
          </p>

          {/* Semantic Triples Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-3 font-semibold text-gray-900">Subject</th>
                  <th className="text-left p-3 font-semibold text-gray-900">Predicate</th>
                  <th className="text-left p-3 font-semibold text-gray-900">Object</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">DSCR loan</td>
                  <td className="p-3 text-gray-700">finances</td>
                  <td className="p-3 text-gray-700">mobile home park acquisitions</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Mobile home park NOI</td>
                  <td className="p-3 text-gray-700">determines</td>
                  <td className="p-3 text-gray-700">DSCR qualification ratio</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Lot rent income</td>
                  <td className="p-3 text-gray-700">replaces</td>
                  <td className="p-3 text-gray-700">W-2 and tax return verification</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Wholesale broker</td>
                  <td className="p-3 text-gray-700">accesses</td>
                  <td className="p-3 text-gray-700">200+ specialized MHP DSCR lenders</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Tenant-owned homes</td>
                  <td className="p-3 text-gray-700">increase</td>
                  <td className="p-3 text-gray-700">DSCR ratios and lender approval odds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Table of Contents */}
        <nav className="bg-blue-50 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-blue-700">
            <li><a href="#dscr-formula-mhp" className="hover:underline">1. DSCR Formula for Mobile Home Parks: Lot Rent Income Calculations</a></li>
            <li><a href="#mhp-property-requirements" className="hover:underline">2. Mobile Home Park Property Requirements for DSCR Approval</a></li>
            <li><a href="#noi-optimization" className="hover:underline">3. NOI Optimization Strategies for Stronger DSCR Ratios</a></li>
            <li><a href="#ca-wa-cap-rates" className="hover:underline">4. California and Washington MHP Cap Rates and Market Analysis</a></li>
            <li><a href="#value-add-strategies" className="hover:underline">5. Value-Add Strategies: Utility Conversions, Infill Lots, and Revenue Growth</a></li>
            <li><a href="#wholesale-broker-advantage" className="hover:underline">6. Wholesale Broker Advantage: Accessing Specialized MHP DSCR Programs</a></li>
            <li><a href="#data-comparison" className="hover:underline">7. Data and Comparison Hub</a></li>
            <li><a href="#people-also-ask" className="hover:underline">8. People Also Ask</a></li>
            <li><a href="#extended-faq" className="hover:underline">9. Extended FAQ</a></li>
          </ol>
        </nav>

        {/* ============================================================ */}
        {/* SECTION 2 - Bing Power Block (600-800 words) */}
        {/* ============================================================ */}
        <section id="dscr-formula-mhp" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            DSCR Formula for Mobile Home Parks: Lot Rent Income Calculations
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            The DSCR formula for mobile home parks follows the same core principle as any investment property, but the income calculation incorporates MHP-specific revenue streams that traditional single-family DSCR calculations do not address. Understanding how lenders evaluate MHP income is critical for structuring an acquisition that meets DSCR thresholds.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">The Mobile Home Park DSCR Formula</h3>
            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="text-center text-xl font-mono font-bold text-gray-900">
                DSCR = Net Operating Income / Annual Debt Service
              </p>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              <strong>For mobile home parks, NOI includes:</strong>
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">+</span>
                <span><strong>Lot rent income</strong> (primary revenue): Monthly pad rental fees from all occupied lots</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">+</span>
                <span><strong>Utility reimbursements</strong>: Water, sewer, trash, and electric billbacks to tenants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">+</span>
                <span><strong>Ancillary income</strong>: Laundry facilities, storage units, RV pads, late fees</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">+</span>
                <span><strong>Park-owned home rent</strong>: Rental income from any POH units (treated differently by lenders)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">&minus;</span>
                <span><strong>Operating expenses</strong>: Management, maintenance, taxes, insurance, utilities, reserves</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            DSCR lenders evaluate mobile home park income differently depending on whether homes are tenant-owned or park-owned. In a tenant-owned home (TOH) community, the park owner collects lot rent only &mdash; tenants own their manufactured homes and are responsible for all home maintenance. This model produces the cleanest NOI because operating expenses are lower, vacancy turnover costs are minimal, and income is predictable. DSCR lenders assign TOH lot rent income the highest confidence weighting.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Park-owned homes (POH), by contrast, generate both lot rent and home rental income, but DSCR lenders discount POH revenue because it carries higher maintenance costs, tenant turnover expenses, and depreciation. Many lenders cap the percentage of POH units at 20-30% of total pads for preferred pricing. A park with 50 pads where 40 are TOH and 10 are POH will receive more favorable DSCR treatment than a 50-pad park with 30 POH units.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">DSCR Ratio</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Interpretation</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Typical MHP Lender Response</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-bold text-green-700">1.25+</td>
                  <td className="p-3 border border-gray-200">Park generates 25%+ above debt service</td>
                  <td className="p-3 border border-gray-200">Best rates, maximum LTV, broadest lender options</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-bold text-blue-700">1.10 &ndash; 1.24</td>
                  <td className="p-3 border border-gray-200">Adequate coverage with moderate cushion</td>
                  <td className="p-3 border border-gray-200">Standard approval, competitive terms available</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-bold text-yellow-700">1.0 &ndash; 1.09</td>
                  <td className="p-3 border border-gray-200">Income covers debt with minimal margin</td>
                  <td className="p-3 border border-gray-200">Limited lenders, higher down payment, rate premium</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-bold text-red-700">Below 1.0</td>
                  <td className="p-3 border border-gray-200">Income does not cover debt service</td>
                  <td className="p-3 border border-gray-200">Decline or requires significant additional reserves</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic">
            DSCR ratios and projections are estimates and vary by lender, property type, and market conditions.
          </p>
        </section>

        {/* CTA #1 */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Finance a Mobile Home Park with a DSCR Loan?</h3>
          <p className="text-gray-600 mb-4">Mo Abdel connects MHP investors with specialized DSCR programs from 200+ wholesale lenders. No W-2s. No tax returns.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Get Your MHP DSCR Quote
            </Link>
            <a href="tel:+19495792057" className="inline-block border border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors">
              Call (949) 579-2057
            </a>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 3 - Google E-E-A-T Narrative (1,200-1,500 words) */}
        {/* ============================================================ */}
        <section id="mhp-property-requirements" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Mobile Home Park Property Requirements for DSCR Loan Approval
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            DSCR lenders evaluate mobile home parks using criteria that differ substantially from single-family or small multifamily underwriting. The property itself &mdash; its infrastructure, occupancy, and income stability &mdash; carries the underwriting weight that personal income verification carries in conventional lending. Investors who understand these requirements before submitting a loan application position themselves for faster approvals and better terms.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pad Count and Occupancy Minimums</h3>
          <p className="text-lg text-gray-600 mb-4">
            Most DSCR lenders require a minimum of 10-20 occupied pads. Parks with 30+ occupied pads qualify for the broadest range of lender programs and the most competitive pricing. The rationale is risk diversification: a 50-pad park losing one tenant represents a 2% income reduction, while a 10-pad park losing one tenant represents a 10% income hit. Occupancy rates of 85-90% are typically the minimum threshold, with 90%+ occupancy receiving the best treatment.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Vacant pads are not counted toward income unless the investor presents a credible infill plan with documented lot rent projections. DSCR lenders underwrite to actual occupied income, not pro forma projections, which is one reason stabilized parks command premium valuations. Investors looking to scale their portfolio can explore <Link href="/blog/dscr-loans-portfolio-investors-scaling-2026" className="text-blue-700 hover:underline font-medium">portfolio DSCR strategies for scaling</Link> across multiple MHP acquisitions.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Utility Infrastructure Assessment</h3>
          <p className="text-lg text-gray-600 mb-4">
            Utility infrastructure is one of the most heavily scrutinized aspects of mobile home park DSCR underwriting. Parks fall into distinct categories based on their utility systems, and each category carries different risk profiles:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Utility Type</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Lender Preference</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Impact on DSCR Terms</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200">City water + city sewer</td>
                  <td className="p-3 border border-gray-200 text-green-700 font-medium">Most preferred</td>
                  <td className="p-3 border border-gray-200">Best rates, lowest reserves, broadest lender pool</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200">City water + private septic</td>
                  <td className="p-3 border border-gray-200 text-blue-700 font-medium">Acceptable</td>
                  <td className="p-3 border border-gray-200">Moderate reserves, environmental inspection required</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200">Private well + private septic</td>
                  <td className="p-3 border border-gray-200 text-yellow-700 font-medium">Higher scrutiny</td>
                  <td className="p-3 border border-gray-200">Additional reserves, limited lenders, environmental report</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Lagoon / package plant</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-medium">Least preferred</td>
                  <td className="p-3 border border-gray-200">Fewest lenders, significant capital reserve requirements</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Parks that master-meter utilities and bill back to tenants must demonstrate consistent collection rates. Individually metered parks where tenants pay utilities directly receive the most favorable treatment because utility cost is removed from the park&apos;s operating expenses, directly improving NOI and the resulting DSCR ratio.
          </p>
        </section>

        <section id="noi-optimization" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            NOI Optimization Strategies for Stronger Mobile Home Park DSCR Ratios
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Because DSCR qualification depends entirely on the relationship between NOI and debt service, every dollar of increased income or reduced expense directly improves the DSCR ratio. MHP investors who understand NOI optimization can transform a marginally qualifying park into a strong DSCR candidate.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Revenue Optimization</h3>
          <ul className="space-y-3 text-lg text-gray-600 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">&bull;</span>
              <span><strong>Lot rent increases:</strong> Many acquired parks have below-market lot rents. Gradual, market-justified increases (typically $25-$50 per pad annually) directly increase NOI without capital expenditure. MHP tenants have low mobility because moving a manufactured home costs $5,000-$15,000.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">&bull;</span>
              <span><strong>Utility billback conversion:</strong> Switching from master-metered to individually metered utilities shifts costs from operating expenses to tenant responsibility. Water and sewer billback alone can add $50-$100 per pad per month to effective NOI.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">&bull;</span>
              <span><strong>Ancillary revenue streams:</strong> Laundry facilities, storage units, RV/boat storage pads, and vending machines add income with minimal ongoing expense.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">&bull;</span>
              <span><strong>POH-to-TOH conversion:</strong> Selling park-owned homes to tenants through rent-to-own programs eliminates maintenance liability while preserving lot rent income.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expense Reduction</h3>
          <ul className="space-y-3 text-lg text-gray-600 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">&bull;</span>
              <span><strong>Professional management transition:</strong> Replacing on-site managers with professional management companies at 5-8% of gross revenue often reduces total management costs while improving collections.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">&bull;</span>
              <span><strong>Insurance shopping:</strong> Mobile home park insurance is a specialized market. Working with MHP-experienced insurance brokers can reduce premiums by 15-25% without reducing coverage.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">&bull;</span>
              <span><strong>Tax assessment appeals:</strong> Acquired parks are often over-assessed. Successful property tax appeals directly reduce operating expenses and improve NOI.</span>
            </li>
          </ul>
          <p className="text-lg text-gray-600 mb-6">
            Investors considering a <Link href="/blog/dscr-loan-refinance-rental-property-cash-out-2026" className="text-blue-700 hover:underline font-medium">DSCR cash-out refinance</Link> after stabilizing a mobile home park can extract equity based on the improved NOI and higher appraised value, then redeploy capital into additional acquisitions. For those exploring equity access on their primary residence to fund MHP down payments, <Link href="/blog/heloc-investment-property-strategy-2026" className="text-blue-700 hover:underline font-medium">HELOC strategies for investment property</Link> provide an alternative capital source.
          </p>
        </section>

        <section id="ca-wa-cap-rates" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            California and Washington Mobile Home Park Cap Rates and Market Analysis
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Cap rates for mobile home parks in California and Washington reflect the fundamental supply-demand imbalance in manufactured housing. Municipalities across both states have imposed moratoriums on new MHP development and zoning restrictions that prevent new community construction. This regulatory environment means existing parks benefit from a durable competitive moat &mdash; new supply is functionally zero in most markets.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Market</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Estimated Cap Rate Range</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Avg. Lot Rent (Estimated)</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Key Factors</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200">Coastal CA (Orange Co., LA, San Diego)</td>
                  <td className="p-3 border border-gray-200">4.5% &ndash; 5.5%</td>
                  <td className="p-3 border border-gray-200">$1,200 &ndash; $2,200/mo</td>
                  <td className="p-3 border border-gray-200">Extreme land value, rent control exposure, high barrier</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200">Inland CA (Inland Empire, Central Valley)</td>
                  <td className="p-3 border border-gray-200">5.5% &ndash; 6.5%</td>
                  <td className="p-3 border border-gray-200">$700 &ndash; $1,100/mo</td>
                  <td className="p-3 border border-gray-200">Growing demand, lot rent upside, logistics corridors</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200">Puget Sound WA (Seattle, Tacoma, Olympia)</td>
                  <td className="p-3 border border-gray-200">5.0% &ndash; 6.0%</td>
                  <td className="p-3 border border-gray-200">$800 &ndash; $1,400/mo</td>
                  <td className="p-3 border border-gray-200">Tech employment base, limited new MHP zoning</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Eastern WA (Spokane, Tri-Cities, Yakima)</td>
                  <td className="p-3 border border-gray-200">6.0% &ndash; 7.0%</td>
                  <td className="p-3 border border-gray-200">$500 &ndash; $800/mo</td>
                  <td className="p-3 border border-gray-200">Higher yields, lot rent growth potential, lower basis</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic mb-6">
            Cap rates and lot rents are estimates based on market data and vary by specific property, condition, occupancy, and infrastructure. Not a guarantee of investment returns.
          </p>

          <p className="text-lg text-gray-600 mb-6">
            California investors should note that the Mobilehome Residency Law (MRL) and local rent stabilization ordinances in cities like San Jose, Los Angeles, and Carson affect lot rent increase strategies. Washington State does not have statewide MHP rent control, though some municipalities have explored local ordinances. These regulatory considerations affect NOI projections and DSCR calculations. For a broader look at California investment markets, see our guide to <Link href="/blog/dscr-loans-california-best-markets-2026" className="text-blue-700 hover:underline font-medium">California&apos;s best DSCR loan markets in 2026</Link>.
          </p>
        </section>

        <section id="value-add-strategies" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Value-Add Strategies: Utility Conversions, Infill Lots, and Revenue Growth
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Mobile home parks offer value-add opportunities that are unique in commercial real estate. Unlike apartment buildings where renovation budgets can exceed $20,000-$50,000 per unit, MHP value-add strategies often require lower per-pad capital investment while generating outsized NOI improvements. The key value-add categories for DSCR qualification improvement include:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Infill Lot Development</h3>
          <p className="text-lg text-gray-600 mb-6">
            Parks with vacant, developable lots represent the purest form of MHP value creation. Bringing a vacant pad to occupied status adds lot rent income with no corresponding increase in debt service, directly improving the DSCR ratio. Infill costs typically range from $5,000 to $25,000 per pad for site preparation (grading, utility hookup, concrete pad) depending on existing infrastructure. Once occupied, each infill pad generates recurring monthly lot rent at zero marginal debt cost. Investors using the <Link href="/blog/dscr-brrrr-strategy-financing-guide-2026" className="text-blue-700 hover:underline font-medium">DSCR BRRRR strategy</Link> can acquire parks with vacant pads, execute the infill plan, stabilize occupancy, and then refinance at the higher NOI-supported valuation.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Utility System Conversions</h3>
          <p className="text-lg text-gray-600 mb-6">
            Converting from master-metered to individually metered water and sewer systems is the single highest-impact expense reduction available to MHP operators. When tenants pay their own utilities directly, the park&apos;s water and sewer expense drops from the operating expense line, often saving $40,000-$100,000 annually on a 50-pad park. This expense reduction flows directly to NOI, improving the DSCR ratio without any rent increase. Individual metering also reduces water consumption by 20-30% on average, according to the EPA, further reducing costs. Some DSCR lenders will underwrite to projected post-conversion NOI for bridge-to-permanent programs.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">RV Pad Additions and Storage Revenue</h3>
          <p className="text-lg text-gray-600 mb-6">
            Parks with excess land can add RV storage pads, boat storage, or self-storage units to diversify revenue streams. RV pads generate $200-$600 per month with minimal infrastructure cost. Storage units on MHP land benefit from the same zoning classification and require relatively low capital investment. These ancillary revenue streams improve NOI and provide income diversification that DSCR lenders view favorably. For investors interested in dedicated self-storage DSCR financing, see our guide on <Link href="/blog/dscr-self-storage-facility-loan-2026" className="text-blue-700 hover:underline font-medium">DSCR loans for self-storage facilities</Link>.
          </p>
        </section>

        {/* CTA #2 */}
        <div className="bg-gray-900 text-white rounded-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-3">Mobile Home Park DSCR Financing &mdash; 200+ Wholesale Lenders</h3>
          <p className="text-gray-300 mb-6">Specialized MHP DSCR programs that conventional banks do not offer. No W-2s, no tax returns, no employment verification. Entity vesting available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors">
              Request MHP Loan Scenarios
            </Link>
            <a href="tel:+19495792057" className="inline-block border border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors">
              (949) 579-2057
            </a>
          </div>
        </div>

        <section id="wholesale-broker-advantage" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Wholesale Broker Advantage: Accessing Specialized MHP DSCR Programs
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Mobile home park financing is a niche within a niche. Most retail banks and credit unions do not offer MHP DSCR programs because the underwriting expertise, risk modeling, and servicing infrastructure differ from standard residential or even multifamily lending. A wholesale mortgage broker bridges this gap by accessing specialized MHP lenders that operate exclusively in the wholesale channel.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mo Abdel, NMLS #1426884, at Lumin Lending (NMLS #2716106) accesses DSCR programs from 200+ wholesale lenders, including lenders that specialize exclusively in manufactured housing community financing. This access means comparing MHP-specific criteria &mdash; minimum pad counts, utility requirements, TOH/POH ratios, occupancy thresholds, and cap rate guidelines &mdash; across the entire wholesale lending market simultaneously.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            The wholesale advantage is particularly impactful for MHP investors because program variations between lenders are substantial. One lender may require 20-pad minimums while another finances 10-pad parks. One lender may reject parks with private septic while another has an environmental review process that accommodates private systems. Without wholesale channel access, investors are limited to whatever single program their retail lender offers &mdash; which may not fit their specific MHP acquisition profile.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For investors building diversified portfolios across asset types, the same wholesale broker relationship provides access to <Link href="/blog/dscr-loans-multi-family-guide-2026" className="text-blue-700 hover:underline font-medium">multifamily DSCR financing</Link>, <Link href="/blog/dscr-loans-explained-investors-2026" className="text-blue-700 hover:underline font-medium">single-family DSCR loans explained</Link>, and <Link href="/blog/dscr-loan-requirements-2026" className="text-blue-700 hover:underline font-medium">complete DSCR loan requirements</Link> for every property type. Homeowners looking to tap equity for MHP down payments can explore <Link href="/blog/heloc-vs-home-equity-loan-2026" className="text-blue-700 hover:underline font-medium">HELOC vs. home equity loan options</Link> or <Link href="/blog/cash-out-refinance-investment-property-2026" className="text-blue-700 hover:underline font-medium">cash-out refinance strategies</Link>.
          </p>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4 - Data & Comparison Hub (400-500 words) */}
        {/* ============================================================ */}
        <section id="data-comparison" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Data and Comparison Hub: MHP DSCR Loan Parameters
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            The following comparison tables summarize typical DSCR loan parameters for mobile home park acquisitions across the wholesale lending market. These ranges reflect aggregate program availability and are not specific lender quotes.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Parameter</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Typical MHP DSCR Range</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-medium">Minimum DSCR</td>
                  <td className="p-3 border border-gray-200">1.0 &ndash; 1.25</td>
                  <td className="p-3 border border-gray-200">1.25+ for best terms; some lenders accept 1.0</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-medium">Down Payment</td>
                  <td className="p-3 border border-gray-200">25% &ndash; 35%</td>
                  <td className="p-3 border border-gray-200">Lower for stabilized TOH parks with 90%+ occupancy</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-medium">Minimum Pad Count</td>
                  <td className="p-3 border border-gray-200">5 &ndash; 20 pads</td>
                  <td className="p-3 border border-gray-200">30+ pads for broadest lender selection</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-medium">Minimum Credit Score</td>
                  <td className="p-3 border border-gray-200">660 &ndash; 700</td>
                  <td className="p-3 border border-gray-200">720+ for preferred pricing</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-medium">Loan Terms</td>
                  <td className="p-3 border border-gray-200">5/1, 7/1, 10/1 ARM; 30-yr fixed</td>
                  <td className="p-3 border border-gray-200">Fixed-rate options increasingly available</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-medium">Amortization</td>
                  <td className="p-3 border border-gray-200">25 &ndash; 30 years</td>
                  <td className="p-3 border border-gray-200">Interest-only options available at some lenders</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-medium">Entity Vesting</td>
                  <td className="p-3 border border-gray-200">LLC, LP, Corp, Trust</td>
                  <td className="p-3 border border-gray-200">Standard for MHP acquisitions</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-medium">Prepayment Penalty</td>
                  <td className="p-3 border border-gray-200">1-5 year step-down</td>
                  <td className="p-3 border border-gray-200">No-penalty options at higher rate</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Income Verification</td>
                  <td className="p-3 border border-gray-200">None (property-based)</td>
                  <td className="p-3 border border-gray-200">Rent rolls and P&amp;L required for property</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic mb-6">
            All parameters are estimates based on aggregate wholesale market data. Actual terms vary by lender, borrower profile, property specifics, and market conditions. Not a commitment to lend.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-200">
              <caption className="text-left font-semibold text-gray-900 mb-3">MHP DSCR Loan vs. Conventional Commercial Loan</caption>
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Feature</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">DSCR MHP Loan</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Conventional Commercial Loan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-medium">Income Verification</td>
                  <td className="p-3 border border-gray-200 text-green-700">Property income only</td>
                  <td className="p-3 border border-gray-200">Full personal + business tax returns</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-medium">Closing Speed</td>
                  <td className="p-3 border border-gray-200 text-green-700">21-30 days typical</td>
                  <td className="p-3 border border-gray-200">45-90 days typical</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-medium">Portfolio Limits</td>
                  <td className="p-3 border border-gray-200 text-green-700">Unlimited properties</td>
                  <td className="p-3 border border-gray-200">Global debt exposure limits apply</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 border border-gray-200 font-medium">Entity Vesting</td>
                  <td className="p-3 border border-gray-200 text-green-700">LLC/LP/Corp standard</td>
                  <td className="p-3 border border-gray-200">LLC/LP/Corp standard</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Self-Employed Friendly</td>
                  <td className="p-3 border border-gray-200 text-green-700">No tax return analysis</td>
                  <td className="p-3 border border-gray-200">2 years tax returns required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5 - People Also Ask (400-500 words) */}
        {/* ============================================================ */}
        <section id="people-also-ask" className="mb-12 speakable-paa">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            People Also Ask: DSCR Loans for Mobile Home Parks
          </h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How do DSCR lenders evaluate mobile home park income differently from apartments?</h3>
              <p className="text-gray-600">DSCR lenders distinguish between lot rent income (from TOH communities) and home rental income (from POH units). Lot rent carries higher underwriting confidence because the tenant owns the home and has a financial stake in staying. Apartment income is treated uniformly regardless of unit type. MHP lenders also evaluate utility infrastructure, pad conditions, and community age as factors that apartment underwriting does not address.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What makes mobile home parks attractive for DSCR-financed investments?</h3>
              <p className="text-gray-600">Mobile home parks offer low tenant turnover (moving a manufactured home costs $5,000-$15,000), limited new supply (zoning restrictions prevent new park construction), lower per-unit operating costs than apartments, and consistent lot rent income. These characteristics produce stable NOI, which directly supports strong DSCR ratios. The affordable housing demand trend further supports occupancy stability.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I use a DSCR loan for an age-restricted (55+) mobile home park?</h3>
              <p className="text-gray-600">Yes. DSCR lenders finance age-restricted (55+) mobile home parks. These communities often command premium lot rents, maintain higher occupancy rates, and experience lower maintenance costs. The <Link href="/blog/hecm-reverse-mortgage-guide-2026" className="text-blue-700 hover:underline font-medium">senior housing market</Link> continues to grow, making 55+ MHP communities a specialized niche within DSCR lending.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How does California rent control affect DSCR calculations for mobile home parks?</h3>
              <p className="text-gray-600">California&apos;s Mobilehome Residency Law (MRL) and local rent stabilization ordinances in cities like San Jose, Los Angeles, and Carson limit annual lot rent increases. DSCR lenders factor rent control into NOI projections by capping future income growth assumptions. Parks in non-rent-controlled jurisdictions may receive more favorable DSCR treatment because of unrestricted revenue growth potential.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What environmental issues do DSCR lenders review for mobile home parks?</h3>
              <p className="text-gray-600">DSCR lenders require Phase I Environmental Site Assessments for most MHP acquisitions. Common issues include underground storage tanks, historical chemical use, septic system contamination, and lead/asbestos in older park-owned homes. Parks with identified environmental concerns may face additional reserve requirements, remediation cost escrows, or limited lender availability.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I refinance an existing mobile home park with a DSCR loan?</h3>
              <p className="text-gray-600">Yes. DSCR refinancing allows MHP owners to replace existing debt, extract equity through <Link href="/blog/dscr-loan-refinance-rental-property-cash-out-2026" className="text-blue-700 hover:underline font-medium">cash-out refinance</Link>, or transition from bridge/construction financing to permanent DSCR financing. Seasoning requirements (typically 6-12 months of ownership) and occupancy thresholds apply. The property qualifies based on current NOI at the time of refinance application.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What documents are needed for an MHP DSCR loan application?</h3>
              <p className="text-gray-600">MHP DSCR loan applications require the park&apos;s rent roll (all lots, current rents, occupancy status), trailing 12-month profit and loss statement, property tax bills, insurance declarations page, utility bills (12 months), list of park-owned vs. tenant-owned homes, and capital expenditure history. No personal income documentation (W-2s, tax returns, pay stubs) is required.</p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6 - Extended FAQ (400-500 words) */}
        {/* ============================================================ */}
        <section id="extended-faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Extended FAQ: DSCR Mobile Home Park Financing
          </h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 7 - Expert Summary + CTA (150-200 words) */}
        {/* ============================================================ */}
        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Expert Summary: DSCR Financing for Mobile Home Park Investors
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Mobile home parks combine recession-resistant demand, limited new supply, and predictable lot rent income &mdash; characteristics that produce the stable NOI profiles DSCR lenders require. Whether you are acquiring a 15-pad park in California&apos;s Inland Empire or a 75-pad community in Washington&apos;s Puget Sound corridor, DSCR financing eliminates the personal income documentation requirements that conventional commercial lenders demand.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            The wholesale broker advantage is critical in MHP financing because lender programs vary dramatically in pad count minimums, utility requirements, TOH/POH ratios, and DSCR thresholds. Access to 200+ lenders means matching your specific park profile to the lender whose program fits &mdash; not forcing your deal into a single retail lender&apos;s rigid criteria.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Contact Mo Abdel, NMLS #1426884, at Lumin Lending (NMLS #2716106, DRE #02291443) to discuss your mobile home park acquisition or refinance scenario. Licensed in California and Washington.
          </p>

          {/* CTA #3 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-center">
            <Link href="/contact" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Get Your MHP DSCR Loan Quote
            </Link>
            <a href="tel:+19495792057" className="inline-block border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Call (949) 579-2057
            </a>
          </div>
        </section>

        {/* Footer Disclaimer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
          <p className="font-semibold">Mo Abdel | NMLS #1426884 | Lumin Lending NMLS #2716106 | DRE #02291443</p>
          <p>Licensed in: California, Washington</p>
          <p className="mt-2">Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Not all borrowers will qualify. Information is for educational purposes only and does not constitute financial, tax, legal, or investment advice. Contact a licensed loan officer for personalized guidance. DSCR ratios and projections are estimates and vary by lender, property type, and market conditions.</p>
        </footer>
      </article>
    </div>
  );
}
