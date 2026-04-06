import {
  SITE_ORIGIN,
  PHONE_DISPLAY,
} from '@/lib/site';

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
  dateModified?: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

const SITE_URL = SITE_ORIGIN;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${SITE_URL}/#person-mo-abdel`;
const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;

const SAME_AS = [
  'https://www.facebook.com/profile.php?id=61573517340174',
  'https://www.instagram.com/mo_thebroker',
  'https://www.yelp.com/biz/mo-abdel-lumin-lending-lake-forest',
  'https://maps.google.com/?cid=11756575614226532751',
  'https://www.linkedin.com/in/moabdel/',
];

const AREA_SERVED = [
  {
    '@type': 'State' as const,
    name: 'California',
    sameAs: 'https://en.wikipedia.org/wiki/California',
  },
  {
    '@type': 'State' as const,
    name: 'Washington',
    sameAs: 'https://en.wikipedia.org/wiki/Washington_(state)',
  },
];

const BROKER_CREDENTIALS = [
  {
    '@type': 'EducationalOccupationalCredential' as const,
    credentialCategory: 'Mortgage Loan Originator License',
    name: 'NMLS #1426884',
    url: 'https://www.nmlsconsumeraccess.org',
    recognizedBy: {
      '@type': 'Organization' as const,
      name: 'Nationwide Multistate Licensing System (NMLS)',
      url: 'https://www.nmlsconsumeraccess.org',
    },
  },
];

const COMPANY_CREDENTIALS = [
  {
    '@type': 'EducationalOccupationalCredential' as const,
    credentialCategory: 'Mortgage Broker License',
    name: 'NMLS #2716106',
    url: 'https://www.nmlsconsumeraccess.org',
    recognizedBy: {
      '@type': 'Organization' as const,
      name: 'Nationwide Multistate Licensing System (NMLS)',
      url: 'https://www.nmlsconsumeraccess.org',
    },
  },
];

const OPENING_HOURS_SPECIFICATION = [
  {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: ['Saturday'],
    opens: '09:00',
    closes: '15:00',
  },
];

const OFFER_CATALOG = {
  '@type': 'OfferCatalog' as const,
  name: 'Mortgage Loan Programs',
  itemListElement: [
    { '@type': 'Offer' as const, itemOffered: { '@type': 'Service' as const, name: 'Conventional Loans' } },
    { '@type': 'Offer' as const, itemOffered: { '@type': 'Service' as const, name: 'FHA Loans' } },
    { '@type': 'Offer' as const, itemOffered: { '@type': 'Service' as const, name: 'VA Loans' } },
    { '@type': 'Offer' as const, itemOffered: { '@type': 'Service' as const, name: 'Jumbo Loans up to $2.5M' } },
    { '@type': 'Offer' as const, itemOffered: { '@type': 'Service' as const, name: 'DSCR Investment Loans' } },
    { '@type': 'Offer' as const, itemOffered: { '@type': 'Service' as const, name: 'Bank Statement Loans' } },
    { '@type': 'Offer' as const, itemOffered: { '@type': 'Service' as const, name: 'HELOC' } },
    { '@type': 'Offer' as const, itemOffered: { '@type': 'Service' as const, name: 'Cash-Out Refinance' } },
    { '@type': 'Offer' as const, itemOffered: { '@type': 'Service' as const, name: 'Fix and Flip Loans' } },
    { '@type': 'Offer' as const, itemOffered: { '@type': 'Service' as const, name: 'Foreign National Loans' } },
  ],
};

const KNOWS_ABOUT = [
  'Wholesale Mortgage Brokerage',
  'Conventional Loans',
  'FHA Loans',
  'VA Loans',
  'Jumbo Loans',
  'HELOC',
  'Home Equity Loans',
  'Cash-Out Refinance',
  'DSCR Investment Loans',
  'Non-QM Loans',
  'Bank Statement Loans',
  'Reverse Mortgages (HECM)',
  'California Real Estate Finance',
  'Washington Real Estate Finance',
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
      url: 'https://luminlending.com',
      identifier: 'NMLS #2716106',
      hasCredential: COMPANY_CREDENTIALS,
      areaServed: AREA_SERVED,
      sameAs: [
        'https://www.linkedin.com/company/lumin-lending/',
        'https://luminlending.com',
      ],
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Mohammad Basel Abdelfattah',
      alternateName: 'Mo Abdel',
      jobTitle: 'Licensed Mortgage Broker',
      identifier: 'NMLS #1426884',
      telephone: PHONE_DISPLAY,
      email: 'mo@mothebroker.com',
      url: `${SITE_URL}/about-mo-abdel-orange-county-mortgage-broker`,
      image: `${SITE_URL}/images/mo-headshot-v2.jpg`,
      hasCredential: BROKER_CREDENTIALS,
      knowsAbout: KNOWS_ABOUT,
      worksFor: { '@id': ORGANIZATION_ID },
      sameAs: SAME_AS,
    },
    {
      '@type': ['LocalBusiness', 'FinancialService'],
      '@id': LOCAL_BUSINESS_ID,
      name: businessName,
      alternateName: 'Mo The Broker',
      additionalType: 'https://schema.org/MortgageBroker',
      url: SITE_URL,
      telephone: PHONE_DISPLAY,
      email: 'mo@mothebroker.com',
      serviceType,
      description: serviceDescription,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '18201 Von Karman Ave Suite 800',
        addressLocality,
        addressRegion,
        postalCode: '92612',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '33.6846',
        longitude: '-117.8265',
      },
      areaServed: (areaServedNames && areaServedNames.length > 0
        ? areaServedNames.map((name) => ({ '@type': 'Place' as const, name }))
        : AREA_SERVED
      ),
      founder: { '@id': PERSON_ID },
      employee: { '@id': PERSON_ID },
      parentOrganization: { '@id': ORGANIZATION_ID },
      hasCredential: BROKER_CREDENTIALS,
      priceRange: '$',
      image: `${SITE_URL}/images/mo-headshot-v2.jpg`,
      sameAs: SAME_AS,
      openingHoursSpecification: OPENING_HOURS_SPECIFICATION,
      hasOfferCatalog: OFFER_CATALOG,
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: serviceName || serviceType,
      serviceType,
      description: serviceDescription,
      url: pageUrl,
      provider: { '@id': LOCAL_BUSINESS_ID },
      broker: { '@id': PERSON_ID },
      areaServed: (areaServedNames && areaServedNames.length > 0
        ? areaServedNames.map((name) => ({ '@type': 'Place' as const, name }))
        : AREA_SERVED
      ),
    },
  ],
});

export const buildServiceWebPageSchema = ({
  pageUrl,
  title,
  description,
  breadcrumbName,
  includeSpeakable = true,
  dateModified,
}: ServiceWebPageSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description,
  dateModified: dateModified || new Date().toISOString().split('T')[0],
  isPartOf: {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Mo The Broker',
    publisher: { '@id': ORGANIZATION_ID },
  },
  about: { '@id': LOCAL_BUSINESS_ID },
  author: { '@id': PERSON_ID },
  primaryImageOfPage: `${SITE_URL}/images/mo-headshot-v2.jpg`,
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
          cssSelector: ['h1', '.speakable'],
        },
      }
    : {}),
});

export function buildHowToSchema({
  name,
  description,
  totalTime,
  steps,
  url,
}: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{ name: string; text: string }>;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime && { totalTime }),
    url,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export const buildFAQPageSchema = (faqs: FAQItem[], pageUrl?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  ...(pageUrl ? { url: pageUrl } : {}),
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
