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

            {/* About Soulfire Chronicles Production - SEO Optimized */}
            <section
                id="about"
                aria-labelledby="about-heading"
                className="relative overflow-hidden bg-black"
            >
                {/* Background Effects */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                    {/* Section Header */}
                    <div className="mx-auto mb-20 max-w-4xl text-center">
                        <span className="mb-4 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium tracking-wide text-orange-400 uppercase">
                            About Soulfire Chronicles Production
                        </span>

                        <h2
                            id="about-heading"
                            className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                        >
                            Crafting Powerful Stories Through
                            <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                                Film, Documentary & Cinematic Storytelling
                            </span>
                        </h2>

                        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
                            Soulfire Chronicles Production is a creative film production
                            company dedicated to producing inspiring documentaries,
                            cinematic films, interviews, and visual storytelling projects
                            that explore spirituality, personal growth, human connection,
                            destiny, and transformative life experiences.
                        </p>
                    </div>

                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* Left Content */}
                        <div>
                            <div className="mb-8">
                                <span className="text-sm font-semibold tracking-widest text-orange-400 uppercase">
                                    Our Story
                                </span>

                                <h3 className="mt-3 mb-6 text-4xl font-bold text-white">
                                    More Than Just A Production House
                                </h3>
                            </div>

                            <p className="mb-6 text-lg leading-relaxed text-gray-300">
                                At Soulfire Chronicles Production, we believe that every
                                story carries the potential to inspire, heal, and transform
                                lives. Founded with a passion for authentic storytelling,
                                our production house creates meaningful visual experiences
                                that resonate deeply with audiences around the world.
                            </p>

                            <p className="mb-6 leading-relaxed text-gray-400">
                                Through professionally crafted documentaries, cinematic
                                films, interviews, digital media projects, and creative
                                productions, we uncover extraordinary narratives hidden
                                within everyday life. Our stories explore universal themes
                                such as spirituality, self-discovery, destiny, personal
                                transformation, resilience, and the profound connections
                                that unite humanity.
                            </p>

                            <p className="mb-6 leading-relaxed text-gray-400">
                                Every project we undertake is driven by a commitment to
                                excellence, creativity, authenticity, and emotional impact.
                                We combine cinematic visuals, compelling narratives, and
                                thoughtful production techniques to create films that leave
                                lasting impressions.
                            </p>

                            <p className="leading-relaxed text-gray-400">
                                Our goal extends beyond entertainment. We strive to spark
                                meaningful conversations, encourage reflection, inspire
                                positive change, and help audiences connect with something
                                greater than themselves through the power of storytelling.
                            </p>

                            {/* Statistics */}
                            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
                                    <h4 className="text-3xl font-bold text-white">50+</h4>
                                    <p className="mt-2 text-sm text-gray-400">
                                        Creative Projects
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
                                    <h4 className="text-3xl font-bold text-white">10+</h4>
                                    <p className="mt-2 text-sm text-gray-400">
                                        Years Experience
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
                                    <h4 className="text-3xl font-bold text-white">100%</h4>
                                    <p className="mt-2 text-sm text-gray-400">
                                        Story Driven
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
                                    <h4 className="text-3xl font-bold text-white">Global</h4>
                                    <p className="mt-2 text-sm text-gray-400">
                                        Audience Reach
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="space-y-8">
                            {/* Mission Card */}
                            <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:border-orange-500/30 hover:bg-white/10">
                                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-orange-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>

                                <h3 className="mb-5 text-3xl font-bold text-white">
                                    Our Mission
                                </h3>

                                <p className="leading-relaxed text-gray-300">
                                    Our mission is to create impactful films,
                                    documentaries, and visual stories that inspire
                                    reflection, awaken curiosity, encourage personal
                                    growth, and celebrate the extraordinary experiences
                                    found within everyday life. We aim to connect audiences
                                    through meaningful storytelling that transcends cultural
                                    and geographical boundaries.
                                </p>
                            </div>

                            {/* Vision Card */}
                            <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:border-red-500/30 hover:bg-white/10">
                                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-red-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 10l4.55-2.275A1 1 0 0121 8.618v6.764a1 1 0 01-1.45.893L15 14m-6 2h6a2 2 0 002-2V10a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm0 0l-4.55 2.275A1 1 0 013 17.382V6.618a1 1 0 011.45-.893L9 8"
                                        />
                                    </svg>
                                </div>

                                <h3 className="mb-5 text-3xl font-bold text-white">
                                    Our Vision
                                </h3>

                                <p className="leading-relaxed text-gray-300">
                                    To become a globally recognized film production and
                                    storytelling brand known for creating transformative
                                    cinematic experiences. We envision a future where our
                                    documentaries, films, and creative productions inspire
                                    millions of people worldwide to dream bigger, think
                                    deeper, and embrace meaningful human connections.
                                </p>
                            </div>

                            {/* Values Card */}
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">
                                <h3 className="mb-8 text-3xl font-bold text-white">
                                    Core Values
                                </h3>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    {[
                                        "Authentic Storytelling",
                                        "Creative Excellence",
                                        "Human Connection",
                                        "Purpose-Driven Content",
                                        "Innovation & Vision",
                                        "Lasting Impact",
                                    ].map((value) => (
                                        <div
                                            key={value}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                                            <span className="text-gray-300">
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO Rich Content */}
                    <div className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-r from-orange-500/10 via-red-500/5 to-orange-500/10 p-12 text-center">
                        <h3 className="mb-6 text-3xl font-bold text-white">
                            Why Choose Soulfire Chronicles Production?
                        </h3>

                        <p className="mx-auto max-w-4xl leading-relaxed text-gray-300">
                            Whether producing documentaries, cinematic films, branded
                            storytelling content, interviews, or creative media projects,
                            Soulfire Chronicles Production combines artistic vision with
                            professional filmmaking expertise. Our dedication to powerful
                            narratives, cinematic excellence, and authentic human stories
                            helps create content that resonates deeply with audiences while
                            delivering meaningful and memorable experiences.
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
                                <iframe
                                    className="aspect-video w-full"
                                    src="https://www.youtube.com/embed/f9XxlIRBO-E"
                                    title="Stories That Illuminate Minds And Awaken Souls"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
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

            {/* Extended Documentary Description - SEO Optimized */}
            <section
                id="about-documentary"
                aria-labelledby="documentary-heading"
                className="relative mx-auto mt-24 max-w-7xl px-6 lg:px-8"
            >
                {/* Background Decoration */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
                    <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12 lg:p-16">
                    {/* Header */}
                    <div className="mx-auto mb-16 max-w-4xl text-center">
                        <span className="mb-4 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-medium uppercase tracking-widest text-orange-400">
                            Feature Documentary Film
                        </span>

                        <h2
                            id="documentary-heading"
                            className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
                        >
                            About
                            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
                                Before Her Name Existed
                            </span>
                        </h2>

                        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
                            An inspiring documentary exploring destiny, soul connections,
                            synchronicity, love, intuition, and the mysterious experiences
                            that lead people toward life-changing relationships long before
                            they officially meet.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid gap-16 lg:grid-cols-2">
                        {/* Left Side */}
                        <div>
                            <h3 className="mb-8 text-3xl font-bold text-white">
                                A Documentary About Love, Destiny & Human Connection
                            </h3>

                            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                                <p>
                                    <strong className="font-semibold text-white">
                                        Before Her Name Existed
                                    </strong>{" "}
                                    is a thought-provoking documentary that examines the
                                    fascinating moments people experience before meeting
                                    someone who ultimately changes their lives forever.
                                    Through real stories, personal testimonies, and
                                    reflective insights, the film explores the possibility
                                    that certain connections may begin long before two
                                    individuals ever cross paths.
                                </p>

                                <p>
                                    Across cultures, generations, and belief systems,
                                    countless individuals have described recurring dreams,
                                    unexplainable feelings, powerful intuitions, meaningful
                                    coincidences, and moments of profound recognition that
                                    seemed to foreshadow future relationships. These
                                    experiences often leave people questioning whether life
                                    unfolds according to chance alone or whether deeper
                                    forces may be at work.
                                </p>

                                <p>
                                    By blending personal narratives with broader discussions
                                    surrounding psychology, spirituality, consciousness,
                                    destiny, and emotional connection, the documentary
                                    creates an engaging exploration of one of humanity's
                                    most enduring questions: Are some people meant to meet?
                                </p>

                                <p>
                                    Rather than offering definitive answers, the film
                                    encourages viewers to reflect on their own experiences
                                    and consider how seemingly ordinary moments can carry
                                    extraordinary significance when viewed through the lens
                                    of time.
                                </p>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-md">
                            <h3 className="mb-8 text-3xl font-bold text-white">
                                Key Themes Explored
                            </h3>

                            <div className="space-y-5">
                                {[
                                    {
                                        title: "Destiny & Fate",
                                        description:
                                            "Examining whether life events and relationships may be guided by forces beyond coincidence.",
                                    },
                                    {
                                        title: "Recurring Dreams",
                                        description:
                                            "Stories of individuals who experienced vivid dreams that later connected to real-life encounters.",
                                    },
                                    {
                                        title: "Synchronicity",
                                        description:
                                            "Exploring meaningful coincidences and unexpected events that appear connected in profound ways.",
                                    },
                                    {
                                        title: "Soul Connections",
                                        description:
                                            "Investigating the deep emotional bonds people describe when meeting certain individuals.",
                                    },
                                    {
                                        title: "Intuition & Recognition",
                                        description:
                                            "Understanding moments when people feel they somehow know someone before formally meeting them.",
                                    },
                                    {
                                        title: "Human Experience",
                                        description:
                                            "Celebrating the universal search for connection, meaning, purpose, and belonging.",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="rounded-2xl border border-white/5 bg-white/5 p-5"
                                    >
                                        <h4 className="mb-2 text-xl font-semibold text-white">
                                            {item.title}
                                        </h4>
                                        <p className="leading-relaxed text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Extended Description */}
                    <div className="mt-20">
                        <div className="rounded-3xl border border-white/10 bg-black/20 p-8 md:p-12">
                            <h3 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
                                The Journey Behind The Story
                            </h3>

                            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                                <p>
                                    From recurring dreams and unexpected encounters to
                                    moments of unmistakable recognition,{" "}
                                    <strong className="text-white">
                                        Before Her Name Existed
                                    </strong>{" "}
                                    invites audiences into a deeply personal and universal
                                    exploration of connection. The documentary shines a
                                    light on experiences that many people quietly carry with
                                    them but rarely discuss openly.
                                </p>

                                <p>
                                    Some describe seeing a future partner in dreams years
                                    before meeting them. Others recall strange coincidences,
                                    repeated symbols, familiar feelings, or powerful
                                    emotional moments that only made sense in hindsight.
                                    These stories raise compelling questions about memory,
                                    intuition, timing, and the nature of human relationships.
                                </p>

                                <p>
                                    Through carefully crafted storytelling and cinematic
                                    presentation, the film encourages viewers to examine the
                                    invisible threads that appear to connect life events
                                    across time. It explores whether these experiences can
                                    be explained through psychology and subconscious
                                    processing, or whether they point toward something more
                                    mysterious and profound.
                                </p>

                                <p>
                                    The documentary does not seek to persuade audiences
                                    toward a particular belief system. Instead, it creates a
                                    space where curiosity, reflection, and open-minded
                                    exploration can flourish. Viewers are invited to engage
                                    with the stories from their own perspectives and draw
                                    their own conclusions.
                                </p>

                                <p>
                                    Whether viewed through the lens of psychology,
                                    spirituality, destiny, consciousness studies, personal
                                    growth, or lived experience, the stories featured in
                                    this documentary challenge conventional assumptions
                                    about love, timing, fate, and human connection.
                                </p>

                                <p>
                                    At its heart,{" "}
                                    <strong className="text-white">
                                        Before Her Name Existed
                                    </strong>{" "}
                                    is a film about possibility—the possibility that certain
                                    encounters may hold deeper meaning, that intuition may
                                    sometimes reveal more than logic, and that the human
                                    heart may recognize a story long before it learns the
                                    name of the person within it.
                                </p>

                                <p>
                                    This documentary is created for anyone who has ever
                                    experienced an unexplained connection, questioned the
                                    role of fate in their life, reflected on meaningful
                                    coincidences, or wondered whether some relationships are
                                    destined to emerge exactly when they are meant to.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SEO Section */}
                    <div className="mt-20 grid gap-8 md:grid-cols-3">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                            <h4 className="mb-3 text-3xl font-bold text-white">
                                Documentary
                            </h4>
                            <p className="leading-relaxed text-gray-400">
                                Cinematic storytelling that explores real-life experiences,
                                emotional journeys, and profound human connections.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                            <h4 className="mb-3 text-3xl font-bold text-white">
                                Inspiration
                            </h4>
                            <p className="leading-relaxed text-gray-400">
                                Encouraging viewers to reflect on their own experiences with
                                destiny, intuition, synchronicity, and meaningful
                                relationships.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                            <h4 className="mb-3 text-3xl font-bold text-white">
                                Human Stories
                            </h4>
                            <p className="leading-relaxed text-gray-400">
                                Authentic narratives that explore the extraordinary moments
                                hidden within everyday life and personal experience.
                            </p>
                        </div>
                    </div>

                    {/* SEO Keywords Content */}
                    <div className="mt-20 rounded-3xl border border-orange-500/10 bg-gradient-to-r from-orange-500/10 via-transparent to-red-500/10 p-10 text-center">
                        <h3 className="mb-6 text-3xl font-bold text-white">
                            Exploring The Mystery Of Connection
                        </h3>

                        <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300">
                            Before Her Name Existed is a documentary film about destiny,
                            soulmates, intuition, synchronicity, meaningful coincidences,
                            spiritual connection, personal transformation, consciousness,
                            love, relationships, human psychology, emotional recognition,
                            and the timeless search for meaning in our most important life
                            encounters. Through compelling storytelling and cinematic
                            filmmaking, the documentary invites audiences to reflect on the
                            extraordinary possibilities hidden within ordinary moments.
                        </p>
                    </div>
                </div>
            </section>

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