import Hero from '@/components/Hero'
import Link from "next/link"
import FeatureSection from '@/components/FeatureSection'
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Stars,
  Quote,
  Heart,
  Eye,
  PenTool,
  Infinity,
  Globe,
  Layers,
  MoveRight,
} from "lucide-react"

export default function Home() {
  const journeySteps = [
    {
      title: "Feel",
      desc: "Experience emotions before understanding them.",
      icon: Heart,
    },
    {
      title: "Recognize",
      desc: "See your own story hidden in the words.",
      icon: Eye,
    },
    {
      title: "Realize",
      desc: "Understand destiny was already written.",
      icon: Infinity,
    },
  ]

  const stats = [
    { number: "10K+", label: "Readers Connected" },
    { number: "500+", label: "Stories Written" },
    { number: "2", label: "Transformational Books" },
  ]

  const testimonials = [
    "It felt like my future was already written.",
    "Deeply emotional and strangely accurate.",
    "This book understands something I can’t explain.",
  ]

  const philosophies = [
    {
      title: "Intuitive Writing",
      desc: "Stories born from emotion, dreams, and spiritual memory.",
      icon: PenTool,
    },
    {
      title: "Karmic Echoes",
      desc: "Words that feel familiar before life reveals why.",
      icon: Stars,
    },
    {
      title: "Soul Connection",
      desc: "Readers recognize parts of themselves within every chapter.",
      icon: Globe,
    },
    {
      title: "Destiny Unfolding",
      desc: "Moments written emotionally before reality arrives.",
      icon: Layers,
    },
  ]

  return (
    <>
      <main className="relative overflow-hidden bg-black text-white">

        {/* 🌌 GLOBAL BACKGROUND */}
        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-purple-600/20 blur-[300px] rounded-full animate-pulse"></div>

          <div className="absolute bottom-[-150px] right-[-100px] w-[800px] h-[800px] bg-pink-500/10 blur-[220px] rounded-full"></div>

          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-500/10 blur-[180px] rounded-full"></div>

          <div className="absolute bottom-[10%] left-[20%] w-96 h-96 bg-violet-500/10 blur-[200px] rounded-full"></div>

          {/* grid */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

        </div>

        {/* 🌟 HERO */}
        <Hero />

        {/* 🚀 FEATURES */}
        <FeatureSection />

        {/* 📖 ABOUT */}
        <section className="container-main py-32 relative z-10">

          <div className="grid md:grid-cols-2 gap-20 items-center">

            <div className="space-y-8">

              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <span className="text-sm tracking-wider uppercase text-neutral-300">
                  Vihaan Writes
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                Stories Written
                <br />
                Before Destiny
              </h1>

              <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
                Vihaan Writes is not just storytelling — It&apos;s emotional foresight.
                Words written before moments exist, yet recognized when life unfolds.
              </p>

              <div className="flex gap-5 flex-wrap">

                <Link href="/journey">
                  <span className="group px-10 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 hover:shadow-2xl transition duration-300 inline-flex items-center gap-3">
                    Enter The Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                  </span>
                </Link>

                <Link href="/about">
                  <span className="px-10 py-4 border border-white/10 rounded-xl font-semibold bg-white/5 hover:bg-white/10 transition duration-300 inline-flex items-center gap-3">
                    Explore Vision
                  </span>
                </Link>

              </div>

            </div>

            <div className="relative group">

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>

              <div className="relative p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl group-hover:scale-105 transition duration-500 overflow-hidden">

                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>

                <Quote className="w-12 h-12 text-purple-400 mb-8" />

                <p className="text-2xl italic text-neutral-300 leading-relaxed">
                  “Some souls meet twice — once in words, and once in life.”
                </p>

                <div className="mt-10 flex items-center justify-between">

                  <p className="text-sm text-neutral-500">— Vihaan</p>

                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                    <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                    <span className="w-3 h-3 rounded-full bg-white/30"></span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* 🌠 PHILOSOPHY */}
        <section className="container-main py-28">

          <div className="text-center mb-20">

            <h2 className="text-5xl md:text-6xl font-black">
              Beyond Traditional Writing
            </h2>

            <p className="mt-6 text-neutral-400 max-w-2xl mx-auto text-lg">
              Every sentence is crafted from intuition, emotion,
              spiritual reflection, and unseen connection.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {philosophies.map((item, i) => {
              const Icon = item.icon

              return (
                <div
                  key={i}
                  className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:scale-105 transition duration-500 overflow-hidden"
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>

                  <div className="relative z-10">

                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:rotate-6 transition">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </div>
              )
            })}

          </div>

        </section>

        {/* 🧭 JOURNEY STEPS */}
        <section className="container-main py-32 relative">

          <div className="text-center mb-20">

            <h2 className="text-5xl md:text-6xl font-black">
              The Reading Journey
            </h2>

            <p className="mt-6 text-neutral-400 text-lg">
              Every reader experiences these emotional stages.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-12">

            {journeySteps.map((step, i) => {
              const Icon = step.icon

              return (
                <div
                  key={i}
                  className="relative p-10 rounded-2xl bg-white/5 border border-white/10 hover:scale-110 hover:border-purple-500 transition duration-500 group overflow-hidden"
                >

                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition rounded-2xl"></div>

                  <div className="relative z-10">

                    <div className="flex items-center justify-between mb-8">

                      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-purple-400" />
                      </div>

                      <span className="text-5xl font-black text-white/10">
                        0{i + 1}
                      </span>

                    </div>

                    <h3 className="text-3xl font-bold relative z-10">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-neutral-400 relative z-10 leading-relaxed">
                      {step.desc}
                    </p>

                  </div>

                </div>
              )
            })}

          </div>

        </section>

        {/* 📊 STATS */}
        <section className="container-main py-28">

          <div className="grid md:grid-cols-3 gap-10 text-center">

            {stats.map((item, i) => (
              <div
                key={i}
                className="group relative p-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-500 hover:scale-105 overflow-hidden"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/10 to-pink-500/10 transition"></div>

                <div className="relative z-10">

                  <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {item.number}
                  </h3>

                  <p className="mt-4 text-neutral-400 text-lg">
                    {item.label}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* 📚 BOOK SHOWCASE */}
        <section className="container-main py-32">

          <div className="relative rounded-[40px] bg-gradient-to-br from-white via-neutral-100 to-neutral-200 text-black p-16 md:p-24 shadow-2xl overflow-hidden group">

            <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full group-hover:scale-110 transition duration-700"></div>

            <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/10 bg-black/5 backdrop-blur-xl mb-8">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold tracking-wider uppercase">
                  Featured Book
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                My Spouse Before I Met Her
              </h2>

              <p className="mt-8 text-lg text-neutral-700 max-w-2xl leading-relaxed">
                A book written before reality unfolded — capturing dreams,
                karmic signals, and the echoes of a love yet to arrive.
              </p>

              <div className="mt-12 flex gap-6 flex-wrap">

                <Link
                  href="https://www.flipkart.com/my-spouse-before-met-her-karmic-clues-dreams-echoes-soul/p/itme369d1e7ca422?pid=9798898547820"
                  target="_blank"
                >
                  <span className="group px-10 py-4 bg-black text-white rounded-xl font-semibold hover:scale-105 transition inline-flex items-center gap-3">
                    Buy on Flipkart
                    <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                  </span>
                </Link>

                <Link
                  href="https://medium.com/@itsabhishekme/my-spouse-before-i-met-her-b2f7f118625f"
                  target="_blank"
                >
                  <span className="px-10 py-4 border border-black rounded-xl font-semibold hover:bg-black hover:text-white transition inline-flex items-center gap-3">
                    Read Story
                  </span>
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* 💬 QUOTE */}
        <section className="py-24 text-center border-y border-white/10 relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-6">

            <Quote className="w-16 h-16 text-purple-400 mx-auto mb-10" />

            <p className="text-3xl md:text-4xl italic text-neutral-300 leading-relaxed">
              “The most powerful stories are the ones you feel before they happen.”
            </p>

            <p className="mt-6 text-neutral-500 text-lg">
              — Vihaan
            </p>

          </div>

        </section>

        {/* 👤 AUTHOR */}
        <section className="container-main py-32">

          <div className="grid md:grid-cols-2 gap-20 items-center">

            <div className="relative p-12 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-500 overflow-hidden">

              <div className="absolute top-0 right-0 w-52 h-52 bg-purple-500/10 blur-3xl rounded-full"></div>

              <div className="relative z-10">

                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                    <PenTool className="w-6 h-6 text-purple-400" />
                  </div>

                  <span className="uppercase tracking-[0.2em] text-sm text-neutral-400">
                    Author Vision
                  </span>
                </div>

                <h2 className="text-5xl font-black">
                  About Vihaan
                </h2>

                <p className="mt-6 text-neutral-400 leading-relaxed text-lg">
                  Writing not from imagination — but from intuition, dreams,
                  and karmic memory. Every word is a glimpse of something already written in time.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-6">

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="font-bold text-xl">
                      Emotional
                    </h4>
                    <p className="mt-2 text-neutral-400 text-sm">
                      Deep human connection through words.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="font-bold text-xl">
                      Spiritual
                    </h4>
                    <p className="mt-2 text-neutral-400 text-sm">
                      Soulful storytelling beyond logic.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            <div className="space-y-8">

              <div className="text-neutral-500 italic text-3xl leading-relaxed">
                “I didn’t write stories.
                <br />
                I remembered them before they happened.”
              </div>

              <div className="h-px bg-gradient-to-r from-purple-500 to-transparent"></div>

              <p className="text-neutral-400 text-lg leading-relaxed">
                Vihaan Writes explores the mysterious connection between
                intuition, destiny, and emotional foresight — transforming
                personal experiences into universally felt stories.
              </p>

            </div>

          </div>

        </section>

        {/* ⭐ TESTIMONIALS */}
        <section className="container-main py-32">

          <div className="text-center mb-20">

            <h2 className="text-5xl md:text-6xl font-black">
              What Readers Feel
            </h2>

            <p className="mt-6 text-neutral-400 text-lg">
              Emotional responses from readers around the world.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-12">

            {testimonials.map((text, i) => (
              <div
                key={i}
                className="group relative p-10 rounded-2xl bg-neutral-900 border border-neutral-800 hover:scale-105 hover:border-purple-500 transition duration-500 overflow-hidden"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/10 to-pink-500/10 transition"></div>

                <div className="relative z-10">

                  <Quote className="w-10 h-10 text-purple-400 mb-6" />

                  <p className="text-neutral-300 text-lg leading-relaxed">
                    “{text}”
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* 🚀 FINAL CTA */}
        <section className="container-main pt-24 pb-20">

          <div className="relative rounded-[40px] p-16 md:p-20 bg-gradient-to-r from-purple-500 to-pink-500 text-black text-center shadow-2xl overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_30%)]"></div>

            <div className="relative z-10">

              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                Begin Your
                <br />
                Reading Journey
              </h2>

              <p className="mt-8 text-black/80 text-lg max-w-2xl mx-auto leading-relaxed">
                Join readers who feel their future before it unfolds.
                Discover words that already know your emotions.
              </p>

              <Link href="https://www.amazon.in/dp/B0GSSM874J" target="_blank">
                <span className="group mt-10 inline-flex items-center gap-3 px-10 py-5 bg-black text-white rounded-xl font-semibold hover:scale-105 transition">
                  Start Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </span>
              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  )
}