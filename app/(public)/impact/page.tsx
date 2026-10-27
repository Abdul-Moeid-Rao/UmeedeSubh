'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Award,
  Calendar,
  FileText,
  TrendingUp,
  CheckCircle2,
  Users,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Heart,
} from 'lucide-react';
import {
  IMPACT_STATS_DATA,
  DRIVE_EDITIONS_DATA,
  RESULTS_DATA,
  STORIES_DATA,
} from '@/lib/data';

export default function ImpactPage() {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  const filteredDrives =
    selectedYear === 'all'
      ? DRIVE_EDITIONS_DATA
      : DRIVE_EDITIONS_DATA.filter((d) => d.year === selectedYear);

  const filteredResults =
    selectedYear === 'all'
      ? RESULTS_DATA
      : RESULTS_DATA.filter((r) => r.year === selectedYear);

  return (
    <div className="bg-[var(--white)] min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--mist)] pt-14 pb-16 text-center">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--white)] text-[var(--ink)] text-xs font-semibold border border-[var(--mist)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
            Audited &amp; Transparent Social Metrics
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)] tracking-tight">
            Ground Impact &amp; Transparency Reports
          </h1>
          <p className="mt-3 text-lg text-[var(--gray)] max-w-2xl mx-auto font-light">
            Every rupee, every child taught, and every family supported across 10+ years is documented, audited, and publicly available.
          </p>
        </div>
      </section>

      {/* High-level Counters: 5-stat strip */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 card-clean bg-[var(--white)] p-4 sm:p-6">
          {IMPACT_STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="p-3 text-center rounded-lg hover:bg-[var(--paper)] transition-colors"
            >
              <div className="font-display text-2xl sm:text-4xl font-bold text-[var(--ink)]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[var(--gray)] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Year Filter Controls */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[var(--paper)] p-4 rounded-lg border border-[var(--mist)]">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
              Filter by Year:
            </span>
            <button
              onClick={() => setSelectedYear('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedYear === 'all'
                  ? 'bg-[var(--ink)] text-[var(--white)]'
                  : 'bg-[var(--white)] text-[var(--ink)] border border-[var(--mist)] hover:border-[var(--ink)]'
              }`}
            >
              All Time
            </button>
            <button
              onClick={() => setSelectedYear(2026)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedYear === 2026
                  ? 'bg-[var(--ink)] text-[var(--white)]'
                  : 'bg-[var(--white)] text-[var(--ink)] border border-[var(--mist)] hover:border-[var(--ink)]'
              }`}
            >
              2026
            </button>
            <button
              onClick={() => setSelectedYear(2025)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedYear === 2025
                  ? 'bg-[var(--ink)] text-[var(--white)]'
                  : 'bg-[var(--white)] text-[var(--ink)] border border-[var(--mist)] hover:border-[var(--ink)]'
              }`}
            >
              2025
            </button>
            <button
              onClick={() => setSelectedYear(2024)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedYear === 2024
                  ? 'bg-[var(--ink)] text-[var(--white)]'
                  : 'bg-[var(--white)] text-[var(--ink)] border border-[var(--mist)] hover:border-[var(--ink)]'
              }`}
            >
              2024
            </button>
          </div>

          <div className="text-xs text-[var(--gray)]">
            Showing: <strong className="text-[var(--ink)]">{selectedYear === 'all' ? 'All Sessions (10 Years)' : `Year ${selectedYear}`}</strong>
          </div>
        </div>
      </section>

      {/* Pehla Qadam Annual Board Results */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--mist)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
              <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
                Pehla Qadam School Board Results
              </h2>
            </div>
            <p className="text-xs text-[var(--gray)] mt-0.5">
              Middle Board and Matriculation results of students taught 100% free by UET volunteers.
            </p>
          </div>
          <span className="text-xs font-semibold text-[var(--leaf)] bg-[var(--white)] px-3 py-1 rounded-full border border-[var(--mist)]">
            100% Passing Track Record
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredResults.map((result) => (
            <div
              key={result.id}
              className="card-clean p-5 bg-[var(--white)] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={result.photo}
                    alt={result.studentName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[var(--mist)] shrink-0 grayscale"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-[var(--ink)] bg-[var(--dawn)] px-2 py-0.5 rounded-full border border-[var(--gold)]">
                      {result.position}
                    </span>
                    <h3 className="font-display font-semibold text-[var(--ink)] text-sm mt-1">{result.studentName}</h3>
                    <p className="text-[11px] text-[var(--gray)]">{result.classLevel}</p>
                  </div>
                </div>

                <div className="bg-[var(--paper)] p-2.5 rounded-lg border border-[var(--mist)] text-center">
                  <span className="text-[10px] text-[var(--gray)] block">Marks Obtained</span>
                  <div className="font-display text-lg font-bold text-[var(--ink)]">{result.marks}</div>
                </div>
              </div>

              <div className="text-[11px] text-[var(--gray)] pt-2 border-t border-[var(--mist)] flex items-center justify-between">
                <span>Class of {result.year}</span>
                <span className="text-[var(--leaf)] font-medium">Consent Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Drive Reports & Archive */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--mist)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--ember)]"></span>
              <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
                Welfare Drive Reports &amp; Audits
              </h2>
            </div>
            <p className="text-xs text-[var(--gray)] mt-0.5">
              Itemized distributions across Ramadan food rations, winter lihafs, and school uniforms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDrives.map((drive) => (
            <div
              key={drive.id}
              className="card-clean bg-[var(--white)] flex flex-col justify-between"
            >
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--dawn)] text-[var(--ink)] font-bold text-[10px] border border-[var(--gold)]">
                    {drive.year}{drive.phase ? ` · ${drive.phase}` : ''}
                  </span>
                  <span className="text-xs text-[var(--gray)] font-medium">{drive.eventDate}</span>
                </div>

                <h3 className="font-display font-semibold text-base text-[var(--ink)] leading-snug">{drive.title}</h3>
                <p className="text-xs text-[var(--gray)] line-clamp-3 leading-relaxed">{drive.summary}</p>

                <div className="grid grid-cols-2 gap-2 bg-[var(--paper)] p-2.5 rounded-lg border border-[var(--mist)] text-center text-xs">
                  <div>
                    <span className="font-display font-bold text-[var(--ink)]">{drive.beneficiariesCount}</span>
                    <span className="text-[10px] text-[var(--gray)] block">Families Helped</span>
                  </div>
                  <div>
                    <span className="font-display font-bold text-[var(--ink)]">
                      PKR {drive.amountSpent.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-[var(--gray)] block">Audited Cost</span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-4 flex items-center justify-between text-xs">
                <span className="text-[var(--leaf)] font-medium">Status: Verified</span>
                <Link
                  href={`/projects/${drive.projectSlug}`}
                  className="font-bold text-[var(--ink)] hover:text-[var(--ember)] inline-flex items-center gap-1 transition-colors"
                >
                  View Details <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Institutional Audit CTA: Ink background band */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="bg-[var(--ink)] text-[var(--white)] rounded-2xl p-8 sm:p-10 border border-[var(--ink)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider">
              Financial Transparency
            </span>
            <h3 className="font-display text-2xl font-semibold">Need Certified Audit Reports?</h3>
            <p className="text-xs sm:text-sm text-[var(--white)]/70 max-w-lg">
              For UET Administration, media houses, or corporate CSR partners requiring audited financial statements or drive documentation, contact our Documentation Wing.
            </p>
          </div>

          <Link
            href="/contact"
            className="btn-primary shrink-0"
          >
            Request Official Audit Dossier
          </Link>
        </div>
      </section>
    </div>
  );
}
