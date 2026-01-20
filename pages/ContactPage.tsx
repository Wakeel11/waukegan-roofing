import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px' }}>
        
        <div>
          <h1 style={{ color: '#1e3a8a', fontSize: '38px', fontWeight: '900' }}>GET IN TOUCH</h1>
          <p style={{ fontSize: '18px', color: '#4a5568', margin: '20px 0' }}>
            Contact WAUKEGAN Roofing Services today for a professional estimate on your next project.
          </p>
          <div style={{ marginTop: '30px' }}>
            <h3 style={{ color: '#f97316' }}>Headquarters</h3>
            <p style={{ fontSize: '18px' }}>
              39089 N Green Bay Rd,<br />
              Beach Park, IL 60087
            </p>
            <h3 style={{ color: '#f97316', marginTop: '20px' }}>Phone</h3>
            <a href="tel:8777193793" style={{ fontSize: '24px', fontWeight: '900', color: '#1e3a8a', textDecoration: 'none' }}>
              (877) 719-3793
            </a>
          </div>
        </div>

        <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          {/* Google Maps Placeholder for Beach Park HQ */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d2953.778!2d-87.854!3d42.422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fe98698000001%3A0x0!2zMzkwODkgTiBHcmVlbiBCYXkgUmQsIEJlYWNoIFBhcmssIElMIDYwMDg3!5e0!3m2!1sen!2sus!4v1700000000000" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
