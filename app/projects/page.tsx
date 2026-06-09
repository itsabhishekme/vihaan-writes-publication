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
} from "lucide-react";

const projects = [
  {
    title: "The Human Archive",
    tagline:
      "Preserving the stories people never thought anyone would read.",
    description:
      "A living archive dedicated to memories, regrets, transformations, lessons, turning points, forgotten letters, unfinished conversations, and human experiences from around the world.",
    url: "https://thehumanarchive.vercel.app/",
    image: "/images/the-human-archive-banner.jpg",
    year: "2026",
    stats: [
      { label: "Stories", value: "100+" },
      { label: "Voices", value: "Global" },
      { label: "Growth", value: "24/7" },
    ],
  },
  {
    title: "Before Her Name Existed",
    tagline:
      "A story written before the person it was written for entered my life.",
    description:
      "A documentary-style storytelling experience exploring destiny, longing, imagination, intuition, dreams, and the possibility of writing to someone before ever meeting them.",
    url: "https://before-her-name-existed.vercel.app/",
    image: "/images/before-her-name-existed-banner.jpg",
    year: "2026",
    stats: [
      { label: "Chapters", value: "∞" },
      { label: "Journey", value: "Soul" },
      { label: "Theme", value: "Destiny" },
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
              ["2", "Active Projects"],
              ["100+", "Stories"],
              ["∞", "Possibilities"],
              ["2026", "Vision Year"],
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

      {/* Projects */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              {/* Banner */}
              <div className="relative h-[350px] md:h-[600px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover transition duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />

                <div className="absolute top-8 left-8">
                  <span className="rounded-full border border-amber-500/20 bg-amber-500/20 px-5 py-2 text-sm text-amber-200">
                    {project.year}
                  </span>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <h2 className="text-4xl md:text-7xl font-black mb-5">
                    {project.title}
                  </h2>

                  <p className="max-w-4xl text-lg md:text-2xl text-amber-100">
                    {project.tagline}
                  </p>
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
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 pb-28">
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
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
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
      </section>
    </main>
  );
}