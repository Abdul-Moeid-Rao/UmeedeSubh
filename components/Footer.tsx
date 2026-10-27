'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Award,
  ChevronRight,
  Heart,
} from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-12 border-t border-slate-800 relative">
      {/* Top Gold Sunrise Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FCC609] via-[#F07D3E] to-[#EB543B]"></div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Logo & Society Identity */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Logo variant="compact" theme="dark" height={48} />
            </Link>

            <p className="text-xs text-white/70 leading-relaxed">
              Umeed E Subh — A Struggle for Literate Pakistan. We run Pehla Qadam School, IT Box Computer Lab, Chaddar Stitching School, and community relief drives.
            </p>

            <div className="font-urdu text-base text-[#FCC609] leading-loose pt-1">
              ایک جدوجہد، باوقار اور خواندہ پاکستان کے لیے
            </div>

            <div className="space-y-1.5 text-xs text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FCC609] shrink-0 mt-0.5" />
                <span>Near Gate 2, Taxila, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FCC609] shrink-0" />
                <span>info@umeedesubh.org</span>
              </div>
            </div>
          </div>

          {/* Col 2: Flagship Projects */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm text-white uppercase tracking-wider border-l-2 border-[#FCC609] pl-2.5">
              Initiatives
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <Link
                  href="/projects/pehla-qadam"
                  className="hover:text-[#FCC609] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#FCC609]" />
                  Pehla Qadam Evening School (70+ Kids)
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/it-box"
                  className="hover:text-[#FCC609] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#FCC609]" />
                  IT Box Computer Training Lab
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/chaddar"
                  className="hover:text-[#FCC609] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#FCC609]" />
                  Chaddar Women Stitching School
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsor"
                  className="hover:text-[#FCC609] transition-colors flex items-center gap-1.5 font-semibold text-[#FCC609]"
                >
                  <ChevronRight className="w-3 h-3 text-[#FCC609]" />
                  Child Sponsorship Program (CSP)
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/ramadan-ration-drive"
                  className="hover:text-[#FCC609] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#FCC609]" />
                  Ramadan Food Ration Drive (2 Phases)
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/lihaf-drive"
                  className="hover:text-[#FCC609] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#FCC609]" />
                  Winter Lihaf & Quilt Drive
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Governance & Transparency */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm text-white uppercase tracking-wider border-l-2 border-[#FCC609] pl-2.5">
              Governance & Proof
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <Link
                  href="/verify-certificate"
                  className="text-[#FCC609] hover:underline transition-colors flex items-center gap-1.5 font-bold"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verify Certificate (IT Box & Chaddar)
                </Link>
              </li>
              <li>
                <Link
                  href="/cabinet"
                  className="hover:text-[#FCC609] transition-colors flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5 text-[#FCC609]" />
                  Cabinet Archive
                </Link>
              </li>
              <li>
                <Link
                  href="/about/story"
                  className="hover:text-[#FCC609] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#FCC609]" />
                  Founding Story & Milestone Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="/about/hierarchy"
                  className="hover:text-[#FCC609] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#FCC609]" />
                  5-Tier Student Hierarchy
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="hover:text-[#FCC609] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#FCC609]" />
                  Our Specialized Student Wings
                </Link>
              </li>
              <li>
                <Link
                  href="/join"
                  className="hover:text-[#FCC609] transition-colors flex items-center gap-1.5 text-white font-semibold"
                >
                  <ChevronRight className="w-3 h-3 text-[#FCC609]" />
                  Apply to Join a Volunteer Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Accounts & Giving */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm text-white uppercase tracking-wider border-l-2 border-[#FCC609] pl-2.5">
              Direct Giving Channels
            </h4>

            <div className="bg-white/5 rounded-[10px] p-3.5 border border-white/10 text-xs space-y-2.5">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#FCC609] tracking-wider block">
                  Easypaisa
                </span>
                <span className="font-mono text-white text-xs">0312-9876543</span>
                <span className="text-[10px] text-white/50 block">Title: Umeed e Subh Welfare</span>
              </div>

              <div className="border-t border-white/10 pt-2">
                <span className="text-[10px] uppercase font-bold text-[#FCC609] tracking-wider block">
                  JazzCash
                </span>
                <span className="font-mono text-white text-xs">0300-1234567</span>
                <span className="text-[10px] text-white/50 block">Title: Umeed e Subh</span>
              </div>

              <div className="border-t border-white/10 pt-2">
                <span className="text-[10px] uppercase font-bold text-[#FCC609] tracking-wider block">
                  Meezan Bank (Islamic)
                </span>
                <span className="font-mono text-white text-xs">0102-0102030405</span>
                <span className="text-[10px] text-white/50 block">Title: Umeed e Subh</span>
              </div>

              <div className="pt-1">
                <Link
                  href="/donate"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-ink bg-[#FCC609] hover:bg-[#F5B226] rounded-full transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 fill-ink" />
                  Submit Payment Slip
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="text-center md:text-left">
            © Umeed E Subh. All Rights Reserved. A Struggle for Literate Pakistan.
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 shadow-2xs">
            <span>Developed by</span>
            <span className="font-semibold text-[#FCC609]">Pehla Qadam Head</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Verified Ground Realities</span>
            <span>·</span>
            <span>Child Protection Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
