type BrokerEntityGraphInput = {
  pageUrl: string;
  serviceType: string;
  serviceName?: string;
  serviceDescription: string;
  areaServedName?: string;
  areaServedNames?: string[];
  addressLocality?: string;
  addressRegion?: string;
  businessName?: string;
};

type ServiceWebPageSchemaInput = {
  pageUrl: string;
  title: string;
  description: string;
  breadcrumbName: string;
  includeSpeakable?: boolean;
};

const SITE_URL = 'https://www.mothebroker.com';
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${SITE_URL}/#person-mo-abdel`;
const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;

const SAME_AS = [
  'https://www.facebook.com/mothebroker',
  'https://www.linkedin.com/in/mo-abdel-mortgage',
];

export const buildBrokerEntityGraph = ({
  pageUrl,
  serviceType,
  serviceName,
  serviceDescription,
  areaServedName = 'California and Washington',
  areaServedNames,
  addressLocality = 'Irvine',
  addressRegion = 'CA',
  businessName = 'Mo Abdel - California & Washington Mortgage Broker',
}: BrokerEntityGraphInput) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: 'Lumin Lending, Inc.',
      url: SITE_URL,
      identifier: 'NMLS #2716106',
      sameAs: SAME_AS,
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Mo Abdel',
      jobTitle: 'Licensed Mortgage Broker',
      identifier: 'NMLS #1426884',
      telephone: '(949) 822-9662',
      url: SITE_URL,
      sameAs: SAME_AS,
      worksFor: { '@id': ORGANIZATION_ID },
    },
    {
      '@type': 'LocalBusiness',
      '@id': LOCAL_BUSINESS_ID,
      name: businessName,
      alternateName: 'Mo The Broker',
      additionalType: 'https://schema.org/MortgageBroker',
      url: SITE_URL,
      telephone: '(949) 822-9662',
      serviceType,
      description: serviceDescription,
      address: {
        '@type': 'PostalAddress',
        addressLocality,
        addressRegion,
      },
      areaServed: (areaServedNames && areaServedNames.length > 0
        ? areaServedNames
        : [areaServedName]
      ).map((name) => ({
        '@type': 'Place',
        name,
      })),
      founder: { '@id': PERSON_ID },
      employee: { '@id': PERSON_ID },
      parentOrganization: { '@id': ORGANIZATION_ID },
      sameAs: SAME_AS,
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: serviceName || serviceType,
      serviceType,
      description: serviceDescription,
      url: pageUrl,
      provider: { '@id': LOCAL_BUSINESS_ID },
      areaServed: (areaServedNames && areaServedNames.length > 0
        ? areaServedNames
        : [areaServedName]
      ).map((name) => ({
        '@type': 'Place',
        name,
      })),
    },
  ],
});

export const buildServiceWebPageSchema = ({
  pageUrl,
  title,
  description,
  breadcrumbName,
  includeSpeakable = true,
}: ServiceWebPageSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description,
  isPartOf: {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Mo The Broker',
  },
  about: { '@id': LOCAL_BUSINESS_ID },
  primaryImageOfPage: `${SITE_URL}/images/mo-headshot.jpg`,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: breadcrumbName,
        item: pageUrl,
      },
    ],
  },
  ...(includeSpeakable
    ? {
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2'],
        },
      }
    : {}),
});
