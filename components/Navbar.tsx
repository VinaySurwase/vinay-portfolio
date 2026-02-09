"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { navbar, mobileMenu, mobileMenuItem } from "./motion.config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Minimize navbar as soon as user starts scrolling down
      const shouldMinimize = window.scrollY > 50;
      setIsMinimized(shouldMinimize);
      
      // When scrolling makes navbar minimize, hide it immediately
      if (shouldMinimize) {
        setIsNavVisible(false);
      } else {
        // When at top, show navbar
        setIsNavVisible(true);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Only handle mouse movement when navbar is minimized
      if (isMinimized) {
        const viewportWidth = window.innerWidth;
        const centerX = viewportWidth / 2;
        const navbarWidth = 600; // Approximate navbar width
        const isInHorizontalRange = Math.abs(e.clientX - centerX) < navbarWidth / 2;
        const isInVerticalRange = e.clientY < 100;
        
        setIsNavVisible(isInHorizontalRange && isInVerticalRange);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMinimized]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = () => {
    setIsOpen(false);
  };

  // Desktop Navigation
  const desktopNav = (
    <div className="hidden md:flex items-center justify-center gap-1 px-6 py-3 glass rounded-full shadow-lg shadow-black/10">
      {navLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {link.name}
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full group-hover:w-3/4 transition-all duration-300" />
        </motion.a>
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20, x: "-50%" }}
        animate={{ 
          opacity: isNavVisible ? 1 : 0,
          y: isNavVisible ? 0 : -20,
          x: "-50%"
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.22, 1, 0.36, 1]
        }}
        style={{ 
          position: 'fixed',
          top: '1.5rem',
          left: '50%',
          zIndex: 50
        }}
        className="hidden md:block"
      >
        <div className="flex items-center justify-center gap-1 px-6 py-3 glass rounded-full shadow-lg shadow-black/10 whitespace-nowrap">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.name}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full group-hover:w-3/4 transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-6 right-6 z-50 md:hidden"
      >
        {/* Mobile Header */}
        <motion.div 
          className="flex items-center justify-end glass shadow-lg shadow-black/10 rounded-full overflow-hidden ml-auto"
          animate={{
            width: isOpen ? "auto" : "56px",
            paddingLeft: isOpen ? "20px" : "14px",
            paddingRight: "14px",
            paddingTop: "14px",
            paddingBottom: "14px",
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            className="text-sm font-semibold text-text-primary whitespace-nowrap"
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              width: isOpen ? "auto" : 0,
              marginRight: isOpen ? "8px" : 0
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Menu
          </motion.span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-7 h-7 flex flex-col items-center justify-center gap-1.5 flex-shrink-0"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <motion.span
              className="w-5 h-0.5 bg-text-primary rounded-full"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-text-primary rounded-full"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-text-primary rounded-full"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        <motion.div
          variants={mobileMenu}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="overflow-hidden mt-2"
        >
          <div className="glass rounded-3xl p-4 shadow-lg shadow-black/10">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={mobileMenuItem}
                onClick={handleClick}
                className="block px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-xl transition-colors duration-200"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
