import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const everett: CityPageData = {
  citySlug: 'everett',
  cityName: 'Everett',
  state: 'Washington',
  region: 'Washington',
  metaTitle: 'Everett WA Mortgage Broker | HELOC, VA & Home Loans',
  metaDescription:
    'Everett WA mortgage broker serving Snohomish County. Home values $530K–$640K typical. HELOC, VA, FHA, conventional. Call or text (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Northwest Everett',
      blurb:
        'Historic residential area near Port Gardner Bay with established trees and early-20th-century homes; appeals to buyers who want character and proximity to the waterfront.',
    },
    {
      name: 'Riverside',
      blurb:
        'Walkable neighborhood near downtown Everett with historic homes and Snohomish River views; strong owner-occupancy and steady appreciation driven by transit access.',
    },
    {
      name: 'Lowell',
      blurb:
        'South Everett neighborhood with larger lots and more square footage per dollar than central neighborhoods; popular with buyers seeking value relative to the Seattle metro.',
    },
    {
      name: 'Pinehurst',
      blurb:
        'Primarily residential area featuring 1920s Craftsman bungalows and midcentury ramblers; near the Interurban Trail and well-regarded elementary schools.',
    },
    {
      name: 'Mukilteo Corridor',
      blurb:
        'Western Everett fringe bordering Mukilteo with newer SFR inventory and ferry access; appeals to Boeing employees and buyers seeking newer builds at competitive prices.',
    },
  ],
  typicalHomeValueRange: { min: 530_000, max: 640_000 },
  localMarketProse: [
    "Everett is the county seat of Snohomish County and the seventh-most populous city in Washington, with a population of approximately 113,000. The economy is anchored by aerospace and defense: Boeing operates its largest building by volume in Everett, accounting for roughly 31% of all city jobs, and the facility has assembled every widebody jet in Boeing's commercial lineup. Naval Station Everett adds approximately 4,300 military and civilian personnel to the employment base, and Providence Regional Medical Center employs more than 7,000. This combination of aerospace, defense, and healthcare creates a more economically diverse and stable employment base than single-industry towns, underpinning consistent housing demand. Median home prices in Everett have ranged from the low $530s to the mid-$600s in early 2026.",
    "The housing stock in Everett ranges from 1920s Craftsman bungalows and Victorian-era homes in Northwest Everett and Riverside to postwar ramblers in Pinehurst and newer subdivisions on the city's southern and eastern edges. VA loans are a meaningful share of purchase activity given Naval Station Everett and the commuter overlap with active-duty personnel from JBLM to the south. Boeing workers — many of whom are long-tenured union employees with strong income documentation — are well-served by conventional and jumbo products for moves into the upper portion of the price range. HELOC demand is elevated among the 2020–2022 purchase cohort who accumulated significant equity and prefer preserving their first-mortgage rate.",
    "Buyers come to Everett for employment proximity to Boeing and the naval station, pricing that sits materially below Bellevue and Seattle, and access to Puget Sound recreation, the Mukilteo ferry, and Cascades hiking. Commuters to Seattle use the Sounder commuter rail and I-5 corridor. Inventory in Everett runs tight — typically under 1.5 months of supply — with homes going pending in roughly 8 to 25 days depending on price point. The market has shown modest softening from the 2022 peak but remains competitive, with sale-to-list ratios near 99%. For buyers priced out of King County but needing proximity to Seattle employers, Everett remains one of the strongest value propositions in the greater metro.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'Can I use a VA loan to buy a home in Everett near Naval Station?',
      answer:
        'Yes — VA loans are a strong purchase option in Everett given Naval Station Everett and the broader military presence in the area. VA offers 0% down, no PMI, and competitive rates for qualified veterans and active-duty personnel. We quote VA alongside conventional and FHA so you can compare total monthly cost for your specific Everett property. Call or text (949) 579-2057.',
    },
    {
      question: 'What HELOC options are available for Everett homeowners in 2026?',
      answer:
        'Everett homeowners who purchased between 2018 and 2022 have typically accumulated $150,000–$250,000 in equity depending on their original price point. A HELOC lets you draw against that equity while keeping your low first-mortgage rate intact — far more cost-efficient than a cash-out refinance at 2026 rates. We shop multiple wholesale lenders for Everett HELOCs and can quote lines up to $750,000 for qualified borrowers.',
    },
    {
      question: 'How do Boeing employee incomes affect mortgage qualification in Everett?',
      answer:
        'Boeing workers in Everett often earn strong base wages plus overtime that, when properly documented with two years of W-2s and pay stubs, can significantly boost qualifying income. Overtime income averaged over 24 months is fully eligible under conventional guidelines. We work through the income documentation process upfront so Boeing employees arrive at offer time with a credible pre-approval that reflects their full earning picture.',
    },
  ],
};
