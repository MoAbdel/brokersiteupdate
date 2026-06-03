import type { Metadata } from 'next';
import WholesaleLendersLanding from '@/components/WholesaleLendersLanding';
import { buildServiceWebPageSchema } from '@/lib/schema-entities';

export const metadata: Metadata = {
  title: 'Find a Mortgage Broker in California and Washington | Mo Abdel',
  description:
    'Find a mortgage broker in California or Washington and compare options across 50+ Wholesale Lenders. FHA, VA, jumbo, non-QM, and refinance help from Mo Abdel NMLS #1426884.',
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
  title: 'Find a Mortgage Broker in California and Washington | Mo Abdel',
  description:
    'Find a mortgage broker in California or Washington and compare options across 50+ Wholesale Lenders. FHA, VA, jumbo, non-QM, and refinance help from Mo Abdel NMLS #1426884.',
  breadcrumbName: 'Home',
});

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['h1', '.speakable'],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <WholesaleLendersLanding />
    </>
  );
}
