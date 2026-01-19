import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import JsonLd from '../components/JsonLd';
import { ROOFING_SERVICES, GUTTER_SERVICES, BUSINESS_INFO, SERVICE_AREAS } from '../constants';
import { CheckCircle2, Star, Award, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <JsonLd />
      {/* Hero Section */}
      <Hero 
        title={`Professional Roofing Services in ${BUSINESS_INFO.address.city}, IL`}
        subtitle="Your trusted partner for residential and commercial roofing. Quality craftsmanship, lifetime warranties, and 24/7 emergency support."
      />

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Star className="text-yellow-500 w-12 h-12 mb-3" />
              <h4 className="font-bold text-gray-900 text-lg">5-Star Rated</h4>
              <p className="text-sm text-gray-500">Top reviews on Google</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="text-brand-blue w-12 h-12 mb-3" />
              <h4 className="font-bold text-gray-900 text-lg">Fully Licensed</h4>
              <p className="text-sm text-gray-500">IL State Certified</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="text-green-500 w-12 h-12 mb-3" />
              <h4 className="font-bold text-gray-900 text-lg">Warranty</h4>
              <p className="text-sm text-gray-500">Lifetime material warranty</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="text-brand-accent w-12 h-12 mb-3" />
              <h4 className="font-bold text-gray-900 text-lg">Fast Service</h4>
              <p className="text-sm text-gray-500">Emergency response available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold uppercase tracking-wider text-sm">What We Do</span>
            <h2 className="text-4xl font-extrabold text-brand-slate mt-2 mb-4">Complete Roofing & Gutter Solutions</h2>
            <p className="text-gray-600 text-lg">From minor repairs to complete replacements, Waukegan Roofing delivers excellence in every project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOFING_SERVICES.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
            {GUTTER_SERVICES.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold py-3 px-8 rounded transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Local SEO / Areas Section */}
      <section className="py-20 bg-brand-slate text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Serving Waukegan & Beyond</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We are proud to serve homeowners and businesses across Northern Illinois. Whether you are in Wadsworth, Gurnee, or downtown Chicago, our team is ready to help.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {SERVICE_AREAS.slice(0, 6).map(city => (
                  <Link 
                    key={city.slug} 
                    to={`/city/${city.slug}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-brand-accent transition-colors"
                  >
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    {city.name}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/areas-we-serve" className="text-white underline hover:text-brand-accent">See full service area map</Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Why Choose Local?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-brand-accent shrink-0" />
                    <span>We understand Illinois weather challenges (snow, wind, hail).</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-brand-accent shrink-0" />
                    <span>Fast response times for local emergencies.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-brand-accent shrink-0" />
                    <span>Deeply rooted in the community since 1995.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
               <span className="text-brand-accent font-bold uppercase tracking-wider text-sm">Contact Us</span>
              <h2 className="text-4xl font-extrabold text-brand-slate mt-2 mb-6">Get Your Free Estimate Today</h2>
              <p className="text-gray-600 text-lg mb-8">
                Don't wait until a small leak becomes a big problem. Contact us for a comprehensive inspection and honest quote.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-brand-blue mb-8">
                <p className="font-bold text-brand-blue text-lg mb-2">Office Hours</p>
                <p className="text-gray-700">Mon - Fri: 7:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Sat: 8:00 AM - 2:00 PM</p>
                <p className="text-gray-700">Sun: Closed (Emergency Only)</p>
              </div>
            </div>
            <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Request Service</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;