import React from 'react';
import type { Metadata } from 'next';
import { CheckCircle, TrendingUp, Building2, FileText, Clock } from 'lucide-react';
import { LeadMagnetForm } from '@/components/lead-magnets/LeadMagnetForm';
import { DSCRCalculator } from './DSCRCalculator';

export const metadata: Metadata = {
  title: 'DSCR Loan Investor Playbook: Qualify on Rental Income, Not Your W-2 | MoTheBroker',
  description:
    'The complete guide to DSCR loans for CA and WA real estate investors. No tax returns required. Access 50+ wholesale DSCR lenders.',
};

const COMPLIANCE_FOOTER =
  'Mo Abdel | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443 | Equal Housing Lender | Rates shown are for illustrative purposes. Actual rates and terms vary based on credit, loan amount, property, and market conditions.';

const nextSteps = [
  {
    step: '1',
    icon: FileText,
    title: 'Mo reviews your deal',
    body: 'Share the property address, estimated rent, and purchase price. Mo evaluates DSCR and identifies the best lender fit from 50+ options.',
  },
  {
    step: '2',
    icon: TrendingUp,
    title: 'Rate options within 24 hours',
    body: 'You'll receive a personalized rate sheet with multiple DSCR loan options — 30-year fixed, ARM, and interest-only where available.',
  },
  {
    step: '3',
    icon: Clock,
    title: 'Close in 15–21 days',
    body: 'Mo's wholesale process is built for speed. Most DSCR deals close in under three weeks so you don't lose deals to slower lenders.',
  },
];

const qualifiesItems = [
  'Real estate investors with any income type — W-2, self-employed, or retired',
  'Borrowers purchasing in LLC or personal name',
  'Investors with multiple financed properties',
  'Short-term rental (Airbnb/VRBO) investors (market rent used for qualification)',
  'Foreign nationals (program-specific)',
  'No tax returns or income verification required in most cases',
];

const offerItems = [
  'Loan amounts up to $2.5M',
  '20% minimum down payment',
  '30-year fixed or ARM options',
  'Short-term rental income eligible',
  'LLC or personal name vesting',
  'Fast 15–21 day closings',
];

export default function DSCRInvestorPlaybookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Building2 className="w-4 h-4 mr-1.5" />
            For Real Estate Investors
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            The DSCR Loan Playbook: Finance Investment Properties Without Your W-2
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Qualify on rental income. No tax returns. No paystubs. Access 50+ wholesale DSCR
            lenders in California and Washington.
          </p>
        </div>
      </section>

      {/* 4-Section Explainer */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
            Everything You Need to Know About DSCR Loans
          </h2>

          {/* Section 01 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl font-black text-blue-100 leading-none">01</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                What is DSCR and How It's Calculated
              </h3>
            </div>
            <p className="text-slate-600 mb-4">
              DSCR stands for Debt Service Coverage Ratio. It measures whether a rental property
              generates enough income to cover its own mortgage payment — without looking at your
              personal income or tax returns.
            </p>
            <div className="bg-slate-900 text-white rounded-lg px-5 py-4 font-mono text-base mb-4">
              DSCR = Net Operating Income ÷ Total Debt Service
            </div>
            <p className="text-slate-600">
              Most DSCR lenders require a ratio of 1.0 or higher. A 1.25+ DSCR typically unlocks
              the best rates. A ratio below 1.0 means the property doesn't cover its own debt —
              which most lenders won't approve.
            </p>
          </div>

          {/* Section 02 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl font-black text-blue-100 leading-none">02</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Who Qualifies</h3>
            </div>
            <ul className="space-y-2 text-slate-600">
              {qualifiesItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 03 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl font-black text-blue-100 leading-none">03</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">What Mo Offers</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {offerItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2"
                >
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 04 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl font-black text-blue-100 leading-none">04</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">The Wholesale Advantage</h3>
            </div>
            <p className="text-slate-600">
              DSCR loans vary significantly by lender — in pricing, LTV limits, DSCR minimums,
              and eligible property types. With access to 50+ wholesale DSCR lenders, Mo matches
              each deal to the lender with the best execution. That means lower rates, better
              terms, and no compromise on deal structure.
            </p>
          </div>
        </div>
      </section>

      {/* DSCR Calculator (Client Component) */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Check Your Deal's DSCR — Instantly
          </h2>
          <DSCRCalculator />
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Get Your Investor Rate Sheet
            </h2>
            <p className="text-slate-600">
              Share your deal details and Mo will pull DSCR rate options from 50+ wholesale
              lenders within 24 hours.
            </p>
          </div>
          <LeadMagnetForm
            magnetName="dscr_investor_playbook"
            subject="DSCR Investor Rate Sheet Request"
            loanPurpose="investment"
            fields={[
              {
                name: 'property_type',
                label: 'Property Type',
                type: 'select',
                required: true,
                options: [
                  { label: 'Single-family residence', value: 'sfr' },
                  { label: '2–4 unit', value: '2_4_unit' },
                  { label: 'Condo / townhome', value: 'condo' },
                  { label: 'Short-term rental (Airbnb/VRBO)', value: 'str' },
                  { label: 'Other', value: 'other' },
                ],
              },
              {
                name: 'purchase_price',
                label: 'Estimated Purchase Price or Property Value',
                type: 'text',
                placeholder: 'e.g. $750,000',
              },
              {
                name: 'monthly_rent',
                label: 'Expected Monthly Rent',
                type: 'text',
                placeholder: 'e.g. $4,500',
              },
            ]}
          />
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            What Happens Next
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {nextSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <step.icon className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
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
