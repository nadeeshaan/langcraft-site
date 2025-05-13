import React from 'react';
import { Code, GitBranch, Terminal, Server } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Language Engineering Excellence
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            We specialize in creating sophisticated DSLs, browser-based development environments and seamless IDE integrations, empowering teams with powerful tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="animate-on-scroll opacity-0 p-8 bg-neutral-50 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-primary-100 rounded-full opacity-20"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Code className="text-primary-900 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Domain-Specific Languages</h3>
              <p className="text-neutral-700 mb-6">
                The DSLs we build put development tools directly into the hands of domain experts, enabling them to translate their intimate understanding of the problem space into executable artifacts. By removing the traditional hand-off between requirements gathering and coding, these custom languages close the gap between vision and implementation and dramatically accelerate delivery.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 mr-3 mt-0.5">✓</span>
                  <span className="text-neutral-700">Tailored syntax for your domain</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 mr-3 mt-0.5">✓</span>
                  <span className="text-neutral-700">Reduced learning curve for domain experts</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 mr-3 mt-0.5">✓</span>
                  <span className="text-neutral-700">Direct execution of business knowledge</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 p-8 bg-neutral-50 rounded-2xl relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 -mb-16 -ml-16 bg-secondary-100 rounded-full opacity-20"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
                <GitBranch className="text-secondary-900 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Code Generation</h3>
              <p className="text-neutral-700 mb-6">
              We specialize in building high-quality code generators that significantly reduce repetitive coding, freeing your team to focus on innovation rather than boilerplate. Our generators produce clean, maintainable code that adheres to your organization's standards and best practices.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-900 mr-3 mt-0.5">✓</span>
                  <span className="text-neutral-700">Multi-language output support</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-900 mr-3 mt-0.5">✓</span>
                  <span className="text-neutral-700">Customizable code templates</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-900 mr-3 mt-0.5">✓</span>
                  <span className="text-neutral-700">Automated quality assurance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-on-scroll opacity-0 p-8 bg-neutral-50 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 -mt-16 -ml-16 bg-accent-100 rounded-full opacity-20"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
                <Terminal className="text-accent-600 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Browser-Based Development</h3>
              <p className="text-neutral-700 mb-6">
                The browser based tooling we offer is based on the popular Monaco editor. We embed the editor into your application to enable rich editing along with features like content assist, validation. This foundation empowers teams with intuitive, accessible tools that are accessible from anywhere.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mr-3 mt-0.5">✓</span>
                  <span className="text-neutral-700">Monaco editor integration</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mr-3 mt-0.5">✓</span>
                  <span className="text-neutral-700">Content assist, Validation, Code Actions</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mr-3 mt-0.5">✓</span>
                  <span className="text-neutral-700">AI-powered code suggestions</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 p-8 bg-neutral-50 rounded-2xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 -mb-16 -mr-16 bg-primary-100 rounded-full opacity-20"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Server className="text-primary-900 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">IDE Integration</h3>
              <p className="text-neutral-700 mb-6">
                We develop custom VS Code and Eclipse plugins that bring your domain-specific languages to life within familiar development environments. These plugins offer a rich set of features tailored to your specific language and workflow needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 mr-3 mt-0.5">✓</span>
                  <span className="text-neutral-700">Integrated language-specific tooling</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 mr-3 mt-0.5">✓</span>
                  <span className="text-neutral-700">Custom syntax highlighting</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 mr-3 mt-0.5">✓</span>
                  <span className="text-neutral-700">Specialized debugging capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;