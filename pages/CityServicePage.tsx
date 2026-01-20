import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // Find city data based on URL slug
  const city = illinoisCities.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  if (!city) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h1 style={{ color: '#1e3a8a' }}>Service Profile Not Found</h1>
        <p>We are currently updating our database for this location.</p>
        <Link to="/" style={{ color: '#f97316', fontWeight: 'bold' }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Segoe UI, Roboto, Arial, sans-serif', color: '#1a202c', lineHeight: '1.6' }}>
      
      {/* Dynamic City Hero Section */}
      <section style={{ 
        backgroundColor: '#1e3a8a', 
        color: 'white', 
        padding: '100px 20px', 
        textAlign: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 31, 100, 0.8), rgba(0, 31, 100, 0.8)), url("https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?q=80&w=1600&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: '900', textTransform: 'uppercase' }}>
            Roofing in {city.name}, IL
          </h1>
          <p style={{ fontSize: '22px', marginTop: '20px', color: '#cbd5e1' }}>
            WAUKEGAN Roofing Services: Your Leading Small Business Contractor in {city.name}
          </p>
          <div style={{ marginTop: '40px' }}>
            <a href="tel:8777193793" style={{ 
              backgroundColor: '#22c55e', color: 'white', padding: '18px 45px', borderRadius: '8px', 
              textDecoration: 'none', fontWeight: '900', fontSize: '22px', boxShadow: '0 5px 20px rgba(34, 197, 94, 0.4)'
            }}>
              📞 CALL {city.name} OFFICE
            </a>
          </div>
        </div>
      </section>

      {/* Main Content: Local SEO Focus */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '38px', fontWeight: '800', lineHeight: '1.2' }}>
              Expert Roofing Installation & Repair in {city.name}
            </h2>
            <p style={{ fontSize: '19px', color: '#4a5568', marginTop: '25px' }}>
              Zuniga Roofing Inc is proud to serve <strong>{city.name}, Illinois</strong> as a trusted local authority. 
              Since 2016, our team has successfully tackled residential, commercial, and industrial roofing 
              projects throughout Lake County and the surrounding areas.
            </p>
            <p style={{ fontSize: '18px', color: '#4a5568', marginTop: '20px' }}>
              We understand the unique weather challenges in the Tri-State area (IL, WI, IN) and provide 
              code-compliant, high-quality workmanship for every property.
            </p>
            <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f8fafc', borderRadius: '15px', borderLeft: '8px solid #f97316' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1e3a8a', fontSize: '16px', textTransform: 'uppercase' }}>Serving {city.name} Since 2016:</p>
              <a href="tel:8777193793" style={{ fontSize: '30px', color: '#1e3a8a', textDecoration: 'none', fontWeight: '900' }}>(877) 719-3793</a>
            </div>
          </div>

          {/* Localized Trust Points */}
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <h3 style={{ color: '#1e3a8a', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Why Choose Us in {city.name}?</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '15px', fontSize: '17px' }}>✅ <strong>Local Presence:</strong> Based in Beach Park, IL.</li>
              <li style={{ marginBottom: '15px', fontSize: '17px' }}>✅ <strong>Full Insurance:</strong> Licensed & Bonded contractors.</li>
              <li style={{ marginBottom: '15px', fontSize: '17px' }}>✅ <strong>Experience:</strong> Operating with integrity since 2016.</li>
              <li style={{ marginBottom: '15px', fontSize: '17px' }}>✅ <strong>Quality:</strong> Professional shingle and flat roof systems.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tri-State Authority Section */}
      <section style={{ backgroundColor: '#1e3a8a', padding: '80px 20px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800' }}>Your Tri-State Roofing Partner</h2>
          <p style={{ fontSize: '19px', marginTop: '20px', opacity: '0.9' }}>
            Zuniga Roofing Inc serves the Illinois, Wisconsin, and Indiana area with premium roofing 
            services. Our headquarters at 39089 N Green Bay Rd, Beach Park, IL 60087 ensures we are 
            always ready to handle emergencies in {city.name}.
          </p>
        </div>
      </section>

      {/* Internal Linking for SEO */}
      <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f8fafc' }}>
        <h3 style={{ marginBottom: '30px', color: '#1e3a8a' }}>Explore Other Neighborhoods We Serve</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '120px' }}>
          <Link to="/" style={{ color: '#f97316', fontWeight: 'bold', textDecoration: 'none', fontSize: '18px' }}>← View All Locations</Link>
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
