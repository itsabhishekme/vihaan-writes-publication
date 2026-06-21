"use client";

import Image from "next/image";
import { Calendar, Clock, BookOpen } from "lucide-react";

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

  website = "vihaan-writes.vercel.app",
  tagline = "Words Written Before Destiny Arrived",
}: SocialPreviewProps) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black text-white shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover opacity-40"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />

        {/* Radial Glow */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[630px] flex-col justify-between p-10 md:p-16">
        {/* Top Section */}
        <div>
          {/* Category */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
            <BookOpen size={16} />
            <span className="text-sm font-medium tracking-wide">
              {category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-8 max-w-5xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-2xl">
            {description}
          </p>

          {/* Meta Info */}
          <div className="mt-8 flex flex-wrap gap-6 text-zinc-300">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{readingTime}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{publishDate}</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/20">
              <Image
                src={authorImage}
                alt={author}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm text-zinc-400">Written by</p>
              <p className="text-xl font-semibold">{author}</p>
            </div>
          </div>

          {/* Website */}
          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
              Vihaan Writes
            </p>

            <p className="mt-1 text-lg font-medium">
              {website}
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              {tagline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}