'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { PROJECTS_DATA } from '@/lib/data';

export default function ProjectsIndexPage() {
  const [filter, setFilter] = useState<'all' | 'regular' | 'yearly'>('all');

  const filteredProjects =
    filter === 'all' ? PROJECTS_DATA : PROJECTS_DATA.filter((p) => p.type === filter);

  return (
    <div className="bg-[var(--white)] min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--mist)] pt-14 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--white)] text-[var(--ink)] text-xs font-semibold border border-[var(--mist)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
            10+ Years of Documented On-Ground Work
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)] tracking-tight">
            Our Projects & Relief Drives
          </h1>
          <p className="mt-3 text-lg text-[var(--gray)] max-w-2xl font-light">
            From daily evening classrooms and IT labs to Ramadan food parcels and winter quilts — every initiative runs with full public accountability.
          </p>
        </div>
      </section>

      {/* Filter Pills + Content */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--mist)] pb-4">
          <div className="flex items-center gap-2">
            {(['all', 'regular', 'yearly'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  filter === f
                    ? 'bg-[var(--ink)] text-[var(--white)]'
                    : 'bg-[var(--white)] text-[var(--ink)] border border-[var(--mist)] hover:border-[var(--ink)]'
                }`}
              >
                {f === 'all' ? `All Initiatives (${PROJECTS_DATA.length})` : f === 'regular' ? 'Daily Regular Projects (4)' : 'Yearly Relief Drives (5)'}
              </button>
            ))}
          </div>

          <div className="text-xs text-[var(--gray)]">
            Admissions handled <strong>in-person</strong> near Gate 2, UET Taxila only
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-clean bg-[var(--white)] flex flex-col justify-between group overflow-hidden"
            >
              {/* Cover Image */}
              <div className="relative h-44 overflow-hidden bg-[var(--paper)]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent"></div>

                <div className="absolute top-3 left-3">
                  {project.type === 'regular' ? (
                    project.admissionsOpen ? (
                      <span className="px-2.5 py-1 rounded-full bg-[var(--gold)] text-[var(--ink)] font-bold text-[10px] tracking-wide uppercase">
                        In-Person Admissions Open
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-[var(--white)]/80 text-[var(--ink)] font-semibold text-[10px] backdrop-blur-sm">
                        Daily Regular
                      </span>
                    )
                  ) : (
                    <span className="px-2.5 py-1 rounded-full bg-[var(--ember)] text-[var(--white)] font-bold text-[10px] uppercase">
                      Annual Community Drive
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-[var(--white)]">
                  <h3 className="font-display text-xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <p className="text-xs text-[var(--gray)] leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>

                  {project.timing && (
                    <div className="flex items-center gap-1.5 text-xs text-[var(--ink)]">
                      <Clock className="w-3.5 h-3.5 text-[var(--gold)] shrink-0" />
                      <span>{project.timing}</span>
                    </div>
                  )}

                  {project.location && (
                    <div className="flex items-center gap-1.5 text-xs text-[var(--gray)]">
                      <MapPin className="w-3.5 h-3.5 text-[var(--ember)] shrink-0" />
                      <span>{project.location}</span>
                    </div>
                  )}

                  {project.highlights && project.highlights.length > 0 && (
                    <div className="space-y-1 pt-1">
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[var(--ink)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0"></span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[var(--mist)] flex items-center justify-between gap-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--ink)] hover:text-[var(--ember)] transition-colors"
                  >
                    Full Overview <ArrowRight className="w-3 h-3" />
                  </Link>

                  {project.slug === 'csp' ? (
                    <Link href="/sponsor" className="btn-primary text-xs">
                      Sponsor a Child
                    </Link>
                  ) : project.type === 'regular' ? (
                    <Link
                      href={`/projects/${project.slug}#admissions`}
                      className="btn-secondary text-xs"
                    >
                      Admission Info
                    </Link>
                  ) : (
                    <Link href="/donate" className="btn-primary text-xs">
                      Donate to Drive
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
