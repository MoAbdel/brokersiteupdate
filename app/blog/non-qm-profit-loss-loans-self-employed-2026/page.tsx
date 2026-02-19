import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Building2, DollarSign, TrendingUp, AlertCircle, BookOpen, Shield, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LeadMagnetCTA } from '@/components/lead-magnets/LeadMagnetCTA';

export const metadata: Metadata = {
  title: 'P&L Statement Loans: How Self-Employed Borrowers Qualify [2026] | Mo Abdel',
  description: 'P&L statement loans let self-employed borrowers qualify using a CPA-prepared profit and loss statement instead of tax returns. Access 200+ wholesale lenders offering P&L mortgage programs in California and Washington. NMLS #1426884.',
  keywords: ['P&L statement loan self-employed', 'profit and loss statement mortgage', 'P&L loan California', 'self-employed mortgage no tax returns', 'CPA prepared P&L mortgage', 'non-QM P&L loan 2026', 'profit loss statement home loan', 'self-employed P&L qualification'],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/non-qm-profit-loss-loans-self-employed-2026',
  },
  openGraph: {
    title: 'P&L Statement Loans: How Self-Employed Borrowers Qualify [2026]',
    description: 'Profit and loss statement mortgage programs for self-employed borrowers. Qualify using a CPA-prepared P&L instead of tax returns. Wholesale rates from 200+ lenders across California and Washington.',
    url: 'https://www.mothebroker.com/blog/non-qm-profit-loss-loans-self-employed-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-19T00:00:00Z',
    modifiedTime: '2026-02-19T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
};

const faqData = [
  {
    question: "What is a P&L statement loan?",
    answer: "A P&L statement loan is a non-QM mortgage program that allows self-employed borrowers to qualify using a CPA or enrolled agent-prepared profit and loss statement instead of personal or business tax returns. The P&L documents your business revenue, expenses, and net income over 12-24 months, giving lenders an accurate picture of your current earning power."
  },
  {
    question: "Who prepares the P&L statement for a mortgage?",
    answer: "The P&L statement must be prepared, signed, and dated by a licensed CPA (Certified Public Accountant) or an enrolled agent (EA). Most lenders do not accept self-prepared P&L statements. The CPA or EA must include their license number and contact information on the document. Some lenders also require the preparer to provide an attestation letter confirming the accuracy of the figures."
  },
  {
    question: "How much down payment do I need for a P&L loan?",
    answer: "P&L statement loans typically require 10-20% down payment depending on credit score, loan amount, and property type. Borrowers with credit scores above 720 and loan amounts under $1.5M can often qualify with 10% down on primary residences. Jumbo P&L loans and investment property P&L loans generally require 15-25% down."
  },
  {
    question: "What credit score do I need for a P&L statement loan?",
    answer: "Most P&L loan programs require a minimum credit score of 660-680. Higher credit scores (700+) unlock better pricing, higher LTV allowances, and access to larger loan amounts. Some wholesale lenders offer P&L programs starting at 640 with compensating factors such as larger down payments and substantial reserves."
  },
  {
    question: "Can I use a P&L loan to buy an investment property?",
    answer: "Yes. P&L statement loans are available for primary residences, second homes, and investment properties. Investment property P&L loans typically require 20-25% down payment and carry slightly higher rates compared to primary residence programs. Some lenders also combine P&L qualification with DSCR analysis for investment property purchases."
  },
  {
    question: "How long do I need to be self-employed for a P&L loan?",
    answer: "Most P&L loan programs require a minimum of 2 years of self-employment history. Lenders verify this through business licenses, CPA letters, Secretary of State filings, or other documentation proving continuous business operation. A small number of wholesale lenders accept 1 year of self-employment with strong compensating factors."
  },
  {
    question: "What is the difference between a P&L loan and a bank statement loan?",
    answer: "A P&L loan uses a CPA-prepared profit and loss statement to document income, while a bank statement loan uses 12-24 months of personal or business bank deposits. P&L loans work better for borrowers whose bank deposits don't clearly reflect income (e.g., heavy cash businesses, commingled accounts) or who want to avoid submitting 12-24 months of bank statements. Bank statement loans work better for borrowers with clean, consistent deposits."
  },
  {
    question: "Do P&L loans have prepayment penalties?",
    answer: "P&L loan programs typically offer options with and without prepayment penalties. Selecting a prepayment penalty period (usually 1-3 years) can reduce your interest rate. If you plan to sell or refinance within 3 years, choosing the no-prepayment-penalty option is usually more cost-effective despite the slightly higher rate."
  },
  {
    question: "Can I refinance with a P&L statement loan?",
    answer: "Yes. P&L statement loans are available for purchases and refinances, including rate-and-term refinances and cash-out refinances. Cash-out refinances on primary residences are typically available up to 80% LTV. Cash-out refinances on investment properties are generally capped at 70-75% LTV depending on the lender and loan amount."
  },
  {
    question: "Why do wholesale brokers have more P&L loan options than banks?",
    answer: "Retail banks and credit unions rarely offer P&L statement loan programs because these are non-QM products that require specialized underwriting guidelines. Wholesale mortgage brokers access 200+ lenders, including non-QM specialists that focus specifically on alternative income documentation programs. This gives wholesale brokers access to 30+ P&L lenders with varying guidelines, allowing them to match borrowers with the most competitive program for their specific situation."
  },
  {
    question: "What documents do I need for a P&L statement loan?",
    answer: "Required documents typically include: CPA or EA-prepared P&L statement covering 12-24 months, business license or proof of self-employment for 2+ years, 2-3 months of recent bank statements (for asset verification, not income), government-issued photo ID, and standard mortgage documents such as the purchase contract and property appraisal. Some lenders also require a CPA attestation letter and 1-2 months of business bank statements for reasonableness verification."
  },
  {
    question: "Are P&L loan rates higher than conventional mortgage rates?",
    answer: "Yes, P&L loan rates carry a premium above conventional mortgage rates because they involve alternative income documentation and manual underwriting. The rate premium varies by lender, credit score, LTV, and loan amount. Working with a wholesale mortgage broker who accesses 200+ lenders is the most effective way to secure competitive P&L loan pricing, as wholesale rates are typically lower than retail non-QM rates."
  }
];

export default function NonQmProfitLossLoansSelfEmployed2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "P&L Statement Loans: How Self-Employed Borrowers Qualify in 2026",
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
              "knowsAbout": ["P&L Statement Loans", "Self-Employed Mortgages", "Non-QM Loans", "Profit and Loss Mortgages", "Wholesale Mortgage Rates"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mo Abdel - Wholesale Mortgage Broker",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-02-19",
            "dateModified": "2026-02-19",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/non-qm-profit-loss-loans-self-employed-2026",
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
                "name": "P&L Statement Loans Self-Employed 2026",
                "item": "https://www.mothebroker.com/blog/non-qm-profit-loss-loans-self-employed-2026"
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
            "name": "P&L Statement Loans: How Self-Employed Borrowers Qualify [2026]",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".speakable-intro", ".speakable-answer"]
            },
            "url": "https://www.mothebroker.com/blog/non-qm-profit-loss-loans-self-employed-2026"
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
                <li className="text-blue-400">P&amp;L Statement Loans Self-Employed 2026</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Non-QM Loans</span>
              <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Self-Employed</span>
              <span className="text-slate-400 text-sm">February 19, 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              P&amp;L Statement Loans: How Self-Employed Borrowers Qualify in 2026
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed speakable-intro">
              Self-employed borrowers lose an average of 30-40% of their true income on tax returns due to legitimate business deductions. P&amp;L statement loans solve this problem by using your CPA-prepared profit and loss statement to document income — giving lenders an accurate picture of your real earning power without the distortion of write-offs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg flex items-center gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Get P&amp;L Loan Pre-Qualification
                </Button>
              </Link>
              <Link href="tel:9498229662">
                <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 text-lg rounded-lg flex items-center gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  (949) 822-9662
                </Button>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-blue-400" /> NMLS #1426884</span>
              <span className="flex items-center gap-2"><Building2 className="w-4 h-4 text-blue-400" /> Lumin Lending NMLS #2716106</span>
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-blue-400" /> 200+ Wholesale Lenders</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Licensed in CA &amp; WA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Hook Section */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full shrink-0">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Expert Insight: P&amp;L Statement Loans in 2026</h2>
                  <blockquote className="text-lg text-slate-700 italic border-l-4 border-blue-500 pl-4">
                    &ldquo;According to Mo Abdel, NMLS #1426884, a wholesale mortgage broker with access to 200+ lenders: P&amp;L statement loans are the most underutilized tool in the self-employed borrower&apos;s toolkit. I&apos;ve closed loans for business owners who were told by their bank that they didn&apos;t qualify — only to find that their CPA-prepared P&amp;L showed two to three times the income reflected on their tax returns. The wholesale channel has over 30 lenders offering P&amp;L programs, each with different guidelines on credit, LTV, and loan amounts.&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* 3 Triples */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-50 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-1">30+</div>
                  <div className="text-sm text-slate-600 font-medium">Wholesale P&amp;L Lenders Available</div>
                </div>
                <div className="bg-emerald-50 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-700 mb-1">Up to $5M</div>
                  <div className="text-sm text-slate-600 font-medium">Maximum Loan Amounts</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-5 text-center">
                  <div className="text-3xl font-bold text-purple-700 mb-1">Up to 90%</div>
                  <div className="text-sm text-slate-600 font-medium">LTV on Primary Residences</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bing Power Block: Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">P&amp;L Loan vs Bank Statement vs Full Doc vs DSCR: Complete Comparison</h2>
            <p className="text-lg text-slate-600 mb-8">Understanding how P&amp;L statement loans compare to other mortgage programs helps self-employed borrowers choose the right income documentation path.</p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                    <th className="text-left py-4 px-4 font-semibold bg-blue-700">P&amp;L Statement Loan</th>
                    <th className="text-left py-4 px-4 font-semibold">Bank Statement Loan</th>
                    <th className="text-left py-4 px-4 font-semibold">Full Doc Conventional</th>
                    <th className="text-left py-4 px-4 font-semibold">DSCR Loan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-medium text-slate-700">Income Documentation</td>
                    <td className="py-3 px-4 text-blue-700 font-medium bg-blue-50">CPA/EA-prepared P&amp;L statement</td>
                    <td className="py-3 px-4 text-slate-600">12-24 months bank statements</td>
                    <td className="py-3 px-4 text-slate-600">2 years tax returns + W-2s</td>
                    <td className="py-3 px-4 text-slate-600">Rental income / lease agreements</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-700">Business Tenure Required</td>
                    <td className="py-3 px-4 text-blue-700 font-medium bg-blue-50">2 years (some accept 1 year)</td>
                    <td className="py-3 px-4 text-slate-600">2 years (some accept 1 year)</td>
                    <td className="py-3 px-4 text-slate-600">2 years minimum</td>
                    <td className="py-3 px-4 text-slate-600">No requirement</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-medium text-slate-700">Minimum Credit Score</td>
                    <td className="py-3 px-4 text-blue-700 font-medium bg-blue-50">660-680 typical</td>
                    <td className="py-3 px-4 text-slate-600">620-680 typical</td>
                    <td className="py-3 px-4 text-slate-600">620 minimum</td>
                    <td className="py-3 px-4 text-slate-600">660-680 typical</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-700">Maximum LTV</td>
                    <td className="py-3 px-4 text-blue-700 font-medium bg-blue-50">Up to 90% (credit dependent)</td>
                    <td className="py-3 px-4 text-slate-600">Up to 90%</td>
                    <td className="py-3 px-4 text-slate-600">Up to 97%</td>
                    <td className="py-3 px-4 text-slate-600">Up to 80%</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-medium text-slate-700">Maximum Loan Amount</td>
                    <td className="py-3 px-4 text-blue-700 font-medium bg-blue-50">Up to $3M-$5M</td>
                    <td className="py-3 px-4 text-slate-600">Up to $3M-$5M</td>
                    <td className="py-3 px-4 text-slate-600">Conforming limits apply</td>
                    <td className="py-3 px-4 text-slate-600">Up to $3M-$5M</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-700">Rate Type</td>
                    <td className="py-3 px-4 text-blue-700 font-medium bg-blue-50">Fixed &amp; ARM (5/6, 7/6)</td>
                    <td className="py-3 px-4 text-slate-600">Fixed &amp; ARM</td>
                    <td className="py-3 px-4 text-slate-600">Fixed &amp; ARM</td>
                    <td className="py-3 px-4 text-slate-600">Fixed &amp; ARM</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-medium text-slate-700">Closing Timeline</td>
                    <td className="py-3 px-4 text-blue-700 font-medium bg-blue-50">21-30 days typical</td>
                    <td className="py-3 px-4 text-slate-600">21-30 days typical</td>
                    <td className="py-3 px-4 text-slate-600">30-45 days typical</td>
                    <td className="py-3 px-4 text-slate-600">21-30 days typical</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-700">Property Types</td>
                    <td className="py-3 px-4 text-blue-700 font-medium bg-blue-50">SFR, condos, 2-4 units, townhomes</td>
                    <td className="py-3 px-4 text-slate-600">SFR, condos, 2-4 units, townhomes</td>
                    <td className="py-3 px-4 text-slate-600">SFR, condos, 2-4 units</td>
                    <td className="py-3 px-4 text-slate-600">SFR, condos, 2-4 units, 5+ units</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-medium text-slate-700">Occupancy</td>
                    <td className="py-3 px-4 text-blue-700 font-medium bg-blue-50">Primary, second home, investment</td>
                    <td className="py-3 px-4 text-slate-600">Primary, second home, investment</td>
                    <td className="py-3 px-4 text-slate-600">Primary, second home, investment</td>
                    <td className="py-3 px-4 text-slate-600">Investment only</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-700">Tax Returns Required</td>
                    <td className="py-3 px-4 text-blue-700 font-medium bg-blue-50">No</td>
                    <td className="py-3 px-4 text-slate-600">No</td>
                    <td className="py-3 px-4 text-slate-600">Yes (2 years)</td>
                    <td className="py-3 px-4 text-slate-600">No</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-medium text-slate-700">Best For</td>
                    <td className="py-3 px-4 text-blue-700 font-medium bg-blue-50">Heavy write-offs, complex accounts</td>
                    <td className="py-3 px-4 text-slate-600">Clean, consistent bank deposits</td>
                    <td className="py-3 px-4 text-slate-600">W-2 employees, steady income</td>
                    <td className="py-3 px-4 text-slate-600">Real estate investors</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Qualification Steps */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Calculator className="w-7 h-7 text-blue-600" />
                P&amp;L Loan Qualification: Step-by-Step Process
              </h3>

              <div className="space-y-4">
                {[
                  { step: 1, title: "Verify Self-Employment History", desc: "Confirm 2+ years of continuous self-employment through business licenses, Secretary of State filings, CPA letters, or tax transcripts showing Schedule C, K-1, or 1120-S activity." },
                  { step: 2, title: "Engage Your CPA or Enrolled Agent", desc: "Have your CPA or EA prepare a detailed profit and loss statement covering the most recent 12-24 months. The P&L must show gross revenue, itemized expenses, and net income. The preparer must sign, date, and include their license number." },
                  { step: 3, title: "Submit Application to Wholesale Broker", desc: "Provide the CPA-prepared P&L, recent bank statements (for asset verification), credit authorization, and property details. Your wholesale broker shops the file across 30+ P&L lenders to find the most competitive program." },
                  { step: 4, title: "Lender Underwriting and Reasonableness Review", desc: "The lender reviews the P&L figures against available data — business bank statements, industry benchmarks, business type, and prior year tax transcripts (if available) — to confirm income reasonableness." },
                  { step: 5, title: "Appraisal and Title", desc: "Standard appraisal and title work proceeds in parallel with underwriting. P&L loans follow the same property valuation process as conventional loans." },
                  { step: 6, title: "Conditional Approval and Clear to Close", desc: "Lender issues conditional approval, any remaining conditions are satisfied, and the loan moves to clear-to-close status. Typical timeline from application to closing: 21-30 days." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start bg-white rounded-lg border border-slate-200 p-5">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg">{item.title}</h4>
                      <p className="text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-E-A-T Narrative Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">

            {/* What is a P&L Statement Loan? */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600" />
                What Is a P&amp;L Statement Loan?
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p>
                  A P&amp;L (profit and loss) statement loan is a <strong>non-QM mortgage program</strong> designed specifically for self-employed borrowers who cannot — or choose not to — qualify using traditional tax return documentation. Instead of providing two years of personal and business tax returns, the borrower submits a <strong>CPA or enrolled agent-prepared profit and loss statement</strong> that documents their business revenue, expenses, and net income over the most recent 12 to 24 months.
                </p>
                <p>
                  The core problem P&amp;L loans solve is the <strong>income gap between tax returns and actual earnings</strong>. Self-employed borrowers routinely take legitimate deductions — depreciation, home office expenses, vehicle costs, retirement contributions, and Section 199A deductions — that reduce their adjusted gross income (AGI) well below their actual cash flow. A business owner generating $250,000 in annual revenue might show only $80,000-$100,000 on their tax return after deductions. When a conventional lender underwrites based on that AGI, the borrower qualifies for far less than they can actually afford.
                </p>
                <p>
                  P&amp;L statement loans address this by accepting a <strong>CPA-prepared income analysis</strong> that reflects the borrower&apos;s true gross or net revenue before tax-driven deductions. The CPA or enrolled agent prepares and signs the P&amp;L, attesting to the accuracy of the figures based on their professional review of the borrower&apos;s books, records, and financial statements. This gives the lender a more accurate view of the borrower&apos;s income while maintaining documentation integrity.
                </p>
                <p>
                  P&amp;L loans are classified as <strong>non-qualified mortgages (non-QM)</strong> because they do not meet the Consumer Financial Protection Bureau&apos;s ability-to-repay rules for qualified mortgages, which require tax return-based income verification. As non-QM products, P&amp;L loans are primarily available through the <strong>wholesale lending channel</strong> — meaning you need a licensed mortgage broker to access them.
                </p>
              </div>
            </div>

            {/* How Lenders Verify P&L Income */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-emerald-600" />
                How Do Lenders Verify P&amp;L Statement Income?
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p>
                  Lenders do not simply accept a P&amp;L statement at face value. Every P&amp;L loan undergoes a <strong>reasonableness review</strong> — a process where the underwriter verifies that the income figures on the P&amp;L are plausible given the borrower&apos;s business type, industry, bank deposits, and operating history.
                </p>
                <p>
                  The <strong>first layer of verification</strong> is the CPA or enrolled agent credential. Most lenders require the P&amp;L to be prepared by a licensed CPA or IRS-enrolled agent (not a bookkeeper or non-licensed preparer). The preparer must include their license number, sign the document, and in many cases provide a separate attestation letter confirming they reviewed the borrower&apos;s financial records and believe the P&amp;L figures to be accurate.
                </p>
                <p>
                  The <strong>second layer</strong> involves cross-referencing the P&amp;L income against 1-3 months of business bank statements. While the bank statements are not used to calculate income (that&apos;s the P&amp;L&apos;s role), the underwriter checks that deposits are broadly consistent with the revenue reported on the P&amp;L. If the P&amp;L claims $300,000 in annual revenue but the business bank account shows $10,000/month in deposits, the underwriter will flag the discrepancy for further review.
                </p>
                <p>
                  The <strong>third layer</strong> is industry benchmarking. Lenders compare the P&amp;L margins (gross profit, net income) against industry norms for the borrower&apos;s business type. A restaurant claiming 80% net margins or a construction company claiming 90% gross margins would trigger additional scrutiny because those figures fall outside typical industry ranges.
                </p>
                <p>
                  Some lenders also pull <strong>IRS tax transcripts (4506-C)</strong> — not to use the tax return income for qualification, but to confirm the borrower filed returns and to compare the P&amp;L figures against prior-year reported income. A significant increase from tax return income to P&amp;L income is expected (that&apos;s the entire point of the program), but extreme outliers may require additional documentation or explanation.
                </p>
              </div>
            </div>

            {/* Who Benefits Most */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-purple-600" />
                Who Benefits Most from P&amp;L Statement Loans?
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p>
                  P&amp;L statement loans serve a specific segment of self-employed borrowers. Understanding whether you fall into this category helps determine whether a P&amp;L loan is the right path — or whether a <Link href="/blog/bank-statement-loans-self-employed-2026" className="text-blue-600 hover:text-blue-800 underline">bank statement loan</Link> or other alternative documentation program is a better fit.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Ideal P&amp;L Loan Candidates
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> Business owners with heavy tax deductions (depreciation, home office, vehicle, retirement)</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> Borrowers with commingled personal/business bank accounts that make bank statement analysis difficult</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> Cash-intensive businesses (restaurants, retail, salons) where deposits don&apos;t cleanly reflect income</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> Professionals who recently restructured their business entity (sole prop to LLC or S-Corp)</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> Business owners who filed extensions and don&apos;t have current-year tax returns available</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> Borrowers whose tax returns show declining income due to one-time events, but current P&amp;L shows recovery</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    When Other Programs May Be Better
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-slate-400 mt-1 shrink-0" /> Clean, consistent bank deposits with minimal commingling — consider a <Link href="/blog/bank-statement-loans-self-employed-2026" className="text-blue-600 hover:text-blue-800 underline">bank statement loan</Link></li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-slate-400 mt-1 shrink-0" /> W-2 employees with stable salaried income — conventional loans offer better rates</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-slate-400 mt-1 shrink-0" /> Real estate investors focused on rental income — <Link href="/blog/dscr-investment-property-loans-2026" className="text-blue-600 hover:text-blue-800 underline">DSCR loans</Link> are purpose-built</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-slate-400 mt-1 shrink-0" /> Retirees with substantial liquid assets — <Link href="/blog/asset-depletion-loans-guide-2026" className="text-blue-600 hover:text-blue-800 underline">asset depletion loans</Link> may provide better pricing</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-slate-400 mt-1 shrink-0" /> Less than 1 year of self-employment history — most P&amp;L lenders require minimum 2 years</li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-slate-400 mt-1 shrink-0" /> Tax return income is already strong enough to qualify — no reason to pay a non-QM rate premium</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* P&L vs Bank Statement */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                P&amp;L vs Bank Statement Loans: Which Is Better for Self-Employed Borrowers?
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p>
                  This is the most common question self-employed borrowers ask, and the answer depends on your specific financial situation. Both programs serve the same purpose — qualifying without tax returns — but they document income differently, and each has distinct advantages.
                </p>
                <p>
                  <strong>Choose a P&amp;L loan when:</strong> Your bank accounts are complex (multiple accounts, frequent transfers between business and personal, deposits that include non-income items like loan proceeds or client reimbursements). A CPA-prepared P&amp;L cuts through the noise and presents a clean income figure. P&amp;L loans also work well when your business has <strong>high revenue with moderate margins</strong> — the P&amp;L shows the full revenue picture while a bank statement analysis might apply an unfavorable expense factor.
                </p>
                <p>
                  <strong>Choose a bank statement loan when:</strong> Your deposits are clean, consistent, and clearly reflect income. If you have a single business account with regular deposits and minimal non-income transfers, the bank statement approach is straightforward and may offer slightly more flexible guidelines at some lenders. Bank statement loans also work well for <strong>1099 contractors</strong> with direct-deposit income that flows cleanly into one account.
                </p>
                <p>
                  In practice, your wholesale broker runs both scenarios to determine which program produces a higher qualifying income and better overall terms. The right answer varies by borrower — there is no universally &ldquo;better&rdquo; program.
                </p>
              </div>

              {/* P&L vs Bank Statement Quick Comparison */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left py-3 px-4 font-semibold">Factor</th>
                      <th className="text-left py-3 px-4 font-semibold bg-blue-700">P&amp;L Statement Loan</th>
                      <th className="text-left py-3 px-4 font-semibold bg-emerald-700">Bank Statement Loan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white">
                      <td className="py-3 px-4 font-medium text-slate-700">Income Source</td>
                      <td className="py-3 px-4 text-slate-600 bg-blue-50">CPA/EA-prepared P&amp;L statement</td>
                      <td className="py-3 px-4 text-slate-600 bg-emerald-50">12-24 months bank deposits</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-700">Documentation Volume</td>
                      <td className="py-3 px-4 text-slate-600 bg-blue-50">Lower — one P&amp;L document</td>
                      <td className="py-3 px-4 text-slate-600 bg-emerald-50">Higher — 12-24 monthly statements</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 font-medium text-slate-700">Expense Factor</td>
                      <td className="py-3 px-4 text-slate-600 bg-blue-50">Based on actual CPA analysis</td>
                      <td className="py-3 px-4 text-slate-600 bg-emerald-50">50% standard (business), 100% (personal)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-700">Complex Accounts</td>
                      <td className="py-3 px-4 text-slate-600 bg-blue-50">Handles well — CPA cleans up the numbers</td>
                      <td className="py-3 px-4 text-slate-600 bg-emerald-50">Can be problematic with commingled funds</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 font-medium text-slate-700">Cash Businesses</td>
                      <td className="py-3 px-4 text-slate-600 bg-blue-50">Strong fit — P&amp;L captures all revenue</td>
                      <td className="py-3 px-4 text-slate-600 bg-emerald-50">Weak — cash not deposited isn&apos;t counted</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-700">Third-Party Verification</td>
                      <td className="py-3 px-4 text-slate-600 bg-blue-50">CPA/EA license &amp; attestation</td>
                      <td className="py-3 px-4 text-slate-600 bg-emerald-50">Bank records (self-authenticating)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Why Wholesale Brokers Are Essential */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-blue-600" />
                Why Wholesale Brokers Are Essential for P&amp;L Loan Programs
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p>
                  P&amp;L statement loans exist almost exclusively in the <strong>wholesale lending channel</strong>. Walk into Chase, Wells Fargo, Bank of America, or any major retail bank and ask about a P&amp;L loan — the loan officer will either not know what you&apos;re talking about or tell you the program doesn&apos;t exist. That&apos;s because retail banks originate qualified mortgages (QM) that conform to CFPB guidelines, and P&amp;L loans fall outside those guidelines.
                </p>
                <p>
                  The wholesale channel — where licensed mortgage brokers act as intermediaries between borrowers and lenders — is where <strong>non-QM specialists operate</strong>. These lenders have built their entire business around alternative documentation programs like P&amp;L loans, bank statement loans, <Link href="/blog/asset-depletion-loans-guide-2026" className="text-blue-600 hover:text-blue-800 underline">asset depletion loans</Link>, and <Link href="/blog/dscr-investment-property-loans-2026" className="text-blue-600 hover:text-blue-800 underline">DSCR investment loans</Link>.
                </p>
                <p>
                  As a wholesale mortgage broker with access to <strong>200+ lenders</strong>, I work with over 30 lenders that offer P&amp;L statement loan programs. Each lender has different guidelines on critical factors:
                </p>
                <ul className="list-none space-y-3 mt-4">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" /> <span><strong>P&amp;L period:</strong> Some require 24-month P&amp;L, others accept 12 months</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" /> <span><strong>Preparer requirements:</strong> CPA only vs. CPA or enrolled agent vs. licensed tax preparer</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" /> <span><strong>LTV limits:</strong> 80% at some lenders, 85% at others, up to 90% at select lenders</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" /> <span><strong>Loan amounts:</strong> $1M cap at some lenders, $3M at others, up to $5M at select lenders</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" /> <span><strong>Credit score tiers:</strong> Rate adjustments vary significantly by lender at each credit tier</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" /> <span><strong>Reasonableness standards:</strong> Some lenders require bank statement cross-referencing, others rely on CPA attestation alone</span></li>
                </ul>
                <p className="mt-4">
                  The variation between lenders means that <strong>the same borrower can receive dramatically different offers</strong> depending on which P&amp;L lender reviews their file. A wholesale broker&apos;s job is to match your specific profile — credit score, LTV, loan amount, business type, P&amp;L period — with the lender whose guidelines produce the most competitive terms.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Data Hub Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-emerald-600" />
              Self-Employment Income Documentation Options
            </h2>
            <p className="text-lg text-slate-600 mb-8">Every self-employed income documentation method has trade-offs. This table compares the five primary approaches available through the wholesale channel.</p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left py-3 px-4 font-semibold">Documentation Type</th>
                    <th className="text-left py-3 px-4 font-semibold">How Income Is Calculated</th>
                    <th className="text-left py-3 px-4 font-semibold">Typical Qualifying Income</th>
                    <th className="text-left py-3 px-4 font-semibold">Key Advantage</th>
                    <th className="text-left py-3 px-4 font-semibold">Key Limitation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-blue-50">
                    <td className="py-3 px-4 font-medium text-blue-700">P&amp;L Statement</td>
                    <td className="py-3 px-4 text-slate-600">CPA-prepared net income analysis</td>
                    <td className="py-3 px-4 text-slate-600">Highest (pre-deduction income)</td>
                    <td className="py-3 px-4 text-slate-600">Captures true earning power</td>
                    <td className="py-3 px-4 text-slate-600">Requires licensed CPA/EA</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-medium text-slate-700">Bank Statements</td>
                    <td className="py-3 px-4 text-slate-600">Average monthly deposits minus expense factor</td>
                    <td className="py-3 px-4 text-slate-600">Moderate (deposit-based)</td>
                    <td className="py-3 px-4 text-slate-600">Self-authenticating documents</td>
                    <td className="py-3 px-4 text-slate-600">50% expense factor can reduce income</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-700">Tax Returns (Full Doc)</td>
                    <td className="py-3 px-4 text-slate-600">2-year average of AGI</td>
                    <td className="py-3 px-4 text-slate-600">Lowest (after all deductions)</td>
                    <td className="py-3 px-4 text-slate-600">Lowest rates available</td>
                    <td className="py-3 px-4 text-slate-600">Deductions reduce qualifying income</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-medium text-slate-700">Asset Depletion</td>
                    <td className="py-3 px-4 text-slate-600">Liquid assets divided over loan term</td>
                    <td className="py-3 px-4 text-slate-600">Asset-dependent</td>
                    <td className="py-3 px-4 text-slate-600">No active income required</td>
                    <td className="py-3 px-4 text-slate-600">Requires substantial liquid assets</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-700">DSCR (Investors)</td>
                    <td className="py-3 px-4 text-slate-600">Rental income vs. mortgage payment</td>
                    <td className="py-3 px-4 text-slate-600">Property cash flow-based</td>
                    <td className="py-3 px-4 text-slate-600">No personal income needed</td>
                    <td className="py-3 px-4 text-slate-600">Investment properties only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Qualifying Scenario Example */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl border border-blue-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Calculator className="w-7 h-7 text-blue-600" />
                Real-World Qualifying Scenario: P&amp;L vs Tax Return Income
              </h3>
              <p className="text-slate-600 mb-6">This example illustrates why P&amp;L statement loans unlock significantly higher purchasing power for self-employed borrowers.</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h4 className="font-bold text-red-700 text-lg mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Tax Return Qualification
                  </h4>
                  <div className="space-y-3 text-slate-600">
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span>Gross Business Revenue</span>
                      <span className="font-semibold">$350,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span>Business Expenses</span>
                      <span className="font-semibold text-red-600">-$120,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span>Depreciation</span>
                      <span className="font-semibold text-red-600">-$45,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span>Home Office Deduction</span>
                      <span className="font-semibold text-red-600">-$18,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span>Vehicle Expenses</span>
                      <span className="font-semibold text-red-600">-$12,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span>Retirement Contributions</span>
                      <span className="font-semibold text-red-600">-$66,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span>Section 199A Deduction</span>
                      <span className="font-semibold text-red-600">-$17,800</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t-2 border-red-200">
                      <span className="font-bold text-red-700">AGI on Tax Return</span>
                      <span className="font-bold text-red-700">$71,200</span>
                    </div>
                    <div className="flex justify-between bg-red-50 rounded p-3 mt-2">
                      <span className="font-medium">Monthly Qualifying Income</span>
                      <span className="font-bold text-red-700">$5,933/mo</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-blue-200 p-6">
                  <h4 className="font-bold text-blue-700 text-lg mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    P&amp;L Statement Qualification
                  </h4>
                  <div className="space-y-3 text-slate-600">
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span>Gross Business Revenue</span>
                      <span className="font-semibold">$350,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span>Actual Operating Expenses</span>
                      <span className="font-semibold text-red-600">-$120,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-emerald-600">Depreciation (non-cash)</span>
                      <span className="font-semibold text-emerald-600">Added back</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-emerald-600">Home Office (non-cash)</span>
                      <span className="font-semibold text-emerald-600">Added back</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-emerald-600">Vehicle (partial add-back)</span>
                      <span className="font-semibold text-emerald-600">Added back</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-emerald-600">Retirement (elective)</span>
                      <span className="font-semibold text-emerald-600">Added back</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-emerald-600">199A (tax deduction only)</span>
                      <span className="font-semibold text-emerald-600">Added back</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t-2 border-blue-200">
                      <span className="font-bold text-blue-700">P&amp;L Net Income</span>
                      <span className="font-bold text-blue-700">$230,000</span>
                    </div>
                    <div className="flex justify-between bg-blue-50 rounded p-3 mt-2">
                      <span className="font-medium">Monthly Qualifying Income</span>
                      <span className="font-bold text-blue-700">$19,167/mo</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-emerald-50 rounded-lg border border-emerald-200 p-5 text-center">
                <p className="text-lg font-bold text-emerald-800">
                  P&amp;L qualification income: <span className="text-2xl">3.2x higher</span> than tax return income
                </p>
                <p className="text-emerald-700 mt-1">Same borrower, same business, same year — dramatically different qualifying power</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <LeadMagnetCTA
              title="Self-Employed Mortgage Qualification Calculator"
              description="Compare your qualifying income across P&L, bank statement, and tax return documentation methods. See which approach maximizes your borrowing power."
              href="/resources/document-checklist"
              badge="Free resource"
              ctaText="Get the checklist"
            />
          </div>
        </div>
      </section>

      {/* PAA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              People Also Ask: P&amp;L Statement Loans
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Can I prepare my own P&L statement for a mortgage?",
                  a: "No. Lenders require a CPA or enrolled agent to prepare, sign, and date the P&L statement.",
                  detail: "Self-prepared P&L statements are not accepted by any wholesale P&L lender. The CPA or EA must include their professional license number and contact information. Some lenders also require a separate attestation letter from the preparer confirming they reviewed the borrower's financial records and believe the P&L figures to be accurate and complete."
                },
                {
                  q: "How far back does the P&L statement need to cover?",
                  a: "Most lenders require 12 to 24 months of P&L history prepared by a licensed CPA.",
                  detail: "The required P&L period varies by lender. Some accept a 12-month P&L for borrowers with strong credit and lower LTV requests, while others require a full 24-month P&L regardless of other factors. Your wholesale broker identifies which lenders accept 12-month P&L statements for your specific scenario, which can simplify the documentation process."
                },
                {
                  q: "Do P&L loans require reserves?",
                  a: "Most P&L programs require 3 to 12 months of mortgage reserves depending on loan amount.",
                  detail: "Reserve requirements increase with loan amount and risk factors. A primary residence P&L loan under $1M with 20% down might require 3-6 months of reserves, while a $3M jumbo P&L loan might require 12+ months. Reserves can include checking/savings accounts, retirement accounts (typically counted at 60-70% of value), and investment accounts."
                },
                {
                  q: "What happens if the lender questions my P&L figures?",
                  a: "The lender contacts your CPA directly or requests additional business bank statements for verification.",
                  detail: "If the underwriter identifies discrepancies between the P&L and supporting documentation (such as bank deposits that don't align with reported revenue), they may request a CPA explanation letter, additional months of business bank statements, or a revised P&L with supporting detail. This is a normal part of the reasonableness review process and does not necessarily indicate a problem with the application."
                },
                {
                  q: "Can I use a P&L loan for a cash-out refinance?",
                  a: "Yes. P&L loans support cash-out refinances up to 80% LTV on primary residences.",
                  detail: "Cash-out refinances on investment properties are typically capped at 70-75% LTV. Maximum cash-out amounts vary by lender — some cap at $500,000, while others allow unlimited cash-out up to the LTV limit. Your wholesale broker matches your cash-out needs with the right P&L lender's guidelines."
                },
                {
                  q: "Are P&L statement loans available for foreign nationals?",
                  a: "Some wholesale lenders combine P&L documentation with foreign national programs for eligible borrowers.",
                  detail: "Foreign national P&L programs are rare but do exist in the wholesale channel. These typically require higher down payments (25-30%), lower LTV limits, and the P&L must be prepared by a U.S.-based CPA or enrolled agent. The business must also operate within the United States. Your wholesale broker can identify which lenders offer this combined program."
                },
                {
                  q: "How does a P&L loan affect my ability to refinance later?",
                  a: "P&L loans carry no restrictions on future refinancing into conventional or other loan programs.",
                  detail: "If your tax return income improves in future years (or if you choose to take fewer deductions), you can refinance from a P&L loan into a conventional mortgage with lower rates. There is no seasoning requirement specific to P&L loans — standard refinance seasoning rules apply (typically 6-12 months depending on the new loan type). If you chose a prepayment penalty option, factor that cost into your refinance timeline."
                },
                {
                  q: "What types of businesses qualify for P&L statement loans?",
                  a: "Virtually any self-employment qualifies including sole proprietors, LLCs, S-Corps, and partnerships.",
                  detail: "Eligible business types include: sole proprietorships, single-member LLCs, multi-member LLCs, S-Corporations, C-Corporations, partnerships, independent contractors (1099), freelancers, medical/dental/legal practices, real estate agents, e-commerce businesses, restaurants and retail stores, consulting firms, and construction companies. The key requirement is 2+ years of continuous operation in the same business or industry."
                }
              ].map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-slate-800 font-semibold mb-3 speakable-answer">{item.a}</p>
                  <p className="text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions: P&amp;L Statement Loans</h2>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <details key={index} className="bg-white rounded-lg border border-slate-200 group">
                  <summary className="flex items-center justify-between cursor-pointer p-5 text-lg font-semibold text-slate-900 hover:text-blue-700 transition-colors">
                    {faq.question}
                    <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform shrink-0 ml-4" />
                  </summary>
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Summary + CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Qualify Using Your P&amp;L Statement?</h2>
            <p className="text-xl text-slate-300 mb-4 leading-relaxed">
              If your tax returns don&apos;t reflect your true earning power, a P&amp;L statement loan can unlock the financing you deserve. As a wholesale mortgage broker with access to 200+ lenders — including 30+ that offer P&amp;L programs — I match your specific business profile with the lender whose guidelines produce the most competitive terms.
            </p>
            <p className="text-lg text-slate-400 mb-8">
              Every self-employed borrower&apos;s situation is different. The right documentation path depends on your business type, account structure, credit profile, and target loan amount. Let&apos;s run the numbers together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg flex items-center gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Get P&amp;L Loan Pre-Qualification
                </Button>
              </Link>
              <Link href="tel:9498229662">
                <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 text-lg rounded-lg flex items-center gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call (949) 822-9662
                </Button>
              </Link>
            </div>

            {/* Expert Info */}
            <div className="bg-slate-800/50 rounded-xl p-6 inline-block">
              <p className="text-slate-300 text-sm">
                <strong className="text-white">Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. NMLS #2716106 | DRE #02291443
              </p>
              <p className="text-slate-400 text-sm mt-1">Licensed in California &amp; Washington | 200+ Wholesale Lenders</p>
            </div>

            {/* Related Articles */}
            <div className="mt-12 text-left">
              <h3 className="text-xl font-bold text-white mb-4">Related Self-Employed Mortgage Resources</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/blog/bank-statement-loans-self-employed-2026" className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-colors block">
                  <span className="text-blue-400 font-semibold flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Bank Statement Loans: Self-Employed Guide 2026
                  </span>
                </Link>
                <Link href="/blog/non-qm-loans-wholesale-broker-2026" className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-colors block">
                  <span className="text-blue-400 font-semibold flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Non-QM Loans: Complete Wholesale Guide 2026
                  </span>
                </Link>
                <Link href="/blog/self-employed-mortgage-broker-2026" className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-colors block">
                  <span className="text-blue-400 font-semibold flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Self-Employed Mortgage Broker Guide 2026
                  </span>
                </Link>
                <Link href="/blog/asset-depletion-loans-guide-2026" className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-colors block">
                  <span className="text-blue-400 font-semibold flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Asset Depletion Loans: Complete Guide 2026
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Footer */}
      <section className="py-8 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs text-slate-500 space-y-3">
              <p>
                <strong>Mo Abdel</strong> | NMLS #1426884 | <strong>Lumin Lending, Inc.</strong> | NMLS #2716106 | DRE #02291443 | Licensed in California &amp; Washington
              </p>
              <p>
                This article is for informational purposes only and does not constitute a commitment to lend. Not all borrowers will qualify. Loan approval is subject to credit, income, property, and underwriting requirements. Terms, conditions, and programs are subject to change without notice. P&amp;L statement loans are non-qualified mortgage (non-QM) products and are not available through all lenders. A CPA or enrolled agent-prepared profit and loss statement is required for qualification. Minimum credit scores, down payment requirements, and reserve requirements vary by lender and program.
              </p>
              <p>
                Equal Housing Lender. This is not a commitment to lend. Not all borrowers will qualify. Terms and conditions apply. Programs, rates, terms, and conditions are subject to change without notice. All loans are subject to credit approval.
              </p>
              <p>
                &copy; {new Date().getFullYear()} Mo Abdel. All rights reserved. | Published February 19, 2026 | Last updated February 19, 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}