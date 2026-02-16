import type { City } from './types';

export const cities: City[] = [
  // ─── CALIFORNIA ────────────────────────────────────────────────────────────────

  // Alameda County
  { name: 'Berkeley', slug: 'berkeley', countySlug: 'alameda-county', stateCode: 'ca', medianHomePrice: 1420000, avgPropertyTaxRate: 0.0118, medianRent: 3200, population: 124321 },
  { name: 'Fremont', slug: 'fremont', countySlug: 'alameda-county', stateCode: 'ca', medianHomePrice: 1550000, avgPropertyTaxRate: 0.0112, medianRent: 3350, population: 230504 },
  { name: 'Hayward', slug: 'hayward', countySlug: 'alameda-county', stateCode: 'ca', medianHomePrice: 875000, avgPropertyTaxRate: 0.0114, medianRent: 2750, population: 162954 },
  { name: 'Livermore', slug: 'livermore', countySlug: 'alameda-county', stateCode: 'ca', medianHomePrice: 1050000, avgPropertyTaxRate: 0.0110, medianRent: 2900, population: 90189 },
  { name: 'Oakland', slug: 'oakland', countySlug: 'alameda-county', stateCode: 'ca', medianHomePrice: 885000, avgPropertyTaxRate: 0.0135, medianRent: 2800, population: 433031 },
  { name: 'Pleasanton', slug: 'pleasanton', countySlug: 'alameda-county', stateCode: 'ca', medianHomePrice: 1680000, avgPropertyTaxRate: 0.0108, medianRent: 3400, population: 79975 },

  // Butte County
  { name: 'Chico', slug: 'chico', countySlug: 'butte-county', stateCode: 'ca', medianHomePrice: 420000, avgPropertyTaxRate: 0.0108, medianRent: 1600, population: 101475 },

  // Contra Costa County
  { name: 'Concord', slug: 'concord', countySlug: 'contra-costa-county', stateCode: 'ca', medianHomePrice: 735000, avgPropertyTaxRate: 0.0110, medianRent: 2500, population: 129295 },
  { name: 'Danville', slug: 'danville', countySlug: 'contra-costa-county', stateCode: 'ca', medianHomePrice: 2150000, avgPropertyTaxRate: 0.0105, medianRent: 3800, population: 44500 },
  { name: 'Lafayette', slug: 'lafayette', countySlug: 'contra-costa-county', stateCode: 'ca', medianHomePrice: 2050000, avgPropertyTaxRate: 0.0107, medianRent: 3600, population: 25381 },
  { name: 'San Ramon', slug: 'san-ramon', countySlug: 'contra-costa-county', stateCode: 'ca', medianHomePrice: 1520000, avgPropertyTaxRate: 0.0109, medianRent: 3300, population: 84605 },
  { name: 'Walnut Creek', slug: 'walnut-creek', countySlug: 'contra-costa-county', stateCode: 'ca', medianHomePrice: 1180000, avgPropertyTaxRate: 0.0108, medianRent: 3000, population: 70127 },

  // El Dorado County
  { name: 'El Dorado Hills', slug: 'el-dorado-hills', countySlug: 'el-dorado-county', stateCode: 'ca', medianHomePrice: 780000, avgPropertyTaxRate: 0.0104, medianRent: 2500, population: 47702 },

  // Fresno County
  { name: 'Clovis', slug: 'clovis', countySlug: 'fresno-county', stateCode: 'ca', medianHomePrice: 445000, avgPropertyTaxRate: 0.0105, medianRent: 1850, population: 120124 },
  { name: 'Fresno', slug: 'fresno', countySlug: 'fresno-county', stateCode: 'ca', medianHomePrice: 375000, avgPropertyTaxRate: 0.0108, medianRent: 1550, population: 542107 },

  // Kern County
  { name: 'Bakersfield', slug: 'bakersfield', countySlug: 'kern-county', stateCode: 'ca', medianHomePrice: 355000, avgPropertyTaxRate: 0.0110, medianRent: 1450, population: 403455 },

  // Los Angeles County
  { name: 'Alhambra', slug: 'alhambra', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 875000, avgPropertyTaxRate: 0.0116, medianRent: 2350, population: 82868 },
  { name: 'Arcadia', slug: 'arcadia', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 1520000, avgPropertyTaxRate: 0.0110, medianRent: 2900, population: 57939 },
  { name: 'Beverly Hills', slug: 'beverly-hills', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 3950000, avgPropertyTaxRate: 0.0105, medianRent: 4200, population: 32701 },
  { name: 'Burbank', slug: 'burbank', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 1100000, avgPropertyTaxRate: 0.0112, medianRent: 2600, population: 107337 },
  { name: 'Calabasas', slug: 'calabasas', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 1850000, avgPropertyTaxRate: 0.0108, medianRent: 3500, population: 23816 },
  { name: 'Carson', slug: 'carson', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 695000, avgPropertyTaxRate: 0.0115, medianRent: 2300, population: 95513 },
  { name: 'Compton', slug: 'compton', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 565000, avgPropertyTaxRate: 0.0122, medianRent: 1800, population: 97877 },
  { name: 'Culver City', slug: 'culver-city', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 1350000, avgPropertyTaxRate: 0.0112, medianRent: 2900, population: 39185 },
  { name: 'Downey', slug: 'downey', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 785000, avgPropertyTaxRate: 0.0114, medianRent: 2300, population: 111772 },
  { name: 'El Monte', slug: 'el-monte', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 660000, avgPropertyTaxRate: 0.0118, medianRent: 2050, population: 113615 },
  { name: 'Glendale', slug: 'glendale', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 1150000, avgPropertyTaxRate: 0.0112, medianRent: 2600, population: 196543 },
  { name: 'Hawthorne', slug: 'hawthorne', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 720000, avgPropertyTaxRate: 0.0118, medianRent: 2200, population: 88083 },
  { name: 'Hermosa Beach', slug: 'hermosa-beach', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 1980000, avgPropertyTaxRate: 0.0106, medianRent: 3400, population: 19726 },
  { name: 'Inglewood', slug: 'inglewood', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 720000, avgPropertyTaxRate: 0.0120, medianRent: 2100, population: 107762 },
  { name: 'Long Beach', slug: 'long-beach', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 825000, avgPropertyTaxRate: 0.0115, medianRent: 2400, population: 466742 },
  { name: 'Los Angeles', slug: 'los-angeles', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 975000, avgPropertyTaxRate: 0.0116, medianRent: 2750, population: 3898747 },
  { name: 'Manhattan Beach', slug: 'manhattan-beach', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 3200000, avgPropertyTaxRate: 0.0104, medianRent: 4500, population: 35536 },
  { name: 'Pasadena', slug: 'pasadena', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 1150000, avgPropertyTaxRate: 0.0113, medianRent: 2700, population: 138699 },
  { name: 'Pomona', slug: 'pomona', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 595000, avgPropertyTaxRate: 0.0118, medianRent: 2000, population: 151713 },
  { name: 'Rancho Palos Verdes', slug: 'rancho-palos-verdes', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 1850000, avgPropertyTaxRate: 0.0106, medianRent: 3500, population: 41643 },
  { name: 'Redondo Beach', slug: 'redondo-beach', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 1480000, avgPropertyTaxRate: 0.0108, medianRent: 3100, population: 71463 },
  { name: 'Santa Monica', slug: 'santa-monica', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 1750000, avgPropertyTaxRate: 0.0110, medianRent: 3200, population: 93076 },
  { name: 'Torrance', slug: 'torrance', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 1050000, avgPropertyTaxRate: 0.0110, medianRent: 2700, population: 147067 },
  { name: 'West Hollywood', slug: 'west-hollywood', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 1100000, avgPropertyTaxRate: 0.0114, medianRent: 2800, population: 35757 },
  { name: 'Whittier', slug: 'whittier', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 745000, avgPropertyTaxRate: 0.0114, medianRent: 2300, population: 87306 },
  { name: 'Claremont', slug: 'claremont', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 885000, avgPropertyTaxRate: 0.0110, medianRent: 2500, population: 36266 },
  { name: 'Diamond Bar', slug: 'diamond-bar', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 920000, avgPropertyTaxRate: 0.0110, medianRent: 2600, population: 55544 },
  { name: 'Glendora', slug: 'glendora', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 845000, avgPropertyTaxRate: 0.0110, medianRent: 2450, population: 51074 },
  { name: 'La Verne', slug: 'la-verne', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 830000, avgPropertyTaxRate: 0.0110, medianRent: 2400, population: 32346 },
  { name: 'Monrovia', slug: 'monrovia', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 870000, avgPropertyTaxRate: 0.0112, medianRent: 2450, population: 37931 },
  { name: 'San Dimas', slug: 'san-dimas', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 810000, avgPropertyTaxRate: 0.0110, medianRent: 2350, population: 34399 },
  { name: 'South Pasadena', slug: 'south-pasadena', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 1550000, avgPropertyTaxRate: 0.0108, medianRent: 2900, population: 26194 },
  { name: 'West Covina', slug: 'west-covina', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 735000, avgPropertyTaxRate: 0.0114, medianRent: 2250, population: 106098 },
  { name: 'Covina', slug: 'covina', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 690000, avgPropertyTaxRate: 0.0114, medianRent: 2200, population: 49387 },
  { name: 'Cerritos', slug: 'cerritos', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 895000, avgPropertyTaxRate: 0.0110, medianRent: 2600, population: 51452 },
  { name: 'La Mirada', slug: 'la-mirada', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 815000, avgPropertyTaxRate: 0.0110, medianRent: 2400, population: 48008 },
  { name: 'Palos Verdes Estates', slug: 'palos-verdes-estates', countySlug: 'los-angeles-county', stateCode: 'ca', medianHomePrice: 2650000, avgPropertyTaxRate: 0.0104, medianRent: 4000, population: 13319 },

  // Marin County
  { name: 'Mill Valley', slug: 'mill-valley', countySlug: 'marin-county', stateCode: 'ca', medianHomePrice: 2100000, avgPropertyTaxRate: 0.0105, medianRent: 3600, population: 14855 },
  { name: 'San Rafael', slug: 'san-rafael', countySlug: 'marin-county', stateCode: 'ca', medianHomePrice: 1350000, avgPropertyTaxRate: 0.0108, medianRent: 2900, population: 61320 },

  // Monterey County
  { name: 'Monterey', slug: 'monterey', countySlug: 'monterey-county', stateCode: 'ca', medianHomePrice: 1050000, avgPropertyTaxRate: 0.0106, medianRent: 2600, population: 30073 },
  { name: 'Salinas', slug: 'salinas', countySlug: 'monterey-county', stateCode: 'ca', medianHomePrice: 640000, avgPropertyTaxRate: 0.0110, medianRent: 2100, population: 163542 },

  // Napa County
  { name: 'Napa', slug: 'napa', countySlug: 'napa-county', stateCode: 'ca', medianHomePrice: 850000, avgPropertyTaxRate: 0.0108, medianRent: 2500, population: 79068 },

  // Orange County
  { name: 'Anaheim', slug: 'anaheim', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 875000, avgPropertyTaxRate: 0.0112, medianRent: 2400, population: 350365 },
  { name: 'Costa Mesa', slug: 'costa-mesa', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 1050000, avgPropertyTaxRate: 0.0110, medianRent: 2700, population: 112174 },
  { name: 'Dana Point', slug: 'dana-point', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 1450000, avgPropertyTaxRate: 0.0106, medianRent: 3200, population: 33351 },
  { name: 'Fountain Valley', slug: 'fountain-valley', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 1100000, avgPropertyTaxRate: 0.0108, medianRent: 2800, population: 56707 },
  { name: 'Fullerton', slug: 'fullerton', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 925000, avgPropertyTaxRate: 0.0110, medianRent: 2500, population: 139640 },
  { name: 'Garden Grove', slug: 'garden-grove', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 850000, avgPropertyTaxRate: 0.0112, medianRent: 2350, population: 172646 },
  { name: 'Huntington Beach', slug: 'huntington-beach', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 1250000, avgPropertyTaxRate: 0.0108, medianRent: 3000, population: 198711 },
  { name: 'Irvine', slug: 'irvine', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 1350000, avgPropertyTaxRate: 0.0110, medianRent: 3200, population: 307670 },
  { name: 'Laguna Beach', slug: 'laguna-beach', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 2850000, avgPropertyTaxRate: 0.0104, medianRent: 4000, population: 23032 },
  { name: 'Laguna Niguel', slug: 'laguna-niguel', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 1200000, avgPropertyTaxRate: 0.0108, medianRent: 3000, population: 65048 },
  { name: 'Laguna Woods', slug: 'laguna-woods', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 450000, avgPropertyTaxRate: 0.0105, medianRent: 1900, population: 16518 },
  { name: 'Lake Forest', slug: 'lake-forest', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 1050000, avgPropertyTaxRate: 0.0110, medianRent: 2800, population: 85858 },
  { name: 'Mission Viejo', slug: 'mission-viejo', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 1100000, avgPropertyTaxRate: 0.0108, medianRent: 2900, population: 95290 },
  { name: 'Newport Beach', slug: 'newport-beach', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 3200000, avgPropertyTaxRate: 0.0104, medianRent: 4500, population: 85239 },
  { name: 'Orange', slug: 'orange', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 950000, avgPropertyTaxRate: 0.0110, medianRent: 2600, population: 139911 },
  { name: 'Santa Ana', slug: 'santa-ana', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 780000, avgPropertyTaxRate: 0.0114, medianRent: 2200, population: 310227 },
  { name: 'Seal Beach', slug: 'seal-beach', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 1150000, avgPropertyTaxRate: 0.0106, medianRent: 2800, population: 24168 },
  { name: 'Tustin', slug: 'tustin', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 975000, avgPropertyTaxRate: 0.0110, medianRent: 2650, population: 80276 },
  { name: 'Westminster', slug: 'westminster', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 880000, avgPropertyTaxRate: 0.0112, medianRent: 2400, population: 91137 },
  { name: 'Yorba Linda', slug: 'yorba-linda', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 1250000, avgPropertyTaxRate: 0.0108, medianRent: 3100, population: 68706 },
  { name: 'Aliso Viejo', slug: 'aliso-viejo', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 950000, avgPropertyTaxRate: 0.0110, medianRent: 2700, population: 51372 },
  { name: 'Brea', slug: 'brea', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 975000, avgPropertyTaxRate: 0.0108, medianRent: 2650, population: 45606 },
  { name: 'Cypress', slug: 'cypress', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 1025000, avgPropertyTaxRate: 0.0108, medianRent: 2700, population: 49833 },
  { name: 'La Habra', slug: 'la-habra', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 800000, avgPropertyTaxRate: 0.0112, medianRent: 2350, population: 62850 },
  { name: 'Los Alamitos', slug: 'los-alamitos', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 1150000, avgPropertyTaxRate: 0.0106, medianRent: 2800, population: 11449 },
  { name: 'Placentia', slug: 'placentia', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 920000, avgPropertyTaxRate: 0.0110, medianRent: 2550, population: 52206 },
  { name: 'Rancho Santa Margarita', slug: 'rancho-santa-margarita', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 925000, avgPropertyTaxRate: 0.0110, medianRent: 2650, population: 48960 },
  { name: 'San Clemente', slug: 'san-clemente', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 1350000, avgPropertyTaxRate: 0.0106, medianRent: 3100, population: 64293 },
  { name: 'San Juan Capistrano', slug: 'san-juan-capistrano', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 1150000, avgPropertyTaxRate: 0.0108, medianRent: 2900, population: 35911 },
  { name: 'Stanton', slug: 'stanton', countySlug: 'orange-county', stateCode: 'ca', medianHomePrice: 750000, avgPropertyTaxRate: 0.0114, medianRent: 2200, population: 38305 },

  // Placer County
  { name: 'Rocklin', slug: 'rocklin', countySlug: 'placer-county', stateCode: 'ca', medianHomePrice: 650000, avgPropertyTaxRate: 0.0106, medianRent: 2300, population: 71191 },
  { name: 'Roseville', slug: 'roseville', countySlug: 'placer-county', stateCode: 'ca', medianHomePrice: 620000, avgPropertyTaxRate: 0.0108, medianRent: 2250, population: 147773 },

  // Riverside County
  { name: 'Corona', slug: 'corona', countySlug: 'riverside-county', stateCode: 'ca', medianHomePrice: 680000, avgPropertyTaxRate: 0.0112, medianRent: 2400, population: 157136 },
  { name: 'Murrieta', slug: 'murrieta', countySlug: 'riverside-county', stateCode: 'ca', medianHomePrice: 625000, avgPropertyTaxRate: 0.0110, medianRent: 2350, population: 113167 },
  { name: 'Palm Springs', slug: 'palm-springs', countySlug: 'riverside-county', stateCode: 'ca', medianHomePrice: 595000, avgPropertyTaxRate: 0.0112, medianRent: 2100, population: 48518 },
  { name: 'Riverside', slug: 'riverside', countySlug: 'riverside-county', stateCode: 'ca', medianHomePrice: 575000, avgPropertyTaxRate: 0.0114, medianRent: 2200, population: 314998 },
  { name: 'Temecula', slug: 'temecula', countySlug: 'riverside-county', stateCode: 'ca', medianHomePrice: 650000, avgPropertyTaxRate: 0.0110, medianRent: 2400, population: 110003 },

  // Sacramento County
  { name: 'Elk Grove', slug: 'elk-grove', countySlug: 'sacramento-county', stateCode: 'ca', medianHomePrice: 590000, avgPropertyTaxRate: 0.0110, medianRent: 2300, population: 176124 },
  { name: 'Folsom', slug: 'folsom', countySlug: 'sacramento-county', stateCode: 'ca', medianHomePrice: 725000, avgPropertyTaxRate: 0.0108, medianRent: 2500, population: 82590 },
  { name: 'Rancho Cordova', slug: 'rancho-cordova', countySlug: 'sacramento-county', stateCode: 'ca', medianHomePrice: 475000, avgPropertyTaxRate: 0.0112, medianRent: 2000, population: 79332 },
  { name: 'Sacramento', slug: 'sacramento', countySlug: 'sacramento-county', stateCode: 'ca', medianHomePrice: 485000, avgPropertyTaxRate: 0.0112, medianRent: 2050, population: 524943 },

  // San Bernardino County
  { name: 'Fontana', slug: 'fontana', countySlug: 'san-bernardino-county', stateCode: 'ca', medianHomePrice: 545000, avgPropertyTaxRate: 0.0114, medianRent: 2100, population: 214547 },
  { name: 'Ontario', slug: 'ontario', countySlug: 'san-bernardino-county', stateCode: 'ca', medianHomePrice: 575000, avgPropertyTaxRate: 0.0112, medianRent: 2150, population: 175265 },
  { name: 'Rancho Cucamonga', slug: 'rancho-cucamonga', countySlug: 'san-bernardino-county', stateCode: 'ca', medianHomePrice: 690000, avgPropertyTaxRate: 0.0110, medianRent: 2400, population: 177603 },
  { name: 'Upland', slug: 'upland', countySlug: 'san-bernardino-county', stateCode: 'ca', medianHomePrice: 665000, avgPropertyTaxRate: 0.0110, medianRent: 2300, population: 79040 },

  // San Diego County
  { name: 'Carlsbad', slug: 'carlsbad', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 1350000, avgPropertyTaxRate: 0.0108, medianRent: 3100, population: 114746 },
  { name: 'Chula Vista', slug: 'chula-vista', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 780000, avgPropertyTaxRate: 0.0112, medianRent: 2500, population: 275487 },
  { name: 'Del Mar', slug: 'del-mar', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 3100000, avgPropertyTaxRate: 0.0104, medianRent: 4200, population: 4161 },
  { name: 'El Cajon', slug: 'el-cajon', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 680000, avgPropertyTaxRate: 0.0112, medianRent: 2200, population: 106215 },
  { name: 'Encinitas', slug: 'encinitas', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 1750000, avgPropertyTaxRate: 0.0106, medianRent: 3400, population: 62898 },
  { name: 'Escondido', slug: 'escondido', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 750000, avgPropertyTaxRate: 0.0110, medianRent: 2400, population: 151038 },
  { name: 'La Jolla', slug: 'la-jolla', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 2650000, avgPropertyTaxRate: 0.0104, medianRent: 3800, population: 46781 },
  { name: 'Oceanside', slug: 'oceanside', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 850000, avgPropertyTaxRate: 0.0110, medianRent: 2600, population: 176182 },
  { name: 'Poway', slug: 'poway', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 1100000, avgPropertyTaxRate: 0.0108, medianRent: 2900, population: 49417 },
  { name: 'San Diego', slug: 'san-diego', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 925000, avgPropertyTaxRate: 0.0113, medianRent: 2800, population: 1386932 },
  { name: 'Solana Beach', slug: 'solana-beach', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 1950000, avgPropertyTaxRate: 0.0105, medianRent: 3500, population: 13296 },
  { name: 'Vista', slug: 'vista', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 785000, avgPropertyTaxRate: 0.0110, medianRent: 2400, population: 101659 },
  { name: 'San Marcos', slug: 'san-marcos', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 820000, avgPropertyTaxRate: 0.0110, medianRent: 2500, population: 97749 },
  { name: 'Santee', slug: 'santee', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 750000, avgPropertyTaxRate: 0.0110, medianRent: 2400, population: 60037 },
  { name: 'National City', slug: 'national-city', countySlug: 'san-diego-county', stateCode: 'ca', medianHomePrice: 620000, avgPropertyTaxRate: 0.0116, medianRent: 2000, population: 61394 },

  // San Francisco County
  { name: 'San Francisco', slug: 'san-francisco', countySlug: 'san-francisco-county', stateCode: 'ca', medianHomePrice: 1450000, avgPropertyTaxRate: 0.0118, medianRent: 3400, population: 873965 },

  // San Luis Obispo County
  { name: 'San Luis Obispo', slug: 'san-luis-obispo', countySlug: 'san-luis-obispo-county', stateCode: 'ca', medianHomePrice: 925000, avgPropertyTaxRate: 0.0106, medianRent: 2600, population: 47536 },
  { name: 'Paso Robles', slug: 'paso-robles', countySlug: 'san-luis-obispo-county', stateCode: 'ca', medianHomePrice: 635000, avgPropertyTaxRate: 0.0108, medianRent: 2100, population: 31727 },

  // San Mateo County
  { name: 'Burlingame', slug: 'burlingame', countySlug: 'san-mateo-county', stateCode: 'ca', medianHomePrice: 2250000, avgPropertyTaxRate: 0.0106, medianRent: 3500, population: 30889 },
  { name: 'Foster City', slug: 'foster-city', countySlug: 'san-mateo-county', stateCode: 'ca', medianHomePrice: 1950000, avgPropertyTaxRate: 0.0108, medianRent: 3400, population: 33901 },
  { name: 'Redwood City', slug: 'redwood-city', countySlug: 'san-mateo-county', stateCode: 'ca', medianHomePrice: 1750000, avgPropertyTaxRate: 0.0110, medianRent: 3300, population: 84292 },
  { name: 'San Mateo', slug: 'san-mateo', countySlug: 'san-mateo-county', stateCode: 'ca', medianHomePrice: 1650000, avgPropertyTaxRate: 0.0110, medianRent: 3200, population: 105661 },
  { name: 'Daly City', slug: 'daly-city', countySlug: 'san-mateo-county', stateCode: 'ca', medianHomePrice: 1250000, avgPropertyTaxRate: 0.0114, medianRent: 2800, population: 104901 },
  { name: 'South San Francisco', slug: 'south-san-francisco', countySlug: 'san-mateo-county', stateCode: 'ca', medianHomePrice: 1350000, avgPropertyTaxRate: 0.0112, medianRent: 2900, population: 67789 },
  { name: 'San Carlos', slug: 'san-carlos', countySlug: 'san-mateo-county', stateCode: 'ca', medianHomePrice: 2100000, avgPropertyTaxRate: 0.0106, medianRent: 3500, population: 30573 },

  // Santa Barbara County
  { name: 'Goleta', slug: 'goleta', countySlug: 'santa-barbara-county', stateCode: 'ca', medianHomePrice: 1100000, avgPropertyTaxRate: 0.0106, medianRent: 2700, population: 32723 },
  { name: 'Santa Barbara', slug: 'santa-barbara', countySlug: 'santa-barbara-county', stateCode: 'ca', medianHomePrice: 1500000, avgPropertyTaxRate: 0.0106, medianRent: 3000, population: 88665 },

  // Santa Clara County
  { name: 'Cupertino', slug: 'cupertino', countySlug: 'santa-clara-county', stateCode: 'ca', medianHomePrice: 2750000, avgPropertyTaxRate: 0.0108, medianRent: 3800, population: 60170 },
  { name: 'Los Gatos', slug: 'los-gatos', countySlug: 'santa-clara-county', stateCode: 'ca', medianHomePrice: 2600000, avgPropertyTaxRate: 0.0106, medianRent: 3700, population: 33529 },
  { name: 'Milpitas', slug: 'milpitas', countySlug: 'santa-clara-county', stateCode: 'ca', medianHomePrice: 1450000, avgPropertyTaxRate: 0.0112, medianRent: 3200, population: 80430 },
  { name: 'Mountain View', slug: 'mountain-view', countySlug: 'santa-clara-county', stateCode: 'ca', medianHomePrice: 2150000, avgPropertyTaxRate: 0.0110, medianRent: 3500, population: 82376 },
  { name: 'Palo Alto', slug: 'palo-alto', countySlug: 'santa-clara-county', stateCode: 'ca', medianHomePrice: 3450000, avgPropertyTaxRate: 0.0104, medianRent: 4200, population: 68572 },
  { name: 'San Jose', slug: 'san-jose', countySlug: 'santa-clara-county', stateCode: 'ca', medianHomePrice: 1350000, avgPropertyTaxRate: 0.0114, medianRent: 3100, population: 1013240 },
  { name: 'Santa Clara', slug: 'santa-clara', countySlug: 'santa-clara-county', stateCode: 'ca', medianHomePrice: 1650000, avgPropertyTaxRate: 0.0112, medianRent: 3300, population: 127647 },
  { name: 'Sunnyvale', slug: 'sunnyvale', countySlug: 'santa-clara-county', stateCode: 'ca', medianHomePrice: 1950000, avgPropertyTaxRate: 0.0110, medianRent: 3500, population: 155805 },
  { name: 'Campbell', slug: 'campbell', countySlug: 'santa-clara-county', stateCode: 'ca', medianHomePrice: 1750000, avgPropertyTaxRate: 0.0108, medianRent: 3200, population: 42584 },
  { name: 'Saratoga', slug: 'saratoga', countySlug: 'santa-clara-county', stateCode: 'ca', medianHomePrice: 3850000, avgPropertyTaxRate: 0.0102, medianRent: 4500, population: 31051 },
  { name: 'Morgan Hill', slug: 'morgan-hill', countySlug: 'santa-clara-county', stateCode: 'ca', medianHomePrice: 1200000, avgPropertyTaxRate: 0.0108, medianRent: 2800, population: 45483 },
  { name: 'Gilroy', slug: 'gilroy', countySlug: 'santa-clara-county', stateCode: 'ca', medianHomePrice: 950000, avgPropertyTaxRate: 0.0110, medianRent: 2600, population: 59520 },

  // Santa Cruz County
  { name: 'Santa Cruz', slug: 'santa-cruz', countySlug: 'santa-cruz-county', stateCode: 'ca', medianHomePrice: 1150000, avgPropertyTaxRate: 0.0106, medianRent: 2800, population: 65011 },

  // Solano County
  { name: 'Fairfield', slug: 'fairfield', countySlug: 'solano-county', stateCode: 'ca', medianHomePrice: 540000, avgPropertyTaxRate: 0.0110, medianRent: 2100, population: 119881 },
  { name: 'Vallejo', slug: 'vallejo', countySlug: 'solano-county', stateCode: 'ca', medianHomePrice: 510000, avgPropertyTaxRate: 0.0114, medianRent: 2000, population: 121692 },

  // Sonoma County
  { name: 'Petaluma', slug: 'petaluma', countySlug: 'sonoma-county', stateCode: 'ca', medianHomePrice: 850000, avgPropertyTaxRate: 0.0108, medianRent: 2500, population: 60865 },
  { name: 'Santa Rosa', slug: 'santa-rosa', countySlug: 'sonoma-county', stateCode: 'ca', medianHomePrice: 725000, avgPropertyTaxRate: 0.0110, medianRent: 2300, population: 178127 },

  // Ventura County
  { name: 'Oxnard', slug: 'oxnard', countySlug: 'ventura-county', stateCode: 'ca', medianHomePrice: 685000, avgPropertyTaxRate: 0.0112, medianRent: 2300, population: 202063 },
  { name: 'Simi Valley', slug: 'simi-valley', countySlug: 'ventura-county', stateCode: 'ca', medianHomePrice: 850000, avgPropertyTaxRate: 0.0108, medianRent: 2600, population: 126871 },
  { name: 'Thousand Oaks', slug: 'thousand-oaks', countySlug: 'ventura-county', stateCode: 'ca', medianHomePrice: 950000, avgPropertyTaxRate: 0.0106, medianRent: 2800, population: 126966 },
  { name: 'Ventura', slug: 'ventura', countySlug: 'ventura-county', stateCode: 'ca', medianHomePrice: 820000, avgPropertyTaxRate: 0.0108, medianRent: 2500, population: 109592 },

  // ─── WASHINGTON ─────────────────────────────────────────────────────────────────

  // Benton County
  { name: 'Kennewick', slug: 'kennewick', countySlug: 'benton-county', stateCode: 'wa', medianHomePrice: 415000, avgPropertyTaxRate: 0.0092, medianRent: 1650, population: 84347 },
  { name: 'Richland', slug: 'richland', countySlug: 'benton-county', stateCode: 'wa', medianHomePrice: 445000, avgPropertyTaxRate: 0.0090, medianRent: 1700, population: 60560 },

  // Clark County
  { name: 'Battle Ground', slug: 'battle-ground', countySlug: 'clark-county', stateCode: 'wa', medianHomePrice: 520000, avgPropertyTaxRate: 0.0095, medianRent: 1900, population: 23105 },
  { name: 'Camas', slug: 'camas', countySlug: 'clark-county', stateCode: 'wa', medianHomePrice: 650000, avgPropertyTaxRate: 0.0092, medianRent: 2200, population: 26065 },
  { name: 'Vancouver', slug: 'vancouver', countySlug: 'clark-county', stateCode: 'wa', medianHomePrice: 485000, avgPropertyTaxRate: 0.0098, medianRent: 1850, population: 190915 },

  // Franklin County
  { name: 'Pasco', slug: 'pasco', countySlug: 'franklin-county', stateCode: 'wa', medianHomePrice: 395000, avgPropertyTaxRate: 0.0095, medianRent: 1600, population: 77108 },

  // Island County
  { name: 'Oak Harbor', slug: 'oak-harbor', countySlug: 'island-county', stateCode: 'wa', medianHomePrice: 465000, avgPropertyTaxRate: 0.0088, medianRent: 1750, population: 24832 },

  // King County
  { name: 'Auburn', slug: 'auburn', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 525000, avgPropertyTaxRate: 0.0102, medianRent: 1900, population: 87227 },
  { name: 'Bellevue', slug: 'bellevue', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 1550000, avgPropertyTaxRate: 0.0088, medianRent: 3200, population: 151854 },
  { name: 'Bothell', slug: 'bothell', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 875000, avgPropertyTaxRate: 0.0095, medianRent: 2500, population: 50193 },
  { name: 'Burien', slug: 'burien', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 530000, avgPropertyTaxRate: 0.0105, medianRent: 1850, population: 52066 },
  { name: 'Federal Way', slug: 'federal-way', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 510000, avgPropertyTaxRate: 0.0105, medianRent: 1800, population: 99037 },
  { name: 'Issaquah', slug: 'issaquah', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 1100000, avgPropertyTaxRate: 0.0090, medianRent: 2800, population: 40051 },
  { name: 'Kent', slug: 'kent', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 520000, avgPropertyTaxRate: 0.0105, medianRent: 1850, population: 136588 },
  { name: 'Kirkland', slug: 'kirkland', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 1050000, avgPropertyTaxRate: 0.0092, medianRent: 2600, population: 92175 },
  { name: 'Mercer Island', slug: 'mercer-island', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 2250000, avgPropertyTaxRate: 0.0085, medianRent: 3800, population: 25748 },
  { name: 'Redmond', slug: 'redmond', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 1200000, avgPropertyTaxRate: 0.0090, medianRent: 2900, population: 73256 },
  { name: 'Renton', slug: 'renton', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 650000, avgPropertyTaxRate: 0.0102, medianRent: 2200, population: 106785 },
  { name: 'Sammamish', slug: 'sammamish', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 1550000, avgPropertyTaxRate: 0.0088, medianRent: 3200, population: 65892 },
  { name: 'SeaTac', slug: 'seatac', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 440000, avgPropertyTaxRate: 0.0108, medianRent: 1700, population: 30160 },
  { name: 'Seattle', slug: 'seattle', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 850000, avgPropertyTaxRate: 0.0100, medianRent: 2600, population: 737015 },
  { name: 'Woodinville', slug: 'woodinville', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 1050000, avgPropertyTaxRate: 0.0092, medianRent: 2700, population: 13247 },
  { name: 'Kenmore', slug: 'kenmore', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 750000, avgPropertyTaxRate: 0.0095, medianRent: 2300, population: 23914 },
  { name: 'Maple Valley', slug: 'maple-valley', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 720000, avgPropertyTaxRate: 0.0098, medianRent: 2300, population: 27015 },
  { name: 'Covington', slug: 'covington', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 620000, avgPropertyTaxRate: 0.0100, medianRent: 2100, population: 21482 },
  { name: 'Tukwila', slug: 'tukwila', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 450000, avgPropertyTaxRate: 0.0110, medianRent: 1700, population: 21798 },
  { name: 'Shoreline', slug: 'shoreline', countySlug: 'king-county', stateCode: 'wa', medianHomePrice: 750000, avgPropertyTaxRate: 0.0098, medianRent: 2300, population: 57027 },

  // Kitsap County
  { name: 'Bremerton', slug: 'bremerton', countySlug: 'kitsap-county', stateCode: 'wa', medianHomePrice: 425000, avgPropertyTaxRate: 0.0098, medianRent: 1650, population: 44122 },
  { name: 'Silverdale', slug: 'silverdale', countySlug: 'kitsap-county', stateCode: 'wa', medianHomePrice: 520000, avgPropertyTaxRate: 0.0095, medianRent: 1850, population: 21328 },

  // Pierce County
  { name: 'Bonney Lake', slug: 'bonney-lake', countySlug: 'pierce-county', stateCode: 'wa', medianHomePrice: 575000, avgPropertyTaxRate: 0.0100, medianRent: 2100, population: 22854 },
  { name: 'Gig Harbor', slug: 'gig-harbor', countySlug: 'pierce-county', stateCode: 'wa', medianHomePrice: 725000, avgPropertyTaxRate: 0.0092, medianRent: 2400, population: 12374 },
  { name: 'Lakewood', slug: 'lakewood', countySlug: 'pierce-county', stateCode: 'wa', medianHomePrice: 420000, avgPropertyTaxRate: 0.0105, medianRent: 1650, population: 65524 },
  { name: 'Puyallup', slug: 'puyallup', countySlug: 'pierce-county', stateCode: 'wa', medianHomePrice: 520000, avgPropertyTaxRate: 0.0100, medianRent: 1900, population: 43479 },
  { name: 'Tacoma', slug: 'tacoma', countySlug: 'pierce-county', stateCode: 'wa', medianHomePrice: 475000, avgPropertyTaxRate: 0.0108, medianRent: 1750, population: 219346 },
  { name: 'University Place', slug: 'university-place', countySlug: 'pierce-county', stateCode: 'wa', medianHomePrice: 495000, avgPropertyTaxRate: 0.0102, medianRent: 1800, population: 34040 },

  // Skagit County
  { name: 'Burlington', slug: 'burlington', countySlug: 'skagit-county', stateCode: 'wa', medianHomePrice: 475000, avgPropertyTaxRate: 0.0092, medianRent: 1700, population: 9768 },

  // Snohomish County
  { name: 'Edmonds', slug: 'edmonds', countySlug: 'snohomish-county', stateCode: 'wa', medianHomePrice: 825000, avgPropertyTaxRate: 0.0092, medianRent: 2400, population: 42347 },
  { name: 'Everett', slug: 'everett', countySlug: 'snohomish-county', stateCode: 'wa', medianHomePrice: 575000, avgPropertyTaxRate: 0.0102, medianRent: 1950, population: 112300 },
  { name: 'Lake Stevens', slug: 'lake-stevens', countySlug: 'snohomish-county', stateCode: 'wa', medianHomePrice: 625000, avgPropertyTaxRate: 0.0095, medianRent: 2100, population: 42104 },
  { name: 'Lynnwood', slug: 'lynnwood', countySlug: 'snohomish-county', stateCode: 'wa', medianHomePrice: 650000, avgPropertyTaxRate: 0.0100, medianRent: 2100, population: 40615 },
  { name: 'Marysville', slug: 'marysville', countySlug: 'snohomish-county', stateCode: 'wa', medianHomePrice: 560000, avgPropertyTaxRate: 0.0098, medianRent: 2000, population: 70714 },
  { name: 'Mukilteo', slug: 'mukilteo', countySlug: 'snohomish-county', stateCode: 'wa', medianHomePrice: 875000, avgPropertyTaxRate: 0.0090, medianRent: 2500, population: 21414 },

  // Spokane County
  { name: 'Liberty Lake', slug: 'liberty-lake', countySlug: 'spokane-county', stateCode: 'wa', medianHomePrice: 535000, avgPropertyTaxRate: 0.0092, medianRent: 1900, population: 12343 },
  { name: 'Spokane', slug: 'spokane', countySlug: 'spokane-county', stateCode: 'wa', medianHomePrice: 375000, avgPropertyTaxRate: 0.0105, medianRent: 1450, population: 228989 },
  { name: 'Spokane Valley', slug: 'spokane-valley', countySlug: 'spokane-county', stateCode: 'wa', medianHomePrice: 395000, avgPropertyTaxRate: 0.0100, medianRent: 1500, population: 102976 },

  // Thurston County
  { name: 'Lacey', slug: 'lacey', countySlug: 'thurston-county', stateCode: 'wa', medianHomePrice: 465000, avgPropertyTaxRate: 0.0098, medianRent: 1750, population: 56444 },
  { name: 'Olympia', slug: 'olympia', countySlug: 'thurston-county', stateCode: 'wa', medianHomePrice: 485000, avgPropertyTaxRate: 0.0100, medianRent: 1800, population: 55605 },

  // Whatcom County
  { name: 'Bellingham', slug: 'bellingham', countySlug: 'whatcom-county', stateCode: 'wa', medianHomePrice: 595000, avgPropertyTaxRate: 0.0095, medianRent: 2000, population: 95368 },
  { name: 'Lynden', slug: 'lynden', countySlug: 'whatcom-county', stateCode: 'wa', medianHomePrice: 550000, avgPropertyTaxRate: 0.0092, medianRent: 1850, population: 16153 },

  // Yakima County
  { name: 'Yakima', slug: 'yakima', countySlug: 'yakima-county', stateCode: 'wa', medianHomePrice: 315000, avgPropertyTaxRate: 0.0105, medianRent: 1300, population: 96968 },
];
