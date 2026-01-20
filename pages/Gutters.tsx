import React, { useEffect } from 'react';
import { Phone, ShieldCheck, Droplets, Wrench, CheckCircle2, MapPin, Award } from 'lucide-react';

const Gutters = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-20 min-h-screen bg-white font-sans text-slate-900">
      {/* Hero Section */}
      <section className="bg-[#1e3a8a] text-white py-16 md:py-24 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-7xl font-black uppercase mb-6 tracking-tight text-[#f97316]">Gutter Systems</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-medium">
            Seamless Aluminum Gutters & Precision Drainage Solutions for Your Home.
          </p>
        </div>
      </section>

      {/* Main Layout: Content (Left) + Form (Right Sidebar) */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Gutter Content */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black mb-12 border-l-8 border-[#f97316] pl-6 text-[#1e3a8a]">
              Protect Your Foundation
            </h2>

            <div className="space-y-16">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-50 p-4 rounded-2xl text-[#1e3a8a]"><ShieldCheck size={40} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Seamless Installation</h3>
                  <p className="text-gray-600 leading-relaxed">We custom-measure and cut aluminum gutters on-site to provide a leak-free, seamless fit for any residential or commercial building.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-50 p-4 rounded-2xl text-[#1e3a8a]"><Droplets size={40} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Gutter Cleaning</h3>
                  <p className="text-gray-600 leading-relaxed">Don't risk a fall. Our professional team removes debris and clears downspouts to ensure your drainage system works perfectly during heavy IL/WI storms.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-50 p-4 rounded-2xl text-[#1e3a8a]"><Wrench size={40} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Repair & Realignment</h3>
                  <p className="text-gray-600 leading-relaxed">Are your gutters sagging or pulling away? We repair brackets, seal joints, and realign systems to restore proper water flow.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-50 p-4 rounded-2xl text-[#1e3a8a]"><CheckCircle2 size={40} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Leaf Guards & Protection</h3>
                  <p className="text-gray-600 leading-relaxed">Reduce maintenance with high-quality leaf guards. Our systems prevent leaves and birds from nesting in your gutters.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-10 bg-gray-50 rounded-3xl border border-gray-100 flex items-center gap-6">
              <Award size={64} className="text-[#f97316] hidden md:block" />
              <div>
                <h4 className="text-xl font-bold text-[#1e3a8a]">Waukegan Roofing Services Expertise</h4>
                <p className="text-gray-600">Serving the Tri-State region since 2016 with unmatched local accountability.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Lead Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden min-h-[650px]">
                <div className="bg-slate-800 p-6 text-center text-white">
                   <h3 className="font-black text-xl uppercase">Gutter Quote</h3>
                   <p className="text-xs opacity-70">Stop water damage today</p>
                </div>
                <iframe 
                  src="//leads.leadsmartinc.com/?api_key=77030701545247f5e77400a12de4d6965400710c&affiliate_source=modazawra1&funnel=3&category=15&step=1&buttons=btn-success" 
                  width="100%" height="600" frameBorder="0" title="Gutter Quote"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Gutters;
