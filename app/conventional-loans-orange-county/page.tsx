import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle, Home, Calculator, FileText, Users, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { buildBrokerEntityGraph, buildServiceWebPageSchema, buildFAQPageSchema, buildHowToSchema } from '@/lib/schema-entities';

export const metadata: Metadata = {
  title: 'Conventional Loans in Orange County, CA | Traditional Home Financing',
  description: 'Get conventional loans in Orange County with competitive pricing. Flexible down payments from 3% and loan amounts up to $1,249,125. Apply today with Mo Abdel.',
  openGraph: {
    title: 'Conventional Loans in Orange County, CA | Traditional Home Financing',
    description: 'Get conventional loans in Orange County with competitive pricing. Flexible down payments from 3% and loan amounts up to $1,249,125. Apply today with Mo Abdel.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mothebroker.com/conventional-loans-orange-county',
    languages: {
      'en-US': 'https://www.mothebroker.com/conventional-loans-orange-county',
      'x-default': 'https://www.mothebroker.com/conventional-loans-orange-county',
    },
  },
};

const PAGE_URL = 'https://www.mothebroker.com/conventional-loans-orange-county';

const pageEntitySchema = buildBrokerEntityGraph({
  pageUrl: PAGE_URL,
  serviceType: 'Conventional Mortgage Services',
  serviceName: 'Orange County Conventional Loans',
  serviceDescription: 'Conventional mortgage financing services in Orange County, CA with access to 200+ wholesale lenders for competitive pricing.',
});

const pageSchema = buildServiceWebPageSchema({
  pageUrl: PAGE_URL,
  title: 'Conventional Loans in Orange County, CA | Traditional Home Financing',
  description:
    'Get conventional loans in Orange County with competitive pricing. Flexible down payments from 3% and loan amounts up to $1,249,125. Apply today with Mo Abdel.',
  breadcrumbName: 'Conventional Loans',
  dateModified: '2026-02-16',
});

const faqs = [
  {
    question: 'What is the minimum down payment for a conventional loan in Orange County?',
    answer: 'First-time buyers put down as little as 3% on conventional loans in Orange County. Repeat buyers typically need 5-10%. The exact amount depends on your credit score, debt-to-income ratio, and the specific loan program. With 200+ wholesale lenders, Mo Abdel matches you with the lowest down payment requirement you qualify for.'
  },
  {
    question: 'Can I remove private mortgage insurance (PMI) from a conventional loan?',
    answer: 'Yes. PMI is removable once you reach 20% equity in your home, either through monthly payments or home appreciation. This is a key advantage over FHA loans, where mortgage insurance is permanent for the life of the loan. Conventional borrowers in Orange County often hit 20% equity faster due to strong home appreciation.'
  },
  {
    question: 'What credit score do I need for a conventional loan in California?',
    answer: 'Most conventional loans require a minimum 620 credit score. Scores of 740 or higher qualify for the best wholesale pricing, saving $100-$300 per month on a typical Orange County mortgage. Some wholesale lenders accept scores as low as 580 with compensating factors like larger down payments or lower debt-to-income ratios.'
  },
  {
    question: 'What is the 2026 conventional loan limit in Orange County?',
    answer: 'The 2026 conforming loan limit for Orange County is $1,249,125, set by the Federal Housing Finance Agency (FHFA). Loans above this amount require jumbo financing with different requirements. Orange County is classified as a high-cost area, so the limit is significantly higher than the national baseline of $806,500.'
  },
  {
    question: 'Can I use a conventional loan for an investment property in California?',
    answer: 'Yes. Conventional loans finance primary residences, second homes, and investment properties (1-4 units). Investment property purchases require 15-25% down payment. Wholesale brokers access investor-specific conventional programs with lower rates than retail banks charge for non-owner-occupied properties.'
  },
  {
    question: 'How long does it take to close a conventional loan in Orange County?',
    answer: 'Most conventional loans close in 2-3 weeks through Mo Abdel\'s wholesale network. This is faster than the industry average of 30-45 days because wholesale lenders have streamlined underwriting. Pre-approved borrowers with complete documentation close even faster.'
  }
];

const faqSchema = buildFAQPageSchema(faqs, PAGE_URL);

const howToSchema = buildHowToSchema({
  name: 'How to Apply for a Conventional Loan in Orange County',
  description: 'Mo Abdel\'s streamlined 4-step process closes conventional loans in 2-3 weeks. Pre-qualification takes minutes and does not affect your credit score.',
  totalTime: 'P21D',
  url: PAGE_URL,
  steps: [
    { name: 'Pre-Qualification', text: 'Quick assessment of your borrowing capacity and rate options from 200+ lenders' },
    { name: 'Document Submission', text: 'Provide income, asset, and employment verification through secure upload' },
    { name: 'Underwriting Review', text: 'Comprehensive evaluation with direct wholesale lender communication' },
    { name: 'Closing & Funding', text: 'Final loan approval and funding of your home purchase or refinance' },
  ],
});

const benefits = [
  {
    icon: Home,
    title: 'Flexible Down Payments',
    description: 'Put down as little as 3% for first-time buyers or 5% for repeat buyers with conventional loans.'
  },
  {
    icon: TrendingUp,
    title: 'Competitive Interest Pricing',
    description: 'Access competitive pricing from 200+ lenders to secure the most competitive conventional loan pricing.'
  },
  {
    icon: Shield,
    title: 'No Upfront Mortgage Insurance Premium',
    description: 'Unlike FHA loans, conventional loans don\'t require upfront mortgage insurance premiums.'
  },
  {
    icon: Calculator,
    title: 'Higher Loan Limits',
    description: 'Borrow up to the 2026 Orange County conforming limit of $1,249,125 with conventional financing.'
  },
  {
    icon: FileText,
    title: 'Flexible Credit Requirements',
    description: 'Qualify with credit scores as low as 620, with better pricing available for higher scores.'
  },
  {
    icon: Users,
    title: 'No Geographic Restrictions',
    description: 'Use conventional loans for primary residence, second homes, or investment properties.'
  }
];

const requirements = [
  'Credit score: 620+ (better pricing with 740+)',
  'Down payment: 3-20% depending on loan type',
  'Debt-to-income ratio: Generally 50% or lower',
  'Employment history: 2 years preferred',
  'Reserve funds: 2-6 months recommended',
  'Property appraisal and inspection required'
];

const conventionalVsFHA = [
  { feature: 'Minimum Down Payment', conventional: '3-5%', fha: '3.5%' },
  { feature: 'Minimum Credit Score', conventional: '620', fha: '580' },
  { feature: 'Mortgage Insurance', conventional: 'PMI (removable at 80% LTV)', fha: 'MIP (permanent)' },
  { feature: 'Loan Limits (2026 OC)', conventional: '$1,249,125', fha: '$1,266,300' },
  { feature: 'Property Types', conventional: 'Primary, second home, investment', fha: 'Primary residence only' },
  { feature: 'Upfront Insurance Fee', conventional: 'None', fha: '1.75% of loan amount' },
];

const cities = [
  'Irvine', 'Newport Beach', 'Mission Viejo', 'Anaheim', 'Costa Mesa', 'Huntington Beach', 'Santa Ana'
];

export default function ConventionalLoansOrangeCounty() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageEntitySchema) }}
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

      {/* Hero Section */}
      <section aria-label="Conventional loan overview" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4 border-white/30">
              Traditional Home Financing
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Conventional Loans in Orange County – Flexible Home Financing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed" data-speakable="true">
              Get traditional home financing with down payments as low as 3%. Access competitive pricing from 200+ wholesale lenders with flexible terms for your Orange County home purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" aria-label="Apply for a conventional mortgage loan in Orange County" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  Apply for Conventional Loan
                </Button>
              </Link>
              <Link href="/calculator">
                <Button size="lg" variant="outline" aria-label="Calculate conventional loan monthly payments" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Calculate Payments
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section aria-label="Conventional loan benefits" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orange County Conventional Mortgage Benefits & Advantages
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Conventional loans offer the most flexibility and competitive pricing for qualified borrowers in Orange County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section aria-label="Conventional loan qualification requirements" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Orange County Conventional Mortgage Qualification Requirements
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Conventional loans have flexible qualification requirements that can accommodate a wide range of borrowers in Orange County.
                Compare with <Link href="/fha-loans-orange-county" className="text-blue-600 hover:text-blue-700 underline">FHA loan requirements</Link> or
                explore <Link href="/va-loans-orange-county" className="text-blue-600 hover:text-blue-700 underline">VA loan options for veterans</Link>.
              </p>
              <dl className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <dd className="text-slate-700">{requirement}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">2026 Conventional Loan Limits</h3>
              <table className="w-full">
                <caption className="sr-only">2026 Orange County conventional loan limits and key figures</caption>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 font-semibold text-slate-700">Orange County Conforming Limit</td>
                    <td className="py-3 text-right text-xl font-bold text-green-600">$1,249,125</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 font-semibold text-slate-700">Minimum Down Payment</td>
                    <td className="py-3 text-right text-xl font-bold text-blue-600">3%</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-slate-700">Maximum Loan-to-Value</td>
                    <td className="py-3 text-right text-xl font-bold text-purple-600">97%</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6">
                <Link href="/contact">
                  <Button aria-label="Get pre-approved for a conventional loan in Orange County" className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3">
                    Get Pre-Approved Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section aria-label="Conventional vs FHA loan comparison" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Do Conventional Loans Compare to FHA Loans in Orange County?
            </h2>
            <p className="text-xl text-slate-600" data-speakable="true">
              Conventional loans offer removable mortgage insurance and broader property type eligibility, while FHA loans accept lower credit scores. The right choice depends on your down payment, credit profile, and property type.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <caption className="sr-only">Side-by-side comparison of conventional and FHA loan features for Orange County borrowers</caption>
                <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th scope="col" className="px-6 py-4 text-left font-semibold">Conventional Loan</th>
                    <th scope="col" className="px-6 py-4 text-left font-semibold">FHA Loan</th>
                  </tr>
                </thead>
                <tbody>
                  {conventionalVsFHA.map((comparison, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-slate-700">{comparison.feature}</td>
                      <td className="px-6 py-4 text-blue-600 font-medium">{comparison.conventional}</td>
                      <td className="px-6 py-4 text-green-600 font-medium">{comparison.fha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">
            Learn more about <Link href="/fha-loans-orange-county" className="text-blue-600 hover:text-blue-700 underline">FHA loan details</Link> or
            explore our <Link href="/guides/orange-county-home-buyer-guide" className="text-blue-600 hover:text-blue-700 underline">complete home buying guide</Link>.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section aria-label="Conventional loan application process" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Do You Apply for a Conventional Loan in Orange County?
            </h2>
            <p className="text-xl text-slate-600" data-speakable="true">
              Mo Abdel&apos;s streamlined 4-step process closes conventional loans in 2-3 weeks. Pre-qualification takes minutes and does not affect your credit score.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Pre-Qualification', desc: 'Quick assessment of your borrowing capacity and rate options from 200+ lenders' },
              { step: 2, title: 'Document Submission', desc: 'Provide income, asset, and employment verification through secure upload' },
              { step: 3, title: 'Underwriting Review', desc: 'Comprehensive evaluation with direct wholesale lender communication' },
              { step: 4, title: 'Closing & Funding', desc: 'Final loan approval and funding of your home purchase or refinance' }
            ].map((item, index) => (
              <Card key={index} className="text-center shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto" aria-hidden="true">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Step {item.step}: {item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section aria-label="Orange County cities served for conventional loans" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Where Can You Get a Conventional Loan in Orange County?
            </h2>
            <p className="text-xl text-slate-600" data-speakable="true">
              Mo Abdel provides conventional loan financing across all Orange County cities. Wholesale pricing is available for every neighborhood from Irvine to Huntington Beach.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {cities.map((city, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <span className="text-slate-700 font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section — Q-Block format for AEO */}
      <section aria-label="Conventional loan frequently asked questions" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orange County Conventional Mortgage Questions & Answers
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section aria-label="Start your conventional loan application" className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Conventional Loan in Orange County?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Access competitive pricing from 200+ lenders and get pre-approved in minutes.
            Mo Abdel makes conventional loans simple and affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" aria-label="Start your conventional loan application with Mo Abdel" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Start Your Application
              </Button>
            </Link>
            <Link href="tel:+19498229662">
              <Button size="lg" variant="outline" aria-label="Call Mo Abdel at 949-822-9662 for conventional loan help" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Call (949) 822-9662
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
