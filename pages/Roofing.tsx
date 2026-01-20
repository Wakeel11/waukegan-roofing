import React, { useEffect } from 'react';
import { Phone, CheckCircle2, MapPin, Award, ShieldCheck } from 'lucide-react';

const serviceData: any = {
  installation: { title: "New Roof Installation", desc: "Expert new installations for residential and commercial properties using premium architectural shingles." },
  repair: { title: "Roof Repair & Leak Fix", desc: "Fast response for leaks, storm damage, and missing shingles. We restore your roof's integrity quickly." },
  inspection: { title: "Professional Roof Inspection", desc: "Certified 21-point inspections to identify hidden damage and extend your roof's lifespan." },
  cleaning: { title: "Roof Cleaning & Maintenance", desc: "Safe removal of moss, algae, and debris to restore your roof's appearance and prevent shingle rot." },
  replacement: { title: "Full Roof Replacement", desc: "Efficient tear-off and replacement services with premium materials and long-term warranties." }
};

const RoofingServicePage = ({ serviceType }: { serviceType: string }) => {
  const data = serviceData[serviceType];

  useEffect(() => { window.scrollTo(0, 0); }, [serviceType]);

  return (
    <div className="pt-20 min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO SECTION with CTA */}
      <section className="bg-[#1e3a8a] text-white py-16 md:py-24 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-6">{data.title}</h1>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Waukegan Roofing Services: Trusted Quality Since 2016.</p>
          
          {/* HEAVY CALL CTA */}
          <a href="tel:8777193793" className="inline-flex items-center gap-4 bg-[#f97316] hover:bg-orange-600 text-white text-2xl md:text-3xl font-black px-10 py-5 rounded-xl shadow-2xl transition-all">
            <Phone size={32} fill="currentColor" /> CALL: (877) 719-3793
          </a>
        </div>
      </section>

      {/* 2. MAIN LAYOUT (Content Left, Form Right) */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black mb-8 border-l-8 border-[#f97316] pl-6 text-[#1e3a8a]">
              Expert {data.title} in IL, WI & IN
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">{data.desc}</p>
            
            <div className="bg-gray-50 p-8 rounded-3xl mb-12 border-l-8 border-[#1e3a8a]">
              <h3 className="text-2xl font-bold mb-4">Why Waukegan Roofing Services?</h3>
              <ul className="space-y-4 font-bold text-slate-700">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#f97316]" /> Licensed, Bonded & Insured</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#f97316]" /> 10+ Years of Local Experience</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#f97316]" /> Professional Grade Materials</li>
              </ul>
            </div>

            {/* SECONDARY CALL CTA */}
            <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl text-center shadow-xl">
               <h3 className="text-2xl font-bold mb-4">Need an Emergency {data.title}?</h3>
               <p className="mb-6 opacity-80 text-lg">Our team is ready to respond. Call our Beach Park HQ now.</p>
               <a href="tel:8777193793" className="text-3xl font-black text-[#f97316] hover:text-white transition-colors underline underline-offset-8">
                 (877) 719-3793
               </a>
            </div>
          </div>

          {/* SIDEBAR: STICKY LEADSMART FORM */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-slate-800 p-5 text-center text-white font-bold uppercase tracking-widest">Get Your Free Quote</div>
                <iframe 
                  src="//leads.leadsmartinc.com/?api_key=77030701545247f5e77400a12de4d6965400710c&affiliate_source=modazawra1&funnel=3&category=15&step=1&buttons=btn-success" 
                  width="100%" height="600" frameBorder="0" title="Service Quote Form"
                ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default RoofingServicePage;
