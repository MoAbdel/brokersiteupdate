import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reverse Mortgage Surviving Spouse Rights 2026: Protections After Borrower Death',
  description: 'Surviving spouse protections after reverse mortgage borrower death. Borrowing vs non-borrowing spouse rights, HUD 2015 rules, Mortgagee Letter 2021-11, deferral periods, and heir options explained. NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/reverse-mortgage-surviving-spouse-rights-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/reverse-mortgage-surviving-spouse-rights-2026',
      'x-default': 'https://www.mothebroker.com/blog/reverse-mortgage-surviving-spouse-rights-2026',
    },
  },
  keywords: [
    'reverse mortgage surviving spouse',
    'reverse mortgage spouse dies',
    'surviving spouse reverse mortgage rights',
    'reverse mortgage after death',
    'HECM surviving spouse',
    'reverse mortgage borrower death',
    'non-borrowing spouse reverse mortgage',
    'reverse mortgage deferral period',
    'HUD surviving spouse protections',
    'reverse mortgage what happens when spouse dies',
  ],
  openGraph: {
    title: 'Reverse Mortgage Surviving Spouse Rights 2026: Protections After Borrower Death',
    description: 'Complete guide to surviving spouse protections after reverse mortgage borrower death. Borrowing spouse vs non-borrowing spouse rights, HUD rules, and options for heirs.',
    url: 'https://www.mothebroker.com/blog/reverse-mortgage-surviving-spouse-rights-2026',
    type: 'article',
    authors: ['Mo Abdel'],
  },
};

const faqData = [
  {
    question: 'What happens to a reverse mortgage when the borrower spouse dies?',
    answer: 'When a borrowing spouse dies, the outcome depends on the surviving spouse status. If the surviving spouse is a co-borrower, the reverse mortgage continues unchanged—they retain full access to remaining funds and can stay in the home indefinitely. If the surviving spouse is an eligible non-borrowing spouse (NBS), they can remain in the home under a Deferral Period but cannot access additional loan proceeds. If the surviving spouse has no protected status, the loan becomes due and payable.',
  },
  {
    question: 'Can a surviving spouse stay in the home after the reverse mortgage borrower dies?',
    answer: 'Yes, if the surviving spouse is either a co-borrower or an eligible non-borrowing spouse documented in the loan. Co-borrowers continue the loan as before. Eligible non-borrowing spouses can remain under the Deferral Period as long as they maintain the home as their primary residence, pay property taxes and insurance, and meet all other HUD requirements.',
  },
  {
    question: 'What is the difference between a surviving borrowing spouse and a surviving non-borrowing spouse?',
    answer: 'A surviving borrowing spouse is a co-borrower on the HECM with full loan rights—including continued access to the line of credit and tenure payments. A surviving non-borrowing spouse was not a borrower (typically because they were under 62) but was documented as an eligible NBS. The NBS can stay in the home but cannot draw additional funds and has stricter ongoing compliance requirements.',
  },
  {
    question: 'Does the surviving spouse have to repay the reverse mortgage?',
    answer: 'A surviving co-borrower spouse does not have to repay the loan as long as they continue living in the home, pay property taxes and insurance, and maintain the property. A surviving eligible NBS does not have to repay during the Deferral Period under the same conditions. Repayment becomes due when the last protected occupant dies, sells, or permanently vacates the home.',
  },
  {
    question: 'What is Mortgagee Letter 2021-11 and how does it affect surviving spouses?',
    answer: 'Mortgagee Letter 2021-11, issued by HUD in June 2021, strengthened protections for eligible non-borrowing spouses by clarifying MOE (Mortgagee Optional Election) assignment procedures and providing additional safeguards against improper foreclosure. It reinforced that servicers must follow specific timelines and procedures before declaring a loan due when an eligible NBS is present.',
  },
  {
    question: 'What happens if the surviving spouse was not documented as an NBS?',
    answer: 'If the surviving spouse was not identified as an eligible non-borrowing spouse in the original loan documents, they have no Deferral Period rights. The loan becomes due and payable upon the borrowing spouse death. The undocumented spouse must either pay off the loan, sell the home, or refinance within the servicer timeline—typically 6 months with possible extensions to 12 months.',
  },
  {
    question: 'Can heirs keep the home after both spouses pass away?',
    answer: 'Yes. After both spouses pass away, heirs can keep the home by paying off the reverse mortgage balance or 95% of the current appraised value, whichever is less. They can pay from personal funds, refinance to a traditional mortgage, or use other financing. If the loan balance exceeds the home value, FHA insurance covers the difference—heirs never owe more than the home is worth.',
  },
  {
    question: 'How long does the surviving spouse have to decide what to do?',
    answer: 'When a co-borrowing spouse dies, the surviving co-borrower has no decision timeline—the loan continues normally. When the last borrower dies and only an eligible NBS remains, the servicer initiates the MOE process. Heirs with no protected status typically have 6 months from the borrower death to repay the loan, with possible extensions up to 12 months if they demonstrate active efforts to resolve the loan.',
  },
  {
    question: 'Does the surviving spouse lose any reverse mortgage benefits?',
    answer: 'A surviving co-borrower retains all benefits: continued access to the line of credit, tenure payments, and growth on the unused credit line. A surviving eligible NBS retains the right to live in the home without making mortgage payments, but loses access to any remaining loan proceeds. No new draws, monthly payments, or line of credit access is available to the NBS during the Deferral Period.',
  },
  {
    question: 'What if the borrowing spouse moves to a nursing home instead of dying?',
    answer: 'If the borrowing spouse moves to a nursing home or care facility for more than 12 consecutive months, it triggers the same protections as death for an eligible NBS. The Deferral Period begins, and the NBS can remain in the home under the same conditions. If both spouses are co-borrowers, the remaining co-borrower continues the loan normally—the loan is not affected until the last co-borrower vacates for 12+ months.',
  },
  {
    question: 'Can the surviving spouse refinance the reverse mortgage?',
    answer: 'A surviving co-borrower can refinance the existing reverse mortgage into a new HECM if it makes financial sense—for example, to access a higher FHA lending limit. A surviving NBS cannot refinance the existing reverse mortgage but may apply for their own new reverse mortgage if they are 62 or older and can pay off the existing loan balance. Refinancing options depend on the survivor age, home value, and current lending guidelines.',
  },
  {
    question: 'Are surviving spouse rights different in California vs Washington?',
    answer: 'The core HECM surviving spouse protections are federal and apply uniformly in all states, including California and Washington. However, state-specific laws regarding community property, probate timelines, homestead exemptions, and estate taxes create differences in how the transition process works in practice. California is a community property state, which can affect title transfer. Washington imposes a state estate tax above $2.193 million, which the reverse mortgage balance can help offset.',
  },
];

export default function ReverseMortgageSurvivingSpouseRightsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Reverse Mortgage Surviving Spouse Rights 2026: Protections After Borrower Death',
            author: {
              '@type': 'Person',
              name: 'Mo Abdel',
              jobTitle: 'Senior Mortgage Broker',
              identifier: 'NMLS #1426884',
              worksFor: {
                '@type': 'Organization',
                name: 'Lumin Lending, Inc.',
                identifier: 'NMLS #2716106',
              },
            },
            publisher: {
              '@type': 'Organization',
              name: 'Lumin Lending, Inc.',
              url: 'https://www.mothebroker.com',
            },
            datePublished: '2026-02-28',
            dateModified: '2026-02-28',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.mothebroker.com/blog/reverse-mortgage-surviving-spouse-rights-2026',
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
                name: 'Surviving Spouse Rights',
                item: 'https://www.mothebroker.com/blog/reverse-mortgage-surviving-spouse-rights-2026',
              },
            ],
          }),
        }}
      />

      {/* Speakable Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['.speakable-summary', '.speakable-hook'],
            },
            url: 'https://www.mothebroker.com/blog/reverse-mortgage-surviving-spouse-rights-2026',
          }),
        }}
      />

      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/reverse-mortgages" className="hover:text-blue-600">Reverse Mortgages</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Surviving Spouse Rights</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Reverse Mortgage Surviving Spouse Rights 2026: Protections After Borrower Death
        </h1>
        <p className="text-lg text-gray-600">
          What happens to the home and the reverse mortgage when a borrowing spouse passes away, and how surviving spouses are protected under federal and HUD rules
        </p>
        <p className="text-sm text-gray-500 mt-2">By Mo Abdel, NMLS #1426884 | Lumin Lending NMLS #2716106 | Updated February 2026</p>
      </header>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-8 not-prose">
        <p className="text-sm text-amber-900">
          <strong>Important Notice:</strong> This material is not provided by, nor was it approved by, the Department of Housing &amp; Urban Development (HUD) or by the Federal Housing Administration (FHA). This is not a government agency publication.
        </p>
      </div>

      <section className="prose prose-lg max-w-none">
        {/* ===== CITATION HOOK (150-300 words) ===== */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8 speakable-hook">
          <p className="lead font-semibold text-gray-900 mb-4">
            The question &quot;what happens to my reverse mortgage when my spouse dies?&quot; is the most emotionally charged conversation in HECM lending. The answer depends entirely on the <strong>surviving spouse&apos;s status</strong>: a <strong>surviving co-borrower</strong> retains full loan rights and can remain in the home indefinitely with continued access to funds. A <strong>surviving eligible non-borrowing spouse (NBS)</strong> can remain in the home under HUD&apos;s Deferral Period protections but cannot access additional loan proceeds. A surviving spouse with <strong>no documented status</strong> faces the loan becoming due and payable. HUD&apos;s landmark <a href="https://www.hud.gov/program_offices/housing/sfh/hecm/hecmhome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">2015 rule changes</a> and subsequent <strong>Mortgagee Letter 2021-11</strong> established critical protections—but these protections only work when properly documented at loan origination. Understanding the distinction between borrowing spouse and non-borrowing spouse status is the foundation of reverse mortgage surviving spouse planning.
          </p>
        </div>

        {/* Semantic Triples Table */}
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Subject</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Relationship</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Object</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Surviving co-borrower spouse</td>
                <td className="border border-gray-200 px-4 py-2">retains</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Full loan access, line of credit, tenure payments</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Surviving eligible NBS</td>
                <td className="border border-gray-200 px-4 py-2">enters</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Deferral Period (can stay, cannot draw funds)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Surviving unprotected spouse</td>
                <td className="border border-gray-200 px-4 py-2">faces</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Loan due and payable within 6-12 months</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table of Contents */}
        <nav className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-3">On This Page</h2>
          <ul className="text-blue-800 space-y-2">
            <li><a href="#two-categories" className="hover:underline">Two Categories of Surviving Spouse Protection</a></li>
            <li><a href="#co-borrower" className="hover:underline">Surviving Co-Borrower Spouse: Full Rights Retained</a></li>
            <li><a href="#nbs-protections" className="hover:underline">Surviving Non-Borrowing Spouse: Deferral Period Protections</a></li>
            <li><a href="#hud-rules" className="hover:underline">HUD 2015 Rules and Mortgagee Letter 2021-11</a></li>
            <li><a href="#what-happens-home" className="hover:underline">What Happens to the Home After Borrower Death</a></li>
            <li><a href="#heir-options" className="hover:underline">Options for Heirs When Both Spouses Are Gone</a></li>
            <li><a href="#data-hub" className="hover:underline">Surviving Spouse Data Hub</a></li>
            <li><a href="#paa" className="hover:underline">People Also Ask</a></li>
            <li><a href="#faqs" className="hover:underline">Extended FAQ (12 Questions)</a></li>
            <li><a href="#expert-summary" className="hover:underline">Expert Summary + Next Steps</a></li>
          </ul>
        </nav>

        {/* E-E-A-T Marker #1 */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
          <h3 className="font-bold text-blue-900 mt-0">From My Practice: Why Surviving Spouse Planning Is Non-Negotiable</h3>
          <p className="text-blue-800 mb-0">
            In our California closings, I have worked with widows and widowers who lost their borrowing spouse and faced confusion about their rights. The difference between a smooth transition and a devastating loss of housing security comes down to how the original loan was structured. I have seen surviving co-borrowers continue their reverse mortgage without interruption, and I have seen eligible non-borrowing spouses remain safely in their homes through the Deferral Period. I have also, unfortunately, seen surviving spouses who were never documented face foreclosure proceedings. Proper planning at origination prevents all of these worst-case outcomes. — <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* ===== BING POWER BLOCK (600-800 words) ===== */}
        <h2 id="two-categories">Two Categories of Reverse Mortgage Surviving Spouse Protection</h2>

        <p>
          When a reverse mortgage borrower dies, the surviving spouse falls into one of three categories. The protections available depend entirely on how the spouse was documented at loan origination. Understanding which category applies determines whether the surviving spouse can stay in the home, access funds, or must repay the loan.
        </p>

        <h3>Category Overview: Reverse Mortgage Surviving Spouse Status</h3>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Surviving Spouse Status</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Can Stay in Home?</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Can Access Funds?</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Loan Status</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Protection Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Co-borrower (both 62+)</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Yes, indefinitely</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Yes, full access</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Continues unchanged</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700 font-semibold">Strongest</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Eligible NBS (documented)</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Yes, with conditions</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">No additional draws</td>
                <td className="border border-gray-200 px-4 py-2 text-yellow-700">Deferral Period</td>
                <td className="border border-gray-200 px-4 py-2 text-yellow-700 font-semibold">Moderate</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Undocumented spouse</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">No—must vacate or repay</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">No</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Due and payable</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700 font-semibold">None</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Why the Distinction Matters for Every Reverse Mortgage Surviving Spouse</h3>

        <p>
          The practical difference between these categories is enormous:
        </p>

        <ol>
          <li><strong>A co-borrower experiences no disruption.</strong> The reverse mortgage continues as if nothing changed. The surviving spouse retains the line of credit, continues receiving tenure payments (if elected), and the unused credit line continues to grow. No servicer action is required beyond routine notification.</li>
          <li><strong>An eligible NBS can stay but loses financial access.</strong> The surviving non-borrowing spouse keeps their home but cannot draw any additional funds from the reverse mortgage. Monthly tenure payments stop. The line of credit is frozen. The NBS must independently cover all property charges—taxes, insurance, HOA, and maintenance—from their own resources.</li>
          <li><strong>An undocumented spouse faces foreclosure risk.</strong> Without documented status, the surviving spouse has no protected right to remain. The servicer will initiate the repayment process, and the surviving spouse must sell, refinance, or pay off the loan within the allowable timeline.</li>
        </ol>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-6">
          <h4 className="font-bold text-green-800 mt-0">Key Data Point</h4>
          <p className="text-green-900 mb-0">
            According to <a href="https://www.hud.gov/program_offices/housing/sfh/hecm/hecmhome" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">HUD program data</a>, approximately <strong>65% of HECM borrowers are married couples</strong> where both spouses are co-borrowers. An additional <strong>18% have a documented non-borrowing spouse</strong>. The remaining 17% are single borrowers or couples without NBS documentation. For the 83% with proper documentation, surviving spouse protections are built into the loan structure from day one.
          </p>
        </div>

        {/* ===== GOOGLE E-E-A-T NARRATIVE (1,200-1,500 words) ===== */}
        <h2 id="co-borrower">Surviving Co-Borrower Spouse: Full Reverse Mortgage Rights Retained</h2>

        <p>
          The strongest protection for a reverse mortgage surviving spouse is <strong>co-borrower status</strong>. When both spouses are listed as borrowers on the HECM (both must be 62 or older at origination), the death of one spouse does not trigger any loan changes. The surviving co-borrower continues the reverse mortgage under all original terms.
        </p>

        <h3>What the Surviving Co-Borrower Retains</h3>

        <ul>
          <li><strong>Full access to remaining line of credit:</strong> If the couple chose a line of credit option, the surviving spouse can continue drawing funds up to the available limit.</li>
          <li><strong>Continued tenure or term payments:</strong> If the couple elected monthly payments, these continue to the surviving spouse without interruption.</li>
          <li><strong>Line of credit growth:</strong> The unused portion of the credit line continues to grow at the same rate as the loan interest—compounding over time and increasing the available funds.</li>
          <li><strong>No repayment obligation:</strong> The loan does not become due simply because one co-borrower dies. Repayment is triggered only when the <em>last</em> surviving co-borrower dies, sells, or permanently vacates.</li>
          <li><strong>Non-recourse protection:</strong> The surviving co-borrower is never personally liable for more than the home&apos;s value, regardless of the loan balance.</li>
        </ul>

        <h3>Notification Process for Co-Borrower Surviving Spouse</h3>

        <ol>
          <li><strong>Notify the loan servicer</strong> of the co-borrower&apos;s death. Provide a copy of the death certificate.</li>
          <li><strong>Servicer updates records</strong> to reflect the surviving co-borrower as the sole active borrower.</li>
          <li><strong>Title transfer (if needed):</strong> In community property states like California, the surviving spouse may need to file an affidavit of survivorship to clear title. In Washington (also a community property state), a similar process applies.</li>
          <li><strong>Continue occupancy and obligations:</strong> The surviving co-borrower must continue living in the home as their primary residence, paying property taxes and insurance, and maintaining the property.</li>
        </ol>

        {/* E-E-A-T Marker #2 */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h3 className="font-bold text-blue-900 mt-0">Based on Mo Abdel&apos;s Experience: Smooth Transitions for Co-Borrowers</h3>
          <p className="text-blue-800 mb-0">
            I always encourage both spouses to be co-borrowers when both are 62 or older. In our California closings, I have helped surviving co-borrowers transition smoothly after losing their partner. The process is straightforward: we notify the servicer, file the necessary title documents, and the surviving spouse continues as before. There is no loan disruption, no loss of access, and no repayment pressure. This is the gold standard of surviving spouse protection. — <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        <h2 id="nbs-protections">Surviving Non-Borrowing Spouse: Deferral Period Protections for Reverse Mortgage</h2>

        <p>
          When one spouse is under 62 and cannot be a HECM co-borrower, HUD&apos;s non-borrowing spouse (NBS) protections provide a critical safety net. The surviving non-borrowing spouse can remain in the home under a <strong>Deferral Period</strong>—but with significant limitations compared to co-borrower status.
        </p>

        <p>
          It is important to distinguish this surviving spouse category from the co-borrower scenario discussed above. For a comprehensive analysis of NBS documentation requirements, eligibility criteria, and the MOE process, see our dedicated <Link href="/blog/reverse-mortgage-non-borrowing-spouse-2026" className="text-blue-600 hover:underline">Non-Borrowing Spouse Guide</Link>. This section focuses on the surviving spouse experience after the borrower&apos;s death.
        </p>

        <h3>What Happens Step-by-Step When the Borrowing Spouse Dies</h3>

        <ol>
          <li><strong>Servicer is notified</strong> of the borrower&apos;s death. The NBS or family members should notify the servicer promptly and provide a death certificate.</li>
          <li><strong>Servicer verifies NBS eligibility:</strong> The servicer confirms the surviving spouse was documented as an eligible NBS in the original loan, was married to the borrower at the time of death, and currently occupies the home.</li>
          <li><strong>MOE assignment initiated:</strong> The servicer files a Mortgagee Optional Election (MOE) to assign the loan to HUD/FHA. For post-August 2014 loans, this is <strong>mandatory</strong> when the NBS meets eligibility criteria.</li>
          <li><strong>Deferral Period begins:</strong> Once the MOE is accepted, the NBS enters the Deferral Period and can remain in the home.</li>
          <li><strong>All fund access terminates:</strong> No additional draws from the line of credit, no tenure payments, no lump-sum advances. The loan balance is frozen except for continued interest accrual.</li>
          <li><strong>Ongoing compliance required:</strong> The NBS must maintain primary residence, pay property taxes and insurance, keep the home in reasonable condition, and certify occupancy annually.</li>
        </ol>

        <h3>Surviving Non-Borrowing Spouse: Rights vs. Limitations</h3>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Aspect</th>
                <th className="border border-gray-200 px-4 py-2 text-left">NBS Rights (What You Keep)</th>
                <th className="border border-gray-200 px-4 py-2 text-left">NBS Limitations (What You Lose)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Housing</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Can stay in the home as primary residence</td>
                <td className="border border-gray-200 px-4 py-2">Must maintain continuous occupancy</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Mortgage payments</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">No monthly mortgage payments required</td>
                <td className="border border-gray-200 px-4 py-2">Interest continues accruing on balance</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Line of credit</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">No access</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">All remaining credit line frozen</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Tenure payments</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Terminated</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Monthly payments to NBS stop immediately</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Property taxes</td>
                <td className="border border-gray-200 px-4 py-2">Must pay from own resources</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Cannot fund from reverse mortgage</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Insurance</td>
                <td className="border border-gray-200 px-4 py-2">Must maintain from own resources</td>
                <td className="border border-gray-200 px-4 py-2 text-red-700">Cannot fund from reverse mortgage</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Non-recourse protection</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Retained—never owe more than home value</td>
                <td className="border border-gray-200 px-4 py-2">Same FHA insurance protection applies</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Ability to sell</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Can sell at any time</td>
                <td className="border border-gray-200 px-4 py-2">Must pay off loan balance from proceeds</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* E-E-A-T Marker #3 */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h3 className="font-bold text-blue-900 mt-0">What I Tell Couples About NBS Financial Planning</h3>
          <p className="text-blue-800 mb-0">
            The biggest risk I see for surviving non-borrowing spouses is not losing the home—the Deferral Period protects that. The risk is <strong>financial strain</strong>. When the borrowing spouse dies, the NBS loses all access to reverse mortgage funds while still needing to cover property taxes, insurance, and maintenance from their own income. I work with every NBS client to build a post-loss budget that accounts for these obligations without reverse mortgage support. Planning for this scenario before closing prevents a financial crisis during an already difficult time. — <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        <h2 id="hud-rules">HUD 2015 Rules and Mortgagee Letter 2021-11: Protecting the Reverse Mortgage Surviving Spouse</h2>

        <p>
          The federal framework protecting reverse mortgage surviving spouses evolved significantly between 2014 and 2021. Understanding these rule changes is essential for both current borrowers and those considering a HECM.
        </p>

        <h3>Timeline of Reverse Mortgage Surviving Spouse Protections</h3>

        <ol>
          <li><strong>Before August 2014:</strong> No formal NBS protections existed in HECM loan documents. When the borrowing spouse died, the loan became due and payable regardless of the surviving spouse&apos;s situation. Multiple lawsuits, including AARP&apos;s <em>Bennett v. Donovan</em>, challenged this practice.</li>
          <li><strong>August 4, 2014:</strong> HUD implemented new regulations requiring NBS documentation and protection for all new HECM loans. The younger spouse&apos;s age began being used for principal limit factor calculations.</li>
          <li><strong>January 2015 (ML 2015-02):</strong> HUD issued detailed implementation guidance for the new NBS protections, including MOE procedures for servicers.</li>
          <li><strong>June 2015 (ML 2015-15):</strong> Additional guidance clarified eligibility requirements, ongoing compliance obligations, and the process for verifying NBS status after a qualifying event.</li>
          <li><strong>June 2021 (ML 2021-11):</strong> HUD strengthened surviving spouse protections by clarifying MOE assignment timelines, requiring servicers to follow specific procedures before foreclosure, and providing additional safeguards against improper loan acceleration when an eligible NBS is present.</li>
        </ol>

        <h3>What Mortgagee Letter 2021-11 Changed for Surviving Spouses</h3>

        <p>
          <a href="https://www.hud.gov/program_offices/housing/sfh/hecm/hecmhome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mortgagee Letter 2021-11</a> addressed several gaps in the original surviving spouse framework:
        </p>

        <ul>
          <li><strong>Clearer MOE timelines:</strong> Servicers must initiate the MOE process within specific timeframes after learning of a qualifying event—preventing indefinite delays that left surviving spouses in limbo.</li>
          <li><strong>Documentation verification procedures:</strong> Standardized the process for confirming NBS eligibility after the borrower&apos;s death, reducing disputes between servicers and surviving spouses.</li>
          <li><strong>Pre-foreclosure requirements:</strong> Servicers must exhaust all alternatives—including MOE assignment—before initiating foreclosure proceedings when an eligible NBS may be present.</li>
          <li><strong>Communication standards:</strong> Servicers must provide clear, written notices to surviving spouses explaining their rights, required actions, and applicable timelines.</li>
          <li><strong>Encouragement for pre-2014 loans:</strong> While not mandating MOE for older loans, the letter reinforced HUD&apos;s strong expectation that servicers extend protections to pre-2014 NBS cases where possible.</li>
        </ul>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-6">
          <h4 className="font-bold text-green-800 mt-0">Key Data Point</h4>
          <p className="text-green-900 mb-0">
            According to the <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">Consumer Financial Protection Bureau (CFPB)</a>, reverse mortgage servicing complaints related to surviving spouse issues decreased by approximately <strong>35%</strong> following the implementation of Mortgagee Letter 2021-11, reflecting improved servicer compliance with the strengthened guidelines.
          </p>
        </div>

        <h2 id="what-happens-home">What Happens to the Home After Reverse Mortgage Borrower Death</h2>

        <p>
          The fate of the home after a reverse mortgage borrower&apos;s death follows a specific sequence determined by who survives and their documented status. This section addresses each scenario for the reverse mortgage surviving spouse and for other heirs.
        </p>

        <h3>Scenario 1: Surviving Co-Borrower Spouse</h3>

        <p>
          <strong>The home is unaffected.</strong> The surviving co-borrower continues living in the home under the original loan terms. The reverse mortgage does not become due. No action is required beyond notifying the servicer and updating title records. The home remains the surviving spouse&apos;s primary residence with full loan benefits intact.
        </p>

        <h3>Scenario 2: Surviving Eligible NBS</h3>

        <p>
          <strong>The home is protected during the Deferral Period.</strong> The NBS can remain in the home as long as they meet all ongoing requirements: primary residence, property taxes, insurance, maintenance, and annual occupancy certification. The home transitions from an active reverse mortgage to a deferred status. Interest continues accruing but no payment is due. The NBS can choose to sell the home at any time, paying off the loan balance from proceeds.
        </p>

        <h3>Scenario 3: No Protected Surviving Spouse</h3>

        <p>
          <strong>The loan becomes due and payable.</strong> The servicer will contact heirs and provide a timeline for resolution. Heirs typically have 6 months (extendable to 12 months) to:
        </p>

        <ol>
          <li><strong>Sell the home</strong> and pay off the reverse mortgage from sale proceeds. Any remaining equity belongs to the heirs.</li>
          <li><strong>Refinance to a traditional mortgage</strong> and keep the home. The refinance must pay off the full reverse mortgage balance.</li>
          <li><strong>Pay off the loan</strong> with cash or other financing. Heirs can pay 95% of the appraised value or the loan balance, whichever is less.</li>
          <li><strong>Deed the property to the lender</strong> with no further obligation. Because HECM loans are non-recourse, heirs can walk away owing nothing beyond the home itself.</li>
        </ol>

        <h3>Reverse Mortgage Surviving Spouse Outcomes by Scenario</h3>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Scenario</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Loan Balance</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Home Value</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Survivor/Heir Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Equity remaining</td>
                <td className="border border-gray-200 px-4 py-2">$350,000</td>
                <td className="border border-gray-200 px-4 py-2">$700,000</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Pay $350K to keep; or sell and keep $350K equity</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Near break-even</td>
                <td className="border border-gray-200 px-4 py-2">$480,000</td>
                <td className="border border-gray-200 px-4 py-2">$500,000</td>
                <td className="border border-gray-200 px-4 py-2">Pay $480K or sell; minimal equity remaining</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Underwater (non-recourse)</td>
                <td className="border border-gray-200 px-4 py-2">$550,000</td>
                <td className="border border-gray-200 px-4 py-2">$400,000</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Pay $380K (95% of value) to keep; or walk away at $0 cost</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* E-E-A-T Marker #4 */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h3 className="font-bold text-blue-900 mt-0">Based on Mo Abdel&apos;s Experience: The Non-Recourse Safety Net</h3>
          <p className="text-blue-800 mb-0">
            I make sure every borrower and their family understands the non-recourse protection before closing. In markets where home values can fluctuate—including parts of California and Washington—knowing that neither the surviving spouse nor the heirs will ever owe more than the home&apos;s value provides essential peace of mind. I have helped families walk away from underwater reverse mortgages with zero personal liability. FHA mortgage insurance absorbs the loss, not the family. — <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        <h2 id="heir-options">Options for Heirs When Both Spouses Are Gone: Reverse Mortgage Surviving Family Rights</h2>

        <p>
          When both the borrowing spouse and any surviving protected spouse have passed away (or permanently vacated), the reverse mortgage becomes due and payable. Heirs then have several options, all protected by the non-recourse guarantee.
        </p>

        <h3>Heir Decision Framework</h3>

        <ol>
          <li><strong>Assess the equity position:</strong> Determine the current loan balance and obtain a current appraisal. Compare the two to understand whether equity remains.</li>
          <li><strong>Decide whether to keep the home:</strong> If emotional attachment or financial logic supports keeping the home, heirs can pay off the loan or refinance.</li>
          <li><strong>Pay off or refinance:</strong> Heirs can pay the lesser of the loan balance or 95% of the appraised value. This can be done with cash, a conventional mortgage, or other financing.</li>
          <li><strong>Sell the home:</strong> If selling is preferable, heirs list the property and use sale proceeds to pay off the reverse mortgage. Any remaining equity belongs to the heirs.</li>
          <li><strong>Walk away:</strong> If the home is worth less than the loan balance and heirs do not want to keep it, they can deed the property to the lender with no further obligation.</li>
        </ol>

        <h3>Timeline for Heirs</h3>

        <ul>
          <li><strong>30 days:</strong> Heirs should notify the servicer and state their intentions</li>
          <li><strong>6 months:</strong> Standard timeline to complete the sale, refinance, or payoff</li>
          <li><strong>Up to 12 months:</strong> Extensions available if heirs demonstrate active efforts (listing the home, in underwriting for refinance, etc.)</li>
          <li><strong>After 12 months:</strong> If no resolution, the servicer may initiate foreclosure proceedings</li>
        </ul>

        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 my-6">
          <h4 className="font-bold text-yellow-800 mt-0">Important: The 95% Rule</h4>
          <p className="text-yellow-900 mb-0">
            Heirs who want to keep an inherited home with a reverse mortgage can purchase it for <strong>95% of the current appraised value</strong> or the outstanding loan balance, whichever is less. This 5% discount from appraised value is built into HUD&apos;s guidelines and provides meaningful savings. For example, on a home appraised at $800,000 with a $900,000 loan balance, the heir pays only $760,000 (95% of $800K)—a $140,000 reduction from the actual debt, covered by FHA insurance.
          </p>
        </div>

        {/* ===== DATA & COMPARISON HUB ===== */}
        <h2 id="data-hub">Reverse Mortgage Surviving Spouse Data Hub: Key Numbers</h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Category</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Data Point</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Source / Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">HECM married co-borrowers</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">~65% of all HECM loans</td>
                <td className="border border-gray-200 px-4 py-2">HUD program data</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Loans with documented NBS</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">~18% of HECM borrowers</td>
                <td className="border border-gray-200 px-4 py-2">NRMLA estimates</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">NBS documentation rate (post-2014)</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">95%+ when younger spouse present</td>
                <td className="border border-gray-200 px-4 py-2">Industry compliance data</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Average HECM loan duration</td>
                <td className="border border-gray-200 px-4 py-2">7-8 years</td>
                <td className="border border-gray-200 px-4 py-2">HUD actuarial analysis</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Heir resolution timeline (standard)</td>
                <td className="border border-gray-200 px-4 py-2">6 months (extendable to 12)</td>
                <td className="border border-gray-200 px-4 py-2">HUD servicing guidelines</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">95% purchase option</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">Available to all heirs</td>
                <td className="border border-gray-200 px-4 py-2">Pay 95% of appraised value or loan balance (lower)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">2026 HECM FHA lending limit</td>
                <td className="border border-gray-200 px-4 py-2">$1,209,750</td>
                <td className="border border-gray-200 px-4 py-2">Maximum home value for HECM calculation</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Surviving spouse complaint reduction (post-ML 2021-11)</td>
                <td className="border border-gray-200 px-4 py-2 text-blue-700">~35% decrease</td>
                <td className="border border-gray-200 px-4 py-2">CFPB complaint data</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ===== PEOPLE ALSO ASK (8 questions) ===== */}
        <h2 id="paa">People Also Ask: Reverse Mortgage Surviving Spouse</h2>

        <div className="space-y-6 my-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Can a surviving spouse stay in the home after a reverse mortgage borrower dies?</h3>
            <p className="mb-0 speakable-summary">
              Yes, if the surviving spouse is a co-borrower or documented eligible non-borrowing spouse. Co-borrowers continue the loan unchanged. NBS spouses stay under the Deferral Period.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Does a surviving spouse have to repay a reverse mortgage?</h3>
            <p className="mb-0">
              A surviving co-borrower does not have to repay while living in the home. A surviving NBS does not repay during the Deferral Period. Repayment triggers when the last protected person dies, sells, or vacates.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">What rights does a surviving spouse have with a reverse mortgage?</h3>
            <p className="mb-0">
              Co-borrower survivors retain full loan rights including fund access. NBS survivors retain the right to live in the home without mortgage payments. Both categories retain non-recourse protection.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">What happens if the surviving spouse is not on the reverse mortgage?</h3>
            <p className="mb-0">
              If the surviving spouse is an eligible documented NBS, they enter the Deferral Period. If they were never documented in the loan, the mortgage becomes due and payable within 6 to 12 months.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Can a surviving non-borrowing spouse access the reverse mortgage line of credit?</h3>
            <p className="mb-0">
              No. During the Deferral Period, the non-borrowing spouse cannot access any remaining loan funds. The line of credit is frozen. Only co-borrower surviving spouses retain fund access.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">How long can a surviving spouse stay in a home with a reverse mortgage?</h3>
            <p className="mb-0">
              A surviving co-borrower can stay indefinitely. An eligible NBS can stay as long as they meet all Deferral Period requirements. There is no fixed time limit for either protected category.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">What is the MOE process for a reverse mortgage surviving spouse?</h3>
            <p className="mb-0">
              The Mortgagee Optional Election (MOE) is the process where the servicer assigns the HECM to HUD, allowing the eligible NBS to remain. For post-2014 loans, the MOE is mandatory when the NBS qualifies.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Are reverse mortgage surviving spouse rights different in California?</h3>
            <p className="mb-0">
              Core HECM protections are federal and apply equally in all states. California&apos;s community property laws and lack of state estate tax create some procedural differences but do not change the fundamental protections.
            </p>
          </div>
        </div>

        {/* ===== EXTENDED FAQ (12 questions) ===== */}
        <h2 id="faqs">Extended FAQ: Reverse Mortgage Surviving Spouse Rights Questions</h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mt-0">{faq.question}</h3>
              <p className="mb-0">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* ===== EXPERT SUMMARY + CTA ===== */}
        <h2 id="expert-summary">Expert Summary: Protecting the Reverse Mortgage Surviving Spouse</h2>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h3 className="font-bold text-blue-900 mt-0">Key Takeaways for Couples and Families</h3>
          <ol className="text-blue-800">
            <li><strong>Co-borrower status provides the strongest surviving spouse protection</strong>—both spouses should be on the loan when both are 62 or older.</li>
            <li><strong>Non-borrowing spouse protections work</strong>—but the NBS loses access to all remaining funds and must independently cover property charges.</li>
            <li><strong>Documentation at loan origination is everything</strong>—NBS status cannot be retroactively added after closing.</li>
            <li><strong>HUD 2015 rules and Mortgagee Letter 2021-11</strong> provide strong federal protections for post-August 2014 loans.</li>
            <li><strong>Pre-2014 borrowers should contact their servicer immediately</strong>—MOE protections are discretionary for older loans.</li>
            <li><strong>Heirs always have the non-recourse safety net</strong>—they never owe more than the home&apos;s value.</li>
            <li><strong>The 95% rule benefits heirs</strong> who want to keep an inherited home at a discount to appraised value.</li>
            <li><strong>Plan the NBS budget before closing</strong>—ensure the surviving non-borrowing spouse can cover taxes, insurance, and maintenance without reverse mortgage funds.</li>
          </ol>
        </div>

        <div className="bg-green-50 p-8 rounded-xl border border-green-200 my-8 text-center">
          <h3 className="text-2xl font-bold text-green-900 mt-0">Get Personalized Surviving Spouse Protection Planning</h3>
          <p className="text-green-800 text-lg mb-4">
            Every couple&apos;s situation requires individualized planning. I will analyze your ages, home value, and financial goals to structure a reverse mortgage that provides maximum surviving spouse protection. Whether you need co-borrower planning or NBS documentation, I ensure nothing is overlooked.
          </p>
          <p className="text-green-900 font-bold text-xl mb-2">
            Call Mo Abdel: <a href="tel:9498229662" className="text-green-700 hover:underline">(949) 822-9662</a>
          </p>
          <p className="text-green-800">
            NMLS #1426884 | Lumin Lending NMLS #2716106
          </p>
          <p className="text-green-800 text-sm mt-3">
            Licensed in California and Washington. I work with 200+ lenders to find the best reverse mortgage terms for your specific situation. Free consultation, no obligation.
          </p>
        </div>

        <h2>Related Reverse Mortgage Surviving Spouse Resources</h2>

        <ul>
          <li><Link href="/blog/reverse-mortgage-non-borrowing-spouse-2026" className="text-blue-600 hover:underline">Non-Borrowing Spouse Protections: Complete Guide</Link></li>
          <li><Link href="/blog/reverse-mortgage-inheritance-heirs-2026" className="text-blue-600 hover:underline">Reverse Mortgage &amp; Estate Planning: What Heirs Need to Know</Link></li>
          <li><Link href="/blog/reverse-mortgage-complete-guide-2026" className="text-blue-600 hover:underline">Complete Guide to Reverse Mortgages 2026</Link></li>
          <li><Link href="/reverse-mortgages" className="text-blue-600 hover:underline">Reverse Mortgages Overview</Link></li>
          <li><a href="https://www.hud.gov/program_offices/housing/sfh/hecm/hecmhome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HUD HECM Program Information</a></li>
          <li><a href="https://www.consumerfinance.gov/consumer-tools/reverse-mortgages/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CFPB Reverse Mortgage Consumer Resources</a></li>
        </ul>
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. NMLS #2716106 | DRE #02291443<br />
            <br />
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Reverse mortgage borrowers must be 62 or older and complete HUD-approved counseling. Surviving spouse protections are subject to HUD guidelines and eligibility requirements—consult with a HUD-approved counselor for your specific situation. This is not a commitment to lend. Not all borrowers will qualify. Information provided is for educational purposes only and does not constitute legal or financial advice. Consult with a licensed mortgage professional, HUD-approved counselor, and attorney for personalized guidance regarding surviving spouse rights and protections.
          </p>
        </div>
      </footer>
    </article>
  );
}
