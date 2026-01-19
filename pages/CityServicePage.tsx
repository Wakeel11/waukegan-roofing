import React from 'react';
import { useParams } from 'react-router-dom';
import { illinoisCities } from '../cities';

const CityServicePage = () => {
  const { citySlug } = useParams();
  
  // Safe check: Agar cities ka data kisi wajah se na mile
  const cities = illinoisCities || [];
  const city = cities.find(c => c.slug === citySlug);

  if (!city) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">City Not Found</h1>
        <p>Sorry, we couldn't find the service page for this location.</p>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 text-center">
      <h1 className="text-4xl font-bold text-navy-900 mb-4">
        Best Roofing Services in {city.name}, IL
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Professional Roof Repair, Replacement & Inspection in {city.name} (Zip: {city.zip})
      </p>
      <div className="bg-slate-100 p-6 rounded-lg max-w-2xl mx-auto border-t-4 border-orange-500">
        <h2 className="text-2xl font-semibold mb-3">Expert Roofers Near You</h2>
        <p>Zuniga Roofing Inc has been serving the {city.name} area since 2016.</p>
        <button className="mt-6 bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition">
          Call for Free Quote
        </button>
      </div>
    </div>
  );
};

export default CityServicePage;
