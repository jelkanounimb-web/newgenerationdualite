import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Hobby',
    price: '$0',
    frequency: '/month',
    description: 'For personal projects and experiments.',
    features: ['1 Project', '1 GB Storage', 'Community Support'],
    cta: 'Start for Free',
    main: false,
  },
  {
    name: 'Pro',
    price: '$20',
    frequency: '/month',
    description: 'For professional developers and teams.',
    features: ['Unlimited Projects', '100 GB Storage', 'Priority Support', 'Custom Domains'],
    cta: 'Get Started',
    main: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    frequency: '',
    description: 'For large-scale applications.',
    features: ['SAML SSO', 'Dedicated Infrastructure', '24/7/365 Support', 'Custom Contracts'],
    cta: 'Contact Sales',
    main: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Choose the plan that's right for you. No hidden fees, ever.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col p-8 bg-brand-card border rounded-lg ${
                tier.main ? 'border-brand-accent' : 'border-brand-border'
              }`}
            >
              <h3 className="text-xl font-bold text-white">{tier.name}</h3>
              <p className="mt-2 text-sm text-gray-400">{tier.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                {tier.frequency && <span className="text-base font-medium text-gray-400">{tier.frequency}</span>}
              </div>
              <ul className="mt-8 space-y-4 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="flex-shrink-0 h-6 w-6 text-green-500" />
                    <span className="ml-3 text-base text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#footer"
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium transition-colors ${
                  tier.main
                    ? 'bg-brand-accent text-white hover:bg-brand-accent-hover'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
