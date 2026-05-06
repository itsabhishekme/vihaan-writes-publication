import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
  HiArrowLeft,
  HiSparkles,
  HiArrowRight,
  HiHeart,
  HiBookOpen,
  HiClock,
  HiMail,
} from "react-icons/hi";

/* ================= SEO ================= */

export const metadata: Metadata = {
  title:
    "Words Written Before Destiny Arrived | Vihaan Writes",

  description:
    "A soulful cinematic reflection about destiny, emotions, karmic memories, and love written before reality unfolded.",

  keywords: [
    "Vihaan Writes",
    "soulful writing",
    "destiny",
    "karmic love",
    "emotional storytelling",
    "spiritual reflections",
    "love stories",
  ],

  openGraph: {
    title:
      "Words Written Before Destiny Arrived",

    description:
      "A cinematic emotional reflection written before destiny unfolded reality.",

    images: ["/featured.jpg"],

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Words Written Before Destiny Arrived",

    description:
      "A cinematic emotional reflection written before destiny unfolded reality.",

    images: ["/featured.jpg"],
  },
};

/* ================= PAGE ================= */

export default function FeaturedStory() {

  return (

    <main className="relative overflow-hidden bg-black text-white">

      {/* TOP LINE */}

      <div
        className="
        fixed
        top-0
        left-0
        z-50
        h-1
        w-full
        bg-gradient-to-r
        from-purple-500
        via-fuchsia-500
        to-indigo-500
      "
      />

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-neutral-950 to-black" />

      {/* GRID */}

      <div
        className="
        absolute
        inset-0
        -z-10
        opacity-[0.03]
        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        [background-size:80px_80px]
      "
      />

      {/* GLOW */}

      <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-purple-600/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[700px] w-[700px] rounded-full bg-indigo-600/20 blur-3xl" />

      {/* HERO */}

      <section className="relative min-h-screen overflow-hidden">

        {/* IMAGE */}

        <div className="absolute inset-0">

          <Image
            src="/featured.jpg"
            alt="Featured Story"
            fill
            priority
            className="object-cover opacity-50"
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black" />

        </div>

        {/* NAV */}

        <div className="relative z-30">

          <div className="mx-auto max-w-7xl px-6 pt-8">

            <Link
              href="/blog"
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-black/30
              px-5
              py-3
              text-sm
              text-neutral-300
              backdrop-blur-xl
              transition
              duration-300
              hover:bg-white
              hover:text-black
            "
            >

              <HiArrowLeft />

              Back to Blog

            </Link>

          </div>

        </div>

        {/* HERO CONTENT */}

        <div className="relative z-20 flex min-h-screen items-center">

          <div className="mx-auto max-w-6xl px-6 py-32">

            {/* BADGE */}

            <div
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/10
              px-5
              py-2
              text-sm
              text-neutral-200
              backdrop-blur-xl
            "
            >

              <HiSparkles />

              Featured Reflection

            </div>

            {/* TITLE */}

            <h1
              className="
              mt-10
              max-w-5xl
              text-5xl
              font-black
              leading-[0.95]
              tracking-tight

              md:text-7xl
              xl:text-[8rem]
            "
            >

              Words Written{" "}

              <span
                className="
                bg-gradient-to-r
                from-white
                via-neutral-300
                to-neutral-500
                bg-clip-text
                text-transparent
              "
              >

                Before Destiny

              </span>{" "}

              Arrived

            </h1>

            {/* TEXT */}

            <p
              className="
              mt-10
              max-w-3xl
              text-xl
              leading-relaxed
              text-neutral-300
              md:text-2xl
            "
            >

              Some stories are not written after life happens.
              They are written before destiny quietly reveals why.

            </p>

            {/* META */}

            <div className="mt-14 flex flex-wrap gap-5">

              {/* CARD */}

              <div
                className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                backdrop-blur-xl
              "
              >

                <HiBookOpen className="text-xl" />

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">

                    Story Type

                  </p>

                  <h3 className="mt-1 text-sm font-semibold">

                    Featured Reflection

                  </h3>

                </div>

              </div>

              {/* CARD */}

              <div
                className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                backdrop-blur-xl
              "
              >

                <HiClock className="text-xl" />

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">

                    Reading Time

                  </p>

                  <h3 className="mt-1 text-sm font-semibold">

                    8 Min Read

                  </h3>

                </div>

              </div>

              {/* CARD */}

              <div
                className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                backdrop-blur-xl
              "
              >

                <HiHeart className="text-xl" />

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">

                    Theme

                  </p>

                  <h3 className="mt-1 text-sm font-semibold">

                    Emotional Storytelling

                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="relative py-32">

        <div className="mx-auto max-w-4xl px-6">

          {/* QUOTE */}

          <div
            className="
            mb-24
            rounded-[2rem]
            border
            border-white/10
            bg-white/5
            p-12
            text-center
            backdrop-blur-xl
          "
          >

            <p className="text-3xl leading-relaxed text-neutral-200">

              “Sometimes the soul remembers
              what the mind has never learned.”

            </p>

          </div>

          {/* ARTICLE */}

          <article
            className="
    prose
    prose-invert
    prose-xl
    max-w-none
    prose-headings:text-white
    prose-p:text-zinc-300
    prose-p:leading-[2.1]
    prose-p:tracking-wide
    prose-strong:text-white
    prose-blockquote:border-l-4
    prose-blockquote:border-amber-400
    prose-blockquote:bg-white/5
    prose-blockquote:backdrop-blur-xl
    prose-blockquote:rounded-2xl
    prose-blockquote:px-8
    prose-blockquote:py-6
    prose-blockquote:text-2xl
    prose-blockquote:font-light
    prose-blockquote:text-zinc-100
    prose-blockquote:italic
    prose-blockquote:shadow-2xl
    prose-h2:text-5xl
    prose-h2:leading-tight
    prose-h2:font-bold
    prose-h2:mb-10
    prose-h3:text-3xl
    prose-h3:text-white
    prose-h3:mt-16
    prose-h3:mb-6
  "
          >

            {/* INTRO */}

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-10 md:p-16 shadow-[0_0_80px_rgba(255,255,255,0.05)]">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]" />

              <div className="relative z-10">

                <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-amber-300 backdrop-blur-xl">
                  Soul Writing
                </span>

                <h2 className="mt-8 bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                  The Love That Existed in Silence Before We Ever Met
                </h2>

                <p className="mt-8 text-xl text-zinc-300 leading-[2.1]">
                  Some people meet love through coincidence.
                  Some through timing.
                  Some through ordinary conversations that slowly become extraordinary.
                </p>

                <p>
                  But there are rare souls who begin loving someone
                  long before destiny allows the meeting.
                </p>

                <blockquote>
                  You don’t always imagine the future —
                  sometimes your soul remembers it before your eyes ever witness it.
                </blockquote>

                <p>
                  This is for them.
                </p>

                <p>
                  This is for the hearts that wrote letters before names existed.
                  For the souls that whispered promises into empty rooms.
                  For the dreamers who felt emotionally connected to someone
                  they had never touched, never seen, and never known.
                </p>

              </div>

            </div>

            {/* STORY */}

            <section className="mt-20 space-y-10">

              <p>
                There was a time in my life when people believed I was writing fiction.
                They thought the emotions I carried were imagination dressed as poetry.
                But deep inside, I knew something they could not understand.
              </p>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
                <h3>I was not inventing her.</h3>

                <p className="text-2xl text-zinc-100 font-light italic">
                  I was remembering her.
                </p>
              </div>

              <p>
                Not in the ordinary sense of memory.
                Not through photographs or conversations.
                But through an emotional familiarity that arrived without explanation.
                A strange recognition that appeared in silence
                and stayed inside me like an unfinished song.
              </p>

              <p>
                Long before I met the woman destiny had written for me,
                I was already speaking to her in my thoughts.
                I would write pages filled with emotions that felt too specific to belong to nobody.
                I would describe eyes I had never seen.
                I would describe warmth I had never touched.
                I would describe a presence that somehow felt closer
                than the people physically standing beside me.
              </p>

              <p>
                At first, I questioned myself.
                I wondered whether loneliness had simply created an illusion.
                Perhaps my heart was trying to protect itself from emptiness by creating hope.
                Perhaps these feelings were nothing more than emotional survival.
              </p>

              <div className="rounded-[32px] border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent p-8">
                <p className="m-0 text-3xl font-light leading-relaxed text-white">
                  Fantasy fades.
                  <br />
                  Truth deepens.
                </p>
              </div>

              <p>
                And what I felt only became stronger with time.
              </p>

              <p>
                There were nights when I would sit in complete silence
                and write messages to someone I could not identify.
                I wrote as if she were already reading every word.
                As if somewhere in the unseen corners of existence,
                her soul could hear mine.
              </p>

              <p>
                I told her about my fears.
                I told her about the battles I never spoke about publicly.
                I told her about the exhaustion of pretending to be emotionally strong every day.
                I confessed the loneliness hidden beneath smiles.
                I revealed the parts of myself I kept protected from the world.
              </p>

              <blockquote>
                And strangely, while writing to her,
                I never felt alone.
              </blockquote>

              <p>
                That was the mystery.
              </p>

              <p>
                I was physically alone.
                Yet emotionally accompanied.
              </p>

              <p>
                It felt as if love had arrived spiritually
                before it arrived physically.
              </p>

              <h3>The Echo Before Arrival</h3>

              <p>
                The world often teaches us that love begins with meeting.
                With introductions.
                With eye contact.
                With conversations.
              </p>

              <p>
                But sometimes love begins much earlier.
                Sometimes it begins in intuition.
                Sometimes it begins in dreams.
                Sometimes it begins through emotional recognition
                that logic cannot explain.
              </p>

              <p>
                There were moments when songs felt like messages.
                Moments when random sunsets carried emotional weight I could not describe.
                Moments when silence itself felt connected to someone far away.
              </p>

              <p>
                I cannot explain this through science.
                And honestly, I no longer try.
              </p>

              <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-10 text-center shadow-2xl">
                <p className="m-0 text-3xl leading-relaxed text-zinc-100 font-light italic">
                  Not every truth enters life through logic.
                  <br />
                  Some truths arrive through feeling.
                </p>
              </div>

              <p>
                The strange thing about destiny is that it leaves echoes before the actual arrival.
                Like footsteps heard in another room before the person enters.
                Like fragrance appearing before the flower is visible.
                Like rain touching the wind before it touches the earth.
              </p>

              <p>
                That is how her presence felt.
                An echo before arrival.
              </p>

              <p>
                While the world rushed toward temporary attractions,
                I found myself writing about permanence.
                I was not searching for perfect beauty.
                I was searching for emotional safety.
                I was searching for a connection where silence itself would feel peaceful.
                I was searching for a love that did not require performance.
              </p>

              <blockquote>
                She would feel familiar.
              </blockquote>

              <p>
                Not because we had already met in this lifetime.
                But because souls recognize what hearts cannot explain.
              </p>

              <h3>Faith Before Proof</h3>

              <p>
                There were days when doubt tried to destroy this belief.
                Reality can be cruel to dreamers.
                The modern world rewards practicality
                and often mocks emotional depth.
              </p>

              <p>
                People laughed at the idea of writing to a future spouse.
                Some called it fantasy.
                Some called it obsession.
                Some called it emotional weakness.
              </p>

              <p>
                But I continued writing.
              </p>

              <p>
                Because certain feelings become impossible to abandon
                once the soul touches them.
              </p>

              <p>
                Every page became more than writing.
                It became evidence.
                Evidence that the heart sometimes senses destiny
                before the eyes witness it.
              </p>

              <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-12">
                <p className="text-2xl italic text-zinc-100 leading-relaxed">
                  “Even if the entire world thinks you do not exist,
                  my soul already knows you are real.”
                </p>
              </div>

              <p>
                When I finished writing it,
                I felt an emotion so intense that I had to stop.
                Not sadness.
                Not happiness.
              </p>

              <p className="text-3xl font-light text-white">
                Recognition.
              </p>

              <p>
                As if some invisible thread between two lives
                had suddenly tightened.
              </p>

              <p>
                That moment changed me.
              </p>

              <p>
                I stopped writing from desperation.
                I started writing from certainty.
              </p>

              <blockquote>
                Loneliness begs.
                Destiny waits.
              </blockquote>

              <p>
                And slowly, I learned how to wait without losing hope.
              </p>

              <p>
                I learned that preparing for love is also a form of love.
                Healing yourself before someone arrives is love.
                Protecting your emotional depth in a shallow world is love.
                Remaining sincere when the world rewards emotional masks is love.
              </p>

              <h3>Becoming the Person Ready for Love</h3>

              <p>
                Before destiny arrives,
                it often transforms you first.
                Because the version of you that prayed for love
                is rarely the same version ready to receive it.
              </p>

              <p>
                I had to grow.
                I had to face my fears.
                I had to confront emotional wounds
                that I had ignored for years.
                I had to understand that genuine love
                cannot survive where self-worth does not exist.
              </p>

              <p>
                So while I wrote to her,
                I was also rebuilding myself.
              </p>

              <p>
                Perhaps that is why those writings mattered so much.
                They were not only messages to a future person.
                They were conversations with my future self.
              </p>

              <p>
                Every page carried transformation.
                Every paragraph carried healing.
                Every sentence carried faith.
              </p>

              <div className="rounded-3xl border border-amber-400/20 bg-amber-400/5 p-10 backdrop-blur-xl">
                <p className="m-0 text-2xl text-zinc-100 leading-relaxed">
                  Maybe destiny does not suddenly appear one day.
                  Maybe it slowly walks toward us
                  while we unknowingly prepare our hearts.
                </p>
              </div>

              <h3>The Love That Felt Remembered</h3>

              <p>
                Love stopped feeling accidental.
                It started feeling sacred.
              </p>

              <p>
                Not sacred in a perfect fairytale sense.
                But sacred in the way two imperfect people
                somehow become emotional shelter for each other.
              </p>

              <p>
                I no longer wanted temporary excitement.
                I wanted permanence.
                I wanted emotional honesty.
                I wanted the kind of connection
                where two souls could sit quietly together
                and still feel understood.
              </p>

              <p>
                And the strangest part is this:
              </p>

              <blockquote>
                Before destiny arrived physically,
                she had already changed my life emotionally.
              </blockquote>

              <p>
                Because writing to her made me softer.
                More patient.
                More reflective.
                More honest.
              </p>

              <p>
                The person I became while waiting for her
                was already a gift.
              </p>

              <p>
                Some emotions arrive with a depth
                that ordinary attraction cannot imitate.
                Some connections begin in silence
                long before introductions happen.
                Some souls leave emotional fingerprints
                on each other across distance, time, and uncertainty.
              </p>

              <p>
                And sometimes writing becomes the bridge
                between two lives that have not yet crossed paths.
              </p>

              <h3>When Destiny Finally Arrives</h3>

              <p>
                In a world addicted to instant validation,
                choosing to believe in unseen love felt rebellious.
                But it also felt pure.
              </p>

              <p>
                Yet deep inside,
                countless hearts are waiting for someone
                who already feels emotionally familiar.
                Someone who will not feel like a stranger.
                Someone whose arrival will feel less like a beginning
                and more like a return.
              </p>

              <blockquote>
                When destiny finally arrives,
                it does not always feel new.
                Sometimes it feels remembered.
              </blockquote>

              <p>
                The soul becomes calm.
                The heart becomes still.
                The endless searching suddenly loses its urgency.
              </p>

              <p>
                Not because life becomes perfect.
                But because something inside finally whispers:
              </p>

              <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-2xl">
                <p className="m-0 text-3xl font-light italic text-white leading-relaxed">
                  “You found the person
                  your spirit recognized long ago.”
                </p>
              </div>

              <p>
                Until that day arrives,
                there is beauty in continuing to believe.
                There is beauty in protecting sincerity.
                There is beauty in writing emotions
                the world may never fully understand.
              </p>

              <p>
                Because the heart has languages
                the mind cannot translate.
              </p>

              <p>
                And sometimes the most powerful love stories
                begin before the first meeting ever happens.
              </p>

              <p>
                They begin in silence.
                In intuition.
                In dreams.
                In prayers.
                In pages written beneath lonely midnight skies.
              </p>

              <div className="mt-20 flex items-center justify-between rounded-3xl border border-white/10 bg-gradient-to-r from-zinc-900 to-black px-8 py-6">
                <div>
                  <p className="m-0 text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Written By
                  </p>

                  <h4 className="mt-2 text-2xl text-white font-semibold">
                    — Vihaan
                  </h4>
                </div>

                
              </div>

            </section>

          </article>


        </div>

      </section>

      {/* CTA */}

      <section className="pb-32">

        <div className="mx-auto max-w-5xl px-6">

          <div
            className="
            relative
            overflow-hidden
            rounded-[3rem]
            border
            border-white/10
            bg-gradient-to-br
            from-neutral-900
            via-black
            to-neutral-950
            p-16
            text-center
          "
          >

            <div className="relative z-10">

              <div
                className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-white/10
              "
              >

                <HiMail className="text-3xl" />

              </div>

              <h2 className="mt-8 text-5xl font-black">

                Continue The Journey

              </h2>

              <p
                className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-relaxed
                text-neutral-400
              "
              >

                Explore more soulful reflections and cinematic stories.

              </p>

              <Link
                href="/blog"
                className="
                mt-10
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-white
                px-8
                py-4
                font-semibold
                text-black
                transition
                duration-300
                hover:scale-105
              "
              >

                Explore Stories

                <HiArrowRight />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}