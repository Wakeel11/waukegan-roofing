import React from 'react';
import { MapPin } from 'lucide-react';

const Areas: React.FC = () => {
  const areas = [
    "Downtown Austin (78701)", "South Congress (SoCo)", "East Austin", 
    "West Lake Hills", "Travis Heights", "Hyde Park", 
    "Mueller", "Tarrytown", "Barton Hills", "North Loop"
  ];

  return (
    <section id="areas" className="py-20 bg-frontier-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-frontier-red font-bold tracking-widest uppercase mb-2">Where We Work</h2>
          <h3 className="text-4xl font-heading font-bold text-frontier-navy">Serving the Heart of Texas</h3>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Based right on Congress Ave, we are locally owned and operated. We understand the specific roofing needs of Austin homes and businesses, from handling intense summer heat to preparing for storm season.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {areas.map((area, idx) => (
                    <div key={idx} className="flex items-center text-frontier-navy font-semibold bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <MapPin className="w-4 h-4 text-frontier-red mr-2" />
                      {area}
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm border border-blue-100">
                   <strong>Don't see your area?</strong> Give us a call at (737) 231-1010. We likely serve your neighborhood in the greater Austin area.
                </div>
              </div>
              <div className="h-full min-h-[300px] rounded-xl overflow-hidden relative">
                 <img 
                   src="https://images.unsplash.com/photo-1531218535973-29fa574745c6?auto=format&fit=crop&q=80&w=800" // Austin Skyline
                   alt="Austin, Texas Skyline" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-frontier-navy/30"></div>
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg text-center border border-gray-200">
                    <p className="text-frontier-navy font-bold text-xl">111 Congress Ave</p>
                    <p className="text-gray-500 text-sm">Our HQ</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;