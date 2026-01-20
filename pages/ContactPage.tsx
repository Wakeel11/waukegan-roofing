import React, { useEffect } from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. HERO SECTION (Consistent with other pages) */}
      <section className="bg-[#1e3a8a] text-white py-16 md:py-24 px-4 text-center">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="#f97316" className="text-[#f97316]" />)}
            <span className="font-bold uppercase tracking-widest text-sm text-gray-200">Get A Free Professional Estimate</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase mb-6 tracking-tight">
            Contact WAUKEGAN Roofing
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto font-medium">
            Expert Roofing Solutions in Illinois, Wisconsin, and Indiana Since 2016.
          </p>
          <a href="tel:8777193793" className="inline-flex items-center gap-4 bg-[#f97316] hover:bg-orange-600 text-white text-2xl md:text-3xl font-black px-10 py-5 rounded-xl shadow-xl transition-all scale-100 hover:scale-105">
            <Phone size={32} fill="currentColor" /> CALL: (877) 719-3793
          </a>
        </div>
      </section>

      {/* 2. MAIN CONTENT & MAP SECTION */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Business Info & Map */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-4xl font-black mb-8 border-l-8 border-[#f97316] pl-6 text-[#1e3a8a] uppercase">
                Visit Our Headquarters
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Hum Beach Park se operate karte hain aur poore <strong>Waukegan</strong> area mein 5-star roofing services provide karte hain. 
                Eduardo Zuniga ki leadership mein hamari team 2016 se aap ka bharosa jeet rahi hai.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                <MapPin className="text-[#f97316] mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2 uppercase">Main Office</h3>
                <p className="text-gray-600 font-bold uppercase">39089 N Green Bay Rd</p>
                <p className="text-gray-600 font-bold uppercase">Beach Park, IL 60087</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                <Clock className="text-[#f97316] mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2 uppercase">Service Hours</h3>
                <p className="text-gray-600 font-bold">Mon - Sat: 8:00 AM - 6:00 PM</p>
                <p className="text-[#1e3a8a] font-black italic">24/7 Emergency Storm Help</p>
              </div>
            </div>

            {/* WAUKEGAN CITY MAP */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47262.24719266736!2d-87.89201103607066!3d42.36371295251648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fe930730d17e7%3A0xe54d86414732152!2sWaukegan%2C%20IL!5e0!3m2!1sen!2sus!4v1715856400000!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Waukegan IL Map"
              ></iframe>
            </div>

            {/* Trust Seal */}
            <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 shadow-xl">
               <ShieldCheck className="text-[#f97316] shrink-0" size={64} />
               <div>
                 <h4 className="text-2xl font-black uppercase tracking-tight mb-2">WAUKEGAN Roofing Services</h4>
                 <p className="opacity-90 font-medium leading-relaxed">
                   Hamari company licensed, bonded, aur insured hai. Hum ne 2016 se Illinois, Wisconsin, aur Indiana mein hazaron roofs repair aur install ki hain.
                 </p>
               </div>
            </div>
          </div>

          {/* Right Column: LeadSmart Form (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden min-h-[850px]">
              <div className="bg-slate-900 p-6 text-center text-white">
                 <h3 className="font-black text-xl uppercase tracking-tighter">Free Online Quote</h3>
                 <p className="text-xs opacity-70 uppercase tracking-widest font-bold mt-1 tracking-widest">Fast Local Response</p>
              </div>
              
              <iframe 
                src="https://leads.leadsmartinc.com/?api_key=77030701545247f5e77400a12de4d6965400710c&affiliate_source=modazawra1&funnel=3&category=15&step=1&buttons=btn-success" 
                width="100%" 
                height="750" 
                frameBorder="0"
                title="LeadSmart Quote Form"
                style={{ border: 'none', display: 'block' }}
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
