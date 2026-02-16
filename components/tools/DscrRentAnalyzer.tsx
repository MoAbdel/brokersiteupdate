'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { calcDSCR, formatCurrency } from '@/lib/geo-data/calculations';

interface DscrRentAnalyzerProps {
  countyName: string;
  stateCode: string;
  defaultHomeValue: number;
  conformingLoanLimit: number;
  medianRent: number;
  avgPropertyTaxRate: number;
}

export default function DscrRentAnalyzer({
  countyName,
  stateCode,
  defaultHomeValue,
  conformingLoanLimit,
  medianRent,
  avgPropertyTaxRate,
}: DscrRentAnalyzerProps) {
  const [purchasePrice, setPurchasePrice] = useState(defaultHomeValue.toString());
  const [downPaymentPct, setDownPaymentPct] = useState('25');
  const [interestRate, setInterestRate] = useState('7.0');
  const [monthlyRent, setMonthlyRent] = useState(medianRent.toString());
  const [monthlyHOA, setMonthlyHOA] = useState('200');
  const [annualInsurance, setAnnualInsurance] = useState('1800');

  const priceNum = parseInt(purchasePrice.replace(/,/g, ''), 10) || 0;
  const downPct = parseFloat(downPaymentPct) || 0;
  const rateNum = parseFloat(interestRate) || 0;
  const rentNum = parseInt(monthlyRent.replace(/,/g, ''), 10) || 0;
  const hoaNum = parseInt(monthlyHOA.replace(/,/g, ''), 10) || 0;
  const insuranceNum = parseInt(annualInsurance.replace(/,/g, ''), 10) || 0;

  const loanAmount = Math.round(priceNum * (1 - downPct / 100));
  const annualPropertyTax = Math.round(priceNum * avgPropertyTaxRate);

  const result = useMemo(
    () =>
      calcDSCR(rentNum, loanAmount, rateNum, 30, annualPropertyTax, insuranceNum, hoaNum),
    [rentNum, loanAmount, rateNum, annualPropertyTax, insuranceNum, hoaNum]
  );

  const dscrColor =
    result.actualDSCR >= 1.25
      ? 'text-emerald-700'
      : result.actualDSCR >= 1.0
        ? 'text-yellow-600'
        : 'text-red-600';

  const dscrBg =
    result.actualDSCR >= 1.25
      ? 'border-green-200 bg-green-50'
      : result.actualDSCR >= 1.0
        ? 'border-yellow-200 bg-yellow-50'
        : 'border-red-200 bg-red-50';

  const stateFull = stateCode === 'ca' ? 'California' : 'Washington';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Panel */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Investment Property Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="purchasePrice">Purchase Price</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <Input
                  id="purchasePrice"
                  type="text"
                  inputMode="numeric"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value.replace(/[^0-9]/g, ''))}
                  className="pl-7"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {countyName} median: {formatCurrency(defaultHomeValue)}
              </p>
            </div>

            <div>
              <Label htmlFor="downPaymentPct">Down Payment (%)</Label>
              <div className="relative mt-1">
                <Input
                  id="downPaymentPct"
                  type="text"
                  inputMode="decimal"
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(e.target.value.replace(/[^0-9.]/g, ''))}
                  className="pr-7"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Down payment: {formatCurrency(Math.round(priceNum * (downPct / 100)))} | Loan: {formatCurrency(loanAmount)}
              </p>
            </div>

            <div>
              <Label htmlFor="interestRate">Interest Rate (%)</Label>
              <div className="relative mt-1">
                <Input
                  id="interestRate"
                  type="text"
                  inputMode="decimal"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value.replace(/[^0-9.]/g, ''))}
                  className="pr-7"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
              </div>
            </div>

            <div>
              <Label htmlFor="monthlyRent">Monthly Rent</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                <Input
                  id="monthlyRent"
                  type="text"
                  inputMode="numeric"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(e.target.value.replace(/[^0-9]/g, ''))}
                  className="pl-7"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {countyName} median rent: {formatCurrency(medianRent)}/mo
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="monthlyHOA">Monthly HOA</Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <Input
                    id="monthlyHOA"
                    type="text"
                    inputMode="numeric"
                    value={monthlyHOA}
                    onChange={(e) => setMonthlyHOA(e.target.value.replace(/[^0-9]/g, ''))}
                    className="pl-7"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="annualInsurance">Annual Insurance</Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <Input
                    id="annualInsurance"
                    type="text"
                    inputMode="numeric"
                    value={annualInsurance}
                    onChange={(e) => setAnnualInsurance(e.target.value.replace(/[^0-9]/g, ''))}
                    className="pl-7"
                  />
                </div>
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
                <dt className="text-slate-500">Median Rent</dt>
                <dd className="font-semibold text-slate-900">
                  {formatCurrency(medianRent)}/mo
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
                <dd className="font-semibold text-slate-900">
                  {formatCurrency(annualPropertyTax)}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      {/* Results Panel */}
      <div className="space-y-6">
        {/* DSCR Result */}
        <Card className={dscrBg}>
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Your DSCR Ratio</h3>
            <div className="text-center mb-4">
              <p className={`text-5xl font-bold ${dscrColor}`}>
                {result.actualDSCR.toFixed(2)}
              </p>
              <p className="text-sm text-slate-600 mt-1">
                {result.actualDSCR >= 1.25
                  ? 'Meets most lender minimums (1.25+)'
                  : result.actualDSCR >= 1.0
                    ? 'Break-even — some lenders accept 1.0 DSCR'
                    : 'Below break-even — rent does not cover PITIA'}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-600">Monthly Rent</p>
                <p className="text-xl font-bold text-slate-900">{formatCurrency(rentNum)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Monthly PITIA</p>
                <p className="text-xl font-bold text-slate-900">{formatCurrency(result.monthlyPayment)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Required Rent Thresholds */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Required Rent by DSCR Threshold</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-900">1.0 DSCR (Break-Even)</span>
                  <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full font-medium">
                    Minimum
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-slate-500">Required Rent</p>
                    <p className="font-bold text-slate-900 text-lg">
                      {formatCurrency(result.requiredRentAt1_0)}/mo
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">vs Your Rent</p>
                    <p className={`font-bold text-lg ${rentNum >= result.requiredRentAt1_0 ? 'text-emerald-700' : 'text-red-600'}`}>
                      {rentNum >= result.requiredRentAt1_0 ? '+' : ''}{formatCurrency(rentNum - result.requiredRentAt1_0)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-green-200 bg-green-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-900">1.25 DSCR (Lender Standard)</span>
                  <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium">
                    Recommended
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-slate-500">Required Rent</p>
                    <p className="font-bold text-slate-900 text-lg">
                      {formatCurrency(result.requiredRentAt1_25)}/mo
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">vs Your Rent</p>
                    <p className={`font-bold text-lg ${rentNum >= result.requiredRentAt1_25 ? 'text-emerald-700' : 'text-red-600'}`}>
                      {rentNum >= result.requiredRentAt1_25 ? '+' : ''}{formatCurrency(rentNum - result.requiredRentAt1_25)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* County Median Comparison */}
        <Card className="bg-slate-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-900 mb-2">
              {countyName} Median Rent Comparison
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              The median rent in {countyName}, {stateFull} is {formatCurrency(medianRent)}/mo.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">Your Rent vs Median</p>
                <p className={`text-xl font-bold ${rentNum >= medianRent ? 'text-emerald-700' : 'text-red-600'}`}>
                  {rentNum >= medianRent ? '+' : ''}{formatCurrency(rentNum - medianRent)}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">DSCR at Median Rent</p>
                <p className="text-xl font-bold text-slate-900">
                  {result.monthlyPayment > 0
                    ? (medianRent / result.monthlyPayment).toFixed(2)
                    : '—'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-xs text-slate-400 leading-relaxed">
          Calculations are estimates for educational purposes only. Actual DSCR requirements vary by
          lender, property type, and loan program. Most DSCR lenders require a minimum ratio of
          1.0–1.25. Contact Mo Abdel at (949) 822-9662 for a personalized investment property
          analysis. NMLS #1426884 | Lumin Lending NMLS #2716106.
        </p>
      </div>
    </div>
  );
}
