import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Star, Shield, DollarSign, TrendingUp, Users, CheckCircle, Home, Calculator, FileText, Award } from 'lucide-react';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { buildBrokerEntityGraph, buildServiceWebPageSchema, buildFAQPageSchema, buildHowToSchema } from '@/lib/schema-entities';

export const metadata: Metadata = {
  title: 'Orange County VA Loans | Zero Down for Eligible Veterans',
  description: 'Eligible veterans and active-duty buyers can purchase in Orange County with zero down and no PMI. Compare VA options with Mo Abdel (NMLS #1426884).',
  alternates: {
    canonical: 'https://www.mothebroker.com/va-loans-orange-county',
    languages: {
      'en-US': 'https://www.mothebroker.com/va-loans-orange-county',
      'x-default': 'https://www.mothebroker.com/va-loans-orange-county',
    },
  },
};

const PAGE_URL = 'https://www.mothebroker.com/va-loans-orange-county';

const jsonLd = buildBrokerEntityGraph({
  pageUrl: PAGE_URL,
  serviceType: 'VA Loan and Veterans Home Financing Services',
  serviceName: 'Orange County VA Loans',
  serviceDescription: 'Specialized VA loan services for veterans and active-duty buyers in Orange County, CA',
});

const pageSchema = buildServiceWebPageSchema({
  pageUrl: PAGE_URL,
  title: 'Orange County VA Loans | Zero Down for Eligible Veterans',
  description:
    'Eligible veterans and active-duty buyers can purchase in Orange County with zero down and no PMI. Compare VA options with Mo Abdel (NMLS #1426884).',
  breadcrumbName: 'VA Loans',
  dateModified: '2026-02-16',
});

const faqs = [
  {
    question: 'Can I use a VA loan for a condo in Orange County?',
    answer: 'Yes, but the condo complex must be VA-approved. Many Orange County condos are approved including complexes in Irvine, Newport Beach, and Anaheim. Mo can help verify eligibility before you shop and provide a current list of approved buildings.',
  },
  {
    question: 'What if I\'ve used my VA loan benefit before?',
    answer: 'You may still have remaining entitlement or can restore your full benefit. Mo can help determine your available benefit and structure a loan accordingly, even for higher-priced Orange County homes above the conforming limit.',
  },
  {
    question: 'Do VA loans work for Orange County\'s high home prices?',
    answer: 'Absolutely! With the 2026 limit of $1,249,125, most Orange County homes qualify for zero down VA financing. For homes above this amount, you\'d put 25% down only on the excess amount, still saving significantly on the total down payment.',
  },
  {
    question: 'How long does VA loan approval take in Orange County?',
    answer: 'With Mo\'s network of VA-approved lenders, most VA loans close within 21-30 days. The VA appraisal typically takes 7-10 business days to schedule and complete in Orange County. Pre-approval can be completed within 24-48 hours.',
  },
  {
    question: 'Can I use a VA loan to buy a multi-unit property?',
    answer: 'Yes! VA loans can be used for 2-4 unit properties in Orange County as long as you occupy one unit as your primary residence. This is an excellent way to house hack and generate rental income while building equity with zero down payment.',
  },
  {
    question: 'What are the VA funding fees for 2026?',
    answer: 'First-time use: 2.15% for zero down, 1.25% for 5%+ down. Subsequent use: 3.3% for zero down, 1.25% for 5%+ down. The fee can be rolled into your loan amount and is waived for disabled veterans with 10%+ VA disability rating.',
  },
];

const faqSchema = buildFAQPageSchema(faqs, PAGE_URL);

const howToSchema = buildHowToSchema({
  name: 'How to Apply for a VA Loan in Orange County',
  description: 'Step-by-step VA loan application process for eligible veterans and active-duty service members in Orange County.',
  totalTime: 'P30D',
  url: PAGE_URL,
  steps: [
    { name: 'Get Your Certificate of Eligibility', text: 'Obtain your COE from VA.gov online portal or let Mo handle the process for you quickly' },
    { name: 'Get Pre-Approved', text: 'Contact Mo for VA loan pre-approval with competitive pricing and quick turnaround' },
    { name: 'Find Your Orange County Home', text: 'Shop for homes up to $1,249,125 with confidence knowing your financing is secure' },
    { name: 'Close & Move In', text: 'Complete VA appraisal and inspection requirements, then close on your new home' },
  ],
});

export default function VALoansOrangeCountyPage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <section aria-label="VA loans hero and call to action">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🇺🇸 Honoring Our Veterans
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              VA Loans Orange County 2026 – <span className="text-blue-600">Zero Down Veterans Home Financing</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8" data-speakable="true">
              Thank you for your service. Now let Mo Abdel serve you with zero down payment VA loans
              in Orange County, CA. Specialized VA lending with Competitive pricing, no PMI, and expert guidance for military families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg" aria-label="Apply for a VA loan with Mo Abdel">
                  Apply for VA Loan
                </Button>
              </Link>
              <a href="tel:9498229662">
                <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg" aria-label="Call VA loan specialist Mo Abdel">
                  Call VA Specialist
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* 2026 VA Loan Limits */}
        <section className="mb-16" aria-label="2026 VA loan limits and benefits for Orange County">
          <h2 className="text-3xl font-bold text-center mb-8">What Are the 2026 VA Loan Limits in Orange County?</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-slate-700 mb-6 text-center" data-speakable="true">
              The 2026 VA conforming loan limit for Orange County is $1,249,125, allowing eligible veterans to purchase with zero down payment up to that amount.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$1,249,125</div>
                <div className="text-slate-600">2026 Conforming Loan Limit</div>
                <div className="text-sm text-slate-500 mt-1">Standard VA loan amount</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$0</div>
                <div className="text-slate-600">Down Payment Required</div>
                <div className="text-sm text-slate-500 mt-1">100% financing available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">No Limit</div>
                <div className="text-slate-600">Above $1,249,125*</div>
                <div className="text-sm text-slate-500 mt-1">*25% down on excess amount</div>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Orange County VA Loan Benefits 2026:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• VA loans can exceed $1,249,125 with 25% down on the excess amount</li>
                <li>• Full entitlement allows up to $1,249,125 with zero down payment</li>
                <li>• No mortgage insurance (PMI) required regardless of loan amount</li>
                <li>• Competitive loan pricing, typically lower than conventional loans</li>
                <li>• No prepayment penalties - pay off your loan early without fees</li>
                <li>• Funding fee can be rolled into the loan amount</li>
              </ul>
            </div>
          </div>
        </section>

        {/* VA Loan Benefits */}
        <section className="mb-16" aria-label="VA loan benefits and advantages for Orange County veterans">
          <h2 className="text-3xl font-bold text-center mb-8">What Are the Benefits of VA Loans in Orange County?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-green-600 mb-4" aria-hidden="true" />
                <CardTitle className="text-xl">Zero Down Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Purchase homes up to $1,249,125 in Orange County with $0 down payment,
                  making homeownership immediately accessible without years of saving.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
                <CardTitle className="text-xl">No PMI Required</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  VA loans never require private mortgage insurance, saving you $200-800+
                  per month compared to conventional loans in Orange County's price range.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Star className="w-12 h-12 text-purple-600 mb-4" aria-hidden="true" />
                <CardTitle className="text-xl">Competitive pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  VA loans typically offer 0.25% - 0.50% lower loan pricing than
                  conventional loans, backed by the Department of Veterans Affairs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-green-600 mb-4" aria-hidden="true" />
                <CardTitle className="text-xl">No Prepayment Penalty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Pay off your Orange County home loan early without penalties,
                  giving you flexibility to save thousands in interest costs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
                <CardTitle className="text-xl">Assumable Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Future buyers can assume your VA loan at your pricing, making your
                  Orange County home more attractive when you decide to sell.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Award className="w-12 h-12 text-purple-600 mb-4" aria-hidden="true" />
                <CardTitle className="text-xl">Reusable Benefit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Use your VA loan benefit multiple times throughout your life,
                  perfect for military families who relocate frequently.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Who Qualifies for a VA Loan in Orange County */}
        <section className="mb-16" aria-label="VA loan eligibility requirements for Orange County veterans">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Who Qualifies for VA Loans in Orange County?
              </h2>
              <p className="text-slate-700 mb-4" data-speakable="true">
                Active-duty service members, veterans, National Guard and Reserve members, and eligible surviving spouses qualify for VA loans in Orange County.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-bold text-slate-900">Active Duty Military</div>
                    <p className="text-slate-600">Currently serving members of Army, Navy, Air Force, Marines, Space Force, or Coast Guard with 90+ days of service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-bold text-slate-900">Veterans</div>
                    <p className="text-slate-600">Honorably discharged veterans who served minimum required time (typically 24 months active duty)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-bold text-slate-900">National Guard & Reserves</div>
                    <p className="text-slate-600">Members with 6+ years of service or activated for 90+ days of federal service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-bold text-slate-900">Surviving Spouses</div>
                    <p className="text-slate-600">Unmarried surviving spouses of service members who died in service or from service-connected disabilities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Perfect for Orange County Military</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Max VA Loan Amount:</span>
                  <span className="font-bold text-blue-600">$1,249,125</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Down Payment:</span>
                  <span className="font-bold text-green-600">$0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">VA Funding Fee:</span>
                  <span className="font-bold">2.15% - 3.3%*</span>
                </div>
                <div className="text-xs text-slate-500">*Can be rolled into loan, varies by service type</div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Serving Orange County Military:</h4>
                <div className="space-y-1 text-sm text-slate-600">
                  <div>• Camp Pendleton Marines & Staff</div>
                  <div>• Naval Weapons Station Seal Beach</div>
                  <div>• Los Alamitos Joint Forces Training Base</div>
                  <div>• Coast Guard Station Newport Beach</div>
                  <div>• Retired & Honorably Discharged Veterans</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VA vs FHA vs Conventional Comparison */}
        <section className="mb-16" aria-label="Comparison of VA, FHA, and conventional loan programs for Orange County">
          <h2 className="text-3xl font-bold text-center mb-8">How Do VA vs FHA vs Conventional Loans Compare in Orange County?</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left">Loan Feature</th>
                  <th scope="col" className="px-6 py-4 text-center">VA Loan</th>
                  <th scope="col" className="px-6 py-4 text-center">FHA Loan</th>
                  <th scope="col" className="px-6 py-4 text-center">Conventional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Orange County 2026 Limit</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">$1,249,125</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">$1,266,300</td>
                  <td className="px-6 py-4 text-center text-purple-600 font-bold">$1,249,125</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Minimum Down Payment</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">0%</td>
                  <td className="px-6 py-4 text-center text-orange-600">3.5%</td>
                  <td className="px-6 py-4 text-center text-red-600">3% - 20%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Mortgage Insurance</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">None</td>
                  <td className="px-6 py-4 text-center text-red-600">Required (MIP)</td>
                  <td className="px-6 py-4 text-center text-red-600">PMI if &lt; 20% down</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Credit Score Requirement</td>
                  <td className="px-6 py-4 text-center text-green-600">580+ (varies by lender)</td>
                  <td className="px-6 py-4 text-center text-blue-600">580+</td>
                  <td className="px-6 py-4 text-center text-purple-600">620+</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Funding Fee</td>
                  <td className="px-6 py-4 text-center text-yellow-600">2.15% - 3.3%</td>
                  <td className="px-6 py-4 text-center text-blue-600">1.75%</td>
                  <td className="px-6 py-4 text-center text-green-600">None</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Occupancy Requirement</td>
                  <td className="px-6 py-4 text-center text-blue-600">Primary residence</td>
                  <td className="px-6 py-4 text-center text-blue-600">Primary residence</td>
                  <td className="px-6 py-4 text-center text-green-600">Any</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* VA Loan Process */}
        <section className="mb-16" aria-label="Step-by-step VA loan application process in Orange County">
          <h2 className="text-3xl font-bold text-center mb-8">What Is the Orange County VA Loan Application Process?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <CardTitle>Get Your Certificate of Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Obtain your COE from VA.gov online portal or let Mo handle the process for you quickly</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <CardTitle>Get Pre-Approved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Contact Mo for VA loan pre-approval with Competitive pricing and quick turnaround</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <CardTitle>Find Your Orange County Home</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Shop for homes up to $1,249,125 with confidence knowing your financing is secure</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">4</span>
                </div>
                <CardTitle>Close & Move In</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Complete VA appraisal and inspection requirements, then close on your new home</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* VA Loan Types */}
        <section className="mb-16" aria-label="Types of VA loans available in Orange County">
          <h3 className="text-3xl font-bold text-center mb-8">Types of VA Loans Available in Orange County</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <Home className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
                <CardTitle className="text-xl">VA Purchase Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Buy your primary residence in Orange County with zero down payment up to $1,249,125.
                  Perfect for first-time homebuyers and military families.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Zero down payment required</li>
                  <li>• No PMI ever</li>
                  <li>• Competitive loan pricing</li>
                  <li>• Can be used for condos, townhomes, single-family homes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-green-600 mb-4" aria-hidden="true" />
                <CardTitle className="text-xl">VA Refinance Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Refinance your existing mortgage with a VA Interest Rate Reduction Refinance Loan (IRRRL)
                  or VA Cash-Out Refinance.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• IRRRL: Streamlined refinance with minimal paperwork</li>
                  <li>• Cash-Out: Access your home's equity</li>
                  <li>• Lower your loan pricing and payment</li>
                  <li>• No appraisal required for IRRRL</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <DollarSign className="w-10 h-10 text-purple-600 mb-4" aria-hidden="true" />
                <CardTitle className="text-xl">VA Cash-Out Refinance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Access your Orange County home's equity for home improvements, debt consolidation,
                  or other financial needs.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Cash out up to 100% of your home's value</li>
                  <li>• Competitive pricing without PMI</li>
                  <li>• Use funds for any purpose</li>
                  <li>• Combine with rate reduction</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all duration-300">
              <CardHeader>
                <FileText className="w-10 h-10 text-orange-600 mb-4" aria-hidden="true" />
                <CardTitle className="text-xl">VA Construction Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Build your dream home in Orange County with a VA construction-to-permanent loan.
                  Perfect for custom homes and new construction.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Finance land purchase and construction</li>
                  <li>• Converts to permanent VA loan</li>
                  <li>• No down payment required</li>
                  <li>• Work with approved builders</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Internal Links to Related Services */}
        <section className="mb-16" aria-label="Related Orange County loan program options">
          <h3 className="text-2xl font-bold text-center mb-8">Explore Other Orange County Loan Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/fha-loans-orange-county" className="group">
              <Card className="border-2 hover:border-blue-300 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" aria-hidden="true" />
                  <CardTitle className="text-lg group-hover:text-blue-600">FHA Loans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm text-center">
                    3.5% down payment option for Orange County homebuyers
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/jumbo-loans-orange-county" className="group">
              <Card className="border-2 hover:border-blue-300 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" aria-hidden="true" />
                  <CardTitle className="text-lg group-hover:text-blue-600">Jumbo Loans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm text-center">
                    Financing above $1,249,125 for luxury Orange County homes
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/heloc-orange-county" className="group">
              <Card className="border-2 hover:border-blue-300 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" aria-hidden="true" />
                  <CardTitle className="text-lg group-hover:text-blue-600">HELOC</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm text-center">
                    Access your Orange County home equity with flexible credit line
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/rate-term-refinance-orange-county" className="group">
              <Card className="border-2 hover:border-blue-300 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <Calculator className="w-8 h-8 text-orange-600 mx-auto mb-2" aria-hidden="true" />
                  <CardTitle className="text-lg group-hover:text-blue-600">Refinancing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm text-center">
                    Lower your pricing or access equity with Orange County refinancing
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16" aria-label="Frequently asked questions about VA loans for Orange County veterans">
          <h2 className="text-3xl font-bold text-center mb-8">
            VA Loan FAQ for Orange County Veterans
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
        <section className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white" aria-label="Contact Mo Abdel to start your VA loan application">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Use Your VA Benefits in Orange County?
          </h2>
          <p className="text-xl mb-6 text-blue-100" data-speakable="true">
            Honor your service with homeownership. Get started with your VA loan today with Mo Abdel,
            your trusted Orange County VA loan specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold" aria-label="Start your VA loan application with Mo Abdel">
                Start My VA Loan Application
              </Button>
            </Link>
            <a href="tel:9498229662">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg" aria-label="Call VA expert Mo Abdel at (949) 822-9662">
                Call VA Expert: (949) 822-9662
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed mortgage broker with Lumin Lending • NMLS #1426884 • Proudly serving Orange County veterans
          </p>
        </section>
      </div>
    </article>
  );
}
