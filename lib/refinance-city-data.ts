/* ---------------------------------------------------------------------------
 * refinance-city-data.ts
 * Data constants for 8 Orange County cities used by the refinance city page
 * template.  Each entry carries refinance-specific fields (equity, loan range,
 * neighborhoods, market context) that go beyond the base geo-data/cities.ts
 * records.
 * --------------------------------------------------------------------------- */

export interface RefinanceCityData {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  population: number;
  medianHomeValue: number;
  medianEquity: number;
  conformingLimit: number;
  typicalLoanRange: { min: number; max: number };
  topNeighborhoods: string[];
  avgPropertyTaxRate: number;
  /** One unique sentence per city — avoids templated language. */
  marketContext: string;
}

/** 2025 FHFA high-cost conforming loan limit for Orange County. */
export const OC_CONFORMING_LIMIT = 1_209_750;

export const REFINANCE_CITIES: RefinanceCityData[] = [
  // ── Irvine ──────────────────────────────────────────────────────────────────
  {
    name: 'Irvine',
    slug: 'irvine',
    lat: 33.6846,
    lng: -117.8265,
    population: 307_670,
    medianHomeValue: 1_350_000,
    medianEquity: 810_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 400_000, max: 1_200_000 },
    topNeighborhoods: [
      'Northwood',
      'Quail Hill',
      'Woodbridge',
      'Turtle Rock',
      'University Park',
    ],
    avgPropertyTaxRate: 0.67,
    marketContext:
      "Irvine's master-planned communities and top-rated school district drive consistent demand, making refinance timing less sensitive to seasonal inventory swings.",
  },

  // ── Mission Viejo ───────────────────────────────────────────────────────────
  {
    name: 'Mission Viejo',
    slug: 'mission-viejo',
    lat: 33.6,
    lng: -117.672,
    population: 95_290,
    medianHomeValue: 1_050_000,
    medianEquity: 630_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 350_000, max: 950_000 },
    topNeighborhoods: [
      'Lake Mission Viejo',
      'Aegean Hills',
      'Deane Homes',
      'Bel Aire',
    ],
    avgPropertyTaxRate: 0.67,
    marketContext:
      'Mission Viejo homeowners who bought before 2022 are sitting on six-figure equity gains, positioning them well for cash-out refinancing at current wholesale rates.',
  },

  // ── Laguna Niguel ───────────────────────────────────────────────────────────
  {
    name: 'Laguna Niguel',
    slug: 'laguna-niguel',
    lat: 33.5225,
    lng: -117.7076,
    population: 65_100,
    medianHomeValue: 1_200_000,
    medianEquity: 720_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 400_000, max: 1_100_000 },
    topNeighborhoods: [
      'Monarch Summit',
      'Bear Brand Ranch',
      'Kite Hill',
      'Niguel Summit',
    ],
    avgPropertyTaxRate: 0.67,
    marketContext:
      "Laguna Niguel's hillside properties and ocean-proximity premium mean most homeowners carry jumbo-eligible loan balances ideal for wholesale rate competition.",
  },

  // ── Dana Point ──────────────────────────────────────────────────────────────
  {
    name: 'Dana Point',
    slug: 'dana-point',
    lat: 33.4672,
    lng: -117.6981,
    population: 33_700,
    medianHomeValue: 1_450_000,
    medianEquity: 870_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 500_000, max: 1_200_000 },
    topNeighborhoods: [
      'Lantern Village',
      'Monarch Beach',
      'Capistrano Beach',
      'Harbor area',
    ],
    avgPropertyTaxRate: 0.67,
    marketContext:
      "Dana Point's coastal location and limited buildable land create sustained appreciation, giving homeowners strong equity positions for both cash-out and rate-and-term refinancing.",
  },

  // ── San Clemente ────────────────────────────────────────────────────────────
  {
    name: 'San Clemente',
    slug: 'san-clemente',
    lat: 33.427,
    lng: -117.612,
    population: 64_800,
    medianHomeValue: 1_300_000,
    medianEquity: 780_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 450_000, max: 1_150_000 },
    topNeighborhoods: [
      'Forster Ranch',
      'Talega',
      'San Clemente Pier area',
      'Sea Summit',
    ],
    avgPropertyTaxRate: 0.67,
    marketContext:
      "San Clemente's position at the southern tip of Orange County attracts homeowners who prioritize lifestyle over commute, and many refinance to fund renovations that maximize their coastal premium.",
  },

  // ── Lake Forest ─────────────────────────────────────────────────────────────
  {
    name: 'Lake Forest',
    slug: 'lake-forest',
    lat: 33.6469,
    lng: -117.6891,
    population: 85_900,
    medianHomeValue: 950_000,
    medianEquity: 570_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 300_000, max: 850_000 },
    topNeighborhoods: [
      'Foothill Ranch',
      'Baker Ranch',
      'Portola Hills',
      'El Toro area',
    ],
    avgPropertyTaxRate: 0.67,
    marketContext:
      'Lake Forest offers strong conventional refinance opportunities because most homes fall between $800K and $1.1M — well within conforming jumbo limits where wholesale pricing is most competitive.',
  },

  // ── Aliso Viejo ─────────────────────────────────────────────────────────────
  {
    name: 'Aliso Viejo',
    slug: 'aliso-viejo',
    lat: 33.5676,
    lng: -117.7256,
    population: 51_400,
    medianHomeValue: 900_000,
    medianEquity: 540_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 280_000, max: 800_000 },
    topNeighborhoods: ['Pacific Park', 'Glenwood', 'Vantis', 'Wood Canyon'],
    avgPropertyTaxRate: 0.67,
    marketContext:
      "Aliso Viejo's younger housing stock and strong HOA communities mean many homeowners still carry their original purchase mortgages from 2018\u20132021 \u2014 a prime rate-and-term refinance window.",
  },

  // ── Yorba Linda ─────────────────────────────────────────────────────────────
  {
    name: 'Yorba Linda',
    slug: 'yorba-linda',
    lat: 33.8886,
    lng: -117.8131,
    population: 68_300,
    medianHomeValue: 1_100_000,
    medianEquity: 660_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 350_000, max: 1_000_000 },
    topNeighborhoods: [
      'Black Gold',
      'Yorba Linda Estates',
      'Hidden Hills',
      'Travis Ranch',
    ],
    avgPropertyTaxRate: 0.67,
    marketContext:
      "Yorba Linda's horse-country estates and larger lot sizes push many properties above the conforming limit, where wholesale broker access to jumbo lenders delivers measurably better pricing than retail banks.",
  },
];
