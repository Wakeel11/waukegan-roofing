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
      document.title = `Best Roofing Services in ${city.name}, IL | Zuniga Roofing Inc`;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', `Expert roofing in ${city.name}, IL. We offer repair, replacement, and emergency services. Serving Zip: ${city.zip}. Call now!`);
    }
  }, [city]);

  if (!city) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h1>Location Not Found</h1>
        <p>Path: {citySlug}</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', margin: '0' }}>Roofing Services in {city.name}, IL</h1>
        <p style={{ fontSize: '20px', opacity: '0.9', marginTop: '10px' }}>Top-Rated Local Contractors Serving {city.zip}</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#ea580c', fontSize: '28px' }}>Expert Roof Repair & Replacement</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#4b5563' }}>
          Zuniga Roofing Inc has been a trusted name in {city.name} since 2016. Whether you need a small leak fixed or a complete new roof installation, our team is ready to help with quality craftsmanship.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Residential</h3>
            <p>High-quality shingle and flat roof solutions.</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Commercial</h3>
            <p>Durable roofing for business properties.</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Emergency</h3>
            <p>24/7 support for storm damage and leaks.</p>
          </div>
        </div>

        <div style={{ marginTop: '50px', padding: '30px', backgroundColor: '#f9fafb', borderRadius: '12px' }}>
          <h3>Ready for a Free Estimate in {city.name}?</h3>
          <p>Contact us today to schedule your professional roof inspection.</p>
          <button style={{ backgroundColor: '#ea580c', color: 'white', padding: '15px 40px', border: 'none', borderRadius: '50px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
            Call Now: (877) 719-3793
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityServicePage;
