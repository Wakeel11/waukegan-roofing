import React from 'react';
import { Link } from 'react-router-dom';
import { illinoisCities } from '../cities'; // Check karein ke path sahi hai

const AreasWeServe: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* SEO Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-brand-blue mb-4 uppercase">
            Areas We Serve
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Providing professional roofing and gutter solutions across Illinois, Wisconsin, and Indiana. 
            Find your city below to see our local services.
          </p>
        </div>

        {/* The Grid - Is mein wo loop aayega */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {illinoisCities.map((city) => (
            <Link 
              key={city.slug} 
              to={`/roofing/${city.slug}`} // Hyphen ki jagah slash (App.tsx route ke mutabiq)
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-brand-accent transition-all group text-center"
            >
              <h3 className="text-brand-blue font-bold text-lg group-hover:text-brand-accent transition-colors">
                Roofing in {city.name}, IL
              </h3>
              <p className="text-sm text-gray-500 mt-2">Professional Roofing Services</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreasWeServe;
