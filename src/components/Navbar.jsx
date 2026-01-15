import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [introDone, setIntroDone] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  // Smooth scroll
  const handleNavClick = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Intro Timer
  useEffect(() => {
    const timer = setTimeout(() => setIntroDone(true), 900); 
    return () => clearTimeout(timer);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sections = navItems.map(item =>
      document.getElementById(item.toLowerCase())
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach(sec => sec && observer.observe(sec));
    return () => sections.forEach(sec => sec && observer.unobserve(sec));
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference">

      <div
        className={`
          flex justify-between items-center px-8 py-6
          transition-all duration-[900ms]
          ease-[cubic-bezier(.25,.8,.25,1)]
          ${introDone
            ? "opacity-100 translate-y-0 backdrop-blur-0"
            : "opacity-0 translate-y-3 backdrop-blur-sm"
          }
        `}
      >

        {/* LOGO - Changed to div to avoid Cursor "OPEN" effect */}
        <div
          onClick={(e) => handleNavClick(e, "home")}
          role="button"
          className={`
            flex items-center
            cursor-pointer
            transition-all duration-[900ms]
            ease-[cubic-bezier(.25,.8,.25,1)]
            ${introDone
              ? "translate-x-0 scale-100 opacity-100"
              : "translate-x-[35vw] scale-[1.15] opacity-0"
            }
          `}
        >
          <img
            src="./mylogo.png"
            alt="Logo"
            className="h-20 w-auto object-contain transition-opacity duration-300"
          />
        </div>

        {/* Navbar Items */}
        <div className="flex items-center gap-4">
          {navItems.map((item, index) => {
            const key = item.toLowerCase();
            const isActive = activeSection === key;

            return (
              // Changed to div to avoid Cursor "OPEN" effect
              <div
                key={item}
                onClick={(e) => handleNavClick(e, key)}
                role="button"
                style={{
                  transitionDelay: introDone ? `${index * 100}ms` : "0ms",
                }}
                className={`
                  cursor-default  /* Ensures default arrow cursor */
                  text-base font-bold uppercase tracking-widest
                  transition-all duration-[700ms]
                  ease-[cubic-bezier(.25,.8,.25,1)]
                  select-none
                  ${introDone
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                  }
                  ${isActive
                    ? "bg-white text-black py-3 px-8 rounded-full scale-105"
                    : "text-white py-3 px-4 hover:scale-110 hover:text-gray-300"
                  }
                `}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;