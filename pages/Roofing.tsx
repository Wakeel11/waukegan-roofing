import React from 'react';
import { ShieldCheck, Home, PenTool, CheckCircle2, ArrowRight, Search, Sparkles, Umbrella } from 'lucide-react';
import Contact from '../components/Contact';

const Roofing: React.FC = () => {
  return (
    <div className="pt-0 font-sans">
      {/* Page Hero */}
      <div className="relative bg-frontier-navy py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1920" 
             alt="Roofing Services Austin" 
             className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-frontier-navy via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Expert Roofing Services in Austin</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From emergency storm repairs to complete roof replacements, Frontier Roofing delivers craftsmanship you can trust. Serving 78701 and the greater Austin area.
          </p>
        </div>
      </div>

      {/* Intro & Value Prop */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-frontier-red font-bold tracking-widest uppercase mb-2">Comprehensive Care</h2>
            <h3 className="text-3xl font-heading font-bold text-frontier-navy mb-6">Complete Roofing Solutions for Texas Homes</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Your roof is your home's first line of defense against Texas heat, hail, and storms. We don't just install shingles; we engineer water-tight systems designed to withstand the unique climate of Austin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Replacement */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-frontier-navy w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6">
                <Home size={24} />
              </div>
              <h4 className="text-xl font-bold text-frontier-navy mb-3">Roof Replacement</h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                We specialize in GAF Asphalt Shingles, Standing Seam Metal, and Tile roofs. Our replacement process involves stripping the roof to the deck, inspecting for wood rot, and installing premium underlayment and flashing.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 font-medium">
                <li className="flex items-center"><CheckCircle2 size={14} className="text-frontier-red mr-2" /> GAF Certified Installation</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-frontier-red mr-2" /> 50-Year Material Warranty</li>
              </ul>
            </div>

            {/* Service 2: Repair */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-frontier-navy w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6">
                <Umbrella size={24} />
              </div>
              <h4 className="text-xl font-bold text-frontier-navy mb-3">Roof Repair</h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Small leaks can lead to big structural problems. We quickly identify and fix missing shingles, pipe boot leaks, chimney flashing issues, and storm damage to preserve your home's integrity.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 font-medium">
                <li className="flex items-center"><CheckCircle2 size={14} className="text-frontier-red mr-2" /> 24/7 Emergency Tarping</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-frontier-red mr-2" /> Leak Detection Pros</li>
              </ul>
            </div>

            {/* Service 3: Commercial */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-frontier-navy w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6">
                <PenTool size={24} />
              </div>
              <h4 className="text-xl font-bold text-frontier-navy mb-3">Commercial Flat Roofing</h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Energy-efficient solutions for Austin businesses. We install and maintain TPO, EPDM, and Modified Bitumen systems designed for low-slope durability and UV resistance.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 font-medium">
                <li className="flex items-center"><CheckCircle2 size={14} className="text-frontier-red mr-2" /> NDL Warranties Available</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-frontier-red mr-2" /> Minimal Business Disruption</li>
              </ul>
            </div>

            {/* Service 4: Inspection */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-frontier-navy w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6">
                <Search size={24} />
              </div>
              <h4 className="text-xl font-bold text-frontier-navy mb-3">Roof Inspections</h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Thinking of buying or selling? Or suspect storm damage? Our 21-point digital inspection provides a detailed health report of your roof, complete with photos and honest recommendations.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 font-medium">
                <li className="flex items-center"><CheckCircle2 size={14} className="text-frontier-red mr-2" /> Free for Homeowners</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-frontier-red mr-2" /> Insurance Claim Support</li>
              </ul>
            </div>

            {/* Service 5: Cleaning */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-frontier-navy w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6">
                <Sparkles size={24} />
              </div>
              <h4 className="text-xl font-bold text-frontier-navy mb-3">Roof Cleaning & Maintenance</h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Remove unsightly black streaks (algae), moss, and piled-up debris that trap moisture. Our soft-wash techniques extend the lifespan of your shingles and improve curb appeal.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 font-medium">
                <li className="flex items-center"><CheckCircle2 size={14} className="text-frontier-red mr-2" /> Safe Low-Pressure Wash</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-frontier-red mr-2" /> Gutter Debris Removal</li>
              </ul>
            </div>
            
            {/* Call to Action Card */}
            <div className="bg-frontier-navy rounded-xl p-8 text-white flex flex-col justify-center items-center text-center">
              <h4 className="text-2xl font-bold mb-4">Need a Quote?</h4>
              <p className="text-gray-300 mb-6 text-sm">
                Get a transparent, detailed estimate for your project within 24 hours.
              </p>
              <a 
                href="tel:7372311010"
                className="bg-frontier-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold transition-all w-full"
              >
                Call (737) 231-1010
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-frontier-gray">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-frontier-navy text-center mb-12">The Frontier Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
               <div className="relative text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-frontier-red shadow-md mx-auto mb-4 border-2 border-frontier-red z-10 relative">1</div>
                  <h4 className="font-bold text-lg mb-2">Inspection</h4>
                  <p className="text-sm text-gray-600">We perform a thorough digital assessment of your roof's condition.</p>
               </div>
               <div className="relative text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-frontier-red shadow-md mx-auto mb-4 border-2 border-frontier-red z-10 relative">2</div>
                  <h4 className="font-bold text-lg mb-2">Consultation</h4>
                  <p className="text-sm text-gray-600">We explain your options, materials, and help with insurance if needed.</p>
               </div>
               <div className="relative text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-frontier-red shadow-md mx-auto mb-4 border-2 border-frontier-red z-10 relative">3</div>
                  <h4 className="font-bold text-lg mb-2">Installation</h4>
                  <p className="text-sm text-gray-600">Our crew works efficiently, protecting your property and landscaping.</p>
               </div>
               <div className="relative text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-frontier-red shadow-md mx-auto mb-4 border-2 border-frontier-red z-10 relative">4</div>
                  <h4 className="font-bold text-lg mb-2">Warranty</h4>
                  <p className="text-sm text-gray-600">We perform a final walkthrough and register your manufacturer warranty.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Roofing FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-frontier-navy text-center mb-8">Roofing FAQ</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-lg text-frontier-navy mb-2">Should I repair or replace my roof?</h4>
              <p className="text-gray-600">If your roof is over 15-20 years old or has widespread damage (over 30%), replacement is usually more cost-effective. Minor leaks or isolated storm damage can often be repaired.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-lg text-frontier-navy mb-2">How long does installation take?</h4>
              <p className="text-gray-600">An average residential roof in Austin (approx. 2,500 sq ft) takes 1-2 days to complete. We clean up magnetic nails and debris daily.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-lg text-frontier-navy mb-2">What roofing material is best for Austin?</h4>
              <p className="text-gray-600">Architectural Asphalt Shingles are the most popular due to affordability and durability. However, Metal Roofing offers superior heat reflection and longevity for the Texas climate.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Roofing;