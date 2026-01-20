import React, { useEffect } from 'react';
import { Phone, CheckCircle2, Award, ShieldCheck, MapPin, Clock } from 'lucide-react';

const serviceData: any = {
  installation: { title: "New Roof Installation", desc: "Expert new roof installations for residential homes using premium architectural shingles. Built to last and withstand Illinois weather." },
  repair: { title: "Roof Repair & Leak Fix", desc: "Fast response for leaks, storm damage, and missing shingles. We restore your roof's integrity quickly to prevent further damage." },
  inspection: { title: "Professional Roof Inspection", desc: "Certified 21-point inspections to identify hidden damage, storm impact, and provide a clear health report of your roof." },
  cleaning: { title: "Roof Cleaning & Maintenance", desc: "Safe removal of moss, algae, and debris to restore your roof's appearance and protect your shingle warranties." },
  replacement: { title: "Full Roof Replacement", desc: "Efficient tear-off and replacement services with high-quality materials and long-term warranties for total peace of mind." }
};

const RoofService = ({ serviceType }: { serviceType: string }) => {
  const data = serviceData[serviceType];

  useEffect(() => { window.scrollTo(0, 0); }, [serviceType]);

  if (!data) return <div className="pt-32 text-center font-bold">Service Not Found</div>;

  return (
    <div className="pt-20 min-h-screen bg-white font-sans text-slate-900">
      <section className="bg-[#1e3a8a] text-white py-16 md:py-24 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-7xl font-black uppercase mb-6 tracking-tighter">{data.title}</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto">
             WAUKEGAN Roofing Services: Trusted Local Expertise Since 2016.
          </p>
          <a href="tel:8777193793" className="inline-flex items-center gap-4 bg-[#f97316] hover:bg-orange-600 text-white text-2xl md:text-4xl font-black px-10 py-5 rounded-xl shadow-2xl transition-all scale-100 hover:scale-105">
            <Phone size={36} fill="currentColor" /> CALL NOW: (877) 719-3793
          </a>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black mb-8 border-l-8 border-[#f97316] pl-6 text-[#1e3a8a]">Expert {data.title}</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">{data.desc}</p>
            <div className="bg-gray-50 p-10 rounded-3xl mb-12 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Award className="text-[#f97316]" /> Why Work With Us?</h3>
              <ul className="space-y-4 font-bold text-slate-700">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#1e3a8a]" /> Licensed, Bonded & Fully Insured</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#1e3a8a]" /> Established in 2016</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#1e3a8a]" /> Beach Park, IL Headquarters</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 min-h-[650px]">
                <div className="bg-slate-800 p-5 text-center text-white font-bold uppercase tracking-widest text-sm">Free Quote Request</div>
                <iframe 
                  src="//leads.leadsmartinc.com/?api_key=77030701545247f5e77400a12de4d6965400710c&affiliate_source=modazawra1&funnel=3&category=15&step=1&buttons=btn-success" 
                  width="100%" height="600" frameBorder="0" title="Quote Form"
                ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoofService;
