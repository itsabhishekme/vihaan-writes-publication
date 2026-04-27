'use client'

import { motion } from 'framer-motion'
import {
  HiOutlineBookOpen,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineArrowRight,
} from 'react-icons/hi2'
import Link from 'next/link'

const data = [
  {
    title: 'Books',
    text: 'Meaningful books crafted for readers who seek depth, clarity, and emotional truth.',
    icon: HiOutlineBookOpen,
  },
  {
    title: 'Stories',
    text: 'Soulful narratives blending love, healing, destiny, and modern reflection.',
    icon: HiOutlineHeart,
  },
  {
    title: 'Identity',
    text: 'A premium author platform built around vision, originality, and timeless words.',
    icon: HiOutlineSparkles,
  },
]

export default function FeatureSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      aria-label="Why Readers Love Vihaan Writes"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_28%)]" />

      {/* SEO Hidden Keywords */}
      <h2 className="sr-only">
        Vihaan Writes books, storytelling, author platform, emotional writing,
        spiritual literature, modern reading experience
      </h2>

      <div className="container-main">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
            Why Readers Love It
          </p>

          <h3 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            Writing That <span className="text-neutral-400">Stays With You</span>
          </h3>

          <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
            Designed for readers who seek depth, healing, emotional connection,
            and stories that feel timeless.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7 mt-16">
          {data.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative rounded-[2rem] border border-white/10 bg-neutral-900/70 backdrop-blur-xl p-8 hover:-translate-y-2 transition duration-300 shadow-xl"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />

                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-white text-black flex items-center justify-center text-2xl mb-6">
                    <Icon />
                  </div>

                  <h4 className="text-2xl font-bold">{item.title}</h4>

                  <p className="mt-4 text-neutral-400 leading-relaxed">
                    {item.text}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-neutral-300 group-hover:text-white transition">
                    Discover More <HiOutlineArrowRight />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            title="Explore Vihaan Writes Featured Book"
          >
            Explore Featured Book
            <HiOutlineArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}