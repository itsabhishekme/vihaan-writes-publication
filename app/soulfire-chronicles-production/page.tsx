import { Metadata } from "next";
import Link from "next/link";
import {
    HiOutlineFilm,
    HiOutlineSparkles,
    HiOutlineGlobeAlt,
    HiOutlineUserGroup,
    HiOutlineLightBulb,
    HiOutlineBookOpen,
} from "react-icons/hi";

export const metadata: Metadata = {
    title: "Soulfire Chronicles Production | Vihaan Writes",
    description:
        "Soulfire Chronicles Production explores destiny, spirituality, human connection, personal growth, extraordinary experiences, documentaries, films, interviews, and cinematic storytelling.",
};

const pillars = [
    {
        icon: HiOutlineFilm,
        title: "Documentaries",
        description:
            "Authentic stories that explore the depth of the human experience, uncovering extraordinary truths hidden within ordinary lives.",
    },
    {
        icon: HiOutlineUserGroup,
        title: "Interviews",
        description:
            "Meaningful conversations with individuals whose journeys reveal wisdom, transformation, resilience, and purpose.",
    },
    {
        icon: HiOutlineSparkles,
        title: "Spiritual Exploration",
        description:
            "Stories that investigate destiny, intuition, synchronicity, faith, divine timing, and life's deeper mysteries.",
    },
    {
        icon: HiOutlineGlobeAlt,
        title: "Human Stories",
        description:
            "Powerful narratives from around the world that highlight connection, compassion, growth, and shared humanity.",
    },
];

const themes = [
    "Destiny & Divine Timing",
    "Spiritual Awakening",
    "Human Connection",
    "Life-Changing Encounters",
    "Personal Transformation",
    "Purpose & Meaning",
    "Synchronicity",
    "Faith & Hope",
    "Extraordinary Experiences",
    "The Human Journey",
    "Legacy & Memory",
    "Stories That Inspire",
];

const productions = [
    {
        title: "Echoes of the River",
        description:
            "A documentary exploring generational memory, faith, and the ties that bind a riverside community.",
    },
    {
        title: "Crossroads: Stories of Change",
        description:
            "Intimate interviews with individuals who faced pivotal moments that reshaped their lives.",
    },
    {
        title: "Awakening Nights",
        description:
            "A cinematic short that follows an unexpected encounter leading to spiritual transformation.",
    },
];

const faqs = [
    {
        question: "What types of projects does Soulfire Chronicles Production create?",
        answer:
            "We focus on documentaries, films, interviews, and cinematic storytelling that explore destiny, spirituality, and human connection.",
    },
    {
        question: "How can I collaborate with your team?",
        answer:
            "You can reach out through our contact page to discuss story ideas, documentary concepts, and partnership opportunities.",
    },
    {
        question: "Do you accept submissions from independent storytellers?",
        answer:
            "Yes. We welcome authentic stories that align with our mission of preserving meaningful human experiences.",
    },
];

export default function SoulfireChroniclesProductionPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-blue-500/10" />

                <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                    <div className="max-w-4xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-400">
                            <HiOutlineFilm className="h-4 w-4" />
                            Cinematic Storytelling Studio
                        </div>

                        <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
                            Soulfire Chronicles
                            <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                                Production
                            </span>
                        </h1>

                        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                            Soulfire Chronicles Production was founded on the belief that
                            stories possess the power to transform lives. Through
                            documentaries, films, interviews, and cinematic storytelling, we
                            explore themes of destiny, spirituality, human connection,
                            personal growth, and extraordinary experiences.
                        </p>

                        <p className="max-w-3xl text-lg leading-relaxed text-gray-400">
                            Every story holds a spark capable of illuminating a path,
                            inspiring change, revealing truth, or helping someone understand
                            their own journey. Our mission is to capture these moments and
                            preserve them through meaningful visual storytelling.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 font-medium transition hover:opacity-90"
                            >
                                Collaborate With Us
                            </Link>

                            <Link
                                href="/the-human-archive"
                                className="rounded-xl border border-white/20 px-6 py-3 font-medium transition hover:bg-white/5"
                            >
                                Explore Stories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Soulfire Chronicles */}
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.03] to-transparent" />

                <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
                    <div className="mb-20 text-center">
                        <span className="mb-5 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
                            About Soulfire Chronicles
                        </span>

                        <h2 className="mb-8 text-5xl font-bold md:text-6xl">
                            Why Soulfire Chronicles Exists
                        </h2>

                        <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-400 md:text-xl">
                            At the heart of every human life exists a story worth remembering,
                            preserving, and sharing. Soulfire Chronicles Production was founded
                            to capture those stories and transform them into cinematic
                            experiences that inspire reflection, understanding, and connection.
                        </p>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <h3 className="mb-8 text-4xl font-bold">
                                The Power of Human Stories
                            </h3>

                            <p className="mb-6 leading-relaxed text-gray-300">
                                In a world overflowing with information, genuine human stories
                                remain one of the most powerful forces capable of creating
                                understanding and transformation. Stories allow us to step into
                                another person&apos;s life, see through their eyes, feel their
                                struggles, celebrate their victories, and discover pieces of
                                ourselves within their journey.
                            </p>

                            <p className="mb-6 leading-relaxed text-gray-300">
                                Soulfire Chronicles Production exists because we believe stories
                                are more than entertainment. They are vessels of wisdom,
                                memory, identity, healing, and connection. They preserve lessons
                                that might otherwise be forgotten and create bridges between
                                people from different cultures, generations, and experiences.
                            </p>

                            <p className="mb-6 leading-relaxed text-gray-300">
                                Every individual carries experiences capable of inspiring others.
                                Every challenge contains lessons worth sharing. Every moment of
                                courage, transformation, loss, discovery, or hope has the
                                potential to illuminate a path for someone else.
                            </p>

                            <p className="leading-relaxed text-gray-300">
                                Through cinematic storytelling, documentaries, interviews,
                                and visual narratives, we strive to preserve these moments and
                                ensure they continue inspiring future generations.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm">
                        <div className="mb-8 flex items-center gap-4">
                            <HiOutlineLightBulb className="h-10 w-10 text-amber-400" />
                            <h3 className="text-3xl font-bold">
                                Our Vision
                            </h3>
                        </div>

                        <p className="mb-8 leading-relaxed text-gray-300">
                            To become a global home for meaningful storytelling where
                            documentaries, films, interviews, and human experiences inspire
                            reflection, healing, understanding, and transformation.
                        </p>

                        <div className="border-t border-white/10 pt-8">
                            <div className="mb-5 flex items-center gap-4">
                                <HiOutlineBookOpen className="h-9 w-9 text-orange-400" />
                                <h3 className="text-3xl font-bold">
                                    Our Mission
                                </h3>
                            </div>

                            <p className="mb-6 leading-relaxed text-gray-300">
                                To preserve stories that matter, amplify voices that deserve
                                to be heard, and create cinematic experiences that leave a
                                lasting impact on the human spirit.
                            </p>

                            <p className="leading-relaxed text-gray-300">
                                We are committed to uncovering authentic stories that reveal
                                resilience, purpose, compassion, faith, courage, and the
                                extraordinary possibilities hidden within ordinary lives.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mt-28">
                    <div className="mb-14 text-center">
                        <h3 className="mb-5 text-4xl font-bold">
                            Our Core Values
                        </h3>

                        <p className="mx-auto max-w-3xl text-gray-400">
                            Every production, interview, documentary, and project is guided
                            by principles that define who we are and why we create.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                            <h4 className="mb-4 text-2xl font-semibold text-orange-400">
                                Authenticity
                            </h4>

                            <p className="text-gray-300">
                                Stories deserve honesty, integrity, and emotional truth.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                            <h4 className="mb-4 text-2xl font-semibold text-orange-400">
                                Connection
                            </h4>

                            <p className="text-gray-300">
                                Storytelling creates meaningful bridges between people.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                            <h4 className="mb-4 text-2xl font-semibold text-orange-400">
                                Transformation
                            </h4>

                            <p className="text-gray-300">
                                Powerful stories inspire growth, reflection, and change.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                            <h4 className="mb-4 text-2xl font-semibold text-orange-400">
                                Legacy
                            </h4>

                            <p className="text-gray-300">
                                Preserving wisdom today benefits future generations tomorrow.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Storytelling Philosophy */}
                <div className="mt-28 grid gap-12 lg:grid-cols-2">
                    <div>
                        <h3 className="mb-8 text-4xl font-bold">
                            Our Storytelling Philosophy
                        </h3>

                        <p className="mb-6 leading-relaxed text-gray-300">
                            We believe every story contains layers beyond what is visible on
                            the surface. Behind every achievement lies sacrifice. Behind
                            every challenge lies resilience. Behind every encounter lies the
                            possibility of transformation.
                        </p>

                        <p className="mb-6 leading-relaxed text-gray-300">
                            Our role is not merely to document events but to uncover the
                            deeper truths that give those events meaning. We seek to reveal
                            the emotions, lessons, and human experiences that connect people
                            across cultures, generations, and backgrounds.
                        </p>

                        <p className="leading-relaxed text-gray-300">
                            Through cinematic visuals, authentic interviews, thoughtful
                            narratives, and emotional storytelling, we create experiences
                            that resonate long after the screen fades to black and continue
                            inspiring reflection, empathy, and understanding.
                        </p>
                    </div>

                    <div className="rounded-[32px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-red-500/5 p-10">
                        <h3 className="mb-8 text-4xl font-bold">
                            Looking Forward
                        </h3>

                        <p className="mb-6 leading-relaxed text-gray-300">
                            Soulfire Chronicles Production is more than a studio. It is a
                            growing archive of human experiences, a platform for meaningful
                            voices, and a long-term commitment to preserving stories that
                            deserve to be remembered.
                        </p>

                        <p className="mb-6 leading-relaxed text-gray-300">
                            As we continue to grow, we aim to expand our documentaries,
                            interviews, films, educational projects, and global storytelling
                            initiatives while building a lasting collection of stories that
                            inspire future generations.
                        </p>

                        <p className="leading-relaxed text-gray-300">
                            Our vision is simple: create stories that matter, preserve them
                            with care, and share them with the world.
                        </p>
                    </div>
                </div>

                {/* What We Create */}
                <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_60%)]" />

                    <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
                        <div className="mx-auto mb-20 max-w-4xl text-center">
                            <span className="mb-5 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
                                Creative Productions
                            </span>

                            <h2 className="mb-8 text-5xl font-bold md:text-6xl">
                                What We Create
                            </h2>

                            <p className="text-lg leading-relaxed text-gray-400 md:text-xl">
                                Soulfire Chronicles Production creates cinematic experiences that
                                preserve human stories, explore life&apos;s deeper questions, and inspire
                                meaningful reflection. Every project is designed to connect people
                                through authentic storytelling and unforgettable visual narratives.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {pillars.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-10 transition-all duration-500 hover:border-orange-500/30 hover:bg-white/[0.05]"
                                    >
                                        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20">
                                            <Icon className="h-10 w-10 text-orange-400" />
                                        </div>

                                        <h3 className="mb-5 text-3xl font-bold">
                                            {item.title}
                                        </h3>

                                        <p className="mb-6 leading-relaxed text-gray-300">
                                            {item.description}
                                        </p>

                                        <p className="leading-relaxed text-gray-400">
                                            Through meticulous research, thoughtful storytelling,
                                            cinematic visuals, and emotional authenticity, we
                                            transform ideas and experiences into compelling
                                            narratives that resonate with audiences long after
                                            the credits roll.
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Extended Description */}
                <div className="mt-28 grid gap-12 lg:grid-cols-2">
                    <div>
                        <h3 className="mb-8 text-4xl font-bold">
                            Stories Beyond Entertainment
                        </h3>

                        <p className="mb-6 leading-relaxed text-gray-300">
                            We believe storytelling is one of humanity&apos;s oldest and most powerful
                            tools. Stories preserve memories, communicate wisdom, inspire
                            transformation, and create connections that transcend generations.
                        </p>

                        <p className="mb-6 leading-relaxed text-gray-300">
                            Our productions are created with the intention of leaving a lasting
                            impact on audiences by exploring themes that matter: purpose,
                            resilience, spirituality, destiny, hope, human connection, and the
                            extraordinary moments that shape our lives.
                        </p>

                        <p className="leading-relaxed text-gray-300">
                            Every documentary, interview, and cinematic project serves as an
                            invitation to reflect on what it means to be human.
                        </p>
                    </div>

                    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">
                        <h3 className="mb-8 text-4xl font-bold">
                            Production Philosophy
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="mb-2 text-xl font-semibold text-orange-400">
                                    Authenticity First
                                </h4>

                                <p className="text-gray-300">
                                    Every story deserves honesty, integrity, and respect.
                                </p>
                            </div>

                            <div>
                                <h4 className="mb-2 text-xl font-semibold text-orange-400">
                                    Human-Centered Narratives
                                </h4>

                                <p className="text-gray-300">
                                    People remain at the heart of every project we create.
                                </p>
                            </div>

                            <div>
                                <h4 className="mb-2 text-xl font-semibold text-orange-400">
                                    Cinematic Excellence
                                </h4>

                                <p className="text-gray-300">
                                    Powerful visuals and emotional storytelling work together to
                                    create unforgettable experiences.
                                </p>
                            </div>

                            <div>
                                <h4 className="mb-2 text-xl font-semibold text-orange-400">
                                    Lasting Impact
                                </h4>

                                <p className="text-gray-300">
                                    We strive to create stories that continue inspiring audiences long
                                    after they have been seen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Production Types */}
                <div className="mt-28">
                    <div className="mb-14 text-center">
                        <h3 className="mb-5 text-4xl font-bold">
                            Featured Production Categories
                        </h3>

                        <p className="mx-auto max-w-3xl text-gray-400">
                            Our creative work spans multiple formats, each designed to tell
                            powerful stories in unique and engaging ways.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-3xl border border-white/10 p-8">
                            <h4 className="mb-4 text-2xl font-semibold">
                                Documentary Films
                            </h4>

                            <p className="text-gray-300">
                                Exploring extraordinary journeys, transformative experiences,
                                spirituality, resilience, and the deeper questions of life.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 p-8">
                            <h4 className="mb-4 text-2xl font-semibold">
                                Human Stories
                            </h4>

                            <p className="text-gray-300">
                                Authentic narratives capturing wisdom, memories, struggles,
                                triumphs, and life-changing moments.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 p-8">
                            <h4 className="mb-4 text-2xl font-semibold">
                                Visual Essays
                            </h4>

                            <p className="text-gray-300">
                                Thought-provoking explorations of purpose, destiny, identity,
                                spirituality, and human consciousness.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 p-8">
                            <h4 className="mb-4 text-2xl font-semibold">
                                Cinematic Interviews
                            </h4>

                            <p className="text-gray-300">
                                Meaningful conversations designed to preserve experiences and
                                insights for future generations.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 p-8">
                            <h4 className="mb-4 text-2xl font-semibold">
                                Legacy Projects
                            </h4>

                            <p className="text-gray-300">
                                Preserving personal histories, family stories, and life lessons
                                through visual storytelling.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 p-8">
                            <h4 className="mb-4 text-2xl font-semibold">
                                Future Originals
                            </h4>

                            <p className="text-gray-300">
                                Ambitious original productions exploring extraordinary stories from
                                around the world.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Themes */}
                <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-4xl font-bold">
                            Themes We Explore
                        </h2>

                        <p className="mx-auto max-w-3xl text-gray-400">
                            Our stories revolve around universal questions, transformative
                            experiences, and the deeper mysteries of human existence.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {themes.map((theme) => (
                            <div
                                key={theme}
                                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300"
                            >
                                {theme}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="border-y border-white/10 bg-black">
                    <div className="mx-auto max-w-7xl px-6 py-24">
                        <div className="mb-14 text-center">
                            <h2 className="text-5xl font-bold">
                                Featured Productions
                            </h2>

                            <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
                                Stories brought to life through cinematic vision,
                                emotional depth, and meaningful storytelling.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {productions.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-8"
                                >
                                    <h3 className="mb-4 text-2xl font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-b from-black to-orange-950/20">
                    <div className="mx-auto max-w-6xl px-6 py-24">
                        <div className="text-center">
                            <h2 className="text-5xl font-bold mb-10">
                                The Soulfire Philosophy
                            </h2>

                            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                We believe stories are more than entertainment.
                                They are vessels of memory, wisdom, healing,
                                identity, and transformation. Every life contains
                                moments capable of inspiring countless others.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="border-t border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black">
                    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
                        <div className="mb-16 text-center">
                            <span className="mb-4 inline-block rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
                                Questions & Answers
                            </span>

                            <h2 className="mb-6 text-4xl font-bold md:text-6xl">
                                Frequently Asked Questions
                            </h2>

                            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
                                Learn more about Soulfire Chronicles Production, our mission,
                                storytelling philosophy, documentary projects, interviews,
                                collaborations, and future productions.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {faqs.map((faq, index) => (
                                <div
                                    key={faq.question}
                                    className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30 hover:bg-white/[0.05]"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 font-bold text-white">
                                            {String(index + 1).padStart(2, "0")}
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="mb-4 text-2xl font-semibold text-white">
                                                {faq.question}
                                            </h3>

                                            <p className="leading-relaxed text-gray-300">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional FAQ Information */}
                        <div className="mt-20 grid gap-8 md:grid-cols-3">
                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                                <h3 className="mb-4 text-2xl font-semibold text-orange-400">
                                    Documentary Projects
                                </h3>

                                <p className="leading-relaxed text-gray-300">
                                    Our documentary productions focus on authentic human experiences,
                                    personal transformation, spirituality, resilience, destiny,
                                    meaningful encounters, and stories that inspire reflection.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                                <h3 className="mb-4 text-2xl font-semibold text-orange-400">
                                    Collaborations
                                </h3>

                                <p className="leading-relaxed text-gray-300">
                                    We welcome collaborations with storytellers, filmmakers,
                                    writers, researchers, creatives, organizations, and individuals
                                    whose stories align with our mission and vision.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                                <h3 className="mb-4 text-2xl font-semibold text-orange-400">
                                    Global Vision
                                </h3>

                                <p className="leading-relaxed text-gray-300">
                                    Soulfire Chronicles Production aims to become a global archive
                                    of transformative stories that connect humanity through shared
                                    experiences, wisdom, compassion, and understanding.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-24 rounded-[32px] border border-orange-500/20 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-amber-500/10 p-12 text-center">
                            <h3 className="mb-6 text-4xl font-bold">
                                Have a Story Worth Sharing?
                            </h3>

                            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
                                Every life contains moments of courage, transformation,
                                discovery, love, loss, hope, and meaning. If you have a story
                                that could inspire others, we would love to hear from you.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
                                >
                                    Contact Us
                                </Link>

                                <Link
                                    href="/the-human-archive"
                                    className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/5"
                                >
                                    Explore Human Stories
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </section >
        </main >
    );
}