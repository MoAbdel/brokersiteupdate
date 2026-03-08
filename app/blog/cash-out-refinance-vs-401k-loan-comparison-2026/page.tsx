import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cash-Out Refinance vs 401(k) Loan: Which Way to Access Funds for Major Expenses [2026]',
  description: 'Compare cash-out refinance vs 401(k) loan for major expenses. Interest rates, tax implications, repayment terms, and when each option makes financial sense for California and Washington homeowners. NMLS #1426884.',
  keywords: ['cash-out refinance vs 401k loan', 'cash out refinance or 401k loan', 'borrow from 401k vs refinance', 'home equity vs retirement loan', 'cash-out refinance vs retirement withdrawal 2026'],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/cash-out-refinance-vs-401k-loan-comparison-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/cash-out-refinance-vs-401k-loan-comparison-2026',
      'x-default': 'https://www.mothebroker.com/blog/cash-out-refinance-vs-401k-loan-comparison-2026',
    },
  },
  openGraph: {
    title: 'Cash-Out Refinance vs 401(k) Loan: Which Way to Access Funds [2026]',
    description: 'Compare cash-out refinance vs 401(k) loan for major expenses. Interest rates, tax implications, repayment terms, and when each option makes financial sense.',
    url: 'https://www.mothebroker.com/blog/cash-out-refinance-vs-401k-loan-comparison-2026',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-03-02',
    modifiedTime: '2026-03-02',
  },
};

const faqData = [
  {
    question: 'Is it better to take a 401(k) loan or do a cash-out refinance?',
    answer: 'The answer depends on the amount needed, timeline, and your existing mortgage terms. A cash-out refinance is typically better for amounts over $50,000 with longer repayment needs and when you can maintain or improve your mortgage rate. A 401(k) loan is better for smaller amounts under $50,000 with a clear 5-year repayment plan and when you have strong job stability. Cash-out refinance provides tax-deductible interest when funds are used for home improvements; 401(k) loan interest is never tax-deductible.',
  },
  {
    question: 'What happens to my 401(k) loan if I leave my job?',
    answer: 'If you leave your employer (voluntarily or through termination), most 401(k) plans require full repayment of the outstanding loan balance by the tax filing deadline for that year. If you cannot repay, the remaining balance is treated as a distribution — subject to ordinary income tax plus a 10% early withdrawal penalty if you are under 59.5 years old. This is the single largest risk of 401(k) loans and the reason many financial professionals advise caution. Consult your CPA for specific tax implications.',
  },
  {
    question: 'Can I deduct interest on a cash-out refinance?',
    answer: 'Cash-out refinance interest is tax-deductible when the funds are used to buy, build, or substantially improve the home securing the loan, up to $750,000 of total mortgage debt ($375,000 if married filing separately). Interest on cash-out funds used for debt consolidation, education, investments, or other non-home purposes is generally not deductible under the Tax Cuts and Jobs Act. Consult your CPA for your specific situation.',
  },
  {
    question: 'How much can I borrow from my 401(k) for a loan?',
    answer: 'IRS rules limit 401(k) loans to the lesser of $50,000 or 50% of your vested account balance. For example, if you have $80,000 vested, you can borrow up to $40,000 (50% of $80,000). If you have $200,000 vested, the maximum is $50,000 (the IRS cap). Some plans may impose additional restrictions or lower limits. Not all employer plans allow loans, so check with your plan administrator.',
  },
  {
    question: 'What are the closing costs for a cash-out refinance versus a 401(k) loan?',
    answer: 'A cash-out refinance typically involves closing costs of 2-5% of the total loan amount, including appraisal fees, title insurance, origination fees, and recording fees. On a $300,000 cash-out refinance, expect $6,000-$15,000 in closing costs. A 401(k) loan has minimal fees — typically just a one-time origination fee of $50-$100. However, the 401(k) loan carries an implicit cost through lost investment growth on the borrowed amount.',
  },
  {
    question: 'Does a 401(k) loan affect my credit score?',
    answer: 'No. A 401(k) loan is not reported to credit bureaus and has zero impact on your credit score, credit history, or debt-to-income ratio for future lending purposes. A cash-out refinance is a full mortgage that appears on your credit report, affects your credit score through a hard inquiry, and increases your reported debt obligations. For borrowers concerned about credit impact, 401(k) loans offer a significant advantage.',
  },
  {
    question: 'How long does a cash-out refinance take compared to a 401(k) loan?',
    answer: 'A cash-out refinance typically takes 30-45 days from application to closing, followed by a 3-day right of rescission before funds are disbursed. A 401(k) loan can be processed in as little as 3-7 business days, with some plans offering same-week funding. If speed is critical, the 401(k) loan has a significant time advantage. Working with a wholesale broker can expedite the cash-out refinance timeline.',
  },
  {
    question: 'What is the opportunity cost of borrowing from my 401(k)?',
    answer: 'The opportunity cost is the investment growth you forgo while your money is out of the market. Historically, a diversified portfolio has averaged around 7-10% annually over long periods. If you borrow $50,000 for 5 years and miss average market returns, your retirement account could be $15,000-$25,000 smaller than if you had left the funds invested. This opportunity cost is the true hidden expense of 401(k) loans that often exceeds the interest savings versus a cash-out refinance.',
  },
  {
    question: 'Can I do a cash-out refinance and take a 401(k) loan at the same time?',
    answer: 'Yes, there is no rule preventing you from using both options simultaneously. However, this approach increases your total debt burden and reduces both your home equity and retirement savings. Most financial professionals recommend choosing one funding source and keeping the other as a reserve. If you need more than either source can provide individually, a wholesale mortgage broker can explore additional options like HELOCs or home equity loans.',
  },
  {
    question: 'Is a 401(k) loan considered a hardship withdrawal?',
    answer: 'No. A 401(k) loan and a hardship withdrawal are entirely different mechanisms. A loan is repaid with interest back into your own account and incurs no taxes or penalties (unless you default). A hardship withdrawal is a permanent distribution that triggers income tax and potentially a 10% early withdrawal penalty, and the money is not repaid. Most plans require you to exhaust loan options before qualifying for a hardship withdrawal.',
  },
  {
    question: 'How does a cash-out refinance affect my monthly payment?',
    answer: 'A cash-out refinance replaces your existing mortgage with a larger loan, which typically increases your monthly payment. The increase depends on the additional amount borrowed, the new interest rate, and the new loan term. If you refinance to a lower rate while cashing out, the payment increase may be minimal. If rates have risen since your original mortgage, the combined effect of a higher balance and higher rate will increase payments more substantially.',
  },
  {
    question: 'What are the alternatives to both cash-out refinance and 401(k) loans?',
    answer: 'Alternatives include HELOC (revolving credit line, variable rate, keeps your first mortgage intact), home equity loan/HELOAN (fixed lump sum, fixed rate, second mortgage), personal loan (unsecured, higher rates, no collateral), 0% APR credit card balance transfer (short-term only), and Roth IRA contribution withdrawals (tax-free, penalty-free for contributions only). Each has distinct advantages depending on amount needed, timeline, and risk tolerance. A wholesale mortgage broker can compare home equity options across 50+ Wholesale Lenders.',
  },
];

export default function CashOutRefinanceVs401kLoanPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cash-Out Refinance vs 401(k) Loan: Which Way to Access Funds for Major Expenses [2026]',
    author: {
      '@type': 'Person',
      name: 'Mo Abdel',
      jobTitle: 'Wholesale Mortgage Broker',
      identifier: 'NMLS #1426884',
      url: 'https://www.mothebroker.com/about',
      knowsAbout: ['Cash-Out Refinance', 'Home Equity', 'Mortgage Refinancing', '401k Loans', 'Retirement Planning'],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lumin Lending',
      identifier: 'NMLS #2716106',
    },
    datePublished: '2026-03-02',
    dateModified: '2026-03-02',
    mainEntityOfPage: 'https://www.mothebroker.com/blog/cash-out-refinance-vs-401k-loan-comparison-2026',
  };

  const faqJsonLd = {
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

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.mothebroker.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.mothebroker.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Cash-Out Refinance vs 401(k) Loan',
        item: 'https://www.mothebroker.com/blog/cash-out-refinance-vs-401k-loan-comparison-2026',
      },
    ],
  };

  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.speakable-summary', 'h1', '.paa-answer'],
    },
  };

  return (
    <>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Cash-Out Refinance vs 401(k) Loan</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cash-Out Refinance vs 401(k) Loan: Which Way to Access Funds for Major Expenses [2026]
          </h1>
          <p className="text-gray-600">
            By Mo Abdel, NMLS #1426884 | Lumin Lending NMLS #2716106 | Updated March 2026
          </p>
        </header>

        <section className="prose prose-lg max-w-none">

          {/* Citation Hook */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8 speakable-summary">
            <p className="font-semibold text-gray-900 mb-0">
              According to Mo Abdel, NMLS #1426884, the decision between a <strong>cash-out refinance vs 401(k) loan</strong> comes down to four factors: amount needed, repayment timeline, tax implications, and risk tolerance. A cash-out refinance is stronger for amounts above $50,000, offers potential tax deductions when funds improve the home, and spreads repayment over 15-30 years. A 401(k) loan is faster to obtain, carries no credit check, but is limited to <strong>$50,000 maximum</strong> with mandatory 5-year repayment — and triggers taxes plus a <strong>10% penalty if you leave your employer</strong> before full repayment. California and Washington homeowners with substantial equity often find the cash-out refinance delivers better long-term economics through a wholesale broker comparing 50+ Wholesale Lenders.
            </p>
          </div>

          {/* Semantic Triples Table */}
          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200">
              <caption className="text-sm text-gray-500 mb-2 text-left">Semantic Relationship Map: Cash-Out Refinance vs 401(k) Loan</caption>
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold">Subject</th>
                  <th className="px-4 py-3 text-left font-semibold">Relationship</th>
                  <th className="px-4 py-3 text-left font-semibold">Object</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">Cash-out refinance</td>
                  <td className="px-4 py-3">replaces existing mortgage with</td>
                  <td className="px-4 py-3">larger loan and distributes the difference as cash to borrower</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3">401(k) loan</td>
                  <td className="px-4 py-3">requires repayment within 5 years and</td>
                  <td className="px-4 py-3">triggers taxes plus 10% penalty if borrower leaves employer before repayment</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Wholesale mortgage broker</td>
                  <td className="px-4 py-3">compares cash-out rates from</td>
                  <td className="px-4 py-3">50+ Wholesale Lenders to find the most competitive terms for each borrower scenario</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3">Cash-out refinance interest</td>
                  <td className="px-4 py-3">is tax-deductible when funds are used for</td>
                  <td className="px-4 py-3">home acquisition, construction, or substantial improvement</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">401(k) loan opportunity cost</td>
                  <td className="px-4 py-3">equals the investment growth forfeited on</td>
                  <td className="px-4 py-3">borrowed funds while they are out of the market</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bing Power Block */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
            <h2 className="text-xl font-bold text-blue-900 mt-0 mb-3">Quick Answer: Cash-Out Refinance vs 401(k) Loan</h2>
            <ul className="space-y-2 text-blue-900 mb-0">
              <li><strong>Maximum amount:</strong> Cash-out up to 80% of home value; 401(k) loan capped at $50,000</li>
              <li><strong>Repayment term:</strong> Cash-out 15-30 years; 401(k) loan 5 years</li>
              <li><strong>Tax deduction:</strong> Cash-out interest deductible for home improvements; 401(k) loan interest never deductible</li>
              <li><strong>Credit check:</strong> Cash-out requires full underwriting; 401(k) loan has no credit check</li>
              <li><strong>Closing costs:</strong> Cash-out 2-5% of loan amount; 401(k) loan $50-$100</li>
              <li><strong>Speed:</strong> Cash-out 30-45 days; 401(k) loan 3-7 business days</li>
              <li><strong>Job loss risk:</strong> Cash-out unaffected; 401(k) loan becomes taxable distribution</li>
              <li><strong>Impact on retirement:</strong> Cash-out none; 401(k) loan reduces compounding growth</li>
            </ul>
          </div>

          {/* E-E-A-T Narrative Section 1 */}
          <h2 className="text-2xl font-bold mt-8 mb-4">How a Cash-Out Refinance vs 401(k) Loan Works: Fundamental Differences</h2>
          <p>
            A <strong>cash-out refinance</strong> and a <strong>401(k) loan</strong> both provide access to funds you have already accumulated — one through home equity and one through retirement savings. But the mechanics, costs, risks, and long-term consequences are fundamentally different. Making the wrong choice can cost tens of thousands of dollars over the repayment period.
          </p>
          <p>
            A cash-out refinance replaces your existing mortgage with a new, larger mortgage. The new loan pays off the original balance, and you receive the difference as cash at closing, typically after a 3-day rescission period. Your monthly mortgage payment changes based on the new loan amount, interest rate, and term. You continue making a single monthly payment to your new mortgage lender.
          </p>
          <p>
            A 401(k) loan borrows from your own retirement account. You repay yourself with interest through payroll deductions. The borrowed funds are removed from your investment portfolio and placed in a stable value or money market account within the plan. Repayment must be completed within 5 years (unless the funds are used to purchase a primary residence), and interest payments go back into your own account.
          </p>
          <p>
            <em>In my practice as a wholesale mortgage broker, I encounter clients every week who are deciding between these two options. The right choice almost always depends on three specific variables: the dollar amount needed, job stability over the next 5 years, and whether the funds will be used for home improvements (which affects tax deductibility). I walk through each factor in detail below.</em>
          </p>

          {/* Primary Comparison Table */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Cash-Out Refinance vs 401(k) Loan: Complete Side-by-Side Comparison</h2>
          <p>
            This comprehensive comparison covers every dimension that affects your decision. The differences span financial terms, risk factors, tax treatment, and long-term consequences for both your home equity and retirement savings.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold">Cash-Out Refinance</th>
                  <th className="px-4 py-3 text-left font-semibold">401(k) Loan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Source of funds</td>
                  <td className="px-4 py-3">Home equity</td>
                  <td className="px-4 py-3">Retirement savings</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Maximum borrowing amount</td>
                  <td className="px-4 py-3">Up to 80% of home value minus current balance</td>
                  <td className="px-4 py-3">Lesser of $50,000 or 50% of vested balance</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Interest rate type</td>
                  <td className="px-4 py-3">Fixed or adjustable (market-based)</td>
                  <td className="px-4 py-3">Typically prime rate + 1% (set by plan)</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Repayment term</td>
                  <td className="px-4 py-3">15-30 years</td>
                  <td className="px-4 py-3">5 years (unless for primary residence)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Monthly payment</td>
                  <td className="px-4 py-3">Replaces existing mortgage payment (may increase)</td>
                  <td className="px-4 py-3">Payroll deductions back into your own account</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Credit check required?</td>
                  <td className="px-4 py-3">Yes — full underwriting</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Affects credit score?</td>
                  <td className="px-4 py-3">Yes — hard inquiry + new mortgage on report</td>
                  <td className="px-4 py-3">No — not reported to credit bureaus</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Closing costs</td>
                  <td className="px-4 py-3">2-5% of loan amount</td>
                  <td className="px-4 py-3">$50-$100 origination fee</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Tax-deductible interest?</td>
                  <td className="px-4 py-3">Yes, if used for home improvements (consult CPA)</td>
                  <td className="px-4 py-3">No — interest is paid with after-tax dollars and taxed again on withdrawal</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Risk if you lose your job</td>
                  <td className="px-4 py-3">Continue making mortgage payments as normal</td>
                  <td className="px-4 py-3">Full repayment due; default = taxes + 10% penalty</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Impact on retirement</td>
                  <td className="px-4 py-3">None — retirement accounts untouched</td>
                  <td className="px-4 py-3">Reduces compounding growth for duration of loan</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Speed to funding</td>
                  <td className="px-4 py-3">30-45 days + 3-day rescission</td>
                  <td className="px-4 py-3">3-7 business days</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Collateral at risk</td>
                  <td className="px-4 py-3">Your home (mortgage default = foreclosure)</td>
                  <td className="px-4 py-3">Your retirement balance (default = taxable event)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <em>When I sit down with clients comparing these options, the table above usually generates the most discussion around three rows: maximum borrowing amount, job loss risk, and impact on retirement. Those three factors drive most decisions in my experience. A homeowner with $200,000 in accessible equity and stable employment who needs $75,000 for home renovations is a clear cash-out refinance candidate. A homeowner who needs $25,000 quickly for a one-time expense and plans to repay within 2 years often finds the 401(k) loan more practical.</em>
          </p>

          {/* Section: Tax Implications */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Tax Implications of Cash-Out Refinance vs 401(k) Loan: What Your CPA Needs to Know</h2>
          <p>
            The tax treatment of these two borrowing methods differs substantially and can swing the total cost comparison by thousands of dollars. Understanding the tax rules before borrowing — and discussing them with your CPA — prevents costly surprises.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Cash-Out Refinance Tax Rules</h3>
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Interest deduction for home improvements:</strong> Under the Tax Cuts and Jobs Act (TCJA), mortgage interest is deductible on up to $750,000 of acquisition debt when proceeds are used to buy, build, or substantially improve the property. Cash-out funds used for renovations or additions qualify. Consult your CPA for your specific situation.</li>
            <li><strong>No deduction for other uses:</strong> Cash-out funds used for debt consolidation, education, medical expenses, investments, or any purpose other than home improvement do not qualify for the interest deduction under current tax law.</li>
            <li><strong>The cash itself is not taxable:</strong> Receiving cash-out proceeds is not a taxable event. You are borrowing against your equity, not realizing income or gains.</li>
            <li><strong>Points and closing costs:</strong> Certain origination fees and points paid on a cash-out refinance may be deductible over the life of the loan. Your CPA can determine which closing costs qualify.</li>
          </ol>

          <h3 className="text-xl font-bold mt-6 mb-3">401(k) Loan Tax Rules</h3>
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Interest is not deductible:</strong> 401(k) loan interest is never tax-deductible, regardless of how the borrowed funds are used. You repay the loan with after-tax dollars.</li>
            <li><strong>Double taxation on interest:</strong> The interest you pay goes into your 401(k) account with after-tax dollars. When you eventually withdraw those funds in retirement, they are taxed again as ordinary income. This creates effective double taxation on the interest portion.</li>
            <li><strong>Default triggers income tax + penalty:</strong> If you fail to repay (including due to job loss), the outstanding balance is treated as a distribution. You owe ordinary income tax on the full amount plus a 10% early withdrawal penalty if under age 59.5. Consult your CPA for the exact impact on your tax situation.</li>
            <li><strong>No taxable event if repaid on time:</strong> A properly repaid 401(k) loan creates no current tax consequences. The borrowed funds are simply returned to your account with interest.</li>
          </ol>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold">Tax Factor</th>
                  <th className="px-4 py-3 text-left font-semibold">Cash-Out Refinance</th>
                  <th className="px-4 py-3 text-left font-semibold">401(k) Loan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Interest deductible?</td>
                  <td className="px-4 py-3 text-green-700">Yes — for home improvement use (consult CPA)</td>
                  <td className="px-4 py-3 text-red-700">No — never deductible</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Proceeds taxable?</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">No (if repaid on time)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Double taxation risk?</td>
                  <td className="px-4 py-3 text-green-700">No</td>
                  <td className="px-4 py-3 text-red-700">Yes — on interest payments</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Penalty for default</td>
                  <td className="px-4 py-3">Foreclosure risk (secured debt)</td>
                  <td className="px-4 py-3">Income tax + 10% early withdrawal penalty</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Closing costs deductible?</td>
                  <td className="px-4 py-3">Some points and fees (consult CPA)</td>
                  <td className="px-4 py-3">N/A — minimal fees</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <em>One pattern I see repeatedly with California homeowners: they assume 401(k) loan interest is deductible because they are &quot;paying themselves.&quot; It is not. And the double taxation on interest — paying with after-tax dollars now, then being taxed again on withdrawal — is a hidden cost that most borrowers overlook until their CPA flags it. Always consult your tax advisor before choosing between these options.</em>
          </p>

          {/* Section: Opportunity Cost Analysis */}
          <h2 className="text-2xl font-bold mt-8 mb-4">The Hidden Cost: How a 401(k) Loan Impacts Your Retirement Savings</h2>
          <p>
            The interest rate on a 401(k) loan looks attractive on the surface — typically prime rate plus 1%, which is lower than most mortgage rates in the current market. But the stated interest rate dramatically understates the true cost because it ignores the <strong>opportunity cost</strong> of removing funds from your investment portfolio.
          </p>
          <p>
            When you borrow from your 401(k), the borrowed amount is moved out of your investment allocations and into a stable value fund earning minimal returns. The difference between what your money would have earned in the market and what the stable value fund earns is the real cost of the loan.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold">Scenario</th>
                  <th className="px-4 py-3 text-left font-semibold">$50,000 Borrowed for 5 Years</th>
                  <th className="px-4 py-3 text-left font-semibold">$50,000 Left Invested for 5 Years</th>
                  <th className="px-4 py-3 text-left font-semibold">Opportunity Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Conservative market (5% avg return)</td>
                  <td className="px-4 py-3">$50,000 + interest repaid to self</td>
                  <td className="px-4 py-3">$63,814</td>
                  <td className="px-4 py-3 text-red-600">~$13,814</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Moderate market (7% avg return)</td>
                  <td className="px-4 py-3">$50,000 + interest repaid to self</td>
                  <td className="px-4 py-3">$70,128</td>
                  <td className="px-4 py-3 text-red-600">~$20,128</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Strong market (10% avg return)</td>
                  <td className="px-4 py-3">$50,000 + interest repaid to self</td>
                  <td className="px-4 py-3">$80,526</td>
                  <td className="px-4 py-3 text-red-600">~$30,526</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The opportunity cost of a $50,000 loan over 5 years ranges from approximately $13,800 in a conservative market to over $30,500 in a strong market. These figures represent the additional retirement savings you forgo by borrowing from your 401(k) instead of leaving those funds invested. While you do repay the loan with interest into your own account, the interest rate you pay yourself is typically lower than market returns, meaning the repayment does not fully offset the lost growth.
          </p>

          <p>
            <em>This is the point in the conversation where I see the most &quot;aha&quot; moments with clients. When we calculate that a $50,000 401(k) loan effectively costs $20,000+ in lost retirement growth over just 5 years — on top of the double taxation on interest — many homeowners realize the cash-out refinance delivers better total economics despite higher closing costs. The numbers shift even more dramatically for borrowers who are 20+ years from retirement, where the compounding loss is exponentially greater.</em>
          </p>

          {/* Section: When Cash-Out Wins */}
          <h2 className="text-2xl font-bold mt-8 mb-4">When Does a Cash-Out Refinance Make More Sense Than a 401(k) Loan?</h2>
          <p>
            Based on working with hundreds of homeowners in California and Washington, the cash-out refinance is the stronger option in these specific situations:
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>You need more than $50,000:</strong> The IRS caps 401(k) loans at $50,000. If your project, debt consolidation, or expense exceeds this amount, a cash-out refinance is the only option that provides sufficient funds from a single source.</li>
            <li><strong>You plan to use funds for home improvements:</strong> Mortgage interest on cash-out refinance proceeds used for home improvements is tax-deductible (consult your CPA), effectively reducing the cost of borrowing. 401(k) loan interest is never deductible.</li>
            <li><strong>You prefer longer repayment:</strong> A 15-30 year repayment term means lower monthly payments, reducing strain on your monthly budget. The 5-year mandatory repayment on a 401(k) loan creates higher monthly obligations through payroll deductions.</li>
            <li><strong>You have concerns about job stability:</strong> If there is any possibility you will change employers within 5 years, the 401(k) loan&apos;s accelerated repayment trigger creates significant tax risk. A cash-out refinance is completely unaffected by employment changes.</li>
            <li><strong>You are more than 15 years from retirement:</strong> The opportunity cost of removing funds from your 401(k) compounds dramatically over longer time horizons. Homeowners with decades of investment growth ahead face the highest true cost from 401(k) borrowing.</li>
            <li><strong>You can improve your current mortgage rate:</strong> If current market rates are lower than your existing mortgage rate, a cash-out refinance allows you to simultaneously access cash and reduce your interest rate — a double benefit that does not exist with 401(k) loans.</li>
          </ol>

          <p>
            <em>A recent client in Irvine needed $120,000 for a major kitchen and bathroom renovation. The 401(k) loan was limited to $50,000, leaving a $70,000 gap. We structured a cash-out refinance through one of our wholesale lender partners that covered the full amount, with mortgage interest fully deductible for the home improvement use. The tax savings alone made the cash-out refinance the clear winner, even before factoring in the preserved retirement growth.</em>
          </p>

          {/* Section: When 401(k) Loan Wins */}
          <h2 className="text-2xl font-bold mt-8 mb-4">When Does a 401(k) Loan Make More Sense Than a Cash-Out Refinance?</h2>
          <p>
            The 401(k) loan has legitimate advantages in specific scenarios. Recognizing these situations prevents homeowners from using a larger, more expensive financial tool when a simpler option works.
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>You need a small amount ($25,000 or less):</strong> The closing costs on a cash-out refinance (2-5% of the total loan amount) make it disproportionately expensive for small borrowing needs. A 401(k) loan with $50-$100 in fees is dramatically cheaper for small amounts.</li>
            <li><strong>You need funds within days, not weeks:</strong> 401(k) loans fund in 3-7 business days. If timing is critical — an emergency expense, a time-sensitive purchase, or a contractor deposit deadline — the speed advantage is decisive.</li>
            <li><strong>You have strong job security and plan to stay with your employer:</strong> If you are firmly established with your employer with no plans to leave within 5 years, the job-loss repayment risk is minimal, removing the largest downside of the 401(k) loan.</li>
            <li><strong>Your credit score disqualifies you from competitive refinance rates:</strong> 401(k) loans require no credit check. Homeowners with damaged credit who would face unfavorable cash-out refinance terms may find the 401(k) loan provides better overall economics.</li>
            <li><strong>You do not want to extend your mortgage term:</strong> A cash-out refinance restarts your amortization clock. If you are 15 years into a 30-year mortgage and do not want to restart to year one, the 401(k) loan avoids this reset.</li>
            <li><strong>You are within 5 years of retirement:</strong> With a short investment horizon, the opportunity cost of removing funds from your 401(k) is lower. The compounding loss is minimal compared to a 25-year-old borrower with decades of growth ahead.</li>
          </ol>

          {/* HELOC Third Option */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Third Option: Why a HELOC May Beat Both Cash-Out Refinance and 401(k) Loan</h2>
          <p>
            Before committing to either a cash-out refinance or a 401(k) loan, California and Washington homeowners should consider a third option that combines advantages of both: the <strong>home equity line of credit (HELOC)</strong>.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold">Cash-Out Refinance</th>
                  <th className="px-4 py-3 text-left font-semibold">401(k) Loan</th>
                  <th className="px-4 py-3 text-left font-semibold">HELOC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Replaces first mortgage?</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">No — second lien</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Closing costs</td>
                  <td className="px-4 py-3">2-5% of loan</td>
                  <td className="px-4 py-3">$50-$100</td>
                  <td className="px-4 py-3">$0-$500 typical</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Draw flexibility</td>
                  <td className="px-4 py-3">Lump sum only</td>
                  <td className="px-4 py-3">Lump sum only</td>
                  <td className="px-4 py-3">Revolving — draw as needed</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Interest rate</td>
                  <td className="px-4 py-3">Fixed or ARM</td>
                  <td className="px-4 py-3">Prime + 1% (set by plan)</td>
                  <td className="px-4 py-3">Variable (prime + margin)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Retirement impact</td>
                  <td className="px-4 py-3">None</td>
                  <td className="px-4 py-3">Reduces growth</td>
                  <td className="px-4 py-3">None</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Job loss risk</td>
                  <td className="px-4 py-3">None</td>
                  <td className="px-4 py-3">Full repayment + tax penalty</td>
                  <td className="px-4 py-3">None</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Interest-only period</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Yes — during draw period</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Best for</td>
                  <td className="px-4 py-3">Large lump sum, rate improvement</td>
                  <td className="px-4 py-3">Small, quick, short-term</td>
                  <td className="px-4 py-3">Flexible access, ongoing needs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            A HELOC keeps your existing first mortgage intact (preserving your current rate), provides revolving access to funds so you only borrow what you need, carries minimal closing costs, and does not affect your retirement savings. For homeowners who need flexible access to $25,000-$200,000+ over a period of months or years, the HELOC frequently outperforms both the cash-out refinance and the 401(k) loan. Learn more in our <Link href="/blog/heloc-vs-cash-out-refinance-2026" className="text-blue-600 hover:underline">HELOC vs cash-out refinance comparison</Link>.
          </p>

          <p>
            <em>As a wholesale broker, I find that roughly 30-40% of clients who initially call asking about a cash-out refinance end up choosing a HELOC instead once we compare the full picture. The HELOC is particularly strong for homeowners who locked in a low mortgage rate in previous years and do not want to give that up through a full refinance. I compare HELOC options from 50+ Wholesale Lenders to find the most competitive terms for each client&apos;s situation.</em>
          </p>

          {/* Wholesale Broker Advantage */}
          <h2 className="text-2xl font-bold mt-8 mb-4">How a Wholesale Mortgage Broker Improves Your Cash-Out Refinance Outcome</h2>
          <p>
            If you determine that a cash-out refinance is the right choice, how you obtain that refinance matters as much as the decision itself. Working with a wholesale mortgage broker provides structural advantages that directly reduce your cost of borrowing.
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Rate comparison across 50+ Wholesale Lenders:</strong> A wholesale broker submits your scenario to a broad lender network simultaneously, generating competing rate quotes. Retail banks and credit unions offer only their own products. The competitive bidding process consistently produces more favorable pricing.</li>
            <li><strong>Reduced overhead costs:</strong> Wholesale lenders operate at lower overhead than retail branches, and those savings translate into reduced origination fees, lower rates, or both. The wholesale channel is structurally more cost-efficient.</li>
            <li><strong>Specialized program matching:</strong> Different lenders specialize in different borrower profiles. A wholesale broker matches your specific scenario — credit score, property type, equity level, income documentation type — to the lenders who price that profile most aggressively.</li>
            <li><strong>Negotiation leverage:</strong> Brokers represent ongoing volume to their lender partners, creating negotiation power that individual borrowers do not have when approaching a single bank.</li>
          </ol>

          <p>
            <em>A client in Costa Mesa recently came to me after receiving a cash-out refinance quote from his bank. By running his scenario through our wholesale network, we found a rate that was meaningfully lower with reduced closing costs. Over the life of the loan, the savings exceeded what his 401(k) loan would have cost in opportunity cost alone — which is exactly why comparing options matters.</em>
          </p>

          {/* PAA Section */}
          <h2 className="text-2xl font-bold mt-8 mb-4">People Also Ask: Cash-Out Refinance vs 401(k) Loan</h2>

          <div className="space-y-6 my-6">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold mt-0 mb-2">Should I borrow from my 401(k) or refinance my house?</h3>
              <p className="paa-answer mb-2">
                <strong>Refinance for amounts over $50,000 or when funds are used for home improvements. Borrow from 401(k) for small, short-term needs under $25,000.</strong>
              </p>
              <p className="text-gray-700">
                The decision hinges on the amount needed and intended use. Cash-out refinance provides larger amounts, longer repayment, and tax-deductible interest for home improvements. A 401(k) loan is faster and cheaper for small amounts but caps at $50,000, carries job-loss risk, and reduces your retirement growth. If you need the funds for home renovations specifically, the cash-out refinance typically wins on total cost after accounting for the tax deduction and preserved retirement growth. Consult your CPA for your specific tax situation before deciding.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold mt-0 mb-2">Is it smart to take money out of your 401(k) to pay off your house?</h3>
              <p className="paa-answer mb-2">
                <strong>Generally no. The opportunity cost of lost retirement growth typically exceeds the interest savings from paying off a mortgage.</strong>
              </p>
              <p className="text-gray-700">
                Withdrawing from a 401(k) (as opposed to a loan) triggers ordinary income tax on the full amount plus a 10% penalty if under 59.5. Even a 401(k) loan to pay off a mortgage forces you to repay within 5 years through payroll deductions while losing investment growth. The math rarely favors this approach unless you are over 59.5, in a low tax bracket, and the mortgage rate significantly exceeds your expected investment returns. Consult your CPA and a financial advisor before making this decision.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold mt-0 mb-2">What is the real cost of a 401(k) loan?</h3>
              <p className="paa-answer mb-2">
                <strong>The real cost is the stated interest plus lost investment returns plus double taxation on interest — often $15,000-$30,000 on a $50,000 loan over 5 years.</strong>
              </p>
              <p className="text-gray-700">
                Most borrowers focus on the interest rate (typically prime + 1%) and overlook the opportunity cost. A $50,000 loan removes $50,000 from your market-exposed portfolio for 5 years. If your investments would have earned 7% annually, you forfeit roughly $20,000 in growth. Add the double taxation on interest payments (after-tax dollars going in, taxed again on withdrawal) and the total cost far exceeds the stated interest rate. This makes the 401(k) loan more expensive than it appears, especially compared to a cash-out refinance where retirement accounts remain fully invested.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold mt-0 mb-2">Can I use a cash-out refinance for debt consolidation instead of a 401(k) loan?</h3>
              <p className="paa-answer mb-2">
                <strong>Yes. Cash-out refinance for debt consolidation replaces high-interest debt with a lower mortgage rate and longer term.</strong>
              </p>
              <p className="text-gray-700">
                Cash-out refinance is one of the most common tools for debt consolidation because it converts high-rate credit card debt (often 20-29% APR) into a mortgage rate spread over 15-30 years. While mortgage interest on debt consolidation proceeds is not tax-deductible, the rate reduction alone creates substantial savings. A 401(k) loan is limited to $50,000 and must be repaid in 5 years, which may not provide sufficient funds or repayment flexibility for large debt consolidation. Learn more in our <Link href="/blog/cash-out-refinance-how-it-works-2026" className="text-blue-600 hover:underline">cash-out refinance guide</Link>.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold mt-0 mb-2">How does a 401(k) loan affect my ability to get a mortgage later?</h3>
              <p className="paa-answer mb-2">
                <strong>A 401(k) loan does not appear on your credit report, but monthly repayment may reduce the income available for mortgage qualification.</strong>
              </p>
              <p className="text-gray-700">
                While 401(k) loans are invisible to credit bureaus and do not affect your credit score or appear on credit reports, mortgage underwriters do factor 401(k) loan repayments into your debt-to-income ratio if the repayment extends more than 10 months beyond your mortgage application. The payroll deduction reduces your net take-home pay, which can affect how much mortgage you qualify for. If you plan to purchase a home or refinance in the near future, this is a factor worth discussing with your mortgage broker.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold mt-0 mb-2">What happens to my cash-out refinance if I sell my house?</h3>
              <p className="paa-answer mb-2">
                <strong>The cash-out refinance mortgage is paid off from sale proceeds at closing, like any other mortgage.</strong>
              </p>
              <p className="text-gray-700">
                When you sell your home, all mortgage liens — including a cash-out refinance — are satisfied from the sale proceeds through the escrow process. Any remaining equity after paying off the mortgage and closing costs goes to you. There are no prepayment penalties on most conventional cash-out refinance loans. If you plan to sell within 2-3 years, consider whether the closing costs of a cash-out refinance justify the short holding period — in these cases, a HELOC with lower upfront costs may be more cost-effective.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-bold mt-0 mb-2">Is a home equity loan better than both a cash-out refinance and 401(k) loan?</h3>
              <p className="paa-answer mb-2">
                <strong>A home equity loan (HELOAN) offers fixed-rate certainty without replacing your first mortgage — an advantage when your existing rate is low.</strong>
              </p>
              <p className="text-gray-700">
                A HELOAN provides a lump sum at a fixed rate as a second mortgage, keeping your existing first mortgage intact. This is particularly valuable for homeowners who locked in low rates in previous years. Unlike a 401(k) loan, there is no retirement impact or job-loss risk. Unlike a cash-out refinance, your first mortgage rate is preserved. The trade-off is higher interest rates than a first mortgage (because it is a second lien) and the addition of a second monthly payment. A wholesale broker can compare HELOAN rates across 50+ Wholesale Lenders to find competitive terms.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <h2 className="text-2xl font-bold mt-10 mb-6">Frequently Asked Questions: Cash-Out Refinance vs 401(k) Loan</h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2 mt-0">{faq.question}</h3>
                <p className="mb-0">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Expert Summary + CTA */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Expert Summary: Making the Right Choice Between Cash-Out Refinance and 401(k) Loan</h2>
          <p>
            The decision between a cash-out refinance and a 401(k) loan is not a one-size-fits-all calculation. Both tools access accumulated wealth — one through property equity, the other through retirement savings — but they carry fundamentally different cost structures, risk profiles, and long-term consequences.
          </p>
          <p>
            For California and Washington homeowners with substantial equity, stable income, and borrowing needs above $50,000, the cash-out refinance consistently delivers better total economics when factored over the full repayment period. The tax deduction on home improvement use, the preservation of retirement growth, and the elimination of job-loss repayment risk make it the structurally stronger option for most scenarios.
          </p>
          <p>
            For smaller, time-sensitive needs with clear 5-year repayment plans and strong job security, the 401(k) loan provides a fast, low-friction alternative that avoids mortgage closing costs and credit impact entirely.
          </p>
          <p>
            The most important step is running the numbers for your specific situation — factoring in your current mortgage rate, home value, 401(k) balance, intended use of funds, employment outlook, and proximity to retirement. A wholesale mortgage broker can provide the cash-out refinance side of that comparison with pricing from 50+ Wholesale Lenders, and your CPA can model the tax implications of each path.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-8 border border-blue-200">
            <h3 className="font-bold text-blue-900 mt-0 mb-3">Get a Free Cash-Out Refinance Comparison</h3>
            <p className="text-blue-900 mb-3">
              As a wholesale mortgage broker licensed in California and Washington, I compare cash-out refinance rates from 50+ Wholesale Lenders to find the most competitive terms for your scenario. Every consultation includes a side-by-side cost analysis so you can compare your cash-out refinance option against your 401(k) loan alternative with real numbers.
            </p>
            <p className="text-blue-900 mb-0">
              Contact Mo Abdel today: <strong>(949) 579-2057</strong> | <strong>mabdel@luminlending.com</strong>
            </p>
          </div>

          {/* Related Resources */}
          <div className="bg-gray-50 p-6 rounded-xl my-8 border border-gray-200">
            <h3 className="font-bold mt-0 mb-3">Related Resources</h3>
            <ul className="space-y-2 mb-0">
              <li><Link href="/blog/cash-out-refinance-how-it-works-2026" className="text-blue-600 hover:underline">How Does a Cash-Out Refinance Work? Complete Guide [2026]</Link></li>
              <li><Link href="/blog/heloc-vs-cash-out-refinance-2026" className="text-blue-600 hover:underline">HELOC vs Cash-Out Refinance: Which Is Right for You? [2026]</Link></li>
              <li><Link href="/blog/cash-out-vs-regular-refinance-complete-2026" className="text-blue-600 hover:underline">Cash-Out vs Regular Refinance: Complete Comparison [2026]</Link></li>
              <li><Link href="/blog/refinance-debt-consolidation-2026" className="text-blue-600 hover:underline">Refinance for Debt Consolidation Guide [2026]</Link></li>
              <li><a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-loans" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IRS: Retirement Plan Loans</a></li>
              <li><a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-cash-out-refinance-en-122/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CFPB: What Is a Cash-Out Refinance?</a></li>
            </ul>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            <p className="font-semibold">Mo Abdel | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443</p>
            <p>Licensed in: CA, WA</p>
            <p className="mt-4">
              Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial, tax, or legal advice. Consult your CPA for tax implications and an attorney for legal questions. 401(k) loan rules are governed by your employer&apos;s plan documents and IRS regulations — consult your plan administrator and tax advisor for specific guidance.
            </p>
          </div>
        </footer>
      </article>
    </>
  );
}
