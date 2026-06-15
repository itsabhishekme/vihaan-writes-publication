import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { books } from "@/lib/books";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return books.map((book: { slug: any; }) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const book = books.find((item: { slug: string }) => item.slug === slug);

  if (!book) {
    return {
      title: "Book Not Found | Vihaan Writes",
      description: "The requested book could not be found.",
    };
  }

  return {
    title: book.seo.title,
    description: book.seo.description,
    keywords: book.seo.keywords,

    alternates: {
      canonical: `https://vihaanwrites.in/upcoming/${book.slug}`,
    },

    openGraph: {
      title: book.seo.title,
      description: book.seo.description,
      url: `https://vihaanwrites.in/upcoming/${book.slug}`,
      siteName: "Vihaan Writes",
      images: [
        {
          url: book.image,
          width: 1200,
          height: 630,
          alt: book.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: book.seo.title,
      description: book.seo.description,
      images: [book.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function UpcomingBookPage({
  params,
}: Props) {
  const { slug } = await params;

  const book = books.find(
    (item: { slug: string }) => item.slug === slug
  );

  if (!book) {
    notFound();
  }

  const relatedBooks = books.filter(
    (item: { slug: string }) => item.slug !== book.slug
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    alternateName: book.subtitle,
    description: book.seo.description,
    image: `https://vihaanwrites.in${book.image}`,
    inLanguage: "en",
    bookFormat: "EBook",
    genre: book.badge,
    author: {
      "@type": "Person",
      name: "Vihaan",
    },
    publisher: {
      "@type": "Organization",
      name: "Vihaan Writes",
      url: "https://vihaanwrites.in",
    },
    url: `https://vihaanwrites.in/upcoming/${book.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}

        <section
          className={`relative overflow-hidden bg-gradient-to-br ${book.accent}`}
        >
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-6">
                  <Link
                    href="/upcoming"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    ← Upcoming Books
                  </Link>
                </div>

                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                  {book.badge}
                </span>

                <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
                  {book.title}
                </h1>

                <h2 className="mt-6 text-xl text-white/80 md:text-3xl">
                  {book.subtitle}
                </h2>

                <blockquote className="mt-10 border-l-4 border-white/30 pl-6 text-lg italic text-white/70 md:text-xl">
                  "{book.quote}"
                </blockquote>

                <div className="mt-10 flex flex-wrap gap-4">
                  <span className="rounded-full bg-amber-500/20 px-5 py-3 text-sm text-amber-300">
                    Coming Soon
                  </span>

                  <span className="rounded-full border border-white/20 px-5 py-3 text-sm">
                    Author: Vihaan
                  </span>

                  <span className="rounded-full border border-white/20 px-5 py-3 text-sm">
                    Upcoming Release
                  </span>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105"
                  >
                    Get Release Updates
                  </Link>

                  <Link
                    href="/stories"
                    className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white hover:text-black"
                  >
                    Explore Books
                  </Link>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-2xl" />

                  <Image
                    src={book.image}
                    alt={book.title}
                    width={700}
                    height={1000}
                    priority
                    className="relative rounded-3xl border border-white/10 shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.25em] text-white/50">
              About This Book
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Discover the Journey
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <p className="text-center text-xl leading-9 text-white/70">
              {book.short}
            </p>
          </div>

          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
            <div className="space-y-6">
              {book.full
                .split("\n")
                .filter(Boolean)
                .map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-lg leading-9 text-white/80"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </section>

        {/* Why Read */}

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-center text-4xl font-bold">
              Why Read This Book?
            </h2>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 p-8">
                <h3 className="text-xl font-semibold">
                  Personal Journey
                </h3>

                <p className="mt-4 text-white/70">
                  Explore a deeply personal path through
                  challenges, growth, identity, purpose,
                  healing, and transformation.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 p-8">
                <h3 className="text-xl font-semibold">
                  Spiritual Reflection
                </h3>

                <p className="mt-4 text-white/70">
                  Discover insights about destiny,
                  karma, life lessons, awareness,
                  and the deeper meaning behind
                  human experiences.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 p-8">
                <h3 className="text-xl font-semibold">
                  Self Discovery
                </h3>

                <p className="mt-4 text-white/70">
                  A reflective exploration of purpose,
                  resilience, emotional growth,
                  healing, and becoming who you
                  were meant to be.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Author */}

        <section className="mx-auto max-w-5xl px-6 py-24">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-14">
            <h2 className="text-4xl font-bold">
              About the Author
            </h2>

            <p className="mt-8 text-lg leading-9 text-white/70">
              Vihaan is a writer focused on spirituality,
              self-discovery, personal growth, emotional
              healing, purpose, and the deeper questions
              of life. Through reflective storytelling and
              honest exploration, his work invites readers
              to look inward and discover meaning within
              their own journeys.
            </p>
          </div>
        </section>

        {/* Related Books */}

        {relatedBooks.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 pb-24">
            <h2 className="mb-12 text-center text-4xl font-bold">
              Other Upcoming Books
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {relatedBooks.map((item: { slug: string; title: string; subtitle: string }) => (
                <Link
                  key={item.slug}
                  href={`/upcoming/${item.slug}`}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/30 hover:bg-white/[0.05]"
                >
                  <h3 className="text-2xl font-bold transition group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-white/60">
                    {item.subtitle}
                  </p>

                  <p className="mt-6 text-white/50">
                    View Book →
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}

        <section className="border-t border-white/10">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center">
            <h2 className="text-4xl font-bold">
              Stay Updated
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              This book is currently in development.
              Follow Vihaan Writes for announcements,
              previews, release dates, and future
              availability.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105"
              >
                Get Updates
              </Link>

              <Link
                href="/stories"
                className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white hover:text-black"
              >
                Browse Books
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}