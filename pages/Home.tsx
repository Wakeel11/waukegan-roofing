import React from 'react';
import { Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const Home = () => {
  return (
    <div>
      {/* Aapka baqi Home page content yahan hoga */}
      
      <section style={{ padding: '60px 20px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '32px', marginBottom: '40px' }}>
            Roofing Service Areas in Illinois & Wisconsin
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: '15px' 
          }}>
            {illinoisCities.map((city) => (
              <Link 
                key={city.slug} 
                to={`/roofing-${city.slug}`}
                style={{
                  padding: '12px',
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  color: '#4a5568',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: '0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = '#f97316'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
              >
                Roofing in {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
