import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Home, DollarSign, Shield, Users, AlertCircle, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'First-Time Homebuyer Guide Orange County 2026: Programs, Down Payment & Tips | Mo Abdel',
  description: 'First-time homebuyer Orange County 2026: FHA loans with 3.5% down, down payment assistance programs, credit requirements. Wholesale broker access. NMLS #1426884.',
  keywords: ['first time homebuyer Orange County', 'Orange County first time buyer programs', 'FHA loans Orange County 2026', 'down payment assistance Orange County'],
  openGraph: {
    title: 'First-Time Homebuyer Guide Orange County 2026: Complete Guide to Buying Your First Home',
    description: 'First-time homebuyer Orange County 2026: FHA loans, down payment assistance, credit tips. Access wholesale rates from 100+ lenders.',
    url: 'https://mothebroker.com/blog/first-time-homebuyer-guide-orange-county-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-01-18T00:00:00Z',
    modifiedTime: '2026-01-18T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
};

const faqData = [
  {
    question: "How much do first-time homebuyers need for a down payment in Orange County?",
    answer: "First-time buyers in Orange County can purchase with as little as 3% down (conventional), 3.5% down (FHA), or 0% down (VA/USDA if eligible). On a $900,000 home, that's $27,000-$31,500 minimum. Down payment assistance programs may reduce this further."
  },
  {
    question: "What credit score do I need to buy my first home in Orange County?",
    answer: "Minimum credit scores for first-time buyers: 620 for conventional loans with 3% down, 580 for FHA loans with 3.5% down, or 500-579 for FHA with 10% down. Higher scores (700+) qualify for better rates and lower mortgage insurance costs."
  },
  {
    question: "What are the best first-time homebuyer programs in Orange County 2026?",
    answer: "Top programs include: CalHFA MyHome Assistance (up to 3.5% of purchase price), FHA loans (3.5% down, flexible credit), Fannie Mae HomeReady (3% down, income-based), and Freddie Mac Home Possible (3% down). VA loans offer 0% down for eligible veterans."
  },
  {
    question: "How much house can a first-time buyer afford in Orange County?",
    answer: "Affordability depends on income, debts, and down payment. Generally, your monthly housing payment should not exceed 28-31% of gross monthly income. With $150,000 household income and good credit, first-time buyers may qualify for homes in the $700,000-$900,000 range."
  },
  {
    question: "Is it better to use FHA or conventional for a first-time buyer?",
    answer: "FHA is better for buyers with lower credit scores (580-619) or limited savings. Conventional is better for buyers with 620+ credit and at least 5% down, as it has lower mortgage insurance costs and no upfront MIP. A wholesale broker can compare both options for your situation."
  },
  {
    question: "What are closing costs for first-time buyers in Orange County?",
    answer: "Closing costs typically run 2-5% of the purchase price in Orange County. On a $900,000 home, expect $18,000-$45,000. Costs include appraisal, title insurance, escrow fees, and lender fees. Sellers can contribute up to 3-6% depending on loan type."
  },
  {
    question: "How long does it take to buy a first home in Orange County?",
    answer: "The typical timeline is 45-60 days from accepted offer to closing. This includes: 30-45 days for loan processing, 7-14 days for appraisal, and 3-5 days for final underwriting. Pre-approval speeds up the process significantly."
  }
];

export default function FirstTimeHomebuyerGuideOrangeCounty2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "First-Time Homebuyer Guide Orange County 2026: Programs, Down Payment & Tips",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["Mortgages", "First-Time Homebuyers", "FHA Loans", "Down Payment Assistance", "Orange County Real Estate"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mo Abdel - Wholesale Mortgage Broker",
              "url": "https://mothebroker.com"
            },
            "datePublished": "2026-01-18",
            "dateModified": "2026-01-18",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://mothebroker.com/blog/first-time-homebuyer-guide-orange-county-2026",
              "significantLink": [
                "https://www.consumerfinance.gov/",
                "https://www.hud.gov/",
                "https://www.calhfa.ca.gov/"
              ]
            },
            "copyrightHolder": {
              "@type": "Organization",
              "name": "Mo Abdel - Wholesale Mortgage Broker",
              "url": "https://mothebroker.com"
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
            "@type": "HowTo",
            "name": "How to Buy Your First Home in Orange County",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Check Your Credit Score",
                "text": "Review your credit report and score. Minimum 580 for FHA, 620 for conventional. Address any errors or delinquencies."
              },
              {
                "@type": "HowToStep",
                "name": "Calculate Your Budget",
                "text": "Determine how much you can afford based on income, debts, and down payment savings. Use the 28/36 rule as a guide."
              },
              {
                "@type": "HowToStep",
                "name": "Get Pre-Approved",
                "text": "Submit documents to a wholesale mortgage broker for pre-approval. This shows sellers you're a serious, qualified buyer."
              },
              {
                "@type": "HowToStep",
                "name": "Find Your Home",
                "text": "Work with a real estate agent to find homes in your price range and preferred Orange County neighborhoods."
              },
              {
                "@type": "HowToStep",
                "name": "Make an Offer and Close",
                "text": "Submit your offer with pre-approval letter. Once accepted, complete inspections, appraisal, and final underwriting."
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-1.5 mb-6 border border-blue-500/30">
              <span className="text-blue-400 text-sm font-medium">First-Time Homebuyer Guide</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              First-Time Homebuyer Guide Orange County 2026: Your Complete Roadmap to Homeownership
            </h1>

            {/* Fact-dense opening - First 150 chars optimized for ChatGPT extraction */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              First-time homebuyers in Orange County can purchase with as little as 3% down ($27,000 on a $900,000 home) using conventional loans, or 3.5% down with FHA. Down payment assistance programs like CalHFA MyHome may cover up to 3.5% of the purchase price.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Pre-Approved Today
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

        {/* Reality Check Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Can First-Time Buyers Still Afford Orange County in 2026?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Yes—but it requires strategy. Orange County's median home price sits around $1.1M, but first-time buyer options exist in the $600,000-$900,000 range in cities like Mission Viejo, Lake Forest, and Anaheim Hills. As a wholesale broker, I've helped hundreds of first-time buyers access wholesale rates and down payment programs that make Orange County homeownership achievable.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              First-Time Buyer Reality Check 2026
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-600 mb-2"><strong>Entry-Level Price Range:</strong></p>
                <p className="text-lg font-semibold text-slate-900">$650,000 - $950,000</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2"><strong>Minimum Down (FHA 3.5%):</strong></p>
                <p className="text-lg font-semibold text-slate-900">$22,750 - $33,250</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2"><strong>Household Income Needed:</strong></p>
                <p className="text-lg font-semibold text-slate-900">$120,000 - $180,000</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2"><strong>2026 Conforming Limit:</strong></p>
                <p className="text-lg font-semibold text-slate-900">$1,266,300</p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Loan Programs for First-Time Buyers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Are the Best First-Time Homebuyer Loan Programs in Orange County?
          </h2>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">FHA Loans (Best for Lower Credit/Savings)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                FHA loans are the most popular first-time buyer program in Orange County. Backed by the Federal Housing Administration, they offer flexible qualification with low down payments.
              </p>
              <div className="bg-slate-50 rounded-lg p-4">
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• <strong>Down Payment:</strong> 3.5% minimum (580+ credit) or 10% (500-579 credit)</li>
                  <li>• <strong>Credit Score:</strong> 580+ recommended, 500 minimum</li>
                  <li>• <strong>DTI Ratio:</strong> Up to 43% (or higher with compensating factors)</li>
                  <li>• <strong>Mortgage Insurance:</strong> Upfront MIP (1.75%) + annual MIP (0.55%)</li>
                  <li>• <strong>Loan Limit:</strong> $1,266,300 in Orange County (2026)</li>
                </ul>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold text-slate-900">Conventional 97 / HomeReady / Home Possible</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Conventional loans with just 3% down are ideal for first-time buyers with stronger credit. Lower long-term costs than FHA for qualified borrowers.
              </p>
              <div className="bg-slate-50 rounded-lg p-4">
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• <strong>Down Payment:</strong> 3% minimum</li>
                  <li>• <strong>Credit Score:</strong> 620+ minimum, 680+ for best rates</li>
                  <li>• <strong>DTI Ratio:</strong> Up to 45%</li>
                  <li>• <strong>PMI:</strong> Cancellable at 80% LTV (unlike FHA MIP)</li>
                  <li>• <strong>Income Limits:</strong> HomeReady/Home Possible have area median income caps</li>
                </ul>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold text-slate-900">VA Loans (For Veterans & Active Duty)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                If you're a veteran, active duty, or eligible surviving spouse, VA loans offer the best terms available—no down payment, no PMI.
              </p>
              <div className="bg-slate-50 rounded-lg p-4">
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• <strong>Down Payment:</strong> 0% required</li>
                  <li>• <strong>Credit Score:</strong> Typically 620+ (lender-dependent)</li>
                  <li>• <strong>PMI:</strong> None—VA funding fee instead (can be financed)</li>
                  <li>• <strong>Loan Limit:</strong> No limit with full entitlement</li>
                  <li>• <strong>Rates:</strong> Often lower than conventional</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Down Payment Assistance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Down Payment Assistance Programs Are Available in Orange County?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            Multiple programs help first-time buyers cover down payments and closing costs. These can be combined with FHA or conventional loans to reduce out-of-pocket costs significantly.
          </p>

          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">CalHFA MyHome Assistance Program</h3>
              <p className="text-slate-600 mb-3">Deferred-payment junior loan up to 3.5% of the purchase price for down payment or closing costs.</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• First-time buyers (haven't owned in 3+ years)</li>
                <li>• Income limits apply (varies by county)</li>
                <li>• Must complete homebuyer education</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">CalHFA Zero Interest Program (ZIP)</h3>
              <p className="text-slate-600 mb-3">Zero-interest loan up to 3% for closing costs, repayable when you sell or refinance.</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Can be combined with MyHome</li>
                <li>• No monthly payments required</li>
                <li>• Income and purchase price limits apply</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Chenoa Fund</h3>
              <p className="text-slate-600 mb-3">3.5% assistance available as a forgivable or repayable second mortgage.</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Works with FHA loans</li>
                <li>• Forgivable option after 36 on-time payments</li>
                <li>• No first-time buyer requirement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do I Buy My First Home in Orange County? Step-by-Step Guide
          </h2>

          <div className="bg-slate-50 rounded-xl p-6">
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Check Your Credit Score and Report</h4>
                  <p className="text-slate-600 mb-2">Pull your free credit reports from AnnualCreditReport.com. Dispute any errors. Pay down credit card balances to below 30% utilization.</p>
                  <p className="text-sm text-green-700 font-medium">Target: 620+ for conventional, 580+ for FHA</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Calculate Your Budget Using the 28/36 Rule</h4>
                  <p className="text-slate-600 mb-2">Housing costs should not exceed 28% of gross income. Total debts (including housing) should stay below 36%.</p>
                  <p className="text-sm text-green-700 font-medium">Example: $150,000 income = $3,500/month max housing payment</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Save for Down Payment and Reserves</h4>
                  <p className="text-slate-600 mb-2">Aim for at least 3.5% down plus 2-3 months of reserves. Gift funds from family are allowed for most loan programs.</p>
                  <p className="text-sm text-green-700 font-medium">Target: $30,000-$50,000 for entry-level homes</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Get Pre-Approved by a Wholesale Mortgage Broker</h4>
                  <p className="text-slate-600 mb-2">Submit W-2s, pay stubs, bank statements, and tax returns. A wholesale broker shops 100+ lenders to find your best rate.</p>
                  <p className="text-sm text-green-700 font-medium">Pre-approval letters make your offers competitive</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold shrink-0">5</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Find a Real Estate Agent and Start Searching</h4>
                  <p className="text-slate-600 mb-2">Work with an agent who knows first-time buyer programs. Focus on cities with entry-level inventory: Mission Viejo, Lake Forest, Aliso Viejo.</p>
                  <p className="text-sm text-green-700 font-medium">Be ready to act fast in competitive markets</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold shrink-0">6</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Make an Offer and Complete Due Diligence</h4>
                  <p className="text-slate-600 mb-2">Submit offer with pre-approval letter. After acceptance: home inspection, appraisal, and title search.</p>
                  <p className="text-sm text-green-700 font-medium">Inspection contingencies protect you from hidden issues</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold shrink-0">7</span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Final Underwriting and Closing</h4>
                  <p className="text-slate-600 mb-2">Underwriter reviews all documents. Once cleared, you'll receive closing disclosure 3 days before signing. Bring certified check or wire funds.</p>
                  <p className="text-sm text-green-700 font-medium">Typical timeline: 30-45 days from offer to keys</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Mistakes to Avoid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Mistakes Should First-Time Homebuyers Avoid?
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Making Large Purchases Before Closing</h4>
                <p className="text-slate-600">Don't buy a car, furniture, or open new credit cards. Any change to your credit profile can derail your loan approval.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Changing Jobs During the Process</h4>
                <p className="text-slate-600">Lenders verify employment at closing. A job change can restart underwriting or disqualify you entirely.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Skipping Pre-Approval</h4>
                <p className="text-slate-600">Pre-qualification isn't pre-approval. Get fully underwritten pre-approval to compete with cash offers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Draining Your Savings</h4>
                <p className="text-slate-600">Keep 2-3 months of reserves after closing. Unexpected repairs and moving costs add up quickly.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Not Shopping Mortgage Rates</h4>
                <p className="text-slate-600">A wholesale broker compares 100+ lenders automatically. Going direct to one bank means you're accepting their markup.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Cities for First-Time Buyers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Which Orange County Cities Are Best for First-Time Homebuyers in 2026?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Most Affordable Entry Points</h3>
              <ul className="text-slate-600 space-y-2">
                <li><strong>Lake Forest:</strong> Condos from $550K, townhomes from $700K</li>
                <li><strong>Mission Viejo:</strong> Family homes from $850K, top schools</li>
                <li><strong>Aliso Viejo:</strong> Newer construction, $700K-$900K range</li>
                <li><strong>Rancho Santa Margarita:</strong> Master-planned, $750K-$950K</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Best Value for Families</h3>
              <ul className="text-slate-600 space-y-2">
                <li><strong>Ladera Ranch:</strong> Newer homes, excellent schools, $950K+</li>
                <li><strong>Tustin:</strong> Central location, $800K-$1M range</li>
                <li><strong>Yorba Linda:</strong> Larger lots, $900K-$1.1M</li>
                <li><strong>San Juan Capistrano:</strong> Historic charm, $750K-$950K</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions About Buying Your First Home in Orange County
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

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Buy Your First Home in Orange County?
          </h2>
          <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
            Get pre-approved with access to 100+ wholesale lenders. I'll help you navigate first-time buyer programs and find the best rate for your situation. Free consultation, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4">
                Start Pre-Approval Process
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
          <h3 className="font-semibold text-slate-900 mb-4">Related First-Time Buyer Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/fha-loans-orange-county-2026" className="text-green-600 hover:text-green-700 hover:underline">
              → FHA Loans in Orange County 2026
            </Link>
            <Link href="/blog/mission-viejo-mortgage-guide-2026" className="text-green-600 hover:text-green-700 hover:underline">
              → Mission Viejo Mortgage Guide
            </Link>
            <Link href="/resources/down-payment-assistance" className="text-green-600 hover:text-green-700 hover:underline">
              → Down Payment Assistance Programs
            </Link>
            <Link href="/calculator" className="text-green-600 hover:text-green-700 hover:underline">
              → Mortgage Affordability Calculator
            </Link>
            <Link href="/blog/wholesale-vs-retail-mortgage-brokers-2026" className="text-green-600 hover:text-green-700 hover:underline">
              → Why Use a Wholesale Broker?
            </Link>
            <Link href="/resources/credit-repair" className="text-green-600 hover:text-green-700 hover:underline">
              → Credit Score Improvement Guide
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p>
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial advice. Contact a licensed loan officer for personalized guidance. Down payment assistance program availability and terms subject to change.
          </p>
        </section>
      </article>
    </div>
  );
}
