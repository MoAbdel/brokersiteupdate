import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const olympia: CityPageData = {
  citySlug: 'olympia',
  cityName: 'Olympia',
  state: 'Washington',
  region: 'Washington',
  metaTitle: 'Olympia WA Mortgage Broker | HELOC, FHA & Home Equity',
  metaDescription:
    'Olympia WA mortgage broker serving Thurston County. Home values $480K–$580K typical. HELOC, FHA, conventional, VA. Call or text (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'South Capitol',
      blurb:
        'Historic district with tree-lined streets and 1920s Craftsman homes near the state Capitol; popular with government professionals and families seeking walkable urban living.',
    },
    {
      name: 'Eastside',
      blurb:
        'Established neighborhood with cottage and ranch-style homes close to downtown; long-term owner-occupancy rates are strong and first-time buyers are active here.',
    },
    {
      name: 'Northwest Olympia',
      blurb:
        'Wooded midcentury and modern homes with easy access to downtown and West Bay; appeals to buyers who want green space without sacrificing city proximity.',
    },
    {
      name: 'Bigelow',
      blurb:
        'Residential area north of downtown with a mix of bungalows and contemporary infill; steady appreciation driven by proximity to state-government employment centers.',
    },
    {
      name: 'Lacey-adjacent',
      blurb:
        'Growth-oriented fringe communities east of Olympia proper; newer SFR subdivisions at more accessible price points, popular with first-time buyers and young families.',
    },
  ],
  typicalHomeValueRange: { min: 480_000, max: 580_000 },
  localMarketProse: [
    "Olympia is Washington's state capital and the county seat of Thurston County, with a city population of approximately 55,600 and a metro area of roughly 300,000. State government is the dominant economic engine: Thurston County hosts more than 27,000 state-government employees, and local government adds another 12,500 jobs. Providence St. Peter Hospital, The Evergreen State College, and South Puget Sound Community College round out major employers, creating a stable, recession-resistant employment base that has historically buffered Olympia home values during national downturns. Median home prices in Olympia have run in the $510,000–$535,000 range in early 2026, up modestly year-over-year and still meaningfully below the Seattle metro.",
    "The Olympia housing stock spans from historic Craftsman bungalows and Victorian homes in South Capitol and Eastside to midcentury ramblers in Northwest Olympia and newer subdivision builds on the city's eastern fringe near Lacey and Tumwater. The buyer pool is heavily state-government employees, healthcare workers, and higher-education staff — many of whom are long-term residents who built substantial equity during the 2017–2022 price run. HELOC and home equity loan demand has been notably strong through 2026 among this cohort: public-sector workers who locked in low rates and now prefer tapping equity over refinancing. First-time buyers — particularly educators and healthcare workers — remain active using FHA and conventional products.",
    "What brings buyers to Olympia is a combination of employment stability, relative affordability versus the Seattle metro, and lifestyle draws including proximity to South Sound outdoor recreation, the Capitol campus, and a walkable downtown arts scene. Inventory in Olympia has run tight — roughly 1.9 months of supply in early 2026 — with homes selling in approximately 22 days and sale-to-list ratios near par. VA loan activity is present but lower than in Pierce County cities, reflecting the smaller military footprint. Buyers relocating from King or Pierce County for state-government roles frequently find Olympia offering meaningfully more purchasing power per dollar than commuter suburbs closer to Seattle.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What is the HELOC market like in Olympia, WA?',
      answer:
        'HELOC demand has been consistently strong in Olympia through 2026, particularly among state-government and healthcare employees who bought between 2018 and 2022 and built equity without wanting to give up their low first-mortgage rate. As a Washington-licensed broker we shop multiple wholesale lenders for Olympia homeowners and can quote HELOC lines up to $750,000. Call or text (949) 579-2057 for Olympia-specific terms.',
    },
    {
      question: 'Can I get an FHA loan in Olympia on a state-government salary?',
      answer:
        'Yes — FHA loans are available to any W-2 borrower with stable employment, including state employees. FHA requires as little as 3.5% down and carries more flexible credit guidelines than conventional loans. For Olympia buyers, FHA is often compared side-by-side with conventional 3% down or 5% down to find the lowest total monthly cost including mortgage insurance. We run both scenarios so you can choose with full information.',
    },
    {
      question: 'How competitive is the Olympia housing market in 2026?',
      answer:
        'Olympia has been a seller-leaning market in 2026: inventory sits near 1.9 months of supply, homes sell in roughly 22 days on average, and sale-to-list ratios hover near 100%. Getting pre-approved before touring homes is essential — sellers frequently receive multiple offers and will often not engage with buyers who lack a credible pre-approval letter. We issue same-day pre-approvals for qualified Olympia buyers.',
    },
  ],
};
