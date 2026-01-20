import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
// All icons must be imported here to prevent white screen crashes
import { Phone, MapPin, ShieldCheck, Star, CheckCircle2, Award, HardHat, Wrench, Clock } from 'lucide-react';

const localCities = [
  { name: "Waukegan", slug: "waukegan", zip: "60085" },
  { name: "Gurnee", slug: "gurnee", zip: "60031" },
  { name: "Zion", slug: "zion", zip: "60099" },
  { name: "Libertyville", slug: "libertyville", zip: "60048" },
  { name: "Vernon Hills", slug: "vernon-hills", zip: "60061" },
  { name: "North Chicago", slug: "north-chicago", zip: "60064" },
  { name: "Beach Park", slug: "beach-park", zip: "60087" },
  { name: "Mundelein", slug: "mundelein", zip: "60060" },
  { name: "Round Lake", slug: "round-lake", zip: "60073" },
  { name: "Antioch", slug: "antioch", zip: "60002" },
  { name: "Grayslake", slug: "grayslake", zip: "60030" },
  { name: "Lake Villa", slug: "lake-villa", zip: "60046" },
  { name: "Wadsworth", slug: "wadsworth", zip: "60083" },
  { name: "Winthrop Harbor", slug: "winthrop-harbor", zip: "60096" },
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
  // Extract citySlug from URL /#/roofing/:citySlug
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // Find the city data in our local array
  const city = localCities.find(c => c.slug === citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  // Fallback if city is not in the list
  if (!city) {
    return <Navigate to="/areas-we-serve" replace />;
  }

  return (
    <div className="pt-20 min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#1e3a8a] text-white py-16 md:py-24 px-4 text-center">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="#f97316" className="text-[#f97316]" />)}
            <span className="font-bold uppercase tracking-widest text-sm text-gray-200">Trusted Local Roofer in {city.name}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase mb-6 tracking-tight">
            Roofing in {city.name}, IL
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto font-medium">
            WAUKEGAN Roofing Services: Your 5-Star Experts Since 2016.
          </p>
          <a href="tel:8777193793" className="inline-flex items-center gap-4 bg-[#f97316] hover:bg-orange-600 text-white text-2xl md:text-3xl font-black px-10 py-5 rounded-xl shadow-xl transition-all scale-100 hover:scale-105">
            <Phone size={32} fill="currentColor" /> CALL: (877) 719-3793
          </a>
        </div>
      </section>

      {/* 2. MAIN CONTENT & SIDEBAR */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Side Content */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black mb-12 border-l-8 border-[#f97316] pl-6 text-[#1e3a8a]">
              Professional Roofing Solutions for {city.name}
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Are you looking for a reliable roofer in <strong>{city.name}, IL ({city.zip})</strong>? 
              At <strong>WAUKEGAN Roofing Services</strong>, Eduardo Zuniga and his experienced team have been 
              serving the local community since 2016. Whether you need a simple roof repair or a 
              complete replacement, we deliver quality you can trust.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                 <Wrench className="text-[#f97316] shrink-0" size={32} />
                 <div>
                   <h4 className="font-bold text-lg">Expert Repairs</h4>
                   <p className="text-sm text-gray-600">Fast local response for leaks and storm damage in {city.name}.</p>
                 </div>
               </div>
               <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                 <HardHat className="text-[#f97316] shrink-0" size={32} />
                 <div>
                   <h4 className="font-bold text-lg">New Installation</h4>
                   <p className="text-sm text-gray-600">Architectural shingles and premium roofing systems built for Illinois weather.</p>
                 </div>
               </div>
            </div>

            {/* Local Trust & EEAT Section */}
            <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
               <h3 className="text-3xl font-bold mb-6 flex items-center gap-2 text-[#f97316]">
                 <MapPin /> Our Local Headquarters
               </h3>
               <p className="text-lg opacity-90 mb-6 font-medium leading-relaxed">
                 We are headquartered in Beach Park and proudly serve customers across Illinois, Wisconsin, and Indiana.
               </p>
               <div className="space-y-4">
                 <p className="text-2xl font-bold">39089 N Green Bay Rd</p>
                 <p className="text-xl opacity-80 font-bold">Beach Park, IL 60087</p>
                 <div className="pt-4 flex items-center gap-2 text-[#f97316] font-black uppercase tracking-widest">
                   <Award size={24} /> Established in 2016
                 </div>
               </div>
            </div>
          </div>

          {/* Right Side Sidebar: LeadSmart Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden min-h-[650px]">
                <div className="bg-slate-800 p-5 text-center text-white">
                   <h3 className="font-black text-xl uppercase tracking-tighter">Get a Free Quote</h3>
                   <p className="text-xs opacity-70 uppercase tracking-widest font-bold">Fast {city.name} Response</p>
                </div>
                
                {/* LeadSmart Iframe Integration */}
                <iframe 
                  src="//leads.leadsmartinc.com/?api_key=77030701545247f5e77400a12de4d6965400710c&affiliate_source=modazawra1&funnel=3&category=15&step=1&buttons=btn-success" 
                  width="100%" 
                  height="600" 
                  frameBorder="0"
                  title="LeadSmart Quote Form"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. LOCAL SEO FOOTER LINKS */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-10">Other Local Service Areas</h4>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {localCities.filter(c => c.slug !== citySlug).slice(0, 15).map(c => (
              <Link key={c.slug} to={`/roofing/${c.slug}`} className="text-[#1e3a8a] font-bold hover:text-[#f97316] transition-colors text-sm uppercase">
                Roofing {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
