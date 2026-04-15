'use client';

import React, { useState } from 'react';
import {
  isPrequalified,
  type PrequalInput,
  type PrequalProduct,
  type PrequalResult,
} from '@/lib/leadQualification';

interface PrequalWidgetProps {
  onComplete: (payload: { input: PrequalInput; result: PrequalResult }) => void;
  initialValues?: Partial<PrequalInput>;
  className?: string;
}

const PRODUCT_OPTIONS: Array<{ value: PrequalProduct; label: string }> = [
  { value: 'heloc', label: 'HELOC (home equity line of credit)' },
  { value: 'cashOut', label: 'Cash-out refinance' },
  { value: 'rateTerm', label: 'Rate-and-term refinance' },
  { value: 'purchase', label: 'Purchase (new home)' },
  { value: 'dscr', label: 'Investment property (DSCR)' },
  { value: 'other', label: 'Something else' },
];

function parseCurrency(raw: string): number {
  const digits = raw.replace(/[^0-9]/g, '');
  return digits === '' ? NaN : Number(digits);
}

function formatCurrency(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return '';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

function bucketHome(v: number): string {
  if (v < 500_000) return '<500K';
  if (v < 1_000_000) return '500K-1M';
  if (v < 2_000_000) return '1M-2M';
  if (v <= 5_000_000) return '2M-5M';
  return '>5M';
}

function bucketLoan(v: number): string {
  if (v < 250_000) return '<250K';
  if (v < 750_000) return '250-750K';
  if (v < 2_000_000) return '750K-2M';
  if (v <= 3_500_000) return '2M-3.5M';
  return '>3.5M';
}

export default function PrequalWidget({
  onComplete,
  initialValues,
  className = '',
}: PrequalWidgetProps) {
  const [product, setProduct] = useState<PrequalProduct | ''>(initialValues?.product ?? '');
  const [homeValueRaw, setHomeValueRaw] = useState(
    initialValues?.homeValue ? formatCurrency(initialValues.homeValue) : ''
  );
  const [currentMortgageRaw, setCurrentMortgageRaw] = useState(
    initialValues?.currentMortgage != null ? formatCurrency(initialValues.currentMortgage) : ''
  );
  const [desiredLoanRaw, setDesiredLoanRaw] = useState(
    initialValues?.desiredLoan ? formatCurrency(initialValues.desiredLoan) : ''
  );
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!product) {
      setError('Please choose what you are looking for.');
      return;
    }
    const homeValue = parseCurrency(homeValueRaw);
    const currentMortgage = parseCurrency(currentMortgageRaw);
    const desiredLoan = parseCurrency(desiredLoanRaw);

    if (!Number.isFinite(homeValue) || homeValue <= 0) {
      setError('Please enter a home value.');
      return;
    }
    if (!Number.isFinite(currentMortgage) || currentMortgage < 0) {
      setError('Please enter your current mortgage balance (0 if owned outright).');
      return;
    }
    if (!Number.isFinite(desiredLoan) || desiredLoan <= 0) {
      setError('Please enter the loan amount you are considering.');
      return;
    }
    if (desiredLoan > homeValue) {
      setError('Desired loan amount cannot exceed home value.');
      return;
    }

    const input: PrequalInput = { homeValue, currentMortgage, desiredLoan, product };
    const result = isPrequalified(input);

    try {
      window.gtag?.('event', 'prequal_submitted', {
        product,
        qualified: result.qualified,
        home_value_bucket: bucketHome(homeValue),
        loan_amount_bucket: bucketLoan(desiredLoan),
        fail_reason: result.qualified ? null : result.reasons[0]?.type,
      });
    } catch {
      // analytics is best-effort; never block submission
    }

    onComplete({ input, result });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`border border-slate-200 rounded-lg p-6 bg-white space-y-4 ${className}`}
      data-testid="prequal-widget"
      aria-labelledby="prequal-heading"
    >
      <h2 id="prequal-heading" className="text-xl font-semibold">Let&apos;s see if we&apos;re the right fit</h2>
      <p className="text-sm text-slate-600">Four quick questions. No credit check.</p>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-slate-900">What are you looking for?</legend>
        {PRODUCT_OPTIONS.map((opt) => (
          <label key={opt.value} className="flex items-start gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="radio"
              name="product"
              value={opt.value}
              checked={product === opt.value}
              onChange={() => setProduct(opt.value)}
              className="mt-1"
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </fieldset>

      <label className="block">
        <span className="text-sm font-medium text-slate-900">Home value (or purchase price)</span>
        <input
          type="text"
          inputMode="numeric"
          value={homeValueRaw}
          onChange={(e) => setHomeValueRaw(e.target.value)}
          onBlur={() => {
            const n = parseCurrency(homeValueRaw);
            if (Number.isFinite(n) && n > 0) setHomeValueRaw(formatCurrency(n));
          }}
          placeholder="$650,000"
          className="mt-1 w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-900">Current mortgage balance</span>
        <span className="block text-xs text-slate-500">Enter 0 if you own outright.</span>
        <input
          type="text"
          inputMode="numeric"
          value={currentMortgageRaw}
          onChange={(e) => setCurrentMortgageRaw(e.target.value)}
          onBlur={() => {
            const n = parseCurrency(currentMortgageRaw);
            if (Number.isFinite(n) && n >= 0) setCurrentMortgageRaw(formatCurrency(n));
          }}
          placeholder="$350,000"
          className="mt-1 w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-900">Desired loan amount</span>
        <input
          type="text"
          inputMode="numeric"
          value={desiredLoanRaw}
          onChange={(e) => setDesiredLoanRaw(e.target.value)}
          onBlur={() => {
            const n = parseCurrency(desiredLoanRaw);
            if (Number.isFinite(n) && n > 0) setDesiredLoanRaw(formatCurrency(n));
          }}
          placeholder="$150,000"
          className="mt-1 w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
        />
      </label>

      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        className="w-full bg-blue-700 text-white font-semibold rounded px-4 py-2 hover:bg-blue-800 transition-colors"
      >
        Check My Options
      </button>
    </form>
  );
}
