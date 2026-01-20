import React from 'react';

const GutterServices = () => {
  return (
    <div style={{ color: '#1a202c' }}>
      <section style={{ backgroundColor: '#f97316', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900' }}>SEAMLESS GUTTER SYSTEMS</h1>
      </section>
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <img src="https://images.unsplash.com/photo-1621905252507-b352220239ec?auto=format&fit=crop&w=800" alt="Gutters" style={{ width: '100%', borderRadius: '15px' }} />
          <div>
            <h2 style={{ color: '#1e3a8a' }}>Custom Gutter Installation</h2>
            <p style={{ fontSize: '18px', margin: '20px 0' }}>
              Protect your foundation from water damage with our professional gutter solutions. 
              Based in Beach Park, IL.
            </p>
            <ul style={{ lineHeight: '2' }}>
              <li>✅ Seamless Aluminum Gutters</li>
              <li>✅ Gutter Cleaning & Repair</li>
              <li>✅ Leaf Protection Systems</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GutterServices;
