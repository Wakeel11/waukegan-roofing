import React from 'react';
import { Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#1a202c', lineHeight: '1.6' }}>
      
      {/* Hero Section */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '0' }}>WAUKEGAN ROOFING SERVICES</h1>
        <p style={{ fontSize: '22px', marginTop: '20px', color: '#cbd5e1' }}>Expert Craftsmanship & Local Integrity in Illinois & Wisconsin Since 2016</p>
        <div style={{ marginTop: '30px' }}>
          <a href="tel:8777193793" style={{ backgroundColor: '#f97316', color: 'white', padding: '15px 40px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}>
            Get a Free Estimate: (877) 719-3793
          </a>
        </div>
      </section>

      {/* E-E-A-T Section: Why Choose Us */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ color: '#1e3a8a', fontSize: '36px' }}>Trusted Roofing Authority</h2>
          <p style={{ fontSize: '18px', color: '#4a5568' }}>Operating with family values and professional excellence across the Tri-State area.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          <div style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
            <h3 style={{ color: '#f97316' }}>9+ Years Experience</h3>
            <p>Serving the community since 2016 with thousands of successful projects.</p>
          </div>
          <div style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
            <h3 style={{ color: '#f97316' }}>Local HQ</h3>
            <p>Proudly based at 39089 N Green Bay Rd, Beach Park, IL 60087.</p>
          </div>
          <div style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
            <h3 style={{ color: '#f97316' }}>Licensed & Insured</h3>
            <p>Fully bonded professionals ensuring your property is in safe hands.</p>
          </div>
        </div>
      </section>

      {/* Local SEO Content: Waukegan Landmarks */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px' }}>Deep Roots in Waukegan, IL</h2>
            <p style={{ marginTop: '20px', fontSize: '17px' }}>
              WAUKEGAN Roofing Services is proud to serve the historic city of Waukegan. From the beautiful <strong>Waukegan Harbor & Marina</strong> 
              to the iconic <strong>Genesee Theatre</strong>, we have been the go-to roofing contractors for local residents and businesses.
            </p>
            <p style={{ marginTop: '15px', fontSize: '17px' }}>
              Whether your property is near the <strong>Waukegan Municipal Beach</strong> or the bustling downtown district, 
              our crew understands the unique lakefront weather challenges that Illinois roofs face every winter.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Roofing in Waukegan IL" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 25px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      {/* Review Placeholder Section */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e3a8a', marginBottom: '40px' }}>What Our Customers Say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontStyle: 'italic', padding: '20px', backgroundColor: '#fff7ed', borderRadius: '10px' }}>
            "Best roofers in the area. Fast, clean, and very professional!" - Local Homeowner
          </div>
          <div style={{ fontStyle: 'italic', padding: '20px', backgroundColor: '#fff7ed', borderRadius: '10px' }}>
            "They fixed my leak near Gurnee in no time. Highly recommend WAUKEGAN Roofing Services." - Satisfied Client
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
