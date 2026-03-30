"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function AboutBrand() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="brand" ref={containerRef} className="section-padding bg-white overflow-hidden w-full">
      <div className="site-container flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald">The Brand Story</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="cinematic-heading text-4xl md:text-5xl lg:text-7xl text-emerald mb-8 leading-[1.1]"
          >
            Building <br />
            <span className="font-serif italic font-normal text-gold">Generational Wealth</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl"
          >
            <p>
              Founded in 2007, Rastogi Properties emerged with a singular vision: to bring unprecedented transparency, elegance, and return on investment to the Greater Noida real estate market.
            </p>
            <p>
              We recognize that fine real estate is not merely a transaction; it is a vital cornerstone of your portfolio and a sanctuary for your family. Our team of elite negotiators and market analysts specialize strictly in Grade-A developments across Noida Expressway and the upcoming Jewar Airport region.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-emerald flex-center text-white font-serif text-2xl shadow-xl">
              R
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-emerald">S.K. Rastogi</p>
              <p className="text-xs font-medium text-gold">Founder & Managing Director</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Image with Experience Badge */}
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[500px]"
          >
            {/* Main Image Container */}
            <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl border-4 border-gold/10">
              <img
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=1000&q=80"
                alt="Elite Real Estate Advisory"
                className="w-full h-full object-cover"
              />
              {/* Gold gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald/40 to-transparent" />
            </div>

            {/* Experience Badge - Balanced & Symmetric */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -left-8 md:-left-12 bottom-12 bg-[#04241b] text-white p-8 md:p-10 rounded-[24px] shadow-2xl border border-white/5 z-20 flex flex-col items-center"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-bold text-gold">18</span>
                <span className="text-xl md:text-2xl font-bold text-gold">+</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 whitespace-nowrap">Years of Excellence</span>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-12 left-0 w-32 h-32 bg-emerald/10 rounded-full blur-[60px]" />
        </div>
      </div>
    </section>
  );
}
