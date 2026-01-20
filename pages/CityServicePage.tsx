import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // Data search with safe check
  const city = illinoisCities.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  // AGAR DATA NA MILAY TOH YE ERROR DIKHAYE GA (WHITE SCREEN NAHI AYEGI)
  if (!city) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ color: '#1e3a8a', fontSize: '28px' }}>Location Profile Not Found</h2>
        <p style={{ margin: '20px 0', color: '#666' }}>We couldn't find a matching profile for: <strong>{citySlug}</strong></p>
        <Link to="/areas-we-serve" style={{ color: '#f97316', fontWeight: 'bold' }}>View All Service Areas</Link>
      </div>
    );
  }

  return (
    <div style={{ color: '#1a202c', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900', textTransform: 'uppercase' }}>
          Roofing in {city.name}, IL
        </h1>
        <p style={{ fontSize: '20px', marginTop: '15px' }}>
          WAUKEGAN Roofing Services: Trusted Local Experts Since 2016
        </p>
      </section>

      {/* Main SEO Content */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px', fontWeight: '800' }}>Expert Roof Installation & Repair</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.7', margin: '20px 0' }}>
              Are you looking for a professional roofer in <strong>{city.name}</strong>? 
              WAUKEGAN Roofing Services (Zuniga Roofing Inc) provides code-compliant residential and industrial roofing since 2016.
            </p>
            <div style={{ padding: '25px', backgroundColor: '#f8fafc', borderRadius: '15px', borderLeft: '8px solid #f97316' }}>
              <p style={{ fontWeight: 'bold', margin: 0 }}>HQ: 39089 N Green Bay Rd, Beach Park, IL 60087</p>
              <a href="tel:8777193793" style={{ fontSize: '24px', fontWeight: '900', color: '#1e3a8a', textDecoration: 'none' }}>📞 (877) 719-3793</a>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?auto=format&fit=crop&w=800" 
            alt="Roofing Work" 
            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
          />
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
