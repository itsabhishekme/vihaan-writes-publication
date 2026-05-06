"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import Image from "next/image";
import Link from "next/link";

import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineArrowRight,
  HiOutlineBars3BottomLeft,
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineFire,
  HiOutlineMagnifyingGlass,
  HiOutlineSparkles,
  HiOutlineSquares2X2,
  HiOutlineTag,
  HiOutlineStar,
  HiOutlineHeart,
  HiOutlineBookOpen,
} from "react-icons/hi2";

import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  /* -------------------------------- */
  /* STATES */
  /* -------------------------------- */

  const [activeTag, setActiveTag] =
    useState<string>("All");

  const [visiblePosts, setVisiblePosts] =
    useState<number>(6);

  const [search, setSearch] =
    useState<string>("");

  const [showFilters, setShowFilters] =
    useState<boolean>(false);

  const [viewMode, setViewMode] =
    useState<"grid" | "list">("grid");

  const [scrollWidth, setScrollWidth] =
    useState<string>("0%");

  /* -------------------------------- */
  /* SCROLL EFFECT */
  /* -------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      const progress =
        totalHeight > 0
          ? (window.scrollY /
              totalHeight) *
            100
          : 0;

      setScrollWidth(`${progress}%`);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* -------------------------------- */
  /* TAGS */
  /* -------------------------------- */

  const tags: string[] = [
    "All",
    "Love",
    "Destiny",
    "Healing",
    "Spiritual",
  ];

  /* -------------------------------- */
  /* FILTERED POSTS */
  /* -------------------------------- */

  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter((post) =>
        activeTag === "All"
          ? true
          : post.category === activeTag
      )
      .filter((post) =>
        post.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
      );
  }, [activeTag, search]);

  /* -------------------------------- */
  /* FEATURED POSTS */
  /* -------------------------------- */

  const featuredPosts =
    filteredPosts.slice(0, 3);

  /* -------------------------------- */
  /* RETURN */
  /* -------------------------------- */

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* -------------------------------- */}
      {/* SCROLL BAR */}
      {/* -------------------------------- */}

      <div className="fixed left-0 top-0 z-50 h-[3px] w-full bg-transparent">

        <div
          className="
            h-full
            bg-gradient-to-r
            from-fuchsia-500
            via-purple-500
            to-indigo-500
            transition-all
            duration-300
          "
          style={{
            width: scrollWidth,
          }}
        />

      </div>

      {/* -------------------------------- */}
      {/* BACKGROUND */}
      {/* -------------------------------- */}

      <div className="absolute inset-0 -z-10 bg-black" />

      <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" />

      {/* -------------------------------- */}
      {/* HERO */}
      {/* -------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-28 text-center">

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
          Vihaan Writes
        </div>

        <h1 className="mt-8 text-6xl font-black tracking-tight md:text-8xl">

          Echoes of{" "}

          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Her Soul
          </span>

        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-neutral-400 md:text-xl">
          A cinematic space of destiny,
          soulful reflections, karmic
          love, healing emotions, and
          stories written before life
          revealed their meaning.
        </p>

        {/* STATS */}

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6">

          <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-xl">
            <div className="text-3xl font-black">
              {blogPosts.length}+
            </div>
            <div className="mt-1 text-sm text-neutral-400">
              Soulful Stories
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-xl">
            <div className="text-3xl font-black">
              10K+
            </div>
            <div className="mt-1 text-sm text-neutral-400">
              Readers
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-xl">
            <div className="text-3xl font-black">
              Endless
            </div>
            <div className="mt-1 text-sm text-neutral-400">
              Emotions
            </div>
          </div>

        </div>

      </section>

      {/* -------------------------------- */}
      {/* FEATURED STORY */}
      {/* -------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[3rem]
            border
            border-white/10
            min-h-[600px]
          "
        >

          {/* IMAGE */}

          <div className="absolute inset-0">

            <Image
              src="/featured.jpg"
              alt="Featured Story"
              fill
              priority
              sizes="100vw"
              className="
                object-cover
                opacity-40
                transition
                duration-700
                group-hover:scale-105
              "
            />

          </div>

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

          {/* BADGE */}

          <div className="absolute right-8 top-8 z-20 rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl">

            <div className="flex items-center gap-2 text-sm font-semibold">

              <HiOutlineStar className="text-yellow-400" />

              Featured Story

            </div>

          </div>

          {/* CONTENT */}

          <div className="relative z-10 flex min-h-[600px] flex-col justify-end p-10 md:p-16">

            <span className="flex items-center gap-2 text-sm text-neutral-300">

              <HiOutlineFire />

              Destiny Writing

            </span>

            <h2 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-7xl">

              Words Written Before Destiny Arrived

            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">

              A reflection of love that
              existed before meeting —
              written through emotion,
              silence, karmic timing,
              and the invisible threads
              connecting souls long
              before they recognize
              each other.

            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">

              <Link
                href="/blog/featured"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-8
                  py-4
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Read Story

                <HiOutlineArrowRight />

              </Link>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">

                <div className="text-sm text-neutral-400">
                  Reading Time
                </div>

                <div className="mt-1 font-semibold">
                  8 Min Read
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* -------------------------------- */}
      {/* TOOLBAR */}
      {/* -------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 pb-12">

        <div
          className="
            flex
            flex-col
            gap-5
            rounded-[2rem]
            border
            border-white/10
            bg-white/5
            p-5
            backdrop-blur-2xl
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          {/* SEARCH */}

          <div className="relative w-full lg:flex-1">

            <HiOutlineMagnifyingGlass
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-xl
                text-neutral-500
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search destiny, soulmate, karmic love..."
              aria-label="Search blog posts"
              className="
                h-16
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/40
                pl-14
                pr-5
                text-white
                outline-none
                transition-all
                placeholder:text-neutral-500
                focus:border-fuchsia-500
                focus:ring-2
                focus:ring-fuchsia-500/20
              "
            />

          </div>

          {/* ACTIONS */}

          <div className="flex items-center gap-4">

            {/* FILTER */}

            <button
              type="button"
              title="Toggle Filters"
              aria-label="Toggle Filters"
              onClick={() =>
                setShowFilters(
                  !showFilters
                )
              }
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-black/30
                transition-all
                hover:bg-white
                hover:text-black
              "
            >
              <HiOutlineAdjustmentsHorizontal className="text-2xl" />
            </button>

            {/* GRID */}

            <button
              type="button"
              title="Grid View"
              aria-label="Grid View"
              onClick={() =>
                setViewMode("grid")
              }
              className={`
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                transition-all

                ${
                  viewMode === "grid"
                    ? "border-white bg-white text-black"
                    : "border-white/10 bg-black/30 hover:bg-white hover:text-black"
                }
              `}
            >
              <HiOutlineSquares2X2 className="text-2xl" />
            </button>

            {/* LIST */}

            <button
              type="button"
              title="List View"
              aria-label="List View"
              onClick={() =>
                setViewMode("list")
              }
              className={`
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                transition-all

                ${
                  viewMode === "list"
                    ? "border-white bg-white text-black"
                    : "border-white/10 bg-black/30 hover:bg-white hover:text-black"
                }
              `}
            >
              <HiOutlineBars3BottomLeft className="text-2xl" />
            </button>

          </div>

        </div>

        {/* FILTERS */}

        {showFilters && (

          <div
            className="
              mt-6
              flex
              flex-wrap
              justify-center
              gap-4
              rounded-[2rem]
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-2xl
            "
          >

            {tags.map((tag) => (

              <button
                key={tag}
                type="button"
                onClick={() =>
                  setActiveTag(tag)
                }
                className={`
                  rounded-full
                  border
                  px-6
                  py-3
                  transition-all

                  ${
                    activeTag === tag
                      ? "border-white bg-white text-black"
                      : "border-white/10 bg-black/30 hover:bg-white hover:text-black"
                  }
                `}
              >
                {tag}
              </button>

            ))}

          </div>

        )}

      </section>

      {/* -------------------------------- */}
      {/* FEATURED CARDS */}
      {/* -------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="mb-10 flex items-center justify-between">

          <div>

            <h3 className="text-3xl font-black">
              Featured Reflections
            </h3>

            <p className="mt-2 text-neutral-400">
              Soulful writings loved by readers
            </p>

          </div>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {featuredPosts.map((post) => (

            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="
                group
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
              "
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="100vw"
                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              <div className="p-6">

                <div className="flex items-center gap-2 text-sm text-neutral-400">

                  <HiOutlineHeart />

                  {post.category}

                </div>

                <h4 className="mt-4 text-2xl font-bold leading-snug">

                  {post.title}

                </h4>

                <p className="mt-4 line-clamp-3 text-neutral-400">

                  {post.excerpt}

                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* -------------------------------- */}
      {/* POSTS */}
      {/* -------------------------------- */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="mb-10 flex items-center gap-3">

          <HiOutlineBookOpen className="text-3xl text-fuchsia-400" />

          <h3 className="text-3xl font-black">
            All Stories
          </h3>

        </div>

        <div
          className={
            viewMode === "grid"
              ? "grid gap-10 md:grid-cols-2 xl:grid-cols-3"
              : "flex flex-col gap-8"
          }
        >

          {filteredPosts
            .slice(0, visiblePosts)
            .map((post) => (

              <article
                key={post.slug}
                className={`
                  group
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-neutral-900
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-fuchsia-500/30

                  ${
                    viewMode === "list"
                      ? "flex flex-col md:flex-row"
                      : ""
                  }
                `}
              >

                {/* IMAGE */}

                <div
                  className={`
                    relative
                    overflow-hidden

                    ${
                      viewMode === "list"
                        ? "h-[320px] md:w-[420px]"
                        : "h-80 w-full"
                    }
                  `}
                >

                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="100vw"
                    className="
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                  />

                </div>

                {/* CONTENT */}

                <div className="flex flex-1 flex-col p-7">

                  <div className="flex items-center gap-2 text-sm text-neutral-400">

                    <HiOutlineTag />

                    {post.category}

                  </div>

                  <h3 className="mt-4 text-3xl font-bold leading-snug">

                    {post.title}

                  </h3>

                  <p className="mt-5 leading-relaxed text-neutral-400">

                    {post.excerpt}

                  </p>

                  <div className="mt-8 flex flex-wrap gap-5 text-sm text-neutral-500">

                    <span className="flex items-center gap-2">

                      <HiOutlineCalendarDays />

                      {new Date(
                        post.date
                      ).toLocaleDateString()}

                    </span>

                    <span className="flex items-center gap-2">

                      <HiOutlineClock />

                      {post.time}

                    </span>

                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="
                      mt-10
                      inline-flex
                      items-center
                      gap-2
                      font-semibold
                      text-white
                      transition-all
                      hover:gap-4
                    "
                  >
                    Read More

                    <HiOutlineArrowRight />

                  </Link>

                </div>

              </article>

            ))}

        </div>

        {/* LOAD MORE */}

        {visiblePosts <
          filteredPosts.length && (

          <div className="mt-20 text-center">

            <button
              type="button"
              onClick={() =>
                setVisiblePosts(
                  (prev) => prev + 3
                )
              }
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-10
                py-5
                text-lg
                font-semibold
                backdrop-blur-xl
                transition-all
                hover:bg-white
                hover:text-black
              "
            >
              Load More Stories
            </button>

          </div>

        )}

      </section>

    </main>
  );
}