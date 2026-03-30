"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Portfolio Management",
    desc: "Strategic restructuring and management of your multi-asset real estate portfolio for maximum yield and risk mitigation.",
    icon: "📁",
  },
  {
    title: "Bespoke Acquisitions",
    desc: "Targeted sourcing of off-market luxury units, high-value agricultural plots, and strategic commercial land parcels.",
    icon: "🎯",
  },
  {
    title: "Elite Legal Advisory",
    desc: "Specialized due diligence, RERA compliance verification, and seamless property registration management.",
    icon: "⚖️",
  },
  {
    title: "International Resale",
    desc: "A global marketing engine specialized in the high-velocity liquidation of premium assets for global HNI clients.",
    icon: "🌐",
  },
];

export default function LuxuryConcierge() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-white relative w-full" ref={ref}>
      <div className="site-container flex flex-col items-center">
        
        {/* Header - Centered and Symmetric */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald">Luxury Real Estate Concierge</span>
            <span className="h-px w-8 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="cinematic-heading text-4xl md:text-6xl text-emerald"
          >
            Your Private <span className="font-serif italic font-normal text-gold">Advisory</span> Engine
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base md:text-lg text-slate-500 max-w-2xl font-light leading-relaxed"
          >
            We go beyond property transactions. Our bespoke concierge services ensure your investment lifecycle is managed with unparalleled precision and elite discretion.
          </motion.p>
        </div>

        {/* Services Grid - Symmetric 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-px md:bg-gray-50 md:border md:border-gray-100 md:rounded-[40px] overflow-hidden w-full">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="flex flex-col items-center text-center p-14 md:p-16 hover:bg-emerald hover:text-white transition-all group border border-gray-100 md:border-none rounded-[32px] md:rounded-none cursor-default"
            >
              <div className="w-20 h-20 flex-center bg-white border border-gray-100 rounded-3xl mb-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold/10 group-hover:border-gold/30">
                <span className="text-4xl grayscale group-hover:grayscale-0 transition-transform">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-emerald group-hover:text-white transition-colors mb-6">{service.title}</h3>
              <p className="text-sm md:text-base text-slate-500 group-hover:text-white/60 leading-relaxed font-light line-clamp-4 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Concierge Link Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <a href="#contact" className="btn-base btn-primary shadow-2xl">
            Request Private Consultation
          </a>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]/60">Confidentiality Assured.</span>
        </motion.div>
      </div>
    </section>
  );
}
