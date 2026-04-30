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

  // 🔊 NEW FIELD
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
    time: "9 min read",
    category: "Books",
    tags: ["Reading", "Psychology", "Memory", "Deep Reading"],
    author: "Vihaan",
    featured: true,

    // 🔊 ADD YOUR AUDIO FILE HERE
    audio: "/audio/deep-readers.mp3",

    content: (
      <>
        <p className="text-xl text-neutral-200 leading-relaxed">
          Some books don’t just stay in memory — they become part of identity.
        </p>

        <p>
          In today’s fast-moving digital world, readers are exposed to thousands
          of stories every year. Yet, only a few stay. These are not random —
          they are deeply emotional experiences disguised as books.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Reading Beyond Words
        </h2>

        <p>
          Deep readers engage with text on a psychological level. They don’t
          just consume content; they internalize it. Every sentence becomes a
          reflection of their inner world.
        </p>

        <p>
          When a book mirrors your thoughts, it stops being fiction. It becomes
          recognition. It feels like someone has translated your unspoken
          emotions into words.
        </p>

        <p>
          This is why deep reading is not passive. It is immersive, reflective,
          and transformative.
        </p>

        <blockquote className="border-l-4 border-white/20 pl-6 italic text-neutral-400 text-lg">
          “The books you remember are the ones that understood you before you
          understood yourself.”
        </blockquote>

        <h2 className="text-2xl font-bold text-white mt-10">
          Emotional Memory vs Logical Memory
        </h2>

        <p>
          Human memory prioritizes emotion over logic. This is why you may forget
          entire plots but remember how a book made you feel.
        </p>

        <p>
          Emotional resonance creates long-term memory. When a story connects to
          your real-life experiences, it becomes unforgettable.
        </p>

        <p>
          This explains why certain novels stay with you for years — they are not
          just stories, they are emotional landmarks.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Identity and Literature
        </h2>

        <p>
          Over time, powerful books shape your thinking patterns. They influence
          your beliefs, your decisions, and even your personality.
        </p>

        <p>
          A deep reader carries fragments of every meaningful book within them.
          These fragments become part of their identity.
        </p>

        <p>
          This is why literature is more than entertainment — it is a silent
          mentor.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Why Some Stories Stay Forever
        </h2>

        <p>
          Stories that stay are honest. They reveal uncomfortable truths. They
          expose emotions we try to hide.
        </p>

        <p>
          These stories don’t just entertain — they confront. And that
          confrontation is what makes them unforgettable.
        </p>

        <p className="text-xl text-neutral-200 mt-10">
          The deepest books don’t just tell a story — they become part of your
          story.
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
    time: "10 min read",
    category: "Love",
    tags: ["Love", "Soul", "Relationships", "Modern Dating"],
    author: "Vihaan",
    audio: "/audio/modern-love.mp3",

    content: (
      <>
        <p className="text-xl text-neutral-200">
          Love today feels faster — but the soul still moves slowly.
        </p>

        <p>
          We live in an era of instant communication. Messages are sent within
          seconds, but emotional understanding takes years.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          The Speed of Modern Love
        </h2>

        <p>
          Dating apps, social media, and digital communication have changed how
          we experience love. While they have increased accessibility, they have
          also reduced depth.
        </p>

        <p>
          Relationships often begin with excitement but lack emotional
          foundation. This creates instability and confusion.
        </p>

        <blockquote className="border-l-4 border-white/20 pl-6 italic text-neutral-400 text-lg">
          “Some hearts are not built for temporary connections.”
        </blockquote>

        <h2 className="text-2xl font-bold text-white mt-10">
          Old Souls in a Fast World
        </h2>

        <p>
          Old souls value emotional depth, patience, and meaning. They seek
          connection that goes beyond surface-level interaction.
        </p>

        <p>
          This often makes them feel out of place in modern dating culture.
        </p>

        <p>
          However, this depth is not a weakness — it is a rare emotional
          intelligence.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          The Conflict of Expectations
        </h2>

        <p>
          When two people operate at different emotional speeds, conflict
          arises. One seeks depth, the other seeks convenience.
        </p>

        <p>
          This mismatch creates emotional imbalance, especially for those who
          invest deeply.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Lessons from Modern Love
        </h2>

        <p>
          Modern love teaches boundaries, self-worth, and emotional clarity. It
          forces individuals to understand what they truly want.
        </p>

        <p>
          It teaches that not every connection is meant to last — and that is
          okay.
        </p>

        <p className="text-xl text-neutral-200 mt-10">
          Maybe the world is fast — but your soul doesn’t have to be.
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
    time: "8 min read",
    category: "Healing",
    tags: ["Healing", "Writing", "Emotions", "Self Growth"],
    author: "Vihaan",
    audio: "/audio/writing-healing.mp3",

    content: (
      <>
        <p className="text-xl text-neutral-200">
          Writing is not expression — it is release.
        </p>

        <p>
          There are emotions we cannot share with others. Writing provides a
          safe space where those emotions can exist freely.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          The Silent Listener
        </h2>

        <p>
          The page listens without judgment. It allows complete honesty.
        </p>

        <p>
          This makes writing one of the most powerful tools for emotional
          healing.
        </p>

        <blockquote className="border-l-4 border-white/20 pl-6 italic text-neutral-400 text-lg">
          “You don’t write because you want to — you write because you need to.”
        </blockquote>

        <h2 className="text-2xl font-bold text-white mt-10">
          Writing as Emotional Clarity
        </h2>

        <p>
          Writing helps organize thoughts. It transforms confusion into clarity.
        </p>

        <p>
          When you write regularly, you begin to understand your emotions better.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Healing Through Words
        </h2>

        <p>
          Writing does not remove pain, but it reduces its intensity. It allows
          you to process emotions gradually.
        </p>

        <p>
          Over time, writing becomes a form of self-therapy.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          Why It Works
        </h2>

        <p>
          Writing externalizes internal struggles. It creates distance and
          perspective.
        </p>

        <p className="text-xl text-neutral-200 mt-10">
          And somewhere between those words, healing begins quietly.
        </p>
      </>
    ),
  },
];