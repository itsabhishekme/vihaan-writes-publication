import { Metadata } from "next";
import Link from "next/link";
import {
    HiOutlineFilm,
    HiOutlineSparkles,
    HiOutlineGlobeAlt,
    HiOutlineUserGroup,
    HiOutlineLightBulb,
    HiOutlineClock,
    HiOutlinePlay,
    HiOutlineHeart,
} from "react-icons/hi";

export const metadata: Metadata = {
    title: "Soulfire Chronicles Production | Vihaan Writes",
    description:
        "Soulfire Chronicles Production creates inspiring documentaries, cinematic storytelling, and visual experiences exploring destiny, spirituality, human connection, and the extraordinary journey of life.",
};

const timeline = [
    {
        year: "2025",
        title: "The Beginning",
        description:
            "Soulfire Chronicles Production was founded with a vision to create inspiring documentaries and cinematic stories.",
    },
    {
        year: "2026",
        title: "First Documentary Projects",
        description:
            "Development began on original documentary concepts exploring destiny, spirituality, and human connection.",
    },
    {
        year: "2027",
        title: "Global Expansion",
        description:
            "Building partnerships and reaching international audiences through digital platforms.",
    },
    {
        year: "Future",
        title: "A Legacy of Stories",
        description:
            "Creating films that inspire generations and leave a lasting impact on audiences worldwide.",
    },
];

const values = [
    {
        icon: HiOutlineHeart,
        title: "Purpose",
        description:
            "Every project is created with meaning, authenticity, and a desire to inspire positive transformation.",
    },
    {
        icon: HiOutlineSparkles,
        title: "Creativity",
        description:
            "Combining cinematic excellence with innovative storytelling techniques and artistic vision.",
    },
    {
        icon: HiOutlineUserGroup,
        title: "Human Connection",
        description:
            "Exploring the experiences, relationships, and emotions that unite humanity.",
    },
    {
        icon: HiOutlineGlobeAlt,
        title: "Global Perspective",
        description:
            "Sharing stories that transcend borders and resonate with audiences worldwide.",
    },
];

const productions = [
    {
        icon: HiOutlineFilm,
        title: "Documentaries",
        description:
            "Thought-provoking films exploring extraordinary human experiences, spirituality, destiny, and personal growth.",
    },
    {
        icon: HiOutlinePlay,
        title: "Cinematic Stories",
        description:
            "Narrative-driven productions that blend emotion, visual artistry, and powerful storytelling.",
    },
    {
        icon: HiOutlineLightBulb,
        title: "Interviews & Conversations",
        description:
            "Authentic discussions with inspiring individuals, thought leaders, and visionaries.",
    },
    {
        icon: HiOutlineSparkles,
        title: "Visual Experiences",
        description:
            "Immersive creative projects designed to awaken curiosity and inspire reflection.",
    },
];

export default function SoulfireChroniclesProductionPage() {
    return (
        <main className="bg-black text-white">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-blue-500/10" />

                <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
                            Soulfire Chronicles Production
                        </span>

                        <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
                            Telling Stories
                            <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                                That Inspire Humanity
                            </span>
                        </h1>

                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-300">
                            Soulfire Chronicles Production is dedicated to
                            creating powerful documentaries, cinematic
                            narratives, and visual experiences that illuminate
                            minds, awaken souls, and celebrate the
                            extraordinary journey of human life.
                        </p>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2">
                    <div>
                        <h2 className="mb-6 text-4xl font-bold">
                            Our Story
                        </h2>

                        <p className="mb-6 text-lg leading-relaxed text-gray-300">
                            More Than A Production House
                        </p>

                        <p className="mb-6 leading-relaxed text-gray-400">
                            Soulfire Chronicles Production was founded on the
                            belief that stories possess the power to transform
                            lives. Through documentaries, films, interviews,
                            and cinematic storytelling, we explore themes of
                            destiny, spirituality, human connection, personal
                            growth, and extraordinary experiences.
                        </p>

                        <p className="leading-relaxed text-gray-400">
                            Our mission is not simply to create content but to
                            create meaningful experiences that inspire
                            audiences to reflect, dream, and connect with
                            something greater than themselves. Every project is
                            approached with passion, creativity, and a
                            commitment to excellence.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
                        <h3 className="mb-6 text-3xl font-bold">
                            Our Mission
                        </h3>

                        <p className="mb-8 text-gray-300 leading-relaxed">
                            To create films and documentaries that inspire
                            reflection, awaken curiosity, and celebrate the
                            extraordinary stories hidden within everyday life.
                        </p>

                        <h3 className="mb-6 text-3xl font-bold">
                            Our Vision
                        </h3>

                        <p className="text-gray-300 leading-relaxed">
                            To become a globally recognized storytelling brand
                            that leaves a lasting impact on audiences through
                            meaningful cinematic experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Production */}
            <section className="border-y border-white/10 bg-white/[0.03]">
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                    <div className="mb-12 text-center">
                        <span className="text-amber-400">
                            Featured Production
                        </span>

                        <h2 className="mt-4 text-5xl font-bold">
                            Before Her Name Existed
                        </h2>

                        <p className="mt-4 italic text-gray-400">
                            “I loved the story before I knew the character.”
                        </p>
                    </div>

                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-lg leading-relaxed text-gray-300">
                            What if the most important person in your life
                            entered your story long before you knew their
                            name?
                        </p>

                        <p className="mt-6 leading-relaxed text-gray-400">
                            A cinematic journey through dreams, intuition,
                            synchronicities, destiny, and extraordinary human
                            experiences shared across cultures and generations.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <span className="rounded-full border border-white/10 px-4 py-2">
                                Spiritual Documentary
                            </span>

                            <span className="rounded-full border border-white/10 px-4 py-2">
                                90 Minutes
                            </span>

                            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-amber-300">
                                Coming Soon
                            </span>
                        </div>

                        <div className="mt-10">
                            <Link
                                href="/before-her-name-existed"
                                className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trailer Section */}

            <section className="border-y border-white/10 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
                <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
                    <div className="mb-16 text-center">
                        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
                            Official Trailer
                        </span>


                        <h2 className="mt-8 text-5xl font-bold md:text-6xl">
                            Before Her Name Existed
                        </h2>

                        <p className="mt-4 text-xl italic text-gray-400">
                            &ldquo;I fell in love with the story long before I ever knew the character.&rdquo;
                        </p>

                        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                            {/* Video */}
                            <div>
                                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                                    <video
                                        controls
                                        preload="metadata"
                                        poster="/images/before-her-name-existed-poster.jpg"
                                        className="aspect-video w-full"
                                    >
                                        <source
                                            src="https://m5seiikuxyzlci4v.public.blob.vercel-storage.com/Before%20Her%20Name%20Existed/Stories%20That%20Illuminate%20Minds%20And%20Awaken%20Souls.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <span className="text-sm uppercase tracking-[0.3em] text-amber-400">
                                    Documentary Trailer
                                </span>

                                <h3 className="mt-4 text-4xl font-bold">
                                    What If Love Starts Before Introductions?
                                </h3>

                                <p className="mt-6 leading-relaxed text-gray-300">
                                    Before Her Name Existed is a thought-provoking
                                    documentary exploring one of humanity&#39;s most fascinating
                                    questions:
                                </p>

                                <blockquote className="mt-6 border-l-4 border-amber-400 pl-6 text-2xl font-semibold italic text-white">
                                    Can love begin before two people meet?
                                </blockquote>

                                <p className="mt-6 leading-relaxed text-gray-400">
                                    Across cultures, generations, and spiritual traditions,
                                    countless people describe dreams, intuition,
                                    synchronicities, unexplained familiarity, and
                                    life-changing signs that appeared before they met the
                                    person who would later become their spouse or life
                                    partner.
                                </p>

                                <p className="mt-6 leading-relaxed text-gray-400">
                                    Through compelling stories, emotional reflections,
                                    expert perspectives, and cinematic storytelling, this
                                    documentary explores mysterious connections that seem
                                    to transcend time, distance, and coincidence.
                                </p>

                                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <h4 className="font-semibold text-amber-400">
                                            Love & Destiny
                                        </h4>
                                    </div>

                                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <h4 className="font-semibold text-amber-400">
                                            Soul Connections
                                        </h4>
                                    </div>

                                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <h4 className="font-semibold text-amber-400">
                                            Synchronicity
                                        </h4>
                                    </div>

                                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <h4 className="font-semibold text-amber-400">
                                            Intuition & Dreams
                                        </h4>
                                    </div>

                                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <h4 className="font-semibold text-amber-400">
                                            Human Connection
                                        </h4>
                                    </div>

                                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <h4 className="font-semibold text-amber-400">
                                            Fate vs Free Will
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Extended Description */}
                        <div className="mx-auto mt-24 max-w-5xl">
                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur">
                                <h3 className="mb-8 text-center text-4xl font-bold">
                                    About The Documentary
                                </h3>

                                <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                                    <p>
                                        From recurring dreams and chance encounters to moments
                                        of profound recognition, Before Her Name Existed
                                        invites audiences to consider a possibility that is
                                        both timeless and deeply personal.
                                    </p>

                                    <p>
                                        Whether viewed through psychology, spirituality,
                                        destiny, or personal experience, these stories
                                        challenge what we believe about love, fate, and
                                        human connection.
                                    </p>

                                    <p>
                                        This film is for anyone who has ever wondered whether
                                        certain people are destined to cross our paths—and
                                        whether the heart sometimes recognizes a story before
                                        it knows the character.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Production Note */}
                        <div className="mx-auto mt-20 max-w-4xl text-center">
                            <h3 className="text-3xl font-bold">
                                Produced By Soulfire Chronicles
                            </h3>

                            <p className="mt-6 leading-relaxed text-gray-400">
                                Soulfire Chronicles Production creates meaningful
                                documentaries, inspiring stories, and cinematic explorations
                                of the human experience. Through films, interviews, and
                                visual storytelling, we explore spirituality, relationships,
                                consciousness, personal transformation, and extraordinary
                                true stories that illuminate minds and awaken souls.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Types */}
            <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        What We Create
                    </h2>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {productions.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-white/10 bg-white/5 p-8"
                        >
                            <item.icon className="mb-4 h-10 w-10 text-amber-400" />

                            <h3 className="mb-3 text-xl font-semibold">
                                {item.title}
                            </h3>

                            <p className="text-gray-400">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="border-y border-white/10 bg-white/[0.03]">
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold">
                            Our Core Values
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="rounded-2xl border border-white/10 bg-black/40 p-8"
                            >
                                <value.icon className="mb-4 h-10 w-10 text-amber-400" />

                                <h3 className="mb-3 text-xl font-semibold">
                                    {value.title}
                                </h3>

                                <p className="text-gray-400">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        Our Journey
                    </h2>
                </div>

                <div className="mt-20 space-y-8">
                    {timeline.map((item) => (
                        <div
                            key={item.year}
                            className="rounded-2xl border border-white/10 bg-white/5 p-8"
                        >
                            <div className="flex items-center gap-4">
                                <HiOutlineClock className="h-8 w-8 text-amber-400" />

                                <span className="text-2xl font-bold text-amber-400">
                                    {item.year}
                                </span>
                            </div>

                            <h3 className="mt-4 text-2xl font-semibold">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-gray-400">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-white/10">
                <div className="mx-auto max-w-5xl px-6 py-24 text-center">
                    <h2 className="text-5xl font-bold">
                        Creating A Legacy Of Stories
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
                        We believe every extraordinary story has the power to
                        inspire, heal, and transform. Join us as we explore the
                        mysteries of life, destiny, and human connection
                        through cinematic storytelling.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black"
                        >
                            Collaborate With Us
                        </Link>

                        <Link
                            href="/projects"
                            className="rounded-xl border border-white/20 px-8 py-4"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>
            </section>

            <section className="border-y border-white/10 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5">
                <div className="mx-auto max-w-5xl px-6 py-28 text-center lg:px-8">
                    <span className="text-amber-400 uppercase tracking-[0.3em]">
                        Looking Ahead
                    </span>

                    <h2 className="mt-6 text-6xl font-bold">
                        The Future Of Soulfire Chronicles
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-gray-300">
                        Over the coming years, Soulfire Chronicles Production aims to
                        develop feature documentaries, international collaborations,
                        streaming platform releases, educational storytelling projects,
                        and cinematic experiences that inspire millions around the world.
                    </p>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-gray-400">
                        We envision a future where storytelling becomes a bridge between
                        cultures, generations, and perspectives—helping people better
                        understand themselves and each other.
                    </p>
                </div>
            </section>

        </main>
    );
}