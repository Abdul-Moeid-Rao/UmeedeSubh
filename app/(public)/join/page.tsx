'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import {
  Users,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Send,
  Check,
  Building,
  Laptop,
  Scissors,
  HeartHandshake,
  ClipboardCheck,
  Truck,
  Camera,
  Palette,
  KanbanSquare,
  FileText,
} from 'lucide-react';
import { TEAMS_DATA, store } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Laptop: <Laptop className="w-5 h-5" />,
  Scissors: <Scissors className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  ClipboardCheck: <ClipboardCheck className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
  Camera: <Camera className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  KanbanSquare: <KanbanSquare className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
};

export default function JoinTeamPage() {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [department, setDepartment] = useState('Software Engineering');
  const [semester, setSemester] = useState('4th Semester');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTeamSlug, setSelectedTeamSlug] = useState('pehla-qadam');
  const [skills, setSkills] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedApp, setSubmittedApp] = useState<any | null>(null);

  const departments = [
    'Software Engineering',
    'Computer Science',
    'Civil Engineering',
    'Mechanical Engineering',
    'Electrical Engineering',
    'Electronics Engineering',
    'Telecom Engineering',
    'Industrial Engineering',
    'Environmental Engineering',
    'Basic Sciences / Mathematics',
  ];

  const semesters = [
    '1st Semester',
    '2nd Semester',
    '3rd Semester',
    '4th Semester',
    '5th Semester',
    '6th Semester',
    '7th Semester',
    '8th Semester',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const chosenTeam = TEAMS_DATA.find((t) => t.slug === selectedTeamSlug) || TEAMS_DATA[0];

    setTimeout(() => {
      const newApp = store.addVolunteer({
        name,
        email,
        phone,
        regNo,
        department,
        semester,
        teamId: chosenTeam.id,
        teamName: chosenTeam.name,
        skills,
        portfolioUrl: '',
        reason,
      });

      setSubmittedApp(newApp);
      setIsSubmitting(false);

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // ignore
      }
    }, 600);
  };

  return (
    <div className="bg-[var(--white)] min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--mist)] pt-14 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--white)] text-[var(--ink)] text-xs font-semibold border border-[var(--mist)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
            Volunteer Recruitment · UET Taxila Students Only
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)] tracking-tight">
            Join the UMEED E SUBH Team
          </h1>
          <p className="mt-3 text-lg text-[var(--gray)] max-w-2xl font-light">
            Become part of a 10-year student movement. Spend your evenings teaching out-of-school children, running tech labs, and conducting verified humanitarian drives.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-12">
        {submittedApp ? (
          /* Thank You Screen with Next Steps */
          <div className="max-w-2xl mx-auto card-clean p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[var(--dawn)] text-[var(--leaf)] flex items-center justify-center mx-auto border border-[var(--gold)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[var(--leaf)] uppercase tracking-wider">
                Application Received Successfully
              </span>
              <h2 className="font-display text-3xl font-semibold text-[var(--ink)]">
                Welcome to the Induction Process, {submittedApp.name}!
              </h2>
              <p className="text-sm text-[var(--gray)] max-w-md mx-auto">
                Your application for <strong>{submittedApp.teamName}</strong> has been logged under ID <code className="font-mono text-[var(--ink)] font-bold">{submittedApp.id}</code>.
              </p>
            </div>

            {/* Next Steps Card */}
            <div className="card-clean p-6 bg-[var(--paper)] text-left text-xs space-y-3">
              <span className="font-bold uppercase tracking-wider text-[var(--ink)] block">
                Next Steps for Inducted Volunteers:
              </span>
              <div className="space-y-2 text-[var(--gray)]">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[var(--white)] text-[var(--ink)] flex items-center justify-center font-bold shrink-0 border border-[var(--mist)]">1</span>
                  <span><strong>WhatsApp Screening Group:</strong> Our HR & Project Management wing will add your phone number ({submittedApp.phone}) to the recruitment orientation group.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[var(--white)] text-[var(--ink)] flex items-center justify-center font-bold shrink-0 border border-[var(--mist)]">2</span>
                  <span><strong>On-Ground Interview:</strong> A 10-minute conversational interview at Gate 2 or the DSA student center to align schedules and allocate your mentor.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[var(--white)] text-[var(--ink)] flex items-center justify-center font-bold shrink-0 border border-[var(--mist)]">3</span>
                  <span><strong>Probation & Certificate:</strong> Complete 4 weeks of volunteer service to receive your Level 5 General Member badge and community service certificate.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/teams" className="btn-secondary w-full sm:w-auto">
                Explore All 10 Teams
              </Link>
              <button
                onClick={() => {
                  setSubmittedApp(null);
                  setName('');
                  setRegNo('');
                  setPhone('');
                  setSkills('');
                  setReason('');
                }}
                className="btn-primary w-full sm:w-auto"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Step 1: Team Picker as Large Selectable Tiles */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--gray)]">
                    Step 1 of 2
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-[var(--ink)] mt-0.5">
                    Select Your Preferred Team
                  </h2>
                </div>
                <span className="text-xs text-[var(--gray)]">Click a tile to select</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {TEAMS_DATA.map((t) => {
                  const isSelected = selectedTeamSlug === t.slug;
                  return (
                    <div
                      key={t.id}
                      onClick={() => setSelectedTeamSlug(t.slug)}
                      className={`card-clean p-4 cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
                        isSelected
                          ? 'bg-[var(--dawn)] border-[var(--gold)] ring-1 ring-[var(--gold)] shadow-sm'
                          : 'bg-[var(--white)] hover:border-[var(--ink)]'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-[var(--paper)] text-[var(--ink)] flex items-center justify-center border border-[var(--mist)]">
                          {iconMap[t.iconName] || <Users className="w-4 h-4" />}
                        </div>
                        <h3 className="font-display font-semibold text-sm text-[var(--ink)] leading-snug">
                          {t.name}
                        </h3>
                        <p className="text-[11px] text-[var(--gray)] line-clamp-2">
                          {t.tagline}
                        </p>
                      </div>

                      <div className="text-[10px] font-bold text-[var(--ink)] flex items-center justify-between pt-1 border-t border-[var(--mist)]">
                        <span>#{t.sortOrder}</span>
                        {isSelected && <span className="text-[var(--ember)]">Selected ✓</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Short Form */}
            <div className="card-clean p-6 sm:p-10 bg-[var(--white)] space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--gray)]">
                  Step 2 of 2
                </span>
                <h3 className="font-display text-2xl font-semibold text-[var(--ink)] mt-0.5">
                  Your Student Profile
                </h3>
                <p className="text-xs text-[var(--gray)] mt-1">
                  Active registration at UET Taxila is required for volunteer insurance and university certification credit.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Usama bin Tariq"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                    UET Registration Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 22-SE-45"
                    value={regNo}
                    onChange={(e) => setRegNo(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                    Academic Department *
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm bg-[var(--white)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                  >
                    {departments.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                    Current Semester *
                  </label>
                  <select
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm bg-[var(--white)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                  >
                    {semesters.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 0000000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                    UET / Personal Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@uettaxila.edu.pk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                  Relevant Skills / Prior Experience
                </label>
                <input
                  type="text"
                  placeholder="e.g. Teaching Math/Science, Adobe Photoshop, Video Editing, Logistics, Event Management"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                  Why do you wish to join UMEED E SUBH?
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what motivates you to spend your evenings serving underprivileged children in Taxila..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Transmitting Application...' : 'Submit Volunteer Application'}
                </button>
              </div>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
