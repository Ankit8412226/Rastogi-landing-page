"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { label: "Years of Trust", value: "18+" },
  { label: "Happy Families", value: "2400+" },
  { label: "Projects Done", value: "340+" },
  { label: "Satisfaction", value: "96%" },
];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-[#041a14] overflow-hidden">
      {/* Background with Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#041a14]/60 via-[#041a14]/20 to-[#041a14] z-10" />
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Premium Architecture"
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      <div className="site-container relative z-20 flex flex-col items-center text-center">
        {/* Subtitle Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-8 bg-gold/50" />
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-gold/80">The Pinnacle of NCR Real Estate</span>
          <span className="h-px w-8 bg-gold/50" />
        </motion.div>

        {/* Main Heading with Staggered Reveal */}
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="cinematic-heading text-6xl md:text-8xl lg:text-[10rem] text-white leading-[0.9] max-w-6xl tracking-tightest"
          >
            Curating <br />
            <span className="font-serif italic font-normal text-gold block mt-4">Legacy</span> Spaces
          </motion.h1>
        </div>

        {/* Body Text and CTA Grouped for Rhythm */}
        <div className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-base md:text-xl text-white/50 max-w-2xl mb-16 leading-relaxed font-light tracking-wide"
          >
            Greater Noida's premier advisory for visionary investors. High-yield commercial assets, distinguished plots, and elite residences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row gap-10"
          >
            <a href="#properties" className="btn-base btn-primary">
              View Collection
            </a>
            <a href="#contact" className="btn-base btn-outline">
              Private Advisory
            </a>
          </motion.div>
        </div>

        {/* Stats Grid - Centered Symmetrically */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden rounded-lg"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-8 border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors">
              <span className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]/60 text-center">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements (Subtle) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce opacity-40">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
}
