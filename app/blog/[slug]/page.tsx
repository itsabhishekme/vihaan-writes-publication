import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AudioPlayer from "@/components/AudioPlayer";

import {
  HiOutlineArrowLeft,
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineTag,
} from "react-icons/hi2";

import { blogPosts } from "@/data/blog";

/* ================= STATIC PATHS ================= */
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

/* ================= SEO METADATA ================= */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Not Found | Vihaan Writes",
    };
  }

  return {
    title: `${post.title} | Vihaan Writes`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

/* ================= PAGE ================= */
export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]" />

      {/* ================= HERO ================= */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"
        >
          <HiOutlineArrowLeft /> Back to Blog
        </Link>

        <h1 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
          {post.title}
        </h1>

        <p className="mt-6 text-neutral-400 max-w-2xl mx-auto text-lg">
          {post.excerpt}
        </p>

        {/* META */}
        <div className="mt-6 flex justify-center gap-6 text-sm text-neutral-500">
          <span className="flex items-center gap-1">
            <HiOutlineCalendarDays />
            {new Date(post.date).toLocaleDateString()}
          </span>

          <span className="flex items-center gap-1">
            <HiOutlineClock />
            {post.time}
          </span>
        </div>

        {/* TAGS */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-white/5 rounded-full flex items-center gap-1"
            >
              <HiOutlineTag /> {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ================= IMAGE ================= */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="relative h-[420px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* ================= AUDIO ================= */}
      {post.audio && (
        <section className="max-w-3xl mx-auto px-6 mt-10">
          <AudioPlayer src={post.audio} />
        </section>
      )}

      {/* ================= CONTENT ================= */}
      <article className="max-w-3xl mx-auto px-6 py-16">

        {/* 💡 PROSE (SEO + READABILITY) */}
        <div
          className="prose prose-invert prose-lg max-w-none
          prose-headings:text-white
          prose-p:text-neutral-300
          prose-blockquote:border-white/20
          prose-blockquote:text-neutral-400
          prose-strong:text-white
        "
        >
          {post.content}
        </div>

        {/* 🔥 SEO BOOST SECTIONS */}
        <div className="mt-20 space-y-12">

          <section>
            <h2 className="text-2xl font-bold">Deep Insight</h2>
            <p className="text-neutral-400 mt-4">
              This section strengthens SEO by adding semantic depth,
              improving topical authority, and increasing dwell time.
              Long-form content signals quality to search engines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Why Audio Matters</h2>
            <p className="text-neutral-400 mt-4">
              Audio transforms reading into an experience. Users stay longer,
              engage deeper, and revisit content — boosting ranking signals.
            </p>
          </section>

        </div>

        {/* AUTHOR */}
        <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
          <p className="text-neutral-400">Written by</p>
          <p className="text-white text-xl font-semibold mt-1">
            {post.author || "Vihaan"}
          </p>
          <p className="text-neutral-400 text-sm mt-3">
            Exploring love, destiny, emotions, and unseen life patterns.
          </p>
        </div>

      </article>

      {/* ================= RELATED ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-10">Related Stories</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="group block border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition"
            >
              <div className="relative h-40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-xs text-neutral-400 mt-2">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 🎧 STICKY AUDIO */}
      {post.audio && (
        <div className="fixed bottom-6 right-6 z-50 w-[320px] hidden md:block">
          <AudioPlayer src={post.audio} />
        </div>
      )}

      {/* ================= CTA ================= */}
      <section className="text-center pb-32">
        <div className="inline-block px-10 py-10 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-3xl border border-white/10">
          <h2 className="text-3xl font-bold">
            🎧 Read. Listen. Feel.
          </h2>
          <p className="text-neutral-400 mt-4">
            Every story is designed as an experience — not just content.
          </p>
        </div>
      </section>

      {/* ================= STRUCTURED DATA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            image: post.image,
            author: {
              "@type": "Person",
              name: post.author || "Vihaan",
            },
            datePublished: post.date,
          }),
        }}
      />

      {post.audio && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AudioObject",
              contentUrl: post.audio,
              name: post.title,
              description: post.excerpt,
            }),
          }}
        />
      )}

    </main>
  );
}