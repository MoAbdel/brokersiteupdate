import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Home, DollarSign, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Yorba Linda Mortgage Broker 2026: Wholesale Rates for Land of Gracious Living | Mo Abdel',
  description: 'Yorba Linda mortgage broker serving the Land of Gracious Living since 2009. Jumbo loans, home equity, and wholesale rates from 100+ lenders. $1.3M median — get your free quote today. NMLS #1426884.',
  keywords: ['Yorba Linda mortgage broker', 'Yorba Linda home loans', 'Yorba Linda mortgage rates 2026', 'wholesale mortgage Yorba Linda', 'Yorba Linda jumbo loan', 'Yorba Linda refinance rates', 'Yorba Linda FHA loan', 'Yorba Linda VA loan', 'Land of Gracious Living mortgage', 'Yorba Linda school district homes', 'Yorba Linda Estates financing', 'Black Gold Yorba Linda mortgage', 'Placentia-Yorba Linda USD homes', 'Yorba Linda property tax mortgage', 'self-employed mortgage Yorba Linda'],
  openGraph: {
    title: 'Yorba Linda Mortgage Broker 2026: Wholesale Rates for Land of Gracious Living',
    description: 'Yorba Linda mortgage broker rates 2026: Access 100+ wholesale lenders for luxury home financing. Free rate comparison.',
    url: 'https://www.mothebroker.com/blog/yorba-linda-mortgage-guide-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-01-16T00:00:00Z',
    modifiedTime: '2026-02-14T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
};

const faqData = [
  {
    question: "What are the best mortgage options for Yorba Linda luxury homes?",
    answer: "Yorba Linda's luxury market often requires jumbo loans for homes above the $1,209,750 conforming limit. Wholesale brokers access specialized jumbo products with competitive rates, flexible down payments (10-20%), and asset-based qualification options for high-net-worth buyers."
  },
  {
    question: "How much down payment do I need for a Yorba Linda home?",
    answer: "Down payments in Yorba Linda vary by loan type: 3% minimum for conforming conventional loans, 3.5% for FHA, 0% for VA loans, and typically 10-20% for jumbo loans on homes above $1,209,750."
  },
  {
    question: "What is the median home price in Yorba Linda 2026?",
    answer: "Yorba Linda median home prices in 2026 range from $1.1M to $1.4M depending on neighborhood. Black Gold, Yorba Linda Estates, and Horse Country areas command premium prices often requiring jumbo financing."
  },
  {
    question: "Can I get a mortgage in Yorba Linda with self-employment income?",
    answer: "Yes. Wholesale brokers offer bank statement loans for self-employed Yorba Linda buyers, using 12-24 months of bank deposits instead of tax returns. These non-QM products are ideal for business owners with significant write-offs."
  },
  {
    question: "How do Yorba Linda property taxes affect my mortgage payment?",
    answer: "Yorba Linda property taxes average 1.1-1.2% of assessed value annually. On a $1.2M home, expect roughly $13,200-$14,400/year ($1,100-$1,200/month) added to your mortgage payment through escrow."
  },
  {
    question: "What credit score do I need for a Yorba Linda mortgage?",
    answer: "Minimum credit requirements: 620 for conventional loans, 580 for FHA, and typically 680-700 for jumbo loans. Higher scores (740+) unlock the best wholesale rates on Yorba Linda properties."
  },
  {
    question: "Do Yorba Linda school districts affect home values and mortgage requirements?",
    answer: "Yes. Homes in the Placentia-Yorba Linda Unified School District command a 12-18% premium over comparable homes in adjacent districts. Properties near top-rated schools like Travis Ranch and Yorba Linda Middle School consistently appraise higher, which supports stronger loan-to-value ratios and better jumbo loan terms."
  },
  {
    question: "Can I refinance my Yorba Linda home to access equity in 2026?",
    answer: "Yorba Linda homeowners gained an average of $180,000-$250,000 in equity over the past 3 years. Cash-out refinancing, HELOCs, and home equity loans are available through wholesale channels at rates 0.25-0.5% below retail banks. A HELOC is especially popular for Yorba Linda homeowners planning renovations or investing in additional properties."
  },
  {
    question: "What are closing costs for a Yorba Linda home purchase?",
    answer: "Typical closing costs in Yorba Linda range from 2-3% of the purchase price. On a $1.3M home, expect $26,000-$39,000 in total closing costs including title insurance, escrow fees, appraisal, and lender fees. Wholesale brokers often negotiate lender credits that reduce out-of-pocket closing costs by $3,000-$8,000."
  },
  {
    question: "Is a wholesale mortgage broker better than a bank for Yorba Linda homes?",
    answer: "Wholesale brokers access 100+ lender rate sheets simultaneously, while banks offer only their own products. In our Yorba Linda closings, buyers who use wholesale channels consistently save on origination fees and secure more competitive terms—especially on jumbo loans above the $1,209,750 conforming limit. A wholesale broker also provides a single point of contact through closing."
  },
  {
    question: "How does a HELOC work for Yorba Linda homeowners in 2026?",
    answer: "A HELOC lets Yorba Linda homeowners tap into accumulated equity as a revolving credit line. With average home values above $1.3M, many Yorba Linda homeowners hold $400,000+ in accessible equity. HELOCs are popular for renovations, investment property down payments, and debt consolidation. Wholesale HELOC rates through brokers are typically lower than retail bank offerings."
  },
  {
    question: "What Mello-Roos districts affect Yorba Linda mortgage qualification?",
    answer: "Several Yorba Linda developments built after 1990 carry Mello-Roos Community Facilities District assessments ranging from $3,000 to $8,000 per year. These assessments are added to your monthly housing expense when calculating debt-to-income ratios, reducing your maximum loan qualification by $25,000-$65,000. Always request the Mello-Roos disclosure before making an offer."
  }
];

export default function YorbaLindaMortgageGuide2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Yorba Linda Mortgage Broker 2026: Wholesale Rates for Land of Gracious Living",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["Mortgages", "Home Loans", "Yorba Linda Real Estate", "Jumbo Loans", "Luxury Home Financing"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-01-16",
            "dateModified": "2026-02-14",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/yorba-linda-mortgage-guide-2026",
              "significantLink": [
                "https://www.consumerfinance.gov/",
                "https://www.hud.gov/",
                "https://www.fhfa.gov/"
              ]
            },
            "copyrightHolder": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "url": "https://www.mothebroker.com"
            },
            "copyrightYear": "2026",
            "about": {
              "@type": "Place",
              "name": "Yorba Linda, California",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.8886",
                "longitude": "-117.8131"
              }
            }
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
              <span className="text-green-400 text-sm font-medium">Yorba Linda Mortgage Broker</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Yorba Linda Mortgage Broker 2026: Wholesale Rates for the Land of Gracious Living
            </h1>

            <p className="text-sm text-slate-400 mb-4">
              By Mo Abdel, NMLS #1426884 — Lumin Lending, NMLS #2716106 | Last updated February 14, 2026
            </p>

            {/* Fact-dense opening - First 150 chars optimized for ChatGPT extraction */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Yorba Linda median home prices exceed $1.2M in 2026, with luxury neighborhoods reaching $2M+. Wholesale mortgage brokers access 100+ lenders to secure rates 0.25-0.5% below retail banks—potentially saving $50,000+ over a 30-year loan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Yorba Linda Rate Quote
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

        {/* Market Snapshot */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Is Yorba Linda One of Orange County's Most Desirable Markets?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Known as &quot;The Land of Gracious Living,&quot; Yorba Linda consistently ranks among California&apos;s safest and most family-friendly cities. Home to the Richard Nixon Presidential Library, top-rated schools, and equestrian trails, Yorba Linda attracts buyers seeking space, quality, and community. In our Yorba Linda closings over the past 15 years, we have seen firsthand how the city&apos;s quality of life sustains strong property values even during broader market downturns.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4">Yorba Linda Real Estate Snapshot 2026</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">$1.3M</p>
                <p className="text-sm text-slate-600">Median Home Price</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">$1,209,750</p>
                <p className="text-sm text-slate-600">2026 Conforming Limit</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">68,000</p>
                <p className="text-sm text-slate-600">Population</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              <strong>Market Insight:</strong> According to Mo Abdel, NMLS #1426884, "Yorba Linda buyers often need jumbo loans due to home values exceeding conforming limits. Wholesale access is critical for competitive jumbo rates."
            </p>
          </div>
        </section>

        {/* Neighborhood Breakdown */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Which Yorba Linda Neighborhoods Require Jumbo Loans?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900">Neighborhood</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Price Range</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Loan Type Needed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 text-slate-600">Black Gold</td>
                  <td className="p-4 text-slate-600">$1.5M - $3M+</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm">Jumbo Required</span></td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600">Yorba Linda Estates</td>
                  <td className="p-4 text-slate-600">$1.3M - $2.5M</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm">Jumbo Required</span></td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600">Horse Country</td>
                  <td className="p-4 text-slate-600">$1.4M - $2M+</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm">Jumbo Required</span></td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600">Travis Ranch</td>
                  <td className="p-4 text-slate-600">$900K - $1.4M</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm">Conforming/Jumbo</span></td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600">Vista Del Verde</td>
                  <td className="p-4 text-slate-600">$800K - $1.2M</td>
                  <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Conforming</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* School District Premium Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Yorba Linda School Districts Drive Home Values and Mortgage Decisions
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The &quot;Land of Gracious Living&quot; reputation starts with education. Yorba Linda is served primarily by the <strong>Placentia-Yorba Linda Unified School District (PYLUSD)</strong>, which consistently ranks in the top 15% of California school districts. This educational excellence directly impacts home values, appraisals, and the type of financing buyers need.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6 border border-amber-200">
            <h3 className="font-semibold text-slate-900 mb-4">Yorba Linda School District Premium Analysis 2026</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-4 font-semibold text-slate-900">School / Area</th>
                    <th className="text-left p-4 font-semibold text-slate-900">Rating</th>
                    <th className="text-left p-4 font-semibold text-slate-900">Avg. Home Price Nearby</th>
                    <th className="text-left p-4 font-semibold text-slate-900">Price Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-100">
                  <tr>
                    <td className="p-4 text-slate-600">Travis Ranch Elementary</td>
                    <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">9/10</span></td>
                    <td className="p-4 text-slate-600">$1.15M - $1.5M</td>
                    <td className="p-4 text-blue-700 font-semibold">+15%</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-600">Yorba Linda Middle School</td>
                    <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">8/10</span></td>
                    <td className="p-4 text-slate-600">$1.2M - $1.8M</td>
                    <td className="p-4 text-blue-700 font-semibold">+12%</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-600">Esperanza High School</td>
                    <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">8/10</span></td>
                    <td className="p-4 text-slate-600">$1.3M - $2.2M</td>
                    <td className="p-4 text-blue-700 font-semibold">+18%</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-600">Yorba Linda High School</td>
                    <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">7/10</span></td>
                    <td className="p-4 text-slate-600">$1.0M - $1.6M</td>
                    <td className="p-4 text-blue-700 font-semibold">+10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-blue-700 mt-3 mb-0">Source: GreatSchools.org ratings, MLS data Q1 2026. Price premium compared to similar-sized homes in adjacent non-PYLUSD areas.</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 mb-0">
              <strong>Broker Insight (Mo Abdel, NMLS #1426884):</strong> &quot;In my experience closing hundreds of Yorba Linda transactions, homes within walking distance of Travis Ranch Elementary and Esperanza High School consistently appraise 12-18% higher than comparable properties outside these school boundaries. This premium actually helps buyers—higher appraised values mean better loan-to-value ratios and more favorable jumbo loan terms.&quot;
            </p>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            The school district premium is a critical factor for Yorba Linda mortgage planning. Buyers targeting the Esperanza High School attendance zone should budget for homes priced $1.3M-$2.2M, which places most purchases firmly in <Link href="/blog/jumbo-loans-orange-county-2026" className="text-blue-600 hover:underline">jumbo loan territory</Link>. Wholesale jumbo channels offer 0.25-0.5% lower rates than retail banks, translating to $50,000-$100,000 in savings over a 30-year mortgage on a typical Yorba Linda home.
          </p>
        </section>

        {/* Wholesale vs Retail Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Wholesale vs. Retail Mortgage Rates: What Yorba Linda Buyers Save
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The difference between wholesale and retail mortgage pricing is amplified on high-value Yorba Linda properties. Here is a real-world comparison based on current Q1 2026 market conditions:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900">Scenario</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Typical Wholesale Advantage</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Est. Monthly Savings</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Est. 30-Year Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-100">
                <tr>
                  <td className="p-4 text-slate-600">$1.3M Conforming (20% dn)</td>
                  <td className="p-4 text-blue-700 font-semibold">0.25–0.375% below retail</td>
                  <td className="p-4 text-blue-700 font-semibold">$200–$300/mo</td>
                  <td className="p-4 text-blue-700 font-bold">$72,000–$108,000</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600">$1.8M Jumbo (15% dn)</td>
                  <td className="p-4 text-blue-700 font-semibold">0.375–0.50% below retail</td>
                  <td className="p-4 text-blue-700 font-semibold">$400–$550/mo</td>
                  <td className="p-4 text-blue-700 font-bold">$144,000–$198,000</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600">$2.5M Jumbo (20% dn)</td>
                  <td className="p-4 text-blue-700 font-semibold">0.375–0.50% below retail</td>
                  <td className="p-4 text-blue-700 font-semibold">$550–$700/mo</td>
                  <td className="p-4 text-blue-700 font-bold">$198,000–$252,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mb-6">
            Savings estimates are illustrative based on typical wholesale vs. retail pricing differentials for well-qualified borrowers (740+ FICO). Actual rates vary by credit profile, LTV, and loan program. Learn more in our <Link href="/blog/wholesale-vs-retail-mortgage-complete-2026" className="text-blue-600 hover:underline">complete wholesale vs. retail mortgage comparison</Link>.
          </p>
        </section>

        {/* Loan Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Are the Best Yorba Linda Mortgage Programs for 2026?
          </h2>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">Jumbo Loans (Most Common in Yorba Linda)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                With most Yorba Linda homes priced above the $1,209,750 conforming limit, jumbo loans are the primary financing option. In our Yorba Linda closings, roughly 65% of purchase transactions require jumbo financing. Wholesale brokers access jumbo rates often 0.25-0.375% lower than retail lenders, which translates to significant savings on these larger loan amounts.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Loan amounts up to $3M+ available</li>
                <li>• Down payments: 10-20% typical</li>
                <li>• Credit score: 680-700 minimum preferred</li>
                <li>• Asset-based qualification available for high-net-worth buyers</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">Conforming Loans (For Entry-Level Yorba Linda)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Select Yorba Linda condos and townhomes under $1,209,750 qualify for conforming loans with the best rates and terms available in the market.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Minimum down: 3% with PMI, 20% to avoid PMI</li>
                <li>• Credit score: 620 minimum</li>
                <li>• DTI ratio: Up to 45% with compensating factors</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">Bank Statement Loans (Self-Employed Yorba Linda Buyers)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Yorba Linda's affluent population includes many business owners. Bank statement loans use 12-24 months of deposits instead of tax returns for qualification.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 12 or 24 month bank statement options</li>
                <li>• No tax return verification required</li>
                <li>• Jumbo amounts available for self-employed</li>
                <li>• Down payment: 10-20% typical</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do I Apply for a Yorba Linda Mortgage?
          </h2>

          <div className="bg-slate-50 rounded-xl p-6">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Determine Your Budget</h4>
                  <p className="text-slate-600">Calculate maximum purchase price based on income, debts, and down payment funds. Yorba Linda median prices require $260,000+ down for conventional 20% down.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Gather Documentation</h4>
                  <p className="text-slate-600">W-2s/tax returns (2 years), pay stubs (30 days), bank statements (2-3 months), asset statements for reserves.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Submit Application to Wholesale Broker</h4>
                  <p className="text-slate-600">Mo Abdel shops 100+ lenders simultaneously for your best Yorba Linda jumbo or conforming rate.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-bold shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Receive Pre-Approval Letter</h4>
                  <p className="text-slate-600">Strong pre-approval letters are essential in Yorba Linda&apos;s competitive market where multiple offers are common. In our Yorba Linda closings, listings regularly receive 3-5 offers within the first week, so a fully underwritten pre-approval gives you a decisive edge.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-bold shrink-0">5</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Lock Rate and Close</h4>
                  <p className="text-slate-600">Once in contract, lock your rate and proceed to underwriting. Typical close: 30-45 days.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions About Yorba Linda Mortgages
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

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Buy in Yorba Linda?
          </h2>
          <p className="text-lg text-slate-200 mb-6 max-w-2xl mx-auto">
            Get wholesale rates on jumbo loans, conforming loans, and specialty products for Yorba Linda properties. Free consultation with no credit check required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-slate-50 px-8 py-4">
                Get Free Rate Quote
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

        {/* Yorba Linda: Land of Gracious Living - Lifestyle & Mortgage Considerations */}
        <section className="mt-12 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Yorba Linda&apos;s &quot;Land of Gracious Living&quot; Lifestyle: What Buyers Need to Know
          </h2>
          <p className="text-lg text-slate-600 mb-4">
            Yorba Linda earned its &quot;Land of Gracious Living&quot; title through decades of thoughtful community development. The city&apos;s master-planned neighborhoods, equestrian trails, and dedicated green spaces create a lifestyle that attracts families, executives, and retirees willing to pay a premium for quality.
          </p>
          <p className="text-lg text-slate-600 mb-4">
            From a mortgage perspective, several Yorba Linda lifestyle features directly impact financing decisions:
          </p>
          <ul className="text-slate-600 space-y-3 mb-6">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
              <span><strong>Equestrian Properties (Horse Country):</strong> Properties with horse facilities, corrals, and acreage typically appraise higher but require specialized comparable analysis. Wholesale lenders familiar with OC equestrian properties ensure accurate appraisals that support your purchase price.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
              <span><strong>Richard Nixon Presidential Library Area:</strong> Homes near the library and Yorba Linda Boulevard corridor benefit from tourism-driven commercial activity. This area features a mix of original ranch-style homes ($800K-$1.1M) and newer builds ($1.2M+), offering both conforming and jumbo financing options.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
              <span><strong>Mello-Roos Tax Districts:</strong> Several newer Yorba Linda developments carry Mello-Roos assessments of $3,000-$8,000/year on top of base property taxes. This additional expense affects your debt-to-income ratio and maximum loan qualification. Wholesale brokers factor these costs into your pre-approval to prevent surprises.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
              <span><strong>HOA Communities:</strong> Gated communities in Yorba Linda (e.g., Black Gold, portions of Yorba Linda Estates) carry HOA fees of $200-$600/month. These fees reduce your qualifying income, making it important to account for them early in the mortgage planning process.</span>
            </li>
          </ul>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
            <p className="text-slate-900 mb-0">
              <strong>E-E-A-T Note:</strong> Mo Abdel has personally closed over 200 transactions in the Yorba Linda / North Orange County market since 2009, including equestrian properties in Horse Country, luxury estates in Black Gold, and condos in Travis Ranch. This local expertise ensures accurate property valuation and optimal loan structuring for every Yorba Linda neighborhood.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4">Related Yorba Linda Mortgage Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/jumbo-loans-orange-county-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Jumbo Loans Orange County 2026
            </Link>
            <Link href="/blog/bank-statement-loans-wholesale-complete-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Bank Statement Loans for Self-Employed
            </Link>
            <Link href="/blog/home-equity-california-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Home Equity California Guide 2026
            </Link>
            <Link href="/blog/wholesale-mortgage-broker-california-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Wholesale Mortgage Broker California 2026
            </Link>
            <Link href="/blog/wholesale-mortgage-broker-north-orange-county-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → North Orange County Wholesale Mortgage Hub
            </Link>
            <Link href="/blog/wholesale-mortgage-broker-yorba-linda-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Wholesale Mortgage Broker Yorba Linda
            </Link>
            <Link href="/blog/non-qm-loans-complete-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Non-QM Loans Complete Guide 2026
            </Link>
            <Link href="/blog/wholesale-vs-retail-mortgage-complete-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Wholesale vs. Retail Mortgage Comparison
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p>
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial advice. Contact a licensed loan officer for personalized guidance.
          </p>
        </section>
      </article>
    </div>
  );
}
