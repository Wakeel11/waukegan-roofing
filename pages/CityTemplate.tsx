import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICE_AREAS, ROOFING_SERVICES, GUTTER_SERVICES, BUSINESS_INFO } from '../constants';
import Hero from '../components/Hero';
import JsonLd from '../components/JsonLd';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, ShieldCheck, Home as HomeIcon } from 'lucide-react';

const CityTemplate: React.FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  
  // Find the city data based on the slug
  const cityData = SERVICE_AREAS.find(city => city.slug === cityName);

  // If city not found, redirect to Areas We Serve (or Home)
  if (!cityData) {
    return <Navigate to="/areas-we-serve" replace />;
  }

  const displayName = cityData.name;

  return (
    <>
      <JsonLd 
        cityName={displayName} 
        description={`Top rated roofing and gutter services in ${displayName}, IL. Local experts, lifetime warranty. Call now.`} 
      />
      
      {/* Dynamic Hero */}
      <Hero 
        title={`Roofing Services in ${displayName}, IL`}
        subtitle={`Your local ${displayName} roofing experts. We provide residential and commercial roofing solutions tailored to Illinois weather.`}
      />

      {/* Local Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-slate mb-6">
            Protecting Homes in {displayName}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Homeowners in <strong>{displayName}, IL ({cityData.zipCodes.join(', ')})</strong> know that local weather can be tough on roofs. 
            From heavy winter snow to spring storms, your home needs superior protection. 
            <strong>{BUSINESS_INFO.name}</strong> has been serving the {displayName} community with reliable, high-quality roofing and gutter services for decades.
          </p>
          <div className="flex justify-center gap-8 text-brand-blue font-semibold">
             <span className="flex items-center gap-2"><MapPin /> Local to {displayName}</span>
             <span className="flex items-center gap-2"><ShieldCheck /> Licensed & Insured</span>
          </div>
        </div>
      </section>

      {/* Programmatic Service List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-slate">Our Services in {displayName}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mix of roofing and gutter services tailored for the city view */}
            {[...ROOFING_SERVICES.slice(0,3), ...GUTTER_SERVICES.slice(0,3)].map(service => (
              <ServiceCard key={service.id} service={service} cityName={displayName} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section specialized for the city */}
      <section className="py-20 bg-brand-slate text-white relative overflow-hidden">
        {/* Abstract shapes/bg */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Need a Roofer in {displayName}?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Don't settle for out-of-town storm chasers. Choose the local experts who know {displayName} building codes and neighborhoods.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <HomeIcon size={32} className="text-brand-accent" />
                  <div>
                    <h4 className="font-bold">Residential Experts</h4>
                    <p className="text-sm text-gray-300">We specialize in {displayName} home styles.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <Phone size={32} className="text-brand-accent" />
                  <div>
                    <h4 className="font-bold">Fast Response</h4>
                    <p className="text-sm text-gray-300">We are just down the road.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white text-brand-slate p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Get a {displayName} Quote</h3>
              <ContactForm cityName={displayName} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Nearby Areas Links for SEO Spidering */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
            <h3 className="text-lg font-bold text-gray-500 mb-4 uppercase tracking-wider text-center">Nearby Areas We Serve</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                {SERVICE_AREAS.filter(c => c.slug !== cityName).map(city => (
                    <Link key={city.slug} to={`/city/${city.slug}`} className="hover:text-brand-blue hover:underline">
                        Roofing in {city.name}
                    </Link>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default CityTemplate;