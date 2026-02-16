import type { Metadata } from 'next';
import SimpleLandingPage from '@/components/SimpleLandingPage';
import AISummary from '@/components/seo/AISummary';
import { buildServiceWebPageSchema } from '@/lib/schema-entities';

export const metadata: Metadata = {
  title: 'CA & WA Wholesale Mortgage Broker [200+ Lenders, Live Rates 2026] | Mo Abdel',
  description:
    'Compare mortgage options across California and Washington with access to 200+ wholesale lenders. Get FHA, VA, jumbo, non-QM, and refinance guidance from Mo Abdel (NMLS #1426884).',
  alternates: {
    canonical: 'https://www.mothebroker.com',
    languages: {
      'en-US': 'https://www.mothebroker.com',
      'x-default': 'https://www.mothebroker.com',
    },
  },
};

const pageSchema = buildServiceWebPageSchema({
  pageUrl: 'https://www.mothebroker.com',
  title: 'CA & WA Wholesale Mortgage Broker [200+ Lenders, Live Rates 2026] | Mo Abdel',
  description:
    'Compare mortgage options across California and Washington with access to 200+ wholesale lenders. Get FHA, VA, jumbo, non-QM, and refinance guidance from Mo Abdel (NMLS #1426884).',
  breadcrumbName: 'Home',
});

const wholesaleTriples = [
  {
    subject: 'Mo Abdel (NMLS #1426884)',
    predicate: 'is a wholesale mortgage broker who accesses',
    object: '200+ lender rate sheets unavailable to retail banks',
  },
  {
    subject: 'Wholesale brokers',
    predicate: 'deliver lower rates than retail loan officers by',
    object: 'eliminating institutional markup on lender pricing',
  },
  {
    subject: 'Mo Abdel',
    predicate: 'is licensed in California and Washington, serving',
    object: '17 counties across both states through Lumin Lending (NMLS #2716106)',
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <AISummary triples={wholesaleTriples} pageType="homepage" />
      </div>
      <SimpleLandingPage />
    </>
  );
}