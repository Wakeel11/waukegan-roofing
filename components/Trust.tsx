import React from 'react';
import { Star, Shield, ExternalLink, CheckCircle } from 'lucide-react';

const Trust: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-frontier-red font-bold tracking-widest uppercase mb-2">Verified & Trusted</h2>
            <h3 className="text-3xl font-heading font-bold text-frontier-navy">Austin's Reliable Roofing Partner</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Certifications & Yelp */}
            <div className="space-y-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                    We are committed to transparency and excellence. As a verified Local Business in Austin, we maintain high standards of service, safety, and customer satisfaction.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
                    <div className="bg-[#FF1A1A] text-white p-4 rounded-lg shadow-md font-bold text-xl flex items-center justify-center min-w-[100px]">
                        yelp<span className="font-light text-2xl">*</span>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                        <h4 className="text-xl font-bold text-frontier-navy">See us on Yelp</h4>
                        <div className="flex justify-center sm:justify-start text-yellow-500 my-2">
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                        </div>
                        <a 
                            href="https://www.yelp.com/biz/frontier-roofing-and-general-contracting-austin-2" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-frontier-red font-bold hover:underline inline-flex items-center"
                        >
                            View Business Profile <ExternalLink size={16} className="ml-1" />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                        <Shield className="text-frontier-red w-6 h-6 flex-shrink-0" />
                        <span className="font-bold text-gray-700">Fully Licensed</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <Shield className="text-frontier-red w-6 h-6 flex-shrink-0" />
                        <span className="font-bold text-gray-700">Insured</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <CheckCircle className="text-frontier-red w-6 h-6 flex-shrink-0" />
                        <span className="font-bold text-gray-700">Local Business</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <CheckCircle className="text-frontier-red w-6 h-6 flex-shrink-0" />
                        <span className="font-bold text-gray-700">Family Owned</span>
                    </div>
                </div>
            </div>

            {/* Right: Google Map Embed */}
            <div className="h-[400px] w-full bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 relative">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14193401.148822876!2d-116.53083624999996!3d29.714375999999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4e13655215f1b4cf%3A0xb36b1b7d7d4d93ad!2sFrontier%20Roofing%20and%20General%20Contracting%2C%20LLC!5e0!3m2!1sen!2s!4v1767364344188!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Frontier Roofing Google Business Profile"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Trust;