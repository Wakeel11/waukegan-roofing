import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

const localCities = [
  { name: "Waukegan", slug: "waukegan", zip: "60085" },
  { name: "Gurnee", slug: "gurnee", zip: "60031" },
  { name: "Zion", slug: "zion", zip: "60099" },
  { name: "Libertyville", slug: "libertyville", zip: "60048" },
  { name: "North Chicago", slug: "north-chicago", zip: "60064" },
  { name: "Beach Park", slug: "beach-park", zip: "60087" },
  { name: "Mundelein", slug: "mundelein", zip: "60060" },
  { name: "Round Lake", slug: "round-lake", zip: "60073" },
  { name: "Antioch", slug: "antioch", zip: "60002" },
  { name: "Grayslake", slug: "grayslake", zip: "60030" },
  { name: "Lake Villa", slug: "lake-villa", zip: "60046" },
  { name: "Wadsworth", slug: "wadsworth", zip: "60083" },
  { name: "Winthrop Harbor", slug: "winthrop-harbor", zip: "60096" },
  { name: "Vernon Hills", slug: "vernon-hills", zip: "60061" },
  { name: "Lake Forest", slug: "lake-forest", zip: "60045" },
  { name: "Highland Park", slug: "highland-park", zip: "60035" },
  { name: "Deerfield", slug: "deerfield", zip: "60015" },
  { name: "Buffalo Grove", slug: "buffalo-grove", zip: "60089" },
  { name: "Lake Zurich", slug: "lake-zurich", zip: "60047" },
  { name: "Fox Lake", slug: "fox-lake", zip: "60020" },
  { name: "Wauconda", slug: "wauconda", zip: "60084" },
  { name: "Lindenhurst", slug: "lindenhurst", zip: "60046" },
  { name: "Gages Lake", slug: "gages-lake", zip: "60030" },
  { name: "Old Mill Creek", slug: "old-mill-creek", zip: "60083" },
  { name: "Park City", slug: "park-city", zip: "60085" },
  { name: "Round Lake Beach", slug: "round-lake-beach", zip: "60073" },
  { name: "Hawthorn Woods", slug: "hawthorn-woods", zip: "60047" }
];

const CityServicePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();

  // Agar URL "/roofing-waukegan" hai, toh ye "waukegan" nikal lega
  const cleanSlug = citySlug ? citySlug.replace('roofing-', '') : '';
  const city = localCities.find(c => c.slug === cleanSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  if (!city) {
    return <Navigate to="/areas-we-serve" replace />;
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="bg-[#1e3a8a] text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase">Roofing in {city.name}, IL</h1>
        <p className="text-xl mt-4">WAUKEGAN Roofing Services | Since 2016</p>
      </div>
      <div className="max-w-4xl mx-auto py-12 px-6 bg-white shadow-lg mt-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800">Expert Services in {city.name}</h2>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          Zuniga Roofing Inc (WAUKEGAN Roofing Services) is your local expert in <strong>{city.name}</strong>. 
          Eduardo Zuniga established this business in 2016 to serve Illinois, Wisconsin, and Indiana.
        </p>
        <div className="mt-8 p-6 bg-blue-50 border-l-4 border-orange-500">
          <p className="font-bold text-[#1e3a8a]">Local HQ Office:</p>
          <p>39089 N Green Bay Rd, Beach Park, IL 60087</p>
          <p className="text-2xl font-black mt-2 text-[#1e3a8a]">Call: (877) 719-3793</p>
        </div>
      </div>
    </div>
  );
};

export default CityServicePage;
