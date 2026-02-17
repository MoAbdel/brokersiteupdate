import Link from 'next/link';

interface GuideLink {
  title: string;
  description: string;
  href: string;
}

const guides: GuideLink[] = [
  {
    title: 'Home Buyer Guide 2026',
    description: 'Step-by-step guide for California and Washington home buyers',
    href: '/guides/orange-county-home-buyer-guide',
  },
  {
    title: 'Refinancing Guide 2026',
    description: 'HELOC, cash-out, and rate-and-term options compared',
    href: '/guides/orange-county-refinancing-guide',
  },
  {
    title: 'Market Forecast 2025-2026',
    description: 'Current trends, pricing data, and expert predictions',
    href: '/guides/orange-county-market-forecast-2025-2026',
  },
  {
    title: 'VA Loans Guide',
    description: 'Benefits, eligibility, and VA loan programs explained',
    href: '/guides/orange-county-va-loans',
  },
  {
    title: 'Jumbo Loans Guide',
    description: 'High-value financing for premium properties',
    href: '/guides/orange-county-jumbo-loans',
  },
  {
    title: 'Investment Property Guide',
    description: 'DSCR loans, rental income strategies, and ROI analysis',
    href: '/guides/orange-county-investment-property',
  },
  {
    title: 'Spring 2026 Buying Guide',
    description: 'Seasonal insights for spring home purchases',
    href: '/guides/spring-2026-home-buying-guide',
  },
  {
    title: 'Mortgage Broker vs Bank',
    description: 'Why wholesale pricing beats retail every time',
    href: '/guides/mortgage-broker-vs-bank-complete-comparison',
  },
];

export default function GuidesAndResources() {
  return (
    <section className="py-16 bg-white" aria-label="Mortgage guides and educational resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Free Mortgage Guides &amp; Resources
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Expert insights to help you make informed decisions about your mortgage.
          </p>
        </div>

        <nav aria-label="Mortgage guide links">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="block p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full"
                >
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {guide.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-center">
          <Link
            href="/guides"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
          >
            View All Guides &amp; Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
