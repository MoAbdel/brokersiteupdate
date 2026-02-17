import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Star, Shield, DollarSign, TrendingUp, CheckCircle, Home, Calculator, Award, Building } from 'lucide-react';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { buildBrokerEntityGraph, buildServiceWebPageSchema, buildFAQPageSchema, buildHowToSchema } from '@/lib/schema-entities';

export const metadata: Metadata = {
  title: 'Jumbo Loans Orange County 2026 | High-Balance Mortgage Financing',
  description: 'Get jumbo loans in Orange County above $1,249,125 for luxury homes. Mo Abdel specializes in high-balance mortgage financing with competitive pricing and flexible terms.',
  alternates: {
    canonical: 'https://www.mothebroker.com/jumbo-loans-orange-county',
    languages: {
      'en-US': 'https://www.mothebroker.com/jumbo-loans-orange-county',
      'x-default': 'https://www.mothebroker.com/jumbo-loans-orange-county',
    },
  },
};

const PAGE_URL = 'https://www.mothebroker.com/jumbo-loans-orange-county';

const jsonLd = buildBrokerEntityGraph({
  pageUrl: PAGE_URL,
  serviceType: 'Jumbo Loan and High-Balance Home Financing',
  serviceName: 'Orange County Jumbo Loans',
  serviceDescription: 'Specialized jumbo loan services for high-value homes in Orange County, California.',
});

const pageSchema = buildServiceWebPageSchema({
  pageUrl: PAGE_URL,
  title: 'Jumbo Loans Orange County 2026 | High-Balance Mortgage Financing',
  description:
    'Get jumbo loans in Orange County above $1,249,125 for luxury homes. Mo Abdel specializes in high-balance mortgage financing with competitive pricing and flexible terms.',
  breadcrumbName: 'Jumbo Loans',
  dateModified: '2026-02-16',
});

const faqs = [
  {
    question: "What qualifies as a jumbo loan in Orange County?",
    answer: "Any mortgage above $1,249,125 in Orange County is considered a jumbo loan in 2026. This includes most luxury homes in Newport Beach, high-end Irvine properties, and premium communities throughout OC where home values exceed conforming limits."
  },
  {
    question: "Are jumbo loan pricing higher than conventional rates?",
    answer: "Not necessarily! Jumbo loan pricing is often competitive with or sometimes lower than conventional loan pricing due to the high-quality borrower profile. Rates vary by lender, loan amount, and borrower qualifications. Mo can help you compare options."
  },
  {
    question: "How much down payment is required for a jumbo loan?",
    answer: "Down payment requirements vary: 10% minimum for primary residences, 15% for second homes, and 20% for investment properties. Some lenders may require 20% regardless of property type. Higher down payments often result in Better pricing and terms."
  },
  {
    question: "Can I get a jumbo loan for an Orange County condo?",
    answer: "Yes! Jumbo loans are available for luxury condos throughout Orange County, including high-rise buildings in Newport Beach and Irvine. The condo complex must meet lender requirements, and some buildings may require higher down payments or reserves."
  },
  {
    question: "What credit score do I need for a jumbo loan?",
    answer: "Most lenders prefer credit scores of 700+ for jumbo loans, though some programs accept scores as low as 660. Higher credit scores (740+) typically qualify for the best pricing and terms. Mo can help improve your profile for optimal qualification."
  },
  {
    question: "How long does jumbo loan approval take?",
    answer: "Jumbo loan approval typically takes 2-3 weeks due to additional documentation and underwriting requirements. Complex financial situations or unique properties may take longer. Pre-approval can expedite the process significantly for serious luxury home buyers."
  },
];

const faqSchema = buildFAQPageSchema(faqs, PAGE_URL);

const howToSchema = buildHowToSchema({
  name: 'How to Apply for a Jumbo Loan in Orange County',
  description: 'Step-by-step jumbo loan application process for luxury home financing above $1,249,125 in Orange County.',
  totalTime: 'P21D',
  url: PAGE_URL,
  steps: [
    { name: 'Pre-Qualification Assessment', text: 'Discuss your financial situation, income, assets, and luxury home goals' },
    { name: 'Documentation & Pre-Approval', text: 'Provide comprehensive financial documentation and receive pre-approval letter' },
    { name: 'Property Selection & Appraisal', text: 'Find your luxury Orange County home and complete professional appraisal' },
    { name: 'Underwriting & Closing', text: 'Final underwriting review and closing on your luxury home financing' },
  ],
});

export default function JumboLoansOrangeCountyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Breadcrumbs />
      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Header */}
          <section aria-label="Jumbo loans hero">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-slate-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4 mr-2 text-blue-600" aria-hidden="true" />
                <span>Luxury Home Financing</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Jumbo Loans Orange County 2026 – <span className="text-blue-600">High-Balance Luxury Home Financing</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8" data-speakable="true">
                Finance luxury homes above $1,249,125 in Orange County with competitive jumbo loans.
                Mo Abdel specializes in high-balance mortgage financing for Newport Beach, Irvine, Laguna Beach, and premium properties throughout OC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg" aria-label="Apply for a jumbo loan">
                    Apply for Jumbo Loan
                  </Button>
                </Link>
                <a href="tel:+19498229662">
                  <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg" aria-label="Call jumbo loan specialist">
                    Call Jumbo Specialist
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* 2026 Jumbo Loan Limits */}
          <section aria-label="2026 jumbo loan limits for Orange County" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">What Are the 2026 Jumbo Loan Limits in Orange County?</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$1,249,125</div>
                  <div className="text-slate-600">2026 Conforming Loan Limit</div>
                  <div className="text-sm text-slate-500 mt-1">Maximum conventional loan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$1,249,126+</div>
                  <div className="text-slate-600">Jumbo Loan Territory</div>
                  <div className="text-sm text-slate-500 mt-1">Above conforming limits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">No Limit</div>
                  <div className="text-slate-600">Maximum Loan Amount</div>
                  <div className="text-sm text-slate-500 mt-1">Based on qualification</div>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-3">Orange County Jumbo Loan Benefits 2026:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Finance luxury homes throughout Orange County without borrowing restrictions</li>
                  <li>• Competitive loan pricing for high-balance mortgages</li>
                  <li>• Flexible down payment options starting at 10%</li>
                  <li>• Available for primary residences, second homes, and investment properties</li>
                  <li>• Portfolio lending options for unique properties and situations</li>
                  <li>• Cash-out refinancing up to 80% loan-to-value ratio</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Jumbo Loan Benefits */}
          <section aria-label="Jumbo loan benefits and advantages" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">What Are the Benefits of Orange County Jumbo Loans?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-center mb-8" data-speakable="true">
              Jumbo loans provide access to high-value financing with competitive pricing, flexible terms, and premium service for Orange County luxury home buyers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <Building className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl">Luxury Home Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Finance premium properties in Newport Beach, Irvine, Laguna Beach, and other
                    exclusive Orange County communities with loan amounts up to $5 million+.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <Star className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl">Competitive pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Jumbo loan rates often competitive with conventional loans, sometimes even
                    lower due to the high-quality borrower profile and low risk.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <Shield className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl">Flexible Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Choose from 15, 20, or 30-year terms with fixed or adjustable rates.
                    Interest-only payment options available for qualifying borrowers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <DollarSign className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl">Low Down Payment Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Down payments as low as 10% for primary residences, 15% for second homes,
                    and 20% for investment properties in Orange County.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl">Portfolio Lending</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Access to portfolio lenders for unique properties, self-employed borrowers,
                    or complex financial situations that don't fit traditional guidelines.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <Award className="w-12 h-12 text-pink-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl">Premium Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    White-glove service with dedicated jumbo loan specialists who understand
                    the unique needs of luxury home buyers in Orange County.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Jumbo vs Conventional Comparison */}
          <section aria-label="Jumbo versus conventional loan comparison" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">How Do Jumbo Loans Compare to Conventional Loans in Orange County?</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Loan Feature</th>
                    <th className="px-6 py-4 text-center">Jumbo Loan</th>
                    <th className="px-6 py-4 text-center">Conventional</th>
                    <th className="px-6 py-4 text-center">Super Jumbo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Orange County 2026 Limits</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-bold">$1,249,126 - $3M</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-bold">Up to $1,249,125</td>
                    <td className="px-6 py-4 text-center text-pink-600 font-bold">$3M+</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Minimum Down Payment</td>
                    <td className="px-6 py-4 text-center text-blue-600">10% - 20%</td>
                    <td className="px-6 py-4 text-center text-blue-600">3% - 20%</td>
                    <td className="px-6 py-4 text-center text-blue-600">20% - 30%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Private Mortgage Insurance</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-bold">Not Available</td>
                    <td className="px-6 py-4 text-center text-red-600">Required if &lt; 20% down</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-bold">Not Available</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Credit Score Requirement</td>
                    <td className="px-6 py-4 text-center text-yellow-600">700+ preferred</td>
                    <td className="px-6 py-4 text-center text-blue-600">620+</td>
                    <td className="px-6 py-4 text-center text-red-600">740+</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Debt-to-Income Ratio</td>
                    <td className="px-6 py-4 text-center text-blue-600">50% max (flexible)</td>
                    <td className="px-6 py-4 text-center text-blue-600">Up to 50%</td>
                    <td className="px-6 py-4 text-center text-yellow-600">36% preferred</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Cash Reserves Required</td>
                    <td className="px-6 py-4 text-center text-yellow-600">2-6 months</td>
                    <td className="px-6 py-4 text-center text-blue-600">0-2 months</td>
                    <td className="px-6 py-4 text-center text-red-600">6-12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Popular Orange County Markets for Jumbo Loans */}
          <section aria-label="Popular Orange County luxury markets for jumbo loans" className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Which Orange County Luxury Markets Use Jumbo Loans?
                </h2>
                <p className="text-lg text-slate-600 mb-6" data-speakable="true">
                  Jumbo loans serve the most desirable communities in Orange County, where median home values exceed conforming limits.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-bold text-slate-900">Newport Beach</div>
                      <p className="text-slate-600">Waterfront estates, luxury condos, and premium properties. Median home prices $3M+</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-bold text-slate-900">Irvine</div>
                      <p className="text-slate-600">Luxury master-planned communities, new construction homes $1.5M - $4M+</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-bold text-slate-900">Laguna Beach</div>
                      <p className="text-slate-600">Ocean-view estates, artistic community homes, unique luxury properties</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-bold text-slate-900">Manhattan Beach Border</div>
                      <p className="text-slate-600">Luxury beachside communities, high-end family homes and estates</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-bold text-slate-900">Yorba Linda & Villa Park</div>
                      <p className="text-slate-600">Executive homes, gated communities, luxury custom-built properties</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Jumbo Loan Qualification Requirements</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Minimum Loan Amount:</span>
                    <span className="font-bold text-blue-600">$1,249,126</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Typical Down Payment:</span>
                    <span className="font-bold text-blue-600">10% - 20%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Credit Score:</span>
                    <span className="font-bold text-blue-600">700+ Preferred</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Debt-to-Income:</span>
                    <span className="font-bold">50% Max</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Income Documentation:</h4>
                  <div className="space-y-1 text-sm text-slate-600">
                    <div>• Full income verification required</div>
                    <div>• Asset documentation and reserves</div>
                    <div>• Employment verification (2+ years)</div>
                    <div>• Bank statements (2+ months)</div>
                    <div>• Investment account statements</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Jumbo Loans */}
          <section aria-label="Types of jumbo loans available" className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Types of Jumbo Loans Available in Orange County</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <Home className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl">Jumbo Purchase Loans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Finance luxury homes above $1,249,125 in Orange County. Perfect for high-end
                    properties in Newport Beach, Irvine, and premium OC communities.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Loan amounts up to $5M+ (qualified borrowers)</li>
                    <li>• Primary residence, second home, or investment</li>
                    <li>• Fixed or adjustable pricing options</li>
                    <li>• Down payments as low as 10%</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl">Jumbo Refinance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Refinance existing jumbo mortgages to Lower pricing, change terms, or access
                    equity from your Orange County luxury home.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Rate-and-term refinancing</li>
                    <li>• Cash-out refinancing up to 80% LTV</li>
                    <li>• ARM to fixed-rate conversions</li>
                    <li>• Debt consolidation options</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <Calculator className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl">Interest-Only Jumbo Loans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Interest-only payment options for the first 5-10 years, perfect for
                    high-income professionals with variable compensation.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Lower initial monthly payments</li>
                    <li>• Preserve cash flow for investments</li>
                    <li>• Qualify for larger loan amounts</li>
                    <li>• Converts to principal and interest</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-300 transition-all duration-300">
                <CardHeader>
                  <Building className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl">Portfolio Jumbo Loans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Non-QM jumbo loans held in portfolio by lenders, offering more flexibility
                    for unique situations and complex borrower profiles.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Self-employed borrower programs</li>
                    <li>• Asset-based qualification</li>
                    <li>• Non-warrantable condos</li>
                    <li>• Unique property types</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Jumbo Loan Process */}
          <section aria-label="Jumbo loan application process steps" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">How Does the Orange County Jumbo Loan Application Process Work?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">1</span>
                  </div>
                  <CardTitle>Pre-Qualification Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Discuss your financial situation, income, assets, and luxury home goals</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">2</span>
                  </div>
                  <CardTitle>Documentation & Pre-Approval</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Provide comprehensive financial documentation and receive pre-approval letter</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">3</span>
                  </div>
                  <CardTitle>Property Selection & Appraisal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Find your luxury Orange County home and complete professional appraisal</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">4</span>
                  </div>
                  <CardTitle>Underwriting & Closing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Final underwriting review and closing on your luxury home financing</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Internal Links to Related Services */}
          <section aria-label="Related Orange County loan programs" className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Explore Other Orange County Loan Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/va-loans-orange-county" className="group">
                <Card className="border-2 hover:border-blue-300 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" aria-hidden="true" />
                    <CardTitle className="text-lg group-hover:text-blue-600">VA Loans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm text-center">
                      Zero down payment loans for Orange County veterans
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/fha-loans-orange-county" className="group">
                <Card className="border-2 hover:border-blue-300 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <Home className="w-8 h-8 text-blue-600 mx-auto mb-2" aria-hidden="true" />
                    <CardTitle className="text-lg group-hover:text-blue-600">FHA Loans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm text-center">
                      3.5% down payment option for Orange County homebuyers
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/heloc-orange-county" className="group">
                <Card className="border-2 hover:border-blue-300 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" aria-hidden="true" />
                    <CardTitle className="text-lg group-hover:text-blue-600">HELOC</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm text-center">
                      Access your Orange County home equity with flexible credit line
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cash-out-refinance" className="group">
                <Card className="border-2 hover:border-blue-300 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-2" aria-hidden="true" />
                    <CardTitle className="text-lg group-hover:text-blue-600">Cash-Out Refi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm text-center">
                      Access equity from your Orange County luxury home
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section aria-label="Frequently asked questions about jumbo loans" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Jumbo Loan FAQ for Orange County Luxury Homes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section aria-label="Get started with jumbo loan financing" className="text-center bg-slate-900 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Finance Your Orange County Luxury Home?
            </h2>
            <p className="text-xl mb-6 text-slate-200" data-speakable="true">
              Unlock luxury homeownership with competitive jumbo loan financing. Get started with Mo Abdel,
              your trusted Orange County jumbo loan specialist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-slate-950 hover:bg-slate-100 px-8 py-3 text-lg font-semibold" aria-label="Apply for jumbo loan financing">
                  Apply for Jumbo Loan
                </Button>
              </Link>
              <a href="tel:+19498229662">
                <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg" aria-label="Call jumbo loan expert at (949) 822-9662">
                  Call Jumbo Expert: (949) 822-9662
                </Button>
              </a>
            </div>
            <p className="text-sm text-slate-200 mt-4">
              Licensed mortgage broker with Lumin Lending • NMLS #1426884 • Specializing in Orange County luxury home financing
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
