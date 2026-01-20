import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = illinoisCities.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  // Fallback UI to prevent blank screen (Screenshot 57.PNG)
  if (!city) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e3a8a' }}>Service Location Not Found</h2>
        <p>We are updating the profile for "{citySlug}".</p>
        <Link to="/areas-we-serve" style={{ color: '#f97316', fontWeight: 'bold' }}>View All Locations</Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', color: '#1a202c' }}>
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900' }}>Roofing in {city.name}, IL</h1>
        <p style={{ fontSize: '20px', marginTop: '10px' }}>WAUKEGAN Roofing Services: Trusted since 2016</p>
      </section>
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ color: '#1e3a8a' }}>Leading Roofing Contractor in {city.name}</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.7', marginTop: '20px' }}>
          WAUKEGAN Roofing Services (Zuniga Roofing Inc) provides professional roofing across Illinois, 
          Wisconsin, and Indiana. Our Beach Park HQ at 39089 N Green Bay Rd ensures rapid 
          response for all properties in {city.name}.
        </p>
      </section>
    </div>
  );
};

export default CityServicePage;
