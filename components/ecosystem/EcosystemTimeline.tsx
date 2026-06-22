export default function EcosystemTimeline() {
  const stages = [
    {
      number: "01",
      title: "Origin",
      project: "Before Her Name Existed",
      question: "Who are we before the story begins?",
      description:
        "Every life starts before the defining moment arrives. Before love, before destiny, before the encounter that changes everything. This pillar explores identity in its purest form and the unseen chapters that exist before the narrative begins.",
    },
    {
      number: "02",
      title: "Memory",
      project: "The Human Archive",
      question: "What deserves to be remembered?",
      description:
        "Humanity leaves traces everywhere—stories, photographs, journals, recordings, traditions, and lived experiences. This pillar is dedicated to preserving those memories before they disappear into silence.",
    },
    {
      number: "03",
      title: "Healing",
      project: "Letters Never Sent",
      question: "What remains unresolved?",
      description:
        "Beneath every memory lives emotion. Regret, forgiveness, grief, longing, hope, and love. This pillar explores the words people never spoke and the emotional journeys that continue long after events have passed.",
    },
    {
      number: "04",
      title: "Destiny",
      project: "Echoes of Destiny",
      question: "Why did it happen?",
      description:
        "Coincidences, synchronicities, chance encounters, and impossible connections challenge our understanding of reality. This pillar investigates whether there is a deeper meaning behind the paths we travel.",
    },
    {
      number: "05",
      title: "Transformation",
      project: "The Alchemy of Becoming",
      question: "Who do we become afterward?",
      description:
        "The culmination of the ecosystem. After memory, healing, and understanding comes transformation. This pillar explores growth, resilience, reinvention, and the lifelong process of becoming.",
    },
  ];

  return (
    <section className="relative py-40">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-24">
        <span className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
          Documentary Narrative Architecture
        </span>

        <h2 className="text-5xl md:text-7xl font-light mt-6 mb-8">
          The Narrative Arc
        </h2>

        <p className="max-w-4xl text-zinc-400 text-xl leading-relaxed">
          The Soulfire Chronicles ecosystem is built around a five-stage
          narrative journey. Each pillar represents a distinct phase of the
          human experience, yet none exist in isolation. Together they form a
          complete exploration of identity, memory, emotion, meaning, and
          transformation.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto">
        <div className="space-y-24">
          {stages.map((stage, index) => (
            <div
              key={stage.number}
              className="relative"
            >
              {/* Connector Line */}
              {index !== stages.length - 1 && (
                <div className="absolute left-10 top-32 bottom-[-96px] w-px bg-gradient-to-b from-zinc-700 to-zinc-900 hidden lg:block" />
              )}

              <div className="grid lg:grid-cols-12 gap-10">
                {/* Number Column */}
                <div className="lg:col-span-2">
                  <div className="text-8xl md:text-9xl font-light text-zinc-800">
                    {stage.number}
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-10">
                  <div className="border border-zinc-800 rounded-3xl p-8 md:p-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                        Stage {stage.number}
                      </span>

                      <div className="w-12 h-px bg-zinc-700" />

                      <span className="text-zinc-400">
                        {stage.project}
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-light mb-6">
                      {stage.title}
                    </h3>

                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                      {stage.description}
                    </p>

                    <blockquote className="border-l border-zinc-700 pl-6">
                      <p className="text-xl italic text-zinc-300">
                        "{stage.question}"
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Statement */}
      <div className="max-w-5xl mx-auto text-center mt-40">
        <p className="text-3xl md:text-5xl font-light leading-relaxed">
          Every documentary begins with a story.
        </p>

        <p className="text-3xl md:text-5xl font-light leading-relaxed mt-4">
          Together, they tell the story of humanity.
        </p>

        <p className="mt-10 text-zinc-500 text-lg leading-relaxed">
          From origin to transformation, the five pillars form a complete
          documentary ecosystem exploring the universal journey shared by us
          all.
        </p>
      </div>
    </section>
  );
}
