"use client";

import MotionWrapper from "./MotionWrapper";
import { sectionContainer, fadeUpItem } from "./motion.config";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-bg-secondary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse will-change-[opacity]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse will-change-[opacity]" style={{ animationDelay: '1s' }} />
      </div>
      
      <MotionWrapper variants={sectionContainer} className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <MotionWrapper variants={fadeUpItem}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 text-center">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-center text-text-secondary text-lg max-w-2xl mx-auto mb-16">
            Building the future, one line of code at a time
          </p>
        </MotionWrapper>

        {/* Main Bio Card */}
        <MotionWrapper variants={fadeUpItem}>
          <div className="glass rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden group">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-500" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-text-primary font-medium mb-6 leading-relaxed">
                I&apos;m a Computer Science Engineering student passionate about 
                <span className="text-accent font-semibold"> solving complex problems </span>
                through elegant, efficient code.
              </p>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                My journey in technology is driven by curiosity and a commitment to continuous learning. 
                Whether it&apos;s optimizing algorithms, building scalable applications, or exploring 
                cutting-edge AI technologies, I thrive on challenges that push me to grow as a developer.
              </p>
            </div>
          </div>
        </MotionWrapper>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MotionWrapper variants={fadeUpItem}>
            <div className="glass rounded-2xl p-8 border-2 border-border hover:border-accent/50 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-accent mb-3">
                  Problem Solver
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  <span className="text-accent/70 font-semibold">400+</span> algorithmic challenges solved across competitive programming platforms
                </p>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper variants={fadeUpItem}>
            <div className="glass rounded-2xl p-8 border-2 border-border hover:border-blue-500 transition-all duration-500 group relative overflow-hidden">
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col items-center text-center h-full relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-500 mb-3">
                  Full-Stack Developer
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Crafting seamless user experiences from frontend to backend
                </p>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper variants={fadeUpItem}>
            <div className="glass rounded-2xl p-8 border-2 border-border hover:border-green-500 transition-all duration-500 group relative overflow-hidden">
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col items-center text-center h-full relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-500 mb-3">
                  AI Enthusiast
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Exploring machine learning and artificial intelligence for innovative solutions
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </MotionWrapper>
    </section>
  );
}
