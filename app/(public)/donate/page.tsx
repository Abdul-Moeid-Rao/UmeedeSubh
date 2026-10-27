'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import {
  Heart,
  Copy,
  Check,
  UploadCloud,
  FileCheck,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Lock,
  Building,
  Smartphone,
  CheckCircle2,
} from 'lucide-react';
import { store } from '@/lib/data';

export default function DonatePage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [purpose, setPurpose] = useState('Pehla Qadam School');
  const [donationType, setDonationType] = useState<'one_time' | 'zakat' | 'sadqah'>('one_time');
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(3500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'Easypaisa' | 'JazzCash' | 'Bank Transfer'>('Easypaisa');
  const [proofPreview, setProofPreview] = useState<string | null>(null);
  const [transactionRef, setTransactionRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedDonation, setSubmittedDonation] = useState<any | null>(null);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const presetAmounts = [1500, 3500, 5000, 10000, 25000];

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

  const currentAmount = selectedAmount === 'custom' ? parseInt(customAmount) || 0 : selectedAmount;

  const handleNextFromStep1 = () => {
    if (currentAmount <= 0) {
      alert('Please select or specify a valid donation amount.');
      return;
    }
    setStep(2);
  };

  const handleNextFromStep2 = () => {
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (currentAmount <= 0) {
      alert('Please select or enter a valid donation amount.');
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      const newDonation = store.addDonation({
        donorName: isAnonymous ? 'Anonymous Supporter' : donorName || 'Valued Donor',
        email: email || 'donor@example.com',
        phone: phone || '+92 300 0000000',
        amount: currentAmount,
        type: donationType,
        purpose,
        method: paymentMethod,
        proofUrl:
          proofPreview ||
          'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
        isAnonymous,
      });

      setSubmittedDonation({
        ...newDonation,
        transactionRef: transactionRef || 'DIRECT-TRANSFER',
      });
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
      <section className="bg-[var(--paper)] border-b border-[var(--mist)] pt-12 pb-14">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--white)] text-[var(--ink)] text-xs font-semibold border border-[var(--mist)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
            Direct Impact · 100% Student-Managed Welfare
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)] tracking-tight">
            Support Our Mission
          </h1>
          <p className="mt-3 text-lg text-[var(--gray)] max-w-2xl font-light">
            Every rupee directly educates 70+ out-of-school children, equips youth with digital skills, and funds seasonal relief drives with complete public accountability.
          </p>
        </div>
      </section>

      {/* Main 2-Column Content */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-12">
        {submittedDonation ? (
          /* Confirmation Receipt State */
          <div className="max-w-2xl mx-auto card-clean p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[var(--dawn)] text-[var(--leaf)] flex items-center justify-center mx-auto border border-[var(--gold)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[var(--leaf)] uppercase tracking-wider">
                JazakAllah Khair! Manual Proof Submitted
              </span>
              <h2 className="font-display text-3xl font-semibold text-[var(--ink)]">
                Thank You for Standing with Taxila&apos;s Children
              </h2>
              <p className="text-sm text-[var(--gray)] max-w-md mx-auto">
                Your donation slip has been safely transmitted to our Finance Team for cross-reference and ledger entry.
              </p>
              <div className="inline-block font-mono font-bold text-base bg-[var(--paper)] text-[var(--ink)] px-4 py-2 rounded-lg border border-[var(--mist)] mt-3">
                Tracking ID: {submittedDonation.id}
              </div>
            </div>

            <div className="max-w-md mx-auto bg-[var(--paper)] p-5 rounded-lg border border-[var(--mist)] text-xs text-left space-y-2.5">
              <div className="flex justify-between border-b border-[var(--mist)] pb-2">
                <span className="text-[var(--gray)]">Donor Name</span>
                <span className="font-semibold text-[var(--ink)]">{submittedDonation.donorName}</span>
              </div>
              <div className="flex justify-between border-b border-[var(--mist)] pb-2">
                <span className="text-[var(--gray)]">Donation Amount</span>
                <span className="font-bold text-[var(--ink)]">PKR {submittedDonation.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b border-[var(--mist)] pb-2">
                <span className="text-[var(--gray)]">Designated Purpose</span>
                <span className="font-semibold text-[var(--ink)]">{submittedDonation.purpose}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--gray)]">Payment Channel</span>
                <span className="font-semibold text-[var(--ink)]">{submittedDonation.method}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSubmittedDonation(null);
                  setStep(1);
                  setProofPreview(null);
                  setTransactionRef('');
                }}
                className="btn-secondary w-full sm:w-auto"
              >
                Make Another Contribution
              </button>
              <Link href="/impact" className="btn-primary w-full sm:w-auto">
                View Impact & Transparency Reports
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Short Reassurance & Direct Accounts */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--gray)]">
                  Where Your Money Goes
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--ink)]">
                  Zero administrative deductions. 100% on-ground impact.
                </h2>
                <p className="text-sm text-[var(--gray)] leading-relaxed">
                  As an officially chartered welfare society at UET Taxila, our operations are executed by student volunteers. We rent no corporate suites and pay no executive salaries.
                </p>
              </div>

              {/* Trust Pillars */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[var(--dawn)] text-[var(--ink)] flex items-center justify-center shrink-0 font-display font-semibold text-xs border border-[var(--gold)]">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[var(--ink)]">On-Ground Door-to-Door Surveys</h3>
                    <p className="text-xs text-[var(--gray)] leading-relaxed mt-0.5">
                      Every family receiving food or school support is personally surveyed near Gate 2 by student teams to ensure authentic need.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[var(--dawn)] text-[var(--ink)] flex items-center justify-center shrink-0 font-display font-semibold text-xs border border-[var(--gold)]">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[var(--ink)]">Publicly Audited Drive Reports</h3>
                    <p className="text-xs text-[var(--gray)] leading-relaxed mt-0.5">
                      Itemized receipts, unit procurement costs, and audited tallies are published on our Impact page after every seasonal campaign.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[var(--dawn)] text-[var(--ink)] flex items-center justify-center shrink-0 font-display font-semibold text-xs border border-[var(--gold)]">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[var(--ink)]">Zakat & Sadqah Compliance</h3>
                    <p className="text-xs text-[var(--gray)] leading-relaxed mt-0.5">
                      Strict shariah separation maintained for designated Zakat accounts. Transferred directly to eligible families with complete privacy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Official Society Account Details */}
              <div className="card-clean p-6 bg-[var(--paper)] space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--mist)] pb-3">
                  <h3 className="font-display font-semibold text-base text-[var(--ink)]">
                    Official Donation Channels
                  </h3>
                  <span className="text-xs text-[var(--gray)] flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-[var(--leaf)]" /> Verified
                  </span>
                </div>

                {/* Easypaisa */}
                <div className="bg-[var(--white)] p-3.5 rounded-lg border border-[var(--mist)] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[var(--ink)]">Easypaisa Mobile Wallet</div>
                    <div className="font-mono text-sm font-bold text-[var(--ink)] mt-0.5">0312-9876543</div>
                    <div className="text-[11px] text-[var(--gray)]">Title: Umeed e Subh Welfare</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('03129876543', 'easypaisa')}
                    className="p-2 rounded-md hover:bg-[var(--paper)] text-[var(--gray)] hover:text-[var(--ink)] border border-[var(--mist)] transition-colors"
                    title="Copy number"
                  >
                    {copiedAccount === 'easypaisa' ? (
                      <Check className="w-4 h-4 text-[var(--leaf)]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* JazzCash */}
                <div className="bg-[var(--white)] p-3.5 rounded-lg border border-[var(--mist)] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[var(--ink)]">JazzCash Mobile Wallet</div>
                    <div className="font-mono text-sm font-bold text-[var(--ink)] mt-0.5">0300-1234567</div>
                    <div className="text-[11px] text-[var(--gray)]">Title: Umeed e Subh Society</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('03001234567', 'jazzcash')}
                    className="p-2 rounded-md hover:bg-[var(--paper)] text-[var(--gray)] hover:text-[var(--ink)] border border-[var(--mist)] transition-colors"
                    title="Copy number"
                  >
                    {copiedAccount === 'jazzcash' ? (
                      <Check className="w-4 h-4 text-[var(--leaf)]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Bank Transfer */}
                <div className="bg-[var(--white)] p-3.5 rounded-lg border border-[var(--mist)] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[var(--ink)]">Meezan Bank (Islamic Banking)</div>
                    <div className="font-mono text-sm font-bold text-[var(--ink)] mt-0.5">0102-0102030405</div>
                    <div className="text-[11px] text-[var(--gray)]">Title: UMEED E SUBH · Taxila Cantt (0102)</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('01020102030405', 'bank')}
                    className="p-2 rounded-md hover:bg-[var(--paper)] text-[var(--gray)] hover:text-[var(--ink)] border border-[var(--mist)] transition-colors"
                    title="Copy account"
                  >
                    {copiedAccount === 'bank' ? (
                      <Check className="w-4 h-4 text-[var(--leaf)]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-[var(--gray)] pt-1">
                  * Note: After transferring via your app or ATM, take a screenshot or photo of the receipt to submit in Step 3.
                </p>
              </div>
            </div>

            {/* Right Column: 3-Step Donation Form */}
            <div className="lg:col-span-7">
              <div className="card-clean p-6 sm:p-8 bg-[var(--white)]">
                {/* Stepper Header */}
                <div className="flex items-center justify-between border-b border-[var(--mist)] pb-6 mb-6">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className={`flex items-center gap-2 text-xs font-semibold transition-colors ${
                        step === 1 ? 'text-[var(--ink)] font-bold' : 'text-[var(--gray)]'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          step === 1
                            ? 'bg-[var(--gold)] text-[var(--ink)]'
                            : 'bg-[var(--mist)] text-[var(--gray)]'
                        }`}
                      >
                        1
                      </span>
                      <span>1. Amount</span>
                    </button>

                    <div className="w-6 h-[1px] bg-[var(--mist)]"></div>

                    <button
                      type="button"
                      onClick={() => {
                        if (currentAmount > 0) setStep(2);
                      }}
                      className={`flex items-center gap-2 text-xs font-semibold transition-colors ${
                        step === 2 ? 'text-[var(--ink)] font-bold' : 'text-[var(--gray)]'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          step === 2
                            ? 'bg-[var(--gold)] text-[var(--ink)]'
                            : 'bg-[var(--mist)] text-[var(--gray)]'
                        }`}
                      >
                        2
                      </span>
                      <span>2. Transfer</span>
                    </button>

                    <div className="w-6 h-[1px] bg-[var(--mist)]"></div>

                    <button
                      type="button"
                      onClick={() => {
                        if (currentAmount > 0) setStep(3);
                      }}
                      className={`flex items-center gap-2 text-xs font-semibold transition-colors ${
                        step === 3 ? 'text-[var(--ink)] font-bold' : 'text-[var(--gray)]'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          step === 3
                            ? 'bg-[var(--gold)] text-[var(--ink)]'
                            : 'bg-[var(--mist)] text-[var(--gray)]'
                        }`}
                      >
                        3
                      </span>
                      <span>3. Proof</span>
                    </button>
                  </div>

                  <span className="text-xs text-[var(--gray)] font-mono">Step {step} of 3</span>
                </div>

                {/* Step 1: Amount & Purpose */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--ink)] mb-3">
                        Select Donation Type
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['one_time', 'zakat', 'sadqah'] as const).map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setDonationType(type)}
                            className={`py-2.5 px-3 rounded-full text-xs font-semibold border transition-all ${
                              donationType === type
                                ? 'bg-[var(--dawn)] border-[var(--gold)] text-[var(--ink)]'
                                : 'bg-[var(--white)] border-[var(--mist)] text-[var(--gray)] hover:border-[var(--ink)]'
                            }`}
                          >
                            {type === 'one_time' ? 'General' : type === 'zakat' ? 'Zakat' : 'Sadqah'}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--ink)] mb-3">
                        Choose Amount (PKR)
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {presetAmounts.map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => {
                              setSelectedAmount(amt);
                              setCustomAmount('');
                            }}
                            className={`px-4 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                              selectedAmount === amt
                                ? 'bg-[var(--dawn)] border-[var(--gold)] text-[var(--ink)] shadow-sm'
                                : 'bg-[var(--white)] border-[var(--mist)] text-[var(--ink)] hover:border-[var(--ink)]'
                            }`}
                          >
                            PKR {amt.toLocaleString()}
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={() => setSelectedAmount('custom')}
                          className={`px-4 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                            selectedAmount === 'custom'
                              ? 'bg-[var(--dawn)] border-[var(--gold)] text-[var(--ink)] shadow-sm'
                              : 'bg-[var(--white)] border-[var(--mist)] text-[var(--ink)] hover:border-[var(--ink)]'
                          }`}
                        >
                          Custom Amount
                        </button>
                      </div>

                      {selectedAmount === 'custom' && (
                        <div className="mt-4">
                          <label className="block text-xs text-[var(--gray)] mb-1">
                            Enter Custom Amount in PKR:
                          </label>
                          <div className="relative">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--gray)]">
                              PKR
                            </span>
                            <input
                              type="number"
                              min="100"
                              placeholder="e.g. 15000"
                              value={customAmount}
                              onChange={(e) => setCustomAmount(e.target.value)}
                              className="w-full pl-14 pr-4 py-3 rounded-lg border border-[var(--mist)] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--ink)] mb-2">
                        Designated Cause / Project
                      </label>
                      <select
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-lg border border-[var(--mist)] text-sm text-[var(--ink)] bg-[var(--white)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      >
                        <option value="Pehla Qadam School">Pehla Qadam Evening School (Books, uniforms, stationery)</option>
                        <option value="IT Box Lab">IT Box Computer Lab (Digital literacy & hardware)</option>
                        <option value="Chaddar Vocational">Chaddar Vocational Stitching (Women&apos;s diplomas)</option>
                        <option value="Ramadan Ration Drive">Ramadan Ration Relief (Dry food packages)</option>
                        <option value="Winter Lihaf Drive">Winter Warmth Drive (Handcrafted quilts)</option>
                        <option value="Fee Cases Fund">University Student Fee Assistance Fund</option>
                        <option value="General Society Fund">Where Most Needed (Society Discretion)</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleNextFromStep1}
                        className="btn-primary w-full flex items-center justify-center gap-2"
                      >
                        Proceed to Payment Channels
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Transfer Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="bg-[var(--paper)] p-4 rounded-lg border border-[var(--mist)] flex justify-between items-center text-sm">
                      <span className="text-[var(--gray)]">Selected Contribution:</span>
                      <span className="font-display font-semibold text-lg text-[var(--ink)]">
                        PKR {currentAmount.toLocaleString()} ({purpose})
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--ink)] mb-3">
                        Choose Transfer Method Used
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {(['Easypaisa', 'JazzCash', 'Bank Transfer'] as const).map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setPaymentMethod(method)}
                            className={`p-3 rounded-lg text-xs font-semibold border text-center transition-all ${
                              paymentMethod === method
                                ? 'bg-[var(--dawn)] border-[var(--gold)] text-[var(--ink)] font-bold'
                                : 'bg-[var(--white)] border-[var(--mist)] text-[var(--gray)] hover:border-[var(--ink)]'
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-[var(--mist)] bg-[var(--white)] space-y-2">
                      <div className="text-xs font-bold text-[var(--ink)]">
                        Transfer {paymentMethod === 'Easypaisa' ? 'to 0312-9876543 (Easypaisa)' : paymentMethod === 'JazzCash' ? 'to 0300-1234567 (JazzCash)' : 'to Meezan Bank (0102-0102030405)'}
                      </div>
                      <p className="text-xs text-[var(--gray)] leading-relaxed">
                        Open your banking app, complete the transfer of <strong>PKR {currentAmount.toLocaleString()}</strong>, and save the receipt or note the Transaction ID (TID).
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[var(--ink)] mb-1">
                        Transaction Reference / TID (Optional if uploading receipt)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. TRX-982348271"
                        value={transactionRef}
                        onChange={(e) => setTransactionRef(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="btn-secondary flex-1 flex items-center justify-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNextFromStep2}
                        className="btn-primary flex-1 flex items-center justify-center gap-2"
                      >
                        Upload Proof & Confirm
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Donor Details & Proof Upload */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-[var(--paper)] p-4 rounded-lg border border-[var(--mist)] text-xs text-[var(--gray)] flex items-center justify-between">
                      <span>Donating: <strong>PKR {currentAmount.toLocaleString()}</strong> via {paymentMethod}</span>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-[var(--ink)] underline font-semibold"
                      >
                        Edit
                      </button>
                    </div>

                    {/* Donor Details */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                          Donor Information
                        </label>
                        <label className="flex items-center gap-1.5 text-xs text-[var(--gray)] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={isAnonymous}
                            onChange={(e) => setIsAnonymous(e.target.checked)}
                            className="rounded border-[var(--mist)] text-[var(--ink)] focus:ring-[var(--gold)]"
                          />
                          Make this donation anonymous
                        </label>
                      </div>

                      {!isAnonymous && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-[var(--ink)] mb-1 font-semibold">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required={!isAnonymous}
                              placeholder="e.g. Dr. Haris Farooq"
                              value={donorName}
                              onChange={(e) => setDonorName(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                            />
                          </div>

                          <div>
                            <label className="block text-xs text-[var(--ink)] mb-1 font-semibold">
                              Phone / WhatsApp *
                            </label>
                            <input
                              type="tel"
                              required={!isAnonymous}
                              placeholder="+92 300 0000000"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <label className="block text-xs text-[var(--ink)] mb-1 font-semibold">
                              Email Address (for acknowledgment & audit report)
                            </label>
                            <input
                              type="email"
                              placeholder="donor@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Screenshot / Slip Upload */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--ink)] mb-2">
                        Attach Payment Screenshot or Slip
                      </label>
                      <div className="border-2 border-dashed border-[var(--mist)] hover:border-[var(--gold)] rounded-lg p-6 text-center transition-colors">
                        {proofPreview ? (
                          <div className="space-y-3">
                            <img
                              src={proofPreview}
                              alt="Proof preview"
                              className="h-32 mx-auto rounded object-contain border border-[var(--mist)]"
                            />
                            <button
                              type="button"
                              onClick={() => setProofPreview(null)}
                              className="text-xs text-[var(--brick)] font-semibold underline"
                            >
                              Remove & Upload Different Image
                            </button>
                          </div>
                        ) : (
                          <label className="cursor-pointer block space-y-2">
                            <UploadCloud className="w-8 h-8 text-[var(--gray)] mx-auto" />
                            <div className="text-xs font-semibold text-[var(--ink)]">
                              Click to browse receipt image
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

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn-secondary flex-1 flex items-center justify-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary flex-1 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? 'Verifying & Submitting...' : 'Complete & Submit Proof'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
