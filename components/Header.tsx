import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Hammer } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed w-full z-50 shadow-md">
      {/* Top CTA Bar */}
      <div className="bg-brand-blue text-white py-2 px-4 text-center text-sm md:text-base font-medium tracking-wide">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <span className="hidden md:inline text-gray-200">Trusted Roofing Experts in Illinois</span>
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
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
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

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors uppercase tracking-tight"
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="ml-4 bg-brand-accent hover:bg-orange-600 text-white px-5 py-2.5 rounded font-bold transition-all shadow-sm transform hover:-translate-y-0.5"
              >
                Get a Quote
              </Link>
            </nav>

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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded hover:bg-gray-50 text-gray-800 font-semibold border-b border-gray-100 last:border-0"
              >
                {link.label}
              </Link>
            ))}
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