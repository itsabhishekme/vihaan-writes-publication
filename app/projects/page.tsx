"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Globe,
  BookOpen,
  Heart,
  Clock3,
  Feather,
  Stars,
  Quote,
  ScrollText,
  Layers3,
  Mail,
} from "lucide-react";

const projects = [

  {
    title: "Before Her Name Existed",
    tagline:
      "A story written before the person it was written for entered my life.",
    description:
      "A documentary-style storytelling experience exploring destiny, longing, imagination, intuition, dreams, and the possibility of writing to someone before ever meeting them.",
    url: "https://before-her-name-existed.vercel.app/",
    image: "/images/before-her-name-existed-banner.jpg",
    year: "2026",
    tags: ["Destiny", "Intuition", "Longing"],
    stats: [
      { label: "Chapters", value: "∞" },
      { label: "Journey", value: "Soul" },
      { label: "Theme", value: "Destiny" },
    ],
  },

  {
    title: "The Human Archive",
    tagline:
      "Preserving the stories people never thought anyone would read.",
    description:
      "A living archive dedicated to memories, regrets, transformations, lessons, turning points, forgotten letters, unfinished conversations, and human experiences from around the world.",
    url: "https://thehumanarchive.vercel.app/",
    image: "/images/the-human-archive-banner.jpg",
    year: "2026",
    tags: ["Archive", "Memory", "Stories"],
    stats: [
      { label: "Stories", value: "100+" },
      { label: "Voices", value: "Global" },
      { label: "Growth", value: "24/7" },
    ],
  },

  {
    title: "Letters Never Sent",
    tagline: "For Every Feeling Left Unspoken",
    description:
      "A sanctuary for unfinished conversations, forgotten memories, personal reflections, quiet heartbreaks, untold stories, and letters that never found their destination. Every page exists for emotions that were felt deeply but never fully spoken.",
    url: "https://lettersneversent.vercel.app/",
    image: "/images/letters-never-sent-banner.jpg",
    year: "2026",
    tags: ["Letters", "Emotion", "Healing"],
    stats: [
      { label: "Letters", value: "∞" },
      { label: "Emotion", value: "Unspoken" },
      { label: "Purpose", value: "Healing" },
    ],
  },

  {
    title: "Echoes of Destiny",
    tagline:
      "Where memories linger and destiny whispers through every page.",
    description:
      "A place where memories linger, letters remain unsent, dreams refuse to fade, and destiny whispers through every page written from the heart.",
    url: "https://echoes-of-destiny.vercel.app/",
    image: "/images/echoes-of-destiny-banner.jpg",
    year: "2026",
    tags: ["Echoes", "Memories", "Destiny"],
    stats: [
      { label: "Dreams", value: "Endless" },
      { label: "Echoes", value: "Timeless" },
      { label: "Theme", value: "Destiny" },
    ],
  },

  {
    title: "The Alchemy of Becoming",
    tagline:
      "Transformation after the lessons have been learned.",
    description:
      "Every human life is shaped by experiences that leave a permanent mark. Moments of loss, love, faith, uncertainty, resilience, discovery, failure, forgiveness, and renewal become the unseen architects of identity. Some transformations happen in an instant, while others unfold quietly over years. A single conversation can redirect a life. A painful ending can become the beginning of a new purpose. A season of uncertainty can reveal strengths hidden beneath fear and doubt. The Alchemy of Becoming explores how ordinary people evolve into wiser, stronger, and more authentic versions of themselves through personal growth, healing, resilience, reinvention, self-discovery, and purpose.",
    url: "",
    image: "/images/The Alchemy of Becoming.png",
    year: "2026",
    tags: ["Transformation", "Growth", "Resilience"],
    stats: [
      { label: "Stories", value: "Inspiring" },
      { label: "Journey", value: "Lifelong" },
      { label: "Theme", value: "Becoming" }
    ],
  },

];

const features = [
  {
    icon: Heart,
    title: "Human Stories",
    text: "Real emotions, reflections, memories, and untold experiences.",
  },
  {
    icon: BookOpen,
    title: "Living Narratives",
    text: "Projects that continue evolving with every visitor and contribution.",
  },
  {
    icon: Globe,
    title: "Universal Themes",
    text: "Identity, love, memory, destiny, purpose, and human connection.",
  },
  {
    icon: Feather,
    title: "Creative Exploration",
    text: "Storytelling beyond traditional books and publishing formats.",
  },
];

const floatingStars = [
  { id: 1, left: "14%", top: "16%", delay: "0s" },
  { id: 2, left: "68%", top: "22%", delay: "0.2s" },
  { id: 3, left: "44%", top: "8%", delay: "0.35s" },
  { id: 4, left: "24%", top: "72%", delay: "0.5s" },
  { id: 5, left: "76%", top: "68%", delay: "0.7s" },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />

        <div className="absolute top-0 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[900px] w-[900px] rounded-full bg-orange-500/10 blur-[200px]" />

        <div className="absolute top-1/3 left-0 h-[600px] w-[600px] rounded-full bg-yellow-500/5 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl mb-10"
          >
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-xs uppercase tracking-[0.35em] text-zinc-400">
              Vihaan Writes Originals
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl xl:text-9xl font-black leading-none mb-8"
          >
            Stories
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-300 bg-clip-text text-transparent">
              Beyond Books
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed"
          >
            Storytelling projects designed to preserve memories, explore
            destiny, document humanity, and create immersive experiences that
            extend beyond traditional publishing.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20 max-w-5xl mx-auto">
            {[
              ["04", "Creative Universes"],
              ["250+", "Pages Written"],
              ["Global", "Readers Reached"],
              ["∞", "Stories Ahead"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6"
              >
                <div className="text-4xl font-black text-white">{value}</div>
                <div className="text-zinc-500 text-sm mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
              >
                <item.icon className="h-8 w-8 text-amber-400 mb-5" />
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
         FIVE PILLARS CONNECTED ECOSYSTEM
        ========================== */}
      <section className="relative overflow-hidden bg-black py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-rose-500/10 blur-[140px]" />
          <div className="absolute right-1/4 bottom-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto mb-24 max-w-5xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              <span className="text-xs uppercase tracking-[0.4em] text-white/60">
                The Alchemy of Becoming
              </span>
            </div>

            <h2 className="mt-8 text-5xl font-extralight tracking-tight text-white md:text-7xl">
              The Five
              <span className="block bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                Pillars
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-white/60">
              The Alchemy of Becoming is a living archive of human transformation.
              Through stories of resilience, healing, purpose, and personal growth,
              it explores how individuals navigate change and emerge renewed. Each
              narrative offers insight into the enduring process of becoming—one of
              humanity&apos;s most profound and universal journeys.
            </p>
          </div>

          {/* ================================
             Soulfire Central Nexus
           ================================ */}
          <div className="relative mb-40 hidden xl:flex items-center justify-center overflow-visible py-20">

            {/* Cosmic Background Glow */}
            <div className="absolute h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-[150px]" />
            <div className="absolute h-[450px] w-[450px] rounded-full bg-rose-500/10 blur-[120px]" />

            {/* Energy Beam */}
            <div className="absolute top-1/2 h-px w-[90%] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="absolute top-1/2 h-[2px] w-[75%] -translate-y-1/2 bg-gradient-to-r from-rose-500/40 via-purple-400/40 to-violet-500/40 blur-sm" />

            {/* Orbit Ring 1 */}
            <div className="absolute h-[380px] w-[380px] rounded-full border border-white/10 animate-[spin_60s_linear_infinite]" />

            {/* Orbit Ring 2 */}
            <div className="absolute h-[300px] w-[300px] rounded-full border border-violet-400/10 animate-[spin_40s_linear_infinite_reverse]" />

            {/* Orbit Ring 3 */}
            <div className="absolute h-[240px] w-[240px] rounded-full border border-rose-400/10 animate-[spin_25s_linear_infinite]" />

            {/* Orbiting Nodes */}
            <div className="absolute h-[380px] w-[380px] animate-[spin_60s_linear_infinite]">
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_30px_#a855f7]" />
            </div>

            <div className="absolute h-[300px] w-[300px] animate-[spin_40s_linear_infinite_reverse]">
              <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-rose-400 shadow-[0_0_25px_#fb7185]" />
            </div>

            <div className="absolute h-[240px] w-[240px] animate-[spin_25s_linear_infinite]">
              <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]" />
            </div>

            {/* Floating Stars */}
            {floatingStars.map((star) => (
              <div
                key={star.id}
                className="absolute h-1 w-1 rounded-full bg-white/60 animate-pulse"
                style={{
                  left: star.left,
                  top: star.top,
                  animationDelay: star.delay,
                }}
              />
            ))}

            {/* Main Core */}
            <div className="group relative z-20">

              {/* Outer Halo */}
              <div className="absolute inset-[-40px] rounded-full bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-violet-500/20 blur-3xl opacity-70 animate-pulse" />

              {/* Animated Border */}
              <div className="absolute inset-[-12px] rounded-full bg-gradient-to-r from-rose-500 via-violet-500 to-cyan-400 p-[1px] animate-[spin_18s_linear_infinite]">

                <div className="h-full w-full rounded-full bg-black" />
              </div>

              {/* Glass Sphere */}
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-3xl shadow-[0_0_100px_rgba(168,85,247,0.15)] transition-all duration-700 group-hover:scale-110">

                {/* Reflection */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent" />

                {/* Inner Circle */}
                <div className="absolute inset-8 rounded-full border border-white/10" />

                {/* Content */}
                <div className="relative text-center">

                  <h2 className="bg-gradient-to-r from-white via-violet-200 to-rose-200 bg-clip-text text-2xl font-extralight tracking-wide text-transparent">
                    The Alchemy
                  </h2>

                  <h2 className="bg-gradient-to-r from-rose-200 via-white to-violet-200 bg-clip-text text-2xl font-extralight tracking-wide text-transparent">
                    of Becoming
                  </h2>


                  <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                </div>

                {/* Hover Energy */}
                <div className="absolute inset-0 rounded-full opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100 bg-gradient-to-r from-rose-500/20 via-violet-500/20 to-cyan-500/20" />
              </div>
            </div>

            {/* Side Energy Points */}
            <div className="absolute left-[12%] flex flex-col items-center">
              <div className="h-4 w-4 rounded-full bg-rose-400 shadow-[0_0_30px_#fb7185]" />
              <div className="mt-3 h-16 w-px bg-gradient-to-b from-rose-400/50 to-transparent" />
            </div>

            <div className="absolute right-[12%] flex flex-col items-center">
              <div className="h-4 w-4 rounded-full bg-violet-400 shadow-[0_0_30px_#a855f7]" />
              <div className="mt-3 h-16 w-px bg-gradient-to-b from-violet-400/50 to-transparent" />
            </div>

          </div>

          {/* Pillars */}
          <div className="relative">
            {/* Connection Wires Desktop */}
            <div className="absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 xl:block">
              <div className="mx-auto h-px w-[85%] bg-gradient-to-r from-rose-400/30 via-white/15 to-violet-400/30" />
            </div>

            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">

              {/* Pillar 1 */}
              <div className="group relative overflow-hidden rounded-[32px] border border-rose-500/20 bg-gradient-to-b from-rose-500/10 to-transparent p-8 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:border-rose-400/40">

                {/* Wire Connector */}
                <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-rose-400/40 to-white/20 xl:block" />

                <div className="absolute right-6 top-6 text-7xl font-thin text-white/10">
                  01
                </div>

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/15">
                  <Heart className="h-8 w-8 text-rose-300" />
                </div>

                <h3 className="mb-4 text-3xl font-light text-white">
                  Before Her Name Existed
                </h3>

                <p className="leading-relaxed text-white/60">
                  A cinematic exploration of faith before the meeting. Dreams,
                  longing, signs, reflections, and stories written for a future
                  spouse whose presence was felt long before her name was known.
                </p>

                <div className="mt-8 text-sm uppercase tracking-[0.3em] text-rose-300">
                  Future • Faith • Love
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="group relative overflow-hidden rounded-[32px] border border-amber-500/20 bg-gradient-to-b from-amber-500/10 to-transparent p-8 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:border-amber-400/40">

                {/* Wire Connector */}
                <div className="absolute -left-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-white/20 to-amber-400/40 xl:block" />
                <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-amber-400/40 to-white/20 xl:block" />

                <div className="absolute right-6 top-6 text-7xl font-thin text-white/10">
                  02
                </div>

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/15">
                  <BookOpen className="h-8 w-8 text-amber-300" />
                </div>

                <h3 className="mb-4 text-3xl font-light text-white">
                  The Human Archive
                </h3>

                <p className="leading-relaxed text-white/60">
                  Preserving stories, memories, interviews, observations,
                  experiences, and fragments of humanity through documentary
                  storytelling for future generations.
                </p>

                <div className="mt-8 text-sm uppercase tracking-[0.3em] text-amber-300">
                  Stories • Memory • Humanity
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="group relative overflow-hidden rounded-[32px] border border-sky-500/20 bg-gradient-to-b from-sky-500/10 to-transparent p-8 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:border-sky-400/40">

                {/* Wire Connector */}
                <div className="absolute -left-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-white/20 to-sky-400/40 xl:block" />
                <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-sky-400/40 to-white/20 xl:block" />

                <div className="absolute right-6 top-6 text-7xl font-thin text-white/10">
                  03
                </div>

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/15">
                  <Mail className="h-8 w-8 text-sky-300" />
                </div>

                <h3 className="mb-4 text-3xl font-light text-white">
                  Letters Never Sent
                </h3>

                <p className="leading-relaxed text-white/60">
                  Unspoken words, unfinished conversations, personal healing,
                  emotional reflections, and messages that became powerful
                  stories despite never reaching their destination.
                </p>

                <div className="mt-8 text-sm uppercase tracking-[0.3em] text-sky-300">
                  Emotion • Reflection • Healing
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="group relative overflow-hidden rounded-[32px] border border-violet-500/20 bg-gradient-to-b from-violet-500/10 to-transparent p-8 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:border-violet-400/40">

                {/* Wire Connector */}
                <div className="absolute -left-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-white/20 to-violet-400/40 xl:block" />

                <div className="absolute right-6 top-6 text-7xl font-thin text-white/10">
                  04
                </div>

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/15">
                  <Sparkles className="h-8 w-8 text-violet-300" />
                </div>

                <h3 className="mb-4 text-3xl font-light text-white">
                  Echoes of Destiny
                </h3>

                <p className="leading-relaxed text-white/60">
                  Exploring synchronicity, karma, spiritual connections,
                  extraordinary experiences, purpose, and the invisible patterns
                  quietly shaping every human journey.
                </p>

                <div className="mt-8 text-sm uppercase tracking-[0.3em] text-violet-300">
                  Karma • Purpose • Destiny
                </div>
              </div>

            </div>
          </div>

          {/* Connection Statement */}
          <div className="mx-auto mt-28 max-w-5xl text-center">
            <div className="relative mb-12">
              <div className="mx-auto h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black">
                <div className="absolute inset-1 animate-pulse rounded-full bg-white/40" />
              </div>
            </div>

            <p className="text-2xl font-light leading-relaxed text-white/70">
              Each pillar stands independently,
              <span className="text-white"> yet remains connected </span>
              through a shared mission:
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-white/50">
              To create meaningful <span className="text-white">Soulfire Chronicles</span> documentaries, films, interviews, and
              cinematic experiences that inspire reflection, awaken curiosity,
              strengthen human connection, and reveal the extraordinary stories
              hidden within ordinary lives.
            </p>

            <div className="mt-12 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              <span className="text-sm uppercase tracking-[0.4em] text-white/60">
                One Mission • Four Pillars • Infinite Stories
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
             SOULFIRE NETWORK HUB
      ========================= */}

      <div className="relative mb-40 hidden xl:block">

        {/* Network Container */}

        <div className="relative mx-auto h-[650px] max-w-6xl">


          {/* =====================================
               Soulfire Central Nexus Core
            ===================================== */}
          <div className="absolute left-1/2 top-1/2 z-30 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2">

            {/* Cosmic Glow */}
            <div className="absolute inset-[-80px] rounded-full bg-violet-500/10 blur-[120px]" />
            <div className="absolute inset-[-60px] rounded-full bg-rose-500/10 blur-[100px]" />

            {/* Rotating Orbit Ring */}
            <div className="absolute inset-[-35px] rounded-full border border-violet-400/10 animate-[spin_30s_linear_infinite]" />

            {/* Secondary Ring */}
            <div className="absolute inset-[-20px] rounded-full border border-rose-400/10 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Outer Halo */}
            <div className="absolute inset-[-10px] rounded-full bg-gradient-to-r from-violet-500/20 via-purple-500/10 to-rose-500/20 blur-xl animate-pulse" />

            {/* Animated Gradient Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-rose-500 to-cyan-400 p-[1px]">

              <div className="h-full w-full rounded-full bg-black/80 backdrop-blur-3xl" />
            </div>

            {/* Glass Core */}
            <div className="absolute inset-0 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-3xl shadow-[0_0_80px_rgba(168,85,247,0.15)]">

              {/* Reflection */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent" />

              {/* Inner Ring */}
              <div className="absolute inset-6 rounded-full border border-white/10" />

              {/* Energy Ring */}
              <div className="absolute inset-10 rounded-full border border-violet-400/10" />

              {/* Floating Particles */}
              <div className="absolute left-10 top-12 h-2 w-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_20px_#a855f7]" />

              <div className="absolute right-12 top-20 h-2 w-2 rounded-full bg-rose-400 animate-pulse shadow-[0_0_20px_#fb7185]" />

              <div className="absolute bottom-16 left-16 h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_20px_#22d3ee]" />

              <div className="absolute bottom-10 right-14 h-1.5 w-1.5 rounded-full bg-white animate-ping" />

              {/* Content */}
              <div className="relative flex h-full flex-col items-center justify-center text-center">

                {/* Title */}
                <h3 className="bg-gradient-to-r from-white via-violet-200 to-rose-200 bg-clip-text text-4xl font-extralight tracking-wide text-transparent">
                  The Alchemy
                </h3>

                <h3 className="bg-gradient-to-r from-rose-200 via-white to-violet-200 bg-clip-text text-4xl font-extralight tracking-wide text-transparent">
                  of Becoming
                </h3>

              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-full opacity-40 blur-2xl bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-rose-500/20 animate-pulse" />
            </div>

            {/* Orbiting Energy Nodes */}
            <div className="absolute inset-[-35px] animate-[spin_25s_linear_infinite]">
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_30px_#a855f7]" />
            </div>

            <div className="absolute inset-[-20px] animate-[spin_18s_linear_infinite_reverse]">
              <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-rose-400 shadow-[0_0_25px_#fb7185]" />
            </div>

            <div className="absolute inset-[-50px] animate-[spin_40s_linear_infinite]">
              <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]" />
            </div>

            {/* Outer Energy Waves */}
            <div className="absolute inset-[-55px] rounded-full border border-white/5 animate-ping" />
            <div className="absolute inset-[-75px] rounded-full border border-violet-400/5 animate-pulse" />

          </div>

          {/* Animated Rings */}
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

          {/* Pillar Node 1 */}
          <div className="absolute left-10 top-10 z-20">

            <div className="absolute left-full top-1/2 h-px w-[240px] bg-gradient-to-r from-rose-400/50 to-white/20" />

            <div className="h-6 w-6 rounded-full bg-rose-400 shadow-[0_0_40px_rgba(244,63,94,0.7)]" />

            <div className="mt-6 max-w-xs">
              <div className="text-sm uppercase tracking-[0.35em] text-rose-300">
                Pillar One
              </div>

              <h4 className="mt-3 text-2xl font-light text-white">
                Before Her Name Existed
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Stories of faith, anticipation, destiny, and love before
                the meeting ever arrives.
              </p>
            </div>
          </div>

          {/* Pillar Node 2 */}
          <div className="absolute right-10 top-10 z-20">

            <div className="absolute right-full top-1/2 h-px w-[240px] bg-gradient-to-l from-amber-400/50 to-white/20" />

            <div className="ml-auto h-6 w-6 rounded-full bg-amber-400 shadow-[0_0_40px_rgba(251,191,36,0.7)]" />

            <div className="mt-6 max-w-xs text-right">
              <div className="text-sm uppercase tracking-[0.35em] text-amber-300">
                Pillar Two
              </div>

              <h4 className="mt-3 text-2xl font-light text-white">
                The Human Archive
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Preserving humanity&apos;s memories, experiences, interviews, and collective wisdom.
              </p>

            </div>
          </div>

          {/* Pillar Node 3 */}
          <div className="absolute bottom-10 left-10 z-20">

            <div className="absolute left-full top-1/2 h-px w-[240px] bg-gradient-to-r from-sky-400/50 to-white/20" />

            <div className="h-6 w-6 rounded-full bg-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.7)]" />

            <div className="mt-6 max-w-xs">
              <div className="text-sm uppercase tracking-[0.35em] text-sky-300">
                Pillar Three
              </div>

              <h4 className="mt-3 text-2xl font-light text-white">
                Letters Never Sent
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Emotional journeys, healing, reflection, and unspoken
                conversations.
              </p>
            </div>
          </div>

          {/* Pillar Node 4 */}
          <div className="absolute bottom-10 right-10 z-20">

            <div className="absolute right-full top-1/2 h-px w-[240px] bg-gradient-to-l from-violet-400/50 to-white/20" />

            <div className="ml-auto h-6 w-6 rounded-full bg-violet-400 shadow-[0_0_40px_rgba(168,85,247,0.7)]" />

            <div className="mt-6 max-w-xs text-right">
              <div className="text-sm uppercase tracking-[0.35em] text-violet-300">
                Pillar Four
              </div>

              <h4 className="mt-3 text-2xl font-light text-white">
                Echoes of Destiny
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Exploring synchronicity, spirituality, purpose, karma,
                and extraordinary experiences.
              </p>
            </div>
          </div>

          {/* Mission Labels Around Center */}
          <div className="absolute left-1/2 top-[18%] -translate-x-1/2 text-xs uppercase tracking-[0.35em] text-white/30">
            Documentaries
          </div>

          <div className="absolute right-[18%] top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.35em] text-white/30">
            Films
          </div>

          <div className="absolute left-[18%] top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.35em] text-white/30">
            Interviews
          </div>

          <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.35em] text-white/30">
            Storytelling
          </div>
        </div>
      </div>

      {/* ================================
    Premium Project Showcase
================================ */}
      <section className="relative px-6 pb-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-[48px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            >
              {/* Glow Background */}
              <div className="absolute inset-0 opacity-0 transition duration-1000 group-hover:opacity-100">
                <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-violet-500/15 blur-[120px]" />
                <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-rose-500/15 blur-[120px]" />
              </div>

              {/* Banner */}
              <div className="relative h-[420px] overflow-hidden md:h-[700px]">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover transition duration-[2500ms] ease-out group-hover:scale-110"
                />

                {/* Luxury Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_35%)]" />

                {/* Project Number */}
                <div className="absolute right-10 top-10">
                  <span className="text-[120px] font-black text-white/5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute left-10 top-10">
                  <div className="rounded-full border border-white/10 bg-white/10 px-6 py-3 backdrop-blur-xl">
                    <span className="text-sm tracking-[0.25em] text-amber-200 uppercase">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Featured Badge */}
                <div className="absolute left-10 top-32">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 backdrop-blur-xl">
                    <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-xs uppercase tracking-[0.25em] text-amber-200">
                      Featured Story
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-12 left-12 right-12 z-20">
                  <div className="mb-6 flex flex-wrap gap-3">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/70 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="mb-6 max-w-5xl bg-gradient-to-r from-white via-violet-100 to-amber-100 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-8xl">
                    {project.title}
                  </h2>

                  <p className="max-w-4xl text-lg leading-relaxed text-white/80 md:text-2xl">
                    {project.tagline}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="mt-8 h-px w-40 bg-gradient-to-r from-violet-400 via-white to-transparent" />
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-rose-500/10" />
              </div>

              {/* Animated Border */}
              <div className="pointer-events-none absolute inset-0 rounded-[48px] border border-white/5" />

              {/* Bottom Information Bar */}
              <div className="grid gap-8 border-t border-white/10 bg-black/30 p-8 backdrop-blur-xl md:grid-cols-3">

                <div>
                  <p className="mb-2 text-xs uppercase tracking-widest text-white/40">
                    Category
                  </p>
                  <h4 className="text-lg font-semibold text-white">
                    Digital Preservation
                  </h4>
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-widest text-white/40">
                    Vision
                  </p>
                  <h4 className="text-lg font-semibold text-white">
                    Preserving Human Stories
                  </h4>
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-widest text-white/40">
                    Status
                  </p>
                  <h4 className="text-lg font-semibold text-white">
                    Ongoing
                  </h4>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-14">
                <div className="grid lg:grid-cols-[1.5fr_0.9fr] gap-12">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-6 text-amber-300">
                      <Quote className="w-5 h-5" />
                      <span className="text-sm uppercase tracking-[0.2em]">
                        Project Vision
                      </span>
                    </div>

                    <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                      {project.description}
                    </p>

                    <div className="grid md:grid-cols-3 gap-5 mb-10">
                      {project.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                        >
                          <div className="text-3xl font-black">
                            {stat.value}
                          </div>
                          <div className="text-zinc-500 text-sm mt-2">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-300 to-orange-300 px-8 py-4 text-black font-bold transition hover:scale-105"
                    >
                      The Archive of Echoes
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="space-y-5">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                      <ScrollText className="w-6 h-6 text-amber-400 mb-4" />
                      <h3 className="font-bold mb-3">Purpose</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Building meaningful digital experiences around stories,
                        memory, identity, destiny, and the human condition.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                      <Layers3 className="w-6 h-6 text-amber-400 mb-4" />
                      <h3 className="font-bold mb-3">Format</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        A blend of archives, reflections, essays,
                        documentary-style narratives, and immersive storytelling.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                      <Clock3 className="w-6 h-6 text-amber-400 mb-4" />
                      <h3 className="font-bold mb-3">Future Growth</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Continuously expanding through new stories, new voices,
                        and new storytelling experiments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
          }
        </div >
      </section >

      {/* Quote Section */}
      < section className="px-6 pb-28" >
        <div className="max-w-6xl mx-auto rounded-[40px] border border-white/10 bg-white/[0.03] p-12 md:p-20 text-center backdrop-blur-xl">
          <Stars className="w-10 h-10 mx-auto text-amber-400 mb-8" />

          <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">
            Every Story
            <br />
            Deserves A Place To Exist
          </h2>

          <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed">
            Some stories become books. Some become archives. Some become
            letters, memories, documentaries, and digital worlds. Every project
            here exists to preserve what would otherwise disappear.
          </p>
        </div>
      </section >


      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/video/Before Her Name Existed.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        {/* Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <div className="max-w-5xl text-center">
            <p className="mb-4 text-xs md:text-sm tracking-[0.5em] uppercase text-zinc-400">
              Documentary Trailer • 2026
            </p>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none">
              Before Her Name Existed
            </h1>

            <div className="mx-auto my-8 h-px w-32 bg-gradient-to-r from-transparent via-white/70 to-transparent" />

            <p className="mx-auto max-w-3xl text-lg md:text-2xl text-zinc-300 leading-relaxed font-light">
              A story written before the person it was written for entered my life.
            </p>

            <div className="mt-12 flex flex-col items-center gap-6">
              <span className="rounded-full border border-white/20 px-6 py-2 text-xs tracking-[0.3em] uppercase text-zinc-400">
                Coming 2026
              </span>

              <button
                onClick={() => {
                  const video = document.querySelector("video");
                  if (video) {
                    video.muted = false;
                    video.play();
                  }
                }}
                className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
                  ▶
                </div>
                <span className="tracking-widest uppercase text-sm">
                  Watch Trailer
                </span>
              </button>
            </div>

            <div className="mt-20 text-zinc-500 text-xs tracking-[0.4em] uppercase">
              A Documentary About Fate, Timing & Unwritten Love
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      < section className="px-6 pb-32" >
        <div className="max-w-6xl mx-auto rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-12 md:p-24 text-center backdrop-blur-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-200">
              More Originals Coming Soon
            </span>
          </div>

          <h2 className="text-5xl md:text-8xl font-black mb-8">
            The Journey
            <br />
            Continues
          </h2>

          <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed mb-12">
            These projects are only the beginning of a larger storytelling
            vision spanning books, archives, documentaries, essays,
            reflections, and immersive digital experiences.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-300 to-orange-300 px-10 py-5 text-black font-bold hover:scale-105 transition"
          >
            Connect With Vihaan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section >
    </main >
  );
}