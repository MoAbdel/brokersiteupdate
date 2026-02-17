import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { generateMetadata } from '@/lib/metadata';
import { LeadMagnetForm } from '@/components/lead-magnets/LeadMagnetForm';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = generateMetadata({
  title: 'HELOC vs Cash-Out Refinance Worksheet | Orange County (Free)',
  description:
    'Free HELOC vs cash-out refinance worksheet for Orange County homeowners. Compare flexibility, payments, and trade-offs without giving up a low first mortgage.',
  path: '/resources/heloc-vs-cash-out',
  type: 'website',
});

export default function HelocVsCashOutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="bg-blue-100 text-blue-700 mb-4">Free Equity Tool</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            HELOC vs Cash-Out Refinance (Worksheet)
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            If you have a low first mortgage, a cash-out refinance can be expensive. This worksheet helps you compare options based on your goals and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Quick decision guide</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">HELOC tends to fit when…</h3>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• You want flexibility (draw as needed)</li>
                      <li>• You want to keep a low first mortgage</li>
                      <li>• You’re funding renovations over time</li>
                      <li>• You want a reserve line “just in case”</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 border border-amber-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Cash-out tends to fit when…</h3>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• You need one lump sum</li>
                      <li>• You prefer fixed pricing/payment</li>
                      <li>• You’re replacing a higher-rate first anyway</li>
                      <li>• You want one combined loan</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  Educational tool only. Exact terms depend on credit, equity, property type, and lender.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Related pages</h2>
                <div className="space-y-2 text-slate-700">
                  <div>
                    <Link className="text-blue-700 hover:underline" href="/heloc-orange-county">
                      HELOC Orange County
                    </Link>
                  </div>
                  <div>
                    <Link className="text-blue-700 hover:underline" href="/cash-out-refinance">
                      Cash-Out Refinance Overview
                    </Link>
                  </div>
                  <div>
                    <Link className="text-blue-700 hover:underline" href="/heloan-orange-county">
                      HELOAN Options
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <LeadMagnetForm
            magnetName="HELOC vs Cash-Out Worksheet"
            subject="Lead Magnet: HELOC vs Cash-Out Worksheet"
            loanPurpose="heloc"
            fields={[
              {
                name: 'property_city',
                label: 'Property city (optional)',
                type: 'text',
                placeholder: 'Irvine, Newport Beach, Costa Mesa...',
              },
              {
                name: 'home_value_estimate',
                label: 'Estimated home value (optional)',
                type: 'text',
                placeholder: 'Example: 1200000',
              },
              {
                name: 'first_mortgage_balance',
                label: 'Current first mortgage balance (optional)',
                type: 'text',
                placeholder: 'Example: 550000',
              },
              {
                name: 'cash_needed',
                label: 'How much cash do you want to access? (optional)',
                type: 'text',
                placeholder: 'Example: 100000',
              },
              {
                name: 'goal',
                label: 'Primary goal',
                type: 'select',
                required: true,
                options: [
                  { label: 'Renovation / remodel', value: 'renovation' },
                  { label: 'Debt consolidation', value: 'debt' },
                  { label: 'Buy another property', value: 'down-payment' },
                  { label: 'Emergency reserve / flexibility', value: 'reserve' },
                  { label: 'Other', value: 'other' },
                ],
              },
              {
                name: 'timeline',
                label: 'Timeline',
                type: 'select',
                required: true,
                options: [
                  { label: 'ASAP (0-30 days)', value: 'asap' },
                  { label: '30-60 days', value: '30-60' },
                  { label: '60-90 days', value: '60-90' },
                  { label: 'Just researching', value: 'researching' },
                ],
              },
              {
                name: 'notes',
                label: 'Anything else? (optional)',
                type: 'textarea',
                placeholder: 'Example: low-rate first mortgage, self-employed, HOA, etc.',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

