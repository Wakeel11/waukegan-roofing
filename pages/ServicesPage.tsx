import React from 'react';

const ServicesPage = () => {
  return (
    <div style={{ color: '#1a202c', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900' }}>OUR SERVICES</h1>
        <p style={{ fontSize: '18px' }}>WAUKEGAN Roofing Services: Serving IL, WI, & IN Since 2016</p>
      </section>

      {/* Roofing Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px' }}>Roofing Solutions</h2>
            <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.6' }}>
              We provide expert residential and industrial roof replacements using premium, code-compliant materials. 
              From new installations to emergency storm repairs, we have you covered.
            </p>
            <ul style={{ lineHeight: '2' }}>
              <li>✅ Residential Shingle Roofing</li>
              <li>✅ Industrial & Commercial Flat Roofs</li>
              <li>✅ Storm Damage & Leak Repairs</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?auto=format&fit=crop&w=800" alt="Roofing" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      {/* Gutters Section */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <img src="https://images.unsplash.com/photo-1621905252507-b352220239ec?auto=format&fit=crop&w=800" alt="Gutters" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px' }}>Gutter Systems</h2>
            <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.6' }}>
              Protect your foundation with our seamless gutter systems. Since 2016, we have provided durable 
              drainage solutions tailored for Lake County homes.
            </p>
            <ul style={{ lineHeight: '2' }}>
              <li>✅ Seamless Gutter Installation</li>
              <li>✅ Professional Gutter Cleaning</li>
              <li>✅ Leaf Protection Systems</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
