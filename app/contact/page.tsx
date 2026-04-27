import type { Metadata } from 'next'
import Link from 'next/link'
import {
  HiOutlineEnvelope,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUser,
  HiOutlinePaperAirplane,
  HiOutlineArrowRight,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineClock,
  HiOutlineBookOpen,
} from 'react-icons/hi2'

export const metadata: Metadata = {
  title: 'Contact | Vihaan Writes',
  description:
    'Contact Vihaan Writes for collaborations, interviews, media requests, speaking opportunities, and book enquiries.',
  keywords: [
    'Contact Vihaan Writes',
    'Author Contact',
    'Writer Collaboration',
    'Interview Request',
    'Book Enquiry',
  ],
  openGraph: {
    title: 'Contact | Vihaan Writes',
    description:
      'Get in touch with Vihaan Writes for opportunities and enquiries.',
    type: 'website',
  },
}

const reasons = [
  'Book partnerships & publishing discussions',
  'Media interviews & podcast invitations',
  'Speaking opportunities & events',
  'Brand collaborations',
  'Reader appreciation & personal messages',
  'Creative business enquiries',
]

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_30%)]" />

      {/* Hero */}
      <section className="container-main py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
            <HiOutlineSparkles />
            Let&apos;s Connect
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
            Contact <span className="text-neutral-400">Vihaan Writes</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-neutral-300 leading-relaxed">
            Reach out for collaborations, interviews, events, reader messages,
            and meaningful opportunities.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="container-main pb-20 grid md:grid-cols-2 gap-8 items-start">
        {/* Left Side */}
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8">
            <div className="h-14 w-14 rounded-2xl bg-white text-black flex items-center justify-center text-2xl">
              <HiOutlineEnvelope />
            </div>

            <h2 className="mt-6 text-3xl font-black">
              Direct Email
            </h2>

            <p className="mt-4 text-neutral-400 leading-relaxed">
              Best for business enquiries and professional communication.
            </p>

            <a
              href="mailto:hello@vihaanwrites.in"
              className="inline-flex mt-6 text-white font-semibold hover:text-neutral-300 transition"
            >
              hello@vihaanwrites.in
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8">
            <div className="h-14 w-14 rounded-2xl bg-white text-black flex items-center justify-center text-2xl">
              <HiOutlineClock />
            </div>

            <h2 className="mt-6 text-3xl font-black">
              Response Time
            </h2>

            <p className="mt-4 text-neutral-400 leading-relaxed">
              Most responses are sent within 1 to 3 business days.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8">
            <div className="flex items-center gap-3">
              <HiOutlineChatBubbleLeftRight className="text-3xl text-neutral-300" />

              <h2 className="text-3xl font-black">
                Reach Out For
              </h2>
            </div>

            <div className="mt-6 space-y-3">
              {reasons.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-black/30 px-4 py-3 text-neutral-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8 md:p-10">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
            Send Message
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black">
            Start A Conversation
          </h2>

          <p className="mt-4 text-neutral-400">
            Every great opportunity begins with a message.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="text-sm text-neutral-400">
                Full Name
              </label>

              <div className="mt-2 relative">
                <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-xl" />

                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 pl-12 pr-4 py-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-neutral-400">
                Email Address
              </label>

              <div className="mt-2 relative">
                <HiOutlineEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-xl" />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 pl-12 pr-4 py-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-neutral-400">
                Subject
              </label>

              <input
                type="text"
                placeholder="Partnership / Interview / Reader Message"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-400">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Send Message
              <HiOutlinePaperAirplane />
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="container-main pb-24">
        <div className="rounded-[2rem] bg-white text-black p-10 md:p-14 text-center">
          <HiOutlineBookOpen className="mx-auto text-4xl" />

          <p className="uppercase tracking-[0.35em] text-sm text-neutral-600 mt-4">
            Explore More
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            Discover The Writing
          </h2>

          <p className="mt-6 text-neutral-700 max-w-2xl mx-auto">
            Read books, reflections, and transformational stories from Vihaan
            Writes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-black text-white font-semibold hover:scale-105 transition"
            >
              View Books
              <HiOutlineArrowRight />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border border-black/10 font-semibold"
            >
              About Author
              <HiOutlineGlobeAlt />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}