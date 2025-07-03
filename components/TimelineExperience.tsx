"use client";
import React from "react";
import { motion } from "framer-motion";

const TimelineExperience = () => {
  const experiences = [
    {
      id: 1,
      period: "2024",
      title: "AI/ML Enthusiast",
      company: "Research & Innovation",
      description: "Exploring machine learning and AI technologies. Developed advanced image processing applications, fine-tuned deep learning models like Stable Diffusion, and implemented LoRA techniques for efficient model adaptation.",
      technologies: ["Python", "PyTorch", "Stable Diffusion", "LoRA", "Computer Vision", "Hugging Face"],
      color: "from-purple-400 to-purple-600",
      bgGradient: "from-purple-900/20 to-purple-900/20"
    },
    {
      id: 2,
      period: "2024",
      title: "Frontend Developer",
      company: "Personal Projects",
      description: "Developing modern web applications using React.js, Next.js, and TypeScript. Focusing on creating responsive, interactive user interfaces with advanced animations and state management.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-400 to-cyan-400",
      bgGradient: "from-blue-900/20 to-cyan-900/20"
    },
    {
      id: 3,
      period: "2023",
      title: "Full Stack Developer",
      company: "Learning & Development",
      description: "Built full-stack applications using MERN stack. Implemented real-time features, authentication systems, and deployed applications on cloud platforms.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      color: "from-green-400 to-emerald-400",
      bgGradient: "from-green-900/20 to-emerald-900/20"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-purple-950/20 to-cyan-950/30" />
        
        {/* Floating Light Orbs */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-full"
            animate={{
              y: [0, -80, 0],
              x: [0, Math.cos(i) * 40, 0],
              scale: [0.5, 1.2, 0.5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            style={{
              left: `${15 + i * 7}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}

        {/* Gentle Sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-cyan-300/50 rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Experience Timeline
          </h2>
          <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
            A journey through my development path, from learning fundamentals to building complex applications
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-cyan-400 to-blue-400 opacity-30" />
          
          {/* Animated Pulse Along Timeline */}
          <motion.div
            animate={{ y: [-20, 800] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
          />

          {/* Experience Items */}
          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Timeline Node */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} shadow-lg`}>
                    <div className="w-full h-full rounded-full border-2 border-white/20 bg-gradient-to-br from-white/20 to-transparent" />
                  </div>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color}`}
                  />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? 5 : -5,
                  }}
                  className={`w-full max-w-md ${index % 2 === 0 ? 'mr-auto pr-12' : 'ml-auto pl-12'}`}
                >
                  <div className={`relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300`}>
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.bgGradient} opacity-0 hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Glowing Border Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.color} opacity-0 hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                    
                    <div className="relative z-10">
                      {/* Period */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-black text-sm font-bold mb-4`}
                      >
                        {exp.period}
                      </motion.div>

                      {/* Title & Company */}
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className={`text-lg bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-semibold mb-4`}>
                        {exp.company}
                      </p>

                      {/* Description */}
                      <p className="text-blue-200/80 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + techIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-sm font-medium border border-cyan-400/30 hover:border-cyan-400/60 transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400/60 rounded-full blur-sm" />
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400/40 rounded-full blur-sm" />
                  </div>
                </motion.div>

                {/* Connection Line to Timeline */}
                <div className={`absolute top-1/2 ${index % 2 === 0 ? 'left-1/2 ml-3' : 'right-1/2 mr-3'} w-12 h-0.5 bg-gradient-to-r ${exp.color} opacity-50`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-6 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"
            />
          </div>
          <p className="mt-4 text-cyan-300 font-medium">The journey continues...</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineExperience;
