import type { Metadata } from 'next'
import Link from 'next/link'
import {
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineArrowRight,
  HiOutlineSparkles,
  HiOutlineBookOpen,
} from 'react-icons/hi2'

export const metadata: Metadata = {
  title: 'Blog | Vihaan Writes',
  description:
    'Read articles, reflections, writing insights, soulful stories, and modern thoughts from Vihaan Writes.',
  keywords: [
    'Vihaan Writes Blog',
    'Author Blog',
    'Writing Blog',
    'Spiritual Reflections',
    'Modern Storytelling',
    'Books and Articles',
  ],
}

const featured = {
  title: 'Words Written Before Destiny Arrived',
  excerpt:
    'Some stories begin before we understand them. Explore how intuition, emotion, and timing shape human connection.',
  date: 'April 2026',
  time: '6 min read',
}

const posts = [
  {
    title: 'Why Deep Readers Remember Certain Books Forever',
    excerpt:
      'Meaningful books stay because they connect with emotion, not only plot.',
    date: 'April 2026',
    time: '5 min read',
  },
  {
    title: 'Modern Love, Old Souls, New Lessons',
    excerpt:
      'Relationships today still carry timeless emotional truths.',
    date: 'March 2026',
    time: '7 min read',
  },
  {
    title: 'How Writing Becomes Healing',
    excerpt:
      'Sometimes the page listens better than the world around us.',
    date: 'March 2026',
    time: '4 min read',
  },
  {
    title: 'Creating Identity Through Creative Work',
    excerpt:
      'A personal brand grows strongest when rooted in real meaning.',
    date: 'February 2026',
    time: '6 min read',
  },
]

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)]" />

      {/* Hero */}
      <section className="container-main py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
            Journal & Articles
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-black leading-tight">
            Vihaan <span className="text-neutral-400">Blog</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl">
            Reflections on books, emotional growth, storytelling, destiny,
            creativity, and the modern human journey.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container-main pb-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-10 md:p-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
            <HiOutlineSparkles />
            Featured Article
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
            {featured.title}
          </h2>

          <p className="mt-6 text-lg text-neutral-300 max-w-3xl leading-relaxed">
            {featured.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap gap-5 text-sm text-neutral-500">
            <span className="inline-flex items-center gap-2">
              <HiOutlineCalendarDays />
              {featured.date}
            </span>

            <span className="inline-flex items-center gap-2">
              <HiOutlineClock />
              {featured.time}
            </span>
          </div>

          <Link
            href="#posts"
            className="inline-flex items-center gap-2 mt-8 px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            Read Articles
            <HiOutlineArrowRight />
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section
        id="posts"
        className="container-main py-14"
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
            Latest Posts
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black">
            Stories & Insights
          </h2>

          <p className="mt-6 text-neutral-400 text-lg">
            Explore thoughtful writing designed to inspire and connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-7 mt-14">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8 hover:-translate-y-1 transition"
            >
              <div className="h-14 w-14 rounded-2xl bg-white text-black flex items-center justify-center text-2xl">
                <HiOutlineBookOpen />
              </div>

              <h3 className="mt-6 text-2xl font-bold leading-tight">
                {post.title}
              </h3>

              <p className="mt-4 text-neutral-400 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap gap-5 text-sm text-neutral-500">
                <span className="inline-flex items-center gap-2">
                  <HiOutlineCalendarDays />
                  {post.date}
                </span>

                <span className="inline-flex items-center gap-2">
                  <HiOutlineClock />
                  {post.time}
                </span>
              </div>

              <Link
                href="#"
                className="inline-flex items-center gap-2 mt-6 font-semibold hover:text-neutral-300 transition"
              >
                Read More
                <HiOutlineArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container-main pb-24">
        <div className="rounded-[2rem] bg-white text-black p-10 md:p-14 text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-600">
            Stay Connected
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            More Words Ahead
          </h2>

          <p className="mt-6 text-neutral-700 max-w-2xl mx-auto">
            Return often for new reflections, articles, and writing from Vihaan
            Writes.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 px-7 py-4 rounded-2xl bg-black text-white font-semibold hover:scale-105 transition"
          >
            Connect Now
            <HiOutlineArrowRight />
          </Link>
        </div>
      </section>
    </main>
  )
}