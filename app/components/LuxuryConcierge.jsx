"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Portfolio Management",
    desc: "Strategic restructuring and management of your multi-asset real estate portfolio for maximum yield and risk mitigation.",
    icon: "📁",
  },
  {
    title: "Bespoke Acquisitions",
    desc: "Targeted sourcing of off-market luxury units, high-value agricultural plots, and strategic commercial land parcels.",
    icon: "🎯",
  },
  {
    title: "Elite Legal Advisory",
    desc: "Specialized due diligence, RERA compliance verification, and seamless property registration management.",
    icon: "⚖️",
  },
  {
    title: "International Resale",
    desc: "A global marketing engine specialized in the high-velocity liquidation of premium assets for global HNI clients.",
    icon: "🌐",
  },
];

export default function LuxuryConcierge() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <style>{`
        .concierge-root {
          position: relative;
          width: 100%;
          background: #ffffff;
          padding: 4rem 0;
        }

        .concierge-shell {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .concierge-header {
          max-width: 56rem;
          margin: 0 auto 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        .concierge-kicker {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
        }

        .concierge-kicker-line {
          width: 2rem;
          height: 1px;
          background: #d4af37;
        }

        .concierge-kicker-text {
          color: #064e3b;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }

        .concierge-title {
          margin: 0;
          color: #064e3b;
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.04em;
        }

        .concierge-title-accent {
          color: #d4af37;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .concierge-copy {
          max-width: 41rem;
          color: #64748b;
          font-size: clamp(1rem, 1.4vw, 1.125rem);
          font-weight: 300;
          line-height: 1.8;
        }

        .concierge-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 2rem;
        }

        .concierge-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 100%;
          padding: 3rem 2rem;
          border-radius: 2rem;
          border: 1px solid #e5e7eb;
          background: linear-gradient(180deg, #ffffff 0%, #fbfcfb 100%);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
          transition:
            transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.45s ease,
            border-color 0.35s ease,
            background 0.35s ease;
          overflow: hidden;
        }

        .concierge-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(212, 175, 55, 0.18), transparent 38%),
            linear-gradient(180deg, rgba(6, 78, 59, 0.05), transparent 45%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .concierge-card:hover {
          transform: translateY(-10px);
          background: linear-gradient(180deg, #064e3b 0%, #04241b 100%);
          border-color: rgba(212, 175, 55, 0.25);
          box-shadow: 0 30px 60px rgba(6, 78, 59, 0.16);
        }

        .concierge-card:hover::before {
          opacity: 1;
        }

        .concierge-icon-box {
          position: relative;
          z-index: 1;
          width: 5rem;
          height: 5rem;
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1.5rem;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          transition:
            transform 0.45s ease,
            background 0.35s ease,
            border-color 0.35s ease;
        }

        .concierge-card:hover .concierge-icon-box {
          transform: scale(1.1);
          background: rgba(212, 175, 55, 0.1);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .concierge-icon {
          font-size: 2.5rem;
          filter: grayscale(1);
          transition: filter 0.35s ease, transform 0.35s ease;
        }

        .concierge-card:hover .concierge-icon {
          filter: grayscale(0);
          transform: scale(1.05);
        }

        .concierge-card-title {
          position: relative;
          z-index: 1;
          margin: 0 0 1.5rem;
          color: #064e3b;
          font-size: 1.5rem;
          font-weight: 700;
          transition: color 0.35s ease;
        }

        .concierge-card:hover .concierge-card-title {
          color: #ffffff;
        }

        .concierge-card-copy {
          position: relative;
          z-index: 1;
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.8;
          font-weight: 300;
          transition: color 0.35s ease;
        }

        .concierge-card:hover .concierge-card-copy {
          color: rgba(255, 255, 255, 0.68);
        }

        .concierge-actions {
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .concierge-button {
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

        .concierge-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: all 0.6s;
        }

        .concierge-button:hover::before {
          left: 100%;
        }

        .concierge-button:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.4);
        }

        .concierge-note {
          color: rgba(212, 175, 55, 0.6);
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        @media (min-width: 768px) {
          .concierge-root {
            padding: 5rem 0;
          }

          .concierge-shell {
            padding: 0 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .concierge-root {
            padding: 6rem 0;
          }

          .concierge-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 1199px) {
          .concierge-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 767px) {
          .concierge-header {
            margin-bottom: 3rem;
          }

          .concierge-kicker {
            gap: 0.75rem;
          }

          .concierge-kicker-text {
            font-size: 0.66rem;
            letter-spacing: 0.22em;
          }

          .concierge-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .concierge-card {
            padding: 2.25rem 1.5rem;
          }

          .concierge-actions {
            margin-top: 3rem;
          }

          .concierge-button {
            width: 100%;
            text-align: center;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
      `}</style>

      <section id="services" className="concierge-root" ref={ref}>
        <div className="concierge-shell">
          <div className="concierge-header">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="concierge-kicker"
            >
              <span className="concierge-kicker-line" />
              <span className="concierge-kicker-text">Luxury Real Estate Concierge</span>
              <span className="concierge-kicker-line" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.98 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="concierge-title"
            >
              Your Private <span className="concierge-title-accent">Advisory</span> Engine
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
              className="concierge-copy"
            >
              We go beyond property transactions. Our bespoke concierge services ensure your
              investment lifecycle is managed with unparalleled precision and elite discretion.
            </motion.p>
          </div>

          <div className="concierge-grid">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="concierge-card"
              >
                <div className="concierge-icon-box">
                  <span className="concierge-icon">{service.icon}</span>
                </div>

                <h3 className="concierge-card-title">{service.title}</h3>
                <p className="concierge-card-copy">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="concierge-actions"
          >
            <a href="#contact" className="concierge-button">
              Request Private Consultation
            </a>
            <span className="concierge-note">Confidentiality Assured.</span>
          </motion.div>
        </div>
      </section>
    </>
  );
}
