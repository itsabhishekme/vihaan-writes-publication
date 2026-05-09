'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function WhatsAppChannelWidget() {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreen()

    window.addEventListener('resize', checkScreen)

    return () => {
      window.removeEventListener('resize', checkScreen)
    }
  }, [])

  return (
    <>
      <div
        style={{
          position: 'fixed',
          right: isMobile ? '16px' : '24px',
          bottom: isMobile ? '100px' : '110px',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {/* TOOLTIP */}
        <div
          style={{
            opacity: isHovered ? 1 : 0,
            visibility: isHovered ? 'visible' : 'hidden',
            transform: isHovered
              ? 'translateX(0px) scale(1)'
              : 'translateX(14px) scale(0.96)',
            transition:
              'opacity 0.35s ease, transform 0.35s ease, visibility 0.35s',
            background: 'rgba(10,10,10,0.72)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(22px)',
            WebkitBackdropFilter: 'blur(22px)',
            color: '#ffffff',
            padding: isMobile ? '10px 14px' : '14px 18px',
            borderRadius: '18px',
            boxShadow: '0 12px 50px rgba(0,0,0,0.35)',
            whiteSpace: 'nowrap',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* BACKGROUND SHINE */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.08), transparent)',
              pointerEvents: 'none',
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
              Join Vihaan Channel
            </div>

            <div
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.65)',
                letterSpacing: '0.2px',
              }}
            >
              Daily updates, quotes & podcasts
            </div>
          </div>
        </div>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://whatsapp.com/channel/0029Vb7t18Z9cDDiPLC51900"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join WhatsApp Channel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'relative',
            width: isMobile ? '62px' : '72px',
            height: isMobile ? '62px' : '72px',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background:
              'linear-gradient(135deg, #25D366 0%, #1ebe5d 100%)',
            border: '1px solid rgba(255,255,255,0.14)',
            cursor: 'pointer',
            overflow: 'hidden',
            textDecoration: 'none',
            boxShadow: '0 18px 45px rgba(37,211,102,0.42)',
            transition:
              'transform 0.35s ease, box-shadow 0.35s ease',
          }}
        >
          {/* GLOW */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at top left, rgba(255,255,255,0.35), transparent 60%)',
              opacity: 0.9,
            }}
          />

          {/* PULSE 1 */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '9999px',
              border: '2px solid rgba(255,255,255,0.25)',
              animation: 'pulseRing 2.5s infinite',
            }}
          />

          {/* PULSE 2 */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '9999px',
              border: '2px solid rgba(255,255,255,0.12)',
              animation: 'pulseRingSecondary 2.5s infinite',
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
              zIndex: 3,
              position: 'relative',
              filter:
                'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
            }}
          />

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
                '0 0 10px rgba(255,255,255,0.9)',
              zIndex: 4,
            }}
          />
        </a>
      </div>

      <style jsx>{`
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }

          70% {
            transform: scale(1.5);
            opacity: 0;
          }

          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes pulseRingSecondary {
          0% {
            transform: scale(1);
            opacity: 0.45;
          }

          70% {
            transform: scale(1.9);
            opacity: 0;
          }

          100% {
            transform: scale(1.9);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}