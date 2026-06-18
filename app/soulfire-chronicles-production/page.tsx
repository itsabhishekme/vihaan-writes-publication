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
                    {/* Heading */}
                    <div className="mx-auto mb-20 max-w-4xl text-center">
                        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm tracking-widest text-amber-300 uppercase">
                            Official Trailer
                        </span>

                        <h2 className="mt-8 text-5xl font-bold md:text-6xl lg:text-7xl">
                            Before Her Name Existed
                        </h2>

                        <p className="mt-6 text-2xl italic text-gray-400">
                            “I fell in love with the story long before I ever knew the
                            character.”
                        </p>

                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-300">
                            A cinematic exploration of destiny, intuition, synchronicity,
                            and the mysterious moments that seem to guide two lives toward
                            one another long before they ever meet.
                        </p>
                    </div>

                    {/* Main Content */}
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

                            {/* Trailer Stats */}
                            <div className="mt-8 grid grid-cols-3 gap-4">
                                <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
                                    <div className="text-3xl font-bold text-amber-400">
                                        60+
                                    </div>
                                    <div className="mt-2 text-sm text-gray-400">
                                        Interviews
                                    </div>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
                                    <div className="text-3xl font-bold text-amber-400">
                                        12
                                    </div>
                                    <div className="mt-2 text-sm text-gray-400">
                                        Countries
                                    </div>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
                                    <div className="text-3xl font-bold text-amber-400">
                                        1
                                    </div>
                                    <div className="mt-2 text-sm text-gray-400">
                                        Universal Question
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Documentary Content */}
                        <div>
                            <h3 className="text-4xl font-bold">
                                What If Love Starts Before Introductions?
                            </h3>

                            <p className="mt-6 leading-relaxed text-gray-300">
                                Before Her Name Existed explores one of the most profound
                                questions ever asked about human connection:
                            </p>

                            <blockquote className="mt-8 border-l-4 border-amber-400 pl-6 text-2xl font-semibold italic text-white">
                                Can love begin before two people meet?
                            </blockquote>

                            <p className="mt-8 leading-relaxed text-gray-400">
                                Around the world, people describe extraordinary experiences
                                that seem impossible to explain. Dreams of unfamiliar faces,
                                recurring signs, inexplicable feelings of certainty,
                                strange coincidences, and moments of intuition that later
                                reveal astonishing meaning.
                            </p>

                            <p className="mt-6 leading-relaxed text-gray-400">
                                These experiences often occur months or even years before
                                they encounter the person who will become their life
                                partner. Are these events merely coincidence—or something
                                deeper woven into the fabric of human experience?
                            </p>

                            <p className="mt-6 leading-relaxed text-gray-400">
                                Through compelling real-life stories, expert commentary,
                                psychological insights, and spiritual perspectives, the
                                documentary invites audiences to examine the possibility
                                that some connections begin long before names are known.
                            </p>
                        </div>
                    </div>

                    {/* Themes */}
                    <div className="mt-24">
                        <h3 className="mb-10 text-center text-4xl font-bold">
                            Themes Explored
                        </h3>

                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {[
                                "Love & Destiny",
                                "Soul Connections",
                                "Synchronicity",
                                "Intuition & Dreams",
                                "Human Connection",
                                "Fate vs Free Will",
                                "Spiritual Experiences",
                                "The Psychology of Attraction",
                                "Life-Changing Coincidences",
                            ].map((theme) => (
                                <div
                                    key={theme}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-amber-400/30 hover:bg-white/10"
                                >
                                    <h4 className="text-lg font-semibold text-amber-400">
                                        {theme}
                                    </h4>

                                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                                        Discover how this theme influences relationships,
                                        identity, personal growth, and the mysterious paths
                                        that connect human lives.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Documentary Synopsis */}
                    <div className="mt-24 rounded-3xl border border-white/10 bg-white/5 p-10 md:p-14">
                        <h3 className="text-4xl font-bold">Synopsis</h3>

                        <p className="mt-6 text-lg leading-relaxed text-gray-300">
                            Before Her Name Existed follows an emotional journey through
                            stories of people who experienced meaningful signs before
                            meeting their future partners. The film combines deeply
                            personal testimonies with expert perspectives to explore
                            whether human connection extends beyond ordinary perception.
                        </p>

                        <p className="mt-6 text-lg leading-relaxed text-gray-400">
                            Moving between science, spirituality, memory, and emotion,
                            the documentary challenges audiences to reconsider how
                            relationships begin and what unseen forces may shape our lives.
                        </p>
                    </div>

                    {/* Quote */}
                    <div className="mt-24 text-center">
                        <blockquote className="mx-auto max-w-4xl text-3xl font-light italic leading-relaxed text-white md:text-5xl">
                            “Some people enter our story long before they enter our lives.”
                        </blockquote>

                        <p className="mt-6 text-gray-500">
                            — Before Her Name Existed
                        </p>
                    </div>

                    {/* Audience Takeaway */}
                    <div className="mt-24 grid gap-8 md:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                            <h4 className="text-xl font-bold text-amber-400">
                                Reflect
                            </h4>

                            <p className="mt-4 text-gray-400">
                                Revisit moments from your own life that may have carried
                                meaning you did not recognize at the time.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                            <h4 className="text-xl font-bold text-amber-400">
                                Question
                            </h4>

                            <p className="mt-4 text-gray-400">
                                Explore whether coincidence alone can explain some of
                                life&#39;s most extraordinary experiences.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                            <h4 className="text-xl font-bold text-amber-400">
                                Connect
                            </h4>

                            <p className="mt-4 text-gray-400">
                                Discover a deeper appreciation for the invisible threads
                                that connect human lives across time and distance.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-24 rounded-3xl border border-amber-400/20 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 p-12 text-center">
                        <h3 className="text-4xl font-bold">
                            Watch the Journey Begin
                        </h3>

                        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
                            Experience a documentary that explores love, destiny,
                            intuition, and the timeless mystery of human connection.
                        </p>

                        <button className="mt-8 rounded-full bg-amber-400 px-8 py-4 font-semibold text-black transition hover:bg-amber-300">
                            Watch Trailer
                        </button>
                    </div>
                </div>
            </section>

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

            {/* Production Types */}
            < section className="mx-auto max-w-7xl px-6 py-24 lg:px-8" >
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
            </section >

            {/* Values */}
            < section className="border-y border-white/10 bg-white/[0.03]" >
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
            </section >

            {/* Timeline */}
            < section className="mx-auto max-w-6xl px-6 py-24 lg:px-8" >
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
            </section >

            {/* CTA */}
            < section className="border-t border-white/10" >
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
            </section >

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

        </main >
    );
}