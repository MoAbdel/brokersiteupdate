import LoanCapSubheadline from '@/components/LoanCapSubheadline';
import { formatCap } from '@/lib/loan-caps';

export interface CityPageData {
  citySlug: string;
  cityName: string;
  state: 'California' | 'Washington';
  region: string;
  metaTitle: string;
  metaDescription: string;
  midTierNeighborhoods: Array<{ name: string; blurb: string }>;
  typicalHomeValueRange: { min: number; max: number };
  localMarketProse: string;
  faqOverrides?: Array<{ question: string; answer: string }>;
}

interface Props {
  city: CityPageData;
  nearbyCities?: Array<{ citySlug: string; cityName: string; state: string }>;
}

const dollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

/**
 * Product-led city page template.
 * Hero → product grid → neighborhoods → local-market prose → FAQ → nearby cities → CTA.
 * Caps pulled from @/lib/loan-caps — authors do not restate them.
 */
export default function ProductLedCityTemplate({ city, nearbyCities = [] }: Props) {
  const regions = [city.state];
  const proseParagraphs = city.localMarketProse.split(/\n\n+/).filter(Boolean);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 md:py-12">
      <section className="hero">
        <h1 className="text-3xl md:text-5xl font-bold">
          {city.cityName} Mortgage Broker
        </h1>
        <LoanCapSubheadline
          productLabel="Jumbo Loans"
          product="jumbo"
          regions={regions}
        />
        <p className="mt-4 text-slate-700">
          Typical home values in {city.cityName}: {dollar.format(city.typicalHomeValueRange.min)}–{dollar.format(city.typicalHomeValueRange.max)}.
        </p>
      </section>

      <section className="products grid gap-4 md:grid-cols-2 mt-12">
        <ProductCard title="HELOC" maxDisplay={formatCap('heloc')} href="/heloc-orange-county" />
        <ProductCard title="Cash-Out Refinance" maxDisplay={formatCap('cashOut')} href="/cash-out-refinance" />
        <ProductCard title="Conventional" maxDisplay={formatCap('conventional')} href="/conventional-loans-orange-county" />
        <ProductCard title="DSCR Investment" maxDisplay={formatCap('dscr')} href="/loan-programs/dscr-investment-loans" />
      </section>

      <section className="neighborhoods mt-12">
        <h2 className="text-2xl font-semibold">{city.cityName} Neighborhoods We Serve</h2>
        <ul className="mt-4 space-y-2">
          {city.midTierNeighborhoods.map((n) => (
            <li key={n.name}>
              <strong>{n.name}</strong> — {n.blurb}
            </li>
          ))}
        </ul>
      </section>

      <section className="local-market mt-12">
        <h2 className="text-2xl font-semibold">Mortgage landscape in {city.cityName}</h2>
        <div className="mt-4 space-y-4 text-slate-700">
          {proseParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {city.faqOverrides && city.faqOverrides.length > 0 && (
        <section className="faq mt-12">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-3">
            {city.faqOverrides.map((f) => (
              <details key={f.question} className="border border-slate-200 rounded p-4">
                <summary className="font-medium cursor-pointer">{f.question}</summary>
                <p className="mt-2 text-slate-700">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {nearbyCities.length > 0 && (
        <section className="nearby-cities mt-12">
          <h2 className="text-2xl font-semibold">Nearby cities we serve</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {nearbyCities.map((n) => (
              <li key={n.citySlug}>
                <a href={`/areas/${n.citySlug}`} className="text-blue-700 hover:underline">
                  {n.cityName}, {n.state}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="cta mt-12 rounded-lg bg-blue-50 p-6 md:p-8 text-center">
        <h2 className="text-2xl font-semibold">Ready to start your {city.cityName} mortgage?</h2>
        <p className="mt-2 text-slate-700">
          Licensed in {city.state}. Call or text (949) 579-2057 or get started online.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-blue-700 text-white font-semibold rounded px-6 py-3 hover:bg-blue-800 transition-colors"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}

interface ProductCardProps { title: string; maxDisplay: string; href: string; }
function ProductCard({ title, maxDisplay, href }: ProductCardProps) {
  return (
    <a href={href} className="block border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-slate-600">Up to {maxDisplay}</p>
    </a>
  );
}
