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
        {/* CINEMATIC STORY EXPERIENCE SECTION */}
        {/* ========================================= */}

        <section
          className="container-main relative overflow-hidden pb-40 pt-10"
          aria-labelledby="cinematic-story-heading"
        >
          {/* ========================================= */}
          {/* SEO CONTENT */}
          {/* ========================================= */}

          <div className="sr-only">
            Vihaan Writes emotional storytelling section focused on heartbreak,
            emotional healing, soulful transformation, destiny, self-discovery,
            cinematic literature, immersive reading experience, luxury storytelling,
            emotional journeys, poetic writing, and spiritual love stories.
          </div>

          {/* ========================================= */}
          {/* GLOBAL BACKGROUND EFFECTS */}
          {/* ========================================= */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[200px]" />

            <div className="absolute -left-20 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[180px]" />

            <div className="absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[150px]" />
          </div>

          {/* ========================================= */}
          {/* MAIN CONTAINER */}
          {/* ========================================= */}

          <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent backdrop-blur-3xl shadow-[0_0_80px_rgba(255,255,255,0.05)]">
            {/* Decorative Overlay */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            {/* Animated Glow Lines */}
            <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-pink-400/50 to-transparent" />

            <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-purple-400/50 to-transparent" />

            {/* ========================================= */}
            {/* CONTENT WRAPPER */}
            {/* ========================================= */}

            <div className="relative z-10 px-8 py-20 md:px-20 md:py-28">
              {/* ========================================= */}
              {/* TOP HERO */}
              {/* ========================================= */}

              <div className="mx-auto max-w-6xl text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-6 py-3 text-sm font-medium tracking-wide text-neutral-200 backdrop-blur-xl">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 text-white shadow-lg">
                    <HiOutlineBolt className="text-lg" />
                  </span>

                  <span>
                    Cinematic Emotional Storytelling Experience
                  </span>
                </div>

                {/* Main Heading */}
                <h2
                  id="cinematic-story-heading"
                  className="mx-auto mt-12 max-w-6xl text-5xl font-black leading-[0.92] tracking-tight text-white md:text-7xl xl:text-[96px]"
                >
                  When The
                  <br />

                  <span className="bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent">
                    Heart Finally
                  </span>

                  <br />

                  Learns Silence
                </h2>

                {/* Sub Heading */}
                <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-neutral-400 md:text-2xl">
                  A immersive storytelling experience exploring heartbreak,
                  emotional collapse, healing, destiny, soulful rebirth, and the quiet
                  transformation that begins after every storm disappears.
                </p>

                {/* Hero Buttons */}
                <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
                  <button className="group relative overflow-hidden rounded-full bg-white px-9 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    <span className="relative z-10">
                      Begin The Journey
                    </span>

                    <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-white to-purple-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </button>

                  <button className="rounded-full border border-white/15 bg-white/5 px-9 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-pink-400/40 hover:bg-white/10">
                    Explore Stories
                  </button>
                </div>
              </div>

              {/* ========================================= */}
              {/* STORY GRID */}
              {/* ========================================= */}

              <div className="mt-28 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
                {/* ========================================= */}
                {/* LEFT STORY */}
                {/* ========================================= */}

                <div className="space-y-8">
                  {[
                    "There is a moment in every life when the noise finally stops.",
                    "Not the noise of the world — that continues endlessly.",
                    "The silence I speak of is different.",
                    "It is the silence that arrives after heartbreak has already taken everything from you.",
                    "After the emotional storms are over.",
                    "After the chaos disappears.",
                    "After the people who once shaped your world become distant memories.",
                    "After your soul becomes too tired to pretend anymore.",
                    "After your heart finally accepts what your mind spent years denying.",
                    "That is where transformation begins.",
                  ].map((line, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:border-pink-500/30 hover:bg-white/[0.06] hover:shadow-[0_0_50px_rgba(236,72,153,0.12)]"
                    >
                      {/* Side Glow */}
                      <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-400 opacity-70" />

                      {/* Hover Glow */}
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute -right-20 top-0 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />
                      </div>

                      <div className="relative z-10 flex items-start gap-5">
                        {/* Number */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-sm font-bold text-white">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* Text */}
                        <p className="text-lg leading-relaxed text-neutral-300 md:text-2xl">
                          {line}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ========================================= */}
                {/* RIGHT SIDEBAR */}
                {/* ========================================= */}

                <div className="relative">
                  <div className="sticky top-32 overflow-hidden rounded-[38px] border border-white/10 bg-black/30 p-10 backdrop-blur-3xl">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10" />

                    <div className="relative z-10">
                      {/* Animated Dots */}
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-pink-400 animate-pulse" />

                        <div className="h-3 w-3 rounded-full bg-purple-400 animate-pulse delay-75" />

                        <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse delay-150" />
                      </div>

                      {/* Sidebar Heading */}
                      <h3 className="mt-8 text-4xl font-black leading-tight text-white">
                        Three Storms.
                        <br />
                        One Soul.
                      </h3>

                      {/* Divider */}
                      <div className="mt-8 h-px w-full bg-gradient-to-r from-white/20 to-transparent" />

                      {/* Story Paragraphs */}
                      <div className="mt-8 space-y-7 text-lg leading-relaxed text-neutral-300">
                        <p>
                          Three women.
                          <br />
                          Three emotional earthquakes.
                          <br />
                          Three chapters that transformed everything.
                        </p>

                        <p>
                          But this story is not about destruction.
                        </p>

                        <p>
                          It is about what remains after destruction.
                        </p>

                        <p>
                          Because sometimes destiny waits until you are completely
                          broken before sending the soul capable of healing you.
                        </p>

                        <p>
                          Some people arrive to teach you pain.
                          Others arrive to teach you peace.
                        </p>
                      </div>

                      {/* Quote Box */}
                      <div className="relative mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl" />

                        <div className="relative z-10">
                          <div className="text-6xl text-pink-400/60">“</div>

                          <p className="-mt-5 text-xl italic leading-relaxed text-neutral-200">
                            Some souls enter your life to destroy illusions.
                            Others arrive to rebuild your heart.
                          </p>

                          <div className="mt-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
                            — Vihaan Writes
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="mt-10 grid grid-cols-3 gap-4">
                        {[
                          {
                            number: "03",
                            label: "Storms",
                          },
                          {
                            number: "01",
                            label: "Destiny",
                          },
                          {
                            number: "∞",
                            label: "Emotions",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
                          >
                            <div className="text-3xl font-black text-white">
                              {item.number}
                            </div>

                            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
                              {item.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================= */}
              {/* FEATURE CARDS */}
              {/* ========================================= */}

              <div className="mt-32">
                <div className="text-center">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-xs uppercase tracking-[0.3em] text-neutral-400">
                    Emotional Experience
                  </span>

                  <h3 className="mt-8 text-4xl font-black text-white md:text-6xl">
                    Crafted To Feel
                    <br />
                    Like A Movie
                  </h3>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                  {[

                    {
                      title: "Soul-Stirring Writing",
                      desc: "Deep emotional storytelling that touches the heart and awakens the soul.",
                    },
                    {
                      title: "Heartfelt Experiences",
                      desc: "Meaningful words woven with emotions, memories, pain, and healing.",
                    },
                    {
                      title: "Emotional Healing",
                      desc: "Stories exploring heartbreak, silence, love, loss, and inner transformation.",
                    },
                    {
                      title: "Spiritual Awakening",
                      desc: "Journeys inspired by destiny, karma, self-discovery, and life-changing emotions.",
                    },

                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/30 hover:bg-white/[0.06]"
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 text-2xl text-white">
                          ✦
                        </div>

                        <h4 className="mt-8 text-2xl font-bold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-5 text-base leading-relaxed text-neutral-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ========================================= */}
              {/* FINAL CTA */}
              {/* ========================================= */}

              <div className="relative mt-36 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 p-12 md:p-20">
                {/* Overlay */}
                <div className="absolute inset-0 backdrop-blur-2xl" />

                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[140px]" />

                <div className="relative z-10 mx-auto max-w-5xl text-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-5 py-2 text-sm text-neutral-300">
                    ✦ Healing Begins Here
                  </span>

                  <h3 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
                    The Most Beautiful
                    <br />
                    Chapters Begin
                    <br />

                    <span className="bg-gradient-to-r from-pink-200 via-white to-purple-300 bg-clip-text text-transparent">
                      After Collapse
                    </span>
                  </h3>

                  <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-neutral-300 md:text-2xl">
                    Every heartbreak leaves behind a hidden doorway.
                    Every silence carries the possibility of rebirth.
                    And every broken soul still holds the power to love again.
                  </p>

                  {/* CTA Buttons */}
                  <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
                    <button className="rounded-full bg-white px-10 py-5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.35)]">
                      Start Reading
                    </button>

                    <button className="rounded-full border border-white/15 bg-white/5 px-10 py-5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-pink-400/40 hover:bg-white/10">
                      Discover More
                    </button>
                  </div>
                </div>
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
                  href="/book"
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