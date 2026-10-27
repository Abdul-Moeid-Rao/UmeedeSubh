'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Laptop,
  Scissors,
  HeartHandshake,
  ClipboardCheck,
  Truck,
  Camera,
  Palette,
  KanbanSquare,
  FileText,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { TEAMS_DATA, store } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-[var(--ink)]" />,
  Laptop: <Laptop className="w-5 h-5 text-[var(--ink)]" />,
  Scissors: <Scissors className="w-5 h-5 text-[var(--ink)]" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-[var(--ink)]" />,
  ClipboardCheck: <ClipboardCheck className="w-5 h-5 text-[var(--ink)]" />,
  Truck: <Truck className="w-5 h-5 text-[var(--ink)]" />,
  Camera: <Camera className="w-5 h-5 text-[var(--ink)]" />,
  Palette: <Palette className="w-5 h-5 text-[var(--ink)]" />,
  KanbanSquare: <KanbanSquare className="w-5 h-5 text-[var(--ink)]" />,
  FileText: <FileText className="w-5 h-5 text-[var(--ink)]" />,
};

export default function TeamsPage() {
  const [selectedTeamId, setSelectedTeamId] = useState<string>(TEAMS_DATA[0].id);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(TEAMS_DATA[0].id);

  const selectedTeam = TEAMS_DATA.find((t) => t.id === selectedTeamId) || TEAMS_DATA[0];
  const currentSession = store.getCurrentSession();
  const currentMembers = store.getCabinetMembers(currentSession?.id);
  const selectedLead = currentMembers.find(
    (m) => m.teamName.toLowerCase().includes(selectedTeam.name.toLowerCase().split(' ')[0]) && m.level === 1
  ) || currentMembers.find((m) => m.teamName === selectedTeam.name);

  return (
    <div className="bg-[var(--white)] min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--mist)] pt-14 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--white)] text-[var(--ink)] text-xs font-semibold border border-[var(--mist)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
            10 Functional Wings · Student Governance
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)] tracking-tight">
            Our Teams & Leadership
          </h1>
          <p className="mt-3 text-lg text-[var(--gray)] max-w-2xl font-light">
            From daily evening teachers to survey verifiers, warehouse packagers, and documentary photographers—discover the 10 teams powering UMEED E SUBH.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-12">
        {/* Desktop Layout: Index list on left (4 cols), Detail panel on right (8 cols) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Index List */}
          <div className="col-span-4 space-y-2 card-clean p-3 bg-[var(--paper)]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--gray)] px-3 py-2 block">
              Ten Operational Teams
            </span>
            {TEAMS_DATA.map((team) => {
              const isSelected = team.id === selectedTeamId;
              return (
                <button
                  key={team.id}
                  onClick={() => setSelectedTeamId(team.id)}
                  className={`w-full text-left p-3.5 rounded-lg flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-[var(--white)] border border-[var(--gold)] shadow-sm'
                      : 'hover:bg-[var(--white)]/60 text-[var(--ink)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[var(--gray)]">
                      #{team.sortOrder < 10 ? `0${team.sortOrder}` : team.sortOrder}
                    </span>
                    <div>
                      <div className={`text-sm ${isSelected ? 'font-bold text-[var(--ink)]' : 'font-medium text-[var(--ink)]'}`}>
                        {team.name}
                      </div>
                      <div className="text-[11px] text-[var(--gray)] truncate max-w-[180px]">
                        {team.tagline}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[var(--gold)] translate-x-0.5' : 'text-transparent'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detail Panel */}
          <div className="col-span-8">
            <div className="card-clean p-8 bg-[var(--white)] space-y-6">
              <div className="flex items-start justify-between border-b border-[var(--mist)] pb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--ember)]">
                    Team #{selectedTeam.sortOrder}
                  </span>
                  <h2 className="font-display text-3xl font-semibold text-[var(--ink)] mt-1">
                    {selectedTeam.name}
                  </h2>
                  <p className="text-sm text-[var(--gray)] italic mt-1">
                    &ldquo;{selectedTeam.tagline}&rdquo;
                  </p>
                </div>

                <Link
                  href={`/join?team=${encodeURIComponent(selectedTeam.name)}`}
                  className="btn-primary shrink-0 text-xs"
                >
                  Apply for this Team
                </Link>
              </div>

              {/* Team Description */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                  Mission & Mandate
                </span>
                <p className="text-sm text-[var(--gray)] leading-relaxed">
                  {selectedTeam.description}
                </p>
              </div>

              {/* Core Responsibilities */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                  Core Responsibilities & Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[var(--ink)]">
                  {selectedTeam.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-[var(--paper)] border border-[var(--mist)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-1.5 shrink-0"></span>
                      <span className="leading-relaxed font-medium">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Lead Card */}
              <div className="pt-4 border-t border-[var(--mist)]">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--gray)] block mb-3">
                  Current Wing Leadership ({currentSession?.label})
                </span>

                <div className="p-4 rounded-lg bg-[var(--paper)] border border-[var(--mist)] flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[var(--white)] overflow-hidden border border-[var(--mist)] shrink-0">
                    <img
                      src={selectedLead?.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}
                      alt={selectedTeam.leadName}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--white)] border border-[var(--mist)] text-[var(--ink)]">
                      Team Head
                    </span>
                    <h3 className="font-display font-semibold text-base text-[var(--ink)] mt-1">
                      {selectedLead?.name || selectedTeam.leadName}
                    </h3>
                    <p className="text-xs text-[var(--gray)]">
                      {selectedLead?.department || 'Undergraduate Engineering, UET Taxila'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-3">
          {TEAMS_DATA.map((team) => {
            const isExpanded = expandedMobileId === team.id;
            return (
              <div key={team.id} className="card-clean overflow-hidden bg-[var(--white)]">
                <button
                  onClick={() => setExpandedMobileId(isExpanded ? null : team.id)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[var(--gray)]">
                      #{team.sortOrder}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-[var(--ink)]">{team.name}</div>
                      <div className="text-[11px] text-[var(--gray)]">{team.tagline}</div>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[var(--ink)] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[var(--gray)] shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="p-4 pt-0 border-t border-[var(--mist)] space-y-4 text-xs">
                    <p className="text-[var(--gray)] leading-relaxed pt-2">
                      {team.description}
                    </p>

                    <div className="space-y-1.5">
                      <span className="font-bold uppercase tracking-wider text-[10px] text-[var(--ink)]">
                        Key Responsibilities:
                      </span>
                      {team.responsibilities.map((r, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[var(--ink)]">
                          <span className="w-1 h-1 rounded-full bg-[var(--gold)]"></span>
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/join?team=${encodeURIComponent(team.name)}`}
                        className="btn-primary w-full text-center block text-xs"
                      >
                        Apply to Join {team.name}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
