import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Heart, Shield, CheckCircle2, ArrowRight, BookOpen, Users, AlertCircle, DollarSign, Home, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Using a Reverse Mortgage to Fund Long-Term Care [2026] | Mo Abdel',
  description: 'How HECM reverse mortgage proceeds fund in-home care, assisted living, and memory care in California and Washington. Line of credit growth, tenure payments, and Medicaid planning for seniors 62+. NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/reverse-mortgage-long-term-care-planning-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/reverse-mortgage-long-term-care-planning-2026',
      'x-default': 'https://www.mothebroker.com/blog/reverse-mortgage-long-term-care-planning-2026',
    },
  },
  keywords: [
    'reverse mortgage long-term care',
    'HECM fund assisted living',
    'reverse mortgage in-home care',
    'reverse mortgage memory care',
    'reverse mortgage aging in place',
    'HECM line of credit long-term care',
    'reverse mortgage Medicaid planning',
    'fund long-term care with home equity',
    'reverse mortgage care costs California',
    'HECM tenure payments care',
  ],
  openGraph: {
    title: 'Using a Reverse Mortgage to Fund Long-Term Care [2026]',
    description: 'How HECM proceeds pay for in-home care, assisted living, and memory care while preserving financial flexibility for seniors 62+ in California and Washington.',
    url: 'https://www.mothebroker.com/blog/reverse-mortgage-long-term-care-planning-2026',
    type: 'article',
    publishedTime: '2026-02-19',
    authors: ['Mo Abdel'],
  },
  authors: [{ name: 'Mo Abdel' }],
};

const faqData = [
  {
    question: 'Can a reverse mortgage pay for in-home care?',
    answer: 'Yes. HECM reverse mortgage proceeds can be used for any purpose, including hiring in-home caregivers, home health aides, and personal care assistants. The line of credit, tenure payments, or lump sum disbursement options all work for funding in-home care services.',
  },
  {
    question: 'What happens to my reverse mortgage if I move to assisted living?',
    answer: 'If you move to an assisted living facility and the home is no longer your primary residence for more than 12 consecutive months, the reverse mortgage becomes due. The home can be sold to repay the loan, and any remaining equity goes to you or your heirs. Plan with your broker and an attorney before making this decision.',
  },
  {
    question: 'Is reverse mortgage money considered income for Medicaid?',
    answer: 'HECM proceeds are loan advances, not income, so they are generally not counted as income for Medicaid eligibility. However, proceeds retained in a bank account past the end of the calendar month received may count as an asset. Consult an elder law attorney for Medicaid planning strategies specific to your state.',
  },
  {
    question: 'How does the HECM line of credit grow over time?',
    answer: 'The unused portion of a HECM line of credit grows at the same rate as the loan interest rate plus the annual MIP rate, regardless of home value changes. This growth feature means your available credit increases each year, making it a powerful planning tool for future long-term care needs.',
  },
  {
    question: 'Can I use a reverse mortgage to pay for memory care?',
    answer: 'Yes. Reverse mortgage proceeds can fund memory care costs, which range from $7,000 to $12,000 per month in California. However, if the borrower permanently moves to a memory care facility, the loan becomes due within 12 months. Spouses who remain in the home are protected under non-borrowing spouse rules.',
  },
  {
    question: 'What is the age requirement for a reverse mortgage?',
    answer: 'At least one borrower must be 62 years of age or older for a HECM reverse mortgage. The older the borrower, the higher the percentage of home value available as loan proceeds. HUD-approved counseling is also required before closing.',
  },
  {
    question: 'Are reverse mortgage proceeds taxable?',
    answer: 'Reverse mortgage proceeds are generally not considered taxable income because they are loan advances, not earnings. However, every financial situation is different. Consult your tax advisor to understand how HECM proceeds interact with your specific tax circumstances.',
  },
  {
    question: 'Can I get a reverse mortgage if I already have long-term care insurance?',
    answer: 'Yes. A reverse mortgage and long-term care insurance work well together as complementary strategies. LTC insurance can cover a portion of care costs while a HECM line of credit serves as a reserve fund for expenses that exceed policy limits or for care needs that arise after LTC benefits are exhausted.',
  },
  {
    question: 'How much equity do I need for a reverse mortgage?',
    answer: 'You need sufficient equity to pay off any existing mortgage and still receive meaningful proceeds. Most borrowers have at least 50% equity in their home. The exact amount available depends on your age, current interest rates, and your home&apos;s appraised value.',
  },
  {
    question: 'Does a reverse mortgage affect my Social Security or Medicare benefits?',
    answer: 'HECM reverse mortgage proceeds do not affect Social Security retirement benefits or Medicare eligibility because they are classified as loan advances, not income. However, needs-based programs like Medicaid and Supplemental Security Income (SSI) have asset tests that could be impacted. Consult your tax advisor and an attorney for personalized guidance.',
  },
  {
    question: 'Can my spouse stay in the home if I move to a care facility?',
    answer: 'If your spouse is a co-borrower on the HECM, they can remain in the home with full protections. If your spouse is a non-borrowing spouse, FHA protections allow them to stay in the home as long as they maintain taxes, insurance, and property upkeep. Consult an attorney to ensure proper documentation.',
  },
  {
    question: 'Is a reverse mortgage better than selling my home to pay for care?',
    answer: 'A reverse mortgage allows you to access home equity without selling, preserving the option to age in place or return home after rehabilitation. Selling eliminates the ability to live in the home. The right choice depends on your care timeline, family situation, and financial goals. Discuss both options with Mo Abdel to determine the approach that fits your circumstances.',
  },
];

export default function ReverseMortgageLongTermCarePlanning2026() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Using a Reverse Mortgage to Fund Long-Term Care [2026]',
    description: 'How HECM reverse mortgage proceeds fund in-home care, assisted living, and memory care while allowing seniors to age in place or maintain financial flexibility.',
    author: {
      '@type': 'Person',
      name: 'Mo Abdel',
      jobTitle: 'Mortgage Broker & Reverse Mortgage Specialist',
      identifier: 'NMLS #1426884',
      url: 'https://www.mothebroker.com/about',
      worksFor: {
        '@type': 'Organization',
        name: 'Lumin Lending',
        identifier: 'NMLS #2716106',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'MoTheBroker.com',
      url: 'https://www.mothebroker.com',
      logo: 'https://www.mothebroker.com/images/mo-logo-white.webp',
    },
    datePublished: '2026-02-19',
    dateModified: '2026-02-19',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.mothebroker.com/blog/reverse-mortgage-long-term-care-planning-2026',
    },
    keywords: ['reverse mortgage long-term care', 'HECM fund assisted living', 'reverse mortgage in-home care', 'reverse mortgage memory care', 'HECM line of credit growth'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white p-8 md:p-12 rounded-2xl mb-10">
        <nav className="text-sm text-blue-200 mb-4">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/reverse-mortgages" className="hover:text-white">Reverse Mortgages</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Long-Term Care Planning</span>
        </nav>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Using a Reverse Mortgage to Fund Long-Term Care in 2026
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl">
          How HECM proceeds pay for in-home care, assisted living, and memory care — while allowing California and Washington seniors to age in place or maintain financial flexibility.
        </p>
        <p className="text-sm text-blue-200 mb-6">
          By Mo Abdel, NMLS #1426884 | Lumin Lending NMLS #2716106 | Published February 19, 2026
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Free Reverse Mortgage Consultation
          </Link>
          <a
            href="tel:+19498229662"
            className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
          >
            Call (949) 822-9662
          </a>
        </div>
      </div>

      {/* HUD/FHA Disclaimer */}
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-8 not-prose">
        <p className="text-sm text-amber-900">
          <strong>Important Notice:</strong> This material is not provided by, nor was it approved by, the Department of Housing &amp; Urban Development (HUD) or by the Federal Housing Administration (FHA). This is not a government agency publication.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-8 not-prose">
        <p className="text-sm text-blue-900">
          <strong>Professional Disclaimer:</strong> This information is for educational purposes only. Long-term care planning involves legal, tax, and medical considerations. Consult an attorney, your tax advisor, and qualified healthcare professionals for personalized guidance. Mo Abdel is a mortgage professional, not an elder care counselor or financial planner.
        </p>
      </div>

      <section className="prose prose-lg max-w-none">
        {/* Citation Hook */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
          <p className="lead font-semibold text-gray-900 mb-4">
            <strong>According to Mo Abdel, NMLS #1426884:</strong> &quot;Long-term care costs in California and Washington rank among the highest in the nation — $6,000 to $12,000 per month depending on the level of care. For seniors 62 and older sitting on significant home equity, a HECM reverse mortgage is one of the most flexible tools for funding care without selling the family home. As a wholesale broker with access to 200+ lenders, I help clients structure HECM proceeds — whether as a growing line of credit, steady tenure payments, or a lump sum — to match their specific care timeline and financial goals.&quot;
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-3">
            <BookOpen className="w-5 h-5 inline mr-2" />
            On This Page
          </h2>
          <ul className="text-blue-800 space-y-2">
            <li><a href="#ltc-costs" className="hover:underline">Long-Term Care Costs in California &amp; Washington</a></li>
            <li><a href="#hecm-payout-options" className="hover:underline">HECM Payout Options for Funding Care</a></li>
            <li><a href="#line-of-credit" className="hover:underline">Line of Credit Growth for Future Care Needs</a></li>
            <li><a href="#tenure-payments" className="hover:underline">Tenure Payments for Ongoing Care Expenses</a></li>
            <li><a href="#lump-sum" className="hover:underline">Lump Sum for Facility Deposits and Upfront Costs</a></li>
            <li><a href="#hecm-purchase" className="hover:underline">HECM for Purchase: Moving Near Family or Care</a></li>
            <li><a href="#medicaid" className="hover:underline">Medicaid Planning Considerations</a></li>
            <li><a href="#comparison" className="hover:underline">HECM vs LTC Insurance vs Self-Pay vs Medicaid</a></li>
            <li><a href="#paa" className="hover:underline">People Also Ask</a></li>
            <li><a href="#faqs" className="hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#next-steps" className="hover:underline">Next Steps</a></li>
          </ul>
        </nav>

        {/* Why LTC Costs Are a Crisis */}
        <h2 id="ltc-costs" className="flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-blue-600" />
          Long-Term Care Costs in California &amp; Washington (2026)
        </h2>

        <p>
          The financial reality of long-term care is stark. According to the Genworth Cost of Care Survey, the median costs for care services in California and Washington continue to rise year over year. Most families underestimate these expenses until they face them directly.
        </p>

        <p>
          Nearly 70% of adults turning 65 will need some form of long-term care during their lifetime, according to the U.S. Department of Health and Human Services. Medicare does not cover custodial long-term care. For homeowners with substantial equity, a HECM reverse mortgage provides a structured way to fund these costs without liquidating the family home.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Care Type</th>
                <th className="border border-gray-200 px-4 py-2 text-left">California Monthly Cost</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Washington Monthly Cost</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Annual Cost (CA)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">In-Home Care (44 hrs/wk)</td>
                <td className="border border-gray-200 px-4 py-2">$6,000–$7,000</td>
                <td className="border border-gray-200 px-4 py-2">$5,500–$6,500</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">$72,000–$84,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Assisted Living</td>
                <td className="border border-gray-200 px-4 py-2">$5,500–$8,000</td>
                <td className="border border-gray-200 px-4 py-2">$5,000–$7,500</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">$66,000–$96,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Memory Care</td>
                <td className="border border-gray-200 px-4 py-2">$7,000–$12,000</td>
                <td className="border border-gray-200 px-4 py-2">$6,500–$10,000</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">$84,000–$144,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Skilled Nursing Facility</td>
                <td className="border border-gray-200 px-4 py-2">$10,000–$14,000</td>
                <td className="border border-gray-200 px-4 py-2">$9,500–$12,500</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">$120,000–$168,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Home Health Aide (per hour)</td>
                <td className="border border-gray-200 px-4 py-2">$28–$35/hr</td>
                <td className="border border-gray-200 px-4 py-2">$26–$33/hr</td>
                <td className="border border-gray-200 px-4 py-2 text-gray-500">Varies by hours</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">Source: Genworth Cost of Care Survey, 2025-2026 data. Costs vary by city and provider. CA rates reflect statewide medians; premium metro areas (Orange County, Bay Area, LA) trend higher.</p>
        </div>

        <div className="bg-red-50 p-6 rounded-lg border border-red-200 my-6">
          <h4 className="font-bold text-red-800 mt-0 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            The 5-Year Care Cost Reality
          </h4>
          <p className="text-red-900 mb-0">
            A California senior needing assisted living for 5 years faces $330,000 to $480,000 in total costs. Memory care for the same period: $420,000 to $720,000. These figures dwarf most retirement savings. Home equity — which represents 66% of net worth for the typical senior homeowner — is often the only asset large enough to cover these expenses.
          </p>
        </div>

        {/* HECM Payout Options */}
        <h2 id="hecm-payout-options" className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" />
          HECM Payout Options for Funding Long-Term Care
        </h2>

        <p>
          One of the key advantages of a HECM reverse mortgage for long-term care planning is the flexibility of payout options. Borrowers age 62 and older can structure their HECM proceeds to match their care timeline — whether care needs are immediate, anticipated in the near future, or uncertain.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Payout Option</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Best For</th>
                <th className="border border-gray-200 px-4 py-2 text-left">LTC Use Case</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Key Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Line of Credit</td>
                <td className="border border-gray-200 px-4 py-2">Future/uncertain care needs</td>
                <td className="border border-gray-200 px-4 py-2">Draw as care costs arise; unused portion grows</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Compounding growth on unused funds</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Tenure Payments</td>
                <td className="border border-gray-200 px-4 py-2">Ongoing in-home care</td>
                <td className="border border-gray-200 px-4 py-2">Monthly disbursement covers caregiver costs</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Guaranteed payments for life in home</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Term Payments</td>
                <td className="border border-gray-200 px-4 py-2">Defined care period</td>
                <td className="border border-gray-200 px-4 py-2">Higher monthly amount for set number of years</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Larger monthly amount than tenure</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Lump Sum</td>
                <td className="border border-gray-200 px-4 py-2">Immediate facility move</td>
                <td className="border border-gray-200 px-4 py-2">Pay entrance fee or facility deposit upfront</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Immediate access to large amount</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Modified Tenure + LOC</td>
                <td className="border border-gray-200 px-4 py-2">Combination strategy</td>
                <td className="border border-gray-200 px-4 py-2">Monthly income plus reserve for emergencies</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Flexibility + predictability</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Borrowers can also change their payment plan after closing for a small administrative fee, providing additional flexibility as care needs evolve. This adaptability makes the HECM uniquely suited for long-term care planning, where the scope and duration of care is rarely predictable.
        </p>

        {/* Line of Credit Growth */}
        <h2 id="line-of-credit" className="flex items-center gap-2">
          <Clock className="w-6 h-6 text-blue-600" />
          Line of Credit Growth: Your Future Care Reserve
        </h2>

        <p>
          The HECM line of credit is the most powerful feature for seniors planning ahead for potential long-term care needs. Unlike a traditional HELOC — where the lender can freeze or reduce your credit line at any time — a HECM line of credit is guaranteed to grow, and the lender cannot reduce or revoke it.
        </p>

        <p>
          The unused portion of your HECM line of credit grows at the same rate as the loan interest rate plus the annual mortgage insurance premium (MIP) rate. This compounding growth occurs regardless of what happens to your home&apos;s market value.
        </p>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-6">
          <h4 className="font-bold text-green-800 mt-0">Line of Credit Growth Example</h4>
          <p className="text-green-900 mb-2">
            A 67-year-old homeowner establishes a $250,000 HECM line of credit today and draws nothing. If the growth rate averages around 7% (interest rate + MIP), here is how the available credit grows:
          </p>
          <ul className="text-green-900 mb-0">
            <li><strong>Year 0:</strong> $250,000 available</li>
            <li><strong>Year 3:</strong> ~$306,000 available</li>
            <li><strong>Year 5:</strong> ~$350,000 available</li>
            <li><strong>Year 7:</strong> ~$401,000 available</li>
            <li><strong>Year 10:</strong> ~$491,000 available</li>
          </ul>
          <p className="text-sm text-green-700 mt-3 mb-0">
            Note: This is an illustrative example only. Actual growth depends on your specific interest rate and MIP rate. Not all borrowers will qualify. This is not a commitment to lend.
          </p>
        </div>

        <p>
          This growth feature creates a compelling strategy: establish a HECM line of credit while you are healthy and in your 60s, allow it to grow for several years, and draw on significantly larger available funds when care needs arise in your 70s or 80s. You pay no interest on unused credit — interest only accrues on amounts you actually withdraw.
        </p>

        <h3>Why This Matters for Long-Term Care Planning</h3>

        <ul>
          <li><strong>No &quot;use it or lose it&quot; pressure:</strong> Unlike a traditional HELOC with a 10-year draw period, the HECM LOC remains available for life as long as you live in the home</li>
          <li><strong>Guaranteed availability:</strong> The lender cannot freeze, reduce, or cancel your credit line — even during housing market downturns</li>
          <li><strong>Hedges against rising care costs:</strong> Credit line growth can help keep pace with the 3-5% annual increase in long-term care costs</li>
          <li><strong>No monthly payments required:</strong> You maintain full access to your other income and assets for current living expenses</li>
        </ul>

        {/* Tenure Payments */}
        <h2 id="tenure-payments" className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-blue-600" />
          Tenure Payments: Predictable Monthly Income for Ongoing Care
        </h2>

        <p>
          For seniors who already need regular in-home care, the HECM tenure payment option provides a guaranteed monthly disbursement for as long as you live in the home as your primary residence. This is particularly effective for covering the cost of a home health aide, personal care assistant, or part-time nursing services.
        </p>

        <h3>How Tenure Payments Fund In-Home Care</h3>

        <p>
          Tenure payments work like a private pension funded by your home equity. The monthly amount is calculated based on your age, your home&apos;s appraised value, and current interest rates. Older borrowers with higher home values receive larger monthly payments.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h4 className="font-bold text-blue-800 mt-0">Tenure Payment Scenario</h4>
          <p className="text-blue-900 mb-2">
            A 75-year-old California homeowner with a $900,000 home (no existing mortgage) might receive tenure payments sufficient to cover 20-30 hours per week of in-home care services. This allows the homeowner to age in place with professional assistance — funded entirely by home equity — with no required monthly principal and interest payments on the reverse mortgage.
          </p>
          <p className="text-sm text-blue-700 mb-0">
            Actual amounts vary based on individual circumstances. Consult with Mo Abdel for a personalized estimate. Not all borrowers will qualify.
          </p>
        </div>

        <h3>Tenure vs Term Payments</h3>

        <ul>
          <li><strong>Tenure payments</strong> continue for as long as you live in the home — even if you live to 100 and the total payments exceed your home&apos;s value (the loan is non-recourse and FHA-insured)</li>
          <li><strong>Term payments</strong> provide a higher monthly amount but only for a fixed period (e.g., 5, 10, or 15 years). This option works well if you have a defined care need with an anticipated duration</li>
          <li>Both options can be combined with a line of credit in a &quot;modified&quot; plan for maximum flexibility</li>
        </ul>

        {/* Lump Sum */}
        <h2 id="lump-sum" className="flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-blue-600" />
          Lump Sum for Facility Deposits and Upfront Care Costs
        </h2>

        <p>
          Some care situations require a significant upfront payment. Continuing Care Retirement Communities (CCRCs) charge entrance fees ranging from $100,000 to $500,000 or more. Assisted living and memory care facilities may require first and last month deposits, community fees, and setup costs.
        </p>

        <p>
          The HECM lump sum option (available with the fixed-rate HECM) provides immediate access to a substantial portion of your home equity at closing. This makes it possible to fund facility entrance fees, pay off an existing mortgage, and cover moving-related expenses in a single transaction.
        </p>

        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 my-6">
          <h4 className="font-bold text-yellow-800 mt-0 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Important: The 12-Month Primary Residence Rule
          </h4>
          <p className="text-yellow-900 mb-0">
            If the borrower moves to a care facility and the home ceases to be the primary residence for more than 12 consecutive months, the HECM becomes due and payable. This rule is critical for long-term care planning. If a permanent facility move is anticipated, coordinate the timing carefully with your mortgage broker and an attorney. A non-borrowing spouse may be eligible to remain in the home under FHA protections.
          </p>
        </div>

        <h3>Strategic Use of Lump Sum for Care</h3>

        <ul>
          <li><strong>CCRC entrance fees:</strong> Fund the entrance fee while keeping other assets liquid for monthly care costs</li>
          <li><strong>Home modifications:</strong> Install wheelchair ramps, stair lifts, bathroom grab bars, and accessible showers to enable aging in place</li>
          <li><strong>Pay off existing mortgage:</strong> Eliminate the current mortgage payment to free up monthly income for care expenses</li>
          <li><strong>Bridge funding:</strong> Cover care costs during the gap between when care begins and when long-term care insurance benefits start (many policies have 90-day elimination periods)</li>
        </ul>

        {/* HECM for Purchase */}
        <h2 id="hecm-purchase" className="flex items-center gap-2">
          <Home className="w-6 h-6 text-blue-600" />
          HECM for Purchase: Moving Closer to Family or Care Providers
        </h2>

        <p>
          The HECM for Purchase program allows seniors 62 and older to buy a new primary residence using a reverse mortgage. This option is ideal for seniors who need to relocate — whether to move closer to family members who provide care, to transition to a single-story home that accommodates mobility limitations, or to relocate to a community with better access to medical services.
        </p>

        <h3>How HECM for Purchase Works</h3>

        <ul>
          <li><strong>Sell current home</strong> and use proceeds as the down payment on a new home</li>
          <li><strong>The HECM covers the remaining purchase price</strong> with no required monthly principal and interest payments</li>
          <li><strong>Down payment typically ranges from 35-60%</strong> of the purchase price, depending on age and interest rates</li>
          <li><strong>Preserves remaining sale proceeds</strong> as a cash reserve for care costs, living expenses, or investments</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
          <h4 className="font-bold text-gray-800 mt-0">HECM for Purchase Scenario</h4>
          <p className="text-gray-700 mb-0">
            A 72-year-old couple in a $1.2 million Orange County home sells and purchases a $700,000 single-story home near their daughter in Sacramento. They use approximately $400,000 as the down payment (funded by sale proceeds), and the HECM covers the $300,000 balance — with no required monthly principal and interest payments. The remaining ~$750,000 in sale proceeds (after closing costs and down payment) provides a substantial care reserve. This strategy repositions both housing and finances in a single transaction.
          </p>
        </div>

        <p>
          For a detailed breakdown of the HECM for Purchase program, see our <Link href="/blog/hecm-for-purchase-2026">complete HECM for Purchase guide</Link>.
        </p>

        {/* Medicaid Planning */}
        <h2 id="medicaid" className="flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-600" />
          Medicaid Planning Considerations with a Reverse Mortgage
        </h2>

        <p>
          Medicaid is the primary government program that pays for long-term care for individuals who meet strict income and asset limits. Understanding how reverse mortgage proceeds interact with Medicaid eligibility is essential for seniors who may eventually need Medicaid-funded care.
        </p>

        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 my-6">
          <h4 className="font-bold text-purple-800 mt-0 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Critical Legal Note
          </h4>
          <p className="text-purple-900 mb-0">
            Medicaid rules are complex, vary by state, and change frequently. The information below is general guidance only. You must consult an elder law attorney licensed in California or Washington before making any decisions that affect Medicaid eligibility. Mo Abdel is a mortgage professional and does not provide legal or Medicaid planning advice.
          </p>
        </div>

        <h3>Key Medicaid Interactions with HECM Proceeds</h3>

        <ul>
          <li><strong>HECM proceeds are loan advances, not income:</strong> Reverse mortgage disbursements are generally not counted as income for Medicaid eligibility purposes</li>
          <li><strong>Asset rules apply:</strong> HECM proceeds that remain in a bank account at the end of the calendar month they are received may be counted as an asset for Medicaid purposes. Spending or converting proceeds within the same month avoids this issue</li>
          <li><strong>The home is typically an exempt asset:</strong> For Medicaid purposes, your primary residence (up to a certain equity limit, which varies by state) is generally exempt from the asset test — whether or not you have a reverse mortgage</li>
          <li><strong>Medicaid estate recovery:</strong> After the Medicaid recipient passes away, the state may seek repayment from the estate, including the home. A reverse mortgage balance may reduce the equity available for estate recovery</li>
          <li><strong>Look-back period:</strong> Medicaid has a 5-year look-back period for asset transfers. HECM proceeds that are given away or transferred during this period could create a penalty period for Medicaid eligibility</li>
        </ul>

        <h3>Coordination Strategies</h3>

        <p>
          Some elder law attorneys recommend the following general approaches (consult an attorney for advice specific to your situation):
        </p>

        <ul>
          <li><strong>Spend-down strategy:</strong> Use HECM proceeds for legitimate care expenses within the same month they are received to avoid asset accumulation</li>
          <li><strong>Line of credit establishment:</strong> Set up the HECM LOC early, as the credit line itself is not typically counted as an asset — only withdrawn funds held in accounts count</li>
          <li><strong>Home modifications:</strong> Use HECM proceeds to modify the home for accessibility, which improves the exempt asset (the home) and reduces countable assets (cash)</li>
          <li><strong>Irrevocable trust coordination:</strong> In some cases, trusts and HECM proceeds can be coordinated to preserve assets while maintaining Medicaid eligibility — this requires experienced legal counsel</li>
        </ul>

        {/* Data Hub: Comparison Table */}
        <h2 id="comparison" className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" />
          HECM vs Long-Term Care Insurance vs Self-Pay vs Medicaid
        </h2>

        <p>
          Seniors and their families face four primary options for funding long-term care. Each has distinct advantages, limitations, and eligibility requirements. The table below provides a side-by-side comparison to help clarify which approach — or combination of approaches — fits your situation.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Factor</th>
                <th className="border border-gray-200 px-4 py-2 text-left">HECM Reverse Mortgage</th>
                <th className="border border-gray-200 px-4 py-2 text-left">LTC Insurance</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Self-Pay (Savings)</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Medicaid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Eligibility</td>
                <td className="border border-gray-200 px-4 py-2">Age 62+, sufficient equity, HUD counseling</td>
                <td className="border border-gray-200 px-4 py-2">Must buy while healthy (age 50-65 ideal)</td>
                <td className="border border-gray-200 px-4 py-2">Anyone with savings</td>
                <td className="border border-gray-200 px-4 py-2">Strict income/asset limits</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Upfront Cost</td>
                <td className="border border-gray-200 px-4 py-2">Closing costs + MIP (can be financed)</td>
                <td className="border border-gray-200 px-4 py-2">Annual premiums ($2,000-$8,000+/yr)</td>
                <td className="border border-gray-200 px-4 py-2">No upfront cost</td>
                <td className="border border-gray-200 px-4 py-2">Must spend down assets first</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Flexibility</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">High — any purpose, multiple payout options</td>
                <td className="border border-gray-200 px-4 py-2">Moderate — covered care types defined by policy</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">High — spend on anything</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Low — limited to approved providers</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Risk</td>
                <td className="border border-gray-200 px-4 py-2">Reduces home equity over time</td>
                <td className="border border-gray-200 px-4 py-2">May never use; premiums increase</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Depletes retirement savings</td>
                <td className="border border-gray-200 px-4 py-2">Limited provider choice</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Impact on Estate</td>
                <td className="border border-gray-200 px-4 py-2">Reduces equity passed to heirs</td>
                <td className="border border-gray-200 px-4 py-2">Preserves assets for heirs</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Significantly reduces inheritance</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Estate recovery by state</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Best Suited For</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Equity-rich, cash-poor homeowners</td>
                <td className="border border-gray-200 px-4 py-2">Those who planned ahead</td>
                <td className="border border-gray-200 px-4 py-2">High-net-worth individuals</td>
                <td className="border border-gray-200 px-4 py-2">Low-income/low-asset individuals</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Availability in 2026</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Widely available</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Fewer carriers; many exited market</td>
                <td className="border border-gray-200 px-4 py-2">Always available</td>
                <td className="border border-gray-200 px-4 py-2">Available (with restrictions)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h4 className="font-bold text-blue-800 mt-0 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            The Combination Approach
          </h4>
          <p className="text-blue-900 mb-0">
            Many financial advisors recommend combining strategies. A common approach: use long-term care insurance for the first 2-3 years of care (if available), then transition to HECM proceeds for care that extends beyond the insurance benefit period. Self-pay covers incidental expenses. This layered approach protects savings while leveraging home equity only when needed. Consult your tax advisor and an attorney to evaluate the right combination for your circumstances.
          </p>
        </div>

        {/* People Also Ask */}
        <h2 id="paa" className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" />
          People Also Ask: Reverse Mortgage &amp; Long-Term Care
        </h2>

        <div className="space-y-6 my-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mt-0">Can you use a reverse mortgage to pay for a nursing home?</h3>
            <p className="mb-0">
              <strong>Yes, HECM proceeds fund any type of care including nursing home expenses.</strong> However, if the borrower permanently moves to a nursing home and the property is no longer their primary residence for more than 12 months, the reverse mortgage becomes due. A co-borrowing spouse or eligible non-borrowing spouse may continue living in the home under FHA protections. Consult an attorney before making facility placement decisions.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mt-0">How much does long-term care cost per month in California?</h3>
            <p className="mb-0">
              <strong>In-home care costs $6,000-$7,000 monthly; assisted living $5,500-$8,000; memory care $7,000-$12,000.</strong> These are statewide California medians from the Genworth Cost of Care Survey. Premium areas like Orange County, the Bay Area, and coastal Los Angeles trend 10-20% higher than statewide averages. Costs increase 3-5% annually.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mt-0">Does Medicare pay for long-term care?</h3>
            <p className="mb-0">
              <strong>Medicare does not cover custodial long-term care such as assisted living or in-home personal care.</strong> Medicare covers limited skilled nursing facility stays (up to 100 days following a qualifying hospital stay) and home health services under specific conditions. The gap between what Medicare covers and what long-term care actually costs is one reason seniors turn to home equity via HECM reverse mortgages.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mt-0">Is a reverse mortgage line of credit better than a HELOC for care planning?</h3>
            <p className="mb-0">
              <strong>For seniors on fixed income, the HECM line of credit offers significant advantages over a HELOC.</strong> The HECM LOC grows over time, cannot be frozen by the lender, and requires no monthly payments. A traditional HELOC requires monthly payments, can be frozen during market downturns, and must be repaid within the draw and repayment period. For care funding, the HECM LOC provides more certainty and lower cash flow burden.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mt-0">What is the reverse mortgage line of credit growth rate?</h3>
            <p className="mb-0">
              <strong>The unused portion grows at the current interest rate plus the annual MIP rate.</strong> This compounding growth is guaranteed regardless of home value changes. Over 10 years, a credit line can grow substantially — providing significantly more purchasing power for future care needs than the original amount established at closing. The growth feature is unique to the HECM product and unavailable with any other home equity product.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mt-0">Can I get a reverse mortgage if my spouse is under 62?</h3>
            <p className="mb-0">
              <strong>Yes, but only the spouse age 62+ can be the borrower; the younger spouse is a non-borrowing spouse.</strong> FHA protections allow a non-borrowing spouse to remain in the home after the borrowing spouse passes away or permanently moves to a care facility. However, the non-borrowing spouse cannot receive additional HECM disbursements. Consult an attorney to understand the protections and limitations for non-borrowing spouses in your state.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mt-0">Are reverse mortgage proceeds considered income for tax purposes?</h3>
            <p className="mb-0">
              <strong>Reverse mortgage proceeds are generally not considered taxable income because they are loan advances.</strong> However, interest on the reverse mortgage is not deductible until the loan is paid off. Consult your tax advisor to understand how HECM proceeds interact with your specific tax situation, including any implications for state income taxes in California or Washington.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 id="faqs" className="flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-blue-600" />
          Frequently Asked Questions: Reverse Mortgage for Long-Term Care
        </h2>

        <div className="space-y-6 my-8">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-gray-900 mt-0 mb-2">{faq.question}</h3>
              <p className="text-gray-700 mb-0">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Expert Summary */}
        <h2 id="next-steps" className="flex items-center gap-2">
          <ArrowRight className="w-6 h-6 text-blue-600" />
          Expert Summary: Matching HECM Strategy to Your Care Plan
        </h2>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
          <p className="text-gray-900 mb-4">
            <strong>Mo Abdel&apos;s perspective:</strong> &quot;Every long-term care situation is different. A 65-year-old planning ahead for potential future needs should consider the HECM line of credit — establish it now, let it grow, and draw on it later when care costs arise. A 78-year-old who needs in-home care today benefits most from tenure payments that provide a reliable monthly income stream. And for families facing an immediate move to a memory care facility, the lump sum option covers entrance fees and deposits without draining retirement savings.&quot;
          </p>
          <p className="text-gray-900 mb-0">
            &quot;As a wholesale broker with access to 200+ lenders, I compare HECM terms across multiple providers to find the structure that fits your care timeline and financial goals. The initial consultation is free, and I work with families across California and Washington.&quot;
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-bold text-blue-900 mt-0">Planning Ahead</h4>
            <p className="text-sm text-blue-800 mb-0">Establish HECM LOC now. Let it grow. Draw later when care needs arise.</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg border border-green-200 text-center">
            <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-bold text-green-900 mt-0">Current Care Needs</h4>
            <p className="text-sm text-green-800 mb-0">Tenure payments fund ongoing in-home care with predictable monthly income.</p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 text-center">
            <Home className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h4 className="font-bold text-purple-900 mt-0">Relocating for Care</h4>
            <p className="text-sm text-purple-800 mb-0">HECM for Purchase moves you near family or care providers — no monthly P&amp;I.</p>
          </div>
        </div>

        {/* Related Posts */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
          <h3 className="text-xl font-bold text-gray-900 mt-0 mb-4">Related Reverse Mortgage Guides</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <Link
              href="/blog/reverse-mortgage-complete-guide-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">Complete Reverse Mortgage Guide <ArrowRight className="w-4 h-4 inline" /></span>
              <p className="text-sm text-gray-600 mt-1">Everything you need to know about HECM loans</p>
            </Link>
            <Link
              href="/blog/hecm-for-purchase-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">HECM for Purchase Guide <ArrowRight className="w-4 h-4 inline" /></span>
              <p className="text-sm text-gray-600 mt-1">Buy a new home with a reverse mortgage</p>
            </Link>
            <Link
              href="/blog/hecm-pros-cons-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">HECM Pros and Cons <ArrowRight className="w-4 h-4 inline" /></span>
              <p className="text-sm text-gray-600 mt-1">Honest analysis of benefits and considerations</p>
            </Link>
            <Link
              href="/blog/reverse-mortgage-vs-downsizing-seniors-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">Reverse Mortgage vs Downsizing <ArrowRight className="w-4 h-4 inline" /></span>
              <p className="text-sm text-gray-600 mt-1">Compare staying in place vs selling and moving</p>
            </Link>
            <Link
              href="/blog/reverse-mortgage-inheritance-heirs-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">Reverse Mortgage &amp; Inheritance <ArrowRight className="w-4 h-4 inline" /></span>
              <p className="text-sm text-gray-600 mt-1">What heirs need to know about HECM loans</p>
            </Link>
            <Link
              href="/blog/hecm-vs-heloc-seniors-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">HECM vs HELOC for Seniors <ArrowRight className="w-4 h-4 inline" /></span>
              <p className="text-sm text-gray-600 mt-1">Which home equity option fits your retirement?</p>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-900 text-white p-8 rounded-xl mt-12 not-prose">
          <h3 className="text-2xl font-bold mb-4">Planning for Long-Term Care? Let&apos;s Talk About Your Options.</h3>
          <p className="text-slate-200 mb-6">
            Every care situation is unique. I&apos;ll provide a free, no-obligation analysis of how a HECM reverse mortgage could fit into your long-term care plan — including estimated proceeds, payout options, and how the line of credit growth feature works for your specific home value and age. Serving California and Washington.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+19498229662"
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              Call (949) 822-9662
            </a>
          </div>
        </div>

      </section>

      {/* Author Bio */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
            MA
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Mo Abdel</h4>
            <p className="text-gray-600 text-sm">NMLS #1426884 | Reverse Mortgage &amp; Long-Term Care Planning Specialist</p>
            <p className="text-gray-600 text-sm mt-2">
              Mo Abdel is a licensed mortgage broker specializing in HECM reverse mortgages for seniors planning for long-term care. With access to 200+ wholesale lenders, Mo helps California and Washington homeowners structure reverse mortgage proceeds to fund in-home care, assisted living, memory care, and aging-in-place strategies.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
          <p className="font-semibold mb-2">Important Disclosures</p>
          <p>
            Mo Abdel | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443<br />
            Licensed in California and Washington
          </p>
          <p className="mt-2">
            Equal Housing Lender. This material is not from HUD or FHA and has not been approved by HUD or a government agency. This is not a commitment to lend. Not all borrowers will qualify. All loans are subject to credit approval and property appraisal. Borrowers must be 62 years of age or older and must meet HUD-approved counseling requirements. Reverse mortgage loan proceeds are generally not considered taxable income (consult your tax advisor). This material is for informational and educational purposes only. Consult an attorney for legal advice regarding Medicaid planning, estate planning, and elder law matters. Consult your tax advisor regarding the tax implications of reverse mortgage proceeds.
          </p>
          <p className="mt-2">
            Long-term care cost data sourced from the Genworth Cost of Care Survey (2025-2026). Actual costs vary by location, provider, and level of care. HECM line of credit growth illustrations are hypothetical examples for educational purposes and do not represent guaranteed outcomes. The HECM line of credit growth rate is based on the current interest rate plus the annual MIP rate and is subject to change.
          </p>
        </div>
      </footer>
    </article>
  );
}
