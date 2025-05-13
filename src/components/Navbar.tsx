import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <Code2 
              className={`h-8 w-8 ${isScrolled ? 'text-primary-900' : 'text-primary-900'}`} 
            />
            <span className={`text-xl font-bold ${isScrolled ? 'text-primary-900' : 'text-primary-900'}`}>
              langcraft
            </span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className={`text-sm font-medium hover:text-primary-600 transition-colors ${isScrolled ? 'text-neutral-700' : 'text-neutral-800'}`}>
              Services
            </a>
            <a href="#engagement" className={`text-sm font-medium hover:text-primary-600 transition-colors ${isScrolled ? 'text-neutral-700' : 'text-neutral-800'}`}>
              Engagement
            </a>
            <a 
              href="#contact"
              className="px-4 py-2 bg-primary-900 text-white rounded-md font-medium transition-all hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            >
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={`focus:outline-none ${isScrolled ? 'text-neutral-800' : 'text-neutral-800'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`
          md:hidden bg-white absolute top-full left-0 w-full shadow-md transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        `}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#services" 
            className="text-neutral-800 py-2 hover:text-primary-600"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#engagement" 
            className="text-neutral-800 py-2 hover:text-primary-600"
            onClick={() => setIsOpen(false)}
          >
            Engagement
          </a>
          <a 
            href="#contact" 
            className="px-4 py-2 bg-primary-900 text-white rounded-md text-center font-medium transition-all hover:bg-primary-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;