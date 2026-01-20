import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const AreasWeServe = () => {
  // Page load par upar scroll karne ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center', minHeight: '80vh' }}>
      
      {/* 1. SECTION HEADER */}
      <h1 style={{ color: '#1e3a8a', fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: '900', marginBottom: '20px', textTransform: 'uppercase' }}>
        ROOFING SERVICE AREAS
      </h1>
      <p style={{ fontSize: '19px', color: '#4a5568', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px' }}>
        WAUKEGAN Roofing Services proudly serves Lake County and surrounding communities across Illinois, Wisconsin, and Indiana since 2016.
      </p>

      {/* 2. DYNAMIC CITY GRID */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '20px' 
      }}>
        {illinoisCities && illinoisCities.length > 0 ? (
          illinoisCities.map((city) => (
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
          ))
        ) : (
          <p style={{ gridColumn: '1/-1', padding: '40px', color: '#718096' }}>
            Loading service locations...
          </p>
        )}
      </div>

      {/* 3. TRUST FOOTER (Local SEO) */}
      <div style={{ marginTop: '80px', padding: '40px', backgroundColor: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ color: '#1e3a8a', fontSize: '28px', fontWeight: '800' }}>Can't Find Your Neighborhood?</h2>
        <p style={{ fontSize: '18px', margin: '15px 0' }}>
          We are based in <strong>Beach Park, IL</strong> and provide rapid response for roofing emergencies across the Tri-State area.
        </p>
        <div style={{ marginTop: '25px' }}>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#4a5568' }}>Visit our Headquarters:</p>
          <p style={{ fontSize: '18px', color: '#1e3a8a' }}>39089 N Green Bay Rd, Beach Park, IL 60087</p>
          <a href="tel:8777193793" style={{ fontSize: '26px', fontWeight: '900', color: '#f97316', textDecoration: 'none', display: 'block', marginTop: '10px' }}>
            📞 (877) 719-3793
          </a>
        </div>
      </div>
    </div>
  );
};

export default AreasWeServe;
