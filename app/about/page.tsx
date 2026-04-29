import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  HiOutlineArrowRight,
  HiOutlineBookOpen,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineStar,
  HiOutlineUserCircle,
} from 'react-icons/hi2'

export const metadata: Metadata = {
  title: 'About | Vihaan Writes',
  description:
    'Discover Vihaan Writes, an emotional storytelling platform focused on books, soul connections, healing, and transformation.',
  keywords: [
    'Vihaan Writes',
    'Author About Page',
    'Indian Author',
    'Emotional Writing',
    'Soulmate Books',
  ],
  openGraph: {
    title: 'About Vihaan Writes',
    description:
      'Explore the journey, philosophy, and creative identity behind Vihaan Writes.',
    type: 'profile',
  },
}

const values = [
  {
    title: 'Purposeful Writing',
    text: 'Every word is written with intention to move hearts and awaken thought.',
    icon: HiOutlineBookOpen,
  },
  {
    title: 'Emotional Truth',
    text: 'Stories that reflect real human emotions—love, loss, growth, and healing.',
    icon: HiOutlineHeart,
  },
  {
    title: 'Creative Identity',
    text: 'A premium storytelling platform built with originality and depth.',
    icon: HiOutlineSparkles,
  },
]

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)]" />

      {/* HERO */}
      <section className="container-main py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
            About The Author
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-black leading-tight">
            Vihaan <span className="text-neutral-400"></span>
          </h1>

          <p className="mt-8 text-lg text-neutral-300 leading-relaxed">
            Vihaan is not just a name. It is a creative identity built
            around emotional storytelling, spiritual depth, and transformational writing.
          </p>

          <p className="mt-6 text-neutral-400">
            The goal is simple: create words that stay inside people.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/book"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Explore Books
            </Link>

            <Link
              href="/blog"
              className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition"
            >
              Read Blog
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/author.jpg"
              alt="Vihaan Writes Author"
              width={500}
              height={600}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="container-main py-20">
        <div className="rounded-3xl border border-white/10 bg-neutral-900 p-10 text-center">
          <HiOutlineUserCircle className="mx-auto text-5xl text-neutral-400" />

          <h2 className="mt-6 text-4xl md:text-6xl font-black">
            Writing With Purpose
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-neutral-400 text-lg">
            Writing is not just about expression—it is about connection,
            healing, and transformation.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-main py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-neutral-900 p-8 hover:-translate-y-1 transition"
              >
                <div className="h-14 w-14 rounded-xl bg-white text-black flex items-center justify-center text-xl">
                  <Icon />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-neutral-400">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="container-main py-20">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-10">
            <h2 className="text-3xl md:text-5xl font-black">
              The Journey
            </h2>

            <p className="mt-6 text-neutral-400">
              Every book is a reflection of emotional growth and self-discovery.
            </p>

            <ul className="mt-6 space-y-3 text-neutral-300">
              <li>• Emotional storytelling</li>
              <li>• Healing through writing</li>
              <li>• Soulmate and destiny themes</li>
              <li>• Personal transformation</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-10">
            <HiOutlineLightBulb className="text-4xl text-neutral-400" />

            <h3 className="mt-6 text-3xl font-black">
              Creative Vision
            </h3>

            <p className="mt-4 text-neutral-400">
              To build a timeless author identity that connects deeply with readers worldwide.
            </p>

            <div className="mt-6 flex gap-2 text-yellow-400">
              {[1,2,3,4,5].map(i => <HiOutlineStar key={i} />)}
            </div>
          </div>

        </div>
      </section>

      {/* GLOBAL */}
      <section className="container-main py-20">
        <div className="rounded-3xl border border-white/10 bg-neutral-900 p-10 text-center">
          <HiOutlineGlobeAlt className="mx-auto text-5xl text-neutral-400" />

          <h2 className="mt-6 text-4xl md:text-6xl font-black">
            Global Connection
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-neutral-400">
            Human emotions connect beyond borders. Stories written here are meant for readers everywhere.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-main pb-24">
        <div className="rounded-3xl bg-white text-black p-12 text-center">
          <HiOutlineHeart className="mx-auto text-4xl" />

          <h2 className="mt-6 text-4xl md:text-6xl font-black">
            Experience The Writing
          </h2>

          <p className="mt-6 text-neutral-700 max-w-2xl mx-auto">
            Dive into books that reflect life, emotions, and transformation.
          </p>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-black text-white font-semibold hover:scale-105 transition"
          >
            View Books
            <HiOutlineArrowRight />
          </Link>
        </div>
      </section>

    </main>
  )
}