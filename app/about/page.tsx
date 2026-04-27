import type { Metadata } from 'next'
import Link from 'next/link'
import {
  HiOutlineBookOpen,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineArrowRight,
} from 'react-icons/hi2'

export const metadata: Metadata = {
  title: 'About Vihaan Writes',
  description:
    'Learn about Vihaan Writes, the creative identity behind soulful books, emotional storytelling, and timeless reflections.',
  keywords: [
    'Vihaan Writes',
    'About Author',
    'Indian Author',
    'Books',
    'Storytelling',
    'Soulful Writing',
  ],
}

const values = [
  {
    title: 'Purposeful Writing',
    text: 'Every page is created to leave emotion, clarity, and meaning with the reader.',
    icon: HiOutlineBookOpen,
  },
  {
    title: 'Human Connection',
    text: 'Stories rooted in love, healing, destiny, and the emotional journey of life.',
    icon: HiOutlineHeart,
  },
  {
    title: 'Creative Identity',
    text: 'A modern premium author platform built on originality and timeless expression.',
    icon: HiOutlineSparkles,
  },
]

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)]" />

      {/* Hero */}
      <section className="container-main py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
            About The Author
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-black leading-tight">
            Vihaan <span className="text-neutral-400">Writes</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl">
            Vihaan Writes is a creative identity built around words that feel
            timeless. It represents storytelling that speaks to the heart,
            reflections that inspire growth, and books written with emotional
            depth.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Explore Book
            </Link>

            <Link
              href="/contact"
              className="px-7 py-4 rounded-2xl border border-white/15 hover:bg-white/5 transition"
            >
              Contact Author
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container-main py-8 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Journey
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-black">
            Why This Identity Exists
          </h2>

          <p className="mt-6 text-neutral-400 leading-relaxed">
            Some words are written after life happens. Others are written before
            destiny arrives. Vihaan Writes was created to express truths that
            often live silently inside the human heart.
          </p>

          <p className="mt-5 text-neutral-400 leading-relaxed">
            It is not only about books—it is about creating emotional
            experiences readers remember.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 md:p-10">
          <h3 className="text-2xl md:text-4xl font-bold leading-tight">
            Signature Style
          </h3>

          <ul className="mt-6 space-y-4 text-neutral-300">
            <li>• Emotional storytelling</li>
            <li>• Spiritual and karmic themes</li>
            <li>• Modern premium presentation</li>
            <li>• Human truth and reflection</li>
            <li>• Timeless words with depth</li>
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="container-main py-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
            Core Values
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black">
            What Drives The Work
          </h2>

          <p className="mt-6 text-neutral-400 text-lg">
            Writing with intention, depth, and emotional honesty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 mt-14">
          {values.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8 hover:-translate-y-1 transition"
              >
                <div className="h-14 w-14 rounded-2xl bg-white text-black flex items-center justify-center text-2xl">
                  <Icon />
                </div>

                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container-main pb-24">
        <div className="rounded-[2rem] bg-white text-black p-10 md:p-14 text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-600">
            Start Reading
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            Experience The Words
          </h2>

          <p className="mt-6 text-neutral-700 max-w-2xl mx-auto">
            Explore a book written with soul, purpose, and emotional depth.
          </p>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 mt-8 px-7 py-4 rounded-2xl bg-black text-white font-semibold hover:scale-105 transition"
          >
            View Featured Book
            <HiOutlineArrowRight />
          </Link>
        </div>
      </section>
    </main>
  )
}