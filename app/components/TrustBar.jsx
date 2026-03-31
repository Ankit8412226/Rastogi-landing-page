"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "RE/MAX Elite", short: "RE/MAX", sub: "Elite Partner" },
  { name: "Sotheby's", short: "Sotheby's", sub: "Auction House" },
  { name: "Knight Frank", short: "Knight Frank", sub: "Global Advisory" },
  { name: "Colliers", short: "Colliers", sub: "International" },
  { name: "JLL", short: "JLL", sub: "Global Real Estate" },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="trust"
      className="section-padding bg-white w-full border-b border-gray-100"
      ref={ref}
    >
      <div className="site-container flex flex-col items-center gap-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center gap-4 max-w-2xl"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald">
            Global Network & Partnerships
          </span>
          <h3 className="text-3xl md:text-5xl font-serif font-light italic text-emerald leading-snug">
            Trusted by the{" "}
            <span className="font-bold not-italic">World's Elite</span>
            <br />Real Estate Leaders
          </h3>
          <div className="w-12 h-[2px] bg-gold rounded-full mt-1" />
        </motion.div>

        {/* Partners Row */}
        <div className="w-full border-y border-gray-100 divide-x divide-gray-100 flex flex-wrap items-stretch justify-center">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center gap-2 px-8 py-10 group hover:bg-gray-50 transition-colors duration-300 flex-1 min-w-[140px]"
            >
              {/* FIX: default me gray-700 (clearly visible), hover pe emerald */}
              <span className="text-base md:text-lg font-bold text-gray-700 group-hover:text-emerald transition-colors duration-300 tracking-tight whitespace-nowrap">
                {partner.short}
              </span>
              {/* FIX: default me gray-400 (visible), hover pe gold */}
              <span className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-gold transition-colors duration-300">
                {partner.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Badge */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : {}}
  transition={{ delay: 0.8, duration: 0.8 }}
  className="flex items-center gap-2 py-2 px-5 bg-gold/5 border border-gold/25 rounded-full"
>
  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
  <span className="text-[10px] font-bold uppercase tracking-widest text-gold/80">
    Official India Advisory Partner — 2025 International Expo
  </span>
</motion.div>

      </div>
    </section>
  );
}
