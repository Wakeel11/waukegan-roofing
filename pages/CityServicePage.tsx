import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // Data array mein city dhoondna
  const city = illinoisCities.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  // Agar city na milay toh blank screen ki bajaye error dikhaye ga
  if (!city) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e3a8a' }}>Location Data Not Found</h2>
        <Link to="/areas-we-serve" style={{ color: '#f97316', fontWeight: 'bold' }}>Back to Service Areas</Link>
      </div>
    );
  }

  return (
    <div style={{ color: '#1a202c', minHeight: '100vh' }}>
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900', textTransform: 'uppercase' }}>
          Roofing in {city.name}, IL
        </h1>
        <p style={{ fontSize: '20px', marginTop: '15px' }}>
          WAUKEGAN Roofing Services: Trusted Local Professionals Since 2016
        </p>
      </section>

      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ color: '#1e3a8a', fontSize: '32px' }}>Expert Roof Installation & Repair in {city.name}</h2>
        <p style={{ fontSize: '18px', marginTop: '20px', lineHeight: '1.7' }}>
          WAUKEGAN Roofing Services is a leading small business contractor providing professional roofing across 
          Illinois, Wisconsin, and Indiana. From our Beach Park headquarters at 39089 N Green Bay Rd, 
          we serve {city.name} with rapid response times and expert craftsmanship.
        </p>
      </section>
    </div>
  );
};

export default CityServicePage;
