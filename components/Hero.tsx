'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiOutlineSparkles } from 'react-icons/hi2'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="Vihaan Writes Hero Section"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_25%)]" />

      {/* SEO Hidden Keywords */}
      <h2 className="sr-only">
        Vihaan Writes Official Author Website, Books, Stories, Spiritual Writing,
        Modern Literature, Indian Author
      </h2>

      <div className="container-main py-24 md:py-36 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 text-sm text-neutral-300 bg-white/5"
          >
            <HiOutlineSparkles className="text-lg" />
            Official Author Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight"
          >
            Vihaan <span className="text-neutral-400">Writes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed"
          >
            Discover soulful books, karmic reflections, emotional storytelling,
            and timeless words written before destiny arrived.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/book"
              className="btn-primary gap-2 justify-center"
              title="View Vihaan Writes Book"
            >
              View Book <HiArrowRight />
            </Link>

            <Link
              href="/about"
              className="px-6 py-3 rounded-2xl border border-white/15 hover:bg-white/5 transition text-center"
              title="About Vihaan Writes Author"
            >
              About Author
            </Link>
          </motion.div>

          {/* SEO Trust Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-500"
          >
            <span>Author Brand</span>
            <span>Premium Reading Experience</span>
            <span>Modern Literature</span>
          </motion.div>
        </div>

        {/* Right Side Book Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-white/5 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 p-8 md:p-10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Featured Book
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-5 leading-tight">
              My Spouse Before I Met Her
            </h3>

            <p className="mt-5 text-neutral-300 leading-relaxed">
              Karmic clues, dreams, and the echoes of her soul — a heartfelt
              journey of love before meeting destiny.
            </p>

            <div className="mt-8 h-px bg-white/10" />

            <div className="mt-8 flex items-center justify-between">
              <span className="text-neutral-400 text-sm">
                By Vihaan
              </span>

              <Link
                href="/book"
                className="text-sm font-semibold hover:text-neutral-300 transition"
                title="Read More About Book"
              >
                Explore →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}