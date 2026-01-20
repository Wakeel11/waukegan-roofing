import React from 'react';
import { Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const Home = () => {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('quote-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#1a202c', lineHeight: '1.6' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '0' }}>WAUKEGAN ROOFING SERVICES</h1>
        <p style={{ fontSize: '22px', marginTop: '20px', color: '#cbd5e1' }}>Expert Craftsmanship & Local Integrity in Illinois & Wisconsin Since 2016</p>
        <div style={{ marginTop: '30px' }}>
          <button onClick={scrollToForm} style={{ backgroundColor: '#f97316', color: 'white', padding: '15px 40px', borderRadius: '5px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}>
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* Fixed Form Section */}
      <section id="quote-form" style={{ padding: '60px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
          <h2 style={{ textAlign: 'center', color: '#1e3a8a', marginBottom: '30px', fontSize: '32px' }}>Request Your Free Roofing Quote</h2>
          <div style={{ width: '100%', height: '550px' }}>
            <iframe src="/form.html" style={{ width: '100%', height: '100%', border: 'none' }} title="Roofing Quote Form" />
          </div>
        </div>
      </section>

      {/* Baqi sections (Services, EEAT, Areas) niche waisay hi raheinge */}
      <section style={{ backgroundColor: '#1e3a8a', padding: '80px 20px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>Service Areas We Cover</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
            {illinoisCities.map((city) => (
              <Link key={city.slug} to={`/roofing-${city.slug}`} style={{ padding: '15px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '5px', textDecoration: 'none', color: 'white', textAlign: 'center' }}>
                Roofing in {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
