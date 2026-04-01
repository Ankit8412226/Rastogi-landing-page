"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "18+ Years",
    desc: "A legacy of trust, excellence, and thousands of successful acquisitions across North India.",
    icon: "🏆",
  },
  {
    title: "Elite Network",
    desc: "Unmatched access to off-market inventory and direct developer relationships.",
    icon: "🤝",
  },
  {
    title: "Market Alpha",
    desc: "Proprietary research and data-driven insights for strategic wealth generation.",
    icon: "📈",
  },
  {
    title: "Concierge Service",
    desc: "End-to-end advisory from site selection and legal due diligence to registry and beyond.",
    icon: "✨",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <style>{`
        .whyus-root {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #04241b;
          color: #ffffff;
          padding: 4rem 0;
        }

        .whyus-orb-top,
        .whyus-orb-bottom {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
        }

        .whyus-orb-top {
          top: 0;
          right: 0;
          width: 50rem;
          height: 50rem;
          background: rgba(212, 175, 55, 0.05);
          filter: blur(120px);
        }

        .whyus-orb-bottom {
          bottom: 0;
          left: 0;
          width: 37.5rem;
          height: 37.5rem;
          background: rgba(6, 78, 59, 0.1);
          filter: blur(100px);
        }

        .whyus-shell {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .whyus-header {
          max-width: 56rem;
          margin: 0 auto 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        .whyus-pill {
          display: inline-flex;
          align-items: center;
          padding: 0.85rem 1.5rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(14px);
        }

        .whyus-pill-text {
          color: #d4af37;
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }

        .whyus-title {
          margin: 0;
          color: #ffffff;
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.04em;
        }

        .whyus-title-accent {
          color: #d4af37;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .whyus-copy {
          max-width: 40rem;
          color: rgba(255, 255, 255, 0.5);
          font-size: clamp(1rem, 1.4vw, 1.125rem);
          font-weight: 300;
          line-height: 1.8;
        }

        .whyus-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.5rem;
        }

        .whyus-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2.5rem;
          background: rgba(4, 36, 27, 0.96);
          border-radius: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition:
            transform 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .whyus-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(212, 175, 55, 0.08), transparent 50%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .whyus-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(212, 175, 55, 0.2);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .whyus-card:hover::before {
          opacity: 1;
        }

        .whyus-icon-box {
          position: relative;
          z-index: 1;
          width: 5rem;
          height: 5rem;
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition:
            transform 0.5s ease,
            background 0.35s ease,
            border-color 0.35s ease;
        }

        .whyus-card:hover .whyus-icon-box {
          transform: scale(1.1);
          background: rgba(212, 175, 55, 0.1);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .whyus-icon {
          font-size: 2.5rem;
          filter: grayscale(1);
          transition: filter 0.35s ease;
        }

        .whyus-card:hover .whyus-icon {
          filter: grayscale(0);
        }

        .whyus-card-title {
          position: relative;
          z-index: 1;
          margin: 0 0 1.5rem;
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 700;
          transition: color 0.35s ease;
        }

        .whyus-card:hover .whyus-card-title {
          color: #d4af37;
        }

        .whyus-card-copy {
          position: relative;
          z-index: 1;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.95rem;
          line-height: 1.8;
          font-weight: 300;
        }

        .whyus-actions {
          width: 100%;
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
        }

        .whyus-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 1.2rem 3rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #d4af37 0%, #bf9460 100%);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          text-decoration: none;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .whyus-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: all 0.6s;
        }

        .whyus-button:hover::before {
          left: 100%;
        }

        .whyus-button:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.4);
        }

        .whyus-badge {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 2rem;
          border-radius: 999px;
          background: rgba(6, 78, 59, 0.3);
          border: 1px solid rgba(212, 175, 55, 0.2);
          color: #d4af37;
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          text-align: center;
        }

        .whyus-badge-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 999px;
          background: #d4af37;
          animation: whyus-pulse 1.5s ease-in-out infinite;
        }

        @keyframes whyus-pulse {
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
          .whyus-root {
            padding: 5rem 0;
          }

          .whyus-shell {
            padding: 0 2.5rem;
          }

          .whyus-card {
            padding: 3.5rem;
          }
        }

        @media (min-width: 1280px) {
          .whyus-root {
            padding: 6rem 0;
          }

          .whyus-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 1199px) {
          .whyus-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.25rem;
          }
        }

        @media (max-width: 767px) {
          .whyus-header {
            margin-bottom: 3rem;
          }

          .whyus-pill {
            padding: 0.75rem 1.25rem;
          }

          .whyus-pill-text {
            font-size: 0.58rem;
            letter-spacing: 0.24em;
          }

          .whyus-grid {
            grid-template-columns: 1fr;
          }

          .whyus-card {
            padding: 2rem 1.5rem;
          }

          .whyus-actions {
            margin-top: 3rem;
            gap: 2rem;
          }

          .whyus-button {
            width: 100%;
            text-align: center;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .whyus-badge {
            width: 100%;
            justify-content: center;
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

      <section id="why-us" className="whyus-root" ref={ref}>
        <div className="whyus-orb-top" />
        <div className="whyus-orb-bottom" />

        <div className="whyus-shell">
          <div className="whyus-header">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="whyus-pill"
            >
              <span className="whyus-pill-text">The Rastogi Advantage</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="whyus-title"
            >
              Why Choose Our <span className="whyus-title-accent">Advisory?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
              className="whyus-copy"
            >
              We don&apos;t just sell property; we curate lifelong assets and strategic portfolios
              for the most discerning investors in the region.
            </motion.p>
          </div>

          <div className="whyus-grid">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="whyus-card"
              >
                <div className="whyus-icon-box">
                  <span className="whyus-icon">{feature.icon}</span>
                </div>

                <h3 className="whyus-card-title">{feature.title}</h3>
                <p className="whyus-card-copy">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="whyus-actions">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a href="#contact" className="whyus-button">
                Schedule Elite Consultation
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 1 }}
              className="whyus-badge"
            >
              <span className="whyus-badge-dot" />
              Ranked #1 Elite Advisory by Forbes India (2024 List Candidate)
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
