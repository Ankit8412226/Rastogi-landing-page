"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function LeadCapture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden" ref={ref}>
      <div className="site-container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* ── Left Side ── */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-gold shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-emerald">Exclusive Advisory</span>
              </div>

              {/* Heading */}
              <h2 className="cinematic-heading text-5xl md:text-6xl lg:text-7xl text-emerald leading-[0.95] mb-12">
                Let's Discuss <br />
                <span className="font-serif italic font-normal text-gold">Your Legacy.</span>
              </h2>

              {/* Contact Items */}
              <div className="flex flex-col gap-10 mb-10">
                {[
                  { icon: "📞", tag: "Direct Advisory", value: "+91 999 000 0000" },
                  { icon: "✉️", tag: "Electronic Mail", value: "private@rastogi.luxury" },
                ].map(({ icon, tag, value }) => (
                  <div key={tag} className="flex items-center gap-5 group">
                    <div className="w-11 h-11 rounded-full bg-emerald/5 flex items-center justify-center border border-emerald/10 group-hover:bg-gold group-hover:border-gold transition-all duration-500 shrink-0 text-lg">
                      {icon}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{tag}</p>
                      <p className="text-lg font-medium text-emerald leading-tight">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Founder Quote */}
              <div className="p-7 border-l-4 border-gold bg-slate-50 rounded-r-2xl mt-4">
                <p className="text-base italic text-slate-500 font-light leading-relaxed mb-5 mt-5">
                  "Real estate is the most tangible path to building a lasting legacy. We don't just sell plots; we architect generational wealth."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald text-white flex items-center justify-center font-serif text-sm shrink-0">
                    R
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald">
                    S.K. Rastogi — MD
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right Side: Form ── */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-[100px] -z-10 rounded-full pointer-events-none" />

              <form className="flex flex-col gap-7" onSubmit={(e) => e.preventDefault()}>

                {/* Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald/60">Full Name</label>
                    <input type="text" className="text-input" placeholder="Alexander Hamilton" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald/60">Contact Number</label>
                    <input type="tel" className="text-input" placeholder="+91 000 000 0000" />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald/60">Email Address</label>
                  <input type="email" className="text-input" placeholder="alexander@legacy.com" />
                </div>

                {/* Portfolio Tags */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald/60">Portfolio Interest</label>
                  <div className="flex flex-wrap gap-2.5">
                    {["Residential Portfolio", "Commercial Assets", "Premium Plots", "Investment Advisory"].map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        className="px-5 py-2 rounded-full border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald/60">Your Vision (Optional)</label>
                  <textarea
                    rows={4}
                    className="text-input resize-none"
                    placeholder="Describe your investment objectives..."
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button type="submit" className="btn-base btn-primary w-full group py-5">
                    Check Exclusive Inventory
                    <span className="ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 inline-block">→</span>
                  </button>
                </div>

                <p className="text-center text-[9px] uppercase tracking-[0.3em] text-slate-400">
                  Your data is protected by Grade-A encryption & privacy protocols.
                </p>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
