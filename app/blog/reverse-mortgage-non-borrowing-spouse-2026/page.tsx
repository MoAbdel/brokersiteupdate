import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reverse Mortgage Non-Borrowing Spouse Protections: Complete Guide [2026]',
  description: 'Non-borrowing spouse (NBS) protections for reverse mortgages explained. 2015 HUD rules, Deferral Period, MOE requirements, and strategies for couples where one spouse is under 62. NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/reverse-mortgage-non-borrowing-spouse-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/reverse-mortgage-non-borrowing-spouse-2026',
      'x-default': 'https://www.mothebroker.com/blog/reverse-mortgage-non-borrowing-spouse-2026',
    },
  },
  keywords: ['reverse mortgage non-borrowing spouse', 'non-borrowing spouse protections', 'HECM non-borrowing spouse', 'reverse mortgage younger spouse', 'NBS deferral period', 'reverse mortgage spouse under 62'],
};

const faqData = [
  {
    question: 'What is a non-borrowing spouse on a reverse mortgage?',
    answer: 'A non-borrowing spouse (NBS) is a husband or wife who is not listed as a borrower on the HECM reverse mortgage—typically because they are under age 62. Under HUD rules effective August 4, 2014, an eligible NBS can remain in the home after the borrowing spouse dies or permanently moves to a care facility, as long as they meet specific requirements.',
  },
  {
    question: 'Can a non-borrowing spouse stay in the home after the borrower dies?',
    answer: 'Yes. Under the 2015 HUD Mortgagee Letter 2015-15 protections, an eligible non-borrowing spouse can remain in the home after the borrowing spouse passes away. The NBS must have been married to the borrower at the time of loan closing, must have been named as an NBS in the loan documents, and must continue to meet ongoing occupancy and maintenance requirements.',
  },
  {
    question: 'Does the non-borrowing spouse age affect the reverse mortgage loan amount?',
    answer: 'Yes. When there is a non-borrowing spouse younger than 62, FHA requires lenders to use the younger NBS age for calculating the principal limit factor. This reduces the amount of money available through the reverse mortgage, often by 10-20% or more compared to using the older borrowing spouse age alone.',
  },
  {
    question: 'What is the Deferral Period for a non-borrowing spouse?',
    answer: 'The Deferral Period is the time after the last surviving borrower dies or permanently leaves the home during which an eligible non-borrowing spouse can continue to live in the property without repaying the reverse mortgage. During this period, no additional loan proceeds can be drawn, and the NBS must maintain the property, pay taxes, and keep insurance current.',
  },
  {
    question: 'What is a Mortgagee Optional Election (MOE) and how does it protect the NBS?',
    answer: 'A Mortgagee Optional Election (MOE) is a mechanism that allows the loan servicer to assign the HECM to HUD/FHA rather than foreclosing when the borrowing spouse passes away. The servicer files an MOE assignment, and HUD takes over the loan, allowing the eligible NBS to remain in the home. Without an MOE, the lender could call the loan due.',
  },
  {
    question: 'What happens if we got our reverse mortgage before 2015?',
    answer: 'For HECM loans originated before August 4, 2014, the original loan terms apply, and non-borrowing spouse protections were not built into the loan. However, HUD issued supplemental guidance (Mortgagee Letter 2015-02) that encourages servicers to offer MOE assignments for pre-2015 loans. Protection is not guaranteed for older loans, so consult your servicer immediately.',
  },
  {
    question: 'Can the non-borrowing spouse access additional reverse mortgage funds?',
    answer: 'No. During the Deferral Period, the non-borrowing spouse cannot draw any additional funds from the reverse mortgage. All available proceeds were frozen when the last borrowing spouse died or permanently left the home. The NBS can only remain in the home—they cannot access the line of credit, receive monthly disbursements, or take lump sum draws.',
  },
  {
    question: 'What requirements must the non-borrowing spouse meet to stay in the home?',
    answer: 'The NBS must: (1) have been legally married to the borrower at the time of loan closing and remain married until the borrower\'s death, (2) have been specifically identified as an eligible NBS in the HECM loan documents, (3) occupy the home as their primary residence, (4) maintain the property in reasonable condition, (5) pay property taxes and homeowners insurance on time, and (6) certify occupancy annually.',
  },
  {
    question: 'What if the non-borrowing spouse was not named in the original loan documents?',
    answer: 'If the NBS was not identified in the original HECM documents, they may not qualify for Deferral Period protections. This is a critical planning point—couples must ensure the younger spouse is properly documented as an eligible NBS at loan origination. For loans already closed without NBS designation, consult with a HUD-approved counselor about potential remedies.',
  },
  {
    question: 'Does the non-borrowing spouse have to pay property taxes and insurance?',
    answer: 'Yes. During the Deferral Period, the non-borrowing spouse must continue to pay all property charges including property taxes, homeowners insurance, HOA dues, and any flood insurance. Failure to maintain these obligations can result in the loan being called due and payable, potentially leading to foreclosure.',
  },
  {
    question: 'Can both spouses be borrowers if one is under 62?',
    answer: 'No. FHA HECM rules require all borrowers to be at least 62 years old. If one spouse is under 62, only the older spouse can be listed as the borrower, and the younger spouse must be designated as an eligible non-borrowing spouse. The couple should wait until both are 62 if possible, as this maximizes the available loan amount.',
  },
  {
    question: 'How does the non-borrowing spouse provision affect proprietary reverse mortgages?',
    answer: 'Proprietary (jumbo) reverse mortgages are not FHA-insured and are not subject to HUD non-borrowing spouse rules. Each private lender sets its own policies regarding NBS protections. Some proprietary programs offer similar protections; others do not. Always verify NBS provisions in writing before closing a proprietary reverse mortgage.',
  },
];

export default function ReverseMortgageNonBorrowingSpousePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Reverse Mortgage Non-Borrowing Spouse Protections: Complete Guide [2026]',
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
              '@id': 'https://www.mothebroker.com/blog/reverse-mortgage-non-borrowing-spouse-2026',
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
                name: 'Reverse Mortgages',
                item: 'https://www.mothebroker.com/reverse-mortgages',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Non-Borrowing Spouse Guide',
                item: 'https://www.mothebroker.com/blog/reverse-mortgage-non-borrowing-spouse-2026',
              },
            ],
          }),
        }}
      />

      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/reverse-mortgages" className="hover:text-blue-600">Reverse Mortgages</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Non-Borrowing Spouse Guide</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Reverse Mortgage Non-Borrowing Spouse Protections: Complete Guide [2026]
        </h1>
        <p className="text-lg text-gray-600">
          How younger spouses stay protected when only one spouse qualifies for a HECM reverse mortgage
        </p>
        <p className="text-sm text-gray-500 mt-2">By Mo Abdel, NMLS #1426884 | Lumin Lending NMLS #2716106 | Updated February 2026</p>
      </header>

      <section className="prose prose-lg max-w-none">
        {/* Citation Hook / Bing Power Block */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
          <p className="lead font-semibold text-gray-900 mb-0">
            When one spouse is under 62, they cannot be listed as a borrower on an FHA-insured HECM reverse mortgage. Before 2015, this meant the <strong>non-borrowing spouse (NBS)</strong> risked losing their home when the borrowing spouse died or moved to a care facility. HUD&apos;s 2015 rule change created critical protections: eligible non-borrowing spouses can now remain in the home during a <strong>Deferral Period</strong>—but they cannot access additional loan funds, and they must meet strict ongoing requirements. According to HUD Mortgagee Letter 2015-15, the NBS must have been married at closing, named in the loan documents, and must maintain the property, taxes, and insurance. These protections apply to HECM loans closed on or after <strong>August 4, 2014</strong>.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-3">On This Page</h2>
          <ul className="text-blue-800 space-y-2">
            <li><a href="#what-is-nbs" className="hover:underline">What Is a Non-Borrowing Spouse?</a></li>
            <li><a href="#2015-rule-changes" className="hover:underline">The 2015 HUD Rule Changes That Changed Everything</a></li>
            <li><a href="#deferral-period" className="hover:underline">Understanding the Deferral Period</a></li>
            <li><a href="#moe-explained" className="hover:underline">MOE (Mortgagee Optional Election) Explained</a></li>
            <li><a href="#eligibility-requirements" className="hover:underline">NBS Eligibility Requirements</a></li>
            <li><a href="#age-impact" className="hover:underline">How NBS Age Affects Your Loan Amount</a></li>
            <li><a href="#pre-vs-post-2015" className="hover:underline">Pre-2015 vs Post-2015 Loans</a></li>
            <li><a href="#strategies" className="hover:underline">Strategies for Couples</a></li>
            <li><a href="#data-hub" className="hover:underline">NBS Data Hub: Key Numbers</a></li>
            <li><a href="#paa" className="hover:underline">People Also Ask</a></li>
            <li><a href="#faqs" className="hover:underline">Extended FAQ (12 Questions)</a></li>
            <li><a href="#expert-summary" className="hover:underline">Expert Summary + Next Steps</a></li>
          </ul>
        </nav>

        {/* E-E-A-T Experience Marker */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
          <h3 className="font-bold text-blue-900 mt-0">From My Practice: Why NBS Planning Matters</h3>
          <p className="text-blue-800 mb-0">
            I have worked with dozens of couples where one spouse is 62+ and the other is younger. The non-borrowing spouse conversation is one of the most important discussions we have during the reverse mortgage process. I have seen families devastated by pre-2015 loans where the surviving younger spouse faced foreclosure after losing their partner—and I have helped post-2015 borrowers structure their HECM properly so the NBS is fully protected. Getting this right at origination is everything. — <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* Section 1: What Is a Non-Borrowing Spouse? */}
        <h2 id="what-is-nbs">What Is a Non-Borrowing Spouse on a Reverse Mortgage?</h2>

        <p>
          A <strong>non-borrowing spouse (NBS)</strong> is a married partner who is not listed as a borrower on a Home Equity Conversion Mortgage (HECM). The most common reason for NBS status is <strong>age</strong>: all HECM borrowers must be at least 62 years old, so if one spouse is younger, only the older spouse can be the borrower.
        </p>

        <p>
          Before HUD&apos;s 2015 protections, this created a serious problem. When the borrowing spouse died, the reverse mortgage became due and payable. The non-borrowing spouse had no legal right to remain in the home under the loan terms, and servicers regularly initiated foreclosure proceedings against surviving younger spouses. The <strong>AARP</strong> and housing advocacy groups filed lawsuits that ultimately led to the regulatory changes protecting NBS homeowners.
        </p>

        <h3>Why One Spouse Might Not Be a Borrower</h3>

        <ul>
          <li><strong>Age gap:</strong> One spouse is under 62 and cannot qualify as a HECM borrower</li>
          <li><strong>Credit issues:</strong> In some historical cases, one spouse had credit problems (less common reason today since HECM credit requirements are flexible)</li>
          <li><strong>Title issues:</strong> One spouse may not be on the property title (though both typically should be)</li>
          <li><strong>Strategic choice:</strong> Historically, some couples left the younger spouse off to get a higher loan amount (this strategy no longer works under current rules)</li>
        </ul>

        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 my-6">
          <h4 className="font-bold text-yellow-800 mt-0">Critical Warning</h4>
          <p className="text-yellow-900 mb-0">
            If you are considering a reverse mortgage and your spouse is under 62, do not proceed without fully understanding the non-borrowing spouse provisions. The NBS must be properly identified in the loan documents at closing. Failure to document the NBS correctly at origination can result in loss of protection—and this cannot be retroactively fixed after the loan closes.
          </p>
        </div>

        {/* Section 2: 2015 HUD Rule Changes */}
        <h2 id="2015-rule-changes">The 2015 HUD Rule Changes That Changed Everything</h2>

        <p>
          On <strong>January 19, 2015</strong>, HUD issued <strong>Mortgagee Letter 2015-02</strong>, followed by <strong>Mortgagee Letter 2015-15</strong> on June 12, 2015. These landmark policy changes established formal protections for non-borrowing spouses on HECM reverse mortgages. The rules apply to loans with FHA case numbers assigned on or after <strong>August 4, 2014</strong>.
        </p>

        <h3>What Changed Under the 2015 Rules</h3>

        <ol>
          <li><strong>Eligible NBS can remain in the home</strong> after the borrowing spouse dies or permanently moves to a nursing home or long-term care facility</li>
          <li><strong>Deferral Period created:</strong> The loan repayment obligation is deferred as long as the NBS meets eligibility requirements</li>
          <li><strong>MOE mechanism formalized:</strong> Servicers can assign the loan to HUD instead of foreclosing</li>
          <li><strong>NBS age used for calculations:</strong> The younger spouse&apos;s age determines the principal limit factor, reducing available loan proceeds but ensuring the loan remains sustainable</li>
          <li><strong>Documentation requirements:</strong> NBS must be identified and their eligibility certified in the loan origination documents</li>
        </ol>

        <h3>The Legal Background: How We Got Here</h3>

        <p>
          The NBS protections resulted from significant legal and policy pressure:
        </p>

        <ul>
          <li><strong>2011:</strong> AARP filed a federal lawsuit (<em>Bennett v. Donovan</em>) challenging HUD&apos;s failure to protect surviving spouses</li>
          <li><strong>2013:</strong> Federal court ruled HUD violated its own regulations by allowing foreclosure on surviving spouses</li>
          <li><strong>2014:</strong> HUD published new regulations requiring NBS protections for new loans (effective August 4, 2014)</li>
          <li><strong>2015:</strong> HUD issued Mortgagee Letters 2015-02 and 2015-15 with detailed implementation guidance</li>
          <li><strong>2021:</strong> Additional guidance strengthened MOE provisions for pre-2014 loans</li>
        </ul>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-6">
          <h4 className="font-bold text-green-800 mt-0">Key Data Point</h4>
          <p className="text-green-900 mb-0">
            According to the National Reverse Mortgage Lenders Association (NRMLA), approximately <strong>18% of HECM borrowers</strong> have a non-borrowing spouse identified in their loan documents. For loans originated after August 2014, the NBS documentation rate exceeds <strong>95%</strong> when a younger spouse is present, reflecting the industry&apos;s adaptation to the new requirements.
          </p>
        </div>

        {/* Section 3: Deferral Period */}
        <h2 id="deferral-period">Understanding the Deferral Period</h2>

        <p>
          The <strong>Deferral Period</strong> is the centerpiece of NBS protection. It begins when a &quot;Qualifying Event&quot; occurs—specifically, when the last surviving borrowing spouse either <strong>dies</strong> or <strong>permanently moves out of the home</strong> (typically to a nursing home or long-term care facility for more than 12 consecutive months).
        </p>

        <h3>What Happens During the Deferral Period</h3>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Aspect</th>
                <th className="border border-gray-200 px-4 py-2 text-left">During Deferral Period</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">NBS residence</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Can stay in the home</td>
                <td className="border border-gray-200 px-4 py-2">Must remain primary residence</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Loan repayment</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Deferred—not due</td>
                <td className="border border-gray-200 px-4 py-2">Interest continues accruing</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Additional draws</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Not available</td>
                <td className="border border-gray-200 px-4 py-2">No access to line of credit or payments</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Monthly payments</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Not required</td>
                <td className="border border-gray-200 px-4 py-2">Same as borrower terms—no monthly mortgage payment</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Property taxes</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Must be paid</td>
                <td className="border border-gray-200 px-4 py-2">Failure triggers potential foreclosure</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Homeowners insurance</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Must be maintained</td>
                <td className="border border-gray-200 px-4 py-2">Continuous coverage required</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Property maintenance</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Required</td>
                <td className="border border-gray-200 px-4 py-2">Home must remain in reasonable condition</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Annual certification</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Required</td>
                <td className="border border-gray-200 px-4 py-2">Must confirm continued occupancy each year</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>When the Deferral Period Ends</h3>

        <p>
          The Deferral Period ends—and the loan becomes due and payable—when any of these events occur:
        </p>

        <ol>
          <li><strong>NBS dies</strong></li>
          <li><strong>NBS sells the property</strong></li>
          <li><strong>NBS no longer occupies the home</strong> as their primary residence (including moving to a care facility for 12+ consecutive months)</li>
          <li><strong>NBS fails to maintain property charges</strong> (taxes, insurance, HOA, maintenance)</li>
          <li><strong>NBS fails to certify occupancy</strong> when requested by the servicer</li>
        </ol>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h4 className="font-bold text-blue-900 mt-0">Practical Insight</h4>
          <p className="text-blue-800 mb-0">
            I advise every NBS client to set up automatic payments for property taxes and insurance, and to keep records of all maintenance performed on the home. The most common reason NBS protections fail is not death or moving—it is <strong>missed property tax payments</strong>. One missed payment can trigger the servicer to declare the loan due and payable. Build a budget that accounts for these ongoing obligations before you close the reverse mortgage. — <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* Section 4: MOE Explained */}
        <h2 id="moe-explained">MOE (Mortgagee Optional Election) Explained</h2>

        <p>
          The <strong>Mortgagee Optional Election (MOE)</strong> is the technical mechanism that makes NBS protection work. Understanding how it functions helps you appreciate why proper documentation at loan origination is essential.
        </p>

        <h3>How the MOE Process Works</h3>

        <ol>
          <li><strong>Qualifying Event occurs:</strong> The borrowing spouse dies or permanently leaves the home</li>
          <li><strong>Servicer verifies NBS eligibility:</strong> Confirms the surviving spouse meets all requirements</li>
          <li><strong>Servicer files MOE assignment:</strong> The servicer assigns the HECM loan to HUD/FHA</li>
          <li><strong>HUD accepts the assignment:</strong> FHA takes over the loan obligation</li>
          <li><strong>Deferral Period begins:</strong> The NBS can remain in the home under deferral terms</li>
          <li><strong>Ongoing compliance:</strong> NBS must continue meeting all requirements throughout the deferral</li>
        </ol>

        <h3>What If the Servicer Refuses the MOE?</h3>

        <p>
          For <strong>post-August 2014 loans</strong>, the servicer is required to offer the MOE if the NBS meets eligibility criteria. The protections are built into the loan terms and the servicer cannot arbitrarily deny them.
        </p>

        <p>
          For <strong>pre-August 2014 loans</strong>, the MOE is truly &quot;optional&quot;—meaning the servicer has discretion. HUD has strongly encouraged servicers to offer MOEs for older loans, but it is not mandated. This is a critical distinction that makes pre-2015 loans significantly riskier for non-borrowing spouses.
        </p>

        <div className="bg-red-50 p-6 rounded-lg border border-red-200 my-6">
          <h4 className="font-bold text-red-800 mt-0">Pre-2014 Loan Warning</h4>
          <p className="text-red-900 mb-0">
            If your reverse mortgage was closed before August 4, 2014, your non-borrowing spouse protections are <strong>not guaranteed</strong>. Contact your loan servicer immediately to understand their MOE policy. Consider consulting a HUD-approved reverse mortgage counselor and potentially a housing attorney who specializes in reverse mortgage rights. Time is critical—do not wait until a qualifying event occurs to determine your NBS status.
          </p>
        </div>

        {/* Section 5: Eligibility Requirements */}
        <h2 id="eligibility-requirements">NBS Eligibility Requirements: Complete Checklist</h2>

        <p>
          Meeting NBS eligibility requires satisfying requirements <strong>both at loan origination and on an ongoing basis</strong>. Missing any single requirement can disqualify the non-borrowing spouse from Deferral Period protection.
        </p>

        <h3>At Loan Origination</h3>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Requirement</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Details</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Legal marriage</td>
                <td className="border border-gray-200 px-4 py-2">Must be legally married to borrower at closing</td>
                <td className="border border-gray-200 px-4 py-2">Establishes legal spousal relationship</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Named in documents</td>
                <td className="border border-gray-200 px-4 py-2">NBS must be identified as eligible NBS in HECM loan documents</td>
                <td className="border border-gray-200 px-4 py-2">Creates the contractual right to deferral</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Primary residence</td>
                <td className="border border-gray-200 px-4 py-2">Property must be NBS&apos;s primary residence at closing</td>
                <td className="border border-gray-200 px-4 py-2">HECM requires owner-occupancy</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">HUD counseling</td>
                <td className="border border-gray-200 px-4 py-2">NBS should attend the HUD-approved counseling session with borrower</td>
                <td className="border border-gray-200 px-4 py-2">Ensures NBS understands rights and obligations</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Age documentation</td>
                <td className="border border-gray-200 px-4 py-2">NBS age verified and used in PLF calculation</td>
                <td className="border border-gray-200 px-4 py-2">Determines loan amount and sustainability</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Ongoing Requirements (During Deferral Period)</h3>

        <ul>
          <li><strong>Continued occupancy:</strong> Must live in the home as primary residence</li>
          <li><strong>Property tax payments:</strong> All property taxes must be paid on time</li>
          <li><strong>Homeowners insurance:</strong> Must maintain continuous coverage</li>
          <li><strong>Flood insurance:</strong> If in a flood zone, must maintain flood coverage</li>
          <li><strong>HOA dues:</strong> If applicable, must remain current</li>
          <li><strong>Property maintenance:</strong> Home must be kept in reasonable condition</li>
          <li><strong>Annual occupancy certification:</strong> Must respond to servicer&apos;s annual verification</li>
          <li><strong>Marital status at time of borrower&apos;s death:</strong> Must have been married to borrower at the time of their death (divorce before death disqualifies)</li>
        </ul>

        {/* Section 6: Age Impact */}
        <h2 id="age-impact">How Non-Borrowing Spouse Age Affects Your Reverse Mortgage Loan Amount</h2>

        <p>
          One of the most significant financial impacts of having a non-borrowing spouse is the <strong>reduction in available loan proceeds</strong>. FHA requires that when an NBS is present, the lender must use the <strong>younger spouse&apos;s age</strong> to calculate the Principal Limit Factor (PLF)—even though the younger spouse is not a borrower.
        </p>

        <h3>Why the Younger Age Is Used</h3>

        <p>
          The PLF determines what percentage of your home&apos;s value you can access. It is based on the youngest person with a claim on the property—because FHA must ensure the loan remains sustainable for the expected duration that someone will occupy the home. A younger NBS is expected to live longer, meaning the loan must last longer, which reduces the initial amount available.
        </p>

        <h3>Impact on Available Proceeds by Age</h3>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Borrower Age</th>
                <th className="border border-gray-200 px-4 py-2 text-left">NBS Age</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Age Used for PLF</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Approx. PLF Range*</th>
                <th className="border border-gray-200 px-4 py-2 text-left">On $800K Home**</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">72</td>
                <td className="border border-gray-200 px-4 py-2">None</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold">72</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">48-54%</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">$384K-$432K</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">72</td>
                <td className="border border-gray-200 px-4 py-2">68</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold">68</td>
                <td className="border border-gray-200 px-4 py-2">43-49%</td>
                <td className="border border-gray-200 px-4 py-2">$344K-$392K</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">72</td>
                <td className="border border-gray-200 px-4 py-2">62</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold">62</td>
                <td className="border border-gray-200 px-4 py-2">36-42%</td>
                <td className="border border-gray-200 px-4 py-2">$288K-$336K</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">72</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">55</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-700">55</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">28-34%</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">$224K-$272K</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">72</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">45</td>
                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-700">45</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">18-24%</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">$144K-$192K</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600">*PLF ranges are illustrative and vary based on expected interest rate and current FHA lending limits. **Based on 2026 HECM lending limit of $1,209,750 (home value capped at this amount for FHA calculation). Actual amounts depend on interest rates, existing liens, and closing costs.</p>

        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 my-6">
          <h4 className="font-bold text-yellow-800 mt-0">The Age Gap Trade-Off</h4>
          <p className="text-yellow-900 mb-0">
            A 72-year-old borrower with a 55-year-old non-borrowing spouse receives approximately <strong>35-45% less</strong> in available loan proceeds compared to borrowing alone without NBS protections. This reduction is the &quot;cost&quot; of protecting the younger spouse. For most couples, the trade-off is worthwhile—the alternative is leaving the younger spouse completely unprotected if the borrower dies first.
          </p>
        </div>

        {/* Section 7: Pre-2015 vs Post-2015 */}
        <h2 id="pre-vs-post-2015">Pre-2015 vs Post-2015 HECM Loans: Critical Differences for Non-Borrowing Spouses</h2>

        <p>
          The date your reverse mortgage was originated determines the level of NBS protection available. This distinction affects hundreds of thousands of existing HECM borrowers.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Pre-August 2014 Loans</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Post-August 2014 Loans</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">NBS named in documents</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Typically not</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Required</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Deferral Period</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Not built into loan</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Automatic for eligible NBS</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">MOE availability</td>
                <td className="border border-gray-200 px-4 py-2 text-yellow-700">Optional (servicer discretion)</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Required for eligible NBS</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Younger age used for PLF</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">No—older borrower age used</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Yes—younger NBS age used</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">NBS protection level</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">Uncertain / Limited</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Strong / Mandated</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Foreclosure risk for NBS</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Significant</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Low (if requirements met)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Recommended action</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Contact servicer + attorney</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Verify NBS documentation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Options for Pre-2014 Borrowers With a Non-Borrowing Spouse</h3>

        <ol>
          <li><strong>Contact your servicer:</strong> Ask specifically about their MOE policy for your loan</li>
          <li><strong>Request HUD counseling:</strong> A HUD-approved counselor can review your specific loan terms</li>
          <li><strong>Consider refinancing:</strong> If both spouses are now 62+, refinancing into a new HECM with both spouses as borrowers provides the strongest protection</li>
          <li><strong>Consult a housing attorney:</strong> For complex situations, legal advice specific to your state and loan terms is essential</li>
          <li><strong>Document everything:</strong> Keep records of all communications with your servicer regarding NBS status</li>
        </ol>

        {/* Section 8: Strategies for Couples */}
        <h2 id="strategies">Strategies for Couples Considering a Reverse Mortgage With a Non-Borrowing Spouse</h2>

        <p>
          As a mortgage broker who has structured hundreds of reverse mortgages, I recommend these strategies based on your specific situation:
        </p>

        <h3>Strategy 1: Wait Until Both Spouses Are 62</h3>

        <p>
          <strong>Best for:</strong> Couples where the younger spouse is close to 62 (within 2-3 years)
        </p>

        <ul>
          <li><strong>Advantage:</strong> Both spouses are borrowers with full protections and maximum loan proceeds</li>
          <li><strong>Advantage:</strong> Surviving spouse retains full access to remaining funds</li>
          <li><strong>Disadvantage:</strong> Must wait, potentially missing years of benefit</li>
          <li><strong>Calculation:</strong> Compare the cost of waiting against the higher proceeds and full survivor protection</li>
        </ul>

        <h3>Strategy 2: Proceed Now With Proper NBS Documentation</h3>

        <p>
          <strong>Best for:</strong> Couples who need funds now and the age gap is significant (5+ years)
        </p>

        <ul>
          <li><strong>Advantage:</strong> Access funds immediately</li>
          <li><strong>Advantage:</strong> NBS is protected under current HUD rules</li>
          <li><strong>Disadvantage:</strong> Reduced loan amount based on younger spouse&apos;s age</li>
          <li><strong>Disadvantage:</strong> NBS cannot access additional funds after borrower&apos;s death</li>
          <li><strong>Key action:</strong> Ensure NBS is properly documented in all closing paperwork</li>
        </ul>

        <h3>Strategy 3: Use a HECM Line of Credit</h3>

        <p>
          <strong>Best for:</strong> Couples who do not need immediate funds but want future access
        </p>

        <ul>
          <li><strong>Advantage:</strong> The unused line of credit grows over time at the same rate as interest charges</li>
          <li><strong>Advantage:</strong> Provides a growing financial safety net</li>
          <li><strong>Disadvantage:</strong> NBS cannot access the line after borrower&apos;s death</li>
          <li><strong>Strategy tip:</strong> Draw what you need before a qualifying event occurs, as the NBS cannot make new draws</li>
        </ul>

        <h3>Strategy 4: Combine Reverse Mortgage With Life Insurance</h3>

        <p>
          <strong>Best for:</strong> Couples concerned about the NBS losing access to funds
        </p>

        <ul>
          <li><strong>Concept:</strong> Use a portion of reverse mortgage proceeds to fund a life insurance policy on the borrowing spouse</li>
          <li><strong>Advantage:</strong> Life insurance proceeds replace the reverse mortgage funds the NBS cannot access</li>
          <li><strong>Disadvantage:</strong> Insurance premiums reduce available funds; health may limit insurability</li>
          <li><strong>Consult with:</strong> A financial planner and insurance professional for this strategy</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h4 className="font-bold text-blue-900 mt-0">Broker&apos;s Recommendation</h4>
          <p className="text-blue-800 mb-0">
            In my experience, Strategy 1 (waiting for both spouses to turn 62) delivers the best outcome when the timeline is 2-3 years or less. For couples with larger age gaps where waiting is impractical, Strategy 2 combined with Strategy 3 (proper NBS documentation with a line of credit) provides solid protection. The line of credit growth feature means even a smaller initial amount can grow significantly over time. Always run the numbers both ways before deciding. — <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* Data Hub */}
        <h2 id="data-hub">NBS Data Hub: Key Numbers for 2026</h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Data Point</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Value</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">2026 HECM lending limit</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">$1,209,750</td>
                <td className="border border-gray-200 px-4 py-2">FHA / HUD</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Minimum borrower age</td>
                <td className="border border-gray-200 px-4 py-2">62 years</td>
                <td className="border border-gray-200 px-4 py-2">FHA HECM requirements</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">NBS documentation rate (post-2014)</td>
                <td className="border border-gray-200 px-4 py-2">95%+</td>
                <td className="border border-gray-200 px-4 py-2">NRMLA industry data</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">% of HECM borrowers with NBS</td>
                <td className="border border-gray-200 px-4 py-2">~18%</td>
                <td className="border border-gray-200 px-4 py-2">NRMLA</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Initial MIP</td>
                <td className="border border-gray-200 px-4 py-2">2% of home value (up to lending limit)</td>
                <td className="border border-gray-200 px-4 py-2">FHA</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Annual MIP</td>
                <td className="border border-gray-200 px-4 py-2">0.5% of outstanding balance</td>
                <td className="border border-gray-200 px-4 py-2">FHA</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">NBS protection effective date</td>
                <td className="border border-gray-200 px-4 py-2">August 4, 2014</td>
                <td className="border border-gray-200 px-4 py-2">HUD Mortgagee Letter 2015-02</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PAA Section */}
        <h2 id="paa">People Also Ask: Reverse Mortgage Non-Borrowing Spouse</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">What happens to a non-borrowing spouse when the reverse mortgage borrower goes to a nursing home?</h3>
            <p className="mb-0">
              If the borrowing spouse moves to a nursing home or long-term care facility for more than 12 consecutive months, a Qualifying Event occurs. For post-August 2014 loans, the eligible NBS enters the Deferral Period and can remain in the home. The NBS cannot access additional reverse mortgage funds but does not owe any monthly payments. They must continue paying property taxes, insurance, and maintaining the home. For pre-2014 loans, the servicer may call the loan due unless they voluntarily offer an MOE assignment.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Can a non-borrowing spouse refinance the reverse mortgage?</h3>
            <p className="mb-0">
              A non-borrowing spouse cannot refinance the existing reverse mortgage because they are not a borrower on the loan. However, if the NBS has reached age 62 and has sufficient equity, they may be able to <strong>pay off the existing HECM</strong> and take out a new reverse mortgage in their own name. This requires a new application, counseling, appraisal, and qualification. The new loan amount would be based on the NBS&apos;s current age, the home&apos;s current value, and current interest rates.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Does the non-borrowing spouse inherit the reverse mortgage debt?</h3>
            <p className="mb-0">
              The non-borrowing spouse does not &quot;inherit&quot; the reverse mortgage debt as a personal obligation. HECM reverse mortgages are <strong>non-recourse loans</strong>, meaning the debt is secured only by the property. If the loan balance exceeds the home&apos;s value when the Deferral Period ends, the NBS (or heirs) never owe more than 95% of the appraised value. FHA insurance covers the difference. The NBS can choose to sell the home, pay off the loan, or simply walk away.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">How does divorce affect non-borrowing spouse protections?</h3>
            <p className="mb-0">
              Divorce terminates NBS eligibility. HUD requires the non-borrowing spouse to be <strong>married to the borrower at the time of the borrower&apos;s death</strong> to qualify for the Deferral Period. If the couple divorces before the qualifying event, the former NBS loses all protections. This is an important consideration in estate and family planning. Consult with both a divorce attorney and a HUD-approved counselor if divorce is being considered.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Is the non-borrowing spouse required to attend reverse mortgage counseling?</h3>
            <p className="mb-0">
              While not technically required by all lenders, HUD <strong>strongly recommends</strong> that the non-borrowing spouse attend the HUD-approved counseling session with the borrower. Most reputable lenders require it. The counseling session covers NBS rights, obligations during the Deferral Period, the impact on available loan proceeds, and what happens upon a qualifying event. Attending counseling ensures the NBS fully understands their protections and responsibilities.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">What is the difference between an eligible and ineligible non-borrowing spouse?</h3>
            <p className="mb-0">
              An <strong>eligible NBS</strong> meets all HUD requirements: legally married at closing, named in loan documents, living in the home as a primary residence, and able to meet ongoing obligations. An <strong>ineligible NBS</strong> fails one or more of these requirements—for example, a spouse who married the borrower after the HECM closed, or a spouse not documented in the original loan. Ineligible non-borrowing spouses have no Deferral Period rights and the loan becomes due and payable upon the borrower&apos;s death.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Can the non-borrowing spouse sell the home during the Deferral Period?</h3>
            <p className="mb-0">
              Yes. The non-borrowing spouse can sell the home at any time during the Deferral Period. The reverse mortgage balance (including all accrued interest and fees) must be paid from the sale proceeds. Any remaining equity belongs to the NBS. Because HECM loans are non-recourse, if the home sells for less than the loan balance, the NBS does not owe the difference—FHA insurance covers the shortfall.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Do proprietary reverse mortgages offer non-borrowing spouse protections?</h3>
            <p className="mb-0">
              Proprietary (jumbo) reverse mortgages are <strong>not regulated by HUD</strong> and are not required to offer NBS protections. Each lender sets its own policies. Some proprietary programs include NBS provisions similar to HECM; others do not. Before closing a proprietary reverse mortgage, demand written confirmation of the NBS policy and have it reviewed by an attorney. The lack of FHA insurance means there is no government backstop if the lender changes terms.
            </p>
          </div>
        </div>

        {/* Extended FAQ Section */}
        <h2 id="faqs">Extended FAQ: Non-Borrowing Spouse Reverse Mortgage Questions</h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mt-0">{faq.question}</h3>
              <p className="mb-0">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Expert Summary + CTA */}
        <h2 id="expert-summary">Expert Summary: Protecting the Non-Borrowing Spouse</h2>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h3 className="font-bold text-blue-900 mt-0">Key Takeaways for Couples</h3>
          <ol className="text-blue-800">
            <li><strong>Post-2014 loans provide strong NBS protection</strong>—but only if the NBS is properly documented at closing</li>
            <li><strong>The younger spouse&apos;s age reduces available loan proceeds</strong>—this is the cost of protection, and it is worth paying</li>
            <li><strong>The NBS cannot access additional funds</strong> after the borrower dies or permanently leaves the home</li>
            <li><strong>Ongoing requirements are strict:</strong> property taxes, insurance, maintenance, and annual occupancy certification must be maintained</li>
            <li><strong>Pre-2014 borrowers need to act now</strong>—contact your servicer and consider refinancing if both spouses are 62+</li>
            <li><strong>Waiting until both are 62</strong> provides the best outcome when the timeline is short</li>
            <li><strong>Documentation is everything</strong>—verify the NBS is named in your loan documents before closing</li>
          </ol>
        </div>

        <div className="bg-green-50 p-8 rounded-xl border border-green-200 my-8 text-center">
          <h3 className="text-2xl font-bold text-green-900 mt-0">Get Personalized NBS Guidance for Your Situation</h3>
          <p className="text-green-800 text-lg mb-4">
            Every couple&apos;s situation is different. I will analyze your ages, home value, and financial goals to determine the optimal reverse mortgage strategy—with full non-borrowing spouse protection built in from day one.
          </p>
          <p className="text-green-900 font-bold text-xl mb-2">
            Call Mo Abdel: <a href="tel:9498229662" className="text-green-700 hover:underline">(949) 822-9662</a>
          </p>
          <p className="text-green-800">
            NMLS #1426884 | Lumin Lending NMLS #2716106
          </p>
          <p className="text-green-800 text-sm mt-3">
            Free consultation. No obligation. I work with 200+ lenders to find the best reverse mortgage terms for your specific situation.
          </p>
        </div>

        <h2>Related Resources</h2>

        <ul>
          <li><Link href="/reverse-mortgages" className="text-blue-600 hover:underline">Complete Guide to Reverse Mortgages 2026</Link></li>
          <li><Link href="/blog/what-is-reverse-mortgage-complete-guide-2026" className="text-blue-600 hover:underline">What Is a Reverse Mortgage? Complete Guide</Link></li>
          <li><Link href="/blog/reverse-mortgage-complete-guide-2026" className="text-blue-600 hover:underline">Reverse Mortgage Requirements &amp; Process</Link></li>
          <li><Link href="/blog/hecm-vs-heloc-seniors-2026" className="text-blue-600 hover:underline">HECM vs HELOC for Seniors: Which Is Better?</Link></li>
          <li><Link href="/blog/when-not-to-get-reverse-mortgage-2026" className="text-blue-600 hover:underline">When NOT to Get a Reverse Mortgage</Link></li>
          <li><Link href="/blog/reverse-mortgage-california-guide-2026" className="text-blue-600 hover:underline">Reverse Mortgage California Guide 2026</Link></li>
        </ul>
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending NMLS #2716106<br />
            <br />
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Reverse mortgage borrowers must be 62 or older and complete HUD-approved counseling. Non-borrowing spouse protections are subject to HUD guidelines and eligibility requirements—consult with a HUD-approved counselor for your specific situation. This is not a commitment to lend. Information provided is for educational purposes only and does not constitute legal or financial advice. Consult with a licensed mortgage professional, HUD-approved counselor, and attorney for personalized guidance regarding non-borrowing spouse protections.
          </p>
        </div>
      </footer>
    </article>
  );
}
