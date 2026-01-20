import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { illinoisCities } from '../cities'; // Rasta check karein (../cities)

const CityServicePage = () => {
  // App.tsx mein path "roofing-:citySlug" hai
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // Debugging ke liye console mein check karein
  console.log("URL se milne wala slug:", citySlug);

  // Data search logic
  const city = illinoisCities.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  // CRASH PROTECTION: Agar city nahi milti toh blank screen ki jagah ye error dikhaye ga
  if (!city) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ color: '#1e3a8a', fontSize: '28px', fontWeight: 'bold' }}>Location Profile Not Found</h2>
        <p style={{ margin: '20px 0', color: '#4a5568' }}>We couldn't find a matching profile for: <strong>{citySlug}</strong></p>
        <Link to="/areas-we-serve" style={{ color: '#f97316', fontWeight: 'bold', textDecoration: 'underline' }}>
          Back to All Service Areas
        </Link>
      </div>
    );
  }

  return (
    <div style={{ color: '#1a202c', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* 1. HERO SECTION */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900', textTransform: 'uppercase' }}>
          Roofing Services in {city.name}, IL
        </h1>
        <p style={{ fontSize: '22px', marginTop: '15px', color: '#cbd5e1' }}>
          WAUKEGAN Roofing Services: Trusted Local Experts in {city.name} since 2016
        </p>
      </section>

      {/* 2. CONTENT SECTION */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '34px', fontWeight: '800' }}>Expert Roof Installation & Repair</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.7', margin: '25px 0', color: '#4a5568' }}>
              Are you looking for a reliable roofer in <strong>{city.name}</strong>? 
              WAUKEGAN Roofing Services is a leading small business contractor providing professional roofing across 
              Illinois, Wisconsin, and Indiana.
            </p>
            <div style={{ padding: '30px', backgroundColor: '#f8fafc', borderRadius: '15px', borderLeft: '8px solid #f97316' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1e3a8a' }}>Local HQ Address:</p>
              <p style={{ margin: '5px 0 15px', color: '#4a5568' }}>
                39089 N Green Bay Rd, Beach Park, IL 60087
              </p>
              <a href="tel:8777193793" style={{ fontSize: '24px', fontWeight: '900', color: '#1e3a8a', textDecoration: 'none' }}>
                📞 (877) 719-3793
              </a>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?auto=format&fit=crop&w=800" 
              alt={`Roofing work in ${city.name}`} 
              style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
