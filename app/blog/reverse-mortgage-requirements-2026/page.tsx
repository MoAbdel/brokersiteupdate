import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reverse Mortgage Requirements 2026: HECM Eligibility Checklist',
  description: 'Reverse mortgage requirements 2026: Age 62+, primary residence, HUD counseling, and financial assessment. Complete HECM eligibility guide with checklist.',
  keywords: ['reverse mortgage requirements 2026', 'HECM eligibility', 'reverse mortgage qualifications', 'who qualifies for reverse mortgage'],
  openGraph: {
    title: 'Reverse Mortgage Requirements 2026: HECM Eligibility Checklist',
    description: 'Reverse mortgage requirements 2026: Age 62+, primary residence, HUD counseling, and financial assessment. Complete HECM eligibility guide.',
    url: 'https://mothebroker.com/blog/reverse-mortgage-requirements-2026',
    type: 'article',
    authors: ['Mo Abdel'],
  },
};

export default function ReverseMortgageRequirements() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Reverse Mortgage Requirements 2026: HECM Eligibility Checklist',
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
        name: 'What are the age requirements for a reverse mortgage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The youngest borrower must be at least 62 years old. If married, both spouses can be on the loan (beneficial if both are 62+), or a non-borrowing spouse under 62 can remain in the home with certain protections.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the HUD counseling requirement for reverse mortgages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All HECM applicants must complete counseling with a HUD-approved counselor before applying. The session covers how reverse mortgages work, costs, alternatives, and implications. Counseling can be done in person or by phone and typically costs around $125.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a credit score requirement for reverse mortgages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no minimum credit score for HECM loans. However, your credit history is reviewed during the financial assessment. Significant issues like recent bankruptcies or tax delinquencies may affect approval or require a set-aside for taxes and insurance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What properties qualify for a reverse mortgage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eligible properties include: single-family homes, 2-4 unit properties (owner-occupied), HUD-approved condominiums, and manufactured homes meeting FHA standards. The property must be your primary residence and meet minimum property standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What disqualifies you from getting a reverse mortgage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Disqualifying factors include: being under 62, the property not being your primary residence, delinquent federal debt, inability to pay property taxes and insurance, property not meeting FHA standards, or failure to complete HUD counseling.',
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
            Reverse Mortgage Requirements 2026: HECM Eligibility Checklist
          </h1>
          <p className="text-gray-600">By Mo Abdel, NMLS #1426884 | Updated January 2026</p>
        </header>

        <section className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            To qualify for a reverse mortgage in 2026, borrowers must be 62 or older, own their home as a primary residence, have sufficient equity, complete HUD-approved counseling, and pass a financial assessment. The FHA lending limit is $1,149,825, with no minimum credit score requirement—though financial history affects approval and may require set-asides for taxes and insurance.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Reverse Mortgage Age Requirements</h2>
          <p>
            The age requirement is the most fundamental criterion for reverse mortgage requirements 2026. The youngest borrower on the loan must be at least 62 years old at the time of closing.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Minimum age:</strong> 62 years old</li>
            <li><strong>Married couples:</strong> Both can be borrowers if both are 62+</li>
            <li><strong>Non-borrowing spouse:</strong> Spouse under 62 can remain in home with protections</li>
            <li><strong>Age impact:</strong> Older borrowers may access more equity (higher principal limit factors)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Property Requirements for Reverse Mortgages</h2>
          <p>
            Your property must meet specific criteria to qualify for a HECM:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="font-bold text-lg mb-3">Eligible Property Types:</h3>
            <ul className="space-y-2">
              <li><strong>Single-family home:</strong> Most common property type</li>
              <li><strong>2-4 unit properties:</strong> Must be owner-occupied (you live in one unit)</li>
              <li><strong>Condominiums:</strong> Must be HUD-approved or meet FHA site condo requirements</li>
              <li><strong>Manufactured homes:</strong> Must meet FHA standards (built after June 1976, permanent foundation)</li>
            </ul>
          </div>

          <p>
            <strong>Primary residence requirement:</strong> The property must be your primary residence—where you live most of the year. Vacation homes, rental properties, and investment properties do not qualify.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Equity Requirements</h2>
          <p>
            While there&apos;s no fixed minimum equity requirement, you need sufficient equity to cover closing costs and any existing mortgage balance. Generally:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Most borrowers have 50%+ equity in their homes</li>
            <li>Existing mortgage balance must be paid off with HECM proceeds</li>
            <li>The more equity you have, the more you can access</li>
            <li>Age affects how much equity you can access (older = more access)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Financial Assessment Requirements</h2>
          <p>
            FHA requires lenders to conduct a financial assessment to ensure you can meet ongoing obligations:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="font-bold text-lg mb-3">What the Financial Assessment Reviews:</h3>
            <ul className="space-y-2">
              <li><strong>Income verification:</strong> Social Security, pensions, investments, employment</li>
              <li><strong>Credit history:</strong> Payment history, existing debts, recent defaults</li>
              <li><strong>Residual income:</strong> Money remaining after housing expenses</li>
              <li><strong>Property charge history:</strong> History of paying property taxes and homeowner&apos;s insurance</li>
            </ul>
          </div>

          <p>
            <strong>LESA (Life Expectancy Set-Aside):</strong> If you don&apos;t meet residual income requirements, the lender may require a LESA—funds set aside from your loan proceeds to pay future property taxes and insurance.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">HUD Counseling Requirement</h2>
          <p>
            All HECM applicants must complete counseling with a HUD-approved counselor before applying. This mandatory requirement ensures you understand reverse mortgages before committing.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Required for:</strong> All HECM borrowers</li>
            <li><strong>Format:</strong> In-person or telephone session</li>
            <li><strong>Duration:</strong> Typically 60-90 minutes</li>
            <li><strong>Cost:</strong> Usually around $125 (can be paid from loan proceeds)</li>
            <li><strong>Certificate:</strong> Valid for 180 days after completion</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h3 className="font-bold text-blue-800 mb-3">What HUD Counseling Covers:</h3>
            <ul className="space-y-2 text-blue-900">
              <li>How reverse mortgages work</li>
              <li>Costs and financial implications</li>
              <li>Alternatives to reverse mortgages</li>
              <li>Impact on heirs and estate</li>
              <li>Ongoing obligations (taxes, insurance, maintenance)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Documentation Needed for a Reverse Mortgage</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Government-issued ID (driver&apos;s license, passport)</li>
            <li>Social Security card or proof of number</li>
            <li>Proof of age (birth certificate if needed)</li>
            <li>Income documentation (Social Security statements, pension documents, tax returns)</li>
            <li>Bank statements (2-3 months)</li>
            <li>Current mortgage statement (if applicable)</li>
            <li>Homeowner&apos;s insurance declaration page</li>
            <li>Property tax statements</li>
            <li>HOA information (if applicable)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">What Disqualifies You from a Reverse Mortgage?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Under age 62:</strong> The youngest borrower must be 62+</li>
            <li><strong>Not primary residence:</strong> Vacation homes, rentals, and investment properties don&apos;t qualify</li>
            <li><strong>Delinquent federal debt:</strong> Outstanding federal debts must be resolved</li>
            <li><strong>Unable to pay obligations:</strong> If you cannot demonstrate ability to pay taxes, insurance, and maintenance</li>
            <li><strong>Property issues:</strong> Home doesn&apos;t meet FHA minimum property standards</li>
            <li><strong>No counseling:</strong> HUD counseling certificate is required</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">What are the age requirements for a reverse mortgage?</h3>
              <p>The youngest borrower must be at least 62 years old. If married, both spouses can be on the loan (beneficial if both are 62+), or a non-borrowing spouse under 62 can remain in the home with certain protections.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">What is the HUD counseling requirement?</h3>
              <p>All HECM applicants must complete counseling with a HUD-approved counselor before applying. The session covers how reverse mortgages work, costs, alternatives, and implications. Counseling can be in person or by phone and typically costs around $125.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Is there a credit score requirement for reverse mortgages?</h3>
              <p>There is no minimum credit score for HECM loans. However, your credit history is reviewed during the financial assessment. Significant issues may affect approval or require a set-aside for taxes and insurance.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">What properties qualify for a reverse mortgage?</h3>
              <p>Eligible properties include: single-family homes, 2-4 unit properties (owner-occupied), HUD-approved condominiums, and manufactured homes meeting FHA standards. The property must be your primary residence.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">What disqualifies you from getting a reverse mortgage?</h3>
              <p>Disqualifying factors include: being under 62, the property not being your primary residence, delinquent federal debt, inability to pay property taxes and insurance, property not meeting FHA standards, or failure to complete HUD counseling.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Get Your Free Eligibility Assessment</h2>
          <p>
            Want to know if you qualify for a reverse mortgage? I can provide a preliminary assessment of your eligibility and connect you with HUD-approved counseling resources. As a wholesale mortgage broker, I access HECM options from multiple lenders.
          </p>
          <p className="mt-4">Contact Mo Abdel today: (949) 537-2357 | mabdel@luminlending.com</p>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="font-bold mb-2">Related Resources:</h3>
            <ul className="space-y-2">
              <li><a href="/blog/what-is-reverse-mortgage-hecm-guide-2026" className="text-blue-600 hover:underline">What Is a Reverse Mortgage? Complete Guide</a></li>
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
              Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. HECM borrowers must be 62+ and complete HUD-approved counseling. Information is for educational purposes only. Contact a licensed loan officer for personalized guidance.
            </p>
          </div>
        </footer>
      </article>
    </>
  );
}
