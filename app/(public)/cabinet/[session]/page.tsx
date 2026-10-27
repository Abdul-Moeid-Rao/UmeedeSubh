'use client';

import React, { useState, use, Suspense } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Users,
  Award,
  CheckCircle2,
  Calendar,
  Layers,
  GraduationCap,
} from 'lucide-react';
import { store } from '@/lib/data';
import { CabinetMember } from '@/lib/types';

function SessionDetailsContent({
  params,
}: {
  params: Promise<{ session: string }>;
}) {
  const unwrappedParams = use(params);
  const sessionLabel = decodeURIComponent(unwrappedParams.session);

  const session =
    store.getSessions().find((s) => s.label === sessionLabel) || store.getCurrentSession();
  const allMembers = store.getCabinetMembers(session?.id);

  const [levelFilter, setLevelFilter] = useState<number | 'all' | 'junior'>('all');

  let filteredMembers = allMembers;
  if (levelFilter === 'junior') {
    filteredMembers = allMembers.filter((m) => m.body === 'junior_cabinet');
  } else if (levelFilter !== 'all') {
    filteredMembers = allMembers.filter((m) => m.level === levelFilter);
  }

  const level1 = allMembers.filter((m) => m.level === 1);
  const level2 = allMembers.filter((m) => m.level === 2);
  const level3 = allMembers.filter((m) => m.level === 3);
  const level4 = allMembers.filter((m) => m.level === 4);
  const level5 = allMembers.filter((m) => m.level === 5);
  const junior = allMembers.filter((m) => m.body === 'junior_cabinet');

  return (
    <div className="bg-[var(--white)] min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--mist)] pt-14 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-4">
          <Link
            href="/cabinet"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--gray)] hover:text-[var(--ink)] transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Cabinet Archive
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[var(--white)] text-[var(--ink)] text-xs font-semibold border border-[var(--mist)]">
                  Academic Session
                </span>
                {session?.isCurrent && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--gold)] text-[var(--ink)] text-xs font-bold">
                    Current Active
                  </span>
                )}
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[var(--ink)] tracking-tight mt-1">
                Cabinet Session {session?.label}
              </h1>
              {session?.theme && (
                <p className="text-[var(--gray)] text-xs sm:text-sm mt-1 italic">
                  Theme: &ldquo;{session.theme}&rdquo;
                </p>
              )}
            </div>

            <div className="text-xs text-[var(--gray)] bg-[var(--white)] p-3 rounded-lg border border-[var(--mist)] space-y-1">
              <div>Total Members: <strong className="text-[var(--ink)]">{allMembers.length} Volunteers</strong></div>
              <div>Cabinet & Heads: <strong className="text-[var(--ink)]">{level1.length} Leaders</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-10 space-y-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-[var(--mist)] pb-4">
          <button
            onClick={() => setLevelFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              levelFilter === 'all'
                ? 'bg-[var(--ink)] text-[var(--white)]'
                : 'bg-[var(--white)] text-[var(--ink)] border border-[var(--mist)] hover:border-[var(--ink)]'
            }`}
          >
            All Members ({allMembers.length})
          </button>
          <button
            onClick={() => setLevelFilter(1)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              levelFilter === 1
                ? 'bg-[var(--ink)] text-[var(--white)]'
                : 'bg-[var(--white)] text-[var(--ink)] border border-[var(--mist)] hover:border-[var(--ink)]'
            }`}
          >
            Level 1: Cabinet & Heads ({level1.length})
          </button>
          <button
            onClick={() => setLevelFilter(2)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              levelFilter === 2
                ? 'bg-[var(--ink)] text-[var(--white)]'
                : 'bg-[var(--white)] text-[var(--ink)] border border-[var(--mist)] hover:border-[var(--ink)]'
            }`}
          >
            Level 2: Co-Heads ({level2.length})
          </button>
          <button
            onClick={() => setLevelFilter(3)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              levelFilter === 3
                ? 'bg-[var(--ink)] text-[var(--white)]'
                : 'bg-[var(--white)] text-[var(--ink)] border border-[var(--mist)] hover:border-[var(--ink)]'
            }`}
          >
            Level 3: Members ({level3.length})
          </button>
          <button
            onClick={() => setLevelFilter('junior')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              levelFilter === 'junior'
                ? 'bg-[var(--ink)] text-[var(--white)]'
                : 'bg-[var(--white)] text-[var(--ink)] border border-[var(--mist)] hover:border-[var(--ink)]'
            }`}
          >
            Junior Cabinet ({junior.length})
          </button>
        </div>

        {/* Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="card-clean p-5 bg-[var(--white)] flex items-start gap-4 group"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-16 h-20 rounded-lg object-cover border border-[var(--mist)] shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300"
              />

              <div className="space-y-1 flex-1 overflow-hidden text-xs">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.2 rounded-full bg-[var(--paper)] text-[var(--ink)] border border-[var(--mist)]">
                    L{member.level}
                  </span>
                  <span className="text-[10px] text-[var(--gray)]">
                    {member.body === 'junior_cabinet' ? 'Junior Cabinet' : 'Senior Cabinet'}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-[var(--ink)] text-base truncate">
                  {member.name}
                </h3>

                <p className="text-xs font-semibold text-[var(--ember)] truncate">
                  {member.designation}
                </p>

                <p className="text-[11px] text-[var(--gray)] truncate">
                  {member.department}
                </p>

                <p className="text-[11px] text-[var(--ink)] font-medium truncate pt-0.5">
                  {member.teamName}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12 card-clean bg-[var(--paper)] text-[var(--gray)] text-sm">
            No member records found for this filter in Session {session?.label}.
          </div>
        )}
      </section>
    </div>
  );
}

export default function SessionDetailsPage({
  params,
}: {
  params: Promise<{ session: string }>;
}) {
  return (
    <Suspense fallback={<div className="min-h-screen py-24 text-center text-slate-500">Loading session roster...</div>}>
      <SessionDetailsContent params={params} />
    </Suspense>
  );
}
