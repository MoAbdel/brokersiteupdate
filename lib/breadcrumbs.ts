export type BreadcrumbItem = {
  name: string;
  href: string;
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
