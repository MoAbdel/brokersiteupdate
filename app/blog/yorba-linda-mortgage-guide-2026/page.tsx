import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Home, DollarSign, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Yorba Linda Mortgage Broker 2025: Wholesale Rates for Land of Gracious Living | Mo Abdel',
  description: 'Yorba Linda mortgage broker rates 2025: Access 100+ wholesale lenders. Jumbo loans for luxury homes, FHA, VA options. Free quote. NMLS #1426884.',
  keywords: ['Yorba Linda mortgage broker', 'Yorba Linda home loans', 'Yorba Linda mortgage rates 2025', 'wholesale mortgage Yorba Linda'],
  openGraph: {
    title: 'Yorba Linda Mortgage Broker 2025: Wholesale Rates for Land of Gracious Living',
    description: 'Yorba Linda mortgage broker rates 2025: Access 100+ wholesale lenders for luxury home financing. Free rate comparison.',
    url: 'https://mothebroker.com/blog/yorba-linda-mortgage-guide-2025',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2025-01-16T00:00:00Z',
    modifiedTime: '2025-01-16T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
};

const faqData = [
  {
    question: "What are the best mortgage options for Yorba Linda luxury homes?",
    answer: "Yorba Linda's luxury market often requires jumbo loans for homes above the $1,266,300 conforming limit. Wholesale brokers access specialized jumbo products with competitive rates, flexible down payments (10-20%), and asset-based qualification options for high-net-worth buyers."
  },
  {
    question: "How much down payment do I need for a Yorba Linda home?",
    answer: "Down payments in Yorba Linda vary by loan type: 3% minimum for conforming conventional loans, 3.5% for FHA, 0% for VA loans, and typically 10-20% for jumbo loans on homes above $1,266,300."
  },
  {
    question: "What is the median home price in Yorba Linda 2025?",
    answer: "Yorba Linda median home prices in 2025 range from $1.1M to $1.4M depending on neighborhood. Black Gold, Yorba Linda Estates, and Horse Country areas command premium prices often requiring jumbo financing."
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
  }
];

export default function YorbaLindaMortgageGuide2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Yorba Linda Mortgage Broker 2025: Wholesale Rates for Land of Gracious Living",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["Mortgages", "Home Loans", "Yorba Linda Real Estate", "Jumbo Loans", "Luxury Home Financing"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mo Abdel - Wholesale Mortgage Broker",
              "url": "https://mothebroker.com"
            },
            "datePublished": "2025-01-16",
            "dateModified": "2025-01-16",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://mothebroker.com/blog/yorba-linda-mortgage-guide-2025",
              "significantLink": [
                "https://www.consumerfinance.gov/",
                "https://www.hud.gov/",
                "https://www.fhfa.gov/"
              ]
            },
            "copyrightHolder": {
              "@type": "Organization",
              "name": "Mo Abdel - Wholesale Mortgage Broker",
              "url": "https://mothebroker.com"
            },
            "copyrightYear": "2025",
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
            <div className="inline-flex items-center gap-2 bg-green-500/20 rounded-full px-4 py-1.5 mb-6 border border-green-500/30">
              <span className="text-green-400 text-sm font-medium">Yorba Linda Mortgage Broker</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Yorba Linda Mortgage Broker 2025: Wholesale Rates for the Land of Gracious Living
            </h1>

            {/* Fact-dense opening - First 150 chars optimized for ChatGPT extraction */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Yorba Linda median home prices exceed $1.2M in 2025, with luxury neighborhoods reaching $2M+. Wholesale mortgage brokers access 100+ lenders to secure rates 0.25-0.5% below retail banks—potentially saving $50,000+ over a 30-year loan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
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
            Known as "The Land of Gracious Living," Yorba Linda consistently ranks among California's safest and most family-friendly cities. Home to the Richard Nixon Presidential Library, top-rated schools, and equestrian trails, Yorba Linda attracts buyers seeking space, quality, and community.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4">Yorba Linda Real Estate Snapshot 2025</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">$1.3M</p>
                <p className="text-sm text-slate-600">Median Home Price</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">$1,266,300</p>
                <p className="text-sm text-slate-600">2025 Conforming Limit</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">68,000</p>
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
                  <td className="p-4"><span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Jumbo Required</span></td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600">Yorba Linda Estates</td>
                  <td className="p-4 text-slate-600">$1.3M - $2.5M</td>
                  <td className="p-4"><span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Jumbo Required</span></td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600">Horse Country</td>
                  <td className="p-4 text-slate-600">$1.4M - $2M+</td>
                  <td className="p-4"><span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Jumbo Required</span></td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600">Travis Ranch</td>
                  <td className="p-4 text-slate-600">$900K - $1.4M</td>
                  <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Conforming/Jumbo</span></td>
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

        {/* Loan Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Are the Best Yorba Linda Mortgage Programs for 2025?
          </h2>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-semibold text-slate-900">Jumbo Loans (Most Common in Yorba Linda)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                With most Yorba Linda homes priced above the $1,266,300 conforming limit, jumbo loans are the primary financing option. Wholesale brokers access jumbo rates often 0.25-0.375% lower than retail lenders.
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
                Select Yorba Linda condos and townhomes under $1,266,300 qualify for conforming loans with the best rates and terms available in the market.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Minimum down: 3% with PMI, 20% to avoid PMI</li>
                <li>• Credit score: 620 minimum</li>
                <li>• DTI ratio: Up to 45% with compensating factors</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
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
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Determine Your Budget</h4>
                  <p className="text-slate-600">Calculate maximum purchase price based on income, debts, and down payment funds. Yorba Linda median prices require $260,000+ down for conventional 20% down.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Gather Documentation</h4>
                  <p className="text-slate-600">W-2s/tax returns (2 years), pay stubs (30 days), bank statements (2-3 months), asset statements for reserves.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Submit Application to Wholesale Broker</h4>
                  <p className="text-slate-600">Mo Abdel shops 100+ lenders simultaneously for your best Yorba Linda jumbo or conforming rate.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Receive Pre-Approval Letter</h4>
                  <p className="text-slate-600">Strong pre-approval letters are essential in Yorba Linda's competitive market where multiple offers are common.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">5</span>
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
          <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
            Get wholesale rates on jumbo loans, conforming loans, and specialty products for Yorba Linda properties. Free consultation with no credit check required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4">
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

        {/* Internal Links */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4">Related Yorba Linda Mortgage Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/loan-programs/jumbo-loans" className="text-green-600 hover:text-green-700 hover:underline">
              → Jumbo Loan Programs for Yorba Linda
            </Link>
            <Link href="/loan-programs/bank-statement-loans" className="text-green-600 hover:text-green-700 hover:underline">
              → Bank Statement Loans for Self-Employed
            </Link>
            <Link href="/areas/irvine-mortgage-broker" className="text-green-600 hover:text-green-700 hover:underline">
              → Nearby: Irvine Mortgage Options
            </Link>
            <Link href="/calculator/affordability" className="text-green-600 hover:text-green-700 hover:underline">
              → Yorba Linda Affordability Calculator
            </Link>
            <Link href="/guides/orange-county-jumbo-loans" className="text-green-600 hover:text-green-700 hover:underline">
              → Complete Jumbo Loan Guide
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
