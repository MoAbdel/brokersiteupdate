/**
 * Emits a single BreadcrumbList JSON-LD per request. Reads the pathname
 * from the `x-pathname` header set by middleware.ts. Using headers() here
 * opts routes that inherit the root layout into dynamic rendering.
 */
import { headers } from 'next/headers';
import { pathnameToBreadcrumbItems } from '@/lib/breadcrumbs';
import { SITE_ORIGIN } from '@/lib/site';

export default async function BreadcrumbJsonLd() {
  const hdrs = await headers();
  const pathname = hdrs.get('x-pathname') ?? hdrs.get('x-invoke-path') ?? '/';

  const items = pathnameToBreadcrumbItems(pathname);
  if (items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_ORIGIN,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `${SITE_ORIGIN}${item.href}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
