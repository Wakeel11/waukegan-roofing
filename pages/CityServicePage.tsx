import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

const localCities = [
  { name: "Waukegan", slug: "waukegan", zip: "60085" },
  { name: "Gurnee", slug: "gurnee", zip: "60031" },
  { name: "Zion", slug: "zion", zip: "60099" },
  { name: "Libertyville", slug: "libertyville", zip: "60048" },
  { name: "North Chicago", slug: "north-chicago", zip: "60064" },
  { name: "Beach Park", slug: "beach-park", zip: "60087" },
  { name: "Mundelein", slug: "mundelein", zip: "60060" },
  { name: "Round Lake", slug: "round-lake", zip: "60073" },
  { name: "Antioch", slug: "antioch", zip: "60002" },
  { name: "Grayslake", slug: "grayslake", zip: "60030" },
  { name: "Lake Villa", slug: "lake-villa", zip: "60046" },
  { name: "Wadsworth", slug: "wadsworth", zip: "60083" },
  { name: "Winthrop Harbor", slug: "winthrop-harbor", zip: "60096" },
  { name: "Vernon Hills", slug: "vernon-hills", zip: "60061" },
  { name: "Lake Forest", slug: "lake-forest", zip: "60045" },
  { name: "Highland Park", slug: "highland-park", zip: "60035" },
  { name: "Deerfield", slug: "deerfield", zip: "60015" },
  { name: "Buffalo Grove", slug: "buffalo-grove", zip: "60089" },
  { name: "Lake Zurich", slug: "lake-zurich", zip: "60047" },
  { name: "Fox Lake", slug: "fox-lake", zip: "60020" },
  { name: "Wauconda", slug: "wauconda", zip: "60084" },
  { name: "Lindenhurst", slug: "lindenhurst", zip: "60046" },
  { name: "Gages Lake", slug: "gages-lake", zip: "60030" },
  { name: "Old Mill Creek", slug: "old-mill-creek", zip: "60083" },
  { name: "Park City", slug: "park-city", zip: "60085" },
  { name: "Round Lake Beach", slug: "round-lake-beach", zip: "60073" },
  { name: "Hawthorn Woods", slug: "hawthorn-woods", zip: "60047" }
];

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = localCities.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  if (!city) {
    return <Navigate to="/areas-we-serve" replace />;
  }

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '100px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '50px' }}>
        <h1 style={{ fontSize: '36px', textTransform: 'uppercase' }}>Roofing in {city.name}, IL</h1>
        <p>WAUKEGAN Roofing Services | Trusted Since 2016</p>
      </div>
      
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', border: '1px solid #ddd' }}>
        <h2 style={{ color: '#1e3a8a' }}>Expert Service for {city.name} ({city.zip})</h2>
        <p style={{ lineHeight: '1.6', fontSize: '18px' }}>
          Zuniga Roofing Inc has been serving the area since 2016. 
          Eduardo Zuniga started this business to provide high-quality roofing for the Illinois, Wisconsin, and Indiana region.
        </p>
        <div style={{ marginTop: '30px', padding: '20px', background: '#f0f4f8' }}>
          <p><strong>Office:</strong> 39089 N Green Bay Rd, Beach Park, IL 60087</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Call: (877) 719-3793</p>
        </div>
      </div>
    </div>
  );
};

export default CityServicePage;
