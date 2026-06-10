"use client";

import { useState } from "react";
import {
  BookOpen,
  PenSquare,
  Upload,
  Heart,
  Users,
  Clock,
  ArrowRight,
  MessageSquare,
  Star,
  FileText,
  Tag,
  CheckCircle,
  Sparkles,
  BarChart3,
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

      {/* Ultra Modern Story Submission Section */}
      <section className="relative z-10 overflow-hidden px-6 py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[180px]" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-pink-600/10 blur-[180px]" />
          <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[150px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-20 text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 backdrop-blur-xl">
              ✨ Share Your Journey With The World
            </div>

            <h2 className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl">
              Submit Your Story
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400">
              Every story carries a lesson. Every experience holds a voice.
              Share your journey and inspire people across the world.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Main Form */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl md:p-12">

              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />

              <div className="relative">
                <div className="mb-10 flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20">
                    <PenSquare className="h-8 w-8 text-purple-300" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      Tell Your Story
                    </h3>
                    <p className="mt-1 text-zinc-400">
                      Your words may become someone&apos;s inspiration.
                    </p>
                  </div>
                </div>

                <form className="space-y-8">

                  {/* Story Title */}
                  <div>
                    <label className="mb-3 block text-sm font-medium text-zinc-300">
                      Story Title
                    </label>

                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Give your story a meaningful title..."
                      className="w-full rounded-3xl border border-white/10 bg-black/30 px-6 py-5 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
                    />
                  </div>

                  {/* Author & Email */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-3 block text-sm font-medium text-zinc-300">
                        Author Name
                      </label>

                      <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Your Name"
                        className="w-full rounded-3xl border border-white/10 bg-black/30 px-6 py-5 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
                      />
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-medium text-zinc-300">
                        Email Address
                      </label>

                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full rounded-3xl border border-white/10 bg-black/30 px-6 py-5 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="mb-3 block text-sm font-medium text-zinc-300">
                      Story Category
                    </label>

                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full rounded-3xl border border-white/10 bg-black/30 px-6 py-5 outline-none transition-all focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
                    >
                      <option value="">Choose Category</option>

                      {categories.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="mb-4 block text-sm font-medium text-zinc-300">
                      Story Tags
                    </label>

                    <div className="flex flex-wrap gap-3">
                      {[
                        "Life",
                        "Motivation",
                        "Love",
                        "Travel",
                        "Career",
                        "Family",
                        "Success",
                        "Failure",
                        "Dreams",
                        "Growth",
                      ].map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition-all hover:border-purple-500 hover:bg-purple-500/10"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Upload Area */}
                  <div>
                    <label className="mb-4 block text-sm font-medium text-zinc-300">
                      Cover Image
                    </label>

                    <div className="group rounded-[32px] border-2 border-dashed border-white/10 bg-black/20 p-14 text-center transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/5">
                      <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/5">
                        <Upload className="h-10 w-10 text-zinc-400 transition-all group-hover:scale-110 group-hover:text-purple-400" />
                      </div>

                      <h3 className="text-2xl font-semibold text-white">
                        Upload Cover Image
                      </h3>

                      <p className="mx-auto mt-3 max-w-md text-zinc-500">
                        Drag & drop your image here or browse files from your device.
                        PNG, JPG and WEBP formats supported.
                      </p>

                      <button
                        type="button"
                        className="mt-8 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold transition-all hover:scale-105"
                      >
                        Choose Image
                      </button>
                    </div>
                  </div>

                  {/* Story */}
                  <div>
                    <label className="mb-3 flex items-center justify-between text-sm font-medium text-zinc-300">
                      <span>Your Story</span>

                      <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs">
                        {story.length} Characters
                      </div>
                    </label>

                    <textarea
                      rows={18}
                      value={story}
                      onChange={(e) => setStory(e.target.value)}
                      placeholder="Share your journey, lessons, memories, struggles, victories, and experiences..."
                      className="w-full rounded-[32px] border border-white/10 bg-black/30 p-6 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
                    />

                    <div className="mt-4 flex items-center justify-between text-sm text-zinc-500">
                      <span>Recommended: 300+ words</span>
                      <span>Estimated Read Time: 5 min</span>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <label className="flex items-start gap-4">
                      <input
                        type="checkbox"
                        className="mt-1 h-5 w-5 rounded border-white/20"
                      />

                      <span className="text-sm text-zinc-400">
                        I confirm that this story is my original work and I have
                        permission to publish the content shared above.
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group relative flex w-full items-center justify-center gap-4 overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-10 py-6 text-lg font-bold transition-all duration-500 hover:scale-[1.01]"
                  >
                    <span className="relative z-10">
                      Publish My Story
                    </span>

                    <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />

                    <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
                  </button>
                </form>
              </div>
            </div>

            {/* Submission Progress */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/10 blur-[100px]" />
              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-pink-500/10 blur-[100px]" />

              <div className="relative">
                {/* Header */}
                <div className="mb-8 flex items-start justify-between">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-300">
                      ✨ Live Progress Tracker
                    </div>

                    <h3 className="text-3xl font-bold text-white">
                      Submission Progress
                    </h3>

                    <p className="mt-2 text-sm text-zinc-400">
                      Complete all sections to publish your story.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-5xl font-extrabold text-transparent">
                      {Math.round(
                        (
                          [
                            title,
                            author,
                            email,
                            category,
                            story,
                          ].filter(Boolean).length /
                          5
                        ) *
                        100
                      )}
                      %
                    </div>

                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      Complete
                    </p>
                  </div>
                </div>

                {/* Main Progress Bar */}
                <div className="mb-8">
                  <div className="mb-3 flex justify-between text-sm">
                    <span className="text-zinc-400">
                      Overall Completion
                    </span>

                    <span className="font-medium text-purple-300">
                      {
                        [
                          title,
                          author,
                          email,
                          category,
                          story,
                        ].filter(Boolean).length
                      }
                      /5 Fields
                    </span>
                  </div>

                  <div className="relative h-4 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 transition-all duration-700"
                      style={{
                        width: `${(
                          [
                            title,
                            author,
                            email,
                            category,
                            story,
                          ].filter(Boolean).length /
                          5
                        ) *
                          100
                          }%`,
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="space-y-4">
                  {[
                    {
                      label: "Story Title",
                      value: title,
                      icon: "📝",
                    },
                    {
                      label: "Author Information",
                      value: author,
                      icon: "👤",
                    },
                    {
                      label: "Email Address",
                      value: email,
                      icon: "📧",
                    },
                    {
                      label: "Story Category",
                      value: category,
                      icon: "🏷️",
                    },
                    {
                      label: "Story Content",
                      value: story.length > 100,
                      icon: "📖",
                    },
                  ].map((step) => (
                    <div
                      key={step.label}
                      className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 ${step.value
                        ? "border-emerald-500/20 bg-emerald-500/10"
                        : "border-white/10 bg-white/[0.03]"
                        }`}
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${step.value
                          ? "bg-emerald-500/20"
                          : "bg-white/5"
                          }`}
                      >
                        {step.value ? "✓" : step.icon}
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-white">
                          {step.label}
                        </h4>

                        <p className="text-sm text-zinc-500">
                          {step.value
                            ? "Completed"
                            : "Pending"}
                        </p>
                      </div>

                      {step.value && (
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Story Analytics */}
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <BarChart3 className="h-6 w-6 text-purple-400" />
                    <h4 className="text-lg font-bold">
                      Story Analytics
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-wider text-zinc-500">
                        Characters
                      </p>

                      <h5 className="mt-2 text-3xl font-bold text-white">
                        {story.length}
                      </h5>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-wider text-zinc-500">
                        Words
                      </p>

                      <h5 className="mt-2 text-3xl font-bold text-white">
                        {
                          story
                            .trim()
                            .split(/\s+/)
                            .filter(Boolean).length
                        }
                      </h5>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-wider text-zinc-500">
                        Reading Time
                      </p>

                      <h5 className="mt-2 text-3xl font-bold text-white">
                        {Math.max(
                          1,
                          Math.ceil(
                            story
                              .trim()
                              .split(/\s+/)
                              .filter(Boolean).length / 200
                          )
                        )}
                        m
                      </h5>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-wider text-zinc-500">
                        Status
                      </p>

                      <h5
                        className={`mt-2 text-lg font-bold ${story.length > 300
                          ? "text-emerald-400"
                          : "text-yellow-400"
                          }`}
                      >
                        {story.length > 300
                          ? "Ready"
                          : "Draft"}
                      </h5>
                    </div>
                  </div>
                </div>

                {/* Publishing Score */}
                <div className="mt-8 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20">
                      <Sparkles className="h-7 w-7 text-purple-300" />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white">
                        Publishing Readiness
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {story.length > 500
                          ? "Excellent! Your story has enough depth and detail for readers."
                          : "Add more personal experiences, emotions, and lessons to create a stronger connection with readers."}
                      </p>

                      <div className="mt-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-purple-300">
                        Score:
                        <span className="ml-2 text-white">
                          {Math.min(
                            100,
                            Math.round(
                              (story.length / 1000) * 100
                            )
                          )}
                          /100
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guidelines */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <h3 className="mb-6 text-2xl font-bold">
                Submission Guidelines
              </h3>

              <div className="space-y-5">
                {[
                  "Write from real experiences",
                  "Be authentic and honest",
                  "Respect privacy",
                  "Original content only",
                  "Minimum 300 words",
                  "Avoid promotional content",
                  "Use clear language",
                  "Stories may be edited for readability",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-green-400" />
                    <p className="text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="rounded-[32px] border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8">
              <h3 className="mb-8 text-2xl font-bold">
                Why Share Your Story?
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <Heart className="h-6 w-6 text-pink-400" />
                  <div>
                    <h4 className="font-semibold">Inspire Others</h4>
                    <p className="mt-1 text-sm text-zinc-400">
                      Help someone facing a similar challenge.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="h-6 w-6 text-cyan-400" />
                  <div>
                    <h4 className="font-semibold">Build Connections</h4>
                    <p className="mt-1 text-sm text-zinc-400">
                      Connect through shared human experiences.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <BookOpen className="h-6 w-6 text-purple-400" />
                  <div>
                    <h4 className="font-semibold">Create Legacy</h4>
                    <p className="mt-1 text-sm text-zinc-400">
                      Preserve memories and lessons for future readers.
                    </p>
                  </div>
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

      {/* Enhanced FAQ Section */}
      <section className="relative z-10 overflow-hidden px-6 py-28">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
          <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-20 text-center">
            <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-zinc-300 backdrop-blur-md">
              Frequently Asked Questions
            </span>

            <h2 className="mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
              Everything You Need To Know
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Find answers to common questions about story submissions,
              publishing, privacy, and community participation.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                q: "Can I submit anonymously?",
                a: "Yes. You may share your story without revealing your identity. We respect your privacy and allow anonymous submissions whenever requested.",
              },
              {
                q: "Will my story be edited?",
                a: "Only light editorial adjustments may be made to improve grammar, readability, and formatting while preserving your original message and emotions.",
              },
              {
                q: "How long should my story be?",
                a: "There is no strict limit. We generally recommend 300–2000 words, but powerful stories can be much shorter or longer.",
              },
              {
                q: "Can I submit multiple stories?",
                a: "Absolutely. We encourage contributors to share multiple experiences, reflections, or chapters of their journey.",
              },
              {
                q: "Will I receive credit as an author?",
                a: "Yes. If you choose to include your name, your contribution can be published with full author credit.",
              },
              {
                q: "How long does review take?",
                a: "Most submissions are reviewed within a few business days. Processing time may vary depending on volume.",
              },
              {
                q: "Can I update my submission later?",
                a: "Yes. Contact us with your updated version and we will help revise the published content whenever possible.",
              },
              {
                q: "What kind of stories are accepted?",
                a: "We welcome authentic personal experiences, life lessons, inspirational journeys, reflections, and meaningful narratives from all backgrounds.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number Badge */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Question */}
                <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {faq.q}
                </h3>

                {/* Answer */}
                <p className="leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                  {faq.a}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 overflow-hidden px-6 py-36">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[180px]" />
          <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-pink-500/10 blur-[140px]" />
          <div className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] px-8 py-20 backdrop-blur-2xl md:px-20">

            {/* Decorative Gradient Border */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />

            {/* Floating Elements */}
            <div className="absolute -left-12 top-12 h-32 w-32 rounded-full border border-white/10 bg-white/5 blur-md" />
            <div className="absolute -right-12 bottom-12 h-40 w-40 rounded-full border border-white/10 bg-white/5 blur-md" />

            <div className="relative text-center">

              {/* Icon */}
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl">
                <Tag className="h-12 w-12 text-purple-300" />
              </div>

              {/* Badge */}
              <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-300 backdrop-blur-md">
                ✨ Share • Inspire • Connect
              </div>

              {/* Heading */}
              <h2 className="mx-auto max-w-4xl bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-7xl">
                Your Story Has The Power
                <br />
                To Change Someone&apos;s Life
              </h2>

              {/* Description */}
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
                Every experience carries wisdom. Every challenge carries a lesson.
                Somewhere in the world, someone is waiting to read the words only
                you can write.
              </p>

              {/* Stats */}
              <div className="mt-14 flex flex-wrap items-center justify-center gap-10">
                <div>
                  <h3 className="text-3xl font-bold text-white">100%</h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    Authentic Stories
                  </p>
                </div>

                <div className="h-12 w-px bg-white/10" />

                <div>
                  <h3 className="text-3xl font-bold text-white">∞</h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    Possibilities
                  </p>
                </div>

                <div className="h-12 w-px bg-white/10" />

                <div>
                  <h3 className="text-3xl font-bold text-white">1</h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    Story Can Inspire Many
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
                <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-10 py-5 text-lg font-semibold text-white shadow-2xl transition-all duration-500 hover:scale-105">
                  <span className="relative z-10">
                    Start Writing Today
                  </span>

                  <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
                </button>

                <button className="rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-lg font-medium text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white">
                  Explore Stories
                </button>
              </div>

              {/* Bottom Text */}
              <p className="mt-8 text-sm tracking-wide text-zinc-500">
                Join a growing community of storytellers sharing experiences,
                lessons, memories, and inspiration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}