import React from 'react';
import { VercelIcon } from './VercelIcon';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black border-t border-brand-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to deploy your next project?</h2>
          <p className="mt-4 text-lg text-gray-400">Start for free, no credit card required.</p>
          <form className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-brand-accent focus:border-brand-accent border-gray-700 rounded-md bg-brand-card text-white"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-accent hover:bg-brand-accent-hover"
            >
              Get Started Free
            </button>
          </form>
        </div>
        <div className="py-8 border-t border-brand-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <VercelIcon className="h-5 w-5 text-white" />
            <span className="text-sm text-gray-400">&copy; 2025 BlitzHost, Inc.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white"><Github size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
