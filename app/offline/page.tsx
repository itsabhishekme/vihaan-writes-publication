import {
  WifiOff,
  RefreshCcw,
  AlertTriangle,
  ShieldCheck,
  CloudOff,
} from "lucide-react"

export default function OfflinePage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#090014] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-fuchsia-700/20 blur-3xl" />
        <div className="absolute bottom-[-150px] right-[-120px] h-[420px] w-[420px] rounded-full bg-violet-700/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%)]" />
      </div>

      {/* Floating Grid */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="
            h-full w-full
            bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)]
            bg-[size:50px_50px]
          "
        />
      </div>

      {/* Main Content */}
      <section className="relative z-10 flex w-full items-center justify-center px-6 py-12">
        <div
          className="
            w-full max-w-3xl
            rounded-[32px]
            border border-white/10
            bg-white/5
            p-8 md:p-14
            shadow-[0_0_60px_rgba(168,85,247,0.15)]
            backdrop-blur-2xl
          "
        >
          {/* Top Badge */}
          <div className="mb-8 flex items-center justify-center">
            <div
              className="
                flex items-center gap-2
                rounded-full
                border border-red-400/20
                bg-red-500/10
                px-4 py-2
                text-sm font-medium
                text-red-300
              "
            >
              <CloudOff className="h-4 w-4" />
              Network Disconnected
            </div>
          </div>

          {/* Icon */}
          <div className="flex justify-center">
            <div
              className="
                relative flex h-32 w-32
                items-center justify-center
                rounded-full
                border border-white/10
                bg-gradient-to-br
                from-fuchsia-500/20
                to-violet-600/20
                shadow-[0_0_80px_rgba(168,85,247,0.4)]
              "
            >
              <div className="absolute inset-0 animate-ping rounded-full bg-fuchsia-500/10" />

              <WifiOff className="relative z-10 h-16 w-16 text-fuchsia-300" />
            </div>
          </div>

          {/* Heading */}
          <div className="mt-10 text-center">
            <h1
              className="
                bg-gradient-to-r
                from-white
                via-fuchsia-200
                to-violet-300
                bg-clip-text
                text-5xl font-black
                tracking-tight
                text-transparent
                md:text-7xl
              "
            >
              You’re Offline
            </h1>

            <p
              className="
                mx-auto mt-5
                max-w-xl
                text-base leading-7
                text-zinc-300
                md:text-lg
              "
            >
              Your internet connection appears to be unavailable right now.
              Please check your network settings or reconnect to continue
              browsing.
            </p>
          </div>

          {/* Status Cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {/* Card 1 */}
            <div
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                p-5
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              <div
                className="
                  mb-4 flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-fuchsia-500/15
                "
              >
                <AlertTriangle className="h-6 w-6 text-fuchsia-300" />
              </div>

              <h3 className="text-lg font-semibold">
                Connection Lost
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Your device cannot reach the internet. This may happen due to
                weak signal or router issues.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                p-5
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              <div
                className="
                  mb-4 flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-violet-500/15
                "
              >
                <RefreshCcw className="h-6 w-6 text-violet-300" />
              </div>

              <h3 className="text-lg font-semibold">
                Try Refreshing
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Once your connection is restored, refresh the page to continue
                where you left off.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                p-5
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              <div
                className="
                  mb-4 flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-emerald-500/15
                "
              >
                <ShieldCheck className="h-6 w-6 text-emerald-300" />
              </div>

              <h3 className="text-lg font-semibold">
                Secure Session
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Your local data remains safe while waiting for the network to
                reconnect.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              className="
                flex items-center gap-2
                rounded-2xl
                bg-gradient-to-r
                from-fuchsia-600
                to-violet-600
                px-6 py-3
                text-sm font-semibold
                text-white
                shadow-lg shadow-fuchsia-900/30
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-fuchsia-700/40
                active:scale-[0.98]
              "
            >
              <RefreshCcw className="h-4 w-4" />
              Retry Connection
            </button>

            <button
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                px-6 py-3
                text-sm font-semibold
                text-zinc-200
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              Open Network Settings
            </button>
          </div>

          {/* Footer */}
          <div className="mt-12 border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-zinc-500">
              Waiting for internet connection...
            </p>

            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                Offline Mode
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}