import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
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

/* ================= SEO ================= */
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
    .slice(0, 2);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]" />

      <article className="max-w-3xl mx-auto px-6 py-20">

        {/* 🔙 BACK */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"
        >
          <HiOutlineArrowLeft /> Back to Blog
        </Link>

        {/* 🖼 HERO IMAGE */}
        <div className="relative h-[420px] mt-10 rounded-2xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* 📝 TITLE */}
        <h1 className="mt-12 text-4xl md:text-5xl font-black leading-tight">
          {post.title}
        </h1>

        {/* 📊 META */}
        <div className="mt-5 flex flex-wrap gap-6 text-sm text-neutral-400">
          <span className="flex items-center gap-2">
            <HiOutlineCalendarDays />
            {new Date(post.date).toLocaleDateString()}
          </span>

          <span className="flex items-center gap-2">
            <HiOutlineClock />
            {post.time}
          </span>

          {post.category && (
            <span className="flex items-center gap-2">
              <HiOutlineTag />
              {post.category}
            </span>
          )}
        </div>

        {/* 🔥 TAGS */}
        {post.tags && (
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-white/10 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* ✍️ CONTENT */}
        <div className="mt-12 space-y-8 text-lg leading-relaxed text-neutral-300">
          {post.content}
        </div>

        {/* ✨ AUTHOR */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-neutral-400">Written by</p>
          <p className="text-white text-xl font-semibold mt-1">
            {post.author || "Vihaan"}
          </p>
        </div>

        {/* 🔗 RELATED POSTS */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold mb-6">
            Related Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group rounded-xl overflow-hidden bg-neutral-900 hover:scale-[1.02] transition"
              >
                <div className="relative h-40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-2">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </article>
    </main>
  );
}