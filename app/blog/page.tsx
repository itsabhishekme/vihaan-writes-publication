import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineArrowRight,
  HiOutlineSparkles,
  HiOutlineTag,
  HiOutlineStar,
} from "react-icons/hi2";

import { blogPosts } from "@/data/blog"; // ✅ FIXED SOURCE

/* ================= SEO ================= */
export const metadata: Metadata = {
  title: "Blog | Vihaan Writes",
  description:
    "Explore deep reflections on love, destiny, healing, growth, and storytelling by Vihaan.",
};

/* ================= PAGE ================= */

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden text-white">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-neutral-900 to-black" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_50%)]" />

      {/* ✨ HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-sm text-neutral-300 backdrop-blur">
          <HiOutlineSparkles />
          Soulful Writing Space
        </div>

        <h1 className="mt-6 text-6xl md:text-8xl font-black tracking-tight">
          Vihaan <span className="text-neutral-500">Blog</span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg text-neutral-400 leading-relaxed">
          A space where emotions meet meaning — exploring love, destiny,
          creativity, and personal transformation.
        </p>
      </section>

      {/* ⭐ FEATURED */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10">

          <Image
            src="/featured.jpg"
            alt="Featured Blog"
            fill
            className="object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

          <div className="relative p-12 md:p-16 backdrop-blur-xl">
            <span className="flex items-center gap-2 text-sm text-neutral-300">
              <HiOutlineStar /> Featured Story
            </span>

            <h2 className="mt-6 text-5xl font-bold max-w-3xl leading-tight">
              Words Written Before Destiny Arrived
            </h2>

            <Link
              href="/blog/featured"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
            >
              Read Story <HiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 📝 POSTS */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">

          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 hover:-translate-y-2 hover:shadow-2xl transition duration-500"
            >

              {/* IMAGE */}
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* CATEGORY */}
                <span className="text-xs text-neutral-400 flex items-center gap-1">
                  <HiOutlineTag /> {post.category}
                </span>

                {/* TITLE */}
                <h3 className="mt-4 text-xl font-bold">
                  {post.title}
                </h3>

                {/* EXCERPT */}
                <p className="mt-3 text-neutral-400 text-sm">
                  {post.excerpt}
                </p>

                {/* META */}
                <div className="mt-4 flex gap-4 text-xs text-neutral-500">
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
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-white/5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 mt-6 font-semibold text-sm group-hover:text-white"
                >
                  Read More <HiOutlineArrowRight />
                </Link>

              </div>
            </article>
          ))}

        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-28 text-center">
        <div className="rounded-[2rem] bg-white text-black p-12 shadow-2xl">
          <h2 className="text-4xl font-black">
            More Words Coming Soon
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition"
          >
            Connect Now
          </Link>
        </div>
      </section>

    </main>
  );
}