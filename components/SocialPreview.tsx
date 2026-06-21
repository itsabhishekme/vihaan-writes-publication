"use client";

import Image from "next/image";
import {
  Calendar,
  Clock,
  BookOpen,
  Globe,
  Sparkles,
  TrendingUp,
  Star,
  Eye,
  ArrowRight,
} from "lucide-react";

interface SocialPreviewProps {
  title: string;
  description: string;
  image: string;

  author?: string;
  authorImage?: string;

  category?: string;
  readingTime?: string;
  publishDate?: string;

  website?: string;
  tagline?: string;

  views?: string;
  featured?: boolean;
  series?: string;
}

export default function SocialPreview({
  title,
  description,
  image,

  author = "Vihaan",
  authorImage = "/author.jpg",

  category = "Spiritual Writing",
  readingTime = "10 min read",
  publishDate = "June 2026",

  website = "vihaanwrites.com",
  tagline = "Words Written Before Destiny Arrived",

  views = "125K",
  featured = true,
  series = "The Vihaan Collection",
}: SocialPreviewProps) {
  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black text-white shadow-[0_30px_120px_rgba(0,0,0,0.9)]">
      {/* ---------------------------------------------------------------- */}
      {/* BACKGROUND */}
      {/* ---------------------------------------------------------------- */}

      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        {/* Main Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Left Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />

        {/* Top Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />

        {/* Purple Glow */}
        <div className="absolute -top-32 right-0 h-[700px] w-[700px] rounded-full bg-purple-500/20 blur-[150px]" />

        {/* Gold Glow */}
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[130px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* CONTENT */}
      {/* ---------------------------------------------------------------- */}

      <div className="relative z-10 flex min-h-[800px] flex-col justify-between p-12 md:p-16 lg:p-20">
        {/* ================================================================ */}
        {/* TOP */}
        {/* ================================================================ */}

        <div>
          {/* Featured */}
          <div className="flex flex-wrap items-center gap-4">
            {featured && (
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-2 backdrop-blur-xl">
                <Star className="h-4 w-4 text-amber-400" />

                <span className="text-sm font-semibold tracking-wider text-amber-300 uppercase">
                  Featured Story
                </span>
              </div>
            )}

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
              <BookOpen size={16} />

              <span className="text-sm font-medium tracking-wide">
                {category}
              </span>
            </div>
          </div>

          {/* Series */}
          <div className="mt-8 flex items-center gap-2 text-purple-300">
            <Sparkles className="h-5 w-5" />

            <span className="text-sm font-medium uppercase tracking-[0.3em]">
              {series}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-8 max-w-6xl text-5xl font-bold leading-[1.05] md:text-7xl lg:text-8xl">
            {title}
          </h1>

          {/* Divider */}
          <div className="mt-8 h-px w-40 bg-gradient-to-r from-purple-500 via-amber-400 to-transparent" />

          {/* Description */}
          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
            {description}
          </p>

          {/* Meta */}
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
              <Clock className="h-5 w-5 text-zinc-400" />

              <span>{readingTime}</span>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
              <Calendar className="h-5 w-5 text-zinc-400" />

              <span>{publishDate}</span>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
              <Eye className="h-5 w-5 text-zinc-400" />

              <span>{views} Readers</span>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
              <TrendingUp className="h-5 w-5 text-green-400" />

              <span>Trending</span>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* BOTTOM */}
        {/* ================================================================ */}

        <div className="mt-20 flex flex-col gap-10 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
          {/* AUTHOR */}
          <div className="flex items-center gap-5">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-white/20 shadow-xl">
              <Image
                src={authorImage}
                alt={author}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Author
              </p>

              <h3 className="mt-1 text-2xl font-semibold">
                {author}
              </h3>

              <p className="mt-1 text-zinc-400">
                Storyteller • Writer • Creator
              </p>
            </div>
          </div>

          {/* WEBSITE SECTION */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-purple-400" />

              <span className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                Official Website
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-semibold">
              {website}
            </h3>

            <p className="mt-2 max-w-md text-zinc-400">
              {tagline}
            </p>

            <div className="mt-5 flex items-center gap-2 text-purple-300">
              <span className="font-medium">
                Explore More
              </span>

              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
