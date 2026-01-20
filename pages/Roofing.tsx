import React from 'react';

const RoofingServices = () => {
  return (
    <div style={{ color: '#1a202c' }}>
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900' }}>PROFESSIONAL ROOFING SERVICES</h1>
      </section>
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a' }}>New Roofs & Replacements</h2>
            <p style={{ fontSize: '18px', margin: '20px 0' }}>
              We specialize in high-quality residential, commercial, and industrial roofing systems. 
              Serving Illinois, Wisconsin, and Indiana since 2016.
            </p>
            <ul style={{ lineHeight: '2' }}>
              <li>✅ Architectural Shingle Roofs</li>
              <li>✅ Flat Roof Systems</li>
              <li>✅ Storm Damage Repairs</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?auto=format&fit=crop&w=800" alt="Roofing" style={{ width: '100%', borderRadius: '15px' }} />
        </div>
      </section>
    </div>
  );
};

export default RoofingServices;
