'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [mediaDropdown, setMediaDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setAboutDropdown(false);
    setProjectsDropdown(false);
    setMediaDropdown(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
        isScrolled
          ? 'border-mist shadow-xs py-1'
          : 'border-mist/60 py-2'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo with Real Image */}
          <Link href="/" className="group shrink-0 transition-transform duration-200 hover:scale-[1.01]">
            <Logo variant="compact" theme="light" height={46} />
          </Link>

          {/* Desktop Navigation - Highly Visible, Attractive, Bold */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            <Link
              href="/"
              className={`relative px-3.5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all duration-200 ${
                pathname === '/'
                  ? 'text-ink bg-paper shadow-2xs font-extrabold ring-1 ring-mist/60'
                  : 'text-ink/80 hover:text-ink hover:bg-paper/70'
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <button
                className={`relative px-3.5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  pathname.startsWith('/about') || pathname.startsWith('/cabinet')
                    ? 'text-ink bg-paper shadow-2xs font-extrabold ring-1 ring-mist/60'
                    : 'text-ink/80 hover:text-ink hover:bg-paper/70'
                }`}
              >
                About
                <span className={`text-[10px] text-pen-gray transition-transform duration-200 ${aboutDropdown ? 'rotate-180 text-ink' : ''}`}>
                  ▾
                </span>
              </button>

              {aboutDropdown && (
                <div className="absolute top-full left-0 w-72 pt-2.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="bg-white rounded-2xl border border-mist shadow-xl p-2.5 space-y-1 border-t-2 border-t-[#FCC609]">
                    <Link
                      href="/about"
                      className="group block p-2.5 rounded-xl hover:bg-paper hover:translate-x-1 transition-all duration-150"
                    >
                      <div className="text-xs font-bold text-ink group-hover:text-[var(--ember)] transition-colors">Mission & Vision</div>
                      <div className="text-[11px] text-pen-gray mt-0.5">Society background, ethos and core principles</div>
                    </Link>
                    <Link
                      href="/about/story"
                      className="group block p-2.5 rounded-xl hover:bg-paper hover:translate-x-1 transition-all duration-150"
                    >
                      <div className="text-xs font-bold text-ink group-hover:text-[var(--ember)] transition-colors">Founding Story & Timeline</div>
                      <div className="text-[11px] text-pen-gray mt-0.5">The Gate 2 chronicle and key milestone moments</div>
                    </Link>
                    <Link
                      href="/about/hierarchy"
                      className="group block p-2.5 rounded-xl hover:bg-paper hover:translate-x-1 transition-all duration-150"
                    >
                      <div className="text-xs font-bold text-ink group-hover:text-[var(--ember)] transition-colors">Hierarchy System</div>
                      <div className="text-[11px] text-pen-gray mt-0.5">5-level student leadership and governance structure</div>
                    </Link>
                    <Link
                      href="/cabinet"
                      className="group block p-2.5 rounded-xl hover:bg-paper hover:translate-x-1 transition-all duration-150"
                    >
                      <div className="text-xs font-bold text-ink group-hover:text-[var(--ember)] transition-colors">Cabinet Archive</div>
                      <div className="text-[11px] text-pen-gray mt-0.5">Year-by-year executive sessions and alumni records</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProjectsDropdown(true)}
              onMouseLeave={() => setProjectsDropdown(false)}
            >
              <button
                className={`relative px-3.5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  pathname.startsWith('/projects') || pathname === '/sponsor'
                    ? 'text-ink bg-paper shadow-2xs font-extrabold ring-1 ring-mist/60'
                    : 'text-ink/80 hover:text-ink hover:bg-paper/70'
                }`}
              >
                Projects
                <span className={`text-[10px] text-pen-gray transition-transform duration-200 ${projectsDropdown ? 'rotate-180 text-ink' : ''}`}>
                  ▾
                </span>
              </button>

              {projectsDropdown && (
                <div className="absolute top-full left-0 w-84 pt-2.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="bg-white rounded-2xl border border-mist shadow-xl p-3 border-t-2 border-t-[#FCC609]">
                    <div className="text-[10px] font-black text-pen-gray uppercase tracking-wider px-2 py-1">
                      Regular Initiatives
                    </div>
                    <Link
                      href="/projects/pehla-qadam"
                      className="group block p-2 rounded-xl hover:bg-paper hover:translate-x-1 transition-all duration-150"
                    >
                      <div className="text-xs font-bold text-ink group-hover:text-[var(--ember)] transition-colors">Pehla Qadam Evening School</div>
                      <div className="text-[11px] text-pen-gray mt-0.5">70+ enrolled children, nursery to matriculation</div>
                    </Link>
                    <Link
                      href="/projects/it-box"
                      className="group block p-2 rounded-xl hover:bg-paper hover:translate-x-1 transition-all duration-150"
                    >
                      <div className="text-xs font-bold text-ink group-hover:text-[var(--ember)] transition-colors">IT Box Computer Lab</div>
                      <div className="text-[11px] text-pen-gray mt-0.5">Certified practical digital and computer education</div>
                    </Link>
                    <Link
                      href="/projects/chaddar"
                      className="group block p-2 rounded-xl hover:bg-paper hover:translate-x-1 transition-all duration-150"
                    >
                      <div className="text-xs font-bold text-ink group-hover:text-[var(--ember)] transition-colors">Chaddar Stitching School</div>
                      <div className="text-[11px] text-pen-gray mt-0.5">Vocational sewing skills empowering deserving women</div>
                    </Link>
                    <Link
                      href="/sponsor"
                      className="group block p-2 rounded-xl hover:bg-paper hover:translate-x-1 transition-all duration-150"
                    >
                      <div className="text-xs font-bold text-ink group-hover:text-[var(--ember)] transition-colors">Child Sponsorship (CSP)</div>
                      <div className="text-[11px] text-pen-gray mt-0.5">PKR 3,500/month direct educational child sponsorship</div>
                    </Link>

                    <div className="border-t border-mist my-2 pt-1.5"></div>
                    <div className="text-[10px] font-black text-pen-gray uppercase tracking-wider px-2 py-1">
                      Seasonal Community Relief Drives
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      <Link
                        href="/projects/ramadan-ration-drive"
                        className="block px-2.5 py-1.5 text-xs font-semibold text-ink/80 hover:text-ink hover:bg-paper rounded-lg transition-colors"
                      >
                        Ramadan Food Ration Drive
                      </Link>
                      <Link
                        href="/projects/uniform-distribution-drive"
                        className="block px-2.5 py-1.5 text-xs font-semibold text-ink/80 hover:text-ink hover:bg-paper rounded-lg transition-colors"
                      >
                        School Uniform & Winter Shoes Drive
                      </Link>
                      <Link
                        href="/projects/lihaf-drive"
                        className="block px-2.5 py-1.5 text-xs font-semibold text-ink/80 hover:text-ink hover:bg-paper rounded-lg transition-colors"
                      >
                        Winter Lihaf & Quilt Drive
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/teams"
              className={`relative px-3.5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all duration-200 ${
                isActive('/teams')
                  ? 'text-ink bg-paper shadow-2xs font-extrabold ring-1 ring-mist/60'
                  : 'text-ink/80 hover:text-ink hover:bg-paper/70'
              }`}
            >
              Teams
            </Link>

            {/* Impact & Media Combined Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMediaDropdown(true)}
              onMouseLeave={() => setMediaDropdown(false)}
            >
              <button
                className={`relative px-3.5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isActive('/impact') || isActive('/gallery') || isActive('/blog')
                    ? 'text-ink bg-paper shadow-2xs font-extrabold ring-1 ring-mist/60'
                    : 'text-ink/80 hover:text-ink hover:bg-paper/70'
                }`}
              >
                Impact & Media
                <span className={`text-[10px] text-pen-gray transition-transform duration-200 ${mediaDropdown ? 'rotate-180 text-ink' : ''}`}>
                  ▾
                </span>
              </button>

              {mediaDropdown && (
                <div className="absolute top-full left-0 w-72 pt-2.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="bg-white rounded-2xl border border-mist shadow-xl p-2.5 space-y-1 border-t-2 border-t-[#FCC609]">
                    <Link
                      href="/impact"
                      className="group block p-2.5 rounded-xl hover:bg-paper hover:translate-x-1 transition-all duration-150"
                    >
                      <div className="text-xs font-bold text-ink group-hover:text-[var(--ember)] transition-colors">Impact & Board Results</div>
                      <div className="text-[11px] text-pen-gray mt-0.5">Audited statistics and Rawalpindi board exams</div>
                    </Link>
                    <Link
                      href="/gallery"
                      className="group block p-2.5 rounded-xl hover:bg-paper hover:translate-x-1 transition-all duration-150"
                    >
                      <div className="text-xs font-bold text-ink group-hover:text-[var(--ember)] transition-colors">Photo Gallery</div>
                      <div className="text-[11px] text-pen-gray mt-0.5">Real on-ground photos of classes, drives and events</div>
                    </Link>
                    <Link
                      href="/blog"
                      className="group block p-2.5 rounded-xl hover:bg-paper hover:translate-x-1 transition-all duration-150"
                    >
                      <div className="text-xs font-bold text-ink group-hover:text-[var(--ember)] transition-colors">News & Announcements</div>
                      <div className="text-[11px] text-pen-gray mt-0.5">Latest dispatches, press releases and stories</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/verify-certificate"
              className={`relative px-3.5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all duration-200 ${
                isActive('/verify-certificate')
                  ? 'text-ink bg-paper shadow-2xs font-extrabold ring-1 ring-mist/60'
                  : 'text-ink/80 hover:text-ink hover:bg-paper/70'
              }`}
            >
              Verify Certificate
            </Link>

            <Link
              href="/contact"
              className={`relative px-3.5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all duration-200 ${
                isActive('/contact')
                  ? 'text-ink bg-paper shadow-2xs font-extrabold ring-1 ring-mist/60'
                  : 'text-ink/80 hover:text-ink hover:bg-paper/70'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs - Attractive & Professional */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/join"
              className="px-4 py-2 rounded-full font-bold text-xs text-ink hover:text-white hover:bg-ink border border-ink/20 hover:border-ink transition-all duration-200 shadow-2xs hover:shadow-xs"
            >
              Join a Team
            </Link>

            <Link
              href="/donate"
              className="px-6 py-2.5 rounded-full font-black text-xs tracking-wider uppercase bg-[#FCC609] hover:bg-[#F5B226] text-ink shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/donate"
              className="px-4 py-1.5 rounded-full bg-[#FCC609] text-ink font-black text-xs uppercase tracking-wider shadow-xs hover:bg-[#F5B226] transition-colors"
            >
              Donate
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-ink hover:bg-paper transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-ink transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`h-0.5 w-full bg-ink transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-ink transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-mist px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <Link
              href="/"
              className="block py-2.5 px-3 rounded-lg text-base font-bold text-ink hover:bg-paper hover:text-[var(--ember)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2.5 px-3 rounded-lg text-base font-bold text-ink hover:bg-paper hover:text-[var(--ember)] transition-colors"
            >
              About Society
            </Link>
            <Link
              href="/about/story"
              className="block py-2 px-3 text-sm font-semibold text-pen-gray hover:text-ink hover:bg-paper rounded-lg pl-6 transition-colors"
            >
              Founding Story & Timeline
            </Link>
            <Link
              href="/about/hierarchy"
              className="block py-2 px-3 text-sm font-semibold text-pen-gray hover:text-ink hover:bg-paper rounded-lg pl-6 transition-colors"
            >
              Hierarchy System
            </Link>
            <Link
              href="/cabinet"
              className="block py-2 px-3 text-sm font-semibold text-pen-gray hover:text-ink hover:bg-paper rounded-lg pl-6 transition-colors"
            >
              Cabinet Archive
            </Link>
            <Link
              href="/projects"
              className="block py-2.5 px-3 rounded-lg text-base font-bold text-ink hover:bg-paper hover:text-[var(--ember)] transition-colors"
            >
              All Projects & Drives
            </Link>
            <Link
              href="/sponsor"
              className="block py-2 px-3 text-sm font-semibold text-pen-gray hover:text-ink hover:bg-paper rounded-lg pl-6 transition-colors"
            >
              Child Sponsorship (CSP)
            </Link>
            <Link
              href="/teams"
              className="block py-2.5 px-3 rounded-lg text-base font-bold text-ink hover:bg-paper hover:text-[var(--ember)] transition-colors"
            >
              Teams & Wings
            </Link>
            <Link
              href="/impact"
              className="block py-2.5 px-3 rounded-lg text-base font-bold text-ink hover:bg-paper hover:text-[var(--ember)] transition-colors"
            >
              Impact & Board Results
            </Link>
            <Link
              href="/gallery"
              className="block py-2.5 px-3 rounded-lg text-base font-bold text-ink hover:bg-paper hover:text-[var(--ember)] transition-colors"
            >
              Photo Gallery
            </Link>
            <Link
              href="/blog"
              className="block py-2.5 px-3 rounded-lg text-base font-bold text-ink hover:bg-paper hover:text-[var(--ember)] transition-colors"
            >
              News & Announcements
            </Link>
            <Link
              href="/verify-certificate"
              className="block py-2.5 px-3 rounded-lg text-base font-bold text-ink hover:bg-paper hover:text-[var(--ember)] transition-colors"
            >
              Verify Certificate
            </Link>
            <Link
              href="/contact"
              className="block py-2.5 px-3 rounded-lg text-base font-bold text-ink hover:bg-paper hover:text-[var(--ember)] transition-colors"
            >
              Contact & Gate 2 Location
            </Link>
          </div>

          <div className="pt-4 border-t border-mist space-y-3">
            <div className="font-urdu text-sm text-pen-gray text-center leading-loose">
              ایک جدوجہد، باوقار اور خواندہ پاکستان کے لیے
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/join"
                className="py-3 px-4 text-center rounded-full border border-ink text-ink font-bold text-xs hover:bg-ink hover:text-white transition-colors"
              >
                Join a Team
              </Link>
              <Link
                href="/donate"
                className="py-3 px-4 text-center rounded-full bg-[#FCC609] text-ink font-black text-xs uppercase tracking-wider shadow-xs hover:bg-[#F5B226] transition-colors"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
