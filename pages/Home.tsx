import React from 'react';
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
    <div style={{ fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif', color: '#1a202c', lineHeight: '1.6' }}>
      
      {/* 1. HERO SECTION - NEW CONTENT WITH BULLETS & FIXED IMAGE */}
      <section style={{ 
        position: 'relative',
        minHeight: '650px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Reliable Roofing Image URL
        backgroundImage: 'linear-gradient(rgba(0, 31, 100, 0.8), rgba(0, 31, 100, 0.8)), url("https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        padding: '100px 20px', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1000px' }}>
          <h1 style={{ fontSize: '46px', fontWeight: '900', margin: '0', textTransform: 'uppercase', lineHeight: '1.2' }}>
            WAUKEGAN Roofing Services: Local Roofing Experts in Waukegan, IL
          </h1>
          <p style={{ fontSize: '19px', marginTop: '20px', color: '#cbd5e1', fontWeight: '500' }}>
            A trusted local roofing company proudly serving Waukegan, Illinois, and surrounding Lake County areas since 2016.
          </p>
          
          {/* Bullet Points for Hero Content */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px', maxWidth: '800px' }}>
              <li style={{ fontSize: '17px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                Residential, Commercial, & Industrial Roofing Services
              </li>
              <li style={{ fontSize: '17px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                Serving Waukegan, Harbor, Municipal Beach, & Beyond
              </li>
              <li style={{ fontSize: '17px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                Professional Solutions Near Genesee Theatre & Bowen Park
              </li>
              <li style={{ fontSize: '17px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                High-Quality Installation, Replacement, & Code-Compliant Repairs
              </li>
            </ul>
          </div>

          <div style={{ marginTop: '40px' }}>
            <button onClick={scrollToForm} style={{ backgroundColor: '#f97316', color: 'white', padding: '18px 55px', borderRadius: '5px', border: 'none', fontWeight: '800', fontSize: '20px', cursor: 'pointer', boxShadow: '0 5px 20px rgba(0,0,0,0.4)' }}>
              GET A FREE ESTIMATE
            </button>
          </div>
        </div>
      </section>

      {/* 2. TWO-COLUMN FORM SECTION - Fixed Spacing */}
      <section id="quote-form-section" style={{ padding: '100px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '100px', alignItems: 'center' }}>
          
          {/* Left Side Content */}
          <div style={{ textAlign: 'left', padding: '20px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '38px', fontWeight: '800', marginBottom: '25px', lineHeight: '1.2' }}>
              Reliable Roofing Solutions for Homeowners & Businesses
            </h2>
            <p style={{ fontSize: '18px', color: '#4a5568', marginBottom: '25px' }}>
              From historic Belvidere Park to the downtown district, our experienced contractors ensure long-lasting protection for every property.
            </p>
            <div style={{ marginTop: '35px', padding: '30px', backgroundColor: '#f8fafc', borderRadius: '15px', borderLeft: '8px solid #f97316' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1e3a8a', fontSize: '15px', textTransform: 'uppercase' }}>Serving Lake County Since 2016:</p>
              <a href="tel:8777193793" style={{ fontSize: '30px', color: '#1e3a8a', textDecoration: 'none', fontWeight: '900' }}>(877) 719-3793</a>
            </div>
          </div>

          {/* Right Side Form - Fixed Interior Spacing */}
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', border: '1px solid #edf2f7', padding: '40px' }}>
            <h3 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Discuss Your Roofing Project</h3>
            <iframe 
              src="https://leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&funnel=3&category=0&step=1&buttons=btn-info" 
              width="100%" 
              height="600" 
              frameBorder="0"
              title="WAUKEGAN Quote Form"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 3. E-E-A-T TRUST SECTION */}
      <section style={{ backgroundColor: '#1e3a8a', padding: '80px 20px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '50px' }}>Local Authority in Beach Park & Waukegan</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
              <h3 style={{ color: '#f97316', fontSize: '22px' }}>Small Business Experts</h3>
              <p>Leading roofing contractor serving IL, WI, and IN since 2016.</p>
            </div>
            <div style={{ padding: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
              <h3 style={{ color: '#f97316', fontSize: '22px' }}>Beach Park HQ</h3>
              <p>Proudly located at 39089 N Green Bay Rd, Beach Park, IL 60087.</p>
            </div>
            <div style={{ padding: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
              <h3 style={{ color: '#f97316', fontSize: '22px' }}>Licensed Professionals</h3>
              <p>Delivering code-compliant workmanship and reliable service every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE AREAS GRID */}
      <section style={{ padding: '100px 20px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '32px', marginBottom: '50px', fontWeight: '800' }}>Service Areas Across Illinois</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
            {illinoisCities.map((city) => (
              <Link key={city.slug} to={`/roofing-${city.slug}`} style={{ padding: '20px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', textDecoration: 'none', color: '#1e3a8a', textAlign: 'center', fontWeight: 'bold', fontSize: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
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
