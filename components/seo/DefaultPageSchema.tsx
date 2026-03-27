import { SITE_ORIGIN, PHONE_DISPLAY } from '@/lib/site';

interface DefaultPageSchemaProps {
  title: string;
  description: string;
  url: string;
}

export default function DefaultPageSchema({ title, description, url }: DefaultPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Mo Abdel | Mortgage Broker',
      url: SITE_ORIGIN,
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Mo Abdel - Wholesale Mortgage Broker',
      telephone: PHONE_DISPLAY,
      url: SITE_ORIGIN,
      areaServed: [
        { '@type': 'State', name: 'California' },
        { '@type': 'State', name: 'Washington' },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
