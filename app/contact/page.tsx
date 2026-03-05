import type { Metadata } from 'next';
import { headers } from 'next/headers';
import ContactPageClient from './ContactPageClient';
import { buildBrokerEntityGraph, buildServiceWebPageSchema } from '@/lib/schema-entities';
import { getAudienceContext } from '@/lib/audience';

export const metadata: Metadata = {
  title: 'Contact Orange County Mortgage Broker | Fast Rate Quote | Mo Abdel',
  description:
    'Talk with Mo Abdel, licensed mortgage broker (NMLS #1426884), for a fast custom mortgage or refinance quote. Call, text, or submit your scenario today.',
  alternates: {
    canonical: 'https://www.mothebroker.com/contact',
    languages: {
      'en-US': 'https://www.mothebroker.com/contact',
      'x-default': 'https://www.mothebroker.com/contact',
    },
  },
};

const contactEntitySchema = buildBrokerEntityGraph({
  pageUrl: 'https://www.mothebroker.com/contact',
  serviceType: 'Mortgage Consultation Services',
  serviceName: 'Contact Orange County Mortgage Broker',
  serviceDescription:
    'Contact Mo Abdel for purchase, refinance, FHA, VA, jumbo, and home equity mortgage guidance in Orange County, CA.',
});

const contactPageSchema = buildServiceWebPageSchema({
  pageUrl: 'https://www.mothebroker.com/contact',
  title: 'Contact Orange County Mortgage Broker | Fast Rate Quote | Mo Abdel',
  description:
    'Talk with Mo Abdel, licensed mortgage broker (NMLS #1426884), for a fast custom mortgage or refinance quote. Call, text, or submit your scenario today.',
  breadcrumbName: 'Contact',
});

export default async function ContactPage() {
  const audience = getAudienceContext(await headers());

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactEntitySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactPageClient
        leadCaptureEnabled={audience.isUsEligible}
        countryCode={audience.countryCode}
      />
    </>
  );
}
