import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

// --- PROJECT DATA ---
const projects = [
    {
    id: 3,
    title: "Kolam Kar",
    category: "Frontend / Culture",
    description: "Modern platform for creating and analyzing traditional Kolam art. Features AI-powered design generation, pattern analysis, interactive drawing canvas, and secure user authentication.",
    image: "./Kolam.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vite", "JWT"],
    github: "https://github.com/Ash22686/Kolam-Kar",
    live: "#"
  },
  
  {
    id: 7,
    title: "Authenticator",
    category: "Security / Auth",
    description: "Comprehensive MERN authentication system with email/password registration, email OTP verification, Google OAuth 2.0 sign-in, JWT session management, and secure password reset flow.",
    image: "./Authenticator.png",
    tech: ["React", "Node.js", "MongoDB", "TypeScript", "Passport.js", "JWT", "Nodemailer"],
    github: "https://github.com/Ash22686/Authenticator",
    live: "#"
  },
  {
    id: 5,
    title: "E-Waste Management",
    category: "Full Stack",
    description: "A full-stack marketplace for buying, selling and recycling electronic items with user authentication, product listings, secure payment processing, and image upload capabilities.",
    image: "./E-Waste.jpeg",
    tech: ["React", "Node.js", "MongoDB", "Express", "Cloudinary", "JWT"],
    github: "https://github.com/Ash22686/E-Waste-Management",
    live: "#"
  },
  {
    id: 2,
    title: "Fresh Connect",
    category: "Full Stack / Marketplace",
    description: "B2B marketplace connecting street food vendors with verified raw material suppliers. Features dual user roles, GSTIN verification, AI-powered trust ratings, group ordering, and automated email notifications.",
    image: "./Fresh.png",
    tech: ["React", "Node.js", "MongoDB", "Redux", "Tailwind", "Cloudinary", "Nodemailer"],
    github: "https://github.com/A-RYAN-KR/FreshConnect",
    live: "https://fresh-connect-nexus.vercel.app/"
  },
  {
    id: 1,
    title: "Farm Fusion – Agriculture Management System",
    category: "Full Stack / AgriTech",
    description: "A full-stack agriculture management platform helping farmers manage farms, crops, soil health, irrigation, and weather data. Features include soil monitoring, irrigation logging, and ML-based crop recommendations.",
    image: "./AMS.jpeg", // Ensure this image is in your public folder
    tech: ["React", "Node.js", "Express", "MySQL", "Python", "ML", "OpenWeather API"],
    github: "https://github.com/Ash22686/AMS",
    live: "#" // No live link
  },
  {
    id: 4,
    title: "Restaurant Management System",
    category: "Full Stack",
    description: "Comprehensive restaurant management solution with menu management, order processing, table reservation system, inventory tracking, and customer relationship management features.",
    image: "./Terracotta.jpeg",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/A-RYAN-KR/AshDev",
    live: "#"
  },
  {
    id: 6,
    title: "Hostel Chat",
    category: "Real-Time / Sockets",
    description: "Real-time hostel communication platform enabling instant messaging between wardens and students with UDP-inspired routing (Broadcast/Multicast/Unicast) and role-based access.",
    image: "./Hostel.png",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind", "JWT"],
    github: "https://github.com/Ash22686/Hostel-Chat",
    live: "https://hostel-chat-chi.vercel.app/"
  },
  
];

// --- PROJECT CARD ---
const ProjectCard = ({ project }) => (
  <div className="relative group w-full h-[480px] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col hover:border-zinc-600 transition-all duration-300">
    
    {/* Image */}
    <div className="relative h-[50%] overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10" />
      <img
        src={project.image}
        alt={project.title}
        onError={(e) =>
          (e.target.src =
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000")
        }
        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700"
      />

      <div className="absolute top-4 left-4 z-20">
        <span className="bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
          {project.category}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 p-6 flex flex-col justify-between bg-zinc-900 group-hover:bg-zinc-800/80 transition-colors">
      <div>
        <h3 className="text-xl font-bold uppercase tracking-wide mb-2 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-5 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-gray-400 border border-zinc-700 px-2 py-0.5 rounded bg-zinc-950/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-6 mt-5 border-t border-zinc-700 pt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-bold uppercase hover:text-gray-300"
        >
          <Github className="w-4 h-4" /> Code
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-bold uppercase hover:text-gray-300"
          >
            <ExternalLink className="w-4 h-4" /> Live
          </a>
        )}
      </div>
    </div>
  </div>
);

// --- VIEW MORE CARD ---
const ViewMoreCard = () => (
  <a
    href="https://github.com/Ash22686"
    target="_blank"
    rel="noreferrer"
    className="relative group w-full h-[480px] bg-zinc-950 border-2 border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center hover:bg-zinc-900 transition-all duration-300"
  >
    <div className="p-6 rounded-full bg-zinc-900 border border-zinc-700 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-500 mb-4">
      <Github className="w-10 h-10" />
    </div>
    <h3 className="text-xl font-black uppercase tracking-widest text-zinc-500 group-hover:text-white">
      View More
    </h3>
    <p className="text-sm font-mono text-zinc-600 mt-1 uppercase tracking-wide">
      on GitHub
    </p>
  </a>
);

// --- MAIN COMPONENT ---
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const totalItems = projects.length + 1;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-24 px-6 md:px-12 border-t border-white/20 overflow-hidden"
    >
      {/* HEADER */}
      <div className="mb-16 ml-6">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
          Selected <span className="text-gray-500">Work</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-xl ml-5">
          A showcase of projects that demonstrate my technical expertise.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ width: `${(totalItems / itemsPerPage) * 100}%` }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="px-2"
              style={{ width: `${100 / totalItems}%` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}

          <div
            className="px-2"
            style={{ width: `${100 / totalItems}%` }}
          >
            <ViewMoreCard />
          </div>
        </motion.div>
      </div>

      {/* CONTROLS */}
      <div className="flex justify-center gap-4 mt-14">
        <button
          onClick={() => setCurrentIndex((p) => (p === 0 ? maxIndex : p - 1))}
          className="p-3 rounded-full border border-zinc-700 hover:bg-white hover:text-black"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setCurrentIndex((p) => (p >= maxIndex ? 0 : p + 1))}
          className="p-3 rounded-full border border-zinc-700 hover:bg-white hover:text-black"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
