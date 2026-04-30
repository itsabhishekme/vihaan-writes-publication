import type { Metadata } from "next";
import ContactClient from "./ContactClient";

/* ================= SEO METADATA ================= */
export const metadata: Metadata = {
  title: "Contact | Vihaan Writes",
  description:
    "Reach out to Vihaan Writes for collaborations, storytelling, interviews, and meaningful opportunities. Start a meaningful connection.",

  keywords: [
    "Contact Vihaan Writes",
    "Author Collaboration",
    "Writer Contact India",
    "Spiritual Author Contact",
    "Interview Writer India",
    "Vihaan Writes Contact Page",
  ],

  authors: [{ name: "Vihaan Writes" }],

  openGraph: {
    title: "Contact | Vihaan Writes",
    description:
      "Start a meaningful conversation with Vihaan Writes.",
    url: "https://vihaanwrites.in/contact",
    siteName: "Vihaan Writes",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact | Vihaan Writes",
    description:
      "Reach out for collaborations, storytelling, and deeper conversations.",
  },

  alternates: {
    canonical: "https://vihaanwrites.in/contact",
  },
};

/* ================= STRUCTURED DATA ================= */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Vihaan Writes",
  url: "https://vihaanwrites.in/contact",
  description:
    "Contact page for Vihaan Writes — collaborations, interviews, and creative opportunities.",
};

/* ================= PAGE ================= */
export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* 🌌 BACKGROUND LAYERS */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-neutral-950 to-black" />

      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[140px]" />

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04] -z-10 bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* ================= HERO ================= */}
      <section className="container-main pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          Let’s Create <br />
          <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            Something Meaningful
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-neutral-400 text-lg">
          Every message carries intention. Whether you’re here to collaborate,
          connect, or simply express — this space is open for you.
        </p>
      </section>

      {/* ================= CONTACT CLIENT ================= */}
      <section className="relative z-10">
        <ContactClient />
      </section>

      {/* ================= INTENT SELECTION ================= */}
      <section className="container-main py-24">
        <h2 className="text-4xl font-black text-center">
          Why Are You Reaching Out?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {[
            {
              title: "Collaboration",
              desc: "Work together on meaningful projects, writing, or creative ideas.",
            },
            {
              title: "Reader Connection",
              desc: "Share your thoughts, emotions, or reflections from the book.",
            },
            {
              title: "Media & Interviews",
              desc: "Invite for podcasts, features, or storytelling discussions.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 hover:bg-white/10 transition duration-300"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-neutral-400">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= TRUST / SOCIAL PROOF ================= */}
      <section className="container-main py-24 border-t border-white/5 text-center">
        <h2 className="text-4xl font-black">
          Why People Connect
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {[
            {
              title: "Authenticity",
              desc: "Not written for trends — written from truth.",
            },
            {
              title: "Emotional Depth",
              desc: "Words that reach where logic cannot.",
            },
            {
              title: "Spiritual Insight",
              desc: "Exploring unseen dimensions of connection.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-neutral-400">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= BRAND STORY ================= */}
      <section className="container-main py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-black">
            Beyond Contact — It’s Energy Exchange
          </h2>

          <p className="mt-8 text-neutral-400 leading-relaxed">
            This is not just a form. It’s a moment where two journeys intersect.
            Your message carries more than words — it carries intention,
            curiosity, and unseen meaning.
          </p>

          <p className="mt-6 text-neutral-500 text-sm">
            Vihaan Writes is built on emotional truth and spiritual depth —
            every connection strengthens that universe.
          </p>
        </div>
      </section>

      {/* ================= ECOSYSTEM ================= */}
      <section className="container-main pb-24">
        <h2 className="text-3xl font-black text-center">
          Explore Before You Connect
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {[
            "📖 Books & Publications",
            "✍️ Medium Writing Journey",
            "🚀 Upcoming Creative Projects",
          ].map((item) => (
            <div
              key={item}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:scale-105 transition"
            >
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="container-main pb-32 text-center">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-14">

          <h3 className="text-4xl font-bold">
            Your Message Matters
          </h3>

          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            Don’t hesitate. Whether it’s a thought, idea, or collaboration —
            this could be the beginning of something meaningful.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/book"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Explore Books
            </a>

            <a
              href="/about"
              className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
            >
              About Author
            </a>
          </div>
        </div>
      </section>

      {/* ================= SEO STRUCTURED DATA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </main>
  );
}