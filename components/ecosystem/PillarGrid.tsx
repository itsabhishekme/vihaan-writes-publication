import { pillars } from "@/data/pillars";
import PillarCard from "./PillarCard";

export default function PillarGrid() {
  return (
    <section className="relative py-32">
      {/* Section Intro */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
              Documentary Universe
            </span>

            <h2 className="text-5xl md:text-6xl font-light mt-6 leading-tight">
              The Five Pillars
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-zinc-400 text-xl leading-relaxed mb-8">
              The Soulfire Chronicles ecosystem is structured around five
              interconnected documentary pillars. Each project investigates a
              different dimension of the human experience while contributing to
              a larger narrative architecture exploring identity, memory,
              healing, destiny, and transformation.
            </p>

            <p className="text-zinc-500 text-lg leading-relaxed">
              These are not standalone productions assembled by coincidence.
              They were designed as complementary chapters of a single
              documentary universe, with each pillar answering a fundamental
              question about what it means to be human.
            </p>
          </div>
        </div>
      </div>

      {/* Ecosystem Stats */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
          <div className="border border-zinc-800 rounded-3xl p-8">
            <div className="text-5xl font-light mb-3">05</div>

            <h3 className="text-lg mb-2">
              Documentary Pillars
            </h3>

            <p className="text-zinc-500">
              Interconnected documentary series.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-3xl p-8">
            <div className="text-5xl font-light mb-3">01</div>

            <h3 className="text-lg mb-2">
              Shared Ecosystem
            </h3>

            <p className="text-zinc-500">
              One narrative architecture.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-3xl p-8">
            <div className="text-5xl font-light mb-3">∞</div>

            <h3 className="text-lg mb-2">
              Human Stories
            </h3>

            <p className="text-zinc-500">
              Experiences waiting to be documented.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-3xl p-8">
            <div className="text-5xl font-light mb-3">04</div>

            <h3 className="text-lg mb-2">
              Future Projects
            </h3>

            <p className="text-zinc-500">
              Expanding the documentary universe.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-3xl p-8">
            <div className="text-5xl font-light mb-3">01</div>

            <h3 className="text-lg mb-2">
              Active Production
            </h3>

            <p className="text-zinc-500">
              Currently in development.
            </p>
          </div>
        </div>
      </div>

{/* Pillar Philosophy */}
<div className="max-w-7xl mx-auto mb-32">
  <div className="border-y border-zinc-800 py-24">
    {/* Section Header */}
    <div className="max-w-5xl mb-20">
      <span className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
        Narrative Foundation
      </span>

      <h3 className="text-5xl md:text-7xl font-light mt-6 mb-8 leading-tight">
        Every Pillar
        <br />
        Begins With A Question
      </h3>

      <p className="text-zinc-400 text-xl leading-relaxed mb-8">
        The Soulfire Chronicles Documentary Ecosystem was never designed around
        subjects. It was designed around questions.
      </p>

      <p className="text-zinc-500 text-lg leading-relaxed mb-6">
        Throughout history, humanity has searched for answers to the same
        fundamental mysteries. Across cultures, generations, religions, and
        continents, people continue asking questions about identity, memory,
        loss, meaning, and transformation.
      </p>

      <p className="text-zinc-500 text-lg leading-relaxed">
        Each pillar exists to investigate one of those questions through
        documentary storytelling, personal testimony, lived experience, and
        cinematic exploration.
      </p>
    </div>

    {/* Questions Grid */}
    <div className="grid lg:grid-cols-2 gap-10">
      {/* Pillar 01 */}
      <div className="border border-zinc-800 rounded-3xl p-10">
        <div className="text-6xl text-zinc-800 font-light mb-6">
          01
        </div>

        <h4 className="text-3xl font-light mb-4">
          Who Are We Before Destiny Arrives?
        </h4>

        <p className="text-zinc-400 text-xl mb-4">
          Before Her Name Existed
        </p>

        <p className="text-zinc-500 leading-relaxed">
          Every story begins before the defining moment. Before the encounter.
          Before the turning point. Before the person, place, or event that
          changes everything. This pillar explores identity before destiny
          enters the frame and asks who we are when our future remains
          unwritten.
        </p>
      </div>

      {/* Pillar 02 */}
      <div className="border border-zinc-800 rounded-3xl p-10">
        <div className="text-6xl text-zinc-800 font-light mb-6">
          02
        </div>

        <h4 className="text-3xl font-light mb-4">
          What Deserves To Be Remembered?
        </h4>

        <p className="text-zinc-400 text-xl mb-4">
          The Human Archive
        </p>

        <p className="text-zinc-500 leading-relaxed">
          Memories shape civilizations. Stories connect generations. Voices
          survive long after people are gone. This pillar explores humanity's
          collective archive and examines what we preserve, what we forget, and
          what future generations may lose forever if we fail to document it.
        </p>
      </div>

      {/* Pillar 03 */}
      <div className="border border-zinc-800 rounded-3xl p-10">
        <div className="text-6xl text-zinc-800 font-light mb-6">
          03
        </div>

        <h4 className="text-3xl font-light mb-4">
          What Remains Unresolved?
        </h4>

        <p className="text-zinc-400 text-xl mb-4">
          Letters Never Sent
        </p>

        <p className="text-zinc-500 leading-relaxed">
          Beneath every life exists a hidden emotional landscape. Conversations
          left unfinished. Apologies never spoken. Goodbyes never delivered.
          This pillar investigates grief, forgiveness, longing, healing, and
          the emotional truths people carry for years.
        </p>
      </div>

      {/* Pillar 04 */}
      <div className="border border-zinc-800 rounded-3xl p-10">
        <div className="text-6xl text-zinc-800 font-light mb-6">
          04
        </div>

        <h4 className="text-3xl font-light mb-4">
          Why Did It Happen?
        </h4>

        <p className="text-zinc-400 text-xl mb-4">
          Echoes of Destiny
        </p>

        <p className="text-zinc-500 leading-relaxed">
          Coincidences challenge logic. Synchronicities blur the line between
          chance and meaning. Unexpected encounters alter lives forever. This
          pillar explores whether destiny is real, whether events happen for a
          reason, and how people interpret the invisible patterns behind their
          journeys.
        </p>
      </div>

      {/* Pillar 05 */}
      <div className="lg:col-span-2 border border-zinc-700 rounded-3xl p-12 bg-zinc-950/30">
        <div className="text-7xl text-zinc-700 font-light mb-8">
          05
        </div>

        <h4 className="text-4xl md:text-5xl font-light mb-6">
          Who Do We Become After Everything Changes?
        </h4>

        <p className="text-zinc-300 text-2xl mb-6">
          The Alchemy of Becoming
        </p>

        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
          This is the question that completes the ecosystem.
        </p>

        <p className="text-zinc-500 text-lg leading-relaxed mb-6">
          Identity has been explored. Memories have been preserved. Emotions
          have been confronted. Destiny has been questioned. Yet one question
          remains unanswered.
        </p>

        <p className="text-zinc-500 text-lg leading-relaxed mb-6">
          What happens next?
        </p>

        <p className="text-zinc-500 text-lg leading-relaxed">
          The Alchemy of Becoming examines transformation itself. It explores
          resilience, reinvention, growth, and the lifelong process through
          which people become someone new. It is not simply the final pillar.
          It is the culmination of everything that came before it.
        </p>
      </div>
    </div>

    {/* Ecosystem Summary */}
    <div className="mt-24 pt-20 border-t border-zinc-800">
      <div className="max-w-5xl">
        <h3 className="text-4xl md:text-5xl font-light mb-8">
          Together, These Questions Form A Complete Human Journey
        </h3>

        <p className="text-zinc-400 text-xl leading-relaxed mb-8">
          Origin. Memory. Healing. Destiny. Transformation.
        </p>

        <p className="text-zinc-500 text-lg leading-relaxed mb-6">
          Individually, each pillar investigates a different dimension of the
          human experience. Together, they create a documentary framework that
          follows the complete arc of becoming.
        </p>

        <p className="text-zinc-500 text-lg leading-relaxed">
          This is not merely a collection of documentaries. It is an ecosystem
          of stories connected by a shared pursuit of understanding who we are,
          why we remember, how we heal, what gives life meaning, and who we
          become as a result.
        </p>
      </div>
    </div>
  </div>
</div>
    
      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
            Documentary Projects
          </span>

          <h3 className="text-4xl md:text-5xl font-light mt-4">
            Explore The Ecosystem
          </h3>

          <p className="max-w-3xl mt-6 text-zinc-400 text-lg leading-relaxed">
            Each pillar stands as an independent documentary experience while
            simultaneously contributing to a larger exploration of humanity's
            shared journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.number}
              pillar={pillar}
            />
          ))}
        </div>
      </div>

      {/* Closing Statement */}
      <div className="max-w-5xl mx-auto mt-32 text-center">
        <h3 className="text-4xl md:text-6xl font-light leading-tight">
          Five Stories.
          <br />
          One Ecosystem.
        </h3>

        <p className="mt-10 text-zinc-400 text-xl leading-relaxed">
          Together, the five pillars create a documentary framework that
          examines the complete human experience—from the moments before destiny
          arrives to the transformation that follows after everything changes.
        </p>

        <p className="mt-8 text-zinc-500 leading-relaxed">
          This is the Soulfire Chronicles Documentary Ecosystem.
        </p>
      </div>
    </section>
  );
}
