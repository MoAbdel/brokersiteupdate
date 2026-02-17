import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/lib/metadata';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = generateMetadata({
  title: 'Free Mortgage Calculators & Tools [2026 County-Level Data for CA & WA]',
  description:
    'Free mortgage calculators with county-specific data for California and Washington. Cash-out limit calculator, DSCR rent analyzer, property tax estimator, and HELOC calculator powered by 2026 FHFA loan limits.',
  path: '/tools',
  type: 'website',
});

const tools = [
  {
    title: 'Cash-Out Limit Calculator',
    description:
      'Calculate your maximum cash-out refinance amount at 80%, 85%, and 90% LTV using county-specific conforming loan limits and median home values.',
    href: '/tools/cash-out-limit-calculator',
    badge: 'Most Popular',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    states: ['California (58 counties)', 'Washington (39 counties)'],
  },
  {
    title: 'DSCR Rent Analyzer',
    description:
      'Determine the minimum rent needed for a 1.0 or 1.25 DSCR ratio on investment properties using county-level rental data and current rates.',
    href: '/tools/dscr-rent-analyzer',
    badge: 'Investors',
    badgeColor: 'bg-slate-100 text-blue-700',
    states: ['California (58 counties)', 'Washington (39 counties)'],
  },
  {
    title: 'Property Tax Estimator',
    description:
      'Estimate annual and monthly property taxes by county using actual local tax rates. Compare tax burden across counties.',
    href: '/tools/property-tax-estimator',
    badge: 'Buyers',
    badgeColor: 'bg-blue-100 text-blue-700',
    states: ['California (58 counties)', 'Washington (39 counties)'],
  },
  {
    title: 'Max HELOC Calculator',
    description:
      'Calculate your maximum home equity line of credit based on estimated value, current balance, and county conforming limits.',
    href: '/tools/max-heloc-calculator',
    badge: 'Homeowners',
    badgeColor: 'bg-slate-100 text-blue-700',
    states: ['California (58 counties)', 'Washington (39 counties)'],
  },
];

export default function ToolsHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-emerald-100 text-emerald-700 mb-4">Free Tools</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Mortgage Calculators with County-Level Data
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Every calculator uses real 2026 FHFA conforming loan limits, county tax rates, and
            median home values for all 97 counties across California and Washington.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Card
              key={tool.href}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={tool.badgeColor}>{tool.badge}</Badge>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{tool.title}</h2>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{tool.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.states.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  href={tool.href}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                    Open Calculator →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            All calculators are free and require no login. Data sourced from FHFA, U.S. Census Bureau,
            and county assessor records. For personalized analysis, contact Mo Abdel at{' '}
            <a href="tel:9498229662" className="text-blue-600 hover:underline">
              (949) 822-9662
            </a>
            . NMLS #1426884 | Lumin Lending NMLS #2716106.
          </p>
        </div>
      </div>
    </div>
  );
}
