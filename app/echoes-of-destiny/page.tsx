import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineSparkles,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineBolt,
  HiOutlineEye,
  HiOutlineArrowRight,
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineStar,
} from "react-icons/hi2";

export const metadata = {
  title: "Echoes of Destiny | Vihaan Writes",
  description:
    "Exploring synchronicity, dreams, intuition, destiny, life patterns, and the invisible forces shaping human journeys.",
};

const reflections = [
  {
    title: "The Coincidence That Changed Everything",
    image: "/echoes/coincidence.jpg",
    category: "Synchronicity",
  },
  {
    title: "Why Certain Dreams Refuse To Leave",
    image: "/echoes/dreams.jpg",
    category: "Dreams",
  },
  {
    title: "The Universe Repeats The Message",
    image: "/echoes/patterns.jpg",
    category: "Patterns",
  },
  {
    title: "Recognizing Invisible Threads",
    image: "/echoes/destiny.jpg",
    category: "Destiny",
  },
  {
    title: "The Language Of Intuition",
    image: "/echoes/intuition.jpg",
    category: "Intuition",
  },
  {
    title: "Life's Hidden Architecture",
    image: "/echoes/reflection.jpg",
    category: "Reflection",
  },
];

const pillars = [
  {
    icon: HiOutlineSparkles,
    title: "Synchronicity",
    description:
      "Meaningful coincidences that appear unexpectedly and seem impossible to ignore.",
  },
  {
    icon: HiOutlineMoon,
    title: "Dreams",
    description:
      "Recurring symbols, emotions, and stories emerging through the subconscious.",
  },
  {
    icon: HiOutlineEye,
    title: "Intuition",
    description:
      "The silent inner knowing that often arrives before logic catches up.",
  },
  {
    icon: HiOutlineClock,
    title: "Divine Timing",
    description:
      "Events unfolding according to rhythms we rarely understand.",
  },
];

const timeline = [
  {
    title: "The Sign",
    description:
      "A small event appears and seems insignificant at first.",
  },
  {
    title: "The Repetition",
    description:
      "The same message returns through different forms and experiences.",
  },
  {
    title: "The Recognition",
    description:
      "Patterns emerge and reveal a deeper layer of meaning.",
  },
  {
    title: "The Transformation",
    description:
      "Awareness changes perspective and reshapes the journey.",
  },
];

export default function EchoesOfDestinyPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[250px]" />
        <div className="absolute bottom-0 left-0 h-[800px] w-[800px] rounded-full bg-purple-600/10 blur-[220px]" />
        <div className="absolute top-20 right-0 h-[700px] w-[700px] rounded-full bg-blue-600/10 blur-[220px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">

        <div className="absolute inset-0">
          <Image
            src="/echoes/hero.jpg"
            alt="Echoes of Destiny"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="max-w-5xl">

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-8">
              <HiOutlineSparkles className="text-yellow-400" />
              <span className="uppercase tracking-[0.35em] text-xs text-zinc-400">
                Vihaan Writes Project
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              Echoes of
              <span className="block bg-gradient-to-r from-yellow-200 via-white to-purple-300 bg-clip-text text-transparent">
                Destiny
              </span>
            </h1>

            <p className="mt-10 text-xl text-zinc-300 max-w-3xl leading-relaxed">
              Exploring synchronicity, intuition, dreams,
              destiny, spiritual experiences, and the invisible
              patterns quietly shaping human lives.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/blog"
                className="px-8 py-4 rounded-2xl bg-white text-black font-semibold"
              >
                Explore Stories
              </Link>

              <Link
                href="/newsletters"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5"
              >
                Join Newsletter
              </Link>
            </div>

          </div>

        </div>

      </section>

      {/* FEATURE BANNER */}
      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10">

            <div className="relative h-[750px]">

              <Image
                src="/echoes/banner.jpg"
                alt=""
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-12 left-12 max-w-4xl">

                <p className="uppercase tracking-[0.4em] text-zinc-300 mb-4">
                  Life Speaks Through Patterns
                </p>

                <h2 className="text-5xl md:text-7xl font-black">
                  Some Coincidences Arrive Too Perfectly To Ignore
                </h2>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                About The Journey
              </span>

              <h2 className="text-5xl font-black mt-6 mb-8">
                Life Speaks Through Patterns
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Some moments feel ordinary at first.
                Years later they reveal themselves as turning points.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed">
                A recurring dream.
                A repeated number.
                A chance meeting.
                An intuition that refuses to leave.
              </p>

            </div>

            <div className="relative h-[600px] rounded-[40px] overflow-hidden border border-white/10">

              <Image
                src="/echoes/feature.jpg"
                alt=""
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-24 border-y border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-6xl font-black text-yellow-300">100+</h3>
              <p className="text-zinc-500 mt-3">Reflections</p>
            </div>

            <div>
              <h3 className="text-6xl font-black text-purple-300">50+</h3>
              <p className="text-zinc-500 mt-3">Stories</p>
            </div>

            <div>
              <h3 className="text-6xl font-black text-blue-300">∞</h3>
              <p className="text-zinc-500 mt-3">Possibilities</p>
            </div>

            <div>
              <h3 className="text-6xl font-black">1</h3>
              <p className="text-zinc-500 mt-3">Journey</p>
            </div>

          </div>

        </div>

      </section>

      {/* PILLARS */}
      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <h2 className="text-6xl font-black">
              Exploring The Invisible
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                >
                  <Icon className="text-5xl text-yellow-300 mb-6" />

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* TIMELINE */}
      <section className="py-32 border-y border-white/10">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-24">

            <h2 className="text-6xl font-black">
              Journey Of Meaning
            </h2>

          </div>

          <div className="space-y-8">

            {timeline.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-10"
              >
                <h3 className="text-3xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-400 text-lg">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* REFLECTIONS */}
      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-6xl font-black mb-20">
            Echoes & Reflections
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {reflections.map((story, index) => (
              <div
                key={index}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]"
              >
                <div className="relative h-80">

                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

                <div className="p-8">

                  <span className="uppercase text-xs tracking-[0.3em] text-zinc-500">
                    {story.category}
                  </span>

                  <h3 className="text-2xl font-bold mt-4 mb-5">
                    {story.title}
                  </h3>

                  <button className="inline-flex items-center gap-2 text-yellow-300">
                    Read Reflection
                    <HiOutlineArrowRight />
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SYMBOL GRID */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineMoon className="mx-auto text-6xl text-purple-300" />
              <h3 className="mt-5 text-2xl font-bold">Dreams</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineSun className="mx-auto text-6xl text-yellow-300" />
              <h3 className="mt-5 text-2xl font-bold">Awareness</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineBolt className="mx-auto text-6xl text-blue-300" />
              <h3 className="mt-5 text-2xl font-bold">Signs</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineEye className="mx-auto text-6xl text-green-300" />
              <h3 className="mt-5 text-2xl font-bold">Intuition</h3>
            </div>

          </div>

        </div>

      </section>

      {/* QUOTE */}
      <section className="py-40">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <HiOutlineStar className="mx-auto text-7xl text-yellow-300 mb-10" />

          <blockquote className="text-5xl md:text-7xl font-black leading-tight">
            “Some coincidences arrive
            <span className="block mt-4">
              too perfectly to ignore.”
            </span>
          </blockquote>

          <p className="uppercase tracking-[0.4em] text-zinc-500 mt-10">
            Echoes Of Destiny
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-32">

        <div className="max-w-6xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10">

            <Image
              src="/echoes/cta.jpg"
              alt=""
              fill
              className="object-cover opacity-20"
            />

            <div className="relative z-10 p-20 text-center">

              <HiOutlineBookOpen className="mx-auto text-7xl text-yellow-300 mb-8" />

              <h2 className="text-6xl font-black mb-8">
                Follow The Echoes
              </h2>

              <p className="max-w-3xl mx-auto text-xl text-zinc-300">
                Explore reflections, synchronicities,
                dreams, intuition and invisible patterns
                shaping human life.
              </p>

              <div className="flex justify-center gap-5 mt-12 flex-wrap">

                <Link
                  href="/newsletters"
                  className="px-8 py-4 rounded-2xl bg-white text-black font-semibold"
                >
                  Subscribe
                </Link>

                <Link
                  href="/blog"
                  className="px-8 py-4 rounded-2xl border border-white/10"
                >
                  Explore Articles
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}