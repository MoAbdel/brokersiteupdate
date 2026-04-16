import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const missionViejo: CityPageData = {
  citySlug: 'mission-viejo',
  cityName: 'Mission Viejo',
  state: 'California',
  region: 'OC',
  metaTitle: 'Mission Viejo CA Mortgage Broker | Loans & Refinance',
  metaDescription:
    'Mission Viejo CA mortgage broker serving South Orange County. Home values $850K-$1.15M typical. Conventional, FHA, VA, HELOC, cash-out. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Mission Viejo Central',
      blurb:
        'Core residential area surrounding Marguerite Parkway; established single-family streets with mature landscaping, strong owner-occupancy, and convenient access to Saddleback College.',
    },
    {
      name: 'Casta del Sol',
      blurb:
        'Active-adult 55+ community with single-story homes and extensive HOA amenities; consistent resale demand from move-down buyers and retirees relocating within Orange County.',
    },
    {
      name: 'Melinda Heights',
      blurb:
        'Well-kept tract homes in the northern part of the city near Trabuco Hills High School; popular with families seeking rated-school access and larger lot sizes relative to price.',
    },
    {
      name: 'La Paz',
      blurb:
        'Established neighborhood close to Lake Mission Viejo membership access and local retail; mix of two-story SFR and townhomes with steady resale activity for move-up buyers.',
    },
    {
      name: 'Painted Trails',
      blurb:
        'Newer planned community in southeast Mission Viejo; Spanish-tile-roof SFR with community parks and trails, popular with younger families priced out of more expensive South OC cities.',
    },
  ],
  typicalHomeValueRange: { min: 850_000, max: 1_150_000 },
  localMarketProse: [
    "Mission Viejo is a master-planned city of about 93,600 residents in South Orange County's Saddleback Valley, incorporated in 1988 after decades of development by Mission Viejo Company. The local economy draws on a diverse employer base: Mission Hospital is the largest single employer with nearly 2,800 staff, followed by Saddleback College (1,400+), Saddleback Valley Unified School District, and corporate tenants including James Hardie Building Products and Marie Callender's corporate support center. The city's Marguerite Parkway and La Paz Road corridors host retail, medical offices, and professional services that provide stable local employment.",
    "The Mission Viejo housing market in early 2026 shows a median sale price around $1.1 million for all property types — single-family detached homes sit closer to $1.15 million while condos and townhomes trade in the $690K-$800K range, giving first-time and move-up buyers meaningful entry points below the city median. Days on market average 31, sale-to-list ratios run above 101%, and roughly 40% of homes close above asking, reflecting tight inventory. Purchase activity skews toward conventional loans with 10-20% down, with FHA volume concentrated in the condo and townhome segments. HELOC demand is robust among the large share of homeowners who purchased before 2022 and have accumulated significant equity.",
    "Buyers choose Mission Viejo for its consistently top-rated schools in the Saddleback Valley Unified School District, low crime rates, Lake Mission Viejo recreational membership, and a suburban environment that remains more affordable than Dana Point or San Clemente. The city's proximity to the 5 and 241 corridors makes it a practical base for commuters to Irvine, Costa Mesa, and San Diego County employers. Homeowners researching refinance options in 2026 are mostly weighing HELOCs and cash-out refinances to fund renovations while preserving their lower first-mortgage rate — a pattern consistent across South Orange County move-up markets.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What are current mortgage rates for Mission Viejo buyers in 2026?',
      answer:
        'Mortgage rates for Mission Viejo buyers in 2026 depend on loan type, down payment, and credit profile. Conventional 30-year rates for well-qualified borrowers have been running in the mid-to-upper 6% range. FHA rates are similar but come with mortgage insurance. Jumbo rates (for loans above the $1,209,750 OC conforming limit) run slightly higher. Call or text (949) 579-2057 for a live rate quote specific to your Mission Viejo purchase or refinance.',
    },
    {
      question: 'What loan programs work best for first-time buyers in Mission Viejo?',
      answer:
        'With median prices around $1.1M, many first-time buyers in Mission Viejo focus on condos and townhomes in the $700K-$850K range where FHA (3.5% down) and conventional (5% down) loans are both viable. CalHFA down-payment assistance can layer on top for buyers who qualify on income limits. Buyers targeting SFR homes typically need conventional or jumbo financing with 10-20% down. We run side-by-side comparisons so you can see real monthly payment differences.',
    },
    {
      question: 'Should I use a HELOC or cash-out refinance on my Mission Viejo home?',
      answer:
        'If your first mortgage rate is below 5% — very common for Mission Viejo owners who bought or refinanced in 2020-2022 — a HELOC is almost always the better choice. It lets you access equity without touching your low primary rate. A cash-out refinance makes more sense if your existing rate is already above 6.5% and consolidating makes the math work. Call (949) 579-2057 for a Mission Viejo-specific side-by-side comparison.',
    },
  ],
};
