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
      
      {/* 1. HERO SECTION - LANDMARKS & IMAGE FIX */}
      <section style={{ 
        position: 'relative',
        minHeight: '650px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 31, 100, 0.82), rgba(0, 31, 100, 0.82)), url("https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white', 
        padding: '100px 20px', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1000px' }}>
          <h1 style={{ fontSize: '46px', fontWeight: '900', margin: '0', textTransform: 'uppercase' }}>
            WAUKEGAN Roofing Services: Local Roofing Experts in Waukegan, IL
          </h1>
          <p style={{ fontSize: '19px', marginTop: '25px', color: '#cbd5e1', fontWeight: '500' }}>
            A trusted local roofing company serving Waukegan, Illinois, and Lake County near Genesee Theatre, 
            Waukegan Harbor, and Municipal Beach since 2016.
          </p>
          <div style={{ marginTop: '40px' }}>
            <button onClick={scrollToForm} style={{ backgroundColor: '#f97316', color: 'white', padding: '18px 55px', borderRadius: '5px', border: 'none', fontWeight: '800', fontSize: '20px', cursor: 'pointer', boxShadow: '0 5px 20px rgba(0,0,0,0.4)' }}>
              GET A FREE ESTIMATE
            </button>
          </div>
        </div>
      </section>

      {/* 2. SIDE-BY-SIDE SECTION: NEW OPTIMIZED CONTENT & FORM */}
      <section id="quote-form-section" style={{ padding: '100px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '120px', alignItems: 'center' }}>
          
          {/* Left Side: New SEO Content with Bullets */}
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '36px', fontWeight: '800', marginBottom: '25px', lineHeight: '1.2' }}>
              Reliable Roofing Solutions for Homes & Businesses in Waukegan, IL
            </h2>
            <p style={{ fontSize: '18px', color: '#4a5568', marginBottom: '30px' }}>
              Whether you’re a homeowner or a business owner, our skilled team delivers dependable solutions tailored to local properties across Waukegan and the wider Lake County area.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '15px', fontSize: '17px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '12px', fontWeight: 'bold' }}>✓</span> 
                Precision protection for properties near Belvidere Park and Downtown Waukegan.
              </li>
              <li style={{ marginBottom: '15px', fontSize: '17px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '12px', fontWeight: 'bold' }}>✓</span> 
                Trusted Waukegan roofing contractor for all Lake County residential projects.
              </li>
              <li style={{ marginBottom: '15px', fontSize: '17px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '12px', fontWeight: 'bold' }}>✓</span> 
                Specializing in Beach Park roof replacement and large-scale industrial solutions.
              </li>
              <li style={{ marginBottom: '15px', fontSize: '17px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '12px', fontWeight: 'bold' }}>✓</span> 
                Code-compliant workmanship backed by quality craftsmanship since 2016.
              </li>
            </ul>
            <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f8fafc', borderRadius: '15px', borderLeft: '8px solid #f97316' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1e3a8a', fontSize: '15px', textTransform: 'uppercase' }}>Serving Lake County Since 2016 — Call Now:</p>
              <a href="tel:8777193793" style={{ fontSize: '32px', color: '#1e3a8a', textDecoration: 'none', fontWeight: '900' }}>(877) 719-3793</a>
            </div>
          </div>

          {/* Right Side: Form with 40px Interior Spacing */}
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', border: '1px solid #edf2f7', padding: '40px' }}>
            <h3 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Free Service Request</h3>
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

      {/* 3. CORE SERVICES SECTION */}
      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '38px', marginBottom: '60px', fontWeight: '800' }}>Expert Roofing Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          <div style={{ padding: '50px 35px', border: '1px solid #e2e8f0', borderRadius: '20px', textAlign: 'center', backgroundColor: '#fff' }}>
            <h3 style={{ color: '#f97316', fontSize: '24px', marginBottom: '15px', fontWeight: 'bold' }}>Roof Installations</h3>
            <p style={{ color: '#4a5568' }}>Comprehensive roofing systems for homes and commercial buildings.</p>
          </div>
          <div style={{ padding: '50px 35px', border: '1px solid #e2e8f0', borderRadius: '20px', textAlign: 'center', backgroundColor: '#fff' }}>
            <h3 style={{ color: '#f97316', fontSize: '24px', marginBottom: '15px', fontWeight: 'bold' }}>Repair & Maintenance</h3>
            <p style={{ color: '#4a5568' }}>Fast response for leak repairs and storm damage assessments.</p>
          </div>
          <div style={{ padding: '50px 35px', border: '1px solid #e2e8f0', borderRadius: '20px', textAlign: 'center', backgroundColor: '#fff' }}>
            <h3 style={{ color: '#f97316', fontSize: '24px', marginBottom: '15px', fontWeight: 'bold' }}>Siding & Gutters</h3>
            <p style={{ color: '#4a5568' }}>Professional siding and gutter installation for maximum protection.</p>
          </div>
        </div>
      </section>

      {/* 4. SERVICE AREAS GRID */}
      <section style={{ padding: '100px 20px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '32px', marginBottom: '50px', fontWeight: '800' }}>Neighborhoods We Serve</h2>
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
