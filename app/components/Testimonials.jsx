"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Rakesh Verma",
    role: "Private Equity Investor",
    quote:
      "Their insight into the Yamuna Expressway corridor gave us returns we didn't think were possible within 3 years. Truly elite advisory.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Anita Singh",
    role: "Tech Entrepreneur",
    quote:
      "Professionalism at its peak. Rastogi Properties made the villa acquisition process in Sector 150 absolutely seamless and elegant.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Vikram Singhania",
    role: "HNI Client",
    quote:
      "Strategic, data-driven, and highly exclusive inventory. The best real estate experience I've had in the NCR region so far.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <>
      <style>{`
        .testimonials-root {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #f8faf9;
          padding: 4rem 0;
        }

        .testimonials-shell {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .testimonials-header {
          max-width: 56rem;
          margin: 0 auto 4.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        .testimonials-kicker {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonials-kicker-line {
          width: 2rem;
          height: 1px;
          background: #d4af37;
        }

        .testimonials-kicker-text {
          color: #064e3b;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }

        .testimonials-title {
          margin: 0;
          color: #064e3b;
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.04em;
        }

        .testimonials-title-accent {
          color: #d4af37;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .testimonials-copy {
          max-width: 40rem;
          color: #64748b;
          font-size: clamp(1rem, 1.4vw, 1.125rem);
          font-weight: 300;
          line-height: 1.8;
        }

        .testimonials-panel {
          width: 100%;
          max-width: 74rem;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(20rem, 0.85fr);
          border-radius: 2.25rem;
          overflow: hidden;
          border: 1px solid rgba(6, 78, 59, 0.08);
          background: #ffffff;
          box-shadow: 0 30px 70px rgba(15, 23, 42, 0.08);
        }

        .testimonials-main {
          position: relative;
          padding: 2.75rem;
          background: linear-gradient(180deg, #ffffff 0%, #f7faf8 100%);
        }

        .testimonials-main::before {
          content: "";
          position: absolute;
          top: -8rem;
          right: -8rem;
          width: 18rem;
          height: 18rem;
          border-radius: 999px;
          background: rgba(212, 175, 55, 0.09);
          filter: blur(60px);
          pointer-events: none;
        }

        .testimonials-badge {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 1.5rem;
          padding: 0.55rem 1rem;
          border-radius: 999px;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.18);
          color: #d4af37;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.24em;
        }

        .testimonials-badge-dot {
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 999px;
          background: #d4af37;
        }

        .testimonials-quote-icon {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: rgba(212, 175, 55, 0.18);
        }

        .testimonials-quote-wrap {
          position: relative;
          z-index: 1;
          min-height: 20rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testimonials-quote {
          margin: 0;
          color: #04241b;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-size: clamp(1.7rem, 3vw, 2.85rem);
          font-style: italic;
          font-weight: 400;
          line-height: 1.45;
          letter-spacing: -0.02em;
          max-width: 14ch;
        }

        .testimonials-meta {
          margin-top: 2rem;
          padding-top: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          border-top: 1px solid rgba(6, 78, 59, 0.08);
        }

        .testimonials-counter {
          color: rgba(6, 78, 59, 0.5);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .testimonials-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .testimonials-nav-btn {
          position: relative;
          width: 3.25rem;
          height: 3.25rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 999px;
          border: 1px solid rgba(6, 78, 59, 0.1);
          background: #ffffff;
          color: #04241b;
          box-shadow: 0 14px 26px rgba(15, 23, 42, 0.08);
          transition:
            transform 0.35s ease,
            background 0.35s ease,
            color 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .testimonials-nav-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.38), transparent);
          transition: left 0.6s ease;
        }

        .testimonials-nav-btn:hover {
          transform: translateY(-4px) scale(1.04);
          background: linear-gradient(135deg, #d4af37 0%, #bf9460 100%);
          border-color: rgba(212, 175, 55, 0.55);
          color: #ffffff;
          box-shadow: 0 20px 36px rgba(212, 175, 55, 0.24);
        }

        .testimonials-nav-btn:hover::before {
          left: 100%;
        }

        .testimonials-side {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 2.5rem 2rem;
          background: linear-gradient(180deg, #064e3b 0%, #04241b 100%);
          color: #ffffff;
        }

        .testimonials-side::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(212, 175, 55, 0.18), transparent 32%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 55%);
          pointer-events: none;
        }

        .testimonials-side-summary {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        .testimonials-side-label {
          color: rgba(212, 175, 55, 0.7);
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.24em;
        }

        .testimonials-profile {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonials-avatar {
          width: 5.5rem;
          height: 5.5rem;
          border-radius: 1.6rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.22);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          flex-shrink: 0;
        }

        .testimonials-person {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .testimonials-name {
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.03em;
        }

        .testimonials-role {
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.74rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.16em;
        }

        .testimonials-stars {
          display: inline-flex;
          gap: 0.35rem;
        }

        .testimonials-star {
          color: #d4af37;
          font-size: 1rem;
          line-height: 1;
        }

        .testimonials-side-copy {
          margin: 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 0.9rem;
          line-height: 1.75;
        }

        .testimonials-selector-list {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-top: auto;
        }

        .testimonials-selector {
          display: grid;
          grid-template-columns: 3rem minmax(0, 1fr) auto;
          align-items: center;
          gap: 0.85rem;
          width: 100%;
          padding: 0.85rem;
          border-radius: 1.15rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
          color: #ffffff;
          text-align: left;
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .testimonials-selector:hover {
          transform: translateX(4px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(212, 175, 55, 0.22);
        }

        .testimonials-selector-active {
          background: rgba(212, 175, 55, 0.1);
          border-color: rgba(212, 175, 55, 0.26);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .testimonials-selector-avatar {
          width: 3rem;
          height: 3rem;
          border-radius: 0.95rem;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .testimonials-selector-meta {
          min-width: 0;
        }

        .testimonials-selector-name {
          display: block;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .testimonials-selector-role {
          display: block;
          margin-top: 0.2rem;
          color: rgba(255, 255, 255, 0.45);
          font-size: 0.62rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .testimonials-selector-arrow {
          color: #d4af37;
          font-size: 1rem;
          line-height: 1;
          transition: transform 0.3s ease;
        }

        .testimonials-selector:hover .testimonials-selector-arrow,
        .testimonials-selector-active .testimonials-selector-arrow {
          transform: translateX(3px);
        }

        @media (min-width: 768px) {
          .testimonials-root {
            padding: 5rem 0;
          }

          .testimonials-shell {
            padding: 0 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .testimonials-root {
            padding: 6rem 0;
          }

          .testimonials-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 1023px) {
          .testimonials-panel {
            grid-template-columns: 1fr;
          }

          .testimonials-main,
          .testimonials-side {
            padding: 2rem 1.5rem;
          }

          .testimonials-quote {
            max-width: none;
          }
        }

        @media (max-width: 767px) {
          .testimonials-header {
            margin-bottom: 3rem;
          }

          .testimonials-kicker {
            gap: 0.75rem;
          }

          .testimonials-kicker-text {
            font-size: 0.66rem;
            letter-spacing: 0.22em;
          }

          .testimonials-panel {
            border-radius: 1.75rem;
          }

          .testimonials-main,
          .testimonials-side {
            padding: 1.5rem 1.25rem;
          }

          .testimonials-quote-icon {
            top: 1.25rem;
            right: 1.25rem;
          }

          .testimonials-quote-wrap {
            min-height: auto;
          }

          .testimonials-quote {
            font-size: clamp(1.45rem, 7vw, 2.05rem);
          }

          .testimonials-meta {
            flex-direction: column;
            align-items: flex-start;
          }

          .testimonials-controls {
            width: 100%;
            justify-content: space-between;
          }

          .testimonials-profile {
            align-items: center;
          }

          .testimonials-selector {
            grid-template-columns: 2.75rem minmax(0, 1fr) auto;
            padding: 0.75rem;
          }

          .testimonials-selector-avatar {
            width: 2.75rem;
            height: 2.75rem;
          }
        }
      `}</style>

      <section id="testimonials" className="testimonials-root" ref={ref}>
        <div className="testimonials-shell">
          <div className="testimonials-header">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="testimonials-kicker"
            >
              <span className="testimonials-kicker-line" />
              <span className="testimonials-kicker-text">Words of Trust</span>
              <span className="testimonials-kicker-line" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.98 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="testimonials-title"
            >
              Client <span className="testimonials-title-accent">Journeys</span> & Success Stories
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
              className="testimonials-copy"
            >
              We pride ourselves on the relationships we build. Here is what some of our most
              distinguished clients have to say about our partnership.
            </motion.p>
          </div>

          <div className="testimonials-panel">
            <div className="testimonials-main">
              <div className="testimonials-badge">
                <span className="testimonials-badge-dot" />
                Private Client Voice
              </div>

              <Quote className="testimonials-quote-icon" size={42} strokeWidth={1.5} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={`quote-${index}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="testimonials-quote-wrap"
                >
                  <p className="testimonials-quote">
                    &ldquo;{current.quote}&rdquo;
                  </p>

                  <div className="testimonials-meta">
                    <span className="testimonials-counter">
                      {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                    </span>

                    <div className="testimonials-controls">
                      <button
                        type="button"
                        onClick={() =>
                          setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                        }
                        className="testimonials-nav-btn"
                        aria-label="Previous testimonial"
                      >
                        <ArrowLeft size={18} />
                      </button>

                      <button
                        type="button"
                        onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
                        className="testimonials-nav-btn"
                        aria-label="Next testimonial"
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="testimonials-side">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`profile-${index}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="testimonials-side-summary"
                >
                  <span className="testimonials-side-label">Featured Client</span>

                  <div className="testimonials-profile">
                    <div
                      className="testimonials-avatar"
                      style={{ backgroundImage: `url(${current.avatar})` }}
                    />

                    <div className="testimonials-person">
                      <span className="testimonials-name">{current.name}</span>
                      <span className="testimonials-role">{current.role}</span>
                    </div>
                  </div>

                  <div className="testimonials-stars" aria-hidden="true">
                    {Array.from({ length: current.rating }).map((_, starIndex) => (
                      <span key={starIndex} className="testimonials-star">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="testimonials-side-copy">
                    Trusted by discerning investors seeking precision, confidentiality, and
                    decisive market guidance.
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="testimonials-selector-list">
                {testimonials.map((item, itemIndex) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setIndex(itemIndex)}
                    className={`testimonials-selector ${
                      itemIndex === index ? "testimonials-selector-active" : ""
                    }`}
                    aria-label={`Show testimonial from ${item.name}`}
                  >
                    <div
                      className="testimonials-selector-avatar"
                      style={{ backgroundImage: `url(${item.avatar})` }}
                    />

                    <div className="testimonials-selector-meta">
                      <span className="testimonials-selector-name">{item.name}</span>
                      <span className="testimonials-selector-role">{item.role}</span>
                    </div>

                    <span className="testimonials-selector-arrow">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
