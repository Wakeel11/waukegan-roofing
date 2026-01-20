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
      
      {/* 1. HERO SECTION - Fixed Background Image */}
      <section style={{ 
        position: 'relative',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 33, 113, 0.8), rgba(0, 33, 113, 0.8)), url("https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white', 
        padding: '100px 20px', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '900', margin: '0', textTransform: 'uppercase', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
            WAUKEGAN ROOFING SERVICES
          </h1>
          <p style={{ fontSize: '24px', marginTop: '20px', fontWeight: '500', opacity: '0.9' }}>
            Expert Craftsmanship & Local Integrity in Illinois & Wisconsin Since 2016
          </p>
          <div style={{ marginTop: '40px' }}>
            <button onClick={scrollToForm} style={{ backgroundColor: '#f97316', color: 'white', padding: '18px 50px', borderRadius: '5px', border: 'none', fontWeight: '800', fontSize: '20px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', transition: '0.3s' }}>
              GET A FREE QUOTE
            </button>
          </div>
        </div>
      </section>

      {/* 2. TWO-COLUMN FORM SECTION - Fixed Spacing & Padding */}
      <section id="quote-form-section" style={{ padding: '120px 20px', backgroundColor: '#fcfcfc' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '100px', alignItems: 'center' }}>
          
          {/* Left Side: Content with Padding */}
          <div style={{ textAlign: 'left', padding: '20px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '42px', fontWeight: '800', marginBottom: '25px', lineHeight: '1.2' }}>
              Protect Your Home with <br/> Local Roofing Experts
            </h2>
            <p style={{ fontSize: '19px', color: '#4a5568', marginBottom: '35px' }}>
              Don't wait for a leak to become a major disaster. Get a professional assessment from our dedicated Beach Park team today.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Licensed & Fully Insured Professionals', 'High-Quality Materials & Craftsmanship', 'Trusted in IL, WI, & IN Since 2016', 'Rapid Response Storm Damage Repair'].map((item, index) => (
                <li key={index} style={{ marginBottom: '18px', fontSize: '18px', display: 'flex', alignItems: 'center', fontWeight: '500' }}>
                  <span style={{ color: '#f97316', marginRight: '15px', fontWeight: 'bold', fontSize: '22px' }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '50px', padding: '35px', backgroundColor: 'white', borderRadius: '15px', borderLeft: '8px solid #f97316', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1e3a8a', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '2px' }}>Emergency Service Call:</p>
              <a href="tel:8777193793" style={{ fontSize: '34px', color: '#1e3a8a', textDecoration: 'none', fontWeight: '900' }}>(877) 719-3793</a>
            </div>
          </div>

          {/* Right Side: Form with Proper Interior Spacing */}
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', overflow: 'hidden', border: '1px solid #edf2f7', padding: '40px' }}>
            <h3 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }}>Get a Free Estimate Now</h3>
            <iframe 
              src="https://leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&funnel=3&category=0&step=1&buttons=btn-info" 
              width="100%" 
              height="600" 
              frameBorder="0"
              title="WAUKEGAN Roofing Form"
              style={{ borderRadius: '10px' }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '38px', marginBottom: '60px', fontWeight: '800' }}>Professional Solutions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {[
            { title: 'Roofing Solutions', desc: 'Full replacements and repairs for residential and commercial properties.' },
            { title: 'Gutter Systems', desc: 'Professional gutter installation and cleaning to protect your foundation.' },
            { title: 'Roof Inspections', desc: 'Thorough storm damage assessments and preventative maintenance.' }
          ].map((service, i) => (
            <div key={i} style={{ padding: '50px 35px', border: '1px solid #e2e8f0', borderRadius: '20px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#f97316', fontSize: '24px', marginBottom: '15px', fontWeight: 'bold' }}>{service.title}</h3>
              <p style={{ color: '#4a5568', fontSize: '17px' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. E-E-A-T TRUST SECTION */}
      <section style={{ backgroundColor: '#1e3a8a', padding: '100px 20px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '38px', fontWeight: '800' }}>Trusted Local Authority</h2>
            <p style={{ fontSize: '19px', color: '#cbd5e1', marginTop: '15px' }}>Proudly based in Beach Park, IL since 2016</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { title: '9+ Years Experience', text: 'Serving Illinois and Wisconsin since 2016' },
              { title: 'Local Headquarters', text: '39089 N Green Bay Rd, Beach Park, IL 60087' },
              { title: 'Licensed & Insured', text: 'Bonded contractors providing professional craftsmanship.' }
            ].map((box, i) => (
              <div key={i} style={{ padding: '40px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '15px', textAlign: 'center' }}>
                <h3 style={{ color: '#f97316', fontSize: '22px', marginBottom: '10px', fontWeight: 'bold' }}>{box.title}</h3>
                <p style={{ color: '#e2e8f0' }}>{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICE AREAS GRID */}
      <section style={{ padding: '100px 20px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '32px', marginBottom: '50px', fontWeight: '800' }}>Service Areas We Cover</h2>
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
