'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { calcMaxCashOut, formatCurrency } from '@/lib/geo-data/calculations';

interface CashOutCalculatorProps {
  countyName: string;
  stateCode: string;
  defaultHomeValue: number;
  conformingLoanLimit: number;
  avgAppreciation5yr: number;
  avgPropertyTaxRate: number;
}

export default function CashOutCalculator({
  countyName,
  stateCode,
  defaultHomeValue,
  conformingLoanLimit,
  avgAppreciation5yr,
  avgPropertyTaxRate,
}: CashOutCalculatorProps) {
  const [homeValue, setHomeValue] = useState(defaultHomeValue.toString());
  const [mortgageBalance, setMortgageBalance] = useState(
    Math.round(defaultHomeValue * 0.6).toString()
  );

  const homeValueNum = parseInt(homeValue.replace(/,/g, ''), 10) || 0;
  const balanceNum = parseInt(mortgageBalance.replace(/,/g, ''), 10) || 0;

  const result = useMemo(
    () => calcMaxCashOut(balanceNum, homeValueNum, {} as any, conformingLoanLimit),
    [balanceNum, homeValueNum, conformingLoanLimit]
  );

  const equity = homeValueNum - balanceNum;
  const ltvCurrent = homeValueNum > 0 ? (balanceNum / homeValueNum) * 100 : 0;

  const appreciatedValue = Math.round(homeValueNum * (1 + avgAppreciation5yr));
  const annualTax = Math.round(homeValueNum * avgPropertyTaxRate);

  const stateFull = stateCode === 'ca' ? 'California' : 'Washington';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Panel */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Your Property Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="homeValue">Estimated Home Value</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <Input
                  id="homeValue"
                  type="text"
                  inputMode="numeric"
                  value={homeValue}
                  onChange={(e) => setHomeValue(e.target.value.replace(/[^0-9]/g, ''))}
                  className="pl-7"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {countyName} median: {formatCurrency(defaultHomeValue)}
              </p>
            </div>

            <div>
              <Label htmlFor="balance">Current Mortgage Balance</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <Input
                  id="balance"
                  type="text"
                  inputMode="numeric"
                  value={mortgageBalance}
                  onChange={(e) => setMortgageBalance(e.target.value.replace(/[^0-9]/g, ''))}
                  className="pl-7"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Local Market Context */}
        <Card className="bg-slate-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-900 mb-3">
              {countyName} Market Snapshot
            </h3>
            <dl className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-slate-500">Conforming Limit</dt>
                <dd className="font-semibold text-slate-900">
                  {formatCurrency(conformingLoanLimit)}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">5-Year Appreciation</dt>
                <dd className="font-semibold text-slate-900">
                  {(avgAppreciation5yr * 100).toFixed(1)}%
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Avg Property Tax Rate</dt>
                <dd className="font-semibold text-slate-900">
                  {(avgPropertyTaxRate * 100).toFixed(2)}%
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Est. Annual Tax</dt>
                <dd className="font-semibold text-slate-900">{formatCurrency(annualTax)}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      {/* Results Panel */}
      <div className="space-y-6">
        {/* Equity Summary */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Your Equity Position</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-blue-700">Current Equity</p>
                <p className="text-2xl font-bold text-blue-900">{formatCurrency(equity)}</p>
              </div>
              <div>
                <p className="text-sm text-blue-700">Current LTV</p>
                <p className="text-2xl font-bold text-blue-900">{ltvCurrent.toFixed(1)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cash-Out by LTV Tier */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Maximum Cash-Out by LTV</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[80, 85, 90].map((ltv) => {
                const cashOut = result.maxCashOutAtLTV[ltv] || 0;
                const maxLoan = result.maxLoanAtLTV[ltv] || 0;
                const jumbo = result.isJumbo[ltv];
                return (
                  <div
                    key={ltv}
                    className={`p-4 rounded-lg border ${
                      ltv === 80
                        ? 'border-green-200 bg-green-50'
                        : ltv === 85
                          ? 'border-yellow-200 bg-yellow-50'
                          : 'border-orange-200 bg-orange-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-900">{ltv}% LTV</span>
                      {jumbo && (
                        <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full font-medium">
                          Jumbo
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-slate-500">Max New Loan</p>
                        <p className="font-bold text-slate-900">{formatCurrency(maxLoan)}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Cash Available</p>
                        <p className="font-bold text-emerald-700 text-lg">
                          {formatCurrency(cashOut)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Projected Appreciation */}
        <Card className="bg-slate-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-900 mb-2">
              5-Year Projection for {countyName}
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              Based on {(avgAppreciation5yr * 100).toFixed(1)}% historical appreciation in{' '}
              {countyName}, {stateFull}:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">Projected Value (5yr)</p>
                <p className="text-xl font-bold text-slate-900">
                  {formatCurrency(appreciatedValue)}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Projected Equity Gain</p>
                <p className="text-xl font-bold text-emerald-700">
                  {formatCurrency(appreciatedValue - homeValueNum)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-xs text-slate-400 leading-relaxed">
          Calculations are estimates for educational purposes only. Actual loan amounts depend on
          credit score, DTI ratio, property appraisal, and lender guidelines. Conforming loan limit
          for {countyName} is {formatCurrency(conformingLoanLimit)} (2026 FHFA). Contact Mo Abdel at
          (949) 822-9662 for a personalized analysis. NMLS #1426884 | Lumin Lending NMLS #2716106.
        </p>
      </div>
    </div>
  );
}
