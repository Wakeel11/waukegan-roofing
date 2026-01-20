import React from 'react';

const ServicesPage = () => {
  return (
    <div style={{ color: '#1a202c' }}>
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '38px', fontWeight: '900' }}>OUR EXPERT SERVICES</h1>
      </section>

      {/* Roofing Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px' }}>Professional Roofing</h2>
            <p style={{ fontSize: '18px', margin: '20px 0' }}>
              WAUKEGAN Roofing Services specializes in complete residential and industrial roof replacements. 
              We use premium shingles and flat-roof systems that are fully code-compliant.
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '17px' }}>
              <li>Residential Roof Installation</li>
              <li>Commercial Flat Roofing</li>
              <li>Emergency Leak Repair</li>
            </ul>
          </div>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img 
              src="https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?q=80&w=800&auto=format&fit=crop" 
              alt="Roofing Service" 
              style={{ width: '100%', borderRadius: '15px' }} 
            />
          </div>
        </div>
      </section>

      {/* Gutters Section */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap-reverse', gap: '50px', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b352220239ec?q=80&w=800&auto=format&fit=crop" 
              alt="Gutter Service" 
              style={{ width: '100%', borderRadius: '15px' }} 
            />
          </div>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px' }}>Gutter Systems</h2>
            <p style={{ fontSize: '18px', margin: '20px 0' }}>
              Protect your foundation with our seamless gutter systems. Since 2016, we have provided Lake County 
              with durable drainage solutions that prevent water damage.
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '17px' }}>
              <li>Seamless Gutter Installation</li>
              <li>Gutter Cleaning & Repairs</li>
              <li>Downspout Leaf Protection</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
