import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Clock, DollarSign, TrendingUp, AlertCircle, BookOpen, Shield, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LeadMagnetCTA } from '@/components/lead-magnets/LeadMagnetCTA';

export const metadata: Metadata = {
  title: 'Wholesale Mortgage Closing Process: Timeline & What to Expect [2026] | Mo Abdel',
  description: 'Step-by-step wholesale mortgage closing timeline from application to funding. Wholesale closes in 21-30 days vs 35-50 days retail. Licensed broker NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/wholesale-mortgage-closing-timeline-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/wholesale-mortgage-closing-timeline-2026',
      'x-default': 'https://www.mothebroker.com/blog/wholesale-mortgage-closing-timeline-2026',
    },
  },
  openGraph: {
    title: 'Wholesale Mortgage Closing Process: Timeline & What to Expect [2026]',
    description: 'Step-by-step wholesale mortgage closing timeline from application to funding. Wholesale closes in 21-30 days vs 35-50 days retail.',
    url: 'https://www.mothebroker.com/blog/wholesale-mortgage-closing-timeline-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    publishedTime: '2026-02-19',
    modifiedTime: '2026-02-19',
    authors: ['Mo Abdel'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale Mortgage Closing Process: Timeline & What to Expect [2026]',
    description: 'Step-by-step wholesale mortgage closing timeline from application to funding. Wholesale closes in 21-30 days vs 35-50 days retail.',
  },
};

const faqData = [
  {
    question: 'How long does a wholesale mortgage take to close?',
    answer: 'Wholesale purchase mortgages typically close in 21-30 days. Refinances take 25-35 days. Retail bank mortgages average 35-50 days. The wholesale channel is faster because brokers pre-qualify with multiple lenders before submission, reducing back-and-forth delays.',
  },
  {
    question: 'Why do wholesale mortgages close faster than retail bank loans?',
    answer: 'Wholesale brokers shop the loan across 200+ lenders before submitting to underwriting. This pre-qualification step eliminates mismatches between borrower profiles and lender guidelines that cause retail delays. Brokers also maintain direct relationships with underwriters.',
  },
  {
    question: 'What is the 3-day closing disclosure waiting period?',
    answer: 'Federal law (TRID) requires borrowers to receive the Closing Disclosure at least 3 business days before signing final loan documents. This waiting period cannot be waived and applies to all mortgage transactions regardless of channel.',
  },
  {
    question: 'What causes the most common wholesale mortgage closing delays?',
    answer: 'The top delay causes are appraisal issues (low value or scheduling), missing documentation, title problems (liens or boundary disputes), employment verification gaps, and incomplete condition responses. Working with an experienced broker minimizes these risks.',
  },
  {
    question: 'Can I lock my rate before choosing a lender through a wholesale broker?',
    answer: 'Yes. Through the lock-and-shop strategy, your broker locks your rate with a wholesale lender, then continues shopping across their lender network for best-execution pricing. This protects you from rate increases while optimizing your loan terms.',
  },
  {
    question: 'What documents do I need for a wholesale mortgage closing?',
    answer: 'Standard documentation includes 2 years of tax returns, 2 months of bank statements, 30 days of pay stubs, government-issued ID, proof of homeowners insurance, and earnest money deposit verification. Self-employed borrowers need additional business documentation.',
  },
  {
    question: 'Does the wholesale closing process work differently for refinances?',
    answer: 'Refinances follow the same general timeline but add 5-7 days because there is no purchase contract deadline driving urgency. Refinances also require a different appraisal process and may involve paying off existing liens at closing.',
  },
  {
    question: 'How does the broker choose which lender to submit my loan to?',
    answer: 'Your broker evaluates your credit profile, income type, property type, and loan amount against guidelines from 200+ lenders. They identify the lenders offering the most competitive pricing for your specific scenario, then submit to the one with the best combination of rate, fees, and closing speed.',
  },
  {
    question: 'What happens if the appraisal comes in low during the wholesale closing process?',
    answer: 'Your broker can request a reconsideration of value with additional comparable sales, negotiate a price reduction with the seller, switch to a different lender with more favorable appraisal policies, or restructure the loan amount. Having 200+ lenders gives brokers more options than retail banks.',
  },
  {
    question: 'Is the wholesale mortgage broker paid by the borrower or the lender?',
    answer: 'Broker compensation is typically paid by the wholesale lender and fully disclosed on your Loan Estimate. This compensation structure means borrowers receive wholesale pricing while the broker is compensated by the lending institution for origination services.',
  },
  {
    question: 'What states does Mo Abdel originate wholesale mortgages in?',
    answer: 'Mo Abdel is licensed to originate wholesale mortgages in California and Washington. All loan programs, including conventional, FHA, VA, jumbo, and non-QM products, are available in both states through Lumin Lending, NMLS #2716106.',
  },
  {
    question: 'What is the difference between conditional approval and clear to close?',
    answer: 'Conditional approval means the underwriter has approved your loan subject to specific conditions (additional documents, explanations, or verifications). Clear to close means all conditions have been satisfied and the loan is ready for final document signing and funding.',
  },
];

export default function WholesaleMortgageClosingTimeline2026() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Wholesale Mortgage Closing Process: Timeline & What to Expect [2026]',
            author: {
              '@type': 'Person',
              name: 'Mo Abdel',
              jobTitle: 'Licensed Mortgage Broker',
              identifier: 'NMLS #1426884',
              url: 'https://www.mothebroker.com/about',
              knowsAbout: [
                'Wholesale Mortgage Closing Process',
                'Mortgage Underwriting Timeline',
                'Loan Origination',
                'Closing Coordination',
              ],
            },
            publisher: {
              '@type': 'Organization',
              name: 'Lumin Lending, Inc.',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.mothebroker.com/images/mo-logo-white.webp',
              },
            },
            datePublished: '2026-02-19',
            dateModified: '2026-02-19',
            mainEntity: {
              '@type': 'WebPage',
              '@id': 'https://www.mothebroker.com/blog/wholesale-mortgage-closing-timeline-2026',
              significantLink: [
                'https://www.consumerfinance.gov/',
                'https://www.hud.gov/',
              ],
            },
            copyrightHolder: {
              '@type': 'Organization',
              name: 'Lumin Lending',
              url: 'https://www.mothebroker.com',
            },
            copyrightYear: '2026',
          }),
        }}
      />

      {/* FAQPage Schema */}
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

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white rounded-2xl p-8 md:p-12 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-blue-300 text-sm font-medium mb-4">
            <Clock className="w-4 h-4" />
            <span>Updated February 19, 2026</span>
            <span className="mx-2">|</span>
            <FileText className="w-4 h-4" />
            <span>Wholesale Closing Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Wholesale Mortgage Closing Process: Timeline &amp; What to Expect [2026]
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl">
            Step-by-step breakdown of the wholesale mortgage closing process from application to funding.
            Learn how wholesale differs from retail, what causes delays, and how to close faster in California and Washington.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Get Your Closing Timeline
              </Button>
            </Link>
            <Link href="/tools/mortgage-calculator">
              <Button className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Mortgage Calculator
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="prose prose-lg max-w-none">
        {/* Citation Hook */}
        <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 md:p-8 rounded-xl border border-blue-200 mb-10">
          <div className="flex items-start gap-3 mb-4">
            <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-3">
                According to Mo Abdel, licensed mortgage broker (NMLS #1426884) with Lumin Lending:
              </p>
              <p className="text-gray-700 mb-4">
                &quot;The wholesale mortgage closing process is fundamentally different from the retail bank experience.
                In our California and Washington closings, we consistently complete purchase transactions in 21-30 days
                because we shop the loan across 200+ lenders <em>before</em> submission — not after. Retail banks submit
                your application into their single pipeline and hope for the best. We match your profile to the right
                lender upfront, which eliminates the biggest source of delays: guideline mismatches discovered mid-underwriting.&quot;
              </p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-blue-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-900">21-30 Days</span>
              </div>
              <span className="text-sm text-gray-600">Wholesale Purchase Closing</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-900">200+</span>
              </div>
              <span className="text-sm text-gray-600">Wholesale Lender Network</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-900">35-50 Days</span>
              </div>
              <span className="text-sm text-gray-600">Typical Retail Bank Closing</span>
            </div>
          </div>
        </div>

        {/* Bing Power Block: Timeline Table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-10 shadow-sm">
          <div className="bg-slate-800 text-white p-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <h2 className="text-xl font-bold m-0 text-white">Wholesale Mortgage Closing Timeline: Day-by-Day Breakdown</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900 w-1/5">Timeline</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900 w-1/4">Phase</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">What Happens</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900 w-1/5">Your Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-blue-700">Day 1-3</td>
                  <td className="p-4 font-semibold text-gray-900">Application &amp; Lender Selection</td>
                  <td className="p-4 text-gray-700">Broker collects your application, runs credit, analyzes your profile, and shops across 200+ lenders for best-execution pricing. Rate lock decision made.</td>
                  <td className="p-4 text-gray-600">Submit application and documents</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-blue-700">Day 3-7</td>
                  <td className="p-4 font-semibold text-gray-900">Processing &amp; Submission</td>
                  <td className="p-4 text-gray-700">Loan processor packages your file, orders appraisal, title work, and verifications. File submitted to selected wholesale lender&apos;s underwriting.</td>
                  <td className="p-4 text-gray-600">Respond to document requests promptly</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-blue-700">Day 7-14</td>
                  <td className="p-4 font-semibold text-gray-900">Underwriting Review</td>
                  <td className="p-4 text-gray-700">Underwriter reviews income, assets, credit, property, and compliance. Appraisal completed and reviewed. Initial conditions issued.</td>
                  <td className="p-4 text-gray-600">Provide any additional documentation</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-blue-700">Day 14-21</td>
                  <td className="p-4 font-semibold text-gray-900">Conditional Approval &amp; Conditions</td>
                  <td className="p-4 text-gray-700">Conditional approval issued. Broker coordinates condition satisfaction: additional docs, letters of explanation, verification updates. Title cleared.</td>
                  <td className="p-4 text-gray-600">Satisfy any borrower conditions</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-blue-700">Day 21-28</td>
                  <td className="p-4 font-semibold text-gray-900">Clear to Close</td>
                  <td className="p-4 text-gray-700">All conditions cleared. Final Closing Disclosure issued. Mandatory 3-business-day waiting period begins. Final figures confirmed.</td>
                  <td className="p-4 text-gray-600">Review Closing Disclosure carefully</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-green-700">Day 28-30</td>
                  <td className="p-4 font-semibold text-gray-900">Closing &amp; Funding</td>
                  <td className="p-4 text-gray-700">Sign final loan documents at title company or with mobile notary. Lender reviews signed docs and funds the loan. Title records the deed.</td>
                  <td className="p-4 text-gray-600">Sign documents, bring cashier&apos;s check or wire funds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Numbered Steps for Smooth Closing */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 md:p-8 mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            7 Steps to a Smooth Wholesale Closing
          </h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <span className="text-gray-700"><strong>Gather documents before applying.</strong> Have tax returns, pay stubs, bank statements, and ID ready before your first conversation with your broker.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <span className="text-gray-700"><strong>Get pre-approved through your wholesale broker.</strong> A broker pre-approval means your file has already been reviewed against multiple lender guidelines.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <span className="text-gray-700"><strong>Respond to document requests within 24 hours.</strong> Every day of delay on your end extends the closing timeline by at least one day.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <span className="text-gray-700"><strong>Avoid major financial changes during underwriting.</strong> Do not change jobs, make large purchases, open new credit accounts, or move money between accounts without consulting your broker first.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
              <span className="text-gray-700"><strong>Schedule the appraisal early.</strong> Appraisal delays are the number one cause of closing timeline extensions. Your broker orders this immediately upon submission.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
              <span className="text-gray-700"><strong>Review the Closing Disclosure carefully.</strong> Compare final numbers to your original Loan Estimate. Ask your broker about any discrepancies before signing.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
              <span className="text-gray-700"><strong>Confirm wire instructions directly with the title company.</strong> Wire fraud is real. Always verify wiring instructions by calling the title company at a known phone number — never trust emailed wire instructions alone.</span>
            </li>
          </ol>
        </div>

        {/* E-E-A-T Narrative Section 1 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          How Is the Wholesale Closing Process Different from Retail?
        </h2>
        <p>
          The fundamental difference between wholesale and retail mortgage closing processes is <strong>when the lender matching happens</strong>.
          In the retail model, you apply to a single bank, and your application enters that bank&apos;s underwriting pipeline. If your profile
          doesn&apos;t perfectly fit their guidelines — or if their underwriting department is backed up — you experience delays. You have no
          alternative without starting over at a different institution.
        </p>
        <p>
          In the wholesale model, your broker analyzes your financial profile and shops it across 200+ lenders <em>before</em> submitting to
          underwriting. This pre-submission matching eliminates the most common cause of closing delays: discovering mid-process that the
          lender&apos;s guidelines don&apos;t match your situation.
        </p>
        <p>
          In our California and Washington closings, we see the wholesale advantage play out in three specific ways:
        </p>
        <ul>
          <li><strong>Lender selection precision:</strong> Your file goes to the lender whose guidelines best match your income type, credit profile, property type, and loan amount. No square pegs in round holes.</li>
          <li><strong>Direct underwriter relationships:</strong> Wholesale brokers maintain direct lines to underwriters at each lender. When a condition is issued, we can discuss it immediately rather than submitting a ticket into a call center queue.</li>
          <li><strong>Parallel processing:</strong> While the retail bank processes everything sequentially through one pipeline, wholesale brokers coordinate appraisal, title, insurance, and verification simultaneously across independent vendors.</li>
        </ul>
        <p>
          The result is a streamlined closing process that typically saves 7-20 days compared to the retail bank experience. For
          purchase transactions where contract deadlines matter, this difference is significant.
        </p>

        {/* E-E-A-T Narrative Section 2 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" />
          What Happens During Mortgage Underwriting?
        </h2>
        <p>
          Underwriting is the phase where the wholesale lender&apos;s underwriter reviews every aspect of your loan file to determine
          whether the loan meets their investor guidelines. This is the most critical phase of the closing process, and understanding
          it helps you prepare properly.
        </p>
        <p>
          The underwriter evaluates four primary areas:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Income &amp; Employment</h4>
            </div>
            <p className="text-sm text-gray-600">Verification of employment, income calculation for salaried and self-employed borrowers, income trending analysis, and debt-to-income ratio compliance.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Credit &amp; Liabilities</h4>
            </div>
            <p className="text-sm text-gray-600">Credit report review, liability verification, payment history analysis, credit inquiries review, and any derogatory event explanations.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Assets &amp; Reserves</h4>
            </div>
            <p className="text-sm text-gray-600">Bank statement review, source of funds verification, gift fund documentation, reserves calculation, and large deposit explanations.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Property &amp; Collateral</h4>
            </div>
            <p className="text-sm text-gray-600">Appraisal review, title search, flood certification, property condition assessment, and comparable sales analysis.</p>
          </div>
        </div>
        <p>
          After reviewing these areas, the underwriter issues one of three decisions: <strong>approved</strong> (rare on first pass),
          <strong>conditionally approved</strong> (most common — approved pending specific conditions), or <strong>suspended/denied</strong>
          (file needs significant changes). In the wholesale channel, conditional approvals move faster because your broker communicates
          directly with the underwriter to clarify exactly what is needed.
        </p>

        {/* E-E-A-T Narrative Section 3 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-amber-600" />
          What Are the Most Common Closing Delays and How to Avoid Them?
        </h2>
        <p>
          Even in the wholesale channel, delays happen. The difference is that experienced wholesale brokers anticipate and prevent
          the most common ones. Here are the delay causes we see most frequently in California and Washington transactions:
        </p>

        {/* Common Delay Causes Table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-amber-50">
                <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Delay Cause</th>
                <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Typical Impact</th>
                <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">How Your Broker Prevents It</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-medium text-gray-900">Appraisal Issues</td>
                <td className="p-4 text-gray-700">5-14 days</td>
                <td className="p-4 text-gray-700">Orders appraisal Day 1, provides comps to appraiser, has backup lender if value dispute arises</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <td className="p-4 font-medium text-gray-900">Missing Documentation</td>
                <td className="p-4 text-gray-700">3-7 days</td>
                <td className="p-4 text-gray-700">Collects full document package upfront using a comprehensive checklist before submission</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-medium text-gray-900">Title Problems</td>
                <td className="p-4 text-gray-700">7-21 days</td>
                <td className="p-4 text-gray-700">Orders preliminary title report early, identifies liens or boundary issues before underwriting</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <td className="p-4 font-medium text-gray-900">Employment Verification</td>
                <td className="p-4 text-gray-700">3-10 days</td>
                <td className="p-4 text-gray-700">Initiates VOE immediately, alerts borrower to notify HR department, follows up daily</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-medium text-gray-900">Income Calculation Disputes</td>
                <td className="p-4 text-gray-700">5-14 days</td>
                <td className="p-4 text-gray-700">Pre-calculates income using lender-specific methodology before submission to avoid surprises</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <td className="p-4 font-medium text-gray-900">Condition Response Delays</td>
                <td className="p-4 text-gray-700">2-5 days per round</td>
                <td className="p-4 text-gray-700">Submits complete condition packages in one batch, communicates directly with underwriter on unclear items</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-gray-900">Insurance Issues</td>
                <td className="p-4 text-gray-700">3-7 days</td>
                <td className="p-4 text-gray-700">Connects borrower with insurance agent early, verifies policy meets lender requirements before submission</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The wholesale advantage for delay prevention is clear: because your broker has processed hundreds of files across multiple
          lenders, they know exactly which issues each lender flags and can pre-emptively address them. A retail loan officer at a
          single bank sees only their institution&apos;s pipeline and may not recognize patterns until the delay has already occurred.
        </p>

        {/* E-E-A-T Narrative Section 4 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-600" />
          How Does Your Broker Manage the Lender Relationship?
        </h2>
        <p>
          One of the most underappreciated aspects of the wholesale closing process is the broker&apos;s role as your advocate with the
          wholesale lender. This relationship management is what separates a smooth closing from a stressful one.
        </p>
        <p>
          When you work with a retail bank, you are one of thousands of applications flowing through a centralized system. Your loan
          officer may have limited ability to escalate issues or speak directly with the underwriter. In the wholesale model, the
          dynamic is different:
        </p>
        <ul>
          <li><strong>Account executive access:</strong> Your broker has a dedicated account executive at each wholesale lender who can escalate files, clarify guidelines, and expedite reviews when needed.</li>
          <li><strong>Underwriter communication:</strong> Many wholesale lenders allow brokers to communicate directly with the assigned underwriter, eliminating the telephone game that plagues retail channels.</li>
          <li><strong>Volume leverage:</strong> Brokers who consistently deliver clean, well-packaged files earn preferred status with lenders, resulting in faster turn times and more favorable condition reviews.</li>
          <li><strong>Lender switching capability:</strong> If a wholesale lender is experiencing slow turn times or unreasonable condition requests, your broker can move your file to a different lender — an option that does not exist in the retail channel.</li>
        </ul>
        <p>
          In our experience across California and Washington markets, the broker-lender relationship is the single biggest factor
          in closing speed. A well-managed relationship means conditions are clear, turn times are predictable, and surprises are rare.
        </p>

        {/* E-E-A-T Narrative Section 5 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-blue-600" />
          What Documents Should You Prepare Upfront?
        </h2>
        <p>
          The fastest wholesale closings happen when borrowers arrive with a complete document package on Day 1. Missing documents
          are the most preventable cause of closing delays. Here is the comprehensive list organized by category:
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6 not-prose">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Complete Document Checklist for Wholesale Mortgage Closing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> Income Verification
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>- 2 most recent years of federal tax returns (all pages)</li>
                <li>- 2 most recent years of W-2s</li>
                <li>- 30 days of most recent pay stubs</li>
                <li>- Self-employed: 2 years business tax returns + YTD profit &amp; loss</li>
                <li>- Additional income documentation (rental, retirement, alimony)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> Asset Documentation
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>- 2 most recent months of bank statements (all pages, all accounts)</li>
                <li>- Retirement account statements (if using for reserves)</li>
                <li>- Gift letter and donor bank statements (if applicable)</li>
                <li>- Earnest money deposit verification</li>
                <li>- Large deposit explanations with paper trail</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> Identity &amp; Property
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>- Government-issued photo ID (driver&apos;s license or passport)</li>
                <li>- Social Security number for credit authorization</li>
                <li>- Fully executed purchase agreement (purchases)</li>
                <li>- Current mortgage statement (refinances)</li>
                <li>- Homeowners insurance declaration page</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> Additional Items
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>- Divorce decree (if applicable)</li>
                <li>- Bankruptcy discharge papers (if applicable)</li>
                <li>- VA Certificate of Eligibility (VA loans)</li>
                <li>- HOA dues documentation (condos/planned developments)</li>
                <li>- Landlord contact information for rental verification</li>
              </ul>
            </div>
          </div>
        </div>
        <p>
          Providing all documents upfront eliminates the back-and-forth that adds days to your closing timeline. In our experience,
          borrowers who arrive with a complete package close an average of 5-7 days faster than those who submit documents piecemeal.
        </p>

        {/* Data Hub: Wholesale vs Retail Comparison */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-10 shadow-sm">
          <div className="bg-blue-800 text-white p-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <h2 className="text-xl font-bold m-0 text-white">Wholesale vs Retail Closing Timeline Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Closing Phase</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-blue-700">Wholesale Broker</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-700">Retail Bank</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Why Wholesale Is Faster</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Application &amp; Setup</td>
                  <td className="p-4 text-blue-700 font-semibold">1-3 days</td>
                  <td className="p-4 text-gray-600">3-7 days</td>
                  <td className="p-4 text-gray-700">Broker pre-qualifies across multiple lenders simultaneously</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Processing</td>
                  <td className="p-4 text-blue-700 font-semibold">2-4 days</td>
                  <td className="p-4 text-gray-600">5-10 days</td>
                  <td className="p-4 text-gray-700">Dedicated processing team, parallel ordering of third-party services</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Underwriting</td>
                  <td className="p-4 text-blue-700 font-semibold">5-7 days</td>
                  <td className="p-4 text-gray-600">7-14 days</td>
                  <td className="p-4 text-gray-700">File matches lender guidelines upfront, fewer surprises</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Conditions &amp; Clearing</td>
                  <td className="p-4 text-blue-700 font-semibold">3-7 days</td>
                  <td className="p-4 text-gray-600">7-14 days</td>
                  <td className="p-4 text-gray-700">Direct underwriter communication, complete condition packages</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Closing Disclosure + Signing</td>
                  <td className="p-4 text-blue-700 font-semibold">4-5 days</td>
                  <td className="p-4 text-gray-600">5-7 days</td>
                  <td className="p-4 text-gray-700">3-day CD waiting period is the same, but scheduling is faster</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="p-4 font-bold text-gray-900">Total Purchase Timeline</td>
                  <td className="p-4 text-blue-700 font-bold">21-30 days</td>
                  <td className="p-4 text-gray-600 font-bold">35-50 days</td>
                  <td className="p-4 text-gray-700 font-semibold">7-20 day advantage</td>
                </tr>
                <tr className="bg-blue-50/50">
                  <td className="p-4 font-bold text-gray-900">Total Refinance Timeline</td>
                  <td className="p-4 text-blue-700 font-bold">25-35 days</td>
                  <td className="p-4 text-gray-600 font-bold">40-55 days</td>
                  <td className="p-4 text-gray-700 font-semibold">15-20 day advantage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Lock-and-Shop Strategy */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-xl p-6 md:p-8 my-10">
          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            The Lock-and-Shop Strategy: Rate Protection During the Closing Process
          </h3>
          <p className="text-gray-700 mb-4">
            One wholesale-exclusive advantage during the closing process is the <strong>lock-and-shop strategy</strong>. Here is how it works:
          </p>
          <ol className="space-y-2 text-gray-700">
            <li><strong>1. Your broker locks your rate</strong> with a wholesale lender to protect you from market rate increases.</li>
            <li><strong>2. Shopping continues</strong> across the 200+ lender network for better execution — lower fees, faster turn times, or more favorable conditions.</li>
            <li><strong>3. If a better option emerges</strong>, your broker places the loan with the superior lender. If not, you proceed with your locked rate.</li>
            <li><strong>4. You are protected either way</strong> — your rate is locked in case markets move against you during the closing process.</li>
          </ol>
          <p className="text-gray-600 text-sm mt-4">
            This strategy is not available at retail banks because they only offer their own products. It is a structural advantage of the wholesale channel.
          </p>
        </div>

        {/* PAA Section */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">People Also Ask: Wholesale Mortgage Closing Process</h2>

        <div className="space-y-6 my-8">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does it take to close a wholesale mortgage?</h3>
            <p className="text-gray-700">
              <strong>Wholesale purchase mortgages typically close in 21-30 days, while refinances complete in 25-35 days.</strong> Retail banks average 35-50 days for purchases and 40-55 days for refinances. The wholesale channel is faster because brokers match your file to the right lender before submission, eliminating guideline mismatches that cause retail delays.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the 3-day rule before closing on a mortgage?</h3>
            <p className="text-gray-700">
              <strong>Federal law requires you to receive the Closing Disclosure at least 3 business days before signing.</strong> This TRID (TILA-RESPA Integrated Disclosure) requirement applies to all mortgage transactions. The 3-day period gives you time to review final loan terms, interest rates, monthly payments, and closing costs before committing.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Can a wholesale mortgage broker close faster than a bank?</h3>
            <p className="text-gray-700">
              <strong>Wholesale brokers consistently close 7-20 days faster than retail banks on purchase transactions.</strong> The speed advantage comes from pre-submission lender matching, direct underwriter communication, parallel processing of third-party services, and the ability to switch lenders if one is experiencing delays.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens between clear to close and closing day?</h3>
            <p className="text-gray-700">
              <strong>After clear to close, the Closing Disclosure is issued and the 3-business-day waiting period begins.</strong> During this time, the title company prepares final documents, the lender issues closing instructions, and your broker confirms wire amounts, signing logistics, and any last-minute items. You should review all final figures carefully.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What causes the most mortgage closing delays?</h3>
            <p className="text-gray-700">
              <strong>Appraisal issues, missing documentation, and title problems are the three most common closing delay causes.</strong> Employment verification delays, income calculation disputes, and insurance issues also contribute. Wholesale brokers prevent most delays by ordering appraisals immediately, collecting complete document packages upfront, and pre-screening for title issues.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Is conditional approval the same as being approved for a mortgage?</h3>
            <p className="text-gray-700">
              <strong>Conditional approval means you are approved pending specific conditions that must be satisfied before closing.</strong> Common conditions include updated pay stubs, letters of explanation, additional bank statements, or insurance documentation. Once all conditions are cleared, the underwriter issues a &quot;clear to close&quot; — which means your loan is fully approved and ready for signing.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to be present at the mortgage closing?</h3>
            <p className="text-gray-700">
              <strong>Most closings require the borrower to sign documents in person at the title company or with a mobile notary.</strong> Some lenders and title companies now offer remote online notarization (RON) in states that allow it. Your broker will confirm the signing options available for your specific transaction and lender.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What does a mortgage broker do during the closing process?</h3>
            <p className="text-gray-700">
              <strong>Your broker coordinates every party involved: lender, appraiser, title company, insurance agent, and escrow officer.</strong> They manage condition responses, communicate with the underwriter, track deadlines, resolve issues as they arise, and ensure all parties are aligned to hit your closing date. This coordination role is why wholesale closings run smoother than retail.
            </p>
          </div>
        </div>

        {/* Lead Magnet CTA */}
        <div className="my-10">
          <LeadMagnetCTA
            title="Download the Complete Closing Document Checklist"
            description="Get our comprehensive document checklist so you arrive fully prepared on Day 1 and close faster."
            href="/resources/document-checklist"
            badge="Free resource"
            ctaText="Get the checklist"
          />
        </div>

        {/* Cross-Links Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-10 not-prose">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Related Wholesale Mortgage Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/blog/wholesale-vs-retail-mortgage-brokers-2026" className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Wholesale vs Retail Mortgage Brokers</h4>
              <p className="text-xs text-gray-600">Full comparison of pricing, service, and loan options between channels.</p>
              <span className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-2">Read more <ArrowRight className="w-3 h-3" /></span>
            </Link>
            <Link href="/blog/mortgage-broker-vs-bank-2026" className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Mortgage Broker vs Bank</h4>
              <p className="text-xs text-gray-600">Why borrowers in CA and WA are choosing brokers over traditional banks.</p>
              <span className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-2">Read more <ArrowRight className="w-3 h-3" /></span>
            </Link>
            <Link href="/blog/how-to-get-wholesale-mortgage-rates-2026" className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">How to Get Wholesale Mortgage Rates</h4>
              <p className="text-xs text-gray-600">Step-by-step guide to accessing institutional mortgage pricing.</p>
              <span className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-2">Read more <ArrowRight className="w-3 h-3" /></span>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions: Wholesale Mortgage Closing Process</h2>
        <div className="space-y-4 my-8">
          {faqData.map((faq, index) => (
            <details key={index} className="group border border-gray-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
              </summary>
              <div className="p-5 pt-0 text-gray-700 border-t border-gray-100">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Expert Summary + CTA */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white rounded-2xl p-8 md:p-10 my-12 not-prose">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience a Streamlined Wholesale Closing Process?
          </h2>
          <p className="text-blue-100 text-lg mb-4">
            The wholesale mortgage closing process delivers faster timelines, better pricing, and a smoother experience than
            retail banking. With access to 200+ wholesale lenders, direct underwriter relationships, and a dedicated closing
            coordination process, your transaction is managed from application to funding by an experienced licensed professional.
          </p>
          <p className="text-blue-200 mb-6">
            Mo Abdel (NMLS #1426884) at Lumin Lending (NMLS #2716106) serves borrowers throughout California and Washington with
            wholesale mortgage origination across all loan types: conventional, FHA, VA, jumbo, bank statement, DSCR, and non-QM programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg flex items-center gap-2 w-full sm:w-auto justify-center">
                <Phone className="w-4 h-4" />
                Start Your Application
              </Button>
            </Link>
            <a href="tel:9498229662">
              <Button className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg flex items-center gap-2 w-full sm:w-auto justify-center">
                <Phone className="w-4 h-4" />
                Call (949) 822-9662
              </Button>
            </a>
          </div>
          <p className="text-blue-300 text-xs leading-relaxed">
            Licensed in California (DRE #02291443) and Washington. Equal Housing Lender. This content is for informational
            purposes only and is not a commitment to lend. Not all borrowers will qualify. Loan approval is subject to credit,
            income, property, and underwriting requirements. Terms and conditions apply. Closing timelines are estimates based
            on typical transactions and may vary based on individual circumstances, lender capacity, and third-party service
            provider availability. NMLS Consumer Access:{' '}
            <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-200 hover:text-white">
              nmlsconsumeraccess.org
            </a>
          </p>
        </div>
      </section>
    </article>
  );
}
