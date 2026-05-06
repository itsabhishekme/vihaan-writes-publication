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
  HiOutlineSparkles,
  HiOutlineArrowRight,
} from "react-icons/hi2";

import { blogPosts } from "@/data/blog";

/* ================= STATIC PARAMS ================= */

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

/* ================= SEO ================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;

  const post = blogPosts.find(
    (p) => p.slug === slug
  );

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

  const post = blogPosts.find(
    (p) => p.slug === slug
  );

  if (!post) return notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-neutral-950 to-black" />

      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl" />

      {/* HERO */}

      <section className="relative">

        {/* IMAGE */}

        <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">

          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_60%)]" />

          {/* CONTENT */}

          <div className="absolute bottom-0 left-0 right-0">

            <div className="max-w-5xl mx-auto px-6 pb-20">

              {/* BACK */}

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white"
              >

                <HiOutlineArrowLeft />

                Back to Blog

              </Link>

              {/* TAG */}

              <div className="mt-10 flex flex-wrap gap-3">

                {post.tags?.map((tag) => (

                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs backdrop-blur-xl"
                  >

                    #{tag}

                  </span>

                ))}

              </div>

              {/* TITLE */}

              <h1 className="mt-8 max-w-5xl text-5xl md:text-7xl font-black leading-tight tracking-tight">

                {post.title}

              </h1>

              {/* EXCERPT */}

              <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-neutral-300">

                {post.excerpt}

              </p>

              {/* META */}

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-neutral-400">

                <span className="flex items-center gap-2">

                  <HiOutlineCalendarDays />

                  {new Date(
                    post.date
                  ).toLocaleDateString()}

                </span>

                <span className="flex items-center gap-2">

                  <HiOutlineClock />

                  {post.time}

                </span>

                <span className="flex items-center gap-2">

                  <HiOutlineSparkles />

                  By {post.author || "Vihaan"}

                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* AUDIO */}

      {post.audio && (

        <section className="max-w-4xl mx-auto px-6 -mt-14 relative z-20">

          <div className="rounded-[2rem] border border-white/10 bg-neutral-900/80 p-6 backdrop-blur-2xl shadow-2xl">

            <AudioPlayer src={post.audio} />

          </div>

        </section>

      )}

      {/* CONTENT */}

      <section className="relative">

        <div className="max-w-7xl mx-auto grid gap-16 px-6 py-24 lg:grid-cols-[1fr_320px]">

          {/* ARTICLE */}

          <article>

            <div
              className="
              prose 
              prose-invert 
              prose-lg 
              max-w-none

              prose-headings:text-white
              prose-headings:font-black

              prose-p:text-neutral-300
              prose-p:leading-loose

              prose-strong:text-white

              prose-blockquote:border-purple-500
              prose-blockquote:bg-white/5
              prose-blockquote:px-6
              prose-blockquote:py-4
              prose-blockquote:rounded-2xl
              prose-blockquote:text-neutral-300

              prose-a:text-purple-400
            "
            >

              {post.content}

            </div>

            {/* AUTHOR */}

            <div className="mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-10">

              <div className="flex flex-col items-center text-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-2xl font-bold">

                  V

                </div>

                <h3 className="mt-6 text-2xl font-bold">

                  {post.author || "Vihaan"}

                </h3>

                <p className="mt-4 max-w-2xl leading-relaxed text-neutral-400">

                  Writing about emotions,
                  destiny, unseen connections,
                  soulful reflections, and stories
                  that feel remembered instead of imagined.

                </p>

              </div>

            </div>

          </article>

          {/* SIDEBAR */}

          <aside className="space-y-8">

            {/* STICKY */}

            <div className="sticky top-24 space-y-8">

              {/* SHARE */}

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                <h3 className="text-xl font-bold">

                  Continue The Journey

                </h3>

                <p className="mt-4 text-sm leading-relaxed text-neutral-400">

                  Every reflection is written to
                  be experienced, not just read.

                </p>

                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 mt-6 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
                >

                  Explore The Book

                  <HiOutlineArrowRight />

                </Link>

              </div>

              {/* QUOTE */}

              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-8">

                <p className="text-lg leading-relaxed text-neutral-200">

                  “Some stories are written
                  before destiny introduces
                  the people inside them.”

                </p>

                <p className="mt-6 text-sm text-neutral-400">

                  — Vihaan

                </p>

              </div>

            </div>

          </aside>

        </div>

      </section>

      {/* RELATED */}

      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="mb-14 flex items-center justify-between">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">

              Continue Reading

            </p>

            <h2 className="mt-4 text-4xl font-black">

              Related Stories

            </h2>

          </div>

        </div>

        <div className="grid gap-10 md:grid-cols-3">

          {relatedPosts.map((item) => (

            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* IMAGE */}

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <h3 className="text-2xl font-bold leading-snug">

                  {item.title}

                </h3>

                <p className="mt-4 text-sm leading-relaxed text-neutral-400">

                  {item.excerpt}

                </p>

                <div className="mt-6 inline-flex items-center gap-2 font-semibold">

                  Read Story

                  <HiOutlineArrowRight />

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="pb-32">

        <div className="max-w-5xl mx-auto px-6">

          <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-purple-500/10 via-black to-indigo-500/10 p-16 text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">

              Vihaan Writes

            </p>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">

              Read. Listen. Feel.

            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">

              Every story here is designed
              to be experienced emotionally —
              not consumed casually.

            </p>

            <Link
              href="/book"
              className="inline-flex items-center gap-2 mt-10 rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >

              Explore The Book

              <HiOutlineArrowRight />

            </Link>

          </div>

        </div>

      </section>

      {/* STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":
              "https://schema.org",

            "@type": "Article",

            headline: post.title,

            image: post.image,

            author: {
              "@type": "Person",
              name:
                post.author || "Vihaan",
            },

            datePublished:
              post.date,
          }),
        }}
      />

      {/* AUDIO SEO */}

      {post.audio && (

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context":
                "https://schema.org",

              "@type":
                "AudioObject",

              contentUrl:
                post.audio,

              name: post.title,

              description:
                post.excerpt,
            }),
          }}
        />

      )}

    </main>
  );
}