import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { illinoisCities } from '../cities'; // Path check karein ke cities.ts kahan hai

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // Debugging: Browser console (F12) mein nazar ayega
  console.log("URL Slug Detected:", citySlug);

  const city = illinoisCities?.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  // CRASH PROTECTION: Agar city undefined hai toh white screen nahi ayegi
  if (!city) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2 style={{ color: '#1e3a8a', fontSize: '24px' }}>Location Data Not Found</h2>
        <p style={{ margin: '20px 0' }}>We are updating the profile for: <strong>{citySlug}</strong></p>
        <Link to="/areas-we-serve" style={{ color: '#f97316', fontWeight: 'bold' }}>Return to Service Areas</Link>
      </div>
    );
  }

  return (
    <div style={{ color: '#1a202c', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* City Hero */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '900', textTransform: 'uppercase' }}>
          Roofing in {city?.name}, IL
        </h1>
        <p style={{ fontSize: '18px', marginTop: '10px' }}>
          WAUKEGAN Roofing Services: Trusted Local Experts Since 2016
        </p>
      </section>

      {/* Main Content */}
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ color: '#1e3a8a', fontSize: '28px', fontWeight: 'bold' }}>Expert Roofing Solutions for {city?.name}</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginTop: '20px' }}>
          Searching for a reliable roofer in <strong>{city?.name}, Illinois</strong>? 
          WAUKEGAN Roofing Services is a leading small business contractor providing professional roofing 
          across the Tri-State area since 2016.
        </p>
        <div style={{ marginTop: '40px', padding: '25px', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '6px solid #f97316' }}>
          <p style={{ fontWeight: 'bold', color: '#1e3a8a' }}>Local HQ Office:</p>
          <p>39089 N Green Bay Rd, Beach Park, IL 60087</p>
          <a href="tel:8777193793" style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e3a8a', textDecoration: 'none' }}>📞 (877) 719-3793</a>
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
