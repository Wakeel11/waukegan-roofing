import React, { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://leads.leadsmartinc.com/js/embed/embed.js?apikey=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&buttons=btn-info";
    script.async = true;

    const container = document.getElementById('contact-form-target');
    if (container && !container.querySelector('script')) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#1e3a8a', fontSize: '42px', fontWeight: 'bold' }}>Contact WAUKEGAN Roofing Services</h1>
        <p style={{ fontSize: '20px', color: '#4a5568' }}>Professional Solutions in Illinois, Wisconsin, and Indiana Since 2016.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px' }}>
        <div>
          <h2 style={{ color: '#1e3a8a' }}>Our Main Office</h2>
          <p style={{ fontSize: '18px', margin: '20px 0' }}>
            <strong>Address:</strong> 39089 N Green Bay Rd, Beach Park, IL 60087
          </p>
          <p style={{ fontSize: '18px', margin: '20px 0' }}>
            <strong>Phone:</strong> (877) 719-3793
          </p>
        </div>

        <div style={{ backgroundColor: '#f8fafc', padding: '40px', borderRadius: '15px', border: '1px solid #e2e8f0', minHeight: '500px' }}>
          <h3 style={{ color: '#1e3a8a', marginBottom: '20px', textAlign: 'center' }}>Free Estimate Request</h3>
          <div id="contact-form-target">
            {/* Form will load here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
