"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import type { IconType } from "react-icons";

import {
  HiOutlineBookOpen,
  HiOutlineArrowUp,
  HiOutlineSparkles,
  HiOutlineNewspaper,
  HiOutlineHeart,
  HiOutlineGlobeAlt,
  HiOutlineMoon,
  HiOutlineStar,
  HiOutlineRocketLaunch,
  HiOutlineEnvelope,
  HiOutlineDocumentText,
  HiOutlineFilm,
  HiOutlineUsers,
  HiOutlineArchiveBox,
} from "react-icons/hi2";

import {
  FaInstagram,
  FaThreads,
  FaXTwitter,
  FaFacebook,
  FaYoutube,
  FaSpotify,
  FaMedium,
} from "react-icons/fa6";

/* ================= TYPES ================= */

type SocialItem = {
  icon: IconType;
  link: string;
};

type ExploreItem = {
  icon: IconType;
  title: string;
  desc: string;
  href: string;
};

type FeatureItem = {
  icon: IconType;
  title: string;
  desc: string;
};

type AppItem = {
  icon: IconType;
  title: string;
  desc: string;
  badge: string;
};

type StatItem = {
  icon: IconType;
  title: string;
  desc: string;
};

/* ================= DATA ================= */

const stats: StatItem[] = [
  {
    icon: HiOutlineHeart,
    title: "Soulful Stories",
    desc: "Emotion-first storytelling crafted deeply",
  },

  {
    icon: HiOutlineGlobeAlt,
    title: "Worldwide Readers",
    desc: "Connecting hearts across the world",
  },

  {
    icon: HiOutlineMoon,
    title: "Healing Emotions",
    desc: "Words created for peace and reflection",
  },

  {
    icon: HiOutlineStar,
    title: "Timeless Emotions",
    desc: "Meaningful stories and soulful reflections created for hearts that feel deeply.",
  },

];

const socials: SocialItem[] = [
  {
    icon: FaInstagram,
    link: "https://instagram.com/itsabhishekme",
  },

  {
    icon: FaThreads,
    link: "https://threads.net/@itsabhishekme",
  },

  {
    icon: FaXTwitter,
    link: "https://x.com/itsabhishekme",
  },

  {
    icon: FaFacebook,
    link: "https://facebook.com",
  },

  {
    icon: FaYoutube,
    link: "https://youtube.com",
  },

  {
    icon: FaSpotify,
    link:
      "https://open.spotify.com/show/41IpFA5SUvPrT8ALlHUnr4?si=c9c6190f7bbc4a38",
  },

  {
    icon: FaMedium,
    link: "https://medium.com/@itsabhishekme",
  },
];

const exploreItems: ExploreItem[] = [
  {
    icon: HiOutlineBookOpen,
    title: "The Human Archive",
    desc: "A living collection of humanity's stories, memories, reflections, lessons, turning points, and defining moments. Every story becomes a preserved piece of collective human history, documenting how ordinary lives create extraordinary meaning.",
    href: "/the-human-archive",
  },

  {
    icon: HiOutlineSparkles,
    title: "Before Her Name Existed",
    desc: "An exploration of destiny before arrival. A journey through intuition, timing, dreams, synchronicities, unanswered questions, and the invisible chapters that existed before a person became part of the story.",
    href: "/before-her-name-existed",
  },

  {
    icon: HiOutlineEnvelope,
    title: "Letters Never Sent",
    desc: "A collection of unspoken emotions, unfinished conversations, untold truths, and words that remained trapped between memory and silence. Letters written for healing, reflection, forgiveness, closure, and understanding.",
    href: "/letters-never-sent",
  },

  {
    icon: HiOutlineGlobeAlt,
    title: "Echoes of Destiny",
    desc: "Stories of synchronicity, divine timing, recurring patterns, meaningful coincidences, karmic encounters, and life's mysterious connections that quietly shape the path of every human journey.",
    href: "/echoes-of-destiny",
  },

  {
    icon: HiOutlineFilm,
    title: "Soulfire Chronicles Production",
    desc: "Soulfire Chronicles Production was founded on the belief that stories possess the power to transform lives. Through documentaries, films, interviews, and cinematic storytelling, we explore themes of destiny, spirituality, human connection, personal growth, and extraordinary experiences.",
    href: "/soulfire-chronicles-production",
  },

];

const features: FeatureItem[] = [
  {
    icon: HiOutlineDocumentText,
    title: "Human Stories",
    desc: "Authentic experiences from real lives. Stories of transformation, resilience, heartbreak, hope, identity, purpose, growth, and the countless moments that shape who we become.",
  },

  {
    icon: HiOutlineHeart,
    title: "Reflection & Healing",
    desc: "Thoughtful writing designed to encourage self-discovery, emotional healing, inner reflection, personal growth, forgiveness, acceptance, and deeper understanding of life's experiences.",
  },

  {
    icon: HiOutlineSparkles,
    title: "Destiny & Synchronicity",
    desc: "Exploring the invisible threads that connect people, moments, opportunities, and life events. A space dedicated to meaningful coincidences, spiritual insights, and the mystery of timing.",
  },

  {
    icon: HiOutlineFilm,
    title: "Documentary Storytelling",
    desc: "Stories presented as cinematic experiences. Every narrative is preserved like a documentary, capturing emotions, memories, context, and human truth across generations.",
  },

  {
    icon: HiOutlineArchiveBox,
    title: "Preserving Human Legacy",
    desc: "Building a timeless archive where experiences, wisdom, memories, and lessons can live beyond a single lifetime, creating a digital record of humanity's collective journey.",
  },

  {
    icon: HiOutlineUsers,
    title: "Shared Human Connection",
    desc: "Connecting readers through universal emotions and experiences. Every story reveals how individual lives are connected through common hopes, fears, dreams, and struggles.",
  },
];

const apps: AppItem[] = [
  {
    icon: HiOutlineArchiveBox,
    title: "Memory Archive",
    desc: "An ever-expanding archive dedicated to preserving personal stories, memories, reflections, lessons, milestones, and defining moments from lives around the world.",
    badge: "ARCHIVE",
  },

  {
    icon: HiOutlineUsers,
    title: "Story Community",
    desc: "A growing ecosystem of readers, writers, thinkers, dreamers, creators, and storytellers united by meaningful narratives and authentic human experiences.",
    badge: "COMMUNITY",
  },

  {
    icon: HiOutlineNewspaper,
    title: "Newsletter Universe",
    desc: "Thought-provoking newsletters exploring humanity, destiny, storytelling, emotional growth, identity, memory, purpose, relationships, and life's unanswered questions.",
    badge: "NEWSLETTERS",
  },

  {
    icon: HiOutlineSparkles,
    title: "Soul Narratives",
    desc: "Curated collections focused on intuition, destiny, dreams, synchronicities, personal transformation, and the deeper stories hidden beneath everyday life.",
    badge: "JOURNEYS",
  },

  {
    icon: HiOutlineGlobeAlt,
    title: "Global Voices",
    desc: "Perspectives, stories, reflections, and experiences gathered from different cultures, generations, and walks of life, creating a richer understanding of humanity.",
    badge: "VOICES",
  },

  {
    icon: HiOutlineBookOpen,
    title: "Living Library",
    desc: "A growing library of essays, letters, reflections, archives, documentaries, and storytelling projects designed to be revisited across time.",
    badge: "LIBRARY",
  },
];

/* ================= COMPONENT ================= */

export default function Footer() {
  const year = new Date().getFullYear();

  const [email, setEmail] =
    useState<string>("");

  const [loading, setLoading] =
    useState<boolean>(false);

  const [message, setMessage] =
    useState<string>("");

  /* ================= SUBMIT ================= */

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage(
        "Please enter your email address"
      );

      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await new Promise<void>((resolve) =>
        setTimeout(resolve, 1500)
      );

      setMessage(
        "✨ Welcome to the Vihaan Writes Universe"
      );

      setEmail("");
    } catch {
      setMessage(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_30%)]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-3xl" />

      {/* HERO */}

      <div className="container-main relative pb-24 pt-28 text-center">

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-7 py-3 backdrop-blur-xl">

            <HiOutlineSparkles className="text-purple-400" />

            <span className="text-sm uppercase tracking-[0.25em] text-neutral-300">
              Emotional Storytelling Universe
            </span>

          </div>
        </div>

        <h2 className="mx-auto mt-10 max-w-6xl text-5xl font-black leading-tight md:text-7xl">

          Stories Written

          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-white bg-clip-text text-transparent">
            {" "}
            Before Destiny{" "}
          </span>

          Arrived

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg">
          Vihaan Writes is a soulful digital sanctuary for
          dreamers, writers, emotional thinkers, lovers, and readers
          seeking timeless reflections, healing emotions, poetic
          storytelling, meaningful human connection, and artistic
          self-expression.
        </p>

        {/* STATS */}

        <div className="mt-16 grid gap-6 md:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:bg-white/[0.06]"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 shadow-2xl">
                    <Icon className="text-3xl text-white" />
                  </div>

                  <h4 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {item.desc}
                  </p>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* NEWSLETTER */}

      <div className="container-main pb-24">

        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.05] p-10 backdrop-blur-2xl md:p-16">

          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10" />

          <div className="relative z-10">

            <div className="flex justify-center">

              <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-purple-500/20 to-pink-500/20 shadow-2xl">

                <HiOutlineRocketLaunch className="text-5xl text-white" />

              </div>
            </div>

            <div className="mt-10 text-center">

              <h3 className="text-4xl font-black md:text-6xl">
                Join The Journey
              </h3>

              <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-neutral-400 md:text-lg">
                Receive soulful reflections, emotional stories,
                poetic writings, updates, healing words,
                upcoming books, and meaningful thoughts directly
                inside your inbox.
              </p>

            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-5"
            >

              <div className="relative w-full md:w-[450px]">

                <HiOutlineEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-neutral-500" />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="h-16 w-full rounded-2xl border border-white/10 bg-white/[0.05] pl-14 pr-6 text-white outline-none transition duration-300 focus:border-purple-500/40 focus:bg-white/[0.08]"
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="h-16 rounded-2xl bg-white px-10 font-black text-black transition duration-300 hover:scale-105 active:scale-95 disabled:opacity-60"
              >

                {loading
                  ? "Joining..."
                  : "Join Now"}

              </button>

            </form>

            {message && (
              <p className="mt-6 text-center text-neutral-300">
                {message}
              </p>
            )}

          </div>
        </div>
      </div>

      {/* MAIN GRID */}

      <div className="container-main grid gap-12 pb-24 md:grid-cols-4">

        {/* BRAND */}

        <div>

          <div className="flex items-center gap-4">

            <div className="relative h-20 w-20">

              <div className="absolute inset-0 rounded-[2rem] bg-purple-500/40 blur-xl" />

              <div className="relative h-20 w-20 overflow-hidden rounded-[2rem] bg-white shadow-2xl">

                <Image
                  src="/logo.png"
                  alt="Vihaan Writes Logo"
                  fill
                  priority
                  sizes="80px"
                  className="object-contain p-2"
                />

              </div>
            </div>

            <div>

              <h3 className="text-3xl font-black tracking-[0.25em]">
                VIHAAN
              </h3>

              <p className="text-xs tracking-[0.4em] text-neutral-500">
                WRITES
              </p>

            </div>
          </div>

          <p className="mt-8 max-w-sm leading-relaxed text-neutral-400">
            Vihaan Writes is a soulful digital sanctuary for
            emotional storytelling, dedicated to poetry, soulful reflections,
            timeless emotions, healing words, artistic expression,
            and meaningful human connection.
          </p>

          {/* SOCIALS */}

          <div className="mt-10 flex flex-wrap items-center gap-4">

            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] text-neutral-400 transition duration-500 hover:-translate-y-2 hover:text-white hover:shadow-[0_20px_50px_rgba(168,85,247,0.18)]"
                >

                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <Icon className="relative text-xl" />

                </a>
              );
            })}
          </div>
        </div>

        {/* EXPLORE */}

        <div>

          <h4 className="mb-8 text-2xl font-black">
            Explore
          </h4>

          <div className="space-y-5">

            {exploreItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 transition duration-500 hover:-translate-y-2 hover:bg-white/[0.06]"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 shadow-2xl">
                    <Icon className="text-3xl text-white" />
                  </div>

                  <div>

                    <h5 className="text-lg font-bold">
                      {item.title}
                    </h5>

                    <p className="mt-1 text-sm text-neutral-500">
                      {item.desc}
                    </p>

                  </div>

                </Link>
              );
            })}
          </div>
        </div>

        {/* FEATURES */}

        <div>

          <h4 className="mb-8 text-2xl font-black">
            Creative Universe
          </h4>

          <div className="space-y-5">

            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition duration-500 hover:-translate-y-2 hover:bg-white/[0.06]"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 shadow-2xl">

                    <Icon className="text-3xl text-white" />

                  </div>

                  <h5 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h5>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {item.desc}
                  </p>

                </div>
              );
            })}
          </div>
        </div>

        {/* APPS */}

        <div>

          <h4 className="mb-8 text-2xl font-black">
            The Living Archive
          </h4>

          <div className="space-y-5">

            {apps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition duration-500 hover:-translate-y-2 hover:bg-white/[0.06]"
                >

                  <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.25em] text-neutral-400">
                    {item.badge}
                  </div>

                  <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white text-black shadow-2xl">

                    <Icon className="text-4xl" />

                  </div>

                  <h5 className="mt-5 text-2xl font-black">
                    {item.title}
                  </h5>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {item.desc}
                  </p>

                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-black via-neutral-950 to-black">

        <div className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="container-main relative z-10 flex flex-col gap-12 py-12 md:flex-row md:items-center md:justify-between">

          {/* LEFT */}

          <div className="space-y-5 text-center md:text-left">

            <div>

              <h3 className="bg-gradient-to-r from-white via-cyan-200 to-indigo-400 bg-clip-text text-3xl font-extrabold tracking-wide text-transparent">
                Vihaan Writes
              </h3>

              <div className="mt-3 h-[2px] w-24 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 md:mx-0 mx-auto" />

              <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
                Stories that heal. Words that stay.
                Emotions that connect deeply forever.
              </p>

            </div>

            <div className="space-y-1">

              <p className="text-sm text-neutral-500">
                © {year} Vihaan Writes. All rights reserved.
              </p>

              <p className="text-xs tracking-wide text-neutral-600">
                Crafted with emotion, creativity, and soulful storytelling.
              </p>

            </div>
          </div>

          {/* RIGHT */}

          <div className="flex flex-col items-center gap-7 md:items-end">

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400">

              <Link
                href="/privacy-policy"
                className="transition duration-300 hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="transition duration-300 hover:text-white"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/contact"
                className="transition duration-300 hover:text-white"
              >
                Contact
              </Link>

            </div>

            {/* TOP */}

            <a
              href="#top"
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm text-neutral-300 backdrop-blur-md transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
            >

              Back To Top

              <HiOutlineArrowUp className="transition-transform duration-500 group-hover:-translate-y-1" />

            </a>
          </div>
        </div>

        {/* LAST */}

        <div className="border-t border-white/5 py-6">

          <p className="text-center text-[10px] uppercase tracking-[0.45em] text-neutral-600">
            Stories • Emotions • Poetry • Reflections • Healing • Love
          </p>

        </div>
      </div>
    </footer>
  );
}