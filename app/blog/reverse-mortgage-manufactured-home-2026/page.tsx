import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Home, AlertTriangle, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Reverse Mortgage for Manufactured Homes 2026: FHA Requirements & Eligibility | Mo Abdel',
  description: 'Manufactured homes qualify for HECM reverse mortgages when built after June 15, 1976, on a permanent foundation, and titled as real property. Learn FHA requirements, foundation certification, and proprietary alternatives. NMLS #1426884.',
  keywords: ['reverse mortgage manufactured home', 'manufactured home HECM', 'mobile home reverse mortgage', 'manufactured home FHA requirements', 'reverse mortgage modular home', 'manufactured home equity 2026'],
  openGraph: {
    title: 'Reverse Mortgage for Manufactured Homes 2026: FHA Requirements & Eligibility',
    description: 'Manufactured homes qualify for HECM reverse mortgages when built after June 15, 1976, on a permanent foundation, and titled as real property. Learn FHA requirements, foundation certification, and proprietary alternatives.',
    url: 'https://www.mothebroker.com/blog/reverse-mortgage-manufactured-home-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-25T00:00:00Z',
    modifiedTime: '2026-02-25T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/reverse-mortgage-manufactured-home-2026',
  },
};

const faqData = [
  {
    question: "Can you get a reverse mortgage on a manufactured home?",
    answer: "Yes. Manufactured homes qualify for FHA HECM reverse mortgages when they meet specific requirements: built after June 15, 1976, with a HUD certification label, placed on a permanent foundation with an engineer's certification, a minimum of 400 square feet, classified as real property, and titled with the land. Borrowers must be 62 or older and complete HUD-approved counseling."
  },
  {
    question: "What is the difference between a manufactured home and a mobile home for reverse mortgage purposes?",
    answer: "Homes built after June 15, 1976, are classified as manufactured homes under HUD Code and are eligible for FHA HECM reverse mortgages. Homes built before that date are classified as mobile homes and do not qualify for HECM. The HUD Code established federal construction and safety standards that FHA requires for reverse mortgage eligibility."
  },
  {
    question: "Does a manufactured home need a permanent foundation to get a reverse mortgage?",
    answer: "Yes. FHA HECM requires a permanent foundation that meets HUD Permanent Foundation Guide standards. A licensed structural engineer or registered architect must certify the foundation through a foundation certification report. The home cannot sit on wheels, axles, or a temporary support system. The running gear (wheels, axles, tongue) must be removed."
  },
  {
    question: "Can a single-wide manufactured home qualify for a reverse mortgage?",
    answer: "Yes, single-wide manufactured homes can qualify for HECM if they meet all FHA requirements including the 400 square foot minimum, permanent foundation, HUD certification label, and real property classification. However, single-wide homes face lower appraised values and stricter lender overlays. Double-wide and multi-section manufactured homes typically qualify more easily due to higher values and broader lender acceptance."
  },
  {
    question: "What is the HUD data plate and why does it matter for a manufactured home reverse mortgage?",
    answer: "The HUD data plate is a paper label located inside the home, typically in a kitchen cabinet or utility closet, that lists the manufacturer, serial number, model, date of manufacture, and applicable wind and snow load zones. The HUD certification label (metal tag) is affixed to the exterior. Both must be present and readable for HECM eligibility. Missing or illegible labels require replacement through the Institute for Building Technology and Safety (IBTS)."
  },
  {
    question: "How much equity can I access with a reverse mortgage on a manufactured home?",
    answer: "The equity available depends on the borrower's age, the appraised value of the manufactured home and land, and current interest rates. FHA HECM allows home values up to $1,209,750 in 2026, though most manufactured homes appraise well below that limit. Older borrowers access a higher percentage of the home's value. A HUD-approved counselor and licensed loan officer can calculate your specific available proceeds."
  },
  {
    question: "What if my manufactured home title says 'personal property' instead of 'real property'?",
    answer: "The title must be converted from personal property to real property before HECM closing. This process, called de-titling or retirement of title, involves removing the home from the Department of Motor Vehicles or equivalent state registry and recording it as real property with the county. The home must be titled with the land it sits on. This conversion process varies by state and typically takes 30-90 days."
  },
  {
    question: "Are modular homes eligible for reverse mortgages?",
    answer: "Yes. Modular homes are built to local building codes (not HUD Code) and are classified as site-built construction once assembled on a permanent foundation. They qualify for HECM reverse mortgages under the same guidelines as traditional site-built homes, without the additional manufactured home requirements. Modular homes do not need HUD certification labels or separate foundation certification."
  },
  {
    question: "Can I get a proprietary reverse mortgage on a manufactured home that does not qualify for HECM?",
    answer: "Some proprietary reverse mortgage lenders accept manufactured homes that do not meet all FHA HECM requirements. Proprietary programs are private-label products not insured by FHA, so they set their own eligibility criteria. However, availability is limited and terms vary significantly. A wholesale broker with access to 200+ lenders can identify proprietary options when HECM eligibility is not achievable."
  },
  {
    question: "How does the appraisal process differ for a manufactured home reverse mortgage?",
    answer: "Manufactured home HECM appraisals require the appraiser to verify the HUD certification label, confirm the permanent foundation, document the home's condition, and use comparable sales of similar manufactured homes. Finding comparable sales is often more challenging than for site-built homes, which can affect the appraised value. The appraiser must also confirm the home meets minimum property standards including adequate roof life, functional systems, and structural integrity."
  },
  {
    question: "Do I still own my manufactured home with a reverse mortgage?",
    answer: "Yes. You retain full ownership of the manufactured home and the land. A reverse mortgage is a loan secured by the property, not a sale. You continue to live in the home, maintain it, pay property taxes, and keep homeowner's insurance current. The loan balance becomes due when the last borrower permanently leaves the home, sells the property, or passes away."
  },
  {
    question: "What are the ongoing obligations with a reverse mortgage on a manufactured home?",
    answer: "Borrowers must maintain the manufactured home in good condition, pay property taxes on time, keep hazard insurance current, occupy the home as a primary residence, and comply with any HOA or community requirements. Failure to meet these obligations can trigger a loan default. Manufactured home borrowers should budget specifically for roof maintenance, skirting repair, and HVAC upkeep to maintain property condition standards."
  }
];

export default function ReverseMortgageManufacturedHome2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Reverse Mortgage for Manufactured Homes 2026: FHA Requirements & Eligibility",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["Reverse Mortgages", "HECM", "Manufactured Home Financing", "FHA Requirements", "Wholesale Mortgage Lending"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "identifier": "NMLS #2716106",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-02-25",
            "dateModified": "2026-02-25",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/reverse-mortgage-manufactured-home-2026",
              "significantLink": [
                "https://www.hud.gov/",
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
                "name": "Reverse Mortgage for Manufactured Homes 2026",
                "item": "https://www.mothebroker.com/blog/reverse-mortgage-manufactured-home-2026"
              }
            ]
          })
        }}
      />

      {/* Schema Markup - Speakable */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".speakable-summary", ".speakable-hook"]
            },
            "url": "https://www.mothebroker.com/blog/reverse-mortgage-manufactured-home-2026"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-slate-500/20 rounded-full px-4 py-1.5 mb-6 border border-blue-500/30">
              <Home className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">HECM Reverse Mortgages &mdash; Manufactured Home Eligibility</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reverse Mortgage for Manufactured Homes in 2026: FHA Requirements &amp; Eligibility
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed speakable-hook">
              According to Mo Abdel, NMLS #1426884, manufactured homes built after June 15, 1976, on a permanent foundation and titled as real property qualify for FHA HECM reverse mortgages &mdash; allowing homeowners 62 and older to convert equity into proceeds that are generally not considered taxable income (consult your tax advisor).
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Check Manufactured Home Eligibility
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
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Section 1: Citation Hook */}
        <section className="mb-12">
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Manufactured homes represent one of the most affordable homeownership paths in California and Washington, yet many owners aged 62 and older assume their manufactured home does not qualify for a reverse mortgage. That assumption costs homeowners access to equity they have built over decades. FHA&apos;s Home Equity Conversion Mortgage (HECM) program does accept manufactured homes &mdash; provided the property meets specific construction, foundation, and titling requirements established by <a href="https://www.hud.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">HUD</a>.
          </p>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Mo Abdel, NMLS #1426884, at Lumin Lending (NMLS #2716106) has guided manufactured homeowners through the HECM eligibility process across California and Washington. The three facts that determine eligibility are straightforward: the home must be built after June 15, 1976 (the date HUD Code took effect), it must sit on a permanent foundation with an engineer&apos;s certification, and it must be classified and titled as real property &mdash; not personal property.
          </p>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            When a manufactured home meets these three criteria, the HECM application process mirrors a site-built home with additional documentation for foundation certification and HUD label verification. When the home does not meet FHA requirements, proprietary reverse mortgage programs through wholesale channels provide alternative options that are not available at retail banks.
          </p>

          {/* Semantic Triples + Eligibility Requirements Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left">FHA HECM Requirement</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Manufactured Home Standard</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Documentation Required</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Construction Date</td>
                  <td className="border border-slate-200 px-4 py-3">Built after June 15, 1976</td>
                  <td className="border border-slate-200 px-4 py-3">HUD Data Plate &amp; Certification Label</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Foundation Type</td>
                  <td className="border border-slate-200 px-4 py-3">Permanent foundation per HUD guidelines</td>
                  <td className="border border-slate-200 px-4 py-3">Engineer&apos;s Foundation Certification Report</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Minimum Floor Area</td>
                  <td className="border border-slate-200 px-4 py-3">400 square feet minimum</td>
                  <td className="border border-slate-200 px-4 py-3">Appraisal measurement verification</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Property Classification</td>
                  <td className="border border-slate-200 px-4 py-3">Real property (not personal property)</td>
                  <td className="border border-slate-200 px-4 py-3">County recorded deed with land</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">HUD Labels</td>
                  <td className="border border-slate-200 px-4 py-3">Certification label &amp; data plate intact</td>
                  <td className="border border-slate-200 px-4 py-3">Physical verification by appraiser</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Running Gear</td>
                  <td className="border border-slate-200 px-4 py-3">Wheels, axles, tongue removed</td>
                  <td className="border border-slate-200 px-4 py-3">Foundation engineer confirmation</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Borrower Age</td>
                  <td className="border border-slate-200 px-4 py-3">62 years or older</td>
                  <td className="border border-slate-200 px-4 py-3">Government-issued identification</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Counseling</td>
                  <td className="border border-slate-200 px-4 py-3">HUD-approved HECM counseling completed</td>
                  <td className="border border-slate-200 px-4 py-3">Counseling certificate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Bing Power Block */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Reverse Mortgage for Manufactured Homes: FHA Eligibility Requirements
          </h2>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            FHA&apos;s HECM program applies stricter eligibility standards to manufactured homes than to site-built properties. These additional requirements exist because manufactured homes have unique construction, foundation, and titling characteristics that affect long-term structural integrity and collateral value. Understanding each requirement before applying eliminates surprises during underwriting.
          </p>

          {/* Numbered Eligibility Checklist */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Manufactured Home HECM Eligibility Checklist</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700"><strong>1. Built after June 15, 1976:</strong> This is the date the HUD Manufactured Home Construction and Safety Standards (HUD Code) took effect. Homes built before this date are classified as mobile homes and are permanently ineligible for FHA HECM. There are no exceptions or waivers to this date requirement.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700"><strong>2. HUD Certification Label (metal tag) present:</strong> A red metal tag affixed to the exterior of each section of the home displaying the HUD certification number. Double-wide homes have two labels. If missing, contact the Institute for Building Technology and Safety (IBTS) for replacement label verification.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700"><strong>3. HUD Data Plate present:</strong> A paper label inside the home (typically in a kitchen cabinet, bedroom closet, or electrical panel area) listing manufacturer, serial number, model, date of manufacture, and applicable wind/thermal/roof load zones. Both the data plate and certification label are required.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700"><strong>4. Permanent foundation installed:</strong> The foundation must comply with the HUD Permanent Foundations Guide for Manufactured Housing (HUD-7584). A licensed professional engineer or registered architect must inspect and certify the foundation meets HUD standards. The running gear (wheels, axles, tongue/hitch) must be removed.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700"><strong>5. Minimum 400 square feet of floor area:</strong> The home&apos;s gross living area must be at least 400 square feet. The appraiser measures and documents this during the appraisal inspection. Most single-wide manufactured homes exceed this minimum, but older or smaller units should verify before applying.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700"><strong>6. Classified as real property:</strong> The manufactured home must be legally classified as real property, not personal property, in the county records. The home must be titled together with the land it sits on. If currently titled as personal property (e.g., registered with the DMV), a title conversion process is required before HECM closing.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700"><strong>7. Borrower owns the land:</strong> The borrower must own the land beneath the manufactured home, or hold an acceptable long-term land lease. FHA requires land leases to extend at least three years beyond the loan maturity date. Homes in manufactured home communities (rented lot) may face additional lease requirements.</p>
              </div>
            </div>
          </div>

          {/* Comparison Table: Manufactured vs Site-Built HECM */}
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Manufactured Home HECM vs. Site-Built Home HECM
          </h3>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left">Feature</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Manufactured Home HECM</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Site-Built Home HECM</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Foundation Requirement</td>
                  <td className="border border-slate-200 px-4 py-3">Permanent foundation + engineer certification</td>
                  <td className="border border-slate-200 px-4 py-3">Standard foundation (no separate certification)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Construction Date Rule</td>
                  <td className="border border-slate-200 px-4 py-3">Must be built after June 15, 1976</td>
                  <td className="border border-slate-200 px-4 py-3">No construction date restriction</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">HUD Labels Required</td>
                  <td className="border border-slate-200 px-4 py-3">Yes &mdash; certification label + data plate</td>
                  <td className="border border-slate-200 px-4 py-3">Not applicable</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Minimum Floor Area</td>
                  <td className="border border-slate-200 px-4 py-3">400 square feet</td>
                  <td className="border border-slate-200 px-4 py-3">No FHA minimum (local codes apply)</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Title Requirement</td>
                  <td className="border border-slate-200 px-4 py-3">Must be real property titled with land</td>
                  <td className="border border-slate-200 px-4 py-3">Standard real property title</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Appraisal Complexity</td>
                  <td className="border border-slate-200 px-4 py-3">Higher &mdash; comparable sales harder to find</td>
                  <td className="border border-slate-200 px-4 py-3">Standard &mdash; abundant comparables</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">2026 FHA HECM Limit</td>
                  <td className="border border-slate-200 px-4 py-3">$1,209,750</td>
                  <td className="border border-slate-200 px-4 py-3">$1,209,750</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Lender Availability</td>
                  <td className="border border-slate-200 px-4 py-3">Fewer lenders &mdash; many have overlays</td>
                  <td className="border border-slate-200 px-4 py-3">Broadly available across all HECM lenders</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Processing Timeline</td>
                  <td className="border border-slate-200 px-4 py-3">45&ndash;75 days (foundation cert adds time)</td>
                  <td className="border border-slate-200 px-4 py-3">30&ndash;60 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            The FHA HECM limit of $1,209,750 in 2026 applies equally to manufactured and site-built homes. However, most manufactured homes appraise significantly below this cap, which means the appraised value &mdash; not the FHA limit &mdash; is the primary constraint on available proceeds. Double-wide manufactured homes on owned land in California and Washington coastal areas can appraise from $250,000 to $600,000 or higher depending on location, lot size, and condition.
          </p>
        </section>

        {/* Section 3: Google E-E-A-T Narrative */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Makes a Manufactured Home Eligible for a Reverse Mortgage?
          </h2>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Eligibility comes down to five components: construction date, HUD labels, foundation type, property classification, and land ownership. Each component serves a specific purpose in FHA&apos;s risk assessment. The construction date confirms the home was built to federal safety standards. The HUD labels verify the manufacturer and construction specifications. The permanent foundation ensures the home functions as permanent real estate rather than a movable structure. The real property classification confirms the home is legally part of the real estate, and land ownership (or qualifying lease) ensures the borrower controls the property underneath.
          </p>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Mo Abdel evaluates each of these components at the initial consultation stage, before the borrower spends money on counseling or appraisal fees. A quick review of the home&apos;s age, foundation type, and title status identifies potential issues upfront. This pre-screening saves time and money for homeowners whose manufactured home needs remediation before qualifying &mdash; or who should explore proprietary reverse mortgage alternatives instead of HECM.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            How Does Foundation Certification Work for HECM?
          </h3>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Foundation certification is the most common obstacle for manufactured homeowners pursuing a HECM reverse mortgage. FHA requires a licensed professional engineer or registered architect to physically inspect the foundation and issue a written certification that it complies with HUD&apos;s Permanent Foundations Guide for Manufactured Housing (HUD-7584). This is not a standard home inspection &mdash; it is a specific engineering analysis that evaluates footing depth, pier spacing, anchor systems, perimeter enclosure, and load-bearing capacity relative to the home&apos;s weight and local building codes.
          </p>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            The foundation certification report typically costs $500 to $1,500 depending on location and complexity. If the engineer identifies deficiencies &mdash; such as inadequate pier spacing, missing tie-downs, or non-compliant footings &mdash; the borrower must correct those issues and obtain a new certification before HECM approval. Foundation remediation costs vary widely from $2,000 for minor anchor upgrades to $15,000 or more for complete foundation reconstruction.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Foundation Certification Timing</h4>
                <p className="text-slate-700">Order the foundation certification early in the HECM process. If deficiencies are found, remediation and re-certification can add 30&ndash;60 days to the timeline. Mo Abdel recommends obtaining the certification before or concurrently with HUD counseling to identify and address issues as early as possible.</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            What If Your Manufactured Home Doesn&apos;t Qualify for FHA HECM?
          </h3>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Not every manufactured home meets FHA HECM requirements. The most common disqualifying factors include homes built before June 15, 1976, missing or illegible HUD labels that cannot be replaced, foundations that fail certification with no cost-effective remedy, and properties classified as personal property on land the borrower does not own (such as a rented lot in a manufactured home park without a qualifying lease).
          </p>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            When HECM is not achievable, <Link href="/blog/proprietary-reverse-mortgage-2026" className="text-blue-600 hover:text-blue-700 hover:underline">proprietary reverse mortgage programs</Link> offer an alternative path. Proprietary reverse mortgages are private-label products not insured by FHA, which means lenders set their own eligibility standards. Some proprietary lenders accept manufactured homes without foundation certification, homes on leased land, or properties that do not meet all HUD Code specifications. Availability and terms vary by lender. As a wholesale broker with access to 200+ lenders, Mo Abdel identifies proprietary options when FHA HECM eligibility is not possible.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            How Do Appraisals Differ for Manufactured Homes?
          </h3>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Manufactured home appraisals for HECM are more involved than site-built home appraisals. The appraiser must verify the HUD certification label number on the exterior of each home section, confirm the data plate information inside the home, document the permanent foundation type and condition, measure the gross living area to verify the 400 square foot minimum, assess compliance with FHA minimum property standards, and locate comparable sales of similar manufactured homes within the market area.
          </p>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Finding comparable sales is often the biggest challenge. Manufactured homes sell less frequently than site-built homes, and appraisers must use comparable properties of the same construction type. A site-built home cannot serve as a primary comparable for a manufactured home appraisal. In areas with limited manufactured home sales, the appraiser may need to expand the search radius or use older sales, both of which can affect the appraised value. Low appraisals directly reduce the HECM proceeds available to the borrower because the FHA calculation is based on the lesser of the appraised value or the $1,209,750 HECM limit.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Can You Get a Proprietary Reverse Mortgage on a Manufactured Home?
          </h3>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Yes, some <Link href="/blog/proprietary-reverse-mortgage-2026" className="text-blue-600 hover:text-blue-700 hover:underline">proprietary reverse mortgage</Link> lenders accept manufactured homes. Proprietary programs are not bound by FHA&apos;s HUD Code requirements, which means they can set their own construction date cutoffs, foundation standards, and property type guidelines. Some proprietary lenders accept manufactured homes without a formal HUD foundation certification, homes on certain types of leased land, and properties that would otherwise be ineligible for HECM.
          </p>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            The tradeoff is that proprietary reverse mortgages are not government-insured, which typically means different fee structures and varying borrower protections compared to FHA HECM. Proprietary programs also vary significantly between lenders &mdash; one lender may accept a manufactured home that another declines. This is where wholesale broker access matters: Mo Abdel at Lumin Lending shops the manufactured home scenario across multiple proprietary lenders simultaneously to find the best available terms and approval likelihood.
          </p>
        </section>

        {/* Section 4: Data & Comparison Hub */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Manufactured Home Reverse Mortgage: Key Data Comparisons
          </h2>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            HECM vs. Proprietary Reverse Mortgage for Manufactured Homes
          </h3>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left">Feature</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">FHA HECM</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Proprietary Reverse Mortgage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">FHA Insurance</td>
                  <td className="border border-slate-200 px-4 py-3">Yes &mdash; FHA-insured</td>
                  <td className="border border-slate-200 px-4 py-3">No &mdash; private lender product</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Construction Date</td>
                  <td className="border border-slate-200 px-4 py-3">After June 15, 1976 only</td>
                  <td className="border border-slate-200 px-4 py-3">Varies by lender</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Foundation Certification</td>
                  <td className="border border-slate-200 px-4 py-3">Required (HUD-7584 compliant)</td>
                  <td className="border border-slate-200 px-4 py-3">May not be required</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Max Loan Amount (2026)</td>
                  <td className="border border-slate-200 px-4 py-3">$1,209,750 FHA limit</td>
                  <td className="border border-slate-200 px-4 py-3">Varies &mdash; some exceed FHA limit</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">HUD Counseling Required</td>
                  <td className="border border-slate-200 px-4 py-3">Yes &mdash; mandatory</td>
                  <td className="border border-slate-200 px-4 py-3">Varies by lender and state</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Non-Recourse Protection</td>
                  <td className="border border-slate-200 px-4 py-3">Yes &mdash; FHA guarantees</td>
                  <td className="border border-slate-200 px-4 py-3">Varies &mdash; check lender terms</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Lender Availability</td>
                  <td className="border border-slate-200 px-4 py-3">Limited for manufactured homes</td>
                  <td className="border border-slate-200 px-4 py-3">Very limited &mdash; wholesale access critical</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Manufactured Home Types: HECM Eligibility at a Glance
          </h3>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left">Home Type</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">HECM Eligible?</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Double-Wide (post-1976)</td>
                  <td className="border border-slate-200 px-4 py-3 text-green-700 font-medium">Yes (with requirements)</td>
                  <td className="border border-slate-200 px-4 py-3">Higher appraised values; broader lender acceptance</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Single-Wide (post-1976)</td>
                  <td className="border border-slate-200 px-4 py-3 text-green-700 font-medium">Yes (with requirements)</td>
                  <td className="border border-slate-200 px-4 py-3">Must meet 400 sq ft minimum; fewer lenders</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Multi-Section (post-1976)</td>
                  <td className="border border-slate-200 px-4 py-3 text-green-700 font-medium">Yes (with requirements)</td>
                  <td className="border border-slate-200 px-4 py-3">Triple-wide or larger; similar to double-wide rules</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Mobile Home (pre-1976)</td>
                  <td className="border border-slate-200 px-4 py-3 text-red-700 font-medium">No</td>
                  <td className="border border-slate-200 px-4 py-3">Pre-HUD Code; permanently ineligible for HECM</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Modular Home</td>
                  <td className="border border-slate-200 px-4 py-3 text-green-700 font-medium">Yes (as site-built)</td>
                  <td className="border border-slate-200 px-4 py-3">Built to local codes; treated as site-built construction</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Park Model / Tiny Home</td>
                  <td className="border border-slate-200 px-4 py-3 text-red-700 font-medium">No</td>
                  <td className="border border-slate-200 px-4 py-3">Under 400 sq ft; built to recreational vehicle standards</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: People Also Ask */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask: Reverse Mortgages and Manufactured Homes
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Can I get a reverse mortgage on a manufactured home in a mobile home park?</h3>
              <p className="text-slate-600"><strong>It depends on the land ownership structure.</strong> If you own both the home and the land (fee simple ownership), the home can qualify for HECM if it meets all other FHA requirements. If the lot is leased, FHA requires the lease to extend at least three years beyond the youngest borrower&apos;s 100th birthday or the loan maturity date. Many manufactured home park leases do not meet this requirement. A wholesale broker can evaluate your specific lease terms against FHA guidelines and identify proprietary alternatives if HECM is not feasible.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">What happens if my HUD certification label is missing from my manufactured home?</h3>
              <p className="text-slate-600"><strong>Missing HUD labels do not automatically disqualify your manufactured home, but they must be replaced or verified before HECM approval.</strong> Contact the Institute for Building Technology and Safety (IBTS) to request a label verification letter using your home&apos;s serial number from the data plate. IBTS maintains HUD&apos;s database of all manufactured homes built under the HUD Code. The verification process typically takes 2&ndash;4 weeks and costs $100&ndash;200. If neither the label nor the data plate can be located, the home cannot be verified and will not qualify for HECM.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">How do I convert my manufactured home title from personal property to real property?</h3>
              <p className="text-slate-600"><strong>Title conversion requires removing the home from the DMV or state vehicle registry and recording it as real property with the county recorder&apos;s office.</strong> In California, this involves filing an Application for Manufactured Home/Mobilehome Title Elimination with HCD (Department of Housing and Community Development). In Washington, you file for title elimination through the Department of Licensing. The process requires the home to be on a permanent foundation on land you own. Title conversion typically takes 30&ndash;90 days and costs $500&ndash;2,000 including filing fees and title company charges.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Is a reverse mortgage on a manufactured home a good idea?</h3>
              <p className="text-slate-600"><strong>A reverse mortgage on a manufactured home is appropriate when the borrower is 62+, plans to stay in the home long-term, needs to eliminate mortgage payments or access equity, and the home qualifies for HECM.</strong> The same benefits and considerations that apply to site-built <Link href="/blog/reverse-mortgage-complete-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">reverse mortgages</Link> apply to manufactured homes: the loan eliminates monthly mortgage payments, provides access to home equity, and the proceeds are generally not considered taxable income (consult your tax advisor). HUD-approved counseling is mandatory before proceeding, ensuring you understand all terms and alternatives.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Do manufactured homes depreciate or appreciate for reverse mortgage purposes?</h3>
              <p className="text-slate-600"><strong>Manufactured homes on permanent foundations with owned land generally appreciate in value over time, similar to site-built homes in the same market.</strong> The outdated perception that manufactured homes only depreciate applies primarily to homes on rented lots or titled as personal property. A manufactured home on owned land, with a permanent foundation and real property title, benefits from land appreciation and local market conditions. California and Washington manufactured homes on owned land have seen significant appreciation in recent years due to housing supply constraints.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">What are the <Link href="/blog/reverse-mortgage-payout-options-2026" className="text-blue-600 hover:text-blue-700 hover:underline">payout options</Link> for a manufactured home reverse mortgage?</h3>
              <p className="text-slate-600"><strong>FHA HECM on a manufactured home offers the same payout options as site-built homes: lump sum, monthly payments, line of credit, or any combination.</strong> The line of credit option includes a growth feature where the unused portion grows over time. The available amount depends on the borrower&apos;s age, appraised value, and current interest rates. A <Link href="/blog/reverse-mortgage-calculator-2026" className="text-blue-600 hover:text-blue-700 hover:underline">reverse mortgage calculator</Link> provides preliminary estimates, and your licensed loan officer calculates exact figures based on your scenario.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-slate-900 mb-2">Can my heirs keep the manufactured home after I pass away?</h3>
              <p className="text-slate-600"><strong>Yes. Heirs have the option to repay the reverse mortgage balance (or 95% of the appraised value, whichever is less) and keep the manufactured home and land.</strong> If the loan balance exceeds the home&apos;s value, FHA insurance covers the difference &mdash; heirs are never responsible for more than the property is worth. This non-recourse protection is a key benefit of FHA HECM. Heirs typically have up to 12 months to sell or refinance. Read more about <Link href="/blog/reverse-mortgage-complete-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">how reverse mortgages work for heirs</Link>.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Extended FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions: Reverse Mortgage for Manufactured Homes
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

        {/* Section 7: Expert Summary + CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Expert Summary: Manufactured Homes Qualify for Reverse Mortgages When They Meet FHA Standards
          </h2>
          <p className="text-lg text-slate-200 mb-4 max-w-3xl mx-auto speakable-summary">
            A manufactured home qualifies for an FHA HECM reverse mortgage when it was built after June 15, 1976, sits on a certified permanent foundation, has intact HUD labels, meets the 400 square foot minimum, and is titled as real property with the land. Homeowners 62 and older who meet these requirements can eliminate monthly mortgage payments and access home equity through the same HECM program available to site-built homeowners.
          </p>
          <p className="text-lg text-slate-200 mb-6 max-w-3xl mx-auto">
            Mo Abdel at Lumin Lending provides free manufactured home eligibility evaluations for homeowners in California and Washington. As a wholesale broker with access to 200+ lenders, Mo identifies the optimal HECM or proprietary reverse mortgage program for each manufactured home scenario &mdash; including homes that do not meet standard FHA requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-slate-50 px-8 py-4">
                Free Manufactured Home Eligibility Review
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
            <Link href="/blog/reverse-mortgage-complete-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Complete Reverse Mortgage Guide 2026
            </Link>
            <Link href="/blog/proprietary-reverse-mortgage-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Proprietary Reverse Mortgage: Beyond FHA HECM
            </Link>
            <Link href="/blog/reverse-mortgage-calculator-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Reverse Mortgage Calculator 2026
            </Link>
            <Link href="/blog/hecm-counseling-requirements-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; HECM Counseling Requirements Explained
            </Link>
            <Link href="/blog/reverse-mortgage-condo-requirements-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Reverse Mortgage Condo Requirements
            </Link>
            <Link href="/blog/reverse-mortgage-payout-options-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Reverse Mortgage Payout Options Compared
            </Link>
            <Link href="/blog/reverse-mortgage-property-tax-insurance-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Reverse Mortgage Property Tax &amp; Insurance Guide
            </Link>
            <Link href="/blog/hecm-for-purchase-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; HECM for Purchase: Buy a Home with a Reverse Mortgage
            </Link>
          </div>
        </section>

        {/* Compliance Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p className="mb-4">
            Licensed in: CA, WA
          </p>
          <p className="mb-4">
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Not all borrowers will qualify. Reverse mortgage information is not provided by, nor is it approved by, the Federal Housing Administration (FHA), the Department of Housing and Urban Development (HUD), or any other government agency. Reverse mortgage borrowers must be 62 years or older, occupy the property as their primary residence, and complete HUD-approved counseling before loan closing. Reverse mortgage proceeds are generally not considered taxable income; consult your tax advisor for guidance on your specific situation. Manufactured home eligibility requirements described in this article are based on current FHA HECM guidelines, which are subject to change. Foundation certification costs, title conversion timelines, and proprietary program availability vary by location, lender, and individual circumstances. This content is for educational purposes only and does not constitute financial, tax, or legal advice. Contact a licensed loan officer for personalized guidance. Mo Abdel, NMLS #1426884, is licensed in California and Washington. Access to 200+ lenders available through wholesale broker channels in CA and WA only.
          </p>
        </section>
      </article>
    </div>
  );
}
