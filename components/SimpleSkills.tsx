"use client";

import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiGitBranch, FiCpu, FiZap } from "react-icons/fi";

const SimpleSkills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: FiCode,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
      ]
    },
    {
      title: "Backend",
      icon: FiDatabase,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js" },
        { name: "Python" },
        { name: "Express.js" },
        { name: "Django" },
      ]
    },
    {
      title: "Database",
      icon: FiDatabase,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "Firebase" },
      ]
    },
    {
      title: "AI/ML",
      icon: FiCpu,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "PyTorch" },
        { name: "TensorFlow" },
        { name: "Stable Diffusion" },
        { name: "Computer Vision" },
      ]
    },
    {
      title: "Tools",
      icon: FiGitBranch,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Git & GitHub" },
        { name: "Docker" },
        { name: "VS Code" },
        { name: "Linux" },
      ]
    },
    {
      title: "Design",
      icon: FiZap,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "UI/UX Design" },
        { name: "Figma" },
        { name: "Digital Art" },
        { name: "Typography" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning development, design, and emerging technologies, 
            all unified by a passion for innovation and continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05), 
                      duration: 0.6 
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}

      </div>
    </section>
  );
};

export default SimpleSkills;
