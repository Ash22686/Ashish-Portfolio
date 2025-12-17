import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  // Smooth scroll on click
  const handleNavClick = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll spy using IntersectionObserver
  useEffect(() => {
    const sections = navItems.map(item =>
      document.getElementById(item.toLowerCase())
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
      <div className="flex justify-between items-center px-8 py-6">

        {/* LOGO (replaces toggle button) */}
        <button
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center"
        >
          <img
            src="./mylogo.png"
            alt="Logo"
            className="h-20 w-auto object-contain hover:opacity-80 transition-opacity"
          />
        </button>

        {/* Nav Items */}
        <div className="flex items-center gap-4">
          {navItems.map(item => {
            const itemKey = item.toLowerCase();
            const isActive = activeSection === itemKey;

            return (
              <button
                key={item}
                onClick={e => handleNavClick(e, itemKey)}
                className={`
                  relative text-base font-bold uppercase tracking-widest
                  transition-all duration-300 ease-in-out
                  ${isActive
                    ? "bg-white text-black py-3 px-8 rounded-full scale-105"
                    : "text-white py-3 px-4 hover:text-gray-300 hover:scale-110"
                  }
                `}
              >
                {item}
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
