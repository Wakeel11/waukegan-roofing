import React, { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    // LeadSmart Script Injection
    const script = document.createElement('script');
    script.src = "https://leads.leadsmartinc.com/js/embed/embed.js?apikey=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&buttons=btn-info";
    script.type = 'text/javascript';
    script.async = true;
    
    const formContainer = document.getElementById('leadsmart-form-container');
    if (formContainer) {
      formContainer.appendChild(script);
    }
  }, []);

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#1e3a8a', fontSize: '36px', fontWeight: 'bold' }}>Contact WAUKEGAN Roofing Services</h1>
        <p style={{ fontSize: '18px', color: '#4a5568' }}>Get a professional assessment for your roofing project today.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px' }}>
        {/* Contact Info & Map */}
        <div>
          <h2 style={{ color: '#1e3a8a' }}>Our Headquarters</h2>
          <p style={{ fontSize: '17px', margin: '10px 0' }}>
            <strong>Address:</strong> 39089 N Green Bay Rd, Beach Park, IL 60087
          </p>
          <p style={{ fontSize: '17px', margin: '10px 0' }}>
            <strong>Phone:</strong> (877) 719-3793
          </p>
          <p style={{ fontSize: '17px', margin: '10px 0' }}>
            <strong>Serving Since:</strong> 2016
          </p>
          
          <div style={{ marginTop: '30px', height: '300px', backgroundColor: '#e2e8f0', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: '#718096' }}>[Google Map Placeholder for Beach Park]</p>
          </div>
        </div>

        {/* Lead Form Container */}
        <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#1e3a8a', marginBottom: '20px', textAlign: 'center' }}>Request a Free Estimate</h3>
          <div id="leadsmart-form-container">
            {/* Form will be injected here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
