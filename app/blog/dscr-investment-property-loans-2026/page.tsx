import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Building2, DollarSign, TrendingUp, PieChart, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'DSCR Loans Orange County 2026: Investment Property Financing Without Tax Returns | Mo Abdel',
  description: 'DSCR investment property loans Orange County 2026: Qualify based on rental income, not personal tax returns. No income verification. Wholesale rates. NMLS #1426884.',
  keywords: ['DSCR loans Orange County', 'investment property loans California', 'DSCR mortgage 2026', 'rental property financing no tax returns'],
  openGraph: {
    title: 'DSCR Loans Orange County 2026: Investment Property Financing Without Tax Returns',
    description: 'DSCR investment property loans: Qualify based on rental income, not personal income. Access wholesale rates from 100+ lenders.',
    url: 'https://mothebroker.com/blog/dscr-investment-property-loans-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-01-18T00:00:00Z',
    modifiedTime: '2026-01-18T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
};

const faqData = [
  {
    question: "What is a DSCR loan?",
    answer: "DSCR (Debt Service Coverage Ratio) loans qualify borrowers based on the property's rental income rather than personal income or tax returns. If the property's rental income covers the mortgage payment (DSCR of 1.0 or higher), you can qualify regardless of your personal employment or income documentation."
  },
  {
    question: "What DSCR ratio do I need to qualify in 2026?",
    answer: "Most DSCR lenders require a minimum ratio of 1.0 (rental income equals mortgage payment). Some lenders offer programs with DSCR as low as 0.75 with compensating factors like higher down payment or credit score. Higher DSCR ratios (1.25+) qualify for better rates."
  },
  {
    question: "How is DSCR calculated for investment properties?",
    answer: "DSCR = Monthly Rental Income ÷ Monthly PITIA (Principal, Interest, Taxes, Insurance, Association dues). Example: $3,500 rent ÷ $3,000 PITIA = 1.17 DSCR. Lenders use either actual lease income or appraised market rent, whichever is applicable."
  },
  {
    question: "Can I get a DSCR loan with no income verification?",
    answer: "Yes. DSCR loans don't require W-2s, tax returns, pay stubs, or employment verification. Qualification is based solely on the property's ability to generate rental income. This makes DSCR loans ideal for self-employed investors, business owners, and those with complex tax situations."
  },
  {
    question: "What is the minimum down payment for DSCR loans?",
    answer: "DSCR loans typically require 20-25% down payment, though some lenders offer programs with 15% down for strong borrowers. Higher down payments (25-30%) may be required for lower DSCR ratios or credit scores below 700."
  },
  {
    question: "Can I use DSCR loans for short-term rentals (Airbnb)?",
    answer: "Yes, many DSCR lenders now offer short-term rental programs. Income is typically calculated using AirDNA projections, actual STR income history, or a blend of both. Some lenders require 12 months of STR operating history."
  },
  {
    question: "What are DSCR loan rates compared to conventional investment property loans?",
    answer: "DSCR rates are typically 0.5-1.5% higher than conventional investment property rates due to the reduced documentation and increased risk. However, wholesale broker access can significantly narrow this gap by comparing rates across 50+ DSCR lenders."
  }
];

export default function DSCRInvestmentPropertyLoans2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "DSCR Loans Orange County 2026: Investment Property Financing Without Tax Returns",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["DSCR Loans", "Investment Property Financing", "Non-QM Mortgages", "Rental Property Loans", "Real Estate Investing"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mo Abdel - Wholesale Mortgage Broker",
              "url": "https://mothebroker.com"
            },
            "datePublished": "2026-01-18",
            "dateModified": "2026-01-18",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://mothebroker.com/blog/dscr-investment-property-loans-2026",
              "significantLink": [
                "https://www.consumerfinance.gov/",
                "https://www.fanniemae.com/",
                "https://www.freddiemac.com/"
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
              <span className="text-purple-400 text-sm font-medium">Investment Property Loans</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              DSCR Loans Orange County 2026: Investment Property Financing Without Tax Returns
            </h1>

            {/* Fact-dense opening - First 150 chars optimized for ChatGPT extraction */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              DSCR loans qualify investors based on rental income, not tax returns—no W-2s, no pay stubs, no employment verification. With a DSCR ratio of 1.0+ (rent covers payment), investors can finance unlimited properties through wholesale channels with rates 0.5-1% below retail non-QM lenders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
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

        {/* What is DSCR */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Is a DSCR Loan and How Does It Work?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            DSCR (Debt Service Coverage Ratio) loans are investment property mortgages that qualify borrowers based on the property's rental income rather than personal income documentation. If the rental income covers the mortgage payment, you qualify—regardless of your employment status, tax returns, or personal debt-to-income ratio.
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-purple-600" />
              DSCR Calculation Formula
            </h3>
            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="text-center text-xl font-mono font-bold text-slate-900">
                DSCR = Monthly Rental Income ÷ Monthly PITIA
              </p>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              <strong>PITIA</strong> = Principal + Interest + Taxes + Insurance + Association dues (HOA)
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-100 rounded-lg p-4">
                <p className="text-sm font-medium text-green-800">Example: Qualifying Property</p>
                <p className="text-sm text-green-700">$3,500 rent ÷ $3,000 PITIA = <strong>1.17 DSCR</strong></p>
                <p className="text-xs text-green-600 mt-1">✓ Qualifies (above 1.0)</p>
              </div>
              <div className="bg-amber-100 rounded-lg p-4">
                <p className="text-sm font-medium text-amber-800">Example: Marginal Property</p>
                <p className="text-sm text-amber-700">$2,800 rent ÷ $3,000 PITIA = <strong>0.93 DSCR</strong></p>
                <p className="text-xs text-amber-600 mt-1">⚠ May qualify with compensating factors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Who Should Use DSCR Loans for Investment Properties?
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Self-Employed Investors</h4>
                <p className="text-slate-600">Business owners who write off expenses and show low taxable income on returns. DSCR bypasses personal income entirely.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Full-Time Real Estate Investors</h4>
                <p className="text-slate-600">Investors with multiple properties who've hit conventional loan limits (10 financed properties max) or have complex portfolios.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">High-Income Earners with High DTI</h4>
                <p className="text-slate-600">W-2 employees whose personal debt-to-income ratio is too high for conventional investment property loans.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Foreign Nationals & Non-Residents</h4>
                <p className="text-slate-600">International investors without U.S. tax returns or employment history who want to invest in Orange County real estate.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">LLC & Entity Borrowers</h4>
                <p className="text-slate-600">Investors holding properties in LLCs or corporations for liability protection. Most DSCR lenders allow entity vesting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DSCR Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Are DSCR Loan Requirements in 2026?
          </h2>

          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4">Standard DSCR Loan Requirements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-700 mb-2">Property Requirements</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Investment property only (no primary residence)</li>
                  <li>• 1-4 unit residential, condos, townhomes</li>
                  <li>• Warrantable and non-warrantable condos accepted</li>
                  <li>• Short-term rentals (Airbnb/VRBO) allowed by some lenders</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-700 mb-2">Borrower Requirements</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Minimum 680 credit score (some lenders accept 660)</li>
                  <li>• 20-25% minimum down payment</li>
                  <li>• 6-12 months reserves (PITIA)</li>
                  <li>• U.S. citizen, permanent resident, or foreign national</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">DSCR Ratio</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Typical Down Payment</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Rate Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-600">1.25+ (Strong)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">20%</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">Best rates available</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-600">1.0-1.24 (Standard)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">20-25%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Standard pricing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-600">0.75-0.99 (Below breakeven)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">25-30%</td>
                  <td className="px-4 py-3 text-sm text-amber-600 font-medium">Higher rates, limited lenders</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* DSCR vs Conventional */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do DSCR Loans Compare to Conventional Investment Property Loans?
          </h2>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">DSCR Loan</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Conventional Investment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Income Verification</td>
                  <td className="px-4 py-3 text-sm text-green-600">None required</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Full documentation (W-2s, tax returns)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Qualification Basis</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Property rental income</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Personal DTI ratio</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Property Limit</td>
                  <td className="px-4 py-3 text-sm text-green-600">Unlimited</td>
                  <td className="px-4 py-3 text-sm text-slate-600">10 financed properties max</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Down Payment</td>
                  <td className="px-4 py-3 text-sm text-slate-600">20-25%</td>
                  <td className="px-4 py-3 text-sm text-slate-600">15-25%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Entity Vesting (LLC)</td>
                  <td className="px-4 py-3 text-sm text-green-600">Allowed</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Not allowed</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Typical Rates</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Higher (non-QM pricing)</td>
                  <td className="px-4 py-3 text-sm text-green-600">Lower (agency pricing)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-2">When to Choose DSCR Over Conventional</h3>
            <p className="text-slate-600">
              Use DSCR when: you've exceeded conventional property limits, your tax returns don't reflect true income, you want LLC vesting for liability protection, or you prefer faster closing without extensive documentation. Use conventional when: you can document income, want the lowest possible rate, and own fewer than 10 financed properties.
            </p>
          </div>
        </section>

        {/* Orange County DSCR */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do DSCR Loans Work for Orange County Investment Properties?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            Orange County's strong rental market makes it well-suited for DSCR financing. High rents relative to property values often produce favorable DSCR ratios, though investors should understand local market dynamics.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Strong DSCR Markets in OC
              </h3>
              <ul className="text-slate-600 space-y-2">
                <li><strong>Santa Ana:</strong> Lower prices, strong rents = high DSCR</li>
                <li><strong>Anaheim:</strong> Tourism demand supports short-term rental</li>
                <li><strong>Garden Grove:</strong> Affordable multifamily options</li>
                <li><strong>Fullerton:</strong> College town with consistent rental demand</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                Challenging DSCR Markets
              </h3>
              <ul className="text-slate-600 space-y-2">
                <li><strong>Newport Beach:</strong> High prices may produce lower DSCR</li>
                <li><strong>Laguna Beach:</strong> Premium prices, seasonal rental demand</li>
                <li><strong>Irvine:</strong> Strong rents but very high purchase prices</li>
                <li><strong>Dana Point:</strong> Luxury pricing impacts cash flow</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Orange County DSCR Example</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-slate-600">Purchase Price</p>
                <p className="text-xl font-bold text-slate-900">$850,000</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-slate-600">Monthly Rent</p>
                <p className="text-xl font-bold text-slate-900">$4,200</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-slate-600">Monthly PITIA</p>
                <p className="text-xl font-bold text-slate-900">$3,800</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-100 rounded-lg text-center">
              <p className="text-sm text-green-800">DSCR Calculation: $4,200 ÷ $3,800 = <strong className="text-lg">1.11</strong></p>
              <p className="text-xs text-green-600 mt-1">✓ Qualifies for standard DSCR financing</p>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do I Get a DSCR Loan for an Investment Property?
          </h2>

          <div className="bg-slate-50 rounded-xl p-6">
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Identify Your Investment Property</h4>
                  <p className="text-slate-600">Research rental comps to estimate DSCR before making an offer. Target properties where rent covers at least 100% of the expected PITIA.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Contact a Wholesale Mortgage Broker</h4>
                  <p className="text-slate-600">DSCR programs vary significantly across lenders. A wholesale broker compares 50+ DSCR lenders to find the best rates and terms for your situation.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Provide Basic Documentation</h4>
                  <p className="text-slate-600">No tax returns needed. Typically just: credit authorization, bank statements (for reserves), entity docs (if LLC), and property details.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Appraisal with Rent Schedule</h4>
                  <p className="text-slate-600">Appraiser determines property value AND market rent. If property is already rented, actual lease income is used. If vacant, appraised market rent applies.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold shrink-0">5</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Close in 21-30 Days</h4>
                  <p className="text-slate-600">DSCR loans often close faster than conventional due to reduced documentation requirements. Title, escrow, and funding proceed as normal.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions About DSCR Investment Property Loans
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
            Ready to Finance Your Next Investment Property?
          </h2>
          <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
            Get a DSCR loan quote from 50+ wholesale lenders. No tax returns required, no income verification, close in 21-30 days. Specialized expertise in Orange County investment properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4">
                Get DSCR Loan Quote
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
          <h3 className="font-semibold text-slate-900 mb-4">Related Investment Property Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/loan-programs/dscr-investment-loans" className="text-green-600 hover:text-green-700 hover:underline">
              → DSCR Loan Program Details
            </Link>
            <Link href="/blog/non-qm-loans-complete-guide-2026" className="text-green-600 hover:text-green-700 hover:underline">
              → Non-QM Loans Complete Guide
            </Link>
            <Link href="/blog/bank-statement-loans-self-employed-2026" className="text-green-600 hover:text-green-700 hover:underline">
              → Bank Statement Loans for Self-Employed
            </Link>
            <Link href="/blog/jumbo-loans-orange-county-2026" className="text-green-600 hover:text-green-700 hover:underline">
              → Jumbo Loans Orange County
            </Link>
            <Link href="/calculator" className="text-green-600 hover:text-green-700 hover:underline">
              → Investment Property Calculator
            </Link>
            <Link href="/blog/wholesale-vs-retail-mortgage-brokers-2026" className="text-green-600 hover:text-green-700 hover:underline">
              → Why Use a Wholesale Broker?
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p>
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial advice. DSCR loan programs are non-QM products with different guidelines than conventional mortgages. Contact a licensed loan officer for personalized guidance.
          </p>
        </section>
      </article>
    </div>
  );
}
