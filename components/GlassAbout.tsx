"use client";

import React from "react";
import { motion } from "framer-motion";

const aboutCards = [
  {
    id: 1,
    title: "Student & Developer",
    description: "Currently pursuing my degree at IIITDM Jabalpur while building innovative projects and exploring the latest technologies.",
    icon: "🎓",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "AI Enthusiast", 
    description: "Passionate about artificial intelligence, machine learning, and creating intelligent solutions that solve real-world problems.",
    icon: "🤖",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    description: "Experienced in both frontend and backend development with modern frameworks and cloud technologies.",
    icon: "💻",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 4,
    title: "Problem Solver",
    description: "Love tackling complex challenges and finding elegant solutions through code, creativity, and continuous learning.",
    icon: "🧩",
    gradient: "from-orange-500/20 to-red-500/20"
  }
];

export default function GlassAbout() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                ABOUT
              </span>
              <span className="text-white ml-2 sm:ml-4">ME</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4"
          >
            Exploring the intersection of technology and creativity
          </motion.p>
        </motion.div>

        {/* Glass Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 2,
                boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)"
              }}
              className="group relative"
            >
              {/* Glass Card */}
              <div className={`relative h-72 sm:h-80 md:h-96 lg:h-80 xl:h-96 bg-gradient-to-br ${card.gradient} backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-500 group-hover:border-cyan-400/30`}>
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 group-hover:drop-shadow-lg transition-all duration-300"
                  >
                    {card.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 flex-grow">
                    {card.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
                  <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { number: "10+", label: "Projects" },
              { number: "18+", label: "Technologies" },
              { number: "2+", label: "Years Coding" },
              { number: "∞", label: "Learning" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-cyan-400/30 transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1 sm:mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm md:text-base text-white/70 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
