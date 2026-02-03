import React from 'react';
import { JsonLd } from '@/app/(marketing)/components/Schema';
import { SITE_ORIGIN } from '@/lib/site';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_ORIGIN}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_ORIGIN}/blog`,
      },
    ],
  };

  return (
    <>
      <JsonLd json={breadcrumbSchema} />
      {children}
    </>
  );
}

