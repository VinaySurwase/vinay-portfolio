"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  viewport?: boolean;
}

export default function MotionWrapper({
  children,
  variants,
  className = "",
  delay = 0,
  viewport = true,
}: MotionWrapperProps) {
  const motionProps = viewport
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
      }
    : {
        initial: "hidden",
        animate: "visible",
      };

  return (
    <motion.div
      {...motionProps}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
