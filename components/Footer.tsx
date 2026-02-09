"use client";

import MotionWrapper from "./MotionWrapper";
import { footerFade } from "./motion.config";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <MotionWrapper variants={footerFade} viewport={false}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-text-secondary text-sm">
            Copyright © 2026 Vinay Surwase
          </p>
        </div>
      </MotionWrapper>
    </footer>
  );
}
