'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { calcMaxHELOC, formatCurrency } from '@/lib/geo-data/calculations';

interface MaxHelocCalculatorProps {
  countyName: string;
  stateCode: string;
  defaultHomeValue: number;
  conformingLoanLimit: number;
  avgAppreciation5yr: number;
}

const CLTV_OPTIONS = [80, 85, 90] as const;

export default function MaxHelocCalculator({
  countyName,
  stateCode,
  defaultHomeValue,
  conformingLoanLimit,
  avgAppreciation5yr,
}: MaxHelocCalculatorProps) {
  const [homeValue, setHomeValue] = useState(defaultHomeValue.toString());
  const [mortgageBalance, setMortgageBalance] = useState(
    Math.round(defaultHomeValue * 0.6).toString()
  );
  const [selectedCLTV, setSelectedCLTV] = useState<number>(85);

  const homeValueNum = parseInt(homeValue.replace(/,/g, ''), 10) || 0;
  const balanceNum = parseInt(mortgageBalance.replace(/,/g, ''), 10) || 0;

  const equity = homeValueNum - balanceNum;
  const equityPercent = homeValueNum > 0 ? ((equity / homeValueNum) * 100) : 0;

  const primaryResult = useMemo(
    () => calcMaxHELOC(homeValueNum, balanceNum, selectedCLTV, conformingLoanLimit),
    [homeValueNum, balanceNum, selectedCLTV, conformingLoanLimit]
  );

  const allTierResults = useMemo(
    () =>
      CLTV_OPTIONS.map((cltv) => ({
        cltv,
        ...calcMaxHELOC(homeValueNum, balanceNum, cltv, conformingLoanLimit),
      })),
    [homeValueNum, balanceNum, conformingLoanLimit]
  );

  // 5-year projection: show equity growth year by year
  const annualAppreciation = avgAppreciation5yr / 5;
  const projections = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => {
      const year = i + 1;
      const projectedValue = Math.round(homeValueNum * Math.pow(1 + annualAppreciation, year));
      const projectedEquity = projectedValue - balanceNum;
      const projectedLine = Math.max(
        0,
        Math.floor(projectedValue * (selectedCLTV / 100)) - balanceNum
      );
      return { year, projectedValue, projectedEquity, projectedLine };
    });
  }, [homeValueNum, balanceNum, annualAppreciation, selectedCLTV]);

  const isJumbo = primaryResult.maxLoanAmount > conformingLoanLimit;
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

            <div>
              <Label htmlFor="cltv">Max CLTV Percentage</Label>
              <div className="grid grid-cols-3 gap-2 mt-1">
                {CLTV_OPTIONS.map((cltv) => (
                  <button
                    key={cltv}
                    type="button"
                    onClick={() => setSelectedCLTV(cltv)}
                    className={`py-2 px-4 rounded-lg text-sm font-semibold border transition-colors ${
                      selectedCLTV === cltv
                        ? 'bg-amber-600 text-white border-amber-600'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-amber-400'
                    }`}
                  >
                    {cltv}% CLTV
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Context */}
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
                <dt className="text-slate-500">Median Home Value</dt>
                <dd className="font-semibold text-slate-900">
                  {formatCurrency(defaultHomeValue)}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Avg Annual Growth</dt>
                <dd className="font-semibold text-slate-900">
                  {(annualAppreciation * 100).toFixed(1)}%
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      {/* Results Panel */}
      <div className="space-y-6">
        {/* Equity Summary */}
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-amber-900 mb-3">Your Equity Position</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-amber-700">Current Equity</p>
                <p className="text-2xl font-bold text-amber-900">{formatCurrency(equity)}</p>
              </div>
              <div>
                <p className="text-sm text-amber-700">Equity Percentage</p>
                <p className="text-2xl font-bold text-amber-900">{equityPercent.toFixed(1)}%</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-amber-200">
              <div>
                <p className="text-sm text-amber-700">Max Total Debt at {selectedCLTV}% CLTV</p>
                <p className="text-xl font-bold text-amber-900">
                  {formatCurrency(primaryResult.maxLoanAmount)}
                </p>
              </div>
              <div>
                <p className="text-sm text-amber-700">Available HELOC Line</p>
                <p className="text-xl font-bold text-emerald-700">
                  {formatCurrency(primaryResult.availableLine)}
                </p>
              </div>
            </div>
            {isJumbo && (
              <p className="mt-3 text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full font-medium inline-block">
                Jumbo HELOC (exceeds conforming limit)
              </p>
            )}
          </CardContent>
        </Card>

        {/* All CLTV Tiers Side by Side */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">HELOC Line by CLTV Tier</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {allTierResults.map(({ cltv, maxLoanAmount, availableLine }) => {
                const tierJumbo = maxLoanAmount > conformingLoanLimit;
                return (
                  <div
                    key={cltv}
                    className={`p-4 rounded-lg border ${
                      cltv === 80
                        ? 'border-green-200 bg-green-50'
                        : cltv === 85
                          ? 'border-yellow-200 bg-yellow-50'
                          : 'border-orange-200 bg-orange-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-900">{cltv}% CLTV</span>
                      {tierJumbo && (
                        <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full font-medium">
                          Jumbo
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-slate-500">Max Total Debt</p>
                        <p className="font-bold text-slate-900">{formatCurrency(maxLoanAmount)}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Available HELOC Line</p>
                        <p className="font-bold text-emerald-700 text-lg">
                          {formatCurrency(availableLine)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* 5-Year Equity Growth Projection */}
        <Card className="bg-slate-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-900 mb-2">
              5-Year Equity Growth Projection
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Based on {(avgAppreciation5yr * 100).toFixed(1)}% historical appreciation in{' '}
              {countyName}, {stateFull} (at {selectedCLTV}% CLTV):
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-300">
                    <th className="text-left py-2 text-slate-600">Year</th>
                    <th className="text-right py-2 text-slate-600">Home Value</th>
                    <th className="text-right py-2 text-slate-600">Equity</th>
                    <th className="text-right py-2 text-slate-600">HELOC Line</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 font-medium">Today</td>
                    <td className="text-right">{formatCurrency(homeValueNum)}</td>
                    <td className="text-right">{formatCurrency(equity)}</td>
                    <td className="text-right font-semibold text-emerald-700">
                      {formatCurrency(primaryResult.availableLine)}
                    </td>
                  </tr>
                  {projections.map(({ year, projectedValue, projectedEquity, projectedLine }) => (
                    <tr key={year} className="border-b border-slate-200">
                      <td className="py-2 font-medium">Year {year}</td>
                      <td className="text-right">{formatCurrency(projectedValue)}</td>
                      <td className="text-right">{formatCurrency(projectedEquity)}</td>
                      <td className="text-right font-semibold text-emerald-700">
                        {formatCurrency(projectedLine)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <p className="text-xs text-slate-400 leading-relaxed">
          Calculations are estimates for educational purposes only. Actual HELOC amounts depend on
          credit score, DTI ratio, property appraisal, and lender guidelines. HELOC rates are
          typically variable and tied to the Prime rate. Conforming loan limit for {countyName} is{' '}
          {formatCurrency(conformingLoanLimit)} (2026 FHFA). Contact Mo Abdel at (949) 822-9662 for
          a personalized analysis. NMLS #1426884 | Lumin Lending NMLS #2716106.
        </p>
      </div>
    </div>
  );
}
