import { Metadata } from "next";
import {
  HiOutlineArchiveBox,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineDocumentText,
  HiOutlineChatBubbleLeftRight,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlineArrowRight,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Submit Your Story | The Human Archive",
  description:
    "Share your memories, experiences, lessons, turning points, reflections, and untold stories with The Human Archive.",
};

export default function SubmitStoryPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-8">
              <HiOutlineArchiveBox className="text-cyan-300" />
              <span className="uppercase tracking-[0.3em] text-sm text-zinc-400">
                The Human Archive
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              Submit
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
                Your Story
              </span>
            </h1>

            <p className="mt-10 text-xl text-zinc-400 leading-relaxed max-w-3xl">
              Every life contains a story worth preserving.
              Share your memories, reflections, lessons, turning points,
              experiences, and untold moments with The Human Archive.
            </p>
          </div>
        </div>
      </section>

      {/* Why Share */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.4em] text-zinc-500">
              Why Share
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Stories Shape Humanity
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: HiOutlineHeart,
                title: "Personal Experiences",
                desc: "Share moments that shaped your life and perspective.",
              },
              {
                icon: HiOutlineSparkles,
                title: "Life Lessons",
                desc: "Pass on wisdom gained through experience and reflection.",
              },
              {
                icon: HiOutlineDocumentText,
                title: "Untold Stories",
                desc: "Give a voice to stories that have never been shared.",
              },
              {
                icon: HiOutlineGlobeAlt,
                title: "Leave A Legacy",
                desc: "Preserve experiences for future generations.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                >
                  <Icon className="text-5xl text-cyan-300 mb-6" />

                  <h3 className="text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-32 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Tell Your Story
            </h2>

            <p className="mt-6 text-zinc-400 text-lg">
              Share your experience and become part of The Human Archive.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Full Name
                </label>

                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 outline-none focus:border-cyan-500/50"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 outline-none focus:border-cyan-500/50"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                Story Title
              </label>

              <input
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 outline-none focus:border-cyan-500/50"
                placeholder="Give your story a title"
              />
            </div>

            <div>
              <label className="block mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                Category
              </label>

              <select className="w-full rounded-2xl border border-white/10 bg-black px-6 py-4 outline-none">
                <option>Life Lesson</option>
                <option>Love & Relationships</option>
                <option>Transformation</option>
                <option>Memory</option>
                <option>Regret</option>
                <option>Healing</option>
                <option>Personal Journey</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                Your Story
              </label>

              <textarea
                rows={12}
                className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 outline-none focus:border-cyan-500/50"
                placeholder="Write your story here..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1"
              />

              <p className="text-zinc-400 text-sm leading-relaxed">
                I confirm that this story is my own and I consent to its
                review for possible publication within The Human Archive.
              </p>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-semibold"
            >
              Submit Story
              <HiOutlineArrowRight />
            </button>
          </form>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold">
              Submission Guidelines
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <HiOutlineChatBubbleLeftRight className="text-5xl text-cyan-300 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">
                Be Authentic
              </h3>

              <p className="text-zinc-400">
                Honest experiences create the most meaningful stories.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <HiOutlineHeart className="text-5xl text-pink-300 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">
                Write From Experience
              </h3>

              <p className="text-zinc-400">
                Personal reflections and lessons are encouraged.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <HiOutlineShieldCheck className="text-5xl text-green-300 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">
                Respect Privacy
              </h3>

              <p className="text-zinc-400">
                Avoid sharing sensitive information about others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-16 text-center">
            <HiOutlineArchiveBox className="mx-auto text-6xl text-cyan-300 mb-8" />

            <h2 className="text-5xl font-bold mb-6">
              Every Story Matters
            </h2>

            <p className="max-w-3xl mx-auto text-xl text-zinc-400 leading-relaxed">
              Your experiences may inspire, heal, guide,
              or transform someone you've never met.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}