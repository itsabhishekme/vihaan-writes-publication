import Link from "next/link";
import {
  HiOutlineEnvelope,
  HiOutlineArrowRight,
  HiOutlineSparkles,
  HiOutlineBookOpen,
  HiOutlineHeart,
  HiOutlineGlobeAlt,
  HiOutlineUserCircle,
  HiOutlineArchiveBox,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineStar,
} from "react-icons/hi2";

export const metadata = {
  title: "Newsletters | Vihaan Writes",
  description:
    "Explore the complete newsletter universe of Vihaan Writes featuring humanity, destiny, identity, healing, reflections, and untold stories.",
};

const newsletters = [
  {
    icon: HiOutlineArchiveBox,
    title: "The Human Archive",
    tagline: "The stories people never thought anyone would read.",
    subscribers: "429 Subscribers",
    href: "/the-human-archive",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },

  {
    icon: HiOutlineSparkles,
    title: "Before Her Name Existed",
    tagline: "I loved the story before I knew the character.",
    subscribers: "419 Subscribers",
    href: "/before-her-name-existed",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  },

  {
    icon: HiOutlineHeart,
    title: "Letters Never Sent",
    tagline: "Words written but never delivered.",
    subscribers: "New Newsletter",
    href: "/letters-never-sent",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
  },

  {
    icon: HiOutlineGlobeAlt,
    title: "Echoes of Destiny",
    tagline: "Exploring life's hidden patterns.",
    subscribers: "New Newsletter",
    href: "/echoes-of-destiny",
    gradient: "from-yellow-500/20 via-orange-500/10 to-transparent",
  },

  {
    icon: HiOutlineUserCircle,
    title: "The Vihaan Journal",
    tagline: "Where Identity Finds Purpose.",
    subscribers: "1,798 Subscribers",
    href: "#",
    gradient: "from-indigo-500/20 via-violet-500/10 to-transparent",
  },
];

const stats = [
  {
    value: "5",
    label: "Newsletters",
  },
  {
    value: "2500",
    label: "Subscribers",
  },
  {
    value: "100+",
    label: "Stories & Essays",
  },
  {
    value: "∞",
    label: "Future Reflections",
  },
];

const benefits = [
  {
    icon: HiOutlineDocumentText,
    title: "Exclusive Stories",
    desc: "Receive new stories, essays, reflections, and literary explorations before publication.",
  },

  {
    icon: HiOutlineStar,
    title: "Early Access",
    desc: "Get access to upcoming projects, books, archives, and special releases.",
  },

  {
    icon: HiOutlineUsers,
    title: "Community",
    desc: "Join readers who value thoughtful storytelling, reflection, and meaningful ideas.",
  },
];

export default function NewslettersPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[200px]" />
        <div className="absolute bottom-0 left-0 h-[700px] w-[700px] rounded-full bg-purple-500/10 blur-[180px]" />
        <div className="absolute top-40 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-5xl">

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-10">
              <HiOutlineEnvelope className="text-cyan-300" />
              <span className="uppercase tracking-[0.3em] text-sm text-zinc-400">
                Vihaan Writes
              </span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black leading-none">
              Newsletter
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-purple-300 bg-clip-text text-transparent">
                Universe
              </span>
            </h1>

            <p className="max-w-3xl mt-10 text-xl text-zinc-400 leading-relaxed">
              A collection of stories, reflections, destiny,
              identity, healing, humanity, and the unseen
              threads connecting our lives.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">
              <Link
                href="#collection"
                className="px-8 py-4 rounded-2xl bg-white text-black font-semibold"
              >
                Explore Newsletters
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">

            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center"
              >
                <div className="text-6xl font-black bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>

                <p className="mt-4 text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[0.4em] text-zinc-500">
            Explore The Collection
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-10">
            Stories For Every Stage
            <span className="block">
              Of The Human Journey
            </span>
          </h2>

          <p className="text-xl text-zinc-400 leading-relaxed">
            Each newsletter explores a different dimension of life,
            from humanity and memory to destiny, identity,
            healing, growth, and personal transformation.
          </p>

        </div>
      </section>

      {/* NEWSLETTER GRID */}
      <section
        id="collection"
        className="py-32 border-y border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.4em] text-zinc-500">
              Collection
            </span>

            <h2 className="text-6xl font-bold mt-5">
              Newsletter Library
            </h2>
          </div>

          <div className="grid xl:grid-cols-2 gap-8">

            {newsletters.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  href={item.href}
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-10 hover:border-white/20 transition-all"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                  />

                  <div className="relative z-10">

                    <Icon className="text-6xl text-white mb-8" />

                    <div className="inline-flex px-4 py-2 rounded-full bg-white/10 text-xs uppercase tracking-[0.25em] text-zinc-300 mb-6">
                      {item.subscribers}
                    </div>

                    <h3 className="text-4xl font-bold mb-5 group-hover:text-cyan-300 transition">
                      {item.title}
                    </h3>

                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                      {item.tagline}
                    </p>

                    <div className="inline-flex items-center gap-3 text-cyan-300 font-medium">
                      Explore Newsletter
                      <HiOutlineArrowRight className="group-hover:translate-x-1 transition" />
                    </div>

                  </div>
                </Link>
              );
            })}

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.4em] text-zinc-500">
              Subscriber Benefits
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Why Subscribe
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-10"
                >
                  <Icon className="text-5xl text-cyan-300 mb-6" />

                  <h3 className="text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {item.desc}
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
              The Newsletter Ecosystem
            </h2>
          </div>

          <div className="space-y-8">

            <div className="rounded-3xl border border-white/10 p-10 bg-white/[0.03]">
              <h3 className="text-3xl font-bold mb-4">
                The Human Archive
              </h3>
              <p className="text-zinc-400 text-lg">
                Humanity, memories, life lessons, experiences, and untold stories.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 bg-white/[0.03]">
              <h3 className="text-3xl font-bold mb-4">
                Before Her Name Existed
              </h3>
              <p className="text-zinc-400 text-lg">
                Destiny, soul connections, dreams, synchronicity, and timing.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 bg-white/[0.03]">
              <h3 className="text-3xl font-bold mb-4">
                Letters Never Sent
              </h3>
              <p className="text-zinc-400 text-lg">
                Reflection, healing, emotional growth, gratitude, and closure.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 bg-white/[0.03]">
              <h3 className="text-3xl font-bold mb-4">
                Echoes of Destiny
              </h3>
              <p className="text-zinc-400 text-lg">
                Life patterns, intuition, dreams, symbols, and meaningful coincidences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 bg-white/[0.03]">
              <h3 className="text-3xl font-bold mb-4">
                The Vihaan Journal
              </h3>
              <p className="text-zinc-400 text-lg">
                Identity, purpose, self-awareness, and personal evolution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40">
        <div className="max-w-6xl mx-auto px-6">

          <div className="rounded-[48px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-16 md:p-24 text-center">

            <HiOutlineEnvelope className="mx-auto text-7xl text-cyan-300 mb-10" />

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Follow The Stories
            </h2>

            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Subscribe to the newsletters that resonate with your
              journey and explore the expanding universe of
              Vihaan Writes.
            </p>

            <div className="flex justify-center gap-5 mt-12 flex-wrap">
              <Link
                href="#collection"
                className="px-8 py-4 rounded-2xl bg-white text-black font-semibold"
              >
                Explore Newsletters
              </Link>

              <Link
                href="/the-human-archive"
                className="px-8 py-4 rounded-2xl border border-white/10"
              >
                Start Reading
              </Link>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}