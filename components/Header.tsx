import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Hammer } from 'lucide-react';
// BUSINESS_INFO ko rehne dete hain phone number ke liye
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
            
            {/* 1. Logo (flex-shrink-0 taake ye dabay nahi) */}
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="bg-brand-blue p-2 rounded text-white group-hover:bg-brand-slate transition-colors">
                <Hammer size={24} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-extrabold text-brand-slate tracking-tight leading-none">
                  WAUKEGAN
                </h1>
                <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase">Roofing Services</p>
              </div>
            </Link>

            {/* 2. Desktop Nav (flex-1 aur justify-center se ye center mein aa gaya) */}
            <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
              <Link to="/" className="text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-tight">Home</Link>
              <Link to="/roofing-services" className="text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-tight">Roofing</Link>
              <Link to="/gutter-services" className="text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-tight">Gutters</Link>
              <Link to="/areas-we-serve" className="text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-tight">Areas We Serve</Link>
              <Link to="/contact" className="text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-tight">Contact</Link>
            </nav>

            {/* 3. CTA Button (Right Side - flex-shrink-0) */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Link 
                to="/contact" 
                className="ml-4 bg-brand-accent hover:bg-orange-600 text-white px-5 py-2.5 rounded font-bold transition-all shadow-sm transform hover:-translate-y-0.5"
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
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 top-[100%] max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col p-4 space-y-3">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded hover:bg-gray-50 text-gray-800 font-semibold border-b border-gray-100">HOME</Link>
            <Link to="/roofing-services" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded hover:bg-gray-50 text-gray-800 font-semibold border-b border-gray-100">ROOFING</Link>
            <Link to="/gutter-services" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded hover:bg-gray-50 text-gray-800 font-semibold border-b border-gray-100">GUTTERS</Link>
            <Link to="/areas-we-serve" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded hover:bg-gray-50 text-gray-800 font-semibold border-b border-gray-100">AREAS WE SERVE</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded hover:bg-gray-50 text-gray-800 font-semibold border-b border-gray-100">CONTACT</Link>
            
            <Link 
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 text-center bg-brand-blue text-white py-3 rounded font-bold"
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
