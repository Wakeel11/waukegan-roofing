import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// HUMNE CITIES KA IMPORT HATA DIYA HAI TEST KARNE KE LIYE
const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  return (
    <div className="pt-32 min-h-screen bg-gray-100 text-center">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-900 uppercase">
          Testing Page for: {citySlug}
        </h1>
        <p className="mt-4 text-gray-600">
          Agar aap ko ye screen nazar aa rahi hai, toh iska matlab hai ke 
          CityServicePage file sahi hai, masla "cities.ts" data file mein hai.
        </p>
        <div className="mt-8 p-4 bg-orange-100 text-orange-800 rounded">
          Zuniga Roofing Inc | Est. 2016
        </div>
        <Link to="/" className="mt-6 block text-blue-600 font-bold underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CityServicePage;
