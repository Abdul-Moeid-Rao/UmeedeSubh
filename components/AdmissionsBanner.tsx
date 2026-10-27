'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AdmissionsBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-ink text-white text-xs py-2 px-4 border-b border-white/10 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#FCC609] text-ink font-extrabold text-[10px] uppercase tracking-wide shadow-xs">
            Admissions Open
          </span>
          <span className="text-white/90 font-medium">
            Pehla Qadam Evening Classes & IT Box Computer Lab admissions are open. Registration is <strong>in-person only</strong>.
          </span>
          <span className="hidden md:inline-flex items-center text-[#FCC609] text-xs font-semibold">
            · Near Gate 2, Taxila
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/projects/pehla-qadam#admissions"
            className="text-[#FCC609] hover:text-white font-bold transition-colors text-xs inline-flex items-center gap-1 hover:underline"
          >
            In-Person Guide →
          </Link>

          {/* Close button: dismisses banner for session, reappears on browser refresh */}
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close announcement"
            className="w-6 h-6 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors text-base font-bold leading-none cursor-pointer"
            title="Dismiss banner (reappears on page refresh)"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
