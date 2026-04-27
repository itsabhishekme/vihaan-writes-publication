import type { Metadata } from 'next'
import Link from 'next/link'
import {
  HiOutlineBookOpen,
  HiOutlineArrowRight,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineStar,
  HiOutlineGlobeAlt,
  HiOutlineCheckCircle,
} from 'react-icons/hi2'

export const metadata: Metadata = {
  title: 'Books | Vihaan Writes',
  description:
    'Explore books by Vihaan Writes including My Spouse Before I Met Her and She Came, She Healed, She Left. Emotional, spiritual and transformational storytelling.',
  keywords: [
    'Vihaan Writes Books',
    'My Spouse Before I Met Her',
    'She Came She Healed She Left',
    'Indian Author Books',
    'Emotional Growth Books',
    'Soulmate Books',
    'Transformation Books',
  ],
  openGraph: {
    title: 'Books by Vihaan Writes',
    description:
      'Two powerful books on destiny, love, heartbreak, healing and transformation.',
    type: 'website',
  },
}

const books = [
  {
    id: 'spouse',
    badge: 'Soulmate Journey',
    title: 'My Spouse Before I Met Her',
    subtitle:
      'Karmic clues, dreams, and the echoes of her soul.',
    desc:
      'A reflective spiritual journey exploring divine timing, soulmates, inner awakening and love remembered before arrival.',
    link: 'https://www.amazon.in/dp/B0FLDCNYTR',
    quote:
      'I haven’t seen her face, but my soul has known her shadow.',
    points: [
      'Divine timing and soul connections',
      'Dreams, signs and inner guidance',
      'Healing loneliness through faith',
      'Poetic reflections and emotional depth',
    ],
  },
  {
    id: 'destiny',
    badge: 'The Destiny Trilogy • Book 1',
    title: 'She Came, She Healed, She Left',
    subtitle:
      'The Three Women Destiny Sent to Break and Build Me',
    desc:
      'A deeply emotional journey about awakening, healing, heartbreak and how certain people enter our lives to transform us forever.',
    link: 'https://www.amazon.in/dp/B0GSMYRY67',
    quote:
      'Not every love story is meant to last forever. Some love stories are meant to change you forever.',
    points: [
      'Emotional awakening and growth',
      'Love, loss and self-discovery',
      'Thought-provoking memoir style',
      'Wisdom hidden inside heartbreak',
    ],
  },
]

export default function BookPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_28%)]" />

      {/* Hero */}
      <section className="container-main py-24 md:py-32 text-center">
        <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
          Official Book Collection
        </p>

        <h1 className="mt-5 text-5xl md:text-7xl font-black leading-tight">
          Books by <span className="text-neutral-400">Vihaan Writes</span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-neutral-300 leading-relaxed">
          Stories of destiny, love, healing, heartbreak and transformation.
          Written for readers who seek depth, truth and emotional connection.
        </p>
      </section>

      {/* Books */}
      <section className="container-main pb-16 space-y-12">
        {books.map((book, index) => (
          <div
            key={book.id}
            className="grid md:grid-cols-2 gap-8 items-center rounded-[2rem] border border-white/10 bg-neutral-900/80 p-8 md:p-10"
          >
            {/* Cover */}
            <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-950 to-neutral-800 p-8">
                <div className="aspect-[3/4] rounded-[1.5rem] bg-black border border-white/10 flex flex-col items-center justify-center text-center p-8">
                  <HiOutlineBookOpen className="text-6xl text-neutral-400" />

                  <p className="mt-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
                    {book.badge}
                  </p>

                  <h2 className="mt-4 text-2xl md:text-4xl font-black leading-tight">
                    {book.title}
                  </h2>

                  <p className="mt-4 text-neutral-500 text-sm">
                    by Vihaan Writes
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
                <HiOutlineSparkles />
                {book.badge}
              </div>

              <h2 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
                {book.title}
              </h2>

              <p className="mt-4 text-neutral-400 text-xl">
                {book.subtitle}
              </p>

              <p className="mt-6 text-neutral-300 leading-relaxed text-lg">
                {book.desc}
              </p>

              <div className="mt-8 space-y-3">
                {book.points.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-neutral-300"
                  >
                    <HiOutlineCheckCircle className="text-white" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-1 text-yellow-400">
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
                <HiOutlineStar />
                <span className="ml-2 text-sm text-neutral-500">
                  Reader Favorite
                </span>
              </div>

              <blockquote className="mt-8 border-l-2 border-white/20 pl-5 text-neutral-400 italic leading-relaxed">
                “{book.quote}”
              </blockquote>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition text-center"
                >
                  Buy on Amazon
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/15 hover:bg-white/5 transition"
                >
                  Contact Author
                  <HiOutlineArrowRight />
                </Link>
              </div>

              <p className="mt-5 text-sm text-neutral-500 inline-flex items-center gap-2">
                <HiOutlineGlobeAlt />
                Available on Amazon India
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Final CTA */}
      <section className="container-main pb-24">
        <div className="rounded-[2rem] bg-white text-black p-10 md:p-14 text-center">
          <HiOutlineHeart className="mx-auto text-4xl" />

          <h2 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
            Read What Changes You
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-neutral-700 text-lg">
            Some books entertain. Some books awaken. Explore the emotional and
            spiritual writing journey of Vihaan Writes.
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