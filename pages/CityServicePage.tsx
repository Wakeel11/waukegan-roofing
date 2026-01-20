import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm'; // Check karein ke ye file mojud hai
import { Phone, MapPin, ShieldCheck, CheckCircle } from 'lucide-react';

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
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tight">
            Roofing in {city.name}, IL
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-3xl mx-auto">
            Trusted Local Roofing & Gutter Experts Serving {city.name} Since 2016
          </p>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-brand-slate mb-6">Expert Roofing Solutions for {city.name} Homeowners</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Need a professional roofer in <strong>{city.name}, IL ({city.zip})</strong>? 
              Zuniga Roofing Inc (WAUKEGAN Roofing Services) is your local choice for quality and reliability. 
              Eduardo Zuniga began this business in 2016 to ensure that every home in Lake County gets the protection it deserves.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="text-brand-accent" />
                <span className="font-bold">Residential Roofing</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="text-brand-accent" />
                <span className="font-bold">Seamless Gutters</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="text-brand-accent" />
                <span className="font-bold">Storm Damage Repair</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="text-brand-accent" />
                <span className="font-bold">Local Permit Experts</span>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border-l-8 border-brand-accent mt-10">
              <h3 className="text-2xl font-bold text-brand-blue mb-4 flex items-center gap-2">
                <MapPin /> Our Local Headquarters
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Visit us or call for a local inspection. We serve Illinois, Wisconsin, and Indiana from our central Beach Park office.
              </p>
              <p className="font-bold text-gray-900">39089 N Green Bay Rd, Beach Park, IL 60087</p>
              <a href="tel:8777193793" className="text-3xl font-black text-brand-blue block mt-4 hover:text-brand-accent transition-colors">
                📞 (877) 719-3793
              </a>
            </div>
          </div>

          {/* Right Side: Quote Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-2xl sticky top-28 border-t-4 border-brand-accent">
              <h3 className="text-2xl font-bold text-brand-slate mb-2">Get a Free Estimate</h3>
              <p className="text-sm text-gray-500 mb-6">Serving the {city.name} community with pride.</p>
              <ContactForm cityName={city.name} />
            </div>
          </div>

        </div>
      </section>

      {/* Footer Area Links */}
      <section className="bg-gray-100 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-8">Other Local Service Areas</h4>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {localCities.filter(c => c.slug !== cleanSlug).slice(0, 10).map(c => (
              <Link key={c.slug} to={`/roofing-${c.slug}`} className="text-brand-blue font-bold hover:text-brand-accent hover:underline text-sm">
                Roofing in {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityServicePage;
