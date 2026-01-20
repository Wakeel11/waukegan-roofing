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
      document.title = `${city.name} Roofing Experts | WAUKEGAN Roofing Services | Licensed & Insured`;
    }
  }, [city]);

  if (!city) {
    return <div style={{ padding: '100px', textAlign: 'center' }}><h1>Location Not Found</h1></div>;
  }

  return (
    <div style={{ fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif', color: '#1a202c', lineHeight: '1.6' }}>
      
      {/* Hero Section */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: '900', margin: '0', letterSpacing: '-0.025em' }}>
          WAUKEGAN ROOFING SERVICES IN {city.name.toUpperCase()}, IL
        </h1>
        <p style={{ fontSize: '20px', marginTop: '15px', fontWeight: '500', color: '#cbd5e1' }}>
          Your Local Roofing Authority in {city.name} (Zip: {city.zip}) Since 2016
        </p>
        <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ border: '1px solid #f97316', color: '#f97316', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase' }}>Licensed</span>
          <span style={{ border: '1px solid #f97316', color: '#f97316', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase' }}>Insured</span>
        </div>
      </section>

      {/* Main Content (E-E-A-T) */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '30px', marginBottom: '20px' }}>Quality Craftsmanship in {city.name}</h2>
            <p style={{ fontSize: '17px', color: '#4a5568' }}>
              At <strong>WAUKEGAN Roofing Services</strong>, we specialize in high-durability roofing solutions. Serving the local tri-state area since 2016, we have built a reputation for integrity and professional mastery in every neighborhood.
            </p>
            <ul style={{ listStyle: 'square', paddingLeft: '20px', marginTop: '15px', color: '#4a5568' }}>
              <li>Full Roof Inspections</li>
              <li>Residential & Commercial Solutions</li>
              <li>Storm Damage & Leak Repair</li>
              <li>Siding & Gutter Maintenance</li>
            </ul>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?auto=format&fit=crop&w=800&q=80" 
              alt={`WAUKEGAN Roofing Services in ${city.name}`} 
              style={{ width: '100%', borderRadius: '15px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }} 
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ backgroundColor: '#f8fafc', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e3a8a' }}>Why Choose WAUKEGAN Roofing Services?</h2>
        <div style={{ maxWidth: '800px', margin: '20px auto', fontSize: '18px', color: '#64748b' }}>
          <p>We are familiar with local landmarks and building codes across the {city.zip} area, ensuring your project meets the highest standards of safety and aesthetic value.</p>
        </div>
        <a href="tel:8777193793" style={{ display: 'inline-block', marginTop: '20px', backgroundColor: '#f97316', color: 'white', padding: '15px 40px', borderRadius: '5px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>
          Call (877) 719-3793
        </a>
      </section>
    </div>
  );
};

export default CityServicePage;
