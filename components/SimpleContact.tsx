"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const SimpleContact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "vinaydsurwase@gmail.com",
      href: "mailto:vinaydsurwase@gmail.com"
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 9146358569",
      href: "tel:+919146358569"
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: "GitHub",
      href: "https://github.com/VinaySurwase",
      color: "hover:text-gray-100 hover:bg-gray-800/30",
      gradient: "hover:from-gray-700 hover:to-gray-900"
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/vinay-surwase/",
      color: "hover:text-blue-400 hover:bg-blue-500/20",
      gradient: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      icon: XIcon,
      label: "X (Twitter)",
      href: "https://x.com/vinaysurwase", 
      color: "hover:text-white hover:bg-black/40",
      gradient: "hover:from-gray-800 hover:to-black"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
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
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to chat about technology? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-xl hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.label}</h4>
                  <p className="text-gray-300">{item.value}</p>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-white mb-8">Follow My Journey</h4>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    className={`w-14 h-14 bg-white/5 border border-white/20 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:border-current hover:shadow-lg ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimpleContact;
