export type BreadcrumbItem = {
  name: string;
  href: string;
};

export type BreadcrumbListSchema = {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
};

const ACRONYMS = /\b(Fha|Va|Heloc|Heloan|Nmls|Dti|Dscr)\b/gi;

export function pathnameToBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  if (!pathname || pathname === '/' || pathname.startsWith('/articles')) {
    return [];
  }

  const segments = pathname.split('/').filter(Boolean);

  return segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const name = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace(ACRONYMS, (match) => match.toUpperCase())
      .replace(/\bOc\b/g, 'Orange County');

    return { name, href };
  });
}

export function buildBreadcrumbListSchema(
  pathname: string,
  siteOrigin: string
): BreadcrumbListSchema | null {
  const items = pathnameToBreadcrumbItems(pathname);
  if (items.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteOrigin,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem' as const,
        position: index + 2,
        name: item.name,
        item: `${siteOrigin}${item.href}`,
      })),
    ],
  };
}
