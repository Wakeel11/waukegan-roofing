import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { ROOFING_SERVICES, GUTTER_SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Hero 
        title="Our Roofing & Gutter Services"
        subtitle="Comprehensive exterior solutions tailored to protect your home and business."
        backgroundImageUrl="https://picsum.photos/1920/1081" 
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-slate border-l-8 border-brand-accent pl-4 mb-8">Roofing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ROOFING_SERVICES.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          <div id="gutters" className="pt-12">
             <h2 className="text-3xl font-bold text-brand-slate border-l-8 border-brand-blue pl-4 mb-8">Gutter Services</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {GUTTER_SERVICES.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;