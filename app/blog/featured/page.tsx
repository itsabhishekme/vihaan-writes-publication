import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineArrowLeft,
  HiOutlineSparkles,
} from "react-icons/hi2";

export default function FeaturedStory() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]" />

      {/* ✨ GLOW */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] -translate-x-1/2 -z-10" />

      {/* 🖼 HERO */}
      <div className="relative w-full h-[65vh]">
        <Image
          src="/featured.jpg"
          alt="Featured Story"
          fill
          priority
          className="object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
      </div>

      {/* 🔙 BACK */}
      <div className="absolute top-8 left-6 z-10">
        <Link href="/blog" className="flex items-center gap-2 text-neutral-300 hover:text-white">
          <HiOutlineArrowLeft /> Back
        </Link>
      </div>

      {/* ✨ CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-24 -mt-40 relative z-10">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-5 py-2 border border-white/10 rounded-full text-sm text-neutral-300 backdrop-blur-xl">
          <HiOutlineSparkles />
          Featured Story
        </div>

        {/* TITLE */}
        <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
          Words Written <span className="text-neutral-500">Before Destiny</span> Arrived
        </h1>

        {/* INTRO */}
        <p className="mt-6 text-xl text-neutral-400 max-w-2xl">
          Some stories are not written after life happens —
          they are written before destiny reveals why.
        </p>

        {/* STORY */}
        <article className="mt-16 space-y-10 text-lg leading-relaxed text-neutral-300">

          {/* SECTION 1 */}
          <p className="text-2xl text-white font-medium">
            Some stories begin before we understand them.
          </p>

          <p>
            There is a strange silence that exists before certain moments in life.
            Not emptiness — but a quiet preparation. A stillness where something
            is forming, something unseen, something waiting.
          </p>

          <p>
            I didn’t know it then, but I was already living inside a story
            that had not yet revealed its characters.
          </p>

          <p>
            Words started appearing in my life without reason. Not thoughts —
            not imagination — but something deeper. As if they came from a place
            I had never visited, yet somehow belonged to.
          </p>

          {/* QUOTE */}
          <blockquote className="border-l-4 border-white/20 pl-6 italic text-neutral-400 text-xl">
            “Sometimes the soul remembers what the mind has never learned.”
          </blockquote>

          {/* SECTION 2 */}
          <p>
            I wrote about her long before I met her.
          </p>

          <p>
            I described her presence, her silence, her warmth —
            not knowing who she was, not knowing if she even existed.
          </p>

          <p>
            But the feeling was real.
          </p>

          <p>
            And that’s what made it impossible to ignore.
          </p>

          {/* SECTION 3 */}
          <p className="text-2xl text-white font-medium">
            It didn’t feel like creating. It felt like remembering.
          </p>

          <p>
            Every sentence carried a weight I couldn’t explain.
            Every paragraph felt like it had already been lived somewhere,
            sometime, in some version of existence.
          </p>

          <p>
            I wasn’t inventing her.  
            I was discovering her — through words.
          </p>

          <blockquote className="border-l-4 border-white/20 pl-6 italic text-neutral-400 text-xl">
            “You don’t always imagine the future — sometimes you recall it.”
          </blockquote>

          {/* SECTION 4 */}
          <p>
            There were nights I would sit in silence, staring at unfinished lines,
            feeling like something was trying to reach me.
          </p>

          <p>
            Not through logic. Not through effort.
          </p>

          <p>
            But through stillness.
          </p>

          <p>
            That’s when I understood something quietly:
            some connections are not built — they are revealed.
          </p>

          {/* SECTION 5 */}
          <p className="text-2xl text-white font-medium">
            And then, reality caught up.
          </p>

          <p>
            The day I met her, nothing felt new.
          </p>

          <p>
            No rush. No surprise. No chaos.
          </p>

          <p>
            Just recognition.
          </p>

          <p>
            Like opening a book and realizing you’ve already read it —
            but somehow, this time, you finally understand it.
          </p>

          <blockquote className="border-l-4 border-white/20 pl-6 italic text-neutral-400 text-xl">
            “The right person doesn’t enter your life. They return to it.”
          </blockquote>

          {/* SECTION 6 */}
          <p>
            Every word I had written before suddenly made sense.
          </p>

          <p>
            It wasn’t coincidence.
            It wasn’t imagination.
          </p>

          <p>
            It was alignment.
          </p>

          <p>
            A timeline bending quietly, bringing two realities together —
            the written one, and the lived one.
          </p>

          {/* SECTION 7 */}
          <p className="text-2xl text-white font-medium">
            Maybe destiny doesn’t arrive suddenly.
          </p>

          <p>
            Maybe it prepares you first.
          </p>

          <p>
            Through dreams you don’t understand.  
            Through emotions you can’t explain.  
            Through words you didn’t plan to write.
          </p>

          <p>
            And by the time it finally happens,
            it no longer feels like destiny.
          </p>

          <p className="text-xl text-white">
            It feels like continuation.
          </p>

        </article>

        {/* SIGNATURE */}
        <div className="mt-24 border-t border-white/10 pt-12 text-center">
          <p className="text-neutral-500 italic text-xl">
            — Vihaan
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/blog"
            className="px-10 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            Explore More Stories
          </Link>
        </div>

      </section>

      {/* 🌫 BOTTOM GLOW */}
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[120px] -translate-x-1/2 -z-10" />

    </main>
  );
}