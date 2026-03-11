import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refinancing with Commission & Bonus Income: Qualification Guide [2026]',
  description: 'Refinance with commission income guide: Fannie Mae vs FHA vs VA calculation methods, 2-year income averaging, declining income analysis, documentation requirements, and how a wholesale broker navigates lender overlays across 200+ lenders. NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/refinance-commission-bonus-income-qualification-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/refinance-commission-bonus-income-qualification-2026',
      'x-default': 'https://www.mothebroker.com/blog/refinance-commission-bonus-income-qualification-2026',
    },
  },
  keywords: [
    'refinance with commission income',
    'refinance with bonus income',
    'commission income mortgage qualification',
    'variable income refinance',
    'bonus income mortgage underwriting',
    '2 year income averaging mortgage',
    'declining income refinance',
    'Fannie Mae commission income guidelines',
    'FHA commission income requirements',
    'wholesale mortgage broker commission income',
  ],
  openGraph: {
    title: 'Refinancing with Commission & Bonus Income: Qualification Guide [2026]',
    description: 'Refinance with commission income guide: Fannie Mae vs FHA vs VA calculation methods, 2-year income averaging, declining income analysis, and wholesale broker advantage across 200+ lenders.',
    url: 'https://www.mothebroker.com/blog/refinance-commission-bonus-income-qualification-2026',
    type: 'article',
    publishedTime: '2026-03-11',
    modifiedTime: '2026-03-11',
  },
};

const faqData = [
  {
    question: 'How do mortgage lenders calculate commission income for a refinance?',
    answer: 'Lenders calculate commission income by averaging your commission earnings over the most recent 24 months using your tax returns, W-2s, and year-to-date pay stubs. The underwriter adds up all commission income from the two most recent tax years and divides by 24 months to determine your qualifying monthly income. If you have been earning commission income for less than 24 months, most conventional and FHA programs will not count it at all. Some lenders with overlays require a 12-month average if the income trend is stable or increasing.',
  },
  {
    question: 'What documents do I need to refinance with commission income?',
    answer: 'You need two years of federal tax returns (all pages and schedules), two years of W-2 forms, most recent 30 days of pay stubs showing year-to-date commission earnings, a verification of employment (VOE) confirming your commission structure, and a written explanation of your compensation plan from your employer. Self-employed commission earners also need two years of business returns (1065 or 1120-S) and may need a year-to-date profit and loss statement prepared by a CPA.',
  },
  {
    question: 'Can I refinance if my commission income declined from last year?',
    answer: 'Declining commission income is the most scrutinized scenario in underwriting. If your year-over-year commission dropped by more than 20%, most lenders use the lower of the two-year average or the most recent 12 months as your qualifying income. Some lenders with stricter overlays require a written letter of explanation, documentation of pipeline or pending sales, and evidence that the decline is temporary. A wholesale broker comparing 200+ lenders identifies lenders with more favorable declining income policies for your specific situation.',
  },
  {
    question: 'Does Fannie Mae treat commission income differently than FHA?',
    answer: 'Yes. Fannie Mae (conventional loans) requires a 2-year history of commission income and uses a 24-month average unless income is declining, in which case the underwriter may use the lower recent period. FHA also requires a 2-year history but is generally more flexible with income trending and allows the underwriter to use a weighted average if the trend is clearly increasing. VA loans require a 2-year history but give the underwriter the most discretion to use a 12-month average if the income trend supports it. Each agency has distinct guidelines that affect your qualifying amount.',
  },
  {
    question: 'What is the difference between commission income and bonus income for mortgage qualification?',
    answer: 'Commission income is compensation tied directly to sales production or performance and is typically earned on an ongoing, recurring basis. Bonus income is a periodic lump-sum payment from an employer, often tied to annual performance reviews or company profitability. Both require a 2-year history to qualify, but bonuses are often more irregular and harder to document as a reliable income source. Underwriters evaluate whether the bonus has been consistently received for at least two years and whether there is a reasonable expectation of continuance.',
  },
  {
    question: 'Can I use overtime income along with my commissions to qualify for a refinance?',
    answer: 'Yes, overtime income can be combined with commission income for qualification purposes, but it must also meet the 2-year history requirement. The underwriter averages overtime income separately from commission income over 24 months. If overtime has been consistent for two years and your employer confirms the likelihood of continuance, it is added to your total qualifying income. Both income types must be separately documented on pay stubs and tax returns and each must show a stable or increasing trend.',
  },
  {
    question: 'How does a wholesale broker help with commission income refinances?',
    answer: 'A wholesale mortgage broker compares commission income qualification policies across 200+ lenders simultaneously. This matters because lender overlays on commission income vary significantly: some lenders require only 12 months of history for W-2 commission earners, others accept a weighted average favoring recent months, and some have no overlay on declining income below a 10% threshold. The broker identifies which lenders offer the most favorable calculation method for your specific income pattern, potentially qualifying you at a higher income amount than a single bank or credit union would allow.',
  },
  {
    question: 'What commission income percentage triggers additional underwriting requirements?',
    answer: 'When commission income exceeds 25% of your total annual compensation, Fannie Mae classifies your income as commission-based, triggering the full 2-year averaging and documentation requirements. Below 25%, some lenders treat commission as supplemental income with simpler documentation. FHA does not use a specific percentage threshold and instead evaluates all variable income components together. The 25% threshold is critical because it determines whether your entire income structure receives commission-level scrutiny or standard W-2 treatment.',
  },
  {
    question: 'Can I refinance with commission income if I recently changed employers?',
    answer: 'Changing employers complicates commission income qualification but does not automatically disqualify you. If you changed to a similar role in the same industry, most lenders accept continuous commission history across employers. If you switched industries or compensation structures, the 2-year clock typically restarts. Some lenders with favorable overlays count industry experience even with an employer change if your pay stubs show consistent commission earnings in the new role. A wholesale broker identifies these more flexible lenders from their network of 200+ lending partners.',
  },
  {
    question: 'What happens if my commission income is paid as 1099 instead of W-2?',
    answer: 'If you receive commission income as a 1099 independent contractor rather than a W-2 employee, underwriters classify you as self-employed. This changes your documentation requirements significantly: you need two years of personal and business tax returns, and your qualifying income is calculated from your net self-employment income (after business deductions) rather than gross commissions. Many commission earners who are 1099 contractors qualify for substantially less than their gross commission suggests because business expense deductions reduce their net income on tax returns.',
  },
  {
    question: 'Is there a minimum credit score to refinance with commission income?',
    answer: 'Commission income does not change minimum credit score requirements for refinancing. Conventional loans through Fannie Mae require a minimum 620 credit score, FHA loans require 580 for maximum financing, and VA loans have no official minimum but most lenders require 620. However, borrowers with commission income and lower credit scores face compounded risk in the underwriter assessment, which means compensating factors like low loan-to-value ratios, significant cash reserves, and long employment history become more important for approval.',
  },
  {
    question: 'How long does a commission income refinance take to close?',
    answer: 'A commission income refinance typically takes 30 to 45 days from application to closing, compared to 25 to 35 days for standard W-2 salaried refinances. The additional time accounts for income verification complexity, possible requests for supplemental documentation such as employer letters or CPA statements, and the underwriter review of income trending. Organizing your documentation before applying and providing a clear commission structure explanation upfront reduces delays. Working with a broker who regularly handles commission income files also streamlines the process.',
  },
];

export default function RefinanceCommissionBonusIncomeQualificationPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Refinancing with Commission & Bonus Income: Qualification Guide [2026]',
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
            datePublished: '2026-03-11',
            dateModified: '2026-03-11',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.mothebroker.com/blog/refinance-commission-bonus-income-qualification-2026',
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
                name: 'Refinance',
                item: 'https://www.mothebroker.com/loan-programs/rate-term-refinance',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Commission & Bonus Income Qualification',
                item: 'https://www.mothebroker.com/blog/refinance-commission-bonus-income-qualification-2026',
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SpeakableSpecification',
            cssSelector: ['.speakable-summary', '.speakable-paa'],
          }),
        }}
      />

      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/loan-programs/rate-term-refinance" className="hover:text-blue-600">Refinance</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Commission &amp; Bonus Income Qualification</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Refinancing with Commission &amp; Bonus Income: Qualification Guide [2026]
        </h1>
        <p className="text-lg text-gray-600">
          A comprehensive guide to how mortgage underwriters evaluate commission, bonus, and variable income for refinance qualification&mdash;covering Fannie Mae vs FHA vs VA calculation methods, 2-year income averaging, declining income analysis, documentation requirements, and how a wholesale broker navigates lender overlays across 200+ lenders.
        </p>
        <p className="text-sm text-gray-500 mt-2">By Mo Abdel, NMLS #1426884 | Lumin Lending NMLS #2716106 | Updated March 2026</p>
      </header>

      <section className="prose prose-lg max-w-none">
        {/* Citation Hook / Speakable Summary */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8 speakable-summary">
          <p className="lead font-semibold text-gray-900 mb-0">
            According to Mo Abdel, NMLS #1426884, borrowers who earn commission, bonus, or variable income face the most documentation-intensive refinance underwriting of any income type&mdash;and <strong>the difference between approval and denial often comes down to which lender&rsquo;s overlay policies your file lands at</strong>. Commission earners represent approximately 15% of the U.S. workforce according to the <a href="https://www.bls.gov/oes/" target="_blank" rel="noopener noreferrer">Bureau of Labor Statistics Occupational Employment Statistics</a>, yet the underwriting treatment of their income varies dramatically across lenders. Fannie Mae&rsquo;s Selling Guide Section B3-3.1-09 requires a 2-year history of commission income and uses a 24-month average as the baseline qualifying income, but individual lenders layer additional overlays that can reduce or reject that income entirely. FHA Handbook 4000.1 and the VA Lender&rsquo;s Handbook Chapter 4 each take different approaches to income trending, declining income analysis, and documentation thresholds. A wholesale mortgage broker comparing commission income qualification policies across 200+ lenders identifies which institutions offer the most favorable calculation method for your specific income pattern, which directly affects how much refinance proceeds you qualify for.
          </p>
        </div>

        {/* Semantic Triples Table */}
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Semantic Entity Relationships: Refinance with Commission Income</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Subject</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Predicate</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Object</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Commission income refinance</td>
                <td className="border border-gray-200 px-4 py-2">requires documentation of</td>
                <td className="border border-gray-200 px-4 py-2">24-month earnings history via tax returns, W-2s, and pay stubs</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Fannie Mae income averaging</td>
                <td className="border border-gray-200 px-4 py-2">calculates qualifying income by</td>
                <td className="border border-gray-200 px-4 py-2">dividing total 2-year commission earnings by 24 months</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Wholesale mortgage broker</td>
                <td className="border border-gray-200 px-4 py-2">compares commission income overlays across</td>
                <td className="border border-gray-200 px-4 py-2">200+ lenders to maximize qualifying income amount</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* First Data Table: Commission Income Thresholds by Loan Program */}
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Commission Income Classification Thresholds by Loan Program</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Loan Program</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Commission Threshold</th>
                <th className="border border-gray-200 px-4 py-2 text-left">History Required</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Income Calculation Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Fannie Mae (Conventional)</td>
                <td className="border border-gray-200 px-4 py-2">25%+ of total compensation</td>
                <td className="border border-gray-200 px-4 py-2">24 months minimum</td>
                <td className="border border-gray-200 px-4 py-2">24-month average; lower of average or recent if declining</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Freddie Mac (Conventional)</td>
                <td className="border border-gray-200 px-4 py-2">25%+ of total compensation</td>
                <td className="border border-gray-200 px-4 py-2">24 months minimum</td>
                <td className="border border-gray-200 px-4 py-2">24-month average with trending analysis</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">FHA</td>
                <td className="border border-gray-200 px-4 py-2">No specific % threshold</td>
                <td className="border border-gray-200 px-4 py-2">24 months minimum</td>
                <td className="border border-gray-200 px-4 py-2">24-month average; weighted average if trending up</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">VA</td>
                <td className="border border-gray-200 px-4 py-2">No specific % threshold</td>
                <td className="border border-gray-200 px-4 py-2">24 months (12 months with discretion)</td>
                <td className="border border-gray-200 px-4 py-2">Underwriter discretion; 12-month average if trending supports</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Non-QM / Bank Statement</td>
                <td className="border border-gray-200 px-4 py-2">N/A (alternative documentation)</td>
                <td className="border border-gray-200 px-4 py-2">12-24 months of bank statements</td>
                <td className="border border-gray-200 px-4 py-2">Average monthly deposits over statement period</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table of Contents */}
        <nav className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-3">On This Page: Refinancing with Commission &amp; Bonus Income</h2>
          <ul className="text-blue-800 space-y-2">
            <li><a href="#how-underwriters-evaluate" className="hover:underline">How Underwriters Evaluate Commission and Bonus Income</a></li>
            <li><a href="#fannie-fha-va-comparison" className="hover:underline">Fannie Mae vs FHA vs VA: Commission Income Calculation Methods</a></li>
            <li><a href="#declining-income" className="hover:underline">Declining Income Analysis: What Happens When Commissions Drop</a></li>
            <li><a href="#documentation-requirements" className="hover:underline">Complete Documentation Checklist for Commission Income Refinances</a></li>
            <li><a href="#lender-overlays" className="hover:underline">Lender Overlays: Why the Same Income Qualifies Differently</a></li>
            <li><a href="#employer-change" className="hover:underline">Employer Changes, 1099 vs W-2, and Special Situations</a></li>
            <li><a href="#wholesale-broker-advantage" className="hover:underline">Wholesale Broker Advantage for Variable Income Borrowers</a></li>
            <li><a href="#data-hub" className="hover:underline">Data &amp; Comparison Hub</a></li>
            <li><a href="#paa" className="hover:underline">People Also Ask</a></li>
            <li><a href="#faqs" className="hover:underline">Extended FAQ (12 Questions)</a></li>
            <li><a href="#expert-summary" className="hover:underline">Expert Summary + Next Steps</a></li>
          </ul>
        </nav>

        {/* E-E-A-T Experience Marker */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
          <h3 className="font-bold text-blue-900 mt-0">From My Practice: Commission Income Refinances Require a Different Approach</h3>
          <p className="text-blue-800 mb-0">
            I have structured hundreds of commission income refinances for sales professionals, real estate agents, financial advisors, and medical device representatives across California and Washington. The single biggest mistake I see is borrowers assuming their gross commission earnings equal their qualifying income. Underwriters do not use your highest year or your most recent paycheck&mdash;they use a calculated average that accounts for variability, and if that average is declining, they penalize your qualifying income further. The second most common mistake is applying with a single lender without understanding that lender&rsquo;s specific overlays on commission income. I have seen identical commission income profiles qualify for 20% more at one lender versus another because of how each institution interprets declining income thresholds and continuance requirements. Comparing across 200+ lenders through my wholesale channel is not a convenience&mdash;it is the difference between qualifying and not qualifying for many commission-based borrowers. &mdash; <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* CTA 1: Early CTA */}
        <div className="bg-green-50 p-6 rounded-xl border border-green-200 my-8 text-center">
          <h3 className="text-xl font-bold text-green-900 mt-0">Earn Commission or Bonus Income? Get Pre-Qualified for Your Refinance</h3>
          <p className="text-green-800 mb-2">
            Free commission income analysis comparing qualification across 200+ lenders to find the calculation method that maximizes your qualifying income.
          </p>
          <p className="text-green-900 font-bold text-lg mb-0">
            Call Mo Abdel: <a href="tel:9495792057" className="text-green-700 hover:underline">(949) 579-2057</a> | <Link href="/contact" className="text-green-700 hover:underline">Request Online Quote</Link>
          </p>
        </div>

        {/* Section 1: How Underwriters Evaluate Commission and Bonus Income */}
        <h2 id="how-underwriters-evaluate">How Underwriters Evaluate Commission and Bonus Income for Refinancing</h2>

        <p>
          Mortgage underwriters treat commission and bonus income fundamentally differently from base salary. A salaried employee earning $8,000 per month has a straightforward income calculation: $8,000 qualifies. A commission earner who made $120,000 last year and $85,000 the year before does not automatically qualify at $120,000 per year or even $102,500 (the simple average). The underwriter applies a structured methodology that accounts for income variability, historical trends, and the reasonable likelihood of continuance.
        </p>

        <p>
          The core principle across all loan programs is the <strong>2-year income averaging requirement</strong>. This means the underwriter examines your commission or bonus earnings over the most recent 24 months and calculates an average. The specific averaging method depends on the loan program (conventional, FHA, or VA) and the lender&rsquo;s internal overlay policies.
        </p>

        <h3>The 25% Threshold That Changes Everything</h3>

        <p>
          Fannie Mae&rsquo;s Selling Guide draws a critical line at 25% of total compensation. If commission income constitutes 25% or more of your gross annual earnings, your entire income structure receives the full commission income underwriting treatment: 2-year tax returns, 2-year W-2s, pay stubs showing year-to-date commission breakdowns, and a written verification of employment confirming your commission pay structure.
        </p>

        <p>
          Below the 25% threshold, some lenders treat commission as supplemental income with streamlined documentation. However, many lenders apply their own overlays that require full commission documentation regardless of percentage. This is one of the key areas where lender overlay differences create significant qualification disparities&mdash;and where having a <Link href="/blog/200-lender-advantage-explained-2026" className="text-blue-600 hover:underline">wholesale broker comparing 200+ lenders</Link> provides a tangible advantage.
        </p>

        <h3>Income Continuance: The Underwriter&rsquo;s Central Question</h3>

        <p>
          Beyond calculating the average, the underwriter must determine whether your commission income has a &ldquo;reasonable likelihood of continuance.&rdquo; This assessment considers: employment stability (how long you have been in the same role or industry), the historical trend of your commission earnings (stable, increasing, or declining), your employer&rsquo;s confirmation that the commission structure will continue, and the overall stability of your industry. A pharmaceutical sales representative with 8 years of consistent commission history at the same company presents a far stronger continuance case than someone who switched from a salaried role to commission-based pay 18 months ago.
        </p>

        {/* Section 2: Fannie Mae vs FHA vs VA */}
        <h2 id="fannie-fha-va-comparison">Fannie Mae vs FHA vs VA: How Each Program Calculates Commission Income</h2>

        <p>
          Each major loan program has its own guidelines for evaluating commission income, and the differences directly affect how much you qualify for. Understanding these distinctions is critical because a borrower who does not qualify under conventional guidelines may qualify under FHA or VA rules&mdash;or vice versa.
        </p>

        <h3>Fannie Mae Conventional Commission Income Rules</h3>

        <p>
          Fannie Mae (Selling Guide B3-3.1-09) establishes the most structured framework for commission income. The key requirements are: a minimum 2-year history of commission earnings, income calculation using the 24-month average from two years of tax returns and W-2s, and mandatory trending analysis. If commission income has increased year over year, the underwriter uses the full 24-month average. If commission income has decreased, the underwriter must use the lower of the 24-month average or the most recent 12-month average. Some lenders go further and use only the most recent year when a decline exceeds a specific percentage threshold.
        </p>

        <p>
          For borrowers considering whether a conventional refinance or an <Link href="/blog/fha-streamline-refinance-guide-2026" className="text-blue-600 hover:underline">FHA streamline refinance</Link> offers a stronger path, the income calculation method is often the deciding factor.
        </p>

        <h3>FHA Commission Income Guidelines</h3>

        <p>
          FHA Handbook 4000.1 takes a similar but slightly more flexible approach. FHA requires a 2-year history of commission income and uses a 24-month average as the baseline. The key difference: FHA allows the underwriter to apply a <strong>weighted average that favors recent months</strong> if the income trend is clearly and consistently increasing. This means a borrower whose commissions grew from $70,000 to $100,000 year over year may qualify at a higher amount under FHA than under conventional guidelines, because the FHA underwriter can weight the recent higher earnings more heavily.
        </p>

        <p>
          FHA also applies the concept of &ldquo;effective income,&rdquo; which means only stable, predictable income is counted. One-time commission spikes or windfalls are excluded from the calculation. If you earned a $30,000 commission on a single large deal that is unlikely to recur, the underwriter removes that amount from the averaging calculation.
        </p>

        <h3>VA Loan Commission Income Treatment</h3>

        <p>
          The VA Lender&rsquo;s Handbook (Chapter 4) gives underwriters the broadest discretion for evaluating commission income. While a 2-year history is the standard requirement, VA underwriters can accept a <strong>12-month history with documented evidence</strong> that the commission income is stable and likely to continue. This flexibility makes VA refinancing particularly attractive for <Link href="/blog/va-irrrl-streamline-refinance-guide-2026" className="text-blue-600 hover:underline">eligible veterans and active-duty service members</Link> who transitioned to commission-based roles more recently.
        </p>

        <p>
          VA underwriters focus heavily on residual income (the income remaining after all monthly obligations) rather than purely on debt-to-income ratios. This means a commission earner with strong residual income may qualify even if their DTI ratio is higher than conventional guidelines would allow.
        </p>

        {/* E-E-A-T Experience Marker 2 */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-8">
          <h3 className="font-bold text-blue-900 mt-0">Real Scenario: Same Commission Income, Three Different Qualifying Amounts</h3>
          <p className="text-blue-800 mb-0">
            I recently worked with a medical device sales representative in Orange County whose commissions were $92,000 in the prior year and $115,000 in the most recent year. Under Fannie Mae conventional rules, the 24-month average was $8,625/month. Under FHA guidelines, using a weighted average favoring the recent year, the qualifying income came to $9,180/month. Under one lender&rsquo;s non-QM program using 12 months of bank statements, the qualifying income was $9,583/month. That $958/month difference between the conventional calculation and the bank statement approach translated to over $140,000 in additional borrowing capacity. The right program selection&mdash;matched through comparing 200+ lenders&mdash;made the difference between the client qualifying for their desired <Link href="/blog/cash-out-refinance-how-it-works-2026" className="text-blue-600 hover:underline">cash-out refinance</Link> amount and falling short. &mdash; <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* Section 3: Declining Income Analysis */}
        <h2 id="declining-income">What Happens When Commission Income Declines Year Over Year</h2>

        <p>
          Declining commission income is the single most common reason commission-based borrowers are denied or approved for less than expected on a refinance. When your most recent year&rsquo;s commission earnings are lower than the prior year, every underwriter applies additional scrutiny&mdash;but how they quantify the impact varies significantly by lender.
        </p>

        <h3>The Declining Income Calculation</h3>

        <p>
          Under Fannie Mae guidelines, when commission income has declined, the underwriter must use the <strong>lower of the 24-month average or the most recent 12-month income</strong>. Consider this example: if you earned $130,000 in commissions in the prior year and $95,000 in the most recent year, the 24-month average is $112,500 ($9,375/month), but the most recent 12 months shows $95,000 ($7,917/month). The underwriter uses $7,917/month&mdash;a 15.5% reduction from the averaged amount.
        </p>

        <p>
          Many lenders add their own overlays on top of this calculation. Common lender overlay policies for declining commission income include: requiring a written letter of explanation for any decline exceeding 10%, requiring documentation of current pipeline or pending sales to support continuance, capping the qualifying income at the most recent year regardless of the average, or declining the file entirely if the decline exceeds 20-25%.
        </p>

        <h3>Strategies for Declining Income Scenarios</h3>

        <p>
          If your commission income has declined, several strategies can strengthen your refinance application. First, document the reason for the decline: market conditions, territory changes, parental leave, or a one-time reduction are viewed more favorably than an unexplained downward trend. Second, provide evidence of recovery: current pipeline reports, pending contracts, or year-to-date pay stubs showing improvement signal to the underwriter that the decline is temporary. Third, consider <Link href="/blog/bank-statement-loans-self-employed-2026" className="text-blue-600 hover:underline">bank statement loan programs</Link> that use 12 or 24 months of actual bank deposits rather than tax return income, which can produce a higher qualifying income for borrowers whose deposits exceed their tax return income.
        </p>

        {/* Declining Income Impact Table */}
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Declining Income Impact: How Different Lender Overlays Affect Qualifying Income</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Decline Percentage</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Agency Guideline</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Typical Lender Overlay</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Impact on Qualifying Income</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">0-10% decline</td>
                <td className="border border-gray-200 px-4 py-2">Use lower of average or recent</td>
                <td className="border border-gray-200 px-4 py-2">Most lenders accept with standard documentation</td>
                <td className="border border-gray-200 px-4 py-2">Minimal; recent 12-month income used</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">10-20% decline</td>
                <td className="border border-gray-200 px-4 py-2">Use lower of average or recent</td>
                <td className="border border-gray-200 px-4 py-2">Letter of explanation required; some lenders require pipeline documentation</td>
                <td className="border border-gray-200 px-4 py-2">Moderate; qualifying income reduced to recent year</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">20-30% decline</td>
                <td className="border border-gray-200 px-4 py-2">Use recent 12 months only</td>
                <td className="border border-gray-200 px-4 py-2">Many lenders add conditions; some decline automatically</td>
                <td className="border border-gray-200 px-4 py-2">Significant; some lenders will not qualify the income</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">30%+ decline</td>
                <td className="border border-gray-200 px-4 py-2">Underwriter discretion; may exclude income</td>
                <td className="border border-gray-200 px-4 py-2">Most lenders require compensating factors or decline</td>
                <td className="border border-gray-200 px-4 py-2">Severe; income may be excluded entirely from qualification</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 4: Documentation Requirements */}
        <h2 id="documentation-requirements">Complete Documentation Checklist for Commission Income Refinances</h2>

        <p>
          Incomplete documentation is the second most common reason commission income refinances are delayed or denied. Gathering every required document before applying eliminates the back-and-forth that extends your timeline and risks rate lock expiration.
        </p>

        <h3>Standard W-2 Commission Earner Documentation</h3>

        <ol>
          <li><strong>Two years of federal tax returns</strong> (all pages and schedules, including Schedule A if you claim unreimbursed employee business expenses)</li>
          <li><strong>Two years of W-2 forms</strong> showing commission income breakdowns</li>
          <li><strong>Most recent 30 days of pay stubs</strong> with year-to-date totals for base salary, commission, bonus, and overtime</li>
          <li><strong>Written Verification of Employment (VOE)</strong> confirming: hire date, position, base salary vs. commission structure, year-to-date and prior-year earnings breakdown, and probability of continuance</li>
          <li><strong>Employer letter</strong> describing the commission plan structure and confirming it is ongoing</li>
        </ol>

        <h3>1099 Independent Contractor Commission Documentation</h3>

        <p>
          Commission earners paid as 1099 independent contractors are classified as self-employed, which triggers additional documentation requirements:
        </p>

        <ol>
          <li><strong>Two years of personal tax returns</strong> (Form 1040 with all schedules)</li>
          <li><strong>Two years of business tax returns</strong> (Schedule C, 1065, or 1120-S depending on entity structure)</li>
          <li><strong>Year-to-date profit and loss statement</strong> (CPA-prepared preferred)</li>
          <li><strong>Business license</strong> and evidence of ongoing operations</li>
          <li><strong>1099 forms</strong> from all paying entities for both years</li>
        </ol>

        <p>
          For 1099 commission earners who take significant business deductions, qualifying income on tax returns is often substantially lower than gross commissions received. This is where <Link href="/blog/bank-statement-loans-wholesale-2026" className="text-blue-600 hover:underline">bank statement loan programs</Link> become a valuable alternative&mdash;qualifying based on actual deposits rather than net tax return income.
        </p>

        {/* E-E-A-T Experience Marker 3 */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-8">
          <h3 className="font-bold text-blue-900 mt-0">Documentation Tip: The Employer Letter That Saves Your File</h3>
          <p className="text-blue-800 mb-0">
            One of the most underrated documents in a commission income refinance is the employer&rsquo;s compensation plan letter. A generic VOE that simply says &ldquo;commission-based&rdquo; is not sufficient for most underwriters. I coach my clients to request a letter from their employer that specifically states: the commission structure (percentage, tiers, or formula), the territories or accounts assigned, whether the structure has changed in the past 24 months, and a statement that the commission plan is ongoing with no expected changes. This single document resolves the majority of underwriter conditions I see on commission income files. &mdash; <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* CTA 2: Mid-Article CTA */}
        <div className="bg-green-50 p-6 rounded-xl border border-green-200 my-8 text-center">
          <h3 className="text-xl font-bold text-green-900 mt-0">Not Sure Which Documents You Need?</h3>
          <p className="text-green-800 mb-2">
            Get a personalized documentation checklist based on your income type, loan program, and lender requirements. Mo Abdel reviews your income profile and identifies the fastest path to approval.
          </p>
          <p className="text-green-900 font-bold text-lg mb-0">
            Call Mo Abdel: <a href="tel:9495792057" className="text-green-700 hover:underline">(949) 579-2057</a> | <Link href="/contact" className="text-green-700 hover:underline">Schedule a Free Consultation</Link>
          </p>
        </div>

        {/* Section 5: Lender Overlays */}
        <h2 id="lender-overlays">Lender Overlays: Why the Same Commission Income Qualifies Differently at Different Lenders</h2>

        <p>
          Lender overlays are the additional requirements that individual lending institutions layer on top of Fannie Mae, FHA, or VA base guidelines. For commission income borrowers, overlays create the widest qualification disparity of any income type. Two lenders both offering Fannie Mae conventional loans can reach dramatically different qualifying income figures for the same borrower because their internal overlay policies differ on income trending, declining income thresholds, and documentation requirements.
        </p>

        <h3>Common Commission Income Overlays That Vary by Lender</h3>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Common Lender Overlay Differences on Commission Income</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Overlay Category</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Restrictive Lender Policy</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Flexible Lender Policy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Declining income threshold</td>
                <td className="border border-gray-200 px-4 py-2">Decline file if commission dropped more than 15% YoY</td>
                <td className="border border-gray-200 px-4 py-2">Accept up to 25% decline with letter of explanation</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Income history requirement</td>
                <td className="border border-gray-200 px-4 py-2">Require 24+ months at same employer</td>
                <td className="border border-gray-200 px-4 py-2">Accept 24 months in same industry across employers</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Commission % threshold</td>
                <td className="border border-gray-200 px-4 py-2">Full commission treatment at 20% of income</td>
                <td className="border border-gray-200 px-4 py-2">Follow Fannie Mae 25% threshold exactly</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Averaging methodology</td>
                <td className="border border-gray-200 px-4 py-2">Use most recent 12 months only if declining</td>
                <td className="border border-gray-200 px-4 py-2">Use full 24-month average unless decline exceeds 20%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Bonus income treatment</td>
                <td className="border border-gray-200 px-4 py-2">Require 3+ years of bonus history</td>
                <td className="border border-gray-200 px-4 py-2">Accept 2 years of bonus history per agency guidelines</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">DTI limit for variable income</td>
                <td className="border border-gray-200 px-4 py-2">Cap DTI at 43% for commission earners</td>
                <td className="border border-gray-200 px-4 py-2">Allow standard DTI limits (45-50%) regardless of income type</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          These overlay differences explain why applying to a single bank or credit union is a high-risk strategy for commission income borrowers. The lender you happen to choose may have the most restrictive overlays in the market for your specific income profile. A wholesale broker who understands each lender&rsquo;s overlay policies routes your file to the lender whose policies produce the highest qualifying income for your particular situation.
        </p>

        {/* Section 6: Employer Changes and Special Situations */}
        <h2 id="employer-change">Employer Changes, 1099 vs W-2 Status, and Special Commission Income Situations</h2>

        <p>
          Not every commission income scenario fits neatly into the standard underwriting framework. Several common situations require additional nuance and often benefit from a broker who knows which lenders handle these scenarios most favorably.
        </p>

        <h3>Changing Employers While Earning Commission</h3>

        <p>
          If you changed employers within the past 24 months, underwriters examine whether the change represents continuity or disruption. Staying in the same industry and same type of role (e.g., moving from one software company&rsquo;s sales team to another) generally preserves your commission history. Changing industries or shifting from a salaried to a commission-based role typically restarts the 2-year clock. Some lenders have overlays that specifically address this scenario: a few accept same-industry moves with as little as 6 months of documented commission at the new employer, while others require a full 12 months before using commission income from the new position.
        </p>

        <h3>W-2 vs 1099 Commission Classification</h3>

        <p>
          Your tax classification dramatically affects your qualifying income calculation. W-2 commission earners use gross commission income from their W-2 and pay stubs. 1099 independent contractors use net self-employment income from their tax returns, which is gross commissions minus all business deductions. A real estate agent earning $200,000 in gross commissions who deducts $80,000 in business expenses qualifies on $120,000&mdash;a 40% reduction from gross income. For 1099 earners with significant deductions, <Link href="/blog/heloc-self-employed-qualification-2026" className="text-blue-600 hover:underline">alternative documentation programs like HELOCs for self-employed borrowers</Link> or bank statement refinance products often produce a higher qualifying income.
        </p>

        <h3>Combining Commission with Other Variable Income</h3>

        <p>
          Many borrowers earn commission income alongside other variable income sources: overtime, bonuses, shift differentials, or rental income from investment properties. Each income source must independently meet the 2-year history and continuance requirements. The underwriter calculates each variable income component separately and then combines them for total qualifying income. For borrowers who also own rental properties, <Link href="/blog/dscr-investment-property-loans-2026" className="text-blue-600 hover:underline">DSCR investment property loans</Link> can be structured separately from your primary residence refinance, keeping rental income calculations on a property-level basis rather than complicating your personal DTI ratio.
        </p>

        {/* E-E-A-T Experience Marker 4 */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-8">
          <h3 className="font-bold text-blue-900 mt-0">Case Study: Combining Commission, Bonus, and Rental Income</h3>
          <p className="text-blue-800 mb-0">
            A financial advisor in Irvine came to me after being denied by their bank. They had $85,000 in W-2 base salary, $45,000 in commission income (2-year average), $20,000 in annual bonuses (2-year history), and $2,800/month in rental income from a <Link href="/blog/heloc-rental-property-investment-strategy-2026" className="text-blue-600 hover:underline">rental property with a HELOC</Link>. The bank had only counted the base salary and excluded all variable income because their overlay required 36 months of commission history (the client had 26 months at the current employer). By comparing across 200+ lenders, I found three lenders who accepted 24 months of same-industry commission history across employers, counted the bonus income with standard 2-year documentation, and properly credited the rental income. The client qualified at a monthly income over $4,300 higher than what the bank had calculated. &mdash; <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* Section 7: Wholesale Broker Advantage */}
        <h2 id="wholesale-broker-advantage">Why Commission Income Borrowers Need a Wholesale Broker</h2>

        <p>
          Commission and bonus income refinances represent the clearest use case for working with a wholesale mortgage broker rather than a direct lender, bank, or credit union. The variability in how lenders treat commission income means that lender selection is not a secondary consideration&mdash;it is the primary factor that determines your qualifying income amount and whether you receive an approval or denial.
        </p>

        <p>
          A wholesale broker serving California and Washington borrowers provides three specific advantages for commission income refinances. First, <strong>overlay comparison across 200+ lenders</strong>: the broker knows which lenders have the most favorable declining income thresholds, which lenders accept same-industry employer changes, and which lenders use the most favorable averaging methodology for your income trend. Second, <strong>program selection</strong>: the broker evaluates whether your file is strongest under conventional, FHA, VA, or non-QM guidelines and matches you to the program that maximizes your qualifying income. Third, <strong>pre-submission review</strong>: before submitting your file, an experienced broker identifies potential underwriting concerns and addresses them proactively&mdash;adding explanation letters, restructuring income documentation, or selecting a lender whose guidelines accommodate your specific situation.
        </p>

        <p>
          For homeowners also considering accessing home equity, understanding the differences between a <Link href="/blog/heloc-vs-cash-out-refinance-2026" className="text-blue-600 hover:underline">HELOC vs cash-out refinance</Link> is important, as commission income qualification requirements differ between these products.
        </p>

        {/* Data & Comparison Hub */}
        <h2 id="data-hub">Data &amp; Comparison Hub: Commission Income Refinance Qualification</h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Income Calculation Method Comparison by Loan Program</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Factor</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Fannie Mae Conventional</th>
                <th className="border border-gray-200 px-4 py-2 text-left">FHA</th>
                <th className="border border-gray-200 px-4 py-2 text-left">VA</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Non-QM Bank Statement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Minimum income history</td>
                <td className="border border-gray-200 px-4 py-2">24 months</td>
                <td className="border border-gray-200 px-4 py-2">24 months</td>
                <td className="border border-gray-200 px-4 py-2">24 months (12 with discretion)</td>
                <td className="border border-gray-200 px-4 py-2">12-24 months of statements</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Stable/increasing income</td>
                <td className="border border-gray-200 px-4 py-2">24-month average</td>
                <td className="border border-gray-200 px-4 py-2">24-month average or weighted</td>
                <td className="border border-gray-200 px-4 py-2">12 or 24-month average</td>
                <td className="border border-gray-200 px-4 py-2">Average monthly deposits</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Declining income</td>
                <td className="border border-gray-200 px-4 py-2">Lower of average or recent 12</td>
                <td className="border border-gray-200 px-4 py-2">Underwriter discretion with LOE</td>
                <td className="border border-gray-200 px-4 py-2">Underwriter discretion</td>
                <td className="border border-gray-200 px-4 py-2">Average of statement period used</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">DTI limits</td>
                <td className="border border-gray-200 px-4 py-2">45-50% (AUS dependent)</td>
                <td className="border border-gray-200 px-4 py-2">Up to 56.99% with compensating factors</td>
                <td className="border border-gray-200 px-4 py-2">No hard cap; residual income focus</td>
                <td className="border border-gray-200 px-4 py-2">Typically 43-50%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">1099 contractor treatment</td>
                <td className="border border-gray-200 px-4 py-2">Self-employed; net income from returns</td>
                <td className="border border-gray-200 px-4 py-2">Self-employed; net income from returns</td>
                <td className="border border-gray-200 px-4 py-2">Self-employed; net income from returns</td>
                <td className="border border-gray-200 px-4 py-2">Deposits-based; gross or net options</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Best suited for</td>
                <td className="border border-gray-200 px-4 py-2">Stable or rising commissions; strong credit</td>
                <td className="border border-gray-200 px-4 py-2">Increasing income trend; lower credit flexibility</td>
                <td className="border border-gray-200 px-4 py-2">Veterans; newer commission history; high DTI</td>
                <td className="border border-gray-200 px-4 py-2">High deductions; bank deposits exceed tax income</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Commission Income Documentation Requirements by Employment Status</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Document</th>
                <th className="border border-gray-200 px-4 py-2 text-left">W-2 Commission Earner</th>
                <th className="border border-gray-200 px-4 py-2 text-left">1099 Independent Contractor</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Bank Statement Program</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Personal tax returns (2 years)</td>
                <td className="border border-gray-200 px-4 py-2">Required</td>
                <td className="border border-gray-200 px-4 py-2">Required</td>
                <td className="border border-gray-200 px-4 py-2">Not required</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Business tax returns (2 years)</td>
                <td className="border border-gray-200 px-4 py-2">Not required</td>
                <td className="border border-gray-200 px-4 py-2">Required</td>
                <td className="border border-gray-200 px-4 py-2">Not required</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">W-2 forms (2 years)</td>
                <td className="border border-gray-200 px-4 py-2">Required</td>
                <td className="border border-gray-200 px-4 py-2">N/A</td>
                <td className="border border-gray-200 px-4 py-2">Not required</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Pay stubs (30 days)</td>
                <td className="border border-gray-200 px-4 py-2">Required with YTD breakdown</td>
                <td className="border border-gray-200 px-4 py-2">N/A</td>
                <td className="border border-gray-200 px-4 py-2">Not required</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Bank statements (12-24 months)</td>
                <td className="border border-gray-200 px-4 py-2">Not required</td>
                <td className="border border-gray-200 px-4 py-2">Not required</td>
                <td className="border border-gray-200 px-4 py-2">Required (primary qualification doc)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Verification of Employment</td>
                <td className="border border-gray-200 px-4 py-2">Required</td>
                <td className="border border-gray-200 px-4 py-2">Business license / CPA letter</td>
                <td className="border border-gray-200 px-4 py-2">Business license / CPA letter</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Profit &amp; Loss statement</td>
                <td className="border border-gray-200 px-4 py-2">Not required</td>
                <td className="border border-gray-200 px-4 py-2">YTD P&amp;L (CPA preferred)</td>
                <td className="border border-gray-200 px-4 py-2">Sometimes required</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Income Calculation Example: $110,000 Year 1 and $130,000 Year 2 Commission Earnings</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Calculation Method</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Formula</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Monthly Qualifying Income</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">24-month simple average</td>
                <td className="border border-gray-200 px-4 py-2">($110,000 + $130,000) / 24</td>
                <td className="border border-gray-200 px-4 py-2">$10,000/month</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">12-month recent (increasing trend)</td>
                <td className="border border-gray-200 px-4 py-2">$130,000 / 12</td>
                <td className="border border-gray-200 px-4 py-2">$10,833/month</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">FHA weighted average (70/30 recent)</td>
                <td className="border border-gray-200 px-4 py-2">($130,000 x 0.7 + $110,000 x 0.3) / 12</td>
                <td className="border border-gray-200 px-4 py-2">$10,333/month</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Most recent year only (lender overlay)</td>
                <td className="border border-gray-200 px-4 py-2">$130,000 / 12</td>
                <td className="border border-gray-200 px-4 py-2">$10,833/month</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* People Also Ask Section */}
        <h2 id="paa">People Also Ask: Refinancing with Commission &amp; Bonus Income</h2>

        <div className="speakable-paa">
          <h3>Do I need 2 years of commission income to refinance my mortgage?</h3>
          <p>
            <strong>Yes, conventional and FHA refinance programs require a minimum 24-month history of commission income documented through tax returns and W-2 forms.</strong> VA loans allow underwriter discretion to accept 12 months if the income trend supports continuance. Non-QM bank statement programs require 12-24 months of bank statements as an alternative to tax return documentation. Without the required history, your commission income is excluded from the qualifying calculation entirely.
          </p>

          <h3>How do lenders average commission income for mortgage qualification?</h3>
          <p>
            <strong>Lenders add your total commission earnings from two complete tax years and divide by 24 months to calculate your average monthly qualifying income.</strong> If income is increasing, most lenders use this straight 24-month average. If income has declined year over year, the underwriter uses the lower of the 24-month average or the most recent 12-month earnings. FHA allows a weighted average favoring recent months when income trends upward consistently.
          </p>

          <h3>Can bonus income be used to qualify for a refinance?</h3>
          <p>
            <strong>Bonus income qualifies for refinance if you have a documented 2-year history of receiving bonuses and your employer confirms the likelihood of continuance.</strong> The underwriter averages bonus income over 24 months using the same methodology as commission income. Irregular or one-time bonuses are excluded. If your bonus varies significantly year over year, expect the underwriter to use the lower figure or request additional documentation explaining the variance.
          </p>

          <h3>What happens if my commission income went down this year?</h3>
          <p>
            <strong>Declining commission income triggers enhanced underwriting scrutiny, and the underwriter uses the lower of your 24-month average or most recent 12 months.</strong> If the decline exceeds 20%, many lenders require a written letter of explanation and evidence that the decline is temporary. Some lenders with strict overlays decline files with commission drops above 25%. A wholesale broker identifies lenders with more favorable declining income policies from a network of 200+ lending partners.
          </p>

          <h3>Is it harder to refinance with commission income than salary?</h3>
          <p>
            <strong>Commission income refinances require more documentation and longer processing times, but they are not inherently harder to qualify for when structured correctly.</strong> The challenge is that income variability introduces underwriting complexity that salaried borrowers do not face. Selecting the right lender whose overlay policies accommodate your specific commission pattern is the critical success factor that distinguishes approvals from denials.
          </p>

          <h3>Can I use a bank statement loan if my tax returns show lower income than I actually earn?</h3>
          <p>
            <strong>Yes, bank statement loan programs qualify you based on 12-24 months of actual bank deposits rather than tax return net income, which often produces higher qualifying amounts for commission earners.</strong> These non-QM programs are particularly valuable for 1099 independent contractors whose business deductions significantly reduce their tax return income. Bank statement loans are available through select wholesale lenders and typically have slightly different pricing than agency loan programs.
          </p>

          <h3>Do I need a CPA letter for a commission income refinance?</h3>
          <p>
            <strong>CPA letters are not universally required but are often requested by underwriters when commission income patterns need additional context or verification.</strong> Self-employed 1099 commission earners are more likely to need a CPA-prepared year-to-date profit and loss statement. W-2 commission earners may need a CPA letter if unreimbursed business expenses on Schedule A reduce their effective income. Having a CPA letter prepared in advance eliminates delays during underwriting.
          </p>

          <h3>How does a job change affect my commission income qualification?</h3>
          <p>
            <strong>Changing employers within the same industry and role type generally preserves your commission history, while switching industries restarts the 2-year qualification clock.</strong> Most lenders require documentation showing that your new commission structure is comparable to your previous role. Some lenders with favorable overlays accept same-industry moves with as little as 6 months of documented commission at the new employer. A wholesale broker identifies these more flexible lenders.
          </p>
        </div>

        {/* Extended FAQ Section */}
        <h2 id="faqs">Extended FAQ: Commission &amp; Bonus Income Refinance Questions</h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Expert Summary + CTA */}
        <h2 id="expert-summary">Expert Summary: Refinancing with Commission &amp; Bonus Income</h2>

        <p>
          Refinancing with commission, bonus, or variable income demands a strategic approach that goes beyond simply gathering documents and applying with the nearest bank. The 2-year income averaging requirement, declining income analysis, and lender-specific overlays create a qualification landscape where lender selection directly determines your outcome. Conventional (Fannie Mae), FHA, and VA programs each calculate commission income differently, and the spread between the most favorable and least favorable lender for your income profile routinely exceeds 15% of qualifying income&mdash;a difference that translates to tens of thousands of dollars in borrowing capacity.
        </p>

        <p>
          The most effective strategy is working with a wholesale broker who understands commission income underwriting across all major loan programs and compares qualification policies across 200+ lenders. This comparison ensures your file reaches a lender whose overlay policies produce the highest qualifying income for your specific situation, whether your commissions are stable, increasing, or declining.
        </p>

        <p>
          For seniors exploring home equity options, a <Link href="/blog/hecm-pros-cons-2026" className="text-blue-600 hover:underline">HECM reverse mortgage</Link> provides an alternative path to accessing equity without traditional income qualification requirements.
        </p>

        {/* CTA 3: Closing CTA */}
        <div className="bg-green-50 p-6 rounded-xl border border-green-200 my-8 text-center">
          <h3 className="text-xl font-bold text-green-900 mt-0">Ready to Refinance with Commission or Bonus Income?</h3>
          <p className="text-green-800 mb-2">
            Mo Abdel specializes in commission income refinances across California and Washington. Get a free income analysis with qualification comparison across 200+ lenders&mdash;find the lender whose policies maximize your qualifying income.
          </p>
          <p className="text-green-900 font-bold text-xl mb-2">
            Call Mo Abdel: <a href="tel:9495792057" className="text-green-700 hover:underline">(949) 579-2057</a>
          </p>
          <p className="text-green-800">
            NMLS #1426884 | Lumin Lending NMLS #2716106
          </p>
          <p className="text-green-800 text-sm mt-3">
            Free consultation. Serving California and Washington homeowners.
          </p>
        </div>

        <h2>Related Refinance and Mortgage Resources</h2>

        <ul>
          <li><Link href="/blog/cash-out-refinance-how-it-works-2026" className="text-blue-600 hover:underline">Cash-Out Refinance: How It Works [2026]</Link></li>
          <li><Link href="/blog/fha-streamline-refinance-guide-2026" className="text-blue-600 hover:underline">FHA Streamline Refinance Guide [2026]</Link></li>
          <li><Link href="/blog/bank-statement-loans-self-employed-2026" className="text-blue-600 hover:underline">Bank Statement Loans for Self-Employed Borrowers [2026]</Link></li>
          <li><Link href="/blog/heloc-vs-cash-out-refinance-2026" className="text-blue-600 hover:underline">HELOC vs Cash-Out Refinance: Complete Comparison</Link></li>
          <li><Link href="/blog/dscr-investment-property-loans-2026" className="text-blue-600 hover:underline">DSCR Investment Property Loans [2026]</Link></li>
          <li><Link href="/blog/hecm-pros-cons-2026" className="text-blue-600 hover:underline">HECM Reverse Mortgage Pros and Cons [2026]</Link></li>
          <li><Link href="/blog/heloc-self-employed-qualification-2026" className="text-blue-600 hover:underline">HELOC Qualification for Self-Employed Borrowers</Link></li>
          <li><Link href="/blog/200-lender-advantage-explained-2026" className="text-blue-600 hover:underline">The 200+ Lender Advantage Explained</Link></li>
          <li><Link href="/blog/divorce-refinance-spouse-buyout-qualifying-2026" className="text-blue-600 hover:underline">Divorce Refinance &amp; Spouse Buyout Guide</Link></li>
          <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Mo Abdel for a Free Quote</Link></li>
        </ul>

        <h3>External Resources</h3>

        <ul>
          <li><a href="https://selling-guide.fanniemae.com/sel/b3-3.1-09/other-sources-income" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Fannie Mae Selling Guide B3-3.1-09: Commission Income</a></li>
          <li><a href="https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FHA Handbook 4000.1: Income Requirements</a></li>
          <li><a href="https://www.bls.gov/oes/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Bureau of Labor Statistics: Occupational Employment Statistics</a></li>
          <li><a href="https://www.consumerfinance.gov/ask-cfpb/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CFPB: Consumer Financial Protection Bureau Resources</a></li>
        </ul>
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
        <p className="font-semibold">Mo Abdel | NMLS #1426884 | Lumin Lending NMLS #2716106 | DRE #02291443</p>
        <p>Licensed in: California, Washington</p>
        <p className="mt-2">Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Not all borrowers will qualify. Information is for educational purposes only and does not constitute financial, tax, or legal advice. Contact a licensed loan officer for personalized guidance.</p>
      </footer>
    </article>
  );
}
