import React from 'react';
import { BUSINESS_INFO, SERVICE_AREAS } from '../constants';

interface JsonLdProps {
  type?: 'LocalBusiness' | 'Service';
  cityName?: string;
  description?: string;
}

const JsonLd: React.FC<JsonLdProps> = ({ type = 'LocalBusiness', cityName, description }) => {
  
  const areasServed = SERVICE_AREAS.map(city => city.name);

  // Dynamic schema construction
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor", // More specific than LocalBusiness
    "name": BUSINESS_INFO.name,
    "image": "https://picsum.photos/1200/600", // Placeholder for actual business image
    "@id": "https://waukeganroofing.com",
    "url": "https://waukeganroofing.com",
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.street,
      "addressLocality": BUSINESS_INFO.address.city,
      "addressRegion": BUSINESS_INFO.address.state,
      "postalCode": BUSINESS_INFO.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.mapCoordinates.lat,
      "longitude": BUSINESS_INFO.mapCoordinates.lng
    },
    "areaServed": areasServed.map(city => ({
      "@type": "City",
      "name": city,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "IL",
        "addressCountry": "US"
      }
    })),
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    },
    // If on a specific city page, add potentialAction or Service specific data
    ...(cityName && {
      "description": description || `Professional roofing services available in ${cityName}, Illinois.`,
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `https://waukeganroofing.com/#/city/${cityName.toLowerCase()}`,
          "inLanguage": "en-US",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform"
          ]
        },
        "result": {
          "@type": "Service",
          "name": `Roofing Services in ${cityName}`
        }
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;