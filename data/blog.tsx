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

  /* ================= BLOG 2 ================= */

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
  /* ================= BLOG 3 ================= */

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

  /* ================= BLOG 4 ================= */

  {
    slug: "the-day-destiny-became-real-love-recognition-story",
    title:
      "The Day Destiny Became Real",
    excerpt:
      "A deeply emotional reflection on the moment destiny stops being a belief and becomes a lived experience through connection, recognition, and timing.",
    image: "/blog-destiny-real2.jpg",
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

  /* ================= BLOG 5 ================= */

  {
    slug: "where-love-becomes-destiny-first-meeting-connection-story",
    title:
      "Where Love Becomes Destiny",
    excerpt:
      "A deeply emotional story about first meeting, silent connection, and the invisible distance that transforms love into destiny.",
    image: "/blog-love-destiny-meeting.jpg",
    date: "2026-05-06",
    time: "13 min read",
    category: "Love",
    tags: ["Destiny", "Soulmate", "Love Story", "Connection", "Emotional Journey"],
    author: "Vihaan",
    featured: true,
    audio: "/audio/where-love-becomes-destiny.mp3",

    content: (
      <div className="space-y-12">

        {/* INTRO */}
        <p className="text-xl text-neutral-200 leading-relaxed">
          Some meetings don’t feel like beginnings…
          they feel like something that was always meant to happen.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-white/10 text-center italic text-neutral-300">
          Not planned. Not expected. Yet deeply familiar.
        </div>

        {/* ================= SECTION 1 ================= */}
        <h2 className="text-2xl font-semibold text-white">
          1. The Day Destiny Introduced Us
        </h2>

        <p className="text-neutral-300">
          It wasn’t planned. There was no perfect timing, no grand setup.
          Just another ordinary day — moving through routine, carrying quiet expectations.
        </p>

        <p className="text-neutral-300">
          And then… she appeared.
        </p>

        <p className="text-neutral-300">
          Not loudly. Not dramatically. But like something that gently shifts the air around you.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-lg text-neutral-300">
          “It didn’t feel like the first time… it felt like recognition.”
        </blockquote>

        <p className="text-neutral-300">
          There was no need to impress, no nervousness — just a calm, unexplainable presence.
        </p>

        <p className="text-neutral-300">
          The world continued as it was. But inside… something shifted.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-white/10 text-center italic text-neutral-300">
          This was not attraction. This was not coincidence. This was something deeper.
        </div>

        <p className="text-neutral-300">
          A quiet voice remained:
        </p>

        <p className="text-center text-white italic text-lg">
          “This is not the first time you’ve met her.”
        </p>

        {/* ================= SECTION 2 ================= */}
        <h2 className="text-2xl font-semibold text-white">
          2. The Silence Between Words
        </h2>

        <p className="text-neutral-300">
          Some connections grow through conversations.
          Ours grew through silence.
        </p>

        <p className="text-neutral-300">
          Words existed… but they were never necessary.
        </p>

        <p className="text-neutral-300">
          In a world where silence feels awkward, with you — it felt complete.
        </p>

        <blockquote className="border-l-4 border-pink-500 pl-6 italic text-lg text-neutral-300">
          “We didn’t speak everything… yet everything was understood.”
        </blockquote>

        <p className="text-neutral-300">
          It lived in the way we noticed each other…
          in the way time slowed down slightly…
          in the way presence itself felt like connection.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-white/10 text-center italic text-neutral-300">
          Trust without reason. Comfort without history. Connection without definition.
        </div>

        <p className="text-neutral-300">
          No labels. No pressure. No explanations.
        </p>

        <p className="text-neutral-300 text-center italic">
          Just two souls… quietly recognizing each other again.
        </p>

        {/* ================= SECTION 3 ================= */}
        <h2 className="text-2xl font-semibold text-white">
          3. The Distance That Was Not Physical
        </h2>

        <p className="text-neutral-300">
          We were still there — in the same world, under the same sky.
        </p>

        <p className="text-neutral-300">
          Nothing had ended. And yet… something had changed.
        </p>

        <p className="text-neutral-300">
          It didn’t happen suddenly. It arrived quietly.
        </p>

        <ul className="list-disc pl-6 text-neutral-300 space-y-2">
          <li>Conversations became shorter</li>
          <li>Silences became heavier</li>
          <li>Ease slowly turned into uncertainty</li>
        </ul>

        <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-lg text-neutral-300">
          “We didn’t lose each other… we stopped understanding each other.”
        </blockquote>

        <p className="text-neutral-300">
          The distance wasn’t physical — it was emotional.
        </p>

        <p className="text-neutral-300">
          Messages turned into doubts. Silence turned into questions.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 text-center italic text-neutral-300">
          Physical distance can be crossed… but emotional distance requires courage.
        </div>

        <p className="text-neutral-300">
          Courage to speak. Courage to be vulnerable. Courage to risk losing what you feel.
        </p>

        <p className="text-neutral-300">
          But in that moment… we had feelings, not courage.
        </p>

        <p className="text-neutral-300 text-center italic">
          So we stayed — not apart, but not truly together.
        </p>

        {/* ================= FINAL IMPACT ================= */}
        <div className="p-10 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-white/10 text-center">
          <p className="text-xl italic text-white">
            Love doesn’t always end…
          </p>
          <p className="text-xl italic text-white mt-2">
            sometimes it transforms into something deeper —
          </p>
          <p className="text-xl italic text-white mt-2">
            something called destiny.
          </p>
        </div>

        {/* CTA (IMPORTANT FOR SALES) */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-white/10 text-center">
          <p className="text-lg text-white mb-3">
            If this story feels familiar…
          </p>
          <p className="text-neutral-300 italic">
            You may not be reading it by coincidence.
          </p>
          <p className="text-white mt-4 font-semibold">
            Discover the deeper journey in my book →
          </p>
        </div>

        {/* SIGNATURE */}
        <p className="text-right mt-10 text-lg">
          — <strong>Vihaan</strong>
        </p>

      </div>
    ),
  },
];