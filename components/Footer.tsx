"use client"

import { useState } from "react"
import Link from "next/link"
import {
  HiOutlineEnvelope,
  HiOutlineBookOpen,
  HiOutlineUserCircle,
  HiOutlineArrowUp,
  HiOutlineSparkles,
} from "react-icons/hi2"

import {
  FaInstagram,
  FaThreads,
  FaXTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6"

export default function Footer() {
  const year = new Date().getFullYear()

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  // ✅ HANDLE SUBMIT (NEW)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setMessage("Please enter your email")
      return
    }

    try {
      setLoading(true)
      setMessage("")

      // 👉 Replace this with your API later
      await new Promise((res) => setTimeout(res, 1200))

      setMessage("✨ You're now part of the journey")
      setEmail("")
    } catch (err) {
      setMessage("Something went wrong. Try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="relative border-t border-white/10 bg-black overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />
      <div className="absolute inset-0 -z-10 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* 🌠 STORY STRIP */}
      <div className="container-main pt-16 pb-10 text-center">
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
          You didn’t just reach the end of a page.  
          You reached a moment that was always waiting for you.
        </p>
      </div>

      {/* 📩 NEWSLETTER */}
      <div className="container-main pb-16">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14 text-center overflow-hidden group">

          {/* glow animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-20 blur-3xl group-hover:opacity-40 transition duration-700" />

          <h3 className="text-3xl md:text-4xl font-bold">
            Stay Connected to the Journey
          </h3>

          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            Get emotional insights, new writings, and upcoming books directly.
          </p>

          {/* ✅ FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex justify-center gap-4 flex-wrap relative z-10"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 w-[260px] md:w-[320px] transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 active:scale-95 transition disabled:opacity-60"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {/* ✅ MESSAGE */}
          {message && (
            <p className="mt-4 text-sm text-neutral-300 animate-fadeIn">
              {message}
            </p>
          )}
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="container-main pt-10 pb-14 grid gap-12 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-white text-black flex items-center justify-center font-black text-lg shadow-lg">
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

          {/* SOCIAL */}
          <div className="mt-8 flex items-center gap-4">
            {[
              { icon: <FaInstagram />, link: "https://instagram.com/itsabhishekme" },
              { icon: <FaThreads />, link: "https://threads.com/@itsabhishekme" },
              { icon: <FaXTwitter />, link: "https://x.com/itsabhishekme" },
              { icon: <FaFacebook />, link: "https://facebook.com/itsabhishekmeOfficial" },
              { icon: <FaYoutube />, link: "https://www.youtube.com/@itsabhishekme" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-neutral-900 text-neutral-400 border border-white/10 transition hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="font-semibold text-white mb-5">Explore</h4>
          <ul className="space-y-3 text-neutral-400">
            <li>
              <Link href="/book" className="hover:text-white flex items-center gap-2">
                <HiOutlineBookOpen /> Books
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white flex items-center gap-2">
                <HiOutlineUserCircle /> About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* FEATURED */}
        <div>
          <h4 className="font-semibold text-white mb-5">Featured</h4>

          <p className="text-neutral-200 font-medium">
            My Spouse Before I Met Her
          </p>

          <p className="mt-3 text-sm text-neutral-500">
            Karmic clues, dreams, and echoes of love before reality.
          </p>

          <Link
            href="/book"
            className="inline-flex mt-6 px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            View Book
          </Link>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-white mb-5">Connect</h4>

          <a
            href="mailto:hello@vihaanwrites.in"
            className="flex items-center gap-2 text-neutral-400 hover:text-white"
          >
            <HiOutlineEnvelope />
            hello@vihaanwrites.in
          </a>

          <p className="mt-5 text-sm text-neutral-500">
            Open for meaningful collaborations and reader conversations.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-5 text-sm font-semibold hover:text-neutral-300"
          >
            Send Message →
          </Link>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500 text-center md:text-left">
            © {year} Vihaan Writes. Crafted with emotion.
          </p>

          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <a href="#top" className="flex items-center gap-1 hover:text-white">
              Top <HiOutlineArrowUp />
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}