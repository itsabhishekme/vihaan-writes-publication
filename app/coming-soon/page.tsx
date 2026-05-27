
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import {
  HiOutlineArrowRight,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineFire,
  HiOutlineCheckCircle,
  HiOutlineMoon,
  HiOutlineBolt,
  HiOutlineGlobeAlt,
  HiOutlineStar,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'

export const metadata: Metadata = {
  metadataBase: new URL('https://vihaan-writes.vercel.app'),

  title: 'She Came After the Storm | Coming Soon',

  description:
    'An upcoming emotional and transformational book by Vihaan Writes exploring heartbreak, silence, destiny, emotional healing, and the soul that arrives after destruction.',

  keywords: [
    'Vihaan Writes',
    'She Came After the Storm',
    'Destiny Trilogy',
    'Heartbreak Healing Book',
    'Emotional Transformation',
    'Soulmate Journey',
    'Spiritual Healing',
    'Karmic Love',
    'Emotional Storytelling',
  ],

  authors: [{ name: 'Vihaan Writes' }],
  creator: 'Vihaan Writes',
  publisher: 'Vihaan Writes',

  alternates: {
    canonical: '/coming-soon',
  },

  openGraph: {
    title: 'She Came After the Storm',

    description:
      'The Three Women Who Broke Me — and the One Destiny Sent to Heal What Remained.',

    url: 'https://vihaan-writes.vercel.app/coming-soon',

    siteName: 'Vihaan Writes',

    images: [
      {
        url: '/og-storm-book.png',
        width: 1200,
        height: 630,
        alt: 'She Came After the Storm',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'She Came After the Storm',

    description:
      'An unforgettable emotional journey by Vihaan Writes.',

    images: ['/og-storm-book.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
}

const emotionalThemes = [
  {
    title: 'Heartbreak',
    desc:
      'The emotional destruction caused by love that changes everything.',
    icon: <HiOutlineHeart />,
  },

  {
    title: 'Silence',
    desc:
      'The quiet that arrives after emotional storms finally disappear.',
    icon: <HiOutlineMoon />,
  },

  {
    title: 'Destiny',
    desc:
      'The mysterious timing behind the souls who enter our lives.',
    icon: <HiOutlineSparkles />,
  },

  {
    title: 'Healing',
    desc:
      'The unexpected peace carried by the right person.',
    icon: <HiOutlineShieldCheck />,
  },
]

const stormJourney = [
  'Three emotionally transformative relationships',
  'The silence that follows emotional collapse',
  'Healing after heartbreak and emotional exhaustion',
  'A destiny-driven soulmate connection',
  'Inner awakening through pain and reflection',
  'The emotional rebirth after destruction',
]

export default function ComingSoonPage() {
  return (
    <>
      {/* JSON LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'Book',

            name: 'She Came After the Storm',

            author: {
              '@type': 'Person',
              name: 'Vihaan Writes',
            },

            description:
              'An emotional and transformational journey exploring heartbreak, destiny, silence, healing, and spiritual awakening.',

            genre: [
              'Emotional Healing',
              'Transformation',
              'Spiritual Journey',
              'Heartbreak',
            ],

            bookFormat: 'EBook',

            inLanguage: 'English',

            url: 'https://vihaan-writes.vercel.app/coming-soon',
          }),
        }}
      />

      <main className="relative overflow-hidden bg-black text-white">

        {/* ========================================= */}
        {/* BACKGROUND EFFECTS */}
        {/* ========================================= */}

        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div className="absolute top-0 left-0 h-[600px] w-[600px] bg-purple-500/20 blur-[140px]" />

          <div className="absolute bottom-0 right-0 h-[600px] w-[600px] bg-pink-500/20 blur-[140px]" />

          <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-white/5 blur-[180px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_30%)]" />
        </div>

        {/* ========================================= */}
        {/* HERO */}
        {/* ========================================= */}

        <section className="container-main relative py-28 md:py-40">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-neutral-300">

                <HiOutlineSparkles />

                Destiny Trilogy • Upcoming Release
              </div>

              <h1 className="mt-10 text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95]">

                She Came
                <br />

                <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                  After the Storm
                </span>
              </h1>

              <p className="mt-8 text-xl md:text-3xl text-neutral-400 leading-relaxed">

                The Three Women Who Broke Me —
                and the One Destiny Sent to Heal
                What Remained
              </p>

              <p className="mt-10 text-lg text-neutral-300 leading-relaxed max-w-2xl">

                A cinematic emotional journey through heartbreak,
                silence, destiny, emotional destruction,
                and the unexpected soul that arrives
                after everything changes forever.
              </p>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-wrap gap-5">

                <Link
                  href="/book"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition duration-300"
                >
                  Explore Books

                  <HiOutlineArrowRight className="group-hover:translate-x-1 transition" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300"
                >
                  Contact Author
                </Link>
              </div>

              {/* STATS */}
              <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">

                {[
                  {
                    icon: <HiOutlineBookOpen />,
                    label: 'Series',
                    value: 'Destiny Trilogy',
                  },

                  {
                    icon: <HiOutlineClock />,
                    label: 'Release',
                    value: 'Coming Soon',
                  },

                  {
                    icon: <HiOutlineFire />,
                    label: 'Genre',
                    value: 'Emotional',
                  },

                  {
                    icon: <HiOutlineGlobeAlt />,
                    label: 'Available',
                    value: 'Worldwide',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
                  >
                    <div className="text-3xl">
                      {item.icon}
                    </div>

                    <div className="mt-4 text-lg font-bold">
                      {item.value}
                    </div>

                    <p className="mt-2 text-sm text-neutral-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl opacity-60" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6">

                <Image
                  src="/books/book3.png"
                  alt="She Came After the Storm"
                  width={700}
                  height={900}
                  priority
                  className="w-full h-auto rounded-[30px] object-cover"
                />

                <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-8">

                  <div className="flex items-center gap-2 text-yellow-400">

                    {[1, 2, 3, 4, 5].map((i) => (
                      <HiOutlineStar key={i} className="text-xl" />
                    ))}
                  </div>

                  <blockquote className="mt-6 text-xl italic leading-relaxed text-neutral-200">

                    “Some people enter your life as storms.
                    Others arrive after the destruction —
                    carrying the peace you thought
                    no longer existed.”
                  </blockquote>

                  <footer className="mt-5 text-sm text-neutral-500">
                    — Vihaan
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* STORY SECTION */}
        {/* ========================================= */}

        <section className="container-main pb-32">

          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-20 overflow-hidden relative">

            <div className="absolute top-0 right-0 h-52 w-52 bg-pink-500/20 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-52 w-52 bg-purple-500/20 blur-3xl" />

            <div className="relative max-w-5xl mx-auto">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/20 text-sm text-neutral-300">

                <HiOutlineBolt />

                The Silence After the Storm
              </div>

              <h2 className="mt-8 text-4xl md:text-7xl font-black leading-tight">

                When Everything
                <br />
                Finally Breaks
              </h2>

              <div className="mt-14 space-y-8 text-lg md:text-2xl text-neutral-300 leading-relaxed">

                <p>
                  There is a moment in every life
                  when the noise finally stops.
                </p>

                <p>
                  Not the noise of the world —
                  that continues endlessly.
                </p>

                <p>
                  The silence I speak of is different.
                </p>

                <p>
                  It is the silence that arrives after heartbreak
                  has already taken everything from you.
                </p>

                <p>
                  After the emotional storms are over.
                </p>

                <p>
                  After the chaos disappears.
                </p>

                <p>
                  After the people who once shaped your world
                  become distant memories.
                </p>

                <p>
                  Three storms came before the silence.
                </p>

                <p>
                  Three women.
                  Three emotional earthquakes.
                  Three chapters that transformed everything.
                </p>

                <p>
                  But this story is not about destruction.
                </p>

                <p>
                  It is about what remains after destruction.
                </p>

                <p>
                  Because sometimes destiny waits
                  until you are completely broken
                  before sending the soul
                  capable of healing you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* THEMES */}
        {/* ========================================= */}

        <section className="container-main pb-32">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300">

              <HiOutlineSparkles />

              Emotional Themes
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black">

              More Than A Love Story
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-neutral-400 leading-relaxed">

              A transformational emotional experience
              exploring pain, destiny, silence,
              healing, and rebirth.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {emotionalThemes.map((item) => (
              <div
                key={item.title}
                className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 transition duration-500"
              >
                <div className="text-5xl">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-3xl font-black">
                  {item.title}
                </h3>

                <p className="mt-5 text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================= */}
        {/* JOURNEY */}
        {/* ========================================= */}

        <section className="container-main pb-32">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300">

                <HiOutlineHeart />

                The Journey
              </div>

              <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">

                What Awaits
                <br />
                Inside The Book
              </h2>

              <p className="mt-8 text-lg text-neutral-400 leading-relaxed">

                This is not simply a story about heartbreak.
                It is a story about emotional survival,
                destiny, silence,
                transformation,
                and the soul that arrives after devastation.
              </p>
            </div>

            <div className="space-y-5">

              {stormJourney.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                >
                  <div className="flex items-center gap-4">

                    <HiOutlineCheckCircle className="text-green-400 text-2xl" />

                    <span className="text-lg text-neutral-200">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* FINAL CTA */}
        {/* ========================================= */}

        <section className="container-main pb-32">

          <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-white to-neutral-200 text-black p-14 md:p-24 text-center">

            <div className="absolute top-0 right-0 h-[300px] w-[300px] bg-pink-400/30 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-purple-400/30 blur-3xl" />

            <div className="relative">

              <HiOutlineBookOpen className="mx-auto text-6xl" />

              <h2 className="mt-10 text-4xl md:text-7xl font-black leading-tight">

                The Storm
                <br />
                Is Coming Soon
              </h2>

              <p className="mt-10 max-w-4xl mx-auto text-lg md:text-2xl text-neutral-700 leading-relaxed">

                An unforgettable emotional and spiritual journey
                through heartbreak, destiny,
                silence, healing,
                and the soul that appears
                after everything changes forever.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">

                <Link
                  href="/books"
                  className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-black text-white font-bold hover:scale-105 transition duration-300"
                >
                  Explore Books

                  <HiOutlineArrowRight />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl border border-black/10 hover:bg-black/5 transition duration-300"
                >
                  About Author
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}