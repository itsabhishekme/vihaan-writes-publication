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
    date: "Dec 15, 2024",
    readTime: "5 min read",
    author: "Vihaan",
    authorImage: "/project/author.jpg",
    excerpt: "A reflection on loving a story before knowing the character who lived it.",
  },
  {
    title: "The Dreams That Refused To Leave",
    category: "Dreams",
    image: "/project/article-2.jpg",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    author: "Vihaan",
    authorImage: "/project/author.jpg",
    excerpt: "Dreams that felt too real, too consistent, too impossible to ignore.",
  },
  {
    title: "When Coincidences Start Feeling Personal",
    category: "Synchronicity",
    image: "/project/article-3.jpg",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    author: "Vihaan",
    authorImage: "/project/author.jpg",
    excerpt: "The moment when coincidences stop feeling random and start feeling like messages.",
  },
  {
    title: "The Space Between Waiting And Meeting",
    category: "Destiny",
    image: "/project/article-4.jpg",
    date: "Nov 30, 2024",
    readTime: "8 min read",
    author: "Vihaan",
    authorImage: "/project/author.jpg",
    excerpt: "Exploring the liminal space where destiny prepares itself.",
  },
  {
    title: "The Version Of Me That Was Preparing",
    category: "Growth",
    image: "/project/article-5.jpg",
    date: "Nov 25, 2024",
    readTime: "6 min read",
    author: "Vihaan",
    authorImage: "/project/author.jpg",
    excerpt: "Understanding how we grow into the people we need to become.",
  },
  {
    title: "Before Her Name Existed",
    category: "Core Story",
    image: "/project/article-6.jpg",
    date: "Nov 20, 2024",
    readTime: "10 min read",
    author: "Vihaan",
    authorImage: "/project/author.jpg",
    excerpt: "The story that began before names, faces, and introductions.",
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
      <section className="relative py-40 overflow-hidden border-y border-white/10">

        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[180px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-32">

            <span className="uppercase tracking-[0.5em] text-purple-300 text-sm font-semibold">
              Timeline
            </span>

            <h2 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-black leading-tight">
              Journey Through
              <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-rose-300 bg-clip-text text-transparent">
                Time
              </span>
            </h2>

            <p className="mt-8 text-xl text-zinc-500 leading-relaxed">
              Every chapter leaves behind traces of emotion,
              memories, lessons, and stories that continue to
              shape who we become. This timeline captures those
              meaningful moments and reflections.
            </p>

          </div>

          {/* Timeline Container */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block" />

            <div className="space-y-24">

              {timeline.map((item, i) => (

                <div
                  key={i}
                  className={`relative flex items-center ${i % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                    }`}
                >

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2">

                    <div
                      className={`
                  group relative
                  rounded-[36px]
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-10 md:p-12
                  transition-all duration-500
                  hover:border-purple-500/30
                  hover:-translate-y-2
                  ${i % 2 === 0
                          ? "lg:mr-16"
                          : "lg:ml-16"
                        }
                `}
                    >

                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-[36px] opacity-0 group-hover:opacity-100 transition duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-[36px]" />
                      </div>

                      {/* Year */}
                      <div className="inline-flex items-center gap-3 mb-6">

                        <div className="w-3 h-3 rounded-full bg-purple-400" />

                        <span className="text-purple-300 font-bold text-2xl tracking-wide">
                          {item.year}
                        </span>

                      </div>

                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-black mb-6">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        {item.description}
                      </p>

                      {/* Additional Content */}
                      <div className="grid sm:grid-cols-2 gap-4">

                        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
                          <h4 className="font-semibold mb-2">
                            Reflection
                          </h4>

                          <p className="text-sm text-zinc-500 leading-relaxed">
                            A defining moment that contributed
                            to growth, understanding and change.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
                          <h4 className="font-semibold mb-2">
                            Impact
                          </h4>

                          <p className="text-sm text-zinc-500 leading-relaxed">
                            Lessons learned that continue to
                            influence future decisions.
                          </p>
                        </div>

                      </div>

                      {/* Bottom Meta */}
                      <div className="flex flex-wrap gap-3 mt-8">

                        <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                          Personal Growth
                        </span>

                        <span className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm">
                          Reflection
                        </span>

                        <span className="px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm">
                          Memory
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20">

                    <div className="relative">

                      <div className="w-8 h-8 rounded-full bg-purple-400 border-4 border-black" />

                      <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-30" />

                    </div>

                  </div>

                  {/* Empty Side */}
                  <div className="hidden lg:block w-1/2" />

                </div>

              ))}

            </div>

          </div>

          {/* Bottom Statistics */}
          <div className="mt-40">

            <div className="grid md:grid-cols-4 gap-8">

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-center">
                <h3 className="text-5xl font-black text-purple-300 mb-3">
                  12+
                </h3>
                <p className="text-zinc-500">
                  Years Documented
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-center">
                <h3 className="text-5xl font-black text-pink-300 mb-3">
                  85+
                </h3>
                <p className="text-zinc-500">
                  Personal Stories
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-center">
                <h3 className="text-5xl font-black text-rose-300 mb-3">
                  250+
                </h3>
                <p className="text-zinc-500">
                  Reflections
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-center">
                <h3 className="text-5xl font-black text-cyan-300 mb-3">
                  10K+
                </h3>
                <p className="text-zinc-500">
                  Readers Inspired
                </p>
              </div>

            </div>

          </div>

          {/* Closing Quote */}
          <div className="max-w-4xl mx-auto text-center mt-32">

            <div className="text-7xl text-purple-300 mb-6">
              "
            </div>

            <p className="text-3xl md:text-4xl font-light leading-relaxed text-zinc-300">
              Looking back isn't about living in the past.
              It's about understanding the path that brought
              us here and appreciating every step along the way.
            </p>

            <div className="w-24 h-[2px] bg-gradient-to-r from-purple-300 to-pink-300 mx-auto mt-10" />

          </div>

        </div>

      </section>

      {/* ARTICLES */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-700/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-700/10 blur-[150px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="max-w-3xl mb-20">
            <span className="uppercase tracking-[0.4em] text-purple-400 text-sm font-semibold">
              Journal
            </span>

            <h2 className="mt-5 text-5xl md:text-6xl font-black leading-tight">
              Featured Reflections
            </h2>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              Thoughts, stories, experiences, and perspectives collected from
              moments that inspired growth, creativity, and meaningful change.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {articles.map((article, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-3"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Category */}
                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-xs uppercase tracking-[0.2em] text-purple-300 border border-white/10">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-zinc-500 mb-5">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 leading-snug group-hover:text-purple-300 transition-colors">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed mb-8">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10">
                        <Image
                          src="/author.jpg"
                          alt={article.author}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-medium">
                          {article.author}
                        </p>
                        <p className="text-xs text-zinc-500">
                          Writer & Explorer
                        </p>
                      </div>
                    </div>

                    {/* Read More */}
                    <button className="flex items-center gap-2 text-purple-300 font-medium group-hover:gap-4 transition-all">
                      Read Story
                      <HiOutlineArrowRight className="text-lg" />
                    </button>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-[32px] border border-purple-500/30" />
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center mt-20">
            <button className="group px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 flex items-center gap-3">
              <span className="font-medium">View All Articles</span>
              <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
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