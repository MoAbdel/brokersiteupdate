import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reverse Mortgage and Medicaid: How HECM Proceeds Affect Eligibility [2026]',
  description: 'How HECM reverse mortgage proceeds affect Medicaid, SSI, and other means-tested benefits. Spend-down strategies, asset limit rules, and coordination with elder law attorneys in California (Medi-Cal) and Washington (Apple Health). NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/reverse-mortgage-medicaid-planning-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/reverse-mortgage-medicaid-planning-2026',
      'x-default': 'https://www.mothebroker.com/blog/reverse-mortgage-medicaid-planning-2026',
    },
  },
  keywords: [
    'reverse mortgage Medicaid',
    'HECM Medicaid eligibility',
    'reverse mortgage Medi-Cal',
    'HECM proceeds asset test',
    'reverse mortgage SSI impact',
    'Medicaid spend down reverse mortgage',
    'reverse mortgage Apple Health Washington',
    'HECM Medicaid planning',
  ],
  openGraph: {
    title: 'Reverse Mortgage and Medicaid: How HECM Proceeds Affect Eligibility [2026]',
    description: 'How HECM reverse mortgage proceeds affect Medicaid, SSI, and other means-tested benefits. Spend-down strategies and coordination with elder law attorneys.',
    url: 'https://www.mothebroker.com/blog/reverse-mortgage-medicaid-planning-2026',
    type: 'article',
    publishedTime: '2026-03-04',
    modifiedTime: '2026-03-04',
  },
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Orange County, California',
    language: 'en',
  },
};

const faqData = [
  {
    question: 'Do reverse mortgage proceeds count as income for Medicaid?',
    answer: 'No. HECM reverse mortgage proceeds are loan advances, not income. They are not counted as income for Medicaid, Medi-Cal (California), Apple Health (Washington), SSI, or any other means-tested benefit program. This is because you are borrowing against your home equity, not receiving earnings or investment returns. However, once HECM funds are received, they become a countable asset if they are retained in a bank account past the end of the calendar month in which they are received. The distinction between income and assets is critical for Medicaid planning purposes.',
  },
  {
    question: 'Do reverse mortgage funds affect Medicaid asset limits?',
    answer: 'Yes, if funds are retained. HECM proceeds that remain in a bank account or other countable account past the end of the calendar month in which they are received become countable assets for Medicaid and SSI purposes. If these retained funds cause your total countable assets to exceed the applicable limit (which varies by program and state), you could lose Medicaid eligibility. The solution is to spend HECM funds within the same calendar month they are received so they do not carry over as assets. This requires careful timing and planning, ideally coordinated with an elder law attorney.',
  },
  {
    question: 'What is the Medicaid asset limit for reverse mortgage planning?',
    answer: 'Medicaid asset limits vary by state and by program type. For SSI-linked Medicaid (the most common pathway for seniors), the federal asset limit has historically been $2,000 for an individual and $3,000 for a couple. However, the Medicaid asset limit landscape changed significantly in 2024 when many states began eliminating or increasing asset tests for certain Medicaid categories. California (Medi-Cal) eliminated the asset test for most Medi-Cal programs effective January 1, 2024. Washington (Apple Health) has its own rules. Always verify current asset limits with an elder law attorney because these thresholds change frequently and vary by Medicaid category.',
  },
  {
    question: 'Does a reverse mortgage affect Medicare benefits?',
    answer: 'No. Medicare is not a means-tested program — eligibility is based on age (65+) and work history (40 quarters of Social Security-covered employment), not income or assets. A HECM reverse mortgage has no effect on Medicare Part A, Part B, Part D, or Medicare Advantage coverage. You can take any amount of HECM proceeds at any time without affecting your Medicare benefits. This is one of the clearest distinctions in reverse mortgage benefits planning: Medicaid is means-tested (assets matter), Medicare is not means-tested (assets do not matter).',
  },
  {
    question: 'Does a reverse mortgage affect Social Security retirement benefits?',
    answer: 'No. Social Security retirement benefits (Title II) are not means-tested. Your HECM reverse mortgage proceeds do not affect your Social Security retirement benefit amount, eligibility, or payment schedule. However, Supplemental Security Income (SSI), which is a separate program also administered by the Social Security Administration, is means-tested. Retained HECM proceeds that push your countable assets above the SSI limit can cause SSI benefits to be reduced or terminated. It is essential to distinguish between Social Security retirement (not affected) and SSI (potentially affected by retained HECM funds).',
  },
  {
    question: 'What is a spend-down strategy for reverse mortgage proceeds and Medicaid?',
    answer: 'A spend-down strategy involves receiving HECM funds and spending them within the same calendar month so they do not appear as countable assets at month-end. For Medicaid purposes, the key date is the last day of the month — if HECM funds are in your bank account on the first day of the next month, they count as assets. A spend-down strategy requires: (1) timing HECM draws to early in the month, (2) using funds for allowable expenses (medical bills, home repairs, living expenses, prepaid funeral, etc.) before month-end, and (3) documenting all expenditures. An elder law attorney should design the specific spend-down plan for your situation.',
  },
  {
    question: 'Can I use a HECM line of credit and still qualify for Medicaid?',
    answer: 'Yes, but with careful management. The HECM line of credit itself (available but undrawn funds) is not a countable asset for Medicaid or SSI purposes. Only funds that have been drawn and retained in a bank account past the end of the calendar month count as assets. You can maintain a HECM line of credit indefinitely, draw funds as needed, and maintain Medicaid eligibility as long as you spend the drawn funds within the same calendar month. The line of credit growth feature actually works in your favor — the available credit increases over time without triggering asset tests because undrawn credit is not counted.',
  },
  {
    question: 'How does Medi-Cal in California treat reverse mortgage proceeds?',
    answer: 'California Medi-Cal eliminated the asset test for most Medi-Cal programs effective January 1, 2024, under Assembly Bill 133. This means that for the majority of Medi-Cal applicants and recipients, retained HECM proceeds in a bank account do not affect Medi-Cal eligibility — because there is no asset test to trigger. However, some Medi-Cal programs still have asset limits (particularly certain long-term care and share-of-cost programs), and SSI-linked Medi-Cal still follows federal SSI asset rules. The elimination of the Medi-Cal asset test was a major policy change that significantly reduced the planning complexity for California seniors using reverse mortgages. Confirm current rules with an elder law attorney.',
  },
  {
    question: 'How does Apple Health in Washington treat reverse mortgage proceeds?',
    answer: 'Washington Apple Health (Medicaid) has its own asset limit rules that differ from California. Washington expanded Medicaid under the ACA and has modified its asset test framework, but certain Apple Health programs — particularly those covering long-term care services — still apply asset limits. HECM proceeds follow the same general rule in Washington as nationally: they are not income, but retained proceeds are countable assets. Washington also has a unique long-term care benefit (WA Cares) that has its own eligibility requirements separate from Apple Health. An elder law attorney licensed in Washington should advise on the specific Apple Health program rules that apply to your situation.',
  },
  {
    question: 'Should I consult an elder law attorney before getting a reverse mortgage if I might need Medicaid?',
    answer: 'Yes, absolutely. This is not optional — it is essential. An elder law attorney who specializes in Medicaid planning can assess your specific situation, determine which Medicaid programs you may need (now or in the future), calculate how HECM proceeds interact with your current asset picture, design a spend-down strategy if needed, and coordinate the timing of HECM draws with Medicaid applications. The cost of an elder law consultation ($200 to $500 for an initial consultation) is insignificant compared to the potential loss of Medicaid benefits from improper planning. Your HECM loan officer can recommend elder law attorneys who regularly work with reverse mortgage clients.',
  },
  {
    question: 'Can a reverse mortgage affect Medicaid estate recovery?',
    answer: 'Medicaid estate recovery is the process by which states seek reimbursement from a deceased Medicaid recipient estate for benefits paid during their lifetime. A HECM reverse mortgage balance reduces the equity available in the home, which can reduce the amount recoverable through estate recovery. However, the interaction between HECM liens and Medicaid estate recovery liens is legally complex and varies by state. In some situations, the HECM lien takes priority over the estate recovery claim. In others, the timing of the HECM relative to Medicaid enrollment affects priority. An elder law attorney must evaluate the specific interplay between HECM and Medicaid estate recovery in your state.',
  },
  {
    question: 'What is the difference between Medicaid and Medicare for reverse mortgage planning?',
    answer: 'Medicare and Medicaid are completely different programs with different eligibility rules. Medicare is a federal health insurance program for people 65 and older (and certain younger people with disabilities). It is not means-tested — your income and assets do not affect eligibility. A HECM reverse mortgage has zero impact on Medicare. Medicaid is a joint federal-state program that provides health coverage to people with limited income and assets. It is means-tested — your countable assets affect eligibility. HECM proceeds that are retained as assets can affect Medicaid eligibility. For reverse mortgage planning, Medicare requires no coordination. Medicaid requires careful planning with an elder law attorney.',
  },
];

export default function ReverseMortgageMedicaidPlanningPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Reverse Mortgage and Medicaid: How HECM Proceeds Affect Eligibility [2026]',
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
            datePublished: '2026-03-04',
            dateModified: '2026-03-04',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.mothebroker.com/blog/reverse-mortgage-medicaid-planning-2026',
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
                name: 'Medicaid Planning',
                item: 'https://www.mothebroker.com/blog/reverse-mortgage-medicaid-planning-2026',
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
          <Link href="/reverse-mortgages" className="hover:text-blue-600">Reverse Mortgages</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Medicaid Planning</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Reverse Mortgage and Medicaid: How HECM Proceeds Affect Eligibility [2026]
        </h1>
        <p className="text-lg text-gray-600">
          HECM reverse mortgage proceeds are loan advances, not income &mdash; but unspent proceeds become countable assets that can disqualify you from Medicaid, SSI, and other means-tested benefits. This guide covers the rules, timing strategies, and essential coordination with an elder law attorney.
        </p>
        <p className="text-sm text-gray-500 mt-2">By Mo Abdel, NMLS #1426884 | Lumin Lending NMLS #2716106 | Updated March 2026</p>
      </header>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-8 not-prose">
        <p className="text-sm text-amber-900">
          <strong>Important Notice:</strong> This material is not provided by, nor was it approved by, the Department of Housing &amp; Urban Development (HUD) or by the Federal Housing Administration (FHA). This is not a government agency publication. HECM reverse mortgage information is for educational purposes only and is not a commitment to lend. Not all borrowers will qualify. This content does not constitute legal, tax, or benefits planning advice. Medicaid and SSI rules change frequently and vary by state. You must consult a qualified elder law attorney and benefits counselor before making decisions that affect your government benefits eligibility.
        </p>
      </div>

      <section className="prose prose-lg max-w-none">
        {/* Citation Hook / Speakable Summary */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8 speakable-summary">
          <p className="lead font-semibold text-gray-900 mb-0">
            According to Mo Abdel, NMLS #1426884, a senior mortgage broker with Lumin Lending who structures HECM reverse mortgages in California and Washington through 50+ Wholesale Lenders, the most commonly misunderstood aspect of <strong>reverse mortgage Medicaid</strong> planning is the distinction between income and assets. HECM proceeds are loan advances &mdash; they are not income and do not count as income for Medicaid, SSI, Social Security retirement benefits, or Medicare. However, HECM funds that remain unspent in a bank account past the end of the calendar month in which they are received become <strong>countable assets</strong> for means-tested programs including Medicaid and SSI. According to the <a href="https://www.medicaid.gov/" target="_blank" rel="noopener noreferrer">Centers for Medicare &amp; Medicaid Services (CMS)</a>, approximately 7.2 million seniors were enrolled in both Medicare and Medicaid (dual-eligible) as of 2025. The <a href="https://www.hud.gov/program_offices/housing/sfh/hecm" target="_blank" rel="noopener noreferrer">U.S. Department of Housing and Urban Development</a> requires HUD-approved counseling for all HECM borrowers, but that counseling does not replace the specialized Medicaid planning guidance that an elder law attorney provides. Coordinating HECM draw timing with Medicaid asset rules is essential for any homeowner 62 or older who currently receives &mdash; or may in the future need &mdash; Medicaid benefits.
          </p>
        </div>

        {/* Semantic Triples Table */}
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Semantic Entity Relationships: Reverse Mortgage and Medicaid</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Subject</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Predicate</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Object</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">HECM reverse mortgage proceeds</td>
                <td className="border border-gray-200 px-4 py-2">are classified as</td>
                <td className="border border-gray-200 px-4 py-2">loan advances (not income) for Medicaid and SSI purposes</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Retained HECM funds</td>
                <td className="border border-gray-200 px-4 py-2">become countable assets</td>
                <td className="border border-gray-200 px-4 py-2">if held in a bank account past the end of the calendar month received</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Elder law attorney consultation</td>
                <td className="border border-gray-200 px-4 py-2">is essential for</td>
                <td className="border border-gray-200 px-4 py-2">coordinating HECM draws with Medicaid asset limits and spend-down strategies</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table of Contents */}
        <nav className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-3">On This Page: Reverse Mortgage and Medicaid Planning Guide</h2>
          <ul className="text-blue-800 space-y-2">
            <li><a href="#income-vs-asset" className="hover:underline">Are Reverse Mortgage Proceeds Income or Assets for Medicaid?</a></li>
            <li><a href="#program-impact" className="hover:underline">How Do HECM Proceeds Affect Medicaid, SSI, and Medicare?</a></li>
            <li><a href="#medicaid-asset-rules" className="hover:underline">What Are the Medicaid Asset Limits and Calendar Month Rule?</a></li>
            <li><a href="#spend-down" className="hover:underline">How Do Spend-Down Strategies Work for Medicaid Compliance?</a></li>
            <li><a href="#california" className="hover:underline">How Does California Medi-Cal Treat Reverse Mortgage Proceeds?</a></li>
            <li><a href="#washington" className="hover:underline">How Does Washington Apple Health Treat Reverse Mortgage Proceeds?</a></li>
            <li><a href="#estate-recovery" className="hover:underline">How Does Medicaid Estate Recovery Interact with HECM Liens?</a></li>
            <li><a href="#elder-law" className="hover:underline">Why Is an Elder Law Attorney Essential for HECM and Medicaid?</a></li>
            <li><a href="#data-hub" className="hover:underline">Key Data Points for Reverse Mortgage and Medicaid</a></li>
            <li><a href="#paa" className="hover:underline">What Do People Ask About Reverse Mortgages and Medicaid?</a></li>
            <li><a href="#faqs" className="hover:underline">12 Most Common Reverse Mortgage Medicaid Questions</a></li>
            <li><a href="#expert-summary" className="hover:underline">Bottom Line on Reverse Mortgage Medicaid Planning</a></li>
          </ul>
        </nav>

        {/* E-E-A-T Experience Marker */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
          <h3 className="font-bold text-blue-900 mt-0">From My Practice: HECM and Benefits Planning in California and Washington</h3>
          <p className="text-blue-800 mb-0">
            I have worked with dozens of California and Washington seniors who needed to coordinate their HECM reverse mortgage with existing or anticipated Medicaid benefits. The conversation always starts the same way: the borrower (or their adult child) asks whether the reverse mortgage will affect their government benefits. The answer requires nuance &mdash; HECM proceeds do not count as income, but they can become countable assets if not managed correctly. I always recommend engaging an elder law attorney before closing the HECM, and I work directly with the attorney to time draws, structure disbursement elections, and document the spend-down plan. This coordination has protected Medicaid eligibility for clients while still providing the home equity access they need. &mdash; <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* Section 1: Income vs Asset */}
        <h2 id="income-vs-asset">Are Reverse Mortgage Proceeds Considered Income or Assets for Medicaid?</h2>

        <p>
          The foundation of reverse mortgage Medicaid planning rests on a single legal classification: <strong>HECM proceeds are loan advances, not income</strong>. This distinction is established in federal regulations and applies across all states and all means-tested benefit programs.
        </p>

        <h3>Why HECM Proceeds Are Not Income</h3>

        <p>
          When you draw funds from a HECM reverse mortgage, you are borrowing against your home equity. The funds you receive create a corresponding loan balance that must eventually be repaid (when you sell the home, permanently leave the home, or pass away). Because you are receiving borrowed money &mdash; not earnings, investment returns, or government benefits &mdash; the proceeds are classified as loan advances under the Social Security Act and the Internal Revenue Code.
        </p>

        <p>
          This means HECM proceeds:
        </p>

        <ul>
          <li>Are <strong>not counted as income</strong> for Medicaid eligibility determination</li>
          <li>Are <strong>not counted as income</strong> for SSI eligibility determination</li>
          <li>Are <strong>not reported as income</strong> on your federal tax return</li>
          <li>Do <strong>not increase</strong> your adjusted gross income (AGI)</li>
          <li>Do <strong>not affect</strong> your Social Security retirement benefit calculation</li>
          <li>Do <strong>not affect</strong> your Medicare premiums (no IRMAA impact)</li>
        </ul>

        <h3>When HECM Proceeds Become Countable Assets</h3>

        <p>
          Here is where the planning becomes critical. While HECM proceeds are not income in the month received, <strong>any funds that remain unspent past the end of the calendar month in which they are received become countable assets</strong> for means-tested programs. This is known as the &ldquo;calendar month rule.&rdquo;
        </p>

        <div className="bg-red-50 p-6 rounded-lg border border-red-200 my-6">
          <h4 className="font-bold text-red-800 mt-0">Critical Rule: The Calendar Month Boundary</h4>
          <p className="text-red-900 mb-0">
            If you receive a $20,000 HECM draw on March 10 and spend $18,000 by March 31, only $2,000 carries into April as a countable asset. If that $2,000 plus your other countable assets exceeds the applicable Medicaid or SSI asset limit, your eligibility can be jeopardized. The timing of HECM draws and the speed of spending are the two controllable variables in this equation. An elder law attorney designs the spend-down plan; I structure the HECM draw schedule to align with that plan.
          </p>
        </div>

        <p>
          <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Schedule a consultation with Mo Abdel</Link> to discuss how a HECM reverse mortgage can work alongside your benefits planning. I coordinate directly with your elder law attorney to align HECM draw timing with Medicaid requirements.
        </p>

        {/* Section 2: Program Impact Table */}
        <h2 id="program-impact">How Do Reverse Mortgage Proceeds Affect Medicaid, SSI, and Medicare?</h2>

        <p>
          Not all government benefits are means-tested. The following table clarifies which programs are affected by HECM proceeds and which are not.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">HECM Reverse Mortgage Impact on Government Benefit Programs</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Program</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Means-Tested?</th>
                <th className="border border-gray-200 px-4 py-2 text-left">HECM Effect on Income Test</th>
                <th className="border border-gray-200 px-4 py-2 text-left">HECM Effect on Asset Test</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Planning Required?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Medicare (Part A, B, D, Advantage)</td>
                <td className="border border-gray-200 px-4 py-2">No</td>
                <td className="border border-gray-200 px-4 py-2">No effect</td>
                <td className="border border-gray-200 px-4 py-2">No effect</td>
                <td className="border border-gray-200 px-4 py-2">None required</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Social Security Retirement (Title II)</td>
                <td className="border border-gray-200 px-4 py-2">No</td>
                <td className="border border-gray-200 px-4 py-2">No effect</td>
                <td className="border border-gray-200 px-4 py-2">No effect</td>
                <td className="border border-gray-200 px-4 py-2">None required</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">SSDI (Social Security Disability)</td>
                <td className="border border-gray-200 px-4 py-2">No (earnings test only)</td>
                <td className="border border-gray-200 px-4 py-2">No effect (not earned income)</td>
                <td className="border border-gray-200 px-4 py-2">No effect</td>
                <td className="border border-gray-200 px-4 py-2">None required</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">SSI (Supplemental Security Income)</td>
                <td className="border border-gray-200 px-4 py-2">Yes</td>
                <td className="border border-gray-200 px-4 py-2">No effect (loan advances are not income)</td>
                <td className="border border-gray-200 px-4 py-2">Retained funds count as assets</td>
                <td className="border border-gray-200 px-4 py-2">Spend-down planning required</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Medicaid / Medi-Cal / Apple Health</td>
                <td className="border border-gray-200 px-4 py-2">Yes (for most categories)</td>
                <td className="border border-gray-200 px-4 py-2">No effect (loan advances are not income)</td>
                <td className="border border-gray-200 px-4 py-2">Retained funds may count as assets (varies by state and program)</td>
                <td className="border border-gray-200 px-4 py-2">Elder law attorney coordination required</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">VA Aid &amp; Attendance</td>
                <td className="border border-gray-200 px-4 py-2">Yes</td>
                <td className="border border-gray-200 px-4 py-2">No effect (loan advances are not income)</td>
                <td className="border border-gray-200 px-4 py-2">Retained funds count toward net worth limit</td>
                <td className="border border-gray-200 px-4 py-2">Benefits planning required</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">SNAP (Food Stamps)</td>
                <td className="border border-gray-200 px-4 py-2">Yes</td>
                <td className="border border-gray-200 px-4 py-2">No effect (loan advances are not income)</td>
                <td className="border border-gray-200 px-4 py-2">Retained funds count as resources</td>
                <td className="border border-gray-200 px-4 py-2">Spend-down awareness needed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The table above illustrates why reverse mortgage Medicaid planning requires precision. The same HECM draw can have zero effect on five programs and a critical effect on two others, depending solely on whether the funds are spent within the calendar month or retained. For a comprehensive overview of how HECM interacts with Social Security and Medicare specifically, see our <Link href="/blog/reverse-mortgage-social-security-medicare-2026" className="text-blue-600 hover:underline">reverse mortgage Social Security and Medicare guide</Link>.
        </p>

        {/* Section 3: Medicaid Asset Rules */}
        <h2 id="medicaid-asset-rules">What Are the Medicaid Asset Limits and How Does the Calendar Month Rule Apply to Reverse Mortgages?</h2>

        <p>
          Medicaid asset limits determine how much a person can own (in countable assets) and still qualify for Medicaid benefits. These limits vary significantly by state and by the specific Medicaid program category.
        </p>

        <h3>What Counts as an Asset for Medicaid?</h3>

        <p>
          Countable assets for Medicaid purposes generally include: bank accounts (checking, savings, money market), certificates of deposit (CDs), stocks, bonds, mutual funds, and other financial accounts. <strong>Your primary residence is generally exempt</strong> from the Medicaid asset test (up to a state-specific equity limit) as long as you intend to return home or a qualifying spouse or dependent resides there. This is important for HECM planning: the home equity itself is not a countable asset, but cash drawn from the HECM and deposited into a bank account can become a countable asset.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Medicaid Asset Limit Reference (Federal and State-Specific)</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Program / State</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Individual Asset Limit</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Couple Asset Limit</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">SSI (Federal)</td>
                <td className="border border-gray-200 px-4 py-2">$2,000</td>
                <td className="border border-gray-200 px-4 py-2">$3,000</td>
                <td className="border border-gray-200 px-4 py-2">Federal standard; many states follow for SSI-linked Medicaid</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">California (Medi-Cal) &mdash; Most Programs</td>
                <td className="border border-gray-200 px-4 py-2">No asset test</td>
                <td className="border border-gray-200 px-4 py-2">No asset test</td>
                <td className="border border-gray-200 px-4 py-2">Asset test eliminated Jan 1, 2024 (AB 133) for most Medi-Cal programs</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">California &mdash; SSI-Linked Medi-Cal</td>
                <td className="border border-gray-200 px-4 py-2">$2,000</td>
                <td className="border border-gray-200 px-4 py-2">$3,000</td>
                <td className="border border-gray-200 px-4 py-2">Follows federal SSI rules</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">California &mdash; LTC Share-of-Cost</td>
                <td className="border border-gray-200 px-4 py-2">Varies by program</td>
                <td className="border border-gray-200 px-4 py-2">Varies by program</td>
                <td className="border border-gray-200 px-4 py-2">Some long-term care Medi-Cal categories retain asset limits</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Washington (Apple Health)</td>
                <td className="border border-gray-200 px-4 py-2">Varies by program</td>
                <td className="border border-gray-200 px-4 py-2">Varies by program</td>
                <td className="border border-gray-200 px-4 py-2">Expanded Medicaid categories may have different asset rules</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">VA Aid &amp; Attendance</td>
                <td className="border border-gray-200 px-4 py-2">Net worth limit applies</td>
                <td className="border border-gray-200 px-4 py-2">Net worth limit applies</td>
                <td className="border border-gray-200 px-4 py-2">VA uses a net worth test (assets + annual income) with a bright-line threshold</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Key insight for California seniors:</strong> The elimination of the Medi-Cal asset test for most programs (effective January 1, 2024) was a transformative change for reverse mortgage Medicaid planning. For many California seniors, retained HECM proceeds in a bank account no longer affect Medi-Cal eligibility. However, this does not apply to SSI-linked Medi-Cal or certain long-term care programs. An elder law attorney determines which Medi-Cal category applies to your specific situation.
        </p>

        {/* Section 4: Spend-Down Strategies */}
        <h2 id="spend-down">How Do Spend-Down Strategies Work for Reverse Mortgage Medicaid Compliance?</h2>

        <p>
          A <strong>spend-down strategy</strong> is a planned approach to receiving and spending HECM funds within the same calendar month so they do not carry over as countable assets. This is the primary tool for maintaining Medicaid eligibility while accessing reverse mortgage proceeds.
        </p>

        <h3>The Calendar Month Spend-Down Framework</h3>

        <ol>
          <li><strong>Draw early in the month:</strong> Request HECM funds in the first week of the month to maximize the time available for spending</li>
          <li><strong>Pay allowable expenses immediately:</strong> Medical bills, property taxes, homeowners insurance, home repairs, prepaid funeral costs, and living expenses are all allowable uses</li>
          <li><strong>Document every expenditure:</strong> Keep receipts and records showing when funds were received and when they were spent &mdash; Medicaid may request this documentation during eligibility reviews</li>
          <li><strong>Verify account balance before month-end:</strong> On the last business day of the month, confirm that your bank account balance (plus other countable assets) does not exceed the applicable asset limit</li>
          <li><strong>Use the HECM line of credit option:</strong> A HECM line of credit allows you to draw specific amounts as needed rather than receiving a lump sum &mdash; this gives you maximum control over the timing and amount of each draw</li>
        </ol>

        <h3>Allowable Spend-Down Expenditures</h3>

        <p>
          Medicaid does not restrict what you spend HECM proceeds on. The goal is simply to convert liquid assets (cash in a bank account) into either spent funds or exempt assets before the month ends. Common spend-down uses include:
        </p>

        <ul>
          <li>Medical and dental bills (co-pays, deductibles, uncovered treatments)</li>
          <li>Property taxes and homeowners insurance (can prepay in advance)</li>
          <li>Home repairs and maintenance (roof, plumbing, electrical, accessibility modifications)</li>
          <li>Prepaid funeral and burial arrangements (irrevocable funeral trusts are generally exempt)</li>
          <li>Vehicle purchase or repair (one vehicle is typically an exempt asset)</li>
          <li>Household furnishings and personal effects (generally exempt from asset counts)</li>
          <li>Outstanding debts (credit cards, medical collections, utility arrears)</li>
        </ul>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-6">
          <h4 className="font-bold text-green-800 mt-0">Key Data Point: HECM Line of Credit vs Lump Sum for Medicaid Planning</h4>
          <p className="text-green-900 mb-0">
            The HECM line of credit is the preferred disbursement option for Medicaid-sensitive borrowers because the undrawn credit line is not a countable asset. You only draw what you can spend within the month. A lump sum disbursement deposits a large amount into your bank account simultaneously, creating an immediate asset test challenge. According to HECM program data, approximately 60% of HECM borrowers elect the line of credit option, and this percentage is higher among borrowers who are coordinating with benefits planning professionals.
          </p>
        </div>

        {/* Section 5: California */}
        <h2 id="california">How Does California Medi-Cal Treat Reverse Mortgage Proceeds After the 2024 Asset Test Elimination?</h2>

        <p>
          California implemented one of the most significant Medicaid policy changes in the nation when it eliminated the asset test for most Medi-Cal programs effective January 1, 2024, under Assembly Bill 133. This change dramatically simplified reverse mortgage planning for many California seniors.
        </p>

        <h3>What Changed for California Seniors</h3>

        <ul>
          <li><strong>Before January 2024:</strong> Medi-Cal applied asset limits (typically $2,000 individual / $3,000 couple for SSI-linked programs) that required careful HECM spend-down planning</li>
          <li><strong>After January 2024:</strong> Most Medi-Cal programs no longer count assets when determining eligibility &mdash; only income counts. HECM proceeds are not income, so they do not affect eligibility under the income test. And retained HECM funds do not affect eligibility because there is no asset test for most programs</li>
        </ul>

        <h3>Exceptions Where Asset Limits Still Apply in California</h3>

        <ol>
          <li><strong>SSI-linked Medi-Cal:</strong> Seniors who receive SSI must still meet the federal SSI asset limit ($2,000 / $3,000), and retained HECM funds count</li>
          <li><strong>Certain long-term care programs:</strong> Some Medi-Cal long-term care categories retain asset limits or share-of-cost calculations that consider assets</li>
          <li><strong>Medi-Cal estate recovery:</strong> While the asset test is eliminated for eligibility, estate recovery still applies after death &mdash; the state can seek reimbursement from the estate for Medi-Cal benefits paid</li>
        </ol>

        <p>
          For California seniors who are not on SSI, the elimination of the Medi-Cal asset test means that a HECM reverse mortgage can be used with minimal concern about Medicaid eligibility. However, the estate recovery question remains important and should be discussed with an elder law attorney. For more on reverse mortgage tax treatment, see our <Link href="/blog/reverse-mortgage-tax-implications-2026" className="text-blue-600 hover:underline">reverse mortgage tax implications guide</Link>.
        </p>

        {/* Section 6: Washington */}
        <h2 id="washington">How Does Washington Apple Health Treat Reverse Mortgage Proceeds?</h2>

        <p>
          Washington State&apos;s Medicaid program (Apple Health) operates under its own set of rules that differ from California&apos;s. Washington expanded Medicaid under the Affordable Care Act, and its asset test framework has evolved over time.
        </p>

        <h3>Key Considerations for Washington Seniors</h3>

        <ul>
          <li><strong>Apple Health Classic:</strong> The standard Apple Health program has income-based eligibility. For seniors on this program, HECM proceeds (as non-income loan advances) generally do not affect eligibility</li>
          <li><strong>Long-term care services:</strong> Washington&apos;s long-term care Medicaid programs may apply asset limits that require HECM spend-down planning</li>
          <li><strong>WA Cares Fund:</strong> Washington&apos;s state-level long-term care insurance program (WA Cares) has its own eligibility rules separate from Apple Health. HECM proceeds do not affect WA Cares eligibility because it is funded through payroll premiums, not means-tested</li>
          <li><strong>Estate recovery:</strong> Washington participates in Medicaid estate recovery and may seek reimbursement from the estate of a deceased Apple Health recipient</li>
        </ul>

        <p>
          Washington seniors considering a HECM should work with an elder law attorney licensed in Washington who understands both Apple Health rules and the unique WA Cares program. The interaction between HECM, Apple Health, and WA Cares is state-specific and requires specialized knowledge.
        </p>

        {/* Section 7: Estate Recovery */}
        <h2 id="estate-recovery">How Does Medicaid Estate Recovery Interact with Reverse Mortgage Liens?</h2>

        <p>
          <strong>Medicaid estate recovery</strong> is the process by which a state seeks reimbursement from the estate of a deceased Medicaid recipient for benefits paid during their lifetime. Federal law requires states to pursue estate recovery for certain Medicaid benefits, including nursing facility services, home and community-based services, and related hospital and prescription drug services.
        </p>

        <h3>How HECM Interacts With Estate Recovery</h3>

        <p>
          When a HECM borrower who received Medicaid benefits passes away, two potential claims exist against the home: the HECM loan balance (held by the servicer/FHA) and the Medicaid estate recovery claim (held by the state). The resolution depends on several factors:
        </p>

        <ol>
          <li><strong>Lien priority:</strong> The HECM deed of trust is typically recorded before any Medicaid estate recovery claim arises, giving the HECM lien priority in most situations</li>
          <li><strong>Home sale proceeds:</strong> If the home is sold, the HECM balance is paid first (as a priority lien), and any remaining equity is subject to the Medicaid estate recovery claim</li>
          <li><strong>Non-recourse protection:</strong> HECM is a non-recourse loan &mdash; heirs never owe more than the home value, regardless of the loan balance. If the HECM balance exceeds the home value, FHA insurance covers the difference and no equity remains for estate recovery</li>
          <li><strong>Timing matters:</strong> A HECM established before Medicaid enrollment generally has stronger lien priority than one established after. An elder law attorney evaluates the timing and priority of claims in your specific situation</li>
        </ol>

        <p>
          For comprehensive information on how reverse mortgages affect heirs and estate planning, see our <Link href="/blog/reverse-mortgage-long-term-care-planning-2026" className="text-blue-600 hover:underline">reverse mortgage long-term care planning guide</Link>.
        </p>

        {/* Section 8: Elder Law Attorney */}
        <h2 id="elder-law">Why Is an Elder Law Attorney Essential for Reverse Mortgage Medicaid Planning?</h2>

        <p>
          <strong>Consulting an elder law attorney is not optional when HECM reverse mortgage and Medicaid eligibility intersect.</strong> HUD-approved counseling (which is required for all HECM borrowers) covers the general mechanics of reverse mortgages but does not provide the individualized Medicaid planning, asset structuring, and benefits coordination that an elder law attorney delivers.
        </p>

        <h3>What an Elder Law Attorney Provides That HUD Counseling Does Not</h3>

        <ol>
          <li><strong>Individualized Medicaid eligibility analysis:</strong> Determines which Medicaid categories apply to your situation and whether asset limits are relevant</li>
          <li><strong>Spend-down plan design:</strong> Creates a specific, documented plan for timing HECM draws and spending proceeds within the calendar month</li>
          <li><strong>Estate recovery assessment:</strong> Evaluates the interaction between HECM liens and potential Medicaid estate recovery claims</li>
          <li><strong>Trust and estate coordination:</strong> Ensures that the HECM and Medicaid planning align with your broader estate plan, including any trusts</li>
          <li><strong>Ongoing compliance monitoring:</strong> Reviews your plan periodically as Medicaid rules change (which they do frequently)</li>
          <li><strong>Representation if benefits are denied:</strong> Advocates on your behalf if Medicaid eligibility is challenged due to HECM proceeds</li>
        </ol>

        <p>
          The cost of an initial elder law consultation is typically $200 to $500. This investment is minimal compared to the potential loss of Medicaid benefits, which can provide thousands of dollars per month in healthcare coverage. I maintain referral relationships with elder law attorneys in both California and Washington who have specific experience coordinating with HECM reverse mortgage clients.
        </p>

        <p>
          For more on the broader topic of HECM vs HELOC for seniors, including scenarios where each product is appropriate, see our <Link href="/blog/hecm-vs-heloc-seniors-2026" className="text-blue-600 hover:underline">HECM vs HELOC comparison for seniors</Link>. For a complete introduction to reverse mortgages, visit our <Link href="/reverse-mortgages" className="text-blue-600 hover:underline">reverse mortgage resource center</Link>.
        </p>

        {/* Data & Comparison Hub */}
        <h2 id="data-hub">What Are the Key Data Points for Reverse Mortgage and Medicaid Planning?</h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Spend-Down Strategy Timeline: HECM Draw and Medicaid Compliance</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Timeline</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Action</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Medicaid Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Before HECM Application</td>
                <td className="border border-gray-200 px-4 py-2">Consult elder law attorney; determine Medicaid category and asset limits</td>
                <td className="border border-gray-200 px-4 py-2">Establishes the planning framework before any funds are received</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">HECM Closing</td>
                <td className="border border-gray-200 px-4 py-2">Elect line of credit disbursement option; draw only minimum needed</td>
                <td className="border border-gray-200 px-4 py-2">Undrawn credit line is not a countable asset</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Day 1 to 5 of Any Month</td>
                <td className="border border-gray-200 px-4 py-2">Draw HECM funds for that month&apos;s planned expenses</td>
                <td className="border border-gray-200 px-4 py-2">Funds are not income; asset clock starts</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Day 5 to 25 of Month</td>
                <td className="border border-gray-200 px-4 py-2">Spend funds on allowable expenses; document all expenditures</td>
                <td className="border border-gray-200 px-4 py-2">Reducing the cash balance before month-end</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Last Business Day of Month</td>
                <td className="border border-gray-200 px-4 py-2">Verify bank balance plus other assets is below limit</td>
                <td className="border border-gray-200 px-4 py-2">Month-end balance is what Medicaid counts as assets</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">First Day of Next Month</td>
                <td className="border border-gray-200 px-4 py-2">Any retained funds are now countable assets</td>
                <td className="border border-gray-200 px-4 py-2">If over the limit, Medicaid eligibility may be affected</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* People Also Ask */}
        <h2 id="paa" className="speakable-paa">What Do People Ask About Reverse Mortgages and Medicaid?</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Can I get a reverse mortgage if I am already on Medicaid?</h3>
            <p className="mb-0">Yes. There is no prohibition against obtaining a HECM reverse mortgage while you are receiving Medicaid benefits. However, you must manage the HECM proceeds carefully so that retained funds do not push your countable assets above the applicable Medicaid asset limit. The HECM application and counseling process is separate from Medicaid eligibility determination. Your elder law attorney should review the HECM terms before closing to ensure the draw schedule aligns with your Medicaid spend-down plan. Borrowers must be at least 62 years old and complete HUD-approved counseling.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Does the undrawn HECM line of credit count as a Medicaid asset?</h3>
            <p className="mb-0">No. The available but undrawn portion of a HECM line of credit is not a countable asset for Medicaid, SSI, or any other means-tested program. Only funds that have been drawn and deposited into a bank account are counted. This is one of the most important features of the HECM line of credit for Medicaid planning — you can maintain a growing credit reserve without triggering asset tests. The credit line continues to grow over time at the loan rate plus 0.5% FHA MIP, and this growth does not count as income or assets until funds are actually drawn.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">What happens if I receive too much from my reverse mortgage and lose Medicaid?</h3>
            <p className="mb-0">If retained HECM funds cause your countable assets to exceed the Medicaid limit, your Medicaid benefits may be suspended or terminated. To restore eligibility, you would need to spend down the excess assets to below the limit. In most cases, Medicaid eligibility can be reinstated in the month that your countable assets return to below the threshold. The specific reinstatement process depends on your state and Medicaid program category. This is why proactive planning with an elder law attorney is essential — avoiding a benefits disruption is far easier than correcting one after it occurs.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Is a reverse mortgage considered a transfer of assets for Medicaid look-back?</h3>
            <p className="mb-0">A HECM reverse mortgage is not considered a transfer of assets for less than fair market value (which is what Medicaid look-back rules target). You are borrowing against your equity, not giving away assets. The look-back period (60 months in most states) applies to gifts, transfers to trusts, and other dispositions of assets for less than fair market value. Establishing a HECM does not trigger look-back penalties. However, if you receive HECM funds and then give them away to family members to reduce your asset count, that gift could trigger a Medicaid transfer penalty during the look-back period.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Can I use reverse mortgage funds to pay for long-term care and still keep Medicaid?</h3>
            <p className="mb-0">Yes, and this is one of the most practical uses of HECM proceeds for Medicaid-eligible seniors. Using HECM funds to pay for home health aides, adult day care, home modifications, or other care costs is a legitimate expenditure that reduces your bank account balance. As long as the funds are spent within the calendar month received, they do not count as assets. In fact, spending HECM proceeds on care-related expenses is one of the cleanest spend-down strategies because the expenditures are clearly documented and directly related to the senior&apos;s needs.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">How do HECM tenure payments interact with Medicaid rules?</h3>
            <p className="mb-0">HECM tenure payments are fixed monthly payments that the borrower receives for as long as they live in the home. Each monthly tenure payment is a loan advance (not income) and is subject to the same calendar month rule — if the payment remains in your bank account past the end of the month, it becomes a countable asset. For Medicaid planning purposes, you need to spend each tenure payment within the month it is received. Because tenure payments arrive on a predictable schedule, spend-down planning can be built around that cadence. An elder law attorney can set up automatic bill payments timed to coincide with tenure payment deposits.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Does my spouse&apos;s reverse mortgage affect my Medicaid eligibility?</h3>
            <p className="mb-0">If you and your spouse share bank accounts and both names are on the HECM, retained funds in joint accounts are generally counted for both spouses in a Medicaid asset assessment. The spouse-specific Medicaid rules (Community Spouse Resource Allowance, or CSRA) apply when one spouse needs institutional long-term care and the other remains in the community. The CSRA allows the community spouse to retain a specified amount of assets. HECM proceeds that exceed the CSRA threshold for the community spouse could affect the institutionalized spouse&apos;s Medicaid eligibility. This scenario absolutely requires elder law attorney guidance.</p>
          </div>
        </div>

        {/* Extended FAQ */}
        <h2 id="faqs">What Are the 12 Most Common Reverse Mortgage and Medicaid Questions?</h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mt-0">{faq.question}</h3>
              <p className="mb-0">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Expert Summary + CTA */}
        <h2 id="expert-summary">What Is the Bottom Line on Reverse Mortgage and Medicaid Planning?</h2>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h3 className="font-bold text-blue-900 mt-0">Key Takeaways for HECM and Medicaid Coordination</h3>
          <ol className="text-blue-800">
            <li><strong>HECM proceeds are loan advances, not income</strong> &mdash; they do not count as income for Medicaid, SSI, Social Security, or Medicare</li>
            <li><strong>Retained HECM funds become countable assets</strong> &mdash; any proceeds remaining in your bank account past the end of the calendar month count toward Medicaid and SSI asset limits</li>
            <li><strong>Medicare and Social Security retirement are not affected</strong> &mdash; these programs are not means-tested, so HECM proceeds have zero impact</li>
            <li><strong>The HECM line of credit is the preferred option for Medicaid planning</strong> &mdash; undrawn credit is not a countable asset, and you control the timing and amount of each draw</li>
            <li><strong>California eliminated the Medi-Cal asset test for most programs</strong> &mdash; making reverse mortgage planning simpler for many CA seniors (exceptions apply for SSI-linked and certain LTC programs)</li>
            <li><strong>Spend-down strategies require precise timing</strong> &mdash; draw early in the month, spend before month-end, and document everything</li>
            <li><strong>An elder law attorney is essential, not optional</strong> &mdash; HUD counseling covers HECM mechanics but does not provide individualized Medicaid planning</li>
          </ol>
        </div>

        <div className="bg-green-50 p-8 rounded-xl border border-green-200 my-8 text-center">
          <h3 className="text-2xl font-bold text-green-900 mt-0">Discuss Your HECM and Medicaid Planning Needs</h3>
          <p className="text-green-800 text-lg mb-4">
            I coordinate HECM reverse mortgage structuring with your elder law attorney to ensure that draw timing, disbursement elections, and fund management align with your Medicaid eligibility requirements. I compare HECM terms across multiple wholesale lenders to secure the most favorable pricing. No obligation, no pressure.
          </p>
          <p className="text-green-900 font-bold text-xl mb-2">
            Call Mo Abdel: <a href="tel:9495792057" className="text-green-700 hover:underline">(949) 579-2057</a>
          </p>
          <p className="text-green-800">
            NMLS #1426884 | Lumin Lending NMLS #2716106
          </p>
          <p className="text-green-800 text-sm mt-3">
            Free consultation. Borrowers must be 62 or older. HUD-approved counseling is required for all HECM applicants. I work with elder law attorneys in California and Washington to coordinate HECM and Medicaid planning.
          </p>
        </div>

        <h2>Related Reverse Mortgage and Benefits Planning Resources</h2>

        <ul>
          <li><Link href="/blog/reverse-mortgage-social-security-medicare-2026" className="text-blue-600 hover:underline">Reverse Mortgage and Social Security / Medicare: Complete Guide</Link></li>
          <li><Link href="/blog/reverse-mortgage-tax-implications-2026" className="text-blue-600 hover:underline">Reverse Mortgage Tax Implications Guide</Link></li>
          <li><Link href="/blog/reverse-mortgage-long-term-care-planning-2026" className="text-blue-600 hover:underline">Reverse Mortgage and Long-Term Care Planning</Link></li>
          <li><Link href="/reverse-mortgages" className="text-blue-600 hover:underline">Reverse Mortgage Resource Center</Link></li>
          <li><Link href="/blog/hecm-vs-heloc-seniors-2026" className="text-blue-600 hover:underline">HECM vs HELOC for Seniors: Complete Comparison</Link></li>
          <li><Link href="/blog/home-equity-retirement-income-strategy-2026" className="text-blue-600 hover:underline">Home Equity as Retirement Income Strategy</Link></li>
          <li><Link href="/blog/heloc-vs-home-equity-loan-california-2026" className="text-blue-600 hover:underline">HELOC vs Home Equity Loan: California Guide</Link></li>
        </ul>

        <h3>External Resources</h3>

        <ul>
          <li><a href="https://www.medicaid.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Centers for Medicare &amp; Medicaid Services (CMS)</a></li>
          <li><a href="https://www.hud.gov/program_offices/housing/sfh/hecm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HUD HECM Program Information</a></li>
          <li><a href="https://www.dhcs.ca.gov/services/medi-cal" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">California Department of Health Care Services (Medi-Cal)</a></li>
          <li><a href="https://www.hca.wa.gov/free-or-low-cost-health-care/apple-health-medicaid-coverage" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Washington Health Care Authority (Apple Health)</a></li>
        </ul>
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443<br />
            <br />
            This material is not provided by, nor was it approved by, the Department of Housing &amp; Urban Development (HUD) or by the Federal Housing Administration (FHA). Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. This is not a commitment to lend. Not all borrowers will qualify. HECM borrowers must be 62 years of age or older and occupy the property as their primary residence. HECM borrowers are responsible for property taxes, homeowners insurance, and home maintenance. This content does not constitute legal, tax, or benefits planning advice. Medicaid, Medi-Cal, Apple Health, SSI, and other government benefit rules change frequently and vary by state and program category. Consult a qualified elder law attorney for advice specific to your situation. Asset limits, spend-down rules, and estate recovery provisions referenced are general information and may not reflect current rules in your jurisdiction. Licensed in California and Washington.
          </p>
        </div>
      </footer>
    </article>
  );
}
