import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { illinoisCities } from '../cities'; // Hum wahi cities list use karenge jo pehle banayi thi
import Hero from '../components/Hero';
import JsonLd from '../components/JsonLd';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, ShieldCheck, Home as HomeIcon } from 'lucide-react';

const CityTemplate: React.FC = () => {
  // useParams ab "cityName" dhoonde ga jo App.tsx se match karega
  const { cityName } = useParams<{ cityName: string }>();
  
  // Data dhoondne ki logic
  const cityData = illinoisCities.find(city => city.slug === cityName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cityName]);

  // Agar city na mile toh crash hone ke bajaye redirect kare
  if (!cityData) {
    return <Navigate to="/areas-we-serve" replace />;
  }

  const displayName = cityData.name;

  return (
    <>
      <JsonLd 
        cityName={displayName} 
        description={`Top rated roofing and gutter services in ${displayName}, IL. Local experts since 2016. Call now.`} 
      />
      
      {/* Dynamic Hero - WAUKEGAN Branding */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: '900' }}>
          Roofing Services in {displayName}, IL
        </h1>
        <p style={{ fontSize: '20px', marginTop: '15px', color: '#cbd5e1' }}>
          WAUKEGAN Roofing Services: Your local {displayName} experts since 2016.
        </p>
      </section>

      {/* Local Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-slate mb-6">
            Protecting Homes in {displayName}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Homeowners in <strong>{displayName}, IL {cityData.zip || ''}</strong> know that local weather can be tough. 
            Since 2016, Eduardo Zuniga and the team at <strong>WAUKEGAN Roofing Services</strong> (Zuniga Roofing Inc) 
            have been serving the {displayName} community with reliable roofing and gutters.
          </p>
          <div className="flex justify-center gap-8 text-brand-blue font-semibold">
             <span className="flex items-center gap-2"><MapPin /> Headquartered in Beach Park</span>
             <span className="flex items-center gap-2"><ShieldCheck /> Licensed & Insured</span>
          </div>
        </div>
      </section>

      {/* CTA Section specialized for the city */}
      <section className="py-20 bg-brand-slate text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Need a Roofer in {displayName}?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Choose the local experts who know {displayName} building codes. 
                Our office is located at 39089 N Green Bay Rd, Beach Park, IL 60087.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <Phone size={32} className="text-brand-accent" />
                  <div>
                    <h4 className="font-bold">Fast Response in {displayName}</h4>
                    <a href="tel:8777193793" className="text-xl font-bold text-white">(877) 719-3793</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white text-brand-slate p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Get a {displayName} Quote</h3>
              {/* Check karein ke ContactForm component load ho raha hai */}
              <ContactForm cityName={displayName} />
            </div>
          </div>
        </div>
      </section>
      
      {/* SEO Nearby Areas */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl text-center">
            <h3 className="text-lg font-bold text-gray-500 mb-4 uppercase">Nearby Areas We Serve</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
                {illinoisCities.filter(c => c.slug !== cityName).slice(0, 10).map(city => (
                    <Link key={city.slug} to={`/roofing-${city.slug}`} className="text-brand-blue hover:underline">
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
