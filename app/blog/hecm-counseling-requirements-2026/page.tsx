import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HECM Counseling Requirements 2026: HUD-Approved Process, Costs & What to Expect | MoTheBroker',
  description: 'Complete guide to HUD-approved HECM counseling requirements for 2026. Learn what to expect, how to find approved counselors, costs, and how counseling protects seniors.',
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/hecm-counseling-requirements-2026',
    languages: {
      'en-US': 'https://www.mothebroker.com/blog/hecm-counseling-requirements-2026',
      'x-default': 'https://www.mothebroker.com/blog/hecm-counseling-requirements-2026',
    },
  },
  keywords: [
    'HUD reverse mortgage counseling',
    'HECM counseling requirements',
    'reverse mortgage counseling near me',
    'HUD approved counselors',
    'reverse mortgage counseling cost',
    'HECM counseling process',
    'reverse mortgage education',
    'HUD counseling certificate',
  ],
  openGraph: {
    title: 'HECM Counseling Requirements 2026: HUD-Approved Process, Costs & What to Expect',
    description: 'Complete guide to HUD-approved HECM counseling. Learn what to expect, find counselors, and understand how this requirement protects you.',
    url: 'https://www.mothebroker.com/blog/hecm-counseling-requirements-2026',
    type: 'article',
    publishedTime: '2026-01-29',
    modifiedTime: '2026-02-23T00:00:00Z',
    authors: ['Mo Abdel'],
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
};

export default function HECMCounselingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "HECM Counseling Requirements 2026: HUD-Approved Process, Costs & What to Expect",
    "description": "Complete guide to HUD-approved HECM counseling requirements for 2026. Learn what to expect, how to find approved counselors, costs, and how counseling protects seniors.",
    "author": {
      "@type": "Person",
      "name": "Mo Abdel",
      "jobTitle": "Mortgage Broker & Reverse Mortgage Specialist",
      "url": "https://www.mothebroker.com",
      "worksFor": {
        "@type": "Organization",
        "name": "Lumin Lending"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "MoTheBroker.com",
      "url": "https://www.mothebroker.com"
    },
    "datePublished": "2026-01-29",
    "dateModified": "2026-02-23",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.mothebroker.com/blog/hecm-counseling-requirements-2026"
    },
    "keywords": ["HUD reverse mortgage counseling", "HECM counseling", "reverse mortgage requirements", "HUD approved counselors"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is reverse mortgage counseling required by law?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, HUD-approved counseling is federally mandated for all HECM (Home Equity Conversion Mortgage) borrowers. No lender can process a reverse mortgage application without a valid counseling certificate. This requirement, established by the Housing and Economic Recovery Act of 2008, protects seniors from predatory lending."
        }
      },
      {
        "@type": "Question",
        "name": "How much does reverse mortgage counseling cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HECM counseling typically costs $125-$175, with an average of $125. Some HUD-approved agencies offer free counseling based on income, and payment cannot be required before the session. The fee can be paid by the borrower, a family member, or from loan proceeds at closing."
        }
      },
      {
        "@type": "Question",
        "name": "How long does reverse mortgage counseling take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most HECM counseling sessions last 60-90 minutes. The counselor must cover all required topics including loan terms, costs, alternatives, and obligations. Sessions can be conducted in person, by phone, or via video conference with a HUD-approved counseling agency."
        }
      },
      {
        "@type": "Question",
        "name": "What happens during reverse mortgage counseling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "During counseling, you'll discuss your financial situation, learn how HECMs work, review costs and fees, explore alternatives to reverse mortgages, understand your obligations (taxes, insurance, maintenance), learn about payout options, and receive information about potential impacts on benefits and inheritance."
        }
      },
      {
        "@type": "Question",
        "name": "How do I find a HUD-approved reverse mortgage counselor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Find HUD-approved HECM counselors at HUD.gov/counseling or by calling 800-569-4287. You can also ask your lender for a list of approved agencies. Counselors must be certified specifically for HECM counseling and work for HUD-approved housing counseling agencies."
        }
      },
      {
        "@type": "Question",
        "name": "Can I do reverse mortgage counseling online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, HECM counseling can be conducted by phone or video conference with a HUD-approved counselor. In-person sessions are also available but not required. The counselor must be able to communicate effectively and ensure you understand all material, regardless of the format used."
        }
      },
      {
        "@type": "Question",
        "name": "How long is the HECM counseling certificate valid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HECM counseling certificates are valid for 180 days (approximately 6 months) from the date of completion. If your loan doesn't close within this period, you'll need to complete counseling again. Most loans close well within this timeframe."
        }
      },
      {
        "@type": "Question",
        "name": "Can my adult children attend the HECM counseling session?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, HUD encourages family members, attorneys, financial advisors, or other trusted individuals to attend the counseling session. Family participation helps ensure everyone understands how the reverse mortgage works, what obligations exist, and how the loan may affect inheritance. The final decision remains with the borrower."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to complete counseling before talking to a lender?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you can speak with a lender before counseling to understand your options and get preliminary information. However, the lender cannot process your formal loan application or order an appraisal until you provide a valid HECM counseling certificate. Many borrowers find it helpful to consult a lender first so they can ask more informed questions during counseling."
        }
      },
      {
        "@type": "Question",
        "name": "Is HECM counseling available in languages other than English?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many HUD-approved counseling agencies offer sessions in Spanish, Mandarin, Vietnamese, Korean, and other languages. When searching for a counselor at HUD.gov/counseling, you can filter by language. If you need a specific language, ask the agency about availability before scheduling your session."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I fail reverse mortgage counseling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HECM counseling is not a pass/fail test. The counselor's role is educational, not evaluative. Every borrower who completes the session receives a counseling certificate regardless of whether they decide to proceed with the loan. The counselor will ensure you understand the product, but the decision to move forward is entirely yours. If the counselor identifies concerns about your ability to maintain the property or pay taxes and insurance, they will discuss these issues with you but cannot prevent you from obtaining the certificate."
        }
      }
    ]
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

      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/reverse-mortgages" className="hover:text-blue-600">Reverse Mortgages</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">HECM Counseling</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
          <span className="bg-blue-100 px-3 py-1 rounded-full">HECM Requirements</span>
          <span>•</span>
          <time dateTime="2026-02-23">Updated February 23, 2026</time>
          <span>•</span>
          <span>10 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          HECM Counseling Requirements 2026: Complete Guide to HUD-Approved Reverse Mortgage Counseling
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          HUD-approved counseling is a mandatory step before obtaining a reverse mortgage &mdash; and it exists to protect you. According to the National Reverse Mortgage Lenders Association, over 33,000 HECM loans were endorsed in FY 2025, and every one of those borrowers completed counseling first. HUD data shows that roughly 98% of HECM counseling sessions in 2025 were conducted by phone or video conference, making the process accessible regardless of location. This federal requirement ensures seniors understand exactly how HECMs work, what alternatives exist, and what ongoing obligations they will have. With the FHA HECM lending limit increasing to $1,209,750 for 2026, counseling has become even more important for seniors accessing larger loan amounts. According to Mo Abdel, NMLS #1426884 at Lumin Lending (NMLS #2716106, DRE #02291443), borrowers who prepare properly for counseling close 40% faster because they enter the loan process fully informed.
        </p>
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

        {/* Quick Facts Box */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10 not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-4">HECM Counseling Quick Facts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Required:</strong> Yes, federally mandated for all HECMs</li>
                <li><strong>Cost:</strong> $125-$175 (some free options available)</li>
                <li><strong>Duration:</strong> 60-90 minutes</li>
                <li><strong>Format:</strong> Phone, video, or in-person</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Certificate Valid:</strong> 180 days</li>
                <li><strong>When:</strong> Before loan application is processed</li>
                <li><strong>Find Counselors:</strong> HUD.gov or 800-569-4287</li>
                <li><strong>Purpose:</strong> Borrower protection & education</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          What Is Reverse Mortgage Counseling and Why Is It Required?
        </h2>

        <p>
          Reverse mortgage counseling is a mandatory educational session conducted by an independent,
          HUD-approved counselor before a borrower can proceed with a Home Equity Conversion Mortgage
          (HECM). The requirement was established by the Housing and Economic Recovery Act of 2008
          and strengthened by subsequent regulations to protect seniors from predatory lending
          practices.
        </p>

        <p>
          The counselor works for the borrower, not the lender. Their role is to ensure you
          fully understand how reverse mortgages work, what alternatives might better suit your
          situation, and what ongoing obligations you'll have after obtaining the loan. No lender
          can process your application without a valid counseling certificate.
        </p>

        <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg my-8 not-prose">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Why Counseling Protects You</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ <strong>Independent perspective:</strong> Counselors have no financial interest in your loan decision</li>
            <li>✓ <strong>Complete information:</strong> All costs, risks, and alternatives must be discussed</li>
            <li>✓ <strong>Documentation:</strong> Creates record that you were fully informed before proceeding</li>
            <li>✓ <strong>Time to decide:</strong> Opportunity to ask questions and think before committing</li>
            <li>✓ <strong>Family inclusion:</strong> Family members or advisors can attend with you</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          What Topics Does HECM Counseling Cover?
        </h2>

        <p>
          HUD requires counselors to cover specific topics during the session. While the exact
          presentation may vary by counselor, all must address these core areas:
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          1. How Reverse Mortgages Work
        </h3>
        <p>
          The counselor will explain the basic mechanics of a HECM: how you receive funds, how
          interest accrues over time, when repayment is required, and how the loan balance grows
          throughout the life of the loan. They'll use your specific home value and age to
          illustrate realistic scenarios.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          2. Payment Options
        </h3>
        <p>
          You'll learn about the different ways to receive HECM funds:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Lump sum:</strong> Single payment at closing (fixed rate only)</li>
          <li><strong>Monthly tenure:</strong> Equal payments for as long as you live in the home</li>
          <li><strong>Monthly term:</strong> Equal payments for a fixed number of months</li>
          <li><strong>Line of credit:</strong> Draw funds as needed, with unused balance growing</li>
          <li><strong>Combination:</strong> Mix of monthly payments and credit line</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          3. Costs and Fees
        </h3>
        <p>
          The counselor must explain all costs associated with a HECM, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Origination fees (capped by FHA)</li>
          <li>Upfront mortgage insurance premium (2% of home value)</li>
          <li>Ongoing mortgage insurance (0.5% annually)</li>
          <li>Third-party costs (appraisal, title, recording)</li>
          <li>Interest rates and how they affect loan balance growth</li>
          <li>Servicing fees (if applicable)</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8 not-prose">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Typical HECM Costs Discussed in Counseling</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Cost Type</th>
                <th className="text-right py-2">Typical Amount</th>
                <th className="text-left py-2 pl-4">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">FHA MIP (Upfront)</td>
                <td className="text-right">2% of home value</td>
                <td className="pl-4">Usually financed</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Origination Fee</td>
                <td className="text-right">$2,500-$6,000</td>
                <td className="pl-4">FHA-capped formula</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Third-Party Costs</td>
                <td className="text-right">$1,500-$3,500</td>
                <td className="pl-4">Appraisal, title, etc.</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Annual MIP</td>
                <td className="text-right">0.5% of balance</td>
                <td className="pl-4">Added to loan balance</td>
              </tr>
              <tr>
                <td className="py-2">Counseling</td>
                <td className="text-right">$125</td>
                <td className="pl-4">Paid separately</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          4. Borrower Obligations
        </h3>
        <p>
          A critical part of counseling covers what you must do to keep your loan in good standing:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Property taxes:</strong> Must be paid on time</li>
          <li><strong>Homeowner's insurance:</strong> Must maintain adequate coverage</li>
          <li><strong>Property maintenance:</strong> Home must be kept in reasonable condition</li>
          <li><strong>Primary residence:</strong> Must remain your primary home</li>
          <li><strong>HOA fees:</strong> Must stay current if applicable</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-8 not-prose">
          <h3 className="text-lg font-bold text-yellow-800 mb-3">Important Warning</h3>
          <p className="text-gray-700">
            Failure to meet these obligations can result in the loan becoming due and payable.
            Lenders now conduct financial assessments and may set aside funds for taxes and
            insurance if there are concerns about the borrower's ability to pay. Your counselor
            will explain how this "Life Expectancy Set-Aside" (LESA) works.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          5. Alternatives to Reverse Mortgages
        </h3>
        <p>
          Counselors must discuss alternatives that might work better for your situation:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Home equity loan or HELOC:</strong> Traditional borrowing options</li>
          <li><strong>Selling and downsizing:</strong> May provide more cash and lower expenses</li>
          <li><strong>Property tax assistance programs:</strong> Available in many states for seniors</li>
          <li><strong>Public benefits:</strong> SSI, Medicaid, food assistance, etc.</li>
          <li><strong>Family support:</strong> Loans from family members</li>
          <li><strong>Sale-leaseback:</strong> Sell home but continue renting</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          6. Impact on Heirs and Estate
        </h3>
        <p>
          The counselor will explain how a reverse mortgage affects inheritance:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Home equity decreases over time as loan balance grows</li>
          <li>Heirs can repay loan and keep home, or sell and keep remaining equity</li>
          <li>Non-recourse protection means heirs never owe more than home value</li>
          <li>Heirs have options and time to decide after borrower passes</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          7. Impact on Government Benefits
        </h3>
        <p>
          Counselors address how HECM proceeds affect benefits:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Social Security and Medicare:</strong> Not affected (loan proceeds aren't income)</li>
          <li><strong>Medicaid and SSI:</strong> May be affected if funds held at month-end</li>
          <li><strong>Tax implications:</strong> Proceeds are loan advances, generally not considered taxable income (consult your tax advisor); interest deduction when loan repaid</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          How to Find a HUD-Approved HECM Counselor
        </h2>

        <p>
          Only counselors who work for HUD-approved housing counseling agencies and hold specific
          HECM certification can provide valid counseling. Here's how to find one:
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8 not-prose">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Find a HUD-Approved Counselor</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h4 className="font-semibold">HUD Website</h4>
                <p className="text-gray-600">Visit <strong>HUD.gov/counseling</strong> and search for HECM counselors in your area</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <h4 className="font-semibold">HUD Hotline</h4>
                <p className="text-gray-600">Call <strong>800-569-4287</strong> for referrals to approved agencies</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <h4 className="font-semibold">Lender Referral</h4>
                <p className="text-gray-600">Your lender must provide a list of at least 10 HUD-approved agencies</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <h4 className="font-semibold">National Organizations</h4>
                <p className="text-gray-600">Money Management International, ClearPoint, GreenPath offer nationwide service</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          What to Expect During Your Counseling Session
        </h2>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Before the Session
        </h3>
        <p>
          To prepare for counseling:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Gather your most recent mortgage statement (if applicable)</li>
          <li>Know your approximate home value</li>
          <li>Have a general idea of your monthly income and expenses</li>
          <li>List your questions and concerns</li>
          <li>Invite a family member or trusted advisor to participate (optional but encouraged)</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          During the Session (60-90 Minutes)
        </h3>
        <p>
          The counselor will:
        </p>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li><strong>Assess your situation:</strong> Discuss your financial goals and why you're considering a reverse mortgage</li>
          <li><strong>Explain HECM basics:</strong> How the loan works, payment options, costs</li>
          <li><strong>Review your obligations:</strong> Taxes, insurance, maintenance requirements</li>
          <li><strong>Discuss alternatives:</strong> Other options that might meet your needs</li>
          <li><strong>Answer questions:</strong> Address your specific concerns and scenarios</li>
          <li><strong>Verify understanding:</strong> Ensure you comprehend key concepts before issuing certificate</li>
        </ol>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          After the Session
        </h3>
        <p>
          If you demonstrate understanding of HECM terms and requirements, the counselor will:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Issue a counseling certificate (required for loan processing)</li>
          <li>Provide written materials summarizing key points</li>
          <li>Answer follow-up questions if needed</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-8 not-prose">
          <h3 className="text-lg font-bold text-blue-800 mb-3">Certificate Validity</h3>
          <p className="text-gray-700">
            Your HECM counseling certificate is valid for <strong>180 days</strong> from the date
            of completion. If your loan doesn't close within this period, you'll need to complete
            counseling again. Most loans close in 30-45 days, well within this window.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          How Much Does Reverse Mortgage Counseling Cost?
        </h2>

        <p>
          HECM counseling fees typically range from $125 to $175, with $125 being most common.
          Important points about costs:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Fee structure:</strong> Many agencies charge flat fees; some use sliding scales based on income</li>
          <li><strong>Free options:</strong> Some HUD-approved agencies offer free counseling for low-income borrowers</li>
          <li><strong>Payment timing:</strong> Counselors cannot require payment before the session</li>
          <li><strong>Payment options:</strong> Can be paid by borrower, family member, or from loan proceeds at closing</li>
          <li><strong>No lender payment:</strong> Lenders cannot pay counseling fees directly (maintains independence)</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Can Family Members Participate in Counseling?
        </h2>

        <p>
          Yes, family members, attorneys, financial advisors, or other trusted individuals can
          participate in your counseling session. HUD encourages this because:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Family members may have relevant questions you haven't considered</li>
          <li>Having support can help you process complex information</li>
          <li>Family understanding reduces conflicts later</li>
          <li>Adult children often help parents with financial decisions</li>
        </ul>

        <p>
          However, the decision to proceed with a reverse mortgage is ultimately the borrower's.
          Counselors ensure the borrower isn't being pressured by family members or others.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          What If You Don't Pass Counseling?
        </h2>

        <p>
          Technically, you don't "pass" or "fail" counseling—but the counselor may decline to
          issue a certificate if you don't demonstrate understanding of key concepts. This rarely
          happens when borrowers engage genuinely with the process. If it occurs, you can:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Schedule a follow-up session to review unclear areas</li>
          <li>Bring a family member to help you understand concepts</li>
          <li>Ask for materials in your preferred language</li>
          <li>Request accommodations for hearing, vision, or cognitive needs</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Online vs In-Person HECM Counseling
        </h2>

        <p>
          HUD permits counseling by phone, video conference, or in person. Each format has advantages:
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Phone Counseling</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Most convenient</li>
              <li>✓ Widest availability</li>
              <li>✓ No travel required</li>
              <li>✗ No visual aids</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Video Counseling</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Visual aids available</li>
              <li>✓ Personal interaction</li>
              <li>✓ Screen sharing possible</li>
              <li>✗ Requires technology</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">In-Person</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Face-to-face rapport</li>
              <li>✓ Physical materials</li>
              <li>✓ Best for complex situations</li>
              <li>✗ Limited availability</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Tips for Getting the Most from Counseling
        </h2>

        <ol className="list-decimal pl-6 space-y-4 my-6">
          <li>
            <strong>Be honest about your situation:</strong> The counselor can only help if they
            understand your true financial picture
          </li>
          <li>
            <strong>Prepare questions in advance:</strong> Write down concerns so you don't forget
            to ask
          </li>
          <li>
            <strong>Take notes:</strong> Even though you'll receive written materials, notes help
            you remember key points
          </li>
          <li>
            <strong>Include family:</strong> Having a trusted person participate helps you process
            information and remember details
          </li>
          <li>
            <strong>Don't rush:</strong> This is your opportunity to learn; ask for clarification
            on anything unclear
          </li>
          <li>
            <strong>Be open to alternatives:</strong> The counselor may identify options you hadn't
            considered
          </li>
        </ol>

        {/* FAQ Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8">
          Frequently Asked Questions About HECM Counseling
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Is reverse mortgage counseling required by law?
            </h3>
            <p className="text-gray-700">
              Yes, HUD-approved counseling is federally mandated for all HECM (Home Equity Conversion
              Mortgage) borrowers. No lender can process a reverse mortgage application without a
              valid counseling certificate. This requirement, established by the Housing and Economic
              Recovery Act of 2008, protects seniors from predatory lending.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How much does reverse mortgage counseling cost?
            </h3>
            <p className="text-gray-700">
              HECM counseling typically costs $125-$175, with an average of $125. Some HUD-approved
              agencies offer free counseling based on income, and payment cannot be required before
              the session. The fee can be paid by the borrower, a family member, or from loan
              proceeds at closing.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How long does reverse mortgage counseling take?
            </h3>
            <p className="text-gray-700">
              Most HECM counseling sessions last 60-90 minutes. The counselor must cover all required
              topics including loan terms, costs, alternatives, and obligations. Sessions can be
              conducted in person, by phone, or via video conference with a HUD-approved counseling
              agency.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What happens during reverse mortgage counseling?
            </h3>
            <p className="text-gray-700">
              During counseling, you'll discuss your financial situation, learn how HECMs work,
              review costs and fees, explore alternatives to reverse mortgages, understand your
              obligations (taxes, insurance, maintenance), learn about payout options, and receive
              information about potential impacts on benefits and inheritance.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How do I find a HUD-approved reverse mortgage counselor?
            </h3>
            <p className="text-gray-700">
              Find HUD-approved HECM counselors at HUD.gov/counseling or by calling 800-569-4287.
              You can also ask your lender for a list of approved agencies. Counselors must be
              certified specifically for HECM counseling and work for HUD-approved housing counseling
              agencies.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Can I do reverse mortgage counseling online?
            </h3>
            <p className="text-gray-700">
              Yes, HECM counseling can be conducted by phone or video conference with a HUD-approved
              counselor. In-person sessions are also available but not required. The counselor must
              be able to communicate effectively and ensure you understand all material, regardless
              of the format used.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How long is the HECM counseling certificate valid?
            </h3>
            <p className="text-gray-700">
              HECM counseling certificates are valid for 180 days (approximately 6 months) from the
              date of completion. If your loan doesn't close within this period, you'll need to
              complete counseling again. Most loans close well within this timeframe.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Can my adult children attend the HECM counseling session?
            </h3>
            <p className="text-gray-700">
              Yes, HUD encourages family members, attorneys, financial advisors, or other trusted
              individuals to attend the counseling session. Family participation helps ensure everyone
              understands how the reverse mortgage works, what obligations exist, and how the loan
              may affect inheritance. The final decision remains with the borrower.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Do I need to complete counseling before talking to a lender?
            </h3>
            <p className="text-gray-700">
              No, you can speak with a lender before counseling to understand your options and get
              preliminary information. However, the lender cannot process your formal loan application
              or order an appraisal until you provide a valid HECM counseling certificate. Many
              borrowers find it helpful to consult a lender first so they can ask more informed
              questions during counseling.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Is HECM counseling available in languages other than English?
            </h3>
            <p className="text-gray-700">
              Yes, many HUD-approved counseling agencies offer sessions in Spanish, Mandarin,
              Vietnamese, Korean, and other languages. When searching for a counselor at
              HUD.gov/counseling, you can filter by language. If you need a specific language, ask
              the agency about availability before scheduling your session.
            </p>
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
              <span className="font-semibold text-blue-600">Complete HECM Guide →</span>
              <p className="text-sm text-gray-600 mt-1">Comprehensive reverse mortgage overview for California & Washington</p>
            </Link>
            <Link
              href="/blog/reverse-mortgage-requirements-complete-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">HECM Requirements 2026 →</span>
              <p className="text-sm text-gray-600 mt-1">Age, equity, and qualification criteria</p>
            </Link>
            <Link
              href="/blog/hecm-pros-cons-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">Reverse Mortgage Pros & Cons →</span>
              <p className="text-sm text-gray-600 mt-1">Complete analysis of HECM benefits and considerations</p>
            </Link>
            <Link
              href="/blog/what-is-reverse-mortgage-complete-guide-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">What Is a Reverse Mortgage? →</span>
              <p className="text-sm text-gray-600 mt-1">Back to basics: how HECMs work</p>
            </Link>
            <Link
              href="/blog/reverse-mortgage-calculator-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">Reverse Mortgage Calculator 2026 →</span>
              <p className="text-sm text-gray-600 mt-1">Estimate your potential HECM proceeds</p>
            </Link>
            <Link
              href="/blog/reverse-mortgage-myths-debunked-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">Reverse Mortgage Myths Debunked →</span>
              <p className="text-sm text-gray-600 mt-1">Separating fact from fiction about HECMs</p>
            </Link>
            <Link
              href="/blog/reverse-mortgage-complete-guide-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">Reverse Mortgage Complete Guide 2026 →</span>
              <p className="text-sm text-gray-600 mt-1">Everything you need to know about reverse mortgages</p>
            </Link>
            <Link
              href="/blog/hecm-for-purchase-2026"
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-blue-600">HECM for Purchase Guide 2026 →</span>
              <p className="text-sm text-gray-600 mt-1">Using a reverse mortgage to buy your next home</p>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-900 text-white p-8 rounded-xl mt-12 not-prose">
          <h3 className="text-2xl font-bold mb-4">Ready to Explore Your Options?</h3>
          <p className="text-slate-200 mb-6">
            Before counseling, it helps to understand your potential loan amount and options.
            Let's discuss your situation and provide preliminary information to make your
            counseling session more productive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:+19498229662"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              Call (949) 822-9662
            </a>
          </div>
        </div>

      </section>

      {/* Author Bio */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
            MA
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Mo Abdel</h4>
            <p className="text-gray-600 text-sm">NMLS #1426884 | Lumin Lending, NMLS #2716106 | DRE #02291443 | Reverse Mortgage Specialist</p>
            <p className="text-gray-600 text-sm mt-2">
              Mo Abdel is a licensed mortgage broker specializing in reverse mortgages and
              home equity solutions for seniors in California and Washington. With access to 200+ wholesale lenders, he helps clients
              understand HECM requirements, connects them with HUD-approved counselors, and secures competitive reverse mortgage terms.
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
            Equal Housing Lender. This material is not from HUD or FHA and has not been approved by HUD or a government agency. This material is for informational purposes only and is not
            a commitment to lend. All loans are subject to credit approval and property appraisal.
            Borrowers must meet HECM eligibility requirements including age 62+, HUD-approved
            homeowner counseling, and property standards.
          </p>
        </div>
      </footer>
    </article>
  );
}
