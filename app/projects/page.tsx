"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Archive,
  Heart,
  Sparkles,
  Clock3,
  Feather,
  Quote,
  Stars,
  ScrollText,
  Compass,
} from "lucide-react";

const projects = [
  {
    title: "The Human Archive",
    tagline:
      "Preserving the stories people never thought anyone would read.",
    description:
      "A living archive of memories, regrets, lessons, turning points, transformations, forgotten letters, and human experiences from around the world.",
    url: "https://the-human-archive-beta.vercel.app/",
    icon: Archive,
    year: "2026",
  },
  {
    title: "Before Her Name Existed",
    tagline:
      "A story written before the person it was written for entered my life.",
    description:
      "A documentary-style storytelling project exploring destiny, longing, imagination, and writing to someone before ever meeting them.",
    url: "https://before-her-name-existed.vercel.app/",
    icon: Heart,
    year: "2026",
  },
];

const pillars = [
  {
    title: "Memory",
    description:
      "Preserving moments that time attempts to erase.",
    icon: Archive,
  },
  {
    title: "Humanity",
    description:
      "Capturing experiences that connect people across generations.",
    icon: Heart,
  },
  {
    title: "Destiny",
    description:
      "Exploring the invisible threads that shape our lives.",
    icon: Compass,
  },
  {
    title: "Storytelling",
    description:
      "Transforming ordinary experiences into lasting narratives.",
    icon: Feather,
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND */}

      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-black" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-amber-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-orange-500/10 blur-[160px]" />

        <div className="absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* HERO */}

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Effects */}

          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" />

            ```
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full bg-amber-500/10 blur-[220px]" />

            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full bg-orange-500/10 blur-[180px]" />

            <div className="absolute left-0 top-1/3 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[150px]" />

          </div>

          {/* Grid Overlay */}

          <div
            className="
      absolute
      inset-0
      opacity-[0.03]
      [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
      [background-size:80px_80px]
    "
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center max-w-7xl mx-auto px-6"

          >

            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
    inline-flex
    items-center
    gap-3
    px-6
    py-3
    rounded-full
    border
    border-white/10
    bg-white/[0.03]
    backdrop-blur-xl
    mb-10
  "
            >
              <Stars className="w-4 h-4 text-amber-400" />

              <span className="text-zinc-300 tracking-wide">
                Vihaan Writes Originals
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
    text-6xl
    md:text-8xl
    xl:text-[11rem]
    font-black
    tracking-tight
    leading-[0.82]
    mb-10
  "
            >
              Stories
              <br />

              <span className="text-amber-300">
                Beyond Books
              </span>
            </motion.h1>

            {/* Subtitle */}

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
              }}
              className="
    max-w-4xl
    mx-auto
    text-xl
    md:text-2xl
    text-zinc-400
    leading-relaxed
    mb-14
  "
            >
              Vihaan Writes is more than a book,
              blog, or website. It is a growing
              universe of long-form storytelling
              projects dedicated to memory,
              destiny, human experiences, and the
              stories that continue long after the
              final page is turned.
            </motion.p>

            {/* Stats */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
              }}
              className="
    grid
    grid-cols-2
    md:grid-cols-4
    gap-6
    max-w-5xl
    mx-auto
    mb-16
  "
            >
              {[
                {
                  number: "02",
                  label: "Flagship Projects",
                },
                {
                  number: "01",
                  label: "Published Book",
                },
                {
                  number: "∞",
                  label: "Stories Ahead",
                },
                {
                  number: "2026",
                  label: "Current Vision",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-6
      "
                >
                  <div className="text-4xl font-black text-amber-300 mb-2">
                    {item.number}
                  </div>

                  <div className="text-zinc-500 text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
              }}
              className="
    flex
    flex-col
    sm:flex-row
    justify-center
    gap-5
  "
            >
              <Link
                href="https://the-human-archive-beta.vercel.app/"
                target="_blank"
                className="
      inline-flex
      items-center
      gap-3
      px-8
      py-4
      rounded-2xl
      bg-amber-400
      text-black
      font-semibold
      hover:scale-105
      transition-all
    "
              >
                Explore Projects
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/contact"
                className="
      inline-flex
      items-center
      gap-3
      px-8
      py-4
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      hover:border-amber-400/20
      transition-all
    "
              >
                Connect With Vihaan
              </Link>
            </motion.div>

            {/* Bottom Text */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
              }}
              className="mt-20"
            >
              <p className="text-zinc-600 tracking-[0.3em] uppercase text-sm">
                The Human Archive • Before Her Name Existed
              </p>
            </motion.div>

          </motion.div>

        </section>

        {/* FEATURED PROJECTS */}
        <section className="relative py-40 overflow-hidden">

          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[180px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-24">

              <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] mb-8">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="uppercase tracking-[0.4em] text-xs text-zinc-400">
                  Featured Projects
                </span>
              </span>

              <h2 className="text-6xl md:text-8xl font-black leading-none mb-8">
                Storytelling
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200">
                  Universes
                </span>
              </h2>

              <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed">
                Every project is a living archive of human experiences,
                memories, emotions, and untold narratives.
              </p>
            </div>

            {/* Projects */}
            <div className="space-y-14">

              {projects.map((project, index) => {
                const Icon = project.icon;

                return (
                  <motion.div
                    key={project.title}
                    initial={{
                      opacity: 0,
                      y: 60,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.15,
                    }}
                    whileHover={{
                      y: -12,
                    }}
                    className="group relative"
                  >
                    <div
                      className="
                absolute
                inset-0
                rounded-[40px]
                bg-gradient-to-r
                from-amber-500/20
                via-orange-500/10
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-700
                blur-xl
              "
                    />

                    <div
                      className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
              "
                    >

                      {/* Floating Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />

                      {/* Top Line */}
                      <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full transition-all duration-700" />

                      <div className="relative z-10 p-10 md:p-16">

                        <div className="grid lg:grid-cols-[140px_1fr] gap-10">

                          {/* Left Timeline */}
                          <div>

                            <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                              <Icon className="w-12 h-12 text-amber-400" />
                            </div>

                            <span className="text-zinc-500 text-sm tracking-[0.25em] uppercase">
                              {project.year}
                            </span>

                            <div className="mt-8 h-32 w-px bg-gradient-to-b from-amber-400 to-transparent" />
                          </div>

                          {/* Right Content */}
                          <div>

                            <div className="flex flex-wrap gap-3 mb-8">

                              <span className="px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-sm">
                                Human Stories
                              </span>

                              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm">
                                Documentary
                              </span>

                              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm">
                                Archive
                              </span>

                            </div>

                            <h3
                              className="
                        text-5xl
                        md:text-7xl
                        font-black
                        mb-8
                        leading-none
                        group-hover:text-amber-300
                        transition-colors
                      "
                            >
                              {project.title}
                            </h3>

                            <p className="text-amber-300 text-2xl leading-relaxed mb-8">
                              {project.tagline}
                            </p>

                            <p className="text-zinc-400 text-lg leading-loose max-w-4xl mb-10">
                              {project.description}
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 mb-12">

                              <div>
                                <div className="text-3xl font-black text-white mb-2">
                                  100+
                                </div>
                                <div className="text-zinc-500 text-sm">
                                  Stories
                                </div>
                              </div>

                              <div>
                                <div className="text-3xl font-black text-white mb-2">
                                  ∞
                                </div>
                                <div className="text-zinc-500 text-sm">
                                  Possibilities
                                </div>
                              </div>

                              <div>
                                <div className="text-3xl font-black text-white mb-2">
                                  24/7
                                </div>
                                <div className="text-zinc-500 text-sm">
                                  Growing Archive
                                </div>
                              </div>

                            </div>

                            {/* CTA */}
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                        inline-flex
                        items-center
                        gap-4
                        px-8
                        py-5
                        rounded-2xl
                        bg-gradient-to-r
                        from-amber-400
                        to-orange-400
                        text-black
                        font-bold
                        group-hover:scale-105
                        transition-all
                        duration-300
                      "
                            >
                              Explore Universe

                              <ArrowUpRight
                                className="
                          w-5
                          h-5
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          transition-all
                        "
                              />
                            </a>

                          </div>

                        </div>

                      </div>

                    </div>
                  </motion.div>
                );
              })}

            </div>

          </div>
        </section>

        {/* MANIFESTO */}

        <section className="py-32">
          <div className="max-w-5xl mx-auto text-center">
            <Quote className="w-16 h-16 text-amber-400 mx-auto mb-10" />

            <h2 className="text-5xl md:text-7xl font-black mb-10">
              Creative Manifesto
            </h2>

            <p className="text-2xl text-zinc-300 leading-relaxed">
              I believe every life contains stories
              worth preserving. Not only the
              extraordinary moments, but also the
              quiet conversations, forgotten letters,
              personal transformations, regrets,
              dreams, and memories that shape who we
              become.
            </p>
          </div>
        </section>

        {/* PILLARS */}

        <section className="py-20">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black">
              Four Pillars
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] p-10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center mb-8">
                    <Icon className="w-8 h-8 text-amber-400" />
                  </div>

                  <h3 className="text-2xl font-bold mb-5">
                    {pillar.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* JOURNEY TIMELINE */}

        <section className="py-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-28">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] mb-8">
                <Clock3 className="w-4 h-4 text-amber-400" />
                <span className="text-zinc-300">
                  Timeline of Creation
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tight leading-none mb-8">
                The Journey
              </h2>

              <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed">
                Every project began as an idea,
                became a vision, and slowly evolved
                into a living story.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">

              {/* Center Line */}

              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-400/30 to-transparent" />

              {[
                {
                  year: "2024",
                  title: "The Book",
                  icon: BookOpen,
                  text:
                    "The beginning of a deeply personal creative journey. A book written not simply to tell a story, but to preserve emotions, questions, and reflections that might otherwise disappear with time.",
                },

                {
                  year: "2025",
                  title: "Vihaan Writes",
                  icon: Feather,
                  text:
                    "A creative identity emerged. Vihaan Writes became a home for ideas, stories, reflections, and projects built around memory, humanity, destiny, and storytelling.",
                },

                {
                  year: "2026",
                  title: "Before Her Name Existed",
                  icon: Heart,
                  text:
                    "A documentary-style storytelling project exploring the extraordinary concept of writing to someone before meeting them. A journey through imagination, destiny, longing, and faith.",
                },

                {
                  year: "2026",
                  title: "The Human Archive",
                  icon: Archive,
                  text:
                    "A living archive dedicated to preserving untold human stories, forgotten memories, unsent letters, regrets, lessons, and life-changing moments from around the world.",
                },

                {
                  year: "Future",
                  title: "The Next Chapter",
                  icon: Sparkles,
                  text:
                    "New projects, books, archives, documentaries, and creative explorations are waiting beyond the horizon. The story of Vihaan Writes is still being written.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 60,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.15,
                    }}
                    className="relative pl-24 mb-16"
                  >
                    {/* Timeline Dot */}

                    <div className="absolute left-0 top-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-3xl border border-amber-400/20 bg-amber-400/10 backdrop-blur-xl flex items-center justify-center">
                          <Icon className="w-7 h-7 text-amber-400" />
                        </div>

                        <div className="absolute inset-0 rounded-3xl bg-amber-400/20 blur-xl" />
                      </div>
                    </div>

                    {/* Card */}

                    <div className="group rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-12 transition-all hover:border-amber-400/20 hover:bg-white/[0.04]">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                        <span className="text-amber-300 font-semibold tracking-[0.25em] uppercase">
                          {item.year}
                        </span>

                        <div className="h-px flex-1 bg-gradient-to-r from-amber-400/20 to-transparent hidden md:block" />
                      </div>

                      <h3 className="text-3xl md:text-4xl font-black mb-6">
                        {item.title}
                      </h3>

                      <p className="text-zinc-400 text-lg leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Quote */}

            <div className="max-w-4xl mx-auto text-center mt-24">
              <Quote className="w-12 h-12 text-amber-400 mx-auto mb-8" />

              <p className="text-2xl md:text-3xl leading-relaxed text-zinc-300">
                Every project begins as a question.
                Every story becomes a path.
                Every path becomes part of a larger journey.
              </p>

              <p className="text-zinc-500 mt-8">
                — Vihaan
              </p>
            </div>

          </div>
        </section>


        {/* CTA */}

        <section className="py-20">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-16 md:p-24 text-center">
            <ScrollText className="w-20 h-20 text-amber-400 mx-auto mb-10" />

            <h2 className="text-5xl md:text-8xl font-black leading-none mb-10">
              More Stories
              <br />
              Are Coming
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">
              These projects are only the beginning.
              The vision of Vihaan Writes continues
              to grow through stories, books,
              archives, documentaries, and creative
              explorations of the human experience.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-amber-400 text-black font-semibold"
            >
              Connect With Vihaan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}