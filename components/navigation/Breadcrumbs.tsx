'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Fragment } from 'react';
import {
  buildBreadcrumbListSchema,
  pathnameToBreadcrumbItems,
} from '@/lib/breadcrumbs';
import { SITE_ORIGIN } from '@/lib/site';

type BreadcrumbsProps = {
  pathname?: string;
};

export default function Breadcrumbs({ pathname: staticPathname }: BreadcrumbsProps) {
  const clientPathname = usePathname();
  const pathname = staticPathname || clientPathname;

  // Don't show breadcrumbs on home page or if no pathname
  if (!pathname || pathname === '/' || pathname.startsWith('/articles')) return null;

  const breadcrumbItems = pathnameToBreadcrumbItems(pathname).map((item, idx, arr) => ({
    ...item,
    isLast: idx === arr.length - 1,
  }));
  const schema = buildBreadcrumbListSchema(pathname, SITE_ORIGIN);

  return (
    <>
      {schema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ) : null}
      <nav className="bg-slate-50 border-b border-slate-200" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 py-3 text-sm">
            {/* Home */}
            <li>
              <Link
                href="/"
                className="text-slate-500 hover:text-blue-600 transition-colors flex items-center"
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
            </li>

            {/* Breadcrumb items */}
            {breadcrumbItems.map((item) => (
              <Fragment key={item.href}>
                <li>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </li>
                <li>
                  {item.isLast ? (
                    <span className="text-slate-900 font-medium" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-slate-500 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              </Fragment>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
