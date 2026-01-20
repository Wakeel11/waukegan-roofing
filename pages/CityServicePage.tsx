import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Phone, MapPin, ShieldCheck, Star, CheckCircle2, Award, HardHat } from 'lucide-react';

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
    <div className="pt-20 min-h-screen bg-white font-sans text-brand-slate">
      
      {/* 1. IMPACTFUL HERO SECTION */}
      <section className="bg-brand-blue text-white py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="#f97316" className="text-brand-accent" />)}
            <span className="ml-2 font-bold uppercase tracking-widest text-sm">Top Rated in {city.name}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-tight tracking-tighter">
            Roofing {city.name}, IL
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed font-medium">
            Professional Roof Replacement & Repairs. Serving the {city.name} community with over a decade of local expertise.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="tel:8777193793" className="flex items-center justify-center gap-3 bg-brand-accent hover:bg-orange-600 text-white text-2xl font-black px-8 py-4 rounded-xl shadow-xl transition-all">
              <Phone size={28} fill="currentColor" /> (877) 719-3793
            </a>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT & LEADSMART SIDEBAR */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2">
            {/* EEAT Introduction */}
            <h2 className="text-4xl font-black mb-8 border-l-8 border-brand-accent pl-6">
              Expert Roofing Services You Can Trust
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Since 2016, <strong>WAUKEGAN Roofing Services</strong> has been the gold standard for roofing in <strong>{city.name}, IL ({city.zip})</strong>. 
              Founded by Eduardo Zuniga, our company was built on the values of honesty, quality, and local accountability. 
              We aren't just contractors; we are your neighbors serving the entire Illinois, Wisconsin, and Indiana region.
            </p>

            {/* Bulleted EEAT Section */}
            <div className="bg-gray-50 p-8 rounded-3xl mb-12 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-brand-accent" /> Why Homeowners in {city.name} Choose Us
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "10+ Years of Field Experience",
                  "Licensed, Bonded & Fully Insured",
                  "Storm Damage Specialists",
                  "Emergency Tarping & Repairs",
                  "Knowledge of local IL Building Codes",
                  "Premium Material Warranties"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 font-semibold">
                    <CheckCircle2 className="text-brand-blue" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Bullet Points */}
            <h3 className="text-3xl font-bold mb-6">Local Roofing Solutions</h3>
            <div className="space-y-4 mb-12">
              <div className="p-6 border border-gray-200 rounded-2xl hover:bg-blue-50 transition-colors">
                <h4 className="text-xl font-bold flex items-center gap-3 mb-2">
                  <HardHat className="text-brand-blue" /> Residential Roof Replacement
                </h4>
                <p className="text-gray-600">From architectural shingles to modern flat roofs, we provide durable installations designed to withstand the harsh Midwestern weather.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-2xl hover:bg-blue-50 transition-colors">
                <h4 className="text-xl font-bold flex items-center gap-3 mb-2">
                  <ShieldCheck className="text-brand-blue" /> Gutter & Downspout Systems
                </h4>
                <p className="text-gray-600">Custom seamless aluminum gutters that protect your {city.name} home's foundation from water damage.</p>
              </div>
            </div>

            {/* HQ Trust Section */}
            <div className="bg-brand-blue text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Visit Our Local Headquarters</h3>
                <p className="text-lg opacity-90 mb-6">
                  Serving Illinois, Wisconsin, and Indiana with pride since 2016. Our central office ensures fast, local response times for your roofing needs.
                </p>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <MapPin className="text-brand-accent" size={32} />
                    </div>
                    <div>
                      <p className="font-bold text-xl">39089 N Green Bay Rd</p>
                      <p className="opacity-80 font-medium">Beach Park, IL 60087</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <Clock className="text-brand-accent" size={32} />
                    </div>
                    <div>
                      <p className="font-bold text-xl">Fast Local Service</p>
                      <p className="opacity-80 font-medium">IL, WI, & IN Regions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR: LEADSMART INTEGRATION */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              
              {/* Call-Back CTA */}
              <div className="bg-brand-accent p-8 rounded-3xl text-white text-center shadow-xl">
                <p className="font-bold uppercase tracking-widest text-xs mb-2 opacity-90">Need Help Instantly?</p>
                <a href="tel:8777193793" className="text-3xl font-black block hover:scale-105 transition-transform">
                  (877) 719-3793
                </a>
              </div>

              {/* LEADSMART IFRAME CONTAINER */}
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden min-h-[650px]">
                <div className="bg-brand-slate p-5 text-center text-white">
                   <h3 className="font-black text-lg uppercase tracking-tight">Free Online Quote</h3>
                   <p className="text-xs opacity-70">Answer a few questions to get started</p>
                </div>
                
                {/* Provided LeadSmart Iframe Code */}
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

      {/* 3. SEO LOCAL GRID */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-10 underline decoration-brand-accent underline-offset-8">
            Serving Neighbors Near {city.name}
          </h4>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {localCities.filter(c => c.slug !== cleanSlug).slice(0, 15).map(c => (
              <Link key={c.slug} to={`/roofing-${c.slug}`} className="text-brand-blue font-black hover:text-brand-accent transition-colors text-sm uppercase">
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
