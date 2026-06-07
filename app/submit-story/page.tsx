"use client";

import { useState } from "react";
import {
  BookOpen,
  PenSquare,
  Upload,
  Sparkles,
  Heart,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Star,
  FileText,
  Tag,
} from "lucide-react";

export default function SubmitStoryPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [story, setStory] = useState("");
  const [email, setEmail] = useState("");

  const categories = [
    "Love",
    "Destiny",
    "Life Lessons",
    "Childhood",
    "Family",
    "Friendship",
    "Personal Growth",
    "Travel",
    "Dreams",
    "Human Experience",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative z-10 px-6 pt-32 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-zinc-300">
                Share Your Story With Humanity
              </span>
            </div>

            <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
              Every Human Has
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                A Story Worth Preserving
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              The Human Archive is a living collection of memories,
              experiences, emotions, lessons, and moments that define what it
              means to be human.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm text-zinc-400">Stories Shared</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm text-zinc-400">Countries</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
                <div className="text-3xl font-bold">1M+</div>
                <div className="text-sm text-zinc-400">Readers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-10">
              <div className="mb-8 flex items-center gap-3">
                <PenSquare className="h-8 w-8 text-purple-400" />
                <div>
                  <h2 className="text-3xl font-bold">Submit Your Story</h2>
                  <p className="text-zinc-400">
                    Your words may inspire someone you've never met.
                  </p>
                </div>
              </div>

              <form className="space-y-8">
                <div>
                  <label className="mb-3 block text-sm font-medium text-zinc-300">
                    Story Title
                  </label>

                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Give your story a meaningful title..."
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition-all focus:border-purple-500"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-zinc-300">
                      Author Name
                    </label>

                    <input
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium text-zinc-300">
                      Email
                    </label>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-zinc-300">
                    Category
                  </label>

                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none focus:border-purple-500"
                  >
                    <option value="">Choose Category</option>

                    {categories.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-zinc-300">
                    Story Cover Image
                  </label>

                  <div className="rounded-3xl border-2 border-dashed border-white/10 p-12 text-center transition-all hover:border-purple-500">
                    <Upload className="mx-auto mb-4 h-12 w-12 text-zinc-500" />

                    <h3 className="text-lg font-semibold">
                      Upload Cover Image
                    </h3>

                    <p className="mt-2 text-zinc-500">
                      PNG, JPG, WEBP up to 10MB
                    </p>

                    <button
                      type="button"
                      className="mt-6 rounded-xl bg-purple-600 px-6 py-3 font-medium transition-all hover:bg-purple-500"
                    >
                      Choose File
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-3 flex items-center justify-between text-sm font-medium text-zinc-300">
                    <span>Your Story</span>
                    <span>{story.length} characters</span>
                  </label>

                  <textarea
                    rows={15}
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    placeholder="Tell your story..."
                    className="w-full rounded-3xl border border-white/10 bg-black/40 p-5 outline-none focus:border-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-5 text-lg font-semibold transition-all hover:scale-[1.01]"
                >
                  Submit Story

                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="mb-6 text-2xl font-bold">
                  Submission Guidelines
                </h3>

                <div className="space-y-5">
                  {[
                    "Write from your own experience",
                    "Be authentic and honest",
                    "Respect privacy and identities",
                    "Minimum 300 words recommended",
                    "Original content only",
                    "Stories may be edited for readability",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-400" />
                      <p className="text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="mb-6 text-2xl font-bold">
                  Why Share Your Story?
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Heart className="h-6 w-6 text-pink-400" />
                    <div>
                      <h4 className="font-semibold">Inspire Others</h4>
                      <p className="text-sm text-zinc-400">
                        Your experience may help someone navigate their own
                        journey.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Users className="h-6 w-6 text-cyan-400" />
                    <div>
                      <h4 className="font-semibold">Connect Humanity</h4>
                      <p className="text-sm text-zinc-400">
                        Stories bridge cultures, generations, and experiences.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <BookOpen className="h-6 w-6 text-purple-400" />
                    <div>
                      <h4 className="font-semibold">Preserve Memories</h4>
                      <p className="text-sm text-zinc-400">
                        Every story becomes part of a living archive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8">
                <h3 className="mb-6 text-2xl font-bold">Story Categories</h3>

                <div className="flex flex-wrap gap-3">
                  {categories.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold">Featured Stories</h2>

            <p className="mt-4 text-zinc-400">
              Voices from around the world.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "The Letter I Never Sent",
                icon: FileText,
              },
              {
                title: "A Stranger Changed My Life",
                icon: MessageSquare,
              },
              {
                title: "The Day Everything Changed",
                icon: Star,
              },
            ].map((story, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:-translate-y-2"
              >
                <story.icon className="mb-5 h-10 w-10 text-purple-400" />

                <h3 className="mb-4 text-2xl font-bold">{story.title}</h3>

                <p className="text-zinc-400">
                  A powerful human story that touched thousands of readers and
                  became part of our growing archive.
                </p>

                <button className="mt-6 flex items-center gap-2 text-purple-400">
                  Read Story
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Can I submit anonymously?",
                a: "Yes. You may choose to keep your identity private.",
              },
              {
                q: "Will my story be edited?",
                a: "Minor edits may be made for readability while preserving your voice.",
              },
              {
                q: "How long should my story be?",
                a: "We recommend at least 300 words, but meaningful stories come in all lengths.",
              },
              {
                q: "Can I submit multiple stories?",
                a: "Absolutely. We welcome multiple submissions.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <h3 className="mb-3 text-xl font-semibold">{faq.q}</h3>
                <p className="text-zinc-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <Tag className="mx-auto mb-6 h-12 w-12 text-purple-400" />

          <h2 className="text-5xl font-bold md:text-6xl">
            Your Story Matters
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-400">
            Somewhere in the world, someone needs to hear what you've lived.
          </p>

          <button className="mt-10 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-5 text-lg font-semibold">
            Start Writing Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <div className="flex items-center justify-center gap-3">
          <Clock className="h-5 w-5 text-purple-400" />
          <span className="text-zinc-400">
            The Human Archive • Preserving Humanity's Stories
          </span>
        </div>
      </footer>
    </main>
  );
}