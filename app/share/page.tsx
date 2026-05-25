"use client"

import { motion } from "framer-motion"
import {
  Share2,
  Download,
  FileText,
  Image as ImageIcon,
  Video,
  Music2,
  Link2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Globe,
  Smartphone,
  Clock3,
  FolderOpen,
  ExternalLink,
  Copy,
} from "lucide-react"

export default function SharePage() {
  const sharedItems = [
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Vacation_Photo.png",
      size: "4.8 MB",
      type: "Image File",
      color:
        "from-pink-500/20 via-purple-500/10 to-transparent border-pink-500/20",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Project_Report.pdf",
      size: "1.2 MB",
      type: "Document",
      color:
        "from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-500/20",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Launch_Promo.mp4",
      size: "24 MB",
      type: "Video File",
      color:
        "from-orange-500/20 via-red-500/10 to-transparent border-orange-500/20",
    },
    {
      icon: <Music2 className="w-6 h-6" />,
      title: "Ambient_Soundtrack.mp3",
      size: "8.4 MB",
      type: "Audio File",
      color:
        "from-emerald-500/20 via-green-500/10 to-transparent border-emerald-500/20",
    },
  ]

  const stats = [
    {
      label: "Files Shared",
      value: "1,248",
      icon: <Share2 className="w-5 h-5" />,
    },
    {
      label: "Secure Transfers",
      value: "99.9%",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      label: "Avg Speed",
      value: "2.1s",
      icon: <Clock3 className="w-5 h-5" />,
    },
    {
      label: "Devices Connected",
      value: "18",
      icon: <Smartphone className="w-5 h-5" />,
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_25%)]" />

      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating Blur */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
            Smart Share Experience
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Shared Content
                <span className="block bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Successfully Received
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Your shared files have been securely transferred and are ready
                to access across all connected devices. Experience ultra-fast
                synchronization with encrypted cloud delivery.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-blue-600 px-7 py-4 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/20">
                  <Download className="w-5 h-5" />
                  Download All
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold backdrop-blur-xl transition hover:bg-white/10">
                  <FolderOpen className="w-5 h-5" />
                  Open Folder
                </button>
              </div>
            </div>

            {/* Side Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-blue-500/10" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                      Share Session
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">
                      Transfer Complete
                    </h3>
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20 text-green-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                </div>

                <div className="mt-10 space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Security Status</span>
                      <span className="font-semibold text-green-400">
                        Encrypted
                      </span>
                    </div>

                    <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-green-400 to-emerald-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                      <p className="text-sm text-zinc-400">Total Files</p>
                      <h4 className="mt-2 text-3xl font-black">24</h4>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                      <p className="text-sm text-zinc-400">Storage Used</p>
                      <h4 className="mt-2 text-3xl font-black">38GB</h4>
                    </div>
                  </div>

                  <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-semibold transition hover:bg-white/20">
                    <ExternalLink className="w-5 h-5" />
                    Open Shared Workspace
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Shared Files */}
        <section className="mb-20">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black">Recent Shared Files</h2>
              <p className="mt-2 text-zinc-400">
                Instantly access recently transferred content.
              </p>
            </div>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur-xl transition hover:bg-white/10">
              View All
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sharedItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br p-6 backdrop-blur-2xl ${item.color}`}
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-white/[0.03]" />
                </div>

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-lg font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm text-zinc-400">{item.type}</p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-300">
                      {item.size}
                    </span>

                    <button className="rounded-xl border border-white/10 bg-white/10 p-2 transition hover:bg-white/20">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20">
                    {stat.icon}
                  </div>

                  <span className="text-4xl font-black">{stat.value}</span>
                </div>

                <p className="mt-6 text-zinc-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Share Link */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_30%)]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  Public Share Link
                </div>

                <h2 className="mt-6 text-4xl font-black leading-tight">
                  Share Across Devices
                  <span className="block text-zinc-400">
                    Without Compromise
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                  Securely share files, links, documents, and media with anyone
                  using encrypted transfer technology and lightning-fast cloud
                  delivery infrastructure.
                </p>
              </div>

              <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Link2 className="w-5 h-5 text-cyan-400" />

                  <input
                    value="https://share.workspace.com/shared/content/8472"
                    readOnly
                    className="w-full bg-transparent text-sm text-zinc-300 outline-none"
                  />

                  <button className="rounded-xl bg-white/10 p-3 transition hover:bg-white/20">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <button className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-blue-600 px-6 py-4 font-semibold transition hover:scale-[1.02]">
                  <Share2 className="w-5 h-5" />
                  Share Again
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </section>
    </main>
  )
}