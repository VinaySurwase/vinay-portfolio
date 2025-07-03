"use client";
import React from "react";
import { motion } from "framer-motion";

const SkillsGalaxy = () => {
  const skills = [
    { name: "C++", icon: "/C++.svg", color: "from-blue-600 to-blue-400" },
    { name: "Python", icon: "/python.svg", color: "from-blue-500 to-yellow-400" },
    { name: "JavaScript", icon: "/logo-javascript.svg", color: "from-yellow-400 to-orange-400" },
    { name: "TypeScript", icon: "/ts.svg", color: "from-blue-600 to-blue-400" },
    { name: "React", icon: "/react.svg", color: "from-blue-400 to-cyan-400" },
    { name: "Next.js", icon: "/next.svg", color: "from-gray-600 to-gray-400" },
    { name: "Tailwind CSS", icon: "/tailwindcss.svg", color: "from-teal-400 to-cyan-400" },
    { name: "Framer Motion", icon: "/motion.svg", color: "from-purple-500 to-pink-500" },
    { name: "Node.js", icon: "/node-js-seeklogo.svg", color: "from-green-500 to-green-300" },
    { name: "Django", icon: "/Django.png", color: "from-green-700 to-green-500" },
    { name: "MongoDB", icon: "/mongodb.svg", color: "from-green-600 to-green-400" },
    { name: "Git", icon: "/git.svg", color: "from-orange-500 to-red-500" },
    { name: "PyTorch", icon: "/pytorch.svg", color: "from-orange-500 to-red-400" },
    { name: "Kotlin", icon: "/Kotlin.svg", color: "from-purple-600 to-orange-400" },
    { name: "Android", icon: "/android.svg", color: "from-green-500 to-green-300" },
    { name: "Firebase", icon: "/firebase.svg", color: "from-orange-500 to-yellow-400" },
    { name: "MySQL", icon: "/mysql.svg", color: "from-blue-600 to-orange-400" },
    { name: "PostgreSQL", icon: "/postgresql.svg", color: "from-blue-600 to-blue-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            Skills Galaxy
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-200/80 max-w-3xl mx-auto px-4">
            Exploring the vast universe of technologies and frameworks that power modern development
          </p>
        </motion.div>

        {/* Skills Constellation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Skill Card */}
              <div className="relative p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Skill Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center"
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                      />
                    </motion.div>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 md:mb-3">
                    {skill.name}
                  </h3>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGalaxy;
