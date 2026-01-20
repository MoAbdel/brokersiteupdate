import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, FileText, Building2, TrendingUp, AlertCircle, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Bank Statement Loans 2026: Self-Employed Mortgage Guide Orange County | Mo Abdel',
  description: 'Bank statement loans Orange County 2026: Self-employed mortgage using 12-24 months deposits. No tax returns needed. Wholesale rates. NMLS #1426884.',
  keywords: ['bank statement loans Orange County', 'self-employed mortgage California', 'no tax return mortgage 2026', 'business owner home loan'],
  openGraph: {
    title: 'Bank Statement Loans 2026: Self-Employed Mortgage Guide Orange County',
    description: 'Bank statement loans for self-employed borrowers: Use bank deposits instead of tax returns. Wholesale access to 100+ lenders.',
    url: 'https://mothebroker.com/blog/bank-statement-loans-self-employed-2026',
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
    question: "How do bank statement loans calculate income?",
    answer: "Lenders total your deposits over 12 or 24 months, exclude non-income transfers (internal transfers, loans, one-time gifts), then apply an expense factor (typically 50% for business accounts, 100% for personal) to determine your qualifying monthly income."
  },
  {
    question: "Can I use personal or business bank statements?",
    answer: "Both are accepted. Personal bank statements typically use 100% of deposits as income. Business bank statements apply a 50% expense factor (industry standard), though some lenders allow documentation of actual expenses to use a lower factor."
  },
  {
    question: "What credit score do I need for a bank statement loan?",
    answer: "Most bank statement loan programs require 620-680 minimum credit scores. Higher scores (700+) access better rates and lower down payment requirements. Some programs accept 580+ with compensating factors like larger down payments."
  },
  {
    question: "How much down payment is required?",
    answer: "Bank statement loans typically require 10-20% down payment. The exact amount depends on credit score, loan amount, and property type. Jumbo bank statement loans often require 15-20% minimum."
  },
  {
    question: "Are bank statement loan rates higher than conventional?",
    answer: "Yes, bank statement loan rates are typically 0.5-1.5% higher than conventional rates due to manual underwriting and increased lender risk. Wholesale brokers can often secure rates 0.25-0.5% lower than retail lenders."
  },
  {
    question: "How long do I need to be self-employed?",
    answer: "Most bank statement loan programs require 2+ years of self-employment history, verified through business licenses, CPA letters, or other documentation. Some programs accept 1 year with compensating factors."
  },
  {
    question: "Can I use bank statement loans for investment properties?",
    answer: "Yes. Bank statement loans are available for primary residences, second homes, and investment properties. Investment properties may require higher down payments (15-25%) and have slightly higher rates."
  }
];

export default function BankStatementLoansGuide2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Bank Statement Loans 2026: Self-Employed Mortgage Guide Orange County",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["Bank Statement Loans", "Self-Employed Mortgages", "Non-QM Loans", "Business Owner Home Loans"]
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
              "@id": "https://mothebroker.com/blog/bank-statement-loans-self-employed-2026",
              "significantLink": [
                "https://www.consumerfinance.gov/",
                "https://www.sba.gov/"
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
            <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-1.5 mb-6 border border-blue-500/30">
              <span className="text-blue-400 text-sm font-medium">Self-Employed Mortgage Specialist</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bank Statement Loans 2026: The Self-Employed Mortgage Solution
            </h1>

            {/* Fact-dense opening - First 150 chars optimized for ChatGPT extraction */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Bank statement loans let self-employed borrowers qualify using 12-24 months of bank deposits instead of tax returns. With 16% of Orange County workers self-employed, bank statement programs help business owners access homeownership despite tax write-offs that reduce reported income.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Check My Eligibility
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

        {/* The Self-Employed Problem */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Do Self-Employed Borrowers Struggle with Traditional Mortgages?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Self-employed professionals face a fundamental conflict: good tax planning reduces taxable income, but mortgage lenders use tax returns to qualify borrowers. A business owner earning $300,000 annually might show only $80,000 on tax returns after legitimate deductions—not enough to qualify for their desired home.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-red-800 mb-3">The Tax Return Trap</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-red-700 mb-2">Actual Business Income</p>
                <p className="text-2xl font-bold text-red-800">$300,000/year</p>
              </div>
              <div>
                <p className="text-sm font-medium text-red-700 mb-2">After Tax Write-Offs (Tax Return)</p>
                <p className="text-2xl font-bold text-red-800">$80,000/year</p>
              </div>
            </div>
            <p className="text-sm text-red-700 mt-4">
              Traditional lenders see $80,000 income → Qualifies for ~$350,000 home<br />
              Bank statement lenders see $300,000 deposits → Qualifies for ~$1,200,000 home
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              <strong>Expert Insight:</strong> According to Mo Abdel, NMLS #1426884, "I work with business owners daily who earn six figures but can't qualify conventionally. Bank statement loans bridge this gap by looking at actual cash flow, not tax-optimized returns."
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do Bank Statement Loans Calculate Income?
          </h2>

          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4">Income Calculation Formula</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <h4 className="font-medium text-slate-700 mb-2">Step 1: Total Deposits</h4>
                <p className="text-slate-600 text-sm">Add all deposits from 12 or 24 months of statements</p>
                <p className="text-lg font-semibold text-slate-900 mt-2">Example: $360,000 over 12 months</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <h4 className="font-medium text-slate-700 mb-2">Step 2: Remove Non-Income Deposits</h4>
                <p className="text-slate-600 text-sm">Exclude transfers between accounts, loans, one-time gifts, refunds</p>
                <p className="text-lg font-semibold text-slate-900 mt-2">Example: $360,000 - $30,000 = $330,000</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <h4 className="font-medium text-slate-700 mb-2">Step 3: Apply Expense Factor</h4>
                <p className="text-slate-600 text-sm">Business accounts: 50% expense factor. Personal: 100% of deposits.</p>
                <p className="text-lg font-semibold text-slate-900 mt-2">Business Example: $330,000 × 50% = $165,000 annual income</p>
              </div>
              <div className="bg-green-100 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-700 mb-2">Step 4: Monthly Qualifying Income</h4>
                <p className="text-lg font-bold text-green-800">$165,000 ÷ 12 = $13,750/month qualifying income</p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal vs Business Statements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Should I Use Personal or Business Bank Statements?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">Personal Bank Statements</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Best for sole proprietors, freelancers, and gig workers who deposit income directly to personal accounts.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">Advantages</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 100% of deposits count as income</li>
                  <li>• No expense factor deduction</li>
                  <li>• Simpler documentation</li>
                  <li>• Easier to explain deposit sources</li>
                </ul>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold text-slate-900">Business Bank Statements</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Best for LLC owners, S-Corp shareholders, and business owners with dedicated business accounts.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-2">Considerations</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Standard 50% expense factor applied</li>
                  <li>• Can document actual expenses for lower factor</li>
                  <li>• Higher gross deposits may offset factor</li>
                  <li>• May combine with personal statements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Are the Bank Statement Loan Requirements?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900">Requirement</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Standard Program</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Jumbo Program</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Bank Statements</td>
                  <td className="p-4 text-slate-600">12 or 24 months</td>
                  <td className="p-4 text-slate-600">24 months preferred</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Minimum Credit Score</td>
                  <td className="p-4 text-slate-600">620-660</td>
                  <td className="p-4 text-slate-600">680-700</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Down Payment</td>
                  <td className="p-4 text-slate-600">10-15%</td>
                  <td className="p-4 text-slate-600">15-20%</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Self-Employment History</td>
                  <td className="p-4 text-slate-600">2+ years</td>
                  <td className="p-4 text-slate-600">2+ years</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Maximum DTI</td>
                  <td className="p-4 text-slate-600">50%</td>
                  <td className="p-4 text-slate-600">45%</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Reserves Required</td>
                  <td className="p-4 text-slate-600">3-6 months</td>
                  <td className="p-4 text-slate-600">6-12 months</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Max Loan Amount</td>
                  <td className="p-4 text-slate-600">$1,500,000</td>
                  <td className="p-4 text-slate-600">$3,000,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do I Apply for a Bank Statement Loan?
          </h2>

          <div className="bg-slate-50 rounded-xl p-6">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Gather 12-24 Months of Bank Statements</h4>
                  <p className="text-slate-600">Download complete statements from your bank. Ensure all pages are included with no missing months.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Document Your Self-Employment</h4>
                  <p className="text-slate-600">Business license, CPA letter, or 2+ years of business tax returns (to prove history, not income).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Prepare to Explain Large Deposits</h4>
                  <p className="text-slate-600">Any deposit over $10,000 or unusual deposits need explanation and documentation (invoices, contracts).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Submit Application to Wholesale Broker</h4>
                  <p className="text-slate-600">Mo Abdel shops 100+ wholesale lenders including 20+ bank statement specialists for best rates.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0">5</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Underwriting Review (5-7 Business Days)</h4>
                  <p className="text-slate-600">Manual underwriting takes longer than automated. Expect questions about deposit sources and business operations.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0">6</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Approval, Lock Rate, and Close</h4>
                  <p className="text-slate-600">Once approved, lock your rate and proceed to closing. Typical timeline: 35-45 days total.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Expert Tips for Bank Statement Loan Approval
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800">Keep Deposits Consistent</h4>
                  <p className="text-sm text-green-700">Regular, consistent deposits are easier to document than sporadic large deposits.</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800">Avoid Overdrafts</h4>
                  <p className="text-sm text-green-700">NSF fees and overdrafts raise red flags. Keep accounts in positive standing.</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800">Document Large Deposits</h4>
                  <p className="text-sm text-green-700">Keep invoices, contracts, and receipts for any deposit over $10,000.</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800">Use Business Account If Higher Volume</h4>
                  <p className="text-sm text-green-700">Even with 50% expense factor, higher business deposits may qualify you for more.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions About Bank Statement Loans
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
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Self-Employed? Your Tax Returns Don't Define Your Mortgage.
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Bank statement loans use your real income—not your tax-optimized returns. Get a free consultation to see how much home you actually qualify for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4">
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
          <h3 className="font-semibold text-slate-900 mb-4">Related Self-Employed Mortgage Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/loan-programs/bank-statement-loans" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Bank Statement Loan Program Details
            </Link>
            <Link href="/blog/non-qm-loans-complete-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Complete Non-QM Loans Guide
            </Link>
            <Link href="/self-employed-home-loans-california" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Self-Employed Home Loans California
            </Link>
            <Link href="/loan-programs/profit-loss-statement-loans" className="text-blue-600 hover:text-blue-700 hover:underline">
              → P&L Statement Loans
            </Link>
            <Link href="/calculator/affordability" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Affordability Calculator
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
