import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* GLOBAL GRADIENT BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-purple-600/20 blur-[300px] rounded-full"></div>
        <div className="absolute bottom-[-200px] right-[-100px] w-[900px] h-[900px] bg-pink-500/10 blur-[250px] rounded-full"></div>
      </div>

      {/* HERO */}
      <Hero />

      {/* FEATURES */}
      <FeatureSection />

      {/* ABOUT */}
      <section className="container-main py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div className="space-y-6">
            <h2 className="text-6xl font-black leading-tight bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
              Stories Written <br /> Before Destiny
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
              Vihaan Writes is not just content — it's emotional time travel.
              Words written before moments existed, yet felt deeply when they arrive.
            </p>

            <button className="px-10 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 hover:shadow-2xl transition duration-300">
              Enter The Journey
            </button>
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

      {/* TIMELINE */}
      <section className="container-main py-32">
        <h2 className="text-5xl font-black text-center mb-20">
          The Reading Journey
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Feel", desc: "Experience emotions before understanding them." },
            { title: "Recognize", desc: "See your own story hidden in the words." },
            { title: "Realize", desc: "Understand that destiny was already written." }
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

      {/* STATS */}
      <section className="container-main py-24">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { number: "10K+", label: "Readers Connected" },
            { number: "500+", label: "Emotional Stories" },
            { number: "1", label: "Life-Changing Book" }
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

      {/* BOOK SHOWCASE */}
      <section className="container-main py-32">
        <div className="relative rounded-3xl bg-gradient-to-br from-white to-neutral-200 text-black p-16 md:p-24 shadow-2xl overflow-hidden">

          <div className="absolute -top-20 -right-20 w-72 h-72 bg-black/10 blur-3xl rounded-full"></div>

          <h2 className="text-6xl font-black leading-tight">
            My Spouse Before I Met Her
          </h2>

          <p className="mt-6 text-lg text-neutral-700 max-w-2xl leading-relaxed">
            A book written before reality unfolded — capturing dreams,
            emotions, and karmic signals of a love yet to arrive.
          </p>

          <div className="mt-12 flex gap-6 flex-wrap">
            <button className="px-10 py-4 bg-black text-white rounded-xl font-semibold hover:opacity-90">
              Start Reading
            </button>
            <button className="px-10 py-4 border border-black rounded-xl font-semibold hover:bg-black hover:text-white transition">
              Explore Details
            </button>
          </div>
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section className="py-24 text-center border-y border-white/10">
        <p className="text-3xl italic text-neutral-300 max-w-3xl mx-auto">
          “The most powerful stories are the ones you feel before they happen.”
        </p>
        <p className="mt-4 text-neutral-500">— Vihaan</p>
      </section>

      {/* AUTHOR */}
      <section className="container-main py-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div className="p-12 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h2 className="text-5xl font-black">About Vihaan</h2>
            <p className="mt-6 text-neutral-400 leading-relaxed">
              Writing not from imagination, but from something deeper —
              intuition, dreams, and karmic memory.
            </p>
          </div>

          <div className="text-neutral-500 italic text-xl">
            “I didn’t write stories.
            I remembered them before they happened.”
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-main py-32">
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

      {/* EMAIL CAPTURE */}
      <section className="container-main py-32 text-center">
        <h2 className="text-5xl font-black">
          Stay Connected to the Journey
        </h2>

        <p className="mt-6 text-neutral-400">
          Get new stories, emotional insights, and exclusive writings.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-main py-32">
        <div className="rounded-3xl p-16 bg-gradient-to-r from-purple-500 to-pink-500 text-black text-center shadow-2xl">

          <h2 className="text-6xl font-black">
            Begin Your Reading Journey
          </h2>

          <p className="mt-6 text-black/80 text-lg">
            Join readers who feel before life happens.
          </p>

          <button className="mt-10 px-10 py-4 bg-black text-white rounded-xl font-semibold hover:opacity-90">
            Join Now
          </button>
        </div>
      </section>

    </main>
  )
}