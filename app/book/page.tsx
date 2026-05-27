import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  HiOutlineArrowRight,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineStar,
  HiOutlineGlobeAlt,
  HiOutlineCheckCircle,
  HiOutlineBookOpen,
  HiOutlineFire,
  HiOutlineShieldCheck,
  HiOutlineUsers,
} from 'react-icons/hi2'

export const metadata: Metadata = {
  metadataBase: new URL('https://vihaan-writes.vercel.app'),

  title: {
    default: 'Books | Vihaan Writes',
    template: '%s | Vihaan Writes',
  },

  description:
    'Explore bestselling emotional and spiritual books by Vihaan Writes. Discover soulmate journeys, healing stories, heartbreak, transformation, destiny, and personal growth.',

  keywords: [
    'Vihaan Writes',
    'Books by Vihaan',
    'Soulmate Book',
    'Karmic Love Book',
    'Healing Books',
    'Emotional Transformation',
    'Indian Author',
    'Spiritual Books',
    'Romantic Spiritual Journey',
    'Best Emotional Books',
    'Personal Growth Books',
  ],

  authors: [{ name: 'Vihaan Writes' }],
  creator: 'Vihaan Writes',
  publisher: 'Vihaan Writes',

  alternates: {
    canonical: '/books',
  },

  openGraph: {
    title: 'Books by Vihaan Writes',
    description:
      'Discover soulful books on destiny, healing, love, heartbreak, transformation, and spiritual connection.',
    url: 'https://vihaan-writes.vercel.app/books',
    siteName: 'Vihaan Writes',
    images: [
      {
        url: '/og-books.png',
        width: 1200,
        height: 630,
        alt: 'Books by Vihaan Writes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Books by Vihaan Writes',
    description:
      'Explore emotional and transformational books by Vihaan Writes.',
    images: ['/og-books.png'],
  },

  robots: {
    index: true,
    follow: true,
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
      'A deeply spiritual and emotional journey exploring divine timing, soulmate recognition, karmic signs, dreams, and the mysterious connection between two souls before they meet.',

    link: 'https://www.amazon.in/dp/B0FLDCNYTR',

    quote:
      'I haven’t seen her face, but my soul has known her shadow.',

    image: '/books/book1.png',

    features: [
      'Soulmate Connection',
      'Spiritual Awakening',
      'Karmic Destiny',
      'Emotional Healing',
    ],
  },

  {
    id: 'destiny',
    badge: 'Destiny Trilogy',

    title: 'She Came, She Healed, She Left',

    subtitle:
      'The Three Women Destiny Sent to Break and Build Me',

    desc:
      'An emotionally transformative journey of heartbreak, awakening, healing, and inner evolution through relationships that changed everything.',

    link: 'https://www.amazon.in/dp/B0GSMYRY67',

    quote:
      'Some love stories are not meant to last forever. They are meant to change you forever.',

    image: '/books/book2.png',

    features: [
      'Heartbreak & Healing',
      'Personal Growth',
      'Emotional Depth',
      'Transformation Journey',
    ],
  },

  {
    id: 'storm',

    badge: 'Destiny Trilogy • Upcoming Release',

    title: 'She Came After the Storm',

    subtitle:
      'The Three Women Who Broke Me — and the One Destiny Sent to Heal What Remained',

    desc:
      'A deeply emotional journey through heartbreak, silence, healing, and destiny. After surviving the storms created by love, loss, and emotional destruction, one man enters the quiet aftermath where life no longer feels familiar. But sometimes destiny waits until everything breaks before sending the soul meant to heal what remained.',

    link: '/coming-soon',

    quote:
      'Some people enter your life as storms. Others arrive after the destruction — carrying the peace you thought no longer existed.',

    image: '/books/book3.png',

    features: [
      'Emotional Healing',
      'Heartbreak & Recovery',
      'Destiny & Soul Connection',
      'Transformation After Pain',
    ],
  },
]

export default function BookPage() {
  return (
    <>
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BookSeries',
            name: 'Books by Vihaan Writes',
            author: {
              '@type': 'Person',
              name: 'Vihaan Writes',
            },
            url: 'https://vihaan-writes.vercel.app/books',
          }),
        }}
      />

      <main className="relative overflow-hidden bg-black text-white">

        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-purple-500/20 blur-[120px]" />

          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-pink-500/20 blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_30%)]" />
        </div>

        {/* HERO */}
        <section className="container-main py-28 md:py-40 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-neutral-300">
            <HiOutlineSparkles />
            Official Author Collection
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            Books by{' '}
            <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
              Vihaan
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-2xl text-neutral-300 leading-relaxed">
            Emotional, spiritual, and transformational storytelling
            exploring destiny, healing, heartbreak, love, karmic connection,
            and personal awakening.
          </p>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">

            {[
              {
                icon: <HiOutlineBookOpen />,
                label: 'Published Books',
                value: '02+',
              },

              {
                icon: <HiOutlineUsers />,
                label: 'Global Readers',
                value: 'Worldwide',
              },

              {
                icon: <HiOutlineFire />,
                label: 'Genre',
                value: 'Soulful Writing',
              },

              {
                icon: <HiOutlineShieldCheck />,
                label: 'Available',
                value: 'Amazon Kindle',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
              >
                <div className="text-3xl text-white">
                  {item.icon}
                </div>

                <div className="mt-4 text-3xl font-black">
                  {item.value}
                </div>

                <p className="mt-2 text-sm text-neutral-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKS */}
        <section className="container-main pb-28 space-y-32">

          {books.map((book, index) => (
            <div
              key={book.id}
              className="grid lg:grid-cols-2 gap-14 items-center"
            >

              {/* IMAGE */}
              <div className={`${index % 2 ? 'lg:order-2' : ''}`}>

                <div className="group relative">

                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl opacity-40 group-hover:opacity-70 transition duration-700" />

                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">

                    <Image
                      src={book.image}
                      alt={book.title}
                      width={600}
                      height={800}
                      priority
                      className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
                    />

                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className={`${index % 2 ? 'lg:order-1' : ''}`}>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300">
                  <HiOutlineSparkles />
                  {book.badge}
                </div>

                <h2 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
                  {book.title}
                </h2>

                <p className="mt-5 text-xl text-neutral-400 leading-relaxed">
                  {book.subtitle}
                </p>

                <p className="mt-8 text-lg text-neutral-300 leading-relaxed">
                  {book.desc}
                </p>

                {/* FEATURES */}
                <div className="mt-10 grid sm:grid-cols-2 gap-4">

                  {book.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <HiOutlineCheckCircle className="text-green-400 text-xl" />

                      <span className="text-neutral-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* RATING */}
                <div className="mt-8 flex items-center gap-1 text-yellow-400">

                  {[1, 2, 3, 4, 5].map((i) => (
                    <HiOutlineStar key={i} className="text-xl" />
                  ))}

                  <span className="ml-3 text-sm text-neutral-400">
                    Reader Favorite
                  </span>
                </div>

                {/* QUOTE */}
                <blockquote className="mt-10 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

                  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500" />

                  <p className="italic text-xl text-neutral-300 leading-relaxed">
                    “{book.quote}”
                  </p>

                  <footer className="mt-4 text-sm text-neutral-500">
                    — Vihaan
                  </footer>
                </blockquote>

                {/* CTA */}
                <div className="mt-10 flex flex-wrap gap-5">

                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition duration-300"
                  >
                    Buy on Amazon

                    <HiOutlineArrowRight className="group-hover:translate-x-1 transition" />
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition duration-300"
                  >
                    Contact Author

                    <HiOutlineArrowRight />
                  </Link>
                </div>

                {/* AVAILABILITY */}
                <div className="mt-6 flex items-center gap-3 text-neutral-400">
                  <HiOutlineGlobeAlt />
                  Available Worldwide on Kindle
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA SECTION */}
        <section className="container-main pb-32">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white to-neutral-200 text-black p-12 md:p-20 text-center">

            <div className="absolute top-0 right-0 h-[250px] w-[250px] bg-pink-400/30 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-[250px] w-[250px] bg-purple-400/30 blur-3xl" />

            <div className="relative">

              <HiOutlineHeart className="mx-auto text-5xl" />

              <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                Read What
                <br />
                Transforms You
              </h2>

              <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-neutral-700 leading-relaxed">
                These are not just books.
                They are emotional journeys meant to stay with you long after the final page.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-5">

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-black text-white font-bold hover:scale-105 transition duration-300"
                >
                  Explore Blog
                  <HiOutlineArrowRight />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-black/10 hover:bg-black/5 transition duration-300"
                >
                  About Author
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* AUTHOR STORY */}

        <section className="container-main pb-32">

          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-16 overflow-hidden relative">

            <div className="absolute top-0 right-0 h-40 w-40 bg-purple-500/20 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-40 w-40 bg-pink-500/20 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/20 text-sm text-neutral-300">

                  <HiOutlineSparkles />

                  The Author Journey
                </div>

                <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">

                  Writing From
                  <br />

                  Real Emotions
                </h2>

                <p className="mt-8 text-lg text-neutral-300 leading-relaxed">

                  Vihaan Writes creates stories inspired by destiny,
                  heartbreak, spiritual awakening, emotional healing,
                  and the unseen connections between souls.
                </p>

                <p className="mt-6 text-lg text-neutral-400 leading-relaxed">

                  Every book is written to create reflection,
                  emotional depth, healing, and transformation.
                </p>
              </div>

              <div className="space-y-5">

                {[
                  'Soulful storytelling experience',
                  'Emotionally transformative journeys',
                  'Healing through words and reflection',
                  'Spiritual and karmic themes',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 px-6 py-6"
                  >

                    <div className="flex items-center gap-4">

                      <HiOutlineCheckCircle className="text-green-400 text-xl" />

                      <span className="text-lg text-neutral-200">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}