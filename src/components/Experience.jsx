import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BadgeCheck, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: "01",
    role: "Full Stack Developer",
    company: "Herbs Magic™ Official",
    type: "Internship",
    date: "Jan 2025 - Jul 2025",
    location: "Pune / Remote",
    description: [
      "Integrated Google OAuth Authentication for secure user login.",
      "Engineered the complete shopping cart and checkout flow logic.",
      "Designed and implemented key UI components including 'Bestsellers' and 'New Arrivals' sections.",
      "Set up comprehensive tracking using Google Analytics and Mixpanel.",
      "Resolved multiple critical frontend and backend bugs to improve site stability."
    ],
    skills: ["Next.js", "React", "Node.js", "Google Analytics", "Mixpanel"],
    certificateLink: "https://www.linkedin.com/in/ashish-kumar-457932314/overlay/1756828452594/single-media-viewer/?profileId=ACoAAE_fLwMB2YMVsws9ReFH3ksBWiOQdoy_Y3Q"
  }
];

const ExperienceItem = ({ exp }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative border-t border-zinc-800 py-16 transition-all duration-500 hover:bg-zinc-900/30"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
        
        {/* LEFT: Index & Date (The 'Spec' Details) */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between shrink-0">
          <div>
            <span className="text-6xl md:text-8xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors select-none">
              {exp.id}
            </span>
            <h3 className="text-xl font-bold text-white mt-4">{exp.company}</h3>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 border border-zinc-800 px-2 py-1 rounded inline-block mt-2">
              {exp.type}
            </span>
          </div>

          <div className="mt-8 lg:mt-0 flex flex-col gap-2 text-sm font-mono text-zinc-500 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {exp.date}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {exp.location}
            </div>
          </div>
        </div>

        {/* RIGHT: Role & Details */}
        <div className="w-full lg:w-2/3 lg:pl-12 border-l-0 lg:border-l border-zinc-800 relative">
          
          {/* Glowing Line on Hover */}
          <div className="absolute left-[-1px] top-0 bottom-0 w-[1px] bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top hidden lg:block"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-500 transition-all duration-300">
              {exp.role}
            </h2>
            
            {/* Certificate Button (High Contrast) */}
            <a 
              href={exp.certificateLink}
              target="_blank" 
              rel="noreferrer"
              className="mt-6 md:mt-0 flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 rounded-full text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black hover:border-white transition-all duration-300 group/btn"
            >
              <BadgeCheck className="w-5 h-5" />
              <span>Verified Credential</span>
              <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Description Points */}
          <div className="space-y-4 mb-10">
            {exp.description.map((point, idx) => (
              <p key={idx} className="text-lg text-zinc-400 font-light leading-relaxed hover:text-white transition-colors">
                — {point}
              </p>
            ))}
          </div>

          {/* Tech Stack (Tags) */}
          <div className="flex flex-wrap gap-3">
            {exp.skills.map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-500 border border-zinc-800 rounded-full group-hover:border-zinc-600 group-hover:text-white transition-all"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-black text-white py-24 px-6 md:px-12 border-t border-white/20">
      <div className="w-full mx-auto">
        
        {/* Header */}
        <div className="mb-24">
          <motion.h2 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white/90"
          >
            Experience
          </motion.h2>
          <div className="h-2 w-24 bg-white mt-4"></div>
        </div>

        {/* Experience List */}
        <div className="flex flex-col">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} exp={exp} />
          ))}
          {/* Bottom Border for the last item */}
          <div className="border-t border-zinc-800"></div>
        </div>

      </div>
    </section>
  );
};

export default Experience;