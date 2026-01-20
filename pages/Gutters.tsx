import React from 'react';
import { Phone, ShieldCheck, MapPin, CheckCircle2, Droplets } from 'lucide-react';

const Gutters = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="bg-[#1e3a8a] text-white py-20 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tight text-[#f97316]">Gutter Systems</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
            Custom Seamless Aluminum Gutters & Expert Repairs to Protect Your Home's Foundation.
          </p>
          <a href="tel:8777193793" className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-orange-600 text-white text-2xl font-black px-10 py-5 rounded-xl shadow-xl transition-all">
            <Phone size={32} fill="currentColor" /> (877) 719-3793
          </a>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8 border-l-8 border-[#f97316] pl-6">Gutter Installation & Repair</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Proper water drainage is essential for your home’s longevity. Our seamless aluminum gutters are custom-measured on-site to ensure a perfect fit for your property in the IL, WI, and IN Tri-State area.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl">
                <CheckCircle2 className="text-[#f97316] w-8 h-8 flex-shrink-0" />
                <p className="font-bold text-lg text-slate-800">Seamless Aluminum Gutter Fitting</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl">
                <Droplets className="text-[#f97316] w-8 h-8 flex-shrink-0" />
                <p className="font-bold text-lg text-slate-800">Professional Gutter Cleaning & Clog Removal</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
             <div className="bg-slate-800 p-6 text-center text-white font-bold uppercase">Request Gutter Quote</div>
             <iframe 
                src="//leads.leadsmartinc.com/?api_key=77030701545247f5e77400a12de4d6965400710c&affiliate_source=modazawra1&funnel=3&category=15&step=1&buttons=btn-success" 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="LeadSmart Quote Form"
              ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gutters;
