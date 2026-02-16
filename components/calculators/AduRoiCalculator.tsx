'use client';

import { useState } from 'react';

function fmt(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function pct(n: number): string {
  return `${n.toFixed(1)}%`;
}

export default function AduRoiCalculator() {
  const [homeValue, setHomeValue] = useState('');
  const [mortgageBalance, setMortgageBalance] = useState('');
  const [currentRate, setCurrentRate] = useState('');
  const [aduCost, setAduCost] = useState('');
  const [monthlyRent, setMonthlyRent] = useState('');

  const hv = Number(homeValue) || 0;
  const mb = Number(mortgageBalance) || 0;
  const cr = (Number(currentRate) || 0) / 100;
  const cost = Number(aduCost) || 0;
  const rent = Number(monthlyRent) || 0;

  // Cash-out refi: new loan = old balance + ADU cost, 80% LTV max
  const maxCashOut = hv * 0.8 - mb;
  const canFinance = maxCashOut >= cost;
  const newLoanAmount = mb + cost;
  const newRate = 0.065; // current market estimate
  const monthlyRateNew = newRate / 12;
  const payments = 360;
  const factor = (monthlyRateNew * Math.pow(1 + monthlyRateNew, payments)) / (Math.pow(1 + monthlyRateNew, payments) - 1);
  const newMonthlyPayment = newLoanAmount * factor;

  // Current mortgage payment
  const monthlyRateCur = cr / 12;
  const factorCur = monthlyRateCur > 0
    ? (monthlyRateCur * Math.pow(1 + monthlyRateCur, payments)) / (Math.pow(1 + monthlyRateCur, payments) - 1)
    : 1 / payments;
  const currentPayment = mb * factorCur;

  const additionalPayment = newMonthlyPayment - currentPayment;
  const monthlyCashFlow = rent - additionalPayment;
  const annualCashFlow = monthlyCashFlow * 12;
  const annualRoi = cost > 0 ? (annualCashFlow / cost) * 100 : 0;
  const breakEvenMonths = monthlyCashFlow > 0 ? Math.ceil(cost / monthlyCashFlow) : Infinity;

  // 10-year projection: total rent - total additional payment
  const tenYearRent = rent * 120;
  const tenYearAdditionalCost = additionalPayment * 120;
  const tenYearNet = tenYearRent - tenYearAdditionalCost;

  // ADU adds ~20-30% of construction cost to home value
  const valueAdd = cost * 0.25;
  const newHomeValue = hv + valueAdd;

  const hasInput = hv > 0 && mb > 0 && cost > 0 && rent > 0;

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Cash-Out ADU ROI Calculator</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Home Value ($)</label>
          <input
            type="number"
            value={homeValue}
            onChange={(e) => setHomeValue(e.target.value)}
            placeholder="e.g. 1200000"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Mortgage Balance ($)</label>
          <input
            type="number"
            value={mortgageBalance}
            onChange={(e) => setMortgageBalance(e.target.value)}
            placeholder="e.g. 600000"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Current Rate (%)</label>
          <input
            type="number"
            step="0.125"
            value={currentRate}
            onChange={(e) => setCurrentRate(e.target.value)}
            placeholder="e.g. 3.5"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">ADU Construction Cost ($)</label>
          <input
            type="number"
            value={aduCost}
            onChange={(e) => setAduCost(e.target.value)}
            placeholder="e.g. 180000"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-1">Expected Monthly Rent ($)</label>
          <input
            type="number"
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(e.target.value)}
            placeholder="e.g. 2500"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {hasInput && (
        <>
          {!canFinance && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> Available cash-out equity ({fmt(maxCashOut)}) is less than ADU cost ({fmt(cost)}). You may need a HELOC or combination financing.
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">New Monthly Payment</p>
              <p className="text-lg font-bold text-slate-900">{fmt(newMonthlyPayment)}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">Monthly Cash Flow</p>
              <p className={`text-lg font-bold ${monthlyCashFlow >= 0 ? 'text-green-700' : 'text-red-600'}`}>
                {monthlyCashFlow >= 0 ? '+' : ''}{fmt(monthlyCashFlow)}
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">Annual ROI</p>
              <p className={`text-lg font-bold ${annualRoi >= 0 ? 'text-green-700' : 'text-red-600'}`}>{pct(annualRoi)}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">Break-Even</p>
              <p className="text-lg font-bold text-slate-900">
                {breakEvenMonths === Infinity ? 'N/A' : `${breakEvenMonths} mo`}
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">10-Year Net Income</p>
              <p className={`text-lg font-bold ${tenYearNet >= 0 ? 'text-green-700' : 'text-red-600'}`}>{fmt(tenYearNet)}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">Est. Value Added</p>
              <p className="text-lg font-bold text-blue-700">{fmt(valueAdd)}</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Summary:</strong> Building a {fmt(cost)} ADU financed via cash-out refinance generates an estimated{' '}
              <strong>{fmt(annualCashFlow)}/year</strong> in net rental income and adds approximately{' '}
              <strong>{fmt(valueAdd)}</strong> to your home value (new est. value: {fmt(newHomeValue)}).
            </p>
          </div>
        </>
      )}

      <p className="text-xs text-slate-500 mt-4">
        Educational estimate only. Actual costs, rents, and financing terms vary. Consult a licensed contractor and mortgage broker for project-specific analysis.
      </p>
    </div>
  );
}
