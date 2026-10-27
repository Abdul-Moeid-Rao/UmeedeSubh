'use client';

import React, { use, Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  User,
  Share2,
  Bookmark,
  Sparkles,
} from 'lucide-react';
import { BLOG_POSTS_DATA } from '@/lib/data';

function BlogPostContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;

  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-12 pb-20 bg-white text-ink">
      {/* Header */}
      <section className="bg-paper border-b border-mist pt-14 pb-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-pen-gray hover:text-ink transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All News
          </Link>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-white border border-mist text-ink text-xs font-bold">
              {post.category}
            </span>
            <span className="text-xs text-pen-gray flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[var(--gold)]" /> {post.publishedAt}
            </span>
          </div>

          <h1 className="font-display font-semibold text-3xl sm:text-5xl text-ink tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-pen-gray">
            <div className="w-8 h-8 rounded-full bg-[var(--dawn)] border border-[var(--gold)] flex items-center justify-center font-bold text-ink">
              {post.author[0]}
            </div>
            <div>
              <span className="font-bold text-ink block">{post.author}</span>
              <span className="text-pen-gray">{post.authorRole}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-5 sm:px-8 space-y-8">
        <div className="relative h-80 sm:h-[420px] card-clean overflow-hidden bg-paper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="card-clean p-6 sm:p-12 bg-white space-y-6">
          <p className="text-lg font-medium text-ink leading-relaxed italic border-l-4 border-[var(--gold)] pl-4 bg-[var(--paper)] py-3 rounded-r-lg">
            {post.excerpt}
          </p>

          <div className="text-sm sm:text-base text-pen-gray leading-relaxed whitespace-pre-line space-y-4">
            {post.content}
          </div>
        </div>

        <div className="p-5 bg-paper rounded-[10px] border border-mist flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-pen-gray">
          <span>Official Dispatch of UMEED E SUBH Documentation & Media Wing.</span>
          <Link
            href="/blog"
            className="font-bold text-ink hover:text-[var(--ember)] transition-colors inline-flex items-center gap-1"
          >
            ← Browse more articles
          </Link>
        </div>
      </article>
    </div>
  );
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<div className="min-h-screen py-24 text-center text-pen-gray">Loading blog post...</div>}>
      <BlogPostContent params={params} />
    </Suspense>
  );
}
