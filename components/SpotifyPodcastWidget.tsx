'use client'

import React, {
  useEffect,
  useRef,
  useState,
} from 'react'

export default function SpotifyPodcastWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const dragging = useRef(false)

  const offset = useRef({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      )
    }
  }, [])

  const startDrag = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    dragging.current = true

    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    }
  }

  const onDrag = (e: MouseEvent) => {
    if (!dragging.current) return

    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    })
  }

  const stopDrag = () => {
    dragging.current = false
  }

  useEffect(() => {
    window.addEventListener('mousemove', onDrag)

    window.addEventListener('mouseup', stopDrag)

    return () => {
      window.removeEventListener(
        'mousemove',
        onDrag
      )

      window.removeEventListener(
        'mouseup',
        stopDrag
      )
    }
  }, [])

  return (
    <>
      {/* MAIN CONTAINER */}
      <div
        style={{
          position: 'fixed',
          right: isMobile ? '18px' : '28px',
          bottom: isMobile ? '22px' : '28px',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          gap: '18px',
          transform: `translate(${position.x}px, ${position.y}px)`,
          cursor: 'grab',
        }}
        onMouseDown={startDrag}
      >
        {/* TOOLTIP */}
        <div
          style={{
            position: 'relative',

            opacity: isHovered ? 1 : 0,
            visibility: isHovered
              ? 'visible'
              : 'hidden',

            transform: isHovered
              ? 'translateX(0px) scale(1)'
              : 'translateX(14px) scale(0.94)',

            transition:
              'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',

            background:
              'linear-gradient(145deg, rgba(0,0,0,0.98), rgba(18,18,18,0.96))',

            border:
              '1px solid rgba(255,255,255,0.08)',

            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter:
              'blur(24px)',

            borderRadius: '24px',

            padding: isMobile
              ? '12px 16px'
              : '15px 22px',

            overflow: 'hidden',

            boxShadow:
              '0 25px 80px rgba(0,0,0,0.75)',

            whiteSpace: 'nowrap',
          }}
        >
          {/* SHINE */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.06), transparent 70%)',
              transform: 'translateX(-100%)',
              animation:
                'shine 5s infinite',
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
                letterSpacing: '0.4px',
              }}
            >
              Vihaan Podcast
            </div>

            <div
              style={{
                fontSize: '12px',
                color:
                  'rgba(255,255,255,0.55)',
              }}
            >
              Listen on Spotify
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          onMouseEnter={() =>
            setIsHovered(true)
          }
          onMouseLeave={() =>
            setIsHovered(false)
          }
          aria-label="Spotify Podcast"
          style={{
            position: 'relative',

            width: isMobile
              ? '64px'
              : '74px',

            height: isMobile
              ? '64px'
              : '74px',

            borderRadius: '9999px',

            border:
              '1px solid rgba(255,255,255,0.12)',

            background:
              'linear-gradient(145deg, #000000 0%, #111111 45%, #1d1d1d 100%)',

            cursor: 'pointer',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            overflow: 'hidden',

            transform: isHovered
              ? 'translateY(-4px) scale(1.04)'
              : 'translateY(0px) scale(1)',

            transition:
              'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',

            boxShadow: isHovered
              ? '0 24px 60px rgba(255,255,255,0.12)'
              : '0 18px 45px rgba(0,0,0,0.75)',

            animation:
              'floating 4s ease-in-out infinite',
          }}
        >
          {/* OUTER GLOW */}
          <div
            style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '9999px',
              background:
                'radial-gradient(circle, rgba(255,255,255,0.12), transparent 72%)',
              filter: 'blur(20px)',
            }}
          />

          {/* TOP SHINE */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '45%',
              borderRadius: '9999px',
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.16), transparent)',
            }}
          />

          {/* PULSE */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '9999px',
              border:
                '1px solid rgba(255,255,255,0.12)',
              animation:
                'pulseRing 2.8s infinite',
            }}
          />

          {/* SPOTIFY ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            width={
              isMobile ? '30' : '36'
            }
            height={
              isMobile ? '30' : '36'
            }
            fill="#ffffff"
            style={{
              position: 'relative',
              zIndex: 5,
              filter:
                'drop-shadow(0 0 12px rgba(255,255,255,0.18))',
            }}
          >
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm101.7 365.4c-4 6.5-12.5 8.5-19 4.5-52.3-32-118-39.2-195.3-21.5-7.3 1.7-14.5-2.9-16.2-10.2-1.7-7.3 2.9-14.5 10.2-16.2 84.3-19.3 156.7-11.1 215.7 25.1 6.5 4 8.5 12.5 4.6 18.3zm27.1-60.3c-5 8.2-15.7 10.8-23.9 5.8-59.9-36.8-151.2-47.5-222-26-9.2 2.8-18.9-2.4-21.7-11.6-2.8-9.2 2.4-18.9 11.6-21.7 81.2-24.6 182-12.7 250.3 30.1 8.1 5 10.7 15.7 5.7 23.4zm2.3-62.8C307.4 207.7 189 204.5 123.8 224c-11 3.3-22.6-2.9-25.9-13.9-3.3-11 2.9-22.6 13.9-25.9 74.8-22.3 206.1-18 286.7 35.3 9.5 6.3 12.1 19.1 5.8 28.6-6.1 9.4-18.9 12-28.2 5.8z" />
          </svg>
        </button>
      </div>

      {/* PLAYER */}
      <div
        style={{
          position: 'fixed',

          right: isMobile
            ? '14px'
            : '28px',

          bottom: isOpen
            ? isMobile
              ? '102px'
              : '118px'
            : '40px',

          width: isMobile
            ? 'calc(100vw - 28px)'
            : '430px',

          maxWidth: '430px',

          borderRadius: '36px',

          overflow: 'hidden',

          zIndex: 999998,

          opacity: isOpen ? 1 : 0,

          visibility: isOpen
            ? 'visible'
            : 'hidden',

          transform: isOpen
            ? 'translateY(0px) scale(1)'
            : 'translateY(30px) scale(0.92)',

          transition:
            'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',

          background:
            'linear-gradient(145deg, rgba(0,0,0,0.99), rgba(18,18,18,0.98))',

          border:
            '1px solid rgba(255,255,255,0.08)',

          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter:
            'blur(30px)',

          boxShadow:
            '0 45px 140px rgba(0,0,0,0.92)',

          padding: '20px',
        }}
      >
        <div
          style={{
            width: '100%',
            borderRadius: '26px',
            overflow: 'hidden',
            background: '#000',
            position: 'relative',
            zIndex: 2,
            minHeight: '372px',
          }}
        >
          <iframe
            src="https://open.spotify.com/embed/show/41IpFA5SUvPrT8ALlHUnr4?utm_source=generator&theme=0"
            width="100%"
            height="372"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{
              border: 'none',
              display: 'block',
              width: '100%',
              background: '#000000',
            }}
          />
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.45;
          }

          70% {
            transform: scale(1.38);
            opacity: 0;
          }

          100% {
            transform: scale(1.38);
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

        @keyframes shine {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(120%);
          }
        }
      `}</style>
    </>
  )
}4