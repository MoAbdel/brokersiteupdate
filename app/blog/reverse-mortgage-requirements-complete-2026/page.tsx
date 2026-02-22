import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reverse Mortgage Requirements 2026: Complete HECM Eligibility Checklist | MoTheBroker',
  description: 'Reverse mortgage requirements 2026: Borrowers must be 62+, own home as primary residence, have 50%+ equity, complete HUD counseling, pass financial assessment. FHA limit $1,209,750. NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/reverse-mortgage-requirements-complete-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/reverse-mortgage-requirements-complete-2026',
      'x-default': 'https://www.mothebroker.com/blog/reverse-mortgage-requirements-complete-2026',
    },
  },
  keywords: [
    'reverse mortgage requirements 2026',
    'HECM eligibility checklist',
    'reverse mortgage qualifications',
    'who qualifies for reverse mortgage',
    'reverse mortgage age requirement',
    'HUD counseling requirement',
    'reverse mortgage financial assessment',
    'HECM requirements California',
    'reverse mortgage equity requirements',
  ],
  openGraph: {
    title: 'Reverse Mortgage Requirements 2026: Complete HECM Eligibility Checklist',
    description: 'Complete guide to reverse mortgage requirements 2026. Age 62+, primary residence, HUD counseling, financial assessment. FHA limit $1,209,750.',
    url: 'https://www.mothebroker.com/blog/reverse-mortgage-requirements-complete-2026',
    type: 'article',
    publishedTime: '2026-02-01',
    modifiedTime: '2026-02-22',
    authors: ['Mo Abdel'],
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reverse Mortgage Requirements 2026: Complete HECM Eligibility Checklist',
    description: 'Complete guide to reverse mortgage requirements 2026. Age 62+, primary residence, HUD counseling, financial assessment.',
  },
};

export default function ReverseMortgageRequirementsCompletePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Reverse Mortgage Requirements 2026: Complete HECM Eligibility Checklist",
    "description": "Comprehensive guide to reverse mortgage requirements for 2026. Learn age requirements, property eligibility, equity needs, HUD counseling, and financial assessment criteria for HECM loans.",
    "author": {
      "@type": "Person",
      "name": "Mo Abdel",
      "jobTitle": "Wholesale Mortgage Broker & Reverse Mortgage Specialist",
      "url": "https://www.mothebroker.com",
      "identifier": "NMLS #1426884",
      "worksFor": {
        "@type": "Organization",
        "name": "Lumin Lending",
        "identifier": "NMLS #2716106"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "MoTheBroker.com",
      "url": "https://www.mothebroker.com"
    },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-22",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.mothebroker.com/blog/reverse-mortgage-requirements-complete-2026",
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
    "copyrightYear": "2026",
    "keywords": ["reverse mortgage requirements 2026", "HECM eligibility", "reverse mortgage qualifications", "HUD counseling", "financial assessment"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the minimum age for a reverse mortgage in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The youngest borrower must be at least 62 years old. For married couples, if one spouse is under 62, they can remain in the home as a non-borrowing spouse with FHA protections, though the loan amount will be calculated using the older spouse's age."
        }
      },
      {
        "@type": "Question",
        "name": "How much equity do I need for a reverse mortgage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most borrowers need approximately 50% equity or more. The exact amount depends on your age, current interest rates, and any existing mortgage balance that must be paid off. Older borrowers with more equity can access larger principal limits."
        }
      },
      {
        "@type": "Question",
        "name": "Is HUD counseling mandatory for reverse mortgages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, HUD-approved counseling is federally mandated for all HECM borrowers. Sessions last 60-90 minutes and cost approximately $125. The certificate is valid for 180 days. Find counselors at HUD.gov or call 800-569-4287."
        }
      },
      {
        "@type": "Question",
        "name": "What is the FHA lending limit for HECM in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 2026 FHA HECM lending limit is $1,209,750 nationwide. This is the maximum home value used to calculate your loan amount. Homes worth more than this limit are still eligible, but loan calculations are capped at $1,209,750."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a credit score requirement for reverse mortgages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no minimum credit score for HECM loans. However, lenders conduct a financial assessment reviewing credit history, income, and ability to pay property taxes and insurance. Poor credit history may require a Life Expectancy Set-Aside (LESA)."
        }
      },
      {
        "@type": "Question",
        "name": "What properties qualify for a reverse mortgage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eligible properties include single-family homes, 2-4 unit properties (owner-occupied), HUD-approved condominiums, and FHA-compliant manufactured homes. The property must be your primary residence where you live most of the year."
        }
      },
      {
        "@type": "Question",
        "name": "What can disqualify me from getting a reverse mortgage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Disqualifying factors include: age under 62, property not being primary residence, delinquent federal debt, inability to pay property taxes and insurance, property failing FHA standards, incomplete HUD counseling, or insufficient equity to pay off existing mortgage."
        }
      },
      {
        "@type": "Question",
        "name": "Do California and Washington have different reverse mortgage requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HECM requirements are federal and uniform across all states. However, California and Washington have different median home values, property taxes, and insurance costs that affect how much you can borrow and your ongoing obligations."
        }
      },
      {
        "@type": "Question",
        "name": "What is the financial assessment for reverse mortgages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The financial assessment evaluates your income, credit history, and ability to pay ongoing property charges (taxes, insurance, HOA). If concerns exist, a Life Expectancy Set-Aside (LESA) may be required from loan proceeds."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a reverse mortgage if I still have a mortgage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but the existing mortgage must be paid off with reverse mortgage proceeds at closing. You need enough equity for the HECM to cover your current mortgage balance plus closing costs, with funds remaining for your use."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to qualify for a reverse mortgage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The complete process typically takes 30-45 days from application to closing. This includes HUD counseling (1-2 weeks to schedule), application and financial assessment (1-2 weeks), appraisal (1 week), and underwriting/closing (2-3 weeks)."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I don't meet reverse mortgage requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you don't meet HECM requirements, alternatives include proprietary reverse mortgages (for high-value homes), HELOCs, home equity loans, or downsizing. A mortgage broker can help identify which option best fits your situation."
        }
      }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".citation-hook", ".paa-answer", ".expert-summary"]
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/reverse-mortgages" className="hover:text-blue-600">Reverse Mortgages</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">HECM Eligibility Requirements</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
          <span className="bg-blue-100 px-3 py-1 rounded-full">HECM Requirements</span>
          <span>-</span>
          <time dateTime="2026-02-22">Updated February 22, 2026</time>
          <span>-</span>
          <span>15 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Reverse Mortgage Requirements 2026: Complete HECM Eligibility Checklist
        </h1>

        {/* Citation Hook - 50-75 words */}
        <div className="citation-hook bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p className="text-lg text-gray-800 leading-relaxed">
            According to Mo Abdel, NMLS #1426884, to qualify for a reverse mortgage in 2026, borrowers must be 62 or older, own their home as a primary residence, have sufficient equity (generally 50%+), and complete HUD-approved counseling. HUD endorsed 31,894 HECM loans in FY 2025, a 12% increase from FY 2024, as seniors increasingly tap home equity without monthly payments. The 2026 FHA HECM lending limit is $1,209,750, with no minimum credit score—though a financial assessment evaluates your ability to pay property taxes and insurance.
          </p>
        </div>
      </header>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-8 not-prose">
            <p className="text-sm text-amber-900">
              <strong>Important Notice:</strong> This material is not provided by, nor was it approved by, the Department of Housing &amp; Urban Development (HUD) or by the Federal Housing Administration (FHA). This is not a government agency publication.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-8 not-prose">
            <p className="text-sm text-blue-900">
              <strong>Benefits Disclaimer:</strong> This information is for educational purposes only. Consult the Social Security Administration or Medicare directly for benefits questions. Mo Abdel is a mortgage professional, not a benefits counselor.
            </p>
          </div>

      {/* Main Content */}
      <section className="prose prose-lg max-w-none">

        {/* ============================================ */}
        {/* BING POWER BLOCK - 600-800 words */}
        {/* ============================================ */}

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Reverse Mortgage Requirements 2026: Complete Overview
        </h2>

        <p>
          Understanding reverse mortgage requirements 2026 is essential before applying for a Home Equity Conversion Mortgage (HECM). These FHA-insured loans allow homeowners 62 and older to access home equity without monthly mortgage payments. The federal requirements protect both borrowers and the program&apos;s long-term sustainability.
        </p>

        <p>
          The eligibility criteria for reverse mortgages have remained consistent in recent years, with the primary changes involving lending limits and financial assessment guidelines. In 2026, the FHA increased the HECM lending limit to $1,209,750, allowing more homeowners to access greater equity from their properties.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          HECM Eligibility Checklist: Six Core Requirements
        </h2>

        <div className="bg-gray-50 p-6 rounded-lg my-8 not-prose">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Reverse Mortgage Requirements 2026 at a Glance</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 font-semibold">Requirement</th>
                <th className="text-left py-3 font-semibold">Details</th>
                <th className="text-left py-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 font-medium">Minimum Age</td>
                <td className="py-3">62 years old</td>
                <td className="py-3">Youngest borrower on title</td>
              </tr>
              <tr className="border-b bg-gray-100">
                <td className="py-3 font-medium">Property Type</td>
                <td className="py-3">Primary residence</td>
                <td className="py-3">Single-family, 2-4 unit, condo, manufactured</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-medium">Equity Required</td>
                <td className="py-3">Generally 50%+</td>
                <td className="py-3">Varies by age and interest rates</td>
              </tr>
              <tr className="border-b bg-gray-100">
                <td className="py-3 font-medium">HUD Counseling</td>
                <td className="py-3">Mandatory</td>
                <td className="py-3">Certificate valid 180 days</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-medium">Financial Assessment</td>
                <td className="py-3">Income, credit, obligations</td>
                <td className="py-3">No minimum credit score</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-3 font-medium">2026 FHA Limit</td>
                <td className="py-3">$1,209,750</td>
                <td className="py-3">Nationwide maximum</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Complete HECM Eligibility Steps
        </h3>

        <ol className="list-decimal pl-6 space-y-4 my-6">
          <li>
            <strong>Verify age eligibility</strong> — Confirm the youngest borrower is 62 or older. Non-borrowing spouses under 62 have protections but affect loan calculations.
          </li>
          <li>
            <strong>Confirm property qualifies</strong> — Property must be your primary residence and meet FHA minimum property standards. Eligible types include single-family homes, 2-4 unit properties (owner-occupied), HUD-approved condos, and compliant manufactured homes.
          </li>
          <li>
            <strong>Calculate equity position</strong> — Determine your current equity by subtracting any existing mortgage from your home&apos;s value. Most borrowers need 50%+ equity, though requirements vary by age.
          </li>
          <li>
            <strong>Complete HUD-approved counseling</strong> — Schedule a session with a HUD-approved counselor (find at HUD.gov or call 800-569-4287). Sessions last 60-90 minutes and cost approximately $125.
          </li>
          <li>
            <strong>Gather documentation</strong> — Prepare identification, income verification (Social Security statements, pensions), bank statements, property tax bills, and homeowner&apos;s insurance documentation.
          </li>
          <li>
            <strong>Submit application and complete financial assessment</strong> — Your lender reviews income, credit history, and ability to pay ongoing property charges. If concerns exist, a Life Expectancy Set-Aside (LESA) may be required.
          </li>
          <li>
            <strong>Property appraisal and underwriting</strong> — An FHA-approved appraiser evaluates your home. The appraisal determines your maximum loan amount based on the lesser of appraised value or the $1,209,750 FHA limit.
          </li>
        </ol>

        {/* ============================================ */}
        {/* GOOGLE E-E-A-T NARRATIVE - 1,200-1,500 words */}
        {/* ============================================ */}

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Who Qualifies for a Reverse Mortgage? Age Requirements Explained
        </h2>

        <p>
          The age requirement stands as the most fundamental criterion for reverse mortgage requirements 2026. The youngest borrower listed on the loan must be at least 62 years old at the time of closing. This federal requirement applies uniformly across all HECM loans regardless of state.
        </p>

        <p>
          In our Orange County HECM closings, Mo Abdel has observed that age significantly impacts borrowing power. The older you are, the higher your Principal Limit Factor (PLF)—the percentage of home value you can access. A 70-year-old borrower typically qualifies for a substantially larger principal limit than a 62-year-old with the same home value and interest rate environment.
        </p>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-8 not-prose">
          <h3 className="text-lg font-bold text-blue-800 mb-3">Non-Borrowing Spouse Protections</h3>
          <p className="text-gray-700">
            If one spouse is under 62, they can remain in the home as a non-borrowing spouse with FHA protections enacted in 2015. However, the loan amount is calculated using the younger spouse&apos;s age, resulting in a lower principal limit. The non-borrowing spouse can stay in the home after the borrowing spouse passes, provided they meet residency and property charge requirements.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          What Property Types Qualify for a Reverse Mortgage in 2026?
        </h2>

        <p>
          Property eligibility requirements for reverse mortgages focus on both the property type and its status as your primary residence. Based on Mo Abdel&apos;s experience with California and Washington borrowers, understanding these requirements prevents application delays and disappointments.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Eligible Property Types for HECM Loans
        </h3>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Single-family homes:</strong> The most common property type for reverse mortgages. Townhomes with individual lots typically qualify.</li>
          <li><strong>2-4 unit properties:</strong> Multi-family homes qualify if you occupy one unit as your primary residence. Rental income from other units can support your financial assessment.</li>
          <li><strong>Condominiums:</strong> Must be HUD-approved or meet FHA spot approval requirements. Check the HUD condo lookup tool to verify eligibility.</li>
          <li><strong>Manufactured homes:</strong> Must be built after June 15, 1976, have a permanent foundation, and meet FHA Manufactured Housing requirements. Mobile homes on leased land typically do not qualify.</li>
        </ul>

        <p>
          A recent client scenario illustrates property requirements: A couple in Mission Viejo wanted a HECM on their manufactured home. Because their home was built in 1982 with a permanent foundation and met all FHA standards, they successfully qualified—accessing over $250,000 in equity to eliminate their existing mortgage and establish a line of credit.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          How Much Equity Do You Need for a Reverse Mortgage?
        </h2>

        <p>
          Equity requirements for reverse mortgages in 2026 are more nuanced than a simple percentage threshold. While most borrowers need approximately 50% equity, the actual requirement depends on several factors working together.
        </p>

        <p>
          The key calculation involves your Principal Limit Factor (PLF), determined by your age and current interest rates. Your PLF multiplied by your home&apos;s appraised value (or the FHA limit, whichever is lower) equals your gross principal limit. From this, closing costs and any existing mortgage balance are deducted, leaving your available proceeds.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8 not-prose">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Equity Calculation Example</h3>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-medium">Home Value:</td>
                <td className="py-2 text-right">$800,000</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Existing Mortgage:</td>
                <td className="py-2 text-right">$150,000</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Current Equity:</td>
                <td className="py-2 text-right">$650,000 (81%)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Borrower Age:</td>
                <td className="py-2 text-right">72 years old</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Estimated PLF:</td>
                <td className="py-2 text-right">~52%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Gross Principal Limit:</td>
                <td className="py-2 text-right">~$416,000</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Less Closing Costs:</td>
                <td className="py-2 text-right">~$25,000</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Less Existing Mortgage:</td>
                <td className="py-2 text-right">$150,000</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="py-2 font-bold">Available to Borrower:</td>
                <td className="py-2 text-right font-bold">~$241,000</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">*Illustration only. Actual amounts vary based on current rates and individual circumstances.</p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          What Is the Financial Assessment for Reverse Mortgages?
        </h2>

        <p>
          The financial assessment became a mandatory component of reverse mortgage requirements following FHA guidelines implemented in 2015. This evaluation ensures borrowers can meet ongoing obligations—protecting both seniors and the HECM program.
        </p>

        <p>
          Based on Mo Abdel&apos;s experience processing HECM applications in California and Washington, the financial assessment reviews three primary areas:
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Income Verification
        </h3>
        <p>
          Lenders document all income sources including Social Security benefits, pension payments, investment income, part-time employment, and rental income. The goal is demonstrating sufficient income to cover property taxes, homeowner&apos;s insurance, and any HOA fees.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Credit History Review
        </h3>
        <p>
          While there&apos;s no minimum credit score, lenders examine your credit history for patterns of late payments, defaults, or judgments. Recent bankruptcies, tax liens, or delinquent federal debt can affect approval. However, isolated late payments or old negative marks typically don&apos;t prevent qualification.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Property Charge History
        </h3>
        <p>
          Your history of paying property taxes, homeowner&apos;s insurance, and HOA fees (if applicable) is carefully reviewed. Consistent on-time payments strengthen your application. Recent delinquencies may require explanation and resolution before approval.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-8 not-prose">
          <h3 className="text-lg font-bold text-yellow-800 mb-3">Life Expectancy Set-Aside (LESA)</h3>
          <p className="text-gray-700">
            If the financial assessment reveals concerns about your ability to pay ongoing property charges, the lender may require a LESA. This set-aside reserves a portion of your loan proceeds to pay future property taxes and insurance. While this reduces available funds, it protects borrowers from default risk and can make approval possible for those who otherwise wouldn&apos;t qualify.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Why Is HUD Counseling Required for Reverse Mortgages?
        </h2>

        <p>
          HUD-approved counseling is a federally mandated requirement for all HECM borrowers, established by the Housing and Economic Recovery Act of 2008. This requirement ensures seniors fully understand reverse mortgages before committing—providing independent, professional guidance separate from any lender relationship.
        </p>

        <p>
          In our Orange County practice, we&apos;ve found that borrowers who engage genuinely with counseling make more informed decisions and experience greater satisfaction with their HECM outcomes. The counselor works exclusively for you, providing objective analysis of whether a reverse mortgage aligns with your financial goals.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          What HUD Counseling Covers
        </h3>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>How HECMs work:</strong> Loan mechanics, interest accrual, repayment triggers</li>
          <li><strong>Costs and fees:</strong> Origination fees, mortgage insurance premiums, closing costs</li>
          <li><strong>Payout options:</strong> Lump sum, monthly payments, line of credit, or combinations</li>
          <li><strong>Your obligations:</strong> Property taxes, insurance, maintenance requirements</li>
          <li><strong>Impact on benefits:</strong> Effects on Medicaid, SSI, and other need-based programs</li>
          <li><strong>Alternatives:</strong> HELOCs, home equity loans, downsizing, other options</li>
          <li><strong>Heir considerations:</strong> How the loan affects your estate and inheritance</li>
        </ul>

        <p>
          Counseling sessions typically last 60-90 minutes and cost approximately $125 (some agencies offer free sessions based on income). Sessions can be conducted in person, by phone, or via video conference. Upon completion, you receive a certificate valid for 180 days—required before your lender can process the application.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          What Documentation Do You Need for a Reverse Mortgage?
        </h2>

        <p>
          Preparing documentation in advance streamlines the HECM application process. Based on hundreds of reverse mortgage closings in California and Washington, Mo Abdel recommends gathering these documents before scheduling your counseling session:
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8 not-prose">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Required Documentation Checklist</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Identity & Age</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Government-issued photo ID</li>
                <li>Social Security card or statement</li>
                <li>Birth certificate (if needed)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Income Verification</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Social Security award letter</li>
                <li>Pension statements</li>
                <li>Tax returns (2 years)</li>
                <li>Investment account statements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Property Documents</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Current mortgage statement</li>
                <li>Property tax statement</li>
                <li>Homeowner&apos;s insurance declaration</li>
                <li>HOA information (if applicable)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Financial Records</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Bank statements (2-3 months)</li>
                <li>List of monthly expenses</li>
                <li>Existing debt information</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          What Disqualifies You from Getting a Reverse Mortgage?
        </h2>

        <p>
          Understanding potential disqualifiers helps you assess your eligibility before investing time in the application process. Here are the primary factors that can prevent HECM approval:
        </p>

        <ul className="list-disc pl-6 space-y-3 my-6">
          <li><strong>Age under 62:</strong> The youngest borrower must be 62 or older at closing</li>
          <li><strong>Property not primary residence:</strong> Vacation homes, rental properties, and investment properties do not qualify</li>
          <li><strong>Insufficient equity:</strong> Not enough equity to pay off existing mortgage and cover closing costs</li>
          <li><strong>Delinquent federal debt:</strong> Outstanding federal debts (taxes, student loans) must be resolved</li>
          <li><strong>Property condition issues:</strong> Home doesn&apos;t meet FHA minimum property standards (repairs may be required)</li>
          <li><strong>Ineligible property type:</strong> Co-ops, bed-and-breakfasts, and most manufactured homes on leased land</li>
          <li><strong>No HUD counseling certificate:</strong> Cannot proceed without completing required counseling</li>
          <li><strong>Unable to meet ongoing obligations:</strong> Demonstrable inability to pay taxes, insurance, and maintenance</li>
        </ul>

        {/* ============================================ */}
        {/* DATA & COMPARISON HUB - 400-500 words */}
        {/* ============================================ */}

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Reverse Mortgage Requirements by Loan Type: 2026 Comparison
        </h2>

        <p>
          While HECM loans are the most common reverse mortgage type, understanding how requirements differ across reverse mortgage products helps you identify the best fit for your situation.
        </p>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full text-sm border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 text-left font-semibold border-b">Requirement</th>
                <th className="px-4 py-3 text-left font-semibold border-b">HECM (FHA)</th>
                <th className="px-4 py-3 text-left font-semibold border-b">Proprietary/Jumbo</th>
                <th className="px-4 py-3 text-left font-semibold border-b">Single-Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">Minimum Age</td>
                <td className="px-4 py-3">62</td>
                <td className="px-4 py-3">55-62 (varies)</td>
                <td className="px-4 py-3">62 (typically)</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium">Maximum Loan</td>
                <td className="px-4 py-3">$1,209,750</td>
                <td className="px-4 py-3">$4M+ available</td>
                <td className="px-4 py-3">Varies by program</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">HUD Counseling</td>
                <td className="px-4 py-3">Required</td>
                <td className="px-4 py-3">Not required</td>
                <td className="px-4 py-3">Often required</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium">FHA Insurance</td>
                <td className="px-4 py-3">Yes (2% upfront + 0.5%/yr)</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">No</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">Non-Recourse</td>
                <td className="px-4 py-3">Yes (FHA guaranteed)</td>
                <td className="px-4 py-3">Varies by lender</td>
                <td className="px-4 py-3">Varies</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium">Property Types</td>
                <td className="px-4 py-3">1-4 unit, condo, manufactured</td>
                <td className="px-4 py-3">More flexibility</td>
                <td className="px-4 py-3">Limited</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Best For</td>
                <td className="px-4 py-3">Most homeowners</td>
                <td className="px-4 py-3">High-value homes</td>
                <td className="px-4 py-3">Specific needs (repairs, taxes)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          California vs Washington: State-Specific Considerations
        </h3>

        <p>
          While HECM requirements are federally standardized, California and Washington have different market conditions affecting reverse mortgage outcomes:
        </p>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full text-sm border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 text-left font-semibold border-b">Factor</th>
                <th className="px-4 py-3 text-left font-semibold border-b">California</th>
                <th className="px-4 py-3 text-left font-semibold border-b">Washington</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">Median Home Value</td>
                <td className="px-4 py-3">Higher (many above FHA limit)</td>
                <td className="px-4 py-3">Moderate to high</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium">Property Taxes</td>
                <td className="px-4 py-3">Prop 13 limits (often lower)</td>
                <td className="px-4 py-3">Market rate (can be higher)</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">Insurance Costs</td>
                <td className="px-4 py-3">Higher (fire risk areas)</td>
                <td className="px-4 py-3">Moderate</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-3 font-medium">Condo Availability</td>
                <td className="px-4 py-3">Many HUD-approved options</td>
                <td className="px-4 py-3">Limited in some areas</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Jumbo Need</td>
                <td className="px-4 py-3">Common in coastal areas</td>
                <td className="px-4 py-3">Seattle metro primarily</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ============================================ */}
        {/* PEOPLE ALSO ASK - 400-500 words */}
        {/* ============================================ */}

        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8">
          People Also Ask About Reverse Mortgage Requirements
        </h2>

        <div className="space-y-6 not-prose">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What is the minimum age for a reverse mortgage in 2026?
            </h3>
            <p className="paa-answer text-gray-700 font-medium mb-2">
              The youngest borrower must be at least 62 years old at closing; non-borrowing spouses under 62 have protections but reduce available loan amounts.
            </p>
            <p className="text-gray-600">
              This age requirement is federal law and applies to all HECM loans. Some proprietary reverse mortgages may offer lower age requirements (55-60), but these products lack FHA insurance protections and have different terms.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How much equity is required for a reverse mortgage?
            </h3>
            <p className="paa-answer text-gray-700 font-medium mb-2">
              Most borrowers need approximately 50% equity; exact requirements depend on age, interest rates, and existing mortgage balance.
            </p>
            <p className="text-gray-600">
              Older borrowers with higher equity can access more funds. The calculation uses Principal Limit Factors published by FHA, which vary based on the youngest borrower&apos;s age and expected interest rates at time of application.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Is there a credit score requirement for reverse mortgages?
            </h3>
            <p className="paa-answer text-gray-700 font-medium mb-2">
              There is no minimum credit score for HECM loans; however, lenders review credit history as part of the mandatory financial assessment.
            </p>
            <p className="text-gray-600">
              Poor credit history may result in a required Life Expectancy Set-Aside (LESA) to ensure property taxes and insurance are paid. Delinquent federal debt must be resolved before approval.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What is the 2026 FHA lending limit for reverse mortgages?
            </h3>
            <p className="paa-answer text-gray-700 font-medium mb-2">
              The 2026 FHA HECM lending limit is $1,209,750 nationwide, regardless of actual home value.
            </p>
            <p className="text-gray-600">
              Homes worth more than the FHA limit still qualify, but loan calculations are capped at $1,209,750. For high-value properties, proprietary reverse mortgages can access additional equity beyond FHA limits.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Do I need to own my home outright for a reverse mortgage?
            </h3>
            <p className="paa-answer text-gray-700 font-medium mb-2">
              No, you can have an existing mortgage; it must be paid off with reverse mortgage proceeds at closing.
            </p>
            <p className="text-gray-600">
              Many borrowers use reverse mortgages specifically to eliminate monthly mortgage payments. As long as your equity exceeds the existing balance plus closing costs, you can qualify while still having a mortgage.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How long is HUD counseling valid?
            </h3>
            <p className="paa-answer text-gray-700 font-medium mb-2">
              HUD counseling certificates are valid for 180 days (approximately 6 months) from the date of completion.
            </p>
            <p className="text-gray-600">
              Most reverse mortgage closings occur within 30-45 days, well within the certificate&apos;s validity period. If your loan doesn&apos;t close in time, you&apos;ll need to complete counseling again.
            </p>
          </div>
        </div>

        {/* ============================================ */}
        {/* EXTENDED FAQ - 400-500 words */}
        {/* ============================================ */}

        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8">
          Frequently Asked Questions About Reverse Mortgage Eligibility
        </h2>

        <div className="space-y-6 not-prose">
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can I get a reverse mortgage if I still have a mortgage?
            </h3>
            <p className="text-gray-700">
              Yes. Your existing mortgage must be paid off with reverse mortgage proceeds at closing. You&apos;ll need enough equity for the HECM to cover your current mortgage balance, closing costs, and still have funds remaining for your use.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What if my spouse is under 62?
            </h3>
            <p className="text-gray-700">
              Your spouse can remain in the home as a non-borrowing spouse with FHA protections. However, the loan amount is calculated using the younger spouse&apos;s age, resulting in a lower principal limit. The non-borrowing spouse must meet residency and property charge requirements.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Does my condo qualify for a reverse mortgage?
            </h3>
            <p className="text-gray-700">
              Condos must be HUD-approved or meet FHA spot approval requirements. Check the HUD condo lookup tool at HUD.gov to verify eligibility. Many condominiums in California and Washington are already approved.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can a mobile home qualify for a reverse mortgage?
            </h3>
            <p className="text-gray-700">
              Manufactured homes built after June 15, 1976, with permanent foundations meeting FHA standards can qualify. Mobile homes on leased land typically do not qualify. An FHA appraiser will verify compliance.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How long does the reverse mortgage approval process take?
            </h3>
            <p className="text-gray-700">
              The complete process typically takes 30-45 days: counseling scheduling (1-2 weeks), application and assessment (1-2 weeks), appraisal (1 week), and underwriting/closing (2-3 weeks). Starting with documentation preparation can expedite the timeline.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What happens if my home needs repairs?
            </h3>
            <p className="text-gray-700">
              If the appraisal identifies health/safety issues, repairs may be required before closing. Funds can be set aside from loan proceeds for repairs, completed after closing but before accessing full proceeds.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What is a Life Expectancy Set-Aside (LESA)?
            </h3>
            <p className="text-gray-700">
              A LESA reserves a portion of loan proceeds to pay future property taxes and insurance if the financial assessment reveals concerns about payment ability. This protects borrowers from default while enabling approval.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can I be denied a reverse mortgage after counseling?
            </h3>
            <p className="text-gray-700">
              Yes. Counseling completion doesn&apos;t guarantee approval. The lender&apos;s financial assessment, property appraisal, and underwriting review can still result in denial or require additional conditions.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Are reverse mortgage requirements different for jumbo loans?
            </h3>
            <p className="text-gray-700">
              Proprietary (jumbo) reverse mortgages have different requirements set by individual lenders, not FHA. Age requirements may be lower (55-60), HUD counseling may not be required, and higher loan amounts are available. Terms vary significantly by lender.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What if I don&apos;t meet reverse mortgage requirements?
            </h3>
            <p className="text-gray-700">
              If you don&apos;t qualify for a HECM, alternatives include proprietary reverse mortgages (for high-value homes or younger borrowers), HELOCs, home equity loans, cash-out refinancing, or downsizing. A mortgage broker can help identify the best option.
            </p>
          </div>
        </div>

        {/* ============================================ */}
        {/* EXPERT SUMMARY + CTA - 150-200 words */}
        {/* ============================================ */}

        <div className="expert-summary bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-8 rounded-r-lg mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Check Your Reverse Mortgage Eligibility?
          </h2>
          <p className="text-gray-800 mb-4">
            Understanding reverse mortgage requirements 2026 is the first step toward accessing your home equity without monthly payments. As Mo Abdel, NMLS #1426884, advises: &quot;The key is matching your situation with the right product. HECM requirements protect borrowers while ensuring program sustainability—but they&apos;re not one-size-fits-all. Some borrowers benefit from HECM, while others may find proprietary reverse mortgages, HELOCs, or other options better suited to their goals.&quot;
          </p>
          <p className="text-gray-800 mb-6">
            Contact Mo Abdel today for a personalized eligibility assessment. We&apos;ll review your age, property, equity position, and financial situation to determine which reverse mortgage options best fit your needs—and connect you with HUD-approved counseling resources to begin the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-center"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+19498229662"
              className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Call (949) 822-9662
            </a>
          </div>
        </div>

        {/* Internal Links */}
        <div className="bg-gray-100 p-6 rounded-lg mt-12 not-prose">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Continue Your Reverse Mortgage Research</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/reverse-mortgages"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">Complete HECM Guide 2026 &rarr;</span>
              <p className="text-sm text-gray-600 mt-1">Comprehensive reverse mortgage overview for California and Washington</p>
            </Link>
            <Link
              href="/blog/what-is-reverse-mortgage-hecm-guide-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">What Is a Reverse Mortgage? &rarr;</span>
              <p className="text-sm text-gray-600 mt-1">Back to basics: how HECMs work and who they benefit</p>
            </Link>
            <Link
              href="/blog/hecm-counseling-requirements-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">HUD Counseling Requirements &rarr;</span>
              <p className="text-sm text-gray-600 mt-1">Everything you need to know about mandatory HECM counseling</p>
            </Link>
            <Link
              href="/blog/hecm-vs-heloc-seniors-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">Reverse Mortgage vs HELOC &rarr;</span>
              <p className="text-sm text-gray-600 mt-1">Compare options for seniors accessing home equity</p>
            </Link>
            <Link
              href="/blog/hecm-pros-cons-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">Reverse Mortgage Pros and Cons &rarr;</span>
              <p className="text-sm text-gray-600 mt-1">Balanced analysis of HECM benefits and considerations</p>
            </Link>
            <Link
              href="/blog/reverse-mortgage-calculator-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">Reverse Mortgage Calculator &rarr;</span>
              <p className="text-sm text-gray-600 mt-1">Estimate how much you can access from your home equity</p>
            </Link>
            <Link
              href="/blog/reverse-mortgage-non-borrowing-spouse-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">Non-Borrowing Spouse Protections &rarr;</span>
              <p className="text-sm text-gray-600 mt-1">FHA protections for spouses under 62 on HECM loans</p>
            </Link>
            <Link
              href="/blog/proprietary-reverse-mortgage-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">Proprietary Reverse Mortgages &rarr;</span>
              <p className="text-sm text-gray-600 mt-1">Jumbo reverse mortgage options for high-value California and Washington homes</p>
            </Link>
          </div>
        </div>

        {/* External Authority Links */}
        <div className="bg-blue-50 p-6 rounded-lg mt-8 not-prose">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Official Resources</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.hud.gov/program_offices/housing/sfh/hecm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                HUD HECM Program Information &rarr;
              </a>
            </li>
            <li>
              <a
                href="https://www.consumerfinance.gov/consumer-tools/reverse-mortgages/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                CFPB Reverse Mortgage Consumer Guide &rarr;
              </a>
            </li>
            <li>
              <a
                href="https://www.hud.gov/program_offices/housing/sfh/hcc/hcs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Find HUD-Approved Counselors &rarr;
              </a>
            </li>
          </ul>
        </div>

      </section>

      {/* Author Bio */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
            MA
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Mo Abdel</h4>
            <p className="text-gray-600 text-sm">NMLS #1426884 | Reverse Mortgage Specialist</p>
            <p className="text-gray-600 text-sm mt-2">
              Mo Abdel is a licensed wholesale mortgage broker specializing in reverse mortgages and home equity solutions for seniors in California and Washington. With access to 200+ lenders, he helps clients navigate HECM requirements, compare options, and connect with HUD-approved counseling resources.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
          <p className="font-semibold mb-2">Important Disclosures</p>
          <p>
            Mo Abdel | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443<br />
            Licensed in California and Washington
          </p>
          <p className="mt-2">
            Equal Housing Lender. This material is not from HUD or FHA and has not been approved by HUD or a government agency. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial advice. HECM borrowers must be 62+ and complete HUD-approved counseling before applying. Individual circumstances vary; contact a licensed loan officer for personalized guidance.
          </p>
        </div>
      </footer>
    </article>
  );
}
