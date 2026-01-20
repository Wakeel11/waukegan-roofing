import React from 'react';

const ServicesPage = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, Roboto, Arial, sans-serif', color: '#1a202c', lineHeight: '1.6' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900' }}>OUR PREMIUM SERVICES</h1>
        <p style={{ fontSize: '20px', marginTop: '10px', opacity: '0.9' }}>
          Expert Roofing & Gutter Solutions in Illinois, Wisconsin, & Indiana Since 2016
        </p>
      </section>

      {/* 2. ROOFING SERVICES SECTION */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px', fontWeight: '800' }}>Expert Roofing Solutions</h2>
            <p style={{ fontSize: '18px', color: '#4a5568', margin: '20px 0' }}>
              At WAUKEGAN Roofing Services, we specialize in high-quality roof installation, replacement, and code-compliant repairs for residential, commercial, and industrial properties.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['New Roof Installation', 'Emergency Leak Repair', 'Storm Damage Assessment', 'Commercial Flat Roofing'].map((item, i) => (
                <li key={i} style={{ marginBottom: '12px', fontSize: '17px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#f97316', marginRight: '10px', fontWeight: 'bold' }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?auto=format&fit=crop&w=800&q=80" alt="Roofing Work" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      {/* 3. GUTTER SERVICES SECTION */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center', direction: 'rtl' }}>
          <div style={{ direction: 'ltr' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px', fontWeight: '800' }}>Professional Gutter Systems</h2>
            <p style={{ fontSize: '18px', color: '#4a5568', margin: '20px 0' }}>
              Protect your foundation with our seamless gutter installations. Since 2016, we have provided Lake County with reliable drainage solutions that stand the test of time.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Seamless Gutter Installation', 'Gutter Cleaning & Maintenance', 'Downspout Repair', 'Leaf Guard Protection'].map((item, i) => (
                <li key={i} style={{ marginBottom: '12px', fontSize: '17px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#f97316', marginRight: '10px', fontWeight: 'bold' }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1621905252507-b352220239ec?auto=format&fit=crop&w=800&q=80" alt="Gutter Installation" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      {/* 4. TRUST SECTION */}
      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e3a8a' }}>Trusted Small Business Contractor</h2>
        <p style={{ fontSize: '18px', maxWidth: '800px', margin: '20px auto' }}>
          Based in Beach Park, IL, we bring professional craftsmanship to every project across Illinois, Wisconsin, and Indiana.
        </p>
        <a href="tel:8777193793" style={{ backgroundColor: '#22c55e', color: 'white', padding: '15px 40px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '20px', display: 'inline-block' }}>
          Call for a Free Estimate: 877-719-3793
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;
