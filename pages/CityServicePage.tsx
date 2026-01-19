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
      document.title = `WAUKEGAN Roofing Services in ${city.name}, IL | Best Local Roofers`;
    }
  }, [city]);

  if (!city) {
    return <div style={{ padding: '100px', textAlign: 'center' }}><h1>Location Not Found</h1></div>;
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Banner with spacing */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', margin: '0', textTransform: 'uppercase' }}>
          WAUKEGAN Roofing Services in {city.name}, IL
        </h1>
        <p style={{ fontSize: '22px', marginTop: '15px', color: '#cbd5e1' }}>
          Trusted Local Roofing Experts Serving {city.name} and {city.zip} Areas
        </p>
        <a href="tel:8777193793" style={{ display: 'inline-block', marginTop: '25px', backgroundColor: '#f97316', color: 'white', padding: '15px 40px', borderRadius: '5px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>
          Call (877) 719-3793
        </a>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px', marginBottom: '20px' }}>Quality Roofing Near {city.name} Landmarks</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568' }}>
              When it comes to protecting your home in <strong>{city.name}</strong>, WAUKEGAN Roofing Services is the name you can trust. 
              Since 2016, we have been serving neighborhoods near local community centers and landmarks, 
              providing durable roof repairs and full replacements for the {city.zip} community.
            </p>
            <ul style={{ marginTop: '20px', listStyleType: 'check', color: '#2d3748', fontSize: '17px' }}>
              <li>Full Roof Inspections & Maintenance</li>
              <li>High-Quality Shingle Installation</li>
              <li>Siding and Gutter Systems</li>
              <li>24/7 Emergency Storm Damage Repair</li>
            </ul>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" 
              alt={`Roofing in ${city.name}`} 
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }} 
            />
          </div>
        </div>
      </section>

      {/* Local Landmark / Trust Section */}
      <section style={{ backgroundColor: '#f8fafc', padding: '60px 20px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#1e3a8a' }}>Why Homeowners in {city.name} Choose Us?</h2>
          <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '40px' }}>We are not just contractors; we are your neighbors in Illinois.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h4 style={{ color: '#f97316' }}>Local Knowledge</h4>
              <p>We know the Illinois weather and how it affects roofs near local parks and lakes.</p>
            </div>
            <div style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h4 style={{ color: '#f97316' }}>Certified Crew</h4>
              <p>Every project in {city.name} is handled by fully licensed and insured professionals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
