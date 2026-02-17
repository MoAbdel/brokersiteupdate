import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/lib/metadata';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { getCountiesByState } from '@/lib/geo-data';
import { formatCurrency } from '@/lib/geo-data/calculations';

export const metadata: Metadata = generateMetadata({
  title: 'DSCR Rent Analyzer — Minimum Rent Calculator by County [2026 Investment Property Tool]',
  description:
    'Calculate the minimum rent needed for a 1.0 or 1.25 DSCR on your investment property. Covers all 58 California counties and 39 Washington counties with median rent data and cash-flow analysis.',
  path: '/tools/dscr-rent-analyzer',
  type: 'website',
});

export default function DscrRentAnalyzerIndex() {
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
            <li className="text-slate-900 font-medium">DSCR Rent Analyzer</li>
          </ol>
        </nav>

        <div className="text-center mb-12">
          <Badge className="bg-slate-100 text-blue-700 mb-4">Investors</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            DSCR Rent Analyzer
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Select your county to calculate the minimum rent needed for a 1.0 or 1.25 DSCR ratio
            on your investment property. Uses 2026 county median rents, property tax rates, and
            current interest rates.
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
              Select a {name} county for your personalized DSCR investment property analysis.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {counties.map((county) => (
                <Link
                  key={county.slug}
                  href={`/tools/dscr-rent-analyzer/${code}/${county.slug}`}
                  className="group"
                >
                  <Card className="hover:shadow-md hover:border-purple-300 transition-all">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {county.name}
                      </h3>
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>Median Rent: {formatCurrency(county.medianRent)}/mo</span>
                        <span>Median Home: {formatCurrency(county.medianHomePrice)}</span>
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
            Data sourced from 2026 county assessor records and rental market surveys.
            Contact Mo Abdel at{' '}
            <a href="tel:9498229662" className="text-blue-600 hover:underline">(949) 822-9662</a>{' '}
            for personalized DSCR loan analysis. NMLS #1426884 | Lumin Lending NMLS #2716106.
          </p>
        </div>
      </div>
    </div>
  );
}
