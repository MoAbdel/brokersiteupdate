'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { calcPropertyTax, formatCurrency } from '@/lib/geo-data/calculations';

interface PropertyTaxEstimatorProps {
  countyName: string;
  stateCode: string;
  defaultHomeValue: number;
  avgPropertyTaxRate: number;
  stateName: string;
}

const COMPARISON_PRICES = [500_000, 750_000, 1_000_000, 1_500_000, 2_000_000];

export default function PropertyTaxEstimator({
  countyName,
  stateCode,
  defaultHomeValue,
  avgPropertyTaxRate,
  stateName,
}: PropertyTaxEstimatorProps) {
  const [purchasePrice, setPurchasePrice] = useState(defaultHomeValue.toString());
  const [customRate, setCustomRate] = useState((avgPropertyTaxRate * 100).toFixed(3));

  const priceNum = parseInt(purchasePrice.replace(/,/g, ''), 10) || 0;
  const rateNum = parseFloat(customRate) / 100 || 0;

  const result = useMemo(() => calcPropertyTax(priceNum, rateNum), [priceNum, rateNum]);

  const comparisonData = useMemo(
    () => COMPARISON_PRICES.map((price) => ({ price, ...calcPropertyTax(price, rateNum) })),
    [rateNum]
  );

  const stateNote =
    stateCode === 'ca'
      ? 'California Proposition 13 caps the base property tax rate at 1% of assessed value at purchase, plus voter-approved local bonds and assessments. Actual rates vary by city due to Mello-Roos and special assessments.'
      : 'Washington has no state income tax, so local governments rely more heavily on property taxes for revenue. Rates vary significantly between counties and cities.';

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
              <Label htmlFor="purchasePrice">Purchase Price / Home Value</Label>
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
              <Label htmlFor="taxRate">Effective Tax Rate (%)</Label>
              <div className="relative mt-1">
                <Input
                  id="taxRate"
                  type="text"
                  inputMode="decimal"
                  value={customRate}
                  onChange={(e) => setCustomRate(e.target.value.replace(/[^0-9.]/g, ''))}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {countyName} average: {(avgPropertyTaxRate * 100).toFixed(3)}%
              </p>
            </div>
          </CardContent>
        </Card>

        {/* State-Specific Note */}
        <Card className="bg-slate-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-900 mb-3">
              {stateName} Property Tax Note
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">{stateNote}</p>
          </CardContent>
        </Card>
      </div>

      {/* Results Panel */}
      <div className="space-y-6">
        {/* Tax Summary */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Your Property Tax Estimate</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-blue-700">Annual Tax</p>
                <p className="text-2xl font-bold text-blue-900">
                  {formatCurrency(result.annualTax)}
                </p>
              </div>
              <div>
                <p className="text-sm text-blue-700">Monthly Tax</p>
                <p className="text-2xl font-bold text-blue-900">
                  {formatCurrency(result.monthlyTax)}
                </p>
              </div>
              <div>
                <p className="text-sm text-blue-700">Effective Rate</p>
                <p className="text-2xl font-bold text-blue-900">
                  {(result.effectiveRate * 100).toFixed(3)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              Tax at Different Price Points in {countyName}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-2 font-semibold text-slate-700">
                      Home Price
                    </th>
                    <th className="text-right py-3 px-2 font-semibold text-slate-700">
                      Annual Tax
                    </th>
                    <th className="text-right py-3 px-2 font-semibold text-slate-700">
                      Monthly Tax
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr
                      key={row.price}
                      className={`border-b border-slate-100 ${
                        row.price === priceNum ? 'bg-blue-50 font-semibold' : ''
                      }`}
                    >
                      <td className="py-3 px-2 text-slate-900">
                        {formatCurrency(row.price)}
                      </td>
                      <td className="py-3 px-2 text-right text-slate-900">
                        {formatCurrency(row.annualTax)}
                      </td>
                      <td className="py-3 px-2 text-right text-slate-900">
                        {formatCurrency(row.monthlyTax)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Based on {(rateNum * 100).toFixed(3)}% effective tax rate for {countyName}.
            </p>
          </CardContent>
        </Card>

        {/* PITI Impact */}
        <Card className="bg-slate-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-900 mb-2">
              Impact on Monthly Mortgage Payment
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              Property taxes are part of your total PITI (Principal, Interest, Taxes, Insurance)
              payment. Lenders include {formatCurrency(result.monthlyTax)}/month in your qualifying
              debt-to-income ratio.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">Monthly Tax Escrow</p>
                <p className="text-xl font-bold text-slate-900">
                  {formatCurrency(result.monthlyTax)}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Annual Tax Bill</p>
                <p className="text-xl font-bold text-slate-900">
                  {formatCurrency(result.annualTax)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-xs text-slate-400 leading-relaxed">
          Calculations are estimates for educational purposes only. Actual property taxes depend on
          your county assessor&apos;s valuation, local bond measures, Mello-Roos districts, and
          homeowner exemptions. Contact Mo Abdel at (949) 822-9662 for a personalized mortgage
          analysis. NMLS #1426884 | Lumin Lending NMLS #2716106.
        </p>
      </div>
    </div>
  );
}
