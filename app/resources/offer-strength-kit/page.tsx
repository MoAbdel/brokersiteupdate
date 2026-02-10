import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { generateMetadata } from '@/lib/metadata';
import { LeadMagnetForm } from '@/components/lead-magnets/LeadMagnetForm';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = generateMetadata({
  title: 'Offer Strength Kit | Orange County Pre-Approval Checklist (Free)',
  description:
    'Free offer strength kit for Orange County homebuyers: pre-approval checklist, timeline, and the documents you need to submit a strong offer.',
  path: '/resources/offer-strength-kit',
  type: 'website',
});

export default function OfferStrengthKitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="bg-blue-100 text-blue-700 mb-4">Free Homebuyer Tool</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Offer Strength Kit (Orange County)
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            A fast way to show up prepared: what to gather, what to ask, and how to avoid delays once you find the right home.
          </p>
          <p className="text-sm text-slate-500 mt-3">
            Prefer to talk now?{' '}
            <a className="text-blue-700 hover:underline" href="tel:+19498229662">
              Call (949) 822-9662
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">What you get</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>• Pre-approval checklist (what underwriters actually ask for)</li>
                  <li>• Offer timeline: from accepted offer to keys</li>
                  <li>• Red flags that cause delays (and how to prevent them)</li>
                  <li>• Questions to ask your agent and lender before you write</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Best for</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>• First-time buyers</li>
                  <li>• Buyers competing in multiple-offer markets</li>
                  <li>• Buyers with bonuses, RSUs, commissions, or self-employed income</li>
                  <li>• Anyone who wants a clean, fast closing</li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-sm text-slate-600">
              Related guides:{' '}
              <Link className="text-blue-700 hover:underline" href="/guides/orange-county-home-buyer-guide">
                Orange County Home Buyer Guide
              </Link>
              {' · '}
              <Link className="text-blue-700 hover:underline" href="/resources/document-checklist">
                Document Checklist
              </Link>
            </div>
          </div>

          <LeadMagnetForm
            magnetName="Offer Strength Kit"
            subject="Lead Magnet: Offer Strength Kit"
            loanPurpose="purchase"
            fields={[
              {
                name: 'target_city',
                label: 'Target city (optional)',
                type: 'text',
                placeholder: 'Huntington Beach, Costa Mesa, Irvine...',
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
                name: 'price_range',
                label: 'Target price range (optional)',
                type: 'select',
                options: [
                  { label: 'Under $750k', value: 'under-750k' },
                  { label: '$750k - $1.25M', value: '750k-1.25m' },
                  { label: '$1.25M - $2M', value: '1.25m-2m' },
                  { label: '$2M+', value: '2m-plus' },
                ],
              },
              {
                name: 'notes',
                label: 'Anything we should know? (optional)',
                type: 'textarea',
                placeholder: 'Example: self-employed, bonus income, buying with family, etc.',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

