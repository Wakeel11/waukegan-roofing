import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImageUrl = "https://picsum.photos/1920/1080" 
}) => {
  return (
    <section className="relative w-full h-[600px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      >
        <div className="absolute inset-0 bg-brand-slate/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-slate via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 max-w-7xl pt-12">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 bg-brand-accent/90 text-white font-bold text-sm tracking-wider uppercase mb-6 rounded-sm backdrop-blur-sm">
            Licensed & Insured in Illinois
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed font-light border-l-4 border-brand-accent pl-6">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="bg-brand-accent hover:bg-orange-600 text-white text-center px-8 py-4 rounded font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1"
            >
              Get Free Estimate
            </Link>
            <Link 
              to="/services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-center px-8 py-4 rounded font-bold text-lg transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;