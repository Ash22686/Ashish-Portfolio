/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // 1. Instant Mouse Tracking
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 2. Detect Hover
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      animate={{ x: mousePosition.x, y: mousePosition.y }}
      transition={{ type: "tween", ease: "linear", duration: 0 }} // Zero latency for precision
    >
      {/* 1. The Dot (Always Visible) */}
      <div className="absolute w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_white]"></div>

      {/* 2. The "OPEN" Label (Only on Hover) */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.8 }}
            animate={{ opacity: 1, x: 15, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.8 }}
            className="absolute top-[-8px] left-[5px] bg-white text-black px-2 py-1 text-[9px] font-black tracking-widest uppercase rounded-sm"
          >
            OPEN
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Cursor;