import { BusinessInfo, CityData, ServiceItem } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Waukegan Roofing",
  address: {
    street: "3115 Newport Ln",
    city: "Wadsworth",
    state: "IL",
    zip: "60083",
    country: "USA"
  },
  phone: "877-719-3793",
  phoneDisplay: "877-719-3793",
  email: "contact@waukeganroofing.com",
  mapCoordinates: {
    lat: 42.4278,
    lng: -87.9156
  }
};

export const ROOFING_SERVICES: ServiceItem[] = [
  { id: 'roof-install', title: 'New Installation', description: 'Expert installation of asphalt, metal, and flat roofing systems.', iconName: 'Home' },
  { id: 'roof-repair', title: 'Roof Repair', description: 'Fast and reliable repairs for leaks, shingle damage, and storm impact.', iconName: 'Hammer' },
  { id: 'roof-inspection', title: 'Inspection', description: 'Comprehensive roof assessments to identify potential issues early.', iconName: 'Search' },
  { id: 'roof-cleaning', title: 'Roof Cleaning', description: 'Professional cleaning to remove moss, algae, and debris.', iconName: 'Droplets' },
  { id: 'roof-replacement', title: 'Replacement', description: 'Full roof replacement services with top-tier materials and warranty.', iconName: 'Shield' },
];

export const GUTTER_SERVICES: ServiceItem[] = [
  { id: 'gutter-install', title: 'Gutter Installation', description: 'Seamless gutter installation for optimal water diversion.', iconName: 'Wrench' },
  { id: 'gutter-cleaning', title: 'Gutter Cleaning', description: 'Keep your gutters flowing freely with our seasonal cleaning.', iconName: 'Trash2' },
  { id: 'gutter-repair', title: 'Gutter Repair', description: 'Fixing sagging, leaking, or detached gutters effectively.', iconName: 'Hammer' },
  { id: 'gutter-replace', title: 'Gutter Replacement', description: 'Upgrade your drainage system with high-quality gutter replacements.', iconName: 'Shield' },
];

// Major IL cities for the service area
export const SERVICE_AREAS: CityData[] = [
  { name: "Waukegan", slug: "waukegan", zipCodes: ["60085", "60087"] },
  { name: "Wadsworth", slug: "wadsworth", zipCodes: ["60083"] },
  { name: "Gurnee", slug: "gurnee", zipCodes: ["60031"] },
  { name: "North Chicago", slug: "north-chicago", zipCodes: ["60064"] },
  { name: "Libertyville", slug: "libertyville", zipCodes: ["60048"] },
  { name: "Lake Forest", slug: "lake-forest", zipCodes: ["60045"] },
  { name: "Zion", slug: "zion", zipCodes: ["60099"] },
  { name: "Vernon Hills", slug: "vernon-hills", zipCodes: ["60061"] },
  { name: "Mundelein", slug: "mundelein", zipCodes: ["60060"] },
  { name: "Chicago", slug: "chicago", zipCodes: ["60601", "60602"] }, // Abbreviated list
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Roofing Services', path: '/services' },
  { label: 'Gutter Services', path: '/services#gutters' }, // Simple anchor link strategy
  { label: 'Areas We Serve', path: '/areas-we-serve' },
  { label: 'Projects', path: '/projects' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
  { label: 'Write For Us', path: '/write-for-us' },
];