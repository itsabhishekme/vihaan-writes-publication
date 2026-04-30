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
  {
    slug: "deep-readers-memory",
    title: "Why Deep Readers Remember Certain Books Forever",
    excerpt:
      "Meaningful books stay because they connect with emotion, not just plot.",
    image: "/blog1.jpg",
    date: "2026-04-10",
    time: "12 min read",
    category: "Books",
    tags: ["Deep Reading", "Psychology", "Memory", "Astrology"],
    author: "Vihaan",
    featured: true,
    audio: "/audio/deep-readers.mp3",

    content: (
      <>
        <p className="text-xl text-neutral-200 leading-relaxed">
          Some books don’t stay in your memory — they become part of your soul.
        </p>

        <p>
          You were never meant to read casually. With your Aries (Mesh) Moon,
          emotions don’t pass through you — they imprint. That’s why certain
          books don’t feel like stories… they feel like memories you never lived,
          yet somehow recognize.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Emotional Imprinting Through Reading
        </h2>

        <p>
          Most people read for information. You read for emotional truth.
          Every sentence you connect with activates something deeper —
          something karmic.
        </p>

        <p>
          Aries Moon individuals absorb emotional intensity instantly.
          When a line resonates, it doesn’t stay on the page — it becomes part
          of your identity.
        </p>

        <blockquote className="border-l-4 border-white/20 pl-6 italic text-neutral-400 text-lg">
          “You don’t remember books — you remember who you became while reading them.”
        </blockquote>

        <h2 className="text-2xl font-bold text-white mt-10">
          Why You Forget Plots But Remember Feelings
        </h2>

        <p>
          Logical memory fades. Emotional memory stays.
        </p>

        <p>
          You may forget characters, timelines, and endings —
          but you never forget how a sentence made you pause.
        </p>

        <p>
          This is because your emotional brain is stronger than your analytical
          one. You store feelings, not facts.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Karmic Books and Destiny Alignment
        </h2>

        <p>
          Some books are not random. They arrive when you need them.
        </p>

        <p>
          Your kundali suggests strong karmic alignment with words and
          storytelling. This means certain books act like guides —
          appearing at the exact moment your soul needs direction.
        </p>

        <p>
          That’s why some books feel like they were written for you.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Reading as Identity Formation
        </h2>

        <p>
          Over time, these books shape your thoughts, your beliefs,
          and even your emotional reactions.
        </p>

        <p>
          You don’t just read stories — you carry them into your life.
        </p>

        <p>
          They influence your decisions, your writing, and even
          the way you love.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Your Soul is Wired for Depth
        </h2>

        <p>
          Surface-level content will never satisfy you.
        </p>

        <p>
          You seek depth, meaning, and emotional resonance.
          That’s why only a few books stay — but those few stay forever.
        </p>

        <p className="text-xl text-neutral-200 mt-10">
          The deepest books don’t sit on your shelf — they live inside you.
        </p>
      </>
    ),
  },

  {
    slug: "modern-love-old-souls",
    title: "Modern Love, Old Souls, New Lessons",
    excerpt:
      "Even in modern chaos, love still carries ancient emotional truths.",
    image: "/blog2.jpg",
    date: "2026-03-18",
    time: "13 min read",
    category: "Love",
    tags: ["Love", "Soul", "Astrology", "Relationships"],
    author: "Vihaan",
    audio: "/audio/modern-love.mp3",

    content: (
      <>
        <p className="text-xl text-neutral-200">
          Love today moves fast — but your soul was never designed for speed.
        </p>

        <p>
          You belong to a different emotional timeline.
          While the world prefers convenience, your Aries Moon seeks intensity,
          truth, and emotional depth.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          The Conflict Between Speed and Depth
        </h2>

        <p>
          Modern relationships are built on instant connection —
          messages, swipes, quick validation.
        </p>

        <p>
          But your emotional system doesn’t work like that.
          You connect deeply, quickly, and honestly.
        </p>

        <p>
          And that creates mismatch.
        </p>

        <blockquote className="border-l-4 border-white/20 pl-6 italic text-neutral-400 text-lg">
          “You are not too intense — you are just in the wrong emotional era.”
        </blockquote>

        <h2 className="text-2xl font-bold text-white mt-10">
          Old Soul Energy in a Fast World
        </h2>

        <p>
          Your chart reflects old soul energy.
          You don’t seek attention — you seek connection.
        </p>

        <p>
          Loyalty matters to you. Depth matters to you.
          And that makes your love rare.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Karmic Relationships and Lessons
        </h2>

        <p>
          Not every love is meant to stay.
        </p>

        <p>
          Some relationships enter your life only to teach you
          emotional lessons — self-worth, boundaries, patience.
        </p>

        <p>
          These are karmic connections. They feel intense,
          but they are temporary.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Why You Feel More Than Others
        </h2>

        <p>
          Aries Moon amplifies emotional reactions.
          You don’t hold back — you feel fully.
        </p>

        <p>
          That’s why love affects you deeply.
        </p>

        <p>
          But this is not weakness — it is emotional intelligence.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          The Right Love Will Feel Different
        </h2>

        <p>
          The right connection will not confuse you.
          It will not rush you.
        </p>

        <p>
          It will match your emotional depth naturally.
        </p>

        <p>
          And when it arrives — you won’t have to question it.
        </p>

        <p className="text-xl text-neutral-200 mt-10">
          The world may move fast — but your soul knows exactly when to wait.
        </p>
      </>
    ),
  },

  {
    slug: "writing-healing",
    title: "How Writing Becomes Healing",
    excerpt:
      "Sometimes the page listens better than the world around us.",
    image: "/blog3.jpg",
    date: "2026-03-05",
    time: "12 min read",
    category: "Healing",
    tags: ["Writing", "Healing", "Astrology", "Self Growth"],
    author: "Vihaan",
    audio: "/audio/writing-healing.mp3",

    content: (
      <>
        <p className="text-xl text-neutral-200">
          Writing is not expression — it is emotional survival.
        </p>

        <p>
          There are emotions you cannot explain out loud.
          Not because they are weak — but because they are too deep.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Why Writing Feels Natural to You
        </h2>

        <p>
          Your kundali strongly indicates creative expression as a life path.
        </p>

        <p>
          With Aries Moon, emotions rise quickly.
          Writing becomes the safest outlet.
        </p>

        <p>
          It gives your emotions direction instead of chaos.
        </p>

        <blockquote className="border-l-4 border-white/20 pl-6 italic text-neutral-400 text-lg">
          “You don’t write because you want to — you write because your soul needs it.”
        </blockquote>

        <h2 className="text-2xl font-bold text-white mt-10">
          Writing Organizes Inner Chaos
        </h2>

        <p>
          When you write, your thoughts slow down.
        </p>

        <p>
          Emotions become structured.
          Confusion becomes clarity.
        </p>

        <p>
          It’s not just expression — it’s understanding.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Writing as Karmic Purpose
        </h2>

        <p>
          You are not just meant to write for yourself.
        </p>

        <p>
          Your words are meant to reach others —
          to heal, to guide, to resonate.
        </p>

        <p>
          This is your dharma.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Healing Happens Slowly
        </h2>

        <p>
          Writing does not erase pain instantly.
        </p>

        <p>
          But it reduces its weight.
        </p>

        <p>
          Over time, what once hurt deeply becomes something
          you understand — and eventually, something you transform.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Your Words Are Your Legacy
        </h2>

        <p>
          Every sentence you write carries emotion.
        </p>

        <p>
          And those emotions will connect with someone else someday.
        </p>

        <p>
          That is the power of your writing.
        </p>

        <p className="text-xl text-neutral-200 mt-10">
          Somewhere between your words, your healing begins.
        </p>
      </>
    ),
  },
];