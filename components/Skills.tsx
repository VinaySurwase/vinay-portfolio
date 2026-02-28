"use client";

import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { sectionContainer, fadeUpItem, hoverLift } from "./motion.config";
import Image from "next/image";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "C", icon: "/skills/c.svg" },
      { name: "C++", icon: "/skills/C++.svg" },
      { name: "Python", icon: "/skills/python.svg" },
      { name: "Java", icon: "/skills/java.svg" },
      { name: "SQL", icon: "/skills/sql.svg" },
      { name: "JavaScript", icon: "/skills/javascript.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "Kotlin", icon: "/skills/kotlin.svg" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "/skills/html5.svg" },
      { name: "CSS3", icon: "/skills/css3.svg" },
      { name: "React", icon: "/skills/react.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/skills/tailwindcss.svg" },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Flask", icon: "/skills/flask.svg" },
      { name: "Django", icon: "/skills/django.svg" },
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "REST APIs", icon: "/skills/api.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "Firebase", icon: "/skills/firebase.svg" },
    ],
  },
  {
    category: "AI/ML & Tools",
    skills: [
      { name: "PyTorch", icon: "/skills/pytorch.svg" },
      { name: "TensorFlow", icon: "/skills/tensorflow.svg" },
      { name: "HuggingFace", icon: "/skills/huggingface.svg" },
      { name: "Git", icon: "/skills/git.svg" },
      { name: "Docker", icon: "/skills/dock.svg" },
      { name: "Unix", icon: "/skills/unix.svg" },
      { name: "Bash", icon: "/skills/bash.svg" },
      { name: "VS Code", icon: "/skills/vscode.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-bg-secondary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse will-change-[opacity]" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse will-change-[opacity]" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <MotionWrapper variants={sectionContainer} className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <MotionWrapper variants={fadeUpItem}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 text-center">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-16" />
        </MotionWrapper>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Languages Card */}
            <MotionWrapper variants={fadeUpItem}>
              <motion.div
                variants={hoverLift}
                initial="rest"
                whileHover="hover"
                className="glass rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold mb-6 text-orange-500">
                  Languages
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {skillCategories[0].skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.08, y: -8 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="flex items-center justify-center p-3 bg-white/5 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 group-hover:bg-accent/10 group-hover:shadow-lg group-hover:shadow-accent/20">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-xs text-center text-text-secondary group-hover:text-accent transition-colors duration-300 font-medium line-clamp-2">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </MotionWrapper>

            {/* Backend & Databases Card */}
            <MotionWrapper variants={fadeUpItem}>
              <motion.div
                variants={hoverLift}
                initial="rest"
                whileHover="hover"
                className="glass rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold mb-6 text-cyan-500">
                  Backend & Databases
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {skillCategories[2].skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.08, y: -8 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="flex items-center justify-center p-3 bg-white/5 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 group-hover:bg-accent/10 group-hover:shadow-lg group-hover:shadow-accent/20">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-xs text-center text-text-secondary group-hover:text-accent transition-colors duration-300 font-medium line-clamp-2">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </MotionWrapper>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Frontend Card */}
            <MotionWrapper variants={fadeUpItem}>
              <motion.div
                variants={hoverLift}
                initial="rest"
                whileHover="hover"
                className="glass rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold mb-6 text-pink-500">
                  Frontend
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {skillCategories[1].skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.08, y: -8 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="flex items-center justify-center p-3 bg-white/5 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 group-hover:bg-accent/10 group-hover:shadow-lg group-hover:shadow-accent/20">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-xs text-center text-text-secondary group-hover:text-accent transition-colors duration-300 font-medium line-clamp-2">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </MotionWrapper>

            {/* AI/ML & Tools Card */}
            <MotionWrapper variants={fadeUpItem}>
              <motion.div
                variants={hoverLift}
                initial="rest"
                whileHover="hover"
                className="glass rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold mb-6 text-purple-500">
                  AI/ML & Tools
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {skillCategories[3].skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.08, y: -8 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="flex items-center justify-center p-3 bg-white/5 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 group-hover:bg-accent/10 group-hover:shadow-lg group-hover:shadow-accent/20">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-xs text-center text-text-secondary group-hover:text-accent transition-colors duration-300 font-medium line-clamp-2">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </MotionWrapper>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
}
