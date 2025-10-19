'use client';

import { Star, Quote } from 'lucide-react';
import { Poppins, Montserrat } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800'] });

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      review:
        'Outstanding service from start to finish! The team transformed our vision into reality, exceeding our expectations. Our dream home is now a beautiful reality.',
      project: '3,200 sq ft Family Home',
    },
    {
      name: 'Michael Chen',
      role: 'Property Investor',
      image:
        'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      review:
        'Professional, reliable, and incredibly skilled. They completed our residential project on time and within budget. The quality of craftsmanship is exceptional.',
      project: '2,800 sq ft Modern Villa',
    },
    {
      name: 'Emily Rodriguez',
      role: 'First-Time Home Builder',
      image:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      review:
        'As first-time builders, we were nervous, but the team made everything seamless. Their expertise and guidance throughout the process were invaluable.',
      project: '2,200 sq ft Starter Home',
    },
  ];

  return (
    <section className={`${poppins.className} py-24 bg-[#2A2A2A]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Title + Stats */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <span className="text-[#FFC107] font-semibold text-lg uppercase tracking-widest mb-4 block">
              Testimonials
            </span>
            <h2
              className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight`}
            >
              What Our Clients
              <span className="text-[#FFC107]"> Say About Us</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
              Don’t just take our word for it. Here’s what our satisfied clients have to say about
              their experience working with us on their dream homes.
            </p>

            <div className="flex items-center space-x-10">
              <div>
                <div className="text-4xl font-bold text-[#FFC107]">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FFC107]">4.9</div>
                <div className="text-gray-300 flex items-center">
                  Average Rating
                  <Star className="h-4 w-4 text-[#FFC107] fill-current ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Reviews */}
          <div className="space-y-6" data-aos="fade-left" data-aos-duration="1000">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-[#1E1E1E]/90 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_20px_#FFC10755] transition-all duration-300 border-l-4 border-[#FFC107]"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#FFC107]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`${montserrat.className} font-semibold text-white`}>
                        {review.name}
                      </h4>
                      <Quote className="h-6 w-6 text-[#FFC107] opacity-50" />
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{review.role}</p>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-[#FFC107] fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-3 leading-relaxed italic">
                  “{review.review}”
                </p>
                <div className="text-sm text-[#FFC107] font-semibold tracking-wide">
                  Project: {review.project}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
