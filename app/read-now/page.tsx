import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Feather,
  Heart,
  Sparkles,
  Stars,
  Quote,
  MoonStar,
  Clock3,
  PenSquare,
  WandSparkles,
  Orbit,
  Flame,
  Gem,
  ChevronRight,
  Crown,
  Sunset,
  Library,
  LucideIcon,
} from "lucide-react";

export const metadata = {
  title: "Read Now | Vihaan Writes",
  description:
    "Read soulful emotional stories, destiny reflections, healing letters, poetic memories, spiritual love writings, and timeless emotional journeys by Vihaan Writes.",

  keywords: [
    "Vihaan Writes",
    "Emotional Stories",
    "Soulful Writing",
    "Destiny Stories",
    "Spiritual Love",
    "Healing Stories",
    "Love Letters",
    "Poetic Writing",
    "Twin Flame",
    "Karmic Love",
    "Romantic Stories",
    "Heartbreak Healing",
    "Emotional Reflections",
    "Soulmate Stories",
    "Deep Emotional Stories",
    "Inspirational Writing",
    "Poetry",
    "Read Now",
    "Vihaan",
  ],

  authors: [{ name: "Vihaan" }],

  creator: "Vihaan Writes",

  metadataBase: new URL("https://vihaanwrites.in"),

  alternates: {
    canonical: "/read-now",
  },

  openGraph: {
    title: "Read Now | Vihaan Writes",
    description:
      "Stories written from emotions the soul never forgets — healing, destiny, silence, memories, and love.",

    url: "https://vihaanwrites.in/read-now",

    siteName: "Vihaan Writes",

    images: [
      {
        url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop",
        width: 1600,
        height: 900,
        alt: "Vihaan Writes",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Read Now | Vihaan Writes",
    description:
      "Emotional storytelling, healing reflections, soulful letters, and destiny journeys.",

    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

interface Story {
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  href: string;
}

const stories: Story[] = [
  {
    title: "To the One I Loved Before I Knew You",
    description:
      "A soul letter written before destiny introduced her into my life.",
    image: "/read-now/book1.png",
    category: "Soul Letter",
    readTime: "8 min read",
    href: "/stories/to-the-one-i-loved-before-i-knew-you",
  },
  {
    title: "The Silence After the Storm",
    description:
      "Some heartbreaks arrive quietly but still change your entire soul.",
    image: "/read-now/book2.png",
    category: "Emotional Reflection",
    readTime: "6 min read",
    href: "/stories/the-silence-after-the-storm",
  },
  {
    title: "She Came After the Storm",
    description:
      "The woman destiny sent after life almost made me stop believing.",
    image: "/read-now/readnow1.png",
    category: "Destiny Trilogy",
    readTime: "10 min read",
    href: "/stories/she-came-after-the-storm",
  },

  // NEW STORIES

  {
    title: "The Girl Written In My Prayers",
    description:
      "Before I ever met her, my soul had already whispered her name to the stars.",
    image: "/read-now/story4.png",
    category: "Spiritual Love",
    readTime: "9 min read",
    href: "/stories/the-girl-written-in-my-prayers",
  },

  {
    title: "When Destiny Finally Knocked",
    description:
      "After years of silence, heartbreak, and waiting, fate finally arrived softly.",
    image: "/read-now/story5.png",
    category: "Destiny Reflection",
    readTime: "7 min read",
    href: "/stories/when-destiny-finally-knocked",
  },

  {
    title: "The Memories We Never Lived",
    description:
      "Some memories feel real even when life never gave them a chance to exist.",
    image: "/read-now/story6.png",
    category: "Emotional Writing",
    readTime: "11 min read",
    href: "/stories/the-memories-we-never-lived",
  },

  {
    title: "She Healed What Silence Couldn’t",
    description:
      "Not every healing comes through words. Some people heal your soul just by arriving.",
    image: "/read-now/story7.png",
    category: "Healing Story",
    readTime: "8 min read",
    href: "/stories/she-healed-what-silence-couldnt",
  },
];

const emotionalQuotes = [
  "Some souls meet long before their eyes ever do.",
  "Not every love story begins with a hello.",
  "The deepest emotions are always written quietly.",
  "Some people arrive like destiny remembering your name.",
];

const categories = [
  {
    title: "Soul Letters",
    icon: Feather,
    text: "Letters written from emotions the heart could never silence.",
  },
  {
    title: "Destiny Stories",
    icon: Orbit,
    text: "Stories shaped by timing, fate, healing, and spiritual connection.",
  },
  {
    title: "Emotional Reflections",
    icon: Heart,
    text: "Thoughts born from heartbreak, healing, silence, and longing.",
  },
  {
    title: "Poetic Journeys",
    icon: WandSparkles,
    text: "Words that feel more like memories than sentences.",
  },
];

const soulMoments = [
  {
    title: "Love",
    icon: Heart,
  },
  {
    title: "Healing",
    icon: Flame,
  },
  {
    title: "Destiny",
    icon: Stars,
  },
  {
    title: "Memories",
    icon: Gem,
  },
];

const features = [
  {
    title: "Written From Real Emotions",
    icon: Crown,
    text: "Every story inside Vihaan Writes carries emotions once deeply lived and silently survived.",
  },
  {
    title: "Inspired By Destiny",
    icon: Sunset,
    text: "Stories shaped by timing, healing, spiritual connection, fate, and emotional transformation.",
  },
  {
    title: "A Soulful Reading Experience",
    icon: Library,
    text: "Each page feels cinematic, poetic, timeless, emotional, and unforgettable.",
  },
];

export default function ReadNowPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* GLOBAL LIGHTS */}

      <div className="absolute left-[-200px] top-[-100px] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[150px]" />

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2200&auto=format&fit=crop"
            alt="Library"
            fill
            priority
            className="object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-36 lg:px-10">

          <div className="max-w-4xl">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-amber-300" />

              <span className="text-sm uppercase tracking-[0.3em] text-gray-300">
                Vihaan Writes
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl xl:text-8xl">
              Read Stories
              <span className="mt-2 block bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                That Feel Eternal
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-9 text-gray-400 md:text-xl">
              A universe of emotional storytelling, soulful letters, destiny
              reflections, healing journeys, poetic memories, and timeless
              emotions written from the deepest corners of the heart.
            </p>

            <div className="mt-14 flex flex-wrap gap-5">

              <Link
                href="/stories"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-9 py-5 text-sm font-semibold text-black transition duration-300 hover:scale-105"
              >
                Explore Stories

                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/books"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-9 py-5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/10"
              >
                <BookOpen className="h-5 w-5" />

                Explore Books
              </Link>
            </div>

            {/* STATS */}

            <div className="mt-20 grid gap-6 sm:grid-cols-3">

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 className="text-4xl font-bold text-white">40+</h3>

                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-400">
                  Emotional Writings
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 className="text-4xl font-bold text-white">∞</h3>

                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-400">
                  Soulful Emotions
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <h3 className="text-4xl font-bold text-white">1</h3>

                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-400">
                  Heart Behind The Words
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STORIES */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-10">

        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
              Featured Stories
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Stories Your Soul
              <span className="block text-gray-500">
                Already Knows
              </span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-gray-300 backdrop-blur-xl">
            <Heart className="h-4 w-4 text-red-400" />
            Written with real emotions
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-4">

          {stories.map((story, index) => (
            <Link
              href={story.href}
              key={index}
              className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-3 hover:border-white/20"
            >
              <div className="relative h-[440px] overflow-hidden">

                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.25em] text-amber-300 backdrop-blur-md">
                  {story.category}
                </div>
              </div>

              <div className="p-8">

                <div className="mb-5 flex items-center gap-2 text-sm text-gray-400">
                  <Clock3 className="h-4 w-4" />
                  {story.readTime}
                </div>

                <h3 className="text-3xl font-semibold leading-snug text-white transition group-hover:text-amber-300">
                  {story.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {story.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
                  Read Story

                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SOUL JOURNEY */}

      <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
              Emotional Journey
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
              Every Story
              <span className="block text-gray-500">
                Feels Like A Memory
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
              These stories are not simply written — they are remembered
              emotions, unfinished conversations, healing moments, silent
              prayers, and destiny waiting quietly between the lines.
            </p>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {features.map((item, index) => {
              const Icon: LucideIcon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[36px] border border-white/10 bg-black/40 p-10 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/20"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
                    <Icon className="h-9 w-9 text-amber-300" />
                  </div>

                  <h3 className="mt-8 text-3xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}