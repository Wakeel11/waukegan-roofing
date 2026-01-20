import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

// Data ko isi file mein rakh rahe hain taake 'cities,tsx' wala error khatam ho jaye
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
  // App.tsx se ':citySlug' uthana
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // Data dhoondna
  const city = localCities.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  // Crash Protection: Agar city na mile toh blank screen ke bajaye redirect kare
  if (!city) {
    return <Navigate to="/areas-we-serve" replace />;
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50 font-sans">
      {/* City Hero */}
      <div className="bg-[#1e3a8a] text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase">
          Roofing Services in {city.name}, IL
        </h1>
        <p className="text-xl mt-4 opacity-90">
          WAUKEGAN Roofing Services: Your Local {city.name} Experts Since 2016
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto py-16 px-6">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">
            Reliable Roofing & Gutter Solutions for {city.name}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Zuniga Roofing Inc (WAUKEGAN Roofing Services) provides high-quality residential and commercial roofing 
            in <strong>{city.name}, IL ({city.zip})</strong>. Eduardo Zuniga started this business in 2016 
            to provide honest, local craftsmanship to homeowners across Illinois, Wisconsin, and Indiana.
          </p>
          
          <div className="mt-10 p-8 bg-blue-50 border-l-8 border-[#f97316] rounded-r-xl">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Local Office Information</h3>
            <p className="text-gray-700">Address: 39089 N Green Bay Rd, Beach Park, IL 60087</p>
            <p className="text-gray-700 mb-4">Established: Serving the community for 10 years</p>
            <a href="tel:8777193793" className="text-3xl font-black text-[#1e3a8a] hover:text-[#f97316] transition-colors">
              Call Now: (877) 719-3793
            </a>
          </div>
        </div>

        {/* Dynamic Footer Links */}
        <div className="mt-12 text-center">
          <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-6">Nearby Service Areas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {localCities.filter(c => c.slug !== citySlug).slice(0, 10).map(c => (
              <Link key={c.slug} to={`/roofing-${c.slug}`} className="text-[#1e3a8a] font-semibold hover:underline">
                Roofing in {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityServicePage;
