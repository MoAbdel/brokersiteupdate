import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, CheckCircle2, ArrowRight, Globe, DollarSign, TrendingUp, AlertCircle, BookOpen, Users, Shield, FileText, Building2, Landmark, BadgeCheck, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LeadMagnetCTA } from '@/components/lead-magnets/LeadMagnetCTA';

export const metadata: Metadata = {
  title: 'Foreign National Mortgage Loans: How Non-US Citizens Buy Property [2026] | Mo Abdel',
  description: 'Foreign national mortgage loans 2026: How non-US citizens buy property in California and Washington. Visa types, ITIN loans, down payment requirements, documentation guide. Wholesale rates from 200+ lenders. NMLS #1426884.',
  keywords: ['foreign national mortgage loans', 'non-US citizen home loans', 'ITIN mortgage loans 2026', 'foreign national property purchase', 'H-1B visa mortgage', 'non-resident alien home loan', 'foreign buyer mortgage California', 'foreign national mortgage Washington'],
  openGraph: {
    title: 'Foreign National Mortgage Loans: How Non-US Citizens Buy Property [2026]',
    description: 'Complete guide to foreign national mortgage programs through wholesale brokers. Visa requirements, ITIN vs SSN loans, down payments, and documentation for non-US citizen property buyers.',
    url: 'https://www.mothebroker.com/blog/foreign-national-mortgage-loans-2026',
    siteName: 'Mo Abdel - Wholesale Mortgage Broker',
    type: 'article',
    authors: ['Mo Abdel'],
    publishedTime: '2026-02-17T00:00:00Z',
    modifiedTime: '2026-02-22T00:00:00Z',
  },
  authors: [{ name: 'Mo Abdel, NMLS #1426884' }],
  alternates: {
    canonical: 'https://www.mothebroker.com/blog/foreign-national-mortgage-loans-2026',
  },
};

const faqData = [
  {
    question: "Can a foreign national get a mortgage in the United States?",
    answer: "Yes. Foreign nationals can obtain mortgage financing in the United States through non-QM (non-qualified mortgage) loan programs offered by specialty lenders. These programs are designed specifically for non-US citizens, including both visa holders residing in the US and non-resident foreign nationals living abroad. A wholesale mortgage broker accesses these programs from multiple lenders, comparing rates and terms to find the best fit for each borrower's visa status, documentation, and property type."
  },
  {
    question: "What visa types qualify for a foreign national mortgage loan?",
    answer: "Most foreign national mortgage programs accept H-1B, H-4, L-1, L-2, O-1, E-1, E-2, TN, G-series, and other valid work or investor visas. Some programs also accept DACA recipients and asylum applicants with valid Employment Authorization Documents (EADs). Non-resident foreign nationals without US visas can also qualify under separate foreign national programs with higher down payment requirements. Each lender has different visa acceptance policies, which is why working with a broker who compares multiple programs is critical."
  },
  {
    question: "What is the minimum down payment for a foreign national mortgage?",
    answer: "Down payment requirements vary based on residency status: US visa holders with SSN typically need 20-25% down, ITIN borrowers typically need 20-25% down, and non-resident foreign nationals (no US visa or residency) typically need 25-30% down. Some lenders offer programs with lower down payments for borrowers with strong compensating factors such as high credit scores, significant reserves, or lower loan amounts. Higher down payments generally unlock better interest rates."
  },
  {
    question: "Do I need a Social Security Number to buy property in the US?",
    answer: "No. Foreign nationals without a Social Security Number can use an Individual Taxpayer Identification Number (ITIN) to purchase property. ITIN loans are a specific category of non-QM lending designed for borrowers who file US taxes but are not eligible for an SSN. If you do not have either an SSN or ITIN, non-resident foreign national programs allow you to purchase using your passport and home country identification, though these programs typically require larger down payments and carry higher interest rates."
  },
  {
    question: "What is the difference between an ITIN loan and a foreign national loan?",
    answer: "An ITIN loan is for borrowers who live and work in the United States, file US taxes using an Individual Taxpayer Identification Number, but do not have a Social Security Number. A foreign national loan is for non-resident borrowers who live primarily outside the United States and may not have any US tax filing history. ITIN loans typically offer lower rates and down payments because the borrower has US-based income and tax history. Foreign national loans carry higher rates and down payments because the borrower's primary income and credit history are outside the US."
  },
  {
    question: "Can a foreign national buy an investment property in the US?",
    answer: "Yes. Foreign national mortgage programs allow the purchase of primary residences, second homes, and investment properties. Investment property purchases by non-resident foreign nationals typically require 30-35% down payment and may carry interest rates 0.5-1.0% higher than primary residence purchases. Some investors combine a foreign national purchase loan with a DSCR program if the property generates rental income, using the property's cash flow to qualify rather than the borrower's personal income."
  },
  {
    question: "What documentation do foreign nationals need to apply for a US mortgage?",
    answer: "Documentation requirements vary by program type. Common requirements include: valid passport, US visa (if applicable), ITIN or SSN, bank statements (2-3 months from US or foreign accounts), proof of income (pay stubs, employment letter, or business documentation), foreign credit report or US credit report if established, proof of funds for down payment and closing costs, and sometimes two references from financial institutions. Non-resident foreign nationals may also need a letter from a foreign bank and proof of address in their home country."
  },
  {
    question: "Do foreign national mortgage loans have higher interest rates?",
    answer: "Yes, foreign national mortgage rates are generally higher than conventional conforming loan rates due to the non-QM classification and additional risk factors. US visa holders with SSN and established credit typically see rates 0.5-1.5% above conventional rates. ITIN borrowers typically see rates 1.0-2.0% above conventional rates. Non-resident foreign nationals typically see rates 1.5-3.0% above conventional rates. A wholesale broker who compares rates across multiple foreign national lenders can significantly reduce this premium."
  },
  {
    question: "Can I use foreign income to qualify for a US mortgage?",
    answer: "Yes. Many foreign national programs accept foreign income documentation including employment contracts, pay stubs, bank statements, and tax returns from the borrower's home country. Some lenders require the documents to be translated into English by a certified translator. For self-employed foreign nationals, business bank statements and CPA-prepared financial statements are typically accepted. The key difference from conventional lending is that lenders who specialize in foreign national loans have underwriters experienced in evaluating international income documentation."
  },
  {
    question: "What credit history do I need as a foreign national to get a US mortgage?",
    answer: "Credit requirements depend on the program type. If you have established US credit, a minimum FICO score of 660-700 is typically required. If you have no US credit history, many foreign national programs accept alternative credit: international credit reports from services like Nova Credit, a letter from a foreign bank showing satisfactory account history, 12 months of on-time rent payments, and 12 months of utility payment history. Non-resident foreign nationals with no US presence typically use their home country credit report."
  },
  {
    question: "Are foreign national mortgage loans available in California and Washington?",
    answer: "Yes. Both California and Washington are among the most active states for foreign national mortgage lending due to their large international populations, strong real estate markets, and high property values. California's tech sector attracts H-1B and L-1 visa holders who represent the largest segment of foreign national borrowers. Washington's Seattle metro area similarly attracts international tech workers. Mo Abdel at Lumin Lending is licensed in both states and regularly closes foreign national loans across both markets."
  },
  {
    question: "Can a foreign national refinance a US property?",
    answer: "Yes. Foreign nationals who already own US property can refinance using the same non-QM programs available for purchase. Rate-and-term refinances, cash-out refinances, and debt consolidation refinances are all available. The documentation requirements and down payment (equity) requirements mirror the purchase programs. Some foreign nationals who originally purchased with cash (common for non-resident buyers) later refinance to access equity while maintaining ownership of the US property."
  }
];

export default function ForeignNationalMortgageLoans2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Foreign National Mortgage Loans: How Non-US Citizens Buy Property [2026]",
            "author": {
              "@type": "Person",
              "name": "Mo Abdel",
              "identifier": "NMLS #1426884",
              "knowsAbout": ["Foreign National Mortgages", "ITIN Loans", "Non-QM Mortgages", "International Buyer Financing", "Wholesale Mortgage Lending", "Visa-Based Mortgage Programs"]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumin Lending",
              "identifier": "NMLS #2716106",
              "url": "https://www.mothebroker.com"
            },
            "datePublished": "2026-02-17",
            "dateModified": "2026-02-22",
            "mainEntity": {
              "@type": "WebPage",
              "@id": "https://www.mothebroker.com/blog/foreign-national-mortgage-loans-2026",
              "significantLink": [
                "https://www.irs.gov/individuals/individual-taxpayer-identification-number",
                "https://www.consumerfinance.gov/",
                "https://www.uscis.gov/"
              ]
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
              { "@type": "ListItem", "position": 3, "name": "Foreign National Mortgage Loans 2026", "item": "https://www.mothebroker.com/blog/foreign-national-mortgage-loans-2026" }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 rounded-full px-4 py-1.5 mb-6 border border-emerald-500/30">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Foreign National Financing</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Foreign National Mortgage Loans: How Non-US Citizens Buy Property in 2026
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              According to Mo Abdel, NMLS #1426884, foreign nationals purchase billions of dollars in US real estate annually, yet most major banks refuse to offer mortgage programs to non-US citizens. The National Association of Realtors reports that international buyers purchased $42 billion in US residential real estate in the 12-month period ending March 2025, a 13% increase from the prior year, with California and Washington ranking among the top destination states. Through the wholesale channel, non-QM lenders provide specialized foreign national mortgage programs that banks do not offer. Here is every qualification path, visa category, documentation requirement, down payment structure, and rate comparison for foreign nationals buying property in California and Washington in 2026.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Foreign National Quote
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

        {/* Bing Power Block */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Are Foreign National Mortgage Loans and Why Do Banks Rarely Offer Them?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Foreign national mortgage loans are specialized financing programs designed for non-US citizens who want to purchase or refinance real estate in the United States. These loans fall under the <strong>non-QM (non-qualified mortgage)</strong> category because they do not conform to the standard lending guidelines set by Fannie Mae and Freddie Mac, which require US citizenship or permanent residency, Social Security Numbers, and domestic credit histories. Because foreign national loans cannot be sold to government-sponsored enterprises, most traditional banks and credit unions do not offer them. The risk profile, documentation complexity, and inability to sell these loans on the secondary market make them unprofitable for retail banking operations.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            This is where the <strong>wholesale mortgage channel</strong> provides a decisive advantage. Specialty non-QM lenders have built entire business lines around foreign national lending, developing underwriting expertise in international income verification, foreign credit analysis, and cross-border documentation. These lenders distribute their programs exclusively through wholesale mortgage brokers, not directly to consumers. A wholesale broker like Mo Abdel at Lumin Lending accesses foreign national programs from dozens of these specialty lenders, comparing rates, down payment requirements, visa acceptance policies, and documentation standards to find the best program for each individual borrower.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            The foreign national lending market serves three distinct borrower categories, each with different qualification paths, documentation requirements, and pricing structures. Understanding which category applies to your situation determines your loan options, rate, and required down payment.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              Three Categories of Foreign National Borrowers
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-emerald-100">
                <p className="text-sm font-bold text-emerald-800 mb-2">Category 1: Visa Holders with SSN</p>
                <p className="text-sm text-slate-600 mb-2">Non-US citizens residing in the US on valid work or investor visas who have obtained a Social Security Number.</p>
                <p className="text-xs text-emerald-700"><strong>Down payment:</strong> 20-25%</p>
                <p className="text-xs text-emerald-700"><strong>Rate premium:</strong> 0.5-1.5% above conventional</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-emerald-100">
                <p className="text-sm font-bold text-emerald-800 mb-2">Category 2: ITIN Borrowers</p>
                <p className="text-sm text-slate-600 mb-2">Individuals living and working in the US who file taxes with an Individual Taxpayer Identification Number instead of SSN.</p>
                <p className="text-xs text-emerald-700"><strong>Down payment:</strong> 20-25%</p>
                <p className="text-xs text-emerald-700"><strong>Rate premium:</strong> 1.0-2.0% above conventional</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-emerald-100">
                <p className="text-sm font-bold text-emerald-800 mb-2">Category 3: Non-Resident Foreign Nationals</p>
                <p className="text-sm text-slate-600 mb-2">Individuals who live primarily outside the US with no US visa, SSN, or ITIN. Purchasing as investment or second home.</p>
                <p className="text-xs text-emerald-700"><strong>Down payment:</strong> 25-30%+</p>
                <p className="text-xs text-emerald-700"><strong>Rate premium:</strong> 1.5-3.0% above conventional</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4">8 Key Facts About Foreign National Mortgage Loans</h3>
          <ol className="space-y-3 text-slate-600 mb-6">
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">1</span>
              <span><strong>Non-QM classification</strong> &mdash; foreign national loans are classified as non-qualified mortgages because they do not meet Fannie Mae or Freddie Mac guidelines for citizenship, SSN, or domestic credit requirements</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">2</span>
              <span><strong>Banks rarely offer them</strong> &mdash; because foreign national loans cannot be sold on the secondary market, most banks do not originate them; the programs exist primarily in the wholesale channel through specialty non-QM lenders</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">3</span>
              <span><strong>Multiple visa categories qualify</strong> &mdash; H-1B, L-1, O-1, E-2, TN, and most other valid US work or investor visas are accepted by foreign national lending programs</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">4</span>
              <span><strong>SSN not required</strong> &mdash; borrowers can qualify with an ITIN (Individual Taxpayer Identification Number) or, for non-residents, with no US tax identification at all</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">5</span>
              <span><strong>Foreign income accepted</strong> &mdash; many programs accept income documentation from the borrower&apos;s home country, including employment contracts, bank statements, and foreign tax returns</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">6</span>
              <span><strong>Alternative credit accepted</strong> &mdash; borrowers without US credit history can use international credit reports, bank reference letters, and payment history from rent and utilities</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">7</span>
              <span><strong>All property types eligible</strong> &mdash; primary residences, second homes, and investment properties are all available under foreign national programs, with different down payment and rate structures for each</span>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">8</span>
              <span><strong>Loan amounts up to $3-5 million</strong> &mdash; foreign national programs are available for both conforming and jumbo loan amounts, with some lenders offering programs up to $5 million for qualified borrowers</span>
            </li>
          </ol>
        </section>

        {/* Visa Type Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Visa Types That Qualify for Foreign National Mortgage Programs in California and Washington
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The visa type held by a foreign national borrower directly impacts which mortgage programs are available, what documentation is required, and what terms the borrower receives. Some visa categories are treated similarly to US citizens by certain lenders (particularly H-1B and L-1 holders with established US credit), while others require more specialized programs. Below is a comprehensive breakdown of how each major visa category is treated in mortgage lending.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-x-auto mb-6">
            <table className="w-full min-w-[800px]">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900 border-b">Visa Type</th>
                  <th className="text-left p-4 font-semibold text-slate-900 border-b">Description</th>
                  <th className="text-left p-4 font-semibold text-slate-900 border-b">Typical Down Payment</th>
                  <th className="text-left p-4 font-semibold text-slate-900 border-b">Credit Requirement</th>
                  <th className="text-left p-4 font-semibold text-slate-900 border-b">Income Documentation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium text-slate-900">H-1B</td>
                  <td className="p-4 text-slate-600">Specialty occupation worker</td>
                  <td className="p-4 text-slate-600">3-20%*</td>
                  <td className="p-4 text-slate-600">US FICO 660+</td>
                  <td className="p-4 text-slate-600">W-2, pay stubs, employment letter</td>
                </tr>
                <tr className="border-b bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900">L-1</td>
                  <td className="p-4 text-slate-600">Intracompany transferee</td>
                  <td className="p-4 text-slate-600">5-20%*</td>
                  <td className="p-4 text-slate-600">US FICO 660+</td>
                  <td className="p-4 text-slate-600">W-2, pay stubs, transfer letter</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium text-slate-900">O-1</td>
                  <td className="p-4 text-slate-600">Extraordinary ability</td>
                  <td className="p-4 text-slate-600">10-25%</td>
                  <td className="p-4 text-slate-600">US FICO 680+</td>
                  <td className="p-4 text-slate-600">Tax returns, 1099s, contracts</td>
                </tr>
                <tr className="border-b bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900">E-2</td>
                  <td className="p-4 text-slate-600">Treaty investor</td>
                  <td className="p-4 text-slate-600">20-25%</td>
                  <td className="p-4 text-slate-600">US FICO 680+ or alt credit</td>
                  <td className="p-4 text-slate-600">Business returns, bank statements</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium text-slate-900">TN</td>
                  <td className="p-4 text-slate-600">USMCA professional (Canada/Mexico)</td>
                  <td className="p-4 text-slate-600">5-20%*</td>
                  <td className="p-4 text-slate-600">US FICO 660+</td>
                  <td className="p-4 text-slate-600">W-2, pay stubs, TN approval</td>
                </tr>
                <tr className="border-b bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900">E-1</td>
                  <td className="p-4 text-slate-600">Treaty trader</td>
                  <td className="p-4 text-slate-600">20-25%</td>
                  <td className="p-4 text-slate-600">US FICO 680+ or alt credit</td>
                  <td className="p-4 text-slate-600">Business returns, bank statements</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium text-slate-900">G-series</td>
                  <td className="p-4 text-slate-600">International organization</td>
                  <td className="p-4 text-slate-600">15-25%</td>
                  <td className="p-4 text-slate-600">US FICO 680+ or alt credit</td>
                  <td className="p-4 text-slate-600">Employment letter, bank statements</td>
                </tr>
                <tr className="border-b bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900">ITIN (no visa)</td>
                  <td className="p-4 text-slate-600">Tax filer without SSN</td>
                  <td className="p-4 text-slate-600">20-25%</td>
                  <td className="p-4 text-slate-600">Alt credit or non-traditional</td>
                  <td className="p-4 text-slate-600">Tax returns, bank statements, pay stubs</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-900">Non-Resident (no US presence)</td>
                  <td className="p-4 text-slate-600">Foreign buyer living abroad</td>
                  <td className="p-4 text-slate-600">25-30%+</td>
                  <td className="p-4 text-slate-600">Foreign credit report or bank references</td>
                  <td className="p-4 text-slate-600">Foreign income docs, bank statements</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mb-6">
            *H-1B, L-1, and TN visa holders with established US credit and employment history may qualify for conventional or FHA programs at standard down payment levels. Qualification depends on visa expiration date, likelihood of renewal, and lender-specific policies.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            The critical distinction for H-1B, L-1, and TN visa holders is that <strong>some conventional lenders do treat these visa categories similarly to permanent residents</strong> if the borrower has an SSN, established US credit, and stable employment. This means these visa holders may qualify for conventional loans with as little as 3-5% down payment, or FHA loans with 3.5% down. However, many lenders add overlays or restrictions based on visa expiration dates, creating a patchwork of acceptance policies. A wholesale broker compares both conventional and non-QM options to determine which path offers the best terms for each borrower.
          </p>
        </section>

        {/* Foreign National vs Conventional Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Foreign National Mortgage vs Conventional Loan: Complete Requirements Comparison
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Understanding how foreign national mortgage requirements differ from standard conventional loan requirements helps borrowers set realistic expectations for the application process. The table below provides a side-by-side comparison of the key qualification criteria, documentation standards, and terms for each loan type.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-x-auto mb-6">
            <table className="w-full min-w-[700px]">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900 border-b">Requirement</th>
                  <th className="text-left p-4 font-semibold text-slate-900 border-b">Conventional Loan</th>
                  <th className="text-left p-4 font-semibold text-slate-900 border-b">Foreign National (Visa + SSN)</th>
                  <th className="text-left p-4 font-semibold text-slate-900 border-b">Foreign National (Non-Resident)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium text-slate-900">Citizenship</td>
                  <td className="p-4 text-slate-600">US citizen or permanent resident</td>
                  <td className="p-4 text-slate-600">Valid US work/investor visa</td>
                  <td className="p-4 text-slate-600">Foreign passport required</td>
                </tr>
                <tr className="border-b bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900">Tax ID</td>
                  <td className="p-4 text-slate-600">SSN required</td>
                  <td className="p-4 text-slate-600">SSN or ITIN</td>
                  <td className="p-4 text-slate-600">None required</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium text-slate-900">Down Payment</td>
                  <td className="p-4 text-slate-600">3-20%</td>
                  <td className="p-4 text-slate-600">20-25%</td>
                  <td className="p-4 text-slate-600">25-30%+</td>
                </tr>
                <tr className="border-b bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900">Credit Score</td>
                  <td className="p-4 text-slate-600">620+ FICO</td>
                  <td className="p-4 text-slate-600">660-700+ FICO</td>
                  <td className="p-4 text-slate-600">Foreign credit or bank references</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium text-slate-900">Income Verification</td>
                  <td className="p-4 text-slate-600">W-2, tax returns, pay stubs</td>
                  <td className="p-4 text-slate-600">US or foreign income docs</td>
                  <td className="p-4 text-slate-600">Foreign income documentation</td>
                </tr>
                <tr className="border-b bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900">Interest Rates</td>
                  <td className="p-4 text-slate-600">Market conventional rates</td>
                  <td className="p-4 text-slate-600">+0.5-1.5% above conventional</td>
                  <td className="p-4 text-slate-600">+1.5-3.0% above conventional</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium text-slate-900">Loan Terms</td>
                  <td className="p-4 text-slate-600">15, 20, or 30-year fixed</td>
                  <td className="p-4 text-slate-600">30-year fixed or ARM</td>
                  <td className="p-4 text-slate-600">30-year fixed or ARM</td>
                </tr>
                <tr className="border-b bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900">Max Loan Amount</td>
                  <td className="p-4 text-slate-600">$1,209,750 (2026 conforming)</td>
                  <td className="p-4 text-slate-600">Up to $3-5 million</td>
                  <td className="p-4 text-slate-600">Up to $3-5 million</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium text-slate-900">Property Types</td>
                  <td className="p-4 text-slate-600">1-4 unit residential</td>
                  <td className="p-4 text-slate-600">1-4 unit, condos, some commercial</td>
                  <td className="p-4 text-slate-600">1-4 unit, condos</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-900">Occupancy</td>
                  <td className="p-4 text-slate-600">Primary, second home, investment</td>
                  <td className="p-4 text-slate-600">Primary, second home, investment</td>
                  <td className="p-4 text-slate-600">Second home or investment only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ITIN vs SSN Deep Dive */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            ITIN Loans vs SSN-Based Foreign National Loans: Understanding the Difference
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            One of the most common points of confusion in foreign national lending is the distinction between ITIN-based mortgage programs and SSN-based foreign national programs. While both serve non-US citizens, they target fundamentally different borrower profiles with different qualification standards, rates, and documentation requirements.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="font-semibold text-emerald-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                ITIN Mortgage Programs
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Borrower profile:</strong> Lives and works in the US, files US taxes with an ITIN instead of SSN</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Tax history required:</strong> Typically 2 years of US tax returns filed with ITIN</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Income verification:</strong> US-based income via tax returns, bank statements, pay stubs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Credit:</strong> Non-traditional credit accepted (rent, utilities, phone bills)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Down payment:</strong> 20-25% typical</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Occupancy:</strong> Primary residence, second home, or investment</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-blue-600" />
                SSN-Based Foreign National Programs
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Borrower profile:</strong> Non-US citizen with valid work/investor visa and SSN</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Tax history:</strong> US tax returns preferred but not always required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Income verification:</strong> W-2, pay stubs, employment verification letter</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Credit:</strong> US FICO score required (660-700+ minimum)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Down payment:</strong> 3-25% depending on program and visa type</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Occupancy:</strong> Primary residence, second home, or investment</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            The practical implication for borrowers is significant: <strong>an H-1B visa holder with an SSN and two years of US credit history may qualify for a conventional loan with 5% down payment</strong>, while an ITIN borrower in a similar financial position typically needs 20-25% down through a non-QM program. The SSN opens the door to conventional and government-backed loan programs (FHA, VA for eligible visa holders), while ITIN borrowers are limited to non-QM programs. This is why visa holders who are eligible for an SSN should obtain one before applying for a mortgage &mdash; it dramatically expands their loan options and reduces their costs.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Important: How to Obtain an ITIN for Mortgage Purposes
            </h3>
            <p className="text-slate-600 mb-3">
              An Individual Taxpayer Identification Number (ITIN) is issued by the <a href="https://www.irs.gov/individuals/individual-taxpayer-identification-number" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Internal Revenue Service (IRS)</a> to individuals who need a US tax identification number but are not eligible for an SSN. To obtain an ITIN:
            </p>
            <ol className="list-decimal pl-6 space-y-1 text-slate-600">
              <li>Complete IRS Form W-7 (Application for IRS Individual Taxpayer Identification Number)</li>
              <li>Attach a federal income tax return (or qualify for an exception)</li>
              <li>Provide original identification documents or certified copies (passport, national ID)</li>
              <li>Submit by mail or in person at an IRS Taxpayer Assistance Center or through a Certified Acceptance Agent</li>
              <li>Processing time is typically 7-11 weeks</li>
            </ol>
            <p className="text-sm text-amber-700 mt-3">
              <strong>Pro tip from Mo Abdel:</strong> Start the ITIN application process well before you plan to purchase property. Having an ITIN with at least one year of tax filing history strengthens your mortgage application significantly.
            </p>
          </div>
        </section>

        {/* Documentation Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Documentation Requirements for Foreign National Mortgage Applications
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The documentation required for a foreign national mortgage application is more extensive than a standard conventional loan application. Gathering all documents before beginning the application process prevents delays, expired rate locks, and failed closings. Below is a comprehensive documentation checklist organized by borrower category.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-emerald-600" />
              Universal Requirements (All Foreign National Borrowers)
            </h3>
            <ul className="grid md:grid-cols-2 gap-2 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span>Valid passport (unexpired)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span>Proof of funds for down payment and closing costs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span>2-3 months bank statements (US or foreign accounts)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span>Purchase contract (for purchase transactions)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span>Completed loan application (Form 1003 / URLA)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span>Authorization to pull credit (if US credit exists)</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-3 text-sm">Visa Holders (SSN)</h4>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li>&bull; US visa (front and back)</li>
                <li>&bull; I-94 arrival/departure record</li>
                <li>&bull; Social Security card</li>
                <li>&bull; W-2s (2 years)</li>
                <li>&bull; Pay stubs (30 days)</li>
                <li>&bull; Employment verification letter</li>
                <li>&bull; US tax returns (2 years, if filed)</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-3 text-sm">ITIN Borrowers</h4>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li>&bull; ITIN assignment letter</li>
                <li>&bull; US tax returns filed with ITIN (2 years)</li>
                <li>&bull; Bank statements (12-24 months)</li>
                <li>&bull; Pay stubs or income evidence</li>
                <li>&bull; Non-traditional credit references</li>
                <li>&bull; Rental payment history (12 months)</li>
                <li>&bull; Utility payment history (12 months)</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-3 text-sm">Non-Resident Foreign Nationals</h4>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li>&bull; Passport (certified translation if needed)</li>
                <li>&bull; Foreign bank reference letter</li>
                <li>&bull; Foreign credit report (if available)</li>
                <li>&bull; Foreign income documentation</li>
                <li>&bull; Proof of address in home country</li>
                <li>&bull; Employment/business verification</li>
                <li>&bull; Two financial institution references</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            <strong>Critical documentation note:</strong> All foreign-language documents must be translated into English by a certified translator. Some lenders accept borrower-prepared translations with a certification statement, while others require professional translation services. Currency conversions for foreign bank statements are typically done at the exchange rate on the statement date. A wholesale broker who regularly processes foreign national applications knows which lenders have the most flexible documentation standards and can steer borrowers away from lenders with overly strict translation or documentation requirements.
          </p>
        </section>

        {/* California and Washington Specifics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Foreign National Property Buying: California and Washington Market Specifics
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            California and Washington are among the top states for international real estate investment in the United States. Both states have large international populations, strong employment markets that attract visa holders, and premium real estate markets that appeal to foreign investors. Here are the state-specific considerations that foreign national borrowers should understand.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="font-semibold text-emerald-900 mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-600" />
                California Foreign National Market
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li><strong>2026 conforming loan limit:</strong> $1,209,750 (high-balance areas). Foreign national non-QM programs go up to $3-5 million.</li>
                <li><strong>Top international buyer markets:</strong> Los Angeles, Orange County, San Francisco Bay Area, San Diego, Sacramento.</li>
                <li><strong>Property tax:</strong> California Proposition 13 caps property tax increases at 2% per year on assessed value, benefiting long-term foreign investors.</li>
                <li><strong>Title holding:</strong> Foreign nationals commonly hold title through an LLC or revocable trust. California allows both.</li>
                <li><strong>FIRPTA withholding:</strong> Foreign sellers are subject to a 15% federal withholding and 3.33% California withholding on the sale of US real estate under FIRPTA rules.</li>
                <li><strong>High H-1B concentration:</strong> Silicon Valley, Irvine, San Diego, and LA tech corridors have among the highest H-1B populations nationally.</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                Washington Foreign National Market
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li><strong>2026 conforming loan limit:</strong> $1,209,750 (King/Snohomish County). Foreign national programs exceed this significantly.</li>
                <li><strong>Top international buyer markets:</strong> Bellevue, Redmond, Kirkland, Sammamish, Mercer Island, Seattle.</li>
                <li><strong>No state income tax:</strong> Washington has no state income tax, making it attractive for high-income foreign workers and investors.</li>
                <li><strong>Property tax:</strong> Rates vary by county; King County averages approximately 0.9% of assessed value annually.</li>
                <li><strong>Real Estate Excise Tax (REET):</strong> Washington charges REET on property sales ranging from 1.1% to 3.0% based on sale price.</li>
                <li><strong>Tech sector demand:</strong> Amazon, Microsoft, Meta, and Google campuses drive strong H-1B and L-1 visa demand in the Eastside corridor.</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            Both California and Washington have active real estate markets where foreign national borrowers compete with domestic buyers. Having <strong>pre-approval from a lender experienced in foreign national lending</strong> is critical for competitive offers. Many listing agents and sellers are unfamiliar with foreign national mortgage programs and may view offers from non-US citizens as risky. A pre-approval letter from a reputable lender, combined with a larger earnest money deposit, helps foreign national buyers compete effectively.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-emerald-600" />
              FIRPTA: What Foreign National Property Buyers Must Know
            </h3>
            <p className="text-slate-600 mb-3">
              The <strong>Foreign Investment in Real Property Tax Act (FIRPTA)</strong> requires a withholding tax when foreign nationals sell US real estate. While FIRPTA does not prevent foreign nationals from purchasing property, understanding the eventual tax implications is important for investment planning:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                <span><strong>Federal withholding:</strong> 15% of the gross sale price is withheld at closing when a foreign national sells US real property</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                <span><strong>California withholding:</strong> Additional 3.33% state withholding applies for California property</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                <span><strong>Tax treaty benefits:</strong> Some countries have tax treaties with the US that may reduce withholding obligations</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                <span><strong>Withholding certificate:</strong> An IRS withholding certificate (Form 8288-B) can reduce or eliminate withholding if the actual tax liability is lower than the withheld amount</span>
              </li>
            </ul>
            <p className="text-sm text-slate-500 mt-3">
              FIRPTA applies to the eventual sale of the property, not the purchase. Foreign national buyers should consult with a tax advisor familiar with international taxation before purchasing US real estate.
            </p>
          </div>
        </section>

        {/* Data Hub - Why Wholesale for Foreign National */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Wholesale Mortgage Brokers Deliver Better Foreign National Loan Outcomes
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            The foreign national mortgage market is where the wholesale broker advantage is most pronounced. Here is why the broker channel consistently outperforms direct lender and retail bank channels for non-US citizen borrowers:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                The Wholesale Broker Advantage
              </h3>
              <ol className="space-y-3 text-slate-600">
                <li><strong>1. Access to programs that don&apos;t exist at banks.</strong> Most foreign national mortgage programs are not available through retail banks. They exist exclusively in the wholesale channel through specialty non-QM lenders. A borrower who walks into a bank branch asking for a foreign national loan is typically told &ldquo;we don&apos;t offer that program&rdquo; and sent away.</li>
                <li><strong>2. Lender-specific visa acceptance policies vary widely.</strong> One lender may accept E-2 treaty investor visas while another rejects them. One may require 12 months remaining on an H-1B visa while another requires 6 months. A broker who works with dozens of foreign national lenders knows exactly which lender accepts each visa type.</li>
                <li><strong>3. Documentation flexibility differs by lender.</strong> Some lenders require certified translations of all foreign documents while others accept borrower-prepared translations. Some require foreign credit reports while others accept bank reference letters. The broker matches the borrower&apos;s available documentation with the lender whose requirements are the best fit.</li>
                <li><strong>4. Rate shopping across multiple lenders.</strong> Foreign national loan rates vary significantly between lenders. The spread between the highest and lowest rate for the same borrower profile can exceed 2 percentage points. A broker obtains quotes from multiple lenders and presents the most competitive option.</li>
              </ol>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-600" />
                Common Foreign National Loan Challenges Brokers Solve
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Visa expiration timing:</strong> Borrower&apos;s visa expires in 4 months. Most lenders require 6-12 months remaining. Broker finds lender with 3-month minimum or uses renewal documentation to satisfy requirement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>No US credit history:</strong> New H-1B arrival with no US credit. Broker places with lender accepting international credit reports from Nova Credit or bank reference letters from home country.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Mixed income sources:</strong> Borrower has both US and foreign income. Broker identifies lender that allows blending domestic and international income for qualification.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Large foreign deposits:</strong> Down payment funds sourced from overseas accounts. Broker knows which lenders accept foreign-sourced funds with standard documentation vs. those requiring additional seasoning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Entity vesting:</strong> Foreign national wants to hold property in an LLC. Broker identifies which foreign national programs allow entity vesting and which require individual ownership.</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            In Mo Abdel&apos;s experience at Lumin Lending, foreign national borrowers who approach a single bank or retail lender are denied at significantly higher rates than those who work with a wholesale broker. The denial often occurs not because the borrower is unqualified, but because that specific lender does not offer a program matching the borrower&apos;s visa type, credit profile, or documentation package. A wholesale broker eliminates this problem by matching the borrower to the right lender from the start.
          </p>
        </section>

        {/* PAA Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            People Also Ask: Foreign National Mortgage Loans
          </h2>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Can a foreign national get a 30-year fixed mortgage in the US?</h3>
              <p className="text-slate-600">Yes. Most foreign national non-QM programs offer 30-year fixed-rate mortgages as a standard option. Adjustable-rate mortgages (ARMs) with 5/1 or 7/1 structures are also available, typically at lower initial rates. The 30-year fixed option provides payment stability for foreign nationals who plan to hold the property long-term, while ARMs benefit those who anticipate selling or refinancing within the initial fixed-rate period.</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Do foreign national loans require private mortgage insurance (PMI)?</h3>
              <p className="text-slate-600">No. Foreign national non-QM loans do not typically require PMI because the minimum down payment requirements (20-30%) already exceed the threshold at which PMI is required on conventional loans. The higher down payment requirement effectively replaces the risk mitigation that PMI provides on lower-down-payment conventional loans. This is one of the few advantages of the higher down payment requirement &mdash; no ongoing PMI premium reduces the monthly payment.</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Can I use gift funds for the down payment on a foreign national loan?</h3>
              <p className="text-slate-600">Gift fund policies vary by lender. Some foreign national programs allow gift funds from immediate family members for a portion of the down payment, while others require all funds to come from the borrower&apos;s own accounts. When gift funds are allowed, a gift letter stating the funds are a gift with no repayment obligation is required. Gift funds from foreign sources require additional documentation including the donor&apos;s bank statements and transfer records. A wholesale broker identifies which lenders have the most favorable gift fund policies.</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">How long does it take to close a foreign national mortgage loan?</h3>
              <p className="text-slate-600">Foreign national mortgage closings typically take 30-45 days from application to funding, which is slightly longer than the 25-35 day timeline for conventional loans. The additional time accounts for international document collection, translation and verification, foreign credit evaluation, and source of funds documentation. The primary delay factor is usually document collection from international sources. Having all documentation prepared before application submission can reduce the timeline to 25-30 days.</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Can a foreign national buy a condo in the US?</h3>
              <p className="text-slate-600">Yes, condominiums are eligible property types under most foreign national mortgage programs. However, the condo project must meet the lender&apos;s project approval requirements, which may include maximum foreign ownership concentration limits (some lenders restrict financing in projects where more than 35-50% of units are foreign-owned), adequate reserve funding, and insurance requirements. Warrantable condos that meet Fannie Mae project guidelines are accepted by most foreign national lenders.</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Can a foreign national get a mortgage for a multi-family property?</h3>
              <p className="text-slate-600">Yes. Foreign national programs generally allow financing for 1-4 unit residential properties, including duplexes, triplexes, and fourplexes. Multi-family properties purchased as investment properties typically require 25-30% down payment for foreign national borrowers. Some investors combine foreign national purchase financing with DSCR-based qualification, using the property&apos;s rental income to support the loan qualification rather than the borrower&apos;s personal foreign income.</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">What happens to my mortgage if my visa expires or is not renewed?</h3>
              <p className="text-slate-600">Your mortgage obligation continues regardless of your visa status. The property serves as collateral for the loan, and the loan terms do not change based on your immigration status. If you leave the United States, you are still responsible for mortgage payments. Many foreign nationals in this situation either continue making payments from abroad, rent the property and use rental income to cover the mortgage, sell the property and pay off the loan, or refinance into a non-resident foreign national program. Proactively communicating with your broker and lender about visa changes helps develop a plan before issues arise.</p>
            </div>
          </div>
        </section>

        {/* Extended FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions: Foreign National Mortgage Loans
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

        {/* Expert Summary + CTA */}
        <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Expert Summary: Foreign National Mortgage Loans Through the Wholesale Channel in 2026
          </h2>
          <p className="text-lg text-slate-200 mb-4 max-w-3xl mx-auto">
            The foreign national mortgage market is one of the most underserved segments in US lending. Major banks turn away qualified foreign borrowers because they lack the programs to serve them. Specialty non-QM lenders have filled this gap with sophisticated foreign national programs, but they distribute exclusively through the wholesale channel. Without a wholesale broker, most foreign nationals never learn these programs exist.
          </p>
          <p className="text-lg text-slate-200 mb-6 max-w-3xl mx-auto">
            As a wholesale mortgage broker licensed in California and Washington, Mo Abdel at Lumin Lending has built deep expertise in foreign national lending. Whether you are an H-1B holder purchasing your first home in Irvine, an E-2 treaty investor buying a rental property in Bellevue, an ITIN borrower in Orange County, or a non-resident foreign national investing in US real estate from abroad, the wholesale channel provides access to programs, rates, and terms that simply do not exist at retail banks. Contact us to discuss your specific situation and find the right foreign national mortgage program for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4">
                Get Your Foreign National Loan Quote
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
          <h3 className="font-semibold text-slate-900 mb-4">Related Foreign National &amp; Non-QM Mortgage Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/non-qm-loans-complete-guide-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; Non-QM Loans Complete Guide 2026
            </Link>
            <Link href="/blog/bank-statement-loans-wholesale-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; Bank Statement Loans: Wholesale Broker Guide
            </Link>
            <Link href="/blog/dscr-investment-property-loans-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; DSCR Investment Property Loans 2026
            </Link>
            <Link href="/blog/wholesale-vs-retail-mortgage-complete-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; Wholesale vs Retail Mortgage: Complete Comparison
            </Link>
            <Link href="/blog/jumbo-loans-orange-county-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; Jumbo Loans Orange County 2026
            </Link>
            <Link href="/blog/self-employed-mortgage-broker-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; Self-Employed Mortgage Broker Guide 2026
            </Link>
            <Link href="/blog/interest-only-mortgage-loans-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; Interest-Only Mortgage Loans 2026
            </Link>
            <Link href="/blog/asset-depletion-loans-guide-2026" className="text-emerald-600 hover:text-emerald-700 hover:underline">
              &rarr; Asset Depletion Loans Guide 2026
            </Link>
          </div>
        </section>

        {/* Compliance Disclaimer */}
        <section className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p className="mb-4">
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106 | DRE #02291443
          </p>
          <p>
            Equal Housing Lender. All loans subject to credit approval, underwriting guidelines, and program availability. Terms and conditions apply. This is not a commitment to lend. Information is for educational purposes only and does not constitute financial, tax, legal, or immigration advice. Foreign national mortgage programs have different guidelines, rates, and qualification requirements that vary by lender, visa type, and borrower profile and are subject to change without notice. ITIN loan programs and non-resident foreign national programs are non-QM products with different terms than conventional conforming loans. Down payment requirements, interest rates, and loan terms described are general ranges and may vary based on individual borrower qualifications, property type, and lender guidelines. FIRPTA withholding and tax obligations described are general information; consult a qualified tax advisor for advice specific to your situation. Immigration-related information is for general educational purposes only; consult a qualified immigration attorney for specific guidance. Mo Abdel, NMLS #1426884, is licensed in California and Washington. Contact a licensed loan officer for personalized guidance.
          </p>
        </section>
      </article>
    </div>
  );
}