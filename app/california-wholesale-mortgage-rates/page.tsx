import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingDown, Building2, Shield, CheckCircle, ArrowRight, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'California Wholesale Mortgage Rates | Direct Lender Access | West Capital Lending',
  description: 'Access wholesale mortgage rates across 100+ lenders in California. Better pricing than retail banks through direct wholesale channels. NMLS #1426884 | Company NMLS #1566096.',
  alternates: {
    canonical: 'https://www.mothebroker.com/california-wholesale-mortgage-rates',
  },
};

export default function CaliforniaWholesaleMortgageRates() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              California Wholesale Mortgage Rates
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Access wholesale pricing across 100+ lenders—the same rates banks get, now available to you
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Wholesale Rate Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+19495372357">
                <Button size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                  Call (949) 537-2357
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Wholesale Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What Are Wholesale Mortgage Rates?
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Wholesale mortgage rates are the institutional pricing that banks and lenders offer to mortgage brokers—
                typically <span className="font-semibold text-green-600">0.25% to 0.75% lower</span> than retail rates
                offered directly to consumers.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                When you work with West Capital Lending, you bypass the retail markup and access the same wholesale
                channels that major banks use to fund their own loans.
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <p className="text-slate-700 font-medium">
                  <span className="text-green-600 font-bold">Example:</span> On a $500,000 loan,
                  a 0.5% rate reduction saves you approximately <span className="font-bold">$150/month</span> or
                  <span className="font-bold"> $54,000 over 30 years</span>.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Retail vs. Wholesale Pricing
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border-2 border-red-200">
                  <div className="text-sm text-red-600 font-semibold mb-2">RETAIL BANK RATE</div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">6.875%</div>
                  <div className="text-sm text-slate-600">Direct to consumer pricing</div>
                </div>

                <div className="flex justify-center">
                  <TrendingDown className="w-8 h-8 text-green-600" />
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-green-600">
                  <div className="text-sm text-green-600 font-semibold mb-2">WHOLESALE BROKER RATE</div>
                  <div className="text-3xl font-bold text-green-700 mb-2">6.375%</div>
                  <div className="text-sm text-slate-600">Save 0.5% with wholesale access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Wholesale Access Works */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Wholesale Access Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Understanding the wholesale mortgage channel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                1. Multiple Lender Access
              </h3>
              <p className="text-slate-600">
                I submit your scenario to 100+ wholesale lenders simultaneously, each competing for your business
                with their best institutional pricing.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                2. Wholesale Pricing
              </h3>
              <p className="text-slate-600">
                Lenders offer wholesale rates (no retail markup) because they save on overhead—no branches,
                no marketing costs, no retail infrastructure.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                3. Best Rate Selection
              </h3>
              <p className="text-slate-600">
                I analyze all offers and present you with the optimal combination of rate, fees, and program
                features for your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Programs Available */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Wholesale Programs Available
            </h2>
            <p className="text-lg text-slate-600">
              Access wholesale pricing across all loan types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Conventional Loans', details: 'Up to $4M | As low as 3% down' },
              { name: 'Jumbo Loans', details: 'Above conforming limits | Competitive wholesale rates' },
              { name: 'FHA Loans', details: '3.5% down | Flexible credit requirements' },
              { name: 'VA Loans', details: '$0 down for veterans | No PMI' },
              { name: 'Non-QM Loans', details: 'Bank statement | DSCR | Asset depletion' },
              { name: 'HELOC & Second Mortgages', details: 'Tap equity without refinancing' },
            ].map((program, index) => (
              <div key={index} className="flex items-start gap-4 bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-green-400 transition-colors">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{program.name}</h3>
                  <p className="text-slate-600">{program.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose West Capital Lending */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose West Capital Lending for Wholesale Rates?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Not all brokers have equal access to wholesale channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '100+ Lenders', description: 'Vast wholesale network' },
              { title: 'Volume Pricing', description: 'Better rates through scale' },
              { title: '15-21 Day Closings', description: 'Streamlined processing' },
              { title: 'Licensed Statewide', description: 'All 58 CA counties' },
            ].map((benefit, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">{benefit.title}</div>
                <p className="text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Access Wholesale Mortgage Rates?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Get a no-obligation rate quote from 100+ wholesale lenders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                <Calculator className="w-5 h-5 mr-2" />
                Get My Wholesale Rate Quote
              </Button>
            </Link>
            <a href="tel:+19495372357">
              <Button size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                Call (949) 537-2357
              </Button>
            </a>
          </div>
          <p className="text-sm text-green-100 mt-6">
            Mo Abdel, NMLS #1426884 | West Capital Lending, Inc. NMLS #1566096 | CA DRE #02022356
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'How much can I save with wholesale mortgage rates?',
                answer: 'Wholesale rates are typically 0.25% to 0.75% lower than retail bank rates. On a $500,000 loan, this translates to savings of $75-$225 per month, or $27,000-$81,000 over the life of a 30-year loan.'
              },
              {
                question: 'Are there any catches or hidden fees with wholesale rates?',
                answer: 'No. Wholesale rates simply reflect the institutional pricing that lenders offer to brokers. You receive the same loan terms and consumer protections as retail bank customers, just at better pricing. All fees are disclosed upfront.'
              },
              {
                question: 'How do brokers get access to wholesale rates?',
                answer: 'Mortgage brokers like West Capital Lending have direct contracts with wholesale lenders. These lenders offer better pricing to brokers because they save on retail overhead—no branch network, no advertising costs, and streamlined operations.'
              },
              {
                question: 'Will my credit be pulled multiple times?',
                answer: 'No. I only pull your credit once. That single report is then submitted to multiple wholesale lenders for rate quotes. All inquiries within a 45-day shopping period count as a single inquiry for credit scoring purposes.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
