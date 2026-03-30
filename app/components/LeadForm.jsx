"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function LeadForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "", budget: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr] rounded-[22px] overflow-hidden">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative p-8 sm:p-12"
            style={{
              background: "linear-gradient(145deg, #1a1612 0%, #262218 60%, #1e1b14 100%)"
            }}
          >
            <div className="absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#bf9460]/10 blur-[60px] pointer-events-none" />
            <p className="section-tag" style={{ color: "#d7b487" }}>GET IN TOUCH</p>
            <h2 className="text-[42px] sm:text-[52px] font-bold leading-[0.93] tracking-[-0.05em] text-white mt-2">
              Ready to Find<br />Your Dream<br />Property?
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Talk to our expert advisors today. Free consultation, no obligation, zero pressure.
            </p>
            <div className="mt-8 space-y-4 text-sm text-white/70">
              {[
                { icon: "📍", label: "Greater Noida & NCR" },
                { icon: "📞", label: "+91 98765 43210" },
                { icon: "✉️", label: "info@rastogiproperties.in" },
                { icon: "🕐", label: "Mon–Sat, 9AM–7PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              {["📷", "💼", "🐦", "▶️"].map((icon, i) => (
                <button
                  key={i}
                  className="h-9 w-9 rounded-full border border-white/15 grid place-items-center text-base hover:border-[#bf9460]/50 hover:bg-[#bf9460]/10 transition-colors duration-200"
                >
                  {icon}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right form panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white p-8 sm:p-12"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-4"
              >
                <div className="text-6xl">🏠</div>
                <h3 className="text-2xl font-bold text-[#262626]">Thank You!</h3>
                <p className="text-sm text-[#6a6a6a]">
                  Our expert will call you within 2 hours. Check your WhatsApp too!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 rounded-full bg-[#bf9460] px-6 py-3 text-sm font-semibold text-white"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-[#262626] mb-2">Book a Free Consultation</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-semibold text-[#4a4a4a] uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ankit Kumar"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="premium-input rounded-[10px] border border-[#e0dbd4] bg-[#faf9f7] px-4 py-3 text-sm text-[#262626] placeholder:text-[#aaa]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-semibold text-[#4a4a4a] uppercase tracking-wider">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="premium-input rounded-[10px] border border-[#e0dbd4] bg-[#faf9f7] px-4 py-3 text-sm text-[#262626] placeholder:text-[#aaa]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-semibold text-[#4a4a4a] uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="premium-input rounded-[10px] border border-[#e0dbd4] bg-[#faf9f7] px-4 py-3 text-sm text-[#262626] placeholder:text-[#aaa]"
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-semibold text-[#4a4a4a] uppercase tracking-wider">Property Type</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="premium-input rounded-[10px] border border-[#e0dbd4] bg-[#faf9f7] px-4 py-3 text-sm text-[#262626]"
                    >
                      <option value="">Select Type</option>
                      <option>Residential Flat</option>
                      <option>Plot</option>
                      <option>Villa / Duplex</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-semibold text-[#4a4a4a] uppercase tracking-wider">Budget Range</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="premium-input rounded-[10px] border border-[#e0dbd4] bg-[#faf9f7] px-4 py-3 text-sm text-[#262626]"
                    >
                      <option value="">Select Budget</option>
                      <option>Under ₹50 Lakh</option>
                      <option>₹50L – ₹1 Cr</option>
                      <option>₹1 Cr – ₹2 Cr</option>
                      <option>Above ₹2 Cr</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-semibold text-[#4a4a4a] uppercase tracking-wider">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you're looking for…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="premium-input rounded-[10px] border border-[#e0dbd4] bg-[#faf9f7] px-4 py-3 text-sm text-[#262626] placeholder:text-[#aaa] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="glow-btn mt-2 w-full rounded-[12px] bg-[#bf9460] py-4 text-[14px] font-bold text-white"
                >
                  Send Enquiry — Get a Call Within 2 Hours ↗
                </button>
                <p className="text-center text-[11px] text-[#aaa]">
                  No spam. Your data is safe with us. ✓
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
