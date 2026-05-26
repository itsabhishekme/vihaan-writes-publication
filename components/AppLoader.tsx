"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  loading: boolean;
};

/* STABLE PARTICLES */

const particles = Array.from(
  { length: 20 },
  (_, i) => ({
    id: i,
    left: `${(i * 5 + 7) % 100}%`,
    duration: 4 + i * 0.2,
    delay: i * 0.3,
  })
);

export default function AppLoader({
  loading,
}: Props) {
  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="
            fixed inset-0 z-[99999]
            flex items-center justify-center
            overflow-hidden
            bg-[#07010f]
          "
        >
          {/* BACKGROUND */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_65%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]" />

          {/* GRID */}

          <div
            className="
              absolute inset-0
              opacity-[0.05]
              bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
              bg-[size:80px_80px]
            "
          />

          {/* TOP GLOW */}

          <motion.div
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -30, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              top-20 left-20
              h-72 w-72
              rounded-full
              bg-violet-500/20
              blur-[120px]
            "
          />

          {/* BOTTOM GLOW */}

          <motion.div
            animate={{
              x: [0, -60, 40, 0],
              y: [0, 40, -20, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-10 right-10
              h-80 w-80
              rounded-full
              bg-fuchsia-500/20
              blur-[140px]
            "
          />

          {/* FLOATING PARTICLES */}

          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              animate={{
                y: [-20, -120],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeOut",
              }}
              className="
                absolute
                h-2 w-2
                rounded-full
                bg-violet-300/60
              "
              style={{
                left: particle.left,
                bottom: "-20px",
              }}
            />
          ))}

          {/* OUTER RING */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[700px]
              w-[700px]
              rounded-full
              border border-white/[0.04]
            "
          />

          {/* SECOND RING */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[520px]
              w-[520px]
              rounded-full
              border border-violet-400/10
            "
          />

          {/* MAIN CONTAINER */}

          <motion.div
            initial={{
              scale: 0.7,
              opacity: 0,
              y: 40,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="
              relative
              flex flex-col items-center
            "
          >
            {/* PULSE WAVES */}

            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.8],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  h-72 w-72
                  rounded-full
                  border border-violet-400/20
                "
              />
            ))}

            {/* CENTER GLOW */}

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute inset-0
                rounded-full
                bg-violet-500/30
                blur-[100px]
              "
            />

            {/* GLASS CARD */}

            <div
              className="
                relative
                flex items-center justify-center
                rounded-full
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                p-10
                shadow-[0_0_120px_rgba(139,92,246,0.25)]
              "
            >
              {/* SPINNING BORDER */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[-20px]
                  rounded-full
                  border-t border-violet-300/50
                  border-r border-transparent
                  border-b border-fuchsia-400/20
                  border-l border-transparent
                "
              />

              {/* LOGO */}

              <motion.img
                src="/logo.png"
                alt="Logo"
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotateY: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                  },
                }}
                className="
                  relative z-10
                  h-40 w-40
                  object-contain
                  drop-shadow-[0_25px_80px_rgba(168,85,247,0.7)]
                "
              />

              {/* SHIMMER */}

              <motion.div
                animate={{
                  x: ["-150%", "250%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="
                  absolute inset-0
                  skew-x-12
                  rounded-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                "
              />
            </div>

            {/* BRAND */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              className="
                mt-16
                text-center
              "
            >
              <motion.h1
                animate={{
                  letterSpacing: [
                    "0.3em",
                    "0.45em",
                    "0.3em",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  text-5xl
                  font-black
                  uppercase
                  text-white
                "
              >
                VIHAAN
              </motion.h1>

              <motion.p
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  mt-4
                  text-sm
                  tracking-[1em]
                  text-violet-300/80
                "
              >
                WRITES
              </motion.p>
            </motion.div>

            {/* LOADING BAR */}

            <div
              className="
                relative mt-12
                h-[3px]
                w-[260px]
                overflow-hidden
                rounded-full
                bg-white/10
              "
            >
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-violet-400
                  to-transparent
                "
              />
            </div>

            {/* TEXT */}

            <motion.p
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                mt-5
                text-xs
                tracking-[0.5em]
                text-white/40
                text-center
              "
            >
              AWAKENING THE WRITTEN UNIVERSE
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}