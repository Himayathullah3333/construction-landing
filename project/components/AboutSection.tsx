'use client';

import { Award, Users, Clock, Shield, Sparkles, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Delivering excellence in every residential project',
      stat: '100%',
      label: 'Satisfaction',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals dedicated to your vision',
      stat: '50+',
      label: 'Specialists',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Committed to meeting project deadlines',
      stat: '95%',
      label: 'On Schedule',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous standards for lasting results',
      stat: '10+',
      label: 'Years Warranty',
    },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        .about-title {
          font-family: 'Sora', sans-serif;
        }
        
        .about-text {
          font-family: 'Space Grotesk', sans-serif;
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .shimmer-border {
          position: relative;
          overflow: hidden;
        }

        .shimmer-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 193, 7, 0.3),
            transparent
          );
          animation: shimmer 3s infinite;
        }

        @keyframes float-up-down {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }

        .floating-badge {
          animation: float-up-down 4s ease-in-out infinite;
        }

        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .feature-card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card-hover:hover {
          transform: translateY(-10px) scale(1.02);
        }
      `}</style>

      <section id="about" className="relative py-24 bg-[#2B2B2B] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle, #2B2B2B 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#FFC107] rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#FFC107] rounded-full filter blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6" data-aos="fade-right" data-aos-duration="1000">
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FFC107]/10 border border-[#FFC107]/30 px-5 py-2.5 rounded-full mb-6" data-aos="fade-down">
                <Sparkles className="w-4 h-4 text-[#FFC107]" />
                <span className="about-text text-[#FFC107] text-sm font-bold tracking-wider uppercase">
                  About Us
                </span>
              </div>

              {/* Heading */}
              <h2 className="about-title text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
                Crafting Exceptional
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#FFC107] to-[#FFD54F] bg-clip-text text-transparent">
                    Residential Spaces
                  </span>
                  <div className="absolute bottom-2 left-0 right-0 h-3 bg-[#FFC107]/20 -z-0"></div>
                </span>
              </h2>

              {/* Description */}
              <div className="space-y-5 mb-10" data-aos="fade-up" data-aos-delay="200">
                <p className="about-text text-lg text-gray-300 leading-relaxed font-light">
                  With over a decade of experience in residential construction, we transform
                  architectural dreams into reality. Our commitment to quality craftsmanship,
                  innovative design, and client satisfaction sets us apart in the industry.
                </p>
                <p className="about-text text-lg text-gray-300 leading-relaxed font-light">
                  From custom homes to residential developments, we bring expertise,
                  precision, and passion to every project. Your home is more than a structure—
                  it's where life unfolds, and we're honored to build it with you.
                </p>
              </div>

              {/* Key Stats Bar */}
              <div className="flex items-center gap-6 mb-10 p-6 bg-gradient-to-r from-[#2B2B2B] to-[#3A3A3A] rounded-2xl" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FFC107] rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#2B2B2B]" />
                  </div>
                  <div>
                    <div className="about-title text-2xl font-bold text-white">98%</div>
                    <div className="about-text text-xs text-gray-400 font-medium">CLIENT RETENTION</div>
                  </div>
                </div>
                <div className="h-12 w-px bg-gray-700"></div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FFC107] rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#2B2B2B]" />
                  </div>
                  <div>
                    <div className="about-title text-2xl font-bold text-white">15+</div>
                    <div className="about-text text-xs text-gray-400 font-medium">INDUSTRY AWARDS</div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-card-hover relative group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                      hoveredFeature === index
                        ? 'bg-[#FFC107] border-[#FFC107] shadow-xl shadow-[#FFC107]/30'
                        : 'bg-gray-800 border-gray-600 hover:border-[#FFC107]/50'
                    }`}>
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                        hoveredFeature === index 
                          ? 'bg-white shadow-lg' 
                          : 'bg-[#FFC107]/10'
                      }`}>
                        <feature.icon className={`h-7 w-7 transition-colors duration-300 ${
                          hoveredFeature === index ? 'text-[#FFC107]' : 'text-[#FFC107]'
                        }`} />
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className={`about-title text-xl font-bold transition-colors duration-300 ${
                          hoveredFeature === index ? 'text-[#2B2B2B]' : 'text-white'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className={`about-text text-sm leading-relaxed transition-colors duration-300 ${
                          hoveredFeature === index ? 'text-[#2B2B2B]/80' : 'text-gray-300'
                        }`}>
                          {feature.description}
                        </p>
                      </div>

                      {/* Stat Badge */}
                      <div className="mt-4 pt-4 border-t border-current/10">
                        <div className="flex items-baseline gap-2">
                          <span className={`about-title text-2xl font-bold transition-colors duration-300 ${
                            hoveredFeature === index ? 'text-[#2B2B2B]' : 'text-[#FFC107]'
                          }`}>
                            {feature.stat}
                          </span>
                          <span className={`about-text text-xs font-medium transition-colors duration-300 ${
                            hoveredFeature === index ? 'text-[#2B2B2B]/70' : 'text-gray-400'
                          }`}>
                            {feature.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image */}
            <div
              className="lg:col-span-6 relative"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shimmer-border group">
                  <img
                    src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Residential Construction Process"
                    className="w-full h-[650px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2B2B2B]/60 via-transparent to-[#FFC107]/30 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Overlay Pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(255,193,7,0.1) 10px,
                      rgba(255,193,7,0.1) 20px
                    )`
                  }}></div>
                </div>

                {/* Floating Experience Badge */}
                <div 
                  className="absolute -bottom-10 -left-10 bg-gradient-to-br from-[#FFC107] to-[#FFD54F] rounded-3xl p-8 shadow-2xl max-w-xs floating-badge" 
                  data-aos="zoom-in" 
                  data-aos-delay="600"
                >
                  <div className="flex items-end gap-3 mb-3">
                    <div className="about-title text-6xl font-extrabold text-[#2B2B2B] leading-none">10+</div>
                    <div className="mb-2">
                      <Award className="w-8 h-8 text-[#2B2B2B]" />
                    </div>
                  </div>
                  <div className="about-text text-[#2B2B2B] font-bold text-lg leading-tight">
                    Years of Excellence in Residential Construction
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#FFC107]"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#FFC107]"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#FFC107]"></div>
                    </div>
                    <span className="about-text text-sm text-[#2B2B2B]/80 font-medium">500+ Happy Clients</span>
                  </div>
                </div>

                {/* Top Right Accent Badge */}
                <div 
                  className="absolute -top-6 -right-6 w-32 h-32 bg-[#2B2B2B] rounded-full flex items-center justify-center shadow-xl"
                  data-aos="flip-left"
                  data-aos-delay="800"
                >
                  <div className="text-center">
                    <div className="about-title text-3xl font-bold text-[#FFC107]">A+</div>
                    <div className="about-text text-xs text-white font-medium mt-1">RATING</div>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-[#FFC107] rounded-tl-2xl opacity-50"></div>
                <div className="absolute bottom-24 right-8 w-16 h-16 border-b-4 border-r-4 border-[#FFC107] rounded-br-2xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFC107] to-transparent"></div>
      </section>
    </>
  );
}