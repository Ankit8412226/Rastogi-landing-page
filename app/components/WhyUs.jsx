"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    title: "18+ Years",
    desc: "A legacy of trust, excellence, and thousands of successful acquisitions across North India.",
    icon: "🏆",
  },
  {
    title: "Elite Network",
    desc: "Unmatched access to off-market inventory and direct developer relationships.",
    icon: "🤝",
  },
  {
    title: "Market Alpha",
    desc: "Proprietary research and data-driven insights for strategic wealth generation.",
    icon: "📈",
  },
  {
    title: "Concierge Service",
    desc: "End-to-end advisory from site selection and legal due diligence to registry and beyond.",
    icon: "✨",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-[#04241b] text-white relative overflow-hidden w-full" ref={ref}>
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="site-container relative z-10 flex flex-col items-center">
        
        {/* Header Section - Symmetric and Centered */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 py-2 px-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">The Rastogi Advantage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="cinematic-heading text-4xl md:text-6xl text-white"
          >
            Why Choose Our <span className="font-serif italic font-normal text-gold">Advisory?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base md:text-lg text-white/50 font-light max-w-2xl"
          >
            We don't just sell property; we curate lifelong assets and strategic portfolios for the most discerning investors in the region.
          </motion.p>
        </div>

        {/* Features Grid - Symmetric 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-px md:bg-white/5 md:border md:border-white/10 md:rounded-[40px] overflow-hidden w-full">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="flex flex-col items-center text-center p-10 md:p-14 hover:bg-white/5 transition-all group border border-white/5 md:border-none rounded-[32px] md:rounded-none"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 flex-center bg-white/5 border border-white/10 rounded-3xl mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold/10 group-hover:border-gold/30">
                <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">{feature.icon}</span>
              </div>

              {/* Textual Details */}
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-gold transition-colors">{feature.title}</h3>
              <p className="text-sm md:text-base text-white/40 leading-relaxed font-light line-clamp-4">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA and Trust Marker */}
        <div className="mt-20 flex flex-col items-center gap-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a href="#contact" className="btn-base btn-primary shadow-2xl">
              Schedule Elite Consultation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 1 }}
            className="flex items-center gap-4 py-3 px-8 bg-emerald/30 border border-gold/20 rounded-full text-gold font-bold text-[10px] uppercase tracking-widest text-center"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse" />
            Ranked #1 Elite Advisory by Forbes India (2024 List Candidate)
          </motion.div>
        </div>
      </div>
    </section>
  );
}
