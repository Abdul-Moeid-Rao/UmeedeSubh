'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Lock body scroll while loader is visible
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = '';
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          aria-label="Loading Umeed e Subh"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white selection:bg-transparent"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle ambient dawn glow behind emblem */}
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[#FCC609]/20 via-[#F07D3E]/15 to-[#EB543B]/10 blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

          {/* Logo Badge Container */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center z-10"
          >
            {/* Outer rotating decorative ring */}
            <motion.div
              className="absolute -inset-3 sm:-inset-4 rounded-full border-2 border-dashed border-[#FCC609]/40 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Glowing gold halo */}
            <div className="absolute inset-0 rounded-full bg-[#FCC609]/20 blur-xl scale-110" />

            {/* Emblem Card */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white shadow-2xl border-2 border-mist flex items-center justify-center p-3 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-alt.jpg"
                alt="Umeed E Subh Official Logo"
                className="w-full h-full object-contain select-none pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-6 text-center space-y-1 z-10"
          >
            <h1 className="font-display font-bold text-xl sm:text-2xl text-ink tracking-tight">
              UMEED E SUBH
            </h1>
            <p className="text-xs sm:text-sm font-medium text-pen-gray">
              A Struggle for Literate Pakistan
            </p>
            <div className="pt-1">
              <span className="inline-block text-[10px] sm:text-[11px] font-bold text-[#EB543B] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFF3D1] border border-[#FCC609]/40">
                UET Taxila · Est. 2014
              </span>
            </div>
          </motion.div>

          {/* Animated Progress Bar */}
          <div className="w-48 sm:w-56 h-1 bg-mist/80 rounded-full mt-7 overflow-hidden relative z-10 shadow-2xs">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FCC609] via-[#F07D3E] to-[#EB543B] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.3, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
