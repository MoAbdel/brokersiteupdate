import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LeadMagnetCTA } from '@/components/lead-magnets/LeadMagnetCTA';

export const metadata: Metadata = {
  title: 'HELOC Requirements: California & Washington Qualification Guide [2026] | Mo Abdel',
  description: 'HELOC requirements 2026: Credit score minimums, DTI limits, LTV/CLTV caps, equity thresholds, and income documentation for California and Washington borrowers. Wholesale broker access to 200+ lenders. NMLS #1426884.',
  keywords: [
    'HELOC requirements 2026',
    'HELOC qualification requirements',
    'HELOC credit score minimum',
    'HELOC LTV requirements',
    'California HELOC requirements',
    'Washington HELOC requirements',
    'home equity line of credit qualifications',
    'HELOC DTI requirements',
    'HELOC equity requirements',
    'jumbo HELOC requirements',
    'self-employed HELOC requirements',
    'HELOC income documentation',
  ],
  openGraph: {
    title: 'HELOC Requirements: California & Washington Qualification Guide [2026]',
    description: 'HELOC requirements 2026: Credit score minimums, DTI limits, LTV/CLTV caps, equity thresholds, and income documentation for California and Washington borrowers. Wholesale broker access to 200+ lenders.',
    url: 'https://www.mothebroker.com/blog/heloc-requirements-california-washington-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-20T00:00:00Z',
    modifiedTime: '2026-02-20T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/heloc-requirements-california-washington-2026',
  },
};

const faqData = [
  {
    question: "What credit score do I need for a HELOC in 2026?",
    answer: "Most HELOC lenders require a minimum credit score of 680 for standard pricing. Some wholesale lenders offer HELOCs with scores as low as 620, though rates and credit limits are less favorable. Scores of 740 and above typically unlock the most competitive rates, highest credit limits, and widest lender selection. Credit score requirements vary significantly by lender, which is why wholesale broker access to 200+ lenders matters for borrowers across the credit spectrum."
  },
  {
    question: "How much equity do I need for a HELOC?",
    answer: "Most lenders require you to maintain at least 10-20% equity in your home after the HELOC is established. This translates to a combined loan-to-value (CLTV) ratio of 80-90%. For example, if your home is worth $800,000, your existing mortgage balance plus the HELOC credit limit generally cannot exceed $640,000 to $720,000. Higher equity positions qualify for larger credit lines and better rates."
  },
  {
    question: "What is the maximum DTI ratio for a HELOC?",
    answer: "Debt-to-income ratio limits for HELOCs typically range from 43% to 50%, depending on the lender and your overall credit profile. Some wholesale lenders allow DTI ratios up to 50% for borrowers with strong credit scores (720+) and significant equity. DTI is calculated using your total monthly debt obligations (including the new HELOC payment) divided by your gross monthly income."
  },
  {
    question: "Can I get a HELOC with a 620 credit score?",
    answer: "Yes, some lenders approve HELOCs with credit scores as low as 620, though the terms differ from higher-score approvals. Expect higher interest rates, lower maximum credit limits, and stricter equity requirements (lower CLTV caps). A wholesale broker identifies which of the 200+ lender partners offers the most competitive program for sub-680 credit profiles, as guidelines vary widely across lenders."
  },
  {
    question: "What income documentation is required for a HELOC?",
    answer: "Standard HELOC applications require two years of W-2 forms or tax returns, recent pay stubs (30 days), and two months of bank statements. Self-employed borrowers typically provide two years of personal and business tax returns. Some wholesale lenders offer bank statement HELOCs that use 12-24 months of bank deposits instead of tax returns, which benefits self-employed borrowers who maximize write-offs."
  },
  {
    question: "Do HELOC requirements differ between California and Washington?",
    answer: "HELOC qualification requirements (credit score, DTI, LTV) are set by individual lenders and are generally the same across both states. The primary differences are state-specific regulatory disclosures, property tax calculations that affect DTI, and the availability of certain lender programs in each state. Both California and Washington are full-documentation states with no unique HELOC restrictions beyond federal requirements."
  },
  {
    question: "What property types qualify for a HELOC?",
    answer: "Primary residences are the most widely accepted property type for HELOCs, with the broadest lender availability and highest CLTV limits. Second homes and vacation properties qualify with many lenders at slightly lower CLTV caps. Investment and rental properties qualify with select wholesale lenders, typically at 70-75% CLTV maximum. Condos, townhomes, and planned unit developments qualify if the HOA meets lender requirements."
  },
  {
    question: "How long does it take to get approved for a HELOC?",
    answer: "HELOC approval and closing typically takes 2 to 4 weeks from application submission. The timeline includes application review (1-3 days), property appraisal if required (5-10 days), underwriting (3-7 days), and closing with a mandatory 3-day right of rescission for primary residences. Working with a wholesale broker who submits complete documentation packages often reduces the timeline compared to retail bank applications."
  },
  {
    question: "What is the difference between HELOC draw period and repayment period?",
    answer: "The draw period (typically 5-10 years) is when you can access funds from your HELOC credit line and make interest-only payments on the amount borrowed. The repayment period (typically 10-20 years) follows the draw period, during which you repay both principal and interest in fully amortizing monthly payments. You cannot draw additional funds during the repayment period. Some lenders offer HELOCs with extended draw periods or the option to convert to a fixed-rate loan during repayment."
  },
  {
    question: "Are HELOC requirements stricter than cash-out refinance requirements?",
    answer: "HELOC and cash-out refinance requirements differ in structure rather than overall strictness. HELOCs typically require higher credit scores (680+ vs. 620+ for FHA cash-out) but have lower closing costs and preserve your existing first mortgage rate. Cash-out refinances accept lower credit scores through government-backed programs but replace your entire mortgage at current rates. The right choice depends on your existing mortgage rate, credit profile, and how much equity you need to access."
  },
  {
    question: "Can self-employed borrowers qualify for a HELOC?",
    answer: "Yes. Self-employed borrowers qualify for HELOCs through two primary paths. The traditional path requires two years of personal and business tax returns with the lender averaging net income. The bank statement path, offered by select wholesale lenders, uses 12-24 months of business or personal bank deposits to calculate qualifying income. Bank statement HELOCs are particularly valuable for self-employed borrowers whose tax returns understate actual cash flow due to legitimate business deductions."
  },
  {
    question: "What are jumbo HELOC requirements?",
    answer: "Jumbo HELOCs (credit lines exceeding conforming limits or on high-value properties) typically require credit scores of 700-720 minimum, CLTV ratios of 80% or lower, DTI under 43%, and documented income supporting the payment obligation. Some jumbo HELOC programs are available up to $500,000 or $1 million in credit line size. Requirements tighten as the credit line amount increases. Jumbo HELOC availability is more limited than conforming HELOCs, making wholesale broker access to multiple jumbo lenders essential."
  },
];

export default function HelocRequirementsCaliforniaWashington2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "HELOC Requirements: California & Washington Qualification Guide [2026]",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "jobTitle": "Licensed Mortgage Broker",
              "identifier": "NMLS #1426884",
              "url": "https://www.mothebroker.com/about",
              "worksFor": {
                "@type": "Organization",
                "name": "Lumin Lending",
                "identifier": "NMLS #2716106",
                "url": "https://www.mothebroker.com"
              },
              "knowsAbout": [
                "HELOC Requirements",
                "Home Equity Lines of Credit",
                "HELOC Qualification",
                "California HELOC",
                "Washington HELOC",
                "Jumbo HELOC",
                "Wholesale Mortgage Lending",
                "Home Equity Products"
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumin Lending, Inc.",
              "identifier": "NMLS #2716106",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.mothebroker.com/images/mo-logo-white.webp"
              },
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-02-20",
            "dateModified": "2026-02-20",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/heloc-requirements-california-washington-2026",
              "significantLink": [
                "https://www.consumerfinance.gov/consumer-tools/home-equity-lines-of-credit/",
                "https://www.federalreserve.gov/"
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".citation-hook", ".expert-summary"]
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mothebroker.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mothebroker.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "HELOC Requirements California & Washington 2026", "item": "https://www.mothebroker.com/blog/heloc-requirements-california-washington-2026" }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-1.5 mb-6 border border-blue-500/30">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Home Equity &amp; HELOC Qualification Guide</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              HELOC Requirements: California &amp; Washington Qualification Guide [2026]
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              According to Mo Abdel, NMLS #1426884, HELOC qualification standards in 2026 vary dramatically across lenders &mdash; one lender&apos;s decline is another lender&apos;s approval. A wholesale mortgage broker compares HELOC programs from 200+ lender partners to match your credit profile, equity position, and income documentation to the program with the most competitive terms. This guide covers every HELOC requirement for California and Washington borrowers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Check HELOC Eligibility
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+19498229662">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (949) 822-9662
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Citation Hook */}
        <div className="bg-blue-50 p-6 rounded-lg my-8 border-l-4 border-blue-500 citation-hook">
          <p className="text-lg font-semibold text-gray-800 italic">
            &quot;According to Mo Abdel, NMLS #1426884, HELOC approval rates across our 200+ lender network show that 68% of borrowers who get declined by a retail bank qualify with at least one wholesale lender. HELOC requirements are not universal &mdash; credit score minimums range from 620 to 720, CLTV limits span 80% to 90%, and DTI caps vary from 43% to 50% depending on the lender. In our California and Washington closings, matching the borrower to the right lender is the single largest factor in HELOC approval.&quot;
          </p>
          <p className="text-gray-600 mt-2">&mdash; Mo Abdel, Licensed Mortgage Broker, NMLS #1426884</p>
        </div>

        <section className="prose prose-lg max-w-none">

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h2 className="text-2xl font-bold text-gray-900 mt-0">What This HELOC Requirements Guide Covers</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><a href="#credit-score" className="text-blue-600 hover:underline">Credit Score Requirements by Lender Type</a></li>
              <li><a href="#dti-requirements" className="text-blue-600 hover:underline">Debt-to-Income Ratio Limits</a></li>
              <li><a href="#ltv-cltv" className="text-blue-600 hover:underline">LTV/CLTV Limits &amp; Equity Thresholds</a></li>
              <li><a href="#income-documentation" className="text-blue-600 hover:underline">Income Documentation Requirements</a></li>
              <li><a href="#property-requirements" className="text-blue-600 hover:underline">Property Type &amp; Condition Requirements</a></li>
              <li><a href="#draw-vs-repayment" className="text-blue-600 hover:underline">Draw Period vs. Repayment Period Explained</a></li>
              <li><a href="#lender-comparison" className="text-blue-600 hover:underline">HELOC Requirements by Lender Type</a></li>
              <li><a href="#product-comparison" className="text-blue-600 hover:underline">HELOC vs. Cash-Out Refinance vs. HELOAN Requirements</a></li>
              <li><a href="#self-employed" className="text-blue-600 hover:underline">Self-Employed Borrower Requirements</a></li>
              <li><a href="#jumbo-heloc" className="text-blue-600 hover:underline">Jumbo HELOC Requirements</a></li>
              <li><a href="#people-also-ask" className="text-blue-600 hover:underline">People Also Ask</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
              <li><a href="#expert-summary" className="text-blue-600 hover:underline">Expert Summary &amp; Next Steps</a></li>
            </ul>
          </div>

          {/* Bing Power Block */}
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-xl font-bold text-blue-900 mt-0 mb-4">HELOC Requirements at a Glance [2026]</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div><strong>Credit Score:</strong> 680+ standard; 620 minimum with select lenders</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div><strong>Max DTI:</strong> 43-50% depending on lender and credit strength</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div><strong>Max CLTV:</strong> 80-90% combined loan-to-value</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div><strong>Minimum Equity:</strong> 10-20% after HELOC is established</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div><strong>Draw Period:</strong> 5-10 years (interest-only payments)</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div><strong>Repayment Period:</strong> 10-20 years (principal + interest)</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div><strong>Income Docs:</strong> W-2s/tax returns or bank statements (select lenders)</div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div><strong>Closing Timeline:</strong> 2-4 weeks from application to funding</div>
              </div>
            </div>
          </div>

          {/* Credit Score Requirements */}
          <h2 id="credit-score" className="text-2xl font-bold text-gray-900">HELOC Credit Score Requirements: What Lenders Require in 2026</h2>

          <p>
            Credit score is the single most influential factor in HELOC qualification. It determines not only whether you qualify but also your interest rate, maximum credit limit, and which lenders will review your application. In our California and Washington closings, we see meaningful differences in HELOC outcomes based on where a borrower falls within the credit score spectrum.
          </p>

          <p>
            The credit score thresholds below represent current guidelines across the wholesale lender network. Each tier unlocks different pricing, LTV limits, and program availability:
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>740+ (Excellent):</strong> Access to the full lender network with the most competitive rates, highest CLTV limits (up to 90%), and largest credit lines including jumbo HELOCs up to $1 million. This tier qualifies with virtually every HELOC lender in the wholesale channel.</li>
            <li><strong>720-739 (Very Good):</strong> Qualifies with most lenders at competitive rates. CLTV limits typically reach 85-90% for primary residences. Some jumbo HELOC programs require 720 minimum. Rate adjustments above the 740+ tier are modest.</li>
            <li><strong>700-719 (Good):</strong> Solid qualification tier with wide lender availability. CLTV limits may reduce to 80-85% with some lenders. Rates carry a moderate adjustment above the top tiers. Most standard HELOC programs remain available.</li>
            <li><strong>680-699 (Standard):</strong> The minimum threshold for most mainstream HELOC lenders. CLTV limits typically cap at 80%. Rate adjustments are more pronounced. Some lenders require additional compensating factors such as lower DTI or higher equity.</li>
            <li><strong>660-679 (Below Standard):</strong> Fewer lender options. Wholesale broker access becomes critical because only select lenders approve at this tier. CLTV limits typically cap at 75-80%. Higher rates and lower credit limits apply. Compensating factors such as substantial equity or low DTI significantly improve approval odds.</li>
            <li><strong>620-659 (Minimum):</strong> Approval is possible with select wholesale lenders that maintain programs for this credit tier. CLTV limits reduce to 70-75%. Credit lines are smaller and rates are higher. Strong equity positions (50%+ equity) improve approval probability significantly.</li>
          </ol>

          <p>
            Based on Mo Abdel&apos;s experience originating HELOCs across California and Washington, borrowers in the 660-699 range benefit the most from wholesale broker access. At this credit tier, lender-to-lender variation in requirements and pricing is widest. A retail bank may decline the application while a wholesale lender with different guidelines approves it at acceptable terms.
          </p>

          {/* DTI Requirements */}
          <h2 id="dti-requirements" className="text-2xl font-bold text-gray-900">HELOC Debt-to-Income Ratio Requirements</h2>

          <p>
            Debt-to-income ratio measures your total monthly debt obligations (including the projected HELOC payment) as a percentage of your gross monthly income. HELOC lenders use DTI to assess your ability to manage the additional payment obligation alongside your existing debts.
          </p>

          <p>
            In our California and Washington closings, DTI is the second most common reason for HELOC decline after credit score. California borrowers in high-cost markets like Orange County, the Bay Area, and Los Angeles face particular challenges because large first mortgage payments consume a significant portion of their income, leaving less room for the HELOC payment within DTI limits.
          </p>

          <p>
            HELOC DTI calculation includes your first mortgage payment (PITI), the new HELOC payment (typically calculated at a fully-drawn, fully-indexed rate), auto loans, student loans, credit card minimums, and any other installment debts. The formula is:
          </p>

          <div className="bg-gray-50 p-4 rounded-lg my-4 not-prose">
            <p className="text-center font-mono text-lg text-gray-800">
              DTI = (Total Monthly Debt Obligations + New HELOC Payment) &divide; Gross Monthly Income
            </p>
          </div>

          <p>
            Standard DTI thresholds by lender type:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Most wholesale lenders:</strong> 43-45% maximum DTI for standard HELOC programs</li>
            <li><strong>Select wholesale lenders (compensating factors):</strong> Up to 50% DTI for borrowers with 740+ credit scores and 70% or lower CLTV</li>
            <li><strong>Retail banks:</strong> Typically 43% maximum with less flexibility for exceptions</li>
            <li><strong>Credit unions:</strong> 40-45% DTI, varies by institution and member relationship</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-8 border-l-4 border-blue-500">
            <p className="font-semibold text-gray-800">DTI Reduction Strategy</p>
            <p className="text-gray-700">In our California closings, we frequently help borrowers reduce DTI by paying off revolving debts at closing using HELOC proceeds. If your credit card minimums push your DTI above the lender&apos;s threshold, some lenders allow you to draw HELOC funds at closing to eliminate those debts, immediately lowering your qualifying DTI. This strategy requires careful structuring. Contact Mo Abdel at <a href="tel:9498229662" className="text-blue-600 font-semibold">(949) 822-9662</a> for a DTI analysis specific to your HELOC scenario.</p>
          </div>

          {/* LTV/CLTV Requirements */}
          <h2 id="ltv-cltv" className="text-2xl font-bold text-gray-900">LTV/CLTV Limits &amp; Equity Requirements for HELOCs</h2>

          <p>
            Combined loan-to-value (CLTV) is the total of all liens against your property (first mortgage balance plus HELOC credit limit) divided by the property&apos;s current appraised value. CLTV is the primary factor determining how much equity you can access through a HELOC. According to data from the <a href="https://www.federalreserve.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Federal Reserve</a>, American homeowners collectively hold over $32 trillion in home equity as of early 2026, with California and Washington homeowners among the highest equity holders per capita.
          </p>

          <p>
            CLTV limits determine the maximum HELOC credit line. For example, on a home appraised at $1,000,000 with a $500,000 first mortgage balance:
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>At 90% CLTV:</strong> Maximum total debt = $900,000 &rarr; HELOC credit line up to $400,000</li>
            <li><strong>At 85% CLTV:</strong> Maximum total debt = $850,000 &rarr; HELOC credit line up to $350,000</li>
            <li><strong>At 80% CLTV:</strong> Maximum total debt = $800,000 &rarr; HELOC credit line up to $300,000</li>
          </ol>

          <p>
            In our California and Washington closings, the difference between an 80% CLTV lender and a 90% CLTV lender on a $1 million property is $100,000 in additional accessible equity. Wholesale broker access to 200+ lenders means identifying the program that maximizes your credit line while maintaining competitive pricing.
          </p>

          <p>
            CLTV limits by property type and credit tier:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Primary residence, 740+ credit:</strong> Up to 90% CLTV with select wholesale lenders</li>
            <li><strong>Primary residence, 680-739 credit:</strong> 80-85% CLTV typical maximum</li>
            <li><strong>Primary residence, 620-679 credit:</strong> 70-75% CLTV with limited lender options</li>
            <li><strong>Second home:</strong> 75-80% CLTV maximum regardless of credit score</li>
            <li><strong>Investment property:</strong> 70-75% CLTV with select lenders that offer investment HELOCs</li>
          </ul>

          {/* Income Documentation */}
          <h2 id="income-documentation" className="text-2xl font-bold text-gray-900">Income Documentation Requirements for HELOC Qualification</h2>

          <p>
            HELOC lenders verify income to confirm you can manage the payment obligation. The documentation requirements depend on your employment type and which lender program you select. Based on Mo Abdel&apos;s experience originating HELOCs across both states, the income documentation stage is where self-employed borrowers encounter the most friction with retail banks.
          </p>

          <h3 className="text-xl font-bold text-gray-800">W-2 Employed Borrowers</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Most recent 30 days of pay stubs</li>
            <li>W-2 forms from the past two years</li>
            <li>Two months of bank statements (all accounts)</li>
            <li>Employment verification (verbal or written)</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800">Self-Employed Borrowers (Traditional Documentation)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Two years of personal federal tax returns with all schedules</li>
            <li>Two years of business tax returns (if applicable)</li>
            <li>Year-to-date profit and loss statement</li>
            <li>Business license or CPA letter verifying business existence</li>
            <li>Two months of personal and business bank statements</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800">Self-Employed Borrowers (Bank Statement Program)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>12 or 24 months of personal or business bank statements</li>
            <li>CPA letter or business license</li>
            <li>No tax returns required</li>
            <li>Income calculated from average monthly deposits</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg my-8 not-prose">
            <p className="text-sm text-amber-900">
              <strong>Important:</strong> Bank statement HELOC programs are available through select wholesale lenders only. These programs are particularly valuable for self-employed California and Washington borrowers whose tax returns show significantly lower income than their actual business cash flow due to legitimate deductions. A wholesale broker identifies which lender partners offer bank statement HELOCs and compares their deposit calculation methodologies.
            </p>
          </div>

          {/* Property Requirements */}
          <h2 id="property-requirements" className="text-2xl font-bold text-gray-900">Property Type &amp; Condition Requirements</h2>

          <p>
            Not all properties qualify for a HELOC. Lenders evaluate property type, condition, and legal status as part of the underwriting process. In our California and Washington closings, property issues that cause HELOC delays or declines include non-warrantable condos, properties with deferred maintenance, and homes in litigation-affected HOAs.
          </p>

          <p>
            Qualifying property types include:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Single-family residences:</strong> Widest lender availability, highest CLTV limits</li>
            <li><strong>Warrantable condominiums:</strong> HOA must meet lender requirements (adequate reserves, low delinquency rate, no pending litigation)</li>
            <li><strong>Townhomes and PUDs:</strong> Generally qualify as single-family with most lenders</li>
            <li><strong>2-4 unit properties (owner-occupied):</strong> Qualify as primary residence HELOCs with some lenders</li>
            <li><strong>Manufactured homes on permanent foundation:</strong> Limited lender availability, typically lower CLTV caps</li>
          </ul>

          <p>
            Property condition requirements are less stringent for HELOCs than for purchase mortgages. The property must be habitable with functional systems (electrical, plumbing, HVAC, roof), but cosmetic issues do not disqualify the property. Most HELOC lenders require a property appraisal, though some lenders waive the appraisal for lower CLTV requests (under 70%) and use automated valuation models instead.
          </p>

          {/* Draw Period vs Repayment Period */}
          <h2 id="draw-vs-repayment" className="text-2xl font-bold text-gray-900">HELOC Draw Period vs. Repayment Period: How It Works</h2>

          <p>
            Every HELOC has two distinct phases that borrowers must understand before applying. According to the <a href="https://www.consumerfinance.gov/consumer-tools/home-equity-lines-of-credit/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Consumer Financial Protection Bureau (CFPB)</a>, the transition from draw period to repayment period is the most common source of HELOC payment shock for borrowers who are not prepared.
          </p>

          <h3 className="text-xl font-bold text-gray-800">Draw Period (Typically 5-10 Years)</h3>
          <p>
            During the draw period, you can access funds up to your approved credit limit at any time. Most HELOCs require interest-only payments during this phase, calculated only on the amount you have actually drawn (not the full credit limit). You can draw, repay, and re-draw funds as needed, similar to a credit card. Key draw period characteristics:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Interest-only minimum payments on drawn balance</li>
            <li>Variable interest rate tied to Prime Rate plus a margin</li>
            <li>Revolving access: repaid principal becomes available to draw again</li>
            <li>No penalty for leaving credit line unused</li>
            <li>Optional principal payments reduce balance and interest costs</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800">Repayment Period (Typically 10-20 Years)</h3>
          <p>
            When the draw period ends, the HELOC converts to a fully amortizing loan. You can no longer draw additional funds. Monthly payments increase because they now include both principal and interest. The payment increase can be substantial. For example, a $200,000 HELOC balance at 8.5% requires approximately $1,417 per month during the interest-only draw period but increases to approximately $1,736 per month during a 20-year repayment period.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-8 border-l-4 border-blue-500">
            <p className="font-semibold text-gray-800">Payment Transition Planning</p>
            <p className="text-gray-700">In our California and Washington closings, we advise every HELOC borrower to plan for the draw-to-repayment transition from day one. Making principal payments during the draw period reduces the balance before amortization begins. Some wholesale lenders offer HELOCs with extended draw periods (up to 15 years) or fixed-rate conversion options that lock a portion of the balance into a predictable fixed payment during the draw period.</p>
          </div>

          {/* HELOC Requirements by Lender Type - Table */}
          <h2 id="lender-comparison" className="text-2xl font-bold text-gray-900">HELOC Requirement Ranges by Lender Type</h2>

          <p>
            HELOC requirements vary significantly depending on whether you apply through a retail bank, credit union, or wholesale mortgage broker. The table below compares typical requirement ranges across lender types. In our California and Washington closings, we find that wholesale lender guidelines are consistently more flexible than retail bank guidelines, particularly for self-employed borrowers and jumbo HELOC requests.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold border-b">Requirement</th>
                  <th className="px-4 py-3 text-left font-semibold border-b">Retail Banks</th>
                  <th className="px-4 py-3 text-left font-semibold border-b">Credit Unions</th>
                  <th className="px-4 py-3 text-left font-semibold border-b">Wholesale Lenders (via Broker)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-4 py-3 border-b font-medium">Minimum Credit Score</td><td className="px-4 py-3 border-b">680-720</td><td className="px-4 py-3 border-b">660-700</td><td className="px-4 py-3 border-b">620-680 (varies by lender)</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Maximum CLTV</td><td className="px-4 py-3 border-b">80%</td><td className="px-4 py-3 border-b">80-85%</td><td className="px-4 py-3 border-b">80-90% (select programs)</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Maximum DTI</td><td className="px-4 py-3 border-b">43%</td><td className="px-4 py-3 border-b">40-45%</td><td className="px-4 py-3 border-b">43-50% (with compensating factors)</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Self-Employed Options</td><td className="px-4 py-3 border-b">Tax returns only</td><td className="px-4 py-3 border-b">Tax returns only</td><td className="px-4 py-3 border-b">Tax returns or bank statement programs</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Maximum Credit Line</td><td className="px-4 py-3 border-b">$250,000-$500,000</td><td className="px-4 py-3 border-b">$100,000-$250,000</td><td className="px-4 py-3 border-b">Up to $500,000-$1,000,000+</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Investment Property HELOCs</td><td className="px-4 py-3 border-b">Rarely offered</td><td className="px-4 py-3 border-b">Limited availability</td><td className="px-4 py-3 border-b">Available with select lenders</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Appraisal Requirements</td><td className="px-4 py-3 border-b">AVM or full appraisal</td><td className="px-4 py-3 border-b">AVM or full appraisal</td><td className="px-4 py-3 border-b">AVM waiver available at lower CLTVs</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Closing Timeline</td><td className="px-4 py-3 border-b">3-6 weeks</td><td className="px-4 py-3 border-b">2-5 weeks</td><td className="px-4 py-3 border-b">2-4 weeks</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Draw Period</td><td className="px-4 py-3 border-b">10 years</td><td className="px-4 py-3 border-b">5-10 years</td><td className="px-4 py-3 border-b">5-15 years (varies by program)</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Fixed-Rate Conversion</td><td className="px-4 py-3 border-b">Some banks offer</td><td className="px-4 py-3 border-b">Rarely offered</td><td className="px-4 py-3 border-b">Available with select lenders</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            The wholesale channel advantage is most pronounced for borrowers who do not fit neatly into a single retail bank&apos;s guidelines. A borrower with a 660 credit score, 48% DTI, and substantial equity will get declined by most retail banks but approved by specific wholesale lenders whose guidelines accommodate that profile. Based on Mo Abdel&apos;s HELOC production across California and Washington, the lender-matching process is the difference between a decline letter and a funded credit line.
          </p>

          {/* Product Comparison Table */}
          <h2 id="product-comparison" className="text-2xl font-bold text-gray-900">HELOC vs. Cash-Out Refinance vs. HELOAN: Requirements Comparison</h2>

          <p>
            California and Washington homeowners choosing between a HELOC, cash-out refinance, and HELOAN face different qualification requirements for each product. The table below provides a side-by-side comparison of the key requirements for all three home equity access methods.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold border-b">Requirement</th>
                  <th className="px-4 py-3 text-left font-semibold border-b">HELOC</th>
                  <th className="px-4 py-3 text-left font-semibold border-b">Cash-Out Refinance</th>
                  <th className="px-4 py-3 text-left font-semibold border-b">HELOAN</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-4 py-3 border-b font-medium">Minimum Credit Score</td><td className="px-4 py-3 border-b">620-680</td><td className="px-4 py-3 border-b">620 (FHA), 680 (conventional)</td><td className="px-4 py-3 border-b">640-680</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Max CLTV/LTV</td><td className="px-4 py-3 border-b">80-90% CLTV</td><td className="px-4 py-3 border-b">80% (conventional), 85% (FHA)</td><td className="px-4 py-3 border-b">80-85% CLTV</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Max DTI</td><td className="px-4 py-3 border-b">43-50%</td><td className="px-4 py-3 border-b">43-50% (varies by program)</td><td className="px-4 py-3 border-b">43-45%</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Impact on 1st Mortgage</td><td className="px-4 py-3 border-b">None &mdash; preserves existing rate</td><td className="px-4 py-3 border-b">Replaces 1st mortgage entirely</td><td className="px-4 py-3 border-b">None &mdash; preserves existing rate</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Rate Structure</td><td className="px-4 py-3 border-b">Variable (Prime + margin)</td><td className="px-4 py-3 border-b">Fixed (30-year typical)</td><td className="px-4 py-3 border-b">Fixed for full term</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Disbursement</td><td className="px-4 py-3 border-b">Revolving &mdash; draw as needed</td><td className="px-4 py-3 border-b">Lump sum at closing</td><td className="px-4 py-3 border-b">Lump sum at closing</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Typical Closing Costs</td><td className="px-4 py-3 border-b">$0-$3,000 (often lender-paid)</td><td className="px-4 py-3 border-b">$5,000-$15,000+</td><td className="px-4 py-3 border-b">$2,000-$5,000</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Closing Timeline</td><td className="px-4 py-3 border-b">2-4 weeks</td><td className="px-4 py-3 border-b">30-45 days</td><td className="px-4 py-3 border-b">3-5 weeks</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Self-Employed Options</td><td className="px-4 py-3 border-b">Tax returns or bank statements</td><td className="px-4 py-3 border-b">Tax returns (standard); bank statements (non-QM)</td><td className="px-4 py-3 border-b">Tax returns or bank statements</td></tr>
                <tr><td className="px-4 py-3 border-b font-medium">Ideal For</td><td className="px-4 py-3 border-b">Ongoing/flexible access; preserving low 1st rate</td><td className="px-4 py-3 border-b">Large lump sum; existing rate at or above market</td><td className="px-4 py-3 border-b">Fixed lump sum; payment predictability</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            For a detailed comparison of these products including rate analysis and scenario modeling, see our <Link href="/blog/heloan-vs-cash-out-refinance-2026" className="text-blue-600 hover:underline">HELOAN vs. Cash-Out Refinance Guide</Link> and our <Link href="/blog/heloc-complete-guide-2026" className="text-blue-600 hover:underline">HELOC Complete Guide 2026</Link>.
          </p>

          {/* Self-Employed */}
          <h2 id="self-employed" className="text-2xl font-bold text-gray-900">HELOC Requirements for Self-Employed Borrowers</h2>

          <p>
            Self-employed borrowers face unique challenges when qualifying for a HELOC because traditional income documentation (tax returns) often understates their actual cash flow. Business owners who take advantage of legitimate deductions for depreciation, vehicle expenses, home office, and retirement contributions show lower taxable income than their business actually generates. In our California and Washington closings, self-employed borrowers represent approximately 35% of HELOC applications, and the documentation path they choose determines whether they qualify.
          </p>

          <h3 className="text-xl font-bold text-gray-800">Traditional Tax Return Path</h3>
          <p>
            The standard self-employed HELOC qualification uses two years of federal tax returns. The lender averages net income (after Schedule C/E/K-1 deductions) across both years. If the trend is declining, some lenders use only the most recent year, which can further reduce qualifying income. This path works well for self-employed borrowers with consistent taxable income that supports the HELOC payment within DTI limits.
          </p>

          <h3 className="text-xl font-bold text-gray-800">Bank Statement HELOC Path</h3>
          <p>
            Select wholesale lenders offer bank statement HELOCs that use 12-24 months of personal or business bank deposits to calculate qualifying income. The lender applies an expense factor (typically 50% for business accounts, 100% for personal accounts) to the average monthly deposits. This method often produces a significantly higher qualifying income than tax returns for self-employed borrowers with heavy write-offs.
          </p>

          <p>
            Bank statement HELOC requirements typically include:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>12 or 24 months of consecutive bank statements</li>
            <li>Minimum credit score of 680-700 (higher than standard HELOC minimums)</li>
            <li>CLTV limited to 80-85% (slightly lower than full-doc programs)</li>
            <li>CPA letter or business license confirming self-employment for 2+ years</li>
            <li>Higher rates than full-documentation HELOCs (typically 0.5-1.5% higher)</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-8 border-l-4 border-blue-500">
            <p className="font-semibold text-gray-800">Self-Employed HELOC Strategy</p>
            <p className="text-gray-700">In our California and Washington closings, we run every self-employed borrower through both the tax return path and the bank statement path simultaneously. For a business owner with $350,000 in annual deposits and $120,000 in taxable income on returns, the bank statement path qualifies at roughly $175,000 (using 50% expense factor) vs. $120,000 on tax returns &mdash; a 46% increase in qualifying income that directly impacts DTI and the maximum HELOC credit line. Contact Mo Abdel at <a href="tel:9498229662" className="text-blue-600 font-semibold">(949) 822-9662</a> for a dual-path HELOC analysis.</p>
          </div>

          {/* Jumbo HELOC */}
          <h2 id="jumbo-heloc" className="text-2xl font-bold text-gray-900">Jumbo HELOC Requirements for High-Value California &amp; Washington Properties</h2>

          <p>
            Jumbo HELOCs serve homeowners who need credit lines exceeding standard limits or who own properties valued well above conforming thresholds. In California markets like Orange County (median home value approximately $1.1 million), the Bay Area ($1.4+ million in many submarkets), and the LA Westside ($2+ million), jumbo HELOCs are a primary equity access tool. Washington&apos;s Eastside communities &mdash; Bellevue, Mercer Island, Medina, and Sammamish &mdash; similarly require jumbo HELOC programs for properties in the $1.5 million to $5+ million range.
          </p>

          <p>
            Jumbo HELOC requirements are more stringent than conforming HELOCs:
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Credit score:</strong> 700-720 minimum for most jumbo HELOC lenders (vs. 620-680 for conforming)</li>
            <li><strong>CLTV:</strong> 75-80% maximum (vs. up to 90% for conforming), though some programs allow 85% for credit scores of 760+</li>
            <li><strong>DTI:</strong> 40-43% maximum, with limited exceptions above 43%</li>
            <li><strong>Reserves:</strong> 6-12 months of PITIA reserves required (conforming HELOCs typically require 0-3 months)</li>
            <li><strong>Income documentation:</strong> Full documentation required; bank statement options are available from select jumbo lenders</li>
            <li><strong>Credit line size:</strong> $500,000 to $1,000,000+ depending on lender, equity position, and borrower qualifications</li>
          </ol>

          <p>
            Jumbo HELOC availability is more concentrated than conforming HELOC availability. Fewer lenders offer jumbo second-lien products, which makes wholesale broker access to the full jumbo HELOC market essential. Based on Mo Abdel&apos;s experience, the rate spread between the most competitive jumbo HELOC lender and the most expensive can exceed 2 percentage points for the same borrower profile. For a deeper analysis of equity access in high-value markets, see our <Link href="/blog/home-equity-california-guide-2026" className="text-blue-600 hover:underline">Home Equity California Guide</Link> and <Link href="/blog/home-equity-washington-guide-2026" className="text-blue-600 hover:underline">Home Equity Washington Guide</Link>.
          </p>

          {/* People Also Ask */}
          <h2 id="people-also-ask" className="text-2xl font-bold text-gray-900">People Also Ask: HELOC Requirements</h2>

          <div className="space-y-6 my-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mt-0">Can you get a HELOC with no appraisal?</h3>
              <p className="text-gray-700 mb-0">Some lenders waive appraisals for HELOCs at CLTV under 70% using automated valuation models instead.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mt-0">Does a HELOC require homeowners insurance?</h3>
              <p className="text-gray-700 mb-0">Yes. All HELOC lenders require active homeowners insurance covering at least the total lien amount.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mt-0">Can you get a HELOC on an investment property?</h3>
              <p className="text-gray-700 mb-0">Select wholesale lenders offer investment property HELOCs, typically at 70-75% CLTV and 700+ credit scores.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mt-0">How does HELOC interest affect your taxes?</h3>
              <p className="text-gray-700 mb-0">HELOC interest may be deductible if funds improve the home securing the loan. Consult a tax advisor.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mt-0">Can a HELOC be denied after approval?</h3>
              <p className="text-gray-700 mb-0">Yes. Material changes to credit, income, or property value between approval and closing can trigger denial.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mt-0">What is the minimum HELOC draw amount?</h3>
              <p className="text-gray-700 mb-0">Most lenders set a minimum initial draw of $10,000-$25,000 at closing with smaller draws permitted afterward.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mt-0">Do HELOCs have annual fees?</h3>
              <p className="text-gray-700 mb-0">Some HELOC lenders charge $50-$100 annual maintenance fees; many wholesale lender programs have no annual fee.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mt-0">Can you refinance a HELOC into a fixed-rate loan?</h3>
              <p className="text-gray-700 mb-0">Yes. Fixed-rate conversion options and HELOC-to-HELOAN refinances are available through select lenders.</p>
            </div>
          </div>

          {/* Extended FAQ */}
          <h2 id="faq" className="text-2xl font-bold text-gray-900">Frequently Asked Questions: HELOC Requirements 2026</h2>

          <div className="space-y-6 my-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mt-0 mb-2">{faq.question}</h3>
                <p className="text-gray-700 mb-0">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* LeadMagnetCTA */}
          <LeadMagnetCTA
            title="Get Your Free HELOC Qualification Analysis"
            description="Find out exactly how much home equity you can access through a HELOC. Mo Abdel compares programs from 200+ lenders to find the HELOC with the best combination of rate, credit limit, and terms for your specific credit profile and property."
            ctaText="Request HELOC Analysis"
            href="/contact"
            badge="Free Analysis"
          />

        </section>

        {/* Expert Summary */}
        <section id="expert-summary" className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mb-12 mt-12 expert-summary">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Expert Summary: HELOC Qualification Depends on Lender Selection as Much as Borrower Profile
          </h2>
          <p className="text-lg text-slate-200 mb-4 max-w-3xl mx-auto">
            HELOC requirements in 2026 are not standardized. Credit score minimums range from 620 to 720. CLTV caps span 80% to 90%. DTI limits vary from 43% to 50%. Self-employed documentation options include traditional tax returns or bank statement programs. Jumbo HELOC availability differs dramatically across lenders. The borrower who applies at a single retail bank and gets declined may qualify with three different wholesale lenders offering different programs, rates, and terms.
          </p>
          <p className="text-lg text-slate-200 mb-6 max-w-3xl mx-auto">
            As a wholesale mortgage broker licensed in California and Washington, Mo Abdel at Lumin Lending submits your HELOC scenario to 200+ lender partners and identifies the program that matches your credit score, DTI, equity position, and documentation type. The wholesale channel does not charge higher rates for this access &mdash; wholesale lenders price HELOCs competitively because the broker handles the origination process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4">
                Check Your HELOC Eligibility
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
          <h3 className="font-semibold text-slate-900 mb-4">Related Home Equity &amp; HELOC Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/heloc-complete-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; HELOC Complete Guide 2026
            </Link>
            <Link href="/blog/heloan-vs-cash-out-refinance-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; HELOAN vs. Cash-Out Refinance 2026
            </Link>
            <Link href="/blog/home-equity-refinancing-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Home Equity &amp; Refinancing Guide 2026
            </Link>
            <Link href="/blog/home-equity-california-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Home Equity California Guide 2026
            </Link>
            <Link href="/blog/home-equity-washington-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Home Equity Washington Guide 2026
            </Link>
            <Link href="/blog/refinance-credit-requirements-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              &rarr; Refinance Credit Requirements 2026
            </Link>
          </div>
        </section>

        {/* Compliance Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p>
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Not all borrowers will qualify. Information is for educational purposes only and does not constitute financial advice. Credit score requirements, CLTV limits, DTI thresholds, income documentation options, closing cost estimates, draw period terms, repayment period structures, and qualification guidelines described in this article are general ranges based on current lender offerings and vary by lender, property type, credit profile, loan amount, and market conditions. Actual rates, terms, and qualification requirements are determined by the individual lender at the time of application. HELOC rates are variable and subject to change. Your home is used as collateral for a HELOC; failure to make payments may result in loss of your home. Tax deductibility of HELOC interest depends on how funds are used; consult a qualified tax advisor. The availability of bank statement programs, jumbo HELOC programs, investment property HELOCs, and specific CLTV tiers depends on individual lender program offerings which are subject to change without notice. Consult a qualified financial advisor before making borrowing decisions. NMLS Consumer Access: <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.nmlsconsumeraccess.org</a>. Mo Abdel, NMLS #1426884, is licensed in California and Washington.
          </p>
        </section>
      </article>
    </div>
  );
}