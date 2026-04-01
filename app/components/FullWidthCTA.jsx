"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function FullWidthCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <style>{`
        .fwcta-root {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #041a14;
          color: #ffffff;
          padding: 4rem 0;
        }

        .fwcta-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .fwcta-bg-gradient {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(90deg, rgba(4, 26, 20, 0.9) 0%, rgba(4, 26, 20, 0.6) 55%, transparent 100%);
        }

        .fwcta-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.2;
          filter: grayscale(1) brightness(1.1);
        }

        .fwcta-shell {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }

        .fwcta-content {
          max-width: 64rem;
        }

        .fwcta-kicker {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .fwcta-kicker-line {
          width: 2.5rem;
          height: 1px;
          background: #d4af37;
        }

        .fwcta-kicker-text {
          color: rgba(212, 175, 55, 0.8);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.4em;
        }

        .fwcta-title {
          margin: 0 0 3rem;
          max-width: 14ch;
          color: #ffffff;
          font-size: clamp(2.6rem, 6vw, 5.8rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.05em;
        }

        .fwcta-title-accent {
          color: #d4af37;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 400;
          text-decoration: underline;
          text-decoration-color: rgba(212, 175, 55, 0.3);
          text-underline-offset: 0.28em;
        }

        .fwcta-copy {
          margin-bottom: 3.5rem;
          max-width: 42rem;
          color: rgba(255, 255, 255, 0.5);
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          line-height: 1.8;
          font-weight: 300;
        }

        .fwcta-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .fwcta-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 1.2rem 4rem;
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

        .fwcta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: all 0.6s;
        }

        .fwcta-button:hover::before {
          left: 100%;
        }

        .fwcta-button:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.4);
        }

        .fwcta-contact {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .fwcta-contact-label {
          color: rgba(212, 175, 55, 0.6);
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .fwcta-contact-value {
          color: #ffffff;
          font-size: 1.125rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        .fwcta-ring-a,
        .fwcta-ring-b {
          position: absolute;
          top: 50%;
          width: 37.5rem;
          height: 37.5rem;
          border-radius: 999px;
          pointer-events: none;
          transform: translateY(-50%);
        }

        .fwcta-ring-a {
          right: -12.5rem;
          border: 1px solid rgba(212, 175, 55, 0.1);
        }

        .fwcta-ring-b {
          right: -9.375rem;
          border: 1px solid rgba(212, 175, 55, 0.05);
          rotate: 45deg;
        }

        @media (min-width: 768px) {
          .fwcta-root {
            padding: 5rem 0;
          }

          .fwcta-shell {
            padding: 0 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .fwcta-root {
            padding: 6rem 0;
          }

          .fwcta-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 767px) {
          .fwcta-kicker {
            gap: 0.75rem;
            margin-bottom: 1.75rem;
          }

          .fwcta-kicker-text {
            font-size: 0.64rem;
            letter-spacing: 0.26em;
          }

          .fwcta-title {
            margin-bottom: 2rem;
            max-width: none;
            font-size: clamp(2rem, 10vw, 3.4rem);
          }

          .fwcta-copy {
            margin-bottom: 2.5rem;
          }

          .fwcta-actions {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .fwcta-button {
            width: 100%;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            text-align: center;
          }

          .fwcta-contact {
            align-items: center;
            text-align: center;
          }

          .fwcta-ring-a,
          .fwcta-ring-b {
            width: 28rem;
            height: 28rem;
          }
        }
      `}</style>

      <section ref={ref} className="fwcta-root">
        <div className="fwcta-bg">
          <div className="fwcta-bg-gradient" />
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80"
            alt="Premium Architecture"
          />
        </div>

        <div className="fwcta-shell">
          <div className="fwcta-content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="fwcta-kicker"
            >
              <span className="fwcta-kicker-line" />
              <span className="fwcta-kicker-text">Investor Spotlight</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="fwcta-title"
            >
              Seize the <span className="fwcta-title-accent">Future</span> of <br />
              Greater Noida Real Estate
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
              className="fwcta-copy"
            >
              Exclusive off-market inventory and strategic advisory for those who refuse to
              compromise on quality and growth. Secure your legacy today before the 2025 regional
              price correction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="fwcta-actions"
            >
              <Link href="/#contact" className="fwcta-button">
                Request VIP Briefing
              </Link>

              <div className="fwcta-contact">
                <span className="fwcta-contact-label">Member Direct</span>
                <span className="fwcta-contact-value">+91 999 000 0000</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="fwcta-ring-a" />
        <div className="fwcta-ring-b" />
      </section>
    </>
  );
}
