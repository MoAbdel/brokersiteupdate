import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Divorce Refinance: How to Buy Out Your Spouse & Qualify Solo [2026]',
  description: 'Divorce refinance guide: How to buy out your spouse, remove them from the mortgage and title, qualify on single income, interspousal transfer deed process, DTI challenges, equity division, and wholesale broker advantage across 200+ lenders. NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/divorce-refinance-spouse-buyout-qualifying-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/divorce-refinance-spouse-buyout-qualifying-2026',
      'x-default': 'https://www.mothebroker.com/blog/divorce-refinance-spouse-buyout-qualifying-2026',
    },
  },
  keywords: [
    'divorce refinance',
    'spouse buyout mortgage',
    'removing spouse from mortgage',
    'divorce home buyout',
    'refinance after divorce',
    'interspousal transfer deed',
    'divorce mortgage qualifying',
    'single income refinance',
    'divorce equity buyout',
    'divorce refinance 2026',
  ],
  openGraph: {
    title: 'Divorce Refinance: How to Buy Out Your Spouse & Qualify Solo [2026]',
    description: 'Divorce refinance guide: How to buy out your spouse, remove them from the mortgage and title, qualify on single income, interspousal transfer deed, DTI challenges, and wholesale broker advantage.',
    url: 'https://www.mothebroker.com/blog/divorce-refinance-spouse-buyout-qualifying-2026',
    type: 'article',
    publishedTime: '2026-03-06',
    modifiedTime: '2026-03-06',
  },
};

const faqData = [
  {
    question: 'How does a divorce refinance work to buy out a spouse?',
    answer: 'A divorce refinance replaces the existing joint mortgage with a new loan in only one spouse\'s name. The refinancing spouse takes full ownership of the property and uses the new loan to pay off the old mortgage. If the departing spouse is entitled to equity, the refinancing spouse can use a cash-out refinance to pull equity from the home and pay the departing spouse their share. The result is a new mortgage solely in the retaining spouse\'s name, with the departing spouse removed from both the mortgage obligation and the property title.',
  },
  {
    question: 'Can I remove my ex-spouse from the mortgage without refinancing?',
    answer: 'In almost all cases, no. Mortgage lenders are not required to release a borrower from the loan simply because a divorce decree says so. The only reliable way to remove a spouse from a mortgage is to refinance into a new loan under the retaining spouse\'s name alone. Some servicers offer loan assumptions, but these are rare for conventional loans and still require full underwriting qualification by the remaining borrower. An interspousal transfer deed removes the departing spouse from the title, but it does not remove them from the mortgage debt obligation.',
  },
  {
    question: 'What is an interspousal transfer deed and when is it needed?',
    answer: 'An interspousal transfer deed (also called an interspousal grant deed in California) transfers ownership of real property between spouses or former spouses. It is used during divorce to transfer the departing spouse\'s ownership interest to the retaining spouse. This deed is exempt from reassessment under California Proposition 19 (and predecessor Proposition 13 protections) when transferred between spouses incident to divorce. The interspousal transfer deed handles title transfer, but the mortgage must still be refinanced separately to remove the departing spouse from the loan.',
  },
  {
    question: 'How do I qualify for a divorce refinance on a single income?',
    answer: 'Qualifying on a single income requires meeting debt-to-income (DTI) ratio requirements using only the retaining spouse\'s income. Most conventional loans allow a maximum DTI of 45% to 50%. The lender calculates DTI by dividing your total monthly debt payments (including the new mortgage payment, property taxes, insurance, and all other debts) by your gross monthly income. If spousal support (alimony) is court-ordered and documented, it can be counted as qualifying income if it will continue for at least 36 months from the closing date. Child support received can also count as income with proper documentation.',
  },
  {
    question: 'Can I use alimony or spousal support as qualifying income for a divorce refinance?',
    answer: 'Yes, alimony and spousal support can be used as qualifying income if three conditions are met: (1) the support is court-ordered or documented in a legally binding separation agreement, (2) you can document receipt of the payments for at least 6 months (some lenders require 12 months), and (3) the payments will continue for at least 36 months from the date of the new mortgage closing. Lenders verify the payment history through bank statements or canceled checks showing consistent receipt.',
  },
  {
    question: 'What happens to the mortgage if both spouses are on the loan during divorce?',
    answer: 'Both spouses remain legally responsible for the mortgage payments until the loan is refinanced or paid off, regardless of what the divorce decree states. A divorce decree can assign payment responsibility to one spouse, but the lender is not bound by the decree. If the responsible spouse stops paying, the other spouse\'s credit is damaged equally. Late payments and foreclosure affect both borrowers\' credit scores. This is why refinancing promptly after divorce is critical for the departing spouse\'s financial protection.',
  },
  {
    question: 'How long after divorce can I refinance the home?',
    answer: 'You can refinance at any point during or after the divorce process, though the timing depends on your specific situation. Many borrowers refinance as part of the divorce settlement, with the refinance closing shortly after the divorce is finalized. Some refinance during the separation period if a legal separation agreement is in place. There is no mandatory waiting period for refinancing after divorce, but you need a finalized divorce decree or separation agreement to document the property division and any support obligations that will be used for qualifying.',
  },
  {
    question: 'What if I cannot qualify for the divorce refinance on my own?',
    answer: 'If you cannot qualify solo, several options exist: (1) add a co-borrower such as a parent or family member to strengthen the application, (2) use documented alimony or child support as qualifying income, (3) explore FHA loans which allow higher DTI ratios (up to 56.9% with compensating factors), (4) negotiate with your ex-spouse to temporarily remain on the mortgage while you improve your qualifying position, (5) consider selling the property and dividing the proceeds, or (6) work with a wholesale broker who can shop your profile across 200+ lenders to find programs with more flexible qualification criteria.',
  },
  {
    question: 'Does a divorce refinance require an appraisal?',
    answer: 'Most divorce refinances require a full appraisal to determine the current market value of the property. The appraisal serves two purposes: (1) it establishes the loan-to-value (LTV) ratio for the new mortgage, and (2) it confirms the equity amount for the spouse buyout calculation. If you are doing a cash-out refinance to pay your ex-spouse their equity share, the maximum LTV is typically 80% for conventional loans. Some streamline refinance programs waive the appraisal requirement, but these generally do not allow cash-out for spouse buyout purposes.',
  },
  {
    question: 'How is equity divided in a divorce home buyout?',
    answer: 'Equity division is determined by the divorce settlement agreement or court order. In California, a community property state, marital equity is generally split 50/50 unless the parties agree otherwise. The equity calculation is: current home value (determined by appraisal) minus the outstanding mortgage balance equals total equity. The departing spouse receives their agreed-upon share, typically paid from the cash-out refinance proceeds at closing. For example, if the home appraises at $900,000 with a $500,000 mortgage, the total equity is $400,000, and a 50/50 split means the departing spouse receives $200,000.',
  },
];

export default function DivorceRefinanceSpouseBuyoutPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Divorce Refinance: How to Buy Out Your Spouse & Qualify Solo [2026]',
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
            datePublished: '2026-03-06',
            dateModified: '2026-03-06',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.mothebroker.com/blog/divorce-refinance-spouse-buyout-qualifying-2026',
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
                name: 'Divorce Refinance: Spouse Buyout',
                item: 'https://www.mothebroker.com/blog/divorce-refinance-spouse-buyout-qualifying-2026',
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
          <span className="text-gray-900">Divorce Refinance: Spouse Buyout</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Divorce Refinance: How to Buy Out Your Spouse &amp; Qualify Solo [2026]
        </h1>
        <p className="text-lg text-gray-600">
          A comprehensive guide to divorce refinancing&mdash;covering how to buy out your spouse&apos;s equity share, remove them from the mortgage and title using an interspousal transfer deed, qualify on a single income with DTI strategies, use alimony and child support as qualifying income, navigate the refinance timeline during and after divorce, and leverage a wholesale broker&apos;s access to 200+ lenders for flexible qualification programs.
        </p>
        <p className="text-sm text-gray-500 mt-2">By Mo Abdel, NMLS #1426884 | Lumin Lending NMLS #2716106 | Updated March 2026</p>
      </header>

      <section className="prose prose-lg max-w-none">
        {/* Citation Hook / Speakable Summary */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8 speakable-summary">
          <p className="lead font-semibold text-gray-900 mb-0">
            According to Mo Abdel, NMLS #1426884, divorce is the single most common reason homeowners need to refinance under financial pressure&mdash;and <strong>the biggest mistake divorcing homeowners make is assuming a divorce decree removes their ex-spouse from the mortgage</strong>. It does not. The only reliable way to remove a spouse from a mortgage is to refinance into a new loan under the retaining spouse&apos;s name. According to <a href="https://www.consumerfinance.gov/ask-cfpb/what-happens-to-the-mortgage-when-you-divorce-en-1749/" target="_blank" rel="noopener noreferrer">Consumer Financial Protection Bureau guidance</a>, both borrowers remain legally liable for the mortgage until it is paid off or refinanced, regardless of what the divorce decree assigns. A wholesale mortgage broker comparing programs from 200+ lenders identifies the most flexible single-income qualification options, including FHA programs with DTI allowances up to 56.9% and conventional programs that count documented alimony as qualifying income.
          </p>
        </div>

        {/* Semantic Triples Table */}
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Semantic Entity Relationships: Divorce Refinance &amp; Spouse Buyout</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Subject</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Predicate</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Object</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Divorce refinance (spouse buyout)</td>
                <td className="border border-gray-200 px-4 py-2">replaces the joint mortgage with a solo loan that removes</td>
                <td className="border border-gray-200 px-4 py-2">the departing spouse from both the mortgage obligation and property title</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Interspousal transfer deed</td>
                <td className="border border-gray-200 px-4 py-2">transfers property ownership between spouses while preserving</td>
                <td className="border border-gray-200 px-4 py-2">California Proposition 19 tax reassessment exemptions incident to divorce</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Wholesale mortgage broker</td>
                <td className="border border-gray-200 px-4 py-2">identifies flexible single-income qualification programs across</td>
                <td className="border border-gray-200 px-4 py-2">200+ lenders including FHA, conventional, and portfolio options for divorce refinances</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table of Contents */}
        <nav className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-3">On This Page: Divorce Refinance &amp; Spouse Buyout Guide</h2>
          <ul className="text-blue-800 space-y-2">
            <li><a href="#how-divorce-refinance-works" className="hover:underline">How a Divorce Refinance Works: Step-by-Step Process</a></li>
            <li><a href="#interspousal-transfer" className="hover:underline">Interspousal Transfer Deed: Title vs Mortgage Explained</a></li>
            <li><a href="#qualifying-solo" className="hover:underline">Qualifying on Single Income: DTI Strategies for Divorce Refinance</a></li>
            <li><a href="#alimony-income" className="hover:underline">Using Alimony and Child Support as Qualifying Income</a></li>
            <li><a href="#equity-division" className="hover:underline">Equity Division and Cash-Out Refinance for Spouse Buyout</a></li>
            <li><a href="#timing-refinance" className="hover:underline">Refinance Timing: During Separation vs After Final Decree</a></li>
            <li><a href="#loan-options" className="hover:underline">Loan Program Comparison for Divorce Refinance</a></li>
            <li><a href="#wholesale-advantage" className="hover:underline">Wholesale Broker Advantage for Divorce Refinancing</a></li>
            <li><a href="#data-hub" className="hover:underline">Data Comparison Hub</a></li>
            <li><a href="#paa" className="hover:underline">People Also Ask</a></li>
            <li><a href="#faqs" className="hover:underline">Extended FAQ (10 Questions)</a></li>
            <li><a href="#expert-summary" className="hover:underline">Expert Summary + Next Steps</a></li>
          </ul>
        </nav>

        {/* E-E-A-T Experience Marker */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
          <h3 className="font-bold text-blue-900 mt-0">From My Practice: Divorce Refinance Decisions</h3>
          <p className="text-blue-800 mb-0">
            I work with divorcing homeowners in California and Washington every month, and the pattern is consistent: one spouse wants to keep the home, but they have never qualified for a mortgage on their own income. The joint application was easy&mdash;two incomes, combined DTI well below limits. Now they need to qualify solo, often while also paying the departing spouse their equity share through a cash-out refinance. The most important step happens before the refinance application: structuring the divorce settlement to maximize qualifying income (documenting alimony duration, calculating child support continuity) and minimize debt obligations assigned to the retaining spouse. I have seen borrowers get denied by one lender and approved by another because the second lender counted their alimony income correctly or offered a higher DTI threshold. That is why shopping across 200+ lenders matters more in a divorce refinance than in any other refinance scenario. &mdash; <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* CTA 1: Early CTA */}
        <div className="bg-green-50 p-6 rounded-xl border border-green-200 my-8 text-center">
          <h3 className="text-xl font-bold text-green-900 mt-0">Going Through a Divorce? Find Out if You Qualify to Keep the Home</h3>
          <p className="text-green-800 mb-2">
            Get a free single-income qualification analysis to determine if you can refinance the home into your name alone.
          </p>
          <p className="text-green-900 font-bold text-lg mb-0">
            Call Mo Abdel: <a href="tel:9495792057" className="text-green-700 hover:underline">(949) 579-2057</a> | <Link href="/contact" className="text-green-700 hover:underline">Request Free Qualification Review</Link>
          </p>
        </div>

        {/* Section 1: How Divorce Refinance Works */}
        <h2 id="how-divorce-refinance-works">How a Divorce Refinance Works: Step-by-Step Process</h2>

        <p>
          A divorce refinance is a standard mortgage refinance with additional steps related to title transfer and equity division. Here is the complete process from start to finish:
        </p>

        <ol>
          <li><strong>Divorce settlement establishes property terms:</strong> The divorce decree or marital settlement agreement specifies who retains the home, the equity split, any spousal support obligations, and the deadline for completing the refinance. This document is the foundation of the entire transaction.</li>
          <li><strong>Retaining spouse applies for a new mortgage:</strong> The spouse keeping the home applies for a refinance in their name only. The application includes income documentation, credit review, and debt analysis&mdash;all based on the single borrower&apos;s financial profile.</li>
          <li><strong>Property appraisal determines current value:</strong> A licensed appraiser assesses the home&apos;s current market value. This value determines both the loan-to-value (LTV) ratio for the new mortgage and the equity amount available for the spouse buyout.</li>
          <li><strong>Cash-out refinance funds the equity buyout:</strong> If the departing spouse is entitled to equity, the retaining spouse uses a <Link href="/loan-programs/cash-out-refinance" className="text-blue-600 hover:underline">cash-out refinance</Link> to borrow against the home&apos;s equity and pay the departing spouse their share at closing.</li>
          <li><strong>Interspousal transfer deed transfers title:</strong> The departing spouse signs an interspousal transfer deed (or interspousal grant deed in California) transferring their ownership interest to the retaining spouse. This is recorded with the county recorder&apos;s office.</li>
          <li><strong>Old mortgage is paid off; new mortgage funds:</strong> The new loan pays off the existing joint mortgage, the departing spouse receives their equity payment, and the retaining spouse now has a mortgage solely in their name.</li>
          <li><strong>Departing spouse is fully released:</strong> With the old mortgage paid off and the title transferred, the departing spouse has no further financial obligation related to the property.</li>
        </ol>

        <p>
          The entire process typically takes 30&ndash;45 days from application to closing, though complex divorce situations may extend the timeline. Working with an experienced <Link href="/loan-programs/conventional-loans" className="text-blue-600 hover:underline">conventional loan</Link> specialist who understands divorce refinance requirements prevents delays caused by documentation gaps or underwriting questions.
        </p>

        {/* Section 2: Interspousal Transfer Deed */}
        <h2 id="interspousal-transfer">Interspousal Transfer Deed: Why Title Transfer and Mortgage Removal Are Separate Steps</h2>

        <p>
          One of the most misunderstood aspects of divorce real estate is the difference between title ownership and mortgage obligation. These are two separate legal instruments, and changing one does not automatically change the other.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Title vs Mortgage: What Changes During Divorce</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Element</th>
                <th className="border border-gray-200 px-4 py-2 text-left">What It Controls</th>
                <th className="border border-gray-200 px-4 py-2 text-left">How to Remove Ex-Spouse</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Document Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Property title</td>
                <td className="border border-gray-200 px-4 py-2">Ownership rights to the property</td>
                <td className="border border-gray-200 px-4 py-2">Interspousal transfer deed</td>
                <td className="border border-gray-200 px-4 py-2">Deed recorded with county recorder</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Mortgage note</td>
                <td className="border border-gray-200 px-4 py-2">Legal obligation to repay the loan</td>
                <td className="border border-gray-200 px-4 py-2">Refinance into retaining spouse&apos;s name</td>
                <td className="border border-gray-200 px-4 py-2">New mortgage note and deed of trust</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Deed of trust</td>
                <td className="border border-gray-200 px-4 py-2">Property as collateral for the loan</td>
                <td className="border border-gray-200 px-4 py-2">Old deed of trust reconveyed; new one recorded</td>
                <td className="border border-gray-200 px-4 py-2">Reconveyance + new deed of trust</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 my-6">
          <h4 className="font-bold text-yellow-800 mt-0">Critical Warning: Signing a Quitclaim Deed Does NOT Remove You from the Mortgage</h4>
          <p className="text-yellow-900 mb-0">
            A quitclaim deed or interspousal transfer deed removes the departing spouse from the property <strong>title</strong>, but the departing spouse remains fully liable for the mortgage payments until the loan is refinanced or paid off. If the retaining spouse stops making payments, the departing spouse&apos;s credit is damaged and the lender can pursue both borrowers for the debt. <strong>Never sign away your ownership interest without confirming the refinance will close simultaneously or within a defined timeframe.</strong>
          </p>
        </div>

        <p>
          In California, the interspousal transfer deed is the preferred instrument for transferring property between divorcing spouses because it preserves the Proposition 19 property tax reassessment exclusion. According to <a href="https://www.boe.ca.gov/proptaxes/faqs/propositions19.htm" target="_blank" rel="noopener noreferrer">California State Board of Equalization guidance</a>, transfers between spouses (or former spouses) incident to a divorce are excluded from reassessment, meaning the retaining spouse keeps the existing property tax base.
        </p>

        {/* Section 3: Qualifying Solo */}
        <h2 id="qualifying-solo">Qualifying on Single Income: DTI Strategies for Divorce Refinance</h2>

        <p>
          The primary challenge in a divorce refinance is qualifying on one income when the original mortgage was approved based on two incomes. Debt-to-income (DTI) ratio is the critical metric, and strategic planning before and during the divorce settlement directly impacts qualification outcomes.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">DTI Thresholds by Loan Program for Divorce Refinance</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Loan Program</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Maximum DTI</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Alimony as Income?</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Conventional (Fannie Mae)</td>
                <td className="border border-gray-200 px-4 py-2">45%&ndash;50%</td>
                <td className="border border-gray-200 px-4 py-2">Yes, with 36+ months continuity</td>
                <td className="border border-gray-200 px-4 py-2">Strong credit, sufficient income</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Conventional (Freddie Mac)</td>
                <td className="border border-gray-200 px-4 py-2">45%&ndash;50%</td>
                <td className="border border-gray-200 px-4 py-2">Yes, with 36+ months continuity</td>
                <td className="border border-gray-200 px-4 py-2">Strong credit, sufficient income</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">FHA</td>
                <td className="border border-gray-200 px-4 py-2">Up to 56.9% with compensating factors</td>
                <td className="border border-gray-200 px-4 py-2">Yes, with 36+ months continuity</td>
                <td className="border border-gray-200 px-4 py-2">Higher DTI, lower credit scores</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">VA</td>
                <td className="border border-gray-200 px-4 py-2">No hard cap (residual income test)</td>
                <td className="border border-gray-200 px-4 py-2">Yes, with documentation</td>
                <td className="border border-gray-200 px-4 py-2">Eligible veterans and active duty</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Non-QM / Portfolio</td>
                <td className="border border-gray-200 px-4 py-2">Varies by lender (up to 55%+)</td>
                <td className="border border-gray-200 px-4 py-2">Depends on lender</td>
                <td className="border border-gray-200 px-4 py-2">Self-employed, complex income</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Seven Strategies to Improve Single-Income DTI</h3>

        <ol>
          <li><strong>Document alimony and child support as income:</strong> Court-ordered support payments that will continue for 36+ months from closing count as qualifying income. This is often the difference between approval and denial.</li>
          <li><strong>Negotiate debt assignment in the divorce settlement:</strong> Have the divorce decree assign as many joint debts as possible to the departing spouse. Debts assigned to the ex-spouse via court order do not count against the retaining spouse&apos;s DTI (provided the decree is finalized).</li>
          <li><strong>Pay off small debts before applying:</strong> Eliminating a $300/month car payment reduces DTI by the same amount as adding $300/month in income. Target debts with fewer than 10 months remaining&mdash;some lenders exclude debts with fewer than 10 payments left.</li>
          <li><strong>Consider FHA for higher DTI allowance:</strong> FHA permits DTI up to 56.9% with compensating factors (cash reserves, minimal payment shock, strong credit history). This provides significantly more qualification room than conventional programs.</li>
          <li><strong>Add a co-borrower if needed:</strong> A parent or family member can be added as a co-borrower to supplement income. They do not need to live in the property for most loan programs.</li>
          <li><strong>Use rental income from the property:</strong> If the home has an accessory dwelling unit (ADU) or rentable space, documented rental income can supplement qualifying income.</li>
          <li><strong>Extend the loan term:</strong> A 30-year term produces a lower monthly payment than a 20-year or 15-year term, reducing the housing portion of DTI. The lower payment may be the difference between qualifying and not qualifying.</li>
        </ol>

        <p>
          Use our <Link href="/tools/equity-comparison-calculator" className="text-blue-600 hover:underline">equity comparison calculator</Link> to estimate the equity available for a spouse buyout based on your home&apos;s current value and outstanding mortgage balance.
        </p>

        {/* Section 4: Alimony and Child Support as Income */}
        <h2 id="alimony-income">Using Alimony and Child Support as Qualifying Income</h2>

        <p>
          Alimony (spousal support) and child support are powerful qualifying tools for divorce refinance applicants. Understanding the documentation requirements and continuity rules is essential for a smooth approval.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Alimony &amp; Child Support Income Documentation Requirements</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Requirement</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Alimony / Spousal Support</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Child Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Legal documentation</td>
                <td className="border border-gray-200 px-4 py-2">Court order or separation agreement</td>
                <td className="border border-gray-200 px-4 py-2">Court order or separation agreement</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Receipt history required</td>
                <td className="border border-gray-200 px-4 py-2">6&ndash;12 months (varies by lender)</td>
                <td className="border border-gray-200 px-4 py-2">6&ndash;12 months (varies by lender)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Continuity requirement</td>
                <td className="border border-gray-200 px-4 py-2">Must continue 36+ months from closing</td>
                <td className="border border-gray-200 px-4 py-2">Must continue 36+ months from closing</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Proof of receipt</td>
                <td className="border border-gray-200 px-4 py-2">Bank statements, canceled checks, payment records</td>
                <td className="border border-gray-200 px-4 py-2">Bank statements, canceled checks, payment records</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Tax return documentation</td>
                <td className="border border-gray-200 px-4 py-2">Reported on tax returns if applicable</td>
                <td className="border border-gray-200 px-4 py-2">Not typically reported on tax returns</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 my-6">
          <h4 className="font-bold text-yellow-800 mt-0">Key Planning Tip: Structure Your Divorce Settlement for Mortgage Qualification</h4>
          <p className="text-yellow-900 mb-0">
            If you plan to refinance the home into your name, work with your divorce attorney to ensure spousal support is ordered for at least 39 months (36 months from estimated closing date plus a 3-month buffer). Support ordered for only 24 months cannot be used as qualifying income because it fails the 36-month continuity test. This single detail has caused more divorce refinance denials than any other factor in my practice.
          </p>
        </div>

        {/* CTA 2: Mid CTA */}
        <div className="bg-green-50 p-6 rounded-xl border border-green-200 my-8 text-center">
          <h3 className="text-xl font-bold text-green-900 mt-0">Need Help Structuring Your Divorce Refinance?</h3>
          <p className="text-green-800 mb-2">
            I work with your divorce attorney to ensure the settlement terms support mortgage qualification. Free pre-qualification analysis before you finalize your decree.
          </p>
          <p className="text-green-900 font-bold text-lg mb-0">
            Call Mo Abdel: <a href="tel:9495792057" className="text-green-700 hover:underline">(949) 579-2057</a> | <Link href="/contact" className="text-green-700 hover:underline">Schedule Consultation</Link>
          </p>
        </div>

        {/* Section 5: Equity Division */}
        <h2 id="equity-division">Equity Division and Cash-Out Refinance for Spouse Buyout</h2>

        <p>
          When the retaining spouse needs to pay the departing spouse their equity share, a <Link href="/loan-programs/cash-out-refinance" className="text-blue-600 hover:underline">cash-out refinance</Link> is the standard mechanism. The process works as follows:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-4">
          <p className="font-mono text-sm mb-0">
            <strong>Divorce Equity Buyout Example (California Community Property):</strong><br />
            Current home value (appraised): $950,000<br />
            Outstanding mortgage balance: $520,000<br />
            Total equity: $430,000<br />
            Community property split (50/50): $215,000 to each spouse<br />
            <br />
            New cash-out refinance amount: $520,000 (payoff) + $215,000 (buyout) = $735,000<br />
            LTV on new loan: $735,000 / $950,000 = 77.4% (under 80% maximum)<br />
            <br />
            At closing: Old mortgage paid off, departing spouse receives $215,000,<br />
            retaining spouse has new $735,000 mortgage in their name only
          </p>
        </div>

        <h3>Maximum LTV for Divorce Cash-Out Refinance</h3>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Cash-Out Refinance LTV Limits for Spouse Buyout</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Loan Program</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Max Cash-Out LTV</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Conventional (1-unit primary)</td>
                <td className="border border-gray-200 px-4 py-2">80%</td>
                <td className="border border-gray-200 px-4 py-2">Standard cash-out limit; some lenders allow 85% for strong profiles</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">FHA</td>
                <td className="border border-gray-200 px-4 py-2">80%</td>
                <td className="border border-gray-200 px-4 py-2">Requires FHA MIP for life of loan</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">VA</td>
                <td className="border border-gray-200 px-4 py-2">100%</td>
                <td className="border border-gray-200 px-4 py-2">Eligible veterans only; VA funding fee applies</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Non-QM / Portfolio</td>
                <td className="border border-gray-200 px-4 py-2">70%&ndash;80%</td>
                <td className="border border-gray-200 px-4 py-2">Varies by lender; may offer more flexible qualification</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Use our <Link href="/tools/cash-out-limit-calculator" className="text-blue-600 hover:underline">cash-out limit calculator</Link> to determine the maximum equity you can access based on your home value and the applicable LTV limit. If the required buyout amount exceeds the available equity at maximum LTV, you may need to negotiate a different equity split with your ex-spouse or arrange a separate payment plan for the difference.
        </p>

        {/* Section 6: Timing */}
        <h2 id="timing-refinance">Refinance Timing: During Separation vs After Final Decree</h2>

        <p>
          The timing of your divorce refinance affects both qualification and documentation requirements. Here is how the timeline works:
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Divorce Refinance Timing Comparison</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Timing</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Advantages</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Challenges</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Documentation Needed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">During separation</td>
                <td className="border border-gray-200 px-4 py-2">Faster resolution; departing spouse released sooner</td>
                <td className="border border-gray-200 px-4 py-2">May not have final decree; alimony may not yet be court-ordered</td>
                <td className="border border-gray-200 px-4 py-2">Legal separation agreement; proposed property settlement</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">After final decree</td>
                <td className="border border-gray-200 px-4 py-2">All terms finalized; clear documentation; alimony documented</td>
                <td className="border border-gray-200 px-4 py-2">Longer exposure period for departing spouse on mortgage</td>
                <td className="border border-gray-200 px-4 py-2">Final divorce decree; recorded property settlement</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">6&ndash;12 months after decree</td>
                <td className="border border-gray-200 px-4 py-2">Alimony receipt history established; income documentation stronger</td>
                <td className="border border-gray-200 px-4 py-2">Extended period of joint liability; ex-spouse credit risk</td>
                <td className="border border-gray-200 px-4 py-2">Decree + 6&ndash;12 months bank statements showing support receipt</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          For borrowers who rely on alimony as qualifying income, waiting 6&ndash;12 months after the decree to establish a documented receipt history often produces a stronger application. However, this must be balanced against the departing spouse&apos;s risk exposure while they remain on the mortgage. A well-structured divorce settlement addresses this tension by setting a refinance deadline with consequences.
        </p>

        {/* Section 7: Loan Options */}
        <h2 id="loan-options">Loan Program Comparison for Divorce Refinance</h2>

        <p>
          Different loan programs offer different advantages for divorce refinance applicants. The right program depends on your credit score, income, DTI, equity position, and veteran status.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Loan Programs for Divorce Refinance: Feature Comparison</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Conventional</th>
                <th className="border border-gray-200 px-4 py-2 text-left">FHA</th>
                <th className="border border-gray-200 px-4 py-2 text-left">VA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Minimum credit score</td>
                <td className="border border-gray-200 px-4 py-2">620+</td>
                <td className="border border-gray-200 px-4 py-2">580+ (some lenders 500+)</td>
                <td className="border border-gray-200 px-4 py-2">No VA minimum (lenders typically 620+)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Maximum DTI</td>
                <td className="border border-gray-200 px-4 py-2">45%&ndash;50%</td>
                <td className="border border-gray-200 px-4 py-2">Up to 56.9%</td>
                <td className="border border-gray-200 px-4 py-2">Residual income test (no hard DTI cap)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Cash-out max LTV</td>
                <td className="border border-gray-200 px-4 py-2">80%</td>
                <td className="border border-gray-200 px-4 py-2">80%</td>
                <td className="border border-gray-200 px-4 py-2">100%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Mortgage insurance</td>
                <td className="border border-gray-200 px-4 py-2">PMI if LTV &gt; 80% (removable)</td>
                <td className="border border-gray-200 px-4 py-2">MIP for life of loan</td>
                <td className="border border-gray-200 px-4 py-2">No MI (VA funding fee instead)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Alimony income eligible</td>
                <td className="border border-gray-200 px-4 py-2">Yes (36-month continuity)</td>
                <td className="border border-gray-200 px-4 py-2">Yes (36-month continuity)</td>
                <td className="border border-gray-200 px-4 py-2">Yes (documentation required)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Best divorce refinance scenario</td>
                <td className="border border-gray-200 px-4 py-2">Good credit, sufficient solo income</td>
                <td className="border border-gray-200 px-4 py-2">Higher DTI, lower credit tolerance</td>
                <td className="border border-gray-200 px-4 py-2">Veteran with limited equity needs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          For a detailed comparison of <Link href="/blog/cash-out-vs-regular-refinance-2026" className="text-blue-600 hover:underline">cash-out vs rate-and-term refinancing</Link>, including how each option affects your divorce buyout strategy, review our dedicated comparison guide. Understanding <Link href="/blog/refinance-closing-costs-2026" className="text-blue-600 hover:underline">refinance closing costs</Link> is also critical for budgeting the full cost of a divorce refinance.
        </p>

        {/* Section 8: Wholesale Broker Advantage */}
        <h2 id="wholesale-advantage">Wholesale Broker Advantage for Divorce Refinancing</h2>

        <p>
          Divorce refinance applications present unique qualification challenges that make lender selection more impactful than in standard refinances. Here is why a wholesale broker with access to 200+ lenders delivers a measurably better outcome:
        </p>

        <ul>
          <li><strong>DTI flexibility varies dramatically across lenders:</strong> One lender may cap DTI at 43% while another allows 50% for the same loan program. A wholesale broker identifies the lenders with the most favorable DTI thresholds for your specific profile.</li>
          <li><strong>Alimony income treatment differs by lender:</strong> Some lenders require 12 months of documented receipt; others accept 6 months. Some lenders discount alimony income by 25% as a &quot;haircut&quot;; others count 100%. These differences directly affect qualification.</li>
          <li><strong>Cash-out LTV limits are not uniform:</strong> While Fannie Mae guidelines cap cash-out at 80% LTV, some lenders add additional restrictions (called &quot;overlays&quot;) that reduce the maximum to 75%. A broker identifies lenders without restrictive overlays.</li>
          <li><strong>Divorce decree interpretation:</strong> Lenders interpret divorce decrees differently when calculating debt obligations. A broker who regularly processes divorce refinances knows which lenders are most favorable in their interpretation.</li>
          <li><strong>Pricing competition benefits you:</strong> Wholesale rates from 200+ lenders create natural price competition. The same loan that one lender prices at par, another may offer with a lender credit that reduces closing costs.</li>
        </ul>

        <p>
          If you also have equity in the home beyond what is needed for the buyout, review our guide on <Link href="/blog/heloc-vs-cash-out-refinance-2026" className="text-blue-600 hover:underline">HELOC vs cash-out refinance</Link> to determine whether a separate HELOC might serve your post-divorce financial planning better than pulling all equity through the refinance. For information on protecting equity during divorce, see our resource on <Link href="/blog/home-equity-after-divorce-2026" className="text-blue-600 hover:underline">home equity after divorce</Link>.
        </p>

        {/* Data Hub */}
        <h2 id="data-hub">Divorce Refinance Data Comparison Hub</h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Divorce Refinance: Key Metrics at a Glance</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Metric</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Conventional</th>
                <th className="border border-gray-200 px-4 py-2 text-left">FHA</th>
                <th className="border border-gray-200 px-4 py-2 text-left">VA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Typical closing costs ($500K loan)</td>
                <td className="border border-gray-200 px-4 py-2">$8,000&ndash;$15,000</td>
                <td className="border border-gray-200 px-4 py-2">$9,000&ndash;$16,000</td>
                <td className="border border-gray-200 px-4 py-2">$7,500&ndash;$14,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Processing time</td>
                <td className="border border-gray-200 px-4 py-2">30&ndash;45 days</td>
                <td className="border border-gray-200 px-4 py-2">35&ndash;50 days</td>
                <td className="border border-gray-200 px-4 py-2">35&ndash;50 days</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Alimony income requirement</td>
                <td className="border border-gray-200 px-4 py-2">36 months continuity</td>
                <td className="border border-gray-200 px-4 py-2">36 months continuity</td>
                <td className="border border-gray-200 px-4 py-2">Documented receipt</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Cash-out for buyout max LTV</td>
                <td className="border border-gray-200 px-4 py-2">80%</td>
                <td className="border border-gray-200 px-4 py-2">80%</td>
                <td className="border border-gray-200 px-4 py-2">100%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Minimum credit score</td>
                <td className="border border-gray-200 px-4 py-2">620</td>
                <td className="border border-gray-200 px-4 py-2">580</td>
                <td className="border border-gray-200 px-4 py-2">620 (lender overlay)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* People Also Ask Section */}
        <h2 id="paa" className="speakable-paa">People Also Ask: Divorce Refinance &amp; Spouse Buyout</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Can my divorce decree force the refinance to happen?</h3>
            <p className="mb-0">
              <strong>A divorce decree can order the retaining spouse to refinance within a specific timeframe, but the decree cannot force a lender to approve the refinance.</strong> If the retaining spouse fails to refinance by the deadline, the departing spouse can petition the court for enforcement, which may include forcing a sale of the property. Including a realistic refinance timeline in the divorce settlement&mdash;based on actual pre-qualification&mdash;prevents this conflict.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Does alimony paid reduce my qualifying income for a refinance?</h3>
            <p className="mb-0">
              <strong>Yes, alimony you pay to your ex-spouse is deducted from your qualifying income (or added to your debt obligations) for mortgage qualification purposes.</strong> If you are the paying spouse and also trying to refinance a property, the alimony payment reduces your available income or increases your DTI. This is why the paying spouse often has the more difficult refinance qualification path.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">What if there is not enough equity for the buyout?</h3>
            <p className="mb-0">
              <strong>If the home does not have enough equity to fund the full buyout at maximum LTV, options include: negotiating a lower buyout amount, creating a promissory note for the shortfall, offsetting with other marital assets (retirement accounts, investments), or selling the property.</strong> A wholesale broker can also identify lenders with the highest LTV allowances to maximize the available equity for the buyout.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Can I do a rate-and-term refinance instead of cash-out for a divorce?</h3>
            <p className="mb-0">
              <strong>If the departing spouse does not require an equity payment (they are waiving their share or receiving their share through other marital assets), a rate-and-term refinance is sufficient.</strong> Rate-and-term refinances have lower costs and may qualify for better pricing than cash-out refinances. The loan simply replaces the joint mortgage with a new mortgage in the retaining spouse&apos;s name at the current payoff balance.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">How does a divorce affect my credit score for refinancing?</h3>
            <p className="mb-0">
              <strong>Divorce itself does not affect your credit score, but the financial disruption of divorce frequently does.</strong> Late payments on joint accounts, increased credit utilization from dividing finances, and new individual debts can lower scores. Before applying for a divorce refinance, pull your credit report, dispute any errors, and pay down revolving balances to below 30% utilization. Every 20-point improvement in credit score can meaningfully improve mortgage pricing.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Is a divorce refinance more expensive than a regular refinance?</h3>
            <p className="mb-0">
              <strong>The refinance itself costs the same as any other refinance&mdash;the loan product, closing costs, and pricing are identical.</strong> However, divorce refinances often involve cash-out (for spouse buyout), which typically carries slightly higher pricing than rate-and-term refinances. The additional costs come from the divorce process itself: attorney fees, appraisal, and recording the interspousal transfer deed.
            </p>
          </div>
        </div>

        {/* Extended FAQ Section */}
        <h2 id="faqs">Extended FAQ: Divorce Refinance &amp; Spouse Buyout Questions</h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mt-0">{faq.question}</h3>
              <p className="mb-0">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Expert Summary + CTA */}
        <h2 id="expert-summary">Expert Summary: Divorce Refinance Decision Framework</h2>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h3 className="font-bold text-blue-900 mt-0">Key Takeaways for Divorce Refinance &amp; Spouse Buyout</h3>
          <ol className="text-blue-800">
            <li><strong>A divorce decree does not remove your ex from the mortgage:</strong> Only refinancing or paying off the loan releases the departing spouse from the mortgage obligation</li>
            <li><strong>Title and mortgage are separate instruments:</strong> An interspousal transfer deed handles title; a refinance handles the mortgage. Both are required for a complete divorce property transfer</li>
            <li><strong>Alimony and child support count as qualifying income:</strong> Court-ordered support with 36+ months continuity from closing can bridge the gap between single income and qualification requirements</li>
            <li><strong>FHA allows DTI up to 56.9%:</strong> For borrowers who cannot qualify under conventional DTI limits, FHA provides significantly more flexibility with compensating factors</li>
            <li><strong>Cash-out refinance funds the equity buyout:</strong> Maximum 80% LTV for conventional and FHA; 100% LTV for VA-eligible borrowers</li>
            <li><strong>Structure your divorce settlement for mortgage qualification:</strong> Work with your attorney to ensure support duration, debt assignment, and refinance timelines are compatible with lending requirements</li>
            <li><strong>Pre-qualify before finalizing the divorce:</strong> Knowing your qualification position before the decree is finalized allows adjustments to settlement terms that improve approval chances</li>
            <li><strong>A wholesale broker maximizes approval odds:</strong> Lender-to-lender variation in DTI limits, alimony treatment, and cash-out overlays means the same borrower can be denied at one lender and approved at another. Shopping across 200+ lenders finds the best fit</li>
          </ol>
        </div>

        {/* CTA 3: Final CTA */}
        <div className="bg-green-50 p-8 rounded-xl border border-green-200 my-8 text-center">
          <h3 className="text-2xl font-bold text-green-900 mt-0">Ready to Refinance After Divorce? Get Your Free Qualification Analysis</h3>
          <p className="text-green-800 text-lg mb-4">
            Send me your income details, divorce decree (or proposed settlement), and current mortgage information. I will tell you exactly where you stand for qualification across 200+ lenders&mdash;including which programs accept your alimony income and which offer the highest DTI limits. No obligation, no pressure, complete confidentiality.
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

        <h2>Related Divorce Refinance &amp; Mortgage Resources</h2>

        <ul>
          <li><Link href="/loan-programs/cash-out-refinance" className="text-blue-600 hover:underline">Cash-Out Refinance Programs</Link></li>
          <li><Link href="/loan-programs/conventional-loans" className="text-blue-600 hover:underline">Conventional Loan Programs</Link></li>
          <li><Link href="/blog/cash-out-vs-regular-refinance-2026" className="text-blue-600 hover:underline">Cash-Out vs Regular Refinance Comparison [2026]</Link></li>
          <li><Link href="/blog/refinance-closing-costs-2026" className="text-blue-600 hover:underline">Refinance Closing Costs Guide [2026]</Link></li>
          <li><Link href="/blog/home-equity-after-divorce-2026" className="text-blue-600 hover:underline">Home Equity After Divorce [2026]</Link></li>
          <li><Link href="/blog/heloc-vs-cash-out-refinance-2026" className="text-blue-600 hover:underline">HELOC vs Cash-Out Refinance [2026]</Link></li>
          <li><Link href="/tools/equity-comparison-calculator" className="text-blue-600 hover:underline">Equity Comparison Calculator</Link></li>
          <li><Link href="/tools/cash-out-limit-calculator" className="text-blue-600 hover:underline">Cash-Out Limit Calculator</Link></li>
          <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Mo Abdel for a Free Quote</Link></li>
        </ul>

        <h3>External Resources</h3>

        <ul>
          <li><a href="https://www.consumerfinance.gov/ask-cfpb/what-happens-to-the-mortgage-when-you-divorce-en-1749/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CFPB: What Happens to the Mortgage When You Divorce?</a></li>
          <li><a href="https://www.boe.ca.gov/proptaxes/faqs/propositions19.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">California BOE: Proposition 19 Property Tax Reassessment FAQ</a></li>
          <li><a href="https://www.fanniemae.com/content/guide/selling/b3-3.1-09/alimony-child-support-separate-maintenance.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Fannie Mae: Alimony, Child Support, and Separate Maintenance Income</a></li>
        </ul>
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443<br />
            <br />
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. This is not a commitment to lend. Not all borrowers will qualify. Divorce refinance qualification depends on individual income, credit, assets, and loan program requirements. DTI limits, alimony income treatment, and cash-out LTV maximums described in this article are general guidelines and vary by lender and program. Consult your divorce attorney for legal advice regarding property division, interspousal transfer deeds, and divorce settlement terms. This article is for educational purposes only and does not constitute legal or financial advice. Licensed in California and Washington.
          </p>
        </div>
      </footer>
    </article>
  );
}
