import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://leads.leadsmartinc.com/js/embed/embed.js?apikey=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&buttons=btn-info";
    script.type = 'text/javascript';
    script.async = true;
    const formContainer = document.getElementById('leadsmart-home-form');
    if (formContainer) { formContainer.appendChild(script); }
  }, []);

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
          <button 
            onClick={scrollToForm}
            style={{ backgroundColor: '#f97316', color: 'white', padding: '15px 40px', borderRadius: '5px', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}
          >
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* Form Section */}
      <section id="quote-form" style={{ padding: '60px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
          <h2 style={{ textAlign: 'center', color: '#1e3a8a', marginBottom: '30px', fontSize: '32px' }}>Request Your Free Roofing Quote</h2>
          <div id="leadsmart-home-form"></div>
        </div>
      </section>

      {/* Core Services Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '36px', marginBottom: '40px' }}>Our Core Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ padding: '40px 20px', border: '1px solid #e2e8f0', borderRadius: '15px', textAlign: 'center', transition: '0.3s', backgroundColor: '#fff' }}>
              <h3 style={{ color: '#f97316' }}>Roofing Solutions</h3>
              <p>Full replacements and repairs for residential and commercial properties.</p>
              <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>Learn More →</span>
            </div>
          </Link>
          <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ padding: '40px 20px', border: '1px solid #e2e8f0', borderRadius: '15px', textAlign: 'center', transition: '0.3s', backgroundColor: '#fff' }}>
              <h3 style={{ color: '#f97316' }}>Gutter Systems</h3>
              <p>Professional gutter installation and cleaning to protect your foundation.</p>
              <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>Learn More →</span>
            </div>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ padding: '40px 20px', border: '1px solid #e2e8f0', borderRadius: '15px', textAlign: 'center', transition: '0.3s', backgroundColor: '#fff' }}>
              <h3 style={{ color: '#f97316' }}>Roof Inspections</h3>
              <p>Thorough storm damage assessments and preventative maintenance.</p>
              <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>Learn More →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* E-E-A-T Section */}
      <section style={{ backgroundColor: '#f8fafc', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: '#1e3a8a', fontSize: '36px' }}>Trusted Roofing Authority</h2>
            <p style={{ fontSize: '18px', color: '#4a5568' }}>Operating with family values and professional excellence across the Tri-State area.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ color: '#f97316' }}>9+ Years Experience</h3>
              <p>Serving the community since 2016 with thousands of successful projects.</p>
            </div>
            <div style={{ padding: '30px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ color: '#f97316' }}>Local HQ</h3>
              <p>Proudly based at 39089 N Green Bay Rd, Beach Park, IL 60087.</p>
            </div>
            <div style={{ padding: '30px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', textAlign: 'center' }}>
              <h3 style={{ color: '#f97316' }}>Licensed & Insured</h3>
              <p>Fully bonded professionals ensuring your property is in safe hands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Content: Waukegan Landmarks */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#1e3a8a', fontSize: '32px' }}>Deep Roots in Waukegan, IL</h2>
            <p style={{ marginTop: '20px', fontSize: '17px' }}>
              WAUKEGAN Roofing Services is proud to serve the historic city of Waukegan. From the beautiful <strong>Waukegan Harbor & Marina</strong> 
              to the iconic <strong>Genesee Theatre</strong>, we have been the go-to roofing contractors.
            </p>
            <p style={{ marginTop: '15px', fontSize: '17px' }}>
              Whether your property is near the <strong>Waukegan Municipal Beach</strong> or the bustling downtown district, 
              our crew understands the unique lakefront weather challenges.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Roofing in Waukegan IL" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 25px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      {/* Service Areas Section */}
      <section style={{ backgroundColor: '#1e3a8a', padding: '80px 20px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>Service Areas We Cover</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
            {illinoisCities.map((city) => (
              <Link key={city.slug} to={`/roofing-${city.slug}`} style={{ padding: '15px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '5px', textDecoration: 'none', color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                Roofing in {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e3a8a', marginBottom: '40px' }}>Client Testimonials</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontStyle: 'italic', padding: '30px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            "WAUKEGAN Roofing Services fixed my storm damage in record time. Highly professional!" - Waukegan Resident
          </div>
          <div style={{ fontStyle: 'italic', padding: '30px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            "Best local roofing company since 2016. Honest pricing and great work." - Gurnee Homeowner
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
