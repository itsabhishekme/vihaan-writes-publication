import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineSparkles,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineBolt,
  HiOutlineEye,
  HiOutlineArrowRight,
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineStar,
} from "react-icons/hi2";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Echoes of Destiny | Vihaan Writes",
  description:
    "Exploring synchronicity, dreams, intuition, destiny, life patterns, and the invisible forces shaping human journeys.",
};

const reflections = [
  {
    title: "The Coincidence That Changed Everything",
    image: "/echoes/coincidence.jpg",
    category: "Synchronicity",
    excerpt: "Discover how meaningful coincidences shape our lives in unexpected ways.",
    preview: "Sometimes the universe speaks in whispers, through events that seem too perfectly timed to be accidents.",
    author: "Vihaan",
  },
  {
    title: "Why Certain Dreams Refuse To Leave",
    image: "/echoes/dreams.jpg",
    category: "Dreams",
    excerpt: "Exploring the power of recurring dreams and their hidden messages.",
    preview: "Dreams carry wisdom that our waking minds often struggle to comprehend.",
    author: "Vihaan",
  },
  {
    title: "The Universe Repeats The Message",
    image: "/echoes/patterns.jpg",
    category: "Patterns",
    excerpt: "Understanding the patterns that emerge when we pay close attention.",
    preview: "Patterns are the universe's way of teaching us what we need to learn.",
    author: "Vihaan",
  },
  {
    title: "Recognizing Invisible Threads",
    image: "/echoes/destiny.jpg",
    category: "Destiny",
    excerpt: "The unseen connections that bind our experiences together.",
    preview: "Destiny is not written in stone; it's woven through the choices we make and the connections we honor.",
    author: "Vihaan",
  },
  {
    title: "The Language Of Intuition",
    image: "/echoes/intuition.jpg",
    category: "Intuition",
    excerpt: "Learning to trust the inner knowing that guides us forward.",
    preview: "Intuition speaks louder than logic when we finally decide to listen.",
    author: "Vihaan",
  },
  {
    title: "Life's Hidden Architecture",
    image: "/echoes/reflection.jpg",
    category: "Reflection",
    excerpt: "The underlying structure that connects all moments of our existence.",
    preview: "Behind every reflection lies a deeper truth waiting to be discovered.",
    author: "Vihaan",
  },
];

const pillars = [
  {
    icon: HiOutlineSparkles,
    title: "Synchronicity",
    description:
      "Meaningful coincidences that appear unexpectedly and seem impossible to ignore.",
  },
  {
    icon: HiOutlineMoon,
    title: "Dreams",
    description:
      "Recurring symbols, emotions, and stories emerging through the subconscious.",
  },
  {
    icon: HiOutlineEye,
    title: "Intuition",
    description:
      "The silent inner knowing that often arrives before logic catches up.",
  },
  {
    icon: HiOutlineClock,
    title: "Divine Timing",
    description:
      "Events unfolding according to rhythms we rarely understand.",
  },
];

const timeline = [
  {
    title: "The Sign",
    description:
      "A small event appears and seems insignificant at first.",
  },
  {
    title: "The Repetition",
    description:
      "The same message returns through different forms and experiences.",
  },
  {
    title: "The Recognition",
    description:
      "Patterns emerge and reveal a deeper layer of meaning.",
  },
  {
    title: "The Transformation",
    description:
      "Awareness changes perspective and reshapes the journey.",
  },
];

export default function EchoesOfDestinyPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[250px]" />
        <div className="absolute bottom-0 left-0 h-[800px] w-[800px] rounded-full bg-purple-600/10 blur-[220px]" />
        <div className="absolute top-20 right-0 h-[700px] w-[700px] rounded-full bg-blue-600/10 blur-[220px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">

        <div className="absolute inset-0">
          <Image
            src="/echoes/hero.jpg"
            alt="Echoes of Destiny"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="max-w-5xl">

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-8">
              <HiOutlineSparkles className="text-yellow-400" />
              <span className="uppercase tracking-[0.35em] text-xs text-zinc-400">
                Vihaan Writes Project
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              Echoes of
              <span className="block bg-gradient-to-r from-yellow-200 via-white to-purple-300 bg-clip-text text-transparent">
                Destiny
              </span>
            </h1>

            <p className="mt-10 text-xl text-zinc-300 max-w-3xl leading-relaxed">
              Exploring synchronicity, intuition, dreams,
              destiny, spiritual experiences, and the invisible
              patterns quietly shaping human lives.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="https://echoes-of-destiny.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-semibold transition-all duration-300 hover:scale-105"
              >
                Explore Stories
                <ExternalLink className="w-4 h-4" />
              </Link>

              <Link
                href="/newsletters"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5"
              >
                Join Newsletter
              </Link>
            </div>

          </div>

        </div>

      </section>

      {/* FEATURE BANNER */}
      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10">

            <div className="relative h-[750px]">

              <Image
                src="/echoes/banner.jpg"
                alt=""
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-12 left-12 max-w-4xl">

                <p className="uppercase tracking-[0.4em] text-zinc-300 mb-4">
                  Life Speaks Through Patterns
                </p>

                <h2 className="text-5xl md:text-7xl font-black">
                  Some Coincidences Arrive Too Perfectly To Ignore
                </h2>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="relative py-40 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        {/* Ambient Glow Effects */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-violet-500/10 rounded-full blur-[220px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[220px]" />
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.02] rounded-full blur-[250px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Label */}
              <span className="uppercase tracking-[0.5em] text-violet-300 text-sm font-semibold">
                About The Journey
              </span>

              {/* Heading */}
              <h2 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05]">

                Life Speaks
                <span className="block bg-gradient-to-r from-violet-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Through Patterns
                </span>

              </h2>

              {/* Divider */}
              <div className="w-32 h-[2px] bg-gradient-to-r from-violet-300 via-cyan-300 to-blue-300 mt-10 mb-10" />

              {/* Description */}
              <p className="text-zinc-400 text-xl leading-relaxed mb-8">
                Some moments feel ordinary at first.
                A brief conversation.
                A forgotten decision.
                A random encounter on an ordinary day.
              </p>

              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                Yet years later those same moments reveal themselves
                as hidden crossroads. Looking back, we begin to see
                connections that were invisible while living them.
              </p>

              <p className="text-zinc-500 text-lg leading-relaxed mb-12">
                A recurring dream.
                A repeated number.
                A place that keeps appearing.
                An intuition that refuses to leave.
                The echoes of life often arrive long before
                we understand their meaning.
              </p>

              {/* Feature Cards */}
              <div className="grid sm:grid-cols-2 gap-5">

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">

                  <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-2xl mb-5">
                    ✨
                  </div>

                  <h3 className="font-bold text-xl mb-3">
                    Synchronicity
                  </h3>

                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Meaningful coincidences that seem too precise
                    to be random.
                  </p>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-2xl mb-5">
                    🔄
                  </div>

                  <h3 className="font-bold text-xl mb-3">
                    Repetition
                  </h3>

                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Patterns that continue appearing until
                    their lesson is understood.
                  </p>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">

                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl mb-5">
                    🌙
                  </div>

                  <h3 className="font-bold text-xl mb-3">
                    Intuition
                  </h3>

                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Quiet guidance that often knows the path
                    before logic can explain it.
                  </p>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">

                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-2xl mb-5">
                    🧭
                  </div>

                  <h3 className="font-bold text-xl mb-3">
                    Direction
                  </h3>

                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Discovering purpose through seemingly
                    unrelated events.
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative">

              {/* Main Image */}
              <div className="relative h-[750px] rounded-[42px] overflow-hidden border border-white/10">

                <Image
                  src="/echoes/feature.jpg"
                  alt="Life Patterns"
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              </div>

              {/* Floating Quote */}
              <div className="absolute -left-12 bottom-16 max-w-sm rounded-[32px] border border-white/10 bg-black/70 backdrop-blur-2xl p-8">

                <div className="text-6xl text-violet-300 leading-none mb-4">

                </div>

                <p className="text-zinc-300 leading-relaxed">
                  The patterns of our lives are often visible
                  only when viewed from a distance.
                </p>

                <div className="mt-6 pt-5 border-t border-white/10">

                  <p className="font-semibold">
                    Echoes Project
                  </p>

                  <p className="text-sm text-zinc-500">
                    Reflections & Meaning
                  </p>

                </div>

              </div>

              {/* Floating Stats */}
              <div className="absolute top-10 right-10 rounded-[28px] border border-white/10 bg-black/70 backdrop-blur-2xl p-6">

                <h3 className="text-4xl font-black text-cyan-300">
                  1000+
                </h3>

                <p className="text-zinc-500 text-sm mt-2">
                  Stories Analyzed
                </p>

              </div>

              {/* Floating Badge */}
              <div className="absolute top-1/2 -right-10 rounded-full border border-violet-500/20 bg-violet-500/10 backdrop-blur-xl px-6 py-4">

                <span className="uppercase tracking-[0.3em] text-xs text-violet-300">
                  Since 2025
                </span>

              </div>

            </div>

          </div>

          {/* Bottom Values */}
          <div className="mt-40">

            <div className="text-center mb-20">

              <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                Core Themes
              </span>

              <h3 className="text-5xl font-black mt-6">
                Understanding
                <span className="block text-cyan-300">
                  The Invisible Threads
                </span>
              </h3>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">

                <div className="text-5xl mb-6">
                  🔍
                </div>

                <h4 className="text-2xl font-bold mb-5">
                  Observation
                </h4>

                <p className="text-zinc-500 leading-relaxed">
                  Learning to notice recurring symbols,
                  moments and experiences.
                </p>

              </div>

              <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">

                <div className="text-5xl mb-6">
                  📖
                </div>

                <h4 className="text-2xl font-bold mb-5">
                  Interpretation
                </h4>

                <p className="text-zinc-500 leading-relaxed">
                  Discovering meaning hidden within
                  repeated events and memories.
                </p>

              </div>

              <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">

                <div className="text-5xl mb-6">
                  🌌
                </div>

                <h4 className="text-2xl font-bold mb-5">
                  Connection
                </h4>

                <p className="text-zinc-500 leading-relaxed">
                  Understanding how seemingly unrelated
                  moments shape a larger story.
                </p>

              </div>

            </div>

          </div>

          {/* Bottom Quote */}
          <div className="max-w-5xl mx-auto text-center mt-40">

            <div className="text-8xl text-violet-300 mb-8">

            </div>

            <h3 className="text-4xl md:text-5xl font-light leading-relaxed text-zinc-300">
              Sometimes the answers we seek are not hidden.
              They have been repeating themselves all along,
              patiently waiting to be noticed.
            </h3>

            <div className="w-32 h-[2px] bg-gradient-to-r from-violet-300 via-cyan-300 to-blue-300 mx-auto mt-12" />

            <p className="mt-8 uppercase tracking-[0.4em] text-sm text-zinc-500">
              Echoes Of Meaning
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-24 border-y border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-6xl font-black text-yellow-300">100+</h3>
              <p className="text-zinc-500 mt-3">Reflections</p>
            </div>

            <div>
              <h3 className="text-6xl font-black text-purple-300">50+</h3>
              <p className="text-zinc-500 mt-3">Stories</p>
            </div>

            <div>
              <h3 className="text-6xl font-black text-blue-300">∞</h3>
              <p className="text-zinc-500 mt-3">Possibilities</p>
            </div>

            <div>
              <h3 className="text-6xl font-black">1</h3>
              <p className="text-zinc-500 mt-3">Journey</p>
            </div>

          </div>

        </div>

      </section>

      {/* PILLARS */}
      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <h2 className="text-6xl font-black">
              Exploring The Invisible
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                >
                  <Icon className="text-5xl text-yellow-300 mb-6" />

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* TIMELINE */}
      <section className="relative py-40 overflow-hidden border-y border-white/10">

        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/5 rounded-full blur-[250px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <div className="max-w-5xl mx-auto text-center mb-32">

            <span className="uppercase tracking-[0.5em] text-emerald-300 text-sm font-semibold">
              Human Journey
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight">
              Journey Of
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Meaning
              </span>
            </h2>

            <p className="mt-8 text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
              Every meaningful life is shaped by moments of discovery,
              struggle, reflection, growth and purpose. These milestones
              tell the story of how ordinary experiences become extraordinary lessons.
            </p>

          </div>

          {/* Timeline Wrapper */}
          <div className="relative">

            {/* Center Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <div className="space-y-24">

              {timeline.map((item, index) => (

                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                    }`}
                >

                  {/* Card Side */}
                  <div className="w-full lg:w-1/2">

                    <div
                      className={`group relative rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-12 transition-all duration-700 hover:-translate-y-3 hover:border-emerald-500/30 ${index % 2 === 0
                        ? "lg:mr-20"
                        : "lg:ml-20"
                        }`}
                    >

                      {/* Hover Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-emerald-500/5 to-cyan-500/5" />
                      </div>

                      {/* Timeline Number */}
                      <div className="flex items-center gap-4 mb-8">

                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300 font-black text-xl">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div>
                          <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                            Chapter
                          </p>

                          <p className="text-emerald-300 font-semibold">
                            Journey Stage
                          </p>
                        </div>

                      </div>

                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-black mb-6 group-hover:text-emerald-300 transition-colors duration-500">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        {item.description}
                      </p>

                      {/* Feature Grid */}
                      <div className="grid sm:grid-cols-2 gap-4 mb-8">

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                          <h4 className="font-semibold mb-2">
                            Key Lesson
                          </h4>

                          <p className="text-sm text-zinc-500 leading-relaxed">
                            Important insights gained through
                            experience, reflection and growth.
                          </p>

                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                          <h4 className="font-semibold mb-2">
                            Impact
                          </h4>

                          <p className="text-sm text-zinc-500 leading-relaxed">
                            Lasting influence on future choices,
                            beliefs and personal development.
                          </p>

                        </div>

                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-3">

                        <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm">
                          Growth
                        </span>

                        <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
                          Reflection
                        </span>

                        <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm">
                          Purpose
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20">

                    <div className="relative">

                      <div className="w-10 h-10 rounded-full bg-emerald-400 border-[6px] border-black" />

                      <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20" />

                    </div>

                  </div>

                  {/* Empty Side */}
                  <div className="hidden lg:block w-1/2" />

                </div>

              ))}

            </div>

          </div>

          {/* Statistics */}
          <div className="mt-40">

            <div className="grid md:grid-cols-4 gap-8">

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
                <h3 className="text-5xl font-black text-emerald-300">
                  25+
                </h3>
                <p className="text-zinc-500 mt-3">
                  Life Chapters
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
                <h3 className="text-5xl font-black text-cyan-300">
                  500+
                </h3>
                <p className="text-zinc-500 mt-3">
                  Reflections
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
                <h3 className="text-5xl font-black text-teal-300">
                  100+
                </h3>
                <p className="text-zinc-500 mt-3">
                  Lessons Shared
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
                <h3 className="text-5xl font-black text-emerald-300">
                  Infinite
                </h3>
                <p className="text-zinc-500 mt-3">
                  Possibilities
                </p>
              </div>

            </div>

          </div>

          {/* Closing Quote */}
          <div className="max-w-5xl mx-auto text-center mt-40">

            <div className="text-8xl text-emerald-300 mb-8">

            </div>

            <h3 className="text-4xl md:text-5xl font-light leading-relaxed text-zinc-300">
              Meaning is not found in a single moment.
              It is discovered through countless experiences,
              connections and lessons gathered throughout life.
            </h3>

            <div className="w-32 h-[2px] bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300 mx-auto mt-12" />

            <p className="mt-8 text-zinc-500 uppercase tracking-[0.4em] text-sm">
              Journey Of Meaning
            </p>

          </div>

        </div>

      </section>

      {/* REFLECTIONS */}
      <section className="relative py-40 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        {/* Ambient Glow Effects */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-yellow-500/10 rounded-full blur-[220px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[220px]" />
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-yellow-500/5 rounded-full blur-[280px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="max-w-5xl mx-auto text-center mb-32">

            <span className="uppercase tracking-[0.5em] text-yellow-300 text-sm font-semibold">
              Reflections
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight">
              Echoes &
              <span className="block bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 bg-clip-text text-transparent">
                Reflections
              </span>
            </h2>

            <p className="mt-8 text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
              Some thoughts linger long after the moment has passed.
              Reflections help us understand the meaning hidden
              inside experiences, memories, coincidences and
              the quiet lessons life leaves behind.
            </p>

          </div>

          {/* Featured Reflection */}
          <div className="relative mb-32 overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.03]">

            <div className="grid lg:grid-cols-2">

              <div className="relative min-h-[550px]">

                <Image
                  src="/reflections/featured-reflection.jpg"
                  alt="Featured Reflection"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent" />

              </div>

              <div className="p-12 md:p-16 flex flex-col justify-center">

                <span className="uppercase tracking-[0.3em] text-xs text-yellow-300 mb-6">
                  Featured Reflection
                </span>

                <h3 className="text-4xl md:text-5xl font-black mb-8">
                  The Meaning Hidden In Ordinary Days
                </h3>

                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  Sometimes the most significant moments
                  disguise themselves as routine experiences.
                  Only later do we recognize their impact.
                </p>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 mb-8">

                  <div className="text-5xl text-yellow-300 mb-3">
                    
                  </div>

                  <p className="text-zinc-300 italic leading-relaxed">
                    Reflection begins where certainty ends.
                  </p>

                </div>

                <button className="inline-flex items-center gap-3 text-yellow-300 font-medium">
                  Read Featured Reflection
                  <HiOutlineArrowRight />
                </button>

              </div>

            </div>

          </div>

          {/* Reflections Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {reflections.map((story, index) => (

              <article
                key={index}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-700 hover:-translate-y-4 hover:border-yellow-500/30"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-amber-500/5" />
                </div>

                {/* Image */}
                <div className="relative h-80 overflow-hidden">

                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute top-6 left-6">

                    <span className="px-4 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl uppercase tracking-[0.2em] text-xs text-yellow-300">
                      {story.category}
                    </span>

                  </div>

                </div>

                {/* Content */}
                <div className="p-8">

                  <div className="flex items-center gap-4 text-sm text-zinc-500 mb-5">

                    <span className="flex items-center gap-2">
                      <HiOutlineClock className="w-4 h-4" />
                      Reading Time
                    </span>

                  </div>

                  <h3 className="text-3xl font-black mb-5 leading-snug group-hover:text-yellow-300 transition-colors">
                    {story.title}
                  </h3>

                  <p className="text-zinc-500 leading-relaxed mb-8">
                    {story.excerpt}
                  </p>

                  {/* Reflection Preview */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-8">

                    <div className="text-3xl text-yellow-300 mb-3">
                      
                    </div>

                    <p className="text-zinc-400 italic text-sm leading-relaxed">
                      {story.preview}
                    </p>

                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">

                    <div>

                      <p className="font-medium">
                        {story.author}
                      </p>

                      <p className="text-sm text-zinc-500">
                        Reflection Author
                      </p>

                    </div>

                    <button className="inline-flex items-center gap-2 text-yellow-300">

                      Read Reflection

                      <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />

                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

          {/* Reflection Principles */}
          <div className="mt-40">

            <div className="text-center mb-20">

              <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                Core Themes
              </span>

              <h3 className="text-5xl font-black mt-6">
                What Reflection
                <span className="block text-yellow-300">
                  Reveals
                </span>
              </h3>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">

                <div className="text-5xl mb-6">
                  🌙
                </div>

                <h4 className="text-2xl font-bold mb-5">
                  Awareness
                </h4>

                <p className="text-zinc-500 leading-relaxed">
                  Reflection helps reveal patterns,
                  emotions and truths hidden beneath
                  daily experience.
                </p>

              </div>

              <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">

                <div className="text-5xl mb-6">
                  📖
                </div>

                <h4 className="text-2xl font-bold mb-5">
                  Understanding
                </h4>

                <p className="text-zinc-500 leading-relaxed">
                  Looking back allows us to understand
                  the meaning behind our choices
                  and experiences.
                </p>

              </div>

              <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">

                <div className="text-5xl mb-6">
                  ✨
                </div>

                <h4 className="text-2xl font-bold mb-5">
                  Growth
                </h4>

                <p className="text-zinc-500 leading-relaxed">
                  Every reflection becomes an opportunity
                  for deeper wisdom and personal growth.
                </p>

              </div>

            </div>

          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mt-32">

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center">
              <h3 className="text-5xl font-black text-yellow-300">
                500+
              </h3>
              <p className="text-zinc-500 mt-3">
                Reflections
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center">
              <h3 className="text-5xl font-black text-amber-300">
                120+
              </h3>
              <p className="text-zinc-500 mt-3">
                Topics
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center">
              <h3 className="text-5xl font-black text-orange-300">
                50K+
              </h3>
              <p className="text-zinc-500 mt-3">
                Readers
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center">
              <h3 className="text-5xl font-black text-yellow-300">
                Endless
              </h3>
              <p className="text-zinc-500 mt-3">
                Insights
              </p>
            </div>

          </div>

          {/* Closing Quote */}
          <div className="max-w-5xl mx-auto text-center mt-40">

            <div className="text-8xl text-yellow-300 mb-8">
              
            </div>

            <h3 className="text-4xl md:text-5xl font-light leading-relaxed text-zinc-300">
              Reflection transforms experience into wisdom.
              Without reflection, moments simply pass.
              With reflection, they become understanding.
            </h3>

            <div className="w-32 h-[2px] bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 mx-auto mt-12" />

            <p className="mt-8 uppercase tracking-[0.4em] text-sm text-zinc-500">
              Echoes & Reflections
            </p>

          </div>

        </div>

      </section>

      {/* SYMBOL GRID */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineMoon className="mx-auto text-6xl text-purple-300" />
              <h3 className="mt-5 text-2xl font-bold">Dreams</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineSun className="mx-auto text-6xl text-yellow-300" />
              <h3 className="mt-5 text-2xl font-bold">Awareness</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineBolt className="mx-auto text-6xl text-blue-300" />
              <h3 className="mt-5 text-2xl font-bold">Signs</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineEye className="mx-auto text-6xl text-green-300" />
              <h3 className="mt-5 text-2xl font-bold">Intuition</h3>
            </div>

          </div>

        </div>

      </section>

      {/* QUOTE */}
      <section className="py-40">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <HiOutlineStar className="mx-auto text-7xl text-yellow-300 mb-10" />

          <blockquote className="text-5xl md:text-7xl font-black leading-tight">
            “Some coincidences arrive
            <span className="block mt-4">
              too perfectly to ignore.”
            </span>
          </blockquote>

          <p className="uppercase tracking-[0.4em] text-zinc-500 mt-10">
            Echoes Of Destiny
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-32">

        <div className="max-w-6xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10">

            <Image
              src="/echoes/cta.jpg"
              alt=""
              fill
              className="object-cover opacity-20"
            />

            <div className="relative z-10 p-20 text-center">

              <HiOutlineBookOpen className="mx-auto text-7xl text-yellow-300 mb-8" />

              <h2 className="text-6xl font-black mb-8">
                Follow The Echoes
              </h2>

              <p className="max-w-3xl mx-auto text-xl text-zinc-300">
                Explore reflections, synchronicities,
                dreams, intuition and invisible patterns
                shaping human life.
              </p>

              <div className="flex justify-center gap-5 mt-12 flex-wrap">

                <Link
                  href="/newsletters"
                  className="px-8 py-4 rounded-2xl bg-white text-black font-semibold"
                >
                  Subscribe
                </Link>

                <Link
                  href="/blog"
                  className="px-8 py-4 rounded-2xl border border-white/10"
                >
                  Explore Articles
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}