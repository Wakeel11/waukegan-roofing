import React from 'react';

const Roofing = () => {
  return (
    <div style={{ color: '#1a202c', fontFamily: 'Arial, sans-serif' }}>
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900' }}>PROFESSIONAL ROOFING SERVICES</h1>
        <p style={{ fontSize: '20px', marginTop: '10px' }}>Serving Waukegan and the Tri-State Area Since 2016</p>
      </section>

      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px' }}>Expert Roof Installations</h2>
            <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.7' }}>
              WAUKEGAN Roofing Services specializes in residential and industrial roof replacements. 
              Our team provides code-compliant workmanship across Illinois, Wisconsin, and Indiana.
            </p>
            <ul style={{ lineHeight: '2', fontSize: '17px' }}>
              <li>✅ New Architectural Shingle Roofs</li>
              <li>✅ Commercial & Industrial Flat Roofing</li>
              <li>✅ Emergency Leak Repairs & Storm Damage</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?auto=format&fit=crop&w=800" alt="Roofing" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
      </section>
    </div>
  );
};

export default Roofing;
