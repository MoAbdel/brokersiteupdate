import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HELOC on Rental Property: Investment Strategy & Qualification Requirements [2026]',
  description: 'HELOC on rental property requirements: LTV limits (65%-75%), rate premiums, qualification standards, investment property HELOC vs primary residence HELOC strategy, DSCR alternatives, and wholesale broker access to investment HELOC lenders. NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/heloc-rental-property-investment-strategy-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/heloc-rental-property-investment-strategy-2026',
      'x-default': 'https://www.mothebroker.com/blog/heloc-rental-property-investment-strategy-2026',
    },
  },
  keywords: [
    'heloc on rental property',
    'investment property heloc',
    'heloc for investment',
    'rental property line of credit',
    'heloc on investment property requirements',
    'investment property heloc rates',
    'heloc rental property ltv',
    'investment heloc lenders',
    'rental property equity line',
    'wholesale broker investment heloc',
  ],
  openGraph: {
    title: 'HELOC on Rental Property: Investment Strategy & Qualification Requirements [2026]',
    description: 'Complete guide to getting a HELOC on investment/rental property: LTV limits, rate premiums, qualification requirements, primary residence HELOC alternative strategy, DSCR cross-financing, and wholesale broker access to investment HELOC lenders.',
    url: 'https://www.mothebroker.com/blog/heloc-rental-property-investment-strategy-2026',
    type: 'article',
    publishedTime: '2026-03-06',
    modifiedTime: '2026-03-06',
  },
};

const faqData = [
  {
    question: 'Can you get a HELOC on a rental or investment property?',
    answer: 'Yes, you can get a HELOC on a rental or investment property, but it is significantly harder than getting a HELOC on a primary residence. Fewer lenders offer investment property HELOCs, LTV limits are lower (typically 65% to 75% combined LTV versus 80% to 90% for primary residences), interest rates carry a premium of 0.5% to 1.5% above primary residence HELOC rates, and qualification requirements are stricter. A wholesale broker with access to 200+ lenders is essential because many retail banks do not offer investment property HELOCs at all, while certain wholesale and portfolio lenders specialize in this product.',
  },
  {
    question: 'What are the LTV limits for a HELOC on an investment property?',
    answer: 'Most lenders cap the combined loan-to-value (CLTV) for an investment property HELOC at 65% to 75%, compared to 80% to 90% for primary residences. This means if your rental property is worth $600,000 and you owe $300,000 on the first mortgage (50% LTV), a lender with a 70% CLTV limit would allow a HELOC up to $120,000 ($600,000 x 70% = $420,000 minus $300,000 = $120,000). Some portfolio lenders extend to 75% CLTV on strong applications, but 80%+ CLTV on investment properties is rare.',
  },
  {
    question: 'How much higher are HELOC rates on rental properties compared to primary residences?',
    answer: 'Investment property HELOC rates typically carry a premium of 0.5% to 1.5% above comparable primary residence HELOC rates. The exact premium depends on the lender, your credit score, the LTV, and the property type (single-family rental vs multi-unit). Some lenders apply a flat rate adder (e.g., +0.75%), while others use a separate pricing tier for investment properties. A wholesale broker comparing rates from 200+ lenders identifies the smallest premium available for your specific profile.',
  },
  {
    question: 'What credit score do I need for an investment property HELOC?',
    answer: 'Most lenders require a minimum credit score of 700 to 720 for an investment property HELOC, compared to 620 to 680 for a primary residence HELOC. Some lenders set the minimum at 720 for investment properties and reserve the best rates for scores of 740+. A higher credit score not only increases approval odds but also reduces the rate premium applied to investment property HELOCs. Borrowers with scores below 700 have limited options and may need to consider alternative strategies such as a cash-out refinance or a DSCR loan on the rental property.',
  },
  {
    question: 'Can I use a HELOC on my primary residence to buy investment property?',
    answer: 'Yes, using a HELOC on your primary residence to fund investment property purchases is a common and often more favorable strategy than getting a HELOC directly on the investment property. Primary residence HELOCs have higher CLTV limits (80% to 90%), lower rates, more lenient qualification requirements, and wider lender availability. You draw funds from your primary residence HELOC and use them as a down payment or full purchase price for the investment property. The key risk is that your primary residence secures the HELOC, so a default on the investment property strategy could put your home at risk.',
  },
  {
    question: 'What is the difference between an investment property HELOC and a DSCR loan?',
    answer: 'An investment property HELOC is a revolving line of credit secured by the rental property that allows you to draw and repay funds as needed, with variable rates and interest-only payment options during the draw period. A DSCR (debt service coverage ratio) loan is a fixed or adjustable-rate mortgage on the investment property that qualifies based on the property rental income rather than the borrower personal income. HELOCs provide flexible access to equity; DSCR loans provide permanent financing. HELOCs work best for short-term capital needs (repairs, down payments on next property); DSCR loans work best for long-term acquisition or refinance financing.',
  },
  {
    question: 'How many rental properties can I have HELOCs on simultaneously?',
    answer: 'There is no universal limit on the number of rental properties you can have HELOCs on, but each lender sets its own portfolio concentration limits. Many lenders restrict investment property HELOCs to borrowers with 4 or fewer financed properties. Some portfolio lenders accommodate borrowers with 5 to 10 financed properties but may require higher credit scores, lower LTV, and additional reserves. Borrowers with 10+ financed properties typically need to work with specialty lenders that a wholesale broker can identify from a 200+ lender network.',
  },
  {
    question: 'What reserves are required for an investment property HELOC?',
    answer: 'Lenders typically require 6 to 12 months of reserves (mortgage payments including PITIA) for each financed investment property when approving an investment property HELOC. The reserve requirement includes all properties you own, not just the one securing the HELOC. For example, if you own 3 rental properties with combined monthly payments of $8,000, and the lender requires 6 months of reserves, you need $48,000 in verified liquid assets after closing. These reserves must be documented in bank, investment, or retirement accounts.',
  },
  {
    question: 'Can rental income help me qualify for an investment property HELOC?',
    answer: 'Yes, most lenders allow rental income from the subject property and other investment properties to supplement your qualifying income for an investment property HELOC. Lenders typically use 75% of gross rental income (after a 25% vacancy factor) when calculating your debt-to-income ratio. You need to document rental income with signed lease agreements, tax returns showing Schedule E rental income, or both. Some lenders also accept a market rent analysis (Form 1007 or 1025) if the property is newly acquired or between tenants.',
  },
  {
    question: 'How does a wholesale broker help me get a HELOC on an investment property?',
    answer: 'A wholesale broker adds critical value for investment property HELOCs because this product has the most variation in availability and pricing across lenders. Many retail banks and credit unions do not offer investment property HELOCs at all. A wholesale broker with access to 200+ lenders identifies which lenders actively offer the product, compares rate premiums and LTV limits across those lenders, matches your specific property type (SFR, 2-4 unit, condo) and financial profile to the lenders with the most favorable terms, and navigates the stricter underwriting requirements. Without broker access, you may apply to multiple banks and get declined before finding a lender that offers the product.',
  },
];

export default function HelocRentalPropertyInvestmentStrategyPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'HELOC on Rental Property: Investment Strategy & Qualification Requirements [2026]',
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
            datePublished: '2026-03-06',
            dateModified: '2026-03-06',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.mothebroker.com/blog/heloc-rental-property-investment-strategy-2026',
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
                name: 'HELOC',
                item: 'https://www.mothebroker.com/loan-programs/heloc',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'HELOC on Rental Property',
                item: 'https://www.mothebroker.com/blog/heloc-rental-property-investment-strategy-2026',
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
          <Link href="/loan-programs/heloc" className="hover:text-blue-600">HELOC</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">HELOC on Rental Property</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          HELOC on Rental Property: Investment Strategy &amp; Qualification Requirements [2026]
        </h1>
        <p className="text-lg text-gray-600">
          A complete guide to getting a HELOC on a rental or investment property&mdash;covering qualification requirements, LTV limits (65%&ndash;75%), rate premiums, credit score thresholds, reserve requirements, the primary residence HELOC alternative strategy, DSCR loan comparisons, multi-property portfolio considerations, and how a wholesale broker accesses investment HELOC lenders that retail banks do not offer.
        </p>
        <p className="text-sm text-gray-500 mt-2">By Mo Abdel, NMLS #1426884 | Lumin Lending NMLS #2716106 | Updated March 2026</p>
      </header>

      <section className="prose prose-lg max-w-none">
        {/* Citation Hook / Speakable Summary */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8 speakable-summary">
          <p className="lead font-semibold text-gray-900 mb-0">
            According to Mo Abdel, NMLS #1426884, <strong>getting a HELOC on a rental or investment property is significantly harder than on a primary residence&mdash;fewer lenders offer the product, LTV limits are 10&ndash;25 percentage points lower, and rate premiums add 0.5% to 1.5% above primary residence HELOC pricing</strong>. According to <a href="https://www.federalreserve.gov/publications/2025-november-financial-stability-report.htm" target="_blank" rel="noopener noreferrer">Federal Reserve financial stability data</a>, investment property lending carries higher risk profiles that drive these stricter terms. An estimated 30% to 40% of retail banks and credit unions do not offer investment property HELOCs at all, making wholesale broker access to 200+ lenders essential for finding competitive terms. The alternative strategy&mdash;using a primary residence HELOC to fund investment purchases&mdash;provides better rates and higher LTV limits but shifts the collateral risk to your home.
          </p>
        </div>

        {/* Semantic Triples Table */}
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Semantic Entity Relationships: Investment Property HELOC</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Subject</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Predicate</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Object</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Investment property HELOC</td>
                <td className="border border-gray-200 px-4 py-2">provides revolving access to equity on a rental property with</td>
                <td className="border border-gray-200 px-4 py-2">lower LTV limits (65%&ndash;75%) and higher rates than primary residence HELOCs</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Primary residence HELOC</td>
                <td className="border border-gray-200 px-4 py-2">serves as an alternative funding source for investment purchases with</td>
                <td className="border border-gray-200 px-4 py-2">higher LTV limits (80%&ndash;90%) and lower rates but collateral risk on the home</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Wholesale mortgage broker</td>
                <td className="border border-gray-200 px-4 py-2">identifies investment HELOC lenders and compares terms across</td>
                <td className="border border-gray-200 px-4 py-2">200+ lenders including portfolio and specialty lenders unavailable at retail</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table of Contents */}
        <nav className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-3">On This Page: HELOC on Rental Property</h2>
          <ul className="text-blue-800 space-y-2">
            <li><a href="#investment-heloc-basics" className="hover:underline">Investment Property HELOC: How It Works</a></li>
            <li><a href="#qualification-requirements" className="hover:underline">Qualification Requirements for Rental Property HELOCs</a></li>
            <li><a href="#ltv-rate-comparison" className="hover:underline">LTV Limits and Rate Premiums: Investment vs Primary Residence</a></li>
            <li><a href="#primary-residence-strategy" className="hover:underline">Using Your Primary Residence HELOC for Investment Instead</a></li>
            <li><a href="#dscr-comparison" className="hover:underline">Investment HELOC vs DSCR Loan: Which Is Better?</a></li>
            <li><a href="#multi-property" className="hover:underline">Multi-Property Portfolio HELOC Strategies</a></li>
            <li><a href="#wholesale-advantage" className="hover:underline">Wholesale Broker Access to Investment HELOC Lenders</a></li>
            <li><a href="#data-hub" className="hover:underline">Investment HELOC Data Comparison Hub</a></li>
            <li><a href="#paa" className="hover:underline">People Also Ask</a></li>
            <li><a href="#faqs" className="hover:underline">Extended FAQ (10 Questions)</a></li>
            <li><a href="#expert-summary" className="hover:underline">Expert Summary + Next Steps</a></li>
          </ul>
        </nav>

        {/* E-E-A-T Experience Marker */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
          <h3 className="font-bold text-blue-900 mt-0">From My Practice: Investment Property HELOC Lending</h3>
          <p className="text-blue-800 mb-0">
            I work with real estate investors across California and Washington who need to access equity in their rental properties, and the most common frustration I hear is &ldquo;my bank told me they do not offer HELOCs on investment properties.&rdquo; That response is accurate for many retail banks&mdash;but it does not mean the product does not exist. Through my wholesale network of 200+ lenders, I consistently find 15 to 25 lenders actively offering investment property HELOCs at any given time, with meaningful differences in LTV limits, rate premiums, and reserve requirements. The second strategy I use frequently is structuring a primary residence HELOC to fund investment purchases, which gives the investor better rates and higher credit limits while keeping the investment property free from a second lien. &mdash; <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* CTA 1: Early CTA */}
        <div className="bg-green-50 p-6 rounded-xl border border-green-200 my-8 text-center">
          <h3 className="text-xl font-bold text-green-900 mt-0">Need a HELOC on Your Rental Property?</h3>
          <p className="text-green-800 mb-2">
            I will identify which lenders offer investment property HELOCs for your situation, compare LTV limits and rates, and structure the optimal approach&mdash;whether that is an investment HELOC, primary residence HELOC, or DSCR alternative.
          </p>
          <p className="text-green-900 font-bold text-lg mb-0">
            Call Mo Abdel: <a href="tel:9495792057" className="text-green-700 hover:underline">(949) 579-2057</a> | <Link href="/contact" className="text-green-700 hover:underline">Request Investment HELOC Quote</Link>
          </p>
        </div>

        {/* Section 1: Investment HELOC Basics */}
        <h2 id="investment-heloc-basics">Investment Property HELOC: How It Works</h2>

        <p>
          A HELOC (home equity line of credit) on a rental or investment property functions the same way as a primary residence HELOC: it is a revolving line of credit secured by the property&apos;s equity, with a draw period (typically 5&ndash;10 years) during which you can borrow, repay, and borrow again, followed by a repayment period (typically 10&ndash;20 years) during which the balance amortizes.
        </p>

        <p>
          The key differences are in qualification, pricing, and availability. Because investment properties carry higher default risk&mdash;borrowers are statistically more likely to default on an investment property than a primary residence during financial stress&mdash;lenders impose stricter terms across every dimension. For a comprehensive overview of HELOC mechanics, our <Link href="/loan-programs/heloc" className="text-blue-600 hover:underline">HELOC program page</Link> covers draw periods, repayment structures, and rate types.
        </p>

        <h3>Who Offers Investment Property HELOCs?</h3>

        <p>
          Investment property HELOCs are offered by a subset of lenders that includes:
        </p>

        <ul>
          <li><strong>Portfolio lenders:</strong> Banks and credit unions that keep loans on their own books rather than selling to Fannie Mae or Freddie Mac. These lenders have the most flexibility in underwriting investment property HELOCs.</li>
          <li><strong>Wholesale lenders:</strong> Lenders that originate through mortgage brokers and offer specialized investment property products not available at retail.</li>
          <li><strong>Specialty non-QM lenders:</strong> Lenders that focus on non-qualified mortgage products, including investment property HELOCs with flexible income documentation.</li>
          <li><strong>Regional banks:</strong> Some mid-size regional banks offer investment property HELOCs to depositors or in-market borrowers.</li>
        </ul>

        <p>
          Major national banks and most credit unions do <strong>not</strong> offer investment property HELOCs. This limited availability makes broker access essential&mdash;without it, investors often spend weeks applying at multiple banks before finding a lender that offers the product.
        </p>

        {/* Section 2: Qualification Requirements */}
        <h2 id="qualification-requirements">Qualification Requirements for Rental Property HELOCs</h2>

        <p>
          Investment property HELOC qualification is stricter than primary residence HELOC qualification across every metric. Here is what lenders require:
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Investment Property HELOC Qualification Requirements</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Requirement</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Primary Residence HELOC</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Investment Property HELOC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Minimum credit score</td>
                <td className="border border-gray-200 px-4 py-2">620&ndash;680</td>
                <td className="border border-gray-200 px-4 py-2">700&ndash;720</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Maximum CLTV</td>
                <td className="border border-gray-200 px-4 py-2">80%&ndash;90%</td>
                <td className="border border-gray-200 px-4 py-2">65%&ndash;75%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Maximum DTI</td>
                <td className="border border-gray-200 px-4 py-2">43%&ndash;50%</td>
                <td className="border border-gray-200 px-4 py-2">40%&ndash;45%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Reserves required</td>
                <td className="border border-gray-200 px-4 py-2">0&ndash;2 months</td>
                <td className="border border-gray-200 px-4 py-2">6&ndash;12 months per property</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Rental income used</td>
                <td className="border border-gray-200 px-4 py-2">N/A</td>
                <td className="border border-gray-200 px-4 py-2">75% of gross rent (25% vacancy factor)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Rate premium</td>
                <td className="border border-gray-200 px-4 py-2">Base rate (Prime + margin)</td>
                <td className="border border-gray-200 px-4 py-2">Base rate + 0.5% to 1.5%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Property types accepted</td>
                <td className="border border-gray-200 px-4 py-2">SFR, condo, townhome</td>
                <td className="border border-gray-200 px-4 py-2">SFR, 2-4 unit (varies by lender)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Lender availability</td>
                <td className="border border-gray-200 px-4 py-2">Widely available</td>
                <td className="border border-gray-200 px-4 py-2">Limited (30%&ndash;40% of lenders)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Documentation Requirements</h3>

        <p>
          Investment property HELOC applications require more extensive documentation than primary residence HELOCs:
        </p>

        <ul>
          <li><strong>2 years of tax returns</strong> showing Schedule E rental income for all owned rental properties</li>
          <li><strong>Current lease agreements</strong> for the subject property and all other rental properties</li>
          <li><strong>Proof of reserves:</strong> Bank statements, investment account statements, or retirement account statements showing 6&ndash;12 months of reserves per financed property</li>
          <li><strong>Property insurance declarations</strong> showing landlord/rental property coverage (not homeowner&apos;s insurance)</li>
          <li><strong>Entity documentation</strong> if the property is held in an LLC (some lenders allow HELOC in entity name; most require individual borrower)</li>
          <li><strong>Rent roll or market rent analysis</strong> for properties with new tenants or current vacancies</li>
        </ul>

        {/* Section 3: LTV and Rate Comparison */}
        <h2 id="ltv-rate-comparison">LTV Limits and Rate Premiums: Investment Property vs Primary Residence HELOC</h2>

        <p>
          The LTV and rate differences between investment property and primary residence HELOCs are substantial enough to change the economics of your investment strategy. Understanding these differences determines whether an investment property HELOC or an alternative approach (primary residence HELOC, cash-out refinance, or DSCR loan) is the optimal structure.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Accessible Equity Comparison: $600,000 Property Value, $300,000 First Mortgage</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">HELOC Type</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Max CLTV</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Max HELOC Amount</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Rate Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Primary residence</td>
                <td className="border border-gray-200 px-4 py-2">90%</td>
                <td className="border border-gray-200 px-4 py-2">$240,000</td>
                <td className="border border-gray-200 px-4 py-2">None (base rate)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Primary residence (conservative)</td>
                <td className="border border-gray-200 px-4 py-2">80%</td>
                <td className="border border-gray-200 px-4 py-2">$180,000</td>
                <td className="border border-gray-200 px-4 py-2">None (base rate)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Investment property (aggressive)</td>
                <td className="border border-gray-200 px-4 py-2">75%</td>
                <td className="border border-gray-200 px-4 py-2">$150,000</td>
                <td className="border border-gray-200 px-4 py-2">+0.50% to +0.75%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Investment property (typical)</td>
                <td className="border border-gray-200 px-4 py-2">70%</td>
                <td className="border border-gray-200 px-4 py-2">$120,000</td>
                <td className="border border-gray-200 px-4 py-2">+0.75% to +1.25%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Investment property (conservative)</td>
                <td className="border border-gray-200 px-4 py-2">65%</td>
                <td className="border border-gray-200 px-4 py-2">$90,000</td>
                <td className="border border-gray-200 px-4 py-2">+1.00% to +1.50%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The table above illustrates a critical insight: on the same $600,000 property with the same $300,000 first mortgage, a primary residence HELOC at 90% CLTV gives you $240,000 in credit, while an investment property HELOC at 65% CLTV gives you only $90,000&mdash;and at a higher rate. This 2.7x difference in accessible equity is why many investors prefer the primary residence HELOC strategy described in the next section. Use our <Link href="/tools/max-heloc-calculator" className="text-blue-600 hover:underline">max HELOC calculator</Link> to estimate your accessible equity, and our <Link href="/tools/equity-comparison-calculator" className="text-blue-600 hover:underline">equity comparison calculator</Link> to compare different scenarios.
        </p>

        {/* Section 4: Primary Residence Strategy */}
        <h2 id="primary-residence-strategy">Using Your Primary Residence HELOC for Investment Property Purchases</h2>

        <p>
          Many experienced real estate investors deliberately avoid investment property HELOCs entirely, choosing instead to tap equity in their primary residence to fund investment purchases. This strategy offers three distinct advantages:
        </p>

        <ol>
          <li><strong>Higher accessible equity:</strong> Primary residence CLTV limits of 80%&ndash;90% give you significantly more borrowing power than the 65%&ndash;75% limits on investment properties.</li>
          <li><strong>Lower interest rates:</strong> No rate premium means you save 0.5%&ndash;1.5% on every dollar borrowed compared to an investment property HELOC.</li>
          <li><strong>Easier qualification:</strong> Lower credit score requirements (620&ndash;680 vs 700&ndash;720), less stringent reserve requirements, and wider lender availability make approval faster and more certain.</li>
        </ol>

        <h3>How the Primary Residence HELOC Investment Strategy Works</h3>

        <ol>
          <li><strong>Establish a HELOC on your primary residence</strong> at the highest CLTV your lender allows (typically 80%&ndash;90%). This creates a revolving credit facility you can draw from as needed.</li>
          <li><strong>Identify an investment property to purchase.</strong> Use the HELOC funds as a down payment (or full purchase price for lower-value properties) on the investment property.</li>
          <li><strong>Finance the investment property separately</strong> with a conventional investment mortgage, <Link href="/blog/dscr-loans-explained-investors-2026" className="text-blue-600 hover:underline">DSCR loan</Link>, or other investment-specific financing. The HELOC funds cover the down payment.</li>
          <li><strong>Repay the HELOC draw</strong> using rental income, refinance proceeds, or other investment returns. Because the HELOC is revolving, you can draw and repay as needed for future acquisitions.</li>
        </ol>

        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 my-6">
          <h4 className="font-bold text-yellow-800 mt-0">Risk Warning: Primary Residence as Collateral</h4>
          <p className="text-yellow-900 mb-0">
            <strong>When you use a primary residence HELOC to fund investment purchases, your home is the collateral.</strong> If the investment property generates losses, vacancy extends, or you cannot make HELOC payments for any reason, the lender can foreclose on your primary residence&mdash;not the investment property. This risk concentration is the primary downside of this strategy. Only use this approach if your financial reserves and cash flow can sustain HELOC payments even during worst-case investment scenarios (prolonged vacancy, major repairs, market downturn).
          </p>
        </div>

        {/* CTA 2: Mid CTA */}
        <div className="bg-green-50 p-6 rounded-xl border border-green-200 my-8 text-center">
          <h3 className="text-xl font-bold text-green-900 mt-0">Exploring Investment HELOC Options? Get a Custom Strategy</h3>
          <p className="text-green-800 mb-2">
            I will compare investment property HELOC, primary residence HELOC, cash-out refinance, and DSCR loan options for your specific portfolio and determine which structure maximizes your accessible equity at the lowest cost.
          </p>
          <p className="text-green-900 font-bold text-lg mb-0">
            Call Mo Abdel: <a href="tel:9495792057" className="text-green-700 hover:underline">(949) 579-2057</a> | <Link href="/contact" className="text-green-700 hover:underline">Schedule Strategy Session</Link>
          </p>
        </div>

        {/* Section 5: DSCR Comparison */}
        <h2 id="dscr-comparison">Investment Property HELOC vs DSCR Loan: Which Is Better for Real Estate Investors?</h2>

        <p>
          Real estate investors frequently compare investment property HELOCs with DSCR (debt service coverage ratio) loans because both products are designed for investment property financing. However, they serve fundamentally different purposes and work best in different scenarios.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Investment Property HELOC vs DSCR Loan Comparison</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Investment Property HELOC</th>
                <th className="border border-gray-200 px-4 py-2 text-left">DSCR Loan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Loan structure</td>
                <td className="border border-gray-200 px-4 py-2">Revolving line of credit</td>
                <td className="border border-gray-200 px-4 py-2">Fixed-term mortgage (30-year typical)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Rate type</td>
                <td className="border border-gray-200 px-4 py-2">Variable (Prime + margin)</td>
                <td className="border border-gray-200 px-4 py-2">Fixed or adjustable (5/6, 7/6 ARM)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Income qualification</td>
                <td className="border border-gray-200 px-4 py-2">Personal income + rental income (DTI-based)</td>
                <td className="border border-gray-200 px-4 py-2">Property rental income only (DSCR-based)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Max LTV / CLTV</td>
                <td className="border border-gray-200 px-4 py-2">65%&ndash;75% CLTV</td>
                <td className="border border-gray-200 px-4 py-2">75%&ndash;80% LTV</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Best use</td>
                <td className="border border-gray-200 px-4 py-2">Short-term capital needs: repairs, down payments, bridge funding</td>
                <td className="border border-gray-200 px-4 py-2">Long-term acquisition or refinance financing</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Draw flexibility</td>
                <td className="border border-gray-200 px-4 py-2">Borrow, repay, reborrow during draw period</td>
                <td className="border border-gray-200 px-4 py-2">One-time disbursement</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Payment during draw</td>
                <td className="border border-gray-200 px-4 py-2">Interest-only (typical)</td>
                <td className="border border-gray-200 px-4 py-2">Full P&amp;I or interest-only (varies)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Closing costs</td>
                <td className="border border-gray-200 px-4 py-2">$500&ndash;$3,000</td>
                <td className="border border-gray-200 px-4 py-2">$7,500&ndash;$15,000+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          For a deep dive into DSCR loan qualification, rates, and structure, see our <Link href="/blog/dscr-loans-explained-investors-2026" className="text-blue-600 hover:underline">comprehensive DSCR loan guide</Link> and use our <Link href="/tools/dscr-qualification-calculator" className="text-blue-600 hover:underline">DSCR qualification calculator</Link> to estimate your eligibility.
        </p>

        <h3>When to Choose an Investment Property HELOC Over a DSCR Loan</h3>

        <ul>
          <li>You need flexible, revolving access to equity (not a one-time lump sum)</li>
          <li>You plan to use funds for property improvements, down payments on other acquisitions, or short-term cash flow needs</li>
          <li>You want to minimize closing costs ($500&ndash;$3,000 vs $7,500&ndash;$15,000+)</li>
          <li>You have strong personal income and credit that easily qualify for HELOC underwriting</li>
        </ul>

        <h3>When to Choose a DSCR Loan Over an Investment Property HELOC</h3>

        <ul>
          <li>You need long-term, permanent financing for an acquisition or refinance</li>
          <li>You want a fixed interest rate that does not change with market conditions</li>
          <li>Your personal income is complex, inconsistent, or difficult to document (self-employed investors benefit from DSCR&apos;s income-agnostic qualification)</li>
          <li>You need higher LTV (75%&ndash;80% on DSCR vs 65%&ndash;75% on investment HELOC)</li>
          <li>You want the property&apos;s rental income to carry the loan qualification on its own</li>
        </ul>

        {/* Section 6: Multi-Property */}
        <h2 id="multi-property">Multi-Property Portfolio HELOC Strategies</h2>

        <p>
          Real estate investors with multiple properties face unique challenges when accessing equity through HELOCs. Each additional financed property increases the reserve requirements, DTI burden, and lender scrutiny. Here are the strategies that experienced portfolio investors use:
        </p>

        <h3>Strategy 1: Concentrate HELOC Access on the Strongest Property</h3>

        <p>
          Rather than obtaining HELOCs on multiple investment properties, identify the property with the most equity and lowest LTV and place a single, larger HELOC on that property. This minimizes the number of HELOC applications, reduces total fees, and concentrates lien management on one property. The funds from that single HELOC can be deployed across your entire portfolio.
        </p>

        <h3>Strategy 2: Primary Residence HELOC as Portfolio Funding Engine</h3>

        <p>
          Use your primary residence HELOC as the central funding mechanism for your entire investment portfolio. The higher LTV (80%&ndash;90%), lower rate, and easier qualification make this the most capital-efficient approach. Repay the HELOC as rental income accumulates or as you refinance investment properties into permanent financing. This &ldquo;BRRRR-lite&rdquo; strategy (Buy, Rehab, Rent, Refinance, Repeat) uses the primary HELOC as the revolving capital source.
        </p>

        <h3>Strategy 3: Cash-Out Refinance to Extract, Then HELOC for Flexibility</h3>

        <p>
          For properties with substantial equity, execute a <Link href="/blog/cash-out-refinance-investment-property-rental-2026" className="text-blue-600 hover:underline">cash-out refinance</Link> to extract a large lump sum at a fixed rate, then establish a HELOC on the remaining equity for ongoing flexibility. The cash-out refinance provides long-term fixed-rate capital, while the HELOC provides a revolving credit facility for short-term needs. This hybrid approach maximizes both stability and flexibility.
        </p>

        {/* Section 7: Wholesale Advantage */}
        <h2 id="wholesale-advantage">Wholesale Broker Access to Investment HELOC Lenders</h2>

        <p>
          Investment property HELOCs have the highest variation in availability and pricing of any mortgage product. The difference between a broker search and a retail bank search is often the difference between getting approved and getting declined.
        </p>

        <h3>Why Retail Banks Fall Short for Investment HELOCs</h3>

        <p>
          An estimated 30% to 40% of retail banks and credit unions do not offer investment property HELOCs. Among those that do, many restrict the product to existing depositors, limit it to single-family rentals only, cap the number of financed properties at 4, or offer unfavorable terms compared to wholesale and portfolio lenders. An investor who shops 3 retail banks has a meaningful probability of receiving 3 declinations&mdash;not because they do not qualify, but because those banks do not offer the product.
        </p>

        <h3>What a Wholesale Broker Provides</h3>

        <ul>
          <li><strong>Product availability screening:</strong> Instantly identify which of 200+ lenders currently offer investment property HELOCs for your property type (SFR, 2-unit, 3-4 unit, condo)</li>
          <li><strong>Rate and LTV comparison:</strong> Compare rate premiums and maximum CLTV across all available lenders to find the most favorable terms</li>
          <li><strong>Reserve requirement matching:</strong> Identify lenders with the lowest reserve requirements for your property count</li>
          <li><strong>Entity structure guidance:</strong> Determine which lenders allow HELOC origination when the property is held in an LLC vs individual name</li>
          <li><strong>Alternative structuring:</strong> If investment property HELOC terms are unfavorable, pivot to primary residence HELOC, cash-out refinance, or DSCR loan without starting over at a new institution</li>
        </ul>

        {/* Data Hub */}
        <h2 id="data-hub">Investment HELOC Data Comparison Hub</h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Investment Property Equity Access: HELOC vs Cash-Out Refi vs DSCR (Illustrative)</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Product</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Max LTV/CLTV</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Rate Type</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Closing Costs</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Investment HELOC</td>
                <td className="border border-gray-200 px-4 py-2">65%&ndash;75%</td>
                <td className="border border-gray-200 px-4 py-2">Variable</td>
                <td className="border border-gray-200 px-4 py-2">$500&ndash;$3,000</td>
                <td className="border border-gray-200 px-4 py-2">Revolving short-term capital</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Cash-out refi (investment)</td>
                <td className="border border-gray-200 px-4 py-2">70%&ndash;75%</td>
                <td className="border border-gray-200 px-4 py-2">Fixed</td>
                <td className="border border-gray-200 px-4 py-2">$8,000&ndash;$15,000</td>
                <td className="border border-gray-200 px-4 py-2">Lump-sum equity extraction + rate lock</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">DSCR loan</td>
                <td className="border border-gray-200 px-4 py-2">75%&ndash;80%</td>
                <td className="border border-gray-200 px-4 py-2">Fixed or ARM</td>
                <td className="border border-gray-200 px-4 py-2">$7,500&ndash;$15,000+</td>
                <td className="border border-gray-200 px-4 py-2">Income-agnostic acquisition/refi</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Primary residence HELOC</td>
                <td className="border border-gray-200 px-4 py-2">80%&ndash;90%</td>
                <td className="border border-gray-200 px-4 py-2">Variable</td>
                <td className="border border-gray-200 px-4 py-2">$0&ndash;$2,000</td>
                <td className="border border-gray-200 px-4 py-2">Highest leverage at lowest rate (home as collateral)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* People Also Ask Section */}
        <h2 id="paa" className="speakable-paa">People Also Ask: HELOC on Rental Property</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Is it hard to get a HELOC on a rental property?</h3>
            <p className="mb-0">
              <strong>Yes, getting a HELOC on a rental property is significantly harder than on a primary residence because fewer lenders offer the product, LTV limits are lower (65%&ndash;75% vs 80%&ndash;90%), credit requirements are higher (700&ndash;720 minimum), and reserve requirements are 6&ndash;12 months per property.</strong> A wholesale broker with access to 200+ lenders identifies the lenders that actively offer investment property HELOCs and finds the most competitive terms for your profile.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">What is the maximum LTV for a HELOC on an investment property?</h3>
            <p className="mb-0">
              <strong>Most lenders cap the combined loan-to-value (CLTV) for an investment property HELOC at 65% to 75%, depending on the lender, credit score, and property type.</strong> A few portfolio lenders extend to 75% CLTV for strong borrowers. This compares to 80% to 90% CLTV limits on primary residence HELOCs.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Can I use a HELOC to buy another investment property?</h3>
            <p className="mb-0">
              <strong>Yes, using HELOC funds as a down payment for another investment property is one of the most common uses of both primary residence and investment property HELOCs.</strong> Investors draw from the HELOC for the down payment, finance the acquisition with a separate mortgage or DSCR loan, and repay the HELOC from rental income or refinance proceeds. This revolving capital strategy enables rapid portfolio growth.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Are investment property HELOC rates higher than primary residence HELOC rates?</h3>
            <p className="mb-0">
              <strong>Yes, investment property HELOC rates carry a premium of 0.5% to 1.5% above comparable primary residence HELOC rates because lenders face higher default risk on investment properties.</strong> The exact premium varies by lender, credit score, LTV, and property type. A wholesale broker shopping 200+ lenders finds the smallest available premium.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Do I need to own my rental property free and clear to get a HELOC?</h3>
            <p className="mb-0">
              <strong>No, you do not need to own the property free and clear. You need sufficient equity above the first mortgage to meet the lender&apos;s CLTV limit.</strong> If you owe $300,000 on a property worth $600,000, you have 50% LTV on the first mortgage. A lender with a 70% CLTV limit allows a HELOC up to $120,000 ($600,000 x 70% = $420,000 minus $300,000 first mortgage).
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Can I get a HELOC on a rental property held in an LLC?</h3>
            <p className="mb-0">
              <strong>Some lenders allow HELOCs on properties held in an LLC, but most require the HELOC to be in the individual borrower&apos;s name with a personal guarantee.</strong> Portfolio and specialty lenders are more likely to accommodate LLC-held properties. If your property is in an LLC, a wholesale broker identifies lenders that work with entity-held properties and navigates the additional documentation requirements.
            </p>
          </div>
        </div>

        {/* Extended FAQ Section */}
        <h2 id="faqs">Extended FAQ: HELOC on Rental Property Questions</h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mt-0">{faq.question}</h3>
              <p className="mb-0">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Expert Summary + CTA */}
        <h2 id="expert-summary">Expert Summary: Investment Property HELOC Decision Framework</h2>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h3 className="font-bold text-blue-900 mt-0">Key Takeaways for Rental Property HELOCs</h3>
          <ol className="text-blue-800">
            <li><strong>Investment property HELOCs exist but are harder to get:</strong> Fewer lenders offer them, LTV limits are 65%&ndash;75%, rates carry 0.5%&ndash;1.5% premiums, and credit requirements are 700&ndash;720 minimum</li>
            <li><strong>Primary residence HELOC is often the better strategy:</strong> Higher LTV (80%&ndash;90%), lower rates, easier qualification, and wider availability make it the preferred equity source for many investors</li>
            <li><strong>DSCR loans serve a different purpose:</strong> Fixed-rate, long-term financing qualified on property income vs revolving equity access&mdash;choose based on your capital need</li>
            <li><strong>Reserve requirements are substantial:</strong> Expect 6&ndash;12 months per financed property in verified liquid assets. Plan reserves before applying</li>
            <li><strong>Rental income helps qualification:</strong> Lenders use 75% of gross rental income (25% vacancy factor) to supplement your DTI calculation</li>
            <li><strong>Multi-property investors need portfolio strategy:</strong> Concentrate HELOC access on the strongest property or use primary residence as the central funding engine</li>
            <li><strong>LLC ownership complicates HELOC access:</strong> Most lenders require individual borrower; specialty lenders accommodate entity structures</li>
            <li><strong>Wholesale broker access is essential:</strong> With 30%&ndash;40% of retail lenders not offering the product, a broker shopping 200+ lenders is the most efficient path to approval and competitive terms</li>
          </ol>
        </div>

        <div className="bg-green-50 p-8 rounded-xl border border-green-200 my-8 text-center">
          <h3 className="text-2xl font-bold text-green-900 mt-0">Access Equity in Your Rental Property</h3>
          <p className="text-green-800 text-lg mb-4">
            Tell me about your rental property&mdash;value, current mortgage balance, credit score, and how many financed properties you own&mdash;and I will identify the lenders offering the best investment HELOC terms for your profile. If a primary residence HELOC or DSCR loan is a better fit, I will structure that comparison too. No obligation, no pressure.
          </p>
          <p className="text-green-900 font-bold text-xl mb-2">
            Call Mo Abdel: <a href="tel:9495792057" className="text-green-700 hover:underline">(949) 579-2057</a>
          </p>
          <p className="text-green-800">
            NMLS #1426884 | Lumin Lending NMLS #2716106
          </p>
          <p className="text-green-800 text-sm mt-3">
            Free consultation. Serving California and Washington real estate investors.
          </p>
        </div>

        <h2>Related Investment Property and HELOC Resources</h2>

        <ul>
          <li><Link href="/loan-programs/heloc" className="text-blue-600 hover:underline">HELOC Programs</Link></li>
          <li><Link href="/blog/heloc-investment-property-2026" className="text-blue-600 hover:underline">HELOC for Investment Property: Complete Guide</Link></li>
          <li><Link href="/blog/cash-out-refinance-investment-property-rental-2026" className="text-blue-600 hover:underline">Cash-Out Refinance on Investment Property</Link></li>
          <li><Link href="/blog/dscr-loans-explained-investors-2026" className="text-blue-600 hover:underline">DSCR Loans Explained for Investors [2026]</Link></li>
          <li><Link href="/loan-programs/cash-out-refinance" className="text-blue-600 hover:underline">Cash-Out Refinance Programs</Link></li>
          <li><Link href="/tools/equity-comparison-calculator" className="text-blue-600 hover:underline">Equity Comparison Calculator</Link></li>
          <li><Link href="/tools/max-heloc-calculator" className="text-blue-600 hover:underline">Max HELOC Calculator</Link></li>
          <li><Link href="/tools/dscr-qualification-calculator" className="text-blue-600 hover:underline">DSCR Qualification Calculator</Link></li>
          <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Mo Abdel for a Free Quote</Link></li>
        </ul>

        <h3>External Resources</h3>

        <ul>
          <li><a href="https://www.federalreserve.gov/publications/2025-november-financial-stability-report.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Federal Reserve: Financial Stability Report</a></li>
          <li><a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-home-equity-line-of-credit-heloc-en-106/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CFPB: What Is a HELOC?</a></li>
          <li><a href="https://www.fanniemae.com/content/eligibility_information/eligibility-matrix.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Fannie Mae: Eligibility Matrix (LTV Limits)</a></li>
        </ul>
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443<br />
            <br />
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. This is not a commitment to lend. Not all borrowers will qualify. Investment property HELOC availability, LTV limits, rate premiums, reserve requirements, and qualification standards described in this article are general estimates and vary by lender, property type, borrower profile, and market conditions. DSCR loan terms vary by lender and property cash flow. Using a primary residence HELOC to fund investment purchases places your home at risk as collateral. Consult a licensed mortgage professional and financial advisor before implementing any investment financing strategy. Licensed in California and Washington. Information is for educational purposes only.
          </p>
        </div>
      </footer>
    </article>
  );
}
