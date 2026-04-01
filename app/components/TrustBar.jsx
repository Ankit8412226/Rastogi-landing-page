"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "RE/MAX Elite", short: "RE/MAX", sub: "Elite Partner" },
  { name: "Sotheby's", short: "Sotheby's", sub: "Auction House" },
  { name: "Knight Frank", short: "Knight Frank", sub: "Global Advisory" },
  { name: "Colliers", short: "Colliers", sub: "International" },
  { name: "JLL", short: "JLL", sub: "Global Real Estate" },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <style>{`
        .trust-root {
          width: 100%;
          padding: 4rem 0;
          background: #ffffff;
          border-bottom: 1px solid #f3f4f6;
        }

        .trust-shell {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4rem;
        }

        .trust-header {
          max-width: 42rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }

        .trust-kicker {
          color: #064e3b;
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.4em;
        }

        .trust-title {
          margin: 0;
          color: #064e3b;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-size: clamp(1.9rem, 4vw, 3rem);
          font-style: italic;
          font-weight: 300;
          line-height: 1.25;
        }

        .trust-title-strong {
          font-style: normal;
          font-weight: 700;
        }

        .trust-divider {
          width: 3rem;
          height: 2px;
          border-radius: 999px;
          background: #d4af37;
        }

        .trust-row {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          justify-content: center;
          border-top: 1px solid #f3f4f6;
          border-bottom: 1px solid #f3f4f6;
        }

        .trust-partner {
          min-width: 140px;
          flex: 1 1 140px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 2.5rem 2rem;
          text-align: center;
          overflow: hidden;
          isolation: isolate;
          transition:
            background-color 0.3s ease,
            transform 0.35s ease,
            box-shadow 0.35s ease;
          border-right: 1px solid #f3f4f6;
        }

        .trust-partner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(212, 175, 55, 0.08) 0%,
            rgba(212, 175, 55, 0) 55%
          );
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.35s ease, transform 0.35s ease;
          z-index: 0;
        }

        .trust-partner::after {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #d4af37 0%, #f0d98a 50%, #d4af37 100%);
          transform: translateX(-50%);
          transition: width 0.35s ease;
          z-index: 1;
        }

        .trust-partner:last-child {
          border-right: none;
        }

        .trust-partner:hover {
          background: #f9fafb;
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(6, 78, 59, 0.08);
        }

        .trust-partner:hover::before {
          opacity: 1;
          transform: translateY(0);
        }

        .trust-partner:hover::after {
          width: 100%;
        }

        .trust-partner-short {
          position: relative;
          z-index: 2;
          color: #374151;
          font-size: clamp(1rem, 1.8vw, 1.125rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          white-space: nowrap;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .trust-partner-sub {
          position: relative;
          z-index: 2;
          color: #9ca3af;
          font-size: 0.625rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .trust-partner:hover .trust-partner-short {
          color: #064e3b;
          transform: translateY(-2px);
        }

        .trust-partner:hover .trust-partner-sub {
          color: #d4af37;
          transform: translateY(-1px);
        }

        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          border-radius: 999px;
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.25);
        }

        .trust-badge-dot {
          width: 0.375rem;
          height: 0.375rem;
          border-radius: 999px;
          background: #d4af37;
          flex-shrink: 0;
          animation: trust-pulse 1.5s ease-in-out infinite;
        }

        .trust-badge-text {
          color: rgba(212, 175, 55, 0.8);
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          text-align: center;
        }

        @keyframes trust-pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.45;
            transform: scale(0.82);
          }
        }

        @media (min-width: 768px) {
          .trust-root {
            padding: 5rem 0;
          }

          .trust-shell {
            padding: 0 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .trust-root {
            padding: 6rem 0;
          }

          .trust-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 767px) {
          .trust-shell {
            gap: 3rem;
          }

          .trust-kicker {
            letter-spacing: 0.28em;
          }

          .trust-row {
            border-left: 1px solid #f3f4f6;
          }

          .trust-partner {
            min-width: 100%;
            border-right: none;
            border-bottom: 1px solid #f3f4f6;
          }

          .trust-partner:last-child {
            border-bottom: none;
          }

          .trust-badge {
            width: 100%;
            justify-content: center;
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

      <section id="trust" className="trust-root" ref={ref}>
        <div className="trust-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="trust-header"
          >
            <span className="trust-kicker">Global Network & Partnerships</span>
            <h3 className="trust-title">
              Trusted by the{" "}
              <span className="trust-title-strong">World&apos;s Elite</span>
              <br />
              Real Estate Leaders
            </h3>
            <div className="trust-divider" />
          </motion.div>

          <div className="trust-row">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="trust-partner"
              >
                <span className="trust-partner-short">{partner.short}</span>
                <span className="trust-partner-sub">{partner.sub}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="trust-badge"
          >
            <span className="trust-badge-dot" />
            <span className="trust-badge-text">
              Official India Advisory Partner - 2025 International Expo
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}
