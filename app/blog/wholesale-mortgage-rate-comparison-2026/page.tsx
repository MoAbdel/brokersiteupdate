import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Building2, TrendingDown, DollarSign, BarChart3, ShieldCheck, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Wholesale vs Retail Mortgage Rates 2026: How Pricing Actually Works | Mo Abdel',
  description: 'Wholesale mortgage rates come directly from lender rate sheets without retail markup. Learn how wholesale vs retail mortgage pricing works, why spreads differ by loan type, and how brokers access 200+ lenders for competitive execution. NMLS #1426884.',
  keywords: ['wholesale vs retail mortgage rates', 'wholesale mortgage pricing', 'wholesale rate advantage', 'mortgage rate markup retail', 'wholesale mortgage rates 2026', 'how wholesale mortgage rates work'],
  openGraph: {
    title: 'Wholesale vs Retail Mortgage Rates 2026: How Pricing Actually Works',
    description: 'Wholesale mortgage rates come directly from lender rate sheets without retail markup. Learn how wholesale vs retail mortgage pricing works and how brokers access 200+ lenders for competitive execution.',
    url: 'https://www.mothebroker.com/blog/wholesale-mortgage-rate-comparison-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-25T00:00:00Z',
    modifiedTime: '2026-02-25T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/wholesale-mortgage-rate-comparison-2026',
  },
};

const faqData = [
  {
    question: "What is the difference between wholesale and retail mortgage rates?",
    answer: "Wholesale mortgage rates are the base pricing that lenders offer to mortgage brokers on their rate sheets. Retail mortgage rates are the final pricing that banks and direct lenders charge consumers after adding their margin for overhead costs including branches, marketing, loan officer commissions, and operational expenses. Wholesale rates reflect the lender's true cost of funds plus a smaller margin, while retail rates include additional markup to cover the retail institution's higher operating costs."
  },
  {
    question: "How do mortgage brokers access wholesale rates?",
    answer: "Mortgage brokers access wholesale rates through approved broker agreements with wholesale lenders. Each wholesale lender provides the broker with daily rate sheets showing available rates and pricing for every loan product. Brokers compare rate sheets from 200+ wholesale lenders to identify the best-execution pricing for each borrower's specific scenario. The broker submits the loan to the chosen wholesale lender, who funds and services the loan."
  },
  {
    question: "Do wholesale mortgage rates change daily?",
    answer: "Yes. Wholesale mortgage rate sheets are updated daily, and many lenders issue intra-day reprices when mortgage-backed securities markets move significantly. Wholesale brokers monitor rate sheet updates throughout the day to capture favorable pricing. Rate sheets typically publish between 7:00 AM and 9:30 AM Pacific time, with mid-day reprices occurring when bond market movements exceed certain thresholds."
  },
  {
    question: "Why are wholesale mortgage rates generally more competitive than retail bank rates?",
    answer: "Wholesale mortgage rates are more competitive because the wholesale channel operates at lower overhead than retail banking. Wholesale lenders do not maintain branch networks, large marketing budgets, or salaried retail loan officer teams. These cost savings are passed through to borrowers as more competitive pricing. The broker's compensation is disclosed separately and regulated by federal law, creating transparency that does not exist in the retail markup model."
  },
  {
    question: "Can I get wholesale rates without using a mortgage broker?",
    answer: "No. Wholesale rate sheets are only available to licensed mortgage brokers with approved broker agreements. Individual consumers cannot access wholesale lender pricing directly. The wholesale channel is specifically designed as a broker-to-lender relationship. Attempting to contact a wholesale lender as a consumer will result in a referral to their retail division or to a broker partner."
  },
  {
    question: "What is a rate sheet and how does it work?",
    answer: "A rate sheet is a daily pricing document issued by a wholesale lender to its approved mortgage brokers. It lists every available interest rate for each loan product along with the corresponding price expressed as a percentage of the loan amount. Prices above 100 represent lender credits (the lender pays), while prices below 100 represent discount points (the borrower pays). Brokers compare rate sheets across multiple lenders to find the best combination of rate and price for each borrower."
  },
  {
    question: "Is the wholesale-retail rate spread the same for all loan types?",
    answer: "No. The wholesale-retail spread varies significantly by loan type. Conforming conventional loans have the narrowest spread because retail banks price these competitively as loss leaders. Non-QM loans, jumbo loans, and specialty products have wider wholesale-retail spreads because retail banks either do not offer these products or price them with larger margins due to perceived risk and lower volume."
  },
  {
    question: "How does the lock-and-shop process work with wholesale lending?",
    answer: "Lock-and-shop allows a wholesale broker to lock a rate with one lender while continuing to shop rate sheets from other lenders. If a better execution becomes available before closing, the broker can move the loan to the lender with superior pricing. This process is unique to the wholesale channel and provides borrowers with ongoing rate protection without limiting their options to a single lender's pricing."
  },
  {
    question: "What does CFPB data show about mortgage origination costs at retail banks?",
    answer: "CFPB data shows that mortgage origination costs average over $4,000 at retail banks. These costs include application fees, origination fees, processing fees, and underwriting fees that retail institutions charge to cover their higher overhead. Wholesale origination costs are typically lower because the wholesale model operates with reduced overhead and the broker's compensation is capped and disclosed under federal lending regulations."
  },
  {
    question: "Are wholesale mortgage rates available for investment properties and non-QM loans?",
    answer: "Yes. Wholesale rate sheets include pricing for investment properties, non-QM products including bank statement loans and DSCR loans, jumbo loans, VA loans, FHA loans, and conventional products. The wholesale advantage is often largest on non-QM and jumbo products because fewer retail banks offer these loan types, creating less retail competition and wider retail markups compared to wholesale pricing."
  },
  {
    question: "How does broker compensation work in the wholesale mortgage channel?",
    answer: "Broker compensation in the wholesale channel is regulated by federal law. The broker's fee is disclosed on the Loan Estimate and Closing Disclosure as a separate line item. This compensation is set at the time of rate lock and cannot change based on the interest rate selected. The transparency of disclosed broker compensation contrasts with the retail model, where the lender's margin is embedded in the rate and not separately disclosed to the borrower."
  },
  {
    question: "How quickly can a wholesale mortgage broker lock a rate?",
    answer: "A wholesale mortgage broker can lock a rate the same day the borrower provides a complete application and the broker identifies the best-execution lender. Rate locks are typically available for 15, 30, 45, or 60 days. Longer lock periods carry slightly higher pricing. Brokers monitor rate sheets throughout the day and can execute a lock within minutes when market conditions are favorable."
  }
];

export default function WholesaleMortgageRateComparison2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Wholesale vs Retail Mortgage Rates 2026: How Pricing Actually Works",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["Wholesale Mortgage Rates", "Retail Mortgage Pricing", "Mortgage Rate Sheets", "Wholesale Lending", "Rate Comparison Shopping"]
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
              "@id": "https://www.mothebroker.com/blog/wholesale-mortgage-rate-comparison-2026",
              "significantLink": [
                "https://www.consumerfinance.gov/",
                "https://www.fhfa.gov/"
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
                "name": "Wholesale vs Retail Mortgage Rates 2026",
                "item": "https://www.mothebroker.com/blog/wholesale-mortgage-rate-comparison-2026"
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
            "url": "https://www.mothebroker.com/blog/wholesale-mortgage-rate-comparison-2026"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-slate-500/20 rounded-full px-4 py-1.5 mb-6 border border-blue-500/30">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Wholesale Mortgage Pricing</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Wholesale vs Retail Mortgage Rates 2026: How Pricing Actually Works
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed speakable-hook">
              According to Mo Abdel, NMLS #1426884, wholesale mortgage rates come directly from lender rate sheets without the retail markup that banks add to cover branches, marketing, and overhead &mdash; and shopping across 200+ wholesale lenders finds the best-execution pricing for every loan scenario.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Wholesale Rate Quote
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
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            The mortgage rate a borrower receives depends entirely on which channel originates the loan. Wholesale mortgage rates &mdash; the pricing that wholesale lenders provide to licensed mortgage brokers on daily rate sheets &mdash; reflect the lender&apos;s actual cost of funds plus a narrow margin. Retail mortgage rates at banks and direct lenders include additional markup layered on top of that same base pricing to cover the institution&apos;s branches, salaried loan officers, national marketing campaigns, and corporate overhead.
          </p>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            This structural difference in how mortgage pricing reaches the consumer is the single most important factor determining what a borrower pays over the life of a loan. Understanding wholesale vs retail mortgage rates is not about finding a &ldquo;deal&rdquo; &mdash; it is about understanding the economics of how mortgage pricing flows from capital markets to the borrower&apos;s closing table.
          </p>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Three facts define the wholesale rate channel: wholesale lenders provide rate sheets directly to brokers without retail markup, brokers compare pricing across 200+ lenders to find best-execution rates for each scenario, and the broker&apos;s compensation is disclosed separately under federal law rather than embedded invisibly in the rate. These structural advantages create a pricing channel that operates fundamentally differently from the retail bank model.
          </p>

          {/* Semantic Triples Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left">Rate Channel</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">How Rate Is Set</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Overhead in Rate</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Number of Lenders Shopped</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Wholesale (Broker)</td>
                  <td className="border border-slate-200 px-4 py-3">Lender rate sheet &mdash; base pricing</td>
                  <td className="border border-slate-200 px-4 py-3">Broker&apos;s low overhead only</td>
                  <td className="border border-slate-200 px-4 py-3">200+ wholesale lenders</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Retail Bank</td>
                  <td className="border border-slate-200 px-4 py-3">Internal pricing + retail margin</td>
                  <td className="border border-slate-200 px-4 py-3">Branches, marketing, staffing</td>
                  <td className="border border-slate-200 px-4 py-3">1 lender (the bank itself)</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Credit Union</td>
                  <td className="border border-slate-200 px-4 py-3">Internal pricing + member margin</td>
                  <td className="border border-slate-200 px-4 py-3">Branches, member services</td>
                  <td className="border border-slate-200 px-4 py-3">1 lender (the credit union)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Online Direct Lender</td>
                  <td className="border border-slate-200 px-4 py-3">Internal pricing + digital margin</td>
                  <td className="border border-slate-200 px-4 py-3">Technology, advertising, staffing</td>
                  <td className="border border-slate-200 px-4 py-3">1 lender (the company itself)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Bing Power Block */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Wholesale Mortgage Rates Compare to Retail Rates in 2026
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            Every mortgage rate starts at the same place: the secondary market. Mortgage-backed securities (MBS) trade on Wall Street, and their yields determine the base cost of mortgage money. From that common starting point, the rate takes different paths depending on the origination channel &mdash; and each channel adds its own costs before the rate reaches the borrower.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">How Mortgage Pricing Flows from Capital Markets to the Borrower</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">1</div>
                <div>
                  <p className="font-semibold text-slate-900">Capital Markets Set the Base Rate</p>
                  <p className="text-slate-600">Mortgage-backed securities pricing determines the cost of mortgage capital. This base rate is identical regardless of which channel originates the loan.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">2</div>
                <div>
                  <p className="font-semibold text-slate-900">Wholesale Lenders Build Rate Sheets</p>
                  <p className="text-slate-600">Wholesale lenders add their servicing margin and profit to the base rate, then publish rate sheets to approved brokers. These rate sheets update daily &mdash; sometimes multiple times per day during volatile markets.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">3</div>
                <div>
                  <p className="font-semibold text-slate-900">Retail Banks Add Their Margin</p>
                  <p className="text-slate-600">Retail banks and direct lenders take the same base pricing and add a larger margin to cover branch operations, salaried loan officers, national advertising, compliance departments, and corporate overhead. This margin is embedded in the rate &mdash; not disclosed as a separate line item.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">4</div>
                <div>
                  <p className="font-semibold text-slate-900">Brokers Shop Multiple Wholesale Rate Sheets</p>
                  <p className="text-slate-600">A wholesale mortgage broker compares rate sheets from 200+ lenders and selects the best-execution pricing for each borrower&apos;s specific loan scenario. Different lenders price different products more aggressively, so the &ldquo;best&rdquo; lender changes depending on loan type, credit score, property type, and LTV.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">5</div>
                <div>
                  <p className="font-semibold text-slate-900">Borrower Receives the Final Rate</p>
                  <p className="text-slate-600">In the wholesale channel, the borrower receives the lender&apos;s rate sheet pricing plus the broker&apos;s disclosed compensation. In the retail channel, the borrower receives the bank&apos;s all-in rate with the margin baked in and not separately visible.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left">Factor</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Wholesale Channel</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Retail Bank</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Credit Union</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Online Lender</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Pricing Source</td>
                  <td className="border border-slate-200 px-4 py-3">Lender rate sheets (direct)</td>
                  <td className="border border-slate-200 px-4 py-3">Internal pricing desk</td>
                  <td className="border border-slate-200 px-4 py-3">Internal pricing desk</td>
                  <td className="border border-slate-200 px-4 py-3">Internal pricing desk</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Lenders Available</td>
                  <td className="border border-slate-200 px-4 py-3">200+ wholesale lenders</td>
                  <td className="border border-slate-200 px-4 py-3">1 (the bank)</td>
                  <td className="border border-slate-200 px-4 py-3">1 (the credit union)</td>
                  <td className="border border-slate-200 px-4 py-3">1 (the company)</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Overhead in Pricing</td>
                  <td className="border border-slate-200 px-4 py-3">Low (no branches)</td>
                  <td className="border border-slate-200 px-4 py-3">High (branches, staff, marketing)</td>
                  <td className="border border-slate-200 px-4 py-3">Medium (branches, member services)</td>
                  <td className="border border-slate-200 px-4 py-3">Medium (technology, advertising)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Fee Transparency</td>
                  <td className="border border-slate-200 px-4 py-3">Broker comp disclosed separately</td>
                  <td className="border border-slate-200 px-4 py-3">Margin embedded in rate</td>
                  <td className="border border-slate-200 px-4 py-3">Margin embedded in rate</td>
                  <td className="border border-slate-200 px-4 py-3">Margin embedded in rate</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Non-QM Products</td>
                  <td className="border border-slate-200 px-4 py-3">Extensive (50+ lenders)</td>
                  <td className="border border-slate-200 px-4 py-3">Limited or none</td>
                  <td className="border border-slate-200 px-4 py-3">Rarely offered</td>
                  <td className="border border-slate-200 px-4 py-3">Select products only</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Jumbo Loan Options</td>
                  <td className="border border-slate-200 px-4 py-3">Multiple lender programs</td>
                  <td className="border border-slate-200 px-4 py-3">Portfolio program (1 option)</td>
                  <td className="border border-slate-200 px-4 py-3">Portfolio program (1 option)</td>
                  <td className="border border-slate-200 px-4 py-3">1&ndash;2 programs</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Avg. Origination Cost</td>
                  <td className="border border-slate-200 px-4 py-3">Below industry average</td>
                  <td className="border border-slate-200 px-4 py-3">$4,000+ (per <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CFPB data</a>)</td>
                  <td className="border border-slate-200 px-4 py-3">Varies by institution</td>
                  <td className="border border-slate-200 px-4 py-3">Varies by company</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            The wholesale channel&apos;s structural advantages compound over the life of a mortgage. A more competitive rate on a 30-year loan translates into meaningful savings over the full term &mdash; not because wholesale rates are &ldquo;discounted&rdquo; or &ldquo;special,&rdquo; but because the wholesale model operates with lower overhead that is reflected in the pricing. This is a structural economic advantage, not a promotional offer.
          </p>
        </section>

        {/* Section 3: Google E-E-A-T Narrative */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Does the Wholesale Mortgage Rate Channel Actually Work?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            The wholesale mortgage channel is a business-to-business relationship between wholesale lenders and licensed mortgage brokers. Wholesale lenders &mdash; companies like United Wholesale Mortgage, Rocket Pro TPO, and dozens of others &mdash; originate loans exclusively through broker partners rather than directly to consumers. These lenders compete for broker business by offering competitive rate sheet pricing, fast turn times, and broad product menus.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            A wholesale mortgage broker holds relationships with 200+ of these wholesale lenders simultaneously. Each morning, rate sheets arrive from every approved lender showing that day&apos;s pricing for every product: conventional, FHA, VA, jumbo, non-QM, DSCR, bank statement, and specialty programs. The broker&apos;s job is to match each borrower&apos;s specific scenario to the lender offering the best-execution pricing for that exact combination of loan type, credit score, LTV, property type, and occupancy.
          </p>

          <p className="text-lg text-slate-600 mb-8">
            This is fundamentally different from the retail model, where a bank&apos;s loan officer has access to one pricing source: the bank&apos;s own internal rate sheet. Regardless of how skilled that loan officer is, they cannot offer pricing from a competing lender. The borrower gets whatever that single institution prices for their scenario &mdash; take it or leave it.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Are Wholesale Rates More Competitive Than Retail Bank Rates?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            The wholesale pricing advantage is not a marketing claim &mdash; it is a reflection of operating costs. Every mortgage origination channel must cover its expenses, and those expenses are reflected in the rate the borrower pays. The channels differ dramatically in what those expenses include:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 rounded-full p-2 mt-1 flex-shrink-0">
                <Building2 className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Retail Banks: Branch Networks</p>
                <p className="text-slate-600">Major retail banks operate thousands of physical branches. Each branch requires lease payments, utility costs, security, furniture, technology infrastructure, and staffing. These costs are covered by the margin added to the mortgage rate. <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CFPB data</a> shows average retail origination costs exceed $4,000 per loan.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 rounded-full p-2 mt-1 flex-shrink-0">
                <Users className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Retail Banks: Salaried Loan Officers</p>
                <p className="text-slate-600">Retail bank loan officers receive base salaries, benefits packages, and commission structures that are funded by the rate margin. This compensation model increases the per-loan cost regardless of how efficiently the loan officer operates.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 rounded-full p-2 mt-1 flex-shrink-0">
                <TrendingDown className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Wholesale Brokers: Lean Operations</p>
                <p className="text-slate-600">Wholesale mortgage brokers operate without branch networks. A broker&apos;s overhead consists of office space, technology, licensing, and staff &mdash; a fraction of the retail bank&apos;s cost structure. This lower overhead is reflected in more competitive pricing for borrowers.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 rounded-full p-2 mt-1 flex-shrink-0">
                <ShieldCheck className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Wholesale Brokers: Transparent Compensation</p>
                <p className="text-slate-600">Federal law requires broker compensation to be disclosed as a separate line item on the Loan Estimate and Closing Disclosure. This transparency means the borrower sees exactly what the broker earns &mdash; unlike the retail model where the bank&apos;s margin is embedded in the rate and invisible to the consumer.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Is a Rate Sheet and How Do Brokers Use It?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            A rate sheet is the daily pricing document that a wholesale lender distributes to its approved mortgage brokers. It is the wholesale equivalent of a bank&apos;s internal pricing matrix &mdash; except the broker receives rate sheets from hundreds of lenders simultaneously, creating a competitive marketplace that does not exist within any single retail institution.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            Each rate sheet lists every available interest rate for each loan product alongside a corresponding &ldquo;price&rdquo; expressed as a percentage of the loan amount. A price of 100.00 means par &mdash; no cost and no credit. Prices above 100 generate lender credits that offset closing costs. Prices below 100 require discount points from the borrower. Brokers analyze these matrices across multiple lenders to identify the best combination of rate and price for each individual scenario.
          </p>

          <p className="text-lg text-slate-600 mb-8">
            Rate sheets update every morning, typically between 7:00 AM and 9:30 AM Pacific time. When mortgage-backed securities markets move significantly during the trading day, lenders issue intra-day reprices &mdash; updated rate sheets reflecting the new market conditions. Wholesale brokers monitor these updates continuously, which allows them to execute rate locks at favorable moments throughout the trading day. This level of real-time market access is not available to retail bank borrowers.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Do All Loan Types Have the Same Wholesale-Retail Spread?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            No. The wholesale pricing advantage varies significantly by loan type. Conforming conventional loans have the narrowest wholesale-retail spread because every retail bank aggressively prices these as their core product. The wholesale advantage exists but is narrower on plain-vanilla conforming loans because retail competition keeps bank pricing relatively close to wholesale levels.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            The wholesale advantage widens dramatically on <Link href="/blog/non-qm-loans-wholesale-broker-2026" className="text-blue-600 hover:underline">non-QM loans</Link>, <Link href="/loan-programs/jumbo-loans" className="text-blue-600 hover:underline">jumbo loans</Link>, and specialty products. Most retail banks either do not offer non-QM products at all or limit their non-QM menu to one or two programs priced with substantial margins. A wholesale broker accesses 50+ non-QM lenders competing for the same loan &mdash; competition that drives more favorable pricing for the borrower.
          </p>

          <p className="text-lg text-slate-600 mb-8">
            Jumbo loans follow a similar pattern. A retail bank offers its single portfolio jumbo program at its own pricing. A wholesale broker compares jumbo pricing across multiple lenders, each with different credit overlays, LTV thresholds, and rate structures. The borrower benefits from this lender-to-lender competition that simply does not exist in the retail channel.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Does Wholesale Pricing Benefit Non-QM and Jumbo Borrowers?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            Non-QM borrowers &mdash; including self-employed professionals using <Link href="/loan-programs/bank-statement-loans" className="text-blue-600 hover:underline">bank statement loans</Link>, real estate investors using DSCR loans, and high-net-worth individuals using asset depletion programs &mdash; experience the largest wholesale pricing advantage because the retail market for these products is thin. Fewer retail options mean less retail competition, which means wider retail margins on the products that are offered.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            The wholesale channel solves this by aggregating dozens of non-QM wholesale lenders under one broker relationship. A <Link href="/wholesale-mortgage-broker-california/bank-statement-loans-wholesale" className="text-blue-600 hover:underline">bank statement loan</Link> borrower working with a wholesale broker has access to every bank statement program available in the wholesale market &mdash; each with different documentation requirements, qualification thresholds, and rate structures. This competition produces more competitive pricing than any single retail institution can offer.
          </p>

          <p className="text-lg text-slate-600 mb-8">
            Jumbo borrowers in California and Washington benefit similarly. With median home values exceeding the conforming loan limit of $806,500 (<a href="https://www.fhfa.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FHFA 2025 limits</a>) in most coastal markets, jumbo loans are the default financing for a significant share of purchase transactions. A wholesale broker&apos;s ability to compare jumbo pricing across multiple lenders &mdash; rather than accepting a single bank&apos;s portfolio pricing &mdash; creates a structural advantage on the loan products that matter most in high-cost markets.
          </p>
        </section>

        {/* Section 4: Data & Comparison Hub */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Wholesale vs Retail Pricing Advantage by Loan Type
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            The size of the wholesale pricing advantage depends on the loan product. Products with more retail competition have narrower spreads. Products with less retail availability have wider spreads &mdash; and therefore a larger wholesale advantage.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left">Loan Type</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Wholesale Lender Availability</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Retail Bank Availability</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Wholesale Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Conforming Conventional</td>
                  <td className="border border-slate-200 px-4 py-3">200+ lenders</td>
                  <td className="border border-slate-200 px-4 py-3">Widely available</td>
                  <td className="border border-slate-200 px-4 py-3">Narrower spread</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">FHA</td>
                  <td className="border border-slate-200 px-4 py-3">100+ lenders</td>
                  <td className="border border-slate-200 px-4 py-3">Widely available</td>
                  <td className="border border-slate-200 px-4 py-3">Narrower spread</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">VA</td>
                  <td className="border border-slate-200 px-4 py-3">80+ lenders</td>
                  <td className="border border-slate-200 px-4 py-3">Available at most banks</td>
                  <td className="border border-slate-200 px-4 py-3">Moderate spread</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Jumbo</td>
                  <td className="border border-slate-200 px-4 py-3">40+ lenders</td>
                  <td className="border border-slate-200 px-4 py-3">1 portfolio program per bank</td>
                  <td className="border border-slate-200 px-4 py-3">Wider spread</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Bank Statement Loans</td>
                  <td className="border border-slate-200 px-4 py-3">50+ lenders</td>
                  <td className="border border-slate-200 px-4 py-3">Rarely offered</td>
                  <td className="border border-slate-200 px-4 py-3">Widest spread</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">DSCR Investment</td>
                  <td className="border border-slate-200 px-4 py-3">50+ lenders</td>
                  <td className="border border-slate-200 px-4 py-3">Not offered at most banks</td>
                  <td className="border border-slate-200 px-4 py-3">Widest spread</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Asset Depletion</td>
                  <td className="border border-slate-200 px-4 py-3">30+ lenders</td>
                  <td className="border border-slate-200 px-4 py-3">Rarely offered</td>
                  <td className="border border-slate-200 px-4 py-3">Widest spread</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Fix &amp; Flip</td>
                  <td className="border border-slate-200 px-4 py-3">20+ lenders</td>
                  <td className="border border-slate-200 px-4 py-3">Not offered at retail banks</td>
                  <td className="border border-slate-200 px-4 py-3">Widest spread</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Lock-and-Shop: A Wholesale-Only Strategy</h3>
            <p className="text-slate-600 mb-4">
              The lock-and-shop process is exclusive to the wholesale channel. A broker locks a rate with Lender A to protect the borrower from market movement, then continues comparing rate sheets from other wholesale lenders. If Lender B publishes more competitive pricing before closing, the broker can move the loan to capture the better execution &mdash; while the original lock at Lender A remains as a backup.
            </p>
            <p className="text-slate-600">
              This strategy provides rate protection and competitive optionality simultaneously. Retail bank borrowers cannot replicate this approach because they are locked into a single institution&apos;s pricing from the start. Learn more about the <Link href="/wholesale-mortgage-broker-california/how-to-get-wholesale-rates" className="text-blue-600 hover:underline">wholesale rate process</Link> and the <Link href="/blog/wholesale-mortgage-closing-timeline-2026" className="text-blue-600 hover:underline">wholesale closing timeline</Link>.
            </p>
          </div>
        </section>

        {/* Section 5: People Also Ask */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask: Wholesale vs Retail Mortgage Rates
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Is a wholesale mortgage rate always lower than a retail rate?</h3>
              <p className="text-slate-600">Wholesale rates reflect base lender pricing without retail markup, which structurally positions the wholesale channel for more competitive pricing. However, individual results depend on the specific loan scenario, the lender selected, and market conditions at the time of lock. The wholesale advantage comes from access to 200+ lenders competing for the same loan &mdash; not from a single &ldquo;wholesale discount&rdquo; applied to every transaction. Compare <Link href="/blog/mortgage-broker-vs-bank-complete-2026" className="text-blue-600 hover:underline">broker vs bank pricing</Link> in detail.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">How many basis points do retail banks typically mark up wholesale rates?</h3>
              <p className="text-slate-600">The retail markup varies by institution and loan product. Retail banks must cover their overhead costs through rate margin, and those costs differ based on the bank&apos;s size, branch network, staffing model, and marketing budget. The markup is not a fixed number &mdash; it is a reflection of each institution&apos;s operating costs. This is why comparing offers from multiple channels is essential for identifying the most competitive pricing.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I negotiate a retail bank rate down to wholesale levels?</h3>
              <p className="text-slate-600">Retail loan officers have limited pricing flexibility. They can sometimes offer reduced margins to match competitor quotes, but they cannot price below their institution&apos;s floor &mdash; the minimum margin the bank requires to cover operating costs. The structural cost difference between the wholesale and retail channels means retail banks cannot consistently match wholesale pricing without operating at a loss on those transactions.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Why do wholesale lenders not lend directly to consumers?</h3>
              <p className="text-slate-600">Wholesale lenders achieve operational efficiency by outsourcing borrower-facing activities to brokers. The broker handles the application, document collection, rate shopping, and client communication. The wholesale lender focuses on underwriting, funding, and loan servicing. This division of labor reduces the wholesale lender&apos;s per-loan cost, which is reflected in more competitive rate sheet pricing.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">What is the 200+ lender advantage in wholesale mortgage lending?</h3>
              <p className="text-slate-600">Access to <Link href="/blog/200-lender-advantage-explained-2026" className="text-blue-600 hover:underline">200+ wholesale lenders</Link> means the broker can identify which lender prices each specific loan scenario most aggressively. Lender A may have the best conforming pricing while Lender B dominates jumbo rates and Lender C offers the most competitive non-QM terms. A single broker relationship gives the borrower access to the best-priced lender for their exact situation &mdash; a level of rate shopping that no retail institution can replicate.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">How does the wholesale channel handle rate volatility differently?</h3>
              <p className="text-slate-600">Wholesale brokers receive real-time rate sheet updates and intra-day reprices from multiple lenders. During volatile market sessions, one lender may reprice negatively while another holds steady or improves. The broker monitors these movements across all 200+ lender relationships and can execute a rate lock with the lender offering the most favorable pricing at any given moment during the trading day.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Extended FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions: Wholesale Mortgage Rate Pricing
          </h2>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-slate-200 pb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Expert Summary + CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 speakable-summary">
              The Bottom Line on Wholesale vs Retail Mortgage Rates
            </h2>

            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Wholesale mortgage rates reflect base lender pricing without the retail markup that banks add to cover branches, marketing, and overhead. The wholesale channel&apos;s structural cost advantage &mdash; combined with access to 200+ competing lenders and transparent broker compensation &mdash; creates a pricing environment that consistently benefits borrowers across every loan type. The advantage is widest on non-QM, jumbo, and specialty products where retail competition is thinnest.
            </p>

            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Understanding how wholesale vs retail mortgage pricing works is the first step toward accessing the most competitive financing available. Whether you are purchasing a primary residence, refinancing an existing mortgage, or financing an investment property in California or Washington, the wholesale rate channel provides access to pricing that the retail model structurally cannot match. Explore the full <Link href="/wholesale-mortgage-broker-california/wholesale-vs-retail-mortgage" className="text-blue-600 hover:underline">wholesale vs retail mortgage comparison</Link> or review how to <Link href="/wholesale-mortgage-broker-california/how-to-get-wholesale-rates" className="text-blue-600 hover:underline">access wholesale mortgage rates</Link>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Compare Wholesale Rates
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+19498229662">
                <Button size="lg" variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  (949) 822-9662
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Internal Links Hub */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Wholesale Mortgage Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/wholesale-mortgage-broker-california/wholesale-vs-retail-mortgage" className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700">Wholesale vs Retail Mortgage: Full Comparison</span>
            </Link>
            <Link href="/blog/mortgage-broker-vs-bank-complete-2026" className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700">Mortgage Broker vs Bank: Complete 2026 Guide</span>
            </Link>
            <Link href="/wholesale-mortgage-broker-california/how-to-get-wholesale-rates" className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700">How to Get Wholesale Mortgage Rates</span>
            </Link>
            <Link href="/blog/200-lender-advantage-explained-2026" className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700">200+ Lender Advantage Explained</span>
            </Link>
            <Link href="/blog/wholesale-mortgage-closing-timeline-2026" className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700">Wholesale Mortgage Closing Timeline</span>
            </Link>
            <Link href="/blog/non-qm-loans-wholesale-broker-2026" className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700">Non-QM Loans Through Wholesale Brokers</span>
            </Link>
            <Link href="/loan-programs/jumbo-loans" className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700">Jumbo Loan Programs</span>
            </Link>
            <Link href="/loan-programs/bank-statement-loans" className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-slate-700">Bank Statement Loans for Self-Employed</span>
            </Link>
          </div>
        </section>

        {/* Footer / Compliance */}
        <footer className="border-t border-slate-200 pt-8 mt-12">
          <div className="text-center">
            <p className="text-lg font-bold text-slate-900 mb-2">
              Mo Abdel | NMLS #1426884
            </p>
            <p className="text-slate-600 mb-1">
              Lumin Lending | NMLS #2716106 | DRE #02291443
            </p>
            <p className="text-slate-600 mb-4">
              Licensed in: California, Washington
            </p>
            <p className="text-sm text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Not all borrowers will qualify. Information is for educational purposes only and does not constitute financial, tax, or legal advice. Contact a licensed loan officer for personalized guidance.
            </p>
          </div>
        </footer>

      </article>
    </div>
  );
}
