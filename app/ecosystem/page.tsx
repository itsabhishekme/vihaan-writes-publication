import type { Metadata } from "next";
import DocumentaryEcosystem from "@/components/ecosystem/DocumentaryEcosystem";

export const metadata: Metadata = {
  title: "Documentary Ecosystem | Soulfire Chronicles",
  description:
    "Explore the five-pillar documentary ecosystem of Soulfire Chronicles. A cinematic journey through identity, memory, healing, destiny, and transformation.",
  keywords: [
    "documentary",
    "storytelling",
    "Soulfire Chronicles",
    "human stories",
    "documentary series",
    "transformation",
    "memory",
    "destiny",
    "healing",
    "cinematic universe",
  ],
  openGraph: {
    title: "Soulfire Chronicles Documentary Ecosystem",
    description:
      "Five documentary pillars. One human journey.",
    type: "website",
  },
};

export default function EcosystemPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-zinc-900/20 to-transparent" />

        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-zinc-900/10 blur-3xl" />

        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-zinc-800/10 blur-3xl" />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Hero + Ecosystem */}
        <DocumentaryEcosystem />
      </div>

      {/* Footer Philosophy */}
      <section className="relative z-10 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
                Soulfire Chronicles
              </span>

              <h2 className="text-4xl md:text-5xl font-light mt-6">
                A Living Documentary Universe
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="text-zinc-400 text-xl leading-relaxed mb-8">
                The Documentary Ecosystem is not a single project. It is an
                evolving collection of stories connected by a shared pursuit of
                understanding humanity.
              </p>

              <p className="text-zinc-500 text-lg leading-relaxed mb-6">
                Each pillar explores a different stage of the human journey.
                Together they create a framework capable of documenting
                experiences across generations, cultures, beliefs, and personal
                histories.
              </p>

              <p className="text-zinc-500 text-lg leading-relaxed">
                As new stories emerge and new voices are discovered, the
                ecosystem continues to grow—expanding the archive of human
                experience while remaining anchored to its original purpose:
                understanding who we are and who we become.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Manifesto */}
      <section className="relative z-10 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-32 text-center">
          <span className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
            Documentary Manifesto
          </span>

          <h2 className="text-5xl md:text-7xl font-light mt-8 leading-tight">
            Five Pillars.
            <br />
            Five Questions.
            <br />
            One Human Story.
          </h2>

          <p className="mt-12 text-zinc-400 text-xl leading-relaxed">
            Every documentary begins with a person.
          </p>

          <p className="mt-4 text-zinc-400 text-xl leading-relaxed">
            Every person carries a memory.
          </p>

          <p className="mt-4 text-zinc-400 text-xl leading-relaxed">
            Every memory carries an emotion.
          </p>

          <p className="mt-4 text-zinc-400 text-xl leading-relaxed">
            Every emotion searches for meaning.
          </p>

          <p className="mt-4 text-zinc-400 text-xl leading-relaxed">
            Every meaning shapes who we become.
          </p>

          <div className="w-32 h-px bg-zinc-800 mx-auto my-16" />

          <p className="text-zinc-500 text-lg leading-relaxed">
            This is the Soulfire Chronicles Documentary Ecosystem.
          </p>

          <p className="mt-3 text-zinc-600">
            Origin • Memory • Healing • Destiny • Transformation
          </p>
        </div>
      </section>
    </main>
  );
}