import React from 'react';

const Roofing = () => {
  return (
    <div style={{ color: '#1a202c', fontFamily: 'Arial, sans-serif' }}>
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '70px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: '900' }}>PROFESSIONAL ROOFING SOLUTIONS</h1>
        <p style={{ fontSize: '18px' }}>WAUKEGAN Roofing Services: Trusted in IL, WI, & IN since 2016</p>
      </section>
      <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a' }}>Residential & Industrial Roofing</h2>
            <p style={{ fontSize: '17px', lineHeight: '1.6', margin: '20px 0' }}>
              We specialize in new roof installations and emergency repairs. Our headquarters at 39089 N Green Bay Rd, Beach Park, IL 60087 ensures fast local service.
            </p>
            <ul style={{ lineHeight: '2' }}>
              <li>✅ Architectural Shingles</li>
              <li>✅ Commercial Flat Roofs</li>
              <li>✅ Storm Damage Restoration</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?auto=format&w=700" alt="Roofing" style={{ width: '100%', borderRadius: '12px' }} />
        </div>
      </section>
    </div>
  );
};

export default Roofing;
