'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  HiArrowRight,
  HiOutlineSparkles,
  HiOutlineBookOpen,
  HiOutlineHeart,
  HiOutlineMoon,
} from 'react-icons/hi2'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/5"
      aria-label="Vihaan Writes Official Hero Section"
    >
      {/* =========================
          SEO CONTENT
      ========================== */}
      <div className="sr-only">
        <h1>
          Vihaan Writes — Official Author Website of Modern Spiritual Writer
        </h1>

        <p>
          Discover books, emotional storytelling, karmic reflections, soulful
          literature, dream writing, modern Indian author insights, and spiritual
          romance by Vihaan Writes.
        </p>

        <p>
          Featured Book: My Spouse Before I Met Her — Karmic Clues, Dreams, and
          the Echoes of Her Soul.
        </p>
      </div>

      {/* =========================
          BACKGROUND EFFECTS
      ========================== */}
      <div className="absolute inset-0 -z-20 bg-black" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_40%)]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-white/5 blur-[120px]" />

      {/* Floating Glow */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: 'easeInOut',
        }}
        className="absolute right-[-100px] top-[120px] w-[320px] h-[320px] rounded-full bg-neutral-400/10 blur-[100px]"
      />

      {/* =========================
          MAIN CONTAINER
      ========================== */}
      <div className="container-main relative py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* =======================================================
              LEFT CONTENT
          ======================================================== */}
          <div className="relative z-10">
            {/* TOP BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-2.5 text-sm text-neutral-200 shadow-xl"
            >
              <HiOutlineSparkles className="text-lg text-white" />

              <span className="tracking-wide">
                Official Author Platform
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-8"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-[-0.04em]">
                <span className="block text-white">
                  Vihaan
                </span>

                <span className="block bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
                  Writes
                </span>
              </h1>
            </motion.div>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-neutral-300"
            >
              A world of soulful literature, karmic reflections, emotional
              storytelling, and timeless words written before destiny arrived.
              Experience modern spiritual writing crafted for readers who seek
              depth, love, healing, and meaning.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-5"
            >
              <Link
                href="/book"
                title="Explore Vihaan Writes Book"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-black font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-200 shadow-2xl shadow-white/10"
              >
                Explore Book

                <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                title="About Vihaan Writes Author"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-7 py-4 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                About Author
              </Link>
            </motion.div>

            {/* FEATURE LIST */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                  <HiOutlineBookOpen className="text-2xl text-white" />
                </div>

                <h3 className="font-semibold text-white">
                  Soulful Literature
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  Emotional stories inspired by destiny, dreams, and spiritual
                  connections.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                  <HiOutlineHeart className="text-2xl text-white" />
                </div>

                <h3 className="font-semibold text-white">
                  Karmic Emotions
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  Writing that explores love, longing, healing, and unseen soul
                  bonds.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                  <HiOutlineMoon className="text-2xl text-white" />
                </div>

                <h3 className="font-semibold text-white">
                  Spiritual Depth
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  Thoughtful reflections blending modern storytelling with inner
                  awakening.
                </p>
              </div>
            </motion.div>

            {/* TRUSTED TEXT */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-5 text-sm text-neutral-500"
            >
              <span>Modern Spiritual Author</span>

              <span className="h-1 w-1 rounded-full bg-neutral-600" />

              <span>Soul Connection</span>

              <span className="h-1 w-1 rounded-full bg-neutral-600" />

              <span>Indian Contemporary Literature</span>
            </motion.div>
          </div>

          {/* =======================================================
              RIGHT SIDE
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            {/* Outer Glow */}
            <div className="absolute -inset-5 rounded-[3rem] bg-white/5 blur-3xl" />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-8 md:p-10 shadow-[0_0_80px_rgba(255,255,255,0.06)] backdrop-blur-xl">
              {/* Decorative Gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%)]" />

              {/* Book Cover */}
              <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/featured.jpg"
                  alt="My Spouse Before I Met Her Book Cover"
                  width={800}
                  height={1000}
                  priority
                  className="h-[420px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="relative mt-8">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                  My Spouse Before I Met Her
                </h2>

                <p className="mt-5 text-base md:text-lg leading-relaxed text-neutral-300">
                  A deeply emotional journey through karmic clues, dreams, soul
                  recognition, and the echoes of love written before fate united
                  two hearts.
                </p>

                {/* STATS */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                    <h4 className="text-2xl font-bold text-white">
                      02
                    </h4>

                    <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">
                      Published Book
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                    <h4 className="text-2xl font-bold text-white">
                      Soul
                    </h4>

                    <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">
                      Inspired
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                    <h4 className="text-2xl font-bold text-white">
                      Modern
                    </h4>

                    <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">
                      Literature
                    </p>
                  </div>
                </div>

                {/* FOOTER */}
                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <p className="text-sm text-neutral-500">
                      Written By
                    </p>

                    <h4 className="mt-1 text-lg font-semibold text-white">
                      Vihaan
                    </h4>
                  </div>

                  <Link
                    href="/book"
                    title="Read More About My Spouse Before I Met Her"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-neutral-300"
                  >
                    Read More

                    <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating Decorative Cards */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
              }}
              className="absolute -left-8 top-10 hidden lg:block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-xl"
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Emotional Writing
              </p>

              <h4 className="mt-2 text-lg font-semibold text-white">
                Spiritual Storytelling
              </h4>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: 'easeInOut',
              }}
              className="absolute -right-6 bottom-10 hidden lg:block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-xl"
            >

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}