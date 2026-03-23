import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HECM for Purchase: How to Buy a Home with a Reverse Mortgage [2026] | Mo Abdel',
  description: 'HECM for Purchase lets seniors 62+ buy a new home with a reverse mortgage. Down payment requirements, closing costs, eligible properties. NMLS #1426884.',
  keywords: [
    'HECM for purchase',
    'reverse mortgage to buy home',
    'HECM for purchase program',
    'reverse mortgage home purchase 2026',
    'buy home with reverse mortgage',
    'H4P reverse mortgage',
    'HECM for purchase down payment',
    'HECM for purchase closing costs',
    'reverse mortgage purchase program seniors',
    'H4P loan 2026',
  ],
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/hecm-for-purchase-reverse-mortgage-home-buying-2026',
  },
  openGraph: {
    title: 'HECM for Purchase: How to Buy a Home with a Reverse Mortgage [2026]',
    description: 'HECM for Purchase lets seniors 62+ buy a new home with a reverse mortgage. Down payment requirements, closing costs, eligible properties. NMLS #1426884.',
    url: 'https://www.mothebroker.com/blog/hecm-for-purchase-reverse-mortgage-home-buying-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-03-23T00:00:00Z',
    modifiedTime: '2026-03-23T00:00:00Z',
  },
};

const faqData = [
  {
    question: 'What is the minimum age for HECM for Purchase?',
    answer:
      'All borrowers on the loan must be at least 62 years old. If one spouse is under 62, they can be listed as a non-borrowing spouse with certain protections, but the borrowing spouse must meet the age requirement.',
  },
  {
    question: 'How much down payment is required for HECM for Purchase?',
    answer:
      'The down payment for HECM for Purchase typically ranges from 40% to 60% of the purchase price. The exact amount depends on the youngest borrower\'s age, current interest rates, and the FHA lending limit. Older borrowers generally need a smaller down payment.',
  },
  {
    question: 'Can I use gift funds for the HECM for Purchase down payment?',
    answer:
      'Yes, gift funds from family members are permitted for the down payment, provided they are properly documented and sourced. The funds cannot come from the seller, real estate agent, or any party with a financial interest in the transaction.',
  },
  {
    question: 'What properties are eligible for HECM for Purchase?',
    answer:
      'Eligible properties include single-family homes, 2-to-4 unit properties where you occupy one unit, FHA-approved condominiums, and manufactured homes on a permanent foundation that meet FHA standards. Investment properties and vacation homes do not qualify.',
  },
  {
    question: 'Do I have to make monthly mortgage payments with HECM for Purchase?',
    answer:
      'No required monthly principal and interest payments exist with HECM for Purchase. However, you remain responsible for property taxes, homeowners insurance, HOA fees if applicable, and general home maintenance throughout the life of the loan.',
  },
  {
    question: 'Is HUD counseling required for HECM for Purchase?',
    answer:
      'Yes. HUD-approved reverse mortgage counseling is mandatory before you can apply for HECM for Purchase. The counseling session covers loan terms, alternatives, costs, and your rights as a borrower. A certificate is issued upon completion.',
  },
  {
    question: 'Can the seller pay closing costs on HECM for Purchase?',
    answer:
      'Yes. The seller can contribute up to 6% of the purchase price toward the buyer\'s closing costs. This is a meaningful benefit that can reduce the cash needed at closing beyond the down payment.',
  },
  {
    question: 'What are the closing costs for HECM for Purchase?',
    answer:
      'Closing costs include an origination fee (up to $6,000), an upfront mortgage insurance premium of 2% of the appraised value or FHA lending limit (whichever is lower), plus appraisal, title, escrow, and third-party fees. Annual MIP is 0.5% of the outstanding loan balance.',
  },
  {
    question: 'What happens when the homeowner passes away or moves out?',
    answer:
      'When the last borrower permanently leaves the home, the loan becomes due and payable. Heirs typically have 6 to 12 months to sell the home, pay off the loan, or refinance. Because HECM is a non-recourse loan, neither the borrower nor heirs owe more than the home\'s appraised value at that time.',
  },
  {
    question: 'Can I use HECM for Purchase to buy a home in California or Washington?',
    answer:
      'Yes. Mo Abdel and Lumin Lending are licensed in both California and Washington and work with over 200 wholesale lenders offering HECM for Purchase programs. The 2025 FHA lending limit of $1,209,750 applies in high-cost areas including Orange County, CA.',
  },
  {
    question: 'How long after closing must I move into the home?',
    answer:
      'You must occupy the purchased home as your primary residence within 60 days of closing. HECM for Purchase cannot be used for investment properties or vacation homes—primary residency is a strict ongoing requirement.',
  },
  {
    question: 'Is the money from HECM for Purchase considered taxable income?',
    answer:
      'Loan proceeds from a HECM for Purchase are generally not considered taxable income. However, tax situations vary by individual. Consult your tax advisor to understand how a reverse mortgage may affect your specific tax position.',
  },
];

export default function HecmForPurchaseReverseMortgageHomeBuying2026() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'HECM for Purchase: How to Buy a Home with a Reverse Mortgage [2026]',
    description:
      'HECM for Purchase lets seniors 62+ buy a new home with a reverse mortgage. Down payment requirements, closing costs, eligible properties.',
    author: {
      '@type': 'Person',
      name: 'Mo Abdel',
      jobTitle: 'Wholesale Mortgage Broker',
      identifier: 'NMLS #1426884',
      worksFor: {
        '@type': 'Organization',
        name: 'Lumin Lending',
        identifier: 'NMLS #2716106',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lumin Lending',
      url: 'https://www.mothebroker.com',
    },
    datePublished: '2026-03-23T00:00:00Z',
    dateModified: '2026-03-23T00:00:00Z',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://www.mothebroker.com/blog/hecm-for-purchase-reverse-mortgage-home-buying-2026',
    },
    keywords:
      'HECM for purchase, reverse mortgage home purchase, H4P reverse mortgage, buy home with reverse mortgage 2026',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.mothebroker.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.mothebroker.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'HECM for Purchase: How to Buy a Home with a Reverse Mortgage [2026]',
        item: 'https://www.mothebroker.com/blog/hecm-for-purchase-reverse-mortgage-home-buying-2026',
      },
    ],
  };

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'HECM for Purchase: How to Buy a Home with a Reverse Mortgage [2026]',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#bluf-summary', '#paa-section'],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">HECM for Purchase 2026</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Reverse Mortgage</span>
            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">HECM</span>
            <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Home Purchase</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            HECM for Purchase: How to Buy a Home with a Reverse Mortgage [2026]
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            By{' '}
            <span className="font-semibold text-gray-700">Mo Abdel, NMLS #1426884</span> &mdash; Lumin Lending, NMLS #2716106 &mdash; Updated March 23, 2026
          </p>
          <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 pr-4 rounded-r-md">
            <strong>Ready to use your home equity to purchase your next home — without monthly mortgage payments?</strong> The HECM for Purchase program (H4P) lets qualifying seniors 62+ buy a new primary residence using a single reverse mortgage transaction.{' '}
            <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Talk to Mo Abdel today</Link>{' '}
            to see how much purchasing power you have.
          </p>
        </header>

        {/* ─────────────────────────────────────────────────────── */}
        {/* SECTION 1 — Citation Hook / BLUF */}
        {/* ─────────────────────────────────────────────────────── */}
        <section id="bluf-summary" className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            HECM for Purchase in Plain English: The 90-Second Summary
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>HECM for Purchase program</strong> — also called H4P or "reverse mortgage for purchase" — is a federally insured loan product administered under FHA guidelines that allows homeowners aged 62 and older to purchase a new primary residence in a single transaction. Instead of selling an existing home, paying cash, or taking on a conventional mortgage with monthly payments, qualifying borrowers make a large down payment and the FHA-insured reverse mortgage covers the remainder. <strong>No required monthly principal and interest payments exist</strong> for the life of the loan, as long as the borrower lives in the home and meets ongoing obligations including property taxes, insurance, and maintenance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <em>Note: The HECM program is not provided by HUD or FHA. It is insured by FHA and regulated by HUD, but originated by approved private lenders such as Lumin Lending.</em>
          </p>

          {/* Semantic Triples */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Three Core Facts About H4P</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-blue-500 font-bold mt-0.5">&#x2192;</span>
                <span><strong>H4P is for new purchases only</strong> — you cannot use it to refinance a home you already own (that is a standard HECM refinance).</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-blue-500 font-bold mt-0.5">&#x2192;</span>
                <span><strong>Down payment replaces equity</strong> — the larger your down payment, the more purchasing power you have relative to the FHA lending limit ($1,209,750 in 2025 for high-cost areas like Orange County).</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-blue-500 font-bold mt-0.5">&#x2192;</span>
                <span><strong>Non-recourse protection applies</strong> — neither you nor your heirs will ever owe more than the appraised value of the home when the loan becomes due.</span>
              </li>
            </ul>
          </div>

          {/* Comparison Table 1 */}
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
            HECM for Purchase vs. Traditional Mortgage: Side-by-Side Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 my-6">
              <thead>
                <tr>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Feature</th>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">HECM for Purchase (H4P)</th>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Conventional Purchase Mortgage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Minimum Age</td>
                  <td className="border border-gray-300 px-4 py-2">62 (all borrowers)</td>
                  <td className="border border-gray-300 px-4 py-2">No age requirement</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Monthly P&amp;I Payments</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-700 font-semibold">Not required</td>
                  <td className="border border-gray-300 px-4 py-2 text-red-700 font-semibold">Required every month</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Down Payment</td>
                  <td className="border border-gray-300 px-4 py-2">40–60% (age/rate dependent)</td>
                  <td className="border border-gray-300 px-4 py-2">3–20%+ typical range</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Income Qualification</td>
                  <td className="border border-gray-300 px-4 py-2">Residual income / financial assessment</td>
                  <td className="border border-gray-300 px-4 py-2">Full DTI qualification</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">FHA Mortgage Insurance</td>
                  <td className="border border-gray-300 px-4 py-2">2% upfront + 0.5% annual</td>
                  <td className="border border-gray-300 px-4 py-2">0.55%–1.05% annual (if &lt;20% down)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Loan Balance Over Time</td>
                  <td className="border border-gray-300 px-4 py-2">Grows (interest accrues)</td>
                  <td className="border border-gray-300 px-4 py-2">Decreases (amortizes)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Non-Recourse Protection</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-700 font-semibold">Yes — FHA-insured</td>
                  <td className="border border-gray-300 px-4 py-2">No</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">HUD Counseling Required</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-700 font-semibold">Yes — mandatory</td>
                  <td className="border border-gray-300 px-4 py-2">Not required</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Seller Contribution Limit</td>
                  <td className="border border-gray-300 px-4 py-2">Up to 6% of purchase price</td>
                  <td className="border border-gray-300 px-4 py-2">3–6% depending on LTV</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────── */}
        {/* SECTION 2 — Bing Power Block */}
        {/* ─────────────────────────────────────────────────────── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            HECM for Purchase Down Payment Requirements 2026
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The down payment is the single most important number in any HECM for Purchase transaction. Unlike a conventional mortgage where the lender lends you most of the purchase price and you contribute a small percentage, H4P works in reverse: you bring the large lump sum and the reverse mortgage covers the rest — with no monthly payment obligation going forward.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            HUD calculates the maximum reverse mortgage amount you can receive — called the <strong>Principal Limit Factor (PLF)</strong> — based on three inputs: the age of the youngest borrower, the expected interest rate at closing, and the lesser of the appraised value or the FHA lending limit ($1,209,750 for high-cost counties like Orange County in 2025). The down payment is simply the difference between the purchase price and your Principal Limit.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
            Estimated Down Payment by Age (Illustrative Ranges)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 my-6">
              <thead>
                <tr>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Youngest Borrower Age</th>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Approximate Down Payment Range</th>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">62</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">55–65% of purchase price</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">Minimum eligible age; lower PLF</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">67–70</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">50–58% of purchase price</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">Moderate PLF; common range</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">75–80</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">44–52% of purchase price</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">Higher PLF; less cash needed</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">85+</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">38–45% of purchase price</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">Maximum PLF zone; strongest purchasing power</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm italic mb-6">
            Ranges are illustrative based on current market rate environments. Actual PLF and required down payment are calculated at time of application. Contact Mo Abdel for a personalized quote.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            HECM for Purchase Closing Costs: Complete Fee Breakdown 2026
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            HECM for Purchase closing costs are higher than a conventional mortgage because of the FHA mortgage insurance premium. Understanding every line item prevents surprises at the closing table.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">All HECM for Purchase Closing Costs</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 my-6">
              <thead>
                <tr>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Fee Category</th>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Typical Cost</th>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Paid By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Origination Fee</td>
                  <td className="border border-gray-300 px-4 py-2">Up to $6,000 (FHA-capped)</td>
                  <td className="border border-gray-300 px-4 py-2">Borrower</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Upfront MIP (FHA)</td>
                  <td className="border border-gray-300 px-4 py-2">2% of appraised value or FHA limit</td>
                  <td className="border border-gray-300 px-4 py-2">Borrower (often financed)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Annual MIP</td>
                  <td className="border border-gray-300 px-4 py-2">0.5% of outstanding balance/year</td>
                  <td className="border border-gray-300 px-4 py-2">Accrues to loan balance</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Appraisal</td>
                  <td className="border border-gray-300 px-4 py-2">$500–$800</td>
                  <td className="border border-gray-300 px-4 py-2">Borrower (paid upfront)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Title Insurance &amp; Search</td>
                  <td className="border border-gray-300 px-4 py-2">$1,000–$2,500</td>
                  <td className="border border-gray-300 px-4 py-2">Borrower or Seller</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Escrow / Settlement Fees</td>
                  <td className="border border-gray-300 px-4 py-2">$800–$1,500</td>
                  <td className="border border-gray-300 px-4 py-2">Borrower or Seller</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Recording Fees</td>
                  <td className="border border-gray-300 px-4 py-2">$100–$300</td>
                  <td className="border border-gray-300 px-4 py-2">Borrower</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">HUD Counseling Fee</td>
                  <td className="border border-gray-300 px-4 py-2">$125–$200</td>
                  <td className="border border-gray-300 px-4 py-2">Borrower (mandatory)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Seller Concession (max 6%)</td>
                  <td className="border border-gray-300 px-4 py-2">Up to 6% of purchase price</td>
                  <td className="border border-gray-300 px-4 py-2">Seller (offsets buyer costs)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Insight: Seller Can Pay Up to 6%</h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              In many California and Washington markets, sellers routinely pay closing costs as a negotiation tool. A 6% seller concession on a $700,000 home equals $42,000 in cost offsets — significantly reducing your out-of-pocket cash beyond the down payment. Mo Abdel structures H4P offers to maximize this benefit.{' '}
              <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Request a free H4P cost estimate.</Link>
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Eligible Down Payment Sources</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4 pl-2">
            <li>Proceeds from the sale of your current home</li>
            <li>Personal savings, checking, or money market accounts (seasoned 60+ days)</li>
            <li>Gift funds from family members (with gift letter and proper documentation)</li>
            <li>Proceeds from sale of other assets (stocks, IRAs — consult your financial advisor)</li>
            <li>Bridge loan proceeds from existing home equity (in some cases)</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Prohibited sources:</strong> The down payment cannot come from the seller, real estate agent, builder, or any entity with a financial interest in the transaction. Seller-paid closing costs up to 6% are permitted, but the down payment itself must come from eligible personal or family sources.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a broader comparison of how HECM for Purchase fits alongside other equity strategies, see our{' '}
            <Link href="/blog/hecm-vs-heloc-seniors-2026" className="text-blue-600 hover:underline">HECM vs. HELOC for Seniors guide</Link>{' '}
            and our{' '}
            <Link href="/blog/reverse-mortgage-closing-costs-fees-2026" className="text-blue-600 hover:underline">complete reverse mortgage closing costs breakdown</Link>.
          </p>
        </section>

        {/* ─────────────────────────────────────────────────────── */}
        {/* SECTION 3 — Google E-E-A-T Narrative */}
        {/* ─────────────────────────────────────────────────────── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Who Should Consider HECM for Purchase — And Who Should Not?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            After working with hundreds of Southern California seniors on reverse mortgage transactions, I can tell you that HECM for Purchase is genuinely the right solution for a specific group of buyers — and genuinely wrong for others. Understanding the difference saves everyone time, money, and emotional energy.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>H4P works best for seniors who:</strong> have significant equity or liquid assets from the sale of a prior home, want to downsize or relocate to be closer to family, need to preserve cash flow in retirement by eliminating a mortgage payment, or are purchasing in a higher-cost market where a conventional mortgage payment would strain fixed income. It is also an excellent tool for seniors whose income looks strong on paper (Social Security, pensions, investments) but who cannot qualify for a conventional mortgage due to DTI ratios or credit score thresholds.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>H4P is typically not the right fit for seniors who:</strong> plan to leave the home to heirs free and clear without a reverse mortgage balance, have minor children or non-62 household members who plan to live in the property as their primary residence without being on the loan, or who need the flexibility to sell quickly within a short time horizon (the closing process adds time compared to a cash purchase).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What Properties Qualify for HECM for Purchase?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not every property is eligible for HECM for Purchase. FHA eligibility requirements apply, and the property must pass a standard FHA appraisal.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-2">
            <li><strong>Single-family homes</strong> — the most common H4P property type</li>
            <li><strong>2-to-4 unit properties</strong> — borrower must occupy one unit as primary residence</li>
            <li><strong>FHA-approved condominiums</strong> — the condo complex must be on HUD&apos;s approved list; spot approvals may be available</li>
            <li><strong>Manufactured homes on permanent foundations</strong> — must meet FHA minimum property standards and be titled as real property</li>
            <li><strong>Newly constructed homes</strong> — must have a certificate of occupancy before closing</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Ineligible property types:</strong> Investment properties, vacation homes, cooperative apartments (co-ops), and any property that will not be the borrower&apos;s primary residence within 60 days of closing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            How Does the HECM for Purchase Process Work, Step by Step?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The H4P process combines a real estate purchase transaction with a reverse mortgage origination. Here is the full sequence:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6 pl-2">
            <li><strong>Initial consultation:</strong> Meet with a licensed reverse mortgage specialist (like Mo Abdel) to determine eligibility, estimated PLF, and approximate down payment for your target purchase price and market.</li>
            <li><strong>HUD-approved counseling:</strong> Complete a mandatory reverse mortgage counseling session with an independent HUD-approved counselor. This typically takes 60–90 minutes by phone and costs $125–$200. You receive a counseling certificate upon completion.</li>
            <li><strong>Find a property and execute a purchase agreement:</strong> Work with a real estate agent to identify an eligible property. Your offer should include a financing contingency specifically noting HECM for Purchase. Negotiate seller concessions up to 6% to offset closing costs.</li>
            <li><strong>Formal loan application:</strong> Submit the full loan application to Lumin Lending. Mo Abdel shops your file across 200+ wholesale lenders to identify the most competitive H4P terms available in your market.</li>
            <li><strong>FHA appraisal:</strong> An FHA-approved appraiser inspects and values the property. The HECM loan amount is based on the lesser of the purchase price or appraised value.</li>
            <li><strong>Loan underwriting and approval:</strong> The lender&apos;s underwriting team reviews the full file including the financial assessment (verifying your ability to pay taxes, insurance, and maintenance).</li>
            <li><strong>Closing:</strong> Sign loan documents at a title/escrow company. Your down payment and the HECM loan proceeds combine to fund the purchase. The seller receives full payment and you receive title.</li>
            <li><strong>Occupancy:</strong> Move into the property within 60 days of closing. This is a firm FHA requirement. The home must remain your primary residence throughout the loan term.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">
            For a detailed look at the reverse mortgage closing timeline, see our{' '}
            <Link href="/blog/reverse-mortgage-closing-process-timeline-2026" className="text-blue-600 hover:underline">reverse mortgage closing process and timeline guide</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            What Are the Ongoing Borrower Obligations After Closing?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            One of the most common misconceptions about HECM for Purchase is that &ldquo;no monthly payments&rdquo; means no financial responsibilities. That is not accurate. While you have no required monthly principal and interest payments, maintaining the loan in good standing requires:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-2">
            <li><strong>Property taxes:</strong> Must be paid on time. Failure to pay property taxes is the leading cause of reverse mortgage default and can lead to foreclosure.</li>
            <li><strong>Homeowners insurance:</strong> An active, sufficient homeowners insurance policy must be maintained at all times.</li>
            <li><strong>HOA dues (if applicable):</strong> All homeowners association fees must be kept current.</li>
            <li><strong>Home maintenance:</strong> FHA requires the home to be maintained in good repair. Significant deferred maintenance can trigger a loan call.</li>
            <li><strong>Primary residence occupancy:</strong> The home must remain your primary residence. Extended absences (typically 12+ consecutive months) can trigger repayment.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many H4P borrowers choose to set aside a portion of their proceeds or assets in a dedicated account for these ongoing costs — a strategy Mo Abdel regularly recommends during the financial assessment consultation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            How Does HECM for Purchase Compare to a Cash Purchase?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many seniors in the $800K–$1.2M home purchase range ask: &ldquo;Why use HECM for Purchase when I could just pay cash from my home sale proceeds?&rdquo; The answer is liquidity preservation. A cash purchase depletes all equity from the prior home sale and leaves little financial reserve. HECM for Purchase lets you make a 40–55% down payment, purchase the home, eliminate monthly mortgage payments, AND retain the remaining 45–60% of your capital for retirement income, medical expenses, or investment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For example: a 72-year-old seller nets $900,000 from the sale of their Irvine home. They want to buy a $750,000 home closer to family in San Clemente. A cash purchase consumes the full $750,000 and leaves only $150,000 in reserve. With H4P, the down payment might be approximately $380,000, leaving $520,000 of liquid capital — with no monthly mortgage payment eroding that reserve.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Compare this to other equity and financing options in our{' '}
            <Link href="/blog/heloc-vs-cash-out-refinance-2026" className="text-blue-600 hover:underline">HELOC vs. cash-out refinance comparison</Link>{' '}
            and our{' '}
            <Link href="/blog/cash-out-refinance-complete-guide-2026" className="text-blue-600 hover:underline">cash-out refinance complete guide</Link>.
          </p>
        </section>

        {/* ─────────────────────────────────────────────────────── */}
        {/* SECTION 4 — Data & Comparison Hub */}
        {/* ─────────────────────────────────────────────────────── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            HECM for Purchase Data Tables: Eligibility, Limits, and Requirements
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
            HECM for Purchase Eligibility Requirements at a Glance
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 my-6">
              <thead>
                <tr>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Requirement</th>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Standard</th>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Borrower Age</td>
                  <td className="border border-gray-300 px-4 py-2">62+ (all borrowers)</td>
                  <td className="border border-gray-300 px-4 py-2">Non-borrowing spouse provisions available for under-62 spouses</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Property Type</td>
                  <td className="border border-gray-300 px-4 py-2">FHA-eligible</td>
                  <td className="border border-gray-300 px-4 py-2">SFR, 2–4 unit, FHA condo, manufactured on perm. foundation</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Occupancy Requirement</td>
                  <td className="border border-gray-300 px-4 py-2">Primary residence only</td>
                  <td className="border border-gray-300 px-4 py-2">Must occupy within 60 days of closing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">FHA Lending Limit (2025)</td>
                  <td className="border border-gray-300 px-4 py-2">$1,209,750 (high-cost)</td>
                  <td className="border border-gray-300 px-4 py-2">Applies to Orange County and most CA/WA markets</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">HUD Counseling</td>
                  <td className="border border-gray-300 px-4 py-2">Mandatory</td>
                  <td className="border border-gray-300 px-4 py-2">Must complete before loan application; certificate required</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Financial Assessment</td>
                  <td className="border border-gray-300 px-4 py-2">Required</td>
                  <td className="border border-gray-300 px-4 py-2">Lender evaluates ability to pay taxes, insurance, and maintenance</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Credit Score</td>
                  <td className="border border-gray-300 px-4 py-2">No minimum (lender overlay may apply)</td>
                  <td className="border border-gray-300 px-4 py-2">Credit history reviewed; derogatory marks assessed</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Income Requirement</td>
                  <td className="border border-gray-300 px-4 py-2">Residual income test</td>
                  <td className="border border-gray-300 px-4 py-2">No DTI ratio — must demonstrate capacity for ongoing obligations</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
            HECM for Purchase vs. Cash Purchase vs. Conventional Mortgage — Liquidity Impact
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 my-6">
              <thead>
                <tr>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Scenario</th>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Cash Available</th>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Down Payment/Purchase Cost</th>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Remaining Liquid Reserves</th>
                  <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">Monthly Payment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Cash Purchase</td>
                  <td className="border border-gray-300 px-4 py-2">$900,000</td>
                  <td className="border border-gray-300 px-4 py-2">$750,000</td>
                  <td className="border border-gray-300 px-4 py-2 text-red-700 font-semibold">$150,000</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-700">$0</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Conventional 20% Down</td>
                  <td className="border border-gray-300 px-4 py-2">$900,000</td>
                  <td className="border border-gray-300 px-4 py-2">$150,000</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-700 font-semibold">$750,000</td>
                  <td className="border border-gray-300 px-4 py-2 text-red-700">~$3,800/mo</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">HECM for Purchase (Age 72)</td>
                  <td className="border border-gray-300 px-4 py-2">$900,000</td>
                  <td className="border border-gray-300 px-4 py-2">~$380,000</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-700 font-semibold">~$520,000</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-700">$0 required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm italic mb-4">
            Illustrative example. $750,000 purchase price. Numbers rounded. Conventional payment estimate based on prevailing market rates; not a commitment to lend. Contact Mo Abdel for a personalized analysis.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Interested in how HECM for Purchase stacks up against DSCR investment lending for your real estate strategy? See our{' '}
            <Link href="/blog/dscr-first-investment-property-2026" className="text-blue-600 hover:underline">DSCR first investment property guide</Link>{' '}
            for how investors use debt service coverage loans alongside reverse mortgages in a portfolio approach.
          </p>
        </section>

        {/* ─────────────────────────────────────────────────────── */}
        {/* SECTION 5 — People Also Ask */}
        {/* ─────────────────────────────────────────────────────── */}
        <section id="paa-section" className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
            People Also Ask: HECM for Purchase Questions Answered
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What is the difference between a HECM and HECM for Purchase?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>A standard HECM converts equity in a home you already own; HECM for Purchase finances the acquisition of a new home you do not yet own.</strong> The reverse mortgage mechanics are the same — no required monthly P&amp;I payments, FHA-insured, non-recourse — but H4P is specifically designed for purchase transactions, while a standard HECM is a refinance product.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can you use HECM for Purchase to buy a condo?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Yes, but the condominium complex must be on HUD&apos;s approved condominium list at the time of application.</strong> Not all condo developments are FHA-approved. Your real estate agent and mortgage broker should verify FHA condominium eligibility before you make an offer, as unapproved condos are ineligible and the approval process for the complex takes months.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How long does HECM for Purchase take to close?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>HECM for Purchase typically takes 45–75 days from accepted offer to close — longer than a cash purchase but comparable to a conventional FHA purchase.</strong> The added time comes from the mandatory HUD counseling, FHA appraisal, and reverse mortgage underwriting process. Planning ahead and completing counseling early shortens the timeline significantly.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What happens to HECM for Purchase if the borrower passes away?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>When the last borrower passes away, the loan becomes due and heirs have 6–12 months to sell, refinance, or pay off the balance.</strong> Because HECM is non-recourse, heirs can also walk away and deed the home to the servicer if the balance exceeds the home&apos;s value — they will never owe any deficiency. See our{' '}
                <Link href="/blog/reverse-mortgage-complete-guide-2026" className="text-blue-600 hover:underline">complete reverse mortgage guide</Link>{' '}
                for full heir options.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I back out of HECM for Purchase after closing?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>No — unlike a standard HECM refinance, HECM for Purchase does not include a 3-day right of rescission.</strong> Once you close on the purchase transaction, the sale is final. This is one key difference from a HECM refinance where you have three business days after closing to cancel without penalty.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Are HECM for Purchase proceeds considered taxable income?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>HECM for Purchase loan proceeds are generally not considered taxable income — consult your tax advisor.</strong> Because reverse mortgage disbursements are loan advances rather than income, they are typically not subject to federal income tax. However, eligibility for Medicaid or certain income-based benefits may be affected depending on how proceeds are held. Always consult a qualified tax professional.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Does HECM for Purchase affect Social Security or Medicare?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>HECM for Purchase does not affect Social Security or Medicare benefits.</strong> However, means-tested programs such as Medicaid and Supplemental Security Income (SSI) may be impacted if loan proceeds remain as liquid assets in an account beyond the month they are received. Consult a benefits counselor if you receive Medicaid or SSI.
              </p>
            </div>

            <div className="pb-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Is HECM for Purchase available throughout California and Washington?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Yes — HECM for Purchase is available statewide in both California and Washington, with the 2025 FHA lending limit of $1,209,750 applying in high-cost counties.</strong> Mo Abdel at Lumin Lending (NMLS #2716106) is licensed in CA and WA and works with 200+ wholesale lenders to source competitive H4P programs. Learn more about{' '}
                <Link href="/blog/reverse-mortgage-age-62-requirements-2026" className="text-blue-600 hover:underline">reverse mortgage age 62 requirements</Link>{' '}
                for full eligibility details.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────── */}
        {/* SECTION 6 — Extended FAQ */}
        {/* ─────────────────────────────────────────────────────── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
            Extended FAQ: HECM for Purchase Deep Dive
          </h2>

          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────── */}
        {/* SECTION 7 — Expert Summary + CTA */}
        {/* ─────────────────────────────────────────────────────── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Expert Summary: Is HECM for Purchase Right for You?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            HECM for Purchase is one of the most powerful — and underutilized — home financing tools available to seniors 62 and older. It combines the flexibility of a reverse mortgage with the simplicity of a single-transaction home purchase, preserves significantly more liquid capital than a cash purchase, and eliminates monthly mortgage payments for life. The 2025 FHA lending limit of $1,209,750 means H4P works across Orange County, the Los Angeles Basin, and high-cost Washington markets where home values are substantial.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The program is more complex than a conventional purchase loan, which is why working with a specialist matters. Mo Abdel at Lumin Lending has originated HECM transactions across California and Washington, partnering with 200+ wholesale lenders to deliver competitive H4P programs at wholesale rates unavailable through retail banks.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For further reading, explore our{' '}
            <Link href="/blog/reverse-mortgage-complete-guide-2026" className="text-blue-600 hover:underline">complete reverse mortgage guide</Link>,{' '}
            the{' '}
            <Link href="/blog/hecm-principal-limit-factors-2026" className="text-blue-600 hover:underline">HECM principal limit factors guide</Link>,{' '}
            and our{' '}
            <Link href="/blog/hecm-counseling-requirements-2026" className="text-blue-600 hover:underline">HECM counseling requirements breakdown</Link>.
          </p>

          {/* Closing CTA */}
          <div className="bg-blue-700 text-white rounded-xl p-8 mt-8">
            <h3 className="text-2xl font-bold mb-3">Get Your HECM for Purchase Analysis — Free</h3>
            <p className="text-blue-100 mb-5 leading-relaxed">
              Find out exactly how much purchasing power you have with HECM for Purchase. Mo Abdel provides a no-obligation personalized estimate — including estimated down payment, closing costs, and liquidity comparison — for seniors 62+ in California and Washington.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center"
              >
                Request Free H4P Analysis
              </Link>
              <Link
                href="/tools/mortgage-calculator"
                className="inline-block border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-center"
              >
                Use Mortgage Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Disclosure */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-6 text-xs text-gray-500 leading-relaxed space-y-2">
            <p>
              <strong>Licensing:</strong> Mo Abdel, NMLS #1426884. Lumin Lending, NMLS #2716106, DRE #02291443. Licensed to originate mortgage loans in California and Washington only.
            </p>
            <p>
              <strong>HECM Disclaimer:</strong> The HECM program is not provided by HUD or FHA. It is insured by the Federal Housing Administration, a division of the U.S. Department of Housing and Urban Development. HUD counseling is mandatory and must be completed with an independent HUD-approved counselor prior to loan application.
            </p>
            <p>
              <strong>Not a Commitment to Lend:</strong> This page is for educational purposes only and does not constitute a loan offer or commitment to lend. All loan approvals are subject to underwriting guidelines, property eligibility, and market conditions. Rates, terms, and program availability are subject to change without notice.
            </p>
            <p>
              <strong>Tax Disclaimer:</strong> Reverse mortgage proceeds are generally not considered taxable income; however, individual tax circumstances vary. Consult a qualified tax advisor for advice specific to your situation.
            </p>
            <p>
              <strong>Benefits Disclaimer:</strong> Receiving HECM proceeds generally does not affect Social Security or Medicare. However, Medicaid, SSI, or other means-tested benefit programs may be affected. Consult a benefits counselor for guidance.
            </p>
            <p>
              <strong>Equal Housing Lender.</strong> &copy; 2026 Lumin Lending. All rights reserved. | NMLS Consumer Access:{' '}
              <a
                href="https://www.nmlsconsumeraccess.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                nmlsconsumeraccess.org
              </a>
            </p>
          </div>
        </footer>
      </article>
    </div>
  );
}
