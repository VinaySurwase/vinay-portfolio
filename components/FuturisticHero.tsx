"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FuturisticHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 sm:space-y-8 text-center lg:text-left"
        >
          {/* Glitch Effect Title */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                VINAY
              </span>
              <br />
              <span className="text-white">SURWASE</span>
            </motion.h1>
            
            {/* Glitch lines */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <motion.div
                animate={{ 
                  x: [0, 2, -2, 0],
                  opacity: [0, 1, 0, 1, 0] 
                }}
                transition={{ 
                  duration: 0.2, 
                  repeat: Infinity, 
                  repeatDelay: 3 
                }}
                className="absolute top-0 left-0 w-full h-full bg-cyan-400/20"
                style={{ clipPath: 'polygon(0 40%, 100% 40%, 100% 42%, 0 42%)' }}
              />
            </div>
          </div>

          {/* Typing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-cyan-400">
              <span className="text-base sm:text-lg">&gt;</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-base sm:text-lg font-mono"
              >
                Full Stack Developer_
              </motion.span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-purple-400">
              <span className="text-base sm:text-lg">&gt;</span>
              <span className="text-base sm:text-lg font-mono">AI Enthusiast</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-blue-400">
              <span className="text-base sm:text-lg">&gt;</span>
              <span className="text-base sm:text-lg font-mono">IIITDM Jabalpur Student</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-base sm:text-lg text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Crafting digital experiences with cutting-edge technology. 
            Passionate about AI, web development, and creating innovative solutions 
            that push the boundaries of what&apos;s possible.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px cyan" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full border border-cyan-400/50 backdrop-blur-sm transition-all duration-300 text-center"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-center"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Futuristic Profile */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Clean Glow Effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-full blur-xl" />
            
            {/* Simple Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-cyan-400/30 rounded-full"
            />
            
            {/* Profile Image Container */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-cyan-400/40 backdrop-blur-sm bg-gradient-to-br from-cyan-400/10 to-purple-600/10">
              <Image
                src="/Vinay-Profile-2.jpeg"
                alt="Vinay Surwase"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5" />
              
              {/* Simple Scanning Effect */}
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-16"
              />
            </div>

            {/* Minimal Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 180, 360] 
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
              className="absolute -top-4 -right-4 w-8 h-8 border border-cyan-400/50 rounded-lg backdrop-blur-sm bg-cyan-400/10"
            />
            
            <motion.div
              animate={{ 
                y: [0, 8, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                y: { duration: 2.5, repeat: Infinity },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="absolute -bottom-4 -left-4 w-6 h-6 border border-purple-400/50 rounded-full backdrop-blur-sm bg-purple-400/10"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-white/50"
        >
          <span className="text-sm font-mono">SCROLL</span>
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
