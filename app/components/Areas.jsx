"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const areas = [
  {
    name: "Yamuna Expressway",
    tagline: "The Future of Aviation & Tech",
    price: "INR 1.85 Cr onwards",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    stats: "240% Growth (5Y)",
  },
  {
    name: "Noida Expressway",
    tagline: "Institutional Hub & Elite Corridors",
    price: "INR 3.20 Cr onwards",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    stats: "18% CAGR",
  },
  {
    name: "Greater Noida West",
    tagline: "Connectivity & Modern Infrastructure",
    price: "INR 1.45 Cr onwards",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    stats: "140+ Projects",
  },
];

export default function Areas() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="areas" className="section-padding bg-white w-full" ref={ref}>
      <div className="site-container">
        
        {/* Header Section - Centered and Symmetric */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald">Strategic Locations</span>
            <span className="h-px w-8 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="cinematic-heading text-4xl md:text-6xl text-emerald"
          >
            Regional <span className="font-serif italic font-normal text-gold">Focus</span> & Market Dominance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base md:text-lg text-slate-500 max-w-2xl font-light"
          >
            We focus exclusively on the highest growth corridors in North India, providing our clients with unprecedented market alpha and capital appreciation potential.
          </motion.p>
        </div>

        {/* Areas Grid - Symmetric 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
          {areas.map((area, idx) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2, duration: 1 }}
              className="group relative cursor-pointer h-[500px] md:h-[600px] rounded-[32px] overflow-hidden flex flex-col justify-end p-10 md:p-14 border border-gray-100 shadow-xl"
            >
              {/* Background Image with Scale Zoom */}
              <div className="absolute inset-0">
                <img
                  src={area.image}
                  alt={area.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald/90 via-emerald/40 to-transparent transition-opacity opacity-80 group-hover:opacity-95" />
              </div>

              {/* Textual Details - Centered Symmetrically */}
              <div className="relative z-10 flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-2">{area.tagline}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 transition-transform group-hover:translate-x-2 transition-all">{area.name}</h3>
                <div className="flex items-center gap-6 py-4 border-t border-white/20 w-full mt-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest text-white/40">Starting Price</span>
                    <span className="text-sm font-bold text-white">{area.price}</span>
                  </div>
                  <div className="flex flex-col pl-6 border-l border-white/10">
                    <span className="text-[9px] uppercase tracking-widest text-white/40">Growth Stat</span>
                    <span className="text-sm font-bold text-gold">{area.stats}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <a href="#contact" className="btn-base btn-primary">
            Request Regional Report (2025)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
