import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { BUSINESS_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Hero 
        title="Contact Us"
        subtitle="Get in touch with Waukegan Roofing for a free inspection or emergency repair."
        backgroundImageUrl="https://picsum.photos/1920/1083"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-brand-slate mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-brand-blue/10 p-4 rounded-lg h-fit text-brand-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">24/7 Emergency Service Available</p>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-lg font-bold text-brand-blue hover:text-brand-accent">
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-brand-blue/10 p-4 rounded-lg h-fit text-brand-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">For general inquiries and quotes</p>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-lg font-bold text-brand-blue hover:text-brand-accent">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-brand-blue/10 p-4 rounded-lg h-fit text-brand-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Office Location</h3>
                    <address className="text-gray-600 not-italic">
                      {BUSINESS_INFO.address.street}<br />
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                    </address>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-brand-blue/10 p-4 rounded-lg h-fit text-brand-blue">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 7am - 6pm</p>
                    <p className="text-gray-600">Sat: 8am - 2pm</p>
                    <p className="text-gray-600">Sun: Emergency Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-slate mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;