import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { getCountiesByState, getStateName, STATES } from '@/lib/geo-data';
import { formatCurrency } from '@/lib/geo-data/calculations';

interface Props {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return STATES.map((s) => ({ state: s.code }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const stateName = getStateName(state);
  if (!stateName) return {};

  const counties = getCountiesByState(state);
  return genMeta({
    title: `Property Tax Estimator — All ${counties.length} ${stateName} Counties [2026 Tax Rates]`,
    description: `Estimate property taxes for any of ${counties.length} ${stateName} counties. Uses 2026 county-specific tax rates, median home values, and local assessment data.`,
    path: `/tools/property-tax-estimator/${state}`,
    type: 'website',
  });
}

export default async function StatePage({ params }: Props) {
  const { state } = await params;
  const stateName = getStateName(state);
  const counties = getCountiesByState(state);

  if (!stateName || counties.length === 0) notFound();

  const sorted = [...counties].sort((a, b) => b.medianHomePrice - a.medianHomePrice);
  const avgRate =
    counties.reduce((s, c) => s + c.avgPropertyTaxRate, 0) / counties.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><span className="mx-1">/</span></li>
            <li><Link href="/tools" className="hover:text-blue-600">Tools</Link></li>
            <li><span className="mx-1">/</span></li>
            <li><Link href="/tools/property-tax-estimator" className="hover:text-blue-600">Property Tax Estimator</Link></li>
            <li><span className="mx-1">/</span></li>
            <li className="text-slate-900 font-medium">{stateName}</li>
          </ol>
        </nav>

        <div className="text-center mb-10">
          <Badge className="bg-blue-100 text-blue-700 mb-4">{counties.length} Counties</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {stateName} Property Tax Estimator by County
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {stateName} has {counties.length} counties with an average effective property tax rate of{' '}
            {(avgRate * 100).toFixed(2)}% for 2026. Select your county for a personalized tax estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sorted.map((county) => (
            <Link
              key={county.slug}
              href={`/tools/property-tax-estimator/${state}/${county.slug}`}
              className="group"
            >
              <Card className="hover:shadow-md hover:border-blue-300 transition-all h-full">
                <CardContent className="p-5">
                  <h2 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {county.name}
                  </h2>
                  <dl className="grid grid-cols-2 gap-2 text-xs text-slate-500">
                    <div>
                      <dt>Median Home</dt>
                      <dd className="font-semibold text-slate-700">{formatCurrency(county.medianHomePrice)}</dd>
                    </div>
                    <div>
                      <dt>Tax Rate</dt>
                      <dd className="font-semibold text-slate-700">{(county.avgPropertyTaxRate * 100).toFixed(2)}%</dd>
                    </div>
                    <div>
                      <dt>Annual Tax (est.)</dt>
                      <dd className="font-semibold text-slate-700">
                        {formatCurrency(Math.round(county.medianHomePrice * county.avgPropertyTaxRate))}
                      </dd>
                    </div>
                    <div>
                      <dt>Monthly Tax (est.)</dt>
                      <dd className="font-semibold text-slate-700">
                        {formatCurrency(Math.round((county.medianHomePrice * county.avgPropertyTaxRate) / 12))}
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-slate-500">
          <p>
            2026 property tax rates sourced from county assessor offices.
            For a personalized mortgage analysis, call Mo Abdel at{' '}
            <a href="tel:9498229662" className="text-blue-600 hover:underline">(949) 822-9662</a>.
            NMLS #1426884 | Lumin Lending NMLS #2716106.
          </p>
        </div>
      </div>
    </div>
  );
}
