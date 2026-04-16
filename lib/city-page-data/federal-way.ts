import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const federalWay: CityPageData = {
  citySlug: 'federal-way',
  cityName: 'Federal Way',
  state: 'Washington',
  region: 'Washington',
  metaTitle: 'Federal Way WA Mortgage Broker | HELOC, VA & FHA Loans',
  metaDescription:
    'Federal Way WA mortgage broker in King County. Home values $530K–$640K typical. HELOC, VA, FHA, conventional. Between Seattle and Tacoma. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Twin Lakes',
      blurb:
        'Planned community from the 1960s centered around two lakes with Puget Sound and Olympic Mountain views; a mix of split-levels, ranch homes, and larger SFR properties with recreational appeal.',
    },
    {
      name: 'Steel Lake',
      blurb:
        'Established residential area surrounding a 250-acre lake with park access and private dock properties; well-maintained single-family homes in a suburban setting popular with families.',
    },
    {
      name: 'Dash Point',
      blurb:
        'Southern Federal Way neighborhood near Dash Point State Park with Puget Sound beach access; quiet streets and single-family homes attract buyers seeking nature proximity within the city.',
    },
    {
      name: 'Federal Way City Center',
      blurb:
        'Urban core with newer mixed-use development, transit access, and emerging condo and townhome inventory; appealing to commuters and buyers seeking lower maintenance ownership.',
    },
    {
      name: 'Camelot',
      blurb:
        'Eastern Federal Way suburban area with 1990s-era single-family homes and school access; practical for households seeking mid-range pricing between Seattle and Tacoma commutes.',
    },
  ],
  typicalHomeValueRange: { min: 530_000, max: 640_000 },
  localMarketProse: [
    "Federal Way is the tenth-most populous city in Washington with approximately 101,000 residents, positioned along Interstate 5 between Seattle (roughly 25 miles north) and Tacoma (roughly 20 miles south) in the southwest corner of King County. The employment base blends local anchors — Federal Way Public Schools (2,349 employees), World Vision International (1,712), and CHI Franciscan St. Francis Hospital (996) — with a large commuter population that works in Seattle, Tacoma, and the Sea-Tac Airport corridor. The city's pricing sweet spot, with typical home values in the $530,000–$640,000 range in early 2026, reflects its dual identity as both a standalone community and a cost-efficient commuter suburb relative to northern King County markets.",
    "Federal Way's housing stock is predominantly mid-to-late 20th century single-family homes, ranging from 1960s planned communities like Twin Lakes to 1990s tract subdivisions in Camelot and eastern Federal Way. VA loans represent a meaningful share of purchase activity: the city's proximity to JBLM and Naval Station Everett, combined with I-5 access to multiple military installations, means qualified veterans and active-duty families use Federal Way as an affordable alternative to more expensive Pierce and King County cities. First-time buyers using conventional and FHA products are also active, drawn by prices well below Renton, Bellevue, or south Seattle. HELOC demand has been building as owners who purchased before 2022 access accumulated equity.",
    "What draws buyers to Federal Way is a combination of mid-range pricing within reach of two major job markets, the Sound Transit light rail extension opening Federal Way Station (connecting directly to Seattle), and recreational access to Dash Point State Park and Puget Sound beaches. The light rail connection meaningfully expands Federal Way's commuter appeal for Seattle-bound workers who previously faced only an I-5 drive or bus options. Inventory in Federal Way runs tight — typically 1.5 to 2 months of supply — with homes selling in 20 to 35 days. Sale-to-list ratios hold near 99%, and the market has remained competitive through 2026 supported by sustained demand from the Seattle-to-Tacoma commuter corridor.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'Can I use a VA loan to buy a home in Federal Way?',
      answer:
        'Yes — Federal Way is a strong VA-loan market given its position between JBLM to the south and Naval Station Everett to the north, plus easy I-5 access to multiple military installations. VA loans offer 0% down, no PMI, and competitive rates for qualifying veterans and active-duty service members. We quote VA alongside FHA and conventional for every Federal Way buyer so you can compare real monthly costs. Call or text (949) 579-2057.',
    },
    {
      question: 'How does the Sound Transit light rail extension affect Federal Way home values?',
      answer:
        'The Federal Way Link Extension brings light rail service directly from Federal Way to Seattle, significantly cutting commute time for Seattle-employed buyers. Transit access of this kind historically correlates with accelerated home value appreciation in the station corridors. Buyers purchasing near the Federal Way Transit Center today may benefit from additional demand as the line reaches full ridership. We factor transit proximity into our assessment of specific Federal Way properties.',
    },
    {
      question: 'Is a HELOC or home equity loan better for my Federal Way home?',
      answer:
        'A HELOC gives you flexible revolving access to equity — draw when you need it, repay, and draw again — at a variable rate. A home equity loan (HELOAN) delivers a fixed lump sum at a locked rate, better for a single large expense like a full renovation or debt payoff. Federal Way homeowners who bought in 2019–2022 typically have $150,000–$250,000 in available equity. We quote both products side by side from multiple wholesale lenders so you can choose based on your actual project needs.',
    },
  ],
};
