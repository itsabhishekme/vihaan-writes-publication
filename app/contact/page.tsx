import type { Metadata } from 'next'
import Link from 'next/link'
import {
  HiOutlineEnvelope,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUser,
  HiOutlinePaperAirplane,
  HiOutlineArrowRight,
} from 'react-icons/hi2'

export const metadata: Metadata = {
  title: 'Contact | Vihaan Writes',
  description:
    'Contact Vihaan Writes for collaborations, reader messages, interviews, speaking requests, or book related enquiries.',
  keywords: [
    'Contact Vihaan Writes',
    'Author Contact',
    'Book Enquiry',
    'Collaboration',
    'Writer Contact',
  ],
}

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_30%)]" />

      {/* Hero */}
      <section className="container-main py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
            Get In Touch
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-black leading-tight">
            Contact <span className="text-neutral-400">Vihaan Writes</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl">
            For collaborations, interviews, speaking opportunities, reader
            messages, media requests, or book enquiries.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="container-main pb-24 grid md:grid-cols-2 gap-8 items-start">
        {/* Left Info */}
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8">
            <div className="h-14 w-14 rounded-2xl bg-white text-black flex items-center justify-center text-2xl">
              <HiOutlineEnvelope />
            </div>

            <h2 className="mt-6 text-3xl font-black">
              Email
            </h2>

            <p className="mt-4 text-neutral-400 leading-relaxed">
              Reach out directly for business or personal communication.
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
              <HiOutlineChatBubbleLeftRight />
            </div>

            <h2 className="mt-6 text-3xl font-black">
              Response Time
            </h2>

            <p className="mt-4 text-neutral-400 leading-relaxed">
              Most messages receive a response within 1–3 business days.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8">
            <h2 className="text-2xl font-bold">
              Best Topics To Reach Out For
            </h2>

            <ul className="mt-5 space-y-3 text-neutral-400">
              <li>• Book partnerships</li>
              <li>• Media interviews</li>
              <li>• Reader appreciation</li>
              <li>• Event speaking invites</li>
              <li>• Brand collaborations</li>
            </ul>
          </div>
        </div>

        {/* Right Form */}
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-8 md:p-10">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
            Send Message
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Start A Conversation
          </h2>

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
                  className="w-full rounded-2xl border border-white/10 bg-black/40 pl-12 pr-4 py-4 outline-none focus:border-white/30"
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
                  className="w-full rounded-2xl border border-white/10 bg-black/40 pl-12 pr-4 py-4 outline-none focus:border-white/30"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-neutral-400">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none focus:border-white/30 resize-none"
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
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-600">
            Explore More
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            Discover The Writing
          </h2>

          <p className="mt-6 text-neutral-700 max-w-2xl mx-auto">
            Read books, reflections, and stories from Vihaan Writes.
          </p>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 mt-8 px-7 py-4 rounded-2xl bg-black text-white font-semibold hover:scale-105 transition"
          >
            View Book
            <HiOutlineArrowRight />
          </Link>
        </div>
      </section>
    </main>
  )
}