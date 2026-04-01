"use client";

export default function PremiumRouteShell({ children }) {
  return (
    <>
      <style>{`
        .premium-route-root {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 4rem 0 5rem;
          background:
            radial-gradient(circle at top right, rgba(212, 175, 55, 0.12), transparent 32%),
            radial-gradient(circle at bottom left, rgba(6, 78, 59, 0.08), transparent 28%),
            linear-gradient(180deg, #f8faf9 0%, #ffffff 46%, #f8faf9 100%);
        }

        .premium-route-orb {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(100px);
        }

        .premium-route-orb-a {
          top: 3rem;
          right: -5rem;
          width: 18rem;
          height: 18rem;
          background: rgba(212, 175, 55, 0.12);
        }

        .premium-route-orb-b {
          left: -6rem;
          bottom: 2rem;
          width: 16rem;
          height: 16rem;
          background: rgba(6, 78, 59, 0.08);
        }

        .premium-route-shell {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
          box-sizing: border-box;
        }

        .premium-route-stack {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .premium-route-header {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .premium-route-header-left {
          align-items: flex-start;
          text-align: left;
        }

        .premium-route-header-center {
          max-width: 56rem;
          margin-left: auto;
          margin-right: auto;
          align-items: center;
          text-align: center;
        }

        .premium-route-header-bar {
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .premium-route-kicker {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
        }

        .premium-route-kicker-line {
          width: 2rem;
          height: 1px;
          background: #d4af37;
        }

        .premium-route-kicker-text {
          color: #064e3b;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }

        .premium-route-title {
          margin: 0;
          color: #064e3b;
          font-size: clamp(2.3rem, 5vw, 4.8rem);
          font-weight: 800;
          line-height: 1.02;
          letter-spacing: -0.05em;
        }

        .premium-route-title-accent {
          color: #d4af37;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .premium-route-copy {
          max-width: 44rem;
          margin: 0;
          color: #64748b;
          font-size: clamp(1rem, 1.4vw, 1.08rem);
          font-weight: 300;
          line-height: 1.85;
        }

        .premium-route-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          padding: 0.85rem 1.3rem;
          border-radius: 999px;
          border: 1px solid rgba(6, 78, 59, 0.08);
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 14px 28px rgba(15, 23, 42, 0.04);
          color: rgba(6, 78, 59, 0.72);
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          backdrop-filter: blur(12px);
        }

        .premium-route-grid {
          width: 100%;
          display: grid;
          gap: 2rem;
        }

        .premium-route-grid-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .premium-route-grid-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .premium-route-grid-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .premium-route-split {
          grid-template-columns: minmax(0, 1.12fr) minmax(18rem, 0.88fr);
          align-items: start;
        }

        .premium-route-card {
          position: relative;
          overflow: hidden;
          border-radius: 2rem;
          border: 1px solid rgba(6, 78, 59, 0.08);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.98) 0%,
            rgba(245, 249, 247, 0.98) 100%
          );
          box-shadow: 0 22px 55px rgba(15, 23, 42, 0.06);
        }

        .premium-route-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(212, 175, 55, 0.12), transparent 34%),
            linear-gradient(180deg, rgba(212, 175, 55, 0.03), transparent 36%);
          pointer-events: none;
          z-index: 0;
        }

        .premium-route-card-interactive {
          transition:
            transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.45s ease,
            box-shadow 0.45s ease;
        }

        .premium-route-card-interactive::after {
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

        .premium-route-card-interactive:hover {
          transform: translateY(-12px);
          border-color: rgba(212, 175, 55, 0.24);
          box-shadow: 0 32px 80px rgba(6, 78, 59, 0.12);
        }

        .premium-route-card-interactive:hover::after {
          opacity: 1;
          transform: scaleX(1);
        }

        .premium-route-card-dark {
          background: linear-gradient(160deg, #0b3b29 0%, #04241b 62%);
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.18);
          color: #ffffff;
        }

        .premium-route-card-dark::before {
          background:
            radial-gradient(circle at top right, rgba(212, 175, 55, 0.18), transparent 36%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 32%);
        }

        .premium-route-body {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 1.5rem;
        }

        .premium-route-body-lg {
          padding: 2rem;
        }

        .premium-route-media {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 10;
          background: #04241b;
        }

        .premium-route-media-tall {
          aspect-ratio: 4 / 5;
        }

        .premium-route-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
        }

        .premium-route-card-interactive:hover .premium-route-media img {
          transform: scale(1.07);
          filter: saturate(1.08);
        }

        .premium-route-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(4, 36, 27, 0.12) 0%,
            rgba(4, 36, 27, 0.12) 36%,
            rgba(4, 36, 27, 0.9) 100%
          );
        }

        .premium-route-badge {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.6rem 0.95rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(14px);
          color: #ffffff;
          font-size: 0.58rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          z-index: 2;
        }

        .premium-route-card-kicker {
          margin: 0;
          color: #d4af37;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.24em;
        }

        .premium-route-card-title {
          margin: 0;
          color: #064e3b;
          font-size: clamp(1.55rem, 2vw, 2.25rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .premium-route-card-dark .premium-route-card-title,
        .premium-route-card-dark .premium-route-detail-value,
        .premium-route-card-dark .premium-route-list-item,
        .premium-route-card-dark .premium-route-caption,
        .premium-route-card-dark .premium-route-note {
          color: #ffffff;
        }

        .premium-route-card-copy {
          margin: 0;
          color: #64748b;
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.8;
        }

        .premium-route-card-dark .premium-route-card-copy {
          color: rgba(255, 255, 255, 0.68);
        }

        .premium-route-divider {
          width: 100%;
          height: 1px;
          background: rgba(6, 78, 59, 0.08);
        }

        .premium-route-card-dark .premium-route-divider {
          background: rgba(255, 255, 255, 0.1);
        }

        .premium-route-detail-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.85rem;
        }

        .premium-route-detail-grid-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .premium-route-detail {
          padding: 1rem 1.1rem;
          border-radius: 1.2rem;
          border: 1px solid rgba(6, 78, 59, 0.08);
          background: rgba(6, 78, 59, 0.03);
        }

        .premium-route-card-dark .premium-route-detail {
          border-color: rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.05);
        }

        .premium-route-detail-label {
          display: block;
          margin-bottom: 0.45rem;
          color: rgba(6, 78, 59, 0.42);
          font-size: 0.58rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .premium-route-card-dark .premium-route-detail-label {
          color: rgba(255, 255, 255, 0.34);
        }

        .premium-route-detail-value {
          color: #064e3b;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.55;
        }

        .premium-route-note {
          margin: 0;
          color: rgba(6, 78, 59, 0.42);
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .premium-route-caption {
          margin: 0;
          color: #064e3b;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.7;
        }

        .premium-route-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .premium-route-list-item {
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.8;
        }

        .premium-route-list-dot {
          width: 0.55rem;
          height: 0.55rem;
          margin-top: 0.72rem;
          flex-shrink: 0;
          border-radius: 999px;
          background: #d4af37;
          box-shadow: 0 0 0 6px rgba(212, 175, 55, 0.08);
        }

        .premium-route-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .premium-route-btn-primary,
        .premium-route-btn-secondary {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 999px;
          text-decoration: none;
          transition:
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.35s ease,
            color 0.35s ease,
            background 0.35s ease;
        }

        .premium-route-btn-primary {
          padding: 1.05rem 1.8rem;
          border: none;
          background: linear-gradient(135deg, #d4af37 0%, #bf9460 100%);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
          color: #ffffff;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.24em;
        }

        .premium-route-btn-primary::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: all 0.6s;
        }

        .premium-route-btn-primary:hover::before {
          left: 100%;
        }

        .premium-route-btn-primary:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.4);
        }

        .premium-route-btn-secondary {
          padding: 1rem 1.7rem;
          border: 1px solid rgba(6, 78, 59, 0.12);
          background: rgba(255, 255, 255, 0.8);
          color: #064e3b;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          backdrop-filter: blur(12px);
        }

        .premium-route-btn-secondary:hover {
          transform: translateY(-3px);
          border-color: rgba(212, 175, 55, 0.45);
          color: #d4af37;
          box-shadow: 0 18px 34px rgba(15, 23, 42, 0.07);
        }

        .premium-route-link-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .premium-route-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          width: fit-content;
          color: #064e3b;
          font-size: 0.95rem;
          font-weight: 600;
          line-height: 1.6;
          text-decoration: none;
          transition: color 0.35s ease, transform 0.35s ease, gap 0.35s ease;
        }

        .premium-route-link::before {
          content: "";
          width: 0.85rem;
          height: 1px;
          background: #d4af37;
          transition: width 0.35s ease;
        }

        .premium-route-link:hover {
          gap: 1rem;
          color: #d4af37;
          transform: translateX(4px);
        }

        .premium-route-link:hover::before {
          width: 1.2rem;
        }

        .premium-route-empty {
          align-items: center;
          text-align: center;
          padding: 3rem 2rem;
        }

        .premium-route-empty-title {
          margin: 0;
          color: #064e3b;
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        @media (min-width: 768px) {
          .premium-route-root {
            padding: 5rem 0 6rem;
          }

          .premium-route-shell {
            padding: 0 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .premium-route-root {
            padding: 6rem 0 7rem;
          }

          .premium-route-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 1199px) {
          .premium-route-grid-3,
          .premium-route-grid-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1023px) {
          .premium-route-split {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .premium-route-header {
            margin-bottom: 3rem;
          }

          .premium-route-header-bar {
            flex-direction: column;
            align-items: flex-start;
          }

          .premium-route-header-center .premium-route-header-bar {
            align-items: center;
          }

          .premium-route-kicker {
            gap: 0.75rem;
          }

          .premium-route-kicker-text {
            font-size: 0.64rem;
            letter-spacing: 0.24em;
          }

          .premium-route-grid-2,
          .premium-route-grid-3,
          .premium-route-grid-4,
          .premium-route-detail-grid,
          .premium-route-detail-grid-3 {
            grid-template-columns: 1fr;
          }

          .premium-route-card,
          .premium-route-card-dark {
            border-radius: 1.6rem;
          }

          .premium-route-body,
          .premium-route-body-lg {
            padding: 1.35rem;
          }

          .premium-route-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .premium-route-btn-primary,
          .premium-route-btn-secondary {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <section className="premium-route-root">
        <div className="premium-route-orb premium-route-orb-a" />
        <div className="premium-route-orb premium-route-orb-b" />
        <div className="premium-route-shell">{children}</div>
      </section>
    </>
  );
}
