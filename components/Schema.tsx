import React from 'react';

const Schema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Frontier Roofing and General Contracting",
    "image": "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1200",
    "url": "https://frontierroofing.com",
    "telephone": "+17372311010",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "111 Congress Ave, Ste 500",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78701",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.2635,
      "longitude": -97.7437
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "areaServed": "Austin, Downtown Austin, Travis County",
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default Schema;