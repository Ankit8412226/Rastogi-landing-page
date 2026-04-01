"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const properties = [
  {
    id: 1,
    title: "Yamuna Expressway Plots",
    location: "Sector 18, 20 & 22",
    tag: "Investment High-Yield",
    price: "INR 2.45 Cr onwards",
    image: "/images/property_1.png",
    note: "Fast-moving corridor",
    detailA: "Premium Land Bank",
    detailB: "Long-term Growth",
  },
  {
    id: 2,
    title: "Luxury Villas & Floors",
    location: "Noida Expressway, Sector 150",
    tag: "Residential",
    price: "INR 3.80 Cr onwards",
    image: "/images/property_2.png",
    note: "Private estate living",
    detailA: "Resort-style Access",
    detailB: "Low Density",
  },
  {
    id: 3,
    title: "High-End Office Spaces",
    location: "Advant Navis, Greater Noida West",
    tag: "Commercial",
    price: "INR 1.20 Cr onwards",
    image: "/images/property_3.png",
    note: "Institutional-grade asset",
    detailA: "Yield Focused",
    detailB: "Business District",
  },
];

export default function Properties() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <style>{`
        .properties-root {
          width: 100%;
          padding: 4rem 0;
          background: #f8faf9;
        }

        .properties-shell {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }

        .properties-header {
          margin: 0 auto 5rem;
          max-width: 48rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        .properties-kicker {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
        }

        .properties-kicker-line {
          width: 2rem;
          height: 1px;
          background: #d4af37;
        }

        .properties-kicker-text {
          color: #064e3b;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }

        .properties-title {
          margin: 0;
          max-width: 50rem;
          color: #064e3b;
          font-size: clamp(2.2rem, 5vw, 4.2rem);
          font-weight: 800;
          line-height: 1.02;
          letter-spacing: -0.04em;
        }

        .properties-title-accent {
          color: #d4af37;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .properties-copy {
          max-width: 40rem;
          color: #64748b;
          font-size: clamp(1rem, 1.4vw, 1.125rem);
          font-weight: 300;
          line-height: 1.8;
        }

        .properties-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2rem;
          width: 100%;
        }

        .property-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          overflow: hidden;
          border-radius: 2rem;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 249, 247, 0.98) 100%);
          border: 1px solid rgba(6, 78, 59, 0.08);
          box-shadow: 0 20px 55px rgba(6, 78, 59, 0.08);
          transition:
            transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.45s ease,
            border-color 0.45s ease;
        }

        .property-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(212, 175, 55, 0.18), transparent 40%),
            linear-gradient(180deg, rgba(212, 175, 55, 0.03), transparent 38%);
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
          z-index: 0;
        }

        .property-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: 1.5rem;
          right: 1.5rem;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, #d4af37 0%, #f2df9f 45%, #d4af37 100%);
          opacity: 0;
          transform: scaleX(0.65);
          transform-origin: center;
          transition: opacity 0.45s ease, transform 0.45s ease;
          z-index: 2;
        }

        .property-card:hover {
          transform: translateY(-14px);
          border-color: rgba(212, 175, 55, 0.28);
          box-shadow: 0 30px 80px rgba(6, 78, 59, 0.14);
        }

        .property-card:hover::before,
        .property-card:hover::after {
          opacity: 1;
        }

        .property-card:hover::after {
          transform: scaleX(1);
        }

        .property-media {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #04241b;
        }

        .property-image {
          object-fit: cover;
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
        }

        .property-card:hover .property-image {
          transform: scale(1.08);
          filter: saturate(1.08);
        }

        .property-media-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(4, 36, 27, 0.16) 0%, rgba(4, 36, 27, 0.08) 36%, rgba(4, 36, 27, 0.9) 100%);
        }

        .property-tag {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.65rem 1rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(14px);
          color: #ffffff;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          z-index: 2;
        }

        .property-arrow {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(14px);
          z-index: 2;
          transition: transform 0.35s ease, background 0.35s ease, border-color 0.35s ease;
        }

        .property-card:hover .property-arrow {
          transform: translateY(-4px) rotate(-4deg);
          background: #d4af37;
          border-color: #d4af37;
        }

        .property-arrow svg {
          color: #ffffff;
          transition: color 0.35s ease, transform 0.35s ease;
        }

        .property-card:hover .property-arrow svg {
          color: #04241b;
          transform: translate(2px, -2px);
        }

        .property-media-content {
          position: absolute;
          inset: auto 0 0 0;
          padding: 1.75rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          z-index: 2;
        }

        .property-location {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.68);
          font-size: 0.68rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .property-title {
          margin: 0;
          max-width: 15ch;
          color: #ffffff;
          font-size: clamp(1.75rem, 2vw, 2.25rem);
          font-weight: 700;
          line-height: 1.04;
          letter-spacing: -0.03em;
        }

        .property-note {
          color: rgba(255, 255, 255, 0.62);
          font-size: 0.82rem;
          line-height: 1.6;
          max-width: 26ch;
        }

        .property-body {
          position: relative;
          z-index: 1;
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1.5rem;
        }

        .property-price-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .property-price-label {
          margin-bottom: 0.5rem;
          color: rgba(6, 78, 59, 0.42);
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .property-price {
          color: #064e3b;
          font-size: clamp(1.45rem, 2vw, 1.9rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .property-featured {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.6rem 0.9rem;
          border-radius: 999px;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.2);
          color: #d4af37;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          white-space: nowrap;
        }

        .property-featured-dot {
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 999px;
          background: #d4af37;
          box-shadow: 0 0 0 6px rgba(212, 175, 55, 0.08);
        }

        .property-stats {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
        }

        .property-stat {
          padding: 0.9rem 1rem;
          border-radius: 1.1rem;
          background: rgba(6, 78, 59, 0.03);
          border: 1px solid rgba(6, 78, 59, 0.07);
          transition: transform 0.35s ease, border-color 0.35s ease, background 0.35s ease;
        }

        .property-card:hover .property-stat {
          transform: translateY(-2px);
          border-color: rgba(212, 175, 55, 0.16);
          background: rgba(212, 175, 55, 0.05);
        }

        .property-stat-label {
          display: block;
          margin-bottom: 0.35rem;
          color: rgba(6, 78, 59, 0.42);
          font-size: 0.54rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .property-stat-value {
          color: #064e3b;
          font-size: 0.9rem;
          font-weight: 700;
          line-height: 1.4;
        }

        .property-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1.1rem;
          border-top: 1px solid rgba(6, 78, 59, 0.08);
        }

        .property-footer-label {
          color: #064e3b;
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .property-footer-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: #94a3b8;
          font-size: 0.92rem;
          font-weight: 600;
          transition: color 0.35s ease, transform 0.35s ease;
        }

        .property-card:hover .property-footer-link {
          color: #d4af37;
          transform: translateX(4px);
        }

        .properties-cta-wrap {
          margin-top: 5rem;
          display: flex;
          justify-content: center;
        }

        .properties-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: none;
          border-radius: 999px;
          padding: 1.2rem 3rem;
          background: linear-gradient(135deg, #d4af37 0%, #bf9460 100%);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-decoration: none;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .properties-cta::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: all 0.6s;
        }

        .properties-cta:hover::before {
          left: 100%;
        }

        .properties-cta:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.4);
        }

        @media (min-width: 768px) {
          .properties-root {
            padding: 5rem 0;
          }

          .properties-shell {
            padding: 0 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .properties-root {
            padding: 6rem 0;
          }

          .properties-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 1199px) {
          .properties-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .properties-header {
            margin-bottom: 3rem;
            gap: 1.15rem;
          }

          .properties-kicker {
            gap: 0.75rem;
          }

          .properties-kicker-text {
            font-size: 0.64rem;
            letter-spacing: 0.22em;
          }

          .properties-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .property-tag,
          .property-arrow {
            top: 1rem;
          }

          .property-tag {
            left: 1rem;
            max-width: calc(100% - 5rem);
          }

          .property-arrow {
            right: 1rem;
            width: 2.75rem;
            height: 2.75rem;
          }

          .property-media-content,
          .property-body {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }

          .property-price-row,
          .property-footer {
            flex-direction: column;
            align-items: flex-start;
          }

          .property-stats {
            grid-template-columns: 1fr;
          }

          .properties-cta {
            width: 100%;
            text-align: center;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
      `}</style>

      <section id="properties" className="properties-root" ref={ref}>
        <div className="properties-shell">
          <div className="properties-header">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="properties-kicker"
            >
              <span className="properties-kicker-line" />
              <span className="properties-kicker-text">Exclusive Residences</span>
              <span className="properties-kicker-line" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.98 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="properties-title"
            >
              Curated <span className="properties-title-accent">Spaces</span> for Elite Living
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
              className="properties-copy"
            >
              From ultra-luxury villas to strategic commercial assets, we represent only the most
              distinguished property portfolios in North India.
            </motion.p>
          </div>

          <div className="properties-grid">
            {properties.map((property, idx) => (
              <motion.article
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.16, duration: 0.8 }}
                className="property-card"
              >
                <div className="property-media">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                    className="property-image"
                  />

                  <div className="property-media-overlay" />

                  <div className="property-tag">{property.tag}</div>

                  <div className="property-arrow">
                    <ArrowUpRight size={18} />
                  </div>

                  <div className="property-media-content">
                    <div className="property-location">
                      <MapPin size={14} color="#d4af37" />
                      <span>{property.location}</span>
                    </div>

                    <h3 className="property-title">{property.title}</h3>
                    <p className="property-note">{property.note}</p>
                  </div>
                </div>

                <div className="property-body">
                  <div className="property-price-row">
                    <div>
                      <div className="property-price-label">Starting from</div>
                      <div className="property-price">{property.price}</div>
                    </div>

                    <div className="property-featured">
                      <span className="property-featured-dot" />
                      Featured
                    </div>
                  </div>

                  <div className="property-stats">
                    <div className="property-stat">
                      <span className="property-stat-label">Asset Type</span>
                      <span className="property-stat-value">{property.detailA}</span>
                    </div>
                    <div className="property-stat">
                      <span className="property-stat-label">Positioning</span>
                      <span className="property-stat-value">{property.detailB}</span>
                    </div>
                  </div>

                  <div className="property-footer">
                    <span className="property-footer-label">Explore Property</span>
                    <span className="property-footer-link">
                      Private tour
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="properties-cta-wrap"
          >
            <a href="#properties" className="properties-cta">
              Explore All Listings
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
