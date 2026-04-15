import LoanCapSubheadline from '@/components/LoanCapSubheadline';
import { formatCap } from '@/lib/loan-caps';

export interface CityPageData {
  citySlug: string;
  cityName: string;
  state: 'California' | 'Washington';
  midTierNeighborhoods: Array<{ name: string; blurb: string }>;
  typicalHomeValueRange: { min: number; max: number };
  faqOverrides?: Array<{ question: string; answer: string }>;
}

interface Props {
  city: CityPageData;
}

/**
 * Product-led city page template.
 * Hero → product grid (HELOC, Cash-Out, Conventional, DSCR) → neighborhoods → FAQ → CTA.
 * Caps pulled from @/lib/loan-caps — authors do not restate them.
 */
export default function ProductLedCityTemplate({ city }: Props) {
  const regions = [city.state];

  return (
    <main>
      <section className="hero">
        <h1 className="text-3xl md:text-5xl font-bold">
          {city.cityName} Mortgage Broker
        </h1>
        <LoanCapSubheadline
          productLabel="Jumbo Loans"
          product="jumbo"
          regions={regions}
        />
      </section>

      <section className="products grid gap-4 md:grid-cols-2 mt-12">
        <ProductCard title="HELOC" maxDisplay={formatCap('heloc')} href="/heloc-orange-county" />
        <ProductCard title="Cash-Out Refinance" maxDisplay={formatCap('cashOut')} href="/cash-out-refinance" />
        <ProductCard title="Conventional" maxDisplay={formatCap('conventional')} href="/conventional-loans-orange-county" />
        <ProductCard title="DSCR Investment" maxDisplay={formatCap('dscr')} href="/loan-programs/dscr-investment-loans" />
      </section>

      <section className="neighborhoods mt-12">
        <h2 className="text-2xl font-semibold">{city.cityName} Neighborhoods We Serve</h2>
        <ul>
          {city.midTierNeighborhoods.map((n) => (
            <li key={n.name}>
              <strong>{n.name}</strong> — {n.blurb}
            </li>
          ))}
        </ul>
      </section>

      {city.faqOverrides && city.faqOverrides.length > 0 && (
        <section className="faq mt-12">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          {city.faqOverrides.map((f) => (
            <details key={f.question}>
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </section>
      )}
    </main>
  );
}

interface ProductCardProps {
  title: string;
  maxDisplay: string;
  href: string;
}

function ProductCard({ title, maxDisplay, href }: ProductCardProps) {
  return (
    <a href={href} className="block border rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-slate-600">Up to {maxDisplay}</p>
    </a>
  );
}
