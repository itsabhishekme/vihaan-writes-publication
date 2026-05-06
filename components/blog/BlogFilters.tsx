"use client";

import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineSparkles,
} from "react-icons/hi2";

/* ================= TYPES ================= */

interface BlogFiltersProps {
  tags: string[];
  activeTag: string;
  setActiveTag: (tag: string) => void;
}

/* ================= COMPONENT ================= */

export default function BlogFilters({
  tags,
  activeTag,
  setActiveTag,
}: BlogFiltersProps) {

  return (

    <section className="relative max-w-7xl mx-auto px-6 pb-20">

      {/* TOP HEADER */}

      <div className="mb-10 text-center">

        {/* BADGE */}

        <div
          className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-white/5
          px-5
          py-2
          text-sm
          text-neutral-300
          backdrop-blur-xl
        "
        >

          <HiOutlineSparkles />

          Explore Reflections

        </div>

        {/* TITLE */}

        <h2
          className="
          mt-6
          text-4xl
          md:text-5xl
          font-black
          tracking-tight
          text-white
        "
        >

          Discover By Emotion

        </h2>

        {/* SUBTEXT */}

        <p
          className="
          mx-auto
          mt-5
          max-w-2xl
          text-lg
          leading-relaxed
          text-neutral-400
        "
        >

          Browse stories through love,
          destiny,
          healing,
          spiritual reflections,
          and emotional journeys.

        </p>

      </div>

      {/* FILTER HEADER */}

      <div className="mb-8 flex items-center justify-center gap-3">

        <div
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
        "
        >

          <HiOutlineAdjustmentsHorizontal className="text-xl text-neutral-300" />

        </div>

        <div>

          <p
            className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-neutral-500
          "
          >

            Filter Categories

          </p>

          <h3 className="mt-1 text-lg font-semibold text-white">

            Select Your Mood

          </h3>

        </div>

      </div>

      {/* FILTER BUTTONS */}

      <div
        className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-4
      "
      >

        {tags.map((tag) => {

          const isActive =
            activeTag === tag;

          return (

            <button
              key={tag}
              type="button"
              onClick={() =>
                setActiveTag(tag)
              }
              className={`
                group
                relative
                overflow-hidden
                rounded-full
                border
                px-7
                py-3
                text-sm
                font-semibold
                tracking-wide
                transition-all
                duration-300
                backdrop-blur-xl

                ${
                  isActive
                    ? `
                      border-white
                      bg-white
                      text-black
                      shadow-lg
                    `
                    : `
                      border-white/10
                      bg-white/5
                      text-white
                      hover:border-white/30
                      hover:bg-white
                      hover:text-black
                    `
                }
              `}
            >

              {/* GLOW */}

              <span
                className="
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
              >

                <span
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-purple-500/20
                  via-fuchsia-500/20
                  to-indigo-500/20
                "
                />

              </span>

              {/* TEXT */}

              <span className="relative z-10">

                {tag}

              </span>

            </button>

          );
        })}

      </div>

      {/* BOTTOM DECORATION */}

      <div className="mt-16 flex justify-center">

        <div
          className="
          h-px
          w-40
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
        />

      </div>

    </section>
  );
}