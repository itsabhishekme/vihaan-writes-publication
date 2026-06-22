export default function EcosystemHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="mb-8">
          <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
            Soulfire Chronicles Documentary Ecosystem
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-6xl">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-light leading-[0.95] tracking-tight">
            Five Pillars.
            <br />
            One Human Journey.
          </h1>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-4xl mt-12">
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
            The Soulfire Chronicles Documentary Ecosystem is an interconnected
            cinematic universe exploring the complete arc of human existence.
            Through five long-form documentary pillars, we examine identity,
            memory, healing, destiny, and transformation—the forces that shape
            every life ever lived.
          </p>
        </div>

        {/* Secondary Content */}
        <div className="grid lg:grid-cols-12 gap-12 mt-20">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-light">
              More Than A Documentary Series
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-zinc-400 text-lg leading-relaxed">
              This ecosystem was never designed as a collection of unrelated
              films. Each pillar exists as part of a larger narrative
              architecture, exploring a different dimension of what it means to
              be human.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Every person begins somewhere. Every person carries memories.
              Every person experiences heartbreak, loss, healing, coincidence,
              and growth. Across cultures, generations, and continents, these
              experiences connect us.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              The Soulfire Chronicles seeks to document those universal truths
              through deeply personal stories. Together, the five pillars form a
              complete exploration of the human condition.
            </p>
          </div>
        </div>

        {/* Ecosystem Flow */}
        <div className="mt-24">
          <h3 className="text-4xl md:text-5xl font-light mb-12">
            The Documentary Journey
          </h3>

          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <div className="text-zinc-700 text-6xl font-light mb-4">
                01
              </div>

              <h4 className="text-xl mb-3">
                Origin
              </h4>

              <p className="text-zinc-500">
                Before Her Name Existed
              </p>
            </div>

            <div>
              <div className="text-zinc-700 text-6xl font-light mb-4">
                02
              </div>

              <h4 className="text-xl mb-3">
                Memory
              </h4>

              <p className="text-zinc-500">
                The Human Archive
              </p>
            </div>

            <div>
              <div className="text-zinc-700 text-6xl font-light mb-4">
                03
              </div>

              <h4 className="text-xl mb-3">
                Healing
              </h4>

              <p className="text-zinc-500">
                Letters Never Sent
              </p>
            </div>

            <div>
              <div className="text-zinc-700 text-6xl font-light mb-4">
                04
              </div>

              <h4 className="text-xl mb-3">
                Destiny
              </h4>

              <p className="text-zinc-500">
                Echoes of Destiny
              </p>
            </div>

            <div>
              <div className="text-zinc-700 text-6xl font-light mb-4">
                05
              </div>

              <h4 className="text-xl mb-3">
                Transformation
              </h4>

              <p className="text-zinc-500">
                The Alchemy of Becoming
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
