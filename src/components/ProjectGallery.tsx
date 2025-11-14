import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import Slider from 'react-slick';

import sushiProImage from '../assets/760aaa914b32198ff8cc7c10b942acd399f838b4.png';
import talensioImage from '../assets/2bf43e0eb00df15be7d881e3dc771482a4a20411.png';
import depannageAutoImage from '../assets/7ef8ab020bf567f94c8579764f62b16e1d5825b5.png';

export function ProjectGallery() {
  const ref = useRef(null);
  const sliderRef = useRef<any>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: 'Sushi Pro',
      category: 'WordPress Development',
      description: 'Sushi restaurant website',
      image: sushiProImage,
      tags: ['WordPress'],
      link: 'http://sushipro.ma/',
      details: {
        client: 'Sushi Pro Restaurant',
        description: 'A beautiful, fully responsive sushi restaurant website that showcases Japanese cuisine elegantly. Built with a custom WordPress theme and WooCommerce integration for seamless online orders. Features include an intuitive online menu browsing system, integrated reservation system with calendar functionality, customer review integration, and mobile optimization to capture on-the-go customers. The website successfully increased online reservations by 150% and boosted online orders by 40% within the first month, while mobile traffic grew by 65%.',
        technologies: ['WordPress'],
      },
    },
    {
      title: 'Dépannage Auto 24/7',
      category: 'WordPress Development',
      description: 'Auto towing service platform',
      image: depannageAutoImage,
      tags: ['WordPress'],
      link: 'https://depannauto247.fr/',
      details: {
        client: 'Dépannage Auto 24/7',
        description: 'A comprehensive auto towing service platform designed for 24/7 emergency roadside assistance. Built with custom WordPress development featuring emergency request forms, Google Maps integration for real-time vehicle tracking, automated SMS notifications via Twilio, and a dispatcher dashboard for efficient service coordination. The platform achieved complete 24/7 operational reliability, handles over 200 emergency requests monthly, reduced average response time by 35%, and maintains a 92% customer satisfaction rating.',
        technologies: ['WordPress'],
      },
    },
    {
      title: 'Talensio',
      category: 'WordPress Development',
      description: 'Professional training center website',
      image: talensioImage,
      tags: ['WordPress'],
      link: 'https://talensio.ma/',
      details: {
        client: 'Talensio Training Center',
        description: 'A modern professional training center website featuring a comprehensive e-learning platform. Implemented using WordPress with LearnDash LMS for course management, custom user roles for students and instructors, advanced course catalog with filtering capabilities, and integrated payment processing through WooCommerce. The platform includes a student portal for progress tracking and an automated certification system. Successfully enrolled over 2,000 students in the first year, launched 10+ professional training courses, achieved an 85% course completion rate, and saves 20 hours per week through automated certification generation.',
        technologies: ['WordPress'],
      },
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    arrows: false,
  };

  return (
    <section id="projects" ref={ref} className="py-20 px-4 md:px-6 lg:px-8 md:py-28 relative overflow-hidden">
      {/* Background decoration with animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Recent Projects</span>
          </motion.h2>
          <motion.p 
            className="text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Check out some of my latest work. Each project represents a unique challenge 
            and showcases different skills and technologies.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative px-4 md:px-16">
          {/* Custom Navigation Buttons with enhanced animations */}
          <motion.button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/50 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all shadow-lg shadow-cyan-500/20"
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/50 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all shadow-lg shadow-cyan-500/20"
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Carousel */}
          <Slider ref={sliderRef} {...sliderSettings}>
            {projects.map((project, index) => (
              <div key={index} className="px-4">
                <ProjectCard 
                  project={project} 
                  index={index} 
                  isInView={isInView}
                  onViewDetails={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </Slider>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-cyan-400">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Project Image with improved fitting */}
                <motion.div 
                  className="relative h-64 rounded-xl overflow-hidden bg-slate-800"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {typeof selectedProject.image === 'string' ? (
                    <ImageWithFallback
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </motion.div>

                {/* Project Info */}
                <motion.div 
                  className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Users className="text-cyan-400 mb-2" size={20} />
                  <p className="text-xs text-slate-400">Client</p>
                  <p style={{ color: 'white' }} className="text-sm">{selectedProject.details.client}</p>
                </motion.div>

                {/* Project Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="mb-3 text-cyan-400">Project Overview</h4>
                  <p className="text-slate-300 leading-relaxed">{selectedProject.details.description}</p>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.technologies.map((tech: string, i: number) => (
                      <motion.span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Button */}
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 hover:text-white"
                      onClick={() => window.open(selectedProject.link, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Project
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      {/* Custom Carousel Styles */}
      <style>{`
        .slick-dots {
          bottom: -50px;
        }
        .slick-dots li button:before {
          color: #22d3ee;
          font-size: 10px;
        }
        .slick-dots li.slick-active button:before {
          color: #22d3ee;
        }
        .slick-track {
          display: flex !important;
          gap: 0;
        }
        .slick-slide {
          height: inherit !important;
          float: none !important;
        }
        .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, index, isInView, onViewDetails }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group relative h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden transition-all h-full flex flex-col"
        whileHover={{ 
          borderColor: 'rgba(34, 211, 238, 0.5)',
          y: -8
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Image with better fitting */}
        <div className="relative h-56 overflow-hidden bg-slate-900/50">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full"
          >
            {typeof project.image === 'string' ? (
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            )}
          </motion.div>
          
          {/* Overlay with staggered animation */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={onViewDetails}
              className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/50"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: isHovered ? 1 : 0,
                rotate: isHovered ? 0 : -180
              }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
            </motion.button>
          </motion.div>
          
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: isHovered ? '200%' : '-100%' }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <motion.p 
            className="text-cyan-400 text-sm mb-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 0.3 }}
          >
            {project.category}
          </motion.p>
          
          <motion.h3 
            className="mb-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 0.4 }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-slate-400 text-sm mb-4 flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {project.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.6 }}
          >
            {project.tags.map((tag: string, i: number) => (
              <motion.span
                key={i}
                className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 211, 238, 0.1)' }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={onViewDetails}
                variant="outline"
                className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                View Details
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}