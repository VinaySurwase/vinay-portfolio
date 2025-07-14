"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring, useAnimationFrame } from "framer-motion";

interface Connection {
  id: string;
  start: { x: number; y: number };
  end: { x: number; y: number };
  strength: number;
}

const LiquidCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [nodes, setNodes] = useState<Array<{ x: number; y: number; id: number }>>([]);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const nodeId = useRef(0);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Different spring configs for different elements
  const liquidConfig = { damping: 30, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, liquidConfig);
  const cursorYSpring = useSpring(cursorY, liquidConfig);

  const createNode = useCallback((x: number, y: number) => ({
    id: nodeId.current++,
    x: x + (Math.random() - 0.5) * 40,
    y: y + (Math.random() - 0.5) * 40,
  }), []);

  const updateCursor = useCallback((e: MouseEvent) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);

    // Create nodes occasionally
    if (Math.random() < 0.1) {
      setNodes(prev => [
        ...prev.slice(-8),
        createNode(e.clientX, e.clientY)
      ]);
    }
  }, [cursorX, cursorY, createNode]);

  const handleMouseDown = useCallback(() => {
    setIsClicking(true);
    // Create burst of nodes
    const burstNodes = Array.from({ length: 6 }, () => 
      createNode(mousePos.current.x, mousePos.current.y)
    );
    setNodes(prev => [...prev.slice(-4), ...burstNodes]);
  }, [createNode]);

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

  // Animate nodes and create connections
  useAnimationFrame(() => {
    setNodes(prev => 
      prev
        .map(node => ({
          ...node,
          x: node.x + (mousePos.current.x - node.x) * 0.02,
          y: node.y + (mousePos.current.y - node.y) * 0.02,
        }))
        .filter((_, index) => index < 10) // Keep only recent nodes
    );

    // Create connections between nearby nodes
    setConnections(prev => {
      const newConnections: Connection[] = [];
      
      nodes.forEach((nodeA, i) => {
        nodes.forEach((nodeB, j) => {
          if (i < j) {
            const distance = Math.sqrt(
              Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2)
            );
            
            if (distance < 100) {
              newConnections.push({
                id: `${nodeA.id}-${nodeB.id}`,
                start: { x: nodeA.x, y: nodeA.y },
                end: { x: nodeB.x, y: nodeB.y },
                strength: Math.max(0, 1 - distance / 100)
              });
            }
          }
        });
      });
      
      return newConnections;
    });
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

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block custom-cursor">
      {/* Neural Network Connections */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((connection) => (
          <motion.line
            key={connection.id}
            x1={connection.start.x}
            y1={connection.start.y}
            x2={connection.end.x}
            y2={connection.end.y}
            stroke="url(#connectionGradient)"
            strokeWidth={connection.strength * 2}
            opacity={connection.strength * 0.6}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: node.x,
            top: node.y,
            background: "radial-gradient(circle, #a855f7, #ec4899)",
            boxShadow: "0 0 10px #a855f7",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 500 }}
        />
      ))}

      {/* Main Liquid Cursor */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        {/* Liquid Blob */}
        <motion.div
          animate={{
            scale: isClicking ? [1, 1.5, 0.8, 1.2] : isHovering ? 1.3 : 1,
            borderRadius: isClicking 
              ? ["50%", "30%", "60%", "40%", "50%"] 
              : isHovering 
                ? ["50%", "40%", "60%", "50%"]
                : ["50%", "45%", "55%", "50%"],
          }}
          transition={{
            scale: { 
              duration: isClicking ? 0.6 : 2, 
              repeat: isClicking ? 0 : Infinity,
              ease: "easeInOut"
            },
            borderRadius: { 
              duration: isClicking ? 0.8 : 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="w-8 h-8 relative"
        >
          {/* Main blob shape */}
          <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 shadow-lg" 
               style={{ 
                 filter: `blur(${isClicking ? 2 : 0.5}px) brightness(${isHovering ? 1.2 : 1})`,
               }} 
          />
          
          {/* Inner glow */}
          <motion.div
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"
          />
        </motion.div>

        {/* Orbital Elements */}
        {isHovering && (
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3"
                animate={{
                  rotate: [0, 360],
                  x: Math.cos((Date.now() * 0.001) + (i * Math.PI * 2) / 3) * 25,
                  y: Math.sin((Date.now() * 0.001) + (i * Math.PI * 2) / 3) * 25,
                }}
                transition={{
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                  x: { duration: 3, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "linear" },
                }}
              >
                <motion.div
                  animate={{
                    scale: [0.5, 1, 0.5],
                    borderRadius: ["50%", "30%", "50%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-400"
                  style={{
                    boxShadow: "0 0 15px #06b6d4",
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Energy Waves */}
        <motion.div
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.4, 0, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-16 h-16 -translate-x-4 -translate-y-4 border border-purple-400/30"
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          }}
        />
      </motion.div>
    </div>
  );
};

export default LiquidCursor;
