import Hero from '@/components/Hero'
import Link from "next/link"
import FeatureSection from '@/components/FeatureSection'
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <main className="relative overflow-hidden bg-black text-white">

        {/* 🌌 GLOBAL BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-purple-600/20 blur-[300px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-150px] right-[-100px] w-[800px] h-[800px] bg-pink-500/10 blur-[220px] rounded-full"></div>
        </div>

        {/* 🌟 HERO */}
        <Hero />

        {/* 🚀 FEATURES */}
        <FeatureSection />

        {/* 📖 ABOUT */}
        <section className="container-main py-28 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            <div className="space-y-6">
              <h1 className="text-6xl font-black leading-tight bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                Stories Written <br /> Before Destiny
              </h1>

              <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
                Vihaan Writes is not just storytelling — it's emotional foresight.
                Words written before moments exist, yet recognized when life unfolds.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link href="/journey">
                  <span className="px-10 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 hover:shadow-2xl transition duration-300 inline-block">
                    Enter The Journey
                  </span>
                </Link>

                <Link href="https://vihaan-writes.vercel.app/" target="_blank">
                  <span className="px-10 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white hover:text-black transition">
                    Visit Website
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-20 group-hover:opacity-40 transition"></div>

              <div className="relative p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl group-hover:scale-105 transition duration-500">
                <p className="text-2xl italic text-neutral-300 leading-relaxed">
                  “Some souls meet twice — once in words, and once in life.”
                </p>
                <p className="mt-6 text-sm text-neutral-500">— Vihaan</p>
              </div>
            </div>

          </div>
        </section>

        {/* 🧭 JOURNEY STEPS */}
        <section className="container-main py-28">
          <h2 className="text-5xl font-black text-center mb-20">
            The Reading Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Feel", desc: "Experience emotions before understanding them." },
              { title: "Recognize", desc: "See your own story hidden in the words." },
              { title: "Realize", desc: "Understand destiny was already written." }
            ].map((step, i) => (
              <div
                key={i}
                className="relative p-10 rounded-2xl bg-white/5 border border-white/10 hover:scale-110 hover:border-purple-500 transition duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition rounded-2xl"></div>

                <h3 className="text-3xl font-bold relative z-10">{step.title}</h3>
                <p className="mt-4 text-neutral-400 relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 📊 STATS */}
        <section className="container-main py-24">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { number: "10K+", label: "Readers Connected" },
              { number: "500+", label: "Stories Written" },
              { number: "1", label: "Transformational Book" }
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition hover:scale-105"
              >
                <h3 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {item.number}
                </h3>
                <p className="mt-4 text-neutral-400">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 📚 BOOK SHOWCASE */}
        <section className="container-main py-28">
          <div className="relative rounded-3xl bg-gradient-to-br from-white via-neutral-100 to-neutral-200 text-black p-16 md:p-24 shadow-2xl overflow-hidden group">

            <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full group-hover:scale-110 transition duration-700"></div>

            <h2 className="text-6xl font-black leading-tight">
              My Spouse Before I Met Her
            </h2>

            <p className="mt-6 text-lg text-neutral-700 max-w-2xl leading-relaxed">
              A book written before reality unfolded — capturing dreams,
              karmic signals, and the echoes of a love yet to arrive.
            </p>

            <div className="mt-12 flex gap-6 flex-wrap">

              <Link
                href="https://www.flipkart.com/my-spouse-before-met-her-karmic-clues-dreams-echoes-soul/p/itme369d1e7ca422?pid=9798898547820"
                target="_blank"
              >
                <span className="px-10 py-4 bg-black text-white rounded-xl font-semibold hover:scale-105 transition">
                  Buy on Flipkart
                </span>
              </Link>

              <Link
                href="https://medium.com/@itsabhishekme/my-spouse-before-i-met-her-b2f7f118625f"
                target="_blank"
              >
                <span className="px-10 py-4 border border-black rounded-xl font-semibold hover:bg-black hover:text-white transition">
                  Read Story
                </span>
              </Link>

            </div>
          </div>
        </section>

        {/* 💬 QUOTE */}
        <section className="py-20 text-center border-y border-white/10">
          <p className="text-3xl italic text-neutral-300 max-w-3xl mx-auto">
            “The most powerful stories are the ones you feel before they happen.”
          </p>
          <p className="mt-4 text-neutral-500">— Vihaan</p>
        </section>

        {/* 👤 AUTHOR */}
        <section className="container-main py-28">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            <div className="p-12 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <h2 className="text-5xl font-black">About Vihaan</h2>
              <p className="mt-6 text-neutral-400 leading-relaxed">
                Writing not from imagination — but from intuition, dreams,
                and karmic memory. Every word is a glimpse of something already written in time.
              </p>
            </div>

            <div className="text-neutral-500 italic text-xl">
              “I didn’t write stories. I remembered them before they happened.”
            </div>

          </div>
        </section>

        {/* ⭐ TESTIMONIALS */}
        <section className="container-main py-28">
          <h2 className="text-5xl font-black text-center mb-20">
            What Readers Feel
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              "It felt like my future was already written.",
              "Deeply emotional and strangely accurate.",
              "This book understands something I can’t explain."
            ].map((text, i) => (
              <div
                key={i}
                className="p-10 rounded-2xl bg-neutral-900 border border-neutral-800 hover:scale-105 hover:border-purple-500 transition"
              >
                <p className="text-neutral-300 text-lg">“{text}”</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🚀 FINAL CTA */}
        <section className="container-main pt-24 pb-16">
          <div className="rounded-3xl p-16 bg-gradient-to-r from-purple-500 to-pink-500 text-black text-center shadow-2xl">

            <h2 className="text-6xl font-black">
              Begin Your Reading Journey
            </h2>

            <p className="mt-6 text-black/80 text-lg">
              Join readers who feel their future before it unfolds.
            </p>

            <Link href="https://www.amazon.in/dp/B0GSSM874J" target="_blank">
              <span className="mt-10 inline-block px-10 py-4 bg-black text-white rounded-xl font-semibold hover:scale-105 transition">
                Start Now
              </span>
            </Link>

          </div>
        </section>

      </main>

      {/* 📊 Analytics */}
      <Analytics />
    </>
  )
}