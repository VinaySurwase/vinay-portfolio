"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "UkiyoFusion: AI Image Converter",
    description: "Deep learning application that converts modern images into traditional Japanese Ukiyo-e artwork using Stable Diffusion and LoRA fine-tuning.",
    image: "/Ancient.png",
    technologies: ["PyTorch", "Stable Diffusion", "LoRA", "Hugging Face"],
    link: "https://github.com/VinaySurwase/UkiyoFusion",
    gradient: "from-purple-500/20 to-pink-500/20",
    glowColor: "purple"
  },
  {
    id: 2,
    title: "SmartBot: WiFi + Line-Following Robot",
    description: "A dual-mode robot that combines manual WiFi-based control using an Android app with autonomous line-following via IR sensors. Built on NodeMCU.",
    image: "/Smartbot.png",
    technologies: ["NodeMCU", "Arduino", "Android", "WiFi", "IR Sensors"],
    link: "https://github.com/VinaySurwase/Wifi-Control-Line-Follower-Bot-using-NodeMCU",
    gradient: "from-green-500/20 to-emerald-500/20",
    glowColor: "emerald"
  }
];

export default function FloatingProjects() {
  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">FEATURED</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ml-4">
              PROJECTS
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Showcasing my innovative solutions crafted with cutting-edge technology
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Floating Effect */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotateX: [0, 5, 0] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className={`relative bg-gradient-to-br ${project.gradient} backdrop-blur-md border border-white/10 rounded-2xl p-2 group-hover:border-${project.glowColor}-400/50 transition-all duration-500`}
                  >
                    <div className="relative h-80 rounded-xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Scanning Effect */}
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          repeatDelay: 2,
                          ease: "easeInOut" 
                        }}
                        className={`absolute inset-0 bg-gradient-to-r from-transparent via-${project.glowColor}-400/30 to-transparent w-20`}
                      />
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r from-${project.glowColor}-500/0 via-${project.glowColor}-500/50 to-${project.glowColor}-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
                  </motion.div>
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                {/* Project Number */}
                <div className={`text-6xl font-bold bg-gradient-to-r from-${project.glowColor}-400 to-${project.glowColor}-600 bg-clip-text text-transparent opacity-50`}>
                  0{project.id}
                </div>

                {/* Title */}
                <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <p className="text-lg text-white/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-4 py-2 bg-${project.glowColor}-500/20 border border-${project.glowColor}-400/30 rounded-full text-${project.glowColor}-300 font-medium backdrop-blur-sm`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 0 30px ${project.glowColor === 'purple' ? '#a855f7' : project.glowColor === 'cyan' ? '#06b6d4' : '#10b981'}`
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-${project.glowColor}-500 to-${project.glowColor}-600 text-white font-semibold rounded-full border border-${project.glowColor}-400/50 backdrop-blur-sm transition-all duration-300`}
                >
                  <span>View Project</span>
                  <motion.svg
                    whileHover={{ x: 5 }}
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="https://github.com/VinaySurwase"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
