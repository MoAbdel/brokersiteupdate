import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, FileText, DollarSign, CheckCircle, ArrowRight, Calculator, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Self-Employed Home Loans California | Bank Statement & Non-QM Programs | Lumin Lending',
  description: 'Specialized mortgage programs for self-employed borrowers in California. Bank statement loans, DSCR, asset depletion, and P&L programs. NMLS #1426884 | Company NMLS #2716106.',
  alternates: {
    canonical: 'https://www.mothebroker.com/self-employed-home-loans-california',
    languages: {
      'en-US': 'https://www.mothebroker.com/self-employed-home-loans-california',
      'x-default': 'https://www.mothebroker.com/self-employed-home-loans-california',
    },
  },
};

export default function SelfEmployedHomeLoans() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-12 h-12 text-purple-200" />
              <span className="text-lg font-semibold text-purple-100">Specialized Programs</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Self-Employed Home Loans in California
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Mortgage programs designed for business owners, freelancers, and 1099 contractors—without traditional W-2 income verification
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                  <Calculator className="w-5 h-5 mr-2" />
                  Check My Qualification
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+19498229662">
                <Button size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                  Call (949) 822-9662
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Self-Employed Challenge */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Self-Employed Mortgage Challenge
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Traditional mortgage underwriting was built for W-2 employees. If you're self-employed, you face unique obstacles:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Tax write-offs reduce your "qualifying income" even though cash flow is strong',
                  '2 years of tax returns required (but your business just took off this year)',
                  'Variable income patterns trigger red flags with automated underwriting',
                  'Business deductions for home office, vehicle, meals reduce taxable income',
                  '1099 income, multiple LLCs, or partnership distributions complicate verification'
                ].map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div>
                    </div>
                    <span className="text-slate-600">{challenge}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <p className="text-slate-700 font-medium">
                  <span className="text-purple-600 font-bold">The Solution:</span> Alternative income documentation programs
                  that evaluate your actual cash flow—not just what you reported to the IRS.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Who Benefits from These Programs?
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Business Owners', description: 'S-Corp, C-Corp, LLC owners with complex tax strategies' },
                  { title: 'Freelancers & Consultants', description: '1099 contractors with variable income streams' },
                  { title: 'Real Estate Investors', description: 'DSCR loans based on rental income, not personal income' },
                  { title: 'Commission-Based Professionals', description: 'High earners with non-traditional compensation' },
                  { title: 'Recent Business Owners', description: 'Less than 2 years of tax returns but strong cash flow' }
                ].map((profile, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-purple-200">
                    <div className="font-bold text-slate-900 mb-1">{profile.title}</div>
                    <p className="text-sm text-slate-600">{profile.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Self-Employed Mortgage Program Options
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Multiple pathways to qualification based on your income documentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bank Statement Loans */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Bank Statement Loans</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Qualify using 12-24 months of business or personal bank statements instead of tax returns.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  'Use deposits to calculate income (no tax returns required)',
                  'Personal or business bank statements accepted',
                  'Loan amounts up to $3M+',
                  'Purchase or refinance',
                  'Down payment as low as 10%'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-sm font-semibold text-purple-900 mb-1">Best For:</div>
                <p className="text-sm text-slate-700">
                  Self-employed borrowers with strong bank deposits but low reported taxable income due to write-offs
                </p>
              </div>
            </div>

            {/* DSCR Loans */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">DSCR Investment Loans</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Qualify based on rental income from the property—no personal income verification required.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  'Qualification based on rent vs. mortgage payment ratio',
                  'No tax returns, W-2s, or pay stubs required',
                  'Purchase or cash-out refinance',
                  'Unlimited number of properties financed',
                  'LLCs and trusts eligible'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-sm font-semibold text-blue-900 mb-1">Best For:</div>
                <p className="text-sm text-slate-700">
                  Real estate investors acquiring rental properties without using personal income for qualification
                </p>
              </div>
            </div>

            {/* Asset Depletion */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Asset Depletion Loans</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Use investment accounts, retirement funds, or liquid assets to demonstrate repayment ability.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  'Qualify based on assets, not income',
                  'Calculate monthly income from asset balances',
                  'Stocks, bonds, IRAs, 401(k)s, savings accepted',
                  'No employment or tax return verification',
                  'Ideal for retired entrepreneurs or high-net-worth individuals'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-sm font-semibold text-green-900 mb-1">Best For:</div>
                <p className="text-sm text-slate-700">
                  Borrowers with significant liquid assets but limited or irregular documented income
                </p>
              </div>
            </div>

            {/* P&L Programs */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Profit & Loss Programs</h3>
              </div>
              <p className="text-slate-600 mb-4">
                CPA-prepared P&L statements replace tax returns for recent business owners.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  'CPA-prepared financial statements accepted',
                  'As little as 1 year of business history',
                  'Alternative to 2-year tax return requirement',
                  'Conventional and non-QM options available',
                  'Purchase or refinance'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="text-sm font-semibold text-orange-900 mb-1">Best For:</div>
                <p className="text-sm text-slate-700">
                  Recently self-employed borrowers (1-2 years) with strong current earnings but limited tax history
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Lumin Lending Self-Employed Loan Process
            </h2>
            <p className="text-lg text-slate-600">
              Simplified application designed for business owners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Income Analysis', description: 'We review your business structure and identify the optimal documentation strategy' },
              { step: '2', title: 'Document Gathering', description: 'Collect bank statements, P&Ls, or asset statements based on your chosen program' },
              { step: '3', title: 'Lender Matching', description: 'Submit to specialized non-QM lenders with self-employed expertise' },
              { step: '4', title: 'Close in 15-21 Days', description: 'Streamlined underwriting and fast funding' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">{item.title}</h3>
                <p className="text-sm text-slate-600 text-center">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-purple-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Pre-Qualified as a Self-Employed Borrower?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Let's discuss which program best fits your income documentation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                <Calculator className="w-5 h-5 mr-2" />
                Start My Application
              </Button>
            </Link>
            <a href="tel:+19498229662">
              <Button size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                Call (949) 822-9662
              </Button>
            </a>
          </div>
          <p className="text-sm text-purple-100 mt-6">
            Mo Abdel, NMLS #1426884 | Lumin Lending, Inc. NMLS #2716106 | CA DRE #02291443
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Self-Employed Mortgage FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'Do I need 2 years of tax returns if I\'m self-employed?',
                answer: 'Not necessarily. While traditional conforming loans require 2 years of tax returns, bank statement programs, DSCR loans, and asset depletion programs do not. The right program depends on your specific situation and documentation availability.'
              },
              {
                question: 'What if my tax returns show lower income than I actually earn?',
                answer: 'This is exactly why bank statement programs exist. We calculate your income based on actual deposits into your business or personal accounts, not your adjusted gross income on tax returns. This typically results in significantly higher qualifying income.'
              },
              {
                question: 'Can I use business bank statements or do they need to be personal?',
                answer: 'Most bank statement programs accept either business or personal bank statements. Business accounts are common for sole proprietors, LLCs, and S-Corps. We analyze deposits and apply an expense factor (typically 25-50%) to arrive at qualifying income.'
              },
              {
                question: 'How long does it take to get approved for a self-employed mortgage?',
                answer: 'The approval timeline varies by program complexity and documentation readiness. Bank statement loans typically take 15-21 days from application to closing, while DSCR investor loans can often close even faster. Having your documentation organized upfront helps expedite the process significantly.'
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
