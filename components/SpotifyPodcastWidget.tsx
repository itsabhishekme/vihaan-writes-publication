'use client'

import { useEffect, useState } from 'react'

export default function SpotifyPodcastWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* MAIN CONTAINER */}
      <div
        style={{
          position: 'fixed',
          right: isMobile ? '16px' : '28px',
          bottom: isMobile ? '20px' : '28px',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          gap: '18px',
        }}
      >
        {/* TOOLTIP */}
        <div
          style={{
            position: 'relative',

            opacity: isHovered ? 1 : 0,
            visibility: isHovered ? 'visible' : 'hidden',

            transform: isHovered
              ? 'translateX(0px) scale(1)'
              : 'translateX(14px) scale(0.92)',

            transition:
              'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',

            background:
              'linear-gradient(135deg, rgba(20,20,20,0.88), rgba(8,8,8,0.75))',

            border: '1px solid rgba(255,255,255,0.08)',

            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',

            borderRadius: '22px',

            padding: isMobile
              ? '12px 16px'
              : '15px 20px',

            overflow: 'hidden',

            boxShadow:
              '0 25px 80px rgba(0,0,0,0.45)',

            whiteSpace: 'nowrap',
          }}
        >
          {/* ANIMATED GRADIENT */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(29,185,84,0.14), transparent, rgba(255,255,255,0.04))',
              animation: 'gradientFlow 5s linear infinite',
            }}
          />

          {/* SHINE */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.12), transparent 80%)',
              transform: 'translateX(-100%)',
              animation: 'shine 5s infinite',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div
              style={{
                fontSize: '15px',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '4px',
                letterSpacing: '0.3px',
              }}
            >
              Vihaan Podcast
            </div>

            <div
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.65)',
                letterSpacing: '0.2px',
              }}
            >
              Listen now on Spotify
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Open Spotify Podcast"
          style={{
            position: 'relative',

            /* SAME SIZE */
            width: isMobile ? '64px' : '74px',
            height: isMobile ? '64px' : '74px',

            borderRadius: '9999px',

            border: '1px solid rgba(255,255,255,0.12)',

            background:
              'linear-gradient(145deg, #1DB954 0%, #1ed760 40%, #0f8f42 100%)',

            cursor: 'pointer',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            overflow: 'hidden',

            transform: isHovered
              ? 'translateY(-4px) scale(1.03)'
              : 'translateY(0px) scale(1)',

            transition:
              'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',

            boxShadow: isHovered
              ? '0 25px 70px rgba(29,185,84,0.55)'
              : '0 18px 50px rgba(29,185,84,0.38)',

            animation: 'floating 4s ease-in-out infinite',
          }}
        >
          {/* OUTER GLOW */}
          <div
            style={{
              position: 'absolute',
              inset: '-8px',
              borderRadius: '9999px',
              background:
                'radial-gradient(circle, rgba(29,185,84,0.35), transparent 70%)',
              filter: 'blur(18px)',
              zIndex: 0,
            }}
          />

          {/* GLASS REFLECTION */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '45%',
              borderRadius: '9999px',
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.32), transparent)',
            }}
          />

          {/* PULSE RING */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '9999px',
              border: '2px solid rgba(255,255,255,0.18)',
              animation: 'pulseRing 2.6s infinite',
            }}
          />

          {/* SECOND RING */}
          <div
            style={{
              position: 'absolute',
              inset: '-6px',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.08)',
              animation: 'pulseRing2 3.6s infinite',
            }}
          />

          {/* ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            width={isMobile ? '30' : '36'}
            height={isMobile ? '30' : '36'}
            fill="#000"
            style={{
              position: 'relative',
              zIndex: 5,
              filter:
                'drop-shadow(0 4px 12px rgba(0,0,0,0.25))',
            }}
          >
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm101.7 365.4c-4 6.5-12.5 8.5-19 4.5-52.3-32-118-39.2-195.3-21.5-7.3 1.7-14.5-2.9-16.2-10.2-1.7-7.3 2.9-14.5 10.2-16.2 84.3-19.3 156.7-11.1 215.7 25.1 6.5 4 8.5 12.5 4.6 18.3zm27.1-60.3c-5 8.2-15.7 10.8-23.9 5.8-59.9-36.8-151.2-47.5-222-26-9.2 2.8-18.9-2.4-21.7-11.6-2.8-9.2 2.4-18.9 11.6-21.7 81.2-24.6 182-12.7 250.3 30.1 8.1 5 10.7 15.7 5.7 23.4zm2.3-62.8C307.4 207.7 189 204.5 123.8 224c-11 3.3-22.6-2.9-25.9-13.9-3.3-11 2.9-22.6 13.9-25.9 74.8-22.3 206.1-18 286.7 35.3 9.5 6.3 12.1 19.1 5.8 28.6-6.1 9.4-18.9 12-28.2 5.8z" />
          </svg>

          {/* LIVE DOT */}
          <div
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',

              width: '12px',
              height: '12px',

              borderRadius: '9999px',

              background: '#ffffff',

              boxShadow:
                '0 0 18px rgba(255,255,255,0.95)',

              animation: 'liveBlink 1.6s infinite',

              zIndex: 10,
            }}
          />
        </button>
      </div>

      {/* PLAYER */}
      <div
        style={{
          position: 'fixed',

          right: isMobile ? '14px' : '28px',

          bottom: isOpen
            ? isMobile
              ? '100px'
              : '118px'
            : '50px',

          width: isMobile
            ? 'calc(100vw - 28px)'
            : '410px',

          maxWidth: '410px',

          borderRadius: '32px',

          overflow: 'hidden',

          zIndex: 999998,

          opacity: isOpen ? 1 : 0,

          visibility: isOpen ? 'visible' : 'hidden',

          transform: isOpen
            ? 'translateY(0px) scale(1)'
            : 'translateY(35px) scale(0.9)',

          transition:
            'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',

          background:
            'linear-gradient(145deg, rgba(10,10,10,0.92), rgba(20,20,20,0.72))',

          border: '1px solid rgba(255,255,255,0.08)',

          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',

          boxShadow:
            '0 40px 120px rgba(0,0,0,0.65)',
        }}
      >
        {/* TOP GLOW */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '120px',
            background:
              'linear-gradient(to bottom, rgba(29,185,84,0.12), transparent)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        <iframe
          src="https://open.spotify.com/embed/show/41IpFA5SUvPrT8ALlHUnr4?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{
            border: 'none',
            display: 'block',
            background: '#121212',
            position: 'relative',
            zIndex: 2,
          }}
        />
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.55;
          }

          70% {
            transform: scale(1.45);
            opacity: 0;
          }

          100% {
            transform: scale(1.45);
            opacity: 0;
          }
        }

        @keyframes pulseRing2 {
          0% {
            transform: scale(1);
            opacity: 0.35;
          }

          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        @keyframes floating {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-6px);
          }

          100% {
            transform: translateY(0px);
          }
        }

        @keyframes liveBlink {
          0% {
            opacity: 1;
          }

          50% {
            opacity: 0.45;
          }

          100% {
            opacity: 1;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(120%);
          }
        }

        @keyframes gradientFlow {
          0% {
            transform: translateX(-10%);
          }

          50% {
            transform: translateX(10%);
          }

          100% {
            transform: translateX(-10%);
          }
        }
      `}</style>
    </>
  )
}