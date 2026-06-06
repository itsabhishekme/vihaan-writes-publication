import Link from "next/link";
import {
  HiOutlineArchiveBox,
  HiOutlineBookOpen,
  HiOutlineUserGroup,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineDocumentText,
  HiOutlineArrowRight,
  HiOutlineChatBubbleLeftRight,
  HiOutlineLightBulb,
  HiOutlineCamera,
} from "react-icons/hi2";

export const metadata = {
  title: "The Human Archive | Vihaan Writes",
  description:
    "Preserving the stories people never thought anyone would read. A living archive of memories, regrets, lessons, turning points, transformations, forgotten letters, and human experiences.",
};

const archiveCategories = [
  {
    icon: HiOutlineHeart,
    title: "Love & Relationships",
    description:
      "Stories of love found, love lost, missed opportunities, second chances, and unforgettable human connections.",
  },
  {
    icon: HiOutlineClock,
    title: "Turning Points",
    description:
      "Moments that changed lives forever, decisions that altered destinies, and crossroads that defined new chapters.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Life Lessons",
    description:
      "Wisdom gained through mistakes, challenges, failures, growth, and experiences worth preserving.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Transformations",
    description:
      "Personal journeys of healing, reinvention, resilience, self-discovery, and becoming.",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Untold Stories",
    description:
      "Experiences never shared publicly, hidden memories, private reflections, and forgotten voices.",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Letters & Memories",
    description:
      "Personal letters, journals, memories, reflections, and emotional records preserved through words.",
  },
];

const archiveStats = [
  {
    value: "∞",
    label: "Human Stories",
  },
  {
    value: "1000+",
    label: "Future Archives",
  },
  {
    value: "1",
    label: "Shared Humanity",
  },
  {
    value: "Every",
    label: "Life Matters",
  },
];

const featuredStories = [
  {
    category: "Transformation",
    title: "The Day Everything Changed",
  },
  {
    category: "Reflection",
    title: "A Letter To My Younger Self",
  },
  {
    category: "Memory",
    title: "The Conversation I Never Forgot",
  },
  {
    category: "Humanity",
    title: "What I Learned From Losing Everything",
  },
  {
    category: "Growth",
    title: "The Mistake That Saved My Life",
  },
  {
    category: "Legacy",
    title: "The Story Nobody Knew",
  },
];

const journey = [
  {
    title: "Every Life Contains A Story",
    description:
      "Every person carries experiences, memories, lessons, and emotions worth preserving.",
  },
  {
    title: "Stories Shape Humanity",
    description:
      "The stories we share become lessons, inspiration, and understanding for future generations.",
  },
  {
    title: "Memories Become Legacy",
    description:
      "What seems ordinary today may become invaluable wisdom tomorrow.",
  },
  {
    title: "The Archive Lives On",
    description:
      "Preserving stories ensures human experiences continue to inspire long after moments have passed.",
  },
];

export default function TheHumanArchivePage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[200px]" />
        <div className="absolute bottom-0 left-0 h-[700px] w-[700px] rounded-full bg-purple-500/10 blur-[180px]" />
        <div className="absolute top-20 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-8">
              <HiOutlineArchiveBox className="text-cyan-300" />
              <span className="uppercase tracking-[0.35em] text-sm text-zinc-400">
                Vihaan Writes Project
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              The Human
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
                Archive
              </span>
            </h1>

            <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-relaxed">
              Preserving the stories people never thought anyone would read.
              A living archive of memories, regrets, lessons, turning points,
              transformations, forgotten letters, and human experiences.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">
              <Link
                href="/stories"
                className="px-8 py-4 rounded-2xl bg-white text-black font-semibold"
              >
                Explore Stories
              </Link>

              <Link
                href="/submit-story"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5"
              >
                Share Your Story
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
                Our Mission
              </span>

              <h2 className="text-5xl font-bold mt-6 mb-8">
                Every Human Life
                <span className="block text-cyan-300">
                  Deserves To Be Remembered
                </span>
              </h2>

              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                Most stories disappear quietly. Not because they lacked meaning,
                but because nobody asked to hear them.
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed">
                The Human Archive exists to preserve the experiences,
                reflections, struggles, victories, memories, and lessons
                that shape who we are as individuals and as humanity.
              </p>
            </div>

            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10">
              <div className="grid grid-cols-2 gap-8">
                {archiveStats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-5xl font-black text-cyan-300">
                      {stat.value}
                    </div>
                    <p className="mt-3 text-zinc-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHIVE CATEGORIES */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.4em] text-zinc-500">
              Collections
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Explore The Archive
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {archiveCategories.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-all"
                >
                  <Icon className="text-5xl text-cyan-300 mb-6" />

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

      {/* JOURNEY */}
      <section className="py-32 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold">
              Why Stories Matter
            </h2>
          </div>

          <div className="space-y-8">
            {journey.map((step, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-10"
              >
                <h3 className="text-3xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="uppercase tracking-[0.4em] text-zinc-500">
              Featured Archive
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Stories Worth Preserving
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <div className="h-56 bg-gradient-to-br from-cyan-900/30 via-black to-blue-900/30" />

                <div className="p-8">
                  <span className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                    {story.category}
                  </span>

                  <h3 className="text-2xl font-semibold mt-4 mb-6">
                    {story.title}
                  </h3>

                  <button className="inline-flex items-center gap-2 text-cyan-300">
                    Read Story
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
          <HiOutlineBookOpen className="mx-auto text-7xl text-cyan-300 mb-10" />

          <blockquote className="text-5xl md:text-7xl font-black leading-tight">
            “The stories people never thought
            <span className="block mt-4">
              anyone would read.”
            </span>
          </blockquote>

          <p className="mt-10 uppercase tracking-[0.4em] text-zinc-500">
            The Human Archive
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineUserGroup className="mx-auto text-5xl text-cyan-300" />
              <h3 className="mt-5 text-xl font-semibold">Humanity</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineHeart className="mx-auto text-5xl text-pink-300" />
              <h3 className="mt-5 text-xl font-semibold">Empathy</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineCamera className="mx-auto text-5xl text-purple-300" />
              <h3 className="mt-5 text-xl font-semibold">Memory</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineGlobeAlt className="mx-auto text-5xl text-blue-300" />
              <h3 className="mt-5 text-xl font-semibold">Legacy</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-16 text-center">
            <HiOutlineArchiveBox className="mx-auto text-6xl text-cyan-300 mb-8" />

            <h2 className="text-5xl font-bold mb-6">
              Become Part Of The Archive
            </h2>

            <p className="max-w-3xl mx-auto text-xl text-zinc-400 leading-relaxed">
              Every memory matters. Every lesson matters.
              Every life contains a story worth preserving.
            </p>

            <div className="flex justify-center gap-5 mt-12 flex-wrap">
              <Link
                href="/submit-story"
                className="px-8 py-4 rounded-2xl bg-white text-black font-semibold"
              >
                Share Your Story
              </Link>

              <Link
                href="/stories"
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