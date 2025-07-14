"use client";

import { motion } from "framer-motion";
import { FiCode, FiHeart, FiTrendingUp, FiZap } from "react-icons/fi";

const SimpleAbout = () => {
  const stats = [
    { label: "Years Learning", value: "2+", icon: "📚" },
    { label: "Projects Built", value: "7+", icon: "🛠️" },
    { label: "Technologies", value: "10+", icon: "🚀" },
    { label: "Problem Solving", value: "∞", icon: "⭐" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate Computer Science Engineering student who believes in the power 
            of technology to create beautiful and meaningful experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Building the Future, One Line at a Time
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                As a BTech Computer Science Engineering student, I'm passionate about creating 
                innovative solutions that bridge the gap between complex technology and 
                intuitive user experiences.
              </p>
              
              <p>
                My journey spans from crafting elegant algorithms to designing beautiful 
                user interfaces. I specialize in full-stack development, AI/ML applications, 
                and creating digital art through code.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or experimenting with generative AI art.
              </p>
            </div>

            {/* Skills Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: FiCode, label: "Full Stack Dev" },
                { icon: FiZap, label: "AI/ML" },
                { icon: FiTrendingUp, label: "Problem Solving" },
                { icon: FiHeart, label: "UI/UX Design" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-purple-400/50 transition-all duration-300"
                >
                  <skill.icon className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-medium">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl">
                  👨‍💻
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Vinay Surwase
                </h4>
                <p className="text-purple-300 mb-4">
                  BTech CSE Student & Developer
                </p>
                <div className="text-sm text-gray-400">
                  "Code is my canvas, innovation is my art"
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleAbout;
