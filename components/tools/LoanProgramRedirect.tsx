'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';

export type RedirectContext =
  | 'property-tax'
  | 'dscr'
  | 'bank-statement'
  | 'equity'
  | 'heloc'
  | 'cash-out';

interface LoanProgramRedirectProps {
  context: RedirectContext;
  stateCode: string;
  countySlug: string;
}

interface RedirectOption {
  label: string;
  value: string;
}

interface RedirectConfig {
  question: string;
  options: RedirectOption[];
  routes: Record<string, { message: string; href: string; cta: string }>;
}

function getConfig(context: RedirectContext, stateCode: string, countySlug: string): RedirectConfig {
  const base = `/tools`;
  const geo = `/${stateCode}/${countySlug}`;

  switch (context) {
    case 'property-tax':
      return {
        question: 'Are you buying or do you already own?',
        options: [
          { label: 'Buying a home', value: 'buying' },
          { label: 'I already own', value: 'own' },
        ],
        routes: {
          buying: {
            message: 'Estimate your purchasing power with our qualification calculators.',
            href: `${base}/bank-statement-loan-estimator${geo}`,
            cta: 'Estimate Purchasing Power',
          },
          own: {
            message: 'Compare HELOC, cash-out refinance, and home equity loan options.',
            href: `${base}/equity-comparison-calculator${geo}`,
            cta: 'Compare Equity Options',
          },
        },
      };
    case 'dscr':
      return {
        question: 'How do you earn your income?',
        options: [
          { label: 'W-2 employee', value: 'w2' },
          { label: 'Self-employed', value: 'self' },
        ],
        routes: {
          w2: {
            message: 'You may also qualify for conventional investment property financing.',
            href: `${base}/cash-out-limit-calculator${geo}`,
            cta: 'Check Cash-Out Limits',
          },
          self: {
            message: 'Qualify using bank deposits instead of tax returns.',
            href: `${base}/bank-statement-loan-estimator${geo}`,
            cta: 'Try Bank Statement Calculator',
          },
        },
      };
    case 'bank-statement':
      return {
        question: 'Is this property an investment or primary residence?',
        options: [
          { label: 'Investment property', value: 'investment' },
          { label: 'Primary residence', value: 'primary' },
        ],
        routes: {
          investment: {
            message: 'DSCR loans qualify based on rental income — no tax returns needed.',
            href: `${base}/dscr-qualification-calculator${geo}`,
            cta: 'Check DSCR Qualification',
          },
          primary: {
            message: 'See how much equity you can access from your current home.',
            href: `${base}/equity-comparison-calculator${geo}`,
            cta: 'Compare Equity Options',
          },
        },
      };
    case 'equity':
    case 'heloc':
    case 'cash-out':
      return {
        question: 'Do you also own investment properties?',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
        routes: {
          yes: {
            message: 'DSCR loans let you finance investment properties based on rental income alone.',
            href: `${base}/dscr-qualification-calculator${geo}`,
            cta: 'Check DSCR Qualification',
          },
          no: {
            message: 'Find the right loan program for your situation in 60 seconds.',
            href: '/tools/loan-finder',
            cta: 'Take the Loan Finder Quiz',
          },
        },
      };
  }
}

export default function LoanProgramRedirect({
  context,
  stateCode,
  countySlug,
}: LoanProgramRedirectProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const config = getConfig(context, stateCode, countySlug);
  const route = selected ? config.routes[selected] : null;

  return (
    <Card className="bg-slate-50 border-slate-200">
      <CardContent className="p-5">
        <p className="text-sm font-semibold text-slate-900 mb-3">{config.question}</p>
        <div className="flex gap-2 mb-3">
          {config.options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelected(opt.value)}
              className={`flex-1 px-3 py-2 rounded-md text-sm font-medium border transition-colors ${
                selected === opt.value
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {route && (
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-slate-600">{route.message}</p>
            <Link
              href={route.href}
              className="shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              {route.cta} &rarr;
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
