import React from 'react';
import type { Metadata } from 'next';
import { LeadMagnetForm } from '@/components/lead-magnets/LeadMagnetForm';
import { CheckCircle, TrendingDown, DollarSign, Building2, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wholesale vs. Retail Mortgage Rates: How Much You Really Save | MoTheBroker',
  description:
    'See real rate comparisons between wholesale broker pricing and retail bank rates. Download the free comparison guide.',
};

const COMPLIANCE_FOOTER =
  'Mo Abdel | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443 | Equal Housing Lender | Rates shown are for illustrative purposes. Actual rates vary based on credit, loan amount, and market conditions.';

const keyPoints = [
  {
    icon: Building2,
    title: 'Retail banks price for profit',
    body: 'Banks set rates based on what the market will bear, not what the wholesale market actually offers. Their margin is baked in by default.',
  },
  {
    icon: TrendingDown,
    title: 'Wholesale access means better execution',
    body: 'As a licensed mortgage broker, Mo sources pricing directly from wholesale lenders — the same lenders that fund retail bank loans, minus the retail markup.',
  },
  {
    icon: Users,
    title: '50+ lenders create real competition',
    body: "No single lender relationship means no obligation to use a rate that isn't the best available. Mo shops 50+ wholesale lenders for every deal.",
  },
  {
    icon: DollarSign,
    title: 'Lower origination fees compound the savings',
    body: 'The rate difference is often 0.25–0.50%. On an $800K loan over 30 years, that gap equals tens of thousands of dollars.',
  },
  {
    icon: CheckCircle,
    title: 'Faster, more transparent process',
    body: 'Wholesale brokers operate as independent advocates. There are no internal quotas, proprietary products to push, or pressure to use a specific product.',
  },
];

const guideHighlights = [
  'Side-by-side rate comparison: wholesale vs. retail vs. direct lender pricing',
  'How lender-paid compensation works and why it benefits you',
  'The hidden costs in "no-fee" retail loans you need to know',
  "When a direct lender might outperform a broker (and when they won't)",
  'How to read a Loan Estimate and spot inflated pricing',
  "Mo's 3-step process to guarantee best-execution pricing on your loan",
];

export default function WholesaleVsRetailGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <DollarSign className="w-4 h-4 mr-1.5" />
            Free Rate Comparison Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            How Much Does a Wholesale Mortgage Broker Actually Save You?
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            The rate difference between a wholesale broker and your bank isn't a rounding error —
            it's thousands of dollars over the life of your loan.
          </p>
        </div>
      </section>

      {/* Rate Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 text-center">
            Side-by-Side Rate Comparison
          </h2>
          <p className="text-slate-600 text-center mb-10">
            Based on a sample $800,000 loan at current market conditions. Rates are illustrative.
          </p>

          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-4 font-semibold">Lender Type</th>
                  <th className="text-left px-4 py-4 font-semibold">Typical Rate</th>
                  <th className="text-left px-4 py-4 font-semibold">Origination Fee</th>
                  <th className="text-left px-4 py-4 font-semibold">
                    Est. Monthly Payment ($800K)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-slate-100">
                  <td className="px-4 py-4 font-medium text-slate-800">Retail Bank</td>
                  <td className="px-4 py-4 text-red-600 font-semibold">Market + 0.50%</td>
                  <td className="px-4 py-4 text-slate-700">1.0–1.5%</td>
                  <td className="px-4 py-4 text-red-600 font-semibold">Higher</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <td className="px-4 py-4 font-medium text-slate-800">Direct Lender</td>
                  <td className="px-4 py-4 text-amber-600 font-semibold">Market + 0.25%</td>
                  <td className="px-4 py-4 text-slate-700">0.5–1.0%</td>
                  <td className="px-4 py-4 text-amber-600 font-semibold">Medium</td>
                </tr>
                <tr className="bg-blue-50 border-b border-slate-100">
                  <td className="px-4 py-4 font-bold text-slate-900">
                    Wholesale Broker (Mo){' '}
                    <span className="ml-2 inline-flex items-center bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Best
                    </span>
                  </td>
                  <td className="px-4 py-4 text-green-600 font-bold">Market rate</td>
                  <td className="px-4 py-4 text-slate-700">0–0.50%</td>
                  <td className="px-4 py-4 text-green-600 font-bold">Lowest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Wholesale Beats Retail */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
            5 Reasons Wholesale Mortgage Pricing Wins
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {keyPoints.map((point, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex gap-4"
              >
                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <point.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{point.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Download the Full Rate Comparison Guide
            </h2>
            <p className="text-slate-600">
              Get the complete breakdown — including how to read your Loan Estimate and guarantee
              you're getting wholesale pricing.
            </p>
          </div>
          <LeadMagnetForm
            magnetName="wholesale_vs_retail_guide"
            subject="Wholesale vs. Retail Rate Comparison Guide Request"
            loanPurpose="inquiry"
            fields={[
              {
                name: 'loan_scenario',
                label: 'What are you looking to do?',
                type: 'select',
                required: true,
                options: [
                  { label: 'Purchase a home', value: 'purchase' },
                  { label: 'Refinance my current mortgage', value: 'refinance' },
                  { label: 'Investment property', value: 'investment' },
                  { label: 'Just comparing options', value: 'comparing' },
                ],
              },
            ]}
          />
        </div>
      </section>

      {/* Post-capture guide highlights (always visible as a teaser) */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Your Guide Highlights
          </h2>
          <ul className="space-y-3">
            {guideHighlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
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
