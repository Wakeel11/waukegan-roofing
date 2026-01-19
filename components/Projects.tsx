import React from 'react';
import { Camera } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Congress Ave Commercial",
      type: "Flat Roof Replacement",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" // Modern glass building
    },
    {
      id: 2,
      title: "West Lake Hills Estate",
      type: "Premium Slate Installation",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=600" // Luxury white house
    },
    {
      id: 3,
      title: "East Austin Bungalow",
      type: "Shingle Repair & Gutter Additions",
      img: "https://images.unsplash.com/photo-1568605114459-a533c30adb9e?auto=format&fit=crop&q=80&w=600" // Standard house
    },
    {
      id: 4,
      title: "South Congress Retail",
      type: "Metal Roof Installation",
      img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=600" // Modern structure
    },
    {
      id: 5,
      title: "Hyde Park Historic",
      type: "Restoration & Inspection",
      img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=80&w=600" // Suburban home
    },
    {
      id: 6,
      title: "Travis Heights Modern",
      type: "TPO Roofing System",
      img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=600" // Modern architecture
    }
  ];

  return (
    <section id="projects" className="py-20 bg-frontier-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <h2 className="text-frontier-red font-bold tracking-widest uppercase mb-2">Our Portfolio</h2>
             <h3 className="text-4xl font-heading font-bold">Recent Projects in Austin</h3>
           </div>
           <a href="#contact" className="hidden md:inline-flex items-center text-white border-b-2 border-frontier-red pb-1 hover:text-frontier-red transition-colors mt-4 md:mt-0">
             Start Your Project <Camera className="ml-2 w-4 h-4" />
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg bg-gray-800">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-frontier-navy via-frontier-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-frontier-red font-bold text-sm uppercase tracking-wider mb-1">{project.type}</span>
                <h4 className="text-xl font-bold">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a href="#contact" className="inline-block bg-frontier-red text-white px-6 py-3 rounded-md font-bold">
             Start Your Project
           </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;