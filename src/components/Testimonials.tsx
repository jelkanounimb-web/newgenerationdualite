import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Dole',
    title: 'Frontend Developer @ Acme Inc.',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    quote: "BlitzHost has completely transformed our deployment workflow. What used to take hours now takes seconds. It's a game-changer.",
  },
  {
    name: 'John Doe',
    title: 'CTO @ Innovate Co.',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
    quote: "The speed and reliability are unmatched. Our site performance has improved dramatically since switching to BlitzHost.",
  },
  {
    name: 'Jane Smith',
    title: 'Indie Hacker',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
    quote: 'As a solo developer, I need tools that just work. BlitzHost lets me focus on building my product, not managing infrastructure.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Loved by developers worldwide</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Don't just take our word for it. Here's what our users are saying.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col p-8 bg-brand-card border border-brand-border rounded-lg">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 text-gray-300 flex-grow">
                <Quote className="absolute -top-3 -left-3 h-10 w-10 text-brand-border" strokeWidth={1} />
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <div className="mt-6 flex items-center">
                <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                <div className="ml-4">
                  <p className="text-base font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
