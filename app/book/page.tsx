import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
    'Explore books by Vihaan Writes. Soulful, emotional, and transformational storytelling on love, destiny, healing, and personal growth.',
  keywords: [
    'Vihaan Writes Books',
    'Soulmate Book',
    'Emotional Growth Books',
    'Transformation Books',
    'Indian Author Books',
  ],
  openGraph: {
    title: 'Books by Vihaan Writes',
    description:
      'Explore powerful books on destiny, love, heartbreak, healing, and transformation.',
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
      'A spiritual and emotional journey exploring divine timing, soulmate connection, and love remembered before arrival.',
    link: 'https://www.amazon.in/dp/B0FLDCNYTR',
    quote:
      'I haven’t seen her face, but my soul has known her shadow.',
    image: '/books/book1.png',
  },
  {
    id: 'destiny',
    badge: 'Destiny Trilogy',
    title: 'She Came, She Healed, She Left',
    subtitle:
      'The Three Women Destiny Sent to Break and Build Me',
    desc:
      'An emotional journey of awakening, healing, heartbreak, and transformation through relationships.',
    link: 'https://www.amazon.in/dp/B0GSMYRY67',
    quote:
      'Some love stories are not meant to last forever. They are meant to change you forever.',
    image: '/books/book2.png',
  },
]

export default function BookPage() {
  return (
    <main className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_30%)]" />

      {/* HERO */}
      <section className="container-main py-24 md:py-32 text-center">
        <p className="uppercase tracking-[0.4em] text-sm text-neutral-500">
          Official Collection
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-black">
          Books by <span className="text-neutral-400">Vihaan</span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-neutral-300">
          Writing that explores love, destiny, healing, heartbreak, and personal transformation.
        </p>
      </section>

      {/* BOOK GRID */}
      <section className="container-main pb-20 space-y-16">
        {books.map((book, index) => (
          <div
            key={book.id}
            className="grid md:grid-cols-2 gap-10 items-center"
          >

            {/* IMAGE */}
            <div className={`${index % 2 ? 'md:order-2' : ''}`}>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-xl">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={500}
                  height={650}
                  className="w-full h-auto object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className={`${index % 2 ? 'md:order-1' : ''}`}>

              <div className="inline-flex items-center gap-2 text-sm text-neutral-400">
                <HiOutlineSparkles />
                {book.badge}
              </div>

              <h2 className="mt-4 text-4xl md:text-6xl font-black">
                {book.title}
              </h2>

              <p className="mt-4 text-xl text-neutral-400">
                {book.subtitle}
              </p>

              <p className="mt-6 text-neutral-300 leading-relaxed text-lg">
                {book.desc}
              </p>

              {/* FEATURES */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  'Emotional Depth',
                  'Soulful Writing',
                  'Transformational',
                  'Reader Favorite',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-neutral-300">
                    <HiOutlineCheckCircle />
                    {item}
                  </div>
                ))}
              </div>

              {/* RATING */}
              <div className="mt-6 flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <HiOutlineStar key={i} />
                ))}
                <span className="ml-2 text-sm text-neutral-500">
                  Reader Favorite
                </span>
              </div>

              {/* QUOTE */}
              <blockquote className="mt-6 border-l-2 border-white/20 pl-5 italic text-neutral-400">
                “{book.quote}”
              </blockquote>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
                >
                  Buy on Amazon
                </a>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition flex items-center gap-2"
                >
                  Contact Author
                  <HiOutlineArrowRight />
                </Link>
              </div>

              <p className="mt-4 text-sm text-neutral-500 flex items-center gap-2">
                <HiOutlineGlobeAlt />
                Available worldwide
              </p>

            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="container-main pb-24">
        <div className="rounded-3xl bg-white text-black p-10 text-center">
          <HiOutlineHeart className="mx-auto text-4xl" />

          <h2 className="mt-6 text-4xl md:text-6xl font-black">
            Read What Transforms You
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-neutral-700">
            These are not just books. These are emotional journeys designed to stay with you.
          </p>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-black text-white font-semibold hover:scale-105 transition"
          >
            Explore Blog
            <HiOutlineArrowRight />
          </Link>
        </div>
      </section>
    </main>
  )
}