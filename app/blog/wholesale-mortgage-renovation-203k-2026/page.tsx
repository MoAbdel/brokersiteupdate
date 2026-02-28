import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Building2, TrendingUp, AlertCircle, Shield, Home, Calendar, Star, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LeadMagnetCTA } from '@/components/lead-magnets/LeadMagnetCTA';

export const metadata: Metadata = {
  title: 'Wholesale Mortgage Renovation Loans 2026: FHA 203k, HomeStyle & Rehab Programs | Mo Abdel',
  description: 'Compare FHA 203k Standard vs Limited, Fannie Mae HomeStyle, and Freddie Mac CHOICERenovation through a wholesale broker. Access 200+ lenders for renovation financing in CA and WA. NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/wholesale-mortgage-renovation-203k-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/wholesale-mortgage-renovation-203k-2026',
      'x-default': 'https://www.mothebroker.com/blog/wholesale-mortgage-renovation-203k-2026',
    },
  },
  openGraph: {
    title: 'Wholesale Mortgage Renovation Loans 2026: FHA 203k, HomeStyle & Rehab Programs',
    description: 'Compare FHA 203k Standard vs Limited, Fannie Mae HomeStyle, and Freddie Mac CHOICERenovation through a wholesale broker. Access 200+ lenders for renovation financing.',
    url: 'https://www.mothebroker.com/blog/wholesale-mortgage-renovation-203k-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    publishedTime: '2026-02-28',
    modifiedTime: '2026-02-28',
    authors: ['Mo Abdel'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale Mortgage Renovation Loans 2026: FHA 203k, HomeStyle & Rehab Programs',
    description: 'Compare FHA 203k, HomeStyle, and CHOICERenovation through a wholesale broker with 200+ lenders.',
  },
};

const faqData = [
  {
    question: 'What is an FHA 203k renovation loan?',
    answer: 'An FHA 203k loan combines a home purchase or refinance with renovation financing into a single mortgage. The Standard 203k covers structural work exceeding $35,000. The Limited 203k covers cosmetic repairs up to $35,000. Both are FHA-insured and available through wholesale lenders.',
  },
  {
    question: 'What is the difference between FHA 203k Standard and Limited?',
    answer: 'The Standard 203k allows structural changes, room additions, and repairs exceeding $35,000 but requires a HUD consultant. The Limited 203k caps non-structural cosmetic repairs at $35,000 and does not require a HUD consultant, making it simpler and faster to close.',
  },
  {
    question: 'How does a wholesale broker help with renovation loans?',
    answer: 'A wholesale broker shops your renovation loan across 200+ lenders to find the best pricing and most flexible guidelines. Renovation loans are specialty products and not all lenders offer them. Brokers identify which lenders approve your specific project type and contractor.',
  },
  {
    question: 'What credit score do I need for a renovation mortgage?',
    answer: 'FHA 203k loans typically require a minimum 580 credit score for maximum financing. Fannie Mae HomeStyle requires 620 minimum. Freddie Mac CHOICERenovation requires 620 minimum. Higher scores unlock better pricing through wholesale lender competition.',
  },
  {
    question: 'Can I use a renovation loan to buy a fixer-upper?',
    answer: 'Yes. All renovation loan programs allow you to purchase a property and finance the repairs in a single mortgage. The total loan amount is based on the projected after-renovation value, letting you buy homes that would not qualify for traditional financing.',
  },
  {
    question: 'What types of improvements does a 203k loan cover?',
    answer: 'The Standard 203k covers structural repairs, room additions, kitchen and bathroom remodels, roofing, plumbing, electrical, HVAC, foundation work, accessibility modifications, and energy efficiency upgrades. The Limited 203k covers non-structural cosmetic improvements only.',
  },
  {
    question: 'Do I need a licensed contractor for a renovation loan?',
    answer: 'Yes. All renovation loan programs require licensed, insured contractors. The Standard 203k also requires a HUD-approved consultant to oversee the project. Homeowners cannot perform their own work on renovation loans due to lender and insurer requirements.',
  },
  {
    question: 'How do renovation loan draw schedules work?',
    answer: 'Renovation funds are held in escrow and released to contractors in draws as work is completed. An inspector verifies each phase before disbursement. Standard 203k loans use a maximum of 5 draws. Limited 203k loans typically release funds in 1-2 draws after inspection.',
  },
  {
    question: 'What is the Fannie Mae HomeStyle renovation loan?',
    answer: 'The HomeStyle loan is a conventional renovation mortgage that finances purchase or refinance plus renovations in one loan. It allows luxury improvements like pools and landscaping that FHA 203k does not permit. No mortgage insurance is required with 20% equity.',
  },
  {
    question: 'Can I refinance into a renovation loan?',
    answer: 'Yes. All three major renovation programs — FHA 203k, HomeStyle, and CHOICERenovation — allow refinance transactions. You can refinance your existing mortgage and include renovation costs in the new loan amount, using your projected after-renovation value.',
  },
  {
    question: 'How long does a renovation loan take to close?',
    answer: 'Renovation loans typically close in 45-60 days, longer than standard mortgages due to contractor bids, HUD consultant involvement (for Standard 203k), and additional underwriting review. A wholesale broker can accelerate this by pre-matching your file to renovation-experienced lenders.',
  },
  {
    question: 'Does Mo Abdel originate renovation loans in California and Washington?',
    answer: 'Yes. Mo Abdel (NMLS #1426884) at Lumin Lending (NMLS #2716106) originates FHA 203k, HomeStyle, and CHOICERenovation loans in both California and Washington. Access to 200+ wholesale lenders ensures competitive pricing on renovation financing.',
  },
];

export default function WholesaleMortgageRenovation203k2026() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Wholesale Mortgage Renovation Loans 2026: FHA 203k, HomeStyle & Rehab Programs',
            author: {
              '@type': 'Person',
              name: 'Mo Abdel',
              jobTitle: 'Licensed Mortgage Broker',
              identifier: 'NMLS #1426884',
              url: 'https://www.mothebroker.com/about',
              knowsAbout: [
                'Renovation Mortgage Loans',
                'FHA 203k Financing',
                'Fannie Mae HomeStyle Renovation',
                'Wholesale Mortgage Origination',
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
            datePublished: '2026-02-28',
            dateModified: '2026-02-28',
            mainEntity: {
              '@type': 'WebPage',
              '@id': 'https://www.mothebroker.com/blog/wholesale-mortgage-renovation-203k-2026',
              significantLink: [
                'https://www.hud.gov/program_offices/housing/sfh/203k',
                'https://singlefamily.fanniemae.com/originating-underwriting/mortgage-products/homestyle-renovation',
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
              { '@type': 'ListItem', position: 3, name: 'Wholesale Renovation Loans 2026', item: 'https://www.mothebroker.com/blog/wholesale-mortgage-renovation-203k-2026' },
            ],
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
            <Calendar className="w-4 h-4" />
            <span>Updated February 28, 2026</span>
            <span className="mx-2">|</span>
            <Home className="w-4 h-4" />
            <span>Renovation Loan Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Wholesale Mortgage Renovation Loans 2026: FHA 203k, Conventional &amp; Rehab Programs
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl">
            Finance your home purchase and renovation in a single mortgage. Compare FHA 203k Standard, FHA 203k Limited,
            Fannie Mae HomeStyle, and Freddie Mac CHOICERenovation through a wholesale broker with access to 200+ lenders
            in California and Washington.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Get Your Renovation Quote
              </Button>
            </Link>
            <Link href="/calculator">
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
                &quot;Renovation loans are the single most underutilized financing tool in real estate. Buyers walk away from
                properties that need work because they assume they need cash for repairs after closing. The reality is that
                FHA 203k, Fannie Mae HomeStyle, and Freddie Mac CHOICERenovation programs let you roll purchase price and
                renovation costs into one mortgage — based on the <em>after-renovation</em> value. Through the wholesale channel,
                we access lenders who specialize in renovation financing, which matters because these are complex products that
                many retail banks simply do not offer.&quot;
              </p>
            </div>
          </div>

          {/* Semantic Triples + Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-blue-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-900">4 Programs</span>
              </div>
              <span className="text-sm text-gray-600">Major Renovation Loan Options</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Star className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-900">200+</span>
              </div>
              <span className="text-sm text-gray-600">Wholesale Lender Network</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Home className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-900">After-Reno Value</span>
              </div>
              <span className="text-sm text-gray-600">Loan Amount Based On</span>
            </div>
          </div>

          {/* First Table: Quick Program Comparison */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-blue-100/60">
                  <th className="p-3 border-b border-blue-200 font-semibold text-gray-900">Feature</th>
                  <th className="p-3 border-b border-blue-200 font-semibold text-gray-900">FHA 203k Standard</th>
                  <th className="p-3 border-b border-blue-200 font-semibold text-gray-900">FHA 203k Limited</th>
                  <th className="p-3 border-b border-blue-200 font-semibold text-gray-900">HomeStyle</th>
                  <th className="p-3 border-b border-blue-200 font-semibold text-gray-900">CHOICERenovation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-900">Min. Credit Score</td>
                  <td className="p-3 text-gray-700">580</td>
                  <td className="p-3 text-gray-700">580</td>
                  <td className="p-3 text-gray-700">620</td>
                  <td className="p-3 text-gray-700">620</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-3 font-medium text-gray-900">Structural Work</td>
                  <td className="p-3 text-green-700 font-semibold">Yes</td>
                  <td className="p-3 text-red-600">No</td>
                  <td className="p-3 text-green-700 font-semibold">Yes</td>
                  <td className="p-3 text-green-700 font-semibold">Yes</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-900">Max Renovation $</td>
                  <td className="p-3 text-gray-700">No cap (within loan limits)</td>
                  <td className="p-3 text-gray-700">$35,000</td>
                  <td className="p-3 text-gray-700">Up to 75% of after-reno value</td>
                  <td className="p-3 text-gray-700">Up to 75% of after-reno value</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-3 font-medium text-gray-900">HUD Consultant</td>
                  <td className="p-3 text-amber-700 font-semibold">Required</td>
                  <td className="p-3 text-green-700">Not required</td>
                  <td className="p-3 text-green-700">Not required</td>
                  <td className="p-3 text-green-700">Not required</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-900">Mortgage Insurance</td>
                  <td className="p-3 text-gray-700">Required (FHA MIP)</td>
                  <td className="p-3 text-gray-700">Required (FHA MIP)</td>
                  <td className="p-3 text-gray-700">Required below 20% equity</td>
                  <td className="p-3 text-gray-700">Required below 20% equity</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-3 font-medium text-gray-900">Luxury Upgrades</td>
                  <td className="p-3 text-red-600">No (health/safety focus)</td>
                  <td className="p-3 text-red-600">No</td>
                  <td className="p-3 text-green-700 font-semibold">Yes (pools, landscaping)</td>
                  <td className="p-3 text-green-700 font-semibold">Yes (pools, landscaping)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-900">Property Types</td>
                  <td className="p-3 text-gray-700">1-4 unit primary</td>
                  <td className="p-3 text-gray-700">1-4 unit primary</td>
                  <td className="p-3 text-gray-700">Primary, second home, investment</td>
                  <td className="p-3 text-gray-700">Primary, second home, investment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bing Power Block */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-10 shadow-sm">
          <div className="bg-slate-800 text-white p-4 flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            <h2 className="text-xl font-bold m-0 text-white">Renovation Loan Programs Compared: Qualification, Limits &amp; Eligible Improvements</h2>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">FHA 203k Standard: Full Structural Renovation Financing</h3>
            <p className="text-gray-700 mb-4">
              The FHA 203k Standard loan is the most comprehensive renovation financing option available to homebuyers. It finances
              structural modifications, room additions, complete gut renovations, and major systems replacements. HUD designed this
              program specifically to revitalize housing stock by making it financially feasible to purchase and rehabilitate
              properties that conventional lenders reject.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Standard 203k Eligible Improvements:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Structural alterations and room additions</span></div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Foundation repair and replacement</span></div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Complete HVAC system installation</span></div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Plumbing and electrical overhaul</span></div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Roofing and siding replacement</span></div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Accessibility modifications (ADA compliance)</span></div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Lead paint abatement and mold remediation</span></div>
                <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Energy efficiency upgrades (solar, insulation)</span></div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">FHA 203k Limited: Streamlined Cosmetic Renovation</h3>
            <p className="text-gray-700 mb-4">
              The Limited 203k (formerly called the Streamline 203k) covers non-structural cosmetic repairs and improvements
              up to $35,000. It eliminates the HUD consultant requirement, simplifies paperwork, and closes faster than the
              Standard version. This program is ideal for properties that are fundamentally sound but need cosmetic updates —
              flooring, paint, kitchen countertops, bathroom fixtures, appliance replacement, and minor repairs.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Fannie Mae HomeStyle Renovation</h3>
            <p className="text-gray-700 mb-4">
              The HomeStyle loan is the conventional alternative to FHA 203k. It permits structural and non-structural work,
              including luxury improvements that FHA prohibits — swimming pools, outdoor kitchens, detached structures, and
              extensive landscaping. HomeStyle also allows investment property and second home transactions, which FHA 203k
              restricts to primary residences. With 20% equity (based on after-renovation value), HomeStyle eliminates
              mortgage insurance entirely.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Freddie Mac CHOICERenovation</h3>
            <p className="text-gray-700 mb-4">
              CHOICERenovation mirrors HomeStyle in many ways but adds a unique feature: <strong>resilience improvements</strong>.
              Freddie Mac specifically designed this program to finance disaster-resistant upgrades — impact windows, reinforced
              roofing, seismic retrofitting, fire-resistant materials, and flood mitigation systems. In California, where wildfire
              and earthquake risk is significant, and in Washington, where seismic preparedness matters, CHOICERenovation
              provides dedicated financing for these protective upgrades.
            </p>
          </div>

          {/* Detailed Requirements Table */}
          <div className="overflow-x-auto border-t border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Requirement</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">FHA 203k (Both)</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">HomeStyle</th>
                  <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">CHOICERenovation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Min. Down Payment</td>
                  <td className="p-4 text-gray-700">3.5% of total loan</td>
                  <td className="p-4 text-gray-700">3-5% (varies by lender)</td>
                  <td className="p-4 text-gray-700">3-5% (varies by lender)</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Max DTI Ratio</td>
                  <td className="p-4 text-gray-700">Up to 56.99% (with compensating factors)</td>
                  <td className="p-4 text-gray-700">Up to 50% (with AUS approval)</td>
                  <td className="p-4 text-gray-700">Up to 50% (with AUS approval)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Renovation Timeline</td>
                  <td className="p-4 text-gray-700">6 months (Standard), 3-4 months (Limited)</td>
                  <td className="p-4 text-gray-700">12 months max</td>
                  <td className="p-4 text-gray-700">12 months max</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-gray-900">Licensed Contractor</td>
                  <td className="p-4 text-gray-700">Required (licensed &amp; insured)</td>
                  <td className="p-4 text-gray-700">Required (licensed &amp; insured)</td>
                  <td className="p-4 text-gray-700">Required (licensed &amp; insured)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-gray-900">Self-Help (DIY)</td>
                  <td className="p-4 text-red-600">Not permitted</td>
                  <td className="p-4 text-red-600">Not permitted</td>
                  <td className="p-4 text-red-600">Not permitted</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900">Contingency Reserve</td>
                  <td className="p-4 text-gray-700">10-20% of renovation cost</td>
                  <td className="p-4 text-gray-700">Varies by lender</td>
                  <td className="p-4 text-gray-700">Varies by lender</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Numbered List: Steps to Getting a Renovation Loan */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 md:p-8 mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            8 Steps to Getting a Wholesale Renovation Mortgage
          </h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <span className="text-gray-700"><strong>Contact a wholesale mortgage broker.</strong> Renovation loans are specialty products. A broker with 200+ lenders identifies which lenders offer renovation programs with the best pricing for your project scope.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <span className="text-gray-700"><strong>Get pre-approved before property shopping.</strong> Renovation pre-approval establishes your total budget — purchase price plus renovation costs — so you know exactly what properties to target.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <span className="text-gray-700"><strong>Identify the property and scope of work.</strong> Work with your real estate agent to find a property where renovation adds value. Determine whether the project is cosmetic (Limited 203k) or structural (Standard 203k, HomeStyle, CHOICERenovation).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <span className="text-gray-700"><strong>Obtain contractor bids.</strong> Get detailed, itemized bids from licensed and insured contractors. Most lenders require at least two bids. The bid must break down costs by trade (plumbing, electrical, carpentry, etc.).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
              <span className="text-gray-700"><strong>Engage a HUD consultant (Standard 203k only).</strong> The consultant reviews the property, validates the scope of work, creates the work write-up document, and oversees inspections during construction.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
              <span className="text-gray-700"><strong>Submit your complete application.</strong> Your broker packages your financial documents, contractor bids, work write-up, and property information for submission to the selected wholesale lender.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
              <span className="text-gray-700"><strong>Complete appraisal and underwriting.</strong> The appraiser evaluates both the current value and the projected after-renovation value. The underwriter reviews the full file including the renovation plan.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">8</span>
              <span className="text-gray-700"><strong>Close and begin construction.</strong> Renovation funds are held in escrow and released to contractors in scheduled draws as work is completed and inspected. Your broker coordinates the entire draw schedule.</span>
            </li>
          </ol>
        </div>

        {/* Google E-E-A-T Narrative Section 1 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          Why Wholesale Brokers Outperform Retail Banks for Renovation Loans
        </h2>
        <p>
          Renovation mortgages are the most complex products in residential lending. They require specialized underwriting
          expertise, contractor coordination, escrow management, and draw schedule oversight. Not every lender offers these
          programs, and among those that do, guidelines vary significantly. This is where the wholesale broker advantage
          becomes most pronounced.
        </p>
        <p>
          When Mo Abdel originates a renovation loan through Lumin Lending, the process starts by identifying which
          wholesale lenders in our 200+ lender network actively write renovation products. Some lenders specialize in
          FHA 203k with dedicated renovation underwriting teams. Others focus on conventional HomeStyle loans for
          higher-value properties. By matching the borrower&apos;s profile and project scope to the right lender,
          we eliminate the most common source of renovation loan failures: submitting to a lender whose renovation
          guidelines do not accommodate the specific project.
        </p>
        <p>
          A retail bank offers exactly one set of renovation guidelines. If your project does not fit their parameters —
          whether due to property condition, contractor requirements, draw schedule structure, or renovation dollar
          amount — you start over at a different institution. A wholesale broker identifies the right lender on the
          first attempt, saving weeks or months of wasted effort.
        </p>

        {/* E-E-A-T Marker */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 not-prose">
          <p className="text-sm text-gray-700">
            <strong>Industry Expertise:</strong> Mo Abdel (NMLS #1426884) has processed renovation loans across
            multiple lenders in both California and Washington, providing direct experience with the underwriting
            requirements and draw schedule procedures that differ between lenders.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <Home className="w-6 h-6 text-blue-600" />
          How Renovation Loan Draw Schedules Work
        </h2>
        <p>
          Unlike a standard mortgage where all funds disburse at closing, renovation loans hold the improvement portion
          in an escrow account and release funds to contractors in phases called <strong>draws</strong>. This protects the
          lender and the borrower — contractors receive payment only after work is verified complete by an independent
          inspector.
        </p>

        {/* Draw Schedule Table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-50">
                <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Draw Phase</th>
                <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Work Completed</th>
                <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Typical % Released</th>
                <th className="p-4 border-b border-gray-200 font-semibold text-gray-900">Inspection Required</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-medium text-blue-700">Draw 1</td>
                <td className="p-4 text-gray-700">Demolition, framing, rough plumbing/electrical</td>
                <td className="p-4 text-gray-700">20-30%</td>
                <td className="p-4 text-green-700 font-semibold">Yes</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <td className="p-4 font-medium text-blue-700">Draw 2</td>
                <td className="p-4 text-gray-700">Drywall, windows, insulation, HVAC rough-in</td>
                <td className="p-4 text-gray-700">25-30%</td>
                <td className="p-4 text-green-700 font-semibold">Yes</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-medium text-blue-700">Draw 3</td>
                <td className="p-4 text-gray-700">Cabinets, flooring, fixtures, paint</td>
                <td className="p-4 text-gray-700">25-30%</td>
                <td className="p-4 text-green-700 font-semibold">Yes</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <td className="p-4 font-medium text-blue-700">Draw 4</td>
                <td className="p-4 text-gray-700">Final trim, appliances, landscaping, cleanup</td>
                <td className="p-4 text-gray-700">15-20%</td>
                <td className="p-4 text-green-700 font-semibold">Yes</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-green-700">Final Release</td>
                <td className="p-4 text-gray-700">All work complete, final inspection passed</td>
                <td className="p-4 text-gray-700">Remaining balance</td>
                <td className="p-4 text-green-700 font-semibold">Yes (final + HUD if applicable)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The draw schedule structure varies by lender. Some wholesale lenders allow up to 5 draws on Standard 203k
          loans, while others limit draws to 3 or 4. Limited 203k loans typically disburse in 1-2 draws after inspection.
          HomeStyle and CHOICERenovation draws are negotiated between the lender, broker, and contractor. Your wholesale
          broker negotiates the draw structure that best matches your renovation timeline.
        </p>

        {/* E-E-A-T Marker */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 not-prose">
          <p className="text-sm text-gray-700">
            <strong>Broker Insight:</strong> According to HUD guidelines, the FHA 203k Standard program requires a
            10-20% contingency reserve built into the loan amount to cover unexpected costs during renovation. This
            reserve is returned to the borrower or applied to principal if unused.
            Source: <a href="https://www.hud.gov/program_offices/housing/sfh/203k" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">HUD.gov 203k Program</a>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-blue-600" />
          Contractor Requirements for Renovation Mortgages
        </h2>
        <p>
          Every renovation loan program requires contractors who meet specific lender criteria. This is non-negotiable —
          DIY work is not permitted on any renovation mortgage. Understanding contractor requirements before beginning
          the process prevents delays and ensures your project qualifies.
        </p>

        {/* Numbered List: Contractor Requirements */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">6 Mandatory Contractor Requirements for Renovation Loans</h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-slate-700 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <span className="text-gray-700"><strong>Active state contractor license.</strong> California requires a CSLB license; Washington requires an L&amp;I contractor registration. The license must be current and in good standing with no disciplinary actions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-slate-700 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <span className="text-gray-700"><strong>General liability insurance.</strong> Most lenders require minimum $1 million general liability coverage. Some lenders require the borrower and lender be named as additional insureds on the contractor&apos;s policy.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-slate-700 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <span className="text-gray-700"><strong>Workers&apos; compensation insurance.</strong> Required if the contractor has employees. Sole proprietors may be exempt in some states, but most renovation lenders require it regardless.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-slate-700 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <span className="text-gray-700"><strong>Itemized bid with cost breakdown.</strong> The contractor must provide a detailed bid breaking down costs by trade (labor and materials) for each phase of work. Lump-sum bids are not accepted.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-slate-700 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
              <span className="text-gray-700"><strong>No identity-of-interest.</strong> The contractor cannot be the borrower, a family member of the borrower, or have any financial relationship with the borrower beyond the renovation contract.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-slate-700 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
              <span className="text-gray-700"><strong>References and renovation loan experience.</strong> Lenders prefer contractors who have completed renovation loan projects previously, as they understand draw schedules, inspection requirements, and documentation standards.</span>
            </li>
          </ol>
        </div>

        <p>
          Mo Abdel and the Lumin Lending team maintain relationships with contractors in California and Washington who
          have successfully completed renovation loan projects. While we do not endorse specific contractors, we can
          connect borrowers with professionals experienced in the renovation loan draw process — a significant
          advantage that eliminates the learning curve many first-time renovation borrowers face.
        </p>

        {/* E-E-A-T Marker */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 not-prose">
          <p className="text-sm text-gray-700">
            <strong>Regulatory Note:</strong> Fannie Mae HomeStyle renovation guidelines require contractors to
            complete all work within 12 months of loan closing. FHA 203k Standard allows 6 months with a possible
            6-month extension. Your broker ensures the renovation timeline matches program requirements.
            Source: <a href="https://singlefamily.fanniemae.com/originating-underwriting/mortgage-products/homestyle-renovation" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">FannieMae.com HomeStyle</a>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-blue-600" />
          How Renovation Loan Amounts Are Calculated
        </h2>
        <p>
          Renovation loans are unique because the loan amount is based on the <strong>lesser of</strong> the purchase
          price plus renovation costs or the after-renovation appraised value. This means a qualified appraiser must
          estimate what the property will be worth after all planned improvements are completed — an &quot;as-completed&quot;
          or &quot;subject to&quot; appraisal.
        </p>
        <p>
          For example, if a property is priced at $500,000 with $100,000 in planned renovations, the total project cost
          is $600,000. If the appraiser determines the after-renovation value is $650,000, the loan amount is based on
          $600,000 (the lesser value). The borrower&apos;s down payment is calculated on this total project cost.
        </p>
        <p>
          This structure benefits buyers because it allows them to finance renovations that increase the property&apos;s
          value beyond the purchase price. The wholesale broker advantage here is matching the project to a lender
          whose appraiser panel has experience with renovation valuations in your specific market. An appraiser
          unfamiliar with renovation projects may undervalue the after-completion projection, reducing your available
          financing.
        </p>

        {/* Data Hub Section */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-10 shadow-sm mt-10">
          <div className="bg-blue-800 text-white p-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <h2 className="text-xl font-bold m-0 text-white">Renovation Loan Data Hub: Key Metrics for 2026</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-900">$35,000</div>
                <div className="text-sm text-gray-600">FHA 203k Limited Max</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-900">$1,209,750</div>
                <div className="text-sm text-gray-600">2025 FHA High-Cost Limit (OC)*</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-900">75%</div>
                <div className="text-sm text-gray-600">Max Reno % (HomeStyle/CHOICE)</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-900">45-60 Days</div>
                <div className="text-sm text-gray-600">Typical Close Timeline</div>
              </div>
            </div>
            <p className="text-xs text-gray-500">*Conforming loan limits are updated annually by FHFA. Check current limits at the time of application. Data for illustration only.</p>

            {/* Which Program Is Right For You */}
            <h3 className="text-lg font-bold text-gray-900 mb-3 mt-6">Which Renovation Loan Program Fits Your Project?</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-3 border-b border-gray-200 font-semibold text-gray-900">If Your Project Involves...</th>
                    <th className="p-3 border-b border-gray-200 font-semibold text-gray-900">Best Program</th>
                    <th className="p-3 border-b border-gray-200 font-semibold text-gray-900">Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">Cosmetic updates under $35,000</td>
                    <td className="p-3 font-semibold text-blue-700">FHA 203k Limited</td>
                    <td className="p-3 text-gray-700">Simplest process, no HUD consultant, fastest closing</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-3 text-gray-700">Major structural renovation, lower credit</td>
                    <td className="p-3 font-semibold text-blue-700">FHA 203k Standard</td>
                    <td className="p-3 text-gray-700">580 minimum score, higher DTI allowance, no renovation cap</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">Luxury upgrades (pool, outdoor kitchen)</td>
                    <td className="p-3 font-semibold text-blue-700">HomeStyle / CHOICERenovation</td>
                    <td className="p-3 text-gray-700">Luxury improvements permitted, no MIP with 20% equity</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-3 text-gray-700">Investment property renovation</td>
                    <td className="p-3 font-semibold text-blue-700">HomeStyle / CHOICERenovation</td>
                    <td className="p-3 text-gray-700">FHA 203k restricted to primary residences only</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">Disaster resilience (fire, earthquake, flood)</td>
                    <td className="p-3 font-semibold text-blue-700">CHOICERenovation</td>
                    <td className="p-3 text-gray-700">Specific resilience improvement category built into program</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700">Energy efficiency overhaul (solar, insulation)</td>
                    <td className="p-3 font-semibold text-blue-700">FHA 203k Standard or HomeStyle</td>
                    <td className="p-3 text-gray-700">Both cover energy improvements; FHA adds Energy Efficient Mortgage option</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* PAA Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 mb-10 not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-blue-600" />
            People Also Ask: Wholesale Renovation Mortgage Loans
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5 bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I live in the house during a 203k renovation?</h3>
              <p className="text-gray-700">
                <strong>Yes for Limited 203k projects where the home remains habitable.</strong> Standard 203k structural renovations may require temporary relocation. Up to 6 months of mortgage payments can be financed into the Standard 203k loan to cover payments during construction.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if renovation costs exceed the original bid?</h3>
              <p className="text-gray-700">
                <strong>The contingency reserve covers unexpected cost overruns.</strong> Standard 203k loans include a 10-20% contingency built into the loan amount. If costs still exceed the reserve, the borrower must cover the difference out of pocket or reduce the project scope.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How does the appraisal work for a renovation loan?</h3>
              <p className="text-gray-700">
                <strong>The appraiser estimates both current value and after-renovation value.</strong> They review the contractor&apos;s scope of work, comparable renovated properties, and project feasibility. The loan amount is based on the lesser of purchase price plus renovation costs or after-renovation value.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are renovation loans available for condos?</h3>
              <p className="text-gray-700">
                <strong>Yes, with limitations.</strong> FHA 203k and conventional renovation loans are available for condos in FHA-approved or Fannie Mae/Freddie Mac-warrantable projects. Renovations must be limited to the interior unit and cannot affect structural or common elements.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change contractors during a renovation loan project?</h3>
              <p className="text-gray-700">
                <strong>Yes, but it requires lender approval and additional documentation.</strong> The new contractor must meet all lender requirements (license, insurance, bid). A change order is processed, and the remaining draw schedule is adjusted. Your broker coordinates this with the lender.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is a renovation loan better than a HELOC for home improvements?</h3>
              <p className="text-gray-700">
                <strong>It depends on whether you are buying or already own the property.</strong> Renovation loans combine purchase and renovation into one mortgage. A HELOC works for existing homeowners who already have equity. For purchases, renovation loans are typically the only option.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5 bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the HUD consultant role in a Standard 203k loan?</h3>
              <p className="text-gray-700">
                <strong>The HUD consultant is a required third party who oversees the entire renovation process.</strong> They inspect the property, prepare the work write-up, review contractor bids for reasonableness, conduct progress inspections for each draw, and issue the final completion certificate.
              </p>
            </div>
          </div>
        </div>

        {/* Lead Magnet CTA */}
        <div className="my-10">
          <LeadMagnetCTA
            title="Download the Renovation Loan Comparison Worksheet"
            description="Compare FHA 203k, HomeStyle, and CHOICERenovation side-by-side with your specific project details."
            href="/resources/document-checklist"
            badge="Free resource"
            ctaText="Get the worksheet"
          />
        </div>

        {/* Cross-Links Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-10 not-prose">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-blue-600" />
            Related Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/blog/home-equity-for-renovations-2026" className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Home Equity for Renovations</h4>
              <p className="text-xs text-gray-600">Using HELOC, HELOAN, or cash-out refinance for home improvements.</p>
              <span className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-2">Read more <ArrowRight className="w-3 h-3" /></span>
            </Link>
            <Link href="/loan-programs/fha-loans" className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">FHA Loan Programs</h4>
              <p className="text-xs text-gray-600">Complete guide to FHA financing options and qualification requirements.</p>
              <span className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-2">Read more <ArrowRight className="w-3 h-3" /></span>
            </Link>
            <Link href="/loan-programs/conventional-loans" className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Conventional Loan Programs</h4>
              <p className="text-xs text-gray-600">Conventional financing including HomeStyle renovation options.</p>
              <span className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-2">Read more <ArrowRight className="w-3 h-3" /></span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Link href="/blog/wholesale-mortgage-broker-california-2026" className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">Wholesale Mortgage Broker California</h4>
              <p className="text-xs text-gray-600">How wholesale brokers access better pricing and more loan options.</p>
              <span className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-2">Read more <ArrowRight className="w-3 h-3" /></span>
            </Link>
            <Link href="/blog/first-time-homebuyer-guide-orange-county-2026" className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">First-Time Homebuyer Guide</h4>
              <p className="text-xs text-gray-600">Complete guide for first-time buyers including renovation financing options.</p>
              <span className="text-blue-600 text-xs font-medium flex items-center gap-1 mt-2">Read more <ArrowRight className="w-3 h-3" /></span>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions: Wholesale Renovation Mortgage Loans</h2>
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
            Ready to Finance Your Renovation with Wholesale Pricing?
          </h2>
          <p className="text-blue-100 text-lg mb-4">
            Renovation loans transform properties that need work into dream homes — and the wholesale channel gives you
            access to more renovation lenders, better pricing, and experienced guidance through the draw process. Whether
            you need an FHA 203k for a full structural rehabilitation, a HomeStyle loan for a luxury remodel, or a
            CHOICERenovation loan for resilience upgrades, Mo Abdel matches your project to the right wholesale lender
            from a network of 200+ institutions.
          </p>
          <p className="text-blue-200 mb-6">
            Mo Abdel (NMLS #1426884) at Lumin Lending (NMLS #2716106) originates renovation mortgages throughout
            California and Washington. Every renovation loan program — FHA 203k Standard, FHA 203k Limited, Fannie Mae
            HomeStyle, and Freddie Mac CHOICERenovation — is available through the wholesale channel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg flex items-center gap-2 w-full sm:w-auto justify-center">
                <Phone className="w-4 h-4" />
                Start Your Renovation Loan
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
            Licensed in California (DRE #02291443) and Washington. Equal Housing Lender. This content is for educational
            and informational purposes only and is not a commitment to lend. Not all borrowers will qualify. Loan approval
            is subject to credit, income, property, and underwriting requirements. Terms and conditions apply. Renovation
            loan programs have specific property condition, contractor, and project scope requirements that must be met.
            Program availability and terms are subject to change. NMLS Consumer Access:{' '}
            <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-200 hover:text-white">
              nmlsconsumeraccess.org
            </a>
          </p>
        </div>
      </section>
    </article>
  );
}
