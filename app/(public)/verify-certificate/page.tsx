'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertTriangle,
  Award,
  Calendar,
  Building,
  Printer,
  Sparkles,
  Check,
  XCircle,
} from 'lucide-react';
import { store } from '@/lib/data';
import { Certificate } from '@/lib/types';

export default function VerifyCertificatePage() {
  const [certInput, setCertInput] = useState('');
  const [searchResult, setSearchResult] = useState<Certificate | null | undefined>(undefined);
  const [hasSearched, setHasSearched] = useState(false);

  const sampleCertificates = [
    { id: 'UES-ITB-2024-B1-042', label: 'IT Box Web Dev' },
    { id: 'UES-CHD-2024-019', label: 'Chaddar Stitching' },
    { id: 'UES-ITB-2023-B2-118', label: 'IT Box Graphic Design' },
  ];

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!certInput.trim()) return;

    setHasSearched(true);
    const result = store.verifyCertificate(certInput);
    setSearchResult(result || null);
  };

  const loadSample = (sampleId: string) => {
    setCertInput(sampleId);
    setHasSearched(true);
    const result = store.verifyCertificate(sampleId);
    setSearchResult(result || null);
  };

  return (
    <div className="bg-[var(--white)] min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--mist)] pt-14 pb-16 text-center">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--white)] text-[var(--ink)] text-xs font-semibold border border-[var(--mist)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
            Official Credential Registry · UMEED E SUBH
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)] tracking-tight">
            Verify Certificate
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[var(--gray)] max-w-xl mx-auto font-light">
            Instant online verification for graduates of IT Box Computer Training Center and Chaddar Vocational Stitching Academy.
          </p>
        </div>
      </section>

      {/* Centered Lookup Section: One Big Input */}
      <section className="max-w-2xl mx-auto px-5 sm:px-8 pt-12 space-y-8">
        <div className="card-clean p-6 sm:p-8 bg-[var(--white)] space-y-4">
          <form onSubmit={handleSearch} className="space-y-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
              Certificate Serial Number
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. UES-ITB-2024-B1-042"
                value={certInput}
                onChange={(e) => setCertInput(e.target.value)}
                className="w-full pl-4 pr-12 py-3.5 rounded-lg border border-[var(--mist)] text-base font-mono uppercase tracking-wider text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
              />
              <button
                type="submit"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-md bg-[var(--gold)] text-[var(--ink)] hover:opacity-90 transition-opacity"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              Verify Credential
            </button>
          </form>

          {/* Sample Chips */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[var(--gray)] font-medium">Try Sample:</span>
            {sampleCertificates.map((sample) => (
              <button
                key={sample.id}
                type="button"
                onClick={() => loadSample(sample.id)}
                className="px-3 py-1 rounded-full bg-[var(--paper)] hover:bg-[var(--dawn)] text-[var(--ink)] border border-[var(--mist)] transition-colors font-mono text-[11px]"
              >
                {sample.id}
              </button>
            ))}
          </div>
        </div>

        {/* Result Card: Verified (Leaf #2F7D4F status) */}
        {hasSearched && searchResult && (
          <div className="card-clean p-6 sm:p-8 bg-[var(--white)] border-[var(--leaf)] space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--mist)] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--leaf)]/10 text-[var(--leaf)] flex items-center justify-center border border-[var(--leaf)]/20">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--leaf)] block">
                    Verified Authentic Credential
                  </span>
                  <div className="font-mono text-base font-bold text-[var(--ink)]">
                    {searchResult.certificateNo}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => window.print()}
                className="p-2 rounded-md hover:bg-[var(--paper)] text-[var(--gray)] hover:text-[var(--ink)] border border-[var(--mist)] transition-colors"
                title="Print Verification"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
              <div className="space-y-1">
                <span className="text-[var(--gray)] font-medium uppercase text-[10px] tracking-wider block">
                  Graduate Name
                </span>
                <div className="font-display text-xl font-semibold text-[var(--ink)]">
                  {searchResult.holderName}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[var(--gray)] font-medium uppercase text-[10px] tracking-wider block">
                  Course / Program
                </span>
                <div className="text-sm font-semibold text-[var(--ink)]">
                  {searchResult.projectName}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[var(--gray)] font-medium uppercase text-[10px] tracking-wider block">
                  Batch & Session
                </span>
                <div className="text-sm text-[var(--ink)]">
                  {searchResult.batchName}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[var(--gray)] font-medium uppercase text-[10px] tracking-wider block">
                  Conferment Date
                </span>
                <div className="text-sm text-[var(--ink)]">
                  {searchResult.issueDate}
                </div>
              </div>
            </div>

            {searchResult.skillsAcquired && searchResult.skillsAcquired.length > 0 && (
              <div className="pt-3 border-t border-[var(--mist)] space-y-2">
                <span className="text-[10px] font-bold text-[var(--gray)] uppercase tracking-wider block">
                  Demonstrated Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {searchResult.skillsAcquired.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-[var(--paper)] text-[var(--ink)] text-[11px] border border-[var(--mist)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-[var(--paper)] p-3.5 rounded-lg border border-[var(--mist)] text-[11px] text-[var(--gray)] text-center">
              Official record authenticated by UMEED E SUBH — Official Welfare Society of UET Taxila.
            </div>
          </div>
        )}

        {/* Result Card: Not Found (Brick #C62F2F status) */}
        {hasSearched && searchResult === null && (
          <div className="card-clean p-6 sm:p-8 bg-[var(--white)] border-[var(--brick)] space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--brick)]/10 text-[var(--brick)] flex items-center justify-center mx-auto border border-[var(--brick)]/20">
              <XCircle className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--brick)]">
                Certificate Not Found
              </span>
              <h2 className="font-display text-xl font-semibold text-[var(--ink)] mt-1">
                No Record in Society Ledger
              </h2>
              <p className="text-xs text-[var(--gray)] max-w-md mx-auto mt-2">
                We could not find an issued credential with serial number <strong className="font-mono text-[var(--ink)]">&ldquo;{certInput}&rdquo;</strong>.
              </p>
            </div>

            <div className="bg-[var(--paper)] p-4 rounded-lg border border-[var(--mist)] text-xs text-[var(--gray)] text-left space-y-1.5">
              <p>• Verify the serial number printed on the physical certificate header.</p>
              <p>• For manual inquiries or institutional vetting, contact <code className="text-[var(--ink)] font-semibold">verify@umeedesubh.org</code>.</p>
            </div>
          </div>
        )}

        {/* Security Note */}
        <p className="text-xs text-center text-[var(--gray)] pt-4">
          Online credential verification prevents falsification and confirms completion of practical evening lab sessions at UET Taxila.
        </p>
      </section>
    </div>
  );
}
