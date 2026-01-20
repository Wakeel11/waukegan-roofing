import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { illinoisCities } from '../cities';

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = illinoisCities?.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  if (!city) {
    return <Navigate to="/areas-we-serve" replace />;
  }

  return (
    <div className="pt-24 min-h-screen font-sans bg-gray-50">
      <div className="bg-[#1e3a8a] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase">Roofing in {city.name}, IL</h1>
        <p className="text-xl mt-4">WAUKEGAN Roofing Services | Serving Lake County Since 2016</p>
      </div>
      <div className="max-w-4xl mx-auto py-12 px-6 bg-white shadow-lg mt-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800">Expert Services in {city.name}</h2>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          Zuniga Roofing Inc (WAUKEGAN Roofing Services) provides professional roofing solutions in <strong>{city.name}</strong>. 
          Eduardo Zuniga started this business in 2016 to provide reliable local service.
        </p>
        <div className="mt-8 p-6 bg-blue-50 border-l-4 border-orange-500 text-[#1e3a8a]">
          <p className="font-bold">Contact Local Office:</p>
          <p>39089 N Green Bay Rd, Beach Park, IL 60087</p>
          <p className="text-2xl font-black mt-2">Call: (877) 719-3793</p>
        </div>
      </div>
    </div>
  );
};

export default CityServicePage;
