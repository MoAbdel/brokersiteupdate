'use client';

import Link from 'next/link';
import type { DSCRFullReport } from '@/lib/geo-data/types';
import { formatCurrency } from '@/lib/geo-data/calculations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface Props {
  report: DSCRFullReport;
  locationLabel: string;
  stateName: string;
  loanType: 'amortizing' | 'interest-only';
}

const TIER_LABELS: Record<string, string> = {
  green: 'Best Available',
  blue: 'Standard',
  yellow: 'Select Lenders',
  red: 'Below Minimum',
};

const TIER_TEXT_COLORS: Record<string, string> = {
  green: 'text-emerald-700',
  blue: 'text-blue-700',
  yellow: 'text-yellow-600',
  red: 'text-red-600',
};

const TIER_BADGE_COLORS: Record<string, string> = {
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  red: 'bg-red-100 text-red-700',
};

export default function DscrQualificationReport({
  report,
  locationLabel,
  stateName,
}: Props) {
  const { amortizing, interestOnly, downPaymentComparison, rateRange } = report;

  return (
    <div className="space-y-6">
      {/* 1. Success Banner */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-6">
          <p className="text-green-800 font-medium">
            Your full DSCR analysis is ready. Here&apos;s the complete breakdown
            for {locationLabel}, {stateName}.
          </p>
        </CardContent>
      </Card>

      {/* 2. Down Payment Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Down Payment Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Down Payment %</th>
                  <th className="text-right py-2 px-4 font-medium text-slate-600">Loan Amount</th>
                  <th className="text-right py-2 px-4 font-medium text-slate-600">Monthly PITIA</th>
                  <th className="text-right py-2 px-4 font-medium text-slate-600">DSCR</th>
                  <th className="text-right py-2 pl-4 font-medium text-slate-600">Tier</th>
                </tr>
              </thead>
              <tbody>
                {downPaymentComparison.map((row) => (
                  <tr key={row.downPct} className="border-b border-slate-100">
                    <td className="py-2 pr-4 font-medium">{row.downPct}%</td>
                    <td className="py-2 px-4 text-right">{formatCurrency(row.loanAmount)}</td>
                    <td className="py-2 px-4 text-right">{formatCurrency(row.monthlyPayment)}</td>
                    <td className={`py-2 px-4 text-right font-semibold ${TIER_TEXT_COLORS[row.tier]}`}>
                      {row.dscr.toFixed(2)}
                    </td>
                    <td className="py-2 pl-4 text-right">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${TIER_BADGE_COLORS[row.tier]}`}>
                        {TIER_LABELS[row.tier]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* 3. Rent Sensitivity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-yellow-700 mb-1">Rent Needed for 1.0 DSCR</p>
            <p className="text-2xl font-bold text-yellow-800">
              {formatCurrency(report.rentFor1_0)}
            </p>
            <p className="text-xs text-yellow-600 mt-1">Minimum qualification threshold</p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-green-700 mb-1">Rent Needed for 1.25 DSCR</p>
            <p className="text-2xl font-bold text-green-800">
              {formatCurrency(report.rentFor1_25)}
            </p>
            <p className="text-xs text-green-600 mt-1">Best-rate qualification threshold</p>
          </CardContent>
        </Card>
      </div>

      {/* 4. Amortizing vs Interest-Only */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Amortizing vs Interest-Only</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 font-medium text-slate-600">Metric</th>
                  <th className="text-right py-2 px-4 font-medium text-slate-600">Amortizing (30-yr)</th>
                  <th className="text-right py-2 pl-4 font-medium text-slate-600">Interest-Only</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-4 font-medium">Monthly Payment (PITIA)</td>
                  <td className="py-2 px-4 text-right">{formatCurrency(amortizing.monthlyPayment)}</td>
                  <td className="py-2 pl-4 text-right">{formatCurrency(interestOnly.monthlyPayment)}</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-4 font-medium">DSCR Ratio</td>
                  <td className={`py-2 px-4 text-right font-semibold ${TIER_TEXT_COLORS[amortizing.tier]}`}>
                    {amortizing.actualDSCR.toFixed(2)}
                  </td>
                  <td className={`py-2 pl-4 text-right font-semibold ${TIER_TEXT_COLORS[interestOnly.tier]}`}>
                    {interestOnly.actualDSCR.toFixed(2)}
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-4 font-medium">Qualification Tier</td>
                  <td className="py-2 px-4 text-right">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${TIER_BADGE_COLORS[amortizing.tier]}`}>
                      {TIER_LABELS[amortizing.tier]}
                    </span>
                  </td>
                  <td className="py-2 pl-4 text-right">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${TIER_BADGE_COLORS[interestOnly.tier]}`}>
                      {TIER_LABELS[interestOnly.tier]}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* 5. Rate Range & Loan Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-sm text-slate-500 mb-1">Estimated Rate Range</p>
            <p className="text-2xl font-bold text-slate-900">
              {rateRange[0].toFixed(2)}%&ndash;{rateRange[1].toFixed(2)}%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-sm text-slate-500 mb-1">Loan Type</p>
            <p className="text-2xl font-bold text-slate-900">
              {amortizing.isJumbo ? 'Jumbo (Non-QM)' : 'Conforming'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 6. 5-Year Investment Outlook */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-sm text-slate-500 mb-1">Projected Equity (5-Year)</p>
            <p className="text-2xl font-bold text-emerald-700">
              {formatCurrency(report.equityProjection5yr)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-sm text-slate-500 mb-1">Cash-on-Cash Return (Year 1)</p>
            <p className={`text-2xl font-bold ${report.cashOnCashReturn >= 0 ? 'text-emerald-700' : 'text-red-600'}`}>
              {report.cashOnCashReturn.toFixed(2)}%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 7. Next Steps CTA */}
      <Card className="bg-slate-900 border-slate-900 text-white">
        <CardHeader>
          <CardTitle className="text-lg text-white">
            Next Steps: Get Your Exact Rate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6 text-sm">
            <li>Gather your last 2 months of bank statements and rental agreements</li>
            <li>Pull a recent credit report (we accept 680+ for best DSCR pricing)</li>
            <li>Schedule a call so we can lock in your rate before the next adjustment</li>
          </ol>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+19498229662"
              className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 font-semibold px-6 py-3 text-sm hover:bg-slate-100 transition-colors"
            >
              Call (949) 822-9662
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 text-white font-semibold px-6 py-3 text-sm hover:bg-emerald-700 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
