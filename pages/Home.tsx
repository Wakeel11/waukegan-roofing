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
      
      {/* 1. HERO SECTION - FULL WAUKEGAN CONTENT WITH BULLETS */}
      <section style={{ 
        position: 'relative',
        minHeight: '650px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 31, 100, 0.8), rgba(0, 31, 100, 0.8)), url("https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        padding: '100px 20px', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1100px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '900', margin: '0', textTransform: 'uppercase' }}>
            WAUKEGAN Roofing Services: Local Roofing Experts in Waukegan, IL
          </h1>
          <p style={{ fontSize: '18px', marginTop: '20px', fontWeight: '500', color: '#cbd5e1' }}>
            A trusted local roofing company serving Waukegan, Illinois, and surrounding Lake County areas since 2016.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '15px', maxWidth: '1000px' }}>
              <li style={{ fontSize: '16px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                Professional residential, commercial, and industrial roofing across Lake County.
              </li>
              <li style={{ fontSize: '16px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                Serving areas near Genesee Theatre, Waukegan Harbor, Bowen Park, and Belvidere Park.
              </li>
              <li style={{ fontSize: '16px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                Located near Waukegan Municipal Beach providing high-quality installation and replacement.
              </li>
              <li style={{ fontSize: '16px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                Code-compliant workmanship and reliable solutions for homeowners and businesses alike.
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

      {/* 2. SIDE-BY-SIDE SECTION: OPTIMIZED FORM CONTENT */}
      <section id="quote-form-section" style={{ padding: '100px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1350px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '120px', alignItems: 'center' }}>
          
          {/* Left Side Content */}
          <div style={{ textAlign: 'left', padding: '20px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '36px', fontWeight: '800', marginBottom: '25px', lineHeight: '1.2' }}>
              Reliable Roofing Solutions for Homes & Businesses in Waukegan, IL
            </h2>
            <p style={{ fontSize: '18px', color: '#4a5568', marginBottom: '30px' }}>
              Our skilled team delivers dependable roofing solutions tailored to local properties across Waukegan and the wider Lake County area.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '15px', fontSize: '17px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '12px', fontWeight: 'bold' }}>✓</span> 
                Protecting Belvidere Park, downtown Waukegan, and nearby commercial buildings.
              </li>
              <li style={{ marginBottom: '15px', fontSize: '17px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '12px', fontWeight: 'bold' }}>✓</span> 
                Trusted Waukegan roofing contractor for Beach Park roof replacement projects.
              </li>
              <li style={{ marginBottom: '15px', fontSize: '17px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#f97316', marginRight: '12px', fontWeight: 'bold' }}>✓</span> 
                Professional experts providing code-compliant solutions since 2016.
              </li>
            </ul>
            <div style={{ marginTop: '40px', padding: '35px', backgroundColor: '#f8fafc', borderRadius: '15px', borderLeft: '8px solid #f97316' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1e3a8a', fontSize: '15px', textTransform: 'uppercase' }}>Serving Lake County Since 2016 — Call Now:</p>
              <a href="tel:8777193793" style={{ fontSize: '32px', color: '#1e3a8a', textDecoration: 'none', fontWeight: '900' }}>(877) 719-3793</a>
            </div>
          </div>

          {/* Right Side Form - Fixed Interior Spacing */}
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
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '36px', marginBottom: '40px', fontWeight: '800' }}>Our Core Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={{ padding: '40px 20px', border: '1px solid #e2e8f0', borderRadius: '15px', textAlign: 'center', backgroundColor: '#fff' }}>
            <h3 style={{ color: '#f97316' }}>Roofing Solutions</h3>
            <p>Full replacements and repairs for residential and commercial properties.</p>
          </div>
          <div style={{ padding: '40px 20px', border: '1px solid #e2e8f0', borderRadius: '15px', textAlign: 'center', backgroundColor: '#fff' }}>
            <h3 style={{ color: '#f97316' }}>Gutter Systems</h3>
            <p>Professional gutter installation and cleaning to protect your foundation.</p>
          </div>
          <div style={{ padding: '40px 20px', border: '1px solid #e2e8f0', borderRadius: '15px', textAlign: 'center', backgroundColor: '#fff' }}>
            <h3 style={{ color: '#f97316' }}>Roof Inspections</h3>
            <p>Thorough storm damage assessments and preventative maintenance.</p>
          </div>
        </div>
      </section>

      {/* 4. E-E-A-T TRUST SECTION */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '36px', fontWeight: '800' }}>Trusted Roofing Authority</h2>
            <p style={{ fontSize: '18px', color: '#4a5568' }}>Serving Waukegan and the wider Lake County area Since 2016.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ color: '#f97316' }}>9+ Years Experience</h3>
              <p>Serving with quality craftsmanship since 2016.</p>
            </div>
            <div style={{ padding: '30px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ color: '#f97316' }}>Local HQ</h3>
              <p>Proudly based at 39089 N Green Bay Rd, Beach Park, IL 60087.</p>
            </div>
            <div style={{ padding: '30px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ color: '#f97316' }}>Licensed & Insured</h3>
              <p>Professional bonded contractors for your property safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICE AREAS GRID */}
      <section style={{ backgroundColor: '#1e3a8a', padding: '80px 20px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px', fontWeight: '800' }}>Neighborhoods We Serve</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '15px' }}>
            {illinoisCities.map((city) => (
              <Link key={city.slug} to={`/roofing-${city.slug}`} style={{ padding: '15px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '5px', textDecoration: 'none', color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
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
