import React, { useEffect } from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Star, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#1e3a8a] text-white py-16 md:py-24 px-4 text-center">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="#f97316" className="text-[#f97316]" />)}
            <span className="font-bold uppercase tracking-widest text-sm text-gray-300">Waukegan's Most Trusted Roofers</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase mb-6 tracking-tight leading-none">
            Contact WAUKEGAN <br className="hidden md:block" /> Roofing Services
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto font-medium">
            Providing Professional Roofing Solutions in IL, WI, and IN Since 2016.
          </p>
          <a href="tel:8777193793" className="inline-flex items-center gap-4 bg-[#f97316] hover:bg-orange-600 text-white text-2xl md:text-3xl font-black px-10 py-5 rounded-xl shadow-2xl transition-all transform hover:-translate-y-1">
            <Phone size={32} fill="currentColor" /> (877) 719-3793
          </a>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Business Info & Local Map */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-4xl font-black mb-8 border-l-8 border-[#f97316] pl-6 text-[#1e3a8a] uppercase tracking-tighter">
                Reliable Service in Waukegan
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                Located right in the heart of <strong>Waukegan, IL</strong>, we are just a short drive from <strong>Clearview Park</strong> and the <strong>Waukegan Public Library</strong>. 
                Since 2016, Eduardo Zuniga and his team have been dedicated to providing top-quality roofing to our neighbors in Lake County and beyond.
              </p>
            </div>

            {/* Info Cards with New Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <Navigation className="text-[#f97316] mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2 uppercase text-[#1e3a8a]">Our Office</h3>
                <p className="text-slate-700 font-bold uppercase">1008 Oak Crest St</p>
                <p className="text-slate-700 font-medium uppercase">Waukegan, IL 60085</p>
                <p className="text-sm text-slate-500 mt-2 italic font-semibold">📍 Near North Elementary School</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <Clock className="text-[#f97316] mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2 uppercase text-[#1e3a8a]">Business Hours</h3>
                <p className="text-slate-700 font-bold uppercase">Mon - Sat: 8:00 AM - 6:00 PM</p>
                <p className="text-[#f97316] font-black uppercase text-sm mt-1">24/7 Emergency Storm Service</p>
              </div>
            </div>

            {/* YOUR GOOGLE MAP EMBED CODE - UPDATED TO 100% WIDTH FOR DESIGN */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1474.0125065096438!2d-87.8454225505299!3d42.363306201469065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fed454ce3142b%3A0xc872c15b85123a4!2s1008%20Oak%20Crest%20St%2C%20Waukegan%2C%20IL%2060085%2C%20USA!5e0!3m2!1sen!2s!4v1768947341088!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="WAUKEGAN Roofing Services Office Location"
              ></iframe>
            </div>

            {/* Trust Section */}
            <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 shadow-xl">
               <ShieldCheck className="text-[#f97316] shrink-0" size={64} />
               <div>
                 <h4 className="text-2xl font-black uppercase tracking-tight mb-2">Expertise You Can Trust Since 2016</h4>
                 <p className="opacity-90 font-medium leading-relaxed">
                   WAUKEGAN Roofing Services is fully licensed, bonded, and insured. We take pride in protecting our community's homes with the highest standard of craftsmanship in the Tri-State area.
                 </p>
               </div>
            </div>
          </div>

          {/* Right Column: LeadSmart Form (Sticky Sidebar) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden min-h-[850px]">
              <div className="bg-slate-900 p-6 text-center text-white">
                 <h3 className="font-black text-xl uppercase tracking-tighter">Request A Free Quote</h3>
                 <p className="text-xs opacity-70 uppercase tracking-widest font-bold mt-1">Response Within 24 Hours</p>
              </div>
              
              <iframe 
                src="https://leads.leadsmartinc.com/?api_key=77030701545247f5e77400a12de4d6965400710c&affiliate_source=modazawra1&funnel=3&category=15&step=1&buttons=btn-success" 
                width="100%" 
                height="750" 
                frameBorder="0"
                title="Lead Generation Form"
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
