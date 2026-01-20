import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const AreasWeServe = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ color: '#1e3a8a', fontWeight: '900', fontSize: '36px' }}>SERVICE LOCATIONS</h1>
      <p style={{ marginBottom: '40px' }}>Providing expert roofing across the Tri-State area since 2016.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {illinoisCities && illinoisCities.length > 0 ? (
          illinoisCities.map((city) => (
            <Link 
              key={city.slug} 
              to={`/roofing-${city.slug}`} 
              style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', textDecoration: 'none', color: '#1e3a8a', fontWeight: 'bold', display: 'block' }}
            >
              Roofing in {city.name}, IL
            </Link>
          ))
        ) : (
          <p>Loading locations... Please wait.</p>
        )}
      </div>
      <div style={{ marginTop: '50px', padding: '30px', background: '#f0f4f8' }}>
        <p>Headquarters: 39089 N Green Bay Rd, Beach Park, IL 60087</p>
        <a href="tel:8777193793" style={{ fontSize: '22px', fontWeight: 'bold', color: '#f97316' }}>Call: 877-719-3793</a>
      </div>
    </div>
  );
};

export default AreasWeServe;
