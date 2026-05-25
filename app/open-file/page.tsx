import {
  FileText,
  UploadCloud,
  FolderOpen,
  ShieldCheck,
  FileSearch,
  Sparkles,
  Clock3,
  Database,
  ArrowRight,
  CheckCircle2,
  ScanSearch,
  Layers3,
} from "lucide-react"

export default function OpenFilePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07010f] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-violet-700/20 blur-3xl" />

        <div className="absolute bottom-[-140px] right-[-100px] h-[420px] w-[420px] rounded-full bg-fuchsia-700/20 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="
            h-full w-full
            bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />
      </div>

      {/* Floating Blur */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Main Wrapper */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <div
          className="
            w-full max-w-6xl
            overflow-hidden
            rounded-[36px]
            border border-white/10
            bg-white/[0.04]
            shadow-[0_0_80px_rgba(139,92,246,0.18)]
            backdrop-blur-2xl
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="relative p-8 md:p-14">
              {/* Top Label */}
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-violet-400/20
                  bg-violet-500/10
                  px-4 py-2
                  text-sm font-medium
                  text-violet-200
                "
              >
                <Sparkles className="h-4 w-4" />
                Smart File Access
              </div>

              {/* Heading */}
              <div className="mt-8">
                <h1
                  className="
                    bg-gradient-to-r
                    from-white
                    via-violet-200
                    to-fuchsia-300
                    bg-clip-text
                    text-5xl font-black
                    leading-tight
                    text-transparent
                    md:text-7xl
                  "
                >
                  Open File
                </h1>

                <p
                  className="
                    mt-6
                    max-w-xl
                    text-base leading-8
                    text-zinc-300
                    md:text-lg
                  "
                >
                  Securely browse, inspect, and manage your files with a
                  modern cloud-inspired experience built for speed, elegance,
                  and productivity.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="mt-12 grid gap-5 sm:grid-cols-2">
                {/* Card 1 */}
                <div
                  className="
                    rounded-3xl
                    border border-white/10
                    bg-white/[0.03]
                    p-5
                    transition-all
                    duration-300
                    hover:bg-white/[0.06]
                  "
                >
                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      bg-violet-500/15
                    "
                  >
                    <FolderOpen className="h-7 w-7 text-violet-300" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    Quick Access
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Open recently used files instantly with optimized access
                    and smooth navigation.
                  </p>
                </div>

                {/* Card 2 */}
                <div
                  className="
                    rounded-3xl
                    border border-white/10
                    bg-white/[0.03]
                    p-5
                    transition-all
                    duration-300
                    hover:bg-white/[0.06]
                  "
                >
                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      bg-fuchsia-500/15
                    "
                  >
                    <ShieldCheck className="h-7 w-7 text-fuchsia-300" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    Secure Reading
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Your file sessions remain encrypted and protected across
                    devices and sessions.
                  </p>
                </div>

                {/* Card 3 */}
                <div
                  className="
                    rounded-3xl
                    border border-white/10
                    bg-white/[0.03]
                    p-5
                    transition-all
                    duration-300
                    hover:bg-white/[0.06]
                  "
                >
                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      bg-cyan-500/15
                    "
                  >
                    <ScanSearch className="h-7 w-7 text-cyan-300" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    Smart Detection
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Automatically identify supported formats and organize files
                    intelligently.
                  </p>
                </div>

                {/* Card 4 */}
                <div
                  className="
                    rounded-3xl
                    border border-white/10
                    bg-white/[0.03]
                    p-5
                    transition-all
                    duration-300
                    hover:bg-white/[0.06]
                  "
                >
                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      bg-emerald-500/15
                    "
                  >
                    <Database className="h-7 w-7 text-emerald-300" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    Local Storage
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Access saved data quickly while keeping your workflow fast
                    and responsive.
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <button
                  className="
                    flex items-center justify-center gap-2
                    rounded-2xl
                    bg-gradient-to-r
                    from-violet-600
                    to-fuchsia-600
                    px-7 py-4
                    text-sm font-semibold
                    shadow-lg shadow-violet-900/30
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    active:scale-[0.98]
                  "
                >
                  <UploadCloud className="h-5 w-5" />
                  Open File
                </button>

                <button
                  className="
                    flex items-center justify-center gap-2
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.04]
                    px-7 py-4
                    text-sm font-semibold
                    text-zinc-200
                    transition-all
                    duration-300
                    hover:bg-white/[0.08]
                  "
                >
                  Browse Storage
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                relative flex items-center justify-center
                border-t border-white/10
                bg-gradient-to-b
                from-white/[0.02]
                to-transparent
                p-8 lg:border-l lg:border-t-0
              "
            >
              {/* Floating Glass Card */}
              <div
                className="
                  relative w-full max-w-md
                  rounded-[32px]
                  border border-white/10
                  bg-[#12051f]/80
                  p-7
                  shadow-[0_0_60px_rgba(168,85,247,0.15)]
                  backdrop-blur-xl
                "
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">
                      Current Session
                    </p>

                    <h2 className="mt-1 text-2xl font-bold">
                      File Handler
                    </h2>
                  </div>

                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-violet-500/20
                      to-fuchsia-500/20
                    "
                  >
                    <FileText className="h-7 w-7 text-violet-200" />
                  </div>
                </div>

                {/* Upload Area */}
                <div
                  className="
                    mt-8
                    rounded-3xl
                    border border-dashed border-white/15
                    bg-white/[0.03]
                    p-8 text-center
                  "
                >
                  <div className="flex justify-center">
                    <div
                      className="
                        flex h-20 w-20
                        items-center justify-center
                        rounded-3xl
                        bg-violet-500/15
                      "
                    >
                      <UploadCloud className="h-10 w-10 text-violet-300" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    Drag & Drop Files
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Supported formats include PDF, DOCX, TXT, ZIP, and image
                    files.
                  </p>

                  <button
                    className="
                      mt-6
                      rounded-2xl
                      bg-white
                      px-6 py-3
                      text-sm font-semibold
                      text-black
                      transition-all
                      duration-300
                      hover:scale-[1.03]
                    "
                  >
                    Choose File
                  </button>
                </div>

                {/* Activity */}
                <div className="mt-8 space-y-4">
                  {/* Item */}
                  <div
                    className="
                      flex items-center justify-between
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      p-4
                    "
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          flex h-12 w-12
                          items-center justify-center
                          rounded-xl
                          bg-cyan-500/15
                        "
                      >
                        <Layers3 className="h-6 w-6 text-cyan-300" />
                      </div>

                      <div>
                        <p className="font-medium">
                          Project Assets.zip
                        </p>

                        <p className="text-sm text-zinc-500">
                          124 MB
                        </p>
                      </div>
                    </div>

                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  </div>

                  {/* Item */}
                  <div
                    className="
                      flex items-center justify-between
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      p-4
                    "
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          flex h-12 w-12
                          items-center justify-center
                          rounded-xl
                          bg-fuchsia-500/15
                        "
                      >
                        <Clock3 className="h-6 w-6 text-fuchsia-300" />
                      </div>

                      <div>
                        <p className="font-medium">
                          Recent Session.txt
                        </p>

                        <p className="text-sm text-zinc-500">
                          Opened 2 mins ago
                        </p>
                      </div>
                    </div>

                    <FileSearch className="h-5 w-5 text-zinc-300" />
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-zinc-500">
                        System Status
                      </p>

                      <p className="mt-1 font-medium text-emerald-300">
                        Ready to Open Files
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

                      <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}