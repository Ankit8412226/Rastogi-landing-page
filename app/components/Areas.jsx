"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const areas = [
  {
    name: "Yamuna Expressway",
    tagline: "The Future of Aviation & Tech",
    price: "INR 1.85 Cr onwards",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    stats: "240% Growth (5Y)",
  },
  {
    name: "Noida Expressway",
    tagline: "Institutional Hub & Elite Corridors",
    price: "INR 3.20 Cr onwards",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    stats: "18% CAGR",
  },
  {
    name: "Greater Noida West",
    tagline: "Connectivity & Modern Infrastructure",
    price: "INR 1.45 Cr onwards",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    stats: "140+ Projects",
  },
];

export default function Areas() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <style>{`
        .areas-root {
          width: 100%;
          background: #ffffff;
          padding: 4rem 0;
        }

        .areas-shell {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }

        .areas-header {
          max-width: 56rem;
          margin: 0 auto 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        .areas-kicker {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
        }

        .areas-kicker-line {
          width: 2rem;
          height: 1px;
          background: #d4af37;
        }

        .areas-kicker-text {
          color: #064e3b;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }

        .areas-title {
          margin: 0;
          color: #064e3b;
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.04em;
        }

        .areas-title-accent {
          color: #d4af37;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .areas-copy {
          max-width: 40rem;
          color: #64748b;
          font-size: clamp(1rem, 1.4vw, 1.125rem);
          font-weight: 300;
          line-height: 1.8;
        }

        .areas-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2rem;
        }

        .areas-card {
          position: relative;
          min-height: 31.25rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
          border-radius: 2rem;
          border: 1px solid #f3f4f6;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.1);
          padding: 2.5rem;
          cursor: pointer;
          transition:
            transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.45s ease;
        }

        .areas-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 32px 70px rgba(6, 78, 59, 0.18);
        }

        .areas-card-media {
          position: absolute;
          inset: 0;
        }

        .areas-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .areas-card:hover .areas-card-media img {
          transform: scale(1.06);
        }

        .areas-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6, 78, 59, 0.12) 8%, rgba(6, 78, 59, 0.45) 46%, rgba(6, 78, 59, 0.94) 100%);
          opacity: 0.82;
          transition: opacity 0.35s ease;
        }

        .areas-card:hover .areas-card-overlay {
          opacity: 0.95;
        }

        .areas-card-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .areas-tagline {
          margin-bottom: 0.3rem;
          color: #d4af37;
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }

        .areas-name {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.9rem, 3vw, 2.5rem);
          font-weight: 700;
          line-height: 1.08;
          transition: transform 0.35s ease;
        }

        .areas-card:hover .areas-name {
          transform: translateX(8px);
        }

        .areas-meta {
          width: 100%;
          margin-top: 1rem;
          padding-top: 1rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .areas-meta-item {
          display: flex;
          flex-direction: column;
        }

        .areas-meta-item + .areas-meta-item {
          padding-left: 1.5rem;
          border-left: 1px solid rgba(255, 255, 255, 0.12);
        }

        .areas-meta-label {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.56rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .areas-meta-value {
          margin-top: 0.2rem;
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
        }

        .areas-meta-value-accent {
          color: #d4af37;
        }

        .areas-cta-wrap {
          margin-top: 5rem;
          display: flex;
          justify-content: center;
        }

        .areas-cta {
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

        .areas-cta::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: all 0.6s;
        }

        .areas-cta:hover::before {
          left: 100%;
        }

        .areas-cta:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.4);
        }

        @media (min-width: 768px) {
          .areas-root {
            padding: 5rem 0;
          }

          .areas-shell {
            padding: 0 2.5rem;
          }

          .areas-card {
            min-height: 37.5rem;
            padding: 3.5rem;
          }
        }

        @media (min-width: 1280px) {
          .areas-root {
            padding: 6rem 0;
          }

          .areas-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 1199px) {
          .areas-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 2rem;
          }
        }

        @media (max-width: 767px) {
          .areas-header {
            margin-bottom: 3rem;
          }

          .areas-kicker {
            gap: 0.75rem;
          }

          .areas-kicker-text {
            font-size: 0.66rem;
            letter-spacing: 0.22em;
          }

          .areas-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .areas-card {
            min-height: 29rem;
            padding: 2rem;
          }

          .areas-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .areas-meta-item + .areas-meta-item {
            padding-left: 0;
            border-left: none;
          }

          .areas-cta {
            width: 100%;
            text-align: center;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
      `}</style>

      <section id="areas" className="areas-root" ref={ref}>
        <div className="areas-shell">
          <div className="areas-header">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="areas-kicker"
            >
              <span className="areas-kicker-line" />
              <span className="areas-kicker-text">Strategic Locations</span>
              <span className="areas-kicker-line" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.98 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="areas-title"
            >
              Regional <span className="areas-title-accent">Focus</span> & Market Dominance
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
              className="areas-copy"
            >
              We focus exclusively on the highest growth corridors in North India, providing our
              clients with unprecedented market alpha and capital appreciation potential.
            </motion.p>
          </div>

          <div className="areas-grid">
            {areas.map((area, idx) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.2, duration: 1 }}
                className="areas-card"
              >
                <div className="areas-card-media">
                  <img src={area.image} alt={area.name} />
                  <div className="areas-card-overlay" />
                </div>

                <div className="areas-card-content">
                  <span className="areas-tagline">{area.tagline}</span>
                  <h3 className="areas-name">{area.name}</h3>

                  <div className="areas-meta">
                    <div className="areas-meta-item">
                      <span className="areas-meta-label">Starting Price</span>
                      <span className="areas-meta-value">{area.price}</span>
                    </div>
                    <div className="areas-meta-item">
                      <span className="areas-meta-label">Growth Stat</span>
                      <span className="areas-meta-value areas-meta-value-accent">{area.stats}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="areas-cta-wrap"
          >
            <a href="#contact" className="areas-cta">
              Request Regional Report (2025)
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
