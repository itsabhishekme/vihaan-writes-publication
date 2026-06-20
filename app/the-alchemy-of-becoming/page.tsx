import Link from "next/link";
import {
    HiOutlineFire,
    HiOutlineLightBulb,
    HiOutlineHeart,
    HiOutlineAcademicCap,
    HiOutlineArrowRight,
} from "react-icons/hi";

const themes = [
    {
        icon: HiOutlineFire,
        title: "Transformation",
        description:
            "The moments that reshape identity and redefine the course of a life.",
    },
    {
        icon: HiOutlineLightBulb,
        title: "Self-Discovery",
        description:
            "Finding meaning, purpose, and clarity through experience and reflection.",
    },
    {
        icon: HiOutlineHeart,
        title: "Resilience",
        description:
            "Stories of perseverance, healing, courage, and growth after adversity.",
    },
    {
        icon: HiOutlineAcademicCap,
        title: "Wisdom",
        description:
            "Lessons gathered through struggle, reflection, and lived experience.",
    },
];

const featuredJourneys = [
    {
        title: "The Courage to Begin Again",
        category: "Reinvention",
    },
    {
        title: "Who I Became After Losing Everything",
        category: "Transformation",
    },
    {
        title: "The Years That Changed Me",
        category: "Personal Growth",
    },
    {
        title: "Finding Purpose Beyond Success",
        category: "Self-Discovery",
    },
];

export default function TheAlchemyOfBecomingPage() {
    return (
        <main className="bg-black text-white">
            {/* Hero */}

            <section className="relative min-h-screen overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('/images/the-alchemy-of-becoming-hero.jpg')",
                    }}
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-black/75" />

                {/* Gradient Overlays */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.20),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.10),transparent_45%)]" />

                <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
                    {/* Pillar Label */}
                    <span className="mb-8 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-6 py-3 text-xs uppercase tracking-[0.4em] text-emerald-400 backdrop-blur-sm">
                        Where growth begins after every ending
                    </span>

                    {/* Heading */}
                    <h1 className="max-w-6xl text-6xl font-light leading-none md:text-8xl xl:text-9xl">
                        The Alchemy
                        <span className="mt-3 block bg-gradient-to-r from-emerald-300 via-green-400 to-teal-300 bg-clip-text text-transparent">
                            of Becoming
                        </span>
                    </h1>

                    {/* Hero Description */}
                    <p className="mt-10 max-w-4xl text-lg leading-relaxed text-zinc-200 md:text-2xl">
                        Stories of transformation, reinvention, resilience, healing,
                        self-discovery, purpose, and the courageous evolution of the human
                        spirit. Exploring the defining moments that shape identity, reveal
                        meaning, and transform ordinary lives into extraordinary journeys.
                    </p>

                    <p className="mt-8 max-w-5xl text-lg leading-relaxed text-zinc-300">
                        The Alchemy of Becoming is a living archive dedicated to documenting
                        personal growth, emotional resilience, life-changing experiences,
                        wisdom, and human transformation. Through authentic stories and
                        profound reflections, we preserve the lessons that emerge from
                        adversity and celebrate the remarkable power of becoming.
                    </p>

                    {/* CTA */}
                    <div className="mt-14 flex flex-wrap justify-center gap-5">
                        <Link
                            href="#journeys"
                            className="rounded-full bg-emerald-500 px-10 py-5 text-lg font-medium text-black transition duration-300 hover:scale-105"
                        >
                            Explore Stories
                        </Link>

                        <Link
                            href="/submit-story"
                            className="rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg text-white backdrop-blur-sm transition duration-300 hover:border-emerald-500/40"
                        >
                            Share Your Story
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-24 grid w-full max-w-6xl gap-6 md:grid-cols-4">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                            <h3 className="text-4xl font-light text-emerald-400">
                                Growth
                            </h3>

                            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-400">
                                Personal Evolution
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                            <h3 className="text-4xl font-light text-emerald-400">
                                Purpose
                            </h3>

                            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-400">
                                Meaning &amp; Direction
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                            <h3 className="text-4xl font-light text-emerald-400">
                                Wisdom
                            </h3>

                            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-400">
                                Lessons Learned
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                            <h3 className="text-4xl font-light text-emerald-400">
                                Legacy
                            </h3>

                            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-400">
                                Stories Preserved
                            </p>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-24 max-w-5xl">
                        <blockquote className="text-3xl font-light italic leading-relaxed text-white md:text-5xl">
                            “Transformation is not becoming someone else.
                            It is becoming who you were always meant to be.”
                        </blockquote>

                        <p className="mt-8 text-sm uppercase tracking-[0.35em] text-emerald-400">
                            The Alchemy of Becoming
                        </p>
                    </div>

                    {/* SEO Content */}
                    <div className="mx-auto mt-24 max-w-5xl border-t border-white/10 pt-16">
                        <h2 className="text-3xl font-light text-white md:text-5xl">
                            The Living Archive of Human Transformation
                        </h2>

                        <p className="mt-8 text-lg leading-relaxed text-zinc-300">
                            This project explores transformation, resilience, healing,
                            self-discovery, purpose, personal development, and the evolution
                            of the human spirit. Through stories of overcoming adversity,
                            rebuilding after loss, finding meaning, and awakening inner
                            strength, The Alchemy of Becoming chronicles humanity&apos;s enduring
                            journey toward growth, wisdom, and becoming.
                        </p>

                        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                            Every individual experiences defining moments that reshape identity.
                            By preserving these journeys, we create a lasting collection of
                            inspiration, insight, and life lessons that empower future
                            generations to embrace their own path of becoming.
                        </p>
                    </div>


                </div>
            </section>

            {/* Intro */}
            <section className="relative border-t border-zinc-900 py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_60%)]" />

                <div className="relative mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-emerald-400">
                            Philosophy
                        </p>

                        <h2 className="mx-auto max-w-4xl text-5xl font-light leading-tight md:text-6xl">
                            Transformation After
                            <span className="block text-emerald-400">
                                The Lessons Have Been Learned
                            </span>
                        </h2>

                        <div className="mx-auto mt-12 h-px w-32 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                    </div>

                    <div className="mx-auto mt-16 max-w-5xl space-y-8 text-center">
                        <p className="text-xl leading-relaxed text-zinc-300 md:text-2xl">
                            Every human life is shaped by experiences that leave a permanent mark.
                            Moments of loss, love, faith, uncertainty, resilience, discovery,
                            failure, forgiveness, and renewal become the unseen architects of
                            identity.
                        </p>

                        <p className="text-lg leading-relaxed text-zinc-400">
                            Some transformations happen in an instant. Others unfold quietly over
                            years. A single conversation can redirect a life. A painful ending can
                            become the beginning of a new purpose. A season of uncertainty can
                            reveal strengths that were previously hidden beneath fear and doubt.
                        </p>

                        <p className="text-lg leading-relaxed text-zinc-400">
                            <strong className="font-medium text-white">
                                The Alchemy of Becoming
                            </strong>{" "}
                            explores the extraordinary process through which ordinary people evolve
                            into wiser, stronger, and more authentic versions of themselves.
                            It is a collection of stories documenting personal growth,
                            transformation, reinvention, resilience, healing, self-discovery,
                            purpose, and the lifelong journey of becoming.
                        </p>

                        <p className="text-lg leading-relaxed text-zinc-400">
                            Within every challenge exists the possibility of transformation.
                            Within every ending exists the seed of a new beginning. Through
                            interviews, reflections, essays, documentaries, and lived experiences,
                            this project preserves the lessons, breakthroughs, and defining moments
                            that shape the evolution of the human spirit.
                        </p>

                        <p className="text-lg leading-relaxed text-zinc-400">
                            As the part of{" "}
                            <span className="text-emerald-400">
                                Soulfire Chronicles
                            </span>
                            , this project stands as a testament to humanity&apos;s remarkable ability
                            to adapt, heal, learn, and transform. It asks one timeless question:
                        </p>

                        <blockquote className="mx-auto max-w-4xl border-l-2 border-emerald-500 pl-8 text-left text-2xl italic leading-relaxed text-zinc-200">
                            &ldquo;Who do we become after life changes us?&rdquo;
                        </blockquote>
                    </div>

                    <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-3">
                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
                            <h3 className="mb-4 text-xl font-medium text-white">
                                Personal Growth
                            </h3>

                            <p className="leading-relaxed text-zinc-400">
                                Exploring the experiences, lessons, and decisions that contribute to
                                continuous self-improvement and personal evolution.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
                            <h3 className="mb-4 text-xl font-medium text-white">
                                Reinvention & Resilience
                            </h3>

                            <p className="leading-relaxed text-zinc-400">
                                Stories of individuals who rebuilt their lives, discovered new
                                purpose, and emerged stronger through adversity and change.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
                            <h3 className="mb-4 text-xl font-medium text-white">
                                Purpose & Transformation
                            </h3>

                            <p className="leading-relaxed text-zinc-400">
                                Documenting the transformative moments that reveal meaning, awaken
                                potential, and inspire extraordinary human journeys.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Themes */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-emerald-400">
                            Core Themes
                        </p>

                        <h2 className="text-5xl font-light">
                            The Foundations of Growth
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {themes.map((theme) => {
                            const Icon = theme.icon;

                            return (
                                <div
                                    key={theme.title}
                                    className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:border-emerald-500/30"
                                >
                                    <Icon className="mb-6 h-10 w-10 text-emerald-400" />

                                    <h3 className="mb-4 text-2xl">{theme.title}</h3>

                                    <p className="leading-relaxed text-zinc-400">
                                        {theme.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Journeys */}

            <section id="journeys" className="relative py-32 overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at center, rgba(16,185,129,0.08), transparent 65%)",
                    }}
                />

                <div className="relative mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-emerald-400">
                            Featured Stories
                        </p>

                        <h2 className="text-5xl font-light md:text-6xl">
                            Journeys of Becoming
                        </h2>

                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
                            Every transformation begins with a moment. A decision. A challenge.
                            A loss. A breakthrough. These stories document the extraordinary
                            process of personal growth, resilience, reinvention, self-discovery,
                            and human transformation that shapes who we ultimately become.
                        </p>
                    </div>

                    <div className="mt-20 grid gap-8 md:grid-cols-2">
                        {featuredJourneys.map((story) => (
                            <article
                                key={story.title}
                                className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30 p-10 transition duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/50"
                            >
                                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />
                                </div>

                                <div className="relative">
                                    <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-emerald-400">
                                        {story.category}
                                    </span>

                                    <h3 className="mt-6 text-3xl font-light leading-tight text-white md:text-4xl">
                                        {story.title}
                                    </h3>

                                    <p className="mt-6 leading-relaxed text-zinc-400">
                                        Explore a powerful story of transformation, resilience,
                                        personal evolution, and the life-changing experiences that
                                        reveal purpose, wisdom, and growth through adversity.
                                    </p>

                                    <div className="mt-8 flex items-center gap-3 text-emerald-400 transition group-hover:translate-x-2">
                                        <span className="font-medium">
                                            Read Full Journey
                                        </span>

                                        <HiOutlineArrowRight className="h-5 w-5" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* SEO Content Block */}
                    <div className="mx-auto mt-24 max-w-5xl text-center">
                        <h3 className="text-3xl font-light text-white">
                            Stories of Transformation, Growth, and Human Potential
                        </h3>

                        <p className="mt-8 text-lg leading-relaxed text-zinc-400">
                            The Alchemy of Becoming preserves authentic stories of personal
                            development, resilience, self-discovery, healing, reinvention,
                            purpose, and transformation. Through real experiences and profound
                            reflections, these journeys reveal how ordinary people navigate
                            change, overcome adversity, discover meaning, and evolve into
                            stronger versions of themselves.
                        </p>

                        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                            From moments of uncertainty to extraordinary breakthroughs, every
                            story contributes to a larger archive of human growth and the
                            enduring evolution of the human spirit.
                        </p>
                    </div>

                </div>
            </section>

            {/* Mission */}
            <section className="border-t border-zinc-900 py-32">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-emerald-400">
                        Mission
                    </p>

                    <h2 className="mb-8 text-5xl font-light">
                        Preserving Human Transformation
                    </h2>

                    <p className="text-lg leading-relaxed text-zinc-400">
                        Every life contains moments of transformation. Some are dramatic.
                        Others are quiet and invisible. Yet each contributes to the ongoing
                        evolution of the human spirit.
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                        Through interviews, essays, documentaries, reflections, and
                        personal narratives, The Alchemy of Becoming seeks to document the
                        extraordinary process of human growth and preserve the wisdom found
                        within life&apos;s most transformative experiences.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative overflow-hidden border-t border-zinc-900 py-32">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_65%)]" />

                <div className="relative mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-emerald-400">
                            Join The Archive
                        </p>

                        <h2 className="mx-auto max-w-5xl text-5xl font-light leading-tight md:text-7xl">
                            Every Story
                            <span className="block text-emerald-400">Changes Someone</span>
                        </h2>

                        <div className="mx-auto mt-10 max-w-4xl space-y-6 text-lg leading-relaxed text-zinc-400 md:text-xl">
                            <p>
                                Behind every transformation lies a story worth preserving.
                                Stories of resilience. Stories of reinvention. Stories of healing,
                                courage, purpose, growth, and extraordinary human evolution.
                            </p>

                            <p>
                                The Alchemy of Becoming exists to document the moments that reshape
                                lives and reveal the remarkable strength of the human spirit.
                                Through authentic experiences and profound reflections, we preserve
                                journeys that inspire future generations to grow, adapt, overcome,
                                and become more than they once imagined possible.
                            </p>

                            <p>
                                Whether your story began with loss, uncertainty, faith, redemption,
                                transformation, personal growth, self-discovery, or an unexpected
                                turning point, your experience has the power to illuminate a path
                                for someone else.
                            </p>
                        </div>

                        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
                            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
                                <h3 className="mb-4 text-xl font-medium text-white">
                                    Share Your Journey
                                </h3>
                                <p className="leading-relaxed text-zinc-400">
                                    Contribute a story of transformation, resilience, healing,
                                    reinvention, or personal growth.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
                                <h3 className="mb-4 text-xl font-medium text-white">
                                    Inspire Others
                                </h3>
                                <p className="leading-relaxed text-zinc-400">
                                    Help others navigate change through authentic experiences,
                                    wisdom, and lessons learned along the way.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
                                <h3 className="mb-4 text-xl font-medium text-white">
                                    Preserve Legacy
                                </h3>
                                <p className="leading-relaxed text-zinc-400">
                                    Become part of a growing archive dedicated to documenting
                                    humanity&apos;s journey of becoming.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
                            <Link
                                href="/submit-story"
                                className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-10 py-5 text-lg font-medium text-black transition duration-300 hover:scale-105"
                            >
                                Share Your Story
                                <HiOutlineArrowRight className="h-5 w-5" />
                            </Link>

                        </div>

                        <div className="mx-auto mt-24 max-w-5xl border-t border-zinc-800 pt-16">
                            <blockquote className="text-3xl font-light italic leading-relaxed text-zinc-200 md:text-5xl">
                                “We are not remembered for what happened to us.
                                We are remembered for who we became because of it.”
                            </blockquote>

                            <p className="mt-8 text-sm uppercase tracking-[0.35em] text-emerald-400">
                                The Alchemy of Becoming • Soulfire Chronicles
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Transformation Process */}

            <section className="relative border-t border-zinc-900 py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_65%)]" />

                <div className="relative mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-5xl text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-emerald-400">
                            The Process of Becoming
                        </p>

                        <h2 className="text-5xl font-light md:text-6xl">
                            How Transformation
                            <span className="block text-emerald-400">
                                Shapes Human Lives
                            </span>
                        </h2>

                        <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-zinc-400">
                            Personal transformation rarely happens all at once.
                            Growth often emerges through a series of experiences,
                            challenges, revelations, and decisions that gradually
                            reshape identity. The Alchemy of Becoming explores the
                            universal process through which people evolve, adapt,
                            heal, discover purpose, and become stronger versions of
                            themselves.
                        </p>
                    </div>

                    <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
                            <div className="mb-6 text-5xl font-light text-emerald-400">
                                01
                            </div>

                            <h3 className="mb-4 text-2xl text-white">
                                The Catalyst
                            </h3>

                            <p className="leading-relaxed text-zinc-400">
                                Every transformation begins with an event,
                                realization, challenge, opportunity, loss,
                                breakthrough, or moment of awareness that disrupts
                                the familiar and invites change.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
                            <div className="mb-6 text-5xl font-light text-emerald-400">
                                02
                            </div>

                            <h3 className="mb-4 text-2xl text-white">
                                Reflection
                            </h3>

                            <p className="leading-relaxed text-zinc-400">
                                Meaning emerges through reflection. Individuals begin
                                questioning assumptions, exploring new perspectives,
                                and understanding the deeper lessons hidden within
                                their experiences.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
                            <div className="mb-6 text-5xl font-light text-emerald-400">
                                03
                            </div>

                            <h3 className="mb-4 text-2xl text-white">
                                Growth
                            </h3>

                            <p className="leading-relaxed text-zinc-400">
                                New habits, beliefs, skills, and perspectives emerge.
                                Growth often requires courage, resilience, patience,
                                and the willingness to embrace uncertainty.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
                            <div className="mb-6 text-5xl font-light text-emerald-400">
                                04
                            </div>

                            <h3 className="mb-4 text-2xl text-white">
                                Becoming
                            </h3>

                            <p className="leading-relaxed text-zinc-400">
                                Transformation becomes visible. The individual
                                emerges wiser, stronger, more purposeful, and more
                                aligned with who they are meant to become.
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto mt-24 max-w-5xl space-y-8 text-center">
                        <p className="text-lg leading-relaxed text-zinc-400">
                            Although every journey is unique, transformation often
                            follows recognizable patterns. Human beings continuously
                            adapt to changing circumstances, redefine their
                            priorities, and discover hidden strengths through
                            adversity and experience.
                        </p>

                        <p className="text-lg leading-relaxed text-zinc-400">
                            The stories collected within The Alchemy of Becoming
                            demonstrate that personal growth is not a destination
                            but a lifelong process. Every challenge offers a lesson.
                            Every ending creates space for a new beginning. Every
                            season of uncertainty contains opportunities for deeper
                            wisdom and self-discovery.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pillars Of Transformation */}

            <section className="border-t border-zinc-900 py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-emerald-400">
                            Pillars of Becoming
                        </p>

                        <h2 className="text-5xl font-light md:text-6xl">
                            The Forces Behind
                            <span className="block text-emerald-400">
                                Human Transformation
                            </span>
                        </h2>
                    </div>

                    <div className="mt-20 grid gap-8 lg:grid-cols-2">
                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10">
                            <h3 className="mb-6 text-3xl font-light text-white">
                                Courage
                            </h3>

                            <p className="leading-relaxed text-zinc-400">
                                Courage allows individuals to step beyond comfort,
                                face uncertainty, embrace vulnerability, and move
                                forward despite fear. Every meaningful transformation
                                requires the willingness to take a step into the
                                unknown.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10">
                            <h3 className="mb-6 text-3xl font-light text-white">
                                Resilience
                            </h3>

                            <p className="leading-relaxed text-zinc-400">
                                Resilience enables people to recover, adapt, and grow
                                through adversity. It transforms setbacks into
                                opportunities for learning and growth.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10">
                            <h3 className="mb-6 text-3xl font-light text-white">
                                Purpose
                            </h3>

                            <p className="leading-relaxed text-zinc-400">
                                Purpose provides direction and meaning. It helps
                                individuals navigate difficult periods while
                                remaining connected to values, goals, and aspirations.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10">
                            <h3 className="mb-6 text-3xl font-light text-white">
                                Wisdom
                            </h3>

                            <p className="leading-relaxed text-zinc-400">
                                Wisdom emerges through lived experience. It is the
                                ability to transform lessons into understanding and
                                understanding into meaningful action.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Long Form SEO Section */}

            <section className="relative border-t border-zinc-900 py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,197,94,0.08),transparent_65%)]" />

                <div className="relative mx-auto max-w-5xl px-6">
                    <div className="text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-emerald-400">
                            Human Growth Archive
                        </p>

                        <h2 className="text-5xl font-light md:text-6xl">
                            Why Stories of Transformation Matter
                        </h2>
                    </div>

                    <div className="mt-16 space-y-8 text-lg leading-relaxed text-zinc-400">
                        <p>
                            Stories of transformation serve as bridges between
                            experience and understanding. They reveal how individuals
                            navigate uncertainty, rebuild after loss, discover
                            purpose, strengthen resilience, and evolve through life&apos;s
                            defining moments. These narratives offer valuable insight
                            into the universal human experience of growth and change.
                        </p>

                        <p>
                            Throughout history, people have learned through stories.
                            Personal narratives preserve lessons that statistics and
                            theories often cannot capture. They reveal the emotional,
                            psychological, and spiritual dimensions of transformation
                            while demonstrating how courage, perseverance, and hope
                            influence outcomes.
                        </p>

                        <p>
                            The Alchemy of Becoming exists to create a lasting archive
                            of personal growth, resilience, healing, purpose,
                            reinvention, self-discovery, wisdom, and transformation.
                            Each contribution expands a collective understanding of
                            how human beings adapt, evolve, and create meaning from
                            their experiences.
                        </p>

                        <p>
                            By documenting authentic stories, reflections, essays,
                            interviews, and life lessons, we preserve valuable
                            knowledge for future generations. These stories remind us
                            that change is possible, growth is continuous, and every
                            individual possesses the capacity to become more than
                            they once imagined.
                        </p>

                        <p>
                            Whether transformation arrives through adversity,
                            opportunity, faith, personal growth, healing,
                            relationships, creativity, education, leadership, or
                            self-discovery, the journey of becoming remains one of
                            humanity&apos;s most profound experiences. It is a process
                            that connects people across cultures, generations, and
                            backgrounds through a shared pursuit of meaning and
                            growth.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
}