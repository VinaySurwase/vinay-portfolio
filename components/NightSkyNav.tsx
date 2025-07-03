"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export default function NightSkyNav() {
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < 100 || current < window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ 
        opacity: visible ? 1 : 0.9, 
        y: visible ? 0 : -10 
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 shadow-2xl">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === item.name.toLowerCase()
                  ? "text-cyan-400"
                  : "text-white/70 hover:text-white"
              }`}
              onClick={() => setActiveSection(item.name.toLowerCase())}
            >
              {activeSection === item.name.toLowerCase() && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-cyan-400/20 rounded-full border border-cyan-400/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
