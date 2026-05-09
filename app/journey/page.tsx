"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Orbit,
  Brain,
  Heart,
  Infinity,
  Moon,
  Flame,
  Eye,
  Star,
  Wand2,
  Shield,
  Zap,
} from "lucide-react";

import type {
  LucideIcon,
} from "lucide-react";

import {
  useRef,
  useState,
} from "react";

import type { RefObject } from "react";

/* ======================================================
   TYPES
====================================================== */

type Particle = {
  id: number;
  size: number;
  top: number;
  left: number;
  duration: number;
};

type Step = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  gradient: string;
};

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Stat = {
  value: string;
  label: string;
};

/* ======================================================
   HELPERS
====================================================== */

const generateParticles =
  (): Particle[] => {
    return Array.from(
      { length: 120 },
      (_, i) => ({
        id: i,

        size:
          Math.random() * 4 + 1,

        top:
          Math.random() * 100,

        left:
          Math.random() * 100,

        duration:
          8 +
          Math.random() * 15,
      })
    );
  };

/* ======================================================
   DATA
====================================================== */

const stats: Stat[] = [
  {
    value: "100K+",
    label:
      "Inspired Souls",
  },

  {
    value: "4",
    label:
      "Transformation Stages",
  },

  {
    value: "∞",
    label:
      "Infinite Possibilities",
  },
];

const features: Feature[] = [
  {
    icon: Brain,

    title:
      "Conscious Storytelling",

    description:
      "Emotion-driven narratives designed to awaken emotional intelligence and self-reflection.",
  },

  {
    icon: Heart,

    title:
      "Emotional Connection",

    description:
      "Every interaction is crafted to feel cinematic, soulful, and deeply human.",
  },

  {
    icon: Infinity,

    title:
      "Infinite Experience",

    description:
      "Luxury storytelling blended with futuristic visual systems and immersive motion.",
  },

  {
    icon: Moon,

    title:
      "Spiritual Atmosphere",

    description:
      "Inspired by dreams, healing, consciousness, and emotional awakening.",
  },

  {
    icon: Flame,

    title:
      "Creative Energy",

    description:
      "Cinematic visuals crafted with emotional intensity and artistic expression.",
  },

  {
    icon: Eye,

    title:
      "Immersive Vision",

    description:
      "Designed as an emotional universe instead of a traditional website.",
  },

  {
    icon: Shield,

    title:
      "Premium Experience",

    description:
      "Built with modern luxury interaction design and smooth performance.",
  },

  {
    icon: Zap,

    title:
      "Modern Technology",

    description:
      "Powered by advanced frontend systems for fluid user experiences.",
  },

  {
    icon: Wand2,

    title:
      "Luxury Aesthetics",

    description:
      "Glassmorphism, gradients, cinematic lighting, and immersive transitions.",
  },
];

const steps: Step[] = [
  {
    id: "01",

    title: "Awaken",

    subtitle:
      "Spiritual Beginning",

    description:
      "Awareness is the beginning of transformation. Your soul begins remembering itself beyond fear and illusion.",

    quote:
      "Your soul remembers everything your mind tries to forget.",

    gradient:
      "from-fuchsia-500 via-purple-500 to-indigo-500",
  },

  {
    id: "02",

    title: "Connect",

    subtitle:
      "Inner Universe",

    description:
      "Everything you seek externally already exists within your emotional universe.",

    quote:
      "Silence is where the universe speaks the loudest.",

    gradient:
      "from-cyan-500 via-blue-500 to-indigo-500",
  },

  {
    id: "03",

    title: "Transform",

    subtitle:
      "Become More",

    description:
      "Transformation begins the moment authenticity becomes stronger than fear.",

    quote:
      "Growth starts where fear loses control.",

    gradient:
      "from-orange-500 via-pink-500 to-red-500",
  },

  {
    id: "04",

    title: "Ascend",

    subtitle:
      "Infinite Consciousness",

    description:
      "Expansion is your natural state. You were never designed to stay limited.",

    quote:
      "You are becoming something limitless.",

    gradient:
      "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

/* ======================================================
   COMPONENT
====================================================== */

export default function JourneyPage() {
  const ref =
    useRef<HTMLElement | null>(
      null
    );

  const [activeStep, setActiveStep] =
    useState<number>(0);

  /* ✅ REACT 19 SAFE */

  const [particles] =
    useState<Particle[]>(
      () => generateParticles()
    );

  /* ======================================================
     SCROLL
  ====================================================== */

  const { scrollYProgress } =
    useScroll({
      target:
        ref as RefObject<HTMLElement>,

      offset: [
        "start start",
        "end end",
      ],
    });

  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.2]
  );

  const bgRotate =
    useTransform(
      scrollYProgress,
      [0, 1],
      [0, 10]
    );

  /* ======================================================
     ACTIONS
  ====================================================== */

  const nextStep = () => {
    setActiveStep((prev) =>
      prev < steps.length - 1
        ? prev + 1
        : prev
    );
  };

  const prevStep = () => {
    setActiveStep((prev) =>
      prev > 0
        ? prev - 1
        : prev
    );
  };

  /* ======================================================
     UI
  ====================================================== */

  return (
    <main
      ref={ref}
      className="relative overflow-hidden bg-black text-white"
    >
      {/* BACKGROUND */}

      <motion.div
        style={{
          scale: bgScale,
          rotate: bgRotate,
        }}
        className="absolute inset-0 -z-30"
      >
        <div className="absolute left-[-10%] top-[-10%] h-[900px] w-[900px] rounded-full bg-fuchsia-500/20 blur-[180px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[900px] w-[900px] rounded-full bg-cyan-500/20 blur-[180px]" />
      </motion.div>

      {/* GRID */}

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* PARTICLES */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {particles.map(
          (particle) => (
            <motion.div
              key={
                particle.id
              }
              animate={{
                y: [
                  0,
                  -120,
                  0,
                ],

                opacity: [
                  0.1,
                  1,
                  0.1,
                ],

                scale: [
                  1,
                  1.8,
                  1,
                ],
              }}
              transition={{
                duration:
                  particle.duration,

                ease:
                  "easeInOut",
              }}
              className="absolute rounded-full bg-white"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                top: `${particle.top}%`,
                left: `${particle.left}%`,
              }}
            />
          )
        )}
      </div>

      {/* HERO */}

      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          {/* TOP BADGE */}

          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
            <Sparkles className="h-5 w-5 text-fuchsia-400" />

            <span className="text-sm uppercase tracking-[0.35em] text-neutral-300">
              Conscious Universe
            </span>
          </div>

          {/* TITLE */}

          <h1 className="mt-10 text-5xl font-black tracking-tight leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-white via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              SOUL AWAKING
            </span>
          </h1>

          {/* SUBTITLE */}

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            A cinematic emotional
            universe designed to
            awaken consciousness,
            healing, creativity,
            connection, and limitless
            transformation.
          </p>

          {/* BUTTONS */}

          <div className="mt-14 flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group flex items-center gap-3 rounded-2xl bg-white px-10 py-5 font-bold text-black shadow-2xl transition-all duration-300 hover:shadow-fuchsia-500/20"
            >
              Begin Journey

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 px-10 py-5 font-semibold backdrop-blur-xl transition-all duration-500 hover:border-fuchsia-500/40 hover:bg-white/10"
            >
              Explore Vision
            </motion.button>
          </div>

          {/* BACKGROUND GLOW */}

          <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />
        </motion.div>
      </section>

      {/* STATS */}

      <section className="relative z-10 px-6 pb-40">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                y: -10,
              }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-2xl"
            >
              <h2 className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-6xl font-black text-transparent">
                {item.value}
              </h2>

              <p className="mt-4 text-lg text-neutral-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-40">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
            <Orbit className="h-5 w-5 text-cyan-400" />

            <span className="text-sm uppercase tracking-[0.35em] text-neutral-300">
              Emotional Experience
            </span>
          </div>

          <h2 className="mt-10 text-6xl font-black">
            Emotional Universe
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-400">
            Designed as a luxury
            storytelling ecosystem
            blending cinematic visuals,
            emotional depth, futuristic
            design, and conscious
            interaction.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map(
            (feature) => {
              const Icon =
                feature.icon;

              return (
                <motion.div
                  key={
                    feature.title
                  }
                  whileHover={{
                    y: -10,
                  }}
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10">
                      <Icon className="h-10 w-10 text-fuchsia-400" />
                    </div>

                    <h3 className="mt-8 text-3xl font-bold">
                      {
                        feature.title
                      }
                    </h3>

                    <p className="mt-5 leading-relaxed text-neutral-400">
                      {
                        feature.description
                      }
                    </p>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </section>

      {/* TIMELINE */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-40">
        <div className="mb-20 text-center">
          <h2 className="text-6xl font-black">
            Transformation Timeline
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-neutral-400">
            Every stage represents a
            deeper layer of emotional
            awakening and conscious
            evolution.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT */}

          <div className="space-y-8">
            {steps.map(
              (step, index) => (
                <motion.div
                  key={step.id}
                  whileHover={{
                    scale: 1.02,
                  }}
                  onClick={() =>
                    setActiveStep(
                      index
                    )
                  }
                  className={`cursor-pointer rounded-[32px] border p-8 transition-all duration-500 ${activeStep ===
                    index
                    ? "border-fuchsia-500 bg-white/10"
                    : "border-white/10 bg-white/5"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-6xl font-black text-white/10">
                      {step.id}
                    </span>

                    <Star className="h-6 w-6 text-fuchsia-400" />
                  </div>

                  <h3 className="mt-6 text-4xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-fuchsia-300">
                    {step.subtitle}
                  </p>

                  <p className="mt-6 text-neutral-400">
                    {
                      step.description
                    }
                  </p>
                </motion.div>
              )
            )}
          </div>

          {/* RIGHT */}

          <div className="sticky top-24 h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur-2xl"
              >
                <div
                  className={`absolute inset-0 opacity-20 bg-gradient-to-br ${steps[activeStep]?.gradient}`}
                />

                <div className="relative z-10">
                  <h3 className="text-5xl font-black">
                    {
                      steps[
                        activeStep
                      ]?.title
                    }
                  </h3>

                  <p className="mt-8 text-xl leading-relaxed text-neutral-300">
                    {
                      steps[
                        activeStep
                      ]
                        ?.description
                    }
                  </p>

                  <div className="mt-12 rounded-3xl border border-white/10 bg-black/30 p-8">
                    <p className="text-2xl italic leading-relaxed text-white/90">
                      “
                      {
                        steps[
                          activeStep
                        ]?.quote
                      }
                      ”
                    </p>
                  </div>

                  <div className="mt-12 flex gap-5">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-white/20"
                    >
                      <ChevronLeft />
                    </button>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-500"
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
    </main>
  );
}