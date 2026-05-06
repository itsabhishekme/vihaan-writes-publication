'use client'

import { useEffect, useState } from 'react'

export default function SpotifyPodcastWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!isMounted) return null

  return (
    <>
      {/* 🎧 SPOTIFY FLOATING BUTTON */}
      <div
        style={{
          position: 'fixed',
          right: isMobile ? '16px' : '24px',
          bottom: isMobile ? '20px' : '24px',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {/* ✨ TOOLTIP */}
        <div
          style={{
            opacity: isHovered ? 1 : 0,
            visibility: isHovered ? 'visible' : 'hidden',

            transform: isHovered
              ? 'translateX(0px) scale(1)'
              : 'translateX(12px) scale(0.95)',

            transition:
              'opacity 0.35s ease, transform 0.35s ease, visibility 0.35s',

            background: 'rgba(15,15,15,0.75)',

            border:
              '1px solid rgba(255,255,255,0.08)',

            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',

            color: '#ffffff',

            padding: isMobile
              ? '10px 14px'
              : '14px 18px',

            borderRadius: '18px',

            whiteSpace: 'nowrap',

            boxShadow:
              '0 12px 50px rgba(0,0,0,0.35)',

            overflow: 'hidden',

            position: 'relative',
          }}
        >
          {/* 🌈 SHINE */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.08), transparent)',
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
                fontSize: '14px',
                fontWeight: 700,
                marginBottom: '2px',
                letterSpacing: '0.2px',
              }}
            >
              Vihaan Podcast
            </div>

            <div
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              Listen on Spotify
            </div>
          </div>
        </div>

        {/* 🎵 BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Spotify Podcast"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'relative',

            width: isMobile ? '64px' : '74px',
            height: isMobile ? '64px' : '74px',

            borderRadius: '9999px',

            border:
              '1px solid rgba(255,255,255,0.14)',

            background:
              'linear-gradient(135deg, #1DB954 0%, #1ed760 100%)',

            cursor: 'pointer',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            overflow: 'hidden',

            boxShadow:
              '0 18px 50px rgba(29,185,84,0.42)',

            transition:
              'transform 0.35s ease, box-shadow 0.35s ease',
          }}
        >
          {/* ✨ GLOW */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at top left, rgba(255,255,255,0.35), transparent 60%)',
            }}
          />

          {/* 🔄 PULSE */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '9999px',
              border:
                '2px solid rgba(255,255,255,0.2)',
              animation: 'spotifyPulse 2.5s infinite',
            }}
          />

          {/* 🎧 ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            width={isMobile ? '30' : '36'}
            height={isMobile ? '30' : '36'}
            fill="#000000"
            style={{
              position: 'relative',
              zIndex: 2,
              filter:
                'drop-shadow(0 2px 10px rgba(0,0,0,0.25))',
            }}
          >
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm101.7 365.4c-4 6.5-12.5 8.5-19 4.5-52.3-32-118-39.2-195.3-21.5-7.3 1.7-14.5-2.9-16.2-10.2-1.7-7.3 2.9-14.5 10.2-16.2 84.3-19.3 156.7-11.1 215.7 25.1 6.5 4 8.5 12.5 4.6 18.3zm27.1-60.3c-5 8.2-15.7 10.8-23.9 5.8-59.9-36.8-151.2-47.5-222-26-9.2 2.8-18.9-2.4-21.7-11.6-2.8-9.2 2.4-18.9 11.6-21.7 81.2-24.6 182-12.7 250.3 30.1 8.1 5 10.7 15.7 5.7 23.4zm2.3-62.8C307.4 207.7 189 204.5 123.8 224c-11 3.3-22.6-2.9-25.9-13.9-3.3-11 2.9-22.6 13.9-25.9 74.8-22.3 206.1-18 286.7 35.3 9.5 6.3 12.1 19.1 5.8 28.6-6.1 9.4-18.9 12-28.2 5.8z" />
          </svg>

          {/* 🟢 ACTIVE DOT */}
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
                '0 0 12px rgba(255,255,255,0.9)',

              zIndex: 3,
            }}
          />
        </button>
      </div>

      {/* 🎵 PLAYER */}
      <div
        style={{
          position: 'fixed',

          right: isMobile ? '14px' : '24px',

          bottom: isOpen
            ? isMobile
              ? '95px'
              : '110px'
            : '60px',

          width: isMobile
            ? 'calc(100vw - 28px)'
            : '390px',

          maxWidth: '390px',

          zIndex: 999998,

          opacity: isOpen ? 1 : 0,

          visibility: isOpen ? 'visible' : 'hidden',

          transform: isOpen
            ? 'translateY(0px) scale(1)'
            : 'translateY(30px) scale(0.92)',

          transition:
            'opacity 0.4s ease, transform 0.4s ease, visibility 0.4s',

          borderRadius: '28px',

          overflow: 'hidden',

          background: 'rgba(8,8,8,0.76)',

          border:
            '1px solid rgba(255,255,255,0.08)',

          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',

          boxShadow:
            '0 30px 90px rgba(0,0,0,0.55)',
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            background:
              'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',

            borderBottom:
              '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div>
            <div
              style={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '15px',
                marginBottom: '3px',
              }}
            >
              Vihaan Writes Podcast
            </div>

            <div
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: '12px',
              }}
            >
              Stream on Spotify
            </div>
          </div>

          {/* CLOSE */}
          <button
            onClick={() => setIsOpen(false)}
            style={{
              width: '36px',
              height: '36px',

              borderRadius: '9999px',

              border: 'none',

              background:
                'rgba(255,255,255,0.06)',

              color: '#ffffff',

              fontSize: '18px',

              cursor: 'pointer',
            }}
          >
            ×
          </button>
        </div>

        {/* IFRAME */}
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
          }}
        />
      </div>

      {/* 🎨 ANIMATIONS */}
      <style jsx>{`
        @keyframes spotifyPulse {
          0% {
            transform: scale(1);
            opacity: 0.65;
          }

          70% {
            transform: scale(1.6);
            opacity: 0;
          }

          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}