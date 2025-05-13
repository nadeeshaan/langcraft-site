import React from 'react';
import { Code, Zap, Workflow } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent-50 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
            <span className="text-primary-900">Empowering</span> Citizen Developers
          </h1>
          
          <p className="animate-fade-in opacity-0 animation-delay-300 text-lg md:text-xl text-neutral-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            We build tailored Domain-Specific Languages that put development tools directly into the hands of domain experts, accelerating delivery and closing the gap between vision and implementation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in opacity-0 animation-delay-500">
            <a 
              href="#services" 
              className="px-8 py-3 bg-primary-900 text-white rounded-lg font-medium transition-all hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white text-primary-900 border border-primary-900 rounded-lg font-medium transition-all hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Contact Us
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in opacity-0 animation-delay-700">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="text-primary-900 w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom DSL Development</h3>
              <p className="text-neutral-600">Tailored domain-specific languages for your unique business needs</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-secondary-900 w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Code Generation</h3>
              <p className="text-neutral-600">High-quality code generators that eliminate repetitive coding tasks</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Workflow className="text-accent-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">IDE Integration</h3>
              <p className="text-neutral-600">VS Code and Eclipse plugins with rich language features</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;