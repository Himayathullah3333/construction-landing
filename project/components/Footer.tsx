'use client';

import Link from 'next/link';
import { Hammer, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2B2B2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div data-aos="fade-up">
            <div className="flex items-center space-x-2 mb-6">
              <Hammer className="h-8 w-8 text-[#FFC107]" />
              <span className="text-2xl font-bold">
                Urban<span className="text-[#FFC107]">Build</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building exceptional residential spaces with precision, quality, and innovation.
              Your dream home is our commitment.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-[#FFC107] p-2 rounded-full transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#FFC107] p-2 rounded-full transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#FFC107] p-2 rounded-full transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#FFC107] p-2 rounded-full transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-6 text-[#FFC107]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#packages" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-6 text-[#FFC107]">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#FFC107] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Construction Ave
                  <br />
                  Building District, CA 90210
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#FFC107] flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#FFC107] flex-shrink-0" />
                <a href="mailto:info@urbanbuild.com" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                  info@urbanbuild.com
                </a>
              </li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-6 text-[#FFC107]">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on our latest projects and offers.
            </p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#FFC107]"
              />
              <Button className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#2B2B2B] font-bold w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 UrbanBuild. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
