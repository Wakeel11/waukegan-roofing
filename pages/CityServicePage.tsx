import React from 'react';
import { useParams } from 'react-router-dom';
import { illinoisCities } from '../cities';

const CityServicePage = () => {
  const { citySlug } = useParams();
  
  const cities = illinoisCities || [];
  const city = cities.find(c => c.slug === citySlug);

  if (!city) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h1>City Not Found</h1>
        <p>Location: {citySlug}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a' }}>
        Best Roofing Services in {city.name}, IL
      </h1>
      <p style={{ fontSize: '18px', color: '#4b5563', marginTop: '10px' }}>
        Professional Roof Repair and Replacement in {city.name} (Zip: {city.zip})
      </p>
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '8px', display: 'inline-block' }}>
        <p>Leading roofing contractor serving the {city.name} area since 2016.</p>
        <button style={{ marginTop: '15px', padding: '10px 25px', backgroundColor: '#ea580c', color: 'white', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>
          Get a Free Estimate
        </button>
      </div>
    </div>
  );
};

export default CityServicePage;
