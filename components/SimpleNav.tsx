"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const SimpleNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              VS
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`transition-colors duration-300 font-medium relative group ${
                      isActive 
                        ? "text-purple-400" 
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          x: isOpen ? "0%" : "100%" 
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 bottom-0 w-80 bg-slate-950/95 backdrop-blur-md border-l border-white/10 z-40 md:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="pt-20 px-6">
          <div className="space-y-6">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0, 
                    x: isOpen ? 0 : 50 
                  }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left text-xl transition-colors duration-300 py-3 border-b border-white/10 ${
                    isActive 
                      ? "text-purple-400" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  );
};

export default SimpleNav;
