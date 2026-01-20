import React from 'react';

const ServicesPage = () => {
  return (
    <div style={{ color: '#1a202c', fontFamily: 'Arial, sans-serif' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900' }}>OUR PROFESSIONAL SERVICES</h1>
        <p style={{ fontSize: '18px' }}>Serving Illinois, Wisconsin, and Indiana Since 2016</p>
      </section>

      {/* ROOFING SECTION */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px', fontWeight: '800' }}>Expert Roofing Solutions</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.7', margin: '20px 0' }}>
              WAUKEGAN Roofing Services specializes in high-quality roof installations and repairs. 
              We handle residential, commercial, and industrial projects with code-compliant workmanship since 2016.
            </p>
            <ul style={{ lineHeight: '2', fontSize: '17px' }}>
              <li>✅ Complete Shingle Roof Replacement</li>
              <li>✅ Flat Roof & Industrial Systems</li>
              <li>✅ Emergency Leak Repair & Maintenance</li>
            </ul>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?q=80&w=800&auto=format&fit=crop" 
              alt="Professional Roofing Services" 
              style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
            />
          </div>
        </div>
      </section>

      {/* GUTTERS SECTION */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b352220239ec?q=80&w=800&auto=format&fit=crop" 
              alt="Seamless Gutter Installation" 
              style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
            />
          </div>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px', fontWeight: '800' }}>Seamless Gutter Systems</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.7', margin: '20px 0' }}>
              Protect your property's foundation with our expert gutter installations. Since 2016, we've provided 
              Lake County with durable drainage solutions designed for local weather.
            </p>
            <ul style={{ lineHeight: '2', fontSize: '17px' }}>
              <li>✅ Custom Seamless Gutter Fitting</li>
              <li>✅ Professional Gutter Cleaning</li>
              <li>✅ Downspout & Leaf Guard Protection</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
