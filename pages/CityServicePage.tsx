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
          Your Trusted Local Roofing Authority in {city.name} (Zip: {city.zip}) Since 2016
        </p>
        <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ border: '1px solid #f97316', color: '#f97316', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase' }}>Licensed</span>
          <span style={{ border: '1px solid #f97316', color: '#f97316', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase' }}>Insured</span>
          <span style={{ border: '1px solid #f97316', color: '#f97316', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase' }}>Bonded</span>
        </div>
      </section>

      {/* Authority Section (E-E-A-T) */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '30px', marginBottom: '20px' }}>Professional Roofing Mastery in {city.name}</h2>
            <p style={{ fontSize: '17px', color: '#4a5568' }}>
              At <strong>WAUKEGAN Roofing Services</strong>, we bring over a decade of hands-on experience to every project. Whether you are near 
              the heart of {city.name} or in the surrounding residential neighborhoods, our team provides the expert craftsmanship your home deserves.
            </p>
            <p style={{ fontSize: '17px', color: '#4a5568', marginTop: '15px' }}>
              Operating from our Beach Park headquarters at <strong>39089 N Green Bay Rd</strong>, we serve Illinois, Wisconsin, and Indiana with a commitment 
              to durability and customer satisfaction that only a family-owned business can provide.
            </p>
            <div style={{ marginTop: '25px', padding: '20px', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '6px solid #1e3a8a' }}>
              <h4 style={{ margin: '0', color: '#1e3a8a' }}>Local Landmark Awareness</h4>
              <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>Our crews are frequently seen working near local parks, community centers, and historic districts across the {city.zip} area.</p>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1449156003053-c2d2124ee02c?auto=format&fit=crop&w=800&q=80" 
              alt={`WAUKEGAN Roofing Services project in ${city.name}`} 
              style={{ width: '100%', borderRadius: '15px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }} 
            />
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section style={{ backgroundColor: '#111827', color: 'white', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '40px' }}>The WAUKEGAN Roofing Services Difference</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', background: '#1f2937', borderRadius: '10px' }}>
              <h3 style={{ color: '#f97316' }}>Expertise</h3>
              <p>Specializing in Illinois-specific weather challenges, from heavy snow loads to high wind hail damage.</p>
            </div>
            <div style={{ padding: '30px', background: '#1f2937', borderRadius: '10px' }}>
              <h3 style={{ color: '#f97316' }}>Experience</h3>
              <p>Serving the local tri-state area since 2016 with thousands of successful roof installations.</p>
            </div>
            <div style={{ padding: '30px', background: '#1f2937', borderRadius: '10px' }}>
              <h3 style={{ color: '#f97316' }}>Integrity</h3>
              <p>Honest, transparent pricing and detailed inspections to ensure you only pay for what you need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Community Landmarks */}
      <section style={{ maxWidth: '1000px', margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e3a8a', fontSize: '32px' }}>Protecting Homes Throughout {city.name}</h2>
        <p style={{ fontSize: '18px', color: '#64748b' }}>
          We take pride in our local footprint. Our service trucks are a common sight near local schools, shopping centers, and 
          residential hubs in {city.name}. We know every street and neighborhood in the {city.zip} area.
        </p>
        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80" 
              alt="Local Service Area" 
              style={{ width: '100%', maxWidth: '800px', height: '350px', objectFit: 'cover', borderRadius: '20px' }} 
            />
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ backgroundColor: '#f97316', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ color: 'white', fontSize: '34px', margin: '0' }}>Get Your Expert Roof Assessment in {city.name}</h2>
        <p style={{ color: 'white', fontSize: '20px', marginTop: '10px' }}>Licensed Professionals Standing By to Help with Your Next Project.</p>
        <a href="tel:8777193793" style={{ display: 'inline-block', marginTop: '30px', backgroundColor: '#1e3a8a', color: 'white', padding: '18px 50px', borderRadius: '5px', fontSize: '22px', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
          Call Now: (877) 719-3793
        </a>
      </section>
    </div>
  );
};

export default CityServicePage;
