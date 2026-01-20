import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// IMPORTANT: Check karein ke aap ka data 'cities.ts' mein hai ya 'constants.ts' mein
import { illinoisCities } from '../cities'; 

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // Data dhoondne ki koshish
  const city = illinoisCities?.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  // Agar data na mile toh white screen ke bajaye ye message ayega
  if (!city) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold text-red-600">Data Not Found for: {citySlug}</h1>
        <Link to="/areas-we-serve" className="text-blue-600 underline">Go Back to Service Areas</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Simple Header */}
      <div className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold uppercase">Roofing in {city.name}, IL</h1>
        <p className="text-xl mt-2">WAUKEGAN Roofing Services | Trusted Since 2016</p>
      </div>

      {/* Simple Content */}
      <div className="max-w-4xl mx-auto py-12 px-6 bg-white shadow-lg mt-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800">Expert Services in {city.name}</h2>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          Zuniga Roofing Inc (WAUKEGAN Roofing Services) provides professional roofing solutions in <strong>{city.name}</strong> and surrounding areas. 
          Eduardo Zuniga started this business in 2016 to provide reliable local service.
        </p>
        
        <div className="mt-8 p-6 bg-blue-50 border-l-4 border-orange-500">
          <p className="font-bold text-blue-900">Contact Local Office:</p>
          <p className="text-gray-700">39089 N Green Bay Rd, Beach Park, IL 60087</p>
          <p className="text-2xl font-black mt-2 text-blue-900">Call: (877) 719-3793</p>
        </div>
      </div>
    </div>
  );
};

export default CityServicePage;
