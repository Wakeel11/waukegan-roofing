import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const AreasWeServe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center', minHeight: '80vh' }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '42px', fontWeight: '900', marginBottom: '20px' }}>SERVICE LOCATIONS</h1>
      <p style={{ fontSize: '18px', color: '#4a5568', marginBottom: '50px' }}>
        WAUKEGAN Roofing Services proudly serves communities across the Tri-State area since 2016.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {illinoisCities.map((city) => (
          <Link 
            key={city.slug} 
            to={`/roofing-${city.slug}`} 
            style={{ 
              padding: '25px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', 
              textDecoration: 'none', color: '#1e3a8a', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'block'
            }}
          >
            Roofing in {city.name}, IL
          </Link>
        ))}
      </div>

      <div style={{ marginTop: '80px', padding: '40px', backgroundColor: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
        <p>Headquartered at: <strong>39089 N Green Bay Rd, Beach Park, IL 60087</strong></p>
        <a href="tel:8777193793" style={{ fontSize: '24px', fontWeight: '900', color: '#f97316', textDecoration: 'none' }}>Call: (877) 719-3793</a>
      </div>
    </div>
  );
};

export default AreasWeServe;
