"use client";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState } from "react";

const contactDetails = [
  { icon: MapPin, label: "Greater Noida & NCR" },
  { icon: Phone, label: "+91 98765 43210" },
  { icon: Mail, label: "info@rastogiproperties.in" },
  { icon: Clock, label: "Mon–Sat, 9AM–7PM" },
];

const socials = [
  { label: "IG" },
  { label: "LI" },
  { label: "TW" },
  { label: "YT" },
];

export default function LeadForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", type: "", budget: "", message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all duration-300";

  const labelClass =
    "block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1.5";

  return (
    <section id="contact" ref={ref} className="section-padding bg-[#04241b] w-full">
      <div className="site-container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <div className="flex items-center gap-3 py-2 px-5 bg-white/5 border border-white/10 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Free Consultation</span>
          </div>
          <h2 className="cinematic-heading text-4xl md:text-6xl text-white">
            Let's Find Your{" "}
            <span className="font-serif italic font-normal text-gold">Dream</span> Property
          </h2>
          <p className="text-white/40 text-base max-w-xl font-light">
            Talk to our expert advisors today. No obligation, zero pressure — just the right guidance.
          </p>
        </motion.div>

        {/* Main Card */}
        <div className="grid lg:grid-cols-[1fr_1.6fr] rounded-[32px] overflow-hidden border border-white/8"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >

          {/* ── Left Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative p-10 md:p-14 flex flex-col justify-between overflow-hidden"
            style={{ background: "linear-gradient(160deg, #0a3d26 0%, #04241b 60%)" }}
          >
            {/* Decorative orb */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gold/8 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-emerald/10 blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              {/* Tag */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Get In Touch</span>
              </div>

              {/* Heading */}
              <h3 className="text-3xl md:text-4xl font-black text-white leading-[1.1] tracking-tight mb-4">
                Ready to Start<br />
                <span className="font-serif italic font-normal text-gold">Your Journey?</span>
              </h3>
              <p className="text-white/45 text-sm leading-relaxed font-light mb-10 max-w-xs">
                Our advisors have helped 2,400+ families find their perfect home across NCR.
              </p>

              {/* Contact Details */}
              <div className="flex flex-col gap-5">
                {contactDetails.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-4 group">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-300">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors duration-300">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="relative z-10 flex items-center gap-3 mt-12">
              {socials.map(({ label }) => (
                <button
                  key={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/40 hover:border-gold/40 hover:text-gold hover:bg-gold/10 transition-all duration-300"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── Right Form Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-10 md:p-14"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-5 py-10"
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Enquiry Received!</h3>
                  <p className="text-white/45 text-sm leading-relaxed max-w-xs">
                    Our expert advisor will call you within 2 hours. Check your WhatsApp too!
                  </p>
                </div>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/25 rounded-full text-gold text-[10px] font-bold uppercase tracking-widest hover:bg-gold/20 transition-all duration-300"
                >
                  Submit Another <ArrowUpRight className="w-3 h-3" />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="mb-2">
                  <h3 className="text-xl font-black text-white mb-1">Book a Free Consultation</h3>
                  <p className="text-white/35 text-xs">Fill in your details — we'll do the rest.</p>
                </div>

                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text" required placeholder="Ankit Kumar"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone *</label>
                    <input
                      type="tel" required placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email" placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {/* Type + Budget */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Property Type</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className={inputClass}
                      style={{ appearance: "none" }}
                    >
                      <option value="" style={{ background: "#04241b" }}>Select Type</option>
                      <option style={{ background: "#04241b" }}>Residential Flat</option>
                      <option style={{ background: "#04241b" }}>Plot</option>
                      <option style={{ background: "#04241b" }}>Villa / Duplex</option>
                      <option style={{ background: "#04241b" }}>Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Budget Range</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className={inputClass}
                      style={{ appearance: "none" }}
                    >
                      <option value="" style={{ background: "#04241b" }}>Select Budget</option>
                      <option style={{ background: "#04241b" }}>Under ₹50 Lakh</option>
                      <option style={{ background: "#04241b" }}>₹50L – ₹1 Cr</option>
                      <option style={{ background: "#04241b" }}>₹1 Cr – ₹2 Cr</option>
                      <option style={{ background: "#04241b" }}>Above ₹2 Cr</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    rows={3} placeholder="Tell us what you're looking for…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-1 w-full flex items-center justify-center gap-3 py-4 bg-gold hover:brightness-110 active:scale-[0.99] text-white font-extrabold text-[11px] uppercase tracking-[0.25em] rounded-xl transition-all duration-300"
                >
                  Send Enquiry — Get a Call Within 2 Hours
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[10px] text-white/20 tracking-wider">
                  No spam. Your data is safe with us.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
