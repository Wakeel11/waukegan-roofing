import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const AreasWeServe = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center', minHeight: '80vh' }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '36px', fontWeight: '900' }}>OUR SERVICE AREAS</h1>
      <p style={{ marginBottom: '40px' }}>Expert roofing across the Tri-State area since 2016.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {illinoisCities.map((city) => (
          <Link 
            key={city.slug} 
            to={`/roofing-${city.slug}`} 
            style={{ padding: '25px', border: '1px solid #e2e8f0', borderRadius: '12px', textDecoration: 'none', color: '#1e3a8a', fontWeight: 'bold', display: 'block', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
          >
            Roofing in {city.name}, IL
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AreasWeServe;
