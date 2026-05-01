'use client'

import { motion } from 'framer-motion'
import {
  HiOutlineBookOpen,
  HiOutlineHeart,
  HiOutlineSparkles,
} from 'react-icons/hi2'

/* ================= DATA ================= */

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

/* ================= ANIMATION ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
}

/* ================= COMPONENT ================= */

export default function FeatureSection() {
  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">
      
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] right-[-120px] w-[600px] h-[600px] bg-white/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] left-[-120px] w-[600px] h-[600px] bg-white/5 blur-[140px] rounded-full" />
      </div>

      {/* ===== HEADER ===== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto px-6"
      >
        <p className="uppercase tracking-[0.45em] text-xs text-neutral-500">
          Why Readers Love It
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Writing That{' '}
          <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
            Stays With You
          </span>
        </h2>

        <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
          Designed for readers who seek depth, emotional connection, healing,
          and timeless storytelling that resonates beyond words.
        </p>
      </motion.div>

      {/* ===== CARDS ===== */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-20 grid md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto"
      >
        {data.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="group relative rounded-[2.2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-9 overflow-hidden hover:-translate-y-3 transition duration-500 shadow-[0_30px_80px_-25px_rgba(255,255,255,0.2)]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_45%)]" />

              {/* Animated Border Light */}
              <div className="absolute inset-0 rounded-[2.2rem] border border-transparent group-hover:border-white/20 transition duration-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="h-16 w-16 rounded-2xl bg-white text-black flex items-center justify-center text-2xl mb-7 transition duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="mt-4 w-10 h-[2px] bg-white/20 group-hover:w-16 transition-all duration-500" />

                {/* Text */}
                <p className="mt-5 text-neutral-400 leading-relaxed text-[15px]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}