import { Variants } from "framer-motion";

// Custom easing curve for smooth, natural motion
export const customEase = [0.22, 1, 0.36, 1] as const;

// Global motion configuration
export const motionConfig = {
  transition: {
    type: "spring" as const,
    damping: 30,
    stiffness: 100,
  },
  reducedMotion: {
    duration: 0.01,
  },
};

// Section container with stagger children
export const sectionContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Fade up with subtle Y movement
export const fadeUpItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
};

// Simple fade in
export const fadeInItem: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: customEase,
    },
  },
};

// Hero container with orchestrated children
export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// Profile image with scale
export const profileImage: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: customEase,
    },
  },
};

// Navbar entrance
export const navbar: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
      delay: 0.1,
    },
  },
};

// Hover lift effect
export const hoverLift = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      duration: 0.3,
      ease: customEase,
    },
  },
};

// Image zoom on hover
export const imageZoom = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: customEase,
    },
  },
};

// Contact link hover
export const contactHover = {
  rest: { x: 0 },
  hover: {
    x: 4,
    transition: {
      duration: 0.2,
      ease: customEase,
    },
  },
};

// Footer fade in
export const footerFade: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: customEase,
      delay: 0.2,
    },
  },
};

// Mobile menu variants
export const mobileMenu: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: customEase,
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: customEase,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Mobile menu item
export const mobileMenuItem: Variants = {
  closed: {
    opacity: 0,
    x: -10,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: customEase,
    },
  },
};
