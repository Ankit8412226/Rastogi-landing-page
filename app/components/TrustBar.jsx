"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
  { name: "RE/MAX Elite", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/REMAX_Logo.svg" },
  { name: "Sotheby's", img: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Sotheby%27s_Logo.svg" },
  { name: "Knight Frank", img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Knight_Frank_logo.svg1248037380.svg" },
  { name: "Colliers", img: "https://upload.wikimedia.org/wikipedia/commons/0/02/Colliers_International_Logo.svg" },
  { name: "JLL", img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/JLL_logo.svg" },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trust" className="section-padding bg-white w-full border-b border-gray-100" ref={ref}>
      <div className="site-container flex flex-col items-center">
        
        {/* Symmetric Centered Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-4 mb-20 max-w-2xl mx-auto"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald">Global Network & Partnerships</span>
          <h3 className="text-3xl md:text-5xl font-serif italic font-light text-emerald underline decoration-gold underline-offset-12">
            Trusted by the <span className="font-bold underline-none">World's Elite</span> Real Estate Leaders
          </h3>
        </motion.div>

        {/* Partners Grid - Symmetric 5-Column Centered */}
        <div className="w-full flex flex-wrap items-center justify-between md:justify-center gap-12 md:gap-16 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="flex-center w-[120px] md:w-[150px] lg:w-[180px] h-12 md:h-16 flex-center"
            >
              <img src={partner.img} alt={partner.name} className="w-full h-full object-contain filter brightness-0" />
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Link Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-4 py-3 px-8 bg-gold/5 border border-gold/20 rounded-full text-gold font-bold text-[10px] uppercase tracking-widest text-center"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse" />
          Rastogi Properties is the Official India Advisory Partner for 2025 International Expo
        </motion.div>
      </div>
    </section>
  );
}
