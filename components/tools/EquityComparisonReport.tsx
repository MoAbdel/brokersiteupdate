'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { formatCurrency } from '@/lib/geo-data/calculations';
import type { EquityComparisonFullReport } from '@/lib/geo-data/types';

interface EquityComparisonReportProps {
  report: EquityComparisonFullReport;
  countyName: string;
}

export default function EquityComparisonReport({
  report,
  countyName,
}: EquityComparisonReportProps) {
  const { free } = report;
  const options = [
    { key: 'heloc' as const, label: 'HELOC', data: free.heloc },
    { key: 'cashOut' as const, label: 'Cash-Out Refi', data: free.cashOut },
    { key: 'heloan' as const, label: 'HELOAN', data: free.heloan },
  ];

  const tenYearCosts = [
    { label: 'HELOC', cost: report.tenYearCostHeloc },
    { label: 'Cash-Out Refi', cost: report.tenYearCostCashOut },
    { label: 'HELOAN', cost: report.tenYearCostHeloan },
  ];
  const lowestCost = Math.min(...tenYearCosts.map((c) => c.cost));

  return (
    <div className="space-y-6">
      {/* Success Banner */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-4">
          <p className="text-sm font-semibold text-green-800">
            Your personalized equity comparison report is ready. A mortgage specialist will review
            your scenario and reach out within 24 hours.
          </p>
        </CardContent>
      </Card>

      {/* Full Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Full Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 text-slate-500 font-medium">Metric</th>
                  {options.map((opt) => (
                    <th key={opt.key} className="text-right py-2 text-slate-500 font-medium">
                      {opt.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-2 text-slate-700">Monthly Payment</td>
                  {options.map((opt) => (
                    <td
                      key={opt.key}
                      className={`py-2 text-right font-semibold ${
                        free.recommendedOption === opt.key ? 'text-emerald-700' : ''
                      }`}
                    >
                      {formatCurrency(opt.data.monthlyPayment)}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 text-slate-700">Total Interest (10yr est.)</td>
                  {options.map((opt) => (
                    <td key={opt.key} className="py-2 text-right font-semibold">
                      {formatCurrency(opt.data.totalInterest)}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 text-slate-700">Closing Costs</td>
                  {options.map((opt) => (
                    <td key={opt.key} className="py-2 text-right font-semibold">
                      {formatCurrency(opt.data.closingCosts)}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 text-slate-700">Effective Rate</td>
                  {options.map((opt) => (
                    <td key={opt.key} className="py-2 text-right font-semibold">
                      {opt.data.effectiveRate.toFixed(2)}%
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 text-slate-700">Flexibility</td>
                  {options.map((opt) => (
                    <td key={opt.key} className="py-2 text-right font-semibold">
                      {opt.data.flexibilityRating}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-2 text-slate-700">Tax Deductibility</td>
                  {options.map((opt) => (
                    <td key={opt.key} className="py-2 text-right font-semibold">
                      {opt.data.taxDeductible}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Break-Even Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Break-Even Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 mb-4">
            A cash-out refinance replaces your current mortgage with a new, larger loan. Here is how
            the numbers compare.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 rounded-lg bg-slate-50">
              <p className="text-xs text-slate-500">Current Payment</p>
              <p className="text-lg font-bold text-slate-900">
                {formatCurrency(report.currentMortgagePayment)}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50">
              <p className="text-xs text-slate-500">New Cash-Out Payment</p>
              <p className="text-lg font-bold text-slate-900">
                {formatCurrency(report.newCashOutPayment)}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50">
              <p className="text-xs text-slate-500">Monthly Difference</p>
              <p
                className={`text-lg font-bold ${
                  report.monthlyDifference > 0 ? 'text-red-600' : 'text-emerald-700'
                }`}
              >
                {report.monthlyDifference > 0 ? '+' : ''}
                {formatCurrency(report.monthlyDifference)}
              </p>
            </div>
          </div>
          <div className="mt-4 p-3 rounded-lg border border-blue-200 bg-blue-50">
            <p className="text-sm text-blue-800 font-medium">
              Break-even point: <span className="font-bold">{report.breakEvenMonths} months</span>{' '}
              — this is when the closing costs of a cash-out refi are offset by interest savings
              compared to a HELOAN.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 10-Year Total Cost */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">10-Year Total Cost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {tenYearCosts.map((item) => {
              const isLowest = item.cost === lowestCost;
              return (
                <div
                  key={item.label}
                  className={`p-4 rounded-lg border text-center ${
                    isLowest ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-white'
                  }`}
                >
                  <p className="text-sm font-semibold text-slate-900 mb-2">{item.label}</p>
                  <p
                    className={`text-2xl font-bold ${
                      isLowest ? 'text-emerald-700' : 'text-slate-900'
                    }`}
                  >
                    {formatCurrency(item.cost)}
                  </p>
                  {isLowest && (
                    <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                      Lowest Cost
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Appreciation Context */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Equity Growth Context</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-700 leading-relaxed">{report.appreciationContext}</p>
        </CardContent>
      </Card>

      {/* Next Steps CTA */}
      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-white mb-3">Next Steps: Access Your Equity</h3>
          <ol className="space-y-2 text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <span className="font-bold text-white">1.</span>
              Review this comparison with Mo Abdel to confirm which option fits your goals
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-white">2.</span>
              Get rate quotes from 200+ wholesale lenders — one application covers all of them
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-white">3.</span>
              Lock your rate and close — most equity access products close in 2-4 weeks
            </li>
          </ol>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <p className="text-sm text-slate-300">
              Mo Abdel specializes in equity access strategies for homeowners in {countyName}. As a
              wholesale broker, you get lender competition working in your favor — better rates, lower
              fees, faster closings.
            </p>
            <p className="text-sm text-white font-semibold mt-2">
              Call (949) 579-2057 or reply to your report email to schedule a free consultation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
