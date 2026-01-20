import React from 'react';

const Gutters = () => {
  return (
    <div style={{ color: '#1a202c', fontFamily: 'Arial, sans-serif' }}>
      <section style={{ backgroundColor: '#f97316', color: 'white', padding: '70px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: '900' }}>SEAMLESS GUTTER SYSTEMS</h1>
        <p style={{ fontSize: '18px' }}>Protecting Foundations Across Lake County Since 2016</p>
      </section>
      <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <img src="https://images.unsplash.com/photo-1621905252507-b352220239ec?auto=format&w=700" alt="Gutters" style={{ width: '100%', borderRadius: '12px' }} />
          <div>
            <h2 style={{ color: '#1e3a8a' }}>Custom Gutter Installation</h2>
            <p style={{ fontSize: '17px', lineHeight: '1.6', margin: '20px 0' }}>
              We provide seamless aluminum gutter installations and professional cleaning services in Illinois, Wisconsin, and Indiana.
            </p>
            <ul style={{ lineHeight: '2' }}>
              <li>✅ Seamless Aluminum Fitting</li>
              <li>✅ Professional Gutter Cleaning</li>
              <li>✅ Leaf Protection Guards</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gutters;
