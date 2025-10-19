'use client';

import { CheckCircle2, Award, Users, TrendingUp, Shield, Clock } from 'lucide-react';
import { Poppins, Montserrat } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800'] });

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Award,
      title: 'Industry Excellence',
      description: 'Award-winning designs and construction practices recognized across the region.',
    },
    {
      icon: Users,
      title: 'Expert Professionals',
      description: 'Certified architects, engineers, and craftsmen dedicated to your project.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: '50+ successful residential projects with exceptional client satisfaction.',
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Comprehensive warranties and quality assurance on all construction work.',
    },
    {
      icon: Clock,
      title: 'Timely Completion',
      description: '95% of projects completed on or ahead of schedule without compromising quality.',
    },
    {
      icon: CheckCircle2,
      title: 'Transparent Process',
      description: 'Clear communication, detailed updates, and complete project visibility.',
    },
  ];

  return (
    <section className={`${poppins.className} py-24 bg-[#2A2A2A]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-[#FFC107] font-semibold text-lg uppercase tracking-widest mb-4 block">
            Why Choose Us
          </span>
          <h2
            className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight`}
          >
            Building Trust, One
            <span className="text-[#FFC107]"> Home at a Time</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our commitment to excellence, innovation, and client satisfaction makes us the
            preferred choice for residential construction.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-6" data-aos="fade-right" data-aos-duration="1000">
            {reasons.slice(0, 3).map((reason, index) => (
              <div
                key={index}
                className="bg-[#1E1E1E] rounded-xl p-6 border border-transparent hover:border-[#FFC107] hover:shadow-[0_0_15px_#FFC10755] transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <reason.icon className="h-10 w-10 text-[#FFC107] mb-4" />
                <h3 className={`${montserrat.className} text-xl font-bold text-white mb-2`}>
                  {reason.title}
                </h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="relative rounded-full overflow-hidden shadow-2xl border-8 border-[#FFC107]">
              <img
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Residential Building"
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#1E1E1E] rounded-2xl px-8 py-4 shadow-xl border border-[#FFC107]/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFC107]">10+</div>
                <div className="text-gray-200 text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6" data-aos="fade-left" data-aos-duration="1000">
            {reasons.slice(3, 6).map((reason, index) => (
              <div
                key={index}
                className="bg-[#1E1E1E] rounded-xl p-6 border border-transparent hover:border-[#FFC107] hover:shadow-[0_0_15px_#FFC10755] transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <reason.icon className="h-10 w-10 text-[#FFC107] mb-4" />
                <h3 className={`${montserrat.className} text-xl font-bold text-white mb-2`}>
                  {reason.title}
                </h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
