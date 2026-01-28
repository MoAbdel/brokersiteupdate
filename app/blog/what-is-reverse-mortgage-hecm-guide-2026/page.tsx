import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Reverse Mortgage? Complete HECM Guide for Seniors [2026]',
  description: 'What is a reverse mortgage? A HECM allows homeowners 62+ to convert home equity into cash without monthly payments. Learn how reverse mortgages work in 2026.',
  keywords: ['what is a reverse mortgage', 'HECM guide', 'reverse mortgage for seniors', 'reverse mortgage 2026'],
  openGraph: {
    title: 'What Is a Reverse Mortgage? Complete HECM Guide for Seniors [2026]',
    description: 'What is a reverse mortgage? A HECM allows homeowners 62+ to convert home equity into cash without monthly payments. Learn how reverse mortgages work in 2026.',
    url: 'https://mothebroker.com/blog/what-is-reverse-mortgage-hecm-guide-2026',
    type: 'article',
    authors: ['Mo Abdel'],
  },
};

export default function WhatIsReverseMortgage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Is a Reverse Mortgage? Complete HECM Guide for Seniors [2026]',
    author: { '@type': 'Person', name: 'Mo Abdel', identifier: 'NMLS #1426884' },
    publisher: { '@type': 'Organization', name: 'Lumin Lending', identifier: 'NMLS #2716106' },
    datePublished: '2026-01-27',
    dateModified: '2026-01-27',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a reverse mortgage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A reverse mortgage is a loan for homeowners 62+ that converts home equity into cash without monthly payments. The most common type, HECM (Home Equity Conversion Mortgage), is FHA-insured. The loan balance grows over time and is repaid when you sell, move, or pass away.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does a reverse mortgage work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A reverse mortgage works by allowing you to borrow against your home equity. Instead of making monthly payments to a lender, the lender makes payments to you. Interest accrues on the loan balance, which grows over time. The loan is repaid when you sell, move out, or pass away.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the requirements for a reverse mortgage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reverse mortgage requirements include: being 62 or older, owning your home as a primary residence, having sufficient equity, completing HUD-approved counseling, and passing a financial assessment. There is no minimum credit score, but your financial history is reviewed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you have to pay back a reverse mortgage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, a reverse mortgage must eventually be repaid. However, repayment is not required until you sell the home, move out permanently, or pass away. The loan is typically repaid by selling the home. HECM loans have non-recourse protection, meaning you or your heirs will never owe more than the home is worth.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can you get from a reverse mortgage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The amount you can get depends on your age, home value, and current interest rates. Older borrowers with more equity typically receive higher amounts. The 2026 FHA lending limit is $1,149,825. A HECM calculator can provide a personalized estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens to a reverse mortgage when you die?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When a reverse mortgage borrower dies, heirs have options. They can sell the home and keep any equity above the loan balance, refinance to keep the home, or let the lender sell it. HECM non-recourse protection means heirs will never owe more than 95% of the appraised value.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What Is a Reverse Mortgage? Complete HECM Guide for Seniors [2026]
          </h1>
          <p className="text-gray-600">By Mo Abdel, NMLS #1426884 | Updated January 2026</p>
        </header>

        <section className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            A reverse mortgage allows homeowners 62 and older to convert home equity into cash without making monthly mortgage payments. The most common type—HECM (Home Equity Conversion Mortgage)—is FHA-insured with a 2026 lending limit of $1,149,825. Unlike traditional mortgages, the loan balance grows over time and is repaid when the borrower sells, moves, or passes away.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How Does a Reverse Mortgage Work?</h2>
          <p>
            Understanding what is a reverse mortgage begins with how it differs from traditional mortgages. With a conventional mortgage, you make monthly payments to reduce your loan balance. With a reverse mortgage, the lender pays you—and the loan balance increases over time as interest accrues.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="font-bold text-lg mb-3">Key Reverse Mortgage Mechanics:</h3>
            <ul className="space-y-2">
              <li><strong>No monthly mortgage payments:</strong> You don&apos;t make payments to the lender</li>
              <li><strong>Loan balance grows:</strong> Interest accrues on borrowed amount over time</li>
              <li><strong>Remain in your home:</strong> You keep ownership and can stay as long as you maintain the property</li>
              <li><strong>Repayment trigger:</strong> Loan is due when you sell, move permanently, or pass away</li>
              <li><strong>Non-recourse protection:</strong> You or heirs never owe more than the home is worth</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Who Can Get a Reverse Mortgage?</h2>
          <p>
            Reverse mortgage requirements are set by FHA for HECM loans. To qualify, borrowers must meet the following criteria:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Age:</strong> At least 62 years old (youngest borrower if married)</li>
            <li><strong>Primary residence:</strong> The home must be your primary residence</li>
            <li><strong>Equity:</strong> Sufficient equity in the property</li>
            <li><strong>HUD counseling:</strong> Complete required counseling with an approved agency</li>
            <li><strong>Financial assessment:</strong> Ability to pay property taxes, insurance, and maintenance</li>
            <li><strong>Property type:</strong> Single-family, 2-4 unit (owner-occupied), HUD-approved condo, or manufactured home meeting FHA standards</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Reverse Mortgage vs Traditional Mortgage</h2>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold">Reverse Mortgage</th>
                  <th className="px-4 py-3 text-left font-semibold">Traditional Mortgage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Monthly Payments</td>
                  <td className="px-4 py-3">None required</td>
                  <td className="px-4 py-3">Required monthly</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Loan Balance</td>
                  <td className="px-4 py-3">Grows over time</td>
                  <td className="px-4 py-3">Decreases over time</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Equity</td>
                  <td className="px-4 py-3">Decreases over time</td>
                  <td className="px-4 py-3">Increases over time</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Age Requirement</td>
                  <td className="px-4 py-3">62+</td>
                  <td className="px-4 py-3">18+</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Repayment</td>
                  <td className="px-4 py-3">When you sell/move/pass</td>
                  <td className="px-4 py-3">Monthly over loan term</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Types of Reverse Mortgages</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">HECM (Home Equity Conversion Mortgage)</h3>
          <p>
            The most common type, HECM loans are FHA-insured and have standardized protections. The 2026 lending limit is $1,149,825, which covers most homes in the country.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Proprietary Reverse Mortgages</h3>
          <p>
            Also called &quot;jumbo reverse mortgages,&quot; these are private loans for high-value homes exceeding FHA limits. They can provide access to more equity for homeowners with properties worth more than $1,149,825.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Single-Purpose Reverse Mortgages</h3>
          <p>
            Offered by some state and local agencies, these have restricted uses (like home repairs or property taxes) and are typically the least expensive option.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How Is a Reverse Mortgage Repaid?</h2>
          <p>
            A reverse mortgage becomes due when a &quot;maturity event&quot; occurs:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Sale of the home:</strong> Most common—loan is paid from sale proceeds</li>
            <li><strong>Permanent move:</strong> If you move to assisted living or another primary residence for 12+ months</li>
            <li><strong>Passing away:</strong> Heirs have options to sell, refinance, or deed the property</li>
            <li><strong>Failure to meet obligations:</strong> Not paying taxes, insurance, or maintaining the property</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h3 className="font-bold text-blue-800 mb-3">Non-Recourse Protection</h3>
            <p className="text-blue-900">
              HECM loans have non-recourse protection, meaning you or your heirs will never owe more than the home&apos;s value when sold. If the loan balance exceeds the home value, FHA insurance covers the difference. This protects borrowers and heirs from owing more than the home is worth.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Is a Reverse Mortgage Right for You?</h2>
          <p>
            A reverse mortgage may be appropriate if you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Plan to stay in your home long-term</li>
            <li>Need to supplement retirement income</li>
            <li>Want to eliminate existing mortgage payments</li>
            <li>Have significant home equity</li>
            <li>Can afford property taxes, insurance, and maintenance</li>
          </ul>

          <p className="mt-4">
            A reverse mortgage may not be ideal if you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Plan to move within a few years</li>
            <li>Want to leave the home to heirs with maximum equity</li>
            <li>Cannot afford ongoing property expenses</li>
            <li>Have other financial options that better meet your needs</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">What is a reverse mortgage?</h3>
              <p>A reverse mortgage is a loan for homeowners 62+ that converts home equity into cash without monthly payments. The most common type, HECM, is FHA-insured. The loan balance grows over time and is repaid when you sell, move, or pass away.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">How does a reverse mortgage work?</h3>
              <p>A reverse mortgage works by allowing you to borrow against your home equity. Instead of making monthly payments to a lender, the lender makes payments to you. Interest accrues on the loan balance, which grows over time. The loan is repaid when you sell, move out, or pass away.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">What are the requirements for a reverse mortgage?</h3>
              <p>Requirements include: being 62 or older, owning your home as a primary residence, having sufficient equity, completing HUD-approved counseling, and passing a financial assessment. There is no minimum credit score, but your financial history is reviewed.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Do you have to pay back a reverse mortgage?</h3>
              <p>Yes, but repayment is not required until you sell, move out permanently, or pass away. The loan is typically repaid by selling the home. HECM loans have non-recourse protection, meaning you or your heirs will never owe more than the home is worth.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">How much can you get from a reverse mortgage?</h3>
              <p>The amount depends on your age, home value, and current interest rates. Older borrowers with more equity typically receive higher amounts. The 2026 FHA lending limit is $1,149,825. Contact a licensed loan officer for a personalized estimate.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">What happens to a reverse mortgage when you die?</h3>
              <p>Heirs have options: sell the home and keep equity above the loan balance, refinance to keep the home, or let the lender sell it. HECM non-recourse protection means heirs will never owe more than 95% of the appraised value.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Get Your Free Reverse Mortgage Assessment</h2>
          <p>
            Before applying for a reverse mortgage, you must complete HUD-approved counseling. I can help you understand your options and connect you with counseling resources. As a wholesale mortgage broker, I access HECM options from multiple lenders to find competitive terms.
          </p>
          <p className="mt-4">Contact Mo Abdel today: (949) 537-2357 | mabdel@luminlending.com</p>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="font-bold mb-2">Related Resources:</h3>
            <ul className="space-y-2">
              <li><a href="/blog/reverse-mortgage-requirements-2026" className="text-blue-600 hover:underline">Reverse Mortgage Requirements 2026</a></li>
              <li><a href="/blog/reverse-mortgage-vs-heloc-seniors-2026" className="text-blue-600 hover:underline">Reverse Mortgage vs HELOC for Seniors</a></li>
              <li><a href="/contact" className="text-blue-600 hover:underline">Get Your Free Quote</a></li>
            </ul>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            <p className="font-semibold">Mo Abdel | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443</p>
            <p>Licensed in: CA, WA</p>
            <p className="mt-4">
              Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial advice. HECM borrowers must complete HUD-approved counseling before applying. Contact a licensed loan officer for personalized guidance.
            </p>
          </div>
        </footer>
      </article>
    </>
  );
}
