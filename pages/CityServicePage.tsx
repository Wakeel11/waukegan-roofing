import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Phone, MapPin, ShieldCheck, Clock, Award } from 'lucide-react';

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
  const cleanSlug = citySlug ? citySlug.replace('roofing-', '') : '';
  const city = localCities.find(c => c.slug === cleanSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  if (!city) {
    return <Navigate to="/areas-we-serve" replace />;
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* 1. HERO SECTION with Immediate Call CTA */}
      <section className="bg-brand-blue text-white py-16 md:py-24 px-4">
        <div className="container mx-auto text-center">
          <span className="bg-brand-accent px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 inline-block">
            Top Rated Local Roofer
          </span>
          <h1 className="text-4xl md:text-7xl font-black uppercase mb-6 leading-tight">
            Roofing in {city.name}, IL
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
            Professional Roofing & Gutter Experts Serving {city.name} Since 2016.
          </p>
          
          {/* Main Hero Call Button */}
          <a href="tel:8777193793" className="inline-flex items-center gap-3 bg-brand-accent hover:bg-orange-600 text-white text-2xl md:text-3xl font-black px-10 py-5 rounded-xl shadow-2xl transform hover:scale-105 transition-all">
            <Phone size={32} fill="currentColor" />
            CALL NOW: (877) 719-3793
          </a>
        </div>
      </section>

      {/* 2. MAIN LAYOUT */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* CONTENT COLUMN */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-extrabold text-brand-slate mb-8">
              Why Choose WAUKEGAN Roofing Services?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Finding a reliable roofer in <strong>{city.name}, IL ({city.zip})</strong> shouldn't be stressful. 
              At <strong>WAUKEGAN Roofing Services</strong>, Eduardo Zuniga and his team bring 10 years of 
              local expertise to every project. Whether it's storm damage repair or a full roof replacement, we handle it with precision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <ShieldCheck className="text-brand-accent w-12 h-12" />
                <div>
                  <h4 className="font-bold text-lg">Licensed & Insured</h4>
                  <p className="text-gray-600 text-sm">Full protection for your {city.name} property.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <Award className="text-brand-accent w-12 h-12" />
                <div>
                  <h4 className="font-bold text-lg">10+ Years Experience</h4>
                  <p className="text-gray-600 text-sm">Serving IL, WI, and IN since 2016.</p>
                </div>
              </div>
            </div>

            {/* Local Trust Box */}
            <div className="bg-brand-blue text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <MapPin className="text-brand-accent" /> Local Headquarters
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Our central office is located in Beach Park, allowing us to respond quickly to any roofing emergency in {city.name}.
                </p>
                <p className="text-2xl font-bold">39089 N Green Bay Rd, Beach Park, IL 60087</p>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10">
                 <ShieldCheck size={200} />
              </div>
            </div>
          </div>

          {/* SIDEBAR: LeadSmart Form & Call CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              
              {/* Secondary Call CTA */}
              <div className="bg-brand-accent p-6 rounded-2xl text-white text-center shadow-lg">
                <p className="font-bold uppercase tracking-widest text-sm mb-2">Need a Quick Quote?</p>
                <a href="tel:8777193793" className="text-2xl font-black block hover:underline">
                  📞 (877) 719-3793
                </a>
              </div>

              {/* LeadSmart Form Container */}
              <div className="bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-100 p-4 text-center">
                   <h3 className="font-bold text-brand-slate uppercase tracking-tight">Free Estimate Request</h3>
                </div>
                
                {/* LEADSMART PLACEHOLDER - Paste your code here */}
                <div className="min-h-[400px] flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 m-4 rounded-xl">
                  <p className="text-gray-400 text-sm p-6 text-center">
                    [PASTE LEADSMART IFRAME OR SCRIPT HERE]
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. SEO FOOTER */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-8">Service Areas Near {city.name}</h4>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {localCities.filter(c => c.slug !== cleanSlug).slice(0, 12).map(c => (
              <Link key={c.slug} to={`/roofing-${c.slug}`} className="text-brand-blue font-bold hover:text-brand-accent transition-colors text-sm">
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
