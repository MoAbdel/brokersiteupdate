import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Building2, DollarSign, TrendingUp, AlertCircle, BookOpen, Shield, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LeadMagnetCTA } from '@/components/lead-magnets/LeadMagnetCTA';

export const metadata: Metadata = {
  title: 'Physician Mortgage Loans California & Washington: Wholesale Broker Guide [2026] | Mo Abdel',
  description: 'Physician mortgage loans in California & Washington: 0-10% down, no PMI, student debt flexibility for MDs, DOs, DDS, DMD, OD, DPM, PharmD, PA, NP. 200+ lender access via wholesale broker. NMLS #1426884.',
  keywords: [
    'physician mortgage loans California',
    'doctor mortgage loans',
    'physician home loans Washington',
    'doctor loan no PMI',
    'physician mortgage 0 down',
    'medical professional mortgage',
    'resident physician home loan',
    'wholesale physician mortgage broker',
    'doctor mortgage Orange County',
    'physician mortgage Seattle',
    'physician mortgage Los Angeles',
    'doctor home loan no down payment',
    'dentist mortgage loan',
    'nurse practitioner mortgage',
    'physician assistant home loan',
  ],
  openGraph: {
    title: 'Physician Mortgage Loans California & Washington: Wholesale Broker Guide [2026]',
    description: 'Physician mortgage loans: 0-10% down, no PMI, student debt flexibility for medical professionals. 200+ wholesale lenders. Licensed in CA & WA.',
    url: 'https://www.mothebroker.com/blog/physician-mortgage-loans-wholesale-2026',
    type: 'article',
    authors: ['Mo Abdel'],
  },
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/physician-mortgage-loans-wholesale-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/physician-mortgage-loans-wholesale-2026',
      'x-default': 'https://www.mothebroker.com/blog/physician-mortgage-loans-wholesale-2026',
    },
  },
};

const faqData = [
  {
    question: 'What is a physician mortgage loan and how does it work?',
    answer: 'A physician mortgage loan is a specialized home loan designed for medical professionals. These loans allow eligible doctors, dentists, and other healthcare providers to purchase homes with as little as 0% to 10% down payment and no private mortgage insurance (PMI). Lenders offer these terms because physicians have high earning potential and historically low default rates. The loans account for medical school debt differently than conventional programs, often excluding deferred student loans or using income-based repayment amounts instead of the full balance.',
  },
  {
    question: 'Which medical professionals qualify for physician mortgage loans in California and Washington?',
    answer: 'Eligible professionals vary by lender but commonly include Medical Doctors (MD), Doctors of Osteopathic Medicine (DO), Doctors of Dental Surgery (DDS), Doctors of Dental Medicine (DMD), Doctors of Optometry (OD), Doctors of Podiatric Medicine (DPM), Doctors of Pharmacy (PharmD), Physician Assistants (PA), Nurse Practitioners (NP), and Certified Registered Nurse Anesthetists (CRNA). Some lenders also extend eligibility to Juris Doctors (JD) and veterinarians (DVM). A wholesale broker accesses 15-20+ physician lenders to find programs matching each professional designation.',
  },
  {
    question: 'Can medical residents and fellows qualify for physician mortgage loans?',
    answer: 'Yes. Most physician mortgage lenders allow residents and fellows to qualify using an employment contract or verification of future income. Borrowers within 60 to 90 days of starting a residency or fellowship program can close on a home before their first paycheck. The lender uses the contracted salary as qualifying income. This allows newly matched residents to purchase homes near their training hospital without waiting years to build traditional employment history.',
  },
  {
    question: 'How do physician mortgage lenders treat student loan debt?',
    answer: 'Physician mortgage lenders treat student debt more favorably than conventional programs. Common approaches include excluding deferred student loans entirely from debt-to-income calculations, using the actual income-based repayment (IBR) or income-contingent repayment (ICR) amount rather than 0.5% to 1% of the total balance, and accepting documentation of employer loan repayment assistance programs. These flexible student debt calculations allow physicians with $200,000 to $400,000+ in medical school debt to qualify for home purchases that conventional programs would deny.',
  },
  {
    question: 'What is the maximum loan amount for physician mortgage loans in California?',
    answer: 'Maximum physician mortgage loan amounts in California range from $1,000,000 to $3,500,000+ depending on the lender, with some programs extending to $5,000,000 for well-qualified borrowers. High-cost California markets like Orange County, Los Angeles, San Francisco, and San Diego require higher loan amounts, making physician mortgage programs particularly valuable. Wholesale brokers access lenders with the highest physician loan limits for California metro areas.',
  },
  {
    question: 'Do physician mortgage loans require private mortgage insurance (PMI)?',
    answer: 'No. Physician mortgage loans do not require private mortgage insurance regardless of down payment amount. A conventional loan with less than 20% down payment requires PMI costing 0.3% to 1.5% of the loan amount annually. On a $1,000,000 physician mortgage with 5% down, eliminating PMI saves $3,000 to $15,000 per year compared to a conventional loan. This is one of the most significant financial advantages of physician mortgage programs.',
  },
  {
    question: 'How do physician mortgage rates compare to conventional mortgage rates?',
    answer: 'Physician mortgage rates are competitive with conventional mortgage rates and are sometimes identical to conforming rates for well-qualified borrowers. While physician loans carry slightly more lender risk due to lower down payments and high loan amounts, the historically low default rate among physicians (under 0.2% according to industry data) keeps rates competitive. A wholesale broker compares physician mortgage rates across 15-20+ lenders to identify the most competitive pricing for each scenario.',
  },
  {
    question: 'Can I use a physician mortgage loan to buy a home in both California and Washington?',
    answer: 'Yes. Mo Abdel is licensed to originate physician mortgage loans in both California (DRE #02291443) and Washington. As a wholesale broker with access to 200+ lenders, Mo shops physician loan programs across multiple states. Whether purchasing in Orange County, Los Angeles, San Francisco, Seattle, Bellevue, or any other CA or WA market, the same physician mortgage benefits apply including low down payment, no PMI, and flexible student debt treatment.',
  },
  {
    question: 'What down payment options are available for physician mortgage loans?',
    answer: 'Physician mortgage down payment options range from 0% to 10% depending on the loan amount and lender. Common structures include 0% down on loans up to $750,000 to $1,000,000, 5% down on loans up to $1,000,000 to $1,500,000, and 10% down on loans up to $2,000,000 to $3,500,000. None of these options require PMI. Down payment minimums increase as loan amounts increase, with each lender setting different thresholds. A wholesale broker identifies which lenders offer the lowest down payment for the target purchase price.',
  },
  {
    question: 'Why should I use a wholesale mortgage broker for a physician loan instead of my bank?',
    answer: 'Most banks offer 1 to 2 physician mortgage programs with fixed terms and rates. A wholesale broker like Mo Abdel accesses 15-20+ physician lenders simultaneously, comparing rates, down payment requirements, eligible professional designations, student debt treatment policies, and loan amount limits. This competition between lenders benefits the borrower. Additionally, wholesale brokers access physician programs from lenders that do not offer direct-to-consumer channels, expanding options beyond what any single bank provides.',
  },
  {
    question: 'What closing costs should physicians expect on a physician mortgage loan?',
    answer: 'Physician mortgage closing costs are comparable to conventional loan closing costs, typically ranging from 2% to 5% of the purchase price. Costs include origination fees, appraisal, title insurance, escrow fees, and prepaid items (taxes, insurance, interest). Some physician lenders offer closing cost credits or lender-paid options for borrowers who accept a slightly higher rate. Wholesale brokers negotiate lender credits and compare total cost across multiple physician programs to minimize out-of-pocket expenses at closing.',
  },
  {
    question: 'Can physician mortgage loans be used for refinancing an existing home?',
    answer: 'Some physician mortgage lenders offer refinance programs, though availability is more limited than purchase programs. Rate-and-term refinances allow physicians to lower their rate or change loan terms. Cash-out refinances are available from select physician lenders with loan-to-value limits of 80% to 90%. Physicians who initially purchased with a conventional loan and are paying PMI can refinance into a physician mortgage to eliminate PMI and potentially lower their rate. A wholesale broker identifies which lenders offer physician refinance products.',
  },
];

export default function PhysicianMortgageLoansWholesale2026() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Physician Mortgage Loans California & Washington: Wholesale Broker Guide [2026]",
    "description": "Complete guide to physician mortgage loans in California and Washington. How medical professionals get 0-10% down, no PMI, and flexible student debt treatment through wholesale broker access to 200+ lenders.",
    "about": {
      "@type": "FinancialProduct",
      "name": "Physician Mortgage Loan",
      "category": "Mortgage Loans",
      "provider": {
        "@type": "Organization",
        "name": "Lumin Lending",
        "identifier": "NMLS #2716106"
      }
    },
    "author": {
      "@type": "Person",
      "name": "Mo Abdel",
      "jobTitle": "Licensed Mortgage Broker",
      "identifier": "NMLS #1426884",
      "url": "https://www.mothebroker.com/about",
      "worksFor": {
        "@type": "Organization",
        "name": "Lumin Lending",
        "identifier": "NMLS #2716106",
        "url": "https://www.mothebroker.com"
      },
      "knowsAbout": [
        "Physician Mortgage Loans",
        "Doctor Home Loans",
        "Medical Professional Mortgages",
        "Wholesale Mortgage Lending",
        "California Mortgages",
        "Washington Mortgages",
        "Non-QM Mortgages",
        "Jumbo Loans"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lumin Lending, Inc.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mothebroker.com/images/mo-logo-white.webp"
      }
    },
    "datePublished": "2026-02-19",
    "dateModified": "2026-02-19",
    "mainEntity": {
      "@type": "WebPage",
      "@id": "https://www.mothebroker.com/blog/physician-mortgage-loans-wholesale-2026",
      "significantLink": [
        "https://www.nmlsconsumeraccess.org/",
        "https://www.consumerfinance.gov/",
        "https://www.aamc.org/",
        "https://www.bls.gov/"
      ]
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".citation-hook", ".expert-summary"]
    },
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Lumin Lending",
      "url": "https://www.mothebroker.com"
    },
    "copyrightYear": "2026"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
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
        "name": "Physician Mortgage Loans: Wholesale Broker Guide 2026",
        "item": "https://www.mothebroker.com/blog/physician-mortgage-loans-wholesale-2026"
      }
    ]
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li>/</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Physician Mortgage Loans 2026</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-2xl p-8 md:p-12 mb-10 text-white">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-blue-300" />
          <span className="text-blue-200 text-sm font-medium uppercase tracking-wide">Medical Professional Mortgage Guide</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Physician Mortgage Loans in California &amp; Washington: Wholesale Broker Guide [2026]
        </h1>
        <p className="text-blue-100 text-lg md:text-xl mb-6 max-w-3xl">
          How MDs, DOs, dentists, pharmacists, PAs, and nurse practitioners access physician mortgage programs with 0-10% down, no PMI, and flexible student debt treatment through 200+ wholesale lenders.
        </p>
        <div className="flex items-center text-sm text-blue-200 space-x-4 mb-6">
          <span>By <strong className="text-white">Mo Abdel</strong>, NMLS #1426884</span>
          <span>|</span>
          <time dateTime="2026-02-19">February 19, 2026</time>
          <span>|</span>
          <span>18 min read</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact">
            <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 py-3">
              <Phone className="w-4 h-4 mr-2" />
              Get Physician Loan Quote
            </Button>
          </Link>
          <Link href="/calculator">
            <Button className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3">
              <Calculator className="w-4 h-4 mr-2" />
              Mortgage Calculator
            </Button>
          </Link>
        </div>
      </header>

      <section className="prose prose-lg max-w-none">

        {/* Citation Hook */}
        <div className="citation-hook bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8 not-prose">
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            <strong>According to Mo Abdel, licensed mortgage broker (NMLS #1426884) with Lumin Lending:</strong> &quot;Physician mortgage loans are one of the most underutilized programs in California and Washington. Medical professionals carry $200,000 to $400,000+ in student debt, and conventional lenders penalize them for it. Physician loan programs recognize that a physician&apos;s debt-to-income picture today does not reflect their earning trajectory. Through wholesale channels, I access 15-20+ physician lenders simultaneously — each with different eligibility criteria, loan limits, and student debt treatment policies. Most physicians don&apos;t realize they have options beyond their bank&apos;s single program.&quot;
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-800">No PMI Required</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">Physician loans eliminate PMI even with 0-10% down, saving $3,000-$15,000+ per year on high-balance loans</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-800">15-20+ Physician Lenders</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">Wholesale brokers access more physician programs than any single bank, creating competition that benefits borrowers</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-800">Up to $3.5M+ Loan Amounts</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">High-balance physician programs cover California and Washington&apos;s expensive metro housing markets</p>
            </div>
          </div>
        </div>

        {/* Physician Loan vs Other Loan Types — Bing Power Block */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-blue-600" />
          Physician Mortgage Loans vs. Conventional, FHA &amp; Jumbo: Complete Comparison
        </h2>

        <p>
          The physician mortgage loan occupies a unique position in the mortgage market. Understanding how it compares to conventional, FHA, and <Link href="/blog/jumbo-loan-requirements-california-washington-2026" className="text-blue-600 hover:text-blue-800 underline">jumbo loan programs</Link> reveals why medical professionals consistently choose this product for home purchases in California and Washington.
        </p>

        <div className="overflow-x-auto my-6 not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="border border-blue-700 px-4 py-3 text-left font-semibold">Feature</th>
                <th className="border border-blue-700 px-4 py-3 text-center font-semibold">Physician Loan</th>
                <th className="border border-blue-700 px-4 py-3 text-center font-semibold">Conventional</th>
                <th className="border border-blue-700 px-4 py-3 text-center font-semibold">FHA</th>
                <th className="border border-blue-700 px-4 py-3 text-center font-semibold">Jumbo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3 font-medium">Minimum Down Payment</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">0-10%</td>
                <td className="border border-gray-200 px-4 py-3 text-center">3-5%</td>
                <td className="border border-gray-200 px-4 py-3 text-center">3.5%</td>
                <td className="border border-gray-200 px-4 py-3 text-center">10-20%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Private Mortgage Insurance</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">None</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Required &lt;20% down</td>
                <td className="border border-gray-200 px-4 py-3 text-center">MIP for life of loan</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Varies by lender</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3 font-medium">Student Debt Treatment</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">IBR/ICR or excluded</td>
                <td className="border border-gray-200 px-4 py-3 text-center">0.5-1% of balance</td>
                <td className="border border-gray-200 px-4 py-3 text-center">0.5% of balance or IBR</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Full payment or 0.5-1%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Maximum Loan Amount</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$1M-$3.5M+</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$806,500-$1,209,750</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$498,257-$1,209,750</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$2M-$10M+</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3 font-medium">Eligible Professionals</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">MD, DO, DDS, PA, NP+</td>
                <td className="border border-gray-200 px-4 py-3 text-center">All borrowers</td>
                <td className="border border-gray-200 px-4 py-3 text-center">All borrowers</td>
                <td className="border border-gray-200 px-4 py-3 text-center">All borrowers</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Employment Contract Qualifying</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">Yes — residents/fellows</td>
                <td className="border border-gray-200 px-4 py-3 text-center">No</td>
                <td className="border border-gray-200 px-4 py-3 text-center">No</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Rarely</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3 font-medium">Minimum Credit Score</td>
                <td className="border border-gray-200 px-4 py-3 text-center">680-720</td>
                <td className="border border-gray-200 px-4 py-3 text-center">620-680</td>
                <td className="border border-gray-200 px-4 py-3 text-center">580</td>
                <td className="border border-gray-200 px-4 py-3 text-center">700-740</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Closing Timeline</td>
                <td className="border border-gray-200 px-4 py-3 text-center">21-35 days</td>
                <td className="border border-gray-200 px-4 py-3 text-center">30-45 days</td>
                <td className="border border-gray-200 px-4 py-3 text-center">45-60 days</td>
                <td className="border border-gray-200 px-4 py-3 text-center">30-45 days</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3 font-medium">Rate Competitiveness</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">Competitive with conventional</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Market standard</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Market standard</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Slightly above conventional</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Reserve Requirements</td>
                <td className="border border-gray-200 px-4 py-3 text-center">0-6 months</td>
                <td className="border border-gray-200 px-4 py-3 text-center">0-6 months</td>
                <td className="border border-gray-200 px-4 py-3 text-center">None</td>
                <td className="border border-gray-200 px-4 py-3 text-center">6-24 months</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3 font-medium">Property Types</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Primary residence only</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Primary, 2nd, investment</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Primary residence only</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Primary, 2nd, investment</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Numbered Eligibility Steps */}
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">How to Qualify for a Physician Mortgage Loan: Step-by-Step</h3>
        <div className="not-prose space-y-3 mb-8">
          {[
            { step: 1, title: 'Verify Professional Eligibility', desc: 'Confirm your degree (MD, DO, DDS, DMD, OD, DPM, PharmD, PA, NP, CRNA) qualifies with target physician lenders. Each lender accepts different designations.' },
            { step: 2, title: 'Gather Employment Documentation', desc: 'Provide your employment contract, offer letter, or verification of employment. Residents and fellows can use match letters or signed contracts showing start date and salary.' },
            { step: 3, title: 'Document Student Loan Status', desc: 'Collect student loan statements showing current balances, repayment status (deferred, IBR, standard), and monthly payment amounts. Lenders treat each repayment plan differently.' },
            { step: 4, title: 'Submit to Multiple Physician Lenders', desc: 'Your wholesale broker submits your file to 15-20+ physician lenders simultaneously, comparing rates, terms, down payment requirements, and student debt treatment for your specific scenario.' },
            { step: 5, title: 'Compare Loan Options', desc: 'Review side-by-side physician loan offers including rate, closing costs, lender credits, down payment, and total monthly payment. Select the program that aligns with your financial goals.' },
            { step: 6, title: 'Lock Rate and Close', desc: 'Lock your rate with the selected physician lender. Complete appraisal, title, and underwriting. Most physician loan closings complete in 21 to 35 days.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {item.step}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* E-E-A-T Narrative Section 1 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" />
          What Makes Physician Mortgage Loans Different From Standard Mortgages?
        </h2>

        <p>
          Physician mortgage loans exist because traditional lending guidelines systematically disadvantage medical professionals. A physician graduating from medical school carries an average of $203,062 in educational debt according to the <a href="https://www.aamc.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Association of American Medical Colleges (AAMC)</a>. Under <Link href="/blog/conventional-loans-complete-guide-2026" className="text-blue-600 hover:text-blue-800 underline">conventional loan guidelines</Link>, lenders calculate student loan payments as 0.5% to 1% of the total balance for deferred loans. On $250,000 in student debt, that adds $1,250 to $2,500 per month to the borrower&apos;s debt-to-income ratio — even if the physician is making $0 monthly payments under an income-based repayment plan.
        </p>
        <p>
          Physician mortgage lenders recognize that medical professionals occupy a fundamentally different financial trajectory than the general population. The <a href="https://www.bls.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Bureau of Labor Statistics</a> reports median physician compensation exceeding $229,000 annually, with specialists earning $300,000 to $500,000+. This earning potential, combined with historically low physician default rates (under 0.2%), creates a risk profile that justifies the favorable loan terms physician programs provide.
        </p>
        <p>
          Three structural advantages separate physician loans from every other mortgage product available in California and Washington:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>No PMI regardless of down payment</strong> — conventional loans require PMI with less than 20% down, costing $250 to $1,250+ per month on high-balance loans. Physician loans eliminate this cost entirely.</li>
          <li><strong>Student debt flexibility</strong> — lenders use the actual IBR/ICR payment or exclude deferred loans, rather than calculating a hypothetical payment based on total balance.</li>
          <li><strong>Employment contract qualifying</strong> — residents, fellows, and newly hired attendings can close on a home 60-90 days before their start date using a signed employment contract as qualifying income.</li>
        </ul>

        {/* E-E-A-T Narrative Section 2 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-blue-600" />
          How Do Physician Mortgage Lenders Treat Student Loan Debt?
        </h2>

        <p>
          Student debt treatment is the single most impactful difference between physician mortgage programs and conventional financing. The way a lender counts student loan debt directly determines how much home a physician can afford. Here is how different physician lenders approach student debt in 2026:
        </p>

        <div className="overflow-x-auto my-6 not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-indigo-900 text-white">
                <th className="border border-indigo-700 px-4 py-3 text-left font-semibold">Student Debt Treatment Method</th>
                <th className="border border-indigo-700 px-4 py-3 text-center font-semibold">Monthly DTI Impact ($250K Balance)</th>
                <th className="border border-indigo-700 px-4 py-3 text-center font-semibold">Purchasing Power Effect</th>
                <th className="border border-indigo-700 px-4 py-3 text-center font-semibold">Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3 font-medium">Exclude Deferred Loans Entirely</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$0/month</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700">Maximum purchasing power</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Select physician lenders</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Use Actual IBR/ICR Payment</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$0-$400/month</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700">Near-maximum purchasing power</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Most physician lenders</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3 font-medium">0.5% of Total Balance (Conventional)</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-red-700 font-semibold">$1,250/month</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-red-700">Reduces by $200K-$300K</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Fannie Mae / Freddie Mac</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">1% of Total Balance (Conservative)</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-red-700 font-semibold">$2,500/month</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-red-700">Reduces by $400K-$500K</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Some portfolio lenders</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The difference between a physician lender excluding deferred student loans and a conventional lender using 1% of the balance is staggering. A physician with $300,000 in deferred student debt and a $300,000 annual salary could qualify for approximately $1,200,000 to $1,500,000 with a physician lender versus $700,000 to $900,000 with a conventional lender — a purchasing power gap of $300,000 to $600,000 or more.
        </p>
        <p>
          For physicians in California&apos;s high-cost markets like Orange County (median home price approximately $1,100,000), Los Angeles, or San Francisco, or Washington&apos;s Eastside communities like Bellevue and Kirkland, this student debt treatment difference determines whether homeownership is achievable at all.
        </p>

        {/* E-E-A-T Narrative Section 3 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-600" />
          Which Medical Professionals Qualify for Physician Mortgage Loans?
        </h2>

        <p>
          Physician mortgage eligibility extends well beyond MDs. The range of qualifying professionals varies significantly between lenders, which is precisely why working with a wholesale broker who accesses multiple physician programs creates a meaningful advantage. Here is a breakdown of eligible designations and their typical lender acceptance:
        </p>

        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Universally Accepted (Nearly All Physician Lenders)
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> <strong>MD</strong> — Medical Doctor</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> <strong>DO</strong> — Doctor of Osteopathic Medicine</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> <strong>DDS</strong> — Doctor of Dental Surgery</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> <strong>DMD</strong> — Doctor of Dental Medicine</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> <strong>OD</strong> — Doctor of Optometry</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Widely Accepted (Majority of Physician Lenders)
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> <strong>DPM</strong> — Doctor of Podiatric Medicine</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> <strong>PharmD</strong> — Doctor of Pharmacy</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> <strong>PA</strong> — Physician Assistant (Master&apos;s+)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> <strong>NP</strong> — Nurse Practitioner (DNP/MSN)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> <strong>CRNA</strong> — Certified Registered Nurse Anesthetist</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Limited Acceptance (Select Physician Lenders)
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" /> <strong>JD</strong> — Juris Doctor (Attorney)</li>
              <li className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" /> <strong>DVM</strong> — Doctor of Veterinary Medicine</li>
              <li className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" /> <strong>PhD</strong> — Select clinical/research fields</li>
              <li className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" /> <strong>DPT</strong> — Doctor of Physical Therapy</li>
            </ul>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-5">
            <h4 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Wholesale Broker Advantage
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              A bank offers its single physician program — you either qualify or you don&apos;t. A wholesale broker matches your specific designation to the lenders that accept it.
            </p>
            <p className="text-sm text-gray-700 font-medium">
              Example: A CRNA applying at a bank that only covers MDs and DOs gets denied. Through a wholesale broker, that same CRNA accesses 5-8 lenders with CRNA-eligible physician programs.
            </p>
          </div>
        </div>

        {/* E-E-A-T Narrative Section 4 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          Physician Loans for Residents, Fellows &amp; New Attendings
        </h2>

        <p>
          One of the most powerful features of physician mortgage programs is the ability to qualify using a future employment contract rather than current income history. This applies directly to three groups that traditional lenders struggle to serve:
        </p>

        <div className="not-prose space-y-4 my-6">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mb-2">Medical Residents</h4>
            <p className="text-gray-600 text-sm mb-2">
              Newly matched residents can close on a home purchase using their residency contract as qualifying income. Most physician lenders accept contracts showing the start date, salary, and program duration. Residents earn $60,000 to $75,000 during training, which qualifies for homes in many California and Washington markets — especially when combined with a physician loan&apos;s favorable student debt treatment.
            </p>
            <p className="text-sm text-blue-700 font-medium">Timing: Close 60-90 days before residency start date. Ideal for Match Day planning.</p>
          </div>
          <div className="bg-white border-2 border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mb-2">Fellows</h4>
            <p className="text-gray-600 text-sm mb-2">
              Fellowship positions carry slightly higher salaries ($70,000 to $95,000) and longer established medical careers. Fellows who completed residency in a different city and are relocating for fellowship training use their fellowship contract to qualify. Physician lenders view fellowship contracts the same as residency contracts for qualifying purposes.
            </p>
            <p className="text-sm text-green-700 font-medium">Advantage: Fellowship income + physician loan terms = homeownership during sub-specialty training.</p>
          </div>
          <div className="bg-white border-2 border-indigo-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mb-2">New Attending Physicians</h4>
            <p className="text-gray-600 text-sm mb-2">
              Physicians transitioning from training to practice experience the largest income jump in any profession. An attending signing a $350,000+ employment contract can qualify for a physician mortgage immediately — before receiving a single paycheck. This allows the physician to purchase a home concurrent with starting their attending position, avoiding months of renting at attending-level housing costs.
            </p>
            <p className="text-sm text-indigo-700 font-medium">Key: Signed employment contract with compensation details is the qualifying document.</p>
          </div>
        </div>

        <p>
          Conventional lenders require 2 years of tax returns and W-2s showing consistent income. A resident transitioning to a $400,000 attending salary has no tax returns reflecting that income. Physician mortgage lenders solve this gap by qualifying on the contract, not the history.
        </p>

        {/* E-E-A-T Narrative Section 5 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" />
          Why Wholesale Brokers Access More Physician Mortgage Programs Than Banks
        </h2>

        <p>
          The mortgage industry operates through two channels: retail (banks and credit unions) and wholesale (mortgage brokers). The structural difference between these channels directly impacts how many physician loan options a borrower can access.
        </p>
        <p>
          A retail bank — even one with a physician mortgage program — offers exactly one physician loan product with fixed terms. The bank&apos;s physician program has specific eligibility criteria, set down payment tiers, a defined list of qualifying designations, and one approach to student debt treatment. If the borrower&apos;s profile does not fit that single program, the bank declines the application.
        </p>
        <p>
          A wholesale mortgage broker like Mo Abdel accesses 200+ total lenders, of which 15-20+ actively offer physician mortgage programs. Each physician lender has different:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Eligible professional designations</strong> — some accept only MDs and DOs; others include PAs, NPs, CRNAs, and PharmDs</li>
          <li><strong>Maximum loan amounts</strong> — ranging from $1,000,000 to $3,500,000+ depending on the lender</li>
          <li><strong>Down payment structures</strong> — 0% down up to $750K at one lender versus 0% down up to $1M at another</li>
          <li><strong>Student debt treatment policies</strong> — IBR payment at one lender, excluded deferred loans at another</li>
          <li><strong>Rate pricing</strong> — each lender prices physician loans independently, creating natural competition</li>
          <li><strong>Closing timelines</strong> — 21 days at one lender versus 35 days at another</li>
        </ul>
        <p>
          This structural advantage is not marginal — it is transformative. A <Link href="/blog/self-employed-mortgage-broker-2026" className="text-blue-600 hover:text-blue-800 underline">wholesale mortgage broker</Link> creates a competitive market between physician lenders where none otherwise exists. The result is better rates, more flexible terms, and higher approval rates for the physician borrower.
        </p>

        <LeadMagnetCTA
          title="Physician Mortgage Loan Comparison Tool"
          description="See side-by-side physician loan offers from multiple wholesale lenders. Compare rates, down payments, and student debt treatment for your specific medical degree and scenario."
          href="/contact"
          badge="Free consultation"
          ctaText="Compare physician loan options"
        />

        {/* Data Hub: CA/WA Physician Home Buying Scenarios */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-blue-600" />
          California &amp; Washington Physician Home Buying Scenarios
        </h2>

        <p>
          California and Washington rank among the highest cost-of-living states in the nation, making physician mortgage programs particularly valuable in these markets. Here is how physician loans apply to real scenarios across major CA and WA metro areas:
        </p>

        <div className="overflow-x-auto my-6 not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="border border-blue-700 px-4 py-3 text-left font-semibold">Metro Area</th>
                <th className="border border-blue-700 px-4 py-3 text-center font-semibold">Approx. Median Home Price</th>
                <th className="border border-blue-700 px-4 py-3 text-center font-semibold">5% Down (Physician Loan)</th>
                <th className="border border-blue-700 px-4 py-3 text-center font-semibold">20% Down (Conventional)</th>
                <th className="border border-blue-700 px-4 py-3 text-center font-semibold">Annual PMI Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3 font-medium">Orange County, CA</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$1,100,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$55,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$220,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$5,225-$15,675/yr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Los Angeles, CA</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$950,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$47,500</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$190,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$4,513-$13,538/yr</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3 font-medium">San Francisco Bay Area, CA</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$1,400,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$70,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$280,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$6,650-$19,950/yr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">San Diego, CA</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$925,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$46,250</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$185,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$4,394-$13,181/yr</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3 font-medium">Seattle / King County, WA</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$875,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$43,750</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$175,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$4,156-$12,469/yr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Bellevue / Eastside, WA</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$1,350,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$67,500</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$270,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$6,413-$19,238/yr</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3 font-medium">Sacramento, CA</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$550,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$27,500</td>
                <td className="border border-gray-200 px-4 py-3 text-center">$110,000</td>
                <td className="border border-gray-200 px-4 py-3 text-center text-green-700 font-semibold">$2,613-$7,838/yr</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          In Orange County alone, a physician purchasing with 5% down through a physician mortgage program saves $165,000 in upfront capital compared to a 20% conventional down payment — and avoids $5,225 to $15,675 per year in PMI. Over 5 years, that represents $191,000 to $243,000 in combined savings.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6 not-prose">
          <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            California &amp; Washington Physician Salary Context
          </h4>
          <p className="text-sm text-gray-700 mb-2">
            According to <a href="https://www.bls.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Bureau of Labor Statistics</a> data, California and Washington physicians rank among the highest-compensated in the nation:
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Primary Care (CA):</strong> $240,000-$320,000 median compensation</li>
            <li><strong>Specialists (CA):</strong> $350,000-$550,000+ median compensation</li>
            <li><strong>Primary Care (WA):</strong> $230,000-$310,000 median compensation</li>
            <li><strong>Specialists (WA):</strong> $340,000-$530,000+ median compensation</li>
            <li><strong>Residents/Fellows (CA &amp; WA):</strong> $60,000-$95,000 during training</li>
          </ul>
        </div>

        {/* PAA Section */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-blue-600" />
          People Also Ask: Physician Mortgage Loans in California &amp; Washington
        </h2>

        <div className="not-prose space-y-4 my-6">
          {[
            {
              q: 'Are physician mortgage loans a good deal?',
              a: 'Physician mortgage loans save medical professionals thousands annually by eliminating PMI and offering low down payments on high-balance loans.',
            },
            {
              q: 'Can dentists get physician mortgage loans in California?',
              a: 'Yes. DDS and DMD holders qualify with nearly all physician mortgage lenders for homes throughout California and Washington.',
            },
            {
              q: 'Do physician loans have higher interest rates?',
              a: 'Physician mortgage rates are competitive with conventional rates due to historically low physician default rates under 0.2%.',
            },
            {
              q: 'Can I get a physician mortgage with bad credit?',
              a: 'Most physician lenders require 680-720 minimum credit scores. Some programs accept 660 with compensating factors like lower DTI.',
            },
            {
              q: 'Do physician loans work for investment properties?',
              a: 'No. Physician mortgage loans are restricted to primary residences only. Investment properties require conventional or DSCR financing.',
            },
            {
              q: 'How long do I have to practice medicine to qualify?',
              a: 'Zero years. Residents and new attendings qualify using signed employment contracts before receiving their first paycheck.',
            },
            {
              q: 'Can nurse practitioners get physician mortgage loans?',
              a: 'Yes. Multiple wholesale physician lenders accept NPs with DNP or MSN degrees for full physician mortgage benefits.',
            },
            {
              q: 'What happens if I leave medicine after getting a physician loan?',
              a: 'Nothing changes. The loan terms remain fixed regardless of career changes. There is no ongoing practice requirement.',
            },
          ].map((item, idx) => (
            <details key={idx} className="bg-white border border-gray-200 rounded-lg group">
              <summary className="font-semibold text-gray-900 cursor-pointer p-4 hover:bg-gray-50 flex items-center justify-between">
                <span>{item.q}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700"><strong>{item.a}</strong></p>
              </div>
            </details>
          ))}
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" />
          Frequently Asked Questions: Physician Mortgage Loans
        </h2>

        <div className="not-prose space-y-4 my-6">
          {faqData.map((faq, idx) => (
            <details key={idx} className="bg-white border border-gray-200 rounded-lg group">
              <summary className="font-semibold text-gray-900 cursor-pointer p-4 hover:bg-gray-50 flex items-center justify-between">
                <span>{faq.question}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Expert Summary + CTA */}
        <div className="expert-summary bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-2xl p-8 md:p-10 text-white my-10 not-prose">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Expert Summary: Physician Mortgage Loans Through a Wholesale Broker
          </h2>
          <p className="text-blue-100 text-lg mb-6">
            Physician mortgage loans eliminate the two largest barriers medical professionals face when purchasing homes in California and Washington: student debt penalization and the 20% down payment requirement. Through wholesale channels, physicians access 15-20+ specialized lenders simultaneously — each competing for the business with different rates, terms, and eligibility criteria. The result is a mortgage experience designed around the unique financial profile of medical professionals, not against it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-white mb-1">0-10%</div>
              <div className="text-blue-200 text-sm">Down payment with no PMI on loans up to $2M+</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-white mb-1">15-20+</div>
              <div className="text-blue-200 text-sm">Physician lenders accessed through wholesale broker</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-blue-200 text-sm">Total wholesale lenders in broker network</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 py-3 w-full sm:w-auto">
                <Phone className="w-4 h-4 mr-2" />
                Get Your Physician Loan Quote
              </Button>
            </Link>
            <Link href="tel:9498229662">
              <Button className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 w-full sm:w-auto">
                Call (949) 822-9662
              </Button>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="not-prose my-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/blog/jumbo-loan-requirements-california-washington-2026" className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Jumbo Loan Requirements 2026</h4>
              <p className="text-gray-500 text-xs">CA &amp; WA high-balance mortgage qualifying guide</p>
            </Link>
            <Link href="/blog/self-employed-mortgage-broker-2026" className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Self-Employed Mortgage Broker</h4>
              <p className="text-gray-500 text-xs">How independent contractors and practice owners qualify</p>
            </Link>
            <Link href="/blog/conventional-loans-complete-guide-2026" className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Conventional Loans Guide 2026</h4>
              <p className="text-gray-500 text-xs">Compare physician loans to conventional programs</p>
            </Link>
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-sm text-gray-700">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443<br />
            Licensed in: CA, WA
          </p>
          <p className="text-xs text-gray-600 mt-2 mb-0">
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Not all borrowers will qualify. Physician mortgage loan rates, terms, eligibility requirements, down payment minimums, and student debt treatment policies vary by lender, loan amount, and borrower profile. Professional designation eligibility varies by lender — not all medical professionals qualify with all physician mortgage programs. Information presented is for educational purposes only and does not constitute financial, legal, or tax advice. Loan amount ranges, down payment tiers, and PMI savings calculations are approximate and for illustrative purposes only. Contact a licensed loan officer for personalized guidance based on your specific financial situation. NMLS Consumer Access: <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">www.nmlsconsumeraccess.org</a>.
          </p>
        </div>
      </section>
    </article>
  );
}
