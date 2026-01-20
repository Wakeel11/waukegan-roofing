import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
// Check karein ke aap ki cities file 'cities.ts' hai
import { illinoisCities } from '../cities'; 
import { BUSINESS_INFO } from '../constants';
import Hero from '../components/Hero';
import JsonLd from '../components/JsonLd';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, ShieldCheck } from 'lucide-react';

const CityServicePage: React.FC = () => {
  // useParams ab exactly 'citySlug' uthaye ga jo App.tsx mein hai
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // Data dhoondne ki logic
  const cityData = illinoisCities?.find(city => city.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  // Agar data na mile toh white screen ke bajaye areas page par bhej de
  if (!cityData) {
    return <Navigate to="/areas-we-serve" replace />;
  }

  const displayName = cityData.name;

  return (
    <div className="pt-20 font-sans">
      <JsonLd 
        cityName={displayName} 
        description={`Professional roofing and gutter services in ${displayName}, IL. Local experts since 2016.`} 
      />
      
      {/* City Hero */}
      <section className="bg-brand-blue text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase">Roofing in {displayName}, IL</h1>
        <p className="text-xl mt-4">WAUKEGAN Roofing Services: Serving Lake County Since 2016</p>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-brand-slate mb-6">Expert Roof Installation for {displayName}</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Since 2016, Eduardo Zuniga and <strong>WAUKEGAN Roofing Services</strong> (Zuniga Roofing Inc) 
            have provided professional roofing solutions in <strong>{displayName}, IL</strong>. 
            Our Beach Park headquarters at 39089 N Green Bay Rd allows us to serve the entire Tri-State area.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-brand-blue font-bold">
             <span className="flex items-center gap-2"><MapPin size={20} /> Based in Beach Park, IL</span>
             <span className="flex items-center gap-2"><ShieldCheck size={20} /> Licensed & Insured</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-slate text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-6">Need a Local Roofer in {displayName}?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Choose the team that knows local building codes. We are located at 39089 N Green Bay Rd, Beach Park, IL 60087.
              </p>
              <a href="tel:8777193793" className="flex items-center gap-4 p-5 bg-white/10 rounded-xl text-2xl font-black text-white no-underline border border-white/20 hover:bg-white/20 transition-all">
                <Phone size={32} className="text-brand-accent" />
                (877) 719-3793
              </a>
            </div>
            <div className="bg-white text-brand-slate p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-brand-blue">Free {displayName} Estimate</h3>
              <ContactForm cityName={displayName} />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Nearby Areas */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl text-center">
            <h3 className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest">More Areas We Serve</h3>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                {illinoisCities?.filter(c => c.slug !== citySlug).slice(0, 8).map(city => (
                    <Link key={city.slug} to={`/roofing-${city.slug}`} className="text-brand-blue hover:text-brand-accent hover:underline text-sm font-semibold">
                        Roofing in {city.name}
                    </Link>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
