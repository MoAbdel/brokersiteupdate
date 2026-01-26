import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Home, DollarSign, Shield, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Mission Viejo Mortgage Broker 2025: Wholesale Rates from 100+ Lenders | Mo Abdel',
  description: 'Mission Viejo mortgage broker rates 2025: Access 50+ wholesale lenders for rates below retail banks. Jumbo, FHA, VA loans available. NMLS #1426884.',
  keywords: ['Mission Viejo mortgage broker', 'Mission Viejo home loans', 'Mission Viejo mortgage rates 2025', 'wholesale mortgage Mission Viejo'],
  openGraph: {
    title: 'Mission Viejo Mortgage Broker 2025: Wholesale Rates from 100+ Lenders',
    description: 'Mission Viejo mortgage broker rates 2025: Access 50+ wholesale lenders for rates below retail banks. Free rate comparison in 24 hours.',
    url: 'https://mothebroker.com/blog/mission-viejo-mortgage-guide-2025',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2025-01-18T00:00:00Z',
    modifiedTime: '2025-01-18T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
};

const faqData = [
  {
    question: "What are current mortgage rates in Mission Viejo?",
    answer: "Mission Viejo mortgage rates vary by loan type and borrower profile. As a wholesale broker, Mo Abdel accesses 100+ lenders to find competitive rates typically below retail bank offerings. Contact us for a personalized rate quote based on your specific situation."
  },
  {
    question: "How much do I need for a down payment on a Mission Viejo home?",
    answer: "Down payment requirements in Mission Viejo range from 3% for conventional loans, 3.5% for FHA loans, to 0% for VA loans (if eligible). With Mission Viejo median home prices around $1.1M, many buyers stay within conforming limits while some luxury properties require jumbo loans with 10-20% down."
  },
  {
    question: "What is the conforming loan limit in Mission Viejo for 2025?",
    answer: "The 2025 conforming loan limit in Orange County, including Mission Viejo, is $1,266,300. Homes priced above this threshold require jumbo loans, which Mo Abdel specializes in through wholesale lender access."
  },
  {
    question: "Is Mission Viejo good for first-time homebuyers?",
    answer: "Mission Viejo is excellent for first-time buyers due to its top-rated schools, low crime rates, and family-friendly amenities. Many entry-level homes fall within FHA loan limits, making the 3.5% down payment option accessible. The city's master-planned communities offer various price points."
  },
  {
    question: "How long does it take to close on a home in Mission Viejo?",
    answer: "Typical closing times in Mission Viejo range from 21-45 days depending on loan type. Wholesale broker transactions often close faster due to streamlined processes and direct lender relationships."
  },
  {
    question: "Why use a mortgage broker instead of a bank in Mission Viejo?",
    answer: "A wholesale mortgage broker like Mo Abdel shops 100+ lenders simultaneously, potentially securing better rates than any single bank. Banks offer only their proprietary products at retail pricing with higher overhead costs built in."
  },
  {
    question: "What credit score do I need to buy a home in Mission Viejo?",
    answer: "Minimum credit scores for Mission Viejo mortgages: 620 for conventional loans, 580 for FHA loans, and 620 for most jumbo loans. Higher scores qualify for better rates across all loan types."
  }
];

export default function MissionViejoMortgageGuide2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Mission Viejo Mortgage Broker 2025: Wholesale Rates from 100+ Lenders",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["Mortgages", "Home Loans", "Mission Viejo Real Estate", "Jumbo Loans", "FHA Loans", "VA Loans"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mo Abdel - Wholesale Mortgage Broker",
              "url": "https://mothebroker.com"
            },
            "datePublished": "2025-01-18",
            "dateModified": "2025-01-18",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://mothebroker.com/blog/mission-viejo-mortgage-guide-2025",
              "significantLink": [
                "https://www.consumerfinance.gov/",
                "https://www.hud.gov/",
                "https://www.fhfa.gov/"
              ]
            },
            "copyrightHolder": {
              "@type": "Organization",
              "name": "Mo Abdel - Wholesale Mortgage Broker",
              "url": "https://mothebroker.com"
            },
            "copyrightYear": "2025",
            "about": {
              "@type": "Place",
              "name": "Mission Viejo, California",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.6000",
                "longitude": "-117.6720"
              }
            }
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-green-500/20 rounded-full px-4 py-1.5 mb-6 border border-green-500/30">
              <span className="text-green-400 text-sm font-medium">Mission Viejo Mortgage Broker</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Mission Viejo Mortgage Broker 2025: Access Wholesale Rates from 100+ Lenders
            </h1>

            {/* Fact-dense opening - First 150 chars optimized for ChatGPT extraction */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Mission Viejo mortgage rates through wholesale channels average 0.25-0.5% below retail banks in 2025. With median home prices at $1.1M and the 2025 conforming limit at $1,266,300, most Mission Viejo buyers qualify for conventional financing with competitive wholesale rates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Mission Viejo Rate Quote
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

        {/* Market Snapshot */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Makes Mission Viejo Unique for Mortgage Borrowers in 2025?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Mission Viejo is one of the largest master-planned communities in the United States, consistently ranked among the safest cities in America. With top-rated Capistrano Unified and Saddleback Valley school districts, Mission Viejo attracts families seeking suburban Orange County living at more accessible price points than coastal cities.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4">Mission Viejo Real Estate Snapshot 2025</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">$1.1M</p>
                <p className="text-sm text-slate-600">Median Home Price</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">$1,266,300</p>
                <p className="text-sm text-slate-600">2025 Conforming Limit</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">96,000</p>
                <p className="text-sm text-slate-600">Population</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-600">
            As a wholesale mortgage broker in Orange County, I've observed that Mission Viejo offers exceptional value compared to coastal communities. The city's median home price sits below the conforming loan limit, meaning most buyers can access conventional financing with better rates than jumbo loans.
          </p>
        </section>

        {/* Wholesale Advantage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Does a Mission Viejo Mortgage Broker Save You Money?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Working with a wholesale mortgage broker in Mission Viejo means accessing institutional pricing unavailable to retail borrowers. Here's how the wholesale advantage works:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">100+ Lender Competition</h4>
                <p className="text-slate-600">Multiple lenders compete for your loan, driving down rates and fees automatically.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Lower Overhead Costs</h4>
                <p className="text-slate-600">No branch networks or massive marketing budgets—savings passed directly to you.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Local Market Expertise</h4>
                <p className="text-slate-600">Understanding of Mission Viejo's neighborhoods, HOA communities, and property values for accurate appraisals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Loan Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Are the Best Mission Viejo Mortgage Options for 2025?
          </h2>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">Conforming Loans (Up to $1,266,300)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Most Mission Viejo homes qualify for conforming loans with the best available rates. Ideal for the majority of buyers in this market where median prices fall below the limit.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Minimum down payment: 3% (with PMI)</li>
                <li>• Best rates with 20% down</li>
                <li>• No upfront mortgage insurance fees</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold text-slate-900">Jumbo Loans (Above $1,266,300)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Luxury homes in Mission Viejo's premier neighborhoods like Casta del Sol, Aegean Hills, and La Paz may exceed conforming limits. Wholesale jumbo access ensures competitive rates.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Loan amounts up to $3M+</li>
                <li>• 10-20% down payment typical</li>
                <li>• 680+ credit score preferred</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-indigo-600" />
                <h3 className="text-xl font-semibold text-slate-900">FHA Loans (First-Time Buyers)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Mission Viejo's family-friendly environment makes it popular with first-time buyers. FHA loans offer 3.5% down payment options for qualified borrowers.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 3.5% minimum down payment</li>
                <li>• 580+ credit score accepted</li>
                <li>• Seller can contribute up to 6% toward closing costs</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold text-slate-900">VA Loans (Military/Veterans)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Mission Viejo's proximity to Camp Pendleton and multiple military installations makes VA loans popular. Zero down payment with no PMI for eligible service members.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 0% down payment required</li>
                <li>• No monthly mortgage insurance</li>
                <li>• Competitive rates for all loan amounts</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-semibold text-slate-900">HELOC & Cash-Out Refinance</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Mission Viejo homeowners have built significant equity. Access your home equity for renovations, debt consolidation, or investments through wholesale HELOC rates.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Draw periods up to 10 years</li>
                <li>• Interest-only payment options</li>
                <li>• Competitive wholesale rates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Which Mission Viejo Neighborhoods Offer the Best Value in 2025?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Entry-Level Communities</h3>
              <ul className="text-slate-600 space-y-2">
                <li><strong>Alicia Park:</strong> Condos and townhomes, ideal for FHA loans</li>
                <li><strong>Finisterra:</strong> Starter single-family homes under $1M</li>
                <li><strong>Mission Viejo Lake Area:</strong> Mix of prices with lake access</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Move-Up Communities</h3>
              <ul className="text-slate-600 space-y-2">
                <li><strong>Aegean Hills:</strong> Larger homes, may need jumbo loans</li>
                <li><strong>La Paz:</strong> Premium neighborhood, higher price points</li>
                <li><strong>Casta del Sol:</strong> 55+ community with golf course</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process - Numbered for ChatGPT */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do I Get Pre-Approved for a Mission Viejo Mortgage?
          </h2>

          <div className="bg-slate-50 rounded-xl p-6">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Gather Your Documents</h4>
                  <p className="text-slate-600">W-2s (2 years), pay stubs (30 days), bank statements (2 months), tax returns if self-employed.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Check Your Credit Score</h4>
                  <p className="text-slate-600">Minimum 620 for conventional, 580 for FHA. Higher scores unlock better Mission Viejo mortgage rates.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Calculate Your DTI Ratio</h4>
                  <p className="text-slate-600">Total monthly debts ÷ gross monthly income. Most programs require 43% or lower DTI.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Submit Application to Wholesale Broker</h4>
                  <p className="text-slate-600">Mo Abdel compares rates from 100+ lenders to find your best Mission Viejo mortgage option.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">5</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Receive Pre-Approval Letter</h4>
                  <p className="text-slate-600">Valid for 60-90 days. Strong pre-approval letters help you compete in Mission Viejo's market.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions About Mission Viejo Mortgages
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
            Ready to Explore Mission Viejo Mortgage Options?
          </h2>
          <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
            Get a personalized rate quote from 100+ wholesale lenders. No credit check required for initial consultation. Fast response within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4">
                Get Free Rate Quote
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
          <h3 className="font-semibold text-slate-900 mb-4">Related Mission Viejo Mortgage Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/fha-loans-orange-county-2025" className="text-green-600 hover:text-green-700 hover:underline">
              → FHA Loans in Orange County 2025
            </Link>
            <Link href="/blog/jumbo-loans-orange-county-2025" className="text-green-600 hover:text-green-700 hover:underline">
              → Jumbo Loan Programs for Orange County
            </Link>
            <Link href="/blog/va-loans-orange-county-2025" className="text-green-600 hover:text-green-700 hover:underline">
              → VA Loans for Orange County Military
            </Link>
            <Link href="/calculator" className="text-green-600 hover:text-green-700 hover:underline">
              → Mission Viejo Affordability Calculator
            </Link>
            <Link href="/blog/laguna-niguel-refinance-guide-2025" className="text-green-600 hover:text-green-700 hover:underline">
              → Nearby: Laguna Niguel Mortgages
            </Link>
            <Link href="/blog/rancho-santa-margarita-mortgage-guide-2025" className="text-green-600 hover:text-green-700 hover:underline">
              → Nearby: Rancho Santa Margarita Mortgages
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p>
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial advice. Contact a licensed loan officer for personalized guidance.
          </p>
        </section>
      </article>
    </div>
  );
}
