"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useCallback, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { HiMenu, HiX } from "react-icons/hi";
import { HiOutlineSparkles } from "react-icons/hi2";

/* ================= TYPES ================= */

type NavItem = {
  name: string;
  url: string;
};

/* ================= NAVIGATION ================= */

const links: NavItem[] = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Book", url: "/book" },
  { name: "Stories", url: "/stories" },
  { name: "Blog", url: "/blog" },
  { name: "Journey", url: "/journey" },
  { name: "Contact", url: "/contact" },
];

/* ================= COMPONENT ================= */

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  /* ================= SCROLL EFFECT ================= */

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled =
        window.scrollY > 10;

      setScrolled((prev) =>
        prev !== isScrolled
          ? isScrolled
          : prev
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* ================= BODY LOCK ================= */

  useEffect(() => {
    document.body.style.overflow =
      open ? "hidden" : "";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [open]);

  /* ================= HELPERS ================= */

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  /* ================= ACTIVE LINK ================= */

  const isActive = (url: string) => {
    if (url === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(url);
  };

  /* ================= UI ================= */

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-[999] w-full transition-all duration-500 ${scrolled
            ? "border-b border-white/10 bg-black/75 shadow-[0_8px_40px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
            : "bg-transparent"
          }`}
      >
        {/* BACKGROUND */}

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_25%)]" />

        {/* CONTAINER */}

        <div className="container-main flex h-20 items-center justify-between px-4 sm:px-6">

          {/* LOGO */}

          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-neutral-300 text-lg font-black text-black shadow-2xl md:h-12 md:w-12 md:text-xl">
                V
              </div>

            </div>

            <div className="leading-none">
              <h1 className="text-base font-black tracking-[0.25em] md:text-xl">
                VIHAAN
              </h1>

              <p className="mt-1 text-[9px] tracking-[0.4em] text-neutral-400 md:text-xs">
                WRITES
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-2 lg:flex">

            {links.map((item) => {
              const active =
                isActive(item.url);

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={closeMenu}
                  className={`group relative overflow-hidden rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-300 ${active
                      ? "bg-white text-black shadow-xl"
                      : "text-neutral-300 hover:text-white"
                    }`}
                >
                  {!active && (
                    <span className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition duration-300 group-hover:opacity-100" />
                  )}

                  <span className="relative z-10">
                    {item.name}
                  </span>
                </Link>
              );
            })}

          </nav>

          {/* ACTIONS */}

          <div className="flex items-center gap-3">

            {/* READ NOW */}

            <Link
              href="/book"
              onClick={closeMenu}
              className="group hidden items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-black shadow-2xl transition-all duration-300 hover:scale-105 md:inline-flex"
            >
              <HiOutlineSparkles className="text-lg transition-transform duration-300 group-hover:rotate-12" />

              <span>Read Now</span>
            </Link>

            {/* MOBILE BUTTON */}

            <button
              type="button"
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 lg:hidden"
            >
              <AnimatePresence mode="wait">

                <motion.div
                  key={open ? "close" : "menu"}
                  initial={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
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
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.25,
              }}
              className="border-t border-white/10 bg-black/95 backdrop-blur-2xl lg:hidden"
            >
              <nav className="container-main flex flex-col gap-3 px-4 py-6">

                {links.map((item) => {
                  const active =
                    isActive(item.url);

                  return (
                    <Link
                      key={item.name}
                      href={item.url}
                      onClick={closeMenu}
                      className={`rounded-2xl px-5 py-4 text-sm font-medium transition-all duration-300 ${active
                          ? "bg-white text-black shadow-xl"
                          : "bg-white/[0.03] text-neutral-300 hover:bg-white/10 hover:text-white"
                        }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* MOBILE READ NOW */}

                <div className="mt-3">

                  <Link
                    href="/book"
                    onClick={closeMenu}
                    className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
                  >
                    <HiOutlineSparkles className="transition-transform duration-300 group-hover:rotate-12" />

                    Read Now
                  </Link>

                </div>

              </nav>
            </motion.div>
          )}

        </AnimatePresence>

      </header>

      {/* SPACER */}

      <div className="h-20 w-full" />
    </>
  );
}