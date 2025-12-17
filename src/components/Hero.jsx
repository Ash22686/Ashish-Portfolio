import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  // --- TYPING EFFECT LOGIC ---
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Full Stack Developer", "UI / UX Designer", "Tech Enthusiast"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Speed control
      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        // Finished typing word, pause before deleting
        setTimeout(() => setIsDeleting(true), 1000); 
      } else if (isDeleting && text === '') {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id = "home" className="min-h-screen w-full flex items-center bg-black px-6 md:px-20 pt-20">
      
      <div className="w-full mx-auto flex flex-col md:flex-row pl-5">
        
        {/* LEFT SIDE: Content */}
        <div className="w-full flex flex-col justify-center space-y-8">
          
          {/* Intro - Bigger & Wider Spacing */}
          <span className="text-white text-2xl md:text-4xl font-semibold tracking-[0.14em]">
            Hi  I'm
          </span>
          
          {/* Name - Solid White */}
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-[0.1em] uppercase">
            Ashish   Kumar
          </h1>

          {/* Typing Effect */}
          <h2 className="text-3xl md:text-5xl font-bold text-white h-[40px] md:h-[60px] flex items-center">
            <span className="border-r-4 border-white pr-2">
              {text}
            </span>
          </h2>

          {/* Subtext - Bigger & Wider Spacing */}
          <p className="text-gray-400 max-w-xl text-lg md:text-xl leading-relaxed tracking-wide">
            I build accessible, pixel-perfect, and performant web experiences.
          </p>

          {/* Buttons & Socials */}
          <div className="flex flex-wrap items-center gap-6 pt-8">
            
            {/* Main CTA Button */}
            <a 
              href="#projects" 
              className="bg-white text-black font-bold py-4 px-10 rounded flex items-center gap-2 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 text-2xl"
            >
              View Projects 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>

            {/* Social Icon: GitHub */}
            <a 
              href="https://github.com/Ash22686" 
              target="_blank" 
              rel="noreferrer"
              className="w-14 h-14 border border-zinc-700 rounded flex items-center justify-center text-white hover:border-purple-500 hover:text-purple-500 transition-all hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            {/* Social Icon: LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/ashish-kumar-457932314/" 
              target="_blank" 
              rel="noreferrer"
              className="w-14 h-14 border border-zinc-700 rounded flex items-center justify-center text-white hover:border-blue-500 hover:text-blue-500 transition-all hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

          </div>

        </div>

        {/* RIGHT SIDE: Spline */}
<div className="hidden md:flex w-full md:w-1/2 h-[600px] relative pr-28 overflow-hidden">

  {/* Fixed Spline Stage */}
  <div className="absolute inset-0 flex items-center justify-center">

    {/* Hard bounded canvas */}
    <div
      className="relative"
      style={{
        width: "520px",
        height: "520px",
        transform: "scale(0.7) translateX(-80px)",
        transformOrigin: "center",
      }}
    >
      <Spline scene="https://prod.spline.design/n7yRZr9hGkWx0kqJ/scene.splinecode" />
    </div>

  </div>
</div>




      </div>

    </section>
  );
};

export default Hero;