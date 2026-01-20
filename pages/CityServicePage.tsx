import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = illinoisCities.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  if (!city) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e3a8a' }}>Service Area Not Found</h2>
        <Link to="/areas-we-serve" style={{ color: '#f97316', fontWeight: 'bold' }}>View All Locations</Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', color: '#1a202c' }}>
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900' }}>Roofing in {city.name}, IL</h1>
        <p style={{ fontSize: '20px', marginTop: '10px' }}>WAUKEGAN Roofing Services: Serving {city.name} Since 2016</p>
      </section>

      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px' }}>
          <div>
            <h2 style={{ color: '#1e3a8a' }}>Trusted Local Roofing Experts</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.7', marginTop: '20px' }}>
              Need a professional roofer in <strong>{city.name}</strong>? WAUKEGAN Roofing Services is a leading small business 
              contractor providing expert roofing across Illinois and the Tri-State area since 2016.
            </p>
            <p style={{ fontSize: '18px', marginTop: '15px' }}>
              Our headquarters is located at 39089 N Green Bay Rd, Beach Park, IL 60087.
            </p>
            <a href="tel:8777193793" style={{ fontSize: '24px', fontWeight: '900', color: '#1e3a8a', textDecoration: 'none', display: 'block', marginTop: '20px' }}>📞 877-719-3793</a>
          </div>
          <img src="https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?auto=format&fit=crop&w=800" alt="Service" style={{ width: '100%', borderRadius: '15px' }} />
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
