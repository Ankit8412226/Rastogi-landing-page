"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const properties = [
  {
    id: 1,
    title: "Yamuna Expressway Plots",
    location: "Sector 18, 20 & 22",
    tag: "Investment High-Yield",
    price: "INR 2.45 Cr onwards",
    image: "/images/property_1.png",
  },
  {
    id: 2,
    title: "Luxury Villas & Floors",
    location: "Noida Expressway, Sector 150",
    tag: "Residential",
    price: "INR 3.80 Cr onwards",
    image: "/images/property_2.png",
  },
  {
    id: 3,
    title: "High-End Office Spaces",
    location: "Advant Navis, Greater Noida West",
    tag: "Commercial",
    price: "INR 1.20 Cr onwards",
    image: "/images/property_3.png",
  },
];

export default function Properties() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="properties" className="section-padding bg-[#f8faf9] w-full" ref={ref}>
      <div className="site-container">
        
        {/* Header Section - Centered and Symmetric */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald">Exclusive Residences</span>
            <span className="h-px w-8 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="cinematic-heading text-4xl md:text-6xl text-emerald max-w-3xl"
          >
            Curated <span className="font-serif italic font-normal text-gold">Spaces</span> for Elite Living
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base md:text-lg text-slate-500 max-w-2xl font-light"
          >
            From ultra-luxury villas to strategic commercial assets, we represent only the most distinguished property portfolios in North India.
          </motion.p>
        </div>

        {/* Properties Grid - Symmetric Using Flex and Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
          {properties.map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative cursor-pointer flex flex-col w-full"
            >
              {/* Image Container with Hover Zoom and Deep Shadow */}
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl mb-8 bg-[#04241b] transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(212,175,55,0.15)] group-hover:-rotate-1">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Floating Tag - Glass Effect */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/20 shadow-lg">
                  {property.tag}
                </div>

                {/* Visual Overlay Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald/90 via-emerald/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Textual Details - Subtle Alignment Shift */}
              <div className="flex flex-col gap-2 transition-transform duration-500 group-hover:translate-x-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{property.location}</span>
                <h3 className="text-3xl font-bold text-emerald transition-colors group-hover:text-gold">{property.title}</h3>
                <p className="text-sm font-semibold text-slate-400 mt-2">{property.price}</p>
                <div className="mt-8 flex items-center gap-4 text-emerald font-bold text-xs uppercase tracking-widest border-b border-emerald/10 pb-2 w-max transition-all group-hover:gap-6 group-hover:border-gold">
                  Explore Heritage
                  <span className="text-gold text-lg transition-transform group-hover:translate-x-3">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <a href="#properties" className="btn-base btn-primary">
            Explore All Listings
          </a>
        </motion.div>
      </div>
    </section>
  );
}
