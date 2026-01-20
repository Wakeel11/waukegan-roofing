import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer = () => {
  // Call link for social icons to maximize lead conversion
  const callLink = `tel:8777193793`;

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Brand & History (Content Preserved) */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <ShieldCheck className="text-[#f97316] group-hover:scale-110 transition-transform" size={32} />
              <span className="text-xl font-black tracking-tighter uppercase leading-none">
                WAUKEGAN<br /><span className="text-[#f97316]">Roofing Services</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Top-rated roofing experts serving Illinois, Wisconsin, and Indiana since 2016. 
              Under the leadership of Eduardo Zuniga, we prioritize quality and customer calls.
            </p>
            
            {/* Social Icons linked to Call Action */}
            <div className="flex gap-4">
              <a href={callLink} className="bg-slate-800 p-2 rounded-lg hover:bg-[#f97316] transition-colors flex items-center gap-2 text-xs font-bold uppercase">
                <Facebook size={18} /> Call
              </a>
              <a href={callLink} className="bg-slate-800 p-2 rounded-lg hover:bg-[#f97316] transition-colors flex items-center gap-2 text-xs font-bold uppercase">
                <Instagram size={18} /> Call
              </a>
              <a href={callLink} className="bg-slate-800 p-2 rounded-lg hover:bg-[#f97316] transition-colors flex items-center gap-2 text-xs font-bold uppercase">
                <Twitter size={18} /> Call
              </a>
            </div>
          </div>

          {/* 2. Quick Links (Preserved) */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#f97316]">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-bold uppercase text-xs tracking-wider">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/roofing-repair" className="hover:text-white transition-colors">Roof Repair</Link></li>
              <li><Link to="/areas-we-serve" className="hover:text-white transition-colors">Areas We Serve</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* 3. Service Territories (Preserved) */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#f97316]">Tri-State Service</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-xs uppercase tracking-widest leading-loose">
              <li>• Waukegan & Beach Park, IL</li>
              <li>• Lake County Specialists</li>
              <li>• Southern Wisconsin</li>
              <li>• Northwest Indiana</li>
            </ul>
          </div>

          {/* 4. Corrected Contact Info (NEW ADDRESS) */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#f97316]">Connect Directly</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#f97316] shrink-0" size={20} />
                <span className="text-slate-300 text-sm font-black uppercase leading-relaxed tracking-tight">
                  1008 Oak Crest St<br />Waukegan, IL 60085
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#f97316] shrink-0" size={20} />
                <a href={callLink} className="text-slate-100 text-xl font-black hover:text-[#f97316] transition-colors">
                  (877) 719-3793
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#f97316] shrink-0" size={20} />
                <span className="text-slate-300 text-xs font-bold uppercase">contact@waukegan-roofing.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Content Preserved) */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
          <p>© 2026 WAUKEGAN Roofing Services. All Rights Reserved.</p>
          <p>Established 2016 • Eduardo Zuniga</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
