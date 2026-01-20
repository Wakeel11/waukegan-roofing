import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
// ALL ICONS IMPORTED TO PREVENT CRASH
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
  const { citySlug } = useParams<{ citySlug: string }>();
  // Safe data fetching
  const city = localCities.find(c => c.slug === citySlug);

  useEffect(() => { window.scrollTo(0, 0); }, [citySlug]);

  if (!city) return <Navigate to="/areas-we-serve" replace />;

  return (
    <div className="pt-20 min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="bg-[#1e3a8a] text-white py-20 px-4 text-center">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="#f97316" className="text-[#f97316]" />)}
            <span className="font-bold uppercase tracking-widest text-sm text-gray-200">5-Star Rated in {city.name}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tight">Roofing {city.name}, IL</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto font-medium leading-relaxed">
            WAUKEGAN Roofing Services: Your Premier Choice for Quality Craftsmanship in {city.name} Since 2016.
          </p>
          <a href="tel:8777193793" className="inline-flex items-center gap-4 bg-[#f97316] hover:bg-orange-600 text-white text-2xl md:text-3xl font-black px-10 py-5 rounded-xl shadow-2xl transition-all scale-100 hover:scale-105">
            <Phone size={32} fill="currentColor" /> (877) 719-3793
          </a>
        </div>
      </section>

      {/* 2. MAIN CONTENT & LEADSMART SIDEBAR */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black mb-12 border-l-8 border-[#f97316] pl-6 text-[#1e3a8a]">Expert Solutions for {city.name} Homes</h2>
            
            {/* EEAT & LOCAL SEO CONTENT */}
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-50 p-4 rounded-2xl text-[#1e3a8a]"><HardHat size={40} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Roof Replacement & Installation</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    WAUKEGAN Roofing Services (Zuniga Roofing Inc) provides expert new roof installations in <strong>{city.name}, IL ({city.zip})</strong>. Eduardo Zuniga and his crew use premium materials to ensure every home is protected against harsh Midwestern storms.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-50 p-4 rounded-2xl text-[#1e3a8a]"><Wrench size={40} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Emergency Roof Repair</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Leak detection, shingle replacement, and storm damage restoration. Since 2016, we have provided fast local response times for roofing emergencies across Illinois, Wisconsin, and Indiana.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-50 p-4 rounded-2xl text-[#1e3a8a]"><ShieldCheck size={40} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Seamless Gutter Systems</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Custom-fit aluminum gutters designed specifically for your {city.name} property to protect your foundation from water damage.
                  </p>
                </div>
              </div>
            </div>

            {/* Local HQ Box */}
            <div className="mt-16 bg-[#1e3a8a] text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
               <h3 className="text-3xl font-bold mb-4 flex items-center gap-2"><MapPin className="text-[#f97316]" /> Local Headquarters</h3>
               <p className="text-lg opacity-90 mb-6 font-medium">Serving the entire region from our central Beach Park office.</p>
               <p className="text-2xl font-bold">39089 N Green Bay Rd, Beach Park, IL 60087</p>
               <a href="tel:8777193793" className="text-3xl font-black text-[#f97316] block mt-6 hover:text-white transition-colors underline underline-offset-8">(877) 719-3793</a>
            </div>
          </div>

          {/* SIDEBAR: STICKY LEADSMART FORM */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden min-h-[650px]">
                <div className="bg-slate-800 p-5 text-center text-white font-bold uppercase tracking-widest text-sm">Get a Free {city.name} Quote</div>
                <iframe 
                  src="//leads.leadsmartinc.com/?api_key=77030701545247f5e77400a12de4d6965400710c&affiliate_source=modazawra1&funnel=3&category=15&step=1&buttons=btn-success" 
                  width="100%" height="600" frameBorder="0" title="Quote Form"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
