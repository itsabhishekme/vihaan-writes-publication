"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePaperAirplane,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineUser,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

/* ================= INTENTS ================= */

const intents = [
  {
    title: "Collaboration",
    desc: "Let’s create something meaningful",
    tone: "Creative energy detected ✨",
  },
  {
    title: "Interview",
    desc: "Podcast / Media feature",
    tone: "Curiosity meets voice 🎙️",
  },
  {
    title: "Reader Message",
    desc: "Personal reflection",
    tone: "Soul connection activated ❤️",
  },
  {
    title: "Business",
    desc: "Professional inquiry",
    tone: "Clarity & structure 💼",
  },
  {
    title: "Speaking",
    desc: "Events & sessions",
    tone: "Stage energy incoming 🎤",
  },
];

/* ================= COMPONENT ================= */

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    intent: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const progress =
    [form.name, form.email, form.message, form.intent].filter(Boolean).length /
    4;

  /* ================= SMART PLACEHOLDER ================= */

  const getPlaceholder = () => {
    switch (form.intent) {
      case "Collaboration":
        return "Describe your idea or vision...";
      case "Interview":
        return "Share your platform / audience details...";
      case "Reader Message":
        return "Write from your heart...";
      case "Business":
        return "Explain your proposal clearly...";
      case "Speaking":
        return "Event details, location, audience size...";
      default:
        return "Write your message...";
    }
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message || !form.intent) {
      setStatus("Please complete all fields including intent");
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus("Invalid email format");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStatus("success");
    }, 1800);
  };

  /* ================= UI ================= */

  return (
    <main className="relative text-white overflow-hidden">

      {/* 🌌 BACKGROUND LAYERS */}
      <div className="absolute inset-0 -z-10 bg-black" />

      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#6366f1,transparent_40%),radial-gradient(circle_at_80%_80%,#ec4899,transparent_40%)]" />

      {/* FLOATING LIGHT */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full top-10 left-10"
      />

      {/* ================= HERO ================= */}

      <section className="text-center py-24 px-6 max-w-5xl mx-auto">

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10">
          <HiOutlineSparkles />
          Intent-Based Communication
        </div>

        <h1 className="text-6xl font-black mt-6 leading-tight">
          Every Message
          <br />
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent bg-clip-text">
            Has Energy.
          </span>
        </h1>

        <p className="text-neutral-400 mt-6 max-w-xl mx-auto">
          Choose your intent. The experience adapts to you.
        </p>

      </section>

      {/* ================= MAIN ================= */}

      <section className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 pb-32">

        {/* ================= INTENT SELECTOR ================= */}

        <div className="space-y-4">

          <h3 className="text-lg font-semibold">Select Intent</h3>

          {intents.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.04 }}
              onClick={() =>
                setForm({ ...form, intent: item.title })
              }
              className={`p-5 rounded-2xl cursor-pointer border transition
              ${
                form.intent === item.title
                  ? "bg-gradient-to-r from-indigo-500/30 to-pink-500/30 border-indigo-400"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-xs text-neutral-400">{item.desc}</p>
            </motion.div>
          ))}

        </div>

        {/* ================= FORM ================= */}

        <div className="lg:col-span-2">

          <div className="p-10 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl">

            {/* PROGRESS */}
            <div className="h-1 bg-white/10 rounded-full mb-6 overflow-hidden">
              <motion.div
                animate={{ width: `${progress * 100}%` }}
                className="h-full bg-gradient-to-r from-indigo-400 to-pink-400"
              />
            </div>

            <AnimatePresence mode="wait">

              {status === "success" ? (
                <motion.div
                  key="success"
                  className="text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <HiOutlineCheckCircle className="text-6xl text-green-400 mx-auto" />
                  <h2 className="text-3xl font-bold mt-6">
                    Message Sent
                  </h2>
                </motion.div>
              ) : (

                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* NAME */}
                  <div className="relative">
                    <HiOutlineUser className="absolute top-4 left-3 text-neutral-400" />
                    <input
                      placeholder="Your Name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none"
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="relative">
                    <HiOutlineEnvelope className="absolute top-4 left-3 text-neutral-400" />
                    <input
                      placeholder="Email Address"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none"
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="relative">
                    <HiOutlineChatBubbleLeftRight className="absolute top-4 left-3 text-neutral-400" />
                    <textarea
                      rows={5}
                      placeholder={getPlaceholder()}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none"
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                  </div>

                  {/* INTENT PREVIEW */}
                  {form.intent && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-400/30 text-sm text-indigo-300"
                    >
                      {
                        intents.find((i) => i.title === form.intent)?.tone
                      }
                    </motion.div>
                  )}

                  {/* BUTTON */}
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center gap-2 font-semibold"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <HiOutlinePaperAirplane />
                  </motion.button>

                  {status && status !== "success" && (
                    <p className="text-red-400 text-sm">{status}</p>
                  )}

                </motion.form>
              )}

            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}

      <section className="text-center pb-32">

        <h2 className="text-4xl font-bold">
          Continue the Journey
        </h2>

        <Link
          href="/book"
          className="inline-flex mt-6 items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5"
        >
          Explore Books <HiOutlineArrowRight />
        </Link>

      </section>

    </main>
  );
}