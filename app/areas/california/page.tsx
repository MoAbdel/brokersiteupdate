import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { buildServiceWebPageSchema } from '@/lib/schema-entities';

export const metadata: Metadata = {
  title: 'California Mortgage Service Areas | Statewide Mortgage Broker Hub',
  description:
    'Explore California mortgage service areas, statewide loan programs, and regional strategy guides for purchase, refinance, and home equity.',
  alternates: {
    canonical: 'https://www.mothebroker.com/areas/california',
    languages: {
      'en-US': 'https://www.mothebroker.com/areas/california',
      'x-default': 'https://www.mothebroker.com/areas/california',
    },
  },
};

const pageSchema = buildServiceWebPageSchema({
  pageUrl: 'https://www.mothebroker.com/areas/california',
  title: 'California Mortgage Service Areas | Statewide Mortgage Broker Hub',
  description:
    'Explore California mortgage service areas, statewide loan programs, and regional strategy guides for purchase, refinance, and home equity.',
  breadcrumbName: 'California Service Areas',
});

const regionalClusters = [
  { label: 'Orange County Regional Cluster', href: '/areas' },
  { label: 'California Mortgage Hub', href: '/blog/wholesale-mortgage-broker-california-guide-2026' },
  { label: 'California Home Equity Hub', href: '/blog/home-equity-california-guide-2026' },
  { label: 'California Reverse Mortgage Hub', href: '/blog/reverse-mortgage-california-guide-2026' },
];

export default function CaliforniaAreasPage() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              California <span className="text-blue-600">Service Areas</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Statewide lending support for purchase, refinance, and equity strategies, with local market coverage and
              program-fit guidance.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Statewide Hub Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {regionalClusters.map((item) => (
                <Link key={item.href} href={item.href} className="text-blue-700 hover:underline flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-flex items-center text-blue-700 hover:text-blue-800 font-semibold">
              Talk with Mo about California financing options
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
