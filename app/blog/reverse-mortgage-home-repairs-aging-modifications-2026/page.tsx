import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Shield, BookOpen, Star, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LeadMagnetCTA } from '@/components/lead-magnets/LeadMagnetCTA';

export const metadata: Metadata = {
  title: 'Reverse Mortgage for Home Repairs & Aging-in-Place Modifications [2026] | Mo Abdel',
  description: 'Use HECM reverse mortgage proceeds to fund home repairs and aging-in-place modifications: grab bars, walk-in tubs, stair lifts, widened doorways, first-floor master suites, and ADU additions. No monthly mortgage payments. NMLS #1426884.',
  keywords: [
    'reverse mortgage home repairs',
    'reverse mortgage aging in place modifications',
    'HECM home improvement',
    'reverse mortgage bathroom remodel',
    'reverse mortgage wheelchair ramp',
    'aging in place renovations funding',
    'reverse mortgage stair lift',
    'HECM line of credit home repairs',
    'senior home modifications financing',
    'reverse mortgage ADU addition',
  ],
  openGraph: {
    title: 'Reverse Mortgage for Home Repairs & Aging-in-Place Modifications [2026]',
    description: 'Fund grab bars, walk-in tubs, stair lifts, widened doorways, first-floor master suites, and ADU additions with HECM proceeds. No monthly mortgage payments required.',
    url: 'https://www.mothebroker.com/blog/reverse-mortgage-home-repairs-aging-modifications-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-20T00:00:00Z',
    modifiedTime: '2026-02-20T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/reverse-mortgage-home-repairs-aging-modifications-2026',
  },
};

const faqData = [
  {
    question: "Can I use a reverse mortgage to pay for home repairs?",
    answer: "Yes. HECM reverse mortgage proceeds can be used for any purpose, including home repairs, renovations, and aging-in-place modifications such as grab bars, walk-in tubs, stair lifts, widened doorways, wheelchair ramps, and first-floor master suite conversions. There are no restrictions on how you spend funds once disbursed. The HECM line of credit option is especially popular for repairs because it allows you to draw funds as needs arise over time, and unused funds grow larger each year."
  },
  {
    question: "What aging-in-place modifications can I fund with a HECM reverse mortgage?",
    answer: "HECM proceeds can fund virtually any modification that makes your home safer and more accessible: bathroom grab bars and safety rails, walk-in tubs and curbless showers, stair lifts or home elevators, widened doorways and hallways for wheelchair access, wheelchair ramps, first-floor master bedroom and bathroom conversions, smart home technology for voice-controlled lighting and thermostats, non-slip flooring throughout, lever-style door handles, raised toilets, and even Accessory Dwelling Units (ADUs) for live-in caregivers."
  },
  {
    question: "How much can I borrow with a reverse mortgage for home improvements?",
    answer: "The amount you can access depends on your age, home value, and current interest rates through the Principal Limit Factor. Generally, older borrowers with higher-value homes access a greater percentage of their equity. For example, a 72-year-old with a home appraised at $800,000 and no existing mortgage may access $350,000-$450,000 or more. Any existing mortgage balance must be paid off from HECM proceeds first, so the less you owe, the more funds are available for modifications."
  },
  {
    question: "Is a HECM line of credit or lump sum better for home repairs?",
    answer: "For most seniors planning home repairs and modifications, the HECM line of credit is the stronger option. The line of credit includes a growth feature that increases your available funds over time, even if your home value stays flat or declines. This is ideal for phased modification projects where you complete bathroom accessibility this year and kitchen modifications next year. The lump sum is appropriate only for a single large project like an ADU addition. A modified tenure plan combining monthly payments with a credit line offers another flexible option."
  },
  {
    question: "Do I need to get approval for specific home repairs from my HECM lender?",
    answer: "No. Once your HECM closes and funds are disbursed, you are free to use the money for any purpose without lender approval. You do not need to submit contractor bids, renovation plans, or receipts to your loan servicer. The only exception is the HECM repair set-aside, which applies when the appraiser identifies mandatory repairs needed to meet FHA minimum property standards during underwriting. Those specific repairs must be completed within a set timeframe after closing."
  },
  {
    question: "What is a HECM repair set-aside?",
    answer: "A HECM repair set-aside is an amount held in escrow from your loan proceeds to cover mandatory repairs identified by the FHA appraiser during the loan process. Common required repairs include roof replacement, electrical updates, plumbing fixes, and structural issues that do not meet FHA minimum property standards. The funds are released to you or your contractor after repairs are completed and verified. This allows you to fix essential issues without paying out of pocket before closing."
  },
  {
    question: "Can I build an ADU or in-law suite with reverse mortgage funds?",
    answer: "Yes. HECM proceeds can be used to finance an Accessory Dwelling Unit (ADU) or in-law suite on your property for a family caregiver or professional aide. ADU construction in California typically costs $150,000-$350,000 depending on size, location, and finishes. California ADU legislation (AB 1033, SB 9) has streamlined the permitting process. The HECM line of credit or lump sum can cover part or all of this expense, allowing you to age in place with on-site support."
  },
  {
    question: "How does a reverse mortgage compare to a HELOC for senior home repairs?",
    answer: "For seniors 62 and older, a HECM reverse mortgage offers significant advantages over a HELOC for home repairs. A HECM requires no monthly payments, cannot be frozen or reduced by the lender, and includes the line of credit growth feature. HELOCs require monthly interest payments that strain fixed incomes, can be frozen if home values decline, and must be repaid in full when the draw period ends. HECM proceeds are also generally not considered taxable income (consult your tax advisor), and FHA non-recourse protection ensures you never owe more than the home is worth."
  },
  {
    question: "What are California Title 24 accessibility requirements for home modifications?",
    answer: "California Title 24 Building Standards Code includes accessibility requirements that apply when you remodel certain areas of your home. Key provisions include minimum doorway widths of 32 inches clear, grab bar reinforcement in bathroom walls, accessible routes with maximum slopes of 1:12 for ramps, lever-style hardware on doors and fixtures, and specific bathroom fixture clearances for wheelchair access. When using HECM funds for modifications, hiring a contractor familiar with Title 24 ensures your renovations meet code and maximize usability."
  },
  {
    question: "Will home modifications increase my property taxes in California?",
    answer: "Most interior aging-in-place modifications do not trigger property tax reassessment under Proposition 13. Accessibility improvements such as grab bars, walk-in tubs, widened doorways, ramps, and stair lifts are generally not considered new construction that triggers reassessment. However, building an ADU or adding significant square footage may result in partial reassessment on the newly constructed area only. Your existing home value assessment remains protected by Prop 13."
  },
  {
    question: "What happens if I pass away with a reverse mortgage on my home?",
    answer: "When the last surviving borrower or eligible non-borrowing spouse passes away, the HECM loan becomes due. Heirs inherit the home and have several options: sell the home and repay the loan balance from the proceeds (keeping any remaining equity), refinance into a traditional mortgage to keep the home, or pay off the balance with other funds. FHA non-recourse protection guarantees that heirs never owe more than 95% of the current appraised value, even if the loan balance exceeds the home value."
  },
  {
    question: "Are reverse mortgage proceeds taxable when used for home repairs?",
    answer: "Reverse mortgage proceeds are generally not considered taxable income because they are loan advances, not earnings (consult your tax advisor for your specific situation). Additionally, home modifications that are medically necessary may qualify as deductible medical expenses under certain IRS guidelines. Home improvements that increase energy efficiency may also qualify for federal or state tax credits. Always consult a qualified tax professional for guidance on deductibility."
  },
];

export default function ReverseMortgageHomeRepairsAgingModifications2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Reverse Mortgage for Home Repairs & Aging-in-Place Modifications [2026]",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["Reverse Mortgages", "HECM Home Improvements", "Aging in Place Modifications", "Senior Home Repairs Financing", "California Mortgage Lending"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "identifier": "NMLS #2716106",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-02-20",
            "dateModified": "2026-02-20",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/reverse-mortgage-home-repairs-aging-modifications-2026",
              "significantLink": [
                "https://www.hud.gov/program_offices/housing/sfh/hecm",
                "https://www.aarp.org/livable-communities/housing/",
                "https://www.consumerfinance.gov/"
              ]
            },
            "copyrightHolder": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "url": "https://www.mothebroker.com"
            },
            "copyrightYear": "2026"
          })
        }}
      />

      {/* Schema Markup - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Schema Markup - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.mothebroker.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.mothebroker.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Reverse Mortgages",
                "item": "https://www.mothebroker.com/reverse-mortgages"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Reverse Mortgage for Home Repairs & Aging-in-Place Modifications",
                "item": "https://www.mothebroker.com/blog/reverse-mortgage-home-repairs-aging-modifications-2026"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white py-16 lg:py-24">

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-8 not-prose">
            <p className="text-sm text-amber-900">
              <strong>Important Notice:</strong> This material is not provided by, nor was it approved by, the Department of Housing &amp; Urban Development (HUD) or by the Federal Housing Administration (FHA). This is not a government agency publication.
            </p>
          </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 rounded-full px-4 py-1.5 mb-6 border border-emerald-500/30">
              <Wrench className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">HECM Home Repairs &amp; Modifications</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reverse Mortgage for Home Repairs &amp; Aging-in-Place Modifications [2026]
            </h1>

            <p className="text-xl md:text-2xl text-emerald-200 mb-8 leading-relaxed">
              According to Mo Abdel, NMLS #1426884, HECM reverse mortgage proceeds fund grab bars, walk-in tubs, stair lifts, widened doorways, wheelchair ramps, and first-floor master suite conversions &mdash; all without requiring monthly mortgage payments. The HECM line of credit growth feature creates an expanding pool of repair funds that increases over time, even if your home&apos;s market value stays flat. In our California and Washington closings, seniors using HECM for home repairs report that the average $35,000-$75,000 aging-in-place renovation costs a fraction of the $66,000-$102,000 annual expense of assisted living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get HECM Quote for Repairs
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+19498229662">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  (949) 822-9662
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <Link href="/reverse-mortgages" className="hover:text-blue-600">Reverse Mortgages</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Reverse Mortgage for Home Repairs &amp; Aging-in-Place Modifications</span>
        </nav>

        {/* Citation Hook + AIO Answer Block (Bing Power Block) */}
        <section className="mb-12">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
            <p className="text-lg font-semibold text-slate-900 mb-4">
              <strong>Can you use a reverse mortgage for home repairs and aging-in-place modifications?</strong>
            </p>
            <p className="text-lg text-slate-700 mb-0">
              According to Mo Abdel, NMLS #1426884, a wholesale mortgage broker licensed in California and Washington with access to 200+ lenders: <strong>Yes &mdash; HECM reverse mortgage proceeds have no usage restrictions</strong>, meaning homeowners 62 and older can fund any home repair or aging-in-place modification including bathroom remodels, wheelchair ramps, stair lifts, widened doorways, grab bars, first-floor master suites, and ADU caregiver suites. The HECM line of credit is the preferred option because <strong>unused funds grow over time</strong>, creating a larger pool of money for future repairs. Borrowers have <strong>no required monthly principal and interest payments</strong> but must maintain property taxes, homeowner&apos;s insurance, and the home in reasonable condition.
            </p>
          </div>

          {/* Semantic Triples Block */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              Key Facts: Reverse Mortgage Home Repairs
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>HECM reverse mortgage</strong> &rarr; funds home repairs &rarr; no monthly mortgage payments required</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>HECM line of credit</strong> &rarr; unused balance grows annually &rarr; creates expanding repair fund</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Aging-in-place modifications</strong> &rarr; cost $35,000-$75,000 on average &rarr; fraction of assisted living costs</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl mb-8 border border-yellow-200">
            <p className="text-sm text-yellow-800 mb-0">
              <strong>Important:</strong> HECM reverse mortgages require borrowers to be <strong>62 years or older</strong> and complete <strong>HUD-approved counseling</strong> before applying. Not all borrowers will qualify. This is not a commitment to lend. All information is for educational purposes only.
            </p>
          </div>
        </section>

        {/* E-E-A-T Narrative: Why Seniors Need Home Repairs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why 77% of Seniors Want to Age in Place &mdash; and How Reverse Mortgages Fund the Repairs to Make It Possible
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            AARP&apos;s 2024 Home and Community Preferences Survey found that <strong>77% of adults over 50 want to remain in their current home</strong> as they age, yet the National Association of Home Builders reports that only 10% of the existing U.S. housing stock is designed for aging-in-place accessibility. That gap between where seniors want to live and what their homes can safely support creates an urgent need for home modifications &mdash; and an equally urgent need for financing that does not drain fixed retirement incomes.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            In my 15+ years of originating reverse mortgages across California and Washington, I have seen hundreds of seniors use HECM proceeds specifically for home repairs and accessibility modifications. The pattern is consistent: a senior in their late 60s or early 70s recognizes that their two-story home, narrow hallways, or bathtub-only bathroom will become dangerous within 5-10 years. Rather than waiting for a fall or health crisis, they proactively fund modifications through HECM, preserving their independence and avoiding the $5,500-$8,500 monthly cost of California assisted living.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            The National Council on Aging reports that <strong>one in four Americans aged 65+ falls each year</strong>, and falls are the leading cause of injury-related death for seniors. The CDC estimates that fall-related medical costs exceed $50 billion annually in the United States. Many of these falls happen in the home &mdash; in bathrooms without grab bars, on stairs without railings, and in kitchens with inaccessible storage. Proactive home modifications funded by HECM proceeds directly reduce fall risk and the associated medical costs.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-emerald-600" />
              By the Numbers: Aging in Place vs. Assisted Living
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <p className="text-3xl font-bold text-emerald-700">77%</p>
                <p className="text-sm text-slate-600">of adults 50+ prefer to age in their current home</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <p className="text-3xl font-bold text-emerald-700">$66K-$102K</p>
                <p className="text-sm text-slate-600">annual cost of assisted living in California (2026)</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <p className="text-3xl font-bold text-emerald-700">$35K-$75K</p>
                <p className="text-sm text-slate-600">average comprehensive aging-in-place renovation cost</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Hub: Common Aging-in-Place Modifications & Cost Ranges */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Common Aging-in-Place Home Modifications: Cost Ranges &amp; ROI for Seniors
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Understanding modification costs helps you plan your HECM draw strategy. The following cost ranges reflect 2026 California and Washington market data from HomeAdvisor, AARP, and contractor surveys. Costs vary by location, scope, and contractor. In our experience closing reverse mortgages across both states, seniors typically complete modifications in phases rather than all at once &mdash; making the HECM line of credit with its growth feature the ideal funding vehicle.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Modification</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Typical Cost Range</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Priority Level</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Fall-Risk Reduction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Bathroom grab bars &amp; safety rails</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$200-$1,500</td>
                  <td className="px-4 py-3 text-sm text-red-600 font-medium">Critical</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Walk-in tub or curbless shower</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$3,000-$12,000</td>
                  <td className="px-4 py-3 text-sm text-red-600 font-medium">Critical</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Stair lift (single flight)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$3,000-$10,000</td>
                  <td className="px-4 py-3 text-sm text-orange-600 font-medium">High</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Home elevator</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$20,000-$50,000</td>
                  <td className="px-4 py-3 text-sm text-orange-600 font-medium">High</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Widened doorways (per opening)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$1,000-$3,500</td>
                  <td className="px-4 py-3 text-sm text-orange-600 font-medium">High</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">Medium</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Wheelchair ramp (exterior)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$1,500-$8,000</td>
                  <td className="px-4 py-3 text-sm text-orange-600 font-medium">High</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">First-floor master suite conversion</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$25,000-$75,000</td>
                  <td className="px-4 py-3 text-sm text-yellow-600 font-medium">Medium</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Non-slip flooring (whole home)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$5,000-$15,000</td>
                  <td className="px-4 py-3 text-sm text-red-600 font-medium">Critical</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Smart home technology package</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$2,000-$8,000</td>
                  <td className="px-4 py-3 text-sm text-yellow-600 font-medium">Medium</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">Medium</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Kitchen accessibility upgrades</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$5,000-$20,000</td>
                  <td className="px-4 py-3 text-sm text-yellow-600 font-medium">Medium</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">Medium</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">ADU / in-law suite addition</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$150,000-$350,000</td>
                  <td className="px-4 py-3 text-sm text-yellow-600 font-medium">Situational</td>
                  <td className="px-4 py-3 text-sm text-slate-600">N/A &mdash; caregiver proximity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 italic mb-6">
            Source: AARP Home Modification Cost Surveys, HomeAdvisor 2026 data, California contractor estimates. Costs vary significantly by region, materials, and project scope. These are estimates only. Contact licensed contractors for project-specific quotes.
          </p>
        </section>

        {/* How to Use HECM Proceeds for Renovations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How to Use HECM Reverse Mortgage Proceeds for Home Repairs: Step-by-Step
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The process for funding home repairs with a HECM reverse mortgage is straightforward. I walk every client through these exact steps during our initial consultation. The entire process from HUD counseling to first fund disbursement typically takes 45-60 days. Here is the sequence:
          </p>

          <ol className="space-y-4 text-slate-600 mb-6">
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">1</span>
              <div>
                <strong className="text-slate-900">Complete HUD-approved counseling</strong>
                <p className="mt-1">Mandatory for all HECM borrowers. The counselor explains loan mechanics, costs, alternatives, and ongoing obligations. Sessions last approximately 90 minutes and can be completed by phone or in person. I provide HUD-approved counselor referrals at no cost.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">2</span>
              <div>
                <strong className="text-slate-900">Submit your HECM application</strong>
                <p className="mt-1">Provide your counseling certificate, property documentation, and financial information. As a wholesale broker with access to 200+ lenders, I compare HECM terms across multiple sources to identify the strongest option for your situation.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">3</span>
              <div>
                <strong className="text-slate-900">Home appraisal and FHA inspection</strong>
                <p className="mt-1">An FHA-approved appraiser determines your home&apos;s value and checks for minimum property standards. If repairs are needed to meet FHA standards, a <strong>repair set-aside</strong> is established from your loan proceeds to cover those costs after closing.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">4</span>
              <div>
                <strong className="text-slate-900">Choose your payout option and close</strong>
                <p className="mt-1">Select line of credit (recommended for phased repairs), lump sum (for a single large project), tenure payments (for ongoing care costs), or a modified combination. Closing typically occurs 30-45 days after appraisal.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">5</span>
              <div>
                <strong className="text-slate-900">Draw funds and begin repairs</strong>
                <p className="mt-1">After the 3-day right of rescission period, draw from your HECM to pay contractors and purchase materials. No lender approval is needed for specific repairs. You control how and when funds are used.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">6</span>
              <div>
                <strong className="text-slate-900">Complete phased modifications over time</strong>
                <p className="mt-1">With the line of credit option, unused funds grow each year. Complete high-priority modifications (grab bars, non-slip flooring, walk-in tub) first, then draw additional funds for later phases (stair lift, kitchen accessibility, smart home technology) as your needs evolve.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* HECM LOC vs Tenure for Ongoing Maintenance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            HECM Line of Credit vs. Tenure Payments for Ongoing Home Maintenance
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            One of the most common questions I receive from seniors planning home repairs is whether to choose the HECM line of credit or tenure payments. The answer depends on whether your needs are project-based (modifications with a defined scope and timeline) or ongoing (monthly maintenance, in-home care, property taxes). Many seniors benefit from a modified tenure plan that provides both.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            The line of credit growth feature is the distinguishing factor. Unused credit line funds grow at the same rate being charged on your loan balance (the interest rate plus the annual mortgage insurance premium). On a HECM with a rate of 5.5% and a 0.5% MIP, the growth rate would be 6.0% per year. A $100,000 available credit line grows to approximately $106,000 after one year, $112,360 after two years, and $179,085 after ten years &mdash; without any additional draws. This compounding growth makes the LOC a powerful long-term repair and maintenance fund.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">HECM Line of Credit</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">HECM Tenure Payments</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Modified Tenure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Ideal for</td>
                  <td className="px-4 py-3 text-sm text-emerald-700 font-medium">Phased home repairs &amp; modifications</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Ongoing care costs &amp; monthly expenses</td>
                  <td className="px-4 py-3 text-sm text-emerald-700 font-medium">Repairs + monthly income</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Growth feature</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">Yes &mdash; unused funds grow annually</td>
                  <td className="px-4 py-3 text-sm text-slate-600">No</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">Yes &mdash; on LOC portion</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Access pattern</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Draw any amount, any time</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Fixed monthly payment for life</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Monthly payment + draw as needed</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Flexibility</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">Highest</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Low &mdash; fixed payments</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Lender can freeze/reduce?</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">No &mdash; guaranteed access</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">No</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Repair planning</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Fund projects as needs arise over years</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Save monthly payments for future repairs</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Draw for projects + monthly for care</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 italic mb-6">
            Note: Growth rates, payout amounts, and available credit depend on borrower age, home value, and current interest rates. HECM borrowers must be 62 or older and complete HUD-approved counseling. Contact a licensed loan officer for personalized projections.
          </p>
        </section>

        {/* HECM vs HELOC Comparison for Seniors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Reverse Mortgage vs. HELOC for Senior Home Repairs: Which Is Safer?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Seniors often ask whether a HELOC or a HECM is the stronger option for funding home repairs. Having originated both products for over a decade, I can tell you the answer depends almost entirely on your income situation and comfort with monthly payments. For seniors on fixed incomes, the HECM is almost always the safer, more sustainable choice. Here is why:
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">HECM Reverse Mortgage</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Traditional HELOC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Monthly payments</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">No required monthly principal &amp; interest payments</td>
                  <td className="px-4 py-3 text-sm text-red-600">Required monthly interest payments</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Age requirement</td>
                  <td className="px-4 py-3 text-sm text-slate-600">62 or older</td>
                  <td className="px-4 py-3 text-sm text-slate-600">18+ (no maximum)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Lender can freeze/reduce?</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">No &mdash; guaranteed access to credit line</td>
                  <td className="px-4 py-3 text-sm text-red-600">Yes &mdash; can be frozen if home values decline</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Credit line growth</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">Yes &mdash; unused funds grow over time</td>
                  <td className="px-4 py-3 text-sm text-red-600">No growth feature</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Non-recourse protection</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">Yes &mdash; FHA insured, never owe more than home value</td>
                  <td className="px-4 py-3 text-sm text-red-600">No &mdash; full personal liability</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Income qualification</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">Residual income assessment (more flexible)</td>
                  <td className="px-4 py-3 text-sm text-red-600">Strict DTI ratios required</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Repayment timeline</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">Due when you move, sell, or pass away</td>
                  <td className="px-4 py-3 text-sm text-red-600">Draw period ends (typically 10 years), then full repayment</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Upfront costs</td>
                  <td className="px-4 py-3 text-sm text-red-600">Higher (FHA MIP, origination fees, counseling)</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">Lower closing costs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-600 mb-6">
            For a deeper comparison of these two products, see our <Link href="/blog/hecm-vs-heloc-seniors-2026" className="text-emerald-600 hover:text-emerald-700 underline">complete HECM vs. HELOC guide for seniors</Link>. The bottom line: HELOCs are designed for borrowers with reliable income to make monthly payments. HECM reverse mortgages are designed for seniors who want to access equity without adding a monthly payment obligation to their fixed income.
          </p>
        </section>

        {/* ADU / In-Law Suite Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Using Reverse Mortgage Funds for ADU &amp; In-Law Suite Additions
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Accessory Dwelling Units (ADUs) have become one of the most significant aging-in-place strategies in California and Washington. An ADU on your property allows a family caregiver, professional aide, or tenant to live on-site while you remain in your primary home. California&apos;s ADU legislation (AB 1033, SB 9, AB 68) has dramatically streamlined permitting, eliminated many impact fees, and allowed ADUs up to 1,200 square feet on most residential lots. Washington passed similar legislation (HB 1337) in 2023, making ADUs easier to build statewide.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            ADU construction in California typically costs $150,000-$350,000 depending on size, location, and finishes. In Washington, costs range from $120,000-$280,000. A HECM lump sum or large line of credit draw can fund part or all of this construction. For a senior with a $900,000 home and no existing mortgage, available HECM proceeds may be $400,000 or more &mdash; sufficient to build a complete ADU while retaining a credit line for future repairs and care costs.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            The ROI on ADU construction extends beyond aging-in-place benefits. A completed ADU adds 15-30% to property value according to Redfin and Zillow analyses, potentially creating more home equity than the construction cost. This value increase benefits heirs who inherit the property. Additionally, if a family caregiver occupies the ADU, the savings on professional in-home care ($30-$45 per hour in California) can exceed $50,000 annually.
          </p>
        </section>

        {/* California Title 24 Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            California Title 24 Accessibility Requirements for Home Modifications
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            When using HECM funds for home modifications in California, understanding Title 24 Building Standards Code ensures your renovations meet legal requirements and maximize usability. Key accessibility provisions that apply when you remodel include:
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              California Title 24 Key Accessibility Standards
            </h3>
            <ol className="space-y-3 text-slate-600">
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">1</span>
                <span><strong>Doorway width:</strong> Minimum 32 inches clear opening for wheelchair and walker access (36 inches recommended for comfort)</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">2</span>
                <span><strong>Grab bar reinforcement:</strong> Bathroom walls must include blocking for future grab bar installation when remodeled</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">3</span>
                <span><strong>Ramp slope:</strong> Maximum 1:12 slope ratio for wheelchair ramps (one inch of rise per 12 inches of run)</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">4</span>
                <span><strong>Lever hardware:</strong> Lever-style door handles and faucet controls required on new installations (replaces round knobs)</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">5</span>
                <span><strong>Bathroom clearances:</strong> Minimum 30x48 inch clear floor space at each bathroom fixture for wheelchair turning radius</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">6</span>
                <span><strong>Electrical outlets:</strong> Switches at 48 inches maximum height and outlets at 15 inches minimum height when remodeled</span>
              </li>
            </ol>
          </div>
          <p className="text-lg text-slate-600 mb-6">
            Hiring a contractor experienced with Title 24 accessibility standards ensures your HECM-funded modifications meet code on the first inspection. Non-compliant work can require costly re-dos. I maintain a referral list of aging-in-place contractors serving Orange County, Los Angeles County, San Diego County, and the greater Seattle &amp; Eastside area who are familiar with both California Title 24 and Washington accessibility codes.
          </p>
        </section>

        {/* Bathroom Remodel ROI Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Bathroom Remodel ROI: Why Accessible Bathrooms Are the Highest-Priority Modification
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The National Association of Realtors&apos; 2025 Remodeling Impact Report found that <strong>accessible bathroom remodels recover 71% of their cost at resale</strong> while simultaneously reducing fall risk by an estimated 30-40% according to CDC research. For seniors funding modifications with HECM proceeds, the bathroom is the clear starting point for three reasons:
          </p>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600"><strong>Safety priority:</strong> 80% of senior home falls occur in the bathroom according to the National Institute on Aging</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600"><strong>Resale value:</strong> 71% cost recovery on accessible bathroom remodels vs. 50-60% for most other modifications</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600"><strong>Daily impact:</strong> Bathroom is used multiple times daily, making accessibility improvements immediately noticeable</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600"><strong>Cost-effective:</strong> Grab bars ($200-$1,500) and walk-in tubs ($3,000-$12,000) deliver the highest safety improvement per dollar</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-slate-600 mb-6">
            A full accessible bathroom remodel &mdash; including curbless shower, grab bars, raised toilet, non-slip tile, and lever faucets &mdash; typically costs $8,000-$25,000. For a senior drawing from a HECM line of credit, this represents a modest draw that leaves the majority of available funds growing for future modifications.
          </p>
        </section>

        {/* LeadMagnetCTA */}
        <div className="mb-12">
          <LeadMagnetCTA
            title="Reverse Mortgage Calculator: See How Much You Can Access"
            description="Enter your age, home value, and existing mortgage balance to estimate your HECM proceeds for home repairs and aging-in-place modifications. Free, no-obligation calculation."
            href="/blog/reverse-mortgage-calculator-2026"
            badge="Free Calculator"
            ctaText="Calculate Now"
          />
        </div>

        {/* People Also Ask */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask About Reverse Mortgages for Home Repairs
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Can you use a reverse mortgage to fix your roof?</h3>
              <p className="text-slate-600">Yes. HECM proceeds fund any home repair including roof replacement, with no lender approval needed after closing.</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Does a reverse mortgage cover wheelchair ramp installation?</h3>
              <p className="text-slate-600">Yes. Wheelchair ramps costing $1,500-$8,000 can be funded entirely through HECM line of credit draws.</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">How much does a walk-in tub cost with reverse mortgage funding?</h3>
              <p className="text-slate-600">Walk-in tubs cost $3,000-$12,000 installed. HECM proceeds cover the full cost with no monthly payments required.</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Can I install a stair lift using reverse mortgage money?</h3>
              <p className="text-slate-600">Yes. Stair lifts cost $3,000-$10,000 per flight and are commonly funded through HECM line of credit draws.</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Is a reverse mortgage worth it for home repairs only?</h3>
              <p className="text-slate-600">For seniors 62+ on fixed incomes, HECM provides repair funding without monthly payments, making it a strong option.</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Do I keep my home if I get a reverse mortgage for repairs?</h3>
              <p className="text-slate-600">Yes. You retain full ownership and title. The loan is repaid only when you move, sell, or pass away.</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Can reverse mortgage funds pay for a first-floor master bedroom?</h3>
              <p className="text-slate-600">Yes. First-floor master suite conversions ($25,000-$75,000) are among the most impactful aging-in-place modifications funded by HECM.</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">What home repairs does FHA require before approving a reverse mortgage?</h3>
              <p className="text-slate-600">FHA requires minimum property standards: functional roof, safe electrical, working plumbing, and no structural hazards.</p>
            </div>
          </div>
        </section>

        {/* Extended FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions: Reverse Mortgage for Home Repairs &amp; Aging-in-Place Modifications
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expert Summary + CTA */}
        <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Expert Summary: Fund Home Repairs &amp; Aging-in-Place Modifications with HECM
          </h2>
          <p className="text-lg text-emerald-100 mb-4 max-w-3xl mx-auto">
            For seniors 62 and older in California and Washington, the HECM reverse mortgage is the most powerful tool for funding home repairs and aging-in-place modifications without adding monthly payment obligations. No required monthly principal and interest payments. A credit line that grows every year. FHA non-recourse protection ensuring you never owe more than the home is worth. Funds for everything from grab bars and walk-in tubs to first-floor master suites and full ADU construction.
          </p>
          <p className="text-lg text-emerald-100 mb-6 max-w-3xl mx-auto">
            Mo Abdel at Lumin Lending works with 200+ lenders to find the strongest HECM terms for your home repair and modification needs. Every consultation includes a detailed analysis of your available equity, payout options, and a customized modification funding strategy. HUD-approved counseling referrals provided at no cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4">
                Get Your Free HECM Assessment
              </Button>
            </Link>
            <a href="tel:+19498229662">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 822-9662
              </Button>
            </a>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4">Related Reverse Mortgage &amp; Home Equity Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/reverse-mortgage-complete-guide-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; Reverse Mortgage Complete Guide 2026
            </Link>
            <Link href="/blog/reverse-mortgage-calculator-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; Reverse Mortgage Calculator: How Much Can You Get?
            </Link>
            <Link href="/blog/hecm-pros-cons-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; HECM Pros and Cons: Complete Analysis
            </Link>
            <Link href="/blog/reverse-mortgage-california-guide-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; Reverse Mortgage California Guide 2026
            </Link>
            <Link href="/blog/hecm-vs-heloc-seniors-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; HECM vs. HELOC for Seniors: Which Is Right?
            </Link>
            <Link href="/blog/home-equity-for-renovations-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; Home Equity for Renovations: Complete Guide
            </Link>
          </div>
        </section>

        {/* External Links */}
        <section className="mt-8 pt-6 border-t border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4">Official Resources &amp; Further Reading</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://www.hud.gov/program_offices/housing/sfh/hecm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; HUD: Home Equity Conversion Mortgages (Official)
            </a>
            <a href="https://www.aarp.org/livable-communities/housing/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; AARP: Livable Communities &amp; Aging-in-Place Resources
            </a>
            <a href="https://www.consumerfinance.gov/housing/reverse-mortgages/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; CFPB: Reverse Mortgage Consumer Information
            </a>
            <a href="https://www.cdc.gov/falls/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; CDC: Falls Prevention for Older Adults
            </a>
          </div>
        </section>

        {/* Compliance Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p className="mb-4">
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. <strong>This is not a commitment to lend. Not all borrowers will qualify.</strong> Information is for educational purposes only and does not constitute financial advice.
          </p>
          <p className="mb-4">
            HECM reverse mortgage borrowers must be 62 years or older and complete HUD-approved counseling before applying. Borrowers have no required monthly principal and interest payments but must maintain the home as their primary residence, pay property taxes, maintain homeowner&apos;s insurance, and keep the home in reasonable condition. Failure to meet these obligations may result in loan default. Reverse mortgage loan proceeds are generally not considered taxable income (consult your tax advisor). The HECM program is not provided by HUD or FHA.
          </p>
          <p className="mb-4">
            The HECM line of credit growth feature is subject to program terms and available equity. Modification costs are estimates based on 2026 California and Washington market data and will vary by location, contractor, and scope of work. ADU construction costs, ROI estimates, and property value projections are based on third-party data sources and are not guaranteed. California Title 24 requirements are summarized for informational purposes; consult a licensed contractor or building official for project-specific code compliance.
          </p>
          <p>
            Mo Abdel, NMLS #1426884, is licensed in California and Washington. Contact a licensed loan officer for personalized guidance.
          </p>
        </section>
      </article>
    </div>
  );
}