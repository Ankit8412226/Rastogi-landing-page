"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FullWidthCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="relative section-padding bg-[#041a14] text-white overflow-hidden py-32"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#041a14]/90 via-[#041a14]/60 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80"
          alt="Premium Architecture"
          className="w-full h-full object-cover opacity-20 grayscale brightness-110"
        />
      </div>

      <div className="site-container relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-gold/80">Investor Spotlight</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="cinematic-heading text-5xl md:text-7xl mb-12 leading-tight"
          >
            Seize the <span className="font-serif italic font-normal text-gold underline decoration-gold/30 underline-offset-16">Future</span> of <br />
            Greater Noida Real Estate
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base md:text-xl text-white/50 max-w-2xl mb-14 leading-relaxed font-light"
          >
            Exclusive off-market inventory and strategic advisory for those who refuse to compromise on quality and growth. Secure your legacy today before the 2025 regional price correction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 items-center"
          >
            <a href="#contact" className="btn-base btn-primary px-16 shadow-2xl">
              Request VIP Briefing
            </a>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]/60">Member Direct</span>
              <span className="text-lg font-bold text-white uppercase tracking-tight">+91 999 000 0000</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Gold Rings */}
      <div className="absolute top-1/2 right-[-200px] -translate-y-1/2 w-[600px] h-[600px] border border-gold/10 rounded-full select-none pointer-events-none" />
      <div className="absolute top-1/2 right-[-150px] -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full rotate-45 select-none pointer-events-none" />
    </section>
  );
}
