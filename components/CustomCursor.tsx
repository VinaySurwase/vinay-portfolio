"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring, useAnimationFrame } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
}

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });
  
  const lastMousePos = useRef({ x: 0, y: 0 });
  const particleId = useRef(0);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Colors for different states
  const colors = [
    '#8b5cf6', '#a855f7', '#c084fc', '#e879f9', 
    '#f472b6', '#fb7185', '#06b6d4', '#0891b2'
  ];

  const createParticle = useCallback((x: number, y: number, intensity: number = 1) => {
    return {
      id: particleId.current++,
      x,
      y,
      vx: (Math.random() - 0.5) * 4 * intensity,
      vy: (Math.random() - 0.5) * 4 * intensity,
      life: 1,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  }, []);

  const updateCursor = useCallback((e: MouseEvent) => {
    const newX = e.clientX;
    const newY = e.clientY;
    
    // Calculate velocity
    const vx = newX - lastMousePos.current.x;
    const vy = newY - lastMousePos.current.y;
    setMouseVelocity({ x: vx, y: vy });
    
    lastMousePos.current = { x: newX, y: newY };
    
    cursorX.set(newX);
    cursorY.set(newY);
    
    // Create particles based on movement intensity
    const speed = Math.sqrt(vx * vx + vy * vy);
    if (speed > 2 && Math.random() < 0.3) {
      setParticles(prev => [
        ...prev.slice(-15),
        createParticle(newX, newY, Math.min(speed / 10, 2))
      ]);
    }
  }, [cursorX, cursorY, createParticle]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    setIsClicking(true);
    // Burst of particles on click
    const burstParticles = Array.from({ length: 12 }, () => 
      createParticle(e.clientX, e.clientY, 3)
    );
    setParticles(prev => [...prev.slice(-8), ...burstParticles]);
  }, [createParticle]);

  const handleMouseUp = useCallback(() => setIsClicking(false), []);
  
  const handleMouseEnter = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    if (target.matches('a, button, [role="button"], .cursor-pointer, input, textarea, select, .group')) {
      setIsHovering(true);
    }
  }, []);

  const handleMouseLeave = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    if (target.matches('a, button, [role="button"], .cursor-pointer, input, textarea, select, .group')) {
      setIsHovering(false);
    }
  }, []);

  // Animate particles
  useAnimationFrame(() => {
    setParticles(prev => 
      prev
        .map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vx: particle.vx * 0.98,
          vy: particle.vy * 0.98,
          life: particle.life - 0.02,
          size: particle.size * 0.99
        }))
        .filter(particle => particle.life > 0 && particle.size > 0.1)
    );
  });

  useEffect(() => {
    setMounted(true);
    
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [updateCursor, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave]);

  if (!mounted) return null;

  const velocity = Math.sqrt(mouseVelocity.x ** 2 + mouseVelocity.y ** 2);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block custom-cursor">
      {/* Dynamic Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        />
      ))}

      {/* Main Morphing Cursor */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        {/* Core Shape */}
        <motion.div
          animate={{
            scale: isClicking ? 2 : isHovering ? 1.5 : 1,
            rotate: isHovering ? 180 : 0,
            borderRadius: isClicking ? "0%" : isHovering ? "20%" : "50%",
          }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 25,
            rotate: { duration: 0.6 }
          }}
          className="relative w-6 h-6"
        >
          {/* Main gradient shape */}
          <motion.div
            animate={{
              background: isClicking 
                ? "linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0)" 
                : isHovering 
                  ? "linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4)"
                  : "linear-gradient(45deg, #a855f7, #f472b6)",
            }}
            className="w-full h-full shadow-lg"
            style={{
              filter: `blur(${velocity * 0.1}px)`,
            }}
          />
          
          {/* Velocity streaks */}
          {velocity > 5 && (
            <motion.div
              className="absolute inset-0"
              animate={{
                scaleX: Math.min(velocity / 10, 3),
                opacity: Math.min(velocity / 20, 0.8),
              }}
              style={{
                background: "linear-gradient(90deg, transparent, #a855f7, transparent)",
                transform: `rotate(${Math.atan2(mouseVelocity.y, mouseVelocity.x)}rad)`,
              }}
            />
          )}
        </motion.div>

        {/* Magnetic Orbs */}
        {isHovering && (
          <div className="absolute inset-0">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                animate={{
                  x: Math.cos((Date.now() * 0.002) + (i * Math.PI / 2)) * 20,
                  y: Math.sin((Date.now() * 0.002) + (i * Math.PI / 2)) * 20,
                  scale: [0.5, 1, 0.5],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  scale: { duration: 1, repeat: Infinity },
                  opacity: { duration: 1, repeat: Infinity },
                }}
                style={{
                  background: colors[i % colors.length],
                  boxShadow: `0 0 10px ${colors[i % colors.length]}`,
                }}
              />
            ))}
          </div>
        )}

        {/* Energy Field */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 w-12 h-12 -translate-x-3 -translate-y-3 border border-purple-400/30 rounded-full"
        />

        {/* Quantum Dots */}
        {isClicking && (
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 8) * 30,
                  y: Math.sin((i * Math.PI * 2) / 8) * 30,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CustomCursor;
