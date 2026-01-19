import React from 'react';
import { PenTool } from 'lucide-react';

const WriteForUs: React.FC = () => {
  return (
    <section id="write-for-us" className="py-16 bg-frontier-navy text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <PenTool className="w-12 h-12 text-frontier-red mx-auto mb-6" />
        <h2 className="text-3xl font-heading font-bold mb-4">Write For Us / Industry Insights</h2>
        <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          Are you a home improvement expert, architect, or roofing specialist? We welcome guest contributions to our blog to help educate Austin homeowners. Share your expertise on roofing trends, maintenance tips, or sustainable building.
        </p>
        <a 
          href="mailto:content@frontierroofing.com?subject=Guest Post Inquiry" 
          className="inline-block border-2 border-white hover:bg-white hover:text-frontier-navy text-white font-bold py-3 px-8 rounded-md transition-all duration-300"
        >
          Submit a Pitch
        </a>
      </div>
    </section>
  );
};

export default WriteForUs;