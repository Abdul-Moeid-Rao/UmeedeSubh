'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Award,
  Users,
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { store } from '@/lib/data';

export default function CabinetArchivePage() {
  const sessions = store.getSessions();
  const [selectedSessionId, setSelectedSessionId] = useState<string>(
    sessions.find((s) => s.isCurrent)?.id || sessions[0]?.id || ''
  );
  const [activeTab, setActiveTab] = useState<'roster' | 'all_sessions'>('roster');

  const selectedSession = sessions.find((s) => s.id === selectedSessionId) || sessions[0];
  const members = store.getCabinetMembers(selectedSession?.id);

  const level1 = members.filter((m) => m.level === 1);
  const level2 = members.filter((m) => m.level === 2);
  const level3 = members.filter((m) => m.level === 3);
  const level4 = members.filter((m) => m.level === 4);
  const level5 = members.filter((m) => m.level === 5);

  return (
    <div className="bg-[var(--white)] min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--mist)] pt-14 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--white)] text-[var(--ink)] text-xs font-semibold border border-[var(--mist)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
            Institutional Leadership · 2014 to Present
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)] tracking-tight">
            Cabinet Archive & Rosters
          </h1>
          <p className="mt-3 text-lg text-[var(--gray)] max-w-2xl font-light">
            Honoring every generation of UET Taxila student leaders, teachers, and organizers who have steered the mission of literacy across the past decade.
          </p>

          {/* View Mode Toggle */}
          <div className="flex gap-2 pt-6">
            <button
              onClick={() => setActiveTab('roster')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'roster'
                  ? 'bg-[var(--ink)] text-[var(--white)]'
                  : 'bg-[var(--white)] text-[var(--ink)] border border-[var(--mist)] hover:border-[var(--ink)]'
              }`}
            >
              Session Roster & Hierarchy
            </button>
            <button
              onClick={() => setActiveTab('all_sessions')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'all_sessions'
                  ? 'bg-[var(--ink)] text-[var(--white)]'
                  : 'bg-[var(--white)] text-[var(--ink)] border border-[var(--mist)] hover:border-[var(--ink)]'
              }`}
            >
              All Recorded Sessions Overview
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-10">
        {activeTab === 'roster' ? (
          <div className="space-y-10">
            {/* Year Selector Pills (2014 to Today) */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--gray)]">
                Select Academic Session:
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {sessions.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSessionId(s.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      selectedSessionId === s.id
                        ? 'bg-[var(--dawn)] border-[var(--gold)] text-[var(--ink)] font-bold shadow-sm'
                        : 'bg-[var(--white)] border border-[var(--mist)] text-[var(--gray)] hover:text-[var(--ink)] hover:border-[var(--ink)]'
                    }`}
                  >
                    {s.label}
                    {s.isCurrent && (
                      <span className="ml-1.5 px-1.5 py-0.2 rounded-full bg-[var(--gold)] text-[var(--ink)] text-[10px] font-bold">
                        Active
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Session Headline Info */}
            <div className="card-clean p-6 sm:p-8 bg-[var(--paper)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[var(--ember)] uppercase tracking-wider">
                  {selectedSession?.isCurrent ? 'Current Active Session' : 'Archived Historic Session'}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--ink)] mt-1">
                  Session {selectedSession?.label}
                </h2>
                {selectedSession?.theme && (
                  <p className="text-xs sm:text-sm text-[var(--gray)] italic mt-1">
                    Theme: &ldquo;{selectedSession.theme}&rdquo;
                  </p>
                )}
              </div>

              <div className="text-xs text-[var(--gray)] bg-[var(--white)] p-3 rounded-lg border border-[var(--mist)] space-y-1">
                <div>Total Recorded Members: <strong className="text-[var(--ink)]">{members.length}</strong></div>
                <div>Cabinet & Heads: <strong className="text-[var(--ink)]">{level1.length}</strong></div>
              </div>
            </div>

            {/* Level 1: Cabinet & Heads (Larger Cards, Portrait 4:5) */}
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
                  Level 1: Cabinet & Heads
                </h3>
                <p className="text-xs text-[var(--gray)] mt-0.5">
                  Executive governance council, wing directorships, and official UET liaisons.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {level1.map((head) => (
                  <div key={head.id} className="card-clean p-5 bg-[var(--white)] space-y-3 group">
                    <div className="aspect-[4/5] rounded-lg bg-[var(--paper)] overflow-hidden border border-[var(--mist)]">
                      <img
                        src={head.photo}
                        alt={head.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--paper)] border border-[var(--mist)] text-[var(--gray)]">
                        {head.teamName}
                      </span>
                      <h4 className="font-display font-semibold text-lg text-[var(--ink)] mt-1.5">
                        {head.name}
                      </h4>
                      <div className="text-xs font-semibold text-[var(--ember)]">{head.designation}</div>
                      <div className="text-[11px] text-[var(--gray)] mt-0.5">{head.department}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Level 2: Co-Heads */}
            {level2.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-[var(--mist)]">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
                    Level 2: Operational Co-Heads
                  </h3>
                  <p className="text-xs text-[var(--gray)] mt-0.5">
                    Field supervisors managing daily classes, lab operations, and survey teams.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {level2.map((coHead) => (
                    <div key={coHead.id} className="card-clean p-4 bg-[var(--white)] space-y-2.5 group">
                      <div className="aspect-[4/5] rounded-lg bg-[var(--paper)] overflow-hidden border border-[var(--mist)]">
                        <img
                          src={coHead.photo}
                          alt={coHead.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <div className="text-[10px] text-[var(--gray)] uppercase tracking-wider">
                          {coHead.teamName}
                        </div>
                        <h4 className="font-display font-semibold text-base text-[var(--ink)] mt-0.5">
                          {coHead.name}
                        </h4>
                        <div className="text-xs font-medium text-[var(--ember)]">{coHead.designation}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Levels 3, 4, 5: Members & Volunteers Roster */}
            {(level3.length > 0 || level4.length > 0 || level5.length > 0) && (
              <div className="space-y-4 pt-6 border-t border-[var(--mist)]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
                      Student Volunteers & Members
                    </h3>
                    <p className="text-xs text-[var(--gray)] mt-0.5">
                      Core functional workforce conducting evening classes and field distribution.
                    </p>
                  </div>
                  <span className="text-xs text-[var(--gray)] font-mono">
                    {level3.length + level4.length + level5.length} Volunteers
                  </span>
                </div>

                <div className="card-clean p-6 bg-[var(--paper)]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[...level3, ...level4, ...level5].map((m) => (
                      <div
                        key={m.id}
                        className="p-3 rounded-lg bg-[var(--white)] border border-[var(--mist)] flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="font-semibold text-[var(--ink)]">{m.name}</div>
                          <div className="text-[11px] text-[var(--gray)]">{m.department || 'UET Taxila'}</div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--paper)] border border-[var(--mist)] text-[var(--gray)]">
                          {m.teamName}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* All Sessions Archive Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((s) => {
              const sessionMembers = store.getCabinetMembers(s.id);
              return (
                <div key={s.id} className="card-clean p-6 bg-[var(--white)] flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono text-[var(--gray)]">
                        SESSION {s.label}
                      </span>
                      {s.isCurrent && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--gold)] text-[var(--ink)]">
                          Active
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
                      Academic Session {s.label}
                    </h3>
                    {s.theme && (
                      <p className="text-xs text-[var(--gray)] italic">
                        &ldquo;{s.theme}&rdquo;
                      </p>
                    )}
                    <div className="text-xs text-[var(--gray)]">
                      Recorded Members: <strong className="text-[var(--ink)]">{sessionMembers.length} volunteers</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedSessionId(s.id);
                      setActiveTab('roster');
                    }}
                    className="btn-secondary w-full text-xs flex items-center justify-center gap-2"
                  >
                    View Session Roster
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
