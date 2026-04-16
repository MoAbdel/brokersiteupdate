import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const whittier: CityPageData = {
  citySlug: 'whittier',
  cityName: 'Whittier',
  state: 'California',
  region: 'LA',
  metaTitle: 'Whittier CA Mortgage Broker | FHA, VA, Conventional',
  metaDescription:
    'Whittier CA mortgage broker serving LA County homebuyers. Typical home values $790K-$850K. FHA, VA, HELOC, cash-out refinance. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Uptown Whittier',
      blurb:
        'Traditional central business district around Philadelphia Street and Greenleaf Avenue; Craftsman bungalows and Spanish Colonial Revival homes popular with first-time buyers.',
    },
    {
      name: 'Friendly Hills',
      blurb:
        'Established hillside community dating to 1949 with large single-family homes, low crime, and trail access through Murphy Ranch Park; strong owner-occupancy and highly sought-after.',
    },
    {
      name: 'Hadley Hills',
      blurb:
        'Mid-century SFR neighborhood with 1940s-1970s cottages, ranch-style, and traditional designs; adjacent to Turnbull Canyon trails and considered one of Whittier best-kept secrets.',
    },
    {
      name: 'College Hills',
      blurb:
        'Residential area surrounding Whittier College; mix of bungalows and modest SFR popular with families and investors drawn to proximity to campus employment and transit.',
    },
    {
      name: 'East Whittier',
      blurb:
        'Suburban residential tracts east of Whittier Boulevard; post-war and 1960s-1970s SFR on larger lots, often the most attainable price point for first-time buyers entering the market.',
    },
  ],
  typicalHomeValueRange: { min: 790_000, max: 850_000 },
  localMarketProse: [
    "Whittier is a city of approximately 87,000 in southeast Los Angeles County, historically known as the childhood home of President Richard Nixon and as a Quaker-founded community with a strong civic identity. The largest employers are Presbyterian Intercommunity Hospital (2,600 employees), Whittier Union High School District (950), Whittier Hospital Medical Center (850), Whittier City School District (720), and the City of Whittier (621). A significant share of Whittier residents commute to central LA, Orange County, or the 605-corridor employment centers via the San Gabriel River Freeway, which bisects the city.",
    "The Whittier housing market in early 2026 shows median sale prices in the $790,000-$850,000 range, reflecting a steady 1-2% year-over-year appreciation rate. The housing stock is a mix of post-war bungalows, Craftsman-era SFR in Uptown and College Hills, and larger mid-century homes in Friendly Hills and Hadley Hills. Most first-time buyers in Whittier use conventional loans with 5-10% down or FHA with 3.5% down; at these price points, both conforming conventional (up to $806,500) and FHA loans are viable depending on credit and down payment. Homes typically sell within 30-40 days at or near list price, with inventory running tight at under one month of supply.",
    "What brings buyers to Whittier is a compelling combination: relative affordability compared to neighboring communities like La Habra Heights and Hacienda Heights, walkable historic neighborhoods, and multiple freeway connections to both LA and Orange County job markets. The Friendly Hills and Hadley Hills neighborhoods offer mid-century character and trail access at prices well below comparable hill neighborhoods in Pasadena or Monterey Park. Property tax questions are the most consistent GSC search signal we see from Whittier-area users, reflecting buyers who want to accurately model total carrying costs. For existing owners, HELOC demand has been steady in 2026, particularly among homeowners who bought 2018-2022 and now hold equity they want to deploy for kitchen or ADU projects without refinancing a favorable first-lien rate.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What is the property tax rate in Whittier, CA?',
      answer:
        'Whittier follows the LA County base rate of 1% of assessed value under Proposition 13, plus local voter-approved assessments. Effective rates typically run 1.1%-1.25% of purchase price. On an $820,000 home that is roughly $9,020-$10,250 per year, or about $750-$855 per month added to housing costs. We pull a property-specific estimate during pre-approval so you can model total monthly payments accurately.',
    },
    {
      question: 'Can I buy in Whittier with a conventional or FHA loan?',
      answer:
        'Yes. At Whittier medians of $790K-$850K, both options work. Conventional conforming loans go up to $806,500 in LA County, covering most Whittier purchases with 5-10% down. FHA loans (3.5% down, more flexible credit) are capped at $1,149,825 in LA County for 2026, so both programs are accessible here. We compare monthly payments and total costs for both side-by-side at no charge.',
    },
    {
      question: 'Is a HELOC or cash-out refinance better for a Whittier homeowner?',
      answer:
        'If your first-mortgage rate is below 5%, a HELOC almost always wins. Whittier owners who bought 2018-2022 typically hold $150,000-$300,000 in equity and can access it via HELOC without touching their primary rate. Cash-out refinancing makes sense primarily when your current rate is already above 6.5%. Call or text (949) 579-2057 and we will model both options with current numbers so you can make an informed choice.',
    },
  ],
};
