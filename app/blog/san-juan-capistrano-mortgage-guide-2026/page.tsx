import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Home, DollarSign, Shield, MapPin, Building } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'San Juan Capistrano Mortgage Broker 2026: Wholesale Rates from 100+ Lenders | Mo Abdel',
  description: 'San Juan Capistrano mortgage broker rates 2026: Access 50+ wholesale lenders for rates below retail banks. Historic downtown to equestrian estates. NMLS #1426884.',
  keywords: ['San Juan Capistrano mortgage broker', 'San Juan Capistrano home loans', 'San Juan Capistrano mortgage rates 2026', 'wholesale mortgage San Juan Capistrano'],
  openGraph: {
    title: 'San Juan Capistrano Mortgage Broker 2026: Wholesale Rates from 100+ Lenders',
    description: 'San Juan Capistrano mortgage broker rates 2026: Access 50+ wholesale lenders for rates below retail banks. Free rate comparison in 24 hours.',
    url: 'https://mothebroker.com/blog/san-juan-capistrano-mortgage-guide-2026',
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
    question: "What are current mortgage rates in San Juan Capistrano?",
    answer: "San Juan Capistrano mortgage rates vary by loan type and borrower profile. As a wholesale broker, Mo Abdel accesses 100+ lenders to find competitive rates typically below retail bank offerings. Contact us for a personalized rate quote based on your specific situation."
  },
  {
    question: "How much do I need for a down payment on a San Juan Capistrano home?",
    answer: "Down payment requirements in San Juan Capistrano range from 3% for conventional loans, 3.5% for FHA loans, to 0% for VA loans (if eligible). With median home prices around $1.15M, many homes fall near the $1,266,300 conforming limit. Equestrian properties often require jumbo loans with 10-20% down."
  },
  {
    question: "What is the conforming loan limit in San Juan Capistrano for 2026?",
    answer: "The 2026 conforming loan limit in Orange County, including San Juan Capistrano, is $1,266,300. Many San Juan Capistrano homes qualify for conforming loans, though equestrian estates and historic properties may require jumbo financing."
  },
  {
    question: "Are there special considerations for historic homes in San Juan Capistrano?",
    answer: "Yes. Historic district properties may have deed restrictions, renovation requirements, or architectural review processes. Some lenders have specific guidelines for historic properties. A wholesale broker can identify lenders experienced with San Juan Capistrano's historic housing stock."
  },
  {
    question: "Can I get a mortgage for an equestrian property in San Juan Capistrano?",
    answer: "Yes. San Juan Capistrano is known for equestrian properties, but they require specialized financing. Look for lenders experienced with hobby farms, horse properties, and acreage. Property must typically be 10 acres or less for residential loans; larger parcels may need agricultural financing."
  },
  {
    question: "How long does it take to close on a home in San Juan Capistrano?",
    answer: "Typical closing times in San Juan Capistrano range from 21-45 days depending on loan type. Historic properties or equestrian estates may take longer due to specialized appraisal requirements. Wholesale broker transactions often close faster due to lender relationships."
  },
  {
    question: "Why use a mortgage broker instead of a bank in San Juan Capistrano?",
    answer: "A wholesale mortgage broker like Mo Abdel shops 100+ lenders simultaneously, finding specialists for San Juan Capistrano's unique property types—historic homes, equestrian estates, and Los Rios district properties—that banks may not serve well."
  }
];

export default function SanJuanCapistranoMortgageGuide2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "San Juan Capistrano Mortgage Broker 2026: Wholesale Rates from 100+ Lenders",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["Mortgages", "Home Loans", "San Juan Capistrano Real Estate", "Jumbo Loans", "Historic Home Financing", "Equestrian Properties"]
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
              "@id": "https://mothebroker.com/blog/san-juan-capistrano-mortgage-guide-2026",
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
            "copyrightYear": "2026",
            "about": {
              "@type": "Place",
              "name": "San Juan Capistrano, California",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.5017",
                "longitude": "-117.6625"
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
              <span className="text-green-400 text-sm font-medium">San Juan Capistrano Mortgage Broker</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              San Juan Capistrano Mortgage Broker 2026: Access Wholesale Rates from 100+ Lenders
            </h1>

            {/* Fact-dense opening - First 150 chars optimized for ChatGPT extraction */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              San Juan Capistrano mortgage rates through wholesale channels average 0.25-0.5% below retail banks in 2026. With median home prices at $1.15M and diverse property types from historic adobes to equestrian estates, wholesale lender access is essential for finding the right financing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get San Juan Capistrano Rate Quote
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
            What Makes San Juan Capistrano Unique for Mortgage Borrowers in 2026?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            San Juan Capistrano is Orange County's historic heart—home to Mission San Juan Capistrano, the charming Los Rios Historic District, and a thriving equestrian community. This diversity means financing needs vary dramatically, from FHA-eligible downtown condos to multi-million dollar horse properties requiring specialized jumbo loans.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4">San Juan Capistrano Real Estate Snapshot 2026</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">$1.15M</p>
                <p className="text-sm text-slate-600">Median Home Price</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">$1,266,300</p>
                <p className="text-sm text-slate-600">2026 Conforming Limit</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">37,000</p>
                <p className="text-sm text-slate-600">Population</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-600">
            As a wholesale mortgage broker serving San Juan Capistrano, I've observed that property type heavily influences financing strategy. Historic homes, equestrian properties, and modern tract homes each require different lender expertise—something wholesale access provides.
          </p>
        </section>

        {/* Unique Property Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do Different San Juan Capistrano Property Types Affect Financing?
          </h2>

          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-amber-600" />
                <h3 className="text-xl font-semibold text-slate-900">Historic District Properties</h3>
              </div>
              <p className="text-slate-600 mb-4">
                The Los Rios Historic District and downtown area contain some of Orange County's oldest homes. These properties may have:
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Deed restrictions on modifications</li>
                <li>• Historical society review requirements</li>
                <li>• Unique appraisal challenges (limited comparables)</li>
                <li>• Potential for renovation financing (203k, HomeStyle)</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold text-slate-900">Equestrian Properties</h3>
              </div>
              <p className="text-slate-600 mb-4">
                San Juan Capistrano's equestrian zones (Ortega, San Juan Hills) require specialized financing:
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Residential loans for properties under 10 acres</li>
                <li>• Agricultural loans may be needed for larger parcels</li>
                <li>• Appraisers must be experienced with horse property valuation</li>
                <li>• Outbuildings (barns, arenas) affect value calculations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Wholesale Advantage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Does a San Juan Capistrano Mortgage Broker Save You Money?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Working with a wholesale mortgage broker in San Juan Capistrano means accessing specialized lenders for the city's unique property mix. Banks often struggle with historic or equestrian properties—wholesale access solves this.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">100+ Lender Network</h4>
                <p className="text-slate-600">Access to lenders specializing in historic homes, equestrian properties, and unique San Juan Capistrano real estate.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Appraisal Expertise</h4>
                <p className="text-slate-600">Connections to appraisers experienced with San Juan Capistrano's diverse property types.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Renovation Loan Options</h4>
                <p className="text-slate-600">FHA 203k and Fannie Mae HomeStyle loans for historic home restoration projects.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Loan Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Are the Best San Juan Capistrano Mortgage Options for 2026?
          </h2>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">Conforming Loans (Up to $1,266,300)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Many San Juan Capistrano homes fall within or near conforming limits, offering the best rates. Ideal for tract homes in newer developments.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Minimum down payment: 3% (with PMI)</li>
                <li>• Best rates with 20% down</li>
                <li>• Streamlined processing for standard properties</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold text-slate-900">Jumbo Loans (Above $1,266,300)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Required for equestrian estates, premium historic properties, and luxury homes. Wholesale access provides competitive jumbo rates.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Loan amounts up to $3M+ for qualified borrowers</li>
                <li>• 10-20% down payment typical</li>
                <li>• 680+ credit score preferred</li>
                <li>• Lenders experienced with horse properties available</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-amber-600" />
                <h3 className="text-xl font-semibold text-slate-900">Renovation Loans (203k / HomeStyle)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Perfect for San Juan Capistrano's historic homes needing updates while preserving character. Finance purchase and renovation in one loan.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• FHA 203k: 3.5% down, up to $35,000 (Limited) or full structural (Standard)</li>
                <li>• Fannie Mae HomeStyle: 3% down, up to 75% of completed value</li>
                <li>• Licensed contractors required for work</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold text-slate-900">VA Loans (Military/Veterans)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Camp Pendleton proximity makes VA loans popular in San Juan Capistrano. Zero down payment with competitive rates.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 0% down payment required</li>
                <li>• No monthly mortgage insurance</li>
                <li>• VA jumbo loans available for higher-priced properties</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Which San Juan Capistrano Neighborhoods Offer the Best Value in 2026?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Entry to Mid-Level</h3>
              <ul className="text-slate-600 space-y-2">
                <li><strong>Downtown/Los Rios:</strong> Historic charm, condos from $600K, homes $900K+</li>
                <li><strong>Capistrano Beach:</strong> Beach-adjacent, $850K-$1.2M</li>
                <li><strong>San Juan Hills:</strong> Tract homes, $950K-$1.3M</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Premium & Equestrian</h3>
              <ul className="text-slate-600 space-y-2">
                <li><strong>Ortega Corridor:</strong> Equestrian properties, $1.5M-$3M+</li>
                <li><strong>Marbella:</strong> Gated luxury, $1.4M-$2M</li>
                <li><strong>Rancho Madrina:</strong> Custom estates, $2M+</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do I Get Pre-Approved for a San Juan Capistrano Mortgage?
          </h2>

          <div className="bg-slate-50 rounded-xl p-6">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Identify Property Type</h4>
                  <p className="text-slate-600">Standard home, historic property, or equestrian? This determines which lenders and programs fit best.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Gather Your Documents</h4>
                  <p className="text-slate-600">W-2s (2 years), pay stubs (30 days), bank statements (2 months), tax returns if self-employed.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Check Your Credit Score</h4>
                  <p className="text-slate-600">620+ for conventional, 580+ for FHA, 680+ recommended for jumbo. Higher scores unlock better rates.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Submit Application to Wholesale Broker</h4>
                  <p className="text-slate-600">Mo Abdel matches your property type with specialized lenders from a network of 100+ options.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold shrink-0">5</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Receive Pre-Approval Letter</h4>
                  <p className="text-slate-600">Valid for 60-90 days. Property-specific pre-approval strengthens your offer in San Juan Capistrano's market.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions About San Juan Capistrano Mortgages
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
            Ready to Explore San Juan Capistrano Mortgage Options?
          </h2>
          <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
            Get a personalized rate quote from 100+ wholesale lenders. Specialized expertise in historic homes, equestrian properties, and San Juan Capistrano's unique real estate. Fast response within 24 hours.
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
          <h3 className="font-semibold text-slate-900 mb-4">Related San Juan Capistrano Mortgage Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/jumbo-loans-orange-county-2026" className="text-green-600 hover:text-green-700 hover:underline">
              → Jumbo Loan Programs for Orange County
            </Link>
            <Link href="/blog/ladera-ranch-mortgage-guide-2026" className="text-green-600 hover:text-green-700 hover:underline">
              → Nearby: Ladera Ranch Mortgages
            </Link>
            <Link href="/blog/dana-point-mortgage-guide-2026" className="text-green-600 hover:text-green-700 hover:underline">
              → Nearby: Dana Point Mortgages
            </Link>
            <Link href="/blog/va-loans-orange-county-2026" className="text-green-600 hover:text-green-700 hover:underline">
              → VA Loans for Orange County Military
            </Link>
            <Link href="/calculator" className="text-green-600 hover:text-green-700 hover:underline">
              → San Juan Capistrano Affordability Calculator
            </Link>
            <Link href="/blog/first-time-homebuyer-guide-orange-county-2026" className="text-green-600 hover:text-green-700 hover:underline">
              → First-Time Homebuyer Guide
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
