import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { buildServiceWebPageSchema } from '@/lib/schema-entities';

export const metadata: Metadata = {
  title: 'Washington Mortgage Service Areas | Statewide Mortgage Broker Hub',
  description:
    'Explore Washington mortgage service areas, statewide loan programs, and regional strategy guides for purchase, refinance, and home equity.',
  alternates: {
    canonical: 'https://www.mothebroker.com/areas/washington',
    languages: {
      'en-US': 'https://www.mothebroker.com/areas/washington',
      'x-default': 'https://www.mothebroker.com/areas/washington',
    },
  },
};

const pageSchema = buildServiceWebPageSchema({
  pageUrl: 'https://www.mothebroker.com/areas/washington',
  title: 'Washington Mortgage Service Areas | Statewide Mortgage Broker Hub',
  description:
    'Explore Washington mortgage service areas, statewide loan programs, and regional strategy guides for purchase, refinance, and home equity.',
  breadcrumbName: 'Washington Service Areas',
});

const regionalClusters = [
  { label: 'Washington Mortgage Hub', href: '/blog/wholesale-mortgage-broker-washington-2026' },
  { label: 'Washington Home Equity Hub', href: '/blog/home-equity-washington-guide-2026' },
  { label: 'Washington Reverse Mortgage Hub', href: '/blog/reverse-mortgage-washington-guide-2026' },
  { label: 'Loan Programs Hub', href: '/loan-programs' },
];

export default function WashingtonAreasPage() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Washington <span className="text-blue-600">Service Areas</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Statewide lending support across Washington with flexible loan program coverage and scenario-specific
              guidance for buyers, owners, and investors.
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
              Talk with Mo about Washington financing options
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
