import React from 'react';

const ServicesPage = () => {
  const services = [
    { title: "Residential Roofing", desc: "Expert shingle installation and leak repairs for Lake County homes." },
    { title: "Commercial Roofing", desc: "Durable flat roof systems and maintenance for businesses and warehouses." },
    { title: "Industrial Solutions", desc: "Large-scale roofing projects tailored for industrial facilities since 2016." },
    { title: "Siding & Gutters", desc: "Complete exterior protection including professional siding and gutter systems." }
  ];

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#1e3a8a', textAlign: 'center', fontSize: '42px', fontWeight: '900' }}>OUR SERVICES</h1>
      <div style={{ marginTop: '50px', display: 'grid', gap: '30px' }}>
        {services.map((s, i) => (
          <div key={i} style={{ padding: '30px', borderLeft: '6px solid #f97316', backgroundColor: '#f8fafc', borderRadius: '0 15px 15px 0' }}>
            <h2 style={{ color: '#1e3a8a', marginTop: 0 }}>{s.title}</h2>
            <p style={{ fontSize: '18px', color: '#4a5568' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
