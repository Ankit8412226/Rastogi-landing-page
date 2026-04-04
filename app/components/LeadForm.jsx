"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState } from "react";
import { socialLinks } from "../lib/site-data";

const contactDetails = [
  { icon: MapPin, label: "702, Om Tower, Alpha-1, Greater Noida" },
  { icon: Phone, label: "+91 98103 54215" },
  { icon: Mail, label: "rastogipropertiesindia@gmail.com" },
  { icon: Clock, label: "Mon-Sat, 9AM-7PM" },
];

const socials = [
  { label: "IG", href: socialLinks.instagram },
  { label: "LI", href: socialLinks.linkedin },
  { label: "FB", href: socialLinks.facebook },
  { label: "WA", href: socialLinks.whatsapp },
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

export default function LeadForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <style>{`
        .leadform-root {
          width: 100%;
          background: #04241b;
          padding: 4rem 0;
        }

        .leadform-shell {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }

        .leadform-header {
          max-width: 46rem;
          margin: 0 auto 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }

        .leadform-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.55rem 1.25rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .leadform-pill-dot {
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 999px;
          background: #d4af37;
          animation: leadform-pulse 1.5s ease-in-out infinite;
        }

        .leadform-pill-text {
          color: #d4af37;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.28em;
        }

        .leadform-title {
          margin: 0;
          color: #ffffff;
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.04em;
        }

        .leadform-title-accent {
          color: #d4af37;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .leadform-copy {
          max-width: 34rem;
          color: rgba(255, 255, 255, 0.42);
          font-size: 1rem;
          line-height: 1.8;
          font-weight: 300;
        }

        .leadform-panel {
          display: grid;
          grid-template-columns: minmax(18rem, 0.95fr) minmax(0, 1.25fr);
          overflow: hidden;
          border-radius: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          box-shadow: 0 26px 60px rgba(0, 0, 0, 0.2);
        }

        .leadform-info {
          position: relative;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(160deg, #0a3d26 0%, #04241b 62%);
          overflow: hidden;
        }

        .leadform-info::before,
        .leadform-info::after {
          content: "";
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
        }

        .leadform-info::before {
          top: -4rem;
          right: -4rem;
          width: 16rem;
          height: 16rem;
          background: rgba(212, 175, 55, 0.08);
          filter: blur(70px);
        }

        .leadform-info::after {
          bottom: -3rem;
          left: -2rem;
          width: 12rem;
          height: 12rem;
          background: rgba(6, 78, 59, 0.2);
          filter: blur(60px);
        }

        .leadform-info-inner,
        .leadform-socials {
          position: relative;
          z-index: 1;
        }

        .leadform-info-kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .leadform-info-line {
          width: 2rem;
          height: 1px;
          background: #d4af37;
        }

        .leadform-info-kicker-text {
          color: #d4af37;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.28em;
        }

        .leadform-info-title {
          margin: 0 0 1rem;
          color: #ffffff;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
        }

        .leadform-info-title-accent {
          color: #d4af37;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .leadform-info-copy {
          max-width: 18rem;
          margin: 0 0 2.25rem;
          color: rgba(255, 255, 255, 0.46);
          font-size: 0.95rem;
          line-height: 1.75;
        }

        .leadform-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .leadform-detail {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .leadform-detail-icon {
          width: 2.75rem;
          height: 2.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #d4af37;
          transition:
            border-color 0.35s ease,
            background 0.35s ease,
            transform 0.35s ease;
        }

        .leadform-detail:hover .leadform-detail-icon {
          transform: translateY(-2px);
          background: rgba(212, 175, 55, 0.1);
          border-color: rgba(212, 175, 55, 0.28);
        }

        .leadform-detail-text {
          color: rgba(255, 255, 255, 0.68);
          font-size: 0.92rem;
          line-height: 1.5;
          transition: color 0.3s ease;
        }

        .leadform-detail:hover .leadform-detail-text {
          color: rgba(255, 255, 255, 0.95);
        }

        .leadform-socials {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .leadform-social {
          position: relative;
          width: 2.75rem;
          height: 2.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: transparent;
          color: rgba(255, 255, 255, 0.42);
          font-size: 0.62rem;
          font-weight: 700;
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            color 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease;
        }

        .leadform-social::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.28), transparent);
          transition: left 0.6s ease;
        }

        .leadform-social:hover {
          transform: translateY(-4px) scale(1.04);
          background: linear-gradient(135deg, #d4af37 0%, #bf9460 100%);
          border-color: rgba(212, 175, 55, 0.6);
          color: #ffffff;
          box-shadow: 0 18px 34px rgba(212, 175, 55, 0.22);
        }

        .leadform-social:hover::before {
          left: 100%;
        }

        .leadform-form-wrap {
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.02);
        }

        .leadform-success {
          min-height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          text-align: center;
          padding: 2rem 0;
        }

        .leadform-success-icon {
          width: 5rem;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.2);
          color: #d4af37;
        }

        .leadform-success-title {
          margin: 0 0 0.5rem;
          color: #ffffff;
          font-size: 1.75rem;
          font-weight: 800;
        }

        .leadform-success-copy {
          max-width: 18rem;
          margin: 0;
          color: rgba(255, 255, 255, 0.46);
          font-size: 0.92rem;
          line-height: 1.7;
        }

        .leadform-secondary-btn {
          ${buttonStyles}
          padding: 0.95rem 1.75rem;
        }

        .leadform-secondary-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: all 0.6s;
        }

        .leadform-secondary-btn:hover::before {
          left: 100%;
        }

        .leadform-secondary-btn:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.4);
        }

        .leadform-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .leadform-form-head {
          margin-bottom: 0.25rem;
        }

        .leadform-form-title {
          margin: 0 0 0.3rem;
          color: #ffffff;
          font-size: 1.4rem;
          font-weight: 800;
        }

        .leadform-form-copy {
          margin: 0;
          color: rgba(255, 255, 255, 0.35);
          font-size: 0.78rem;
        }

        .leadform-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .leadform-field {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .leadform-label {
          color: rgba(255, 255, 255, 0.42);
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .leadform-input,
        .leadform-select,
        .leadform-textarea {
          width: 100%;
          padding: 0.95rem 1rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          font-size: 0.92rem;
          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
        }

        .leadform-input::placeholder,
        .leadform-textarea::placeholder {
          color: rgba(255, 255, 255, 0.26);
        }

        .leadform-select {
          appearance: none;
        }

        .leadform-input:focus,
        .leadform-select:focus,
        .leadform-textarea:focus {
          outline: none;
          border-color: rgba(212, 175, 55, 0.45);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.08);
          transform: translateY(-1px);
        }

        .leadform-select option {
          background: #04241b;
          color: #ffffff;
        }

        .leadform-textarea {
          min-height: 7rem;
          resize: none;
        }

        .leadform-submit {
          ${buttonStyles}
          width: 100%;
          padding: 1.05rem 1.5rem;
        }

        .leadform-submit::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: all 0.6s;
        }

        .leadform-submit:hover::before {
          left: 100%;
        }

        .leadform-submit:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.4);
        }

        .leadform-note {
          margin: 0;
          color: rgba(255, 255, 255, 0.2);
          text-align: center;
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        @keyframes leadform-pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.45;
            transform: scale(0.82);
          }
        }

        @media (min-width: 768px) {
          .leadform-root {
            padding: 5rem 0;
          }

          .leadform-shell {
            padding: 0 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .leadform-root {
            padding: 6rem 0;
          }

          .leadform-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 1023px) {
          .leadform-panel {
            grid-template-columns: 1fr;
          }

          .leadform-info,
          .leadform-form-wrap {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 767px) {
          .leadform-header {
            margin-bottom: 3rem;
          }

          .leadform-pill-text {
            letter-spacing: 0.22em;
          }

          .leadform-grid {
            grid-template-columns: 1fr;
          }

          .leadform-submit,
          .leadform-secondary-btn {
            letter-spacing: 0.16em;
          }
        }
      `}</style>

      <section id="contact" ref={ref} className="leadform-root">
        <div className="leadform-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="leadform-header"
          >
            <div className="leadform-pill">
              <span className="leadform-pill-dot" />
              <span className="leadform-pill-text">Free Consultation</span>
            </div>
            <h2 className="leadform-title">
              Let&apos;s Find Your <span className="leadform-title-accent">Dream</span> Property
            </h2>
            <p className="leadform-copy">
              Talk to our expert advisors today. No obligation, zero pressure, just the right
              guidance tailored to your goals.
            </p>
          </motion.div>

          <div className="leadform-panel">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="leadform-info"
            >
              <div className="leadform-info-inner">
                <div className="leadform-info-kicker">
                  <span className="leadform-info-line" />
                  <span className="leadform-info-kicker-text">Get In Touch</span>
                </div>

                <h3 className="leadform-info-title">
                  Ready to Start <br />
                  <span className="leadform-info-title-accent">Your Journey?</span>
                </h3>
                <p className="leadform-info-copy">
                  Our advisors have helped 2,400+ families and investors secure the right address
                  across NCR.
                </p>

                <div className="leadform-details">
                  {contactDetails.map(({ icon: Icon, label }) => (
                    <div key={label} className="leadform-detail">
                      <div className="leadform-detail-icon">
                        <Icon size={16} />
                      </div>
                      <span className="leadform-detail-text">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="leadform-socials">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="leadform-social"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${social.label}`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="leadform-form-wrap"
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="leadform-success"
                >
                  <div className="leadform-success-icon">
                    <CheckCircle2 size={34} />
                  </div>
                  <div>
                    <h3 className="leadform-success-title">Enquiry Received!</h3>
                    <p className="leadform-success-copy">
                      Our advisor will call you within 2 hours. Keep your phone and WhatsApp
                      available.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="leadform-secondary-btn"
                  >
                    Submit Another
                    <ArrowUpRight size={15} />
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="leadform-form">
                  <div className="leadform-form-head">
                    <h3 className="leadform-form-title">Book a Free Consultation</h3>
                    <p className="leadform-form-copy">
                      Fill in your details. We&apos;ll do the rest with speed and discretion.
                    </p>
                  </div>

                  <div className="leadform-grid">
                    <div className="leadform-field">
                      <label className="leadform-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ankit Kumar"
                        value={form.name}
                        onChange={(event) => setForm({ ...form, name: event.target.value })}
                        className="leadform-input"
                      />
                    </div>

                    <div className="leadform-field">
                      <label className="leadform-label">Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98103 54215"
                        value={form.phone}
                        onChange={(event) => setForm({ ...form, phone: event.target.value })}
                        className="leadform-input"
                      />
                    </div>
                  </div>

                  <div className="leadform-field">
                    <label className="leadform-label">Email</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      className="leadform-input"
                    />
                  </div>

                  <div className="leadform-grid">
                    <div className="leadform-field">
                      <label className="leadform-label">Property Type</label>
                      <select
                        value={form.type}
                        onChange={(event) => setForm({ ...form, type: event.target.value })}
                        className="leadform-select"
                      >
                        <option value="">Select Type</option>
                        <option value="Residential Flat">Residential Flat</option>
                        <option value="Plot">Plot</option>
                        <option value="Villa / Duplex">Villa / Duplex</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                    </div>

                    <div className="leadform-field">
                      <label className="leadform-label">Budget Range</label>
                      <select
                        value={form.budget}
                        onChange={(event) => setForm({ ...form, budget: event.target.value })}
                        className="leadform-select"
                      >
                        <option value="">Select Budget</option>
                        <option value="Under 50 Lakh">Under Rs50 Lakh</option>
                        <option value="50L - 1 Cr">Rs50L - Rs1 Cr</option>
                        <option value="1 Cr - 2 Cr">Rs1 Cr - Rs2 Cr</option>
                        <option value="Above 2 Cr">Above Rs2 Cr</option>
                      </select>
                    </div>
                  </div>

                  <div className="leadform-field">
                    <label className="leadform-label">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what you're looking for..."
                      value={form.message}
                      onChange={(event) => setForm({ ...form, message: event.target.value })}
                      className="leadform-textarea"
                    />
                  </div>

                  <button type="submit" className="leadform-submit">
                    Send Enquiry
                    <ArrowUpRight size={16} />
                  </button>

                  <p className="leadform-note">No spam. Your data is safe with us.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
