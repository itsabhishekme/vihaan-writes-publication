import Link from 'next/link'
import {
  HiOutlineEnvelope,
  HiOutlineBookOpen,
  HiOutlineUserCircle,
  HiOutlineArrowUp,
  HiOutlineSparkles,
  HiOutlineHeart,
} from 'react-icons/hi2'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />

      {/* SEO Hidden Content */}
      <h2 className="sr-only">
        Vihaan Writes official author website footer with books, blog, about, contact, and storytelling platform
      </h2>

      {/* MAIN GRID */}
      <div className="container-main py-20 grid gap-12 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-white text-black flex items-center justify-center font-black text-lg">
              V
            </div>

            <div>
              <h3 className="text-xl font-black tracking-[0.2em]">VIHAAN</h3>
              <p className="text-xs text-neutral-400 tracking-[0.35em] -mt-1">
                WRITES
              </p>
            </div>
          </div>

          <p className="mt-6 text-neutral-400 leading-relaxed max-w-sm">
            Words written before destiny arrived. A premium space for books,
            emotional storytelling, healing reflections, and meaningful writing.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-neutral-300">
            <HiOutlineSparkles />
            Independent Author Platform
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="font-semibold text-white mb-5">Explore</h4>

          <ul className="space-y-3 text-neutral-400">
            <li>
              <Link href="/book" className="hover:text-white transition flex items-center gap-2">
                <HiOutlineBookOpen />
                Books
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-white transition flex items-center gap-2">
                <HiOutlineUserCircle />
                About Author
              </Link>
            </li>

            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog & Articles
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* FEATURED */}
        <div>
          <h4 className="font-semibold text-white mb-5">Featured Book</h4>

          <p className="text-neutral-200 font-medium">
            My Spouse Before I Met Her
          </p>

          <p className="mt-3 text-sm text-neutral-500">
            Karmic clues, dreams, and the echoes of her soul.
          </p>

          <Link
            href="/book"
            className="inline-flex mt-6 px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            View Book
          </Link>
        </div>

        {/* CONTACT + CTA */}
        <div>
          <h4 className="font-semibold text-white mb-5">Connect</h4>

          <a
            href="mailto:hello@vihaanwrites.in"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition"
          >
            <HiOutlineEnvelope />
            hello@vihaanwrites.in
          </a>

          <p className="mt-5 text-sm text-neutral-500 leading-relaxed">
            Open for collaborations, interviews, speaking, and meaningful reader conversations.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-5 text-sm font-semibold hover:text-neutral-300 transition"
          >
            Send Message →
          </Link>

          {/* MINI CTA */}
          <div className="mt-8 p-4 rounded-2xl border border-white/10 bg-neutral-900">
            <p className="text-sm text-neutral-400">
              Get future books & insights
            </p>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mt-3 text-sm font-semibold hover:text-white transition"
            >
              Read Articles
              <HiOutlineArrowUp className="rotate-45" />
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="container-main py-6 flex flex-col md:flex-row gap-4 items-center justify-between">

          <p className="text-sm text-neutral-500 text-center md:text-left">
            © {year} Vihaan Writes. Built with purpose & creativity.
          </p>

          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>

            <a
              href="#top"
              className="flex items-center gap-1 hover:text-white transition"
            >
              Top <HiOutlineArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}