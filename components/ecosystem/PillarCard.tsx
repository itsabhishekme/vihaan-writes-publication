import { Pillar } from "@/types/pillar";

interface Props {
  pillar: Pillar;
}

export default function PillarCard({ pillar }: Props) {
  return (
    <article className="group relative overflow-hidden border border-zinc-800 rounded-3xl p-8 md:p-10 transition-all duration-700 hover:border-zinc-500 hover:-translate-y-2">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-zinc-900/30 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-600 mb-2">
              Documentary Pillar
            </p>

            <span className="text-5xl font-light text-zinc-700">
              {pillar.number}
            </span>
          </div>

          <span className="px-4 py-2 rounded-full border border-zinc-700 text-xs uppercase tracking-wider text-zinc-400">
            {pillar.status}
          </span>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-light leading-tight mb-4">
            {pillar.title}
          </h3>

          <div className="inline-flex items-center gap-3">
            <div className="w-10 h-px bg-zinc-700" />

            <span className="uppercase tracking-[0.25em] text-sm text-zinc-500">
              {pillar.theme}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-zinc-400 text-lg leading-relaxed">
            {pillar.description}
          </p>
        </div>

        {/* Key Question */}
        <div className="border-t border-zinc-800 pt-6 mb-8">
          <span className="uppercase text-xs tracking-[0.3em] text-zinc-600 block mb-3">
            Central Question
          </span>

          <p className="text-xl italic text-zinc-300 leading-relaxed">
            &ldquo;{pillar.question}&rdquo;
          </p>
        </div>

        {/* Documentary Philosophy */}
        <div className="border-t border-zinc-800 pt-6 mb-8">
          <span className="uppercase text-xs tracking-[0.3em] text-zinc-600 block mb-4">
            Why It Matters
          </span>

          <p className="text-zinc-500 leading-relaxed">
            Every documentary pillar explores a unique dimension of the human
            experience. Through personal stories, cultural perspectives, and
            cinematic storytelling, this chapter contributes to a larger
            ecosystem dedicated to understanding what it means to be human.
          </p>
        </div>

        {/* Ecosystem Contribution */}
        <div className="border-t border-zinc-800 pt-6 mb-8">
          <span className="uppercase text-xs tracking-[0.3em] text-zinc-600 block mb-4">
            Ecosystem Contribution
          </span>

          <p className="text-zinc-500 leading-relaxed">
            This pillar serves as one stage in a five-part narrative arc:
            Origin → Memory → Healing → Destiny → Transformation. While each
            documentary stands independently, together they create a complete
            exploration of humanity&apos;s shared journey.
          </p>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-6 border-t border-zinc-800 pt-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-600 mb-2">
              Category
            </p>

            <p className="text-zinc-300">
              Documentary Series
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-600 mb-2">
              Format
            </p>

            <p className="text-zinc-300">
              Long-Form Documentary
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-600 mb-2">
              Narrative Role
            </p>

            <p className="text-zinc-300">
              {pillar.theme}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-600 mb-2">
              Status
            </p>

            <p className="text-zinc-300">
              {pillar.status}
            </p>
          </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-10 pt-8 border-t border-zinc-800">
          <p className="text-zinc-500 text-sm leading-relaxed">
            Soulfire Chronicles Documentary Ecosystem • Pillar {pillar.number}
          </p>
          
          <p className="mt-3 text-zinc-400 leading-relaxed">
            Exploring one chapter of humanity&apos;s ongoing story through cinematic
            documentary storytelling.
          </p>

        </div>
      </div>
    </article>
  );
}
