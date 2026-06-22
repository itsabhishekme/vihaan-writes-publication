import EcosystemHero from "./EcosystemHero";
import PillarGrid from "./PillarGrid";
import EcosystemTimeline from "./EcosystemTimeline";
import EcosystemConclusion from "./EcosystemConclusion";

export default function DocumentaryEcosystem() {
  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <EcosystemHero />

        <PillarGrid />

        <EcosystemTimeline />

        <EcosystemConclusion />
      </div>
    </section>
  );
}