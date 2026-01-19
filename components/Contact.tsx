import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Contact Info */}
          <div className="p-10 bg-frontier-charcoal text-white">
            <h2 className="text-3xl font-heading font-bold mb-6">Get Your Free Estimate</h2>
            <p className="text-gray-300 mb-8">
              Ready to start your project? Call us today or visit our office. We serve all of Austin and the downtown area.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-frontier-red p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <a href="tel:7372311010" className="text-gray-300 hover:text-white transition-colors block text-xl">
                    (737) 231-1010
                  </a>
                  <p className="text-sm text-gray-400 mt-1">Click to Call</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-frontier-red p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-gray-300">
                    111 Congress Ave, Ste 500<br />
                    Austin, TX 78701
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-frontier-red p-3 rounded-full">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Hours</h4>
                  <p className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: By Appointment</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-frontier-red p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <a href="mailto:info@frontierroofing.com" className="text-gray-300 hover:text-white">
                    info@frontierroofing.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] w-full bg-gray-200 relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14193401.148822876!2d-116.53083624999996!3d29.714375999999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4e13655215f1b4cf%3A0xb36b1b7d7d4d93ad!2sFrontier%20Roofing%20and%20General%20Contracting%2C%20LLC!5e0!3m2!1sen!2s!4v1767364344188!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{border: 0, minHeight: '400px'}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;