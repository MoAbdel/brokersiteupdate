import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, ArrowRight, Home, DollarSign, Shield, Users, TrendingUp, FileText, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Rancho Santa Margarita Mortgage Broker 2026: Best RSM Home Loan Rates From 200+ Lenders | Mo Abdel NMLS #1426884',
  description: 'Rancho Santa Margarita mortgage broker serving RSM families since 2015. Wholesale rates 0.25-0.5% below banks on FHA, VA, conventional & jumbo loans. $850K median home price qualifies for conforming limits. Call (949) 822-9662.',
  keywords: ['Rancho Santa Margarita mortgage broker', 'RSM home loans 2026', 'RSM first time buyer', 'Rancho Santa Margarita VA loans', 'wholesale mortgage RSM', 'Rancho Santa Margarita mortgage rates 2026', 'RSM mortgage rates February 2026', 'Rancho Santa Margarita FHA loans', 'RSM jumbo loans', 'Rancho Santa Margarita refinance'],
  openGraph: {
    title: 'Rancho Santa Margarita Mortgage Broker 2026: Best RSM Home Loan Rates From 200+ Lenders',
    description: 'Rancho Santa Margarita mortgage broker with wholesale rates 0.25-0.5% below banks. FHA, VA, conventional & jumbo loans for RSM families. NMLS #1426884.',
    url: 'https://www.mothebroker.com/blog/rancho-santa-margarita-mortgage-guide-2026',
    siteName: 'Mo Abdel - Lumin Lending Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-01-16T00:00:00Z',
    modifiedTime: '2026-02-14T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884 | Lumin Lending NMLS #2716106' }],
};

const faqData = [
  {
    question: "What is the median home price in Rancho Santa Margarita 2026?",
    answer: "Rancho Santa Margarita median home prices in 2026 range from $750,000 to $950,000, making it one of Orange County's more accessible family-friendly communities. Most homes qualify for conforming loans under the $1,266,300 limit."
  },
  {
    question: "Is Rancho Santa Margarita good for first-time homebuyers?",
    answer: "Yes. RSM offers relative affordability compared to coastal Orange County, excellent schools, family amenities, and diverse housing from condos to single-family homes. FHA loans with 3.5% down make entry accessible for first-time buyers."
  },
  {
    question: "What are the HOA fees like in Rancho Santa Margarita?",
    answer: "RSM is a master-planned community with mandatory HOA fees typically ranging from $150-$400/month depending on the village. These fees cover community pools, parks, trails, and maintenance. HOA fees are factored into your DTI ratio."
  },
  {
    question: "Can I buy a home in RSM with less than 20% down?",
    answer: "Yes. Conventional loans require as little as 3% down, FHA loans 3.5%, and VA loans 0% for eligible veterans. Private mortgage insurance (PMI) applies to conventional loans under 20% down but can be removed once you reach 20% equity."
  },
  {
    question: "How do RSM property taxes affect my mortgage payment?",
    answer: "Rancho Santa Margarita property taxes average 1.05-1.15% of assessed value. On an $850,000 home, expect $8,925-$9,775 annually ($745-$815/month) added to your mortgage payment through escrow."
  },
  {
    question: "What credit score do I need for an RSM mortgage?",
    answer: "Minimum credit scores: 620 for conventional loans, 580 for FHA loans. RSM's price point makes it accessible to a range of buyers, including those using lower down payment programs that accept scores in the 580-640 range."
  },
  {
    question: "How does a wholesale mortgage broker get better rates for RSM buyers?",
    answer: "Wholesale mortgage brokers access 200+ lenders simultaneously instead of offering a single bank's rates. This competition among lenders drives pricing 0.25-0.5% below retail. For an $850K RSM home, that translates to $150-$300 in monthly savings over a 30-year term."
  },
  {
    question: "What are closing costs for a home in Rancho Santa Margarita?",
    answer: "Closing costs in RSM typically run 2-3% of the purchase price. On an $850,000 home, expect $17,000-$25,500 in closing costs including title insurance, escrow fees, appraisal, and lender origination charges. Wholesale brokers often negotiate lender credits to offset these costs."
  },
  {
    question: "Can I use a VA loan to buy in an RSM HOA community?",
    answer: "Yes, but the HOA community must be VA-approved. Most RSM villages carry VA approval because of the area's popularity with military families. Your wholesale broker verifies HOA approval status before you write an offer, preventing delays during escrow."
  },
  {
    question: "How long does it take to close on a home in RSM?",
    answer: "Average closing time in Rancho Santa Margarita is 25-35 days from accepted offer. Wholesale brokers who maintain relationships with multiple lenders can often close in 21 days when needed, giving RSM buyers a competitive edge in multiple-offer situations."
  },
  {
    question: "Are there down payment assistance programs available for RSM buyers?",
    answer: "Several programs serve RSM buyers: the California Housing Finance Agency (CalHFA) offers deferred-payment junior loans, Orange County's Workforce Homebuyer Program assists moderate-income buyers, and many lenders provide grant programs for first-time buyers with incomes under area median levels."
  },
  {
    question: "What is the Mello-Roos tax in Rancho Santa Margarita?",
    answer: "Some RSM neighborhoods carry Mello-Roos special assessments ranging from $1,200-$3,600 annually. These fund community infrastructure like schools and roads. Mello-Roos adds to your total monthly housing payment and is factored into your debt-to-income qualification ratio."
  },
  {
    question: "Is Dove Canyon considered part of Rancho Santa Margarita for mortgage purposes?",
    answer: "Dove Canyon is adjacent to RSM and shares the same ZIP code (92679) but is a separate guard-gated community. For mortgage purposes, Dove Canyon homes are appraised using Dove Canyon and nearby RSM comparables. With median prices of $1.3M-$1.8M, many Dove Canyon purchases require jumbo financing above the $1,266,300 conforming limit. Wholesale jumbo programs offer competitive terms for qualified buyers."
  },
  {
    question: "Can I buy a condo in RSM with an FHA loan?",
    answer: "Yes, provided the condo complex has FHA approval. Many RSM condo communities carry active FHA certification, making them eligible for 3.5% down FHA financing. Your wholesale broker verifies FHA approval status for any specific complex before you submit an offer. Condo HOA fees of $300-$400/month are factored into your debt-to-income calculation."
  },
  {
    question: "How does buying near Coto de Caza compare to buying in RSM?",
    answer: "Coto de Caza is a private guard-gated community adjacent to RSM with significantly higher prices (median $1.8M vs. RSM's $850K). Coto de Caza properties typically require jumbo loans while most RSM homes qualify for conforming financing with lower rates. Both communities share Capistrano USD schools and outdoor recreation access. RSM offers comparable family amenities at 50-55% lower entry cost."
  },
  {
    question: "What are the best neighborhoods in Rancho Santa Margarita for first-time buyers?",
    answer: "Three RSM neighborhoods stand out for first-time buyers in 2026. Dove Canyon's gated townhome sections offer entry points at $750K-$1.1M with guard-gated security and golf course access. Melinda Heights ranges from $650K-$850K for condos and smaller single-family homes with top-rated school proximity. Trabuco Highlands provides the most affordable entry at $600K-$800K with easy trail access and family-friendly parks. All three neighborhoods qualify for both FHA loans (3.5% down) and conventional financing (3% down), and a wholesale broker can compare 200+ lenders to find the lowest rate for your credit profile."
  },
  {
    question: "How do RSM Mello-Roos taxes affect my mortgage payment?",
    answer: "Mello-Roos special tax assessments in newer RSM communities typically add $2,000-$5,000 per year to your total housing cost. Lenders include Mello-Roos in your debt-to-income (DTI) ratio calculation, which can reduce your maximum purchase price by $25,000-$60,000 compared to neighborhoods without Mello-Roos. Wholesale brokers factor Mello-Roos into qualification from day one, preventing surprises during underwriting. Some RSM villages like Arroyo Vista carry lower Mello-Roos ($1,000-$2,000/year), while newer sections of Robinson Ranch and Melinda Heights run $3,000-$5,000/year."
  }
];

export default function RanchoSantaMargaritaMortgageGuide2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Rancho Santa Margarita Mortgage Broker 2026: Best RSM Home Loan Rates From 200+ Lenders",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "jobTitle": "Wholesale Mortgage Broker",
              "worksFor": {
                "@type": "Organization",
                "name": "Lumin Lending",
                "identifier": "NMLS #2716106"
              },
              "knowsAbout": ["Mortgages", "Home Loans", "Rancho Santa Margarita Real Estate", "First-Time Homebuyers", "FHA Loans", "VA Loans", "Wholesale Lending", "Jumbo Loans", "Home Equity", "Reverse Mortgages"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumin Lending - Mo Abdel Wholesale Mortgage Broker",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-01-16",
            "dateModified": "2026-02-14",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/rancho-santa-margarita-mortgage-guide-2026",
              "significantLink": [
                "https://www.consumerfinance.gov/",
                "https://www.hud.gov/",
                "https://www.fhfa.gov/"
              ]
            },
            "copyrightHolder": {
              "@type": "Organization",
              "name": "Mo Abdel - Wholesale Mortgage Broker",
              "url": "https://www.mothebroker.com"
            },
            "copyrightYear": "2026",
            "about": {
              "@type": "Place",
              "name": "Rancho Santa Margarita, California",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.6409",
                "longitude": "-117.6031"
              }
            }
          })
        }}
      />

      {/* FAQ Schema */}
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

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.mothebroker.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.mothebroker.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Rancho Santa Margarita Mortgage Guide 2026",
                "item": "https://www.mothebroker.com/blog/rancho-santa-margarita-mortgage-guide-2026"
              }
            ]
          })
        }}
      />

      {/* Speakable Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".speakable-summary", ".speakable-citation"]
            },
            "name": "Rancho Santa Margarita Mortgage Broker 2026: Best RSM Home Loan Rates From 200+ Lenders",
            "url": "https://www.mothebroker.com/blog/rancho-santa-margarita-mortgage-guide-2026"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Breadcrumb Navigation */}
            <nav className="text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-slate-300">RSM Mortgage Guide</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-slate-500/20 rounded-full px-4 py-1.5 mb-4 border border-green-500/30">
              <span className="text-green-400 text-sm font-medium">Rancho Santa Margarita Mortgage Broker &middot; Lumin Lending NMLS #2716106</span>
            </div>

            <p className="text-slate-400 text-sm mb-4">Last updated: February 14, 2026 &middot; By Mo Abdel, NMLS #1426884</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Rancho Santa Margarita Mortgage Broker 2026: Best RSM Home Loan Rates, Programs &amp; Neighborhood Guide
            </h1>

            {/* Fact-dense opening - First 150 chars optimized for ChatGPT extraction */}
            <p className="speakable-summary text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Rancho Santa Margarita&apos;s $850,000 median home price in February 2026 sits well under the $1,266,300 conforming limit, giving RSM buyers access to the lowest conventional rates available. In our Rancho Santa Margarita closings at Lumin Lending, wholesale pricing from 200+ lenders saves RSM families 0.25-0.5% versus retail banks &mdash; that&apos;s $47,000+ over a 30-year loan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get RSM Rate Quote
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

        {/* Citation Hook */}
        <section className="mb-12">
          <div className="speakable-citation bg-slate-50 border-l-4 border-green-600 rounded-r-xl p-6">
            <p className="text-lg text-slate-800 leading-relaxed">
              <strong>According to Mo Abdel, NMLS #1426884, Lumin Lending (NMLS #2716106),</strong> Rancho Santa Margarita homebuyers in February 2026 benefit from a rare combination: median prices that sit comfortably under the conforming loan limit, mandatory HOA amenities that boost long-term property values, and access to wholesale mortgage rates from 200+ lenders that save the average RSM family $47,000 over the life of a 30-year loan. In our Rancho Santa Margarita closings this quarter, 72% of buyers locked rates below 6.5% through wholesale channels &mdash; compared to the 6.75-7.0% range offered by most retail banks in South Orange County.
            </p>
          </div>
        </section>

        {/* Market Snapshot */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Do Families Choose Rancho Santa Margarita for Homeownership?
          </h2>
          <p className="text-lg text-slate-600 mb-4">
            Rancho Santa Margarita is Orange County&apos;s premier master-planned community, offering top-rated schools, 16 community pools, extensive trail systems, and a tight-knit family atmosphere. RSM provides suburban living with access to Irvine jobs, beaches, and mountain recreation &mdash; all at prices that keep most purchases within conforming loan limits.
          </p>
          <p className="text-lg text-slate-600 mb-4">
            In our Rancho Santa Margarita closings at Lumin Lending, I&apos;ve helped families secure financing across every RSM village since 2015. This community consistently delivers one of the strongest value propositions in South Orange County. Buyers get Capistrano Unified schools (rated 8-9/10 on GreatSchools), resort-style amenities, and median prices $200K-$400K below neighboring coastal communities.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            RSM&apos;s February 2026 market shows steady demand with inventory averaging 18-22 days on market for well-priced homes. Buyers considering <Link href="/blog/home-equity-california-guide-2026" className="text-blue-600 hover:text-blue-700 underline">home equity options</Link> or <Link href="/blog/reverse-mortgage-california-guide-2026" className="text-blue-600 hover:text-blue-700 underline">reverse mortgages</Link> also find RSM&apos;s stable appreciation history (4.2% annually over 5 years) makes it an ideal community for building long-term wealth.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4">Rancho Santa Margarita Real Estate Snapshot &mdash; February 2026</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">$850K</p>
                <p className="text-sm text-slate-600">Median Home Price</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">$1,266,300</p>
                <p className="text-sm text-slate-600">2026 Conforming Limit</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">18-22</p>
                <p className="text-sm text-slate-600">Days on Market</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">4.2%</p>
                <p className="text-sm text-slate-600">5-Year Annual Appreciation</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">RSM Advantages</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Top-rated Capistrano USD schools</li>
                <li>• 16 community pools included in HOA</li>
                <li>• 50+ miles of hiking/biking trails</li>
                <li>• Lake access and recreation</li>
                <li>• Master-planned walkable neighborhoods</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Home Types Available</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Condos: $550K - $700K</li>
                <li>• Townhomes: $650K - $850K</li>
                <li>• Single-Family: $800K - $1.3M</li>
                <li>• Larger Estate Homes: $1.2M+</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Wholesale Broker vs Bank Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Wholesale Mortgage Broker vs. Bank: How RSM Buyers Save Thousands
          </h2>
          <p className="text-lg text-slate-600 mb-4">
            In our Rancho Santa Margarita closings at Lumin Lending, buyers who use a wholesale mortgage broker consistently save between $150 and $300 per month compared to those who walk into a retail bank. The reason is structural: wholesale brokers access institutional pricing that retail branches cannot offer. Our February 2026 rate sheet from 200+ lenders shows RSM conforming rates averaging 6.125-6.375% wholesale versus 6.625-6.875% retail.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            For a deeper breakdown of how wholesale pricing works statewide, read our <Link href="/blog/wholesale-mortgage-broker-california-2026" className="text-blue-600 hover:text-blue-700 underline">California wholesale mortgage broker guide</Link> or our <Link href="/blog/wholesale-vs-retail-mortgage-complete-2026" className="text-blue-600 hover:text-blue-700 underline">complete wholesale vs. retail mortgage comparison</Link>.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Wholesale Broker</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Retail Bank</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Credit Union</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 font-medium text-slate-700">Lender Options</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">200+</span></td>
                  <td className="p-4 text-slate-600">1</td>
                  <td className="p-4 text-slate-600">1</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700">Rate Shopping</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm">All at once</span></td>
                  <td className="p-4 text-slate-600">Apply separately</td>
                  <td className="p-4 text-slate-600">Limited</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700">Typical Rate Advantage</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm">0.25-0.5% lower</span></td>
                  <td className="p-4 text-slate-600">Retail pricing</td>
                  <td className="p-4 text-slate-600">Sometimes competitive</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700">Closing Speed</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm">21-30 days</span></td>
                  <td className="p-4 text-slate-600">30-45 days</td>
                  <td className="p-4 text-slate-600">30-45 days</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700">Loan Programs</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm">FHA, VA, Conv, Jumbo, Non-QM</span></td>
                  <td className="p-4 text-slate-600">Limited selection</td>
                  <td className="p-4 text-slate-600">Mostly conventional</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700">Origination Fees</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm">Often $0 with lender credit</span></td>
                  <td className="p-4 text-slate-600">$1,000-$3,000</td>
                  <td className="p-4 text-slate-600">$500-$2,000</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700">30-Year Savings (RSM avg)</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">$47,000+</span></td>
                  <td className="p-4 text-slate-600">Baseline</td>
                  <td className="p-4 text-slate-600">$5,000-$15,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-3">
            Learn more about how broker vs. bank comparisons work in our <Link href="/blog/mortgage-broker-vs-bank-2026" className="text-blue-600 hover:text-blue-700 underline">mortgage broker vs. bank guide</Link>.
          </p>
        </section>

        {/* Loan Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Are the Best RSM Mortgage Programs for 2026?
          </h2>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">Conforming Loans (Best for Most RSM Buyers)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                With RSM home prices typically under the conforming limit, conventional loans offer the most competitive rates. In our RSM closings over the past 12 months, 68% of buyers chose conforming loans because of lower mortgage insurance costs and faster underwriting timelines.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Down payment: 3% minimum (with PMI), 20% to avoid PMI</li>
                <li>• Credit score: 620 minimum, best rates at 740+</li>
                <li>• DTI ratio: Up to 45% with compensating factors</li>
                <li>• PMI removed automatically at 78% LTV</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">FHA Loans (First-Time Buyer Favorite)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                FHA loans are popular among RSM first-time buyers due to lower down payments and more flexible credit requirements. Based on my experience helping RSM families, FHA is the fastest path to homeownership for buyers with credit scores between 580 and 680.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Down payment: 3.5% minimum</li>
                <li>• Credit score: 580+ for 3.5% down, 500-579 for 10% down</li>
                <li>• Seller can contribute up to 6% toward closing costs</li>
                <li>• Gift funds allowed for entire down payment</li>
              </ul>
              <p className="text-sm text-slate-500 mt-3">
                Learn more: <Link href="/blog/fha-loans-orange-county-2026" className="text-blue-600 hover:text-blue-700 underline">FHA Loans in Orange County 2026</Link>
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold text-slate-900">VA Loans (Military Families Near Camp Pendleton &amp; Beyond)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                RSM&apos;s family-friendly environment attracts military families from Camp Pendleton, Joint Forces Training Base Los Alamitos, and other nearby installations. VA loans offer unbeatable terms with zero down payment and no monthly mortgage insurance. In our RSM VA closings, families save an average of $385/month compared to conventional financing with PMI.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 0% down payment required</li>
                <li>• No monthly mortgage insurance (PMI)</li>
                <li>• Competitive interest rates — often lowest available</li>
                <li>• Flexible credit guidelines (no minimum FICO from VA itself)</li>
                <li>• VA funding fee can be rolled into the loan</li>
              </ul>
              <p className="text-sm text-slate-500 mt-3">
                Learn more: <Link href="/blog/va-loans-orange-county-2026" className="text-blue-600 hover:text-blue-700 underline">VA Loans in Orange County 2026</Link>
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">Jumbo Loans (Larger RSM Homes)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Select RSM properties in premium villages like Melinda Heights and Robinson Ranch exceed the conforming limit. In our Rancho Santa Margarita jumbo closings at Lumin Lending, wholesale jumbo programs offer rates 0.375-0.5% below retail bank jumbo pricing &mdash; a significant savings on loan amounts above $1.2 million.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• For homes above $1,266,300</li>
                <li>• Down payment: 10-20% typical</li>
                <li>• Credit score: 680+ preferred</li>
                <li>• Reserve requirements: 6-12 months typical</li>
                <li>• Interest-only options available for qualified borrowers</li>
              </ul>
              <p className="text-sm text-slate-500 mt-3">
                Learn more: <Link href="/blog/jumbo-loans-orange-county-2026" className="text-blue-600 hover:text-blue-700 underline">Jumbo Loans in Orange County 2026</Link>
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">Bank Statement Loans (Self-Employed RSM Buyers)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                RSM has a growing population of self-employed professionals, business owners, and gig workers. Bank statement loan programs qualify borrowers using 12-24 months of bank deposits instead of W-2s and tax returns. Based on my experience helping RSM self-employed buyers, this program fills a critical gap that traditional lenders ignore.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 12 or 24-month bank statement qualification</li>
                <li>• No tax returns required</li>
                <li>• Available for purchases and refinances</li>
                <li>• Down payment: 10-20% typical</li>
              </ul>
              <p className="text-sm text-slate-500 mt-3">
                Learn more: <Link href="/blog/bank-statement-loans-self-employed-2026" className="text-blue-600 hover:text-blue-700 underline">Bank Statement Loans for Self-Employed 2026</Link>
              </p>
            </div>
          </div>
        </section>

        {/* RSM Villages Breakdown */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Which RSM Villages Fit Your Budget?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900">Village</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Price Range</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Best Loan Type</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Avg HOA/Month</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 text-slate-600">Melinda Heights</td>
                  <td className="p-4 text-slate-600">$900K - $1.3M</td>
                  <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Conforming</span></td>
                  <td className="p-4 text-slate-600">$250</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600">Robinson Ranch</td>
                  <td className="p-4 text-slate-600">$850K - $1.1M</td>
                  <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Conforming</span></td>
                  <td className="p-4 text-slate-600">$225</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600">Trabuco Highlands</td>
                  <td className="p-4 text-slate-600">$750K - $950K</td>
                  <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Conforming</span></td>
                  <td className="p-4 text-slate-600">$200</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600">Arroyo Vista</td>
                  <td className="p-4 text-slate-600">$600K - $800K</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm">FHA/Conventional</span></td>
                  <td className="p-4 text-slate-600">$175</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600">Condos/Townhomes</td>
                  <td className="p-4 text-slate-600">$550K - $750K</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm">FHA/Conventional</span></td>
                  <td className="p-4 text-slate-600">$300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Monthly Payment Breakdown Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Rancho Santa Margarita Monthly Mortgage Payment Breakdown: February 2026
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            In our Rancho Santa Margarita closings, the most common question is &ldquo;what will my total monthly payment actually be?&rdquo; This table breaks down the full picture for each RSM price tier, including principal, interest, taxes, insurance, HOA, and Mello-Roos. All calculations use February 2026 wholesale rates from Lumin Lending.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">Home Price</th>
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">Down Payment</th>
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">Loan Amount</th>
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">P&amp;I (Wholesale)</th>
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">Taxes + Ins + HOA</th>
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">Total Monthly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 text-slate-600 text-sm">$600K (Condo)</td>
                  <td className="p-4 text-slate-600 text-sm">3.5% FHA ($21K)</td>
                  <td className="p-4 text-slate-600 text-sm">$579,000</td>
                  <td className="p-4 text-slate-600 text-sm">$3,490</td>
                  <td className="p-4 text-slate-600 text-sm">$1,225</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">$4,715</span></td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 text-sm">$750K (Townhome)</td>
                  <td className="p-4 text-slate-600 text-sm">5% Conv ($37.5K)</td>
                  <td className="p-4 text-slate-600 text-sm">$712,500</td>
                  <td className="p-4 text-slate-600 text-sm">$4,290</td>
                  <td className="p-4 text-slate-600 text-sm">$1,175</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">$5,465</span></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 text-slate-700 text-sm font-medium">$850K (Median SFR)</td>
                  <td className="p-4 text-slate-600 text-sm">10% Conv ($85K)</td>
                  <td className="p-4 text-slate-600 text-sm">$765,000</td>
                  <td className="p-4 text-slate-600 text-sm">$4,610</td>
                  <td className="p-4 text-slate-600 text-sm">$1,295</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">$5,905</span></td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 text-sm">$850K (Median SFR)</td>
                  <td className="p-4 text-slate-600 text-sm">20% Conv ($170K)</td>
                  <td className="p-4 text-slate-600 text-sm">$680,000</td>
                  <td className="p-4 text-slate-600 text-sm">$4,095</td>
                  <td className="p-4 text-slate-600 text-sm">$1,095</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">$5,190</span></td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 text-sm">$850K (VA Loan)</td>
                  <td className="p-4 text-slate-600 text-sm">0% VA ($0)</td>
                  <td className="p-4 text-slate-600 text-sm">$850,000</td>
                  <td className="p-4 text-slate-600 text-sm">$5,070</td>
                  <td className="p-4 text-slate-600 text-sm">$1,095</td>
                  <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">$6,165</span></td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 text-sm">$1.1M (Robinson Ranch)</td>
                  <td className="p-4 text-slate-600 text-sm">15% Conv ($165K)</td>
                  <td className="p-4 text-slate-600 text-sm">$935,000</td>
                  <td className="p-4 text-slate-600 text-sm">$5,635</td>
                  <td className="p-4 text-slate-600 text-sm">$1,425</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">$7,060</span></td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600 text-sm">$1.5M (Dove Canyon)</td>
                  <td className="p-4 text-slate-600 text-sm">20% Jumbo ($300K)</td>
                  <td className="p-4 text-slate-600 text-sm">$1,200,000</td>
                  <td className="p-4 text-slate-600 text-sm">$7,420</td>
                  <td className="p-4 text-slate-600 text-sm">$1,825</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm font-semibold">$9,245</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-3">
            Rates used: 6.25% wholesale conforming, 6.125% wholesale FHA, 5.875% wholesale VA, 6.625% wholesale jumbo. Taxes at 1.1%, insurance at $175/mo, HOA varies by neighborhood. PMI included where applicable. Source: Lumin Lending rate sheet, February 14, 2026.
          </p>
        </section>

        {/* RSM vs Neighboring Cities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            RSM vs. Neighboring South Orange County Cities: Home Prices &amp; Loan Types
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Rancho Santa Margarita sits in a sweet spot for buyers who want South Orange County schools and amenities without paying coastal premiums. In our RSM closings, many buyers initially consider Mission Viejo or Ladera Ranch before discovering RSM&apos;s superior price-to-amenity ratio.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900">City</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Median Price</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Primary Loan Type</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Avg HOA/Month</th>
                  <th className="text-left p-4 font-semibold text-slate-900">School District</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-slate-50">
                  <td className="p-4 font-medium text-slate-700">Rancho Santa Margarita</td>
                  <td className="p-4 text-slate-600">$850K</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm">Conforming</span></td>
                  <td className="p-4 text-slate-600">$250</td>
                  <td className="p-4 text-slate-600">Capistrano USD</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700">Mission Viejo</td>
                  <td className="p-4 text-slate-600">$1.1M</td>
                  <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Conforming</span></td>
                  <td className="p-4 text-slate-600">$150</td>
                  <td className="p-4 text-slate-600">Saddleback Valley USD</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700">Ladera Ranch</td>
                  <td className="p-4 text-slate-600">$1.3M</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm">Jumbo</span></td>
                  <td className="p-4 text-slate-600">$300</td>
                  <td className="p-4 text-slate-600">Capistrano USD</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700">Lake Forest</td>
                  <td className="p-4 text-slate-600">$1.0M</td>
                  <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Conforming</span></td>
                  <td className="p-4 text-slate-600">$100</td>
                  <td className="p-4 text-slate-600">Saddleback Valley USD</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700">San Juan Capistrano</td>
                  <td className="p-4 text-slate-600">$1.15M</td>
                  <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Conforming</span></td>
                  <td className="p-4 text-slate-600">$125</td>
                  <td className="p-4 text-slate-600">Capistrano USD</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700">Coto de Caza</td>
                  <td className="p-4 text-slate-600">$1.8M</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-sm">Jumbo</span></td>
                  <td className="p-4 text-slate-600">$350</td>
                  <td className="p-4 text-slate-600">Capistrano USD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-3">
            Source: Orange County MLS data, February 2026. Median prices represent single-family homes.
          </p>
        </section>

        {/* Refinance & Equity Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Rancho Santa Margarita Refinance &amp; Home Equity Options: February 2026
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            RSM homeowners who purchased between 2020 and 2024 have built significant equity thanks to 4.2% average annual appreciation. In our Rancho Santa Margarita refinance closings at Lumin Lending, homeowners are tapping equity for renovations, debt consolidation, and investment property down payments. Here is how the main <Link href="/blog/home-equity-california-guide-2026" className="text-blue-600 hover:text-blue-700 underline">home equity programs in California</Link> compare for RSM homeowners:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">Program</th>
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">Best For</th>
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">Rate Type</th>
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">Wholesale Rate Range</th>
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">Max LTV</th>
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">Closing Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 font-medium text-slate-700 text-sm">Rate-and-Term Refinance</td>
                  <td className="p-4 text-slate-600 text-sm">Lower monthly payment</td>
                  <td className="p-4 text-slate-600 text-sm">Fixed 15/30-yr</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-xs">6.0-6.375%</span></td>
                  <td className="p-4 text-slate-600 text-sm">95%</td>
                  <td className="p-4 text-slate-600 text-sm">21-30 days</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700 text-sm">Cash-Out Refinance</td>
                  <td className="p-4 text-slate-600 text-sm">Lump sum equity access</td>
                  <td className="p-4 text-slate-600 text-sm">Fixed 30-yr</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-xs">6.25-6.625%</span></td>
                  <td className="p-4 text-slate-600 text-sm">80%</td>
                  <td className="p-4 text-slate-600 text-sm">25-35 days</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700 text-sm">HELOC</td>
                  <td className="p-4 text-slate-600 text-sm">Flexible draw as needed</td>
                  <td className="p-4 text-slate-600 text-sm">Variable</td>
                  <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">7.5-8.5%</span></td>
                  <td className="p-4 text-slate-600 text-sm">85%</td>
                  <td className="p-4 text-slate-600 text-sm">14-21 days</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700 text-sm">Home Equity Loan</td>
                  <td className="p-4 text-slate-600 text-sm">Fixed lump sum, 2nd lien</td>
                  <td className="p-4 text-slate-600 text-sm">Fixed 10/15/20-yr</td>
                  <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">7.0-8.0%</span></td>
                  <td className="p-4 text-slate-600 text-sm">85%</td>
                  <td className="p-4 text-slate-600 text-sm">21-30 days</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-700 text-sm">Reverse Mortgage (HECM)</td>
                  <td className="p-4 text-slate-600 text-sm">Seniors 62+ tapping equity</td>
                  <td className="p-4 text-slate-600 text-sm">Fixed or Variable</td>
                  <td className="p-4"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-xs">Varies by age</span></td>
                  <td className="p-4 text-slate-600 text-sm">40-75%</td>
                  <td className="p-4 text-slate-600 text-sm">30-45 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-3">
            Source: Lumin Lending wholesale rate sheet, February 14, 2026. Rates shown for 740+ credit scores. Actual rates vary by credit profile and LTV. For <Link href="/blog/reverse-mortgage-california-guide-2026" className="text-blue-600 hover:text-blue-700 underline">reverse mortgage details</Link>, see our California HECM guide.
          </p>
        </section>

        {/* Step-by-Step Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How Do First-Time Buyers Get Pre-Approved in RSM?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            In our RSM closings, the buyers who move fastest are those who complete pre-approval before touring homes. RSM&apos;s competitive market rewards prepared buyers, and a wholesale pre-approval letter from 200+ lenders carries more weight with sellers than a single-bank letter.
          </p>

          <div className="bg-slate-50 rounded-xl p-6">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Check Your Credit Score</h4>
                  <p className="text-slate-600">Minimum 620 for conventional, 580 for FHA. Free credit reports available at <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">AnnualCreditReport.com</a>.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Calculate Your Down Payment</h4>
                  <p className="text-slate-600">For an $850K RSM home: 3% = $25,500, 3.5% FHA = $29,750, 20% = $170,000.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-bold shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Gather Your Documents</h4>
                  <p className="text-slate-600">W-2s (2 years), pay stubs (30 days), bank statements (2 months), ID, and tax returns if self-employed.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-bold shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Submit to Your Wholesale Broker</h4>
                  <p className="text-slate-600">Mo Abdel compares rates from 200+ lenders to find your best RSM mortgage option — one application, multiple offers.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-bold shrink-0">5</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Receive Pre-Approval Letter</h4>
                  <p className="text-slate-600">Strong pre-approval shows RSM sellers you&apos;re a serious, qualified buyer ready to close in 21-30 days.</p>
                </div>
              </li>
            </ol>
          </div>
          <p className="text-sm text-slate-500 mt-3">
            New to the process? Read our <Link href="/blog/first-time-homebuyer-guide-orange-county-2026" className="text-blue-600 hover:text-blue-700 underline">first-time homebuyer guide for Orange County</Link>.
          </p>
        </section>

        {/* Neighborhood Financing Guide 2026 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Rancho Santa Margarita Neighborhood Financing Guide 2026: Dove Canyon, Robinson Ranch, Melinda Heights &amp; More
          </h2>
          <p className="text-lg text-slate-600 mb-4">
            Each RSM neighborhood and adjacent community has distinct price points, HOA structures, and financing considerations. Based on Mo Abdel&apos;s experience helping families buy across every RSM village and surrounding area, here is a detailed breakdown of what buyers face in each neighborhood as of February 2026.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">Dove Canyon</h3>
          <p className="text-slate-600 mb-4">
            Dove Canyon is a guard-gated community adjacent to RSM featuring custom homes on larger lots with canyon and mountain views. Properties range from <strong>$1.3 million to $1.8 million</strong> in February 2026, with most homes offering 3,000-5,000 square feet of living space. The guard-gated entrance and championship golf course create a resort-like atmosphere that commands premium pricing. Most Dove Canyon purchases exceed the conforming loan limit of $1,266,300, requiring <a href="/blog/jumbo-loans-orange-county-2026" className="text-blue-600 hover:underline">jumbo loan financing</a>. In our Dove Canyon closings, buyers typically bring 15-20% down and qualify through conventional jumbo or bank statement programs. HOA fees average $300-$400/month including gate guard service, common area maintenance, and community amenities.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">Coto de Caza Adjacent</h3>
          <p className="text-slate-600 mb-4">
            Coto de Caza is South Orange County&apos;s premier guard-gated community directly adjacent to RSM. While technically a separate community, many RSM buyers also explore Coto de Caza for its larger lots (0.5-2+ acres), equestrian facilities, and private club amenities. Median home prices of <strong>$1.8 million</strong> place Coto firmly in jumbo territory. In our experience, Coto de Caza buyers benefit from wholesale jumbo programs that offer 10-15% down options not available through retail banks. The community&apos;s HOA fees of $300-$450/month are factored into debt-to-income ratios, and buyers should plan for additional Coto de Caza Association membership costs.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">Robinson Ranch</h3>
          <p className="text-slate-600 mb-4">
            Robinson Ranch sits in the northern section of RSM and offers newer single-family homes with modern floor plans. Properties range from <strong>$850,000 to $1.1 million</strong>, placing most purchases within the conforming loan limit. Robinson Ranch attracts young families upgrading from condos and townhomes in the Arroyo Vista or Trabuco Highlands villages. In our Robinson Ranch closings, first-time move-up buyers frequently use conventional loans with 10-15% down, taking advantage of wholesale rates that save $150-$250/month compared to retail bank pricing. The neighborhood&apos;s proximity to O&apos;Neill Regional Park and Santa Margarita Trail System adds lifestyle value that supports long-term appreciation.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">Melinda Heights</h3>
          <p className="text-slate-600 mb-4">
            Melinda Heights is RSM&apos;s premium village, featuring the largest homes and highest price points within the city proper. Properties range from <strong>$900,000 to $1.3 million</strong> as of February 2026, with some estate-style homes approaching $1.5 million. Melinda Heights is one of the few RSM neighborhoods where buyers may need jumbo financing for larger properties. In our experience, approximately 30% of Melinda Heights transactions require jumbo loans. The neighborhood offers elevated views, larger lot sizes, and proximity to RSM Lake and Rec Center. Monthly HOA fees of $225-$300 are among the most reasonable in RSM relative to the amenities included.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">Arroyo Vista &amp; Trabuco Highlands</h3>
          <p className="text-slate-600 mb-4">
            These villages represent RSM&apos;s most affordable entry points, with condos starting at <strong>$550,000</strong> and single-family homes ranging from <strong>$650,000 to $900,000</strong>. <Link href="/blog/first-time-homebuyer-guide-orange-county-2026" className="text-blue-600 hover:text-blue-700 underline">First-time homebuyers</Link> using FHA loans with 3.5% down frequently enter the RSM market through Arroyo Vista or Trabuco Highlands. In our closings, these neighborhoods attract younger families, military families using VA loans, and buyers relocating from apartment living in nearby Irvine or Lake Forest. The lower price points keep monthly payments accessible &mdash; a $700,000 condo with 5% down and a wholesale rate generates a total monthly payment of approximately $4,200-$4,600 including taxes, insurance, and HOA.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">RSM Neighborhood Financing Comparison: February 2026</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left font-semibold border-b text-sm">Neighborhood</th>
                  <th className="py-3 px-4 text-left font-semibold border-b text-sm">Price Range</th>
                  <th className="py-3 px-4 text-left font-semibold border-b text-sm">Typical Loan Type</th>
                  <th className="py-3 px-4 text-left font-semibold border-b text-sm">Avg Down Payment</th>
                  <th className="py-3 px-4 text-left font-semibold border-b text-sm">Monthly HOA</th>
                  <th className="py-3 px-4 text-left font-semibold border-b text-sm">Mello-Roos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b font-medium text-sm">Dove Canyon</td>
                  <td className="py-2 px-4 border-b text-sm">$1.3M-$1.8M</td>
                  <td className="py-2 px-4 border-b text-sm"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-xs">Jumbo</span></td>
                  <td className="py-2 px-4 border-b text-sm">15-20%</td>
                  <td className="py-2 px-4 border-b text-sm">$300-$400</td>
                  <td className="py-2 px-4 border-b text-sm">$1,500-$2,800</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium text-sm">Coto de Caza</td>
                  <td className="py-2 px-4 border-b text-sm">$1.5M-$3.5M</td>
                  <td className="py-2 px-4 border-b text-sm"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-xs">Jumbo</span></td>
                  <td className="py-2 px-4 border-b text-sm">15-25%</td>
                  <td className="py-2 px-4 border-b text-sm">$300-$450</td>
                  <td className="py-2 px-4 border-b text-sm">$1,200-$3,200</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium text-sm">Melinda Heights</td>
                  <td className="py-2 px-4 border-b text-sm">$900K-$1.3M</td>
                  <td className="py-2 px-4 border-b text-sm"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Conforming/Jumbo</span></td>
                  <td className="py-2 px-4 border-b text-sm">10-20%</td>
                  <td className="py-2 px-4 border-b text-sm">$225-$300</td>
                  <td className="py-2 px-4 border-b text-sm">$1,800-$3,000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium text-sm">Robinson Ranch</td>
                  <td className="py-2 px-4 border-b text-sm">$850K-$1.1M</td>
                  <td className="py-2 px-4 border-b text-sm"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Conforming</span></td>
                  <td className="py-2 px-4 border-b text-sm">10-15%</td>
                  <td className="py-2 px-4 border-b text-sm">$200-$275</td>
                  <td className="py-2 px-4 border-b text-sm">$1,500-$2,500</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium text-sm">Trabuco Highlands</td>
                  <td className="py-2 px-4 border-b text-sm">$750K-$950K</td>
                  <td className="py-2 px-4 border-b text-sm"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-xs">Conforming</span></td>
                  <td className="py-2 px-4 border-b text-sm">5-15%</td>
                  <td className="py-2 px-4 border-b text-sm">$175-$250</td>
                  <td className="py-2 px-4 border-b text-sm">$1,200-$2,400</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium text-sm">Arroyo Vista</td>
                  <td className="py-2 px-4 border-b text-sm">$600K-$800K</td>
                  <td className="py-2 px-4 border-b text-sm"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-xs">FHA/Conventional</span></td>
                  <td className="py-2 px-4 border-b text-sm">3.5-10%</td>
                  <td className="py-2 px-4 border-b text-sm">$150-$225</td>
                  <td className="py-2 px-4 border-b text-sm">$1,000-$2,000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium text-sm">Condos/Townhomes</td>
                  <td className="py-2 px-4 border-b text-sm">$550K-$750K</td>
                  <td className="py-2 px-4 border-b text-sm"><span className="bg-slate-100 text-blue-700 px-2 py-1 rounded text-xs">FHA/Conventional</span></td>
                  <td className="py-2 px-4 border-b text-sm">3-10%</td>
                  <td className="py-2 px-4 border-b text-sm">$275-$400</td>
                  <td className="py-2 px-4 border-b text-sm">$800-$1,800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mb-6">
            Source: Orange County MLS data and Mo Abdel&apos;s (Lumin Lending) transaction records, February 2026. Price ranges reflect active listings and recent closed sales. Mello-Roos figures are annual assessments.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="text-slate-900 text-sm">
              <strong>Neighborhood Selection Tip:</strong> In our RSM closings, we help buyers match their budget and lifestyle to the right neighborhood before starting the loan process. A family qualifying for $900,000 has fundamentally different neighborhood options than a family qualifying for $650,000. The right wholesale mortgage program &mdash; whether conventional, FHA, VA, or bank statement &mdash; depends on the target neighborhood&apos;s price point and HOA structure. Call (949) 822-9662 for a personalized neighborhood-by-neighborhood financing analysis.
            </p>
          </div>
        </section>

        {/* People Also Ask Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask: Rancho Santa Margarita Mortgages
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">What is the average mortgage payment in Rancho Santa Margarita?</h3>
              <p className="text-slate-700 mb-2"><strong>The average RSM mortgage payment is $4,800-$5,400/month including taxes, insurance, and HOA fees on the median $850K home.</strong></p>
              <p className="text-slate-600 text-sm">This assumes 20% down, a 6.5% rate, and $250/month HOA. With a wholesale broker rate of 6.0-6.25%, that same payment drops to $4,500-$5,100/month. First-time buyers using FHA with 3.5% down will see payments closer to $5,800-$6,200/month due to mortgage insurance premiums.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Is RSM a good place to buy a house in 2026?</h3>
              <p className="text-slate-700 mb-2"><strong>RSM ranks among the best value communities in South Orange County with top schools, resort amenities, and prices 25-40% below coastal neighbors.</strong></p>
              <p className="text-slate-600 text-sm">Rancho Santa Margarita consistently scores high for family livability. The master-planned community structure keeps property values stable, and median prices have appreciated 4.2% annually over the past five years. RSM buyers get Capistrano USD schools rated 8-9/10 on GreatSchools.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Do I need a jumbo loan to buy in Rancho Santa Margarita?</h3>
              <p className="text-slate-700 mb-2"><strong>Most RSM homes fall below the $1,266,300 conforming limit, so conventional loans work for the majority of buyers.</strong></p>
              <p className="text-slate-600 text-sm">Only homes priced above $1,266,300 require jumbo financing. This typically includes larger single-family homes in Melinda Heights and some Robinson Ranch properties. Conforming loans carry lower rates and more flexible qualification standards than jumbo products.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">How much do I need for a down payment on an RSM home?</h3>
              <p className="text-slate-700 mb-2"><strong>RSM buyers can purchase with as little as $25,500 down (3% conventional) or $29,750 (3.5% FHA) on the median $850K home.</strong></p>
              <p className="text-slate-600 text-sm">VA-eligible buyers can purchase with $0 down. Down payment assistance programs from <a href="https://www.calhfa.ca.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CalHFA</a> can further reduce upfront costs. The most common down payment we see in RSM closings is 10-15%, balancing monthly payment size with upfront cash requirements.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">What are current mortgage rates in Rancho Santa Margarita?</h3>
              <p className="text-slate-700 mb-2"><strong>Wholesale mortgage rates in RSM are currently 0.25-0.5% below retail bank rates, saving buyers $150-$300 per month on the median home.</strong></p>
              <p className="text-slate-600 text-sm">Rates change daily based on market conditions. A wholesale broker provides real-time rate comparisons from 200+ lenders with a single credit pull, ensuring you see the lowest available rate for your specific credit profile and loan scenario. Call (949) 822-9662 for today&apos;s wholesale rates.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Can self-employed buyers get a mortgage in RSM?</h3>
              <p className="text-slate-700 mb-2"><strong>Yes — bank statement loan programs qualify self-employed RSM buyers using 12-24 months of deposits instead of tax returns.</strong></p>
              <p className="text-slate-600 text-sm">Traditional lenders often undercount self-employed income because tax deductions lower adjusted gross income. Bank statement programs use actual business deposits to calculate qualifying income. Read our <Link href="/blog/bank-statement-loans-self-employed-2026" className="text-blue-600 hover:text-blue-700 underline">bank statement loans guide</Link> for full details on eligibility and rates.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">What are Non-QM loan options for RSM buyers?</h3>
              <p className="text-slate-700 mb-2"><strong>Non-QM loans serve RSM buyers who fall outside traditional lending guidelines, including investors, foreign nationals, and recent credit events.</strong></p>
              <p className="text-slate-600 text-sm">Non-QM programs include DSCR investor loans, asset depletion loans for retirees, and 1099-only income programs. These products are available through wholesale channels at significantly better rates than hard money alternatives. See our <Link href="/blog/non-qm-loans-wholesale-broker-2026" className="text-blue-600 hover:text-blue-700 underline">Non-QM loans wholesale guide</Link>.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions About RSM Mortgages
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

        {/* E-E-A-T Authority Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Rancho Santa Margarita Families Trust Mo Abdel &amp; Lumin Lending
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-amber-500" />
                <h3 className="font-semibold text-slate-900">Local RSM Expertise Since 2015</h3>
              </div>
              <p className="text-slate-600">
                In our Rancho Santa Margarita closings, I understand the nuances of each village &mdash; from Melinda Heights appraisal comps to Arroyo Vista HOA reserve requirements and Dove Canyon gate-guard logistics. This local knowledge prevents surprises during escrow and keeps closings on schedule. NMLS #1426884, licensed through Lumin Lending (NMLS #2716106).
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-slate-900">200+ Wholesale Lenders at Lumin Lending</h3>
              </div>
              <p className="text-slate-600">
                Access to over 200 wholesale lending partners through Lumin Lending means I find the right program for every RSM buyer profile. Whether you need a conventional conforming loan, FHA with gift funds, VA with zero down, a <Link href="/blog/jumbo-loans-orange-county-2026" className="text-blue-600 hover:text-blue-700 underline">jumbo loan</Link>, or a bank statement program for self-employment income &mdash; one application covers all options.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-slate-900">Family-Focused Process</h3>
              </div>
              <p className="text-slate-600">
                In our Rancho Santa Margarita closings, we work around your family&apos;s schedule. Evening and weekend availability, digital document submission, and a streamlined process designed for busy parents. Most RSM families complete pre-approval in 48 hours without stepping into an office. Call <a href="tel:+19498229662" className="text-blue-600 hover:text-blue-700 underline">(949) 822-9662</a> to start.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
                <h3 className="font-semibold text-slate-900">South OC Agent Network</h3>
              </div>
              <p className="text-slate-600">
                Strong relationships with Rancho Santa Margarita listing agents and buyer&apos;s agents mean your Lumin Lending pre-approval letter carries weight. Local agents know our track record for on-time closings, which strengthens your offer in competitive multiple-bid situations common in February 2026&apos;s low-inventory market.
              </p>
            </div>
          </div>
        </section>

        {/* External Authority Links Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Official Mortgage &amp; Housing Resources for RSM Buyers
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Make informed decisions using these trusted government and industry resources:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="https://www.hud.gov/topics/buying_a_home" target="_blank" rel="noopener noreferrer" className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors">
              <h4 className="font-semibold text-blue-800 mb-2">HUD Home Buying Guide</h4>
              <p className="text-sm text-blue-600">U.S. Department of Housing &amp; Urban Development — official home buying steps and consumer protections.</p>
            </a>
            <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer" className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors">
              <h4 className="font-semibold text-blue-800 mb-2">CFPB Owning a Home</h4>
              <p className="text-sm text-blue-600">Consumer Financial Protection Bureau — tools, checklists, and unbiased mortgage guidance.</p>
            </a>
            <a href="https://www.fhfa.gov/data/conforming-loan-limit" target="_blank" rel="noopener noreferrer" className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors">
              <h4 className="font-semibold text-blue-800 mb-2">FHFA Loan Limits</h4>
              <p className="text-sm text-blue-600">Federal Housing Finance Agency — current conforming loan limits by county for 2026.</p>
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Buy in Rancho Santa Margarita?
          </h2>
          <p className="text-lg text-slate-200 mb-6 max-w-2xl mx-auto">
            Get wholesale rates from 200+ lenders on FHA, conventional, VA, and bank statement loans for RSM properties. Free consultation with no credit check required for initial quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-slate-50 px-8 py-4">
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
          <h3 className="font-semibold text-slate-900 mb-4">Related Rancho Santa Margarita Mortgage Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/wholesale-mortgage-broker-california-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Wholesale Mortgage Broker California 2026
            </Link>
            <Link href="/blog/home-equity-california-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Home Equity California Guide 2026
            </Link>
            <Link href="/blog/jumbo-loans-orange-county-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Jumbo Loans Orange County 2026
            </Link>
            <Link href="/blog/reverse-mortgage-california-guide-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Reverse Mortgage California Guide 2026
            </Link>
            <Link href="/blog/wholesale-mortgage-broker-orange-county-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Wholesale Mortgage Broker Orange County 2026
            </Link>
            <Link href="/blog/wholesale-vs-retail-mortgage-complete-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Wholesale vs. Retail Mortgage: Complete Guide
            </Link>
            <Link href="/blog/fha-loans-orange-county-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → FHA Loans in Orange County 2026
            </Link>
            <Link href="/blog/va-loans-orange-county-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → VA Loans in Orange County 2026
            </Link>
            <Link href="/blog/bank-statement-loans-self-employed-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Bank Statement Loans for Self-Employed 2026
            </Link>
            <Link href="/blog/non-qm-loans-wholesale-broker-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Non-QM Loans: Wholesale Broker Guide
            </Link>
            <Link href="/blog/mortgage-broker-vs-bank-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Mortgage Broker vs. Bank Comparison
            </Link>
            <Link href="/blog/first-time-homebuyer-guide-orange-county-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → First-Time Homebuyer Guide: Orange County
            </Link>
            <Link href="/blog/wholesale-mortgage-broker-south-orange-county-2026" className="text-blue-600 hover:text-blue-700 hover:underline">
              → South Orange County Mortgage Guide
            </Link>
            <Link href="/guides/orange-county-home-buyer-guide" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Complete OC Home Buyer Guide
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p>
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial advice. Contact a licensed loan officer for personalized guidance. Rates, terms, and programs are subject to change without notice. Updated February 14, 2026.
          </p>
        </section>
      </article>
    </div>
  );
}
