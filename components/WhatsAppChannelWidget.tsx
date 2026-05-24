'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function WhatsAppChannelWidget() {
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
      {/* MAIN WRAPPER */}
      <div
        style={{
          position: 'fixed',
          right: isMobile ? '16px' : '26px',
          bottom: isMobile ? '100px' : '110px',
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
              : 'translateX(16px) scale(0.94)',

            transition:
              'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',

            background:
              'linear-gradient(145deg, rgba(0,0,0,0.96), rgba(16,16,16,0.94))',

            border:
              '1px solid rgba(255,255,255,0.08)',

            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',

            borderRadius: '24px',

            padding: isMobile
              ? '12px 16px'
              : '16px 20px',

            overflow: 'hidden',

            boxShadow:
              '0 30px 90px rgba(0,0,0,0.75)',

            whiteSpace: 'nowrap',
          }}
        >
          {/* WHITE SHINE */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.08), transparent 80%)',
              transform: 'translateX(-100%)',
              animation: 'shineMove 5s infinite',
            }}
          />

          {/* CONTENT */}
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
              Join Vihaan Channel
            </div>

            <div
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.65)',
                letterSpacing: '0.2px',
                lineHeight: 1.5,
              }}
            >
              Daily updates, quotes & podcasts
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <a
          href="https://whatsapp.com/channel/0029Vb7t18Z9cDDiPLC51900"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join WhatsApp Channel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'relative',

            /* SAME SIZE */
            width: isMobile ? '62px' : '72px',
            height: isMobile ? '62px' : '72px',

            borderRadius: '9999px',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            overflow: 'hidden',

            textDecoration: 'none',

            background:
              'linear-gradient(145deg, #000000 0%, #111111 45%, #1d1d1d 100%)',

            border:
              '1px solid rgba(255,255,255,0.12)',

            transform: isHovered
              ? 'translateY(-5px) scale(1.03)'
              : 'translateY(0px) scale(1)',

            transition:
              'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',

            boxShadow: isHovered
              ? '0 28px 80px rgba(255,255,255,0.12)'
              : '0 18px 48px rgba(0,0,0,0.75)',

            animation: 'floatingButton 4s ease-in-out infinite',
          }}
        >
          {/* OUTER WHITE GLOW */}
          <div
            style={{
              position: 'absolute',
              inset: '-8px',
              borderRadius: '9999px',
              background:
                'radial-gradient(circle, rgba(255,255,255,0.10), transparent 72%)',
              filter: 'blur(18px)',
              zIndex: 0,
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
                'linear-gradient(to bottom, rgba(255,255,255,0.18), transparent)',
            }}
          />

          {/* PULSE RING */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '9999px',
              border:
                '1px solid rgba(255,255,255,0.14)',
              animation: 'pulsePrimary 2.8s infinite',
            }}
          />

          {/* SECOND RING */}
          <div
            style={{
              position: 'absolute',
              inset: '-5px',
              borderRadius: '9999px',
              border:
                '1px solid rgba(255,255,255,0.08)',
              animation: 'pulseSecondary 3.8s infinite',
            }}
          />

          {/* ROTATING LIGHT */}
          <div
            style={{
              position: 'absolute',
              inset: '-30%',
              borderRadius: '50%',
              background:
                'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.20), transparent)',
              animation: 'rotateLight 6s linear infinite',
              opacity: 0.5,
            }}
          />

          {/* ICON */}
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={36}
            height={36}
            unoptimized
            style={{
              width: isMobile ? '30px' : '36px',
              height: isMobile ? '30px' : '36px',

              position: 'relative',
              zIndex: 5,

              filter:
                'brightness(0) invert(1) drop-shadow(0 0 10px rgba(255,255,255,0.25))',
            }}
          />

          {/* LIVE DOT */}
          <div
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',

              width: '10px',
              height: '10px',

              borderRadius: '9999px',

              background: '#ffffff',

              boxShadow:
                '0 0 16px rgba(255,255,255,0.95)',

              animation: 'livePulse 1.6s infinite',

              zIndex: 6,
            }}
          />
        </a>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes pulsePrimary {
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

        @keyframes pulseSecondary {
          0% {
            transform: scale(1);
            opacity: 0.28;
          }

          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        @keyframes floatingButton {
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

        @keyframes livePulse {
          0% {
            opacity: 1;
          }

          50% {
            opacity: 0.35;
          }

          100% {
            opacity: 1;
          }
        }

        @keyframes shineMove {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(120%);
          }
        }

        @keyframes rotateLight {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}