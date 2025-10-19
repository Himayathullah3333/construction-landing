'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2B2B2B] to-[#3A3A3A]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC107] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC107] rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your
              <span className="text-[#FFC107]"> Dream Home?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's turn your vision into reality. Our expert team is ready to guide you
              through every step of your residential construction journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#2B2B2B] font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2B2B2B] font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 bg-white text-[#2B2B2B]"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>

          <div
            className="relative hidden lg:block"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img
              src="/images/family.jpg"
              alt="Construction Planning"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#FFC107] rounded-2xl p-6 shadow-2xl">
              <div className="text-3xl font-bold text-[#2B2B2B] mb-1">100%</div>
              <div className="text-[#2B2B2B] font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
