"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 mt-6 shadow-lg">
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full transition"
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <div className="flex-1">
          <p className="text-white text-sm font-medium">
            🎧 Listen to this article
          </p>
          <p className="text-xs text-neutral-400">
            Audio version for better retention & accessibility
          </p>
        </div>
      </div>

      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
}