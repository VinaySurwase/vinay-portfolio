"use client";

import { motion } from "framer-motion";
import { FiHeart, FiCode, FiCoffee } from "react-icons/fi";

const SimpleFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Vinay Surwase
            </h3>
            <p className="text-gray-400 text-sm">
              BTech CSE Student & Developer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-white font-semibold mb-4">Built With</h4>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-md border border-purple-600/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Vinay Surwase. All rights reserved.
            </p>
            
            <motion.div
              className="flex items-center gap-2 text-gray-400 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart className="w-4 h-4 text-red-400" fill="currentColor" />
              </motion.div>
              <span>and</span>
              <FiCode className="w-4 h-4 text-purple-400" />
              <span>and lots of</span>
              <FiCoffee className="w-4 h-4 text-yellow-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/10 to-transparent pointer-events-none" />
    </footer>
  );
};

export default SimpleFooter;
