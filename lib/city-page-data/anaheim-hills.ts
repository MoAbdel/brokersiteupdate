import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const anaheimHills: CityPageData = {
  citySlug: 'anaheim-hills',
  cityName: 'Anaheim Hills',
  state: 'California',
  region: 'OC',
  metaTitle: 'Anaheim Hills CA Mortgage Broker | Loans & Rates',
  metaDescription:
    'Anaheim Hills CA mortgage broker in eastern Orange County. Condos ~$680K, SFR ~$1.2M. Conventional, FHA, jumbo, HELOC, VA. Call Mo at (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Canyon Heights',
      blurb:
        'Established hillside neighborhood with larger-lot SFRs and panoramic views of the Santa Ana foothills; popular with families seeking top-rated Orange Unified schools and a quieter suburban environment.',
    },
    {
      name: 'Anaheim Foothills',
      blurb:
        'Well-kept residential tracts along the base of the Anaheim Hills terrain; mix of two-story SFR floor plans built in the 1980s–1990s with mature landscaping and strong owner-occupancy rates.',
    },
    {
      name: 'The Highlands',
      blurb:
        'Gated and semi-gated communities in the upper elevations of Anaheim Hills offering custom and semi-custom homes; consistent demand from move-up buyers prioritizing privacy and lot size.',
    },
    {
      name: 'Peralta Hills',
      blurb:
        'Lower-density enclave in the western portion of Anaheim Hills near the 91 freeway; larger parcels attract equestrian-friendly buyers and families looking for more land relative to typical OC pricing.',
    },
    {
      name: 'East Hills',
      blurb:
        'Newer tracts in the eastern portion near Weir Canyon Road; Spanish-tile-roof SFRs with community parks and trail connections, drawing buyers priced out of coastal and mid-OC markets.',
    },
  ],
  typicalHomeValueRange: { min: 680_000, max: 1_275_000 },
  localMarketProse: [
    "Anaheim Hills is a planned residential community forming the eastern portion of the City of Anaheim in Orange County, organized across ZIP codes 92807 and 92808. Development began in 1971 after Texaco Industries acquired the Nohl family ranch, pioneering a landform grading technique that preserved hillside topography across more than 70 planned neighborhoods. The community borders the Santa Ana Mountains and Cleveland National Forest to the east and northeast, giving it a foothill character distinct from the flat urban grid of central Anaheim. Residents commute primarily along the 91 and 55 freeways to employment centers in Anaheim, Brea, Orange, and Irvine, and the area draws professionals from the healthcare and aerospace corridors in north Orange County.",
    "The Anaheim Hills housing market in early 2026 shows a clear split by property type: condominiums trade around $680,000, while single-family detached homes command a median near $1.2–1.275 million. For buyers targeting the SFR segment, conventional loans with 10–20% down are the norm; jumbo financing applies when prices exceed the $1,209,750 OC conforming loan limit. Condo buyers have more options, with FHA (3.5% down) and conventional (5% down) both viable. Homes are selling in approximately 45 days, and the sale-to-list ratio stays near 100%, reflecting balanced but competitive conditions. The attainable entry point in the condo and townhome segment continues to attract first-time buyers from pricier coastal communities.",
    "Buyers choose Anaheim Hills for its canyon scenery, access to the Anaheim Hills Golf Course, strong school assignments in the Orange Unified district, and relative affordability compared to Newport Beach or Irvine at comparable square footage. The proximity to Carbon Canyon Regional Park and the network of hiking trails throughout the hills appeals to outdoor-oriented households. Homeowners who purchased before 2022 hold significant equity positions, and HELOC demand is active for renovation projects and second-home purchases. The community's stable, owner-occupied character and consistent resale demand make it a reliable market for both purchase and refinance borrowers.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What are typical mortgage rates for Anaheim Hills buyers in 2026?',
      answer:
        'Conventional 30-year rates for well-qualified Anaheim Hills borrowers have been running in the mid-to-upper 6% range in 2026. Condo buyers using FHA see similar rates but pay mortgage insurance. For SFR purchases above the $1,209,750 OC conforming limit, jumbo rates apply and run slightly higher. Call or text (949) 579-2057 for a live rate quote specific to your Anaheim Hills purchase.',
    },
    {
      question: 'Do I need a jumbo loan to buy a single-family home in Anaheim Hills?',
      answer:
        'Many Anaheim Hills SFR purchases fall in the $1.1M–$1.4M range, which means they exceed the $1,209,750 Orange County conforming loan limit and require jumbo financing. However, buyers who can put 20–30% down may keep the loan amount below the conforming threshold, allowing conventional financing at slightly better rates. We run both scenarios so you can compare real payment differences. Call (949) 579-2057.',
    },
    {
      question: 'Is it better to buy a condo or SFR in Anaheim Hills for first-time buyers?',
      answer:
        'Anaheim Hills condos around $680K are accessible with FHA (3.5% down, ~$24K) or conventional (5% down, ~$34K), making them the practical entry point for first-time buyers. SFRs at $1.2M+ require substantially larger down payments. If budget allows, some buyers use a condo as a starter purchase and build equity before moving up. CalHFA down-payment assistance can also layer onto FHA or conventional loans for income-qualifying buyers. Call (949) 579-2057 to explore your options.',
    },
  ],
};
