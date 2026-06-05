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
  Globe,
  Clock3,
  PenTool,
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

        <section className="min-h-[80vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] mb-10">
              <Stars className="w-4 h-4 text-amber-400" />
              <span className="text-zinc-300">
                Vihaan Writes Originals
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl xl:text-[10rem] font-black tracking-tight leading-[0.85] mb-10">
              Projects
            </h1>

            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-zinc-400 leading-relaxed">
              Beyond books and blogs, these are
              long-term storytelling projects built
              to preserve memories, explore destiny,
              document human experiences, and create
              a lasting archive of stories that
              deserve to survive.
            </p>
          </motion.div>
        </section>

        {/* FEATURED PROJECTS */}

        <section className="py-20">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Featured Projects
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              Storytelling Universes
            </h2>
          </div>

          <div className="grid xl:grid-cols-2 gap-10">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.div
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />

                  <div className="relative z-10 p-12">
                    <div className="flex justify-between items-center mb-10">
                      <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Icon className="w-10 h-10 text-amber-400" />
                      </div>

                      <span className="text-zinc-500">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black mb-6">
                      {project.title}
                    </h3>

                    <p className="text-amber-300 text-xl mb-8 leading-relaxed">
                      {project.tagline}
                    </p>

                    <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                      {project.description}
                    </p>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-amber-400 text-black font-semibold"
                    >
                      Explore Project
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
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

        {/* TIMELINE */}

        <section className="py-32">
          <div className="text-center mb-20">
            <Clock3 className="w-14 h-14 text-amber-400 mx-auto mb-6" />

            <h2 className="text-5xl md:text-7xl font-black">
              The Journey
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                year: "2024",
                title: "The Book",
                text: "Publishing the first deeply personal work.",
              },
              {
                year: "2025",
                title: "Vihaan Writes",
                text: "Building a creative identity around storytelling.",
              },
              {
                year: "2026",
                title: "Before Her Name Existed",
                text: "Documenting a story before its destination existed.",
              },
              {
                year: "2026",
                title: "The Human Archive",
                text: "Creating a home for untold human stories.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-10"
              >
                <p className="text-amber-300 mb-4">
                  {item.year}
                </p>

                <h3 className="text-3xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
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