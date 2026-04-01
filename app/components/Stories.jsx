"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stories = [
  {
    title: "Greater Noida: In-Transit Real Estate Powerhouse",
    tag: "Market Insights",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    time: "2 days ago",
  },
  {
    title: "Jewar Airport Evolution: Impact on Regional Wealth",
    tag: "Investment",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    time: "5 days ago",
  },
  {
    title: "The Ultimate Guide to Commercial SCO Plots",
    tag: "Commercial",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    time: "1 week ago",
  },
];

export default function Stories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <style>{`
        .stories-root {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #f8faf9;
          padding: 4rem 0;
        }

        .stories-shell {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stories-header {
          max-width: 56rem;
          margin: 0 auto 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        .stories-pill {
          display: inline-flex;
          align-items: center;
          padding: 0.55rem 1.5rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid #f3f4f6;
        }

        .stories-pill-text {
          color: #064e3b;
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.4em;
        }

        .stories-title {
          margin: 0;
          color: #064e3b;
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.04em;
        }

        .stories-title-accent {
          color: #d4af37;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .stories-copy {
          max-width: 40rem;
          color: #64748b;
          font-size: clamp(1rem, 1.4vw, 1.125rem);
          font-weight: 300;
          line-height: 1.8;
        }

        .stories-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2rem;
        }

        .stories-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
        }

        .stories-media {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          margin-bottom: 2.5rem;
          overflow: hidden;
          border-radius: 2rem;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.1);
        }

        .stories-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stories-card:hover .stories-media img {
          transform: scale(1.1);
        }

        .stories-tag {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.55rem 1rem;
          border-radius: 999px;
          background: #064e3b;
          box-shadow: 0 12px 24px rgba(6, 78, 59, 0.18);
          color: #ffffff;
          font-size: 0.56rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .stories-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6, 78, 59, 0.02) 0%, rgba(6, 78, 59, 0.34) 100%);
          transition: opacity 0.35s ease;
        }

        .stories-card:hover .stories-overlay {
          opacity: 0;
        }

        .stories-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1.5rem;
        }

        .stories-time {
          margin-bottom: 1rem;
          color: rgba(212, 175, 55, 0.6);
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .stories-name {
          margin: 0 0 1.5rem;
          color: #064e3b;
          font-size: clamp(1.5rem, 2vw, 2rem);
          font-weight: 700;
          line-height: 1.25;
          transition: color 0.35s ease;
        }

        .stories-card:hover .stories-name {
          color: #d4af37;
        }

        .stories-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          width: max-content;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(6, 78, 59, 0.1);
          color: #064e3b;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          transition: gap 0.35s ease, border-color 0.35s ease, color 0.35s ease;
        }

        .stories-link-arrow {
          color: #d4af37;
          font-size: 1.125rem;
          line-height: 1;
        }

        .stories-card:hover .stories-link {
          gap: 1.25rem;
          border-color: rgba(212, 175, 55, 0.6);
          color: #064e3b;
        }

        .stories-cta-wrap {
          margin-top: 5rem;
          display: flex;
          justify-content: center;
        }

        .stories-cta {
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

        .stories-cta::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: all 0.6s;
        }

        .stories-cta:hover::before {
          left: 100%;
        }

        .stories-cta:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.4);
        }

        @media (min-width: 768px) {
          .stories-root {
            padding: 5rem 0;
          }

          .stories-shell {
            padding: 0 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .stories-root {
            padding: 6rem 0;
          }

          .stories-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 1199px) {
          .stories-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 2rem;
          }
        }

        @media (max-width: 767px) {
          .stories-header {
            margin-bottom: 3rem;
          }

          .stories-pill-text {
            font-size: 0.58rem;
            letter-spacing: 0.28em;
          }

          .stories-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .stories-media {
            margin-bottom: 1.75rem;
          }

          .stories-content {
            padding: 0 0.5rem;
          }

          .stories-cta {
            width: 100%;
            text-align: center;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
      `}</style>

      <section id="stories" className="stories-root" ref={ref}>
        <div className="stories-shell">
          <div className="stories-header">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="stories-pill"
            >
              <span className="stories-pill-text">The Knowledge Hub</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.98 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="stories-title"
            >
              Insights <span className="stories-title-accent">&</span> Market Intelligence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
              className="stories-copy"
            >
              Stay informed with our proprietary market reports, emerging trend analysis, and
              comprehensive guides to wealth generation through real estate.
            </motion.p>
          </div>

          <div className="stories-grid">
            {stories.map((story, i) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="stories-card"
              >
                <div className="stories-media">
                  <img src={story.image} alt={story.title} />
                  <div className="stories-tag">{story.tag}</div>
                  <div className="stories-overlay" />
                </div>

                <div className="stories-content">
                  <span className="stories-time">{story.time}</span>
                  <h3 className="stories-name">{story.title}</h3>
                  <div className="stories-link">
                    Explore Insights
                    <span className="stories-link-arrow">→</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="stories-cta-wrap"
          >
            <a href="#contact" className="stories-cta">
              Explore Knowledge Hub
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
