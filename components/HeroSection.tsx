'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, CheckCircle2, TrendingUp, Sparkles, Award } from 'lucide-react';

export default function HeroSection() {
  const [projectCount, setProjectCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [upcomingCount, setUpcomingCount] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const animateNumber = (target: number, setter: (n: number) => void, duration: number = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    setTimeout(() => animateNumber(50, setProjectCount), 300);
    setTimeout(() => animateNumber(25, setCompletedCount), 500);
    setTimeout(() => animateNumber(15, setUpcomingCount), 700);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        .hero-title {
          font-family: 'Sora', sans-serif;
        }
        
        .hero-text {
          font-family: 'Space Grotesk', sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 193, 7, 0.3); }
          50% { box-shadow: 0 0 40px rgba(255, 193, 7, 0.6); }
        }

        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .floating-element {
          animation: float 6s ease-in-out infinite;
        }

        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 193, 7, 0.2);
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(255, 193, 7, 0.3);
        }
      `}</style>

      <section id="home" className="relative min-h-screen bg-[#2B2B2B] pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 bg-[#FFC107] rounded-full filter blur-3xl opacity-10"
            style={{
              top: '10%',
              right: '10%',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          <div 
            className="absolute w-96 h-96 bg-[#FFC107] rounded-full filter blur-3xl opacity-10"
            style={{
              bottom: '20%',
              left: '5%',
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
            }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,193,7,0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,193,7,0.2) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8" data-aos="fade-right" data-aos-duration="1000">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass-card px-5 py-3 rounded-full" data-aos="fade-down" data-aos-delay="100">
                <Sparkles className="w-4 h-4 text-[#FFC107]" />
                <span className="hero-text text-[#FFC107] text-sm font-semibold tracking-wide">
                  PREMIUM RESIDENTIAL CONSTRUCTION
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight" data-aos="fade-up" data-aos-delay="200">
                  Building
                  <br />
                  <span className="gradient-text">Your Dream</span>
                  <br />
                  <span className="text-white">Home</span>
                </h1>
                
                <div className="flex items-center gap-3 mt-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="h-1 w-16 bg-[#FFC107]"></div>
                  <Award className="w-6 h-6 text-[#FFC107]" />
                  <span className="hero-text text-gray-400 text-sm font-medium">EXCELLENCE SINCE 2010</span>
                </div>
              </div>

              {/* Description */}
              <p className="hero-text text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-xl" data-aos="fade-up" data-aos-delay="400">
                Expert residential construction services bringing your vision to life. We specialize in crafting exceptional homes with precision, quality, and innovation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 pt-4" data-aos="fade-up" data-aos-delay="500">
                <Button className="hero-text bg-[#FFC107] hover:bg-[#FFD54F] text-[#2B2B2B] font-bold px-10 py-7 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg group">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="hero-text border-2 border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-[#2B2B2B] font-bold px-10 py-7 text-lg rounded-2xl transition-all duration-300 hover:shadow-xl"
                >
                  Know More
                </Button>
              </div>

                          </div>

            {/* Right Content - Standalone Image and Stats */}
            <div className="lg:col-span-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <img
                src="/images/herocon.png"
                alt="Residential Construction"
                className="w-full max-w-xl h-auto object-contain rounded-3xl shadow-[0_0_80px_rgba(255,193,7,0.35)] pulse-glow"
              />

              {/* Stat Cards */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div
                  className="glass-card hover-lift rounded-2xl p-6 text-center group cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <Building2 className="h-10 w-10 text-[#FFC107] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="hero-title text-3xl font-bold text-white mb-1">{projectCount}+</div>
                  <div className="hero-text text-xs text-gray-400 font-medium tracking-wide">RESIDENTIAL</div>
                </div>

                <div
                  className="glass-card hover-lift rounded-2xl p-6 text-center group cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <CheckCircle2 className="h-10 w-10 text-[#FFC107] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="hero-title text-3xl font-bold text-white mb-1">{completedCount}+</div>
                  <div className="hero-text text-xs text-gray-400 font-medium tracking-wide">COMPLETED</div>
                </div>

                <div
                  className="glass-card hover-lift rounded-2xl p-6 text-center group cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <TrendingUp className="h-10 w-10 text-[#FFC107] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="hero-title text-3xl font-bold text-white mb-1">{upcomingCount}+</div>
                  <div className="hero-text text-xs text-gray-400 font-medium tracking-wide">UPCOMING</div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  );
}