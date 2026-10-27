'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import {
  Heart,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  UploadCloud,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Sparkles,
  HelpCircle,
  Calendar,
  Lock,
} from 'lucide-react';
import { store } from '@/lib/data';

export default function SponsorChildPage() {
  const [selectedTier, setSelectedTier] = useState<number>(3500);
  const [tierName, setTierName] = useState('1 Child Full Monthly Sponsorship');
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'Easypaisa' | 'JazzCash' | 'Bank Transfer'>('Easypaisa');
  const [proofPreview, setProofPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<any | null>(null);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const tiers = [
    {
      amount: 3500,
      name: '1 Child Sponsorship',
      tag: 'Core Tier',
      desc: 'Complete coverage for evening schooling, new books, uniform, bag, stationery, and daily refreshments.',
    },
    {
      amount: 7000,
      name: '2 Children (Siblings)',
      tag: 'Double Impact',
      desc: 'Secures education for two children from the same struggling household, preventing child labor.',
    },
    {
      amount: 10500,
      name: '3 Children Sponsorship',
      tag: 'Transform a Household',
      desc: 'Completely funds an entire family cluster from nursery through high-school matriculation.',
    },
  ];

  const faqs = [
    {
      q: 'Can I physically visit my sponsored child at the school?',
      a: 'Yes, absolutely. Pehla Qadam School operates every evening near Gate 2, UET Taxila. Sponsors are welcome to coordinate with our CSP team to visit during assembly or classroom hours.',
    },
    {
      q: 'How will I receive updates on academic performance?',
      a: 'Every sponsor receives a verified mid-term and annual result card, attendance summary, and photo updates (with guardian consent) directly via email and WhatsApp.',
    },
    {
      q: 'Can I pay annually instead of monthly?',
      a: 'Yes. An annual sponsorship for 1 child is PKR 42,000 (12 × PKR 3,500). You can transfer the annual amount in one transaction and mention "Annual Sponsorship" in the reference note.',
    },
    {
      q: 'What if I need to pause or cancel my sponsorship?',
      a: 'There are no contracts. If your financial circumstances change, simply inform our CSP Team via WhatsApp. The society&apos;s emergency reserve ensures the child&apos;s classes continue uninterrupted.',
    },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(label);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProofPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      store.addDonation({
        donorName: donorName || 'Generous Sponsor',
        email,
        phone,
        amount: selectedTier,
        type: 'monthly_sponsor',
        purpose: `Child Sponsorship Program (${tierName})`,
        method: paymentMethod,
        proofUrl:
          proofPreview ||
          'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
        isAnonymous: false,
      });

      setSubmitted({
        donorName: donorName || 'Generous Sponsor',
        amount: selectedTier,
        tierName,
      });

      setIsSubmitting(false);

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // ignore
      }
    }, 600);
  };

  return (
    <div className="bg-[var(--white)] min-h-screen pb-24">
      {/* Editorial Dawn Band Header */}
      <section className="bg-[var(--dawn)] border-b border-[var(--mist)] pt-14 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--white)] text-[var(--ink)] text-xs font-semibold border border-[var(--mist)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--ember)]"></span>
            Child Sponsorship Program (CSP) · Pehla Qadam School
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)] tracking-tight">
            Sponsor a Child&apos;s Education
          </h1>
          <p className="mt-3 text-lg text-[var(--ink)]/80 max-w-2xl font-light">
            For just <strong>PKR 3,500 per month</strong>, you rescue an underprivileged child from street scrap picking and enroll them into structured evening classes near Gate 2, UET Taxila.
          </p>
        </div>
      </section>

      {/* Explainer: 3 Simple Steps */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-14 border-b border-[var(--mist)]">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--gray)]">
            How CSP Works
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--ink)] mt-1">
            Three Simple Steps to Transform a Life
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-clean p-6 bg-[var(--paper)] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[var(--white)] text-[var(--ink)] flex items-center justify-center font-display font-bold text-base border border-[var(--mist)]">
              1
            </div>
            <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
              Choose a Monthly Tier
            </h3>
            <p className="text-xs text-[var(--gray)] leading-relaxed">
              Select whether you wish to support 1 child (PKR 3,500/mo), 2 siblings (PKR 7,000/mo), or a 3-child family cluster (PKR 10,500/mo).
            </p>
          </div>

          <div className="card-clean p-6 bg-[var(--paper)] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[var(--white)] text-[var(--ink)] flex items-center justify-center font-display font-bold text-base border border-[var(--mist)]">
              2
            </div>
            <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
              Direct Account Transfer
            </h3>
            <p className="text-xs text-[var(--gray)] leading-relaxed">
              Transfer monthly or annually via Easypaisa, JazzCash, or Meezan Bank. Submit your transaction screenshot once for official logging.
            </p>
          </div>

          <div className="card-clean p-6 bg-[var(--paper)] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[var(--white)] text-[var(--ink)] flex items-center justify-center font-display font-bold text-base border border-[var(--mist)]">
              3
            </div>
            <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
              Receive Result Cards
            </h3>
            <p className="text-xs text-[var(--gray)] leading-relaxed">
              Receive regular verified terminal exams, attendance records, and direct proof of the child&apos;s educational matriculation progression.
            </p>
          </div>
        </div>
      </section>

      {/* Where Does the Money Go: Program Split Bar */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-14 border-b border-[var(--mist)]">
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--gray)]">
            Transparent Breakdown
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--ink)]">
            Where Your PKR 3,500 / Month Goes
          </h2>
          <p className="text-xs sm:text-sm text-[var(--gray)]">
            Zero administrative leakage. Every rupee directly funds the child&apos;s on-ground schooling package.
          </p>
        </div>

        {/* Proportional Bar */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="h-4 rounded-full overflow-hidden flex bg-[var(--mist)] border border-[var(--mist)]">
            <div style={{ width: '45%' }} className="bg-[var(--gold)]" title="Books, Uniforms & Stationery (45%)"></div>
            <div style={{ width: '30%' }} className="bg-[var(--ember)]" title="Evening Nutrition & Milk (30%)"></div>
            <div style={{ width: '15%' }} className="bg-[var(--ink)]" title="Classroom Utilities & Desk Space (15%)"></div>
            <div style={{ width: '10%' }} className="bg-[var(--leaf)]" title="Medical Screenings (10%)"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[var(--gold)] shrink-0"></span>
              <span className="text-[var(--gray)]">Books & Uniforms <strong>(45%)</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[var(--ember)] shrink-0"></span>
              <span className="text-[var(--gray)]">Daily Refreshments <strong>(30%)</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[var(--ink)] shrink-0"></span>
              <span className="text-[var(--gray)]">Classroom Aids <strong>(15%)</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[var(--leaf)] shrink-0"></span>
              <span className="text-[var(--gray)]">Health Checkups <strong>(10%)</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sponsorship Form & Accounts */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-14">
        {submitted ? (
          <div className="max-w-2xl mx-auto card-clean p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[var(--dawn)] text-[var(--leaf)] flex items-center justify-center mx-auto border border-[var(--gold)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[var(--leaf)] uppercase tracking-wider">
                Sponsorship Enrolled Successfully
              </span>
              <h2 className="font-display text-3xl font-semibold text-[var(--ink)]">
                Welcome to the UMEED E SUBH Family!
              </h2>
              <p className="text-sm text-[var(--gray)] max-w-md mx-auto">
                Thank you, <strong>{submitted.donorName}</strong>. Your commitment of{' '}
                <strong>PKR {submitted.amount.toLocaleString()} / month</strong> has been assigned to Pehla Qadam School. Our CSP team will contact you with the student profile dossier.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/projects/pehla-qadam" className="btn-primary w-full sm:w-auto">
                Explore Pehla Qadam School Syllabus
              </Link>
              <button
                onClick={() => setSubmitted(null)}
                className="btn-secondary w-full sm:w-auto"
              >
                Sponsor Another Child
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Tiers Selection & Direct Accounts */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--gray)]">
                  Tier Selection
                </span>
                <h2 className="font-display text-2xl font-semibold text-[var(--ink)] mt-1">
                  Choose Sponsorship Scope
                </h2>
              </div>

              <div className="space-y-3">
                {tiers.map((t) => (
                  <div
                    key={t.amount}
                    onClick={() => {
                      setSelectedTier(t.amount);
                      setTierName(t.name);
                    }}
                    className={`card-clean p-5 cursor-pointer transition-all ${
                      selectedTier === t.amount
                        ? 'bg-[var(--dawn)] border-[var(--gold)] ring-1 ring-[var(--gold)]'
                        : 'bg-[var(--white)] hover:border-[var(--ink)]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--white)] border border-[var(--mist)] text-[var(--ink)]">
                        {t.tag}
                      </span>
                      <span className="font-display font-bold text-lg text-[var(--ink)]">
                        PKR {t.amount.toLocaleString()}
                        <span className="text-xs font-normal text-[var(--gray)]"> /mo</span>
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm text-[var(--ink)] mt-2">{t.name}</h3>
                    <p className="text-xs text-[var(--gray)] mt-1 leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>

              {/* Bank Accounts Box */}
              <div className="card-clean p-5 bg-[var(--paper)] space-y-3 text-xs">
                <div className="font-semibold text-sm text-[var(--ink)] flex items-center justify-between">
                  <span>Official Transfer Channels</span>
                  <span className="text-[11px] text-[var(--leaf)] font-normal flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Secure
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded bg-[var(--white)] border border-[var(--mist)] flex justify-between items-center">
                    <div>
                      <div className="font-bold text-[var(--ink)]">Easypaisa: 0312-9876543</div>
                      <div className="text-[11px] text-[var(--gray)]">Title: Umeed e Subh Welfare</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy('03129876543', 'easypaisa')}
                      className="p-1.5 rounded hover:bg-[var(--paper)] text-[var(--gray)]"
                    >
                      {copiedAccount === 'easypaisa' ? <Check className="w-3.5 h-3.5 text-[var(--leaf)]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <div className="p-2.5 rounded bg-[var(--white)] border border-[var(--mist)] flex justify-between items-center">
                    <div>
                      <div className="font-bold text-[var(--ink)]">Meezan Bank: 0102-0102030405</div>
                      <div className="text-[11px] text-[var(--gray)]">Title: UMEED E SUBH · Taxila Cantt</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy('01020102030405', 'meezan')}
                      className="p-1.5 rounded hover:bg-[var(--paper)] text-[var(--gray)]"
                    >
                      {copiedAccount === 'meezan' ? <Check className="w-3.5 h-3.5 text-[var(--leaf)]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sponsor Enrollment Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="card-clean p-6 sm:p-8 bg-[var(--white)] space-y-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
                    Sponsor Registration & Slip Submission
                  </h3>
                  <p className="text-xs text-[var(--gray)] mt-1">
                    Provide your contact details so our CSP Director can dispatch your student&apos;s academic portfolio.
                  </p>
                </div>

                <div className="bg-[var(--dawn)]/50 p-3.5 rounded-lg border border-[var(--gold)]/40 flex justify-between items-center text-xs">
                  <span className="text-[var(--ink)]">Enrolling for:</span>
                  <span className="font-bold text-[var(--ink)] font-display text-sm">
                    {tierName} (PKR {selectedTier.toLocaleString()} / month)
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Engr. Salman Tariq"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 300 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                      Email Address (for term exam cards & receipts) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sponsor@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--ink)] mb-2">
                      Transfer Method
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Easypaisa', 'JazzCash', 'Bank Transfer'] as const).map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setPaymentMethod(m)}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                            paymentMethod === m
                              ? 'bg-[var(--dawn)] border-[var(--gold)] text-[var(--ink)] font-bold'
                              : 'bg-[var(--white)] border-[var(--mist)] text-[var(--gray)]'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--ink)] mb-2">
                      Attach First Month Proof / Slip
                    </label>
                    <div className="border-2 border-dashed border-[var(--mist)] hover:border-[var(--gold)] rounded-lg p-5 text-center transition-colors">
                      {proofPreview ? (
                        <div className="space-y-2">
                          <img
                            src={proofPreview}
                            alt="Proof"
                            className="h-28 mx-auto rounded object-contain border border-[var(--mist)]"
                          />
                          <button
                            type="button"
                            onClick={() => setProofPreview(null)}
                            className="text-xs text-[var(--brick)] font-semibold underline"
                          >
                            Change Screenshot
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer block space-y-1.5">
                          <UploadCloud className="w-7 h-7 text-[var(--gray)] mx-auto" />
                          <div className="text-xs font-semibold text-[var(--ink)]">
                            Upload Transfer Receipt
                          </div>
                          <div className="text-[11px] text-[var(--gray)]">
                            PNG, JPG, or PDF up to 5 MB
                          </div>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Registering Sponsorship...' : 'Confirm Sponsorship & Submit Proof'}
                </button>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-20">
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--gray)]">
            Clear Answers
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--ink)]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="card-clean p-5 bg-[var(--paper)]">
              <h3 className="font-display font-semibold text-base text-[var(--ink)] flex items-start gap-2">
                <span className="text-[var(--gold)]">Q.</span> {f.q}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--gray)] leading-relaxed mt-2 pl-5">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
