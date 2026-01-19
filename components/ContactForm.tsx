import React, { useState } from 'react';

interface ContactFormProps {
  cityName?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ cityName }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p>Thank you for contacting us. One of our specialists {cityName ? `in ${cityName}` : ''} will reach out shortly.</p>
        <button onClick={() => setStatus('idle')} className="mt-4 underline">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
          <input required type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="John Doe" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
          <input required type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="(555) 123-4567" />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
        <input required type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="john@example.com" />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">Service Needed</label>
        <select id="service" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white">
          <option value="">Select a Service</option>
          <option value="roof-replacement">Roof Replacement</option>
          <option value="roof-repair">Roof Repair</option>
          <option value="gutters">Gutter Services</option>
          <option value="inspection">Free Inspection</option>
          <option value="emergency">Emergency Service</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">How can we help?</label>
        <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="Tell us about your roofing or gutter needs..."></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-brand-accent hover:bg-orange-600 text-white font-bold py-4 rounded shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Request Free Estimate'}
      </button>
      <p className="text-xs text-center text-gray-500 mt-2">
        By submitting, you agree to receive phone calls from Waukegan Roofing.
      </p>
    </form>
  );
};

export default ContactForm;