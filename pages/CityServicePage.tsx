import React from 'react';
import { useParams } from 'react-router-dom';
import { illinoisCities } from '../constants/cities';

const CityServicePage = () => {
  const { citySlug } = useParams();
  
  // URL se city ka data dhoondna
  const city = illinoisCities.find(c => c.slug === citySlug);

  if (!city) return <div>City not found</div>;

  return (
    <div className="py-20 px-4 text-center">
      <h1 className="text-4xl font-bold text-navy-900 mb-4">
        Best Roofing Services in {city.name}, IL
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Professional Roof Repair, Replacement & Inspection in {city.name} (Zip: {city.zip})
      </p>
      <div className="bg-slate-100 p-6 rounded-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-3">Expert Roofers Near You</h2>
        <p>Serving the {city.name} area since 2016 with high-quality materials and 24/7 emergency support.</p>
        <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded font-bold">
          Get a Free Quote for {city.name}
        </button>
      </div>
    </div>
  );
};

export default CityServicePage;