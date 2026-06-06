import Link from "next/link";
import {
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineClock,
  HiOutlineMoon,
  HiOutlineBookOpen,
  HiOutlineArrowRight,
} from "react-icons/hi2";

export const metadata = {
  title: "Before Her Name Existed | Vihaan Writes",
  description:
    "A story about destiny, soul connections, synchronicity, dreams, karmic timing, and the journey that began before names, faces, and introductions.",
};

const pillars = [
  {
    icon: HiOutlineSparkles,
    title: "Soul Connections",
    description:
      "Exploring the invisible emotional and spiritual threads that often seem to exist long before people officially meet.",
  },
  {
    icon: HiOutlineMoon,
    title: "Dreams & Signs",
    description:
      "Moments, dreams, symbols, and experiences that feel impossible to explain yet impossible to ignore.",
  },
  {
    icon: HiOutlineClock,
    title: "Karmic Timing",
    description:
      "Understanding how life unfolds through timing, preparation, growth, and unexpected synchronicities.",
  },
  {
    icon: HiOutlineHeart,
    title: "Emotional Discovery",
    description:
      "The reflections, emotions, questions, and lessons that emerge while searching for meaning in life's deepest connections.",
  },
];

const timeline = [
  {
    year: "Before",
    title: "Before The Introduction",
    description:
      "The story existed before names, photographs, conversations, and certainty.",
  },
  {
    year: "Questions",
    title: "Searching For Meaning",
    description:
      "Dreams, coincidences, emotions, and reflections slowly began forming a narrative.",
  },
  {
    year: "Discovery",
    title: "Recognizing Patterns",
    description:
      "Life revealed connections that seemed to stretch beyond ordinary explanations.",
  },
  {
    year: "Journey",
    title: "The Story Continues",
    description:
      "Every chapter uncovers deeper reflections about destiny, timing, and human connection.",
  },
];

const articles = [
  {
    title: "I Loved The Story Before I Knew The Character",
    category: "Reflection",
  },
  {
    title: "The Dreams That Refused To Leave",
    category: "Dreams",
  },
  {
    title: "When Coincidences Start Feeling Personal",
    category: "Synchronicity",
  },
  {
    title: "The Space Between Waiting And Meeting",
    category: "Destiny",
  },
  {
    title: "The Version Of Me That Was Preparing",
    category: "Growth",
  },
  {
    title: "Before Her Name Existed",
    category: "Core Story",
  },
];

export default function BeforeHerNameExistedPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[160px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
              <HiOutlineSparkles className="text-yellow-400" />
              <span className="text-sm tracking-[0.3em] uppercase text-zinc-400">
                Vihaan Writes Project
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              Before Her
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-yellow-200">
                Name Existed
              </span>
            </h1>

            <p className="mt-10 text-xl text-zinc-400 leading-relaxed max-w-3xl">
              I loved the story before I knew the character.
              <br />
              A journey through destiny, dreams, synchronicity, emotional
              growth, and the invisible threads that sometimes seem to connect
              two lives long before they officially meet.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">
              <Link
                href="/blog"
                className="group px-8 py-4 rounded-2xl bg-white text-black font-semibold flex items-center gap-3"
              >
                Explore Stories
                <HiOutlineArrowRight className="group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/newsletters"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                Join Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-zinc-500 mb-5">
                The Project
              </p>

              <h2 className="text-5xl font-bold mb-8">
                A Documentary Of A Story That Began Before The Introduction
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Before Her Name Existed is not merely about meeting someone.
                It explores the emotional, spiritual, and reflective journey
                that existed before certainty arrived.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Through dreams, reflections, unanswered questions,
                synchronicities, and personal transformation, this project
                documents the possibility that some stories begin long before
                their characters officially enter the page.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl font-black">100+</div>
                  <p className="text-zinc-500 mt-3">Reflections</p>
                </div>

                <div>
                  <div className="text-5xl font-black">∞</div>
                  <p className="text-zinc-500 mt-3">Questions</p>
                </div>

                <div>
                  <div className="text-5xl font-black">1</div>
                  <p className="text-zinc-500 mt-3">Story</p>
                </div>

                <div>
                  <div className="text-5xl font-black">Life</div>
                  <p className="text-zinc-500 mt-3">Journey</p>
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
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-5">
              Themes
            </p>

            <h2 className="text-5xl font-bold">
              Exploring The Unseen Narrative
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {pillars.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-all"
                >
                  <Icon className="text-4xl text-purple-300 mb-6" />

                  <h3 className="text-2xl font-semibold mb-4">
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

      {/* TIMELINE */}
      <section className="py-32 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold">
              Journey Through Time
            </h2>
          </div>

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-10"
              >
                <div className="md:w-48">
                  <div className="text-purple-300 font-bold text-2xl">
                    {item.year}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
                Stories
              </p>

              <h2 className="text-5xl font-bold">
                Featured Reflections
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <div className="h-52 bg-gradient-to-br from-purple-900/40 via-black to-indigo-950/40" />

                <div className="p-8">
                  <span className="text-xs tracking-[0.3em] uppercase text-zinc-500">
                    {article.category}
                  </span>

                  <h3 className="text-2xl font-semibold mt-4 mb-5 group-hover:text-purple-300 transition">
                    {article.title}
                  </h3>

                  <button className="inline-flex items-center gap-2 text-purple-300">
                    Read Story
                    <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <HiOutlineBookOpen className="mx-auto text-6xl text-purple-300 mb-8" />

          <blockquote className="text-4xl md:text-6xl font-bold leading-tight">
            “I loved the story before I knew the character.”
          </blockquote>

          <p className="mt-8 text-zinc-500 tracking-[0.3em] uppercase">
            Before Her Name Existed
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-16 text-center">
            <h2 className="text-5xl font-bold mb-8">
              Continue The Journey
            </h2>

            <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Follow the reflections, stories, dreams, and discoveries that
              continue to shape this evolving narrative.
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