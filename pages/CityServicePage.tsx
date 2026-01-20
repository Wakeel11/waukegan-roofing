import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // URL slug ke mutabiq city ka data dhoondna
  const city = illinoisCities.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  if (!city) {
    return (
      <div style={{ padding: '120px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#1e3a8a' }}>Location Profile Not Found</h1>
        <p>We are currently updating our database for this area.</p>
        <Link to="/" style={{ color: '#f97316', fontWeight: 'bold' }}>Return to Homepage</Link>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Segoe UI, Roboto, Arial, sans-serif', color: '#1a202c', lineHeight: '1.6' }}>
      
      {/* 1. DYNAMIC CITY HERO SECTION */}
      <section style={{ 
        backgroundColor: '#1e3a8a', 
        color: 'white', 
        padding: '100px 20px', 
        textAlign: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 31, 100, 0.8), rgba(0, 31, 100, 0.8)), url("https://images.unsplash.com/photo-1633050488507-2e43c16b1f3a?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', textTransform: 'uppercase' }}>
            Expert Roofing in {city.name}, IL {city.zip || ''}
          </h1>
          <p style={{ fontSize: '22px', marginTop: '20px', color: '#cbd5e1' }}>
            WAUKEGAN Roofing Services: Your Trusted Local Contractor in {city.name}
          </p>
          <div style={{ marginTop: '40px' }}>
            <a href="tel:8777193793" style={{ 
              backgroundColor: '#22c55e', color: 'white', padding: '18px 45px', borderRadius: '8px', 
              textDecoration: 'none', fontWeight: '900', fontSize: '22px', boxShadow: '0 5px 20px rgba(34, 197, 94, 0.4)'
            }}>
              📞 CALL {city.name.toUpperCase()} OFFICE
            </a>
          </div>
        </div>
      </section>

      {/* 2. SEO CONTENT SECTION */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'start' }}>
          
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '34px', fontWeight: '800', lineHeight: '1.2' }}>
              Expert Roofing Installation & Repair in {city.name}
            </h2>
            <p style={{ fontSize: '19px', color: '#4a5568', marginTop: '25px' }}>
              <strong>WAUKEGAN Roofing Services</strong> is proud to serve homeowners and businesses in {city.name}, Illinois. 
              Since 2016, we have successfully completed residential, commercial, and industrial roofing 
              projects throughout Lake County and the surrounding areas.
            </p>
            <p style={{ fontSize: '18px', color: '#4a5568', marginTop: '15px' }}>
              Whether you need a full roof replacement or emergency storm repairs, our professional team 
              ensures code-compliant workmanship and long-lasting protection for your property.
            </p>
            <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f8fafc', borderRadius: '15px', borderLeft: '8px solid #f97316' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1e3a8a', fontSize: '16px', textTransform: 'uppercase' }}>Need a Professional Estimate?</p>
              <a href="tel:8777193793" style={{ fontSize: '30px', color: '#1e3a8a', textDecoration: 'none', fontWeight: '900' }}>(877) 719-3793</a>
            </div>
          </div>

          {/* Localized Trust Points */}
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <h3 style={{ color: '#1e3a8a', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Why Choose WAUKEGAN Roofing?</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '15px', fontSize: '17px' }}>✅ <strong>Local Presence:</strong> Based in Beach Park, IL 60087.</li>
              <li style={{ marginBottom: '15px', fontSize: '17px' }}>✅ <strong>Established 2016:</strong> Nearly a decade of expert service.</li>
              <li style={{ marginBottom: '15px', fontSize: '17px' }}>✅ <strong>Full Coverage:</strong> Serving IL, WI, and Indiana area.</li>
              <li style={{ marginBottom: '15px', fontSize: '17px' }}>✅ <strong>Licensed & Insured:</strong> Fully bonded professionals.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 3. TRUST & E-E-A-T FOOTER SECTION */}
      <section style={{ backgroundColor: '#1e3a8a', padding: '80px 20px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800' }}>Your Local Roofing Authority</h2>
          <p style={{ fontSize: '19px', marginTop: '20px', opacity: '0.9' }}>
            Headquartered at <strong>39089 N Green Bay Rd, Beach Park, IL 60087</strong>, we provide rapid response 
            times and expert craftsmanship for every client in {city.name} and beyond.
          </p>
          <div style={{ marginTop: '40px' }}>
            <Link to="/" style={{ color: '#f97316', fontWeight: 'bold', textDecoration: 'none', fontSize: '18px' }}>
              ← View All Service Areas
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CityServicePage;
