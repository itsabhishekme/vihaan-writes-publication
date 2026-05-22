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
      {/* SEO */}
      <div className="sr-only">
        <h1>
          Vihaan Writes — Official Author Website of Modern Spiritual Writer
        </h1>

        <p>
          Discover books, emotional storytelling, karmic reflections, soulful
          literature, dream writing, modern Indian author insights, and spiritual
          romance by Vihaan Writes.
        </p>
      </div>

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20 bg-black" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_40%)]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-white/5 blur-[120px]" />

      {/* FLOATING GLOW */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: 'easeInOut',
        }}
        className="absolute right-[-100px] top-[120px] h-[320px] w-[320px] rounded-full bg-neutral-400/10 blur-[100px]"
      />

      {/* MAIN */}
      <div className="container-main relative py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative z-10">
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-neutral-200 backdrop-blur-xl shadow-xl"
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
              className="mt-6"
            >
              <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
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
              className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg"
            >
              A world of soulful literature, karmic reflections, emotional
              storytelling, and timeless words written before destiny arrived.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/book"
                title="Explore Vihaan Writes Book"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-black shadow-2xl shadow-white/10 transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-200"
              >
                Explore Book

                <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                title="About Vihaan Writes Author"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                About Author
              </Link>
            </motion.div>

            {/* FEATURES */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="mb-3 inline-flex rounded-xl bg-white/10 p-3">
                  <HiOutlineBookOpen className="text-2xl text-white" />
                </div>

                <h3 className="font-semibold text-white">
                  Soulful Literature
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  Emotional stories inspired by destiny and spiritual
                  connections.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="mb-3 inline-flex rounded-xl bg-white/10 p-3">
                  <HiOutlineHeart className="text-2xl text-white" />
                </div>

                <h3 className="font-semibold text-white">
                  Karmic Emotions
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  Writing that explores love, longing, healing, and soul bonds.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="mb-3 inline-flex rounded-xl bg-white/10 p-3">
                  <HiOutlineMoon className="text-2xl text-white" />
                </div>

                <h3 className="font-semibold text-white">
                  Spiritual Depth
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  Modern storytelling blended with inner awakening.
                </p>
              </div>
            </motion.div>

            {/* FOOTER TEXT */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4 text-sm text-neutral-500"
            >
              <span>Modern Spiritual Author</span>

              <span className="h-1 w-1 rounded-full bg-neutral-600" />

              <span>Soul Connection</span>

              <span className="h-1 w-1 rounded-full bg-neutral-600" />

              <span>Indian Contemporary Literature</span>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[3rem] bg-white/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-6 md:p-8 shadow-[0_0_80px_rgba(255,255,255,0.06)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%)]" />

              {/* BOOK IMAGE */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/featured.jpg"
                  alt="My Spouse Before I Met Her Book Cover"
                  width={800}
                  height={1000}
                  priority
                  className="h-[380px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="relative mt-6">
                <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                  My Spouse Before I Met Her
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-neutral-300 md:text-base">
                  A deeply emotional journey through karmic clues, dreams, soul
                  recognition, and the echoes of love written before fate united
                  two hearts.
                </p>

                {/* STATS */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                    <h4 className="text-xl font-bold text-white">
                      02
                    </h4>

                    <p className="mt-1 text-[10px] uppercase tracking-wider text-neutral-500">
                      Published
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                    <h4 className="text-xl font-bold text-white">
                      Soul
                    </h4>

                    <p className="mt-1 text-[10px] uppercase tracking-wider text-neutral-500">
                      Inspired
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                    <h4 className="text-xl font-bold text-white">
                      Modern
                    </h4>

                    <p className="mt-1 text-[10px] uppercase tracking-wider text-neutral-500">
                      Literature
                    </p>
                  </div>
                </div>

                {/* FOOTER */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
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

            {/* FLOATING CARD */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
              }}
              className="absolute -left-6 top-10 hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl lg:block"
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Emotional Writing
              </p>

              <h4 className="mt-2 text-lg font-semibold text-white">
                Spiritual Storytelling
              </h4>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}