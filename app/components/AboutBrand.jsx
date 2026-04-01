"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutBrand() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <>
      <style>{`
        .about-root {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          padding: 4rem 0;
        }

        .about-shell {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4rem;
        }

        .about-copy,
        .about-media-wrap {
          width: 100%;
        }

        .about-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          order: 2;
        }

        .about-kicker {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .about-kicker-line {
          width: 2.5rem;
          height: 1px;
          background: #d4af37;
        }

        .about-kicker-text {
          color: #064e3b;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }

        .about-title {
          margin: 0 0 2rem;
          color: #064e3b;
          font-size: clamp(2.35rem, 5vw, 5.8rem);
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: -0.04em;
        }

        .about-title-accent {
          color: #d4af37;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .about-body {
          max-width: 38rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          color: #475569;
          font-size: clamp(1rem, 1.4vw, 1.125rem);
          line-height: 1.85;
          font-weight: 400;
        }

        .about-signoff {
          margin-top: 3rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .about-monogram {
          width: 4rem;
          height: 4rem;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #064e3b;
          box-shadow: 0 20px 35px rgba(6, 78, 59, 0.18);
          color: #ffffff;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-size: 2rem;
        }

        .about-signoff-name {
          margin-bottom: 0.35rem;
          color: #064e3b;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.24em;
        }

        .about-signoff-role {
          color: #d4af37;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .about-media-wrap {
          position: relative;
          order: 1;
          display: flex;
          justify-content: center;
        }

        .about-media-shell {
          position: relative;
          width: 100%;
          max-width: 31.25rem;
        }

        .about-media {
          position: relative;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          border-radius: 2rem;
          border: 4px solid rgba(212, 175, 55, 0.1);
          box-shadow: 0 30px 70px rgba(6, 78, 59, 0.16);
        }

        .about-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-media:hover img {
          transform: scale(1.04);
        }

        .about-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6, 78, 59, 0.04), rgba(6, 78, 59, 0.38));
        }

        .about-badge {
          position: absolute;
          left: -2rem;
          bottom: 3rem;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 2.25rem;
          border-radius: 1.5rem;
          background: #04241b;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
        }

        .about-badge-value {
          display: flex;
          align-items: baseline;
          gap: 0.1rem;
          margin-bottom: 0.45rem;
        }

        .about-badge-value-main,
        .about-badge-value-plus {
          color: #d4af37;
          font-weight: 700;
          line-height: 1;
        }

        .about-badge-value-main {
          font-size: clamp(2.6rem, 5vw, 3.2rem);
        }

        .about-badge-value-plus {
          font-size: clamp(1.2rem, 2vw, 1.65rem);
        }

        .about-badge-label {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          white-space: nowrap;
        }

        .about-orb-top,
        .about-orb-bottom {
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
        }

        .about-orb-top {
          top: -3rem;
          right: -3rem;
          width: 12rem;
          height: 12rem;
          background: rgba(212, 175, 55, 0.1);
          filter: blur(80px);
        }

        .about-orb-bottom {
          bottom: -3rem;
          left: 0;
          width: 8rem;
          height: 8rem;
          background: rgba(6, 78, 59, 0.1);
          filter: blur(60px);
        }

        @media (min-width: 768px) {
          .about-root {
            padding: 5rem 0;
          }

          .about-shell {
            padding: 0 2.5rem;
          }
        }

        @media (min-width: 1024px) {
          .about-shell {
            flex-direction: row;
            align-items: center;
            gap: 6rem;
          }

          .about-copy,
          .about-media-wrap {
            width: 50%;
          }

          .about-copy {
            order: 1;
          }

          .about-media-wrap {
            order: 2;
            justify-content: flex-end;
          }
        }

        @media (min-width: 1280px) {
          .about-root {
            padding: 6rem 0;
          }

          .about-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 767px) {
          .about-kicker {
            gap: 0.75rem;
            margin-bottom: 1.5rem;
          }

          .about-kicker-text {
            font-size: 0.66rem;
            letter-spacing: 0.22em;
          }

          .about-title {
            margin-bottom: 1.5rem;
            font-size: clamp(2rem, 10vw, 3.35rem);
          }

          .about-signoff {
            margin-top: 2.25rem;
            gap: 1rem;
          }

          .about-monogram {
            width: 3.5rem;
            height: 3.5rem;
            font-size: 1.6rem;
          }

          .about-badge {
            left: 1rem;
            bottom: 1rem;
            padding: 1.35rem 1.5rem;
          }

          .about-badge-label {
            white-space: normal;
            text-align: center;
          }
        }
      `}</style>

      <section id="brand" ref={containerRef} className="about-root">
        <div className="about-shell">
          <div className="about-copy">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="about-kicker"
            >
              <span className="about-kicker-line" />
              <span className="about-kicker-text">The Brand Story</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="about-title"
            >
              Building <br />
              <span className="about-title-accent">Generational Wealth</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
              className="about-body"
            >
              <p>
                Founded in 2007, Rastogi Properties emerged with a singular vision: to bring
                unprecedented transparency, elegance, and return on investment to the Greater Noida
                real estate market.
              </p>
              <p>
                We recognize that fine real estate is not merely a transaction; it is a vital
                cornerstone of your portfolio and a sanctuary for your family. Our team of elite
                negotiators and market analysts specialize strictly in Grade-A developments across
                Noida Expressway and the upcoming Jewar Airport region.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="about-signoff"
            >
              <div className="about-monogram">R</div>
              <div>
                <p className="about-signoff-name">S.K. Rastogi</p>
                <p className="about-signoff-role">Founder & Managing Director</p>
              </div>
            </motion.div>
          </div>

          <div className="about-media-wrap">
            <motion.div
              style={{ y: yImage }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
              className="about-media-shell"
            >
              <div className="about-media">
                <img
                  src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=1000&q=80"
                  alt="Elite Real Estate Advisory"
                />
                <div className="about-media-overlay" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="about-badge"
              >
                <div className="about-badge-value">
                  <span className="about-badge-value-main">18</span>
                  <span className="about-badge-value-plus">+</span>
                </div>
                <span className="about-badge-label">Years of Excellence</span>
              </motion.div>
            </motion.div>

            <div className="about-orb-top" />
            <div className="about-orb-bottom" />
          </div>
        </div>
      </section>
    </>
  );
}
