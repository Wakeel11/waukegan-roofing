import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // URL slug match check
  const city = illinoisCities.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  // Agar city na milay toh blank screen ke bajaye ye message aaye ga
  if (!city) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e3a8a' }}>Service Location Not Found</h2>
        <p>We are currently updating our profiles for {citySlug}.</p>
        <Link to="/areas-we-serve" style={{ color: '#f97316', fontWeight: 'bold' }}>View All Areas</Link>
      </div>
    );
  }

  return (
    <div style={{ color: '#1a202c', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* City Hero Section */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: '900', textTransform: 'uppercase' }}>
          Roofing in {city.name}, IL
        </h1>
        <p style={{ fontSize: '22px', marginTop: '15px', color: '#cbd5e1' }}>
          WAUKEGAN Roofing Services: Trusted Local Experts Serving {city.name} since 2016
        </p>
        <div style={{ marginTop: '40px' }}>
          <a href="tel:8777193793" style={{ backgroundColor: '#22c55e', color: 'white', padding: '15px 40px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '20px' }}>
            📞 CALL {city.name.toUpperCase()} OFFICE
          </a>
        </div>
      </section>

      {/* City Content Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '34px', fontWeight: '800' }}>Local Roofing Authority in {city.name}</h2>
            <p style={{ fontSize: '18px', color: '#4a5568', marginTop: '20px', lineHeight: '1.7' }}>
              Are you looking for a professional local roofer in <strong>{city.name}, Illinois</strong>? 
              WAUKEGAN Roofing Services is a leading small business contractor serving Lake County since 2016.
            </p>
            <p style={{ fontSize: '18px', color: '#4a5568', marginTop: '15px', lineHeight: '1.7' }}>
              Our Beach Park headquarters at 39089 N Green Bay Rd allows us to provide rapid response 
              times and expert craftsmanship for residential and commercial projects in {city.name}.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?q=80&w=800&auto=format&fit=crop" 
              alt="Roofing in Illinois" 
              style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }} 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
