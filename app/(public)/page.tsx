'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Heart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  GraduationCap,
  Laptop,
  Users,
  BookOpen,
} from 'lucide-react';
import {
  PROJECTS_DATA,
  IMPACT_STATS_DATA,
  DRIVE_EDITIONS_DATA,
  BLOG_POSTS_DATA,
} from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';

const ALUMNI_TESTIMONIALS = [
  {
    id: 'al-1',
    name: 'Engr. Hamza Farooq',
    role: 'Former Head Teaching Volunteer',
    batch: 'UET Batch 2019 · Now at Systems Ltd',
    quote: 'Teaching math at Pehla Qadam after engineering lectures was the defining chapter of my university years. Watching children who had never held a pencil clear their Matric Board exams with flying marks is an unforgettable, life-changing feeling.',
    initials: 'HF',
    accent: '#FCC609',
    avatarBg: 'bg-[#FFF3D1]',
    avatarText: 'text-ink',
  },
  {
    id: 'al-2',
    name: 'Engr. Zainab Tariq',
    role: 'Former Lead Coordinator & Society President',
    batch: 'UET Batch 2021 · Now Software Engineer',
    quote: 'The culture of selfless service at Umeed e Subh stays with you for a lifetime. Over 11 consecutive years, successive student batches have passed the torch without missing a single day of evening school — that is extraordinary institutional character.',
    initials: 'ZT',
    accent: '#EB543B',
    avatarBg: 'bg-amber-50',
    avatarText: 'text-amber-900',
  },
  {
    id: 'al-3',
    name: 'Engr. Umar Shahzad',
    role: 'Former IT Box Program Lead',
    batch: 'UET Batch 2020 · Now Full-Stack Developer',
    quote: 'Running IT Box batches taught me as much as it taught our students. Translating complex digital concepts for underprivileged youth near Gate 2 made me a far better engineer and human being.',
    initials: 'US',
    accent: '#1B1A1F',
    avatarBg: 'bg-slate-100',
    avatarText: 'text-slate-800',
  },
  {
    id: 'al-4',
    name: 'Engr. Fatima Malik',
    role: 'Former Chaddar Academy Coordinator',
    batch: 'UET Batch 2022 · Now Data Analyst',
    quote: 'Managing Chaddar Stitching Academy taught me the real meaning of impact. Seeing a widowed mother graduate with a trade certificate and start her own boutique moved me more than any engineering project ever could.',
    initials: 'FM',
    accent: '#FCC609',
    avatarBg: 'bg-[#FFF0EE]',
    avatarText: 'text-[#EB543B]',
  },
];

export default function HomePage() {
  const [activeAlumniIdx, setActiveAlumniIdx] = useState(0);

  // Auto-advance carousel every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveAlumniIdx((prev) => (prev + 1) % ALUMNI_TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setActiveAlumniIdx((prev) => (prev + 1) % ALUMNI_TESTIMONIALS.length);
  const goPrev = () => setActiveAlumniIdx((prev) => (prev - 1 + ALUMNI_TESTIMONIALS.length) % ALUMNI_TESTIMONIALS.length);

  const featuredPost = BLOG_POSTS_DATA[0];
  const sidePosts = BLOG_POSTS_DATA.slice(1, 4);

  return (
    <div className="space-y-0">
      {/* ========================================================
          1. HERO SECTION (Crafted Pure Design - No Stock BG Image)
          ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F0] to-[#F5F0E6] pt-14 pb-20 sm:pt-20 sm:pb-28 border-b border-mist/80">
        {/* Architectural Dot Matrix & Sunrise Atmospheric Glows */}
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="absolute -top-36 -left-36 w-[550px] h-[550px] rounded-full bg-[#FCC609]/15 blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute top-1/4 -right-36 w-[550px] h-[550px] rounded-full bg-[#EB543B]/10 blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute -bottom-24 left-1/3 w-[450px] h-[450px] rounded-full bg-[#FCC609]/10 blur-3xl pointer-events-none" />

        {/* Ambient Top Subtle Line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FCC609]/30 to-transparent pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Mission, Typography & Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Status Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#FCC609]/40 shadow-2xs text-ink text-xs font-bold tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FCC609] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FCC609]"></span>
                </span>
                <span>Official Welfare Society · UET Taxila · Est. 2014</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-3">
                <h1 className="font-display font-bold text-ink tracking-tight leading-[1.08] text-4xl sm:text-5xl lg:text-6xl">
                  A Struggle for <br />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D49000] via-[#EB543B] to-[#B82B14]">
                    Literate Pakistan
                    <svg className="absolute -bottom-2.5 left-0 w-full h-3 text-[#FCC609]" viewBox="0 0 280 14" fill="none" preserveAspectRatio="none">
                      <path d="M2 10.5C70 3.5 210 3.5 278 10.5" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                {/* Urdu Tagline */}
                <div className="font-urdu text-lg sm:text-2xl text-[#9E6500] leading-loose font-semibold pt-1">
                  ایک جدوجہد، باوقار اور خواندہ پاکستان کے لیے
                </div>
              </div>

              {/* Supporting Body */}
              <p className="text-base sm:text-lg text-pen-gray leading-relaxed max-w-xl font-normal">
                Every evening while campus labs close, undergraduate engineering students gather 70+ underprivileged children near Gate 2 to provide free evening schooling, digital computer literacy at IT Box, and break the cycle of generational poverty.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/donate"
                  className="btn-primary shadow-lg shadow-[#FCC609]/20 hover:shadow-xl hover:shadow-[#FCC609]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <Heart className="w-4 h-4 fill-ink" />
                  <span>Donate Now</span>
                </Link>

                <Link
                  href="/sponsor"
                  className="btn-secondary bg-white hover:bg-paper shadow-2xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span>Sponsor a Child</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust Micro-Row */}
              <div className="pt-4 border-t border-mist/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-pen-gray">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  100% Volunteer Run
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EB543B]" />
                  Audited Ground Transparency
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#FCC609]" />
                  Gate 2, UET Taxila
                </span>
              </div>
            </div>

            {/* Right Column: Multi-Card Feature Showcase */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {/* Outer Decorative Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#FCC609]/20 via-[#EB543B]/10 to-transparent rounded-[32px] blur-xl opacity-70 pointer-events-none" />

              {/* Main Master Card */}
              <div className="relative bg-white rounded-3xl border border-mist shadow-xl p-6 sm:p-7 space-y-5 text-left">
                {/* Header row */}
                <div className="flex items-center justify-between pb-4 border-b border-mist">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF3D1] border border-[#FCC609]/50 flex items-center justify-center text-ink shadow-2xs">
                      <BookOpen className="w-5 h-5 text-[#EB543B]" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm sm:text-base text-ink">
                        Daily Ground Programs
                      </div>
                      <div className="text-[11px] text-pen-gray">
                        Active Evening Operations
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    4:30 – 7:00 PM
                  </span>
                </div>

                {/* 3 Program Feature Rows */}
                <div className="space-y-3">
                  {/* Item 1: Pehla Qadam School */}
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-mist/80 hover:border-[#FCC609] transition-colors flex items-start gap-3.5 group">
                    <div className="w-9 h-9 rounded-xl bg-amber-100/70 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-display font-bold text-xs sm:text-sm text-ink group-hover:text-[#EB543B] transition-colors">
                          Pehla Qadam School
                        </span>
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                          70+ Daily
                        </span>
                      </div>
                      <p className="text-[11px] text-pen-gray mt-0.5 line-clamp-1">
                        Free formal education, syllabus books, uniforms & meals.
                      </p>
                    </div>
                  </div>

                  {/* Item 2: IT Box Lab */}
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-mist/80 hover:border-[#FCC609] transition-colors flex items-start gap-3.5 group">
                    <div className="w-9 h-9 rounded-xl bg-[#FFF0EE] text-[#EB543B] flex items-center justify-center shrink-0 mt-0.5">
                      <Laptop className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-display font-bold text-xs sm:text-sm text-ink group-hover:text-[#EB543B] transition-colors">
                          IT Box Computer Lab
                        </span>
                        <span className="text-[10px] font-bold text-[#EB543B] bg-red-50 px-2 py-0.5 rounded-md">
                          200+ Certified
                        </span>
                      </div>
                      <p className="text-[11px] text-pen-gray mt-0.5 line-clamp-1">
                        Web design, graphic design & computer literacy batches.
                      </p>
                    </div>
                  </div>

                  {/* Item 3: Seasonal & Family Relief */}
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-mist/80 hover:border-[#FCC609] transition-colors flex items-start gap-3.5 group">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-display font-bold text-xs sm:text-sm text-ink group-hover:text-[#EB543B] transition-colors">
                          Relief & Vocational
                        </span>
                        <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                          1,100+ Families
                        </span>
                      </div>
                      <p className="text-[11px] text-pen-gray mt-0.5 line-clamp-1">
                        Ration hampers, winter warmth drives & Chaddar stitching.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Assurance Note */}
                <div className="pt-3 border-t border-mist/70 flex items-center justify-between text-[11px] text-pen-gray">
                  <span className="inline-flex items-center gap-1.5 text-ink font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-[#FCC609]" />
                    Zero admin fees from donations
                  </span>
                  <Link href="/about" className="font-bold text-[#EB543B] hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>

              {/* Floating Badge (Bottom Left overlap) */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl border border-mist p-3.5 shadow-lg items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-full bg-[#FCC609] flex items-center justify-center font-bold text-ink text-xs shadow-2xs">
                  PKR
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-xs text-ink leading-tight">
                    3,500 / Month
                  </div>
                  <div className="text-[10px] text-pen-gray">
                    Full child education sponsorship
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          IMPACT STRIP (Overlapping Card with 4 Big Numerals)
          ======================================================== */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 -mt-12 sm:-mt-16 relative z-10">
        <div className="card-clean bg-white shadow-xl p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink leading-none">
                70<span className="text-[#FCC609]">+</span>
              </div>
              <div className="w-12 h-0.5 bg-[#FCC609] my-2"></div>
              <div className="text-xs text-pen-gray font-medium">School students daily</div>
              <div className="text-[11px] text-ink font-semibold">Pehla Qadam Evening School</div>
            </div>

            <div>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink leading-none">
                200<span className="text-[#FCC609]">+</span>
              </div>
              <div className="w-12 h-0.5 bg-[#FCC609] my-2"></div>
              <div className="text-xs text-pen-gray font-medium">IT students</div>
              <div className="text-[11px] text-ink font-semibold">Certified IT Box Graduates</div>
            </div>

            <div>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink leading-none">
                11<span className="text-[#FCC609]">+</span>
              </div>
              <div className="w-12 h-0.5 bg-[#FCC609] my-2"></div>
              <div className="text-xs text-pen-gray font-medium">Years of success</div>
              <div className="text-[11px] text-ink font-semibold">Continuous On-Ground Service</div>
            </div>

            <div>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink leading-none">
                1,100<span className="text-[#FCC609]">+</span>
              </div>
              <div className="w-12 h-0.5 bg-[#FCC609] my-2"></div>
              <div className="text-xs text-pen-gray font-medium">Families supported</div>
              <div className="text-[11px] text-ink font-semibold">Food Rations & Winter Warmth</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. THE CORE CONVICTION
          Short, powerful, and deeply impactful layout
          ======================================================== */}
      <section className="max-w-[1240px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EB543B]/10 border border-[#EB543B]/30 text-[#EB543B] text-xs font-extrabold tracking-wider uppercase">
              The Core Conviction
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink leading-tight">
              Every evening, we teach to <br className="hidden sm:inline" />
              <span className="pen-nib-line text-[#EB543B]">break generational poverty</span>.
            </h2>

            <p className="text-base sm:text-lg text-pen-gray leading-relaxed font-normal">
              No child should be forced into roadside workshops when they deserve notebooks. We transform evenings into classrooms—providing free schooling, digital literacy, and unconditional dignity to children who need it most.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="border-l-2 border-[#FCC609] pl-3.5 py-1">
                <div className="font-bold text-ink text-sm sm:text-base">100% Free Schooling</div>
                <div className="text-xs text-pen-gray mt-0.5">Books, uniforms and certified curriculum</div>
              </div>
              <div className="border-l-2 border-[#EB543B] pl-3.5 py-1">
                <div className="font-bold text-ink text-sm sm:text-base">Real Human Dignity</div>
                <div className="text-xs text-pen-gray mt-0.5">Permanent pathways away from child labor</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about/story"
                className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-[#EB543B] transition-colors group"
              >
                <span>Read our full journey & milestone story</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-mist shadow-xl bg-paper group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85"
                alt="Volunteer student teaching children in classroom"
                className="w-full h-84 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-mist shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-ink">Pehla Qadam Evening Classes</div>
                  <div className="text-[11px] text-pen-gray">Conducted daily with dedicated student volunteers</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#FCC609] text-ink text-[10px] font-black uppercase tracking-wider shrink-0">
                  Daily
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. REGULAR PROJECTS (Section 8: Layout 3)
          Redesigned with scroll reveal animations & ambient background
          ======================================================== */}
      <section className="relative overflow-hidden bg-paper py-24 sm:py-32 border-y border-mist">
        {/* Ambient Animated Background Elements */}
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#FCC609]/10 blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#EB543B]/10 blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 space-y-12 relative z-10">
          {/* Section Header */}
          <ScrollReveal direction="up" duration={700}>
            <div className="max-w-2xl space-y-3 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-mist text-xs font-bold uppercase tracking-wider text-pen-gray shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#FCC609]" />
                Grassroots Infrastructure
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ink tracking-tight">
                Our Regular Projects
              </h2>
              <p className="text-base text-pen-gray leading-relaxed font-normal">
                Daily running educational &amp; vocational programs operated on the ground near Gate 2, Taxila.
              </p>
            </div>
          </ScrollReveal>

          {/* Tile 1: Pehla Qadam Evening School */}
          <ScrollReveal direction="up" duration={800}>
            <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#FFF9E6] via-white to-white border border-[#FCC609]/40 shadow-xl relative overflow-hidden text-left hover:shadow-2xl hover:scale-[1.005] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#FCC609] text-xs font-bold text-ink uppercase tracking-wider">
                    Primary to Matriculation
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-ink">
                    Pehla Qadam Evening School
                  </h3>

                  <p className="text-sm sm:text-base text-pen-gray leading-relaxed font-normal">
                    Free quality evening schooling from primary to matriculation for 70+ children who work during the day or whose families cannot afford school fees. Conducted daily by dedicated university volunteers near Gate 2.
                  </p>

                  {/* 4 Feature Breakdown Mini-Tiles */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-center text-xs">
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-ink text-sm sm:text-base">70+ Kids</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Enrolled Daily</div>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-ink text-sm sm:text-base">3:30 - 6:30 PM</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Daily Evening</div>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-leaf text-sm sm:text-base">100% Free</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Tuition &amp; Books</div>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-ink text-sm sm:text-base">Near Gate 2</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Taxila Location</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center space-y-4">
                  <div className="text-left lg:text-right">
                    <span className="text-xs text-pen-gray block font-medium">Daily Student Strength</span>
                    <span className="font-display text-3xl sm:text-4xl font-black text-ink">
                      70+ Students <span className="text-xs font-normal text-pen-gray">/ enrolled daily</span>
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 w-full sm:w-auto">
                    <Link
                      href="/sponsor"
                      className="px-8 py-3.5 rounded-full bg-[#FCC609] hover:bg-[#F5B226] text-ink font-black text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all text-center w-full sm:w-auto"
                    >
                      Sponsor a School Child
                    </Link>
                    <Link
                      href="/projects/pehla-qadam"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-[#EB543B] transition-colors group pt-1"
                    >
                      <span>In-person admission guidelines</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tile 2: IT Box Computer Training Center */}
          <ScrollReveal direction="up" duration={800}>
            <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#F4F7FB] via-white to-white border border-[#1B1A1F]/20 shadow-xl relative overflow-hidden text-left hover:shadow-2xl hover:scale-[1.005] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#1B1A1F]/30 text-xs font-bold text-ink uppercase tracking-wider">
                    Digital Empowerment
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-ink">
                    IT Box Computer Training Center
                  </h3>

                  <p className="text-sm sm:text-base text-pen-gray leading-relaxed font-normal">
                    Bridging the digital divide for underserved youth near Gate 2. 4 specialized cohorts per year with dedicated batches for boys and girls, teaching digital literacy, graphic design, and practical freelancing skills with verifiable QR credentials.
                  </p>

                  {/* 4 Feature Breakdown Mini-Tiles */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-center text-xs">
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-ink text-sm sm:text-base">25-30 Seats</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Per Cohort Batch</div>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-ink text-sm sm:text-base">4 Cohorts / Yr</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Boys &amp; Girls Batches</div>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-leaf text-sm sm:text-base">QR Verified</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Official Certificates</div>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-ink text-sm sm:text-base">Modern Lab</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Equipped Systems</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center space-y-4">
                  <div className="text-left lg:text-right">
                    <span className="text-xs text-pen-gray block font-medium">Active Cohort Capacity</span>
                    <span className="font-display text-3xl sm:text-4xl font-black text-ink">
                      25-30 Seats <span className="text-xs font-normal text-pen-gray">/ cohort</span>
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 w-full sm:w-auto">
                    <Link
                      href="/verify-certificate"
                      className="px-8 py-3.5 rounded-full bg-ink hover:bg-ink/90 text-white font-black text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all text-center w-full sm:w-auto"
                    >
                      Verify Certificate Registry
                    </Link>
                    <Link
                      href="/projects/it-box"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-[#EB543B] transition-colors group pt-1"
                    >
                      <span>Batch schedules &amp; cohorts</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tile 3: Chaddar Stitching Academy */}
          <ScrollReveal direction="up" duration={800}>
            <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#FFF1EE] via-white to-white border border-[#EB543B]/35 shadow-xl relative overflow-hidden text-left hover:shadow-2xl hover:scale-[1.005] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#EB543B]/40 text-xs font-bold text-[#EB543B] uppercase tracking-wider">
                    Women Vocational Empowerment
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-ink">
                    Chaddar Stitching Academy
                  </h3>

                  <p className="text-sm sm:text-base text-pen-gray leading-relaxed font-normal">
                    Free vocational stitching, cutting, and tailoring academy empowering widowed, underprivileged, and needy women with dignified financial independence and practical trade certification.
                  </p>

                  {/* 4 Feature Breakdown Mini-Tiles */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-center text-xs">
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-ink text-sm sm:text-base">9 - 12 PM</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Morning Classes</div>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-leaf text-sm sm:text-base">100% Free</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Machines &amp; Cloth</div>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-ink text-sm sm:text-base">Certified</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Tailoring &amp; Craft</div>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-ink text-sm sm:text-base">Self-Reliance</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Boutique Income</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center space-y-4">
                  <div className="text-left lg:text-right">
                    <span className="text-xs text-pen-gray block font-medium">Vocational Schedule</span>
                    <span className="font-display text-3xl sm:text-4xl font-black text-ink">
                      9 to 12 AM <span className="text-xs font-normal text-pen-gray">/ daily morning</span>
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 w-full sm:w-auto">
                    <Link
                      href="/donate"
                      className="px-8 py-3.5 rounded-full bg-[#EB543B] hover:bg-[#d4432c] text-white font-black text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all text-center w-full sm:w-auto"
                    >
                      Support Women Vocational Training
                    </Link>
                    <Link
                      href="/projects/chaddar"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-[#EB543B] transition-colors group pt-1"
                    >
                      <span>Learn more &amp; vocational admission info</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tile 4: CSP Child Sponsorship Program */}
          <ScrollReveal direction="up" duration={850}>
            <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#FFF3D1] to-white border border-[#FCC609]/40 shadow-xl relative overflow-hidden text-left hover:shadow-2xl hover:scale-[1.005] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#FCC609] text-xs font-bold text-ink uppercase tracking-wider">
                    Educational Heartbeat
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-ink">
                    Child Sponsorship Program (CSP)
                  </h3>

                  <p className="text-sm sm:text-base text-pen-gray leading-relaxed font-normal">
                    A monthly commitment of PKR 3,500 that covers an enrolled child’s school books, tailored uniform, sturdy shoes, stationery, and daily refreshments at Pehla Qadam School.
                  </p>

                  {/* 4 Feature Breakdown Mini-Tiles */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-center text-xs">
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-ink text-sm sm:text-base">PKR 1,200</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Books &amp; Stationery</div>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-ink text-sm sm:text-base">PKR 1,000</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Uniform &amp; Shoes</div>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-ink text-sm sm:text-base">PKR 800</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Daily Nutrition</div>
                    </div>
                    <div className="bg-white/90 p-2.5 rounded-xl border border-mist shadow-2xs">
                      <div className="font-bold text-ink text-sm sm:text-base">PKR 500</div>
                      <div className="text-[10px] text-pen-gray mt-0.5">Classroom Supplies</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center space-y-4">
                  <div className="text-left lg:text-right">
                    <span className="text-xs text-pen-gray block font-medium">Monthly Sponsorship</span>
                    <span className="font-display text-3xl sm:text-4xl font-black text-ink">
                      PKR 3,500 <span className="text-xs font-normal text-pen-gray">/ month</span>
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 w-full sm:w-auto">
                    <Link
                      href="/sponsor"
                      className="px-8 py-3.5 rounded-full bg-[#FCC609] hover:bg-[#F5B226] text-ink font-black text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all text-center w-full sm:w-auto"
                    >
                      Sponsor a Child Now
                    </Link>
                    <Link
                      href="/projects/csp"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-[#EB543B] transition-colors group pt-1"
                    >
                      <span>How sponsorship works</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          4. YEARLY DRIVES (Horizontal Scroll Strip)
          ======================================================== */}
      <section className="relative overflow-hidden max-w-[1240px] mx-auto px-5 sm:px-8 py-20 sm:py-28 space-y-8">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-[#FCC609]/10 blur-3xl pointer-events-none animate-pulse-glow" />

        <ScrollReveal direction="up" duration={700}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#EB543B]">
                Seasonal Ground Relief
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mt-1">
                Yearly Community Drives
              </h2>
              <p className="text-sm text-pen-gray">
                Transparent, audited relief campaigns verified through door-to-door physical surveys.
              </p>
            </div>

            <Link
              href="/projects"
              className="text-xs font-bold text-ink hover:text-[#EB543B] inline-flex items-center gap-1 group"
            >
              <span>View all drive editions</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Horizontal strip with ScrollReveal */}
        <ScrollReveal direction="up" duration={800} delay={100}>
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x">
            {DRIVE_EDITIONS_DATA.map((drive) => (
              <div
                key={drive.id}
                className="card-clean min-w-[300px] sm:min-w-[360px] max-w-[380px] shrink-0 overflow-hidden flex flex-col justify-between snap-start hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 relative bg-paper group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={drive.coverImage}
                    alt={drive.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-paper text-ink border border-mist font-bold text-[10px] uppercase shadow-2xs">
                      {drive.year} {drive.phase}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-display font-semibold text-base text-ink leading-snug">
                      {drive.title}
                    </h3>
                    <p className="text-xs text-pen-gray mt-2 line-clamp-2 leading-relaxed">
                      {drive.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-mist flex items-center justify-between text-xs">
                    <div>
                      <span className="font-display font-bold text-ink">{drive.beneficiariesCount}</span>
                      <span className="text-[10px] text-pen-gray block">Families Helped</span>
                    </div>
                    <div>
                      <span className="font-display font-bold text-ink">
                        PKR {(drive.amountSpent / 1000000).toFixed(2)}M
                      </span>
                      <span className="text-[10px] text-pen-gray block">Audited Cost</span>
                    </div>
                    <Link
                      href={`/projects/${drive.projectSlug}`}
                      className="font-bold text-[#EB543B] hover:underline"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================
          5. ALUMNI TESTIMONIALS: VOICES FROM THE GROUND
          Single-slide carousel, arrow nav, auto-advance every 5s
          ======================================================== */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-24 border-y border-mist">
        {/* Ambient Elements */}
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#FCC609]/10 blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#EB543B]/10 blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="max-w-[680px] mx-auto px-5 sm:px-6 relative z-10">
          {/* Section Header */}
          <ScrollReveal direction="up" duration={700}>
            <div className="text-center space-y-2.5 mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-mist text-xs font-bold uppercase tracking-wider text-pen-gray shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#EB543B]" />
                Voices from the Ground
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-semibold text-ink tracking-tight">
                Real Stories of Transformation
              </h2>
              <p className="text-xs sm:text-sm text-pen-gray max-w-lg mx-auto">
                Hear from the engineering alumni who built and shaped Umeed e Subh — those who gave evenings so underprivileged children could have a future.
              </p>
            </div>
          </ScrollReveal>

          {/* Carousel Slide */}
          <ScrollReveal direction="up" duration={750}>
            <div className="relative">
              {/* Main Testimonial Card */}
              <div
                key={ALUMNI_TESTIMONIALS[activeAlumniIdx].id}
                className="bg-white rounded-2xl border border-mist shadow-lg hover:shadow-xl p-6 sm:p-8 text-left transition-all duration-300"
              >
                {/* Decorative opening quote mark */}
                <div className="font-display text-4xl sm:text-5xl leading-none text-[#FCC609]/40 select-none mb-1 -mt-2">
                  &ldquo;
                </div>

                {/* Quote */}
                <blockquote className="font-display text-base sm:text-lg font-medium text-ink leading-relaxed mb-6">
                  {ALUMNI_TESTIMONIALS[activeAlumniIdx].quote}
                </blockquote>

                {/* Reviewer Row */}
                <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-mist/70">
                  <div className="flex items-center gap-3">
                    {/* Initials Avatar */}
                    <div className={`w-11 h-11 rounded-full ${ALUMNI_TESTIMONIALS[activeAlumniIdx].avatarBg} ${ALUMNI_TESTIMONIALS[activeAlumniIdx].avatarText} border border-mist flex items-center justify-center font-display font-bold text-sm shadow-2xs shrink-0`}>
                      {ALUMNI_TESTIMONIALS[activeAlumniIdx].initials}
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm sm:text-base text-ink">
                        {ALUMNI_TESTIMONIALS[activeAlumniIdx].name}
                      </div>
                      <div className="text-xs text-pen-gray font-medium">
                        {ALUMNI_TESTIMONIALS[activeAlumniIdx].role}
                      </div>
                      <div className="text-[11px] text-pen-gray/70">
                        {ALUMNI_TESTIMONIALS[activeAlumniIdx].batch}
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="text-[#FCC609] text-base tracking-wide" aria-label="5 out of 5 stars">
                    {'★'.repeat(5)}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-5 h-1 bg-mist/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FCC609] rounded-full"
                    style={{ width: `${((activeAlumniIdx + 1) / ALUMNI_TESTIMONIALS.length) * 100}%`, transition: 'width 0.4s ease' }}
                  />
                </div>
              </div>

              {/* Arrow Navigation */}
              <div className="flex items-center justify-between mt-5 px-1">
                {/* Dot Indicators */}
                <div className="flex items-center gap-2">
                  {ALUMNI_TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveAlumniIdx(idx)}
                      aria-label={`Go to testimonial ${idx + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        activeAlumniIdx === idx
                          ? 'w-5 h-2 bg-[#FCC609]'
                          : 'w-2 h-2 bg-mist hover:bg-pen-gray/40'
                      }`}
                    />
                  ))}
                </div>

                {/* Prev / Next Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={goPrev}
                    aria-label="Previous testimonial"
                    className="w-9 h-9 rounded-full border border-mist bg-white hover:bg-[#FCC609] hover:border-[#FCC609] text-ink transition-all duration-200 flex items-center justify-center shadow-2xs hover:shadow-xs group"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={goNext}
                    aria-label="Next testimonial"
                    className="w-9 h-9 rounded-full border border-mist bg-white hover:bg-[#FCC609] hover:border-[#FCC609] text-ink transition-all duration-200 flex items-center justify-center shadow-2xs hover:shadow-xs group"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          6. SPONSOR A CHILD (Full-width Dawn pale gold band)
          ======================================================== */}
      <section className="bg-[#FFF3D1] py-16 sm:py-24 border-b border-[#FCC609]/30">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-ink">
              Child Sponsorship Program
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink leading-tight">
              One child. Full education. <br />
              PKR 3,500 every month.
            </h2>
            <p className="text-xs sm:text-sm text-ink/80 max-w-lg mx-auto">
              Your monthly sponsorship covers tuition, books, customized uniforms, sturdy shoes, daily nutrition, and periodic health screenings.
            </p>
          </div>

          {/* Amount Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { amount: 'PKR 3,500', label: '1 Child' },
              { amount: 'PKR 7,000', label: '2 Children' },
              { amount: 'PKR 10,500', label: '3 Children' },
              { amount: 'Custom Amount', label: 'Flexible' },
            ].map((chip, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-full bg-white border border-[#FCC609] text-xs font-bold text-ink shadow-sm"
              >
                <span>{chip.amount}</span>
                <span className="text-[10px] text-pen-gray ml-1.5 font-normal">({chip.label})</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/sponsor"
              className="btn-primary"
            >
              <Heart className="w-4 h-4 fill-ink" />
              <span>Sponsor a Child Online</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. LATEST NEWS & DRIVES (1 large featured + 3 smaller)
          ======================================================== */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-20 sm:py-28 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#EB543B]">
              Field Dispatches
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mt-1">
              Latest News & Reports
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs font-bold text-ink hover:text-[#EB543B] inline-flex items-center gap-1"
          >
            <span>All articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured Post (Large on Left) */}
          {featuredPost && (
            <div className="lg:col-span-7 card-clean overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden bg-paper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <span className="px-2.5 py-0.5 rounded-full bg-paper border border-mist text-ink text-[10px] font-bold uppercase">
                  {featuredPost.category} · {featuredPost.publishedAt}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink group-hover:text-[#EB543B] transition-colors leading-snug">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h3>
                <p className="text-xs sm:text-sm text-pen-gray leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="text-xs font-bold text-ink hover:text-[#EB543B] inline-flex items-center gap-1"
                  >
                    <span>Read full article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* List of 3 Smaller Posts (Right) */}
          <div className="lg:col-span-5 space-y-4">
            {sidePosts.map((post) => (
              <div
                key={post.id}
                className="card-clean p-5 hover:bg-paper transition-colors group flex flex-col justify-between space-y-2"
              >
                <span className="text-[10px] font-bold text-pen-gray uppercase tracking-wider">
                  {post.category} · {post.publishedAt}
                </span>
                <h4 className="font-display font-semibold text-base text-ink group-hover:text-[#EB543B] transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h4>
                <p className="text-xs text-pen-gray line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. JOIN THE TEAM (Ink Band with Scrolling 10 Teams)
          ======================================================== */}
      <section className="bg-ink text-white py-14 overflow-hidden border-t border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FCC609]">
                Recruitment
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mt-0.5">
                Are you a UET Taxila student?
              </h2>
            </div>
            <Link
              href="/join"
              className="btn-primary"
            >
              <span>Join a Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Marquee list of the teams */}
          <div className="pt-4 border-t border-white/10 flex items-center gap-6 overflow-x-auto whitespace-nowrap scrollbar-none text-xs font-semibold text-white/70">
            {['Teaching Team', 'IT Box Team', 'CSP Team', 'Chaddar Team', 'Ration Drive Team', 'Winter Warmth Team', 'Media & Content Team', 'Finance & Audit Team', 'Outreach Team', 'Events Team'].map((teamName, idx, arr) => (
              <span key={teamName} className="inline-flex items-center gap-2 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FCC609]"></span>
                <span>{teamName}</span>
                {idx < arr.length - 1 && <span className="text-white/20 ml-4">·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
