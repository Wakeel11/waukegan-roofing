import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { illinoisCities } from '../cities';

const CityServicePage = () => {
  const { citySlug } = useParams();
  const cities = illinoisCities || [];
  const cleanSlug = citySlug ? citySlug.replace('roofing-', '') : '';
  const city = cities.find(c => c.slug === cleanSlug);

  useEffect(() => {
    if (city) {
      document.title = `Best Roofing Services in ${city.name}, IL | WAUKEGAN Roofing Services`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', `Professional roofing in ${city.name}, IL. WAUKEGAN Roofing Services offers repair, installation, and inspection near local landmarks. Serving ${city.zip} since 2016.`);
    }
  }, [city]);

  if (!city) {
    return <div style={{ padding: '100px', textAlign: 'center' }}><h1>Location Not Found</h1></div>;
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#1a202c', lineHeight: '1.6' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: 'bold', margin: '0' }}>WAUKEGAN Roofing Services in {city.name}, IL</h1>
        <p style={{ fontSize: '20px', marginTop: '15px' }}>Trusted Local Roofing Experts Serving {city.name} and Nearby Areas</p>
        <button style={{ marginTop: '25px', backgroundColor: '#f97316', color: 'white', padding: '15px 35px', border: 'none', borderRadius: '5px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
          Get Your Free Quote: (877) 719-3793
        </button>
      </section>

      {/* Local Content Section */}
      <section style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px' }}>Expert Roof Repair & Replacement in {city.name}</h2>
            <p>
              Are you looking for a reliable roofer near <strong>local landmarks</strong> in {city.name}? 
              WAUKEGAN Roofing Services has been providing top-tier solutions to homeowners in the {city.zip} area since 2016. 
              We understand the specific weather challenges in Illinois and Wisconsin.
            </p>
            <ul style={{ list-style: 'square', paddingLeft: '20px' }}>
              <li>Emergency Leak Repair</li>
              <li>Full Roof Replacement (Shingle & Flat)</li>
              <li>Siding & Gutter Installation</li>
              <li>Professional Roof Inspections</li>
            </ul>
          </div>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img 
              src={`https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?auto=format&fit=crop&w=600&q=80`} 
              alt={`Roofing Work in ${city.name}`} 
              style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} 
            />
          </div>
        </div>
      </section>

      {/* Local Landmarks & Community Section */}
      <section style={{ backgroundColor: '#f3f4f6', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#1e3a8a' }}>Serving the Heart of {city.name}</h2>
          <p style={{ maxWidth: '800px', margin: '20px auto' }}>
            From residential neighborhoods to areas near <strong>community parks and local business centers</strong>, 
            our crew is always nearby. We take pride in keeping {city.name} homes safe and dry.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
             <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
               <h4>Local Parks</h4>
               <p>We provide rapid response services to neighborhoods surrounding local recreational areas.</p>
             </div>
             <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
               <h4>Historic Districts</h4>
               <p>Preserving the aesthetic of historic {city.name} homes with modern roofing technology.</p>
             </div>
             <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
               <h4>Service Area</h4>
               <p>Proudly serving every street in {city.name}, Illinois, and the greater {city.zip} region.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h2 style={{ fontSize: '36px' }}>Don't Wait for a Leak to Get Worse</h2>
        <p>Contact WAUKEGAN Roofing Services today for a professional inspection in {city.name}.</p>
        <a href="tel:8777193793" style={{ display: 'inline-block', marginTop: '20px', backgroundColor: '#1e3a8a', color: 'white', padding: '15px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>
          Call Now: (877) 719-3793
        </a>
      </section>
    </div>
  );
};

export default CityServicePage;
