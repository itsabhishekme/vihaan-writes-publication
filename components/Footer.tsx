"use client"

import { useState } from "react"
import Link from "next/link"

import {
  HiOutlineEnvelope,
  HiOutlineBookOpen,
  HiOutlineUserCircle,
  HiOutlineArrowUp,
  HiOutlineSparkles,
  HiOutlineNewspaper,
  HiOutlineChatBubbleLeftRight,
  HiOutlineHeart,
  HiOutlineGlobeAlt,
  HiOutlineMoon,
  HiOutlineDevicePhoneMobile,
  HiOutlineStar,
  HiOutlineBolt,
  HiOutlineFire,
  HiOutlineRocketLaunch,
} from "react-icons/hi2"

import {
  FaInstagram,
  FaThreads,
  FaXTwitter,
  FaFacebook,
  FaYoutube,
  FaGooglePlay,
  FaApple,
  FaSpotify,
  FaMedium,
} from "react-icons/fa6"

export default function Footer() {
  const year = new Date().getFullYear()

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setMessage("Please enter your email")
      return
    }

    try {
      setLoading(true)
      setMessage("")

      await new Promise((res) => setTimeout(res, 1500))

      setMessage("✨ Welcome to the Vihaan Writes universe")
      setEmail("")
    } catch (error) {
      setMessage("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">

      {/* =========================== */}
      {/* BACKGROUND EFFECTS */}
      {/* =========================== */}

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.10),transparent_30%)]" />

      <div className="absolute inset-0 -z-10 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-3xl" />

      {/* =========================== */}
      {/* HERO SECTION */}
      {/* =========================== */}

      <div className="container-main relative pt-24 pb-20 text-center">

        <div className="flex justify-center">

          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-xl">

            <HiOutlineSparkles className="text-purple-400" />

            <span className="text-sm tracking-[0.2em] uppercase text-neutral-300">
              Premium Emotional Storytelling Platform
            </span>

          </div>

        </div>

        <h2 className="mx-auto mt-10 max-w-6xl text-5xl font-black leading-tight md:text-7xl">

          Stories Written
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-white bg-clip-text text-transparent">
            {" "}Before Fate{" "}
          </span>

          Arrived

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg">

          Vihaan Writes is a premium digital sanctuary for dreamers,
          lovers, emotional thinkers, and soulful readers seeking meaningful
          reflections, timeless stories, healing emotions, and deep human connection.

        </p>

        {/* STATS */}

        <div className="mt-16 grid gap-5 md:grid-cols-4">

          {[
            {
              icon: <HiOutlineHeart />,
              title: "Soulful Stories",
              desc: "Emotion-driven writing experience",
            },

            {
              icon: <HiOutlineGlobeAlt />,
              title: "Global Readers",
              desc: "Connecting hearts worldwide",
            },

            {
              icon: <HiOutlineMoon />,
              title: "Healing Reflections",
              desc: "Words crafted for emotional connection",
            },

            {
              icon: <HiOutlineStar />,
              title: "Premium Experience",
              desc: "Luxury storytelling design",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:bg-white/[0.06]"
            >

              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />

              <div className="relative">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-white shadow-2xl">

                  <span className="text-3xl">
                    {item.icon}
                  </span>

                </div>

                <h4 className="mt-6 text-xl font-bold">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* =========================== */}
      {/* NEWSLETTER */}
      {/* =========================== */}

      <div className="container-main pb-24">

        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.05] p-10 md:p-16 backdrop-blur-2xl">

          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10" />

          <div className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-pink-500/20 blur-3xl" />

          <div className="relative z-10">

            <div className="flex justify-center">

              <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 shadow-2xl">

                <HiOutlineRocketLaunch className="text-5xl text-white" />

              </div>

            </div>

            <div className="mt-10 text-center">

              <h3 className="text-4xl font-black md:text-6xl">
                Stay Connected
              </h3>

              <p className="mx-auto mt-6 max-w-3xl text-neutral-400 leading-relaxed md:text-lg">

                Join the Vihaan Writes journey and receive exclusive emotional reflections,
                soulful writings, healing thoughts, upcoming books, and timeless storytelling
                directly inside your inbox.

              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-5"
            >

              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-16 w-full md:w-[450px] rounded-2xl border border-white/10 bg-white/[0.05] px-6 text-white outline-none transition duration-300 focus:border-purple-500/40 focus:bg-white/[0.08]"
              />

              <button
                type="submit"
                disabled={loading}
                className="h-16 rounded-2xl bg-white px-10 font-black text-black transition duration-300 hover:scale-105 active:scale-95"
              >

                {loading ? "Joining..." : "Join Journey"}

              </button>

            </form>

            {message && (
              <p className="mt-6 text-center text-neutral-300">
                {message}
              </p>
            )}

          </div>

        </div>

      </div>

      {/* =========================== */}
      {/* MAIN GRID */}
      {/* =========================== */}

      <div className="container-main grid gap-10 pb-24 md:grid-cols-4">

        {/* ================= BRAND ================= */}

        <div>

          <div className="flex items-center gap-4">

            <div className="relative">

              <div className="absolute inset-0 rounded-[2rem] bg-purple-500/40 blur-xl" />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white text-black shadow-2xl">

                <span className="text-3xl font-black">
                  V
                </span>

              </div>

            </div>

            <div>

              <h3 className="text-3xl font-black tracking-[0.25em]">
                VIHAAN
              </h3>

              <p className="text-xs tracking-[0.4em] text-neutral-500">
                WRITES
              </p>

            </div>

          </div>

          <p className="mt-8 max-w-sm leading-relaxed text-neutral-400">

            A luxury emotional storytelling experience crafted for readers
            who feel deeply, dream endlessly, and seek meaningful connection
            through timeless words and soulful reflections.

          </p>

          {/* SOCIALS */}

          <div className="mt-10 flex flex-wrap items-center gap-4">

            {[
              {
                icon: <FaInstagram />,
                link: "https://instagram.com/itsabhishekme",
              },

              {
                icon: <FaThreads />,
                link: "https://threads.net/@itsabhishekme",
              },

              {
                icon: <FaXTwitter />,
                link: "https://x.com/itsabhishekme",
              },

              {
                icon: <FaFacebook />,
                link: "https://facebook.com",
              },

              {
                icon: <FaYoutube />,
                link: "https://youtube.com",
              },

              {
                icon: <FaSpotify />,
                link: "https://open.spotify.com/show/41IpFA5SUvPrT8ALlHUnr4?si=c9c6190f7bbc4a38",
              },

              {
                icon: <FaMedium />,
                link: "https://medium.com/@itsabhishekme",
              },
            ].map((item, i) => (

              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] text-neutral-400 transition duration-500 hover:-translate-y-2 hover:text-white hover:shadow-[0_20px_50px_rgba(168,85,247,0.18)]"
              >

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />

                <span className="relative text-xl">
                  {item.icon}
                </span>

              </a>

            ))}

          </div>

        </div>

        {/* ================= EXPLORE ================= */}

        <div>

          <h4 className="mb-8 text-2xl font-black">
            Explore
          </h4>

          <div className="space-y-5">

            {[
              {
                icon: <HiOutlineBookOpen />,
                title: "Books",
                desc: "Emotional storytelling collection",
                href: "/book",
              },

              {
                icon: <HiOutlineUserCircle />,
                title: "About",
                desc: "Know the creator behind the vision",
                href: "/about",
              },

              {
                icon: <HiOutlineNewspaper />,
                title: "Blog",
                desc: "Soulful reflections and thoughts",
                href: "/blog",
              },

              {
                icon: <HiOutlineChatBubbleLeftRight />,
                title: "Contact",
                desc: "Meaningful conversations",
                href: "/contact",
              },
            ].map((item, i) => (

              <Link
                key={i}
                href={item.href}
                className="group flex items-center gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 transition duration-500 hover:-translate-y-2 hover:bg-white/[0.06]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-white shadow-2xl">

                  <span className="text-3xl">
                    {item.icon}
                  </span>

                </div>

                <div>

                  <h5 className="text-lg font-bold">
                    {item.title}
                  </h5>

                  <p className="mt-1 text-sm text-neutral-500">
                    {item.desc}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

        {/* ================= EXPERIENCE ================= */}

        <div>

          <h4 className="mb-8 text-2xl font-black">
            Experience
          </h4>

          <div className="space-y-5">

            {[
              {
                icon: <HiOutlineBolt />,
                title: "Fast Performance",
                desc: "Smooth premium user experience",
              },

              {
                icon: <HiOutlineFire />,
                title: "Creative Design",
                desc: "Luxury visual storytelling interface",
              },

              {
                icon: <HiOutlineSparkles />,
                title: "Immersive Reading",
                desc: "Designed for emotional connection",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-white shadow-2xl">

                  <span className="text-3xl">
                    {item.icon}
                  </span>

                </div>

                <h5 className="mt-5 text-xl font-bold">
                  {item.title}
                </h5>

                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* ================= MOBILE APP ================= */}

        <div>

          <h4 className="mb-8 text-2xl font-black">
            Mobile App
          </h4>

          <div className="space-y-5">

            {/* GOOGLE PLAY */}

            <a
              href="#"
              className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(168,85,247,0.18)]"
            >

              <div className="flex items-center gap-5">

                <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white text-black shadow-2xl">

                  <FaGooglePlay className="text-4xl" />

                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                    Download On
                  </p>

                  <h5 className="mt-2 text-2xl font-black">
                    Google Play
                  </h5>

                  <p className="mt-1 text-sm text-neutral-500">
                    Android experience coming soon
                  </p>

                </div>

              </div>

            </a>

            {/* APPLE */}

            <a
              href="#"
              className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,255,255,0.10)]"
            >

              <div className="flex items-center gap-5">

                <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white text-black shadow-2xl">

                  <FaApple className="text-5xl" />

                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                    Available On
                  </p>

                  <h5 className="mt-2 text-2xl font-black">
                    Apple Store
                  </h5>

                  <p className="mt-1 text-sm text-neutral-500">
                    iOS experience launching soon
                  </p>

                </div>

              </div>

            </a>

            {/* EXTRA CARD */}

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-black shadow-2xl">

                <HiOutlineDevicePhoneMobile className="text-4xl" />

              </div>

              <h5 className="mt-5 text-2xl font-black">
                Premium Reading App
              </h5>

              <p className="mt-3 text-sm leading-relaxed text-neutral-400">

                Experience immersive emotional storytelling with a beautifully
                crafted mobile-first reading experience designed for modern readers.

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* =========================== */}
      {/* BOTTOM */}
      {/* =========================== */}

      <div className="border-t border-white/10">

        <div className="container-main flex flex-col items-center justify-between gap-5 py-8 md:flex-row">

          <p className="text-center text-sm text-neutral-500 md:text-left">

            © {year} Vihaan Writes. Crafted with emotion, soul, and timeless storytelling.

          </p>

          <div className="flex items-center gap-6 text-sm text-neutral-500">

            <Link
              href="/privacy"
              className="transition duration-300 hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition duration-300 hover:text-white"
            >
              Terms
            </Link>

            <a
              href="#top"
              className="flex items-center gap-2 transition duration-300 hover:text-white"
            >

              Top
              <HiOutlineArrowUp />

            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}