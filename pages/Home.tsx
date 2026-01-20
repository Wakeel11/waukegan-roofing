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
      
      {/* 1. HERO SECTION - SEO Optimized with New Image */}
      <section style={{ 
        position: 'relative',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 33, 113, 0.8), rgba(0, 33, 113, 0.8)), url("https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        padding: '100px 20px', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1000px' }}>
          <h1 style={{ fontSize: '52px', fontWeight: '900', margin: '0', textTransform: 'uppercase', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
            WAUKEGAN Roofing Services: Expert Roof Installation in Beach Park, Illinois
          </h1>
          <p style={{ fontSize: '22px', marginTop: '25px', fontWeight: '500', lineHeight: '1.5', color: '#e2e8f0' }}>
            Where can I find a trusted local roofer? WAUKEGAN Roofing Services is your leading small business roofing contractor in Beach Park, IL. 
            Since 2016, we’ve successfully tackled complex residential, commercial, and industrial projects across Illinois, Wisconsin, and Indiana.
          </p>
          <div style={{ marginTop: '40px' }}>
            <button onClick={scrollToForm} style={{ backgroundColor: '#f97316', color: 'white', padding: '18px 55px', borderRadius: '5px', border: 'none', fontWeight: '800', fontSize: '20px', cursor: 'pointer', boxShadow: '0 5px 20px rgba(0,0,0,0.4)' }}>
              GET A FREE ESTIMATE
            </button>
          </div>
        </div>
      </section>

      {/* 2. TWO-COLUMN FORM SECTION - Fixed Spacing & Local Content */}
      <section id="quote-form-section" style={{ padding: '120px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '100px', alignItems: 'center' }}>
          
          {/* Left Side: SEO Copywriting */}
          <div style={{ textAlign: 'left', padding: '20px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '38px', fontWeight: '800', marginBottom: '25px' }}>
              Your Trusted Local Authority Near Illinois Beach State Park
            </h2>
            <p style={{ fontSize: '19px', color: '#4a5568', marginBottom: '30px' }}>
              Our expertise, located right here near the <strong>Illinois Beach State Park</strong>, means your property is in professional hands. 
              Whether it's a residential repair or a large industrial installation, we deliver results that last.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '18px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f97316', marginRight: '15px', fontWeight: 'bold' }}>✓</span> Leading Small Business Since 2016
              </li>
              <li style={{ marginBottom: '18px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f97316', marginRight: '15px', fontWeight: 'bold' }}>✓</span> Serving IL, WI, and IN
              </li>
              <li style={{ marginBottom: '18px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#f97316', marginRight: '15px', fontWeight: 'bold' }}>✓</span> Specializing in Roofing & Siding Projects
              </li>
            </ul>
            <div style={{ marginTop: '50px', padding: '35px', backgroundColor: '#f8fafc', borderRadius: '15px', borderLeft: '8px solid #f97316' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1e3a8a', fontSize: '16px', textTransform: 'uppercase' }}>Contact Us Today:</p>
              <a href="tel:8777193793" style={{ fontSize: '32px', color: '#1e3a8a', textDecoration: 'none', fontWeight: '900' }}>(877) 719-3793</a>
            </div>
          </div>

          {/* Right Side: Form with 40px Interior Spacing */}
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', border: '1px solid #edf2f7', padding: '40px' }}>
            <h3 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '26px', fontWeight: 'bold', marginBottom: '25px' }}>Discuss Your Project</h3>
            <iframe 
              src="https://leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&funnel=3&category=0&step=1&buttons=btn-info" 
              width="100%" 
              height="650" 
              frameBorder="0"
              title="WAUKEGAN Roofing Quote"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 3. E-E-A-T TRUST SECTION */}
      <section style={{ backgroundColor: '#1e3a8a', padding: '100px 20px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '50px' }}>Local Expertise Since 2016</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
              <h3 style={{ color: '#f97316', fontSize: '22px' }}>Tri-State Coverage</h3>
              <p>Successfully serving Illinois, Wisconsin, and Indiana for nearly a decade.</p>
            </div>
            <div style={{ padding: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
              <h3 style={{ color: '#f97316', fontSize: '22px' }}>Beach Park HQ</h3>
              <p>Located at 39089 N Green Bay Rd, Beach Park, IL 60087.</p>
            </div>
            <div style={{ padding: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
              <h3 style={{ color: '#f97316', fontSize: '22px' }}>Professional Hands</h3>
              <p>Expertise in residential, commercial, and industrial roofing systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE AREAS GRID */}
      <section style={{ padding: '100px 20px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '34px', marginBottom: '50px', fontWeight: '800' }}>Explore Our Service Areas</h2>
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
