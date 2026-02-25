import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Building2, AlertTriangle, Home, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'HELOC on Investment Property 2026: Requirements, Rates & Wholesale Alternatives | Mo Abdel',
  description: 'Most banks refuse HELOCs on investment properties. Access lenders that approve rental property HELOCs through wholesale channels — 720+ credit, 70-75% max CLTV, 6+ months reserves. NMLS #1426884.',
  keywords: ['HELOC on investment property', 'investment property HELOC', 'rental property HELOC', 'HELOC on rental', 'investment HELOC requirements 2026', 'HELOC vs cash-out refinance investment'],
  openGraph: {
    title: 'HELOC on Investment Property 2026: Requirements, Rates & Wholesale Alternatives',
    description: 'Most banks refuse HELOCs on investment properties. Access lenders that approve rental property HELOCs through wholesale channels — 720+ credit, 70-75% max CLTV, 6+ months reserves.',
    url: 'https://www.mothebroker.com/blog/heloc-investment-property-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-25T00:00:00Z',
    modifiedTime: '2026-02-25T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/heloc-investment-property-2026',
  },
};

const faqData = [
  {
    question: "Can you get a HELOC on an investment property?",
    answer: "Yes, but most retail banks and credit unions do not offer HELOCs on investment properties. Wholesale mortgage brokers access specialized lenders that approve investment property HELOCs with 720+ credit scores, 70-75% maximum combined loan-to-value, and 6+ months of reserves. A broker with access to 200+ lenders identifies which ones currently fund investment HELOCs."
  },
  {
    question: "What credit score do you need for an investment property HELOC?",
    answer: "Most lenders offering investment property HELOCs require a minimum credit score of 720. Some wholesale lenders accept 700 with compensating factors such as lower CLTV ratios, higher reserves, or strong rental income documentation. Credit scores of 740+ qualify for the most competitive terms and highest credit limits."
  },
  {
    question: "What is the maximum CLTV for a HELOC on a rental property?",
    answer: "Investment property HELOCs cap at 70-75% combined loan-to-value, compared to 80-90% for primary residence HELOCs. If your rental property is worth $800,000 and you owe $400,000, your maximum HELOC at 75% CLTV would be $200,000. The lower CLTV requirement reflects the additional risk lenders assign to non-owner-occupied properties."
  },
  {
    question: "Is HELOC interest on an investment property tax deductible?",
    answer: "HELOC interest on an investment property may be deductible if the funds are used for property improvement, maintenance, or other business purposes related to the rental. The Tax Cuts and Jobs Act changed deductibility rules for personal residences but investment property interest deductions follow different rules. Consult your CPA for specific guidance on your situation."
  },
  {
    question: "How does rental income affect HELOC qualification?",
    answer: "Rental income from the subject property and other investment properties can offset your debt-to-income ratio when qualifying for an investment property HELOC. Documentation requirements vary by lender — some accept lease agreements, others require two years of Schedule E tax returns showing rental income. Wholesale brokers match investors with lenders whose rental income documentation requirements fit their situation."
  },
  {
    question: "What is the draw period on an investment property HELOC?",
    answer: "Investment property HELOCs typically offer a 10-year draw period followed by a 20-year repayment period, matching the structure of primary residence HELOCs. During the draw period, borrowers make interest-only payments and can access funds as needed. During the repayment period, the balance amortizes over the remaining term with fully amortizing payments."
  },
  {
    question: "Can I use an investment property HELOC to buy another rental property?",
    answer: "Yes. Using a HELOC on one investment property to fund the down payment on another is a common portfolio growth strategy. The HELOC provides flexible access to equity without selling or refinancing the original property. The new property purchase can be financed with a conventional loan, DSCR loan, or other investment property financing — with the HELOC covering the required down payment."
  },
  {
    question: "Should I get a HELOC or cash-out refinance on my investment property?",
    answer: "A HELOC provides flexible, revolving access to equity with interest-only payments during the draw period. A cash-out refinance delivers a lump sum with fixed payments. Choose a HELOC if you want ongoing access to equity, plan to use funds incrementally, or want to keep your existing first mortgage rate. Choose a cash-out refinance if you need a large one-time amount or want to lock in a fixed rate on the entire balance."
  },
  {
    question: "What reserves are required for an investment property HELOC?",
    answer: "Most lenders require 6 months of PITIA reserves for investment property HELOCs, covering both the first mortgage and the new HELOC payment. Reserves can include cash, stocks, bonds, and retirement accounts discounted at 60-70% of value. Some lenders require additional reserves if the borrower owns multiple investment properties."
  },
  {
    question: "Can I get a HELOC on an investment property in California or Washington?",
    answer: "Yes. Wholesale mortgage brokers licensed in California and Washington access multiple lenders offering investment property HELOCs in both states. California's high property values make investment HELOCs particularly useful for accessing substantial equity. Washington's strong rental markets in the Seattle-Eastside corridor also support investment HELOC qualification."
  },
  {
    question: "How long does it take to get a HELOC on an investment property?",
    answer: "Investment property HELOCs typically take 30-45 days from application to funding, which is longer than the 14-21 day timeline for primary residence HELOCs. The extended timeline results from additional property documentation, rental income verification, and the smaller number of lenders offering this product. Working with a wholesale broker who pre-identifies qualifying lenders reduces delays."
  },
  {
    question: "What is the difference between a HELOC and a HELOAN on an investment property?",
    answer: "A HELOC is a revolving line of credit with variable rates and interest-only payments during the draw period. A HELOAN (home equity loan) is a fixed-rate, lump-sum second mortgage with fully amortizing payments from day one. Both are available on investment properties through wholesale channels. HELOCs offer flexibility while HELOANs offer payment predictability."
  }
];

export default function HELOCInvestmentProperty2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "HELOC on Investment Property 2026: Requirements, Rates & Wholesale Alternatives",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["Investment Property HELOCs", "Home Equity Lines of Credit", "Rental Property Financing", "Wholesale Mortgage Lending", "Cash-Out Refinance"]
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
              "@id": "https://www.mothebroker.com/blog/heloc-investment-property-2026",
              "significantLink": [
                "https://www.consumerfinance.gov/",
                "https://www.irs.gov/"
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
                "name": "HELOC on Investment Property 2026",
                "item": "https://www.mothebroker.com/blog/heloc-investment-property-2026"
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
            "url": "https://www.mothebroker.com/blog/heloc-investment-property-2026"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-slate-500/20 rounded-full px-4 py-1.5 mb-6 border border-emerald-500/30">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Equity Track &mdash; Investment Property HELOCs</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              HELOC on Investment Property 2026: Requirements, Rates &amp; Wholesale Alternatives
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed speakable-hook">
              According to Mo Abdel, NMLS #1426884, most banks refuse to issue HELOCs on investment properties &mdash; but wholesale brokers with access to 200+ lenders connect investors with the specialized programs that approve rental property equity lines with 70&ndash;75% max CLTV and flexible rental income documentation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Investment HELOC Quote
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
            A HELOC on an investment property unlocks the equity trapped in rental real estate without selling the asset or disrupting cash flow. Unlike primary residence HELOCs available at virtually every bank and credit union, investment property HELOCs require specialized lenders &mdash; and the majority of retail banks simply do not offer them. This gap between demand and availability is where wholesale mortgage access becomes essential.
          </p>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Mo Abdel identifies three core facts every rental property owner needs to understand about investment HELOCs: first, the combined loan-to-value ceiling drops to 70&ndash;75% compared to 80&ndash;90% on a primary residence. Second, the minimum credit score threshold rises to 720 for most lenders. Third, reserve requirements increase to 6+ months of PITIA covering both the first mortgage and the new HELOC payment.
          </p>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            These tighter guidelines do not mean investment property HELOCs are inaccessible &mdash; they mean you need a broker who knows which lenders in a network of 200+ actually fund this product and which documentation approach each lender accepts for rental income verification. The difference between working with a wholesale broker and walking into a retail bank is the difference between accessing 15+ investment HELOC lenders versus being told &ldquo;we don&rsquo;t offer that product.&rdquo;
          </p>

          {/* Semantic Triples / Requirements Overview Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left">Requirement</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Investment Property HELOC</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Primary Residence HELOC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Minimum Credit Score</td>
                  <td className="border border-slate-200 px-4 py-3">720+ (700 with compensating factors)</td>
                  <td className="border border-slate-200 px-4 py-3">620&ndash;680</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Maximum CLTV</td>
                  <td className="border border-slate-200 px-4 py-3">70&ndash;75%</td>
                  <td className="border border-slate-200 px-4 py-3">80&ndash;90%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Reserves Required</td>
                  <td className="border border-slate-200 px-4 py-3">6+ months PITIA</td>
                  <td className="border border-slate-200 px-4 py-3">0&ndash;3 months</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Lender Availability</td>
                  <td className="border border-slate-200 px-4 py-3">Limited &mdash; wholesale access required</td>
                  <td className="border border-slate-200 px-4 py-3">Widely available at all banks</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Income Documentation</td>
                  <td className="border border-slate-200 px-4 py-3">Rental income + personal income</td>
                  <td className="border border-slate-200 px-4 py-3">Personal income only</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Typical Timeline</td>
                  <td className="border border-slate-200 px-4 py-3">30&ndash;45 days</td>
                  <td className="border border-slate-200 px-4 py-3">14&ndash;21 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Bing Power Block */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Investment Property HELOC Requirements 2026: Complete Qualification Guide
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            Qualifying for a HELOC on an investment property demands stronger financials than a primary residence HELOC. Lenders view non-owner-occupied properties as higher risk because borrowers are statistically more likely to default on an investment property than their own home during financial stress. These elevated requirements reflect that risk calculus.
          </p>

          {/* Three-Way Comparison Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left">Feature</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Investment HELOC</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Primary HELOC</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">DSCR Cash-Out Refi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Qualification Basis</td>
                  <td className="border border-slate-200 px-4 py-3">Personal income + rental income</td>
                  <td className="border border-slate-200 px-4 py-3">Personal income</td>
                  <td className="border border-slate-200 px-4 py-3">Property rental income only</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Credit Score</td>
                  <td className="border border-slate-200 px-4 py-3">720+</td>
                  <td className="border border-slate-200 px-4 py-3">620&ndash;680</td>
                  <td className="border border-slate-200 px-4 py-3">660+</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Max LTV / CLTV</td>
                  <td className="border border-slate-200 px-4 py-3">70&ndash;75% CLTV</td>
                  <td className="border border-slate-200 px-4 py-3">80&ndash;90% CLTV</td>
                  <td className="border border-slate-200 px-4 py-3">70&ndash;80% LTV</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Fund Access</td>
                  <td className="border border-slate-200 px-4 py-3">Revolving line &mdash; draw as needed</td>
                  <td className="border border-slate-200 px-4 py-3">Revolving line &mdash; draw as needed</td>
                  <td className="border border-slate-200 px-4 py-3">Lump sum at closing</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Rate Structure</td>
                  <td className="border border-slate-200 px-4 py-3">Variable rate</td>
                  <td className="border border-slate-200 px-4 py-3">Variable rate</td>
                  <td className="border border-slate-200 px-4 py-3">Fixed rate</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Income Docs Required</td>
                  <td className="border border-slate-200 px-4 py-3">Tax returns + lease agreements</td>
                  <td className="border border-slate-200 px-4 py-3">W-2s, pay stubs, tax returns</td>
                  <td className="border border-slate-200 px-4 py-3">None &mdash; rental income only</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Replaces First Mortgage</td>
                  <td className="border border-slate-200 px-4 py-3">No &mdash; second lien position</td>
                  <td className="border border-slate-200 px-4 py-3">No &mdash; second lien position</td>
                  <td className="border border-slate-200 px-4 py-3">Yes &mdash; replaces existing loan</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Reserves</td>
                  <td className="border border-slate-200 px-4 py-3">6+ months PITIA</td>
                  <td className="border border-slate-200 px-4 py-3">0&ndash;3 months</td>
                  <td className="border border-slate-200 px-4 py-3">6 months PITIA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Step-by-Step: Qualifying for an Investment Property HELOC
          </h3>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">1</div>
              <div>
                <p className="font-semibold text-slate-900">Confirm Your Credit Score Is 720 or Higher</p>
                <p className="text-slate-600">Pull all three credit bureaus. Investment HELOC lenders use the middle score. If your score falls between 700&ndash;719, compensating factors like lower CLTV requests (under 65%) or substantial reserves (12+ months) may satisfy select lenders. Below 700, a <Link href="/blog/investment-property-cash-out-refinance-2026" className="text-blue-600 hover:underline">cash-out refinance on your investment property</Link> or a DSCR cash-out becomes the more viable path.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">2</div>
              <div>
                <p className="font-semibold text-slate-900">Calculate Your Combined Loan-to-Value (CLTV)</p>
                <p className="text-slate-600">Add your current first mortgage balance to the HELOC amount you need, then divide by the property&apos;s current appraised value. The result must fall at or below 70&ndash;75%. Example: $500,000 property with $300,000 first mortgage &mdash; maximum HELOC at 75% CLTV = $75,000. At 70% CLTV = $50,000.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">3</div>
              <div>
                <p className="font-semibold text-slate-900">Gather Rental Income Documentation</p>
                <p className="text-slate-600">Prepare current lease agreements, two years of Schedule E tax returns, and a current rent roll if you own multiple units. Lenders count 75&ndash;100% of gross rental income depending on the documentation provided. Bank statements showing consistent rent deposits strengthen the file.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">4</div>
              <div>
                <p className="font-semibold text-slate-900">Verify Reserve Requirements</p>
                <p className="text-slate-600">Confirm you hold 6+ months of PITIA in liquid assets. Reserves must cover both the first mortgage payment and the projected HELOC payment. Cash, stocks, bonds, and retirement accounts (discounted 60&ndash;70%) all qualify. Some lenders require additional reserves per financed investment property beyond the subject.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">5</div>
              <div>
                <p className="font-semibold text-slate-900">Connect with a Wholesale Broker for Lender Matching</p>
                <p className="text-slate-600">A wholesale broker submits your file to the specific lenders within a 200+ lender network that currently fund investment property HELOCs. Each lender has different CLTV caps, credit thresholds, and rental income documentation standards. The broker identifies the best match for your specific financial profile and property situation.</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            The qualification process for an investment HELOC takes longer than a primary residence HELOC &mdash; expect 30&ndash;45 days from application to funding. The extended timeline results from additional property-level documentation, rental income verification, and the more limited pool of lenders offering this product. Working with a broker who pre-identifies qualifying lenders before submission eliminates wasted time on lenders that will decline the application.
          </p>
        </section>

        {/* Section 3: Google E-E-A-T Narrative */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Are Investment Property HELOCs Harder to Get Than Primary Residence HELOCs?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            The gap between primary residence and investment property HELOC availability comes down to risk stratification. Historical mortgage performance data shows that borrowers default on investment properties at a higher rate than on their own homes during economic downturns. When finances tighten, property owners prioritize the roof over their head. This statistical reality drives every lending restriction on investment HELOCs &mdash; lower CLTV limits, higher credit requirements, larger reserve mandates.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            Beyond default risk, investment property HELOCs sit in second lien position on a non-owner-occupied asset. If the borrower defaults, the second lien holder recovers funds only after the first mortgage is fully satisfied. This subordinate position on a higher-risk property type explains why most retail banks avoid the product entirely &mdash; the risk-adjusted return does not justify the operational complexity for institutions focused on high-volume primary residence lending.
          </p>

          <p className="text-lg text-slate-600 mb-8">
            Wholesale lenders that specialize in investment property products accept this risk profile because their entire business model is built around it. They price the risk appropriately, underwrite with investment-specific expertise, and service portfolios of non-owner-occupied second liens. A wholesale broker connects you directly to these specialized lenders who understand rental property economics.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Which Lenders Actually Offer HELOCs on Rental Properties?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            The lenders that fund investment property HELOCs fall into three categories: portfolio lenders that hold loans on their own balance sheet, non-QM lenders that specialize in investor products, and select credit unions with investor-friendly programs. None of these categories are accessible by walking into a Chase, Wells Fargo, or Bank of America branch &mdash; the major retail banks discontinued most investment HELOC programs after 2008 and have not brought them back at scale.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            Portfolio lenders offer the most flexibility because they set their own underwriting guidelines without conforming to secondary market requirements. Non-QM lenders accept alternative documentation approaches for rental income and often pair investment HELOCs with other investor products. Select credit unions serve their membership base with investment HELOCs but availability varies by institution and geographic market.
          </p>

          <p className="text-lg text-slate-600 mb-8">
            A wholesale mortgage broker with access to 200+ lenders maintains current knowledge of which lenders are actively funding investment HELOCs, what their specific requirements are, and which documentation approach each lender prefers. This access point eliminates the trial-and-error process of calling individual banks and being told &ldquo;we don&rsquo;t offer that program&rdquo; &mdash; a frustration that drives many investors to abandon the HELOC path entirely and default to a <Link href="/blog/investment-property-cash-out-refinance-2026" className="text-blue-600 hover:underline">cash-out refinance</Link> when a HELOC would have been the better financial tool.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            When Should You Choose a HELOC Over a Cash-Out Refinance on Investment Property?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            The HELOC vs. cash-out refinance decision on an investment property depends on three variables: how you plan to use the funds, whether you want to preserve your existing first mortgage rate, and whether you need ongoing access to equity or a one-time lump sum.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">Choose an Investment Property HELOC When:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Your first mortgage carries a rate you want to keep &mdash; a cash-out refinance replaces it with a new, potentially higher rate on the full balance</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">You plan to draw funds incrementally for ongoing renovations, property acquisitions, or portfolio management rather than needing everything at once</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">You want interest-only payments during the 10-year draw period to preserve monthly cash flow from the rental property</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">You want revolving access &mdash; paying down the HELOC restores available credit that you can draw again without reapplying</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Choose a Cash-Out Refinance When:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">You need a large lump sum for a specific purpose like purchasing another property, paying off high-interest debt, or completing a major renovation</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">You want a fixed rate locked for the entire loan term rather than variable-rate exposure on the HELOC</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Your credit score is between 660&ndash;719, which qualifies for a <Link href="/blog/dscr-refinance-investment-property-2026" className="text-blue-600 hover:underline">DSCR cash-out refinance</Link> but falls below the 720 threshold most investment HELOC lenders require</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">You want to qualify on rental income alone without documenting personal income &mdash; <Link href="/blog/cash-out-refinance-rental-property-investors-2026" className="text-blue-600 hover:underline">DSCR cash-out programs</Link> use property income exclusively</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Does Rental Income Factor Into HELOC Qualification?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            Rental income documentation is where investment property HELOCs diverge most significantly from primary residence HELOCs. On a primary residence, you qualify entirely on personal income &mdash; W-2s, pay stubs, tax returns. On an investment property HELOC, lenders evaluate both your personal income and the rental income from the subject property and any other investment properties you own. The goal is demonstrating total debt service capacity across your entire financial picture.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            Lenders calculate rental income contribution differently. Some use 75% of gross rent from lease agreements to account for vacancy and maintenance. Others require two years of Schedule E tax returns and use the net rental income reported to the IRS. A few portfolio lenders accept 12 months of bank statements showing rent deposits as primary income documentation. The approach matters because investors who depreciate heavily on tax returns may show minimal or negative Schedule E income despite strong actual cash flow.
          </p>

          <p className="text-lg text-slate-600 mb-8">
            A wholesale broker identifies which lender&apos;s rental income calculation method produces the most favorable debt-to-income ratio for your specific situation. An investor whose Schedule E shows a loss due to depreciation needs a lender that uses lease agreements or bank statements rather than tax returns. An investor with clean Schedule E income benefits from lenders that accept tax-based qualification. This lender-matching process directly impacts approval probability and available HELOC amounts.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Are the Tax Implications of a HELOC on Investment Property?
          </h2>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="font-semibold text-amber-900">Tax Disclaimer: This information is educational. Consult your CPA for advice specific to your situation.</p>
            </div>
            <p className="text-slate-700 mb-4">
              HELOC interest on investment property follows different rules than primary residence HELOC interest. Under current tax law, interest paid on debt used for business or investment purposes is generally deductible against the income generated by that activity. This means HELOC interest on a rental property may be deductible if the funds are used for property-related purposes such as improvements, repairs, or acquiring additional rental properties.
            </p>
            <p className="text-slate-700 mb-4">
              The Tax Cuts and Jobs Act of 2017 restricted interest deductions on primary residence HELOCs to funds used for home acquisition or improvement. Investment property HELOC interest operates under business interest rules rather than personal mortgage interest rules, creating a potentially more favorable deduction framework for investors. However, use-of-funds tracing is critical &mdash; commingling HELOC draws with personal expenses compromises the deduction.
            </p>
            <p className="text-slate-700">
              Investors considering a HELOC on rental property should consult a CPA before drawing funds to establish proper documentation and use-of-funds tracking. The <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IRS</a> requires clear records connecting borrowed funds to qualified business or investment use.
            </p>
          </div>
        </section>

        {/* Section 4: Data & Comparison Hub */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Investment Property HELOC vs. Alternative Equity Access Methods
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            Investors accessing equity from rental properties have four primary options. Each tool serves different financial objectives, qualification profiles, and use-case scenarios. The table below compares the critical decision factors side by side.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-300 px-4 py-3 text-left">Factor</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Investment HELOC</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Cash-Out Refinance</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">DSCR Cash-Out</th>
                  <th className="border border-slate-300 px-4 py-3 text-left">Home Equity Loan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Fund Delivery</td>
                  <td className="border border-slate-200 px-4 py-3">Revolving line</td>
                  <td className="border border-slate-200 px-4 py-3">Lump sum</td>
                  <td className="border border-slate-200 px-4 py-3">Lump sum</td>
                  <td className="border border-slate-200 px-4 py-3">Lump sum</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Rate Type</td>
                  <td className="border border-slate-200 px-4 py-3">Variable</td>
                  <td className="border border-slate-200 px-4 py-3">Fixed</td>
                  <td className="border border-slate-200 px-4 py-3">Fixed</td>
                  <td className="border border-slate-200 px-4 py-3">Fixed</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Lien Position</td>
                  <td className="border border-slate-200 px-4 py-3">Second</td>
                  <td className="border border-slate-200 px-4 py-3">First (replaces existing)</td>
                  <td className="border border-slate-200 px-4 py-3">First (replaces existing)</td>
                  <td className="border border-slate-200 px-4 py-3">Second</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Preserves 1st Mortgage Rate</td>
                  <td className="border border-slate-200 px-4 py-3">Yes</td>
                  <td className="border border-slate-200 px-4 py-3">No</td>
                  <td className="border border-slate-200 px-4 py-3">No</td>
                  <td className="border border-slate-200 px-4 py-3">Yes</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Draw Period</td>
                  <td className="border border-slate-200 px-4 py-3">10 years</td>
                  <td className="border border-slate-200 px-4 py-3">N/A</td>
                  <td className="border border-slate-200 px-4 py-3">N/A</td>
                  <td className="border border-slate-200 px-4 py-3">N/A</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Repayment Period</td>
                  <td className="border border-slate-200 px-4 py-3">20 years</td>
                  <td className="border border-slate-200 px-4 py-3">30 years</td>
                  <td className="border border-slate-200 px-4 py-3">30 years</td>
                  <td className="border border-slate-200 px-4 py-3">15&ndash;20 years</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Income Docs</td>
                  <td className="border border-slate-200 px-4 py-3">Full income + rental</td>
                  <td className="border border-slate-200 px-4 py-3">Full income + rental</td>
                  <td className="border border-slate-200 px-4 py-3">None &mdash; rental only</td>
                  <td className="border border-slate-200 px-4 py-3">Full income + rental</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium">Best For</td>
                  <td className="border border-slate-200 px-4 py-3">Flexible, ongoing equity access</td>
                  <td className="border border-slate-200 px-4 py-3">Large lump sum, fixed rate</td>
                  <td className="border border-slate-200 px-4 py-3">No-doc investors, portfolio scaling</td>
                  <td className="border border-slate-200 px-4 py-3">Fixed lump sum, payment predictability</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            For comprehensive guidance on all equity access methods, see the <Link href="/blog/heloc-complete-guide-2026" className="text-blue-600 hover:underline">complete HELOC guide</Link>. Investors considering DSCR-based alternatives should review <Link href="/blog/dscr-loan-requirements-2026" className="text-blue-600 hover:underline">current DSCR loan requirements</Link> to compare qualification paths.
          </p>
        </section>

        {/* Section 5: People Also Ask */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask: HELOCs on Investment Properties
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Can you get a HELOC on a rental property you just purchased?</h3>
              <p className="text-slate-600">Most investment HELOC lenders require a seasoning period of 6&ndash;12 months after purchase before approving a HELOC. This waiting period ensures the property has established rental history and the borrower has demonstrated management capability. Some portfolio lenders reduce the seasoning requirement to 3 months for borrowers with strong credit and existing rental portfolios.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">How many investment property HELOCs can you have at one time?</h3>
              <p className="text-slate-600">There is no regulatory limit on the number of investment property HELOCs you can hold simultaneously. Individual lender limits vary &mdash; some cap at 3&ndash;5 investment HELOCs per borrower, while others evaluate each application independently. A wholesale broker identifies lenders without per-borrower caps for investors building multi-property portfolios.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Does an investment property HELOC affect your ability to get a primary residence mortgage?</h3>
              <p className="text-slate-600">Yes. The HELOC payment (interest-only during draw period) counts toward your debt-to-income ratio when applying for any new mortgage. Lenders use the monthly payment on the HELOC, not the credit limit, in DTI calculations. Having a well-managed investment HELOC with consistent payments can positively impact your credit profile while the payment obligation impacts your DTI.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What happens to the HELOC if you sell the investment property?</h3>
              <p className="text-slate-600">The HELOC balance must be paid in full at closing when you sell the property, just like the first mortgage. The title company pays off both the first mortgage and the HELOC from the sale proceeds before distributing any remaining equity to the seller. If the sale price does not cover both liens, the seller must bring funds to closing to cover the shortfall.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Can you convert an investment property HELOC to a fixed rate?</h3>
              <p className="text-slate-600">Some investment HELOC lenders offer a fixed-rate lock option that converts all or a portion of the outstanding HELOC balance from a variable rate to a fixed rate. This feature functions similarly to a fixed-rate advance on primary residence HELOCs. Availability varies by lender &mdash; a wholesale broker confirms fixed-rate lock options before closing on the HELOC.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Is a HELOC on an investment property better than a personal line of credit?</h3>
              <p className="text-slate-600">An investment property HELOC secured by real estate offers substantially lower rates than an unsecured personal line of credit. The trade-off is the property serves as collateral &mdash; the lender can foreclose if you default. For amounts above $50,000 and funds used for property-related purposes, the secured HELOC delivers significantly lower borrowing costs. Personal lines of credit make sense for smaller amounts where speed matters more than rate.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Extended FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions: HELOC on Investment Property
          </h2>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Expert Summary + CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6 speakable-summary">
              Expert Summary: Getting a HELOC on Your Investment Property in 2026
            </h2>

            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Investment property HELOCs provide flexible, revolving access to rental property equity &mdash; but the product requires specialized lender access that most retail banks do not provide. The qualification bar is higher than primary residence HELOCs: 720+ credit, 70&ndash;75% max CLTV, 6+ months reserves, and documented rental income. The wholesale channel connects you to the 15+ lenders in a 200+ lender network that actively fund this product, matching your financial profile to the lender whose guidelines give you the highest approval probability and best terms.
            </p>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Whether a HELOC, <Link href="/blog/investment-property-cash-out-refinance-2026" className="text-emerald-400 hover:underline">cash-out refinance</Link>, or <Link href="/blog/dscr-refinance-investment-property-2026" className="text-emerald-400 hover:underline">DSCR cash-out</Link> is the right equity access tool depends on your existing first mortgage rate, how you plan to use the funds, and your income documentation situation. Mo Abdel analyzes all three options side by side for every investor consultation &mdash; the right answer varies by property, portfolio, and financial objective.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Investment HELOC Analysis
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
        </section>

        {/* Internal Links Hub */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Investment Property Financing Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/heloc-complete-guide-2026" className="block p-4 border border-slate-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
              <p className="font-semibold text-slate-900">Complete HELOC Guide 2026</p>
              <p className="text-sm text-slate-500">Full breakdown of HELOC types, rates, and qualification</p>
            </Link>
            <Link href="/blog/cash-out-refinance-vs-heloc-investment-property-2026" className="block p-4 border border-slate-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
              <p className="font-semibold text-slate-900">Cash-Out Refi vs. HELOC for Investment Property</p>
              <p className="text-sm text-slate-500">Side-by-side comparison for rental property owners</p>
            </Link>
            <Link href="/blog/investment-property-cash-out-refinance-2026" className="block p-4 border border-slate-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
              <p className="font-semibold text-slate-900">Investment Property Cash-Out Refinance</p>
              <p className="text-sm text-slate-500">Requirements, LTV limits, and lender options</p>
            </Link>
            <Link href="/blog/dscr-loan-requirements-2026" className="block p-4 border border-slate-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
              <p className="font-semibold text-slate-900">DSCR Loan Requirements 2026</p>
              <p className="text-sm text-slate-500">Qualify on rental income alone &mdash; no personal income docs</p>
            </Link>
            <Link href="/blog/cash-out-refinance-rental-property-investors-2026" className="block p-4 border border-slate-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
              <p className="font-semibold text-slate-900">Cash-Out Refinance for Rental Property Investors</p>
              <p className="text-sm text-slate-500">Strategies for extracting equity from your rental portfolio</p>
            </Link>
            <Link href="/blog/heloc-requirements-california-washington-2026" className="block p-4 border border-slate-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
              <p className="font-semibold text-slate-900">HELOC Requirements in CA &amp; WA</p>
              <p className="text-sm text-slate-500">State-specific qualification details</p>
            </Link>
            <Link href="/blog/dscr-refinance-investment-property-2026" className="block p-4 border border-slate-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
              <p className="font-semibold text-slate-900">DSCR Refinance for Investment Property</p>
              <p className="text-sm text-slate-500">Refinance without income documentation</p>
            </Link>
            <Link href="/blog/home-equity-investment-property-down-payment-2026" className="block p-4 border border-slate-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
              <p className="font-semibold text-slate-900">Using Home Equity for Investment Down Payment</p>
              <p className="text-sm text-slate-500">Leverage existing equity to grow your rental portfolio</p>
            </Link>
          </div>
        </section>

        {/* Author + Compliance Footer */}
        <footer className="border-t border-slate-200 pt-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-slate-100 rounded-full p-3 flex-shrink-0">
              <Home className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-lg">Mo Abdel</p>
              <p className="text-slate-600">NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443</p>
              <p className="text-slate-500 text-sm mt-1">Licensed in: California, Washington</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 text-sm text-slate-500 leading-relaxed">
            <p className="mb-3">
              <strong>Equal Housing Lender.</strong> All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Not all borrowers will qualify. Information is for educational purposes only and does not constitute financial, tax, legal, or investment advice. Consult a CPA for tax implications. Contact a licensed loan officer for personalized guidance.
            </p>
            <p className="mb-3">
              This article is provided for educational purposes only and does not constitute investment advice. Real estate investment involves risk, and past performance does not guarantee future results. Consult qualified financial, tax, and legal professionals before making investment decisions.
            </p>
            <p>
              HELOC terms, requirements, and availability vary by lender and are subject to change without notice. The information presented reflects general guidelines as of February 2026. For current program details, contact Mo Abdel at <a href="tel:+19498229662" className="text-blue-600 hover:underline">(949) 822-9662</a>.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <FileText className="w-4 h-4" />
            <span>Published: February 25, 2026</span>
            <span className="mx-2">|</span>
            <span>Last Updated: February 25, 2026</span>
          </div>

          <div className="mt-4 text-sm text-slate-400">
            <p>Sources: <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Consumer Financial Protection Bureau (CFPB)</a> | <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Internal Revenue Service (IRS)</a></p>
          </div>
        </footer>
      </article>
    </div>
  );
}
