import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 px-4" id="contact-section">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* 1. Business Information Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                Get Your Free Estimate
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                WAUKEGAN Roofing Services: Trusted local roofing expertise in Illinois, Wisconsin, and Indiana since 2016.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#1e3a8a] p-3 rounded-xl text-white"><Phone size={24} /></div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Call Eduardo Zuniga's Team</p>
                  <a href="tel:8777193793" className="text-2xl font-black text-[#1e3a8a] hover:text-[#f97316] transition-colors">(877) 719-3793</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#1e3a8a] p-3 rounded-xl text-white"><MapPin size={24} /></div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Our Location</p>
                  <p className="font-bold text-slate-800 uppercase">39089 N Green Bay Rd, Beach Park, IL 60087</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#1e3a8a] p-3 rounded-xl text-white"><Clock size={24} /></div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Business Hours</p>
                  <p className="font-bold text-slate-800 uppercase tracking-tight text-sm">Mon - Sat: 8:00 AM - 6:00 PM | 24/7 Emergency Storm Help</p>
                </div>
              </div>
            </div>

            {/* Trust Seal */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm inline-flex items-center gap-4">
               <ShieldCheck className="text-[#f97316]" size={40} />
               <div>
                 <p className="font-black text-[#1e3a8a] uppercase leading-none">WAUKEGAN Roofing Services</p>
                 <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Licensed • Bonded • Insured</p>
               </div>
            </div>
          </div>

          {/* 2. LeadSmart Form Column */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col min-h-[700px]">
            <div className="bg-slate-900 p-5 text-center text-white">
              <p className="font-black uppercase tracking-widest text-sm">Free Professional Quote</p>
            </div>
            <iframe 
              src="https://leads.leadsmartinc.com/?api_key=77030701545247f5e77400a12de4d6965400710c&affiliate_source=modazawra1&funnel=3&category=15&step=1&buttons=btn-success" 
              width="100%" 
              height="700" 
              style={{ border: 'none', display: 'block' }}
              title="Lead Generation Form"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
