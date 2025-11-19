import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter">
          Blazing-Fast Hosting for <br className="hidden md:block" /> Modern Developers
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
          Deploy your web projects with zero configuration. Experience unparalleled speed, reliability, and scalability.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#footer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-brand-accent hover:bg-brand-accent-hover border border-transparent rounded-md shadow-sm transition-transform duration-200 hover:scale-105"
          >
            Start Deploying
          </a>
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-transparent hover:bg-brand-card border border-brand-border rounded-md shadow-sm transition-colors"
          >
            View Docs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
