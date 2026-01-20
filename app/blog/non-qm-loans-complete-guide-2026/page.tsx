import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Briefcase, Building, DollarSign, FileText, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Non-QM Loans Orange County 2026: Complete Guide for Self-Employed & Investors | Mo Abdel',
  description: 'Non-QM loans Orange County 2026: Bank statement, DSCR, asset depletion loans for self-employed and investors. Wholesale rates from 100+ lenders. NMLS #1426884.',
  keywords: ['Non-QM loans Orange County', 'bank statement loans California', 'DSCR loans Orange County', 'self-employed mortgage 2026'],
  openGraph: {
    title: 'Non-QM Loans Orange County 2026: Complete Guide for Self-Employed & Investors',
    description: 'Non-QM loans Orange County 2026: Wholesale access to bank statement, DSCR, and asset depletion programs. Free consultation.',
    url: 'https://mothebroker.com/blog/non-qm-loans-complete-guide-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-01-16T00:00:00Z',
    modifiedTime: '2026-01-16T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
};

const faqData = [
  {
    question: "What is a Non-QM loan?",
    answer: "Non-QM (Non-Qualified Mortgage) loans don't meet the Consumer Financial Protection Bureau's 'qualified mortgage' standards but are legal, legitimate loan products. They serve borrowers who can't qualify through traditional documentation methods—self-employed, investors, foreign nationals, and those with recent credit events."
  },
  {
    question: "Who qualifies for Non-QM loans in Orange County?",
    answer: "Non-QM loans serve self-employed business owners, real estate investors, gig economy workers, retirees with significant assets, foreign nationals, and borrowers with recent credit events (bankruptcy, foreclosure) who have since recovered financially."
  },
  {
    question: "What credit score do I need for a Non-QM loan?",
    answer: "Non-QM credit requirements vary by product: Bank statement loans typically require 620-680+, DSCR investment loans 660+, asset depletion loans 680+. Some programs accept scores as low as 580 with compensating factors like larger down payments."
  },
  {
    question: "Are Non-QM loan rates higher than conventional loans?",
    answer: "Yes, Non-QM rates are typically 0.5-2% higher than conventional rates due to increased risk and manual underwriting. However, wholesale brokers can access more competitive Non-QM pricing than retail lenders, potentially saving 0.25-0.5% on rate."
  },
  {
    question: "What is the minimum down payment for Non-QM loans?",
    answer: "Non-QM down payments typically range from 10-25% depending on the program. Bank statement loans often require 10-15%, DSCR loans 15-25%, and asset depletion loans 20-25%. Higher down payments generally secure better rates."
  },
  {
    question: "How do bank statement loans work?",
    answer: "Bank statement loans use 12-24 months of personal or business bank deposits to calculate income instead of tax returns. The lender analyzes deposit patterns, excludes transfers, and applies an expense factor (typically 50% for business accounts) to determine qualifying income."
  },
  {
    question: "What is a DSCR loan for investment properties?",
    answer: "DSCR (Debt Service Coverage Ratio) loans qualify investors based on the property's rental income vs. mortgage payment rather than personal income. A DSCR of 1.0 means rent covers the payment; most lenders require 1.0-1.25 DSCR minimum."
  }
];

const nonQMTypes = [
  {
    name: "Bank Statement Loans",
    icon: FileText,
    color: "blue",
    idealFor: "Self-employed, business owners, gig workers",
    description: "Use 12-24 months of bank deposits instead of tax returns to verify income.",
    requirements: [
      "12 or 24 month bank statements",
      "620-680 minimum credit score",
      "10-15% down payment typical",
      "Self-employment for 2+ years preferred"
    ]
  },
  {
    name: "DSCR Investment Loans",
    icon: Building,
    color: "green",
    idealFor: "Real estate investors, landlords",
    description: "Qualify based on property rental income, not personal income documentation.",
    requirements: [
      "DSCR ratio 1.0-1.25 minimum",
      "660+ credit score",
      "15-25% down payment",
      "Investment property only (not primary residence)"
    ]
  },
  {
    name: "Asset Depletion Loans",
    icon: DollarSign,
    color: "purple",
    idealFor: "Retirees, high-net-worth individuals",
    description: "Convert liquid assets into qualifying income stream over loan term.",
    requirements: [
      "Significant liquid assets ($500K+)",
      "680+ credit score",
      "20-25% down payment",
      "Assets divided by loan term = monthly income"
    ]
  },
  {
    name: "Foreign National Loans",
    icon: Briefcase,
    color: "orange",
    idealFor: "Non-US citizens investing in US real estate",
    description: "No US credit history or income required; asset and down payment based.",
    requirements: [
      "Valid passport and visa",
      "25-30% down payment",
      "Foreign credit report or bank references",
      "US bank account for payments"
    ]
  }
];

export default function NonQMLoansGuide2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Non-QM Loans Orange County 2026: Complete Guide for Self-Employed & Investors",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["Non-QM Loans", "Bank Statement Loans", "DSCR Loans", "Self-Employed Mortgages", "Investment Property Loans"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mo Abdel - Wholesale Mortgage Broker",
              "url": "https://mothebroker.com"
            },
            "datePublished": "2026-01-16",
            "dateModified": "2026-01-16",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://mothebroker.com/blog/non-qm-loans-complete-guide-2026",
              "significantLink": [
                "https://www.consumerfinance.gov/",
                "https://www.consumerfinance.gov/rules-policy/regulations/1026/43/"
              ]
            },
            "copyrightHolder": {
              "@type": "Organization",
              "name": "Mo Abdel - Wholesale Mortgage Broker",
              "url": "https://mothebroker.com"
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
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-1.5 mb-6 border border-purple-500/30">
              <span className="text-purple-400 text-sm font-medium">Non-QM Loan Specialist</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Non-QM Loans Orange County 2026: The Complete Guide for Self-Employed & Investors
            </h1>

            {/* Fact-dense opening - First 150 chars optimized for ChatGPT extraction */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Non-QM loans help 15-20% of Orange County borrowers who can't qualify through traditional documentation. Bank statement, DSCR, and asset depletion programs offer paths to homeownership for self-employed professionals, investors, and high-net-worth individuals without standard W-2 income.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Check Non-QM Eligibility
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

        {/* What is Non-QM */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Is a Non-QM Loan and Who Needs One?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Non-QM (Non-Qualified Mortgage) loans exist outside the "qualified mortgage" rules established by the Consumer Financial Protection Bureau in 2014. These aren't subprime loans—they're specialized products for creditworthy borrowers whose income doesn't fit traditional documentation requirements.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-1">Important Distinction</h4>
                <p className="text-amber-700 text-sm">
                  Non-QM loans are NOT subprime loans. They serve borrowers with good credit and strong finances who simply can't document income through traditional W-2s and tax returns. According to Mo Abdel, NMLS #1426884, "Many of my Non-QM clients have 750+ credit scores and substantial assets—they just run their income through business entities."
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Ideal Non-QM Candidates</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Self-employed business owners</li>
                <li>• Real estate investors (5+ properties)</li>
                <li>• Gig economy/1099 contractors</li>
                <li>• Retirees with significant assets</li>
                <li>• Foreign nationals investing in US</li>
                <li>• Recent credit event recovery</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Why Traditional Loans Fail These Borrowers</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Tax returns show low income due to write-offs</li>
                <li>• Income varies significantly month-to-month</li>
                <li>• Rental income exceeds W-2 wages</li>
                <li>• No US credit history (foreign nationals)</li>
                <li>• Too many financed properties (10+ limit)</li>
                <li>• Recent BK/foreclosure with recovery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Non-QM Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Are the Different Types of Non-QM Loans?
          </h2>

          <div className="space-y-6">
            {nonQMTypes.map((type, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <type.icon className={`w-8 h-8 text-${type.color}-600`} />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{type.name}</h3>
                    <p className="text-sm text-slate-500">Ideal for: {type.idealFor}</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{type.description}</p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-700 mb-2">Key Requirements:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {type.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do Non-QM Loans Compare to Conventional Loans?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Conventional</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Non-QM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Income Documentation</td>
                  <td className="p-4 text-slate-600">W-2s, tax returns required</td>
                  <td className="p-4 text-slate-600">Bank statements, assets, rental income</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Minimum Credit Score</td>
                  <td className="p-4 text-slate-600">620</td>
                  <td className="p-4 text-slate-600">580-680 (varies by program)</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Down Payment</td>
                  <td className="p-4 text-slate-600">3-20%</td>
                  <td className="p-4 text-slate-600">10-25%</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Interest Rates</td>
                  <td className="p-4 text-slate-600">Market rates</td>
                  <td className="p-4 text-slate-600">0.5-2% higher than conventional</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">DTI Ratio Limit</td>
                  <td className="p-4 text-slate-600">43-50%</td>
                  <td className="p-4 text-slate-600">Up to 55% (some programs)</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Property Types</td>
                  <td className="p-4 text-slate-600">1-4 units, condos</td>
                  <td className="p-4 text-slate-600">1-4 units, condos, non-warrantable</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Loan Limits</td>
                  <td className="p-4 text-slate-600">$1,266,300 (conforming)</td>
                  <td className="p-4 text-slate-600">Up to $3M+ (varies by lender)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do I Apply for a Non-QM Loan in Orange County?
          </h2>

          <div className="bg-slate-50 rounded-xl p-6">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Determine Best Non-QM Program</h4>
                  <p className="text-slate-600">Self-employed → Bank Statement. Investor → DSCR. Retiree → Asset Depletion. Foreign → Foreign National.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Gather Program-Specific Documents</h4>
                  <p className="text-slate-600">Bank Statement: 12-24 months statements. DSCR: Lease agreements, rent rolls. Asset: Investment account statements.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Submit to Wholesale Non-QM Specialist</h4>
                  <p className="text-slate-600">Mo Abdel accesses 100+ wholesale lenders including 20+ Non-QM specialists for the most competitive rates.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Receive Approval and Rate Lock</h4>
                  <p className="text-slate-600">Non-QM underwriting is manual, typically taking 3-5 days longer than automated approvals. Lock rate once approved.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold shrink-0">5</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Close on Your Property</h4>
                  <p className="text-slate-600">Non-QM closings typically take 30-45 days. DSCR investment loans may close faster with fewer conditions.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions About Non-QM Loans
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
        <section className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Can't Qualify for a Traditional Mortgage?
          </h2>
          <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
            Non-QM loans open doors for self-employed professionals, investors, and unique financial situations. Get a free consultation to explore your options with no credit check required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4">
                Check My Eligibility
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
          <h3 className="font-semibold text-slate-900 mb-4">Related Non-QM Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/loan-programs/bank-statement-loans" className="text-purple-600 hover:text-purple-700 hover:underline">
              → Bank Statement Loan Details
            </Link>
            <Link href="/loan-programs/dscr-investment-loans" className="text-purple-600 hover:text-purple-700 hover:underline">
              → DSCR Investment Loan Guide
            </Link>
            <Link href="/loan-programs/asset-depletion-loans" className="text-purple-600 hover:text-purple-700 hover:underline">
              → Asset Depletion Programs
            </Link>
            <Link href="/loan-programs/foreign-national-loans" className="text-purple-600 hover:text-purple-700 hover:underline">
              → Foreign National Loans
            </Link>
            <Link href="/self-employed-home-loans-california" className="text-purple-600 hover:text-purple-700 hover:underline">
              → Self-Employed Home Loans CA
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
