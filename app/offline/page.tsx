export default function OfflinePage() {
  return (
    <main
      className="
        flex min-h-screen
        items-center justify-center
        bg-[#14001f]
        text-white
      "
    >
      <div className="text-center">

        <h1 className="text-5xl font-black">
          Offline
        </h1>

        <p className="mt-4 text-zinc-300">
          Internet connection lost.
        </p>

      </div>
    </main>
  )
}