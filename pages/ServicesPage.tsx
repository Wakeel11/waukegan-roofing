import React from 'react';

const ServicesPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#1a202c' }}>
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900' }}>OUR EXPERT SERVICES</h1>
        <p style={{ fontSize: '20px', marginTop: '10px' }}>Serving Illinois, Wisconsin, & Indiana since 2016</p>
      </section>

      {/* Roofing Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '320px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '36px', fontWeight: '800' }}>Professional Roofing</h2>
            <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.7' }}>
              WAUKEGAN Roofing Services specializes in complete residential and industrial roof replacements. 
              We use premium shingles and flat-roof systems that are fully code-compliant.
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '18px', lineHeight: '2' }}>
              <li>✅ New Roof Installation</li>
              <li>✅ Leak Repair & Maintenance</li>
              <li>✅ Storm Damage Restoration</li>
              <li>✅ Commercial Roofing Solutions</li>
            </ul>
          </div>
          <div style={{ flex: '1', minWidth: '320px' }}>
            <img 
              src="https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?q=80&w=800&auto=format&fit=crop" 
              alt="Roofing Services" 
              style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
            />
          </div>
        </div>
      </section>

      {/* Gutters Section */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap-reverse', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '320px' }}>
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b352220239ec?q=80&w=800&auto=format&fit=crop" 
              alt="Gutter Services" 
              style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
            />
          </div>
          <div style={{ flex: '1', minWidth: '320px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '36px', fontWeight: '800' }}>Gutter Systems</h2>
            <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.7' }}>
              Protect your foundation with our seamless gutter systems. Since 2016, we have provided Lake County 
              with durable drainage solutions that prevent costly water damage.
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '18px', lineHeight: '2' }}>
              <li>✅ Seamless Gutter Installation</li>
              <li>✅ Gutter Cleaning & Repair</li>
              <li>✅ Downspout Guards</li>
              <li>✅ Soffit & Fascia Work</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
