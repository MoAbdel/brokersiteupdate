# DSCR Qualification Calculator Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build an interactive DSCR qualification calculator with email-gated detailed report, deployed across 97 county and 300+ city pages, to convert 5,000+ monthly impressions at 0% CTR into qualified leads.

**Architecture:** Server-rendered pages using Next.js App Router with `generateStaticParams()` for all county/city combinations. Client-side calculator components with real-time DSCR calculation. Shared `ToolLeadCaptureForm` component gates the detailed report behind email capture. Leads stored via existing `/api/quotes` endpoint with tool-specific structured data.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS v3.4.17, existing geo-data library (97 counties, 300+ cities)

**Design Doc:** `docs/plans/2026-03-05-lead-magnet-tools-suite-design.md`

---

## Task 1: Rate Configuration File

**Files:**
- Create: `lib/tool-rates-config.ts`

**Step 1: Create the config file**

```typescript
// lib/tool-rates-config.ts

/**
 * Centralized rate assumptions for all interactive tools.
 * Update this file when market rates change.
 */
export const TOOL_RATES = {
  /** Default DSCR loan rate (displayed as starting point) */
  defaultDscrRate: 7.5,
  /** Default conventional mortgage rate */
  defaultMortgageRate: 7.0,
  /** Default HELOC variable rate (prime + margin) */
  defaultHelocRate: 9.0,
  /** Default home equity loan fixed rate */
  defaultHeloanRate: 8.5,
  /** Default homeowner's insurance as % of home value */
  defaultInsuranceRate: 0.0035,
  /** Default monthly HOA */
  defaultHOA: 200,
  /** Short-term rental income haircut (75% of projected) */
  strIncomeHaircut: 0.75,
  /** Property management fee options */
  mgmtFeeOptions: [0, 0.08, 0.10] as const,
  /** Last updated date (shown on tool pages) */
  lastUpdated: '2026-03-01',
} as const;

export type ToolRates = typeof TOOL_RATES;
```

**Step 2: Verify no TypeScript errors**

Run: `npx tsc --noEmit lib/tool-rates-config.ts 2>&1 | head -5`
Expected: No errors (clean exit)

**Step 3: Commit**

```bash
git add lib/tool-rates-config.ts
git commit -m "feat: add centralized rate config for interactive tools"
```

---

## Task 2: Extended DSCR Calculation Functions

**Files:**
- Modify: `lib/geo-data/types.ts`
- Modify: `lib/geo-data/calculations.ts`

**Step 1: Add new types to `lib/geo-data/types.ts`**

Append after existing `HELOCResult` interface (after line 61):

```typescript
export interface DSCRQualificationResult extends DSCRResult {
  /** Interest-only monthly payment */
  ioMonthlyPayment: number;
  /** DSCR ratio if using interest-only */
  ioDSCR: number;
  /** Qualification tier: 'green' | 'blue' | 'yellow' | 'red' */
  tier: 'green' | 'blue' | 'yellow' | 'red';
  /** Human-readable tier message */
  tierMessage: string;
  /** Loan amount */
  loanAmount: number;
  /** Whether loan exceeds conforming limit */
  isJumbo: boolean;
}

export interface DSCRDownPaymentComparison {
  downPct: number;
  loanAmount: number;
  monthlyPayment: number;
  dscr: number;
  tier: 'green' | 'blue' | 'yellow' | 'red';
}

export interface DSCRFullReport {
  /** Amortizing results */
  amortizing: DSCRQualificationResult;
  /** Interest-only results */
  interestOnly: DSCRQualificationResult;
  /** Down payment comparison (20%, 25%, 30%) */
  downPaymentComparison: DSCRDownPaymentComparison[];
  /** Rent needed for 1.0 DSCR */
  rentFor1_0: number;
  /** Rent needed for 1.25 DSCR */
  rentFor1_25: number;
  /** Estimated rate range for tier [low, high] */
  rateRange: [number, number];
  /** 5-year equity projection */
  equityProjection5yr: number;
  /** Cash-on-cash return estimate */
  cashOnCashReturn: number;
}
```

**Step 2: Add calculation functions to `lib/geo-data/calculations.ts`**

Append after the existing `formatPercent` function (after line 133):

```typescript
import type {
  County,
  City,
  CashOutResult,
  DSCRResult,
  PropertyTaxResult,
  HELOCResult,
  DSCRQualificationResult,
  DSCRDownPaymentComparison,
  DSCRFullReport,
} from './types';

// --- DSCR Qualification Calculator ---

function getDSCRTier(dscr: number): 'green' | 'blue' | 'yellow' | 'red' {
  if (dscr >= 1.25) return 'green';
  if (dscr >= 1.0) return 'blue';
  if (dscr >= 0.75) return 'yellow';
  return 'red';
}

function getDSCRTierMessage(tier: 'green' | 'blue' | 'yellow' | 'red'): string {
  switch (tier) {
    case 'green':
      return 'Strong qualification \u2014 best-available pricing across our lender network';
    case 'blue':
      return 'Qualifies with most lenders we work with \u2014 standard DSCR programs available';
    case 'yellow':
      return 'Qualifies with select lenders \u2014 we work with several that accept sub-1.0 DSCR';
    case 'red':
      return 'Below most lender minimums \u2014 let\u2019s explore options to improve your ratio';
  }
}

/**
 * Calculate interest-only monthly payment.
 */
function calcInterestOnlyPayment(loanAmount: number, annualRate: number): number {
  return Math.round(loanAmount * (annualRate / 100 / 12));
}

/**
 * Full DSCR qualification calculation with tier assignment.
 */
export function calcDSCRQualification(
  monthlyRent: number,
  purchasePrice: number,
  downPaymentPct: number,
  interestRate: number,
  annualPropertyTax: number,
  annualInsurance: number,
  monthlyHOA: number,
  mgmtFeePct: number,
  isSTR: boolean,
  conformingLimit: number,
): DSCRQualificationResult {
  const effectiveRent = isSTR ? Math.round(monthlyRent * 0.75) : monthlyRent;
  const loanAmount = Math.round(purchasePrice * (1 - downPaymentPct / 100));
  const mgmtFee = Math.round(effectiveRent * mgmtFeePct);

  const base = calcDSCR(
    effectiveRent,
    loanAmount,
    interestRate,
    30,
    annualPropertyTax,
    annualInsurance,
    monthlyHOA + mgmtFee,
  );

  const ioPayment = calcInterestOnlyPayment(loanAmount, interestRate);
  const monthlyTax = annualPropertyTax / 12;
  const monthlyIns = annualInsurance / 12;
  const totalIOPayment = ioPayment + monthlyTax + monthlyIns + monthlyHOA + mgmtFee;
  const ioDSCR = totalIOPayment > 0
    ? Math.round((effectiveRent / totalIOPayment) * 100) / 100
    : 0;

  const tier = getDSCRTier(base.actualDSCR);

  return {
    ...base,
    ioMonthlyPayment: Math.round(totalIOPayment),
    ioDSCR,
    tier,
    tierMessage: getDSCRTierMessage(tier),
    loanAmount,
    isJumbo: loanAmount > conformingLimit,
  };
}

/**
 * Generate the full gated report data.
 */
export function calcDSCRFullReport(
  monthlyRent: number,
  purchasePrice: number,
  downPaymentPct: number,
  interestRate: number,
  avgPropertyTaxRate: number,
  annualInsurance: number,
  monthlyHOA: number,
  mgmtFeePct: number,
  isSTR: boolean,
  conformingLimit: number,
  appreciation5yr: number,
): DSCRFullReport {
  const annualTax = Math.round(purchasePrice * avgPropertyTaxRate);

  // Amortizing result
  const amortizing = calcDSCRQualification(
    monthlyRent, purchasePrice, downPaymentPct, interestRate,
    annualTax, annualInsurance, monthlyHOA, mgmtFeePct, isSTR, conformingLimit,
  );

  // Interest-only result (recompute with IO as primary)
  const effectiveRent = isSTR ? Math.round(monthlyRent * 0.75) : monthlyRent;
  const loanAmountIO = Math.round(purchasePrice * (1 - downPaymentPct / 100));
  const ioPayment = calcInterestOnlyPayment(loanAmountIO, interestRate);
  const mgmtFee = Math.round(effectiveRent * mgmtFeePct);
  const monthlyTaxIO = annualTax / 12;
  const monthlyInsIO = annualInsurance / 12;
  const totalIOPmt = ioPayment + monthlyTaxIO + monthlyInsIO + monthlyHOA + mgmtFee;
  const ioDSCRVal = totalIOPmt > 0 ? Math.round((effectiveRent / totalIOPmt) * 100) / 100 : 0;
  const ioTier = getDSCRTier(ioDSCRVal);

  const interestOnly: DSCRQualificationResult = {
    monthlyPayment: Math.round(totalIOPmt),
    requiredRentAt1_0: Math.round(totalIOPmt),
    requiredRentAt1_25: Math.round(totalIOPmt * 1.25),
    actualDSCR: ioDSCRVal,
    meetsMinimum: ioDSCRVal >= 1.0,
    ioMonthlyPayment: Math.round(totalIOPmt),
    ioDSCR: ioDSCRVal,
    tier: ioTier,
    tierMessage: getDSCRTierMessage(ioTier),
    loanAmount: loanAmountIO,
    isJumbo: loanAmountIO > conformingLimit,
  };

  // Down payment comparison
  const downPaymentComparison: DSCRDownPaymentComparison[] = [20, 25, 30].map((dp) => {
    const loan = Math.round(purchasePrice * (1 - dp / 100));
    const r = calcDSCR(effectiveRent, loan, interestRate, 30, annualTax, annualInsurance, monthlyHOA + mgmtFee);
    return {
      downPct: dp,
      loanAmount: loan,
      monthlyPayment: r.monthlyPayment,
      dscr: r.actualDSCR,
      tier: getDSCRTier(r.actualDSCR),
    };
  });

  // Rent sensitivity
  const rentFor1_0 = amortizing.requiredRentAt1_0;
  const rentFor1_25 = amortizing.requiredRentAt1_25;

  // Rate range by tier
  const rateRange: [number, number] = amortizing.tier === 'green'
    ? [interestRate - 0.5, interestRate + 0.5]
    : amortizing.tier === 'blue'
      ? [interestRate, interestRate + 1.0]
      : [interestRate + 0.5, interestRate + 2.0];

  // 5-year equity projection
  const downPaymentAmount = Math.round(purchasePrice * (downPaymentPct / 100));
  const futureValue = Math.round(purchasePrice * (1 + appreciation5yr));
  const equityProjection5yr = futureValue - amortizing.loanAmount;

  // Cash-on-cash return (annual cash flow / total cash invested)
  const annualCashFlow = (effectiveRent - amortizing.monthlyPayment) * 12;
  const totalCashInvested = downPaymentAmount + Math.round(purchasePrice * 0.03); // 3% closing costs
  const cashOnCashReturn = totalCashInvested > 0
    ? Math.round((annualCashFlow / totalCashInvested) * 10000) / 100
    : 0;

  return {
    amortizing,
    interestOnly,
    downPaymentComparison,
    rentFor1_0,
    rentFor1_25,
    rateRange,
    equityProjection5yr,
    cashOnCashReturn,
  };
}
```

**Note:** You also need to update the existing import statement at the top of `calculations.ts` (line 1-8) to include the new types. Replace the existing import with:

```typescript
import type {
  County,
  City,
  CashOutResult,
  DSCRResult,
  PropertyTaxResult,
  HELOCResult,
  DSCRQualificationResult,
  DSCRDownPaymentComparison,
  DSCRFullReport,
} from './types';
```

**Step 3: Verify types compile**

Run: `cd C:/Users/bigbi/Projects/brokersiteupdate && npx tsc --noEmit`
Expected: No type errors

**Step 4: Commit**

```bash
git add lib/geo-data/types.ts lib/geo-data/calculations.ts
git commit -m "feat: add DSCR qualification calculation with tier system and full report"
```

---

## Task 3: ToolLeadCaptureForm Shared Component

This component will be reused by all 4 new tools. It handles email gating, analytics events, and lead submission.

**Files:**
- Create: `components/tools/ToolLeadCaptureForm.tsx`

**Step 1: Create the component**

```typescript
// components/tools/ToolLeadCaptureForm.tsx
'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import InquiryTermsConsent from '@/components/ui/InquiryTermsConsent';
import { getTermsConsentPayload } from '@/lib/terms-consent';
import { getResponseErrorMessage } from '@/lib/api-client';

interface ToolLeadCaptureFormProps {
  /** Tool identifier for lead source tracking */
  source: string;
  /** Tool-specific structured data to store with the lead */
  toolData: Record<string, unknown>;
  /** Headline above the form */
  headline?: string;
  /** Subtext below the headline */
  subtext?: string;
  /** CTA button text */
  buttonText?: string;
  /** Callback when form is successfully submitted */
  onSuccess: () => void;
}

export default function ToolLeadCaptureForm({
  source,
  toolData,
  headline = 'Get Your Full Analysis',
  subtext = 'See the complete breakdown including rate estimates, optimization strategies, and next steps.',
  buttonText = 'Unlock Full Report',
  onSuccess,
}: ToolLeadCaptureFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeline, setTimeline] = useState('researching');
  const [termsConsent, setTermsConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const canSubmit = name.trim().length > 0 && email.trim().length > 0 && termsConsent && !submitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setSubmitting(true);
    setError('');

    try {
      const consentPayload = getTermsConsentPayload();
      const body = {
        full_name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim() || null,
        source,
        status: timeline === 'ready_now' ? 'hot' : 'new',
        notes: JSON.stringify({
          timeline,
          toolData,
          priority: timeline === 'ready_now' ? 'high' : 'normal',
        }),
        ...consentPayload,
      };

      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const msg = await getResponseErrorMessage(res, 'Something went wrong. Please try again.');
        setError(msg);
        setSubmitting(false);
        return;
      }

      // Fire analytics events
      if (typeof window !== 'undefined') {
        // Google Analytics
        if ('gtag' in window) {
          (window as any).gtag('event', 'tool_lead_capture', {
            tool_name: source,
            timeline,
            has_phone: !!phone.trim(),
          });
        }
        // Facebook Pixel
        if ('fbq' in window) {
          (window as any).fbq('track', 'Lead', {
            content_name: source,
            content_category: 'tool_lead',
          });
        }
      }

      onSuccess();
    } catch {
      setError('Network error. Please check your connection and try again.');
      setSubmitting(false);
    }
  }

  return (
    <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-slate-900">{headline}</CardTitle>
        <p className="text-sm text-slate-600">{subtext}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="lead-name">Name</Label>
            <Input
              id="lead-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="lead-email">Email</Label>
            <Input
              id="lead-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="lead-phone">
              Phone <span className="text-slate-400 font-normal">(optional)</span>
            </Label>
            <Input
              id="lead-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(949) 555-0123"
              className="mt-1"
            />
            <p className="text-xs text-slate-500 mt-1">
              Add your phone for a same-day callback with your personalized rate
            </p>
          </div>

          <div>
            <Label htmlFor="lead-timeline">Timeline</Label>
            <select
              id="lead-timeline"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="ready_now">Ready now</option>
              <option value="1_3_months">1-3 months</option>
              <option value="3_6_months">3-6 months</option>
              <option value="researching">Just researching</option>
            </select>
          </div>

          <InquiryTermsConsent
            checked={termsConsent}
            onCheckedChange={setTermsConsent}
          />

          {error && (
            <p className="text-sm text-red-600 bg-red-50 rounded-md p-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full py-3 px-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {submitting ? 'Submitting...' : buttonText}
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
```

**Step 2: Verify it compiles**

Run: `cd C:/Users/bigbi/Projects/brokersiteupdate && npx tsc --noEmit`
Expected: No type errors

**Step 3: Commit**

```bash
git add components/tools/ToolLeadCaptureForm.tsx
git commit -m "feat: add reusable ToolLeadCaptureForm for email-gated tool reports"
```

---

## Task 4: DSCR Qualification Calculator Component (Free Results)

**Files:**
- Create: `components/tools/DscrQualificationCalculator.tsx`

**Step 1: Create the calculator component**

```typescript
// components/tools/DscrQualificationCalculator.tsx
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
import ToolLeadCaptureForm from './ToolLeadCaptureForm';
import DscrQualificationReport from './DscrQualificationReport';

interface DscrQualificationCalculatorProps {
  countyName: string;
  stateCode: string;
  defaultHomeValue: number;
  conformingLoanLimit: number;
  medianRent: number;
  avgPropertyTaxRate: number;
  avgAppreciation5yr: number;
  /** Optional city name for city-level pages */
  cityName?: string;
  /** DSCR snapshot paragraph for SEO */
  dscrSnapshot?: string;
}

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
  // Inputs
  const [purchasePrice, setPurchasePrice] = useState(defaultHomeValue.toString());
  const [downPaymentPct, setDownPaymentPct] = useState('25');
  const [interestRate, setInterestRate] = useState(TOOL_RATES.defaultDscrRate.toString());
  const [loanType, setLoanType] = useState<'amortizing' | 'interest-only'>('amortizing');
  const [monthlyRent, setMonthlyRent] = useState(medianRent.toString());
  const [isSTR, setIsSTR] = useState(false);
  const [monthlyHOA, setMonthlyHOA] = useState(TOOL_RATES.defaultHOA.toString());
  const [annualInsurance, setAnnualInsurance] = useState(
    Math.round(defaultHomeValue * TOOL_RATES.defaultInsuranceRate).toString()
  );
  const [mgmtFeePct, setMgmtFeePct] = useState('0');

  // Email gate state
  const [reportUnlocked, setReportUnlocked] = useState(false);

  // Parse inputs
  const priceNum = parseInt(purchasePrice.replace(/,/g, ''), 10) || 0;
  const downPctNum = parseFloat(downPaymentPct) || 0;
  const rateNum = parseFloat(interestRate) || 0;
  const rentNum = parseInt(monthlyRent.replace(/,/g, ''), 10) || 0;
  const hoaNum = parseInt(monthlyHOA.replace(/,/g, ''), 10) || 0;
  const insuranceNum = parseInt(annualInsurance.replace(/,/g, ''), 10) || 0;
  const mgmtPctNum = parseFloat(mgmtFeePct) || 0;
  const annualTax = Math.round(priceNum * avgPropertyTaxRate);

  // Input validation
  const priceWarning = priceNum > 0 && priceNum < 100000
    ? `That purchase price seems low for ${cityName || countyName} \u2014 the median is ${formatCurrency(defaultHomeValue)}. Double-check?`
    : priceNum > defaultHomeValue * 3
      ? `That's well above the ${cityName || countyName} median of ${formatCurrency(defaultHomeValue)}. Make sure this is correct.`
      : '';
  const rentWarning = rentNum <= 0 ? 'Enter a monthly rent amount to calculate your DSCR.' : '';
  const rateWarning = rateNum > 15 ? 'That interest rate seems high. Most DSCR loans are 6.5-10%.' : '';

  // Calculate
  const result = useMemo(
    () => {
      if (priceNum <= 0 || rentNum <= 0 || rateNum <= 0) return null;
      return calcDSCRQualification(
        rentNum, priceNum, downPctNum, rateNum,
        annualTax, insuranceNum, hoaNum, mgmtPctNum, isSTR, conformingLimit,
      );
    },
    [rentNum, priceNum, downPctNum, rateNum, annualTax, insuranceNum, hoaNum, mgmtPctNum, isSTR, conformingLimit],
  );

  const fullReport = useMemo(
    () => {
      if (!reportUnlocked || priceNum <= 0 || rentNum <= 0 || rateNum <= 0) return null;
      return calcDSCRFullReport(
        rentNum, priceNum, downPctNum, rateNum,
        avgPropertyTaxRate, insuranceNum, hoaNum, mgmtPctNum, isSTR,
        conformingLimit, avgAppreciation5yr,
      );
    },
    [reportUnlocked, rentNum, priceNum, downPctNum, rateNum, avgPropertyTaxRate, insuranceNum, hoaNum, mgmtPctNum, isSTR, conformingLimit, avgAppreciation5yr],
  );

  const locationLabel = cityName || countyName;
  const stateFull = stateCode === 'ca' ? 'California' : 'Washington';

  // Color classes
  const tierColors = {
    green: { text: 'text-emerald-700', bg: 'border-green-200 bg-green-50', badge: 'bg-green-100 text-green-700' },
    blue: { text: 'text-blue-700', bg: 'border-blue-200 bg-blue-50', badge: 'bg-blue-100 text-blue-700' },
    yellow: { text: 'text-yellow-600', bg: 'border-yellow-200 bg-yellow-50', badge: 'bg-yellow-100 text-yellow-700' },
    red: { text: 'text-red-600', bg: 'border-red-200 bg-red-50', badge: 'bg-red-100 text-red-700' },
  };

  const colors = result ? tierColors[result.tier] : tierColors.red;

  return (
    <div>
      {/* DSCR Snapshot (SEO content) */}
      {dscrSnapshot && (
        <div className="mb-8 p-4 rounded-lg bg-slate-100 border border-slate-200">
          <p className="text-sm text-slate-700 leading-relaxed">{dscrSnapshot}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Property & Loan Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Purchase Price */}
              <div>
                <Label htmlFor="dscr-price">Purchase Price</Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <Input
                    id="dscr-price"
                    type="text"
                    inputMode="numeric"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(e.target.value.replace(/[^0-9]/g, ''))}
                    className="pl-7"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {locationLabel} median: {formatCurrency(defaultHomeValue)}
                </p>
                {priceWarning && <p className="text-xs text-amber-600 mt-1">{priceWarning}</p>}
              </div>

              {/* Down Payment */}
              <div>
                <Label>Down Payment</Label>
                <div className="flex gap-2 mt-1">
                  {[20, 25, 30].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setDownPaymentPct(pct.toString())}
                      className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg border transition-colors ${
                        downPaymentPct === pct.toString()
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      inputMode="decimal"
                      value={![20, 25, 30].includes(Number(downPaymentPct)) ? downPaymentPct : ''}
                      onChange={(e) => setDownPaymentPct(e.target.value.replace(/[^0-9.]/g, ''))}
                      placeholder="Custom"
                      className="pr-7 text-sm"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">%</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Down: {formatCurrency(Math.round(priceNum * (downPctNum / 100)))} | Loan: {formatCurrency(Math.round(priceNum * (1 - downPctNum / 100)))}
                </p>
              </div>

              {/* Interest Rate */}
              <div>
                <Label htmlFor="dscr-rate">Interest Rate (%)</Label>
                <div className="relative mt-1">
                  <Input
                    id="dscr-rate"
                    type="text"
                    inputMode="decimal"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value.replace(/[^0-9.]/g, ''))}
                    className="pr-7"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
                </div>
                {rateWarning && <p className="text-xs text-amber-600 mt-1">{rateWarning}</p>}
              </div>

              {/* Loan Type Toggle */}
              <div>
                <Label>Loan Type</Label>
                <div className="flex gap-2 mt-1">
                  {(['amortizing', 'interest-only'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setLoanType(type)}
                      className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg border transition-colors ${
                        loanType === type
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      {type === 'amortizing' ? '30-Year Amortizing' : '30-Year Interest-Only'}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Rental Income & Expenses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Monthly Rent */}
              <div>
                <Label htmlFor="dscr-rent">Monthly Rental Income</Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <Input
                    id="dscr-rent"
                    type="text"
                    inputMode="numeric"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(e.target.value.replace(/[^0-9]/g, ''))}
                    className="pl-7"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {locationLabel} median rent: {formatCurrency(medianRent)}/mo
                </p>
                {rentWarning && <p className="text-xs text-amber-600 mt-1">{rentWarning}</p>}
              </div>

              {/* STR Toggle */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsSTR(!isSTR)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isSTR ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                  role="switch"
                  aria-checked={isSTR}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isSTR ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <div>
                  <Label className="cursor-pointer" onClick={() => setIsSTR(!isSTR)}>
                    Short-Term Rental (Airbnb/VRBO)
                  </Label>
                  {isSTR && (
                    <p className="text-xs text-slate-500">
                      Lenders use 75% of projected STR income. Effective rent: {formatCurrency(Math.round(rentNum * 0.75))}/mo
                    </p>
                  )}
                </div>
              </div>

              {/* Property Tax (auto-calculated) */}
              <div>
                <Label>Annual Property Tax</Label>
                <p className="text-sm font-medium text-slate-900 mt-1">
                  {formatCurrency(annualTax)} ({(avgPropertyTaxRate * 100).toFixed(2)}% rate)
                </p>
              </div>

              {/* Insurance & HOA */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dscr-insurance">Annual Insurance</Label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                    <Input
                      id="dscr-insurance"
                      type="text"
                      inputMode="numeric"
                      value={annualInsurance}
                      onChange={(e) => setAnnualInsurance(e.target.value.replace(/[^0-9]/g, ''))}
                      className="pl-7"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="dscr-hoa">Monthly HOA</Label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                    <Input
                      id="dscr-hoa"
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
                  {TOOL_RATES.mgmtFeeOptions.map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setMgmtFeePct(pct.toString())}
                      className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg border transition-colors ${
                        mgmtFeePct === pct.toString()
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      {pct === 0 ? 'None' : `${pct * 100}%`}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Panel */}
        <div className="space-y-6">
          {/* Primary DSCR Result */}
          {result ? (
            <>
              <Card className={colors.bg}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-1">Your DSCR Ratio</h3>
                  <div className="text-center my-4">
                    <p className={`text-6xl font-bold ${colors.text}`}>
                      {loanType === 'amortizing' ? result.actualDSCR.toFixed(2) : result.ioDSCR.toFixed(2)}
                    </p>
                    <span className={`inline-block mt-2 text-xs px-3 py-1 rounded-full font-medium ${colors.badge}`}>
                      {result.tier === 'green' ? 'Strong Qualification' :
                       result.tier === 'blue' ? 'Standard Qualification' :
                       result.tier === 'yellow' ? 'Select Lenders' : 'Below Minimums'}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 text-center leading-relaxed">
                    {loanType === 'amortizing'
                      ? result.tierMessage
                      : getDSCRTierMessageForIO(result.ioDSCR)}
                  </p>
                </CardContent>
              </Card>

              {/* IO Teaser (only show when amortizing is selected and IO would improve things) */}
              {loanType === 'amortizing' && result.ioDSCR > result.actualDSCR && (
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-4">
                    <p className="text-sm text-blue-800">
                      <span className="font-semibold">Interest-only option:</span> Switching to interest-only would improve your DSCR to{' '}
                      <span className="font-bold">{result.ioDSCR.toFixed(2)}</span>
                      {result.ioDSCR >= 1.0 && result.actualDSCR < 1.0 && (
                        <span> \u2014 pushing you into qualification range</span>
                      )}
                      {result.ioDSCR >= 1.25 && result.actualDSCR < 1.25 && result.actualDSCR >= 1.0 && (
                        <span> \u2014 unlocking best-available pricing</span>
                      )}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Email Gate or Full Report */}
              {!reportUnlocked ? (
                <ToolLeadCaptureForm
                  source="dscr-qualification-calculator"
                  toolData={{
                    purchasePrice: priceNum,
                    downPaymentPct: downPctNum,
                    interestRate: rateNum,
                    monthlyRent: rentNum,
                    dscrRatio: result.actualDSCR,
                    ioDscrRatio: result.ioDSCR,
                    tier: result.tier,
                    isSTR,
                    isJumbo: result.isJumbo,
                    county: countyName,
                    city: cityName || null,
                    state: stateCode,
                  }}
                  headline="Unlock Your Full DSCR Analysis"
                  subtext="See the down payment comparison, rent sensitivity analysis, estimated rate range, and 5-year equity projection."
                  buttonText="Get Full Report"
                  onSuccess={() => setReportUnlocked(true)}
                />
              ) : fullReport ? (
                <DscrQualificationReport
                  report={fullReport}
                  locationLabel={locationLabel}
                  stateName={stateFull}
                  loanType={loanType}
                />
              ) : null}
            </>
          ) : (
            <Card className="border-slate-200 bg-slate-50">
              <CardContent className="p-6 text-center">
                <p className="text-slate-500">Enter your property details to calculate your DSCR ratio.</p>
              </CardContent>
            </Card>
          )}

          {/* Disclaimer */}
          <p className="text-xs text-slate-400 leading-relaxed">
            Calculations are estimates for educational purposes only. Actual DSCR requirements vary by
            lender, property type, and loan program. Rates as of {TOOL_RATES.lastUpdated}.
            Contact Mo Abdel at (949) 822-9662 for a personalized investment property
            analysis. NMLS #1426884 | Lumin Lending NMLS #2716106.
          </p>
        </div>
      </div>
    </div>
  );
}

function getDSCRTierMessageForIO(dscr: number): string {
  const tier = dscr >= 1.25 ? 'green' : dscr >= 1.0 ? 'blue' : dscr >= 0.75 ? 'yellow' : 'red';
  const messages = {
    green: 'With interest-only \u2014 strong qualification, best-available pricing across our lender network',
    blue: 'With interest-only \u2014 qualifies with most lenders we work with',
    yellow: 'With interest-only \u2014 qualifies with select lenders that accept sub-1.0 DSCR',
    red: 'Even with interest-only, below most lender minimums \u2014 consider increasing down payment or rent',
  };
  return messages[tier];
}
```

**Step 2: Verify it compiles**

Run: `cd C:/Users/bigbi/Projects/brokersiteupdate && npx tsc --noEmit`
Expected: No type errors

**Step 3: Commit**

```bash
git add components/tools/DscrQualificationCalculator.tsx
git commit -m "feat: add DSCR qualification calculator component with free results and email gate"
```

---

## Task 5: DSCR Qualification Report Component (Gated)

**Files:**
- Create: `components/tools/DscrQualificationReport.tsx`

**Step 1: Create the report component**

```typescript
// components/tools/DscrQualificationReport.tsx
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { formatCurrency } from '@/lib/geo-data/calculations';
import type { DSCRFullReport } from '@/lib/geo-data/types';

interface DscrQualificationReportProps {
  report: DSCRFullReport;
  locationLabel: string;
  stateName: string;
  loanType: 'amortizing' | 'interest-only';
}

const tierColors: Record<string, string> = {
  green: 'text-emerald-700',
  blue: 'text-blue-700',
  yellow: 'text-yellow-600',
  red: 'text-red-600',
};

const tierBadges: Record<string, string> = {
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  red: 'bg-red-100 text-red-700',
};

const tierLabels: Record<string, string> = {
  green: 'Best Available',
  blue: 'Standard',
  yellow: 'Select Lenders',
  red: 'Below Minimum',
};

export default function DscrQualificationReport({
  report,
  locationLabel,
  stateName,
  loanType,
}: DscrQualificationReportProps) {
  return (
    <div className="space-y-6">
      {/* Success Banner */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-4 text-center">
          <p className="text-sm font-semibold text-green-800">
            Your full DSCR analysis is ready. Here&apos;s the complete breakdown for {locationLabel}, {stateName}.
          </p>
        </CardContent>
      </Card>

      {/* Down Payment Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Down Payment Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 text-left font-medium text-slate-600">Down Payment</th>
                  <th className="py-2 text-right font-medium text-slate-600">Loan Amount</th>
                  <th className="py-2 text-right font-medium text-slate-600">Monthly PITIA</th>
                  <th className="py-2 text-right font-medium text-slate-600">DSCR</th>
                  <th className="py-2 text-right font-medium text-slate-600">Tier</th>
                </tr>
              </thead>
              <tbody>
                {report.downPaymentComparison.map((row) => (
                  <tr key={row.downPct} className="border-b border-slate-100">
                    <td className="py-3 font-medium">{row.downPct}%</td>
                    <td className="py-3 text-right">{formatCurrency(row.loanAmount)}</td>
                    <td className="py-3 text-right">{formatCurrency(row.monthlyPayment)}</td>
                    <td className={`py-3 text-right font-bold ${tierColors[row.tier]}`}>
                      {row.dscr.toFixed(2)}
                    </td>
                    <td className="py-3 text-right">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tierBadges[row.tier]}`}>
                        {tierLabels[row.tier]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Rent Sensitivity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Rent Sensitivity Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
              <p className="text-sm text-slate-600 mb-1">Rent for 1.0 DSCR (break-even)</p>
              <p className="text-2xl font-bold text-slate-900">
                {formatCurrency(report.rentFor1_0)}<span className="text-sm font-normal text-slate-500">/mo</span>
              </p>
            </div>
            <div className="p-4 rounded-lg border border-green-200 bg-green-50">
              <p className="text-sm text-slate-600 mb-1">Rent for 1.25 DSCR (best pricing)</p>
              <p className="text-2xl font-bold text-slate-900">
                {formatCurrency(report.rentFor1_25)}<span className="text-sm font-normal text-slate-500">/mo</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Amortizing vs Interest-Only Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Amortizing vs. Interest-Only</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 text-left font-medium text-slate-600"></th>
                  <th className="py-2 text-right font-medium text-slate-600">30-Yr Amortizing</th>
                  <th className="py-2 text-right font-medium text-slate-600">30-Yr Interest-Only</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-medium">Monthly Payment (PITIA)</td>
                  <td className="py-3 text-right">{formatCurrency(report.amortizing.monthlyPayment)}</td>
                  <td className="py-3 text-right">{formatCurrency(report.interestOnly.monthlyPayment)}</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-medium">DSCR Ratio</td>
                  <td className={`py-3 text-right font-bold ${tierColors[report.amortizing.tier]}`}>
                    {report.amortizing.actualDSCR.toFixed(2)}
                  </td>
                  <td className={`py-3 text-right font-bold ${tierColors[report.interestOnly.tier]}`}>
                    {report.interestOnly.ioDSCR.toFixed(2)}
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-medium">Qualification Tier</td>
                  <td className="py-3 text-right">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tierBadges[report.amortizing.tier]}`}>
                      {tierLabels[report.amortizing.tier]}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tierBadges[report.interestOnly.tier]}`}>
                      {tierLabels[report.interestOnly.tier]}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Rate Range & Loan Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Estimated Rate Range & Loan Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50">
              <p className="text-sm text-slate-600 mb-1">Estimated Rate Range</p>
              <p className="text-xl font-bold text-slate-900">
                {report.rateRange[0].toFixed(2)}% &ndash; {report.rateRange[1].toFixed(2)}%
              </p>
              <p className="text-xs text-slate-500 mt-1">Based on your qualification tier and current market</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50">
              <p className="text-sm text-slate-600 mb-1">Loan Type</p>
              <p className="text-xl font-bold text-slate-900">
                {report.amortizing.isJumbo ? 'Jumbo' : 'Conforming'}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Loan: {formatCurrency(report.amortizing.loanAmount)} |
                Limit: {formatCurrency(report.amortizing.isJumbo ? report.amortizing.loanAmount : report.amortizing.loanAmount)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 5-Year Projection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">5-Year Investment Outlook</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50">
              <p className="text-sm text-slate-600 mb-1">Projected Equity (5 years)</p>
              <p className="text-xl font-bold text-emerald-700">
                {formatCurrency(report.equityProjection5yr)}
              </p>
              <p className="text-xs text-slate-500 mt-1">Based on {locationLabel} historical appreciation</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50">
              <p className="text-sm text-slate-600 mb-1">Est. Cash-on-Cash Return</p>
              <p className={`text-xl font-bold ${report.cashOnCashReturn >= 0 ? 'text-emerald-700' : 'text-red-600'}`}>
                {report.cashOnCashReturn.toFixed(1)}%
              </p>
              <p className="text-xs text-slate-500 mt-1">Annual cash flow / total cash invested</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="border-slate-900 bg-slate-900 text-white">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-white mb-3">Next Steps: Get Your Exact Rate</h3>
          <ol className="space-y-2 text-sm text-slate-200 mb-4">
            <li className="flex gap-2">
              <span className="font-bold text-white">1.</span>
              Have your property address or target market area ready
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-white">2.</span>
              Know your estimated rental income (lease or AirDNA projection)
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-white">3.</span>
              Have your credit score range and available down payment
            </li>
          </ol>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:9498229662"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors text-sm"
            >
              Call (949) 822-9662
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Schedule Consultation
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```

**Step 2: Verify it compiles**

Run: `cd C:/Users/bigbi/Projects/brokersiteupdate && npx tsc --noEmit`
Expected: No type errors

**Step 3: Commit**

```bash
git add components/tools/DscrQualificationReport.tsx
git commit -m "feat: add email-gated DSCR qualification report component"
```

---

## Task 6: DSCR Snapshot Generator Utility

Generates the unique city/county-specific SEO paragraph dynamically.

**Files:**
- Create: `lib/dscr-snapshot.ts`

**Step 1: Create the snapshot generator**

```typescript
// lib/dscr-snapshot.ts
import type { County, City } from '@/lib/geo-data/types';
import { calcDSCR, formatCurrency } from '@/lib/geo-data/calculations';

/**
 * Generate a unique DSCR snapshot paragraph for a county or city page.
 * Uses actual geo-data to produce specific, indexable content.
 */
export function generateDscrSnapshot(
  location: County | City,
  countyData: County,
): string {
  const name = location.name;
  const medianPrice = location.medianHomePrice;
  const medianRent = location.medianRent;
  const taxRate = location.avgPropertyTaxRate;

  // Calculate typical DSCR at 25% down, 7.5% rate
  const loanAmount = Math.round(medianPrice * 0.75);
  const annualTax = Math.round(medianPrice * taxRate);
  const annualInsurance = Math.round(medianPrice * 0.0035);
  const result = calcDSCR(medianRent, loanAmount, 7.5, 30, annualTax, annualInsurance, 200);

  const dscrStr = result.actualDSCR.toFixed(2);
  const rentFor125 = formatCurrency(result.requiredRentAt1_25);

  // Interest-only DSCR
  const ioPayment = Math.round(loanAmount * (0.075 / 12));
  const monthlyTax = annualTax / 12;
  const monthlyIns = annualInsurance / 12;
  const totalIO = ioPayment + monthlyTax + monthlyIns + 200;
  const ioDSCR = totalIO > 0 ? (medianRent / totalIO).toFixed(2) : '0.00';

  let advice: string;
  if (result.actualDSCR >= 1.25) {
    advice = `${name} investment properties typically qualify for best-available DSCR pricing at standard 25% down payment. Investors here benefit from strong rental demand relative to purchase prices.`;
  } else if (result.actualDSCR >= 1.0) {
    advice = `Most ${name} investors can qualify with standard DSCR programs at 25% down. For best-available pricing, consider rents above ${rentFor125}/mo or increasing your down payment to 30%.`;
  } else {
    advice = `${name}'s median rent of ${formatCurrency(medianRent)}/mo and median home price of ${formatCurrency(medianPrice)} creates a typical DSCR of ${dscrStr} at 25% down \u2014 meaning most ${name} investors will want to explore interest-only programs (improving DSCR to ${ioDSCR}) or higher down payments to reach the 1.0+ qualification threshold.`;
  }

  return advice;
}
```

**Step 2: Verify it compiles**

Run: `cd C:/Users/bigbi/Projects/brokersiteupdate && npx tsc --noEmit`
Expected: No type errors

**Step 3: Commit**

```bash
git add lib/dscr-snapshot.ts
git commit -m "feat: add DSCR snapshot generator for unique city/county SEO content"
```

---

## Task 7: Route Pages (Hub, State, County, City)

**Files:**
- Create: `app/tools/dscr-qualification-calculator/page.tsx`
- Create: `app/tools/dscr-qualification-calculator/[state]/page.tsx`
- Create: `app/tools/dscr-qualification-calculator/[state]/[county]/page.tsx`
- Create: `app/tools/dscr-qualification-calculator/[state]/[county]/[city]/page.tsx`

**Step 1: Create hub page**

```typescript
// app/tools/dscr-qualification-calculator/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { getCountiesByState, STATES } from '@/lib/geo-data';
import { formatCurrency } from '@/lib/geo-data/calculations';
import { Card, CardContent } from '@/components/ui/Card';
import PageHero from '@/components/marketing/PageHero';
import { Calculator } from 'lucide-react';

export const metadata: Metadata = genMeta({
  title: 'DSCR Loan Calculator — Check If You Qualify [2026 Rates for CA & WA]',
  description:
    'Free DSCR qualification calculator for California and Washington investment properties. Check your DSCR ratio, see which lender tier you qualify for, and get estimated rate ranges across 200+ wholesale lenders.',
  path: '/tools/dscr-qualification-calculator',
  type: 'website',
});

export default function DscrQualificationHub() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-6">
        <PageHero
          badgeText="DSCR Qualification Calculator"
          badgeIcon={Calculator}
          title="Check If Your Investment Property Qualifies for a DSCR Loan"
          subtitle="Calculate your DSCR ratio, see your qualification tier, and get estimated rate ranges. Select your county to get started with local market data."
          primaryAction={{ href: '/contact', label: 'Get a Free Quote' }}
          secondaryAction={{ href: '/tools', label: 'All Tools' }}
        />
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {STATES.map((st) => {
          const counties = getCountiesByState(st.code);
          return (
            <section key={st.code} className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {st.name} ({st.countyCount} Counties)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {counties
                  .sort((a, b) => b.medianRent - a.medianRent)
                  .map((county) => (
                    <Link
                      key={county.slug}
                      href={`/tools/dscr-qualification-calculator/${st.code}/${county.slug}`}
                      className="group"
                    >
                      <Card className="hover:shadow-md hover:border-blue-300 transition-all">
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {county.name}
                          </h3>
                          <div className="flex justify-between text-xs text-slate-500 mt-1">
                            <span>Rent: {formatCurrency(county.medianRent)}/mo</span>
                            <span>Home: {formatCurrency(county.medianHomePrice)}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
```

**Step 2: Create state page**

```typescript
// app/tools/dscr-qualification-calculator/[state]/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { getCountiesByState, getStateName, STATES } from '@/lib/geo-data';
import { formatCurrency } from '@/lib/geo-data/calculations';
import { Card, CardContent } from '@/components/ui/Card';
import PageHero from '@/components/marketing/PageHero';
import { Calculator } from 'lucide-react';

interface Props {
  params: Promise<{ state: string }>;
}

export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.code }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const stateName = getStateName(state);
  if (!stateName) return {};
  return genMeta({
    title: `DSCR Loan Calculator — ${stateName} Counties [2026 Investment Property Qualification]`,
    description: `DSCR qualification calculator for ${stateName} investment properties. Select your county to see local rental data, calculate your DSCR ratio, and check qualification tier.`,
    path: `/tools/dscr-qualification-calculator/${state}`,
    type: 'website',
  });
}

export default async function StateDscrPage({ params }: Props) {
  const { state } = await params;
  const stateName = getStateName(state);
  const counties = getCountiesByState(state);
  if (!stateName || counties.length === 0) notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-6">
        <PageHero
          badgeText={`${stateName} DSCR Calculator`}
          badgeIcon={Calculator}
          title={`${stateName} DSCR Qualification Calculator`}
          subtitle={`Select a county to calculate your investment property DSCR ratio with ${stateName} market data. ${counties.length} counties available.`}
          primaryAction={{ href: '/contact', label: 'Get a Free Quote' }}
          secondaryAction={{ href: '/tools/dscr-qualification-calculator', label: 'All States' }}
        />
      </div>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {counties
            .sort((a, b) => b.medianRent - a.medianRent)
            .map((county) => (
              <Link
                key={county.slug}
                href={`/tools/dscr-qualification-calculator/${state}/${county.slug}`}
                className="group"
              >
                <Card className="hover:shadow-md hover:border-blue-300 transition-all">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {county.name}
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 mt-2">
                      <span>Median Rent: {formatCurrency(county.medianRent)}/mo</span>
                      <span>Median Home: {formatCurrency(county.medianHomePrice)}</span>
                      <span>Tax Rate: {(county.avgPropertyTaxRate * 100).toFixed(2)}%</span>
                      <span>Loan Limit: {formatCurrency(county.conformingLoanLimit)}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </main>
    </div>
  );
}
```

**Step 3: Create county page**

```typescript
// app/tools/dscr-qualification-calculator/[state]/[county]/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/lib/metadata';
import {
  getCounty,
  getStateName,
  getCitiesByCounty,
  getAllStateCountyParams,
} from '@/lib/geo-data';
import { formatCurrency } from '@/lib/geo-data/calculations';
import ToolPageLayout, { buildToolSchemas } from '@/components/tools/ToolPageLayout';
import DscrQualificationCalculator from '@/components/tools/DscrQualificationCalculator';
import { generateDscrSnapshot } from '@/lib/dscr-snapshot';
import { Card, CardContent } from '@/components/ui/Card';

interface Props {
  params: Promise<{ state: string; county: string }>;
}

export async function generateStaticParams() {
  return getAllStateCountyParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, county: countySlug } = await params;
  const county = getCounty(state, countySlug);
  const stateName = getStateName(state);
  if (!county) return {};
  return genMeta({
    title: `DSCR Loan Calculator \u2014 ${county.name}, ${stateName} [Check If You Qualify 2026]`,
    description: `Calculate your DSCR ratio for ${county.name}, ${stateName} investment properties. Median rent: ${formatCurrency(county.medianRent)}/mo. Median home: ${formatCurrency(county.medianHomePrice)}. See your qualification tier and estimated rate range.`,
    path: `/tools/dscr-qualification-calculator/${state}/${countySlug}`,
    type: 'website',
  });
}

export default async function CountyDscrQualificationPage({ params }: Props) {
  const { state, county: countySlug } = await params;
  const county = getCounty(state, countySlug);
  const stateName = getStateName(state);
  if (!county || !stateName) notFound();

  const cities = getCitiesByCounty(state, countySlug);
  const dscrSnapshot = generateDscrSnapshot(county, county);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'DSCR Qualification Calculator', href: '/tools/dscr-qualification-calculator' },
    { label: stateName, href: `/tools/dscr-qualification-calculator/${state}` },
    { label: county.name },
  ];

  const faqs = [
    {
      question: `What DSCR do I need to qualify for an investment property loan in ${county.name}?`,
      answer: `Most DSCR lenders require a minimum ratio of 1.0 to 1.25. At 1.25+ DSCR, you qualify for the best-available pricing across our wholesale lender network. Between 1.0 and 1.24, standard programs are available. Some select lenders accept ratios as low as 0.75 with a rate adjustment. In ${county.name}, with a median rent of ${formatCurrency(county.medianRent)}/mo and median home price of ${formatCurrency(county.medianHomePrice)}, your DSCR depends on your specific deal structure.`,
    },
    {
      question: `Can I qualify with a DSCR below 1.0 in ${county.name}, ${stateName}?`,
      answer: `Yes. Several lenders in our network accept DSCR ratios as low as 0.75 with a rate adjustment. This is common in high-value markets like ${county.name} where median home prices (${formatCurrency(county.medianHomePrice)}) may outpace rental income. Interest-only loan options can also improve your DSCR by reducing the monthly payment.`,
    },
    {
      question: `How does interest-only affect my DSCR for a ${county.name} investment property?`,
      answer: `Interest-only loans reduce your monthly payment by eliminating principal amortization, which directly improves your DSCR ratio. For a ${county.name} property at the median price with 25% down, switching to interest-only can improve your DSCR by 0.15-0.30 points. Use the calculator above to see the exact improvement for your scenario.`,
    },
    {
      question: `What is the ${county.name} conforming loan limit for 2026?`,
      answer: `The 2026 conforming loan limit for ${county.name} is ${formatCurrency(county.conformingLoanLimit)}. DSCR loans above this amount are classified as jumbo and may have different rate and down payment requirements. Most DSCR programs are available for both conforming and jumbo amounts.`,
    },
    {
      question: `Do DSCR loans require income verification in ${county.name}?`,
      answer: `No. DSCR loans qualify based on the property's rental income relative to the mortgage payment, not the borrower's personal income. This makes them ideal for investors, self-employed borrowers, and anyone who wants to qualify based on property cash flow rather than tax returns. The property must be an investment property (not owner-occupied).`,
    },
  ];

  const internalLinks = [
    { label: `${stateName} Counties`, href: `/tools/dscr-qualification-calculator/${state}` },
    { label: 'All Mortgage Tools', href: '/tools' },
    { label: 'DSCR Rent Analyzer', href: `/tools/dscr-rent-analyzer/${state}/${countySlug}` },
    { label: 'DSCR Investment Loans', href: '/loan-programs/dscr-investment-loans' },
    { label: 'Cash-Out Refinance', href: '/loan-programs/cash-out-refinance' },
    { label: 'Contact Mo Abdel', href: '/contact' },
    ...cities.slice(0, 6).map((c) => ({
      label: `${c.name} DSCR Calculator`,
      href: `/tools/dscr-qualification-calculator/${state}/${countySlug}/${c.slug}`,
    })),
  ];

  const schemas = buildToolSchemas({
    toolName: `DSCR Qualification Calculator \u2014 ${county.name}, ${stateName}`,
    description: `Calculate your DSCR ratio and check investment property loan qualification in ${county.name}, ${stateName}. See your lender tier and estimated rate range.`,
    url: `/tools/dscr-qualification-calculator/${state}/${countySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${county.name} DSCR Qualification Calculator`}
      subtitle={`Check if your investment property qualifies for a DSCR loan in ${county.name}. Median rent: ${formatCurrency(county.medianRent)}/mo | Median home: ${formatCurrency(county.medianHomePrice)}.`}
      badgeText={`${county.name}, ${state.toUpperCase()}`}
      badgeColor="bg-slate-100 text-blue-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <DscrQualificationCalculator
        countyName={county.name}
        stateCode={state}
        defaultHomeValue={county.medianHomePrice}
        conformingLoanLimit={county.conformingLoanLimit}
        medianRent={county.medianRent}
        avgPropertyTaxRate={county.avgPropertyTaxRate}
        avgAppreciation5yr={county.avgAppreciation5yr}
        dscrSnapshot={dscrSnapshot}
      />

      {cities.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            City DSCR Calculators in {county.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/tools/dscr-qualification-calculator/${state}/${countySlug}/${city.slug}`}
                className="group"
              >
                <Card className="hover:shadow-md hover:border-blue-300 transition-all">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-sm">
                      {city.name}
                    </h3>
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>Rent: {formatCurrency(city.medianRent)}/mo</span>
                      <span>Home: {formatCurrency(city.medianHomePrice)}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </ToolPageLayout>
  );
}
```

**Step 4: Create city page**

```typescript
// app/tools/dscr-qualification-calculator/[state]/[county]/[city]/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadata as genMeta } from '@/lib/metadata';
import {
  getCounty,
  getCity,
  getStateName,
  getAllStateCountyCityParams,
} from '@/lib/geo-data';
import { formatCurrency } from '@/lib/geo-data/calculations';
import ToolPageLayout, { buildToolSchemas } from '@/components/tools/ToolPageLayout';
import DscrQualificationCalculator from '@/components/tools/DscrQualificationCalculator';
import { generateDscrSnapshot } from '@/lib/dscr-snapshot';

interface Props {
  params: Promise<{ state: string; county: string; city: string }>;
}

export async function generateStaticParams() {
  return getAllStateCountyCityParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, county: countySlug, city: citySlug } = await params;
  const city = getCity(state, countySlug, citySlug);
  const stateName = getStateName(state);
  if (!city) return {};
  return genMeta({
    title: `DSCR Loan Calculator \u2014 ${city.name}, ${stateName} [Check If You Qualify 2026]`,
    description: `Calculate your DSCR ratio for ${city.name}, ${stateName} investment properties. Median rent: ${formatCurrency(city.medianRent)}/mo. Median home: ${formatCurrency(city.medianHomePrice)}. See your qualification tier and estimated rate range.`,
    path: `/tools/dscr-qualification-calculator/${state}/${countySlug}/${citySlug}`,
    type: 'website',
  });
}

export default async function CityDscrQualificationPage({ params }: Props) {
  const { state, county: countySlug, city: citySlug } = await params;
  const county = getCounty(state, countySlug);
  const city = getCity(state, countySlug, citySlug);
  const stateName = getStateName(state);
  if (!county || !city || !stateName) notFound();

  const dscrSnapshot = generateDscrSnapshot(city, county);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'DSCR Qualification Calculator', href: '/tools/dscr-qualification-calculator' },
    { label: stateName, href: `/tools/dscr-qualification-calculator/${state}` },
    { label: county.name, href: `/tools/dscr-qualification-calculator/${state}/${countySlug}` },
    { label: city.name },
  ];

  const faqs = [
    {
      question: `What DSCR do I need for an investment property in ${city.name}, ${stateName}?`,
      answer: `Most lenders require a 1.0 to 1.25 DSCR. In ${city.name}, with a median rent of ${formatCurrency(city.medianRent)}/mo and median home price of ${formatCurrency(city.medianHomePrice)}, your DSCR depends on purchase price, down payment, and rate. Some lenders accept ratios as low as 0.75 with a rate adjustment. Use the calculator above to check your specific scenario.`,
    },
    {
      question: `What are ${city.name} property taxes for DSCR calculation?`,
      answer: `The effective property tax rate in ${city.name} is approximately ${(city.avgPropertyTaxRate * 100).toFixed(2)}%. For a property at the median price of ${formatCurrency(city.medianHomePrice)}, that's roughly ${formatCurrency(Math.round(city.medianHomePrice * city.avgPropertyTaxRate))}/year. Property taxes are included in PITIA and directly affect your DSCR ratio.`,
    },
    {
      question: `Is ${city.name} a good market for DSCR investment properties?`,
      answer: `${city.name} median rent is ${formatCurrency(city.medianRent)}/mo with a median home price of ${formatCurrency(city.medianHomePrice)}. Whether this market works for DSCR financing depends on your purchase price, down payment, and whether you choose amortizing or interest-only terms. The calculator above shows your exact DSCR for any ${city.name} scenario.`,
    },
  ];

  const internalLinks = [
    { label: `${county.name} Counties`, href: `/tools/dscr-qualification-calculator/${state}/${countySlug}` },
    { label: `${stateName} Counties`, href: `/tools/dscr-qualification-calculator/${state}` },
    { label: 'DSCR Rent Analyzer', href: `/tools/dscr-rent-analyzer/${state}/${countySlug}/${citySlug}` },
    { label: 'All Mortgage Tools', href: '/tools' },
    { label: 'DSCR Investment Loans', href: '/loan-programs/dscr-investment-loans' },
    { label: 'Contact Mo Abdel', href: '/contact' },
  ];

  const schemas = buildToolSchemas({
    toolName: `DSCR Qualification Calculator \u2014 ${city.name}, ${stateName}`,
    description: `Calculate DSCR ratio and check investment property loan qualification in ${city.name}, ${stateName}.`,
    url: `/tools/dscr-qualification-calculator/${state}/${countySlug}/${citySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${city.name} DSCR Qualification Calculator`}
      subtitle={`Check if your ${city.name} investment property qualifies for a DSCR loan. Median rent: ${formatCurrency(city.medianRent)}/mo | Median home: ${formatCurrency(city.medianHomePrice)}.`}
      badgeText={`${city.name}, ${state.toUpperCase()}`}
      badgeColor="bg-slate-100 text-blue-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <DscrQualificationCalculator
        countyName={county.name}
        stateCode={state}
        defaultHomeValue={city.medianHomePrice}
        conformingLoanLimit={county.conformingLoanLimit}
        medianRent={city.medianRent}
        avgPropertyTaxRate={city.avgPropertyTaxRate}
        avgAppreciation5yr={county.avgAppreciation5yr}
        cityName={city.name}
        dscrSnapshot={dscrSnapshot}
      />
    </ToolPageLayout>
  );
}
```

**Step 5: Verify all pages compile**

Run: `cd C:/Users/bigbi/Projects/brokersiteupdate && npx tsc --noEmit`
Expected: No type errors

**Step 6: Commit**

```bash
git add app/tools/dscr-qualification-calculator/
git commit -m "feat: add DSCR qualification calculator pages (hub, state, county, city)"
```

---

## Task 8: Add to Navigation

**Files:**
- Modify: `lib/navigation-data.ts`

**Step 1: Add DSCR Qualification Calculator to the tools section**

Find the County-Level Calculators section in navigation-data.ts and add:

```typescript
{ title: 'DSCR Qualification Calculator', url: '/tools/dscr-qualification-calculator' },
```

Add it alongside the existing entries (DSCR Rent Analyzer, Property Tax Estimator, etc.).

**Step 2: Commit**

```bash
git add lib/navigation-data.ts
git commit -m "feat: add DSCR qualification calculator to navigation"
```

---

## Task 9: Build Verification

**Step 1: Run full build**

Run: `cd C:/Users/bigbi/Projects/brokersiteupdate && npm run build`

Expected: Build succeeds. This will generate all 97 county + 300+ city static pages. May take several minutes.

Watch for:
- TypeScript errors (fix any that appear)
- Import resolution issues
- Missing component exports

**Step 2: Run dev server and manually test**

Run: `cd C:/Users/bigbi/Projects/brokersiteupdate && npm run dev`

Test these URLs:
1. `http://localhost:3000/tools/dscr-qualification-calculator` (hub page)
2. `http://localhost:3000/tools/dscr-qualification-calculator/ca` (CA state page)
3. `http://localhost:3000/tools/dscr-qualification-calculator/ca/orange-county` (county page with calculator)
4. Pick a city URL from the county page and test it

Verify:
- Calculator loads with pre-filled county/city data
- Changing inputs updates DSCR ratio in real-time
- Color coding matches tier (green/blue/yellow/red)
- Interest-only teaser appears when amortizing is selected
- STR toggle shows 75% haircut message
- Down payment buttons work + custom input
- Email gate form appears below free results
- Submitting the form (test with fake data) unlocks the full report
- Full report shows all sections (comparison table, rent sensitivity, IO vs amort, rate range, 5-year projection, next steps)
- DSCR snapshot paragraph appears above calculator
- FAQs display with county-specific data
- Internal links include city links
- Mobile responsive (test at 375px width)

**Step 3: Run lint**

Run: `cd C:/Users/bigbi/Projects/brokersiteupdate && npm run lint`
Expected: No errors (warnings are acceptable)

**Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: resolve build/lint issues for DSCR qualification calculator"
```

---

## Task 10: Add to Tools Hub Page

**Files:**
- Modify: `app/tools/page.tsx`

**Step 1: Add DSCR Qualification Calculator card to the tools hub**

Read the existing tools hub page, find the tool card grid, and add a new card for DSCR Qualification Calculator following the same pattern as existing cards. Position it first in the list (highest priority).

**Step 2: Commit**

```bash
git add app/tools/page.tsx
git commit -m "feat: add DSCR qualification calculator to tools hub page"
```

---

## Summary

**Total new files:** 8
- `lib/tool-rates-config.ts`
- `lib/dscr-snapshot.ts`
- `components/tools/ToolLeadCaptureForm.tsx`
- `components/tools/DscrQualificationCalculator.tsx`
- `components/tools/DscrQualificationReport.tsx`
- `app/tools/dscr-qualification-calculator/page.tsx`
- `app/tools/dscr-qualification-calculator/[state]/page.tsx`
- `app/tools/dscr-qualification-calculator/[state]/[county]/page.tsx`
- `app/tools/dscr-qualification-calculator/[state]/[county]/[city]/page.tsx`

**Modified files:** 3
- `lib/geo-data/types.ts` (new type interfaces)
- `lib/geo-data/calculations.ts` (new calculation functions)
- `lib/navigation-data.ts` (add to nav)
- `app/tools/page.tsx` (add to hub)

**Reusable for Tools #2-4:**
- `ToolLeadCaptureForm.tsx` — shared by all tools
- `lib/tool-rates-config.ts` — shared rate assumptions
- Lead data schema pattern in `/api/quotes`

**Pages generated:** ~400+ (1 hub + 2 state + 97 county + 300+ city)
