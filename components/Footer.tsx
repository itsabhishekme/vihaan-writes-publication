import Link from 'next/link'
import {
  HiOutlineEnvelope,
  HiOutlineBookOpen,
  HiOutlineUserCircle,
  HiOutlineArrowUp,
} from 'react-icons/hi2'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative mt-24 border-t border-white/10 bg-black overflow-hidden"
      aria-label="Website Footer"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)]" />

      {/* SEO Hidden Content */}
      <h2 className="sr-only">
        Vihaan Writes official footer links for books, blog, about author,
        contact, and premium storytelling platform
      </h2>

      <div className="container-main py-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-white text-black flex items-center justify-center font-black text-lg">
              V
            </div>

            <div>
              <h3 className="text-xl font-black tracking-[0.2em]">VIHAAN</h3>
              <p className="text-xs text-neutral-400 tracking-[0.35em] -mt-1">
                WRITES
              </p>
            </div>
          </div>

          <p className="mt-5 text-neutral-400 leading-relaxed max-w-sm">
            Words written before destiny arrived. A premium home for soulful
            books, emotional storytelling, and meaningful reflections.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">
            Independent Author Platform
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold text-white mb-5">Explore</h4>

          <ul className="space-y-3 text-neutral-400">
            <li>
              <Link
                href="/book"
                className="hover:text-white transition inline-flex items-center gap-2"
              >
                <HiOutlineBookOpen />
                Featured Book
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-white transition inline-flex items-center gap-2"
              >
                <HiOutlineUserCircle />
                About Author
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="hover:text-white transition"
              >
                Articles & Insights
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Featured Book */}
        <div>
          <h4 className="font-semibold text-white mb-5">Featured Title</h4>

          <p className="text-neutral-300 leading-relaxed">
            My Spouse Before I Met Her
          </p>

          <p className="mt-3 text-sm text-neutral-500">
            Karmic clues, dreams, and the echoes of her soul.
          </p>

          <Link
            href="/book"
            className="inline-flex mt-5 px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            Read More
          </Link>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-5">Connect</h4>

          <a
            href="mailto:hello@vihaanwrites.in"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition"
          >
            <HiOutlineEnvelope />
            hello@vihaanwrites.in
          </a>

          <p className="mt-5 text-sm text-neutral-500 leading-relaxed">
            Available for collaborations, interviews, speaking requests, and
            reader conversations.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-5 text-sm font-semibold hover:text-neutral-300 transition"
          >
            Send Message →
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-5 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-sm text-neutral-500 text-center md:text-left">
            © {year} Vihaan Writes. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-neutral-500">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>

            <a
              href="#top"
              className="inline-flex items-center gap-1 hover:text-white transition"
              aria-label="Back to top"
            >
              Top <HiOutlineArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}