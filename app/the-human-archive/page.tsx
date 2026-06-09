import Image from "next/image";
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
  HiOutlineEye,
  HiOutlineStar,
  HiOutlineShieldCheck,
  HiOutlineArrowTopRightOnSquare
} from "react-icons/hi2";

export const metadata = {
  title: "The Human Archive | Vihaan Writes",
  description:
    "Preserving the stories people never thought anyone would read.",
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
      "Moments that changed lives forever and decisions that altered destinies.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Life Lessons",
    description:
      "Wisdom gained through mistakes, failures, growth, and experience.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Transformations",
    description:
      "Personal journeys of healing, resilience, reinvention, and becoming.",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Untold Stories",
    description:
      "Experiences never shared publicly and voices never fully heard.",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Letters & Memories",
    description:
      "Journals, letters, reflections, and memories preserved through words.",
  },
];

const featuredStories = [
  {
    category: "Transformation",
    title: "The Day Everything Changed",
    image: "/project/human-1.jpg",
  },
  {
    category: "Reflection",
    title: "A Letter To My Younger Self",
    image: "/project/human-2.jpg",
  },
  {
    category: "Memory",
    title: "The Conversation I Never Forgot",
    image: "/project/human-3.jpg",
  },
  {
    category: "Humanity",
    title: "What I Learned From Losing Everything",
    image: "/project/human-4.jpg",
  },
  {
    category: "Growth",
    title: "The Mistake That Saved My Life",
    image: "/project/human-5.jpg",
  },
  {
    category: "Legacy",
    title: "The Story Nobody Knew",
    image: "/project/human-6.jpg",
  },
];

export default function HumanArchivePage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />
        <div className="absolute bottom-0 right-0 h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">

        <div className="absolute inset-0">
          <Image
            src="/project/The Human Archive.png"
            alt="The Human Archive"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-5xl">

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-8">
              <HiOutlineArchiveBox className="text-cyan-300" />
              <span className="uppercase tracking-[0.35em] text-sm text-zinc-400">
                Humanity&apos;s Stories
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              The Human
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
                Archive
              </span>
            </h1>

            <p className="mt-10 max-w-3xl text-xl text-zinc-300 leading-relaxed">
              Preserving the stories people never thought anyone would read.
              A living archive of memories, regrets, turning points,
              transformations, forgotten letters, and human experiences.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">
              <Link
                href="https://thehumanarchive.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Enter the Archive
                <HiOutlineArrowTopRightOnSquare className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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

      {/* FEATURED BANNER */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10">

            <div className="relative h-[700px]">

              <Image
                src="/project/The Human Archive.png"
                alt=""
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-12 left-12 max-w-4xl">
                <p className="uppercase tracking-[0.4em] text-zinc-300 mb-4">
                  Living Collection
                </p>

                <h2 className="text-5xl md:text-7xl font-black">
                  Humanity&apos;s Stories Deserve To Survive Time
                </h2>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="rounded-3xl border border-white/10 p-10">
              <HiOutlineBookOpen className="text-5xl text-cyan-300 mb-5" />
              <div className="text-6xl font-black">∞</div>
              <p className="mt-3 text-zinc-500">Human Stories</p>
            </div>

            <div className="rounded-3xl border border-white/10 p-10">
              <HiOutlineEye className="text-5xl text-cyan-300 mb-5" />
              <div className="text-6xl font-black">1000+</div>
              <p className="mt-3 text-zinc-500">Future Archives</p>
            </div>

            <div className="rounded-3xl border border-white/10 p-10">
              <HiOutlineUserGroup className="text-5xl text-cyan-300 mb-5" />
              <div className="text-6xl font-black">1</div>
              <p className="mt-3 text-zinc-500">Shared Humanity</p>
            </div>

            <div className="rounded-3xl border border-white/10 p-10">
              <HiOutlineGlobeAlt className="text-5xl text-cyan-300 mb-5" />
              <div className="text-6xl font-black">Every</div>
              <p className="mt-3 text-zinc-500">Life Matters</p>
            </div>

          </div>

        </div>
      </section>

      {/* MISSION */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                Mission
              </span>

              <h2 className="text-5xl font-black mt-6 mb-8">
                Every Human Life
                <span className="block text-cyan-300">
                  Deserves To Be Remembered
                </span>
              </h2>

              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                Most stories disappear quietly.
                Not because they lacked meaning,
                but because nobody asked to hear them.
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed">
                The Human Archive preserves experiences,
                reflections, struggles, victories,
                memories and lessons that define humanity.
              </p>

            </div>

            <div className="relative h-[600px] overflow-hidden rounded-[40px] border border-white/10">
              <Image
                src="/project/human-mission.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="py-32 bg-white/[0.02]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">
            <h2 className="text-6xl font-black">
              Explore The Archive
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {archiveCategories.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                >
                  <Icon className="text-5xl text-cyan-300 mb-6" />

                  <h3 className="text-2xl font-bold mb-4">
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

      {/* VALUES */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineUserGroup className="mx-auto text-6xl text-cyan-300" />
              <h3 className="mt-5 text-2xl font-bold">Humanity</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineHeart className="mx-auto text-6xl text-pink-300" />
              <h3 className="mt-5 text-2xl font-bold">Empathy</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineCamera className="mx-auto text-6xl text-purple-300" />
              <h3 className="mt-5 text-2xl font-bold">Memory</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineShieldCheck className="mx-auto text-6xl text-blue-300" />
              <h3 className="mt-5 text-2xl font-bold">Legacy</h3>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="py-32 border-y border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">
            <h2 className="text-6xl font-black">
              Stories Worth Preserving
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {featuredStories.map((story, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <div className="relative h-72">

                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-8">

                  <span className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                    {story.category}
                  </span>

                  <h3 className="text-2xl font-bold mt-4 mb-6">
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

          <HiOutlineStar className="mx-auto text-7xl text-cyan-300 mb-10" />

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

      {/* CTA */}
      <section className="pb-32">

        <div className="max-w-6xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10">

            <Image
              src="/project/The Human Archive.png"
              alt=""
              fill
              className="object-cover opacity-20"
            />

            <div className="relative z-10 p-20 text-center">

              <HiOutlineArchiveBox className="mx-auto text-7xl text-cyan-300 mb-8" />

              <h2 className="text-6xl font-black mb-8">
                Become Part Of The Archive
              </h2>

              <p className="max-w-3xl mx-auto text-xl text-zinc-300">
                Every memory matters.
                Every lesson matters.
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

        </div>

      </section>

    </main>
  );
}

