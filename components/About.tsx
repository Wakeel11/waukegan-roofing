import React from 'react';
import { Hammer, Users, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-frontier-navy text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-frontier-red rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-frontier-red font-bold tracking-widest uppercase mb-2">Who We Are</h2>
            <h3 className="text-4xl font-heading font-bold mb-6">Austin's Most Trusted Roofing Partner</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At Frontier Roofing and General Contracting, we believe in doing things the right way, not the easy way. Our unique value proposition is simple: 
              <span className="text-white font-semibold"> Unwavering commitment to quality, top-tier materials, and absolute transparency.</span>
            </p>
            <p className="text-gray-400 mb-8">
              We treat every roof like it's our own home. Whether it's a minor repair or a full commercial installation at 111 Congress Ave, our team brings the same level of dedication and integrity to the job site.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <Hammer className="w-8 h-8 text-frontier-red mx-auto mb-3" />
                <h4 className="font-bold">Craftsmanship</h4>
              </div>
              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <Users className="w-8 h-8 text-frontier-red mx-auto mb-3" />
                <h4 className="font-bold">Community</h4>
              </div>
              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <HeartHandshake className="w-8 h-8 text-frontier-red mx-auto mb-3" />
                <h4 className="font-bold">Honesty</h4>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" // Generic Construction/Architecture
              alt="Roofing Contractor Team" 
              className="rounded-lg shadow-2xl border-4 border-slate-700 w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-frontier-red p-6 rounded-lg shadow-xl hidden md:block">
              <p className="text-3xl font-bold font-heading">100%</p>
              <p className="text-sm uppercase tracking-wider">Satisfaction Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;