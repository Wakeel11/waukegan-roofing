import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // Debugging: Console mein check karein ke slug kya aa raha hai
  console.log("Current Slug:", citySlug);

  const city = illinoisCities.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  // Crash se bachne ke liye fallback UI
  if (!city) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e3a8a' }}>Location Data Not Found</h2>
        <p>We are updating the roofing profile for {citySlug}.</p>
        <Link to="/areas-we-serve" style={{ color: '#f97316', fontWeight: 'bold' }}>Back to All Areas</Link>
      </div>
    );
  }

  return (
    <div style={{ color: '#1a202c', minHeight: '100vh' }}>
      {/* City Hero Section */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: '900', textTransform: 'uppercase' }}>
          Roofing Services in {city.name}, IL
        </h1>
        <p style={{ fontSize: '20px', marginTop: '15px' }}>
          WAUKEGAN Roofing Services: Trusted Local Experts in {city.name}
        </p>
      </section>

      {/* City Content */}
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px', fontWeight: '800' }}>Leading Roofing Contractor in {city.name}</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.7', margin: '20px 0' }}>
              Are you looking for a professional local roofer in <strong>{city.name}, Illinois</strong>? 
              WAUKEGAN Roofing Services (Zuniga Roofing Inc) has been serving Lake County since 2016.
            </p>
            <p style={{ fontSize: '18px', color: '#4a5568' }}>
              Our headquarters in Beach Park allows us to provide rapid response and code-compliant workmanship 
              across the Tri-State area.
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?auto=format&fit=crop&w=800" 
            alt={`Roofing work in ${city.name}`} 
            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
          />
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
