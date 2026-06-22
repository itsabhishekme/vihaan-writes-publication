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
    date: "June 21, 2026",
    readTime: "8 min read",
    excerpt: "A story of how one decision shifted the course of a life.",
    quote: "Change begins when you decide to stop being who you were.",
    author: "Mia Carter",
    authorImage: "/project/author-1.jpg",
  },
  {
    category: "Reflection",
    title: "A Letter To My Younger Self",
    image: "/project/human-2.jpg",
    date: "May 16, 2026",
    readTime: "7 min read",
    excerpt: "A heartfelt reflection on lessons learned and time lost.",
    quote: "If I could tell my younger self one thing, it would be to trust the journey.",
    author: "Noah Patel",
    authorImage: "/project/author-2.jpg",
  },
  {
    category: "Memory",
    title: "The Conversation I Never Forgot",
    image: "/project/human-3.jpg",
    date: "April 3, 2026",
    readTime: "6 min read",
    excerpt: "The memory of a single conversation that changed everything.",
    quote: "Some words stay with us forever, shaping who we become.",
    author: "Ava Brooks",
    authorImage: "/project/author-3.jpg",
  },
  {
    category: "Humanity",
    title: "What I Learned From Losing Everything",
    image: "/project/human-4.jpg",
    date: "March 11, 2026",
    readTime: "9 min read",
    excerpt: "A powerful story about rebuilding from the ashes of loss.",
    quote: "Sometimes losing everything is how you find your true self.",
    author: "Elijah Reed",
    authorImage: "/project/author-4.jpg",
  },
  {
    category: "Growth",
    title: "The Mistake That Saved My Life",
    image: "/project/human-5.jpg",
    date: "February 28, 2026",
    readTime: "7 min read",
    excerpt: "An unexpected mistake that paved the way for growth.",
    quote: "The greatest lessons often arrive disguised as failures.",
    author: "Sophia Liu",
    authorImage: "/project/author-5.jpg",
  },
  {
    category: "Legacy",
    title: "The Story Nobody Knew",
    image: "/project/human-6.jpg",
    date: "January 9, 2026",
    readTime: "8 min read",
    excerpt: "A hidden story finally brought into the light.",
    quote: "Every story deserves a voice, even the ones kept in silence.",
    author: "Liam Bennett",
    authorImage: "/project/author-6.jpg",
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
      <section className="relative py-40 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        {/* Decorative Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[250px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-32">

            <span className="uppercase tracking-[0.5em] text-cyan-300 text-sm font-semibold">
              Mission
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight">
              Every Human Life
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Deserves To Be Remembered
              </span>
            </h2>

            <p className="mt-10 text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
              Behind every face exists a story.
              Behind every story exists a lifetime of memories,
              lessons, struggles, dreams, and moments that deserve
              to live beyond a single generation.
            </p>

          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* LEFT CONTENT */}
            <div>

              <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                Why We Exist
              </span>

              <h3 className="text-5xl md:text-6xl font-black mt-6 mb-10 leading-tight">
                Preserving The
                <span className="block text-cyan-300">
                  Human Experience
                </span>
              </h3>

              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                Most stories disappear quietly.
                Not because they lacked significance,
                but because nobody thought they were important enough
                to preserve.
              </p>

              <p className="text-lg text-zinc-500 leading-relaxed mb-8">
                The Human Archive exists to challenge that belief.
                We believe every person carries knowledge,
                experiences, emotions and memories that contribute
                to the collective story of humanity.
              </p>

              <p className="text-lg text-zinc-500 leading-relaxed mb-12">
                Through storytelling, documentation and reflection,
                we create a place where lives are remembered,
                wisdom is shared, and future generations can learn
                from the journeys that came before them.
              </p>

              {/* Feature Grid */}
              <div className="grid sm:grid-cols-2 gap-5">

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-5">
                    🌍
                  </div>

                  <h4 className="font-bold text-xl mb-3">
                    Global Stories
                  </h4>

                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Capturing experiences from different cultures,
                    backgrounds and perspectives around the world.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-5">
                    📖
                  </div>

                  <h4 className="font-bold text-xl mb-3">
                    Life Lessons
                  </h4>

                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Preserving knowledge, wisdom and reflections
                    learned through lived experiences.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-5">
                    ❤️
                  </div>

                  <h4 className="font-bold text-xl mb-3">
                    Human Connection
                  </h4>

                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Building empathy through authentic stories
                    and meaningful shared experiences.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-5">
                    ⏳
                  </div>

                  <h4 className="font-bold text-xl mb-3">
                    Future Legacy
                  </h4>

                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Ensuring valuable stories continue inspiring
                    generations to come.
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT IMAGE SIDE */}
            <div className="relative">

              {/* Main Image */}
              <div className="relative h-[750px] overflow-hidden rounded-[40px] border border-white/10">

                <Image
                  src="/project/human-mission.jpg"
                  alt="Human Mission"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              </div>

              {/* Floating Card 1 */}
              <div className="absolute -left-10 top-12 w-72 rounded-[32px] border border-white/10 bg-black/70 backdrop-blur-2xl p-8">

                <div className="text-cyan-300 text-5xl font-black mb-2">
                  50K+
                </div>

                <h4 className="font-semibold mb-2">
                  Stories Preserved
                </h4>

                <p className="text-sm text-zinc-500 leading-relaxed">
                  Personal experiences collected and archived
                  for future generations.
                </p>

              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-10 bottom-20 w-80 rounded-[32px] border border-white/10 bg-black/70 backdrop-blur-2xl p-8">

                <div className="text-cyan-300 text-4xl mb-4">
                  "
                </div>

                <p className="text-zinc-300 leading-relaxed">
                  The greatest library in the world is not built
                  from books. It is built from human lives.
                </p>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-sm text-zinc-500">
                    Human Archive Project
                  </p>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute top-10 right-10 px-5 py-3 rounded-full border border-cyan-500/20 bg-black/70 backdrop-blur-xl">

                <span className="text-cyan-300 uppercase tracking-[0.3em] text-xs">
                  Since 2025
                </span>

              </div>

            </div>

          </div>

          {/* Mission Values */}
          <div className="mt-40">

            <div className="text-center mb-20">

              <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                Core Values
              </span>

              <h3 className="text-5xl font-black mt-6">
                What Drives
                <span className="block text-cyan-300">
                  Our Mission
                </span>
              </h3>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="group rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-500">

                <div className="text-6xl mb-6">
                  📚
                </div>

                <h4 className="text-2xl font-bold mb-5">
                  Preservation
                </h4>

                <p className="text-zinc-500 leading-relaxed">
                  Protecting valuable human stories from being
                  forgotten or lost to time.
                </p>

              </div>

              <div className="group rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-500">

                <div className="text-6xl mb-6">
                  🤝
                </div>

                <h4 className="text-2xl font-bold mb-5">
                  Understanding
                </h4>

                <p className="text-zinc-500 leading-relaxed">
                  Encouraging empathy through authentic
                  personal experiences and perspectives.
                </p>

              </div>

              <div className="group rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-500">

                <div className="text-6xl mb-6">
                  🌟
                </div>

                <h4 className="text-2xl font-bold mb-5">
                  Legacy
                </h4>

                <p className="text-zinc-500 leading-relaxed">
                  Leaving behind meaningful knowledge for future
                  generations to discover and learn from.
                </p>

              </div>

            </div>

          </div>

          {/* Bottom Statistics */}
          <div className="mt-32 grid md:grid-cols-4 gap-8">

            <div className="text-center p-8 rounded-[32px] border border-white/10 bg-white/[0.03]">
              <h3 className="text-5xl font-black text-cyan-300">
                50K+
              </h3>
              <p className="text-zinc-500 mt-3">
                Stories Archived
              </p>
            </div>

            <div className="text-center p-8 rounded-[32px] border border-white/10 bg-white/[0.03]">
              <h3 className="text-5xl font-black text-cyan-300">
                120+
              </h3>
              <p className="text-zinc-500 mt-3">
                Countries Reached
              </p>
            </div>

            <div className="text-center p-8 rounded-[32px] border border-white/10 bg-white/[0.03]">
              <h3 className="text-5xl font-black text-cyan-300">
                1M+
              </h3>
              <p className="text-zinc-500 mt-3">
                Readers Inspired
              </p>
            </div>

            <div className="text-center p-8 rounded-[32px] border border-white/10 bg-white/[0.03]">
              <h3 className="text-5xl font-black text-cyan-300">
                Forever
              </h3>
              <p className="text-zinc-500 mt-3">
                Preserved Legacy
              </p>
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
      <section className="relative py-40 overflow-hidden border-y border-white/10">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[220px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="max-w-5xl mx-auto text-center mb-28">

            <span className="uppercase tracking-[0.5em] text-cyan-300 text-sm font-semibold">
              Human Archive
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight">
              Stories Worth
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Preserving
              </span>
            </h2>

            <p className="mt-8 text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
              Every life contains moments of courage, sacrifice,
              transformation and wisdom. These featured stories
              preserve the experiences that define humanity and
              inspire future generations.
            </p>

          </div>

          {/* Featured Stories Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {featuredStories.map((story, index) => (

              <article
                key={index}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-700 hover:-translate-y-4 hover:border-cyan-500/30"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-cyan-500/5" />
                </div>

                {/* Image */}
                <div className="relative h-80 overflow-hidden">

                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">

                    <span className="px-4 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl uppercase tracking-[0.2em] text-xs text-cyan-300">
                      {story.category}
                    </span>

                  </div>

                  {/* Featured Badge */}
                  <div className="absolute top-6 right-6">

                    <span className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-xs uppercase tracking-[0.2em]">
                      Featured
                    </span>

                  </div>

                </div>

                {/* Content */}
                <div className="p-8">

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-zinc-500 mb-5">

                    <span>{story.date}</span>

                    <span>•</span>

                    <span>{story.readTime}</span>

                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-black leading-snug mb-5 group-hover:text-cyan-300 transition-colors duration-500">
                    {story.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-500 leading-relaxed mb-8">
                    {story.excerpt}
                  </p>

                  {/* Quote */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 mb-8">

                    <div className="text-cyan-300 text-3xl mb-2">
                      "
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed italic">
                      {story.quote}
                    </p>

                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">

                        <Image
                          src={story.authorImage}
                          alt={story.author}
                          fill
                          className="object-cover"
                        />

                      </div>

                      <div>

                        <h4 className="font-semibold">
                          {story.author}
                        </h4>

                        <p className="text-sm text-zinc-500">
                          Story Contributor
                        </p>

                      </div>

                    </div>

                    <button className="group/btn flex items-center gap-2 text-cyan-300 font-medium">

                      Read Story

                      <HiOutlineArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-2" />

                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

          {/* Featured Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-32">

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">

              <h3 className="text-5xl font-black text-cyan-300">
                500+
              </h3>

              <p className="text-zinc-500 mt-3">
                Stories Archived
              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">

              <h3 className="text-5xl font-black text-cyan-300">
                120+
              </h3>

              <p className="text-zinc-500 mt-3">
                Countries
              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">

              <h3 className="text-5xl font-black text-cyan-300">
                50K+
              </h3>

              <p className="text-zinc-500 mt-3">
                Readers
              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">

              <h3 className="text-5xl font-black text-cyan-300">
                Forever
              </h3>

              <p className="text-zinc-500 mt-3">
                Preserved
              </p>

            </div>

          </div>

          {/* Bottom Quote Section */}
          <div className="max-w-5xl mx-auto text-center mt-40">

            <div className="text-8xl text-cyan-300 mb-8">
              "
            </div>

            <h3 className="text-4xl md:text-5xl font-light leading-relaxed text-zinc-300">
              Stories are the fingerprints of humanity.
              Long after we are gone, they remain—
              teaching, inspiring and reminding future
              generations what it meant to be human.
            </h3>

            <div className="w-32 h-[2px] bg-gradient-to-r from-cyan-300 to-blue-300 mx-auto mt-12" />

            <p className="mt-8 text-zinc-500 uppercase tracking-[0.4em] text-sm">
              Human Archive Project
            </p>

          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center mt-24">

            <button className="group px-10 py-5 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl hover:bg-cyan-500/20 transition-all duration-500 flex items-center gap-4">

              <span className="font-semibold text-cyan-300">
                Explore All Stories
              </span>

              <HiOutlineArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-2" />

            </button>

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

