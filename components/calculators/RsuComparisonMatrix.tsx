'use client';

import { useState } from 'react';

const EMPLOYERS = [
  { label: 'Amazon', vestingSchedule: '5/15/40/40' },
  { label: 'Microsoft', vestingSchedule: '25/25/25/25' },
  { label: 'Apple', vestingSchedule: '25/25/25/25' },
  { label: 'Google', vestingSchedule: '33/33/34 (monthly)' },
  { label: 'Meta', vestingSchedule: '25/25/25/25' },
  { label: 'Other', vestingSchedule: '25/25/25/25' },
];

function fmt(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function pct(n: number): string {
  return `${n.toFixed(2)}%`;
}

export default function RsuComparisonMatrix() {
  const [employer, setEmployer] = useState('Amazon');
  const [rsuGrantValue, setRsuGrantValue] = useState('');
  const [baseSalary, setBaseSalary] = useState('');

  const rsu = Number(rsuGrantValue) || 0;
  const base = Number(baseSalary) || 0;
  const selectedEmployer = EMPLOYERS.find((e) => e.label === employer) ?? EMPLOYERS[0];

  // Wholesale: counts 100% of 2-yr RSU avg + base
  const wholesaleIncome = base + rsu;
  // Retail: counts only 50-75% of RSU income
  const retailIncome = base + rsu * 0.6;
  // Credit union: most conservative, many exclude RSU entirely
  const cuIncome = base + rsu * 0.25;

  // DTI-based max loan at 45% DTI, 6.5% rate, 30yr
  const monthlyRate = 0.065 / 12;
  const payments = 360;
  const factor = (monthlyRate * Math.pow(1 + monthlyRate, payments)) / (Math.pow(1 + monthlyRate, payments) - 1);

  const maxPaymentWholesale = (wholesaleIncome / 12) * 0.45;
  const maxPaymentRetail = (retailIncome / 12) * 0.45;
  const maxPaymentCU = (cuIncome / 12) * 0.45;

  const maxLoanWholesale = maxPaymentWholesale / factor;
  const maxLoanRetail = maxPaymentRetail / factor;
  const maxLoanCU = maxPaymentCU / factor;

  // Wholesale saves ~0.25% on rate vs retail
  const wholesaleRate = 6.25;
  const retailRate = 6.625;

  const hasInput = rsu > 0 && base > 0;

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-4">RSU Mortgage Qualification Comparison</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Employer</label>
          <select
            value={employer}
            onChange={(e) => setEmployer(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {EMPLOYERS.map((e) => (
              <option key={e.label} value={e.label}>{e.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Vesting Schedule</label>
          <input
            type="text"
            readOnly
            value={selectedEmployer.vestingSchedule}
            className="w-full px-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Annual RSU Income ($)</label>
          <input
            type="number"
            value={rsuGrantValue}
            onChange={(e) => setRsuGrantValue(e.target.value)}
            placeholder="e.g. 150000"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Base Salary ($)</label>
          <input
            type="number"
            value={baseSalary}
            onChange={(e) => setBaseSalary(e.target.value)}
            placeholder="e.g. 200000"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {hasInput && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Wholesale */}
          <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4 relative">
            <span className="absolute -top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">BEST</span>
            <h4 className="font-bold text-blue-900 mb-3">Wholesale Broker</h4>
            <dl className="space-y-2 text-sm">
              <div><dt className="text-slate-500">RSU Counted</dt><dd className="font-semibold text-slate-900">100% (2-yr avg)</dd></div>
              <div><dt className="text-slate-500">Qualifying Income</dt><dd className="font-semibold text-slate-900">{fmt(wholesaleIncome)}/yr</dd></div>
              <div><dt className="text-slate-500">Max Loan Amount</dt><dd className="font-semibold text-blue-700 text-lg">{fmt(maxLoanWholesale)}</dd></div>
              <div><dt className="text-slate-500">Est. Rate</dt><dd className="font-semibold text-slate-900">{pct(wholesaleRate)}</dd></div>
            </dl>
          </div>

          {/* Retail */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <h4 className="font-bold text-slate-700 mb-3">Retail Bank</h4>
            <dl className="space-y-2 text-sm">
              <div><dt className="text-slate-500">RSU Counted</dt><dd className="font-semibold text-slate-900">~60% (restricted)</dd></div>
              <div><dt className="text-slate-500">Qualifying Income</dt><dd className="font-semibold text-slate-900">{fmt(retailIncome)}/yr</dd></div>
              <div><dt className="text-slate-500">Max Loan Amount</dt><dd className="font-semibold text-slate-900">{fmt(maxLoanRetail)}</dd></div>
              <div><dt className="text-slate-500">Est. Rate</dt><dd className="font-semibold text-slate-900">{pct(retailRate)}</dd></div>
            </dl>
          </div>

          {/* Credit Union */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <h4 className="font-bold text-slate-700 mb-3">Credit Union</h4>
            <dl className="space-y-2 text-sm">
              <div><dt className="text-slate-500">RSU Counted</dt><dd className="font-semibold text-slate-900">~25% or excluded</dd></div>
              <div><dt className="text-slate-500">Qualifying Income</dt><dd className="font-semibold text-slate-900">{fmt(cuIncome)}/yr</dd></div>
              <div><dt className="text-slate-500">Max Loan Amount</dt><dd className="font-semibold text-slate-900">{fmt(maxLoanCU)}</dd></div>
              <div><dt className="text-slate-500">Est. Rate</dt><dd className="font-semibold text-slate-900">{pct(retailRate + 0.125)}</dd></div>
            </dl>
          </div>
        </div>
      )}

      {hasInput && (
        <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-800">
            <strong>Wholesale advantage:</strong> You qualify for up to{' '}
            <strong>{fmt(maxLoanWholesale - maxLoanRetail)}</strong> more than retail and save an estimated{' '}
            <strong>{pct(retailRate - wholesaleRate)}</strong> on rate.
          </p>
        </div>
      )}

      <p className="text-xs text-slate-500 mt-4">
        Educational estimate only. Actual qualification depends on DTI, credit score, assets, and lender guidelines.
      </p>
    </div>
  );
}
