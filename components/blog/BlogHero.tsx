"use client";

import {
  HiOutlineSparkles,
  HiOutlineMagnifyingGlass,
  HiOutlineArrowTrendingUp,
  HiOutlineHeart,
  HiOutlineBookOpen,
} from "react-icons/hi2";

/* ================= TYPES ================= */

interface BlogHeroProps {
  search: string;
  setSearch: (value: string) => void;
}

/* ================= COMPONENT ================= */

export default function BlogHero({
  search,
  setSearch,
}: BlogHeroProps) {

  return (

    <section
      className="
      relative
      overflow-hidden
      py-32
      md:py-40
    "
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">

        {/* MAIN BG */}

        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />

        {/* GLOW 1 */}

        <div
          className="
          absolute
          left-0
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-600/20
          blur-3xl
        "
        />

        {/* GLOW 2 */}

        <div
          className="
          absolute
          bottom-0
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-600/20
          blur-3xl
        "
        />

        {/* GRID */}

        <div
          className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:80px_80px]
        "
        />

      </div>

      {/* CONTENT */}

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TOP BADGE */}

        <div className="flex justify-center">

          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/5
            px-6
            py-3
            text-sm
            text-neutral-300
            backdrop-blur-xl
          "
          >

            <HiOutlineSparkles />

            Soulful Writing Space

          </div>

        </div>

        {/* MAIN HEADING */}

        <div className="mt-10 text-center">

          <h1
            className="
            text-6xl
            font-black
            leading-none
            tracking-tight

            md:text-8xl
            xl:text-[9rem]
          "
          >

            Echoes of{" "}

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

              Her Soul

            </span>

          </h1>

          {/* SUBTEXT */}

          <p
            className="
            mx-auto
            mt-10
            max-w-3xl
            text-lg
            leading-relaxed
            text-neutral-400

            md:text-xl
          "
          >

            A cinematic collection of emotions,
            destiny,
            karmic love,
            spiritual reflections,
            and stories written long before life unfolded them into reality.

          </p>

        </div>

        {/* SEARCH */}

        <div className="mx-auto mt-14 max-w-2xl">

          <div
            className="
            group
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            transition-all
            duration-300
            hover:border-white/20
          "
          >

            {/* GLOW */}

            <div
              className="
              pointer-events-none
              absolute
              inset-0
              opacity-0
              transition
              duration-500
              group-hover:opacity-100
            "
            >

              <div
                className="
                absolute
                left-1/2
                top-0
                h-40
                w-40
                -translate-x-1/2
                rounded-full
                bg-purple-500/20
                blur-3xl
              "
              />

            </div>

            {/* INPUT WRAPPER */}

            <div className="relative flex items-center">

              {/* ICON */}

              <div className="pl-6 text-neutral-400">

                <HiOutlineMagnifyingGlass className="text-2xl" />

              </div>

              {/* INPUT */}

              <input
                type="text"
                placeholder="Search emotional reflections..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                w-full
                bg-transparent
                px-5
                py-5
                text-lg
                text-white
                outline-none
                placeholder:text-neutral-500
              "
              />

            </div>

          </div>

        </div>

        {/* STATS */}

        <div
          className="
          mt-20
          grid
          gap-6

          md:grid-cols-3
        "
        >

          {/* CARD 1 */}

          <div
            className="
            rounded-[2rem]
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
          "
          >

            <div
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-white/10
            "
            >

              <HiOutlineBookOpen className="text-2xl text-white" />

            </div>

            <h3 className="mt-6 text-3xl font-black">

              100+

            </h3>

            <p className="mt-3 text-neutral-400">

              Soulful reflections,
              emotional stories,
              and cinematic writings.

            </p>

          </div>

          {/* CARD 2 */}

          <div
            className="
            rounded-[2rem]
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
          "
          >

            <div
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-white/10
            "
            >

              <HiOutlineHeart className="text-2xl text-white" />

            </div>

            <h3 className="mt-6 text-3xl font-black">

              Infinite

            </h3>

            <p className="mt-3 text-neutral-400">

              Emotions,
              connections,
              longing,
              and spiritual memories.

            </p>

          </div>

          {/* CARD 3 */}

          <div
            className="
            rounded-[2rem]
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
          "
          >

            <div
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-white/10
            "
            >

              <HiOutlineArrowTrendingUp className="text-2xl text-white" />

            </div>

            <h3 className="mt-6 text-3xl font-black">

              Growing

            </h3>

            <p className="mt-3 text-neutral-400">

              A growing archive of
              soulful storytelling
              and emotional experiences.

            </p>

          </div>

        </div>

        {/* BOTTOM LINE */}

        <div className="mt-24 flex justify-center">

          <div
            className="
            h-px
            w-60
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
          "
          />

        </div>

      </div>

    </section>
  );
}