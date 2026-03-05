import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mortgage Discount Points & Rate Buydowns: When Points Save You Money [2026]',
  description: 'Complete guide to mortgage discount points and rate buydowns. Break-even analysis, 2-1 buydown vs permanent buydown, seller-paid options, and how wholesale broker access to 200+ lenders delivers competitive point pricing. NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/mortgage-discount-points-buydown-strategy-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/mortgage-discount-points-buydown-strategy-2026',
      'x-default': 'https://www.mothebroker.com/blog/mortgage-discount-points-buydown-strategy-2026',
    },
  },
  keywords: [
    'mortgage discount points',
    'rate buydown mortgage',
    'mortgage points break even',
    '2-1 buydown mortgage',
    'seller paid buydown',
    'permanent rate buydown',
    'discount points vs no points',
    'mortgage points worth it',
  ],
  openGraph: {
    title: 'Mortgage Discount Points & Rate Buydowns: When Points Save You Money [2026]',
    description: 'Complete guide to mortgage discount points and rate buydowns. Break-even analysis, 2-1 buydown vs permanent buydown, seller-paid options, and how wholesale broker access to 200+ lenders delivers competitive point pricing.',
    url: 'https://www.mothebroker.com/blog/mortgage-discount-points-buydown-strategy-2026',
    type: 'article',
    publishedTime: '2026-03-03',
    modifiedTime: '2026-03-03',
  },
};

const faqData = [
  {
    question: 'What is a mortgage discount point?',
    answer: 'A mortgage discount point is a prepaid interest charge equal to 1% of the loan amount that reduces your interest rate. On a $500,000 mortgage, one discount point costs $5,000. The rate reduction per point varies by lender and market conditions but typically reduces the rate by 0.125% to 0.25% per point. Discount points are paid at closing as part of your closing costs and are separate from origination fees. The cost is either paid in cash or financed into the loan balance.',
  },
  {
    question: 'How many discount points can I buy on a mortgage?',
    answer: 'Most lenders allow borrowers to purchase 0 to 3 discount points on a mortgage, though some wholesale lenders permit up to 4 points. Each additional point provides a diminishing rate reduction — the first point typically provides a larger rate decrease than the second or third point. Buying more than 2 points is rarely cost-effective because the break-even period extends beyond the average mortgage holding period. Your broker can calculate the exact rate reduction and break-even period for each point increment from multiple lenders.',
  },
  {
    question: 'What is the difference between a discount point and an origination point?',
    answer: 'A discount point reduces your interest rate and is prepaid interest. An origination point is a lender fee that covers loan processing and underwriting costs and does not reduce your rate. Both cost 1% of the loan amount per point, but only discount points lower your monthly payment. Some lenders bundle both into a single "points" line item on the loan estimate, making it difficult to distinguish. Ask your broker to separate discount points from origination fees so you can evaluate each independently.',
  },
  {
    question: 'Are mortgage discount points tax deductible?',
    answer: 'Mortgage discount points paid on a purchase loan are generally tax deductible in the year paid if the loan is used to buy or build your primary residence. Points on a refinance are typically deducted over the life of the loan (amortized). The Tax Cuts and Jobs Act retained the points deduction but increased the standard deduction, so fewer borrowers itemize. Consult your CPA to determine whether itemizing with points deduction provides a greater tax benefit than the standard deduction in your specific situation.',
  },
  {
    question: 'What is a 2-1 buydown and how does it work?',
    answer: 'A 2-1 buydown is a temporary rate reduction where the rate is reduced by 2% in the first year and 1% in the second year, then adjusts to the full note rate for the remaining loan term. On a 30-year fixed mortgage, if the note rate is 6.5%, the borrower pays based on 4.5% in year one and 5.5% in year two, then 6.5% for years 3 through 30. The cost of the buydown (the difference in monthly payments for years 1 and 2) is paid upfront at closing — often by the seller as a concession.',
  },
  {
    question: 'Who pays for a rate buydown — the buyer or the seller?',
    answer: 'Either the buyer or the seller can pay for a rate buydown. In competitive markets, buyers typically pay for permanent discount points from their own funds. In buyer-friendly markets, sellers often fund temporary buydowns (2-1 or 1-0) as a negotiated concession to attract offers. Builders frequently offer buydowns on new construction as a marketing incentive. Regardless of who funds the buydown, the buyer receives the reduced payment. Your broker can structure the offer to include seller-paid buydown terms.',
  },
  {
    question: 'Is a 2-1 buydown better than discount points?',
    answer: 'A 2-1 buydown provides larger monthly savings in the first two years but no long-term rate benefit. Permanent discount points provide smaller monthly savings but last for the entire loan term. If you plan to hold the mortgage for more than 7 years, permanent points typically deliver greater total savings. If you plan to refinance or sell within 5 years, a 2-1 buydown (especially seller-paid) provides more immediate value. Your broker should run both scenarios with your specific numbers.',
  },
  {
    question: 'How long does it take to break even on mortgage discount points?',
    answer: 'The break-even period for mortgage discount points depends on the cost per point, the rate reduction achieved, and your loan amount. Typical break-even periods range from 4 to 7 years. To calculate: divide the total point cost by the monthly payment savings. If one point costs $5,000 and reduces your monthly payment by $75, the break-even period is 67 months (about 5.5 years). You recoup the investment through lower payments after the break-even point. If you sell or refinance before break-even, points cost you money.',
  },
  {
    question: 'Do wholesale mortgage brokers get better pricing on discount points?',
    answer: 'Yes, wholesale mortgage brokers access point pricing from 200+ lenders, and point costs vary significantly between lenders. One lender may charge $4,500 per point on a $500,000 loan to reduce the rate by 0.25%, while another charges $3,800 for the same reduction. A wholesale broker identifies which lender offers the most efficient point pricing — the greatest rate reduction per dollar spent. Retail banks offer only their own point schedule with no comparison shopping, which means you may pay more per point for less rate reduction.',
  },
  {
    question: 'Can I buy discount points on an FHA or VA loan?',
    answer: 'Yes, discount points are available on FHA, VA, conventional, and jumbo loans. FHA and VA loans allow seller-paid discount points as part of seller concessions (subject to concession limits — typically 6% for FHA and 4% for VA). Discount points on government loans work the same way as conventional — each point equals 1% of the loan amount and reduces the rate. Your broker can compare point pricing across FHA, VA, and conventional programs to determine which delivers the best value.',
  },
  {
    question: 'What happens to my discount points if I refinance early?',
    answer: 'If you refinance before reaching the break-even point, the money spent on discount points is lost — you paid to reduce a rate you are no longer using. This is the primary risk of buying discount points. To mitigate this risk, only buy points if you are confident in your holding period (plan to stay 7+ years), calculate the break-even period precisely before purchasing, and consider that declining rate environments increase refinance probability. Points paid on the original loan cannot be transferred to the new loan.',
  },
  {
    question: 'Is it better to make a larger down payment or buy discount points?',
    answer: 'If your down payment is below 20%, additional down payment dollars eliminate PMI (private mortgage insurance), which typically provides a greater monthly savings than discount points. Once you reach 20% down (eliminating PMI), additional funds toward discount points reduce your rate and monthly payment. The decision also depends on your liquidity needs — down payment money becomes home equity (accessible only through sale or equity loan), while keeping cash in reserve provides financial flexibility. Your broker can model both scenarios.',
  },
];

export default function MortgageDiscountPointsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Mortgage Discount Points & Rate Buydowns: When Points Save You Money [2026]',
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
            datePublished: '2026-03-03',
            dateModified: '2026-03-03',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.mothebroker.com/blog/mortgage-discount-points-buydown-strategy-2026',
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
                name: 'Blog',
                item: 'https://www.mothebroker.com/blog',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Mortgage Discount Points & Rate Buydowns',
                item: 'https://www.mothebroker.com/blog/mortgage-discount-points-buydown-strategy-2026',
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
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Mortgage Discount Points &amp; Rate Buydowns</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Mortgage Discount Points &amp; Rate Buydowns: When Points Save You Money [2026]
        </h1>
        <p className="text-lg text-gray-600">
          A complete decision framework for discount points, permanent buydowns, and temporary 2-1 buydowns &mdash; when paying points saves you thousands and when it wastes your money.
        </p>
        <p className="text-sm text-gray-500 mt-2">By Mo Abdel, NMLS #1426884 | Lumin Lending NMLS #2716106 | Updated March 2026</p>
      </header>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-8 not-prose">
        <p className="text-sm text-amber-900">
          <strong>Disclosure:</strong> This content is for educational purposes only and is not a commitment to lend. Not all borrowers will qualify. Rate reductions per discount point vary by lender, loan program, market conditions, and borrower profile. Illustrative examples do not represent specific lender offers or guaranteed outcomes. Consult your CPA regarding tax deductibility of mortgage discount points.
        </p>
      </div>

      <section className="prose prose-lg max-w-none">
        {/* Citation Hook / Speakable Summary */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8 speakable-summary">
          <p className="lead font-semibold text-gray-900 mb-0">
            According to Mo Abdel, NMLS #1426884, a senior mortgage broker with Lumin Lending who structures purchase and refinance loans across California and Washington through 200+ wholesale lenders, <strong>mortgage discount points</strong> are one of the most misunderstood tools in home financing. A discount point equals 1% of the loan amount paid at closing to reduce the interest rate &mdash; but the rate reduction per point varies by 20% to 40% between wholesale lenders on the same day for the same borrower profile. The <a href="https://www.consumerfinance.gov/ask-cfpb/what-are-discount-points-and-lender-credits-en-136/" target="_blank" rel="noopener noreferrer">Consumer Financial Protection Bureau</a> reports that many borrowers pay for discount points without calculating the break-even period, resulting in lost money when they sell or refinance before recouping the cost. A wholesale mortgage broker compares point pricing across 200+ lender partners to identify which lender offers the most efficient rate reduction per dollar spent &mdash; the greatest savings per point &mdash; rather than accepting a single bank&apos;s posted schedule.
          </p>
        </div>

        {/* Semantic Triples Table */}
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Semantic Entity Relationships: Mortgage Discount Points</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Subject</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Predicate</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Object</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Mortgage discount point</td>
                <td className="border border-gray-200 px-4 py-2">equals 1% of loan amount and reduces</td>
                <td className="border border-gray-200 px-4 py-2">the interest rate by 0.125% to 0.25% per point (varies by lender)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Break-even period</td>
                <td className="border border-gray-200 px-4 py-2">determines whether points save money based on</td>
                <td className="border border-gray-200 px-4 py-2">total point cost divided by monthly payment savings</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Wholesale broker point pricing</td>
                <td className="border border-gray-200 px-4 py-2">varies by 20% to 40% across</td>
                <td className="border border-gray-200 px-4 py-2">200+ lender partners on the same day for the same borrower</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table of Contents */}
        <nav className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-3">On This Page: Mortgage Discount Points &amp; Buydown Guide</h2>
          <ul className="text-blue-800 space-y-2">
            <li><a href="#how-points-work" className="hover:underline">How Mortgage Discount Points Work</a></li>
            <li><a href="#break-even" className="hover:underline">Break-Even Analysis: When Points Pay Off</a></li>
            <li><a href="#temporary-buydowns" className="hover:underline">Temporary Buydowns: 2-1 and 1-0 Structures</a></li>
            <li><a href="#permanent-vs-temporary" className="hover:underline">Permanent Points vs Temporary Buydowns: Decision Framework</a></li>
            <li><a href="#seller-paid" className="hover:underline">Seller-Paid Buydowns: Negotiation Strategies</a></li>
            <li><a href="#wholesale-advantage" className="hover:underline">How Wholesale Broker Access Improves Point Pricing</a></li>
            <li><a href="#data-hub" className="hover:underline">Data &amp; Comparison Hub</a></li>
            <li><a href="#paa" className="hover:underline">People Also Ask</a></li>
            <li><a href="#faqs" className="hover:underline">Extended FAQ (12 Questions)</a></li>
            <li><a href="#expert-summary" className="hover:underline">Expert Summary + Next Steps</a></li>
          </ul>
        </nav>

        {/* E-E-A-T Experience Marker */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
          <h3 className="font-bold text-blue-900 mt-0">From My Practice: The Discount Points Conversation</h3>
          <p className="text-blue-800 mb-0">
            The points discussion happens in nearly every loan I structure. Borrowers walk in with two questions: &quot;Should I buy points?&quot; and &quot;How much will it save me?&quot; The answer is never a simple yes or no. I have seen borrowers save over $40,000 in lifetime interest by purchasing 1.5 points on a loan they held for 12 years. I have also seen borrowers waste $8,000 on points for a loan they refinanced 18 months later when rates dropped. The difference between a smart points decision and a costly one comes down to three variables: how long you will hold the loan, how much rate reduction each point buys from each lender, and whether a temporary buydown structure serves your cash flow needs better than a permanent rate reduction. This guide covers the exact framework I use with California and Washington clients to make that determination. &mdash; <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* Section 1: How Points Work */}
        <h2 id="how-points-work">How Mortgage Discount Points Work: Mechanics and Cost Structure</h2>

        <p>
          A <strong>mortgage discount point</strong> is a form of prepaid interest. You pay a lump sum at closing, and in return, the lender reduces your interest rate for the life of the loan. Here is how the mechanics work in practice.
        </p>

        <h3>The Basic Math</h3>

        <ol>
          <li><strong>Cost per point:</strong> 1% of the loan amount. On a $600,000 mortgage, one point costs $6,000. On a $400,000 mortgage, one point costs $4,000.</li>
          <li><strong>Rate reduction per point:</strong> Varies by lender and market conditions. Typical range is 0.125% to 0.25% per point. This means one point on a $600,000 loan reduces your rate by 0.125% to 0.25%.</li>
          <li><strong>Monthly payment impact:</strong> On a $600,000 30-year fixed mortgage, a 0.25% rate reduction lowers the monthly principal and interest payment by approximately $90 to $100.</li>
          <li><strong>Lifetime interest savings:</strong> That same 0.25% reduction saves approximately $32,000 to $36,000 in total interest over a full 30-year term (actual savings depend on the starting rate).</li>
        </ol>

        <h3>Discount Points vs Origination Points: Critical Distinction</h3>

        <p>
          Both are expressed as a percentage of the loan amount, but they serve entirely different purposes. <strong>Discount points</strong> reduce your rate &mdash; they are prepaid interest that benefits you. <strong>Origination points</strong> are a lender fee for processing your loan &mdash; they do not reduce your rate and provide no ongoing benefit. Some lenders combine both into a single &quot;points&quot; line on the loan estimate, obscuring the true cost. Always ask your broker to separate discount points from origination fees so you can evaluate each independently.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Discount Points vs Origination Points</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Discount Point</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Origination Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Cost</td>
                <td className="border border-gray-200 px-4 py-2">1% of loan amount per point</td>
                <td className="border border-gray-200 px-4 py-2">1% of loan amount per point</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Purpose</td>
                <td className="border border-gray-200 px-4 py-2">Reduces interest rate (prepaid interest)</td>
                <td className="border border-gray-200 px-4 py-2">Lender fee for loan processing</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Benefit to borrower</td>
                <td className="border border-gray-200 px-4 py-2">Lower monthly payment for life of loan</td>
                <td className="border border-gray-200 px-4 py-2">None (cost of doing business)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Tax deductible</td>
                <td className="border border-gray-200 px-4 py-2">Generally yes for purchase (consult CPA)</td>
                <td className="border border-gray-200 px-4 py-2">Generally no (consult CPA)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Optional</td>
                <td className="border border-gray-200 px-4 py-2">Yes &mdash; borrower chooses how many</td>
                <td className="border border-gray-200 px-4 py-2">Depends on lender (0% to 1.5%)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Fractional Points</h3>

        <p>
          You are not limited to whole points. Most lenders offer pricing in increments of 0.125 points (one-eighth) or 0.25 points (one-quarter). You can buy 0.5 points, 0.75 points, 1.25 points, or any increment available on the lender&apos;s rate sheet. This granularity allows you to fine-tune the cost-benefit ratio rather than committing to a full point that may exceed your break-even tolerance. Your broker can show you the rate reduction at each increment across multiple lenders.
        </p>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-6">
          <h4 className="font-bold text-green-800 mt-0">Key Data Point: Point Pricing Variability</h4>
          <p className="text-green-900 mb-0">
            Based on wholesale rate sheets sourced through Mo Abdel&apos;s 200+ lender network, the rate reduction per discount point on a $500,000 30-year conventional loan varies from 0.125% to 0.25% across lenders on any given day. That means one lender charges $5,000 to reduce the rate by 0.125%, while another charges $5,000 to reduce the rate by 0.25% &mdash; <strong>double the value for the same dollar spent</strong>. This pricing variability is the primary reason a wholesale broker comparison delivers superior results.
          </p>
        </div>

        {/* Section 2: Break-Even Analysis */}
        <h2 id="break-even">Break-Even Analysis: When Mortgage Discount Points Pay Off</h2>

        <p>
          The <strong>break-even period</strong> is the single most important calculation in the points decision. It answers: &quot;How long do I need to keep this mortgage before the points I paid start saving me money?&quot;
        </p>

        <h3>Break-Even Formula</h3>

        <p>
          <strong>Break-even (months) = Total point cost &divide; Monthly payment savings</strong>
        </p>

        <h3>Break-Even Scenarios on a $600,000 30-Year Fixed Mortgage</h3>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Illustrative Break-Even Analysis: $600,000 Loan, 30-Year Fixed</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Points Purchased</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Cost</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Rate Reduction (Illustrative)</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Monthly Savings (Approx.)</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Break-Even Period</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Savings Over 10 Years</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">0.5 points</td>
                <td className="border border-gray-200 px-4 py-2">$3,000</td>
                <td className="border border-gray-200 px-4 py-2">~0.125%</td>
                <td className="border border-gray-200 px-4 py-2">~$47</td>
                <td className="border border-gray-200 px-4 py-2">~64 months (5.3 yrs)</td>
                <td className="border border-gray-200 px-4 py-2">~$2,640 net savings</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">1.0 point</td>
                <td className="border border-gray-200 px-4 py-2">$6,000</td>
                <td className="border border-gray-200 px-4 py-2">~0.25%</td>
                <td className="border border-gray-200 px-4 py-2">~$95</td>
                <td className="border border-gray-200 px-4 py-2">~63 months (5.3 yrs)</td>
                <td className="border border-gray-200 px-4 py-2">~$5,400 net savings</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">1.5 points</td>
                <td className="border border-gray-200 px-4 py-2">$9,000</td>
                <td className="border border-gray-200 px-4 py-2">~0.375%</td>
                <td className="border border-gray-200 px-4 py-2">~$138</td>
                <td className="border border-gray-200 px-4 py-2">~65 months (5.4 yrs)</td>
                <td className="border border-gray-200 px-4 py-2">~$7,560 net savings</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">2.0 points</td>
                <td className="border border-gray-200 px-4 py-2">$12,000</td>
                <td className="border border-gray-200 px-4 py-2">~0.50%</td>
                <td className="border border-gray-200 px-4 py-2">~$180</td>
                <td className="border border-gray-200 px-4 py-2">~67 months (5.6 yrs)</td>
                <td className="border border-gray-200 px-4 py-2">~$9,600 net savings</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <em>Note: These are illustrative figures based on general market conditions. Actual rate reductions, monthly savings, and break-even periods vary by lender, loan program, and current market environment. Your broker will provide exact calculations based on live wholesale rate sheets for your specific loan scenario.</em>
        </p>

        <h3>The Break-Even Decision Rule</h3>

        <ol>
          <li><strong>Plan to hold less than 4 years:</strong> Do not buy discount points. The break-even period exceeds your holding period, so points cost you money.</li>
          <li><strong>Plan to hold 4 to 7 years:</strong> Consider a partial point (0.25 to 0.5) for a shorter break-even period. Full points are marginal at this holding period.</li>
          <li><strong>Plan to hold 7+ years:</strong> Discount points are generally beneficial. The longer you hold, the more you save beyond break-even. Each additional month of lower payments is pure savings.</li>
          <li><strong>Plan to hold 15+ years or to term:</strong> Maximize points to the extent they provide efficient rate reduction. The lifetime savings can be substantial &mdash; $30,000 to $60,000+ on a $600,000 loan.</li>
        </ol>

        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 my-6">
          <h4 className="font-bold text-yellow-800 mt-0">Important Consideration: The Opportunity Cost of Points</h4>
          <p className="text-yellow-900 mb-0">
            The break-even analysis does not account for the <strong>opportunity cost</strong> of the money spent on points. If you invest $6,000 in a market index fund instead of spending it on one discount point, and the fund returns 7% annually, that $6,000 grows to approximately $11,800 in 10 years. The true break-even point is longer when you factor in what the money could have earned elsewhere. I always run this expanded analysis for clients who have investment alternatives for their cash. &mdash; <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* Section 3: Temporary Buydowns */}
        <h2 id="temporary-buydowns">Temporary Rate Buydowns: 2-1 and 1-0 Buydown Structures</h2>

        <p>
          A <strong>temporary rate buydown</strong> reduces the borrower&apos;s effective interest rate for the first one to two years of the loan, then adjusts to the full note rate for the remaining term. Unlike permanent discount points, a temporary buydown does not change the note rate &mdash; it subsidizes the payment difference upfront.
        </p>

        <h3>How a 2-1 Buydown Works</h3>

        <ol>
          <li><strong>Year 1:</strong> The borrower&apos;s payment is calculated at 2% below the note rate</li>
          <li><strong>Year 2:</strong> The borrower&apos;s payment is calculated at 1% below the note rate</li>
          <li><strong>Years 3&ndash;30:</strong> The borrower pays at the full note rate</li>
          <li><strong>Cost:</strong> The difference between the subsidized payments and the full payments for years 1 and 2 is paid upfront at closing and placed in an escrow account</li>
        </ol>

        <h3>2-1 Buydown Cost and Savings Illustration</h3>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Illustrative 2-1 Buydown: $600,000 Loan, 30-Year Fixed</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Year</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Effective Rate</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Monthly P&amp;I (Approx.)</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Monthly Savings vs Full Rate</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Annual Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Year 1</td>
                <td className="border border-gray-200 px-4 py-2">Note rate &minus; 2%</td>
                <td className="border border-gray-200 px-4 py-2">Substantially reduced</td>
                <td className="border border-gray-200 px-4 py-2">~$700 &ndash; $750</td>
                <td className="border border-gray-200 px-4 py-2">~$8,400 &ndash; $9,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Year 2</td>
                <td className="border border-gray-200 px-4 py-2">Note rate &minus; 1%</td>
                <td className="border border-gray-200 px-4 py-2">Moderately reduced</td>
                <td className="border border-gray-200 px-4 py-2">~$360 &ndash; $390</td>
                <td className="border border-gray-200 px-4 py-2">~$4,320 &ndash; $4,680</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Years 3&ndash;30</td>
                <td className="border border-gray-200 px-4 py-2">Full note rate</td>
                <td className="border border-gray-200 px-4 py-2">Full payment</td>
                <td className="border border-gray-200 px-4 py-2">$0</td>
                <td className="border border-gray-200 px-4 py-2">$0</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-200 px-4 py-2 font-bold" colSpan={3}>Total 2-1 buydown cost (paid upfront)</td>
                <td className="border border-gray-200 px-4 py-2 font-bold" colSpan={2}>~$12,700 &ndash; $13,700</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <em>Note: These figures are illustrative. Actual 2-1 buydown costs depend on the note rate, loan amount, and lender pricing. Your broker will provide exact calculations based on your specific loan scenario.</em>
        </p>

        <h3>How a 1-0 Buydown Works</h3>

        <p>
          A <strong>1-0 buydown</strong> reduces the rate by 1% in year one only, then adjusts to the full note rate in year two and beyond. The cost is approximately half of a 2-1 buydown. This structure works well for borrowers who need a lower initial payment but expect income growth or plan to refinance within 12 to 18 months.
        </p>

        <h3>Who Pays for Temporary Buydowns</h3>

        <ul>
          <li><strong>Seller concession:</strong> The most common funding source. Sellers offer buydowns to attract buyers without reducing the sale price. Conventional loans allow up to 3% to 9% seller concessions depending on down payment; FHA allows up to 6%; VA allows up to 4%.</li>
          <li><strong>Builder incentive:</strong> New construction builders frequently offer 2-1 buydowns as a standard incentive to move inventory, especially in buyer-friendly market conditions.</li>
          <li><strong>Buyer-funded:</strong> The buyer can pay for the buydown from their own funds, though this is less common since those dollars could be used for down payment or permanent discount points instead.</li>
          <li><strong>Lender credit:</strong> Some wholesale lenders offer buydown programs funded by a slightly higher note rate, effectively creating a zero-cost temporary buydown for the borrower.</li>
        </ul>

        {/* Section 4: Permanent vs Temporary */}
        <h2 id="permanent-vs-temporary">Permanent Discount Points vs Temporary Buydowns: Decision Framework</h2>

        <p>
          Permanent discount points and temporary buydowns both reduce your monthly payment, but they work differently and serve different purposes. This framework helps you choose the right strategy.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Permanent Points vs Temporary Buydown Comparison</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Decision Factor</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Permanent Discount Points</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Temporary 2-1 Buydown</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Rate reduction duration</td>
                <td className="border border-gray-200 px-4 py-2">Life of the loan (15 or 30 years)</td>
                <td className="border border-gray-200 px-4 py-2">First 2 years only</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Monthly savings magnitude</td>
                <td className="border border-gray-200 px-4 py-2">Moderate (0.25% rate cut per point)</td>
                <td className="border border-gray-200 px-4 py-2">Large in Year 1 (2% cut), moderate in Year 2 (1% cut)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Ideal holding period</td>
                <td className="border border-gray-200 px-4 py-2">7+ years (longer = more savings)</td>
                <td className="border border-gray-200 px-4 py-2">Any (immediate savings regardless)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Who typically pays</td>
                <td className="border border-gray-200 px-4 py-2">Buyer (from closing funds)</td>
                <td className="border border-gray-200 px-4 py-2">Seller, builder, or lender (as concession)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Impact on note rate</td>
                <td className="border border-gray-200 px-4 py-2">Permanently lowers the note rate</td>
                <td className="border border-gray-200 px-4 py-2">Note rate unchanged (payment subsidized)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Refinance risk</td>
                <td className="border border-gray-200 px-4 py-2">Money lost if refinance before break-even</td>
                <td className="border border-gray-200 px-4 py-2">Unused escrow may be refunded (varies by program)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Tax deductibility</td>
                <td className="border border-gray-200 px-4 py-2">Generally deductible (consult CPA)</td>
                <td className="border border-gray-200 px-4 py-2">Not directly deductible by buyer (consult CPA)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>When to Choose Permanent Discount Points</h3>

        <ul>
          <li>You are confident you will hold the loan for <strong>7 or more years</strong></li>
          <li>You have <strong>excess cash at closing</strong> beyond your down payment and reserve requirements</li>
          <li>Rates are elevated and you do <strong>not expect a refinance opportunity</strong> in the near term</li>
          <li>You want to <strong>maximize long-term savings</strong> and the tax deduction (consult your CPA)</li>
        </ul>

        <h3>When to Choose a Temporary Buydown</h3>

        <ul>
          <li>The <strong>seller or builder is funding</strong> the buydown (free money to the buyer)</li>
          <li>You expect <strong>income growth</strong> in the next 2 to 3 years and need lower initial payments now</li>
          <li>You <strong>plan to refinance</strong> when rates drop and want near-term payment relief</li>
          <li>You prefer to <strong>preserve cash</strong> for reserves, investments, or home improvements rather than committing to permanent points</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h4 className="font-bold text-blue-900 mt-0">Experience Note: The Combined Strategy</h4>
          <p className="text-blue-800 mb-0">
            In my California and Washington closings, I frequently structure a combined approach: a seller-paid 2-1 buydown plus buyer-paid 0.5 to 1.0 permanent discount points. The seller funds the temporary buydown (reducing the buyer&apos;s payment substantially in years 1 and 2), and the buyer purchases permanent points to lock in a lower note rate for the life of the loan. When year 3 arrives, the payment steps up from the buydown but is still lower than it would have been without the permanent points. This approach delivers both immediate cash flow relief and long-term savings. Not every transaction supports this structure, but when seller concessions are available, it is a powerful combination. &mdash; <strong>Mo Abdel, NMLS #1426884</strong>
          </p>
        </div>

        {/* Section 5: Seller-Paid Buydowns */}
        <h2 id="seller-paid">Seller-Paid Buydowns: Negotiation Strategies for Buyers</h2>

        <p>
          A <strong>seller-paid buydown</strong> is a negotiated concession where the seller contributes funds at closing to reduce the buyer&apos;s effective interest rate. This is one of the most valuable negotiation tools in the current market, and your broker can structure the offer to include specific buydown terms.
        </p>

        <h3>Why Sellers Agree to Fund Buydowns</h3>

        <ol>
          <li><strong>Maintains sale price:</strong> A seller-paid buydown reduces the buyer&apos;s payment without reducing the purchase price. Sellers prefer this because it preserves their net proceeds and comparable sale value for neighbors.</li>
          <li><strong>Expands buyer pool:</strong> Lower effective payments qualify more buyers. A 2-1 buydown on a $600,000 loan can make the payment $700+ per month lower in year one, bringing the property within reach of buyers who would otherwise be priced out.</li>
          <li><strong>Days on market reduction:</strong> Properties with built-in buydown offers often attract more showings and offers, reducing time on market.</li>
          <li><strong>Alternative to price reduction:</strong> A $13,000 buydown costs the seller less than a $20,000+ price reduction while providing comparable buyer benefit in monthly payment terms.</li>
        </ol>

        <h3>Seller Concession Limits by Loan Type</h3>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Loan Type</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Max Seller Concession</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Down Payment Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Conventional</td>
                <td className="border border-gray-200 px-4 py-2">3% to 9%</td>
                <td className="border border-gray-200 px-4 py-2">3% for &lt;10% down; 6% for 10&ndash;25% down; 9% for 25%+ down</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">FHA</td>
                <td className="border border-gray-200 px-4 py-2">6%</td>
                <td className="border border-gray-200 px-4 py-2">Regardless of down payment amount</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">VA</td>
                <td className="border border-gray-200 px-4 py-2">4%</td>
                <td className="border border-gray-200 px-4 py-2">Regardless of down payment (plus all normal closing costs)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Jumbo</td>
                <td className="border border-gray-200 px-4 py-2">Varies by lender</td>
                <td className="border border-gray-200 px-4 py-2">Typically 3% to 6% depending on the wholesale lender</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Seller-paid buydowns and discount points both count toward the seller concession limit. Your broker structures the offer to maximize the benefit within these caps. On a $600,000 conventional purchase with 20% down, the seller can contribute up to 6% ($36,000) &mdash; more than enough to fund a 2-1 buydown plus permanent discount points.
        </p>

        {/* Section 6: Wholesale Advantage */}
        <h2 id="wholesale-advantage">How Wholesale Broker Access Improves Mortgage Point Pricing</h2>

        <p>
          The value of a discount point is not fixed &mdash; it varies significantly between lenders. A wholesale mortgage broker exploits this variation by comparing point pricing across 200+ wholesale lender partners to find the lender that delivers the most rate reduction per dollar spent.
        </p>

        <h3>Why Point Pricing Varies Between Lenders</h3>

        <ol>
          <li><strong>Lender hedging costs:</strong> Each lender hedges interest rate risk differently. Lenders with lower hedging costs can offer more rate reduction per point.</li>
          <li><strong>Portfolio appetite:</strong> Lenders actively seeking specific loan types (jumbo, high-FICO conventional, VA) offer more aggressive point pricing on those products.</li>
          <li><strong>Margin structure:</strong> Wholesale lenders build different margins into their rate sheets. A lender with a lower margin offers more efficient point pricing.</li>
          <li><strong>Volume incentives:</strong> Brokers with high volume at specific lenders may receive improved pricing tiers, which flow directly to the borrower.</li>
        </ol>

        <h3>Wholesale vs Retail Point Pricing</h3>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Point Pricing Comparison: Wholesale Channel vs Retail Bank</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Factor</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Wholesale Broker (200+ Lenders)</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Retail Bank (Single Lender)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Rate sheet options</td>
                <td className="border border-gray-200 px-4 py-2">200+ rate sheets compared daily</td>
                <td className="border border-gray-200 px-4 py-2">1 rate sheet (their own)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Rate reduction per point</td>
                <td className="border border-gray-200 px-4 py-2">Selects lender with best reduction</td>
                <td className="border border-gray-200 px-4 py-2">Fixed per their schedule</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Fractional point granularity</td>
                <td className="border border-gray-200 px-4 py-2">0.125-point increments typical</td>
                <td className="border border-gray-200 px-4 py-2">0.25 or 0.5-point increments typical</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Buydown program availability</td>
                <td className="border border-gray-200 px-4 py-2">2-1, 1-0, 3-2-1, lender-funded options</td>
                <td className="border border-gray-200 px-4 py-2">Limited to bank&apos;s own programs</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Negotiation leverage</td>
                <td className="border border-gray-200 px-4 py-2">Competition between lenders drives pricing down</td>
                <td className="border border-gray-200 px-4 py-2">Take-it-or-leave-it pricing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          In practice, this pricing variability means a wholesale broker client paying one point on a $600,000 loan may achieve a 0.25% rate reduction, while a retail bank client paying the same one point achieves only a 0.125% reduction. The wholesale client gets <strong>twice the rate reduction for the same dollar amount</strong>. Over 10 years, that difference translates to approximately $5,000 to $6,000 in additional interest savings.
        </p>

        {/* Data Comparison Hub */}
        <h2 id="data-hub">Data &amp; Comparison Hub: Mortgage Discount Point Benchmarks</h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200">
            <caption className="text-sm text-gray-500 mb-2">Mortgage Discount Point Benchmarks: California &amp; Washington (2026)</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Metric</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Permanent Discount Points</th>
                <th className="border border-gray-200 px-4 py-2 text-left">2-1 Temporary Buydown</th>
                <th className="border border-gray-200 px-4 py-2 text-left">1-0 Temporary Buydown</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Cost on $600K loan (1 point)</td>
                <td className="border border-gray-200 px-4 py-2">$6,000</td>
                <td className="border border-gray-200 px-4 py-2">~$12,700 &ndash; $13,700</td>
                <td className="border border-gray-200 px-4 py-2">~$8,400 &ndash; $9,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Rate reduction</td>
                <td className="border border-gray-200 px-4 py-2">0.125% &ndash; 0.25% permanent</td>
                <td className="border border-gray-200 px-4 py-2">2% Yr 1 + 1% Yr 2 (temporary)</td>
                <td className="border border-gray-200 px-4 py-2">1% Yr 1 only (temporary)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Break-even period</td>
                <td className="border border-gray-200 px-4 py-2">4 &ndash; 7 years typical</td>
                <td className="border border-gray-200 px-4 py-2">Immediate (savings start month 1)</td>
                <td className="border border-gray-200 px-4 py-2">Immediate (savings start month 1)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">10-year net savings (1 point)</td>
                <td className="border border-gray-200 px-4 py-2">$5,000 &ndash; $6,000+</td>
                <td className="border border-gray-200 px-4 py-2">$0 (savings end at year 2)</td>
                <td className="border border-gray-200 px-4 py-2">$0 (savings end at year 1)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Seller-payable</td>
                <td className="border border-gray-200 px-4 py-2">Yes (within concession limits)</td>
                <td className="border border-gray-200 px-4 py-2">Yes (within concession limits)</td>
                <td className="border border-gray-200 px-4 py-2">Yes (within concession limits)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Available on FHA/VA</td>
                <td className="border border-gray-200 px-4 py-2">Yes</td>
                <td className="border border-gray-200 px-4 py-2">Yes (subject to concession limits)</td>
                <td className="border border-gray-200 px-4 py-2">Yes (subject to concession limits)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Tax deductible</td>
                <td className="border border-gray-200 px-4 py-2">Generally yes (consult CPA)</td>
                <td className="border border-gray-200 px-4 py-2">Not directly by buyer (consult CPA)</td>
                <td className="border border-gray-200 px-4 py-2">Not directly by buyer (consult CPA)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          These benchmarks reflect general market conditions and wholesale lender pricing tiers available through our 200+ lender network in California and Washington. Actual costs, savings, and break-even periods vary by lender, loan program, borrower profile, and current market environment.
        </p>

        {/* People Also Ask Section */}
        <h2 id="paa" className="speakable-paa">People Also Ask: Mortgage Discount Points &amp; Rate Buydowns</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Are mortgage discount points worth it in 2026?</h3>
            <p className="mb-0">
              <strong>Mortgage discount points are worth it if you plan to hold the loan longer than the break-even period, typically 4 to 7 years.</strong> Each point costs 1% of the loan amount and reduces the rate by 0.125% to 0.25%. Your broker calculates the exact break-even period using live wholesale pricing for your specific loan scenario.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">What is the difference between a 2-1 buydown and discount points?</h3>
            <p className="mb-0">
              <strong>Discount points permanently lower the note rate for the full loan term; a 2-1 buydown temporarily reduces the effective rate for the first two years only.</strong> Discount points change the actual note rate on the loan. A 2-1 buydown keeps the note rate unchanged and subsidizes the payment difference through an escrow fund paid at closing.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Can the seller pay for mortgage discount points?</h3>
            <p className="mb-0">
              <strong>Yes, sellers can pay for discount points as part of their seller concession, subject to loan program limits (3% to 9% conventional, 6% FHA, 4% VA).</strong> Seller-paid points are a common negotiation tool that reduces the buyer&apos;s monthly payment without reducing the purchase price.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">How long does it take to break even on mortgage points?</h3>
            <p className="mb-0">
              <strong>The typical break-even period for mortgage discount points is 4 to 7 years, calculated by dividing total point cost by monthly payment savings.</strong> If one point costs $6,000 and saves $95 per month, the break-even period is approximately 63 months (5.3 years). You recoup the investment through lower payments after reaching break-even.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">How much does one discount point reduce the mortgage rate?</h3>
            <p className="mb-0">
              <strong>One discount point typically reduces the mortgage rate by 0.125% to 0.25%, but the exact reduction varies significantly between lenders.</strong> A wholesale broker compares rate reduction efficiency across 200+ lenders to find the lender offering the greatest reduction per point dollar spent.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Is it better to put 20% down or buy discount points?</h3>
            <p className="mb-0">
              <strong>Reach 20% down first to eliminate PMI, then consider discount points with remaining funds &mdash; PMI elimination provides greater monthly savings per dollar.</strong> Once PMI is eliminated, additional funds toward discount points reduce your rate and long-term interest cost. Your broker models both scenarios for your specific situation.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Do wholesale brokers get better discount point pricing?</h3>
            <p className="mb-0">
              <strong>Yes, wholesale brokers compare point pricing across 200+ lenders, and the rate reduction per point varies by 20% to 40% between lenders on any given day.</strong> A retail bank offers only its own point schedule. The wholesale channel identifies the lender providing the most efficient rate reduction per dollar spent.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mt-0">Are mortgage discount points tax deductible?</h3>
            <p className="mb-0">
              <strong>Discount points on a purchase loan are generally deductible in the year paid; points on a refinance are typically amortized over the loan term (consult your CPA).</strong> The Tax Cuts and Jobs Act retained the points deduction but the increased standard deduction means fewer borrowers benefit from itemizing.
            </p>
          </div>
        </div>

        {/* Extended FAQ Section */}
        <h2 id="faqs">Extended FAQ: Mortgage Discount Points and Rate Buydown Questions</h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mt-0">{faq.question}</h3>
              <p className="mb-0">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Expert Summary + CTA */}
        <h2 id="expert-summary">Expert Summary: Mortgage Discount Points Decision Framework</h2>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h3 className="font-bold text-blue-900 mt-0">Key Takeaways for Discount Points and Rate Buydowns</h3>
          <ol className="text-blue-800">
            <li><strong>One discount point costs 1% of the loan amount</strong> and reduces the rate by 0.125% to 0.25% depending on the lender &mdash; rate reduction efficiency varies significantly across wholesale lenders</li>
            <li><strong>The break-even period is 4 to 7 years for most point purchases</strong> &mdash; buy points only if you plan to hold the loan past break-even</li>
            <li><strong>Temporary 2-1 buydowns deliver larger Year 1 savings</strong> but no long-term rate benefit &mdash; ideal when seller-funded as a negotiated concession</li>
            <li><strong>Combining seller-paid buydown plus buyer-paid permanent points</strong> delivers both immediate cash flow relief and long-term interest savings</li>
            <li><strong>Reach 20% down payment before buying points</strong> to eliminate PMI first, which typically provides greater savings per dollar</li>
            <li><strong>Factor in opportunity cost</strong> &mdash; money spent on points cannot be invested elsewhere, so the true break-even is longer than the simple calculation suggests</li>
            <li><strong>A wholesale broker comparing 200+ lenders</strong> finds the lender with the most efficient point pricing &mdash; the greatest rate reduction per dollar spent</li>
          </ol>
        </div>

        <div className="bg-green-50 p-8 rounded-xl border border-green-200 my-8 text-center">
          <h3 className="text-2xl font-bold text-green-900 mt-0">Get a Personalized Discount Point Analysis</h3>
          <p className="text-green-800 text-lg mb-4">
            I will run a break-even analysis using live wholesale rate sheets from multiple lenders &mdash; showing you the exact cost, rate reduction, monthly savings, and break-even period for each point increment. You will see which lender delivers the most efficient point pricing for your specific loan scenario. No obligation, no pressure.
          </p>
          <p className="text-green-900 font-bold text-xl mb-2">
            Call Mo Abdel: <a href="tel:9495792057" className="text-green-700 hover:underline">(949) 579-2057</a>
          </p>
          <p className="text-green-800">
            NMLS #1426884 | Lumin Lending NMLS #2716106
          </p>
          <p className="text-green-800 text-sm mt-3">
            Free consultation. I compare discount point pricing across 200+ wholesale lenders to find the most efficient rate reduction for your mortgage.
          </p>
        </div>

        <h2>Related Mortgage Strategy Resources</h2>

        <ul>
          <li><Link href="/blog/when-to-refinance-2026" className="text-blue-600 hover:underline">When to Refinance Your Mortgage: Complete Decision Guide 2026</Link></li>
          <li><Link href="/blog/mortgage-broker-vs-bank-complete-2026" className="text-blue-600 hover:underline">Mortgage Broker vs Bank: Complete Comparison Guide</Link></li>
          <li><Link href="/blog/first-time-homebuyer-guide-orange-county-2026" className="text-blue-600 hover:underline">First-Time Homebuyer Guide: Orange County 2026</Link></li>
          <li><Link href="/blog/wholesale-mortgage-broker-california-pillar-2026" className="text-blue-600 hover:underline">Wholesale Mortgage Broker California: Complete Guide</Link></li>
          <li><Link href="/blog/home-equity-refinancing-complete-pillar-2026" className="text-blue-600 hover:underline">Complete Home Equity and Refinancing Pillar Guide</Link></li>
          <li><Link href="/blog/va-loan-benefits-guide-2026" className="text-blue-600 hover:underline">VA Loan Benefits Guide 2026</Link></li>
        </ul>

        <h3>External Resources</h3>

        <ul>
          <li><a href="https://www.consumerfinance.gov/ask-cfpb/what-are-discount-points-and-lender-credits-en-136/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CFPB: What Are Discount Points and Lender Credits?</a></li>
          <li><a href="https://www.freddiemac.com/research/consumer-research" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Freddie Mac Consumer Research</a></li>
        </ul>
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443<br />
            <br />
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. This is not a commitment to lend. Not all borrowers will qualify. Discount point costs, rate reductions, monthly savings, and break-even periods are illustrative and vary by lender, loan program, borrower profile, and market conditions. Examples do not represent specific lender offers or guaranteed outcomes. Tax deductibility of discount points depends on loan purpose and current tax law &mdash; consult your CPA for guidance on your specific situation. Licensed in California and Washington.
          </p>
        </div>
      </footer>
    </article>
  );
}
