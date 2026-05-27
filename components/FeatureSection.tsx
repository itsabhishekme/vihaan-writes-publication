"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { IconType } from "react-icons";

import {
  HiOutlineBookOpen,
  HiOutlineHeart,
  HiOutlineSparkles,
} from "react-icons/hi2";

/* ================= TYPES ================= */

type FeatureItem = {
  title: string;
  text: string;
  icon: IconType;
};

/* ================= DATA ================= */

const data: FeatureItem[] = [
  {
    title: "Books",
    text:
      "Meaningful books crafted for readers who seek depth, clarity, and emotional truth.",
    icon: HiOutlineBookOpen,
  },

  {
    title: "Stories",
    text:
      "Soulful narratives blending love, healing, destiny, and modern reflection.",
    icon: HiOutlineHeart,
  },

  {
    title: "Identity",
    text:
      "Author platform built around vision, originality, and timeless words.",
    icon: HiOutlineSparkles,
  },
];

/* ================= ANIMATIONS ================= */

const containerVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

/* ================= COMPONENT ================= */

export default function FeatureSection() {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">
      {/* ===== BACKGROUND ===== */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[-120px] top-[-120px] h-[600px] w-[600px] rounded-full bg-white/5 blur-[140px]" />

        <div className="absolute bottom-[-120px] left-[-120px] h-[600px] w-[600px] rounded-full bg-white/5 blur-[140px]" />
      </div>

      {/* ===== HEADER ===== */}

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
          Why Readers Love It
        </p>

        <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Writing That{" "}
          <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
            Stays With You
          </span>
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-neutral-400">
          Designed for readers who seek depth,
          emotional connection, healing, and
          timeless storytelling that resonates
          beyond words.
        </p>
      </motion.div>

      {/* ===== CARDS ===== */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto mt-20 grid max-w-7xl gap-8 px-6 md:grid-cols-3"
      >
        {data.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-9 shadow-[0_30px_80px_-25px_rgba(255,255,255,0.2)] backdrop-blur-xl transition duration-500 hover:-translate-y-3"
            >
              {/* Hover Glow */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Animated Border */}

              <div className="absolute inset-0 rounded-[2.2rem] border border-transparent transition duration-500 group-hover:border-white/20" />

              {/* Content */}

              <div className="relative z-10">
                {/* Icon */}

                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl text-black shadow-lg transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon />
                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold tracking-tight">
                  {item.title}
                </h3>

                {/* Divider */}

                <div className="mt-4 h-[2px] w-10 bg-white/20 transition-all duration-500 group-hover:w-16" />

                {/* Text */}

                <p className="mt-5 text-[15px] leading-relaxed text-neutral-400">
                  {item.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}