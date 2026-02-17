import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  Calculator,
  ClipboardList,
  FileText,
  Folder,
  Gem,
  GraduationCap,
  Home,
  LayoutGrid,
  Map,
  MapPin,
  Phone,
  PiggyBank,
  RefreshCw,
  Sparkles,
  User,
  Waves,
  Wrench,
} from 'lucide-react';

export interface DropdownItem {
  title: string;
  url: string;
  isHeader?: boolean;
  icon?: LucideIcon;
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
  { title: 'Equity', url: '#', isHeader: true, icon: PiggyBank },
  { title: 'HELOC', url: '/loan-programs/heloc' },
  { title: 'HELOAN', url: '/loan-programs/heloan' },

  // Refinancing Options
  { title: 'Refinancing', url: '#', isHeader: true, icon: RefreshCw },
  { title: 'Rate & Term Refinance', url: '/loan-programs/rate-term-refinance' },
  { title: 'Cash-Out Refinance', url: '/loan-programs/cash-out-refinance' },



  // Self-Employed & Non-QM
  { title: 'Self-Employed', url: '#', isHeader: true, icon: Briefcase },
  { title: 'Non-QM Overview', url: '/loan-programs/non-qm-loans' },
  { title: 'Bank Statement Loans', url: '/loan-programs/bank-statement-loans' },
  { title: 'P&L Statement Loans', url: '/loan-programs/profit-loss-statement-loans' },
  { title: 'Asset Depletion Loans', url: '/loan-programs/asset-depletion-loans' },

  // Investment & Specialty
  { title: 'Investment', url: '#', isHeader: true, icon: Building2 },
  { title: 'DSCR Investment Loans', url: '/loan-programs/dscr-investment-loans' },
  { title: 'Fix & Flip Loans', url: '/loan-programs/fix-flip-loans' },
  { title: 'Foreign National Loans', url: '/loan-programs/foreign-national-loans' },

  // City Specific Programs
  { title: 'City Specific', url: '#', isHeader: true, icon: MapPin },
  { title: 'FHA Loans Irvine', url: '/loan-programs/fha-loans-irvine' },
  { title: 'Bank Statement Loans Irvine', url: '/loan-programs/bank-statement-loans-irvine' }
];

export const serviceAreasDropdown: DropdownItem[] = [
  { title: 'All Service Areas (CA & WA)', url: '/areas' },

  // Statewide hubs
  { title: 'Statewide Hubs', url: '#', isHeader: true, icon: Map },
  { title: 'California Service Areas', url: '/areas/california' },
  { title: 'Washington Service Areas', url: '/areas/washington' },
  { title: 'California Mortgage Hub', url: '/blog/wholesale-mortgage-broker-california-guide-2026' },
  { title: 'Washington Mortgage Hub', url: '/blog/wholesale-mortgage-broker-washington-2026' },

  // Premium Coastal Communities
  { title: 'Coastal', url: '#', isHeader: true, icon: Waves },
  { title: 'Newport Beach', url: '/areas/newport-beach-mortgage-broker' },
  { title: 'Laguna Beach', url: '/areas/laguna-beach-mortgage-broker' },
  { title: 'Dana Point', url: '/areas/dana-point-mortgage-broker' },
  { title: 'Seal Beach', url: '/areas/seal-beach-mortgage-broker' },

  // Core Orange County Cluster
  { title: 'OC Core', url: '#', isHeader: true, icon: Building2 },
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
  { title: 'Irvine Neighborhoods', url: '#', isHeader: true, icon: LayoutGrid },
  { title: 'University Park', url: '/areas/irvine-neighborhoods' },
  { title: 'Woodbridge', url: '/areas/irvine-neighborhoods/woodbridge-mortgage-broker' },
  { title: 'Northwood', url: '/areas/irvine-neighborhoods/northwood-mortgage-broker' },
  { title: 'Turtle Rock', url: '/areas/irvine-neighborhoods' },
  { title: 'Quail Hill', url: '/areas/irvine-neighborhoods/quail-hill-mortgage-broker' },
  { title: 'Cypress Village', url: '/areas/irvine-neighborhoods' },

  // Newport Beach Neighborhoods
  { title: 'Newport Neighborhoods', url: '#', isHeader: true, icon: Waves },
  { title: 'Lido Isle', url: '/areas/newport-beach-neighborhoods/lido-isle-mortgage-broker' },
  { title: 'Corona del Mar', url: '/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker' },
  { title: 'Newport Coast', url: '/areas/newport-beach-neighborhoods/newport-coast-mortgage-broker' },
  { title: 'Balboa Island', url: '/areas/newport-beach-neighborhoods/balboa-island-mortgage-broker' },

  // ZIP Code Areas
  { title: 'ZIP Code Areas', url: '#', isHeader: true, icon: MapPin },
  { title: 'Irvine 92614', url: '/zip-codes/92614-irvine-mortgage-broker' },
  { title: 'Corona del Mar 92625', url: '/zip-codes/92625-corona-del-mar-mortgage-broker' },
  { title: 'Newport Beach 92660', url: '/zip-codes/92660-newport-beach-mortgage-broker' },
  { title: 'Irvine 92602', url: '/zip-codes/92602-irvine-mortgage-broker' },

  // North Orange County Cluster
  { title: 'OC North', url: '#', isHeader: true, icon: LayoutGrid },
  { title: 'Anaheim', url: '/areas/anaheim-mortgage-broker' },
  { title: 'Anaheim Loans', url: '/areas/anaheim-mortgage-rates' },
  { title: 'Fullerton', url: '/areas/fullerton-mortgage-broker' },
  { title: 'Yorba Linda', url: '/areas/yorba-linda-mortgage-broker' },
  { title: 'Yorba Linda Loans', url: '/areas/yorba-linda-mortgage-rates' },
  { title: 'Garden Grove', url: '/areas/garden-grove-mortgage-broker' },
  { title: 'Westminster', url: '/areas/westminster-mortgage-broker' },

  // South Orange County Cluster
  { title: 'OC South', url: '#', isHeader: true, icon: LayoutGrid },
  { title: 'Mission Viejo', url: '/areas/mission-viejo-mortgage-broker' },
  { title: 'Laguna Niguel', url: '/areas/laguna-niguel-mortgage-broker' },
  { title: 'Laguna Niguel Loans', url: '/areas/laguna-niguel-mortgage-rates' },
  { title: 'Laguna Woods', url: '/areas/laguna-woods-mortgage-broker' },

  // Beach Cities
  { title: 'Beach Cities', url: '#', isHeader: true, icon: Waves },
  { title: 'Huntington Beach', url: '/areas/huntington-beach-mortgage-broker' },

  // Luxury Markets
  { title: 'Luxury Markets', url: '#', isHeader: true, icon: Gem },
  { title: 'Waterfront Homes', url: '/luxury-markets/waterfront-homes-mortgage-broker' },
  { title: 'Golf Course Homes', url: '/luxury-markets/golf-course-homes-mortgage-broker' },
  { title: 'Ultra-Luxury Estates', url: '/luxury-markets/ultra-luxury-estates-mortgage-broker' },

  // School Districts  
  { title: 'School Districts', url: '#', isHeader: true, icon: GraduationCap },
  { title: 'Irvine Unified School District', url: '/areas/irvine-unified-school-district-mortgage-broker' }
];

export const guidesAndBlogDropdown: DropdownItem[] = [
  { title: 'All Guides & Blog Posts', url: '/guides' },

  // Statewide Hubs
  { title: 'Statewide Hubs', url: '#', isHeader: true, icon: Map },
  { title: 'California Mortgage Hub', url: '/blog/wholesale-mortgage-broker-california-guide-2026' },
  { title: 'Washington Mortgage Hub', url: '/blog/wholesale-mortgage-broker-washington-2026' },
  { title: 'California Reverse Mortgage Hub', url: '/blog/reverse-mortgage-california-guide-2026' },
  { title: 'Washington Reverse Mortgage Hub', url: '/blog/reverse-mortgage-washington-guide-2026' },
  { title: 'California Home Equity Hub', url: '/blog/home-equity-california-guide-2026' },
  { title: 'Washington Home Equity Hub', url: '/blog/home-equity-washington-guide-2026' },

  // Complete Guides
  { title: 'Complete Guides', url: '#', isHeader: true, icon: BookOpen },
  { title: 'California & Washington Home Buyer Guide', url: '/guides/orange-county-home-buyer-guide' },
  { title: 'California & Washington Refinancing Guide', url: '/guides/orange-county-refinancing-guide' },
  { title: 'Orange County School Districts Guide', url: '/guides/orange-county-school-districts' },
  { title: 'Orange County Investment Property Guide', url: '/guides/orange-county-investment-property' },
  { title: 'Orange County VA Loans Guide', url: '/guides/orange-county-va-loans' },
  { title: 'Orange County Jumbo Loans Guide', url: '/guides/orange-county-jumbo-loans' },

  // Market Analysis
  { title: 'Market Analysis', url: '#', isHeader: true, icon: BarChart3 },
  { title: 'California & Washington Market Forecast 2026', url: '/guides/orange-county-market-forecast-2025-2026' },

  // Seasonal Market Guides
  { title: 'Seasonal Guides', url: '#', isHeader: true, icon: Sparkles },
  { title: 'Spring 2026 Home Buying Guide', url: '/guides/spring-2026-home-buying-guide' },
  { title: 'Summer 2026 Market Guide', url: '/guides/summer-2025-market-guide' },

  // Neighborhood Guides
  { title: 'Neighborhood Guides', url: '#', isHeader: true, icon: LayoutGrid },
  { title: 'All Neighborhood Guides', url: '/neighborhood-guide' },
  { title: 'Irvine vs Newport Beach', url: '/neighborhood-guide/irvine-vs-newport-beach-home-buying-guide' },
  { title: 'Mission Viejo vs Irvine', url: '/neighborhood-guide/mission-viejo-vs-irvine-home-buying-guide' },
  { title: 'Newport Beach vs Laguna Beach', url: '/neighborhood-guide/newport-beach-vs-laguna-beach-home-buying-guide' },
  { title: 'Huntington Beach vs Costa Mesa', url: '/neighborhood-guide/huntington-beach-vs-costa-mesa-home-buying-guide' },
  { title: 'OC Neighborhoods Comparison', url: '/neighborhood-guide/orange-county-neighborhoods-comparison-guide' },

  // Blog Articles
  { title: 'Blog Articles', url: '#', isHeader: true, icon: FileText },
  { title: 'Why Choose Local Mortgage Broker', url: '/guides/why-choose-local-mortgage-broker' }
];

export const resourcesDropdown: DropdownItem[] = [
  { title: 'All Resources', url: '/resources' },

  // Financial Resources
  { title: 'Assistance & Tools', url: '#', isHeader: true, icon: PiggyBank },
  { title: 'Down Payment Assistance', url: '/resources/down-payment-assistance' },
  { title: 'Credit Repair Resources', url: '/resources/credit-repair' },
  { title: 'Mortgage Calculators', url: '/calculator' },

  // Calculator Suite
  { title: 'Calculator Suite', url: '#', isHeader: true, icon: Calculator },
  { title: 'Home Affordability Calculator', url: '/calculator/affordability' },
  { title: 'Debt-to-Income Calculator', url: '/calculator/debt-to-income' },
  { title: 'Closing Costs Calculator', url: '/calculator/closing-costs' },

  // Market & Reference  
  { title: 'Data & Reference', url: '#', isHeader: true, icon: BarChart3 },
  { title: 'California & Washington Market Data', url: '/resources/market-data' },
  { title: 'Mortgage Glossary', url: '/resources/glossary' },

  // County-Level Calculators
  { title: 'County Calculators', url: '#', isHeader: true, icon: MapPin },
  { title: 'All County Tools (CA & WA)', url: '/tools' },
  { title: 'Cash-Out Limit Calculator', url: '/tools/cash-out-limit-calculator' },
  { title: 'DSCR Rent Analyzer', url: '/tools/dscr-rent-analyzer' },
  { title: 'Property Tax Estimator', url: '/tools/property-tax-estimator' },
  { title: 'Max HELOC Calculator', url: '/tools/max-heloc-calculator' },

  // Specialty Tools
  { title: 'Specialty Tools', url: '#', isHeader: true, icon: Wrench },
  { title: 'RSU Mortgage Matrix', url: '/non-qm-loans-orange-county/rsu-mortgage-matrix' },
  { title: 'Cash-Out ADU Calculator', url: '/resources/cash-out-adu-calculator' },
  { title: 'Jumbo HECM & Prop 19 Guide', url: '/reverse-mortgages/jumbo-hecm-prop19-guide' },
  { title: 'Wholesale Margin Tracker', url: '/resources/wholesale-margin-tracker' },

  // Process & Support
  { title: 'Process & Support', url: '#', isHeader: true, icon: ClipboardList },
  { title: 'Document Checklist', url: '/resources/document-checklist' },
  { title: 'Service Providers Directory', url: '/resources/service-providers' }
];



export const refinanceDropdown: DropdownItem[] = [
  // Refinancing Options
  { title: 'Refinancing', url: '#', isHeader: true, icon: RefreshCw },
  { title: 'Rate & Term Refinance', url: '/loan-programs/rate-term-refinance' },
  { title: 'Cash-Out Refinance', url: '/loan-programs/cash-out-refinance' },
  { title: 'Refinancing Guide (CA & WA)', url: '/guides/orange-county-refinancing-guide' },

  // Home Equity Solutions
  { title: 'Home Equity', url: '#', isHeader: true, icon: PiggyBank },
  { title: 'HELOC', url: '/loan-programs/heloc' },
  { title: 'HELOAN', url: '/loan-programs/heloan' },
  { title: 'VA Refinance', url: '/loan-programs/va-refinance' },
];

export const specialtyLoansDropdown: DropdownItem[] = [
  // Self-Employed & Non-QM
  { title: 'Self-Employed', url: '#', isHeader: true, icon: Briefcase },
  { title: 'Non-QM Overview', url: '/loan-programs/non-qm-loans' },
  { title: 'Bank Statement Loans', url: '/loan-programs/bank-statement-loans' },
  { title: 'P&L Statement Loans', url: '/loan-programs/profit-loss-statement-loans' },
  { title: 'Asset Depletion Loans', url: '/loan-programs/asset-depletion-loans' },

  // Investment & Specialty
  { title: 'Investment', url: '#', isHeader: true, icon: Building2 },
  { title: 'DSCR Investment Loans', url: '/loan-programs/dscr-investment-loans' },
  { title: 'Fix & Flip Loans', url: '/loan-programs/fix-flip-loans' },
  { title: 'Foreign National Loans', url: '/loan-programs/foreign-national-loans' },
];

export const guidesDropdown: DropdownItem[] = [
  // Complete Guides
  { title: 'Complete Guides', url: '#', isHeader: true, icon: BookOpen },
  { title: 'California & Washington Refinancing Guide', url: '/guides/orange-county-refinancing-guide' },
  { title: 'California & Washington VA Loans Guide', url: '/guides/orange-county-va-loans' },
  { title: 'California & Washington Jumbo Loans Guide', url: '/guides/orange-county-jumbo-loans' },

  // City Pages - Major Markets
  { title: 'Major Cities', url: '#', isHeader: true, icon: Building2 },
  { title: 'Irvine Mortgage Broker', url: '/areas/irvine-mortgage-broker' },
  { title: 'Newport Beach Mortgage Broker', url: '/areas/newport-beach-mortgage-broker' },
  { title: 'Anaheim Mortgage Broker', url: '/areas/anaheim-mortgage-broker' },
  { title: 'Costa Mesa Mortgage Broker', url: '/areas/costa-mesa-mortgage-broker' },
  { title: 'Mission Viejo Mortgage Broker', url: '/areas/mission-viejo-mortgage-broker' },
  { title: 'Huntington Beach Mortgage Broker', url: '/areas/huntington-beach-mortgage-broker' },

  // Premium Areas
  { title: 'Coastal Areas', url: '#', isHeader: true, icon: Waves },
  { title: 'Laguna Beach Mortgage Broker', url: '/areas/laguna-beach-mortgage-broker' },
  { title: 'Dana Point Mortgage Broker', url: '/areas/dana-point-mortgage-broker' },
  { title: 'Seal Beach Mortgage Broker', url: '/areas/seal-beach-mortgage-broker' },

  // All Areas Link
  { title: 'All Areas', url: '#', isHeader: true, icon: MapPin },
  { title: 'View All Service Areas', url: '/areas' },
];

export const blogDropdown: DropdownItem[] = [
  { title: 'All Blog Posts', url: '/guides' },

  // Featured Topics
  { title: 'Featured Topics', url: '#', isHeader: true, icon: Sparkles },
  { title: 'Reverse Mortgages (HECM)', url: '/blog/reverse-mortgage-complete-guide-2026' },
  { title: 'Home Equity Options', url: '/blog/heloc-complete-guide-2026' },
  { title: 'Wholesale Broker Advantage', url: '/blog/wholesale-mortgage-broker-california-guide-2026' },

  // By Category
  { title: 'By Category', url: '#', isHeader: true, icon: Folder },
  { title: 'Wholesale Guides', url: '/blog/wholesale-vs-retail-mortgage-brokers-2026' },
  { title: 'City Guides', url: '/blog/irvine-mortgage-guide-2026' },
  { title: 'Refinance Guides', url: '/blog/cash-out-refinance-complete-guide-2026' },

  // Neighborhood Guides
  { title: 'Neighborhood Guides', url: '#', isHeader: true, icon: LayoutGrid },
  { title: 'All Neighborhood Guides', url: '/neighborhood-guide' },
  { title: 'Irvine vs Newport Beach', url: '/neighborhood-guide/irvine-vs-newport-beach-home-buying-guide' },
  { title: 'Mission Viejo vs Irvine', url: '/neighborhood-guide/mission-viejo-vs-irvine-home-buying-guide' },
];

export const navigationItems: NavigationItem[] = [
  {
    title: 'Home',
    page: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Loan Programs',
    page: 'Loan Programs',
    url: '/loan-programs',
    icon: FileText,
    hasDropdown: true,
    dropdownItems: loanProgramsDropdown
  },
  {
    title: 'Resources',
    page: 'Resources',
    url: '/resources',
    icon: FileText,
    hasDropdown: true,
    dropdownItems: resourcesDropdown
  },
  {
    title: 'Blog',
    page: 'Blog',
    url: '/guides',
    icon: FileText,
    hasDropdown: true,
    dropdownItems: blogDropdown
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
];

