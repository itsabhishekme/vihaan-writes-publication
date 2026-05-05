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
      "To the One I Loved Before I Knew You",
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

  /* ================= BLOG 5 ================= */

  {
    slug: "the-future-i-already-knew-destiny-astrology-family-spouse",
    title:
      "The Future I Already Knew",
    excerpt:
      "A powerful reflection on destiny, family, astrology, and the mysterious feeling that parts of our life were written long before we lived them.",
    image: "/blog-future-destiny.jpg",
    date: "2026-05-06",
    time: "12 min read",
    category: "Destiny",
    tags: ["Astrology", "Destiny", "Life Journey", "Soulmate", "Karma"],
    author: "Vihaan",
    featured: true,
    audio: "/audio/future-i-already-knew.mp3",

    content: (
      <div className="space-y-10">

        {/* Opening */}
        <p className="text-xl text-neutral-200 leading-relaxed">
          This is not just a story — it is a realization that unfolded slowly, quietly, and almost invisibly over time.
        </p>

        <p className="text-neutral-300">
          <strong>The Future I Already Knew</strong> is a deeply personal journey into the mysterious connection between life, destiny, family, and astrology.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-lg text-neutral-300">
          “What if parts of your future were already written long before you began living them?”
        </blockquote>

        {/* Background */}
        <p className="text-neutral-300">
          Born in Chapra, Bihar, my life began like anyone else’s — surrounded by family, responsibilities, and the quiet pressure to find meaning in ordinary days.
        </p>

        <p className="text-neutral-300">
          There was nothing extraordinary in the beginning. Just time passing, decisions unfolding, and experiences shaping who I was becoming.
        </p>

        <p className="text-neutral-300">
          But as years passed, something began to feel different.
        </p>

        {/* Recognition */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/10 text-center italic text-neutral-300">
          Certain moments didn’t feel new — they felt remembered.
        </div>

        <p className="text-neutral-300">
          Situations, emotions, even struggles… they carried a strange familiarity, as if life was following a pattern that already existed somewhere beyond my awareness.
        </p>

        {/* Astrology Discovery */}
        <p className="text-neutral-300">
          That curiosity led me toward astrology — the ancient language that studies the connection between human life and cosmic patterns at the moment of birth.
        </p>

        <p className="text-neutral-300">
          And what I discovered was not prediction — it was reflection.
        </p>

        <blockquote className="border-l-4 border-pink-500 pl-6 italic text-lg text-neutral-300">
          “It didn’t tell me my future. It showed me the pattern of my life.”
        </blockquote>

        {/* Chart Reflection */}
        <p className="text-neutral-300">
          The birth chart created on the day I was born seemed to echo the very themes my life had already revealed:
        </p>

        <ul className="list-disc pl-6 text-neutral-300 space-y-2">
          <li>Early struggles that quietly built resilience</li>
          <li>Long seasons of waiting that tested patience</li>
          <li>A deep search for meaning and identity</li>
          <li>And subtle yet powerful clues about a future spouse who had not yet appeared</li>
        </ul>

        {/* Emotional Insight */}
        <p className="text-neutral-300">
          It wasn’t about believing blindly. It was about recognizing patterns that felt too precise to ignore.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-white/10 text-center italic text-neutral-300">
          Sometimes, life doesn’t surprise us — it unfolds exactly the way it was meant to.
        </div>

        {/* Deeper Meaning */}
        <p className="text-neutral-300">
          But this is not just a journey through astrology.
        </p>

        <p className="text-neutral-300">
          It is a journey through life itself — through family, experiences, and the silent lessons hidden inside struggles.
        </p>

        <p className="text-neutral-300">
          It is about understanding how family shapes our foundation, how challenges build our strength, and how waiting prepares us for what is meant to arrive.
        </p>

        {/* Structure */}
        <p className="text-neutral-300">
          This journey unfolds across five deeply reflective parts:
        </p>

        <ul className="list-disc pl-6 text-neutral-300 space-y-2">
          <li>The birth chart that mirrored life before it unfolded</li>
          <li>The karmic family experiences that shaped identity</li>
          <li>The years of waiting that built patience and resilience</li>
          <li>The unseen connection to a future spouse written in subtle patterns</li>
          <li>The realization that nothing was ever late — everything was preparation</li>
        </ul>

        {/* Questions */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/10">
          <p className="text-lg text-white italic mb-3">
            What if your struggles were not random?
          </p>
          <p className="text-lg text-white italic mb-3">
            What if your waiting was not a delay?
          </p>
          <p className="text-lg text-white italic">
            What if your life has been guiding you all along?
          </p>
        </div>

        {/* Closing */}
        <p className="text-neutral-300">
          Whether you believe deeply in astrology or simply question the deeper meaning of life, this story is an invitation.
        </p>

        <p className="text-neutral-300">
          An invitation to look at your life differently — not as random events, but as a connected journey unfolding with purpose.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-500/10 to-indigo-500/10 border border-white/10 text-center italic text-neutral-300">
          The future does not always arrive suddenly — sometimes, it leaves clues along the way.
        </div>

        <p className="text-neutral-300">
          And sometimes, if you look closely enough, you realize…
        </p>

        <p className="text-xl text-white italic text-center">
          You were never lost — you were being led.
        </p>

        {/* Signature */}
        <p className="text-right mt-10 text-lg">
          — <strong>Vihaan</strong>
        </p>

      </div>
    ),
  },
  /* ================= BLOG 6 ================= */

  {
    slug: "the-connection-that-existed-before-we-met-destiny-love",
    title:
      "The Connection That Existed Before We Met",
    excerpt:
      "A deeply reflective story about love, destiny, and the invisible connection that begins long before two people meet.",
    image: "/blog-connection-destiny.jpg",
    date: "2026-05-07",
    time: "11 min read",
    category: "Love",
    tags: ["Destiny", "Soulmate", "Love", "Connection", "Timing"],
    author: "Vihaan",
    featured: true,
    audio: "/audio/connection-before-we-met.mp3",

    content: (
      <div className="space-y-10">

        {/* Opening Hook */}
        <p className="text-xl text-neutral-200 leading-relaxed">
          There are moments in life that feel ordinary while we are living them —
          but later, when we look back, they reveal something extraordinary.
        </p>

        <p className="text-neutral-300">
          Not because they were loud. Not because they changed everything instantly.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/10 text-center italic text-neutral-300">
          But because they were quietly preparing us… for someone we hadn’t met yet.
        </div>

        <p className="text-neutral-300 text-center italic">
          For a connection that already existed.
        </p>

        {/* Section */}
        <h2 className="text-2xl font-semibold text-white mt-10">
          Two Lives, One Unseen Thread
        </h2>

        <p className="text-neutral-300">
          Somewhere, a man walks along a quiet path — listening to music, lost in thought,
          navigating life through responsibilities, doubts, and small hopes.
        </p>

        <p className="text-neutral-300">
          He believes he is walking alone.
        </p>

        <p className="text-neutral-300">
          At the same time, somewhere else, a woman stands near a temple at sunset —
          carrying her own battles, her own prayers, her own silent conversations with destiny.
        </p>

        <p className="text-neutral-300">
          She believes she is walking alone too.
        </p>

        <blockquote className="border-l-4 border-pink-500 pl-6 italic text-lg text-neutral-300">
          “Different lives. Different paths. Yet connected by something neither can see.”
        </blockquote>

        {/* Illusion */}
        <h2 className="text-2xl font-semibold text-white">
          The Illusion of Separation
        </h2>

        <p className="text-neutral-300">
          We often believe life begins when something happens —
          when we meet someone, when we fall in love, when we recognize a connection.
        </p>

        <p className="text-neutral-300">
          But what if that’s not the beginning?
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-white/10 text-center italic text-neutral-300">
          What if the meeting is not the start… but the revelation?
        </div>

        {/* Destiny */}
        <h2 className="text-2xl font-semibold text-white">
          Destiny Is Not an Event — It Is a Process
        </h2>

        <p className="text-neutral-300">
          We are taught to think of destiny as a single moment —
          the day everything changes, the moment life makes sense.
        </p>

        <p className="text-neutral-300">
          But destiny doesn’t arrive suddenly.
        </p>

        <ul className="list-disc pl-6 text-neutral-300 space-y-2">
          <li>The choices you make when no one is watching</li>
          <li>The lessons from people who were never meant to stay</li>
          <li>The struggles that feel unnecessary at the time</li>
        </ul>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-white/10 text-center italic text-neutral-300">
          Every experience is not random — it is preparation.
        </div>

        {/* People Before */}
        <h2 className="text-2xl font-semibold text-white">
          The People Before Them
        </h2>

        <p className="text-neutral-300">
          Before you meet someone who truly matters, life introduces you to others.
        </p>

        <p className="text-neutral-300">
          Some teach patience. Some teach boundaries. Some teach you what love is not.
        </p>

        <p className="text-neutral-300">
          At the time, they feel important — sometimes permanent.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-lg text-neutral-300">
          “They were not meant to stay. They were meant to shape you.”
        </blockquote>

        {/* Parallel */}
        <h2 className="text-2xl font-semibold text-white">
          Parallel Journeys
        </h2>

        <p className="text-neutral-300">
          While you are becoming ready for someone… they are becoming ready for you.
        </p>

        <p className="text-neutral-300">
          Their life is unfolding in parallel — learning, struggling, growing.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 text-center italic text-neutral-300">
          Two lives moving separately… slowly reaching the same moment.
        </div>

        {/* Timing */}
        <h2 className="text-2xl font-semibold text-white">
          Timing Is Not Coincidence
        </h2>

        <p className="text-neutral-300">
          People call it “right person, right time.”
        </p>

        <p className="text-neutral-300">
          But it is not luck. It is alignment.
        </p>

        <p className="text-neutral-300">
          Emotional, mental, and spiritual readiness — built slowly over time.
        </p>

        {/* Recognition */}
        <h2 className="text-2xl font-semibold text-white">
          The Moment That Feels Familiar
        </h2>

        <p className="text-neutral-300">
          When such a connection happens, it doesn’t feel new.
        </p>

        <p className="text-neutral-300">
          It feels familiar — like remembering something you never consciously knew.
        </p>

        <ul className="list-disc pl-6 text-neutral-300 space-y-2">
          <li>Comfort without effort</li>
          <li>Understanding without explanation</li>
          <li>Connection without force</li>
        </ul>

        {/* Final Insight */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/10 text-center">
          <p className="text-xl italic text-white">
            Is it love…
          </p>
          <p className="text-xl italic text-white mt-2">
            or is it recognition?
          </p>
        </div>

        <p className="text-neutral-300">
          Not of their face — but of their presence.
        </p>

        <p className="text-neutral-300">
          Not of their words — but of their energy.
        </p>

        <p className="text-xl text-white italic text-center">
          “This person was always meant to be part of my life.”
        </p>

        {/* Closing */}
        <p className="text-right mt-10 text-lg">
          — <strong>Vihaan</strong>
        </p>

      </div>
    ),
  },

  /* ================= BLOG 7 ================= */

  {
    slug: "the-day-destiny-became-real-love-recognition-story",
    title:
      "The Day Destiny Became Real",
    excerpt:
      "A deeply emotional reflection on the moment destiny stops being a belief and becomes a lived experience through connection, recognition, and timing.",
    image: "/blog-destiny-real.jpg",
    date: "2026-05-08",
    time: "11 min read",
    category: "Love",
    tags: ["Destiny", "Love", "Recognition", "Soulmate", "Life Journey"],
    author: "Vihaan",
    featured: true,
    audio: "/audio/day-destiny-became-real.mp3",

    content: (
      <div className="space-y-10">

        {/* Opening */}
        <p className="text-xl text-neutral-200 leading-relaxed">
          There is a difference between believing in destiny…
          and witnessing it.
        </p>

        <p className="text-neutral-300">
          For most of our lives, destiny feels like an idea — a comforting thought,
          a quiet possibility, a story we tell ourselves when things don’t make sense.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-lg text-neutral-300">
          “Maybe this is meant to be. Maybe someone is out there.”
        </blockquote>

        <p className="text-neutral-300">
          But deep inside, there is always a question —
        </p>

        <p className="text-xl text-white italic text-center">
          What if it’s not real?
        </p>

        {/* Shift */}
        <h2 className="text-2xl font-semibold text-white mt-10">
          Until the Day It Becomes Real
        </h2>

        <p className="text-neutral-300">
          There comes a day when that question disappears.
        </p>

        <p className="text-neutral-300">
          Not because someone answers it for you —
          but because life shows you something undeniable.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/10 text-center italic text-neutral-300">
          You don’t believe in destiny anymore… you recognize it.
        </div>

        {/* Not Beginning */}
        <h2 className="text-2xl font-semibold text-white">
          It Didn’t Feel Like a Beginning
        </h2>

        <p className="text-neutral-300">
          When it happened, it didn’t feel new.
        </p>

        <p className="text-neutral-300">
          There was no awkward start. No sense of building something from nothing.
        </p>

        <p className="text-neutral-300">
          Instead, there was a quiet knowing —
        </p>

        <p className="text-xl text-white italic text-center">
          As if something unfinished had finally continued.
        </p>

        {/* First Look */}
        <h2 className="text-2xl font-semibold text-white">
          The First Look
        </h2>

        <p className="text-neutral-300">
          It often begins with something subtle — a glance.
        </p>

        <p className="text-neutral-300">
          Nothing dramatic. Nothing extraordinary on the surface.
        </p>

        <p className="text-neutral-300">
          But inside you… something becomes still.
        </p>

        <blockquote className="border-l-4 border-pink-500 pl-6 italic text-lg text-neutral-300">
          “You are present in a way you have never been before.”
        </blockquote>

        {/* Recognition */}
        <h2 className="text-2xl font-semibold text-white">
          Not Attraction — Recognition
        </h2>

        <p className="text-neutral-300">
          At first, you try to understand it.
        </p>

        <p className="text-neutral-300">
          Is it attraction? Curiosity? A passing moment?
        </p>

        <p className="text-neutral-300">
          But it doesn’t behave like attraction.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 text-center italic text-neutral-300">
          It doesn’t rush. It doesn’t overwhelm. It settles.
        </div>

        <p className="text-xl text-white italic text-center">
          This is not attraction. This is recognition.
        </p>

        {/* Comfort */}
        <h2 className="text-2xl font-semibold text-white">
          The Comfort You Didn’t Expect
        </h2>

        <p className="text-neutral-300">
          Normally, meeting someone comes with effort — what to say, how to act.
        </p>

        <p className="text-neutral-300">
          But this time, there is none of that.
        </p>

        <ul className="list-disc pl-6 text-neutral-300 space-y-2">
          <li>No performance</li>
          <li>No fear of being misunderstood</li>
          <li>No need to become someone else</li>
        </ul>

        <p className="text-xl text-white italic text-center">
          You are simply… yourself.
        </p>

        {/* Conversation */}
        <h2 className="text-2xl font-semibold text-white">
          The Conversations That Felt Different
        </h2>

        <p className="text-neutral-300">
          Words flow naturally. Silence feels complete.
        </p>

        <p className="text-neutral-300">
          There is no emptiness — even in quiet moments.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-lg text-neutral-300">
          “Connection without effort. Understanding without explanation.”
        </blockquote>

        {/* Time */}
        <h2 className="text-2xl font-semibold text-white">
          It Felt Like Time Was Catching Up
        </h2>

        <p className="text-neutral-300">
          It doesn’t feel like something created — it feels like something delayed.
        </p>

        <p className="text-neutral-300">
          As if life finally reached the moment it was always moving toward.
        </p>

        {/* Past */}
        <h2 className="text-2xl font-semibold text-white">
          The Past Begins to Make Sense
        </h2>

        <p className="text-neutral-300">
          Your past doesn’t change — but its meaning does.
        </p>

        <ul className="list-disc pl-6 text-neutral-300 space-y-2">
          <li>The relationships that didn’t work</li>
          <li>The failures that confused you</li>
          <li>The waiting that felt endless</li>
        </ul>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-white/10 text-center italic text-neutral-300">
          They were not losses. They were preparation.
        </div>

        {/* Realization */}
        <h2 className="text-2xl font-semibold text-white">
          Destiny Doesn’t Replace Effort — It Aligns It
        </h2>

        <p className="text-neutral-300">
          Destiny is often misunderstood as something effortless.
        </p>

        <p className="text-neutral-300">
          But it doesn’t remove effort — it removes confusion.
        </p>

        <p className="text-neutral-300">
          You still choose. You still build. You still grow.
        </p>

        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/10 text-center">
          <p className="text-xl italic text-white">
            But this time…
          </p>
          <p className="text-xl italic text-white mt-2">
            you are building in the right direction.
          </p>
        </div>

        {/* Closing */}
        <p className="text-neutral-300">
          And that is the moment destiny becomes real —
          not when it begins…
        </p>

        <p className="text-xl text-white italic text-center">
          but when you finally recognize it.
        </p>

        <p className="text-right mt-10 text-lg">
          — <strong>Vihaan</strong>
        </p>

      </div>
    ),
  },
];