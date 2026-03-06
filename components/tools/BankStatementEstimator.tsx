'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import {
  calcBankStatementQualification,
  calcBankStatementFullReport,
  formatCurrency,
} from '@/lib/geo-data/calculations';
import { TOOL_RATES } from '@/lib/tool-rates-config';
import ToolLeadCaptureForm from '@/components/tools/ToolLeadCaptureForm';
import BankStatementReport from '@/components/tools/BankStatementReport';
import type { BusinessType, CreditScoreTier, DocPeriod } from '@/lib/geo-data/types';

interface BankStatementEstimatorProps {
  countyName: string;
  stateCode: string;
  defaultHomeValue: number;
  conformingLoanLimit: number;
  snapshot?: string;
}

const BUSINESS_TYPES: { value: BusinessType; label: string }[] = [
  { value: 'service', label: 'Service' },
  { value: 'retail', label: 'Retail / Product' },
  { value: 'professional', label: 'Professional Practice' },
  { value: 'gig', label: 'Gig / Freelance' },
];

const CREDIT_TIERS: { value: CreditScoreTier; label: string }[] = [
  { value: '700+', label: '700+' },
  { value: '660-699', label: '660–699' },
  { value: '620-659', label: '620–659' },
];

const DOWN_BUTTONS = [10, 15, 20];

export default function BankStatementEstimator({
  countyName,
  stateCode,
  defaultHomeValue,
  conformingLoanLimit,
  snapshot,
}: BankStatementEstimatorProps) {
  const [monthlyDeposits, setMonthlyDeposits] = useState('15000');
  const [businessType, setBusinessType] = useState<BusinessType>('service');
  const [docPeriod, setDocPeriod] = useState<DocPeriod>(12);
  const [desiredPrice, setDesiredPrice] = useState(defaultHomeValue.toString());
  const [downPaymentPct, setDownPaymentPct] = useState('20');
  const [creditScore, setCreditScore] = useState<CreditScoreTier>('700+');
  const [reportUnlocked, setReportUnlocked] = useState(false);

  const depositsNum = parseInt(monthlyDeposits.replace(/,/g, ''), 10) || 0;
  const priceNum = parseInt(desiredPrice.replace(/,/g, ''), 10) || 0;
  const downPct = parseFloat(downPaymentPct) || 0;
  const rate = TOOL_RATES.defaultBankStatementRate;

  const warnings: string[] = [];
  if (depositsNum > 0 && depositsNum < 3000) {
    warnings.push('Most bank statement programs require minimum deposits of $3,000/mo');
  }
  if (priceNum > defaultHomeValue * 3 && priceNum > 0) {
    warnings.push(`Property price is over 3x the ${countyName} median — verify your target`);
  }

  const result = useMemo(
    () => calcBankStatementQualification(depositsNum, businessType, priceNum, downPct, rate),
    [depositsNum, businessType, priceNum, downPct, rate],
  );

  const fullReport = useMemo(
    () =>
      reportUnlocked
        ? calcBankStatementFullReport(depositsNum, businessType, priceNum, downPct, rate, creditScore, docPeriod)
        : null,
    [reportUnlocked, depositsNum, businessType, priceNum, downPct, rate, creditScore, docPeriod],
  );

  const tierColor =
    result.tier === 'green'
      ? 'text-emerald-700'
      : result.tier === 'yellow'
        ? 'text-yellow-600'
        : 'text-red-600';

  const tierBg =
    result.tier === 'green'
      ? 'border-green-200 bg-green-50'
      : result.tier === 'yellow'
        ? 'border-yellow-200 bg-yellow-50'
        : 'border-red-200 bg-red-50';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Panel */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Business &amp; Income Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Business Type</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {BUSINESS_TYPES.map((bt) => (
                  <button
                    key={bt.value}
                    type="button"
                    onClick={() => setBusinessType(bt.value)}
                    className={`px-3 py-2 rounded-md text-sm font-medium border transition-colors ${
                      businessType === bt.value
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {bt.label}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Expense factor: {(TOOL_RATES.bankStatementExpenseFactors[businessType] * 100).toFixed(0)}% of deposits treated as business expenses
              </p>
            </div>

            <div>
              <Label htmlFor="monthlyDeposits">Average Monthly Deposits</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <Input
                  id="monthlyDeposits"
                  type="text"
                  inputMode="numeric"
                  value={monthlyDeposits}
                  onChange={(e) => setMonthlyDeposits(e.target.value.replace(/[^0-9]/g, ''))}
                  className="pl-7"
                />
              </div>
            </div>

            <div>
              <Label>Documentation Period</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {([12, 24] as DocPeriod[]).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setDocPeriod(p)}
                    className={`px-3 py-2 rounded-md text-sm font-medium border transition-colors ${
                      docPeriod === p
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {p} Months
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label>Credit Score Range</Label>
              <div className="grid grid-cols-3 gap-2 mt-1">
                {CREDIT_TIERS.map((ct) => (
                  <button
                    key={ct.value}
                    type="button"
                    onClick={() => setCreditScore(ct.value)}
                    className={`px-3 py-2 rounded-md text-sm font-medium border transition-colors ${
                      creditScore === ct.value
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {ct.label}
                  </button>
                ))}
              </div>
              {creditScore === '620-659' && (
                <p className="text-xs text-yellow-600 mt-1">
                  Some programs require 660+ credit. Consider our Loan Finder Quiz for alternatives.
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Property Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="desiredPrice">Desired Property Price</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <Input
                  id="desiredPrice"
                  type="text"
                  inputMode="numeric"
                  value={desiredPrice}
                  onChange={(e) => setDesiredPrice(e.target.value.replace(/[^0-9]/g, ''))}
                  className="pl-7"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {countyName} median: {formatCurrency(defaultHomeValue)}
              </p>
            </div>

            <div>
              <Label>Down Payment (%)</Label>
              <div className="flex gap-2 mt-1">
                {DOWN_BUTTONS.map((dp) => (
                  <button
                    key={dp}
                    type="button"
                    onClick={() => setDownPaymentPct(dp.toString())}
                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium border transition-colors ${
                      downPaymentPct === dp.toString()
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {dp}%
                  </button>
                ))}
                <div className="relative flex-1">
                  <Input
                    type="text"
                    inputMode="decimal"
                    value={!DOWN_BUTTONS.includes(Number(downPaymentPct)) ? downPaymentPct : ''}
                    placeholder="Custom"
                    onChange={(e) => setDownPaymentPct(e.target.value.replace(/[^0-9.]/g, ''))}
                    className="pr-7 text-sm"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">%</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Down payment: {formatCurrency(Math.round(priceNum * (downPct / 100)))} | Loan: {formatCurrency(Math.round(priceNum * (1 - downPct / 100)))}
              </p>
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
                <dt className="text-slate-500">Est. Rate</dt>
                <dd className="font-semibold text-slate-900">{rate}%</dd>
              </div>
              <div>
                <dt className="text-slate-500">Max DTI</dt>
                <dd className="font-semibold text-slate-900">{(TOOL_RATES.bankStatementMaxDTI * 100).toFixed(0)}%</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      {/* Results Panel */}
      <div className="space-y-6">
        {warnings.length > 0 && (
          <div className="space-y-2">
            {warnings.map((w, i) => (
              <div key={i} className="rounded-md bg-yellow-50 border border-yellow-200 p-3 text-sm text-yellow-800">
                {w}
              </div>
            ))}
          </div>
        )}

        <Card className={tierBg}>
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Your Qualification Estimate</h3>
            <div className="text-center mb-4">
              <p className="text-sm text-slate-600 mb-1">Estimated Qualifying Monthly Income</p>
              <p className={`text-4xl font-bold ${tierColor}`}>
                {formatCurrency(result.qualifyingMonthlyIncome)}
              </p>
              <p className="text-sm text-slate-600 mt-2">{result.tierMessage}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-slate-600">Max Purchase Price</p>
                <p className="text-xl font-bold text-slate-900">{formatCurrency(result.maxPurchasePrice)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Max Loan Amount</p>
                <p className="text-xl font-bold text-slate-900">{formatCurrency(result.maxLoanAmount)}</p>
              </div>
            </div>
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
            source="bank_statement_estimator"
            toolData={{
              avgMonthlyDeposits: depositsNum,
              businessType,
              docPeriod,
              creditScore,
              qualifyingIncome: result.qualifyingMonthlyIncome,
              maxLoan: result.maxLoanAmount,
              tier: result.tier,
              county: countyName,
              state: stateCode,
            }}
            headline="Unlock Your Full Bank Statement Report"
            subtext="See your qualification range, 12 vs 24 month comparison, down payment impact, and required documents list."
            buttonText="Get My Free Report"
            onSuccess={() => setReportUnlocked(true)}
          />
        ) : fullReport ? (
          <BankStatementReport
            report={fullReport}
            businessType={businessType}
            creditScore={creditScore}
            docPeriod={docPeriod}
            countyName={countyName}
          />
        ) : null}

        <p className="text-xs text-slate-400 leading-relaxed">
          Calculations are estimates for educational purposes only. Actual qualification depends on
          lender-specific guidelines, full document review, and underwriting. Bank statement programs
          vary by lender — expense factors, income calculation methods, and minimum requirements differ.
          Contact Mo Abdel at (949) 579-2057 for a personalized scenario review. NMLS #1426884 | Lumin
          Lending NMLS #2716106.
        </p>
      </div>
    </div>
  );
}
