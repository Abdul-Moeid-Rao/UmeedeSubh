'use client';

import React, { useState } from 'react';
import {
  Camera,
  X,
  ShieldCheck,
} from 'lucide-react';
import { GALLERY_ALBUMS_DATA } from '@/lib/data';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<{ url: string; caption: string } | null>(null);

  const categories = ['all', 'Pehla Qadam', 'IT Box', 'Chaddar', 'Drives'];

  const filteredAlbums =
    activeCategory === 'all'
      ? GALLERY_ALBUMS_DATA
      : GALLERY_ALBUMS_DATA.filter((a) => a.category === activeCategory);

  return (
    <div className="bg-[var(--white)] min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="bg-[var(--paper)] border-b border-[var(--mist)] pt-14 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--white)] text-[var(--ink)] text-xs font-semibold border border-[var(--mist)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
            Visual Archive & Media Coverage
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)] tracking-tight">
            Photo Gallery
          </h1>
          <p className="mt-3 text-lg text-[var(--gray)] max-w-2xl font-light">
            Moments of devotion, learning, and dignified service captured on the ground by our student Media & Coverage team. Guardian consent protocols strictly maintained.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Content */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-10 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--mist)] pb-4">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all ${
                  activeCategory === cat
                    ? 'bg-[var(--ink)] text-[var(--white)]'
                    : 'bg-[var(--white)] text-[var(--ink)] border border-[var(--mist)] hover:border-[var(--ink)]'
                }`}
              >
                {cat === 'all' ? 'All Albums' : cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-[var(--gray)] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[var(--leaf)]" />
            <span>Strict Guardian Consent Protocol Maintained</span>
          </div>
        </div>

        {/* Albums & Photos Grid */}
        <div className="space-y-12">
          {filteredAlbums.map((album) => (
            <div key={album.id} className="space-y-5">
              <div className="flex items-center justify-between border-b border-[var(--mist)] pb-3">
                <div>
                  <h2 className="font-display text-xl font-semibold text-[var(--ink)]">{album.title}</h2>
                  <p className="text-xs text-[var(--gray)] mt-0.5">
                    {album.eventDate} · Category: {album.category}
                  </p>
                </div>
                <span className="text-xs text-[var(--gray)] font-mono bg-[var(--paper)] px-2.5 py-1 rounded-full border border-[var(--mist)]">
                  {album.images.length} photos
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {album.images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setActivePhoto(img)}
                    className="group relative h-60 rounded-lg overflow-hidden bg-[var(--paper)] border border-[var(--mist)] hover:border-[var(--ink)] cursor-pointer transition-all duration-300"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-[var(--white)] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="line-clamp-2 leading-relaxed">{img.caption}</p>
                      <span className="text-[10px] text-[var(--gold)] font-semibold mt-1 block">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-[var(--ink)]/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-[var(--white)]/10 hover:bg-[var(--white)]/20 text-[var(--white)] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[90vh] flex flex-col items-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activePhoto.url}
              alt={activePhoto.caption}
              className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl border border-[var(--white)]/10"
            />
            <p className="text-[var(--white)] text-sm text-center max-w-2xl px-4 font-light">
              {activePhoto.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
