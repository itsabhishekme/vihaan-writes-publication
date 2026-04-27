import type { Metadata } from 'next'
import Link from 'next/link'
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
    'Discover Vihaan Writes, a premium creative identity built on soulful books, emotional storytelling, transformation, and timeless words.',
  keywords: [
    'Vihaan Writes',
    'About Vihaan Writes',
    'Author Website',
    'Indian Author',
    'Books',
    'Storytelling',
  ],
  openGraph: {
    title: 'About Vihaan Writes',
    description:
      'Creative identity behind books, reflections, and transformational storytelling.',
    type: 'website',
  },
}

const values = [
  {
    title: 'Purposeful Writing',
    text: 'Words created to move hearts, challenge minds, and remain with readers.',
    icon: HiOutlineBookOpen,
  },
  {
    title: 'Human Emotion',
    text: 'Stories rooted in love, healing, longing, growth, and truth.',
    icon: HiOutlineHeart,
  },
  {
    title: 'Creative Identity',
    text: 'A modern premium platform built on originality and depth.',
    icon: HiOutlineSparkles,
  },
]

const milestones = [
  'Published books for reflective readers',
  'Built a premium creative identity',
  'Focused on emotional storytelling',
  'Growing a timeless author platform',
]

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)]" />

      {/* Hero */}
      <section className="container-main py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
              About The Author
            </p>

            <h1 className="mt-5 text-5xl md:text-7xl font-black leading-tight">
              Vihaan <span className="text-neutral-400">Writes</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl">
              Vihaan Writes is more than a name. It is a creative identity built
              around books, soulful reflections, emotional truth, and stories
              that transform readers.
            </p>

            <p className="mt-6 text-neutral-400 leading-relaxed">
              Some people write to be seen. Others write to be remembered.
              Vihaan Writes exists to create words that stay with people.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition text-center"
              >
                Explore Books
              </Link>

              <Link
                href="/contact"
                className="px-7 py-4 rounded-2xl border border-white/15 hover:bg-white/5 transition text-center"
              >
                Contact Author
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-10 shadow-2xl">
            <HiOutlineUserCircle className="text-6xl text-neutral-400" />

            <h2 className="mt-6 text-3xl md:text-5xl font-black">
              Identity With Purpose
            </h2>

            <p className="mt-6 text-neutral-400 leading-relaxed">
              A writer brand is not just design. It is the emotional experience
              readers feel when they encounter the work.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-black/40 p-5">
                <p className="text-3xl font-black">2+</p>
                <p className="text-sm text-neutral-500 mt-1">
                  Published Books
                </p>
              </div>

              <div className="rounded-2xl bg-black/40 p-5">
                <p className="text-3xl font-black">∞</p>
                <p className="text-sm text-neutral-500 mt-1">
                  Future Stories
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="container-main py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8 md:p-10">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500">
              Journey
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-black">
              Why This Exists
            </h2>

            <p className="mt-6 text-neutral-400 leading-relaxed">
              Vihaan Writes was created from the belief that words can heal,
              awaken truth, and help readers understand their own hearts.
            </p>

            <p className="mt-5 text-neutral-400 leading-relaxed">
              It is not only about publishing books. It is about building work
              that matters.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8 md:p-10">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500">
              Signature Style
            </p>

            <ul className="mt-6 space-y-4 text-neutral-300">
              <li>• Emotional storytelling</li>
              <li>• Transformational themes</li>
              <li>• Premium presentation</li>
              <li>• Honest reflections</li>
              <li>• Timeless writing</li>
            </ul>
          </div>
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
            Writing with intention, originality, and emotional honesty.
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

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Milestones */}
      <section className="container-main py-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-10">
          <div className="flex items-center gap-3">
            <HiOutlineLightBulb className="text-3xl text-neutral-300" />

            <h2 className="text-3xl md:text-5xl font-black">
              Growth Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {milestones.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-black/40 p-5 flex items-center gap-3"
              >
                <HiOutlineStar className="text-white" />
                <span className="text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global */}
      <section className="container-main py-20">
        <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-10 text-center">
          <HiOutlineGlobeAlt className="mx-auto text-4xl text-neutral-400" />

          <h2 className="mt-6 text-4xl md:text-6xl font-black">
            Writing Beyond Borders
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-neutral-400 text-lg leading-relaxed">
            Love, healing, heartbreak, growth, and purpose connect readers
            everywhere.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-main pb-24">
        <div className="rounded-[2rem] bg-white text-black p-10 md:p-14 text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-600">
            Begin Reading
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            Experience The Words
          </h2>

          <p className="mt-6 text-neutral-700 max-w-2xl mx-auto">
            Explore books written with soul, purpose, and emotional depth.
          </p>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 mt-8 px-7 py-4 rounded-2xl bg-black text-white font-semibold hover:scale-105 transition"
          >
            View Books
            <HiOutlineArrowRight />
          </Link>
        </div>
      </section>
    </main>
  )
}