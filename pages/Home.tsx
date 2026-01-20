import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const Home = () => {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('quote-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, Roboto, Arial, sans-serif', color: '#1a202c', lineHeight: '1.6', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION - Mobile Responsive & Fixed Image */}
      <section style={{ 
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Reliable image link with fallback background color
        backgroundColor: '#002171',
        backgroundImage: 'linear-gradient(rgba(0, 31, 100, 0.75), rgba(0, 31, 100, 0.75)), url("https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?q=80&w=1600&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        padding: '40px 20px', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1000px', width: '100%' }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', margin: '0', textTransform: 'uppercase' }}>
            WAUKEGAN Roofing Services: Local Roofing Experts in Waukegan, IL
          </h1>
          
          {/* HIGH-PRIORITY CALL BUTTON - Moved Up for Visibility */}
          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <a href="tel:8777193793" style={{ 
              backgroundColor: '#22c55e', 
              color: 'white', 
              padding: '15px 30px', 
              borderRadius: '8px', 
              textDecoration: 'none', 
              fontWeight: '900', 
              fontSize: '22px', 
              boxShadow: '0 4px 15px rgba(34, 197, 94, 0.5)',
              display: 'inline-block'
            }}>
              📞 CALL 877-719-3793
            </a>
          </div>

          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', marginTop: '20px', color: '#cbd5e1', fontWeight: '500', maxWidth: '800px', margin: '20px auto' }}>
            A trusted local roofing company serving Waukegan, Illinois, and surrounding Lake County areas since 2016.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px', width: '100%' }}>
              <li style={{ fontSize: '15px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '8px', fontWeight: 'bold' }}>✓</span> 
                Near Waukegan Harbor & Municipal Beach
              </li>
              <li style={{ fontSize: '15px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '8px', fontWeight: 'bold' }}>✓</span> 
                Serving Genesee Theatre & Bowen Park Areas
              </li>
            </ul>
          </div>

          <div style={{ marginTop: '30px' }}>
            <button onClick={scrollToForm} style={{ backgroundColor: 'transparent', color: 'white', padding: '12px 30px', borderRadius: '5px', border: '2px solid white', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
              OR GET A FREE QUOTE FORM
            </button>
          </div>
        </div>
      </section>

      {/* 2. TWO-COLUMN FORM SECTION - Mobile Friendly Grid */}
      <section id="quote-form-section" style={{ padding: '60px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>
          
          {/* Left Side Content */}
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '28px', fontWeight: '800', marginBottom: '20px' }}>
              Reliable Roofing Solutions for Homes & Businesses
            </h2>
            <p style={{ fontSize: '17px', color: '#4a5568', marginBottom: '20px' }}>
              Whether you’re in downtown Waukegan or Beach Park, we work with precision to protect your commercial and residential buildings.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px' }}>✓ Trusted roofer in Waukegan Since 2016</li>
              <li style={{ marginBottom: '10px', fontSize: '16px' }}>✓ Code-compliant Beach Park roof replacement</li>
            </ul>
            <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '10px', borderLeft: '6px solid #f97316' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1e3a8a' }}>Call Lake County Experts:</p>
              <a href="tel:8777193793" style={{ fontSize: '24px', color: '#1e3a8a', textDecoration: 'none', fontWeight: '900' }}>(877) 719-3793</a>
            </div>
          </div>

          {/* Right Side Form - Fixed Padding */}
          <div style={{ backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #edf2f7', padding: '20px' }}>
            <iframe 
              src="https://leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&funnel=3&category=0&step=1&buttons=btn-info" 
              width="100%" 
              height="550" 
              frameBorder="0"
              title="WAUKEGAN Quote Form"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 3. SERVICE AREAS GRID - Responsive */}
      <section style={{ backgroundColor: '#1e3a8a', padding: '60px 20px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '30px', fontWeight: '800' }}>Explore Our Service Areas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '15px' }}>
            {illinoisCities.map((city) => (
              <Link key={city.slug} to={`/roofing-${city.slug}`} style={{ padding: '12px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '5px', textDecoration: 'none', color: 'white', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
