import React from 'react';
import { Phone, CheckCircle2, HardHat, Wrench, Search, Droplets, Hammer, Award, ShieldCheck } from 'lucide-react';

const Roofing = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#1e3a8a] text-white py-20 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tight">Roofing Services</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
            WAUKEGAN Roofing Services: Your Premier Choice for Quality Craftsmanship Across IL, WI, and IN Since 2016.
          </p>
          <a href="tel:8777193793" className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-orange-600 text-white text-2xl font-black px-10 py-5 rounded-xl shadow-xl transition-all">
            <Phone size={32} fill="currentColor" /> (877) 719-3793
          </a>
        </div>
      </section>

      {/* Services Detailed Sections */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* 1. New Installation */}
          <div className="p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all bg-white">
            <div className="text-[#1e3a8a] mb-6"><HardHat size={48} /></div>
            <h2 className="text-3xl font-bold mb-4 text-[#1e3a8a]">New Installation</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Expert installations for new residential and commercial builds. We use high-quality materials and ensure every roof is built to last and comply with all local building codes.
            </p>
            <ul className="space-y-2 text-slate-700 font-semibold">
              <li><CheckCircle2 className="inline mr-2 text-[#f97316]" size={20} /> Architectural Shingles</li>
              <li><CheckCircle2 className="inline mr-2 text-[#f97316]" size={20} /> Metal & Flat Roofs</li>
            </ul>
          </div>

          {/* 2. Roof Repair */}
          <div className="p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all bg-white">
            <div className="text-[#1e3a8a] mb-6"><Wrench size={48} /></div>
            <h2 className="text-3xl font-bold mb-4 text-[#1e3a8a]">Roof Repair</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              From minor leaks to major storm damage, WAUKEGAN Roofing Services provides fast and reliable repairs. We stop the damage before it spreads to the rest of your home.
            </p>
            <ul className="space-y-2 text-slate-700 font-semibold">
              <li><CheckCircle2 className="inline mr-2 text-[#f97316]" size={20} /> Leak Detection & Fix</li>
              <li><CheckCircle2 className="inline mr-2 text-[#f97316]" size={20} /> Storm Damage Restoration</li>
            </ul>
          </div>

          {/* 3. Inspection */}
          <div className="p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all bg-white">
            <div className="text-[#1e3a8a] mb-6"><Search size={48} /></div>
            <h2 className="text-3xl font-bold mb-4 text-[#1e3a8a]">Inspection</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Detailed 21-point roof inspections. Whether you're buying a home or maintaining your current one, our certified experts provide a transparent report on your roof’s health.
            </p>
          </div>

          {/* 4. Roof Cleaning */}
          <div className="p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all bg-white">
            <div className="text-[#1e3a8a] mb-6"><Droplets size={48} /></div>
            <h2 className="text-3xl font-bold mb-4 text-[#1e3a8a]">Roof Cleaning</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Safe moss and algae removal that restores your roof’s look and protects shingle integrity. Professional cleaning extends the lifespan of your roof significantly.
            </p>
          </div>

          {/* 5. Replacement */}
          <div className="p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all bg-white md:col-span-2">
            <div className="text-[#1e3a8a] mb-6"><Hammer size={48} /></div>
            <h2 className="text-3xl font-bold mb-4 text-[#1e3a8a]">Roof Replacement</h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-6 max-w-4xl">
              When it's time for a fresh start, our replacement services provide a full tear-off and a brand-new, high-efficiency system with premium warranties. Eduardo Zuniga ensures a clean and fast process for every homeowner.
            </p>
          </div>

        </div>
      </section>

      {/* Sidebar-style Lead Form (Full Width) */}
      <section className="bg-slate-50 py-20 px-4 border-t border-gray-100 text-center">
        <h3 className="text-3xl font-bold text-[#1e3a8a] mb-8 uppercase">Get a Professional Quote</h3>
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <iframe 
            src="//leads.leadsmartinc.com/?api_key=77030701545247f5e77400a12de4d6965400710c&affiliate_source=modazawra1&funnel=3&category=15&step=1&buttons=btn-success" 
            width="100%" 
            height="600" 
            frameBorder="0"
            title="LeadSmart Quote Form"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Roofing;
