"use client";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineEnvelope,
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiOutlineBookOpen,
  HiOutlineHeart,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineGlobeAlt,
  HiOutlineStar,
  HiOutlineArchiveBox,
} from "react-icons/hi2";

const newsletters = [
  {
    title: "Echoes of Destiny",
    issue: "#024",
    description:
      "Stories, synchronicities, karmic signs, and reflections from the unseen paths that shape our lives.",
    icon: HiOutlineSparkles,
  },
  {
    title: "Letters Never Sent",
    issue: "#018",
    description:
      "Thoughts written for moments, people, and futures that existed only within the heart.",
    icon: HiOutlineEnvelope,
  },
  {
    title: "The Human Archive",
    issue: "#032",
    description:
      "A collection of observations, memories, emotions, and lessons gathered from ordinary lives.",
    icon: HiOutlineArchiveBox,
  },
  {
    title: "Before Her Name Existed",
    issue: "#011",
    description:
      "Fragments of intuition, destiny, and hope written before the story was complete.",
    icon: HiOutlineHeart,
  },
];

const archives = [
  "Soul & Synchronicity",
  "The Quiet Universe",
  "Moments That Changed Everything",
  "When Destiny Whispers",
  "Conversations With Silence",
  "Letters Across Time",
];

export default function NewslettersPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 backdrop-blur-xl">
              <HiOutlineSparkles className="h-4 w-4" />
              Vihaan Writes Newsletter Universe
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              Stories That
              <span className="block bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Arrive Like Letters
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-white/60 md:text-xl">
              A living collection of reflections, destiny, memories, human
              stories, and unseen connections delivered through the world of
              Vihaan Writes.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="group flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-black transition-all hover:scale-105">
                Subscribe
                <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10">
                Explore Archives
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Grid */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold">Featured Publications</h2>
            <p className="mt-4 text-white/60">
              Explore the four foundations of the newsletter universe.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {newsletters.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                        <Icon className="h-7 w-7" />
                      </div>

                      <span className="rounded-full border border-white/10 px-4 py-1 text-xs text-white/60">
                        {item.issue}
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-white/60">
                      {item.description}
                    </p>

                    <button className="mt-8 flex items-center gap-2 text-white transition group-hover:gap-4">
                      Read Collection
                      <HiOutlineArrowRight />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reading Experience */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <HiOutlineBookOpen className="h-10 w-10" />
              <h3 className="mt-6 text-2xl font-bold">
                Long Form Reflections
              </h3>
              <p className="mt-4 text-white/60">
                Deep essays, personal stories, and meaningful observations
                crafted with patience and intention.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <HiOutlineClock className="h-10 w-10" />
              <h3 className="mt-6 text-2xl font-bold">
                Weekly Deliveries
              </h3>
              <p className="mt-4 text-white/60">
                Consistent letters arriving with inspiration, perspective,
                creativity, and thoughtful storytelling.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <HiOutlineGlobeAlt className="h-10 w-10" />
              <h3 className="mt-6 text-2xl font-bold">
                Global Community
              </h3>
              <p className="mt-4 text-white/60">
                Readers connected through stories, shared experiences, and the
                search for meaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">Newsletter Archive</h2>
            <p className="mt-4 text-white/60">
              Browse previous editions and timeless reflections.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {archives.map((archive) => (
              <div
                key={archive}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between">
                  <HiOutlineDocumentText className="h-6 w-6 text-white/60" />
                  <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>

                <h3 className="mt-6 text-lg font-semibold">{archive}</h3>

                <p className="mt-2 text-sm text-white/50">
                  Explore archived thoughts and stories.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
    NEWSLETTER TIMELINE
      ========================= */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70">
              Journey Through The Universe
            </div>

            <h2 className="mt-6 text-5xl font-bold">
              The Evolution of Vihaan Writes
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-white/60">
              Every pillar emerged naturally. Not as a business plan,
              but as a collection of stories, emotions, memories,
              destiny and unanswered questions.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />

            <div className="space-y-20">
              {[
                {
                  year: "Beginning",
                  title: "Before Her Name Existed",
                  desc:
                    "A space dedicated to the unknown person who inspired countless pages before her arrival.",
                },
                {
                  year: "Growth",
                  title: "The Human Archive",
                  desc:
                    "Stories of ordinary people and extraordinary moments collected across life.",
                },
                {
                  year: "Reflection",
                  title: "Letters Never Sent",
                  desc:
                    "Words written for futures, memories, conversations and emotions.",
                },
                {
                  year: "Destiny",
                  title: "Echoes of Destiny",
                  desc:
                    "Exploring synchronicity, timing and the invisible patterns connecting lives.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
                    }`}
                >
                  <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                    <span className="text-sm uppercase tracking-[0.3em] text-white/40">
                      {item.year}
                    </span>

                    <h3 className="mt-4 text-3xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="hidden lg:flex justify-center">
                    <div className="h-6 w-6 rounded-full bg-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
    TESTIMONIALS
========================= */}
      <section className="relative overflow-hidden py-32">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/50">
              Community Voices
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Reader Reflections
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Words from readers who receive the newsletter and journey
              through stories, reflections, and thoughtful letters.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                quote:
                  "Every issue feels like a handwritten letter arriving at exactly the right moment.",
                name: "A Newsletter Reader",
              },
              {
                quote:
                  "A rare corner of the internet where thoughtful storytelling still feels timeless.",
                name: "Weekly Subscriber",
              },
              {
                quote:
                  "The writing lingers in the mind long after the final sentence has been read.",
                name: "Long-Time Reader",
              },
            ].map((item) => (
              <div
                key={item.quote}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
              >
                {/* Quote Mark */}
                <div className="absolute right-6 top-4 text-8xl font-serif text-white/5">
                  ”
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar
                      key={i}
                      className="h-5 w-5 text-white/70"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-8 text-xl leading-relaxed text-white/85">
                  {item.quote}
                </blockquote>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="text-sm text-white/40">
                      Vihaan Writes Newsletter
                    </p>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
            FAQ
      ========================== */}
      <section className="relative py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 text-lg text-white/60">
              Everything you need to know about the
              Vihaan Writes newsletter universe.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How often are newsletters published?",
                answer:
                  "Each newsletter follows its own creative rhythm. Some editions may arrive weekly, while others are released when a meaningful story, reflection, letter, or archive entry is ready to be shared. Quality and authenticity always come before fixed schedules.",
              },
              {
                question: "Is subscription free?",
                answer:
                  "Yes. Readers can subscribe and explore newsletters completely free. Future special editions, collections, or premium archives may be introduced, but the core reading experience remains accessible to everyone.",
              },
              {
                question: "Can I access old editions?",
                answer:
                  "Absolutely. Previous editions are preserved within the archive so readers can revisit stories, letters, reflections, and published collections whenever they wish.",
              },
              {
                question: "What topics are covered?",
                answer:
                  "The newsletters explore personal storytelling, destiny, relationships, unsent letters, emotional journeys, human experiences, creative reflections, memories, life lessons, and the evolving world of Vihaan Writes.",
              },
              {
                question: "Can readers contribute stories?",
                answer:
                  "Yes. Selected newsletters may invite reader submissions, personal experiences, letters, reflections, or stories that align with the theme of a publication. Contribution opportunities will be announced when available.",
              },
              {
                question: "Will I receive updates about new books?",
                answer:
                  "Subscribers are among the first to hear about upcoming books, new writing projects, special releases, author notes, and behind-the-scenes creative journeys from Vihaan Writes.",
              },
              {
                question: "Can I unsubscribe anytime?",
                answer:
                  "Of course. Every newsletter includes an unsubscribe option, allowing you to manage your subscription preferences at any time with complete control.",
              },
              {
                question: "What makes these newsletters different?",
                answer:
                  "Rather than focusing on trends or news cycles, these newsletters are built around timeless stories, emotions, human connections, personal reflections, and meaningful narratives that readers can return to years later.",
              },
            ].map((faq) => (
              <div
                key={faq.question}
                className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <h3 className="text-xl font-semibold text-white">
                  {faq.question}
                </h3>

                <p className="mt-4 leading-relaxed text-white/60">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
         FEATURED ISSUE SPOTLIGHT
        ========================= */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-purple-500/10 via-white/[0.03] to-cyan-500/10 p-10 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60">
                  Featured Edition
                </span>

                <h2 className="mt-6 text-5xl font-bold">
                  When Destiny Arrives Quietly
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-white/60">
                  A reflection on invisible timing, karmic meetings,
                  synchronicities and the mysterious moments that
                  reshape an entire life without warning.
                </p>

                <button className="mt-10 flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-black">
                  Read Full Issue
                  <HiOutlineArrowRight />
                </button>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">
                <div className="text-sm uppercase tracking-[0.4em] text-white/40">
                  Newsletter Highlights
                </div>

                <div className="mt-8 space-y-5">
                  {[
                    "Karmic Timing",
                    "Invisible Connections",
                    "Soul Recognition",
                    "Life Synchronicities",
                    "Personal Reflection",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 p-4"
                    >
                      <HiOutlineSparkles />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
    NEWSLETTER BENEFITS
========================= */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Why Readers Subscribe
            </h2>

            <p className="mt-5 text-white/60">
              More than newsletters. A collection of meaningful experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Deep Reflection",
                desc: "Thoughtful essays exploring life, purpose and destiny.",
              },
              {
                title: "Human Stories",
                desc: "Authentic experiences gathered from everyday lives.",
              },
              {
                title: "Creative Inspiration",
                desc: "Ideas and perspectives that spark imagination.",
              },
              {
                title: "Timeless Archives",
                desc: "Access a growing library of meaningful writing.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-white/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
    AUTHOR SECTION
========================= */}
      <section className="relative py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-12 lg:p-16">
            {/* Glow Effects */}
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[260px_1fr]">
              {/* Author Image */}
              <div className="flex justify-center">
                <div className="group relative">
                  {/* Animated Border */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-70 blur-md transition duration-500 group-hover:opacity-100" />

                  <div className="relative h-60 w-60 overflow-hidden rounded-full border border-white/20 bg-black">
                    <Image
                      src="/images/vihaan.jpg"
                      alt="Vihaan"
                      fill
                      priority
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-white/40">
                  <span className="h-px w-10 bg-white/20" />
                  About The Writer
                </span>

                <h2 className="mt-5 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                  Vihaan
                </h2>

                <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/65">
                  <p>
                    Through essays, reflections, letters and stories,
                    <span className="font-medium text-white">
                      {" "}Vihaan Writes{" "}
                    </span>
                    explores memory, destiny, human experiences, hope,
                    love and the invisible threads connecting our lives.
                  </p>

                  <p>
                    Every newsletter exists as part of a larger universe—
                    one built slowly through observations, emotions,
                    unanswered questions and meaningful stories.
                  </p>

                  <p>
                    From personal reflections to timeless questions about
                    connection and purpose, each piece invites readers into
                    a quieter space where stories become mirrors and words
                    become companions.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-white">100+</div>
                    <div className="mt-1 text-sm text-white/50">
                      Reflections & Essays
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-white">4</div>
                    <div className="mt-1 text-sm text-white/50">
                      Core Story Universes
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-white">∞</div>
                    <div className="mt-1 text-sm text-white/50">
                      Stories Yet To Be Told
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}