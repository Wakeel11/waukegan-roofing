import React from 'react';
import { Home, Droplets, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceCategory } from '../types';

const servicesData: ServiceCategory[] = [
  {
    id: 'roofing',
    title: 'Roofing Services',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=800', // Verified roofing image
    items: [
      { title: 'Roof Installation', description: 'Complete system installation using premium materials for longevity.' },
      { title: 'Roof Replacement', description: 'Safe and efficient removal of old roofing and installation of new systems.' },
      { title: 'Roof Repair', description: 'Fixing leaks, shingle damage, and storm impact quickly.' },
      { title: 'Inspection', description: 'Thorough assessments to identify potential issues before they become costly.' },
      { title: 'Cleaning', description: 'Removing debris, moss, and algae to extend your roof\'s life.' },
    ]
  },
  {
    id: 'gutters',
    title: 'Gutter Solutions',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800', // Construction/Exterior context
    items: [
      { title: 'Installation', description: 'Seamless gutter systems designed for Austin\'s rainfall patterns.' },
      { title: 'Replacement', description: 'Upgrading old, leaky gutters with durable modern solutions.' },
      { title: 'Repair', description: 'Fixing sagging, detached, or leaking gutter sections.' },
      { title: 'Cleaning', description: 'Professional cleaning to prevent water damage to your foundation.' },
      { title: 'Additions', description: 'Adding leaf guards and extensions for better performance.' },
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-frontier-red font-bold tracking-widest uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-frontier-navy mb-6">Comprehensive Exterior Solutions</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From complete roof replacements to minor gutter repairs, we handle every project with the same level of care, precision, and Texas pride.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {servicesData.map((category, index) => (
            <div key={category.id} id={category.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center scroll-mt-28`}>
              
              <div className="w-full md:w-1/2 relative group">
                 <div className="absolute inset-0 bg-frontier-navy rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                 <div className="relative h-80 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-frontier-navy/80 to-transparent flex items-end p-8">
                       <div className="bg-white p-3 rounded-full text-frontier-red shadow-lg">
                          <category.icon size={32} />
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h4 className="text-3xl font-heading font-bold text-frontier-navy mb-6 border-l-4 border-frontier-red pl-4">{category.title}</h4>
                <p className="text-gray-600 mb-8 text-lg">
                  We provide top-tier {category.title.toLowerCase()} tailored to the unique climate of Central Texas.
                </p>
                <ul className="grid gap-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="bg-frontier-gray p-4 rounded-lg flex items-start hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                      <CheckCircle2 className="w-6 h-6 text-frontier-red mt-1 flex-shrink-0 mr-4" />
                      <div>
                        <span className="font-bold text-frontier-navy block mb-1">{item.title}</span>
                        <span className="text-gray-600 text-sm">{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <a href="#contact" className="inline-flex items-center justify-center bg-frontier-navy text-white px-8 py-4 rounded-md font-bold hover:bg-frontier-charcoal transition-colors">
                    Get a Quote for {category.title} <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;