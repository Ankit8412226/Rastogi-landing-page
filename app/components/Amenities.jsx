"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const amenities = [
  { name: "Sky Lounges", icon: "🏙️", desc: "Panoramic views from infinity-edge rooftop retreats." },
  { name: "Private Cinema", icon: "🎬", desc: "Ultra-luxury 4K theaters for the ultimate screening experience." },
  { name: "Smart Security", icon: "🔒", desc: "Biometric and AI-driven 24/7 elite protection systems." },
  { name: "Wellness Spa", icon: "💆", desc: "World-class therapeutic centers and holistic healing spaces." },
  { name: "Concierge 24/7", icon: "🛎️", desc: "Dedicated lifestyle managers for your every personalized need." },
  { name: "Olympic Pool", icon: "🏊", desc: "Temperature-controlled swimming for the elite athlete." },
];

export default function Amenities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="section-padding bg-white relative w-full overflow-hidden" ref={ref}>
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
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald">Beyond Just Homes</span>
            <span className="h-px w-8 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="cinematic-heading text-4xl md:text-6xl text-emerald"
          >
            World-Class <span className="font-serif italic font-normal text-gold">Amenities</span> & Lifestyle
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base md:text-lg text-slate-500 max-w-2xl font-light"
          >
            Every property in our curated collection grants you access to resort-style living, ensuring your downtime is as exceptional as your work.
          </motion.p>
        </div>

        {/* Amenities Grid - Symmetric 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
          {amenities.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group p-10 md:p-14 bg-[#f8faf9] border border-gray-100 rounded-[32px] hover:bg-emerald hover:border-emerald hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 flex-center bg-white border border-gray-100 rounded-3xl mb-8 group-hover:scale-110 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                <span className="text-4xl grayscale group-hover:grayscale-0 transition-transform">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-emerald group-hover:text-white transition-colors mb-4">{item.name}</h3>
              <p className="text-sm md:text-base text-slate-500 group-hover:text-white/60 leading-relaxed font-light line-clamp-3">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Link Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex justify-center w-full"
        >
          <a href="#contact" className="btn-base btn-primary shadow-2xl">
            View All Features & Facilities
          </a>
        </motion.div>
      </div>
    </section>
  );
}
