'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiOutlineSparkles } from 'react-icons/hi2'
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
    { name: 'Contact', url: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-xl'
          : 'bg-black/50 backdrop-blur-md border-b border-white/5'
      }`}
      role="banner"
      aria-label="Main Navigation"
    >
      {/* Hidden SEO Text */}
      <h2 className="sr-only">
        Vihaan Writes navigation menu for books, blog, about author and contact
      </h2>

      <div className="container-main h-18 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          title="Vihaan Writes Official Website"
        >
          <div className="h-10 w-10 rounded-2xl bg-white text-black flex items-center justify-center font-black text-lg">
            V
          </div>

          <div>
            <p className="text-lg md:text-xl font-black tracking-[0.2em]">
              VIHAAN
            </p>
            <p className="text-xs text-neutral-400 -mt-1 tracking-[0.35em]">
              WRITES
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-2"
          aria-label="Desktop Navigation"
        >
          {links.map((item) => {
            const active = pathname === item.url

            return (
              <Link
                key={item.name}
                href={item.url}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  active
                    ? 'bg-white text-black'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
                title={item.name}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            title="Read Featured Book"
          >
            <HiOutlineSparkles />
            Read Now
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden h-11 w-11 rounded-xl border border-white/10 flex items-center justify-center text-2xl"
            aria-label="Toggle Menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
          >
            <nav
              className="container-main py-5 flex flex-col gap-2"
              aria-label="Mobile Navigation"
            >
              {links.map((item) => {
                const active = pathname === item.url

                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    className={`px-4 py-3 rounded-2xl transition ${
                      active
                        ? 'bg-white text-black font-semibold'
                        : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                    }`}
                    title={item.name}
                  >
                    {item.name}
                  </Link>
                )
              })}

              <Link
                href="/book"
                className="mt-2 px-4 py-3 rounded-2xl bg-white text-black font-semibold text-center"
                title="Featured Book"
              >
                Read Featured Book
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}