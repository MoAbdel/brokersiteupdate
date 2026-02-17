import Link from 'next/link';

interface AreaLink {
  name: string;
  href: string;
}

const washingtonCities: AreaLink[] = [
  { name: 'Seattle', href: '/blog/wholesale-mortgage-broker-urban-seattle-premium-2026' },
  { name: 'Bellevue', href: '/blog/wholesale-mortgage-broker-seattle-eastside-2026' },
  { name: 'Tacoma', href: '/blog/home-equity-south-sound-guide-2026' },
  { name: 'Spokane', href: '/blog/wholesale-mortgage-broker-washington-2026' },
  { name: 'Everett', href: '/blog/home-equity-north-sound-guide-2026' },
  { name: '+ All of Washington', href: '/areas/washington' },
];

const californiaCities: AreaLink[] = [
  { name: 'Los Angeles', href: '/blog/wholesale-mortgage-broker-los-angeles-guide-2026' },
  { name: 'San Diego', href: '/blog/wholesale-mortgage-broker-san-diego-guide-2026' },
  { name: 'San Francisco', href: '/blog/wholesale-mortgage-broker-bay-area-guide-2026' },
  { name: 'San Jose', href: '/blog/wholesale-mortgage-broker-tech-corridor-silicon-valley-2026' },
  { name: 'Sacramento', href: '/blog/wholesale-mortgage-broker-sacramento-guide-2026' },
  { name: 'Irvine', href: '/areas/irvine-mortgage-broker' },
  { name: 'Newport Beach', href: '/areas/newport-beach-mortgage-broker' },
  { name: 'Pasadena', href: '/blog/wholesale-mortgage-broker-pasadena-corridor-2026' },
  { name: '+ All of California', href: '/areas/california' },
];

export default function ServiceAreasGrid() {
  return (
    <section
      className="relative py-16 pb-24 bg-slate-900"
      aria-label="Mortgage service areas across California and Washington"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Serving Communities Across California &amp; Washington
          </h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Statewide mortgage expertise across California and Washington, with local-market guidance for buyers, homeowners, and investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Washington Cities */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Washington Communities
            </h3>
            <nav aria-label="Washington service area links">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {washingtonCities.map((city) => (
                  <li key={city.href}>
                    <Link
                      href={city.href}
                      className="text-white/90 hover:text-white hover:underline transition-colors text-sm font-medium"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* California Cities */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              California Communities
            </h3>
            <nav aria-label="California service area links">
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                {californiaCities.map((city) => (
                  <li key={city.href}>
                    <Link
                      href={city.href}
                      className="text-white/90 hover:text-white hover:underline transition-colors text-sm font-medium"
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
            className="inline-flex items-center px-5 py-2.5 rounded-lg border-2 border-white/80 text-white font-semibold text-sm hover:bg-white hover:text-blue-700 transition-colors"
          >
            View All California Areas
          </Link>
          <Link
            href="/areas/washington"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border-2 border-white/80 text-white font-semibold text-sm hover:bg-white hover:text-blue-700 transition-colors"
          >
            View All Washington Areas
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border-2 border-white/40 text-white/95 font-semibold text-sm hover:border-white/70 hover:text-white transition-colors"
          >
            About Mo Abdel
          </Link>
        </div>
      </div>

    </section>
  );
}
