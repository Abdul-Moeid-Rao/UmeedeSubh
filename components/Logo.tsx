import React from 'react';

interface LogoProps {
  variant?: 'compact' | 'full';
  theme?: 'light' | 'dark';
  className?: string;
  height?: number;
}

export default function Logo({
  variant = 'compact',
  theme = 'light',
  className = '',
  height = 44,
}: LogoProps) {
  const isDark = theme === 'dark';

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        {/* Logo Image */}
        <div
          className={`relative rounded-full overflow-hidden shrink-0 border border-mist shadow-xs flex items-center justify-center ring-2 ring-[var(--gold)]/20 ${
            isDark ? 'bg-ink' : 'bg-white'
          }`}
          style={{ width: height, height: height }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={isDark ? '/logo.jpg' : '/logo-alt.jpg'}
            alt="Umeed E Subh"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col text-left">
          <span
            className={`font-display font-bold text-lg sm:text-xl tracking-tight leading-none ${
              isDark ? 'text-white' : 'text-ink'
            }`}
          >
            Umeed E Subh
          </span>
          <span
            className={`text-[11px] font-medium leading-tight mt-1 ${
              isDark ? 'text-gray-300' : 'text-pen-gray'
            }`}
          >
            A Struggle for Literate Pakistan
          </span>
        </div>
      </div>
    );
  }

  // Full Emblem Variant
  return (
    <div className={`inline-flex flex-col items-center text-center ${className}`}>
      <div
        className={`relative rounded-full overflow-hidden shrink-0 border-2 border-[var(--gold)] shadow-md mb-2 ring-4 ring-[var(--dawn)] ${
          isDark ? 'bg-ink' : 'bg-white'
        }`}
        style={{ width: height * 2, height: height * 2 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={isDark ? '/logo.jpg' : '/logo-alt.jpg'}
          alt="Umeed E Subh"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col items-center">
        <span
          className={`font-display font-bold text-xl sm:text-2xl tracking-tight leading-none ${
            isDark ? 'text-white' : 'text-ink'
          }`}
        >
          Umeed E Subh
        </span>
        <span
          className={`text-xs font-medium leading-tight mt-1.5 ${
            isDark ? 'text-gray-300' : 'text-pen-gray'
          }`}
        >
          A Struggle for Literate Pakistan
        </span>
      </div>
    </div>
  );
}
