import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // URL slug ko cities data se match karna
  const city = illinoisCities.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  if (!city) {
    return (
      <div style={{ padding: '120px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#1e3a8a' }}>Location Profile Not Found</h1>
        <p>We are currently updating our roofing service information for this area.</p>
        <Link to="/areas-we-serve" style={{ color: '#f97316', fontWeight: 'bold' }}>Return to All Areas</Link>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Segoe UI, Roboto, Arial, sans-serif', color: '#1a202c', lineHeight: '1.6' }}>
      
      {/* City Hero Section */}
      <section style={{ 
        backgroundColor: '#1e3a8a', color: 'white', padding: '100px 20px', textAlign: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 31, 100, 0.82), rgba(0, 31, 100, 0.82)), url("https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?q=80&w=1600&auto=format&fit=crop")',
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: '900', textTransform: 'uppercase' }}>
            Expert Roofing in {city.name}, IL {city.zip || ''}
          </h1>
          <p style={{ fontSize: '22px', marginTop: '15px', color: '#cbd5e1' }}>
            WAUKEGAN Roofing Services: Trusted Local Contractor Serving {city.name}
          </p>
          <div style={{ marginTop: '40px' }}>
            <a href="tel:8777193793" style={{ 
              backgroundColor: '#22c55e', color: 'white', padding: '18px 45px', borderRadius: '8px', 
              textDecoration: 'none', fontWeight: '900', fontSize: '22px', boxShadow: '0 5px 20px rgba(34, 197, 94, 0.4)'
            }}>
              📞 CALL {city.name.toUpperCase()} OFFICE
            </a>
          </div>
        </div>
      </section>

      {/* City Content Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'start' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '34px', fontWeight: '800' }}>Local Roofing Authority in {city.name}</h2>
            <p style={{ fontSize: '18px', color: '#4a5568', marginTop: '20px' }}>
              Are you looking for a professional local roofer in <strong>{city.name}, Illinois</strong>? 
              WAUKEGAN Roofing Services is a leading small business roofing contractor serving Lake County and the Tri-State area since 2016.
            </p>
            <p style={{ fontSize: '18px', color: '#4a5568', marginTop: '15px' }}>
              We successfully tackle residential, commercial, and industrial projects across Illinois, Wisconsin, and Indiana. 
              Our expert roofing contractors deliver high-quality roof installation, replacement, and repair solutions in {city.name}.
            </p>
          </div>
          <div style={{ backgroundColor: '#f8fafc', padding: '40px', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ color: '#1e3a8a', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Location Trust Signals</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '15px', fontSize: '17px' }}>✅ <strong>Local HQ:</strong> Beach Park, IL 60087</li>
              <li style={{ marginBottom: '15px', fontSize: '17px' }}>✅ <strong>Established:</strong> Operating since 2016</li>
              <li style={{ marginBottom: '15px', fontSize: '17px' }}>✅ <strong>Coverage:</strong> IL, WI, and IN area</li>
              <li style={{ marginBottom: '15px', fontSize: '17px' }}>✅ <strong>Standard:</strong> Code-compliant workmanship</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
