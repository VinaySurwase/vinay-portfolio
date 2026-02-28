"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { heroContainer, fadeUpItem, profileImage } from "./motion.config";

const phrases = [
  "Computer Science Engineering Student",
  "Software Developer & AI Enthusiast",
  "Competitive Programmer"
];

export default function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Profile Image */}
        <motion.div variants={profileImage} className="mb-8">
          <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-accent/20 ring-offset-4 ring-offset-bg-primary">
            <Image
              src="/profile/profile_picture.jpeg"
              alt="Vinay Surwase"
              fill
              className="object-cover"
              priority
              sizes="160px"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUpItem}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 tracking-tight"
        >
          Hi, I&apos;m Vinay Surwase
        </motion.h1>

        {/* Subtitle with Slide Animation */}
        <motion.div
          variants={fadeUpItem}
          className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem] flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentPhraseIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent inline-block"
            >
              {phrases[currentPhraseIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUpItem}
          className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about building elegant solutions to complex problems. 
          Focused on creating impactful software through clean code, 
          thoughtful design, and continuous learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUpItem}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="https://github.com/VinaySurwase"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View GitHub
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-3 glass text-text-primary font-medium rounded-full hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
