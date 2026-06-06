import Link from "next/link";
import {
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineBolt,
  HiOutlineEye,
  HiOutlineArrowRight,
  HiOutlineBookOpen,
  HiOutlineClock,
} from "react-icons/hi2";

export const metadata = {
  title: "Echoes of Destiny | Vihaan Writes",
  description:
    "Exploring synchronicity, life patterns, intuition, destiny, spiritual experiences, dreams, and the invisible forces that quietly shape human journeys.",
};

const pillars = [
  {
    icon: HiOutlineSparkles,
    title: "Synchronicity",
    description:
      "The meaningful coincidences that appear unexpectedly and challenge ordinary explanations.",
  },
  {
    icon: HiOutlineMoon,
    title: "Dreams & Symbols",
    description:
      "Messages, symbols, recurring dreams, and experiences that seem to reveal deeper layers of reality.",
  },
  {
    icon: HiOutlineEye,
    title: "Intuition",
    description:
      "The quiet inner knowing that often arrives before evidence, logic, or certainty.",
  },
  {
    icon: HiOutlineClock,
    title: "Divine Timing",
    description:
      "Life unfolds according to rhythms and timing that often become clear only in hindsight.",
  },
];

const echoes = [
  {
    title: "The Coincidence That Changed Everything",
    category: "Synchronicity",
  },
  {
    title: "Why Certain Dreams Refuse To Leave",
    category: "Dreams",
  },
  {
    title: "When The Universe Repeats The Same Message",
    category: "Patterns",
  },
  {
    title: "Recognizing The Invisible Threads",
    category: "Destiny",
  },
  {
    title: "The Power Of Intuitive Knowing",
    category: "Intuition",
  },
  {
    title: "Life's Hidden Architecture",
    category: "Reflection",
  },
];

const timeline = [
  {
    title: "The First Sign",
    text: "A moment so ordinary it could have been ignored, yet unforgettable enough to stay.",
  },
  {
    title: "Patterns Emerge",
    text: "Repeated experiences begin forming a narrative beyond coincidence.",
  },
  {
    title: "Questions Deepen",
    text: "The search moves beyond what happened toward why it happened.",
  },
  {
    title: "The Echo Continues",
    text: "Every chapter reveals another layer of meaning waiting to be understood.",
  },
];

export default function EchoesOfDestinyPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[180px]" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[160px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-8">
              <HiOutlineSparkles className="text-yellow-400" />
              <span className="uppercase tracking-[0.35em] text-sm text-zinc-400">
                Vihaan Writes Project
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              Echoes of
              <span className="block bg-gradient-to-r from-yellow-200 via-white to-purple-300 bg-clip-text text-transparent">
                Destiny
              </span>
            </h1>

            <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-relaxed">
              Exploring synchronicity, intuition, dreams, timing,
              spiritual experiences, and the invisible patterns that
              quietly guide human lives through unexpected paths.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">
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

      {/* INTRO */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                About The Project
              </span>

              <h2 className="text-5xl font-bold mt-6 mb-8">
                Life Often Speaks In Patterns
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Some experiences arrive quietly. A repeated number.
                A recurring dream. A stranger who changes everything.
                A moment that feels strangely familiar.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Echoes of Destiny explores these moments—not as answers,
                but as invitations to reflect on the possibility that
                life may be communicating through patterns we rarely
                notice until much later.
              </p>
            </div>

            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl font-black text-yellow-300">
                    ∞
                  </div>
                  <p className="mt-3 text-zinc-500">
                    Possibilities
                  </p>
                </div>

                <div>
                  <div className="text-5xl font-black text-purple-300">
                    100+
                  </div>
                  <p className="mt-3 text-zinc-500">
                    Reflections
                  </p>
                </div>

                <div>
                  <div className="text-5xl font-black text-blue-300">
                    1
                  </div>
                  <p className="mt-3 text-zinc-500">
                    Journey
                  </p>
                </div>

                <div>
                  <div className="text-5xl font-black text-white">
                    Many
                  </div>
                  <p className="mt-3 text-zinc-500">
                    Questions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold">
              Exploring The Invisible
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-all"
                >
                  <Icon className="text-5xl text-yellow-300 mb-6" />

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESTINY TIMELINE */}
      <section className="py-32 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold">
              The Journey Of An Echo
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

                <p className="text-zinc-400 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY COLLECTION */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="uppercase tracking-[0.4em] text-zinc-500">
              Collection
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Echoes & Reflections
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {echoes.map((story, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <div className="h-52 bg-gradient-to-br from-yellow-900/20 via-black to-purple-900/30" />

                <div className="p-8">
                  <span className="uppercase text-xs tracking-[0.3em] text-zinc-500">
                    {story.category}
                  </span>

                  <h3 className="text-2xl font-semibold mt-4 mb-6">
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

      {/* COSMIC QUOTE */}
      <section className="py-40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <HiOutlineGlobeAlt className="mx-auto text-7xl text-yellow-300 mb-10" />

          <blockquote className="text-5xl md:text-7xl font-black leading-tight">
            &ldquo;Some coincidences arrive
            <span className="block mt-3">
              too perfectly to ignore.&rdquo;
            </span>
          </blockquote>

          <p className="mt-10 uppercase tracking-[0.4em] text-zinc-500">
            Echoes Of Destiny
          </p>
        </div>
      </section>

      {/* SYMBOLS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineMoon className="mx-auto text-5xl text-purple-300" />
              <h3 className="mt-5 text-xl font-semibold">Dreams</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineSun className="mx-auto text-5xl text-yellow-300" />
              <h3 className="mt-5 text-xl font-semibold">Awareness</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineBolt className="mx-auto text-5xl text-blue-300" />
              <h3 className="mt-5 text-xl font-semibold">Signs</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineEye className="mx-auto text-5xl text-green-300" />
              <h3 className="mt-5 text-xl font-semibold">Intuition</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-16 text-center">
            <HiOutlineBookOpen className="mx-auto text-6xl text-yellow-300 mb-8" />

            <h2 className="text-5xl font-bold mb-6">
              Follow The Echoes
            </h2>

            <p className="max-w-3xl mx-auto text-xl text-zinc-400 leading-relaxed">
              Explore reflections, stories, synchronicities,
              dreams, intuition, and the invisible patterns that
              shape our lives.
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
      </section>
    </main>
  );
}