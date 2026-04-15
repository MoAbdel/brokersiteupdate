// Auto-derived from scripts/compute-nearby-cities.mjs output.
// Re-run that script and paste the updated map here when Tier 2 lands.

interface NearbyCity {
  citySlug: string;
  cityName: string;
  state: string;
}

const MAP: Record<string, NearbyCity[]> = {
  bakersfield: [
    { citySlug: 'fresno', cityName: 'Fresno', state: 'California' },
    { citySlug: 'elk-grove', cityName: 'Elk Grove', state: 'California' },
    { citySlug: 'long-beach', cityName: 'Long Beach', state: 'California' },
  ],
  'elk-grove': [
    { citySlug: 'roseville', cityName: 'Roseville', state: 'California' },
    { citySlug: 'bakersfield', cityName: 'Bakersfield', state: 'California' },
    { citySlug: 'fresno', cityName: 'Fresno', state: 'California' },
  ],
  fresno: [
    { citySlug: 'bakersfield', cityName: 'Bakersfield', state: 'California' },
    { citySlug: 'elk-grove', cityName: 'Elk Grove', state: 'California' },
    { citySlug: 'long-beach', cityName: 'Long Beach', state: 'California' },
  ],
  'long-beach': [
    { citySlug: 'bakersfield', cityName: 'Bakersfield', state: 'California' },
    { citySlug: 'elk-grove', cityName: 'Elk Grove', state: 'California' },
    { citySlug: 'fresno', cityName: 'Fresno', state: 'California' },
  ],
  murrieta: [
    { citySlug: 'riverside', cityName: 'Riverside', state: 'California' },
    { citySlug: 'san-bernardino', cityName: 'San Bernardino', state: 'California' },
    { citySlug: 'bakersfield', cityName: 'Bakersfield', state: 'California' },
  ],
  riverside: [
    { citySlug: 'murrieta', cityName: 'Murrieta', state: 'California' },
    { citySlug: 'san-bernardino', cityName: 'San Bernardino', state: 'California' },
    { citySlug: 'bakersfield', cityName: 'Bakersfield', state: 'California' },
  ],
  roseville: [
    { citySlug: 'elk-grove', cityName: 'Elk Grove', state: 'California' },
    { citySlug: 'bakersfield', cityName: 'Bakersfield', state: 'California' },
    { citySlug: 'fresno', cityName: 'Fresno', state: 'California' },
  ],
  'san-bernardino': [
    { citySlug: 'murrieta', cityName: 'Murrieta', state: 'California' },
    { citySlug: 'riverside', cityName: 'Riverside', state: 'California' },
    { citySlug: 'bakersfield', cityName: 'Bakersfield', state: 'California' },
  ],
  spokane: [
    { citySlug: 'tacoma', cityName: 'Tacoma', state: 'Washington' },
  ],
  tacoma: [
    { citySlug: 'spokane', cityName: 'Spokane', state: 'Washington' },
  ],
};

export function nearbyCitiesFor(slug: string): NearbyCity[] {
  return MAP[slug] ?? [];
}
