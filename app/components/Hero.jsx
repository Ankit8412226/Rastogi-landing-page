"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, MapPin, Building2, TrendingUp, ArrowRight } from "lucide-react";

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

  const [activeCategory, setActiveCategory] = useState("Residential");

  return (
    <section ref={containerRef} className="relative min-h-[120vh] flex items-center bg-[#051a14] overflow-hidden pt-40 pb-32">
      {/* Decorative Brand Text (Minimalist) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 select-none pointer-events-none opacity-[0.02]">
        <span className="text-[20rem] font-serif font-black tracking-tighter text-white whitespace-nowrap">RASTOGI</span>
      </div>

      <div className="site-container relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 items-center">
          
          {/* Left Column: Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start pt-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-gold/50" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.5em] text-gold">NCR's Definitive Luxury Advisory</span>
            </motion.div>

            <div className="overflow-hidden mb-16">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="cinematic-heading text-6xl md:text-8xl lg:text-[8rem] text-white leading-[0.9] tracking-tightest text-left"
              >
                Curating <br />
                <span className="font-serif italic font-normal text-gold block mt-3">Legacy</span> Spaces
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-white/40 text-lg max-w-xl mb-20 leading-relaxed font-light tracking-wide text-left"
            >
              Strategic advisory for high-yield commercial assets and elite residencial estates in the heart of Greater Noida.
            </motion.p>

            {/* Senior Search Hub */}
            <div className="w-full max-w-3xl mb-16 pr-6">
              <div className="flex gap-1 p-1 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8 w-fit">
                {["Residential", "Commercial", "Plots"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-10 py-3.5 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap ${
                      activeCategory === cat ? "bg-gold text-white shadow-gold" : "text-white/30 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-3 flex flex-col md:flex-row items-center gap-3 shadow-2xl">
                <div className="flex-1 flex items-center gap-5 pl-8 py-3 md:py-0 w-full">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-gold" />
                  </div>
                  <input
                    type="text"
                    placeholder={`Search premium ${activeCategory.toLowerCase()}...`}
                    className="w-full bg-transparent border-none text-white focus:outline-none placeholder:text-white/20 text-sm font-medium uppercase tracking-widest"
                  />
                </div>
                
                <div className="hidden md:block w-px h-10 bg-white/10" />
                
                <div className="flex items-center gap-3 px-6 py-3 md:py-0 text-white/50 hover:text-white cursor-pointer transition-all duration-300 group/loc">
                  <MapPin className="w-4 h-4 group-hover/loc:text-gold transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Greater Noida</span>
                </div>
                
                <button className="btn-base btn-primary !rounded-full !px-16 !py-6 shadow-gold group/btn hover:scale-[1.02] active:scale-95 duration-500">
                   Find Property
                </button>
              </div>
            </div>

            {/* Social Trust */}
            <div className="flex items-center gap-10">
              {stats.slice(0, 3).map((stat, i) => (
                <div key={i} className="flex flex-col border-l border-white/10 pl-6">
                  <span className="text-2xl font-bold text-white mb-1">{stat.value}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image (5 cols) */}
          <div className="lg:col-span-5 relative group lg:pr-10">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/5"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Real Estate"
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#051a14]/60 via-transparent to-transparent opacity-60" />
              
              {/* Image Floating Label */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[88%] p-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                 <div className="flex justify-between items-center gap-8">
                    <div className="flex-1">
                       <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold block mb-2">Featured Project</span>
                       <span className="text-2xl font-black text-white leading-tight">The Legacy Estate</span>
                    </div>
                    <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center shrink-0 shadow-gold hover:scale-110 transition-transform duration-500">
                       <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                 </div>
              </div>
            </motion.div>
            
            {/* Background Decorative Frame */}
            <div className="absolute -inset-2 border border-gold/10 rounded-[3.2rem] -z-10 lg:mr-10 group-hover:scale-[1.02] transition-transform duration-1000" />
          </div>

        </div>
      </div>
    </section>
  );
}
