import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Clock, DollarSign, TrendingUp, AlertCircle, BookOpen, Shield, Users, FileText, Building2, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Wholesale Mortgage Condo Financing 2026: Warrantable vs Non-Warrantable Loans | Mo Abdel',
  description: 'Condo mortgages require project approval — warrantable condos qualify for conventional loans while non-warrantable condos need non-QM or portfolio lenders. Wholesale brokers access 200+ lenders including condo-specialist programs. NMLS #1426884.',
  keywords: [
    'condo mortgage warrantable non-warrantable',
    'warrantable condo requirements',
    'non-warrantable condo financing',
    'condo mortgage wholesale broker',
    'condotel financing',
    'FHA condo approval',
    'VA condo approval',
    'condo HOA questionnaire',
    'condo project approval',
    'non-QM condo loans',
    'DSCR condo investment',
    'condo master insurance policy',
  ],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/wholesale-mortgage-condo-financing-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/wholesale-mortgage-condo-financing-2026',
      'x-default': 'https://www.mothebroker.com/blog/wholesale-mortgage-condo-financing-2026',
    },
  },
  openGraph: {
    title: 'Wholesale Mortgage Condo Financing 2026: Warrantable vs Non-Warrantable Loans',
    description: 'Condo mortgages require project approval — warrantable condos qualify for conventional loans while non-warrantable condos need non-QM or portfolio lenders. Wholesale brokers access 200+ lenders including condo-specialist programs.',
    url: 'https://www.mothebroker.com/blog/wholesale-mortgage-condo-financing-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-26T00:00:00Z',
    modifiedTime: '2026-02-26T00:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale Mortgage Condo Financing 2026: Warrantable vs Non-Warrantable Loans',
    description: 'Condo mortgages require project approval — warrantable condos qualify for conventional loans while non-warrantable condos need non-QM or portfolio lenders.',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
};

const faqData = [
  {
    question: 'What makes a condo warrantable vs non-warrantable?',
    answer: 'A warrantable condo meets Fannie Mae and Freddie Mac project approval standards: at least 50% owner-occupied, no single entity owns more than 20% of units, no pending litigation against the HOA, commercial space under 35%, adequate insurance coverage, and the HOA is financially solvent with sufficient reserves. Non-warrantable condos fail one or more of these requirements.',
  },
  {
    question: 'Can I get a conventional loan on a non-warrantable condo?',
    answer: 'No. Conventional loans through Fannie Mae and Freddie Mac require the condo project to be warrantable. Non-warrantable condos require alternative financing such as non-QM loans, portfolio lenders, or DSCR programs. Wholesale brokers access 200+ lenders including specialists that finance non-warrantable projects.',
  },
  {
    question: 'What is an FHA spot approval for condos?',
    answer: 'FHA spot approval allows individual condo units to receive FHA financing even when the entire project is not on the FHA-approved list. The unit must meet specific criteria including owner-occupancy ratios, financial health of the HOA, and insurance requirements. This expanded access began with HUD guidelines updated in 2024 and remains available in 2026.',
  },
  {
    question: 'How do I find out if my condo is warrantable?',
    answer: 'Request the HOA questionnaire from your condo association management company. This document contains owner-occupancy ratios, litigation status, budget details, reserve balances, insurance coverage, and single-entity ownership data. Your wholesale broker reviews this questionnaire to determine warrantability against each lender guidelines.',
  },
  {
    question: 'What is a condotel and how is it financed?',
    answer: 'A condotel is a condominium unit within a hotel that offers short-term rental programs, front desk services, and hotel amenities. Condotels are always classified as non-warrantable. Financing requires specialized condotel lenders available through the wholesale channel, typically requiring 25-30% down payment with higher interest rates than standard condo financing.',
  },
  {
    question: 'Do DSCR lenders finance non-warrantable condos?',
    answer: 'Many DSCR lenders finance non-warrantable condos for investment purposes. The loan qualifies based on the rental income the unit generates relative to the mortgage payment. DSCR condo programs through wholesale typically require 25% down, a DSCR ratio of 1.0 or higher, and credit scores of 680 or above.',
  },
  {
    question: 'What insurance does my condo need for a mortgage?',
    answer: 'Condo financing requires two insurance policies: the master policy (carried by the HOA covering the building structure, common areas, and liability) and an HO-6 policy (carried by the individual unit owner covering interior finishes, personal property, and personal liability). Lenders verify both policies meet minimum coverage requirements.',
  },
  {
    question: 'Why do banks decline non-warrantable condo loans?',
    answer: 'Banks decline non-warrantable condos because they cannot sell these loans to Fannie Mae or Freddie Mac on the secondary market. Banks prefer loans they can originate and sell quickly. Non-warrantable condos require portfolio lending or private investors, which most retail banks do not offer. Wholesale brokers access lenders that specialize in these programs.',
  },
  {
    question: 'What is the owner-occupancy ratio requirement for condos?',
    answer: 'Fannie Mae requires at least 50% of units in a condo project to be owner-occupied (primary residence or second home) for warrantable status. FHA has similar requirements. Projects with less than 50% owner-occupancy are classified as non-warrantable and require alternative financing such as non-QM or portfolio lending programs.',
  },
  {
    question: 'Can I buy an investment condo in a non-warrantable project?',
    answer: 'Yes. DSCR loan programs and non-QM portfolio lenders finance investment condos in non-warrantable projects. These programs qualify the loan based on rental income rather than personal income. Wholesale brokers access multiple DSCR and portfolio lenders that accept non-warrantable condo projects for investment purposes.',
  },
  {
    question: 'What is a limited review vs full review condo approval?',
    answer: 'A limited review is a streamlined condo project review for loans with lower risk profiles — typically requiring less than 90% LTV on established projects. A full review is a comprehensive project analysis examining all warrantability factors including financials, litigation, insurance, and owner-occupancy. Most purchase transactions and higher LTV loans require full review.',
  },
  {
    question: 'Does Mo Abdel finance condos in California and Washington?',
    answer: 'Yes. Mo Abdel (NMLS #1426884) at Lumin Lending (NMLS #2716106) finances warrantable and non-warrantable condos throughout California and Washington. With access to 200+ wholesale lenders including condo-specialist programs, condotel lenders, and DSCR providers, Mo handles the full spectrum of condo financing scenarios.',
  },
];

export default function WholesaleMortgageCondoFinancing2026() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Wholesale Mortgage Condo Financing 2026: Warrantable vs Non-Warrantable Loans',
            author: {
              '@type': 'Person',
              name: 'Mo Abdel',
              jobTitle: 'Licensed Mortgage Broker',
              identifier: 'NMLS #1426884',
              url: 'https://www.mothebroker.com/about',
              knowsAbout: [
                'Condo Mortgage Financing',
                'Warrantable Condo Requirements',
                'Non-Warrantable Condo Loans',
                'Condotel Financing',
                'DSCR Condo Investment Loans',
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
              '@id': 'https://www.mothebroker.com/blog/wholesale-mortgage-condo-financing-2026',
              significantLink: [
                'https://www.consumerfinance.gov/',
                'https://www.fhfa.gov/',
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
              { '@type': 'ListItem', position: 3, name: 'Condo Financing Guide 2026', item: 'https://www.mothebroker.com/blog/wholesale-mortgage-condo-financing-2026' },
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
            <Building2 className="w-4 h-4" />
            <span>Condo Financing Guide &mdash; Updated February 26, 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Wholesale Mortgage Condo Financing 2026: Warrantable vs Non-Warrantable Loans
          </h1>
          <p className="speakable-hook text-lg md:text-xl text-blue-100 mb-8 max-w-3xl">
            Condo mortgages require project-level approval that most property types do not. Warrantable condos qualify for conventional,
            FHA, and VA financing. Non-warrantable condos need specialized lenders that wholesale brokers access through a 200+ lender network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Get Condo Financing Help
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
                &quot;Condo financing is where the wholesale channel provides the clearest advantage over retail banks. When a bank
                declines a condo purchase because the project is non-warrantable, they have zero alternatives for you. Through our
                200+ lender network, we access portfolio lenders, non-QM condo specialists, condotel programs, and DSCR providers
                that finance projects most banks refuse to touch. Roughly 30-40% of the condo transactions we handle in California
                involve projects that at least one major bank has already declined.&quot;
              </p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-blue-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-900">50%+</span>
              </div>
              <span className="text-sm text-gray-600">Owner-Occupancy Required (Warrantable)</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-900">200+</span>
              </div>
              <span className="text-sm text-gray-600">Wholesale Lenders Including Condo Specialists</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-900">20%</span>
              </div>
              <span className="text-sm text-gray-600">Max Single-Entity Ownership Limit</span>
            </div>
          </div>
        </div>

        {/* Bing Power Block: Warrantable vs Non-Warrantable Table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-10 shadow-sm">
          <div className="bg-slate-800 text-white p-4 flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            <h2 className="text-xl font-bold m-0 text-white">Warrantable vs Non-Warrantable Condo Requirements</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Requirement</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-green-700">Warrantable</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-red-700">Non-Warrantable Trigger</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Owner-Occupancy Ratio</td>
                  <td className="p-4 text-gray-700">50%+ of units owner-occupied</td>
                  <td className="p-4 text-gray-700">Less than 50% owner-occupied</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Single-Entity Ownership</td>
                  <td className="p-4 text-gray-700">No entity owns more than 20% of units</td>
                  <td className="p-4 text-gray-700">One entity owns &gt;20% of units (developer holdback)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Litigation Status</td>
                  <td className="p-4 text-gray-700">No pending litigation against HOA</td>
                  <td className="p-4 text-gray-700">Active or pending litigation involving HOA</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Commercial Space</td>
                  <td className="p-4 text-gray-700">Less than 35% of total area is commercial</td>
                  <td className="p-4 text-gray-700">35%+ of building is commercial/retail space</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">HOA Financial Health</td>
                  <td className="p-4 text-gray-700">Adequate reserves, no delinquency &gt;15%</td>
                  <td className="p-4 text-gray-700">Insufficient reserves, high delinquency rates</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Insurance Coverage</td>
                  <td className="p-4 text-gray-700">Master policy meets Fannie Mae requirements</td>
                  <td className="p-4 text-gray-700">Inadequate master policy or missing coverage</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">New Construction Presale</td>
                  <td className="p-4 text-gray-700">70%+ of units sold (new projects)</td>
                  <td className="p-4 text-gray-700">Less than 70% presold in new developments</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900">Hotel/Condotel Operations</td>
                  <td className="p-4 text-gray-700">No hotel or rental pool operations</td>
                  <td className="p-4 text-gray-700">Any hotel-condo, condotel, or mandatory rental pool</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Numbered Steps: How to Determine if Your Condo Is Warrantable */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 md:p-8 mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            8 Steps to Determine if Your Condo Is Warrantable
          </h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <span className="text-gray-700"><strong>Request the HOA questionnaire.</strong> Contact the HOA management company and request the lender questionnaire (also called condo questionnaire or project certification). Most management companies have this form ready.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <span className="text-gray-700"><strong>Check the owner-occupancy ratio.</strong> The questionnaire shows what percentage of units are owner-occupied vs renter-occupied. You need 50% or higher for warrantable status.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <span className="text-gray-700"><strong>Verify single-entity ownership.</strong> Confirm no single person, company, or developer owns more than 20% of the total units in the project.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <span className="text-gray-700"><strong>Review litigation status.</strong> Any pending or active lawsuits involving the HOA — including construction defect claims — trigger non-warrantable classification with most lenders.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
              <span className="text-gray-700"><strong>Calculate commercial space percentage.</strong> If the project has retail, office, or commercial space, it must be less than 35% of total building area.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
              <span className="text-gray-700"><strong>Review HOA financials.</strong> Check the budget for adequate reserves (typically 10%+ of annual budget), delinquency rates below 15%, and no special assessments that indicate financial distress.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
              <span className="text-gray-700"><strong>Verify master insurance policy.</strong> The HOA&apos;s master policy must include hazard, liability, and fidelity coverage at amounts meeting Fannie Mae&apos;s minimum requirements.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">8</span>
              <span className="text-gray-700"><strong>Submit to your wholesale broker for final review.</strong> Your broker reviews the questionnaire against each lender&apos;s specific guidelines — some lenders have more flexible warrantability criteria than Fannie Mae&apos;s standard requirements.</span>
            </li>
          </ol>
        </div>

        {/* Financing Options by Condo Type Table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-10 shadow-sm">
          <div className="bg-blue-800 text-white p-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            <h2 className="text-xl font-bold m-0 text-white">Financing Options by Condo Type</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Condo Type</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Conventional</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">FHA</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">VA</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Non-QM / Portfolio</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">DSCR</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Warrantable Condo</td>
                  <td className="p-4 text-green-700 font-semibold">Yes</td>
                  <td className="p-4 text-green-700 font-semibold">Yes (if FHA-approved)</td>
                  <td className="p-4 text-green-700 font-semibold">Yes (if VA-approved)</td>
                  <td className="p-4 text-green-700 font-semibold">Yes</td>
                  <td className="p-4 text-green-700 font-semibold">Yes</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Non-Warrantable Condo</td>
                  <td className="p-4 text-red-700 font-semibold">No</td>
                  <td className="p-4 text-red-700 font-semibold">No</td>
                  <td className="p-4 text-red-700 font-semibold">No</td>
                  <td className="p-4 text-green-700 font-semibold">Yes</td>
                  <td className="p-4 text-green-700 font-semibold">Yes (many lenders)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Condotel / Hotel-Condo</td>
                  <td className="p-4 text-red-700 font-semibold">No</td>
                  <td className="p-4 text-red-700 font-semibold">No</td>
                  <td className="p-4 text-red-700 font-semibold">No</td>
                  <td className="p-4 text-green-700 font-semibold">Yes (specialized)</td>
                  <td className="p-4 text-green-700 font-semibold">Yes (select lenders)</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">New Construction (&lt;70% presold)</td>
                  <td className="p-4 text-red-700 font-semibold">No</td>
                  <td className="p-4 text-red-700 font-semibold">No</td>
                  <td className="p-4 text-red-700 font-semibold">No</td>
                  <td className="p-4 text-green-700 font-semibold">Yes</td>
                  <td className="p-4 text-amber-700 font-semibold">Case-by-case</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900">Litigation-Pending Project</td>
                  <td className="p-4 text-red-700 font-semibold">No</td>
                  <td className="p-4 text-red-700 font-semibold">No</td>
                  <td className="p-4 text-red-700 font-semibold">No</td>
                  <td className="p-4 text-green-700 font-semibold">Yes (select lenders)</td>
                  <td className="p-4 text-amber-700 font-semibold">Lender-specific</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* E-E-A-T Narrative Section 1 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-blue-600" />
          What Are Fannie Mae &amp; Freddie Mac Warrantability Requirements?
        </h2>
        <p>
          Fannie Mae and Freddie Mac — the two government-sponsored enterprises (GSEs) that purchase conventional mortgages from lenders — set
          the warrantability standards that determine whether a condo project qualifies for conventional financing. These standards exist because
          the GSEs need assurance that the project is financially stable, properly managed, and maintains value over time.
        </p>
        <p>
          The <a href="https://www.fhfa.gov/" target="_blank" rel="noopener noreferrer">Federal Housing Finance Agency (FHFA)</a> oversees
          both Fannie Mae and Freddie Mac. Their warrantability framework evaluates six primary categories:
        </p>
        <ul>
          <li><strong>Owner-occupancy ratio (50%+ required):</strong> At least half of units must be owner-occupied. This ensures the community
          is stable and that homeowners have a vested interest in maintaining the property. Projects dominated by renters present higher risk.</li>
          <li><strong>Single-entity ownership limits (20% maximum):</strong> No individual, corporation, or entity can own more than 20% of
          the total units. This prevents investor concentration that could lead to bulk selling, rental dominance, or undue influence over HOA decisions.</li>
          <li><strong>HOA financial health:</strong> The HOA budget must allocate adequate funds to reserves (typically 10%+ of total budget),
          maintain delinquency rates below 15%, and demonstrate financial stability through balanced budgets and no reliance on special assessments.</li>
          <li><strong>Litigation status (no pending suits):</strong> Active or pending litigation against the HOA — including construction
          defect claims, slip-and-fall lawsuits, or contractual disputes — triggers non-warrantable classification. Even frivolous lawsuits
          can disqualify a project until the litigation resolves.</li>
          <li><strong>Commercial space limits (under 35%):</strong> The total square footage dedicated to commercial, retail, or non-residential
          uses must be less than 35% of the project&apos;s total area. Mixed-use projects exceeding this threshold require alternative financing.</li>
          <li><strong>Insurance requirements:</strong> The master insurance policy must provide hazard coverage, general liability (at least $1 million
          per occurrence), and fidelity/crime coverage. Flood insurance is required in FEMA-designated flood zones.</li>
        </ul>
        <p>
          When all six categories pass review, the condo is classified as warrantable and eligible for conventional financing with standard pricing.
          When any single category fails, the entire project becomes non-warrantable — and every unit in that project requires alternative financing.
        </p>

        {/* E-E-A-T Narrative Section 2 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-blue-600" />
          How Do FHA &amp; VA Condo Approval Processes Work?
        </h2>
        <p>
          FHA and VA each maintain their own approved condo project lists, separate from Fannie Mae&apos;s warrantability standards. Understanding
          these approval paths is critical because a condo may be warrantable but not FHA-approved, or vice versa.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">FHA Condo Approval</h3>
        <p>
          The FHA maintains a searchable database of approved condo projects. For projects not on the approved list, the FHA introduced expanded
          single-unit approval (commonly called &quot;spot approval&quot;) guidelines. Under spot approval, individual units in unapproved projects
          can qualify for FHA financing when:
        </p>
        <ul>
          <li>The project has been completed and is not new construction with less than the required presale threshold</li>
          <li>At least 50% of units are owner-occupied</li>
          <li>No more than 50% of units have FHA-insured mortgages (concentration limit)</li>
          <li>The HOA is financially solvent with no significant delinquency</li>
          <li>The project carries adequate insurance coverage</li>
        </ul>
        <p>
          FHA spot approval expanded access to condo financing for buyers using FHA loans (3.5% down payment). Your wholesale broker can determine
          whether a specific unit qualifies under spot approval guidelines — this analysis requires reviewing the HOA questionnaire against FHA-specific criteria.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">VA Condo Approval</h3>
        <p>
          The VA maintains its own approved condo project list. VA-eligible veterans can only use their VA loan benefit to purchase condos in
          VA-approved projects. The VA approval process evaluates many of the same factors as conventional warrantability but applies
          VA-specific standards for insurance, management, and financial health.
        </p>
        <p>
          If a condo project is not VA-approved, the HOA or a VA-approved lender can submit the project for approval. This process typically
          takes 4-8 weeks and requires detailed project documentation. Your wholesale broker coordinates this submission process with the VA
          and the HOA management company.
        </p>

        {/* E-E-A-T Narrative Section 3 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          What Non-QM &amp; Portfolio Options Exist for Non-Warrantable Condos?
        </h2>
        <p>
          When a condo project fails warrantability — regardless of the reason — conventional, FHA, and VA financing are unavailable. This is
          where the wholesale channel provides decisive value. Through our 200+ lender network, we access multiple categories of non-warrantable
          condo financing:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Non-QM Condo Programs</h4>
            </div>
            <p className="text-sm text-gray-600">Full documentation or bank statement qualification on non-warrantable projects. Typically 10-20% down, credit scores 680+, and competitive rates compared to hard money alternatives.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Portfolio Lenders</h4>
            </div>
            <p className="text-sm text-gray-600">Lenders that hold loans in their own portfolio rather than selling to the GSEs. They set their own condo approval standards, which are often more flexible than Fannie Mae requirements.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">DSCR Condo Programs</h4>
            </div>
            <p className="text-sm text-gray-600">Investment condo financing based on rental income. Many DSCR lenders accept non-warrantable projects with 25% down and DSCR ratios of 1.0+. No personal income verification required.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Home className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Condotel Specialists</h4>
            </div>
            <p className="text-sm text-gray-600">Dedicated condotel and hotel-condo lenders available exclusively through the wholesale channel. Typically 25-30% down with specialized underwriting for hospitality-oriented properties.</p>
          </div>
        </div>
        <p>
          The common thread across these programs is that they are <strong>not available at retail banks</strong>. Banks originate conventional
          loans they can sell to Fannie Mae and Freddie Mac. When the condo project does not meet GSE standards, the bank has no product to offer.
          Wholesale brokers access the lenders that specialize in exactly these scenarios — and because we work with dozens of non-warrantable
          condo lenders, we can find the program with the most competitive pricing for each specific situation.
        </p>

        {/* E-E-A-T Narrative Section 4 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-amber-600" />
          What Is the HOA Questionnaire &amp; Why Does It Matter for Condo Financing?
        </h2>
        <p>
          The HOA questionnaire (also called the condo questionnaire, project certification, or lender questionnaire) is the single most important
          document in any condo financing transaction. This document, completed by the HOA management company, provides every data point lenders
          need to determine project eligibility.
        </p>
        <p>
          A standard HOA questionnaire includes:
        </p>
        <ul>
          <li><strong>Total units and owner-occupancy breakdown:</strong> Number of owner-occupied units, renter-occupied units, and vacant units</li>
          <li><strong>Unit ownership concentration:</strong> Whether any single entity owns more than the allowable percentage of units</li>
          <li><strong>Litigation disclosure:</strong> Any pending, threatened, or settled lawsuits involving the HOA within the past several years</li>
          <li><strong>Financial statements:</strong> Current budget, reserve balance, delinquency rate, and any pending or recent special assessments</li>
          <li><strong>Insurance declarations:</strong> Master policy details including hazard, liability, fidelity, and flood coverage amounts</li>
          <li><strong>Commercial space information:</strong> Percentage of the project dedicated to non-residential uses</li>
          <li><strong>Management company details:</strong> Contact information, management agreement status, and professional licensing</li>
          <li><strong>Project phasing:</strong> Whether additional phases are planned and how they affect the existing project</li>
        </ul>
        <p>
          HOA questionnaire fees typically range from $150 to $500, paid by the buyer. The questionnaire usually takes 5-10 business days to
          complete. We recommend ordering it as early as possible in the transaction — ideally during the escrow period — because the information
          it contains determines which lenders can finance the purchase. A delay in receiving the questionnaire can delay the entire closing process.
        </p>

        {/* Data Hub: Insurance Requirements */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-10 shadow-sm">
          <div className="bg-blue-800 text-white p-4 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <h2 className="text-xl font-bold m-0 text-white">Condo Insurance Requirements for Mortgage Approval</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Insurance Type</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Who Carries It</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">What It Covers</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Lender Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Master / Hazard Policy</td>
                  <td className="p-4 text-gray-700">HOA</td>
                  <td className="p-4 text-gray-700">Building structure, common areas, shared systems</td>
                  <td className="p-4 text-gray-700">100% replacement cost coverage</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">General Liability</td>
                  <td className="p-4 text-gray-700">HOA</td>
                  <td className="p-4 text-gray-700">Bodily injury and property damage in common areas</td>
                  <td className="p-4 text-gray-700">$1M+ per occurrence</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Fidelity / Crime</td>
                  <td className="p-4 text-gray-700">HOA</td>
                  <td className="p-4 text-gray-700">Embezzlement, fraud by HOA board or management</td>
                  <td className="p-4 text-gray-700">3 months of HOA assessments + reserves</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Flood Insurance</td>
                  <td className="p-4 text-gray-700">HOA (if in flood zone)</td>
                  <td className="p-4 text-gray-700">Flood damage to building and common areas</td>
                  <td className="p-4 text-gray-700">Required in FEMA special flood hazard areas</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900">HO-6 Policy (Walls-In)</td>
                  <td className="p-4 text-gray-700">Individual unit owner</td>
                  <td className="p-4 text-gray-700">Interior finishes, personal property, personal liability</td>
                  <td className="p-4 text-gray-700">Dwelling coverage + personal liability (lender-specific minimums)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Conventional Review Types */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-xl p-6 md:p-8 my-10">
          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Full Review vs Limited Review: Conventional Condo Project Approval
          </h3>
          <p className="text-gray-700 mb-4">
            When a condo project is warrantable, conventional lenders use two levels of project review depending on loan characteristics:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">Limited Review</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>&bull; Streamlined approval with less documentation</li>
                <li>&bull; Available for loans with LTV of 90% or less</li>
                <li>&bull; Established projects with track record</li>
                <li>&bull; Does not require full HOA questionnaire</li>
                <li>&bull; Faster processing timeline</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">Full Review</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>&bull; Comprehensive analysis of all warrantability factors</li>
                <li>&bull; Required for LTV above 90%</li>
                <li>&bull; Required for new or recently converted projects</li>
                <li>&bull; Full HOA questionnaire and financial review</li>
                <li>&bull; More thorough but takes additional processing time</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Your wholesale broker determines which review level applies to your transaction and ensures the right documentation is ordered
            from the HOA from the start — avoiding delays caused by needing additional project documents mid-underwriting.
          </p>
        </div>

        {/* E-E-A-T Narrative Section 5: Wholesale Advantage */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-600" />
          Why Do Wholesale Brokers Solve Condo Financing Problems Banks Cannot?
        </h2>
        <p>
          The structural reality of condo financing is that a significant percentage of condo projects fail at least one warrantability
          criterion. According to the <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer">Consumer Financial
          Protection Bureau (CFPB)</a>, condominiums represent a meaningful share of housing inventory in urban and suburban markets — yet
          conventional condo financing availability depends entirely on project-level factors that individual buyers cannot control.
        </p>
        <p>
          This creates a common scenario: a qualified buyer with strong credit, stable income, and sufficient down payment is unable to
          obtain financing at their bank because the <em>project</em> fails warrantability — not the borrower. The bank has no alternative
          product to offer because their loan programs are limited to what they can sell to the GSEs.
        </p>
        <p>
          Wholesale brokers solve this problem three ways:
        </p>
        <ul>
          <li><strong>Non-warrantable condo lender access:</strong> We maintain relationships with 20+ lenders that specifically finance
          non-warrantable condos. Each has different guidelines — one may accept litigation-pending projects while another specializes in
          low-owner-occupancy buildings. We match the project&apos;s specific non-warrantable trigger to the lender most likely to approve it.</li>
          <li><strong>Condotel and hotel-condo expertise:</strong> Condotel financing is a niche that requires specialized lenders. These
          programs evaluate the unit&apos;s rental income potential, the hotel operator&apos;s financial health, and the property&apos;s tourism
          market. Banks do not offer these programs — they exist exclusively in the wholesale and private lending channels.</li>
          <li><strong>DSCR for investment condos:</strong> Investors purchasing condos in non-warrantable projects can use DSCR programs
          that qualify based on rental income rather than personal income. This is particularly valuable in California coastal markets where
          many desirable condo projects have low owner-occupancy ratios due to vacation rental demand.</li>
        </ul>
        <p>
          The bottom line: if a bank declines your condo purchase, it does not mean the condo is unfinanceable. It means the bank&apos;s
          product menu is too limited. A wholesale broker with access to 200+ lenders — including condo specialists — has the tools to
          find a solution.
        </p>

        {/* PAA Section */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">People Also Ask: Condo Mortgage Financing</h2>

        <div className="space-y-6 my-8">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a warrantable condo?</h3>
            <p className="text-gray-700">
              <strong>A warrantable condo meets Fannie Mae and Freddie Mac project standards for conventional mortgage financing.</strong> Requirements include 50%+ owner-occupancy, no single entity owning more than 20% of units, no pending litigation, commercial space under 35%, adequate HOA reserves, and proper insurance coverage. Warrantable status is a project-level determination — not a unit-level one.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I get a mortgage on a non-warrantable condo?</h3>
            <p className="text-gray-700">
              <strong>Yes, through non-QM lenders, portfolio lenders, and DSCR programs available via wholesale brokers.</strong> Conventional loans require warrantable status, but wholesale brokers access 200+ lenders including specialists that finance non-warrantable projects. Down payments typically start at 10-20% depending on the program and the specific non-warrantable triggers.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How much down payment do I need for a condo?</h3>
            <p className="text-gray-700">
              <strong>Warrantable condos require as little as 3-5% down with conventional financing or 3.5% with FHA.</strong> Non-warrantable condos through non-QM lenders typically require 10-20% down. Condotels require 25-30% down. DSCR investment condo programs require 25% down. VA-eligible buyers can purchase VA-approved condos with 0% down payment.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if the condo project has pending litigation?</h3>
            <p className="text-gray-700">
              <strong>Pending litigation makes the project non-warrantable and ineligible for conventional, FHA, or VA financing.</strong> Select non-QM and portfolio lenders through the wholesale channel will finance units in litigation-pending projects. They evaluate the nature of the lawsuit, insurance coverage for the claim, and the HOA&apos;s financial ability to manage the litigation.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Is a condo HOA questionnaire required for a mortgage?</h3>
            <p className="text-gray-700">
              <strong>Yes — every condo mortgage requires an HOA questionnaire for the lender to determine project eligibility.</strong> The questionnaire provides owner-occupancy ratios, litigation status, financial data, insurance details, and ownership concentration information. Limited review loans may accept abbreviated documentation, but most purchase transactions require the full questionnaire.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the difference between an HO-6 policy and a master policy?</h3>
            <p className="text-gray-700">
              <strong>The master policy is carried by the HOA and covers the building structure and common areas.</strong> The HO-6 policy is your individual unit owner policy covering interior finishes, personal property, and personal liability. Both policies are required for condo mortgage approval. Your lender verifies the master policy through the HOA questionnaire and requires you to obtain an HO-6 before closing.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use a DSCR loan to buy an investment condo?</h3>
            <p className="text-gray-700">
              <strong>Yes — DSCR loans are one of the most effective ways to finance investment condos, including non-warrantable projects.</strong> DSCR programs qualify based on the rental income the unit generates relative to the mortgage payment. Many DSCR lenders accept non-warrantable condos with 25% down and credit scores of 680+. No personal income verification is required on most DSCR programs.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does condo project approval take?</h3>
            <p className="text-gray-700">
              <strong>Condo project approval through conventional channels takes 3-7 business days once the HOA questionnaire is submitted.</strong> FHA project approval for projects not on the approved list can take 30-60 days. VA project approval takes 4-8 weeks. Your wholesale broker coordinates the approval process and identifies the fastest path based on which loan type you are using.
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
            <Link href="/blog/bridge-loans-vs-dscr-investment-2026" className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">DSCR Investment Property Loans</h4>
              <p className="text-xs text-gray-600">How DSCR loans work for investment properties including non-warrantable condos.</p>
              <span className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-2">Read more <ArrowRight className="w-3 h-3" /></span>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions: Condo Mortgage Financing</h2>
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
            Need Condo Financing? Warrantable or Non-Warrantable &mdash; We Have Solutions
          </h2>
          <p className="text-blue-100 text-lg mb-4">
            Condo financing requires project-level analysis that goes beyond standard mortgage qualification. Whether your condo is warrantable,
            non-warrantable, a condotel, or an investment property, wholesale access to 200+ lenders means there is a financing solution
            for your specific scenario. Most banks decline non-warrantable condos — we specialize in them.
          </p>
          <p className="text-blue-200 mb-6">
            Mo Abdel (NMLS #1426884) at Lumin Lending (NMLS #2716106) finances condos throughout California and Washington with conventional,
            FHA, VA, non-QM, portfolio, DSCR, and condotel loan programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg flex items-center gap-2 w-full sm:w-auto justify-center">
                <Phone className="w-4 h-4" />
                Get Condo Financing Help
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
            underwriting requirements. Condo project approval is determined by the lender based on project-specific factors and may vary
            between lenders. Terms and conditions apply. NMLS Consumer Access:{' '}
            <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-200 hover:text-white">
              nmlsconsumeraccess.org
            </a>
          </p>
        </div>
      </section>
    </article>
  );
}
