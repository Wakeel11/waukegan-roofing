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
    <div style={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#1a202c', lineHeight: '1.6' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '0' }}>WAUKEGAN ROOFING SERVICES</h1>
        <p style={{ fontSize: '22px', marginTop: '20px', color: '#cbd5e1' }}>Expert Craftsmanship & Local Integrity in Illinois & Wisconsin Since 2016</p>
        <div style={{ marginTop: '30px' }}>
          <button onClick={scrollToForm} style={{ backgroundColor: '#f97316', color: 'white', padding: '15px 40px', borderRadius: '5px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}>
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* 2. TWO-COLUMN FORM SECTION (Fixed Spacing) */}
      <section id="quote-form-section" style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'flex-start' }}>
          
          {/* Left Side: SEO Content */}
          <div style={{ textAlign: 'left', paddingRight: '20px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '38px', fontWeight: 'bold', marginBottom: '20px' }}>
              Protect Your Home with Local Experts
            </h2>
            <p style={{ fontSize: '18px', color: '#4a5568', marginBottom: '30px' }}>
              Don't wait for a leak to become a major disaster. Get a professional assessment from our dedicated team today.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '18px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f97316', marginRight: '12px', fontWeight: 'bold', fontSize: '20px' }}>✓</span> Licensed & Fully Insured Professionals
              </li>
              <li style={{ marginBottom: '18px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f97316', marginRight: '12px', fontWeight: 'bold', fontSize: '20px' }}>✓</span> High-Quality Materials & Craftsmanship
              </li>
              <li style={{ marginBottom: '18px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f97316', marginRight: '12px', fontWeight: 'bold', fontSize: '20px' }}>✓</span> Trusted in Illinois & Wisconsin Since 2016
              </li>
              <li style={{ marginBottom: '18px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f97316', marginRight: '12px', fontWeight: 'bold', fontSize: '20px' }}>✓</span> Rapid Response Storm Damage Repair
              </li>
            </ul>
            <div style={{ marginTop: '40px', padding: '25px', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '6px solid #f97316' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1e3a8a', fontSize: '18px' }}>Emergency Service Available:</p>
              <a href="tel:8777193793" style={{ fontSize: '28px', color: '#1e3a8a', textDecoration: 'none', fontWeight: '900' }}>(877) 719-3793</a>
            </div>
          </div>

          {/* Right Side: Iframe Form */}
          <div style={{ backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 15px 35px rgba(0,0,0,0.12)', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <iframe 
              src="https://leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&funnel=3&category=0&step=1&buttons=btn-info" 
              width="100%" 
              height="650" 
              frameBorder="0"
              title="WAUKEGAN Roofing Services Form"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '36px', marginBottom: '40px' }}>Our Core Services</h2>
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
            <h2 style={{ color: '#1e3a8a', fontSize: '36px' }}>Trusted Roofing Authority</h2>
            <p style={{ fontSize: '18px', color: '#4a5568' }}>Dedicated to quality across Illinois, Wisconsin, and Indiana Since 2016.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ color: '#f97316' }}>Serving Since 2016</h3>
              <p>Nearly a decade of expert roofing service with thousands of local projects.</p>
            </div>
            <div style={{ padding: '30px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ color: '#f97316' }}>Local HQ</h3>
              <p>Located at 39089 N Green Bay Rd, Beach Park, IL 60087.</p>
            </div>
            <div style={{ padding: '30px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ color: '#f97316' }}>Licensed & Insured</h3>
              <p>Providing safe, bonded, and professional craftsmanship every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCAL LANDMARKS SECTION */}
      <section style={{ padding: '100px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '36px', fontWeight: 'bold' }}>Deep Local Roots in Waukegan, IL</h2>
            <p style={{ marginTop: '20px', fontSize: '18px', color: '#4a5568' }}>
              Serving neighborhoods from <strong>Waukegan Harbor</strong> to the historic <strong>Genesee Theatre</strong>, 
              WAUKEGAN Roofing Services is the primary choice for local homeowners.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Roofing Experts in Waukegan" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      {/* 6. SERVICE AREAS GRID */}
      <section style={{ backgroundColor: '#1e3a8a', padding: '80px 20px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>Service Areas We Cover</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '15px' }}>
            {illinoisCities.map((city) => (
              <Link key={city.slug} to={`/roofing-${city.slug}`} style={{ padding: '15px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', textDecoration: 'none', color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: '15px' }}>
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
