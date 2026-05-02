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
} from "react-icons/hi2";

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative overflow-hidden text-white bg-black">

      {/* BACKGROUND ORBS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]" />

      {/* HERO */}
      <section className="container-main py-28 md:py-36 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="uppercase tracking-[0.4em] text-sm text-neutral-500">
            About The Author
          </p>

          <h1 className="mt-6 text-6xl md:text-8xl font-black leading-tight tracking-tight">
            Vihaan
          </h1>

          <p className="mt-8 text-xl text-neutral-300 leading-relaxed">
            Vihaan is not just a name. It is a creative identity.
          </p>

          <p className="mt-4 text-neutral-400">
            The pen name of <span className="text-white">Abhishek Shrivastava</span>, 
            an Indian author writing at the intersection of emotion, spirituality, 
            and human connection.
          </p>

          <p className="mt-4 text-neutral-400">
            The goal is simple: <span className="text-white">create words that stay inside people.</span>
          </p>

          <button
            onClick={() => setOpen(!open)}
            className="mt-8 inline-flex items-center gap-2 text-sm text-white hover:text-neutral-300 transition"
          >
            {open ? "Read Less" : "Read More"}
            {open ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
          </button>

          <div className={`${open ? "max-h-[2000px] opacity-100 mt-8" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-700`}>
            <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">

              <p>
                Born in Bihar, India, Abhishek Shrivastava brings a deeply introspective 
                and emotionally aware voice to modern storytelling.
              </p>

              <p>
                His work explores karmic connections, unseen bonds, emotional memory, 
                and the silent language of the soul.
              </p>

              <p>
                <span className="text-white">Vihaan Writes</span> is not a brand. 
                It is a personal space of expression.
              </p>

              <div>
                <h3 className="text-white font-semibold text-xl mb-3">
                  What Defines His Writing
                </h3>
                <ul className="space-y-2">
                  <li>• Emotional storytelling that lingers</li>
                  <li>• Spiritual and karmic depth</li>
                  <li>• Love beyond logic and timelines</li>
                  <li>• Inner transformation</li>
                  <li>• Silence between words</li>
                </ul>
              </div>

              <p className="italic text-white text-lg">
                His words are meant for those who feel deeply—
                and recognize something familiar within them.
              </p>

              <p className="text-white">— Vihaan</p>
            </div>
          </div>

          <div className="mt-12 flex gap-4 flex-wrap">
            <Link href="/book" className="px-7 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
              Explore Books
            </Link>
            <Link href="/blog" className="px-7 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
              Read Blog
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative group">
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/author.jpg"
              alt="Vihaan Author"
              width={500}
              height={650}
              className="w-full object-cover group-hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </section>

      {/* NEW: JOURNEY SECTION */}
      <section className="container-main py-28 text-center">
        <h2 className="text-5xl font-black">The Journey</h2>
        <p className="mt-6 max-w-3xl mx-auto text-neutral-400 text-lg">
          Writing did not begin as a profession. It began as a feeling—
          something that needed to be expressed, even before it was understood.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {["Awakening", "Expression", "Connection"].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-3 text-neutral-400 text-sm">
                A phase where writing evolves into something deeper than words.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IDENTITY */}
      <section className="container-main py-24 text-center">
        <HiOutlineUserCircle className="mx-auto text-5xl text-neutral-400" />
        <h2 className="mt-6 text-5xl font-black">The Identity</h2>

        <p className="mt-6 max-w-3xl mx-auto text-neutral-400 text-lg">
          Vihaan is not just a writer. It is an emotional presence—
          a voice that exists between thought and feeling.
        </p>
      </section>

      {/* PHILOSOPHY */}
      <section className="container-main py-24 text-center">
        <HiOutlineLightBulb className="mx-auto text-5xl text-neutral-400" />
        <h2 className="mt-6 text-5xl font-black">Writing With Purpose</h2>

        <p className="mt-6 max-w-3xl mx-auto text-neutral-400 text-lg">
          Writing is not expression—it is connection.
        </p>
      </section>

      {/* THEMES */}
      <section className="container-main py-24 grid md:grid-cols-3 gap-10">
        {[
          {
            icon: HiOutlineHeart,
            title: "Emotional Depth",
            text: "Stories that stay within the reader long after reading.",
          },
          {
            icon: HiOutlineSparkles,
            title: "Spiritual Insight",
            text: "Exploring unseen bonds and soul-level connections.",
          },
          {
            icon: HiOutlineGlobeAlt,
            title: "Universal Connection",
            text: "Emotions beyond boundaries.",
          },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="p-10 bg-neutral-900/70 backdrop-blur-xl rounded-3xl border border-white/10 hover:-translate-y-2 transition duration-300">
              <Icon className="text-3xl text-white" />
              <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 text-neutral-400">{item.text}</p>
            </div>
          );
        })}
      </section>

      {/* QUOTES */}
      <section className="container-main py-28">
        <h2 className="text-center text-5xl font-black mb-16">
          Words That Stay
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Some people are not found. They are remembered.",
            "The soul recognizes long before the mind understands.",
            "Not every connection begins in this lifetime.",
          ].map((quote, i) => (
            <div key={i} className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.03] transition">
              <p className="text-xl italic text-neutral-200">“{quote}”</p>
              <p className="mt-6 text-sm text-neutral-400">— Vihaan</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOK */}
      <section className="container-main py-24 text-center">
        <HiOutlineBookOpen className="mx-auto text-5xl text-neutral-400" />

        <h2 className="mt-6 text-5xl font-black">The Work</h2>

        <div className="mt-10 flex justify-center gap-2 text-yellow-400">
          {[1,2,3,4,5].map(i => <HiOutlineStar key={i} />)}
        </div>

        <Link href="/book" className="inline-flex mt-10 items-center gap-2 px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition">
          View Book <HiOutlineArrowRight />
        </Link>
      </section>

      {/* CTA */}
      <section className="container-main pb-28 text-center">
        <div className="bg-white text-black rounded-3xl p-14 shadow-2xl">
          <h2 className="text-5xl font-black">Experience The Writing</h2>

          <Link
            href="/book"
            className="inline-block mt-8 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:scale-105 transition"
          >
            Start Reading
          </Link>
        </div>
      </section>

    </main>
  );
}