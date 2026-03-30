"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function LeadCapture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden" ref={ref}>
      <div className="site-container">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* Left Side: Impactful Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-10 bg-gold" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-emerald">Exclusive Advisory</span>
              </div>
              
              <h2 className="cinematic-heading text-5xl md:text-7xl lg:text-8xl text-emerald mb-12">
                Let's Discuss <br />
                <span className="font-serif italic font-normal text-gold">Your Legacy.</span>
              </h2>

              <div className="space-y-10">
                <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full bg-emerald/5 flex-center text-emerald border border-emerald/10 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                    📞
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Direct Advisory</p>
                    <p className="text-xl font-medium text-emerald">+91 999 000 0000</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full bg-emerald/5 flex-center text-emerald border border-emerald/10 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                    ✉️
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Electronic Mail</p>
                    <p className="text-xl font-medium text-emerald">private@rastogi.luxury</p>
                  </div>
                </div>
              </div>

              {/* Founder Quote (Human Feel) */}
              <div className="mt-20 p-8 border-l-4 border-gold bg-slate-50 relative">
                <p className="text-lg italic text-slate-600 font-light leading-relaxed">
                  "Real estate is the most tangible path to building a lasting legacy. We don't just sell plots; we architect generational wealth."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald text-white flex-center font-serif text-sm">R</div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald">S.K. Rastogi — MD</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Sophisticated Form */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative"
            >
              {/* Decorative Blur Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-[100px] -z-10 rounded-full" />

              <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald/60">Full Name</label>
                      <input type="text" className="text-input" placeholder="Alexander Hamilton" />
                    </div>
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald/60">Contact Number</label>
                      <input type="tel" className="text-input" placeholder="+91 000 000 0000" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald/60">Email Address</label>
                    <input type="email" className="text-input" placeholder="alexander@legacy.com" />
                  </div>

                  <div className="flex flex-col gap-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald/60">Portfolio Interest</label>
                    <div className="flex flex-wrap gap-3">
                      {["Residential Portfolio", "Commercial Assets", "Premium Plots", "Investment Advisory"].map((tag) => (
                        <button 
                          key={tag}
                          className="px-6 py-2.5 rounded-full border border-slate-100 text-[10px] font-bold uppercase tracking-widest hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald/60">Your Vision (Optional)</label>
                    <textarea rows={4} className="text-input resize-none" placeholder="Describe your investment objectives..." />
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="btn-base btn-primary w-full group py-6">
                    Check Exclusive Inventory
                    <span className="ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">→</span>
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
