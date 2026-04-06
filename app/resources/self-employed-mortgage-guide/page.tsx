import React from 'react';
import type { Metadata } from 'next';
import { CheckCircle, AlertCircle, Briefcase } from 'lucide-react';
import { LeadMagnetForm } from '@/components/lead-magnets/LeadMagnetForm';

export const metadata: Metadata = {
  title:
    'Self-Employed Mortgage Guide: 12 vs 24 Month Bank Statements Explained | MoTheBroker',
  description:
    'The complete guide for self-employed borrowers in CA and WA. Learn how bank statement loans work and how to qualify without tax returns.',
};

const COMPLIANCE_FOOTER =
  'Mo Abdel | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443 | Equal Housing Lender | Rates shown are for illustrative purposes. Actual rates and qualification criteria vary based on credit profile, loan amount, and market conditions.';

const icpScenarios = [
  {
    role: 'Freelancer / Independent Contractor',
    detail:
      'Your 1099 income looks lower than your deposits because clients pay gross. Bank statements show the full picture.',
  },
  {
    role: 'Restaurant or Business Owner',
    detail:
      'High gross revenue is reduced by write-offs. Tax returns show minimal income. 12-month bank statements capture actual cash flow.',
  },
  {
    role: 'Real Estate Agent',
    detail:
      'Commission income is lumpy and often reduced by business expenses. Bank statement averaging smooths out seasonal variance.',
  },
  {
    role: 'Consultant',
    detail:
      'Large quarterly or project-based deposits may not map to a traditional W-2 schedule. Bank statements reflect reality.',
  },
  {
    role: 'E-Commerce Seller',
    detail:
      'Revenue from Shopify, Amazon, or similar platforms is verifiable via business bank account deposits over 12–24 months.',
  },
];

const qualificationChecklist = [
  '2 years of self-employment in the same field or industry',
  '12 or 24 months of business or personal bank statements',
  'Minimum 680 credit score (660 with larger down payment)',
  'Maximum 50% debt-to-income ratio',
  'At least 10–20% down payment depending on loan size',
  'Reserves of 2–6 months PITIA after closing',
  'Profit and Loss statement prepared by a CPA (some programs)',
  'Business license or CPA letter confirming 2-year history',
  'Letter of explanation for large deposits (if applicable)',
  'Property must be owner-occupied, second home, or investment',
  'Loan amounts available from $200K to $3M+',
  'No recent 30-day late payments on mortgage or major accounts',
];

export default function SelfEmployedMortgageGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Briefcase className="w-4 h-4 mr-1.5" />
            Self-Employed Borrower Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Self-Employed? Here's How to Get a Mortgage Without Your Tax Returns
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Bank statement loans use your actual cash flow — not what the IRS sees after
            deductions.
          </p>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
            The Problem With Tax Returns for Self-Employed Borrowers
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-500 shrink-0" />
                <h3 className="font-bold text-red-800 text-lg">The Problem</h3>
              </div>
              <p className="text-slate-700 text-base leading-relaxed">
                Tax returns show <strong>$80K income</strong> after deductions. Your bank
                statements show <strong>$240K in deposits</strong>. Which reflects your real
                ability to repay?
              </p>
              <p className="text-slate-600 text-sm mt-3">
                Traditional mortgage lenders use tax returns. Every business deduction you
                legally take — equipment, home office, mileage — reduces your qualifying income.
                The more efficient your tax strategy, the harder it is to qualify for a loan.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                <h3 className="font-bold text-green-800 text-lg">The Solution</h3>
              </div>
              <p className="text-slate-700 text-base leading-relaxed">
                Bank statement loans use 12 or 24 months of deposits — business or personal —
                to calculate your qualifying income. No tax returns. No W-2s.
              </p>
              <p className="text-slate-600 text-sm mt-3">
                Mo works with 50+ wholesale lenders that offer bank statement programs
                specifically designed for self-employed borrowers in California and Washington.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12 vs 24 Month Comparison Table */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
            12-Month vs. 24-Month Bank Statement Programs
          </h2>
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-4 font-semibold">Feature</th>
                  <th className="text-left px-4 py-4 font-semibold">12-Month Program</th>
                  <th className="text-left px-4 py-4 font-semibold">24-Month Program</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-slate-100">
                  <td className="px-4 py-4 font-medium text-slate-700">Best for</td>
                  <td className="px-4 py-4 text-slate-700">Higher recent income</td>
                  <td className="px-4 py-4 text-slate-700">Consistent long-term income</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <td className="px-4 py-4 font-medium text-slate-700">Typical rate premium</td>
                  <td className="px-4 py-4 text-amber-600 font-semibold">Slightly higher</td>
                  <td className="px-4 py-4 text-green-600 font-semibold">Lower</td>
                </tr>
                <tr className="bg-white border-b border-slate-100">
                  <td className="px-4 py-4 font-medium text-slate-700">Avg qualifying income</td>
                  <td className="px-4 py-4 text-slate-700">Last 12 months deposits ÷ 12</td>
                  <td className="px-4 py-4 text-slate-700">24-month average deposits ÷ 24</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <td className="px-4 py-4 font-medium text-slate-700">Risk to lender</td>
                  <td className="px-4 py-4 text-slate-700">Higher (shorter history)</td>
                  <td className="px-4 py-4 text-slate-700">Lower (longer track record)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-4 font-medium text-slate-700">Ideal scenario</td>
                  <td className="px-4 py-4 text-slate-700">
                    Business is growing; recent income exceeds prior years
                  </td>
                  <td className="px-4 py-4 text-slate-700">
                    Stable business with consistent monthly deposits
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ICP Scenarios */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
            Who This Program Is Built For
          </h2>
          <div className="space-y-4">
            {icpScenarios.map((scenario, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex gap-4"
              >
                <div className="shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{scenario.role}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{scenario.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Get Your Bank Statement Loan Estimate
            </h2>
            <p className="text-slate-600">
              Share a few details about your income situation and Mo will show you what you can
              qualify for — no tax returns, no judgment.
            </p>
          </div>
          <LeadMagnetForm
            magnetName="self_employed_mortgage_guide"
            subject="Self-Employed Bank Statement Loan Estimate Request"
            loanPurpose="purchase"
            fields={[
              {
                name: 'self_employed_type',
                label: 'How would you describe your income?',
                type: 'select',
                required: true,
                options: [
                  { label: 'Business owner / LLC', value: 'business_owner' },
                  { label: 'Freelancer / 1099 contractor', value: 'freelancer' },
                  { label: 'Real estate agent', value: 'real_estate_agent' },
                  { label: 'Consultant', value: 'consultant' },
                  { label: 'E-commerce / online business', value: 'ecommerce' },
                  { label: 'Other self-employed', value: 'other' },
                ],
              },
              {
                name: 'years_self_employed',
                label: 'How many years have you been self-employed?',
                type: 'select',
                required: true,
                options: [
                  { label: 'Less than 1 year', value: 'less_than_1' },
                  { label: '1–2 years', value: '1_2_years' },
                  { label: '2–5 years', value: '2_5_years' },
                  { label: '5+ years', value: '5_plus_years' },
                ],
              },
              {
                name: 'loan_purpose',
                label: 'What are you looking to do?',
                type: 'select',
                required: true,
                options: [
                  { label: 'Purchase a home', value: 'purchase' },
                  { label: 'Refinance my current mortgage', value: 'refinance' },
                  { label: 'Purchase an investment property', value: 'investment' },
                ],
              },
            ]}
          />
        </div>
      </section>

      {/* Qualification Checklist (post-capture teaser — always shown) */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Bank Statement Loan Qualification Checklist
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="grid md:grid-cols-2 gap-3">
              {qualificationChecklist.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Footer */}
      <footer className="py-8 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-slate-500 leading-relaxed">{COMPLIANCE_FOOTER}</p>
        </div>
      </footer>
    </div>
  );
}
