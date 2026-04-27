import type { Metadata } from 'next'
import Link from 'next/link'
import {
  HiOutlineBookOpen,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
} from 'react-icons/hi2'

export const metadata: Metadata = {
  title: 'Book | My Spouse Before I Met Her',
  description:
    'Explore the featured book by Vihaan Writes: My Spouse Before I Met Her — karmic clues, dreams, and the echoes of her soul.',
  keywords: [
    'Vihaan Writes Book',
    'My Spouse Before I Met Her',
    'Indian Author Book',
    'Love Book',
    'Spiritual Book',
    'Relationship Book',
  ],
}

const highlights = [
  'Emotional storytelling with depth',
  'Karmic and spiritual themes',
  'Modern relationship reflections',
  'Meaningful gift for readers',
  'Timeless writing style',
]

const features = [
  {
    title: 'Soulful Narrative',
    text: 'A journey written from the heart before destiny arrived.',
    icon: HiOutlineHeart,
  },
  {
    title: 'Premium Experience',
    text: 'Crafted for readers who love meaningful modern books.',
    icon: HiOutlineSparkles,
  },
  {
    title: 'Reader Favorite',
    text: 'Loved by readers who seek emotional connection in words.',
    icon: HiOutlineStar,
  },
]

export default function BookPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_30%)]" />

      {/* Hero */}
      <section className="container-main py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
            Featured Book
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-black leading-tight">
            My Spouse <br />
            <span className="text-neutral-400">Before I Met Her</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-neutral-300 leading-relaxed">
            Karmic clues, dreams, and the echoes of her soul — a heartfelt book
            exploring love, destiny, and emotional truth before two souls meet.
          </p>

          <div className="mt-8 flex items-center gap-2 text-yellow-400">
            <HiOutlineStar />
            <HiOutlineStar />
            <HiOutlineStar />
            <HiOutlineStar />
            <HiOutlineStar />
            <span className="text-neutral-400 ml-2 text-sm">
              Reader Favorite
            </span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="#buy"
              className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Buy Now
            </Link>

            <Link
              href="#preview"
              className="px-7 py-4 rounded-2xl border border-white/15 hover:bg-white/5 transition"
            >
              Read Preview
            </Link>
          </div>
        </div>

        {/* Right Book Card */}
        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-10 shadow-2xl">
            <div className="aspect-[3/4] rounded-[1.5rem] border border-white/10 bg-black flex items-center justify-center p-8">
              <div className="text-center">
                <HiOutlineBookOpen className="mx-auto text-6xl text-neutral-400" />
                <h3 className="mt-6 text-2xl font-bold leading-tight">
                  My Spouse Before I Met Her
                </h3>
                <p className="mt-4 text-neutral-500 text-sm">
                  by Vihaan Writes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container-main py-8 md:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8 md:p-10">
          <h2 className="text-3xl md:text-5xl font-black">
            Why Readers Love This Book
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-neutral-300"
              >
                <HiOutlineCheckCircle className="text-white text-xl" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container-main py-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
            Inside The Book
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black">
            More Than Words
          </h2>

          <p className="mt-6 text-neutral-400 text-lg">
            A reading experience filled with feeling, insight, and connection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 mt-14">
          {features.map((item) => {
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

      {/* Preview */}
      <section
        id="preview"
        className="container-main py-8 md:py-16"
      >
        <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-10">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
            Preview
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-black">
            Opening Reflection
          </h2>

          <p className="mt-6 text-neutral-300 leading-relaxed text-lg">
            “Some souls are written into our story long before they enter our
            life. We feel them in dreams, silence, and signs we do not yet
            understand.”
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        id="buy"
        className="container-main pb-24"
      >
        <div className="rounded-[2rem] bg-white text-black p-10 md:p-14 text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-600">
            Own The Book
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            Begin The Journey
          </h2>

          <p className="mt-6 text-neutral-700 max-w-2xl mx-auto">
            Add this heartfelt title to your reading collection and experience a
            story written before destiny arrived.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="px-7 py-4 rounded-2xl bg-black text-white font-semibold hover:scale-105 transition"
            >
              Buy on Amazon
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-black/10 font-semibold"
            >
              Bulk / Media Enquiry
              <HiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}