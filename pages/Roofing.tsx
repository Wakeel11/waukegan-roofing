import React, { useEffect } from 'react';
import { Phone, CheckCircle2, HardHat, Wrench, Search, Droplets, Hammer, MapPin, Award } from 'lucide-react';

const Roofing = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-20 min-h-screen bg-white font-sans text-slate-900">
      {/* Hero Section */}
      <section className="bg-[#1e3a8a] text-white py-16 md:py-24 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-7xl font-black uppercase mb-6 tracking-tight">Roofing Services</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-medium">
            Waukegan Roofing Services: Professional Grade Installations & Repairs Since 2016.
          </p>
        </div>
      </section>

      {/* Main Layout: Content (Left) + Form (Right Sidebar) */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Service Details */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black mb-12 border-l-8 border-[#f97316] pl-6 text-[#1e3a8a]">
              Complete Roofing Solutions
            </h2>

            <div className="space-y-16">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-50 p-4 rounded-2xl text-[#1e3a8a]"><HardHat size={40} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">New Installation</h3>
                  <p className="text-gray-600 leading-relaxed">Modern roofing for new homes. We specialize in high-efficiency systems and premium architectural shingles that enhance curb appeal and protection.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-50 p-4 rounded-2xl text-[#1e3a8a]"><Wrench size={40} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Roof Repair</h3>
                  <p className="text-gray-600 leading-relaxed">Expert leak detection and storm damage restoration. We provide fast, durable fixes to stop water damage in its tracks.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-50 p-4 rounded-2xl text-[#1e3a8a]"><Search size={40} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Professional Inspection</h3>
                  <p className="text-gray-600 leading-relaxed">Our certified 21-point inspection identifies hidden issues before they become expensive disasters. Essential for new buyers and sellers.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-50 p-4 rounded-2xl text-[#1e3a8a]"><Hammer size={40} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Full Roof Replacement</h3>
                  <p className="text-gray-600 leading-relaxed">Full tear-off and installation services. Eduardo Zuniga ensures every project is completed with zero mess and maximum quality.</p>
                </div>
              </div>
            </div>

            {/* Local HQ Trust Box */}
            <div className="mt-16 bg-[#1e3a8a] text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
               <h3 className="text-3xl font-bold mb-4 flex items-center gap-2"><MapPin className="text-[#f97316]" /> Local Headquarters</h3>
               <p className="text-lg opacity-90 mb-6">Serving IL, WI, and IN. Visit us at 39089 N Green Bay Rd, Beach Park, IL 60087.</p>
               <a href="tel:8777193793" className="text-3xl font-black text-[#f97316]">(877) 719-3793</a>
            </div>
          </div>

          {/* Right Column: Sticky Lead Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden min-h-[650px]">
                <div className="bg-slate-800 p-6 text-center text-white">
                   <h3 className="font-black text-xl uppercase">Get Your Quote</h3>
                   <p className="text-xs opacity-70">Expert roofing service starts here</p>
                </div>
                <iframe 
                  src="//leads.leadsmartinc.com/?api_key=77030701545247f5e77400a12de4d6965400710c&affiliate_source=modazawra1&funnel=3&category=15&step=1&buttons=btn-success" 
                  width="100%" height="600" frameBorder="0" title="Roofing Quote"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Roofing;
