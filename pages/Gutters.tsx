import React from 'react';
import { Droplets, ArrowRight, CheckCircle2, Ruler, MousePointer2, Layers, Shield, Wrench } from 'lucide-react';
import Contact from '../components/Contact';

const Gutters: React.FC = () => {
  return (
    <div className="pt-0 font-sans">
      {/* Page Hero */}
      <div className="relative bg-frontier-navy py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920" 
             alt="Gutter Installation Austin" 
             className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-frontier-navy via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Seamless Gutter Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Protect your foundation and landscaping with custom-fabricated seamless gutters. Expert installation, repair, and cleaning for Austin homeowners.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-frontier-red rounded-2xl transform -translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1628131346049-74d641126786?auto=format&fit=crop&q=80&w=800"
                  alt="Modern Gutter System"
                  className="relative rounded-2xl shadow-xl w-full h-auto z-10"
                />
             </div>

            <div className="order-1 lg:order-2">
               <h2 className="text-frontier-red font-bold tracking-widest uppercase mb-2">Water Management</h2>
               <h3 className="text-3xl font-heading font-bold text-frontier-navy mb-6">Why Seamless Gutters?</h3>
               
               <div className="prose prose-lg text-gray-600 space-y-6">
                 <p>
                   Austin is known for flash floods and heavy downpours. Without a properly functioning gutter system, rainwater pours directly off your roofline, eroding soil and causing <strong>foundation shifting</strong>—a critical issue in Central Texas clay soil.
                 </p>
                 <p>
                   Frontier Roofing installs <strong>Seamless Gutters</strong>. Unlike sectional gutters sold at DIY stores, ours are custom-fabricated on-site from a single continuous piece of aluminum. This eliminates unsightly seams and significantly reduces the risk of leaks.
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-frontier-red">
                       <h4 className="font-bold text-frontier-navy">Custom Fit</h4>
                       <p className="text-sm text-gray-600">Measured and cut at your home for a perfect fit.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-frontier-red">
                       <h4 className="font-bold text-frontier-navy">Less Leaks</h4>
                       <p className="text-sm text-gray-600">No seams means fewer weak points for water to escape.</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-frontier-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h3 className="text-3xl font-heading font-bold text-frontier-navy">Our Gutter Services</h3>
             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We offer comprehensive solutions to manage rainwater effectively.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Installation */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-frontier-red transition-colors">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Ruler size={24} />
                </div>
                <h4 className="text-lg font-bold text-frontier-navy mb-2">Installation</h4>
                <p className="text-gray-600 text-sm mb-4">
                   5" and 6" K-Style seamless aluminum gutters designed to handle heavy roof runoff.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• 30+ Colors Available</li>
                  <li>• Heavy-duty Hangers</li>
                </ul>
              </div>

              {/* Repair */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-frontier-red transition-colors">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-4">
                  <Wrench size={24} />
                </div>
                <h4 className="text-lg font-bold text-frontier-navy mb-2">Repair & Tune-Up</h4>
                <p className="text-gray-600 text-sm mb-4">
                   We fix sagging sections, seal leaking corners, and replace damaged downspouts.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Re-pitching for flow</li>
                  <li>• Fascia board repair</li>
                </ul>
              </div>

              {/* Cleaning */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-frontier-red transition-colors">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Droplets size={24} />
                </div>
                <h4 className="text-lg font-bold text-frontier-navy mb-2">Cleaning</h4>
                <p className="text-gray-600 text-sm mb-4">
                   Professional removal of leaves and debris to ensure water flows freely away from your home.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Downspout flushing</li>
                  <li>• Roof debris clearing</li>
                </ul>
              </div>

              {/* Additions / Guards */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-frontier-red transition-colors">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Shield size={24} />
                </div>
                <h4 className="text-lg font-bold text-frontier-navy mb-2">Leaf Guards</h4>
                <p className="text-gray-600 text-sm mb-4">
                   Add high-quality mesh or screen guards to existing gutters to minimize maintenance.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Stainless Steel Mesh</li>
                  <li>• Prevent clogging</li>
                </ul>
              </div>

           </div>
        </div>
      </section>

       {/* FAQ Section */}
       <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-frontier-navy text-center mb-8">Gutter FAQ</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-lg text-frontier-navy mb-2">Why are seamless gutters better?</h4>
              <p className="text-gray-600">Traditional gutters have seams every 10 feet, which are potential leak points. Seamless gutters are custom-cut to the exact length of your roofline, creating a sleeker look and a more durable system.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-lg text-frontier-navy mb-2">What size gutters do I need?</h4>
              <p className="text-gray-600">For most residential homes in Austin, 5-inch gutters are standard. However, if you have a steep roof or a large surface area, 6-inch gutters handle 40% more water and are recommended for heavy storms.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-lg text-frontier-navy mb-2">How often should I clean my gutters?</h4>
              <p className="text-gray-600">We recommend cleaning at least twice a year: once in late spring (oak tassels) and once in late fall (leaves). If you have many trees, quarterly cleaning or leaf guards may be necessary.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-frontier-red py-12 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Protect Your Home's Foundation Today</h2>
          <p className="mb-6 opacity-90">Get a free quote for seamless gutter installation or repair.</p>
          <a 
            href="tel:7372311010"
            className="inline-block bg-white text-frontier-red px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get a Quote: (737) 231-1010
          </a>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Gutters;