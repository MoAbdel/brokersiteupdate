import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, TrendingUp, Shield, DollarSign, CheckCircle, ArrowRight, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'HELOC Specialist Orange County | Home Equity Lines of Credit | Lumin Lending',
  description: 'Orange County HELOC specialist. Access your home equity without losing your existing first mortgage. Competitive HELOC options, fast approvals. NMLS #1426884 | Company NMLS #2716106.',
  alternates: {
    canonical: 'https://www.luminlending.com/heloc-specialist-orange-county',
  },
};

export default function HELOCSpecialistOrangeCounty() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Home className="w-12 h-12 text-blue-200" />
              <span className="text-lg font-semibold text-blue-100">Home Equity Specialist</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Orange County HELOC Specialist
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Access your home equity strategically—without giving up your existing first mortgage
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://heloc.luminlending.com/account/heloc/register?referrer=cfc157b6-213d-43c7-9744-c1f238a8a44b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate My HELOC
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="tel:+19498229662">
                <Button size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                  Call (949) 822-9662
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The 2025 HELOC Strategy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why HELOCs Are the Smart 2025 Strategy
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                If you locked in a low mortgage in 2020-2021, you're sitting on one of the most valuable
                financial assets of your life. But what if you need cash?
              </p>
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
                <p className="text-slate-700 font-medium mb-2">
                  <span className="text-red-600 font-bold">The Cash-Out Refinance Trap:</span>
                </p>
                <p className="text-slate-600">
                  Refinancing your $800,000 loan to pull out $100,000 means replacing your existing low-payment first mortgage
                  with a new higher-payment loan—costing you <span className="font-bold text-red-600">thousands extra per month</span> in unnecessary payments.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <p className="text-slate-700 font-medium mb-2">
                  <span className="text-green-600 font-bold">The HELOC Solution:</span>
                </p>
                <p className="text-slate-600">
                  Keep your existing first mortgage untouched. Add a $100,000 HELOC as a second lien.
                  You preserve your low first mortgage payment and only pay on the funds you actually use.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Real Numbers Comparison
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border-2 border-red-200">
                  <div className="text-sm text-red-600 font-semibold mb-2">CASH-OUT REFINANCE</div>
                  <div className="text-sm text-slate-600 mb-3">$900K new loan (refinancing existing $800K)</div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">$5,835/mo</div>
                  <div className="text-sm text-red-600">+$2,240/mo vs. keeping existing mortgage</div>
                </div>

                <div className="flex justify-center">
                  <div className="text-green-600 font-bold text-lg">VS</div>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-green-600">
                  <div className="text-sm text-green-600 font-semibold mb-2">HELOC STRATEGY</div>
                  <div className="text-sm text-slate-600 mb-3">$800K existing mortgage + $100K HELOC</div>
                  <div className="text-3xl font-bold text-green-700 mb-1">$3,345/mo</div>
                  <div className="text-sm text-green-600">Save $2,490/mo • $897,000 over 30 years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How HELOCs Work */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How HELOCs Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A revolving credit line secured by your home's equity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Credit Line Established</h3>
              <p className="text-slate-600">Based on your available equity (typically 80-90% combined loan-to-value), we establish a credit line you can draw from as needed.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Flexible Draws</h3>
              <p className="text-slate-600">Access funds anytime during the 10-year draw period. Use what you need, pay interest only on what you borrow.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Repayment Phase</h3>
              <p className="text-slate-600">After the draw period, enter a 20-year repayment phase where you pay back principal plus interest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Uses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Strategic Uses for HELOCs in Orange County
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Home Renovations & Upgrades', description: 'Kitchen remodels, ADU construction, pool installation—projects that increase property value' },
              { title: 'Investment Property Down Payments', description: 'Leverage equity from your primary to acquire rental properties in Irvine, Newport Beach, or Costa Mesa' },
              { title: 'Debt Consolidation', description: 'Pay off high-interest credit cards, auto loans, and student loans at HELOC pricing' },
              { title: 'College Tuition Funding', description: 'Alternative to Parent PLUS loans with potentially better pricing and flexible repayment' },
              { title: 'Business Capital', description: 'Fund business expansion, equipment purchases, or working capital needs' },
              { title: 'Emergency Reserves', description: 'Maintain a credit line for unexpected expenses without tapping retirement accounts' }
            ].map((use, index) => (
              <div key={index} className="flex items-start gap-4 bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-blue-400 transition-colors">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{use.title}</h3>
                  <p className="text-slate-600">{use.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HELOC vs HELOAN */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              HELOC vs. Home Equity Loan (HELOAN)
            </h2>
            <p className="text-lg text-slate-600">
              Understanding your options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">HELOC (Recommended)</h3>
              <ul className="space-y-4">
                {[
                  'Revolving credit line—borrow as needed',
                  'Flexible pricing options available',
                  'Interest-only payments during draw period',
                  'Flexibility to pay down and re-borrow',
                  'Lower closing costs',
                  'Best for: Ongoing projects, reserves, multiple uses'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-200 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Home Equity Loan</h3>
              <ul className="space-y-4">
                {[
                  'Lump sum disbursement',
                  'Fixed pricing (predictable payments)',
                  'Principal + interest from day one',
                  'Cannot re-borrow once paid down',
                  'Slightly higher closing costs',
                  'Best for: One-time expense, payment certainty preferred'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-200 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Orange County Market Insight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Orange County HELOC Market Insight
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">$1.26M</div>
                <p className="text-blue-100">Median home value in Irvine, Newport Beach</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">80-90%</div>
                <p className="text-blue-100">Combined LTV available for HELOCs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">$300K+</div>
                <p className="text-blue-100">Average available equity for OC homeowners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Access Your Home Equity Strategically?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free HELOC analysis and loan quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://heloc.luminlending.com/account/heloc/register?referrer=cfc157b6-213d-43c7-9744-c1f238a8a44b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                <Calculator className="w-5 h-5 mr-2" />
                Start Digital HELOC Application
              </Button>
            </a>
            <a href="tel:+19498229662">
              <Button size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                Call (949) 822-9662
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-100 mt-6">
            Mo Abdel, NMLS #1426884 | Lumin Lending, Inc. NMLS #2716106 | CA DRE #02291443
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            HELOC FAQs for Orange County Homeowners
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'How much equity can I access with a HELOC?',
                answer: 'Most lenders allow HELOCs up to 80-90% combined loan-to-value (CLTV). For example, if your home is worth $1M with a $600K first mortgage, you could access up to $300K with a HELOC (90% CLTV = $900K total debt - $600K existing = $300K available).'
              },
              {
                question: 'How do HELOC payments work in Orange County?',
                answer: 'HELOCs typically have a 10-year draw period with interest-only payments on what you borrow, followed by a 20-year repayment period. You only pay on the amount you actually use, and pricing depends on credit score, CLTV, and lender. We shop 100+ lenders to find your best pricing.'
              },
              {
                question: 'Can I get a HELOC if I have an existing low first mortgage?',
                answer: 'Absolutely—this is the ideal scenario for a HELOC. You preserve your existing first mortgage payment and add a second lien for the funds you need. This strategy saves thousands compared to a cash-out refinance that would replace your current mortgage with a new higher-payment loan.'
              },
              {
                question: 'How long does it take to get a HELOC approved?',
                answer: 'Typical turnaround is 2-3 weeks from application to funding. We offer digital HELOC applications that streamline the process significantly compared to traditional bank HELOCs which can take 30-45 days.'
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
