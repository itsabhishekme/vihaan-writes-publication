"use client"

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion"

import {
  Sparkles,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Orbit,
} from "lucide-react"

import { useRef, useState } from "react"
import Link from "next/link"

export default function JourneyPage() {
  const ref = useRef(null)

  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 10])
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  const steps = [
    {
      id: "01",
      title: "Awaken",
      subtitle: "Spiritual Beginning",
      description:
        "The first step is awareness. Before transformation comes realization.",
      quote:
        "Your soul remembers everything your mind tries to forget.",
      gradient:
        "from-fuchsia-500 via-purple-500 to-indigo-500",
    },

    {
      id: "02",
      title: "Connect",
      subtitle: "Inner Universe",
      description:
        "You are connected to everything around you. Energy never disappears.",
      quote:
        "Silence is where the universe speaks the loudest.",
      gradient:
        "from-cyan-500 via-blue-500 to-indigo-500",
    },

    {
      id: "03",
      title: "Transform",
      subtitle: "Become More",
      description:
        "Transformation begins the moment you stop resisting your true self.",
      quote:
        "Growth starts where fear loses control.",
      gradient:
        "from-orange-500 via-pink-500 to-red-500",
    },

    {
      id: "04",
      title: "Ascend",
      subtitle: "Infinite Consciousness",
      description:
        "You were never designed to stay limited. Expansion is your nature.",
      quote:
        "You are becoming something limitless.",
      gradient:
        "from-emerald-500 via-teal-500 to-cyan-500",
    },
  ]

  const nextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1)
    }
  }

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <main
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* BACKGROUND */}

      <motion.div
        style={{
          scale: bgScale,
          rotate: bgRotate,
          opacity: bgOpacity,
        }}
        className="absolute inset-0 -z-30"
      >
        <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] rounded-full bg-fuchsia-500/20 blur-[180px]" />

        <div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[180px]" />

        <div className="absolute top-[40%] left-[40%] w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[150px]" />
      </motion.div>

      {/* GRID */}

      <div
        className="
        absolute inset-0 -z-20 opacity-[0.08]
        bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-[size:60px_60px]
      "
      />

      {/* PARTICLES */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -120, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
            }}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* HERO */}

      <section className="relative z-10 px-6 pt-40 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-fuchsia-400" />

            <span className="uppercase tracking-[0.3em] text-sm text-neutral-300">
              Beyond Reality
            </span>
          </div>

          <h1 className="mt-10 text-6xl md:text-8xl lg:text-[10rem] font-black leading-none">
            <span className="bg-gradient-to-r from-white via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              THE
            </span>

            <br />

            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              JOURNEY
            </span>
          </h1>

          <p className="mt-10 max-w-3xl mx-auto text-xl md:text-2xl text-neutral-400 leading-relaxed">
            This is not just a page. <br />
            It is an emotional universe designed to awaken consciousness.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-2xl bg-white text-black font-semibold flex items-center gap-3 shadow-2xl"
            >
              Begin Experience

              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              Explore Vision
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* STATS */}

      <section className="relative z-10 mt-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              value: "100K+",
              label: "Inspired Souls",
            },

            {
              value: "4",
              label: "Transformation Stages",
            },

            {
              value: "∞",
              label: "Infinite Possibilities",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10"
            >
              <h2 className="text-5xl font-black bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                {item.value}
              </h2>

              <p className="mt-4 text-lg text-neutral-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* JOURNEY SECTION */}

      <section className="relative z-10 mt-40 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <Orbit className="w-8 h-8 text-fuchsia-400" />

          <h2 className="text-5xl font-black">
            Journey Timeline
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT */}

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveStep(index)}
                className={`
                  relative overflow-hidden rounded-[36px] p-10 cursor-pointer border transition-all duration-500
                  ${
                    activeStep === index
                      ? "border-fuchsia-500 bg-white/10"
                      : "border-white/10 bg-white/5"
                  }
                `}
              >
                <div
                  className={`absolute inset-0 opacity-20 bg-gradient-to-r ${step.gradient}`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-6xl font-black text-white/10">
                      {step.id}
                    </span>

                    <Star className="w-6 h-6 text-fuchsia-400" />
                  </div>

                  <h3 className="mt-6 text-4xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-fuchsia-300">
                    {step.subtitle}
                  </p>

                  <p className="mt-6 leading-relaxed text-neutral-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT */}

          <div className="sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-14"
              >
                <div
                  className={`absolute inset-0 opacity-20 bg-gradient-to-br ${steps[activeStep].gradient}`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="uppercase tracking-[0.3em] text-sm text-fuchsia-300">
                        Stage {steps[activeStep].id}
                      </p>

                      <h3 className="mt-4 text-6xl font-black">
                        {steps[activeStep].title}
                      </h3>
                    </div>

                    <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
                      <Star className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <p className="mt-10 text-xl leading-relaxed text-neutral-300">
                    {steps[activeStep].description}
                  </p>

                  <div className="mt-12 rounded-3xl border border-white/10 bg-black/30 p-8">
                    <p className="text-2xl italic leading-relaxed text-white/90">
                      “{steps[activeStep].quote}”
                    </p>
                  </div>

                  <div className="mt-12 flex items-center gap-5">
                    <button
                      onClick={prevStep}
                      className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
                    >
                      <ChevronLeft />
                    </button>

                    <button
                      onClick={nextStep}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center"
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* QUOTE */}

      <section className="relative z-10 mt-48 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            whileInView={{
              opacity: [0, 1],
              y: [60, 0],
            }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10" />

            <h2 className="relative z-10 text-5xl md:text-7xl font-black leading-tight">
              You Are Not

              <br />

              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Reading Words
              </span>
            </h2>

            <p className="relative z-10 mt-10 max-w-3xl mx-auto text-2xl text-neutral-400 leading-relaxed">
              You are remembering truths your soul already knew before this moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}

      <section className="relative z-10 mt-48 pb-40 px-6">
        <div className="max-w-6xl mx-auto rounded-[50px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl">
          <div className="relative p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-transparent to-cyan-500/10" />

            <motion.h2
              whileInView={{
                opacity: [0, 1],
                y: [60, 0],
              }}
              transition={{ duration: 1 }}
              className="relative z-10 text-6xl md:text-8xl font-black"
            >
              BEGIN NOW
            </motion.h2>

            <p className="relative z-10 mt-8 max-w-2xl mx-auto text-xl text-neutral-400 leading-relaxed">
              The next version of yourself is already waiting beyond this moment.
            </p>

            <Link href="/book">
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="relative z-10 mt-14 rounded-3xl bg-white px-14 py-6 text-lg font-bold text-black shadow-2xl"
              >
                Start The Experience
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}