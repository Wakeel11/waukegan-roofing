import React from 'react';
import { Hammer, Shield, Search, Droplets, Home, Wrench, Trash2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { Link } from 'react-router-dom';

// Map icon strings to components
const IconMap = {
  Hammer,
  Shield,
  Search,
  Droplets,
  Home,
  Wrench,
  Trash2
};

interface ServiceCardProps {
  service: ServiceItem;
  cityName?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, cityName }) => {
  const IconComponent = IconMap[service.iconName];

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border-b-4 border-brand-blue group flex flex-col h-full">
      <div className="mb-6 inline-block p-4 rounded-full bg-blue-50 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
        <IconComponent size={32} />
      </div>
      <h3 className="text-2xl font-bold text-brand-slate mb-3 group-hover:text-brand-blue transition-colors">
        {service.title}
        {cityName && <span className="block text-sm font-normal text-gray-500 mt-1">in {cityName}</span>}
      </h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
        {service.description}
      </p>
      <Link 
        to="/contact" 
        className="inline-flex items-center gap-2 text-brand-accent font-bold hover:gap-3 transition-all"
      >
        Schedule Now <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default ServiceCard;