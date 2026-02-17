import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, BarChart3, Briefcase, DollarSign, Hammer, Home, PiggyBank, Shield, Sprout, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { buildServiceWebPageSchema } from '@/lib/schema-entities';

export const metadata: Metadata = {
  title: 'California & Washington Loan Programs | FHA, VA, HELOC, HELOAN, Jumbo, Non-QM',
  description:
    'Compare mortgage and refinance options across California and Washington including FHA, VA, HELOC, HELOAN, jumbo, and non-QM programs with expert broker guidance.',
  alternates: {
    canonical: 'https://www.mothebroker.com/loan-programs',
    languages: {
      'en-US': 'https://www.mothebroker.com/loan-programs',
      'x-default': 'https://www.mothebroker.com/loan-programs',
    },
  },
};

const pageSchema = buildServiceWebPageSchema({
  pageUrl: 'https://www.mothebroker.com/loan-programs',
  title: 'California & Washington Loan Programs | FHA, VA, HELOC, HELOAN, Jumbo, Non-QM',
  description:
    'Compare mortgage and refinance options across California and Washington including FHA, VA, HELOC, HELOAN, jumbo, and non-QM programs with expert broker guidance.',
  breadcrumbName: 'Loan Programs',
});

const loanPrograms = [
  {
    title: 'FHA Refinance',
    icon: Home,
    href: '/loan-programs/fha-loans',
    description: 'Lower your monthly payment or eliminate PMI with an FHA refinance',
    features: [
      'Rate-and-term refinance options',
      'Streamline refinance (no appraisal often needed)',
      'Cash-out options available',
      'Competitive loan pricing'
    ],
    bestFor: 'Homeowners with existing FHA loans or limited equity'
  },
  {
    title: 'VA Refinance',
    icon: Shield,
    href: '/loan-programs/va-refinance',
    description: 'Exclusive refinancing benefits for military veterans and service members',
    features: [
      'Streamline Refinance (IRRRL)',
      '100% Cash-out Refinance',
      'No private mortgage insurance',
      'Competitive loan pricing'
    ],
    bestFor: 'Military veterans and active duty homeowners'
  },
  {
    title: 'Conventional Refinance',
    icon: Users,
    href: '/loan-programs/conventional-loans',
    description: 'Traditional refinancing with flexible terms and options',
    features: [
      'Lower your interest pricing',
      'Switch from adjustable to fixed rate',
      'Eliminate private mortgage insurance',
      'Various term lengths (15, 20, 30 years)'
    ],
    bestFor: 'Homeowners with good credit and equity'
  },
  {
    title: 'Jumbo Refinance',
    icon: TrendingUp,
    href: '/loan-programs/jumbo-loans',
    description: 'Refinancing for high-value properties across California and Washington',
    features: [
      'Refinance balances above conforming limits',
      'Competitive jumbo rates',
      'Cash-out options for luxury homes',
      'Various ARM and fixed-rate options'
    ],
    bestFor: 'Luxury homeowners and high-value property owners'
  }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Mortgage <span className="text-blue-600">Loan Programs</span> – FHA, VA, Jumbo & More
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            As a licensed broker with Lumin Lending - the nation's largest brokerage -
            I have access to over 200 lenders offering competitive pricing and flexible refinance
            programs for homeowners across California and Washington.
          </p>
        </div>

        {/* HELOC/HELOAN - Top Priority */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <span className="text-slate-900">HELOC & Cash-Out Refinance Options</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unlock your home's equity with flexible credit lines and loans across California and Washington
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* HELOC */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg relative">
              <div className="absolute -top-4 left-6">
                <span className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-bold">
                  #1 MOST POPULAR
                </span>
              </div>

              <div className="flex items-center mb-6 mt-4">
                <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">HELOC (Home Equity Line of Credit)</h3>
                  <p className="text-slate-700">Flexible credit line up to $500K</p>
                </div>
              </div>

              <div className="bg-slate-100 border-2 border-slate-300 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-slate-900 font-bold">NEW: 5-Minute Pre-Approval</span>
                </div>
                <p className="text-blue-700 text-center text-sm">
                  Revolutionary fast-track program • Funds in 5-7 business days
                </p>
              </div>

              <div className="bg-slate-100 border border-slate-200 rounded-lg p-4 mb-6">
                <p className="text-slate-900 font-bold text-center text-lg">
                  Access $50K - $500K • Competitive variable rates
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>Draw as needed</strong> - only pay interest on what you use</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>Interest-only payments</strong> for first 10 years</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>Fixed rate options</strong> available*</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://heloc.luminlending.com/account/heloc/register?referrer=cfc157b6-213d-43c7-9744-c1f238a8a44b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white py-3 text-lg font-semibold flex items-center justify-center">
                    <Zap className="w-5 h-5 mr-2" />
                    5-Min Pre-Approval
                  </Button>
                </a>
                <Link href="/heloc-orange-county">
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white py-3 text-lg font-semibold">
                    Traditional HELOC Details
                  </Button>
                </Link>
              </div>
            </div>

            {/* HELOAN */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg relative">
              <div className="absolute -top-4 left-6">
                <span className="bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-bold">
                  FIXED PAYMENT
                </span>
              </div>

              <div className="flex items-center mb-6 mt-4">
                <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mr-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">HELOAN (Home Equity Loan)</h3>
                  <p className="text-slate-700">Fixed pricing lump sum loan</p>
                </div>
              </div>

              <div className="bg-slate-100 border border-slate-200 rounded-lg p-4 mb-6">
                <p className="text-slate-900 font-bold text-center text-lg">
                  Lump sum up to $500K • Fixed monthly payments
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>Fixed loan pricing</strong> - payment never changes</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>Lump sum at closing</strong> - get all cash upfront</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>Predictable payments</strong> - budget with confidence</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-slate-700"><strong>Lower pricing</strong> than personal loans or credit cards</span>
                </div>
              </div>

              <Link href="/heloan-orange-county">
                <Button className="w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white py-3 text-lg font-semibold">
                  Get HELOAN Pricing & Terms
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Refinancing Programs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Refinancing Options
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Already have a mortgage? Optimize it with our specialized refinancing programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Cash-Out Refinancing */}
            <Link href="/cash-out-refinance" className="block h-full group">
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-slate-200 relative h-full transition-all duration-300 hover:border-slate-300 hover:shadow-2xl">
                <div className="absolute -top-4 left-6">
                  <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    MOST POPULAR
                  </span>
                </div>

                <div className="flex items-center mb-6 mt-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-slate-900">Cash-Out Refinancing</h3>
                      <ArrowRight className="w-6 h-6 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-slate-600">Unlock your home's equity for major financial goals</p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <p className="text-slate-900 font-semibold text-center">
                    Unlock $50K - $500K+ from your home
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span className="text-slate-700">Access up to 80% of your home's value in cash</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span className="text-slate-700">Rates often lower than personal loans or credit cards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span className="text-slate-700">Consolidate high-interest debt into one low payment</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Best For:</h4>
                  <p className="text-slate-600">Home improvements, debt consolidation, investment opportunities, education expenses, major purchases</p>
                </div>
              </div>
            </Link>

            {/* Rate & Term Refinancing */}
            <Link href="/loan-programs/rate-term-refinance" className="block h-full group">
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-slate-200 relative h-full transition-all duration-300 hover:border-slate-300 hover:shadow-2xl">
                <div className="absolute -top-4 left-6">
                  <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    MONEY SAVER
                  </span>
                </div>

                <div className="flex items-center mb-6 mt-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-slate-900">Rate & Term Refinancing</h3>
                      <ArrowRight className="w-6 h-6 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-slate-600">Lower your payments or pay off your mortgage faster</p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <p className="text-slate-900 font-semibold text-center">
                    Save $200-500/month on payments
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span className="text-slate-700">Reduce monthly payments with current pricing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span className="text-slate-700">Eliminate PMI when you reach 20% equity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span className="text-slate-700">Switch from ARM to fixed-rate for stability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span className="text-slate-700">Shorten loan term to save thousands in interest</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Best For:</h4>
                  <p className="text-slate-600">Homeowners with rates above 6%, those paying PMI, ARM loan holders wanting stability</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Loan Programs
            </h2>
          </div>
        </div>

        {/* Loan Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {loanPrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
              <div className="flex items-center mb-6">
                <program.icon className="w-12 h-12 text-blue-600 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{program.title}</h2>
                  <p className="text-slate-600">{program.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Best For:</h3>
                <p className="text-slate-600 mb-6">{program.bestFor}</p>
                <Link href={program.href}>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950">
                    Learn More About {program.title} →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Regional Program Pages</h2>
          <p className="text-slate-600 mb-6">
            Fast access to high-intent regional loan program pages.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link className="text-blue-700 hover:underline" href="/rate-term-refinance-orange-county">
              Rate &amp; Term Refinance (Regional)
            </Link>
            <Link className="text-blue-700 hover:underline" href="/loan-programs/va-refinance">
              VA Refinance (IRRRL)
            </Link>
            <Link className="text-blue-700 hover:underline" href="/loan-programs/orange-county-va-loans">
              VA Loans (Regional)
            </Link>
            <Link className="text-blue-700 hover:underline" href="/loan-programs/fha-loans-irvine">
              FHA Loans in Irvine
            </Link>
            <Link className="text-blue-700 hover:underline" href="/loan-programs/bank-statement-loans-irvine">
              Bank Statement Loans (Irvine)
            </Link>
            <Link className="text-blue-700 hover:underline" href="/loan-programs/orange-county-fha-loan-limits">
              FHA Loan Limits (Regional)
            </Link>
            <Link className="text-blue-700 hover:underline" href="/orange-county-conventional-loans">
              Conventional Loans (Regional)
            </Link>
            <Link className="text-blue-700 hover:underline" href="/orange-county-fha-loans">
              FHA Loans (Regional)
            </Link>
            <Link className="text-blue-700 hover:underline" href="/non-qm-loans-orange-county">
              Non-QM Loans (Regional)
            </Link>
            <Link className="text-blue-700 hover:underline" href="/heloc-specialist-orange-county">
              HELOC Specialist (Regional)
            </Link>
          </div>
        </div>

        {/* Non-QM & Specialty Programs */}
        <div className="bg-slate-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">
            Non-QM & Specialty Programs
          </h2>
          <p className="text-slate-600 text-center mb-8">
            Alternative financing solutions for unique situations and non-traditional borrowers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Link href="/loan-programs/bank-statement-loans" className="block">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Bank Statement Loans</h3>
                <p className="text-sm text-slate-600 mb-3">Perfect for self-employed borrowers who can't document traditional income</p>
                <div className="text-xs text-slate-500 mb-4">
                  • 12-24 month bank statements<br />
                  • Up to $3M loan amounts<br />
                  • Investment properties OK
                </div>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white py-2 text-sm">
                  Get Details →
                </Button>
              </div>
            </Link>

            <Link href="/loan-programs/asset-depletion-loans" className="block">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Asset Depletion</h3>
                <p className="text-sm text-slate-600 mb-3">Qualify using your assets instead of traditional income</p>
                <div className="text-xs text-slate-500 mb-4">
                  • Retirement accounts<br />
                  • Investment portfolios<br />
                  • High net worth borrowers
                </div>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white py-2 text-sm">
                  Get Details →
                </Button>
              </div>
            </Link>

            <Link href="/loan-programs/fix-flip-loans" className="block">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Hammer className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Fix & Flip Loans</h3>
                <p className="text-sm text-slate-600 mb-3">Short-term financing for real estate investors and flippers</p>
                <div className="text-xs text-slate-500 mb-4">
                  • 6-24 month terms<br />
                  • Quick closings (7-10 days)<br />
                  • Up to 90% ARV
                </div>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white py-2 text-sm">
                  Get Details →
                </Button>
              </div>
            </Link>

            <Link href="/loan-programs/dscr-investment-loans" className="block">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">DSCR Investment Loans</h3>
                <p className="text-sm text-slate-600 mb-3">Qualify based on rental income, not personal income</p>
                <div className="text-xs text-slate-500 mb-4">
                  • No income documentation<br />
                  • Portfolio lenders<br />
                  • 1.0+ DSCR required
                </div>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white py-2 text-sm">
                  Get Details →
                </Button>
              </div>
            </Link>

            <Link href="/loan-programs/foreign-national-loans" className="block">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Foreign National Loans</h3>
                <p className="text-sm text-slate-600 mb-3">Mortgages for non-US citizens investing in US real estate</p>
                <div className="text-xs text-slate-500 mb-4">
                  • No US credit required<br />
                  • 25-40% down payment<br />
                  • Purchase or refinance
                </div>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white py-2 text-sm">
                  Get Details →
                </Button>
              </div>
            </Link>

            <Link href="/loan-programs/usda-rural-loans" className="block">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Sprout className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">USDA Rural Loans</h3>
                <p className="text-sm text-slate-600 mb-3">Zero down payment for eligible rural and suburban areas</p>
                <div className="text-xs text-slate-500 mb-4">
                  • 0% down payment<br />
                  • Income limits apply<br />
                  • Rural area requirement
                </div>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white py-2 text-sm">
                  Get Details →
                </Button>
              </div>
            </Link>

            <Link href="/loan-programs/profit-loss-statement-loans" className="block">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">P&L Statement Loans</h3>
                <p className="text-sm text-slate-600 mb-3">CPA-prepared profit & loss statements for income verification</p>
                <div className="text-xs text-slate-500 mb-4">
                  • No personal tax returns<br />
                  • CPA-prepared statements<br />
                  • Business income focus
                </div>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white py-2 text-sm">
                  Get Details →
                </Button>
              </div>
            </Link>
          </div>

          <div className="text-center bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Don't See What You Need?</h3>
            <p className="text-slate-600 mb-4">
              With access to 200+ lenders, we have solutions for almost every situation.
            </p>
            <Link href="/contact">
              <Button className="bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white px-6 py-2">
                Discuss Your Unique Situation
              </Button>
            </Link>
          </div>
        </div>

        {/* Rate Factors */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Factors That Affect Your Rate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-7 h-7 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Credit Score</h3>
              <p className="text-slate-600">
                Higher credit scores typically qualify for better loan pricing.
                I can help improve your score before applying.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PiggyBank className="w-7 h-7 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Down Payment</h3>
              <p className="text-slate-600">
                Larger down payments often result in Better pricing and eliminate
                the need for mortgage insurance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-7 h-7 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Property Type</h3>
              <p className="text-slate-600">
                Primary residences typically get the best pricing, followed by
                second homes and investment properties.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-slate-900 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Loan?</h2>
          <p className="text-xl mb-6 text-slate-200">
            Let me analyze your situation and recommend the best loan program for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-slate-950 hover:bg-slate-100 px-8 py-3 text-base sm:text-lg">
                <span className="sm:hidden">Get Recommendations</span>
                <span className="hidden sm:inline">Get Program Recommendations</span>
              </Button>
            </Link>
            <Link href="/calculator">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg">
                Calculate Payments
              </Button>
            </Link>
          </div>
        </div>

        {/* Required Disclaimers */}
        <div className="bg-slate-100 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Important Disclaimers</h3>
          <div className="text-sm text-slate-700 space-y-2">
            <p>
              <strong>This is not a commitment to lend.</strong> All information contained herein is subject to change without notice.
              All loans are subject to credit approval, income verification, and property appraisal. Equal Housing Lender.
            </p>
            <p>
              This material is not from HUD or FHA and has not been approved by HUD or any government agency.
              The information provided is for informational purposes only and is not an advertisement for products or services.
            </p>
            <p>
              Loan pricing and loan terms are subject to change without notice. All information must be verified prior to loan approval.
              Mo Abdel - NMLS #1426884, Licensed Mortgage Loan Originator with Lumin Lending.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}