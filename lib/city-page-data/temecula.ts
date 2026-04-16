import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const temecula: CityPageData = {
  citySlug: 'temecula',
  cityName: 'Temecula',
  state: 'California',
  region: 'Inland Empire',
  metaTitle: 'Temecula CA Mortgage Broker | FHA, VA, Jumbo Loans',
  metaDescription:
    'Temecula CA mortgage broker for wine country homebuyers. Home values $650K-$800K. FHA, conventional, VA, jumbo, Mello-Roos guidance. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Harveston',
      blurb:
        'Master-planned community in north Temecula with a private lake, parks, and strong HOA amenities; newer SFR and attached product, popular with young families.',
    },
    {
      name: 'Redhawk',
      blurb:
        'Southwest Temecula neighborhood built around a golf course; mid-2000s SFR ranging from 1,800-3,200 sq ft, consistent resale activity and move-up demand.',
    },
    {
      name: 'Wolf Creek',
      blurb:
        'South Temecula master-planned area with community pool and park amenities; newer single-family inventory, popular with buyers relocating from San Diego County.',
    },
    {
      name: 'Old Town adjacent neighborhoods',
      blurb:
        'Established residential areas near historic Old Town Temecula; mix of older SFR and newer infill, walkable to the Promenade and Old Town dining.',
    },
    {
      name: 'De Luz / Wine Country fringe',
      blurb:
        'Rural-residential corridor west of the 15 near the wine country; larger parcels, custom homes, and rural lifestyle properties at the top of the Temecula value range.',
    },
  ],
  typicalHomeValueRange: { min: 650_000, max: 800_000 },
  localMarketProse: [
    "Temecula is a city of roughly 115,000 in southwestern Riverside County, positioned along the 15 freeway corridor between the Inland Empire and San Diego. The local economy blends retail and hospitality (driven by the Temecula Valley wine country and Old Town tourism), healthcare (Temecula Valley Hospital and Loma Linda University Health), Temecula Valley Unified School District, and a growing base of professional and technology employers. The city's location — roughly 60 miles from downtown San Diego and 85 from Los Angeles — makes it a popular destination for remote workers and hybrid-schedule commuters seeking lower prices than San Diego County.",
    "Temecula's typical home value in early 2026 runs $680,000-$760,000, a market that continues to attract relocation demand from San Diego buyers priced above $900,000 in comparable zip codes. The housing stock is predominantly post-1990 master-planned single-family detached homes, with most communities carrying HOA fees and a meaningful share of subdivisions subject to Mello-Roos (CFD) assessments — a Temecula-specific cost consideration that can add $150-$500 per month to carrying costs depending on the district and remaining term. Conventional conforming loans dominate purchase volume. VA loans are active given Temecula's veteran population. FHA is used less frequently than in lower-priced IE cities because median prices approach or exceed the Riverside County FHA limit.",
    "What brings buyers to Temecula is a combination of lifestyle amenities (wine country, Old Town, parks), quality schools, and pricing that remains roughly 25-35% below comparable homes in North San Diego County communities like Carlsbad or San Marcos. Homes typically sit on market 35-55 days in early 2026 — a balanced pace that has stabilized after the 2022 rate shock. The most important mortgage question unique to Temecula is Mello-Roos: buyers must know the specific CFD schedule for any property before making an offer, as expired versus active CFD assessments can swing monthly carrying cost by hundreds of dollars. We always surface the full CFD payoff status during pre-approval for Temecula purchase clients.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What are Mello-Roos fees and how do they affect my Temecula mortgage?',
      answer:
        'Mello-Roos (CFD) fees are special assessments levied on homes in planned communities to fund infrastructure and schools. In Temecula, active CFD assessments typically run $150-$500 per month and are collected on your property tax bill. They expire when the bond is paid off — some Temecula CFDs are retired, others run 20-30 more years. We pull the exact CFD schedule for every Temecula property during pre-approval so you understand total housing cost before making an offer.',
    },
    {
      question: 'Can I use a VA loan to buy in Temecula?',
      answer:
        'Yes. VA loans are a strong fit for Temecula given the city\'s veteran population and the fact that VA financing has no loan limit for eligible borrowers with full entitlement. Temecula home prices at $680K-$760K are well within reach on VA with zero down. VA also has no PMI, which saves $200-$400 per month compared to low-down-payment conventional. We originate VA purchase loans and VA cash-out refinance in Temecula and can pre-approve VA borrowers quickly.',
    },
    {
      question: 'Is a jumbo loan needed for Temecula homes?',
      answer:
        'Not always. The conventional conforming loan limit in Riverside County is $806,500 in 2026, which covers most Temecula transactions. Homes above that threshold require a jumbo loan, which carries slightly different underwriting criteria. If your Temecula purchase price is under $806,500 and you have 10-20% down, conventional conforming is usually the most efficient path. Call or text (949) 579-2057 and we will quote both conventional and jumbo options if your price range straddles the limit.',
    },
  ],
};
