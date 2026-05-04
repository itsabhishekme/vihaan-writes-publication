import { ReactNode } from "react";

/* ================= TYPES ================= */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: ReactNode;
  image: string;
  date: string;
  time: string;
  category?: string;
  tags?: string[];
  author?: string;
  featured?: boolean;
  audio?: string;
};

/* ================= DATA ================= */

export const blogPosts: BlogPost[] = [
  /* ================= BLOG 1 ================= */

  {
    slug: "deep-readers-memory",
    title: "Why Deep Readers Remember Certain Books Forever",
    excerpt:
      "Some books don’t just stay in memory — they become part of who you are. This is why deep readers never truly forget the stories that changed them.",
    image: "/blog1.jpg",
    date: "2026-04-10",
    time: "12 min read",
    category: "Books",
    tags: ["Deep Reading", "Memory", "Psychology", "Emotions"],
    author: "Vihaan",
    featured: true,
    audio: "/audio/deep-readers.mp3",

    content: (
      <div className="space-y-8">

        <p className="text-xl text-neutral-200 leading-relaxed">
          Some books don’t stay in your memory — they become part of your identity.
        </p>

        <p className="text-neutral-300 leading-relaxed">
          You may forget the exact plot, the names of characters, or even the ending,
          but there are certain lines, emotions, and moments that never leave you.
          They stay somewhere deeper — not in your mind, but in your emotional memory.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-lg text-neutral-300">
          “You don’t remember books — you remember who you became while reading them.”
        </blockquote>

        <h2 className="text-2xl font-bold text-white">Reading Beyond Information</h2>

        <p className="text-neutral-300">
          Most people read for knowledge. They look for information, insights, or entertainment.
          But deep readers don’t just consume words — they experience them.
        </p>

        <p className="text-neutral-300">
          Every sentence is felt. Every paragraph becomes an emotional imprint.
          That is why some books don’t feel like stories — they feel like memories you never lived, yet somehow recognize.
        </p>

        <h2 className="text-2xl font-bold text-white">Emotional Imprinting</h2>

        <p className="text-neutral-300">
          The human brain remembers emotions more strongly than facts.
          When a book connects with your emotional state, it creates a lasting imprint.
        </p>

        <p className="text-neutral-300">
          That’s why you might forget entire chapters but still remember a single line that made you pause for minutes.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-white/10 text-center italic text-neutral-300">
          The deeper the emotion, the stronger the memory.
        </div>

        <h2 className="text-2xl font-bold text-white">Why Only Certain Books Stay</h2>

        <p className="text-neutral-300">
          Not every book leaves a mark — and that’s important.
        </p>

        <p className="text-neutral-300">
          The ones that stay are not random. They appear at the right moment in your life.
          When you are ready to understand something, a book arrives that speaks directly to that part of you.
        </p>

        <p className="text-neutral-300">
          It feels personal, almost as if it was written specifically for you.
        </p>

        <h2 className="text-2xl font-bold text-white">Books That Shape You</h2>

        <p className="text-neutral-300">
          Over time, these books begin to influence how you think, how you feel, and how you see the world.
        </p>

        <p className="text-neutral-300">
          They shape your beliefs, your emotional responses, and even your relationships.
        </p>

        <p className="text-neutral-300">
          You don’t just read them — you carry them.
        </p>

        <blockquote className="border-l-4 border-pink-500 pl-6 italic text-neutral-300 text-lg">
          Some books are not read — they are lived.
        </blockquote>

        <h2 className="text-2xl font-bold text-white">Your Connection With Words</h2>

        <p className="text-neutral-300">
          If you are someone who remembers books deeply, it means you are emotionally receptive.
        </p>

        <p className="text-neutral-300">
          You don’t filter experiences through logic first — you feel them.
        </p>

        <p className="text-neutral-300">
          And that is not weakness — it is depth.
        </p>

        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-white/10 text-center">
          <p className="text-xl italic text-white">
            The deepest books don’t sit on your shelf —
          </p>
          <p className="text-xl italic text-white mt-2">
            they live inside you forever.
          </p>
        </div>

        <p className="text-right mt-10 text-lg">
          — <strong>Vihaan</strong>
        </p>
      </div>
    ),
  },

  /* ================= BLOG 2 ================= */

  {
    slug: "modern-love-old-souls",
    title: "Modern Love, Old Souls, New Lessons",
    excerpt:
      "In a fast-moving world, some hearts still seek depth. This is a reflection on love for those who feel too deeply in a surface-level era.",
    image: "/blog2.jpg",
    date: "2026-03-18",
    time: "13 min read",
    category: "Love",
    tags: ["Love", "Old Soul", "Relationships"],
    author: "Vihaan",
    audio: "/audio/modern-love.mp3",

    content: (
      <div className="space-y-8">

        <p className="text-xl text-neutral-200">
          Love today moves fast — but your soul was never designed for speed.
        </p>

        <p className="text-neutral-300">
          In a world driven by instant messages, quick connections, and temporary emotions,
          there are still some hearts that move differently.
        </p>

        <p className="text-neutral-300">
          Hearts that don’t just want attention — they want depth.
        </p>

        <blockquote className="border-l-4 border-pink-500 pl-6 italic text-lg text-neutral-300">
          “You are not too intense — you are just in the wrong emotional era.”
        </blockquote>

        <h2 className="text-2xl font-bold text-white">The Speed of Modern Love</h2>

        <p className="text-neutral-300">
          Today, relationships often begin quickly and end even faster.
        </p>

        <p className="text-neutral-300">
          Conversations are short. Emotions are temporary. Connections are replaceable.
        </p>

        <p className="text-neutral-300">
          But not for everyone.
        </p>

        <h2 className="text-2xl font-bold text-white">Old Souls in a New World</h2>

        <p className="text-neutral-300">
          Some people feel everything deeply.
        </p>

        <p className="text-neutral-300">
          They don’t connect easily — but when they do, it’s real.
        </p>

        <p className="text-neutral-300">
          They don’t love casually — they love completely.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-white/10 text-center italic text-neutral-300">
          Depth is rare — and that’s why it feels lonely.
        </div>

        <h2 className="text-2xl font-bold text-white">Why You Feel Different</h2>

        <p className="text-neutral-300">
          You are not designed for surface-level connections.
        </p>

        <p className="text-neutral-300">
          You seek meaning, emotional safety, and real understanding.
        </p>

        <p className="text-neutral-300">
          And because of that, you may often feel misunderstood.
        </p>

        <h2 className="text-2xl font-bold text-white">The Right Love</h2>

        <p className="text-neutral-300">
          The right connection will not confuse you.
        </p>

        <p className="text-neutral-300">
          It will feel calm, natural, and emotionally aligned.
        </p>

        <p className="text-neutral-300">
          It will match your depth instead of avoiding it.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-neutral-300 text-lg">
          Real love doesn’t rush — it understands.
        </blockquote>

        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-white/10 text-center">
          <p className="text-xl italic text-white">
            The world may move fast —
          </p>
          <p className="text-xl italic text-white mt-2">
            but your soul knows exactly when to wait.
          </p>
        </div>

        <p className="text-right mt-10 text-lg">
          — <strong>Vihaan</strong>
        </p>
      </div>
    ),
  },

  /* ================= BLOG 3 ================= */

  {
    slug: "writing-healing",
    title: "How Writing Becomes Healing",
    excerpt:
      "Writing is more than expression — it is a process of healing, clarity, and emotional transformation.",
    image: "/blog3.jpg",
    date: "2026-03-05",
    time: "12 min read",
    category: "Healing",
    tags: ["Writing", "Healing", "Self Growth"],
    author: "Vihaan",
    audio: "/audio/writing-healing.mp3",

    content: (
      <div className="space-y-8">

        <p className="text-xl text-neutral-200">
          Writing is not expression — it is emotional survival.
        </p>

        <p className="text-neutral-300">
          There are emotions that cannot be spoken.
        </p>

        <p className="text-neutral-300">
          Not because they are weak — but because they are too deep.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-lg text-neutral-300">
          “You don’t write because you want to — you write because your soul needs it.”
        </blockquote>

        <h2 className="text-2xl font-bold text-white">Writing Creates Clarity</h2>

        <p className="text-neutral-300">
          When you write, your thoughts slow down.
        </p>

        <p className="text-neutral-300">
          Emotions become structured. Confusion becomes understanding.
        </p>

        <h2 className="text-2xl font-bold text-white">Healing Through Words</h2>

        <p className="text-neutral-300">
          Writing does not erase pain — but it reduces its weight.
        </p>

        <p className="text-neutral-300">
          Over time, what once hurt deeply becomes something you understand.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-white/10 text-center italic text-neutral-300">
          Healing begins when emotions are expressed.
        </div>

        <h2 className="text-2xl font-bold text-white">Your Words Matter</h2>

        <p className="text-neutral-300">
          Every sentence you write carries emotion.
        </p>

        <p className="text-neutral-300">
          And those emotions will connect with someone else someday.
        </p>

        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-white/10 text-center">
          <p className="text-xl italic text-white">
            Somewhere between your words —
          </p>
          <p className="text-xl italic text-white mt-2">
            your healing begins.
          </p>
        </div>

        <p className="text-right mt-10 text-lg">
          — <strong>Vihaan</strong>
        </p>
      </div>
    ),
  },

  /* ================= BLOG 4 ================= */

  {
    slug: "to-the-one-i-loved-before-i-knew-you",
    title:
      "To the One I Loved Before I Knew You: A Letter to the Woman My Heart Always Knew Was Coming",
    excerpt:
      "A deeply personal love letter about destiny, waiting, and a connection that existed long before two souls meet.",
    image: "/blog-love-destiny.jpg",
    date: "2026-05-05",
    time: "10 min read",
    category: "Love",
    tags: ["Soulmate", "Destiny", "Love Letter"],
    author: "Vihaan",
    featured: true,
    audio: "/audio/loved-before-i-knew-you.mp3",

    content: (
      <div className="space-y-8">

        <p className="text-xl text-neutral-200">
          This is not just a letter — it is a memory of a love that existed before reality.
        </p>

        <p className="text-neutral-300">
          To the one I loved before I knew you… this has always been for you.
        </p>

        <p className="text-neutral-300">
          Long before I knew your name, your face, or your voice —
          something inside me already recognized you.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-lg text-neutral-300">
          “Some souls don’t meet for the first time — they recognize each other.”
        </blockquote>

        <p className="text-neutral-300">
          This letter was written in silence, in waiting, in moments where you were not present —
          yet deeply felt.
        </p>

        <p className="text-neutral-300">
          It is about hope. It is about patience. It is about believing in something you cannot see.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-white/10 text-center italic text-neutral-300">
          Love doesn’t always begin with meeting — sometimes it begins with remembering.
        </div>

        <p className="text-neutral-300">
          If you have ever waited for a love that feels destined —
          this letter is for you.
        </p>

        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-white/10 text-center">
          <p className="text-xl italic text-white">
            True love is never late —
          </p>
          <p className="text-xl italic text-white mt-2">
            it arrives exactly when both souls are ready.
          </p>
        </div>

        <p className="text-right mt-10 text-lg">
          — <strong>Vihaan</strong>
        </p>
      </div>
    ),
  },
];