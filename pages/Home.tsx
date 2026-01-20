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
    <div style={{ fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif', color: '#1a202c', lineHeight: '1.6', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION - FULL LANDMARKS CONTENT & IMAGE */}
      <section style={{ 
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 31, 100, 0.8), rgba(0, 31, 100, 0.8)), url("https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        padding: '60px 20px', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1100px', width: '100%' }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', margin: '0', textTransform: 'uppercase', lineHeight: '1.2' }}>
            WAUKEGAN Roofing Services: Local Roofing Experts in Waukegan, IL
          </h1>
          
          {/* PRIMARY CALL CTA */}
          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
            <a href="tel:8777193793" style={{ 
              backgroundColor: '#22c55e', color: 'white', padding: '15px 35px', borderRadius: '8px', 
              textDecoration: 'none', fontWeight: '900', fontSize: '22px', boxShadow: '0 5px 20px rgba(34, 197, 94, 0.5)'
            }}>
              📞 CALL 877-719-3793
            </a>
          </div>

          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', marginTop: '25px', color: '#cbd5e1', fontWeight: '500', maxWidth: '900px', margin: '25px auto' }}>
            WAUKEGAN Roofing Services is a trusted local roofing company proudly serving Waukegan, Illinois, and surrounding Lake County areas since 2016.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px', width: '100%' }}>
              <li style={{ fontSize: '16px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                Near Genesee Theatre, Waukegan Harbor, & Municipal Beach
              </li>
              <li style={{ fontSize: '16px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                Serving Bowen Park, Belvidere Park, & Local Communities
              </li>
              <li style={{ fontSize: '16px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                Residential, Commercial, & Industrial Roofing Specialists
              </li>
              <li style={{ fontSize: '16px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                Code-Compliant Workmanship & High-Quality Installations
              </li>
            </ul>
          </div>

          <div style={{ marginTop: '40px' }}>
            <button onClick={scrollToForm} style={{ backgroundColor: 'transparent', color: 'white', padding: '12px 35px', borderRadius: '5px', border: '2px solid white', fontWeight: 'bold', fontSize: '17px', cursor: 'pointer' }}>
              OR GET A FREE QUOTE FORM
            </button>
          </div>
        </div>
      </section>

      {/* 2. FORM SECTION - FULL OPTIMIZED SIDE-BY-SIDE CONTENT */}
      <section id="quote-form-section" style={{ padding: '100px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1350px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '100px', alignItems: 'center' }}>
          
          {/* Left Side: Full Form Content */}
          <div style={{ textAlign: 'left', paddingRight: '20px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '36px', fontWeight: '800', marginBottom: '25px', lineHeight: '1.2' }}>
              Reliable Roofing Solutions for Homes & Businesses in Waukegan, IL
            </h2>
            <p style={{ fontSize: '18px', color: '#4a5568', marginBottom: '25px' }}>
              Whether you’re a homeowner or a business owner, our skilled team delivers dependable roofing solutions tailored to local properties across Waukegan, Illinois.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '15px', fontSize: '17px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '12px', fontWeight: 'bold' }}>✓</span> 
                Protecting Belvidere Park, downtown Waukegan, & Lake County communities.
              </li>
              <li style={{ marginBottom: '15px', fontSize: '17px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '12px', fontWeight: 'bold' }}>✓</span> 
                Expert roofing contractor for Beach Park roof replacement projects.
              </li>
              <li style={{ marginBottom: '15px', fontSize: '17px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '12px', fontWeight: 'bold' }}>✓</span> 
                Responsive service backed by quality craftsmanship since 2016.
              </li>
            </ul>
            <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f8fafc', borderRadius: '15px', borderLeft: '8px solid #f97316' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1e3a8a', fontSize: '15px', textTransform: 'uppercase' }}>Serving Lake County Since 2016 — Call Now:</p>
              <a href="tel:8777193793" style={{ fontSize: '32px', color: '#1e3a8a', textDecoration: 'none', fontWeight: '900' }}>(877) 719-3793</a>
            </div>
          </div>

          {/* Right Side: Form with Proper Padding */}
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', border: '1px solid #edf2f7', padding: '40px' }}>
            <h3 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Request Your Free Estimate</h3>
            <iframe 
              src="https://leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&funnel=3&category=0&step=1&buttons=btn-info" 
              width="100%" 
              height="600" 
              frameBorder="0"
              title="WAUKEGAN Quote Form"
              style={{ borderRadius: '10px' }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* 3. E-E-A-T TRUST SECTION */}
      <section style={{ backgroundColor: '#1e3a8a', padding: '80px 20px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '35px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
              <h3 style={{ color: '#f97316', fontSize: '22px' }}>9+ Years Experience</h3>
              <p>Serving Illinois and Wisconsin since 2016 with thousands of projects.</p>
            </div>
            <div style={{ padding: '35px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
              <h3 style={{ color: '#f97316', fontSize: '22px' }}>Beach Park HQ</h3>
              <p>Located at 39089 N Green Bay Rd, Beach Park, IL 60087.</p>
            </div>
            <div style={{ padding: '35px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
              <h3 style={{ color: '#f97316', fontSize: '22px' }}>Fully Licensed Pro</h3>
              <p>Bonded contractors providing professional, code-compliant workmanship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE AREAS GRID */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '32px', marginBottom: '40px', fontWeight: '800' }}>Neighborhoods We Serve</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '15px' }}>
            {illinoisCities.map((city) => (
              <Link key={city.slug} to={`/roofing-${city.slug}`} style={{ padding: '15px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', textDecoration: 'none', color: '#1e3a8a', textAlign: 'center', fontWeight: 'bold', fontSize: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
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
