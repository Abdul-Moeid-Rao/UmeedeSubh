import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Award,
  Heart,
  Users,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { store } from '@/lib/data';

export default function AboutPage() {
  const currentSession = store.getCurrentSession();
  const cabinetMembers = store.getCabinetMembers(currentSession?.id).slice(0, 6);

  return (
    <div className="bg-[var(--white)] min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--mist)] pt-14 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--white)] text-[var(--ink)] text-xs font-semibold border border-[var(--mist)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
            Founded in 2014 · Official Welfare Society of UET Taxila
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)] tracking-tight">
            About UMEED E SUBH
          </h1>
          <p className="mt-3 text-lg text-[var(--gray)] max-w-2xl font-light">
            Founded over a decade ago by engineering undergraduates, dedicated to the educational, digital, and social elevation of underprivileged children and families across Taxila.
          </p>
        </div>
      </section>

      {/* Sub-navigation tabs */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 -mt-6">
        <div className="card-clean p-2 bg-[var(--white)] grid grid-cols-1 sm:grid-cols-3 gap-2">
          <Link
            href="/about/story"
            className="flex items-center justify-between p-3.5 rounded-lg hover:bg-[var(--paper)] text-[var(--ink)] font-semibold text-xs sm:text-sm transition-colors border border-transparent hover:border-[var(--mist)]"
          >
            <span className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" />
              Our Story & 2014–2026 Timeline
            </span>
            <ArrowRight className="w-4 h-4 text-[var(--gray)]" />
          </Link>
          <Link
            href="/about/hierarchy"
            className="flex items-center justify-between p-3.5 rounded-lg hover:bg-[var(--paper)] text-[var(--ink)] font-semibold text-xs sm:text-sm transition-colors border border-transparent hover:border-[var(--mist)]"
          >
            <span className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[var(--ember)]" />
              5-Tier Student Hierarchy
            </span>
            <ArrowRight className="w-4 h-4 text-[var(--gray)]" />
          </Link>
          <Link
            href="/cabinet"
            className="flex items-center justify-between p-3.5 rounded-lg hover:bg-[var(--paper)] text-[var(--ink)] font-semibold text-xs sm:text-sm transition-colors border border-transparent hover:border-[var(--mist)]"
          >
            <span className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[var(--ink)]" />
              Cabinet Archive (All Sessions)
            </span>
            <ArrowRight className="w-4 h-4 text-[var(--gray)]" />
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-clean p-8 bg-[var(--white)] space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--gray)]">
              Core Purpose
            </span>
            <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">Our Mission</h2>
            <p className="text-sm text-[var(--gray)] leading-relaxed">
              To eradicate child labor and educational deprivation in Taxila by providing free, high-caliber evening schooling, practical digital literacy, and vocational empowerment to underprivileged children and marginalized women through the structured voluntary service of UET Taxila students.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs text-[var(--ink)] font-medium">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]"></span>
                100% free education with no hidden costs or fees
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]"></span>
                Dignified, verified aid distribution via physical surveys
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]"></span>
                Empowering the next generation with modern IT and vocational skills
              </li>
            </ul>
          </div>

          <div className="card-clean p-8 bg-[var(--white)] space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--gray)]">
              Long-term Horizon
            </span>
            <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">Our Vision</h2>
            <p className="text-sm text-[var(--gray)] leading-relaxed">
              A self-reliant, literate Pakistan where every underprivileged child near industrial hubs and university peripheries has access to dignified education, every woman acquires independent vocational livelihood, and university youth discover the lifelong value of civic stewardship.
            </p>
            <div className="pt-2 bg-[var(--paper)] p-4 rounded-lg border border-[var(--mist)] space-y-1">
              <div className="text-xs font-bold text-[var(--ink)]">Institutional Guarantee</div>
              <p className="text-xs text-[var(--gray)] leading-relaxed">
                Registered under the Directorate of Student Affairs (DSA), UET Taxila, with strict faculty advisory oversight and audited accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Overview */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--gray)]">
              Governance
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--ink)] mt-1">
              Current Executive Cabinet ({currentSession?.label})
            </h2>
          </div>
          <Link href="/cabinet" className="btn-secondary text-xs">
            View All Cabinet Sessions (2014–2026)
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cabinetMembers.map((member) => (
            <div key={member.id} className="card-clean p-5 bg-[var(--white)] space-y-3">
              <div className="aspect-[4/3] rounded-lg bg-[var(--paper)] overflow-hidden border border-[var(--mist)]">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--paper)] border border-[var(--mist)] text-[var(--gray)]">
                  {member.teamName}
                </span>
                <h3 className="font-display font-semibold text-lg text-[var(--ink)] mt-1.5">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-[var(--ember)]">{member.designation}</div>
                <div className="text-[11px] text-[var(--gray)] mt-0.5">{member.department}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
