import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';

// --- PROJECT DATA ---
const projects = [
  {
    id: 7,
    title: "Farm Fusion – Agriculture Management System",
    category: "Full Stack / AgriTech",
    description:
      "Farm Fusion is a full-stack agriculture management platform that helps farmers manage farms, crops, soil health, irrigation, and weather data in one place. The system enables farm registration, soil monitoring, irrigation logging, real-time weather tracking, and ML-based crop recommendations to support data-driven farming decisions.",
    image: "./AMS.jpeg",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Python",
      "Machine Learning",
      "REST APIs",
      "OpenWeather API",
    ],
    github: "https://github.com/Ash22686/AMS",
  },

  {
    id: 5,
    title: "Fresh Connect",
    category: "Full Stack",
    description:
      "B2B marketplace connecting street food vendors with verified raw material suppliers featuring dual user roles, GSTIN verification, AI-powered trust ratings, group ordering, and automated email notifications.",
    image: "./Fresh.png",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
      "Cloudinary",
      "Nodemailer",
    ],
    github: "https://github.com/A-RYAN-KR/FreshConnect",
    live: "https://fresh-connect-nexus.vercel.app/",
  },

  {
    id: 3,
    title: "Kolam Kar",
    category: "Full Stack",
    description:
      "Modern platform for creating and analyzing traditional Kolam art, featuring AI-powered design generation, pattern analysis, interactive drawing canvas, and secure user authentication.",
    image: "./Kolam.png",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Vite",
      "JWT",
    ],
    github: "https://github.com/Ash22686/Kolam-Kar",
  },

  {
    id: 6,
    title: "Restaurant Management System",
    category: "Full Stack",
    description:
      "Comprehensive restaurant management solution with menu management, order processing, table reservation system, inventory tracking, and customer relationship management features.",
    image: "./Terracotta.jpeg",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/A-RYAN-KR/AshDev",
  },

  {
    id: 1,
    title: "E-Waste Management",
    category: "Full Stack",
    description:
      "A full-stack marketplace for buying, selling and recycling electronic items with user authentication, product listings, secure payment processing, and image upload capabilities.",
    image: "./E-Waste.jpeg",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Cloudinary",
      "JWT",
    ],
    github: "https://github.com/Ash22686/E-Waste-Management",
  },

  {
    id: 4,
    title: "Hostel Chat",
    category: "Full Stack",
    description:
      "Real-time hostel communication platform enabling instant messaging between wardens and students with UDP-inspired routing (Broadcast/Multicast/Unicast), role-based access, and modern UI.",
    image: "./Hostel.png",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Socket.io",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    github: "https://github.com/Ash22686/Hostel-Chat",
    live: "https://hostel-chat-chi.vercel.app/",
  },

  {
    id: 2,
    title: "Authenticator",
    category: "Full Stack",
    description:
      "Comprehensive MERN authentication system with email/password registration, email OTP verification, Google OAuth 2.0 sign-in, JWT session management, and forgot/reset password flow.",
    image: "./Authenticator.png",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Passport.js",
      "JWT",
      "Nodemailer",
    ],
    github: "https://github.com/Ash22686/Authenticator",
  },
];


// --- Project Card Component ---
const ProjectCard = ({ project }) => (
  <div className="relative group w-full h-[550px] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col hover:border-zinc-600 transition-all duration-300">
    
    {/* Image Section - Grayscale to Color on Hover */}
    <div className="relative h-[60%] overflow-hidden bg-black">
      {/* Overlay to darken image slightly before hover */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
      
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover filter grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700 ease-in-out"
      />
      
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
          {project.category}
        </span>
      </div>
    </div>

    {/* Content Section */}
    <div className="flex-1 p-8 flex flex-col justify-between bg-zinc-900 group-hover:bg-zinc-800/80 transition-colors duration-300">
      <div>
        <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-gray-100 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono text-gray-400 border border-zinc-700 px-2 py-1 rounded bg-zinc-950/50">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-6 mt-6 border-t border-zinc-700 pt-4">
        <a href={project.github} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-gray-300 transition-colors group/link">
          <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" /> Code
        </a>
        <a href={project.live} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-gray-300 transition-colors group/link">
          <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" /> Live Demo
        </a>
      </div>
    </div>
  </div>
);

// --- Main Carousel Component ---
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Responsive logic: update itemsPerPage based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3); // Desktop
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(1); // Mobile
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate max index so we don't scroll into empty space
  const maxIndex = Math.max(0, projects.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-24 px-6 md:px-12 border-t border-white/20 overflow-hidden">
      
      <div className="w-full mx-auto">
        
        {/* Header with Navigation Buttons */}
        <div className="flex flex-col md:flex-row items-end md:items-center justify-between mb-16 gap-8 ml-6">
          <div>
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4"
            >
              Selected  <span className="text-gray-500">Work</span>
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-xl text-gray-400 max-w-xl font-light ml-5"
            >
              A showcase of projects that demonstrate my technical expertise.
            </motion.p>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex gap-4">
            <button 
              onClick={prevSlide} 
              className="p-4 rounded-full border border-zinc-700 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextSlide} 
              className="p-4 rounded-full border border-zinc-700 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
            >
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-6"
            // We animate the x position based on percentage width of one item
            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ 
              // Ensure the container is wide enough to hold all items based on viewport
              width: `${(projects.length / itemsPerPage) * 100}%` 
            }}
          >
             {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="px-2"
                  style={{ width: `${100 / projects.length}%` }} // Divide space equally among all projects
                >
                  <ProjectCard project={project} />
                </div>
             ))}
          </motion.div>
        </div>

        {/* Mobile Navigation Controls (Bottom) */}
        <div className="flex md:hidden justify-between items-center mt-12">
           <button onClick={prevSlide} className="p-3 rounded-full border border-zinc-700 hover:bg-white hover:text-black transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        // Logic to highlight current dot
                        idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-zinc-800'
                      }`}
                    ></div>
                ))}
            </div>

            <button onClick={nextSlide} className="p-3 rounded-full border border-zinc-700 hover:bg-white hover:text-black transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;