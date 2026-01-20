import React, { useEffect } from 'react';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* 1. Hero Header */}
      <section className="bg-brand-blue text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tight">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            WAUKEGAN Roofing Services: Your Trusted Local Experts Since 2016.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* 2. Left Side: Business Info */}
            <div>
              <h2 className="text-3xl font-black text-brand-slate mb-8 uppercase text-brand-slate">Get In Touch</h2>
              <div className="space-y-8">
                
                {/* Phone Info */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Call Us</h3>
                    <p className="text-gray-600">Speak with Eduardo Zuniga's professional team.</p>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-xl font-black text-brand-blue">
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Address Info - BEACH PARK HQ */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Our Headquarters</h3>
                    <p className="text-gray-600">Located at our central facility:</p>
                    <p className="font-bold text-brand-slate uppercase">
                      39089 N Green Bay Rd, Beach Park, IL 60087
                    </p>
                  </div>
                </div>

                {/* Hours Info */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Business Hours</h3>
                    <p className="text-gray-600 font-medium">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-brand-accent font-black italic">Emergency Storm Response: 24/7 Available</p>
                  </div>
                </div>
              </div>

              {/* Company Trust Section */}
              <div className="mt-12 p-8 bg-gray-50 rounded-3xl border-l-8 border-brand-accent shadow-sm">
                <h4 className="text-xl font-bold flex items-center gap-2 mb-2 text-brand-slate uppercase">
                  <ShieldCheck className="text-brand-accent" /> WAUKEGAN Roofing Services
                </h4>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Operating with integrity since 2016 across Illinois, Wisconsin, and Indiana. 
                  We are fully licensed, bonded, and insured to handle any roofing challenge.
                </p>
              </div>
            </div>

            {/* 3. Right Side: LeadSmart Form */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 min-h-[800px]">
              <div className="bg-brand-slate p-6 text-center text-white">
                <h3 className="text-xl font-black uppercase tracking-widest text-white">Request a Free Quote</h3>
              </div>
              
              <iframe 
                src="https://leads.leadsmartinc.com/?api_key=77030701545247f5e77400a12de4d6965400710c&affiliate_source=modazawra1&funnel=3&category=15&step=1&buttons=btn-success" 
                width="100%" 
                height="800" 
                frameBorder="0" 
                title="LeadSmart Contact Form"
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
