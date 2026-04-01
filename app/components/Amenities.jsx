"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const amenities = [
  {
    name: "Sky Lounges",
    icon: "🏙️",
    desc: "Panoramic views from infinity-edge rooftop retreats.",
  },
  {
    name: "Private Cinema",
    icon: "🎬",
    desc: "Ultra-luxury 4K theaters for the ultimate screening experience.",
  },
  {
    name: "Smart Security",
    icon: "🔒",
    desc: "Biometric and AI-driven 24/7 elite protection systems.",
  },
  {
    name: "Wellness Spa",
    icon: "💆",
    desc: "World-class therapeutic centers and holistic healing spaces.",
  },
  {
    name: "Concierge 24/7",
    icon: "🛎️",
    desc: "Dedicated lifestyle managers for your every personalized need.",
  },
  {
    name: "Olympic Pool",
    icon: "🏊",
    desc: "Temperature-controlled swimming for the elite athlete.",
  },
];

export default function Amenities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <style>{`
        .amenities-root {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          padding: 4rem 0;
        }

        .amenities-shell {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .amenities-header {
          max-width: 56rem;
          margin: 0 auto 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        .amenities-kicker {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
        }

        .amenities-kicker-line {
          width: 2rem;
          height: 1px;
          background: #d4af37;
        }

        .amenities-kicker-text {
          color: #064e3b;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }

        .amenities-title {
          margin: 0;
          color: #064e3b;
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.04em;
        }

        .amenities-title-accent {
          color: #d4af37;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .amenities-copy {
          max-width: 40rem;
          color: #64748b;
          font-size: clamp(1rem, 1.4vw, 1.125rem);
          font-weight: 300;
          line-height: 1.8;
        }

        .amenities-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2rem;
        }

        .amenities-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 100%;
          padding: 2.75rem 2rem;
          border-radius: 2rem;
          border: 1px solid #e5e7eb;
          background: linear-gradient(180deg, #f8faf9 0%, #ffffff 100%);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.05);
          transition:
            transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.45s ease,
            background 0.35s ease,
            border-color 0.35s ease;
          overflow: hidden;
        }

        .amenities-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(212, 175, 55, 0.16), transparent 35%),
            linear-gradient(180deg, rgba(6, 78, 59, 0.04), transparent 48%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .amenities-card:hover {
          transform: translateY(-10px);
          background: linear-gradient(180deg, #064e3b 0%, #04241b 100%);
          border-color: rgba(212, 175, 55, 0.22);
          box-shadow: 0 28px 60px rgba(6, 78, 59, 0.14);
        }

        .amenities-card:hover::before {
          opacity: 1;
        }

        .amenities-icon-box {
          position: relative;
          z-index: 1;
          width: 5rem;
          height: 5rem;
          margin-bottom: 2rem;
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

        .amenities-card:hover .amenities-icon-box {
          transform: scale(1.1);
          background: rgba(212, 175, 55, 0.1);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .amenities-icon {
          font-size: 2.5rem;
          filter: grayscale(1);
          transition: filter 0.35s ease, transform 0.35s ease;
        }

        .amenities-card:hover .amenities-icon {
          filter: grayscale(0);
          transform: scale(1.05);
        }

        .amenities-card-title {
          position: relative;
          z-index: 1;
          margin: 0 0 1rem;
          color: #064e3b;
          font-size: 1.5rem;
          font-weight: 700;
          transition: color 0.35s ease;
        }

        .amenities-card:hover .amenities-card-title {
          color: #ffffff;
        }

        .amenities-card-copy {
          position: relative;
          z-index: 1;
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.8;
          font-weight: 300;
          transition: color 0.35s ease;
        }

        .amenities-card:hover .amenities-card-copy {
          color: rgba(255, 255, 255, 0.68);
        }

        .amenities-actions {
          width: 100%;
          margin-top: 5rem;
          display: flex;
          justify-content: center;
        }

        .amenities-button {
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

        .amenities-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: all 0.6s;
        }

        .amenities-button:hover::before {
          left: 100%;
        }

        .amenities-button:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.4);
        }

        @media (min-width: 768px) {
          .amenities-root {
            padding: 5rem 0;
          }

          .amenities-shell {
            padding: 0 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .amenities-root {
            padding: 6rem 0;
          }

          .amenities-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 1199px) {
          .amenities-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 767px) {
          .amenities-header {
            margin-bottom: 3rem;
          }

          .amenities-kicker {
            gap: 0.75rem;
          }

          .amenities-kicker-text {
            font-size: 0.66rem;
            letter-spacing: 0.22em;
          }

          .amenities-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .amenities-card {
            padding: 2.25rem 1.5rem;
          }

          .amenities-actions {
            margin-top: 3rem;
          }

          .amenities-button {
            width: 100%;
            text-align: center;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
      `}</style>

      <section id="amenities" className="amenities-root" ref={ref}>
        <div className="amenities-shell">
          <div className="amenities-header">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="amenities-kicker"
            >
              <span className="amenities-kicker-line" />
              <span className="amenities-kicker-text">Beyond Just Homes</span>
              <span className="amenities-kicker-line" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.98 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="amenities-title"
            >
              World-Class <span className="amenities-title-accent">Amenities</span> & Lifestyle
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
              className="amenities-copy"
            >
              Every property in our curated collection grants you access to resort-style living,
              ensuring your downtime is as exceptional as your work.
            </motion.p>
          </div>

          <div className="amenities-grid">
            {amenities.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="amenities-card"
              >
                <div className="amenities-icon-box">
                  <span className="amenities-icon">{item.icon}</span>
                </div>

                <h3 className="amenities-card-title">{item.name}</h3>
                <p className="amenities-card-copy">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 1 }}
            className="amenities-actions"
          >
            <a href="#contact" className="amenities-button">
              View All Features & Facilities
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
