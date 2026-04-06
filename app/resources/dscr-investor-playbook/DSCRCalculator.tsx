'use client';

import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export function DSCRCalculator() {
  const [monthlyRent, setMonthlyRent] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const rent = parseFloat(monthlyRent.replace(/,/g, '')) || 0;
  const payment = parseFloat(monthlyPayment.replace(/,/g, '')) || 0;
  const dscr = payment > 0 ? (rent / payment).toFixed(2) : null;

  let dscrLabel = '';
  let dscrColor = '';
  if (dscr !== null) {
    const n = parseFloat(dscr);
    if (n >= 1.25) {
      dscrLabel = 'Strong — most lenders will approve';
      dscrColor = 'text-green-600';
    } else if (n >= 1.0) {
      dscrLabel = 'Marginal — some lenders may require reserves';
      dscrColor = 'text-amber-600';
    } else {
      dscrLabel = 'Below 1.0 — property cash-flows negative; lender approval unlikely';
      dscrColor = 'text-red-600';
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <Calculator className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">Quick DSCR Calculator</h3>
      </div>
      <p className="text-sm text-slate-500 mb-5">
        Formula:{' '}
        <span className="font-mono font-semibold">
          DSCR = Monthly Rent ÷ Monthly Mortgage Payment
        </span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Monthly Gross Rent ($)
          </label>
          <input
            type="number"
            min="0"
            placeholder="e.g. 4500"
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Est. Monthly Mortgage Payment ($)
          </label>
          <input
            type="number"
            min="0"
            placeholder="e.g. 3200"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
          />
        </div>
      </div>

      {dscr !== null && (
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <p className="text-sm text-slate-500 mb-1">Your DSCR Ratio</p>
          <p className={`text-4xl font-bold mb-1 ${dscrColor}`}>{dscr}x</p>
          <p className={`text-sm font-medium ${dscrColor}`}>{dscrLabel}</p>
        </div>
      )}

      <p className="text-xs text-slate-400 mt-4">
        This tool is for educational purposes only. Actual DSCR calculations may include PITIA
        (principal, interest, taxes, insurance, and HOA). Contact Mo for a precise analysis.
      </p>
    </div>
  );
}
