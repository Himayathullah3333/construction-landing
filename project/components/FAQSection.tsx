'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Poppins, Montserrat } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800'] });

export default function FAQSection() {
  const faqs = [
    {
      question: 'How long does a typical residential construction project take?',
      answer:
        'Project timelines vary based on size and complexity. A standard 2,000 sq ft home typically takes 6-9 months from groundbreaking to completion. Larger estates may require 12-15 months. We provide detailed timelines during the planning phase.',
    },
    {
      question: 'What is included in your construction packages?',
      answer:
        'Our packages include architectural design, permits, site preparation, foundation, framing, roofing, plumbing, electrical, HVAC, interior finishes, and landscaping. Premium packages also include smart home integration and custom features.',
    },
    {
      question: 'Can I customize the design of my home?',
      answer:
        'Absolutely! We specialize in custom residential construction. Our design team works closely with you to create a home that reflects your unique style, needs, and budget. All our packages can be customized.',
    },
    {
      question: 'Do you handle permits and inspections?',
      answer:
        'Yes, we manage all permits, zoning approvals, and required inspections throughout the construction process. Our team ensures full compliance with local building codes and regulations.',
    },
    {
      question: 'What warranties do you offer?',
      answer:
        'We provide comprehensive warranties including a 1-year workmanship warranty, 10-year structural warranty, and manufacturer warranties on all appliances and systems. Extended warranty options are also available.',
    },
    {
      question: 'How do payment schedules work?',
      answer:
        'We use a milestone-based payment schedule tied to project phases: initial deposit, foundation completion, framing completion, rough-in completion, and final completion. This protects both parties and ensures quality at every stage.',
    },
    {
      question: 'Can you work with my existing architect or designer?',
      answer:
        'Yes, we collaborate with external architects and designers. Our team integrates seamlessly with your chosen professionals to bring your vision to life while ensuring construction feasibility and code compliance.',
    },
    {
      question: 'What sets your company apart from other builders?',
      answer:
        'Our combination of craftsmanship, transparency, and client-focused service distinguishes us. We prioritize quality materials, expert craftsmanship, clear communication, and completing projects on time and within budget.',
    },
  ];

  return (
    <section className={`${poppins.className} py-24 bg-[#2A2A2A]`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-[#FFC107] font-semibold text-lg uppercase tracking-widest mb-4 block">
            FAQ
          </span>
          <h2
            className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-white mb-6`}
          >
            Frequently Asked
            <span className="text-[#FFC107]"> Questions</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our residential construction services.
          </p>
        </div>

        {/* Accordion */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#1E1E1E] rounded-xl border border-transparent hover:border-[#FFC107] hover:shadow-[0_0_15px_#FFC10755] transition-all px-6"
              >
                <AccordionTrigger
                  className={`${montserrat.className} text-left font-semibold text-white hover:text-[#FFC107] transition-colors py-5`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
