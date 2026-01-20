import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = illinoisCities.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  if (!city) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e3a8a' }}>Location Not Found</h2>
        <Link to="/areas-we-serve" style={{ color: '#f97316', fontWeight: 'bold' }}>View All Areas</Link>
      </div>
    );
  }

  return (
    <div style={{ color: '#1a202c', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900', textTransform: 'uppercase' }}>
          Roofing in {city.name}, IL
        </h1>
        <p style={{ fontSize: '20px', marginTop: '15px' }}>
          WAUKEGAN Roofing Services: Trusted Local Professionals Since 2016
        </p>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px' }}>
          <div>
            <h2 style={{ color: '#1e3a8a' }}>Reliable Roofing Solutions in {city.name}</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.7', marginTop: '20px' }}>
              We provide professional residential and commercial roofing across <strong>{city.name}</strong>. 
              With 10 years of experience, our team at WAUKEGAN Roofing Services ensures every project meets 
              local Illinois building codes.
            </p>
            <div style={{ marginTop: '30px', padding: '25px', backgroundColor: '#f8fafc', borderRadius: '15px', borderLeft: '6px solid #f97316' }}>
              <p style={{ fontWeight: 'bold', margin: 0 }}>Serving the Tri-State Area:</p>
              <p>Illinois, Wisconsin, & Indiana</p>
              <a href="tel:8777193793" style={{ fontSize: '22px', fontWeight: '900', color: '#1e3a8a', textDecoration: 'none' }}>📞 877-719-3793</a>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?q=80&w=800&auto=format&fit=crop" 
              alt="Roofing Work" 
              style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
