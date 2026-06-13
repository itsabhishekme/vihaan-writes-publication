import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "The Side No One Ever Saw | Upcoming Memoir by Vihaan",
  description:
    "Discover The Side No One Ever Saw, an upcoming memoir by Vihaan exploring hidden pain, family wounds, emotional struggles, identity, healing, resilience, and self-discovery.",
  keywords: [
    "The Side No One Ever Saw",
    "Vihaan",
    "Vihaan Writes",
    "upcoming memoir",
    "personal memoir",
    "family wounds",
    "emotional struggles",
    "self discovery",
    "healing journey",
    "mental health",
    "identity",
    "life lessons",
    "personal growth",
    "memoir book",
    "upcoming book",
  ],
  authors: [{ name: "Vihaan" }],
  creator: "Vihaan",
  publisher: "Vihaan Writes",
  metadataBase: new URL("https://vihaanwrites.in"),
  alternates: {
    canonical: "https://vihaanwrites.in/upcoming",
  },
  openGraph: {
    title: "The Side No One Ever Saw",
    description:
      "The Hidden Pain, Family Wounds, Emotional Struggles, and My Search for Who I Am.",
    url: "https://vihaanwrites.in/upcoming",
    siteName: "Vihaan Writes",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/the-side-no-one-ever-saw.jpg",
        width: 1200,
        height: 1600,
        alt: "The Side No One Ever Saw by Vihaan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Side No One Ever Saw",
    description:
      "The Hidden Pain, Family Wounds, Emotional Struggles, and My Search for Who I Am.",
    images: ["/images/the-side-no-one-ever-saw.jpg"],
  },
};

export default function UpcomingPage() {
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "The Side No One Ever Saw",
    author: {
      "@type": "Person",
      name: "Vihaan",
    },
    description:
      "A deeply personal memoir exploring hidden pain, family wounds, emotional struggles, resilience, healing, and the lifelong search for identity.",
    image:
      "https://vihaanwrites.in/images/the-side-no-one-ever-saw.jpg",
    genre: [
      "Memoir",
      "Personal Growth",
      "Psychology",
      "Self Discovery",
      "Mental Health",
    ],
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Vihaan Writes",
    },
    url: "https://vihaanwrites.in/upcoming",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bookSchema),
        }}
      />

      <main className="bg-black text-white overflow-hidden">
        {/* HERO */}

        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 bg-white/5 blur-3xl rounded-full" />

                  <Image
                    src="/images/the-side-no-one-ever-saw.jpg"
                    alt="The Side No One Ever Saw Book Cover"
                    width={520}
                    height={800}
                    priority
                    className="relative rounded-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
                  />
                </div>
              </div>

              <div>
                <span className="inline-flex items-center rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-2 text-sm tracking-widest uppercase text-amber-300">
                  Upcoming Memoir
                </span>

                <h1 className="mt-8 text-5xl md:text-7xl font-serif leading-[1.05]">
                  The Side
                  <br />
                  No One
                  <br />
                  Ever Saw
                </h1>

                <p className="mt-8 text-xl text-gray-300 leading-relaxed">
                  The Hidden Pain, Family Wounds, Emotional
                  Struggles, and My Search for Who I Am.
                </p>

                <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <p className="mt-10 text-lg text-gray-400 leading-9">
                  Every life contains stories that remain invisible.
                  Behind achievements, responsibilities, smiles, and
                  expectations are chapters no one else ever reads.
                </p>

                <p className="mt-6 text-lg text-gray-400 leading-9">
                  This memoir is an honest exploration of those hidden
                  chapters. It is a journey through childhood wounds,
                  family expectations, loneliness, emotional struggles,
                  identity, resilience, healing, and the lifelong
                  search for belonging.
                </p>

                <div className="mt-12 flex flex-wrap gap-4">
                  <span className="px-5 py-3 rounded-full border border-white/10 bg-white/5">
                    Memoir
                  </span>

                  <span className="px-5 py-3 rounded-full border border-white/10 bg-white/5">
                    Self Discovery
                  </span>

                  <span className="px-5 py-3 rounded-full border border-white/10 bg-white/5">
                    Emotional Healing
                  </span>

                  <span className="px-5 py-3 rounded-full border border-white/10 bg-white/5">
                    Personal Growth
                  </span>
                </div>

                <div className="mt-12 flex flex-wrap gap-5">
                  <button className="px-8 py-4 rounded-xl bg-white text-black font-medium transition hover:scale-105">
                    Coming Soon
                  </button>

                  <Link
                    href="/book"
                    className="px-8 py-4 rounded-xl border border-white/15 hover:bg-white hover:text-black transition"
                  >
                    Explore Books
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT BOOK */}

        <section className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm uppercase tracking-[0.3em] text-gray-500">
                About The Book
              </span>

              <h2 className="mt-5 text-4xl md:text-5xl font-serif">
                The Story Behind The Silence
              </h2>

              <p className="mt-8 text-gray-400 text-lg leading-9">
                Some wounds leave no visible scars. Some struggles are
                fought entirely within. Some questions follow us for
                years before we find the courage to ask them aloud.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-20">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
                <h3 className="text-2xl font-serif">
                  What This Book Explores
                </h3>

                <ul className="mt-8 space-y-5 text-gray-400 leading-8">
                  <li>• Childhood memories and early struggles</li>
                  <li>• Family wounds and emotional burdens</li>
                  <li>• Identity, belonging, and self-worth</li>
                  <li>• Loneliness and silent battles</li>
                  <li>• Growth through adversity</li>
                  <li>• Healing and self-understanding</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
                <h3 className="text-2xl font-serif">
                  Why It Matters
                </h3>

                <p className="mt-8 text-gray-400 leading-9">
                  This book is not simply a collection of memories.
                  It is an attempt to understand how experiences shape
                  identity and how healing begins when hidden truths
                  are finally acknowledged.
                </p>

                <p className="mt-6 text-gray-400 leading-9">
                  Readers who have ever felt unseen, misunderstood,
                  emotionally overwhelmed, or disconnected from
                  themselves may find parts of their own story within
                  these pages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THEMES */}

        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-serif">
                Core Themes
              </h2>

              <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
                The emotional and human experiences explored
                throughout the memoir.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {[
                "Identity",
                "Healing",
                "Resilience",
                "Family",
                "Memory",
                "Growth",
                "Loneliness",
                "Purpose",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 p-8 bg-black/30"
                >
                  <h3 className="text-xl font-medium">{item}</h3>

                  <p className="mt-4 text-gray-500 leading-7">
                    A central thread woven throughout the journey of
                    self-discovery and reflection.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE */}

        <section className="border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 py-32 text-center">
            <blockquote className="text-3xl md:text-5xl font-serif leading-relaxed text-gray-200">
              “The hardest stories to tell are often the ones that
              define us the most.”
            </blockquote>

            <p className="mt-10 text-gray-500 tracking-[0.3em] uppercase">
              — Vihaan
            </p>
          </div>
        </section>

        {/* AUTHOR */}

        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-28 text-center">
            <h2 className="text-4xl md:text-5xl font-serif">
              About Vihaan
            </h2>

            <p className="mt-8 text-gray-400 leading-9 text-lg">
              Vihaan writes about memory, destiny, identity,
              relationships, emotional resilience, and the hidden
              experiences that shape human lives. Through deeply
              personal storytelling and reflection, his work seeks to
              explore the questions many people carry but rarely speak
              aloud.
            </p>

            <p className="mt-8 text-gray-400 leading-9 text-lg">
              The Side No One Ever Saw continues that journey by
              examining the unseen layers of personal history and the
              search for meaning within them.
            </p>

            <Link
              href="/"
              className="inline-flex mt-12 px-8 py-4 rounded-xl border border-white/15 hover:bg-white hover:text-black transition"
            >
              Visit Vihaan Writes
            </Link>
          </div>
        </section>

        {/* CTA */}

        <section className="border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center">
            <h2 className="text-4xl md:text-6xl font-serif">
              A Story Waiting To Be Told
            </h2>

            <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto leading-9">
              A memoir about hidden struggles, emotional truths,
              family wounds, healing, resilience, and the lifelong
              search for identity.
            </p>

            <div className="mt-12">
              <button className="px-10 py-5 text-lg rounded-xl bg-white text-black font-medium hover:scale-105 transition">
                Coming Soon
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}