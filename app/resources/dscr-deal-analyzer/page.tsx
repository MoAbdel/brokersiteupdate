import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { generateMetadata } from '@/lib/metadata';
import { LeadMagnetForm } from '@/components/lead-magnets/LeadMagnetForm';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = generateMetadata({
  title: 'DSCR Deal Analyzer [Free Cash-Flow Calculator & Lender-Ready Checklist]',
  description:
    'Free DSCR deal analyzer for investment properties. Share rent and estimated payment to get a fast DSCR-readiness check and lender-ready checklist.',
  path: '/resources/dscr-deal-analyzer',
  type: 'website',
});

export default function DscrDealAnalyzerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="bg-slate-100 text-blue-700 mb-4">Free Investor Tool</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">DSCR Deal Analyzer</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            A quick check to see whether a property is in DSCR territory, plus a lender-ready checklist for what to gather next.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">What this helps with</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>• Quick DSCR-readiness check (based on your estimates)</li>
                  <li>• Down payment and reserve planning (non-binding guidance)</li>
                  <li>• What to prepare for appraisal rent schedule and underwriting</li>
                  <li>• Next-step options if DSCR is below 1.0</li>
                </ul>
                <p className="text-xs text-slate-500 mt-4">
                  Educational tool only. Program guidelines vary by lender and scenario.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Related pages</h2>
                <div className="space-y-2 text-slate-700">
                  <div>
                    <Link className="text-blue-700 hover:underline" href="/blog/dscr-investment-property-loans-2026">
                      DSCR Loans (2026 guide)
                    </Link>
                  </div>
                  <div>
                    <Link className="text-blue-700 hover:underline" href="/guides/orange-county-investment-property">
                      Orange County Investment Property Guide
                    </Link>
                  </div>
                  <div>
                    <Link className="text-blue-700 hover:underline" href="/loan-programs/dscr-investment-loans">
                      DSCR loan program details
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <LeadMagnetForm
            magnetName="DSCR Deal Analyzer"
            subject="Lead Magnet: DSCR Deal Analyzer"
            loanPurpose="investment"
            fields={[
              {
                name: 'property_location',
                label: 'Property location (optional)',
                type: 'text',
                placeholder: 'City / County / State',
              },
              {
                name: 'purchase_price',
                label: 'Purchase price (optional)',
                type: 'text',
                placeholder: 'Example: 850000',
              },
              {
                name: 'monthly_rent',
                label: 'Estimated monthly rent (required)',
                type: 'text',
                required: true,
                placeholder: 'Example: 4200',
              },
              {
                name: 'estimated_monthly_pitia',
                label: 'Estimated monthly PITIA (required)',
                type: 'text',
                required: true,
                placeholder: 'Example: 3800',
              },
              {
                name: 'strategy',
                label: 'Strategy',
                type: 'select',
                required: true,
                options: [
                  { label: 'Buy & hold rental', value: 'buy-hold' },
                  { label: 'Short-term rental (Airbnb/VRBO)', value: 'str' },
                  { label: 'BRRRR / refinance strategy', value: 'brrrr' },
                  { label: 'Other', value: 'other' },
                ],
              },
              {
                name: 'notes',
                label: 'Anything else? (optional)',
                type: 'textarea',
                placeholder: 'Example: LLC vesting, condo/HOA, multiple properties, etc.',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

