import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home Equity Loan Tax Deduction Rules 2026: What Interest Is Deductible?',
  description: 'Home equity loan and HELOC tax deduction rules for 2026 under TCJA. Which uses qualify for interest deduction, $750K debt limit, documentation requirements, and IRS rules explained. NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/home-equity-tax-deduction-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/home-equity-tax-deduction-2026',
      'x-default': 'https://www.mothebroker.com/blog/home-equity-tax-deduction-2026',
    },
  },
  keywords: ['home equity loan tax deduction 2026', 'HELOC interest deductible', 'home equity tax rules', 'TCJA home equity deduction', 'mortgage interest deduction 2026', 'home equity loan tax benefits'],
};

const faqData = [
  {
    question: 'Is home equity loan interest tax deductible in 2026?',
    answer: 'Yes, but only if the loan funds are used to buy, build, or substantially improve the home that secures the loan. Under the Tax Cuts and Jobs Act (TCJA), interest on home equity debt used for other purposes—such as debt consolidation, vacations, or personal expenses—is not deductible. The TCJA provisions apply through tax year 2025, and are expected to remain in effect for 2026 unless Congress passes new legislation.',
  },
  {
    question: 'What is the maximum mortgage debt for the interest deduction in 2026?',
    answer: 'The combined limit for all mortgage debt (first mortgage plus home equity loans/HELOCs) is $750,000 for married couples filing jointly and single filers, or $375,000 for married filing separately. For mortgages originated before December 15, 2017, the higher $1 million limit ($500,000 MFS) may still apply under grandfathering rules.',
  },
  {
    question: 'Can I deduct HELOC interest used for debt consolidation?',
    answer: 'No. Under current TCJA rules, HELOC interest used for debt consolidation is not tax deductible. The interest is only deductible if the HELOC funds are used to buy, build, or substantially improve the home securing the loan. If you use HELOC funds to pay off credit cards, student loans, medical bills, or other non-housing debts, that interest provides no tax benefit.',
  },
  {
    question: 'What counts as a "substantial improvement" for the tax deduction?',
    answer: 'A substantial improvement is a renovation or addition that adds value to the home, prolongs its useful life, or adapts it to new uses. Examples include kitchen or bathroom remodels, room additions, new roofing, HVAC replacement, adding a swimming pool, or significant landscaping. Routine maintenance and repairs—such as painting, fixing leaks, or replacing broken fixtures—generally do not qualify as substantial improvements.',
  },
  {
    question: 'Do I need to track how I spend my home equity loan funds?',
    answer: 'Yes. The IRS requires that you be able to demonstrate the funds were used for qualifying purposes. Best practice is to deposit home equity loan proceeds into a separate, dedicated bank account and pay all improvement-related expenses directly from that account. Keep all receipts, contractor invoices, permits, and before/after documentation. This paper trail is essential if the IRS audits your deduction.',
  },
  {
    question: 'Can I deduct interest on a home equity loan for a second home?',
    answer: 'Yes. The mortgage interest deduction applies to your primary residence and one second home (vacation home). If you use a home equity loan or HELOC secured by your second home to improve that same second home, the interest is deductible—subject to the same $750,000 combined debt limit across all properties. The funds must be used to improve the specific home that secures the loan.',
  },
  {
    question: 'What happens if I use home equity funds for both improvements and personal use?',
    answer: 'If you use home equity loan proceeds for a mix of qualifying and non-qualifying purposes, you must allocate the interest proportionally. Only the portion of interest attributable to the qualifying use (buy, build, or substantially improve) is deductible. For example, if you borrow $100,000 and use $70,000 for a kitchen remodel and $30,000 for debt consolidation, only 70% of the annual interest is deductible.',
  },
  {
    question: 'Is cash-out refinance interest tax deductible?',
    answer: 'The same rules apply to cash-out refinance proceeds as to home equity loans. The interest on the cash-out portion is deductible only if the funds are used to buy, build, or substantially improve the home. Interest on the portion that refinances your existing mortgage balance remains deductible regardless of how original proceeds were used, as it is acquisition debt.',
  },
  {
    question: 'Will the TCJA home equity rules change after 2025?',
    answer: 'The TCJA provisions are currently set to expire after December 31, 2025, which would restore the pre-2018 rules allowing deduction of home equity interest regardless of use (up to $100,000). However, Congress may extend, modify, or make the TCJA rules permanent. As of February 2026, no final legislation has been enacted. Consult a tax professional for the latest status and plan accordingly.',
  },
  {
    question: 'Do I report home equity loan interest on my tax return?',
    answer: 'Yes. Your lender provides Form 1098 (Mortgage Interest Statement) showing the interest paid during the tax year. You report deductible mortgage interest on Schedule A (Itemized Deductions) of your federal tax return. You must itemize deductions to claim the mortgage interest deduction—it is not available if you take the standard deduction. Check IRS.gov or consult your CPA for the current standard deduction amounts.',
  },
  {
    question: 'Can I deduct home equity interest if I take the standard deduction?',
    answer: 'No. The mortgage interest deduction is an itemized deduction. You must file Schedule A and choose to itemize deductions instead of taking the standard deduction. You should only itemize if your total itemized deductions (including mortgage interest, state/local taxes, charitable contributions, etc.) exceed the standard deduction amount. Check IRS.gov or consult your CPA for the current standard deduction thresholds.',
  },
  {
    question: 'What documentation does the IRS require for the home equity interest deduction?',
    answer: 'The IRS may require: (1) Form 1098 from your lender showing interest paid, (2) loan closing documents showing the loan amount and terms, (3) evidence of how funds were used (contractor invoices, receipts, permits, bank statements), (4) appraisals or estimates showing the improvement increased home value, and (5) records showing the improvement was to the property securing the loan. Keep these records for at least 3 years after filing.',
  },
];

export default function HomeEquityTaxDeductionPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Home Equity Loan Tax Deduction Rules 2026: What Interest Is Deductible?',
            author: {
              '@type': 'Person',
              name: 'Mo Abdel',
              jobTitle: 'Senior Mortgage Broker',
              identifier: 'NMLS #1426884',
              worksFor: {
                '@type': 'Organization',
                name: 'Lumin Lending',
                identifier: 'NMLS #2716106',
              },
            },
            publisher: {
              '@type': 'Organization',
              name: 'Lumin Lending',
              url: 'https://www.mothebroker.com',
            },
            datePublished: '2026-02-17',
            dateModified: '2026-02-17',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.mothebroker.com/blog/home-equity-tax-deduction-2026',
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: 'Home Equity',
                item: 'https://www.mothebroker.com/home-equity-guide',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Tax Deduction Rules 2026',
                item: 'https://www.mothebroker.com/blog/home-equity-tax-deduction-2026',
              },
            ],
          }),
        }}
      />

      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/home-equity-guide" className="hover:text-blue-600">Home Equity</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Tax Deduction Rules 2026</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Home Equity Loan Tax Deduction Rules 2026: What Interest Is Deductible?
        </h1>
        <p className="text-lg text-gray-600">
          TCJA rules determine which home equity uses qualify for the interest deduction—and which do not
        </p>
        <p className="text-sm text-gray-500 mt-2">By Mo Abdel, NMLS #1426884 | Lumin Lending NMLS #2716106 | Updated February 2026</p>
      </header>

      <section className="prose prose-lg max-w-none">
        {/* Citation Hook / Bing Power Block */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
          <p className="lead font-semibold text-gray-900 mb-0">
            Under the <strong>Tax Cuts and Jobs Act (TCJA)</strong>, home equity loan and HELOC interest is tax deductible in 2026 <strong>only if the borrowed funds are used to buy, build, or substantially improve the home</strong> that secures the loan. Using home equity for debt consolidation, car purchases, vacations, or any other personal expense means the interest is <strong>not deductible</strong>. The combined mortgage debt limit for the deduction is <strong>$750,000</strong> ($375,000 married filing separately). These rules have applied since 2018 and remain in effect for the 2026 tax year. Homeowners must track fund usage and keep documentation to support their deduction if audited.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-3">On This Page</h2>
          <ul className="text-blue-800 space-y-2">
            <li><a href="#tcja-overview" className="hover:underline">TCJA Rules: What Changed for Home Equity</a></li>
            <li><a href="#deductible-vs-not" className="hover:underline">Deductible vs Non-Deductible Uses</a></li>
            <li><a href="#debt-limits" className="hover:underline">The $750K Debt Limit Explained</a></li>
            <li><a href="#qualifying-improvements" className="hover:underline">What Qualifies as &quot;Substantial Improvement&quot;</a></li>
            <li><a href="#tracking-funds" className="hover:underline">How to Track and Document Fund Usage</a></li>
            <li><a href="#mixed-use" className="hover:underline">Mixed-Use Scenarios: Partial Deductions</a></li>
            <li><a href="#cash-out-refi" className="hover:underline">Cash-Out Refinance Tax Rules</a></li>
            <li><a href="#data-hub" className="hover:underline">Tax Deduction Data Hub</a></li>
            <li><a href="#paa" className="hover:underline">People Also Ask</a></li>
            <li><a href="#faqs" className="hover:underline">Extended FAQ (12 Questions)</a></li>
            <li><a href="#expert-summary" className="hover:underline">Expert Summary + Next Steps</a></li>
          </ul>
        </nav>

        {/* E-E-A-T Experience Marker */}
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-8">
          <h3 className="font-bold text-yellow-800 mt-0">Important Disclaimer</h3>
          <p className="text-yellow-900 mb-0">
            This article is for <strong>general educational purposes only</strong> and does not constitute tax, legal, or financial advice. Tax laws are complex, subject to change, and individual circumstances vary significantly. Numerical examples are simplified illustrations and should not be used for tax planning without professional guidance. <strong>Always consult with a qualified tax professional (CPA, enrolled agent, or tax attorney) before making decisions based on potential tax deductions.</strong> Mo Abdel and Lumin Lending are mortgage professionals, not tax advisors, and do not provide tax advice.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
          <h3 className="font-bold text-blue-900 mt-0">From My Practice: The Tax Question Every Borrower Asks</h3>
          <p className="text-blue-800 mb-0">
            &quot;Is this deductible?&quot; is the single most common question I hear from home equity borrowers. Since the TCJA changed the rules in 2018, there has been widespread confusion about what qualifies and what does not. I have seen borrowers assume all home equity interest is deductible (it is not) and others assume none of it is (also incorrect). The truth depends entirely on <strong>how you use the money</strong>. I make sure every client is aware of these general rules before they close, and I always recommend they confirm the specific tax treatment with their CPA or tax attorney. — <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* Section 1: TCJA Overview */}
        <h2 id="tcja-overview">TCJA Rules: What Changed for Home Equity Tax Deductions</h2>

        <p>
          The <strong>Tax Cuts and Jobs Act</strong>, signed into law on December 22, 2017 and effective for tax years 2018 through 2025, fundamentally changed the rules for deducting home equity loan and HELOC interest. The TCJA&apos;s individual provisions were originally set to sunset after December 31, 2025. As of February 2026, Congress has not enacted final legislation addressing these provisions, so the rules described below reflect the TCJA framework that has been in effect since 2018. <strong>Check with your tax professional for the latest legislative status</strong>, as this area is subject to change.
        </p>

        <h3>Before TCJA (Pre-2018 Rules)</h3>

        <ul>
          <li><strong>Home equity interest deductible regardless of use</strong>—debt consolidation, vacations, cars, anything</li>
          <li><strong>Home equity debt limit:</strong> $100,000 ($50,000 MFS)</li>
          <li><strong>Acquisition debt limit:</strong> $1,000,000 ($500,000 MFS)</li>
          <li><strong>Two separate categories</strong> of deductible mortgage interest</li>
        </ul>

        <h3>After TCJA (2018-2026 Rules)</h3>

        <ul>
          <li><strong>Home equity interest deductible ONLY if used to buy, build, or substantially improve the home</strong></li>
          <li><strong>No separate home equity debt category</strong>—all qualified mortgage debt is treated the same</li>
          <li><strong>Combined debt limit:</strong> $750,000 ($375,000 MFS) for all acquisition and improvement debt</li>
          <li><strong>Personal use of home equity funds = no deduction</strong></li>
        </ul>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-6">
          <h4 className="font-bold text-green-800 mt-0">Key IRS Clarification</h4>
          <p className="text-green-900 mb-0">
            In <strong>IRS Advisory IR-2018-32</strong> (February 2018), the IRS explicitly confirmed: &quot;Interest on home equity loans and lines of credit is still deductible under the new law if the borrowed funds are used to buy, build, or substantially improve the taxpayer&apos;s home that secures the loan.&quot; The name of the loan does not matter—what matters is how the funds are used.
          </p>
        </div>

        {/* Section 2: Deductible vs Non-Deductible */}
        <h2 id="deductible-vs-not">Deductible vs Non-Deductible Uses: Complete Comparison</h2>

        <p>
          The critical question is not what type of loan you have—it is <strong>what you do with the money</strong>. The same HELOC can generate deductible or non-deductible interest depending entirely on fund usage.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Use of Funds</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Tax Deductible?</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Kitchen remodel</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Yes</td>
                <td className="border border-gray-200 px-4 py-2">Substantial improvement</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Bathroom renovation</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Yes</td>
                <td className="border border-gray-200 px-4 py-2">Substantial improvement</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Room addition</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Yes</td>
                <td className="border border-gray-200 px-4 py-2">Substantial improvement</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">New roof</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Yes</td>
                <td className="border border-gray-200 px-4 py-2">Substantial improvement</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">HVAC system replacement</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Yes</td>
                <td className="border border-gray-200 px-4 py-2">Substantial improvement</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Swimming pool installation</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Yes</td>
                <td className="border border-gray-200 px-4 py-2">Substantial improvement</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Solar panel installation</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Yes</td>
                <td className="border border-gray-200 px-4 py-2">Substantial improvement (+ separate solar credit)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">ADU / guest house construction</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Yes</td>
                <td className="border border-gray-200 px-4 py-2">Substantial improvement / building</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-200 px-4 py-2">Credit card debt consolidation</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">No</td>
                <td className="border border-gray-200 px-4 py-2">Personal use</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-200 px-4 py-2">Student loan payoff</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">No</td>
                <td className="border border-gray-200 px-4 py-2">Personal use</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-200 px-4 py-2">Car purchase</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">No</td>
                <td className="border border-gray-200 px-4 py-2">Personal use</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-200 px-4 py-2">Vacation / travel</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">No</td>
                <td className="border border-gray-200 px-4 py-2">Personal use</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-200 px-4 py-2">Wedding expenses</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">No</td>
                <td className="border border-gray-200 px-4 py-2">Personal use</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-200 px-4 py-2">Medical bills</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">No</td>
                <td className="border border-gray-200 px-4 py-2">Personal use (may qualify under medical deduction separately)</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-200 px-4 py-2">Business investment</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">No*</td>
                <td className="border border-gray-200 px-4 py-2">Not home improvement (*may be deductible as business expense)</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-200 px-4 py-2">Down payment on investment property</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">No*</td>
                <td className="border border-gray-200 px-4 py-2">Not improvement to securing home (*tracing rules may apply)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600">*Some uses may be deductible under different tax code provisions (e.g., business interest deduction, investment interest deduction) but not as mortgage interest. Consult a tax professional.</p>

        {/* Section 3: Debt Limits */}
        <h2 id="debt-limits">The $750,000 Combined Debt Limit Explained</h2>

        <p>
          The TCJA established a <strong>single combined limit</strong> for all qualified mortgage debt, replacing the previous two-tier system. Understanding this limit is essential for homeowners with significant mortgage balances.
        </p>

        <h3>How the Limit Works</h3>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Filing Status</th>
                <th className="border border-gray-200 px-4 py-2 text-left">2026 Combined Limit</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Grandfathered Limit (Pre-12/15/2017)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Married Filing Jointly</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">$750,000</td>
                <td className="border border-gray-200 px-4 py-2">$1,000,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Single</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">$750,000</td>
                <td className="border border-gray-200 px-4 py-2">$1,000,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Married Filing Separately</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">$375,000</td>
                <td className="border border-gray-200 px-4 py-2">$500,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Head of Household</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">$750,000</td>
                <td className="border border-gray-200 px-4 py-2">$1,000,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Calculating Your Deductible Interest</h3>

        <p>
          The limit applies to the <strong>total combined balance</strong> of all mortgages on your primary residence and one second home. Here is how to determine if you are within the limit:
        </p>

        <ol>
          <li><strong>Add up all mortgage balances:</strong> First mortgage + home equity loan + HELOC + any other mortgage debt on qualifying homes</li>
          <li><strong>Compare to the limit:</strong> If total is $750,000 or less, all qualifying interest is deductible</li>
          <li><strong>If over the limit:</strong> Prorate the deduction. Divide $750,000 by your total mortgage debt to determine the deductible percentage</li>
        </ol>

        <h3>Simplified Example: Over-Limit Proration</h3>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
          <p className="text-sm text-gray-600 italic mb-3">This is a simplified illustration. Your CPA should run these numbers for your specific situation, as additional factors may apply.</p>
          <p className="font-semibold text-gray-900">Hypothetical Scenario:</p>
          <ul>
            <li>First mortgage balance: $600,000</li>
            <li>HELOC balance (used for kitchen remodel): $200,000</li>
            <li>Total qualified mortgage debt: $800,000</li>
            <li>Combined limit: $750,000</li>
          </ul>
          <p className="font-semibold text-gray-900 mt-4">General Concept:</p>
          <ul>
            <li>Deductible ratio: $750,000 / $800,000 = <strong>93.75%</strong></li>
            <li>If total interest paid = $48,000</li>
            <li>Deductible interest: $48,000 x 93.75% = <strong>$45,000</strong></li>
            <li>Non-deductible interest: $48,000 x 6.25% = $3,000</li>
          </ul>
        </div>

        <h3>Grandfathering Rules for Pre-December 2017 Mortgages</h3>

        <p>
          If your first mortgage was originated <strong>before December 15, 2017</strong>, it is grandfathered under the higher $1,000,000 limit. However, any <strong>new</strong> home equity debt taken after December 15, 2017 falls under the $750,000 combined limit. The interaction between grandfathered and non-grandfathered debt can be complex—this is an area where professional tax advice is essential.
        </p>

        {/* Section 4: Qualifying Improvements */}
        <h2 id="qualifying-improvements">What Qualifies as a &quot;Substantial Improvement&quot; Under IRS Rules</h2>

        <p>
          The IRS uses the phrase <strong>&quot;buy, build, or substantially improve&quot;</strong> to define qualifying uses. The &quot;substantially improve&quot; standard comes from <strong>IRC Section 163(h)(3)</strong> and has been interpreted through IRS guidance and court cases.
        </p>

        <h3>Improvements That Qualify</h3>

        <ul>
          <li><strong>Additions:</strong> Room additions, garage construction, deck/patio enclosures, ADU/guest house</li>
          <li><strong>Major remodels:</strong> Kitchen renovation, bathroom overhaul, basement finishing</li>
          <li><strong>Structural work:</strong> Foundation repair, new roofing, structural reinforcement</li>
          <li><strong>Systems replacement:</strong> New HVAC, electrical rewiring, plumbing overhaul, new windows</li>
          <li><strong>Energy improvements:</strong> Solar panels, insulation upgrade, energy-efficient windows</li>
          <li><strong>Exterior upgrades:</strong> New siding, significant landscaping, driveway replacement, fencing</li>
          <li><strong>Accessibility modifications:</strong> ADA-compliant modifications, wheelchair ramps, widened doorways</li>
          <li><strong>Safety upgrades:</strong> Earthquake retrofitting, fire sprinkler installation, security systems</li>
        </ul>

        <h3>Work That Generally Does NOT Qualify</h3>

        <ul>
          <li><strong>Routine maintenance:</strong> Painting (unless part of larger renovation), gutter cleaning, lawn care</li>
          <li><strong>Minor repairs:</strong> Fixing a leaky faucet, replacing a broken window pane, patching drywall</li>
          <li><strong>Appliance replacement:</strong> Replacing a dishwasher or refrigerator (unless part of a kitchen remodel)</li>
          <li><strong>Furniture and decor:</strong> New furniture, window treatments, artwork</li>
          <li><strong>Cleaning services:</strong> House cleaning, carpet cleaning, pest control</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h4 className="font-bold text-blue-900 mt-0">The Gray Area</h4>
          <p className="text-blue-800 mb-0">
            Some improvements fall in a gray area. For example, replacing all flooring throughout the home is likely a substantial improvement, while replacing flooring in one room may or may not qualify depending on the scope and cost. The IRS looks at whether the work <strong>adds value, prolongs useful life, or adapts the property to new uses</strong>. When in doubt, document everything and consult your CPA before claiming the deduction.
          </p>
        </div>

        {/* Section 5: Tracking Funds */}
        <h2 id="tracking-funds">How to Track and Document Home Equity Fund Usage</h2>

        <p>
          Proper documentation is important for supporting any tax deduction claim. Tax professionals generally recommend that borrowers keep records for at least <strong>three years after filing</strong> (the IRS standard audit window). Here are the documentation practices that CPAs commonly recommend:
        </p>

        <h3>Step 1: Separate the Money</h3>

        <ul>
          <li><strong>Open a dedicated bank account</strong> for home equity proceeds</li>
          <li><strong>Deposit all loan funds</strong> into this dedicated account</li>
          <li><strong>Pay all improvement expenses</strong> directly from this account</li>
          <li><strong>Do not co-mingle</strong> with personal funds or regular checking</li>
        </ul>

        <h3>Step 2: Document Everything</h3>

        <ul>
          <li><strong>Contractor contracts:</strong> Written agreements with scope of work and payment terms</li>
          <li><strong>Invoices and receipts:</strong> Every payment to contractors, suppliers, and vendors</li>
          <li><strong>Building permits:</strong> Copies of all permits pulled for the project</li>
          <li><strong>Inspection reports:</strong> City/county inspection results</li>
          <li><strong>Before and after photos:</strong> Visual documentation of the improvement</li>
          <li><strong>Bank statements:</strong> Showing funds flowing from home equity account to improvement expenses</li>
          <li><strong>Material receipts:</strong> For DIY projects, keep all material purchase receipts</li>
        </ul>

        <h3>Step 3: Work With Your CPA on the Deductible Portion</h3>

        <p>
          Your CPA or tax professional will use your documentation to calculate the deductible portion of your interest. The general concept involves:
        </p>

        <ul>
          <li><strong>Total home equity interest paid</strong> (from Form 1098)</li>
          <li><strong>Percentage used for qualifying improvements</strong> (total improvement spend / total draws)</li>
          <li><strong>Deductible interest</strong> = Total interest x Qualifying percentage</li>
          <li><strong>Keep your calculation</strong> with your tax records</li>
        </ul>

        <p className="text-sm text-gray-600 italic">
          Note: This is a simplified overview. Your tax professional should perform the actual calculations, as individual circumstances—including the timing of draws, repayments, and the interaction with other deductions—can affect the result.
        </p>

        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 my-6">
          <h4 className="font-bold text-yellow-800 mt-0">Why Dedicated Accounts Matter: IRS Tracing Rules</h4>
          <p className="text-yellow-900 mb-0">
            The IRS uses <strong>&quot;tracing rules&quot;</strong> (Treasury Regulation 1.163-8T) to determine the character of interest based on how borrowed funds are actually used. If you co-mingle home equity funds with personal spending, the IRS can trace each dollar to determine what qualifies. The dedicated account approach described above simplifies this significantly. The tracing rules are technically complex—<strong>ask your CPA or tax attorney</strong> if you have any questions about how they apply to your situation.
          </p>
        </div>

        {/* Section 6: Mixed Use */}
        <h2 id="mixed-use">Mixed-Use Scenarios: Calculating Partial Deductions</h2>

        <p>
          Many borrowers use home equity for a combination of qualifying and non-qualifying purposes. When this happens, you must <strong>allocate the interest proportionally</strong>.
        </p>

        <h3>Mixed-Use Allocation: Simplified Illustrations</h3>

        <p className="text-sm text-gray-600 italic">
          These examples show the general concept of proration. Actual calculations depend on your specific circumstances—consult your CPA before claiming any deduction.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Scenario</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Total Borrowed</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Qualifying Use</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Non-Qualifying</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Deductible %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Kitchen + debt payoff</td>
                <td className="border border-gray-200 px-4 py-2">$100,000</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">$70K (kitchen)</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">$30K (credit cards)</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold">70%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Addition + car + vacation</td>
                <td className="border border-gray-200 px-4 py-2">$150,000</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">$120K (addition)</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">$30K (car + vacation)</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold">80%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Roof + solar + medical</td>
                <td className="border border-gray-200 px-4 py-2">$80,000</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">$65K (roof + solar)</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">$15K (medical bills)</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold">81.25%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">100% renovation</td>
                <td className="border border-gray-200 px-4 py-2">$200,000</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">$200K (full remodel)</td>
                <td className="border border-gray-200 px-4 py-2">$0</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">100%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">100% debt consolidation</td>
                <td className="border border-gray-200 px-4 py-2">$50,000</td>
                <td className="border border-gray-200 px-4 py-2">$0</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">$50K (all personal)</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">0%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>HELOC Draw-by-Draw Tracking</h3>

        <p>
          HELOCs present a unique tracking challenge because you make multiple draws over time. Your CPA will need records showing how each draw was used. Good documentation habits include:
        </p>

        <ol>
          <li><strong>Record every HELOC draw</strong> with date, amount, and purpose</li>
          <li><strong>Match each draw</strong> to specific improvement invoices or personal use</li>
          <li><strong>Provide these records to your CPA</strong> so they can determine the deductible percentage</li>
          <li><strong>Update your records annually</strong> as the mix of draws and repayments changes</li>
        </ol>

        <p className="text-sm text-gray-600 italic">
          The weighted-average calculation for HELOC interest allocation can be complex. This is an area where professional tax guidance is particularly valuable.
        </p>

        {/* Section 7: Cash-Out Refinance */}
        <h2 id="cash-out-refi">Cash-Out Refinance Tax Deduction Rules</h2>

        <p>
          Cash-out refinances follow the <strong>same use-based rules</strong> as home equity loans and HELOCs. The interest deductibility depends on how the cash-out proceeds are used—not on the loan type.
        </p>

        <h3>Two Components of a Cash-Out Refinance</h3>

        <ol>
          <li><strong>Refinance portion:</strong> The amount that pays off your existing mortgage. Interest on this portion is deductible as <strong>acquisition debt</strong> (the original mortgage was used to buy the home)</li>
          <li><strong>Cash-out portion:</strong> The additional amount above your existing mortgage balance. Interest on this portion is deductible <strong>only if used to buy, build, or substantially improve the home</strong></li>
        </ol>

        <h3>Cash-Out Refinance Deduction Example</h3>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
          <p className="text-sm text-gray-600 italic mb-3">Simplified illustration—your CPA should confirm the deductible amounts for your specific situation.</p>
          <p className="font-semibold text-gray-900">Hypothetical Scenario:</p>
          <ul>
            <li>Existing mortgage balance: $400,000</li>
            <li>New cash-out refinance: $550,000</li>
            <li>Cash-out amount: $150,000</li>
            <li>$100,000 used for whole-home renovation</li>
            <li>$50,000 used for debt consolidation</li>
          </ul>
          <p className="font-semibold text-gray-900 mt-4">Deductible Interest Calculation:</p>
          <ul>
            <li>Refinance portion ($400,000): <strong>100% deductible</strong> (acquisition debt)</li>
            <li>Cash-out for renovation ($100,000): <strong>100% deductible</strong> (substantial improvement)</li>
            <li>Cash-out for debt consolidation ($50,000): <strong>Not deductible</strong> (personal use)</li>
            <li>Total deductible debt: $500,000 of $550,000 = <strong>90.9% of interest is deductible</strong></li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h4 className="font-bold text-blue-900 mt-0">Broker&apos;s Perspective</h4>
          <p className="text-blue-800 mb-0">
            When clients plan to use some funds for improvements and some for personal use, I always suggest they <strong>discuss the documentation approach with their CPA first</strong>. Many borrowers find it helpful to keep improvement funds separate—some opt for a smaller cash-out limited to the improvement amount and use a separate HELOC for personal needs. Your tax professional can advise on the best approach for your situation. — <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* Data Hub */}
        <h2 id="data-hub">Tax Deduction Data Hub: 2026 Numbers</h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Data Point</th>
                <th className="border border-gray-200 px-4 py-2 text-left">2026 Value</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Combined mortgage debt limit (MFJ)</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">$750,000</td>
                <td className="border border-gray-200 px-4 py-2">TCJA limit, pending legislative update</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Combined limit (MFS)</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">$375,000</td>
                <td className="border border-gray-200 px-4 py-2">Half of MFJ limit</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Grandfathered limit (pre-12/15/2017)</td>
                <td className="border border-gray-200 px-4 py-2">$1,000,000</td>
                <td className="border border-gray-200 px-4 py-2">For mortgages originated before cutoff</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Standard deduction (Single)</td>
                <td className="border border-gray-200 px-4 py-2">~$15,700*</td>
                <td className="border border-gray-200 px-4 py-2">*Projected—confirm with IRS or your CPA</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Standard deduction (MFJ)</td>
                <td className="border border-gray-200 px-4 py-2">~$31,400*</td>
                <td className="border border-gray-200 px-4 py-2">*Projected—confirm with IRS or your CPA</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">SALT deduction cap</td>
                <td className="border border-gray-200 px-4 py-2">$10,000</td>
                <td className="border border-gray-200 px-4 py-2">State/local tax deduction limit</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">IRS guidance reference</td>
                <td className="border border-gray-200 px-4 py-2">IR-2018-32</td>
                <td className="border border-gray-200 px-4 py-2">Key IRS advisory on home equity deductions</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Tax code section</td>
                <td className="border border-gray-200 px-4 py-2">IRC 163(h)(3)</td>
                <td className="border border-gray-200 px-4 py-2">Qualified residence interest provision</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Tracing regulation</td>
                <td className="border border-gray-200 px-4 py-2">Treas. Reg. 1.163-8T</td>
                <td className="border border-gray-200 px-4 py-2">Interest tracing rules for mixed-use debt</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PAA Section */}
        <h2 id="paa">People Also Ask: Home Equity Tax Deduction</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Is HELOC interest still tax deductible in 2026?</h3>
            <p className="mb-0">
              Yes—but only if the HELOC funds are used to <strong>buy, build, or substantially improve</strong> the home that secures the loan. Under the TCJA rules that remain in effect for 2026, using HELOC funds for debt consolidation, personal expenses, or any non-housing purpose means the interest is not deductible. The name of the loan product is irrelevant to the IRS; what matters is how the funds are actually used.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">How much home equity loan interest can I deduct?</h3>
            <p className="mb-0">
              You can deduct interest on up to <strong>$750,000 in total qualified mortgage debt</strong> ($375,000 if married filing separately). This limit includes your first mortgage, home equity loan, HELOC, and any other mortgage debt combined. If your total mortgage debt exceeds the limit, you must prorate the deduction. Only interest on funds used for qualifying home improvements counts. You must itemize deductions on Schedule A to claim the deduction.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Can I deduct home equity interest used to pay off credit cards?</h3>
            <p className="mb-0">
              <strong>No.</strong> Under the TCJA, home equity interest used for debt consolidation (including credit card payoff) is not deductible. Before 2018, this interest was deductible up to $100,000 in home equity debt regardless of use. That provision was suspended by the TCJA. While using home equity to pay off high-interest credit cards still makes financial sense due to the lower interest rate, you cannot deduct the interest for tax purposes.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">What form do I need to claim the home equity interest deduction?</h3>
            <p className="mb-0">
              You need <strong>Form 1098</strong> (Mortgage Interest Statement) from your lender, which shows the total interest paid during the tax year. You report the deductible portion on <strong>Schedule A</strong> (Itemized Deductions) of your Form 1040. If you have mixed-use funds, you will need to calculate the deductible percentage and claim only the qualifying portion. Keep your calculation worksheet and supporting documentation with your tax records.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Does it matter whether I have a HELOC or home equity loan for the deduction?</h3>
            <p className="mb-0">
              <strong>No.</strong> The IRS does not distinguish between home equity loans and HELOCs for purposes of the interest deduction. Both products are treated identically under IRC Section 163(h)(3). Whether your loan is a fixed-rate home equity loan, variable-rate HELOC, or cash-out refinance, the deductibility depends solely on how the borrowed funds are used—not the loan type, name, or structure.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">What if the TCJA expires—will all home equity interest become deductible again?</h3>
            <p className="mb-0">
              If the TCJA provisions expire without renewal, the pre-2018 rules would return: home equity interest up to $100,000 in debt would be deductible regardless of use, and the acquisition debt limit would return to $1,000,000. However, Congress may extend the current rules, modify them, or create entirely new provisions. As of February 2026, the legislative status is uncertain. Plan based on current rules and adjust if the law changes.
            </p>
          </div>
        </div>

        {/* Extended FAQ Section */}
        <h2 id="faqs">Extended FAQ: Home Equity Tax Deduction Questions</h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mt-0">{faq.question}</h3>
              <p className="mb-0">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Expert Summary + CTA */}
        <h2 id="expert-summary">Expert Summary: Maximizing Your Home Equity Tax Benefits</h2>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h3 className="font-bold text-blue-900 mt-0">Key Takeaways for Homeowners</h3>
          <ol className="text-blue-800">
            <li><strong>Interest is deductible only for buy, build, or substantially improve</strong>—debt consolidation and personal use do not qualify</li>
            <li><strong>The $750,000 combined limit</strong> covers all mortgage debt on your primary and one second home</li>
            <li><strong>Track every dollar</strong> with a dedicated bank account and complete documentation</li>
            <li><strong>Mixed-use requires proration</strong>—only the qualifying percentage of interest is deductible</li>
            <li><strong>You must itemize</strong> on Schedule A to claim the deduction—check IRS.gov for the current standard deduction threshold</li>
            <li><strong>Cash-out refinances follow the same rules</strong>—the refinance portion is acquisition debt; the cash-out portion depends on use</li>
            <li><strong>The loan name does not matter</strong>—HELOC, home equity loan, and cash-out refinance are all treated the same by the IRS</li>
            <li><strong>Always consult a CPA</strong>—these are general rules and individual situations vary significantly</li>
          </ol>
        </div>

        <div className="bg-green-50 p-8 rounded-xl border border-green-200 my-8 text-center">
          <h3 className="text-2xl font-bold text-green-900 mt-0">Explore Your Home Equity Options</h3>
          <p className="text-green-800 text-lg mb-4">
            I help homeowners understand their home equity options—whether that is a HELOC, home equity loan, or cash-out refinance. I walk every client through the available products and always recommend connecting with a CPA or tax attorney to confirm the tax treatment for your specific situation.
          </p>
          <p className="text-green-900 font-bold text-xl mb-2">
            Call Mo Abdel: <a href="tel:9498229662" className="text-green-700 hover:underline">(949) 822-9662</a>
          </p>
          <p className="text-green-800">
            NMLS #1426884 | Lumin Lending NMLS #2716106
          </p>
          <p className="text-green-800 text-sm mt-3">
            Free consultation. No obligation. Access to 200+ lenders for the best rates on your home equity loan or HELOC.
          </p>
        </div>

        <h2>Related Resources</h2>

        <ul>
          <li><Link href="/home-equity-guide" className="text-blue-600 hover:underline">Complete Home Equity Guide: All Options</Link></li>
          <li><Link href="/blog/heloc-vs-home-equity-loan-2026" className="text-blue-600 hover:underline">HELOC vs Home Equity Loan: Which Is Better?</Link></li>
          <li><Link href="/blog/home-equity-for-renovations-2026" className="text-blue-600 hover:underline">Using Home Equity for Renovations</Link></li>
          <li><Link href="/blog/cash-out-refinance-how-it-works-2026" className="text-blue-600 hover:underline">Cash-Out Refinance: How It Works</Link></li>
          <li><Link href="/blog/heloc-vs-cash-out-refinance-2026" className="text-blue-600 hover:underline">HELOC vs Cash-Out Refinance Comparison</Link></li>
          <li><Link href="/blog/home-equity-refinancing-guide-2026" className="text-blue-600 hover:underline">Home Equity &amp; Refinancing Guide 2026</Link></li>
        </ul>
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending NMLS #2716106<br />
            <br />
            <strong>Content last reviewed:</strong> February 2026. This page is reviewed quarterly for accuracy.<br />
            <br />
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. <strong>Tax Disclaimer:</strong> This article is for <strong>general educational and informational purposes only</strong> and does not constitute tax, legal, or financial advice. Tax laws are complex, subject to change, and individual circumstances vary significantly. The information presented reflects general rules under the Tax Cuts and Jobs Act as understood in February 2026 and may not reflect subsequent legislative changes. Numerical examples are simplified illustrations and should not be relied upon for tax planning. <strong>Always consult with a qualified tax professional (CPA, enrolled agent, or tax attorney) before making any decisions based on potential tax deductions.</strong> Mo Abdel and Lumin Lending are mortgage professionals and do not provide tax, legal, or accounting advice.
          </p>
        </div>
      </footer>
    </article>
  );
}
