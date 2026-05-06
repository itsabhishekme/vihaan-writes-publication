import BlogCard from "./BlogCard";

import {
  HiOutlineSquares2X2,
  HiOutlineDocumentText,
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

interface BlogGridProps {
  posts: BlogPost[];
}

/* ================= COMPONENT ================= */

export default function BlogGrid({
  posts,
}: BlogGridProps) {

  /* EMPTY STATE */

  if (!posts.length) {

    return (

      <section className="py-24">

        <div
          className="
          mx-auto
          max-w-2xl
          rounded-[3rem]
          border
          border-white/10
          bg-white/5
          p-16
          text-center
          backdrop-blur-xl
        "
        >

          {/* ICON */}

          <div
            className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
          "
          >

            <HiOutlineDocumentText className="text-4xl text-neutral-300" />

          </div>

          {/* TITLE */}

          <h2
            className="
            mt-8
            text-4xl
            font-black
            tracking-tight
            text-white
          "
          >

            No Stories Found

          </h2>

          {/* TEXT */}

          <p
            className="
            mx-auto
            mt-5
            max-w-lg
            text-lg
            leading-relaxed
            text-neutral-400
          "
          >

            Try exploring a different category
            or search for another emotional reflection.

          </p>

        </div>

      </section>

    );
  }

  return (

    <section className="relative">

      {/* TOP SECTION */}

      <div
        className="
        mb-14
        flex
        flex-col
        gap-8
        lg:flex-row
        lg:items-end
        lg:justify-between
      "
      >

        {/* LEFT */}

        <div>

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

            <HiOutlineSquares2X2 />

            Story Collection

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

            Explore Every Reflection

          </h2>

          {/* TEXT */}

          <p
            className="
            mt-5
            max-w-2xl
            text-lg
            leading-relaxed
            text-neutral-400
          "
          >

            A curated collection of emotional stories,
            karmic reflections,
            spiritual thoughts,
            and soulful experiences written to be deeply felt.

          </p>

        </div>

        {/* RIGHT */}

        <div
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-6
          py-4
          backdrop-blur-xl
        "
        >

          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white/10
          "
          >

            <HiOutlineDocumentText className="text-2xl text-white" />

          </div>

          <div>

            <p className="text-sm text-neutral-500">

              Total Stories

            </p>

            <h3 className="text-2xl font-black text-white">

              {posts.length}

            </h3>

          </div>

        </div>

      </div>

      {/* GRID */}

      <div
        className="
        grid
        gap-10

        md:grid-cols-2
        xl:grid-cols-3
      "
      >

        {posts.map((post) => (

          <BlogCard
            key={post.slug}
            post={post}
          />

        ))}

      </div>

      {/* BOTTOM DECORATION */}

      <div className="mt-24 flex justify-center">

        <div
          className="
          h-px
          w-52
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