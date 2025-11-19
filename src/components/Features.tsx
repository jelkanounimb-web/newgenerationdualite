import React from 'react';
import { Zap, Globe, Lock } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-brand-accent" />,
    title: 'Instant Deploys',
    description: 'Push to Git and your website is live. Zero configuration required, from staging to production.',
  },
  {
    icon: <Globe className="h-8 w-8 text-brand-accent" />,
    title: 'Global CDN',
    description: 'Your content is served from the edge, ensuring the lowest latency and fastest load times for all your users.',
  },
  {
    icon: <Lock className="h-8 w-8 text-brand-accent" />,
    title: 'Automated Security',
    description: 'Free SSL certificates for all your domains, DDoS mitigation, and enterprise-grade security.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-24 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Everything you need to build and scale
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            From hobby projects to enterprise applications, our platform has you covered.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="p-8 bg-brand-card border border-brand-border rounded-lg">
              <div className="flex-shrink-0">{feature.icon}</div>
              <h3 className="mt-6 text-xl font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
