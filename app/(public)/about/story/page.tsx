'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Heart,
  Users,
  Compass,
} from 'lucide-react';
import { HISTORY_EVENTS_DATA } from '@/lib/data';

export default function OurStoryPage() {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  const filteredEvents =
    selectedYear === 'all'
      ? HISTORY_EVENTS_DATA
      : HISTORY_EVENTS_DATA.filter((e) => e.year === selectedYear);

  const years = Array.from(new Set(HISTORY_EVENTS_DATA.map((e) => e.year))).sort((a, b) => a - b);

  return (
    <div className="space-y-20 pb-24 bg-white text-ink">
      {/* ========================================================
          SPLIT HERO (Section 8: Our Story)
          Founding photo on one side, "Founded in 2014" on other
          ======================================================== */}
      <section className="bg-paper border-b border-mist pt-28 pb-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EB543B]">
                The Founding Chronicle
              </span>
              <h1 className="font-display font-semibold text-3xl sm:text-5xl text-ink leading-tight">
                Founded in 2014. <br />
                <span className="pen-nib-line">A walk outside Gate 2</span> that changed hundreds of lives.
              </h1>
              <p className="text-base sm:text-lg text-pen-gray leading-relaxed max-w-xl font-light">
                Ten years ago, a handful of engineering undergraduate students at UET Taxila noticed that children right outside the university gates were being denied literacy. They chose not to look away.
              </p>
              <div className="font-urdu text-base text-[#1B1A1F] leading-loose pt-1">
                ایک جدوجہد، باوقار اور خواندہ پاکستان کے لیے
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="card-clean overflow-hidden bg-white shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                  alt="Founding batch of UET Taxila students in 2014"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="p-4 text-xs text-pen-gray bg-white border-t border-mist">
                  <strong className="text-ink">Autumn 2014:</strong> The first informal circle of UET Taxila undergraduates establishing UMEED E SUBH.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          LONG-FORM EDITORIAL STORY (Narrow Column)
          ======================================================== */}
      <section className="max-w-[760px] mx-auto px-5 sm:px-8 space-y-10 text-left">
        <div className="space-y-4">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink">
            Why We Started: The Reality Outside Gate 2
          </h2>
          <div className="w-16 h-0.5 bg-[#FCC609]"></div>
          <p className="text-base text-pen-gray leading-relaxed">
            In the spring of 2014, senior engineering students at UET Taxila walked outside Gate 2 after evening laboratory sessions. They observed school-aged children collecting scrap metal, others working inside grease-stained roadside auto repair shops, and young girls carrying heavy loads.
          </p>
          <p className="text-base text-pen-gray leading-relaxed">
            While cutting-edge engineering equations were discussed inside the university lecture theaters, just a hundred meters beyond the gate, children were losing their entire childhood to illiteracy. These students resolved that an engineering degree carries a moral obligation to the surrounding community.
          </p>
        </div>

        <div className="card-clean p-8 bg-paper border border-mist space-y-3">
          <h3 className="font-display font-semibold text-lg text-ink">The Founding Covenant</h3>
          <p className="text-sm text-pen-gray leading-relaxed">
            From day one, the founders instituted a foundational rule: <em>every project must be sustained physically on the ground</em>. Funds were gathered student-by-student from weekly pocket money, and evening classes were taught with blackboard slates propped against mud walls.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink">
            From 15 Floor Mats to an Enduring Institution
          </h2>
          <div className="w-16 h-0.5 bg-[#FCC609]"></div>
          <p className="text-base text-pen-gray leading-relaxed">
            The first classroom of <strong>Pehla Qadam School</strong> in 2015 held just fifteen children sitting on woven mats. Parents were initially fearful that schooling would reduce scrap-collection income. Student volunteers visited households every evening, reassuring mothers that literacy would permanently liberate their children from poverty.
          </p>
          <p className="text-base text-pen-gray leading-relaxed">
            Over the following decade, this single evening classroom grew into four daily initiatives—including the <strong>IT Box Computer Lab</strong> and <strong>Chaddar Stitching Academy for Women</strong>—and comprehensive regional food and winter relief campaigns.
          </p>
        </div>
      </section>

      {/* ========================================================
          VERTICAL TIMELINE (2014 to 2026)
          Gold line draws with scroll, Fraunces years, alternating items
          ======================================================== */}
      <section className="max-w-[1000px] mx-auto px-5 sm:px-8 space-y-12 pt-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EB543B]">
            Chronology of Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink">
            10-Year Milestone Timeline
          </h2>
          <p className="text-xs sm:text-sm text-pen-gray max-w-md mx-auto">
            A decade of verified, documented ground reality at UET Taxila.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setSelectedYear('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedYear === 'all'
                  ? 'bg-ink text-white shadow'
                  : 'bg-paper text-pen-gray hover:bg-mist'
              }`}
            >
              All Years
            </button>
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedYear === yr
                    ? 'bg-ink text-white shadow'
                    : 'bg-paper text-pen-gray hover:bg-mist'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline with vertical gold line */}
        <div className="relative border-l-2 border-[#FCC609] ml-4 md:ml-32 space-y-12 py-4">
          {filteredEvents.map((event) => (
            <div key={event.id} className="relative pl-6 md:pl-10 group">
              {/* Gold dot on the line */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#FCC609] border-2 border-white shadow-sm"></div>

              {/* Year marker on left for desktop */}
              <div className="hidden md:block absolute -left-32 top-0 text-right w-24">
                <span className="font-display text-2xl font-bold text-ink">
                  {event.year}
                </span>
              </div>

              {/* Event Card */}
              <div className="card-clean p-6 sm:p-8 space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="md:hidden inline-block px-2.5 py-0.5 rounded-full bg-[#FFF3D1] text-ink font-bold text-xs">
                    {event.year}
                  </span>
                  <span className="text-[10px] text-pen-gray uppercase font-semibold">
                    Documented Milestone
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-ink leading-snug">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-pen-gray leading-relaxed">
                  {event.description}
                </p>

                {event.photo && (
                  <div className="pt-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={event.photo}
                      alt={event.title}
                      className="w-full h-56 sm:h-72 object-cover rounded-[10px] border border-mist"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation footer */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center pt-8">
        <Link
          href="/about/hierarchy"
          className="btn-secondary"
        >
          <span>View 5-Level Student Hierarchy System</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
