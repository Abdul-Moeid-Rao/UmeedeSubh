'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show once per session
    try {
      if (typeof window !== 'undefined') {
        const seen = sessionStorage.getItem('ues_loader_seen');
        if (seen) return;
        setShow(true);

        const timer = setTimeout(() => {
          setShow(false);
          sessionStorage.setItem('ues_loader_seen', '1');
        }, 2400);

        return () => clearTimeout(timer);
      }
    } catch (e) {
      // In case storage is disabled
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          aria-label="Loading Umeed e Subh"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Animated SVG Emblem */}
          <div className="relative w-44 h-44 flex items-center justify-center">
            <svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Circular Ring drawing in */}
              <motion.circle
                cx="80"
                cy="80"
                r="74"
                stroke="#FCC609"
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
              />

              {/* Sunrise Rays drawing outward */}
              <g opacity="0.95">
                {[
                  { x1: 80, y1: 80, x2: 80, y2: 32 },
                  { x1: 80, y1: 80, x2: 52, y2: 40 },
                  { x1: 80, y1: 80, x2: 108, y2: 40 },
                  { x1: 80, y1: 80, x2: 36, y2: 58 },
                  { x1: 80, y1: 80, x2: 124, y2: 58 },
                ].map((ray, i) => (
                  <motion.line
                    key={i}
                    x1={ray.x1}
                    y1={ray.y1}
                    x2={ray.x2}
                    y2={ray.y2}
                    stroke="#FCC609"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                ))}
              </g>

              {/* Book Pages rising */}
              <motion.path
                d="M80 84 C66 76 46 76 32 82 L32 108 C46 102 66 102 80 110 Z"
                fill="#FAF7F0"
                stroke="#1B1A1F"
                strokeWidth="2.5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0, ease: 'easeOut' }}
              />
              <motion.path
                d="M80 84 C94 76 114 76 128 82 L128 108 C114 102 94 102 80 110 Z"
                fill="#FAF7F0"
                stroke="#1B1A1F"
                strokeWidth="2.5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0, ease: 'easeOut' }}
              />

              {/* Pen-nib mark fading in & scaling */}
              <motion.g
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <path
                  d="M80 34 L94 66 L88 78 L72 78 L66 66 Z"
                  fill="#D1D2D4"
                  stroke="#1B1A1F"
                  strokeWidth="2.5"
                />
                <line x1="80" y1="36" x2="80" y2="58" stroke="#1B1A1F" strokeWidth="2" strokeLinecap="round" />
                <circle cx="80" cy="60" r="2.5" fill="#1B1A1F" />
              </motion.g>

              {/* Ribbon sweeping in */}
              <motion.g
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
              >
                <path
                  d="M34 112 C54 107 106 107 126 112 L130 126 C106 120 54 120 30 126 Z"
                  fill="#FCC609"
                  stroke="#1B1A1F"
                  strokeWidth="2"
                />
                <polygon points="30,126 22,118 34,112 31,120" fill="#EB543B" stroke="#1B1A1F" strokeWidth="1.5" />
                <polygon points="130,126 138,118 126,112 129,120" fill="#EB543B" stroke="#1B1A1F" strokeWidth="1.5" />
                <text
                  x="80"
                  y="120"
                  textAnchor="middle"
                  fill="#1B1A1F"
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="var(--font-noto-nastaliq), serif"
                >
                  امیدِ صبح
                </text>
              </motion.g>

              {/* Lettering arc */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <path id="loaderArc" d="M 22 80 A 58 58 0 1 1 138 80" fill="none" />
                <text fill="#1B1A1F" fontSize="8.5" fontWeight="700" letterSpacing="1.5">
                  <textPath href="#loaderArc" startOffset="50%" textAnchor="middle">
                    A STRUGGLE FOR LITERATE PAKISTAN
                  </textPath>
                </text>
              </motion.g>
            </svg>
          </div>

          {/* Progress bar line under emblem */}
          <div className="w-36 h-0.5 bg-[#E7E3DA] mt-4 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FCC609] via-[#F07D3E] to-[#EB543B]"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, delay: 0.2, ease: 'easeInOut' }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-center"
          >
            <span className="font-display font-semibold text-xs tracking-wider text-ink block">
              UMEED E SUBH
            </span>
            <span className="text-[10px] text-pen-gray">
              Official Welfare Society of UET Taxila · Est. 2014
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
