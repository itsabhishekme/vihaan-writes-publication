import Image from "next/image";
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
  HiOutlineStar,
} from "react-icons/hi2";
import { ExternalLink } from "lucide-react";

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
      "Words written for people who changed us and became unforgettable chapters.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Letters of Gratitude",
    description:
      "Messages of appreciation for people, memories, and experiences.",
  },
  {
    icon: HiOutlineArchiveBox,
    title: "Letters of Closure",
    description:
      "Reflections written to release what could not be said.",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Letters to Ourselves",
    description:
      "Conversations between who we were and who we are becoming.",
  },
];

const letters = [
  {
    category: "Love",
    title: "To The Person I Never Had The Chance To Tell",
    image: "/project/letter-1.jpg",
    recipient: "The One Who Got Away",
    excerpt:
      "A heartfelt letter to the person whose presence lingered long after goodbye.",
    quote: "I still keep the words unsaid tucked in the corners of my heart.",
    author: "Vihaan",
    readTime: "4 min read",
    date: "Jan 2025",
    views: "1.2k",
  },
  {
    category: "Healing",
    title: "The Goodbye I Never Spoke",
    image: "/project/letter-2.jpg",
    recipient: "The One I Let Go",
    excerpt:
      "A quiet farewell written for the moment I couldn't find the words.",
    quote: "Some farewells are written where no one can hear them.",
    author: "Vihaan",
    readTime: "3 min read",
    date: "Feb 2025",
    views: "980",
  },
  {
    category: "Reflection",
    title: "To My Younger Self",
    image: "/project/letter-3.jpg",
    recipient: "My Younger Self",
    excerpt:
      "A reflective note full of advice, forgiveness, and the wisdom of time.",
    quote: "If I could go back, I'd tell you that every scar became a story.",
    author: "Vihaan",
    readTime: "5 min read",
    date: "Mar 2025",
    views: "1.5k",
  },
  {
    category: "Growth",
    title: "Thank You For Leaving",
    image: "/project/letter-4.jpg",
    recipient: "The Person Who Moved On",
    excerpt:
      "A letter of gratitude to the one whose departure sparked a new beginning.",
    quote: "Your leaving taught me how to find myself again.",
    author: "Vihaan",
    readTime: "4 min read",
    date: "Apr 2025",
    views: "1.1k",
  },
  {
    category: "Destiny",
    title: "A Letter To The Future",
    image: "/project/letter-5.jpg",
    recipient: "Future Me",
    excerpt:
      "Words sent forward in time to the person I am still becoming.",
    quote: "I hope you remember why you started this journey.",
    author: "Vihaan",
    readTime: "3 min read",
    date: "May 2025",
    views: "860",
  },
  {
    category: "Memory",
    title: "The Conversation That Still Lives In My Mind",
    image: "/project/letter-6.jpg",
    recipient: "The One I Still Remember",
    excerpt:
      "A remembrance of the unsaid words lingering in the quietest moments.",
    quote: "That silent conversation still echoes in the spaces between us.",
    author: "Vihaan",
    readTime: "4 min read",
    date: "Jun 2025",
    views: "1.3k",
  },
];

export default function LettersNeverSentPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-rose-500/10 blur-[220px]" />
        <div className="absolute bottom-0 left-0 h-[700px] w-[700px] rounded-full bg-purple-500/10 blur-[200px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/project/Letters Never Sent.png"
            alt="Letters Never Sent"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 mb-8">
              <HiOutlineEnvelope className="text-rose-300 text-lg" />
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

            <p className="mt-10 max-w-3xl text-xl text-zinc-300 leading-relaxed">
              A collection of words written but never delivered.
              Conversations that remained unfinished.
              Emotions that stayed hidden.
              Reflections that quietly transformed into healing.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-12">
              <a
                href="https://lettersneversent.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-semibold transition-all duration-300 hover:scale-105"
              >
                Read the Letters
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/newsletters"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10">

            <div className="relative h-[700px]">

              <Image
                src="/project/Letters Never Sent.png"
                alt=""
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-12 left-12 max-w-4xl">

                <p className="uppercase tracking-[0.4em] text-zinc-300 mb-4">
                  Unspoken Stories
                </p>

                <h2 className="text-5xl md:text-7xl font-black">
                  Every Unsent Letter Carries A Story
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
              <HiOutlineHeart className="text-5xl text-rose-300 mb-5" />
              <div className="text-6xl font-black">∞</div>
              <p className="text-zinc-500 mt-3">Emotions</p>
            </div>

            <div className="rounded-3xl border border-white/10 p-10">
              <HiOutlinePencilSquare className="text-5xl text-purple-300 mb-5" />
              <div className="text-6xl font-black">100+</div>
              <p className="text-zinc-500 mt-3">Reflections</p>
            </div>

            <div className="rounded-3xl border border-white/10 p-10">
              <HiOutlineBookOpen className="text-5xl text-pink-300 mb-5" />
              <div className="text-6xl font-black">1</div>
              <p className="text-zinc-500 mt-3">Human Journey</p>
            </div>

            <div className="rounded-3xl border border-white/10 p-10">
              <HiOutlinePaperAirplane className="text-5xl text-yellow-300 mb-5" />
              <div className="text-6xl font-black">Many</div>
              <p className="text-zinc-500 mt-3">Stories</p>
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="relative py-36 overflow-hidden">

        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[180px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* LEFT CONTENT */}
            <div>

              <span className="uppercase tracking-[0.5em] text-rose-300 text-sm font-semibold">
                About The Project
              </span>

              <h2 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05]">
                Some Words
                <span className="block bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Were Meant To Heal
                </span>
              </h2>

              <div className="w-32 h-[2px] bg-gradient-to-r from-rose-300 to-purple-300 mt-10 mb-10" />

              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                Not every message reaches its destination.
                Some remain hidden inside journals,
                unfinished drafts, forgotten notes,
                and quiet moments that never found a voice.
              </p>

              <p className="text-lg text-zinc-500 leading-relaxed mb-8">
                Letters Never Sent is a collection of emotions,
                reflections, and truths left unspoken.
                It explores the words we wished we had said,
                the conversations we replay in our minds,
                and the pieces of ourselves we continue to carry.
              </p>

              <p className="text-lg text-zinc-500 leading-relaxed mb-12">
                Through storytelling, memory, and reflection,
                this project creates a space where vulnerability
                becomes strength and where untold stories
                can finally exist without fear of judgment.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
                  <h3 className="text-4xl font-black text-rose-300">
                    120+
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">
                    Letters Written
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
                  <h3 className="text-4xl font-black text-purple-300">
                    50+
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">
                    Stories Shared
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
                  <h3 className="text-4xl font-black text-pink-300">
                    10K+
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">
                    Readers Reached
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              {/* Main Image */}
              <div className="relative h-[700px] overflow-hidden rounded-[40px] border border-white/10">

                <Image
                  src="/project/letters-about.jpg"
                  alt="Letters Never Sent"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-10 -left-10 max-w-sm p-8 rounded-[30px] border border-white/10 bg-black/70 backdrop-blur-2xl">

                <div className="text-6xl text-rose-300 leading-none mb-4">

                </div>

                <p className="text-zinc-300 leading-relaxed">
                  Sometimes the most important conversations
                  are the ones we never had.
                </p>

                <div className="mt-6 flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-rose-400 to-purple-400" />

                  <div>
                    <p className="font-semibold">
                      Letters Never Sent
                    </p>
                    <p className="text-sm text-zinc-500">
                      Reflection Project
                    </p>
                  </div>

                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute top-8 right-8 px-5 py-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl">

                <span className="text-sm tracking-[0.3em] uppercase text-rose-300">
                  Since 2025
                </span>

              </div>

            </div>

          </div>

          {/* Bottom Section */}

          <div className="mt-32 grid md:grid-cols-3 gap-8">

            <div className="p-10 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">

              <h3 className="text-2xl font-bold mb-4">
                Reflection
              </h3>

              <p className="text-zinc-500 leading-relaxed">
                Exploring thoughts and emotions that often
                remain hidden beneath everyday life.
              </p>

            </div>

            <div className="p-10 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">

              <h3 className="text-2xl font-bold mb-4">
                Healing
              </h3>

              <p className="text-zinc-500 leading-relaxed">
                Creating space for understanding,
                forgiveness, growth, and acceptance.
              </p>

            </div>

            <div className="p-10 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">

              <h3 className="text-2xl font-bold mb-4">
                Connection
              </h3>

              <p className="text-zinc-500 leading-relaxed">
                Finding shared experiences through stories
                that resonate across different lives.
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
              Categories Of Letters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {collections.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                >
                  <Icon className="text-5xl text-rose-300 mb-6" />

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

      {/* SYMBOLS */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineHeart className="mx-auto text-6xl text-rose-300" />
              <h3 className="mt-5 text-2xl font-bold">Love</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineClock className="mx-auto text-6xl text-purple-300" />
              <h3 className="mt-5 text-2xl font-bold">Memory</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlinePaperAirplane className="mx-auto text-6xl text-pink-300" />
              <h3 className="mt-5 text-2xl font-bold">Release</h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-10 text-center">
              <HiOutlineSparkles className="mx-auto text-6xl text-yellow-300" />
              <h3 className="mt-5 text-2xl font-bold">Healing</h3>
            </div>

          </div>

        </div>

      </section>

      {/* LETTERS GRID */}
      <section className="relative py-40 overflow-hidden border-y border-white/10">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        {/* Ambient Effects */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-rose-500/10 rounded-full blur-[220px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-pink-500/10 rounded-full blur-[220px]" />
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-rose-500/5 rounded-full blur-[280px]" />

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="max-w-5xl mx-auto text-center mb-28">

            <span className="uppercase tracking-[0.5em] text-rose-300 text-sm font-semibold">
              Letters Never Sent
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight">

              Stories Never
              <span className="block bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Delivered
              </span>

            </h2>

            <p className="mt-8 text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
              Some words arrive too late.
              Some remain trapped inside journals,
              unfinished drafts, and quiet memories.
              These letters were never delivered,
              yet they still carry meaning.
            </p>

          </div>

          {/* Letters Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {letters.map((letter, index) => (

              <article
                key={index}
                className="
        group
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-700
        hover:-translate-y-4
        hover:border-rose-500/30
      "
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 via-transparent to-pink-500/5" />
                </div>

                {/* Image */}
                <div className="relative h-80 overflow-hidden">

                  <Image
                    src={letter.image}
                    alt={letter.title}
                    fill
                    className="
            object-cover
            transition-transform
            duration-1000
            group-hover:scale-110
          "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute top-6 left-6">
                    <div className="inline-flex items-center">
                      <span className="h-px w-8 bg-rose-300 mr-3" />
                      <span className="uppercase tracking-[0.35em] text-xs font-semibold text-rose-300">
                        {letter.category}
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">

                    <div className="flex items-center gap-3 text-xs text-zinc-300 mb-3">

                      <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                        {letter.readTime}
                      </span>

                      <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                        {letter.date}
                      </span>

                    </div>

                  </div>

                </div>

                {/* Content */}
                <div className="p-8">

                  <div className="flex items-center justify-between mb-4">

                    <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                      Letter #{index + 1}
                    </span>

                    <span className="text-zinc-500 text-sm">
                      {letter.views} reads
                    </span>

                  </div>

                  <h3 className="
          text-3xl
          font-black
          mb-5
          leading-snug
          group-hover:text-rose-300
          transition-colors
        ">
                    {letter.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {letter.excerpt}
                  </p>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 mb-6">

                    <p className="italic text-zinc-300 leading-relaxed">
                      &ldquo;{letter.quote}&rdquo;
                    </p>

                  </div>

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-sm text-zinc-500">
                        Written by
                      </p>

                      <p className="font-medium text-zinc-300">
                        {letter.author}
                      </p>

                    </div>

                    <button
                      className="
              flex
              items-center
              gap-2
              text-rose-300
              font-medium
              group/button
            "
                    >

                      Read Letter

                      <HiOutlineArrowRight
                        className="
                transition-transform
                duration-300
                group-hover/button:translate-x-1
              "
                      />

                    </button>

                  </div>

                </div>

                {/* Decorative Blur */}
                <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-rose-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

              </article>

            ))}

          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-40">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <HiOutlineStar className="mx-auto text-7xl text-rose-300 mb-10" />

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

      {/* CTA */}
      <section className="pb-32">

        <div className="max-w-6xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10">

            <Image
              src="/project/Letters Never Sent.png"
              alt=""
              fill
              className="object-cover opacity-20"
            />

            <div className="relative z-10 p-20 text-center">

              <HiOutlineEnvelope className="mx-auto text-7xl text-rose-300 mb-8" />

              <h2 className="text-6xl font-black mb-8">
                Explore More Letters
              </h2>

              <p className="max-w-3xl mx-auto text-xl text-zinc-300">
                Discover reflections, healing,
                gratitude, emotional growth,
                and stories that remained beautifully unfinished.
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

        </div>

      </section>

    </main >
  );
}