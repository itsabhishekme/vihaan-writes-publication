"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useCallback, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { HiArrowRight, HiMenu, HiOutlineFilm, HiX } from "react-icons/hi";
import { HiOutlineSparkles } from "react-icons/hi2";

/* ================= TYPES ================= */

type NavItem = {
  name: string;
  url: string;
  children?: NavItem[];
};

/* ================= NAVIGATION ================= */

const links: NavItem[] = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Book", url: "/book" },

  {
    name: "Projects",
    url: "/projects",
    children: [
      {
        name: "Before Her Name Existed",
        url: "/before-her-name-existed",
      },
      {
        name: "The Human Archive",
        url: "/the-human-archive",
      },
      {
        name: "Letters Never Sent",
        url: "/letters-never-sent",
      },
      {
        name: "Echoes of Destiny",
        url: "/echoes-of-destiny",
      },
      {
        name: "The Alchemy of Becoming",
        url: "/the-alchemy-of-becoming",
      },

    ],
  },

  { name: "Stories", url: "/stories" },
  { name: "Blog", url: "/blog" },
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

              <Image
                src="/logo.png"
                alt="Vihaan Writes Logo"
                width={48}
                height={48}
                priority
                className="relative h-11 w-11 rounded-2xl object-cover shadow-2xl md:h-12 md:w-12"
              />

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
              const active = isActive(item.url);

              if (item.children?.length) {
                return (
                  <div
                    key={item.name}
                    className="group relative"
                  >
                    <Link
                      href={item.url}
                      className={`relative flex items-center rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-300 ${active
                        ? "bg-white text-black shadow-xl"
                        : "text-neutral-300 hover:text-white"
                        }`}
                    >
                      {!active && (
                        <span className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition duration-300 group-hover:opacity-100" />
                      )}

                      <span className="relative z-10 flex items-center gap-2">
                        {item.name}

                        <svg
                          className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </Link>

                    {/* DROPDOWN */}

                    <div
                      className="
              invisible absolute left-0 top-full z-[9999]
              mt-3 w-80
              translate-y-2 opacity-0
              transition-all duration-300
              group-hover:visible
              group-hover:translate-y-0
              group-hover:opacity-100
            "
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-2xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.url}
                            className="
                    block border-b border-white/5
                    px-5 py-4 text-sm text-neutral-300
                    transition-all duration-200
                    hover:bg-white/5
                    hover:text-white
                    last:border-b-0
                  "
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={closeMenu}
                  className={`group relative rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-300 ${active
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

          {/* RIGHT CTA + DOCUMENTARY LINK */}
          <div className="hidden md:flex items-center gap-3">
            {/* Documentary Button */}
            <Link
              href="/soulfire-chronicles-production"
              onClick={closeMenu}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/15 hover:shadow-[0_10px_30px_rgba(255,120,50,0.25)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-400/10 to-orange-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>

                <span>Documentary</span>
              </span>
            </Link>

            {/* Submit Story Button */}
            <Link
              href="/submit-story"
              onClick={closeMenu}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-[0_10px_35px_rgba(255,120,50,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_45px_rgba(255,120,50,0.6)]"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="relative flex items-center gap-2">
                <HiOutlineSparkles className="text-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125" />
                <span>Submit Story</span>
              </span>
            </Link>
          </div>

          {/* MOBILE MENU ITEM */}
          <Link
            href="/soulfire-chronicles-production"
            onClick={closeMenu}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all duration-300 hover:border-orange-400/30 hover:bg-white/10 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>

            <span className="font-medium">Documentary</span>
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

              {/* MOBILE Submit Story */}

              <div className="mt-3">

                <Link
                  href="/submit-story"
                  onClick={closeMenu}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
                >
                  <HiOutlineSparkles className="transition-transform duration-300 group-hover:rotate-12" />

                  Submit Story
                </Link>

              </div>

            </nav>
          </motion.div>
        )}

      </AnimatePresence>

    </header >

      {/* SPACER */ }

      < div className = "h-20 w-full" />
    </>
  );
}