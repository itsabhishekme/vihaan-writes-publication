"use client"

import Link from "next/link"
import { useState } from "react"

import {
  motion,
  AnimatePresence,
} from "framer-motion"

import {
  Sparkles,
  BookOpen,
  Stars,
  Heart,
  PenTool,
  MoonStar,
  Feather,
  Quote,
  PlayCircle,
  Globe2,
  ScrollText,
  Wand2,
  Layers3,
  Orbit,
  Gem,
  AudioWaveform,
} from "lucide-react"

export default function BeginJourneyPage() {
  const [showVideo, setShowVideo] = useState(false)

  const features = [
    {
      icon: BookOpen,
      title: "Books & Stories",
      desc: "Soulful writings filled with emotions, destiny, cosmic timing, and deep human connection.",
    },
    {
      icon: Stars,
      title: "Karmic Universe",
      desc: "Every story reflects invisible emotional threads connecting souls across time.",
    },
    {
      icon: Heart,
      title: "Emotional Energy",
      desc: "Words crafted to awaken memories, emotions, and feelings hidden within the heart.",
    },
    {
      icon: PenTool,
      title: "Creative Writing",
      desc: "Beautiful poetic narratives blending spirituality and emotional storytelling.",
    },
    {
      icon: MoonStar,
      title: "Spiritual Aesthetics",
      desc: "Immersive cosmic visuals inspired by dreams, silence, and destiny.",
    },
    {
      icon: Feather,
      title: "Personal Journey",
      desc: "A journey of self-discovery through stories written from the soul.",
    },
  ]

  const stats = [
    {
      value: "∞",
      label: "Infinite Emotions",
    },
    {
      value: "100+",
      label: "Soulful Ideas",
    },
    {
      value: "24/7",
      label: "Creative Energy",
    },
    {
      value: "1",
      label: "Visionary Universe",
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(192,38,211,0.18),transparent_35%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_35%)]" />

      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl" />

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* FLOATING LIGHTS */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-20 top-40 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-32 right-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl"
      />

      {/* ================= HERO ================= */}

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* BADGE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-2xl"
        >
          <Sparkles className="h-4 w-4 text-fuchsia-400" />

          <span className="text-sm tracking-[0.35em] text-zinc-300 uppercase">
            Soulful Storytelling
          </span>
        </motion.div>

        {/* TITLE */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
            duration: 0.8,
          }}
          className="max-w-6xl text-5xl font-black leading-tight md:text-7xl xl:text-8xl"
        >
          Begin Your
          <br />

          <span className="bg-gradient-to-r from-fuchsia-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
            Soulful Journey
          </span>
        </motion.h1>

        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="mt-10 max-w-4xl text-lg leading-9 text-zinc-400 md:text-xl"
        >
          Welcome to the emotional universe of Vihaan Writes —
          where stories are born before souls meet, emotions
          become poetry, and destiny leaves invisible signatures
          inside every word.
        </motion.p>

        {/* BUTTONS */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6"
        >
          {/* BUTTON 1 */}

          <Link href="/">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group relative overflow-hidden rounded-2xl bg-white px-10 py-5 font-bold text-black shadow-2xl transition-all duration-300 hover:shadow-fuchsia-500/30"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Universe

              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-300 via-white to-fuchsia-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.button>
          </Link>

          {/* BUTTON 2 */}

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setShowVideo(true)}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-10 py-5 font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:border-fuchsia-500/40 hover:bg-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="relative z-10 flex items-center gap-3">
              Explore Vision

              <div className="relative flex items-center justify-center">
                <div className="absolute h-10 w-10 animate-ping rounded-full bg-fuchsia-500/20" />

                <PlayCircle className="relative h-6 w-6 text-fuchsia-300" />
              </div>
            </span>
          </motion.button>
        </motion.div>

        {/* STATS */}

        <div className="mt-24 grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl"
            >
              <h3 className="text-4xl font-black text-fuchsia-300">
                {item.value}
              </h3>

              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-4xl font-black md:text-6xl"
          >
            The World of
            <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Vihaan Writes
            </span>
          </motion.h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            A creative dimension built with emotions, dreams,
            silence, memories, and soulful storytelling.
          </p>
        </div>

        {/* FEATURE GRID */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-fuchsia-500/30 hover:bg-white/[0.07]"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl transition-all duration-700 group-hover:bg-fuchsia-500/20" />

              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20">
                  <item.icon className="h-8 w-8 text-fuchsia-300" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 backdrop-blur-xl">
              <Orbit className="h-4 w-4 text-fuchsia-400" />

              <span className="text-sm uppercase tracking-[0.3em] text-zinc-300">
                Spiritual Experience
              </span>
            </div>

            <h2 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Stories Beyond
              <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Reality
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              Vihaan Writes creates immersive emotional journeys
              blending cosmic atmosphere, destiny, and cinematic
              storytelling into one unforgettable universe.
            </p>

            <div className="mt-12 space-y-6">
              {[
                "Emotion-driven storytelling",
                "Cosmic visual aesthetics",
                "Dreamlike atmosphere",
                "Soulful cinematic experience",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="h-3 w-3 rounded-full bg-fuchsia-400" />

                  <p className="text-lg text-zinc-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Globe2,
                title: "Creative Universe",
              },
              {
                icon: ScrollText,
                title: "Poetic Narratives",
              },
              {
                icon: Wand2,
                title: "Dreamlike Aesthetics",
              },
              {
                icon: Layers3,
                title: "Immersive Experience",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl"
              >
                <item.icon className="h-10 w-10 text-fuchsia-300" />

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CINEMATIC VIDEO SECTION ================= */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-2xl">
            <AudioWaveform className="h-4 w-4 text-fuchsia-400" />

            <span className="text-sm tracking-[0.3em] text-zinc-300 uppercase">
              Cinematic Vision
            </span>
          </div>

          <h2 className="mx-auto mt-8 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Two Worlds,
            <br />

            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
              One Destiny
            </span>
          </h2>
        </div>

        {/* VIDEO CARD */}

        <motion.div
          whileHover={{
            scale: 1.01,
          }}
          className="relative mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] shadow-[0_0_120px_rgba(217,70,239,0.12)] backdrop-blur-3xl"
        >
          <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-fuchsia-500/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl" />

          {/* HEADER */}

          <div className="relative z-20 flex flex-wrap items-center justify-between gap-6 border-b border-white/10 px-8 py-6">
            <div>
              <h3 className="text-3xl font-black text-white">
                Cinematic Emotional Universe
              </h3>

              <p className="mt-2 text-zinc-400">
                Experience destiny through visual storytelling
              </p>
            </div>

            <button
              onClick={() => setShowVideo(true)}
              className="group flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-bold text-black transition-all duration-300 hover:scale-105"
            >
              Watch Now

              <PlayCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>

          {/* VIDEO */}

          <div className="relative aspect-video overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src="https://m5seiikuxyzlci4v.public.blob.vercel-storage.com/Destiny/Two%20Worlds%2C%20One%20Destiny.mp4"
                type="video/mp4"
              />
            </video>

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            {/* PLAY BUTTON */}

            <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => setShowVideo(true)}
                className="group relative flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl"
              >
                <div className="absolute h-full w-full animate-ping rounded-full bg-fuchsia-500/20" />

                <PlayCircle className="relative z-10 h-16 w-16 text-white transition-transform duration-300 group-hover:scale-110" />
              </motion.button>

              <p className="mt-8 text-lg font-medium text-white">
                Enter The Vision
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= QUOTE ================= */}

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <motion.div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] px-8 py-20 text-center backdrop-blur-3xl md:px-20">
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-fuchsia-500/10 via-transparent to-purple-500/10" />

          <Quote className="mx-auto h-16 w-16 text-fuchsia-400" />

          <h3 className="mx-auto mt-10 max-w-4xl text-3xl font-bold leading-relaxed md:text-5xl">
            “Some stories are not written with ink.
            <br />
            They are written with destiny.”
          </h3>

          <p className="mt-8 text-zinc-400">
            — Vihaan
          </p>
        </motion.div>
      </section>

      {/* ================= VIDEO MODAL ================= */}

      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 px-4 backdrop-blur-3xl"
          >
            <div
              className="absolute inset-0"
              onClick={() => setShowVideo(false)}
            />

            <motion.div
              initial={{
                scale: 0.85,
                opacity: 0,
                y: 60,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.45,
              }}
              className="relative z-20 w-full max-w-7xl overflow-hidden rounded-[42px] border border-white/10 bg-black shadow-[0_0_160px_rgba(217,70,239,0.25)]"
            >
              {/* HEADER */}

              <div className="relative z-20 flex flex-wrap items-center justify-between gap-5 border-b border-white/10 bg-white/[0.04] px-8 py-6 backdrop-blur-3xl">
                <div>
                  <div className="flex items-center gap-3">
                    <Gem className="h-5 w-5 text-fuchsia-400" />

                    <span className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">
                      Vihaan Writes
                    </span>
                  </div>

                  <h2 className="mt-4 text-4xl font-black text-white">
                    Two Worlds, One Destiny
                  </h2>

                  <p className="mt-3 max-w-2xl leading-8 text-zinc-400">
                    A cinematic emotional universe inspired by
                    spirituality, destiny, soul connections,
                    and timeless storytelling.
                  </p>
                </div>

                <button
                  onClick={() => setShowVideo(false)}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10 text-2xl text-white transition-all duration-300 hover:rotate-90 hover:bg-fuchsia-500"
                >
                  ✕
                </button>
              </div>

              {/* VIDEO */}

              <div className="relative aspect-video overflow-hidden bg-black">
                <iframe
                  className="relative z-10 h-full w-full"
                  src="https://www.youtube.com/embed/fTFoqosCYRc?autoplay=1&mute=1&playsinline=1"
                  title="Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}