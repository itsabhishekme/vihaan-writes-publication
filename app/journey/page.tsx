"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useRef } from "react"
import Link from "next/link"

export default function JourneyPage() {
    const [activeStep, setActiveStep] = useState(0)
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

    const steps = [
        {
            title: "Feel",
            desc: "Let emotions rise before logic. Truth is not understood, it is felt.",
            aura: "from-purple-500 to-indigo-500"
        },
        {
            title: "Connect",
            desc: "You are not reading words. You are meeting parts of yourself.",
            aura: "from-pink-500 to-purple-500"
        },
        {
            title: "Realize",
            desc: "Nothing here is new. It was always inside you, waiting.",
            aura: "from-indigo-500 to-blue-500"
        }
    ]

    const nextStep = () => activeStep < steps.length - 1 && setActiveStep(activeStep + 1)
    const prevStep = () => activeStep > 0 && setActiveStep(activeStep - 1)

    return (
        <main ref={ref} className="relative min-h-screen bg-black text-white overflow-hidden">

            {/* 🌌 BACKGROUND GLOW */}
            <motion.div style={{ scale: bgScale, opacity }} className="absolute inset-0 -z-20">
                <div className="absolute w-[1000px] h-[1000px] bg-purple-600/20 blur-[220px] top-[-300px] left-1/2 -translate-x-1/2" />
                <div className="absolute w-[800px] h-[800px] bg-pink-500/20 blur-[200px] bottom-[-300px] right-0" />
            </motion.div>

            {/* 🟦 GRID OVERLAY */}
            <div className="absolute inset-0 -z-10 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* ✨ PARTICLES */}
            <div className="absolute inset-0 -z-10">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, -80, 0], opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 6 + i, repeat: Infinity }}
                        className="absolute w-[2px] h-[2px] bg-white rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            {/* 🧠 HERO */}
            <section className="text-center px-6 pt-40 max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent"
                >
                    Enter The Journey
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 text-neutral-400 text-xl max-w-2xl mx-auto leading-relaxed"
                >
                    This is not reading. <br />
                    This is remembering something your soul never forgot.
                </motion.p>
            </section>

            {/* 🔮 PROGRESS */}
            <section className="mt-24 max-w-xl mx-auto px-6">
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        animate={{ width: `${(activeStep + 1) * (100 / steps.length)}%` }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                </div>
            </section>

            {/* 🧩 STEPS */}
            <section className="mt-32 grid md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -15, scale: 1.07 }}
                        onClick={() => setActiveStep(i)}
                        className={`relative p-10 rounded-3xl cursor-pointer border backdrop-blur-xl transition ${activeStep === i
                            ? "bg-white/10 border-purple-500 shadow-[0_0_60px_rgba(168,85,247,0.5)]"
                            : "bg-white/5 border-white/10"
                            }`}
                    >
                        <div className={`absolute inset-0 rounded-3xl opacity-20 blur-2xl bg-gradient-to-r ${step.aura}`} />
                        <h2 className="text-2xl font-bold relative z-10">Step {i + 1}: {step.title}</h2>
                        <p className="mt-4 text-neutral-400 relative z-10">{step.desc}</p>
                    </motion.div>
                ))}
            </section>

            {/* 🌀 EXPERIENCE */}
            <section className="mt-40 px-6 max-w-4xl mx-auto text-center">
                <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-16 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
                >
                    <h3 className="text-5xl font-bold mb-6">{steps[activeStep].title}</h3>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        {steps[activeStep].desc}
                        <br /><br />
                        Don’t rush this. Let it unfold inside you.
                    </p>

                    <div className="flex justify-center gap-6 mt-12">
                        <button onClick={prevStep} className="px-8 py-3 bg-white/10 rounded-xl hover:bg-white/20">
                            Previous
                        </button>
                        <button onClick={nextStep} className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                            Next
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* 🌠 NEW SECTION */}
            <section className="mt-44 text-center px-6 max-w-5xl mx-auto">
                <h2 className="text-5xl font-bold">This Is Not A Book</h2>
                <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                    It is a mirror. A silent conversation between who you are and who you have always been.
                </p>
            </section>

            {/* 🌌 DEPTH SECTION */}
            <section className="mt-40 grid md:grid-cols-2 gap-16 px-6 max-w-6xl mx-auto items-center">
                <div>
                    <h3 className="text-4xl font-bold">Beyond Words</h3>
                    <p className="mt-6 text-neutral-400 leading-relaxed">
                        This journey is not about information. It is about transformation.
                        Every line you read is designed to awaken something deeper within you.
                    </p>
                </div>

                <div className="relative h-[300px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-[120px] opacity-30 rounded-full" />
                </div>
            </section>

            {/* 💭 QUOTE */}
            <section className="mt-44 px-6 text-center max-w-3xl mx-auto">
                <p className="text-3xl italic text-neutral-300 leading-relaxed">
                    “You are not finding something new. You are returning to something ancient within you.”
                </p>
            </section>

            {/* 🚀 CTA */}
            <section className="mt-44 text-center px-6">
                <h2 className="text-6xl font-black">Begin Now</h2>
                <p className="mt-4 text-neutral-400 text-lg">
                    The journey has already chosen you.
                </p>

                <Link href="/book">
                    <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-10 px-16 py-6 text-lg bg-white text-black rounded-2xl font-semibold shadow-xl"
                    >
                        Start Reading
                    </motion.button>
                </Link>
            </section>
        </main>
    )
}