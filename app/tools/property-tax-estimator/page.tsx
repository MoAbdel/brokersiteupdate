import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/lib/metadata';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { getCountiesByState } from '@/lib/geo-data';
import { formatCurrency } from '@/lib/geo-data/calculations';

export const metadata: Metadata = generateMetadata({
  title: 'Property Tax Estimator by County [2026 Tax Rates for CA & WA]',
  description:
    'Estimate annual and monthly property taxes using county-specific 2026 tax rates. Covers all 58 California counties and 39 Washington counties with median home values and Prop 13 analysis.',
  path: '/tools/property-tax-estimator',
  type: 'website',
});

export default function PropertyTaxEstimatorIndex() {
  const caCounties = getCountiesByState('ca');
  const waCounties = getCountiesByState('wa');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><span className="mx-1">/</span></li>
            <li><Link href="/tools" className="hover:text-blue-600">Tools</Link></li>
            <li><span className="mx-1">/</span></li>
            <li className="text-slate-900 font-medium">Property Tax Estimator</li>
          </ol>
        </nav>

        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-700 mb-4">Home Buyers</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Property Tax Estimator
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Select your county to estimate annual and monthly property taxes based on 2026
            county-specific tax rates, median home values, and local assessment rules.
          </p>
        </div>

        {[
          { code: 'ca', name: 'California', counties: caCounties },
          { code: 'wa', name: 'Washington', counties: waCounties },
        ].map(({ code, name, counties }) => (
          <section key={code} className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {name} Counties ({counties.length})
            </h2>
            <p className="text-slate-600 mb-6">
              Select a {name} county to estimate your property taxes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {counties.map((county) => (
                <Link
                  key={county.slug}
                  href={`/tools/property-tax-estimator/${code}/${county.slug}`}
                  className="group"
                >
                  <Card className="hover:shadow-md hover:border-blue-300 transition-all">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {county.name}
                      </h3>
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>Median: {formatCurrency(county.medianHomePrice)}</span>
                        <span>Tax Rate: {(county.avgPropertyTaxRate * 100).toFixed(2)}%</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="text-center mt-8">
          <p className="text-sm text-slate-500">
            Data sourced from 2026 county assessor records and state tax databases.
            Contact Mo Abdel at{' '}
            <a href="tel:9498229662" className="text-blue-600 hover:underline">(949) 822-9662</a>{' '}
            for personalized analysis. NMLS #1426884 | Lumin Lending NMLS #2716106.
          </p>
        </div>
      </div>
    </div>
  );
}
