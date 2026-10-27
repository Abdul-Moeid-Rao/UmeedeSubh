'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  MessageSquare,
  Clock,
  HelpCircle,
  ExternalLink,
  MessageCircle,
  AlertCircle,
} from 'lucide-react';
import { store } from '@/lib/data';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      store.addMessage({
        name,
        email,
        subject,
        message,
      });

      setSubmitted(true);
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 500);
  };

  const faqs = [
    {
      q: 'How do I get admission for my child in Pehla Qadam School?',
      a: 'Admissions are handled exclusively in-person at our school facility near Gate 2, UET Taxila. Please visit between 3:30 PM and 5:00 PM on weekdays with your child, your CNIC copy, and the child’s B-Form. Education, books, and uniforms are 100% free with zero fee.',
    },
    {
      q: 'Can I sponsor a child if I live outside Pakistan?',
      a: 'Yes, absolutely! Overseas Pakistanis in the UK, Middle East, USA, and elsewhere regularly sponsor children via international bank transfer to our Meezan Bank account. Contact our CSP coordinator for swift remittance details.',
    },
    {
      q: 'Who is eligible to volunteer for UMEED E SUBH?',
      a: 'Any enrolled undergraduate or graduate student of UET Taxila Main Campus can join as a volunteer teacher, lab demonstrator, photographer, or drive organizer by submitting our online volunteer application.',
    },
    {
      q: 'Are donations eligible for Zakat?',
      a: 'Yes. 100% of your Zakat funds are deposited into a dedicated shariah-compliant account and allocated directly to verified deserving families, school uniforms, and food relief with physical audit records.',
    },
  ];

  return (
    <div className="bg-[var(--white)] min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--mist)] pt-14 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--white)] text-[var(--ink)] text-xs font-semibold border border-[var(--mist)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
            Campus Presence · Near Gate 2, UET Taxila
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)] tracking-tight">
            Contact & On-Ground Center
          </h1>
          <p className="mt-3 text-lg text-[var(--gray)] max-w-2xl font-light">
            Whether you wish to sponsor a student, coordinate a relief drive, or visit our evening school near Gate 2, our student team is ready to welcome you.
          </p>
        </div>
      </section>

      {/* Main 2-Column Section */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form & In-Person Advisory */}
          <div className="lg:col-span-7 space-y-6">
            <div className="card-clean p-6 sm:p-8 bg-[var(--white)] space-y-6">
              <div>
                <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
                  Send Us an Inquiry
                </h2>
                <p className="text-xs text-[var(--gray)] mt-1">
                  Our Project Management & Documentation team reviews queries daily.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-lg bg-[var(--paper)] border border-[var(--mist)] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--dawn)] text-[var(--leaf)] flex items-center justify-center mx-auto border border-[var(--gold)]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[var(--ink)]">
                    Message Received
                  </h3>
                  <p className="text-xs text-[var(--gray)] max-w-sm mx-auto">
                    Thank you. Your inquiry has been routed to the relevant Wing Head and our team will respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary text-xs"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Salman Qureshi"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                      Subject / Topic *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Inquiring about CSP Sponsorship or Corporate CSR Partnership"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--ink)] mb-1">
                      Detailed Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please provide specifics of how we can assist you..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--mist)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Transmitting...' : 'Dispatch Message'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* In-Person Admissions Advisory */}
            <div className="card-clean p-6 bg-[var(--paper)] border-[var(--gold)] flex items-start gap-4 text-xs">
              <AlertCircle className="w-5 h-5 text-[var(--ink)] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-[var(--ink)]">School Admission Advisory</h3>
                <p className="text-[var(--gray)] leading-relaxed">
                  Admissions for Pehla Qadam School, IT Box, and Chaddar Stitching are strictly in-person near Gate 2, UET Taxila on weekdays from 3:30 PM to 5:00 PM. We do NOT accept online admissions or collect beneficiary children&apos;s data on this website.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Contact, Map & Gate 2 Note */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Channels */}
            <div className="card-clean p-6 bg-[var(--white)] space-y-4">
              <h3 className="font-display font-semibold text-lg text-[var(--ink)]">
                Direct Communication Channels
              </h3>

              <div className="space-y-3">
                {/* WhatsApp Direct */}
                <a
                  href="https://wa.me/923001234567?text=Hello%20UMEED%20E%20SUBH%20team,%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[var(--paper)] hover:bg-[var(--dawn)] border border-[var(--mist)] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[var(--leaf)] text-[var(--white)] flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--ink)]">WhatsApp Helpline</div>
                      <div className="text-[11px] text-[var(--gray)] font-mono">+92 300 1234567 (Instant Chat)</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[var(--gray)] group-hover:text-[var(--ink)]" />
                </a>

                {/* Email Direct */}
                <div className="p-3.5 rounded-lg bg-[var(--paper)] border border-[var(--mist)] space-y-1">
                  <div className="text-xs font-bold text-[var(--ink)] flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[var(--gray)]" />
                    Official Inquiries & CSR
                  </div>
                  <div className="text-xs font-mono font-bold text-[var(--ink)]">info@umeedesubh.org</div>
                  <div className="text-[11px] text-[var(--gray)]">Documentation & Audit: docs@umeedesubh.org</div>
                </div>

                {/* Hours */}
                <div className="p-3.5 rounded-lg bg-[var(--paper)] border border-[var(--mist)] space-y-1">
                  <div className="text-xs font-bold text-[var(--ink)] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[var(--gray)]" />
                    Operating Timings
                  </div>
                  <div className="text-xs text-[var(--gray)]">
                    Evening School Classes: <strong>3:30 PM – 6:00 PM (Mon–Fri)</strong>
                  </div>
                  <div className="text-xs text-[var(--gray)]">
                    Chaddar Stitching: <strong>9:00 AM – 12:00 PM (Daily)</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Landmark & Map to Gate 2 */}
            <div className="card-clean p-6 bg-[var(--white)] space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--gray)]">
                  Physical Campus Location
                </span>
                <h3 className="font-display font-semibold text-lg text-[var(--ink)] mt-0.5">
                  Gate 2 Landmark, UET Taxila
                </h3>
                <p className="text-xs text-[var(--gray)] mt-1 leading-relaxed">
                  Located right outside Gate 2, University of Engineering and Technology (UET) Taxila, Rawalpindi District, Punjab, Pakistan.
                </p>
              </div>

              {/* Map embed / preview container */}
              <div className="aspect-[16/10] rounded-lg overflow-hidden border border-[var(--mist)] relative bg-[var(--paper)]">
                <iframe
                  title="UMEED E SUBH Location Gate 2 UET Taxila"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13264.453303681467!2d72.8093121!3d33.7661556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa43588226ef9%3A0x6b63d917865f3775!2sUniversity%20of%20Engineering%20and%20Technology%2C%20Taxila!5e0!3m2!1sen!2s!4v1698284567890!5m2!1sen!2s"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <a
                href="https://maps.google.com/?q=University+of+Engineering+and+Technology+Taxila"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-xs flex items-center justify-center gap-2"
              >
                Open in Google Maps App
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-20">
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--gray)]">
            Frequently Inquired
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--ink)]">
            Common Questions & Answers
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
