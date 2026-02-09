"use client";

import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { sectionContainer, fadeUpItem, hoverLift } from "./motion.config";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-bg-secondary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <MotionWrapper variants={sectionContainer} className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <MotionWrapper variants={fadeUpItem}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 text-center">
            Competitive Programming
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-8" />
        </MotionWrapper>

        {/* Description */}
        <MotionWrapper variants={fadeUpItem}>
          <p className="text-center text-text-secondary text-lg max-w-2xl mx-auto mb-12">
            Actively participating in competitive programming contests 
            to sharpen problem-solving skills and algorithmic thinking.
          </p>
        </MotionWrapper>

        {/* Codeforces Card */}
        <MotionWrapper variants={fadeUpItem}>
          <motion.div
            variants={hoverLift}
            initial="rest"
            whileHover="hover"
            className="glass rounded-3xl p-10 md:p-14 border-2 border-border hover:border-accent transition-all duration-500 relative overflow-hidden group"
          >
            {/* Hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Platform Name */}
            <div className="text-center mb-12 relative z-10">
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center p-2">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
                    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent">
                  Codeforces
                </h3>
              </div>
            </div>

            {/* Stats - Clean Two Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto relative z-10">
              {/* Rank */}
              <div className="text-center group">
                <div className="mb-3 text-text-secondary text-sm font-medium tracking-wide uppercase">
                  Current Rank
                </div>
                <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2 group-hover:scale-105 transition-transform duration-300">
                  Specialist
                </div>
                <div className="h-1 w-20 bg-blue-500/50 rounded-full mx-auto" />
              </div>

              {/* Problems Solved */}
              <div className="text-center group">
                <div className="mb-3 text-text-secondary text-sm font-medium tracking-wide uppercase">
                  Problems Solved
                </div>
                <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2 group-hover:scale-105 transition-transform duration-300">
                  400+
                </div>
                <div className="h-1 w-20 bg-green-500/50 rounded-full mx-auto" />
              </div>
            </div>
            
            {/* View Profile Button */}
            {/* <div className="mt-12 flex justify-center">
              <a
                href="https://codeforces.com/profile/vinaysrws127"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105"
              >
                View Profile
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div> */}
          </motion.div>
        </MotionWrapper>
      </MotionWrapper>
    </section>
  );
}
