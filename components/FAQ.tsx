import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-bold pr-8 transition-colors ${isOpen ? 'text-frontier-red' : 'text-frontier-navy group-hover:text-frontier-red'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 ml-4 p-1 rounded-full ${isOpen ? 'bg-frontier-red text-white' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do you offer free estimates?",
      answer: "Yes! We provide comprehensive, no-obligation roof inspections and estimates for all homeowners and businesses in the Austin area."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. Frontier Roofing is fully licensed to operate in Texas and carries comprehensive general liability and worker's compensation insurance for your peace of mind."
    },
    {
      question: "How long does a roof replacement take?",
      answer: "Most residential roof replacements in Austin are completed within 1-2 days, depending on the size of the roof and weather conditions. We always clean up the job site daily."
    },
    {
      question: "Do you help with insurance claims?",
      answer: "Yes, we have extensive experience working with insurance companies. We can help guide you through the claims process, meet with adjusters, and ensure you get fair coverage for storm damages."
    },
    {
      question: "What types of roofing materials do you install?",
      answer: "We specialize in asphalt shingles, metal roofing (standing seam), tile, and flat roof systems (TPO/EPDM) for commercial properties."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-frontier-red font-bold tracking-widest uppercase mb-2">Common Questions</h2>
          <h3 className="text-4xl font-heading font-bold text-frontier-navy">Everything You Need to Know</h3>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;