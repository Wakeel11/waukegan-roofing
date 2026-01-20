import React, { useEffect } from 'react';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white font-sans">
      {/* 1. Hero Section */}
      <section className="bg-[#1e3a8a] text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tight">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">
            WAUKEGAN Roofing Services: Trusted Expertise Since 2016.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* 2. Left Side: Business Details */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Get A Free Quote</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl text-[#1e3a8a]"><Phone size={24} /></div>
                    <div>
                      <h3 className="font-bold text-lg">Call or Text</h3>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-black text-[#1e3a8a] hover:text-[#f97316] transition-colors">
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl text-[#1e3a8a]"><MapPin size={24} /></div>
                    <div>
                      <h3 className="font-bold text-lg">Our Headquarters</h3>
                      <p className="font-bold text-slate-800 uppercase tracking-tight">
                        39089 N Green Bay Rd, Beach Park, IL 60087
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl text-[#1e3a8a]"><Clock size={24} /></div>
                    <div>
                      <h3 className="font-bold text-lg">Operating Hours</h3>
                      <p className="text-gray-700 font-bold uppercase text-sm">Mon - Sat: 8:00 AM - 6:00 PM</p>
                      <p className="text-[#f97316] font-black uppercase text-sm tracking-widest mt-1 italic">24/7 Emergency Storm Response</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Trust Box */}
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 border-l-8 border-[#f97316]">
                <h4 className="text-xl font-black text-slate-900 mb-3 uppercase flex items-center gap-2">
                  <ShieldCheck className="text-[#f97316]" /> WAUKEGAN Roofing Services
                </h4>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Proudly serving Illinois, Wisconsin, and Indiana since 2016. 
                  Led by Eduardo Zuniga, we are fully licensed, bonded, and insured.
                </p>
              </div>

              {/* 3. FIXED GOOGLE MAP */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-72">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.77810336214!2d-87.85655552341492!3d42.422055671188185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f9379201f37e1%3A0x6b825227d86f78a7!2s39089%20N%20Green%20Bay%20Rd%2C%20Beach%20Park%2C%20IL%2060087!5e0!3m2!1sen!2sus!4v1705800000000!5m2!1sen!2sus"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Waukegan Roofing Office Location"
                ></iframe>
              </div>
            </div>

            {/* 4. Right Side: LeadSmart Form */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col" style={{ minHeight: '850px' }}>
              <div className="bg-slate-900 p-6 text-center text-white">
                <h3 className="text-xl font-black uppercase tracking-widest">Free Estimate Request</h3>
                <p className="text-xs font-bold opacity-70 uppercase mt-1">Reliable Local Response Since 2016</p>
              </div>
              
              <iframe 
                src="https://leads.leadsmartinc.com/?api_key=77030701545247f5e77400a12de4d6965400710c&affiliate_source=modazawra1&funnel=3&category=15&step=1&buttons=btn-success" 
                width="100%" 
                height="100%" 
                className="flex-grow min-h-[750px]"
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
