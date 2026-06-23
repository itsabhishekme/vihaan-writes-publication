import type { Metadata } from "next";
import SoulfireChroniclesProductionPage from "../soulfire-chronicles-production/page";

export const metadata: Metadata = {
  title: "Documentary | Vihaan Writes",
  description:
    "Explore documentary films, real stories, production insights, and cinematic storytelling from Vihaan Writes.",
  keywords: [
    "Documentary",
    "Documentary Films",
    "Real Stories",
    "Film Production",
    "Independent Documentary",
    "Vihaan Writes",
    "Documentary Storytelling",
    "Cinematic Documentary",
  ],
  openGraph: {
    title: "Documentary | Vihaan Writes",
    description:
      "Explore documentary films, real stories, production insights, and cinematic storytelling.",
    type: "website",
    siteName: "Vihaan Writes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentary | Vihaan Writes",
    description:
      "Explore documentary films, real stories, production insights, and cinematic storytelling.",
  },
};

export default function DocumentaryPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Documentary Route Wrapper */}
      <section className="relative">
        <SoulfireChroniclesProductionPage />
      </section>
    </main>
  );
}