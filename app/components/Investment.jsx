"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const investmentTips = [
  {
    label: "Ann. Returns",
    value: "24%",
    desc: "Average ROI across Noida Expressway prime sectors.",
  },
  {
    label: "Capital Growth",
    value: "180%",
    desc: "Typical 5-year appreciation for strategic plots.",
  },
  {
    label: "Rent Yield",
    value: "6.5%",
    desc: "Stable yields from high-end commercial portfolios.",
  },
  {
    label: "Tax Benefits",
    value: "80C",
    desc: "Unlock exclusive section-based investment savings.",
  },
];

export default function Investment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <style>{`
        .investment-root {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #04241b;
          color: #ffffff;
          padding: 4rem 0;
        }

        .investment-orb-top,
        .investment-orb-bottom {
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
        }

        .investment-orb-top {
          top: 0;
          right: 0;
          width: 50rem;
          height: 50rem;
          background: rgba(212, 175, 55, 0.05);
          filter: blur(150px);
        }

        .investment-orb-bottom {
          bottom: -12.5rem;
          left: -12.5rem;
          width: 37.5rem;
          height: 37.5rem;
          background: rgba(6, 78, 59, 0.2);
          filter: blur(100px);
        }

        .investment-shell {
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

        .investment-header {
          margin: 0 auto 5rem;
          max-width: 56rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        .investment-pill {
          display: inline-flex;
          align-items: center;
          padding: 0.55rem 1.5rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(14px);
        }

        .investment-pill-text {
          color: #d4af37;
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.4em;
        }

        .investment-title {
          margin: 0;
          color: #ffffff;
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.04em;
        }

        .investment-title-accent {
          color: #d4af37;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .investment-copy {
          max-width: 40rem;
          color: rgba(255, 255, 255, 0.4);
          font-size: clamp(1rem, 1.4vw, 1.125rem);
          line-height: 1.8;
          font-weight: 300;
        }

        .investment-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.5rem;
        }

        .investment-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 3.5rem 2rem;
          background: rgba(4, 36, 27, 0.96);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 2rem;
          transition:
            background 0.35s ease,
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .investment-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(212, 175, 55, 0.08), transparent 55%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .investment-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(212, 175, 55, 0.2);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .investment-card:hover::before {
          opacity: 1;
        }

        .investment-value {
          position: relative;
          z-index: 1;
          margin-bottom: 1.5rem;
          color: #ffffff;
          font-size: clamp(2.4rem, 4vw, 4rem);
          font-weight: 700;
          line-height: 1;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .investment-card:hover .investment-value {
          color: #d4af37;
          transform: translateY(-4px);
        }

        .investment-label {
          position: relative;
          z-index: 1;
          margin-bottom: 1.5rem;
          color: rgba(212, 175, 55, 0.6);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          transition: color 0.3s ease;
        }

        .investment-card:hover .investment-label {
          color: #d4af37;
        }

        .investment-desc {
          position: relative;
          z-index: 1;
          color: rgba(255, 255, 255, 0.32);
          font-size: 0.92rem;
          line-height: 1.8;
          font-weight: 300;
          transition: color 0.3s ease;
        }

        .investment-card:hover .investment-desc {
          color: rgba(255, 255, 255, 0.65);
        }

        .investment-footer {
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .investment-footer-note {
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .investment-button {
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

        .investment-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: all 0.6s;
        }

        .investment-button:hover::before {
          left: 100%;
        }

        .investment-button:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.4);
        }

        @media (min-width: 768px) {
          .investment-root {
            padding: 5rem 0;
          }

          .investment-shell {
            padding: 0 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .investment-root {
            padding: 6rem 0;
          }

          .investment-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 1199px) {
          .investment-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.25rem;
          }
        }

        @media (max-width: 767px) {
          .investment-header {
            margin-bottom: 3rem;
          }

          .investment-pill-text {
            font-size: 0.58rem;
            letter-spacing: 0.28em;
          }

          .investment-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .investment-footer {
            margin-top: 3rem;
          }

          .investment-button {
            width: 100%;
            text-align: center;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
      `}</style>

      <section id="investment" className="investment-root" ref={ref}>
        <div className="investment-orb-top" />
        <div className="investment-orb-bottom" />

        <div className="investment-shell">
          <div className="investment-header">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="investment-pill"
            >
              <span className="investment-pill-text">Investment Intelligence</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.98 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="investment-title"
            >
              Predictable <span className="investment-title-accent">Wealth</span> Generation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
              className="investment-copy"
            >
              Real estate is the ultimate wealth preservation tool. Our advisory specializes in
              identifying high-growth assets that deliver consistent, risk-adjusted returns.
            </motion.p>
          </div>

          <div className="investment-grid">
            {investmentTips.map((tip, idx) => (
              <motion.div
                key={tip.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="investment-card"
              >
                <span className="investment-value">{tip.value}</span>
                <h3 className="investment-label">{tip.label}</h3>
                <p className="investment-desc">{tip.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 1 }}
            className="investment-footer"
          >
            <p className="investment-footer-note">Trust the Numbers</p>
            <a href="#contact" className="investment-button">
              Download 2025 Market Forecast
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
