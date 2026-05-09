"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePaperAirplane,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineUser,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

/* ================= TYPES ================= */

type ContactForm = {
  name: string;
  email: string;
  message: string;
  intent: string;
};

type ContactResponse = {
  success: boolean;
  message?: string;
};

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
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
    intent: "",
  });

  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  /* ================= HELPERS ================= */

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const progress =
    [
      form.name,
      form.email,
      form.message,
      form.intent,
    ].filter(Boolean).length / 4;

  const getPlaceholder = (): string => {
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

  const updateField = (
    field: keyof ContactForm,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    if (
      !form.name ||
      !form.email ||
      !form.message ||
      !form.intent
    ) {
      setStatus(
        "Please complete all fields including intent"
      );

      return;
    }

    if (!validateEmail(form.email)) {
      setStatus("Invalid email format");

      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data =
        (await res.json()) as ContactResponse;

      if (data.success) {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          message: "",
          intent: "",
        });

        return;
      }

      setStatus(
        data.message || "Failed to send message"
      );
    } catch {
      setStatus("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <main className="relative overflow-hidden text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#6366f1,transparent_40%),radial-gradient(circle_at_80%_80%,#ec4899,transparent_40%)] opacity-40" />

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-10 top-10 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-[120px]"
      />

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2">
          <HiOutlineSparkles />
          Intent-Based Communication
        </div>

        <h1 className="mt-6 text-6xl font-black leading-tight">
          Every Message
          <br />
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Has Energy.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-neutral-400">
          Choose your intent. The experience adapts to
          you.
        </p>
      </section>

      {/* MAIN */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-32 lg:grid-cols-3">
        {/* INTENT SELECTOR */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">
            Select Intent
          </h3>

          {intents.map((item) => {
            const isActive =
              form.intent === item.title;

            return (
              <motion.div
                key={item.title}
                role="button"
                tabIndex={0}
                onClick={() =>
                  updateField("intent", item.title)
                }
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" ||
                    e.key === " "
                  ) {
                    updateField(
                      "intent",
                      item.title
                    );
                  }
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`relative cursor-pointer rounded-2xl p-[1px] transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-pink-500 shadow-[0_0_25px_rgba(99,102,241,0.5)]"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <div
                  className={`relative rounded-2xl p-5 ${
                    isActive
                      ? "bg-black/80 backdrop-blur-xl"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="intentGlow"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 blur-xl"
                    />
                  )}

                  <div className="relative z-10 flex justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">
                        {item.title}
                      </h4>

                      <p className="text-sm text-neutral-400">
                        {item.desc}
                      </p>
                    </div>

                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-indigo-400 to-pink-400 text-xs text-black"
                    >
                      ✓
                    </motion.div>
                  </div>

                  <motion.div
                    animate={{
                      width: isActive
                        ? "100%"
                        : "0%",
                    }}
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-400 to-pink-400"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FORM */}
        <div className="lg:col-span-2">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            {/* PROGRESS */}
            <div className="mb-6 h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{
                  width: `${progress * 100}%`,
                }}
                className="h-full bg-gradient-to-r from-indigo-400 to-pink-400"
              />
            </div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div className="py-20 text-center">
                  <HiOutlineCheckCircle className="mx-auto text-6xl text-green-400" />

                  <h2 className="mt-6 text-3xl font-bold">
                    Message Sent
                  </h2>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="relative">
                    <HiOutlineUser className="absolute left-3 top-4 text-neutral-400" />

                    <input
                      type="text"
                      value={form.name}
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 outline-none"
                      onChange={(
                        e: ChangeEvent<HTMLInputElement>
                      ) =>
                        updateField(
                          "name",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="relative">
                    <HiOutlineEnvelope className="absolute left-3 top-4 text-neutral-400" />

                    <input
                      type="email"
                      value={form.email}
                      placeholder="Email Address"
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 outline-none"
                      onChange={(
                        e: ChangeEvent<HTMLInputElement>
                      ) =>
                        updateField(
                          "email",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="relative">
                    <HiOutlineChatBubbleLeftRight className="absolute left-3 top-4 text-neutral-400" />

                    <textarea
                      rows={5}
                      value={form.message}
                      placeholder={getPlaceholder()}
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 outline-none"
                      onChange={(
                        e: ChangeEvent<HTMLTextAreaElement>
                      ) =>
                        updateField(
                          "message",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  {form.intent && (
                    <motion.div className="rounded-xl border border-indigo-400/30 bg-indigo-500/10 p-4 text-sm text-indigo-300">
                      {
                        intents.find(
                          (i) =>
                            i.title ===
                            form.intent
                        )?.tone
                      }
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.96 }}
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 py-4 font-semibold disabled:opacity-60"
                  >
                    {loading
                      ? "Sending..."
                      : "Send Message"}

                    <HiOutlinePaperAirplane />
                  </motion.button>

                  {status &&
                    status !== "success" && (
                      <p className="text-sm text-red-400">
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
      <section className="pb-32 text-center">
        <h2 className="text-4xl font-bold">
          Continue the Journey
        </h2>

        <Link
          href="/book"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3"
        >
          Explore Books
        </Link>
      </section>
    </main>
  );
}