"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MotionWrapper from "./MotionWrapper";
import { sectionContainer, fadeUpItem, hoverLift, imageZoom } from "./motion.config";

const projects = [
  {
    title: "AI-Powered Real-Time Emergency Detection",
    shortDescription: "Real-time AI system identifying fire, smoke, and accidents with instant alerts.",
    description:
      "An end-to-end, real-time AI-powered emergency detection system designed to identify fire, smoke, and road accidents at scale. The solution combines high-performance computer vision with a low-latency backend for live video processing and alert generation. Integrated cloud-based media handling and instant messaging notifications automate incident reporting, significantly reducing manual monitoring while enabling fast and reliable emergency response.",
    image: "/projects/AI_Powered_Real_Time_Emergency Detection.png",
    tech: ["Python", "YOLOv8", "OpenCV", "Flask", "Cloudinary API", "Twilio API"],
    github: "https://github.com/VinaySurwase/smart-surveillance-system",
    live: "https://github.com/VinaySurwase/smart-surveillance-system",
  },
  {
    title: "UkiyoFusion: AI-Powered Image-to-Ukiyo-e Converter",
    shortDescription: "Transform modern photos into traditional Japanese Ukiyo-e art using AI.",
    description:
      "Revolutionary deep learning application that transforms modern photographs into traditional Japanese Ukiyo-e masterpieces using fine-tuned Stable Diffusion with LoRA. This project preserves the artistic essence of centuries-old art forms while making them accessible through cutting-edge AI technology.",
    image: "/projects/UkiyoFusion.png",
    tech: ["PyTorch", "HuggingFace Diffusers", "Transformers", "PEFT", "ControlNet", "Google Colab"],
    github: "https://github.com/VinaySurwase/UkiyoFusion",
    live: "https://github.com/VinaySurwase/UkiyoFusion",
  },
  {
    title: "SmartBot: Artistic Robotics",
    shortDescription: "Intelligent robot with WiFi control and autonomous navigation capabilities.",
    description:
      "Intelligent robotics project that combines technical precision with artistic movement patterns. Features dual-mode operation with WiFi-controlled choreography and autonomous navigation, demonstrating that robotics can be both functional and beautiful.",
    image: "/projects/SmartBot.png",
    tech: ["NodeMCU", "Arduino IDE", "IoT", "Android Development", "C++", "WiFi", "Sensor Fusion"],
    github: "https://github.com/VinaySurwase/Wifi-Control-Line-Follower-Bot-using-NodeMCU",
    live: "https://github.com/VinaySurwase/Wifi-Control-Line-Follower-Bot-using-NodeMCU",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-6">
      <MotionWrapper variants={sectionContainer} className="max-w-6xl mx-auto">
        {/* Section Title */}
        <MotionWrapper variants={fadeUpItem}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 text-center">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-16" />
        </MotionWrapper>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} variants={fadeUpItem}>
              <motion.div
                variants={hoverLift}
                initial="rest"
                whileHover="hover"
                onClick={() => setSelectedProject(index)}
                className="glass rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer"
              >
                {/* Project Image */}
                <motion.div
                  variants={imageZoom}
                  className="relative h-48 bg-bg-secondary overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed flex-1">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack - Show first 3 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 text-accent text-xs rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-white/5 text-accent text-xs rounded-full border border-border">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 px-4 py-2 bg-white/5 text-text-primary text-sm font-medium rounded-lg hover:bg-white/10 transition-colors duration-300 text-center border border-border"
                    >
                      Code
                    </a>
                    <a
                      href={project.live}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors duration-300 text-center"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            </MotionWrapper>
          ))}
        </div>

        {/* Modal for Full Description */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-bg-primary/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 max-w-3xl w-full max-h-[80vh] overflow-y-auto border-2 border-accent/50 shadow-2xl relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Project Details */}
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  {projects[selectedProject].title}
                </h3>
                
                <p className="text-base text-text-secondary leading-relaxed mb-6">
                  {projects[selectedProject].description}
                </p>

                {/* All Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-accent/10 text-accent text-sm rounded-full border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={projects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-white/5 text-text-primary font-medium rounded-lg hover:bg-white/10 transition-colors duration-300 text-center border border-border flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View Code
                  </a>
                  <a
                    href={projects[selectedProject].live}
                    className="flex-1 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors duration-300 text-center flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionWrapper>
    </section>
  );
}
