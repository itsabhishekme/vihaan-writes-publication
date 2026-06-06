import Link from "next/link";
import {
  HiOutlineEnvelope,
  HiOutlineHeart,
  HiOutlinePencilSquare,
  HiOutlineBookOpen,
  HiOutlineSparkles,
  HiOutlineChatBubbleLeftRight,
  HiOutlineArrowRight,
  HiOutlineArchiveBox,
  HiOutlineClock,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";

export const metadata = {
  title: "Letters Never Sent | Vihaan Writes",
  description:
    "A collection of unspoken words, unfinished conversations, emotional reflections, healing, gratitude, forgiveness, and letters that remained in the heart.",
};

const collections = [
  {
    icon: HiOutlineHeart,
    title: "Letters of Love",
    description:
      "Words written for people who changed us, inspired us, or became unforgettable chapters in our lives.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Letters of Gratitude",
    description:
      "Messages of appreciation for moments, people, teachers, memories, and experiences that shaped us.",
  },
  {
    icon: HiOutlineArchiveBox,
    title: "Letters of Closure",
    description:
      "Reflections written to release what could not be said and to find peace in unfinished stories.",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Letters to Ourselves",
    description:
      "Conversations across time between who we were, who we are, and who we are becoming.",
  },
];

const letters = [
  {
    category: "Love",
    title: "To The Person I Never Had The Chance To Tell",
  },
  {
    category: "Healing",
    title: "The Goodbye I Never Spoke",
  },
  {
    category: "Reflection",
    title: "To My Younger Self",
  },
  {
    category: "Growth",
    title: "Thank You For Leaving",
  },
  {
    category: "Destiny",
    title: "A Letter To The Future",
  },
  {
    category: "Memory",
    title: "The Conversation That Still Lives In My Mind",
  },
];

const timeline = [
  {
    year: "The Feeling",
    title: "An Emotion Arrives",
    text: "Every letter begins with a feeling that refuses to disappear.",
  },
  {
    year: "The Words",
    title: "The Unwritten Conversation",
    text: "Thoughts begin forming into sentences that may never be spoken aloud.",
  },
  {
    year: "The Reflection",
    title: "Understanding The Story",
    text: "Writing transforms emotion into clarity and memory into meaning.",
  },
  {
    year: "The Release",
    title: "Healing Through Expression",
    text: "The letter remains unsent, but its purpose has already been fulfilled.",
  },
];

export default function LettersNeverSentPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-rose-500/10 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[180px]" />
        <div className="absolute top-40 right-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[160px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 mb-8">
              <HiOutlineEnvelope className="text-rose-300" />
              <span className="uppercase tracking-[0.35em] text-sm text-zinc-400">
                Vihaan Writes Project
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              Letters
              <span className="block bg-gradient-to-r from-rose-200 via-white to-purple-300 bg-clip-text text-transparent">
                Never Sent
              </span>
            </h1>

            <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-relaxed">
              A collection of words written but never delivered.
              Conversations that remained unfinished.
              Emotions that stayed hidden.
              Reflections that quietly transformed into healing.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">
              <Link
                href="/blog"
                className="px-8 py-4 rounded-2xl bg-white text-black font-semibold"
              >
                Read Letters
              </Link>

              <Link
                href="/newsletters"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                About The Project
              </span>

              <h2 className="text-5xl font-bold mt-6 mb-8">
                Every Unsent Letter
                <span className="block text-rose-300">
                  Carries A Story
                </span>
              </h2>

              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                Not every message reaches its destination.
                Some remain hidden in journals, drafts, memories,
                and quiet moments of reflection.
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed">
                Letters Never Sent explores those words—
                messages written for people, moments,
                experiences, and versions of ourselves
                that helped shape who we became.
              </p>
            </div>

            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl font-black text-rose-300">
                    ∞
                  </div>
                  <p className="mt-3 text-zinc-500">
                    Emotions
                  </p>
                </div>

                <div>
                  <div className="text-5xl font-black text-purple-300">
                    100+
                  </div>
                  <p className="mt-3 text-zinc-500">
                    Reflections
                  </p>
                </div>

                <div>
                  <div className="text-5xl font-black">
                    1
                  </div>
                  <p className="mt-3 text-zinc-500">
                    Human Journey
                  </p>
                </div>

                <div>
                  <div className="text-5xl font-black text-pink-300">
                    Many
                  </div>
                  <p className="mt-3 text-zinc-500">
                    Stories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.4em] text-zinc-500">
              Collections
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Categories Of Letters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {collections.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-all"
                >
                  <Icon className="text-5xl text-rose-300 mb-6" />

                  <h3 className="text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-32 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold">
              The Journey Of A Letter
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-10"
              >
                <div className="text-rose-300 font-semibold mb-3">
                  {item.year}
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LETTER GRID */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="uppercase tracking-[0.4em] text-zinc-500">
              Featured Letters
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Stories Never Delivered
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {letters.map((letter, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <div className="h-56 bg-gradient-to-br from-rose-900/30 via-black to-purple-900/30" />

                <div className="p-8">
                  <span className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                    {letter.category}
                  </span>

                  <h3 className="text-2xl font-semibold mt-4 mb-6">
                    {letter.title}
                  </h3>

                  <button className="inline-flex items-center gap-2 text-rose-300">
                    Read Letter
                    <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <HiOutlinePencilSquare className="mx-auto text-7xl text-rose-300 mb-10" />

          <blockquote className="text-5xl md:text-7xl font-black leading-tight">
            “Some letters were never meant
            <span className="block mt-4">
              to be delivered.
            </span>
            <span className="block mt-4">
              Only written.”
            </span>
          </blockquote>

          <p className="mt-10 uppercase tracking-[0.4em] text-zinc-500">
            Letters Never Sent
          </p>
        </div>
      </section>

      {/* SYMBOL GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineHeart className="mx-auto text-5xl text-rose-300" />
              <h3 className="mt-5 text-xl font-semibold">Love</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineClock className="mx-auto text-5xl text-purple-300" />
              <h3 className="mt-5 text-xl font-semibold">Memory</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlinePaperAirplane className="mx-auto text-5xl text-pink-300" />
              <h3 className="mt-5 text-xl font-semibold">Release</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineSparkles className="mx-auto text-5xl text-yellow-300" />
              <h3 className="mt-5 text-xl font-semibold">Healing</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-16 text-center">
            <HiOutlineBookOpen className="mx-auto text-6xl text-rose-300 mb-8" />

            <h2 className="text-5xl font-bold mb-6">
              Explore More Letters
            </h2>

            <p className="max-w-3xl mx-auto text-xl text-zinc-400 leading-relaxed">
              Discover reflections, healing, gratitude,
              emotional growth, and the stories that
              remained beautifully unfinished.
            </p>

            <div className="flex justify-center gap-5 mt-12 flex-wrap">
              <Link
                href="/newsletters"
                className="px-8 py-4 rounded-2xl bg-white text-black font-semibold"
              >
                Subscribe
              </Link>

              <Link
                href="/blog"
                className="px-8 py-4 rounded-2xl border border-white/10"
              >
                Explore Archive
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}