import React from 'react';

const ContactPage = () => {
  const leadSmartScript = `
    <html>
      <body style="margin:0; padding:0;">
        <script type="text/javascript">
          var po_host=(("https:"==document.location.protocol)?"https://":"http://");
          document.write(unescape("%3Cscript src='"+po_host+"leads.leadsmartinc.com/js/embed/embed.js?apikey=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=modazawra1&buttons=btn-info' type='text/javascript'%3E%3C/script%3E"));
        </script>
      </body>
    </html>
  `;

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#1e3a8a', fontSize: '42px', fontWeight: 'bold' }}>Contact WAUKEGAN Roofing Services</h1>
        <p style={{ fontSize: '20px', color: '#4a5568' }}>Professional Roofing Solutions Across IL, WI, and IN Since 2016.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px' }}>
        <div>
          <h2 style={{ color: '#1e3a8a' }}>Get in Touch</h2>
          <p style={{ fontSize: '18px', margin: '20px 0' }}>
            <strong>Main Office:</strong> 39089 N Green Bay Rd, Beach Park, IL 60087
          </p>
          <p style={{ fontSize: '18px', margin: '20px 0' }}>
            <strong>Phone:</strong> (877) 719-3793
          </p>
        </div>

        <div style={{ backgroundColor: '#f8fafc', padding: '40px', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#1e3a8a', marginBottom: '20px', textAlign: 'center' }}>Request Your Free Estimate</h3>
          <div style={{ width: '100%', minHeight: '450px' }}>
            <iframe 
              srcDoc={leadSmartScript}
              style={{ width: '100%', height: '500px', border: 'none' }}
              title="LeadSmart Contact Form"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
