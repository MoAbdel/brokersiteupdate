'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import {
  calcEquityComparison,
  calcEquityFullReport,
  formatCurrency,
} from '@/lib/geo-data/calculations';
import { TOOL_RATES } from '@/lib/tool-rates-config';
import ToolLeadCaptureForm from '@/components/tools/ToolLeadCaptureForm';
import EquityComparisonReport from '@/components/tools/EquityComparisonReport';
import type { RepaymentPreference } from '@/lib/geo-data/types';

interface EquityComparisonCalculatorProps {
  countyName: string;
  stateCode: string;
  defaultHomeValue: number;
  conformingLoanLimit: number;
  avgAppreciation5yr: number;
  snapshot?: string;
}

const TERM_BUTTONS = [30, 25, 20, 15, 10];

const REPAYMENT_OPTIONS: { value: RepaymentPreference; label: string }[] = [
  { value: 'asap', label: 'Pay it back ASAP' },
  { value: 'low_payment', label: 'Low monthly payments' },
  { value: 'flexibility', label: 'Flexibility to draw as needed' },
];

export default function EquityComparisonCalculator({
  countyName,
  stateCode,
  defaultHomeValue,
  conformingLoanLimit,
  avgAppreciation5yr,
  snapshot,
}: EquityComparisonCalculatorProps) {
  const [homeValue, setHomeValue] = useState(defaultHomeValue.toString());
  const [mortgageBalance, setMortgageBalance] = useState(
    Math.round(defaultHomeValue * 0.6).toString(),
  );
  const [currentRate, setCurrentRate] = useState('6.5');
  const [remainingYears, setRemainingYears] = useState('25');
  const [accessAmount, setAccessAmount] = useState('50000');
  const [repaymentPref, setRepaymentPref] = useState<RepaymentPreference>('flexibility');
  const [reportUnlocked, setReportUnlocked] = useState(false);

  const homeValueNum = parseInt(homeValue.replace(/,/g, ''), 10) || 0;
  const balanceNum = parseInt(mortgageBalance.replace(/,/g, ''), 10) || 0;
  const rateNum = parseFloat(currentRate) || 0;
  const yearsNum = parseInt(remainingYears, 10) || 25;
  const accessNum = parseInt(accessAmount.replace(/,/g, ''), 10) || 0;

  const helocRate = TOOL_RATES.defaultHelocRate;
  const cashOutRate = TOOL_RATES.defaultMortgageRate;
  const heloanRate = TOOL_RATES.defaultHeloanRate;

  const result = useMemo(
    () =>
      calcEquityComparison(
        homeValueNum,
        balanceNum,
        rateNum,
        yearsNum,
        accessNum,
        repaymentPref,
        helocRate,
        cashOutRate,
        heloanRate,
      ),
    [homeValueNum, balanceNum, rateNum, yearsNum, accessNum, repaymentPref, helocRate, cashOutRate, heloanRate],
  );

  const fullReport = useMemo(
    () =>
      reportUnlocked
        ? calcEquityFullReport(
            homeValueNum,
            balanceNum,
            rateNum,
            yearsNum,
            accessNum,
            repaymentPref,
            helocRate,
            cashOutRate,
            heloanRate,
            avgAppreciation5yr,
          )
        : null,
    [reportUnlocked, homeValueNum, balanceNum, rateNum, yearsNum, accessNum, repaymentPref, helocRate, cashOutRate, heloanRate, avgAppreciation5yr],
  );

  const options = [
    { key: 'heloc' as const, label: 'HELOC', sublabel: 'Interest-Only', data: result.heloc },
    { key: 'cashout' as const, label: 'Cash-Out Refi', sublabel: 'New Mortgage', data: result.cashOut },
    { key: 'heloan' as const, label: 'HELOAN', sublabel: 'Fixed Payment', data: result.heloan },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Panel */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Property Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="eq-homeValue">Home Value</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <Input
                  id="eq-homeValue"
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
              <Label htmlFor="eq-balance">Current Mortgage Balance</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <Input
                  id="eq-balance"
                  type="text"
                  inputMode="numeric"
                  value={mortgageBalance}
                  onChange={(e) => setMortgageBalance(e.target.value.replace(/[^0-9]/g, ''))}
                  className="pl-7"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="eq-rate">Current Mortgage Rate</Label>
              <div className="relative mt-1">
                <Input
                  id="eq-rate"
                  type="text"
                  inputMode="decimal"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(e.target.value.replace(/[^0-9.]/g, ''))}
                  className="pr-7"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
              </div>
            </div>

            <div>
              <Label>Remaining Term</Label>
              <div className="flex gap-2 mt-1">
                {TERM_BUTTONS.map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setRemainingYears(yr.toString())}
                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium border transition-colors ${
                      remainingYears === yr.toString()
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {yr}yr
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Scenario</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="eq-access">Amount to Access</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <Input
                  id="eq-access"
                  type="text"
                  inputMode="numeric"
                  value={accessAmount}
                  onChange={(e) => setAccessAmount(e.target.value.replace(/[^0-9]/g, ''))}
                  className="pl-7"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Available equity (90% CLTV): {formatCurrency(result.availableEquity90)}
              </p>
            </div>

            <div>
              <Label>Repayment Preference</Label>
              <div className="grid grid-cols-1 gap-2 mt-1">
                {REPAYMENT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setRepaymentPref(opt.value)}
                    className={`px-3 py-2 rounded-md text-sm font-medium border transition-colors text-left ${
                      repaymentPref === opt.value
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-900 mb-3">{countyName} Market Context</h3>
            <dl className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-slate-500">Conforming Limit</dt>
                <dd className="font-semibold text-slate-900">{formatCurrency(conformingLoanLimit)}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Median Home Price</dt>
                <dd className="font-semibold text-slate-900">{formatCurrency(defaultHomeValue)}</dd>
              </div>
              <div>
                <dt className="text-slate-500">HELOC Rate</dt>
                <dd className="font-semibold text-slate-900">{helocRate}%</dd>
              </div>
              <div>
                <dt className="text-slate-500">Cash-Out Rate</dt>
                <dd className="font-semibold text-slate-900">{cashOutRate}%</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      {/* Results Panel */}
      <div className="space-y-6">
        <Card className={result.recommendedOption ? 'border-green-200 bg-green-50' : ''}>
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-900 mb-2">Recommendation</h3>
            <p className="text-sm text-slate-700 mb-3">{result.recommendation}</p>
            <p className="text-lg font-bold text-emerald-700">
              Best fit: {result[result.recommendedOption].name}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Monthly Payment Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {options.map((opt) => {
                const isRecommended = result.recommendedOption === opt.key;
                return (
                  <div
                    key={opt.key}
                    className={`p-4 rounded-lg border text-center ${
                      isRecommended
                        ? 'border-emerald-300 bg-emerald-50'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <p className="text-xs text-slate-500 mb-1">{opt.sublabel}</p>
                    <p className="text-sm font-semibold text-slate-900 mb-2">{opt.label}</p>
                    <p
                      className={`text-2xl font-bold ${
                        isRecommended ? 'text-emerald-700' : 'text-slate-900'
                      }`}
                    >
                      {formatCurrency(opt.data.monthlyPayment)}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">/mo</p>
                    {isRecommended && (
                      <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                        Recommended
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-slate-600 mt-4 italic">
              The total cost difference between these options over 10 years is significant — see the
              full breakdown below.
            </p>
          </CardContent>
        </Card>

        {snapshot && (
          <Card className="bg-slate-50">
            <CardContent className="p-6">
              <p className="text-sm text-slate-600 leading-relaxed">{snapshot}</p>
            </CardContent>
          </Card>
        )}

        {!reportUnlocked ? (
          <ToolLeadCaptureForm
            source="equity_comparison_calculator"
            toolData={{
              homeValue: homeValueNum,
              mortgageBalance: balanceNum,
              currentRate: rateNum,
              remainingYears: yearsNum,
              accessAmount: accessNum,
              repaymentPref,
              recommendedOption: result.recommendedOption,
              homeEquity: result.homeEquity,
              county: countyName,
              state: stateCode,
            }}
            headline="Unlock Your Full Equity Comparison Report"
            subtext="See 10-year total cost, break-even analysis, closing cost comparison, and personalized next steps."
            buttonText="Get My Free Report"
            onSuccess={() => setReportUnlocked(true)}
          />
        ) : fullReport ? (
          <EquityComparisonReport report={fullReport} countyName={countyName} />
        ) : null}

        <p className="text-xs text-slate-400 leading-relaxed">
          Calculations are estimates for educational purposes only. Actual rates, closing costs, and
          terms depend on credit profile, lender guidelines, and current market conditions. HELOC
          rates are variable and subject to change. Contact Mo Abdel at (949) 822-9662 for a
          personalized equity access review. NMLS #1426884 | Lumin Lending NMLS #2716106.
        </p>
      </div>
    </div>
  );
}
