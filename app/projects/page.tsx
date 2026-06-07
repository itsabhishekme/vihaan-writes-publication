"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    title: "The Human Archive",
    tagline:
      "Preserving the stories people never thought anyone would read.",
    description:
      "A living archive of memories, regrets, lessons, turning points, transformations, forgotten letters, and human experiences from around the world.",
    url: "https://the-human-archive-beta.vercel.app/",
    image: "/images/the-human-archive-banner.jpg",
    year: "2026",
  },
  {
    title: "Before Her Name Existed",
    tagline:
      "A story written before the person it was written for entered my life.",
    description:
      "A documentary-style storytelling project exploring destiny, longing, imagination, and writing to someone before ever meeting them.",
    url: "https://before-her-name-existed.vercel.app/",
    image: "/images/before-her-name-existed-banner.jpg",
    year: "2026",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-amber-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-orange-500/10 blur-[160px]" />
      </div>

      {/* Hero */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-zinc-400">
              Vihaan Writes Originals
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-none mb-8">
            Stories
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-300 bg-clip-text text-transparent">
              Beyond Books
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed">
            A collection of living storytelling projects exploring memory,
            destiny, humanity, untold stories, and the moments that shape our
            lives.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {projects.map((project, index) => {

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
              >
                {/* Banner */}
                <div className="relative h-[300px] md:h-[500px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />

                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <span className="inline-block px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/20 text-amber-300 text-sm mb-5">
                      {project.year}
                    </span>

                    <h2 className="text-4xl md:text-6xl font-black mb-4">
                      {project.title}
                    </h2>

                    <p className="text-xl md:text-2xl text-amber-200 max-w-4xl">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <p className="text-zinc-400 text-lg leading-relaxed max-w-4xl mb-10">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-10">
                    <div>
                      <div className="text-3xl font-black text-white">
                        100+
                      </div>
                      <div className="text-zinc-500 text-sm">Stories</div>
                    </div>

                    <div>
                      <div className="text-3xl font-black text-white">∞</div>
                      <div className="text-zinc-500 text-sm">
                        Possibilities
                      </div>
                    </div>

                    <div>
                      <div className="text-3xl font-black text-white">
                        24/7
                      </div>
                      <div className="text-zinc-500 text-sm">
                        Growing Archive
                      </div>
                    </div>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 text-black font-bold hover:scale-105 transition-all"
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

      {/* CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-white/[0.03] p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-8">
            More Stories
            <br />
            Are Coming
          </h2>

          <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed mb-10">
            These projects are only the beginning. The vision of Vihaan Writes
            continues through books, archives, documentaries, reflections, and
            new storytelling experiences.
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
    </main>
  );
}