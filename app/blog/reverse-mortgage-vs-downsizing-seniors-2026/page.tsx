import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Home, DollarSign, TrendingUp, Shield, AlertCircle, Users, Scale, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LeadMagnetCTA } from '@/components/lead-magnets/LeadMagnetCTA';

export const metadata: Metadata = {
  title: 'Reverse Mortgage vs Downsizing: Which Is Right for California & Washington Seniors? [2026] | Mo Abdel',
  description: 'Reverse mortgage vs downsizing for seniors: Complete financial comparison with CA Prop 19 analysis, break-even calculations, and real scenarios for $800K-$2M homes. Expert guidance from Mo Abdel NMLS #1426884.',
  keywords: ['reverse mortgage vs downsizing seniors', 'reverse mortgage or sell home', 'should I downsize or get reverse mortgage', 'HECM vs selling home', 'Prop 19 downsizing seniors', 'reverse mortgage vs selling house', 'senior downsizing California 2026', 'reverse mortgage break even analysis'],
  openGraph: {
    title: 'Reverse Mortgage vs Downsizing: Which Is Right for California & Washington Seniors? [2026]',
    description: 'Complete financial analysis: reverse mortgage vs downsizing for seniors. CA Prop 19 implications, break-even calculations, and scenario comparisons for $800K-$2M homes.',
    url: 'https://www.mothebroker.com/blog/reverse-mortgage-vs-downsizing-seniors-2026',
    siteName: 'Mo Abdel - Reverse Mortgage Specialist',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-16T00:00:00Z',
    modifiedTime: '2026-02-16T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/reverse-mortgage-vs-downsizing-seniors-2026',
  },
};

const faqData = [
  {
    question: "Is it better to get a reverse mortgage or sell my home and downsize?",
    answer: "The answer depends on your financial goals, emotional attachment to your home, and tax situation. Downsizing typically provides more net cash because you access full equity minus transaction costs. A reverse mortgage lets you stay in your home but provides less total cash due to lending limits and compounding interest. California seniors 55+ benefit from Prop 19 property tax base transfers when downsizing. A mortgage broker can model both scenarios with your specific numbers."
  },
  {
    question: "How much does a reverse mortgage cost compared to selling a home?",
    answer: "A HECM reverse mortgage has upfront costs of approximately $15,000-$25,000 (including 2% MIP, origination fee, and closing costs) plus ongoing interest that compounds on the balance. Selling a home costs approximately 7-9% of the sale price in commissions, closing costs, and moving expenses. For an $800,000 home, selling costs are roughly $56,000-$72,000 but you receive the remaining equity in cash. With a reverse mortgage, upfront costs are lower but total cost grows over time."
  },
  {
    question: "What is the break-even point between a reverse mortgage and downsizing?",
    answer: "The break-even point depends on home value, interest rates, living costs in the new location, and how long you stay. Generally, if you plan to stay in your home less than 5-7 years, alternatives to a reverse mortgage (including downsizing) are more cost-effective. If you plan to stay 10+ years, a reverse mortgage's no-payment feature provides value that is difficult to replicate through other means. The HECM line of credit growth feature adds additional value over longer time horizons."
  },
  {
    question: "How does California Prop 19 affect the reverse mortgage vs downsizing decision?",
    answer: "Prop 19 allows California homeowners 55 and older to transfer their existing Prop 13 property tax base to a replacement home anywhere in California. This eliminates what was previously the biggest financial penalty of downsizing: a massive property tax increase. A senior paying $3,000 per year on a home purchased in 1990 would face $12,000-$15,000 per year on a replacement home without Prop 19. With Prop 19, the $3,000 base transfers (with adjustment if the new home costs more). This makes downsizing significantly more attractive."
  },
  {
    question: "What happens to my property taxes if I downsize in Washington state?",
    answer: "Washington does not have a property tax base transfer equivalent to California's Prop 19. If you sell a home in Washington and buy a less expensive property, your new property taxes are based on the new home's assessed value at purchase. However, Washington offers property tax exemptions and deferrals for seniors 61+ with income below certain thresholds. These programs can reduce or defer property taxes on your new home, partially offsetting the impact of buying at current market values."
  },
  {
    question: "Can I use a HECM for Purchase instead of a traditional reverse mortgage?",
    answer: "Yes, a HECM for Purchase combines downsizing with a reverse mortgage. You sell your current home, use a portion of the proceeds as a down payment on a new home, and finance the remainder with a reverse mortgage. This means no monthly mortgage payments on the new home. The HECM for Purchase typically requires a 40-60% down payment depending on your age. This option works well for seniors who want to move to a more suitable home while preserving cash from the sale."
  },
  {
    question: "How much equity can I access with a reverse mortgage vs selling?",
    answer: "Selling provides access to your full equity minus transaction costs (typically 7-9% of sale price). A reverse mortgage provides access to a portion of equity based on age, interest rates, and the HECM lending limit ($1,209,750 in 2026). A 70-year-old with a free-and-clear $1,000,000 home might access $450,000-$550,000 through a HECM but approximately $910,000-$930,000 through selling. The difference narrows for older borrowers and homes below the HECM limit."
  },
  {
    question: "What are the emotional factors in choosing between reverse mortgage and downsizing?",
    answer: "The emotional weight of this decision is significant and often underestimated. Staying in your home preserves neighborhood connections, proximity to friends and family, familiar routines, and decades of memories. Downsizing involves leaving all of this behind, which causes genuine grief for many seniors. However, some seniors find that a smaller home reduces maintenance burden, isolation, and safety concerns. There is no right answer—only the right answer for your specific situation and values."
  },
  {
    question: "Does a reverse mortgage affect my ability to leave my home to my children?",
    answer: "A reverse mortgage does not prevent you from leaving your home to heirs, but it reduces the equity they inherit. When the loan becomes due, heirs can sell the home and keep equity above the loan balance, refinance into a traditional mortgage to keep the home, or allow the lender to sell. The non-recourse protection means heirs never owe more than the home's value. Downsizing and investing the proceeds may preserve more wealth for heirs, depending on investment returns and how long you live."
  },
  {
    question: "What if I downsize and regret it—can I buy back a similar home?",
    answer: "Buying back a similar home after downsizing is possible but rarely practical. Home prices in the area you left may have increased, you would face full transaction costs again (commissions, closing costs, moving), and in California, a new home purchase triggers reassessment at current market value (though Prop 19 allows another tax base transfer). This is why the decision deserves thorough analysis before committing—reversing course is expensive."
  },
  {
    question: "How does the HECM lending limit affect high-value homes?",
    answer: "The 2026 HECM lending limit is $1,209,750. For homes valued above this amount, the reverse mortgage calculation is capped at this limit regardless of actual home value. A senior with a $2,000,000 home receives the same HECM proceeds as a senior with a $1,209,750 home (all other factors equal). For high-value homeowners, proprietary (jumbo) reverse mortgages may provide more proceeds, or downsizing becomes relatively more attractive because selling unlocks the full value."
  },
  {
    question: "Should I get a reverse mortgage now and downsize later?",
    answer: "This strategy has merit in certain situations. Establishing a HECM line of credit early allows the unused credit to grow over time. You can draw on the credit as needed, and if you eventually decide to downsize, you sell the home and repay the HECM balance from the proceeds. However, the upfront costs (2% MIP, origination fee) represent a sunk cost if you sell within a few years. This approach works best if you are genuinely undecided about your long-term plans and want optionality."
  }
];

export default function ReverseMortgageVsDownsizingSeniors2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Reverse Mortgage vs Downsizing: Which Is Right for California & Washington Seniors? [2026]",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["Reverse Mortgages", "HECM Loans", "Senior Downsizing", "California Prop 19", "Home Equity", "Washington Property Tax"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "identifier": "NMLS #2716106",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-02-16",
            "dateModified": "2026-02-16",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/reverse-mortgage-vs-downsizing-seniors-2026",
              "significantLink": [
                "https://www.hud.gov/",
                "https://www.boe.ca.gov/",
                "https://dor.wa.gov/"
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 rounded-full px-4 py-1.5 mb-6 border border-emerald-500/30">
              <Scale className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">HECM vs Downsizing</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reverse Mortgage vs Downsizing: Which Is Right for California &amp; Washington Seniors? [2026]
            </h1>

            <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
              Based on Mo Abdel&apos;s experience with California and Washington seniors, the reverse mortgage vs downsizing decision is the most consequential financial choice a homeowner 62+ will make. The answer is not always obvious &mdash; California&apos;s Prop 19 has fundamentally changed the downsizing calculus, while the HECM line of credit growth feature creates unique long-term value for seniors who stay. This guide provides the financial framework to make the right call for your situation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Your Personalized Analysis
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

        {/* Quick Summary */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Answer: Reverse Mortgage vs Downsizing &mdash; Which Provides More Money?</h2>
            <p className="text-slate-700 mb-4">
              <strong>Downsizing almost always provides more net cash than a reverse mortgage.</strong> A senior selling an $800,000 home and buying a $450,000 replacement receives approximately $280,000-$310,000 in net proceeds. A HECM reverse mortgage on the same $800,000 home provides approximately $350,000-$450,000 in available credit (depending on age and rates) &mdash; but this is a growing loan balance, not free money. The reverse mortgage&apos;s advantage is that you stay in your home. The downsizing advantage is that you access equity without accumulating debt.
            </p>
            <p className="text-sm text-slate-500">
              <strong>Important:</strong> HECM reverse mortgages require borrowers to be age 62 or older and complete mandatory HUD-approved counseling. California Prop 19 allows seniors 55+ to transfer property tax bases when downsizing.
            </p>
          </div>
        </section>

        {/* Why This Decision Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why the Reverse Mortgage vs Downsizing Decision Matters More Than Ever in 2026
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Home equity represents 66% of the average American senior&apos;s net worth, according to the Federal Reserve&apos;s Survey of Consumer Finances. For California and Washington homeowners who purchased their homes 20-40 years ago, that percentage is often higher &mdash; homes purchased for $150,000-$300,000 are now worth $800,000-$2,000,000 or more. How you access that equity determines your financial security for the next 10-30 years.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            Two forces have changed this decision dramatically in recent years:
          </p>

          <ol className="space-y-3 text-slate-600 mb-6">
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">1</span>
              <span><strong>California Proposition 19 (effective 2021)</strong> &mdash; allows seniors 55+ to transfer their Prop 13 property tax base to a replacement home anywhere in California, up to 3 times. This eliminated the single biggest financial penalty of downsizing for long-time California homeowners.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">2</span>
              <span><strong>Rising home values with flat HECM limits</strong> &mdash; the 2026 HECM lending limit is $1,209,750. For California seniors with homes valued at $1.5M-$3M+, a reverse mortgage accesses a smaller percentage of their equity than a decade ago, while selling captures the full market value.</span>
            </li>
          </ol>

          <p className="text-lg text-slate-600 mb-6">
            These two factors have shifted the financial advantage toward downsizing for many California seniors &mdash; but not all. The reverse mortgage still wins for homeowners who are deeply committed to staying in their current home, those who cannot qualify for a traditional mortgage on a replacement property, and those who value the HECM line of credit&apos;s unique growth feature as a long-term financial safety net.
          </p>
        </section>

        {/* Side-by-Side Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Reverse Mortgage vs Downsizing: Complete Side-by-Side Comparison
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The following comparison covers every major dimension of the reverse mortgage vs downsizing decision. Financial factors, lifestyle factors, tax implications, and timeline considerations are all included to provide a comprehensive decision framework.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-x-auto mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Factor</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-700">Reverse Mortgage (HECM)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Downsizing (Sell &amp; Buy Smaller)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Monthly Cost</td>
                  <td className="px-4 py-3 text-sm text-slate-600">No mortgage payment; property taxes + insurance continue</td>
                  <td className="px-4 py-3 text-sm text-slate-600">New mortgage payment (if financed) or none (if paid cash); lower property taxes on smaller home</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Upfront Cost</td>
                  <td className="px-4 py-3 text-sm text-slate-600">$15,000-$25,000 (MIP, origination, closing)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">7-9% of sale price (commissions, closing, moving)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Equity Access</td>
                  <td className="px-4 py-3 text-sm text-slate-600">40-70% of home value (age-dependent)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Full equity minus transaction costs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Ongoing Interest Cost</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Compounds on growing balance; never paid monthly</td>
                  <td className="px-4 py-3 text-sm text-slate-600">None if new home purchased with cash</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Tax Impact (CA)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Proceeds are tax-free loan advances</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Capital gains exclusion ($250K/$500K); Prop 19 tax base transfer for 55+</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Tax Impact (WA)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Proceeds are tax-free loan advances</td>
                  <td className="px-4 py-3 text-sm text-slate-600">No state income tax; capital gains exclusion applies; new property assessed at purchase price</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Lifestyle Change</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">None &mdash; stay in your home</td>
                  <td className="px-4 py-3 text-sm text-amber-600 font-medium">Significant &mdash; new home, new neighborhood</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Timeline to Access Funds</td>
                  <td className="px-4 py-3 text-sm text-slate-600">30-60 days (HECM closing)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">60-120 days (list, sell, buy, close)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Prop 19 Benefit (CA 55+)</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Not applicable (you stay in your home)</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">Transfer low Prop 13 tax base to replacement home</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Inheritance Impact</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Heirs inherit home minus HECM balance; non-recourse protection</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Heirs inherit smaller home + invested proceeds</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Home Maintenance Burden</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Same home = same maintenance requirements</td>
                  <td className="px-4 py-3 text-sm text-emerald-600 font-medium">Smaller/newer home = potentially less maintenance</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Flexibility to Move Later</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Can sell anytime; repay HECM from proceeds</td>
                  <td className="px-4 py-3 text-sm text-slate-600">Already moved; can move again but face new costs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 italic">
            This comparison reflects typical market conditions in February 2026. Individual results depend on home value, age, interest rates, location, and personal circumstances. HECM borrowers must be 62+ and complete HUD-approved counseling.
          </p>
        </section>

        {/* Financial Scenario Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Financial Scenario Comparison: $800K, $1.2M, and $2M Homes
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The financial math changes significantly based on home value. Below are three scenarios showing how HECM proceeds compare to net downsizing proceeds for a 70-year-old homeowner with a free-and-clear home in California. These scenarios illustrate the impact of the HECM lending limit on high-value homes and the role of Prop 19 in reducing downsizing costs.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-x-auto mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Factor</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-slate-900">$800K Home</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-slate-900">$1.2M Home</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-slate-900">$2M Home</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-emerald-50">
                  <td className="px-4 py-3 text-sm font-semibold text-emerald-800" colSpan={4}>Reverse Mortgage (HECM) Scenario</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-600">Home Value Used for HECM Calc</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">$800,000</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">$1,200,000</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">$1,209,750 (cap)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-600">Estimated HECM Available (age 70)</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">~$380,000</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">~$540,000</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">~$545,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-600">Less: Upfront Costs (MIP + origination + closing)</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">~$22,000</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">~$30,000</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">~$30,200</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-emerald-700">Net Available After Costs</td>
                  <td className="px-4 py-3 text-sm text-right font-medium text-emerald-700">~$358,000</td>
                  <td className="px-4 py-3 text-sm text-right font-medium text-emerald-700">~$510,000</td>
                  <td className="px-4 py-3 text-sm text-right font-medium text-emerald-700">~$515,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-600">HECM as % of Home Value</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">44.8%</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">42.5%</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">25.8%</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-3 text-sm font-semibold text-blue-800" colSpan={4}>Downsizing Scenario (Buy Replacement at 55% of Current Home Value)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-600">Sale Price</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">$800,000</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">$1,200,000</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">$2,000,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-600">Less: Selling Costs (commissions, closing, moving ~8%)</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">~$64,000</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">~$96,000</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">~$160,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-600">Net Sale Proceeds</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">$736,000</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">$1,104,000</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">$1,840,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-600">Less: Replacement Home Purchase (55% of original + 2% closing)</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">~$449,000</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">~$673,000</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">~$1,122,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-blue-700">Net Cash After Downsizing</td>
                  <td className="px-4 py-3 text-sm text-right font-medium text-blue-700">~$287,000</td>
                  <td className="px-4 py-3 text-sm text-right font-medium text-blue-700">~$431,000</td>
                  <td className="px-4 py-3 text-sm text-right font-medium text-blue-700">~$718,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-600">Downsizing Net Cash as % of Home Value</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">35.9%</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">35.9%</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">35.9%</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="px-4 py-3 text-sm font-semibold text-amber-800" colSpan={4}>Key Differences</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">HECM Provides More Cash?</td>
                  <td className="px-4 py-3 text-sm text-right font-medium text-emerald-600">Yes (+$71K)</td>
                  <td className="px-4 py-3 text-sm text-right font-medium text-emerald-600">Yes (+$79K)</td>
                  <td className="px-4 py-3 text-sm text-right font-medium text-red-600">No (&minus;$203K)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">But: HECM Is a Loan (Balance Grows)</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">Yes &mdash; debt increases</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">Yes &mdash; debt increases</td>
                  <td className="px-4 py-3 text-sm text-right text-slate-600">Yes &mdash; debt increases</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Downsizing Cash Is Debt-Free</td>
                  <td className="px-4 py-3 text-sm text-right text-emerald-600">Yes &mdash; no repayment</td>
                  <td className="px-4 py-3 text-sm text-right text-emerald-600">Yes &mdash; no repayment</td>
                  <td className="px-4 py-3 text-sm text-right text-emerald-600">Yes &mdash; no repayment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 italic">
            Estimates based on a 70-year-old borrower with a free-and-clear home. HECM amounts are illustrative and vary by lender, interest rate, and property. Selling costs assume 5% agent commissions + 2% closing costs + 1% moving/staging. Replacement home purchase includes 2% buyer closing costs. Actual results depend on individual circumstances.
          </p>
        </section>

        {/* Prop 19 Deep Dive */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            California Prop 19: The Game-Changer for Senior Downsizing Decisions
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Before Proposition 19, California seniors faced a devastating tax penalty for downsizing. Under Proposition 13, property taxes are based on the purchase price (plus a maximum 2% annual increase). A home purchased in 1990 for $250,000 might have a current assessed value of $450,000 and annual taxes of $4,500. Selling and buying a $600,000 replacement home would trigger reassessment at $600,000, resulting in taxes of approximately $7,500 per year &mdash; a 67% increase.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            This &quot;property tax lock-in&quot; kept millions of California seniors in homes that were too large, too expensive to maintain, or no longer suited to their needs. Many chose reverse mortgages specifically to avoid the property tax increase that would accompany a sale.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            Prop 19 changed this calculus fundamentally. Here is how the math works:
          </p>

          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg my-8">
            <h3 className="text-lg font-bold text-emerald-800 mb-4">Prop 19 Tax Base Transfer: Example Calculation</h3>
            <ol className="list-decimal pl-5 space-y-3 text-slate-700">
              <li><strong>Current Home:</strong> Assessed value $350,000 (purchased 1992) &rarr; Annual taxes ~$4,375</li>
              <li><strong>Current Market Value:</strong> $1,000,000</li>
              <li><strong>Replacement Home Purchase Price:</strong> $650,000 (downsizing)</li>
              <li><strong>Without Prop 19:</strong> New taxes based on $650,000 = ~$8,125/year (86% increase)</li>
              <li><strong>With Prop 19 (equal or lesser value):</strong> Tax base transfers at $350,000 = ~$4,375/year (no increase)</li>
              <li><strong>With Prop 19 (greater value):</strong> If replacement costs more than original, the difference is added to the transferred base</li>
              <li><strong>Annual Savings:</strong> $3,750/year = $37,500 over 10 years = $75,000 over 20 years</li>
            </ol>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            For California seniors with homes purchased before 2000, the property tax savings from Prop 19 can reach $5,000-$10,000 per year. Over a 15-20 year retirement, this amounts to $75,000-$200,000 in savings &mdash; money that would have been lost to higher property taxes without Prop 19. This single benefit has tipped the balance from reverse mortgage to downsizing for many California seniors.
          </p>
        </section>

        {/* Washington State Considerations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Washington State: Property Tax Considerations for Senior Downsizing
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Washington does not have a Prop 19 equivalent. Property taxes in Washington are based on assessed market value, and a new purchase is assessed at the purchase price. However, Washington offers two important programs for seniors:
          </p>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-8">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Washington Senior Property Tax Programs</h3>
            <ul className="space-y-3 text-slate-700">
              <li><strong>Property Tax Exemption for Seniors (age 61+):</strong> Reduces property taxes for seniors with combined household disposable income below state thresholds. The exemption freezes the assessed value and may exempt a portion of property tax levies. Available in all Washington counties.</li>
              <li><strong>Property Tax Deferral for Seniors (age 60+):</strong> Allows qualifying seniors to defer all or part of their property taxes until the property is sold or transferred. Deferred taxes accrue interest and become a lien on the property. Income thresholds apply.</li>
            </ul>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            For Washington seniors, the reverse mortgage vs downsizing decision relies more heavily on the financial comparison (equity access, monthly costs, inheritance goals) and less on property tax optimization. The lack of a tax base transfer benefit means downsizing in Washington always results in property taxes based on the new purchase price, though exemption and deferral programs can mitigate this impact.
          </p>
        </section>

        <section className="mb-12">
          <LeadMagnetCTA
            title="Free: Reverse Mortgage vs Downsizing Personalized Comparison"
            description="Share your home value, age, property tax amount, and goals. We&apos;ll model both scenarios with your actual numbers — including Prop 19 savings for California homeowners."
            href="/contact"
            badge="Free analysis"
            ctaText="Get your personalized comparison"
          />
        </section>

        {/* The HECM for Purchase Option */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            The Third Option: HECM for Purchase (Combine Downsizing + Reverse Mortgage)
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            A HECM for Purchase is a hybrid strategy that combines the benefits of both downsizing and a reverse mortgage. You sell your current home, use a portion of the proceeds as a large down payment on a replacement home, and finance the remainder with a reverse mortgage. The result: you move to a home that better suits your needs, have no monthly mortgage payment, and retain a significant portion of your sale proceeds as liquid assets.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            The HECM for Purchase typically requires a down payment of 40-60% of the replacement home&apos;s purchase price, depending on your age and current interest rates. Older borrowers qualify for smaller down payments because the HECM provides a larger percentage of the home value.
          </p>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg my-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">HECM for Purchase: Example Scenario</h3>
            <ol className="list-decimal pl-5 space-y-2 text-slate-700">
              <li><strong>Sell current home:</strong> $1,000,000 &rarr; net proceeds ~$920,000</li>
              <li><strong>Buy replacement home:</strong> $600,000</li>
              <li><strong>HECM for Purchase down payment (50%):</strong> $300,000</li>
              <li><strong>HECM finances remaining:</strong> $300,000 (no monthly payment)</li>
              <li><strong>Cash retained:</strong> $920,000 &minus; $300,000 = $620,000 in liquid assets</li>
              <li><strong>Monthly cost:</strong> Property taxes + insurance only (no mortgage payment)</li>
              <li><strong>CA Prop 19 bonus:</strong> Transfer old property tax base to new home</li>
            </ol>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            This strategy is particularly powerful for California seniors who can use Prop 19 to transfer their property tax base while also establishing a reverse mortgage on the new property. Learn more about this option in our <Link href="/blog/hecm-for-purchase-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">HECM for Purchase guide</Link>.
          </p>
        </section>

        {/* Emotional and Lifestyle Factors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Beyond the Numbers: Emotional and Lifestyle Factors That Shape This Decision
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Financial analysis tells part of the story. Based on Mo Abdel&apos;s experience counseling hundreds of California and Washington seniors through this decision, the emotional factors often outweigh the financial ones. Here are the non-financial considerations that matter most:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-emerald-800 mb-3">Reasons Seniors Stay (Reverse Mortgage)</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Decades of memories</strong> tied to the home and neighborhood</li>
                <li><strong>Proximity to family,</strong> friends, doctors, and places of worship</li>
                <li><strong>Established routines</strong> and familiar surroundings reduce anxiety</li>
                <li><strong>Home modifications</strong> already completed for aging in place</li>
                <li><strong>Spouse buried nearby</strong> or emotional ties to the community</li>
                <li><strong>Fear of the unknown</strong> &mdash; new neighborhood, new neighbors</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Reasons Seniors Move (Downsizing)</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Home is too large</strong> for one or two people to maintain</li>
                <li><strong>Stairs, yard work,</strong> and maintenance are becoming burdensome</li>
                <li><strong>Want to be closer to adult children</strong> who moved away</li>
                <li><strong>Desire a fresh start</strong> in a senior-friendly community</li>
                <li><strong>Safety concerns</strong> with an aging or isolated property</li>
                <li><strong>Financial freedom</strong> of debt-free cash from the sale</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Break-Even Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Break-Even Analysis: When Does a Reverse Mortgage Become More Expensive Than Downsizing?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The break-even point is the moment when the total cost of a reverse mortgage (cumulative interest + MIP + fees) exceeds the one-time cost of downsizing (commissions + closing costs + moving). Before this point, the reverse mortgage is cheaper. After this point, downsizing would have been the better financial decision.
          </p>

          <ol className="space-y-3 text-slate-600 mb-6">
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">1</span>
              <span><strong>Years 1-3:</strong> Reverse mortgage is less expensive. Upfront costs are lower than selling costs, and cumulative interest is still small. If you know you&apos;ll stay only 1-3 years, other alternatives (HELOC, home equity loan) are typically more cost-effective than either HECM or downsizing.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">2</span>
              <span><strong>Years 4-7:</strong> The crossover zone. Depending on interest rates and how much you draw, the cumulative HECM cost begins approaching the one-time downsizing cost. Most scenarios reach break-even during this window.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">3</span>
              <span><strong>Years 8-15:</strong> The reverse mortgage becomes increasingly expensive as compound interest accelerates. Downsizing would have been cheaper from a purely financial perspective. However, the reverse mortgage&apos;s non-payment feature and aging-in-place benefit have significant non-financial value during these years.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">4</span>
              <span><strong>Years 15+:</strong> The HECM loan balance may approach or exceed the home&apos;s value, but non-recourse protection means you (or heirs) never owe more than the home is worth. The cost differential is significant, but so is 15+ years of living in your chosen home without mortgage payments.</span>
            </li>
          </ol>

          <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg my-8">
            <h3 className="text-lg font-bold text-amber-800 mb-3">Critical Insight: The Line of Credit Growth Feature</h3>
            <p className="text-slate-700">
              If you establish a HECM line of credit and do <strong>not</strong> draw on it immediately, the unused credit grows at the same rate as the loan&apos;s interest rate. This growth feature is unique to HECMs and creates a financial safety net that increases in value over time. A $300,000 line of credit established at age 65 could grow to $500,000+ by age 80 without any draws. This optionality has significant value that is difficult to replicate through downsizing, and it is the primary reason financial planners increasingly recommend establishing a HECM early in retirement as a strategic reserve.
            </p>
          </div>
        </section>

        {/* Who Should Stay vs Who Should Move */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Decision Framework: Who Should Stay and Who Should Move?
          </h2>

          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg my-8">
            <h3 className="text-lg font-bold text-emerald-800 mb-3">Choose a Reverse Mortgage If You:</h3>
            <ol className="list-decimal pl-5 space-y-2 text-slate-700">
              <li>Are deeply attached to your home and neighborhood</li>
              <li>Plan to live in the home for 10+ years</li>
              <li>Cannot qualify for a mortgage on a replacement property</li>
              <li>Want no monthly mortgage payment obligation</li>
              <li>Have a home valued at or below the HECM limit ($1,209,750)</li>
              <li>Value the line of credit growth feature as a long-term safety net</li>
              <li>Do not have a low Prop 13 tax base that Prop 19 would preserve (or are in WA)</li>
            </ol>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-8">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Choose Downsizing If You:</h3>
            <ol className="list-decimal pl-5 space-y-2 text-slate-700">
              <li>Are open to or excited about a lifestyle change</li>
              <li>Have a home that is too large, too old, or too difficult to maintain</li>
              <li>Want maximum access to equity with no ongoing debt</li>
              <li>Have a CA Prop 13 tax base that Prop 19 can transfer to a new home</li>
              <li>Own a high-value home ($1.5M+) where HECM limits reduce the benefit</li>
              <li>Want to preserve maximum inheritance for heirs</li>
              <li>Want to move closer to family, medical facilities, or a senior community</li>
            </ol>
          </div>

          <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg my-8">
            <h3 className="text-lg font-bold text-purple-800 mb-3">Consider HECM for Purchase If You:</h3>
            <ol className="list-decimal pl-5 space-y-2 text-slate-700">
              <li>Want to downsize AND have no monthly mortgage payment</li>
              <li>Can make a 40-60% down payment on the replacement home</li>
              <li>Want to retain significant liquid assets from the sale</li>
              <li>Qualify for Prop 19 tax base transfer (CA seniors 55+)</li>
              <li>Are age 62 or older and eligible for a HECM</li>
            </ol>
          </div>
        </section>

        {/* PAA Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask: Reverse Mortgage vs Downsizing for Seniors
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Is it better to sell your home or get a reverse mortgage?</h3>
              <p className="text-slate-600"><strong>Selling provides more total equity access and eliminates debt, while a reverse mortgage lets you stay home with no monthly payments.</strong> The financial answer depends on home value, your age, how long you plan to stay, and whether Prop 19 applies. Consult a mortgage broker who can model both scenarios with your numbers.</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">How much money do you actually get from a reverse mortgage?</h3>
              <p className="text-slate-600"><strong>At age 70, a HECM reverse mortgage typically provides 45-55% of your home&apos;s value (up to the $1,209,750 lending limit) minus upfront costs.</strong> The exact amount depends on your age, interest rates, and property value. Older borrowers receive a higher percentage. A reverse mortgage calculator provides personalized estimates.</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">What is the downside of downsizing as a senior?</h3>
              <p className="text-slate-600"><strong>The primary downsides are emotional disruption, moving costs, and losing neighborhood connections that took decades to build.</strong> Physical moving is stressful for older adults. Transaction costs consume 7-9% of the sale price. Finding suitable replacement housing in competitive markets adds pressure and timeline uncertainty.</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Can I get a reverse mortgage and then sell my house later?</h3>
              <p className="text-slate-600"><strong>Yes, you can sell your home at any time with a reverse mortgage and keep any equity above the HECM balance.</strong> There is no prepayment penalty on HECM loans. If home values have increased, you may net a significant amount even after repaying the loan balance. This provides flexibility to change your mind later.</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Does Prop 19 apply to reverse mortgage borrowers?</h3>
              <p className="text-slate-600"><strong>Prop 19 applies when you sell your home and buy a replacement, so it is relevant to downsizing but not to staying with a reverse mortgage.</strong> If you have a HECM and later decide to sell, you can use Prop 19 at that point. The benefit applies to the sale/purchase transaction, not the reverse mortgage itself.</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">What is HECM for Purchase and how does it combine both options?</h3>
              <p className="text-slate-600"><strong>HECM for Purchase lets you sell your current home, buy a smaller one with a large down payment, and finance the rest with a reverse mortgage requiring no monthly payments.</strong> This combines downsizing&apos;s equity access with the reverse mortgage&apos;s no-payment benefit. Typically requires 40-60% down payment on the new home.</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">How long does it take to get a reverse mortgage vs selling a home?</h3>
              <p className="text-slate-600"><strong>A reverse mortgage closes in 30-60 days from application. Selling and downsizing takes 60-120 days including listing, negotiation, closing, and moving.</strong> If you need funds quickly, a reverse mortgage provides faster access. The HECM process includes mandatory HUD counseling, which adds time but protects the borrower.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions: Reverse Mortgage vs Downsizing 2026
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
            Expert Summary: This Decision Deserves a Personalized Analysis, Not a Generic Answer
          </h2>
          <p className="text-lg text-emerald-100 mb-4 max-w-3xl mx-auto">
            The reverse mortgage vs downsizing question has no universal answer. A California senior with a $1.5M home and a 1988 Prop 13 tax base faces a completely different calculation than a Washington senior with a $700,000 home and no tax base transfer option. Your age, health, family situation, income, and emotional attachment to your home all factor into the right decision.
          </p>
          <p className="text-lg text-emerald-100 mb-6 max-w-3xl mx-auto">
            Mo Abdel at Lumin Lending models both scenarios &mdash; reverse mortgage, downsizing, and HECM for Purchase &mdash; using your actual home value, property tax basis, age, and financial goals. No sales pressure. No predetermined answer. Just clear numbers and honest guidance so you can make the most important financial decision of your retirement with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4">
                Get Your Personalized Comparison
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
          <h3 className="font-semibold text-slate-900 mb-4">Related Reverse Mortgage &amp; Senior Equity Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/what-is-reverse-mortgage-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; What Is a Reverse Mortgage? Complete 2026 Guide
            </Link>
            <Link href="/blog/reverse-mortgage-calculator-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; Reverse Mortgage Calculator 2026
            </Link>
            <Link href="/blog/reverse-mortgage-alternatives-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; 8 Reverse Mortgage Alternatives for Seniors
            </Link>
            <Link href="/blog/hecm-for-purchase-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; HECM for Purchase: Buy a Home with a Reverse Mortgage
            </Link>
            <Link href="/blog/proprietary-reverse-mortgage-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; Proprietary (Jumbo) Reverse Mortgage Guide
            </Link>
            <Link href="/blog/hecm-pros-cons-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; HECM Pros and Cons: Complete Analysis
            </Link>
          </div>
        </section>

        {/* Compliance Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p>
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial advice. Reverse mortgage borrowers must be 62 years or older and must complete HUD-approved counseling before obtaining a HECM. HECM loan proceeds, interest rates, and qualification amounts are estimates and vary by lender, borrower age, and market conditions. HECM for Purchase requires borrower to be age 62+. California Proposition 19 property tax base transfer rules are subject to county assessor interpretation and may have additional requirements. Washington property tax exemption and deferral program eligibility varies by county and income. Selling costs, downsizing proceeds, and financial scenario comparisons are illustrative estimates and actual results vary based on market conditions, transaction details, and individual circumstances. This material is not from HUD or FHA and has not been approved by HUD or a government agency. Consult a licensed mortgage broker, tax advisor, and real estate attorney for personalized guidance. Mo Abdel, NMLS #1426884, is licensed in California and Washington.
          </p>
        </section>
      </article>
    </div>
  );
}
