import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const AreasWeServe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center', minHeight: '80vh' }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '42px', fontWeight: '900', marginBottom: '20px', textTransform: 'uppercase' }}>
        WAUKEGAN Roofing Service Areas
      </h1>
      <p style={{ fontSize: '19px', color: '#4a5568', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px' }}>
        Proudly serving Lake County and the surrounding communities across Illinois, Wisconsin, and Indiana since 2016.
      </p>

      {/* Dynamic Grid of Links */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '20px' 
      }}>
        {illinoisCities.map((city) => (
          <Link 
            key={city.slug} 
            to={`/roofing-${city.slug}`} 
            style={{ 
              padding: '25px', 
              backgroundColor: '#ffffff', 
              border: '1px solid #e2e8f0', 
              borderRadius: '12px', 
              textDecoration: 'none', 
              color: '#1e3a8a', 
              fontWeight: 'bold',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#1e3a8a';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#1e3a8a';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Roofing in {city.name}, IL
          </Link>
        ))}
      </div>

      {/* Local Office Info Footer */}
      <div style={{ marginTop: '80px', padding: '40px', backgroundColor: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ color: '#1e3a8a', fontSize: '28px', fontWeight: '800' }}>Can't find your neighborhood?</h2>
        <p style={{ fontSize: '18px', marginTop: '15px' }}>
          Contact our Beach Park headquarters at <strong>39089 N Green Bay Rd, Beach Park, IL 60087</strong> for a custom quote.
        </p>
        <a href="tel:8777193793" style={{ fontSize: '28px', fontWeight: '900', color: '#f97316', textDecoration: 'none', display: 'block', marginTop: '15px' }}>
          📞 (877) 719-3793
        </a>
      </div>
    </div>
  );
};

export default AreasWeServe;
