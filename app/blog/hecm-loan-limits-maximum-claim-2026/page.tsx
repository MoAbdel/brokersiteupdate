import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Shield, AlertCircle, DollarSign, TrendingUp, HelpCircle, BookOpen, Scale, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LeadMagnetCTA } from '@/components/lead-magnets/LeadMagnetCTA';

export const metadata: Metadata = {
  title: 'HECM Loan Limits & Maximum Claim Amount [2026] | Mo Abdel',
  description: 'HECM loan limits 2026: the FHA lending limit is $1,209,750. Learn how the Maximum Claim Amount, Principal Limit Factors, and interest rates determine your reverse mortgage proceeds. NMLS #1426884.',
  keywords: [
    'HECM loan limits 2026',
    'reverse mortgage maximum claim amount',
    'HECM lending limit',
    'FHA reverse mortgage limits',
    'HECM principal limit factors',
    'reverse mortgage proceeds calculator',
    'HECM MCA 2026',
    'reverse mortgage loan amount',
    'HECM PLF table',
    'jumbo reverse mortgage limits',
  ],
  openGraph: {
    title: 'HECM Loan Limits & Maximum Claim Amount [2026]',
    description: 'The 2026 HECM lending limit is $1,209,750. Understand how MCA, Principal Limit Factors, and interest rates determine your reverse mortgage proceeds.',
    url: 'https://www.mothebroker.com/blog/hecm-loan-limits-maximum-claim-2026',
    siteName: 'Mo Abdel - Reverse Mortgage Specialist',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-20T00:00:00Z',
    modifiedTime: '2026-02-20T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/hecm-loan-limits-maximum-claim-2026',
  },
};

const faqData = [
  {
    question: "What is the HECM loan limit for 2026?",
    answer: "The 2026 HECM lending limit is $1,209,750, which matches the FHA high-cost area conforming loan limit. This ceiling applies nationwide to all HECM reverse mortgages regardless of local housing prices. Homeowners with properties valued above this limit can access equity only up to $1,209,750 through HECM, or consider proprietary (jumbo) reverse mortgage products for the full appraised value."
  },
  {
    question: "What is the Maximum Claim Amount on a reverse mortgage?",
    answer: "The Maximum Claim Amount (MCA) is the lesser of your home's appraised value or the FHA lending limit ($1,209,750 in 2026). The MCA serves as the base figure from which your available loan proceeds are calculated. If your home appraises at $900,000, your MCA is $900,000. If your home appraises at $1,500,000, your MCA is capped at $1,209,750."
  },
  {
    question: "How are HECM proceeds calculated from the Maximum Claim Amount?",
    answer: "HECM proceeds are calculated by multiplying the Maximum Claim Amount by the Principal Limit Factor (PLF), then subtracting closing costs, existing mortgage payoffs, and the initial mortgage insurance premium. The PLF is determined by the youngest borrower's age and the expected interest rate at closing. The result is your net available proceeds."
  },
  {
    question: "What is a Principal Limit Factor and how does it affect my reverse mortgage?",
    answer: "The Principal Limit Factor (PLF) is a percentage set by HUD that determines how much of your Maximum Claim Amount you can access. PLFs increase with borrower age and decrease with higher interest rates. A 72-year-old at a lower expected rate might have a PLF near 52%, while the same borrower at a higher rate might see a PLF near 43%. HUD publishes PLF tables that lenders use for every HECM calculation."
  },
  {
    question: "Does the HECM limit change every year?",
    answer: "The HECM lending limit is tied to the FHA conforming loan limit, which the Federal Housing Finance Agency adjusts annually based on home price changes. The limit increased from $1,149,825 in 2024 to $1,209,750 in 2025, and remains at $1,209,750 for 2026. Any future increases depend on national home price appreciation as measured by the FHFA House Price Index."
  },
  {
    question: "What happens if my home is worth more than the HECM limit?",
    answer: "If your home exceeds the $1,209,750 HECM limit, your Maximum Claim Amount is capped at $1,209,750 and proceeds are calculated from that cap. You retain full ownership of the excess equity. For homeowners wanting to access equity above the HECM ceiling, proprietary (jumbo) reverse mortgages are available for homes valued up to $10 million with no FHA lending limit restriction."
  },
  {
    question: "How does borrower age affect HECM loan proceeds?",
    answer: "Older borrowers receive higher Principal Limit Factors, which means access to a larger percentage of the Maximum Claim Amount. A 62-year-old might access approximately 38-42% of the MCA, while an 80-year-old might access 53-58% of the MCA. The youngest borrower or eligible non-borrowing spouse's age determines the PLF for the entire loan."
  },
  {
    question: "How do interest rates affect HECM proceeds?",
    answer: "Higher expected interest rates reduce the Principal Limit Factor, which reduces available proceeds. Lower expected interest rates increase the PLF, providing access to more equity. The expected rate is based on the 10-year swap rate or SOFR index plus the lender margin. Even small rate changes can shift proceeds by thousands of dollars, making rate timing a significant factor in reverse mortgage planning."
  },
  {
    question: "What is the difference between HECM and proprietary reverse mortgage limits?",
    answer: "HECM reverse mortgages are capped at the FHA lending limit of $1,209,750 regardless of home value. Proprietary (jumbo) reverse mortgages have no federal cap and can accommodate home values up to $10 million or more, depending on the lender. HECM loans carry FHA mortgage insurance and non-recourse protections. Proprietary loans offer higher limits but may have different terms and protections."
  },
  {
    question: "Can a married couple get more from a HECM than an individual?",
    answer: "The loan amount is based on the youngest borrower's or eligible non-borrowing spouse's age, so having a younger spouse reduces available proceeds. However, both spouses being on the loan provides critical protections: if one spouse passes away, the surviving co-borrower continues living in the home with no repayment required. Non-borrowing spouse protections also exist but have stricter requirements."
  },
  {
    question: "What costs are deducted from HECM proceeds before I receive funds?",
    answer: "Costs deducted from gross HECM proceeds include the initial FHA mortgage insurance premium (2% of the MCA), origination fee (capped by FHA based on home value), third-party closing costs (appraisal, title, recording fees), and any existing mortgage balance that must be paid off. Most costs can be financed into the loan rather than paid out of pocket."
  },
  {
    question: "Is the HECM limit the same in every state?",
    answer: "Yes. Unlike conventional FHA forward mortgages that have county-level limits, the HECM lending limit is a single nationwide ceiling of $1,209,750 for 2026. Whether you live in a high-cost California coastal market or a lower-cost inland area, the same HECM cap applies. This nationwide uniformity simplifies the program but means high-value homeowners in expensive markets are more likely to hit the cap."
  }
];

export default function HECMLoanLimitsMaximumClaim2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "HECM Loan Limits & Maximum Claim Amount [2026]",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "jobTitle": "Mortgage Broker & Reverse Mortgage Specialist",
              "knowsAbout": ["HECM Reverse Mortgages", "Maximum Claim Amount", "Principal Limit Factors", "FHA Lending Limits", "Proprietary Reverse Mortgages", "Senior Home Equity"],
              "worksFor": {
                "@type": "Organization",
                "name": "Lumin Lending",
                "identifier": "NMLS #2716106"
              }
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
              "@id": "https://www.mothebroker.com/blog/hecm-loan-limits-maximum-claim-2026",
              "significantLink": [
                "https://www.hud.gov/program_offices/housing/sfh/hecm",
                "https://www.consumerfinance.gov/consumer-tools/reverse-mortgages/"
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mothebroker.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mothebroker.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "Reverse Mortgages", "item": "https://www.mothebroker.com/reverse-mortgages" },
              { "@type": "ListItem", "position": 4, "name": "HECM Loan Limits & Maximum Claim Amount 2026" }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-slate-500/20 rounded-full px-4 py-1.5 mb-6 border border-blue-500/30">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">HECM Reverse Mortgage</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              HECM Loan Limits &amp; Maximum Claim Amount [2026]
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              According to Mo Abdel, NMLS #1426884, the 2026 HECM lending limit stands at $1,209,750 &mdash; matching the FHA high-cost conforming ceiling. The Maximum Claim Amount determines your reverse mortgage base, the Principal Limit Factor sets the percentage you can access, and the expected interest rate moves those proceeds up or down by tens of thousands of dollars. In our California and Washington closings, understanding these three variables separates borrowers who maximize their equity access from those who leave significant proceeds on the table.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get HECM Proceeds Estimate
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
          <span className="text-gray-900">HECM Loan Limits &amp; Maximum Claim Amount 2026</span>
        </nav>

        {/* HUD/FHA Disclaimer */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-10 not-prose">
          <p className="text-sm text-amber-900">
            <strong>Important Notice:</strong> This material is not provided by, nor was it approved by, the Department of Housing &amp; Urban Development (HUD) or by the Federal Housing Administration (FHA). This is not a government agency publication.
          </p>
        </div>

        {/* Bing Power Block - Key Facts */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              2026 HECM Loan Limits: Key Facts at a Glance
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <p className="text-sm text-slate-600">FHA Lending Limit (2026)</p>
                <p className="text-2xl font-bold text-blue-700">$1,209,750</p>
                <p className="text-xs text-slate-500 mt-1">Nationwide HECM ceiling</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <p className="text-sm text-slate-600">Maximum Claim Amount</p>
                <p className="text-2xl font-bold text-blue-700">Lesser Of</p>
                <p className="text-xs text-slate-500 mt-1">Appraised value or FHA limit</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <p className="text-sm text-slate-600">PLF Determinants</p>
                <p className="text-2xl font-bold text-blue-700">Age + Rate</p>
                <p className="text-xs text-slate-500 mt-1">Youngest borrower&apos;s age &amp; expected rate</p>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              <strong>Semantic triples:</strong> The HECM lending limit <em>equals</em> the FHA high-cost conforming ceiling. The Maximum Claim Amount <em>is the lesser of</em> appraised value or FHA lending limit. The Principal Limit Factor <em>is determined by</em> borrower age and expected interest rate.
            </p>
          </div>
        </section>

        {/* E-E-A-T Narrative: How the HECM Lending Limit Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How the HECM Lending Limit Works in 2026
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The Home Equity Conversion Mortgage (HECM) is the only federally insured reverse mortgage program in the United States. Administered by FHA under HUD, the HECM program sets a single nationwide lending limit that serves as the maximum home value the program will recognize when calculating available proceeds. For 2026, that ceiling is $1,209,750.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            Unlike conventional FHA forward mortgages that use county-level limits based on local median home prices, the HECM program applies one uniform cap across every county in every state. This means a homeowner in Newport Beach, California faces the same $1,209,750 ceiling as a homeowner in Bellevue, Washington or a homeowner in rural Iowa. The Federal Housing Finance Agency (FHFA) sets the conforming loan limit annually based on the FHFA House Price Index, and the HECM ceiling tracks the high-cost area conforming limit.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            In our California and Washington closings, this cap is the single most frequent question borrowers ask. California coastal homeowners in particular often own properties valued well above $1,209,750, which means the HECM program recognizes only a portion of their total equity. Understanding this cap &mdash; and the alternatives available when it applies &mdash; is the foundation of effective reverse mortgage planning.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              HECM Lending Limit History (2020&ndash;2026)
            </h3>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Year</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">HECM Lending Limit</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Year-Over-Year Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700">2020</td>
                    <td className="px-4 py-3 text-sm text-slate-700">$765,600</td>
                    <td className="px-4 py-3 text-sm text-slate-500">&mdash;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700">2021</td>
                    <td className="px-4 py-3 text-sm text-slate-700">$822,375</td>
                    <td className="px-4 py-3 text-sm text-green-600">+$56,775 (+7.4%)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700">2022</td>
                    <td className="px-4 py-3 text-sm text-slate-700">$970,800</td>
                    <td className="px-4 py-3 text-sm text-green-600">+$148,425 (+18.0%)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700">2023</td>
                    <td className="px-4 py-3 text-sm text-slate-700">$1,089,300</td>
                    <td className="px-4 py-3 text-sm text-green-600">+$118,500 (+12.2%)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700">2024</td>
                    <td className="px-4 py-3 text-sm text-slate-700">$1,149,825</td>
                    <td className="px-4 py-3 text-sm text-green-600">+$60,525 (+5.6%)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700">2025</td>
                    <td className="px-4 py-3 text-sm text-slate-700">$1,209,750</td>
                    <td className="px-4 py-3 text-sm text-green-600">+$59,925 (+5.2%)</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-4 py-3 text-sm font-bold text-blue-800">2026</td>
                    <td className="px-4 py-3 text-sm font-bold text-blue-800">$1,209,750</td>
                    <td className="px-4 py-3 text-sm text-blue-600">$0 (unchanged)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-3">Source: Federal Housing Finance Agency conforming loan limit announcements. HECM ceiling tracks the high-cost area limit.</p>
          </div>
        </section>

        {/* Maximum Claim Amount Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Maximum Claim Amount (MCA): The Foundation of Your HECM Calculation
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The Maximum Claim Amount is the single most important number in any HECM transaction. It establishes the base from which every dollar of your available proceeds is calculated. The formula is straightforward: the MCA equals the lesser of your home&apos;s appraised value or the current FHA lending limit ($1,209,750 for 2026).
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4">MCA Calculation: Three Real Scenarios</h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <p className="font-medium text-slate-900">Home appraised at $750,000</p>
                  <p className="text-slate-600">MCA = $750,000 (appraised value is below the FHA limit, so the full value applies)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <p className="font-medium text-slate-900">Home appraised at $1,209,750</p>
                  <p className="text-slate-600">MCA = $1,209,750 (appraised value exactly matches the FHA limit)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <p className="font-medium text-slate-900">Home appraised at $2,000,000</p>
                  <p className="text-slate-600">MCA = $1,209,750 (appraised value exceeds the FHA limit, so the cap applies &mdash; $790,250 of equity is not accessible via HECM)</p>
                </div>
              </li>
            </ol>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            In our California and Washington closings, we see all three scenarios regularly. Coastal Orange County and Seattle Eastside homeowners frequently own properties worth $1.5M to $4M+, which means the HECM cap limits their available proceeds. For these borrowers, a proprietary reverse mortgage often unlocks significantly more equity. Inland and suburban homeowners more often fall below the $1,209,750 ceiling, making HECM the straightforward choice.
          </p>
        </section>

        <section className="mb-12">
          <LeadMagnetCTA
            title="Free: Personalized HECM Proceeds Estimate"
            description="Share your home value, age, and goals. We&apos;ll calculate your Maximum Claim Amount, estimated Principal Limit Factor, and net proceeds from 200+ wholesale lenders."
            href="/contact"
            badge="Free HECM analysis"
            ctaText="Request your estimate"
          />
        </section>

        {/* Principal Limit Factors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Principal Limit Factors: How Age &amp; Interest Rate Determine Your Proceeds
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Once the Maximum Claim Amount is established, HUD applies a Principal Limit Factor (PLF) to determine the gross amount available to the borrower. The PLF is a percentage that HUD calculates using two variables: the age of the youngest borrower (or eligible non-borrowing spouse) and the expected interest rate at the time of loan closing.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            The logic is actuarial. Older borrowers have shorter expected loan durations, so FHA can offer a higher percentage of the MCA. Lower expected interest rates reduce the projected loan balance growth, allowing FHA to offer more upfront. The combination of these two factors produces the PLF, which HUD publishes in detailed lookup tables used by every HECM lender.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Age of Youngest Borrower</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-slate-900">PLF Range (Approx.)</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-slate-900">Est. Gross Proceeds on $1M MCA</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-slate-900">Est. Gross Proceeds on $600K MCA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-700">62</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">38%&ndash;42%</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">$380,000&ndash;$420,000</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">$228,000&ndash;$252,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-700">65</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">40%&ndash;45%</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">$400,000&ndash;$450,000</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">$240,000&ndash;$270,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-700">70</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">44%&ndash;50%</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">$440,000&ndash;$500,000</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">$264,000&ndash;$300,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-700">75</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">48%&ndash;55%</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">$480,000&ndash;$550,000</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">$288,000&ndash;$330,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-700">80</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">53%&ndash;58%</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">$530,000&ndash;$580,000</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">$318,000&ndash;$348,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-700">85</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">56%&ndash;62%</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">$560,000&ndash;$620,000</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">$336,000&ndash;$372,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-700">90+</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">60%&ndash;66%</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">$600,000&ndash;$660,000</td>
                  <td className="px-4 py-3 text-sm text-center text-slate-700">$360,000&ndash;$396,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 italic mb-6">
            PLF ranges reflect typical 2026 expected interest rate environments. Actual PLF depends on exact expected rate at closing. These are gross proceeds before closing costs and existing mortgage payoff. Contact a licensed loan officer for personalized calculations.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            In our California and Washington closings, we run HECM scenarios at multiple expected rate points so borrowers see exactly how rate movement affects their bottom line. A borrower who waits for a rate environment shift can sometimes access 5&ndash;10% more of their MCA than if they closed during a higher-rate window.
          </p>
        </section>

        {/* How Interest Rates Affect Proceeds */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Interest Rates Directly Affect HECM Reverse Mortgage Proceeds
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The expected interest rate is the second major variable in the HECM proceeds formula. It is not the rate you pay on the loan &mdash; it is the rate HUD uses to project the loan balance growth over the borrower&apos;s expected remaining tenure. For adjustable-rate HECMs (the most common type), the expected rate equals the 10-year SOFR swap rate plus the lender&apos;s margin. For fixed-rate HECMs, it equals the actual note rate.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            This relationship is inverse: when expected rates rise, PLFs fall and available proceeds decrease. When expected rates decline, PLFs increase and borrowers access more equity. The magnitude of the impact is significant. A 1-percentage-point change in expected rate can shift the PLF by 4&ndash;6 percentage points, which on a $1,000,000 MCA translates to $40,000&ndash;$60,000 in available proceeds.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              Why the Expected Rate Matters: A Practical Example
            </h3>
            <p className="text-slate-700 mb-4">
              <strong>Borrower:</strong> 72-year-old homeowner, home appraised at $1,000,000, MCA = $1,000,000
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <p className="text-sm font-medium text-slate-900">Lower Expected Rate Environment</p>
                <p className="text-slate-600 text-sm mt-2">PLF &asymp; 50% &rarr; Gross proceeds &asymp; $500,000</p>
                <p className="text-slate-600 text-sm">After costs &amp; MIP &rarr; Net &asymp; $465,000&ndash;$475,000</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <p className="text-sm font-medium text-slate-900">Higher Expected Rate Environment</p>
                <p className="text-slate-600 text-sm mt-2">PLF &asymp; 44% &rarr; Gross proceeds &asymp; $440,000</p>
                <p className="text-slate-600 text-sm">After costs &amp; MIP &rarr; Net &asymp; $405,000&ndash;$415,000</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-4">
              <strong>Difference:</strong> approximately $60,000 in net proceeds &mdash; same borrower, same home, different rate environment.
            </p>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            In our California and Washington closings, we monitor expected rate indices daily and alert borrowers when favorable shifts create a window for higher proceeds. Because we access 200+ wholesale lenders, we also compare margins across HECM lenders &mdash; a lower margin directly reduces the expected rate and increases the PLF, even in the same rate environment.
          </p>
        </section>

        {/* From MCA to Net Proceeds - Step by Step */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            From Maximum Claim Amount to Net Proceeds: The Complete HECM Calculation
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Understanding the full proceeds waterfall helps borrowers see exactly where every dollar goes. Here is the step-by-step calculation from MCA to the net amount available to the borrower:
          </p>

          <ol className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <p className="font-medium text-slate-900">Determine the Maximum Claim Amount</p>
                <p className="text-slate-600">Lesser of appraised value or $1,209,750</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <p className="font-medium text-slate-900">Apply the Principal Limit Factor</p>
                <p className="text-slate-600">MCA &times; PLF = Gross Principal Limit (your total available pool)</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <p className="font-medium text-slate-900">Subtract the Initial Mortgage Insurance Premium (IMIP)</p>
                <p className="text-slate-600">2% of the MCA &mdash; this is financed into the loan, not paid out of pocket</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <p className="font-medium text-slate-900">Subtract Closing Costs</p>
                <p className="text-slate-600">Origination fee (FHA-capped), appraisal, title, recording &mdash; typically financed into the loan</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <div>
                <p className="font-medium text-slate-900">Pay Off Any Existing Mortgage or Liens</p>
                <p className="text-slate-600">Mandatory &mdash; all existing liens on the property must be cleared at closing</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
              <div>
                <p className="font-medium text-slate-900">Remaining Balance = Your Net Available Proceeds</p>
                <p className="text-slate-600">Distributed as lump sum, monthly payments, line of credit, or combination</p>
              </div>
            </li>
          </ol>

          <p className="text-lg text-slate-600 mb-6">
            In our California and Washington closings, we prepare a detailed side-by-side waterfall showing borrowers each deduction so there are no surprises at closing. The transparency of this process is critical &mdash; borrowers deserve to understand exactly how their MCA translates to spendable dollars.
          </p>
        </section>

        {/* HECM vs Proprietary Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            HECM vs Proprietary Reverse Mortgage: Limits &amp; Proceeds Comparison
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            For homeowners with properties valued above the $1,209,750 HECM ceiling, proprietary (jumbo) reverse mortgages offer an alternative path to accessing home equity. The two product types differ in fundamental ways beyond just the lending limit. The comparison below highlights the key distinctions for California and Washington homeowners evaluating both options.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">HECM (FHA-Insured)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Proprietary (Jumbo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Maximum Home Value Recognized</td>
                  <td className="px-4 py-3 text-sm text-slate-700">$1,209,750</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Up to $10M+ (lender-dependent)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">FHA Mortgage Insurance</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Yes (2% IMIP + 0.5% annual)</td>
                  <td className="px-4 py-3 text-sm text-slate-700">No &mdash; no FHA insurance cost</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Non-Recourse Protection</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Yes (FHA-backed)</td>
                  <td className="px-4 py-3 text-sm text-slate-700">Varies by lender (many offer it)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">HUD Counseling Required</td>
                  <td className="px-4 py-3 text-sm text-slate-700">Yes (mandatory)</td>
                  <td className="px-4 py-3 text-sm text-slate-700">Varies (not federally required)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Payout Options</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Lump sum, monthly, LOC, or combo</td>
                  <td className="px-4 py-3 text-sm text-slate-700">Typically lump sum or LOC</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Line of Credit Growth</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">Yes (unused LOC grows over time)</td>
                  <td className="px-4 py-3 text-sm text-slate-700">Not typically available</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Minimum Age</td>
                  <td className="px-4 py-3 text-sm text-slate-700">62</td>
                  <td className="px-4 py-3 text-sm text-slate-700">55&ndash;62 (lender-dependent)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Ideal For</td>
                  <td className="px-4 py-3 text-sm text-slate-700">Homes valued at or below $1,209,750</td>
                  <td className="px-4 py-3 text-sm text-slate-700">High-value homes exceeding HECM ceiling</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 italic mb-6">
            Proprietary reverse mortgage terms vary significantly by lender. Non-recourse status, minimum age, and payout options are lender-specific. Contact a licensed specialist for product-specific details.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            In our California and Washington closings, many homeowners with $2M+ properties evaluate both HECM and proprietary options side by side. The HECM line of credit growth feature is uniquely valuable &mdash; unused credit grows over time regardless of home value changes. Proprietary products access more equity upfront. The right choice depends on whether the borrower prioritizes maximum initial proceeds or long-term credit line growth.
          </p>
        </section>

        {/* PAA Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask: HECM Loan Limits &amp; Maximum Claim Amount
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                What is the HECM lending limit for 2026?
              </h3>
              <p className="text-slate-600">The 2026 HECM lending limit is $1,209,750, matching the FHA high-cost conforming ceiling nationwide.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                How is the Maximum Claim Amount determined?
              </h3>
              <p className="text-slate-600">The MCA equals the lesser of your home&apos;s appraised value or the FHA lending limit of $1,209,750.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                Does borrower age affect HECM loan proceeds?
              </h3>
              <p className="text-slate-600">Yes. Older borrowers receive higher Principal Limit Factors, accessing a larger percentage of the MCA.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                What is a Principal Limit Factor?
              </h3>
              <p className="text-slate-600">The PLF is a HUD-set percentage applied to the MCA, determined by borrower age and expected interest rate.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                Can I get a reverse mortgage on a home worth $2 million?
              </h3>
              <p className="text-slate-600">Yes, through HECM (capped at $1,209,750 MCA) or proprietary jumbo reverse mortgages recognizing full value.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                Do higher interest rates reduce reverse mortgage proceeds?
              </h3>
              <p className="text-slate-600">Yes. Higher expected rates lower PLFs, reducing available proceeds. Lower rates increase accessible equity.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                Is the HECM limit different in California vs other states?
              </h3>
              <p className="text-slate-600">No. The HECM ceiling of $1,209,750 applies uniformly nationwide across all states and counties.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                What costs reduce my HECM proceeds?
              </h3>
              <p className="text-slate-600">FHA mortgage insurance (2% of MCA), origination fee, closing costs, and existing mortgage payoff reduce net proceeds.</p>
            </div>
          </div>
        </section>

        {/* Extended FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions: HECM Loan Limits &amp; Maximum Claim Amount
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
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Expert Summary: Maximizing Your HECM Reverse Mortgage Proceeds
          </h2>
          <p className="text-lg text-blue-100 mb-4 max-w-3xl mx-auto">
            Three variables control your HECM proceeds: the Maximum Claim Amount (capped at $1,209,750 for 2026), the Principal Limit Factor (driven by your age and the expected interest rate), and your existing mortgage balance. Optimizing each variable &mdash; appraising at full market value, timing the rate environment, and shopping lender margins &mdash; can shift net proceeds by tens of thousands of dollars.
          </p>
          <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
            Mo Abdel at Lumin Lending runs HECM scenarios across 200+ wholesale lenders for borrowers in California and Washington, comparing margins, expected rates, and closing cost structures to identify the combination that delivers maximum net proceeds. For homes above the HECM ceiling, proprietary reverse mortgage options provide access to equity that HECM cannot reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-slate-50 px-8 py-4">
                Get Your HECM Proceeds Estimate
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
          <h3 className="font-semibold text-slate-900 mb-4">Related Reverse Mortgage &amp; HECM Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/reverse-mortgage-calculator-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Reverse Mortgage Calculator 2026
            </Link>
            <Link href="/blog/reverse-mortgage-complete-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Complete Reverse Mortgage Guide 2026
            </Link>
            <Link href="/blog/proprietary-reverse-mortgage-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Proprietary (Jumbo) Reverse Mortgages 2026
            </Link>
            <Link href="/blog/reverse-mortgage-california-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Reverse Mortgage California Guide 2026
            </Link>
            <Link href="/blog/reverse-mortgage-washington-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Reverse Mortgage Washington Guide 2026
            </Link>
            <Link href="/blog/hecm-for-purchase-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; HECM for Purchase 2026
            </Link>
          </div>

          <div className="mt-6 text-sm text-slate-500">
            <p className="mb-2"><strong>External Resources:</strong></p>
            <div className="flex flex-col gap-2">
              <a href="https://www.hud.gov/program_offices/housing/sfh/hecm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                HUD.gov &mdash; HECM Program Information
              </a>
              <a href="https://www.consumerfinance.gov/consumer-tools/reverse-mortgages/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                CFPB &mdash; Reverse Mortgage Consumer Guide
              </a>
            </div>
          </div>
        </section>

        {/* Compliance Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p className="mb-4">
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Not all borrowers will qualify. Information is for educational purposes only and does not constitute financial, tax, or legal advice. This material is not provided by, nor was it approved by, the Department of Housing &amp; Urban Development (HUD) or by the Federal Housing Administration (FHA). HECM reverse mortgage proceeds may affect eligibility for certain means-tested government programs. Borrowers must continue to pay property taxes, homeowner&apos;s insurance, and maintain the property. The loan becomes due when the last borrower leaves the home. Principal Limit Factor estimates are approximations based on typical 2026 rate environments and are not guaranteed. Actual proceeds depend on home appraisal, current expected interest rates, borrower age, existing liens, and lender-specific guidelines. Proprietary reverse mortgage terms, protections, and availability vary by lender. Consult a HUD-approved counselor and licensed loan officer for personalized guidance. Mo Abdel, NMLS #1426884, is licensed in California and Washington.
          </p>
        </section>
      </article>
    </div>
  );
}
