'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Poppins, Montserrat } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '700'] });

type ProjectStatus = 'all' | 'completed' | 'ongoing' | 'upcoming';

interface Project {
  id: number;
  title: string;
  location: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  image: string;
  area: string;
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectStatus>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Villa Estate',
      location: 'Beverly Hills',
      status: 'completed',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      area: '3,500 sq ft',
    },
    {
      id: 2,
      title: 'Luxury Family Home',
      location: 'Malibu Coast',
      status: 'completed',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      area: '4,200 sq ft',
    },
    {
      id: 3,
      title: 'Contemporary Residence',
      location: 'Downtown District',
      status: 'ongoing',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      area: '2,800 sq ft',
    },
    {
      id: 4,
      title: 'Suburban Dream Home',
      location: 'Green Valley',
      status: 'completed',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      area: '3,100 sq ft',
    },
    {
      id: 5,
      title: 'Elegant Townhouse',
      location: 'Historic Quarter',
      status: 'ongoing',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      area: '2,400 sq ft',
    },
    {
      id: 6,
      title: 'Waterfront Property',
      location: 'Lakeside',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      area: '5,000 sq ft',
    },
    {
      id: 7,
      title: 'Mountain View Retreat',
      location: 'Highland Hills',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=800',
      area: '3,800 sq ft',
    },
    {
      id: 8,
      title: 'Smart Home Innovation',
      location: 'Tech Valley',
      status: 'ongoing',
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      area: '3,300 sq ft',
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((project) => project.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'ongoing':
        return 'bg-blue-500';
      case 'upcoming':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" className={`${poppins.className} py-24 bg-[#2A2A2A]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-[#FFC107] font-semibold text-lg uppercase tracking-widest mb-3 block">
            Our Portfolio
          </span>
          <h2
            className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight`}
          >
            Recent <span className="text-[#FFC107]">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our portfolio of exceptional construction projects — built with precision,
            innovation, and passion for excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-14"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {(['all', 'completed', 'ongoing', 'upcoming'] as ProjectStatus[]).map((status) => (
            <Button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-2.5 rounded-full font-semibold capitalize shadow-md transition-all duration-300 ${
                filter === status
                  ? 'bg-[#FFC107] text-[#2B2B2B] hover:bg-[#FFD54F]'
                  : 'bg-[#3A3A3A] text-white hover:bg-[#4A4A4A] border border-[#444]'
              }`}
            >
              {status}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div
                  className={`absolute top-4 right-4 ${getStatusColor(
                    project.status
                  )} text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg`}
                >
                  {project.status}
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`${montserrat.className} text-xl font-bold text-white mb-2 group-hover:text-[#FFC107] transition-colors`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-1">{project.location}</p>
                <p className="text-[#FFC107] font-semibold">{project.area}</p>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-16" data-aos="fade-up">
          <Button className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#2B2B2B] font-bold px-8 py-4 rounded-full text-lg tracking-wide transition-all duration-300 transform hover:scale-105">
            View More Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
