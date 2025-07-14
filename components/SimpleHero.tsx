"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEye } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Image from "next/image";

const SimpleHero = () => {
  const handleExploreWork = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-24 overflow-hidden">
      {/* Floating Orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 mt-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
            <HiSparkles className="w-4 h-4" />
            Welcome to my digital universe
          </span>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Subtle Glow Effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg"
            />

            {/* Profile Image Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative w-36 h-36 md:w-44 md:h-44"
            >
              {/* Clean Border */}
              <div className="relative w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-full p-[3px]">
                  <Image
                    src="/Vinay-Profile-2.jpeg"
                    alt="Vinay Surwase - Full Stack Developer"
                    width={176}
                    height={176}
                    className="w-full h-full object-cover rounded-full ring-1 ring-white/10"
                    priority
                  />
                </div>
              </div>

              {/* Subtle Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-purple-400/20 rounded-full"
                style={{
                  borderImageSource: "linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.3), transparent)",
                  borderImageSlice: 1,
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
        >
          Vinay Surwase
        </motion.h1>

        {/* Dynamic Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-2xl md:text-4xl font-semibold mb-8 text-gray-300 h-16"
        >
          <TypeAnimation
            sequence={[
              "BTech Computer Science Engineer",
              2000,
              "Full Stack Developer",
              2000,
              "AI/ML Enthusiast",
              2000,
              "Digital Artist",
              2000,
              "Innovation Creator",
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
            className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Crafting digital experiences where code meets creativity. I transform ideas into 
          immersive realities using cutting-edge technologies and artistic vision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex justify-center items-center mb-16"
        >
          <button 
            onClick={handleExploreWork}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-2"
          >
            <FaEye className="w-4 h-4" />
            Explore My Work
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/VinaySurwase"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 border border-white/20 rounded-full text-gray-400 hover:text-white hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/vinaysurwase"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 border border-white/20 rounded-full text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-10 w-4 h-4 bg-purple-500 rounded-full opacity-60"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-1/4 right-10 w-6 h-6 bg-pink-500 rounded-full opacity-40"
      />
    </section>
  );
};

export default SimpleHero;
