import type { Metadata } from 'next';
import SimpleLandingPage from '@/components/SimpleLandingPage';
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <SimpleLandingPage />
    </>
  );
}