import { Home, Calculator, FileText, Phone, User } from 'lucide-react';
import { createPageUrl } from '@/lib/utils';

export interface DropdownItem {
  title: string;
  url: string;
  isHeader?: boolean;
}

export interface NavigationItem {
  title: string;
  page: string;
  url: string;
  icon: any;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export const loanProgramsDropdown: DropdownItem[] = [
  { title: 'All Programs', url: '/loan-programs' },

  // Home Equity Solutions - MOVED TO TOP
  { title: '💰 EQUITY', url: '#', isHeader: true },
  { title: 'HELOC', url: '/loan-programs/heloc' },
  { title: 'HELOAN', url: '/loan-programs/heloan' },

  // Refinancing Options
  { title: '🔄 REFINANCING', url: '#', isHeader: true },
  { title: 'Term Refinance', url: '/loan-programs/rate-term-refinance' },
  { title: 'Cash-Out Refinance', url: '/loan-programs/cash-out-refinance' },

  // Home Purchase Loans
  { title: '🏠 PURCHASE', url: '#', isHeader: true },
  { title: 'FHA Loans', url: '/loan-programs/fha-loans' },
  { title: 'Orange County FHA Limits', url: '/loan-programs/orange-county-fha-loan-limits' },
  { title: 'VA Loans', url: '/loan-programs/va-loans' },
  { title: 'Orange County VA Loans', url: '/loan-programs/orange-county-va-loans' },
  { title: 'Conventional Loans', url: '/loan-programs/conventional-loans' },
  { title: 'Jumbo Loans', url: '/loan-programs/jumbo-loans' },
  { title: 'USDA Rural Loans', url: '/loan-programs/usda-rural-loans' },

  // Self-Employed & Non-QM
  { title: '💼 SELF-EMPLOYED', url: '#', isHeader: true },
  { title: 'Non-QM Overview', url: '/loan-programs/non-qm-loans' },
  { title: 'Bank Statement Loans', url: '/loan-programs/bank-statement-loans' },
  { title: 'P&L Statement Loans', url: '/loan-programs/profit-loss-statement-loans' },
  { title: 'Asset Depletion Loans', url: '/loan-programs/asset-depletion-loans' },

  // Investment & Specialty
  { title: '🏢 INVESTMENT', url: '#', isHeader: true },
  { title: 'DSCR Investment Loans', url: '/loan-programs/dscr-investment-loans' },
  { title: 'Fix & Flip Loans', url: '/loan-programs/fix-flip-loans' },
  { title: 'Foreign National Loans', url: '/loan-programs/foreign-national-loans' },

  // City Specific Programs
  { title: '🏙️ CITY SPECIFIC', url: '#', isHeader: true },
  { title: 'FHA Loans Irvine', url: '/loan-programs/fha-loans-irvine' },
  { title: 'Bank Statement Loans Irvine', url: '/loan-programs/bank-statement-loans-irvine' }
];

export const serviceAreasDropdown: DropdownItem[] = [
  { title: 'All Service Areas', url: '/areas' },

  // Premium Coastal Communities
  { title: '🏖️ COASTAL', url: '#', isHeader: true },
  { title: 'Newport Beach', url: '/areas/newport-beach-mortgage-broker' },
  { title: 'Laguna Beach', url: '/areas/laguna-beach-mortgage-broker' },
  { title: 'Dana Point', url: '/areas/dana-point-mortgage-broker' },
  { title: 'Seal Beach', url: '/areas/seal-beach-mortgage-broker' },

  // Central Orange County
  { title: '🏢 CENTRAL', url: '#', isHeader: true },
  { title: 'Irvine', url: '/areas/irvine-mortgage-broker' },
  { title: 'Irvine Loans', url: '/areas/irvine-mortgage-rates' },
  { title: 'Costa Mesa', url: '/areas/costa-mesa-mortgage-broker' },
  { title: 'Costa Mesa Loans', url: '/areas/costa-mesa-mortgage-rates' },
  { title: 'Orange', url: '/areas/orange-mortgage-broker' },
  { title: 'Santa Ana', url: '/areas/santa-ana-mortgage-broker' },
  { title: 'Santa Ana Loans', url: '/areas/santa-ana-mortgage-rates' },
  { title: 'Santa Ana Refinance', url: '/areas/santa-ana-refinance-rates' },
  { title: 'Fountain Valley', url: '/areas/fountain-valley-mortgage-broker' },
  { title: 'Fountain Valley Loans', url: '/areas/fountain-valley-mortgage-rates' },

  // Irvine Neighborhoods
  { title: '🏘️ IRVINE NEIGHBORHOODS', url: '#', isHeader: true },
  { title: 'University Park', url: '/areas/irvine-neighborhoods/university-park-mortgage-broker' },
  { title: 'Woodbridge', url: '/areas/irvine-neighborhoods/woodbridge-mortgage-broker' },
  { title: 'Northwood', url: '/areas/irvine-neighborhoods/northwood-mortgage-broker' },
  { title: 'Turtle Rock', url: '/areas/irvine-neighborhoods/turtle-rock-mortgage-broker' },
  { title: 'Quail Hill', url: '/areas/irvine-neighborhoods/quail-hill-mortgage-broker' },
  { title: 'Cypress Village', url: '/areas/irvine-neighborhoods/cypress-village-mortgage-broker' },

  // Newport Beach Neighborhoods
  { title: '🌊 NEWPORT NEIGHBORHOODS', url: '#', isHeader: true },
  { title: 'Lido Isle', url: '/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker' },
  { title: 'Corona del Mar', url: '/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker' },
  { title: 'Newport Coast', url: '/areas/newport-beach-neighborhoods/newport-coast-mortgage-broker' },
  { title: 'Balboa Island', url: '/areas/newport-beach-neighborhoods/balboa-island-mortgage-broker' },

  // ZIP Code Areas
  { title: '📍 ZIP CODE AREAS', url: '#', isHeader: true },
  { title: 'Irvine 92614', url: '/zip-codes/92614-irvine-mortgage-broker' },
  { title: 'Corona del Mar 92625', url: '/zip-codes/92625-corona-del-mar-mortgage-broker' },
  { title: 'Newport Beach 92660', url: '/zip-codes/92660-newport-beach-mortgage-broker' },
  { title: 'Irvine 92602', url: '/zip-codes/92602-irvine-mortgage-broker' },

  // North Orange County
  { title: '🏘️ NORTH', url: '#', isHeader: true },
  { title: 'Anaheim', url: '/areas/anaheim-mortgage-broker' },
  { title: 'Anaheim Loans', url: '/areas/anaheim-mortgage-rates' },
  { title: 'Fullerton', url: '/areas/fullerton-mortgage-broker' },
  { title: 'Yorba Linda', url: '/areas/yorba-linda-mortgage-broker' },
  { title: 'Yorba Linda Loans', url: '/areas/yorba-linda-mortgage-rates' },
  { title: 'Garden Grove', url: '/areas/garden-grove-mortgage-broker' },
  { title: 'Westminster', url: '/areas/westminster-mortgage-broker' },

  // South Orange County
  { title: '🏡 SOUTH', url: '#', isHeader: true },
  { title: 'Mission Viejo', url: '/areas/mission-viejo-mortgage-broker' },
  { title: 'Laguna Niguel', url: '/areas/laguna-niguel-mortgage-broker' },
  { title: 'Laguna Niguel Loans', url: '/areas/laguna-niguel-mortgage-rates' },
  { title: 'Laguna Woods', url: '/areas/laguna-woods-mortgage-broker' },

  // Beach Cities
  { title: '🌊 BEACH', url: '#', isHeader: true },
  { title: 'Huntington Beach', url: '/areas/huntington-beach-mortgage-broker' },

  // Luxury Markets
  { title: '💎 LUXURY MARKETS', url: '#', isHeader: true },
  { title: 'Waterfront Homes', url: '/luxury-markets/waterfront-homes-mortgage-broker' },
  { title: 'Golf Course Homes', url: '/luxury-markets/golf-course-homes-mortgage-broker' },
  { title: 'Ultra-Luxury Estates', url: '/luxury-markets/ultra-luxury-estates-mortgage-broker' },

  // School Districts  
  { title: '🎓 SCHOOL DISTRICTS', url: '#', isHeader: true },
  { title: 'Irvine Unified School District', url: '/areas/irvine-unified-school-district-mortgage-broker' }
];

export const guidesAndBlogDropdown: DropdownItem[] = [
  { title: 'All Guides & Articles', url: '/guides' },

  // Expert Articles - NEW
  { title: '✨ EXPERT ARTICLES', url: '#', isHeader: true },
  { title: 'All Articles', url: '/articles' },
  { title: 'Best Mortgage Broker in Orange County', url: '/articles/best-mortgage-broker-orange-county' },
  { title: 'Orange County Refinance Specialist', url: '/articles/orange-county-mortgage-refinance-specialist' },
  { title: 'Jumbo Loan Broker Orange County', url: '/articles/jumbo-loan-broker-orange-county' },
  { title: 'First-Time Homebuyer Mortgage', url: '/articles/first-time-homebuyer-mortgage-orange-county' },
  { title: 'VA Loan Mortgage Broker', url: '/articles/va-loan-mortgage-broker-orange-county' },

  // Complete Guides
  { title: '📚 COMPLETE GUIDES', url: '#', isHeader: true },
  { title: 'Orange County Home Buyer Guide', url: '/guides/orange-county-home-buyer-guide' },
  { title: 'Orange County Refinancing Guide', url: '/guides/orange-county-refinancing-guide' },
  { title: 'Orange County School Districts Guide', url: '/guides/orange-county-school-districts' },
  { title: 'Orange County Investment Property Guide', url: '/guides/orange-county-investment-property' },
  { title: 'Orange County VA Loans Guide', url: '/guides/orange-county-va-loans' },
  { title: 'Orange County Jumbo Loans Guide', url: '/guides/orange-county-jumbo-loans' },

  // Market Analysis
  { title: '📊 MARKET ANALYSIS', url: '#', isHeader: true },
  { title: 'Orange County Market Forecast 2025-2026', url: '/guides/orange-county-market-forecast-2025-2026' },

  // Seasonal Market Guides
  { title: '🌟 SEASONAL GUIDES', url: '#', isHeader: true },
  { title: 'Spring 2025 Home Buying Guide', url: '/guides/spring-2025-home-buying-guide' },
  { title: 'Summer 2025 Market Guide', url: '/guides/summer-2025-market-guide' },

  // Neighborhood Guides
  { title: '🏘️ NEIGHBORHOOD GUIDES', url: '#', isHeader: true },
  { title: 'All Neighborhood Guides', url: '/neighborhood-guide' },
  { title: 'Irvine vs Newport Beach', url: '/neighborhood-guide/irvine-vs-newport-beach-home-buying-guide' },
  { title: 'Mission Viejo vs Irvine', url: '/neighborhood-guide/mission-viejo-vs-irvine-home-buying-guide' },
  { title: 'Newport Beach vs Laguna Beach', url: '/neighborhood-guide/newport-beach-vs-laguna-beach-home-buying-guide' },
  { title: 'Huntington Beach vs Costa Mesa', url: '/neighborhood-guide/huntington-beach-vs-costa-mesa-home-buying-guide' },
  { title: 'OC Neighborhoods Comparison', url: '/neighborhood-guide/orange-county-neighborhoods-comparison-guide' },

  // Blog Articles
  { title: '📝 OTHER ARTICLES', url: '#', isHeader: true },
  { title: 'Why Choose Local Mortgage Broker', url: '/guides/why-choose-local-mortgage-broker' }
];

export const resourcesDropdown: DropdownItem[] = [
  { title: 'All Resources', url: '/resources' },

  // Financial Resources
  { title: '💰 ASSISTANCE & TOOLS', url: '#', isHeader: true },
  { title: 'Down Payment Assistance', url: '/resources/down-payment-assistance' },
  { title: 'Credit Repair Resources', url: '/resources/credit-repair' },
  { title: 'Mortgage Calculators', url: '/calculator' },

  // Calculator Suite
  { title: '🧮 CALCULATOR SUITE', url: '#', isHeader: true },
  { title: 'Home Affordability Calculator', url: '/calculator/affordability' },
  { title: 'Debt-to-Income Calculator', url: '/calculator/debt-to-income' },
  { title: 'Closing Costs Calculator', url: '/calculator/closing-costs' },

  // Market & Reference  
  { title: '📊 DATA & REFERENCE', url: '#', isHeader: true },
  { title: 'Orange County Market Data', url: '/resources/market-data' },
  { title: 'Mortgage Glossary', url: '/resources/glossary' },

  // Process & Support
  { title: '📋 PROCESS & SUPPORT', url: '#', isHeader: true },
  { title: 'Document Checklist', url: '/resources/document-checklist' },
  { title: 'Service Providers Directory', url: '/resources/service-providers' }
];

export const purchaseDropdown: DropdownItem[] = [
  // Home Purchase Loans
  { title: '🏠 PURCHASE LOANS', url: '#', isHeader: true },
  { title: 'FHA Loans', url: '/loan-programs/fha-loans' },
  { title: 'VA Loans', url: '/loan-programs/va-loans' },
  { title: 'Conventional Loans', url: '/loan-programs/conventional-loans' },
  { title: 'Jumbo Loans', url: '/loan-programs/jumbo-loans' },
  { title: 'USDA Rural Loans', url: '/loan-programs/usda-rural-loans' },

  // First-Time Buyer
  { title: '🌟 FIRST-TIME BUYERS', url: '#', isHeader: true },
  { title: 'First-Time Buyer Guide', url: '/guides/orange-county-home-buyer-guide' },
  { title: 'Down Payment Assistance', url: '/resources/down-payment-assistance' },
  { title: 'Orange County FHA Limits', url: '/loan-programs/orange-county-fha-loan-limits' },
  { title: 'Orange County VA Loans', url: '/loan-programs/orange-county-va-loans' },
];

export const refinanceDropdown: DropdownItem[] = [
  // Refinancing Options
  { title: '🔄 REFINANCING', url: '#', isHeader: true },
  { title: 'Term Refinance', url: '/loan-programs/rate-term-refinance' },
  { title: 'Cash-Out Refinance', url: '/loan-programs/cash-out-refinance' },
  { title: 'Refinancing Guide', url: '/guides/orange-county-refinancing-guide' },

  // Home Equity Solutions
  { title: '💰 HOME EQUITY', url: '#', isHeader: true },
  { title: 'HELOC', url: '/loan-programs/heloc' },
  { title: 'HELOAN', url: '/loan-programs/heloan' },
];

export const specialtyLoansDropdown: DropdownItem[] = [
  // Self-Employed & Non-QM
  { title: '💼 SELF-EMPLOYED', url: '#', isHeader: true },
  { title: 'Non-QM Overview', url: '/loan-programs/non-qm-loans' },
  { title: 'Bank Statement Loans', url: '/loan-programs/bank-statement-loans' },
  { title: 'P&L Statement Loans', url: '/loan-programs/profit-loss-statement-loans' },
  { title: 'Asset Depletion Loans', url: '/loan-programs/asset-depletion-loans' },

  // Investment & Specialty
  { title: '🏢 INVESTMENT', url: '#', isHeader: true },
  { title: 'DSCR Investment Loans', url: '/loan-programs/dscr-investment-loans' },
  { title: 'Fix & Flip Loans', url: '/loan-programs/fix-flip-loans' },
  { title: 'Foreign National Loans', url: '/loan-programs/foreign-national-loans' },
];

export const guidesDropdown: DropdownItem[] = [
  // Complete Guides
  { title: '📚 COMPLETE GUIDES', url: '#', isHeader: true },
  { title: 'Orange County Home Buyer Guide', url: '/guides/orange-county-home-buyer-guide' },
  { title: 'Orange County Refinancing Guide', url: '/guides/orange-county-refinancing-guide' },
  { title: 'Orange County VA Loans Guide', url: '/guides/orange-county-va-loans' },
  { title: 'Orange County Jumbo Loans Guide', url: '/guides/orange-county-jumbo-loans' },

  // City Pages - Major Markets
  { title: '🏙️ MAJOR CITIES', url: '#', isHeader: true },
  { title: 'Irvine Mortgage Broker', url: '/areas/irvine-mortgage-broker' },
  { title: 'Newport Beach Mortgage Broker', url: '/areas/newport-beach-mortgage-broker' },
  { title: 'Anaheim Mortgage Broker', url: '/areas/anaheim-mortgage-broker' },
  { title: 'Costa Mesa Mortgage Broker', url: '/areas/costa-mesa-mortgage-broker' },
  { title: 'Mission Viejo Mortgage Broker', url: '/areas/mission-viejo-mortgage-broker' },
  { title: 'Huntington Beach Mortgage Broker', url: '/areas/huntington-beach-mortgage-broker' },

  // Premium Areas
  { title: '🏖️ COASTAL AREAS', url: '#', isHeader: true },
  { title: 'Laguna Beach Mortgage Broker', url: '/areas/laguna-beach-mortgage-broker' },
  { title: 'Dana Point Mortgage Broker', url: '/areas/dana-point-mortgage-broker' },
  { title: 'Seal Beach Mortgage Broker', url: '/areas/seal-beach-mortgage-broker' },

  // All Areas Link
  { title: '📍 ALL AREAS', url: '#', isHeader: true },
  { title: 'View All Service Areas', url: '/areas' },
];

export const blogDropdown: DropdownItem[] = [
  { title: 'All Articles', url: '/guides' },

  // Loan Programs
  { title: '💰 LOAN PROGRAMS', url: '#', isHeader: true },
  { title: 'All Programs', url: '/loan-programs' },
  { title: 'FHA Loans', url: '/loan-programs/fha-loans' },
  { title: 'VA Loans', url: '/loan-programs/va-loans' },
  { title: 'Conventional Loans', url: '/loan-programs/conventional-loans' },
  { title: 'Jumbo Loans', url: '/loan-programs/jumbo-loans' },
  { title: 'HELOC', url: '/loan-programs/heloc' },
  { title: 'HELOAN', url: '/loan-programs/heloan' },
  { title: 'Non-QM Loans', url: '/loan-programs/non-qm-loans' },

  // Guides
  { title: '📚 GUIDES', url: '#', isHeader: true },
  { title: 'Home Buyer Guide', url: '/guides/orange-county-home-buyer-guide' },
  { title: 'Refinancing Guide', url: '/guides/orange-county-refinancing-guide' },
  { title: 'Investment Property', url: '/guides/orange-county-investment-property' },

  // Service Areas
  { title: '📍 SERVICE AREAS', url: '#', isHeader: true },
  { title: 'All Areas', url: '/areas' },
  { title: 'Irvine', url: '/areas/irvine-mortgage-broker' },
  { title: 'Newport Beach', url: '/areas/newport-beach-mortgage-broker' },
  { title: 'Costa Mesa', url: '/areas/costa-mesa-mortgage-broker' },

  // Resources
  { title: '🔧 RESOURCES', url: '#', isHeader: true },
  { title: 'Calculator', url: '/calculator' },
  { title: 'Contact', url: '/contact' },
];

export const navigationItems: NavigationItem[] = [
  {
    title: 'Home',
    page: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'About',
    page: 'About',
    url: '/about',
    icon: User,
  },
  {
    title: 'Contact',
    page: 'Contact',
    url: '/contact',
    icon: Phone,
  },
  {
    title: 'Blog',
    page: 'Blog',
    url: '/guides',
    icon: FileText,
    hasDropdown: true,
    dropdownItems: blogDropdown
  },
];

