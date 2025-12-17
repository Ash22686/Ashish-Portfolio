import React from 'react';
import { Github, Linkedin, Mail, Instagram, GraduationCap, MapPin, School, Award, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Sub-Component: Education Card ---
const EducationCard = ({ isCollege, title, years, location, details }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      className="relative w-full h-full rounded-2xl p-10 group
        bg-zinc-900/50 border border-zinc-800
        hover:border-white/40 hover:bg-zinc-900
        transition-all duration-300 flex flex-col"
    >
      <div className="flex flex-col gap-6 items-start h-full">
        
        <div className="flex w-full justify-between items-start">
           {/* Icon Circle - Larger */}
          <div className="shrink-0 p-5 rounded-full bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            {isCollege ? 
              <GraduationCap className="w-8 h-8" /> : 
              <School className="w-8 h-8" />
            }
          </div>
          
          {/* Year - moved to top right for better layout in horizontal mode */}
          <div className="flex items-center gap-2 text-gray-400 font-mono uppercase tracking-wider text-base border border-zinc-700 px-4 py-2 rounded-full">
            <Award className="w-5 h-5 text-white" />
            <span>{years}</span>
          </div>
        </div>

        {/* Content */}
        <div className="w-full mt-2">
          <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-gray-200 transition-colors leading-tight">
            {title}
          </h3>

          <div className="flex items-center gap-2 text-gray-400 my-6 text-lg">
            <MapPin className="w-5 h-5 text-white" />
            <span>{location}</span>
          </div>

          <div className="space-y-4 pt-6 border-t border-zinc-800">
            {details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 mt-2.5 rounded-full bg-white shadow-[0_0_5px_white] shrink-0" />
                <span className="text-gray-300 text-lg md:text-xl leading-relaxed">{detail}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component: About ---
const About = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-8 h-8" />,
      url: 'https://github.com/Ash22686',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-8 h-8" />,
      url: 'https://www.linkedin.com/in/ashish-kumar-457932314/',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-8 h-8" />,
      url: 'https://instagram.com/ashish_k22',
    },
    {
      name: 'Email',
      icon: <Mail className="w-8 h-8" />,
      url: 'mailto:ashishkumar04415@gmail.com',
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-black text-white py-24 px-6 md:px-12 border-t border-white/20">
      
      <div className="w-full mx-auto">
        
        {/* 1. Header Section */}
        <div className="mb-32 flex flex-col items-center text-center">
          
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10"
          >
            About <span className="text-gray-500">Me</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl text-xl md:text-3xl text-gray-400 leading-relaxed font-light"
          >
            Passionate developer crafting exceptional digital experiences. 
            Focused on building scalable, user-centric applications that make a difference.
          </motion.p>
          
          {/* Social Icons - Larger */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex justify-center gap-10"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-all duration-300 transform hover:scale-110 hover:text-white"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* Resume Button - Larger */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <a
              href="https://www.dropbox.com/scl/fi/81abvx1w910p9exex1o8i/Resume.pdf?rlkey=c71t44oitoxwuo9me8jukkolk&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full text-xl font-bold hover:bg-zinc-800 hover:text-white border border-transparent hover:border-zinc-600 transition-all duration-300"
            >
              <FileText className="w-6 h-6 group-hover:text-white transition-colors" />
              View Resume
            </a>
          </motion.div>
        </div>

        {/* 2. Education Section - Horizontal Split */}
        <div className="w-full">
          <motion.h3 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white mb-12 border-l-8 border-white pl-6"
          >
            Educational Journey
          </motion.h3>

          {/* Grid: 1 column on mobile, 2 columns on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <EducationCard
              isCollege={true}
              title="Vishwakarma Institute of Technology"
              years="2023 - 2027"
              location="Pune, Maharashtra, India"
              details={[
                "Bachelor's in Technology - Computer Engineering",
                "Currently Pursuing",
                "Active member of Coding Club & Technical Society"
              ]}
            />

            <EducationCard
              isCollege={false}
              title="Army Public School"
              years="2009 - 2023"
              location="Udhampur, Jammu and Kashmir, India"
              details={[
                "Class 12 (CBSE) - 93% (Stream: Science with Math)",
                "Class 10 (CBSE) - 95%",
                "School House Captain & Debate Team Lead"
              ]}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;