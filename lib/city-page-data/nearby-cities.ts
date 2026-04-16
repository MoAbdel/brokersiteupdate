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
    { citySlug: 'vancouver-wa', cityName: 'Vancouver', state: 'Washington' },
  ],
  tacoma: [
    { citySlug: 'lakewood-wa', cityName: 'Lakewood', state: 'Washington' },
    { citySlug: 'olympia', cityName: 'Olympia', state: 'Washington' },
    { citySlug: 'federal-way', cityName: 'Federal Way', state: 'Washington' },
  ],
  corona: [
    { citySlug: 'riverside', cityName: 'Riverside', state: 'California' },
    { citySlug: 'murrieta', cityName: 'Murrieta', state: 'California' },
    { citySlug: 'temecula', cityName: 'Temecula', state: 'California' },
  ],
  'moreno-valley': [
    { citySlug: 'riverside', cityName: 'Riverside', state: 'California' },
    { citySlug: 'san-bernardino', cityName: 'San Bernardino', state: 'California' },
    { citySlug: 'corona', cityName: 'Corona', state: 'California' },
  ],
  temecula: [
    { citySlug: 'murrieta', cityName: 'Murrieta', state: 'California' },
    { citySlug: 'corona', cityName: 'Corona', state: 'California' },
    { citySlug: 'riverside', cityName: 'Riverside', state: 'California' },
  ],
  folsom: [
    { citySlug: 'roseville', cityName: 'Roseville', state: 'California' },
    { citySlug: 'elk-grove', cityName: 'Elk Grove', state: 'California' },
    { citySlug: 'rancho-cordova', cityName: 'Rancho Cordova', state: 'California' },
  ],
  'rancho-cordova': [
    { citySlug: 'folsom', cityName: 'Folsom', state: 'California' },
    { citySlug: 'elk-grove', cityName: 'Elk Grove', state: 'California' },
    { citySlug: 'roseville', cityName: 'Roseville', state: 'California' },
  ],
  stockton: [
    { citySlug: 'modesto', cityName: 'Modesto', state: 'California' },
    { citySlug: 'fresno', cityName: 'Fresno', state: 'California' },
    { citySlug: 'bakersfield', cityName: 'Bakersfield', state: 'California' },
  ],
  modesto: [
    { citySlug: 'stockton', cityName: 'Stockton', state: 'California' },
    { citySlug: 'fresno', cityName: 'Fresno', state: 'California' },
    { citySlug: 'bakersfield', cityName: 'Bakersfield', state: 'California' },
  ],
  torrance: [
    { citySlug: 'whittier', cityName: 'Whittier', state: 'California' },
    { citySlug: 'long-beach', cityName: 'Long Beach', state: 'California' },
    { citySlug: 'chula-vista', cityName: 'Chula Vista', state: 'California' },
  ],
  whittier: [
    { citySlug: 'torrance', cityName: 'Torrance', state: 'California' },
    { citySlug: 'long-beach', cityName: 'Long Beach', state: 'California' },
    { citySlug: 'chula-vista', cityName: 'Chula Vista', state: 'California' },
  ],
  'chula-vista': [
    { citySlug: 'oceanside', cityName: 'Oceanside', state: 'California' },
    { citySlug: 'escondido', cityName: 'Escondido', state: 'California' },
    { citySlug: 'long-beach', cityName: 'Long Beach', state: 'California' },
  ],
  oceanside: [
    { citySlug: 'escondido', cityName: 'Escondido', state: 'California' },
    { citySlug: 'chula-vista', cityName: 'Chula Vista', state: 'California' },
    { citySlug: 'long-beach', cityName: 'Long Beach', state: 'California' },
  ],
  escondido: [
    { citySlug: 'oceanside', cityName: 'Oceanside', state: 'California' },
    { citySlug: 'chula-vista', cityName: 'Chula Vista', state: 'California' },
    { citySlug: 'long-beach', cityName: 'Long Beach', state: 'California' },
  ],
  'lakewood-wa': [
    { citySlug: 'tacoma', cityName: 'Tacoma', state: 'Washington' },
    { citySlug: 'olympia', cityName: 'Olympia', state: 'Washington' },
    { citySlug: 'federal-way', cityName: 'Federal Way', state: 'Washington' },
  ],
  olympia: [
    { citySlug: 'lakewood-wa', cityName: 'Lakewood', state: 'Washington' },
    { citySlug: 'tacoma', cityName: 'Tacoma', state: 'Washington' },
    { citySlug: 'federal-way', cityName: 'Federal Way', state: 'Washington' },
  ],
  everett: [
    { citySlug: 'marysville', cityName: 'Marysville', state: 'Washington' },
    { citySlug: 'kent-wa', cityName: 'Kent', state: 'Washington' },
    { citySlug: 'auburn-wa', cityName: 'Auburn', state: 'Washington' },
  ],
  marysville: [
    { citySlug: 'everett', cityName: 'Everett', state: 'Washington' },
    { citySlug: 'kent-wa', cityName: 'Kent', state: 'Washington' },
    { citySlug: 'auburn-wa', cityName: 'Auburn', state: 'Washington' },
  ],
  'vancouver-wa': [
    { citySlug: 'olympia', cityName: 'Olympia', state: 'Washington' },
    { citySlug: 'tacoma', cityName: 'Tacoma', state: 'Washington' },
    { citySlug: 'spokane', cityName: 'Spokane', state: 'Washington' },
  ],
  'federal-way': [
    { citySlug: 'kent-wa', cityName: 'Kent', state: 'Washington' },
    { citySlug: 'auburn-wa', cityName: 'Auburn', state: 'Washington' },
    { citySlug: 'tacoma', cityName: 'Tacoma', state: 'Washington' },
  ],
  'kent-wa': [
    { citySlug: 'federal-way', cityName: 'Federal Way', state: 'Washington' },
    { citySlug: 'auburn-wa', cityName: 'Auburn', state: 'Washington' },
    { citySlug: 'everett', cityName: 'Everett', state: 'Washington' },
  ],
  'auburn-wa': [
    { citySlug: 'kent-wa', cityName: 'Kent', state: 'Washington' },
    { citySlug: 'federal-way', cityName: 'Federal Way', state: 'Washington' },
    { citySlug: 'tacoma', cityName: 'Tacoma', state: 'Washington' },
  ],
};

export function nearbyCitiesFor(slug: string): NearbyCity[] {
  return MAP[slug] ?? [];
}
