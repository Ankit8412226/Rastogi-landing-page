"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const investmentTips = [
  { label: "Ann. Returns", value: "24%", desc: "Average ROI across Noida Expressway prime sectors." },
  { label: "Capital Growth", value: "180%", desc: "Typical 5-year appreciation for strategic plots." },
  { label: "Rent Yield", value: "6.5%", desc: "Stable yields from high-end commercial portfolios." },
  { label: "Tax Benefits", value: "80C", desc: "Unlock exclusive section-based investment savings." },
];

export default function Investment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="investment" className="section-padding bg-[#04241b] text-white relative w-full overflow-hidden" ref={ref}>
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-emerald/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="site-container flex flex-col items-center">
        
        {/* Header - Centered and Symmetric */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 py-2 px-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Investment Intelligence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="cinematic-heading text-4xl md:text-6xl text-white"
          >
            Predictable <span className="font-serif italic font-normal text-gold">Wealth</span> Generation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base md:text-lg text-white/40 max-w-2xl font-light leading-relaxed"
          >
            Real estate is the ultimate wealth preservation tool. Our advisory specializes in identifying high-growth assets that deliver consistent, risk-adjusted returns.
          </motion.p>
        </div>

        {/* Investment Grid - Symmetric 4-Column Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-px md:bg-white/5 md:border md:border-white/10 md:rounded-[40px] overflow-hidden">
          {investmentTips.map((tip, idx) => (
            <motion.div
              key={tip.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="flex flex-col items-center text-center p-14 md:p-16 hover:bg-white/5 transition-all group border border-white/5 md:border-none rounded-[32px] md:rounded-none"
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 group-hover:text-gold transition-colors">{tip.value}</span>
              <h3 className="text-sm md:text-xs font-bold uppercase tracking-[0.3em] text-gold/60 mb-6 group-hover:text-gold transition-colors">{tip.label}</h3>
              <p className="text-sm text-white/30 leading-relaxed font-light transition-colors group-hover:text-white/60">
                {tip.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Investor Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/20">Trust the Numbers</p>
          <a href="#contact" className="btn-base btn-primary shadow-2xl">
            Download 2025 Market Forecast
          </a>
        </motion.div>
      </div>
    </section>
  );
}
