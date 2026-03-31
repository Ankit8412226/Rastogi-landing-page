"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

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

        {/* Properties Grid - Cleaner card hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 w-full">
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
              className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[2rem] border border-emerald/10 bg-white shadow-[0_20px_55px_rgba(6,78,59,0.08)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#04241b]">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#04241b]/82 via-[#04241b]/20 to-transparent" />

                <div className="absolute left-5 top-5 px-4 py-2 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/20 shadow-lg">
                  {property.tag}
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <div>
                    <p className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">
                      <MapPin className="h-3.5 w-3.5 text-gold" />
                      {property.location}
                    </p>
                    <h3 className="max-w-[15ch] text-2xl font-bold leading-tight text-white">
                      {property.title}
                    </h3>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-gold group-hover:border-gold">
                    <ArrowUpRight className="h-4 w-4 text-white transition-colors duration-300 group-hover:text-[#04241b]" />
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-emerald/45">
                      Starting from
                    </p>
                    <p className="text-2xl font-bold text-emerald">{property.price}</p>
                  </div>
                  <div className="rounded-full border border-gold/20 bg-gold/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                    Featured
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-emerald/10 pt-4">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald">
                    Explore Property
                  </span>
                  <span className="text-sm font-semibold text-slate-400 transition-colors duration-300 group-hover:text-gold">
                    Private tour
                  </span>
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
