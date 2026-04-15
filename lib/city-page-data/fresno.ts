import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const fresno: CityPageData = {
  citySlug: 'fresno',
  cityName: 'Fresno',
  state: 'California',
  region: 'Central Valley',
  metaTitle: 'Fresno CA Mortgage Broker | Loans, HELOC, DSCR',
  metaDescription:
    'Fresno CA mortgage broker serving Central Valley homeowners and investors. Typical home values $375K-$475K. FHA, conventional, HELOC, DSCR. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Tower District',
      blurb:
        'Historic early-1900s neighborhood west of downtown; Craftsman bungalows and small multi-unit properties, walkable retail and dining.',
    },
    {
      name: 'Woodward Park',
      blurb:
        'Northeast Fresno near the 300-acre regional park; established SFR subdivisions, popular with move-up buyers and growing families.',
    },
    {
      name: 'Sunnyside',
      blurb:
        'Historic early settlement area in east-central Fresno; mix of older SFR and newer infill, agricultural heritage still visible.',
    },
    {
      name: 'Bullard',
      blurb:
        'Established northwest Fresno neighborhood anchored by Bullard High; ranch-style and mid-century SFR, strong owner-occupancy.',
    },
    {
      name: 'Clovis border neighborhoods',
      blurb:
        'East Fresno areas adjacent to the city of Clovis; newer SFR subdivisions, good schools, popular with first-time and move-up buyers.',
    },
  ],
  typicalHomeValueRange: { min: 375_000, max: 475_000 },
  localMarketProse: [
    "Fresno is the fifth-largest city in California, with a population of roughly 542,000 anchoring the southern San Joaquin Valley. The local economy runs on a mix of education (Fresno Unified, the second-largest employer with nearly 14,000 staff), healthcare (Community Medical Centers), county and city government, Amazon fulfillment operations, and the surrounding region's large-scale agricultural production. Home prices in Fresno sit among the most affordable in California, with early-2026 medians running $375,000-$430,000 across sources and a typical Zillow ZHVI around $375,000.",
    "The Fresno housing stock is heavily weighted toward single-family detached homes, with a mix of early-20th-century bungalows in older neighborhoods (Tower District, Sunnyside) and sprawling 1980s-2000s subdivisions across the north and east sides. Most buyers in Fresno are first-time purchasers or move-up households, with a strong share of FHA loans given the affordability profile — typical down-payment profiles run 3.5-10% and credit requirements are more forgiving than coastal California markets. DSCR and investor activity is steady, with the Central Valley rental market attractive to out-of-area buyers priced out of the Bay Area and LA.",
    "What brings buyers to Fresno is a combination of dramatic affordability relative to coastal California, growing job opportunities in logistics (Amazon, Gap, and Ulta Beauty distribution centers), healthcare, and education, and a market that still offers entry-level single-family homes under $400,000 in multiple established neighborhoods. Homes sell in about 50 days on average — slower than the 2022 peak but still reasonable for a balanced market with modest forecast appreciation of 2-4% through the rest of 2026. For existing owners, HELOC and home-equity demand is steady, and DSCR refinance on investment properties is a specific Fresno-strong signal: one of the few Tier 1 cities where we see actual DSCR-investor search volume in our GSC data, reflecting the Central Valley's attractiveness to out-of-area investors priced out of the Bay Area.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What is the effective property tax rate in Fresno County?',
      answer:
        'Fresno County property tax follows the California Prop 13 base rate of 1% of assessed value, plus voter-approved local assessments. Effective rates in Fresno typically run 1.1%-1.25% of purchase price depending on the specific tax rate area. We can pull a property-specific estimate as part of your mortgage pre-approval.',
    },
    {
      question: 'Do DSCR loans work for Fresno rental properties?',
      answer:
        'Yes. DSCR (Debt Service Coverage Ratio) loans qualify investors on the property\u2019s rental income rather than personal income, making them ideal for Fresno rentals where the cap rate math pencils. We quote DSCR loans up to $2,000,000 on 1-4 unit residential rental properties in Fresno, with no tax-return income verification required for qualified investors.',
    },
    {
      question: 'Can I buy a Fresno home with FHA and 3.5% down?',
      answer:
        'Yes, and FHA is the most common path for Fresno first-time buyers given the price points. At the Fresno median of ~$400,000, 3.5% down is about $14,000. FHA credit requirements are more flexible than conventional, and at this price range PMI cost differences are smaller than on coastal properties. We quote FHA and conventional side-by-side so you can compare total cost.',
    },
  ],
};
