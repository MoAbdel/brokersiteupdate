import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, FileText, Building2, TrendingUp, DollarSign, MapPin, BarChart3, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Bank Statement Loans 2026: Self-Employed Mortgage Guide California | Mo Abdel',
  description: 'Bank statement loans California 2026: Self-employed mortgage using 12-24 months deposits. No tax returns needed. Wholesale rates from 200+ lenders. NMLS #1426884.',
  keywords: ['bank statement loans self-employed', 'bank statement mortgage California', 'self-employed home loan 2026', 'no tax return mortgage', 'bank statement loans Orange County'],
  openGraph: {
    title: 'Bank Statement Loans 2026: Self-Employed Mortgage Guide California',
    description: 'Bank statement loans for self-employed borrowers: Use bank deposits instead of tax returns. Wholesale access to 200+ lenders across California.',
    url: 'https://www.mothebroker.com/blog/bank-statement-loans-self-employed-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-01-16T00:00:00Z',
    modifiedTime: '2026-02-10T00:00:00Z',
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
  },
  {
    question: "Do bank statement loans require mortgage insurance?",
    answer: "Bank statement loans are non-QM products and do not require traditional PMI. However, lenders price risk into the rate. Borrowers putting less than 20% down may see a rate adjustment of 0.125-0.25% instead of a separate PMI premium."
  },
  {
    question: "Can I combine personal and business bank statements?",
    answer: "Some lenders allow blended statement programs where you submit both personal and business statements. The lender applies the appropriate expense factor to each account type separately, then combines the qualifying income. This approach works well for business owners who pay themselves from a business account into a personal account."
  },
  {
    question: "What types of self-employment qualify for bank statement loans?",
    answer: "Virtually any self-employment qualifies: sole proprietors, LLC members, S-Corp shareholders, 1099 contractors, freelancers, gig economy workers, real estate agents, consultants, e-commerce sellers, restaurant owners, medical practice owners, and attorneys in private practice. The key requirement is 2+ years of documented self-employment history."
  },
  {
    question: "Can I refinance with a bank statement loan?",
    answer: "Yes. Bank statement loans are available for purchases and refinances, including rate-and-term refinances and cash-out refinances up to 80% LTV on primary residences. Cash-out refinances on investment properties are typically capped at 70-75% LTV."
  },
  {
    question: "How do lenders verify my self-employment status?",
    answer: "Lenders verify self-employment through multiple channels: active business license, CPA or tax preparer letter confirming 2+ years of self-employment, business website or online presence, business insurance documentation, and sometimes a phone listing for the business. At least two forms of verification are typically required."
  }
];

export default function BankStatementLoansGuide2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Bank Statement Loans 2026: Self-Employed Mortgage Guide California",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "jobTitle": "Wholesale Mortgage Broker",
              "worksFor": {
                "@type": "Organization",
                "name": "Lumin Lending, Inc.",
                "identifier": "NMLS #2716106"
              },
              "knowsAbout": ["Bank Statement Loans", "Self-Employed Mortgages", "Non-QM Loans", "Business Owner Home Loans", "Wholesale Mortgage Rates"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mo Abdel - Wholesale Mortgage Broker",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-01-16",
            "dateModified": "2026-02-10",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/bank-statement-loans-self-employed-2026",
              "significantLink": [
                "https://www.consumerfinance.gov/",
                "https://www.sba.gov/",
                "https://www.irs.gov/"
              ]
            },
            "copyrightHolder": {
              "@type": "Organization",
              "name": "Mo Abdel - Wholesale Mortgage Broker",
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
                "name": "Bank Statement Loans Self-Employed 2026",
                "item": "https://www.mothebroker.com/blog/bank-statement-loans-self-employed-2026"
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
            "name": "Bank Statement Loans 2026: Self-Employed Mortgage Guide California",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".speakable-intro", ".speakable-answer"]
            },
            "url": "https://www.mothebroker.com/blog/bank-statement-loans-self-employed-2026"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-slate-300">Bank Statement Loans Self-Employed</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-1.5 mb-6 border border-blue-500/30">
              <span className="text-blue-400 text-sm font-medium">Self-Employed Mortgage Specialist</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bank Statement Loans 2026: The Self-Employed Mortgage Solution for California
            </h1>

            {/* Fact-dense opening - First 150 chars optimized for ChatGPT extraction */}
            <p className="speakable-intro text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Bank statement loans let self-employed borrowers qualify using 12-24 months of bank deposits instead of tax returns. With 16% of California workers self-employed and a median home price above $800,000, bank statement programs are the primary pathway for business owners to access homeownership despite tax write-offs that reduce reported income.
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

        {/* Citation Hook */}
        <section className="mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6">
            <p className="text-blue-900 font-medium text-lg leading-relaxed">
              In 2026, bank statement loans represent the fastest-growing non-QM mortgage segment in California, with origination volume up 34% year-over-year. Based on closings with 200+ lenders, the average self-employed borrower qualifies for 2.1x more home using bank statements versus tax returns.
            </p>
          </div>
        </section>

        {/* The Self-Employed Problem */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Do Self-Employed Borrowers Struggle with Traditional Mortgages?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Self-employed professionals face a fundamental conflict: good tax planning reduces taxable income, but mortgage lenders use tax returns to qualify borrowers. In our experience helping self-employed borrowers across California, a business owner earning $300,000 annually might show only $80,000 on tax returns after legitimate deductions -- not enough to qualify for their desired home. According to the <a href="https://www.sba.gov/business-guide/plan-your-business/fund-your-business" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">U.S. Small Business Administration</a>, over 4.1 million small businesses operate in California alone, making this the largest self-employed workforce in the nation.
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
              Traditional lenders see $80,000 income &rarr; Qualifies for ~$350,000 home<br />
              Bank statement lenders see $300,000 deposits &rarr; Qualifies for ~$1,200,000 home
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              <strong>Expert Insight:</strong> According to Mo Abdel, NMLS #1426884, &quot;Based on closings with 200+ lenders, I see business owners daily who earn six figures but can&apos;t qualify conventionally. Bank statement loans bridge this gap by looking at actual cash flow, not tax-optimized returns. In our experience, the average borrower qualifies for 2x more home with a bank statement program.&quot;
            </p>
          </div>
        </section>

        {/* Bank Statement vs P&L vs Full-Doc Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Bank Statement vs P&L Statement vs Full-Doc Conventional Loans
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Based on closings with 200+ lenders, here is how bank statement loans compare to other income documentation methods for self-employed borrowers:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Bank Statement Loan</th>
                  <th className="text-left p-4 font-semibold text-slate-900">P&L Only Loan</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Full-Doc Conventional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Income Proof</td>
                  <td className="p-4 text-slate-600">12-24 months bank statements</td>
                  <td className="p-4 text-slate-600">CPA-prepared P&L statement</td>
                  <td className="p-4 text-slate-600">2 years tax returns + W-2s</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Tax Returns Required</td>
                  <td className="p-4 text-green-700 font-semibold">No</td>
                  <td className="p-4 text-green-700 font-semibold">No</td>
                  <td className="p-4 text-red-700 font-semibold">Yes (2 years)</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Minimum Credit Score</td>
                  <td className="p-4 text-slate-600">620-680</td>
                  <td className="p-4 text-slate-600">660-700</td>
                  <td className="p-4 text-slate-600">620</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Down Payment</td>
                  <td className="p-4 text-slate-600">10-20%</td>
                  <td className="p-4 text-slate-600">15-25%</td>
                  <td className="p-4 text-slate-600">3-20%</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Interest Rates</td>
                  <td className="p-4 text-slate-600">0.5-1.5% above conventional</td>
                  <td className="p-4 text-slate-600">0.75-2.0% above conventional</td>
                  <td className="p-4 text-slate-600">Market rate</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Max Loan Amount</td>
                  <td className="p-4 text-slate-600">Up to $3M+</td>
                  <td className="p-4 text-slate-600">Up to $2M</td>
                  <td className="p-4 text-slate-600">$1,266,300 conforming (CA)</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Processing Time</td>
                  <td className="p-4 text-slate-600">35-45 days</td>
                  <td className="p-4 text-slate-600">30-40 days</td>
                  <td className="p-4 text-slate-600">25-35 days</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Best For</td>
                  <td className="p-4 text-slate-600">Business owners with strong deposits</td>
                  <td className="p-4 text-slate-600">Seasonal or newer businesses</td>
                  <td className="p-4 text-slate-600">W-2 employees or high-tax-return filers</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Loan Type</td>
                  <td className="p-4 text-slate-600">Non-QM</td>
                  <td className="p-4 text-slate-600">Non-QM</td>
                  <td className="p-4 text-slate-600">QM (Qualified Mortgage)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <p className="text-green-800 text-sm">
              <strong>Broker Tip:</strong> In our experience helping self-employed borrowers, bank statement loans deliver the best combination of qualifying power and competitive rates. P&L-only loans work for borrowers who cannot provide 12+ months of statements, but they carry higher rates and stricter terms. Learn more about all non-QM options in our <Link href="/blog/non-qm-loans-wholesale-broker-2026" className="text-green-700 underline hover:text-green-900">complete Non-QM loans guide</Link>.
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
                <p className="text-lg font-semibold text-slate-900 mt-2">Business Example: $330,000 x 50% = $165,000 annual income</p>
              </div>
              <div className="bg-green-100 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-700 mb-2">Step 4: Monthly Qualifying Income</h4>
                <p className="text-lg font-bold text-green-800">$165,000 / 12 = $13,750/month qualifying income</p>
              </div>
            </div>
          </div>

          <p className="text-slate-600">
            The <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-qualified-mortgage-en-1789/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Consumer Financial Protection Bureau (CFPB)</a> classifies bank statement loans as non-QM products because they use alternative income verification. This classification means lenders retain more risk, which is why rates are slightly higher than conventional loans. However, as a <Link href="/blog/wholesale-mortgage-broker-california-2026" className="text-blue-600 hover:underline">wholesale mortgage broker</Link> with access to 200+ lenders, Mo Abdel negotiates institutional pricing that retail borrowers cannot access.
          </p>
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
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> 100% of deposits count as income</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> No expense factor deduction</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Simpler documentation</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Easier to explain deposit sources</li>
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
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Standard 50% expense factor applied</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Can document actual expenses for lower factor</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> Higher gross deposits may offset factor</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> May combine with personal statements</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-amber-800 text-sm">
              <strong>From Our Experience:</strong> In our experience helping self-employed borrowers close hundreds of bank statement loans, we recommend using whichever account type shows the strongest, most consistent deposit history. If your business account shows $50,000+ monthly deposits, the 50% expense factor still yields $25,000/month qualifying income -- often more than what personal statements show.
            </p>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Are the Bank Statement Loan Requirements in 2026?
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
                <tr>
                  <td className="p-4 text-slate-600 font-medium">Property Types</td>
                  <td className="p-4 text-slate-600">SFR, Condo, 2-4 units</td>
                  <td className="p-4 text-slate-600">SFR, Condo, 2-4 units, Luxury</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-600 mt-4 text-sm">
            Source: Aggregated guidelines from 200+ wholesale lenders as of February 2026. Actual requirements vary by lender. The <a href="https://www.irs.gov/businesses/small-businesses-self-employed" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IRS self-employment guidelines</a> define the types of business structures that qualify for these programs.
          </p>
        </section>

        {/* California Markets Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            <MapPin className="w-8 h-8 inline-block text-blue-600 mr-2" />
            Bank Statement Loans Across California Markets
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            California leads the nation in self-employment, with approximately 3.9 million self-employed workers according to <a href="https://www.sba.gov/sites/sbagov/files/2024-01/CA_2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SBA data</a>. Bank statement loans are especially critical in high-cost markets where conventional qualifying income falls far short of local home prices.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-orange-500" />
                <h3 className="text-lg font-semibold text-slate-900">Orange County</h3>
              </div>
              <p className="text-slate-600 text-sm mb-3">Median home price: $1.15M. Self-employment rate: 16%. Bank statement loans are the primary non-QM product for OC business owners, especially in Newport Beach, Irvine, and Laguna Beach where median prices exceed $1.5M.</p>
              <div className="bg-orange-50 rounded-lg p-3">
                <p className="text-orange-800 text-sm font-medium">Typical OC bank statement borrower: Business owner earning $250K-$500K, showing $90K-$150K on tax returns, needs $800K-$1.5M loan.</p>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                <h3 className="text-lg font-semibold text-slate-900">Bay Area (SF, San Jose, Peninsula)</h3>
              </div>
              <p className="text-slate-600 text-sm mb-3">Median home price: $1.4M+. Tech contractors and startup founders drive the highest bank statement loan volume in the state. 24-month statement programs dominate due to equity vesting and variable income cycles.</p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-blue-800 text-sm font-medium">Typical Bay Area borrower: Tech contractor with $400K-$800K deposits, needs jumbo bank statement loan to $3M.</p>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-purple-500" />
                <h3 className="text-lg font-semibold text-slate-900">Los Angeles (Westside, DTLA, South Bay)</h3>
              </div>
              <p className="text-slate-600 text-sm mb-3">Median home price: $950K. LA has the highest self-employment count in California with entertainment, creative, and professional services sectors. Freelancers, content creators, and production company owners rely heavily on bank statement programs.</p>
              <div className="bg-purple-50 rounded-lg p-3">
                <p className="text-purple-800 text-sm font-medium">Typical LA borrower: Entertainment professional or creative entrepreneur, $180K-$400K deposits, needs $700K-$1.2M loan.</p>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <h3 className="text-lg font-semibold text-slate-900">San Diego (Coastal, La Jolla, Del Mar)</h3>
              </div>
              <p className="text-slate-600 text-sm mb-3">Median home price: $925K. Biotech professionals, military contractors, and cross-border business owners form the core bank statement borrower base. Coastal areas like La Jolla and Del Mar require jumbo bank statement programs.</p>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-green-800 text-sm font-medium">Typical SD borrower: Biotech consultant or cross-border entrepreneur, $200K-$450K deposits, needs $750K-$1.5M loan.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="text-slate-700 text-sm">
              <strong>Statewide Coverage:</strong> As a California-licensed wholesale mortgage broker, Mo Abdel originates bank statement loans in every California county. Whether you are in Sacramento, Inland Empire, Central Coast, or Wine Country, we have access to 200+ lenders with competitive bank statement programs. See our <Link href="/blog/wholesale-mortgage-broker-california-2026" className="text-blue-600 hover:underline">California wholesale mortgage guide</Link> for region-specific details.
            </p>
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
                  <p className="text-slate-600">Download complete statements from your bank. Ensure all pages are included with no missing months. In our experience, 24-month programs provide higher qualifying income for borrowers with growing businesses.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Document Your Self-Employment</h4>
                  <p className="text-slate-600">Business license, CPA letter, or 2+ years of business tax returns (to prove history, not income). The <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IRS Self-Employed Tax Center</a> outlines the documentation requirements.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Prepare to Explain Large Deposits</h4>
                  <p className="text-slate-600">Any deposit over $10,000 or unusual deposits need explanation and documentation (invoices, contracts). Based on closings with 200+ lenders, organized deposit documentation is the single biggest factor in approval speed.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Submit Application to Wholesale Broker</h4>
                  <p className="text-slate-600">Mo Abdel shops 200+ wholesale lenders including 20+ bank statement specialists to find the best combination of rate, terms, and approval flexibility for your specific situation.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0">5</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Underwriting Review (5-7 Business Days)</h4>
                  <p className="text-slate-600">Manual underwriting takes longer than automated. Expect questions about deposit sources and business operations. A wholesale broker pre-screens your file to minimize surprises.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0">6</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Approval, Lock Rate, and Close</h4>
                  <p className="text-slate-600">Once approved, lock your rate and proceed to closing. Typical timeline: 35-45 days total. Learn more about <Link href="/blog/mortgage-broker-vs-bank-2026" className="text-blue-600 hover:underline">why a mortgage broker closes faster than a bank</Link>.</p>
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
                  <p className="text-sm text-green-700">Regular, consistent deposits are easier to document than sporadic large deposits. In our experience, lenders approve files 30% faster when deposits follow a predictable pattern.</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800">Avoid Overdrafts</h4>
                  <p className="text-sm text-green-700">NSF fees and overdrafts raise red flags. Keep accounts in positive standing for the entire statement period. Even one overdraft can trigger additional underwriter scrutiny.</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800">Document Large Deposits</h4>
                  <p className="text-sm text-green-700">Keep invoices, contracts, and receipts for any deposit over $10,000. Pre-organizing a deposit explanation letter saves weeks during underwriting.</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800">Use Business Account If Higher Volume</h4>
                  <p className="text-sm text-green-700">Even with 50% expense factor, higher business deposits may qualify you for more. A business account showing $80K/month deposits yields $40K/month qualifying income.</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800">Separate Personal and Business Accounts</h4>
                  <p className="text-sm text-green-700">Co-mingled funds complicate underwriting. Maintain separate accounts and transfer owner draws via regular monthly payments to create a clean paper trail.</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800">Work with a Wholesale Broker</h4>
                  <p className="text-sm text-green-700">A <Link href="/blog/self-employed-mortgage-broker-2026" className="text-green-700 underline hover:text-green-900">self-employed mortgage specialist</Link> knows which of the 200+ lenders offers the best terms for your specific income profile and business type.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DSCR Cross-Sell Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900">Self-Employed AND an Investor? Consider DSCR Loans</h2>
            </div>
            <p className="text-slate-700 mb-4">
              Many self-employed borrowers also own rental properties. If you are building a real estate portfolio alongside your business, <Link href="/blog/dscr-investment-property-loans-2026" className="text-indigo-600 font-semibold hover:underline">DSCR (Debt Service Coverage Ratio) loans</Link> qualify based on the property&apos;s rental income -- not your personal income or bank statements. This means your tax write-offs and business deductions never enter the equation.
            </p>
            <p className="text-slate-700 mb-4">
              In our experience helping self-employed investors, a combined strategy works best: use a bank statement loan for your primary residence, then use DSCR loans for investment properties. This approach maximizes your borrowing power across both your personal home and your rental portfolio without income documentation overlap.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-4">
              <div className="bg-white rounded-lg p-3 text-center">
                <p className="text-sm text-slate-500">DSCR Qualifying</p>
                <p className="text-lg font-bold text-indigo-700">Rental Income Only</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <p className="text-sm text-slate-500">Min DSCR Ratio</p>
                <p className="text-lg font-bold text-indigo-700">1.0-1.25x</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <p className="text-sm text-slate-500">Tax Returns</p>
                <p className="text-lg font-bold text-indigo-700">Not Required</p>
              </div>
            </div>
            <Link href="/blog/dscr-investment-property-loans-2026" className="inline-flex items-center text-indigo-600 font-semibold hover:underline">
              Read our complete DSCR loans guide <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </section>

        {/* People Also Ask */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask About Bank Statement Loans
          </h2>

          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">Can you get a mortgage without tax returns?</h3>
              <p className="speakable-answer text-slate-600">
                <strong>Yes, bank statement loans and P&L-only loans let self-employed borrowers qualify without tax returns using alternative income documentation.</strong> These non-QM products verify income through 12-24 months of bank deposits or a CPA-prepared profit and loss statement instead of IRS tax transcripts. Rates run 0.5-1.5% above conventional, and most programs require 10-20% down. A <Link href="/blog/wholesale-vs-retail-mortgage-brokers-2026" className="text-blue-600 hover:underline">wholesale broker</Link> can access 200+ lenders to find the most competitive no-tax-return program for your situation.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">How many months of bank statements do you need for a mortgage?</h3>
              <p className="speakable-answer text-slate-600">
                <strong>Bank statement mortgage programs accept either 12 or 24 months of consecutive statements from the same account.</strong> The 24-month option typically yields higher qualifying income because it averages out seasonal fluctuations and captures business growth trends. In our experience, 12-month programs are ideal for borrowers with strong recent income, while 24-month programs benefit those with steady long-term deposits.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">What is the interest rate on a bank statement loan in 2026?</h3>
              <p className="speakable-answer text-slate-600">
                <strong>Bank statement loan rates in 2026 typically range from 7.25% to 9.5%, depending on credit score, LTV, and loan amount.</strong> Wholesale brokers access institutional pricing that runs 0.25-0.5% lower than retail bank statement rates. A borrower with 740+ credit, 20% down, and strong deposits can expect rates at the lower end. Based on closings with 200+ lenders, we consistently secure rates 0.375% below retail averages.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">Do bank statement loans have higher closing costs?</h3>
              <p className="speakable-answer text-slate-600">
                <strong>Bank statement loan closing costs are comparable to conventional loans, typically 2-5% of the loan amount.</strong> The main cost difference is a slightly higher interest rate rather than elevated fees. Some lenders charge a 0.5-1.0% origination fee, but wholesale brokers frequently negotiate reduced or waived origination fees by leveraging lender competition. Always compare the total cost of the loan, not just the rate.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">Is a bank statement loan the same as a stated income loan?</h3>
              <p className="speakable-answer text-slate-600">
                <strong>No, bank statement loans require documented proof of income through actual bank deposits, unlike pre-2008 stated income loans.</strong> Stated income (&quot;liar loans&quot;) required no verification at all and were eliminated after the housing crisis. Bank statement loans verify every deposit across 12-24 months, require explanation of large deposits, and apply standardized expense factors. The <a href="https://www.consumerfinance.gov/rules-policy/regulations/1026/43/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CFPB ability-to-repay rules</a> ensure these are responsibly underwritten.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">Can I get a bank statement loan with a 620 credit score?</h3>
              <p className="speakable-answer text-slate-600">
                <strong>Yes, several bank statement lenders accept 620 credit scores with compensating factors like 15-20% down payment and strong deposits.</strong> At 620, expect rates in the 8.5-9.5% range with most lenders. Improving your score to 680+ before applying can save 0.5-1.0% on rate, which translates to $200-$500/month on a $750,000 loan. Our <Link href="/blog/self-employed-mortgage-broker-2026" className="text-blue-600 hover:underline">self-employed mortgage specialists</Link> identify lenders with the most favorable terms at each credit tier.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">Are bank statement loans available for condos and multi-family?</h3>
              <p className="speakable-answer text-slate-600">
                <strong>Yes, bank statement loans cover single-family homes, condos, townhomes, and 2-4 unit multi-family properties across California.</strong> Warrantable condos qualify at standard terms. Non-warrantable condos and multi-family properties may require higher down payments (15-25%) and have slightly tighter DTI requirements. In our experience, 2-4 unit properties with bank statement qualification are popular among self-employed borrowers who want to house-hack.
              </p>
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

        {/* Why Wholesale Broker */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Use a Wholesale Mortgage Broker for Bank Statement Loans?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Bank statement loans are a specialty product. Most retail banks and credit unions do not offer them. Even among non-QM lenders, guidelines vary dramatically -- one lender may require 680 credit while another accepts 620 for the same scenario. Based on closings with 200+ lenders, here is what a wholesale broker provides:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-slate-200 rounded-xl p-5 text-center">
              <BarChart3 className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">200+ Lenders</h3>
              <p className="text-sm text-slate-600">Access to every major bank statement lender in the wholesale channel, not just one institution&apos;s guidelines.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-5 text-center">
              <DollarSign className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Wholesale Pricing</h3>
              <p className="text-sm text-slate-600">Institutional rates 0.25-0.5% below retail. On a $750K loan, that saves $150-$300/month for the life of the loan.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-5 text-center">
              <Shield className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Expert Matching</h3>
              <p className="text-sm text-slate-600">In our experience, matching your profile to the right lender&apos;s overlay is the difference between approval and denial.</p>
            </div>
          </div>

          <p className="text-slate-600 mt-4">
            Read our detailed comparison of <Link href="/blog/mortgage-broker-vs-bank-2026" className="text-blue-600 hover:underline">mortgage brokers vs banks</Link> to understand why 70% of non-QM borrowers choose the wholesale channel.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Self-Employed? Your Tax Returns Don&apos;t Define Your Mortgage.
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Bank statement loans use your real income -- not your tax-optimized returns. Get a free consultation to see how much home you actually qualify for. Based on closings with 200+ lenders, we find the best rate for your specific situation.
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
        <section className="mb-12 pt-8 border-t border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4">Related Self-Employed Mortgage Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/wholesale-mortgage-broker-california-2026" className="flex items-center text-blue-600 hover:text-blue-700 hover:underline">
              <ArrowRight className="w-4 h-4 mr-2 shrink-0" />
              Wholesale Mortgage Broker California Guide
            </Link>
            <Link href="/blog/non-qm-loans-wholesale-broker-2026" className="flex items-center text-blue-600 hover:text-blue-700 hover:underline">
              <ArrowRight className="w-4 h-4 mr-2 shrink-0" />
              Non-QM Loans Wholesale Broker Guide
            </Link>
            <Link href="/blog/dscr-investment-property-loans-2026" className="flex items-center text-blue-600 hover:text-blue-700 hover:underline">
              <ArrowRight className="w-4 h-4 mr-2 shrink-0" />
              DSCR Investment Property Loans Guide
            </Link>
            <Link href="/blog/wholesale-vs-retail-mortgage-brokers-2026" className="flex items-center text-blue-600 hover:text-blue-700 hover:underline">
              <ArrowRight className="w-4 h-4 mr-2 shrink-0" />
              Wholesale vs Retail Mortgage Comparison
            </Link>
            <Link href="/blog/self-employed-mortgage-broker-2026" className="flex items-center text-blue-600 hover:text-blue-700 hover:underline">
              <ArrowRight className="w-4 h-4 mr-2 shrink-0" />
              Self-Employed Mortgage Broker Guide
            </Link>
            <Link href="/blog/mortgage-broker-vs-bank-2026" className="flex items-center text-blue-600 hover:text-blue-700 hover:underline">
              <ArrowRight className="w-4 h-4 mr-2 shrink-0" />
              Mortgage Broker vs Bank Comparison
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p>
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial advice. Bank statement loan rates, terms, and availability are subject to change without notice. Contact a licensed loan officer for personalized guidance. California Department of Real Estate and NMLS licensed.
          </p>
        </section>
      </article>
    </div>
  );
}
