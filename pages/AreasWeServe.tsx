import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { SERVICE_AREAS } from '../constants';
import { MapPin } from 'lucide-react';

const AreasWeServe: React.FC = () => {
  return (
    <>
      <Hero 
        title="Areas We Serve"
        subtitle="Providing top-tier roofing services across Waukegan, Wadsworth, and the greater Illinois area."
        backgroundImageUrl="https://picsum.photos/1920/1082"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-slate mb-4">Our Service Network</h2>
            <p className="text-gray-600">
              We are committed to being the local roofer you can rely on. Select your city below to learn more about our specific services in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SERVICE_AREAS.map(city => (
              <Link 
                key={city.slug} 
                to={`/city/${city.slug}`}
                className="group bg-gray-50 hover:bg-white border border-gray-200 hover:border-brand-blue p-6 rounded-lg transition-all shadow-sm hover:shadow-md flex items-center gap-4"
              >
                <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-full group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-brand-blue">{city.name}</h3>
                  <p className="text-xs text-gray-500">{city.zipCodes[0]}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AreasWeServe;