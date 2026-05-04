"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineArrowRight,
  HiOutlineSparkles,
  HiOutlineTag,
  HiOutlineFire,
  HiOutlineEnvelope,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [search, setSearch] = useState("");
  const [scroll, setScroll] = useState(0);

  // 🔥 STATES
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* 📊 SCROLL PROGRESS */
  useEffect(() => {
    const handleScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / total) * 100;
      setScroll(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tags = ["All", "Love", "Destiny", "Healing", "Spiritual"];

  const filteredPosts = blogPosts
    .filter((post) =>
      activeTag === "All" ? true : post.category === activeTag
    )
    .filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );

  const trendingPosts = blogPosts.slice(0, 3);

  /* 🔥 FULLY UPGRADED SUBSCRIBE FUNCTION */
  const handleSubscribe = async () => {
    // Reset
    setError("");
    setIsSubscribed(false);

    // Prevent spam click
    if (loading) return;

    // Validation
    if (!email) {
      setError("Please enter your email");
      return;
    }

    const emailTrimmed = email.trim();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailTrimmed)) {
      setError("Enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      // 🌐 Backend call
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailTrimmed }),
      });

      const data = await response.json();

      // ❌ Handle backend errors
      if (!response.ok || !data.success) {
        setError(
          data?.message ||
          "Subscription failed. Try again."
        );
        setLoading(false);
        return;
      }

      // ✅ Success
      setIsSubscribed(true);
      setEmail("");

      // Auto hide success
      setTimeout(() => {
        setIsSubscribed(false);
      }, 4000);

    } catch (err: any) {
      setError(
        "Network error. Please check your connection."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative overflow-hidden text-white">

      {/* 📊 SCROLL BAR */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 z-50 transition-all"
        style={{ width: `${scroll}%` }}
      />

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-neutral-900 to-black" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full animate-pulse" />

      {/* ✨ HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 border border-white/10 rounded-full text-sm text-neutral-300 backdrop-blur-xl">
          <HiOutlineSparkles />
          Soulful Writing Space
        </div>

        <h1 className="mt-6 text-6xl md:text-8xl font-black tracking-tight">
          Echoes of <span className="text-neutral-500">Her Soul</span>
        </h1>

        <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
          A space where love, destiny, and unseen emotions are written before they unfold.
        </p>

        {/* SEARCH */}
        <div className="mt-8 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search reflections..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 outline-none backdrop-blur-xl focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </section>

      {/* 🌟 FEATURED BLOG */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="relative rounded-[2.5rem] overflow-hidden group border border-white/10">

          <Image
            src="/featured.jpg"
            alt="Words Written Before Destiny Arrived"
            fill
            className="object-cover opacity-40 group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

          <div className="relative p-12 md:p-16">
            <span className="flex items-center gap-2 text-sm text-neutral-300">
              <HiOutlineFire /> Featured Story
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
              Words Written Before Destiny Arrived
            </h2>

            <p className="mt-4 text-neutral-400 max-w-xl">
              A reflection of love that existed before meeting — written in time and sealed by destiny.
            </p>

            <Link
              href="/blog/featured"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
            >
              Read Story <HiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 🔥 TRENDING */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <HiOutlineFire /> Trending Stories
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {trendingPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition backdrop-blur-xl hover:scale-105">
                <h4 className="font-semibold">{post.title}</h4>
                <p className="text-sm text-neutral-400 mt-2">
                  {post.excerpt.slice(0, 80)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 🔍 FILTER */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="flex flex-wrap gap-3 justify-center">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full border transition ${
                activeTag === tag
                  ? "bg-white text-black"
                  : "border-white/10 hover:bg-white hover:text-black"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* 📝 POSTS */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredPosts.slice(0, visiblePosts).map((post) => (
            <article
              key={post.slug}
              className="group rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 hover:-translate-y-3 hover:shadow-2xl transition"
            >
              <div className="relative h-60">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />
              </div>

              <div className="p-6">
                <span className="text-xs text-neutral-400 flex gap-1">
                  <HiOutlineTag /> {post.category}
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  {post.title}
                </h3>

                <p className="mt-2 text-neutral-400 text-sm">
                  {post.excerpt}
                </p>

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

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 mt-5 font-semibold"
                >
                  Read More <HiOutlineArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {visiblePosts < filteredPosts.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisiblePosts((prev) => prev + 3)}
              className="px-6 py-3 border border-white/10 rounded-xl hover:bg-white hover:text-black transition"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {/* 💌 SUBSCRIBE */}
      <section className="max-w-4xl mx-auto px-6 pb-28 text-center">
        <div className="relative rounded-[2rem] border border-white/10 p-12 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/0">

          <HiOutlineEnvelope className="mx-auto text-5xl mb-4 opacity-80" />

          <h2 className="text-3xl font-bold">
            Stay Connected with My Words
          </h2>

          <p className="mt-3 text-neutral-400">
            Get reflections, emotions, and unseen stories directly in your inbox.
          </p>

          {isSubscribed && (
            <div className="mt-6 flex items-center justify-center gap-2 text-green-400 animate-fadeIn">
              <HiOutlineCheckCircle />
              Subscribed successfully ✨
            </div>
          )}

          <div className="mt-6 flex gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              onClick={handleSubscribe}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl font-semibold hover:scale-105 transition flex items-center gap-2"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>

          {error && (
            <p className="mt-3 text-red-400 text-sm">{error}</p>
          )}
        </div>
      </section>
    </main>
  );
}