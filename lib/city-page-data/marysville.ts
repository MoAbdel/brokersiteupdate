import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const marysville: CityPageData = {
  citySlug: 'marysville',
  cityName: 'Marysville',
  state: 'Washington',
  region: 'Washington',
  metaTitle: 'Marysville WA Mortgage Broker | HELOC & Home Loans',
  metaDescription:
    'Marysville WA mortgage broker serving Snohomish County. Home values $560K–$680K typical. HELOC, FHA, conventional, VA. Call or text (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Sunnyside',
      blurb:
        'Established residential area in central Marysville with a mix of ramblers and two-story homes; strong school ratings and owner-occupancy rates make it a consistent first-time-buyer target.',
    },
    {
      name: 'Smokey Point',
      blurb:
        'Fast-growing north Marysville corridor with newer single-family subdivisions and convenient retail; draws buyers seeking newer construction at prices below the Everett submarket.',
    },
    {
      name: 'Downtown Marysville',
      blurb:
        'Walkable historic core with older SFR stock and local shops; entry-level price points appeal to buyers who want proximity to amenities without paying Everett premiums.',
    },
    {
      name: 'Jennings Park',
      blurb:
        'Northwest Marysville neighborhood near the Tulalip Bay corridor; quiet streets with mature landscaping and established single-family homes popular with families.',
    },
    {
      name: 'Cedarcrest',
      blurb:
        'East Marysville suburban area on Getchell Hill with newer builds and larger lots; appeals to move-up buyers seeking space and views at prices below the south Snohomish County average.',
    },
  ],
  typicalHomeValueRange: { min: 560_000, max: 680_000 },
  localMarketProse: [
    "Marysville is the second-largest city in Snohomish County with a population of approximately 76,000, representing one of the fastest-growing communities in the Puget Sound region over the past two decades. The employment base has diversified from its historic roots in lumber and agriculture: aerospace supplier C&D Zodiac, the Marysville School District, and proximity to Everett's Boeing campus drive most wage employment. The Naval Support Complex and Blue Origin's Cascade Industrial Center — which opened new facilities in 2022 — represent a newer layer of high-wage manufacturing. Home prices in Marysville have run between $560,000 and $680,000 in early 2026, higher than many buyers expect for an inland Snohomish County city.",
    "The housing stock in Marysville reflects its growth arc: older bungalows and ramblers in the downtown and Jennings Park areas contrast with sprawling suburban subdivisions in Smokey Point and Cedarcrest that were built out during the 2000s and 2010s. Most purchase activity involves conventional loans and FHA products, with a first-time-buyer cohort drawn by relative affordability compared to Everett and south King County. Move-up buyers from Everett seeking more square footage or newer construction without paying Bellevue-area prices are also active. HELOC demand has grown steadily through 2026 as homeowners who bought during the 2019–2022 boom have accumulated meaningful equity.",
    "What draws buyers to Marysville is a combination of newer-construction inventory, I-5 access for Everett and Seattle commutes, proximity to Tulalip Resort Casino employment, and prices that remain meaningfully below Kirkland, Bothell, or Edmonds. The Smokey Point area particularly appeals to families seeking newer builds with three or four bedrooms in the low-to-mid $600s. Inventory in Marysville is competitive — roughly 1.5 to 2 months of supply — with typical days on market in the 30 to 40 day range. Sale-to-list ratios hold near 99%, and well-priced listings in sought-after subdivisions still attract multiple offers in 2026.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What conventional loan limits apply in Marysville, WA?',
      answer:
        'Marysville is in Snohomish County, which qualifies for elevated conforming loan limits due to its high-cost designation. The 2025 conforming limit for single-family homes in Snohomish County is $977,500, meaning a larger mortgage than the national baseline still qualifies for conventional rates without jumping to jumbo pricing. We confirm current limits as part of every Marysville pre-approval.',
    },
    {
      question: 'Is Marysville a good market for first-time home buyers in 2026?',
      answer:
        'Yes — Marysville offers a middle ground between affordability and newer construction inventory that is harder to find in south Snohomish County cities. FHA loans (3.5% down) and conventional 3% down programs are both available for Marysville purchases. We walk first-time buyers through down payment assistance programs available in Washington State alongside the loan options to find the lowest out-of-pocket path to ownership. Call or text (949) 579-2057.',
    },
    {
      question: 'How does a HELOC work for a Marysville homeowner?',
      answer:
        'A HELOC is a revolving credit line secured by your home equity — you draw what you need, repay, and draw again during the draw period. For Marysville homeowners who bought before 2022 and have seen prices appreciate, a HELOC can access $100,000–$200,000 or more in equity at rates well below personal loan or credit card products, while leaving your original mortgage rate untouched. We quote multiple wholesale lenders to find the best Marysville HELOC terms.',
    },
  ],
};
