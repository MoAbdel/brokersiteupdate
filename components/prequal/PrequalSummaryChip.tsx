'use client';

import React from 'react';
import type { PrequalInput, PrequalProduct } from '@/lib/leadQualification';

interface PrequalSummaryChipProps {
  input: PrequalInput;
  onEdit: () => void;
  className?: string;
}

const PRODUCT_LABEL: Record<PrequalProduct, string> = {
  heloc: 'HELOC',
  cashOut: 'Cash-out refi',
  rateTerm: 'Rate-and-term refi',
  purchase: 'Purchase',
  dscr: 'DSCR investment',
  other: 'Other',
};

const dollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

function compactDollars(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return dollar.format(n);
}

export default function PrequalSummaryChip({ input, onEdit, className = '' }: PrequalSummaryChipProps) {
  return (
    <div
      className={`flex items-center justify-between gap-3 border border-slate-200 rounded-lg px-4 py-3 bg-slate-50 ${className}`}
      data-testid="prequal-summary-chip"
    >
      <p className="text-sm text-slate-700">
        <span className="font-medium">{compactDollars(input.homeValue)} home</span>
        {' · '}
        <span>{PRODUCT_LABEL[input.product]}</span>
        {' · '}
        <span>{compactDollars(input.desiredLoan)} desired</span>
      </p>
      <button
        type="button"
        onClick={onEdit}
        className="text-sm text-blue-700 font-medium hover:underline"
      >
        Edit
      </button>
    </div>
  );
}
