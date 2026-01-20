import React from 'react';

const GutterServices = () => {
  return (
    <div style={{ color: '#1a202c', fontFamily: 'Arial, sans-serif' }}>
      <section style={{ backgroundColor: '#f97316', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900' }}>SEAMLESS GUTTER SYSTEMS</h1>
        <p style={{ fontSize: '20px' }}>Protecting Foundations in Lake County Since 2016</p>
      </section>
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <img src="https://images.unsplash.com/photo-1621905252507-b352220239ec?auto=format&fit=crop&w=800" alt="Gutters" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px' }}>Seamless Gutter Installation</h2>
            <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.6' }}>
              Keep water away from your home's foundation. WAUKEGAN Roofing Services provides custom-fitted 
              seamless gutters and professional leaf protection systems.
            </p>
            <ul style={{ lineHeight: '2', fontSize: '17px' }}>
              <li>✅ Custom Seamless Aluminum Gutters</li>
              <li>✅ Gutter Repairs & Cleaning</li>
              <li>✅ Advanced Leaf Guard Installation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GutterServices;
