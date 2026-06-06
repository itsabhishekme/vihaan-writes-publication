import Link from "next/link";
import {
  HiOutlineArchiveBox,
  HiOutlineBookOpen,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineUserGroup,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCamera,
  HiOutlinePencilSquare,
} from "react-icons/hi2";

export const metadata = {
  title: "The Human Archive | Vihaan Writes",
  description:
    "Preserving the stories people never thought anyone would read. A living archive of memories, lessons, transformations, regrets, dreams, turning points, and human experiences.",
};

const archiveCategories = [
  {
    icon: HiOutlineHeart,
    title: "Life Stories",
    description:
      "Personal journeys filled with growth, resilience, hope, heartbreak, healing, and transformation.",
  },
  {
    icon: HiOutlineClock,
    title: "Turning Points",
    description:
      "Moments that changed everything, often appearing ordinary until viewed through hindsight.",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Lessons Learned",
    description:
      "Wisdom gathered through experience, mistakes, challenges, and unexpected opportunities.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Unforgettable Moments",
    description:
      "Memories that continue to echo through lives long after the moment has passed.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Human Connections",
    description:
      "Stories about friendship, family, love, mentorship, and the relationships that shape us.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Shared Humanity",
    description:
      "Experiences that remind us how deeply connected people truly are across cultures and generations.",
  },
];

const archiveStories = [
  {
    category: "Life Story",
    title: "The Decision That Changed My Entire Life",
  },
  {
    category: "Reflection",
    title: "Twenty Years Later, I Finally Understood",
  },
  {
    category: "Transformation",
    title: "Losing Everything Taught Me Everything",
  },
  {
    category: "Humanity",
    title: "A Stranger I Never Forgot",
  },
  {
    category: "Memory",
    title: "The Last Conversation",
  },
  {
    category: "Turning Point",
    title: "One Day Changed Everything",
  },
];

const timeline = [
  {
    year: "Memory",
    title: "Every Story Begins Somewhere",
    text: "A moment, a decision, a conversation, or a feeling that quietly becomes part of someone's history.",
  },
  {
    year: "Experience",
    title: "Life Creates Meaning",
    text: "The ordinary moments become extraordinary when viewed through the lens of time.",
  },
  {
    year: "Reflection",
    title: "Understanding Arrives Later",
    text: "Many lessons only reveal their significance years after they occur.",
  },
  {
    year: "Archive",
    title: "Preserved For Future Generations",
    text: "Stories become timeless when they are remembered, shared, and preserved.",
  },
];

const stats = [
  {
    number: "∞",
    label: "Human Stories",
  },
  {
    number: "1000+",
    label: "Memories Preserved",
  },
  {
    number: "1",
    label: "Human Family",
  },
  {
    number: "Every",
    label: "Life Matters",
  },
];

export default function TheHumanArchivePage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[220px]" />
        <div className="absolute bottom-0 left-0 h-[700px] w-[700px] rounded-full bg-orange-500/10 blur-[180px]" />
        <div className="absolute top-40 right-0 h-[600px] w-[600px] rounded-full bg-yellow-500/10 blur-[180px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 mb-8">
              <HiOutlineArchiveBox className="text-amber-300" />
              <span className="uppercase tracking-[0.35em] text-sm text-zinc-400">
                Humanity's Stories
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              The Human
              <span className="block bg-gradient-to-r from-amber-200 via-white to-yellow-300 bg-clip-text text-transparent">
                Archive
              </span>
            </h1>

            <p className="mt-10 max-w-4xl text-xl text-zinc-400 leading-relaxed">
              Preserving the stories people never thought anyone would read.
              A living archive of memories, regrets, lessons, transformations,
              forgotten letters, turning points, dreams, resilience,
              and the moments that quietly shaped human lives.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">
              <Link
                href="/stories"
                className="px-8 py-4 rounded-2xl bg-white text-black font-semibold"
              >
                Explore Stories
              </Link>

              <Link
                href="/community"
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
                The Mission
              </span>

              <h2 className="text-5xl font-bold mt-6 mb-8">
                Every Human Life
                <span className="block text-amber-300">
                  Contains A Library
                </span>
              </h2>

              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                Most stories are never written.
                Most lessons are never shared.
                Most memories eventually fade.
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed">
                The Human Archive exists to preserve those experiences.
                Not because they belong to famous people,
                but because every life contains wisdom,
                emotion, resilience, and meaning.
              </p>
            </div>

            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((item, index) => (
                  <div key={index}>
                    <div className="text-5xl font-black text-amber-300">
                      {item.number}
                    </div>

                    <p className="mt-3 text-zinc-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.4em] text-zinc-500">
              Archive Collections
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Stories Worth Preserving
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {archiveCategories.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-all"
                >
                  <Icon className="text-5xl text-amber-300 mb-6" />

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
              The Journey Of A Story
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-10"
              >
                <div className="text-amber-300 font-semibold mb-3">
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

      {/* STORIES */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="uppercase tracking-[0.4em] text-zinc-500">
              Featured Stories
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Voices From The Archive
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {archiveStories.map((story, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <div className="h-56 bg-gradient-to-br from-amber-900/30 via-black to-orange-900/30" />

                <div className="p-8">
                  <span className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                    {story.category}
                  </span>

                  <h3 className="text-2xl font-semibold mt-4 mb-6">
                    {story.title}
                  </h3>

                  <button className="inline-flex items-center gap-2 text-amber-300">
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
        <div className="max-w-6xl mx-auto px-6 text-center">
          <HiOutlineBookOpen className="mx-auto text-7xl text-amber-300 mb-10" />

          <blockquote className="text-5xl md:text-7xl font-black leading-tight">
            "Every human life
            <span className="block mt-4">
              contains a story worth
            </span>
            <span className="block mt-4">
              preserving."
            </span>
          </blockquote>

          <p className="mt-10 uppercase tracking-[0.4em] text-zinc-500">
            The Human Archive
          </p>
        </div>
      </section>

      {/* ICON GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineCamera className="mx-auto text-5xl text-amber-300" />
              <h3 className="mt-5 text-xl font-semibold">Memories</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineChatBubbleLeftRight className="mx-auto text-5xl text-yellow-300" />
              <h3 className="mt-5 text-xl font-semibold">Stories</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlinePencilSquare className="mx-auto text-5xl text-orange-300" />
              <h3 className="mt-5 text-xl font-semibold">Reflections</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineHeart className="mx-auto text-5xl text-red-300" />
              <h3 className="mt-5 text-xl font-semibold">Humanity</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-16 text-center">
            <HiOutlineArchiveBox className="mx-auto text-6xl text-amber-300 mb-8" />

            <h2 className="text-5xl font-bold mb-6">
              Become Part Of The Archive
            </h2>

            <p className="max-w-3xl mx-auto text-xl text-zinc-400 leading-relaxed">
              Share your memories, lessons, turning points,
              transformations, and experiences.
              Every story matters.
              Every life leaves an imprint.
            </p>

            <div className="flex justify-center gap-5 mt-12 flex-wrap">
              <Link
                href="/community"
                className="px-8 py-4 rounded-2xl bg-white text-black font-semibold"
              >
                Submit Your Story
              </Link>

              <Link
                href="/newsletters"
                className="px-8 py-4 rounded-2xl border border-white/10"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}