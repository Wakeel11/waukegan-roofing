export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Hammer' | 'Shield' | 'Search' | 'Droplets' | 'Home' | 'Wrench' | 'Trash2';
}

export interface CityData {
  name: string;
  slug: string;
  zipCodes: string[];
}

export interface BusinessInfo {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  phoneDisplay: string;
  email: string;
  mapCoordinates: {
    lat: number;
    lng: number;
  };
}