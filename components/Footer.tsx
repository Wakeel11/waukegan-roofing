import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, ROOFING_SERVICES, SERVICE_AREAS } from '../constants';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-slate text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-brand-accent">Waukegan Roofing</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premier roofing and gutter solutions in Illinois. Dedicated to quality craftsmanship, durability, and customer satisfaction since 1995.
            </p>
            <div className="space-y-3">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone size={18} className="text-brand-accent" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="text-brand-accent mt-1 flex-shrink-0" />
                <address className="not-italic">
                  {BUSINESS_INFO.address.street}<br />
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                </address>
              </div>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail size={18} className="text-brand-accent" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2 inline-block">Services</h3>
            <ul className="space-y-3">
              {ROOFING_SERVICES.map(service => (
                <li key={service.id}>
                  <Link to="/services" className="text-gray-300 hover:text-brand-accent transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-accent transition-colors text-sm">
                  Gutter Installation & Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas (Programmatic Links) */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2 inline-block">Areas We Serve</h3>
            <ul className="space-y-3 grid grid-cols-2 sm:grid-cols-1">
              {SERVICE_AREAS.slice(0, 8).map(city => (
                <li key={city.slug}>
                  <Link to={`/city/${city.slug}`} className="text-gray-300 hover:text-brand-accent transition-colors text-sm">
                    Roofing in {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/areas-we-serve" className="text-brand-accent hover:text-white transition-colors text-sm font-semibold">
                  View All Areas &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 mb-6">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors text-sm">Our Projects</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/write-for-us" className="text-gray-300 hover:text-white transition-colors text-sm">Write For Us</Link></li>
            </ul>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-brand-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-brand-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-brand-accent transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;