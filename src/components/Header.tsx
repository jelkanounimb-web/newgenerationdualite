import React, { useState } from 'react';
import { VercelIcon } from './VercelIcon';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-brand-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <VercelIcon className="h-6 w-6 text-white" />
            <span className="font-bold text-xl text-white">BlitzHost</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a href="#footer" className="px-4 py-2 text-sm font-medium text-white bg-brand-accent hover:bg-brand-accent-hover rounded-md transition-colors">
              Get Started
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-brand-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#footer" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-2 mt-2 rounded-md text-base font-medium text-white bg-brand-accent hover:bg-brand-accent-hover transition-colors">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
