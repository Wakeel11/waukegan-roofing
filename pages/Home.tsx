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
      
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section style={{ 
        backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.85)), url(https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        padding: '120px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '52px', fontWeight: '900', margin: '0', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
          WAUKEGAN ROOFING SERVICES
        </h1>
        <p style={{ fontSize: '24px', marginTop: '20px', color: '#e2e8f0', fontWeight: '500' }}>
          Expert Craftsmanship & Local Integrity in Illinois & Wisconsin Since 2016
        </p>
        <div style={{ marginTop: '40px' }}>
          <button onClick={scrollToForm} style={{ backgroundColor: '#f97316', color: 'white', padding: '15px 50px', borderRadius: '5px', border: 'none', fontWeight: 'bold', fontSize: '20px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* 2. TWO-COLUMN FORM SECTION (Increased Spacing) */}
      <section id="quote-form-section" style={{ padding: '100px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1250px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '120px', alignItems: 'flex-start' }}>
          
          {/* Left Side: SEO Content */}
          <div style={{ textAlign: 'left', paddingRight: '40px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '38px', fontWeight: 'bold', marginBottom: '25px' }}>
              Protect Your Home with Local Experts
            </h2>
            <p style={{ fontSize: '18px', color: '#4a5568', marginBottom: '35px' }}>
              Don't wait for a leak to become a major disaster. Get a professional assessment from our dedicated team today.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '20px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f97316', marginRight: '15px', fontWeight: 'bold', fontSize: '22px' }}>✓</span> Licensed & Fully Insured Professionals
              </li>
              <li style={{ marginBottom: '20px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f97316', marginRight: '15px', fontWeight: 'bold', fontSize: '22px' }}>✓</span> High-Quality Materials & Craftsmanship
              </li>
              <li style={{ marginBottom: '20px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f97316', marginRight: '15px', fontWeight: 'bold', fontSize: '22px' }}>✓</span> Trusted in Illinois & Wisconsin Since 2016
              </li>
              <li style={{ marginBottom: '20px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f97316', marginRight: '15px', fontWeight: 'bold', fontSize: '22px' }}>✓</span> Rapid Response Storm Damage Repair
              </li>
            </ul>
            <div style={{ marginTop: '45px', padding: '30px', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '6px solid #f97316', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1e3a8a', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '1px' }}>Emergency Service Available:</p>
              <a href="tel:8777193793" style={{ fontSize: '32px', color: '#1e3a8a', textDecoration: 'none', fontWeight: '900', display: 'block', marginTop: '5px' }}>(877) 719-3793</a>
            </div>
          </div>

          {/* Right Side: Iframe Form */}
          <div style={{ backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
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
      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#f8fafc' }}>
        <h2 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '36px', marginBottom: '50px', fontWeight: 'bold' }}>Our Core Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ padding: '40px 30px', border: '1px solid #e2e8f0', borderRadius: '15px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <h3 style={{ color: '#f97316', fontSize: '24px', marginBottom: '15px' }}>Roofing Solutions</h3>
              <p style={{ color: '#4a5568' }}>Full replacements and repairs for residential and commercial properties.</p>
            </div>
          </Link>
          <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ padding: '40px 30px', border: '1px solid #e2e8f0', borderRadius: '15px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <h3 style={{ color: '#f97316', fontSize: '24px', marginBottom: '15px' }}>Gutter Systems</h3>
              <p style={{ color: '#4a5568' }}>Professional gutter installation and cleaning to protect your foundation.</p>
            </div>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ padding: '40px 30px', border: '1px solid #e2e8f0', borderRadius: '15px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <h3 style={{ color: '#f97316', fontSize: '24px', marginBottom: '15px' }}>Roof Inspections</h3>
              <p style={{ color: '#4a5568' }}>Thorough storm damage assessments and preventative maintenance.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. E-E-A-T TRUST SECTION */}
      <section style={{ backgroundColor: 'white', padding: '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '36px', fontWeight: 'bold' }}>Trusted Roofing Authority</h2>
            <p style={{ fontSize: '18px', color: '#4a5568', marginTop: '15px' }}>Dedicated to quality across Illinois, Wisconsin, and Indiana Since 2016.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ color: '#f97316', fontSize: '22px', marginBottom: '10px' }}>Serving Since 2016</h3>
              <p style={{ color: '#4a5568' }}>Nearly a decade of expert roofing service with thousands of local projects.</p>
            </div>
            <div style={{ padding: '30px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ color: '#f97316', fontSize: '22px', marginBottom: '10px' }}>Local HQ</h3>
              <p style={{ color: '#4a5568' }}>Located at 39089 N Green Bay Rd, Beach Park, IL 60087.</p>
            </div>
            <div style={{ padding: '30px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ color: '#f97316', fontSize: '22px', marginBottom: '10px' }}>Licensed & Insured</h3>
              <p style={{ color: '#4a5568' }}>Providing safe, bonded, and professional craftsmanship every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCAL LANDMARKS SECTION */}
      <section style={{ padding: '100px 20px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '36px', fontWeight: 'bold' }}>Deep Local Roots in Waukegan, IL</h2>
            <p style={{ marginTop: '25px', fontSize: '18px', color: '#4a5568', lineHeight: '1.8' }}>
              Serving neighborhoods from <strong>Waukegan Harbor</strong> to the historic <strong>Genesee Theatre</strong>, 
              WAUKEGAN Roofing Services is the primary choice for local homeowners against lakefront weather challenges.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Roofing Experts in Waukegan" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }} />
        </div>
      </section>

      {/* 6. SERVICE AREAS GRID */}
      <section style={{ backgroundColor: '#1e3a8a', padding: '80px 20px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px', fontWeight: 'bold' }}>Service Areas We Cover</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
            {illinoisCities.map((city) => (
              <Link key={city.slug} to={`/roofing-${city.slug}`} style={{ padding: '15px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', textDecoration: 'none', color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: '15px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}>
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
