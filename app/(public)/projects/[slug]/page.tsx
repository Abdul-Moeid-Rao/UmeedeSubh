'use client';

import React, { use, Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Clock,
  MapPin,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  AlertCircle,
  FileText,
  Users,
  Award,
  Sparkles,
} from 'lucide-react';
import {
  PROJECTS_DATA,
  DRIVE_EDITIONS_DATA,
  STORIES_DATA,
  RESULTS_DATA,
  store,
} from '@/lib/data';

function ProjectDetailsContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;

  const project = store.getProjectBySlug(slug) || PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isRegular = project.type === 'regular';
  const isPehla = project.slug === 'pehla-qadam';
  const isIT = project.slug === 'it-box';
  const isChaddar = project.slug === 'chaddar';
  const isCSP = project.slug === 'csp';

  const driveEditions = DRIVE_EDITIONS_DATA.filter((d) => d.projectSlug === slug);
  const studentResults = isPehla ? RESULTS_DATA : [];

  return (
    <div className="space-y-16 pb-20 bg-white text-ink">
      {/* Hero Header */}
      <section className="bg-paper border-b border-mist pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs text-pen-gray hover:text-ink transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Projects & Drives
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-mist text-xs font-semibold text-ink">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
              {isRegular ? 'Daily Regular Initiative' : 'Yearly Community Relief Drive'}
            </span>

            {project.admissionsOpen && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--dawn)] border border-[var(--gold)] text-ink text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-[var(--leaf)] animate-pulse" />
                Admissions Open (In Person)
              </span>
            )}
          </div>

          <h1 className="font-display font-semibold text-3xl sm:text-5xl text-ink tracking-tight max-w-3xl">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-pen-gray max-w-3xl font-light">
            {project.shortDesc}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {isCSP ? (
              <Link
                href="/sponsor"
                className="btn-primary"
              >
                <Heart className="w-4 h-4 fill-ink" />
                Sponsor a Child (PKR 3,500/mo)
              </Link>
            ) : isRegular ? (
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#admissions"
                  className="btn-primary"
                >
                  In-Person Admission Guide
                </a>
                <Link
                  href="/donate"
                  className="btn-secondary"
                >
                  <Heart className="w-4 h-4 text-[var(--ember)]" />
                  Support this Program
                </Link>
              </div>
            ) : (
              <Link
                href="/donate"
                className="btn-primary"
              >
                <Heart className="w-4 h-4 fill-ink" />
                Donate to this Drive
              </Link>
            )}

            {isIT && (
              <Link
                href="/verify-certificate"
                className="btn-secondary"
              >
                <ShieldCheck className="w-4 h-4 text-[var(--leaf)]" />
                Verify IT Box Certificates
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Main Details & Visuals */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Narrative & Features */}
          <div className="lg:col-span-8 space-y-10">
            <div className="card-clean p-6 sm:p-10 bg-white space-y-6">
              <div className="relative h-72 sm:h-96 rounded-[8px] overflow-hidden bg-paper border border-mist">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-pen-gray leading-relaxed whitespace-pre-line">
                {project.content}
              </div>

              {project.highlights && project.highlights.length > 0 && (
                <div className="pt-4 border-t border-mist">
                  <h3 className="font-display font-semibold text-sm text-ink uppercase tracking-wider mb-3">
                    Key Highlights & Operations
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 bg-paper p-3 rounded-[8px] border border-mist text-xs text-ink font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--leaf)] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* In-Person Admissions Guide (For Pehla Qadam, IT Box, Chaddar) */}
            {isRegular && !isCSP && (
              <div
                id="admissions"
                className="card-clean p-6 sm:p-10 bg-white border-2 border-[var(--gold)]/60 space-y-6 scroll-mt-24"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-[10px] bg-[var(--dawn)] border border-[var(--gold)] text-ink flex items-center justify-center font-bold text-xl">
                    📍
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[var(--ember)] uppercase tracking-widest">
                      Physical Registration Protocol
                    </span>
                    <h2 className="font-display font-semibold text-2xl text-ink">
                      How to Get Admission (In-Person Only)
                    </h2>
                  </div>
                </div>

                <div className="p-4 rounded-[8px] bg-[var(--dawn)] border border-[var(--gold)] text-ink text-xs sm:text-sm space-y-2">
                  <div className="font-bold flex items-center gap-1.5 text-ink">
                    <AlertCircle className="w-4 h-4 text-[var(--ember)]" />
                    Important Notice: No Online Admissions
                  </div>
                  <p className="text-pen-gray">
                    In accordance with our community safeguarding and verification protocols, admissions to <strong>{project.title}</strong> happen exclusively in person. There is no online application form, and the website does not collect applicant data.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
                  <div className="space-y-3 bg-paper p-5 rounded-[8px] border border-mist">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[var(--leaf)]" /> Timings & Days
                    </h4>
                    <p className="text-pen-gray">{project.timing}</p>
                    <div className="pt-2">
                      <span className="font-semibold text-ink block mb-1">What to Bring:</span>
                      <ul className="list-disc list-inside text-pen-gray space-y-1">
                        <li>Child&apos;s B-Form copy / Student CNIC</li>
                        <li>Parent or Guardian&apos;s CNIC copy</li>
                        <li>2 passport-sized photographs</li>
                        <li>Previous school report card (if applicable)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3 bg-paper p-5 rounded-[8px] border border-mist">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[var(--leaf)]" /> Exact Location
                    </h4>
                    <p className="text-pen-gray">{project.location}</p>
                    <div className="pt-2 text-xs text-pen-gray">
                      Located right outside <strong>Gate 2 of UET Taxila</strong>, within easy walking distance from the main GT Road Taxila junction.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-[8px] bg-paper border border-mist flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs">
                    <span className="font-bold text-ink block">Questions before visiting?</span>
                    <span className="text-pen-gray">Reach out to our campus volunteers via WhatsApp helpline.</span>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-secondary text-xs shrink-0"
                  >
                    Contact Society
                  </Link>
                </div>
              </div>
            )}

            {/* Pehla Qadam Board Results (If Pehla Qadam) */}
            {isPehla && studentResults.length > 0 && (
              <div className="card-clean p-6 sm:p-10 bg-white space-y-6">
                <div>
                  <span className="text-xs font-bold text-[var(--leaf)] uppercase tracking-widest">
                    Academic Results
                  </span>
                  <h3 className="font-display font-semibold text-2xl text-ink">
                    Pehla Qadam Brilliant Board Results
                  </h3>
                  <p className="text-xs text-pen-gray mt-0.5">
                    Verified Rawalpindi Board examination results of enrolled students.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {studentResults.map((res) => (
                    <div
                      key={res.id}
                      className="bg-paper p-4 rounded-[8px] border border-mist flex items-center gap-4"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={res.photo}
                        alt={res.studentName}
                        className="w-14 h-14 rounded-full object-cover border border-mist shrink-0"
                      />
                      <div className="overflow-hidden">
                        <span className="text-[10px] font-bold text-ink bg-white border border-mist px-2 py-0.5 rounded-full">
                          {res.position}
                        </span>
                        <h4 className="font-semibold text-ink text-sm mt-1 truncate">
                          {res.studentName}
                        </h4>
                        <div className="text-xs text-[var(--leaf)] font-bold">{res.marks}</div>
                        <div className="text-[11px] text-pen-gray">{res.classLevel} ({res.year})</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Drive Editions Archive (For Yearly Drives) */}
            {!isRegular && driveEditions.length > 0 && (
              <div className="card-clean p-6 sm:p-10 bg-white space-y-6">
                <div>
                  <span className="text-xs font-bold text-[var(--ember)] uppercase tracking-widest">
                    Past Campaigns
                  </span>
                  <h3 className="font-display font-semibold text-2xl text-ink">
                    Drive Editions & Transparent Reports
                  </h3>
                  <p className="text-xs text-pen-gray mt-0.5">
                    Audited numbers, beneficiary counts, and ground reports published after each drive.
                  </p>
                </div>

                <div className="space-y-6">
                  {driveEditions.map((ed) => (
                    <div
                      key={ed.id}
                      className="bg-paper rounded-[8px] p-5 border border-mist space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-mist">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-[var(--dawn)] border border-[var(--gold)] text-ink font-bold text-xs">
                              {ed.year} {ed.phase}
                            </span>
                            <span className="text-xs text-pen-gray">{ed.eventDate}</span>
                          </div>
                          <h4 className="font-display font-semibold text-base text-ink mt-1">{ed.title}</h4>
                        </div>

                        <div className="text-left sm:text-right">
                          <span className="text-xs text-pen-gray block">Audited Spend</span>
                          <span className="text-sm font-bold text-ink">
                            PKR {ed.amountSpent.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-pen-gray leading-relaxed">{ed.summary}</p>

                      <div className="grid grid-cols-2 gap-3 text-center text-xs">
                        <div className="bg-white p-2.5 rounded-[8px] border border-mist">
                          <div className="font-bold text-ink">{ed.beneficiariesCount}</div>
                          <div className="text-[10px] text-pen-gray">Families / Beneficiaries</div>
                        </div>
                        <div className="bg-white p-2.5 rounded-[8px] border border-mist">
                          <div className="font-bold text-ink">{ed.itemsCount}</div>
                          <div className="text-[10px] text-pen-gray">Packs Distributed</div>
                        </div>
                      </div>

                      {ed.reportUrl && (
                        <div className="pt-2 flex justify-end">
                          <a
                            href={ed.reportUrl}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-[var(--ember)] underline"
                          >
                            <FileText className="w-3.5 h-3.5" /> Download Itemized Drive Audit PDF
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Key Specs, Quick Actions */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Summary Card */}
            <div className="card-clean p-6 bg-white space-y-5">
              <h3 className="font-display font-semibold text-base text-ink pb-3 border-b border-mist">
                Program Overview
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-pen-gray block font-medium">Initiative Type</span>
                  <span className="font-semibold text-ink capitalize">
                    {project.type} ({isRegular ? 'Daily Running' : 'Seasonal Drive'})
                  </span>
                </div>

                {project.timing && (
                  <div>
                    <span className="text-pen-gray block font-medium">Class / Shift Timings</span>
                    <span className="font-semibold text-ink">{project.timing}</span>
                  </div>
                )}

                {project.location && (
                  <div>
                    <span className="text-pen-gray block font-medium">Location</span>
                    <span className="font-semibold text-ink">{project.location}</span>
                  </div>
                )}

                <div>
                  <span className="text-pen-gray block font-medium">Managed By</span>
                  <span className="font-semibold text-ink">
                    Official Student Volunteers of UET Taxila
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-2 border-t border-mist">
                <Link
                  href="/donate"
                  className="btn-primary w-full justify-center"
                >
                  <Heart className="w-4 h-4 fill-ink" />
                  Donate to this Cause
                </Link>

                <Link
                  href="/join"
                  className="btn-secondary w-full justify-center text-xs"
                >
                  <Users className="w-4 h-4" />
                  Volunteer for this Team
                </Link>
              </div>
            </div>

            {/* Verification box if IT Box */}
            {isIT && (
              <div className="card-clean p-6 bg-paper border border-mist space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[var(--leaf)]" />
                  <h4 className="font-display font-semibold text-sm text-ink">Certificate Registry</h4>
                </div>
                <p className="text-xs text-pen-gray leading-relaxed">
                  Have an IT Box completion certificate? Verify its authenticity directly against our database registry.
                </p>
                <Link
                  href="/verify-certificate"
                  className="btn-primary w-full justify-center text-xs"
                >
                  Verify Certificate Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<div className="min-h-screen py-24 text-center text-pen-gray">Loading project details...</div>}>
      <ProjectDetailsContent params={params} />
    </Suspense>
  );
}
