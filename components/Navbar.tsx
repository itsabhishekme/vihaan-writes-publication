'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'
import {
  HiOutlineSparkles,
  HiArrowRight,
} from 'react-icons/hi2'
import { FaGooglePlay } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()

  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Book', url: '/book' },
    { name: 'Blog', url: '/blog' },
    { name: 'Journey', url: '/journey' },
    { name: 'Contact', url: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
        }`}
      role="banner"
      aria-label="Main Navigation"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_25%)]" />

      {/* Hidden SEO */}
      <h2 className="sr-only">
        Vihaan Writes official navigation for books, blog, about author,
        spiritual writing and modern literature
      </h2>

      <div className="container-main h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="group flex items-center gap-4"
          title="Vihaan Writes Official Website"
        >
          {/* Logo Icon */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-white to-neutral-300 text-black flex items-center justify-center font-black text-xl shadow-2xl">
              V
            </div>
          </div>

          {/* Logo Text */}
          <div>
            <h1 className="text-lg md:text-xl font-black tracking-[0.25em] leading-none">
              VIHAAN
            </h1>

            <p className="text-[10px] md:text-xs text-neutral-400 tracking-[0.4em] mt-1">
              WRITES
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className="hidden lg:flex items-center gap-2"
          aria-label="Desktop Navigation"
        >
          {links.map((item) => {
            const active = pathname === item.url

            return (
              <Link
                key={item.name}
                href={item.url}
                title={item.name}
                className={`relative px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 overflow-hidden group ${active
                    ? 'text-black bg-white shadow-xl'
                    : 'text-neutral-300 hover:text-white'
                  }`}
              >
                {!active && (
                  <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl" />
                )}

                <span className="relative z-10">
                  {item.name}
                </span>
              </Link>
            )
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          {/* Read Now */}
          <Link
            href="/book"
            className="hidden md:inline-flex group items-center gap-2 rounded-2xl bg-white px-6 py-3 text-black font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
            title="Read Featured Book"
          >
            <HiOutlineSparkles className="text-lg" />

            <span>Read Now</span>

            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Android App */}
          <a
            href="https://m5seiikuxyzlci4v.public.blob.vercel-storage.com/app-debug.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl hover:scale-110 transition-all duration-300"
            title="Download Android App"
          >
            <FaGooglePlay className="text-xl" />
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative h-12 w-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-2xl text-white"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={open ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <HiX /> : <HiMenu />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl"
          >
            <nav
              className="container-main py-6 flex flex-col gap-3"
              aria-label="Mobile Navigation"
            >
              {links.map((item) => {
                const active = pathname === item.url

                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    title={item.name}
                    className={`px-5 py-4 rounded-2xl transition-all duration-300 ${active
                        ? 'bg-white text-black font-semibold shadow-xl'
                        : 'text-neutral-300 bg-white/[0.03] hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    {item.name}
                  </Link>
                )
              })}

              {/* Mobile Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <Link
                  href="/book"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 text-black font-semibold"
                >
                  <HiOutlineSparkles />
                  Read Now
                </Link>

                <a
                  href="https://m5seiikuxyzlci4v.public.blob.vercel-storage.com/app-debug.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl hover:scale-110 transition-all duration-300"
                  title="Download Android App"
                >
                  <FaGooglePlay className="text-xl" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}