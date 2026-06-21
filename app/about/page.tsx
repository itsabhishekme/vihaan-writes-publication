"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineArrowRight,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineLightBulb,
  HiOutlineGlobeAlt,
  HiOutlineStar,
  HiOutlineBookOpen,
  HiOutlineUserCircle,
  HiOutlineMoon,
  HiOutlineFire,
  HiOutlinePencilSquare,
  HiOutlineChatBubbleBottomCenterText,
} from "react-icons/hi2";

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  const philosophies = [
    {
      icon: HiOutlineHeart,
      title: "Emotional Storytelling",
      text: "Every line is designed to leave a silent emotional imprint on the reader.",
    },
    {
      icon: HiOutlineSparkles,
      title: "Soulful Writing",
      text: "Stories inspired by karmic energy, destiny, intuition, and emotional memory.",
    },
    {
      icon: HiOutlineGlobeAlt,
      title: "Universal Emotions",
      text: "Love, silence, longing, healing, and connection beyond language and geography.",
    },
  ];

  const journey = [
    {
      title: "Awakening",
      text: "The beginning of self-awareness through emotions, silence, and observation.",
    },
    {
      title: "Expression",
      text: "Turning deep feelings into words that emotionally resonate with readers.",
    },
    {
      title: "Connection",
      text: "Creating meaningful relationships between stories and human experiences.",
    },
  ];

  const quotes = [
    "Some souls are recognized before they are met.",
    "Not every love story begins in this lifetime.",
    "Silence often carries the deepest emotions.",
    "Words can heal what conversations cannot.",
    "The soul remembers what the mind forgets.",
    "Certain connections transcend time and logic.",
  ];

  return (
    <>
      {/* SEO */}
      <head>
        <title>
          About Vihaan | Indian Author, Emotional & Spiritual Writer
        </title>

        <meta
          name="description"
          content="Discover Vihaan — the creative identity of Abhishek Shrivastava. Explore emotional storytelling, spiritual writing, soulful books, karmic themes, and deep human connection."
        />

        <meta
          name="keywords"
          content="Vihaan, Abhishek Shrivastava, Indian author, spiritual writer, emotional storytelling, karmic writing, soulful books, author website"
        />

        <meta name="author" content="Vihaan" />

        <meta property="og:title" content="About Vihaan" />

        <meta
          property="og:description"
          content="Explore the emotional and spiritual writing journey of Vihaan."
        />

        <meta property="og:type" content="website" />

        <meta property="og:image" content="/author.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
      </head>

      <main className="relative overflow-hidden bg-black text-white">
        {/* BACKGROUND EFFECTS */}
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-500/10 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[180px]" />

        {/* GRID TEXTURE */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

        {/* HERO SECTION */}
        <section className="container mx-auto px-6 py-24 md:py-36 lg:px-12">
          <div className="grid items-center gap-20 md:grid-cols-2">
            {/* LEFT */}
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-neutral-300 backdrop-blur-xl">
                <HiOutlineSparkles />
                About The Author
              </span>

              <h1 className="mt-8 text-6xl font-black leading-none tracking-tight md:text-8xl lg:text-9xl">
                Vihaan
              </h1>

              <div className="mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400" />

              <p className="mt-10 max-w-2xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
                Vihaan is more than a name. It is a creative identity rooted in
                emotion, silence, spirituality, and human connection.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
                The pen name of <span className="font-semibold text-white">Abhishek Shrivastava</span>,
                an Indian author whose writing explores karmic bonds, emotional
                memory, soulful relationships, and the invisible energies that
                shape human experiences.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
                Every story is designed to make readers feel understood,
                emotionally connected, and spiritually awakened.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-5">
                <Link
                  href="/book"
                  className="group inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105"
                >
                  Explore Books
                  <HiOutlineArrowRight className="transition group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/blog"
                  className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10"
                >
                  Read Articles
                </Link>
              </div>

              {/* READ MORE */}
              <button
                onClick={() => setOpen(!open)}
                className="mt-12 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-neutral-300 transition hover:text-white"
              >
                {open ? "Read Less" : "Read More"}
                {open ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
              </button>

              <div
                className={`${open
                    ? "max-h-[3000px] opacity-100"
                    : "max-h-0 opacity-0"
                  } overflow-hidden transition-all duration-700`}
              >
                <div className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
                  <p className="leading-relaxed text-neutral-300">
                    Born in Bihar, India, Vihaan writes from a place of deep
                    emotional awareness. His writing combines modern emotional
                    storytelling with spirituality, introspection, and inner
                    transformation.
                  </p>

                  <p className="leading-relaxed text-neutral-300">
                    His words are inspired by silence, human emotions,
                    destiny, soul recognition, and karmic relationships that
                    transcend logic and time.
                  </p>

                  <p className="leading-relaxed text-neutral-300">
                    Through books, blogs, and reflective writing, Vihaan creates
                    experiences that feel deeply personal and emotionally real.
                  </p>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                      <HiOutlineMoon className="text-3xl text-purple-400" />
                      <h3 className="mt-4 text-xl font-bold">
                        Spiritual Connection
                      </h3>
                      <p className="mt-3 text-neutral-400">
                        Soul connections, karmic bonds, emotional memory, and
                        deeper human consciousness.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                      <HiOutlineFire className="text-3xl text-orange-400" />
                      <h3 className="mt-4 text-xl font-bold">
                        Emotional Intensity
                      </h3>
                      <p className="mt-3 text-neutral-400">
                        Honest emotions expressed through poetic storytelling
                        and reflective writing.
                      </p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-white pl-6 text-xl italic text-white">
                    “Some emotions are not meant to be explained. Only felt.”
                  </blockquote>

                  <p className="text-lg text-white">— Vihaan</p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl">
                <Image
                  src="/author.jpg"
                  alt="Vihaan Author"
                  width={700}
                  height={900}
                  priority
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="container mx-auto px-6 py-10 lg:px-12">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["2+", "Published Books"],
              ["1000+", "Readers Inspired"],
              ["∞", "Emotions Expressed"],
              ["24/7", "Creative Energy"],
            ].map(([number, label], index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl"
              >
                <h3 className="text-5xl font-black text-white">{number}</h3>
                <p className="mt-3 text-neutral-400">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* JOURNEY */}
        <section className="container mx-auto px-6 py-28 lg:px-12">
          <div className="text-center">
            <p className="uppercase tracking-[0.4em] text-neutral-500">
              The Journey
            </p>

            <h2 className="mt-6 text-5xl font-black md:text-6xl">
              From Feeling To Writing
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-neutral-400">
              Writing did not begin as a profession. It began as a need to
              express emotions that words could barely hold.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {journey.map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-white/30"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-2xl font-black">
                  {i + 1}
                </div>

                <h3 className="mt-8 text-3xl font-bold">{item.title}</h3>

                <p className="mt-5 leading-relaxed text-neutral-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* IDENTITY */}
        <section className="container mx-auto px-6 py-28 text-center lg:px-12">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
            <HiOutlineUserCircle className="text-6xl text-white" />
          </div>

          <h2 className="mt-10 text-5xl font-black md:text-6xl">
            The Identity
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-neutral-400">
            Vihaan is not just a writer. It is an emotional presence existing
            between memory, silence, thought, and feeling.
          </p>
        </section>

        {/* WRITING PURPOSE */}
        <section className="container mx-auto px-6 py-28 lg:px-12">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-12 backdrop-blur-2xl md:p-20">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div>
                <HiOutlineLightBulb className="text-6xl text-yellow-400" />

                <h2 className="mt-8 text-5xl font-black leading-tight">
                  Writing With Purpose
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-neutral-400">
                  Writing is not only about storytelling. It is about emotional
                  connection, inner healing, and awakening forgotten emotions.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                  Every sentence is written with intention — to make readers
                  pause, reflect, feel, and reconnect with themselves.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Emotional healing through words",
                  "Spiritual awareness and soul connection",
                  "Meaningful storytelling with depth",
                  "Human emotions beyond surface reality",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-5"
                  >
                    <div className="h-3 w-3 rounded-full bg-pink-400" />
                    <p className="text-lg text-neutral-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* THEMES */}
        <section className="container mx-auto px-6 py-28 lg:px-12">
          <div className="text-center">
            <p className="uppercase tracking-[0.4em] text-neutral-500">
              Core Themes
            </p>

            <h2 className="mt-6 text-5xl font-black md:text-6xl">
              What Defines The Writing
            </h2>
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {philosophies.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl transition duration-500 hover:-translate-y-4 hover:border-white/20"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
                    <Icon className="text-3xl text-white" />
                  </div>

                  <h3 className="mt-8 text-3xl font-bold">{item.title}</h3>

                  <p className="mt-5 leading-relaxed text-neutral-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* QUOTES */}
        <section className="container mx-auto px-6 py-28 lg:px-12">
          <div className="text-center">
            <p className="uppercase tracking-[0.4em] text-neutral-500">
              Quotes
            </p>

            <h2 className="mt-6 text-5xl font-black md:text-6xl">
              Words That Stay
            </h2>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {quotes.map((quote, i) => (
              <div
                key={i}
                className="rounded-[30px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl transition duration-500 hover:scale-[1.03]"
              >
                <HiOutlineChatBubbleBottomCenterText className="text-4xl text-pink-400" />

                <p className="mt-8 text-2xl italic leading-relaxed text-neutral-200">
                  “{quote}”
                </p>

                <div className="mt-8 h-px w-full bg-white/10" />

                <p className="mt-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
                  — Vihaan
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKS SECTION */}
        <section className="relative overflow-hidden py-32">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
          </div>

          <div className="container relative z-10 mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
                <HiOutlineBookOpen className="text-2xl text-yellow-400" />
                <span className="text-sm font-medium tracking-wider text-neutral-300 uppercase">
                  Spiritual Literature & Consciousness Research
                </span>
              </div>

              <h2 className="mt-10 bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-7xl">
                The Work
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-neutral-400 md:text-xl">
                Discover a collection of transformative writings exploring
                spirituality, soul recognition, divine timing, emotional
                intelligence, destiny, higher consciousness, human connection,
                awakening, and the mysteries that shape our lives.
              </p>

              <div className="mt-10 flex justify-center gap-2 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <HiOutlineStar
                    key={i}
                    className="text-3xl transition hover:scale-110"
                  />
                ))}
              </div>

              <p className="mt-4 text-sm tracking-widest text-neutral-500 uppercase">
                Highly Appreciated By Readers Worldwide
              </p>
            </div>

            {/* Stats */}
            <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
              {[
                {
                  value: "10K+",
                  label: "Readers",
                },
                {
                  value: "50+",
                  label: "Countries Reached",
                },
                {
                  value: "4.9★",
                  label: "Average Rating",
                },
                {
                  value: "100%",
                  label: "Authentic Writing",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="text-4xl font-black text-white">
                    {item.value}
                  </div>

                  <div className="mt-2 text-sm text-neutral-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Topics */}
            <div className="mx-auto mt-24 max-w-6xl">
              <h3 className="text-center text-3xl font-bold text-white">
                Themes Explored
              </h3>

              <div className="mt-12 flex flex-wrap justify-center gap-4">
                {[
                  "Soul Recognition",
                  "Spiritual Awakening",
                  "Twin Flames",
                  "Human Consciousness",
                  "Divine Timing",
                  "Destiny",
                  "Inner Transformation",
                  "Emotional Intelligence",
                  "Relationships",
                  "Self Discovery",
                  "Purpose",
                  "Life Journey",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-neutral-300 transition hover:border-white/20 hover:bg-white/10"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="mx-auto mt-24 max-w-4xl rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:p-16">
              <p className="text-center text-2xl font-light leading-relaxed text-neutral-200 md:text-3xl">
                “Every book is an invitation to look beyond the surface of life
                and reconnect with the deeper truth that already exists within.”
              </p>
            </div>

            {/* CTA */}
            <div className="mt-24 text-center">
              <Link
                href="/book"
                className="group inline-flex items-center gap-4 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
              >
                Explore The Books

                <HiOutlineArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-2" />
              </Link>

              <p className="mt-6 text-neutral-500">
                Begin your journey into spirituality, consciousness,
                self-discovery, and meaningful human connection.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="container mx-auto px-6 pb-32 lg:px-12">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white text-black">
            <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-pink-300 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-300 blur-[120px]" />

            <div className="relative z-10 p-14 text-center md:p-24">
              <HiOutlinePencilSquare className="mx-auto text-6xl" />

              <h2 className="mt-10 text-5xl font-black leading-tight md:text-7xl">
                Experience The Writing
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-neutral-700">
                Dive into stories and reflections that explore emotion,
                spirituality, connection, and the invisible language of the
                soul.
              </p>

              <Link
                href="/book"
                className="group mt-12 inline-flex items-center gap-3 rounded-2xl bg-black px-10 py-5 text-lg font-semibold text-white transition duration-300 hover:scale-105"
              >
                Start Reading
                <HiOutlineArrowRight className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
