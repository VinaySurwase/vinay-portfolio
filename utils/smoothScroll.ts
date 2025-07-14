"use client";

import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    // Override default scroll behavior for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }
    };

    // Add click listener to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}
