import React from 'react';
import Link from 'next/link';
import {
  FileText,
  Calendar,
  User,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { BLOG_POSTS_DATA } from '@/lib/data';

export default function BlogIndexPage() {
  return (
    <div className="space-y-16 pb-20 bg-white text-ink">
      {/* Header */}
      <section className="bg-paper border-b border-mist pt-14 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-mist text-xs font-semibold text-ink">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
            Society Updates & Press Releases
          </div>
          <h1 className="font-display font-semibold text-3xl sm:text-5xl text-ink tracking-tight">
            News & Announcements
          </h1>
          <p className="text-base sm:text-lg text-pen-gray font-light max-w-2xl mx-auto">
            Stay informed on our school events, drive updates, admission periods, and ground achievements.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.map((post) => (
            <article
              key={post.id}
              className="card-clean overflow-hidden bg-white flex flex-col justify-between hover:border-ink transition-colors group"
            >
              <div className="space-y-4">
                <div className="relative h-48 bg-paper border-b border-mist">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-white border border-mist text-ink text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-pen-gray">
                    <Calendar className="w-3.5 h-3.5 text-[var(--gold)]" />
                    <span>{post.publishedAt}</span>
                  </div>

                  <h2 className="font-display font-semibold text-lg text-ink leading-snug group-hover:text-[var(--ember)] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-xs text-pen-gray line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-mist flex items-center justify-between">
                <span className="text-xs text-pen-gray font-medium">By {post.author}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-ink hover:text-[var(--ember)] inline-flex items-center gap-1 transition-colors"
                >
                  Read Post <ArrowRight className="w-3 h-3 text-[var(--gold)]" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
