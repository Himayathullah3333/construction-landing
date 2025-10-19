'use client';

import { Button } from '@/components/ui/button';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Poppins, Montserrat } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function PricingSection() {
  const packages = [
    {
      name: 'Starter Home',
      area: '1200 sq ft',
      price: 'Contact for Quote',
      features: [
        '2 Bedrooms & 2 Bathrooms',
        'Modern Kitchen Design',
        'Standard Flooring & Fixtures',
        'Energy Efficient Windows',
        'Basic Landscaping',
        '6 Month Completion',
      ],
      popular: false,
    },
    {
      name: 'Family Residence',
      area: '2201 sq ft',
      price: 'Best Value',
      features: [
        '4 Bedrooms & 3 Bathrooms',
        'Premium Kitchen & Appliances',
        'Hardwood & Tile Flooring',
        'Smart Home Integration',
        'Professional Landscaping',
        'Custom Interior Design',
        'Covered Patio Area',
        '9 Month Completion',
      ],
      popular: true,
    },
    {
      name: 'Luxury Estate',
      area: '3500+ sq ft',
      price: 'Premium',
      features: [
        '5+ Bedrooms & 4+ Bathrooms',
        'Gourmet Chef Kitchen',
        'Premium Finishes Throughout',
        'Full Home Automation',
        'Pool & Outdoor Living',
        'Custom Architecture',
        'High-End Appliances',
        '12 Month Completion',
      ],
      popular: false,
    },
  ];

  return (
    <section id="packages" className={`${poppins.className} py-24 bg-[#2A2A2A]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-[#FFC107] font-semibold text-lg uppercase tracking-widest mb-3 block">
            Pricing Packages
          </span>
          <h2
            className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight`}
          >
            Choose Your Perfect
            <span className="text-[#FFC107]"> Package</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Flexible packages designed to match your vision and budget. Every package includes
            premium materials and expert craftsmanship.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                pkg.popular
                  ? 'bg-[#1E1E1E] border-4 border-[#FFC107] scale-105'
                  : 'bg-[#1E1E1E] border border-[#3A3A3A]'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[#FFC107] text-[#2B2B2B] px-4 py-2 rounded-bl-2xl font-bold flex items-center gap-1">
                  <Star className="h-4 w-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3
                  className={`${montserrat.className} text-2xl font-bold text-white mb-2`}
                >
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold text-[#FFC107] mb-2">{pkg.area}</div>
                <div className="text-gray-400 mb-6 italic">{pkg.price}</div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-bold py-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? 'bg-[#FFC107] hover:bg-[#FFD54F] text-[#2B2B2B]'
                      : 'bg-[#2B2B2B] hover:bg-[#3A3A3A] text-white'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center" data-aos="fade-up">
          <Button className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#2B2B2B] font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
            See More Packages
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
