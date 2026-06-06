import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Heart,
  MoonStar,
  Sparkles,
  Feather,
  Quote,
  Clock3,
  Bookmark,
  PenTool,
  Infinity,
  ShieldCheck,
  Stars,
} from "lucide-react";

export const metadata = {
  title:
    "Stories by Vihaan | Love, Destiny, Astrology & Soulful Reflections",
  description:
    "Explore deeply emotional stories and spiritual reflections written by Vihaan. Books about destiny, waiting, love, astrology, healing, soul connections, and timeless emotional journeys.",
  keywords: [
    "Vihaan books",
    "love and destiny books",
    "astrology books",
    "soulmate stories",
    "spiritual love stories",
    "destiny books",
    "future spouse astrology",
    "healing and love",
    "emotional reflections",
  ],
  openGraph: {
    title:
      "Stories by Vihaan | Love, Destiny, Astrology & Soulful Reflections",
    description:
      "A collection of deeply emotional books exploring destiny, astrology, waiting, healing, and timeless love.",
    images: ["/stories/og-banner.jpg"],
  },
};

const books = [
  {
    id: 1,
    title: "To the One I Loved Before I Knew You",
    subtitle:
      "A Letter to the Woman My Heart Always Knew Was Coming",

    badge: "Soul Letter",

    image: "/stories/book-one.jpg",

    amazon: "https://www.amazon.in/dp/B0FLXVDC36",

    accent:
      "from-rose-500 via-pink-500 to-orange-400",

    glow:
      "shadow-pink-500/30 border-pink-500/20",

    quote:
      "Some souls are remembered by the heart long before they are recognized by the eyes.",

    short:
      "A timeless love letter written across destiny, waiting, hope, and soul recognition.",

    full: `
      To the One I Loved Before I Knew You is not simply a book.
      It is an emotional archive written for the woman the heart
      recognized long before destiny revealed her face.

      Within these pages exists a quiet journey of waiting,
      spiritual faith, emotional longing, and the mysterious feeling
      that some souls know each other before they ever meet.

      This story speaks about unseen emotional bonds,
      dreams that feel familiar, prayers whispered into silence,
      and the unwavering belief that true love always arrives
      at the exact moment it is meant to.

      Written with vulnerability and devotion, the book explores:
      • soul connections beyond time
      • emotional preparation before love arrives
      • healing through hope
      • faith in divine timing
      • the beauty of waiting without losing belief

      It is a sacred reflection for those who have ever loved
      someone they had not yet met.
    `,
  },

  {
    id: 2,
    title: "The Future I Already Knew",

    subtitle:
      "My Family, My Future Spouse, and the Destiny Astrology Revealed Before It Happened",

    badge: "Destiny & Astrology",

    image: "/stories/book-two.jpg",

    amazon: "https://www.amazon.in/dp/B0GSSM874J",

    accent:
      "from-indigo-500 via-violet-500 to-purple-500",

    glow:
      "shadow-violet-500/30 border-violet-500/20",

    quote:
      "Sometimes destiny leaves clues long before life reveals their meaning.",

    short:
      "A reflective journey through astrology, family karma, destiny, waiting, and spiritual growth.",

    full: `
      The Future I Already Knew explores the mysterious connection
      between destiny, family experiences, astrology, patience,
      and personal transformation.

      Written as a deeply personal reflection, the book asks a powerful question:

      What if parts of our future were quietly written long before
      we began understanding our lives?

      Through thoughtful storytelling and introspection,
      Vihaan reflects on:
      • family struggles that built resilience
      • karmic experiences that shaped identity
      • years of emotional waiting
      • spiritual growth through uncertainty
      • astrological patterns connected to future love

      This is not merely a book about astrology.
      It is a book about understanding life itself.

      Across emotional chapters, the reader is invited to explore
      the possibility that waiting is not punishment —
      but preparation for destiny.
    `,
  },
];

const features = [
  {
    icon: Heart,
    title: "Soulful Writing",
    text: "Emotionally intimate reflections written from the heart.",
  },
  {
    icon: MoonStar,
    title: "Destiny & Timing",
    text: "Stories exploring divine timing, waiting, and spiritual connection.",
  },
  {
    icon: Stars,
    title: "Astrology & Life",
    text: "A reflective exploration of astrology and life patterns.",
  },
  {
    icon: Feather,
    title: "Emotional Healing",
    text: "Written for readers searching for hope, meaning, and healing.",
  },
];

export default function StoriesPage() {
  return (
    <main className="relative overflow-hidden bg-[#040816] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[-200px] h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-[140px]" />

        <div className="absolute bottom-0 right-[-200px] h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:28px_28px]" />
      </div>

      {/* HERO */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
              <Sparkles className="h-5 w-5 text-pink-400" />

              <span className="text-sm uppercase tracking-[0.25em] text-gray-300">
                Stories by Vihaan
              </span>
            </div>

            <h1 className="mt-10 text-5xl md:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
              Stories Written
              <span className="block bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                From the Soul
              </span>
            </h1>

            <p className="mt-10 text-lg md:text-2xl text-gray-400 leading-9 max-w-4xl mx-auto">
              A deeply emotional collection of stories exploring destiny,
              waiting, astrology, healing, divine timing, and the quiet
              feeling that some souls are connected long before they meet.
            </p>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-pink-400" />
                  <span className="text-gray-300">
                    Love & Soul Connections
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <MoonStar className="h-5 w-5 text-violet-400" />
                  <span className="text-gray-300">
                    Destiny & Divine Timing
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-indigo-400" />
                  <span className="text-gray-300">
                    Emotional Reflection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="relative z-10 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-gray-400 leading-8">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKS */}
      <section className="relative z-10 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-20">
            {books.map((book, index) => (
              <div
                key={book.id}
                className={`group relative overflow-hidden rounded-[40px] border bg-white/5 backdrop-blur-2xl ${book.glow}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${book.accent} opacity-[0.08]`}
                />

                <div className="relative grid lg:grid-cols-2 gap-12 p-8 lg:p-14">
                  {/* IMAGE SIDE */}
                  <div
                    className={`${
                      index % 2 === 1
                        ? "lg:order-2"
                        : ""
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-[35px] border border-white/10">
                      <Image
                        src={book.image}
                        alt={book.title}
                        width={900}
                        height={1200}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                      <div className="absolute bottom-0 left-0 p-8">
                        <div
                          className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${book.accent} px-5 py-2 text-sm font-semibold`}
                        >
                          <Bookmark className="h-4 w-4" />
                          {book.badge}
                        </div>

                        <h2 className="mt-5 text-3xl md:text-5xl font-black leading-tight">
                          {book.title}
                        </h2>

                        <p className="mt-4 text-gray-300 text-lg leading-8">
                          {book.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT SIDE */}
                  <div
                    className={`flex flex-col justify-center ${
                      index % 2 === 1
                        ? "lg:order-1"
                        : ""
                    }`}
                  >
                    <div className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gray-400">
                      <Clock3 className="h-4 w-4" />
                      Timeless Reflection
                    </div>

                    <div className="mt-8 rounded-[30px] border border-white/10 bg-black/30 p-8">
                      <Quote className="h-12 w-12 text-pink-400 mb-5" />

                      <p className="text-2xl leading-10 italic text-gray-200">
                        “{book.quote}”
                      </p>
                    </div>

                    <p className="mt-8 text-xl text-gray-300 leading-10">
                      {book.short}
                    </p>

                    <div className="mt-10 rounded-[30px] border border-white/10 bg-white/5 p-8">
                      <div className="flex items-center gap-3 mb-5">
                        <PenTool className="h-5 w-5 text-pink-400" />

                        <span className="uppercase tracking-[0.25em] text-sm text-gray-400">
                          About This Story
                        </span>
                      </div>

                      <p className="whitespace-pre-line text-gray-400 leading-9">
                        {book.full}
                      </p>
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-10 flex flex-wrap gap-5">
                      <a
                        href={book.amazon}
                        target="_blank"
                        className={`group/button inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r ${book.accent} px-8 py-5 font-semibold transition-all duration-300 hover:scale-105`}
                      >
                        View on Amazon

                        <ArrowRight className="h-5 w-5 transition-transform group-hover/button:translate-x-1" />
                      </a>

                      <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 font-semibold text-gray-300 transition hover:bg-white/10">
                        Read Reflection
                      </button>
                    </div>

                    {/* MINI STATS */}
                    <div className="mt-10 grid grid-cols-2 gap-5">
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                        <Infinity className="h-8 w-8 text-violet-400 mb-4" />

                        <h4 className="text-xl font-semibold">
                          Timeless Themes
                        </h4>

                        <p className="mt-3 text-gray-400 leading-7">
                          Destiny, soul connection, healing, patience, and
                          emotional growth.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                        <ShieldCheck className="h-8 w-8 text-pink-400 mb-4" />

                        <h4 className="text-xl font-semibold">
                          Deep Reflection
                        </h4>

                        <p className="mt-3 text-gray-400 leading-7">
                          Thoughtful storytelling rooted in emotional honesty
                          and introspection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[45px] border border-white/10 bg-white/5 px-8 py-16 md:px-16 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-indigo-500/10" />

            <div className="relative text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500">
                <MoonStar className="h-12 w-12 text-white" />
              </div>

              <h2 className="mt-10 text-4xl md:text-6xl font-black leading-tight">
                Some Stories
                <span className="block bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                  Are Meant To Find You
                </span>
              </h2>

              <p className="mt-10 max-w-4xl mx-auto text-lg md:text-xl text-gray-400 leading-10">
                These books are written for people who feel deeply,
                wait patiently, search for meaning, believe in divine timing,
                and trust that life quietly unfolds exactly when it should.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 font-semibold text-gray-200 transition hover:bg-white/10"
                >
                  Return Home
                </Link>

                <Link
                  href="/book"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 px-8 py-5 font-semibold text-white transition hover:scale-105"
                >
                  Explore Books

                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}