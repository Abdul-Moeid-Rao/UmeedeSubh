import React from 'react';
import Link from 'next/link';
import {
  Users,
  Award,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Layers,
  ArrowRight,
} from 'lucide-react';

export default function HierarchyPage() {
  const levels = [
    {
      level: 1,
      title: 'Level 1: Cabinet & Heads',
      badge: 'Executive Leadership',
      description:
        'The primary governing body consisting of the President, General Secretary, Vice President, Treasurer, and the dedicated Heads of all operational wings (Pehla Qadam, IT Box, Chaddar, Survey, etc.).',
      shownData: 'Photograph, Full Name, Designation Title, Team Assignment, Department',
      responsibilities: [
        'Formulate society policies and annual strategic roadmap',
        'Direct supervision of flagship projects and campaigns',
        'Official liaison with UET Administration and Faculty Advisor',
        'Authorizing budget expenditures and post-drive financial audits',
      ],
    },
    {
      level: 2,
      title: 'Level 2: Co-Heads',
      badge: 'Operational Leadership',
      description:
        'Experienced senior members paired with each Team Head to drive day-to-day execution, lead on-ground operations, and ensure institutional succession.',
      shownData: 'Photograph, Full Name, Designation Title, Team Assignment, Department',
      responsibilities: [
        'Manage task delegation and volunteer teacher timetables',
        'Direct supervision of laboratory classes and distribution logistics',
        'Coordinate survey verification runs across target neighborhoods',
      ],
    },
    {
      level: 3,
      title: 'Level 3: Members',
      badge: 'Core Functional Workforce',
      description:
        'Active student volunteers who have completed a full probationary semester and demonstrated consistent commitment to daily school classes or drive preparations.',
      shownData: 'Full Name, Team Assignment, Department',
      responsibilities: [
        'Daily evening tutoring at Pehla Qadam School',
        'Conducting IT Box lab sessions and software walkthroughs',
        'Survey data entry, ration packaging, and warehouse management',
      ],
    },
    {
      level: 4,
      title: 'Level 4: Executive Members',
      badge: 'Junior Cabinet Senior Tier',
      description:
        'Promising 2nd and 3rd-year engineering students serving in the Junior Cabinet who assist team leads in media coverage, graphics design, and documentation.',
      shownData: 'Full Name, Team Assignment, Department',
      responsibilities: [
        'Drafting drive announcements and social coverage',
        'Supporting classroom discipline and student attendance registers',
        'Coordinating event logistics during campus awareness camps',
      ],
    },
    {
      level: 5,
      title: 'Level 5: General Members',
      badge: 'General Student Body',
      description:
        'Newly inducted student volunteers from the latest intake who are under mentorship and participating across society activities to explore their field of interest.',
      shownData: 'Full Name, Team Assignment, Department',
      responsibilities: [
        'Participating in campus drives and distribution drives',
        'Assisting senior teachers in remedial reading circles',
        'Attending society training and skill-building sessions',
      ],
    },
  ];

  return (
    <div className="bg-[var(--white)] min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--mist)] pt-14 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--white)] text-[var(--ink)] text-xs font-semibold border border-[var(--mist)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
            Governance Framework · UET Taxila Welfare
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)] tracking-tight">
            5-Tier Organizational Hierarchy
          </h1>
          <p className="mt-3 text-lg text-[var(--gray)] max-w-2xl font-light">
            UMEED E SUBH operates on a democratic, merit-based student leadership structure that ensures institutional continuity, transparent stewardship, and smooth leadership transition every academic year.
          </p>
        </div>
      </section>

      {/* Main Hierarchy List */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-14 space-y-6">
        {levels.map((lvl) => (
          <div key={lvl.level} className="card-clean p-6 sm:p-8 bg-[var(--white)] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--mist)] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--paper)] text-[var(--ink)] border border-[var(--mist)] flex items-center justify-center font-display font-bold text-base">
                  {lvl.level}
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-[var(--ink)]">
                    {lvl.title}
                  </h2>
                  <span className="text-xs text-[var(--gray)]">{lvl.badge}</span>
                </div>
              </div>

              <div className="text-xs text-[var(--gray)] bg-[var(--paper)] px-3 py-1.5 rounded-md border border-[var(--mist)]">
                Public Visibility: <strong className="text-[var(--ink)]">{lvl.shownData}</strong>
              </div>
            </div>

            <p className="text-sm text-[var(--gray)] leading-relaxed">
              {lvl.description}
            </p>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] block mb-2.5">
                Key Mandates & Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--ink)]">
                {lvl.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-1.5 shrink-0"></span>
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Privacy Notice */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-12">
        <div className="card-clean p-6 bg-[var(--paper)] flex items-start gap-4 text-xs">
          <ShieldCheck className="w-6 h-6 text-[var(--ink)] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-[var(--ink)]">Student Privacy & Data Protection Policy</h3>
            <p className="text-[var(--gray)] leading-relaxed">
              In adherence to ethical digital protocols, only Heads and Co-Heads display public portrait photography on this website with explicit consent. Members, Executive, and General tiers are recognized on the public roster by name, department, and team assignment only.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
