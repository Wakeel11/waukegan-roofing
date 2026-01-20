import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Hammer, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed w-full z-50 shadow-md">
      {/* Top CTA Bar */}
      <div className="bg-brand-blue text-white py-2 px-4 text-center text-sm md:text-base font-medium tracking-wide">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <span className="hidden md:inline text-gray-200">Trusted Roofing Experts in Illinois, Wisconsin & Indiana</span>
          <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 mx-auto md:mx-0 hover:text-brand-accent transition-colors">
              <span className="bg-brand-accent px-2 py-0.5 rounded text-white text-xs font-bold uppercase">Emergency?</span>
              <span className="font-bold flex items-center gap-1">
                <Phone size={16} fill="currentColor" />
                Call {BUSINESS_INFO.phoneDisplay}
              </span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* 1. Logo */}
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="bg-brand-blue p-2 rounded text-white group-hover:bg-brand-slate transition-colors">
                <Hammer size={24} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-extrabold text-brand-slate tracking-tight leading-none uppercase">
                  WAUKEGAN
                </h1>
                <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase">Roofing Services</p>
              </div>
            </Link>

            {/* 2. Desktop Nav with Dropdown */}
            <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
              <Link to="/" className="text-sm font-bold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-tight">Home</Link>
              
              {/* ROOFING DROPDOWN */}
              <div className="group relative py-5">
                <button className="flex items-center gap-1 text-sm font-bold text-gray-700 group-hover:text-brand-blue transition-colors uppercase tracking-tight">
                  Roofing <ChevronDown size={14} />
                </button>
                {/* Dropdown Box */}
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-2xl border-t-4 border-brand-accent min-w-[240px] py-2 animate-in fade-in slide-in-from-top-2">
                  <Link to="/roofing-installation" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-brand-accent border-b border-gray-50 transition-colors uppercase">New Installation</Link>
                  <Link to="/roofing-repair" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-brand-accent border-b border-gray-50 transition-colors uppercase">Roof Repair</Link>
                  <Link to="/roofing-inspection" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-brand-accent border-b border-gray-50 transition-colors uppercase">Inspection</Link>
                  <Link to="/roofing-cleaning" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-brand-accent border-b border-gray-50 transition-colors uppercase">Roof Cleaning</Link>
                  <Link to="/roofing-replacement" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-brand-accent transition-colors uppercase">Replacement</Link>
                </div>
              </div>

              <Link to="/gutter-services" className="text-sm font-bold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-tight">Gutters</Link>
              <Link to="/areas-we-serve" className="text-sm font-bold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-tight">Areas We Serve</Link>
              <Link to="/contact" className="text-sm font-bold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-tight">Contact</Link>
            </nav>

            {/* 3. CTA Button */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Link 
                to="/contact" 
                className="ml-4 bg-brand-accent hover:bg-orange-600 text-white px-6 py-3 rounded font-black transition-all shadow-md transform hover:-translate-y-0.5 uppercase text-sm"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-gray-700 hover:text-brand-blue focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 top-[100%] max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col p-4 space-y-1">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded hover:bg-gray-50 text-gray-800 font-bold border-b border-gray-50">HOME</Link>
            
            {/* Roofing Services listed for Mobile */}
            <div className="bg-gray-50 rounded-lg p-2 my-2">
              <span className="block px-4 py-2 text-xs font-black text-gray-400 tracking-widest uppercase">Roofing Services</span>
              <Link to="/roofing-installation" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-bold text-brand-blue">New Installation</Link>
              <Link to="/roofing-repair" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-bold text-brand-blue">Roof Repair</Link>
              <Link to="/roofing-inspection" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-bold text-brand-blue">Inspection</Link>
              <Link to="/roofing-cleaning" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-bold text-brand-blue">Roof Cleaning</Link>
              <Link to="/roofing-replacement" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-bold text-brand-blue">Replacement</Link>
            </div>

            <Link to="/gutter-services" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded hover:bg-gray-50 text-gray-800 font-bold border-b border-gray-50">GUTTERS</Link>
            <Link to="/areas-we-serve" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded hover:bg-gray-50 text-gray-800 font-bold border-b border-gray-50">AREAS WE SERVE</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded hover:bg-gray-50 text-gray-800 font-bold border-b border-gray-50">CONTACT</Link>
            
            <Link 
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-6 text-center bg-[#f97316] text-white py-4 rounded-xl font-black text-lg shadow-lg uppercase"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
