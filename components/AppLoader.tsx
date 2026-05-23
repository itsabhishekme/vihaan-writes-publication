"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  loading: boolean;
};

export default function AppLoader({
  loading,
}: Props) {
  return (
    <AnimatePresence>

      {loading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="
            fixed inset-0 z-[99999]
            flex items-center justify-center
            overflow-hidden
            bg-[#12061f]
          "
        >
          {/* BACKGROUND GLOW */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

          {/* FLOATING PARTICLES */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[500px]
              w-[500px]
              rounded-full
              border border-white/5
            "
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[350px]
              w-[350px]
              rounded-full
              border border-violet-400/10
            "
          />

          {/* LOGO CONTAINER */}

          <motion.div
            initial={{
              scale: 0.6,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* OUTER GLOW */}

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute inset-0
                rounded-full
                bg-violet-500/30
                blur-3xl
              "
            />

            {/* ROTATING RING */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                -inset-10
                rounded-full
                border-t border-violet-400/40
                border-r border-transparent
                border-b border-violet-200/20
                border-l border-transparent
              "
            />

            {/* SECOND RING */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                -inset-16
                rounded-full
                border border-white/5
              "
            />

            {/* LOGO */}

            <motion.img
              src="/logo.png"
              alt="Logo"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                relative z-10
                h-40 w-40
                object-contain
                drop-shadow-[0_20px_60px_rgba(139,92,246,0.45)]
              "
            />

            {/* SHIMMER */}

            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="
                absolute inset-0
                skew-x-12
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
              "
            />
          </motion.div>

          {/* TEXT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="
              absolute bottom-24
              text-center
            "
          >
            <h1
              className="
                text-3xl
                font-black
                tracking-[0.4em]
                text-white
              "
            >
              VIHAAN
            </h1>

            <p
              className="
                mt-3
                text-sm
                tracking-[0.6em]
                text-violet-300/70
              "
            >
              WRITES
            </p>
          </motion.div>
        </motion.div>
      )}

    </AnimatePresence>
  );
}