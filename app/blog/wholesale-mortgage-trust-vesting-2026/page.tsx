import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Clock, DollarSign, TrendingUp, AlertCircle, BookOpen, Shield, Users, FileText, Scale, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Buying Property in a Trust 2026: Wholesale Mortgage Options for Trust Vesting | Mo Abdel',
  description: 'Buying property in a revocable living trust requires a lender that allows trust vesting at closing. Most banks restrict trust purchases — wholesale brokers access 200+ lenders with trust-friendly programs for estate planning buyers. NMLS #1426884.',
  keywords: [
    'buying property in a trust mortgage',
    'trust vesting mortgage',
    'revocable living trust home purchase',
    'trust vesting at closing',
    'mortgage in trust name',
    'estate planning property purchase',
    'irrevocable trust mortgage',
    'certification of trust mortgage',
    'trust-friendly mortgage lenders',
    'trust vesting conventional loan',
    'jumbo loan trust vesting',
    'non-QM trust mortgage',
  ],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/wholesale-mortgage-trust-vesting-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/wholesale-mortgage-trust-vesting-2026',
      'x-default': 'https://www.mothebroker.com/blog/wholesale-mortgage-trust-vesting-2026',
    },
  },
  openGraph: {
    title: 'Buying Property in a Trust 2026: Wholesale Mortgage Options for Trust Vesting',
    description: 'Buying property in a revocable living trust requires a lender that allows trust vesting at closing. Most banks restrict trust purchases — wholesale brokers access 200+ lenders with trust-friendly programs for estate planning buyers.',
    url: 'https://www.mothebroker.com/blog/wholesale-mortgage-trust-vesting-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-26T00:00:00Z',
    modifiedTime: '2026-02-26T00:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buying Property in a Trust 2026: Wholesale Mortgage Options for Trust Vesting',
    description: 'Buying property in a revocable living trust requires a lender that allows trust vesting at closing. Most banks restrict trust purchases.',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
};

const faqData = [
  {
    question: 'Can I buy a house in my trust name with a mortgage?',
    answer: 'Yes. Many lenders allow you to purchase property vested in a revocable living trust. The borrower must be a trustee and beneficiary of the trust, and the trust must be a revocable inter vivos (living) trust. Wholesale brokers access 200+ lenders including many that allow trust vesting at closing — an option most retail banks restrict.',
  },
  {
    question: 'What is the difference between a revocable and irrevocable trust for mortgage purposes?',
    answer: 'A revocable living trust allows the borrower to retain control and modify the trust at any time — most lenders will finance property vested in a revocable trust. An irrevocable trust transfers ownership permanently, and most lenders will not finance property in an irrevocable trust because the borrower no longer has direct control over the collateral.',
  },
  {
    question: 'Does buying in a trust affect my mortgage interest rate?',
    answer: 'No. Trust vesting does not affect your mortgage interest rate or qualification. The borrower qualifies individually based on their personal credit, income, and assets — the same as any non-trust purchase. The trust is simply the entity that takes title to the property at closing.',
  },
  {
    question: 'What is a certification of trust and do lenders accept it?',
    answer: 'A certification of trust is an abbreviated document that confirms the trust exists, identifies the trustees and beneficiaries, confirms the trust is revocable, and verifies the trust has not been amended in ways that restrict borrowing. Most lenders accept a certification of trust instead of the full trust document, which protects your privacy.',
  },
  {
    question: 'Why do some banks decline trust purchases?',
    answer: 'Banks decline trust purchases due to internal policy restrictions, not regulations. Trust vesting adds complexity to the underwriting and closing process — the lender must review the trust document, verify trustee authority, and coordinate with the title company. Some banks choose not to handle this complexity. Wholesale lenders that specialize in trust transactions handle it routinely.',
  },
  {
    question: 'Can I use an FHA loan to buy property in a trust?',
    answer: 'FHA has limited provisions for trust vesting. The borrower must be both trustee and beneficiary, the trust must be revocable, and the trust cannot restrict the lender from foreclosing if necessary. Not all FHA lenders allow trust vesting — your wholesale broker identifies FHA lenders with trust-friendly policies.',
  },
  {
    question: 'Can I use a VA loan to buy property in a trust?',
    answer: 'Yes, VA loans allow trust vesting when the veteran is a trustee and beneficiary of the trust. The VA requires the trust to be a valid inter vivos revocable trust and that the veteran retains full power over the property. VA lenders vary in their trust policies, making wholesale broker access valuable.',
  },
  {
    question: 'What does the lender review in my trust document?',
    answer: 'The lender reviews the trust to confirm it is revocable, identify all trustees and beneficiaries, verify the trust does not restrict the borrower from mortgaging the property, confirm the trust allows the lender to exercise foreclosure rights, and verify the trust was properly funded and executed under state law.',
  },
  {
    question: 'Do I need to transfer the property into my trust after closing?',
    answer: 'If you vest the property in your trust at closing, no post-closing transfer is needed. If the lender requires you to close in your individual name, you can transfer the property into your trust after closing. Federal law (Garn-St. Germain Act) protects borrowers from a lender calling the loan due when transferring to a revocable living trust.',
  },
  {
    question: 'How does trust vesting affect title insurance?',
    answer: 'Title companies routinely handle trust-vested properties. The title policy will name the trust as the insured party. The title company reviews the trust document to confirm the trustee has authority to purchase and hold title to real property. This is standard practice and does not complicate or delay the title process.',
  },
  {
    question: 'Can I use a DSCR loan to buy investment property in a trust?',
    answer: 'Many DSCR lenders allow trust vesting for investment properties. DSCR programs are already entity-friendly because they serve investors who frequently use LLCs and trusts. Your wholesale broker identifies DSCR lenders that accept trust vesting for investment property purchases.',
  },
  {
    question: 'Does Mo Abdel handle trust-vested property purchases?',
    answer: 'Yes. Mo Abdel (NMLS #1426884) at Lumin Lending (NMLS #2716106) regularly handles trust-vested purchases in California and Washington. With access to 200+ wholesale lenders, Mo identifies trust-friendly programs across conventional, jumbo, VA, non-QM, and DSCR loan types for estate planning buyers.',
  },
];

export default function WholesaleMortgageTrustVesting2026() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Buying Property in a Trust 2026: Wholesale Mortgage Options for Trust Vesting',
            author: {
              '@type': 'Person',
              name: 'Mo Abdel',
              jobTitle: 'Licensed Mortgage Broker',
              identifier: 'NMLS #1426884',
              url: 'https://www.mothebroker.com/about',
              knowsAbout: [
                'Trust Vesting Mortgage',
                'Estate Planning Property Purchase',
                'Revocable Living Trust Financing',
                'Jumbo Trust Vesting',
                'Non-QM Entity Lending',
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
            datePublished: '2026-02-26',
            dateModified: '2026-02-26',
            mainEntity: {
              '@type': 'WebPage',
              '@id': 'https://www.mothebroker.com/blog/wholesale-mortgage-trust-vesting-2026',
              significantLink: [
                'https://www.consumerfinance.gov/',
                'https://www.irs.gov/',
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

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mothebroker.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.mothebroker.com/blog' },
              { '@type': 'ListItem', position: 3, name: 'Trust Vesting Guide 2026', item: 'https://www.mothebroker.com/blog/wholesale-mortgage-trust-vesting-2026' },
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
              cssSelector: ['.speakable-hook', 'h1'],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-8 md:p-12 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <Scale className="w-4 h-4" />
            <span>Trust &amp; Estate Planning Guide &mdash; Updated February 26, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Buying Property in a Trust 2026: Wholesale Mortgage Options for Trust Vesting
          </h1>
          <p className="speakable-hook text-lg md:text-xl text-blue-100 mb-8 max-w-3xl">
            Purchasing property in a revocable living trust avoids probate, provides privacy, and streamlines estate planning.
            Most banks restrict trust purchases — wholesale brokers access 200+ lenders with trust-friendly programs across
            conventional, jumbo, VA, and non-QM loan types.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Get Trust Vesting Help
              </Button>
            </Link>
            <a href="tel:9498229662">
              <Button className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call (949) 822-9662
              </Button>
            </a>
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
                &quot;Trust vesting is one of the most common areas where bank policies create unnecessary friction for qualified
                borrowers. A buyer with an 800 credit score, substantial assets, and a straightforward revocable living trust gets
                declined at their bank — not because of any regulation, but because the bank&apos;s internal policy does not accommodate
                trust purchases. Through our 200+ lender network, we place trust-vested purchases routinely because we work with
                lenders that handle trust transactions as a matter of standard practice, not as an exception.&quot;
              </p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-blue-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Scale className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-900">Probate Avoidance</span>
              </div>
              <span className="text-sm text-gray-600">Primary Benefit of Trust Ownership</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-900">200+</span>
              </div>
              <span className="text-sm text-gray-600">Lenders Including Trust-Friendly Programs</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-900">No Rate Impact</span>
              </div>
              <span className="text-sm text-gray-600">Trust Vesting Does Not Affect Pricing</span>
            </div>
          </div>
        </div>

        {/* Bing Power Block: Trust Vesting by Loan Type Table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-10 shadow-sm">
          <div className="bg-slate-800 text-white p-4 flex items-center gap-2">
            <Scale className="w-5 h-5" />
            <h2 className="text-xl font-bold m-0 text-white">Trust Vesting Availability by Loan Type</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Loan Type</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Trust Vesting Allowed?</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Key Conditions</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Wholesale Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Conventional (Fannie/Freddie)</td>
                  <td className="p-4 text-green-700 font-semibold">Yes</td>
                  <td className="p-4 text-gray-700">Revocable inter vivos trust; borrower is trustee &amp; beneficiary</td>
                  <td className="p-4 text-gray-700">Widely available across wholesale lenders</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">FHA</td>
                  <td className="p-4 text-amber-700 font-semibold">Limited</td>
                  <td className="p-4 text-gray-700">Revocable trust only; lender must retain foreclosure rights; not all FHA lenders allow it</td>
                  <td className="p-4 text-gray-700">Select FHA lenders through wholesale</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">VA</td>
                  <td className="p-4 text-green-700 font-semibold">Yes</td>
                  <td className="p-4 text-gray-700">Veteran must be trustee &amp; beneficiary; valid inter vivos revocable trust</td>
                  <td className="p-4 text-gray-700">Available through trust-friendly VA lenders</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Jumbo</td>
                  <td className="p-4 text-green-700 font-semibold">Yes (lender-specific)</td>
                  <td className="p-4 text-gray-700">Trust review required; some jumbo lenders have broader trust flexibility</td>
                  <td className="p-4 text-gray-700">Strong availability — jumbo borrowers frequently use trusts</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Non-QM / Bank Statement</td>
                  <td className="p-4 text-green-700 font-semibold">Yes</td>
                  <td className="p-4 text-gray-700">Entity-friendly programs; trust, LLC, and corporate vesting options</td>
                  <td className="p-4 text-gray-700">Widely available — non-QM lenders are entity-friendly</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900">DSCR (Investment)</td>
                  <td className="p-4 text-green-700 font-semibold">Yes</td>
                  <td className="p-4 text-gray-700">Trust, LLC, or individual vesting accepted by most DSCR lenders</td>
                  <td className="p-4 text-gray-700">Standard feature of DSCR programs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Numbered Steps */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 md:p-8 mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            7 Steps to Purchase Property in a Trust
          </h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <span className="text-gray-700"><strong>Establish your revocable living trust with an estate planning attorney.</strong> The trust must be an inter vivos (created during your lifetime) revocable trust naming you as both trustee and beneficiary. Consult an estate planning attorney for trust creation.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <span className="text-gray-700"><strong>Inform your wholesale broker that you intend to vest in your trust.</strong> Provide the trust name, date of creation, trustee names, and beneficiary information. Early notification allows your broker to identify trust-friendly lenders upfront.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <span className="text-gray-700"><strong>Provide the certification of trust or full trust document.</strong> Most lenders accept a certification of trust — a condensed document verifying the trust&apos;s existence, type, trustees, and borrowing authority without disclosing all trust provisions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <span className="text-gray-700"><strong>Your broker identifies lenders that allow trust vesting for your loan type.</strong> Conventional, jumbo, VA, non-QM, and DSCR programs each have different trust vesting policies. Your broker matches your loan scenario to trust-friendly lenders.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
              <span className="text-gray-700"><strong>The lender reviews the trust document during underwriting.</strong> The underwriter confirms the trust is revocable, you are the trustee and beneficiary, the trust does not restrict mortgaging the property, and the lender retains foreclosure rights.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
              <span className="text-gray-700"><strong>Title company prepares closing documents with trust vesting.</strong> The deed, deed of trust, and title insurance are all prepared in the name of your trust. The title company coordinates with the lender to ensure proper trust vesting language.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
              <span className="text-gray-700"><strong>Sign closing documents as trustee of the trust.</strong> You sign all loan and title documents in your capacity as trustee — for example, &quot;John Smith, Trustee of the John Smith Revocable Living Trust dated January 1, 2026.&quot;</span>
            </li>
          </ol>
        </div>

        {/* Revocable vs Irrevocable Trust Comparison Table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-10 shadow-sm">
          <div className="bg-blue-800 text-white p-4 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            <h2 className="text-xl font-bold m-0 text-white">Revocable vs Irrevocable Trust: Mortgage Implications</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Factor</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-green-700">Revocable Living Trust</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-red-700">Irrevocable Trust</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Mortgage Availability</td>
                  <td className="p-4 text-gray-700">Widely available through wholesale lenders</td>
                  <td className="p-4 text-gray-700">Extremely limited — most lenders decline</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Borrower Control</td>
                  <td className="p-4 text-gray-700">Full control — can modify or revoke at any time</td>
                  <td className="p-4 text-gray-700">No control — trust is permanent once established</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Qualification Impact</td>
                  <td className="p-4 text-gray-700">None — borrower qualifies individually</td>
                  <td className="p-4 text-gray-700">Significant — borrower may not be the legal owner</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Probate Avoidance</td>
                  <td className="p-4 text-gray-700">Yes — property passes outside probate</td>
                  <td className="p-4 text-gray-700">Yes — property passes outside probate</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Asset Protection</td>
                  <td className="p-4 text-gray-700">Limited — assets remain accessible to creditors</td>
                  <td className="p-4 text-gray-700">Strong — assets separated from personal estate</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Tax Treatment</td>
                  <td className="p-4 text-gray-700">Same as individual — transparent for tax purposes</td>
                  <td className="p-4 text-gray-700">Separate tax entity — requires its own tax return</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900">Lender Foreclosure Rights</td>
                  <td className="p-4 text-gray-700">Preserved — trustee can be foreclosed upon</td>
                  <td className="p-4 text-gray-700">Complicated — lender may not have clear foreclosure path</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* E-E-A-T Narrative Section 1 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <Scale className="w-6 h-6 text-blue-600" />
          Why Do Buyers Purchase Property in a Trust?
        </h2>
        <p>
          Purchasing property directly in a revocable living trust is a cornerstone of estate planning for homeowners across California
          and Washington. The practice serves three primary objectives that matter to property owners and their families:
        </p>
        <p>
          <strong>Probate avoidance</strong> is the most common reason. When property is held in an individual&apos;s name and the owner
          passes away, the property must go through probate — a court-supervised process that takes 6-18 months in California and can cost
          3-7% of the estate value. Property held in a revocable living trust bypasses probate entirely, transferring to the successor
          trustee (typically a spouse or child) immediately upon the owner&apos;s passing.
        </p>
        <p>
          <strong>Privacy</strong> is the second major benefit. Probate is a public process — anyone can look up the value of the estate,
          who inherited it, and all related court filings. Trust-vested property transfers privately without court involvement or public
          record disclosure.
        </p>
        <p>
          <strong>Continuity of management</strong> is the third benefit. If the property owner becomes incapacitated, the successor trustee
          named in the trust document can immediately step in to manage the property — pay the mortgage, handle maintenance, and make
          decisions — without needing a court-appointed conservatorship. This continuity protects both the property and the family.
        </p>
        <p>
          For California homeowners in particular, where median home values exceed $800,000 in many markets, the probate costs alone justify
          establishing a trust. A $1.2 million home going through California probate could incur $30,000-$80,000 in statutory attorney and
          executor fees — an entirely avoidable expense when the property is held in a trust.
        </p>

        {/* E-E-A-T Narrative Section 2 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-blue-600" />
          What Do Lenders Review in a Trust Document?
        </h2>
        <p>
          When you apply for a mortgage with trust vesting, the lender&apos;s underwriting team reviews the trust document (or certification
          of trust) to confirm the transaction meets their guidelines. Understanding what lenders look for helps you prepare and avoid delays.
        </p>
        <p>
          The lender&apos;s trust review focuses on five primary areas:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Trust Type Verification</h4>
            </div>
            <p className="text-sm text-gray-600">The trust must be a revocable inter vivos (living) trust created during the borrower&apos;s lifetime. Testamentary trusts (created by a will) and irrevocable trusts are not eligible for standard mortgage financing.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Trustee &amp; Beneficiary Identity</h4>
            </div>
            <p className="text-sm text-gray-600">The mortgage borrower must be named as a trustee and beneficiary of the trust. If co-borrowers are involved, all borrowers must be trustees. This ensures the borrower has legal authority over the property.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Borrowing Authority</h4>
            </div>
            <p className="text-sm text-gray-600">The trust document must not contain provisions that restrict the trustee from encumbering (mortgaging) trust property. The lender confirms the trust allows the trustee to pledge real property as collateral.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Foreclosure Rights</h4>
            </div>
            <p className="text-sm text-gray-600">The trust must not restrict the lender&apos;s ability to exercise foreclosure rights if the borrower defaults. The lender must be able to enforce the deed of trust against the property regardless of trust provisions.</p>
          </div>
        </div>
        <p>
          Most lenders accept a <strong>certification of trust</strong> rather than the full trust document. A certification is a shorter
          document — typically 2-4 pages — that your estate planning attorney prepares. It confirms the trust exists, identifies trustees
          and beneficiaries, states the trust is revocable, and certifies the trust has not been amended in ways that restrict borrowing
          or lender rights. The certification protects your privacy by not disclosing the full provisions of your trust, including
          distribution plans and successor trustee details.
        </p>
        <p>
          If the lender requires the full trust document (some do), be aware that the document is reviewed only for mortgage eligibility
          purposes. The lender is not providing legal advice about the trust&apos;s effectiveness for estate planning — that is the role
          of your estate planning attorney.
        </p>

        {/* E-E-A-T Narrative Section 3 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-amber-600" />
          Why Do Banks Decline Trust Purchases &mdash; and How Wholesale Solves It?
        </h2>
        <p>
          The most frustrating experience for trust-using homebuyers is receiving a denial from their bank for a reason that has nothing
          to do with their financial qualification. Banks decline trust purchases for internal policy reasons, not regulatory restrictions.
          Fannie Mae, Freddie Mac, the VA, and even FHA all permit trust vesting under defined conditions — yet many retail banks choose
          not to accommodate trust transactions.
        </p>
        <p>
          Common reasons banks decline trust purchases:
        </p>
        <ul>
          <li><strong>Underwriting complexity:</strong> Trust vesting adds steps to the underwriting and closing process. Banks with streamlined,
          high-volume operations prefer to avoid the additional review time and documentation requirements.</li>
          <li><strong>Title and closing coordination:</strong> Trust-vested closings require coordination between the lender, title company,
          and the borrower&apos;s estate planning attorney. Banks with centralized operations may not have local closing teams experienced
          with trust vesting in specific jurisdictions.</li>
          <li><strong>Training and expertise:</strong> Bank loan officers who rarely encounter trust transactions may not understand the
          guidelines and default to declining rather than researching the solution.</li>
          <li><strong>Risk aversion:</strong> Some bank compliance departments categorize trust transactions as higher-risk, even though
          revocable living trusts present no additional credit or collateral risk to the lender.</li>
        </ul>
        <p>
          The wholesale channel solves this problem structurally. When one lender declines a trust-vested purchase, your broker submits to
          a different lender from the 200+ available — without you needing to restart the application process. Many wholesale lenders
          process trust transactions routinely and have dedicated trust review teams within their underwriting departments. This is
          particularly important for <Link href="/blog/wholesale-mortgage-broker-california-pillar-2026">California</Link> and Washington
          buyers, where estate planning through trusts is standard practice for homeowners.
        </p>

        {/* E-E-A-T Narrative Section 4 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          How Does Trust Vesting Affect Loan Qualification?
        </h2>
        <p>
          One of the most common misconceptions about trust-vested purchases is that the trust somehow affects the borrower&apos;s ability to
          qualify for the mortgage. It does not. Here is how qualification works for trust transactions:
        </p>
        <p>
          <strong>The borrower qualifies individually.</strong> Even though the property will be titled in the trust&apos;s name, the
          mortgage qualification is based entirely on the individual borrower&apos;s credit score, income, assets, employment history,
          and debt-to-income ratio. The trust is not a borrower — the individual is.
        </p>
        <p>
          <strong>The trust is the vesting entity, not the qualifying entity.</strong> Think of trust vesting as a title-holding mechanism.
          The loan is made to you, the individual, and the property is held in your trust. The trust document confirms you have the authority
          to pledge the property as collateral for the loan.
        </p>
        <p>
          This means that trust vesting does not affect:
        </p>
        <ul>
          <li><strong>Interest rates:</strong> Trust-vested loans receive the same pricing as individually-vested loans</li>
          <li><strong>Loan-to-value ratios:</strong> The same LTV limits apply regardless of whether title is held individually or in a trust</li>
          <li><strong>Down payment requirements:</strong> No additional down payment is required for trust vesting</li>
          <li><strong>Debt-to-income ratios:</strong> DTI is calculated the same way — based on the individual borrower&apos;s income and debts</li>
          <li><strong>Credit score requirements:</strong> Same minimum credit scores apply</li>
          <li><strong>Reserve requirements:</strong> No additional reserves needed for trust-vested transactions</li>
        </ul>
        <p>
          The only additional requirement is the trust review itself — confirming the trust document meets the lender&apos;s criteria. This
          adds minimal time to the underwriting process (typically 1-3 days) and does not change any aspect of the borrower&apos;s qualification.
        </p>

        {/* Data Hub: Post-Closing Considerations */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-10 shadow-sm">
          <div className="bg-blue-800 text-white p-4 flex items-center gap-2">
            <Home className="w-5 h-5" />
            <h2 className="text-xl font-bold m-0 text-white">Trust Vesting: Closing &amp; Post-Closing Considerations</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Consideration</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Details</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Action Required</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Title Insurance</td>
                  <td className="p-4 text-gray-700">Title policy issued in trust name; title company reviews trust authority</td>
                  <td className="p-4 text-gray-700">Provide trust document to title company before closing</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Homeowners Insurance</td>
                  <td className="p-4 text-gray-700">Policy should name both trust and lender as interested parties</td>
                  <td className="p-4 text-gray-700">Inform insurance agent of trust vesting before closing</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Property Tax</td>
                  <td className="p-4 text-gray-700">Trust vesting does not trigger reassessment in CA (Prop 13 protection)</td>
                  <td className="p-4 text-gray-700">File exemption claim form with county assessor if applicable</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Post-Closing Trust Amendments</td>
                  <td className="p-4 text-gray-700">Minor amendments typically do not require lender notification</td>
                  <td className="p-4 text-gray-700">Consult attorney before making changes that affect trustee or borrowing authority</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Garn-St. Germain Protection</td>
                  <td className="p-4 text-gray-700">Federal law prevents lender from calling loan due when transferring to borrower&apos;s revocable trust</td>
                  <td className="p-4 text-gray-700">No action needed — protection is automatic for revocable trusts</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900">Mortgage Interest Deduction</td>
                  <td className="p-4 text-gray-700">Revocable trust is tax-transparent — mortgage interest reported on personal return</td>
                  <td className="p-4 text-gray-700">File as normal; consult CPA for specific tax questions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Estate Planning Integration */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-xl p-6 md:p-8 my-10">
          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blue-600" />
            Trust-Vested Property &amp; Estate Planning: What to Discuss with Your Attorney
          </h3>
          <p className="text-gray-700 mb-4">
            Purchasing property in a trust is one component of a comprehensive estate plan. While your mortgage broker handles the financing
            side, these estate planning topics should be discussed with your attorney:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">Successor Trustee Selection</h4>
              <p className="text-sm text-gray-600">Who manages the property if you become incapacitated or pass away? Your successor trustee should understand the mortgage obligations and property management responsibilities.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">Distribution Instructions</h4>
              <p className="text-sm text-gray-600">How should the property be handled — sold, retained by a beneficiary, or distributed among heirs? The trust document should provide clear instructions for the successor trustee.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">Community Property Considerations</h4>
              <p className="text-sm text-gray-600">California is a community property state. How the trust holds title (community property, community property with right of survivorship, etc.) has tax implications your attorney should address.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">Tax Basis Step-Up</h4>
              <p className="text-sm text-gray-600">Property held in a revocable trust receives a stepped-up tax basis upon the owner&apos;s death, reducing capital gains taxes for heirs. Consult your CPA and attorney for specifics on <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">IRS</a> rules.</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            This information is general in nature and is not legal or tax advice. Consult a qualified estate planning attorney and CPA for
            advice specific to your situation. Mo Abdel is a licensed mortgage broker — not an attorney or tax advisor.
          </p>
        </div>

        {/* E-E-A-T Narrative Section 5 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-600" />
          How Does the Wholesale Broker Advantage Apply to Trust Transactions?
        </h2>
        <p>
          Trust vesting is a perfect example of how wholesale broker access solves problems that the retail banking channel creates. The
          key advantage is straightforward: when one lender declines a trust-vested purchase due to internal policy, your broker places
          the loan with a different lender from the 200+ available — without you starting over.
        </p>
        <p>
          Specific wholesale advantages for trust transactions include:
        </p>
        <ul>
          <li><strong>Lender policy knowledge:</strong> Your broker knows which lenders in the 200+ network allow trust vesting for each
          loan type. Instead of applying to a bank and discovering their policy after weeks of processing, your broker matches your trust
          transaction to a compatible lender from day one.</li>
          <li><strong>Jumbo trust expertise:</strong> Trust vesting is particularly common in <Link href="/blog/wholesale-mortgage-broker-california-pillar-2026">jumbo
          loan transactions</Link> because high-net-worth borrowers use trusts extensively. Wholesale jumbo lenders routinely process trust
          transactions and have experienced trust review teams. Retail banks often have limited jumbo programs and even more limited trust
          acceptance policies.</li>
          <li><strong>Non-QM and DSCR trust flexibility:</strong> <Link href="/blog/non-qm-loans-wholesale-broker-2026">Non-QM</Link> and
          DSCR lenders in the wholesale channel are inherently entity-friendly. They finance properties held in trusts, LLCs, corporations,
          and other entities as a standard feature — not an exception. If you are purchasing an investment property in a trust, DSCR programs
          through wholesale provide the most straightforward path.</li>
          <li><strong>Multi-property trust coordination:</strong> Borrowers who purchase multiple properties in the same trust benefit from
          a wholesale broker who can coordinate financing across different lenders. Each property may require a different loan type — one
          conventional, one jumbo, one DSCR — and the broker ensures trust vesting is consistent across all transactions.</li>
        </ul>
        <p>
          According to the <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer">Consumer Financial Protection
          Bureau</a>, mortgage lenders are required to disclose all loan terms and fees regardless of how title is vested. Trust vesting
          does not change your consumer protection rights — you receive the same disclosures, the same waiting periods, and the same
          regulatory protections as any other borrower.
        </p>

        {/* PAA Section */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">People Also Ask: Buying Property in a Trust</h2>

        <div className="space-y-6 my-8">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Can you buy a house in a trust name?</h3>
            <p className="text-gray-700">
              <strong>Yes — you can purchase a house vested directly in your revocable living trust name at closing.</strong> The borrower must be a trustee and beneficiary of the trust, and the trust must be revocable. Wholesale brokers access 200+ lenders including many that allow trust vesting as a standard closing option.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Does trust vesting affect mortgage rates?</h3>
            <p className="text-gray-700">
              <strong>No — trust vesting has zero impact on your mortgage interest rate, fees, or loan terms.</strong> The borrower qualifies individually based on personal credit, income, and assets. The trust is the title-holding entity, not the borrower. Pricing is identical whether title is held individually or in a revocable living trust.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the Garn-St. Germain Act and how does it protect trust transfers?</h3>
            <p className="text-gray-700">
              <strong>The Garn-St. Germain Act (1982) prohibits lenders from calling a loan due when a borrower transfers property to their own revocable living trust.</strong> This federal protection means you can transfer an existing mortgaged property into your trust without triggering the due-on-sale clause. The protection applies to revocable trusts where the borrower is a beneficiary.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I close in my name and transfer to trust later?</h3>
            <p className="text-gray-700">
              <strong>Closing directly in the trust name is preferred because it avoids the post-closing transfer step and associated costs.</strong> However, if the lender requires individual vesting at closing, the Garn-St. Germain Act protects you when you transfer to your trust afterward. Post-closing transfer may involve a small recording fee but does not trigger the due-on-sale clause.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Can a VA loan be used to buy property in a trust?</h3>
            <p className="text-gray-700">
              <strong>Yes — VA loans allow trust vesting when the veteran is a trustee and beneficiary of a valid inter vivos revocable trust.</strong> The VA requires the trust to preserve the veteran&apos;s full ownership rights and the lender&apos;s security interest. Not all VA lenders accommodate trust vesting — your wholesale broker identifies VA lenders with trust-friendly policies.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a certification of trust?</h3>
            <p className="text-gray-700">
              <strong>A certification of trust is a condensed document that confirms your trust exists without disclosing the full trust provisions.</strong> It identifies the trustees, beneficiaries, trust type (revocable), and date of creation. Most mortgage lenders accept a certification in lieu of the full trust document, which protects your estate planning privacy.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Does buying in a trust affect property taxes in California?</h3>
            <p className="text-gray-700">
              <strong>No — transferring property to your own revocable living trust does not trigger property tax reassessment in California under Proposition 13.</strong> The transfer is considered a change in the manner of holding title, not a change in ownership. However, transfers to irrevocable trusts or trusts where the beneficiary changes may trigger reassessment. Consult your CPA for specifics.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I refinance a property that is already in a trust?</h3>
            <p className="text-gray-700">
              <strong>Yes — you can refinance a property held in a trust without removing it from the trust first.</strong> The refinance process follows the same trust review procedures as a purchase. Your wholesale broker identifies refinance lenders that accept trust-vested properties, maintaining your estate planning structure throughout the refinance transaction.
            </p>
          </div>
        </div>

        {/* Cross-Links Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-10 not-prose">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Related Wholesale Mortgage Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/blog/wholesale-mortgage-broker-california-pillar-2026" className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">California Wholesale Mortgage Guide</h4>
              <p className="text-xs text-gray-600">Complete guide to wholesale mortgage brokers in California with 200+ lender access.</p>
              <span className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-2">Read more <ArrowRight className="w-3 h-3" /></span>
            </Link>
            <Link href="/blog/non-qm-loans-wholesale-broker-2026" className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Non-QM Loan Programs</h4>
              <p className="text-xs text-gray-600">Bank statement, DSCR, asset depletion, and specialty programs through wholesale.</p>
              <span className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-2">Read more <ArrowRight className="w-3 h-3" /></span>
            </Link>
            <Link href="/blog/wholesale-mortgage-closing-timeline-2026" className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Wholesale Closing Timeline</h4>
              <p className="text-xs text-gray-600">Step-by-step closing process from application to funding through wholesale.</p>
              <span className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-2">Read more <ArrowRight className="w-3 h-3" /></span>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions: Trust Vesting &amp; Mortgage Financing</h2>
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
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-8 md:p-10 my-12 not-prose">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Buying Property in a Trust? We Handle Trust Vesting Routinely
          </h2>
          <p className="text-blue-100 text-lg mb-4">
            Trust-vested property purchases require a lender that accommodates trust transactions — and most retail banks do not.
            Wholesale access to 200+ lenders means your trust purchase is matched to lenders that handle trust vesting as standard
            practice. Your qualification, rate, and terms are not affected by trust vesting. The only difference is ensuring the
            lender and title company properly coordinate the trust documentation.
          </p>
          <p className="text-blue-200 mb-6">
            Mo Abdel (NMLS #1426884) at Lumin Lending (NMLS #2716106) handles trust-vested purchases throughout California and
            Washington with conventional, jumbo, VA, non-QM, and DSCR loan programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg flex items-center gap-2 w-full sm:w-auto justify-center">
                <Phone className="w-4 h-4" />
                Start Your Trust Purchase
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
            Licensed in California (DRE #02291443) and Washington. Equal Housing Lender. This content is for informational purposes only
            and is not a commitment to lend. Not all borrowers will qualify. Loan approval is subject to credit, income, property, and
            underwriting requirements. Trust vesting availability varies by lender and loan type. This content is not legal, tax, or
            estate planning advice — consult a qualified attorney and CPA for advice specific to your situation. Terms and conditions
            apply. NMLS Consumer Access:{' '}
            <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-200 hover:text-white">
              nmlsconsumeraccess.org
            </a>
          </p>
        </div>
      </section>
    </article>
  );
}
