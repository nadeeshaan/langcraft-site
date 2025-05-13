import React from 'react';
import { Code, BookOpen, HeartHandshake } from 'lucide-react';

const Engagement = () => {
  return (
    <section id="engagement" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Model of Engagement
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            We offer flexible engagement models tailored to your organization's needs, from full-service development to training and consulting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-on-scroll opacity-0 bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                <Code className="text-primary-900 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">DSL & Language Server Development</h3>
              <p className="text-neutral-700 mb-6">
                We partner closely with your domain experts to iteratively translate requirements into a tailored DSL. From there, we develop the accompanying code generator, language server, and Eclipse/VS Code plugin—or even a browser-based editor—each backed by a comprehensive suite of automated tests to ensure reliability and maintainability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 mr-3 mt-0.5 group-hover:bg-white transition-colors duration-300">✓</span>
                  <span className="text-neutral-700">End-to-end development</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 mr-3 mt-0.5 group-hover:bg-white transition-colors duration-300">✓</span>
                  <span className="text-neutral-700">Iterative collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 mr-3 mt-0.5 group-hover:bg-white transition-colors duration-300">✓</span>
                  <span className="text-neutral-700">Comprehensive testing</span>
                </li>
              </ul>
              <div className="mt-8">
                <a href="#contact" className="inline-flex items-center text-primary-900 font-medium hover:text-primary-700 transition-colors">
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-secondary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                <BookOpen className="text-secondary-900 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Training & Mentoring</h3>
              <p className="text-neutral-700 mb-6">
                Our hands-on, interactive workshops—available both online and onsite—cover Eclipse Xtext, the Eclipse Modeling Framework (EMF), and Language Server development. Led by seasoned practitioners, each session is designed to accelerate your team's proficiency and confidence with these technologies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-900 mr-3 mt-0.5 group-hover:bg-white transition-colors duration-300">✓</span>
                  <span className="text-neutral-700">Hands-on workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-900 mr-3 mt-0.5 group-hover:bg-white transition-colors duration-300">✓</span>
                  <span className="text-neutral-700">Expert instructors</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-900 mr-3 mt-0.5 group-hover:bg-white transition-colors duration-300">✓</span>
                  <span className="text-neutral-700">Customized curriculums</span>
                </li>
              </ul>
              <div className="mt-8">
                <a href="#contact" className="inline-flex items-center text-secondary-900 font-medium hover:text-secondary-700 transition-colors">
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-accent-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                <HeartHandshake className="text-accent-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Consulting & Support</h3>
              <p className="text-neutral-700 mb-6">
                Whether you're defining your DSL's syntax, architecting a code generator, or fine-tuning your language server, our experts provide ongoing guidance and support to ensure your project stays on track and delivers maximum business value.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mr-3 mt-0.5 group-hover:bg-white transition-colors duration-300">✓</span>
                  <span className="text-neutral-700">Expert guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mr-3 mt-0.5 group-hover:bg-white transition-colors duration-300">✓</span>
                  <span className="text-neutral-700">Project reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mr-3 mt-0.5 group-hover:bg-white transition-colors duration-300">✓</span>
                  <span className="text-neutral-700">Technical troubleshooting</span>
                </li>
              </ul>
              <div className="mt-8">
                <a href="#contact" className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors">
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagement;