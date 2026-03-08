'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { formatCurrency } from '@/lib/geo-data/calculations';
import type {
  BankStatementFullReport,
  BusinessType,
  CreditScoreTier,
  DocPeriod,
} from '@/lib/geo-data/types';

interface BankStatementReportProps {
  report: BankStatementFullReport;
  businessType: BusinessType;
  creditScore: CreditScoreTier;
  docPeriod: DocPeriod;
  countyName: string;
}

const BUSINESS_LABELS: Record<BusinessType, string> = {
  service: 'Service Business',
  retail: 'Retail / Product Business',
  professional: 'Professional Practice',
  gig: 'Gig / Freelance',
};

export default function BankStatementReport({
  report,
  businessType,
  creditScore,
  docPeriod,
  countyName,
}: BankStatementReportProps) {
  return (
    <div className="space-y-6">
      {/* Success Banner */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-4">
          <p className="text-sm font-semibold text-green-800">
            Your personalized bank statement report is ready. A mortgage specialist will review your
            scenario and reach out within 24 hours.
          </p>
        </CardContent>
      </Card>

      {/* Qualification Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Your Qualification Range</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 mb-3">
            As a {BUSINESS_LABELS[businessType].toLowerCase()}, your expense factor ranges from{' '}
            {(report.expenseRange[0] * 100).toFixed(0)}% to {(report.expenseRange[1] * 100).toFixed(0)}%
            depending on the lender.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-slate-50">
              <p className="text-xs text-slate-500">Qualifying Income Range</p>
              <p className="text-lg font-bold text-slate-900">
                {formatCurrency(report.qualifyingIncomeRange[0])} – {formatCurrency(report.qualifyingIncomeRange[1])}/mo
              </p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50">
              <p className="text-xs text-slate-500">Max Loan Range</p>
              <p className="text-lg font-bold text-slate-900">
                {formatCurrency(report.maxLoanRange[0])} – {formatCurrency(report.maxLoanRange[1])}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 12 vs 24 Month Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">12 vs 24 Month Statement Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600 mb-3">
            {docPeriod === 12
              ? "You selected 12-month statements. Here's how 24 months could improve your numbers."
              : 'You selected 24-month statements — typically the stronger option for seasonal businesses.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 text-slate-500 font-medium">Metric</th>
                  <th className="text-right py-2 text-slate-500 font-medium">12 Months</th>
                  <th className="text-right py-2 text-slate-500 font-medium">24 Months</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-2 text-slate-700">Expense Factor</td>
                  <td className="py-2 text-right font-semibold">{(report.comparison12v24.period12.expenseFactorUsed * 100).toFixed(0)}%</td>
                  <td className="py-2 text-right font-semibold">{(report.comparison12v24.period24.expenseFactorUsed * 100).toFixed(0)}%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 text-slate-700">Qualifying Income</td>
                  <td className="py-2 text-right font-semibold">{formatCurrency(report.comparison12v24.period12.qualifyingMonthlyIncome)}/mo</td>
                  <td className="py-2 text-right font-semibold">{formatCurrency(report.comparison12v24.period24.qualifyingMonthlyIncome)}/mo</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 text-slate-700">Max Loan</td>
                  <td className="py-2 text-right font-semibold">{formatCurrency(report.comparison12v24.period12.maxLoanAmount)}</td>
                  <td className="py-2 text-right font-semibold">{formatCurrency(report.comparison12v24.period24.maxLoanAmount)}</td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-700">Max Purchase Price</td>
                  <td className="py-2 text-right font-semibold">{formatCurrency(report.comparison12v24.period12.maxPurchasePrice)}</td>
                  <td className={`py-2 text-right font-semibold ${report.comparison12v24.period24.maxPurchasePrice > report.comparison12v24.period12.maxPurchasePrice ? 'text-emerald-700' : ''}`}>
                    {formatCurrency(report.comparison12v24.period24.maxPurchasePrice)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Down Payment Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Down Payment Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 text-slate-500 font-medium">Down Payment</th>
                  <th className="text-right py-2 text-slate-500 font-medium">Max Purchase</th>
                  <th className="text-right py-2 text-slate-500 font-medium">Loan Amount</th>
                  <th className="text-right py-2 text-slate-500 font-medium">Monthly Payment</th>
                </tr>
              </thead>
              <tbody>
                {report.downPaymentComparison.map((row) => (
                  <tr key={row.downPct} className="border-b border-slate-100">
                    <td className="py-2 text-slate-700 font-medium">{row.downPct}%</td>
                    <td className="py-2 text-right font-semibold">{formatCurrency(row.maxPurchasePrice)}</td>
                    <td className="py-2 text-right">{formatCurrency(row.maxLoanAmount)}</td>
                    <td className="py-2 text-right">{formatCurrency(row.monthlyPayment)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Credit Tier Impact */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Credit Score Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {report.creditTierImpact.map((ct) => (
              <div
                key={ct.tier}
                className={`p-3 rounded-lg border ${
                  ct.tier === creditScore ? 'border-blue-300 bg-blue-50' : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-slate-900">{ct.tier}</span>
                  {ct.tier === creditScore && (
                    <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-medium">
                      Your Range
                    </span>
                  )}
                  <span className="text-sm text-slate-600">
                    {ct.rateAdj > 0 ? `+${ct.rateAdj}% rate adjustment` : 'No adjustment'}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{ct.note}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Required Documents */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Required Documents ({BUSINESS_LABELS[businessType]})</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {report.requiredDocs.map((doc, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600 shrink-0">
                  {i + 1}
                </span>
                <span className="text-slate-700">{doc}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-white mb-3">3 Things to Prepare Before Your Scenario Review</h3>
          <ol className="space-y-2 text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <span className="font-bold text-white">1.</span>
              Gather your most recent {docPeriod} months of bank statements (personal or business account with deposits)
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-white">2.</span>
              Get a current credit report — your score directly affects available programs and rates
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-white">3.</span>
              Have your business license and 2+ years of self-employment documentation ready
            </li>
          </ol>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <p className="text-sm text-slate-300">
              Mo Abdel works with 50+ Wholesale Lenders — many with specialized bank statement programs
              for {BUSINESS_LABELS[businessType].toLowerCase()} owners in {countyName}. One application
              gives you access to the full market.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
