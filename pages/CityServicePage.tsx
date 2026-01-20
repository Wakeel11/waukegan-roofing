import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
// ALL USED ICONS MUST BE HERE
import { Phone, MapPin, ShieldCheck, Star, CheckCircle2, Award, HardHat, Clock, Search, Droplets, Hammer, Wrench } from 'lucide-react';

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
  const { slug } = useParams<{ slug: string }>();
  
  // Logic: "roofing-waukegan" mein se "waukegan" nikalna
  const cleanSlug = slug?.replace('roofing-', '');
  const city = localCities.find(c => c.slug === cleanSlug || c.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!city) return <Navigate to="/areas-we-serve" replace />;

  return (
    <div className="pt-20 min-h-screen bg-white font-sans text-slate-900">
      <section className="bg-[#1e3a8a] text-white py-16 px-4 text-center">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={18} fill="#f97316" className="text-[#f97316]" />)}
            <span className="font-bold uppercase tracking-widest text-xs text-gray-200">Top Rated Experts in {city.name}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase mb-6 tracking-tighter">Roofing {city.name}, IL</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto font-medium">
            WAUKEGAN Roofing Services: Serving the {city.name} community with pride since 2016.
          </p>
          <a href="tel:8777193793" className="inline-flex items-center gap-4 bg-[#f97316] hover:bg-orange-600 text-white text-2xl md:text-3xl font-black px-10 py-5 rounded-xl shadow-xl transition-all">
            <Phone size={32} fill="currentColor" /> (877) 719-3793
          </a>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black mb-8 border-l-8 border-[#f97316] pl-6 text-[#1e3a8a]">
              Expert Solutions for {city.name}
            </h2>
            
            <div className="space-y-12 mb-16">
               <div className="flex gap-6">
                 <div className="bg-blue-50 p-4 rounded-xl text-[#1e3a8a] h-fit"><Wrench size={32} /></div>
                 <div>
                    <h3 className="text-xl font-bold mb-2">Local Roof Repair</h3>
                    <p className="text-gray-600">Fast local response for storm damage and leaks in {city.name}.</p>
                 </div>
               </div>
               <div className="flex gap-6">
                 <div className="bg-blue-50 p-4 rounded-xl text-[#1e3a8a] h-fit"><HardHat size={32} /></div>
                 <div>
                    <h3 className="text-xl font-bold mb-2">New Roof Installation</h3>
                    <p className="text-gray-600">Premium architectural shingle installations tailored for Illinois weather.</p>
                 </div>
               </div>
            </div>

            <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
               <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#f97316]"><MapPin /> Beach Park HQ</h3>
               <p className="mb-4 font-medium opacity-90">Serving Illinois, Wisconsin, and Indiana from our central local office.</p>
               <p className="text-xl font-bold">39089 N Green Bay Rd, Beach Park, IL 60087</p>
               <p className="mt-6 text-sm font-black uppercase tracking-widest text-[#f97316]">Established 2016</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 min-h-[650px]">
                <div className="bg-slate-800 p-5 text-center text-white font-bold uppercase tracking-widest text-xs">Free {city.name} Quote</div>
                <iframe 
                  src="//leads.leadsmartinc.com/?api_key=77030701545247f5e77400a12de4d6965400710c&affiliate_source=modazawra1&funnel=3&category=15&step=1&buttons=btn-success" 
                  width="100%" height="600" frameBorder="0" title="Quote Form"
                ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
