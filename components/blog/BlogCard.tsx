import Link from "next/link";
import Image from "next/image";

import {
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineArrowRight,
  HiOutlineTag,
  HiOutlineSparkles,
  HiOutlineBookmark,
} from "react-icons/hi2";

/* ================= TYPES ================= */

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  time: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
}

/* ================= COMPONENT ================= */

export default function BlogCard({
  post,
}: BlogCardProps) {

  return (

    <article
      className="
      group
      relative
      overflow-hidden
      rounded-[2rem]
      border
      border-white/10
      bg-gradient-to-b
      from-neutral-900
      to-black
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-white/20
      hover:shadow-2xl
    "
    >

      {/* GLOW */}

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-700
        group-hover:opacity-100
      "
      >

        <div
          className="
          absolute
          -top-20
          left-1/2
          h-60
          w-60
          -translate-x-1/2
          rounded-full
          bg-purple-500/20
          blur-3xl
        "
        />

      </div>

      {/* FEATURED */}

      {post.featured ? (

        <div className="absolute left-5 top-5 z-30">

          <span
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-black/60
            px-4
            py-2
            text-xs
            font-medium
            text-white
            backdrop-blur-xl
          "
          >

            <HiOutlineSparkles />

            Featured Story

          </span>

        </div>

      ) : null}

      {/* IMAGE */}

      <div className="relative h-72 w-full overflow-hidden">

        {/* OVERLAY */}

        <div
          className="
          absolute
          inset-0
          z-10
          bg-gradient-to-t
          from-black
          via-black/20
          to-transparent
        "
        />

        {/* IMAGE */}

        <Image
          src={post.image}
          alt={post.title}
          fill
          priority={false}
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw
          "
          className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
        "
        />

        {/* CATEGORY */}

        <div className="absolute bottom-5 left-5 z-20">

          <span
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-black/60
            px-4
            py-2
            text-xs
            text-neutral-200
            backdrop-blur-xl
          "
          >

            <HiOutlineTag />

            {post.category}

          </span>

        </div>

      </div>

      {/* CONTENT */}

      <div className="relative z-20 p-7">

        {/* META */}

        <div
          className="
          flex
          flex-wrap
          items-center
          gap-4
          text-xs
          text-neutral-500
        "
        >

          <span className="flex items-center gap-1">

            <HiOutlineCalendarDays />

            {post.date}

          </span>

          <span className="flex items-center gap-1">

            <HiOutlineClock />

            {post.time}

          </span>

        </div>

        {/* TITLE */}

        <h2
          className="
          mt-5
          text-2xl
          font-black
          leading-tight
          tracking-tight
          text-white
          transition-colors
          duration-300
          group-hover:text-neutral-200
        "
        >

          {post.title}

        </h2>

        {/* EXCERPT */}

        <p
          className="
          mt-4
          text-sm
          leading-relaxed
          text-neutral-400
        "
        >

          {post.excerpt}

        </p>

        {/* FOOTER */}

        <div
          className="
          mt-8
          flex
          items-center
          justify-between
          gap-4
        "
        >

          {/* READ BUTTON */}

          <Link
            href={`/blog/${post.slug}`}
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/5
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
          "
          >

            Read Story

            <HiOutlineArrowRight
              className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
            />

          </Link>

          {/* BOOKMARK */}

          <button
            type="button"
            aria-label="Save blog"
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
            text-neutral-300
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
          "
          >

            <HiOutlineBookmark className="text-lg" />

          </button>

        </div>

      </div>

      {/* BOTTOM LINE */}

      <div
        className="
        absolute
        bottom-0
        left-0
        h-[2px]
        w-0
        bg-gradient-to-r
        from-purple-500
        via-fuchsia-500
        to-indigo-500
        transition-all
        duration-700
        group-hover:w-full
      "
      />

    </article>
  );
}