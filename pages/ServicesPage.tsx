import React from 'react';

const ServicesPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      {/* Services Hero */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '38px', fontWeight: '900' }}>OUR EXPERT SERVICES</h1>
        <p style={{ fontSize: '18px' }}>Serving Illinois, Wisconsin, and Indiana Since 2016</p>
      </section>

      {/* SECTION 1: ROOFING */}
      <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '30px' }}>Professional Roofing</h2>
            <p style={{ fontSize: '17px', lineHeight: '1.7' }}>
              WAUKEGAN Roofing Services specializes in complete residential and industrial roof replacements. 
              We use premium shingles and flat-roof systems that are fully code-compliant.
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Complete Roof Installation</li>
              <li>Leak Repair & Storm Maintenance</li>
              <li>Commercial Flat Roofing</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?w=600&auto=format" alt="Roofing" style={{ width: '100%', borderRadius: '10px' }} />
        </div>
      </section>

      {/* SECTION 2: GUTTERS */}
      <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto', backgroundColor: '#f9fafb' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <img src="https://images.unsplash.com/photo-1621905252507-b352220239ec?w=600&auto=format" alt="Gutters" style={{ width: '100%', borderRadius: '10px' }} />
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '30px' }}>Gutter Systems</h2>
            <p style={{ fontSize: '17px', lineHeight: '1.7' }}>
              Protect your foundation with our seamless gutter systems. Since 2016, we have provided Lake County 
              with durable drainage solutions that prevent water damage.
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Seamless Gutter Installation</li>
              <li>Downspout & Leaf Protection</li>
              <li>Gutter Cleaning Services</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
