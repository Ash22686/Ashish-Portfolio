import React from 'react';
import { motion } from 'framer-motion';

// --- Skill Data ---
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
    ]
  }
];

// --- Skill Card Component ---
const SkillCard = ({ name, icon }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center justify-center p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 group cursor-pointer"
  >
    {/* 
       The CSS Filter trick:
       grayscale(100%) -> removes color
       brightness(0) -> turns it black
       invert(100%) -> turns it white
       group-hover:filter-none -> restores original color on hover
    */}
    <img 
      src={icon} 
      alt={name} 
      className="w-12 h-12 mb-3 object-contain filter grayscale brightness-0 invert opacity-70 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
    />
    <span className="text-gray-400 font-mono text-sm uppercase tracking-wider group-hover:text-white transition-colors">
      {name}
    </span>
  </motion.div>
);

// --- Main Component ---
const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-black text-white py-24 px-6 md:px-12 border-t border-white/20">
      
      <div className="w-full mx-auto">
        
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8"
          >
            Technical <span className="text-gray-500">Skills</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl text-xl md:text-2xl text-gray-400 font-light"
          >
            The technologies and tools I use to bring ideas to life.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-40">
          
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col h-full"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-8 border-l-4 border-white pl-4">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <SkillCard key={i} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;