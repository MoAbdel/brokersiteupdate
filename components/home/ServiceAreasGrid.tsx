import Link from 'next/link';

interface AreaLink {
  name: string;
  href: string;
}

const coastalCities: AreaLink[] = [
  { name: 'Newport Beach', href: '/areas/newport-beach-mortgage-broker' },
  { name: 'Laguna Beach', href: '/areas/laguna-beach-mortgage-broker' },
  { name: 'Huntington Beach', href: '/areas/huntington-beach-mortgage-broker' },
  { name: 'Dana Point', href: '/areas/dana-point-mortgage-broker' },
  { name: 'Seal Beach', href: '/areas/seal-beach-mortgage-broker' },
];

const coreCities: AreaLink[] = [
  { name: 'Irvine', href: '/areas/irvine-mortgage-broker' },
  { name: 'Costa Mesa', href: '/areas/costa-mesa-mortgage-broker' },
  { name: 'Mission Viejo', href: '/areas/mission-viejo-mortgage-broker' },
  { name: 'Anaheim', href: '/areas/anaheim-mortgage-broker' },
  { name: 'Fullerton', href: '/areas/fullerton-mortgage-broker' },
  { name: 'Yorba Linda', href: '/areas/yorba-linda-mortgage-broker' },
  { name: 'Laguna Niguel', href: '/areas/laguna-niguel-mortgage-broker' },
  { name: 'Santa Ana', href: '/areas/santa-ana-mortgage-broker' },
  { name: 'Garden Grove', href: '/areas/garden-grove-mortgage-broker' },
  { name: 'Fountain Valley', href: '/areas/fountain-valley-mortgage-broker' },
  { name: 'Orange', href: '/areas/orange-mortgage-broker' },
  { name: 'Westminster', href: '/areas/westminster-mortgage-broker' },
];

export default function ServiceAreasGrid() {
  return (
    <section className="py-16 bg-slate-50" aria-label="Mortgage service areas across California and Washington">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Serving Communities Across California &amp; Washington
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Local mortgage expertise in Orange County and beyond. We know these markets inside and out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Coastal Cities */}
          <div>
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
              Coastal Communities
            </h3>
            <nav aria-label="Coastal service area links">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {coastalCities.map((city) => (
                  <li key={city.href}>
                    <Link
                      href={city.href}
                      className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Core OC Cities */}
          <div>
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
              Orange County Cities
            </h3>
            <nav aria-label="Orange County service area links">
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                {coreCities.map((city) => (
                  <li key={city.href}>
                    <Link
                      href={city.href}
                      className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Statewide Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/areas/california"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-600 hover:text-white transition-colors"
          >
            View All California Areas
          </Link>
          <Link
            href="/areas/washington"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-600 hover:text-white transition-colors"
          >
            View All Washington Areas
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border-2 border-slate-300 text-slate-700 font-semibold text-sm hover:border-slate-500 hover:text-slate-900 transition-colors"
          >
            About Mo Abdel
          </Link>
        </div>
      </div>
    </section>
  );
}
