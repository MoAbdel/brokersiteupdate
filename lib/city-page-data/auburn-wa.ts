import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const auburnWa: CityPageData = {
  citySlug: 'auburn-wa',
  cityName: 'Auburn',
  state: 'Washington',
  region: 'Washington',
  metaTitle: 'Auburn WA Mortgage Broker | HELOC, FHA & Home Loans',
  metaDescription:
    'Auburn WA mortgage broker serving King and Pierce counties. Home values $550K–$640K. HELOC, FHA, conventional, VA. Boeing hub nearby. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Lakeland Hills',
      blurb:
        'Master-planned community developed from 1985 with newer SFR inventory, community amenities, and family-oriented character; one of Auburn\'s most sought-after areas for move-up buyers.',
    },
    {
      name: 'Lea Hill',
      blurb:
        'Residential area annexed in 2007 on Auburn\'s northeastern edge; mix of established single-family homes with large lots, popular with buyers seeking more space relative to the central city.',
    },
    {
      name: 'Downtown Auburn',
      blurb:
        'Historic core with 1920s Craftsman-style homes and walkable main street character; entry-level SFR pricing and proximity to the Sounder commuter rail station attract first-time buyers.',
    },
    {
      name: 'West Hill',
      blurb:
        'Auburn neighborhood bordering Federal Way with established single-family homes and quick I-5 access; practical for dual-income households commuting north to Seattle or south to Tacoma.',
    },
    {
      name: "River's Bend",
      blurb:
        'Small neighborhood along the Green River with a natural setting and larger lots; appeals to buyers who want outdoor access without leaving the city limits.',
    },
  ],
  typicalHomeValueRange: { min: 550_000, max: 640_000 },
  localMarketProse: [
    "Auburn is the fifteenth-most populous city in Washington with approximately 87,000 residents, straddling the King-Pierce County boundary in the Green River Valley. The Boeing Company operates Auburn's largest private employer — a 3,600-employee airplane parts plant that opened in 1966 and remains the largest airplane parts facility in the world — alongside Auburn School District (2,536 employees), Muckleshoot Tribal Enterprises (1,472), and MultiCare Auburn Medical Center (1,208). This combination of aerospace manufacturing, tribal enterprise, healthcare, and education creates a stable, diversified employment base. Home values in Auburn have ranged from the mid-$550s to the mid-$640s in early 2026, sitting at the affordable end of the King County spectrum.",
    "Auburn's housing stock spans historic downtown Craftsman homes from the 1920s and 1930s through midcentury ramblers on Lea Hill to the planned subdivision landscape of Lakeland Hills, which was developed from the mid-1980s onward. Most purchase activity involves FHA and conventional loans, with a strong first-time-buyer contingent drawn by prices below Kent, Federal Way, and Renton. VA loan activity is present given proximity to JBLM to the south and Naval Station Everett to the north, though Auburn's military buyer share is smaller than Pierce County cities. HELOC demand has grown steadily as owners who bought during the 2019–2022 appreciation cycle tap equity while preserving their low first-mortgage rates.",
    "What draws buyers to Auburn is a combination of King County pricing at the affordable end of the spectrum, Sounder commuter rail access to Seattle and Tacoma, direct highway access via State Routes 18 and 167, and the amenity draw of the Muckleshoot Casino and Green River trail system. Buyers priced out of Kent or Federal Way who still need King County school district access often land in Auburn as their solution. Inventory runs 1.5 to 2 months of supply with homes typically selling in 25 to 40 days and sale-to-list ratios near 99%. The market has shown modest year-over-year softening from the 2022 peak but remains fundamentally active, with Boeing employment and tribal enterprise activity providing a floor of consistent local demand.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'Is Auburn WA in King County or Pierce County for mortgage purposes?',
      answer:
        'Auburn straddles both King County and Pierce County — most of the city, including Lakeland Hills and downtown Auburn, falls within King County, but some southern portions are in Pierce County. King County carries a conforming loan limit of $977,500 versus Pierce County\'s $862,500 for 2025, so the county boundary can affect which loan product fits best. We identify the correct county for any specific Auburn address as part of pre-approval. Call or text (949) 579-2057.',
    },
    {
      question: 'Can Boeing employees in Auburn use overtime income to qualify?',
      answer:
        'Yes — Boeing employees in Auburn with documented overtime or shift-differential income can include it in mortgage qualification when averaged over 24 months. Auburn\'s Boeing plant is one of the company\'s oldest and largest, with many long-tenured employees who have stable, verifiable overtime histories. We work through income documentation with Boeing workers upfront to ensure the pre-approval accurately reflects total earning capacity.',
    },
    {
      question: 'What HELOC options exist for Auburn homeowners with equity?',
      answer:
        'Auburn homeowners who purchased before 2022 have typically accumulated $120,000–$200,000 in equity based on the appreciation cycle since 2019. A HELOC lets you draw against that equity as needed while keeping your original low-rate mortgage in place. We shop multiple wholesale lenders for Auburn HELOCs to find competitive rate and draw-period terms — often quoting same-week for qualified borrowers. Variable-rate HELOCs can be paired with a fixed-rate conversion option for borrowers who prefer payment certainty.',
    },
  ],
};
