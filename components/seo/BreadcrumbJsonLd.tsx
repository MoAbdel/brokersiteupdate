import { buildBreadcrumbListSchema } from '@/lib/breadcrumbs';
import { SITE_ORIGIN } from '@/lib/site';

type BreadcrumbJsonLdProps = {
  pathname: string;
};

export default function BreadcrumbJsonLd({ pathname }: BreadcrumbJsonLdProps) {
  const schema = buildBreadcrumbListSchema(pathname, SITE_ORIGIN);
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
