"use client";

import Link from "next/link";

import {
  useEffect,
  useState,
  type MouseEvent,
} from "react";

import { usePathname } from "next/navigation";

import {
  HiMenu,
  HiX,
} from "react-icons/hi";

import {
  HiOutlineSparkles,
} from "react-icons/hi2";

import { FaGooglePlay } from "react-icons/fa";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { QRCodeSVG } from "qrcode.react";

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
  { name: "Blog", url: "/blog" },
  { name: "Journey", url: "/journey" },
  { name: "Contact", url: "/contact" },
];

/* ================= COMPONENT ================= */

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] =
    useState<boolean>(false);

  const [scrolled, setScrolled] =
    useState<boolean>(false);

  /* FIXED SCANNER STATE */

  const [showScanner, setShowScanner] =
    useState<boolean>(false);

  /* ================= SCROLL ================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* ================= HELPERS ================= */

  const closeMenu = () => {
    setOpen(false);
  };

  const toggleMenu = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    setOpen((prev) => !prev);
  };

  /* ================= APK URL ================= */

  const apkUrl =
    "https://m5seiikuxyzlci4v.public.blob.vercel-storage.com/Android%20Build/app-debug.apk";

  /* ================= UI ================= */

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${scrolled
            ? "border-b border-white/10 bg-black/70 shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
            : "bg-transparent"
          }`}
      >
        {/* BACKGROUND */}

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_25%)]" />

        {/* CONTAINER */}

        <div className="container-main flex h-20 items-center justify-between">
          {/* LOGO */}

          <Link
            href="/"
            className="group flex items-center gap-4"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-neutral-300 text-xl font-black text-black shadow-2xl">
                V
              </div>
            </div>

            <div>
              <h1 className="text-lg font-black tracking-[0.25em] md:text-xl">
                VIHAAN
              </h1>

              <p className="mt-1 text-[10px] tracking-[0.4em] text-neutral-400 md:text-xs">
                WRITES
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-2 lg:flex">
            {links.map((item) => {
              const active =
                pathname === item.url;

              return (
                <Link
                  key={item.name}
                  href={item.url}
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

          {/* RIGHT ACTIONS */}

          <div className="flex items-center gap-3">
            {/* READ NOW */}

            <Link
              href="/book"
              className="group hidden items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-black shadow-2xl transition-all duration-300 hover:scale-105 md:inline-flex"
            >
              <HiOutlineSparkles className="text-lg" />

              <span>Read Now</span>
            </Link>

            {/* ANDROID APP */}

            <button
              onClick={() =>
                setShowScanner(true)
              }
              className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl transition-all duration-300 hover:scale-110 md:flex"
            >
              <FaGooglePlay className="text-xl" />
            </button>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              onClick={toggleMenu}
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white backdrop-blur-xl lg:hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={
                    open
                      ? "close"
                      : "menu"
                  }
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
                  {open ? (
                    <HiX />
                  ) : (
                    <HiMenu />
                  )}
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
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="border-t border-white/10 bg-black/95 backdrop-blur-2xl lg:hidden"
            >
              <nav className="container-main flex flex-col gap-3 py-6">
                {links.map((item) => {
                  const active =
                    pathname === item.url;

                  return (
                    <Link
                      key={item.name}
                      href={item.url}
                      onClick={closeMenu}
                      className={`rounded-2xl px-5 py-4 transition-all duration-300 ${active
                          ? "bg-white font-semibold text-black shadow-xl"
                          : "bg-white/[0.03] text-neutral-300 hover:bg-white/10 hover:text-white"
                        }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* MOBILE BUTTONS */}

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Link
                    href="/book"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 font-semibold text-black"
                  >
                    <HiOutlineSparkles />

                    Read Now
                  </Link>

                  <button
                    onClick={() =>
                      setShowScanner(true)
                    }
                    className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 px-4 py-4 font-semibold text-white shadow-xl"
                  >
                    <FaGooglePlay />

                    Android
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* QR SCANNER MODAL */}

      <AnimatePresence>
        {showScanner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-xl px-6"
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
                y: 40,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
            >
              {/* CLOSE */}

              <button
                onClick={() =>
                  setShowScanner(false)
                }
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-red-500"
              >
                ✕
              </button>

              {/* CONTENT */}

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 p-4 shadow-lg">
                  <FaGooglePlay className="text-3xl text-white" />
                </div>

                <h2 className="text-2xl font-bold text-white">
                  Scan To Download
                </h2>

                <p className="mt-2 text-sm text-white/70">
                  Scan QR code with your phone
                </p>

                {/* QR */}

                <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/20 bg-white p-5 shadow-2xl">
                  <QRCodeSVG
                    value={apkUrl}
                    size={220}
                  />

                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: 220 }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                    className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-green-500 to-transparent"
                  />
                </div>

                {/* DOWNLOAD */}

                <a
                  href={apkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <FaGooglePlay />

                  Direct Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}