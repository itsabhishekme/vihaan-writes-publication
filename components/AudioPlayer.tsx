"use client";

import { useRef, useState, useEffect } from "react";

import {
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

/* ================= TYPES ================= */

interface AudioPlayerProps {
  src: string;
}

/* ================= COMPONENT ================= */

export default function AudioPlayer({
  src,
}: AudioPlayerProps) {

  const audioRef =
    useRef<HTMLAudioElement>(null);

  const progressRef =
    useRef<HTMLInputElement>(null);

  const [playing, setPlaying] =
    useState(false);

  const [muted, setMuted] =
    useState(false);

  const [duration, setDuration] =
    useState(0);

  const [currentTime, setCurrentTime] =
    useState(0);

  /* ================= PLAY / PAUSE ================= */

  const togglePlay = async () => {

    if (!audioRef.current) return;

    try {

      if (playing) {

        audioRef.current.pause();

      } else {

        await audioRef.current.play();

      }

      setPlaying(!playing);

    } catch (error) {

      console.error(
        "Audio playback failed:",
        error
      );
    }
  };

  /* ================= MUTE ================= */

  const toggleMute = () => {

    if (!audioRef.current) return;

    audioRef.current.muted =
      !audioRef.current.muted;

    setMuted(audioRef.current.muted);
  };

  /* ================= PROGRESS ================= */

  const handleTimeUpdate = () => {

    if (!audioRef.current) return;

    setCurrentTime(
      audioRef.current.currentTime
    );
  };

  const handleLoadedMetadata = () => {

    if (!audioRef.current) return;

    setDuration(
      audioRef.current.duration
    );
  };

  const handleSeek = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    if (!audioRef.current) return;

    const time = Number(e.target.value);

    audioRef.current.currentTime = time;

    setCurrentTime(time);
  };

  /* ================= FORMAT ================= */

  const formatTime = (
    time: number
  ) => {

    if (!time) return "0:00";

    const minutes =
      Math.floor(time / 60);

    const seconds =
      Math.floor(time % 60);

    return `${minutes}:${
      seconds < 10
        ? "0"
        : ""
    }${seconds}`;
  };

  /* ================= END ================= */

  useEffect(() => {

    const audio =
      audioRef.current;

    if (!audio) return;

    const handleEnded = () => {

      setPlaying(false);

      setCurrentTime(0);
    };

    audio.addEventListener(
      "ended",
      handleEnded
    );

    return () => {

      audio.removeEventListener(
        "ended",
        handleEnded
      );
    };

  }, []);

  return (

    <div
      className="
      relative
      overflow-hidden
      rounded-[2rem]
      border
      border-white/10
      bg-gradient-to-br
      from-white/5
      via-white/[0.03]
      to-transparent
      p-6
      backdrop-blur-2xl
      shadow-2xl
    "
    >

      {/* GLOW */}

      <div
        className="
        absolute
        -top-20
        right-0
        h-60
        w-60
        rounded-full
        bg-indigo-500/10
        blur-3xl
      "
      />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* TOP */}

        <div className="flex items-center gap-5">

          {/* PLAY BUTTON */}

          <button
            type="button"
            onClick={togglePlay}
            className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-indigo-500
            to-purple-500
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-110
            active:scale-95
          "
          >

            {playing ? (

              <Pause size={24} />

            ) : (

              <Play
                size={24}
                className="ml-1"
              />

            )}

          </button>

          {/* TEXT */}

          <div className="flex-1">

            <div className="flex items-center gap-2">

              <span
                className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/10
                bg-white/5
                px-3
                py-1
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-neutral-300
              "
              >

                Audio Experience

              </span>

            </div>

            <h3
              className="
              mt-3
              text-lg
              font-bold
              text-white
            "
            >

              Listen to this Reflection

            </h3>

            <p
              className="
              mt-1
              text-sm
              leading-relaxed
              text-neutral-400
            "
            >

              Immerse yourself in the emotional narration
              and experience the story in a deeper way.

            </p>

          </div>

          {/* MUTE */}

          <button
            type="button"
            onClick={toggleMute}
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-neutral-300
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
          "
          >

            {muted ? (

              <VolumeX size={18} />

            ) : (

              <Volume2 size={18} />

            )}

          </button>

        </div>

        {/* PROGRESS */}

        <div className="mt-8">

          <input
            ref={progressRef}
            type="range"
            min={0}
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="
            h-2
            w-full
            cursor-pointer
            appearance-none
            rounded-full
            bg-white/10
          "
          />

          {/* TIME */}

          <div
            className="
            mt-3
            flex
            items-center
            justify-between
            text-xs
            text-neutral-500
          "
          >

            <span>

              {formatTime(currentTime)}

            </span>

            <span>

              {formatTime(duration)}

            </span>

          </div>

        </div>

      </div>

      {/* AUDIO */}

      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={
          handleLoadedMetadata
        }
      />

    </div>
  );
}