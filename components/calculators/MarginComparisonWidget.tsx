'use client';

import { useState } from 'react';

function fmt(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function pct(n: number): string {
  return `${n.toFixed(3)}%`;
}

const LOAN_TYPES = [
  { label: 'Conforming 30-yr Fixed', wholesaleRate: 6.125, retailRate: 6.625, wholesaleFee: 0.5, retailFee: 1.25 },
  { label: 'Jumbo 30-yr Fixed', wholesaleRate: 6.375, retailRate: 6.875, wholesaleFee: 0.375, retailFee: 1.0 },
  { label: 'FHA 30-yr Fixed', wholesaleRate: 5.875, retailRate: 6.250, wholesaleFee: 0.5, retailFee: 1.0 },
  { label: 'VA 30-yr Fixed', wholesaleRate: 5.750, retailRate: 6.125, wholesaleFee: 0.25, retailFee: 0.875 },
  { label: 'Non-QM (Bank Statement)', wholesaleRate: 7.250, retailRate: 7.990, wholesaleFee: 1.0, retailFee: 2.0 },
  { label: 'Cash-Out Refinance', wholesaleRate: 6.500, retailRate: 7.000, wholesaleFee: 0.625, retailFee: 1.5 },
];

export default function MarginComparisonWidget() {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTypeIndex, setLoanTypeIndex] = useState(0);

  const amount = Number(loanAmount) || 0;
  const lt = LOAN_TYPES[loanTypeIndex];

  const monthlyRateW = lt.wholesaleRate / 100 / 12;
  const monthlyRateR = lt.retailRate / 100 / 12;
  const payments = 360;

  const factorW = (monthlyRateW * Math.pow(1 + monthlyRateW, payments)) / (Math.pow(1 + monthlyRateW, payments) - 1);
  const factorR = (monthlyRateR * Math.pow(1 + monthlyRateR, payments)) / (Math.pow(1 + monthlyRateR, payments) - 1);

  const monthlyW = amount * factorW;
  const monthlyR = amount * factorR;
  const monthlySavings = monthlyR - monthlyW;

  const totalW = monthlyW * payments;
  const totalR = monthlyR * payments;
  const totalSavings = totalR - totalW;

  const feeW = amount * (lt.wholesaleFee / 100);
  const feeR = amount * (lt.retailFee / 100);
  const feeSavings = feeR - feeW;

  const netSavings = totalSavings + feeSavings;

  const hasInput = amount > 0;

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Wholesale vs Retail Rate Comparison</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Loan Amount ($)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="e.g. 750000"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Loan Type</label>
          <select
            value={loanTypeIndex}
            onChange={(e) => setLoanTypeIndex(Number(e.target.value))}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {LOAN_TYPES.map((t, i) => (
              <option key={t.label} value={i}>{t.label}</option>
            ))}
          </select>
        </div>
      </div>

      {hasInput && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Wholesale */}
            <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4 relative">
              <span className="absolute -top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">WHOLESALE</span>
              <dl className="space-y-2 text-sm mt-1">
                <div className="flex justify-between"><dt className="text-slate-500">Rate</dt><dd className="font-semibold text-slate-900">{pct(lt.wholesaleRate)}</dd></div>
                <div className="flex justify-between"><dt className="text-slate-500">Monthly Payment</dt><dd className="font-semibold text-slate-900">{fmt(monthlyW)}</dd></div>
                <div className="flex justify-between"><dt className="text-slate-500">30-Year Total</dt><dd className="font-semibold text-slate-900">{fmt(totalW)}</dd></div>
                <div className="flex justify-between"><dt className="text-slate-500">Origination Fee</dt><dd className="font-semibold text-slate-900">{fmt(feeW)} ({lt.wholesaleFee}%)</dd></div>
              </dl>
            </div>

            {/* Retail */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 relative">
              <span className="absolute -top-3 left-3 bg-slate-500 text-white text-xs font-bold px-2 py-0.5 rounded">RETAIL</span>
              <dl className="space-y-2 text-sm mt-1">
                <div className="flex justify-between"><dt className="text-slate-500">Rate</dt><dd className="font-semibold text-slate-900">{pct(lt.retailRate)}</dd></div>
                <div className="flex justify-between"><dt className="text-slate-500">Monthly Payment</dt><dd className="font-semibold text-slate-900">{fmt(monthlyR)}</dd></div>
                <div className="flex justify-between"><dt className="text-slate-500">30-Year Total</dt><dd className="font-semibold text-slate-900">{fmt(totalR)}</dd></div>
                <div className="flex justify-between"><dt className="text-slate-500">Origination Fee</dt><dd className="font-semibold text-slate-900">{fmt(feeR)} ({lt.retailFee}%)</dd></div>
              </dl>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-bold text-green-900 mb-2">Your Wholesale Savings</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-slate-500">Monthly</p>
                <p className="text-lg font-bold text-green-700">{fmt(monthlySavings)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Fee Savings</p>
                <p className="text-lg font-bold text-green-700">{fmt(feeSavings)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">30-Year Net</p>
                <p className="text-xl font-bold text-green-700">{fmt(netSavings)}</p>
              </div>
            </div>
          </div>
        </>
      )}

      <p className="text-xs text-slate-500 mt-4">
        Rates shown are Feb 2026 market estimates for comparison purposes. Actual rates depend on credit score, LTV, and lender. NMLS #1426884.
      </p>
    </div>
  );
}
