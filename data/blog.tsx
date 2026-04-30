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

  // 🔥 extended fields
  category?: string;
  tags?: string[];
  author?: string;
  featured?: boolean;
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
    time: "5 min read",
    category: "Books",
    tags: ["Reading", "Psychology", "Memory"],
    author: "Vihaan",
    featured: true,

    content: (
      <>
        {/* INTRO */}
        <p className="text-xl text-neutral-200 leading-relaxed">
          Some books don’t just stay in memory — they become part of identity.
        </p>

        <p>
          Deep readers don’t read for plot alone. They read for emotional
          resonance, meaning, and something that reflects their inner world.
        </p>

        {/* SECTION */}
        <h2 className="text-2xl font-bold text-white mt-10">
          Reading Beyond Words
        </h2>

        <p>
          When a story mirrors your thoughts, it no longer feels like fiction —
          it feels like recognition. It feels like someone has reached into your
          inner world and written what you couldn’t express.
        </p>

        {/* QUOTE */}
        <blockquote className="border-l-4 border-white/20 pl-6 italic text-neutral-400 text-lg">
          “The books you remember are the ones that understood you before you
          understood yourself.”
        </blockquote>

        {/* SECTION */}
        <h2 className="text-2xl font-bold text-white mt-10">
          Why Some Stories Stay Forever
        </h2>

        <p>
          Memory is emotional, not logical. That’s why you forget plots but
          remember feelings. You forget characters but remember how they made
          you feel.
        </p>

        <p>
          The deepest books don’t entertain — they transform. They become part
          of your thinking, your identity, your perception of life.
        </p>

        {/* END */}
        <p className="text-xl text-neutral-200 mt-10">
          That’s why certain books feel unforgettable — because they didn’t just
          tell a story, they understood you.
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
    time: "7 min read",
    category: "Love",
    tags: ["Love", "Soul", "Relationships"],
    author: "Vihaan",

    content: (
      <>
        <p className="text-xl text-neutral-200">
          Love today feels faster — but the soul still moves slowly.
        </p>

        <p>
          We live in a world of instant messages, quick attachments, and faster
          endings. Yet something inside us still craves depth, patience, and
          emotional truth.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          The Conflict of Time
        </h2>

        <p>
          Modern relationships are built on speed, but real connection requires
          stillness. This mismatch creates confusion — especially for old souls.
        </p>

        <blockquote className="border-l-4 border-white/20 pl-6 italic text-neutral-400 text-lg">
          “Some hearts are not built for temporary connections.”
        </blockquote>

        <p>
          Old souls don’t struggle with love — they struggle with how love is
          practiced today.
        </p>

        <p className="text-xl text-neutral-200">
          And maybe that’s not a weakness — maybe that’s your strength.
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
    time: "4 min read",
    category: "Healing",
    tags: ["Healing", "Writing", "Emotions"],
    author: "Vihaan",

    content: (
      <>
        <p className="text-xl text-neutral-200">
          Writing is not expression — it is release.
        </p>

        <p>
          There are things we cannot say out loud. Not because they are wrong —
          but because they are too real.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">
          The Silent Listener
        </h2>

        <p>
          The page becomes a silent listener, absorbing everything without
          judgment. It gives space where the world doesn’t.
        </p>

        <blockquote className="border-l-4 border-white/20 pl-6 italic text-neutral-400 text-lg">
          “You don’t write because you want to — you write because you need to.”
        </blockquote>

        <p>
          And somewhere between those words, healing begins quietly.
        </p>
      </>
    ),
  },
];

/* ================= HELPERS ================= */

// 🔍 Single post
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// 📄 All slugs (Next.js)
export function getAllSlugs(): { slug: string }[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// 🔥 Featured post
export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured);
}

// 🔥 Related posts
export function getRelatedPosts(
  slug: string,
  limit = 2
): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== slug)
    .slice(0, limit);
}

// 🔥 Filter by category
export function getPostsByCategory(category: string) {
  return blogPosts.filter((post) => post.category === category);
}