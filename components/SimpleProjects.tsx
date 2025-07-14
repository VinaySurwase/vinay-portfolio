"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiCode, FiStar } from "react-icons/fi";

const SimpleProjects = () => {
  const projects = [
    {
      id: 1,
      title: "UkiyoFusion: AI Art Transformer",
      description: "Revolutionary deep learning application that transforms modern photographs into traditional Japanese Ukiyo-e masterpieces using fine-tuned Stable Diffusion with LoRA.",
      image: "/Ancient.png",
      technologies: ["PyTorch", "Stable Diffusion", "LoRA", "HuggingFace", "Python"],
      github: "https://github.com/VinaySurwase/UkiyoFusion",
      featured: true,
    },
    {
      id: 2,
      title: "FlakeSense: Smart QA Platform",
      description: "Intelligent testing platform that identifies and classifies flaky tests in software applications. Features real-time dashboard, automated test failure categorization, and comprehensive CI/CD pipeline integration.",
      image: "/FlakeSense.png",
      technologies: ["Python", "Flask", "React", "TypeScript", "PyTest", "Jest"],
      github: "https://github.com/VinaySurwase/FlakeSense",
      featured: false,
    },
    {
      id: 3,
      title: "SmartBot: Artistic Robotics",
      description: "Intelligent robotics project with dual-mode operation featuring WiFi-controlled choreography and autonomous navigation.",
      image: "/Smartbot.png",
      technologies: ["NodeMCU", "Arduino", "IoT", "C++", "WiFi"],
      github: "https://github.com/VinaySurwase/Wifi-Control-Line-Follower-Bot-using-NodeMCU",
      featured: false,
    },
    // {
    //   id: 4,
    //   title: "Creative Portfolio Canvas",
    //   description: "This very portfolio represents the perfect fusion of technical expertise and artistic vision built with cutting-edge web technologies.",
    //   image: "/portfolio-preview.png",
    //   technologies: ["Next.js", "React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    //   github: "#",
    //   featured: false,
    // },
  ];

  return (
    <section id="projects" className="py-20 px-4">
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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Exploring the intersection of technology and creativity through innovative projects 
            that push the boundaries of what's possible.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative group overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1 px-3 py-1 bg-purple-600 rounded-full text-xs text-white font-medium">
                  <FiStar className="w-3 h-3" />
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  {project.id === 1 ? "🎨" : project.id === 2 ? "🧪" : project.id === 3 ? "🤖" : "💻"}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-md border border-purple-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-md">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    <FiGithub className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/VinaySurwase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <FiCode className="w-5 h-5" />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleProjects;
