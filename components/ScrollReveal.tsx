'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 700,
  className = '',
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getTransitionClasses = () => {
    if (isVisible) {
      return 'translate-x-0 translate-y-0 opacity-100';
    }

    switch (direction) {
      case 'left':
        return '-translate-x-14 opacity-0';
      case 'right':
        return 'translate-x-14 opacity-0';
      case 'up':
        return 'translate-y-10 opacity-0';
      case 'down':
        return '-translate-y-10 opacity-0';
      default:
        return 'opacity-0 scale-95';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out will-change-transform ${getTransitionClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
