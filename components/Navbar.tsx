'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2B2B2B] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Hammer className="h-8 w-8 text-[#FFC107]" />
            <span className="text-2xl font-bold text-white">
              Urban<span className="text-[#FFC107]">Build</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#FFC107] transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#2B2B2B] font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              Let's Build Now
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FFC107] transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#2B2B2B] border-t border-[#FFC107]/20">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white hover:text-[#FFC107] transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full bg-[#FFC107] hover:bg-[#FFD54F] text-[#2B2B2B] font-bold py-2 rounded-full transition-all duration-300">
              Let's Build Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
