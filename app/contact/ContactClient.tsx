"use client";

import { useState } from "react";
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

  /* ================= PLACEHOLDER ================= */

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message || !form.intent) {
      setStatus("Please complete all fields including intent");
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus("Invalid email format");
      return;
    }

    try {
      setLoading(true);

      // 👉 Replace with your backend API later
      await new Promise((res) => setTimeout(res, 1500));

      setStatus("success");
      setForm({
        name: "",
        email: "",
        message: "",
        intent: "",
      });
    } catch (err) {
      setStatus("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <main className="relative text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-black" />

      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#6366f1,transparent_40%),radial-gradient(circle_at_80%_80%,#ec4899,transparent_40%)]" />

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full top-10 left-10"
      />

      {/* HERO */}
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

      {/* MAIN */}
      <section className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 pb-32">

        {/* ================= INTENT SELECTOR ================= */}
        <div className="space-y-5">

          <h3 className="text-xl font-semibold">Select Intent</h3>

          {intents.map((item) => {
            const isActive = form.intent === item.title;

            return (
              <motion.div
                key={item.title}
                role="button"
                tabIndex={0}
                onClick={() =>
                  setForm({ ...form, intent: item.title })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setForm({ ...form, intent: item.title });
                  }
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative cursor-pointer rounded-2xl p-[1px] transition

                ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-pink-500"
                    : "bg-white/10"
                }`}
              >
                <div
                  className={`relative rounded-2xl p-5 transition

                  ${
                    isActive
                      ? "bg-black/80 backdrop-blur-xl"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {/* Glow */}
                  {isActive && (
                    <motion.div
                      layoutId="intentGlow"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 blur-xl rounded-2xl"
                    />
                  )}

                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg">
                        {item.title}
                      </h4>
                      <p className="text-sm text-neutral-400">
                        {item.desc}
                      </p>
                    </div>

                    {/* Check */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-400 to-pink-400 flex items-center justify-center text-black text-xs"
                    >
                      ✓
                    </motion.div>
                  </div>

                  {/* Bottom line */}
                  <motion.div
                    animate={{ width: isActive ? "100%" : "0%" }}
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-400 to-pink-400"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= FORM ================= */}
        <div className="lg:col-span-2">

          <div className="p-10 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl">

            {/* Progress */}
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <HiOutlineCheckCircle className="text-6xl text-green-400 mx-auto" />
                  <h2 className="text-3xl font-bold mt-6">
                    Message Sent Successfully
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
                      value={form.name}
                      placeholder="Your Name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-indigo-400"
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="relative">
                    <HiOutlineEnvelope className="absolute top-4 left-3 text-neutral-400" />
                    <input
                      value={form.email}
                      placeholder="Email Address"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-indigo-400"
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
                      value={form.message}
                      placeholder={getPlaceholder()}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-indigo-400"
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
                      className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-sm"
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
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center gap-2 font-semibold disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <HiOutlinePaperAirplane />
                  </motion.button>

                  {/* ERROR */}
                  {status && status !== "success" && (
                    <p className="text-red-400 text-sm">
                      {status}
                    </p>
                  )}

                </motion.form>
              )}

            </AnimatePresence>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="text-center pb-32">

        <h2 className="text-4xl font-bold">
          Continue the Journey
        </h2>

        <Link
          href="/book"
          className="inline-flex mt-6 items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
        >
          Explore Books <HiOutlineArrowRight />
        </Link>

      </section>

    </main>
  );
}