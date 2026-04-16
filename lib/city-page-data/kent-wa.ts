import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const kentWa: CityPageData = {
  citySlug: 'kent-wa',
  cityName: 'Kent',
  state: 'Washington',
  region: 'Washington',
  metaTitle: 'Kent WA Mortgage Broker | HELOC, FHA & Conventional Loans',
  metaDescription:
    'Kent WA mortgage broker serving King County. Home values $570K–$680K typical. HELOC, FHA, conventional, VA. Boeing, Amazon hub. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'East Hill',
      blurb:
        'Kent\'s largest residential area on the eastern ridge with family-friendly streets, strong school access, and a mix of ramblers from the 1970s through newer 2020s infill developments.',
    },
    {
      name: 'West Hill',
      blurb:
        'Southwest Kent neighborhood with Olympic Mountain views and quick I-5 access; single-family homes appeal to commuters heading north toward Sea-Tac or south toward Tacoma.',
    },
    {
      name: 'Downtown Kent',
      blurb:
        'Historic core with older SFR stock, walkable retail, and Sound Transit light rail access; entry-level pricing and transit connectivity make it popular with first-time buyers.',
    },
    {
      name: 'Scenic Hill',
      blurb:
        'Southeast Kent elevated neighborhood with Green River valley views; established single-family homes with larger lots appeal to move-up buyers seeking space and scenery.',
    },
    {
      name: 'Panther Lake',
      blurb:
        'Northeast Kent community bordering Covington with newer subdivision inventory; draws families seeking larger homes at prices below the Renton or Bellevue submarket.',
    },
  ],
  typicalHomeValueRange: { min: 570_000, max: 680_000 },
  localMarketProse: [
    "Kent is the sixth-most populous city in Washington with approximately 137,000 residents, anchored by one of the most significant manufacturing and logistics corridors in the Pacific Northwest. Amazon, Boeing, and Blue Origin all maintain large operations in the Kent Valley — Amazon with 3,073 employees, Boeing with 2,522, and Blue Origin with 1,600 — ranking Kent's warehouse and industrial market fourth nationally by volume. This dense concentration of high-wage manufacturing and distribution jobs creates a broad and stable buyer pool spanning production workers, engineers, and logistics professionals. Home prices in Kent ranged from the upper $570s to the mid-$680s in early 2026, reflecting King County's conforming-loan-limit territory.",
    "Kent's housing stock divides geographically: the West Hill and East Hill residential areas are predominantly single-family homes ranging from 1960s ramblers to newer 2020s subdivisions, while the Kent Valley floor is primarily industrial and commercial. Most buyers target East Hill for its school ratings and suburban character or West Hill for commute convenience. VA loans are present but not dominant — the military footprint near Kent is smaller than in Pierce County cities. FHA and conventional products dominate purchase activity, with first-time buyers drawn by prices below Renton or Bellevue and move-up buyers from neighboring Auburn or Federal Way seeking newer inventory. HELOC demand has accelerated through 2026 as Kent homeowners tap equity accumulated since 2019.",
    "What brings buyers to Kent is a combination of employment proximity to some of the region's largest private employers — particularly Amazon's fulfillment network and Boeing's composite manufacturing — reasonable pricing within King County's borders, and Sound Transit light rail access for Seattle commuters. The Kent Station on the Sounder and Link rail network connects riders to downtown Seattle without needing to drive I-5 through the congestion. Inventory in Kent runs 1.5 to 2 months of supply, with homes selling in 30 to 40 days and sale-to-list ratios holding near 99%. The market has absorbed some moderation from the 2022 peak but remains fundamentally strong, sustained by the continuing employment expansion of its anchor industrial tenants.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What are the conforming loan limits for Kent, WA in 2026?',
      answer:
        'Kent is in King County, Washington, which qualifies as a high-cost area under FHFA guidelines. The 2025 conforming loan limit for a single-family home in King County is $977,500 — well above the national baseline of $806,500 — meaning most Kent purchases qualify for conventional loan rates without crossing into jumbo pricing. We confirm current limits as part of every Kent pre-approval. Call or text (949) 579-2057.',
    },
    {
      question: 'Can Amazon or Boeing employees in Kent qualify for a home loan with variable income?',
      answer:
        'Yes — bonus income, overtime, and RSU grants can all be included in qualifying income if properly documented over a two-year history. Amazon employees with restricted stock unit (RSU) vesting schedules, or Boeing workers with consistent overtime, can substantially boost their qualifying income when lenders apply the standard 24-month average methodology. We work through income documentation upfront so Kent buyers arrive at offer time with an accurate pre-approval.',
    },
    {
      question: 'Is a HELOC available for Kent homeowners who bought before 2022?',
      answer:
        'Yes — Kent homeowners who purchased in the 2018–2022 window and preserved a low first-mortgage rate have typically built $150,000–$250,000 in equity as prices appreciated. A HELOC lets you access that equity as a revolving line of credit while keeping your original mortgage intact. We shop multiple wholesale lenders for Kent HELOCs and can often quote same-week terms for qualified borrowers.',
    },
  ],
};
