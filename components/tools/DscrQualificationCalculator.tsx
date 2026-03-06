'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import {
  calcDSCRQualification,
  calcDSCRFullReport,
  formatCurrency,
} from '@/lib/geo-data/calculations';
import { TOOL_RATES } from '@/lib/tool-rates-config';
import ToolLeadCaptureForm from '@/components/tools/ToolLeadCaptureForm';
import DscrQualificationReport from '@/components/tools/DscrQualificationReport';

interface DscrQualificationCalculatorProps {
  countyName: string;
  stateCode: string;
  defaultHomeValue: number;
  conformingLoanLimit: number;
  medianRent: number;
  avgPropertyTaxRate: number;
  avgAppreciation5yr: number;
  cityName?: string;
  dscrSnapshot?: string;
}

const DOWN_PAYMENT_OPTIONS = [20, 25, 30] as const;
const MGMT_FEE_OPTIONS = TOOL_RATES.mgmtFeeOptions;

export default function DscrQualificationCalculator({
  countyName,
  stateCode,
  defaultHomeValue,
  conformingLoanLimit,
  medianRent,
  avgPropertyTaxRate,
  avgAppreciation5yr,
  cityName,
  dscrSnapshot,
}: DscrQualificationCalculatorProps) {
  // --- Input state ---
  const [purchasePrice, setPurchasePrice] = useState(defaultHomeValue.toString());
  const [downPaymentPct, setDownPaymentPct] = useState<number>(25);
  const [customDownPct, setCustomDownPct] = useState('');
  const [isCustomDown, setIsCustomDown] = useState(false);
  const [interestRate, setInterestRate] = useState(TOOL_RATES.defaultDscrRate.toString());
  const [loanType, setLoanType] = useState<'amortizing' | 'interest-only'>('amortizing');

  const [monthlyRent, setMonthlyRent] = useState(medianRent.toString());
  const [isSTR, setIsSTR] = useState(false);
  const [annualInsurance, setAnnualInsurance] = useState(
    Math.round(defaultHomeValue * TOOL_RATES.defaultInsuranceRate).toString()
  );
  const [monthlyHOA, setMonthlyHOA] = useState(TOOL_RATES.defaultHOA.toString());
  const [mgmtFeePct, setMgmtFeePct] = useState<number>(0);

  const [reportUnlocked, setReportUnlocked] = useState(false);

  // --- Parsed values ---
  const priceNum = parseInt(purchasePrice.replace(/,/g, ''), 10) || 0;
  const activeDownPct = isCustomDown ? (parseFloat(customDownPct) || 0) : downPaymentPct;
  const rateNum = parseFloat(interestRate) || 0;
  const rentNum = parseInt(monthlyRent.replace(/,/g, ''), 10) || 0;
  const insuranceNum = parseInt(annualInsurance.replace(/,/g, ''), 10) || 0;
  const hoaNum = parseInt(monthlyHOA.replace(/,/g, ''), 10) || 0;

  const annualPropertyTax = Math.round(priceNum * avgPropertyTaxRate);
  const loanAmount = Math.round(priceNum * (1 - activeDownPct / 100));

  // --- Input warnings ---
  const priceWarning =
    priceNum > 0 && priceNum < 100000
      ? 'Purchase price seems low for an investment property.'
      : priceNum > defaultHomeValue * 3
        ? `This price is over 3x the ${countyName} median.`
        : null;
  const rentWarning = purchasePrice && rentNum === 0 ? 'Enter expected monthly rent to calculate DSCR.' : null;
  const rateWarning = rateNum > 15 ? 'Interest rate above 15% is unusual for DSCR loans.' : null;

  // --- Free result (always computed) ---
  const result = useMemo(() => {
    if (priceNum === 0 || rentNum === 0 || rateNum === 0) return null;
    return calcDSCRQualification(
      rentNum,
      priceNum,
      activeDownPct,
      rateNum,
      annualPropertyTax,
      insuranceNum,
      hoaNum,
      mgmtFeePct,
      isSTR,
      conformingLoanLimit,
    );
  }, [priceNum, rentNum, rateNum, activeDownPct, annualPropertyTax, insuranceNum, hoaNum, mgmtFeePct, isSTR, conformingLoanLimit]);

  // --- IO teaser (show when amortizing and IO would bump tier) ---
  const ioTeaser = useMemo(() => {
    if (!result || loanType !== 'amortizing') return null;
    if (result.ioDSCR <= result.actualDSCR) return null;
    return result.ioDSCR;
  }, [result, loanType]);

  // --- Full report (only when unlocked) ---
  const fullReport = useMemo(() => {
    if (!reportUnlocked || priceNum === 0 || rentNum === 0 || rateNum === 0) return null;
    return calcDSCRFullReport(
      rentNum,
      priceNum,
      activeDownPct,
      rateNum,
      avgPropertyTaxRate,
      insuranceNum,
      hoaNum,
      mgmtFeePct,
      isSTR,
      conformingLoanLimit,
      avgAppreciation5yr,
    );
  }, [reportUnlocked, rentNum, priceNum, activeDownPct, rateNum, avgPropertyTaxRate, insuranceNum, hoaNum, mgmtFeePct, isSTR, conformingLoanLimit, avgAppreciation5yr]);

  // --- DSCR color helpers ---
  const getDscrColor = (dscr: number) => {
    if (dscr >= 1.25) return 'text-emerald-700';
    if (dscr >= 1.0) return 'text-blue-700';
    if (dscr >= 0.75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getDscrBg = (dscr: number) => {
    if (dscr >= 1.25) return 'border-green-200 bg-green-50';
    if (dscr >= 1.0) return 'border-blue-200 bg-blue-50';
    if (dscr >= 0.75) return 'border-yellow-200 bg-yellow-50';
    return 'border-red-200 bg-red-50';
  };

  const getDscrBadgeBg = (tier: string) => {
    switch (tier) {
      case 'green': return 'bg-green-100 text-green-800';
      case 'blue': return 'bg-blue-100 text-blue-800';
      case 'yellow': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-red-100 text-red-800';
    }
  };

  const getDscrBadgeLabel = (tier: string) => {
    switch (tier) {
      case 'green': return 'Strong';
      case 'blue': return 'Qualifies';
      case 'yellow': return 'Limited';
      default: return 'Below Minimum';
    }
  };

  const stateFull = stateCode === 'ca' ? 'California' : 'Washington';
  const locationLabel = cityName ? `${cityName}, ${countyName}` : countyName;

  return (
    <div>
      {/* DSCR Snapshot */}
      {dscrSnapshot && (
        <div className="mb-6 rounded-lg bg-slate-100 p-4 text-sm text-slate-700 leading-relaxed">
          {dscrSnapshot}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ========== Input Panel ========== */}
        <div className="space-y-6">
          {/* Property & Loan Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Property &amp; Loan Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Purchase Price */}
              <div>
                <Label htmlFor="qual-price">Purchase Price</Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <Input
                    id="qual-price"
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
                {priceWarning && (
                  <p className="text-xs text-amber-600 mt-1">{priceWarning}</p>
                )}
              </div>

              {/* Down Payment */}
              <div>
                <Label>Down Payment</Label>
                <div className="flex gap-2 mt-1">
                  {DOWN_PAYMENT_OPTIONS.map((dp) => (
                    <button
                      key={dp}
                      type="button"
                      onClick={() => {
                        setDownPaymentPct(dp);
                        setIsCustomDown(false);
                        setCustomDownPct('');
                      }}
                      className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        !isCustomDown && downPaymentPct === dp
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {dp}%
                    </button>
                  ))}
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      inputMode="decimal"
                      placeholder="Custom"
                      value={customDownPct}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9.]/g, '');
                        setCustomDownPct(val);
                        setIsCustomDown(true);
                      }}
                      onFocus={() => setIsCustomDown(true)}
                      className={`pr-7 text-sm ${isCustomDown ? 'ring-2 ring-blue-500' : ''}`}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">%</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Down: {formatCurrency(Math.round(priceNum * (activeDownPct / 100)))} | Loan: {formatCurrency(loanAmount)}
                </p>
              </div>

              {/* Interest Rate */}
              <div>
                <Label htmlFor="qual-rate">Interest Rate (%)</Label>
                <div className="relative mt-1">
                  <Input
                    id="qual-rate"
                    type="text"
                    inputMode="decimal"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value.replace(/[^0-9.]/g, ''))}
                    className="pr-7"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
                </div>
                {rateWarning && (
                  <p className="text-xs text-amber-600 mt-1">{rateWarning}</p>
                )}
              </div>

              {/* Loan Type Toggle */}
              <div>
                <Label>Loan Type</Label>
                <div className="flex gap-2 mt-1">
                  {(['amortizing', 'interest-only'] as const).map((lt) => (
                    <button
                      key={lt}
                      type="button"
                      onClick={() => setLoanType(lt)}
                      className={`flex-1 rounded-md px-3 py-2 text-sm font-medium capitalize transition-colors ${
                        loanType === lt
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {lt === 'interest-only' ? 'Interest-Only' : 'Amortizing (30yr)'}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rental Income & Expenses */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Rental Income &amp; Expenses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Monthly Rent */}
              <div>
                <Label htmlFor="qual-rent">Monthly Rent</Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <Input
                    id="qual-rent"
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
                {rentWarning && (
                  <p className="text-xs text-amber-600 mt-1">{rentWarning}</p>
                )}
              </div>

              {/* STR Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <Label>Short-Term Rental (STR)</Label>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Lenders apply a 75% haircut to STR income
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={isSTR}
                  onClick={() => setIsSTR(!isSTR)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                    isSTR ? 'bg-slate-900' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      isSTR ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
              {isSTR && (
                <p className="text-xs text-blue-600 -mt-2">
                  Effective rent: {formatCurrency(Math.round(rentNum * 0.75))}/mo (75% of {formatCurrency(rentNum)})
                </p>
              )}

              {/* Property Tax (auto-calculated) */}
              <div>
                <Label>Monthly Property Tax (est.)</Label>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {formatCurrency(Math.round(annualPropertyTax / 12))}/mo
                  <span className="text-xs font-normal text-slate-500 ml-2">
                    ({(avgPropertyTaxRate * 100).toFixed(2)}% of purchase price)
                  </span>
                </p>
              </div>

              {/* Insurance & HOA */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="qual-insurance">Annual Insurance</Label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                    <Input
                      id="qual-insurance"
                      type="text"
                      inputMode="numeric"
                      value={annualInsurance}
                      onChange={(e) => setAnnualInsurance(e.target.value.replace(/[^0-9]/g, ''))}
                      className="pl-7"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="qual-hoa">Monthly HOA</Label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                    <Input
                      id="qual-hoa"
                      type="text"
                      inputMode="numeric"
                      value={monthlyHOA}
                      onChange={(e) => setMonthlyHOA(e.target.value.replace(/[^0-9]/g, ''))}
                      className="pl-7"
                    />
                  </div>
                </div>
              </div>

              {/* Management Fee */}
              <div>
                <Label>Property Management Fee</Label>
                <div className="flex gap-2 mt-1">
                  {MGMT_FEE_OPTIONS.map((fee) => (
                    <button
                      key={fee}
                      type="button"
                      onClick={() => setMgmtFeePct(fee)}
                      className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        mgmtFeePct === fee
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {fee === 0 ? 'Self-Manage' : `${(fee * 100).toFixed(0)}%`}
                    </button>
                  ))}
                </div>
                {mgmtFeePct > 0 && rentNum > 0 && (
                  <p className="text-xs text-slate-500 mt-1">
                    Management fee: {formatCurrency(Math.round((isSTR ? rentNum * 0.75 : rentNum) * mgmtFeePct))}/mo
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ========== Results Panel ========== */}
        <div className="space-y-6">
          {/* Primary DSCR Result */}
          {result ? (
            <Card className={getDscrBg(result.actualDSCR)}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-900">
                    Your DSCR Ratio {loanType === 'interest-only' ? '(IO)' : ''}
                  </h3>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getDscrBadgeBg(result.tier)}`}>
                    {getDscrBadgeLabel(result.tier)}
                  </span>
                </div>
                <div className="text-center mb-4">
                  <p className={`text-5xl font-bold ${getDscrColor(result.actualDSCR)}`}>
                    {loanType === 'interest-only' ? result.ioDSCR.toFixed(2) : result.actualDSCR.toFixed(2)}
                  </p>
                  <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto">
                    {result.tierMessage}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-4">
                  <div>
                    <p className="text-sm text-slate-600">
                      {isSTR ? 'Effective Rent (75%)' : 'Monthly Rent'}
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      {formatCurrency(isSTR ? Math.round(rentNum * 0.75) : rentNum)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Monthly PITIA</p>
                    <p className="text-xl font-bold text-slate-900">
                      {formatCurrency(loanType === 'interest-only' ? result.ioMonthlyPayment : result.monthlyPayment)}
                    </p>
                  </div>
                </div>
                {result.isJumbo && (
                  <p className="text-xs text-blue-700 mt-3 bg-blue-50 rounded px-2 py-1">
                    This loan amount ({formatCurrency(result.loanAmount)}) exceeds the {countyName} conforming limit of {formatCurrency(conformingLoanLimit)} &mdash; jumbo DSCR pricing applies.
                  </p>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="border-slate-200">
              <CardContent className="p-6 text-center text-slate-500">
                <p className="text-lg font-medium">Enter property details to see your DSCR</p>
                <p className="text-sm mt-1">
                  Fill in purchase price, rent, and interest rate to calculate.
                </p>
              </CardContent>
            </Card>
          )}

          {/* IO Teaser */}
          {ioTeaser && (
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">Interest-only option:</span>{' '}
                  Switching to interest-only would improve your DSCR to{' '}
                  <span className="font-bold">{ioTeaser.toFixed(2)}</span>
                </p>
                <button
                  type="button"
                  onClick={() => setLoanType('interest-only')}
                  className="mt-2 text-xs font-medium text-blue-700 underline hover:text-blue-900"
                >
                  Switch to interest-only
                </button>
              </CardContent>
            </Card>
          )}

          {/* Email Gate or Report */}
          {result && !reportUnlocked && (
            <ToolLeadCaptureForm
              source="dscr-qualification-calculator"
              toolData={{
                purchasePrice: priceNum,
                downPaymentPct: activeDownPct,
                interestRate: rateNum,
                monthlyRent: rentNum,
                loanType,
                isSTR,
                mgmtFeePct,
                dscr: result.actualDSCR,
                tier: result.tier,
                location: locationLabel,
              }}
              headline="Unlock Your Full DSCR Qualification Report"
              subtext="Get down-payment comparisons, interest-only analysis, cash-on-cash projections, and personalized lender recommendations."
              buttonText="Get My Free Report"
              onSuccess={() => setReportUnlocked(true)}
            />
          )}

          {reportUnlocked && fullReport && (
            <DscrQualificationReport
              report={fullReport}
              locationLabel={locationLabel}
              stateName={stateFull}
              loanType={loanType}
            />
          )}

          {/* Disclaimer */}
          <p className="text-xs text-slate-400 leading-relaxed">
            Rates as of {TOOL_RATES.lastUpdated}. Calculations are estimates for educational
            purposes only. Actual DSCR requirements, rates, and terms vary by lender, property
            type, and loan program. Most DSCR lenders require a minimum ratio of 1.0&ndash;1.25.
            Contact Mo Abdel at (949) 822-9662 for a personalized investment property analysis.
            NMLS #1426884 | Lumin Lending NMLS #2716106.
          </p>
        </div>
      </div>
    </div>
  );
}
