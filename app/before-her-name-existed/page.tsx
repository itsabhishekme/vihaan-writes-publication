import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineClock,
  HiOutlineMoon,
  HiOutlineBookOpen,
  HiOutlineArrowRight,
  HiOutlineEye,
  HiOutlineGlobeAlt,
  HiOutlineStar,
  HiOutlineArrowTopRightOnSquare,
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
    image: "/project/article-1.jpg",
  },
  {
    title: "The Dreams That Refused To Leave",
    category: "Dreams",
    image: "/project/article-2.jpg",
  },
  {
    title: "When Coincidences Start Feeling Personal",
    category: "Synchronicity",
    image: "/project/article-3.jpg",
  },
  {
    title: "The Space Between Waiting And Meeting",
    category: "Destiny",
    image: "/project/article-4.jpg",
  },
  {
    title: "The Version Of Me That Was Preparing",
    category: "Growth",
    image: "/project/article-5.jpg",
  },
  {
    title: "Before Her Name Existed",
    category: "Core Story",
    image: "/project/article-6.jpg",
  },
];

export default function BeforeHerNameExistedPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[200px]" />
        <div className="absolute bottom-0 right-0 h-[700px] w-[700px] rounded-full bg-indigo-600/10 blur-[180px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">

        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/project/Before Her Name Existed.png"
            alt="Before Her Name Existed"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
              <HiOutlineSparkles className="text-yellow-400" />
              <span className="uppercase tracking-[0.35em] text-sm text-zinc-400">
                Vihaan Writes Project
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              Before Her
              <span className="block bg-gradient-to-r from-purple-300 via-white to-yellow-200 bg-clip-text text-transparent">
                Name Existed
              </span>
            </h1>

            <p className="mt-10 text-xl text-zinc-300 max-w-3xl leading-relaxed">
              I loved the story before I knew the character.
              A journey through destiny, dreams, synchronicity,
              emotional growth, and the invisible threads that
              sometimes seem to connect two lives long before
              they officially meet.
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-12">
              <Link
                href="https://before-her-name-existed.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Begin the Journey
                <HiOutlineArrowTopRightOnSquare className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/newsletters"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                Join Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
          <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">

              <div className="relative overflow-hidden rounded-[40px] border border-white/10">
                <div className="relative h-[700px]">

                  <Image
                    src="/project/Before Her Name Existed.png"
                    alt=""
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute bottom-12 left-12 max-w-3xl">
                    <p className="uppercase tracking-[0.4em] text-zinc-300 mb-4">
                      Featured Story
                    </p>

                    <h2 className="text-5xl md:text-7xl font-black">
                      A Story That Began Before The Introduction
                    </h2>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* STATS */}
          <section className="py-32 border-y border-white/10">
            <div className="max-w-7xl mx-auto px-6">

              <div className="grid md:grid-cols-4 gap-8">

                <div className="rounded-3xl border border-white/10 p-10">
                  <HiOutlineBookOpen className="text-4xl mb-4 text-purple-300" />
                  <div className="text-6xl font-black">100+</div>
                  <p className="text-zinc-500 mt-3">Reflections</p>
                </div>

                <div className="rounded-3xl border border-white/10 p-10">
                  <HiOutlineEye className="text-4xl mb-4 text-purple-300" />
                  <div className="text-6xl font-black">∞</div>
                  <p className="text-zinc-500 mt-3">Questions</p>
                </div>

                <div className="rounded-3xl border border-white/10 p-10">
                  <HiOutlineHeart className="text-4xl mb-4 text-purple-300" />
                  <div className="text-6xl font-black">1</div>
                  <p className="text-zinc-500 mt-3">Soul Story</p>
                </div>

                <div className="rounded-3xl border border-white/10 p-10">
                  <HiOutlineGlobeAlt className="text-4xl mb-4 text-purple-300" />
                  <div className="text-6xl font-black">Life</div>
                  <p className="text-zinc-500 mt-3">Journey</p>
                </div>

              </div>
            </div>
          </section>

          {/* THEMES */}
          <section className="py-32">
            <div className="max-w-7xl mx-auto px-6">

              <div className="text-center mb-24">
                <h2 className="text-5xl md:text-6xl font-black">
                  Exploring The Unseen Narrative
                </h2>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                {pillars.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={i}
                      className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                    >
                      <Icon className="text-5xl text-purple-300 mb-6" />
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

          {/* TIMELINE */}
          <section className="py-32 border-y border-white/10">
            <div className="max-w-6xl mx-auto px-6">

              <div className="text-center mb-24">
                <h2 className="text-6xl font-black">
                  Journey Through Time
                </h2>
              </div>

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-3xl border border-white/10 p-10 bg-white/[0.03]"
                  >
                    <div className="text-purple-300 text-2xl font-bold mb-4">
                      {item.year}
                    </div>

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

          {/* ARTICLES */}
          <section className="py-32">
            <div className="max-w-7xl mx-auto px-6">

              <h2 className="text-5xl font-black mb-16">
                Featured Reflections
              </h2>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {articles.map((article, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
                  >
                    <div className="relative h-64">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-8">
                      <span className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                        {article.category}
                      </span>

                      <h3 className="text-2xl font-bold mt-4 mb-4">
                        {article.title}
                      </h3>

                      <button className="flex items-center gap-2 text-purple-300">
                        Read Story
                        <HiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* QUOTE BANNER */}
          <section className="py-40">
            <div className="max-w-5xl mx-auto px-6 text-center">

              <HiOutlineStar className="mx-auto text-6xl text-purple-300 mb-10" />

              <blockquote className="text-5xl md:text-7xl font-black leading-tight">
                “I loved the story before I knew the character.”
              </blockquote>

              <p className="mt-8 uppercase tracking-[0.4em] text-zinc-500">
                — Vihaan
              </p>

            </div>
          </section>

          {/* CTA */}
          <section className="pb-32">
            <div className="max-w-6xl mx-auto px-6">

              <div className="relative overflow-hidden rounded-[40px] border border-white/10">

                <Image
                  src="/project/Before Her Name Existed.png"
                  alt=""
                  fill
                  className="object-cover opacity-20"
                />

                <div className="relative z-10 p-20 text-center">

                  <h2 className="text-6xl font-black mb-8">
                    Continue The Journey
                  </h2>

                  <p className="max-w-3xl mx-auto text-xl text-zinc-300">
                    Follow the reflections, dreams, discoveries,
                    and emotional chapters that continue to shape
                    this evolving narrative.
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

        </main >
        );
}