import React from 'react';
import { Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const AreasWeServe = () => {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '36px', fontWeight: '900', marginBottom: '20px' }}>
        ROOFING SERVICE AREAS
      </h1>
      <p style={{ fontSize: '18px', color: '#4a5568', marginBottom: '50px' }}>
        WAUKEGAN Roofing Services proudly serves Lake County and surrounding communities across Illinois, Wisconsin, and Indiana.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '20px' 
      }}>
        {illinoisCities.map((city) => (
          <Link 
            key={city.slug} 
            to={`/roofing-${city.slug}`} 
            style={{ 
              padding: '20px', 
              backgroundColor: '#f8fafc', 
              border: '1px solid #e2e8f0', 
              borderRadius: '10px', 
              textDecoration: 'none', 
              color: '#1e3a8a', 
              fontWeight: 'bold',
              transition: '0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
          >
            Roofing in {city.name}, IL
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AreasWeServe;
