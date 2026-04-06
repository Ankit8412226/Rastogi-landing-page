"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const interests = [
  "Residential Portfolio",
  "Commercial Assets",
  "Premium Plots",
  "Investment Advisory",
];

const contactItems = [
  { icon: "📞", tag: "Direct Advisory", value: "+91 98103 54215" },
  { icon: "✉️", tag: "Electronic Mail", value: "rastogipropertiesindia@gmail.com" },
];

const buttonStyles = `
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  overflow: hidden;
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, #d4af37 0%, #bf9460 100%);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  text-decoration: none;
  transition:
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.35s ease;
`;

export default function LeadCapture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeInterest, setActiveInterest] = useState(interests[0]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    vision: "",
  });
  const interestHrefMap = {
    "Residential Portfolio": "/properties?category=residential",
    "Commercial Assets": "/properties?category=commercial",
    "Premium Plots": "/properties?category=plots",
    "Investment Advisory": "/reports/market-forecast",
  };
  const followUpHref = interestHrefMap[activeInterest] ?? "/properties";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, activeInterest }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Please try again or contact us directly.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Let's try again in a moment.");
    }
  };

  return (
    <>
      <style>{`
        .leadcapture-root {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          padding: 4rem 0;
        }

        .leadcapture-shell {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }

        .leadcapture-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(22rem, 1fr);
          gap: 4rem;
          align-items: start;
        }

        .leadcapture-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .leadcapture-kicker {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .leadcapture-kicker-line {
          width: 2.5rem;
          height: 1px;
          background: #d4af37;
          flex-shrink: 0;
        }

        .leadcapture-kicker-text {
          color: #064e3b;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.4em;
        }

        .leadcapture-title {
          margin: 0 0 2.25rem;
          color: #064e3b;
          font-size: clamp(2.6rem, 6vw, 5.8rem);
          font-weight: 800;
          line-height: 0.98;
          letter-spacing: -0.05em;
          max-width: 10ch;
        }

        .leadcapture-title-accent {
          color: #d4af37;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .leadcapture-contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .leadcapture-contact {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .leadcapture-contact-icon {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 999px;
          background: rgba(6, 78, 59, 0.05);
          border: 1px solid rgba(6, 78, 59, 0.1);
          font-size: 1.1rem;
          transition:
            transform 0.35s ease,
            background 0.35s ease,
            border-color 0.35s ease;
        }

        .leadcapture-contact:hover .leadcapture-contact-icon {
          transform: translateY(-2px);
          background: rgba(212, 175, 55, 0.1);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .leadcapture-contact-tag {
          margin: 0 0 0.15rem;
          color: #94a3b8;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .leadcapture-contact-value {
          margin: 0;
          color: #064e3b;
          font-size: 1.05rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .leadcapture-quote {
          max-width: 34rem;
          padding: 2rem 2rem 2rem 1.75rem;
          border-left: 4px solid #d4af37;
          border-radius: 0 1.5rem 1.5rem 0;
          background: #f8faf9;
        }

        .leadcapture-quote-copy {
          margin: 0 0 1.5rem;
          color: #64748b;
          font-size: 1rem;
          font-style: italic;
          line-height: 1.9;
          font-weight: 300;
        }

        .leadcapture-quote-signoff {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .leadcapture-quote-mark {
          width: 2.25rem;
          height: 2.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #064e3b;
          color: #ffffff;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-size: 0.95rem;
          font-weight: 700;
        }

        .leadcapture-quote-name {
          color: #064e3b;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .leadcapture-card {
          position: relative;
          border-radius: 2rem;
          border: 1px solid rgba(6, 78, 59, 0.08);
          background: #ffffff;
          box-shadow: 0 26px 60px rgba(15, 23, 42, 0.08);
          overflow: hidden;
        }

        .leadcapture-card::before {
          content: "";
          position: absolute;
          inset: auto auto auto 50%;
          top: 50%;
          width: 120%;
          height: 120%;
          background: rgba(212, 175, 55, 0.05);
          filter: blur(100px);
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
        }

        .leadcapture-form {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          padding: 2.5rem;
        }

        .leadcapture-form-head {
          margin-bottom: 0.25rem;
        }

        .leadcapture-form-title {
          margin: 0 0 0.35rem;
          color: #064e3b;
          font-size: 1.55rem;
          font-weight: 800;
        }

        .leadcapture-form-copy {
          margin: 0;
          color: #94a3b8;
          font-size: 0.8rem;
          line-height: 1.7;
        }

        .leadcapture-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .leadcapture-field {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .leadcapture-label {
          color: rgba(6, 78, 59, 0.6);
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .leadcapture-input,
        .leadcapture-textarea {
          width: 100%;
          padding: 0.95rem 0;
          border: none;
          border-bottom: 1px solid rgba(6, 78, 59, 0.12);
          background: transparent;
          color: #064e3b;
          font-size: 0.95rem;
          transition:
            border-color 0.3s ease,
            transform 0.3s ease;
        }

        .leadcapture-input::placeholder,
        .leadcapture-textarea::placeholder {
          color: #94a3b8;
        }

        .leadcapture-input:focus,
        .leadcapture-textarea:focus {
          outline: none;
          border-color: rgba(212, 175, 55, 0.7);
          transform: translateY(-1px);
        }

        .leadcapture-textarea {
          min-height: 7rem;
          resize: none;
        }

        .leadcapture-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .leadcapture-tag {
          padding: 0.75rem 1rem;
          border-radius: 999px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #64748b;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease,
            color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .leadcapture-tag:hover {
          transform: translateY(-2px);
          border-color: rgba(212, 175, 55, 0.35);
          box-shadow: 0 12px 22px rgba(15, 23, 42, 0.06);
        }

        .leadcapture-tag-active {
          background: linear-gradient(135deg, #d4af37 0%, #bf9460 100%);
          border-color: rgba(212, 175, 55, 0.75);
          color: #ffffff;
          box-shadow: 0 14px 24px rgba(212, 175, 55, 0.18);
        }

        .leadcapture-submit-wrap {
          padding-top: 0.5rem;
        }

        .leadcapture-submit {
          ${buttonStyles}
          width: 100%;
          padding: 1.05rem 1.5rem;
        }

        .leadcapture-submit::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: all 0.6s;
        }

        .leadcapture-submit:hover::before {
          left: 100%;
        }

        .leadcapture-submit:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.4);
        }

        .leadcapture-note {
          margin: 0;
          color: #94a3b8;
          text-align: center;
          font-size: 0.56rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .leadcapture-success {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 2.5rem;
        }

        .leadcapture-success-kicker {
          color: #d4af37;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.24em;
        }

        .leadcapture-success-title {
          margin: 0;
          color: #064e3b;
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.04em;
        }

        .leadcapture-success-copy {
          margin: 0;
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.8;
        }

        .leadcapture-success-panel {
          border-radius: 1.5rem;
          border: 1px solid rgba(6, 78, 59, 0.08);
          background: #f8faf9;
          padding: 1.25rem;
        }

        .leadcapture-success-label {
          margin: 0 0 0.35rem;
          color: #94a3b8;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .leadcapture-success-value {
          margin: 0;
          color: #064e3b;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.6;
        }

        .leadcapture-success-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 0.25rem;
        }

        .leadcapture-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1.05rem 1.5rem;
          border-radius: 999px;
          border: 1px solid rgba(6, 78, 59, 0.12);
          color: #064e3b;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          text-decoration: none;
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            color 0.35s ease;
        }

        .leadcapture-secondary:hover {
          transform: translateY(-2px);
          border-color: rgba(212, 175, 55, 0.5);
          color: #d4af37;
        }

        @media (min-width: 768px) {
          .leadcapture-root {
            padding: 5rem 0;
          }

          .leadcapture-shell {
            padding: 0 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .leadcapture-root {
            padding: 6rem 0;
          }

          .leadcapture-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 1023px) {
          .leadcapture-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 767px) {
          .leadcapture-kicker {
            gap: 0.75rem;
          }

          .leadcapture-kicker-text {
            font-size: 0.66rem;
            letter-spacing: 0.22em;
          }

          .leadcapture-title {
            margin-bottom: 1.75rem;
            font-size: clamp(2.15rem, 10vw, 3.7rem);
          }

          .leadcapture-grid {
            grid-template-columns: 1fr;
          }

          .leadcapture-quote {
            padding: 1.5rem 1.25rem 1.5rem 1.1rem;
          }

          .leadcapture-form {
            padding: 2rem 1.25rem;
          }

          .leadcapture-submit {
            letter-spacing: 0.16em;
          }
        }
      `}</style>

      <section id="contact" className="leadcapture-root" ref={ref}>
        <div className="leadcapture-shell">
          <div className="leadcapture-layout">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="leadcapture-copy"
            >
              <div className="leadcapture-kicker">
                <span className="leadcapture-kicker-line" />
                <span className="leadcapture-kicker-text">Exclusive Advisory</span>
              </div>

              <h2 className="leadcapture-title">
                Let&apos;s Discuss <span className="leadcapture-title-accent">Your Legacy.</span>
              </h2>

              <div className="leadcapture-contact-list">
                {contactItems.map(({ icon, tag, value }) => (
                  <div key={tag} className="leadcapture-contact">
                    <div className="leadcapture-contact-icon">{icon}</div>
                    <div>
                      <p className="leadcapture-contact-tag">{tag}</p>
                      <p className="leadcapture-contact-value">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="leadcapture-quote">
                <p className="leadcapture-quote-copy">
                  &ldquo;Real estate is the most tangible path to building a lasting legacy. We
                  don&apos;t just sell plots; we architect generational wealth.&rdquo;
                </p>
                <div className="leadcapture-quote-signoff">
                  <div className="leadcapture-quote-mark">R</div>
                  <span className="leadcapture-quote-name">S.K. Rastogi - MD</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
              className="leadcapture-card"
            >
              {submitted ? (
                <div className="leadcapture-success">
                  <span className="leadcapture-success-kicker">Request Logged</span>
                  <h3 className="leadcapture-success-title">Your private brief is ready.</h3>
                  <p className="leadcapture-success-copy">
                    Until live CRM integration is added, this form now completes as a working UI
                    flow and sends you to the most relevant next page based on your selected
                    interest.
                  </p>

                  <div className="leadcapture-success-panel">
                    <p className="leadcapture-success-label">Selected Interest</p>
                    <p className="leadcapture-success-value">{activeInterest}</p>
                  </div>

                  <div className="leadcapture-success-actions">
                    <Link href={followUpHref} className="leadcapture-submit">
                      Continue to Matching Page
                      <ArrowUpRight size={16} />
                    </Link>
                    <button
                      type="button"
                      className="leadcapture-secondary"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form className="leadcapture-form" onSubmit={handleSubmit}>
                  <div className="leadcapture-form-head">
                    <h3 className="leadcapture-form-title">Private Consultation Request</h3>
                    <p className="leadcapture-form-copy">
                      Share your brief. We&apos;ll match you with the right inventory and market
                      strategy.
                    </p>
                  </div>

                  <div className="leadcapture-grid">
                    <div className="leadcapture-field">
                      <label className="leadcapture-label">Full Name</label>
                      <input
                        type="text"
                        className="leadcapture-input"
                        placeholder="Alexander Hamilton"
                        value={form.name}
                        onChange={(event) => setForm({ ...form, name: event.target.value })}
                        required
                      />
                    </div>

                    <div className="leadcapture-field">
                      <label className="leadcapture-label">Contact Number</label>
                      <input
                        type="tel"
                        className="leadcapture-input"
                        placeholder="+91 000 000 0000"
                        value={form.phone}
                        onChange={(event) => setForm({ ...form, phone: event.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="leadcapture-field">
                    <label className="leadcapture-label">Email Address</label>
                    <input
                      type="email"
                      className="leadcapture-input"
                      placeholder="alexander@legacy.com"
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                    />
                  </div>

                  <div className="leadcapture-field">
                    <label className="leadcapture-label">Portfolio Interest</label>
                    <div className="leadcapture-tags">
                      {interests.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setActiveInterest(tag)}
                          className={`leadcapture-tag ${
                            activeInterest === tag ? "leadcapture-tag-active" : ""
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="leadcapture-field">
                    <label className="leadcapture-label">Your Vision (Optional)</label>
                    <textarea
                      rows={4}
                      className="leadcapture-textarea"
                      placeholder="Describe your investment objectives..."
                      value={form.vision}
                      onChange={(event) => setForm({ ...form, vision: event.target.value })}
                    />
                  </div>

                  <div className="leadcapture-submit-wrap">
                    <button type="submit" className="leadcapture-submit">
                      Check Exclusive Inventory
                      <ArrowUpRight size={16} />
                    </button>
                  </div>

                  <p className="leadcapture-note">
                    Your data is protected by grade-A encryption and privacy protocols.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
