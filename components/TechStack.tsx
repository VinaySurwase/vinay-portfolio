"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const techStackData = [
  {
    category: "Frontend",
    color: "from-blue-500 to-cyan-500",
    techs: [
      { name: "React", image: "/React.png", description: "JavaScript Library" },
      { name: "TypeScript", image: "/Typescript.png", description: "Typed JavaScript" },
      { name: "JavaScript", image: "/Javascript.png", description: "Programming Language" },
      { name: "Tailwind CSS", image: "/Tailwindcs.png", description: "CSS Framework" },
      { name: "Vite", image: "/Vite.png", description: "Build Tool" },
      { name: "Framer Motion", image: "/framer.png", description: "Animation Library" },
    ]
  },
  {
    category: "Backend",
    color: "from-green-500 to-emerald-500",
    techs: [
      { name: "Express.js", image: "/Express1.png", description: "Node.js Framework" },
      { name: "NestJS", image: "/Nest.png", description: "Node.js Framework" },
      { name: "Django", image: "/Django.png", description: "Python Framework" },
    ]
  },
  {
    category: "Database",
    color: "from-blue-500 to-indigo-600",
    techs: [
      { name: "MongoDB", image: "/Mongod.png", description: "NoSQL Database" },
      { name: "Mongoose", image: "/mongoose.png", description: "MongoDB ODM" },
    ]
  },
  {
    category: "Tools",
    color: "from-orange-500 to-red-500",
    techs: [
      { name: "GitHub", image: "/github.png", description: "Version Control" },
    ]
  }
];

export function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  return (
    <div className="flex flex-col justify-center items-center mt-16 px-4" id="tech">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center mb-4"
      >
        My <span className="text-orange-300">Ultimate</span> Tech Stack
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-sm md:text-base text-gray-400 mb-12 text-center"
      >
        Technologies I work with to bring ideas to life
      </motion.p>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {techStackData.map((category) => (
          <motion.button
            key={category.category}
            onClick={() => setSelectedCategory(category.category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category.category
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.category}
          </motion.button>
        ))}
      </div>

      {/* Tech Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {techStackData
          .find(cat => cat.category === selectedCategory)
          ?.techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-orange-300 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4 p-4 bg-white rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}

