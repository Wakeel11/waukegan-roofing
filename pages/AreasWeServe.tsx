import React from 'react';
import { Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const AreasWeServe = () => {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '36px', marginBottom: '40px' }}>
        Areas We Serve
      </h1>
      <p style={{ textAlign: 'center', fontSize: '18px', color: '#4a5568', marginBottom: '50px' }}>
        WAUKEGAN Roofing Services proudly provides expert roofing solutions across Illinois, Wisconsin, and Indiana. 
        Select your city below for local service details.
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
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#1e3a8a',
              fontWeight: 'bold',
              textAlign: 'center',
              transition: '0.3s'
            }}
          >
            Roofing in {city.name}, IL
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AreasWeServe;
