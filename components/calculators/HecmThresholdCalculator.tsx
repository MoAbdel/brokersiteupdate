'use client';

import { useState } from 'react';

function fmt(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function HecmThresholdCalculator() {
  const [homeValue, setHomeValue] = useState('');
  const [borrowerAge, setBorrowerAge] = useState('');
  const [mortgageBalance, setMortgageBalance] = useState('');
  const [currentTaxBase, setCurrentTaxBase] = useState('');
  const [newHomeValue, setNewHomeValue] = useState('');

  const hv = Number(homeValue) || 0;
  const age = Number(borrowerAge) || 0;
  const mb = Number(mortgageBalance) || 0;
  const taxBase = Number(currentTaxBase) || 0;
  const nhv = Number(newHomeValue) || 0;

  // HECM principal limit factor approximation by age
  // Younger = lower factor, older = higher
  const getPLF = (a: number): number => {
    if (a < 62) return 0;
    if (a <= 65) return 0.42;
    if (a <= 70) return 0.48;
    if (a <= 75) return 0.52;
    if (a <= 80) return 0.58;
    if (a <= 85) return 0.64;
    return 0.70;
  };

  const plf = getPLF(age);
  // Standard HECM limit is $1,209,750 for 2026
  const hecmLimit = 1209750;
  const effectiveValue = Math.min(hv, hecmLimit);
  const grossPrincipalLimit = effectiveValue * plf;
  const hecmAvailable = Math.max(grossPrincipalLimit - mb, 0);

  // Jumbo HECM: no FHA ceiling, uses full home value
  const jumboGrossPrincipal = hv * plf;
  const jumboAvailable = Math.max(jumboGrossPrincipal - mb, 0);

  // Prop 19 tax savings (CA): transfer tax base to new home
  // If downsizing, keep old tax base on new property (up to old home value)
  const prop19Eligible = nhv > 0 && nhv <= hv * 1.05; // within 105% of sale price
  const currentTaxRate = 0.011; // ~1.1% effective rate in CA
  const oldTax = taxBase * currentTaxRate;
  const newMarketTax = nhv * currentTaxRate;
  const prop19Tax = taxBase > 0 ? taxBase * currentTaxRate : newMarketTax;
  const annualTaxSavings = prop19Eligible ? newMarketTax - prop19Tax : 0;

  // Combined benefit
  const combinedAnnualBenefit = annualTaxSavings + (jumboAvailable > 0 ? (jumboAvailable * 0.04) : 0); // 4% equiv annual benefit

  const hasInput = hv > 0 && age >= 62;

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Jumbo HECM & Prop 19 Threshold Calculator</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Home Value ($)</label>
          <input
            type="number"
            value={homeValue}
            onChange={(e) => setHomeValue(e.target.value)}
            placeholder="e.g. 2500000"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Borrower Age</label>
          <input
            type="number"
            value={borrowerAge}
            onChange={(e) => setBorrowerAge(e.target.value)}
            placeholder="62+"
            min={62}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Current Mortgage Balance ($)</label>
          <input
            type="number"
            value={mortgageBalance}
            onChange={(e) => setMortgageBalance(e.target.value)}
            placeholder="e.g. 200000 (or 0)"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Current Assessed Value / Tax Base ($)</label>
          <input
            type="number"
            value={currentTaxBase}
            onChange={(e) => setCurrentTaxBase(e.target.value)}
            placeholder="e.g. 400000"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-1">New Home Value if Downsizing ($, optional)</label>
          <input
            type="number"
            value={newHomeValue}
            onChange={(e) => setNewHomeValue(e.target.value)}
            placeholder="Leave blank if staying in current home"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {age > 0 && age < 62 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-amber-800">
            <strong>Note:</strong> HECM reverse mortgages require borrowers to be at least 62 years old.
          </p>
        </div>
      )}

      {hasInput && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Standard HECM */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h4 className="font-bold text-slate-700 mb-3">Standard HECM (FHA)</h4>
              <dl className="space-y-2 text-sm">
                <div><dt className="text-slate-500">FHA Limit</dt><dd className="font-semibold text-slate-900">{fmt(hecmLimit)}</dd></div>
                <div><dt className="text-slate-500">Principal Limit Factor</dt><dd className="font-semibold text-slate-900">{(plf * 100).toFixed(0)}%</dd></div>
                <div><dt className="text-slate-500">Gross Principal Limit</dt><dd className="font-semibold text-slate-900">{fmt(grossPrincipalLimit)}</dd></div>
                <div><dt className="text-slate-500">Available After Payoff</dt><dd className="font-semibold text-blue-700 text-lg">{fmt(hecmAvailable)}</dd></div>
              </dl>
            </div>

            {/* Jumbo HECM */}
            <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4 relative">
              {hv > hecmLimit && (
                <span className="absolute -top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">RECOMMENDED</span>
              )}
              <h4 className="font-bold text-blue-900 mb-3">Jumbo HECM (Proprietary)</h4>
              <dl className="space-y-2 text-sm">
                <div><dt className="text-slate-500">No FHA Ceiling</dt><dd className="font-semibold text-slate-900">Uses full {fmt(hv)}</dd></div>
                <div><dt className="text-slate-500">Principal Limit Factor</dt><dd className="font-semibold text-slate-900">{(plf * 100).toFixed(0)}%</dd></div>
                <div><dt className="text-slate-500">Gross Principal Limit</dt><dd className="font-semibold text-slate-900">{fmt(jumboGrossPrincipal)}</dd></div>
                <div><dt className="text-slate-500">Available After Payoff</dt><dd className="font-semibold text-blue-700 text-lg">{fmt(jumboAvailable)}</dd></div>
              </dl>
            </div>
          </div>

          {hv > hecmLimit && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-green-800">
                <strong>Jumbo advantage:</strong> Your home exceeds the FHA limit. A Jumbo HECM unlocks{' '}
                <strong>{fmt(jumboAvailable - hecmAvailable)}</strong> more than standard HECM.
              </p>
            </div>
          )}

          {/* Prop 19 Section */}
          {nhv > 0 && taxBase > 0 && (
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-purple-900 mb-2">Prop 19 Tax Transfer Analysis (CA)</h4>
              {prop19Eligible ? (
                <dl className="grid grid-cols-2 gap-2 text-sm">
                  <div><dt className="text-slate-500">Current Property Tax</dt><dd className="font-semibold">{fmt(oldTax)}/yr</dd></div>
                  <div><dt className="text-slate-500">New Home Tax (without Prop 19)</dt><dd className="font-semibold">{fmt(newMarketTax)}/yr</dd></div>
                  <div><dt className="text-slate-500">New Home Tax (with Prop 19)</dt><dd className="font-semibold text-green-700">{fmt(prop19Tax)}/yr</dd></div>
                  <div><dt className="text-slate-500">Annual Tax Savings</dt><dd className="font-semibold text-green-700 text-lg">{fmt(annualTaxSavings)}/yr</dd></div>
                </dl>
              ) : (
                <p className="text-sm text-purple-800">
                  New home value exceeds 105% of current home value. Prop 19 base transfer applies only when downsizing or buying at equal/lower value.
                </p>
              )}
            </div>
          )}
        </>
      )}

      <p className="text-xs text-slate-500 mt-4">
        Educational estimate only. HECM principal limit factors, Prop 19 eligibility, and property taxes vary. Consult a licensed reverse mortgage specialist.
      </p>
    </div>
  );
}
